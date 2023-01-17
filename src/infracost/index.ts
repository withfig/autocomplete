import { createVersionedSpec } from "@fig/autocomplete-helpers";
import { clean } from "semver";
const versionFiles = ["0.9.0"];

export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const out = await executeShellCommand("infracost --version");
  return clean(out.slice(out.indexOf(" ") + 1));
};

export default createVersionedSpec("infracost", versionFiles);
