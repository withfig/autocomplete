var domain = {
    name: 'domain',
    generators: {
        script: 'defaults domains',
        postProcess: function (out) {
            return out.split(',').map(function (domain) {
                return {
                    name: domain.trim(),
                };
            });
        },
    },
    suggestions: [
        {
            name: '-globalDomain',
            description: 'Global domain',
        },
        {
            name: '-app',
            insertValue: "-app '{cursor}'",
            description: 'Application name',
        },
    ],
};
var key = {
    name: 'key',
};
var value = {
    name: 'value',
};
var valueArgs = [
    {
        name: '-string',
        args: {
            name: 'string_value',
        },
    },
    {
        name: '-data',
        args: {
            name: 'hex_digits',
        },
    },
    {
        name: ['-int', '-integer'],
        args: {
            name: 'integer_value',
        },
    },
    {
        name: '-float',
        args: {
            name: 'floating-point_value',
        },
    },
    {
        name: ['-bool', '-boolean'],
        args: {
            suggestions: [
                {
                    name: 'true',
                },
                {
                    name: 'false',
                },
                {
                    name: 'yes',
                },
                {
                    name: 'no',
                },
            ],
        },
    },
    {
        name: '-date',
        args: {
            name: 'date_rep',
        },
    },
    {
        name: '-array',
        args: {
            variadic: true,
            name: 'array_item',
        },
    },
    {
        name: '-array-add',
        args: {
            variadic: true,
            name: 'array_item',
        },
    },
];
var completionSpec = {
    name: 'defaults',
    description: "Command line interface to a user's defaults.",
    options: [],
    subcommands: [
        {
            name: 'read',
            description: 'shows defaults',
            args: [domain, key],
        },
        {
            name: 'write',
            insertValue: 'write ',
            description: 'writes key for domain',
            args: [domain, key, value],
        },
        {
            name: 'delete',
            description: 'deletes domain or key in domain',
            args: [domain, key],
        },
        {
            name: 'rename',
            description: 'renames old_key to new_key',
            args: [
                domain,
                {
                    name: 'old_key',
                },
                {
                    name: 'new_key',
                },
            ],
        },
        {
            name: 'domains',
            description: 'lists all domains',
            args: [],
        },
        {
            name: 'find',
            description: 'lists all entries containing word',
            args: {
                name: 'word',
                description: 'The word to search for...',
            },
        },
        {
            name: 'help',
            description: 'show help text',
        },
        {
            name: 'read-type',
            description: 'shows the type for the given domain, key',
            args: [domain, key],
        },
    ],
};

// Command line interface to a user's defaults.
// Syntax:
// 'defaults' [-currentHost | -host <hostname>] followed by one of the following:
//   read                                 shows all defaults
//   read <domain>                        shows defaults for given domain
//   read <domain> <key>                  shows defaults for given domain, key
//   read-type <domain> <key>             shows the type for the given domain, key
//   write <domain> <domain_rep>          writes domain (overwrites existing)
//   write <domain> <key> <value>         writes key for domain
//   rename <domain> <old_key> <new_key>  renames old_key to new_key
//   delete <domain>                      deletes domain
//   delete <domain> <key>                deletes key in domain
//   import <domain> <path to plist>      writes the plist at path to domain
//   import <domain> -                    writes a plist from stdin to domain
//   export <domain> <path to plist>      saves domain as a binary plist to path
//   export <domain> -                    writes domain as an xml plist to stdout
//   domains                              lists all domains
//   find <word>                          lists all entries containing word
//   help                                 print this help
// <domain> is ( <domain_name> | -app <application_name> | -globalDomain )
//          or a path to a file omitting the '.plist' extension
// <value> is one of:
//   <value_rep>
//   -string <string_value>
//   -data <hex_digits>
//   -int[eger] <integer_value>
//   -float  <floating-point_value>
//   -bool[ean] (true | false | yes | no)
//   -date <date_rep>
//   -array <value1> <value2> ...
//   -array-add <value1> <value2> ...
//   -dict <key1> <value1> <key2> <value2> ...
//   -dict-add <key1> <value1> ...
