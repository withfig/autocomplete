const completionSpec: Fig.Spec = {
  name: "mix",
  description: "Elixir Build Tool",
  generateSpec: async (tokens, executeShellCommand) => {
    var out = await executeShellCommand("mix help");
    let subcommands = [];

    try {
      const rows = out.split("\n");
      subcommands = rows
        .filter((row) => row.startsWith("mix"))
        .map((row) => {
          const split = row.split("#");
          const command = split[0].replace(/^(mix)/, "").trim();
          const description = split[1].trim();

          return {
            name: command,
            description,
          };
        });
    } catch (err) {
      //
    }

    return {
      name: "artisan",
      debounce: true,
      subcommands,
    };
  },
};

export default completionSpec;
