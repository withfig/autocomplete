import { filepaths } from "@fig/autocomplete-generators";

const scriptPathArgs: Fig.Arg = {
  name: "script path",
  isScript: true,
  generators: filepaths({
    extensions: ["ts"],
    editFileSuggestions: { priority: 76 },
    editFolderSuggestions: { priority: 70 },
  }),
};

const completionSpec: Fig.Spec = {
  name: "tsx",
  description: "Run TypeScript file using tsx",
  subcommands: [
    {
      name: "watch",
      description: "Run the script and watch for changes",
      args: scriptPathArgs,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for tsx",
      isPersistent: true,
    },
    {
      name: "--no-cache",
      description: "Disable caching",
      isPersistent: true,
    },

    {
      name: "--clear-screen",
      description: "Disable clearing the screen on rerun",
      isPersistent: true,
      insertValue: "--clear-screen=false",
      dependsOn: ["watch"],
      args: scriptPathArgs,
    },

    {
      name: ["-v", "--version"],
      description: "Show version",
    },
    {
      name: "--tsconfig",
      description: "Custom tsconfig.json path",
      args: {
        name: "tsconfig.json path",
        generators: filepaths({
          extensions: ["json"],
          editFileSuggestions: { priority: 76 },
          editFolderSuggestions: { priority: 70 },
        }),
      },
    },
  ],

  args: scriptPathArgs,
};
export default completionSpec;
