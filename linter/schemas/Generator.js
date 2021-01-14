const Joi = require('joi');

const Generator = Joi.object({
    template: Joi.string(),
    script: [Joi.string(), Joi.function()],
    splitOn: Joi.string(),
    postProcess: Joi.function().arity(1),
    trigger: [Joi.string(), Joi.function()],
    filterTerm: [Joi.string(), Joi.function()],
    script: [Joi.string(), Joi.function().arity(1)],
    custom: Joi.function().arity(1),
    filterTemplateSuggestions: Joi.function().arity(1)
})

module.exports = { Generator };