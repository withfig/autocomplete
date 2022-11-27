// Template Suggestions
const TEMPLATES_SUGGESTIONS = [
  "component",
  "composable",
  "layout",
  "plugin",
  "page",
  "middleware",
  "api",
];

// Default Root Dir Argument
const defaultRootDirArg: Fig.Arg = {
  name: "rootDir",
  description: "The directory of the target application",
  template: "folders",
  isOptional: true,
};

// Main Nuxi options
const mainNuxiOptions: Fig.Option[] = [
  {
    name: "--help",
    description: "Show help",
    isPersistent: true,
  },
];

// Main nuxi subcommands
const mainNuxiSubcommands: Fig.Subcommand[] = [
  {
    name: "info",
    displayName: "Info",
    icon: "📝",
    description:
      "The info command logs information about the current or specified Nuxt project",
    args: defaultRootDirArg,
  },
  {
    name: ["init", "create"],
    description: "The init command initializes a fresh Nuxt project",
    args: {
      name: "dir",
      description: "Name of the install directory",
    },
    options: [
      {
        name: ["--verbose", "-v"],
        description: "Log information about the installation process",
      },
      {
        name: ["--template", "-t"],
        description: "Specify a Git repository to use as a template",
      },
      {
        name: "--force",
        description: "Force clone to any existing directory",
      },
      {
        name: "--prefer-offline",
        description: "Try local cache first to download templates",
      },
      {
        name: "--shell",
        description: "Open shell in cloned directory (experimental)",
      },
    ],
  },
  {
    name: ["add", "new"],
    displayName: "Add",
    icon: "fig://template?color=2ecc71&badge=+",
    description: "Generate a entity into your Nuxt application",
    args: [
      {
        name: "TEMPLATE",
        description: "Specify a template of the file to be generated",
        suggestions: TEMPLATES_SUGGESTIONS.map((template) => ({
          name: template,
          description: `Generate a nuxt ${template}`,
          icon: "fig://template?color=0079ff&badge=+",
        })),
      },
      {
        name: "NAME",
        description: "Specify a name of the file that will be created",
      },
    ],
    options: [
      {
        name: "--cwd",
        description: "The current working directory of the target application",
      },
      {
        name: "--force",
        description: "Force override file if it already exists",
      },
    ],
  },
  {
    name: "analyze",
    displayName: "Analyze",
    icon: "✨",
    description:
      "The analyze command builds Nuxt and analyzes the production bundle (experimental)",
    args: defaultRootDirArg,
  },
  {
    name: "build",
    displayName: "Build",
    icon: "🏗",
    description:
      "The build command creates a .output directory with all your application, server and dependencies ready for production",
    args: defaultRootDirArg,
    options: [
      {
        name: "--dotenv",
        description:
          "Point to another .env file to load, relative to the root directory",
      },
      {
        name: "--prerender",
        description:
          "Pre-render every route of your application. (note: This is an experimental flag. The behavior might be changed)",
      },
    ],
  },
  {
    name: "dev",
    displayName: "Dev",
    icon: "💻",
    description:
      "The dev command starts a development server with hot module replacement at http://localhost:3000",
    args: defaultRootDirArg,
    options: [
      {
        name: "--dotenv",
        description:
          "Point to another .env file to load, relative to the root directory",
      },
      {
        name: "--clipboard",
        description: "Copy URL to clipboard",
      },
      {
        name: ["--open", "-o"],
        description: "Open URL in browser",
      },
      {
        name: "--no-clear",
        description: "Does not clear the console after startup",
      },
      {
        name: ["--port", "-p"],
        description: "Port to listen",
      },
      {
        name: ["--host", "-h"],
        description: "Hostname of the server",
      },
      {
        name: "--https",
        description:
          "Listen with https protocol with a self-signed certificate by default",
      },
      {
        name: "--ssl-cert",
        description: "Specify a certificate for https",
      },
      {
        name: "--ssl-key",
        description: "Specify the key for the https certificate",
      },
    ],
  },
  {
    icon: "📦",
    name: "prepare",
    description:
      "The prepare command creates a .nuxt directory in your application and generates ts types",
  },
  {
    name: "preview",
    displayName: "Preview",
    icon: "🔗",
    description:
      "The preview command starts a server to preview your Nuxt application after running the build command",
    args: defaultRootDirArg,
    options: [
      {
        name: "--dotenv",
        description:
          "Point to another .env file to load, relative to the root directory",
      },
    ],
  },
  {
    name: "generate",
    displayName: "Generate",
    icon: "📦",
    description: "Build Nuxt and prerender static routes",
    args: defaultRootDirArg,
  },
  {
    icon: "🧼",
    name: ["clean", "cleanup"],
    displayName: "Cleanup",
    description:
      "The cleanup command removes common generated Nuxt files and caches including .nuxt/, .output/, node_modules/.vite and node_modules/.cache",
    args: defaultRootDirArg,
  },
  {
    icon: "🧪",
    name: "test",
    displayName: "Test",
    description: "Run the test files for your Nuxt application",
    args: defaultRootDirArg,
    options: [
      {
        name: "--dev",
        description: "Run tests in development mode",
      },
      {
        name: "--watch",
        description: "Actively watch for changes and rerun tests",
      },
    ],
  },
  {
    icon: "⭐️",
    name: "upgrade",
    displayName: "Upgrade",
    description: "The upgrade command upgrades Nuxt 3 to the latest version",
    options: [
      {
        name: ["--force", "-f"],
        description: "Removes node_modules and lock files before upgrade",
      },
    ],
  },
  {
    name: "typecheck",
    icon: "✅",
    description:
      "The typecheck command runs vue-tsc to check types throughout your app",
    args: defaultRootDirArg,
  },
  {
    name: "usage",
    displayName: "Usage",
    icon: "📊",
    description: "The usage command shows the usage of the Nuxt CLI",
  },
];

const completionSpec: Fig.Spec = {
  name: "nuxi",
  description: "Nuxt 3 CLI",
  icon: "https://v3.nuxtjs.org/icon.png",
  subcommands: mainNuxiSubcommands,
  options: mainNuxiOptions,
};

export default completionSpec;
