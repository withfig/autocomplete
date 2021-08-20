const completionSpec: Fig.Spec = {
  name: "mix",
  description: "Mix is a build tool for Elixir",
  subcommands: [
    {
      name: "new",
      description: "Creates a new Elixir project at the given path",
      args: [
        {
          name: "path",
          template: ["folders"],
        },
      ],
    },
    {
      name: "help",
      description: "Lists all available tasks",
      args: [
        {
          name: "task",
          isOptional: true,
          description: "Prints documentation for a given task",
          generators: [
            {
              cache: { ttl: 30000 },
              script: "mix help",
              postProcess: makeTaskSuggestions,
            },
          ],
        },
      ],
    },
  ],
  args: [
    {
      name: "task",
      description: "Invokes the task (mix run) in a project",
      isOptional: true,
      generators: [
        {
          cache: { ttl: 30000 },
          script: "mix help",
          postProcess: makeTaskSuggestions,
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for mix",
    },
    {
      name: ["-v", "--version"],
      description: "View your current mix version",
      priority: 49,
    },
  ],
};

function makeTaskSuggestions(out: string) {
  return out
    .split("\n")
    .map((task) => {
      const [name, description] = task.split("#").map((x) => x.trim());

      return {
        name: name.replace(/^mix /, ""),
        description,
      };
    }) // filter out commands which do not make sense here
    .filter((x) => !["mix", "help", "new"].includes(x.name));
}

export default completionSpec;
