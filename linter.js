// TODO Delete file when types are validated
const { Spec } = require('./schemas/Spec');
const fs = require('fs');
var path = require('path');

const bColors = {
    OKGREEN   : '\033[92m',
    WARNING   : '\033[93m',
    FAIL      : '\033[91m',
    ENDC      : '\033[0m', 
    BOLD      : '\033[1m',   
}

function validate(file) {
    var fileParts = file.split('/');
    var specName = fileParts[fileParts.length - 1].split('.')[0];

    // Read JS from spec and compile
    var data = fs.readFileSync(file, 'utf8');
    eval(data);

    console.log(`💨 Linting the ${specName.toUpperCase()} spec...`)

    // completionSpec variable made available via eval
    const { error } = Spec.validate(completionSpec);


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
            console.log('\n');
            throw new Error(`Linting failed for ${completionSpec.name}`);
        }
    }
    else {
        console.log(`${bColors.OKGREEN}✅ The ${specName} autocomplete completion spec is working properly!${bColors.ENDC}\n`);
        return true;
    }
}

console.log(`${bColors.BOLD} ◧ FIG AUTOCOMPLETE LINTER V1 ${bColors.ENDC}\n`)

var file = process.argv.slice(2)[0];
if(!file) {
    //validate the entire specs folder if no spec specified
    fs.readdir('specs', function(err, files) {
        if(err) {
            console.log("Can't find /specs folder");
            return;
        }
        for(var i = 0; i < files.length; i++) {
            var file = files[i];
            var spec = path.join('specs', file);
            if(spec === "specs/.DS_Store") {
                // Skip DS_Store
                continue;
            }
            // Skip .ts files
            if(spec.endsWith('.ts'))
                continue;
            if(!validate(spec)) {
                return;
            }
        }
    })
    return;
}
else {
    validate(file);
}