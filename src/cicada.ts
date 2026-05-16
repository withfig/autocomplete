const completion: Fig.Spec = {
  name: "cicada",
  description: "Write CI/CD Pipelines in TypeScript",
  subcommands: [
    {
      name: "run",
      description: "Run a cicada pipeline",
      options: [
        {
          name: ["-s", "--secret"],
          description:
            "Name of the secret to use, these come from environment variables",
          isRepeatable: true,
          args: {
            name: "secret",
            isOptional: true,
          },
        },
        {
          name: "--dotenv",
          description: "Load a custom .env file",
          isRepeatable: true,
          args: {
            name: "dotenv",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--secrets-json",
          description: "Load secrets from a json file",
          isRepeatable: true,
          args: {
            name: "secrets_json",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cicada-dockerfile",
          description: "A custom dockerfile to load the cicada bin from",
          hidden: true,
          isRepeatable: true,
          args: {
            name: "cicada_dockerfile",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--oci-backend",
          description: "The OCI backend to use",
          isRepeatable: true,
          args: {
            name: "oci_backend",
            isOptional: true,
            suggestions: ["docker", "podman"],
          },
        },
        {
          name: "--no-dotenv",
          description: "Do not load .env file",
        },
        {
          name: "--no-cache",
          description: "Disable caching",
        },
        {
          name: ["-h", "--help"],
          description: "Print help (see more with '--help')",
        },
      ],
      args: {
        name: "pipeline",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "step",
      description: "Run a step in a cicada workflow",
      hidden: true,
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: [
        {
          name: "workflow",
        },
        {
          name: "step",
        },
      ],
    },
    {
      name: "init",
      description:
        "Initialize a cicada project, you can optionally specify a pipeline to create",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "pipeline",
        isOptional: true,
      },
    },
    {
      name: "new",
      description: "Create a cicada pipeline",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "pipeline",
      },
    },
    {
      name: "update",
      description: "Update cicada",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "completions",
      description: "List all available completions",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "shell",
        suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
      },
    },
    {
      name: "fig-completion",
      description: "Create fig completions",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "open",
      description: "Open a pipeline in your editor",
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "pipeline",
        template: "filepaths",
      },
    },
    {
      name: "doctor",
      description: "Check for common issues",
      hidden: true,
      options: [
        {
          name: "--oci-backend",
          description: "The OCI backend to use",
          isRepeatable: true,
          args: {
            name: "oci_backend",
            isOptional: true,
            suggestions: ["docker", "podman"],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "debug",
      description: "Debug commands",
      hidden: true,
      subcommands: [
        {
          name: "daemon-info",
          options: [
            {
              name: "--oci-backend",
              description: "The OCI backend to use",
              isRepeatable: true,
              args: {
                name: "oci_backend",
                isOptional: true,
                suggestions: ["docker", "podman"],
              },
            },
            {
              name: ["-j", "--json"],
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: ["disk-usage", "du"],
          options: [
            {
              name: "--oci-backend",
              description: "The OCI backend to use",
              isRepeatable: true,
              args: {
                name: "oci_backend",
                isOptional: true,
                suggestions: ["docker", "podman"],
              },
            },
            {
              name: ["-j", "--json"],
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "workers",
          options: [
            {
              name: "--oci-backend",
              description: "The OCI backend to use",
              isRepeatable: true,
              args: {
                name: "oci_backend",
                isOptional: true,
                suggestions: ["docker", "podman"],
              },
            },
            {
              name: ["-j", "--json"],
            },
            {
              name: ["-h", "--help"],
              description: "Print help",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          subcommands: [
            {
              name: "daemon-info",
            },
            {
              name: "disk-usage",
            },
            {
              name: "workers",
            },
            {
              name: "help",
              description:
                "Print this message or the help of the given subcommand(s)",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      subcommands: [
        {
          name: "run",
          description: "Run a cicada pipeline",
        },
        {
          name: "step",
          description: "Run a step in a cicada workflow",
          hidden: true,
        },
        {
          name: "init",
          description:
            "Initialize a cicada project, you can optionally specify a pipeline to create",
        },
        {
          name: "new",
          description: "Create a cicada pipeline",
        },
        {
          name: "update",
          description: "Update cicada",
        },
        {
          name: "completions",
          description: "List all available completions",
        },
        {
          name: "fig-completion",
          description: "Create fig completions",
        },
        {
          name: "open",
          description: "Open a pipeline in your editor",
        },
        {
          name: "doctor",
          description: "Check for common issues",
          hidden: true,
        },
        {
          name: "debug",
          description: "Debug commands",
          hidden: true,
          subcommands: [
            {
              name: "daemon-info",
            },
            {
              name: "disk-usage",
            },
            {
              name: "workers",
            },
          ],
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
};

export default completion;
