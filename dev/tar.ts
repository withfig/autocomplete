import * as Fig from "../schemas";

const completionSpec: Fig.Spec = {
  name: "tar",
  description: "Manipulating archive files",
  args: {
    isVariadic: true,
    template: "folders",
  },
  options: [
    {
      name: ["-c", "--create"],
      description: "Create a new archive",
      args: {
        isVariadic: true,
        template: "folders",
      },
    },
    {
      name: ["-t", "--list"],
      description: "List archive contents",
      args: {
        generators: {
          script: "ls -1 | grep '.tar'",
          splitOn: "\n",
        },
      },
    },
    {
      name: ["-x", "--extract"],
      description: "Extract to disk",
      args: {
        generators: {
          script: "ls -1 | grep '.tar'",
          splitOn: "\n",
        },
      },
    },
    { name: ["-h", "--help"], description: "Help" },
    { name: "--version", description: "Version" },
    {
      name: "--wildcards",
      args: { name: "pattern", description: "Ex: *.html" },
    },
  ],
};

export default completionSpec;
