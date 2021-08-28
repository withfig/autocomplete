import * as Fig from "../schemas";

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
      description: "Evaluate script",
      args: {},
    },
    {
      name: ["-p", "--print"],
      description: "Evaluate script and print result",
    },
    {
      name: ["-c", "--check"],
      description: "Syntax check script without executing",
    },
    {
      name: ["-v", "--version"],
      description: "Print Node.js version",
    },
    {
      name: ["-i", "--interactive"],
      description:
        "Always enter the REPL even if stdin does not appear to be a terminal",
    },
  ],
};

export default completionSpec;
