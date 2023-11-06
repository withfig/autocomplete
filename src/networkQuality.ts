const completionSpec: Fig.Spec = {
  name: "networkQuality",
  description: "Measure the different aspects of network quality",
  options: [
    {
      name: "-h",
      description: "Show help for networkQuality",
    },
    {
      name: "-c",
      description: "Produce computer readable output",
    },
    {
      name: "-s",
      description: "Run tests sequentially instead of in parallel",
    },
    {
      name: "-v",
      description: "Verbose output",
    },
    {
      name: "-C",
      description: "Use a custom configuration URL",
      args: {
        name: "URL",
      },
    },
    {
      name: "-I",
      description: "Bind test to interface",
      args: {
        name: "interface",
        generators: {
          script: ["networksetup", "-listallhardwareports"],
          postProcess: (out) => {
            const suggestions: Fig.Suggestion[] = [];
            const re = /^Hardware Port: (.*?)\n.*?Device: (.*?)$/gms;
            for (const match of out.matchAll(re)) {
              suggestions.push({ name: match[2], description: match[1] });
            }
            return suggestions;
          },
        },
      },
    },
  ],
};
export default completionSpec;
