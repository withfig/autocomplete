import { filepaths } from "@fig/autocomplete-generators";

const PRIORITY_TOP_THRESHOLD = 76;
const PRIORITY_BOTTOM_THRESHOLD = 49;

/*
 *  Generators
 */
const envrcFilepathsGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>
): Fig.Generator => ({
  template: "filepaths",
  filterTemplateSuggestions: (paths) => {
    const isEnvrc = (fileName: string) => fileName.includes(".envrc");
    return paths
      .filter((file) => isEnvrc(file.name) || file.name.endsWith("/"))
      .map((file) => ({
        ...file,
        priority: isEnvrc(file.name) && PRIORITY_TOP_THRESHOLD,
        ...suggestOptions,
      }));
  },
});

const dotenvFilepathsGenerator = filepaths({
  matches: /\.env(?!rc)/g,
  editFileSuggestions: { priority: PRIORITY_TOP_THRESHOLD },
});

/*
 *  Reusable suggestions
 */
const shellSuggestions: Partial<Fig.Suggestion>[] = [
  "bash",
  "zsh",
  "fish",
  "tcsh",
  "elvish",
].map((shell) => ({
  name: shell,
  icon: "🐚",
}));

/*
 *  Reusable specs
 */
const helpSpec: Partial<Fig.Subcommand> = {
  description: "Help for direnv",
  args: {
    name: "SHOW_PRIVATE",
    description: "Any string",
    isOptional: true,
  },
};

const versionSpec: Partial<Fig.Subcommand> = {
  description:
    "Prints the version or checks that direnv is older than VERSION_AT_LEAST",
  args: {
    name: "VERSION_AT_LEAST",
    isOptional: true,
  },
};

/*
 *  Completion spec
 */
const completionSpec: Fig.Spec = {
  name: "direnv",
  description: "Unclutter your .profile",
  subcommands: [
    {
      name: "allow",
      description: "Grants direnv to load the given .envrc",
      isDangerous: true,
      args: {
        name: "PATH_TO_RC",
        generators: envrcFilepathsGenerator({ isDangerous: true }),
        isOptional: true,
      },
    },
    {
      name: "deny",
      description: "Revokes the authorization of a given .envrc",
      isDangerous: true,
      args: {
        name: "PATH_TO_RC",
        generators: envrcFilepathsGenerator({ isDangerous: true }),
        isOptional: true,
      },
    },
    {
      name: "edit",
      description:
        "Opens PATH_TO_RC or the current .envrc into an $EDITOR and allow the file to be loaded afterwards",
      args: {
        name: "PATH_TO_RC",
        generators: envrcFilepathsGenerator(),
        isOptional: true,
      },
    },
    {
      name: "exec",
      description:
        "Executes a command after loading the first .envrc found in DIR",
      args: [
        {
          name: "DIR",
          template: "folders",
        },
        {
          name: "COMMAND",
          isCommand: true,
          isDangerous: true,
        },
      ],
    },
    {
      name: "fetchurl",
      description: "Fetches a given URL into direnv's CAS",
      args: [
        {
          name: "url",
        },
        {
          name: "integrity-hash",
          description:
            "Check if the `integrity hash` is equal to the hash value of the file obtained from the `url`",
          isOptional: true,
        },
      ],
    },
    {
      name: "help",
      ...helpSpec,
    },
    {
      name: "hook",
      description: "Used to setup the shell hook",
      args: {
        name: "SHELL",
        suggestions: shellSuggestions,
      },
    },
    {
      name: "prune",
      description: "Removes old allowed files",
      isDangerous: true,
    },
    {
      name: "reload",
      description: "Triggers an env reload",
      isDangerous: true,
    },
    {
      name: "status",
      description: "Prints some debug status information",
    },
    {
      name: "stdlib",
      description:
        "Displays the stdlib available in the .envrc execution context",
    },
    {
      name: "version",
      ...versionSpec,
    },
    {
      name: "apply_dump",
      description:
        "Accepts a filename containing `direnv dump` output and generates a series of bash export statements to apply the given env",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: {
        name: "FILE",
        template: "filepaths",
        isDangerous: true,
      },
    },
    {
      name: "show_dump",
      description: "Show the data inside of a dump for debugging purposes",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: {
        name: "DUMP",
        template: "filepaths",
      },
    },
    {
      name: "dotenv",
      description:
        "Transforms a .env file to evaluatable `export KEY=PAIR` statements",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: [
        {
          name: "SHELL",
          suggestions: shellSuggestions,
          isOptional: true,
        },
        {
          name: "PATH_TO_DOTENV",
          generators: dotenvFilepathsGenerator,
        },
      ],
    },
    {
      name: "dump",
      description:
        "Used to export the inner bash state at the end of execution",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: [
        {
          name: "SHELL",
          suggestions: shellSuggestions,
          isOptional: true,
        },
        {
          name: "FILE",
          description: "Overwrites by dump data",
          template: "filepaths",
          isOptional: true,
          isDangerous: true,
        },
      ],
    },
    {
      name: "export",
      description: "Loads an .envrc and prints the diff in terms of exports",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: {
        name: "SHELL",
        suggestions: shellSuggestions,
      },
    },
    {
      name: "watch",
      description: "Adds a path to the list that direnv watches for changes",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: [
        {
          name: "SHELL",
          suggestions: shellSuggestions,
        },
        {
          name: "PATH",
          template: "filepaths",
          isVariadic: true,
        },
      ],
    },
    {
      name: "watch-dir",
      description:
        "Recursively adds a directory to the list that direnv watches for changes",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: [
        {
          name: "SHELL",
          suggestions: shellSuggestions,
        },
        {
          name: "DIR",
          template: "folders",
        },
      ],
    },
    {
      name: "watch-list",
      description:
        "Pipe pairs of `mtime path` to stdin to build a list of files to watch",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: {
        name: "SHELL",
        suggestions: shellSuggestions,
        isOptional: true,
      },
    },
    {
      name: "current",
      description:
        "Reports whether direnv's view of a file is current (or stale)",
      priority: PRIORITY_BOTTOM_THRESHOLD,
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
  ],
  options: [
    {
      name: "--version",
      ...versionSpec,
    },
    {
      name: "--help",
      ...helpSpec,
    },
  ],
};

export default completionSpec;
