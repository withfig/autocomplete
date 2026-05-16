const tldrRc = `~/.tldrc/tldr`;
const android = `${tldrRc}/pages/android/`;
const common = `${tldrRc}/pages/common/`;
const linux = `${tldrRc}/pages/linux/`;
const osx = `${tldrRc}/pages/osx/`;
const sunos = `${tldrRc}/pages/sunos/`;
const windows = `${tldrRc}/pages/windows/`;

const isMarkDownRegex = new RegExp(/^.*\.md$/);

const wholeTldrPages: Fig.Generator = {
  custom: async (tokens, executeShellCommand, context) => {
    const { stdout } = await executeShellCommand({
      command: "ls",
      // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
      args: [
        "-Al",
        ...[android, common, linux, osx, sunos, windows].map((path) =>
          path.replace(/^~/, context.environmentVariables["HOME"])
        ),
      ],
    });

    return stdout
      .split("\n")
      .filter((line) => isMarkDownRegex.test(line))
      .map((line) => {
        return {
          name: line.split(" ").at(-1).slice(0, -3),
          description: "Tldr page",
          icon: "fig://icon?type=string",
        };
      });
  },
};

const linuxTldrPages: Fig.Generator = {
  script: ["bash", "-c", `command ls -Al ${linux} 2>/dev/null`],
  postProcess: (out) => {
    return out
      .split("\n")
      .filter((line) => isMarkDownRegex.test(line))
      .map((line) => {
        return {
          name: line.split(" ").at(-1).slice(0, -3),
          description: "Tldr page",
          icon: "fig://icon?type=string",
        };
      });
  },
};

const osxTldrPages: Fig.Generator = {
  script: ["bash", "-c", `command ls -l ${osx} 2>/dev/null`],
  postProcess: (out) => {
    return out
      .split("\n")
      .filter((line) => isMarkDownRegex.test(line))
      .map((line) => {
        return {
          name: line.split(" ").at(-1).slice(0, -3),
          description: "Tldr page",
          icon: "fig://icon?type=string",
        };
      });
  },
};

const sunosTldrPages: Fig.Generator = {
  script: ["bash", "-c", `command ls -l ${sunos} 2>/dev/null`],
  postProcess: (out) => {
    return out
      .split("\n")
      .filter((line) => isMarkDownRegex.test(line))
      .map((line) => {
        return {
          name: line.split(" ").at(-1).slice(0, -3),
          description: "Tldr page",
          icon: "fig://icon?type=string",
        };
      });
  },
};

const platformSuggestions = ["linux", "osx", "sunos", "windows", "common"];

const completionSpec: Fig.Spec = {
  name: "tldr",
  description: "A simpler man page than the existing man page",
  args: { generators: wholeTldrPages },
  options: [
    {
      name: ["-h", "--help"],
      description: "Display help for command",
    },
    {
      name: ["-s", "--search"],
      description: "Search all pages for the query",
      args: {
        name: "query",
      },
    },
    {
      name: "--linux",
      description: "Show command page for Linux",
      args: { generators: linuxTldrPages },
    },
    {
      name: "--osx",
      description: "Show command page for OSX",
      args: { generators: osxTldrPages },
    },
    {
      name: "--sunos",
      description: "Show command page for SunOS",
      args: { generators: sunosTldrPages },
    },
    {
      name: ["-l", "--list"],
      description: "Show all pages for current platform",
    },
    {
      name: ["-u", "--update"],
      description: "Download the latest pages and generate search index",
    },
    {
      name: ["-c", "--clear-cache"],
      description: "Delete the entire local cache",
    },
    {
      name: ["--platform", "-p"],
      description: "Select platform",
      args: {
        name: "platform",
        suggestions: platformSuggestions,
      },
    },
  ],
};
export default completionSpec;
