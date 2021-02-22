const Joi = require('joi');
const { Option } = require('./Option');
const { Arg } = require('./Arg');
const { Suggestion } = require('./Suggestion');

const Command = Joi.object({
    name: Joi.string().required(),
    displayName: Joi.string(),
    insertValue: Joi.string(),
    description: Joi.string().optional().allow(''),
    icon: Joi.string(),
    subcommands: Joi.array().items(Joi.link('...')),
    options: Joi.array().items(Option),
    args: [Arg, Joi.array().items(Arg)],
    additionalSuggestions: Joi.array().items(Suggestion)
});

module.exports = { Command };