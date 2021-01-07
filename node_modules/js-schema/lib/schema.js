var Schema = require('./BaseSchema')

schema = module.exports = function(schemaDescription) {
  var doc, schemaObject

  if (arguments.length === 2) {
    doc = schemaDescription
    schemaDescription = arguments[1]
  }

  if (this instanceof schema) {
    // When called with new, create a schema object and then return the schema function
    var constructor = Schema.extend(schemaDescription)
    schemaObject = new constructor()
    if (doc) schemaObject.doc = doc
    return schemaObject.wrap()

  } else {
    // When called as simple function, forward everything to fromJS
    // and then resolve schema.self to the resulting schema object
    schemaObject = Schema.fromJS(schemaDescription)
    schema.self.resolve(schemaObject)
    if (doc) schemaObject.doc = doc
    return schemaObject.wrap()
  }
}

schema.Schema = Schema

schema.toJSON = function(sch) {
  return Schema.fromJS(sch).toJSON()
}

schema.fromJS = function(sch) {
  return Schema.fromJS(sch).wrap()
}

schema.fromJSON = function(sch) {
  return Schema.fromJSON(sch).wrap()
}

// define js-schema using AMD
if (typeof define === 'function' && define.amd) {
  define([], function(){
    return schema;
  });
}