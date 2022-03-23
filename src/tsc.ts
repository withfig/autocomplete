import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "tsc",
  description: "CLI tool for TypeScript compiler",
  options: [
    {
      name: "--all",
      description: "Show all compiler options",
    },
    {
      name: "--generateTrace",
      description: "Generates an event trace and a list of types",
    },
    {
      name: "--help",
      description: "Gives local information for help on the CLI",
    },
    {
      name: "--init",
      description:
        "Initializes a TypeScript project and creates a tsconfig.json file",
    },
    {
      name: "--listFilesOnly",
      description:
        "Print names of files that are part of the compilation and then stop processing",
    },
    {
      name: "--locale",
      description:
        "Set the language of the messaging from TypeScript. This does not affect emit",
    },
    {
      name: "--project",
      description:
        "Compile the project given the path to its configuration file, or to a folder with a tsconfig.json",
      args: {
        name: "path",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--showConfig",
      description: "Print the final configuration instead of building",
    },
    {
      name: "--version",
      description: "Print the compiler's version",
    },
    {
      name: "--build",
      description:
        "Build one or more projects and their dependencies, if out of date",
    },
    {
      name: "--clean",
      description: "Delete the outputs of all projects",
    },
    {
      name: "--dry",
      description:
        "Show what would be built (or deleted, if specified with '--clean')",
    },
    {
      name: "--force",
      description:
        "Build all projects, including those that appear to be up to date",
    },
    {
      name: "--verbose",
      description: "Enable verbose logging",
    },
    {
      name: "--excludeDirectories",
      description: "Remove a list of directories from the watch process",
      args: {
        name: "dir",
        template: "folders",
        isVariadic: true,
      },
    },
    {
      name: "--excludeFiles",
      description: "Remove a list of files from the watch mode's processing",
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "--fallbackPolling",
      description:
        "Specify what approach the watcher should use if the system runs out of native file watchers",
      args: {
        name: "approach",
        suggestions: [
          "fixedPollingInterval",
          "priorityPollingInterval",
          "dynamicPriorityPolling",
        ],
      },
    },
    {
      name: "--synchronousWatchDirectory",
      description:
        "Synchronously call callbacks and update the state of directory watchers on platforms that don`t support recursive watching natively",
    },
    {
      name: "--watch",
      description: "Watch input files",
    },
    {
      name: "--watchDirectory",
      description:
        "Specify how directories are watched on systems that lack recursive file-watching functionality",
      args: {
        name: "approach",
        suggestions: [
          "fixedPollingInterval",
          "dynamicPriorityPolling",
          "useFsEvents",
        ],
      },
    },
    {
      name: "--watchFile",
      description: "Specify how the TypeScript watch mode works",
      args: {
        name: "approach",
        suggestions: [
          "fixedPollingInterval",
          "priorityPollingInterval",
          "dynamicPriorityPolling",
          "useFsEvents",
          "useFsEventsOnParentDirectory",
        ],
      },
    },
    {
      name: "--allowJs",
      description:
        "Allow JavaScript files to be a part of your program. Use the checkJS option to get errors from these files",
    },
    {
      name: "--allowSyntheticDefaultImports",
      description:
        "Allow 'import x from y' when a module doesn't have a default export",
    },
    {
      name: "--allowUmdGlobalAccess",
      description: "Allow accessing UMD globals from modules",
    },
    {
      name: "--allowUnreachableCode",
      description: "Disable error reporting for unreachable code",
    },
    {
      name: "--allowUnusedLabels",
      description: "Disable error reporting for unused label",
    },
    {
      name: "--alwaysStrict",
      description: "Ensure 'use strict' is always emitted",
    },
    {
      name: "--assumeChangesOnlyAffectDirectDependencies",
      description:
        "Have recompiles in projects that use incremental and watch mode assume that changes within a file will only affect files directly depending on it",
    },
    {
      name: "--baseUrl",
      description:
        "Specify the base directory to resolve non-relative module names",
      args: {
        name: "directory",
        template: "filepaths",
      },
    },
    {
      name: "--checkJs",
      description: "Enable error reporting in type-checked JavaScript files",
    },
    {
      name: "--composite",
      description:
        "Enable constraints that allow a TypeScript project to be used with project references",
    },
    {
      name: "--declaration",
      description:
        "Generate .d.ts files from TypeScript and JavaScript files in your project",
    },
    {
      name: "--declarationDir",
      description:
        "Specify the output directory for generated declaration files",
      args: {
        name: "string",
        template: "folders",
      },
    },
    {
      name: "--declarationMap",
      description: "Create sourcemaps for d.ts files",
    },
    {
      name: "--diagnostics",
      description: "Output compiler performance information after building",
    },
    {
      name: "--disableReferencedProjectLoad",
      description:
        "Reduce the number of projects loaded automatically by TypeScript",
    },
    {
      name: "--disableSizeLimit",
      description:
        "Remove the 20mb cap on total source code size for JavaScript files in the TypeScript language server",
    },
    {
      name: "--disableSolutionSearching",
      description:
        "Opt a project out of multi-project reference checking when editing",
    },
    {
      name: "--disableSourceOfProjectReferenceRedirect",
      description:
        "Disable preferring source files instead of declaration files when referencing composite projects",
    },
    {
      name: "--downlevelIteration",
      description:
        "Emit more compliant, but verbose and less performant JavaScript for iteration",
    },
    {
      name: "--emitBOM",
      description:
        "Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files",
    },
    {
      name: "--emitDeclarationOnly",
      description: "Only output d.ts files and not JavaScript files",
    },
    {
      name: "--emitDecoratorMetadata",
      description:
        "Emit design-type metadata for decorated declarations in source files",
    },
    {
      name: "--esModuleInterop",
      description:
        "Emit additional JavaScript to ease support for importing CommonJS modules. This enables allowSyntheticDefaultImports for type compatibility",
    },
    {
      name: "--exactOptionalPropertyTypes",
      description:
        "Differentiate between undefined and not present when type checking",
    },
    {
      name: "--experimentalDecorators",
      description:
        "Enable experimental support for TC39 stage 2 draft decorators",
    },
    {
      name: "--explainFiles",
      description:
        "Print files read during the compilation including why it was included",
    },
    {
      name: "--extendedDiagnostics",
      description:
        "Output more detailed compiler performance information after building",
    },
    {
      name: "--forceConsistentCasingInFileNames",
      description: "Ensure that casing is correct in imports",
    },
    {
      name: "--generateCpuProfile",
      description: "Emit a v8 CPU profile of the compiler run for debugging",
    },
    {
      name: "--importHelpers",
      description:
        "Allow importing helper functions from tslib once per project, instead of including them per-file",
    },
    {
      name: "--importsNotUsedAsValues",
      description:
        "Specify emit/checking behavior for imports that are only used for types",
      args: {
        name: "type",
        suggestions: ["remove", "preserve", "error"],
      },
    },
    {
      name: "--incremental",
      description:
        "Save .tsbuildinfo files to allow for incremental compilation of projects",
    },
    {
      name: "--inlineSourceMap",
      description: "Include sourcemap files inside the emitted JavaScript",
    },
    {
      name: "--inlineSources",
      description:
        "Include source code in the sourcemaps inside the emitted JavaScript",
    },
    {
      name: "--isolatedModules",
      description:
        "Ensure that each file can be safely transpiled without relying on other imports",
    },
    {
      name: "--jsx",
      description: "Specify what JSX code is generated",
      args: {
        name: "type",
        suggestions: [
          "react",
          "react-jsx",
          "react-jsxdev",
          "react-native",
          "preserve",
        ],
      },
    },
    {
      name: "--jsxFactory",
      description:
        "Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'",
      args: {
        name: "JSX factory function",
        default: "React.createElement",
      },
    },
    {
      name: "--jsxFragmentFactory",
      description:
        "Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'",
      args: {
        name: "JSX fragment",
      },
    },
    {
      name: "--jsxImportSource",
      description:
        "Specify module specifier used to import the JSX factory functions when using jsx: react-jsx*",
      args: {
        name: "string",
        default: "react",
      },
    },
    {
      name: "--keyofStringsOnly",
      description:
        "Make keyof only return strings instead of string, numbers or symbols. Legacy option",
    },
    {
      name: "--lib",
      description:
        "Specify a set of bundled library declaration files that describe the target runtime environment",
      args: {
        name: "list",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "--listEmittedFiles",
      description: "Print the names of emitted files after a compilation",
    },
    {
      name: "--listFiles",
      description: "Print all of the files read during the compilation",
    },
    {
      name: "--mapRoot",
      description:
        "Specify the location where debugger should locate map files instead of generated locations",
      args: {
        name: "string",
        template: "folders",
      },
    },
    {
      name: "--maxNodeModuleJsDepth",
      description:
        "Specify the maximum folder depth used for checking JavaScript files from node_modules. Only applicable with allowJs",
      dependsOn: ["--allowJs"],
      args: {
        name: "number",
        default: "0",
      },
    },
    {
      name: "--module",
      description: "Specify what module code is generated",
      args: {
        name: "module",
        default: "CommonJS",
        suggestions: [
          "ES6",
          "ES2015",
          "ES2020",
          "None",
          "UMD",
          "AMD",
          "System",
          "ESNext",
          "CommonJS",
        ],
      },
    },
    {
      name: "--moduleResolution",
      description:
        "Specify how TypeScript looks up a file from a given module specifier",
      args: {
        name: "module",
      },
    },
    {
      name: "--newLine",
      description: "Set the newline character for emitting files",
      args: {
        name: "character",
      },
    },
    {
      name: "--noEmit",
      description: "Disable emitting file from a compilation",
    },
    {
      name: "--noEmitHelpers",
      description:
        "Disable generating custom helper functions like __extends in compiled output",
    },
    {
      name: "--noEmitOnError",
      description:
        "Disable emitting files if any type checking errors are reported",
    },
    {
      name: "--noErrorTruncation",
      description: "Disable truncating types in error messages",
    },
    {
      name: "--noFallthroughCasesInSwitch",
      description:
        "Enable error reporting for fallthrough cases in switch statements",
    },
    {
      name: "--noImplicitAny",
      description:
        "Enable error reporting for expressions and declarations with an implied any type",
    },
    {
      name: "--noImplicitOverride",
      description:
        "Ensure overriding members in derived classes are marked with an override modifier",
    },
    {
      name: "--noImplicitReturns",
      description:
        "Enable error reporting for codepaths that do not explicitly return in a function",
    },
    {
      name: "--noImplicitThis",
      description: "Enable error reporting when this is given the type any",
    },
    {
      name: "--noImplicitUseStrict",
      description:
        "Disable adding 'use strict' directives in emitted JavaScript files",
    },
    {
      name: "--noLib",
      description:
        "Disable including any library files, including the default lib.d.ts",
    },
    {
      name: "--noPropertyAccessFromIndexSignature",
      description:
        "Enforces using indexed accessors for keys declared using an indexed type",
    },
    {
      name: "--noResolve",
      description:
        "Disallow imports, requires or <reference>s from expanding the number of files TypeScript should add to a project",
    },
    {
      name: "--noStrictGenericChecks",
      description:
        "Disable strict checking of generic signatures in function types",
    },
    {
      name: "--noUncheckedIndexedAccess",
      description: "Add undefined to a type when accessed using an index",
    },
    {
      name: "--noUnusedLocals",
      description: "Enable error reporting when a local variables aren't read",
    },
    {
      name: "--noUnusedParameters",
      description: "Raise an error when a function parameter isn't read",
    },
    {
      name: "--outDir",
      description: "Specify an output folder for all emitted files",
      args: {
        name: "string",
        template: "folders",
      },
    },
    {
      name: "--outFile",
      description:
        "Specify a file that bundles all outputs into one JavaScript file. If declaration is true, also designates a file that bundles all .d.ts output",
      args: {
        name: "string",
        template: "filepaths",
      },
    },
    {
      name: "--paths",
      description:
        "Specify a set of entries that re-map imports to additional lookup locations",
      args: {
        name: "object",
      },
    },
    {
      name: "--plugins",
      description: "Specify a list of language service plugins to include",
      args: {
        name: "plugins",
        isVariadic: true,
      },
    },
    {
      name: "--preserveConstEnums",
      description: "Disable erasing const enum declarations in generated code",
    },
    {
      name: "--preserveSymlinks",
      description:
        "Disable resolving symlinks to their realpath. This correlates to the same flag in node",
    },
    {
      name: "--preserveWatchOutput",
      description: "Disable wiping the console in watch mode",
    },
    {
      name: "--pretty",
      description:
        "Enable color and formatting in output to make compiler errors easier to read",
    },
    {
      name: "--reactNamespace",
      description:
        "Specify the object invoked for createElement. This only applies when targeting react JSX emit",
      args: {
        name: "object",
        default: "React",
      },
    },
    {
      name: "--removeComments",
      description: "Disable emitting comments",
    },
    {
      name: "--resolveJsonModule",
      description: "Enable importing .json files",
    },
    {
      name: "--rootDir",
      description: "Specify the root folder within your source files",
      args: {
        name: "string",
        template: "folders",
      },
    },
    {
      name: "--rootDirs",
      description:
        "Allow multiple folders to be treated as one when resolving modules",
      args: {
        name: "string",
        template: "folders",
        isVariadic: true,
      },
    },
    {
      name: "--skipDefaultLibCheck",
      description:
        "Skip type checking .d.ts files that are included with TypeScript",
    },
    {
      name: "--skipLibCheck",
      description: "Skip type checking all .d.ts files",
    },
    {
      name: "--sourceMap",
      description: "Create source map files for emitted JavaScript files",
    },
    {
      name: "--sourceRoot",
      description:
        "Specify the root path for debuggers to find the reference source code",
      args: {
        name: "string",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--strict",
      description: "Enable all strict type checking options",
    },
    {
      name: "--strictBindCallApply",
      description:
        "Check that the arguments for bind, call, and apply methods match the original function",
    },
    {
      name: "--strictFunctionTypes",
      description:
        "When assigning functions, check to ensure parameters and the return values are subtype-compatible",
    },
    {
      name: "--strictNullChecks",
      description: "When type checking, take into account null and undefined",
    },
    {
      name: "--strictPropertyInitialization",
      description:
        "Check for class properties that are declared but not set in the constructor",
    },
    {
      name: "--stripInternal",
      description:
        "Disable emitting declarations that have @internal in their JSDoc comments",
    },
    {
      name: "--suppressExcessPropertyErrors",
      description:
        "Disable reporting of excess property errors during the creation of object literals",
    },
    {
      name: "--suppressImplicitAnyIndexErrors",
      description:
        "Suppress noImplicitAny errors when indexing objects that lack index signatures",
    },
    {
      name: "--target",
      description:
        "Set the JavaScript language version for emitted JavaScript and include compatible library declarations",
      args: {
        default: "ES3",
        suggestions: [
          "ES3",
          "ES5",
          "ES6",
          "ES2015",
          "ES7",
          "ES2016",
          "ES2017",
          "ES2018",
          "ES2019",
          "ES2020",
          "ESNext",
        ],
      },
    },
    {
      name: "--traceResolution",
      description: "Log paths used during the moduleResolution process",
    },
    {
      name: "--tsBuildInfoFile",
      description:
        "Specify the folder for .tsbuildinfo incremental compilation files",
      args: {
        name: "string",
        template: "folders",
      },
    },
    {
      name: "--typeRoots",
      description:
        "Specify multiple folders that act like ./node_modules/@types",
      args: {
        name: "folders",
        template: "folders",
        isVariadic: true,
      },
    },
    {
      name: "--types",
      description:
        "Specify type package names to be included without being referenced in a source file",
      args: {
        name: "package names",
        isVariadic: true,
      },
    },
    {
      name: "--useDefineForClassFields",
      description: "Emit ECMAScript-standard-compliant class fields",
    },
    {
      name: "--useUnknownInCatchVariables",
      description: "Default catch clause variables as unknown instead of any",
    },
  ],
  args: {
    name: "tsc script",
    isScript: true,
    generators: filepaths({
      extensions: ["ts"],
      editFileSuggestions: { priority: 76 },
      editFolderSuggestions: { priority: 70 },
    }),
  },
};

export default completionSpec;
