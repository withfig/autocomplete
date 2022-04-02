function singleName<T>(name: Fig.SingleOrArray<T>): T {
  if (Array.isArray(name)) {
    return name.at(-1);
  } else {
    return name;
  }
}

/**
 * Create an option with aliasing support.
 *
 * @param option The option
 * @returns An option optimized for aliases
 */
function alias({ name: oName, ...option }: Fig.Option): Fig.Option {
  const name = singleName(oName);

  return {
    name: `${name}:`,
    displayName: `${name}:&lt;aliases&gt;`,
    insertValue: `${name}:{cursor}`,
    ...option,
  };
}

/**
 * Create an option for tools.
 *
 * @param option The rest of the options
 * @returns An option optimized for tools
 */
function tool({ name: oName, ...option }: Fig.Option): Fig.Option {
  const name = singleName(oName);

  return {
    name,
    displayName: `${name}&lt;tool&gt;`,
    insertValue: `${name}{cursor}`,
    ...option,
  };
}

/**
 * Arguments for -X and -T.
 */
const invokeArgs: Fig.Arg[] = [
  {
    name: "fn",
    description: "An arbitrary function to execute",
    isOptional: true,
    isScript: true,
  },
  {
    name: "kvs",
    description: "Key-path and value pairs to merge with the :exec-args map",
    isOptional: true,
    isVariadic: true,
  },
  {
    name: "kv-map",
    description:
      "Map to merge with the :exec-args map, taking precedence over kvs",
    isOptional: true,
  },
];

const execOption: Fig.Option = {
  name: "-X",
  description: "Modify classpath or supply exec fn/args",
  isRepeatable: true,
  args: invokeArgs,
};

const toolOption: Fig.Option = {
  name: "-T",
  description: "Invoke a tool that does not use the project classpath",
  args: invokeArgs,
};

const mainOption: Fig.Option = {
  name: "-M",
  description: "Modify classpath or supply main opts",
};

const completionSpec: Fig.Spec = {
  name: "clojure",
  description:
    "Use the Clojure tools to run Clojure programs on the JVM, start a REPL, or invoke a specific function with data",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    // -A
    alias({
      name: "-A",
      description: "Use concatenated aliases to modify classpath",
    }),
    // -X
    execOption,
    alias(execOption),
    // -T
    tool(toolOption),
    alias(toolOption),
    // -M
    mainOption,
    alias(mainOption),
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
    // Others
    {
      name: "-P",
      description:
        "Prepare executable (e.g. install dependencies), but don't execute",
    },
    {
      name: "-J",
      displayName: "-J&lt;option&gt;",
      insertValue: "-J{cursor}",
      description: "Pass Java option",
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
  ],
};

export default completionSpec;
