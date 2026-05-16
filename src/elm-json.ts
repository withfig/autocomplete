import { filepaths } from "@fig/autocomplete-generators";

const packageList: Fig.Generator = {
  script: [
    "curl",
    "-sH",
    "accept-encoding: gzip",
    "--compressed",
    "https://package.elm-lang.org/search.json",
  ],
  cache: {
    ttl: 1000 * 24 * 60 * 60 * 3, // 3 days
  },
  postProcess: (output) => {
    return JSON.parse(output).map((package_) => ({
      name: package_.name,
      description: package_.summary,
    }));
  },
};

/**
 * Based on [elm-json](https://github.com/zwilias/elm-json), version 0.2.13. Cli tool for working with your elm.json file.
 */
const completionSpec: Fig.Spec = {
  name: "elm-json",
  description: "Deal with your elm.json",
  subcommands: [
    {
      name: "help",
      description:
        "Prints help information or the help of the given subcommand(s)",
      args: {
        name: "subcommand",
        template: "help",
      },
    },
    {
      name: "install",
      description: "Install a package",
      options: [
        {
          name: ["--help", "-h"],
          description: "Prints help information",
        },
        {
          name: "--test",
          description: "Install as a test-dependency",
        },
        {
          name: ["--version", "-V"],
          description: "Prints version information",
        },
        {
          name: "--yes",
          description: 'Answer "yes" to all questions',
        },
      ],
      args: [
        {
          name: "PACKAGE",
          description:
            "Package to install, e.g. elm/core or elm/core@1.0.2 or elm/core@1",
          debounce: true,
          generators: packageList,
        },
        {
          name: "-- INPUT",
          isOptional: true,
          description: "The elm.json file to upgrade [default: elm.json]",
          generators: filepaths({ extensions: ["json"] }),
        },
      ],
    },
    {
      name: "new",
      description: "Create a new elm.json file",
      options: [
        {
          name: ["--help", "-h"],
          description: "Prints help information",
        },
        {
          name: ["--version", "-V"],
          description: "Prints version information",
        },
      ],
    },
    {
      name: "tree",
      description: "List entire dependency graph as a tree",
      options: [
        {
          name: ["--help", "-h"],
          description: "Prints help information",
        },
        {
          name: "--test",
          description: "Promote test-dependencies to top-level dependencies",
        },
        {
          name: ["--version", "-V"],
          description: "Prints version information",
        },
      ],
      args: [
        {
          name: "PACKAGE",
          description:
            "Limit output to show path to some (indirect) dependency",
          debounce: true,
          generators: packageList,
        },
        {
          name: "-- INPUT",
          isOptional: true,
          description: "The elm.json file to solve [default: elm.json]",
          generators: filepaths({ extensions: ["json"] }),
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall a package",
      options: [
        {
          name: ["--help", "-h"],
          description: "Prints help information",
        },
        {
          name: ["--version", "-V"],
          description: "Prints version information",
        },
        {
          name: "--yes",
          description: 'Answer "yes" to all questions',
        },
      ],
      args: [
        {
          name: "PACKAGE",
          description: "Package to uninstall, e.g. elm/html",
          debounce: true,
          generators: packageList,
        },
        {
          name: "-- INPUT",
          isOptional: true,
          description: "The elm.json file to upgrade [default: elm.json]",
          generators: filepaths({ extensions: ["json"] }),
        },
      ],
    },
    {
      name: "upgrade",
      description: "Bring your dependencies up to date",
      options: [
        {
          name: ["--help", "-h"],
          description: "Prints help information",
        },
        {
          name: "--unsafe",
          description: "Allow major versions bumps",
        },
        {
          name: ["--version", "-V"],
          description: "Prints version information",
        },
        {
          name: "--yes",
          description: 'Answer "yes" to all questions',
        },
      ],
      args: {
        name: "INPUT",
        description: "The elm.json file to upgrade [default: elm.json]",
        isOptional: true,
        generators: filepaths({ extensions: ["json"] }),
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Prints help information",
    },
    {
      name: "--offline",
      description:
        "Enable offline mode, which means no HTTP traffic will happen",
    },
    {
      name: ["--version", "-V"],
      description: "Prints version information",
    },
    {
      name: ["--verbose", "-v"],
      description: "Sets the level of verbosity",
    },
  ],
};
export default completionSpec;
