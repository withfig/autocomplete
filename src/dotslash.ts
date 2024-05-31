const completionSpec: Fig.Spec = {
  name: "dotslash",
  args: {
    // This was previously just "filepaths", however, we added folders so
    // users of ohmyzsh could cd into a folder by typing the folder name without `cd`
    template: ["filepaths", "folders"],
  },
};

export default completionSpec;
