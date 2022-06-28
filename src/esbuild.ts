import { keyValueList } from "@fig/autocomplete-generators";

const icon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMRSURBVHgBvVe/TxRBFP52dlc0NgRDZ8IRC60UY2IijVKbKMQSEu4SlU6xtuBItAbsjAVHQksA8R+w8FdHY0xEw2lCYUwIjTFw+8P3ZnZu547dvWNxecnbud399n3fvDd7+8ZCgm2vohcuypbATTodgoWSlQTkiyESLVSHTRrrNK4P3kYtLUSLfdvAqCOwSOS9lhUBLOSzUAkJ6RCEqAceZi/caRXSEnr7DeboyrRt0w0rP2+CDiUikGOVsjGr7wn94/sGZoogZ+NYHFMIeVLdek0TNe7hyyrKp1wsOrYC/U9y0zgTnAXfBxoNjF0cw5rk+rqObddBiWcvimKPjNaCEuBhz93FoP15BWWaedkuePZNs9R6ID+97+KXoLyMypoXzmxokIsCXJNbgl63gSzu37vAsxdqPA7mkAg+CFzhDAyl5Z0DPl+gRbqlxiSCbjCpFqIkoh+J9nI5DqiJ2gnmX3XGZJnIujk1AfSfi8+TCB6OA2fPZGNyC+jvA54+yhYxcF5h8ooQnQBFi+gooGgRXQkoUkTXArSIqfHWaxyY3xZtLGLiXjYmt4CkQJwRflu0/dgBlleyMbkEJKWSA8uy9MXkjPnzNx2TS0BR5FKA7FZw8uSaV0SfRuknQm7wsQvZpwXGRQNrfgvSAjOmW3I9a83F3Cyg7geqU2nPgvktSAv85EFnTNLsI85N+/4YRmyBS9wNCStuFnjgP5Rrl4GfOxFRQuBuMDBm3+wJPeCggU/Wx2VM9ziY63EBakxhO+Qi7pCO2yjppOqUe74kxv4BifBRET0N1HxqEFkRO6tjD9rWRS43au1H5MzhefK8fn0cNXG1gj0/RCVKCbfLChAJ8YNY0FHcfNZTbXgzvhw9tTlpZvj9EuZdG4+pPYfDZbDjUujtWbfliPaFquacAd8Q4ssJzt6YRLVFANuHJVRpMc4wuZMg4NADaeSmgCj9fpyVheFJTGvYoXjvFlFmEeQluZ0y3oqjWPsaoEzsIUBluII1E5cal4WQgLv0/BCBSnkU8NacHtsk8rdU9toIrbd22D8gaAOqnuYnFgAAAABJRU5ErkJggg==";

const ignoreExtensions = new Set(["", "sample", "env"]);

const extensions: Fig.Generator["custom"] = async (_, executeShellCommand) => {
  const out = await executeShellCommand(
    "find . -depth 3 -type f -name '*.*' -not -path '*/node_modules/*' | gsed 's/.*\\.//' | sort -u"
  );
  const lines = out.trim().split("\n");
  return lines
    .filter((line) => !ignoreExtensions.has(line))
    .map((line) => ({ name: "." + line }));
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
      priority: 51,
      icon,
    },
    {
      name: "--define",
      description:
        "Substitude variable K with literal V, eg. --define:DEBUG=true",
      requiresSeparator: ":",
      args: {},
      priority: 51,
      icon,
    },
    {
      name: "--external",
      description: "Exclude modules from the build",
      requiresSeparator: ":",
      args: {},
      priority: 51,
      icon,
    },
    {
      name: "--format",
      description: "The output format",
      requiresSeparator: "=",
      args: { suggestions: ["iife", "cjs", "esm"] },
      priority: 51,
      icon,
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
      args: { template: "folders" },
      priority: 51,
      icon,
    },
    {
      name: "--outfile",
      description: "The output file for one entrypoint",
      requiresSeparator: "=",
      args: { template: "filepaths" },
      priority: 51,
      icon,
    },
    {
      name: "--platform",
      description: "The platform target",
      requiresSeparator: "=",
      args: { suggestions: ["browser", "node", "neutral"] },
      priority: 51,
      icon,
    },
    {
      name: "--serve",
      description: "Start a local HTTP server on this host:port",
      requiresSeparator: "=",
      args: {},
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
      priority: 51,
      icon,
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
