const completionSpec: Fig.Spec = {
  name: "kubectx",
  description: "Switch between Kubernetes-contexts",
  additionalSuggestions: [
    {
      name: "-",
      priority: 85,
      description: "Switch to previous context",
      icon: "fig://icon?type=asterisk",
    },
  ],
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for kubectx",
    },
    {
      name: ["--current", "-c"],
      description: "Show current context",
    },
    {
      name: ["--unset", "-u"],
      description: "Unset the current context",
    },
    {
      name: "-d",
      description: "Delete context",
      isDangerous: true,
      args: {
        name: "context",
        isVariadic: true,
        generators: {
          script: ["kubectx"],
          postProcess: (out) => {
            const contexts = out.split("\n").map((item) => ({
              name: item,
              priority: 95,
              icon: "fig://icon?type=kubernetes",
            }));

            return [
              {
                name: ".",
                description: "Delete current context",
                priority: 90,
                icon: "fig://icon?type=asterisk",
              },
              ...contexts,
            ] as Fig.Suggestion[];
          },
        },
      },
    },
  ],
  args: {
    name: "context",
    generators: [
      {
        script: ["bash", "-c", "kubectx | grep -v $(kubectx -c)"],
        postProcess: (out) =>
          out.split("\n").map((item) => ({
            name: item,
            priority: 90,
            icon: "fig://icon?type=kubernetes",
          })) as Fig.Suggestion[],
      },
      {
        script: ["kubectx", "-c"],
        postProcess: (out) => {
          return !out
            ? []
            : [
                {
                  name: out,
                  priority: 100,
                  icon: "⭐️",
                },
              ];
        },
      },
    ],
    isOptional: true,
  },
};
export default completionSpec;
