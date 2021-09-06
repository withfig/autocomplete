// page https://hasseg.org/trash/
// made by yavko®

const completionSpec: Fig.Spec = {
  name: "trash",
  description: "Trash, move files/folders to the trash",
  args: {
    isOptional: true,
    isVariadic: true,
    template: ["folders", "filepaths"],
  },

  options: [
    {
      name: "-v",
      description: "Print verbose output while moving items",
    },
    {
      name: "-F",
      description: "Use the Finder API to move items to the trash",
    },
    {
      name: "-l",
description: "List items in the trash"
    },
    {
      name: "-e",
description: "Empty the trash"
      isDangerous: true,
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
