/*
 * Certain shells output signals as "1) SIGHUP 2) SIGINT 3) SIGQUIT" (bash, zsh, ...)
 * Other shells output looks like "HUP INT QUIT" (fish, csh, ...)
 */
const re = /(\d+\)\s)?([\w-+]+)/g;

/*
 * Generators
 */

const availableSignalsGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>
): Fig.Generator => ({
  script: ["command", "kill", "-l"],
  postProcess: (output) =>
    [...output.matchAll(re)].map((signal) => ({
      name: signal[2],
    })),
});

const completionSpec: Fig.Spec = {
  name: "trap",
  description:
    "Automatically execute commands after receiving signals by processes or the operating system",
  options: [
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
    { name: "function name", isOptional: true },
    { name: "reason", generators: availableSignalsGenerator() },
  ],
};
export default completionSpec;
