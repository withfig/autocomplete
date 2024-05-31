import { createVersionedSpec } from "@fig/autocomplete-helpers";
const versionFiles = ["2.0.0", "3.0.0"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const versionRegex = /\d+\.\d+\.\d+/;
  const { stdout } = await executeShellCommand({
    command: "shopify",
    // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
    args: ["version"],
  });
  return stdout.match(versionRegex)?.[0] ?? "";
};
export default createVersionedSpec("shopify", versionFiles);
