const Joi = require('joi');

const Suggestion = Joi.object({
    name: Joi.alternatives().try(Joi.string(), Joi.array().items(Joi.string())).required(),
    displayName: Joi.string(),
    insertValue: Joi.string(),
    description: Joi.string().optional().allow(''),
    type: Joi.string(),
    icon: Joi.string()
})

module.exports = { Suggestion };