const listTargets: Fig.Generator = {
  script: `make -qp | awk -F':' '/^[a-zA-Z0-9][^$#\\/\\t=]*:([^=]|$)/ {split($1,A,/ /);for(i in A)print A[i]}' | sort -u`,
  postProcess: function (out) {
    const lines = out.split("\n");
    const targets = [];
    for (let i = 1; i < lines.length; i++) {
      targets.push({
        name: lines[i].trim(),
        description: "make target",
        icon: "🎯",
        priority: 80,
      });
    }
    return targets;
  },
};

export const completionSpec: Fig.Spec = {
  name: "make",
  args: {
    name: "target",
    generators: listTargets,
  },
  options: [
    {
      name: ["-j"],
      args: [{ name: "number" }, { name: "target", generators: listTargets }],
    },
    {
      name: ["--file"],
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["--directory"],
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["--always-make"],
      args: {
        name: "target",
        generators: listTargets,
      },
    },
    {
      name: ["--environment-overrides"],
      args: {
        name: "target",
        generators: listTargets,
      },
    },
  ],
};
