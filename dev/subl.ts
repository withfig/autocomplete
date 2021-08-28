import * as Fig from "../schemas";

const completionSpec: Fig.Spec = {
  name: "subl",
  description: "Sublime Text",
  args: {
    isVariadic: true,
    template: ["folders", "filepaths"],
  },
};

export default completionSpec;
