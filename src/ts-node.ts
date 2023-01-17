import { dependenciesGenerator } from "./npm";
import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "ts-node",
  description: "Run the TypeScript interpreter for Node.JS",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for ts-node",
    },
    {
      name: ["-v", "--version"],
      description: "Print version information of the ts-node module",
    },
    {
      name: ["-e", "--eval"],
      insertValue: "-e '{cursor}'",
      description: "Evaluate script",
      args: {
        name: "script",
      },
    },
    {
      name: ["-p", "--print"],
      description: "Evaluate script and print result",
    },
    {
      name: ["-r", "--require"],
      isRepeatable: true,
      description: "Require module before executing",
      args: {
        name: "module",
        generators: dependenciesGenerator,
        filterStrategy: "fuzzy",
      },
    },
    {
      name: ["-i", "--interactive"],
      description: "Always open interactive REPL",
    },
    {
      name: "--show-config",
      description: "Print resolved Typescript config to the terminal",
    },
    {
      name: "--cwd-mode",
      description:
        "Resolve Typescript config based on the current working directory",
    },
    {
      name: ["-T", "--transpile-only"],
      description: "Use the Typescript transpile module mode",
    },
    {
      name: ["-H", "--compiler-host"],
      description: "Use the Typescript compiler host API",
    },
    {
      name: ["-I", "--ignore"],
      description: "Ignore patterns from Typescript compilation",
      args: {
        name: "pattern",
      },
    },
    {
      name: ["-P", "--project"],
      description: "Specify TypeScript project location",
      args: {
        name: "project",
        generators: {
          template: "filepaths",
          filterTemplateSuggestions: function (paths) {
            return paths
              .filter((file) => {
                return file.name.match(/.*\.json$/g) || file.name.endsWith("/");
              })
              .map((file) => {
                const isJsFile = file.name.match(/.*\.json?$/g);
                const isTsConfig = file.name.match(/tsconfig.json$/g);

                return {
                  ...file,
                  priority: isTsConfig ? 100 : isJsFile && 76,
                };
              });
          },
        },
      },
    },
    {
      name: ["-C", "--compiler"],
      description: "Use a custom compiler",
      args: {
        name: "compiler",
      },
    },
    {
      name: "--transpiler",
      description: "Use a custom transpiler",
      args: {
        name: "transpiler",
      },
    },
    {
      name: ["-D", "--ignore-diagnostics"],
      description: "Specify Typescript diagnostic code to ignore",
      args: {
        name: "code",
      },
    },
    {
      name: ["-O", "--compiler-options"],
      insertValue: "-O '{cursor}'",
      description: "JSON object that will be merged with the compiler options",
      args: {
        name: "options",
      },
    },
    {
      name: "--cwd",
      description: "Specify working directory",
      args: {
        name: "cwd",
        generators: {
          template: "folders",
        },
      },
    },
    {
      name: "--files",
      description:
        "Load files, include and exclude from Typescript config on startup",
    },
    {
      name: "--pretty",
      description: "Use the pretty formatter for diagnostic errors",
    },
    {
      name: "--skip-project",
      description: "Skip reading Typescript config",
    },
    {
      name: "--scope",
      description: "Scope compilation to scope directory specified",
    },
    {
      name: "--scope-dir",
      description: "Directory for scope parameter",
      args: {
        name: "directory",
        generators: {
          template: "folders",
        },
      },
    },
    {
      name: "--skip-ignore",
      description: "Skip --ignore checks",
    },
    {
      name: "--prefer-ts-exts",
      description:
        "Prefer Typescript files over JavaScript files when importing files",
    },
    {
      name: "--log-error",
      description:
        "Pipe Typescript errors to stderr instead of throwing exceptions",
    },
    {
      name: "--no-experimental-repl-await",
      description: "Disable the top-level await function in REPL",
    },
  ],
  args: {
    name: "script",
    isScript: true,
    generators: filepaths({
      matches: /.*\.tsx?$/g,
      editFileSuggestions: { priority: 76 },
    }),
  },
};
export default completionSpec;
