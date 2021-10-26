const completionSpec: Fig.Spec = {
  name: "offazure",
  description: "Manage on-premise resources for migrate",
  subcommands: [
    {
      name: "hyperv",
      description: "Manage Hyper-V on-premise resources",
      subcommands: [
        {
          name: "cluster",
          description: "Manage Hyper-V cluster",
          subcommands: [
            {
              name: "list",
              description: "Get all clusters on the on-premise site",
            },
            {
              name: "show",
              description: "Get the details of a Hyper-V cluster",
            },
          ],
        },
        {
          name: "host",
          description: "Manage Hyper-V host",
          subcommands: [
            {
              name: "list",
              description: "Get all hosts on the on-premise site",
            },
            { name: "show", description: "Get the details of a Hyper-V host" },
          ],
        },
        {
          name: "machine",
          description: "Manage Hyper-V machine",
          subcommands: [
            {
              name: "list",
              description: "List all machines on the on-premise site",
            },
            { name: "show", description: "Get the details of a machine" },
          ],
        },
        {
          name: "run-as-account",
          description: "Manage Hyper-V run-as-account",
          subcommands: [
            {
              name: "list",
              description: "List all run-as-accounts on the on-premise site",
            },
            {
              name: "show",
              description: "Get the details of a run-as-account",
            },
          ],
        },
        {
          name: "site",
          description: "Manage Hyper-V site",
          subcommands: [
            { name: "create", description: "Create a Hyper-V site" },
            { name: "delete", description: "Delete a Hyper-V site" },
            { name: "show", description: "Get the details of a site" },
          ],
        },
      ],
    },
    {
      name: "vmware",
      description: "Manage VMware on-premise resources",
      subcommands: [
        {
          name: "machine",
          description: "Manage VMware machine",
          subcommands: [
            {
              name: "list",
              description: "List all machines on the on-premise site",
            },
            { name: "show", description: "Get the details of a machine" },
          ],
        },
        {
          name: "run-as-account",
          description: "Manage VMware run-as-account",
          subcommands: [
            {
              name: "list",
              description: "List all run-as-accounts on the on-premise site",
            },
            {
              name: "show",
              description: "Get the details of a run-as-account",
            },
          ],
        },
        {
          name: "site",
          description: "Manage VMware site",
          subcommands: [
            {
              name: "create",
              description: "Create a site for VMware resources",
            },
            { name: "delete", description: "Delete a VMware site" },
            { name: "show", description: "Get the details of a VMware site" },
          ],
        },
        {
          name: "vcenter",
          description: "Manage VMware vCenter",
          subcommands: [
            {
              name: "list",
              description: "List all vCenters on the on-premise site",
            },
            { name: "show", description: "Get the details of a vCenter" },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
