const completionSpec: Fig.Spec = {
  name: "man",
  description: "format and display the on-line manual pages",
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
              description: "man page",
              icon: "fig://icon?type=string",
            };
          });
      },
    },
  },
};

export default completionSpec;
