const completionSpec: Fig.Spec = {
  name: "ditto",
  description: "Copy directory hierarchies, create and extract archives",
  options: [
    {
      name: "--help",
      description: "Show help for ditto",
    },
    {
      name: "-h",
      description: "Print full usage",
    },
    {
      name: "-X",
      description:
        "When copying one or more source directories, do not descend into directories that have a different device ID",
    },
    {
      name: "-c",
      description: "Create an archive at the destination path",
    },
    {
      name: "-z",
      description: "Create compressed CPIO archives, using gzip(1) compression",
    },
    {
      name: "-j",
      description:
        "Create compressed CPIO archives, using bzip2(1) compression",
    },
    {
      name: "-v",
      description:
        "Print a line of output to stderr for each source directory copied",
    },
    {
      name: "-V",
      description:
        "Print a line of output to stderr for every file, symbolic link, and device copied",
    },
    {
      name: "-x",
      description: "Extract the archives given as source arguments",
    },
    {
      name: "-k",
      description:
        "Create or extract from a PKZip archive instead of the default CPIO",
    },
  ],
  args: [{
    name: "source",
    template: ["filepaths", "folders"],
    isVariadic: true,
  }, {
    name: "dest",
    template: "folders",
    suggestCurrentToken: true,
  }],
};
export default completionSpec;
