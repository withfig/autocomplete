const completionSpec: Fig.Spec = {
  name: "cloud-service",
  description: "Manage cloud service (extended support)",
  subcommands: [
    {
      name: "create",
      description:
        "Create a cloud service (extended support). Please note some properties can be set only during cloud service creation",
    },
    { name: "delete", description: "Delete a cloud service" },
    {
      name: "delete-instance",
      description: "Delete role instances in a cloud service",
    },
    {
      name: "list",
      description: "Get a list of all cloud services under a resource group",
    },
    {
      name: "list-all",
      description:
        "Get a list of all cloud services in the subscription, regardless of the associated resource group",
    },
    {
      name: "power-off",
      description:
        "Power off the cloud service. Note that resources are still attached and you are getting charged for the resources",
    },
    {
      name: "rebuild",
      description:
        "Rebuild Role Instances. Reinstall the operating system on instances of web roles or worker roles and initialize the storage resources that are used by them. If you do not want to initialize storage resources, you can use Reimage Role Instances",
    },
    {
      name: "reimage",
      description:
        "Reimage asynchronous operation reinstalls the operating system on instances of web roles or worker roles",
    },
    {
      name: "restart",
      description: "Restart one or more role instances in a cloud service",
    },
    {
      name: "role",
      description: "Manage cloud service role with cloud service",
      subcommands: [
        {
          name: "list",
          description: "Get a list of all roles in a cloud service",
        },
        { name: "show", description: "Get a role from a cloud service" },
      ],
    },
    {
      name: "role-instance",
      description: "Manage cloud service role instance with cloud service",
      subcommands: [
        {
          name: "delete",
          description: "Delete a role instance from a cloud service",
        },
        {
          name: "list",
          description: "Get the list of all role instances in a cloud service",
        },
        {
          name: "rebuild",
          description:
            "The Rebuild Role Instance asynchronous operation reinstalls the operating system on instances of web roles or worker roles and initializes the storage resources that are used by them. If you do not want to initialize storage resources, you can use Reimage Role Instance",
        },
        {
          name: "reimage",
          description:
            "The Reimage Role Instance asynchronous operation reinstalls the operating system on instances of web roles or worker roles",
        },
        {
          name: "restart",
          description:
            "The Reboot Role Instance asynchronous operation requests a reboot of a role instance in the cloud service",
        },
        {
          name: "show",
          description: "Get a role instance from a cloud service",
        },
        {
          name: "show-instance-view",
          description:
            "Retrieve information about the run-time state of a role instance in a cloud service",
        },
        {
          name: "show-remote-desktop-file",
          description:
            "Get a remote desktop file for a role instance in a cloud service",
        },
      ],
    },
    { name: "show", description: "Display information about a cloud service" },
    {
      name: "show-instance-view",
      description: "Get the status of a cloud service",
    },
    { name: "start", description: "Start the cloud service" },
    { name: "update", description: "Update a cloud service" },
    {
      name: "update-domain",
      description: "Manage cloud service update domain with cloud service",
      subcommands: [
        {
          name: "list-update-domain",
          description: "Get a list of all update domains in a cloud service",
        },
        {
          name: "show-update-domain",
          description: "Get the specified update domain of a cloud service",
        },
        {
          name: "walk-update-domain",
          description:
            "Update the role instances in the specified update domain",
        },
      ],
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the cloud-service is met",
    },
  ],
};

export default completionSpec;
