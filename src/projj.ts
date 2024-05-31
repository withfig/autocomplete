const repoGenerator: Fig.Generator = {
  custom: async (_, executeCommand, context) => {
    const { stdout } = await executeCommand({
      command: "cat",
      // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
      args: [`${context.environmentVariables["HOME"]}/.projj/cache.json`],
    });
    const cache = JSON.parse(stdout);
    return Object.keys(cache).map((key) => ({
      name: key.split("/").pop(),
      description: cache[key].repo,
    }));
  },
};

const hookGenerator: Fig.Generator = {
  custom: async (_, executeCommand, context) => {
    const { stdout } = await executeCommand({
      command: "cat",
      // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
      args: [`${context.environmentVariables["HOME"]}/.projj/config.json`],
    });
    const cache = JSON.parse(stdout);
    const hooks = cache.hooks;
    return Object.keys(hooks).map((key) => ({
      name: key,
      description: hooks[key],
    }));
  },
};

const completionSpec: Fig.Spec = {
  name: "projj",
  description: "Manage repository easily",
  subcommands: [
    {
      name: "completion",
      description: "Generate completion script",
    },
    {
      name: "add",
      description: "Add repository",
      args: {
        name: "repository url",
      },
    },
    {
      name: "find",
      description: "Find repository",
      args: {
        name: "repository name",
        generators: repoGenerator,
      },
    },
    {
      name: "import",
      description: "Import repositories from existing directory",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "init",
      description: "Initialize configuration",
    },
    {
      name: "remove",
      description: "Remove repository",
      args: {
        name: "repository name",
        generators: repoGenerator,
      },
    },
    {
      name: "run",
      description: "Run hook in current directory",
      args: {
        name: "hook name",
        generators: hookGenerator,
      },
    },
    {
      name: "runall",
      description: "Run hook in every repository",
      args: {
        name: "hook name",
        generators: hookGenerator,
      },
    },
    {
      name: "sync",
      description: "Sync data from directory",
      args: {
        name: "directory",
        template: "folders",
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for projj",
    },
    {
      name: ["--version", "-v"],
      description: "Show version number",
    },
  ],
};

export default completionSpec;
