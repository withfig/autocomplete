// To learn more about Fig's autocomplete standard visit: https://fig.io/docs/autocomplete/building-a-spec#building-your-first-autocomplete-spec

// The below is a dummy example for git. Make sure to change the file name!
export const completion: Fig.Spec = {
  name: "jeanAt2",
  description: "The stupid content tracker",
  subcommands: [
    {
      name: "checkout",
      description: "Switch branches or restore working tree files",

      // If a subcommand or option takes an argument, you must include the args prop, even if it's an empty object (like below)
      // If you want to build custom suggestions for arguments check out: https://fig.io/docs/autocomplete/building-a-spec#making-advanced-suggestions
      args: {},
      options: [
        {
          name: ["-b"],
          description: "create and checkout a new branch",
          args: {
            name: "branch",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "View your current git version",
    },
  ],
};
