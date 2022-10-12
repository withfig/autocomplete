const completionSpec: Fig.Spec = {
  name: "zed",
  description: "A lightning-fast, collaborative code editor written in Rust",
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help information",
    },
    {
      name: ["-v", "--version"],
      description: "Print Zed's version and the app path",
    },
    {
      name: ["-w", "--wait"],
      description:
        "Wait for all of the given paths to be closed before exiting",
    },
    {
      name: ["-b", "--bundle-path"],
      description: "Custom Zed.app path",
      args: {
        name: "bundle_path",
        template: "folders",
      },
    },
  ],
  args: {
    name: "path",
    description: "A sequence of space-separated paths that you want to open",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
