export const completionSpec: Fig.Spec = {
  name: "rails",
  description: "Ruby on Rails deployment script",
  options: [
    {
      name: ["-d,", "--no-docs"],
      description: "Deploys rails without any documentation.",
    },
    {
      name: ["-C,", "--copy"],
      description:
        "Deploys rails by copying instead of linking vendor libraries.",
    },
    {
      name: ["-F,", "--force-overwrite"],
      description: "Overwrites all previously deployed files, if any.",
    },
    {
      name: ["-D,", "--database"],
      description:
        "Specify the database to be used. Supported values are mysql, oracle, postgresql, sqlite3, frontbase and ibm_db",
    },
    {
      name: ["-I,", "--internal"],
      description: "Options to be passed to the upstream rails script.",
    },
  ],
};
