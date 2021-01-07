var Schema = require('../BaseSchema')

var RegexpSchema = module.exports = Schema.patterns.RegexpSchema = Schema.extend({
  initialize: function(regexp) {
    this.regexp = regexp
  },
  errors: function(instance) {
    var message
    if (!(Object(instance) instanceof String)) {
      message = instance + ' is not a String'
    } else if (this.regexp && !this.regexp.test(instance)) {
      message = instance + ' is not matched with RegExp -> ' + this.regexp
    }

    if (message)
      return message
    return false
  },
  validate: function(instance) {
    return Object(instance) instanceof String && (!this.regexp || this.regexp.test(instance))
  },

  toJSON: function() {
    var json = Schema.prototype.toJSON.call(this)

    json.type = 'string'

    if (this.regexp) {
      json.pattern = this.regexp.toString()
      json.pattern = json.pattern.substr(1, json.pattern.length - 2)
    }

    return json
  }
})

Schema.fromJSON.def(function(sch) {
  if (!sch || sch.type !== 'string') return

  if ('pattern' in sch) {
    return new RegexpSchema(RegExp('^' + sch.pattern + '$'))
  } else if ('minLength' in sch || 'maxLength' in sch) {
    return new RegexpSchema(RegExp('^.{' + [sch.minLength || 0, sch.maxLength].join(',') + '}$'))
  } else {
    return new RegexpSchema()
  }
})

Schema.fromJS.def(function(regexp) {
  if (regexp instanceof RegExp) return new RegexpSchema(regexp)
})
