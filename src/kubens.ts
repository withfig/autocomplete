const completionSpec: Fig.Spec = {
  name: "kubens",
  description: "Switch between Kubernetes-namespaces",

  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for kubens",
    },
    {
      name: ["--current", "-c"],
      description: "Show current namespace",
    },
  ],
  args: {
    name: "namespace",

    generators: [
      {
        script: function (context) {
          // Script that removes the current namespace from the output, so it can be added in another generator
          return `kubens | grep -v $(kubens -c)`;
        },
        postProcess: (out) =>
          out.split("\n").map((item) => ({
            name: item,
            priority: 90,
            icon: "fig://icon?type=kubernetes",
          })) as Fig.Suggestion[],
      },
      {
        script: function (context) {
          return `kubens -c`;
        },
        postProcess: (out) => {
          const options: Fig.Suggestion[] = [
            {
              name: "-",
              priority: 85,
              description: "Switch to previous namespace in current context",
              icon: "fig://icon?type=asterisk",
            },
          ];

          if (!!out) {
            options.push({
              name: out,
              priority: 100,
              icon: "⭐️",
            });
          }

          return options;
        },
      },
    ],
    isOptional: true,
  },
};
export default completionSpec;
