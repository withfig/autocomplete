const completionSpec: Fig.Spec = {
  name: "rollup",
  description: "Next-generation ES module bundler",
  options: [
    {
      name: ["-c", "--config"],
      args: {
        name: "filename",
        description:
          "Use this config file (if argument is used but value is unspecified, defaults to rollup.config.js)",
        isOptional: true,
      },
    },
    {
      name: ["-d", "--dir"],
      args: {
        name: "dirname",
        description: "Directory for chunks (if absent, prints to stdout)",
        isOptional: true,
      },
    },
    {
      name: ["-e", "--external"],
      args: {
        name: "ids",
        description: "Comma-separate list of module IDs to exclude",
        isOptional: true,
      },
    },
    {
      name: ["-f", "--format"],
      args: {
        name: "format",
        description: "Type of output (amd, cjs, es, iife, umd, system)",
        isOptional: true,
      },
    },
    {
      name: ["-g", "--globals"],
      args: {
        name: "pairs",
        description: "Comma-separate list of `moduleID:Global` pairs",
        isOptional: true,
      },
    },
    {
      name: ["-h", "--help"],
      description: "Show help message",
    },
    {
      name: ["-i", "--input"],
      args: {
        name: "filename",
        description: "Input (alternative to <entry file>)",
      },
    },
    {
      name: ["-m", "--sourcemap"],
      description: "Generate sourcemap (`-m inline` for inline map)",
    },
    {
      name: ["-n", "--name"],
      args: {
        name: "name",
        description: "Name for UMD export",
      },
    },
    {
      name: ["-o", "--file"],
      args: {
        name: "output",
        description: "Single output file (if absent, prints to stdout)",
      },
    },
    {
      name: ["-p", "--plugin"],
      args: {
        name: "plugin",
        description: "Use the plugin specified (may be repeated)",
      },
    },
    {
      name: ["-v", "--version"],
      description: "Show version number",
    },
    {
      name: ["-w", "--watch"],
      description: "Watch files in bundle and rebuild on changes",
    },
  ],
};

export default completionSpec;
