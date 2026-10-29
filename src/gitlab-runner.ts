const completionSpec: Fig.Spec = {
  name: "gitlab-runner",
  description:
    "GitLab Runner: runs CI/CD jobs and sends the results back to GitLab",
  subcommands: [
    {
      name: "register",
      description:
        "Register a new runner via the Runners API and add it to the config file",
      options: [
        {
          name: "--name",
          description: "Runner name",
          args: { name: "name" },
        },
        {
          name: "--url",
          description: "GitLab instance URL",
          args: { name: "url" },
        },
        {
          name: "--token",
          description: "Runner authentication token",
          args: { name: "token" },
        },
        {
          name: "--non-interactive",
          description: "Run registration without prompts",
        },
        {
          name: "--config",
          description: "Path to the configuration file",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--executor",
          description: "Executor to use for the runner",
          args: {
            name: "executor",
            suggestions: [
              "shell",
              "docker",
              "docker-windows",
              "docker+machine",
              "kubernetes",
              "parallels",
              "virtualbox",
              "ssh",
              "custom",
            ],
          },
        },
        {
          name: "--docker-image",
          description: "Default Docker image for the docker executor",
          args: { name: "image" },
        },
        {
          name: "--description",
          description: "Runner description (alias of --name)",
          args: { name: "description" },
        },
        {
          name: "--tag-list",
          description: "Tag list for the runner",
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "list",
      description: "List all runners saved in the configuration file",
      options: [
        {
          name: "--config",
          description: "Path to the configuration file",
          args: { name: "file", template: "filepaths" },
        },
      ],
    },
    {
      name: "verify",
      description: "Verify that registered runners can connect to GitLab",
      options: [
        {
          name: "--url",
          description: "GitLab instance URL",
          args: { name: "url" },
        },
        {
          name: "--token",
          description: "Runner authentication token",
          args: { name: "token" },
        },
        {
          name: "--delete",
          description:
            "Delete stale runners during verification (irreversible)",
        },
        {
          name: "--config",
          description: "Path to the configuration file",
          args: { name: "file", template: "filepaths" },
        },
      ],
    },
    {
      name: "unregister",
      description: "Unregister runners from GitLab and the config file",
      options: [
        {
          name: "--url",
          description: "GitLab instance URL",
          args: { name: "url" },
        },
        {
          name: "--token",
          description: "Runner authentication token",
          args: { name: "token" },
        },
        {
          name: "--name",
          description: "Name of the runner to unregister",
          args: { name: "name" },
        },
        {
          name: "--all-runners",
          description: "Unregister all runners",
        },
        {
          name: "--config",
          description: "Path to the configuration file",
          args: { name: "file", template: "filepaths" },
        },
      ],
    },
    {
      name: "reset-token",
      description:
        "Reset a runner's authentication token by name, or by id with a personal access token",
      options: [
        {
          name: "--url",
          description: "GitLab instance URL",
          args: { name: "url" },
        },
        {
          name: "--id",
          description: "Runner id to reset the token for (with a PAT)",
          args: { name: "id" },
        },
        {
          name: "--name",
          description: "Name of the runner to reset the token for",
          args: { name: "name" },
        },
        {
          name: "--token",
          description: "Runner or personal access token",
          args: { name: "token" },
        },
        {
          name: "--all-runners",
          description: "Reset tokens for all runners",
        },
      ],
    },
    {
      name: "lint",
      description: "Validate a configuration file without starting the runner",
      args: { name: "config file", template: "filepaths", isOptional: true },
      options: [
        {
          name: "--config",
          description: "Path to the configuration file",
          args: { name: "file", template: "filepaths" },
        },
      ],
    },
    {
      name: "install",
      description: "Install GitLab Runner as a system service",
      options: [
        {
          name: "--service",
          description: "Service name",
          args: { name: "name", default: "gitlab-runner" },
        },
        {
          name: "--config",
          description: "Path to the configuration file",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--syslog",
          description: "Log to syslog",
        },
        {
          name: "--working-directory",
          description: "Working directory for the service",
          args: { name: "dir", template: "folders" },
        },
        {
          name: "--user",
          description: "User to run the service as",
          args: { name: "user" },
        },
        {
          name: "--password",
          description: "Password for the service user",
          args: { name: "password" },
        },
        {
          name: "--user-service",
          description: "Install as a user-level service",
        },
      ],
    },
    {
      name: "uninstall",
      description: "Stop and remove the GitLab Runner service",
      options: [
        {
          name: "--service",
          description: "Service name",
          args: { name: "name", default: "gitlab-runner" },
        },
      ],
    },
    {
      name: "start",
      description: "Start the GitLab Runner service",
    },
    {
      name: "stop",
      description: "Stop the GitLab Runner service",
    },
    {
      name: "restart",
      description: "Restart the GitLab Runner service",
    },
    {
      name: "status",
      description: "Print the GitLab Runner service status",
    },
    {
      name: "run",
      description:
        "Run the multi-runner service, executing jobs from all configured runners",
      options: [
        {
          name: "--config",
          description: "Path to the configuration file",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--working-directory",
          description: "Base working directory for jobs",
          args: { name: "dir", template: "folders" },
        },
        {
          name: "--user",
          description: "User to run the builds as",
          args: { name: "user" },
        },
        {
          name: "--syslog",
          description: "Log to syslog",
        },
        {
          name: "--listen-address",
          description: "Address for the Prometheus metrics HTTP server",
          args: { name: "address" },
        },
        {
          name: "--error-hook-interval",
          description: "Interval for checking runner health",
          args: { name: "duration" },
        },
      ],
    },
    {
      name: "run-single",
      description: "Run a single runner with one build",
      options: [
        {
          name: ["-u", "--url"],
          description: "GitLab instance URL",
          args: { name: "url" },
        },
        {
          name: ["-t", "--token"],
          description: "Runner authentication token",
          args: { name: "token" },
        },
        {
          name: "--executor",
          description: "Executor to use",
          args: { name: "executor" },
        },
        {
          name: "--docker-image",
          description: "Docker image for the docker executor",
          args: { name: "image" },
        },
        {
          name: ["-c", "--config"],
          description: "Path to the configuration file",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-r", "--max-builds"],
          description: "Maximum number of builds before the runner exits",
          args: { name: "n" },
        },
        {
          name: "--wait-timeout",
          description: "Seconds to wait for new jobs before exiting",
          args: { name: "seconds" },
        },
      ],
    },
    {
      name: "exec",
      description: "Run a job defined in .gitlab-ci.yml locally",
      args: { name: "job", description: "Job name from .gitlab-ci.yml" },
      options: [
        {
          name: "--shell",
          description: "Use the given shell for the build",
          args: { name: "shell" },
        },
        {
          name: "--docker-image",
          description: "Docker image for the docker executor",
          args: { name: "image" },
        },
        {
          name: "--env",
          description: "Set an environment variable (KEY=VALUE)",
          args: { name: "key=value" },
        },
        {
          name: "--help",
          description: "Show help for exec",
        },
      ],
    },
    {
      name: "artifacts-downloader",
      description: "Internal command: download and extract build artifacts",
    },
    {
      name: "artifacts-uploader",
      description: "Internal command: create and upload build artifacts",
    },
    {
      name: "cache-archiver",
      description: "Internal command: create and upload a cache archive",
    },
    {
      name: "cache-extractor",
      description: "Internal command: restore a cache archive",
    },
    {
      name: "cache-init",
      description: "Internal command: change permissions for cache paths",
    },
    {
      name: "health-check",
      description: "Internal command: check the runner service health",
    },
    {
      name: "read-logs",
      description: "Internal command: read job logs (Kubernetes executor)",
    },
    {
      name: "single",
      description: "Internal command: run a single build from a configuration",
    },
    {
      name: "helper",
      description: "Internal command: runner helper container entrypoint",
    },
    {
      name: "fleeting",
      description: "Internal command: autoscaling plugin manager",
      subcommands: [
        {
          name: "install",
          description: "Install a fleeting plugin",
        },
        {
          name: "list",
          description: "List available fleeting plugin groups",
        },
        {
          name: "run",
          description: "Run a fleeting plugin instance",
        },
        {
          name: "update",
          description: "Update fleeting plugin instances",
        },
      ],
    },
  ],
  options: [
    {
      name: "--debug",
      description: "Enable debug mode",
    },
    {
      name: "--log-format",
      description: "Log format",
      args: {
        name: "format",
        suggestions: ["runner", "text", "json"],
        default: "runner",
      },
    },
    {
      name: "--log-level",
      description: "Log level",
      args: {
        name: "level",
        suggestions: ["debug", "info", "warn", "error", "fatal", "panic"],
        default: "info",
      },
    },
    {
      name: "--cpuprofile",
      description: "Write a CPU profile to the given file",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--version",
      description: "Print the version",
    },
    {
      name: "--help",
      description: "Show help",
    },
  ],
};

export default completionSpec;
