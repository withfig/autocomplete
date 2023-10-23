import { createVersionedSpec } from "@fig/autocomplete-helpers";
const versionFiles = ["2.53.0"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => JSON.parse(await executeShellCommand("az version -o json"))["azure-cli"];
export default createVersionedSpec("az", versionFiles);
