export const completionSpec: Fig.Spec = {
  name: "yarn",
  description: "Manage packages and run scripts",
  args: [
    {
      generators: {
        script: "cat package.json",
        postProcess: function (out) {
          if (out.trim() == "") {
            return [];
          }

          try {
            const packageContent = JSON.parse(out);
            const scripts = packageContent["scripts"];
            if (scripts) {
              return Object.keys(scripts).map((key) => ({
                name: key,
              }));
            }
          } catch (e) {}

          return [];
        },
      },
    },
  ],
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
      args: [
        {
          name: "number",
        },
      ],
    },
    {
      name: "--network-timeout",
      description: "TCP timeout for network requests",
      args: [
        {
          name: "milliseconds",
        },
      ],
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
      args: [
        {
          name: "otpcode",
        },
      ],
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
      args: [
        {
          name: "host",
        },
      ],
    },
    {
      name: "--pure-lockfile",
      description: "don't generate a lockfile",
    },
    {
      name: "--registry",
      description: "override configuration registry",
      args: [
        {
          name: "url",
        },
      ],
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
      description: "",
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
            variadic: true,
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
      description: "",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information",
        },
      ],
    },
    {
      name: "bin",
      description: "",
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
          name: "--pattern",
          description: "filter cached packages by pattern",
          args: [
            {
              name: "pattern",
            },
          ],
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
        },
      ],
    },
    {
      name: "config",
      description: "",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information",
        },
      ],
    },
    {
      name: "create",
      description: "",
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
      description: "",
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
      description: "",
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
      options: [],
    },
    {
      name: "import",
      description: "",
      options: [],
    },
    {
      name: "info",
      description: "",
      options: [],
    },
    {
      name: "init",
      description: "",
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
          args: [
            {
              name: "version",
            },
          ],
        },
        {
          name: ["-2"],
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
      description: "",
      options: [],
    },
    {
      name: "licenses",
      description: "",
      options: [],
    },
    {
      name: "link",
      description: "",
      options: [],
    },
    {
      name: "list",
      description: "",
      options: [],
    },
    {
      name: "login",
      description: "",
      options: [],
    },
    {
      name: "logout",
      description: "",
      options: [],
    },
    {
      name: "node",
      description: "",
      options: [],
    },
    {
      name: "outdated",
      description: "",
      options: [],
    },
    {
      name: "owner",
      description: "",
      options: [],
    },
    {
      name: "pack",
      description: "",
      options: [],
    },
    {
      name: "policies",
      description: "",
      options: [],
    },
    {
      name: "publish",
      description: "",
      options: [],
    },
    {
      name: "remove",
      description: "",
      options: [],
    },
    {
      name: "run",
      description: "",
      options: [],
      args: [
        // TODO get this generator to work and combine the logic of both of these
        //     {
        //         generators: {
        //            script: "ls -1 $(yarn bin)", // ISSUE: this runs in /bin/sh, yarn may not be defined in sh PATH
        //            splitOn: "\n",
        //            postProcess: function (out) {
        //                try {
        //                    if (out) {
        //                        return out
        //                    }
        //                } catch(e) { }
        //                return []
        //            }
        //           }
        //     },
        {
          generators: {
            script: "cat package.json",
            postProcess: function (out) {
              if (out.trim() == "") {
                return [];
              }
              try {
                const packageContent = JSON.parse(out);
                const scripts = packageContent["scripts"];
                if (scripts) {
                  return Object.keys(scripts).map((key) => ({
                    name: key,
                  }));
                }
              } catch (e) {}
              return [];
            },
          },
        },
      ],
    },
    {
      name: "tag",
      description: "",
      options: [],
    },
    {
      name: "team",
      description: "",
      options: [],
    },
    {
      name: "unlink",
      description: "",
      options: [],
    },
    {
      name: "unplug",
      description: "",
      options: [],
    },
    {
      name: "upgrade",
      description: "",
      options: [],
    },
    {
      name: "upgrade-interactive",
      description: "",
      options: [],
    },
    {
      name: "upgradeInteractive",
      description: "",
      options: [],
    },
    {
      name: "version",
      description: "",
      options: [],
    },
    {
      name: "versions",
      description: "",
      options: [],
    },
    {
      name: "why",
      description: "",
      options: [],
    },
    {
      name: "workspace",
      description: "",
      options: [],
      args: [
        {
          name: "name",
          generators: {
            script: "cat package.json",
            postProcess: function (out) {
              if (out.trim() == "") {
                return [];
              }
              try {
                const packageContent = JSON.parse(out);
                const workspaces = packageContent["workspaces"];
                if (workspaces) {
                  return workspaces;
                }
              } catch (e) {}
              return [];
            },
          },
        },
        // TODO arg 1 is script suggestion from the workspace specified in arg 0.
      ],
    },
    {
      name: "workspaces",
      description: "",
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
