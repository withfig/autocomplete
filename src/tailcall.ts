const completionSpec: Fig.Spec = {
  name: "tailcall",
  description:
    "TailCall CLI for managing and optimizing GraphQL configurations",
  subcommands: [
    {
      name: "check",
      description: "Validate a composition spec",
      args: {
        name: "FILE_PATHS",
        template: "filepaths",
        isVariadic: true,
      },
      options: [
        {
          name: "--n-plus-one-queries",
          description: "Detect N+1 issues",
          isPersistent: true,
        },
        {
          name: "--schema",
          description: "Display the schema of the composition spec",
          isPersistent: true,
        },
        {
          name: "--format",
          description: "Change the format of the input file",
          args: {
            suggestions: ["gql", "graphql", "yml", "yaml", "json"],
          },
        },
      ],
    },
    {
      name: "start",
      description: "Launch the GraphQL Server for the specific configuration",
      args: {
        name: "PATHS",
        template: ["filepaths", "folders"],
        isVariadic: true,
      },
    },
    {
      name: "init",
      description: "Bootstrap a new TailCall project",
      args: {
        name: "FILE_PATH",
        template: "folders",
      },
    },
    {
      name: "gen",
      description: "Generate GraphQL configurations from various sources",
      args: {
        name: "CONFIG_FILE",
        template: "filepaths",
      },
    },
  ],
};

export default completionSpec;
