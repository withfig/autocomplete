const vm = require("vm");
const fs = require("fs");
const Ajv = require("ajv").default;
const JSON5 = require('json5');
var jsonSourceMap = require('json-source-map');


const CompletionSpecSchema = require('./schemas/spec.json')
const ArgSchema = require("./schemas/arg.json");
const CommandSchema = require("./schemas/command.json");
const GeneratorSchema = require("./schemas/generator.json");
const OptionSchema = require("./schemas/option.json");
const SuggestionSchema = require("./schemas/suggestion.json");

const ajv = new Ajv({
    allErrors: true,
    jsonPointer: true,
    allowUnionTypes: true
});

ajv.addSchema(CompletionSpecSchema, "spec");
ajv.addSchema(ArgSchema, "arg");
ajv.addSchema(CommandSchema, "command");
ajv.addSchema(GeneratorSchema, "generator");
ajv.addSchema(OptionSchema, "option");
ajv.addSchema(SuggestionSchema, "suggestion");

var file = process.argv.slice(2)[0];

// console.log(file);

if(!file) {
    console.log("Enter the path of the spec to validate.");
    return; 
}
var data = fs.readFileSync(file, 'utf8');

// console.log(data);
var lines = data.split('\n');

var startIndex = lines.indexOf("var completionSpec = {");
lines[startIndex] = "{";

var specJson = "";
for(var i = startIndex; i < lines.length; i++) {
    var line = lines[i];
    //Ignore comments
    if(line.includes("//")) {
        console.log(line);
        continue;
    }
    specJson += line + '\n';
}

const parsedJson = JSON5.parse(specJson);
const validate = ajv.compile(CompletionSpecSchema);
const valid = validate(parsedJson);

if(valid) {
    console.log("Your autocomplete completion spec is working properly! ✅")
}
else {
    console.log("Autocompletion spec validation failed ❌");
    
    let errorMessage = '';
    const sourceMap = jsonSourceMap.stringify(parsedJson, null, 4);
    const jsonLines = sourceMap.json.split('\n');

    validate.errors.forEach(error => {
        errorMessage += '\n\n' + ajv.errorsText([ error ]);
        let errorPointer = sourceMap.pointers[error.dataPath];
        // Add startIndex to account for skipped lines at beginning
        var lineNumber = errorPointer.value.line + startIndex + 1;  
        errorMessage += '\non line ' + lineNumber + ":";
        console.log(jsonLines.slice(errorPointer.value.line, errorPointer.valueEnd.line).join('\n> '));
        errorMessage += '\n> ' + jsonLines.slice(errorPointer.value.line, errorPointer.valueEnd.line).join('\n> ');
    });

    console.log(errorMessage);
}

// Running script in context will return any JS syntax errors using Node's built-in syntax checker
const script = new vm.Script(data);
script.runInThisContext({
    displayErrors: true
});