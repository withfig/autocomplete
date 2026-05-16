import { storybookCommonOptions } from "./start-storybook";

const completionSpec: Fig.Spec = {
  name: "build-storybook",
  description: "Storybook build CLI tools",
  options: [
    {
      name: ["-o", "--output-dir"],
      description: "Directory where to store built files",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["-w", "--watch"],
      description: "Enables watch mode",
    },
    {
      name: "--loglevel",
      description: "Controls level of logging during build",
      args: {
        name: "level",
        suggestions: ["silly", "verbose", "info", "warn", "error", "silent"],
        default: "info",
      },
    },
    ...storybookCommonOptions,
  ],
};

export default completionSpec;
