const source_dest_args: Fig.Arg[] = [
  {
    name: "source_file",
    // template: ["filepaths", "folders"], // is there an absolute path version of this? ln requires absolute path
  },
  {
    name: "link_name or link_dirname",
  },
];

export const completionSpec: Fig.Spec = {
  name: "ln",
  description: "Create (default hard) symbolic links to files",
  args: source_dest_args,
  options: [
    {
      name: "-s",
      description: "Create a symbolic link",
      args: source_dest_args,
    },
    {
      name: "-v",
      description: "verbose",
    },
    {
      name: "-F",
      description: "If link name already exists replace it",
      args: source_dest_args,
    },
    {
      name: "-h",
      description: "Don't follow symbolic links",
    },
    {
      name: "-f",
      description:
        "If link name already exists unlink the old one before creating the new one",
      args: source_dest_args,
    },
    {
      name: "-i",
      description: "Prompt if proposed link already exists",
      args: source_dest_args,
    },
    {
      name: "-n",
      description: "Same as -h don't follow symbolic links",
    },
  ],
};
