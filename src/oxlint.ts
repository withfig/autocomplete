import { filepaths } from "@fig/autocomplete-generators";

const CATEGORY_EMOJI = "📦";
const LINT_RULE_EMOJI = "🚨";

const categories: Fig.Suggestion[] = [
  {
    name: "all",
    description: "All lints (except nursery)",
    priority: 55,
  },
  {
    name: "correctness",
    description: "Outright wrong or useless code (enabled by default)",
    priority: 56,
  },
  {
    name: "suspicious",
    description: "Code that is likely wrong or useless",
    priority: 54,
  },
  {
    name: "restriction",
    description: "Prevent the use of language and library features",
    priority: 53,
  },
  {
    name: "perf",
    description: "Check for inefficient code",
    priority: 53,
  },
  {
    name: "pedantic",
    description: "Strict or have occasional false positives",
    priority: 52,
  },
  {
    name: "style",
    description: "Code that could be more idiomatic",
    priority: 51,
  },
  {
    name: "nursery",
    description: "Lints that are still under development",
  },
].map((cat) => ({ ...cat, icon: CATEGORY_EMOJI }));

const lintRuleGenerator: Fig.Generator = {
  script: ["oxlint", "--rules"],
  cache: {
    cacheKey: "oxlint-rules",
    strategy: "max-age",
    // cache for 1 day
    ttl: 60 * 60 * 24,
  },
  async custom(tokens, executeCommand) {
    let out: string;

    // Use npx to get rules if the user is running oxlint with it.
    if (tokens.length && tokens[0].startsWith("npx")) {
      const npxOut = await executeCommand({
        command: "npx",
        args: ["oxlint", "--rules"],
      });
      if (npxOut.status !== 0) return [];
      out = npxOut.stdout;
    } else {
      // ensure the user has oxlint installed on their machine before trying to
      // provide rule suggestions
      const hasOxlint = await executeCommand({
        command: "which",
        // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays -- must be an array
        args: ["oxlint"],
      });
      if (hasOxlint.status !== 0) return [];

      out = (
        await executeCommand({
          command: "oxlint",
          // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays -- must be an array
          args: ["--rules"],
        })
      ).stdout;
    }

    // Parse rule markdown tables
    const rules = out
      .split("\n")
      .map((l) => l.trim())
      .filter((line) => line.startsWith("| "))
      .map((line) => line.split("|").map((col) => col.trim()))
      .filter((cols) => {
        if (cols.length < 3) return false;
        // cols may contain headers or header/body separators (`------`)
        const firstRuleChar = cols[1].charCodeAt(0);
        return firstRuleChar >= 97 && firstRuleChar <= 122;
      })
      .map<Fig.Suggestion>((cols) => {
        const [, rule, plugin, maybeCheckmark] = cols;
        const isDefault = maybeCheckmark != "";
        return {
          name: rule,
          description:
            `${plugin} plugin` + (isDefault ? " (enabled by default)" : ""),
          icon: LINT_RULE_EMOJI,
        };
      });

    return rules;
  },
};

const lintArg: Fig.Arg = {
  name: "lint",
  description: "Lint rule or category",
  generators: [
    {
      custom: () => Promise.resolve(categories),
    },
    lintRuleGenerator,
  ],
};

const enablePlugin = (plugin: string, displayName = plugin): Fig.Option => ({
  name: `--${plugin.toLowerCase()}-plugin`,
  description: `Enable the ${displayName} plugin`,
});

const disablePlugin = (plugin: string, displayName = plugin): Fig.Option => ({
  name: `--disable-${plugin.toLowerCase()}-plugin`,
  description: `Disable the ${displayName} plugin, which is turned on by default`,
  priority: 49,
});

const ESLINTRC_JSON: Set<string> = new Set([".eslintrc", ".eslintrc.json"]);
const OXLINTRC: Set<string> = new Set([
  ".oxlintrc",
  ".oxlintrc.json",
  "oxlint.json",
  "oxlintrc.json",
]);

const configGenerator: Fig.Generator = {
  template: ["filepaths", "history"],
  filterTemplateSuggestions: (param) =>
    param
      .filter(({ name }) => name?.endsWith(".json") || name?.endsWith("rc"))
      .map((param) => {
        if (ESLINTRC_JSON.has(param.name)) {
          param.description = "Oxlint is compatible with ESLint configs";
          param.priority = 51;
        } else if (OXLINTRC.has(param.name)) {
          param.priority = 52;
          param.description = "oxlint config file";
        }

        return param;
      }),
};

/** Matches, for example, `tsconfig.build.json` */
const TSCONFIG_JSON = /tsconfig\.w+\.json$/;
const tsconfigGenerator: Fig.Generator = {
  template: ["filepaths", "history"],
  script: ["ls"],
  filterTemplateSuggestions: (params) =>
    params
      .filter((p) => p.name?.endsWith(".json"))
      .map((p) => {
        if (p.name === "tsconfig.json") {
          p.priority = 52;
        } else if (p.name && TSCONFIG_JSON.test(p.name)) {
          p.priority = 51;
        }
        return p;
      }),
};

const completionSpec: Fig.Spec = {
  name: "oxlint",
  description: "A high performance linter for the Oxidation Compiler",
  options: [
    // ================================ CONFIGS ================================
    {
      name: ["-c", "--config"],
      description: "Path to Oxlint JSON configuration file",
      args: {
        name: "file",
        generators: configGenerator,
      },
    },
    {
      name: "--tsconfig",
      description:
        "Path to tsconfig.json path for reading path aliases and project references for import plugin",
      args: {
        name: "file",
        generators: tsconfigGenerator,
      },
    },
    {
      name: "--ignore-path",
      description: "Specify the file to use as your .eslintignore",
      args: {
        name: "file",
        template: "filepaths",
        suggestions: [
          {
            name: ".eslintignore",
            type: "file",
          },
        ],
      },
    },
    {
      name: "--ignore-pattern",
      description:
        "Specify file patterns to ignore (in addition to those in .eslintignore)",
      args: {
        name: "pattern",
        description: "Glob pattern",
      },
    },
    {
      name: "--no-ignore",
      description:
        "Disable exluding of files from .eslintignore files, --ignore-path, and --ignore-pattern",
    },
    {
      name: "--symlinks",
      description: "Follow symlinks when linting, which are ignored by default",
    },
    // ================================ PLUGINS ================================
    enablePlugin("JSDoc"),
    enablePlugin("Jest"),
    enablePlugin("Vitest"),
    enablePlugin("nextjs", "Next.js"),
    enablePlugin("react-perf", "React Performance"),
    enablePlugin("Promise"),
    disablePlugin("React"),
    disablePlugin("Unicorn"),
    disablePlugin("Oxc"),
    disablePlugin("TypeScript"),
    disablePlugin("Import"),

    // ================================= LINTS =================================
    {
      name: ["-D", "--deny"],
      description: "Deny a lint rule or category (enable a lint as an error)",
      args: lintArg,
      priority: 75,
    },
    {
      name: ["-W", "--warn"],
      description:
        "Warn about a lint rule or category (enable a lint as a warning)",
      args: lintArg,
      priority: 75,
    },
    {
      name: ["-A", "--allow"],
      description: "Allow a lint rule or category (suppress a lint)",
      args: lintArg,
      priority: 75,
    },
    {
      name: "--fix",
      description:
        "Fix as many issues as possible. Only unfixed issues are reported in the output",
    },
    // ================================ OUTPUT =================================
    {
      name: "--silent",
      description: "Do not display any diagnostics",
    },
    {
      name: "--deny-warnings",
      description: "Exit with a non-zero code if there are any warnings",
    },
    {
      name: "--max-warnings",
      description:
        "Exit with a non-zero code if there are more than `max` warnings",
      args: {
        name: "max",
        description: "The maximum number of warnings",
      },
    },
    {
      name: ["-f", "--format"],
      description: "Use a specific output format",
      args: {
        name: "format",
        suggestions: [
          "default",
          "json",
          "unix",
          "checkstyle",
          { name: "github", description: "GitHub Actions Annotations" },
        ],
      },
    },
    // ================================= META ==================================
    {
      name: "--threads",
      description: "Number of threads to use. Set to 1 to use only 1 CPU core",
      args: {
        name: "int",
        description: "Number of threads (positive int)",
      },
      priority: 49,
    },
    {
      name: "--rules",
      description: "List all available rules",
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
    {
      name: ["-V", "--version"],
      description: "Show version",
    },
  ],
  args: {
    name: "file|dir|glob",
    description: "File(s) to lint",
    template: ["filepaths", "folders"],
    isVariadic: true,
    default: ".",
  },
};

export default completionSpec;
