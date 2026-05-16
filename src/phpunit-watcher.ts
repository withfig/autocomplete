const tests: Fig.Generator = {
  script: ["phpunit", "--list-tests"],
  postProcess: function (out) {
    if (out.startsWith("fatal:")) {
      return [];
    }

    return out
      .split("\n")
      .filter((line) => line.indexOf("::") > 0)
      .map((line) => {
        return {
          name: line.substring(line.indexOf("::") + 2, line.length),
          icon: "fig://icon?type=php",
          description: line.substring(line.indexOf("::") + 2, line.length),
        };
      });
  },
};

const completionSpec: Fig.Spec = {
  name: "phpunit-watcher",
  description: "Automatically rerun PHPUnit tests when source code changes",
  subcommands: [
    {
      name: "watch",
      description:
        "This will run the tests and rerun them whenever a file in the app, src or tests directory is modified",
      options: [
        {
          name: "--filter",
          description: "Watch a specific test",
          args: {
            generators: tests,
            name: "filter",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
