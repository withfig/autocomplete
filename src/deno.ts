// This file largely follows the same structure (not order) as deno/cli/flags.rs:
// https://github.com/denoland/deno/blob/main/cli/flags.rs

// All objects marked with '// requiresEquals: true' are Clap args with '.require_equals(true)'
// TODO: When fig supports this option (or something like it), uncomment the arguments.

const CPU_ICON =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVNSURBVHgBrVdLbxtVFP7unTt+pHaah/qigEIVUFsF1ZRHC9k4QkhtF8hIbOim6j/ooixaNpUQ6qKbbqqyq9iUBUKUTUAC1YkURLIg8SJBlSJEiojapE3iJI4f8+ScO5nUSTxxHnzS9YztM+f77rnnnjlXoAE+vZXJKtO8JJTI0tcuIQAe/ur/AtHwN974KHiOX7Ad+8fvrxYebLRf5yt3M9MVT6p7ZsLIGqaEVIKIacg69nVU4sVVYL1C3w++0pUEwKl5sCrOlFVz+x5cK0xtEpD76t1MMoV8LKXaVExqUk0eMXMfmyPhN7DhD5/FeIGI6opd9EpO33dfFAprPvXME2os0WoSuQFpCLiWj6d/1PBs3EJt0cNu0HLQwD4aRz9IIN4q4bk++XVRXrKL1qLz1oMbhSnFhoYU+ViLajOU1OTPJyw8zlfgVH3sBeVZV4/5SRsvk4jDb8fg09LGiYuW5R6Z9Incl5lcolX9kEib4NDPFGw8fljRDkrLK5h9MoNKpQrXdbFTpFL70N7Zrgfj2PkWdJ5QFAVaiiUb1WWnTwlD5AzT0GtuLfmY/q2qjWeIOKbiuH//W/T09GD//v3YKfr7+3H9+nXt69CRQ3pi7cfSIE4YvNTSuSSlgVNSBsn27+9VShQfC3MLmnxwcBC9vb27ImdcuHBB+2BfpdIKXPL9dLSmuYRBBlJkFWVpBjJ4oDIbJBsLuHv3a008OTmJkZERWJaFnSCVSuH06dPo7u7GnTt3cPHiZ0i9cYzyy8aR92LhDutS4RZmrDwL1pnVsnrG2NiYXoKOjg4kk0kopfTDG8FbjeE4DuVMBXNzcxgeHtYC+HnOI0ZtKZikdkEfKvgWPZNSqYR0Oq3JtxIQirBtW185AmHUOJJRSaywDZimqYl5xGKxhjYsyvOC2XEU+JmtsBowFtCozG52LqXUI1g7serEX3ffyCbCI8K/ZVP2yBn460g2Em4t4AWnRH0WRqCRM/4tTLwogdvBniLQ6D5EsyUIsa0kbEaw1baM8Lh2JwNj7Akhmb8LRzoCQjQn4MHbLIqkXkQ4msMPBDSz5X3NBYbrAMMwjDWC+vCHhYjtm7499eNcCbchtFqtrpFzgWlWCcvlsi7HTfnJXumJ+FtHgctx6DwsxeE2rBfDS8SzZ8EsIpJ8lZOH4l5Nh7NOAId4cXFR13AuvQsLC7qux+PxtUhEZT6HngWwaH4fRCkIeLUA6F6Nf+C+jd9WyWQC4+Pjuhc4e/YsRkdHMT09jZ2AhZ85c0bfc2MSikkekJqY+ZhXfHzj1N8t7WZXLKkwM2bjyYilX8dO1cHAwMCum5EQHMlsNgtPevRKb6eWzMQr2RissotK0SpI1/EHuV12HQ8H3jRhxIXu5Wp2TT/I6ndLPDQ0pH2wLyZn34ffMeHZ3KK7dF5AQZy72pONtxp5asmh4rT2f7n452FNO5mfX0DxeVGv507BecT9w8EjB5FK79O/He2NofOkgk3k3JRaJe8TnUnnr/Xkk61m1qRl4M54bsLBzKite7j/Azzzl9430dYddMRWmbqmZWvqp5sTrwWFqOJctiTG6LbN9yTajxtofZVa9FEynKcWem53BxMzLdHxuoHOHqWbULvq6tDXyk7R990+tlnbSx99fjJjmjJPydhmUBT4kMIPidWOOazXYhvE+lS4WluCbKedRjmmZ191i7bl9v1y68/CJn/nrhzvopNLnnKhi5dCGnxGDKzEdpjrRYQFjgRQosO1PR4DqLmXf779aCq0a+j2wysnchSBHPGf8oXISIkdof5QSh9TdBkg8m9+vf1oYKPtf7NIvBdpvFmHAAAAAElFTkSuQmCC";

/**
 * Equivalent to the `"filepaths"` template, but boosts the priority of files
 * that match one of the names provided.
 */
function generatePreferredFilepaths(init: {
  names: string[];
  matchPriority?: number;
}): Fig.Generator {
  // Since the set is an implementation detail and will be constructed from
  // an array at *some* point, doing it internally at least hides some ugly.
  const names = new Set(init.names);
  const matchPriority = init.matchPriority ?? 75;
  return {
    template: "filepaths",
    filterTemplateSuggestions: (paths) => {
      for (const path of paths) {
        if (names.has(path.name)) {
          path.priority = matchPriority;
        }
      }
      return paths;
    },
  };
}

/**
 * Equivalent to the `"filepaths"` template, but removes files that don't
 * end with one of the given endings. Files are given a priority of 75, so
 * they should always appear first.
 */
function generateFilepathsMatch(init: {
  match: RegExp;
  filePriority?: number;
}): Fig.Generator {
  const { match, filePriority = 75 } = init;
  return {
    template: "filepaths",
    filterTemplateSuggestions: (paths) => {
      const out: Fig.Suggestion[] = [];
      // This is basically a longer form of Array.filter, because the HOF
      // version became too long to read easily. It's clearer imperatively.
      for (const path of paths) {
        if (path.type === "folder") {
          out.push(path);
          continue;
        }
        if (match.test(path.name)) {
          path.priority = filePriority;
          out.push(path);
        }
      }
      return out;
    },
  };
}

type VersionsJSON = {
  latest: string;
  versions: string[];
};

/**
 * Generates a list of Deno versions and caches that list for one day.
 */
const generateDenoVersions: Fig.Generator = {
  script: `curl -sL 'https://cdn.deno.land/deno/meta/versions.json'`,
  cache: { ttl: 1000 * 60 * 60 * 24 },
  postProcess: (out) => {
    const data = JSON.parse(out) as VersionsJSON;
    return data.versions.map((version) => ({
      name: version.startsWith("v") ? version.slice(1) : version,
    }));
  },
};

// The Deno core team is looking at adding runnable metadata JSON file, so
// ".json" will have to be added to this eventually.
const generateRunnableFiles = generateFilepathsMatch({
  match: /\.(mjs|jsx?|tsx?)$/i,
});

type DenoLintRulesJSON = {
  code: string;
  tags: string[];
  docs: string;
}[];

const generateLintRules: Fig.Generator = {
  script: "deno lint --rules --json",
  getQueryTerm: ",",
  cache: { ttl: 1000 * 60 * 60 * 24 },
  postProcess: (out) => {
    const json = JSON.parse(out) as DenoLintRulesJSON;
    return json.map((rule) => ({
      name: rule.code,
      description: rule.docs.slice(0, rule.docs.indexOf("\n\n")),
      icon: "fig://icon?type=string",
    }));
  },
};

type ExclusiveOn = {
  exclusiveOn?: string[];
};

const permissionOptions: Fig.Option[] = [
  {
    name: ["-A", "--allow-all"],
    description: "Allow all permissions",
  },
  {
    name: "--allow-env",
    description: "Allow environment access",
    // requiresEquals: true,
    // args: {
    //   name: "variable",
    //   description: "Comma-separated list of environment variables to allow",
    //   isOptional: true,
    // },
  },
  {
    name: "--allow-ffi",
    description: "Allow loading dynamic libraries",
    // requiresEquals: true,
    // args: {
    //   name: "library",
    //   description: "The path of the dynamic library to allow",
    //   isOptional: true,
    // },
  },
  {
    name: "--allow-hrtime",
    description: "Allow high resolution time measurement",
  },
  {
    name: "--allow-net",
    description: "Allow network access",
    // requiresEquals: true,
    // args: {
    //   name: "hosts",
    //   isOptional: true,
    // },
  },
  {
    name: "--allow-read",
    description: "Allow file system read access",
    // requiresEquals: true,
    // args: {
    //   name: "paths",
    //   template: "filepaths",
    //   isOptional: true,
    // },
  },
  {
    name: "--allow-run",
    description: "Allow running subprocesses",
    // requiresEquals: true,
    // args: {
    //   name: "executables",
    //   isOptional: true,
    // },
  },
  {
    name: "--allow-write",
    description: "Allow file system write access",
    // requiresEquals: true,
    // args: {
    //   name: "paths",
    //   isOptional: true,
    // },
  },
  {
    name: "--prompt",
    description: "Fallback to prompt if required permission wasn't passed",
  },
  {
    name: "--unsafely-ignore-certificate-errors",
    description: "DANGER: Disables verification of TLS certificates",
    isDangerous: true,
    // requiresEquals: true,
    // args: {
    //   name: "host names",
    //   description: "Scope ignoring certificate errors to these hosts",
    //   isOptional: true,
    // },
  },
];

function inspectorOptions(options: ExclusiveOn = {}): Fig.Option[] {
  return [
    {
      name: "--inspect",
      description: "Activate inspector on host:port (default: 127.0.0.1:9229)",
      // requiresEquals: true,
      // args: {
      //   name: "host:port",
      //   description: "The host:port to activate the inspector on",
      //   isOptional: true,
      // },
      exclusiveOn: options.exclusiveOn,
    },
    {
      name: "--inspect-brk",
      description:
        "Activate inspector on host:port and break at the start of user script (default: 127.0.0.1:9229)",
      // requiresEquals: true,
      // args: {
      //   name: "host:port",
      //   description: "The host:port to activate the inspector on",
      //   isOptional: true,
      // },
      exclusiveOn: options.exclusiveOn,
    },
  ];
}

const caFileOption: Fig.Option = {
  name: "--cert",
  description: "Load certificate authority from a PEM encoded file",
  args: {
    name: "certificate file",
    description: "The certificate file to load",
    template: "filepaths",
  },
};

const configOption: Fig.Option = {
  name: ["-c", "--config"],
  description: "Load a configuration file",
  args: {
    name: "config file",
    description: "The config file to load",
    generators: generatePreferredFilepaths({
      names: ["tsconfig.json", "deno.json", "deno.jsonc"],
    }),
  },
};

const importMapOption: Fig.Option = {
  name: "--import-map",
  description: "Load an import map from a local file or remote URL",
  args: {
    name: "source",
    description: "The location of the import map (can be a URL)",
    generators: generatePreferredFilepaths({
      names: [
        "importmap.json",
        "import_map.json",
        "import-map.json",
        "imports.json",
      ],
    }),
  },
};

const lockOption: Fig.Option = {
  name: "--lock",
  description: "Check the specified lock file",
  args: {
    name: "lock file",
    description: "The location of the JSON lock file",
    generators: generatePreferredFilepaths({ names: ["lock.json"] }),
  },
};

const lockWriteOption: Fig.Option = {
  name: "--lock-write",
  description: "Write lock file",
  dependsOn: ["--lock"],
};

const noCheckOption: Fig.Option = {
  name: "--no-check",
  description: "Skip type checking modules",
};

const noRemoteOption: Fig.Option = {
  name: "--no-remote",
  description: "Do not resolve remote modules",
};

const reloadOption: Fig.Option = {
  name: ["-r", "--reload"],
  description:
    "Reload source code cache (recompile TypeScript, download dependencies)",
  // requiresEquals: true,
  // args: {
  //   name: "cache blocklist",
  //   description: "A comma-separated list of URLs to block from the cache",
  //   isOptional: true,
  // },
};

const seedArg: Fig.Option = {
  name: "--seed",
  description: "Seed Math.random()",
  args: {
    name: "number",
    description: "The number to use as the seed for Math.random()",
  },
};

const v8FlagsOption: Fig.Option = {
  name: "--v8-flags",
  insertValue: "--v8-flags=",
  description: "Set V8 command line options (for help: --v8-flags=--help",
  // requiresEquals: true,
  args: {
    name: "V8 flags",
    description: "Flags to pass to V8",
    // TODO: Using `deno run --v8-flags=--help` to generate suggestions
  },
};

function watchOption(options: ExclusiveOn = {}): Fig.Option {
  return {
    name: "--watch",
    description:
      "UNSTABLE: Watch for file changes and restart process automatically",
    exclusiveOn: options.exclusiveOn,
  };
}

const locationOption: Fig.Option = {
  name: "--location",
  description: "Value of 'globalThis.location' used by some web APIs",
  args: {
    name: "URL",
  },
};

const cachedOnlyOption: Fig.Option = {
  name: "--cached-only",
  description: "Require that remote dependencies are already cached",
};

const compileOptions: Fig.Option[] = [
  importMapOption,
  noRemoteOption,
  configOption,
  noCheckOption,
  reloadOption,
  lockOption,
  lockWriteOption,
  caFileOption,
];

/**
 * Generate an array of options that control runtime behavior.
 *
 * This function mirrors the `runtime_args` function:
 * https://github.com/denoland/deno/blob/930cb0a/cli/flags.rs#L1383
 */
function runtimeOptions(init: {
  perms: boolean;
  inspector: boolean;
  inspectorExclusiveOn?: string[];
}): Fig.Option[] {
  const options = [
    // Without this spread, calling runtimeOptions would mutate compileOptions
    ...compileOptions,
  ];
  if (init.perms) {
    options.push(...permissionOptions);
  }
  if (init.inspector) {
    const inspector = inspectorOptions({
      exclusiveOn: init.inspectorExclusiveOn,
    });
    options.push(...inspector);
  }
  options.push(cachedOnlyOption, locationOption, v8FlagsOption, seedArg);
  return options;
}

const denoRun: Fig.Subcommand = {
  name: "run",
  description: "Run a JavaScript or TypeScript program",
  args: {
    name: "script",
    description: "The JavaScript or TypeScript file to run",
    generators: generateRunnableFiles,
  },
  options: [
    ...runtimeOptions({
      perms: true,
      inspector: true,
      inspectorExclusiveOn: ["--watch"],
    }),
    watchOption({
      exclusiveOn: ["--inspect", "--inspect-brk"],
    }),
  ],
};

const denoTest: Fig.Subcommand = {
  name: "test",
  description: "Run tests using Deno's built-in test runner",
  args: {
    name: "paths",
    description: "The paths of tests to run",
    isOptional: true,
    isVariadic: true,
    generators: generateFilepathsMatch({
      // Any files with a test suffix should be suggested
      match: /(\.|_)?test\.(tsx?|jsx?)$/,
    }),
  },
  options: [
    ...runtimeOptions({ perms: true, inspector: true }),
    {
      name: "--ignore",
      insertValue: "--ignore=",
      description: "Ignore files",
      // requiresEquals: true,
      args: {
        name: "Files to ignore",
        description: "Files matching this pattern will be ignored",
        template: "filepaths",
      },
    },
    {
      name: "--no-run",
      description: "Cache test modules, but don't run tests",
      exclusiveOn: ["--watch"],
    },
    {
      name: "--doc",
      description: "UNSTABLE: Type check code blocks in documentation",
    },
    {
      name: "--fail-fast",
      description:
        "Stop after N errors (defaults to stopping after the first error)",
      // requiresEquals: true,
      // args: {
      //   name: "number",
      //   isOptional: true,
      // },
    },
    {
      name: "--allow-none",
      description: "Don't return error code if no test files are found",
    },
    {
      name: "--filter",
      description: "Run tests with this string or pattern in the test name",
      args: {
        name: "pattern",
        description: "The pattern to match against",
      },
    },
    {
      name: "--shuffle",
      description: "UNSTABLE: Shuffle the order in which tests are run",
      // requiresEquals: true,
      // args: {
      //   name: "number",
      //   isOptional: true,
      // },
    },
    {
      name: "--coverage",
      insertValue: "--coverage=",
      description: "UNSTABLE: Collect coverage profile data into the directory",
      // requiresEquals: true,
      args: {
        name: "directory",
        description: "The directory to use for coverage data",
        template: "folders",
      },
      exclusiveOn: ["--watch"],
    },
    {
      name: ["-j", "--jobs"],
      description:
        "Set the number of parallel workers. With no value, the number of CPU cores. Defaults to 1 if omitted",
      args: {
        name: "number",
        description:
          "The number of parallel workers (defaults to number of CPU cores)",
        isOptional: true,
      },
    },
    watchOption({
      exclusiveOn: ["--no-run", "--coverage"],
    }),
  ],
};

const denoFmt: Fig.Subcommand = {
  name: "fmt",
  description: "Auto-format JavaScript, TypeScript, Markdown, and JSON files",
  args: {
    name: "files",
    description: "Files to format",
    isOptional: true,
    isVariadic: true,
    generators: generateFilepathsMatch({
      match: /\.(mjs|jsx?|tsx?|jsonc?|md)$/i,
    }),
  },
  options: [
    configOption,
    {
      name: "--check",
      description: "Check if the source files are formatted",
    },
    {
      name: "--ext",
      description: "Set standard input (stdin) content type",
      args: {
        name: "extension",
        description: "The extension to format input as",
        suggestions: ["ts", "tsx", "js", "jsx", "md", "json", "jsonc"],
      },
    },
    {
      name: "--ignore",
      insertValue: "--ignore=",
      description: "Ignore formatting particular source files",
      // requiresEquals: true,
      args: {
        name: "Files to ignore",
        template: "filepaths",
      },
    },
    watchOption(),
    {
      name: "--options-use-tabs",
      description: "Use tabs instead of spaces",
    },
    {
      name: "--options-line-width",
      description: "Define the maximum line width",
      args: {
        name: "width",
      },
    },
    {
      name: "--options-indent-width",
      description: "Set the number of spaces to use for indentation",
      args: {
        name: "width",
      },
    },
    {
      name: "--options-single-quote",
      description: "Use single quotes",
    },
    {
      name: "--options-prose-wrap",
      description:
        "Define how markdown prose should be wrapped (default: always)",
      args: {
        default: "always",
        name: "wrap",
        suggestions: [
          {
            name: "always",
            icon: "fig://icon?type=string",
            description: "Hard-wrap the entire file",
          },
          {
            name: "never",
            icon: "fig://icon?type=string",
            description: "Don't hard-wrap text",
          },
          {
            name: "preserve",
            icon: "fig://icon?type=string",
            description: "Hard-wrap text that's changed",
          },
        ],
      },
    },
  ],
};

const denoLint: Fig.Subcommand = {
  name: "lint",
  description: "Lint JavaScript and TypeScript source code",
  args: {
    name: "files",
    description: "Files to lint",
    isOptional: true,
    isVariadic: true,
    generators: generateRunnableFiles,
  },
  options: [
    configOption,
    {
      name: "--rules",
      description: "List available rules",
      exclusiveOn: ["--rules-tags", "--rules-include", "--rules-exclude"],
    },
    {
      name: "--ignore",
      description: "Ignore linting particular source files",
      // requiresEquals: true,
      // args: {
      //   name: "files",
      //   description: "The files to ignore",
      //   isOptional: true,
      // },
    },
    {
      name: "--json",
      description: "Output lint result in JSON format",
    },
    {
      name: "--rules-tags",
      insertValue: "--rules-tags=",
      description: "Use a set of rules with a tag",
      exclusiveOn: ["--rules"],
      args: {
        name: "rules",
        generators: generateLintRules,
      },
    },
    {
      name: "--rules-include",
      insertValue: "--rules-include=",
      description: "Include lint rules",
      exclusiveOn: ["--rules"],
      args: {
        name: "rules",
        generators: generateLintRules,
      },
    },
    {
      name: "--rules-exclude",
      insertValue: "--rules-exclude=",
      description: "Exclude lint rules",
      exclusiveOn: ["--rules"],
      args: {
        name: "rules",
        generators: generateLintRules,
      },
    },
  ],
};

//#region Documentation types

// Everything has a name. Some things have a kind, but only a subset of those
// have a kind that actually matters (hence the default of `string`)
type Named = { name: string };
type Kind<T extends string = string> = { kind: T };

// Type aliases to make records clearer
type DocProperty = Named;
type DocMethod = Named & Kind;

type DocNodeModuleDoc = Named & Kind<"moduleDoc">;
type DocNodeFunction = Named & Kind<"function">;
type DocNodeVariable = Named & Kind<"variable">;
type DocNodeEnum = Named & Kind<"enum">;
type DocNodeClass = Named &
  Kind<"class"> & {
    classDef: {
      properties: DocProperty[];
      methods: DocMethod[];
    };
  };
type DocNodeTypeAlias = Named & Kind<"typeAlias">;
type DocNodeNamespace = Named &
  Kind<"namespace"> & {
    namespaceDef: {
      elements: DocNode[];
    };
  };
type DocNodeInterface = Named &
  Kind<"interface"> & {
    interfaceDef: {
      properties: DocProperty[];
      methods: DocMethod[];
    };
  };
type DocNodeImport = Named & Kind<"import">;

type DocNode =
  | DocNodeModuleDoc
  | DocNodeFunction
  | DocNodeVariable
  | DocNodeEnum
  | DocNodeClass
  | DocNodeTypeAlias
  | DocNodeNamespace
  | DocNodeInterface
  | DocNodeImport;

/** Any node is assignable to this type. */
type AnyNode = {
  name: string;
  kind?: string;
};

//#endregion

function getNamePriority(name: string): number {
  if (/^[A-Z]/.test(name)) {
    return 60;
  }
  if (name.startsWith("_")) {
    return 40;
  }
  return 50;
}

function createFilterSuggestion(name: string): Fig.Suggestion {
  return {
    name: name,
    priority: getNamePriority(name),
    icon: "fig://icon?type=string",
  };
}

function getDocNodeChildren(node: DocNode) {
  if (node.kind === "namespace") {
    return node.namespaceDef.elements;
  }
  if (node.kind === "interface") {
    return [...node.interfaceDef.methods, ...node.interfaceDef.properties];
  }
  if (node.kind === "class") {
    return [...node.classDef.methods, ...node.classDef.properties];
  }
  return [];
}

const denoDoc: Fig.Subcommand = {
  name: "doc",
  description: "Show documentation for a module",
  args: [
    {
      name: "scope",
      description: "The scope to get documentation for",
      // From the user's perspective, --builtin is a flag that means "show me
      // documentation for built-in symbols", but it's actually more like a
      // file that just happens to always be equivalent to be Deno's types.
      suggestions: [
        {
          name: "--builtin",
          description: "Get documentation for built-in symbols",
          icon: "fig://icon?type=option",
        },
      ],
      generators: generateRunnableFiles,
      isOptional: true,
    },
    {
      name: "filter",
      description: "The symbol to get documentation for (must exist in scope)",
      isOptional: true,
      // This generator helps you construct a filter by suggesting top level
      // symbol from the provided scope, and more specific filter after "."
      generators: {
        // Options can be provided in any order, so the second last element
        // isn't guaranteed to be the scope. The solution is to modify the
        // array of tokens to insert --json. However, since there can only be
        // one occurrence of that flag, it has to be guarded.
        script: (tokens) => {
          // A filter can't be used with `--json`, so it has to be removed.
          const command = tokens.slice(0, -1);
          if (!command.includes("--json")) {
            command.push("--json");
          }
          const script = command.join(" ");
          return script;
        },

        // Only the first period should trigger the script again.
        trigger: (newToken, oldToken) => {
          return newToken.indexOf(".") !== oldToken.indexOf(".");
        },

        // If there's not dot, the query term is the whole string. If there is
        // a dot, the query term is everything after it. This intentionally
        // uses indexOf returning -1, since -1 + 1 = 0 (correct index to slice)
        getQueryTerm: (token) => {
          return token.slice(token.indexOf(".") + 1);
        },

        // This is quite a long function, but it's conceptually simple:
        // 1. There's an array that will be filled with doc nodes.
        //    a. If there is no dot in the filter token, that array will be
        //       populated with the top level nodes.
        //    b. If there is a dot, everything up to the dot becomes the name.
        //       All nodes with that name are collected, and the array is
        //       populated with their children.
        // 2. Those nodes are filtered, and their names are added to a set.
        // 3. Those names in that set are transformed into suggestions.
        postProcess: (out, tokens) => {
          // The output for `deno doc --json` is `DocNode[]` - the types:
          // https://github.com/denoland/deno_doc/blob/dbf9e21/lib/types.d.ts
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let docNodes: DocNode[];
          try {
            docNodes = JSON.parse(out);
            if (!Array.isArray(docNodes)) {
              throw new Error(`Output data was JSON, but was not an array`);
            }
          } catch (err) {
            console.error("Returning early due to error:", err);
            return [];
          }

          const hidePrivateSymbols = !tokens.includes("--private");

          if (docNodes.length === 0) {
            return [];
          }

          // The final token has to be the filter, it's the only way this
          // generator could have been invoked.
          const filterToken = tokens[tokens.length - 1];
          const firstDotIndex = filterToken.indexOf(".");

          // If the user hasn't entered a dot, suggest top level nodes.
          const suggestTopLevelNodes = firstDotIndex === -1;

          // Based on whether the user has typed a period, this will be
          // populated with either the top level nodes or the children of
          // whatever node the user has searched for.
          const suggestionNodes: AnyNode[] = [];

          if (suggestTopLevelNodes) {
            suggestionNodes.push(...docNodes);
          } else {
            const filterName = filterToken.slice(0, firstDotIndex);

            // It's not uncommon that there'd be multiple occurrences of the
            // same name with different values, eg. overloads and interface
            // merging. Deno's builtin types actually do this with the `Deno`
            // namespace. Typically, `found` will only be one or two nodes.
            const found = docNodes.filter((node) => node.name === filterName);

            // `deno doc` can only generate docs for these nodes' children
            for (const node of found) {
              suggestionNodes.push(...getDocNodeChildren(node));
            }

            // It's a common case to have no children, so it's worth checking.
            if (suggestionNodes.length === 0) {
              return [];
            }
          }

          // The names are added to a set because duplicates are common.
          const names = new Set<string>();

          for (const node of suggestionNodes) {
            // A module doc may not always be present, but if present it's
            // always included in the JSON.
            if (node.kind === "moduleDoc") {
              continue;
            }

            // Imports are always emitted, even without --private
            if (hidePrivateSymbols && node.kind === "import") {
              continue;
            }

            names.add(node.name);
          }

          // Deno uses the name <TODO> when it gets confused, which is common in
          // type-heavy projects. Fig renders this name as an empty string, and
          // since you can't specify it as a filter, don't suggest it.
          // Faster to do this once than check the name on each iteration.
          names.delete("<TODO>");
          names.delete("");

          // Can't just .map() over a Set... (one day?)
          const suggestions: Fig.Suggestion[] = [];
          for (const name of names) {
            suggestions.push(createFilterSuggestion(name));
          }
          return suggestions;
        },
      },
    },
  ],
  options: [
    importMapOption,
    reloadOption,
    {
      name: "--json",
      description: "Output documentation in JSON format",
    },
    {
      name: "--private",
      description: "Output private documentation",
    },
  ],
};

const denoInstall: Fig.Subcommand = {
  name: "install",
  description: "Install a script as an executable",
  args: [
    {
      name: "source",
      description: "A local or remote JavaScript or TypeScript file",
      generators: generateRunnableFiles,
    },
    {
      name: "args",
      description: "Arguments that will be provided automatically when run",
      isVariadic: true,
      isOptional: true,
    },
  ],
  options: [
    ...runtimeOptions({ perms: true, inspector: true }),
    {
      name: ["-n", "--name"],
      description: "Name of the executable",
      args: {
        name: "name",
        description: "The name the executable will have",
      },
    },
    {
      name: ["-f", "--force"],
      description: "Forcefully overwrite an existing installation",
    },
    {
      name: "--root",
      description: "The installation root",
      args: {
        name: "directory",
        description: "The directory that the script will be installed to",
        template: "folders",
      },
    },
  ],
};

const denoLsp: Fig.Subcommand = {
  name: "lsp",
  description: "Start the language server",
};

const denoTypes: Fig.Subcommand = {
  name: "types",
  description: "Print Deno's runtime TypeScript declarations",
};

const denoUpgrade: Fig.Subcommand = {
  name: "upgrade",
  description: "Upgrade the deno executable",
  options: [
    {
      name: "--version",
      description: "The version to upgrade to",
      args: {
        name: "version",
        generators: generateDenoVersions,
      },
    },
    {
      name: "--output",
      description: "Output path of the downloaded binary",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--dry-run",
      description: "Perform all checks without replacing the old version",
    },
    {
      name: "--canary",
      description: "Upgrade to a canary build",
    },
    caFileOption,
  ],
};

const denoEval: Fig.Subcommand = {
  name: "eval",
  insertValue: "eval '{cursor}'",
  description: "Evaluate JavaScript from the command line",
  options: [
    ...runtimeOptions({ perms: false, inspector: true }),
    {
      name: "--ext",
      description: "Set standard input (stdin) content type",
      args: {
        name: "extension",
        description: "Interpret stdin as this type of file",
        default: "ts",
        suggestions: ["ts", "tsx", "js", "jsx"],
      },
    },
    {
      name: ["-p", "--print"],
      description: "Print the result to stdout",
    },
  ],
  args: {
    name: "code",
    isVariadic: true,
  },
};

const denoCompletions: Fig.Subcommand = {
  name: "completions",
  description: "Generate shell completions",
  args: {
    name: "shell",
    description: "Generate completions for this shell",
    suggestions: ["zsh", "bash", "fish", "powershell", "elvish"],
  },
};

const denoCoverage: Fig.Subcommand = {
  name: "coverage",
  description: "Print coverage reports from coverage profiles",
  options: [
    {
      name: "--ignore",
      insertValue: "--ignore=",
      description: "Ignore coverage files",
      // requiresEquals: true,
      args: {
        name: "pattern",
        description: "Ignore files matching this regex pattern",
        template: "filepaths",
      },
    },
    {
      name: "--include",
      insertValue: "--include=",
      description: "Include source files in the report",
      isRepeatable: true,
      // requiresEquals: true,
      args: {
        name: "pattern",
        description: "Include files matching this regex pattern",
        template: "filepaths",
      },
    },
    {
      name: "--exclude",
      insertValue: "--exclude=",
      description: "Exclude source files from the report",
      isRepeatable: true,
      // requiresEquals: true,
      args: {
        name: "pattern",
        description: "Exclude files matching this regex pattern",
        template: "filepaths",
      },
    },
    {
      name: "--lcov",
      description: "Output coverage in the lcov format",
    },
  ],
  args: {
    name: "coverage directory",
    isVariadic: true,
    template: "folders",
  },
};

const denoInfo: Fig.Subcommand = {
  name: "info",
  description: "Show info about the cache or info related to a source file",
  options: [
    reloadOption,
    caFileOption,
    importMapOption,
    {
      name: "--location",
      description: "Show files used for origin-bound APIs (like Web Storage)",
      args: {
        name: "URL",
        description: "Show files used for this location",
      },
    },
    {
      name: "--json",
      description: "UNSTABLE: Output information as JSON",
    },
  ],
  args: {
    name: "file",
    description: "The source file to show information for",
    isOptional: true,
    generators: generateRunnableFiles,
  },
};

const denoRepl: Fig.Subcommand = {
  name: "repl",
  description: "Open an interactive read-eval-print loop",
  options: [
    ...runtimeOptions({ perms: false, inspector: true }),
    {
      name: "--eval",
      insertValue: "--eval '{cursor}'",
      description: "Evaluate this code when the REPL starts",
      args: {
        name: "code",
        description: "The code to evaluate",
      },
    },
  ],
};

const denoCompile: Fig.Subcommand = {
  name: "compile",
  description: "UNSTABLE: Compile the script into a self-contained executable",
  args: [
    {
      name: "script",
      description: "The source to be compiled",
      generators: generateRunnableFiles,
    },
    {
      name: "arguments",
      description: "Arguments to be provided to the script",
      isOptional: true,
      isVariadic: true,
    },
  ],
  options: [
    ...runtimeOptions({ perms: true, inspector: false }),
    {
      name: ["-o", "--output"],
      description: "Location of the output binary (default: ./<inferred-name>)",
      args: {
        name: "destination",
        // Using folders because users probably don't want to select
        // the name of a pre-existing file
        template: "folders",
      },
    },
    {
      name: "--target",
      description: "The target OS architecture",
      args: {
        name: "arch",
        suggestions: [
          { name: "x86_64-unknown-linux-gnu", icon: CPU_ICON },
          { name: "x86_64-pc-windows-msvc", icon: CPU_ICON },
          { name: "x86_64-apple-darwin", icon: CPU_ICON },
          { name: "aarch64-apple-darwin", icon: CPU_ICON },
        ],
      },
    },
  ],
};

const denoCache: Fig.Subcommand = {
  name: "cache",
  description: "Cache and compile remote dependencies, recursively",
  args: {
    name: "script",
    description: "The script(s) to cache",
    generators: generateRunnableFiles,
    isVariadic: true,
  },
  options: compileOptions,
};

const denoBundle: Fig.Subcommand = {
  name: "bundle",
  description: "Bundle module and dependencies into a single file",
  args: [
    {
      name: "source",
      description: "The source file to bundle",
      generators: generateRunnableFiles,
    },
    {
      name: "output",
      description: "The output file",
      template: "folders",
      isOptional: true,
    },
  ],
  options: compileOptions,
};

const subcommands: Fig.Subcommand[] = [
  denoBundle,
  denoCache,
  denoCompile,
  denoCompletions,
  denoCoverage,
  denoDoc,
  denoEval,
  denoFmt,
  denoInfo,
  denoInstall,
  denoLint,
  denoLsp,
  denoRepl,
  denoRun,
  denoTest,
  denoTypes,
  denoUpgrade,
];

const completionSpec: Fig.Spec = {
  name: "deno",
  description: "A secure JavaScript and TypeScript runtime",
  subcommands: [
    ...subcommands,
    {
      name: "help",
      description: "Print help information for the CLI or a subcommand",
      args: {
        name: "subcommand",
        description: "The subcommand to get help with",
        isOptional: true,
        // Fig.Subcommand can be assigned to Fig.Suggestion
        suggestions: subcommands,
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Prints help information",
      isPersistent: true,
      priority: 40,
    },
    {
      name: ["-L", "--log-level"],
      description: "Set log level",
      isPersistent: true,
      priority: 40,
      args: {
        suggestions: ["info", "debug"],
      },
    },
    {
      name: ["-q", "--quiet"],
      description:
        "Suppress diagnostic output (restrict stderr messages to errors)",
      isPersistent: true,
    },
    {
      name: "--unstable",
      description: "Enable unstable features and APIs",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Prints version information, including TypeScript and V8",
      exclusiveOn: ["-V"],
    },
    {
      name: "-V",
      description: "Prints Deno's version",
      exclusiveOn: ["--version"],
      priority: 25,
    },
  ],
};

export default completionSpec;
