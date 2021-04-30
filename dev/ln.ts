export const completionSpec: Fig.Spec = {
  name: "ln",
  description: "Create (hard) symbolic links to files",
  args: {},
  options: [
    {
      name: "-s",
      description: "Create a symbolic link",
    },
    {
      name: "-v",
      description: "verbose",
    },
    {
      name: ["-F"],
      description: "If link name already exists replace it",
    },
    {
      name: "-h",
      description: "Don't follow symbolic links",
    },
    {
      name: "-f",
      description:
        "If link name already exists unlink the old one before creating the new one",
    },
    {
      name: "-i",
      description: "Prompt if proposed link already exists",
    },
    {
      name: "-n",
      description: "Same as -h don't follow symbolic links",
    },
  ],
};
