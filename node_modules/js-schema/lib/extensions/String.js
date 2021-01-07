var RegexpSchema = require('../patterns/regexp')

String.of = function() {
  // Possible signatures : (charset)
  //                       (length, charset)
  //                       (minLength, maxLength, charset)
  var args = Array.prototype.slice.call(arguments).reverse()
    , charset = args[0] ? ('[' + args[0] + ']') : '.'
    , max = args[1]
    , min = (args.length > 2) ? args[2] : args[1]
    , regexp = '^' + charset + '{' + (min || 0) + ',' + (max || '') + '}$'

  return new RegexpSchema(RegExp(regexp)).wrap()
}

String.schema = new RegexpSchema().wrap()
