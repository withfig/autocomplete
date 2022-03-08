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
    },
    {
      name: "init",
      description: "Initialize configuration",
    },
    {
      name: "remove",
      description: "Remove repository",
    },
    {
      name: "run",
      description: "Run hook in current directory",
    },
    {
      name: "runall",
      description: "Run hook in every repository",
    },
    {
      name: "sync",
      description: "Sync data from directory",
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
