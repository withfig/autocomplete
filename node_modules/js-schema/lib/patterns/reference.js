var Schema = require('../BaseSchema')

var ReferenceSchema = module.exports = Schema.patterns.ReferenceSchema = Schema.extend({
  initialize: function(value) {
    this.value = value
  },
  getName: function(obj) {
    if (obj instanceof Object) {
      return obj.constructor.name + ' = ' + obj
    } else {
      return typeof obj + ' = ' + obj
    }
  },
  errors: function(instance) {
    if (instance == null) {
      return ( instance + ' is not a reference' )
    }
    if (instance !== this.value) {
      var middleMessage = ' is not reference to '
      return ( this.getName(instance) + middleMessage + this.getName(this.value) )
    }
    return false
  },
  validate: function(instance) {
    return instance === this.value
  },

  toJSON: function() {
    var json = Schema.prototype.toJSON.call(this)

    json['enum'] = [this.value]

    return json
  }
})


Schema.fromJS.def(function(value) {
  return new ReferenceSchema(value)
})
