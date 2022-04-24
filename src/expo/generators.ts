export const _gen: Record<string, Fig.Generator> = {
  npm: {
    script(context) {
      if (context[context.length - 1] === "") return "";
      const searchTerm = context[context.length - 1];
      return `curl -s -H "Accept: application/json" "https://api.npms.io/v2/search?q=${searchTerm}&size=20"`;
    },
    postProcess(script: string) {
      try {
        const results: {
          package: {
            name: string;
            description: string;
          };
          searchScore: number;
        }[] = JSON.parse(script).results;
        return results.map((item) => ({
          name: item.package.name,
          description: item.package.description,
        })) as Fig.Suggestion[];
      } catch (e) {
        return [];
      }
    },
  },
  "xcode-configuration": {
    script: "xcodebuild -project ios/*.xcodeproj -list -json",
    postProcess: (script: string) =>
      JSON.parse(script).project.configurations.map((name) => ({ name })),
  },
  "xcode-scheme": {
    script: "xcodebuild -project ios/*.xcodeproj -list -json",
    postProcess: (script: string) =>
      JSON.parse(script).project.schemes.map((name) => ({ name })),
  },
  "xcode-devices": {
    script: "xcrun xctrace list devices",
    postProcess: (script: string) =>
      script
        .split("\n")
        .filter((item) => !item.match(/^=/))
        .filter(Boolean)
        .map((item) => item.split(/(.*?) (\(([0-9.]+)\) )?\(([0-9A-F-]+)\)/i))
        // filter catalyst
        .filter((item: string[] | null) => !!item?.[3])
        .map(([, name, , osVersion, udid]) => ({
          displayName: `${name.trim()} (${osVersion})`,
          name: udid,
        })),
  },
  "max-workers": {
    script: "sysctl -n hw.ncpu",
    postProcess: (script: string) => {
      const count = Number(script);
      return Array.from({ length: count }, (_, i) => {
        const v = count - i;
        return {
          priority: v,
          name: String(v),
        };
      });
    },
  },
};

export default {};
