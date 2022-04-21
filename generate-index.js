import fs from "fs";
import path from "path";

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


const resolvedSrc = path.resolve(process.cwd(), 'src')

const getSubfolderSpecNames = (dirPathRelativeToSrc) => {
  const resolvedDirPath = path.join(resolvedSrc, dirPathRelativeToSrc)
  try {
    // if index.ts exists we are in a spec folder and we only return the current dir path e.g. fig/index.ts return fig
    fs.readFileSync(path.join(resolvedDirPath, 'index.ts'))
    return [dirPathRelativeToSrc]
  } catch {
    // otherwise the folder is just used to organize specs e.g. aws/*.ts
    const specNames = []
    for (const dirent of fs.readdirSync(resolvedDirPath, { withFileTypes: true })) {
      if (dirent.isFile() && dirent.name.endsWith('.ts')) {
        specNames.push(`"${
          path.join(dirPathRelativeToSrc, dirent.name).slice(0, -3)
        }"`)
      } else if (dirent.isDirectory()) {
        specNames.push(...getSubfolderSpecNames(path.join(dirPathRelativeToSrc, dirent.name)))
      }
    }
    return specNames
  }
}

const specNames = []

for (const dirent of fs.readdirSync(resolvedSrc, { withFileTypes: true })) {
  if (dirent.isFile() && dirent.name.endsWith('.ts')) {
    specNames.push(`"${
      dirent.name.slice(0, -3)
    }"`)
  } else if (dirent.isDirectory()) {
    specNames.push(...getSubfolderSpecNames(dirent.name))
  }
}

fs.writeFileSync(
  "build/index.js",
  `var e=[${specNames.join(",")}];export{e as default};`
);

fs.writeFileSync(
  "build/index.d.ts",
  `
declare const completions: string[]
export { completions as default }
`
);