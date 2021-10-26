const completionSpec: Fig.Spec = {
  name: "hdinsight",
  description: "Manage HDInsight resources",
  subcommands: [
    {
      name: "application",
      description: "Manage HDInsight applications",
      subcommands: [
        {
          name: "create",
          description: "Create an application for a HDInsight cluster",
        },
        {
          name: "delete",
          description:
            "Deletes the specified application on the HDInsight cluster",
        },
        {
          name: "list",
          description:
            "Lists all of the applications for the HDInsight cluster",
        },
        {
          name: "show",
          description: "Gets properties of the specified application",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until an operation is complete",
        },
      ],
    },
    {
      name: "autoscale",
      description: "Manage HDInsight cluster's Autoscale configuration",
      subcommands: [
        {
          name: "condition",
          description:
            "Manage schedule condition of the HDInsight cluster which enabled Schedule-based Autoscale",
          subcommands: [
            { name: "create", description: "Add a new schedule condition" },
            { name: "delete", description: "Delete schedule condition" },
            { name: "list", description: "List all schedule conditions" },
            { name: "update", description: "Update a schedule condition" },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until an operation is complete",
            },
          ],
        },
        {
          name: "create",
          description: "Enable Autoscale for a running cluster",
        },
        {
          name: "delete",
          description: "Disable Autoscale for a running cluster",
        },
        {
          name: "list-timezones",
          description:
            "List the available timezone name when enabling Schedule-based Autoscale",
        },
        {
          name: "show",
          description: "Get the Autoscale configuration of a specified cluster",
        },
        { name: "update", description: "Update the Autoscale configuration" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until an operation is complete",
        },
      ],
    },
    {
      name: "azure-monitor",
      description:
        "Manage Azure Monitor logs integration on an HDInsight cluster",
      subcommands: [
        {
          name: "disable",
          description:
            "Disable the Azure Monitor logs integration on an HDInsight cluster",
        },
        {
          name: "enable",
          description:
            "Enable the Azure Monitor logs integration on an HDInsight cluster",
        },
        {
          name: "show",
          description:
            "Get the status of Azure Monitor logs integration on an HDInsight cluster",
        },
      ],
    },
    { name: "create", description: "Create a new cluster" },
    { name: "delete", description: "Deletes the specified HDInsight cluster" },
    {
      name: "host",
      description: "Manage HDInsight cluster's virtual hosts",
      subcommands: [
        {
          name: "list",
          description: "List the hosts of the specified HDInsight cluster",
        },
        {
          name: "restart",
          description:
            "Restart the specific hosts of the specified HDInsight cluster",
        },
      ],
    },
    {
      name: "list",
      description:
        "List HDInsight clusters in a resource group or subscription",
    },
    {
      name: "list-usage",
      description: "Lists the usages for the specified location",
    },
    {
      name: "monitor",
      description:
        "Manage Classic Azure Monitor logs integration on an HDInsight cluster",
      subcommands: [
        {
          name: "disable",
          description:
            "Disable the Classic Azure Monitor logs integration on an HDInsight cluster",
        },
        {
          name: "enable",
          description:
            "Enable the Classic Azure Monitor logs integration on an HDInsight cluster",
        },
        {
          name: "show",
          description:
            "Get the status of Classic Azure Monitor logs integration on an HDInsight cluster",
        },
      ],
    },
    {
      name: "resize",
      description:
        "Resize the specified HDInsight cluster to the specified size",
    },
    {
      name: "rotate-disk-encryption-key",
      description:
        "Rotate the disk encryption key of the specified HDInsight cluster",
    },
    {
      name: "script-action",
      description: "Manage HDInsight script actions",
      subcommands: [
        {
          name: "delete",
          description:
            "Deletes a specified persisted script action of the cluster",
        },
        {
          name: "execute",
          description:
            "Execute script actions on the specified HDInsight cluster",
        },
        {
          name: "list",
          description:
            "Lists all the persisted script actions for the specified cluster",
        },
        {
          name: "list-execution-history",
          description:
            "Lists all scripts' execution history for the specified cluster",
        },
        {
          name: "promote",
          description:
            "Promotes the specified ad-hoc script execution to a persisted script",
        },
        {
          name: "show-execution-details",
          description:
            "Gets the script execution detail for the given script execution ID",
        },
      ],
    },
    { name: "show", description: "Gets the specified cluster" },
    {
      name: "update",
      description: "Update the tags of the specified HDInsight cluster",
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until an operation is complete",
    },
  ],
};

export default completionSpec;
