import { createVersionedSpec } from "@fig/autocomplete-helpers";
const versionFiles = ["zoxide", "z-script"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const out = await executeShellCommand("which zoxide");
  if (out.trim().endsWith("zoxide")) {
    return "zoxide";
  } else {
    return "z-script";
  }
};
export default createVersionedSpec("z", versionFiles);
