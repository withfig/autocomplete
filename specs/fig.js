var completionSpec = {
    name: 'fig',
    description: 'Autocomplete for your terminal',
    subcommands: [
        { name: 'source', description: '(re)connect fig to the current shell session' },
        { name: 'update', description: 'update completion specs' },
        {
            name: 'settings',
            description: 'update preferences',
            subcommands: [
                {
                    displayName: 'developerMode',
                    name: 'autocomplete.developerMode',
                    icon: 'fig://icon?type=commandkey',
                    insertValue: 'autocomplete.developerMode ',
                    description: 'Turns off caching and loads completions from <code>devCompletionsFolder</code>',
                    args: {
                        name: 'bool',
                        suggestions: [
                            { name: 'true', icon: 'fig://icon?type=string' },
                            { name: 'false', icon: 'fig://icon?type=string' },
                        ],
                    },
                },
                {
                    displayName: 'devCompletionsFolder',
                    name: 'autocomplete.devCompletionsFolder',
                    icon: 'fig://icon?type=commandkey',
                    insertValue: 'autocomplete.devCompletionsFolder ',
                    description: 'Directory to load completion specs when in <code>developerMode</code>',
                    args: {
                        name: 'folder',
                        description: 'absolute path to directory containing specs',
                        generators: {
                            script: 'ls -d -1 "$PWD/"**/',
                            postProcess: function (out) {
                                var folders = out.split('\n');
                                return folders.map(function (folder) {
                                    var paths = folder.split('/');
                                    paths.pop();
                                    return {
                                        name: paths.pop(),
                                        insertValue: folder,
                                        icon: "fig://" + folder,
                                    };
                                });
                            },
                        },
                    },
                },
                {
                    name: 'autocomplete.disableForCommands',
                    icon: 'fig://icon?type=commandkey',
                    insertValue: "autocomplete.disableForCommands '{cursor}'",
                    description: 'JSON array of commands Fig should not autocomplete on.',
                    args: {
                        name: 'array',
                        generators: {
                            script: 'fig settings autocomplete.disableForCommands',
                            postProcess: function (out) {
                                var existing = out.split('\n').filter(function (item) {
                                    return item.length > 0;
                                });
                                var append = {
                                    name: 'Disable...',
                                    icon: 'fig://icon?type=box',
                                    insertValue: JSON.stringify(existing.concat(['{cursor}'])),
                                };
                                var enabledAll = {
                                    name: 'Enable all commands',
                                    icon: 'fig://icon?type=box',
                                    insertValue: '[]',
                                };
                                return [append, enabledAll].concat(existing.map(function (disabledCommand) {
                                    return {
                                        name: "Enable " + disabledCommand,
                                        icon: 'fig://icon?type=box',
                                        insertValue: JSON.stringify(existing.filter(function (cmd) {
                                            return cmd != disabledCommand;
                                        })),
                                    };
                                }));
                            },
                        },
                    },
                },
                {
                    name: 'pty.path',
                    icon: 'fig://icon?type=commandkey',
                    description: "Specify the $PATH variable in Fig's pseudoterminal",
                    args: {
                        name: 'path',
                        description: "The <code>$PATH</code> variable in Fig's pseudoterminal",
                        suggestions: [{ name: '$PATH', icon: 'fig://icon?type=string' }],
                    },
                },
            ],
        },
        {
            name: 'uninstall',
            description: 'uninstall a completion spec',
            args: {
                name: 'spec',
                description: 'The CLI completion spec to remove',
                generators: {
                    script: 'ls -1Ap ~/.fig/autocomplete',
                    postProcess: function (data) {
                        console.log(data);
                        var out = data.split('\n').reduce(function (acc, curr) {
                            if (['.gitignore', 'README.md', 'package.json', 'package-lock.json'].includes(curr))
                                return acc;
                            else {
                                acc.push({
                                    name: curr.trim().split('.')[0],
                                    icon: 'fig://icon?type=box',
                                });
                                return acc;
                            }
                        }, []);
                        return out;
                    },
                },
            },
        },
        { name: 'invite', description: 'share Fig with a teammate ⭐', icon: 'fig://icon?type=invite' },
        { name: 'report', description: 'report an issue' },
        { name: 'tweet', description: 'tweet about Fig', icon: 'fig://icon?type=twitter' },
        { name: 'docs', description: 'view docs in browser' },
        { name: 'list', description: 'list all available completion specs' },
        { name: 'onboarding', description: "re-run Fig's onboarding" },
        { name: 'diagnostic', description: 'display diagnostic information' },
        {
            name: 'team:upload',
            description: 'share an completion spec with your team',
            args: {
                name: 'spec',
                template: 'filepaths',
            },
        },
        { name: 'team:download', description: "download your team's spec" },
        { name: 'integrations:iterm', description: 'Install the iTerm tab integration' },
    ],
    options: [
        {
            name: ['-h', '--help'],
            description: 'Overview of Fig CLI',
        },
        {
            name: ['--version'],
            description: 'The current Fig version',
        },
    ],
};

