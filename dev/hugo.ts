import { stdout } from "node:process";

const includeConvertSubcommandOptions: Fig.Option[] = [
  {
    name: ["-o", "--output"],
    description: "filesystem path to write files to",
    insertValue: "-o {cursor}",
    args: {
      name: "filesystem_path",
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
              insertValue: "-f {cursor}",
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
              insertValue: "--highlightStyle=#{cursor}",
              args: {
                name: "hex_digits",
              },
            },
            {
              name: ["--linesStyle"],
              description:
                "style used for line numbers (see https://github.com/alecthomas/chroma)",
              insertValue: "--linesStyle=#{cursor}",
              args: {
                name: "hex_digits",
              },
            },
            {
              name: ["--style"],
              description:
                "highlighter style (see https://help.farbox.com/pygments.html) (default 'friendly')",
              insertValue: "--style={cursor}",
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
                name: "filesystem_path",
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
                name: "filesystem_path",
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
  ],
};
