const completionSpec: Fig.Spec = {
  name: "zipcloak",
  description: "Encrypt entries in a zipfile",
  args: {
    name: "zipfile",
    description: "Zipped file to encrypt entries into",
    template: ["filepaths"],
    suggestCurrentToken: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Show a short help for zipcloak",
    },
    {
      name: ["--decrypt", "-d"],
      description: "Decrypt encrypted entries (copy if given wrong password)",
      args: {
        name: "zipfile",
        description: "Zipped file to decrypt entries of",
        template: ["filepaths"],
      },
    },
    {
      name: ["--license", "-L"],
      description: "Show software license",
    },
    {
      name: ["--version", "-v"],
      description: "Show version information",
    },
    {
      name: ["--quiet", "-q"],
      description: "Quiet operation. Suppresses some informational messages",
    },
    {
      name: ["--output-file", "-O"],
      description:
        "Write output to new archive zipfile, leaving original archive as is",
      args: {
        name: "zipfile",
        description: "New zipfile that will be written to",
        template: ["filepaths"],
        suggestCurrentToken: true,
      },
    },
    {
      name: ["--temp-path", "-b"],
      description: "Use the directory given by path for the temporary zip file",
      args: {
        name: "directory",
        description: "Directory for the temporary zip file",
        template: ["filepaths"],
      },
    },
  ],
};
export default completionSpec;
