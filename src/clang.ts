const completionSpec: Fig.Spec = {
  name: "clang",
  description: "Clang LLVM compiler",
  args: {
    name: "file",
    isVariadic: true,
    template: "filepaths",
  },
};

export default completionSpec;
