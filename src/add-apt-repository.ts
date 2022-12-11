const completionSpec: Fig.Spec = {
  name: "add-apt-repository",
  description:
    "Adds a repository into the /etc/apt/sources.list or /etc/apt/sources.list.d or removes an existing one",
  args: {
    name: "repository",
  },
};
export default completionSpec;
