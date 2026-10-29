const completionSpec: Fig.Spec = {
  name: "solargraph",
  description: "A Ruby language server with static analysis and documentation",
  subcommands: [
    {
      name: "socket",
      description: "Run a Solargraph socket server",
      options: [
        {
          name: ["--host", "-h"],
          description: "The server host",
          args: { name: "host", default: "127.0.0.1" },
        },
        {
          name: ["--port", "-p"],
          description: "The server port (0 picks an available port)",
          args: { name: "port", default: "7658" },
        },
      ],
    },
    {
      name: "stdio",
      description: "Run a Solargraph stdio server",
    },
    {
      name: "config",
      description: "Create or overwrite a default configuration file",
      args: {
        name: "directory",
        isOptional: true,
        template: "folders",
      },
      options: [
        {
          name: ["--extensions", "-e"],
          description: "Add installed extensions",
        },
      ],
    },
    {
      name: "clear",
      description: "Delete all cached documentation",
    },
    {
      name: "uncache",
      description: "Delete specific cached gem documentation",
      args: {
        name: "gem",
        isVariadic: true,
      },
    },
    {
      name: "cache",
      description: "Cache documentation for gems or the Ruby core",
      args: {
        name: "gem",
        isVariadic: true,
        description: "Gem names, or 'core' for the Ruby core",
      },
      options: [
        {
          name: "--directory",
          description: "Workspace directory",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--rebuild",
          description: "Rebuild existing documentation",
        },
      ],
    },
    {
      name: "reporters",
      description: "Get a list of diagnostics reporters",
    },
    {
      name: "typecheck",
      description: "Run the type checker",
      args: {
        name: "file",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["--level", "--mode", "-m", "-l"],
          description:
            "Type checking level (highest, strict, normal, typed, loose)",
          args: { name: "level", default: "normal" },
        },
        {
          name: ["--directory", "-d"],
          description: "The workspace directory",
          args: { name: "directory", template: "folders", default: "." },
        },
      ],
    },
    {
      name: "scan",
      description: "Test the workspace for problems",
      options: [
        {
          name: ["--directory", "-d"],
          description: "The workspace directory",
          args: { name: "directory", template: "folders", default: "." },
        },
        {
          name: ["--verbose", "-v"],
          description: "Verbose output",
        },
      ],
    },
    {
      name: "list",
      description: "List the files in the workspace and the total count",
      options: [
        {
          name: ["--count", "-c"],
          description: "Display the file count only",
        },
        {
          name: ["--directory", "-d"],
          description: "The directory to read",
          args: { name: "directory", template: "folders", default: "." },
        },
      ],
    },
    {
      name: "pin",
      description: "Describe a pin (symbol)",
      args: {
        name: "path",
        isOptional: true,
      },
      options: [
        {
          name: "--rbs",
          description: "Output the pin as RBS",
        },
        {
          name: "--typify",
          description: "Output the calculated return type from annotations",
        },
        {
          name: "--references",
          description: "Show references",
        },
        {
          name: "--probe",
          description: "Output the return type from annotations and inference",
        },
        {
          name: "--stack",
          description:
            "Show the entire stack of a method pin, including definitions in superclasses",
        },
      ],
    },
    {
      name: "profile",
      description: "Profile go-to-definition performance using vernier",
      args: {
        name: "file",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["--directory", "-d"],
          description: "The workspace directory",
          args: { name: "directory", template: "folders", default: "." },
        },
        {
          name: ["--output-dir", "-o"],
          description: "The output directory for profiles",
          args: { name: "output_dir", default: "./tmp/profiles" },
        },
        {
          name: ["--line", "-l"],
          description: "Line number (0-based)",
          args: { name: "line", default: "4" },
        },
        {
          name: ["--column", "-c"],
          description: "Column number",
          args: { name: "column", default: "10" },
        },
        {
          name: ["--memory", "-m"],
          description: "Include memory usage counter",
        },
      ],
    },
    {
      name: "rbs",
      description: "Generate RBS definitions",
      options: [
        {
          name: ["--filename", "-f"],
          description: "Generated file name",
          args: { name: "filename", default: "sig.rbs" },
        },
        {
          name: "--inference",
          description: "Enhance definitions with type inference",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--version", "-v"],
      description: "Print the version",
    },
  ],
};

export default completionSpec;
