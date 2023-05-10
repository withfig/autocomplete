const completionSpec: Fig.Spec = {
  name: "sl",
  description:
    "A highly advanced animation program for curing your bad habit of mistyping",
  options: [
    {
      name: "-a",
      description: "An accident is occurring; people cry for help",
    },
    { name: "-l", description: "Little version" },
    {
      name: "-F",
      description: "It flies like the galaxy express 999",
    },
    {
      name: "-c",
      description: "C51 appears instead of D51",
    },
  ],
  // Only uncomment if sl takes an argument
  // args: {}
};
export default completionSpec;
