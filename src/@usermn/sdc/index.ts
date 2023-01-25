import { createVersionedSpec } from "@fig/autocomplete-helpers";
const versionFiles = ["0.0.0"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  return await executeShellCommand("npx @usermn/sdc --version");
};
export default createVersionedSpec("@usermn/sdc", versionFiles);
