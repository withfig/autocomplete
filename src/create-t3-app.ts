const dirArgument: Fig.Arg = {
  name: "dir",
  description:
    "The name of the application, as well as the name of the directory to create",
  template: "folders",
  isOptional: true,
  suggestCurrentToken: true,
};

const completionSpec: Fig.Spec = {
  name: "create-t3-app",
  description: "A CLI for creating web applications with the t3 stack",
  icon: "https://create.t3.gg/favicon.svg",
  args: dirArgument,
  options: [
    {
      name: "--noGit",
      description:
        "Explicitly tell the CLI to not initialize a new git repo in the project (default: false)",
    },
    {
      name: "--noInstall",
      description:
        "Explicitly tell the CLI to not run the package manager's install command (default: false)",
    },
    {
      name: ["-y", "--default"],
      priority: 76,
      description:
        "Bypass the CLI and use all default options to bootstrap a new t3-app (default: false)",
    },
    {
      name: "--CI",
      description: "Boolean value if we're running in CI (default: false)",
      priority: 49,
    },
    {
      name: "--tailwind",
      description:
        "Experimental: Boolean value if we should install Tailwind CSS. Must be used in conjunction with `--CI`",
      args: {
        name: "boolean",
        suggestions: [
          { name: "true", description: "Install Tailwind CSS" },
          { name: "false", description: "Do not install Tailwind CSS" },
        ],
      },
      dependsOn: ["--CI"],
      priority: 49,
    },
    {
      name: "--nextAuth",
      description:
        "Experimental: Boolean value if we should install NextAuth.js. Must be used in conjunction with `--CI`",
      args: {
        name: "boolean",
        suggestions: [
          { name: "true", description: "Install NextAuth.js" },
          { name: "false", description: "Do not install NextAuth.js" },
        ],
      },
      dependsOn: ["--CI"],
      priority: 49,
    },
    {
      name: "--prisma",
      description:
        "Experimental: Boolean value if we should install Prisma. Must be used in conjunction with `--CI`",
      args: {
        name: "boolean",
        suggestions: [
          { name: "true", description: "Install Prisma" },
          { name: "false", description: "Do not install Prisma" },
        ],
      },
      dependsOn: ["--CI"],
      priority: 49,
    },
    {
      name: "--trpc",
      description:
        "Experimental: Boolean value if we should install tRPC. Must be used in conjunction with `--CI`",
      args: {
        name: "boolean",
        suggestions: [
          { name: "true", description: "Install tRPC" },
          { name: "false", description: "Do not install tRPC" },
        ],
      },
      dependsOn: ["--CI"],
      priority: 49,
    },
    {
      name: ["-i", "--import-alias"],
      description: "Explicitly tell the CLI to use a custom import alias",
      args: {
        name: "alias",
        suggestions: [
          { name: "~/", description: "Use the ~/ alias" },
          { name: "@/", description: "Use the @/ alias" },
        ],
      },
    },
    {
      name: ["-v", "--version"],
      description: "Display the version number",
    },
    {
      name: ["--help", "-h"],
      description: "Display help for command",
    },
  ],
};

export default completionSpec;
