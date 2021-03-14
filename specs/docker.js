// TODO: args and options

var completionSpec = {
    name: "docker",
    description: "A self-sufficient runtime for containers",
    subcommands: [
		{ 
			name: "attach",      
			description: "Attach local standard input, output, and error streams to a running container,",
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "build",       
			description: "Build an image from a Dockerfile", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "commit",      
			description: "Create a new image from a container's changes", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "cp",          
			description: "Copy files/folders between a container and the local filesystem", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "create",      
			description: "Create a new container", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "diff",        
			description: "Inspect changes to files or directories on a container's filesystem", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "events",      
			description: "Get real time events from the server", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "exec",        
			description: "Run a command in a running container", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "export",      
			description: "Export a container's filesystem as a tar archive", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "history",     
			description: "Show the history of an image", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "images",      
			description: "List images", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "import",      
			description: "Import the contents from a tarball to create a filesystem image", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "info",        
			description: "Display system-wide information", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "inspect",     
			description: "Return low-level information on Docker objects", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "kill",        
			description: "Kill one or more running containers", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "load",        
			description: "Load an image from a tar archive or STDIN", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "login",       
			description: "Log in to a Docker registry", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "logout",      
			description: "Log out from a Docker registry", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "logs",        
			description: "Fetch the logs of a container", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "pause",       
			description: "Pause all processes within one or more containers", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "port",        
			description: "List port mappings or a specific mapping for the container", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "ps",          
			description: "List containers", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "pull",        
			description: "Pull an image or a repository from a registry", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "push",        
			description: "Push an image or a repository to a registry", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "rename",      
			description: "Rename a container", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "restart",     
			description: "Restart one or more containers", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "rm",          
			description: "Remove one or more containers", 
			args: {},
			options: [],
			subcommands: []
		},
		{ 
			name: "rmi",         
			description: "Remove one or more images", 
			args: {},
			options: [],
			subcommands: []
		},
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
		{ 
			name: "save",        
			description: "Save one or more images to a tar archive (streamed to STDOUT by default)",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "search",      
			description: "Search the Docker Hub for images",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "start",       
			description: "Start one or more stopped containers",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "stats",       
			description: "Display a live stream of container(s) resource usage statistics",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "stop",        
			description: "Stop one or more running containers",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "tag",         
			description: "Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "top",         
			description: "Display the running processes of a container",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "unpause",     
			description: "Unpause all processes within one or more containers",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "update",      
			description: "Update configuration of one or more containers",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "version",     
			description: "Show the Docker version information",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "wait",        
			description: "Block until one or more containers stop, then print their exit codes",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "builder",     
			description: "Manage builds",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "config",      
			description: "Manage Docker configs",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "container",   
			description: "Manage containers",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "context",     
			description: "Manage contexts",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "image",       
			description: "Manage images",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "network",     
			description: "Manage networks",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "node",        
			description: "Manage Swarm nodes",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "plugin",      
			description: "Manage plugins",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "secret",      
			description: "Manage Docker secrets",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "service",     
			description: "Manage services",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "stack",       
			description: "Manage Docker stacks",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "swarm",       
			description: "Manage Swarm",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "system",      
			description: "Manage Docker",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "trust",       
			description: "Manage trust on Docker images",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "volume",      
			description: "Manage volumes",
			args: {},
			options: [],
			subcommands: []
		}
    ]

}
