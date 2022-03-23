// This file largely follows the same structure (not order) as deno/cli/flags.rs:
// https://github.com/denoland/deno/blob/main/cli/flags.rs

import { filepaths } from "@fig/autocomplete-generators";
import stripJsonComments from "strip-json-comments";
import { DenoConfigurationFileSchema } from "./deno/config_schema";
import {
  ClassMethodDef,
  ClassPropertyDef,
  DocNode,
  DocNodeBase,
  InterfaceMethodDef,
  InterfacePropertyDef,
} from "./deno/deno_doc";

// Fig doesn't automatically insert an '=' where an option's argument requires
// an equals and the argument isn't optional. That's why you'll see a lot of
// `insertValue: "--name={cursor}"` in this spec.

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

// The Deno core team is looking at adding runnable metadata JSON file, so
// ".json" will have to be added to this eventually.
const generateRunnableFiles = filepaths({
  matches: /\.(m?(j|t)sx?)$/i,
  editFileSuggestions: { priority: 75 },
});

type VersionsJSON = {
  latest: string;
  versions: string[];
};

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

const unsafelyIgnoreCertificateErrorsOption: Fig.Option = {
  name: "--unsafely-ignore-certificate-errors",
  description: "DANGER: Disables verification of TLS certificates",
  isDangerous: true,
  requiresEquals: true,
  args: {
    name: "host names",
    description: "Scope ignoring certificate errors to these hosts",
    isOptional: true,
  },
};

const permissionOptions: Fig.Option[] = [
  {
    name: ["-A", "--allow-all"],
    description: "Allow all permissions",
  },
  {
    name: "--allow-env",
    description: "Allow environment access",
    requiresEquals: true,
    args: {
      name: "variable",
      description: "Comma-separated list of environment variables to allow",
      isOptional: true,
    },
  },
  {
    name: "--allow-ffi",
    description: "Allow loading dynamic libraries",
    requiresEquals: true,
    args: {
      name: "library",
      description: "The path of the dynamic library to allow",
      isOptional: true,
    },
  },
  {
    name: "--allow-hrtime",
    description: "Allow high resolution time measurement",
  },
  {
    name: "--allow-net",
    description: "Allow network access",
    requiresEquals: true,
    args: {
      name: "hosts",
      isOptional: true,
    },
  },
  {
    name: "--allow-read",
    description: "Allow file system read access",
    requiresEquals: true,
    args: {
      name: "paths",
      generators: {
        getQueryTerm: ",",
        trigger: ",",
        template: "filepaths",
      },
      isOptional: true,
    },
  },
  {
    name: "--allow-run",
    description: "Allow running subprocesses",
    requiresEquals: true,
    args: {
      name: "executables",
      isOptional: true,
    },
  },
  {
    name: "--allow-write",
    description: "Allow file system write access",
    requiresEquals: true,
    args: {
      name: "paths",
      isOptional: true,
      generators: {
        getQueryTerm: ",",
        trigger: ",",
        template: "filepaths",
      },
    },
  },
  {
    name: "--no-prompt",
    description: "Always throw if the permission wasn't passed",
  },
  unsafelyIgnoreCertificateErrorsOption,
];

function inspectorOptions(options: ExclusiveOn = {}): Fig.Option[] {
  return [
    {
      name: "--inspect",
      description: "Activate inspector on host:port (default: 127.0.0.1:9229)",
      requiresEquals: true,
      args: {
        name: "host:port",
        description: "The host:port to activate the inspector on",
        isOptional: true,
      },
      exclusiveOn: options.exclusiveOn,
    },
    {
      name: "--inspect-brk",
      description:
        "Activate inspector on host:port and break at the start of user script (default: 127.0.0.1:9229)",
      requiresEquals: true,
      args: {
        name: "host:port",
        description: "The host:port to activate the inspector on",
        isOptional: true,
      },
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
  requiresEquals: true,
  args: {
    name: "type",
    description: "Specify the kind of modules to skip type checking",
    isOptional: true,
    suggestions: [
      {
        name: "remote",
        description: "Don't check remote modules",
        icon: "fig://icon?type=string",
      },
    ],
  },
};

const noRemoteOption: Fig.Option = {
  name: "--no-remote",
  description: "Do not resolve remote modules",
};

const reloadOption: Fig.Option = {
  name: ["-r", "--reload"],
  description:
    "Reload source code cache (recompile TypeScript, download dependencies)",
  requiresEquals: true,
  args: {
    name: "cache blocklist",
    description: "A comma-separated list of URLs to block from the cache",
    isOptional: true,
  },
};

const seedOption: Fig.Option = {
  name: "--seed",
  description: "Seed Math.random()",
  args: {
    name: "number",
    description: "The number to use as the seed for Math.random()",
  },
};

const v8FlagsOption: Fig.Option = {
  name: "--v8-flags",
  insertValue: "--v8-flags={cursor}",
  description: "Set V8 command line options (for help: --v8-flags=--help",
  requiresEquals: true,
  args: {
    name: "V8 flags",
    description: "Flags to pass to V8",
    // TODO: Using `deno run --v8-flags=--help` to generate suggestions
  },
};

function watchOption(options: ExclusiveOn & { files: boolean }): Fig.Option {
  return {
    name: "--watch",
    description:
      "UNSTABLE: Watch for file changes and restart process automatically",
    exclusiveOn: options.exclusiveOn,
    requiresEquals: options.files ? true : undefined,
    args: options.files
      ? {
          name: "files",
          isOptional: true,
          generators: {
            template: "filepaths",
            getQueryTerm: ",",
          },
        }
      : undefined,
  };
}

const noClearScreenOption: Fig.Option = {
  name: "--no-clear-screen",
  description: "Do not clear terminal screen when under watch mode",
  dependsOn: ["--watch"],
};

const compatOption: Fig.Option = {
  name: "--compat",
  dependsOn: ["--unstable"],
  description:
    "Node compatibility mode. Currently only enables builtin modules like 'fs'",
};

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
  options.push(
    cachedOnlyOption,
    locationOption,
    v8FlagsOption,
    seedOption,
    compatOption
  );
  return options;
}

const denoRun: Fig.Subcommand = {
  name: "run",
  description: "Run a JavaScript or TypeScript program",
  args: {
    name: "script",
    description: "The JavaScript or TypeScript file to run",
    generators: generateRunnableFiles,
    isScript: true,
  },
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    ...runtimeOptions({
      perms: true,
      inspector: true,
      inspectorExclusiveOn: ["--watch"],
    }),
    watchOption({
      files: true,
      exclusiveOn: ["--inspect", "--inspect-brk"],
    }),
    noClearScreenOption,
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
    generators: filepaths({
      matches: /(\.|_)?test\.(m?(j|t)sx?)$/,
      editFileSuggestions: { priority: 75 },
    }),
  },
  options: [
    ...runtimeOptions({ perms: true, inspector: true }),
    {
      name: "--ignore",
      insertValue: "--ignore={cursor}",
      description: "Ignore files",
      requiresEquals: true,
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
      requiresEquals: true,
      args: {
        name: "number",
        isOptional: true,
      },
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
      requiresEquals: true,
      args: {
        name: "number",
        isOptional: true,
      },
    },
    {
      name: "--coverage",
      insertValue: "--coverage={cursor}",
      description: "UNSTABLE: Collect coverage profile data into the directory",
      requiresEquals: true,
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
      files: false,
      exclusiveOn: ["--no-run", "--coverage"],
    }),
    noClearScreenOption,
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
    generators: filepaths({
      matches: /\.(mjs|jsx?|tsx?|jsonc?|md)$/i,
      editFileSuggestions: { priority: 75 },
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
      insertValue: "--ignore={cursor}",
      description: "Ignore formatting particular source files",
      requiresEquals: true,
      args: {
        name: "Files to ignore",
        template: "filepaths",
      },
    },
    watchOption({ files: false }),
    noClearScreenOption,
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
      requiresEquals: true,
      args: {
        name: "files",
        template: "filepaths",
        description: "The files to ignore",
        isOptional: true,
      },
    },
    {
      name: "--json",
      description: "Output lint result in JSON format",
    },
    {
      name: "--rules-tags",
      description: "Use a set of rules with a tag",
      exclusiveOn: ["--rules"],
      args: {
        name: "rules",
        generators: generateLintRules,
      },
    },
    {
      name: "--rules-include",
      description: "Include lint rules",
      exclusiveOn: ["--rules"],
      args: {
        name: "rules",
        generators: generateLintRules,
      },
    },
    {
      name: "--rules-exclude",
      description: "Exclude lint rules",
      exclusiveOn: ["--rules"],
      args: {
        name: "rules",
        generators: generateLintRules,
      },
    },
    watchOption({ files: false }),
    noClearScreenOption,
  ],
};

type Node =
  | DocNode
  | InterfaceMethodDef
  | InterfacePropertyDef
  | ClassMethodDef
  | ClassPropertyDef;

/** Get unique values with a given selector function */
function getUniqueNamed<T extends { name: string }>(input: readonly T[]): T[] {
  const seen: Set<string> = new Set();
  const out: T[] = [];
  for (const item of input) {
    if (seen.has(item.name)) continue;
    seen.add(item.name);
    out.push(item);
  }
  return out;
}

/**
 * Get the children of the given node, if it has children. If it cannot have
 * children, return an empty array.
 */
function getNodeChildren(node: Node): Node[] {
  if (!("kind" in node)) {
    return [];
  }
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

/**
 * Get the child nodes of a given lookup path. If multiple nodes have the
 * same name, all their children will be returned.
 *
 * @example
 * ```
 * // Get child nodes of Deno.NetAddr
 * findChildNodes(nodes, ["Deno", "NetAddr"])
 * ```
 */
function findChildNodes(
  nodes: readonly Node[],
  path: readonly string[]
): readonly Node[] {
  const [head, ...tail] = path;
  if (!head) {
    return nodes;
  }
  const foundNodes = nodes.filter((node) => node.name === head);
  if (foundNodes.length === 0) {
    return [];
  }
  return foundNodes.flatMap((node) =>
    findChildNodes(getNodeChildren(node), tail)
  );
}

/**
 * Get the priority of a node based on its name. Values starting with upper-
 * case letters should be prioritized, values starting with underscores should
 * be below everything else.
 */
function getPriorityByNodeName(name: string): number {
  if (/^[A-Z]/.test(name)) {
    return 60;
  }
  if (name.startsWith("_")) {
    return 40;
  }
  return 50;
}

/**
 * Get a human-readable short name for the kind of node
 */
function getNodeTypeName(node: Node): string {
  if ("kind" in node) {
    if (node.kind === "typeAlias") {
      return "Type";
    }
    const kind = node.kind;
    return `${kind.charAt(0).toUpperCase()}${kind.slice(1)}`;
  }
  return "Property";
}

/**
 * Filter nodes from the input array based on whether they should be shown.
 */
function filterNodes(
  nodes: readonly Node[],
  init: {
    showPrivateNodes: boolean;
  }
): Node[] {
  const { showPrivateNodes } = init;
  return nodes.filter((node) => {
    // 1. Check if it's a node that can't be shown
    if ("kind" in node) {
      if (node.kind === "moduleDoc" || node.kind === "import") {
        return false;
      }
    }
    // 2. Check if the visibility preference filters out the node
    if ("declarationKind" in node) {
      if (!showPrivateNodes && node.declarationKind === "private") {
        return false;
      }
    }
    // All else failing, allow the node
    return true;
  });
}

function convertNodeToSuggestion(node: Node): Fig.Suggestion {
  return {
    name: node.name,
    description: getNodeTypeName(node),
    priority: getPriorityByNodeName(node.name),
    icon: "fig://icon?type=asterisk",
  };
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
      // file that just happens to always be equivalent to Deno's types.
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
        // This can cause dependencies to download, needs a longer timeout
        scriptTimeout: 1000,

        // Options can be provided in any order, so the second last element
        // isn't guaranteed to be the scope. The solution is to reuse the
        // user input, but filter out other options and everything that isn't
        // likely to be an argument.
        script: (tokens) => {
          const allowedOptions = new Set([
            "--private",
            "--builtin",
            "--unstable",
          ]);
          // Slice to the second last element: `--json` conflicts with `scope`
          const command = tokens
            .slice(0, -1)
            .filter(
              (token) =>
                !(token.startsWith("-") && !allowedOptions.has(token)) &&
                !token.startsWith("$") &&
                !token.startsWith("(")
            );
          // --json was filtered out earlier, add it back
          command.push("--json");
          return command.join(" ");
        },

        trigger: ".",
        getQueryTerm: ".",

        postProcess: (out, tokens) => {
          const docNodes = JSON.parse(out) as DocNode[];

          // The final segment is being typed, ignore it
          const finalToken = tokens[tokens.length - 1];
          const path = finalToken.split(".").slice(0, -1);

          const nodes = findChildNodes(docNodes, path);
          const filtered = filterNodes(nodes, {
            showPrivateNodes: tokens.includes("--private"),
          });
          const unique = getUniqueNamed(filtered);
          return unique.map((node) => convertNodeToSuggestion(node));
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
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
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

const denoUninstall: Fig.Subcommand = {
  name: "uninstall",
  description:
    "Uninstalls an executable script in the installation root's bin directory",
  args: {
    name: "name",
    description: "Arguments that will be provided automatically when run",
    isVariadic: true,
  },
  options: [
    {
      name: "--root",
      description: "The installation root",
      args: {
        name: "directory",
        description: "The directory that the script will be uninstalled from",
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
        generators: {
          script: `curl -sL 'https://cdn.deno.land/deno/meta/versions.json'`,
          cache: { ttl: 1000 * 60 * 60 * 24 }, // 24 hours, in milliseconds
          postProcess: (out) => {
            const data = JSON.parse(out) as VersionsJSON;
            return data.versions.map((version) => ({
              name: version.startsWith("v") ? version.slice(1) : version,
            }));
          },
        },
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
    suggestions: [
      { name: "zsh", icon: "fig://icon?type=string" },
      { name: "bash", icon: "fig://icon?type=string" },
      { name: "fish", icon: "fig://icon?type=string" },
      { name: "powershell", icon: "fig://icon?type=string" },
      { name: "fig", icon: "fig://icon?type=string" },
    ],
  },
};

const denoCoverage: Fig.Subcommand = {
  name: "coverage",
  description: "Print coverage reports from coverage profiles",
  options: [
    {
      name: "--ignore",
      insertValue: "--ignore={cursor}",
      description: "Ignore coverage files",
      requiresEquals: true,
      args: {
        name: "pattern",
        description: "Ignore files matching this regex pattern",
        template: "filepaths",
      },
    },
    {
      name: "--include",
      insertValue: "--include={cursor}",
      description: "Include source files in the report",
      isRepeatable: true,
      requiresEquals: true,
      args: {
        name: "pattern",
        description: "Include files matching this regex pattern",
        template: "filepaths",
      },
    },
    {
      name: "--exclude",
      insertValue: "--exclude={cursor}",
      description: "Exclude source files from the report",
      isRepeatable: true,
      requiresEquals: true,
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
    {
      name: "--output",
      insertValue: "--output={cursor}",
      description: "Output file (defaults to stdout) for lcov",
      dependsOn: ["--lcov"],
      requiresEquals: true,
      args: {
        name: "outfile",
        template: "filepaths",
        suggestCurrentToken: true,
      },
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
    unsafelyIgnoreCertificateErrorsOption,
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
          { name: "x86_64-unknown-linux-gnu", icon: "fig://icon?type=cpu" },
          { name: "x86_64-pc-windows-msvc", icon: "fig://icon?type=cpu" },
          { name: "x86_64-apple-darwin", icon: "fig://icon?type=cpu" },
          { name: "aarch64-apple-darwin", icon: "fig://icon?type=cpu" },
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

const denoBench: Fig.Subcommand = {
  name: "bench",
  description: "Run benchmarks using Deno's built-in bench tool",
  args: {
    name: "files",
    isVariadic: true,
    isOptional: true,
    generators: filepaths({
      matches: /[_\.]bench\.m?[jt]sx?/,
      suggestFolders: "always",
    }),
  },
  options: [
    ...runtimeOptions({ perms: true, inspector: false }),
    {
      name: "--ignore",
      description: "Ignore files",
      requiresEquals: true,
      args: {
        name: "files",
        generators: {
          getQueryTerm: ",",
          template: "filepaths",
        },
      },
    },
    {
      name: "--filter",
      description: "Run benchmarks with this string or pattern in the name",
      args: {
        name: "filter",
      },
    },
    watchOption({ files: false }),
    noClearScreenOption,
  ],
};

type DenoConfigurationFile = DenoConfigurationFileSchema & {
  fig?: {
    [key: string]: {
      displayName?: string | undefined;
      description?: string | undefined;
      icon?: string | undefined;
      priority?: number | undefined;
      hidden?: boolean | undefined;
    };
  };
};

/**
 * Get the path of the config file from an array of tokens.
 *
 * If no overriding flag is provided, `null` will be returned.
 *
 * Flags can be provided in any of these forms, and the regex to match this is
 * about as ugly as you'd expect.
 * - `-c name`
 * - `-cname`
 * - `-XYZcname` (short options before `c`, where `XYZ` are any non-c letters)
 * - `-c=name`
 * - `--config name`
 * - `--config=name`
 */
function getConfigPath(tokens: string[]): string | null {
  const flagRe = /^(-[A-Zabd-z]*c=?|--config(?:=|$))/;
  for (const [index, token] of tokens.entries()) {
    const match = token.match(flagRe);
    if (match === null) {
      continue;
    }
    // Group 1 is the flag, up to and including the `=`. Everything after
    // that is the path. If the path is "", then it's the next token.
    const withoutOption = token.slice(match[1].length);
    if (withoutOption === "") {
      return tokens[index + 1];
    }
    return withoutOption;
  }
  return null;
}

async function getDenoConfig(
  tokens: string[],
  executeShellCommand: Fig.ExecuteShellCommandFunction
): Promise<DenoConfigurationFile | null> {
  const configPath = getConfigPath(tokens);
  let jsonString: string;
  if (configPath) {
    jsonString = await executeShellCommand(`\\cat '${configPath}'`);
  } else {
    // Move backwards through the directory heirarchy until we find a config file (or hit the root)
    jsonString = await executeShellCommand(
      "until [[ ( -f deno.json || -f deno.jsonc || $PWD = '/' ) ]]; do cd ..; done; \\cat deno.json 2>/dev/null || \\cat deno.jsonc 2>/dev/null"
    );
  }
  try {
    return JSON.parse(stripJsonComments(jsonString));
  } catch (e: unknown) {
    console.error(`Error parsing config file: ${e}`);
    return null;
  }
}

const denoTask: Fig.Subcommand = {
  name: "task",
  description: "Run a task defined in the configuration file",
  args: [
    {
      name: "task",
      generators: {
        custom: async (tokens, executeShellCommand) => {
          const config = await getDenoConfig(tokens, executeShellCommand);
          if (config === null) {
            return [];
          }
          return Object.entries(config.tasks).map(([name, command]) => {
            const fig = config.fig?.[name] || {};
            return {
              name,
              displayName: fig.displayName,
              description: fig.description || command,
              icon: fig.icon || "⚙️",
              priority: fig.priority,
              hidden: fig.hidden,
            };
          });
        },
      },
    },
    {
      name: "args",
      description: "Arguments to pass to the task",
      isOptional: true,
      isVariadic: true,
    },
  ],
  options: [configOption],
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

const denoVendor: Fig.Subcommand = {
  name: "vendor",
  description: "Vendor remote modules into a local directory",
  args: {
    name: "specifiers",
    isVariadic: true,
    generators: generateRunnableFiles,
  },
  options: [
    {
      name: "--output",
      description: "The directory to output the vendored modules to",
      args: {
        name: "destination",
        template: "folders",
        suggestCurrentToken: true,
      },
    },
    {
      name: ["-f", "--force"],
      description:
        "Forcefully overwrite existing files in the output directory",
    },
    configOption,
    importMapOption,
    lockOption,
    reloadOption,
    caFileOption,
  ],
};

const subcommands: Fig.Subcommand[] = [
  denoBench,
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
  denoUninstall,
  denoLint,
  denoLsp,
  denoRepl,
  denoRun,
  denoTask,
  denoTest,
  denoTypes,
  denoUpgrade,
  denoVendor,
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
        suggestions: subcommands.map(
          (subcommand): Fig.Suggestion => ({
            ...subcommand,
            type: "subcommand",
          })
        ),
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
        name: "level",
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
