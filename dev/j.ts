const completionSpec: Fig.Spec = {
  name: "j",
  description: "a faster way to navigate your filesystem",
  options: [
    {
      name: ["-h", "--help"],
      description: "show the help message and exit",
    },
    {
      name: ["-a", "--add"],
      description: "add path",
      args: [{ name: "directory", template: ["folders"] }],
    },
    {
      name: ["-i", "--increase"],
      description: "increase current directory weight",
      args: [{ name: "weight", isOptional: true }],
    },
    {
      name: ["-d", "--decrease"],
      description: "decrease current directory weight",
      args: [{ name: "weight", isOptional: true }],
    },
    {
      name: ["--complete"],
      description: "used for tab completion",
    },
    {
      name: ["--purge"],
      description: "remove non-existent paths from database",
    },
    {
      name: ["-s", "--stat"],
      description: "show database entries and their key weights",
    },
    {
      name: ["-v", "--version"],
      description: "show version information",
    },
  ],
  args: {
    name: "directory",
    description: "directory to jump to",
    variadic: true,
    generators: {
      script: 'cat "$HOME"/Library/autojump/autojump.txt',
      postProcess: (out, ctx) => {
        const lines = out.split("\n").map((line) => {
          const [weight, dir] = line.split("\t");

          return {
            weight: Number(weight),
            dir,
          };
        });

        const args = ctx.slice(1, ctx.length - 1);

        // directory arg is variadic with each subsequent arg being an
        // additional filter. filtered will filter directories by all args.
        const filtered = lines.filter(({ dir }) =>
          args.every((arg) => dir.includes(arg))
        );

        return filtered.map(({ weight, dir }) => {
          const splitPath = dir.split("/");
          const name = splitPath[splitPath.length - 1];

          // arg is variadic but we don't want to suggest something
          // that's already been entered. This 'if' prevents redundant
          // suggestions.
          if (!args.includes(name)) {
            return {
              name,
              description: dir,
              // Docs state max weight is 100 but this seems
              // to work regardless of any amount over that limit.
              // Fig should defer assigning priority to autojump.
              // 75 added to keep args above options.
              priority: 75 + weight,
            };
          }
        });
      },
    },
  },
};

export default completionSpec;
