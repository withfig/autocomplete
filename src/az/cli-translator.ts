const completionSpec: Fig.Spec = {
  name: "cli-translator",
  description: "Translate ARM template or REST API to CLI scripts",
  subcommands: [
    {
      name: "arm",
      description:
        "Translate ARM template to CLI scripts(Currently only support Compute, Network and Storage)",
      subcommands: [
        {
          name: "translate",
          description:
            "Translate ARM template to CLI scripts(Currently only support Compute, Network and Storage)",
        },
      ],
    },
  ],
};

export default completionSpec;
