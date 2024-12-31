const ListModelGenerator: Fig.Generator = {
  script: ["bash", "-c", "ollama ls | awk '!/NAME/ { print $1 }'"],
  postProcess: (out) => {
    return out
      .trim()
      .split("\n")
      .map((model) => ({ name: model }));
  },
};

const RunModelGenerator: Fig.Generator = {
  script: ["bash", "-c", "ollama ps | awk '!/NAME/ { print $1 }'"],
  postProcess: (out) => {
    return out
      .trim()
      .split("\n")
      .map((model) => ({ name: model }));
  },
};

const completionSpec: Fig.Spec = {
  name: "ollama",
  description:
    "A command-line tool for managing and deploying machine learning models",
  subcommands: [
    {
      name: "serve",
      description: "Start ollama",
    },
    {
      name: "create",
      description: "Create a model from a Modelfile",
      options: [
        {
          name: "-f",
          description: "Specify Modelfile",
          args: {
            name: "filename",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "show",
      description: "Show information for a model",
      args: {
        name: "model",
        generators: ListModelGenerator,
      },
    },
    {
      name: "run",
      description: "Run a model",
      args: {
        name: "model",
        generators: ListModelGenerator,
      },
      options: [
        {
          name: "--verbose",
          description: "Enable verbose output",
        },
      ],
    },
    {
      name: "stop",
      description: "Stop the ollama server",
      args: {
        name: "model",
        generators: RunModelGenerator,
      },
    },
    {
      name: "pull",
      description: "Pull a model from a registry",
    },
    {
      name: "push",
      description: "Push a model to a registry",
    },
    {
      name: ["list", "ls"],
      description: "List models",
    },
    {
      name: "ps",
      description: "List running models",
    },
    {
      name: "cp",
      description: "Copy a model",
      args: {
        name: "SOURCE",
        generators: ListModelGenerator,
      },
    },
    {
      name: "rm",
      description: "Remove a model",
      args: {
        name: "model",
        generators: ListModelGenerator,
      },
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "serve",
          description: "Start ollama",
        },
        {
          name: "create",
          description: "Create a model from a Modelfile",
        },
        {
          name: "show",
          description: "Show information for a model",
        },
        {
          name: "run",
          description: "Run a model",
        },
        {
          name: "stop",
          description: "Stop the ollama server",
        },
        {
          name: "pull",
          description: "Pull a model from a registry",
        },
        {
          name: "push",
          description: "Push a model to a registry",
        },
        {
          name: "list",
          description: "List models",
        },
        {
          name: "ps",
          description: "List running models",
        },
        {
          name: "cp",
          description: "Copy a model",
        },
        {
          name: "rm",
          description: "Remove a model",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for ollama",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Show version information",
    },
  ],
};

export default completionSpec;
