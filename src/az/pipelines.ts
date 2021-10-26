const completionSpec: Fig.Spec = {
  name: "pipelines",
  description: "Manage Azure Pipelines",
  subcommands: [
    {
      name: "agent",
      description: "Manage agents",
      subcommands: [
        { name: "list", description: "Get a list of agents in a pool" },
        { name: "show", description: "Show agent details" },
      ],
    },
    {
      name: "build",
      description: "Manage builds",
      subcommands: [
        {
          name: "definition",
          description: "Manage build definitions",
          subcommands: [
            { name: "list", description: "List build definitions" },
            {
              name: "show",
              description: "Get the details of a build definition",
            },
          ],
        },
        { name: "list", description: "List build results" },
        { name: "queue", description: "Request (queue) a build" },
        { name: "show", description: "Get the details of a build" },
        {
          name: "tag",
          description: "Manage build tags",
          subcommands: [
            { name: "add", description: "Add tag(s) for a build" },
            { name: "delete", description: "Delete a build tag" },
            { name: "list", description: "Get tags for a build" },
          ],
        },
      ],
    },
    { name: "create", description: "Create a new Azure Pipeline (YAML based)" },
    { name: "delete", description: "Delete a pipeline" },
    {
      name: "folder",
      description: "Manage folders for organizing pipelines",
      subcommands: [
        { name: "create", description: "Create a folder" },
        { name: "delete", description: "Delete a folder" },
        { name: "list", description: "List all folders" },
        { name: "update", description: "Update a folder name or description" },
      ],
    },
    { name: "list", description: "List pipelines" },
    {
      name: "pool",
      description: "Manage agent pools",
      subcommands: [
        { name: "list", description: "List agent pools" },
        { name: "show", description: "Show agent pool details" },
      ],
    },
    {
      name: "queue",
      description: "Manage agent queues",
      subcommands: [
        { name: "list", description: "List agent queues" },
        { name: "show", description: "Show details of agent queue" },
      ],
    },
    {
      name: "release",
      description: "Manage releases",
      subcommands: [
        { name: "create", description: "Request (create) a release" },
        {
          name: "definition",
          description: "Manage release definitions",
          subcommands: [
            { name: "list", description: "List release definitions" },
            {
              name: "show",
              description: "Get the details of a release definition",
            },
          ],
        },
        { name: "list", description: "List release results" },
        { name: "show", description: "Get the details of a release" },
      ],
    },
    { name: "run", description: "Queue (run) a pipeline" },
    {
      name: "runs",
      description: "Manage pipeline runs",
      subcommands: [
        {
          name: "artifact",
          description: "Manage pipeline run artifacts",
          subcommands: [
            { name: "download", description: "Download a pipeline artifact" },
            {
              name: "list",
              description: "List artifacts associated with a run",
            },
            { name: "upload", description: "Upload a pipeline artifact" },
          ],
        },
        { name: "list", description: "List the pipeline runs in a project" },
        { name: "show", description: "Show details of a pipeline run" },
        {
          name: "tag",
          description: "Manage pipeline run tags",
          subcommands: [
            { name: "add", description: "Add tag(s) for a pipeline run" },
            { name: "delete", description: "Delete a pipeline run tag" },
            { name: "list", description: "Get tags for a pipeline run" },
          ],
        },
      ],
    },
    { name: "show", description: "Get the details of a pipeline" },
    { name: "update", description: "Update a pipeline" },
    {
      name: "variable",
      description: "Manage pipeline variables",
      subcommands: [
        { name: "create", description: "Add a variable to a pipeline" },
        { name: "delete", description: "Delete a variable from pipeline" },
        { name: "list", description: "List the variables in a pipeline" },
        { name: "update", description: "Update a variable in a pipeline" },
      ],
    },
    {
      name: "variable-group",
      description: "Manage variable groups",
      subcommands: [
        { name: "create", description: "Create a variable group" },
        { name: "delete", description: "Delete a variable group" },
        { name: "list", description: "List variable groups" },
        { name: "show", description: "Show variable group details" },
        { name: "update", description: "Update a variable group" },
        {
          name: "variable",
          description: "Manage variables in a variable group",
          subcommands: [
            {
              name: "create",
              description: "Add a variable to a variable group",
            },
            {
              name: "delete",
              description: "Delete a variable from variable group",
            },
            {
              name: "list",
              description: "List the variables in a variable group",
            },
            {
              name: "update",
              description: "Update a variable in a variable group",
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
