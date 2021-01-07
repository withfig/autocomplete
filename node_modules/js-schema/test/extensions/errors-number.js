var vows            = require('vows')
  , assert          = require('assert')
  , printTestResult = require('../printTestResult.js')
  , schema          = require('../../index.js')


// Create a Test Suite
vows.describe('Validation Number with errors').addBatch({

  'Number': {
    topic: function() {
      return {
        positive_number: 5,
        negative_number: -32,
        zero: 0
      }
    },
    'min() - invalid input': function(topic) {
      var result = schema(Number.min(5)).errors(0);
      assert(/number = (.*) is smaller than required minimum = (.*)/.test(result), 'Error should return : number = X is smaller than required minimum = Y');
    },
    'min() - valid input': function(topic) {
      var result = schema(Number.min(5)).errors(5);
      assert(!result, printTestResult(5, result))
    },
    'max() - invalid input': function(topic) {
      var result = schema(Number.max(5)).errors(9);
      assert(/number = (.*) is bigger than required maximum = (.*)/.test(result), 'Error should return : number = X is bigger than required maximum = Y');
    },
    'max() - valid input': function(topic) {
      var result = schema(Number.max(5)).errors(5);
      assert(!result, printTestResult(5, result))
    },
    'min().max() - valid input': function(topic) {
      var result = schema(Number.min(0).max(5)).errors(5);
      assert(!result, printTestResult(5, result))
    }
  }
}).export(module)
