const completionSpec: Fig.Spec = {
  name: "aftman",
  description:
    "A toolchain manager, enabling project-specific command line tools",
  subcommands: [
    {
      name: "init",
      description: "Creates a new aftman.toml file in the given directory",
      args: {
        name: "path",
        description:
          "The folder to initialize the manifest file in. Defaults to the current directory",
        isOptional: true,
      },
    },
    {
      name: "add",
      description: "Adds a new tool to Aftman and installs it",
      options: [
        {
          name: "--global",
          description: "Install this tool globally",
        },
      ],
      args: [
        {
          name: "tool",
          description: "What tool and version to install",
        },
        {
          name: "alias",
          description: "The name that will be used to run the tool",
          isOptional: true,
        },
      ],
    },
    {
      name: "install",
      description:
        "Install all tools listed in aftman.toml files based on your current directory",
      options: [
        {
          name: "--no-trust-check",
          description:
            "All tools will be installed, regardless of whether they are known",
        },
      ],
    },
    {
      name: "self-install",
      description:
        "Installs Aftman, upgrades any references to Aftman, and adds aftman to your system PATH if supported",
    },
    {
      name: "trust",
      args: {
        name: "tool",
        description: "The tool to mark as trusted",
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for aftman",
    },
    {
      name: ["--version", "-V"],
      description: "Show aftman's version",
    },
  ],
};
export default completionSpec;
