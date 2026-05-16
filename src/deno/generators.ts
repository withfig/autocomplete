/* eslint-disable @withfig/fig-linter/no-missing-default-export */

import { filepaths, valueList } from "@fig/autocomplete-generators";
import stripJsonComments from "strip-json-comments";

import type { DenoConfigurationFileSchema } from "./config_schema";
import type {
  ClassMethodDef,
  ClassPropertyDef,
  DocNode,
  InterfaceMethodDef,
  InterfacePropertyDef,
} from "./deno_doc";

// --- Generate documentation symbols

type Node =
  | DocNode
  | InterfaceMethodDef
  | InterfacePropertyDef
  | ClassMethodDef
  | ClassPropertyDef;

/** Get unique values */
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
  return nodes
    .filter((node) => node.name === head)
    .flatMap((node) => findChildNodes(getNodeChildren(node), tail));
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

export const generateDocs: Fig.Generator = {
  // This can cause dependencies to download, needs a longer timeout
  scriptTimeout: 12000,

  trigger: ".",
  getQueryTerm: ".",

  // Options can be provided in any order, so the second last element
  // isn't guaranteed to be the scope. The solution is to reuse the
  // user input, but filter out other options and everything that isn't
  // likely to be an argument.
  script: (tokens) => {
    const allowedOptions = new Set(["--private", "--builtin", "--unstable"]);
    // Slice to the second last element: `--json` conflicts with `scope`
    const command = tokens
      .slice(0, -1)
      .filter(
        (token) =>
          !(token.startsWith("-") && !allowedOptions.has(token)) &&
          !token.startsWith("$") &&
          !token.startsWith("(")
      );
    command.push("--json");
    return command;
  },
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
};

// --- Generate Deno versions

type VersionsJSON = {
  latest: string;
  versions: string[];
};

export const generateVersions: Fig.Generator = {
  script: ["curl", "-sL", "https://cdn.deno.land/deno/meta/versions.json"],
  cache: { ttl: 1000 * 60 * 60 * 24 }, // 24 hours, in milliseconds
  postProcess: (out) => {
    const data = JSON.parse(out) as VersionsJSON;
    return data.versions.map((version) => ({
      name: version.startsWith("v") ? version.slice(1) : version,
    }));
  },
};

// --- Filepath generators

/**
 * Equivalent to the `"filepaths"` template, but boosts the priority of files
 * that match one of the names provided.
 */
export function generatePreferredFilepaths(init: {
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
export const generateRunnableFiles = filepaths({
  matches: /\.(m?(j|t)sx?)$/i,
  editFileSuggestions: { priority: 75 },
});

// --- Generate lint rules

export const generateLintRules = valueList({
  insertDelimiter: true,
  values: [
    {
      name: "adjacent-overload-signatures",
      description: "Requires overload signatures to be adjacent to each other",
    },
    {
      name: "ban-ts-comment",
      description:
        "Disallows the use of Typescript directives without a comment",
    },
    {
      name: "ban-types",
      description:
        "Bans the use of primitive wrapper objects (e.g. `String` the object is a wrapper\nof `string` the primitive) in addition to the non-explicit `Function` type and\nthe misunderstood `Object` type",
    },
    {
      name: "ban-unknown-rule-code",
      description: "Warns the usage of unknown rule codes in ignore directives",
    },
    {
      name: "ban-untagged-ignore",
      description:
        "Requires `deno-lint-ignore` to be annotated with one or more rule names",
    },
    {
      name: "ban-unused-ignore",
      description: "Warns unused ignore directives",
    },
    {
      name: "constructor-super",
      description:
        "Verifies the correct usage of constructors and calls to `super()`",
    },
    {
      name: "for-direction",
      description:
        "Requires `for` loop control variables to increment in the correct direction",
    },
    {
      name: "getter-return",
      description: "Requires all property getter functions to return a value",
    },
    {
      name: "no-array-constructor",
      description: "Enforce conventional usage of array construction",
    },
    {
      name: "no-async-promise-executor",
      description:
        "Requires that async promise executor functions are not used",
    },
    {
      name: "no-case-declarations",
      description:
        "Requires lexical declarations (`let`, `const`, `function` and `class`) in switch\n`case` or `default` clauses to be scoped with brackets",
    },
    {
      name: "no-class-assign",
      description: "Disallows modifying variables of class declarations",
    },
    {
      name: "no-compare-neg-zero",
      description: "Disallows comparing against negative zero (`-0`)",
    },
    {
      name: "no-cond-assign",
      description:
        "Disallows the use of the assignment operator, `=`, in conditional statements",
    },
    {
      name: "no-constant-condition",
      description:
        "Disallows the use of a constant expression in conditional test",
    },
    {
      name: "no-control-regex",
      description:
        "Disallows the use ascii control characters in regular expressions",
    },
    {
      name: "no-debugger",
      description: "Disallows the use of the `debugger` statement",
    },
    {
      name: "no-delete-var",
      description: "Disallows the deletion of variables",
    },
    {
      name: "no-deprecated-deno-api",
      description: "Warns the usage of the deprecated Deno APIs",
    },
    {
      name: "no-dupe-args",
      description:
        "Disallows using an argument name more than once in a function signature",
    },
    {
      name: "no-dupe-class-members",
      description:
        "Disallows using a class member function name more than once",
    },
    {
      name: "no-dupe-else-if",
      description:
        "Disallows using the same condition twice in an `if`/`else if` statement",
    },
    {
      name: "no-dupe-keys",
      description: "Disallows duplicate keys in object literals",
    },
    {
      name: "no-duplicate-case",
      description:
        "Disallows using the same case clause in a switch statement more than once",
    },
    {
      name: "no-empty",
      description: "Disallows the use of empty block statements",
    },
    {
      name: "no-empty-character-class",
      description:
        "Disallows using the empty character class in a regular expression",
    },
    {
      name: "no-empty-enum",
      description: "Disallows the declaration of an empty enum",
    },
    {
      name: "no-empty-interface",
      description: "Disallows the declaration of an empty interface",
    },
    {
      name: "no-empty-pattern",
      description: "Disallows the use of empty patterns in destructuring",
    },
    {
      name: "no-ex-assign",
      description: "Disallows the reassignment of exception parameters",
    },
    {
      name: "no-explicit-any",
      description: "Disallows use of the `any` type",
    },
    {
      name: "no-extra-boolean-cast",
      description: "Disallows unnecessary boolean casts",
    },
    {
      name: "no-extra-non-null-assertion",
      description: "Disallows unnecessary non-null assertions",
    },
    {
      name: "no-extra-semi",
      description: "<!-- deno-fmt-ignore-file -->",
    },
    {
      name: "no-fallthrough",
      description: "Disallows the implicit fallthrough of case statements",
    },
    {
      name: "no-func-assign",
      description:
        "Disallows the overwriting/reassignment of an existing function",
    },
    {
      name: "no-global-assign",
      description: "Disallows assignment to native Javascript objects",
    },
    {
      name: "no-import-assign",
      description: "Disallows reassignment of imported module bindings",
    },
    {
      name: "no-inferrable-types",
      description: "Disallows easily inferrable types",
    },
    {
      name: "no-inner-declarations",
      description:
        "Disallows variable or function definitions in nested blocks",
    },
    {
      name: "no-invalid-regexp",
      description:
        "Disallows specifying invalid regular expressions in RegExp constructors",
    },
    {
      name: "no-invalid-triple-slash-reference",
      description: "Warns the wrong usage of triple-slash reference directives",
    },
    {
      name: "no-irregular-whitespace",
      description:
        "Disallows the use of non-space or non-tab whitespace characters",
    },
    {
      name: "no-misused-new",
      description:
        "Disallows defining `constructor`s for interfaces or `new` for classes",
    },
    {
      name: "no-namespace",
      description:
        "Disallows the use of `namespace` and `module` keywords in TypeScript code",
    },
    {
      name: "no-new-symbol",
      description:
        "Disallows the use of `new` operators with built-in `Symbol`s",
    },
    {
      name: "no-obj-calls",
      description: "Disallows calling built-in global objects like functions",
    },
    {
      name: "no-octal",
      description:
        "Disallows expressing octal numbers via numeric literals beginning with `0`",
    },
    {
      name: "no-prototype-builtins",
      description: "Disallows the use of `Object.prototype` builtins directly",
    },
    {
      name: "no-redeclare",
      description:
        "Disallows redeclaration of variables, functions, parameters with the same name",
    },
    {
      name: "no-regex-spaces",
      description: "Disallows multiple spaces in regular expression literals",
    },
    {
      name: "no-self-assign",
      description: "Disallows self assignments",
    },
    {
      name: "no-setter-return",
      description: "Disallows returning values from setters",
    },
    {
      name: "no-shadow-restricted-names",
      description: "Disallows shadowing of restricted names",
    },
    {
      name: "no-this-alias",
      description: "Disallows assigning variables to `this`",
    },
    {
      name: "no-this-before-super",
      description:
        "Disallows use of `this` or `super` before calling `super()` in constructors",
    },
    {
      name: "no-unreachable",
      description:
        "Disallows the unreachable code after the control flow statements",
    },
    {
      name: "no-unsafe-finally",
      description:
        "Disallows the use of control flow statements within `finally` blocks",
    },
    {
      name: "no-unsafe-negation",
      description:
        "Disallows the usage of negation operator `!` as the left operand of relational\noperators",
    },
    {
      name: "no-unused-labels",
      description: "Disallows unused labels",
    },
    {
      name: "no-unused-vars",
      description: "Enforces all variables used at least once",
    },
    {
      name: "no-var",
      description:
        "Enforces the use of block scoped variables over more error prone function scoped\nvariables. Block scoped variables are defined using `const` and `let` keywords",
    },
    {
      name: "no-window-prefix",
      description: "Disallows the use of Web APIs via the `window` object",
    },
    {
      name: "no-with",
      description: "Disallows the usage of `with` statements",
    },
    {
      name: "prefer-as-const",
      description:
        "Recommends using const assertion (`as const`) over explicitly specifying literal\ntypes or using type assertion",
    },
    {
      name: "prefer-const",
      description: "Recommends declaring variables with [`const`] over [`let`]",
    },
    {
      name: "prefer-namespace-keyword",
      description:
        "Recommends the use of `namespace` keyword over `module` keyword when declaring\nTypeScript module",
    },
    {
      name: "require-await",
      description: "Disallows async functions that have no await expression",
    },
    {
      name: "require-yield",
      description: "Disallows generator functions that have no `yield`",
    },
    {
      name: "use-isnan",
      description: "Disallows comparisons to `NaN`",
    },
    {
      name: "valid-typeof",
      description:
        "Restricts the use of the `typeof` operator to a specific set of string literals",
    },
  ].map((suggestion) => ({ ...suggestion, icon: "fig://icon?type=string" })),
});

// --- Generate tasks

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
  executeShellCommand: Fig.ExecuteCommandFunction
): Promise<DenoConfigurationFile | null> {
  const configPath = getConfigPath(tokens);
  let jsonString: string;
  if (configPath) {
    const { stdout } = await executeShellCommand({
      command: "cat",
      // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
      args: [configPath],
    });
    jsonString = stdout;
  } else {
    // Move backwards through the directory heirarchy until we find a config file (or hit the root)
    const { stdout } = await executeShellCommand({
      command: "bash",
      args: [
        "-c",
        "until [[ ( -f deno.json || -f deno.jsonc || $PWD = '/' ) ]]; do cd ..; done; \\cat deno.json 2>/dev/null || \\cat deno.jsonc 2>/dev/null",
      ],
    });
  }
  try {
    return JSON.parse(stripJsonComments(jsonString));
  } catch (e: unknown) {
    console.error(`Error parsing config file: ${e}`);
    return null;
  }
}

export const generateTasks: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
  },
  custom: async (tokens, executeShellCommand) => {
    const config = await getDenoConfig(tokens, executeShellCommand);
    if (config === null) {
      return [];
    }
    return Object.entries(config.tasks || {}).map(([name, command]) => {
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
};

// --- Generate installed deno scripts

export const generateInstalledDenoScripts: Fig.Generator = {
  script: [
    "bash",
    "-c",
    "command find ~/.deno/bin -maxdepth 1 -perm -111 -type f",
  ],
  postProcess: (out) =>
    out
      .split("\n")
      .filter((path) => !path.endsWith("/deno"))
      .map((path) => ({
        name: path.slice(path.lastIndexOf("/") + 1),
        icon: "📦",
        description: path,
      })),
};

// --- Suggest URLs from clipboard

// Our transpilation causes this to become `new RegExp` which we don't want to
// run on every invocation of the function
const httpsRe = /^(https?:\/\/.*\.(?:m?[jt]sx?))(?:\?.*)?(?:\#.*)?$/;

const clipboardTests: ((str: string) => string | boolean)[] = [
  // HTTPS test
  (str) => {
    const match = str.match(httpsRe);
    if (!match) {
      return false;
    }
    return match[1];
  },
  // NPM test
  (str) => str.startsWith("npm:"),
];

export const generateUrlScript: Fig.Generator = {
  // There's no simple solution for pasting on Linux, it depends on
  // whether you use X11 or Wayland. For Wayland on some (most?) distros,
  // you would have to manually install wl-paste.
  script: ["pbpaste"],
  postProcess: (clipboard) => {
    clipboard = clipboard.trim();
    if (!clipboard) {
      return [];
    }
    for (const test of clipboardTests) {
      const match = test(clipboard);
      if (!match) {
        continue;
      }
      return [
        {
          name: match === true ? clipboard : match,
          icon: "fig://template?badge=📋&color=000000",
          priority: 100,
        },
      ];
    }
  },
};
