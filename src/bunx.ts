import { npxSuggestions } from "./npx";

const bunx: Fig.Spec = {
  name: "bunx",
  args: {
    name: "command",
    isCommand: true,
    generators: {
      script: [
        "bash",
        "-c",
        "until [[ -d node_modules/ ]] || [[ $PWD = '/' ]]; do cd ..; done; ls -1 node_modules/.bin/`",
      ],
      postProcess: function (out) {
        const cli = [...npxSuggestions].reduce(
          (acc, { name }) => [...acc, name],
          []
        );
        return out
          .split("\n")
          .filter((name) => !cli.includes(name))
          .map((name) => ({
            name,
            icon: "fig://icon?type=command",
            loadSpec: name,
          }));
      },
    },
    description: "The command to run",
    suggestions: [...npxSuggestions],
  },
};

export default bunx;
