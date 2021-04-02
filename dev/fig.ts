export const completionSpec: Fig.Spec = {
  name: "fig",
  description: "Autocomplete for your terminal",
  subcommands: [
    {
      name: "source",
      description: "(re)connect fig to the current shell session",
    },
    { name: "update", description: "update completion specs" },
    {
      name: "settings",
      description: "update preferences",
      subcommands: [
        {
          displayName: "developerMode",
          name: "autocomplete.developerMode",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.developerMode ",
          description:
            "Turns off caching and loads completions from <code>devCompletionsFolder</code>",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
            ],
          },
        },
        {
          displayName: "devCompletionsFolder",
          name: "autocomplete.devCompletionsFolder",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.devCompletionsFolder ",
          description:
            "Directory to load completion specs when in <code>developerMode</code>",
          args: {
            name: "folder",
            description: "absolute path to directory containing specs",
            generators: {
              script: 'ls -d -1 "$PWD/"**/',
              postProcess: (out) => {
                const folders = out.split("\n");
                return folders.map((folder) => {
                  const paths = folder.split("/");
                  paths.pop();
                  return {
                    name: paths.pop(),
                    insertValue: folder,
                    icon: `fig://${folder}`,
                  };
                });
              },
            },
          },
        },
        {
          displayName: "scrollWrapAround",
          name: "autocomplete.scrollWrapAround",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.scrollWrapAround ",
          description:
            "A flag that determines whether the selection will wrap around when pressing arrow key at bottom or top of list.",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
            ],
          },
        },
        {
          displayName: "insertSpaceAutomatically",
          name: "autocomplete.insertSpaceAutomatically",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.insertSpaceAutomatically ",
          description:
            "A flag that determines whether Fig will automatically insert a space.",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
            ],
          },
        },
        {
          displayName: "immediatelyRunDangerousCommands",
          name: "autocomplete.immediatelyRunDangerousCommands",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.immediatelyRunDangerousCommands ",
          description:
            "A flag that determines whether Fig will present suggestions to immediately run commands that might be dangerous, like rm.",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
            ],
          },
        },
        {
          displayName: "immediatelyRunGitAliases",
          name: "autocomplete.immediatelyRunGitAliases",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.immediatelyRunGitAliases ",
          description:
            "A flag that determines whether Fig will present suggestions to immediately run git aliases.",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
            ],
          },
        },
        {
          displayName: "enter",
          name: "autocomplete.enter",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.enter ",
          description:
            "A flag that determines whether Fig will present suggestions to immediately run git aliases.",
          args: {
            name: "behavior",
            suggestions: [
              {
                name: "insert",
                description: "pressing enter will insert selected suggestion",
                icon: "fig://icon?type=string",
              },
              {
                name: "ignore",
                description:
                  "pressing enter will run whatever command is currently in the terminal.",
                icon: "fig://icon?type=string",
              },
            ],
          },
        },
        {
          displayName: "tab",
          name: "autocomplete.tab",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.tab ",
          description:
            "A flag that determines whether Fig will present suggestions to immediately run git aliases.",
          args: {
            name: "behavior",
            suggestions: [
              {
                name: "insert",
                description: "pressing tab will insert selected suggestion",
                icon: "fig://icon?type=string",
              },
              {
                name: "insertOrPrefix",
                description:
                  "pressing tab will insert selected suggestion or common prefix of all suggestions, if it exists",
                icon: "fig://icon?type=string",
              },
              {
                name: "shake",
                description:
                  "pressing tab will insert common prefix, if it exists. Otherwise, it will indicate that there is no shared prefix by shaking.",
                icon: "fig://icon?type=string",
              },
              {
                name: "navigate",
                description:
                  "pressing tab will insert common prefix, if it exists. Otherwise, it will select the next suggestion in the list.",
                icon: "fig://icon?type=string",
              },
            ],
          },
        },
        {
          name: "autocomplete.disableForCommands",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.disableForCommands '{cursor}'",
          description: "JSON array of commands Fig should not autocomplete on.",
          args: {
            name: "array",
            generators: {
              script: "fig settings autocomplete.disableForCommands",
              postProcess: (out) => {
                const existing = out.split("\n").filter((item) => {
                  return item.length > 0;
                });

                const append = {
                  name: "Disable...",
                  icon: "fig://icon?type=box",
                  insertValue: JSON.stringify(existing.concat(["{cursor}"])),
                };

                const enabledAll = {
                  name: "Enable all commands",
                  icon: "fig://icon?type=box",
                  insertValue: "[]",
                };

                return [append, enabledAll].concat(
                  existing.map((disabledCommand) => {
                    return {
                      name: `Enable ${disabledCommand}`,
                      icon: "fig://icon?type=box",
                      insertValue: JSON.stringify(
                        existing.filter((cmd) => {
                          return cmd != disabledCommand;
                        })
                      ),
                    };
                  })
                );
              },
            },
          },
        },
        {
          name: "pty.path",
          icon: "fig://icon?type=commandkey",
          description: "Specify the $PATH variable in Fig's pseudoterminal",
          args: {
            name: "path",
            description:
              "The <code>$PATH</code> variable in Fig's pseudoterminal",
            suggestions: [{ name: "$PATH", icon: "fig://icon?type=string" }],
          },
        },
        {
          displayName: "width",
          name: "autocomplete.width",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.width ",
          description: "Set the maximum width of the autocomplete window.",
          args: {
            name: "number",
          },
        },
        {
          displayName: "height",
          name: "autocomplete.height",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.height ",
          description: "Set the maximum height of the autocomplete window.",
          args: {
            name: "number",
          },
        },
      ],
    },
    {
      name: "uninstall",
      description: "uninstall a completion spec",
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
      description: "share Fig with a teammate ⭐",
      icon: "fig://icon?type=invite",
    },
    { name: "report", description: "report an issue" },
    {
      name: "tweet",
      description: "tweet about Fig",
      icon: "fig://icon?type=twitter",
    },
    { name: "docs", description: "view docs in browser" },
    { name: "list", description: "list all available completion specs" },
    { name: "onboarding", description: "re-run Fig's onboarding" },
    { name: "diagnostic", description: "display diagnostic information" },
    {
      name: "team:upload",
      description: "share an completion spec with your team",
      args: {
        name: "spec",
        template: "filepaths",
      },
    },
    { name: "team:download", description: "download your team's spec" },
    {
      name: "integrations:iterm",
      description: "Install the iTerm tab integration",
    },
  ],

  options: [
    {
      name: ["-h", "--help"],
      description: "Overview of Fig CLI",
    },
    {
      name: ["--version"],
      description: "The current Fig version",
    },
  ],
};
