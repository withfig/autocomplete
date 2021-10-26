const completionSpec: Fig.Spec = {
  name: "managed-cassandra",
  description: "Azure Managed Cassandra",
  subcommands: [
    {
      name: "cluster",
      description: "Azure Managed Cassandra Cluster",
      subcommands: [
        { name: "create", description: "Create a Managed Cassandra Cluster" },
        { name: "delete", description: "Deletes a Managed Cassandra Cluster" },
        {
          name: "list",
          description:
            "List the Managed Cassandra Clusters in a ResourceGroup and Subscription. If the ResourceGroup is not specified all the clusters in this Subscription are returned",
        },
        {
          name: "node-status",
          description:
            "Gets Status of all the nodes in all the datacenters in a given Cluster",
        },
        {
          name: "show",
          description: "Get a Managed Cassandra Cluster Resource",
        },
        { name: "update", description: "Update a Managed Cassandra Cluster" },
      ],
    },
    {
      name: "datacenter",
      description: "Azure Managed Cassandra DataCenter",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Datacenter in an Azure Managed Cassandra Cluster",
        },
        {
          name: "delete",
          description: "Deletes a Managed Cassandra Datacenter",
        },
        {
          name: "list",
          description:
            "List the Managed Cassandra Datacenters in a given Cluster",
        },
        {
          name: "show",
          description: "Get a Managed Cassandra DataCenter Resource",
        },
        {
          name: "update",
          description:
            "Update a Datacenter in an Azure Managed Cassandra Cluster",
        },
      ],
    },
  ],
};

export default completionSpec;
