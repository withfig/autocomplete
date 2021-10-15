const commonOptions: Fig.Option[] = [
  {
    name: ["-d", "--diff"],
    description: "Compare two files with each other",
    args: [
      {
        name: "file",
        template: "filepaths",
      },
      {
        name: "file",
        template: "filepaths",
      },
    ],
  },
  {
    name: ["-a", "--add"],
    description: "Add folder(s) to the last active window",
    args: {
      name: "folder",
      template: "folders",
      isVariadic: true,
    },
  },
  {
    name: ["-g", "--goto"],
    description:
      "Open a file at the path on the specified line and character position",
    args: {
      name: "file:line[:character]",
      // TODO: Support :line[:character] completion?
      template: "filepaths",
    },
  },
  {
    name: ["-n", "--new-window"],
    description: "Force to open a new window",
  },
  {
    name: ["-r", "--reuse-window"],
    description: "Force to open a file or folder in an already opened window",
  },
  {
    name: ["-w", "--wait"],
    description: "Wait for the files to be closed before returning",
  },
  {
    name: "--locale",
    description: "The locale to use (e.g. en-US or zh-TW)",
    args: {
      name: "locale",
      suggestions: [
        // Supported locales: https://code.visualstudio.com/docs/getstarted/locales#_available-locales
        { name: "en", icon: "🇺🇸", description: "English (US)" },
        { name: "zh-CN", icon: "🇨🇳", description: "Simplified Chinese" },
        { name: "zh-TW", icon: "🇹🇼", description: "Traditional Chinese" },
        { name: "fr", icon: "🇫🇷", description: "French" },
        { name: "de", icon: "🇩🇪", description: "German" },
        { name: "it", icon: "🇮🇹", description: "Italian" },
        { name: "es", icon: "🇪🇸", description: "Spanish" },
        { name: "ja", icon: "🇯🇵", description: "Japanese" },
        { name: "ko", icon: "🇰🇷", description: "Korean" },
        { name: "ru", icon: "🇷🇺", description: "Russian" },
        { name: "bg", icon: "🇧🇬", description: "Bulgarian" },
        { name: "hu", icon: "🇭🇺", description: "Hungarian" },
        { name: "pt-br", icon: "🇧🇷", description: "Portuguese (Brazil)" },
        { name: "tr", icon: "🇹🇷", description: "Turkish" },
      ],
    },
  },
  {
    name: "--user-data-dir",
    description:
      "Specifies the directory that user data is kept in. Can be used to open multiple distinct instances of Code",
    args: {
      name: "dir",
      template: "folders",
    },
  },
  {
    name: ["-h", "--help"],
    description: "Print usage",
  },
];

const extensionManagementOptions: Fig.Option[] = [
  {
    name: "--extensions-dir",
    description: "Set the root path for extensions",
    args: {
      name: "dir",
      template: "folders",
    },
  },
  {
    name: "--list-extensions",
    description: "List the installed extensions",
  },
  {
    name: "--category",
    description:
      "Filters installed extensions by provided category, when using --list-extensions",
    args: {
      name: "category",
      suggestions: [
        "azure",
        "data science",
        "debuggers",
        "extension packs",
        "education",
        "formatters",
        "keymaps",
        "language packs",
        "linters",
        "machine learning",
        "notebooks",
        "programming languages",
        "scm providers",
        "snippets",
        "testing",
        "themes",
        "visualization",
        "other",
      ],
    },
  },
  {
    name: "--show-versions",
    description:
      "Show versions of installed extensions, when using --list-extensions",
  },
  {
    name: "--install-extension",
    description:
      "Installs or updates the extension. The identifier of an extension is always `${publisher}.${name}\n\nUse `--force` argument to update to latest version. To install a specific version provide `@${version}`. For example: 'vscode.csharp@1.2.3'",
    args: {
      // TODO: Create extension ID generator
      name: "extension-id[@version] | path-to-vsix",
    },
  },
  {
    name: "--uninstall-extension",
    description: "Uninstalls an extension",
    args: {
      // TODO: Create extension ID generator
      name: "extension-id",
    },
  },
  {
    name: "--enable-proposed-api",
    description:
      "Enables proposed API features for extensions. Can receive one or more extension IDs to enable individually",
  },
];

const troubleshootingOptions: Fig.Option[] = [
  {
    name: ["-v", "--version"],
    description: "Print version",
  },
  {
    name: "--verbose",
    description: "Print verbose output (implies --wait)",
  },
  {
    name: "--log",
    description: "Log level to use. Default is 'info' when unspecified",
    args: {
      name: "level",
      default: "info",
      suggestions: [
        "critical",
        "error",
        "warn",
        "info",
        "debug",
        "trace",
        "off",
      ],
    },
  },
  {
    name: ["-s", "--status"],
    description: "Print process usage and diagnostics information",
  },
  {
    name: "--prof-startup",
    description: "Run CPU profiler during startup",
  },
  {
    name: "--disable-extensions",
    description: "Disable all installed extensions",
  },
  {
    name: "--disable-extension",
    description: "Disable an extension",
    args: {
      // TODO: Create extension ID generator
      name: "extension-id",
    },
  },
  {
    name: "--sync",
    description: "Turn sync on or off",
    args: {
      name: "sync",
      description: "Whether to enable sync",
      suggestions: ["on", "off"],
    },
  },
  {
    name: "--inspect-extensions",
    description:
      "Allow debugging and profiling of extensions. Check the developer tools for the connection URI",
    args: {
      name: "port",
    },
  },
  {
    name: "--inspect-brk-extensions",
    description:
      "Allow debugging and profiling of extensions with the extension host being paused after start. Check the developer tools for the connection URI",
    args: {
      name: "port",
    },
  },
  {
    name: "--disable-gpu",
    description: "Disable GPU hardware acceleration",
  },
  {
    name: "--max-memory",
    description: "Max memory size for a window (in Mbytes)",
    args: {
      name: "memory",
      description: "Memory in megabytes",
    },
  },
  {
    name: "--telemetry",
    description: "Shows all telemetry events which VS code collects",
  },
];

const completionSpec: Fig.Spec = {
  name: "code",
  description: "Visual Studio Code",
  args: {
    template: ["filepaths", "folders"],
    isVariadic: true,
  },
  options: [
    ...commonOptions,
    ...extensionManagementOptions,
    ...troubleshootingOptions,
  ],
};

export default completionSpec;
