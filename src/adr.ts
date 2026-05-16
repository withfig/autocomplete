const completionSpec: Fig.Spec = {
  name: "adr",
  description: "Manage Architectural Design Records",
  subcommands: [
    {
      name: "init",
      description:
        "Create an ADR directory in the root of your project, example usage: ' adr init doc/architecture/decisions'",
      args: {
        name: "Location where to create the ADR, example 'adr init doc/architecture/decisions'",
      },
    },
    {
      name: "new",
      description: "Create a new, numbered ADR file",
      options: [
        {
          name: "-s",
          description:
            "Create a new ADR that supercedes a previous one (ADR 9, for example), use the -s option",
          args: {
            name: "number",
            description: "Which ADR to supercede",
          },
        },
      ],
      args: {
        name: "ADR name",
        description: "Name for the ADR separated with '-'",
      },
    },
    {
      name: "help",
      description: "Built in help",
    },
  ],
};
export default completionSpec;
