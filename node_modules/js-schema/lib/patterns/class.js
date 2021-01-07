var Schema = require('../BaseSchema')

var ClassSchema = module.exports = Schema.patterns.ClassSchema = Schema.extend({
  initialize: function(constructor) {
    this.constructor = constructor
  },
  getName: function(obj) {
    if (!obj) return obj
    if (obj instanceof Object) {
      return obj.constructor.name
    } else {
      return typeof obj + ' = ' + obj
    }
  },
  errors: function(instance) {
    var middleMessage = ' is not instance of '

    if (instance == null) {
      return this.getName(instance) + middleMessage + this.getName(this.constructor)
    }
    if (!(instance instanceof this.constructor)) {
      return this.getName(instance) + middleMessage + this.getName(this.constructor);
    }
    return false
  },
  validate: function(instance) {
    return instance instanceof this.constructor
  }
})


Schema.fromJS.def(function(constructor) {
  if (!(constructor instanceof Function)) return

  if (constructor.schema instanceof Function) {
    return constructor.schema.unwrap()
  } else {
    return new ClassSchema(constructor)
  }
})
