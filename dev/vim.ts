import * as Fig from "../schemas";

const completionSpec: Fig.Spec = {
  name: "vim",
  description:
    "Vi[m] is an one of two powerhouse text editors in the Unix world, the other being EMACS",
  args: {
    template: "filepaths",
  },
};

export default completionSpec;
