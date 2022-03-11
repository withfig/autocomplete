const repoGenerator: Fig.Generator = {
  script: "cat ~/.projj/cache.json",
  postProcess: function (out) {
    const cache = JSON.parse(out);
    return Object.keys(cache).map((key) => ({
      name: key.split("/").pop(),
      description: cache[key].repo,
    }));
  },
};

const hookGenerator: Fig.Generator = {
  script: "cat ~/.projj/config.json",
  postProcess: function (out) {
    const cache = JSON.parse(out);
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
