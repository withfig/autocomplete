const completionSpec: Fig.Spec = {
  name: "publish",
  description: "",
  subcommands: [
    {
      name: "new",
      description: "Set up a new website in the current folder",
    },
    {
      name: "run",
      description:
        "Generate and run a localhost server on default port 8000 for the website in the current folder",
      parserDirectives: {
        flagsArePosixNoncompliant: true,
      },
      options: [
        {
          name: ["-p", "--port"],
          description: "Customize the port",
          args: {
            name: "port",
            default: "8000",
          },
        },
      ],
    },
    {
      name: "deploy",
      description: "Generate and deploy the website in the current folder",
    },
    {
      name: "generate",
      description: "Generate the website in the current folder",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for publish",
    },
  ],
  // Only uncomment if publish takes an argument
  // args: {}
};
export default completionSpec;
