import { dependenciesGenerator } from "./npm";

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
      name: ["-e", "--eval=..."],
      insertValue: "-e '{cursor}'",
      description: "Evaluate script",
      args: {},
    },
    {
      name: ["-p", "--print"],
      description: "Evaluate script and print result",
    },
    {
      name: ["-r", "--require=..."],
      insertValue: "-r {cursor}",
      isRepeatable: true,
      description: "Require module before executing",
      args: {
        generators: dependenciesGenerator,
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
      name: ["-I", "--ignore=..."],
      insertValue: "-I {cursor}",
      description: "Ignore patterns from Typescript compilation",
      args: {},
    },
    {
      name: ["-P", "--project=..."],
      insertValue: "-P {cursor}",
      description: "Specify TypeScript project location",
      args: {
        generators: {
          template: "filepaths",
          filterTemplateSuggestions: function (paths) {
            return paths
              .filter((file) => {
                return (
                  file.name.match(/.*\.json?$/g) || file.name.endsWith("/")
                );
              })
              .map((file) => {
                const isJsFile = file.name.match(/.*\.json?$/g);
                const isTsConfig = file.name.match(/tsconfig.json?$/g);

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
      name: ["-C", "--compiler=..."],
      insertValue: "-C {cursor}",
      description: "Use a custom compiler",
      args: {},
    },
    {
      name: "--transpiler=...",
      insertValue: "--transpiler={cursor}",
      description: "Use a custom transpiler",
      args: {},
    },
    {
      name: ["-D", "--ignore-diagnostics=..."],
      insertValue: "-D {cursor}",
      description: "Specify typescript diagnostic code to ignore",
      args: {},
    },
    {
      name: ["-O", "--compiler-options=..."],
      insertValue: "-O '{cursor}'",
      description: "JSON object that will be merged with the compiler options",
      args: {},
    },
    {
      name: "--cwd=...",
      insertValue: "--cwd {cursor}",
      description: "Specify working directory",
      args: {
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
      name: "--scope-dir=...",
      description: "Directory for scope parameter",
      insertValue: "--scope-dir {cursor}",
      args: {
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
    generators: {
      template: "filepaths",
      filterTemplateSuggestions: function (paths) {
        return paths
          .filter((file) => {
            return file.name.match(/.*\.tsx?$/g) || file.name.endsWith("/");
          })
          .map((file) => {
            const isJsFile = file.name.match(/.*\.tsx?$/g);

            return {
              ...file,
              priority: isJsFile && 76,
            };
          });
      },
    },
  },
};
export default completionSpec;
