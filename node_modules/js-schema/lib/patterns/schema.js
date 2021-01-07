var Schema = require('../BaseSchema')

Schema.fromJS.def(function(sch) {
  if (sch instanceof Schema) return sch
})
