const completionSpec: Fig.Spec = {
  name: "xip",
  description: "Create or expand a signed XIP archive",
  args: {
    name: "file",
    isVariadic: true,
    template: "filepaths",
    description:
      "Input files or directories to archive, followed by the output archive path",
  },
  options: [
    {
      name: "--sign",
      description: "The name of the identity to use for signing the archive",
      requiresSeparator: true,
      args: {
        name: "identity",
        description: "Signing identity name",
      },
    },
    {
      name: "--keychain",
      description:
        "Specify a specific keychain to search for the signing identity",
      requiresSeparator: true,
      args: {
        name: "keychain",
        template: "filepaths",
        description: "Path to a keychain",
      },
    },
    {
      name: "--timestamp",
      description: "Include a trusted timestamp with the signature",
    },
    {
      name: "--timestamp=none",
      description: "Disable trusted timestamp, regardless of identity",
    },
    {
      name: "--expand",
      description:
        "Expand the archive into the current working directory; cannot be used with any other arguments",
      requiresSeparator: true,
      args: {
        name: "archive",
        template: "filepaths",
        description: "The XIP archive to expand",
      },
    },
  ],
};

export default completionSpec;
