const dirArgument: Fig.Arg = {
  name: "dir",
  description:
    "The name of the application, as well as the name of the directory to create",
  template: "folders",
  isOptional: true,
};

const completionSpec: Fig.Spec = {
  name: "create-t3-app@latest",
  description: "A CLI for creating web applications with the t3 stack",
  icon: "https://create.t3.gg/favicon.svg",
  options: [
    {
      name: "--noGit",
      description:
        "Explicitly tell the CLI to not initialize a new git repo in the project (default: false)",
    },
    {
      name: ["-y", "--default"],
      description:
        "Bypass the CLI and use all default options to bootstrap a new t3-app (default: false)",
    },
    {
      name: ["--help", "-h"],
      description: "Display help for command",
    },
  ],
  args: dirArgument,
};

export default completionSpec;
