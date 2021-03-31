import inquirer from "inquirer";
import Logger, { Level } from "./log";
import fs from "fs";
import { getBoilerplateSpecContent, SOURCE_FOLDER_NAME } from "./constants";
import path from "path";

async function createNewSpecCLI() {
  try {
    const { cliName } = await inquirer.prompt<{ cliName: string }>([
      {
        type: "input",
        message: "What's the name of the CLI you want to create the Spec for?",
        name: "cliName",
      },
    ]);

    const specFileName = `${cliName.toLowerCase()}.ts`;
    const specPath = path.join(process.cwd(), SOURCE_FOLDER_NAME, specFileName);
    const hasSpec = fs.existsSync(specPath);

    // We don't want to overwrite the spec if it already exists
    if (hasSpec) {
      Logger.log(`The spec "${specFileName}" already exists.`, Level.ERROR);
      return;
    }

    fs.writeFileSync(specPath, getBoilerplateSpecContent(cliName), {
      encoding: "utf-8",
    });

    Logger.log(
      `Successfully created the new Spec "${specFileName}"! Start editing it in the dev/ folder...`,
      Level.SUCCESS
    );
  } catch (e) {
    Logger.log("Couldn't create Spec! Please try again.", Level.ERROR);
  }
}

createNewSpecCLI();
