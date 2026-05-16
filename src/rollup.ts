import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "rollup",
  description: "Next-generation ES module bundler",
  options: [
    {
      name: ["-c", "--config"],
      description:
        "Use this config file (if argument is used but value is unspecified, defaults to rollup.config.js)",
      args: {
        name: "filename",
        generators: filepaths({ extensions: ["config.js"] }),
      },
    },
    {
      name: ["-d", "--dir"],
      args: {
        name: "dirname",
        description: "Directory for chunks (if absent, prints to stdout)",
        template: "folders",
      },
    },
    {
      name: ["-e", "--external"],
      args: {
        name: "ids",
        description: "Comma-separate list of module IDs to exclude",
      },
    },
    {
      name: ["-f", "--format"],
      args: {
        name: "format",
        description: "Type of output (amd, cjs, es, iife, umd, system)",
        suggestions: ["amd", "cjs", "es", "iife", "umd", "system"],
      },
    },
    {
      name: ["-g", "--globals"],
      args: {
        name: "pairs",
        description: "Comma-separate list of `moduleID:Global` pairs",
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
        template: "filepaths",
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
    {
      name: "--amd.id",
      args: {
        name: "id",
        description: "ID for AMD module (default is anonymous)",
      },
    },
    {
      name: "--amd.autoId",
      description: "Generate the AMD ID based off the chunk name",
    },
    {
      name: "--amd.basePath",
      args: {
        name: "prefix",
        description: "Path to prepend to auto generated AMD ID",
      },
    },
    {
      name: "--amd.define",
      args: {
        name: "name",
        description: "Function to use in place of 'define'",
      },
    },
    {
      name: "--assetFileNames",
      args: {
        name: "pattern",
        description: "Name pattern for emitted assets",
      },
    },
    {
      name: "--banner",
      args: {
        name: "text",
        description: "Code to insert at top of bundle (outside wrapper)",
      },
    },
    {
      name: "--chunkFileNames",
      args: {
        name: "pattern",
        description: "Name pattern for emitted secondary chunks",
      },
    },
    {
      name: "--compact",
      description: "Minify wrapper code",
    },
    {
      name: "--context",
      args: {
        name: "variable",
        description: "Specify top-level 'this' value",
      },
    },
    {
      name: "--entryFileNames",
      args: {
        name: "pattern",
        description: "Name pattern for emitted entry chunks",
      },
    },
    {
      name: "--environment",
      args: {
        name: "values",
        description: "Settings passed to config file",
      },
    },
    {
      name: "--no-esModule",
      description: "Do not add __esmodule property",
    },
    {
      name: "--exports",
      args: {
        name: "mode",
        description: "Specify export mode (auto, default, named, none)",
      },
    },
    {
      name: "--extend",
      description: "Extend global variable defined by --name",
    },
    {
      name: "--no-externalLiveBindings",
      description: "Do not generate code to support live bindings",
    },
    {
      name: "--failAfterWarnings",
      description: "Exit with an error if the build produced warnings",
    },
    {
      name: "--footer",
      args: {
        name: "text",
        description: "Code to insert at end of bundle (outside wrapper)",
      },
    },
    {
      name: "--no-freeze",
      description: "Do not freeze namespace objects",
    },
    {
      name: "--no-hoistTransistiveImports",
      description: "Do not hoist transistive imports into entry chunks",
    },
    {
      name: "--no-indent",
      description: "Don't indent result",
    },
    {
      name: "--no-interop",
      description: "Do not include interop block",
    },
    {
      name: "--inlineDynamicImports",
      description: "Create a single bundle when using dynamic imports",
    },
    {
      name: "--intro",
      args: {
        name: "text",
        description: "Code to insert at top of bundle (inside wrapper)",
      },
    },
    {
      name: "--minifyInternalImports",
      description: "Force or disable minification of internal imports",
    },
    {
      name: "--namespaceToStringTag",
      description: "Create proper '.toString' methods for namespaces",
    },
    {
      name: "--noConflict",
      description: "Generate a noConflict method for UMD globals",
    },
    {
      name: "--outro",
      args: {
        name: "text",
        description: "Code to insert at end of bundle (inside wrapper)",
      },
    },
    {
      name: "--preferConst",
      description: "Use 'const' instead of 'var' for exports",
    },
    {
      name: "--no-preserveEntrySignatures",
      description: "Avoid facade chunks for entry points",
    },
    {
      name: "--preserveModules",
      description: "Preserve module structure",
    },
    {
      name: "--preserveModulesRoot",
      description: "Put preserved modules under this path at root level",
    },
    {
      name: "--preserveSymlinks",
      description: "Do not follow symlinks when resolving files",
    },
    {
      name: "--no-sanitizeFileName",
      description: "Do not replace invalid characters in file names",
    },
    {
      name: "--shimMissingExports",
      description: "Create shim variables for missing exports",
    },
    {
      name: "--silent",
      description: "Don't print warnings",
    },
    {
      name: "--sourcemapExcludeSources",
      description: "Do not include source code in source maps",
    },
    {
      name: "--sourcemapFile",
      description: "Specify bundle position for source maps",
      args: {
        name: "file",
      },
    },
    {
      name: "--stdin=ext",
      description: "Specify file extension used for stdin input",
    },
    {
      name: "--no-stdin",
      description: 'Do not read "-" from stdin',
    },
    {
      name: "--no-strict",
      description: "Don't emit '\"use strict\"; in the generated modules",
    },
    {
      name: "--strictDeprecations",
      description: "Throw errors for deprecated features",
    },
    {
      name: "--systemNullSetters",
      description: "Replace empty SystemJS setters with 'null'",
    },
    {
      name: "--no-treeshake",
      description: "Disable tree-shaking optimizations",
    },
    {
      name: "--no-treeshake.annotations",
      description: "Ignore pure call annotations",
    },
    {
      name: "--no-treeshake.moduleSideEffects",
      description: "Assume modules have no side effects",
    },
    {
      name: "--no-treeshake.propertyReadSideEffects",
      description: "Ignore property access side-effects",
    },
    {
      name: "--no-treeshake.tryCatchDeoptimization",
      description: "Do not turn off try-catch-tree-shaking",
    },
    {
      name: "--no-treeshake.unknownGlobalSideEffects",
      description: "Assume unknown globals do not throw",
    },
    {
      name: "--waitForBuildInput",
      description: "Wait for bundle input files",
    },
    {
      name: "--watch.buildDelay",
      description: "Throttle watch rebuilds",
      args: {
        name: "number",
      },
    },
    {
      name: "--no-watch.clearScreen",
      description: "Do not clear the screen when rebuilding",
    },
    {
      name: "--watch.skipWrite",
      description: "Do not write files to disk when watching",
    },
    {
      name: "--watch.exclude",
      description: "Exclude files from being watched",
      args: {
        name: "files",
      },
    },
    {
      name: "--watch.include",
      description: "Limit watching to specified files",
      args: {
        name: "files",
      },
    },
    {
      name: "--validate",
      description: "Validate output",
    },
  ],
};

export default completionSpec;
