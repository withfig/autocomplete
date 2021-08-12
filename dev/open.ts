const appGenerator = (path: string): Fig.Generator => ({
  script: `ls -1 ${path}`,
  postProcess: (out) => {
    return out.split("\n").map((line) => ({
      name: line,
      icon: `fig://${path}/${line}`,
      priority: line.endsWith(".app") && 76,
    }));
  },
});

const completionSpec: Fig.Spec = {
  name: "open",
  description: "open files using default application",
  options: [
    {
      name: "-a",
      description: "Specify the application to use for opening the file",
      args: {
        name: "Application",
        generators: [
          appGenerator("/Applications"),
          appGenerator("~/Applications"),
        ],
      },
    },
    {
      name: "-b",
      description:
        "Specify the bundle identifier of the app to use to open the file",
      args: {
        name: "Bundle Identifier",
      },
    },
    {
      name: "-D",
      description: "Reveals the enclosing folder in finder",
    },
    {
      name: "-e",
      description: "Opens the file with /Applications/TextEdit",
    },
    {
      name: "-t",
      description: "Open the file with the default text editor",
    },
    {
      name: "-f",
      description:
        "Read input from standard input and open the results in the default text editor",
    },
    {
      name: "-F",
      description: "Opens the application without restoring windows",
    },
    {
      name: "-W",
      description: "Waits until the applications exit",
    },
    {
      name: "-R",
      description: "Reveals the file(s) in the Finder instead of opening them",
    },
    {
      name: "-n",
      description:
        "Open a new instance of the application(s) even if one is already running",
    },
    {
      name: "-g",
      description: "Do not bring the application to the foreground",
    },
    {
      name: "-h",
      description:
        "Searches header locations for a header whose name matches the given string and then opens it",
    },
    {
      name: "--args",
      description:
        "All remaining arguments are passed to the opened application in the argv parameter to main().  These arguments are not opened or interpreted by the open tool",
      args: {
        name: "Arguments",
        isVariadic: true,
      },
    },
  ],
  args: {
    template: ["filepaths", "folders"],
    isVariadic: true,
  },
};

export default completionSpec;
