// TODO: this does not work on macos
const shells: Fig.Generator = {
  script: ["chsh", "-l"],
  postProcess: (output) => {
    if (output.startsWith("fatal:")) {
      return [];
    }
    return output.split("\n").map((shell) => {
      return { name: shell.replace("*", "").trim() };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "chsh",
  description: "Change your login shell",
  options: [
    {
      name: ["-s", "--shell"],
      description: "Specify login shell",
      args: {
        name: "shell",
        generators: shells,
      },
    },
    {
      name: ["-l", "--list-shells"],
      description: "Print list of shells and exit",
    },
    {
      name: ["-u", "-h", "--help"],
      description: "Print help message and exit",
    },
    {
      name: ["-v", "--version"],
      description: "Print version and exit",
    },
  ],
  args: {
    name: "username",
    description: "Target user",
    isOptional: true,
  },
};
export default completionSpec;
