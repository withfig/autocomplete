const getServices: Fig.Generator = {
  script: (context) => {
    if (context.includes("-f")) {
      const index = context.indexOf("-f");
      return `docker-compose -f ${context[index + 1]} config --services`;
    }
    return "docker-compose config --services";
  },
  splitOn: "\n",
};

const completionSpec: Fig.Spec = {
  name: "port",
  description: "Print the public port for a port binding.",
  options: [
    {
      name: ["--protocol"],
      description: "tcp or udp [default: tcp]",
      args: {
        name: "Protocol",
        suggestions: ["tcp", "udp"],
      },
    },
    {
      name: ["--index"],
      description:
        "index of the container if there are multiple instances of a service [default: 1]",
      args: {
        name: "index",
      },
    },
  ],
};

export default completionSpec;
