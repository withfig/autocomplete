export const completion: Fig.Spec = {
  name: "rclone",
  description: "The Swiss army knife of cloud storage",
  subcommands: [
    {
      name: "listremotes",
      description: "List all the remotes in the config file.",
      args: {},
    },
  ],
  options: [
    {
      name: "--version",
      description: "View your current rclone version",
    },
  ],
};
