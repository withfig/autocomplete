import { createVersionedSpec } from "@fig/autocomplete-helpers";
const versionFiles = ["0.0.0"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  return (
    await executeShellCommand({
      command: "npx",
      args: ["@usermn/sdc", "--version"],
    })
  ).stdout;
};
export default createVersionedSpec("@usermn/sdc", versionFiles);
