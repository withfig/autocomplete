const { Spec } = require('./schemas/Spec');
const fs = require('fs');

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

var fileParts = file.split('/');
var specName = fileParts[fileParts.length - 1].split('.')[0];

// Read JS from spec and compile
var data = fs.readFileSync(file, 'utf8');
eval(data);

// completionSpec variable made available via eval
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
        errorMessage += '/' + detail.context.key;
        console.log(`${bColors.FAIL}Error: ${detail.message} ${bColors.ENDC}`);
        console.log("Path to error: " + `${bColors.WARNING}${errorMessage}${bColors.ENDC}`);
        console.log("Current value:");
        console.log(detail.context.value);
    }
}
else {
    console.log(`${bColors.OKGREEN}✅ Your autocomplete completion spec is working properly!${bColors.ENDC}`)
}