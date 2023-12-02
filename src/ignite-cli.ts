const generatorsGenerator: Fig.Generator = {
  script: ["ls", "ignite/templates"],
  postProcess: (out) => {
    if (out.trim() === "") return [];
    return out.split("\n").map((gen) => ({
      name: gen,
    }));
  },
};

const completionSpec: Fig.Spec = {
  name: "ignite-cli",
  description:
    "Ignite is a CLI that helps you spin up a new React Native app using a battle-tested tech stack",
  options: [
    {
      name: ["-h", "--help"],
      description: "Output usage information",
    },
    {
      name: ["-v", "--version"],
      description: "Output the version number",
    },
  ],
  subcommands: [
    {
      name: "new",
      description: "Create a new React Native app",
      args: {
        name: "name",
      },
      options: [
        {
          name: "--expo",
          description: "Use Expo",
        },
        {
          name: "--bundle",
          description: "Set the bundle ID of the app",
          args: {
            name: "bundle",
          },
        },
      ],
    },
    {
      name: ["g", "generate"],
      description: "Generate components and other app features",
      args: [
        {
          name: "generator",
          generators: generatorsGenerator,
          isOptional: true,
        },
        {
          name: "name",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--list",
          description: "List installed generators",
        },
        {
          name: "--update",
          description: "Update installed generators",
        },
      ],
    },
    {
      name: "update",
      description: "Update installed generators",
      args: {
        name: "generator",
        generators: generatorsGenerator,
      },
      options: [
        {
          name: "--all",
          description: "Update all installed generators",
        },
      ],
    },
    {
      name: "doctor",
      description:
        "Check your environment & display versions of installed dependencies",
    },
  ],
};

export default completionSpec;
