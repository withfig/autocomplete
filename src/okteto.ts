const contexts: Fig.Generator = {
  script: ["okteto", "context", "list"],
  cache: {
    ttl: 1000 * 60 * 30, // 30 minutes
  },
  postProcess: (output) => {
    return output
      .split("\n")
      .slice(1)
      .map((context, ind) => {
        context = context.split(" ")[0];
        return {
          name: context.replace("*", "").trim(),
          description: "Context",
          icon: "fig://icon?type=okteto",
        };
      });
  },
};

const namespaces: Fig.Generator = {
  script: ["okteto", "namespace", "list"],
  cache: {
    ttl: 1000 * 60 * 30, // 30 minutes
  },
  postProcess: (output) => {
    return output
      .split("\n")
      .slice(1)
      .map((namespace, ind) => {
        namespace = namespace.split(" ")[0];
        return {
          name: namespace.replace("*", "").trim(),
          description: "Namespace",
          icon: "fig://icon?type=okteto",
        };
      });
  },
};

const completionSpec: Fig.Spec = {
  name: "okteto",
  icon: "fig://icon?type=okteto",
  description: "Okteto - Remote Development Environments powered by Kubernetes",
  subcommands: [
    {
      name: "analytics",
      description: "Enable / Disable analytics",
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--disable", "-d"],
          description: "Disable analytics",
          displayName: "disable",
        },
        {
          name: ["--help", "-h"],
          description: "Help for analytics",
          displayName: "help",
        },
      ],
    },
    {
      name: "build",
      description: "Build (and optionally push) a Docker image",
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: "--build-arg",
          description: "Set build-time variables",
          isRepeatable: true,
          displayName: "build-arg",
          args: { name: "build-arg" },
        },
        {
          name: "--cache-from",
          description: "Cache source images",
          isRepeatable: true,
          displayName: "cache-from",
          args: { name: "cache-from" },
        },
        {
          name: ["--file", "-f"],
          description: "Name of the Dockerfile (Default is 'PATH/Dockerfile')",
          displayName: "file",
          args: { name: "file" },
        },
        {
          name: "--namespace",
          description:
            "Namespace against which the image will be consumed. Default is the one defined at okteto context or okteto manifest",
          displayName: "namespace",
          args: { name: "namespace" },
        },
        {
          name: "--no-cache",
          description: "Do not use cache when building the image",
          displayName: "no-cache",
        },
        {
          name: "--progress",
          description: "Show plain/tty build output",
          displayName: "progress",
          args: { name: "progress", default: "tty" },
        },
        {
          name: "--secret",
          description:
            "Secret files exposed to the build. Format: id=mysecret,src=/local/secret",
          isRepeatable: true,
          displayName: "secret",
          args: { name: "secret" },
        },
        {
          name: ["--tag", "-t"],
          description:
            "Name and optionally a tag in the 'name:tag' format (it is automatically pushed)",
          displayName: "tag",
          args: { name: "tag" },
        },
        {
          name: "--target",
          description: "Set the target build stage to build",
          displayName: "target",
          args: { name: "target" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for build",
          displayName: "help",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
              displayName: "no-descriptions",
            },
            {
              name: ["--help", "-h"],
              description: "Help for bash",
              displayName: "help",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
              displayName: "no-descriptions",
            },
            {
              name: ["--help", "-h"],
              description: "Help for fish",
              displayName: "help",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
              displayName: "no-descriptions",
            },
            {
              name: ["--help", "-h"],
              description: "Help for powershell",
              displayName: "help",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
              displayName: "no-descriptions",
            },
            {
              name: ["--help", "-h"],
              description: "Help for zsh",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for completion",
          displayName: "help",
        },
      ],
    },
    {
      name: ["ctx", "context"],
      description: "Set the default context",
      subcommands: [
        {
          name: "delete",
          description: "Delete a context",
          args: {
            generators: contexts,
          },
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for delete",
              displayName: "help",
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "List available contexts",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for list",
              displayName: "help",
            },
          ],
        },
        {
          name: "show",
          description: "Print the current context",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for show",
              displayName: "help",
            },
          ],
        },
        {
          name: "use",
          description: "Set the default context",
          args: {
            generators: contexts,
          },
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--builder", "-b"],
              description: "Url of the builder service",
              displayName: "builder",
              args: { name: "builder" },
            },
            {
              name: ["--namespace", "-n"],
              description: "Namespace of your okteto context",
              displayName: "namespace",
              args: { name: "namespace" },
            },
            {
              name: "--okteto",
              description: "Only shows okteto cluster options",
              displayName: "okteto",
            },
            {
              name: ["--token", "-t"],
              description: "API token for authentication",
              displayName: "token",
              args: { name: "token" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for use",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--builder", "-b"],
          description: "Url of the builder service",
          displayName: "builder",
          args: { name: "builder" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace of your okteto context",
          displayName: "namespace",
          args: { name: "namespace" },
        },
        {
          name: "--okteto",
          description: "Only shows okteto cluster options",
          displayName: "okteto",
        },
        {
          name: ["--token", "-t"],
          description: "API token for authentication",
          displayName: "token",
          args: { name: "token" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for context",
          displayName: "help",
        },
      ],
    },
    {
      name: "doctor",
      description: "Generate a zip file with the okteto logs",
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--context", "-c"],
          description: "Context where the up command was executing",
          displayName: "context",
          args: { name: "context" },
        },
        {
          name: ["--file", "-f"],
          description: "Path to the manifest file",
          displayName: "file",
          args: { name: "file", default: "okteto.yml" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace where the up command was executing",
          displayName: "namespace",
          args: { name: "namespace" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for doctor",
          displayName: "help",
        },
      ],
    },
    {
      name: "down",
      description: "Deactivate your development container",
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--context", "-c"],
          description: "Context where the down command is executed",
          displayName: "context",
          args: { name: "context" },
        },
        {
          name: ["--file", "-f"],
          description: "Path to the manifest file",
          displayName: "file",
          args: { name: "file", default: "okteto.yml" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace where the down command is executed",
          displayName: "namespace",
          args: { name: "namespace" },
        },
        {
          name: ["--volumes", "-v"],
          description: "Remove persistent volume",
          displayName: "volumes",
        },
        {
          name: ["--help", "-h"],
          description: "Help for down",
          displayName: "help",
        },
      ],
    },
    {
      name: "exec",
      description: "Execute a command in your development container",
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--context", "-c"],
          description: "Context where the exec command is executed",
          displayName: "context",
          args: { name: "context" },
        },
        {
          name: ["--file", "-f"],
          description: "Path to the manifest file",
          displayName: "file",
          args: { name: "file", default: "okteto.yml" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace where the exec command is executed",
          displayName: "namespace",
          args: { name: "namespace" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for exec",
          displayName: "help",
        },
      ],
    },
    {
      name: "init",
      description: "Automatically generate your okteto manifest file",
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--context", "-c"],
          description: "Context target for generating the okteto manifest",
          displayName: "context",
          args: { name: "context" },
        },
        {
          name: ["--file", "-f"],
          description: "Path to the manifest file",
          displayName: "file",
          args: { name: "file", default: "okteto.yml" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace target for generating the okteto manifest",
          displayName: "namespace",
          args: { name: "namespace" },
        },
        {
          name: "--overwrite",
          description: "Overwrite existing manifest file",
          displayName: "overwrite",
        },
        {
          name: ["--help", "-h"],
          description: "Help for init",
          displayName: "help",
        },
      ],
    },
    {
      name: "kubeconfig",
      description:
        "Download credentials for the Kubernetes cluster selected via 'okteto context'",
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for kubeconfig",
          displayName: "help",
        },
      ],
    },
    {
      name: ["ns", "namespace"],
      description: "Configure the current namespace of the okteto context",
      subcommands: [
        {
          name: "create",
          description: "Create a namespace",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--members", "-m"],
              description:
                "Members of the namespace, it can the username or email",
              isRepeatable: true,
              displayName: "members",
              args: { name: "members" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for create",
              displayName: "help",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a namespace",
          args: {
            generators: namespaces,
          },
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for delete",
              displayName: "help",
            },
          ],
        },
        {
          name: ["ls", "list"],
          description:
            "List namespaces managed by Okteto in your current context",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for list",
              displayName: "help",
            },
          ],
        },
        {
          name: ["ns", "use"],
          description: "Configure the current namespace of the okteto context",
          args: {
            generators: namespaces,
          },
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: "--personal",
              description: "Load personal account",
              displayName: "personal",
            },
            {
              name: ["--help", "-h"],
              description: "Help for use",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: "--personal",
          description: "Load personal account",
          displayName: "personal",
        },
        {
          name: ["--help", "-h"],
          description: "Help for namespace",
          displayName: "help",
        },
      ],
    },
    {
      name: "pipeline",
      description: "Pipeline management commands",
      subcommands: [
        {
          name: "deploy",
          description: "Deploy an okteto pipeline",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--branch", "-b"],
              description:
                "The branch to deploy (defaults to the current branch)",
              displayName: "branch",
              args: { name: "branch" },
            },
            {
              name: ["--file", "-f"],
              description:
                "Relative path within the repository to the manifest file (default to okteto-pipeline.yaml or .okteto/okteto-pipeline.yaml)",
              displayName: "file",
              args: { name: "file" },
            },
            {
              name: "--filename",
              description:
                "Relative path within the repository to the manifest file (default to okteto-pipeline.yaml or .okteto/okteto-pipeline.yaml)",
              displayName: "filename",
              args: { name: "filename" },
            },
            {
              name: ["--name", "-p"],
              description:
                "Name of the pipeline (defaults to the git config name)",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: ["--namespace", "-n"],
              description:
                "Namespace where the up command is executed (defaults to the current namespace)",
              displayName: "namespace",
              args: { name: "namespace" },
            },
            {
              name: ["--repository", "-r"],
              description:
                "The repository to deploy (defaults to the current repository)",
              displayName: "repository",
              args: { name: "repository" },
            },
            {
              name: "--skip-if-exists",
              description:
                "Skip the pipeline deployment if the pipeline already exists in the namespace (defaults to false)",
              displayName: "skip-if-exists",
            },
            {
              name: ["--timeout", "-t"],
              description:
                "The length of time to wait for completion, zero means never. Any other values should contain a corresponding time unit e.g. 1s, 2m, 3h",
              displayName: "timeout",
              args: { name: "timeout", default: "5m0s" },
            },
            {
              name: ["--var", "-v"],
              description:
                "Set a pipeline variable (can be set more than once)",
              isRepeatable: true,
              displayName: "var",
              args: { name: "var" },
            },
            {
              name: ["--wait", "-w"],
              description:
                "Wait until the pipeline finishes (defaults to false)",
              displayName: "wait",
            },
            {
              name: ["--help", "-h"],
              description: "Help for deploy",
              displayName: "help",
            },
          ],
        },
        {
          name: "destroy",
          description: "Destroy an okteto pipeline",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--name", "-p"],
              description:
                "Name of the pipeline (defaults to the git config name)",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: ["--namespace", "-n"],
              description:
                "Namespace where the up command is executed (defaults to the current namespace)",
              displayName: "namespace",
              args: { name: "namespace" },
            },
            {
              name: ["--timeout", "-t"],
              description:
                "The length of time to wait for completion, zero means never. Any other values should contain a corresponding time unit e.g. 1s, 2m, 3h",
              displayName: "timeout",
              args: { name: "timeout", default: "5m0s" },
            },
            {
              name: ["--volumes", "-v"],
              description:
                "Destroy persistent volumes created by the pipeline (defaults to false)",
              displayName: "volumes",
            },
            {
              name: ["--wait", "-w"],
              description:
                "Wait until the pipeline finishes (defaults to false)",
              displayName: "wait",
            },
            {
              name: ["--help", "-h"],
              description: "Help for destroy",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for pipeline",
          displayName: "help",
        },
      ],
    },
    {
      name: "preview",
      description: "Preview environment management commands",
      subcommands: [
        {
          name: "deploy",
          description: "Deploy a preview environment",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--branch", "-b"],
              description:
                "The branch to deploy (defaults to the current branch)",
              displayName: "branch",
              args: { name: "branch" },
            },
            {
              name: ["--file", "-f"],
              description:
                "Relative path within the repository to the manifest file (default to okteto-pipeline.yaml or .okteto/okteto-pipeline.yaml)",
              displayName: "file",
              args: { name: "file" },
            },
            {
              name: "--filename",
              description:
                "Relative path within the repository to the manifest file (default to okteto-pipeline.yaml or .okteto/okteto-pipeline.yaml)",
              displayName: "filename",
              args: { name: "filename" },
            },
            {
              name: ["--repository", "-r"],
              description:
                "The repository to deploy (defaults to the current repository)",
              displayName: "repository",
              args: { name: "repository" },
            },
            {
              name: ["--scope", "-s"],
              description:
                "The scope of preview environment to create. Accepted values are ['personal', 'global']",
              displayName: "scope",
              args: { name: "scope", default: "personal" },
            },
            {
              name: "--sourceUrl",
              description: "The URL of the original pull/merge request",
              displayName: "sourceUrl",
              args: { name: "sourceUrl" },
            },
            {
              name: ["--timeout", "-t"],
              description:
                "The length of time to wait for completion, zero means never. Any other values should contain a corresponding time unit e.g. 1s, 2m, 3h",
              displayName: "timeout",
              args: { name: "timeout", default: "5m0s" },
            },
            {
              name: ["--var", "-v"],
              description:
                "Set a pipeline variable (can be set more than once)",
              isRepeatable: true,
              displayName: "var",
              args: { name: "var" },
            },
            {
              name: ["--wait", "-w"],
              description:
                "Wait until the preview environment deployment finishes (defaults to false)",
              displayName: "wait",
            },
            {
              name: ["--help", "-h"],
              description: "Help for deploy",
              displayName: "help",
            },
          ],
        },
        {
          name: "destroy",
          description: "Destroy a preview environment",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for destroy",
              displayName: "help",
            },
          ],
        },
        {
          name: "endpoints",
          description: "Show endpoints for a preview environment",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for endpoints",
              displayName: "help",
            },
          ],
        },
        {
          name: "list",
          description: "List all preview environments",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for list",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for preview",
          displayName: "help",
        },
      ],
    },
    {
      name: "push",
      description: "Build, push and redeploy source code to the target app",
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--context", "-c"],
          description: "Context where the push command is executed",
          displayName: "context",
          args: { name: "context" },
        },
        {
          name: ["--deploy", "-d"],
          description:
            "Create deployment when the app doesn't exist in a namespace",
          displayName: "deploy",
        },
        {
          name: ["--file", "-f"],
          description: "Path to the manifest file",
          displayName: "file",
          args: { name: "file", default: "okteto.yml" },
        },
        {
          name: "--name",
          description: "Name of the app to push to",
          displayName: "name",
          args: { name: "name" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace where the push command is executed",
          displayName: "namespace",
          args: { name: "namespace" },
        },
        {
          name: "--no-cache",
          description: "Do not use cache when building the image",
          displayName: "no-cache",
        },
        {
          name: "--progress",
          description: "Show plain/tty build output",
          displayName: "progress",
          args: { name: "progress", default: "tty" },
        },
        {
          name: ["--tag", "-t"],
          description: "Image tag to build, push and redeploy",
          displayName: "tag",
          args: { name: "tag" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for push",
          displayName: "help",
        },
      ],
    },
    {
      name: "restart",
      description:
        "Restart the deployments listed in the services field of the okteto manifest",
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--context", "-c"],
          description: "Context where the restart command is executed",
          displayName: "context",
          args: { name: "context" },
        },
        {
          name: ["--file", "-f"],
          description: "Path to the manifest file",
          displayName: "file",
          args: { name: "file", default: "okteto.yml" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace where the restart command is executed",
          displayName: "namespace",
          args: { name: "namespace" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for restart",
          displayName: "help",
        },
      ],
    },
    {
      name: "stack",
      description: "Stack management commands",
      subcommands: [
        {
          name: "deploy",
          description: "Deploy a stack",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: "--build",
              description: "Build images before starting any Stack service",
              displayName: "build",
            },
            {
              name: ["--file", "-f"],
              description:
                "Path to the stack manifest files. If more than one is passed the latest will overwrite the fields from the previous",
              isRepeatable: true,
              displayName: "file",
              args: { name: "file" },
            },
            {
              name: "--name",
              description: "Overwrites the stack name",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: ["--namespace", "-n"],
              description:
                "Overwrites the stack namespace where the stack is deployed",
              displayName: "namespace",
              args: { name: "namespace" },
            },
            {
              name: "--no-cache",
              description: "Do not use cache when building the image",
              displayName: "no-cache",
            },
            {
              name: "--progress",
              description: 'Show plain/tty build output (default "tty")',
              displayName: "progress",
              args: { name: "progress", default: "tty" },
            },
            {
              name: ["--timeout", "-t"],
              description:
                "The length of time to wait for completion, zero means never. Any other values should contain a corresponding time unit e.g. 1s, 2m, 3h",
              displayName: "timeout",
              args: { name: "timeout", default: "10m0s" },
            },
            {
              name: "--wait",
              description:
                "Wait until a minimum number of containers are in a ready state for every service",
              displayName: "wait",
            },
            {
              name: ["--help", "-h"],
              description: "Help for deploy",
              displayName: "help",
            },
          ],
        },
        {
          name: "destroy",
          description: "Destroy a stack",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--file", "-f"],
              description: "Path to the stack manifest file",
              isRepeatable: true,
              displayName: "file",
              args: { name: "file" },
            },
            {
              name: "--name",
              description: "Overwrites the stack name",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: ["--namespace", "-n"],
              description:
                "Overwrites the stack namespace where the stack is destroyed",
              displayName: "namespace",
              args: { name: "namespace" },
            },
            {
              name: ["--volumes", "-v"],
              description: "Remove persistent volumes",
              displayName: "volumes",
            },
            {
              name: ["--help", "-h"],
              description: "Help for destroy",
              displayName: "help",
            },
          ],
        },
        {
          name: "endpoints",
          description: "Show endpoints for a stack",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--file", "-f"],
              description:
                "Path to the stack manifest files. If more than one is passed the latest will overwrite the fields from the previous",
              isRepeatable: true,
              displayName: "file",
              args: { name: "file" },
            },
            {
              name: "--name",
              description: "Overwrites the stack name",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: ["--namespace", "-n"],
              description:
                "Overwrites the stack namespace where the stack is deployed",
              displayName: "namespace",
              args: { name: "namespace" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for endpoints",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for stack",
          displayName: "help",
        },
      ],
    },
    {
      name: "status",
      description: "Status of the synchronization process",
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--context", "-c"],
          description: "Context where the up command is executing",
          displayName: "context",
          args: { name: "context" },
        },
        {
          name: ["--file", "-f"],
          description: "Path to the manifest file",
          displayName: "file",
          args: { name: "file", default: "okteto.yml" },
        },
        {
          name: ["--info", "-i"],
          description:
            "Show syncthing links for troubleshooting the synchronization service",
          displayName: "info",
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace where the up command is executing",
          displayName: "namespace",
          args: { name: "namespace" },
        },
        {
          name: ["--watch", "-w"],
          description: "Watch for changes",
          displayName: "watch",
        },
        {
          name: ["--help", "-h"],
          description: "Help for status",
          displayName: "help",
        },
      ],
    },
    {
      name: "up",
      description: "Activate your development container",
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: "--build",
          description:
            "Build on-the-fly the dev image using the info provided by the 'build' okteto manifest field",
          displayName: "build",
        },
        {
          name: ["--context", "-c"],
          description: "Context where the up command is executed",
          displayName: "context",
          args: { name: "context" },
        },
        {
          name: ["--deploy", "-d"],
          description: "Create deployment when it doesn't exist in a namespace",
          displayName: "deploy",
        },
        {
          name: ["--file", "-f"],
          description: "Path to the manifest file",
          displayName: "file",
          args: { name: "file", default: "okteto.yml" },
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace where the up command is executed",
          displayName: "namespace",
          args: { name: "namespace" },
        },
        {
          name: "--pull",
          description: "Force dev image pull",
          displayName: "pull",
        },
        {
          name: ["--remote", "-r"],
          description: "Configures remote execution on the specified port",
          displayName: "remote",
          args: { name: "remote", default: "0" },
        },
        {
          name: "--reset",
          description: "Reset the file synchronization database",
          displayName: "reset",
        },
        {
          name: ["--help", "-h"],
          description: "Help for up",
          displayName: "help",
        },
      ],
    },
    {
      name: "update",
      description: "Update okteto version",
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for update",
          displayName: "help",
        },
      ],
    },
    {
      name: "version",
      description: "View the version of the okteto binary",
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for version",
          displayName: "help",
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "analytics",
          description: "Enable / Disable analytics",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for analytics",
              displayName: "help",
            },
          ],
        },
        {
          name: "build",
          description: "Build (and optionally push) a Docker image",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for build",
              displayName: "help",
            },
          ],
        },
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: "--no-descriptions",
                  description: "Disable completion descriptions",
                  displayName: "no-descriptions",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for bash",
                  displayName: "help",
                },
              ],
            },
            {
              name: "fish",
              description: "Generate the autocompletion script for fish",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: "--no-descriptions",
                  description: "Disable completion descriptions",
                  displayName: "no-descriptions",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for fish",
                  displayName: "help",
                },
              ],
            },
            {
              name: "powershell",
              description: "Generate the autocompletion script for powershell",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: "--no-descriptions",
                  description: "Disable completion descriptions",
                  displayName: "no-descriptions",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for powershell",
                  displayName: "help",
                },
              ],
            },
            {
              name: "zsh",
              description: "Generate the autocompletion script for zsh",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: "--no-descriptions",
                  description: "Disable completion descriptions",
                  displayName: "no-descriptions",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for zsh",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for completion",
              displayName: "help",
            },
          ],
        },
        {
          name: ["ctx", "context"],
          description: "Set the default context",
          subcommands: [
            {
              name: "delete",
              description: "Delete a context",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for delete",
                  displayName: "help",
                },
              ],
            },
            {
              name: ["ls", "list"],
              description: "List available contexts",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for list",
                  displayName: "help",
                },
              ],
            },
            {
              name: "show",
              description: "Print the current context",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for show",
                  displayName: "help",
                },
              ],
            },
            {
              name: "use",
              description: "Set the default context",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--builder", "-b"],
                  description: "Url of the builder service",
                  displayName: "builder",
                  args: { name: "builder" },
                },
                {
                  name: ["--namespace", "-n"],
                  description: "Namespace of your okteto context",
                  displayName: "namespace",
                  args: { name: "namespace" },
                },
                {
                  name: "--okteto",
                  description: "Only shows okteto cluster options",
                  displayName: "okteto",
                },
                {
                  name: ["--token", "-t"],
                  description: "API token for authentication",
                  displayName: "token",
                  args: { name: "token" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for use",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for context",
              displayName: "help",
            },
          ],
        },
        {
          name: "doctor",
          description: "Generate a zip file with the okteto logs",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for doctor",
              displayName: "help",
            },
          ],
        },
        {
          name: "down",
          description: "Deactivate your development container",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for down",
              displayName: "help",
            },
          ],
        },
        {
          name: "exec",
          description: "Execute a command in your development container",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for exec",
              displayName: "help",
            },
          ],
        },
        {
          name: "init",
          description: "Automatically generate your okteto manifest file",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for init",
              displayName: "help",
            },
          ],
        },
        {
          name: "kubeconfig",
          description:
            "Download credentials for the Kubernetes cluster selected via 'okteto context'",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for kubeconfig",
              displayName: "help",
            },
          ],
        },
        {
          name: ["ns", "namespace"],
          description: "Configure the current namespace of the okteto context",
          subcommands: [
            {
              name: "create",
              description: "Create a namespace",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--members", "-m"],
                  description:
                    "Members of the namespace, it can the username or email",
                  isRepeatable: true,
                  displayName: "members",
                  args: { name: "members" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for create",
                  displayName: "help",
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a namespace",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for delete",
                  displayName: "help",
                },
              ],
            },
            {
              name: ["ls", "list"],
              description:
                "List namespaces managed by Okteto in your current context",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for list",
                  displayName: "help",
                },
              ],
            },
            {
              name: ["ns", "use"],
              description:
                "Configure the current namespace of the okteto context",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: "--personal",
                  description: "Load personal account",
                  displayName: "personal",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for use",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for namespace",
              displayName: "help",
            },
          ],
        },
        {
          name: "pipeline",
          description: "Pipeline management commands",
          subcommands: [
            {
              name: "deploy",
              description: "Deploy an okteto pipeline",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--branch", "-b"],
                  description:
                    "The branch to deploy (defaults to the current branch)",
                  displayName: "branch",
                  args: { name: "branch" },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "Relative path within the repository to the manifest file (default to okteto-pipeline.yaml or .okteto/okteto-pipeline.yaml)",
                  displayName: "file",
                  args: { name: "file" },
                },
                {
                  name: "--filename",
                  description:
                    "Relative path within the repository to the manifest file (default to okteto-pipeline.yaml or .okteto/okteto-pipeline.yaml)",
                  displayName: "filename",
                  args: { name: "filename" },
                },
                {
                  name: ["--name", "-p"],
                  description:
                    "Name of the pipeline (defaults to the git config name)",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: ["--namespace", "-n"],
                  description:
                    "Namespace where the up command is executed (defaults to the current namespace)",
                  displayName: "namespace",
                  args: { name: "namespace" },
                },
                {
                  name: ["--repository", "-r"],
                  description:
                    "The repository to deploy (defaults to the current repository)",
                  displayName: "repository",
                  args: { name: "repository" },
                },
                {
                  name: "--skip-if-exists",
                  description:
                    "Skip the pipeline deployment if the pipeline already exists in the namespace (defaults to false)",
                  displayName: "skip-if-exists",
                },
                {
                  name: ["--timeout", "-t"],
                  description:
                    "The length of time to wait for completion, zero means never. Any other values should contain a corresponding time unit e.g. 1s, 2m, 3h",
                  displayName: "timeout",
                  args: { name: "timeout", default: "5m0s" },
                },
                {
                  name: ["--var", "-v"],
                  description:
                    "Set a pipeline variable (can be set more than once)",
                  isRepeatable: true,
                  displayName: "var",
                  args: { name: "var" },
                },
                {
                  name: ["--wait", "-w"],
                  description:
                    "Wait until the pipeline finishes (defaults to false)",
                  displayName: "wait",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for deploy",
                  displayName: "help",
                },
              ],
            },
            {
              name: "destroy",
              description: "Destroy an okteto pipeline",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--name", "-p"],
                  description:
                    "Name of the pipeline (defaults to the git config name)",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: ["--namespace", "-n"],
                  description:
                    "Namespace where the up command is executed (defaults to the current namespace)",
                  displayName: "namespace",
                  args: { name: "namespace" },
                },
                {
                  name: ["--timeout", "-t"],
                  description:
                    "The length of time to wait for completion, zero means never. Any other values should contain a corresponding time unit e.g. 1s, 2m, 3h",
                  displayName: "timeout",
                  args: { name: "timeout", default: "5m0s" },
                },
                {
                  name: ["--volumes", "-v"],
                  description:
                    "Destroy persistent volumes created by the pipeline (defaults to false)",
                  displayName: "volumes",
                },
                {
                  name: ["--wait", "-w"],
                  description:
                    "Wait until the pipeline finishes (defaults to false)",
                  displayName: "wait",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for destroy",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for pipeline",
              displayName: "help",
            },
          ],
        },
        {
          name: "preview",
          description: "Preview environment management commands",
          subcommands: [
            {
              name: "deploy",
              description: "Deploy a preview environment",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--branch", "-b"],
                  description:
                    "The branch to deploy (defaults to the current branch)",
                  displayName: "branch",
                  args: { name: "branch" },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "Relative path within the repository to the manifest file (default to okteto-pipeline.yaml or .okteto/okteto-pipeline.yaml)",
                  displayName: "file",
                  args: { name: "file" },
                },
                {
                  name: "--filename",
                  description:
                    "Relative path within the repository to the manifest file (default to okteto-pipeline.yaml or .okteto/okteto-pipeline.yaml)",
                  displayName: "filename",
                  args: { name: "filename" },
                },
                {
                  name: ["--repository", "-r"],
                  description:
                    "The repository to deploy (defaults to the current repository)",
                  displayName: "repository",
                  args: { name: "repository" },
                },
                {
                  name: ["--scope", "-s"],
                  description:
                    "The scope of preview environment to create. Accepted values are ['personal', 'global']",
                  displayName: "scope",
                  args: { name: "scope", default: "personal" },
                },
                {
                  name: "--sourceUrl",
                  description: "The URL of the original pull/merge request",
                  displayName: "sourceUrl",
                  args: { name: "sourceUrl" },
                },
                {
                  name: ["--timeout", "-t"],
                  description:
                    "The length of time to wait for completion, zero means never. Any other values should contain a corresponding time unit e.g. 1s, 2m, 3h",
                  displayName: "timeout",
                  args: { name: "timeout", default: "5m0s" },
                },
                {
                  name: ["--var", "-v"],
                  description:
                    "Set a pipeline variable (can be set more than once)",
                  isRepeatable: true,
                  displayName: "var",
                  args: { name: "var" },
                },
                {
                  name: ["--wait", "-w"],
                  description:
                    "Wait until the preview environment deployment finishes (defaults to false)",
                  displayName: "wait",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for deploy",
                  displayName: "help",
                },
              ],
            },
            {
              name: "destroy",
              description: "Destroy a preview environment",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for destroy",
                  displayName: "help",
                },
              ],
            },
            {
              name: "endpoints",
              description: "Show endpoints for a preview environment",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for endpoints",
                  displayName: "help",
                },
              ],
            },
            {
              name: "list",
              description: "List all preview environments",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for list",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for preview",
              displayName: "help",
            },
          ],
        },
        {
          name: "push",
          description: "Build, push and redeploy source code to the target app",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for push",
              displayName: "help",
            },
          ],
        },
        {
          name: "restart",
          description:
            "Restart the deployments listed in the services field of the okteto manifest",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for restart",
              displayName: "help",
            },
          ],
        },
        {
          name: "stack",
          description: "Stack management commands",
          subcommands: [
            {
              name: "deploy",
              description: "Deploy a stack",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: "--build",
                  description: "Build images before starting any Stack service",
                  displayName: "build",
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "Path to the stack manifest files. If more than one is passed the latest will overwrite the fields from the previous",
                  isRepeatable: true,
                  displayName: "file",
                  args: { name: "file" },
                },
                {
                  name: "--name",
                  description: "Overwrites the stack name",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: ["--namespace", "-n"],
                  description:
                    "Overwrites the stack namespace where the stack is deployed",
                  displayName: "namespace",
                  args: { name: "namespace" },
                },
                {
                  name: "--no-cache",
                  description: "Do not use cache when building the image",
                  displayName: "no-cache",
                },
                {
                  name: "--progress",
                  description: 'Show plain/tty build output (default "tty")',
                  displayName: "progress",
                  args: { name: "progress", default: "tty" },
                },
                {
                  name: ["--timeout", "-t"],
                  description:
                    "The length of time to wait for completion, zero means never. Any other values should contain a corresponding time unit e.g. 1s, 2m, 3h",
                  displayName: "timeout",
                  args: { name: "timeout", default: "10m0s" },
                },
                {
                  name: "--wait",
                  description:
                    "Wait until a minimum number of containers are in a ready state for every service",
                  displayName: "wait",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for deploy",
                  displayName: "help",
                },
              ],
            },
            {
              name: "destroy",
              description: "Destroy a stack",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--file", "-f"],
                  description: "Path to the stack manifest file",
                  isRepeatable: true,
                  displayName: "file",
                  args: { name: "file" },
                },
                {
                  name: "--name",
                  description: "Overwrites the stack name",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: ["--namespace", "-n"],
                  description:
                    "Overwrites the stack namespace where the stack is destroyed",
                  displayName: "namespace",
                  args: { name: "namespace" },
                },
                {
                  name: ["--volumes", "-v"],
                  description: "Remove persistent volumes",
                  displayName: "volumes",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for destroy",
                  displayName: "help",
                },
              ],
            },
            {
              name: "endpoints",
              description: "Show endpoints for a stack",
              options: [
                {
                  name: ["--loglevel", "-l"],
                  description:
                    "Amount of information outputted (debug, info, warn, error)",
                  displayName: "loglevel",
                  args: { name: "loglevel", default: "warn" },
                },
                {
                  name: ["--output", "-o"],
                  description: "Output format (tty, plain, json)",
                  displayName: "output",
                  args: { name: "output", default: "tty" },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "Path to the stack manifest files. If more than one is passed the latest will overwrite the fields from the previous",
                  isRepeatable: true,
                  displayName: "file",
                  args: { name: "file" },
                },
                {
                  name: "--name",
                  description: "Overwrites the stack name",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: ["--namespace", "-n"],
                  description:
                    "Overwrites the stack namespace where the stack is deployed",
                  displayName: "namespace",
                  args: { name: "namespace" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for endpoints",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for stack",
              displayName: "help",
            },
          ],
        },
        {
          name: "status",
          description: "Status of the synchronization process",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for status",
              displayName: "help",
            },
          ],
        },
        {
          name: "up",
          description: "Activate your development container",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for up",
              displayName: "help",
            },
          ],
        },
        {
          name: "update",
          description: "Update okteto version",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for update",
              displayName: "help",
            },
          ],
        },
        {
          name: "version",
          description: "View the version of the okteto binary",
          options: [
            {
              name: ["--loglevel", "-l"],
              description:
                "Amount of information outputted (debug, info, warn, error)",
              displayName: "loglevel",
              args: { name: "loglevel", default: "warn" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format (tty, plain, json)",
              displayName: "output",
              args: { name: "output", default: "tty" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--loglevel", "-l"],
          description:
            "Amount of information outputted (debug, info, warn, error)",
          displayName: "loglevel",
          args: { name: "loglevel", default: "warn" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format (tty, plain, json)",
          displayName: "output",
          args: { name: "output", default: "tty" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for help",
          displayName: "help",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--loglevel", "-l"],
      description: "Amount of information outputted (debug, info, warn, error)",
      displayName: "loglevel",
      args: { name: "loglevel", default: "warn" },
    },
    {
      name: ["--output", "-o"],
      description: "Output format (tty, plain, json)",
      displayName: "output",
      args: { name: "output", default: "tty" },
    },
    {
      name: ["--help", "-h"],
      description: "Help for okteto",
      displayName: "help",
    },
  ],
};
export default completionSpec;
