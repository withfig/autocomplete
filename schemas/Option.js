const Joi = require('joi');
const { Arg } = require('./Arg');
const { Suggestion } = require('./Suggestion');

const Option = Joi.object({
    name: Joi.alternatives().try(Joi.string().allow(''), Joi.array().items(Joi.string().allow(''))).required(),
    displayName: Joi.string(),
    insertValue: Joi.string(),
    description: Joi.string().optional().allow(''),
    icon: Joi.string(),
    additionalSuggestions: Joi.array().items(Suggestion),
    args: [Arg, Joi.array().items(Arg)]
})

module.exports = { Option };