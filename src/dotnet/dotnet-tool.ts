import { filepaths } from "@fig/autocomplete-generators";

type SearchResultData = {
  id: string;
  title: string;
  description: string;
};

const packageGenerator: Fig.Generator = {
  script(context) {
    const searchTerm = context[context.length - 1];
    return [
      "curl",
      "-s",
      "-H",
      "Accept: application/json",
      `https://azuresearch-usnc.nuget.org/query?packageType=DotnetTool&q=${searchTerm}`,
    ];
  },
  postProcess(out) {
    const searchResults: SearchResultData[] = JSON.parse(out).data;

    return searchResults.map<Fig.Suggestion>((value) => {
      return {
        name: value.title,
        insertValue: value.id,
        description: value.description,
      };
    });
  },
};

const versionSearchGenerator: Fig.Generator = {
  script(context) {
    const commands = ["install", "update"];
    const command = context.filter((ctx) => !ctx.startsWith("-"));
    const idx = command.findIndex((ctx) => commands.includes(ctx));
    const searchTerm = command[idx + 1].toLowerCase();

    return [
      "curl",
      "-s",
      "-H",
      "Accept: application/json",
      `https://api.nuget.org/v3-flatcontainer/${searchTerm}/index.json`,
    ];
  },
  postProcess(out) {
    const searchResults: string[] = JSON.parse(out).versions;

    return searchResults.reverse().map<Fig.Suggestion>((value) => {
      return {
        name: value,
      };
    });
  },
};

const configFileGenerator = filepaths({ equals: "nuget.config" });

const toolListGenerator: Fig.Generator = {
  trigger: () => true,
  script(context) {
    const globalFlags = ["-g", "--global"];

    if (context.some((ctx) => globalFlags.includes(ctx))) {
      return ["dotnet", "tool", "list", "--global"];
    }

    return ["dotnet", "tool", "list"];
  },
  postProcess(out) {
    const lines = out.split("\n").slice(2);

    return lines.map<Fig.Suggestion>((line) => {
      const argRegex = /(([a-zA-Z \.\[\]#,/][^ ]{1,})+)/g;
      const [pkg, version, commands] = line
        .match(argRegex)
        .map((match) => match.trim());

      return {
        insertValue: pkg,
        name: pkg,
        description: commands,
      };
    });
  },
};

const toolInstallCommonOptions: Fig.Option[] = [
  {
    name: "--add-source",
    description:
      "Adds an additional NuGet package source to use during installation. Feeds are accessed in parallel, not sequentially in some order of precedence. If the same package and version is in multiple feeds, the fastest feed wins",
    args: {
      name: "source",
    },
  },
  {
    name: "--configfile",
    description:
      "The NuGet configuration file (nuget.config) to use. If specified, only the settings from this file will be used. If not specified, the hierarchy of configuration files from the current directory will be used",
    args: {
      name: "file",
      generators: configFileGenerator,
    },
  },
  {
    name: "--disable-parallel",
    description: "Prevent restoring multiple projects in parallel",
  },
  {
    name: "--framework",
    description:
      "Specifies the target framework to install the tool for. By default, the .NET SDK tries to choose the most appropriate target framework",
    args: {
      name: "framework",
    },
  },
  {
    name: ["-g", "--global"],
    description:
      "Specifies that the installation is user wide. Can't be combined with the --tool-path option. Omitting both --global and --tool-path specifies a local tool installation",
    exclusiveOn: ["--tool-path"],
  },
  {
    name: "--ignore-failed-sources",
    description: "Treat package source failures as warnings",
  },
  {
    name: "--interactive",
    description:
      "Allows the command to stop and wait for user input or action. For example, to complete authentication",
  },
  {
    name: "--local",
    description:
      "Update the tool and the local tool manifest. Can't be combined with the --global option or the --tool-path option",
    exclusiveOn: ["--global", "--tool-path"],
  },
  {
    name: "--no-cache",
    description: "Do not cache packages and HTTP requests",
  },
  {
    name: "--tool-manifest",
    description: "Path to the manifest file",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  {
    name: ["-v", "--verbosity"],
    description:
      "Sets the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]. The default is minimal",
    args: {
      name: "verbosity",
      suggestions: ["quiet", "minimal", "normal", "detailed", "diagnostic"],
    },
  },
  {
    name: "--version",
    description:
      "The version of the tool to install. By default, the latest stable package version is installed. Use this option to install preview or older versions of the tool",
    args: {
      name: "version",
      debounce: true,
      generators: versionSearchGenerator,
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "tool",
  description:
    "The dotnet tool install command provides a way for you to install .NET tools on your machine",
  subcommands: [
    {
      name: "install",
      args: {
        name: "package",
        debounce: true,
        generators: packageGenerator,
      },
      options: toolInstallCommonOptions,
    },
    {
      name: "list",
      description:
        "The dotnet tool list command provides a way for you to list all .NET global, tool-path, or local tools installed on your machine. The command lists the package name, version installed, and the tool command",
      options: [
        {
          name: ["-g", "--global"],
          description:
            "Lists user-wide global tools. Can't be combined with the --tool-path option. Omitting both --global and --tool-path lists local tools",
          exclusiveOn: ["--tool-path"],
        },
        {
          name: "--local",
          description:
            "Lists local tools for the current directory. Can't be combined with the --global or --tool-path options. Omitting both --global and --tool-path lists local tools even if --local is not specified",
          exclusiveOn: ["--global", "--tool-path"],
        },
        {
          name: "--tool-path",
          description:
            "Specifies a custom location where to find global tools. PATH can be absolute or relative. Can't be combined with the --global option. Omitting both --global and --tool-path lists local tools",
          exclusiveOn: ["--global"],
        },
      ],
    },
    {
      name: "restore",
      description:
        "The dotnet tool restore command finds the tool manifest file that is in scope for the current directory and installs the tools that are listed in it. For information about manifest files, see Install a local tool and Invoke a local tool",
      options: [
        {
          name: "--configfile",
          description:
            "The NuGet configuration file (nuget.config) to use. If specified, only the settings from this file will be used. If not specified, the hierarchy of configuration files from the current directory will be used",
          args: {
            name: "file",
            generators: configFileGenerator,
          },
        },
        {
          name: "--add-source",
          description:
            "Adds an additional NuGet package source to use during installation. Feeds are accessed in parallel, not sequentially in some order of precedence. If the same package and version is in multiple feeds, the fastest feed wins",
          args: {
            name: "source",
          },
        },
        {
          name: "--tool-manifest",
          description: "Path to the manifest file",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--ignore-failed-sources",
          description: "Treat package source failures as warnings",
        },
        {
          name: "--no-cache",
          description: "Do not cache packages and HTTP requests",
        },
        {
          name: "--interactive",
          description:
            "Allows the command to stop and wait for user input or action. For example, to complete authentication",
        },
        {
          name: ["-v", "--verbosity"],
          description:
            "Sets the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]. The default is minimal",
          args: {
            name: "verbosity",
            suggestions: [
              "quiet",
              "minimal",
              "normal",
              "detailed",
              "diagnostic",
            ],
          },
        },
      ],
    },
    {
      name: "run",
      description:
        "The dotnet tool run command searches tool manifest files that are in scope for the current directory. When it finds a reference to the specified tool, it runs the tool",
      args: {
        name: "command",
        generators: toolListGenerator,
      },
    },
    {
      name: "search",
      description:
        "The dotnet tool search command provides a way for you to search NuGet for tools that can be used as .NET global, tool-path, or local tools. The command searches the tool names and metadata such as titles, descriptions, and tags",
      options: [
        {
          name: "--detail",
          description: "Shows detailed results from the query",
        },
        {
          name: "--prerelease",
          description: "Includes pre-release packages",
        },
        {
          name: "--skip",
          description:
            "Specifies the number of query results to skip. Used for pagination",
          args: {
            name: "number",
          },
        },
        {
          name: "--take",
          description:
            "Specifies the number of query results to show. Used for pagination",
          args: {
            name: "number",
          },
        },
      ],
    },
    {
      name: "uninstall",
      description:
        "The dotnet tool uninstall command provides a way for you to uninstall .NET tools from your machine",
      args: {
        name: "package",
        description:
          "Name/ID of the NuGet package that contains the .NET tool to uninstall. You can find the package name using the dotnet tool list command",
        generators: toolListGenerator,
      },
      options: [
        {
          name: ["-g", "--global"],
          description:
            "Specifies that the tool to be removed is from a user-wide installation. Can't be combined with the --tool-path option. Omitting both --global and --tool-path specifies that the tool to be removed is a local tool",
          exclusiveOn: ["--tool-path"],
        },
        {
          name: "--tool-path",
          description:
            "Specifies the location where to uninstall the tool. PATH can be absolute or relative. Can't be combined with the --global option. Omitting both --global and --tool-path specifies that the tool to be removed is a local tool",
          exclusiveOn: ["--global"],
        },
      ],
    },
    {
      name: "update",
      description:
        "The dotnet tool update command provides a way for you to update .NET tools on your machine to the latest stable version of the package",
      args: {
        name: "package",
        generators: toolListGenerator,
      },
      options: toolInstallCommonOptions,
    },
  ],
};

export default completionSpec;
