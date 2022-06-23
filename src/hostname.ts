const completionSpec: Fig.Spec = {
  name: "hostname",
  description: "Set or print name of current host system",
  options: [
    {
      name: "-f",
      description: "Include domain information in the printed name",
    },
    {
      name: "-s",
      description: "Trim off any domain information from the printed name",
    },
    {
      name: "-d",
      description: "Only print domain information",
    },
  ],
  args: {
    name: "hostname",
    description: "The hostname to use for this machine",
  },
};
export default completionSpec;
