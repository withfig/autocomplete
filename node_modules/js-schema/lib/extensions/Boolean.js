var Schema = require('../BaseSchema')

var BooleanSchema = module.exports = Schema.extensions.BooleanSchema = new Schema.extend({
  errors: function(instance) {
    if (!this.validate(instance)) {
      return ( instance + ' is not Boolean' )
    }
    return false
  },

  validate: function(instance) {
    return Object(instance) instanceof Boolean
  },

  toJSON: function() {
    return {
      type: 'boolean'
    }
  }
})

var booleanSchema = module.exports = new BooleanSchema().wrap()

Schema.fromJSON.def(function(sch) {
  if (!sch || sch.type !== 'boolean') return

  return booleanSchema
})

Boolean.schema = booleanSchema
