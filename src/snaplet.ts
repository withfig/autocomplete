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

const snapshotsGenerator: Fig.Generator = {
  script: "snaplet snapshot ls",
  postProcess: (output) => {
    const result: Fig.Suggestion[] = [];
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
        const name = columns.shift();
        const statusEmoji = columns.shift().includes("SUCCESS") ? `✅` : `❌`;
        // XX Minutes/seconds ago
        const date = `${columns.shift()} ${columns.shift()} ${columns.shift()}`;
        // XXXMB/GB
        const size = `${columns.shift()}${columns.shift()}`;
        const location = columns.shift();
        result.push({
          name,
          // Show snapshot date as description
          description: `${statusEmoji} ${date} ${size} ${location}`,
        });
      }
    }
    return result;
  },
};

const databaseGenerator: Fig.Generator = {
  script: "snaplet database ls",
  postProcess: (output) => {
    const result: Fig.Suggestion[] = [];
    const outputSplit = output
      // Trim all multiples spaces into only single one
      .replace(/ +/g, " ")
      // Remove all terminal escaping sequence
      .replace(/\u001b\[[0-9;]*[A-Za-z]/g, "")
      .split("\n");
    // if there is at least one snapshot
    // console.log(output);
    if (outputSplit.length > 2 && outputSplit[1].startsWith("NAME")) {
      // Skip the header lines
      for (let i = 2; i < outputSplit.length; i++) {
        // Each snapshot have name, size, snapshot use for creation
        const columns = outputSplit[i].split(" ");
        const name = columns.shift();
        // XXXMB/GB
        const size = `${columns.shift()}${columns.shift()}`;
        const snapshot = columns.shift();
        result.push({
          name,
          // Show snapshot date as description
          description: `${size} (${snapshot})`,
        });
      }
    }
    return result;
  },
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
        generators: snapshotsGenerator,
      },
    },
    {
      name: ["create", "c"],
      description: "Cache a snapshot into the preview database server",
      args: [
        { name: "database-name" },
        {
          name: "snapshot",
          isOptional: true,
          generators: snapshotsGenerator,
        },
      ],
    },
    {
      name: ["drop", "delete", "d"],
      description: "Drop a preview database",
      args: {
        name: "database",
        isOptional: true,
        generators: databaseGenerator,
      },
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
};

const subsetCommand: Fig.Subcommand = {
  name: ["subset", "subsetting"],
  description: "Manage subsetting",
};
const teamCommand: Fig.Subcommand = {
  name: "team",
  description: "Manage team configuration",
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
