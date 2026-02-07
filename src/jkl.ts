const statusSuggestions: Fig.Suggestion[] = [
  { name: "working", description: "Agent is actively working" },
  { name: "waiting", description: "Agent is waiting for human input" },
  { name: "done", description: "Agent has completed the task" },
  { name: "none", description: "Clear status / no explicit status" },
];

const sessionNameGenerator: Fig.Generator = {
  script: 'tmux list-sessions -F "#{session_name}" 2>/dev/null',
  postProcess: (output) =>
    output
      .split("\n")
      .filter(Boolean)
      .map((name) => ({
        name,
        description: "tmux session",
      })),
};

const sessionIdGenerator: Fig.Generator = {
  script: 'tmux list-sessions -F "#{session_id}|#{session_name}" 2>/dev/null',
  postProcess: (output) =>
    output
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [sessionId, sessionName] = line.split("|");
        return {
          name: sessionId,
          description: sessionName ? `tmux session: ${sessionName}` : "tmux session id",
        };
      }),
};

const paneIdGenerator: Fig.Generator = {
  script: 'tmux list-panes -a -F "#{pane_id}|#{session_name}" 2>/dev/null',
  postProcess: (output) =>
    output
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [paneId, sessionName] = line.split("|");
        return {
          name: paneId,
          description: sessionName ? `tmux session: ${sessionName}` : "tmux pane id",
        };
      }),
};

const completionSpec: Fig.Spec = {
  name: "jkl",
  description: "Inspect agent statuses in tmux sessions",
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
  subcommands: [
    {
      name: "tui",
      description: "Open the interactive TUI",
      options: [
        {
          name: "--session-name",
          description:
            "Session name used when opening pane status selector mode",
          args: {
            name: "session_name",
            isVariadic: true,
            generators: sessionNameGenerator,
          },
        },
        {
          name: ["--open-pane-state", "--pane-state"],
          description: "Open pane status selector popup",
        },
        {
          name: "--pane-id",
          description: "Target pane id for pane selector mode",
          args: {
            name: "pane_id",
            generators: paneIdGenerator,
          },
        },
      ],
    },
    {
      name: "upsert",
      description: "Upsert session or pane metadata",
      args: {
        name: "session_name",
        isVariadic: true,
        generators: sessionNameGenerator,
      },
      options: [
        {
          name: "--session-id",
          description: "Session id when updating a session entry",
          args: {
            name: "session_id",
            generators: sessionIdGenerator,
          },
        },
        {
          name: "--pane-id",
          description: "Pane id when updating a pane entry",
          args: {
            name: "pane_id",
            generators: paneIdGenerator,
          },
        },
        {
          name: "--pane-name",
          description: "Human-friendly pane name",
          args: {
            name: "pane_name",
          },
        },
        {
          name: "--status",
          description: "Status value to persist",
          args: {
            name: "status",
            suggestions: statusSuggestions,
          },
        },
        {
          name: "--context",
          description: "Session or pane context text",
          args: {
            name: "context",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "rename",
      description: "Rename a session context entry by tmux session id",
      args: [
        {
          name: "session_id",
          generators: sessionIdGenerator,
        },
        {
          name: "session_name",
          isVariadic: true,
          generators: sessionNameGenerator,
        },
      ],
    },
    {
      name: "sync",
      description: "Sync stored metadata with current tmux sessions and panes",
    },
    {
      name: "update",
      description: "Self-update jkl binary from GitHub releases",
      options: [
        {
          name: "--prerelease",
          description: "Allow pre-release versions",
        },
      ],
    },
  ],
};

export default completionSpec;
