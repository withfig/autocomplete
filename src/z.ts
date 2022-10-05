// https://github.com/rupa/z
const completionSpec: Fig.Spec = {
  name: "z",
  description: "CLI tool to jump around directories",
  args: {
    name: "directory",
    isVariadic: true,
    isOptional: true,
    generators: {
      script: "cat ${${ZSHZ_DATA:-${_Z_DATA:-${HOME}/.z}}:A}",
      postProcess: (out, ctx) => {
        const lines = out.split("\n").map((line) => {
          const [path, weight, time] = line.split("|");
          return {
            path,
            weight: Number(weight),
            time: Number(time),
          };
        });

        // filter for valid "directory" entries within the arguments
        const args = ctx.filter(
          (arg) => arg && arg !== "z" && !arg.startsWith("-")
        );

        // directory arg is variadic with each subsequent arg being an
        // additional filter. filtered will filter directories by all args.
        const filtered = lines.filter(({ path }) =>
          args.every((arg) => path.includes(arg))
        );

        return filtered.map(({ path, weight, time }) => {
          const splitPath = path.split("/");
          const name = splitPath[splitPath.length - 1];

          // arg is variadic but we don't want to suggest something
          // that's already been entered. This 'if' prevents redundant
          // suggestions.
          if (!args.includes(name)) {
            return {
              name,
              description: path,
              // Docs state max weight is 100 but this seems
              // to work regardless of any amount over that limit.
              // Fig should defer assigning priority to z.
              // 75 added to keep args above options.
              // NOTE: 9000 is the default max priority. If a custom value is set this will work if "custom_value <= 9000" but not otherwise
              priority: 75 + (weight * 25) / 9000,
            };
          }
        });
      },
    },
  },
  options: [
    {
      name: "-c",
      description:
        "Restrict matches to subdirectories of the current directory",
    },
    { name: "-e", description: "Echo the best match, don't cd" },
    { name: "-h", description: "Show a brief help message" },
    { name: "-l", description: "List only" },
    { name: "-r", description: "Match by rank only" },
    { name: "-t", description: "Match by recent access only" },
    {
      name: "-x",
      description: "Remove the current directory from the datafile",
    },
  ],
};

export default completionSpec;
