// page https://hasseg.org/trash/
// made by yavko®

const completionSpec: Fig.Spec = {
  name: "trash",
  description: "Trash, move files/folders to the trash",
  args: {
    isVariadic: true,
    template: ["folders", "filepaths"],
  },

  options: [
    {
      name: "-v",
      description:
        "Be verbose when moving items to the trash showing them as they are moved",
    },
    {
      name: "-F",
      description: `Ask Finder to move the files to the trash, instead of the system API. This is slower, but it utilizes Finder's (e.g. sounds) and ensures that the "put back" feature works.`,
    },
    {
      name: "-l",
      description:
        "List items currently in the trash. If this argument is no files need to be specified",
    },
    {
      name: "-e",
      description:
        "Empty the trash. trash asks for confirmation before this action. If this argument is used, no files need to specified",
    },
    {
      name: "-s",
      description:
        "Securely empty the trash. trash asks for confirmation executing this action. If this argument is used, no need to be specified",
    },
    {
      name: "-y",
      description:
        "Skips the confirmation prompt for -e and -s. CAUTION: permanently instantly",
    },
  ],
};

export default completionSpec;
