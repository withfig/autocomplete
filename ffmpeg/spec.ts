import { timeEnd, timeStart, warn } from "./utils.ts";
import * as Fig from "./fig.types.ts";

const safifyStr = (str: string): string => str.replaceAll('"', '\\"');
const safifyArr = (arr: string[]): string[] => arr.map(safifyStr);

/* Make a string (or a list of strings) safe by escaping all of the double quotes */
const safify = <T extends string | string[]>(str: T): T => {
  // @ts-expect-error This should work but it doesn't.
  return (typeof str === "string") ? safifyStr(str) : safifyArr(str);
};

/** Make a description string follow Fig's conventions and appease ESLint */
const conventionify = (str: string) => {
  let ret = str;

  ret = ret.trim()
    .replace(
      /^\w/,
      (c) => c.toUpperCase(),
    );

  if (ret.endsWith(".")) ret = ret.substring(0, ret.length - 1);

  return ret;
};

/** Format a string of TypeScript / JavaScript using `deno fmt` by running the Deno CLI behind the scenes */
const format = async (str: string) => {
  timeStart("format");

  const proc = Deno.run({
    cmd: ["deno", "fmt", "-"],
    stdin: "piped",
    stdout: "piped",
  });

  proc.stdin.write(new TextEncoder().encode(str));
  proc.stdin.close();

  const [status, stdout] = await Promise.all([proc.status(), proc.output()]);

  if (!status.success) {
    warn(
      "Error in formatting, skipping...",
    );

    return str;
  }

  timeEnd("format");

  return new TextDecoder().decode(stdout);
};

/** Generate a TypeScript source spec from a list of options
 * @param options A list of options
 */
export const generateSpec = async (options: Fig.Option[]) => {
  timeStart("generateSpec");

  const original = `
/* eslint-disable @withfig/fig-linter/no-useless-arrays */

const completionSpec: Fig.Spec = {
  name: "ffmpeg",
  description: "Play, record, convert, and stream audio and video",

  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },

  args: {
    name: "outfile",
    description: "Output file",
    template: "filepaths",
  },

  options: [
    ${
    options.map((option) => {
      return `{
        name: "${safify(option.name)}",
        ${
        option.description
          ? `description: "${conventionify(safify(option.description))}",`
          : ""
      }
      ${
        option.args && !Array.isArray(option.args) && option.args.name
          ? `
        args:
              ${`{
            name: "${option.args.name}",
            ${
            option.args.description !== undefined
              ? `description: ${conventionify(option.args.description)},`
              : ""
          }
            ${
            option.args.template !== undefined
              ? `template: "${option.args.template}",`
              : ""
          }
            ${
            option.args.generators !== undefined &&
              !Array.isArray(option.args.generators)
              ? `generators: {
                script: "${option.args.generators.script}",
                postProcess: ${
                option.args.generators.postProcess
                  ? option.args.generators.postProcess.toString()
                  : "undefined"
              }},`
              : ""
          }
          }`},`
          : "" // no valid arguments, return nothing
      }
    }`;
    }).join(",\n")
  }
  ]
};

export default completionSpec;
  `;

  timeEnd("generateSpec");

  return await format(original);
};
