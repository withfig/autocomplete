import fs from "fs";
import ts from "typescript";
import path from "path";
import { specTransformer } from "./transformer";
import SpecLogger, { Level } from "./log";
import ProgressBar from "progress";
import { DESTINATION_FOLDER_NAME, SOURCE_FOLDER_NAME } from "./constants";
import { exec } from "child_process";
import chokidar from "chokidar";

// The options for the TypeScript compiler
const options: ts.TranspileOptions = {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
  },
  transformers: {
    before: [specTransformer],
  },
};

function invalidateCache() {
  exec(
    "fig settings autocomplete.developerModeNPMInvalidateCache true",
    (error, stdout, stderr) => {
      if (error) {
        SpecLogger.log(
          `node error setting Fig to NPM dev mode: ${error.message}`,
          Level.ERROR
        );
        return;
      }
      if (stderr) {
        SpecLogger.log(
          `shell error setting Fig to NPM dev mode: ${stderr}`,
          Level.ERROR
        );
        return;
      }
    }
  );
}

if (process.argv[2] == "INVALIDATE_CACHE") {
  invalidateCache();
}

function walkDir(dir: string, callback: (path: string) => void) {
  fs.readdirSync(dir).forEach((currentFilePath) => {
    const dirPath = path.join(dir, currentFilePath);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, currentFilePath));
    }
  });
}

/**
 * Process a spec by transpiling it with the TypeScript
 * compiler.
 * @param filePath The file to process
 */
const processSpec = (filePath: string) => {
  const source = fs.readFileSync(filePath).toString();
  const result = ts.transpileModule(source, options);

  const relativeFilePath = filePath
    .replace(`${SOURCE_FOLDER_NAME}/`, "")
    .replace(".ts", ".js");

  const outFilePath = path.resolve(DESTINATION_FOLDER_NAME, relativeFilePath);
  const outDirname = path.dirname(outFilePath);

  if (!fs.existsSync(outDirname)) {
    fs.mkdirSync(outDirname);
  }

  // Remove unessesary export at the end of js files
  const jsOutput = result.outputText.replace("export {};", "");

  fs.writeFileSync(outFilePath, jsOutput);
};

/**
 * Transpiles all passed files and prints the progress
 * @param specs Array of filepaths
 */
function processFiles(specs: string[]) {
  // Process all the files in the specs directory
  SpecLogger.log(`Processing ${specs.length} specs...`);

  const bar = new ProgressBar(":bar :percent", {
    total: specs.length,
    complete: "=",
    head: ">",
    incomplete: " ",
  });

  // Make sure that the destination folder exists
  if (!fs.existsSync(DESTINATION_FOLDER_NAME)) {
    // if not create it
    fs.mkdirSync(DESTINATION_FOLDER_NAME);
  }

  specs.forEach((spec) => {
    processSpec(spec);
    bar.tick({ spec });
  });

  SpecLogger.log(
    `Specs compiled successfully to /${DESTINATION_FOLDER_NAME} folder!`,
    Level.SUCCESS
  );
}

const isWatching = process.argv.includes("--watch");

if (isWatching) {
  const watcher = chokidar.watch(SOURCE_FOLDER_NAME);

  // Process the changed file
  watcher.on("change", (filePath: string) => {
    processFiles([filePath]);
    invalidateCache();
  });
} else {
  // Get all files from the the source folder recursively
  const specs: string[] = [];
  walkDir(SOURCE_FOLDER_NAME, (path) => {
    if (path === ".DS_STORE") return;
    specs.push(path);
  });
  processFiles(specs);
}
