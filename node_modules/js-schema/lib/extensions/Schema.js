var Schema = require('../BaseSchema')
  , schema = require('../schema')

var SchemaReference = module.exports = Schema.extensions.SchemaReference = Schema.extend({
  validate: function() {
    throw new Error('Trying to validate unresolved schema reference.')
  },

  resolve: function(schemaDescriptor) {
    var schemaObject = Schema.fromJS(schemaDescriptor)

    for (var key in schemaObject) {
      if (schemaObject[key] instanceof Function) {
        this[key] = schemaObject[key].bind(schemaObject)
      } else {
        this[key] = schemaObject[key]
      }
    }

    delete this.resolve
  },

  publicFunctions: [ 'resolve' ]
})

schema.reference = function(schemaDescriptor) {
  return new SchemaReference()
}

function renewing(ref) {
  ref.resolve = function() {
    Schema.self = schema.self = renewing(new SchemaReference())
    return SchemaReference.prototype.resolve.apply(this, arguments)
  }
  return ref
}

Schema.self = schema.self = renewing(new SchemaReference())

Schema.fromJSON.def(function(sch) {
  if (sch.id == null && sch['$ref'] == null) return

  var id, session = Schema.session

  if (!session.deserialized) session.deserialized = { references: {}, subscribers: {} }

  if (sch.id != null) {
    // This schema can be referenced in the future with the given ID
    id = sch.id

    // Deserializing:
    delete sch.id
    var schemaObject = Schema.fromJSON(sch)
    sch.id = id

    // Storing the schema object and notifying subscribers
    session.deserialized.references[id] = schemaObject
    ;(session.deserialized.subscribers[id] || []).forEach(function(callback) {
      callback(schemaObject)
    })

    return schemaObject

  } else {
    // Referencing a schema given somewhere else with the given ID
    id = sch['$ref']

    // If the referenced schema is already known, we are ready
    if (session.deserialized.references[id]) return session.deserialized.references[id]

    // If not, returning a reference, and when the schema gets known, resolving the reference
    if (!session.deserialized.subscribers[id]) session.deserialized.subscribers[id] = []
    var reference = new SchemaReference()
    session.deserialized.subscribers[id].push(reference.resolve.bind(reference))

    return reference
  }
})
