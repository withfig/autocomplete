const completionSpec: Fig.Spec = {
  name: "ghq",
  description:
    "'ghq' provides a way to organize remote repository clones, like go get does. When you clone a remote repository by ghq get, ghq makes a directory under a specific root directory (by default ~/ghq) using the remote repository URL’s host and path",
  options: [
    {
      name: ["-h", "--help", "h", "help"],
      description: "Show help",
      isPersistent: true,
      exclusiveOn: ["--version"],
    },
    {
      name: ["-v", "--version"],
      description: "Print the version",
      exclusiveOn: ["--help"],
    },
  ],
};
export default completionSpec;
