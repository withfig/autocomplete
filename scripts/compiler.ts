import SpecLogger, { Level } from "./log";
import * as esbuild from "esbuild";
import { DESTINATION_FOLDER_NAME, SOURCE_FOLDER_NAME } from "./constants";
import { exec } from "child_process";
import chokidar from "chokidar";
import glob from "fast-glob";

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

async function processFiles(files: string | string[]) {
  const fileName = typeof files === "string" ? files : "all specs";
  await esbuild
    .build({
      entryPoints: [].concat(files),
      outdir: DESTINATION_FOLDER_NAME,
      bundle: true,
      format: "esm",
      minify: true,
    })
    .catch((e) =>
      SpecLogger.log(`Error building ${fileName}: ${e.message}`, Level.ERROR)
    );
  SpecLogger.log(`Built ${fileName}`);
  invalidateCache();
}

async function runCompiler() {
  const SOURCE_FILE_GLOB = `${SOURCE_FOLDER_NAME}/**/*.ts`;
  const args = process.argv.slice(2);
  if (args.includes("--watch")) {
    const watcher = chokidar.watch(SOURCE_FILE_GLOB, {
      ignoreInitial: true,
    });

    // Process the changed file
    watcher.on("change", processFiles);
    watcher.on("add", processFiles);
  } else {
    const files = await glob(SOURCE_FILE_GLOB);
    await processFiles(files);
  }
}

runCompiler();
