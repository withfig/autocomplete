const completionSpec: Fig.Spec = {
  name: "vmware",
  description: "Commands to manage Azure VMware Solution",
  subcommands: [
    {
      name: "addon",
      description: "Commands to manage addons for a private cloud",
      subcommands: [
        {
          name: "hcx",
          description: "Commands to manage a HCX addon",
          subcommands: [
            {
              name: "create",
              description: "Create a HCX addon for a private cloud",
            },
            {
              name: "delete",
              description: "Delete a HCX addon for a private cloud",
            },
            {
              name: "show",
              description: "Show details of a HCX addon for a private cloud",
            },
            {
              name: "update",
              description: "Update a HCX addon for a private cloud",
            },
          ],
        },
        { name: "list", description: "List addons in a private cloud" },
        {
          name: "srm",
          description: "Commands to manage a Site Recovery Manager (SRM) addon",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Site Recovery Manager (SRM) addon for a private cloud",
            },
            {
              name: "delete",
              description:
                "Delete a Site Recovery Manager (SRM) addon for a private cloud",
            },
            {
              name: "show",
              description:
                "Show details of a Site Recovery Manager (SRM) addon for a private cloud",
            },
            {
              name: "update",
              description:
                "Update a Site Recovery Manager (SRM) addon for a private cloud",
            },
          ],
        },
        {
          name: "vr",
          description: "Commands to manage a vSphere Replication (VR) addon",
          subcommands: [
            {
              name: "create",
              description:
                "Create a vSphere Replication (VR) addon for a private cloud",
            },
            {
              name: "delete",
              description:
                "Delete a vSphere Replication (VR) addon for a private cloud",
            },
            {
              name: "show",
              description:
                "Show details of a vSphere Replication (VR) addon for a private cloud",
            },
            {
              name: "update",
              description:
                "Update a vSphere Replication (VR) addon for a private cloud",
            },
          ],
        },
      ],
    },
    {
      name: "authorization",
      description:
        "Commands to manage the authorizations of an ExpressRoute Circuit for a private cloud",
      subcommands: [
        {
          name: "create",
          description:
            "Create an authorization for an ExpressRoute Circuit in a private cloud",
        },
        {
          name: "delete",
          description:
            "Delete an authorization for an ExpressRoute Circuit in a private cloud",
        },
        {
          name: "list",
          description:
            "List authorizations for an ExpressRoute Circuit in a private cloud",
        },
        {
          name: "show",
          description:
            "Show details of an authorization for an ExpressRoute Circuit in a private cloud",
        },
      ],
    },
    {
      name: "cloud-link",
      description: "Commands to manage cloud links in a private cloud",
      subcommands: [
        {
          name: "create",
          description: "Create or update a cloud link in a private cloud",
        },
        {
          name: "delete",
          description: "Delete a cloud link in a private cloud",
        },
        { name: "list", description: "List cloud links in a private cloud" },
        {
          name: "show",
          description: "Show details of a cloud link in a private cloud",
        },
      ],
    },
    {
      name: "cluster",
      description: "Commands to manage clusters in a private cloud",
      subcommands: [
        {
          name: "create",
          description:
            "Create a cluster in a private cloud. The maximum number of clusters is 4",
        },
        { name: "delete", description: "Delete a cluster in a private cloud" },
        { name: "list", description: "List clusters in a private cloud" },
        {
          name: "show",
          description: "Show details of a cluster in a private cloud",
        },
        { name: "update", description: "Update a cluster in a private cloud" },
      ],
    },
    {
      name: "datastore",
      description: "Commands to manage a datastore in a private cloud cluster",
      subcommands: [
        {
          name: "create",
          description:
            'Please use "netapp-volume create" or "disk-pool-volume create" instead',
        },
        {
          name: "delete",
          description: "Delete a datastore in a private cloud cluster",
        },
        {
          name: "disk-pool-volume",
          description:
            "Create a VMFS datastore in a private cloud cluster using Microsoft.StoragePool provided iSCSI target",
          subcommands: [
            {
              name: "create",
              description:
                "Create a VMFS datastore in a private cloud cluster using Microsoft.StoragePool provided iSCSI target",
            },
          ],
        },
        {
          name: "list",
          description: "List datastores in a private cloud cluster",
        },
        {
          name: "netapp-volume",
          description:
            "Create a new Microsoft.NetApp provided NetApp volume in a private cloud cluster",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new Microsoft.NetApp provided NetApp volume in a private cloud cluster",
            },
          ],
        },
        {
          name: "show",
          description: "Show details of a datastore in a private cloud cluster",
        },
      ],
    },
    {
      name: "global-reach-connection",
      description:
        "Commands to manage global reach connections in a private cloud",
      subcommands: [
        {
          name: "create",
          description: "Create a global reach connection in a private cloud",
        },
        {
          name: "delete",
          description: "Delete a global reach connection in a private cloud",
        },
        {
          name: "list",
          description: "List global reach connections in a private cloud",
        },
        {
          name: "show",
          description:
            "Show details of a global reach connection in a private cloud",
        },
      ],
    },
    {
      name: "hcx-enterprise-site",
      description: "Commands to manage HCX Enterprise Sites in a private cloud",
      subcommands: [
        {
          name: "create",
          description: "Create an HCX Enterprise Site in a private cloud",
        },
        {
          name: "delete",
          description: "Delete an HCX Enterprise Site in a private cloud",
        },
        {
          name: "list",
          description: "List HCX Enterprise Sites in a private cloud",
        },
        {
          name: "show",
          description:
            "Show details of an HCX Enterprise Site in a private cloud",
        },
      ],
    },
    {
      name: "location",
      description: "Commands to check availability by location",
      subcommands: [
        {
          name: "checkquotaavailability",
          description: "Return quota for subscription by region",
        },
        {
          name: "checktrialavailability",
          description: "Return trial status for subscription by region",
        },
      ],
    },
    {
      name: "private-cloud",
      description: "Commands to manage private clouds",
      subcommands: [
        {
          name: "addidentitysource",
          description:
            "Add a vCenter Single Sign On Identity Source to a private cloud",
        },
        { name: "create", description: "Create a private cloud" },
        { name: "delete", description: "Delete a private cloud" },
        {
          name: "deleteidentitysource",
          description:
            "Delete a vCenter Single Sign On Identity Source for a private cloud",
        },
        { name: "list", description: "List the private clouds" },
        {
          name: "listadmincredentials",
          description: "List the admin credentials for the private cloud",
        },
        {
          name: "rotate-nsxt-password",
          description: "Rotate the NSX-T Manager password",
        },
        {
          name: "rotate-vcenter-password",
          description: "Rotate the vCenter password",
        },
        { name: "show", description: "Show details of a private cloud" },
        { name: "update", description: "Update a private cloud" },
      ],
    },
    {
      name: "script-cmdlet",
      description: "Commands to list and show script cmdlet resources",
      subcommands: [
        {
          name: "list",
          description:
            "List script cmdlet resources available for a private cloud to create a script execution resource on a private cloud",
        },
        {
          name: "show",
          description:
            "Get information about a script cmdlet resource in a specific package on a private cloud",
        },
      ],
    },
    {
      name: "script-execution",
      description: "Commands to manage script executions in a private cloud",
      subcommands: [
        {
          name: "create",
          description: "Create or update a script execution in a private cloud",
        },
        {
          name: "delete",
          description: "Delete a script execution in a private cloud",
        },
        {
          name: "list",
          description: "List script executions in a private cloud",
        },
        {
          name: "show",
          description: "Get an script execution by name in a private cloud",
        },
      ],
    },
    {
      name: "script-package",
      description:
        "Commands to list and show script packages available to run on the private cloud",
      subcommands: [
        {
          name: "list",
          description:
            "List script packages available to run on the private cloud",
        },
        {
          name: "show",
          description:
            "Get a script package available to run on a private cloud",
        },
      ],
    },
  ],
};

export default completionSpec;
