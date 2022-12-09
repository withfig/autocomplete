const zoxideCompletionSpec: Fig.Spec = {
  name: "z",
  description: "Smarter cd command, inspired by z and autojump",
  args: {
    name: "directory",
    filterStrategy: "fuzzy",
    suggestCurrentToken: true,
    generators: {
      script: "zoxide query --list --score",
      postProcess: (out) => {
        return out.split("\n").map((line) => {
          const [score, path] = line.trim().split(" ", 1);
          return {
            name: path,
            description: `Score: ${score}`,
          };
        });
      },
    },
  },
};

export default zoxideCompletionSpec;
