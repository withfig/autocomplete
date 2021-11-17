import {
  settingsSpecGenerator,
  subsystemsGenerator,
  themesGenerator,
} from "./shared";

const completionSpec: Fig.Spec = {
  name: "fig",
  description: "Autocomplete for your terminal",
  subcommands: [
    {
      name: "source",
      description: "(Re)connect fig to the current shell session",
    },
    { name: "update", description: "Update completion specs and app" },
    {
      name: "theme",
      description: "Set the Theme of fig",
      args: {
        name: "theme",
        generators: themesGenerator,
      },
    },
    {
      name: "settings",
      description: "Update preferences",
      generateSpec: settingsSpecGenerator,
    },
    {
      name: "remove",
      description: "Remove a completion spec",
      args: {
        name: "spec",
        description: "The CLI completion spec to remove",
        generators: {
          script: "ls -1Ap ~/.fig/autocomplete",
          postProcess: (data) => {
            console.log(data);
            const out = data.split("\n").reduce((acc, curr) => {
              if (
                [
                  ".gitignore",
                  "README.md",
                  "package.json",
                  "package-lock.json",
                ].includes(curr)
              )
                return acc;
              else {
                acc.push({
                  name: curr.trim().split(".")[0],
                  icon: "fig://icon?type=box",
                });
                return acc;
              }
            }, []);
            return out;
          },
        },
      },
    },
    {
      name: "invite",
      description: "Share Fig with a teammate ⭐",
      icon: "fig://icon?type=invite",
    },
    { name: "report", description: "Report an issue" },
    {
      name: "tweet",
      description: "Tweet about Fig",
      icon: "fig://icon?type=twitter",
    },
    { name: "docs", description: "View docs in browser" },
    { name: "list", description: "List all available completion specs" },
    { name: "onboarding", description: "Re-run Fig's onboarding" },
    { name: "diagnostic", description: "Display diagnostic information" },
    {
      name: "issue",
      description: "Create a new GitHub issue in withfig/fig",
      icon: "fig://icon?type=github",
    },

    { name: "quit", description: "Quit the Fig application" },
    {
      name: "integrations:iterm",
      description: "Install the iTerm tab integration",
    },
    {
      name: "set:path",
      description: "Sync your $PATH variable with Fig",
    },
    {
      name: "debug",
      // workaround to avoid showing immediate execute arrow from appearing when 'debug' is entered
      insertValue: "debug {cursor}",
      description: "Utilities that are helpful when things break",
      subcommands: [
        {
          name: "terminal",
          description:
            "Print out terminal configuration and environment variables",
        },
        {
          name: "app",
          description: "Run app executable directly in terminal",
        },
        {
          name: "sample",
          description:
            "Profile the Fig process to determine why it is hanging or locked",
        },
        {
          name: "prefs",
          description:
            "Overview of user-defined preferences (config, settings.json, defaults)",
        },
        {
          name: "logs",
          description: "View categorized logs for all subsystems",
          args: {
            name: "subsystem",
            isOptional: true,
            isVariadic: true,
            generators: {
              script: "ls ~/.fig/logs",
              trigger: (curr, prev) => {
                // trigger on new token
                return curr.length == 0 && prev.length > 0;
              },
              postProcess: (out, tokens) => {
                const pivot = tokens.indexOf("logs");
                const insertedLogFiles = tokens.slice(pivot);
                return out
                  .split("\n")
                  .map((log) => {
                    return { name: log.replace(".log", "") };
                  })
                  .filter(
                    (suggestion) => !insertedLogFiles.includes(suggestion.name)
                  );
              },
            },
          },
        },
      ],
    },
  ],

  options: [
    {
      name: ["-h", "--help"],
      description: "Overview of Fig CLI",
    },
    {
      name: "--version",
      description: "The current Fig version",
    },
  ],
};

export default completionSpec;
