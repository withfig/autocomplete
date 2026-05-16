const completion: Fig.Spec = {
  name: "ts",
  description: "Manage template specs at subscription or resource group scope",
  subcommands: [
    {
      name: "create",
      description: "Create a template spec and or template spec version",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the template spec",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--description",
          description: "The description of the parent template spec",
          args: { name: "description" },
        },
        {
          name: ["--display-name", "-d"],
          description: "The display name of the template spec",
          args: { name: "display-name" },
        },
        {
          name: ["--location", "-l"],
          description:
            "The location to store the template-spec and template-spec version(s). Cannot be changed after creation",
          args: { name: "location" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: ["--template-file", "-f"],
          description:
            "A path to a template file or Bicep file in the file system",
          args: { name: "template-file" },
        },
        {
          name: "--ui-form-definition",
          description:
            "The uiFormDefinition file path in the file system for the template spec version",
          args: { name: "ui-form-definition" },
        },
        {
          name: ["--version", "-v"],
          description: "The template spec version",
          args: { name: "version" },
        },
        {
          name: "--version-description",
          description: "The description of the template spec version",
          args: { name: "version-description" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "delete",
      description:
        "Delete a specified template spec or template spec version by name or resource ID",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the template spec",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--template-spec", "-s"],
          description: "The template spec resource id",
          args: { name: "template-spec" },
        },
        {
          name: ["--version", "-v"],
          description: "The template spec version",
          args: { name: "version" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "export",
      description:
        "Export the specified template spec version and artifacts (if any) to the specified output folder",
      options: [
        {
          name: "--output-folder",
          description: "Existing folder to output export(s)",
          args: { name: "output-folder" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "The name of the template spec",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--template-spec", "-s"],
          description: "The template spec resource id",
          args: { name: "template-spec" },
        },
        {
          name: ["--version", "-v"],
          description: "The template spec version",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "list",
      description: "List template specs or template spec versions",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the template spec",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "show",
      description: "Get the specified template spec or template spec version",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the template spec",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--template-spec", "-s"],
          description: "The template spec resource id",
          args: { name: "template-spec" },
        },
        {
          name: ["--version", "-v"],
          description: "The template spec version",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "update",
      description: "Update a template spec version",
      options: [
        {
          name: "--description",
          description: "The description of the parent template spec",
          args: { name: "description" },
        },
        {
          name: ["--display-name", "-d"],
          description: "The display name of the template spec",
          args: { name: "display-name" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the template spec",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: ["--template-file", "-f"],
          description:
            "A path to a template file or Bicep file in the file system",
          args: { name: "template-file" },
        },
        {
          name: ["--template-spec", "-s"],
          description: "The template spec resource id",
          args: { name: "template-spec" },
        },
        {
          name: "--ui-form-definition",
          description:
            "The uiFormDefinition file path in the file system for the template spec version",
          args: { name: "ui-form-definition" },
        },
        {
          name: ["--version", "-v"],
          description: "The template spec version",
          args: { name: "version" },
        },
        {
          name: "--version-description",
          description: "The description of the template spec version",
          args: { name: "version-description" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
  ],
};

export default completion;
