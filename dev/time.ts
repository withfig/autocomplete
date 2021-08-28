import * as Fig from "../schemas";

const completionSpec: Fig.Spec = {
  name: "time",
  description: "Time how long a commmand takes!",
  args: {
    isCommand: true,
  },
};

export default completionSpec;
