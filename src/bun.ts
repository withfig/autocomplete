import { keyValueList } from "@fig/autocomplete-generators";
import {
  npmScriptsGenerator,
  npmSearchGenerator,
  dependenciesGenerator,
} from "./npm";

const dependencyOptions: Fig.Option[] = [
  {
    name: ["-c", "--config"],
    args: {
      name: "path",
      template: "filepaths",
      isOptional: true,
    },
    description: "Load config (bunfig.toml)",
  },
  {
    name: ["-y", "--yarn"],
    description: "Write a yarn.lock file (yarn v1)",
  },
  {
    name: ["-p", "--production"],
    description: "Don't install devDependencies",
  },
  {
    name: "--no-save",
    description: "Don't save a lockfile",
  },
  {
    name: "--dry-run",
    description: "Don't install anything",
  },
  {
    name: "--lockfile",
    args: { name: "path", template: "filepaths" },
    description: "Store & load a lockfile at a specific filepath",
  },
  {
    name: ["-f", "--force"],
    description:
      "Always request the latest versions from the registry & reinstall all dependenices",
  },
  {
    name: "--cache-dir",
    args: { name: "path", template: "folders" },
    description: "Store & load cached data from a specific directory path",
  },
  {
    name: "--no-cache",
    description: "Ignore manifest cache entirely",
  },
  {
    name: "--silent",
    description: "Don't log anything",
  },
  {
    name: "--verbose",
    description: "Excessively verbose logging",
  },
  {
    name: ["-g", "--global"],
    description: "Install globally",
  },
  {
    name: "--cwd",
    args: { name: "path", template: "folders" },
    description: "Set a specific cwd",
  },
  {
    name: "--backend",
    args: { name: "syscall", suggestions: ["clonefile", "copyfile"] },
    description:
      "Platform-specific optimizations for installing dependencies. For macOS, 'clonefile' (default), 'copyfile'",
  },
  {
    name: "--link-native-bins",
    args: {
      name: "str",
      isVariadic: true,
    },
    description:
      "Link 'bin' from a matching platform-specific 'optionalDependencies' instead. Default: esbuild, turbo",
  },
  {
    name: "--help",
    description: "Print the help menu",
  },
];

const spec: Fig.Spec = {
  name: "bun",
  description:
    "A fast bundler, transpiler, JavaScript Runtime and package manager for web software",
  options: [
    {
      name: "--use",
      args: { name: "framework", suggestions: ["next"] },
      description: `Choose a framework, e.g. "--use next". It checks first for a package named "bun-framework-packagename" and then "packagename"`,
    },
    {
      name: "--bunfile",
      args: { name: "path", template: "filepaths" },
      description: `Use a .bun file (default: node_modules.bun)`,
    },
    {
      name: "--server-bunfile",
      args: { name: "path", template: "filepaths" },
      description: `Use a .server.bun file (default: node_modules.server.bun)`,
    },
    {
      name: "--cwd",
      args: { name: "path", template: "folders" },
      description: `Absolute path to resolve files & entry points from. This just changes the process' cwd`,
    },
    {
      name: ["-c", "--config"],
      args: { name: "path", isOptional: true, template: "filepaths" },
      description: `Config file to load bun from (e.g. -c bunfig.toml`,
    },
    {
      name: "--disable-react-fast-refresh",
      description: `Disable React Fast Refresh`,
    },
    {
      name: "--disable-hmr",
      description: `Disable Hot Module Reloading (disables fast refresh too)`,
    },
    {
      name: "--extension-order",
      args: {
        name: "order",
        isVariadic: true,
        generators: keyValueList({
          keys: [".tsx", ".ts", ".jsx", ".js", ".json"],
        }),
      },
      description: `Defaults to: .tsx,.ts,.jsx,.js,.json`,
    },
    {
      name: "--jsx-factory",
      args: {
        name: "name",
        suggestions: ["React.createElement", "h", "preact.h"],
      },
      description: `Changes the function called when compiling JSX elements using the classic JSX runtime`,
    },
    {
      name: "--jsx-fragment",
      args: { name: "name", suggestions: ["React.Fragment", "Fragment"] },
      description: `Changes the function called when compiling JSX fragments`,
    },
    {
      name: "--jsx-import-source",
      args: { name: "module", suggestions: ["react"] },
      description: `Declares the module specifier to be used for importing the jsx and jsxs factory functions. Default: "react"`,
    },
    {
      name: "--jsx-production",
      description: `Use jsx instead of jsxDEV (default) for the automatic runtime`,
    },
    {
      name: "--jsx-runtime",
      args: { name: "name", suggestions: ["automatic", "classic"] },
      description: `"automatic" (default) or "classic"`,
    },
    {
      name: "--main-fields",
      args: { name: "fields", isVariadic: true },
      description: `Main fields to lookup in package.json. Defaults to --platform dependent`,
    },
    {
      name: "--no-summary",
      description: `Don't print a summary (when generating .bun)`,
    },
    { name: ["-v", "--version"], description: `Print version and exit` },
    {
      name: "--platform",
      args: { name: "name", suggestions: ["browser", "node"] },
      description: `"browser" or "node". Defaults to "browser"`,
    },
    {
      name: "--public-dir",
      args: { name: "path", template: "folders" },
      description: `Top-level directory for .html files, fonts or anything external. Defaults to "<cwd>/public", to match create-react-app and Next.js`,
    },
    {
      name: "--tsconfig-override",
      args: { name: "path", template: "filepaths" },
      description: `Load tsconfig from path instead of cwd/tsconfig.json`,
    },
    {
      name: ["-d", "--define"],
      args: { name: "k:v", isVariadic: true },
      description: `Substitute K:V while parsing, e.g. --define process.env.NODE_ENV:"development". Values are parsed as JSON`,
    },
    {
      name: ["-e", "--external"],
      args: { name: "module", isVariadic: true },
      description: `Exclude module from transpilation (can use * wildcards). ex: -e react`,
    },
    { name: ["-h", "--help"], description: `Display this help and exit` },
    {
      name: ["-i", "--inject"],
      args: { name: "module", isVariadic: true },
      description: `Inject module at the top of every file`,
    },
    {
      name: ["-l", "--loader"],
      args: { name: "loader", isVariadic: true },
      description: `Parse files with .ext:loader, e.g. --loader .js:jsx. Valid loaders: jsx, js, json, tsx, ts, css`,
    },
    {
      name: ["-u", "--origin"],
      args: { name: "url" },
      description: `Rewrite import URLs to start with --origin. Default: ""`,
    },
    {
      name: ["-p", "--port"],
      args: { name: "port" },
      description: `Port to serve bun's dev server on. Default: "3000"`,
    },
    { name: "--silent", description: `Don't repeat the command for bun run` },
  ],
  subcommands: [
    {
      name: "dev",
      icon: "🛠️",
      description: "Start a bun Dev server",
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "bun",
      icon: "📦",
      description: "Bundle dependencies of input files into a '.bun' file",
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: ["c", "create"],
      icon: "🛠️",
      description: "Start a new project from a template",
      args: [
        {
          name: "template",
          suggestions: ["react", "next"],
        },
        {
          name: "name",
          template: "folders",
          suggestCurrentToken: true,
        },
      ],
      options: [
        { name: "--force", description: "Overwrite existing files" },
        { name: "--no-install", description: "Don't install node_modules" },
        { name: "--no-git", description: "Don't create a git repository" },
        { name: "--verbose", description: "Too many logs" },
        {
          name: "--no-package-json",
          description: "Disable package.json transforms",
        },
        {
          name: "--open",
          description: "On finish, start bun and open in browser",
        },
      ],
    },
    {
      name: "run",
      icon: "🛠️",
      description: "Run a package.json script or executable",
      args: {
        name: "script",
        generators: npmScriptsGenerator,
      },
    },
    {
      name: ["i", "install"],
      icon: "📦",
      description: "Install dependencies for a package.json",
      options: dependencyOptions,
    },
    {
      name: ["a", "add"],
      icon: "📦",
      description: "Add a dependency to package.json",
      options: dependencyOptions,
      args: {
        name: "package",
        debounce: true,
        generators: npmSearchGenerator,
      },
    },
    {
      name: ["rm", "remove"],
      icon: "📦",
      description: "Remove a dependency from package.json",
      options: dependencyOptions,
      args: {
        name: "package",
        generators: dependenciesGenerator,
      },
    },
    {
      name: "upgrade",
      icon: "🛠️",
      description: "Get the latest version of bun",
    },
    {
      name: "completions",
      icon: "🛠️",
      description: "Install shell completions",
    },
    {
      name: "discord",
      icon: "fig://icon?type=discord",
      description: "Open bun's Discord server",
    },
    {
      name: "help",
      description: "Print the help menu",
    },
  ],
};

export default spec;
