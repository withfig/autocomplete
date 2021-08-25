const completionSpec: Fig.Spec = {
  name: "build-server",
  description: "Interacts with servers started by a build",
  subcommands: [
    {
      name: "shutdown",
      description:
        "Shuts down build servers that are started from dotnet. By default, all servers are shut down",
      options: [
        {
          name: "--msbuild",
          description: "Shuts down the MSBuild build server",
        },
        {
          name: "--razor",
          description: "Shuts down the Razor build server",
        },
        {
          name: "--vbcscompiler",
          description: "Shuts down the VB/C# compiler build server",
        },
      ],
    },
  ],
};

export default completionSpec;
