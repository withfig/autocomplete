const getFilter = (multiple: boolean): Fig.Arg => ({
  name: multiple ? "filters" : "filter",
  description:
    "Filter credentials based on any parameter using <param>=<value>; if <param> is not specified in the filter, will default to url and title",
  isVariadic: multiple,
});

const completionSpec: Fig.Spec = {
  name: "dcli",
  description: "Dashlane CLI",
  icon: "https://avatars.githubusercontent.com/u/2639205?s=200&v=4",
  subcommands: [
    {
      name: ["s", "sync"],
      description: "Manually synchronize the local vault with Dashlane",
    },
    {
      name: ["t", "teammembers"],
      description: "List team members",
      args: {
        name: "page",
        isOptional: true,
      },
    },
    {
      name: ["p", "password"],
      description: "Retrieve a password from the local vault",
      args: getFilter(true),
      options: [
        {
          name: ["o", "output"],
          description: "Output format",
          args: {
            name: "format",
            suggestions: ["clipboard", "password", "json"],
            default: "clipboard",
          },
        },
      ],
    },
    {
      name: ["o", "otp"],
      description: "Retrieve an OTP code from local vault",
      args: getFilter(true),
      options: [
        {
          name: "--print",
          description:
            "Prints just the OTP code, instead of copying it to the clipboard",
        },
      ],
    },
    {
      name: ["n", "note"],
      description: "Retrieve an OTP code from local vault",
      args: getFilter(false),
    },
    {
      name: ["c", "configure"],
      description: "Configure the CLI",
      subcommands: [
        {
          name: "disable-auto-sync",
          args: {
            name: "disabled",
            suggestions: ["true", "false"],
          },
        },
        {
          name: "save-master-password",
          args: {
            name: "enabled",
            suggestions: ["true", "false"],
          },
        },
      ],
    },
    {
      name: "reset",
      description: "Reset and clean your local database and OS keychain",
      isDangerous: true,
    },
    {
      name: "help",
      description: "Display help for command",
      args: { name: "command", isOptional: true, template: "help" },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for dcli",
      isPersistent: true,
    },
    {
      name: ["--version", "-V"],
      description: "Output the version number",
    },
    {
      name: "--debug",
      description: "Print debug messages",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
