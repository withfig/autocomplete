interface ZSuggestion {
  name: string;
  path: string;
  weight?: number;
  time?: number;
}

async function getZHistory(
  execute: Fig.ExecuteShellCommandFunction
): Promise<ZSuggestion[]> {
  const out = await execute("cat ${${ZSHZ_DATA:-${_Z_DATA:-${HOME}/.z}}:A}");
  return out.split("\n").map((line) => {
    const [path, weight, time] = line.split("|");
    const splitPath = path.split("/");
    const name = splitPath[splitPath.length - 1];
    return {
      name,
      path,
      // Fig should defer assigning priority to z.
      // 75 added to keep args above options.
      // NOTE: 9000 is the default max priority. If a custom value is set this will work if "custom_value <= 9000" but not otherwise
      weight: 75 + (Number(weight) * 25) / 9000,
      time: Number(time),
    };
  });
}

async function getCurrentDirectoryFolders(
  currentWorkingDirectory: string,
  execute: Fig.ExecuteShellCommandFunction
): Promise<ZSuggestion[]> {
  const out = await execute("ls -d */");
  return out.split("\n").map((line) => {
    const name = line.replace("/", "");
    return {
      name,
      path: `${currentWorkingDirectory}/${name}`,
    };
  });
}

function filterHistoryBySearchTerms(
  insertedTerms: string[],
  history: ZSuggestion[]
): ZSuggestion[] {
  const insertedTermsMap = new Set(insertedTerms);
  return history.filter(
    ({ name, path }) =>
      !insertedTermsMap.has(name) &&
      insertedTerms.every((item) => path.includes(item))
  );
}

// https://github.com/rupa/z
const zShCompletionSpec: Fig.Spec = {
  name: "z",
  description: "CLI tool to jump around directories",
  args: {
    name: "directory",
    isVariadic: true,
    isOptional: true,
    generators: {
      custom: async (tokens, execute, context) => {
        const { currentWorkingDirectory } = context;
        const [zHistory, currentFolders] = await Promise.all([
          getZHistory(execute),
          getCurrentDirectoryFolders(currentWorkingDirectory, execute),
        ]);
        // merge z history and current folders and remove duplicates
        const suggestions = [...zHistory, ...currentFolders].reduce<
          ZSuggestion[]
        >((acc, suggestion) => {
          if (!acc.some(({ path }) => path === suggestion.path)) {
            acc.push(suggestion);
          }
          return acc;
        }, []);

        // directory arg is variadic with each subsequent arg being an
        // additional filter. filtered will filter directories by all args.
        const filteredSuggestions = filterHistoryBySearchTerms(
          tokens.filter((arg) => arg && arg !== "z" && !arg.startsWith("-")),
          suggestions
        );
        return filteredSuggestions.map((point) => ({
          name: point.name,
          icon: "📁",
          description: point.path,
          priority: point.weight,
          insertValue: point.name,
          displayName: point.name,
        }));
      },
    },
  },
  options: [
    {
      name: "-c",
      description:
        "Restrict matches to subdirectories of the current directory",
    },
    { name: "-e", description: "Echo the best match, don't cd" },
    { name: "-h", description: "Show a brief help message" },
    { name: "-l", description: "List only" },
    { name: "-r", description: "Match by rank only" },
    { name: "-t", description: "Match by recent access only" },
    {
      name: "-x",
      description: "Remove the current directory from the datafile",
    },
  ],
};

// https://github.com/ajeetdsouza/zoxide
const zoxideCompletionSpec: Fig.Spec = {
  name: "z",
  description: "Smarter cd command, inspired by z and autojump",
  args: {
    name: "directory",
    filterStrategy: "fuzzy",
    suggestCurrentToken: true,
    isVariadic: true,
    generators: {
      custom: async (tokens, executeShellCommand) => {
        console.log(tokens);
        let command;
        if (tokens.length < 2 || tokens[1] === "") {
          command = "zoxide query --list --score";
        } else {
          command = `zoxide query --list --score -- ${tokens
            .slice(1)
            .join(" ")}`;
        }

        console.log(command);
        const out = await executeShellCommand(command);

        return out.split("\n").map((line) => {
          const trimmedLine = line.trim();
          const spaceIndex = trimmedLine.indexOf(" ");
          const score = Number(trimmedLine.slice(0, spaceIndex));
          const path = trimmedLine.slice(spaceIndex + 1);
          return {
            name: path,
            description: `Score: ${score}`,
          };
        });
      },
      trigger: {
        on: "change",
      },
    },
  },
};

const zCompletionSpec: Fig.Spec = {
  name: "z",
  generateSpec: async (_, executeShellCommand) => {
    // Assume if zoxide is installed, use that completion spec
    try {
      const zoxideInstalled = await executeShellCommand("command -v zoxide");
      if (zoxideInstalled.length > 0) {
        return zoxideCompletionSpec;
      }
    } catch (_) {}

    // Otherwise, use the z.sh completion spec
    return zShCompletionSpec;
  },
};

export default zCompletionSpec;
