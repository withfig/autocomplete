const completionSpec: Fig.Spec = {
  name: "nextflow",
  description: "",
  subcommands: [
    {
      name: "clean",
      description: "Clean up project cache and work directories",
    },
    {
      name: "clone",
      description: "Clone a project into a folder",
      args: {
        name: "namespace/repository_name",
      },
      options: [
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
        {
          name: "-hub",
          description:
            "Service hub where the project is hosted (Default: GitHub)",
          args: {
            name: "gitlab|github|bitbucket",
          },
        },
        {
          name: "-r",
          description:
            "Revision to clone - It can be a git branch, tag or revision number",
          args: {
            name: "revision",
          },
        },
        {
          name: "-user",
          description: "Private repository user name",
          args: {
            name: "username",
          },
        },
      ],
    },
    {
      name: "config",
      description: "Print a project configuration",
    },
    {
      name: "console",
      description: "Launch Nextflow interactive console",
    },
    {
      name: "drop",
      description: "Delete the local copy of a project",
    },
    {
      name: "help",
      description: "Print the usage help for a command",
    },
    {
      name: "info",
      description: "Print project and system runtime information",
    },
    {
      name: "kuberun",
      description: "Execute a workflow in a Kubernetes cluster (experimental)",
    },
    {
      name: "list",
      description: "List all downloaded projects",
    },
    {
      name: "log",
      description: "Print executions log and runtime info",
    },
    {
      name: "pull",
      description: "Download or update a project",
    },
    {
      name: "run",
      description: "Execute a pipeline project",
    },
    {
      name: "self-update",
      description: "Update nextflow runtime to the latest available version",
    },
    {
      name: "view",
      description: "View project script file(s)",
    },
  ],
  // Only uncomment if nextflow takes an argument
  // args: {}
};
export default completionSpec;
