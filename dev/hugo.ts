const help = (name: string): Fig.Option => ({
  name: ["-h", "--help"],
  description: `help for ${name}`,
});

const globalOptions: Fig.Option[] = [
  {
    name: "--config",
    description: "config file (default is path/config.yaml|json|toml)",
    priority: 50,
    args: {
      name: "file",
      description: "default is path/config.yaml|json|toml",
      template: "filepaths",
    },
  },
  {
    name: "--configDir",
    description: "config dir (default 'config')",
    priority: 50,
    args: {
      name: "directory path",
      description: "default is 'config'",
      template: "folders",
    },
  },
  {
    name: "--debug",
    description: "debug output (default false)",
    priority: 50,
    args: {
      name: "boolean",
    },
  },
  {
    name: ["-e", "--environment"],
    description: "build environment",
    priority: 50,
    args: {
      name: "environment",
    },
  },
  {
    name: "--ignoreVendor",
    description: "ignores any _vendor directory (default false)",
    priority: 50,
    args: {
      name: "boolean",
    },
  },
  {
    name: "--ignoreVendorPaths",
    description:
      "ignores any _vendor for module paths matching the given Glob pattern",
    priority: 50,
    args: {
      name: "glob pattern",
    },
  },
  {
    name: "--log",
    description: "enable Logging (default false)",
    priority: 50,
    args: {
      name: "boolean",
    },
  },
  {
    name: "--logFile",
    description: "log File path (if set, logging enabled automatically)",
    priority: 50,
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  {
    name: "--quiet",
    description: "build in quiet mode (default false)",
    priority: 50,
    args: {
      name: "boolean",
    },
  },
  {
    name: ["-s", "--source"],
    description: "filesystem path to read files relative from",
    priority: 50,
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  {
    name: "--themesDir",
    description: "filesystem path to themes directory",
    priority: 50,
    args: {
      name: "file",
      description: "default is path/config.yaml|json|toml",
      template: "filepaths",
    },
  },
  {
    name: "-v, --verbose",
    description: "verbose output (default false)",
    priority: 50,
    args: {
      name: "boolean",
    },
  },
  {
    name: "--verboseLog",
    description: "verbose logging (default false)",
    priority: 50,
    args: {
      name: "boolean",
    },
  },
];

// options common to 'hugo', 'hugo mod', 'hugo new', and 'hugo server' commands

const commonOptions: Fig.Option[] = [
  {
    name: ["-b", "--baseURL"],
    description: "hostname (and path) to the root, e.g. http://spf13.com/",
    args: {
      name: "hostname and path",
    },
  },
  {
    name: ["-D", "--buildDrafts"],
    description: "include content marked as draft (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: ["-E", "--buildExpired"],
    description: "include expired content (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: ["-F", "--buildFuture"],
    description:
      "include content with publishdate in the future (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: "--cacheDir",
    description:
      "filesystem path to cache directory. Defaults: $TMPDIR/hugo_cache/",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--cleanDestinationDir",
    description:
      "remove files from destination not found in static directories (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: ["-c", "--contentDir"],
    description: "filesystem path to content directory",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: ["-d", "--destination"],
    description: "filesystem path to write files to",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--disableKinds",
    description: "disable different kind of pages (home, RSS etc.)",
    args: {
      name: "kind,kind",
      suggestions: [
        "page",
        "home",
        "section",
        "taxonomy",
        "term",
        "RSS",
        "sitemap",
        "robotsTXT",
        "404",
      ],
    },
  },
  {
    name: "--enableGitInfo",
    description:
      "add Git revision, date and author info to the pages (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: "--forceSyncStatic",
    description: "copy all files when static is changed (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: "--gc",
    description:
      "enable to run some cleanup tasks (remove unused cache files) after the build (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: "--i18n-warnings",
    description: "print missing translations (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: "--ignoreCache",
    description: "ignores the cache directory (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: ["-l", "--layoutDir"],
    description: "filesystem path to layout directory",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--minify",
    description:
      "minify any supported output format (HTML, XML etc.) (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: "--noChmod",
    description: "don't sync permission mode of files (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: "--noTimes",
    description: "don't sync modification time of files (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: "--path-warnings",
    description: "print warnings on duplicate target paths etc (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: "--poll",
    description:
      "set this to a poll interval, e.g --poll 700ms, to use a poll based approach to watch for file system changes",
    args: {
      name: "milliseconds",
    },
  },
  {
    name: "--print-mem",
    description: "print memory usage to screen at intervals (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: "--templateMetrics",
    description: "display metrics about template executions (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: "--templateMetricsHints",
    description:
      "calculate some improvement hints when combined with --templateMetrics (default false)",
    args: {
      name: "boolean",
    },
  },
  {
    name: ["-t", "--theme"],
    description: "themes to use (located in /themes/THEMENAME/)",
    args: { name: "theme name" },
  },
  {
    name: "--trace",
    description: "write trace to file (not useful in general)",
    args: {
      name: "file",
      template: "filepaths",
    },
  },
];

// options common to 'hugo' and 'hugo server' commands

const watch = {
  name: ["-w", "--watch"],
  description:
    "watch filesystem for changes and recreate as needed (default true)",
  args: {
    name: "boolean",
  },
};

// options common to 'toJSON', 'toTOML', 'toYAML' commands

const convertOptions: Fig.Option[] = [
  {
    name: ["-o", "--output"],
    description: "filesystem path to write files to",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: ["--unsafe"],
    description: "enable less safe operations, please backup first",
    isDangerous: true,
  },
];

const completionSpec: Fig.Spec = {
  name: "hugo",
  description: "hugo builds your site",
  subcommands: [
    {
      name: "check",
      description: "Contains some verification checks",
      args: {
        name: "command",
      },
      subcommands: [
        {
          name: "ulimit",
          description: "Check system ulimit settings",
          options: [help("ulimit")],
        },
      ],
      options: [help("check"), ...globalOptions],
    },
    {
      name: "config",
      description: "Print the site configuration",
      subcommands: [
        {
          name: "mounts",
          description: "Print the configured file mounts",
          options: [help("mounts")],
        },
      ],
      options: [help("config"), ...globalOptions],
    },
    {
      name: "convert",
      description: "Convert your content to different formats",
      args: {
        name: "command",
      },
      subcommands: [
        {
          name: "toJSON",
          description: "Convert front matter to JSON",
          isDangerous: true,
          options: [help("toJSON"), ...convertOptions],
        },
        {
          name: "toTOML",
          description: "Convert front matter to TOML",
          isDangerous: true,
          options: [help("toTOML"), ...convertOptions],
        },
        {
          name: "toYAML",
          description: "Convert front matter to YAML",
          isDangerous: true,
          options: [help("toYAML"), ...convertOptions],
        },
      ],
      options: [help("convert"), ...globalOptions],
    },
    {
      name: "deploy",
      description: "Deploy your site to a Cloud provider",
      options: [
        help("deploy"),
        ...globalOptions,
        {
          name: ["--confirm"],
          description:
            "ask for confirmation before making changes to the target",
        },
        {
          name: ["--dryRun"],
          description: "dry run",
        },
        {
          name: ["--force"],
          description: "force upload of all files",
        },
        {
          name: ["--invalidateCDN"],
          description:
            "invalidate the CDN cache listed in the deployment target (default true)",
        },
        {
          name: ["--maxDeletes"],
          description:
            "maximum # of files to delete, or -1 to disable (default 256)",
          args: {
            name: "int",
          },
        },
        {
          name: ["--target"],
          description:
            "target deployment from deployments section in config file; defaults to the first one",
          args: {
            name: "target",
          },
        },
      ],
    },
    {
      name: "env",
      description: "Print Hugo version and environment info",
      options: [
        help("env"),
        ...globalOptions,
        {
          name: ["-v"],
          description: "Get a full dependency list",
        },
      ],
    },
    {
      name: "gen",
      description: "A collection of several useful generators",
      args: {
        name: "command",
      },
      subcommands: [
        {
          name: "autocomplete",
          description:
            "Generate shell autocompletion script for Hugo (default outputs to stdout)",
          options: [
            help("autocomplete"),
            {
              name: ["-f", "--completionfile"],
              description: "autocompletion file, defaults to stdout",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: ["-t", "--type"],
              description:
                "autocompletion type (bash, zsh, fish, or powershell) (default 'bash')",
              args: {
                name: "type",
                default: "bash",
                suggestions: [
                  { name: "bash", description: "default" },
                  { name: "zsh" },
                  { name: "fish" },
                  { name: "powershell" },
                ],
              },
            },
          ],
        },
        {
          name: "chromastyles",
          description:
            "Generate CSS stylesheet for the Chroma code highlighter (default outputs to stdout)",
          options: [
            help("chromastyles"),
            {
              name: ["--highlightStyle"],
              description:
                "style used for highlighting lines (see https://github.com/alecthomas/chroma) (default 'bg:#ffffcc')",
              args: {
                name: "hex triplet",
              },
            },
            {
              name: ["--linesStyle"],
              description:
                "style used for line numbers (see https://github.com/alecthomas/chroma)",
              args: {
                name: "hex triplet",
              },
            },
            {
              name: ["--style"],
              description:
                "highlighter style (see https://help.farbox.com/pygments.html) (default 'friendly')",
              args: {
                name: "style name",
                suggestions: [
                  { name: "friendly", description: "default" },
                  { name: "abap" },
                  { name: "algol" },
                  { name: "algol_nu" },
                  { name: "api" },
                  { name: "arduino" },
                  { name: "autumn" },
                  { name: "base16-snazzy" },
                  { name: "borland" },
                  { name: "bw" },
                  { name: "colorful" },
                  { name: "doom-one" },
                  { name: "doom-one2" },
                  { name: "dracula" },
                  { name: "emacs" },
                  { name: "fruity" },
                  { name: "github" },
                  { name: "hr_dark" },
                  { name: "hr_high_contrast" },
                  { name: "igor" },
                  { name: "lovelace" },
                  { name: "manni" },
                  { name: "monokai" },
                  { name: "monokailight" },
                  { name: "murphy" },
                  { name: "native" },
                  { name: "nord" },
                  { name: "paraiso-dark" },
                  { name: "paraiso-light" },
                  { name: "pastie" },
                  { name: "perldoc" },
                  { name: "pygments" },
                  { name: "rainbow_dash" },
                  { name: "rrt" },
                  { name: "solarized-dark" },
                  { name: "solarized-dark256" },
                  { name: "solarized-light" },
                  { name: "swapoff" },
                  { name: "tango" },
                  { name: "trac" },
                  { name: "vim" },
                  { name: "vs" },
                  { name: "vulcan" },
                  { name: "xcode-dark" },
                  { name: "xcode" },
                ],
              },
            },
          ],
        },
        {
          name: "doc",
          description:
            "Generate Markdown documentation for the Hugo CLI (default '/tmp/hugodoc/')",
          options: [
            help("doc"),
            {
              name: ["--dir"],
              description:
                "the directory to write the doc. (default '/tmp/hugodoc/')",
              args: {
                name: "path",
                template: "folders",
              },
            },
          ],
        },
        {
          name: "man",
          description: "Generate man pages for the Hugo CLI (default 'man/')",
          options: [
            help("man"),
            {
              name: ["--dir"],
              description:
                "the directory to write the man pages. (default 'man/')",
              args: {
                name: "path",
                template: "folders",
              },
            },
          ],
        },
      ],
      options: [help("gen"), ...globalOptions],
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        suggestions: [
          { name: "check" },
          { name: "config" },
          { name: "convert" },
          { name: "deploy" },
          { name: "env" },
          { name: "gen" },
          { name: "help" },
          { name: "import" },
          { name: "list" },
          { name: "mod" },
          { name: "new" },
          { name: "server" },
          { name: "version" },
        ],
      },
    },
    {
      name: "import",
      description: "Import your site from others",
      args: {
        name: "command",
      },
      subcommands: [
        {
          name: "jekyll",
          displayName: "jekyll",
          description:
            "Import from Jekyll requires two paths, e.g. ` + `hugo import jekyll jekyll_root_path target_path`.",
          args: [
            {
              name: "jekyll_root_path",
              template: "folders",
            },
            {
              name: "target_path",
              template: "folders",
            },
          ],
          options: [
            help("jekyll"),
            {
              name: ["--force"],
              description: "allow import into non-empty target directory",
              isDangerous: true,
            },
          ],
        },
      ],
      options: [help("import"), ...globalOptions],
    },
    {
      name: "list",
      description: "Listing out various types of content",
      args: {
        name: "command",
      },
      subcommands: [
        {
          name: "drafts",
          description: "List all drafts",
          options: [help("drafts")],
        },
        {
          name: "future",
          description: "List all posts dated in the future",
          options: [help("future")],
        },
        {
          name: "expired",
          description: "List all posts already expired",
          options: [help("expired")],
        },
        {
          name: "all",
          description: "List all posts",
          options: [help("all")],
        },
      ],
      options: [help("list"), ...globalOptions],
    },
    {
      name: "mod",
      description: "Various Hugo Modules helpers",
      args: {
        name: "command",
      },
      subcommands: [
        {
          name: "clean",
          description: "Delete the Hugo Module cache for the current project",
          options: [
            help("clean"),
            {
              name: "--all",
              description: "clean entire module cache",
            },
            {
              name: "--pattern",
              description:
                'pattern matching module paths to clean (all if not set)", "e.g. "**hugo*"',
              args: {
                name: "path",
              },
            },
          ],
        },
        {
          name: "get",
          description: "Resolves dependencies in your current Hugo Project",
          // Run `go help get` for more information. All flags available for `go get` are also relevant here.
          options: [
            help("get"),
            {
              name: ["-d"],
              description: "download packages only and do not install",
            },
            {
              name: ["-f"],
              description:
                "valid only when -u is set, forces get -u not to verify that each package has been checked out from the source control repository implied by its import path. This can be useful if the source is a local fork of the original.",
            },
            {
              name: ["-fix"],
              description:
                "run the fix tool on downloaded packages before resolving dependencies or building the code",
            },
            {
              name: ["-insecure"],
              description:
                "permits fetching from repositories and resolving custom domains using insecure schemes such as HTTP. Use with caution.",
            },
            {
              name: ["-t"],
              description:
                "also download the packages required to build the tests for the specified packages",
            },
            {
              name: ["-u"],
              description:
                "recursively update modules. Use network to update the named packages and their dependencies. By default, get uses the network to check out missing packages but does not use it to look for updates to existing packages.",
            },
            {
              name: ["-v"],
              description: "enables verbose progress and debug output",
            },
          ],
        },
        {
          name: "graph",
          description:
            "Use `hugo mod graph` from the relevant module directory and it will print the dependency graph, including vendoring, module replacement or disabled status.",
          options: [help("graph")],
        },
        {
          name: "init",
          description: "Initialize this project as a Hugo Module",
          options: [help("init")],
        },
        {
          name: "npm",
          description: "Various npm helpers",
          subcommands: [
            {
              name: "pack",
              description:
                "Experimental: Prepares and writes a composite package.json file for your project.",
              options: [help("pack")],
            },
          ],
          options: [help("npm")],
        },
        {
          name: "tidy",
          description: "Remove unused entries in go.mod and go.sum",
          options: [help("tidy")],
        },
        {
          name: "vendor",
          description:
            "Vendor all module dependencies into the _vendor directory",
          options: [help("vendor")],
        },
        {
          name: "verify",
          description: "Verify dependencies",
          options: [
            help("verify"),
            {
              name: "--clean",
              description:
                "delete module cache for dependencies that fail verification",
            },
          ],
        },
      ],
      options: [help("mod"), ...commonOptions, ...globalOptions],
    },
    {
      name: "new",
      description: "Create new content for your site",
      args: {
        name: "content-section/file-name.md",
      },
      subcommands: [
        {
          name: "site",
          description: "Create a new site (skeleton)",
          args: {
            name: "path",
            template: "folders",
          },
          options: [
            help("site"),
            {
              name: "--force",
              description: "init inside non-empty directory",
              isDangerous: true,
            },
            {
              name: ["-f", "--format"],
              description: 'config & frontmatter format (default "toml")',
              args: {
                name: "format",
                suggestions: [
                  { name: "toml", description: "default" },
                  { name: "yaml" },
                  { name: "json" },
                ],
              },
            },
          ],
        },
        {
          name: "theme",
          description: "Create a new theme",
          args: {
            name: "name",
          },
          options: [help("theme")],
        },
      ],
      options: [
        help("new"),
        ...commonOptions,
        ...globalOptions,
        {
          name: ["-k", "--kind"],
          description: "content type to create",
          args: [
            {
              name: "archetype|default",
              generators: [
                {
                  script: "ls ./archetypes/",
                  postProcess: (output) =>
                    output.split("\n").map((fileName) => ({
                      name: fileName,
                      icon: "fig://icon?type=string",
                    })),
                },
              ],
            },
            {
              name: "content-section/file-name.md",
            },
          ],
        },
        {
          name: "--editor",
          description: "edit new content with this editor, if provided",
          args: {
            name: "editor",
          },
        },
      ],
    },
    {
      name: "server",
      description: "A high performance webserver",
      options: [
        help("server"),
        ...commonOptions,
        ...globalOptions,
        watch,
        {
          name: ["--appendPort"],
          description: "append port to baseURL (default true)",
          args: {
            name: "boolean",
          },
        },
        {
          name: "--bind",
          description:
            "interface to which the server will bind (default '127.0.0.1')",
          args: {
            name: "ip address",
          },
        },
        {
          name: "--disableBrowserError",
          description:
            "do not show build errors in the browser (default false)",
          args: {
            name: "boolean",
          },
        },
        {
          name: "--disableFastRender",
          description: "enables full re-renders on changes (default false)",
          args: {
            name: "boolean",
          },
        },
        {
          name: "--disableLiveReload",
          description:
            "watch without enabling live browser reload on rebuild (default false)",
          args: {
            name: "boolean",
          },
        },
        {
          name: "--liveReloadPort",
          description:
            "port for live reloading (i.e. 443 in HTTPS proxy situations) (default -1)",
          args: {
            name: "port",
          },
        },
        {
          name: "--meminterval",
          description:
            "interval to poll memory usage (requires --memstats), valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h'. (default '100ms')",
          args: {
            name: "time unit",
          },
        },
        {
          name: "--memstats",
          description: "log memory usage to this file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--navigateToChanged",
          description:
            "navigate to changed content file on live browser reload (default false)",
          args: {
            name: "boolean",
          },
        },
        {
          name: "--noHTTPCache",
          description: "prevent HTTP caching (default false)",
          args: {
            name: "boolean",
          },
        },
        {
          name: ["-p", "--port"],
          description: "port on which the server will listen (default 1313)",
          args: {
            name: "port",
          },
        },
        {
          name: "--renderToDisk",
          description:
            "render to Destination path (default is false: render to memory & serve from there)",
          args: {
            name: "boolean",
          },
        },
      ],
    },
    {
      name: "version",
      description: "Print the version number of Hugo",
      options: [help("version"), ...globalOptions],
    },
  ],
  options: [
    help("hugo"),
    ...commonOptions,
    ...globalOptions,
    watch,
    {
      name: "--renderToMemory",
      description: "render to memory (only useful for benchmark testing)",
    },
  ],
};

export default completionSpec;
