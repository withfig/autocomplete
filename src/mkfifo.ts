const completionSpec: Fig.Spec = {
  name: "mkfifo",
  description: "Make FIFOs (first-in, first-out)",
  options: [
    {
      name: "-m",
      description:
        "Set the file permission bits of newly-created fifos to mode, without respect to the current umask; the mode is specified as in chmod(1)",
      args: {
        name: "MODE",
        suggestions: ["0666", "0644", "0444"],
        default: "0666",
      },
    },
  ],
  args: {
    name: "FIFO",
    description: "FIFO(s) to create",
    isVariadic: true,
  },
};
export default completionSpec;
