const completionSpec: Fig.Spec = {
  name: ".",
  description: "Source a file",
	hidden: true,
  args: {
    template: "filepaths",
    isScript: true,
  },
};

export default completionSpec;
