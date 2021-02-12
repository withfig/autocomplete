const Joi = require('joi');
const { Suggestion } = require('./Suggestion');
const { Generator } = require('./Generator');

const Arg = Joi.object({
    name: Joi.string(),
    displayName: Joi.string(),
    insertValue: Joi.string().allow(''),
    description: Joi.string().optional().allow(''),
    icon: Joi.string(),
    suggestions: Joi.array().items(Suggestion),
    template: Joi.string().valid("filepaths", "folders"),
    generators: Joi.alternatives().try(Generator, Joi.array().items(Generator)),
    variadic: Joi.boolean()
})

module.exports = { Arg };