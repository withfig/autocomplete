import fs from "fs";
import glob from "glob";

const normalize = (name) => {
  let capitalizeNext = false;
  const excluded = "-@";
  return name.split("").reduce((out, char) => {
    if (excluded.includes(char)) {
      capitalizeNext = true;
      return out;
    }

    if (capitalizeNext) {
      capitalizeNext = false;
      return out + char.toUpperCase();
    }

    return out + char;
  }, "");
};

const files = glob
  .sync("**/*.ts", { cwd: `${process.cwd()}/src` })
  .map((x) => `"${x.slice(0, -3)}"`);

const commands = glob
  .sync("*.ts", { cwd: `${process.cwd()}/src` })
  .map((x) => x.slice(0, -3));

const commandExports = commands
  .map((x) => `export { default as ${normalize(x)} } from "./${x}";`)
  .join("");

fs.writeFileSync(
  "build/index.js",
  `var e=[${files.join(",")}];export{e as default};`
);

const commandTypeDeclarations = commands
  .map((x) => `export declare const ${normalize(x)}: Fig.Spec`)
  .join("\n");

fs.writeFileSync(
  "build/index.d.ts",
  `
declare const completions: string[]
export { completions as default }
`
);
