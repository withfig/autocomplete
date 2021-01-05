const vm = require("vm");
const fs = require("fs");
const Ajv = require("ajv").default;
const CompletionSpecSchema = require('./schemas/spec.json')
const ArgSchema = require("./schemas/arg.json");
const CommandSchema = require("./schemas/command.json");
const GeneratorSchema = require("./schemas/generator.json");
const OptionSchema = require("./schemas/option.json");
const SuggestionSchema = ("./schemas/suggestion.json");

const ajv = new Ajv({
    allErrors: true,
    schemas: [
        ArgSchema,
        CommandSchema,
        GeneratorSchema,
        OptionSchema,
        SuggestionSchema
    ]
});


var file = process.argv.slice(2)[0];

console.log(file);

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
    specJson.concat(line);
}



console.log(CompletionSpecSchema);
ajv.getSchema("../schemas/arg.json");
ajv.getSchema("../schemas/command.json");
ajv.getSchema("../schemas/generator.json");
ajv.getSchema("../schemas/option.json");
ajv.getSchema("../schemas/suggestion.json");

const validate = ajv.compile(CompletionSpecSchema);
const valid = validate(specJson);

if(valid) {
    console.log("Your autocomplete completion spec is working properly! ✅")
}
else {
    for (const err of validate.errors) {
        switch (err.keyword) {
            case "minimum":
            // err type is narrowed here to have "minimum" error params properties
            console.log(err.params.limit)
            break
            // ...
        }
    }
}

// Running script in context will return any JS syntax errors using Node's built-in syntax checker
const script = new vm.Script(data);
script.runInThisContext({
    displayErrors: true
});

console.log(file);
const spec = require('./' + file);
console.log(spec);
// console.log(data);

// console.log(data);