const completionSpec: Fig.Spec = {
  name: "httpy",
  description: "Programmable command-line HTTP client for the API",
  args: [
    {
      name: "URL",
      description:
        "The scheme defaults to 'http://' if the URL does not include one",
    },
    {
      name: "METHOD",
      isOptional: true,
      suggestions: ["GET", "POST", "PUT", "DELETE"],
      default: "GET",
      description:
        "The HTTP method to be used for the request (GET, POST, PUT, DELETE, ...)",
    },
  ],
  options: [
    {
      name: ["--exec", "-x"],
      description: "Execute httpy command",
    },
    {
      name: ["--status", "-S"],
      description: "Print only the response status",
    },
    {
      name: ["--header", "-H"],
      description: "Print only the response headers",
    },
    {
      name: ["--body", "-B"],
      description: "Print only the response body",
    },
    {
      name: ["--allow-redirect", "-r"],
      description: "Allow requests to be redirected",
    },
    {
      name: ["--verbose", "-V"],
      description: "Show request and response in verbose",
    },
    {
      name: ["--help", "-h"],
      description: "Show help for httpy",
    },
    {
      name: ["--version", "-v"],
      description: "Show version for httpy",
    },
  ],
};
export default completionSpec;
