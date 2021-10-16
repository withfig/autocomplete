import prismaSpec from "./prisma";

const prismaCommands = (prismaSpec as Fig.Subcommand).subcommands;

const commonOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description: "Show help for command",
    priority: 1,
  },
];

const icon =
  "https://raw.githubusercontent.com/blitz-js/art/master/square-logo-600.png";

const completionSpec: Fig.Spec = {
  name: "blitz",
  description: "",
  subcommands: [
    {
      name: ["build", "b"],
      description: "Creates a production build",
      icon,
      options: commonOptions,
    },
    {
      name: ["codegen", "cg"],
      description: "Generates Routes Manifest",
      icon,
      options: commonOptions,
    },
    {
      name: ["console", "c"],
      description: "Run the Blitz console REPL",
      icon,
      options: commonOptions,
    },
    {
      name: "db",
      description: "Run database commands",
      icon,
      options: commonOptions,
      args: {
        name: "command",
        description: "Run specific db command",
        suggestions: [
          {
            name: "seed",
            description:
              "Generates seeded data in database via Prisma 2. You need db/seeds.ts or db/seeds/index.ts",
          },
        ],
      },
    },
    {
      name: ["dev", "d"],
      description: "Start a development server",
      icon,
      options: [
        ...commonOptions,
        {
          name: ["-p", "--port"],
          description: "Set port number",
          args: {
            name: "port",
          },
        },
        {
          name: ["-H", "--hostname"],
          description: "Set server hostname",
          args: {
            name: "hostname",
          },
        },
        {
          name: "--inspect",
          description: "Enable the Node.js inspector",
        },
        {
          name: "--no-incremental-build",
          description: "Disable incremental build and start from a fresh cache",
        },
      ],
    },
    {
      name: ["export", "e"],
      description: "Exports a static page",
      icon,
      options: [
        ...commonOptions,
        {
          name: ["-o", "--outdir"],
          description: "Set the output dir (defaults to 'out')",
          args: {
            name: "outdir",
          },
        },
      ],
    },
    {
      name: ["generate", "g"],
      description: "Generate new files for your Blitz project",
      isDangerous: true,
      icon,
      options: [
        ...commonOptions,
        {
          name: ["-c", "--context"],
          description:
            "Provide a context folder within which we'll place the generated files for better code organization. You can also supply this in the name of the model to be generated (e.g. `blitz generate query admin/projects`). Combining the `--context` flags and supplying context via the model name in the same command is not supported",
          args: {
            name: "context",
          },
        },
        {
          name: ["-p", "--parent"],
          description:
            "Specify a parent model to be used for generating nested routes for dependent data when generating pages, or to create hierarchical validation in queries and mutations. The code will be generated with the nested data model in mind. Most often this should be used in conjunction with 'blitz generate all'",
          args: {
            name: "parent",
          },
        },
        {
          name: ["-d", "--dry-run"],
          description:
            "Show what files will be created without writing them to disk",
        },
      ],
      args: [
        {
          name: "type",
          description: "What files to generate",
          suggestions: [
            "all",
            "crud",
            "model",
            "pages",
            "queries",
            "query",
            "mutations",
            "mutation",
            "resource",
          ].map((suggestion) => ({
            name: suggestion,
            insertValue: `${suggestion} `,
            priority: 100,
          })),
        },
        {
          name: "model",
          description:
            'The name of your model, like "user". Can be singular or plural - same result',
        },
      ],
    },
    {
      name: ["help", "h"],
      description: "Display help for <%= config.bin %>",
      options: [
        {
          name: "--all",
          description: "See all commands in CLI",
        },
      ],
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
      },
    },
    {
      name: ["install", "i"],
      description: "Install a Recipe into your Blitz app",
      icon,
      options: commonOptions,
      args: [
        {
          name: "recipe",
          description:
            "Name of a Blitz recipe from @blitzjs/blitz/recipes, or a file path to a local recipe definition",
        },
        {
          name: "recipe-flags",
          description:
            "A list of flags to pass to the recipe. Blitz will only parse these in the form key=value",
          isOptional: true,
        },
      ],
    },
    {
      name: "new",
      description: "Create a new Blitz project",
      icon,
      options: [
        ...commonOptions,
        {
          name: "--npm",
          description: "Use npm as the package manager",
        },
        {
          name: "--yarn",
          description: "Use yarn as the package manager",
        },
        {
          name: "--form",
          description: "A form library",
          args: {
            name: "form",
            suggestions: ["react-final-form", "react-hook-form", "formik"],
          },
        },
        {
          name: ["-d", "--dry-run"],
          description:
            "Show what files will be created without writing them to disk",
        },
        {
          name: "--no-git",
          description: "Skip git repository creation",
        },
        {
          name: "--skip-upgrade",
          description: "Skip blitz upgrade if outdated",
        },
      ],
      args: {
        name: "name",
        description: "Name of your new project",
      },
    },
    {
      name: ["prisma", "p"],
      description: "Loads env variables then proxies all args to Prisma CLI",
      subcommands: prismaCommands,
    },
    {
      name: ["routes", "r"],
      description: "Display all Blitz URL Routes",
      icon,
      options: commonOptions,
    },
    {
      name: ["start", "s"],
      description: "Start the production server",
      icon,
      options: [
        ...commonOptions,
        {
          name: ["-p", "--port"],
          description: "Set port number",
          args: {
            name: "port",
          },
        },
        {
          name: ["-H", "--hostname"],
          description: "Set server hostname",
          args: {
            name: "hostname",
          },
        },
        {
          name: "--inspect",
          description: "Enable the Node.js inspector",
        },
      ],
    },
    {
      name: "autocomplete",
      description: "Display autocomplete installation instructions",
      icon,
      options: [
        {
          name: ["-r", "--refresh-cache"],
          description: "Refresh cache (ignores displaying instructions)",
        },
      ],
      args: {
        name: "shell",
        description: "Shell type",
        suggestions: ["zsh", "bash"],
        isOptional: true,
      },
    },
  ],
};
export default completionSpec;
