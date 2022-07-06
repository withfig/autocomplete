// https://github.com/rupa/z
const completionSpec: Fig.Spec = {
  name: "z",
  description: "CLI tool to jump around directories",
  args: {
    name: "regex",
    isVariadic: true,
    isOptional: true,
    // Generate a completion for the given argument, via zoxide CLI.
    generators: {
        script: context => {
          const query = context[context.length - 1]
          return `zoxide query -l ${query}`
        },
        postProcess: out => {
          return out.split("\n").map(fullPath => {
            const homeRegex = /\/users\/\w+/i

            const shortPath = fullPath.replace(homeRegex, '~') // .split('/').slice(3).join('/')

            return {
              name: shortPath,
              description: fullPath,
              displayName: shortPath
            };
          });
        }
      }
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
