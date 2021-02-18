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
    template: Joi.array().items(Joi.string().valid("filepaths", "folders")),
    generators: Joi.alternatives().try(Generator, Joi.array().items(Generator)),
    generator: Joi.alternatives().try(Generator),
    variadic: Joi.boolean(),
    isOptional: Joi.boolean()
})

module.exports = { Arg };