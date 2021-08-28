import * as Fig from "../schemas";

const completionSpec: Fig.Spec = {
  name: "pwd",
  description: "Print name of current/working directory",
  options: [
    {
      name: ["-L", "--logical"],
      description: "Use PWD from environment, even if it contains symlinks",
    },
    { name: ["-P", "--physical"], description: "Avoid all symlinks" },
    { name: "--help", description: "Display this help and exit" },
    {
      name: "--version",
      description: "Output version information and exit",
    },
  ],
};

export default completionSpec;
