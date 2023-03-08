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
  script: "snaplet snapshot ls",
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
  script: "snaplet snapshot ls",
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
  script: "snaplet database ls",
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

const configCommand: Fig.Subcommand = {
  name: "config",
  description: "Manage configuration",
  subcommands: [
    {
      name: "generate",
      description: "Generate transform files",
    },
    {
      name: ["list", "ls"],
      description: "List config variables",
    },
    {
      name: "pull",
      description: "Pull cloud project config to local",
    },
    {
      name: "push",
      description: "Push local project config to cloud",
    },
    {
      name: "setup",
      description: "Setup local project configuration",
      args: { name: "targetDatabaseUrl", isOptional: true },
    },
  ],
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
    },
    {
      name: ["drop", "delete", "d"],
      description: "Drop a preview database",
      args: {
        name: "database-name",
        isOptional: true,
        generators: databaseGenerator,
      },
    },
    {
      name: ["url", "u"],
      description: "Show a preview database url",
      args: {
        name: "database-name",
        isOptional: true,
        generators: databaseGenerator,
      },
    },
    {
      name: ["destroy", "ds"],
      description: "Destroy the database server",
    },
    {
      name: ["setup", "s"],
      description: "Create a preview database server",
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
    },
    {
      name: "create",
      description: "Create a snapshot in cloud",
    },
    {
      name: ["list", "ls"],
      description: "List all snapshots",
    },
    {
      name: ["restore", "r"],
      description: "Restore a snapshot",
      args: {
        name: "snapshot-name",
        isOptional: true,
        generators: snapshotsGenerator,
      },
    },
    {
      name: ["share", "upload"],
      description: "Share a snapshot",
      args: {
        name: "snapshot-name",
        isOptional: true,
        generators: snapshotsGenerator,
      },
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
  description: "",
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
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for snaplet",
    },
    {
      name: ["--version", "-v"],
      description: "Show version number",
    },
  ],
  // Only uncomment if snaplet takes an argument
  // args: {}
};
export default completionSpec;
