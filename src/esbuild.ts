import { keyValueList } from "@fig/autocomplete-generators";

const extensions: Fig.Generator["custom"] = async (_, executeShellCommand) => {
  const out = await executeShellCommand(
    "find . -type f -name '*.*' | sed 's|.*.||' | sort -u"
  );
  const lines = out.trim().split("\n");
  return lines.map((line) => ({ name: line }));
};

const spec: Fig.Spec = {
  name: "esbuild",
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
    },
    {
      name: "--define",
      description:
        "Substitude variable K with literal V, eg. --define:DEBUG=true",
      requiresSeparator: ":",
      args: {},
    },
    {
      name: "--external",
      description: "Exclude modules from the build",
      requiresSeparator: ":",
      args: {},
    },
    {
      name: "--format",
      description: "The output format",
      requiresSeparator: "=",
      args: { suggestions: ["iife", "cjs", "esm"] },
    },
    {
      name: "--loader",
      description: "For a given file extension, specify a loader",
      requiresSeparator: ":",
      args: {
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
    },
    {
      name: "--minify",
      description: "Minify the output (sets all the --minify-* options)",
    },
    {
      name: "--outdir",
      description: "The output directory for multiple entrypoints",
      requiresSeparator: "=",
      args: { template: "folders" },
    },
    {
      name: "--outfile",
      description: "The output file for one entrypoint",
      requiresSeparator: "=",
      args: { template: "filepaths" },
    },
    {
      name: "--platform",
      description: "The platform target",
      requiresSeparator: "=",
      args: { suggestions: ["browser", "node", "neutral"] },
    },
    {
      name: "--serve",
      description: "Start a local HTTP server on this host:port",
      requiresSeparator: "=",
      args: {},
    },
    {
      name: "--splitting",
      description: "Enable code splitting",
    },
    {
      name: "--target",
      description:
        "Set the environment target. Can be a particular ES version or browser version, eg. chrome101",
      requiresSeparator: "=",
      args: {
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
        }),
      },
    },
    {
      name: "--watch",
      description: "Rebuild on file system changes",
    },
    // Advanced options:
    {
      name: "--allow-overwrite",
      description: "Allow output files to overwrite input files",
    },
    {
      name: "--analyze",
      description: "Print a report about the contents of the bundle",
      requiresSeparator: "=",
      args: { isOptional: true, suggestions: ["verbose"] },
    },
    {
      name: "--asset-names",
      description: "Path template for 'file' loader files",
      requiresSeparator: "=",
      args: { default: "[name]-[hash]" },
    },
    {
      name: "--banner",
      description: "Text to be prepended to each output file type",
      requiresSeparator: ":",
      args: { generators: keyValueList({ keys: extensions, cache: true }) },
    },
    {
      name: "--charset",
      description: "Do not escape UTF-8 code points",
      insertValue: "--charset=utf8",
      requiresSeparator: "=",
      args: {},
    },
    {
      name: "--chunk-names",
      description: "Path template to use for code splitting chunks",
      requiresSeparator: "=",
      args: { default: "[name]-[hash]" },
    },
    {
      name: "--color",
      description: "Force use of terminal colors",
      requiresSeparator: "=",
      args: { suggestions: ["true", "false"] },
    },
    {
      name: "--drop",
      description: "Remove certain constructs",
      requiresSeparator: ":",
      args: { suggestions: ["console", "debugger"] },
    },
    {
      name: "--entry-names",
      description: "Path template to use for entry point output paths",
      requiresSeparator: "=",
      args: { default: "[dir]/[name]" },
    },
    {
      name: "--footer",
      description: "Text to be appended to each file type",
      requiresSeparator: ":",
      args: { generators: keyValueList({ keys: ["css", "js"] }) },
    },
    {
      name: "--global-name",
      description: "The name of the global if using --format=iife",
      requiresSeparator: "=",
      args: {},
    },
    {
      name: "--ignore-annotations",
      description:
        "Enable this to work with packages that have incorrect tree-shaking annotations",
    },
    {
      name: "--inject",
      description:
        "Import the file into all input files, automatically replace matching globals",
      requiresSeparator: ":",
      args: { template: "filepaths" },
    },
    {
      name: "--jsx-factory",
      description: "What to use for the JSX factory",
      requiresSeparator: "=",
      args: { suggestions: ["React.createElement", "h", "preact.h"] },
    },
    {
      name: "--jsx-fragment",
      description: "What to use for the JS Fragment factory",
      requiresSeparator: "=",
      args: { suggestions: ["React.Fragment", "Fragment"] },
    },
    {
      name: "--jsx",
      description: "Preserve JSX instead of transforming",
      insertValue: "--jsx=preserve",
      requiresSeparator: "=",
      args: {},
    },
    {
      name: "--keep-names",
      description: "Preserve 'name' on functions and classes",
    },
    {
      name: "--legal-comments",
      description: "Where to place legal comments",
      requiresSeparator: "=",
      args: { suggestions: ["none", "inline", "eof", "linked", "external"] },
    },
    {
      name: "--log-level",
      description: "Set the log level",
      requiresSeparator: "=",
      args: {
        suggestions: ["verbose", "debug", "info", "warning", "error", "silent"],
        default: "info",
      },
    },
    {
      name: "--log-limit",
      description: "Maximum message count, 0 to disable",
      requiresSeparator: "=",
      args: { default: "6" },
    },
    {
      name: "--log-override",
      description: "For a particular identifier, set the log level",
      requiresSeparator: ":",
      args: {
        generators: keyValueList({
          values: ["verbose", "debug", "info", "warning", "error", "silent"],
        }),
      },
    },
    {
      name: "--main-fields",
      description: "Override the main file order in package.json",
      requiresSeparator: "=",
      args: { default: "browser,module,main" },
    },
    {
      name: "--mangle-cache",
      description: "Save 'mangle props' decisions to a JSON file",
      requiresSeparator: "=",
      args: { template: "filepaths", suggestCurrentToken: true },
    },
    {
      name: "--mangle-props",
      description: "Rename all properties matching a regular expression",
      requiresSeparator: "=",
      args: {},
    },
    {
      name: "--mangle-quoted",
      description: "Enable renamining quoted properties",
      requiresSeparator: "=",
      args: { suggestions: ["true", "false"] },
    },
    {
      name: "--metafile",
      description: "Write metadata about the build to a JSON file",
      requiresSeparator: "=",
      args: { template: "filepaths", suggestCurrentToken: true },
    },
    {
      name: "--minify-whitespace",
      description: "Remove unnecessary whitespace in output files",
    },
    {
      name: "--minify-identifiers",
      description: "Shorten identifiers in output files",
    },
    {
      name: "--minify-syntax",
      description: "Use equivalent but shorter syntax in output files",
    },
    {
      name: "--out-extension",
      description: "Use a custom output extension for each extension",
      requiresSeparator: "=",
      args: { generators: keyValueList({ keys: extensions, cache: true }) },
    },
    {
      name: "--outbase",
      description:
        "Base path used to determine entrypoint output paths, for multiple entrypoints",
      requiresSeparator: "=",
      args: { template: "folders" },
    },
    {
      name: "--preserve-symlinks",
      description: "Disable symlink resolution",
    },
    {
      name: "--public-path",
      description: "Set the base URL for the 'file' loader",
      requiresSeparator: "=",
      args: { template: "folders" },
    },
    {
      name: "--pure",
      description: "Mark the name as a pure function for tree shaking",
      requiresSeparator: ":",
      args: {},
    },
    {
      name: "--reserve-props",
      description: "Do not mangle these properties",
      requiresSeparator: "=",
      args: {},
    },
    {
      name: "--resolve-extensions",
      description: "Comma-separated list of implicit extensions",
      requiresSeparator: "=",
      args: { generators: keyValueList({ keys: extensions, cache: true }) },
    },
    {
      name: "--servedir",
      description: "What to serve in addition to the generated output files",
      requiresSeparator: "=",
      args: { template: "folders" },
    },
    {
      name: "--source-root",
      description: "Set the sourceRoot field in generated source maps",
      requiresSeparator: "=",
      args: {},
    },
    {
      name: "--sourcefile",
      description: "Set the source file for the source map",
      requiresSeparator: "=",
      args: {},
    },
    {
      name: "--sourcemap",
      description: "Generate source maps?",
      requiresSeparator: "=",
      args: { isOptional: true, suggestions: ["external", "inline"] },
    },
    {
      name: "--sources-content",
      description: "Omit the sourcesContent field in generated souce maps",
      insertValue: "--sources-content=false",
      requiresSeparator: "=",
      args: { suggestions: ["false"] },
    },
    {
      name: "--supported",
      description: "Consider a given syntax to be supported",
      requiresSeparator: ":",
      args: { generators: keyValueList({ values: ["true", "false"] }) },
    },
    {
      name: "--tree-shaking",
      description: "Force tree shaking on or off",
      requiresSeparator: "=",
      args: { suggestions: ["true", "false"] },
    },
    {
      name: "--tsconfig",
      description: "Use this TypeScript config instead of the default",
      requiresSeparator: "=",
      args: { template: "filepaths" },
    },
    {
      name: "--version",
      description: "Print the current version and exit",
    },
  ],
};

export default spec;
