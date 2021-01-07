const Joi = require('joi');

const Suggestion = Joi.object({
    name: [ Joi.string(), Joi.array().items(Joi.string()) ],
    displayName: Joi.string(),
    insertValue: Joi.string(),
    description: Joi.string().optional().allow(''),
    type: Joi.string(),
    icon: Joi.string()
})

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

const Arg = Joi.object({
    name: Joi.string(),
    displayName: Joi.string(),
    insertValue: Joi.string(),
    description: Joi.string().optional().allow(''),
    icon: Joi.string(),
    suggestions: Joi.array().items(Suggestion),
    template: Joi.string().valid("filepaths", "folders"),
    generators: Generator,
    variadic: Joi.boolean()
})

const Option = Joi.object({
    name: Joi.alternatives().try(Joi.string(), Joi.array().items(Joi.string())).required(),
    displayName: Joi.string(),
    insertValue: Joi.string(),
    description: Joi.string().optional().allow(''),
    icon: Joi.string(),
    additionalSuggestions: Joi.array().items(Suggestion),
    args: [Arg, Joi.array().items(Arg)]
})

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

const Spec = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional().allow(''),
    subcommands: Joi.array().items(Command),
    options: Joi.array().items(Option),
    args: [Arg, Joi.array().items(Arg)],
    additionalSuggestions: Joi.array().items(Suggestion)
})

module.exports = {
    Spec
}