const testsGenerator: Fig.Generator = {
  custom: async (tokens, executeShellCommand) => {
    // TODO: load the list of test files specified in testDir on playwright.config file
    return [] as Fig.Suggestion[];
  },
};

const browserSuggestions: Fig.Suggestion[] = [
  {
    name: "chromium",
    displayName: "Chromium",
  },
  {
    name: "chrome",
    displayName: "Chrome",
  },
  {
    name: "chrome-beta",
    displayName: "Chrome Beta",
  },
  {
    name: "msedge",
    displayName: "Microsoft Edge",
  },
  {
    name: "msedge-beta",
    displayName: "Microsoft Edge Beta",
  },
  {
    name: "msedge-dev",
    displayName: "Microsoft Edge Dev",
  },
  {
    name: "firefox",
    displayName: "Firefox",
  },
  {
    name: "webkit",
    displayName: "WebKit",
  },
];

const helpOption: Fig.Option = {
  name: ["--help", "-h"],
  description: "Display help for command",
  priority: 1,
};

const completionSpec: Fig.Spec = {
  name: "playwright",
  description: "",
  subcommands: [
    {
      name: "test",
      description: "Run tests with Playwright Test",
      args: {
        name: "tests",
        description: "Test files to run",
        isOptional: true,
        isVariadic: true,
        template: ["filepaths", "folders"],
      },
      options: [
        {
          name: "-g",
          description: "Run the test with the title",
          args: {
            name: "title",
          },
        },
        {
          name: "--headed",
          description: "Run tests in headed browsers",
        },
        helpOption,
      ],
    },
    {
      name: "install",
      description: "Running without arguments will install default browsers",
      args: {
        name: "browsers",
        description: "Browser to install",
        isOptional: true,
        isVariadic: true,
        suggestions: browserSuggestions,
      },
      options: [
        {
          name: "--with-deps",
          description: "Install system dependencies for browsers",
        },
        helpOption,
      ],
    },
  ],
  options: [
    {
      name: ["--version", "-V"],
      description: "Output the version number",
    },
    helpOption,
  ],
};
export default completionSpec;
