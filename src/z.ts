interface ZSuggestion {
  name: string;
  path: string;
  weight?: number;
  time?: number;
}

async function getZHistory(
  execute: Fig.ExecuteCommandFunction
): Promise<ZSuggestion[]> {
  const { stdout } = await execute({
    command: "zsh",
    args: ["-c", "cat ${${ZSHZ_DATA:-${_Z_DATA:-${HOME}/.z}}:A}"],
  });
  return stdout.split("\n").map((line) => {
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
  execute: Fig.ExecuteCommandFunction
): Promise<ZSuggestion[]> {
  const { stdout } = await execute({
    command: "bash",
    args: ["-c", "ls -d */"],
  });
  return stdout.split("\n").map((line) => {
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
    generators: {
      custom: async (
        tokens,
        executeShellCommand,
        { currentWorkingDirectory }
      ) => {
        let args;
        if (tokens.length < 2 || tokens[1] === "") {
          args = ["query", "--list", "--score"];
        } else {
          args = [
            "query",
            "--list",
            "--score",
            "--",
            tokens.slice(1).join(" "),
          ];
        }

        const { stdout } = await executeShellCommand({
          command: "zoxide",
          args,
        });

        const zoxideFolders = stdout.split("\n").map((line) => {
          const trimmedLine = line.trim();
          const spaceIndex = trimmedLine.indexOf(" ");
          const score = Number(trimmedLine.slice(0, spaceIndex));
          const fullPath = trimmedLine.slice(spaceIndex + 1);

          const pathSplit = fullPath.split("/");
          const parentFullPath = pathSplit
            .slice(0, pathSplit.length - 1)
            .join("/");
          const folderName = pathSplit.at(-1);

          const folderIsInCwd = currentWorkingDirectory === parentFullPath;
          return {
            name: folderIsInCwd ? folderName : fullPath,
            description: `Score: ${score}`,
            icon: "💾",
            path: fullPath,
            priority: folderIsInCwd ? 9000 : score, // assign highest priority when in cwd
          };
        });

        const cwdFolders = (
          await getCurrentDirectoryFolders(
            currentWorkingDirectory,
            executeShellCommand
          )
        ).map(({ name, path }) => ({
          name,
          description: "Score: 0",
          icon: "📁",
          path,
          priority: 8999, // display just below z's own suggestions for cwd
        }));

        // Prefer zoxide suggestions over cwd suggestions
        const uniqueFolders = [...zoxideFolders, ...cwdFolders].reduce(
          (acc, folder) => {
            if (!acc.some(({ path }) => path === folder.path)) {
              acc.push(folder);
            }
            return acc;
          },
          []
        );
        return uniqueFolders;
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
      const { status } = await executeShellCommand({
        command: "bash",
        args: ["-c", "command -v zoxide"],
      });
      if (status === 0) {
        return zoxideCompletionSpec;
      }
    } catch (_) {}

    // Otherwise, use the z.sh completion spec
    return zShCompletionSpec;
  },
};

export default zCompletionSpec;
