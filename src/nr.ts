import { npmScriptsGenerator } from "./npm";

const completionSpec: Fig.Spec = {
  name: "nr",
  description: "Use the right package manager - run",
  options: [
    {
      name: ["-h", "--help"],
      description: "Output usage information",
    },
  ],
  args: {
    name: "script",
    description: "The script to run",
    filterStrategy: "fuzzy",
    generators: npmScriptsGenerator,
  },
  additionalSuggestions: [
    {
      name: "-",
      // Run the suggestion directory on insert
      // eslint-disable-next-line @withfig/fig-linter/no-useless-insertvalue
      insertValue: "-\n",
      description: "Run the last command",
      type: "shortcut",
    },
  ],
};
export default completionSpec;
