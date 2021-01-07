const { Spec } = require('./schemas.js');

const bColors = {
    OKGREEN   : '\033[92m',
    WARNING   : '\033[93m',
    FAIL      : '\033[91m',
    ENDC      : '\033[0m', 
    BOLD      : '\033[1m',   
}

var file = process.argv.slice(2)[0];
if(!file) {
    console.log("Enter the path of the spec to validate.");
    return; 
}

const { completionSpec } = require(file);
var fileParts = file.split('/');
var specName = fileParts[fileParts.length - 1].split('.')[0];

const { error } = Spec.validate(completionSpec);


console.log(`${bColors.BOLD} ◧ FIG AUTOCOMPLETE LINTER V1 ${bColors.ENDC}\n`)
console.log(`💨 Linting the ${specName.toUpperCase()} spec...`)

if(error) {
    console.log("❌ Autocompletion spec validation failed.");
    console.log("------------------------------------------")
    for(var i = 0; i < error.details.length; i++) {
        const detail = error.details[i];
        var curr = error._original;
        var errorMessage = completionSpec.name;
        for(var k = 0; k < detail.path.length; k++) {
            //iterate down the path to grab all elements
            var path = detail.path[k];
            if(path === "subcommands" || path === "options" || path === "args" || path === "generators" || path === "suggestions" || path === "additionalSuggestions") {
               errorMessage += '/' + path;
            }
            curr = curr[path];
            if(curr.name != null) {
                errorMessage += " " + JSON.stringify(curr.name);
            }
        }
        console.log(`${bColors.FAIL}Error: ${detail.message} ${bColors.ENDC}`);
        console.log("Path to error: " + `${bColors.WARNING}${errorMessage}${bColors.ENDC}`);
        console.log("Current value:");
        console.log(detail.context.value);
    }
}
else {
    console.log(`${bColors.OKGREEN}✅ Your autocomplete completion spec is working properly!${bColors.ENDC}`)
}

// console.log(value);

// function validateFunction(functionString) {
//     // Running script in context will return any JS syntax errors using Node's built-in syntax checker
//     const script = new vm.Script(data);
//     // Running script in context will return any JS syntax errors using Node's built-in syntax checker

//     script.runInThisContext({
//         displayErrors: true
//     });

// }

// function isNumeric(str) {
//     if (typeof str != "string") return false // we only process strings!  
//     return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
//            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
// }

// function parseJSON(pointer, specJson) {
//     var parts = pointer.split('/');
//     var errorString = "";

//     var current = specJson;
//     for(var i = 1; i < parts.length-1; i++) {
//         //traverse to the part in json
//         var part = parts[i];
//         if(part === "options") {
//             current = current[part];
//             errorString += "/option ";
//         }
//         if(part === "subcommand") {
//             current = current[part];
//             errorString += "/subcommand "
//         }
//         if(part === "args") {
//             current = current[part];
//             errorString += "/arg ";
//         }
//         if(part === "suggestion") {
//             current = current[part];
//             errorString += "/suggestion "
//         }
//         if(isNumeric(part)) {
//             var num = parseInt(part);
//             current = current[num];
//             if(current.name) {
//                 errorString += current.name + '/';
//             }
//         }
//     }
//     errorString += parts[parts.length-1];
//     return errorString;
// }

// var file = process.argv.slice(2)[0];
// console.log("file");
// if(!file) {
//     console.log("Enter the path of the spec to validate.");
//     return; 
// }
// var data = fs.readFileSync(file, 'utf8');
// var lines = data.split('\n');

// var startIndex = lines.indexOf("var completionSpec = {");
// lines[startIndex] = "{";

// var specJson = "";
// for(var i = startIndex; i < lines.length; i++) {
//     var line = lines[i];
//     //Ignore comments
//     if(line.includes("//") || line.includes("generators")) {
//         continue;
//     }
//     specJson += line + '\n';
// }

// specJson = specJson.replace(/([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)/g, "\"$1\":\"$2\"");

// console.log(specJson);
// const parsedJson = JSON5.parse(specJson);

// const validate = ajv.compile(CompletionSpecSchema);
// const valid = validate(parsedJson);


// var fileParts = file.split('/');
// var specName = fileParts[fileParts.length - 1].split('.')[0];
// console.log(`💨 Running linter on the ${specName.toUpperCase()} spec.`)

// if(valid) {
//     console.log("✅ Your autocomplete completion spec is working properly!")
// }
// else {
//     console.log("❌ Autocompletion spec validation failed.");
//     console.log("------------------------------------------")
//     let errorMessage = '';
//     const sourceMap = jsonSourceMap.stringify(parsedJson, null, 2);
//     const jsonLines = sourceMap.json.split('\n');
//     validate.errors.forEach(error => {
//         var dataPath = error.dataPath;
//         var wrongValue = jsonpointer.get(parsedJson, dataPath);

//         // errorMessage += '\n' + ajv.errorsText([ error ]);
//         console.log("Error: " + parseJSON(dataPath, parsedJson) + " " + error.message);
//         errorMessage += "current value of " + error.dataPath.split('/').pop() + " is " + wrongValue + " of type " + typeof(wrongValue);
//         let errorPointer = sourceMap.pointers[error.dataPath];
//         var line = errorPointer.value.line;
//         var endLine = line + 1;
//         if(errorPointer.valueEnd.line > errorPointer.value.line + 1) {
//             endLine = errorPointer.valueEnd.line
//         }
//         errorMessage += '\n> ' + jsonLines.slice(errorPointer.value.line, endLine).join('\n> ');
//     });
//     console.log(errorMessage);
// }