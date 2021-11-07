import { npmSearchGenerator } from "./npm";

const completionSpec: Fig.Spec = {
  name: "ni",
  description: "Use the right package manager - install",
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
    {
      name: "-C",
      description: "Change directory",
      args: [
        {
          name: "directory",
          description: "The directory to move",
          template: "folders",
        },
        {
          name: "target",
          description: "The target directory",
          template: "folders",
        },
      ],
    },
  ],
  args: {
    name: "package",
    generators: npmSearchGenerator,
    debounce: true,
    isVariadic: true,
  },
};
export default completionSpec;
