interface ZSuggestion {
  name: string;
  path: string;
  weight?: number;
  time?: number;
}

interface ZoxideSuggestion {
  name: string;
  description: string;
  icon: string;
  path: string;
  priority: number;
}

const REGEX_TRAILING_SLASH = /\/$/;
const symbolicLinkCache = new Map<string, boolean>();

function removeDuplicateSuggestions<T extends ZoxideSuggestion>(
  suggestions: T[]
) {
  const uniqueSuggestions: T[] = [];
  const suggestionPathToIndexMapping: Record<string, number> = {};

  for (const newSuggestion of suggestions) {
    const matchingSuggestionIndex =
      suggestionPathToIndexMapping[newSuggestion.path];

    if (matchingSuggestionIndex === undefined) {
      uniqueSuggestions.push(newSuggestion);
      suggestionPathToIndexMapping[newSuggestion.path] =
        uniqueSuggestions.length - 1;
    } else {
      const seenSuggestion = uniqueSuggestions[matchingSuggestionIndex];
      if (newSuggestion.priority > seenSuggestion.priority) {
        uniqueSuggestions[matchingSuggestionIndex] = newSuggestion;
      }
    }
  }

  return uniqueSuggestions;
}

async function folderExists(path: string, execute: Fig.ExecuteCommandFunction) {
  const { status } = await execute({
    command: "bash",
    args: ["-c", `test -d ${path}`],
  });
  return status === 0;
}

async function isSymbolicLink(
  path: string,
  execute: Fig.ExecuteCommandFunction
) {
  if (symbolicLinkCache.has(path)) {
    return symbolicLinkCache.get(path);
  }

  const { status } = await execute({
    command: "bash",
    args: ["-c", `test -L ${path}`],
  });

  const pathIsSymlink = status === 0;
  symbolicLinkCache.set(path, pathIsSymlink);
  return pathIsSymlink;
}

async function expandSymlink(
  symlinkPath: string,
  execute: Fig.ExecuteCommandFunction
) {
  const args = ["-c", `readlink ${symlinkPath}`];
  const { stdout } = await execute({
    command: "bash",
    args,
  });
  return stdout.trim();
}

async function expandPath(path: string, execute: Fig.ExecuteCommandFunction) {
  const pathParts = path.split("/");
  if (pathParts[0] === "") {
    // Root paths like /Users require the slash to be kept
    pathParts[1] = `/${pathParts[1]}`;
    pathParts.shift();
  }

  if (pathParts.length === 1) {
    // A root path can't be a symlink,
    // so we know it's already expanded
    return path;
  }

  for (const [index] of [...pathParts].entries()) {
    const subPath = pathParts.slice(0, index + 1).join("/");
    if (await isSymbolicLink(subPath, execute)) {
      const expandedPath = await expandSymlink(subPath, execute);
      pathParts.splice(0, index + 1, ...expandedPath.split("/"));
    }
  }

  const expandedPath = pathParts.join("/");
  return expandedPath;
}

async function getFoldersAtPath(
  pathOrPartialPath: string,
  cwd: string,
  execute: Fig.ExecuteCommandFunction
): Promise<ZSuggestion[]> {
  let path: string;
  let partialChildDirectory: string | undefined;

  if (pathOrPartialPath && (await folderExists(pathOrPartialPath, execute))) {
    path = pathOrPartialPath;
  } else {
    const pathSplit = pathOrPartialPath.split("/");
    path =
      pathSplit.length < 2
        ? "." // If the path is just a single directory, list the contents of the current directory
        : pathSplit.slice(0, pathSplit.length - 1).join("/");
    partialChildDirectory = pathSplit.at(-1);
  }

  const args = [
    "-c",
    `ls -d -- ${path.replace(REGEX_TRAILING_SLASH, "")}/*/`,
    ...(partialChildDirectory
      ? ["|", "grep", "--", `"${path}/${partialChildDirectory}"`]
      : []),
  ];

  const { status, stderr, stdout } = await execute({
    command: "bash",
    args,
  });

  const toReturn = await Promise.all(
    stdout.split("\n").map(async (line) => {
      const name = line.split("/").filter(Boolean).at(-1);
      const path = line
        .replace("./", `${cwd}/`)
        .replace(REGEX_TRAILING_SLASH, "");
      return {
        name: `${name}/`,
        path: await expandPath(path, execute),
      };
    })
  );

  console.log({
    path,
    toReturn,
    args,
    status,
    stderr,
    stdout,
    pathOrPartialPath,
    partialChildDirectory,
  });

  return toReturn;
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
          getFoldersAtPath(
            currentWorkingDirectory,
            currentWorkingDirectory,
            execute
          ),
        ]);
        // merge z history and current folders and remove duplicates
        const suggestions = removeDuplicateSuggestions(
          [...zHistory, ...currentFolders].map((point) => ({
            name: point.name,
            description: point.path,
            icon: "📁",
            path: point.path,
            priority: point.weight,
            insertValue: point.name,
            displayName: point.name,
          }))
        );

        // directory arg is variadic with each subsequent arg being an
        // additional filter. filtered will filter directories by all args.
        const filteredSuggestions = filterHistoryBySearchTerms(
          tokens.filter((arg) => arg && arg !== "z" && !arg.startsWith("-")),
          suggestions
        );
        return filteredSuggestions;
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

async function getZoxideFolders(
  tokens: string[],
  execute: Fig.ExecuteCommandFunction,
  cwd: string
) {
  let args: Fig.ExecuteCommandInput["args"];
  if (tokens.length < 2 || tokens[1] === "") {
    args = ["query", "--list", "--score"];
  } else {
    args = ["query", "--list", "--score", "--", tokens.at(1)];
  }

  const { stdout } = await execute({
    command: "zoxide",
    args,
  });

  console.log({ zoxideStdout: stdout });

  return Promise.all(
    stdout
      .split("\n")
      .filter(Boolean)
      .map(async (line) => {
        const trimmedLine = line.trim();
        const spaceIndex = trimmedLine.indexOf(" ");
        const score = Number(trimmedLine.slice(0, spaceIndex));
        const fullPath = trimmedLine
          .slice(spaceIndex + 1)
          .replace(REGEX_TRAILING_SLASH, "");

        const pathSplit = fullPath.split("/");
        const parentFullPath = pathSplit
          .slice(0, pathSplit.length - 1)
          .join("/");
        const folderName = pathSplit.at(-1);

        const folderIsInCwd = cwd === parentFullPath;
        return {
          name: `${folderIsInCwd ? folderName : fullPath}/`,
          description: `Score: ${score}`,
          icon: "💾",
          path: await expandPath(fullPath, execute),
          priority: folderIsInCwd ? 9000 : score, // assign highest priority when in cwd
        };
      })
  );
}

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
        { currentWorkingDirectory: cwd }
      ) => {
        const zoxideFolders = await getZoxideFolders(
          tokens,
          executeShellCommand,
          cwd
        );

        const pathToken = tokens[1];

        const lsFolders = [
          ...(await getFoldersAtPath(cwd, cwd, executeShellCommand)),
          ...(await getFoldersAtPath(pathToken, cwd, executeShellCommand)),
        ].map(({ name, path }) => ({
          name,
          description: "Score: 0",
          icon: "📁",
          path,
          priority: 8999, // display just below z's own suggestions for cwd
        }));

        const uniqueFolders = removeDuplicateSuggestions([
          ...zoxideFolders,
          ...lsFolders,
        ]);

        console.log({ zoxideFolders, lsFolders, uniqueFolders });

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
