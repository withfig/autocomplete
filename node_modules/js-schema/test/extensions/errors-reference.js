var vows = require('vows')
  , assert = require('assert')
  , printTestResult = require('../printTestResult.js')
  , schema = require('../../index.js')
  , ReferenceSchema = require('../../lib/patterns/reference')


var generateTest = function(ref) {
  var sch = schema(new ReferenceSchema(ref));
  var result = sch.errors(topic.input);
  assert(/Object is not reference to Function = function A(){}/.test(result), printTestResult(ref, result));
}
// Create a Test Suite
vows.describe('Validation Reference with errors').addBatch({

  '': {
    topic: function() {
      var A = function A() {
        this.name = 'dwa'
      };

      var instanceA = new A();
      return {
        kinds: ['string', 'number', 'date', 'function A()', 'new A()', 'function ()', 'Object'],
        inputs: {
          'null': null,
          'undefined': undefined,
          'string': 'other',
          'number': 10,
          'date': new Date(),
          'A': A,
          'new A()': instanceA
        },
        schemas: {
          'string': schema(new ReferenceSchema('test')),
          'number': schema(new ReferenceSchema(10)),
          'date': schema(new ReferenceSchema(new Date())),
          'A': schema(new ReferenceSchema(A)),
          'new A()': schema(new ReferenceSchema(instanceA))
        }
      }
    },
    'all by all': function(topic) {
      inputLabels: for (var inputKey in topic.inputs) {
        schemaLabels: for (var schemaKey in topic.schemas) {
          var sch = topic.schemas[schemaKey];
          var inp = topic.inputs[inputKey];
          if (schemaKey != inputKey) {
            var result = sch.errors(inp);
            assert(result)
            if (result) {
              console.log('      all by all', vows.inspect(result));
            }
          }
        }
      }
    }
  }
}).export(module)
