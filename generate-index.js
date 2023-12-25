import fs from "node:fs";
import path from "node:path";

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

const resolvedSrc = path.resolve(process.cwd(), "src");

// ! This returns a tuple containig as first element a list of specs and as second element the diff-versioned specs of that list
const getSubfolderSpecNames = (dirPathRelativeToSrc) => {
  const resolvedDirPath = path.join(resolvedSrc, dirPathRelativeToSrc);
  try {
    // if index.ts exists we are in a spec folder and we only return the current dir path e.g. fig/index.ts returns fig
    fs.readFileSync(path.join(resolvedDirPath, "index.ts"));
    return Array(2).fill([dirPathRelativeToSrc]);
  } catch {
    // otherwise the folder is just used to organize specs e.g. aws/*.ts
    const specNames = [];
    const diffVersionedSpecNames = [];
    for (const dirent of fs.readdirSync(resolvedDirPath, {
      withFileTypes: true,
    })) {
      if (dirent.isFile() && dirent.name.endsWith(".ts")) {
        specNames.push(
          path.join(dirPathRelativeToSrc, dirent.name).slice(0, -3)
        );
      } else if (dirent.isDirectory()) {
        const [s, dvs] = getSubfolderSpecNames(
          path.join(dirPathRelativeToSrc, dirent.name)
        );
        specNames.push(...s);
        diffVersionedSpecNames.push(...dvs);
      }
    }
    return [specNames, diffVersionedSpecNames];
  }
};

const specNames = [];
const diffVersionedSpecNames = [];

for (const dirent of fs.readdirSync(resolvedSrc, { withFileTypes: true })) {
  if (dirent.isFile() && dirent.name.endsWith(".ts")) {
    specNames.push(dirent.name.slice(0, -3));
  } else if (dirent.isDirectory()) {
    const [s, dvs] = getSubfolderSpecNames(dirent.name);
    specNames.push(...s);
    diffVersionedSpecNames.push(...dvs);
  }
}

fs.writeFileSync(
  "build/index.js",
  `var e=${JSON.stringify(specNames)},diffVersionedCompletions=${JSON.stringify(
    diffVersionedSpecNames
  )};export{e as default,diffVersionedCompletions};`
);

fs.writeFileSync(
  "build/index.json",
  JSON.stringify({
    completions: specNames,
    diffVersionedCompletions: diffVersionedSpecNames,
  })
);

fs.writeFileSync(
  "build/index.d.ts",
  `
declare const completions: string[]
declare const diffVersionedCompletions: string[]
export { completions as default, diffVersionedCompletions }
`
);
