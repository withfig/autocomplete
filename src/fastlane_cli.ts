// fastlane_cli — Amazon Q / Kiro CLI autocomplete spec.
//
// Source-of-truth lives in https://github.com/bthnkucuk/fastlane_cli at
// `dist/amazon-q-spec/fastlane_cli.ts`. The canonical destination is
// `withfig/autocomplete/src/fastlane_cli.ts` (the spec collection consumed
// by Amazon Q Developer CLI for command line, formerly Fig autocomplete).
//
// fastlane_cli version this spec targets: 0.2.0
//
// Notes on philosophy:
// - We never enumerate action ids statically. The `run` positional argument
//   uses a generator that shells out to `fastlane_cli list --json` so the
//   spec stays in sync with whatever actions the user's `cli_profile.yaml`
//   defines (including custom ones the consumer adds). Same idea for the
//   `--category` filter on `list`.
// - Every `--profile` flag uses `template: "filepaths"` so the dropdown
//   surfaces yaml files (`cli_profile.yaml` in particular).
// - Descriptions are kept short (<= 60 chars where reasonable) so Kiro
//   renders them as a single-line tooltip.

const profileArg: Fig.Arg = {
  name: "profile",
  description: "Path to cli_profile.yaml",
  template: "filepaths",
  isOptional: true,
};

const profileOption: Fig.Option = {
  name: ["-p", "--profile"],
  description: "Path to cli_profile.yaml",
  args: profileArg,
};

const dryRunFlag: Fig.Option = {
  name: "--dry-run",
  description: "Print the resolved command without executing it",
};

// Generator: action ids come from `fastlane_cli list --json`.
// Cached for 5 seconds so back-to-back tab presses don't re-shell.
const actionIdGenerator: Fig.Generator = {
  cache: { ttl: 5_000 },
  script: ["fastlane_cli", "list", "--json"],
  postProcess: (out: string): Fig.Suggestion[] => {
    if (!out || !out.trim()) return [];
    try {
      const parsed = JSON.parse(out) as Array<{
        id: string;
        title?: string;
        description?: string;
        category?: string;
      }>;
      return parsed.map((entry) => ({
        name: entry.id,
        description: entry.title || entry.description || entry.category,
      }));
    } catch {
      return [];
    }
  },
};

// Generator: distinct category ids from the same JSON payload.
const categoryGenerator: Fig.Generator = {
  cache: { ttl: 5_000 },
  script: ["fastlane_cli", "list", "--json"],
  postProcess: (out: string): Fig.Suggestion[] => {
    if (!out || !out.trim()) return [];
    try {
      const parsed = JSON.parse(out) as Array<{ category?: string }>;
      const seen = new Set<string>();
      const suggestions: Fig.Suggestion[] = [];
      for (const entry of parsed) {
        const cat = entry.category;
        if (!cat || seen.has(cat)) continue;
        seen.add(cat);
        suggestions.push({ name: cat });
      }
      return suggestions;
    } catch {
      return [];
    }
  },
};

const subcommandNames: string[] = [
  "run",
  "list",
  "init",
  "doctor",
  "skills",
  "completion",
  "help",
];

const completionSpec: Fig.Spec = {
  name: "fastlane_cli",
  description: "Terminal-first Fastlane assistant for Flutter projects",
  options: [
    profileOption,
    {
      name: "--lang",
      description: "Language override (tr or en)",
      args: {
        name: "locale",
        suggestions: [
          { name: "tr", description: "Turkish" },
          { name: "en", description: "English" },
        ],
      },
    },
    dryRunFlag,
    {
      name: ["-h", "--help"],
      description: "Print usage information",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Print the fastlane_cli version",
    },
  ],
  subcommands: [
    {
      name: "run",
      description: "Run a profile action by id non-interactively",
      args: {
        name: "action-id",
        description: "Action id from the active cli_profile.yaml",
        generators: actionIdGenerator,
      },
      options: [
        profileOption,
        {
          name: ["-o", "--option"],
          description: "Override a command option (key=value), repeatable",
          isRepeatable: true,
          args: {
            name: "key=value",
            description: "key=value pair, e.g. version_name=1.2.3",
          },
        },
        dryRunFlag,
      ],
    },
    {
      name: "list",
      description: "Enumerate actions defined in the active profile",
      options: [
        profileOption,
        {
          name: ["-c", "--category"],
          description: "Filter to a single category id",
          args: {
            name: "category-id",
            generators: categoryGenerator,
          },
        },
        {
          name: "--json",
          description: "Emit JSON instead of plain text",
        },
      ],
    },
    {
      name: "init",
      description:
        "Scaffold a minimal cli_profile.yaml in the current directory",
      options: [
        {
          name: "--app-name",
          description: "App name written into the scaffold",
          args: {
            name: "name",
            description: "App display name (default: my-app)",
          },
        },
        {
          name: "--platform",
          description: "Which platform comment block to keep",
          args: {
            name: "platform",
            default: "both",
            suggestions: [
              { name: "ios", description: "iOS only" },
              { name: "android", description: "Android only" },
              { name: "both", description: "iOS and Android (default)" },
            ],
          },
        },
        {
          name: "--force",
          description: "Overwrite an existing cli_profile.yaml",
        },
      ],
    },
    {
      name: "doctor",
      description: "Environment check (Ruby, Fastlane, bundle, credentials)",
      options: [profileOption],
    },
    {
      name: "skills",
      description: "Manage the bundled Claude skills directory",
      subcommands: [
        {
          name: "install",
          description:
            "Copy bundled skills/ into ~/.claude/skills or the project",
          options: [
            {
              name: "--global",
              description: "Install into ~/.claude/skills/",
              exclusiveOn: ["--project"],
            },
            {
              name: "--project",
              description: "Install into <cwd>/.claude/skills/ (default)",
              exclusiveOn: ["--global"],
            },
            {
              name: "--force",
              description: "Overwrite existing skill directories",
            },
            {
              name: "--dry-run",
              description: "List what would be copied without writing",
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Print a shell completion script (bash, zsh, or fish)",
      args: {
        name: "shell",
        description: "Target shell",
        suggestions: [
          { name: "bash", description: "Bash completion script" },
          { name: "zsh", description: "Zsh completion script" },
          { name: "fish", description: "Fish completion script" },
        ],
      },
      options: [profileOption],
    },
    {
      name: "help",
      description: "Show usage for a subcommand",
      args: {
        name: "command",
        description: "Subcommand to show help for",
        isOptional: true,
        suggestions: subcommandNames.map((n) => ({ name: n })),
      },
    },
  ],
};

export default completionSpec;
