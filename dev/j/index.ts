import autojump from "../autojump";

const completionSpec: Fig.Spec = {
  name: "j",
  ...autojump,
  args: {
    name: "directory",
    description: "directory to jump to",
    isVariadic: true,
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
