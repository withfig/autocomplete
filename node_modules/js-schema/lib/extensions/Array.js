var Schema          = require('../BaseSchema')
  , EqualitySchema  = require('../patterns/equality')
  , anything        = require('../patterns/anything').instance

var ArraySchema = module.exports = Schema.extensions.ArraySchema = Schema.extend({
  initialize: function(itemSchema, max, min) {
    this.itemSchema = itemSchema || anything
    this.min = min || 0
    this.max = max || Infinity
  },
  errors: function(instance) {
    var self = this
    // Instance must be an instance of Array
    if (!(instance instanceof Array))
      return ( instance + ' is not an instance of Array')

    // Checking length
    if (this.min === this.max) {
      if (instance.length !== this.min)
        return ( 'Array length should be equal to ' + this.min + ' and is ' + instance.length )

    } else {
      if (this.min > 0 && instance.length < this.min)
        return ( 'Array length should not be less than ' + this.min + ' and is ' + instance.length )
      if (this.max < Infinity && instance.length > this.max)
        return ( 'Array length should not be more than ' + this.max + ' and is ' + instance.length )
    }

    // Checking conformance to the given item schema
    var results = {}
    for (var i = 0; i < instance.length; i++) {
      var errs = this.itemSchema.errors(instance[i])
      if (errs) {
        results[i] = errs
      }
    }
    var resultKeysArray = Object.keys(results)
    if (resultKeysArray.length > 0) {
      return results
    }

    return false
  },
  validate: function(instance) {
    // Instance must be an instance of Array
    if (!(instance instanceof Array)) return false

    // Checking length
    if (this.min === this.max) {
      if (instance.length !== this.min) return false

    } else {
      if (this.min > 0 && instance.length < this.min) return false
      if (this.max < Infinity && instance.length > this.max) return false
    }

    // Checking conformance to the given item schema
    for (var i = 0; i < instance.length; i++) {
      if (!this.itemSchema.validate(instance[i])) return false
    }

    return true
  },

  toJSON: Schema.session(function() {
    var json = Schema.prototype.toJSON.call(this, true)

    if (json['$ref'] != null) return json

    json.type = 'array'

    if (this.min > 0) json.minItems = this.min
    if (this.max < Infinity) json.maxItems = this.max
    if (this.itemSchema !== anything) json.items = this.itemSchema.toJSON()

    return json
  })
})


Schema.fromJSON.def(function(sch) {
  if (!sch || sch.type !== 'array') return

  // Tuple typing is not yet supported
  if (sch.items instanceof Array) return

  return new ArraySchema(Schema.fromJSON(sch.items), sch.maxItems, sch.minItems)
})

Array.of = function() {
  // Possible signatures : (schema)
  //                       (length, schema)
  //                       (minLength, maxLength, schema)
  var args = Array.prototype.slice.call(arguments).reverse();
  if(args.length == 3){
      if(!(typeof args[2] === "number")){
          throw new Error("3 arguments were passed to Array.of and 1st argument (minLength) SHOULD be number NOT " + args[2])
      }
      if(!(typeof args[1] === "number")){
          throw new Error("3 arguments were passed to Array.of and 2nd argument (maxLength) SHOULD be number NOT " + args[1])
      }
  }
  if (args.length === 2) {
      if(!(typeof args[1] === "number")){
          throw new Error("2 arguments were passed to Array.of and 1nd argument (length) SHOULD be number NOT " + args[1])
      }
      args[2] = args[1]
  }
  return new ArraySchema(Schema.fromJS(args[0]), args[1], args[2]).wrap()
}

Array.like = function(other) {
  return new EqualitySchema(other).wrap()
}

Array.schema = new ArraySchema().wrap()
