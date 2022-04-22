const wholeTldrPages: Fig.Generator = {
  script: () => {
    const android = `~/.tldr/cache/pages/android/`;
    const common = `~/.tldr/cache/pages/common/`;
    const linux = `~/.tldr/cache/pages/linux/`;
    const osx = `~/.tldr/cache/pages/osx/`;
    const sunos = `~/.tldr/cache/pages/sunos/`;
    const windows = `~/.tldr/cache/pages/windows/`;
    return `{
      ls -l ${android} 2>/dev/null | tr -s ' ' | cut -d ' ' -f 9 &
      ls -l ${common} 2>/dev/null | tr -s ' ' | cut -d ' ' -f 9 &
      ls -l ${linux} 2>/dev/null | tr -s ' ' | cut -d ' ' -f 9 &
      ls -l ${osx} 2>/dev/null | tr -s ' ' | cut -d ' ' -f 9 &
      ls -l ${sunos} 2>/dev/null | tr -s ' ' | cut -d ' ' -f 9 &
      ls -l ${windows} 2>/dev/null | tr -s ' ' | cut -d ' ' -f 9;
    } | cat`;
  },
  postProcess: (out) => {
    return out
      .split("\n")
      .filter((line) => {
        return !(line.length == 0 || line.startsWith("/"));
      })
      .map((line) => {
        return {
          name: line.slice(0, -3),
          description: "Tldr page",
          icon: "fig://icon?type=string",
        };
      });
  },
};

const linuxTldrPages: Fig.Generator = {
  script: () => {
    const linux = `~/.tldr/cache/pages/linux/`;
    return `{
      ls -l ${linux} 2>/dev/null | tr -s ' ' | cut -d ' ' -f 9
    } | cat`;
  },
  postProcess: (out) => {
    return out
      .split("\n")
      .filter((line) => {
        return !(line.length == 0 || line.startsWith("/"));
      })
      .map((line) => {
        return {
          name: line.slice(0, -3),
          description: "Tldr page",
          icon: "fig://icon?type=string",
        };
      });
  },
};

const osxTldrPages: Fig.Generator = {
  script: () => {
    const osx = `~/.tldr/cache/pages/osx/`;
    return `{
      ls -l ${osx} 2>/dev/null | tr -s ' ' | cut -d ' ' -f 9
    } | cat`;
  },
  postProcess: (out) => {
    return out
      .split("\n")
      .filter((line) => {
        return !(line.length == 0 || line.startsWith("/"));
      })
      .map((line) => {
        return {
          name: line.slice(0, -3),
          description: "Tldr page",
          icon: "fig://icon?type=string",
        };
      });
  },
};

const sunosTldrPages: Fig.Generator = {
  script: () => {
    const sunos = `~/.tldr/cache/pages/sunos/`;
    return `{
      ls -l ${sunos} 2>/dev/null | tr -s ' ' | cut -d ' ' -f 9
    } | cat`;
  },
  postProcess: (out) => {
    return out
      .split("\n")
      .filter((line) => {
        return !(line.length == 0 || line.startsWith("/"));
      })
      .map((line) => {
        return {
          name: line.slice(0, -3),
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
