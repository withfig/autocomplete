import * as fs from "fs";
import * as glob from "glob";

const files = glob
  .sync("**/*.ts", { cwd: `${process.cwd()}/src` })
  .map((x) => `"${x.slice(0, -3)}"`);
fs.writeFileSync("build/index.js", `module.exports=[${files.join(",")}]`);
