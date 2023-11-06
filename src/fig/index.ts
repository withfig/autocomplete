import { createVersionedSpec } from "@fig/autocomplete-helpers";
const versionFiles = ["1.0.0", "2.0.0"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const { stdout } = await executeShellCommand({
    command: "fig",
    // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
    args: ["--version"],
  });
  return stdout.slice(stdout.indexOf(" ") + 1);
};
export default createVersionedSpec("fig", versionFiles);
