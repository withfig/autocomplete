interface Organization {
  name: string;
  slug: string;
  type: string;
  overages: boolean;
  blocked_reads: boolean;
  blocked_writes: boolean;
  plan_id: string;
  plan_timeline: string;
  platform: string;
}

interface Database {
  Name: string;
  DbId: string;
  Hostname: string;
  block_reads: boolean;
  block_writes: boolean;
  regions: string[];
  primaryRegion: string;
  group: string;
  delete_protection: boolean;
  parent?: {
    id: string;
    name: string;
    branched_at: string;
  };
}

interface DatabasesResponse {
  databases: Database[];
}

interface Group {
  name: string;
  version: string;
  uuid: string;
  locations: string[];
  primary: string;
  delete_protection: boolean;
}

interface GroupsResponse {
  groups: Group[];
}

async function getAuthToken(
  executeCommand: (
    args: Fig.ExecuteCommandInput
  ) => Promise<Fig.ExecuteCommandOutput>
): Promise<string | null> {
  try {
    const { stdout } = await executeCommand({
      command: "turso",
      args: ["auth", "token"],
    });

    // Extract JWT token using regex
    const tokenMatch = stdout.match(
      /ey[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/
    );
    return tokenMatch ? tokenMatch[0] : null;
  } catch (error) {
    return null;
  }
}

async function fetchOrganizations(
  token: string,
  executeCommand: (
    args: Fig.ExecuteCommandInput
  ) => Promise<Fig.ExecuteCommandOutput>
): Promise<Organization[]> {
  try {
    const { stdout, stderr } = await executeCommand({
      command: "curl",
      args: [
        "-s",
        "-H",
        `Authorization: Bearer ${token}`,
        "https://api.turso.tech/v1/organizations",
      ],
    });

    if (stderr) return [];

    return JSON.parse(stdout);
  } catch (error) {
    return [];
  }
}

async function fetchDatabases(
  token: string,
  orgSlug: string,
  executeCommand: (
    args: Fig.ExecuteCommandInput
  ) => Promise<Fig.ExecuteCommandOutput>
): Promise<DatabasesResponse> {
  try {
    const { stdout, stderr } = await executeCommand({
      command: "curl",
      args: [
        "-s",
        "-H",
        `Authorization: Bearer ${token}`,
        `https://api.turso.tech/v1/organizations/${orgSlug}/databases`,
      ],
    });

    if (stderr) return { databases: [] };

    return JSON.parse(stdout);
  } catch (error) {
    return { databases: [] };
  }
}

async function fetchGroups(
  token: string,
  orgSlug: string,
  executeCommand: (
    args: Fig.ExecuteCommandInput
  ) => Promise<Fig.ExecuteCommandOutput>
): Promise<GroupsResponse> {
  try {
    const { stdout, stderr } = await executeCommand({
      command: "curl",
      args: [
        "-s",
        "-H",
        `Authorization: Bearer ${token}`,
        `https://api.turso.tech/v1/organizations/${orgSlug}/groups`,
      ],
    });

    if (stderr) return { groups: [] };

    return JSON.parse(stdout);
  } catch (error) {
    return { groups: [] };
  }
}

// Reusable generators for autocompletion
const databaseGenerator: Fig.Generator = {
  custom: async (tokens, executeCommand) => {
    try {
      const token = await getAuthToken(executeCommand);
      if (!token) return [];

      const organizations = await fetchOrganizations(token, executeCommand);
      if (!organizations || organizations.length === 0) return [];

      const orgSlug = organizations[0].slug;
      const databases = await fetchDatabases(token, orgSlug, executeCommand);

      if (!databases || !databases.databases) return [];

      return databases.databases.map((db) => ({
        name: db.Name,
        description: `Database in ${db.regions.join(", ")} regions`,
        icon: "fig://icon?type=box",
      }));
    } catch (error) {
      return [];
    }
  },
};

const groupGenerator: Fig.Generator = {
  custom: async (tokens, executeCommand) => {
    try {
      const token = await getAuthToken(executeCommand);
      if (!token) return [];

      const organizations = await fetchOrganizations(token, executeCommand);
      if (!organizations || organizations.length === 0) return [];

      const orgSlug = organizations[0].slug;
      const groups = await fetchGroups(token, orgSlug, executeCommand);

      if (!groups || !groups.groups) return [];

      return groups.groups.map((group) => ({
        name: group.name,
        description: `Group in ${group.locations.join(", ")} locations`,
        icon: "fig://icon?type=box",
      }));
    } catch (error) {
      return [];
    }
  },
};

const organizationGenerator: Fig.Generator = {
  custom: async (tokens, executeCommand) => {
    try {
      const token = await getAuthToken(executeCommand);
      if (!token) return [];

      const organizations = await fetchOrganizations(token, executeCommand);
      if (!organizations || organizations.length === 0) return [];

      return organizations.map((org) => ({
        name: org.slug,
        description: `${org.name} (${org.type}, ${org.plan_id})`,
        icon: "fig://icon?type=box",
      }));
    } catch (error) {
      return [];
    }
  },
};

const completionSpec: Fig.Spec = {
  name: "turso",
  description: "Turso CLI for managing Turso databases",
  options: [
    {
      name: ["-c", "--config-path"],
      description: "Path to the directory with config file",
      args: {
        name: "string",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Help for turso",
    },
    {
      name: ["-v", "--version"],
      description: "Version for turso",
    },
  ],
  subcommands: [
    {
      name: "auth",
      description: "Authenticate with Turso",
      subcommands: [
        {
          name: "api-tokens",
          description: "Manage your API tokens",
          subcommands: [
            {
              name: "list",
              description: "List API tokens",
            },
            {
              name: "mint",
              description: "Mint an API token",
            },
            {
              name: "revoke",
              description: "Revoke an API token",
              args: {
                name: "api-token-name",
              },
            },
          ],
        },
        {
          name: "login",
          description: "Login to the platform",
        },
        {
          name: "logout",
          description: "Log out currently logged in user",
        },
        {
          name: "signup",
          description: "Create a new Turso account",
        },
        {
          name: "token",
          description:
            "Shows the token used to authenticate you to Turso platform API",
        },
        {
          name: "whoami",
          description: "Show the currently logged in user",
        },
      ],
    },
    {
      name: "config",
      description: "Manage your CLI configuration",
      subcommands: [
        {
          name: "cache",
          description: "Manage your CLI cache",
          subcommands: [
            {
              name: "clear",
              description: "Clear the CLI local cache",
            },
          ],
        },
        {
          name: "path",
          description: "Get the path to the CLI configuration file",
        },
        {
          name: "set",
          description: "Set a configuration value",
          subcommands: [
            {
              name: "autoupdate",
              description: "Configure autoupdate behavior",
              args: {
                suggestions: ["on", "off"],
              },
            },
            {
              name: "token",
              description: "Configure the token used by turso",
              args: {
                name: "token",
              },
            },
          ],
        },
      ],
    },
    {
      name: "db",
      description: "Manage databases",
      subcommands: [
        {
          name: "config",
          description: "Manage db config",
          subcommands: [
            {
              name: "attach",
              description: "Manage attach config of a database",
            },
            {
              name: "delete-protection",
              description: "Manage delete-protection config of a database",
            },
          ],
        },
        {
          name: "create",
          description: "Create a database",
          args: {
            name: "name",
          },
        },
        {
          name: "destroy",
          description: "Destroy a database",
          args: {
            name: "name",
            generators: databaseGenerator,
          },
        },
        {
          name: "export",
          description: "Export a database snapshot from Turso to SQLite file",
          args: {
            name: "name",
            generators: databaseGenerator,
          },
        },
        {
          name: "import",
          description: "Import a SQLite database file to Turso",
          args: {
            name: "file",
            description: "Path to SQLite database file",
            template: "filepaths",
          },
        },
        {
          name: "inspect",
          description: "Inspect database",
          args: {
            name: "name",
            isVariadic: true,
            generators: databaseGenerator,
          },
        },
        {
          name: "list",
          description: "List databases",
        },
        {
          name: "locations",
          description: "List available database locations",
        },
        {
          name: "replicate",
          description: "Replicate a database",
          args: {
            name: "name",
            generators: databaseGenerator,
          },
        },
        {
          name: "shell",
          description: "Start a SQL shell",
        },
        {
          name: "show",
          description: "Show information from a database",
          args: {
            name: "name",
            generators: databaseGenerator,
          },
        },
        {
          name: "tokens",
          description: "Manage db tokens",
        },
        {
          name: "unarchive",
          description: "Unarchive a database",
        },
        {
          name: "update",
          description: "Updates the database to the latest turso version",
          args: {
            name: "name",
            generators: databaseGenerator,
          },
        },
      ],
    },
    {
      name: "dev",
      description: "Starts a local development server for Turso",
    },
    {
      name: "group",
      description: "Manage your database groups",
      subcommands: [
        {
          name: "config",
          description: "Manage group config",
          args: {
            name: "name",
            generators: groupGenerator,
          },
        },
        {
          name: "create",
          description: "Create a database group",
          args: {
            name: "name",
          },
        },
        {
          name: "destroy",
          description: "Destroy a database group",
          args: {
            name: "name",
            generators: groupGenerator,
          },
        },
        {
          name: "list",
          description: "List databases groups",
        },
        {
          name: "locations",
          description: "Manage your database group locations",
        },
        {
          name: "show",
          description: "Show information about a group",
        },
        {
          name: "tokens",
          description: "Manage group tokens",
        },
        {
          name: "transfer",
          description: "Transfers the group to the specified organization",
          args: {
            name: "organization",
          },
        },
        {
          name: "unarchive",
          description: "Unarchive a database group",
          args: {
            name: "name",
            generators: groupGenerator,
          },
        },
        {
          name: "update",
          description: "Updates the group",
          args: {
            name: "name",
            generators: groupGenerator,
          },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        isOptional: true,
      },
    },
    {
      name: "org",
      description: "Manage your organizations",
      subcommands: [
        {
          name: "audit-logs",
          description: "Manage organization audit logs",
          subcommands: [
            {
              name: "list",
              description: "List organization audit logs",
            },
          ],
        },
        {
          name: "create",
          description: "Create a new organization",
          args: {
            name: "name",
          },
        },
        {
          name: "db-transfer",
          description: "Transfers a database to another organization",
          args: {
            name: "name",
          },
        },
        {
          name: "destroy",
          description: "Destroy an organization",
          args: {
            name: "name",
          },
        },
        {
          name: "invites",
          description: "Manage your organization invites",
          subcommands: [
            {
              name: "create",
              description: "Invite an email to join the current organization",
            },
            {
              name: "list",
              description: "List invites in the current organization",
            },
            {
              name: "remove",
              description:
                "Remove a pending invite to an email to join the current organization",
            },
          ],
        },
        {
          name: "invoice",
          description: "Manage Invoices",
          subcommands: [
            {
              name: "configure",
              description: "Configure billing information added to invoices",
            },
            {
              name: "info",
              description: "Show billing information added to invoices",
            },
            {
              name: "list",
              description: "List invoices",
            },
          ],
        },
        {
          name: "list",
          description: "List your organizations",
        },
        {
          name: "members",
          description: "Manage your organization members",
          subcommands: [
            {
              name: "add",
              description: "Add a member to current organization",
              args: {
                name: "username",
              },
            },
            {
              name: "create",
              description: "Invite an email to join the current organization",
              args: {
                name: "email",
              },
            },
            {
              name: "list",
              description: "List members of current organization",
            },
            {
              name: "rm",
              description: "Remove a member from the current organization",
              args: {
                name: "username",
              },
            },
          ],
        },
        {
          name: "switch",
          description:
            "Switch to an organization as the context for your commands",
          args: {
            name: "organization",
            generators: organizationGenerator,
          },
        },
      ],
    },
    {
      name: "plan",
      description: "Manage your organization plan",
      subcommands: [
        {
          name: "show",
          description: "Show your current organization plan",
        },
      ],
    },
    {
      name: "quickstart",
      description: "New to Turso? Start here!",
    },
    {
      name: "relax",
      description: "Sometimes you feel like you're working too hard... relax!",
    },
    {
      name: "update",
      description: "Update the CLI to the latest version",
    },
  ],
};
export default completionSpec;
