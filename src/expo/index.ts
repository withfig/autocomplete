import { createVersionedSpec } from "@fig/autocomplete-helpers";
const versionFiles = ["4.0.0", "5.0.0"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  return await executeShellCommand("expo --version");
};
export default createVersionedSpec("expo", versionFiles);
