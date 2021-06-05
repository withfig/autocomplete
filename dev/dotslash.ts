// use to complete on files when they are the first string in a branch

export const completionSpec: Fig.Spec = {
  name: "dotslash",
  args: {
    // This was previously just "filepaths", however, we added folders so
    // users of ohmyzsh could cd into a folder by typing the folder name without `cd`
    template: ["filepaths", "folders"],
  },
};
