const completionSpec: Fig.Spec = {
  name: "nu",
  description: "Use the right package manage - upgrade",
  options: [
    {
      name: "-i",
      description:
        "Display the outdated packages before performing any upgrade",
    },
    {
      name: ["-h", "--help"],
      description: "Output usage information",
    },
  ],
};
export default completionSpec;
