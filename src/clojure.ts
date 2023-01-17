/**
 * Adds brackets to some content.
 *
 * @param content The content to be bracketized
 * @returns The content with brackets
 */
function bracketize<T>(content: T): string {
  return `<${content}>`;
}

/**
 * Gets a single value from one or more values.
 *
 * @param value The value to extract
 * @returns The single value
 */
function singleName<T>(value: Fig.SingleOrArray<T>): T {
  if (Array.isArray(value)) {
    return value.at(-1);
  } else {
    return value;
  }
}

/**
 * Create an option with aliasing support.
 */
function alias(
  { name: oName, ...option }: Fig.Option,
  { args } = { args: "aliases" }
): Fig.Option {
  const name = singleName(oName);

  return {
    name,
    displayName: `${name}:${bracketize(args)}`,
    ...option,
  };
}

const invokeArgs = [
  {
    name: "a/fn",
    description: "An alias to refer to its function or a qualified function",
    isOptional: true,
  },
  {
    name: "kvs",
    description: "A list of key-value arguments to merge with the exec-args",
    isVariadic: true,
    optionsCanBreakVariadicArg: false,
    isOptional: true,
  },
  {
    name: "kv-map",
    description:
      "Map to merge with the :exec-args map, taking precedence over kvs",
    isOptional: true,
  },
];

const completionSpec: Fig.Spec = {
  name: "clojure",
  description:
    "Use the Clojure tools to run Clojure programs on the JVM, start a REPL, or invoke a specific function with data",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    // exec-opts
    alias({
      name: "-A",
      description: "Use concatenated aliases to modify classpath",
    }),
    alias({
      name: "-X",
      args: invokeArgs,
    }),
    alias(
      {
        name: "-T",
        description: "Invoke tool by name or via aliases ala -X",
        args: invokeArgs,
      },
      { args: "name|aliases" }
    ),
    alias({
      name: "-M",
      description:
        "Use concatenated aliases to modify classpath or supply main opts",
      args: {
        name: "args",
        isVariadic: true,
        isOptional: true,
      },
    }),
    {
      name: "-P",
      description:
        "Prepare deps - download libs, cache classpath, but don't exec",
    },
    // clj-opts
    {
      name: "-J",
      description: "Pass opt through in java_opts",
      displayName: "-J<opt>",
      insertValue: "-J{cursor}",
    },
    {
      name: "-Sdeps",
      description: "Pass the deps data on the command line",
      args: {
        name: "edn",
        description: "The deps data in edn",
      },
    },
    {
      name: "-Spath",
      description: "Compute classpath and echo to stdout only",
    },
    {
      name: "-Scp",
      description: "Use specified classpath instead of cached or computed one",
      args: {
        name: "cp",
        description: "The classpath to use",
      },
    },
    {
      name: "-Sdescribe",
      description: "Print environment and command parsing information as data",
    },
    {
      name: "-Sforce",
      description: "Ignore classpath cache and force recomputation",
    },
    {
      name: "-Spom",
      description: "Generate (or update) pom.xml with deps and paths",
    },
    {
      name: "-Srepro",
      description: "Ignore the ~/.clojure/deps.edn config file",
    },
    {
      name: "-Sthreads",
      description:
        "Set the number of threads to use when downloading dependencies",
    },
    {
      name: "-Strace",
      description: "Write a trace.edn file that traces deps expansion",
    },
    {
      name: "-Stree",
      description: "Print dependency tree",
    },
    {
      name: "-Sverbose",
      description: "Print all path locations",
    },
    {
      name: ["-version", "--version"],
      description: "Print the Clojure CLI version",
    },
    // Init options
    {
      name: ["-i", "--init"],
      description: "Load a file or resource",
      args: {
        name: "path",
      },
    },
    {
      name: ["-e", "--eval"],
      description: "Evaluate expressions in string; print non-nil values",
      args: {
        name: "string",
      },
    },
    {
      name: "--report",
      description: "Report uncaught exceptions",
      args: {
        name: "target",
        description: "Where to report",
        suggestions: ["file", "stderr", "none"],
      },
    },
    // Main options
    {
      name: ["-m", "--main"],
      description: "Call the -main function from a namespace with args",
      args: [
        {
          name: "ns-name",
          description: "The namespace of the -main function",
          isScript: true,
        },
        {
          name: "args",
          description: "The arguments to pass to the -main function",
          isVariadic: true,
        },
      ],
    },
    {
      name: ["-r", "--repl"],
      description: "Run a REPL",
    },
    // May want to add `path` and `-` later if someone can figure out how to use those.
    {
      name: ["-h", "-?", "--help"],
      description: "Show help for clojure",
    },
  ],
};

export default completionSpec;
