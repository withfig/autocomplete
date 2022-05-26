const completionSpec: Fig.Spec = {
  name: "mob",
  description: "Fast git handover for remote collaboration with mob.sh",
  subcommands: [
    {
      name: ["start", "s"],
      description: "Start session from base branch in wip branch",
      options: [
        {
          name: ["--include-uncommitted-changes", "-i"],
          description: "Move uncommitted changes to wip branch",
        },
        {
          name: ["--branch", "-b"],
          description: "Set wip branch to 'mob/<base-branch>/<branch-postfix>'",
          args: {
            name: "branch-postfix",
          },
        },
      ],
      args: {
        name: "minutes",
        description: "Start a <minutes> timer",
        isOptional: true,
      },
    },
    {
      name: ["next", "n"],
      description: "Handover changes in wip branch to next person",
      options: [
        {
          name: ["--stay", "-s"],
          description: "Stay on wip branch (default)",
        },
        {
          name: ["--return-to-base-branch", "-r"],
          description: "Return to base branch",
        },
        {
          name: ["--message", "-m"],
          description: "Override commit message",
          args: {
            name: "commit-message",
          },
        },
      ],
    },
    {
      name: ["done", "d"],
      description: "Squashes all changes in wip branch to index in base branch",
      options: [
        {
          name: "--no-squash",
          description:
            "Squash no commits from wip branch, only merge wip branch",
        },
        {
          name: "--squash",
          description: "Squash all commits from wip branch",
        },
        {
          name: "--squash-wip",
          description:
            "Squash wip commits from wip branch, maintaining manual commits",
        },
      ],
    },
    {
      name: "reset",
      description: "Removes local and remote wip branch",
      options: [
        {
          name: ["--branch", "-b"],
          description: "Set wip branch to 'mob/<base-branch>/<branch-postfix>'",
          args: {
            name: "branch-postfix",
          },
        },
      ],
    },
    {
      name: "clean",
      description: "Removes all orphan wip branches",
    },
    {
      name: ["timer", "t"],
      description: "Start a <minutes> timer",
      args: {
        name: "minutes",
      },
    },
    {
      name: "break",
      description: "Start a <minutes> break timer",
      args: {
        name: "minutes",
      },
    },
    {
      name: "status",
      description: "Show the status of the current session",
    },
    {
      name: "fetch",
      description: "Fetch remote state",
    },
    {
      name: ["branch", "b"],
      description: "Show remote wip branches",
    },
    {
      name: "config",
      description: "Show all configuration options",
    },
    {
      name: "version",
      description: "Show the version",
    },
    {
      name: "help",
      description: "Show help",
    },
    {
      name: "moo",
      description: "Moo!",
    },
  ],
  options: [
    {
      name: "--debug",
      description: "Enable verbose logging",
    },
  ],
};
export default completionSpec;
