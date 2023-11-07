const completionSpec: Fig.Spec = {
  name: "scarb",
  description:
    "Scarb, The build toolchain and package manager for Cairo and Starknet ecosystems",
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
  ],
  subcommands: [
    {
      name: "add",
      description: "Add dependencies to a Scarb.toml manifest file",
      args: {
        name: "DEP_ID",
        description: "Reference to a package to add as a dependency",
      },
      options: [
        {
          name: "--dry-run",
          description: "Do not actually write the manifest",
        },
        {
          name: ["-p", "--package"],
          description: "Packages to run this command on",
          args: {
            name: "SPEC",
            description:
              "Packages to run this command on, can be a concrete package name (`foobar`) or a prefix glob (`foo*`) [default: *]",
            generators: {
              script: [
                "scarb",
                "metadata",
                "--format-version",
                "1",
                "--no-deps",
              ],
              postProcess: function (out) {
                const jsonOut = JSON.parse(out);
                const members = jsonOut.workspace.members;
                return members.map((member: string) => member.split(" ")[0]);
              },
            },
          },
        },
        {
          name: ["-v", "--verbose"],
          description: "More output per occurrence",
        },
        {
          name: ["-q", "--quiet"],
          description: "Less output per occurrence",
        },
        { name: ["-h", "--help"], description: "Print help" },
        {
          name: "--path",
          description: "Filesystem path to local package to add",
          args: {
            name: "PATH",
          },
        },
        {
          name: "--git",
          description: "Git repository location",
          args: {
            name: "URI",
          },
        },
        {
          name: "--branch",
          description: "Git branch to download the package from",
          args: {
            name: "BRANCH",
          },
        },
        {
          name: "--tag",
          description: "Git tag to download the package from",
          args: {
            name: "TAG",
          },
        },
        {
          name: "--rev",
          description: "Git reference to download the package from",
          args: {
            name: "REV",
          },
        },
      ],
    },
    {
      name: "remove",
      description: "Remove dependencies from a manifest file",
      args: {
        name: "DEP_ID",
        description: "Dependencies to be removed",
        isVariadic: true, // indicates that multiple DEP_IDs can be specified
      },
      options: [
        {
          name: "--dry-run",
          description: "Do not actually write the manifest",
        },
        {
          name: ["-p", "--package"],
          description: "Packages to run this command on",
          args: {
            name: "SPEC",
            description:
              "Packages to run this command on, can be a concrete package name (`foobar`) or a prefix glob (`foo*`) [default: *]",
            generators: {
              script: [
                "scarb",
                "metadata",
                "--format-version",
                "1",
                "--no-deps",
              ],
              postProcess: function (out) {
                const jsonOut = JSON.parse(out);
                const members = jsonOut.workspace.members;
                return members.map((member: string) => member.split(" ")[0]);
              },
            },
          },
        },
        {
          name: ["-v", "--verbose"],
          description: "More output per occurrence",
        },
        {
          name: ["-q", "--quiet"],
          description: "Less output per occurrence",
        },
        {
          name: ["-w", "--workspace"],
          description: "Run for all packages in the workspace",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },

    {
      name: "build",
      description: "Compile current project",
      options: [
        {
          name: ["-p", "--package"],
          description: "Packages to run this command on",
          args: {
            name: "SPEC",
            description:
              "Packages to run this command on, can be a concrete package name (`foobar`) or a prefix glob (`foo*`) [default: *]",
            generators: {
              script: [
                "scarb",
                "metadata",
                "--format-version",
                "1",
                "--no-deps",
              ],
              postProcess: function (out) {
                const jsonOut = JSON.parse(out);
                const members = jsonOut.workspace.members;
                return members.map((member: string) => member.split(" ")[0]);
              },
            },
          },
        },
        {
          name: ["-w", "--workspace"],
          description: "Run for all packages in the workspace",
        },
        {
          name: ["-v", "--verbose"],
          description: "More output per occurrence",
        },
        {
          name: ["-q", "--quiet"],
          description: "Less output per occurrence",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "cache",
      description: "Manipulate packages cache",
      subcommands: [
        {
          name: "clean",
          description: "Remove all cached dependencies",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "More output per occurrence",
            },
            {
              name: ["-q", "--quiet"],
              description: "Less output per occurrence",
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "path",
          description: "Print the path of the cache directory",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "More output per occurrence",
            },
            {
              name: ["-q", "--quiet"],
              description: "Less output per occurrence",
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
        },
      ],
      options: [
        {
          name: ["-v", "--verbose"],
          description: "More output per occurrence",
        },
        {
          name: ["-q", "--quiet"],
          description: "Less output per occurrence",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "clean",
      description: "Remove generated artifacts",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "More output per occurrence",
        },
        {
          name: ["-q", "--quiet"],
          description: "Less output per occurrence",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "commands",
      description: "List installed commands",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "More output per occurrence",
        },
        {
          name: ["-q", "--quiet"],
          description: "Less output per occurrence",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },

    {
      name: "fetch",
      description: "Fetch dependencies of packages from the network",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "More output per occurrence",
        },
        {
          name: ["-q", "--quiet"],
          description: "Less output per occurrence",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "fmt",
      description: "Format project files",
      options: [
        {
          name: ["-c", "--check"],
          description:
            "Only check if files are formatted, do not write the changes to disk",
        },
        {
          name: "--no-color",
          description: "Do not color output",
        },
        {
          name: ["-v", "--verbose"],
          description: "More output per occurrence",
        },
        {
          name: ["-p", "--package"],
          description: "Packages to run this command on",
          args: {
            name: "SPEC",
            description:
              "Packages to run this command on, can be a concrete package name (`foobar`) or a prefix glob (`foo*`) [default: *]",
            generators: {
              script: [
                "scarb",
                "metadata",
                "--format-version",
                "1",
                "--no-deps",
              ],
              postProcess: function (out) {
                const jsonOut = JSON.parse(out);
                const members = jsonOut.workspace.members;
                return members.map((member: string) => member.split(" ")[0]);
              },
            },
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Less output per occurrence",
        },
        {
          name: ["-w", "--workspace"],
          description: "Run for all packages in the workspace",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "init",
      description: "Create a new Scarb package in existing directory",
      options: [
        {
          name: "--name",
          description:
            "Set the resulting package name, defaults to the directory name",
          args: {
            name: "NAME",
            description: "Name for the resulting package",
          },
        },
        {
          name: "--no-vcs",
          description: "Do not initialize a new Git repository",
        },
        {
          name: ["-v", "--verbose"],
          description: "More output per occurrence",
        },
        {
          name: ["-q", "--quiet"],
          description: "Less output per occurrence",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },

    {
      name: "metadata",
      description:
        "Output the resolved dependencies of a package, the concrete used versions including overrides, in machine-readable format",
      options: [
        {
          name: "--format-version",
          description: "Format version",
          isRequired: true,
          args: {
            name: "VERSION",
          },
        },
        {
          name: "--no-deps",
          description:
            "Output information only about the workspace members and don't fetch dependencies",
        },
        {
          name: ["-v", "--verbose"],
          description: "More output per occurrence",
        },
        {
          name: ["-q", "--quiet"],
          description: "Less output per occurrence",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "manifest-path",
      description: "Print path to current Scarb.toml file to standard output",
      options: [
        {
          name: ["-v", "--verbose"],
          description: "More output per occurrence",
        },
        {
          name: ["-q", "--quiet"],
          description: "Less output per occurrence",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "new",
      description: "Create a new Scarb package at <PATH>",
      args: {
        name: "PATH",
        description: "Path where the new Scarb package should be created",
      },
      options: [
        {
          name: "--name",
          description:
            "Set the resulting package name, defaults to the directory name",
          args: {
            name: "NAME",
            description: "Name for the resulting package",
          },
        },
        {
          name: "--no-vcs",
          description: "Do not initialize a new Git repository",
        },
        {
          name: ["-v", "--verbose"],
          description: "More output per occurrence",
        },
        {
          name: ["-q", "--quiet"],
          description: "Less output per occurrence",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },

    {
      name: "run",
      description: "Run arbitrary package scripts",
      args: [
        {
          name: "SCRIPT",
          description: "The name of the script from manifest file to execute",
        },
        {
          name: "ARGS",
          description: "Arguments to pass to executed script",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: ["-p", "--package"],
          description: "Packages to run this command on",
          args: {
            name: "SPEC",
            description:
              "Packages to run this command on, can be a concrete package name (`foobar`) or a prefix glob (`foo*`) [default: *]",
            generators: {
              script: [
                "scarb",
                "metadata",
                "--format-version",
                "1",
                "--no-deps",
              ],
              postProcess: function (out) {
                const jsonOut = JSON.parse(out);
                const members = jsonOut.workspace.members;
                return members.map((member: string) => member.split(" ")[0]);
              },
            },
          },
        },
        {
          name: ["-v", "--verbose"],
          description: "More output per occurrence",
        },
        {
          name: ["-w", "--workspace"],
          description: "Run for all packages in the workspace",
        },
        {
          name: ["-q", "--quiet"],
          description: "Less output per occurrence",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },

    {
      name: "test",
      description:
        "Runs test in the local project, if it has a Scarb.toml manifest. If project is a virtual workspace, will run all tests by default",
      options: [
        {
          name: ["--workspace", "-w"],
          description: "Run for all packages in the workspace",
        },
        {
          name: ["--filter", "-f"],
          description: "Runs the test with a specific filter",
          args: {
            name: "FILTER",
            description: "The filter applied for names of test",
          },
        },
        {
          name: "--include-ignored",
          description: "Run ignored and not ignored tests",
        },
        {
          name: "--ignored",
          description: "Run only ignored tests",
        },
        {
          name: ["--verbose", "-v"],
          description: "More output per occurrence",
        },
        {
          name: ["--quiet", "-q"],
          description: "Less output per occurrence",
        },
        {
          name: ["--help", "-h"],
          description: "Print help",
        },
        {
          name: ["--package", "-p"],
          description: "Packages to run this command on",
          args: {
            name: "SPEC",
            description:
              "Packages to run this command on, can be a concrete package name (`foobar`) or a prefix glob (`foo*`) [default: *]",
            generators: {
              script: [
                "scarb",
                "metadata",
                "--format-version",
                "1",
                "--no-deps",
              ],
              postProcess: function (out) {
                const jsonOut = JSON.parse(out);
                const members = jsonOut.workspace.members;
                return members.map((member: string) => member.split(" ")[0]);
              },
            },
          },
        },
      ],
    },
  ],
};

export default completionSpec;
