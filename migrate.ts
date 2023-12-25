import { walkSync } from "https://deno.land/std/fs/walk.ts";
import { split } from "npm:shlex";

const walk = walkSync("src");

for (const entry of walk) {
  //   console.log(entry.path);

  if (entry.isFile) {
    const file = Deno.readTextFileSync(`${entry.path}`);

    const re = /script:\s"([^"]*)"/g;
    const newFile = file.replaceAll(re, (match) => {
      const a = re.exec(match);
      if (a && a[1]) {
        console.log(a[1]);
        console.log(split(a[1]));
        if (confirm("abc")) {
          return `script: ${JSON.stringify(split(a[1]))}`;
        } else {
          return match;
        }
      } else {
        return match;
      }
    });

    Deno.writeTextFileSync(entry.path, newFile);
  }
}
