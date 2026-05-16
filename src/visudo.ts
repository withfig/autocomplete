const completionSpec: Fig.Spec = {
  name: "visudo",
  description:
    "Visudo edits the sudoers file, which defines the users and groups with administrator rights",
  options: [
    {
      name: ["--check", "-c"],
      description: "Checking existing sudoers file for syntax errors",
    },
    {
      name: ["--file", "-f"],
      description: "Set an alternative sudoers file location",
      args: {
        name: "New sudoers location",
        description: "Specify the alternate sudoers file location",
        template: "filepaths",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Display a short help message",
    },
    {
      name: ["--quiet", "-q"],
      description: "Enable quiet mode (syntax error not printed)",
    },
    {
      name: ["--strict", "-s"],
      description: "Enable strict checking of the sudoers file",
    },
    {
      name: ["--version", "-V"],
      description: "Display version and exit",
    },
    {
      name: ["--export", "-x"],
      description: "Export JSON and write it to output_file",
      args: {
        name: "Output file name",
        template: "filepaths",
        suggestCurrentToken: true,
      },
    },
    {
      name: ["--perms", "-P"],
      description: "Enforce default mode for the sudoers file",
    },
    {
      name: ["--owner", "-O"],
      description: "Enforce the default ownership for the sudoers file",
    },
  ],
  // Only uncomment if visudo takes an argument
  // args: {}
};
export default completionSpec;
