import prismaSpec from "./prisma";

const icon = "https://avatars.githubusercontent.com/u/45050444?s=200&v=4";

const scripts: Fig.Generator = {
  script: [
    "bash",
    "-c",
    "until [[ -f redwood.toml ]] || [[ $PWD = '/' ]]; do cd ..; done; ls -1p scripts/",
  ],
  postProcess: (output) => {
    if (output.trim() === "") {
      return [];
    }
    return output
      .split("\n")
      .filter(
        (fileOrFolder) =>
          fileOrFolder.endsWith(".js") || fileOrFolder.endsWith(".ts")
      )
      .map((script) => {
        return {
          name: script.trim().replace(/\.[^.]+$/, ""),
          description: "Script",
          icon,
        };
      });
  },
};

const completionSpec: Fig.Spec = {
  name: "redwood",
  description:
    "Redwood provides a first-class CLI that helps you at every stage of development, from your first commit to your first deploy",
  subcommands: [
    {
      name: "dev",
      icon,
      description: "Start development servers for api and web",
      args: {
        name: "side",
        description: "Which side(s) to build",
        isOptional: true,
        suggestions: [
          {
            name: "api",
            description: "Build the api server",
          },
          {
            name: "web",
            description: "Build the web server",
          },
        ],
      },
      options: [
        {
          name: ["--forward", "--fwd"],
          description:
            "String of one or more Webpack Dev Server config options",
          args: {
            name: "options",
            description: "Options to pass to Webpack Dev Server",
          },
        },
      ],
    },
    {
      name: "deploy",
      icon,
      description: "Deploy your redwood project to a hosting provider target",
      subcommands: [
        {
          name: "aws",
          description: "Deploy to AWS using the selected provider",
          args: {
            name: "provider",
            description: "AWS Deploy provider to configure",
            isOptional: true,
            suggestions: ["serverless"],
          },
          options: [
            {
              name: "--side",
              description: "Show help for command",
              priority: 1,
              args: {
                name: "side",
                description: "Which side(s) to deploy",
                suggestions: [
                  {
                    name: "api",
                    description: "Deploy the api server",
                  },
                  {
                    name: "web",
                    description: "Deploy the web server",
                  },
                ],
              },
            },
          ],
        },
        {
          name: "netlify",
          description: "Build command for Netlify deploy",
          options: [
            {
              name: "--build",
              description: 'Build for production [default: "true"]',
            },
            {
              name: "--prisma",
              description: 'Apply database migrations [default: "true"]',
            },
            {
              name: ["--data-migrate", "--dm"],
              description:
                'Migrate the data in your database [default: "true"]',
            },
          ],
        },
        {
          name: "render",
          description: "Build (web) and Start (api) command for Render deploy",
          args: {
            name: "side",
            description: "Select side to build",
            suggestions: ["api", "web"],
          },
          options: [
            {
              name: "--serve",
              description: 'Run server for api in production [default: "true"]',
            },
            {
              name: "--prisma",
              description: 'Apply database migrations [default: "true"]',
            },
            {
              name: ["--data-migrate", "--dm"],
              description:
                'Migrate the data in your database [default: "true"]',
            },
          ],
        },
        {
          name: "vercel",
          description: "Build command for Vercel deploy",
          options: [
            {
              name: "--build",
              description: 'Build for production [default: "true"]',
            },
            {
              name: "--prisma",
              description: 'Apply database migrations [default: "true"]',
            },
            {
              name: ["--data-migrate", "--dm"],
              description:
                'Migrate the data in your database [default: "true"]',
            },
          ],
        },
      ],
    },
    {
      name: ["destroy", "d"],
      icon,
      description: "Rollback changes made by the generate command",
      subcommands: [
        {
          name: "cell",
          description: "Destroy a cell component",
          args: {
            name: "name",
            description: "Name of the cell component",
          },
        },
        {
          name: "component",
          description: "Destroy a component",
          args: {
            name: "name",
            description: "Name of the component",
          },
        },
        {
          name: "function",
          description: "Destroy a Function",
          args: {
            name: "name",
            description: "Name of the Function",
          },
        },
        {
          name: "layout",
          description: "Destroy a layout component",
          args: {
            name: "name",
            description: "Name of the layout component",
          },
        },
        {
          name: "page",
          description: "Destroy a page and route component",
          args: [
            {
              name: "name",
              description: "Name of the page",
            },
            {
              name: "path",
              description: "URL path to the page. Defaults to name",
              isOptional: true,
            },
          ],
        },
        {
          name: "scaffold",
          description:
            "Destroy pages, SDL, and Services files based on a given DB schema Model",
          args: {
            name: "name",
            description: "Name of the scaffold",
          },
        },
        {
          name: "sdl",
          description:
            "Destroy a GraphQL schema and service component based on a given DB schema Model",
          args: {
            name: "name",
            description: "Name of the sdl",
          },
        },
        {
          name: "service",
          description: "Destroy a service component",
          args: {
            name: "name",
            description: "Name of the service",
          },
        },
      ],
    },
    {
      name: ["generate", "g"],
      icon,
      description: "Save time by generating boilerplate code",
      subcommands: [
        {
          name: "cell",
          description: "Generate a cell component",
          args: {
            name: "name",
            description: "Name of the cell component",
          },
          options: [
            {
              name: ["--force", "-f"],
              isDangerous: true,
              description: "Overwrite existing files",
            },
            {
              name: ["--typescript", "--ts"],
              description:
                "Generate TypeScript files Enabled by default if we detect your project is TypeScript",
            },
            {
              name: "--list",
              description:
                "Use this flag to generate a list cell. This flag is needed when dealing with irregular words whose plural and singular is identical such as equipment or pokemon",
            },
            {
              name: "--tests",
              description: "Generate test files [default: true]",
            },
            {
              name: "--stories",
              description: "Generate Storybook files [default: true]",
            },
          ],
        },
        {
          name: "component",
          description: "Generate a component component",
          args: {
            name: "name",
            description: "Name of the component",
          },
          options: [
            {
              name: ["--force", "-f"],
              isDangerous: true,
              description: "Overwrite existing files",
            },
            {
              name: ["--typescript", "--ts"],
              description:
                "Generate TypeScript files Enabled by default if we detect your project is TypeScript",
            },
            {
              name: "--tests",
              description: "Generate test files [default: true]",
            },
            {
              name: "--stories",
              description: "Generate Storybook files [default: true]",
            },
          ],
        },
        {
          name: "dataMigration",
          description: "Generate a data migration component",
          args: {
            name: "name",
            description: "Name of the component",
          },
        },
        {
          name: "directive",
          description: "Generate a directive",
          args: {
            name: "name",
            description: "Name of the directive",
          },
          options: [
            {
              name: ["--force", "-f"],
              isDangerous: true,
              description: "Overwrite existing files",
            },
            {
              name: ["--typescript", "--ts"],
              description:
                "Generate TypeScript files Enabled by default if we detect your project is TypeScript",
            },
            {
              name: "--type",
              description:
                'Directive type [Choices: "validator", "transformer"]',
            },
          ],
        },
        {
          name: "function",
          description: "Generate a Function",
          args: {
            name: "name",
            description: "Name of the Function",
          },
          options: [
            {
              name: ["--force", "-f"],
              isDangerous: true,
              description: "Overwrite existing files",
            },
            {
              name: ["--typescript", "--ts"],
              description:
                "Generate TypeScript files Enabled by default if we detect your project is TypeScript",
            },
          ],
        },
        {
          name: "layout",
          description: "Generate a layout component",
          args: {
            name: "name",
            description: "Name of the layout component",
          },
          options: [
            {
              name: ["--force", "-f"],
              isDangerous: true,
              description: "Overwrite existing files",
            },
            {
              name: ["--typescript", "--ts"],
              description:
                "Generate TypeScript files Enabled by default if we detect your project is TypeScript",
            },
            {
              name: "--tests",
              description: "Generate test files [default: true]",
            },
            {
              name: "--stories",
              description: "Generate Storybook files [default: true]",
            },
            {
              name: "--skipLink",
              description:
                "Generate a layout with a skip link [default: false]",
            },
          ],
        },
        {
          name: "page",
          description: "Generate a page component",
          args: [
            {
              name: "name",
              description: "Name of the page",
            },
            {
              name: "path",
              description: "URL path to the page. Defaults to name",
              isOptional: true,
            },
          ],
          options: [
            {
              name: ["--force", "-f"],
              isDangerous: true,
              description: "Overwrite existing files",
            },
            {
              name: ["--typescript", "--ts"],
              description:
                "Generate TypeScript files Enabled by default if we detect your project is TypeScript",
            },
            {
              name: "--tests",
              description: "Generate test files [default: true]",
            },
            {
              name: "--stories",
              description: "Generate Storybook files [default: true]",
            },
          ],
        },
        {
          name: "scaffold",
          description:
            "Generate Pages, SDL, and Services files based on a given DB schema Model. Also accepts <path/model>",
          args: {
            name: "model",
            description:
              "Model to scaffold. You can also use <path/model> to nest files by type at the given path directory (or directories). For example, redwood g scaffold admin/post",
          },
          options: [
            {
              name: ["--force", "-f"],
              isDangerous: true,
              description: "Overwrite existing files",
            },
            {
              name: ["--typescript", "--ts"],
              description:
                "Generate TypeScript files Enabled by default if we detect your project is TypeScript",
            },
          ],
        },
        {
          name: "sdl",
          description: "Generate a GraphQL schema and service object",
          args: {
            name: "model",
            description: "Model to generate the sdl for",
          },
          options: [
            {
              name: ["--force", "-f"],
              isDangerous: true,
              description: "Overwrite existing files",
            },
            {
              name: ["--typescript", "--ts"],
              description:
                "Generate TypeScript files Enabled by default if we detect your project is TypeScript",
            },
            {
              name: "--crud",
              description: "Also generate mutations",
            },
          ],
        },
        {
          name: "service",
          description: "Generate a service component",
          args: {
            name: "name",
            description: "Name of the service",
          },
          options: [
            {
              name: ["--force", "-f"],
              isDangerous: true,
              description: "Overwrite existing files",
            },
            {
              name: ["--typescript", "--ts"],
              description:
                "Generate TypeScript files Enabled by default if we detect your project is TypeScript",
            },
            {
              name: "--tests",
              description: "Generate test files [default: true]",
            },
            {
              name: "--stories",
              description: "Generate Storybook files [default: true]",
            },
          ],
        },
        {
          name: "types",
          description: "Generate types and supplementary code",
        },
        {
          name: "script",
          description:
            "Generate a script that can use your services/libs to execute with redwood exec script <name>",
          args: {
            name: "name",
            description: "Name of the service",
          },
          options: [
            {
              name: ["--typescript", "--ts"],
              description:
                "Generate TypeScript files Enabled by default if we detect your project is TypeScript",
            },
          ],
        },
      ],
    },
    {
      name: "exec",
      icon,
      description:
        "Execute scripts generated by yarn redwood generate script to run one-off operations, long-running jobs, or utility scripts",
      args: {
        name: "script",
        description: "Name of the script to execute",
        generators: scripts,
      },
    },
    {
      name: "build",
      icon,
      description: "Build the api and web",
      args: {
        name: "side",
        description: "Which side(s) to build",
        isOptional: true,
        suggestions: [
          {
            name: "api",
            description: "Build the api server",
          },
          {
            name: "web",
            description: "Build the web server",
          },
        ],
      },
      options: [
        {
          name: "--stats",
          description:
            "Use Webpack Bundle Analyzer to visualize the size of Webpack output files via an interactive zoomable treemap",
        },
        {
          name: ["--verbose", "-v"],
          description: "Print more information while building",
        },
      ],
    },
    {
      name: ["diagnostics", "check"],
      icon,
      description:
        "Get structural diagnostics for a Redwood project (experimental)",
    },
    {
      name: ["console", "c"],
      icon,
      description: "Launch an interactive Redwood shell (experimental)",
    },
    {
      name: "info",
      icon,
      description: "Print your system environment information",
    },
    {
      name: "upgrade",
      icon,
      description: "Upgrade all @redwoodjs packages via an interactive CLI",
      options: [
        {
          name: ["--dry-run", "-d"],
          description: "Check for outdated packages without upgrading",
        },
        {
          name: ["--tag", "-t"],
          description:
            'Choices are "canary", "rc", or a specific version (e.g. "0.19.3"). WARNING: Unstable releases in the case of "canary" and "rc", which will force upgrade packages to the most recent release of the specified tag',
          args: {
            name: "tag",
            description: "Tag to use for upgrade",
            suggestions: [
              {
                name: "canary",
                description: "Upgrade to the latest canary release",
              },
              {
                name: "rc",
                description: "Upgrade to the latest RC release",
              },
            ],
          },
        },
        {
          name: "--pr",
          description: "Installs packages for the given PR",
        },
      ],
    },
    {
      name: "serve",
      icon,
      description: "Runs a server that serves both the api and the web sides",
      args: {
        name: "side",
        description: "Which side(s) to check (Default to both)",
        isOptional: true,
        suggestions: [
          {
            name: "api",
            description: "Check the api server",
          },
          {
            name: "web",
            description: "Check the web server",
          },
        ],
      },
      options: [
        {
          name: "--port",
          description: "What port should the server run on [default: 8911]",
          args: {
            name: "port",
            description: "Port to run the server on",
          },
        },
        {
          name: "--socket",
          description:
            "The socket the server should run. This takes precedence over port",
          args: {
            name: "socket",
            description: "Socket to run the server on",
          },
        },
        {
          name: "--apiRootPath",
          description: "The root path where your api functions are served",
          args: {
            name: "apiRootPath",
            description: "Root path for the api",
            template: "folders",
          },
        },
        {
          name: "--apiHost",
          description:
            "Forwards requests from the apiProxyPath (defined in redwood.toml) to the specified host",
          args: {
            name: "apiHost",
            description: "Host to forward requests to",
          },
        },
      ],
    },
    {
      name: ["type-check", "tsc", "tc"],
      icon,
      description:
        "Runs a TypeScript compiler check on both the api and the web sides",
      args: {
        name: "side",
        description: "Which side(s) to check (Default to both)",
        isOptional: true,
        suggestions: [
          {
            name: "api",
            description: "Check the api server",
          },
          {
            name: "web",
            description: "Check the web server",
          },
        ],
      },
    },
    {
      name: "test",
      icon,
      description: "Run Jest tests for api and web",
      args: {
        name: "sides or filter",
        description:
          "Which side(s) to test, and/or a regular expression to match against your test files to filter by",
        isOptional: true,
        suggestions: ["api", "web"],
      },
      options: [
        {
          name: "--help",
          description: "Show help",
        },
        {
          name: "--version",
          description: "Show version number",
        },
        {
          name: "--watch",
          description:
            "Run tests related to changed files based on hg/git (uncommitted files). Specify the name or path to a file to focus on a specific set of tests [default: true]",
        },
        {
          name: "--watchAll",
          description: "Run all tests",
        },
        {
          name: "--collectCoverage",
          description:
            "Show test coverage summary and output info to coverage directory in project root. See this directory for an .html coverage report",
        },
        {
          name: "--clearCache",
          description:
            "Delete the Jest cache directory and exit without running tests",
        },
        {
          name: "--db-push",
          description:
            "Syncs the test database with your Prisma schema without requiring a migration. It creates a test database if it doesn't already exist [default: true]. This flag is ignored if your project doesn't have an api side",
        },
      ],
    },
    {
      name: "storybook",
      icon,
      description: "Starts Storybook locally",
      options: [
        {
          name: "--open",
          description: "Open Storybook in your browser on start",
        },
        {
          name: "--build",
          description: "Build Storybook",
        },
        {
          name: "--port",
          description: "Which port to run Storybook on (defaults to 7910)",
          args: {
            name: "port",
            description: "Port to run Storybook on",
          },
        },
      ],
    },
    {
      name: "lint",
      icon,
      description: "Lint your files",
      options: [
        {
          name: "--fix",
          description: "Try to fix linting errors",
        },
      ],
    },
    {
      name: "open",
      icon,
      description: "Open your project in your browser",
    },
    {
      name: "setup",
      icon,
      description: "Initialize project config and install packages",
      subcommands: [
        {
          name: "auth",
          description: "Setup auth configuration for a provider",
          args: {
            name: "provider",
            description: "Auth provider to configure",
            suggestions: [
              "auth0",
              "firebase",
              "goTrue",
              "magicLink",
              "netlify",
            ],
          },
          options: [
            {
              name: ["--force", "-f"],
              isDangerous: true,
              description: "Overwrite existing files",
            },
          ],
        },
        {
          name: "custom-web-index",
          description:
            "Setup an index.js file in web/src so you can customize how your Redwood App mounts to the DOM",
          options: [
            {
              name: ["--force", "-f"],
              isDangerous: true,
              description: "Overwrite existing files",
            },
          ],
        },
        {
          name: "generator",
          description:
            "SCopies a given generator's template files to your local app for customization. The next time you generate that type again, it will use your custom template instead of Redwood's default",
          args: {
            name: "name",
            description:
              "Name of the generator template(s) to copy (see help for list)",
          },
          options: [
            {
              name: ["--force", "-f"],
              isDangerous: true,
              description: "Overwrite existing copied template files",
            },
          ],
        },
        {
          name: "tsconfig",
          description: "Setup tsconfig.json on both web and api sides",
          options: [
            {
              name: ["--force", "-f"],
              isDangerous: true,
              description: "Overwrite existing files",
            },
          ],
        },
        {
          name: "deploy",
          description: "Setup auth configuration for a provider",
          args: {
            name: "provider",
            description: "Auth provider to configure",
            suggestions: ["aws-serverless", "netlify", "render", "vercel"],
          },
          options: [
            {
              name: ["--database", "-d"],
              description:
                'Database deployment for Render only  [default: "postgresql"]',
              args: {
                name: "database",
                isOptional: true,
                suggestions: ["none", "postgresql", "sqlite"],
              },
            },
            {
              name: ["--force", "-f"],
              isDangerous: true,
              description: "Overwrite existing files",
            },
          ],
        },
      ],
    },
    {
      name: ["data-migrate", "dm", "dataMigrate"],
      icon,
      description: "Data migration tools",
      args: {
        name: "command",
        suggestions: [
          {
            name: "install",
            description:
              "Appends DataMigration model to schema.prisma, creates api/db/dataMigrations directory",
          },
          {
            name: "up",
            description: "Executes outstanding data migrations",
          },
        ],
      },
    },
    {
      name: "prisma",
      icon: "https://raw.githubusercontent.com/prisma/docs/main/src/images/favicon-16x16.png",
      description: "Prisma commands",
      subcommands: (prismaSpec as Fig.Subcommand).subcommands,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for redwood",
    },
  ],
};
export default completionSpec;
