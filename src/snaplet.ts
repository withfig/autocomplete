type Snapshots = {
  name: string;
  status: "SUCCESS" | "ERROR";
  created: string;
  size: string;
  src: "LOCAL" | "CLOUD";
};

type PreviewDatabase = {
  name: string;
  size: string;
  snapshotName: string;
};

function parseSnapshotList(output: string): Snapshots[] {
  const result: Snapshots[] = [];
  const outputSplit = output
    // Trim all multiples spaces into only single one
    .replace(/ +/g, " ")
    // Remove all terminal escaping sequence
    .replace(/\u001b\[[0-9;]*[A-Za-z]/g, "")
    .split("\n");
  if (outputSplit.length > 4 && outputSplit[1].startsWith("NAME")) {
    // Skip last empty line and snapshot count line
    for (let i = 2; i < outputSplit.length - 2; i++) {
      // Each snapshot have name, status, date, size, location
      const columns = outputSplit[i].split(" ");
      result.push({
        name: columns.shift(),
        status: columns.shift().includes("SUCCESS") ? "SUCCESS" : "ERROR",
        created: `${columns.shift()} ${columns.shift()} ${columns.shift()}`,
        size: `${columns.shift()}${columns.shift()}`,
        src: columns.shift().includes("☁️") ? "CLOUD" : "LOCAL",
      });
    }
  }
  return result;
}

function parsePreviewDatabaseList(output: string): PreviewDatabase[] {
  const result: PreviewDatabase[] = [];
  const outputSplit = output
    // Trim all multiples spaces into only single one
    .replace(/ +/g, " ")
    // Remove all terminal escaping sequence
    .replace(/\u001b\[[0-9;]*[A-Za-z]/g, "")
    .split("\n");
  // if there is at least one database
  if (outputSplit.length > 2 && outputSplit[1].startsWith("NAME")) {
    // Skip the header lines
    for (let i = 2; i < outputSplit.length; i++) {
      // Each database have a name, size and the snapshot used for creation
      const columns = outputSplit[i].split(" ");
      const name = columns.shift();
      const size = `${columns.shift()}${columns.shift()}`;
      const snapshot = columns.shift();
      result.push({
        name,
        size,
        snapshotName: snapshot,
      });
    }
  }
  return result;
}

const snapshotsGenerator: Fig.Generator = {
  script: ["snaplet", "snapshot", "ls"],
  postProcess: (output) => {
    const result: Fig.Suggestion[] = [];
    const snapshotList = parseSnapshotList(output);
    for (const snapshot of snapshotList) {
      const statusEmoji = snapshot.status === "SUCCESS" ? `✅` : `❌`;
      const locationEmoji = snapshot.src === "CLOUD" ? "☁️" : "💻";
      result.push({
        name: snapshot.name,
        description: `${statusEmoji} ${snapshot.created} ${snapshot.size} ${locationEmoji}`,
      });
    }
    return result;
  },
};

// Only suggest successful snapshots on the cloud
const snapshotsSuccessCloudGenerator: Fig.Generator = {
  script: ["snaplet", "snapshot", "ls"],
  postProcess: (output) => {
    const result: Fig.Suggestion[] = [];
    const snapshotList = parseSnapshotList(output).filter(
      (s) => s.src === "CLOUD" && s.status === "SUCCESS"
    );
    for (const snapshot of snapshotList) {
      const statusEmoji = `✅`;
      const locationEmoji = "☁️";
      result.push({
        name: snapshot.name,
        description: `${statusEmoji} ${snapshot.created} ${snapshot.size} ${locationEmoji}`,
      });
    }
    return result;
  },
};

const databaseGenerator: Fig.Generator = {
  script: ["snaplet", "database", "ls"],
  postProcess: (output) => {
    const result: Fig.Suggestion[] = [];
    const databases = parsePreviewDatabaseList(output);
    for (const database of databases) {
      result.push({
        name: database.name,
        description: `${database.size} (${database.snapshotName})`,
      });
    }
    return result;
  },
};

const persistentOptions = [
  {
    name: ["--help", "-h"],
    description: "Show help for snaplet",
    isPersistent: true,
  },
  {
    name: ["--version", "-v"],
    description: "Show version number",
    isPersistent: true,
  },
];

const authCommand: Fig.Subcommand = {
  name: "auth",
  description: "Manage auth state",
  subcommands: [
    {
      name: ["login", "setup"],
      description: "Login with an access token",
      args: { name: "access-token", isOptional: true },
    },
  ],
};

const configTypeOption: Fig.Option = {
  name: ["--type", "-t"],
  args: {
    suggestions: ["typedefs", "transform", "keys", "seed"],
  },
};
const yesOption: Fig.Option = {
  name: "--yes",
  description: "Automatically accept any prompt, useful for scripts",
};
const configCommand: Fig.Subcommand = {
  name: "config",
  description: "Manage configuration",
  subcommands: [
    {
      name: "generate",
      options: [
        {
          name: "--dry-run",
        },
        configTypeOption,
      ],

      description: "Generate transform files",
    },
    {
      name: ["list", "ls"],

      description: "List config variables",
    },
    {
      name: "pull",
      options: [configTypeOption],

      description: "Pull cloud project config to local",
    },
    {
      name: "push",
      options: [configTypeOption],

      description: "Push local project config to cloud",
    },
    {
      name: "setup",
      options: [
        {
          name: "--generate",
        },
        { name: "--no-generate" },
        yesOption,
      ],

      description: "Setup local project configuration",
      args: { name: "targetDatabaseUrl", isOptional: true },
    },
  ],
};

const snapshotTagsOption: Fig.Option = {
  name: "--tags",
  description: "Filter snapshots by tags",
  args: { name: "tags-list", description: "Tag1,tag2,tag3" },
};
const snapshotLatestOption: Fig.Option = {
  name: "--latest",
  description: "Restore the latest snapshot",
};
const databaseGitOption: Fig.Option = {
  name: "--git",
  description: "Infer the database name from the current git branch",
};
const databaseCommand: Fig.Subcommand = {
  name: ["database", "db"],
  description: "Manage preview database",
  subcommands: [
    {
      name: ["cache", "ca"],
      description: "Cache a snapshot into the preview database server",
      args: {
        name: "snapshot",
        isOptional: true,
        generators: snapshotsSuccessCloudGenerator,
      },
      options: [
        snapshotTagsOption,
        {
          name: "--latest",
          description:
            "Select the latest snapshot captured to cache in the preview database server",
        },
        {
          name: "--clear",
          description:
            "Remove the snapshot from the preview database server cache",
        },
      ],
    },
    {
      name: ["create", "c"],
      description: "Create a preview database from a snapshot",
      args: [
        { name: "database-name" },
        {
          name: "snapshot",
          isOptional: true,
          generators: snapshotsSuccessCloudGenerator,
        },
      ],
      options: [
        snapshotTagsOption,
        snapshotLatestOption,
        databaseGitOption,
        {
          name: "--no-snapshot",
          description: "Create an empty database not based on a snapshot",
        },
        {
          name: "--force",
          description:
            "Force the database creation, it will drop and recreate the existing database if present",
        },
      ],
    },
    {
      name: ["drop", "delete", "d"],
      description: "Drop a preview database",
      args: {
        name: "database-name",
        isOptional: true,
        generators: databaseGenerator,
      },
      options: [databaseGitOption],
    },
    {
      name: ["url", "u"],
      description: "Show a preview database url",
      args: {
        name: "database-name",
        isOptional: true,
        generators: databaseGenerator,
      },
      options: [databaseGitOption],
    },
    {
      name: ["destroy", "ds"],
      description: "Destroy the database server",
      options: [yesOption],
    },
    {
      name: ["setup", "s"],
      description: "Create a preview database server",
      options: [
        {
          name: "--region",
          description:
            "Fly.io region where the preview database server should be created",
          args: {
            suggestions: [
              { name: "ams", description: "Amsterdam, Netherlands" },
              { name: "cdg", description: "Paris, France" },
              { name: "den", description: "Denver, Colorado (US)" },
              { name: "dfw", description: "Dallas, Texas (US)" },
              { name: "ewr", description: "Secaucus, NJ (US)" },
              { name: "fra", description: "Frankfurt, Germany" },
              { name: "gru", description: "São Paulo" },
              { name: "hkg", description: "Hong Kong, Hong Kong" },
              { name: "iad", description: "Ashburn, Virginia (US)" },
              { name: "jnb", description: "Johannesburg, South Africa" },
              { name: "lax", description: "Los Angeles, California (US)" },
              { name: "lhr", description: "London, United Kingdom" },
              { name: "maa", description: "Chennai (Madras), India" },
              { name: "mad", description: "Madrid, Spain" },
              { name: "mia", description: "Miami, Florida (US)" },
              { name: "nrt", description: "Tokyo, Japan" },
              { name: "ord", description: "Chicago, Illinois (US)" },
              { name: "otp", description: "Bucharest, Romania" },
              { name: "scl", description: "Santiago, Chile" },
              { name: "sea", description: "Seattle, Washington (US)" },
              { name: "sin", description: "Singapore" },
              { name: "sjc", description: "Sunnyvale, California (US)" },
              { name: "syd", description: "Sydney, Australia" },
              { name: "waw", description: "Warsaw, Poland" },
              { name: "yul", description: "Montreal, Canada" },
              { name: "yyz", description: "Toronto, Canada" },
            ],
          },
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List preview databases",
    },
  ],
};

const discordCommand: Fig.Subcommand = {
  name: ["discord", "chat"],
  description: "Open the Snaplet Discord chat window in your browser",
};

const documentationCommand: Fig.Subcommand = {
  name: ["documentation", "docs"],
  description: "Opens the Snaplet Documentation in your browser",
};

const projectTeamOption: Fig.Option = {
  name: ["--team", "-t"],
  args: {
    name: "team-name",
  },
};
const projectCommand: Fig.Subcommand = {
  name: "project",
  description: "Manage project configuration",
  subcommands: [
    {
      name: "create",
      description: "Create a new project",
      args: {
        name: "name",
      },
      options: [projectTeamOption],
    },
    {
      name: "invite",
      description: "Create an invite URL for this project",
    },
    {
      name: "setup",
      description: "Set up a project",
      args: {
        name: "project-id",
        isOptional: true,
      },
    },
  ],
};

const proxyCommand: Fig.Subcommand = {
  name: ["proxy", "dev"],
  description: "Start a database proxy",
};

const seedCommand: Fig.Subcommand = {
  options: [
    {
      name: ["-i", "--interactive"],
      description: "Show interactive prompts to customise seeding",
    },
    {
      name: ["-n", "--entriesPerTable"],
      args: {
        name: "number",
        default: "100",
      },
    },
  ],
  name: ["seed", "gen", "generate"],
  description: "Populates an empty database with generated data",
};

const snapshotCommand: Fig.Subcommand = {
  name: ["snapshot", "ss"],
  description: "Manage snapshots",
  subcommands: [
    {
      name: ["capture", "c"],
      description: "Capture a new snapshot",
      args: {
        name: "destination-path",
        isOptional: true,
        template: "folders",
      },
      options: [
        {
          name: ["--env", "--environment"],
          description: "Environment to use when capturing the snapshot",
          args: {
            name: "environment-name",
            suggestions: ["cloud", "local"],
            default: "local",
          },
        },
        {
          name: ["-m", "--message"],
          description: "Attach a message to the snapshot",
          args: {
            name: "message",
          },
        },
        {
          name: ["--subset-path", "--subset"],
          description: "Path to a subset config file",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          ...snapshotTagsOption,
          description: "Attach tags to the snapshot",
        },
        {
          name: ["-t", "--transform-mode"],
          description: "Transformation mode to apply to the snapshot",
          args: {
            name: "transformation-mode",
            suggestions: ["strict", "unsafe", "auto"],
          },
        },
      ],
    },
    {
      name: "create",
      description: "Create a snapshot in cloud",
      options: [{ name: "--json" }],
    },
    {
      name: ["list", "ls"],
      description: "List all snapshots",
      options: [snapshotTagsOption],
    },
    {
      name: ["restore", "r"],
      description: "Restore a snapshot",
      args: {
        name: "snapshot-name",
        isOptional: true,
        generators: snapshotsGenerator,
      },
      options: [
        {
          name: ["data", "--no-data"],
          description: "Restore data on the database (skip with --no-data)",
        },
        {
          name: ["schema", "--no-schema"],
          description: "Restore schema on the database (skip with --no-schema)",
        },
        {
          name: ["reset", "--no-reset"],
          description:
            "Drop destination database before restoring schemas (skip with --no-reset)",
        },
        snapshotTagsOption,
        snapshotLatestOption,
        {
          name: ["-y", "--yes"],
          description: "Performs a restore without a confirmation message",
        },
        {
          name: "--schema-only",
          description: "Skip data, only restore schema",
          deprecated: { description: "Use --no-data" },
        },
        {
          name: "--data-only",
          description:
            "Restore data only (keep the current schema and indexes)",
          deprecated: { description: "Use --no-schema" },
        },
      ],
    },
    {
      name: ["share", "upload"],
      description: "Share a snapshot",
      args: {
        name: "snapshot-name",
        isOptional: true,
        generators: snapshotsGenerator,
      },
      options: [
        { name: "--no-encrypt", description: "Disable encryption" },
        snapshotTagsOption,
        {
          ...snapshotLatestOption,
          description: "Share the latest snapshot",
        },
      ],
    },
    {
      name: ["sample", "s"],
      description: "Create a sample of a database",
      args: {
        name: "destination-path",
        isOptional: true,
        template: "folders",
      },
      options: [
        {
          name: ["--env", "--environment"],
          description: "Environment to use when slicing the snapshot",
          args: {
            name: "environment-name",
            suggestions: ["cloud", "local"],
            default: "local",
          },
        },
        {
          name: ["--sample-config-path", "--subset-path"],
          description: "Path to a sample config file",
          args: {
            template: "filepaths",
          },
        },
        {
          name: ["-f", "--force"],
          description: "Force overwrite existing sample file",
          isDangerous: true,
        },
      ],
    },
  ],
};

const subsetCommand: Fig.Subcommand = {
  name: ["subset", "subsetting"],
  description: "Manage subsetting",
  subcommands: [
    {
      name: ["setup", "configure", "config"],
      description: "Configure subsetting",
    },
  ],
};
const teamCommand: Fig.Subcommand = {
  name: "team",
  description: "Manage team configuration",
  subcommands: [
    {
      name: "create",
      description: "Create a new team",
      args: {
        name: "team-name",
      },
    },
  ],
};
const upgradeCommand: Fig.Subcommand = {
  name: "upgrade",
  description: "Upgrade this binary",
};
const completionCommand: Fig.Subcommand = {
  name: "completion",
  description: "Generate completion script",
};

const completionSpec: Fig.Spec = {
  name: "snaplet",
  description:
    "Create and share PostgreSQL snapshots with schema, data transformation, and preview databases for collaborative development (see: https://docs.snaplet.dev)",
  subcommands: [
    authCommand,
    configCommand,
    databaseCommand,
    discordCommand,
    documentationCommand,
    projectCommand,
    proxyCommand,
    seedCommand,
    snapshotCommand,
    subsetCommand,
    teamCommand,
    upgradeCommand,
    completionCommand,
  ],
  options: persistentOptions,
  // Only uncomment if snaplet takes an argument
  // args: {}
};
export default completionSpec;
