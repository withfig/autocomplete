export const completionSpec: Fig.Spec = {
  name: "ln",
  description: "Create (default hard) symbolic links to files",
  args: [
    {
      name: "source_file",
      // template: ["filepaths", "folders"], // is there an absolute path version of this? ln requires absolute path
    },
    {
      name: "link_name or link_dirname",
    },
  ],
  options: [
    {
      name: "-s",
      description: "Create a symbolic link",
      args: [
        {
          name: "source_file",
        },
        {
          name: "link_name or link_dirname",
        },
      ],
    },
    {
      name: "-v",
      description: "verbose",
    },
    {
      name: "-F",
      description: "If link name already exists replace it",
      args: [
        {
          name: "source_file",
        },
        {
          name: "link_name or link_dirname",
        },
      ],
    },
    {
      name: "-h",
      description: "Don't follow symbolic links",
    },
    {
      name: "-f",
      description:
        "If link name already exists unlink the old one before creating the new one",
      args: [
        {
          name: "source_file",
        },
        {
          name: "link_name or link_dirname",
        },
      ],
    },
    {
      name: "-i",
      description: "Prompt if proposed link already exists",
      args: [
        {
          name: "source_file",
        },
        {
          name: "link_name or link_dirname",
        },
      ],
    },
    {
      name: "-n",
      description: "Same as -h don't follow symbolic links",
    },
  ],
};
