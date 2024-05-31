// https://github.com/dotzero/git-profile
const profiles: Fig.Generator = {
  script: ["git-profile", "list"],
  postProcess: (output) => {
    return Array.from(output.matchAll(/^\[(.+?)\]$/gm)).map((result) => ({
      name: result[1],
      description: `Use profile "${result[1]}"`,
    }));
  },
};

const completionSpec: Fig.Spec = {
  name: "git-profile",
  description: "Switch profiles",
  subcommands: [
    {
      name: "use",
      description: "Use a profile",
      args: {
        name: "profile",
        description: "Profile you want to apply in this repository",
        generators: profiles,
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Help for git-profile script",
    },
    {
      name: ["--config", "-c"],
      description: 'Config file (default "~/.gitprofile")',
    },
  ],
};

export default completionSpec;
