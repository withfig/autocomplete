var generators = {
    runningDockerContainers: {
        script: `docker ps --format '{{ json . }}'`,
        postProcess: function (out) {
            let allLines = out.split('\n').map(JSON.parse);
            return allLines.map(i => ({
                name: i.ID,
                displayName: `${i.ID} (${i.Image})`,
            }));
        }
    },
    allDockerContainers: {
        script: `docker ps -a --format '{{ json . }}'`,
        postProcess: function (out) {
            let allLines = out.split('\n').map(JSON.parse);
            return allLines.map(i => ({
                name: i.ID,
                displayName: `${i.ID} (${i.Image})`,
            }));
        }
    }
};

var completionSpec = {
    name: "docker",
    description: "A self-sufficient runtime for containers",
    subcommands: [

        {name: "attach", description: "Attach local standard input, output, and error streams to a running container"},
        {
            name: "build",
            description: "Build an image from a Dockerfile",
            args: {
                name: "path",
                generators: [
                    {
                        template: 'folders'
                    }
                ]
            },
            options: [
                {
                    name: '--add-host',
                    args: {
                        name: "list",
                        description: "Add a custom host-to-IP mapping (host:ip)"
                    }
                },
                {
                    name: '--build-arg',
                    args: {
                        name: "list",
                        description: "Set build-time variables"
                    }
                },
                {
                    name: '--cache-from',
                    args: {
                        name: 'strings',
                        description: 'Images to consider as cache sources'
                    }
                },
                {
                    name: '--disable-content-trust',
                    description: 'Skip image verification (default true)'
                },
                {
                    name: ['-f', '--file'],
                    description: 'Name of the Dockerfile (Default is \'PATH/Dockerfile\')',
                    args: {
                        name: 'string',
                        generators: [{
                            template: 'filepaths'
                        }]
                    }
                },
                {
                    name: '--iidfile',
                    description: 'Write the image ID to the file',
                    args: {
                        name: 'string'
                    }
                },
                {
                    name: '--isolation',
                    description: 'Container isolation technology',
                    args: {
                        name: 'string',
                    }
                },
                {
                    name: '--label',
                    description: 'Set metadata for an image',
                    args: {
                        name: 'list'
                    }
                },
                {
                    name: '--network',
                    description: 'Set the networking mode for the RUN instructions during build (default "default")',
                    args: {
                        name: 'string'
                    }
                },
                {
                    name: '--no-cache',
                    description: 'Do not use cache when building the image'
                },
                {
                    name: ['-o', '--output'],
                    description: 'Output destination (format: type=local,dest=path)',
                    args: {
                        name: 'stringArray'
                    }
                },
                {
                    name: '--platform',
                    description: 'Set platform if server is multi-platform capable',
                    args: {
                        name: 'string'
                    }
                },
                {
                    name: '--progress',
                    description: 'Set type of progress output (auto, plain, tty). Use plain to show container output',
                    args: {
                        name: 'string',
                        suggestions: ['auto', 'plain', 'tty'].map(i => ({name: i}))
                    }
                },
                {
                    name: '--pull',
                    description: 'Always attempt to pull a newer version of the image'
                },
                {
                    name: ['-q', '--quiet'],
                    description: 'Suppress the build output and print image ID on success'
                },
                {
                    name: '--secret',
                    description: `Secret file to expose to the build (only if BuildKit enabled): id=mysecret,src=/local/secret`,
                    args: {
                        name: 'stringArray'
                    }
                },
                {
                    name: '--squash',
                    description: 'Squash newly built layers into a single new layer'
                },
                {
                    name: '--ssh',
                    description: `SSH agent socket or keys to expose to the build (only if BuildKit enabled) (format: default|<id>[=<socket>|<key>[,<key>]])`,
                    args: {
                        name: 'stringArray'
                    }
                },
                {
                    name: ['-t', '--tag'],
                    description: 'Name and optionally a tag in the \'name:tag\' format',
                },
                {
                    name: '--target',
                    description: 'Set the target build stage to build',
                    args: {
                        name: 'target build stage',
                        generators: [{
                            trigger: function () {
                                return true;
                            },
                            script: function (context) {
                                let fileFlagIndex, dockerfilePath;
                                if (context.includes('-f')) {
                                    fileFlagIndex = context.indexOf('-f');
                                    dockerfilePath = context[fileFlagIndex + 1];
                                } else if (context.includes('--file')) {
                                    fileFlagIndex = context.indexOf('--file');
                                    dockerfilePath = context[fileFlagIndex + 1];
                                } else {
                                    dockerfilePath = '$PWD/Dockerfile';
                                }

                                return `grep -iE 'FROM.*AS' "${dockerfilePath}"`;
                            },
                            postProcess: function (out) {
                                // This just searches the Dockerfile for the alias name after AS,
                                // and due to the grep above, will only match lines where FROM and AS
                                // are on the same line. This could certainly be made more robust
                                // down the line.
                                let imageNameRegexp = /(?:[aA][sS]\s+)([\w:.-]+)/;
                                return out.split('\n').map(i => {
                                    let result = imageNameRegexp.exec(i);
                                    if (result) {
                                        return {
                                            name: result[1]
                                        };
                                    }
                                }).filter(i => i !== undefined);
                            }
                        }]
                    }
                }
            ]
        },
        {name: "commit", description: "Create a new image from a container's changes"},
        {name: "cp", description: "Copy files/folders between a container and the local filesystem"},
        {name: "create", description: "Create a new container"},
        {name: "diff", description: "Inspect changes to files or directories on a container's filesystem"},
        {name: "events", description: "Get real time events from the server"},
        {name: "exec", description: "Run a command in a running container"},
        {name: "export", description: "Export a container's filesystem as a tar archive"},
        {name: "history", description: "Show the history of an image"},
        {
            name: "images",
            description: "List images",
            args: {
                name: '[REPOSITORY[:TAG]]'
            },
            options: [
                {
                    name: ['-a', '--all'],
                    description: 'Show all images (default hides intermediate images)'
                },
                {
                    name: '--digests',
                    description: 'Show digests'
                },
                {
                    name: ['-f', '--filter'],
                    description: 'Filter output based on conditions provided',
                    args: {
                        name: 'filter'
                    }
                },
                {
                    name: '--format',
                    description: 'Pretty-print images using a Go template',
                    args: {
                        name: 'string'
                    }
                },
                {
                    name: '--no-trunc',
                    description: "Don't truncate output"
                },
                {
                    name: ['-q', '--quiet'],
                    description: 'Only show image IDs'
                }
            ]
        },
        {name: "import", description: "Import the contents from a tarball to create a filesystem image"},
        {name: "info", description: "Display system-wide information"},
        {
            name: "inspect",
            description: "Return low-level information on Docker objects",
            args: {
                // TODO: There are more types of docker objects beyond running containers
                // that can be inspected
                name: "Name or ID",
                generators: [
                    {
                        script: `docker ps -a --format '{{ json . }}'`,
                        postProcess: function (out) {
                            let allLines = out.split('\n').map(JSON.parse);
                            return allLines.map(i => ({
                                name: i.ID,
                                displayName: `[con] ${i.ID} (${i.Image})`,
                            }));
                        }
                    },
                    {
                        script: `docker images -a --format '{{ json . }}'`,
                        postProcess: function (out) {
                            let allLines = out.split('\n').map(JSON.parse);
                            return allLines.map(i => {
                                let displayName;
                                if (i.Repository === "\u003cnone\u003e") {
                                    displayName = i.ID;
                                } else {
                                    displayName = i.Repository;
                                    if (i.Tag !== "\u003cnone\u003e") {
                                        displayName += `:${i.Tag}`;
                                    }
                                }

                                return {
                                    name: i.ID,
                                    displayName: `[img] ${displayName}`
                                };
                            });
                        }
                    },
                    {
                        script: `docker volume ls --format '{{ json . }}'`,
                        postProcess: function (out) {
                            let allLines = out.split('\n').map(JSON.parse);
                            return allLines.map(i => ({
                                name: i.Name,
                                displayName: `[vol] ${i.Name}`,
                            }));
                        }
                    }
                ]
            },
            options: [
                {
                    name: ['-f', '--format'],
                    description: 'Format the output using the given Go template',
                    args: {
                        name: 'string'
                    }
                },
                {
                    name: ['-s', '--size'],
                    description: 'Display total file sizes if the type is container',
                },
                {
                    name: '--type',
                    description: 'Return JSON for specified type',
                    args: {
                        name: 'string',
                    }
                }
            ]
        },
        {name: "kill", description: "Kill one or more running containers"},
        {name: "load", description: "Load an image from a tar archive or STDIN"},
        {name: "login", description: "Log in to a Docker registry"},
        {name: "logout", description: "Log out from a Docker registry"},
        {name: "logs", description: "Fetch the logs of a container"},
        {name: "pause", description: "Pause all processes within one or more containers"},
        {name: "port", description: "List port mappings or a specific mapping for the container"},
        {name: "ps", description: "List containers"},
        {name: "pull", description: "Pull an image or a repository from a registry"},
        {name: "push", description: "Push an image or a repository to a registry"},
        {name: "rename", description: "Rename a container"},
        {name: "restart", description: "Restart one or more containers"},
        {
            name: "rm",
            description: "Remove one or more containers",
            args: {
                variadic: true,
                name: 'containers',
                suggestions: [
                    {
                        name: '$(docker ps -aq)',
                        insertValue: '$(docker ps -aq)',
                        description: 'All containers, running and exited',
                    },
                    {
                        name: "$(docker ps -q)",
                        insertValue: "$(docker ps -q)",
                        description: 'All running containers'
                    }
                ],
                generators: [
                    generators.allDockerContainers,
                ],
            },
            options: [
                {
                    name: ['-f', '--force'],
                    description: 'Force the removal of a running container (uses SIGKILL)'
                },
                {
                    name: ['-l', '--link'],
                    description: 'Remove the specified link'
                },
                {
                    name: ['-v', '--volumes'],
                    description: 'Remove the anonymous volumes associated with the container'
                }
            ]
        },
        {
            name: "rmi",
            description: "Remove one or more images",
            args: {
                variadic: true,
                name: 'image',
                suggestions: [
                    {
                        name: '$(docker images -aq)',
                        insertValue: '$(docker images -aq)',
                        description: 'All images (including intermediate images)'
                    },
                    {
                        name: '$(docker images -q)',
                        insertValue: '$(docker images -q)',
                        description: 'All non-intermediate images'
                    }
                ],
                generators: [
                    {
                        script: `docker images -aq --format '{{ json . }}'`,
                        postProcess: function (out) {
                            let allLines = out.split('\n').map(JSON.parse);
                            return allLines.map(i => {
                                let displayName;
                                if (i.Repository === "\u003cnone\u003e") {
                                    displayName = i.ID;
                                } else {
                                    displayName = i.Repository;
                                    if (i.Tag !== "\u003cnone\u003e") {
                                        displayName += `:${i.Tag}`;
                                    }
                                }

                                return {
                                    name: i.ID,
                                    displayName: `${displayName} (${i.Size})`
                                };
                            });
                        }
                    }
                ]
            },
            options: [
                {
                    name: ['-f', '--force'],
                    description: 'Force removal of the image',
                },
                {
                    name: '--no-prune',
                    description: 'Do not delete untagged parents'
                }
            ]
        },
        {
            name: "run",
            description: "Run a command in a new container",
            options: [
                {name: ["-i", "--interactive"], description: "Keep STDIN open even if not attached"},
                {name: ["-t", "--tty"], description: "Allocate a pseudo-TTY"},
                {
                    name: ["-it"],
                    insertValue: "-it ",
                    description: "Launch an interactive session",
                    icon: "fig://icon?type=commandkey"
                },
            ],
            args: [
                {
                    name: "image",
                    description: "the Docker image to use",
                    generators: {
                        script: "docker images --format '{{.Repository}} {{.Size}} {{.Tag}} {{.ID}}'",
                        postProcess: function (out) {
                            return out.split('\n').map(image => {
                                let [repo, size, tag, id] = image.split(' ')
                                return {
                                    name: repo,
                                    description: `${id}@${tag} - ${size}`,
                                    icon: "fig://icon?type=docker"
                                }
                            })
                        }
                    }
                },
                {
                    name: "command"
                    // description: "The command to run in the container"
                }
            ]
        },
        {name: "save", description: "Save one or more images to a tar archive (streamed to STDOUT by default)"},
        {name: "search", description: "Search the Docker Hub for images"},
        {name: "start", description: "Start one or more stopped containers"},
        {name: "stats", description: "Display a live stream of container(s) resource usage statistics"},
        {
            name: "stop",
            description: "Stop one or more running containers",
            args: {
                variadic: true,
                name: 'container',
                generators: [
                    generators.runningDockerContainers,
                ]
            },
            options: [
                {
                    name: ['-t', '--t'],
                    description: 'Seconds to wait for stop before killing it (default 10)',
                    args: {
                        name: 'int'
                    }
                }
            ]
        },
        {name: "tag", description: "Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE"},
        {name: "top", description: "Display the running processes of a container"},
        {name: "unpause", description: "Unpause all processes within one or more containers"},
        {name: "update", description: "Update configuration of one or more containers"},
        {name: "version", description: "Show the Docker version information"},
        {name: "wait", description: "Block until one or more containers stop, then print their exit codes"},
        {name: "builder", description: "Manage builds"},
        {name: "config", description: "Manage Docker configs"},
        {name: "container", description: "Manage containers"},
        {name: "context", description: "Manage contexts"},
        {name: "image", description: "Manage images"},
        {name: "network", description: "Manage networks"},
        {name: "node", description: "Manage Swarm nodes"},
        {name: "plugin", description: "Manage plugins"},
        {name: "secret", description: "Manage Docker secrets"},
        {name: "service", description: "Manage services"},
        {name: "stack", description: "Manage Docker stacks"},
        {name: "swarm", description: "Manage Swarm"},
        {
            name: "system",
            description: "Manage Docker",
            subcommands: [
                {
                    name: 'prune',
                    description: 'Remove unused data',
                    options: [
                        {
                            name: ['-a', '--all'],
                            description: 'Remove all unused images not just dangling ones'
                        },
                        {
                            name: '--filter',
                            description: `Provide filter values (e.g. 'label=<key>=<value')`,
                            args: {
                                name: 'filter'
                            }
                        },
                        {
                            name: ['-f', '--force'],
                            description: 'Do not prompt for confirmation',
                        },
                        {
                            name: '--volumes',
                            description: 'Prune volumes'
                        }
                    ]
                }
            ]
        },
        {name: "trust", description: "Manage trust on Docker images"},
        {name: "volume", description: "Manage volumes"},
        {name: "version", description: "Show the Docker version information"},
    ]

}
