import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Subcommand = {
  name: "elixir",
  description: "Elixir Language",
  args: [
    {
      name: "file",
      description: ".exs file",
      generators: filepaths({
        extensions: ["exs"],
        editFileSuggestions: { priority: 76 },
      }),
    },
    {
      name: "data",
      isOptional: true,
    },
  ],
  options: [
    {
      name: ["-e", "--eval"],
      description: "Evaluates the given command",
      isRepeatable: true,
      args: {
        name: "EXPRESSION",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Prints this message and exits",
    },
    {
      name: "-r",
      description: "Requires the given files/patterns",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "-S",
      description: "Finds and executes the given script in $PATH",
      args: {
        name: "SCRIPT",
      },
    },
    {
      name: "-pr",
      description: "Requires the given files/patterns in parallel",
      isRepeatable: true,
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "-pa",
      description: "Prepends the given path to Erlang code path",
      isRepeatable: true,
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "-pz",
      description: "Appends the given path to Erlang code path",
      isRepeatable: true,
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: ["-v", "--version"],
      description: "Prints Elixir version and exits",
    },
    {
      name: "--app",
      description: "Starts the given app and its dependencies",
      isRepeatable: true,
      args: {
        name: "APP",
      },
    },
    {
      name: "--erl",
      description: "Switches to be passed down to Erlang",
      isRepeatable: true,
      args: {
        name: "SWITCHES",
      },
    },
    {
      name: "--logger-otp-reports",
      description: "Enables or disables OTP reporting",
      args: {
        name: "BOOL",
      },
    },
    {
      name: "--logger-sasl-reports",
      description: "Enables or disables SASL reporting",
      args: {
        name: "BOOL",
      },
    },
    {
      name: "--no-halt",
      description: "Does not halt the Erlang VM after execution",
    },
    {
      name: "--werl",
      description: "Uses Erlang's Windows shell GUI (Windows only)",
    },
    {
      name: "--cookie",
      description: "Sets a cookie for this distributed node",
      args: {
        name: "COOKIE",
      },
    },
    {
      name: "--hidden",
      description: "Makes a hidden node",
    },
    {
      name: "--name",
      description: "Makes and assigns a name to the distributed node",
      args: {
        name: "NAME",
      },
    },
    {
      name: "--rpc-eval",
      description: "Evaluates the given command on the given remote node",
      isRepeatable: true,
      args: [
        {
          name: "NODE",
        },
        {
          name: "COMMAND",
        },
      ],
    },
    {
      name: "--sname",
      description: "Makes and assigns a short name to the distributed node",
      args: {
        name: "NAME",
      },
    },
    {
      name: "--boot",
      description: "Uses the given FILE.boot to start the system",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--boot-var",
      description: "Makes $VAR available as VALUE to FILE.boot",
      isRepeatable: true,
      args: [
        {
          name: "VAR",
        },
        {
          name: "VALUE",
        },
      ],
    },
    {
      name: "--erl-config",
      description: "Loads configuration in FILE.config written in Erlang",
      isRepeatable: true,
      args: {
        name: "FILE",
      },
    },
    {
      name: "--pipe-to",
      description: "Starts the Erlang VM as a named PIPEDIR and LOGDIR",
      args: [
        {
          name: "PIPEDIR",
        },
        {
          name: "LOGDIR",
        },
      ],
    },
    {
      name: "--vm-args",
      description: "Passes the contents in file as arguments to the VM",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
  ],
};

export default completionSpec;
