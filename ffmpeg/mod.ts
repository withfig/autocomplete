import * as Fig from "./fig.types.ts";

import { getHelpText } from "./getter.ts";
import { generateSpec } from "./spec.ts";
import { codecGenerator, deviceGenerator } from "./generators.ts";

import { timeEnd, timeStart } from "./utils.ts";
import { bold, green } from "./_deps.ts";

const HELP_TEXT = await getHelpText();
const HELP_LINES = HELP_TEXT.split("\n").filter(Boolean);

const rawOptions = HELP_LINES
  .filter(Boolean)
  .filter((k) => k.startsWith("-"));

const genOptions: Fig.Option[] = [{
  name: "-i",
  description: "Input file",
  args: {
    name: "infile",
    template: "filepaths",
  },
}];

timeStart("parseOptions");
for (const rawOption of rawOptions) {
  const splitted = rawOption.split(/  +/g).filter(Boolean);
  const mainPart = splitted[0].split(" ");
  const description = splitted[1];

  const argName = mainPart.slice(1).join(" ");

  if (genOptions.filter((k) => k.name === mainPart[0]).length === 0) {
    genOptions.push({
      name: mainPart[0],
      args: {
        name: argName,
        ...((argName === "codec")
          ? {
            generators: codecGenerator,
          }
          : (argName === "device")
          ? {
            generators: deviceGenerator,
          }
          : {}),
      },
      description,
      ...description
        ? description.toLowerCase().search("deprecated") > -1
          ? { deprecated: true }
          : {}
        : {},
    });
  }
}
timeEnd("parseOptions");

const generatedSpec = await generateSpec(genOptions);

timeStart("writeFile");
await Deno.writeTextFile("ffmpeg.ts", generatedSpec);
timeEnd("writeFile");

console.log(green(`Wrote completion spec to ${bold("./ffmpeg.ts")}`));
