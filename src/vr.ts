const completionSpec: Fig.Spec = {
  name: "vr",
  description: "The npm-style script runner for Deno",

  subcommands: [
    {
      name: "run",
      description: "Run a script",
      args: {
        name: "script",
      },
      options: [{ name: ["-h", "--help"], description: "Show help" }],
    },
    {
      name: "export",
      description: "Export one or more scripts as standalone executable files",
      args: {
        name: "script",
        isVariadic: true,
      },
      options: [{ name: ["-h", "--help"], description: "Show help" }],
    },
    {
      name: "upgrade",
      description:
        "Upgrade Velociraptor to the latest version or to a specific one",
      args: {
        name: "version",
      },
      options: [
        { name: ["-h", "--help"], description: "Show help" },
        {
          name: ["-o", "--out-dir"],
          description: "The folder where the scripts will be exported",
          args: {
            name: "dir",
          },
        },
      ],
    },
  ],

  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for Velociraptor",
    },
    {
      name: ["-V", "--version"],
      description: "Show the version number for Velociraptor",
    },
  ],

  args: {
    name: "script",
  },
};
export default completionSpec;
