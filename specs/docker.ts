const dockerCompletionSpec:Fig.Spec = {
    name: "docker",
    description: "A self-sufficient runtime for containers",
    subcommands: [
    	{ name: "attach",      description: "Attach local standard input, output, and error streams to a running container" },
    	{ name: "build",       description: "Build an image from a Dockerfile" },
    	{ name: "commit",      description: "Create a new image from a container's changes" },
    	{ name: "cp",          description: "Copy files/folders between a container and the local filesystem" },
    	{ name: "create",      description: "Create a new container" },
    	{ name: "diff",        description: "Inspect changes to files or directories on a container's filesystem" },
    	{ name: "events",      description: "Get real time events from the server" },
    	{ name: "exec",        description: "Run a command in a running container" },
    	{ name: "export",      description: "Export a container's filesystem as a tar archive" },
    	{ name: "history",     description: "Show the history of an image" },
    	{ name: "images",      description: "List images" },
    	{ name: "import",      description: "Import the contents from a tarball to create a filesystem image" },
    	{ name: "info",        description: "Display system-wide information" },
    	{ name: "inspect",     description: "Return low-level information on Docker objects" },
    	{ name: "kill",        description: "Kill one or more running containers" },
    	{ name: "load",        description: "Load an image from a tar archive or STDIN" },
    	{ name: "login",       description: "Log in to a Docker registry" },
    	{ name: "logout",      description: "Log out from a Docker registry" },
    	{ name: "logs",        description: "Fetch the logs of a container" },
    	{ name: "pause",       description: "Pause all processes within one or more containers" },
    	{ name: "port",        description: "List port mappings or a specific mapping for the container" },
    	{ name: "ps",          description: "List containers" },
    	{ name: "pull",        description: "Pull an image or a repository from a registry" },
    	{ name: "push",        description: "Push an image or a repository to a registry" },
    	{ name: "rename",      description: "Rename a container" },
    	{ name: "restart",     description: "Restart one or more containers" },
    	{ name: "rm",          description: "Remove one or more containers" },
    	{ name: "rmi",         description: "Remove one or more images" },
    	{ 
            name: "run",
            description: "Run a command in a new container",
            options: [
                { name: ["-i", "--interactive"], description: "Keep STDIN open even if not attached" },
                { name: ["-t", "--tty"], description: "Allocate a pseudo-TTY" },
                { name: ["-it"], insertValue: "-it ", description: "Launch an interactive session", icon: "fig://icon?type=commandkey" },

            ],
            args: [
                {
                    name: "image",
                    description: "the Docker image to use",
                    generators: {
                        script: "docker images --format '{{.Repository}} {{.Size}} {{.Tag}} {{.ID}}'",
                        postProcess: function(out) {
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
    	{ name: "save",        description: "Save one or more images to a tar archive (streamed to STDOUT by default)" },
    	{ name: "search",      description: "Search the Docker Hub for images" },
    	{ name: "start",       description: "Start one or more stopped containers" },
    	{ name: "stats",       description: "Display a live stream of container(s) resource usage statistics" },
    	{ name: "stop",        description: "Stop one or more running containers" },
    	{ name: "tag",         description: "Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE" },
    	{ name: "top",         description: "Display the running processes of a container" },
    	{ name: "unpause",     description: "Unpause all processes within one or more containers" },
    	{ name: "update",      description: "Update configuration of one or more containers" },
    	{ name: "version",     description: "Show the Docker version information" },
    	{ name: "wait",        description: "Block until one or more containers stop, then print their exit codes" },
    	{ name: "builder",     description: "Manage builds" },
    	{ name: "config",      description: "Manage Docker configs" },
    	{ name: "container",   description: "Manage containers" },
    	{ name: "context",     description: "Manage contexts" },
    	{ name: "image",       description: "Manage images" },
    	{ name: "network",     description: "Manage networks" },
    	{ name: "node",        description: "Manage Swarm nodes" },
    	{ name: "plugin",      description: "Manage plugins" },
    	{ name: "secret",      description: "Manage Docker secrets" },
    	{ name: "service",     description: "Manage services" },
    	{ name: "stack",       description: "Manage Docker stacks" },
    	{ name: "swarm",       description: "Manage Swarm" },
    	{ name: "system",      description: "Manage Docker" },
    	{ name: "trust",       description: "Manage trust on Docker images" },
    	{ name: "volume",      description: "Manage volumes" }
    ]

}
