const completionSpec: Fig.Spec = {
  name: "whois",
  args: {
    name: "name",
  },
  description: "client for the whois directory service",
  options: [
    { name: ["-H", "-p", "PORT"], description: "Connect to PORT" },
    { name: "--verbose", description: "Be verbose" },
    { name: "--help", description: "Display online help" },
  ],
};

export default completionSpec;
