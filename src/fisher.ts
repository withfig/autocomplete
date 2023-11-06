const pluginList = [
  {
    name: "IlanCosman/tide@v5",
    displayName: "Tide",
    description: "[Prompt] - 🌊 The ultimate Fish prompt",
    icon: "fig://icon?type=box",
    priority: 99,
  },
  {
    name: "pure-fish/pure",
    displayName: "Pure",
    description:
      "[Prompt] - Pretty, minimal, and fast prompt for Fish from Zsh",
    icon: "fig://icon?type=box",
    priority: 98,
  },
  {
    name: "jorgebucaran/hydro",
    displayName: "Hydro",
    description: "[Prompt] - Minimal, lag-free prompt with async Git status",
    icon: "fig://icon?type=box",
    prority: 97,
  },
  {
    name: "jethrokuan/z",
    displayName: "Z",
    description: "[Plugin] - Pure-fish z directory jumping",
    icon: "fig://icon?type=package",
  },
  {
    name: "PatrickF1/fzf.fish",
    displayName: "FZF.fish",
    description:
      "[Plugin] - Augment your fish command line with fzf key bindings",
    icon: "fig://icon?type=package",
  },
  {
    name: "jorgebucaran/nvm.fish",
    displayName: "NVM.fish",
    description: "[Plugin] -  Node.js version manager lovingly made for Fish",
    icon: "fig://icon?type=package",
  },
  {
    name: "franciscolourenco/done",
    displayName: "Done",
    description:
      "[Plugin] - A fish-shell package to automatically receive notifications when long processes finish",
    icon: "fig://icon?type=package",
  },
  {
    name: "jorgebucaran/replay.fish",
    displayName: "Replay.fish",
    description: "[Plugin] - Run Bash commands replaying changes in Fish. 🍤",
    icon: "fig://icon?type=package",
  },
  {
    name: "jorgebucaran/spark.fish",
    displayName: "Spark.fish",
    description:
      "[Plugin] - Visualize a range of numbers right in your terminal",
    icon: "fig://icon?type=package",
  },
  {
    name: "joseluisq/gitnow@2.10.0",
    displayName: "GitNow",
    description: "[Plugin] - Speed up your Git workflow. 🐠",
    icon: "fig://icon?type=package",
  },
  // To be continued ...
];

const installedPlugins: Fig.Generator = {
  script: ["fish", "-c", "fisher list"],
  postProcess: (output: string) => {
    if (!output) {
      return [];
    }
    return output
      .substring(19)
      .split("\n")
      .map((p: string) => {
        return {
          name: p.trim(),
          icon: "fig://icon?type=package",
          description: "Plugin",
        };
      });
  },
};

const completionSpec: Fig.Spec = {
  name: "fisher",
  description: "A plugin manager for Fish",
  subcommands: [
    {
      name: "install",
      description: "Install plugin",
      subcommands: pluginList,
    },
    {
      name: "remove",
      description: "Remove plugins",
      args: {
        name: "installed plugins",
        description: "The plugin you want to remove",
        isDangerous: true,
        isVariadic: true,
        generators: installedPlugins,
      },
    },
    {
      name: "update",
      description: "Update plugins",
      args: {
        name: "installed plugins",
        description: "The plugin you want to update",
        isVariadic: true,
        generators: installedPlugins,
      },
    },
    {
      name: "list",
      description: "List plugins",
      args: {
        name: "RegEx",
        description: "Search in list with regular expression",
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for fisher",
    },
    {
      name: ["--version", "-v"],
      description: "Show fisher version",
    },
  ],
};
export default completionSpec;
