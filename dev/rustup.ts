// To learn more about Fig's autocomplete standard visit: https://fig.io/docs/concepts/cli-skeleton

// The below is a dummy example for git. Make sure to change the file name!
const completionSpec: Fig.Spec = {
  name: "rustup",
  description: "The Rust toolchain installer",
  subcommands: [
    {
      name: "show",
      description: "Show the active and installed toolchains or profiles",
      subcommands: [
        {
          name: "active-toolchain",
          description: "Show the active toolchain",
        },
        {
          name: "home",
          description: "Display the computed value of RUSTUP_HOME",
        },
      ],

      // If a subcommand or option takes an argument, you must include the args prop, even if it's an empty object (like below)
      // If you want to build custom suggestions for arguments check out: https://fig.io/docs/concepts/dynamic-suggestions
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
          args: {
            name: "branch",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Prints help information",
    },
    {
      name: ["-V", "--version"],
      description: "Prints version information",
    },
    {
      name: ["-q", "--quiet"],
      description: "Disable progress output",
    },
    {
      name: ["-v", "--verbose"],
      description: "Enable verbose output",
    },
  ],
  args: {
    name: "toolchain",
    description:
      "release channel (e.g. +stable) or custom toolchain to set override",
    isOptional: true,
  },
};

export default completionSpec;
