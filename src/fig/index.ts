import { createVersionedSpec } from "@fig/autocomplete-helpers";
const versionFiles = ["1.0.0"];

export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const out = await executeShellCommand("fig --version");
  return out.slice(out.indexOf(" ") + 1);
};

export default createVersionedSpec("fig", versionFiles);
