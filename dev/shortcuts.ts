const shortcut: Fig.Arg = {
  generators: [
    {
      script: "shortcuts list",
      postProcess: (list) =>
        list.split("\n").map((shortcut) => ({
          name: shortcut,
          icon: "fig:///System/Applications/Shortcuts.app",
        })),
    },
  ],
};
const completionSpec: Fig.Spec = {
  name: "shortcuts",
  description: "Command-line utility for running shortcuts.",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help information.",
    },
  ],
  subcommands: [
    {
      name: "run",
      description: "Run a shortcut.",
      icon: "▶️",
      args: [
        {
          name: "shortcut-name",
          description: "The name of the shortcut to run.",
          isOptional: false,
          generators: shortcut.generators,
        },
      ],
      options: [
        {
          name: ["-i", "--input-path"],
          isRequired: false, // Default: stdin
          args: [
            {
              name: "input-path",
              template: "filepaths",
              isOptional: false,
            },
          ],
          description: "The input to provide to the shortcut.",
        },
        {
          name: ["-o", "--output-path"],
          isRequired: false,
          args: [
            {
              name: "output-path",
              isOptional: false,
              template: "filepaths",
            },
          ],
          description: "Where to write the shortcut output, if applicable.",
        },
        {
          name: ["--output-type"],
          isRequired: false,
          args: [
            {
              name: "output-type",
              isOptional: false,
            },
          ],
          description:
            "What type to output data in, in Universal Type Identifier format.",
        },
        {
          name: ["--help", "-h"],
          description: "Show help information.",
        },
      ],
    },
    {
      name: "list",
      description: "List your shortcuts.",
      icon: "📂",
      options: [
        {
          name: ["--help", "-h"],
          description: "Show help information.",
        },
        {
          name: ["--folder-name", "-f"],
          description: "The name of the folder to list.",
          args: [
            {
              name: "folder-name",
              isOptional: false,
              generators: [
                {
                  script: "shortcuts list --folders",
                  postProcess: (list) =>
                    list.split("\n").map((folder) => ({
                      name: folder,
                      icon: "fig://icon?type=folder",
                    })),
                },
              ],
            },
          ],
        },
        {
          name: ["--folders"],
          description: "List folders instead of shortcuts.",
        },
      ],
    },
    {
      name: "view",
      description: "View a shortcut in Shortcuts.",
      icon: "🔍",
      args: [
        {
          name: "shortcut-name",
          description: "The name of the shortcut to run.",
          isOptional: false,
          generators: shortcut.generators,
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Show help information.",
        },
      ],
    },
    {
      name: "sign",
      description: "Sign a shortcut file.",
      icon: "🔏",
      options: [
        {
          name: ["--input", "-i"],
          description: "The shortcut file to sign.",
          isRequired: true,
          args: [
            {
              name: "input",
              template: "filepaths",
              isOptional: false,
            },
          ],
        },
        {
          name: ["--output", "-o"],
          description: "Output path for the signed shortcut file.",
          isRequired: true,
          args: [
            {
              name: "output",
              template: "filepaths",
              isOptional: false,
            },
          ],
        },
        {
          name: ["--help", "-h"],
          description: "Show help information.",
        },
        {
          name: ["--mode", "-m"],
          description: "The  signing mode. (default: people-who-know-me)",
          isRequired: false,
          args: [
            {
              name: "mode",
              isOptional: false,
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Show help information.",
      args: [
        {
          name: "subcommand",
          description: "The subcommand to show help for.",
          isOptional: true,
          suggestions: ["run", "list", "view", "sign"],
        },
      ],
    },
  ],
};
export default completionSpec;
