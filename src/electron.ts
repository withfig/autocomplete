const completionSpec: Fig.Spec = {
  name: "electron",
  description:
    "Build cross platform desktop apps with JavaScript, HTML and CSS",
  args: {
    name: "path",
    description: "A path to an electron app",
    template: ["filepaths", "folders"],
  },
  options: [
    {
      name: ["-i", "--interactive"],
      description: "Open a REPL to the main process",
    },
    {
      name: ["-r", "--require"],
      description: "Module to preload",
      args: {
        name: "module",
        template: "filepaths",
      },
    },
    {
      name: ["-v", "--version"],
      description: "Print the version",
    },
    {
      name: ["-a", "--abi"],
      description: "Print the Node ABI version",
    },
  ],
};

export default completionSpec;
