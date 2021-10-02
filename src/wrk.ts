const completionSpec: Fig.Spec = {
  name: "wrk",
  description: "Wrk - a HTTP benchmarking tool",
  args: {
    name: "Url",
  },
  options: [
    {
      name: ["-c", "--c"],
      description: "Connections to keep open",
      args: {
        name: "Number",
      },
    },
    {
      name: ["-d", "--duration"],
      description: "Duration of test",
      args: {
        name: "Time",
      },
    },
    {
      name: ["-t", "--threads"],
      description: "Number of threads",
      args: {
        name: "Number",
      },
    },
    {
      name: ["-s", "--script"],
      description: "Load Lua script file",
      args: {
        name: "Script",
      },
    },
    {
      name: ["-H", "--header"],
      description: "Add header to request",
      args: {
        name: "Header",
      },
    },
    {
      name: "--latency",
      description: "Print latency statistics",
    },
    {
      name: "--timeout",
      description: "Socket/request timeout",
      args: {
        name: "Time",
      },
    },
    {
      name: ["-v", "--version"],
      description: "Print version details",
    },
    {
      name: ["-h", "--help"],
      description: "Output usage information",
    },
  ],
};

export default completionSpec;
