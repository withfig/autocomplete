export const completion: Fig.Spec = {
  name: "tmux",
  description: "A terminal multiplexer",
  subcommands: [
    {
      name: ["new", "new-session"],
      description: "Start a new session",
      options: [
        {
          name: "-s",
          description: "Start a new session with the given name",
          args: {
            name: "session-name",
          },
        },
        {
          name: "-n",
          description: "Start a new session with the given window",
          args: {
            name: "window-name",
          },
        },
      ],
    },
    {
      name: ["ls", "list-sssions"],
      description: "Show all sessions",
    },
    {
      name: ["a", "at", "attach", "attach-session"],
      description: "Attach to last session",
      options: [
        {
          name: "-t",
          description: "Attach to a session with the given name",
          args: {
            name: "session-name",
          },
        },
      ],
    },
    {
      name: ["kill-ses", "kill-session"],
      description: "Kill/delete sessions",
      options: [
        {
          name: "-t",
          description: "Kill/delete session with the given name",
          args: {
            name: "session-name",
          },
        },
        {
          name: "-a",
          description: "Kill/delete all session but the current",
        },
      ],
    },
    {
      name: "info",
      description: "Show every session, window, pane, etc...",
    },
  ],
  options: [],
};
