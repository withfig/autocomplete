import { createVersionedSpec } from "@fig/autocomplete-helpers";
const versionFiles = ["2.0.0", "3.0.0"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const versionRegex = /\d+\.\d+\.\d+/;
  const out = await executeShellCommand("shopify version");
  return out.match(versionRegex)?.[0] ?? "";
};
export default createVersionedSpec("shopify", versionFiles);
