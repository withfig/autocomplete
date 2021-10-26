const completionSpec: Fig.Spec = {
  name: "blueprint",
  description: "Commands to manage blueprint",
  subcommands: [
    {
      name: "artifact",
      description: "Commands to manage blueprint artifact",
      subcommands: [
        { name: "delete", description: "Delete a blueprint artifact" },
        {
          name: "list",
          description: "List artifacts for a given blueprint definition",
        },
        {
          name: "policy",
          description:
            "Commands to manage blueprint policy assignment artifact",
          subcommands: [
            { name: "create", description: "Create blueprint policy artifact" },
            { name: "update", description: "Update blueprint policy artifact" },
          ],
        },
        {
          name: "role",
          description: "Commands to manage blueprint role assignment artifact",
          subcommands: [
            { name: "create", description: "Create blueprint role artifact" },
            { name: "update", description: "Update blueprint role artifact" },
          ],
        },
        { name: "show", description: "Get a blueprint artifact" },
        {
          name: "template",
          description: "Commands to manage blueprint ARM template artifact",
          subcommands: [
            { name: "create", description: "Create blueprint arm artifact" },
            { name: "update", description: "Update blueprint arm artifact" },
          ],
        },
      ],
    },
    {
      name: "assignment",
      description: "Commands to manage blueprint assignment",
      subcommands: [
        { name: "create", description: "Create a blueprint assignment" },
        { name: "delete", description: "Delete a blueprint assignment" },
        {
          name: "list",
          description: "List blueprint assignments within a subscription",
        },
        { name: "show", description: "Get a blueprint assignment" },
        { name: "update", description: "Update a blueprint assignment" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the Blueprint Assignment is met",
        },
        {
          name: "who",
          description: "Get Blueprint Servie Principal Name objectId",
        },
      ],
    },
    { name: "create", description: "Create a blueprint definition" },
    { name: "delete", description: "Delete a blueprint definition" },
    {
      name: "export",
      description:
        "Export a blueprint definition and artifacts to json file(s)",
    },
    {
      name: "import",
      description:
        "Import a blueprint definition and artifacts from a directoy of json files",
    },
    { name: "list", description: "List blueprint definitions" },
    {
      name: "publish",
      description:
        "Publish a new version of the blueprint definition with the latest artifacts. Published blueprint definitions are immutable",
    },
    {
      name: "resource-group",
      description: "Commands to manage blueprint resource group artifact",
      subcommands: [
        {
          name: "add",
          description: "Add a resource group artifact to the blueprint",
        },
        { name: "list", description: "List blueprint resource group artifact" },
        {
          name: "remove",
          description: "Remove a blueprint resource group artifact",
        },
        { name: "show", description: "Show blueprint resource group artifact" },
        {
          name: "update",
          description: "Update blueprint resource group artifact",
        },
      ],
    },
    { name: "show", description: "Get a blueprint definition" },
    { name: "update", description: "Update a blueprint definition" },
    {
      name: "version",
      description: "Commands to manage published blueprint versions",
      subcommands: [
        {
          name: "artifact",
          description: "Commands to manage published blueprint artifacts",
          subcommands: [
            {
              name: "list",
              description:
                "List artifacts for a version of a published blueprint",
            },
            {
              name: "show",
              description: "Show an artifact for a published blueprint",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a published version of a blueprint",
        },
        {
          name: "list",
          description: "List published versions of given blueprint definition",
        },
        { name: "show", description: "Get a published version of a blueprint" },
      ],
    },
  ],
};

export default completionSpec;
