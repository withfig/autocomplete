import { createVersionedSpec } from "@fig/autocomplete-helpers";
const versionFiles = ["2.0.0"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const out = await executeShellCommand("shopify version");
  return out;
};
export default createVersionedSpec("shopify", versionFiles);
