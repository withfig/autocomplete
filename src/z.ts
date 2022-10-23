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
  searchPath: string[],
  history: ZSuggestion[]
): ZSuggestion[] {
  return history
    .filter(({ path }) => searchPath.every((item) => path.includes(item)))
    .filter(({ name }) => !searchPath.includes(name));
}

// https://github.com/rupa/z
const completionSpec: Fig.Spec = {
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

export default completionSpec;
