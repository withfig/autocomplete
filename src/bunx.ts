import { npxLocalBinsGenerator, npxSuggestions } from "./npx";

const bunx: Fig.Spec = {
  name: "bunx",
  args: {
    name: "command",
    isCommand: true,
    generators: npxLocalBinsGenerator(true),
    description: "The command to run",
    suggestions: [...npxSuggestions],
  },
};

export default bunx;
