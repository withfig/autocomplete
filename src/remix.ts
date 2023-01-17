const icon = "https://remix.run/favicon-dark.1.png";

const dirArgument: Fig.Arg = {
  name: "dir",
  description: "Represent the directory of the Remix application",
  template: "folders",
  isOptional: true,
};

const completionSpec: Fig.Spec = {
  name: "remix",
  description: "Remix CLI to start, build and export your application",
  options: [
    {
      name: "--help",
      description: "Output usage information",
    },
    {
      name: ["-v", "--version"],
      description: "Output the version number",
    },
  ],
  subcommands: [
    {
      name: "build",
      description: "Create an optimized production build of your application",
      icon,
      args: dirArgument,
      options: [
        {
          name: "--sourcemap",
          description: "Enables production sourcemap",
        },
      ],
    },
    {
      name: "dev",
      description: "Start the application in development mode",
      icon,
      args: dirArgument,
    },
    {
      name: "setup",
      description:
        "Prepare node_modules/remix folder (after installation of packages)",
      icon,
      args: dirArgument,
    },
    {
      name: "routes",
      description: "Generate the route config of the application",
      icon,
      args: dirArgument,
      options: [
        { name: "--json", description: "Print the route config as JSON" },
      ],
    },
  ],
};

export default completionSpec;
