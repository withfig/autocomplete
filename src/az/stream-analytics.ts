const completionSpec: Fig.Spec = {
  name: "stream-analytics",
  description: "Manage Stream Analytics",
  subcommands: [
    {
      name: "function",
      description: "Commands to manage stream-analytics function",
      subcommands: [
        {
          name: "create",
          description:
            "Create a function or replaces an already existing function under an existing streaming job",
        },
        {
          name: "delete",
          description: "Delete a function from the streaming job",
        },
        {
          name: "list",
          description:
            "List all of the functions under the specified streaming job",
        },
        {
          name: "show",
          description: "Get details about the specified function",
        },
        {
          name: "test",
          description:
            "Test if the information provided for a function is valid",
        },
      ],
    },
    {
      name: "input",
      description: "Commands to manage stream-analytics input",
      subcommands: [
        {
          name: "create",
          description:
            "Create an input or replaces an already existing input under an existing streaming job",
        },
        {
          name: "delete",
          description: "Delete an input from the streaming job",
        },
        {
          name: "list",
          description:
            "List all of the inputs under the specified streaming job",
        },
        { name: "show", description: "Get details about the specified input" },
        { name: "test", description: "Test an input" },
      ],
    },
    {
      name: "job",
      description: "Commands to manage stream-analytics streaming job",
      subcommands: [
        {
          name: "create",
          description:
            "Create a streaming job or replaces an already existing streaming job",
        },
        { name: "delete", description: "Delete a streaming job" },
        {
          name: "list",
          description:
            "List all of the streaming jobs in the specified resource group",
        },
        {
          name: "show",
          description: "Get details about the specified streaming job",
        },
        { name: "start", description: "Start a streaming job" },
        { name: "stop", description: "Stop a running streaming job" },
        { name: "update", description: "Update existing streaming job" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the streaming job is met",
        },
      ],
    },
    {
      name: "output",
      description: "Commands to manage stream-analytics output",
      subcommands: [
        {
          name: "create",
          description:
            "Create an output or replaces an already existing output under an existing streaming job",
        },
        {
          name: "delete",
          description: "Delete an output from the streaming job",
        },
        {
          name: "list",
          description:
            "List all of the outputs under the specified streaming job",
        },
        { name: "show", description: "Get details about the specified output" },
        { name: "test", description: "Test an output" },
      ],
    },
    {
      name: "quota",
      description: "Commands to show quota information",
      subcommands: [
        {
          name: "show",
          description: "Retrieve quota information in a particular region",
        },
      ],
    },
    {
      name: "transformation",
      description: "Commands to manage stream-analytics transformation",
      subcommands: [
        {
          name: "create",
          description:
            "Create a transformation or replaces an already existing transformation under an existing streaming job",
        },
        {
          name: "show",
          description: "Get details about the specified transformation",
        },
        {
          name: "update",
          description: "Update transformation under an existing streaming job",
        },
      ],
    },
  ],
};

export default completionSpec;
