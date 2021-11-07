const completionSpec: Fig.Spec = {
  name: "nu",
  description: "Use the right package manage - upgrade",
  options: [
    {
      name: "-i",
      description:
        "Display the outdated packages before performing any upgrade",
    },
  ],
};
export default completionSpec;
