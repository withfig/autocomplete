export const generateApps = (unquotedPath: string): Fig.Generator => ({
  cache: { strategy: "stale-while-revalidate" },
  script: [
    "mdfind",
    "kMDItemContentTypeTree=com.apple.application-bundle",
    "-onlyin",
    unquotedPath,
  ],
  postProcess: (out) => {
    return out.split("\n").map((path) => {
      const basename = path.slice(path.lastIndexOf("/") + 1);
      return {
        name: basename,
        description: path,
        icon: `fig://path/${path}`,
        priority: path.endsWith(`/Applications/${basename}`)
          ? 80
          : path.startsWith("/Applications")
            ? 76
            : 50,
      };
    });
  },
});

export const generateBundleIds = (unquotedPath: string): Fig.Generator => ({
  scriptTimeout: 15000,
  cache: { strategy: "stale-while-revalidate" },
  script: [
    "bash",
    "-c",
    `mdfind kMDItemContentTypeTree=com.apple.application-bundle -onlyin ${unquotedPath} | while read line; do echo $(mdls -name kMDItemCFBundleIdentifier -r "$line") $line; done`,
  ],
  postProcess: (out) => {
    const ids = new Map(
      out.split("\n").map((line) => {
        const sep = line.indexOf(" ");
        return [line.slice(0, sep), line.slice(sep + 1)] as const;
      })
    );
    ids.delete("(null)");
    const suggestions: Fig.Suggestion[] = [];
    for (const [id, path] of ids.entries()) {
      suggestions.push({
        name: id,
        description: path,
        icon: `fig://${path}`,
      });
    }
    return suggestions;
  },
});

const completionSpec: Fig.Spec = {
  name: "open",
  description: "Open files, apps, or URLs using default application",
  options: [
    {
      name: "-a",
      description: "Specify the application to use for opening the file",
      args: {
        name: "Application",
        generators: generateApps("/"),
      },
    },
    {
      name: "-b",
      description:
        "Specify the bundle identifier of the app to use to open the file",
      args: {
        name: "Bundle Identifier",
        generators: generateBundleIds("/"),
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
      name: ["-F", "--fresh"],
      description: "Opens the application without restoring windows",
    },
    {
      name: ["-W", "--wait-apps"],
      description: "Waits until the applications exit",
    },
    {
      name: ["-R", "--reveal"],
      description: "Reveals the file(s) in the Finder instead of opening them",
    },
    {
      name: ["-n", "--new"],
      description:
        "Open a new instance of the application(s) even if one is already running",
    },
    {
      name: ["-j", "--hide"],
      description: "Launches the app hidden",
    },
    {
      name: ["-g", "--background"],
      description: "Do not bring the application to the foreground",
    },
    {
      name: ["-h", "--header"],
      description:
        "Searches header locations for a header whose name matches the given string and then opens it",
    },
    {
      name: "-s",
      description:
        "For -h, the SDK to use; if supplied, only SDKs whose names contain the argument value are searched",
      args: {
        name: "partial SDK name",
      },
    },
    {
      name: ["-u", "--url"],
      description: "Open this URL, even if it matches exactly a filepath",
      args: {
        name: "URL",
      },
    },
    {
      name: ["-i", "--stdin"],
      description:
        "Launches the application with stdin connected to PATH; defaults to /dev/null",
      args: {
        name: "PATH",
        template: "filepaths",
        default: "/dev/null",
      },
    },
    {
      name: ["-o", "--stdout"],
      description:
        "Launches the application with /dev/stdout connected to PATH",
      args: {
        name: "PATH",
        template: "filepaths",
        default: "/dev/null",
      },
    },
    {
      name: "--stderr",
      description:
        "Launches the application with /dev/stderr connected to PATH",
      args: {
        name: "PATH",
        template: "filepaths",
        default: "/dev/null",
      },
    },
    {
      name: "--env",
      description:
        "Add an enviroment variable to the launched process, where VAR is formatted AAA=foo",
      isRepeatable: true,
      args: {
        name: "VAR",
      },
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
