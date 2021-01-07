var Schema = module.exports = function() {}

Schema.prototype = {
  wrap: function() {
    if (this.wrapped) return this.validate
    this.wrapped = true

    var publicFunctions = [ 'toJSON', 'unwrap', 'errors' ]
    publicFunctions = publicFunctions.concat(this.publicFunctions || [])

    for (var i = 0; i < publicFunctions.length; i++) {
      if (!this[publicFunctions[i]]) continue
      this.validate[publicFunctions[i]] = this[publicFunctions[i]].bind(this)
    }

    return this.validate
  },

  unwrap: function() {
    return this
  },

  toJSON: session(function(makeReference) {
    var json, session = Schema.session

    // Initializing session if it isnt
    if (!session.serialized) session.serialized = { objects: [], jsons: [], ids: [] }

    var index = session.serialized.objects.indexOf(this)
    if (makeReference && index !== -1) {
      // This was already serialized, returning a JSON schema reference ($ref)
      json = session.serialized.jsons[index]

      // If there was no id given, generating one now
      if (json.id == null) {
        do {
          json.id = 'id-' + Math.floor(Math.random() * 100000)
        } while (session.serialized.ids.indexOf(json.id) !== -1)
        session.serialized.ids.push(json.id)
      }

      json = { '$ref': json.id }

    } else {
      // This was not serialized yet, serializing now
      json = {}

      if (this.doc != null) json.description = this.doc

      // Registering that this was serialized and storing the json
      session.serialized.objects.push(this)
      session.serialized.jsons.push(json)
    }

    return json
  })
}

Schema.extend = function(descriptor) {
  if (!descriptor.validate) {
    throw new Error('Schema objects must have a validate function.')
  }

  var constructor = function() {
    var self = this;
    if (this.initialize)
      this.initialize.apply(this, arguments)

    this.validate = this.validate.bind(this)
    this.validate.schema = this.validate
  }

  var prototype = Object.create(Schema.prototype)
  for (var key in descriptor) prototype[key] = descriptor[key]
  constructor.prototype = prototype

  return constructor
}


var active = false
function session(f) {
  return function() {
    if (active) {
      // There's an active session, just forwarding to the original function
      return f.apply(this, arguments)

    } else {
      // The initiator is the one who handles the active flag, and clears the session when it's over
      active = true

      var result = f.apply(this, arguments)

      // Cleanup
      for (var i in session) delete session[i]
      active = false

      return result
    }
  }
}
Schema.session = session

function lastDefinedResult(functions, arg) {
  var i = functions.length, result;
  while (i--) {
    result = functions[i](arg)
    if (result != null) return result
  }
}

var fromJSdefs = []
Schema.fromJS = lastDefinedResult.bind(null, fromJSdefs)
Schema.fromJS.def = Array.prototype.push.bind(fromJSdefs)

var fromJSONdefs = []
Schema.fromJSON = session(lastDefinedResult.bind(null, fromJSONdefs))
Schema.fromJSON.def = Array.prototype.push.bind(fromJSONdefs)

Schema.patterns = {}
Schema.extensions = {}
