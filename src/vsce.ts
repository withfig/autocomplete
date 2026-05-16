import { filepaths } from "@fig/autocomplete-generators";
import { gitGenerators } from "./git";

const targetSuggestions: string[] = [
  "win32-x64",
  "win32-ia32",
  "win32-arm64",
  "linux-x64",
  "linux-arm64",
  "linux-armhf",
  "alpine-x64",
  "alpine-arm64",
  "darwin-x64",
  "darwin-arm64",
];

// NOTE: Running `vsce ls-publishers` requires access to keychain of `vscode-vsce`
// which distracts the completion and needs to "Allow always" the access of it to work well.
// const publishersGenerator: Fig.Generator = {
//   script: ["vsce", "ls-publishers"],
//   postProcess: (out) => {
//     if (out.trim() === "") return [];
//     return out.split("\n").map((publisher) => ({
//       name: publisher,
//       icon: "👤",
//     }));
//   },
// };

const completionSpec: Fig.Spec = {
  name: "vsce",
  description: "The Visual Studio Code Extension Manager",
  subcommands: [
    {
      name: "ls",
      description: "Lists all the files that will be published",
      options: [
        {
          name: "--yarn",
          description:
            "Use yarn instead of npm (default inferred from presence of yarn.lock or .yarnrc)",
        },
        {
          name: "--no-yarn",
          description:
            "Use npm instead of yarn (default inferred from lack of yarn.lock or .yarnrc)",
        },
        {
          name: "--packagedDependencies",
          description:
            "Select packages that should be published only (includes dependencies)",
          args: {
            name: "paths",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: "--ignoreFile",
          description: "Indicate alternative .vscodeignore",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--no-dependencies",
          description: "Disable dependency detection via npm or yarn",
        },
      ],
    },
    {
      name: "package",
      description: "Packages an extension",
      icon: "📦",
      options: [
        {
          name: ["-o", "--out"],
          description:
            "Output .vsix extension file to <path> location (defaults to <name>-<version>.vsix)",
          args: {
            name: "path",
            generators: filepaths({ extensions: ["vsix"] }),
          },
        },
        {
          name: ["-t", "--target"],
          description: "Target architecture",
          args: {
            name: "target",
            isVariadic: true,
            suggestions: targetSuggestions,
          },
        },
        {
          name: ["-m", "--message"],
          description: "Commit message used when calling `npm version`",
          args: {
            name: "commit message",
          },
        },
        {
          name: "--no-git-tag-version",
          description:
            "Do not create a version commit and tag when calling `npm version`. Valid only when [version] is provided",
        },
        {
          name: "--no-update-package-json",
          description:
            "Do not update `package.json`. Valid only when [version] is provided",
        },
        {
          name: "--githubBranch",
          description:
            "The GitHub branch used to infer relative links in README.md. Can be overridden by --baseContentUrl and --baseImagesUrl",
          args: {
            name: "branch",
            generators: gitGenerators.remoteLocalBranches,
          },
        },
        {
          name: "--gitlabBranch",
          description:
            "The GitLab branch used to infer relative links in README.md. Can be overridden by --baseContentUrl and --baseImagesUrl",
          args: {
            name: "branch",
            generators: gitGenerators.remoteLocalBranches,
          },
        },
        {
          name: "--no-rewrite-relative-links",
          description: "Skip rewriting relative links",
        },
        {
          name: "--baseContentUrl",
          description: "Prepend all relative links in README.md with this url",
          args: {
            name: "url",
          },
        },
        {
          name: "--baseImagesUrl",
          description:
            "Prepend all relative image links in README.md with this url",
          args: {
            name: "url",
          },
        },
        {
          name: "--yarn",
          description:
            "Use yarn instead of npm (default inferred from presence of yarn.lock or .yarnrc)",
        },
        {
          name: "--no-yarn",
          description:
            "Use npm instead of yarn (default inferred from lack of yarn.lock or .yarnrc)",
        },
        {
          name: "--ignoreFile",
          description: "Indicate alternative .vscodeignore",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--no-gitHubIssueLinking",
          description:
            "Disable automatic expansion of GitHub-style issue syntax into links",
        },
        {
          name: "--no-gitLabIssueLinking",
          description:
            "Disable automatic expansion of GitLab-style issue syntax into links",
        },
        {
          name: "--no-dependencies",
          description: "Disable dependency detection via npm or yarn",
        },
        {
          name: "--pre-release",
          description: "Mark this package as a pre-release",
        },
      ],
    },
    {
      name: "publish",
      description: "Publishes an extension",
      options: [
        {
          name: ["-p", "--pat"],
          description:
            "Personal Access Token (defaults to VSCE_PAT environment variable)",
          args: {
            name: "token",
          },
        },
        {
          name: ["-t", "--target"],
          description: "Target architecture",
          args: {
            name: "target",
            isVariadic: true,
            suggestions: targetSuggestions,
          },
        },
        {
          name: ["-m", "--message"],
          description: "Commit message used when calling `npm version`",
          args: {
            name: "commit message",
          },
        },
        {
          name: "--no-git-tag-version",
          description:
            "Do not create a version commit and tag when calling `npm version`. Valid only when [version] is provided",
        },
        {
          name: "--no-update-package-json",
          description:
            "Do not update `package.json`. Valid only when [version] is provided",
        },
        {
          name: ["-i", "--packagePath"],
          description: "Publish the provided VSIX packages",
          args: {
            name: "paths",
            isVariadic: true,
            generators: filepaths({ extensions: ["vsix"] }),
          },
        },
        {
          name: "--githubBranch",
          description:
            "The GitHub branch used to infer relative links in README.md. Can be overridden by --baseContentUrl and --baseImagesUrl",
          args: {
            name: "branch",
            generators: gitGenerators.remoteLocalBranches,
          },
        },
        {
          name: "--gitlabBranch",
          description:
            "The GitLab branch used to infer relative links in README.md. Can be overridden by --baseContentUrl and --baseImagesUrl",
          args: {
            name: "branch",
            generators: gitGenerators.remoteLocalBranches,
          },
        },
        {
          name: "--baseContentUrl",
          description: "Prepend all relative links in README.md with this url",
          args: {
            name: "url",
          },
        },
        {
          name: "--baseImagesUrl",
          description:
            "Prepend all relative image links in README.md with this url",
          args: {
            name: "url",
          },
        },
        {
          name: "--yarn",
          description:
            "Use yarn instead of npm (default inferred from presence of yarn.lock or .yarnrc)",
        },
        {
          name: "--no-yarn",
          description:
            "Use npm instead of yarn (default inferred from lack of yarn.lock or .yarnrc)",
        },
        {
          name: "--noVerify",
        },
        {
          name: "--ignoreFile",
          description: "Indicate alternative .vscodeignore",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--no-dependencies",
          description: "Disable dependency detection via npm or yarn",
        },
        {
          name: "--pre-release",
          description: "Mark this package as a pre-release",
        },
      ],
    },
    {
      name: "unpublish",
      description:
        "Unpublishes an extension. Example extension id: microsoft.csharp",
      options: [
        {
          name: ["-p", "--pat"],
          description: "Personal Access Token",
          args: {
            name: "token",
          },
        },
        {
          name: ["-f", "--force"],
          description: "Forces Unpublished Extension",
        },
      ],
    },
    {
      name: "ls-publishers",
      description: "List all known publishers",
    },
    {
      name: "delete-publisher",
      description: "Deletes a publisher",
      args: {
        name: "publisher",
      },
    },
    {
      name: "login",
      description: "Add a publisher to the known publishers list",
      icon: "🚪",
      args: {
        name: "publisher",
      },
    },
    {
      name: "logout",
      description: "Remove a publisher from the known publishers list",
      args: {
        name: "publisher",
      },
    },
    {
      name: "verify-pat",
      description:
        "Verify if the Personal Access Token has publish rights for the publisher",
      args: {
        name: "publisher",
      },
      options: [
        {
          name: ["-p", "--pat"],
          description:
            "Personal Access Token (defaults to VSCE_PAT environment variable)",
          args: {
            name: "token",
          },
        },
      ],
    },
    {
      name: "show",
      description: "Show extension metadata",
      args: {
        name: "extensionid",
      },
      options: [
        {
          name: "--json",
          description: "Output data in json format (default: false)",
        },
      ],
    },
    {
      name: "search",
      description: "Search extension gallery",
      icon: "🔍",
      args: {
        name: "text",
      },
      options: [
        {
          name: "--json",
          description: "Output data in json format (default: false)",
        },
      ],
    },
    {
      name: "help",
      description: "Display help for command",
      icon: "❔",
      args: {
        name: "command",
        suggestions: [
          "ls",
          "package",
          "publish",
          "unpublish",
          "ls-publishers",
          "delete-publishers",
          "login",
          "logout",
          "verify-pat",
          "show",
          "search",
        ],
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Output the version number",
    },
  ],
};

export default completionSpec;
