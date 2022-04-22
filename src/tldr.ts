const generateTldrPages: Fig.Generator = {
  script: () => {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    const lang = locale.split("-")[0];

    const android = `~/.tldr/cache/pages.${lang}/android/`;
    const common = `~/.tldr/cache/pages.${lang}/common/`;
    const linux = `~/.tldr/cache/pages.${lang}/linux/`;
    const osx = `~/.tldr/cache/pages.${lang}/osx/`;
    const sunos = `~/.tldr/cache/pages.${lang}/sunos/`;
    const windows = `~/.tldr/cache/pages.${lang}/windows/`;
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

const completionSpec: Fig.Spec = {
  name: "tldr",
  description: "A simpler man page than the existing man page",
  args: { generators: generateTldrPages },
  options: [
    {
      name: "--update",
      description: "Download the latest pages and generate search index",
    },
    {
      name: "--clear-cache",
      description: "Delete the entire local cache",
    },
  ],
};
export default completionSpec;
