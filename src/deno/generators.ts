/* eslint-disable @withfig/fig-linter/no-missing-default-export */

import { filepaths } from "@fig/autocomplete-generators";
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
    return command.join(" ");
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
  script: `curl -sL 'https://cdn.deno.land/deno/meta/versions.json'`,
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

type DenoLintRulesJSON = {
  code: string;
  tags: string[];
  docs: string;
}[];

export const generateLintRules: Fig.Generator = {
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

export const generateTasks: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
  },
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
};
