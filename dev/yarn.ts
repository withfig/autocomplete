type SearchResult = {
  package: {
    name: string;
    description: string;
  };
  searchScore: number;
};

const searchGenerator: Fig.Generator = {
  script: function (context) {
    if (context[context.length - 1] === "") return "";
    const searchTerm = context[context.length - 1];
    return `curl -s -H "Accept: application/json" "https://api.npms.io/v2/search?q=${searchTerm}&size=20"`;
  },
  postProcess: function (out) {
    try {
      const results: SearchResult[] = JSON.parse(out).results;
      return results.map((item) => ({
        name: item.package.name,
        description: item.package.description,
      })) as Fig.Suggestion[];
    } catch (e) {
      return [];
    }
  },
};

const getScriptsGenerator: Fig.Generator = {
  script:
    "until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json",
  postProcess: function (out) {
    if (out.trim() == "") {
      return [];
    }

    try {
      const packageContent = JSON.parse(out);
      const scripts = packageContent["scripts"];
      const figCompletions = packageContent["fig"] || {};

      if (scripts) {
        return Object.keys(scripts).map((key) => {
          const icon = "fig://icon?type=yarn";
          const customScripts: Fig.Suggestion = figCompletions[key];
          return {
            name: key,
            icon,
            /**
             * If there are custom definitions for the scripts
             * we want to overide the default values
             * */
            ...(customScripts !== undefined && customScripts),
          };
        });
      }
    } catch (e) {
      console.error(e);
    }

    return [];
  },
};

// generate package list from package.json file
const packageList: Fig.Generator = {
  script: "cat package.json",
  postProcess: function (out) {
    if (out.trim() == "") {
      return [];
    }

    try {
      const packageContent = JSON.parse(out);
      const dependencyScripts = packageContent["dependencies"] || {};
      const devDependencyScripts = packageContent["devDependencies"] || {};
      return [
        ...Object.keys(dependencyScripts),
        ...Object.keys(devDependencyScripts),
      ].map((dependencyName) => ({
        name: dependencyName,
        icon: "📦",
      }));
    } catch (e) {
      console.log(e);
    }

    return [];
  },
};

// generate global package list from global package.json file
const getGlobalPackagesGenerator: Fig.Generator = {
  script: 'cat "$(yarn global dir)/package.json"',
  postProcess: (out, context) => {
    if (out.trim() == "") return [];

    try {
      const packageContent = JSON.parse(out);
      const dependencyScripts = packageContent["dependencies"] || {};
      const devDependencyScripts = packageContent["devDependencies"] || {};
      const dependencies = [
        ...Object.keys(dependencyScripts),
        ...Object.keys(devDependencyScripts),
      ];

      const filteredDependencies = dependencies.filter(
        (dependency) => !context.includes(dependency)
      );

      return filteredDependencies.map((dependencyName) => ({
        name: dependencyName,
        icon: "📦",
      }));
    } catch (e) {
      console.log(e);
    }

    return [];
  },
};

// generate workspace argument completion
const scriptList: Fig.Generator = {
  script: function (context) {
    return `cat ${context[context.length - 2]}/package.json`;
  },
  postProcess: function (out) {
    if (out.trim() == "") {
      return [];
    }
    try {
      const packageContent = JSON.parse(out);
      const scripts = packageContent["scripts"];
      if (scripts) {
        return Object.keys(scripts).map((script) => ({ name: script }));
      }
    } catch (e) {}
    return [];
  },
};

const configList: Fig.Generator = {
  script: "yarn config list",
  postProcess: function (out) {
    if (out.trim() == "") {
      return [];
    }

    try {
      const startIndex = out.indexOf("{");
      const endIndex = out.indexOf("}");
      let output = out.substring(startIndex, endIndex + 1);
      // TODO: fix hacky code
      // reason: JSON parse was not working without double quotes
      output = output
        .replace(/\'/gi, '"')
        .replace("lastUpdateCheck", '"lastUpdateCheck"')
        .replace("registry", '"lastUpdateCheck"');
      const configObject = JSON.parse(output);
      if (configObject) {
        return Object.keys(configObject).map((key) => ({ name: key }));
      }
    } catch (e) {}

    return [];
  },
};

const completionSpec: Fig.Spec = {
  name: "yarn",
  description: "Manage packages and run scripts",
  generateSpec: async (_tokens, executeShellCommand) => {
    const { script, postProcess } = packageList;
    const packages = postProcess(
      await executeShellCommand(script as string)
    ).map(({ name }) => name as string);

    const cli = [
      "vue",
      "nuxt",
      "expo",
      "jest",
      "next",
      "electron",
      "prisma",
      "eslint",
      "prettier",
      "tsc",
    ];
    const subcommands = packages
      .filter((name) => cli.includes(name))
      .map((name) => ({
        name,
        loadSpec: name,
        icon: "fig://icon?type=package",
      }));

    return {
      name: "yarn",
      subcommands,
    } as Fig.Spec;
  },
  args: {
    generators: getScriptsGenerator,
    isOptional: true,
  },
  options: [
    {
      name: "--cache-folder",
      description:
        "specify a custom folder that must be used to store the yarn cache",
      args: {
        template: "folders",
      },
    },
    {
      name: "--check-files",
      description: "install will verify file tree of packages for consistency",
    },
    {
      name: "--cwd",
      description: "working directory to use (default: .)",
      args: {
        template: "folders",
      },
    },
    {
      name: "--disable-pnp",
      description: "disable the Plug'n'Play installation",
    },
    {
      name: "--emoji",
      description: "enable emoji in output (default: true)",
      args: {
        name: "bool",
        suggestions: [{ name: "true" }, { name: "false" }],
      },
    },
    {
      name: ["--enable-pnp", "--pnp"],
      description: "enable the Plug'n'Play installation",
    },
    {
      name: "--flat",
      description: "only allow one version of a package",
    },
    {
      name: "--focus",
      description:
        "Focus on a single workspace by installing remote copies of its sibling workspaces.",
    },
    {
      name: "--force",
      description:
        " install and build packages even if they were built before, overwrite lockfile",
    },
    {
      name: "--frozen-lockfile",
      description: "don't generate a lockfile and fail if an update is needed",
    },
    {
      name: "--global-folder",
      description: "specify a custom folder to store global packages",
      args: {
        template: "folders",
      },
    },
    {
      name: "--har",
      description: "save HAR output of network traffic",
    },
    {
      name: "--https-proxy",
      description: "",
      args: {
        name: "path",
        suggestions: [{ name: "https://" }],
      },
    },
    {
      name: "--ignore-engines",
      description: "ignore engines check",
    },
    {
      name: "--ignore-optional",
      description: "ignore optional dependencies",
    },
    {
      name: "--ignore-platform",
      description: "ignore platform checks",
    },
    {
      name: "--ignore-scripts",
      description: "don't run lifecycle scripts",
    },
    {
      name: "--json",
      description:
        "format Yarn log messages as lines of JSON (see jsonlines.org)",
    },
    {
      name: "--link-duplicates",
      description: "create hardlinks to the repeated modules in node_modules",
    },
    {
      name: "--link-folder",
      description: "specify a custom folder to store global links",
      args: {
        template: "folders",
      },
    },
    {
      name: "--modules-folder",
      description:
        "rather than installing modules into the node_modules folder relative to the cwd, output them here",
      args: {
        template: "folders",
      },
    },
    {
      name: "--mutex",
      description: "use a mutex to ensure only one yarn instance is executing",
      args: [
        {
          name: "type",
          suggestions: [{ name: ":" }],
        },
        {
          name: "specifier",
          suggestions: [{ name: ":" }],
        },
      ],
    },
    {
      name: "--network-concurrency",
      description: "maximum number of concurrent network requests",
      args: {
        name: "number",
      },
    },
    {
      name: "--network-timeout",
      description: "TCP timeout for network requests",
      args: {
        name: "milliseconds",
      },
    },
    {
      name: "--no-bin-links",
      description: "don't generate bin links when setting up packages",
    },
    {
      name: "--no-default-rc",
      description:
        "prevent Yarn from automatically detecting yarnrc and npmrc files",
    },
    {
      name: "--no-lockfile",
      description: "don't read or generate a lockfile",
    },
    {
      name: "--non-interactive",
      description: "do not show interactive prompts",
    },
    {
      name: "--no-node-version-check",
      description:
        "do not warn when using a potentially unsupported Node version",
    },
    {
      name: "--no-progress",
      description: "disable progress bar",
    },
    {
      name: "--offline",
      description:
        "trigger an error if any required dependencies are not available in local cache",
    },
    {
      name: "--otp",
      description: "one-time password for two factor authentication",
      args: {
        name: "otpcode",
      },
    },
    {
      name: "--prefer-offline",
      description:
        "use network only if dependencies are not available in local cache",
    },
    {
      name: "--preferred-cache-folder",
      description:
        "specify a custom folder to store the yarn cache if possible",
      args: {
        template: "folders",
      },
    },
    {
      name: ["--prod", "--production"],
      description: "",
      args: {},
    },
    {
      name: "--proxy",
      description: "",
      args: {
        name: "host",
      },
    },
    {
      name: "--pure-lockfile",
      description: "don't generate a lockfile",
    },
    {
      name: "--registry",
      description: "override configuration registry",
      args: {
        name: "url",
      },
    },
    {
      name: ["-s", "--silent"],
      description:
        "skip Yarn console logs, other types of logs (script output) will be printed",
    },
    {
      name: "--scripts-prepend-node-path",
      description: "prepend the node executable dir to the PATH in scripts",
      args: {
        suggestions: [{ name: "true" }, { name: "false" }],
      },
    },
    {
      name: "--skip-integrity-check",
      description: "run install without checking if node_modules is installed",
    },
    {
      name: "--strict-semver",
      description: "",
    },
    {
      name: "--update-checksums",
      description: "update package checksums from current repository",
    },
    {
      name: "--use-yarnrc",
      description:
        "specifies a yarnrc file that Yarn should use (.yarnrc only, not .npmrc)",
      args: {
        template: "filepaths",
      },
    },
    {
      name: ["-v", "--version"],
      description: "output the version number",
    },
    {
      name: "--verbose",
      description: "output verbose messages on internal operations",
    },
    {
      name: ["-h", "--help"],
      description: "output usage information",
    },
  ],
  subcommands: [
    {
      name: "add",
      description: "Installs a package and any packages that it depends on.",
      args: {
        name: "package",
        generators: searchGenerator,
        debounce: true,
        isVariadic: true,
      },
      options: [
        {
          name: ["-W", "--ignore-workspace-root-check"],
          description: "required to run yarn add inside a workspace root",
        },
        {
          name: ["-D", "--dev"],
          description: "save package to your `devDependencies`",
        },
        {
          name: ["-P", "--peer"],
          description: "save package to your `peerDependencies`",
        },
        {
          name: ["-O", "--optional"],
          description: "save package to your `optionalDependencies`",
        },
        {
          name: ["-E", "--exact"],
          description: "install exact version",
        },
        {
          name: ["-T", "--tilde"],
          description:
            "install most recent release with the same minor version",
        },
        {
          name: ["-A", "--audit"],
          description: "Run vulnerability audit on installed packages",
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
        },
      ],
    },
    {
      name: "audit",
      description:
        "Perform a vulnerability audit against the installed packages",
      options: [
        {
          name: "--summary",
          description: "Only print the summary.",
        },
        {
          name: "--groups",
          description:
            "Only audit dependencies from listed groups. Default: devDependencies, dependencies, optionalDependencies",
          args: {
            name: "group_name",
            isVariadic: true,
          },
        },
        {
          name: "--level",
          description:
            "Only print advisories with severity greater than or equal to one of the following: info|low|moderate|high|critical. Default: info",
          args: {
            name: "severity",
            suggestions: [
              { name: "info" },
              { name: "low" },
              { name: "moderate" },
              { name: "high" },
              { name: "critical" },
            ],
          },
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
        },
      ],
    },
    {
      name: "autoclean",
      description:
        "Cleans and removes unnecessary files from package dependencies",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information",
        },
        {
          name: ["-i", "--init"],
          description:
            "Creates the .yarnclean file if it does not exist, and adds the default entries",
        },
        {
          name: ["-f", "--force"],
          description: "if a .yarnclean file exists, run the clean process",
        },
      ],
    },
    {
      name: "bin",
      description: "Displays the location of the yarn bin folder",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information",
        },
      ],
    },
    {
      name: "cache",
      description: "",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information",
        },
      ],
      subcommands: [
        {
          name: "clean",
          description: "clear global cache",
        },
        {
          name: "dir",
          description: "print yarn’s global cache path",
        },
        {
          name: "list",
          description: "print out every cached package",
          options: [
            {
              name: "--pattern",
              description: "filter cached packages by pattern",
              args: {
                name: "pattern",
              },
            },
          ],
        },
      ],
    },
    {
      name: "config",
      description: "configure yarn",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information",
        },
      ],
      subcommands: [
        {
          name: "set",
          description: "Sets the config key to a certain value",
          options: [
            {
              name: ["-g", "--global"],
              description: "set global config",
            },
          ],
        },
        {
          name: "get",
          description: "Print the value for a given key",
          args: {
            generators: configList,
          },
        },
        {
          name: "delete",
          description: "Deletes a given key from the config",
          args: {
            generators: configList,
          },
        },
        {
          name: "list",
          description: "Displays the current configuration",
        },
      ],
    },
    {
      name: "create",
      description: "Creates new projects from any create-* starter kits",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information",
        },
      ],
    },
    {
      name: "exec",
      description: "",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information",
        },
      ],
    },
    {
      name: "generate-lock-entry",
      description: "Generates a lock file entry",
      options: [
        {
          name: "--use-manifest",
          description:
            "Specify which manifest file to use for generating lock entry",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--resolved",
          description: "Generate from <*.tgz>#<hash>",
          args: {
            template: "filepaths",
          },
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
        },
      ],
    },
    {
      name: "global",
      description: "Manage yarn globally",
      subcommands: [
        {
          name: "add",
          description: "Install globally packages on your operating system",
          args: {
            name: "package",
            generators: searchGenerator,
            debounce: true,
            isVariadic: true,
          },
        },
        {
          name: "bin",
          description: "Displays the location of the yarn global bin folder",
        },
        {
          name: "dir",
          description:
            "Displays the location of the global installation folder",
        },
        {
          name: "ls",
          description: "List globally installed packages (deprecated)",
        },
        {
          name: "list",
          description: "List globally installed packages",
        },
        {
          name: "remove",
          description: "Remove globally installed packages",
          args: {
            name: "package",
            generators: getGlobalPackagesGenerator,
            isVariadic: true,
          },
        },
        {
          name: "upgrade",
          description: "Upgrade globally installed packages",
        },
        {
          name: "upgrade-interactive",
          description:
            "Display the outdated packages before performing any upgrade",
        },
      ],
      options: [
        {
          name: "--prefix",
          description: "bin prefix to use to install binaries",
          args: {
            name: "prefix",
          },
        },
        {
          name: "--latest",
          description: "bin prefix to use to install binaries",
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
        },
      ],
    },
    {
      name: "help",
      description: "output usage information",
    },
    {
      name: "import",
      description: "Generates yarn.lock from an npm package-lock.json file",
    },
    {
      name: "info",
      description: "Show information about a package",
    },
    {
      name: "init",
      description: "Interactively creates or updates a package.json file",
      options: [
        {
          name: ["-y", "--yes"],
          description: "use default options",
        },
        {
          name: ["-p", "--private"],
          description: "use default options and private true",
        },
        {
          name: ["-i", "--install"],
          description: "install a specific Yarn release",
          args: {
            name: "version",
          },
        },
        {
          name: "-2",
          description: "generates the project using Yarn 2",
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
        },
      ],
    },
    {
      name: "install",
      description: "Install all the dependencies listed within package.json",
      options: [
        {
          name: "--check-files",
          description:
            "install will verify file tree of packages for consistency",
        },
        {
          name: "--flat",
          description: "only allow one version of a package",
        },
        {
          name: "--focus",
          description:
            "Focus on a single workspace by installing remote copies of its sibling workspaces.",
        },
        {
          name: "--force",
          description:
            " install and build packages even if they were built before, overwrite lockfile",
        },
        {
          name: "--frozen-lockfile",
          description:
            "don't generate a lockfile and fail if an update is needed",
        },
        {
          name: "--har",
          description: "save HAR output of network traffic",
        },
        {
          name: "--ignore-engines",
          description: "ignore engines check",
        },
        {
          name: "--ignore-optional",
          description: "ignore optional dependencies",
        },
        {
          name: "--ignore-scripts",
          description: "don't run lifecycle scripts",
        },
        {
          name: "--modules-folder",
          description:
            "rather than installing modules into the node_modules folder relative to the cwd, output them here",
          args: {
            template: "folders",
          },
        },
        {
          name: "--no-lockfile",
          description: "don't read or generate a lockfile",
        },
        {
          name: "--non-interactive",
          description: "do not show interactive prompts",
        },
        {
          name: "--offline",
          description:
            "trigger an error if any required dependencies are not available in local cache",
        },
        {
          name: ["--prod", "--production"],
          description: "",
          args: {},
        },
        {
          name: "--pure-lockfile",
          description: "don't generate a lockfile",
        },
        {
          name: ["-s", "--silent"],
          description:
            "skip Yarn console logs, other types of logs (script output) will be printed",
        },
        {
          name: "--verbose",
          description: "output verbose messages on internal operations",
        },
      ],
    },
    {
      name: "licenses",
      description: "",

      subcommands: [
        {
          name: "list",
          description: "List licenses for installed packages",
        },
        {
          name: "generate-disclaimer",
          description: "List of licenses from all the packages",
        },
      ],
    },
    {
      name: "link",
      description: "Symlink a package folder during development",

      args: {
        name: "package",
      },
    },
    {
      name: "list",
      description: "lists all dependencies for the current working directory",
      options: [
        {
          name: "--depth",
          description: "restrict the depth of the dependencies",
        },
        {
          name: "--pattern",
          description: "filter the list of dependencies by the pattern",
        },
      ],
    },
    {
      name: "login",
      description: "Store registry username and email",
    },
    {
      name: "logout",
      description: "Clear registry username and email",
    },
    {
      name: "node",
      description: "",
    },
    {
      name: "outdated",
      description: "Checks for outdated package dependencies",
    },
    {
      name: "owner",
      description: "Manage package owners",

      subcommands: [
        {
          name: "list",
          description: "Lists all of the owners of a package",
          args: {
            name: "package",
          },
        },
        {
          name: "add",
          description: "Adds the user as an owner of the package",
          args: {
            name: "package",
          },
        },
        {
          name: "remove",
          description: "Removes the user as an owner of the package",
          args: [
            {
              name: "user",
            },
            {
              name: "package",
            },
          ],
        },
      ],
    },
    {
      name: "pack",
      description: "Creates a compressed gzip archive of package dependencies",
      options: [
        {
          name: "--filename",
          description:
            "Creates a compressed gzip archive of package dependencies and names the file filename",
        },
      ],
    },
    {
      name: "policies",
      description: "Defines project-wide policies for your project",
    },
    {
      name: "publish",
      description: "Publishes a package to the npm registry",
    },
    {
      name: "remove",
      description: "remove installed package",

      args: {
        generators: packageList,
        isVariadic: true,
      },
    },
    {
      name: "run",
      description: "",

      args: {
        generators: getScriptsGenerator,
      },
    },
    {
      name: "tag",
      description: "Add, remove, or list tags on a package",
    },
    {
      name: "team",
      description: "Maintain team memberships",
    },
    {
      name: "unlink",
      description: "Unlink a previously created symlink for a package",
    },
    {
      name: "unplug",
      description: "",
    },
    {
      name: "upgrade",
      description:
        "Upgrades packages to their latest version based on the specified range",
      args: {
        generators: packageList,
        isVariadic: true,
      },
    },
    {
      name: "upgrade-interactive",
      description: "Upgrades packages in interactive mode",
      options: [
        {
          name: "--latest",
          description: "Use the version tagged latest in the registry",
        },
      ],
    },
    {
      name: "version",
      description: "update version of your package",
      options: [
        {
          name: "--major",
          description: "auto-increment major version number",
        },
        {
          name: "--minor",
          description: "auto-increment minor version number",
        },
        {
          name: "--patch",
          description: "auto-increment patch version number",
        },
      ],
    },
    {
      name: "versions",
      description:
        "Displays version information of the currently installed Yarn, Node.js, and its dependencies",
    },
    {
      name: "why",
      description: "Show information about why a package is installed",
    },
    {
      name: "workspace",
      description: "Manage workspace",
      generateSpec: async (_tokens, executeShellCommand) => {
        const { postProcess } = scriptList;
        const subcommands = [];

        try {
          const out = await executeShellCommand("cat package.json");

          if (out.trim() == "") {
            return { name: "workspaces" };
          }
          const packageContent = JSON.parse(out);
          const workspaces = packageContent["workspaces"];

          if (workspaces) {
            for (const workspace of workspaces) {
              if (workspace.includes("*")) {
                const out = await executeShellCommand(
                  `ls ${workspace.slice(0, -1)}`
                );
                const workspaceList = out.split("\n");

                for (const space of workspaceList) {
                  subcommands.push({
                    name: space,
                    description: "Workspaces",
                    args: {
                      name: "script",
                      generators: {
                        script: `cat ${workspace.slice(
                          0,
                          -1
                        )}/${space}/package.json`,
                        postProcess,
                      },
                    },
                  });
                }
              } else {
                subcommands.push({
                  name: workspace,
                  description: "Workspaces",
                  args: {
                    name: "script",
                    generators: {
                      script: `cat ${workspace}/package.json`,
                      postProcess,
                    },
                  },
                });
              }
            }
          }
        } catch (e) {
          return { name: "workspaces" };
        }

        return {
          name: "workspace",
          subcommands,
        };
      },
    },
    {
      name: "workspaces",
      description: "Show information about your workspaces",
      options: [
        {
          name: "subcommand",
          description: "",
          args: {
            suggestions: [{ name: "info" }, { name: "run" }],
          },
        },
        {
          name: "flags",
          description: "",
        },
      ],
    },
  ],
};

export default completionSpec;
