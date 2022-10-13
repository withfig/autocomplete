import { createVersionedSpec } from "@fig/autocomplete-helpers";
const versionFiles = ["0.2.0", "0.3.0"];

export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  return executeShellCommand("typeorm --version"); // returns x.y.z
};

export default createVersionedSpec("typeorm", versionFiles);
