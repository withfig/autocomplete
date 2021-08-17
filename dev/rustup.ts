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
        {
          name: "profile",
          description: "Show the current profile",
        },
        {
          name: "keys",
          description: "Display the known PGP keys",
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
        },
      ],

      // If a subcommand or option takes an argument, you must include the args prop, even if it's an empty object (like below)
      // If you want to build custom suggestions for arguments check out: https://fig.io/docs/concepts/dynamic-suggestions
      options: [
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
      ],
    },
    {
      name: "update",
      description: "Update Rust toolchains and rustup",

      options: [
        {
          name: "--force",
          description: "Force an update, even if some components are missing",
        },
        {
          name: "--force-non-host",
          description:
            "Install toolchains that require an emulator. See https://github.com/rust-lang/rustup/wiki/Non-host-toolchains",
        },
        {
          name: ["-h", "--help"],
          description: "Prints help information",
        },
        {
          name: "--no-self-update",
          description:
            "Don't perform self update when running the `rustup update` command",
        },
      ],
      args: {
        name: "toolchain",
        description:
          "Toolchain name, such as 'stable', 'nightly', or '1.8.0'. For more information see `rustup help toolchain`",
        isOptional: true,
      },
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
