import YAML from "yaml";
import { gitGenerators } from "./git";

const hooksInConfig: Fig.Generator = {
  script: ["cat", ".pre-commit-config.yaml"],
  postProcess: (output) => {
    const suggestions: Fig.Suggestion[] = [];

    try {
      const repos = YAML.parse(output).repos;

      if (repos) {
        repos.forEach((repo) => {
          repo.hooks.forEach((hookId) => {
            suggestions.push({
              name: `${hookId.id}`,
            }) as Fig.Suggestion;
          });
        });
      }

      return suggestions;
    } catch (e) {
      console.log(e);
    }
  },
};

const help: Fig.Option = {
  name: ["-h", "--help"],
  description: "Show help message and exit",
};

const color: Fig.Option = {
  name: "--color",
  description: "Whether to use color in output. Defaults to `auto`",
  args: {
    name: "color",
    suggestions: ["auto", "always", "never"],
  },
};

const config: Fig.Option = {
  name: ["--config", "-c"],
  description: "Path to alternate config file",
  args: {
    name: "CONFIG",
    template: "filepaths",
  },
};

const globalOptions: Fig.Option[] = [help, color, config];

const hookStages = [
  "pre-commit",
  "pre-merge-commit",
  "pre-push",
  "prepare-commit-msg",
  "commit-msg",
  "post-commit",
  "post-checkout",
  "post-merge",
  "post-rewrite",
];

const hookType: Fig.Option = {
  name: ["-t", "--hook-type"],
  description: "Type of hook to install",
  args: {
    name: "HOOK_TYPE",
    suggestions: hookStages,
  },
};

const commonRepoOptions: Fig.Option[] = [
  {
    name: ["--verbose", "-v"],
  },
  {
    name: ["--all-files", "-a"],
    description: "Run all files in the repo",
  },
  {
    name: "--files",
    description: "Specific filenames to run hooks on",
    args: {
      name: "FILES",
      isVariadic: true,
      template: ["filepaths", "folders"],
    },
  },
  {
    name: "--show-diff-on-failure",
    description: "When hooks fail, run `git diff` directly afterward",
  },
  {
    name: "--hook-stage",
    description: "The stage during which the hook is fired",
    args: {
      suggestions: hookStages,
    },
  },
  {
    name: "--remote-branch",
    description: "Remote branch ref used by `git push`",
    args: {
      name: "REMOTE_BRANCH",
      generators: gitGenerators.remoteLocalBranches,
    },
  },
  {
    name: "--local-branch",
    description: "Local branch ref used by `git push`",
    args: {
      name: "LOCAL_BRANCH",
      generators: gitGenerators.localBranches,
    },
  },
  {
    name: ["--from-ref", "--source", "-s"],
    description:
      "Represents the original ref in a `from_ref...to_ref` diff expression. For `pre-push` hooks, this represents the branch you are pushing to. For `post-checkout` hooks, this represents the branch that was previously checked out",
    args: {
      name: "FROM_REF",
      generators: gitGenerators.revs,
    },
  },
  {
    name: ["--to-ref", "--origin", "-o"],
    description:
      "Represents the destination ref in a `from_ref...to_ref` diff expression. For `pre-push` hooks, this represents the branch being pushed. For `post-checkout` hooks, this represents the branch that is now checked out",
    args: {
      name: "TO_REF",
      generators: gitGenerators.revs,
    },
  },
  {
    name: "--commit-msg-filename",
    description: "Filename to check when running during `commit-msg`",
    args: {
      name: "COMMIT_MSG_FILENAME",
    },
  },
  {
    name: "--remote-name",
    description: "Remote name used by `git push`",
    args: {
      name: "REMOTE_NAME",
      generators: gitGenerators.remotes,
    },
  },
  {
    name: "--remote-url",
    description: "Remote URL used by `git push`",
    args: {
      name: "REMOTE_URL",
    },
  },
  {
    name: "--checkout-type",
    description:
      "Indicates whether the checkout was a branch checkout (changing branches, flag=1) or a file checkout (retrieving a file from the index, flag=0)",
    args: {
      name: "CHECKOUT_TYPE",
    },
  },
  {
    name: "--is-squash-merge",
    description:
      "During a post-merge hook, indicates whether the merge was a squash merge",
    args: {
      name: "IS_SQUASH_MERGE",
    },
  },
  {
    name: "--rewrite-command",
    description:
      "During a post-rewrite hook, specifies the command that invoked the rewrite",
    args: {
      name: "REWRITE_COMMAND",
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "pre-commit",
  description: "Pre-commit",
  args: {},
  options: [
    help,
    {
      name: ["-V", "--version"],
      description: "Show program's version number and exit",
    },
  ],
  subcommands: [
    {
      name: "autoupdate",
      description:
        "Auto-update pre-commit config to the latest repos' versions",
      options: [
        ...globalOptions,
        {
          name: "--bleeding-edge",
          description:
            "Update to the bleeding edge of `master` instead of the latest tagged version (the default behavior)",
        },
        {
          name: "--freeze",
          description: "Store 'frozen' hashes in `rev` instead of tag names",
        },
        {
          name: "--repo",
          description:
            "Only update this repository -- may be specified multiple times",
          args: {
            name: "REPO",
          },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "clean",
      description: "Clean out pre-commit files",
      options: globalOptions,
    },
    {
      name: "gc",
      description: "Clean unused cached repos",
      options: globalOptions,
    },
    {
      name: "init-templatedir",
      description:
        "Install hook script in a directory intended for use with `git config init.templateDir`",
      options: [
        ...globalOptions,
        hookType,
        {
          name: "--no-allow-missing-config",
          description: "Assume cloned repos should have a `pre-commit` config",
        },
      ],
    },
    {
      name: "install",
      description: "Install the pre-commit script",
      options: [
        ...globalOptions,
        {
          name: ["-f", "--overwrite"],
          description: "Overwrite existing hooks / remove migration mode",
        },
        {
          name: "install-hooks",
          description:
            "Whether to install hook environments for all environments in the config file",
        },
        hookType,
        {
          name: "--allow-missing-config",
          description:
            "Whether to allow a missing `pre-commit` configuration file or exit with a failure code",
        },
      ],
    },
    {
      name: "migrate-config",
      description: "Migrate list configuration to new map configuration",
      options: globalOptions,
    },
    {
      name: "run",
      description: "Run hooks",
      options: [...globalOptions, ...commonRepoOptions],
      args: {
        name: "hook",
        description: "A single hook-id to run",
        isOptional: true,
        generators: hooksInConfig,
      },
    },
    {
      name: "sample-config",
      description: "Produce a sample .pre-commit-config.yaml file",
      options: globalOptions,
    },
    {
      name: "try-repo",
      description:
        "Try the hooks in a repository, useful for developing new hooks",
      args: [
        {
          name: "repo",
          description: "Repository to source hooks from",
        },
        {
          name: "hook",
          description: "A single hook-id to run",
          isOptional: true,
          generators: hooksInConfig,
        },
      ],
      options: [
        ...globalOptions,
        ...commonRepoOptions,
        {
          name: ["--ref", "--rev"],
          description:
            "Manually select a rev to run against, otherwise the `HEAD` revision will be used",
          args: {
            name: "REV",
          },
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall the pre-commit script",
      options: [...globalOptions, hookType],
    },
    {
      name: "help",
      description: "Show help for a specific command",
      options: globalOptions,
    },
  ],
};

export default completionSpec;
