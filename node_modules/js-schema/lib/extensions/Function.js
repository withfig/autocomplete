var ReferenceSchema = require('../patterns/reference')

Function.reference = function(f) {
  return new ReferenceSchema(f).wrap()
}
