const completionSpec: Fig.Spec = {
  name: "node",
  description: "Run the node interpreter",
  args: {
    name: "node script",
    isScript: true,
    generators: {
      template: "filepaths",
      filterTemplateSuggestions: function (paths) {
        return paths
          .filter((file) => {
            return file.name.match(/.*\.m?js/g) || file.name.endsWith("/");
          })
          .map((file) => {
            const isJsFile = file.name.match(/.*\.m?js/g);

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

export default completionSpec;
