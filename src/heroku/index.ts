import { createVersionedSpec } from "@fig/autocomplete-helpers";

const versionRegex = /heroku\/([0-9]+\.[0-9]+\.[0.9]+)/;
const versionFiles = ["8.0.0", "8.6.0"];

export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const { stdout } = await executeShellCommand({
    command: "heroku",
    // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
    args: ["--version"],
  });

  const regexResult = versionRegex.exec(stdout);
  if (regexResult) {
    return regexResult[1];
  } else {
    return "8.0.0";
  }
};

export default createVersionedSpec("heroku", versionFiles);
