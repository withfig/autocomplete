import { error, timeEnd, timeStart } from "./utils.ts";

const run = async (cmd: string[]): Promise<string> => {
  const p = Deno.run({
    cmd,
    stdout: "piped",
    stderr: "null",
  });
  const [status, stdout] = await Promise.all([p.status(), p.output()]);

  if (!status.success) {
    error(
      `error in running \`${cmd.map((k) => `"${k}"`).join(" ")}\``,
    );
    Deno.exit(1);
  }

  return new TextDecoder().decode(stdout);
};

/** Get the help text from FFmpeg */
export const getHelpText = async () => {
  timeStart("getHelpText");
  const ret = await run(["ffmpeg", "-h", "full"]);
  timeEnd("getHelpText");

  return ret;
};
