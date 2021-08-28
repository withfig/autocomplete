import * as Fig from "../schemas";

const completionSpec: Fig.Spec = {
  name: "man",
  description: "Format and display the on-line manual pages",
  args: {
    generators: {
      /* `man -w` lists all the directories in the manpath */
      script:
        "ls -1 $(man -w | sed 's#:#/man1 #g') | cut -f 1 -d . | sort | uniq",
      postProcess: (out) => {
        return out
          .split("\n")
          .filter((line) => {
            return !(line.length == 0 || line.startsWith("/"));
          })
          .map((line) => {
            return {
              name: line,
              description: "Man page",
              icon: "fig://icon?type=string",
            };
          });
      },
    },
  },
};

export default completionSpec;
