import { npxSuggestions } from "./npx";

// Merge curated lists (currently only npx exports suggestions).
// If bunx/pnpx add their own in the future, they can be merged here too.
const curatedSuggestions: Fig.Suggestion[] = (
  npxSuggestions as Fig.Suggestion[]
).map((s) => {
  if (typeof s === "string") return { name: s, loadSpec: s };
  const name = Array.isArray(s.name) ? s.name[0] : s.name;
  return { ...s, ...(name && { loadSpec: name }) };
});

const completionSpec: Fig.Spec = {
  name: "nlx",
  description: "Download & execute a package binary with the correct agent",
  args: {
    name: "command",
    isCommand: true,
    description: "The package binary to run (e.g. vitest, tsc, prisma, next)",
    // Prefer curated CLI list, but also surface local node_modules/.bin executables
    generators: {
      script: [
        "bash",
        "-c",
        "until [[ -d node_modules/ ]] || [[ $PWD = '/' ]]; do cd ..; done; ls -1 node_modules/.bin/",
      ],
      postProcess: function (out) {
        const curated = curatedSuggestions.reduce((acc, cur) => {
          const name =
            typeof cur === "string"
              ? cur
              : Array.isArray(cur.name)
                ? cur.name[0]
                : cur.name;
          return name ? acc.concat(name) : acc;
        }, [] as string[]);
        return out
          .split("\\n")
          .filter((name) => !!name && !curated.includes(name))
          .map((name) => ({
            name,
            icon: "fig://icon?type=command",
            loadSpec: name,
          }));
      },
    },
    suggestions: curatedSuggestions,
    isOptional: true,
  },
  options: [
    {
      name: "-C",
      description: "Change directory before running the command",
      args: { name: "path", template: "folders" },
    },
    { name: ["-h", "--help"], description: "Show help" },
    { name: ["-v", "--version"], description: "Show version" },
  ],
};

export default completionSpec;
