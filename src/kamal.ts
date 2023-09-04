const baseOptions: Fig.Option[] = [
  {
    name: ["-d", "--destination"],
    description: "Specify destination to use",
    args: {
      name: "destination",
      description: "Destination to use",
      generators: {
        script: "bin/kamal destinations --json",
        postProcess: function (out) {
          try {
            return JSON.parse(out).map((destination: string) => ({
              name: destination,
            }));
          } catch (e) {
            console.error(e);
            return [];
          }
        },
      },
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "kamal",
  description: "Deploy web apps anywhere",
  subcommands: [
    {
      name: "destinations",
      description: "List all destinations",
      options: [
        {
          name: "--json",
          description: "Output as JSON",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy your app to a destination",
      icon: "🚀",
      options: [...baseOptions],
    },
  ],
};

export default completionSpec;
