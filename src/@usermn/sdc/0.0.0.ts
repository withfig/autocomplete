const completion: Fig.Subcommand = {
  name: "sdc",
  description: '"setup dominic\'s computer" cli tool',
  subcommands: [
    {
      name: "help",
      description: "Display help for command",
      priority: 49,
      args: {
        name: "command",
        isOptional: true,
        template: "help",
      },
    },
  ],
  options: [
    {
      name: ["-V", "--version"],
      description: "Output the version number",
    },
    {
      name: ["-f", "--force"],
      description: "Bypass checks",
    },
    {
      name: "--no-end-clear",
      description:
        "Skip clearing the console at the end so that output can be viewed",
    },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      priority: 49,
    },
  ],
};

const versions: Fig.VersionDiffMap = {};

versions["0.0.4"] = {};

export { versions };
export default completion;
