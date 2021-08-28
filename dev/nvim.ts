import * as Fig from "../schemas";

const completionSpec: Fig.Spec = {
  name: "nvim",
  description: "Hyperextensible Vim-based text editor",
  args: {
    template: ["filepaths", "folders"],
  },
};

export default completionSpec;
