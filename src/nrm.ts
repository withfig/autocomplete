import { dependenciesGenerator } from "./npm";

const completionSpec: Fig.Spec = {
  name: "nrm",
  description: "Use the right package manage - remove",
  options: [
    {
      name: "-g",
      description:
        "Operates in 'global' mode, so that packages are installed into the prefix folder instead of the current working directory",
    },
    {
      name: "-D",
      description: "Package will appear in your `devDependencies`",
    },
    {
      name: "-P",
      description: "Save package to your `peerDependencies`",
    },
    {
      name: "-O",
      description: "Save package to your `optionalDependencies`",
    },
    {
      name: "--frozen",
      description: "Don't generate a lockfile and fail if an update is needed",
    },
  ],
  args: {
    name: "package",
    generators: dependenciesGenerator,
    isVariadic: true,
  },
};
export default completionSpec;
