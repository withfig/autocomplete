var vows            = require('vows')
  , assert          = require('assert')
  , printTestResult = require('../printTestResult.js')
  , schema          = require('../../index.js')

// Create a Test Suite
vows.describe('Validation Boolean with errors').addBatch({
  'Boolean': {
    topic: function() {
      return {
        invalid_inputs: [0, -1, 1, 'false', 'true', 'whatever', NaN, [], {}, /dwa/]
      }
    },
    'invalid input -> [0,-1,1,"false","true","whatever",NaN, [],{},/dwa/]': function(topic) {
      topic.invalid_inputs.forEach(function(input) {
        var result = schema(Boolean).errors(input);
        assert(/(.*) is not Boolean/.test(result), 'Errors should throw : ' + input + ' is not Boolean')
        assert(/(.*) is not Boolean/.test(result), 'Errors should throw : ' + input + ' is not Boolean')
      })

    }
  }
}).export(module)
