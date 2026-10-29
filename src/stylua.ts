const syntaxVariants: string[] = [
  "All",
  "Lua51",
  "Lua52",
  "Lua53",
  "Lua54",
  "LuaJIT",
  "Luau",
  "CfxLua",
];

const completionSpec: Fig.Spec = {
  name: "stylua",
  description: "An opinionated Lua code formatter",
  args: {
    name: "file or directory",
    description: "Files or directories to format; use - to read from stdin",
    isVariadic: true,
    template: "filepaths",
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help information",
    },
    {
      name: ["--version", "-V"],
      description: "Print version information",
    },
    {
      name: "--check",
      description:
        "Check if files need formatting without writing to them; exits with an error code if any file is not formatted",
    },
    {
      name: "--output-format",
      description: "Set the type of diff output to print when using --check",
      displayName: "--output-format=<format>",
      requiresSeparator: true,
      args: {
        name: "format",
        suggestions: ["standard", "unified", "json", "summary"],
        default: "standard",
      },
    },
    {
      name: "--verify",
      description:
        "Verify the formatted output parses to the same AST as the input",
    },
    {
      name: "--stdin-filepath",
      description:
        "Provide the filepath of the code when formatting from stdin",
      displayName: "--stdin-filepath=<path>",
      requiresSeparator: true,
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: ["--glob", "-g"],
      description:
        "A glob pattern to match files during directory search; can be used multiple times, and negation is supported",
      displayName: "--glob=<pattern>",
      requiresSeparator: true,
      args: {
        name: "pattern",
      },
    },
    {
      name: "--respect-ignores",
      description:
        "Apply glob and .styluaignore filtering to files passed directly or via stdin",
    },
    {
      name: "--range-start",
      description:
        "Format only statements starting at or after this byte offset",
      displayName: "--range-start=<num>",
      requiresSeparator: true,
      args: {
        name: "num",
      },
    },
    {
      name: "--range-end",
      description:
        "Format only statements ending at or before this byte offset",
      displayName: "--range-end=<num>",
      requiresSeparator: true,
      args: {
        name: "num",
      },
    },
    {
      name: "--config-path",
      description:
        "Use a custom configuration file; errors if the file is missing or malformed",
      displayName: "--config-path=<path>",
      requiresSeparator: true,
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--no-editorconfig",
      description: "Do not use .editorconfig when no stylua.toml is found",
    },
    {
      name: "--search-parent-directories",
      description:
        "Search ancestor directories and config folders for a stylua.toml",
    },
    {
      name: "--syntax",
      description: "Choose the Lua syntax variant to parse",
      displayName: "--syntax=<style>",
      requiresSeparator: true,
      args: {
        name: "style",
        suggestions: syntaxVariants,
      },
    },
    {
      name: "--column-width",
      description: "Approximate line length guide for wrapping",
      displayName: "--column-width=<num>",
      requiresSeparator: true,
      args: {
        name: "num",
        default: "120",
      },
    },
    {
      name: "--line-endings",
      description: "Set the line endings to use",
      displayName: "--line-endings=<mode>",
      requiresSeparator: true,
      args: {
        name: "mode",
        suggestions: ["Unix", "Windows"],
        default: "Unix",
      },
    },
    {
      name: "--indent-type",
      description: "Set the type of indentation",
      displayName: "--indent-type=<type>",
      requiresSeparator: true,
      args: {
        name: "type",
        suggestions: ["Tabs", "Spaces"],
        default: "Tabs",
      },
    },
    {
      name: "--indent-width",
      description: "Set the size of one indentation level",
      displayName: "--indent-width=<num>",
      requiresSeparator: true,
      args: {
        name: "num",
        default: "4",
      },
    },
    {
      name: "--quote-style",
      description: "Set the string quoting style",
      displayName: "--quote-style=<style>",
      requiresSeparator: true,
      args: {
        name: "style",
        suggestions: [
          "AutoPreferDouble",
          "AutoPreferSingle",
          "ForceDouble",
          "ForceSingle",
        ],
        default: "AutoPreferDouble",
      },
    },
    {
      name: "--call-parentheses",
      description:
        "Set when parentheses are applied to calls with a single string or table argument",
      displayName: "--call-parentheses=<mode>",
      requiresSeparator: true,
      args: {
        name: "mode",
        suggestions: [
          "Always",
          "NoSingleString",
          "NoSingleTable",
          "None",
          "Input",
        ],
        default: "Always",
      },
    },
    {
      name: "--space-after-function-names",
      description:
        "Set when a space is put between a function name and its parentheses",
      displayName: "--space-after-function-names=<mode>",
      requiresSeparator: true,
      args: {
        name: "mode",
        suggestions: ["Never", "Definitions", "Calls", "Always"],
        default: "Never",
      },
    },
    {
      name: "--block-newline-gaps",
      description:
        "Set whether leading/trailing newline gaps in blocks are kept",
      displayName: "--block-newline-gaps=<mode>",
      requiresSeparator: true,
      args: {
        name: "mode",
        suggestions: ["Never", "Preserve"],
        default: "Never",
      },
    },
    {
      name: "--collapse-simple-statement",
      description: "Set whether simple statements are collapsed onto one line",
      displayName: "--collapse-simple-statement=<mode>",
      requiresSeparator: true,
      args: {
        name: "mode",
        suggestions: [
          "Never",
          "Input",
          "FunctionOnly",
          "ConditionalOnly",
          "Always",
        ],
        default: "Never",
      },
    },
    {
      name: "--lsp",
      description: "Run StyLua as a language server over stdin/stdout",
    },
  ],
};

export default completionSpec;
