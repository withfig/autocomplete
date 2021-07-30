export const completionSpec: Fig.Spec = {
  name: "node",
  description: "Run the node interpretor",
  args: {
    name: "node script",
    isScript: true,
    generators: {
      template: "filepaths",
      filterTemplateSuggestions: function (paths) {
        return paths
          .filter((file) => {
            if (typeof file.name === "string") {
              return file.name.match(/.*\.m?js/g) || file.name.endsWith("/");
            }
            return false;
          })
          .map((file) => {
            const isJsFile =
              typeof file.name === "string" && file.name.match(/.*\.m?js/g);

            return {
              ...file,
              priority: isJsFile && 76,
            };
          });
      },
    },
  },
  options: [
    {
      name: ["-e", "--eval=..."],
      insertValue: "-e '{cursor}'",
      description: "evaluate script",
      args: {},
    },
    {
      name: ["-p", "--print"],
      description: "evaluate script and print result",
    },
    {
      name: ["-c", "--check"],
      description: "syntax check script without executing",
    },
    {
      name: ["-v", "--version"],
      description: "print Node.js version",
    },
    {
      name: ["-i", "--interactive"],
      description:
        "always enter the REPL even if stdin does not appear to be a terminal",
    },
  ],
};
