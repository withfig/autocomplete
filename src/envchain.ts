const namespaces: Fig.Generator = {
  script: ["envchain", "--list"],
  postProcess: (output) => {
    return Array.from(new Set(output.split("\n"))).map((namespace) => {
      return {
        name: namespace,
        description: `NAMESPACE ${namespace}`,
      };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "envchain",
  description:
    "Set environment variables with macOS keychain or D-Bus secret service",
  args: [
    {
      name: "NAMESPACE",
      generators: namespaces,
    },
    { name: "CMD", isCommand: true },
  ],
  subcommands: [
    {
      name: ["-s", "--set"],
      description:
        "Add keychain item of environment variable +ENV+ for namespace +NAMESPACE+",
      icon: "fig://icon?type=option",
      args: [
        {
          name: "NAMESPACE",
          generators: namespaces,
        },
        {
          name: "ENV",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: ["-n", "--noecho"],
          description: "Do not echo user input",
        },
        {
          name: ["-p", "--require-passphrase"],
          description: "Always ask for keychain passphrase",
          exclusiveOn: ["--no-require-passphrase"],
        },
        {
          name: ["-P", "--no-require-passphrase"],
          description: "Do not ask for keychain passphrase",
          exclusiveOn: ["--require-passphrase"],
        },
      ],
    },
    {
      name: ["-l", "--list"],
      description: "List namespaces that have been created",
      icon: "fig://icon?type=option",
    },
  ],
};
export default completionSpec;
