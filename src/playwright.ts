const testsGenerator: Fig.Generator = {
  custom: async (token, executeShellCommand) => {
    console.log(token);
    const basePathSearch = await executeShellCommand(
      "cat playwright.config.ts | grep testDir"
    );

    const dir = basePathSearch.match(/(['"])([./\w]+)(['"])/);
    const baseDir = dir ? dir[2] : "tests";

    const tests = await executeShellCommand("npx playwright test --list");
    const lines = tests
      .split("\n")
      .slice(1, -1)
      .map((line) => line.split(" › ").slice(1))
      .reduce<Record<string, Fig.Suggestion>>((acc, curr) => {
        const [testPath, testLabel] = curr;
        const withoutSpecifier = testPath.split(":", 1)[0];
        if (!acc[withoutSpecifier]) {
          acc[withoutSpecifier] = {
            priority: 80,
            name: `${baseDir}/${withoutSpecifier}`,
            displayName: withoutSpecifier,
            description: `Run all tests in ${withoutSpecifier}`,
          };
        }

        acc[testPath] = {
          priority: 80,
          name: `${baseDir}/${testPath}`,
          displayName: `${testPath} - ${testLabel}`,
          description: `Run ${testLabel}`,
        };

        return acc;
      }, {});

    return Object.values(lines);
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
        generators: [{ template: ["filepaths", "folders"] }, testsGenerator],
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
