import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "glow",
  description: "Render markdown on the CLI, with pizzazz!",
  args: {
    name: "source|dir",
    isOptional: true,
    isVariadic: true,
    generators: filepaths({
      extensions: ["md"],
      editFileSuggestions: { priority: 52 },
      editFolderSuggestions: { priority: 51 },
    }),
  },
  options: [
    {
      name: ["-a", "--all"],
      description: "Show system files and directories (TUI-mode only)",
    },
    {
      name: "--config",
      args: { name: "path", template: "filepaths" },
      description: "Config file",
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Help for glow",
      isPersistent: true,
    },
    {
      name: ["-l", "--local"],
      description: "Show local files only; no network (TUI-mode only)",
    },
    {
      name: ["-p", "--pager"],
      description: "Display with pager",
    },
    {
      name: ["-s", "--style"],
      description: "Style name or JSON path (default 'auto')",
      args: {
        name: "name",
        suggestions: ["auto", "light", "dark", "notty"],
        template: "filepaths",
      },
    },
    {
      name: ["-v", "--version"],
      description: "Version for glow",
    },
    {
      name: ["-w", "--width"],
      args: { name: "column" },
      description: "Word-wrap at width",
    },
  ],
  subcommands: [
    {
      name: "config",
      description: "Edit the glow config file",
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        template: "help",
        isOptional: true,
      },
    },
    {
      name: "stash",
      description: "Manage your stash of markdown files",
      args: {
        name: "path",
        isOptional: true,
        generators: filepaths({
          extensions: ["md"],
        }),
      },
      options: [
        {
          name: ["-m", "--memo"],
          description: "Memo/note for stashing",
          args: { name: "note" },
          insertValue: "--memo '{cursor}'",
        },
      ],
    },
  ],
};

export default completionSpec;
