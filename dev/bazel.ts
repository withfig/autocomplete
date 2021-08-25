const bazelBuildFiles: Fig.Generator = {
  script: `FILES=( $(find ./ -name BUILD) ); for f in $FILES; do echo "----$f"; cat "$f"; done`,
  // returns filepaths and contents in the form below, note the "----" to indicate the filepath
  // ----.//lib/BUILD
  // load("@rules_cc//cc:defs.bzl", "cc_library")

  // cc_library(
  //     name = "hello-time",
  //     srcs = ["hello-time.cc"],
  //     hdrs = ["hello-time.h"],
  //     visibility = ["//main:__pkg__"],
  // )

  postProcess: function (out) {
    const lines = out.split("\n");
    // return lines
    const targets = [];
    let currPath = "";
    for (let i = 0; i < lines.length; i++) {
      const isFilepath = lines[i].match("----.(.*)/BUILD");
      const isBazelTarget = lines[i].match('name = "(.*)"');
      if (isFilepath) {
        currPath = isFilepath[1] + ":";
      } else if (isBazelTarget) {
        targets.push({
          name: currPath + isBazelTarget[1],
          description: "bazel target",
          icon: "🎯",
          priority: 80,
        });
      }
    }
    return targets;
  },
};

const completionSpec: Fig.Spec = {
  name: "bazel",
  description: "Bazel the build system!",
  subcommands: [
    {
      name: "run",
      description: "Runs the specified target",
      args: {
        name: "BUILD file",
        generators: bazelBuildFiles,
      },
    },
    {
      name: "test",
      description: "Builds and runs the specified test targets",
      args: {
        name: "BUILD file",
        generators: bazelBuildFiles,
      },
    },
    {
      name: "build",
      description: "Builds the specified targets",
      args: {
        name: "BUILD file",
        generators: bazelBuildFiles,
      },
    },
  ],
};

export default completionSpec;
