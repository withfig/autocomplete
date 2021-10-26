const completionSpec: Fig.Spec = {
  name: "ad",
  description:
    "Manage Azure Active Directory Graph entities needed for Role Based Access Control",
  subcommands: [
    {
      name: "app",
      description: "Manage applications with AAD Graph",
      subcommands: [
        {
          name: "create",
          description:
            "Create a web application, web API or native application",
        },
        {
          name: "credential",
          description:
            "Manage an application's password or certificate credentials",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete an application's password or certificate credentials",
            },
            {
              name: "list",
              description:
                "List an application's password or certificate credential metadata. (The content of the password or certificate credential is not retrievable.)",
            },
            {
              name: "reset",
              description:
                "Append or overwrite an application's password or certificate credentials",
            },
          ],
        },
        { name: "delete", description: "Delete an application" },
        { name: "list", description: "List applications" },
        {
          name: "owner",
          description: "Manage application owners",
          subcommands: [
            { name: "add", description: "Add an application owner" },
            { name: "list", description: "List application owners" },
            { name: "remove", description: "Remove an application owner" },
          ],
        },
        {
          name: "permission",
          description: "Manage an application's OAuth2 permissions",
          subcommands: [
            { name: "add", description: "Add an API permission" },
            {
              name: "admin-consent",
              description:
                "Grant Application & Delegated permissions through admin-consent",
            },
            { name: "delete", description: "Remove an API permission" },
            {
              name: "grant",
              description: "Grant the app an API Delegated permissions",
            },
            {
              name: "list",
              description: "List API permissions the application has requested",
            },
            {
              name: "list-grants",
              description: "List Oauth2 permission grants",
            },
          ],
        },
        { name: "show", description: "Get the details of an application" },
        { name: "update", description: "Update an application" },
      ],
    },
    {
      name: "ds",
      description: "Manage domain service with azure active directory",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new domain service with the specified parameters",
        },
        {
          name: "delete",
          description:
            "The Delete Domain Service operation deletes an existing Domain Service",
        },
        {
          name: "list",
          description:
            "List domain services in resource group or in subscription",
        },
        { name: "show", description: "Get the specified domain service" },
        {
          name: "update",
          description:
            "Update the existing deployment properties for domain service",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the ad ds is met",
        },
      ],
    },
    {
      name: "group",
      description: "Manage Azure Active Directory groups",
      subcommands: [
        { name: "create", description: "Create a group in the directory" },
        { name: "delete", description: "Delete a group from the directory" },
        {
          name: "get-member-groups",
          description:
            "Gets a collection of object IDs of groups of which the specified group is a member",
        },
        { name: "list", description: "List groups in the directory" },
        {
          name: "member",
          description: "Manage Azure Active Directory group members",
          subcommands: [
            { name: "add", description: "Add a member to a group" },
            { name: "check", description: "Check if a member is in a group" },
            { name: "list", description: "Gets the members of a group" },
            { name: "remove", description: "Remove a member from a group" },
          ],
        },
        {
          name: "owner",
          description: "Manage Azure Active Directory group owners",
          subcommands: [
            { name: "add", description: "Add a group owner" },
            { name: "list", description: "List group owners" },
            { name: "remove", description: "Remove a group owner" },
          ],
        },
        {
          name: "show",
          description: "Gets group information from the directory",
        },
      ],
    },
    {
      name: "signed-in-user",
      description: "Show graph information about current signed-in user in CLI",
      subcommands: [
        {
          name: "list-owned-objects",
          description:
            "Get the list of directory objects that are owned by the user",
        },
        {
          name: "show",
          description: "Gets the details for the currently logged-in user",
        },
      ],
    },
    {
      name: "sp",
      description:
        "Manage Azure Active Directory service principals for automation authentication",
      subcommands: [
        { name: "create", description: "Create a service principal" },
        {
          name: "create-for-rbac",
          description:
            "Create a service principal and configure its access to Azure resources",
        },
        {
          name: "credential",
          description: "Manage a service principal's credentials",
          subcommands: [
            {
              name: "delete",
              description: "Delete a service principal's credential",
            },
            {
              name: "list",
              description: "List a service principal's credentials",
            },
            {
              name: "reset",
              description: "Reset a service principal credential",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a service principal and its role assignments",
        },
        { name: "list", description: "List service principals" },
        {
          name: "owner",
          description: "Manage service principal owners",
          subcommands: [
            { name: "list", description: "List service principal owners" },
          ],
        },
        { name: "show", description: "Get the details of a service principal" },
        { name: "update", description: "Update a service principal" },
      ],
    },
    {
      name: "user",
      description:
        "Manage Azure Active Directory users and user authentication",
      subcommands: [
        {
          name: "create",
          description: "Create an Azure Active Directory user",
        },
        { name: "delete", description: "Delete a user" },
        {
          name: "get-member-groups",
          description: "Get groups of which the user is a member",
        },
        { name: "list", description: "List Azure Active Directory users" },
        {
          name: "show",
          description: "Gets user information from the directory",
        },
        { name: "update", description: "Update Azure Active Directory users" },
      ],
    },
  ],
};

export default completionSpec;
