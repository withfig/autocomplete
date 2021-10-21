const completionSpec: Fig.Spec = {
  name: "node",
  description: "Run the node interpreter",
  args: {
    name: "node script",
    isScript: true,
    generators: {
      template: "filepaths",
      filterTemplateSuggestions: function (paths) {
        return paths
          .filter((file) => {
            return file.name.match(/.*\.m?js/g) || file.name.endsWith("/");
          })
          .map((file) => {
            const isJsFile = file.name.match(/.*\.m?js/g);

            return {
              ...file,
              priority: isJsFile && 76,
            };
          });
      },
    },
  },
  options: [
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
      name: ["-c", "--check"],
      description: "Syntax check script without executing",
    },
    {
      name: ["-v", "--version"],
      description: "Print Node.js version",
    },
    {
      name: ["-i", "--interactive"],
      description:
        "Always enter the REPL even if stdin does not appear to be a terminal",
    },
  ],
  subcommands: [
    {
      name: "ace",
      description: "Run AdonisJS command-line",
      options: [
        {
          name: ["-h", "--help"],
          description: "Display AdonisJS Ace help",
        },
        {
          name: ["-v", "--version"],
          description: "Display AdonisJS version",
        },
      ],
      subcommands: [
        {
          name: "build",
          description:
            "Compile project from Typescript to Javascript. Also compiles the frontend assets if using webpack encore",
        },
        {
          name: ["configure", "invoke"],
          description: "Configure a given AdonisJS package",
        },
        {
          name: "repl",
          description: "Start a new REPL session",
        },
        {
          name: "serve",
          description:
            "Start the AdonisJS HTTP server, along with the file watcher. Also starts the webpack dev server when webpack encore is installed",
        },
        {
          name: "db:seed",
          description: "Execute database seeder files",
        },
        {
          name: "dump:rcfile",
          description:
            "Dump contents of .adonisrc.json file along with defaults",
        },
        {
          name: "generate:key",
          description: "Generate a new APP_KEY secret",
        },
        {
          name: "generate:manifest",
          description:
            "Generate ace commands manifest file. Manifest file speeds up commands lookup",
        },
        {
          name: "list:routes",
          description: "List application routes",
        },
        {
          name: "make:command",
          description: "Make a new ace command",
        },
        {
          name: "make:controller",
          description: "Make a new HTTP controller",
        },
        {
          name: "make:exception",
          description: "Make a new custom exception class",
        },
        {
          name: "make:listener",
          description: "Make a new event listener class",
        },
        {
          name: "make:middleware",
          description: "Make a new middleware",
        },
        {
          name: "make:migration",
          description: "Make a new migration file",
        },
        {
          name: "make:model",
          description: "Make a new Lucid model",
        },
        {
          name: "make:prldfile",
          description: "Make a new preload file",
        },
        {
          name: "make:provider",
          description: "Make a new provider class",
        },
        {
          name: "make:seeder",
          description: "Make a new Seeder file",
        },
        {
          name: "make:validator",
          description: "Make a new validator",
        },
        {
          name: "make:view",
          description: "Make a new view template",
        },
        {
          name: "migration:rollback",
          description: "Rollback migrations to a given batch number",
        },
        {
          name: "migration:run",
          description: "Run pending migrations",
        },
        {
          name: "migration:status",
          description: "Check migrations current status",
        },
      ],
    },
  ],
};

export default completionSpec;
