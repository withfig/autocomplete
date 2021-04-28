export const completion: Fig.Spec = {
  name: "artisan",
  description: "The stupid content tracker",
  generateSpec: async (context, executeShellCommand) => {
    if (true)
      return {
        name: "artisan",
        subcommands: [{ name: "abc" }, { name: "def" }],
      };
  },

  // subcommands: [
  //   {
  //     name: "checkout",
  //     description: "Switch branches or restore working tree files",

  //     // If a subcommand or option takes an argument, you must include the args prop, even if it's an empty object (like below)
  //     // If you want to build custom suggestions for arguments check out: https://withfig.com/docs/autocomplete/building-a-spec#making-advanced-suggestions
  //     args: {},
  //     options: [
  //       {
  //         name: ["-b"],
  //         description: "create and checkout a new branch",
  //         args: {
  //           name: "branch",
  //         },
  //       },
  //     ],
  //   },
  // ],
  // options: [
  //   {
  //     name: ["-v", "--version"],
  //     description: "View your current git version",
  //   },
  // ],
};
