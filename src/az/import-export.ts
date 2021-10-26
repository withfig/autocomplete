const completionSpec: Fig.Spec = {
  name: "import-export",
  description: "Manage Import Export",
  subcommands: [
    {
      name: "bit-locker-key",
      description: "Import-export bit-locker-key",
      subcommands: [
        {
          name: "list",
          description:
            "Returns the BitLocker Keys for all drives in the specified job",
        },
      ],
    },
    {
      name: "create",
      description:
        "Creates a new job or updates an existing job in the specified subscription",
    },
    {
      name: "delete",
      description:
        "Deletes an existing job. Only jobs in the Creating or Completed states can be deleted",
    },
    {
      name: "list",
      description: "Returns all active and completed jobs in a subscription",
    },
    {
      name: "location",
      description: "Import-export location",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a list of locations to which you can ship the disks associated with an import or export job. A location is a Microsoft data center region",
        },
        {
          name: "show",
          description:
            "Returns the details about a location to which you can ship the disks associated with an import or export job. A location is an Azure region",
        },
      ],
    },
    { name: "show", description: "Gets information about an existing job" },
    {
      name: "update",
      description:
        "Updates specific properties of a job. You can call this operation to notify the Import/Export service that the hard drives comprising the import or export job have been shipped to the Microsoft data center. It can also be used to cancel an existing job",
    },
  ],
};

export default completionSpec;
