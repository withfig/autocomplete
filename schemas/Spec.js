const Joi = require('joi');
const { Command } = require('./Command');
const { Option } = require('./Option');
const { Arg } = require('./Arg');
const { Suggestion } = require('./Suggestion');

const Spec = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional().allow(''),
    subcommands: Joi.array().items(Command),
    options: Joi.array().items(Option),
    args: [Arg, Joi.array().items(Arg)],
    additionalSuggestions: Joi.array().items(Suggestion)
})

module.exports = { Spec };