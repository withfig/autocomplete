var Schema = require('../BaseSchema')

var NumberSchema = module.exports = Schema.extensions.NumberSchema = Schema.extend({
  initialize: function(minimum, exclusiveMinimum, maximum, exclusiveMaximum, divisibleBy) {
    this.minimum = minimum != null ? minimum : -Infinity
    this.exclusiveMinimum = exclusiveMinimum
    this.maximum = minimum != null ? maximum : Infinity
    this.exclusiveMaximum = exclusiveMaximum
    this.divisibleBy = divisibleBy || 0
  },

  min: function(minimum) {
    return new NumberSchema( minimum, false
                           , this.maximum
                           , this.exclusiveMaximum
                           , this.divisibleBy
                           ).wrap()
  },

  above: function(minimum) {
    return new NumberSchema( minimum, true
                           , this.maximum
                           , this.exclusiveMaximum
                           , this.divisibleBy
                           ).wrap()
  },

  max: function(maximum) {
    return new NumberSchema( this.minimum
                           , this.exclusiveMinimum
                           , maximum
                           , false
                           , this.divisibleBy
                           ).wrap()
  },

  below: function(maximum) {
    return new NumberSchema( this.minimum
                           , this.exclusiveMinimum
                           , maximum
                           , true
                           , this.divisibleBy
                           ).wrap()
  },

  step: function(divisibleBy) {
    return new NumberSchema( this.minimum
                           , this.exclusiveMinimum
                           , this.maximum
                           , this.exclusiveMaximum
                           , divisibleBy
                           ).wrap()
  },

  publicFunctions: ['min', 'above', 'max', 'below', 'step'],

  errors: function(instance) {
    var message
    if (!(Object(instance) instanceof Number)) {
      message = instance + ' is not Number'
    } else if (instance < this.minimum) {
      message = 'number = ' + instance + ' is smaller than required minimum = ' + this.minimum
    } else if (instance > this.maximum) {
      message = 'number = ' + instance + ' is bigger than required maximum = ' + this.maximum
    } else if (this.divisibleBy !== 0 && instance % this.divisibleBy !== 0) {
      message = 'number = ' + instance + ' is not divisibleBy ' + this.divisibleBy
    }

    if (message != null) {
      return message
    }
    return false
  },

  validate: function(instance) {
    return (Object(instance) instanceof Number) &&
      (this.exclusiveMinimum ? instance >  this.minimum
                             : instance >= this.minimum) &&
      (this.exclusiveMaximum ? instance <  this.maximum
                             : instance <= this.maximum) &&
      (this.divisibleBy === 0 || instance % this.divisibleBy === 0)
  },

  toJSON: function() {
    var json = Schema.prototype.toJSON.call(this)

    json.type = ( this.divisibleBy !== 0 && this.divisibleBy % 1 === 0) ? 'integer' : 'number'

    if (this.divisibleBy !== 0 && this.divisibleBy !== 1) json.divisibleBy = this.divisibleBy

    if (this.minimum !== -Infinity) {
      json.minimum = this.minimum
      if (this.exclusiveMinimum === true) json.exclusiveMinimum = true
    }

    if (this.maximum !== Infinity) {
      json.maximum = this.maximum
      if (this.exclusiveMaximum === true) json.exclusiveMaximum = true
    }

    return json
  }
})

Schema.fromJSON.def(function(sch) {
  if (!sch || (sch.type !== 'number' && sch.type !== 'integer')) return

  return new NumberSchema(sch.minimum, sch.exclusiveMinimum, sch.maximum, sch.exclusiveMaximum, sch.divisibleBy || (sch.type === 'integer' ? 1 : 0))
})

Number.schema     = new NumberSchema().wrap()
Number.min        = Number.schema.min
Number.above      = Number.schema.above
Number.max        = Number.schema.max
Number.below      = Number.schema.below
Number.step       = Number.schema.step

Number.Integer    = Number.step(1)
