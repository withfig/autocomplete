import { createVersionedSpec } from "@fig/autocomplete-helpers";
import { clean } from "semver";
const versionFiles = ["0.9.0", "0.10.0"];

export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const { stdout } = await executeShellCommand({
    command: "infracost",
    // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
    args: ["--version"],
  });
  return clean(stdout.slice(stdout.indexOf(" ") + 1));
};

export default createVersionedSpec("infracost", versionFiles);
