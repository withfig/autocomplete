import * as Fig from "../schemas";

const completionSpec: Fig.Spec = {
  name: "less",
  description: "Opposite of more",
  args: {
    isVariadic: true,
    template: "filepaths",
  },
};

export default completionSpec;
