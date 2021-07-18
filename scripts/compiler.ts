import SpecLogger, { Level } from "./log";
import * as esbuild from "esbuild";
import { DESTINATION_FOLDER_NAME, SOURCE_FOLDER_NAME } from "./constants";
import { exec } from "child_process";
import chokidar from "chokidar";

function invalidateCache() {
  exec(
    "fig settings autocomplete.developerModeNPMInvalidateCache true",
    (error, _, stderr) => {
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

async function processFile(fileName: string) {
  SpecLogger.log(`Building ${fileName}`);
  await esbuild
    .build({
      entryPoints: [fileName],
      outdir: DESTINATION_FOLDER_NAME,
      bundle: true,
      format: "esm",
      minify: true,
    })
    .catch((e) =>
      SpecLogger.log(`Error building ${fileName}: ${e.message}`, Level.ERROR)
    );
  invalidateCache();
}

const watcher = chokidar.watch(`${SOURCE_FOLDER_NAME}/**/*.ts`, {
  ignoreInitial: true,
});

// Process the changed file
watcher.on("change", processFile);
watcher.on("add", processFile);
