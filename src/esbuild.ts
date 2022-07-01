import { keyValueList } from "@fig/autocomplete-generators";

const icon =
  "data:image/png;base64,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";

const ignoreExtensions = new Set(["", "sample", "env"]);

const extensions: Fig.Generator["custom"] = async (_, executeShellCommand) => {
  const out = await executeShellCommand(
    "find . -depth 3 -type f -name '*.*' -not -path '*/node_modules/*' | sed 's/.*\\.//' | sort -u"
  );
  const lines = out.trim().split("\n");
  return lines
    .filter((line) => !ignoreExtensions.has(line))
    .map((line) => ({ name: "." + line }));
};

const spec: Fig.Spec = {
  name: "esbuild",
  icon,
  description: "An extremely fast JavaScript bundler",
  parserDirectives: {
    optionArgSeparators: ["=", ":"],
  },
  args: {
    name: "entry points",
    isVariadic: true,
    template: "filepaths",
  },
  options: [
    // Simple options:
    {
      name: "--bundle",
      description: "Bundle all dependencies into the output files",
      priority: 51,
      icon,
    },
    {
      name: "--define",
      description:
        "Replace variable names with a literal value, eg. --define:DEBUG=true",
      requiresSeparator: ":",
      args: { name: "name=value" },
      priority: 51,
      icon,
    },
    {
      name: "--external",
      description: "Exclude modules from the build",
      requiresSeparator: ":",
      args: { name: "module specifier" },
      priority: 51,
      icon,
    },
    {
      name: "--format",
      description: "The output format",
      requiresSeparator: "=",
      args: { name: "format", suggestions: ["iife", "cjs", "esm"] },
      priority: 51,
      icon,
    },
    {
      name: "--loader",
      description: "For a given file extension, specify a loader",
      requiresSeparator: ":",
      args: {
        name: "loaders",
        generators: keyValueList({
          keys: extensions,
          values: [
            "js",
            "jsx",
            "ts",
            "tsx",
            "css",
            "json",
            "text",
            "base64",
            "file",
            "dataurl",
            "binary",
            "copy",
          ],
          cache: true,
        }),
      },
      priority: 51,
      icon,
    },
    {
      name: "--minify",
      description: "Minify the output (sets all the --minify-* options)",
      priority: 51,
      icon,
    },
    {
      name: "--outdir",
      description: "The output directory for multiple entrypoints",
      requiresSeparator: "=",
      args: { name: "path", template: "folders" },
      priority: 51,
      icon,
    },
    {
      name: "--outfile",
      description: "The output file for one entrypoint",
      requiresSeparator: "=",
      args: { name: "path", template: "filepaths" },
      priority: 51,
      icon,
    },
    {
      name: "--platform",
      description: "The platform target",
      requiresSeparator: "=",
      args: { name: "name", suggestions: ["browser", "node", "neutral"] },
      priority: 51,
      icon,
    },
    {
      name: "--serve",
      description: "Start a local HTTP server on this host:port",
      requiresSeparator: "=",
      args: { isOptional: true, name: "[address:]port" },
      priority: 51,
      icon,
    },
    {
      name: "--splitting",
      description: "Enable code splitting",
      priority: 51,
      icon,
    },
    {
      name: "--target",
      description:
        "Set the environment target. Can be a particular ES version or browser version, eg. chrome101",
      requiresSeparator: "=",
      args: {
        name: "target",
        generators: keyValueList({
          keys: [
            "esnext",
            "es2016",
            "es2022",
            "chrome",
            "firefox",
            "ie",
            "node",
            "safari",
            "opera",
          ],
          // There's a bug with keyValueList that causes it to read the first key
          // as a value if there's a preceding equals, eg. --target=key
          // The problem will be fixed here by switching to valueList once it's merged,
          // but that won't solve the issue itself. The workaround is to set the
          // separator to an arbitrary value that won't normally be written.
          separator: "[NEVER]",
        }),
      },
      priority: 51,
      icon,
    },
    {
      name: "--watch",
      description: "Rebuild on file system changes",
      priority: 51,
      icon,
    },
    // Advanced options:
    {
      name: "--allow-overwrite",
      description: "Allow output files to overwrite input files",
      icon,
    },
    {
      name: "--analyze",
      description: "Print a report about the contents of the bundle",
      requiresSeparator: "=",
      args: { name: "verbose?", isOptional: true, suggestions: ["verbose"] },
      icon,
    },
    {
      name: "--asset-names",
      description: "Path template for 'file' loader files",
      requiresSeparator: "=",
      args: { name: "template", default: "[name]-[hash]" },
      icon,
    },
    {
      name: "--banner",
      description: "Text to be prepended to each output file type",
      requiresSeparator: ":",
      args: {
        name: "ext=text[,ext=text...]",
        generators: keyValueList({ keys: extensions, cache: true }),
      },
      icon,
    },
    {
      name: "--charset",
      description: "Use UTF-8 instead of escaped codepoints in ASCII",
      insertValue: "--charset=utf8",
      displayName: "--charset=utf8",
      requiresSeparator: "=",
      args: {},
      icon,
    },
    {
      name: "--chunk-names",
      description: "Path template to use for code splitting chunks",
      requiresSeparator: "=",
      args: { name: "template", default: "[name]-[hash]" },
      icon,
    },
    {
      name: "--color",
      description: "Force use of terminal colors",
      requiresSeparator: "=",
      args: { name: "enabled", suggestions: ["true", "false"] },
      icon,
    },
    {
      name: "--drop",
      description: "Remove certain constructs",
      requiresSeparator: ":",
      args: { suggestions: ["console", "debugger"] },
      icon,
    },
    {
      name: "--entry-names",
      description: "Path template to use for entry point output paths",
      requiresSeparator: "=",
      args: { name: "template", default: "[dir]/[name]" },
      icon,
    },
    {
      name: "--footer",
      description: "Text to be appended to each file type",
      requiresSeparator: ":",
      args: {
        name: "ext=text",
        generators: keyValueList({ keys: ["css", "js"] }),
      },
      icon,
    },
    {
      name: "--global-name",
      description: "The name of the global if using --format=iife",
      requiresSeparator: "=",
      args: { name: "name" },
      icon,
    },
    {
      name: "--ignore-annotations",
      description:
        "Enable this to work with packages that have incorrect tree-shaking annotations",
      icon,
    },
    {
      name: "--inject",
      description:
        "Import the file into all input files, automatically replace matching globals",
      requiresSeparator: ":",
      args: { name: "import", template: "filepaths" },
      icon,
    },
    {
      name: "--jsx-factory",
      description: "What to use for the JSX factory",
      requiresSeparator: "=",
      args: {
        name: "factory",
        suggestions: ["React.createElement", "h", "preact.h"],
      },
      icon,
    },
    {
      name: "--jsx-fragment",
      description: "What to use for the JS Fragment factory",
      requiresSeparator: "=",
      args: { name: "fragment", suggestions: ["React.Fragment", "Fragment"] },
      icon,
    },
    {
      name: "--jsx",
      description: "Preserve JSX instead of transforming",
      insertValue: "--jsx=preserve",
      displayName: "--jsx=preserve",
      requiresSeparator: "=",
      args: {
        suggestions: [
          {
            name: "preserve",
            description: "Preserve JSX instead of transforming",
          },
        ],
      },
      icon,
    },
    {
      name: "--keep-names",
      description: "Preserve 'name' on functions and classes",
      icon,
    },
    {
      name: "--legal-comments",
      description: "Where to place legal comments",
      requiresSeparator: "=",
      args: {
        name: "location",
        suggestions: ["none", "inline", "eof", "linked", "external"],
      },
      icon,
    },
    {
      name: "--log-level",
      description: "Set the log level",
      requiresSeparator: "=",
      args: {
        name: "level",
        suggestions: ["verbose", "debug", "info", "warning", "error", "silent"],
        default: "info",
      },
      icon,
    },
    {
      name: "--log-limit",
      description: "Maximum message count, 0 to disable",
      requiresSeparator: "=",
      args: { name: "count", default: "6" },
      icon,
    },
    {
      name: "--log-override",
      description: "For a particular identifier, set the log level",
      requiresSeparator: ":",
      args: {
        name: "identifier:level",
        generators: keyValueList({
          values: ["verbose", "debug", "info", "warning", "error", "silent"],
        }),
      },
      icon,
    },
    {
      name: "--main-fields",
      description: "Override the main file order in package.json",
      requiresSeparator: "=",
      args: { name: "field order", default: "browser,module,main" },
      icon,
    },
    {
      name: "--mangle-cache",
      description: "Save 'mangle props' decisions to a JSON file",
      requiresSeparator: "=",
      args: { name: "path", template: "filepaths", suggestCurrentToken: true },
      icon,
    },
    {
      name: "--mangle-props",
      description: "Rename all properties matching a regular expression",
      requiresSeparator: "=",
      args: { name: "regex" },
      icon,
    },
    {
      name: "--mangle-quoted",
      description: "Enable mangling (renaming) quoted properties",
      requiresSeparator: "=",
      args: { name: "status", suggestions: ["true", "false"] },
      icon,
    },
    {
      name: "--metafile",
      description: "Write metadata about the build to a JSON file",
      requiresSeparator: "=",
      args: { name: "path", template: "filepaths", suggestCurrentToken: true },
      icon,
    },
    {
      name: "--minify-whitespace",
      description: "Remove unnecessary whitespace in output files",
      icon,
    },
    {
      name: "--minify-identifiers",
      description: "Shorten identifiers in output files",
      icon,
    },
    {
      name: "--minify-syntax",
      description: "Use equivalent but shorter syntax in output files",
      icon,
    },
    {
      name: "--out-extension",
      description: "Use a custom output extension for each extension",
      requiresSeparator: ":",
      args: {
        name: "ext=new",
        generators: keyValueList({ keys: extensions, cache: true }),
      },
      icon,
    },
    {
      name: "--outbase",
      description:
        "Base path used to determine entrypoint output paths, for multiple entrypoints",
      requiresSeparator: "=",
      args: { name: "path", template: "folders" },
      icon,
    },
    {
      name: "--preserve-symlinks",
      description: "Disable symlink resolution",
      icon,
    },
    {
      name: "--public-path",
      description: "Set the base URL for the 'file' loader",
      requiresSeparator: "=",
      args: { name: "path", template: "folders" },
      icon,
    },
    {
      name: "--pure",
      description: "Mark the name as a pure function for tree shaking",
      requiresSeparator: ":",
      args: { name: "name" },
      icon,
    },
    {
      name: "--reserve-props",
      description: "Do not mangle these properties",
      requiresSeparator: "=",
      args: { name: "properties" },
      icon,
    },
    {
      name: "--resolve-extensions",
      description: "Comma-separated list of implicit extensions",
      requiresSeparator: "=",
      args: {
        name: "extensions",
        generators: keyValueList({ keys: extensions, cache: true }),
      },
      icon,
    },
    {
      name: "--servedir",
      description: "What to serve in addition to the generated output files",
      requiresSeparator: "=",
      args: { name: "path", template: "folders" },
      icon,
    },
    {
      name: "--source-root",
      description: "Set the sourceRoot field in generated source maps",
      requiresSeparator: "=",
      args: { name: "URL" },
      icon,
    },
    {
      name: "--sourcefile",
      description:
        "Set the source file for the source map if there's no file name to use",
      requiresSeparator: "=",
      args: { name: "name" },
      icon,
    },
    {
      name: "--sourcemap",
      description: "Generate source maps?",
      requiresSeparator: "=",
      args: {
        name: "options",
        isOptional: true,
        suggestions: [
          {
            name: "external",
            description: "Generate a separate .map.js file with no comment",
          },
          { name: "inline", description: "Append source maps to JS files" },
        ],
      },
      priority: 51,
      icon,
    },
    {
      name: "--sources-content",
      description: "Omit the sourcesContent field in generated source maps",
      insertValue: "--sources-content=false",
      displayName: "--sources-content=false",
      requiresSeparator: "=",
      args: { suggestions: ["false"] },
      icon,
    },
    {
      name: "--supported",
      description: "Consider a given syntax to be supported",
      requiresSeparator: ":",
      args: {
        name: "syntax=status",
        generators: keyValueList({ values: ["true", "false"] }),
      },
      icon,
    },
    {
      name: "--tree-shaking",
      description: "Force tree shaking on or off",
      requiresSeparator: "=",
      args: { name: "status", suggestions: ["true", "false"] },
      icon,
    },
    {
      name: "--tsconfig",
      description: "Use this TypeScript config instead of the default",
      requiresSeparator: "=",
      args: { name: "path", template: "filepaths" },
      icon,
    },
    {
      name: "--version",
      description: "Print the current version and exit",
      icon,
    },
  ],
};

export default spec;
