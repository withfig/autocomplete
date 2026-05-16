const completionSpec: Fig.Spec = {
  name: "np",
  description: "A better npm publish",
  options: [
    {
      name: "--any-branch",
      description: "Allow publishing from any branch",
    },
    {
      name: "--branch",
      description: "Name of the release branch (default: main | master)",
      args: {
        name: "branch",
      },
    },
    {
      name: "--no-cleanup",
      description: "Skips cleanup of node_modules",
    },
    {
      name: "--no-tests",
      description: "Skips tests",
    },
    {
      name: "--yolo",
      description: "Skips cleanup and testing",
    },
    {
      name: "--no-publish",
      description: "Skips publishing",
    },
    {
      name: "--preview",
      description: "Show tasks without actually executing them",
    },
    {
      name: "--tag",
      description: "Publish under a given dist-tag",
      args: {
        name: "tag",
      },
    },
    {
      name: "--no-yarn",
      description: "Don't use Yarn",
    },
    {
      name: "--contents",
      description: "Subdirectory to publish",
      args: {
        name: "directory",
      },
    },
    {
      name: "--no-release-draft",
      description: "Skips opening a GitHub release draft",
    },
    {
      name: "--release-draft-only",
      description: "Only opens a GitHub release draft",
    },
    {
      name: "--test-script",
      description:
        "Name of npm run script to run tests before publishing (default: test)",
      args: {
        name: "script",
      },
    },
    {
      name: "--no-2fa",
      description: "Don't enable 2FA on new packages (not recommended)",
    },
    {
      name: "--message",
      description:
        "Version bump commit message. `%s` will be replaced with version. (default: '%s' with npm and 'v%s' with yarn)",
      args: {
        name: "message",
      },
    },
  ],
  args: {
    name: "version",
    description: "Version to publish",
    isOptional: true,
  },
};

export default completionSpec;
