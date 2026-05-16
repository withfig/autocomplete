const postProcessBranches: Fig.Generator["postProcess"] = (out, tokens) => {
  return out
    .split("\n")
    .map((elm) => {
      let name = elm.trim();
      if (name.startsWith("*") || name.startsWith("+")) {
        name = name.slice(2);
      }

      const prefixTypeBranch = tokens[0];
      if (!name.startsWith(prefixTypeBranch)) {
        return {};
      }

      return {
        name: name.replace(prefixTypeBranch, ""),
        description: `${prefixTypeBranch.replace("/", "")} branch`,
        icon: "fig://icon?type=git",
      };
    })
    .filter((x) => x.name);
};

async function getGitFlowPrefix(
  type: string,
  executeShellCommand: Fig.ExecuteCommandFunction
): Promise<string> {
  const { stdout } = await executeShellCommand({
    command: "git",
    args: ["config", "--get", `gitflow.prefix.${type}`],
  });
  return stdout;
}

export const gitFlowGenerators: Record<string, Fig.Generator> = {
  typeBranches: {
    custom: async (tokens, executeShellCommand) => {
      const prefix = await getGitFlowPrefix(tokens[1], executeShellCommand);
      const { stdout } = await executeShellCommand({
        command: "git",
        args: [
          "--no-optional-locks",
          "branch",
          "-a",
          "--no-color",
          "--sort=-committerdate",
        ],
      });
      return postProcessBranches(stdout, [prefix]);
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "git-flow",
  description:
    "A collection of Git extensions to provide high-level repository operations for Vincent Driessen's branching model",
  subcommands: [
    {
      name: "init",
      description:
        "Initialize a new git repo with support for the branching model",
      options: [
        {
          name: "-d",
          description: "Use default branch naming conventions",
        },
        {
          name: "-f",
          description:
            "Force setting of gitflow branches, even if already configured",
        },
      ],
    },
    {
      name: "feature",
      description: "List all feature branches",
      subcommands: [
        {
          name: "start",
          description: "Create a new feature branch",
          args: {
            name: "name",
            description: "The name of the new feature branch",
          },
        },
        {
          name: "finish",
          description: "Merge a feature branch into develop",
          args: {
            name: "name",
            description: "The name of the feature branch to finish",
            generators: gitFlowGenerators.typeBranches,
          },
        },
        {
          name: "publish",
          description: "Push a feature branch to the remote repository",
          args: {
            name: "name",
            description: "The name of the feature branch to publish",
          },
        },
        {
          name: "pull",
          description: "Pull a feature branch from the remote repository",
          args: [
            {
              name: "origin",
              description: "The name of the remote feature branch",
            },
            {
              name: "name",
              description: "The name of the local feature branch",
            },
          ],
        },
      ],
    },
    {
      name: "release",
      description: "List all release branches",
      subcommands: [
        {
          name: "start",
          description: "Create a new release branch",
          args: {
            name: "name",
            description: "The name of the new release branch",
          },
        },
        {
          name: "finish",
          description: "Merge a release branch into develop",
          args: {
            name: "name",
            description: "The name of the release branch to finish",
            generators: gitFlowGenerators.typeBranches,
          },
        },
      ],
    },
    {
      name: "hotfix",
      description: "List all hotfix branches",
      subcommands: [
        {
          name: "start",
          description: "Create a new hotfix branch",
          args: {
            name: "name",
            description: "The name of the new hotfix branch",
          },
        },
        {
          name: "finish",
          description: "Merge a hotfix branch into develop",
          args: {
            name: "name",
            description: "The name of the hotfix branch to finish",
            generators: gitFlowGenerators.typeBranches,
          },
        },
      ],
    },
    {
      name: "support",
      description: "List all support branches",
      subcommands: [
        {
          name: "start",
          description: "Create a new support branch",
          args: {
            name: "name",
            description: "The name of the new support branch",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
