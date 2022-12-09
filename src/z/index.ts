import { createVersionedSpec } from "@fig/autocomplete-helpers";
const versionFiles = ["zoxide", "z-script"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const out = await executeShellCommand("which z");
  if (out.includes("zoxide")) {
    return "zoxide";
  } else {
    return "z-script";
  }
};
export default createVersionedSpec("z", versionFiles);
