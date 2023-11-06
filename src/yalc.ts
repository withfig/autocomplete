const generatePackages: Fig.Generator = {
  // TODO: use the same as for npm and yarn package.json reverse lookup
  script: [
    "bash",
    "-c",
    "command find ~/.yalc/packages -maxdepth 4 -iname 'package.json'",
  ],
  postProcess: (out) =>
    out
      .split("\n")
      .map((path) => {
        const pathArr = path.split("/");
        const subPath = pathArr.slice(
          pathArr.findIndex((val) => val === "packages") + 1,
          pathArr.length - 2
        );
        const version = pathArr[pathArr.length - 2];
        return `${subPath.join("/")}@${version}`;
      })
      .map((path) => ({
        name: path,
        icon: "📦",
        description: path,
      })),
};

const getRemovablePackages: Fig.Generator = {
  script: ["ls", ".yalc"],
  postProcess: (out) =>
    out.split("\n").map((path) => ({
      name: path,
      icon: "📦",
      description: path,
    })),
};

const completionSpec: Fig.Spec = {
  name: "yalc",
  description: "Work with yarn/npm packages locally like a boss",
  subcommands: [
    {
      name: "publish",
      description:
        "Copy all the files that should be published in remote NPM registry",
      options: [
        {
          name: "--push",
          description:
            "Publish package to the store and propagate all changes to existing yalc package installations",
        },
        {
          name: "--no-scripts",
          description: "Publish without running scripts",
        },
        {
          name: "--no-sig",
          description:
            "Disable adding hash signature of all files when copying package content",
        },
        {
          name: "--content",
          description: "Show included files in the published package",
        },
        {
          name: "--no-workspace-resolve",
          description: "Do not resolve 'workspace:' protocol in dependencies",
        },
        {
          name: "--private",
          description: "Force publishing of private package",
        },
      ],
    },
    {
      name: "push",
      description:
        "Publish your package to the store and propagate all changes to existing yalc package installations",
    },
    {
      name: "add",
      description: "Copy the current version from the store to your project",
      args: {
        name: "package",
        description: "The package you want to add",
        generators: generatePackages,
      },
      options: [
        {
          name: "--link",
          description: "Add a 'link:' dependency instead of 'file:'",
        },
        {
          name: "--dev",
          description: "Add yalc package to dev dependencies",
        },
        {
          name: "--pure",
          description: "Do not touch 'package.json' or 'node_modules'",
        },
        {
          name: ["--workspace", "-W"],
          description: "Add dependency with 'workspace:' protocol",
        },
      ],
    },
    {
      name: "link",
      description:
        "Alterative to 'add', instead using local '.yalc' as symlink source",
    },
    {
      name: "update",
      description: "Update package(s)",
      args: {
        name: "package",
        description: "The package to update",
        isOptional: true,
        generators: generatePackages,
      },
      options: [
        {
          name: ["--update", "--upgrade", "--up"],
          description: "Run package manager's update command for packages",
        },
      ],
    },
    {
      name: "remove",
      description: "Remove package info from 'package.json' & 'yalc.lock'",
      args: {
        name: "package",
        description: "The package you want to remove",
        isOptional: true,
        generators: getRemovablePackages,
      },
      options: [
        {
          name: "--all",
          description: "Remove all packages from project",
        },
      ],
    },
    {
      name: "installations",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "clean",
          description: "Unpublish a package published with yalc publish",
          args: {
            name: "package",
            generators: generatePackages,
          },
        },
        {
          name: "show",
          description:
            "Show all packages to which chosen package has been added",
          args: {
            name: "package",
            generators: generatePackages,
          },
        },
      ],
    },
    {
      name: "dir",
      description: "Show yalc system directory",
    },
    {
      name: "check",
      description: "Check 'package.json' for yalc packages",
    },
    {
      name: "restore",
      description: "Restore retreated packages",
    },
    {
      name: "retreat",
      description:
        "Remove packages from project, but leave in lock file (to be restored later)",
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help for yalc",
    },
    {
      name: "--no-colors",
      description: "Disable colors",
    },
    {
      name: "--quiet",
      description: "Fully disable output (except errors)",
    },
  ],
};
export default completionSpec;
