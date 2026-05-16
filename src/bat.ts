const completionSpec: Fig.Spec = {
  name: "bat",
  description: "A cat(1) clone with syntax highlighting and Git integration",
  options: [
    {
      name: ["-A", "--show-all"],
      description: "Show non-printable characters",
    },
    {
      name: ["-p", "--plain"],
      description: "Show plain style, no decorations",
    },
    {
      name: ["-l", "--language"],
      description: "Explicitly set the language for syntax highlighting",
      args: {
        name: "<language>",
        generators: {
          script: ["bat", "--list-languages"],
          postProcess: function (out) {
            // unpack 2-dimension array
            return out
              .split("\n")
              .map((outLine) => {
                const langLine = outLine.split(":");
                const descriptionString = langLine[0].trim();
                return outLine
                  .replace(/\:/g, ",")
                  .split(",")
                  .map((item) => {
                    return {
                      name: item.trim(),
                      description: descriptionString + " language",
                    };
                  });
              })
              .flat(2);
          },
        },
      },
    },
    {
      name: ["-H", "--highlight-line"],
      description: "Highlight the specified line ranges",
      args: {
        name: "<N:M> ",
        description: "Range of line",
      },
    },
    {
      name: "--file-name",
      description:
        "Specify the name to display for a file. Useful when piping data to bat from STDIN when bat does not otherwise know the filename",
      args: {
        isVariadic: true,
        template: "filepaths",
        description: "File(s)",
      },
    },
    {
      name: ["-d", "--diff"],
      description:
        "Show lines that have been added/removed/modified with respect to the Git index",
    },
    {
      name: "--diff-context",
      description:
        "Include N lines of context around added/removed/modified lines when using '--diff'",
      args: {
        name: "<N> ",
        description: "Lines of context",
      },
    },
    {
      name: "--tabs",
      description:
        "Set the tab width to T spaces. Use a width of 0 to pass tabs through directly",
      args: {
        name: "<T> ",
        description: "Spaces of tab width",
      },
    },
    {
      name: "--wrap",
      description: "Specify when to use colored output",
      args: {
        name: "<mode>",
        generators: {
          script: [
            "bash",
            "-c",
            "bat --wrap unknow 2>&1 >/dev/null | grep possible",
          ],
          postProcess: function (out) {
            return out
              .trim()
              .split("]")[0]
              .split("[")[1]
              .split(":")[1]
              .split(",")
              .map((mode) => {
                return {
                  name: mode.trim(),
                  description: "Specify when to use colored output",
                };
              });
          },
        },
      },
    },
    {
      name: "--terminal-width",
      description:
        "Explicitly set the width of the terminal instead of determining it automatically",
      args: {
        name: "<width> ",
        description: "Width to wrap",
      },
    },
    {
      name: ["-n", "--number"],
      description: "Show line numbers, no other decorations",
    },
    {
      name: "--color",
      description: "Specify when to use colored output",
      args: {
        name: "<when>",
        generators: {
          script: [
            "bash",
            "-c",
            "bat --color unknow  2>&1 >/dev/null | grep possible",
          ],
          postProcess: function (out) {
            return out
              .trim()
              .split("]")[0]
              .split("[")[1]
              .split(":")[1]
              .split(",")
              .map((mode) => {
                return {
                  name: mode.trim(),
                  description: "Specify when to use colored output",
                };
              });
          },
        },
      },
    },
    {
      name: "--italic-text",
      description:
        "Specify when to use ANSI sequences for italic text in the output",
      args: {
        name: "<when>",
        generators: {
          script: [
            "bash",
            "-c",
            "bat --italic-text unknow 2>&1 >/dev/null | grep possible",
          ],
          postProcess: function (out) {
            return out
              .trim()
              .split("]")[0]
              .split("[")[1]
              .split(":")[1]
              .split(",")
              .map((mode) => {
                return {
                  name: mode.trim(),
                  description:
                    "Specify when to use ANSI sequences for italic text in the output",
                };
              });
          },
        },
      },
    },
    {
      name: "--decorations",
      description:
        "Specify when to use the decorations that have been specified via '--style'",
      args: {
        name: "<when>",
        generators: {
          script: [
            "bash",
            "-c",
            "bat --decorations unknow 2>&1 >/dev/null | grep possible",
          ],
          postProcess: function (out) {
            return out
              .trim()
              .split("]")[0]
              .split("[")[1]
              .split(":")[1]
              .split(",")
              .map((mode) => {
                return {
                  name: mode.trim(),
                  description:
                    "Specify when to use the decorations that have been specified via '--style'",
                };
              });
          },
        },
      },
    },
    {
      name: ["-f", "--force-colorization"],
      description: "Alias for '--decorations=always --color=always'",
    },
    {
      name: "--paging",
      description: "Specify when to use the pager",
      args: {
        name: "<when>",
        generators: {
          script: [
            "bash",
            "-c",
            "bat --paging unknow  2>&1 >/dev/null | grep possible",
          ],
          postProcess: function (out) {
            return out
              .trim()
              .split("]")[0]
              .split("[")[1]
              .split(":")[1]
              .split(",")
              .map((mode) => {
                return {
                  name: mode.trim(),
                  description: "Specify when to use the pager",
                };
              });
          },
        },
      },
    },
    {
      name: "--pager",
      description: "Determine which pager is used",
      args: {
        name: "<command>",
        description: "Command to pager",
      },
    },
    {
      name: ["-m", "--map-syntax"],
      description: "Map a glob pattern to an existing syntax name",
      args: {
        name: "<glob:syntax>",
        description: "Full path or the filename:language that highlighted",
      },
    },
    {
      name: "--ignored-suffix",
      description: "Ignore extension",
      args: {
        name: "<ignored-suffix>",
        description: "Extension",
      },
    },
    {
      name: "--theme",
      description: "Set the theme for syntax highlighting",
      args: {
        name: "<theme>",
        generators: {
          script: ["bat", "--list-themes"],
          postProcess: function (out) {
            return out.split("\n").map((theme) => {
              return { name: theme, description: "theme: " + theme };
            });
          },
        },
      },
    },
    {
      name: "--list-themes",
      description: "Display a list of supported themes for syntax highlighting",
    },
    {
      name: "--style",
      description: "Display a list of supported themes for syntax highlighting",
    },
    {
      name: ["-r", "--line-range"],
      description: "Only print the specified range of lines for each file",
      args: {
        name: "<N:M> ",
        description: "Range of line",
      },
    },
    {
      name: ["-L", "--list-languages"],
      description:
        "Display a list of supported languages for syntax highlighting",
    },
    {
      name: ["-u", "--unbuffered"],
      description:
        "Make output unbuffered (exists for POSIX-compliance reasons and is simply ignored)",
    },
    {
      name: "--diagnostic",
      description: "Show diagnostic information for bug reports",
    },
    {
      name: "--acknowledgements",
      description: "Show acknowledgements",
    },
    {
      name: ["-h", "--help"],
      description: "Print help message",
    },
    {
      name: ["-V", "--version"],
      description: "Show version information",
    },
  ],
  args: {
    isVariadic: true,
    template: "filepaths",
    description: "File(s)",
  },
};

export default completionSpec;
