import { stdout } from "node:process";

const includeConvertSubcommandOptions: Fig.Option[] = [
  {
    name: ["-o", "--output"],
    description: "filesystem path to write files to",
    insertValue: "--output {cursor}",
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

export const completion: Fig.Spec = {
  name: "hugo",
  description: "Hugo framework CLI for building websites",
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
          options: [
            {
              name: ["-h", "--help"],
              description: "help for ulimit",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "help for check",
        },
      ],
    },
    {
      name: "config",
      description: "Print the site configuration",
      subcommands: [
        {
          name: "mounts",
          description: "Print the configured file mounts",
          options: [
            {
              name: ["-h", "--help"],
              description: "help for mounts",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "help for config",
        },
      ],
    },
    {
      name: "convert",
      description: "Convert your content to different formats",
      subcommands: [
        {
          name: "toJSON",
          description: "Convert front matter to JSON",
          isDangerous: true,
          options: [
            {
              name: ["-h", "--help"],
              description: "help for toJSON",
            },
            ...includeConvertSubcommandOptions,
          ],
        },
        {
          name: "toTOML",
          description: "Convert front matter to TOML",
          isDangerous: true,
          options: [
            {
              name: ["-h", "--help"],
              description: "help for toTOML",
            },
            ...includeConvertSubcommandOptions,
          ],
        },
        {
          name: "toYAML",
          description: "Convert front matter to YAML",
          isDangerous: true,
          options: [
            {
              name: ["-h", "--help"],
              description: "help for toYAML",
            },
            ...includeConvertSubcommandOptions,
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "help for convert",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy your site to a Cloud provider",
      options: [
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
          name: ["-h", "--help"],
          description: "help for deploy",
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
          insertValue: "--maxDeletes {cursor}",
          args: {
            name: "int",
          },
        },
        {
          name: ["--target"],
          description:
            "target deployment from deployments section in config file; defaults to the first one",
          insertValue: "--target {cursor}",
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
        {
          name: ["-h", "--help"],
          description: "help for env",
        },
        {
          name: ["-v"],
          description: "Get a full dependency list",
        },
      ],
    },
    {
      name: "gen",
      description: "A collection of several useful generators.",
      subcommands: [
        {
          name: "autocomplete",
          description: "Generate shell autocompletion script for Hugo",
          options: [
            {
              name: ["-f", "--completionfile"],
              description: "autocompletion file, defaults to stdout",
              insertValue: "--completionfile {cursor}",
              args: {
                name: "file path",
                template: "filepaths",
              },
            },
            {
              name: ["-h", "--help"],
              description: "help for autocomplete",
            },
            {
              name: ["-t", "--type"],
              description:
                "autocompletion type (bash, zsh, fish, or powershell) (default 'bash')",
              args: {
                name: "string",
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
            "Generate CSS stylesheet for the Chroma code highlighter",
          options: [
            {
              name: ["-h", "--help"],
              description: "help for chromastyles",
            },
            {
              name: ["--highlightStyle"],
              description:
                "style used for highlighting lines (see https://github.com/alecthomas/chroma) (default 'bg:#ffffcc')",
              insertValue: "--highlightStyle #{cursor}",
              args: {
                name: "hex_digits",
              },
            },
            {
              name: ["--linesStyle"],
              description:
                "style used for line numbers (see https://github.com/alecthomas/chroma)",
              insertValue: "--linesStyle #{cursor}",
              args: {
                name: "hex_digits",
              },
            },
            {
              name: ["--style"],
              description:
                "highlighter style (see https://help.farbox.com/pygments.html) (default 'friendly')",
              insertValue: "--style {cursor}",
              args: {
                name: "style_name",
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
            // {
            //   name: [">"],
            //   description: "filesystem path to write syntax.css to",
            //   insertValue: "> {cursor}",
            //   args: {
            //     name: "filesystem_path",
            //     description: "filesystem path to write syntax.css to",
            //     template: "folders",
            //   },
            // },
          ],
        },
        {
          name: "doc",
          description: "Generate Markdown documentation for the Hugo CLI",
          options: [
            {
              name: ["-h", "--help"],
              description: "help for doc",
            },
            {
              name: ["--dir"],
              description:
                "the directory to write the doc. (default '/tmp/hugodoc/')",
              insertValue: "--dir {cursor}",
              args: {
                name: "path",
                template: "folders",
              },
            },
          ],
        },
        {
          name: "man",
          description: "Generate man pages for the Hugo CLI",
          options: [
            {
              name: ["-h", "--help"],
              description: "help for man",
            },
            {
              name: ["--dir"],
              description:
                "the directory to write the man pages. (default 'man/')",
              insertValue: "--dir {cursor}",
              args: {
                name: "path",
                template: "folders",
              },
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "help for gen",
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "import",
      description: "Import your site from others",
      subcommands: [
        {
          name: "jekyll",
          displayName: "jekyll",
          description:
            "Import from Jekyll requires two paths, e.g. ` + `hugo import jekyll jekyll_root_path target_path`.",
          insertValue: "jekyll {cursor}",
          args: [
            {
              name: "jekyll_root_path",
            },
            {
              name: "target_path",
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "help for jekyll",
            },
            {
              name: ["--force"],
              description: "allow import into non-empty target directory",
              isDangerous: true,
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "help for import",
        },
      ],
    },
    {
      name: "list",
      description: "Listing out various types of content",
      subcommands: [
        {
          name: "drafts",
          description: "List all drafts",
          options: [
            {
              name: ["-h", "--help"],
              description: "help for drafts",
            },
          ],
        },
        {
          name: "future",
          description: "List all posts dated in the future",
          options: [
            {
              name: ["-h", "--help"],
              description: "help for future",
            },
          ],
        },
        {
          name: "expired",
          description: "List all posts already expired",
          options: [
            {
              name: ["-h", "--help"],
              description: "help for expired",
            },
          ],
        },
        {
          name: "all",
          description: "List all posts",
          options: [
            {
              name: ["-h", "--help"],
              description: "help for all",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "help for list",
        },
      ],
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
            {
              name: "--force",
              description: "init inside non-empty directory",
              isDangerous: true,
            },
            {
              name: ["-f", "--format"],
              description: 'config & frontmatter format (default "toml")',
              insertValue: "--format '{cursor}'",
              args: {
                name: "format",
              },
            },
            {
              name: ["-h", "--help"],
              description: "help for site",
            },
          ],
        },
        {
          name: "theme",
          description: "Create a new theme",
          args: {
            name: "name",
          },
          options: [
            {
              name: ["-h", "--help"],
              description: "help for theme",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-b", "--baseURL"],
          description:
            "hostname (and path) to the root, e.g. http://spf13.com/",
          insertValue: "--baseURL {cursor}",
          args: {
            name: "hostname_and_path",
          },
        },
        {
          name: ["-D", "--buildDrafts"],
          description: "include content marked as draft (default false)",
          args: {
            name: "boolean",
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: ["-E", "--buildExpired"],
          description: "include expired content (default false)",
          args: {
            name: "boolean",
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: ["-F", "--buildFuture"],
          description:
            "include content with publishdate in the future (default false)",
          args: {
            name: "boolean",
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: "--cacheDir",
          description:
            "filesystem path to cache directory. Defaults: $TMPDIR/hugo_cache/",
          insertValue: "--cacheDir {cursor}",
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
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: ["-c", "--contentDir"],
          description: "filesystem path to content directory",
          insertValue: "--contentDir {cursor}",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: ["-d", "--destination"],
          description: "filesystem path to write files to",
          insertValue: "--destination {cursor}",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--disableKinds",
          description: "disable different kind of pages (home, RSS etc.)",
          insertValue: "--disableKinds={cursor}",
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
          name: "--editor",
          description: "edit new content with this editor, if provided",
          args: {
            name: "editor",
          },
        },
        {
          name: "--enableGitInfo",
          description:
            "add Git revision, date and author info to the pages (default false)",
          args: {
            name: "boolean",
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: "--forceSyncStatic",
          description: "copy all files when static is changed (default false)",
          args: {
            name: "boolean",
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: "--gc",
          description:
            "enable to run some cleanup tasks (remove unused cache files) after the build (default false)",
          args: {
            name: "boolean",
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: ["-h", "--help"],
          description: "help for new",
        },
        {
          name: "--i18n-warnings",
          description: "print missing translations (default false)",
          args: {
            name: "boolean",
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: "--ignoreCache",
          description: "ignores the cache directory (default false)",
          args: {
            name: "boolean",
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: ["-k", "--kind"],
          description: "content type to create",
          args: [
            {
              // TODO: generate list from /archetypes
              name: "archetype|default",
            },
            {
              name: "content-section/file-name.md",
            },
          ],
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
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: "--noChmod",
          description: "don't sync permission mode of files (default false)",
          args: {
            name: "boolean",
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: "--noTimes",
          description: "don't sync modification time of files (default false)",
          args: {
            name: "boolean",
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: "--path-warnings",
          description:
            "print warnings on duplicate target paths etc (default false)",
          args: {
            name: "boolean",
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
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
          description:
            "print memory usage to screen at intervals (default false)",
          args: {
            name: "boolean",
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: "--templateMetrics",
          description:
            "display metrics about template executions (default false)",
          args: {
            name: "boolean",
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: "--templateMetricsHints",
          description:
            "calculate some improvement hints when combined with --templateMetrics (default false)",
          args: {
            name: "boolean",
            suggestions: [
              { name: "false", icon: "❌", description: "default" },
              { name: "true", icon: "✅" },
            ],
          },
        },
        {
          name: ["-t", "--theme"],
          description: "themes to use (located in /themes/THEMENAME/)",
          args: { name: "themename" },
        },
        {
          name: "--trace",
          description: "write trace to file (not useful in general)",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "version",
      description: "Print the version number of Hugo",
      options: [
        {
          name: ["-h", "--help"],
          description: "help for version",
        },
      ],
    },
  ],
};
