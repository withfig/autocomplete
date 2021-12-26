import * as fs from "fs";
import * as glob from "glob";

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
  .map((x) => x.slice(0, -3))
  .map((x) => `export { default as ${normalize(x)} } from "./${x}";`);

fs.writeFileSync(
  "build/index.js",
  `var e=[${files.join(",")}];export{e as default};${commands.join("")}`
);
