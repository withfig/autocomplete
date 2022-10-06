/*
 * Generators
 */

const availableSignalsGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>
): Fig.Generator => ({
  script: "trap -l",
  postProcess: (output) =>
    output.split(" ").map((signal) => ({
      name: signal,
    })),
});

const completionSpec: Fig.Spec = {
  name: "trap",
  description:
    "Automatically execute commands after receiving signals by processes or the operating system",
  options: [
    {
      name: ["--list-signals", "-l"],
      description: "Prints a list of signal names",
    },
    {
      name: ["--print", "-p"],
      description: "Prints all defined signal handlers",
    },
    {
      name: ["--help", "-h"],
      description: "Displays help about using this command",
    },
  ],
  args: [
    { name: "arg", isOptional: true },
    { name: "reason", generators: availableSignalsGenerator() },
  ],
};
export default completionSpec;
