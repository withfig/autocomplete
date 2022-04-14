import { createVersionedSpec } from "@fig/autocomplete-helpers";
const versionFiles = ["2.0.0", "1.0.0"];

export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  // Response of `fastly version` is:
  // Fastly CLI version vX.Y.Z (abc0001)
  // Built with go version go1.18 linux/amd64
  // Viceroy version: viceroy X.Y.Z
  const out = await executeShellCommand("fastly version");
  return out.slice(0, out.indexOf("\n")).split(" ")[3].slice(1);
};

export default createVersionedSpec("fastly", versionFiles);
