module.exports = function (input, errors, schema){
    input = input || {};
    return [
        "",schema ? "Schema:\n"+JSON.stringify(schema, null, 2) :"",
        "","Input:",JSON.stringify(input, null, 2),
        "","Errors:",JSON.stringify(errors, null,2)
    ].join("\n")
}
