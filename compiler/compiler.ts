import fs from 'fs';
import ts from 'typescript';
import path from 'path';
import { specTransformer } from './transformer';
import SpecLogger, { Level } from './log';
import ProgressBar from 'progress';
import { DESTINATION_FOLDER_NAME, SOURCE_FOLDER_NAME } from './constants';

// The options for the TypeScript compiler
const options: ts.TranspileOptions = {
    compilerOptions: {
        module: ts.ModuleKind.ESNext,
    },
    transformers: {
        before: [specTransformer],
    },
};

/**
 * Process a spec by transpiling it with the TypeScript
 * compiler.
 * @param file The file to process
 */
const processSpec = (file: string) => {
    const source = fs.readFileSync(file).toString();
    const result = ts.transpileModule(source, options);

    let newName = path.basename(file, '.ts');

    if (!newName.endsWith('.js')) {
        newName += '.js';
    }

    const outFilePath = path.resolve(DESTINATION_FOLDER_NAME, newName);
    const outDirname = path.dirname(outFilePath);

    if (!fs.existsSync(outDirname)) {
        fs.mkdirSync(outDirname);
    }

    // Remove unessesary export at the end of js files
    const jsOutput = result.outputText.replace('export {};', '');

    fs.writeFileSync(outFilePath, jsOutput);
};

// Process all the files in the specs directory
fs.readdir(SOURCE_FOLDER_NAME, (err, files) => {
    if (err) {
        SpecLogger.log(`Could not find /${DESTINATION_FOLDER_NAME} folder`, Level.ERROR);
        return;
    }

    const specs = files.filter((file) => file !== '.DS_STORE');
    SpecLogger.log(`Processing ${specs.length} specs...`);

    const bar = new ProgressBar(':bar :percent', {
        total: specs.length,
        complete: '=',
        head: '>',
        incomplete: ' ',
    });

    specs.forEach((spec) => {
        processSpec(path.join(SOURCE_FOLDER_NAME, spec));
        bar.tick({ spec });
    });

    SpecLogger.log(`Specs compiled successfully to /${DESTINATION_FOLDER_NAME} folder!`, Level.SUCCESS);
});
