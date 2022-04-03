const completionSpec: Fig.Spec = {
  name: "xed",
  description: "Xcode text editor invocation tool",
  options: [
    {
      name: ["--launch", "-x"],
      description: "Launches Xcode, opening a new empty unsaved file",
    },
    {
      name: ["--create", "-c"],
      description:
        "Creates any non-existent files in the file list. If used without --launch, standard input will be read and piped to the last file created",
    },
    {
      name: ["--wait", "-w"],
      description:
        "Wait for the files to be closed before exiting. xed will idle and will only terminate when all files are closed",
    },
    {
      name: ["--line", "-l"],
      description: "Selects the given line in the last file opened",
      args: {
        name: "number",
        description: "The line number to select",
      },
    },
    {
      name: ["--background", "-b"],
      description:
        "Opens Xcode without activating it; the process that invoked xed remains in front",
    },
    {
      name: ["--help", "-h"],
      description: "Show help for xed",
      exclusiveOn: ["-x", "-c", "-w", "-l", "-b", "-v"],
    },
    {
      name: ["--version", "-v"],
      description: "Prints the version number of xed",
    },
  ],
  args: {
    name: "file",
    description:
      "A list of file paths. If no files are passed, then standard input will \
      be read and piped into a new untitled document",
    isVariadic: true,
    isOptional: true,
    template: "filepaths",
  },
};
export default completionSpec;
