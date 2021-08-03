const completionSpec: Fig.Spec = {
  name: "pushd",
  description:
    "Change the current directory, and push the old current directory onto the directory stack",
  args: {
    template: "folders",
  },
};

export default completionSpec;
