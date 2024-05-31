const completionSpec: Fig.Spec = {
  name: "sw_vers",
  description: "Print macOS version information",
  options: [
    {
      name: "-productName",
      description: "Print product name",
    },
    {
      name: "-productVersion",
      description: "Print product version",
    },
    {
      name: "-buildVersion",
      description: "Print build version",
    },
  ],
};

export default completionSpec;
