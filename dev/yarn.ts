import v1 from "./yarn/yarn@1";
import v2 from "./yarn/yarn@2";

// In dev mode, you need to refresh this file when you change any of the versions
const completionSpec: Fig.Spec = {
  name: "yarn",
  description: "Manage packages and run scripts",
  generateSpec: async (tokens, executeShellCommand) => {
    const version = parseFloat(await executeShellCommand("yarn --version"));
    if (version < 2) {
      return v1;
    } else {
      return v2;
    }
  },
};
export default completionSpec;
