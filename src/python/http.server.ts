const completionSpec: Fig.Spec = {
  name: "http.server",
  description: "",
  options: [
    {
      name: ["-d", "--directory"],
      description: "Choose the directory to initiate the server from",
      args: {
        template: "folders",
      },
    },
    {
      name: ["-b", "--bind"],
      description: "Bind to a specific IP address",
      args: {
        name: "IP Address",
        description: "E.g. 127.0.0.1",
      },
    },
    {
      name: "--cgi",
      description: "Enable the CGIHTTPRequestHandler",
    },
  ],
  // Only uncomment if http.server takes an argument
  args: {
    name: "port",
    description: "Port number",
  },
};

export default completionSpec;
