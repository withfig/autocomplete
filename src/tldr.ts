const android = `~/.tldr/cache/pages/android/`;
const common = `~/.tldr/cache/pages/common/`;
const linux = `~/.tldr/cache/pages/linux/`;
const osx = `~/.tldr/cache/pages/osx/`;
const sunos = `~/.tldr/cache/pages/sunos/`;
const windows = `~/.tldr/cache/pages/windows/`;

const isMarkDownRegex = new RegExp(/^.*\.md$/);

const wholeTldrPages: Fig.Generator = {
  script: () => {
    return `ls -Al ${android} ${common} ${linux} ${osx} ${sunos} ${windows} 2>/dev/null`;
  },
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

const linuxTldrPages: Fig.Generator = {
  script: () => {
    return `ls -Al ${linux} 2>/dev/null`;
  },
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
  script: () => {
    return `ls -l ${osx} 2>/dev/null`;
  },
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
  script: () => {
    return `ls -l ${sunos} 2>/dev/null`;
  },
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
      name: ["-a", "--list-all"],
      description: "Show all available pages",
    },
    {
      name: "--random",
      description: "Show a page at random",
    },
    {
      name: "--random-example",
      description: "Show a single random example",
    },
    {
      name: ["-m", "--markdown"],
      description: "Show the original markdown format page",
      args: { generators: wholeTldrPages },
    },
    {
      name: ["-u", "--update"],
      description: "Download the latest pages and generate search index",
    },
    {
      name: ["-c", "--clear-cache"],
      description: "Delete the entire local cache",
    },
  ],
};
export default completionSpec;
