var completionSpec = {
  name: "code",
  description: "Visual Studio Code",
  args: {
    template: ["filepaths", "folders"],
  },
  options: [
    {
      name: ["-d", "--diff"],
      description: "Compare two files with each other.",
      args: [
        {
          template: "filepaths",
        },
        {
          template: "filepaths",
        },
      ],
    },
    {
      name: ["-a", "--add"],
      description: "Add folder(s) to the last active window",
      args: {
        template: "folders",
      },
    },
    {
      name: ["-g", "--goto"],
      description:
        "Open a file at the path on the specified line and character position.",
      args: {
        // TODO: Support :line[:character] completion
        template: "filepaths",
      },
    },
    {
      name: ["-n", "--new-window"],
      description: "Force to open a new window.",
    },
    {
      name: ["-r", "--reuse-window"],
      description:
        "Force to open a file or folder in an already opened window.",
    },
    {
      name: ["-w", "--wait"],
      description: "Wait for the files to be closed before returning.",
    },
    {
      name: ["-v", "--version"],
      description: "Print version.",
    },
    {
      name: "--locale",
      description: "The locale to use (e.g. en-US or zh-TW).",
      args: {
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
        "Specifies the directory that user data is kept in. Can be used to open multiple distinct instances of Code.",
      args: {
        template: "folders",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Print usage.",
    },
    {
      name: "--extensions-dir",
      description: "Set the root path for extensions.",
      args: {
        template: "folders",
      },
    },
    {
      name: "--list-extensions",
      description: "List the installed extensions.",
      args: {
        isOptional: true,
        suggestions: [
          {
            name: "--category",
            description: "Filters installed extensions by provided category",
          },
          {
            name: "--show-versions",
            description:
              "Show versions of installed extensions, when using --list-extensions.",
          },
        ],
      },
    },
    {
      name: "--install-extension",
      description:
        "Installs or updates the extension. The identifier of an extension is always `${publisher}.${name}\n\nUse `--force` argument to update to latest version. To install a specific version provide `@${version}`. For example: 'vscode.csharp@1.2.3'.",
      args: {
        name: "extension-id[@version] | path-to-vsix",
      },
    },
    {
      name: "--uninstall-extension",
      description: "Uninstalls an extension.",
      args: {
        name: "extension-id",
      },
    },
    {
      name: "--enable-proposed-api",
      description:
        "Enables proposed API features for extensions. Can receive one or more extension IDs to enable individually.",
    },
  ],
};
