const completionSpec: Fig.Spec = {
    name: 'ff',
    description: '',
    args: {
        name: 'command',
        suggestions: [
            {
                icon: '🟢',
                name: 'Sync all projects',
                description: 'Ff sync',
                insertValue: `\b\b\bcd ~/repos/portal-meta\nmeta git checkout master\nmeta git pull\nff artisan migrate && ff artisan migrate --app velocity && ff artisan migrate --bsm && ff npm ci && ff npm -- run buildDev\n`,
            },
            {
                icon: '🟢',
                name: 'Start dev server',
                description: 'Ff start',
                insertValue: `\b\b\bcd ~/repos/portal-meta\nff start\n`,
            },
            {
                icon: '🛑',
                name: 'Stop dev server',
                description: 'Ff stop',
                insertValue: `\b\b\bcd ~/repos/portal-meta\nff stop\n`,
            },
            {
                icon: '🔥',
                name: 'hot',
                description: 'Cd portal-meta, ff ssh portal-node, npm run hot',
                insertValue: `\b\b\bcd ~/repos/portal-meta\nff ssh portal-node\nnpm run hot\n`,
            },
            {
                icon: '🛠',
                name: 'migrate',
                description: 'Cd portal-meta, ff artisan migrate',
                insertValue: `\b\b\bcd ~/repos/portal-meta\nff artisan migrate\n`,
            },
            {
                name: 'Jump to portal-meta repo',
                description: 'Go ~/repos/portal-meta',
                insertValue: '\b\b\bcd ~/repos/portal-meta\n',
            },
            {
                name: 'Open Docker',
                description: 'Opens the Docker app',
                insertValue: '\b\b\bopen -a Docker\n',
            },
            {
                icon: 'fig://icon?type=github',
                name: 'github/portal',
                insertValue: '\b\b\bopen https://github.com/FreedomForeverSolar/portal\n',
                description: 'Open portal Github page',
            },
            {
                icon: 'fig://icon?type=github',
                name: 'github/shared-resources',
                insertValue: '\b\b\bopen https://github.com/FreedomForeverSolar/shared-resources\n',
                description: 'Open shared-resources Github page',
            },
            {
                icon: 'fig://icon?type=github',
                name: 'github/field-app',
                insertValue: '\b\b\bopen https://github.com/FreedomForeverSolar/field-app\n',
                description: 'Open field-app Github page',
            },
            {
                icon: 'fig://icon?type=github',
                name: 'github/sales-app',
                insertValue: '\b\b\bopen https://github.com/FreedomForeverSolar/sales-app\n',
                description: 'Open sales-app Github page',
            },
            {
                icon: 'fig://icon?type=github',
                name: 'github/velocity',
                insertValue: '\b\b\bopen https://github.com/FreedomForeverSolar/velocity\n',
                description: 'Open velocity Github page',
            },
            {
                icon: 'fig://icon?type=github',
                name: 'github/bsm',
                insertValue: '\b\b\bopen https://github.com/FreedomForeverSolar/bsm\n',
                description: 'Open bsm Github page',
            },
            {
                icon: 'fig://icon?type=github',
                name: 'meta git pull',
                insertValue: '\b\b\bcd ~/repos/portal-meta\nmeta git checkout master\nmeta git pull\n',
                description: 'Checks out master and pulls all repos inside of the portal-meta directory',
            },
        ],
    },
    subcommands: [
        {
            name: 'setup',
            description: 'Runs setup commands for this project',
            args: {
                name: 'step',
                description: 'Specific step to setup',
                isOptional: true,
                suggestions: [
                    'env',
                    'docker',
                    'meta',
                    'repos',
                    'submodules',
                    'links',
                    'ssl',
                    'ssh',
                    'data',
                    'initial-build',
                    'q',
                    'git-hooks',
                    'finish',
                ],
            },
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff setup',
                },
            ],
        },
        {
            name: 'setup-ide',
            description: 'Setups up project for your chosen ide',
            args: {
                name: 'ide',
                description: 'Specific step to setup',
                suggestions: [
                    {
                        name: 'vscode',
                        description: 'Setup VSCode',
                    },
                ],
            },
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff start',
                },
            ],
        },
        {
            name: 'start',
            description: 'Starts containers',
            args: {
                name: 'container',
                description: 'Specific container',
                isOptional: true,
                isVariadic: true,
                suggestions: [
                    'api-nginx',
                    'api-php',
                    'jobengine-nginx',
                    'jobengine-php',
                    'mailhog',
                    'mysql',
                    'mysql-test',
                    'portal-nginx',
                    'portal-node',
                    'portal-php',
                    'proxy',
                    'redis',
                    'velocity-php',
                    'etl-php',
                ],
            },
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff start',
                },
            ],
        },
        {
            name: 'stop',
            description: 'Stop all containers',
            args: {
                name: 'container',
                description: 'Specific container',
                isOptional: true,
                isVariadic: true,
                suggestions: [
                    'api-nginx',
                    'api-php',
                    'jobengine-nginx',
                    'jobengine-php',
                    'mailhog',
                    'mysql',
                    'mysql-test',
                    'portal-nginx',
                    'portal-node',
                    'portal-php',
                    'proxy',
                    'redis',
                    'velocity-php',
                    'etl-php',
                ],
            },
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff stop',
                },
            ],
        },
        {
            name: 'down',
            description: 'Destroys all containers',
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff down',
                },
            ],
        },
        {
            name: 'npm',
            description: 'Runs npm on the portal-node container',
            args: {
                name: 'command',
                description: 'Command to passthrough to NPM',
                suggestions: [
                    {
                        name: '-- install',
                        type: 'subcommand',

                        displayName: 'install',
                        description: 'NPM Install',
                    },
                    {
                        name: '-- run hot',
                        icon: '🔥',
                        priority: 100,

                        displayName: 'hot',
                        description: 'Hot Reload Enabled: Compiles the JS and recompiles if changes',
                    },
                    {
                        name: '-- run watchDev',
                        priority: 90,

                        displayName: 'watchDev',
                        description: 'Compiles the JS and recompiles if changes',
                    },
                    {
                        name: '-- run buildDev',
                        priority: 80,

                        displayName: 'buildDev',
                        description: 'Compiles the JS',
                    },
                ],
            },
            subcommands: [
                {
                    name: '--',
                    description: 'Command to passthrough to NPM',
                    subcommands: [
                        {
                            name: 'install',
                            description: 'NPM Install',
                        },
                        {
                            name: 'run',
                            description: 'Run an NPM script',
                            args: {
                                name: 'command',
                                description: 'Npm script to run',
                                suggestions: [
                                    {
                                        name: 'watchDev',
                                        priority: 90,
                                    },
                                    'watchProduction',
                                    'buildDev',
                                    'buildProduction',
                                    {
                                        name: 'hot',
                                        icon: '🔥',
                                        priority: 100,
                                    },
                                ],
                            },
                        },
                        {
                            name: '-h',
                            description: 'Show help for npm command',
                        },
                    ],
                },
            ],
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff npm',
                },
            ],
        },
        {
            name: 'composer',
            description: 'Runs composer on the portal-php container',
            args: {
                name: 'command',
                description: 'Command to passthrough to Composer',
                suggestions: [
                    {
                        name: '-- install',

                        displayName: 'install',
                        description: 'Composer Install',
                    },
                    {
                        name: '-- dump-autoload',

                        displayName: 'dump-autoload',
                        description: 'Composer Dump Autoload',
                    },
                ],
            },
            subcommands: [
                {
                    name: '--',
                    description: 'Command to passthrough to Composer',
                    subcommands: [
                        {
                            name: 'install',
                            description: 'Composer Install',
                        },
                        {
                            name: 'dump-autoload',
                            description: 'Composer Dump Autoload',
                        },
                        {
                            name: '-h',
                            description: 'Composer Help',
                        },
                    ],
                },
            ],
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff composer',
                },
            ],
        },
        {
            name: 'artisan',
            description: 'Runs php artisan on the portal-php container',
            args: {
                name: 'command',
                description: 'Command to passthrough to Artisan',
                suggestions: [
                    {
                        name: '-- migrate',

                        displayName: 'migrate',
                        description: 'Run the database migrations',
                        priority: 100,
                    },
                    {
                        name: '-- migrate:rollback',

                        displayName: 'migrate:rollback',
                        description: 'Rollback the last database migration',
                    },
                    {
                        name: '-- make:migration',

                        displayName: 'make:migration',
                        description: 'Create a new migration file',
                    },
                    {
                        name: '-- make:seeder',

                        displayName: 'make:seeder',
                        description: 'The name of the class',
                    },
                ],
            },
            subcommands: [
                {
                    name: '--',
                    description: 'Command to passthrough to Artisan',
                    subcommands: [
                        {
                            name: 'migrate',
                            description: 'Run the database migrations',
                        },
                        {
                            name: 'migrate:rollback',
                            description: 'Rollback the last database migration',
                        },
                        {
                            name: 'make:migration',
                            description: 'Create a new migration file',
                            args: {
                                name: 'name',
                                description: 'The name of the migration',
                            },
                        },
                        {
                            name: 'make:seeder',
                            description: 'Create a new seeder class',
                            args: {
                                name: 'name',
                                description: 'The name of the class',
                            },
                        },
                    ],
                },
            ],
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff artisan',
                },
            ],
        },
        {
            name: 'ssh',
            description: 'Opens a terminal on a specific container',
            args: {
                name: 'container',
                description: 'Specific container',
                suggestions: [
                    'api-nginx',
                    'api-php',
                    'jobengine-nginx',
                    'jobengine-php',
                    'mailhog',
                    'mysql',
                    'mysql-test',
                    'portal-nginx',
                    'portal-node',
                    'portal-php',
                    'proxy',
                    'redis',
                    'velocity-php',
                    'etl-php',
                ],
            },
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff ssh',
                },
            ],
        },
        {
            name: 'import-data',
            description: "Import data into project's database",
            args: {
                name: 'database',
                description: 'Import specific databases',
                isVariadic: true,
                isOptional: true,
                suggestions: [
                    {
                        name: 'freedom_db',
                        priority: 10,
                    },
                    {
                        name: 'podio_imports',
                        priority: 80,
                    },
                    {
                        name: 'freedom_portal',
                        priority: 90,
                    },
                    {
                        name: 'freedom_portal podio_imports',

                        priority: 80,
                    },
                    {
                        name: 'podio_imports.batteries',
                    },
                    {
                        name: 'freedom_portal.users',
                    },
                    {
                        name: 'freedom_portal.users,users_info',
                    },
                ],
            },
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff import-data',
                },
                {
                    name: ['--date', '-d'],
                    description: 'Sets which export date to use. Must be in format YYYY-MM-DD Ex. 1970-01-20',
                },
                {
                    name: ['--local', '-l'],
                    description: 'Imports from local files',
                },
            ],
        },
        {
            name: 'laravel-upgrade',
            description: 'Removes required files for laravel upgrade and runs composer install',
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff ssh',
                },
            ],
        },
        {
            name: 'xdebug',
            description: 'Start and Stop xDebug on your containers',
            args: {
                name: 'flags',
                description: 'Specific command to run',

                suggestions: ['start', 'stop', 'status'],
            },
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff xdebug',
                },
            ],
        },
        {
            name: 'stage-leads-db',
            description: 'Clones the production leads database for staging',
            args: {
                name: 'flags',
                description: 'Specific command to run',

                suggestions: ['et-6086'],
            },
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff stage-leads-db',
                },
                {
                    name: ['--delete', '-d'],
                    description: 'Deletes the RDS',
                },
            ],
        },
        {
            name: 'stage-spf',
            description: 'Clones the production SPF database for staging',
            args: {
                name: 'flags',
                description: 'Specific command to run',

                suggestions: ['et-6086'],
            },
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff stage-spf',
                },
                {
                    name: ['--delete', '-d'],
                    description: 'Deletes the RDS',
                },
            ],
        },
        {
            name: 'stage-db',
            description: 'Clones the production database for staging',
            args: {
                name: 'flags',
                description: 'Specific command to run',

                suggestions: ['et-6086'],
            },
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff stage-db',
                },
                {
                    name: ['--size', '-s'],
                    description: 'Sets which instance class size to use',
                },
                {
                    name: ['--refresh', '-r'],
                    description: 'Deletes and re-clones the database',
                },
                {
                    name: ['--delete', '-d'],
                    description: 'Deletes the database',
                },
            ],
        },
        {
            name: 'mobile',
            description: 'Helper commands for setting up and running the mobile apps',
            args: {
                name: 'flags',
                description: 'Specific command to run',

                suggestions: ['setup', 'ios', 'android', 'start', 'bundle-update'],
            },
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff mobile',
                },
                {
                    name: ['--field', '-f'],
                    description: 'Target the field app instead of the sales app',
                },
                {
                    name: ['--clean', '-c'],
                    description: 'Clean caches and build folders before running',
                },
                {
                    name: ['--device', '-d'],
                    description: 'Choose a device to run on',
                },
                {
                    name: ['--install', '-i'],
                    description: 'Install packages before running',
                },
                {
                    name: ['--env', '-e'],
                    description: 'Local, stage, or prod',
                },
            ],
        },
        {
            name: 'ssh-pod',
            description: 'Helper command to ssh into a pod on the staging cluster',
            args: {
                name: 'flags',
                description: 'Specific command to run',

                suggestions: ['et-6086'],
            },
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff stage-db',
                },
                {
                    name: ['--migrate', '-m'],
                    description: 'Run migrations in the pod',
                },
            ],
        },
        {
            name: 'ssh-prod',
            description: 'Helper command to ssh into a pod on the production cluster',
            options: [
                {
                    name: ['--help', '-h'],
                    description: 'Show help for ff stage-db',
                },
                {
                    name: ['--app', '-a'],
                    description: 'SSH into the pod for the specified app',
                },
            ],
        },
    ],
    options: [
        {
            name: ['--help', '-h'],
            description: 'Show help for ff',
        },
    ],
}
export default completionSpec
