const completionSpec: Fig.Spec = {
  name: "copilot",
  description: "👩‍✈️ Launch and manage containerized applications on AWS",
  subcommands: [
    {
      name: "init",
      description: "Create a new ECS or App Runner application",
      options: [
        {
          name: ["--app", "-a"],
          description: "Name of the application",
          displayName: "app",
          args: { name: "app" },
        },
        {
          name: "--deploy",
          description: 'Deploy your service or job to a "test" environment',
          displayName: "deploy",
        },
        {
          name: ["--dockerfile", "-d"],
          description:
            "Path to the Dockerfile. Mutually exclusive with -i, --image",
          displayName: "dockerfile",
          args: { name: "dockerfile" },
        },
        {
          name: ["--image", "-i"],
          description:
            "The location of an existing Docker image. Mutually exclusive with -d, --dockerfile",
          displayName: "image",
          args: { name: "image" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the service or job",
          displayName: "name",
          args: { name: "name" },
        },
        {
          name: "--port",
          description: "The port on which your service listens",
          displayName: "port",
          args: { name: "port", default: "0" },
        },
        {
          name: "--retries",
          description:
            "Optional. The number of times to try restarting the job on a failure",
          displayName: "retries",
          args: { name: "retries", default: "0" },
        },
        {
          name: "--schedule",
          description:
            'The schedule on which to run this job.  Accepts cron expressions of the format (M H DoM M DoW) and schedule definition strings.  For example: "0 * * * *", "@daily", "@weekly", "@every 1h30m". AWS Schedule Expressions of the form "rate(10 minutes)" or "cron(0 12 L * ? 2021)" are also accepted',
          displayName: "schedule",
          args: { name: "schedule" },
        },
        {
          name: "--tag",
          description: "Optional. The container image tag",
          displayName: "tag",
          args: { name: "tag" },
        },
        {
          name: "--timeout",
          description:
            'Optional. The total execution time for the task, including retries. Accepts valid Go duration strings. For example: "2h", "1h30m", "900s"',
          displayName: "timeout",
          args: { name: "timeout" },
        },
        {
          name: ["--type", "-t"],
          description:
            'Type of job or svc to create. Must be one of: "Request-Driven Web Service", "Load Balanced Web Service", "Backend Service", "Worker Service", "Scheduled Job"',
          displayName: "type",
          args: { name: "type" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for init",
          displayName: "help",
        },
      ],
    },
    {
      name: "docs",
      description: "Open the copilot docs",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for docs",
          displayName: "help",
        },
      ],
    },
    {
      name: "app",
      description:
        "Commands for applications. Applications are a collection of services and environments",
      subcommands: [
        {
          name: "init",
          description: "Creates a new empty application",
          options: [
            {
              name: "--domain",
              description: "Optional. Your existing custom domain name",
              displayName: "domain",
              args: { name: "domain" },
            },
            {
              name: "--resource-tags",
              description:
                "Optional. Labels with a key and value separated by commas. Allows you to categorize resources",
              displayName: "resource-tags",
              args: { name: "resource-tags" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for init",
              displayName: "help",
            },
          ],
        },
        {
          name: "ls",
          description: "Lists all the applications in your account",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for ls",
              displayName: "help",
            },
          ],
        },
        {
          name: "show",
          description: "Shows info about an application",
          options: [
            {
              name: "--json",
              description: "Optional. Outputs in JSON format",
              displayName: "json",
            },
            {
              name: ["--name", "-n"],
              description: "Name of the application",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for show",
              displayName: "help",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete all resources associated with the application",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the application",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--yes",
              description: "Skips confirmation prompt",
              displayName: "yes",
            },
            {
              name: ["--help", "-h"],
              description: "Help for delete",
              displayName: "help",
            },
          ],
        },
        {
          name: "upgrade",
          description:
            "Upgrades the template of an application to the latest version",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the application",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for upgrade",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for app",
          displayName: "help",
        },
      ],
    },
    {
      name: "env",
      description:
        "Commands for environments. Environments are deployment stages shared between services",
      subcommands: [
        {
          name: "init",
          description: "Creates a new environment in your application",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--aws-access-key-id",
              description: "Optional. An AWS access key",
              displayName: "aws-access-key-id",
              args: { name: "aws-access-key-id" },
            },
            {
              name: "--aws-secret-access-key",
              description: "Optional. An AWS secret access key",
              displayName: "aws-secret-access-key",
              args: { name: "aws-secret-access-key" },
            },
            {
              name: "--aws-session-token",
              description:
                "Optional. An AWS session token for temporary credentials",
              displayName: "aws-session-token",
              args: { name: "aws-session-token" },
            },
            {
              name: "--default-config",
              description:
                "Optional. Skip prompting and use default environment configuration",
              displayName: "default-config",
            },
            {
              name: "--import-private-subnets",
              description: "Optional. Use existing private subnet IDs",
              displayName: "import-private-subnets",
              args: { name: "import-private-subnets" },
            },
            {
              name: "--import-public-subnets",
              description: "Optional. Use existing public subnet IDs",
              displayName: "import-public-subnets",
              args: { name: "import-public-subnets" },
            },
            {
              name: "--import-vpc-id",
              description: "Optional. Use an existing VPC ID",
              displayName: "import-vpc-id",
              args: { name: "import-vpc-id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the environment",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--override-az-names",
              description:
                "Optional. Availability Zone names. (default 2 random AZs)",
              displayName: "override-az-names",
              args: { name: "override-az-names" },
            },
            {
              name: "--override-private-cidrs",
              description:
                "Optional. CIDR to use for private subnets. (default 10.0.2.0/24,10.0.3.0/24)",
              displayName: "override-private-cidrs",
              args: { name: "override-private-cidrs" },
            },
            {
              name: "--override-public-cidrs",
              description:
                "Optional. CIDR to use for public subnets.  (default 10.0.0.0/24,10.0.1.0/24)",
              displayName: "override-public-cidrs",
              args: { name: "override-public-cidrs" },
            },
            {
              name: "--override-vpc-cidr",
              description:
                "Optional. Global CIDR to use for VPC. (default 10.0.0.0/16)",
              displayName: "override-vpc-cidr",
              args: { name: "override-vpc-cidr", default: "<nil>" },
            },
            {
              name: "--prod",
              description: "If the environment contains production services",
              displayName: "prod",
            },
            {
              name: "--profile",
              description: "Name of the profile",
              displayName: "profile",
              args: { name: "profile" },
            },
            {
              name: "--region",
              description:
                "Optional. An AWS region where the environment will be created",
              displayName: "region",
              args: { name: "region" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for init",
              displayName: "help",
            },
          ],
        },
        {
          name: "ls",
          description: "Lists all the environments in an application",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--json",
              description: "Optional. Outputs in JSON format",
              displayName: "json",
            },
            {
              name: ["--help", "-h"],
              description: "Help for ls",
              displayName: "help",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an environment from your application",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the environment",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--yes",
              description: "Skips confirmation prompt",
              displayName: "yes",
            },
            {
              name: ["--help", "-h"],
              description: "Help for delete",
              displayName: "help",
            },
          ],
        },
        {
          name: "show",
          description: "Shows info about a deployed environment",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--json",
              description: "Optional. Outputs in JSON format",
              displayName: "json",
            },
            {
              name: ["--name", "-n"],
              description: "Name of the environment",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--resources",
              description: "Optional. Show the resources in your environment",
              displayName: "resources",
            },
            {
              name: ["--help", "-h"],
              description: "Help for show",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for env",
          displayName: "help",
        },
      ],
    },
    {
      name: "svc",
      description:
        "Commands for services. Services are long-running ECS or App Runner services",
      subcommands: [
        {
          name: "init",
          description: "Creates a new service in an application",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--dockerfile", "-d"],
              description:
                "Path to the Dockerfile. Mutually exclusive with -i, --image",
              displayName: "dockerfile",
              args: { name: "dockerfile" },
            },
            {
              name: ["--image", "-i"],
              description:
                "The location of an existing Docker image. Mutually exclusive with -d, --dockerfile",
              displayName: "image",
              args: { name: "image" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the service",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--no-subscribe",
              description:
                "Optional. Turn off selection for adding subscriptions for worker services",
              displayName: "no-subscribe",
            },
            {
              name: "--port",
              description: "The port on which your service listens",
              displayName: "port",
              args: { name: "port", default: "0" },
            },
            {
              name: "--subscribe-topics",
              description:
                "Optional. SNS Topics to subscribe to from other services in your application. Must be of format '<svcName>:<topicName>'",
              isRepeatable: true,
              displayName: "subscribe-topics",
              args: { name: "subscribe-topics" },
            },
            {
              name: ["--svc-type", "-t"],
              description:
                'Type of service to create. Must be one of: "Request-Driven Web Service", "Load Balanced Web Service", "Backend Service", "Worker Service"',
              displayName: "svc-type",
              args: { name: "svc-type" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for init",
              displayName: "help",
            },
          ],
        },
        {
          name: "ls",
          description: "Lists all the services in an application",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--json",
              description: "Optional. Outputs in JSON format",
              displayName: "json",
            },
            {
              name: "--local",
              description: "Only show services in the workspace",
              displayName: "local",
            },
            {
              name: ["--help", "-h"],
              description: "Help for ls",
              displayName: "help",
            },
          ],
        },
        {
          name: "package",
          description: "Prints the AWS CloudFormation template of a service",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--env", "-e"],
              description: "Name of the environment",
              displayName: "env",
              args: { name: "env" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the service",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--output-dir",
              description:
                "Optional. Writes the stack template and template configuration to a directory",
              displayName: "output-dir",
              args: { name: "output-dir" },
            },
            {
              name: "--tag",
              description: "Optional. The container image tag",
              displayName: "tag",
              args: { name: "tag" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for package",
              displayName: "help",
            },
          ],
        },
        {
          name: "deploy",
          description: "Deploys a service to an environment",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--env", "-e"],
              description: "Name of the environment",
              displayName: "env",
              args: { name: "env" },
            },
            {
              name: "--force",
              description:
                "Optional. Force a new service deployment using the existing image",
              displayName: "force",
            },
            {
              name: ["--name", "-n"],
              description: "Name of the service",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--resource-tags",
              description:
                "Optional. Labels with a key and value separated by commas. Allows you to categorize resources",
              displayName: "resource-tags",
              args: { name: "resource-tags" },
            },
            {
              name: "--tag",
              description: "Optional. The container image tag",
              displayName: "tag",
              args: { name: "tag" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for deploy",
              displayName: "help",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a service from an application",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--env", "-e"],
              description: "Name of the environment",
              displayName: "env",
              args: { name: "env" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the service",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--yes",
              description: "Skips confirmation prompt",
              displayName: "yes",
            },
            {
              name: ["--help", "-h"],
              description: "Help for delete",
              displayName: "help",
            },
          ],
        },
        {
          name: "show",
          description: "Shows info about a deployed service per environment",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--json",
              description: "Optional. Outputs in JSON format",
              displayName: "json",
            },
            {
              name: ["--name", "-n"],
              description: "Name of the service",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--resources",
              description: "Optional. Show the resources in your service",
              displayName: "resources",
            },
            {
              name: ["--help", "-h"],
              description: "Help for show",
              displayName: "help",
            },
          ],
        },
        {
          name: "status",
          description: "Shows status of a deployed service",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--env", "-e"],
              description: "Name of the environment",
              displayName: "env",
              args: { name: "env" },
            },
            {
              name: "--json",
              description: "Optional. Outputs in JSON format",
              displayName: "json",
            },
            {
              name: ["--name", "-n"],
              description: "Name of the service",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for status",
              displayName: "help",
            },
          ],
        },
        {
          name: "logs",
          description: "Displays logs of a deployed service",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--end-time",
              description:
                "Optional. Only return logs before a specific date (RFC3339). Defaults to all logs. Only one of end-time / follow may be used",
              displayName: "end-time",
              args: { name: "end-time" },
            },
            {
              name: ["--env", "-e"],
              description: "Name of the environment",
              displayName: "env",
              args: { name: "env" },
            },
            {
              name: "--follow",
              description: "Optional. Specifies if the logs should be streamed",
              displayName: "follow",
            },
            {
              name: "--json",
              description: "Optional. Outputs in JSON format",
              displayName: "json",
            },
            {
              name: "--limit",
              description:
                "Optional. The maximum number of log events returned. Default is 10 unless any time filtering flags are set",
              displayName: "limit",
              args: { name: "limit", default: "0" },
            },
            {
              name: "--log-group",
              description: "Optional. Only return logs from specific log group",
              displayName: "log-group",
              args: { name: "log-group" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the service",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--since",
              description:
                "Optional. Only return logs newer than a relative duration like 5s, 2m, or 3h. Defaults to all logs. Only one of start-time / since may be used",
              displayName: "since",
              args: { name: "since", default: "0s" },
            },
            {
              name: "--start-time",
              description:
                "Optional. Only return logs after a specific date (RFC3339). Defaults to all logs. Only one of start-time / since may be used",
              displayName: "start-time",
              args: { name: "start-time" },
            },
            {
              name: "--tasks",
              description: "Optional. Only return logs from specific task IDs",
              displayName: "tasks",
              args: { name: "tasks" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for logs",
              displayName: "help",
            },
          ],
        },
        {
          name: "exec",
          description:
            "Execute a command in a running container part of a service",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--command", "-c"],
              description:
                "Optional. The command that is passed to a running container",
              displayName: "command",
              args: { name: "command", default: "/bin/sh" },
            },
            {
              name: "--container",
              description:
                "Optional. The specific container you want to exec in. By default the first essential container will be used",
              displayName: "container",
              args: { name: "container" },
            },
            {
              name: ["--env", "-e"],
              description: "Name of the environment",
              displayName: "env",
              args: { name: "env" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the service, job, or task group",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--task-id",
              description: "Optional. ID of the task you want to exec in",
              displayName: "task-id",
              args: { name: "task-id" },
            },
            {
              name: "--yes",
              description:
                "Optional. Whether to update the Session Manager Plugin",
              displayName: "yes",
            },
            {
              name: ["--help", "-h"],
              description: "Help for exec",
              displayName: "help",
            },
          ],
        },
        {
          name: "pause",
          description: "Pause running App Runner service",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--env", "-e"],
              description: "Name of the environment",
              displayName: "env",
              args: { name: "env" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the service",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--yes",
              description: "Skips confirmation prompt",
              displayName: "yes",
            },
            {
              name: ["--help", "-h"],
              description: "Help for pause",
              displayName: "help",
            },
          ],
        },
        {
          name: "resume",
          description: "Resumes a paused service",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--env", "-e"],
              description: "Name of the environment",
              displayName: "env",
              args: { name: "env" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the service",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for resume",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for svc",
          displayName: "help",
        },
      ],
    },
    {
      name: "job",
      description:
        "Commands for jobs. Jobs are tasks that are triggered by events",
      subcommands: [
        {
          name: "init",
          description: "Creates a new scheduled job in an application",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--dockerfile", "-d"],
              description:
                "Path to the Dockerfile. Mutually exclusive with -i, --image",
              displayName: "dockerfile",
              args: { name: "dockerfile" },
            },
            {
              name: ["--image", "-i"],
              description:
                "The location of an existing Docker image. Mutually exclusive with -d, --dockerfile",
              displayName: "image",
              args: { name: "image" },
            },
            {
              name: ["--job-type", "-t"],
              description:
                'Type of job to create. Must be one of: "Scheduled Job"',
              displayName: "job-type",
              args: { name: "job-type" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the job",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--retries",
              description:
                "Optional. The number of times to try restarting the job on a failure",
              displayName: "retries",
              args: { name: "retries", default: "0" },
            },
            {
              name: ["--schedule", "-s"],
              description:
                'The schedule on which to run this job.  Accepts cron expressions of the format (M H DoM M DoW) and schedule definition strings.  For example: "0 * * * *", "@daily", "@weekly", "@every 1h30m". AWS Schedule Expressions of the form "rate(10 minutes)" or "cron(0 12 L * ? 2021)" are also accepted',
              displayName: "schedule",
              args: { name: "schedule" },
            },
            {
              name: "--timeout",
              description:
                'Optional. The total execution time for the task, including retries. Accepts valid Go duration strings. For example: "2h", "1h30m", "900s"',
              displayName: "timeout",
              args: { name: "timeout" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for init",
              displayName: "help",
            },
          ],
        },
        {
          name: "ls",
          description: "Lists all the jobs in an application",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--json",
              description: "Optional. Outputs in JSON format",
              displayName: "json",
            },
            {
              name: "--local",
              description: "Only show jobs in the workspace",
              displayName: "local",
            },
            {
              name: ["--help", "-h"],
              description: "Help for ls",
              displayName: "help",
            },
          ],
        },
        {
          name: "package",
          description: "Prints the AWS CloudFormation template of a job",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--env", "-e"],
              description: "Name of the environment",
              displayName: "env",
              args: { name: "env" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the job",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--output-dir",
              description:
                "Optional. Writes the stack template and template configuration to a directory",
              displayName: "output-dir",
              args: { name: "output-dir" },
            },
            {
              name: "--tag",
              description: "Optional. The container image tag",
              displayName: "tag",
              args: { name: "tag" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for package",
              displayName: "help",
            },
          ],
        },
        {
          name: "deploy",
          description: "Deploys a job to an environment",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--env", "-e"],
              description: "Name of the environment",
              displayName: "env",
              args: { name: "env" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the job",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--resource-tags",
              description:
                "Optional. Labels with a key and value separated by commas. Allows you to categorize resources",
              displayName: "resource-tags",
              args: { name: "resource-tags" },
            },
            {
              name: "--tag",
              description: "Optional. The container image tag",
              displayName: "tag",
              args: { name: "tag" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for deploy",
              displayName: "help",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a job from an application",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--env", "-e"],
              description: "Name of the environment",
              displayName: "env",
              args: { name: "env" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the job",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--yes",
              description: "Skips confirmation prompt",
              displayName: "yes",
            },
            {
              name: ["--help", "-h"],
              description: "Help for delete",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for job",
          displayName: "help",
        },
      ],
    },
    {
      name: "task",
      description:
        "Commands for tasks. One-off Amazon ECS tasks that terminate once their work is done",
      subcommands: [
        {
          name: "run",
          description: "Run a one-off task on Amazon ECS",
          options: [
            {
              name: "--app",
              description:
                "Optional. Name of the application. Cannot be specified with 'default', 'subnets' or 'security-groups'",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--build-context",
              description:
                "Path to the Docker build context. Mutually exclusive with -i, --image",
              displayName: "build-context",
              args: { name: "build-context" },
            },
            {
              name: "--cluster",
              description:
                "Optional. The short name or full ARN of the cluster to run the task in.  Cannot be specified with 'app', 'env' or 'default'",
              displayName: "cluster",
              args: { name: "cluster" },
            },
            {
              name: "--command",
              description:
                'Optional. The command that is passed to "docker run" to override the default command',
              displayName: "command",
              args: { name: "command" },
            },
            {
              name: "--count",
              description: "Optional. The number of tasks to set up",
              displayName: "count",
              args: { name: "count", default: "1" },
            },
            {
              name: "--cpu",
              description:
                "Optional. The number of CPU units to reserve for each task",
              displayName: "cpu",
              args: { name: "cpu", default: "256" },
            },
            {
              name: "--default",
              description:
                "Optional. Run tasks in default cluster and default subnets.  Cannot be specified with 'app', 'env' or 'subnets'",
              displayName: "default",
            },
            {
              name: "--dockerfile",
              description:
                "Path to the Dockerfile. Mutually exclusive with -i, --image",
              displayName: "dockerfile",
              args: { name: "dockerfile", default: "Dockerfile" },
            },
            {
              name: "--entrypoint",
              description:
                'Optional. The entrypoint that is passed to "docker run" to override the default entrypoint',
              displayName: "entrypoint",
              args: { name: "entrypoint" },
            },
            {
              name: "--env",
              description:
                "Optional. Name of the environment. Cannot be specified with 'default', 'subnets' or 'security-groups'",
              displayName: "env",
              args: { name: "env" },
            },
            {
              name: "--env-vars",
              description:
                "Optional. Environment variables specified by key=value separated by commas",
              displayName: "env-vars",
              args: { name: "env-vars" },
            },
            {
              name: "--execution-role",
              description:
                "Optional. The ARN of the role that grants the container agent permission to make AWS API calls",
              displayName: "execution-role",
              args: { name: "execution-role" },
            },
            {
              name: "--follow",
              description: "Optional. Specifies if the logs should be streamed",
              displayName: "follow",
            },
            {
              name: "--generate-cmd",
              description:
                "Optional. Generate a command with a pre-filled value for each flag. To use it for an ECS service, specify --generate-cmd <cluster name>/<service name>. Alternatively, if the service or job is created with Copilot, specify --generate-cmd <application>/<environment>/<service or job name>. Cannot be specified with any other flags",
              displayName: "generate-cmd",
              args: { name: "generate-cmd" },
            },
            {
              name: ["--image", "-i"],
              description:
                "The location of an existing Docker image. Mutually exclusive with -d, --dockerfile",
              displayName: "image",
              args: { name: "image" },
            },
            {
              name: "--memory",
              description:
                "Optional. The amount of memory to reserve in MiB for each task",
              displayName: "memory",
              args: { name: "memory", default: "512" },
            },
            {
              name: "--platform-arch",
              description:
                "Optional. Architecture of the task. Must be specified along with 'platform-os'",
              displayName: "platform-arch",
              args: { name: "platform-arch" },
            },
            {
              name: "--platform-os",
              description:
                "Optional. Operating system of the task. Must be specified along with 'platform-arch'",
              displayName: "platform-os",
              args: { name: "platform-os" },
            },
            {
              name: "--resource-tags",
              description:
                "Optional. Labels with a key and value separated by commas. Allows you to categorize resources",
              displayName: "resource-tags",
              args: { name: "resource-tags" },
            },
            {
              name: "--secrets",
              description:
                "Optional. Secrets to inject into the container. Specified by key=value separated by commas",
              displayName: "secrets",
              args: { name: "secrets" },
            },
            {
              name: "--security-groups",
              description:
                "Optional. The security group IDs for the task to use. Can be specified multiple times. Cannot be specified with 'app' or 'env'",
              displayName: "security-groups",
              args: { name: "security-groups" },
            },
            {
              name: "--subnets",
              description:
                "Optional. The subnet IDs for the task to use. Can be specified multiple times. Cannot be specified with 'app', 'env' or 'default'",
              displayName: "subnets",
              args: { name: "subnets" },
            },
            {
              name: "--tag",
              description:
                'Optional. The container image tag in addition to "latest"',
              displayName: "tag",
              args: { name: "tag" },
            },
            {
              name: ["--task-group-name", "-n"],
              description:
                "Optional. The group name of the task.  Tasks with the same group name share the same set of resources.  (default directory name)",
              displayName: "task-group-name",
              args: { name: "task-group-name" },
            },
            {
              name: "--task-role",
              description: "Optional. The ARN of the role for the task to use",
              displayName: "task-role",
              args: { name: "task-role" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for run",
              displayName: "help",
            },
          ],
        },
        {
          name: "exec",
          description:
            "Execute a command in a running container part of a task",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--command", "-c"],
              description:
                "Optional. The command that is passed to a running container",
              displayName: "command",
              args: { name: "command", default: "/bin/sh" },
            },
            {
              name: "--default",
              description:
                "Optional. Execute commands in running tasks in default cluster and default subnets.  Cannot be specified with 'app' or 'env'",
              displayName: "default",
            },
            {
              name: ["--env", "-e"],
              description: "Name of the environment",
              displayName: "env",
              args: { name: "env" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the service, job, or task group",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--task-id",
              description: "Optional. ID of the task you want to exec in",
              displayName: "task-id",
              args: { name: "task-id" },
            },
            {
              name: "--yes",
              description:
                "Optional. Whether to update the Session Manager Plugin",
              displayName: "yes",
            },
            {
              name: ["--help", "-h"],
              description: "Help for exec",
              displayName: "help",
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a one-off task from an application or default cluster",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--default",
              description:
                "Optional. Delete a task which was launched in the default cluster and subnets. Cannot be specified with 'app' or 'env'",
              displayName: "default",
            },
            {
              name: ["--env", "-e"],
              description: "Name of the environment",
              displayName: "env",
              args: { name: "env" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the service",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--yes",
              description: "Skips confirmation prompt",
              displayName: "yes",
            },
            {
              name: ["--help", "-h"],
              description: "Help for delete",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for task",
          displayName: "help",
        },
      ],
    },
    {
      name: "storage",
      description: "Commands for working with storage and databases",
      subcommands: [
        {
          name: "init",
          description:
            "Creates a new AWS CloudFormation template for a storage resource",
          options: [
            {
              name: "--engine",
              description:
                'The database engine used in the cluster. Must be either "MySQL" or "PostgreSQL"',
              displayName: "engine",
              args: { name: "engine" },
            },
            {
              name: "--initial-db",
              description: "The initial database to create in the cluster",
              displayName: "initial-db",
              args: { name: "initial-db" },
            },
            {
              name: "--lsi",
              description:
                "Optional. Attribute to use as an alternate sort key. May be specified up to 5 times. Must be of the format '<keyName>:<dataType>'",
              isRepeatable: true,
              displayName: "lsi",
              args: { name: "lsi" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the storage resource to create",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--no-lsi",
              description:
                "Optional. Don't ask about configuring alternate sort keys",
              displayName: "no-lsi",
            },
            {
              name: "--no-sort",
              description: "Optional. Skip configuring sort keys",
              displayName: "no-sort",
            },
            {
              name: "--parameter-group",
              description:
                "Optional. The name of the parameter group to associate with the cluster",
              displayName: "parameter-group",
              args: { name: "parameter-group" },
            },
            {
              name: "--partition-key",
              description:
                "Partition key for the DDB table. Must be of the format '<keyName>:<dataType>'",
              displayName: "partition-key",
              args: { name: "partition-key" },
            },
            {
              name: "--sort-key",
              description:
                "Optional. Sort key for the DDB table. Must be of the format '<keyName>:<dataType>'",
              displayName: "sort-key",
              args: { name: "sort-key" },
            },
            {
              name: ["--storage-type", "-t"],
              description:
                'Type of storage to add. Must be one of: "DynamoDB", "S3", "Aurora"',
              displayName: "storage-type",
              args: { name: "storage-type" },
            },
            {
              name: ["--workload", "-w"],
              description:
                "Name of the service or job to associate with storage",
              displayName: "workload",
              args: { name: "workload" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for init",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for storage",
          displayName: "help",
        },
      ],
    },
    {
      name: "secret",
      description:
        "Commands for secrets. Secrets are sensitive information that you need in your application",
      subcommands: [
        {
          name: "init",
          description: "Create or update secrets in SSM Parameter Store",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--cli-input-yaml",
              description:
                "Optional. A YAML file in which the secret values are specified. Mutually exclusive with the -n ,--name and --values flags",
              displayName: "cli-input-yaml",
              args: { name: "cli-input-yaml" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the secret. Mutually exclusive with the --cli-input-yaml flag",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--overwrite",
              description: "Optional. Whether to overwrite an existing secret",
              displayName: "overwrite",
            },
            {
              name: "--values",
              description:
                "Values of the secret in each environment. Specified as <environment>=<value> separated by commas. Mutually exclusive with the --cli-input-yaml flag",
              displayName: "values",
              args: { name: "values" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for init",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for secret",
          displayName: "help",
        },
      ],
    },
    {
      name: "version",
      description: "Print the version number",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for version",
          displayName: "help",
        },
      ],
    },
    {
      name: "completion",
      description: "Output shell completion code",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for completion",
          displayName: "help",
        },
      ],
    },
    {
      name: "pipeline",
      description:
        "Commands for pipelines. Continuous delivery pipelines to release services",
      subcommands: [
        {
          name: "init",
          description: "Creates a pipeline for the services in your workspace",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: ["--environments", "-e"],
              description: "Environments to add to the pipeline",
              displayName: "environments",
              args: { name: "environments" },
            },
            {
              name: ["--git-branch", "-b"],
              description: "Branch used to trigger your pipeline",
              displayName: "git-branch",
              args: { name: "git-branch" },
            },
            {
              name: ["--github-access-token", "-t"],
              description: "GitHub personal access token for your repository",
              displayName: "github-access-token",
              args: { name: "github-access-token" },
            },
            {
              name: "--github-url",
              description:
                "(Deprecated.) Use --url instead. Repository URL to trigger your pipeline",
              displayName: "github-url",
              args: { name: "github-url" },
            },
            {
              name: ["--url", "-u"],
              description:
                "The repository URL to trigger your pipeline. Supported providers are: GitHub, CodeCommit, Bitbucket",
              displayName: "url",
              args: { name: "url" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for init",
              displayName: "help",
            },
          ],
        },
        {
          name: "update",
          description: "Deploys a pipeline for the services in your workspace",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--yes",
              description: "Skips confirmation prompt",
              displayName: "yes",
            },
            {
              name: ["--help", "-h"],
              description: "Help for update",
              displayName: "help",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes the pipeline associated with your workspace",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--delete-secret",
              description:
                "Deletes AWS Secrets Manager secret associated with a pipeline source repository",
              displayName: "delete-secret",
            },
            {
              name: "--yes",
              description: "Skips confirmation prompt",
              displayName: "yes",
            },
            {
              name: ["--help", "-h"],
              description: "Help for delete",
              displayName: "help",
            },
          ],
        },
        {
          name: "show",
          description:
            "Shows info about a deployed pipeline for an application",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--json",
              description: "Optional. Outputs in JSON format",
              displayName: "json",
            },
            {
              name: ["--name", "-n"],
              description: "Name of the pipeline",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: "--resources",
              description: "Optional. Show the resources in your pipeline",
              displayName: "resources",
            },
            {
              name: ["--help", "-h"],
              description: "Help for show",
              displayName: "help",
            },
          ],
        },
        {
          name: "status",
          description: "Shows the status of a pipeline",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--json",
              description: "Optional. Outputs in JSON format",
              displayName: "json",
            },
            {
              name: ["--name", "-n"],
              description: "Name of the pipeline",
              displayName: "name",
              args: { name: "name" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for status",
              displayName: "help",
            },
          ],
        },
        {
          name: "ls",
          description: "Lists all the deployed pipelines in an application",
          options: [
            {
              name: ["--app", "-a"],
              description: "Name of the application",
              displayName: "app",
              args: { name: "app" },
            },
            {
              name: "--json",
              description: "Optional. Outputs in JSON format",
              displayName: "json",
            },
            {
              name: ["--help", "-h"],
              description: "Help for ls",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for pipeline",
          displayName: "help",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy a Copilot job or service",
      options: [
        {
          name: ["--app", "-a"],
          description: "Name of the application",
          displayName: "app",
          args: { name: "app" },
        },
        {
          name: ["--env", "-e"],
          description: "Name of the environment",
          displayName: "env",
          args: { name: "env" },
        },
        {
          name: "--force",
          description:
            "Optional. Force a new service deployment using the existing image",
          displayName: "force",
        },
        {
          name: ["--name", "-n"],
          description: "Name of the service or job",
          displayName: "name",
          args: { name: "name" },
        },
        {
          name: "--resource-tags",
          description:
            "Optional. Labels with a key and value separated by commas. Allows you to categorize resources",
          displayName: "resource-tags",
          args: { name: "resource-tags" },
        },
        {
          name: "--tag",
          description: "Optional. The container image tag",
          displayName: "tag",
          args: { name: "tag" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for deploy",
          displayName: "help",
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "init",
          description: "Create a new ECS or App Runner application",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for init",
              displayName: "help",
            },
          ],
        },
        {
          name: "docs",
          description: "Open the copilot docs",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for docs",
              displayName: "help",
            },
          ],
        },
        {
          name: "app",
          description:
            "Commands for applications. Applications are a collection of services and environments",
          subcommands: [
            {
              name: "init",
              description: "Creates a new empty application",
              options: [
                {
                  name: "--domain",
                  description: "Optional. Your existing custom domain name",
                  displayName: "domain",
                  args: { name: "domain" },
                },
                {
                  name: "--resource-tags",
                  description:
                    "Optional. Labels with a key and value separated by commas. Allows you to categorize resources",
                  displayName: "resource-tags",
                  args: { name: "resource-tags" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for init",
                  displayName: "help",
                },
              ],
            },
            {
              name: "ls",
              description: "Lists all the applications in your account",
              options: [
                {
                  name: ["--help", "-h"],
                  description: "Help for ls",
                  displayName: "help",
                },
              ],
            },
            {
              name: "show",
              description: "Shows info about an application",
              options: [
                {
                  name: "--json",
                  description: "Optional. Outputs in JSON format",
                  displayName: "json",
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the application",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for show",
                  displayName: "help",
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete all resources associated with the application",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the application",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--yes",
                  description: "Skips confirmation prompt",
                  displayName: "yes",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for delete",
                  displayName: "help",
                },
              ],
            },
            {
              name: "upgrade",
              description:
                "Upgrades the template of an application to the latest version",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the application",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for upgrade",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for app",
              displayName: "help",
            },
          ],
        },
        {
          name: "env",
          description:
            "Commands for environments. Environments are deployment stages shared between services",
          subcommands: [
            {
              name: "init",
              description: "Creates a new environment in your application",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--aws-access-key-id",
                  description: "Optional. An AWS access key",
                  displayName: "aws-access-key-id",
                  args: { name: "aws-access-key-id" },
                },
                {
                  name: "--aws-secret-access-key",
                  description: "Optional. An AWS secret access key",
                  displayName: "aws-secret-access-key",
                  args: { name: "aws-secret-access-key" },
                },
                {
                  name: "--aws-session-token",
                  description:
                    "Optional. An AWS session token for temporary credentials",
                  displayName: "aws-session-token",
                  args: { name: "aws-session-token" },
                },
                {
                  name: "--default-config",
                  description:
                    "Optional. Skip prompting and use default environment configuration",
                  displayName: "default-config",
                },
                {
                  name: "--import-private-subnets",
                  description: "Optional. Use existing private subnet IDs",
                  displayName: "import-private-subnets",
                  args: { name: "import-private-subnets" },
                },
                {
                  name: "--import-public-subnets",
                  description: "Optional. Use existing public subnet IDs",
                  displayName: "import-public-subnets",
                  args: { name: "import-public-subnets" },
                },
                {
                  name: "--import-vpc-id",
                  description: "Optional. Use an existing VPC ID",
                  displayName: "import-vpc-id",
                  args: { name: "import-vpc-id" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the environment",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--override-az-names",
                  description:
                    "Optional. Availability Zone names. (default 2 random AZs)",
                  displayName: "override-az-names",
                  args: { name: "override-az-names" },
                },
                {
                  name: "--override-private-cidrs",
                  description:
                    "Optional. CIDR to use for private subnets. (default 10.0.2.0/24,10.0.3.0/24)",
                  displayName: "override-private-cidrs",
                  args: { name: "override-private-cidrs" },
                },
                {
                  name: "--override-public-cidrs",
                  description:
                    "Optional. CIDR to use for public subnets.  (default 10.0.0.0/24,10.0.1.0/24)",
                  displayName: "override-public-cidrs",
                  args: { name: "override-public-cidrs" },
                },
                {
                  name: "--override-vpc-cidr",
                  description:
                    "Optional. Global CIDR to use for VPC. (default 10.0.0.0/16)",
                  displayName: "override-vpc-cidr",
                  args: { name: "override-vpc-cidr", default: "<nil>" },
                },
                {
                  name: "--prod",
                  description:
                    "If the environment contains production services",
                  displayName: "prod",
                },
                {
                  name: "--profile",
                  description: "Name of the profile",
                  displayName: "profile",
                  args: { name: "profile" },
                },
                {
                  name: "--region",
                  description:
                    "Optional. An AWS region where the environment will be created",
                  displayName: "region",
                  args: { name: "region" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for init",
                  displayName: "help",
                },
              ],
            },
            {
              name: "ls",
              description: "Lists all the environments in an application",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--json",
                  description: "Optional. Outputs in JSON format",
                  displayName: "json",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for ls",
                  displayName: "help",
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes an environment from your application",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the environment",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--yes",
                  description: "Skips confirmation prompt",
                  displayName: "yes",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for delete",
                  displayName: "help",
                },
              ],
            },
            {
              name: "show",
              description: "Shows info about a deployed environment",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--json",
                  description: "Optional. Outputs in JSON format",
                  displayName: "json",
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the environment",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--resources",
                  description:
                    "Optional. Show the resources in your environment",
                  displayName: "resources",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for show",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for env",
              displayName: "help",
            },
          ],
        },
        {
          name: "svc",
          description:
            "Commands for services. Services are long-running ECS or App Runner services",
          subcommands: [
            {
              name: "init",
              description: "Creates a new service in an application",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--dockerfile", "-d"],
                  description:
                    "Path to the Dockerfile. Mutually exclusive with -i, --image",
                  displayName: "dockerfile",
                  args: { name: "dockerfile" },
                },
                {
                  name: ["--image", "-i"],
                  description:
                    "The location of an existing Docker image. Mutually exclusive with -d, --dockerfile",
                  displayName: "image",
                  args: { name: "image" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the service",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--no-subscribe",
                  description:
                    "Optional. Turn off selection for adding subscriptions for worker services",
                  displayName: "no-subscribe",
                },
                {
                  name: "--port",
                  description: "The port on which your service listens",
                  displayName: "port",
                  args: { name: "port", default: "0" },
                },
                {
                  name: "--subscribe-topics",
                  description:
                    "Optional. SNS Topics to subscribe to from other services in your application. Must be of format '<svcName>:<topicName>'",
                  isRepeatable: true,
                  displayName: "subscribe-topics",
                  args: { name: "subscribe-topics" },
                },
                {
                  name: ["--svc-type", "-t"],
                  description:
                    'Type of service to create. Must be one of: "Request-Driven Web Service", "Load Balanced Web Service", "Backend Service", "Worker Service"',
                  displayName: "svc-type",
                  args: { name: "svc-type" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for init",
                  displayName: "help",
                },
              ],
            },
            {
              name: "ls",
              description: "Lists all the services in an application",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--json",
                  description: "Optional. Outputs in JSON format",
                  displayName: "json",
                },
                {
                  name: "--local",
                  description: "Only show services in the workspace",
                  displayName: "local",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for ls",
                  displayName: "help",
                },
              ],
            },
            {
              name: "package",
              description:
                "Prints the AWS CloudFormation template of a service",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--env", "-e"],
                  description: "Name of the environment",
                  displayName: "env",
                  args: { name: "env" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the service",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--output-dir",
                  description:
                    "Optional. Writes the stack template and template configuration to a directory",
                  displayName: "output-dir",
                  args: { name: "output-dir" },
                },
                {
                  name: "--tag",
                  description: "Optional. The container image tag",
                  displayName: "tag",
                  args: { name: "tag" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for package",
                  displayName: "help",
                },
              ],
            },
            {
              name: "deploy",
              description: "Deploys a service to an environment",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--env", "-e"],
                  description: "Name of the environment",
                  displayName: "env",
                  args: { name: "env" },
                },
                {
                  name: "--force",
                  description:
                    "Optional. Force a new service deployment using the existing image",
                  displayName: "force",
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the service",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--resource-tags",
                  description:
                    "Optional. Labels with a key and value separated by commas. Allows you to categorize resources",
                  displayName: "resource-tags",
                  args: { name: "resource-tags" },
                },
                {
                  name: "--tag",
                  description: "Optional. The container image tag",
                  displayName: "tag",
                  args: { name: "tag" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for deploy",
                  displayName: "help",
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes a service from an application",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--env", "-e"],
                  description: "Name of the environment",
                  displayName: "env",
                  args: { name: "env" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the service",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--yes",
                  description: "Skips confirmation prompt",
                  displayName: "yes",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for delete",
                  displayName: "help",
                },
              ],
            },
            {
              name: "show",
              description:
                "Shows info about a deployed service per environment",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--json",
                  description: "Optional. Outputs in JSON format",
                  displayName: "json",
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the service",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--resources",
                  description: "Optional. Show the resources in your service",
                  displayName: "resources",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for show",
                  displayName: "help",
                },
              ],
            },
            {
              name: "status",
              description: "Shows status of a deployed service",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--env", "-e"],
                  description: "Name of the environment",
                  displayName: "env",
                  args: { name: "env" },
                },
                {
                  name: "--json",
                  description: "Optional. Outputs in JSON format",
                  displayName: "json",
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the service",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for status",
                  displayName: "help",
                },
              ],
            },
            {
              name: "logs",
              description: "Displays logs of a deployed service",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--end-time",
                  description:
                    "Optional. Only return logs before a specific date (RFC3339). Defaults to all logs. Only one of end-time / follow may be used",
                  displayName: "end-time",
                  args: { name: "end-time" },
                },
                {
                  name: ["--env", "-e"],
                  description: "Name of the environment",
                  displayName: "env",
                  args: { name: "env" },
                },
                {
                  name: "--follow",
                  description:
                    "Optional. Specifies if the logs should be streamed",
                  displayName: "follow",
                },
                {
                  name: "--json",
                  description: "Optional. Outputs in JSON format",
                  displayName: "json",
                },
                {
                  name: "--limit",
                  description:
                    "Optional. The maximum number of log events returned. Default is 10 unless any time filtering flags are set",
                  displayName: "limit",
                  args: { name: "limit", default: "0" },
                },
                {
                  name: "--log-group",
                  description:
                    "Optional. Only return logs from specific log group",
                  displayName: "log-group",
                  args: { name: "log-group" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the service",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--since",
                  description:
                    "Optional. Only return logs newer than a relative duration like 5s, 2m, or 3h. Defaults to all logs. Only one of start-time / since may be used",
                  displayName: "since",
                  args: { name: "since", default: "0s" },
                },
                {
                  name: "--start-time",
                  description:
                    "Optional. Only return logs after a specific date (RFC3339). Defaults to all logs. Only one of start-time / since may be used",
                  displayName: "start-time",
                  args: { name: "start-time" },
                },
                {
                  name: "--tasks",
                  description:
                    "Optional. Only return logs from specific task IDs",
                  displayName: "tasks",
                  args: { name: "tasks" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for logs",
                  displayName: "help",
                },
              ],
            },
            {
              name: "exec",
              description:
                "Execute a command in a running container part of a service",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--command", "-c"],
                  description:
                    "Optional. The command that is passed to a running container",
                  displayName: "command",
                  args: { name: "command", default: "/bin/sh" },
                },
                {
                  name: "--container",
                  description:
                    "Optional. The specific container you want to exec in. By default the first essential container will be used",
                  displayName: "container",
                  args: { name: "container" },
                },
                {
                  name: ["--env", "-e"],
                  description: "Name of the environment",
                  displayName: "env",
                  args: { name: "env" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the service, job, or task group",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--task-id",
                  description: "Optional. ID of the task you want to exec in",
                  displayName: "task-id",
                  args: { name: "task-id" },
                },
                {
                  name: "--yes",
                  description:
                    "Optional. Whether to update the Session Manager Plugin",
                  displayName: "yes",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for exec",
                  displayName: "help",
                },
              ],
            },
            {
              name: "pause",
              description: "Pause running App Runner service",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--env", "-e"],
                  description: "Name of the environment",
                  displayName: "env",
                  args: { name: "env" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the service",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--yes",
                  description: "Skips confirmation prompt",
                  displayName: "yes",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for pause",
                  displayName: "help",
                },
              ],
            },
            {
              name: "resume",
              description: "Resumes a paused service",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--env", "-e"],
                  description: "Name of the environment",
                  displayName: "env",
                  args: { name: "env" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the service",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for resume",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for svc",
              displayName: "help",
            },
          ],
        },
        {
          name: "job",
          description:
            "Commands for jobs. Jobs are tasks that are triggered by events",
          subcommands: [
            {
              name: "init",
              description: "Creates a new scheduled job in an application",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--dockerfile", "-d"],
                  description:
                    "Path to the Dockerfile. Mutually exclusive with -i, --image",
                  displayName: "dockerfile",
                  args: { name: "dockerfile" },
                },
                {
                  name: ["--image", "-i"],
                  description:
                    "The location of an existing Docker image. Mutually exclusive with -d, --dockerfile",
                  displayName: "image",
                  args: { name: "image" },
                },
                {
                  name: ["--job-type", "-t"],
                  description:
                    'Type of job to create. Must be one of: "Scheduled Job"',
                  displayName: "job-type",
                  args: { name: "job-type" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the job",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--retries",
                  description:
                    "Optional. The number of times to try restarting the job on a failure",
                  displayName: "retries",
                  args: { name: "retries", default: "0" },
                },
                {
                  name: ["--schedule", "-s"],
                  description:
                    'The schedule on which to run this job.  Accepts cron expressions of the format (M H DoM M DoW) and schedule definition strings.  For example: "0 * * * *", "@daily", "@weekly", "@every 1h30m". AWS Schedule Expressions of the form "rate(10 minutes)" or "cron(0 12 L * ? 2021)" are also accepted',
                  displayName: "schedule",
                  args: { name: "schedule" },
                },
                {
                  name: "--timeout",
                  description:
                    'Optional. The total execution time for the task, including retries. Accepts valid Go duration strings. For example: "2h", "1h30m", "900s"',
                  displayName: "timeout",
                  args: { name: "timeout" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for init",
                  displayName: "help",
                },
              ],
            },
            {
              name: "ls",
              description: "Lists all the jobs in an application",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--json",
                  description: "Optional. Outputs in JSON format",
                  displayName: "json",
                },
                {
                  name: "--local",
                  description: "Only show jobs in the workspace",
                  displayName: "local",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for ls",
                  displayName: "help",
                },
              ],
            },
            {
              name: "package",
              description: "Prints the AWS CloudFormation template of a job",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--env", "-e"],
                  description: "Name of the environment",
                  displayName: "env",
                  args: { name: "env" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the job",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--output-dir",
                  description:
                    "Optional. Writes the stack template and template configuration to a directory",
                  displayName: "output-dir",
                  args: { name: "output-dir" },
                },
                {
                  name: "--tag",
                  description: "Optional. The container image tag",
                  displayName: "tag",
                  args: { name: "tag" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for package",
                  displayName: "help",
                },
              ],
            },
            {
              name: "deploy",
              description: "Deploys a job to an environment",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--env", "-e"],
                  description: "Name of the environment",
                  displayName: "env",
                  args: { name: "env" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the job",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--resource-tags",
                  description:
                    "Optional. Labels with a key and value separated by commas. Allows you to categorize resources",
                  displayName: "resource-tags",
                  args: { name: "resource-tags" },
                },
                {
                  name: "--tag",
                  description: "Optional. The container image tag",
                  displayName: "tag",
                  args: { name: "tag" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for deploy",
                  displayName: "help",
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes a job from an application",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--env", "-e"],
                  description: "Name of the environment",
                  displayName: "env",
                  args: { name: "env" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the job",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--yes",
                  description: "Skips confirmation prompt",
                  displayName: "yes",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for delete",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for job",
              displayName: "help",
            },
          ],
        },
        {
          name: "task",
          description:
            "Commands for tasks. One-off Amazon ECS tasks that terminate once their work is done",
          subcommands: [
            {
              name: "run",
              description: "Run a one-off task on Amazon ECS",
              options: [
                {
                  name: "--app",
                  description:
                    "Optional. Name of the application. Cannot be specified with 'default', 'subnets' or 'security-groups'",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--build-context",
                  description:
                    "Path to the Docker build context. Mutually exclusive with -i, --image",
                  displayName: "build-context",
                  args: { name: "build-context" },
                },
                {
                  name: "--cluster",
                  description:
                    "Optional. The short name or full ARN of the cluster to run the task in.  Cannot be specified with 'app', 'env' or 'default'",
                  displayName: "cluster",
                  args: { name: "cluster" },
                },
                {
                  name: "--command",
                  description:
                    'Optional. The command that is passed to "docker run" to override the default command',
                  displayName: "command",
                  args: { name: "command" },
                },
                {
                  name: "--count",
                  description: "Optional. The number of tasks to set up",
                  displayName: "count",
                  args: { name: "count", default: "1" },
                },
                {
                  name: "--cpu",
                  description:
                    "Optional. The number of CPU units to reserve for each task",
                  displayName: "cpu",
                  args: { name: "cpu", default: "256" },
                },
                {
                  name: "--default",
                  description:
                    "Optional. Run tasks in default cluster and default subnets.  Cannot be specified with 'app', 'env' or 'subnets'",
                  displayName: "default",
                },
                {
                  name: "--dockerfile",
                  description:
                    "Path to the Dockerfile. Mutually exclusive with -i, --image",
                  displayName: "dockerfile",
                  args: { name: "dockerfile", default: "Dockerfile" },
                },
                {
                  name: "--entrypoint",
                  description:
                    'Optional. The entrypoint that is passed to "docker run" to override the default entrypoint',
                  displayName: "entrypoint",
                  args: { name: "entrypoint" },
                },
                {
                  name: "--env",
                  description:
                    "Optional. Name of the environment. Cannot be specified with 'default', 'subnets' or 'security-groups'",
                  displayName: "env",
                  args: { name: "env" },
                },
                {
                  name: "--env-vars",
                  description:
                    "Optional. Environment variables specified by key=value separated by commas",
                  displayName: "env-vars",
                  args: { name: "env-vars" },
                },
                {
                  name: "--execution-role",
                  description:
                    "Optional. The ARN of the role that grants the container agent permission to make AWS API calls",
                  displayName: "execution-role",
                  args: { name: "execution-role" },
                },
                {
                  name: "--follow",
                  description:
                    "Optional. Specifies if the logs should be streamed",
                  displayName: "follow",
                },
                {
                  name: "--generate-cmd",
                  description:
                    "Optional. Generate a command with a pre-filled value for each flag. To use it for an ECS service, specify --generate-cmd <cluster name>/<service name>. Alternatively, if the service or job is created with Copilot, specify --generate-cmd <application>/<environment>/<service or job name>. Cannot be specified with any other flags",
                  displayName: "generate-cmd",
                  args: { name: "generate-cmd" },
                },
                {
                  name: ["--image", "-i"],
                  description:
                    "The location of an existing Docker image. Mutually exclusive with -d, --dockerfile",
                  displayName: "image",
                  args: { name: "image" },
                },
                {
                  name: "--memory",
                  description:
                    "Optional. The amount of memory to reserve in MiB for each task",
                  displayName: "memory",
                  args: { name: "memory", default: "512" },
                },
                {
                  name: "--platform-arch",
                  description:
                    "Optional. Architecture of the task. Must be specified along with 'platform-os'",
                  displayName: "platform-arch",
                  args: { name: "platform-arch" },
                },
                {
                  name: "--platform-os",
                  description:
                    "Optional. Operating system of the task. Must be specified along with 'platform-arch'",
                  displayName: "platform-os",
                  args: { name: "platform-os" },
                },
                {
                  name: "--resource-tags",
                  description:
                    "Optional. Labels with a key and value separated by commas. Allows you to categorize resources",
                  displayName: "resource-tags",
                  args: { name: "resource-tags" },
                },
                {
                  name: "--secrets",
                  description:
                    "Optional. Secrets to inject into the container. Specified by key=value separated by commas",
                  displayName: "secrets",
                  args: { name: "secrets" },
                },
                {
                  name: "--security-groups",
                  description:
                    "Optional. The security group IDs for the task to use. Can be specified multiple times. Cannot be specified with 'app' or 'env'",
                  displayName: "security-groups",
                  args: { name: "security-groups" },
                },
                {
                  name: "--subnets",
                  description:
                    "Optional. The subnet IDs for the task to use. Can be specified multiple times. Cannot be specified with 'app', 'env' or 'default'",
                  displayName: "subnets",
                  args: { name: "subnets" },
                },
                {
                  name: "--tag",
                  description:
                    'Optional. The container image tag in addition to "latest"',
                  displayName: "tag",
                  args: { name: "tag" },
                },
                {
                  name: ["--task-group-name", "-n"],
                  description:
                    "Optional. The group name of the task.  Tasks with the same group name share the same set of resources.  (default directory name)",
                  displayName: "task-group-name",
                  args: { name: "task-group-name" },
                },
                {
                  name: "--task-role",
                  description:
                    "Optional. The ARN of the role for the task to use",
                  displayName: "task-role",
                  args: { name: "task-role" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for run",
                  displayName: "help",
                },
              ],
            },
            {
              name: "exec",
              description:
                "Execute a command in a running container part of a task",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--command", "-c"],
                  description:
                    "Optional. The command that is passed to a running container",
                  displayName: "command",
                  args: { name: "command", default: "/bin/sh" },
                },
                {
                  name: "--default",
                  description:
                    "Optional. Execute commands in running tasks in default cluster and default subnets.  Cannot be specified with 'app' or 'env'",
                  displayName: "default",
                },
                {
                  name: ["--env", "-e"],
                  description: "Name of the environment",
                  displayName: "env",
                  args: { name: "env" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the service, job, or task group",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--task-id",
                  description: "Optional. ID of the task you want to exec in",
                  displayName: "task-id",
                  args: { name: "task-id" },
                },
                {
                  name: "--yes",
                  description:
                    "Optional. Whether to update the Session Manager Plugin",
                  displayName: "yes",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for exec",
                  displayName: "help",
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes a one-off task from an application or default cluster",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--default",
                  description:
                    "Optional. Delete a task which was launched in the default cluster and subnets. Cannot be specified with 'app' or 'env'",
                  displayName: "default",
                },
                {
                  name: ["--env", "-e"],
                  description: "Name of the environment",
                  displayName: "env",
                  args: { name: "env" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the service",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--yes",
                  description: "Skips confirmation prompt",
                  displayName: "yes",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for delete",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for task",
              displayName: "help",
            },
          ],
        },
        {
          name: "storage",
          description: "Commands for working with storage and databases",
          subcommands: [
            {
              name: "init",
              description:
                "Creates a new AWS CloudFormation template for a storage resource",
              options: [
                {
                  name: "--engine",
                  description:
                    'The database engine used in the cluster. Must be either "MySQL" or "PostgreSQL"',
                  displayName: "engine",
                  args: { name: "engine" },
                },
                {
                  name: "--initial-db",
                  description: "The initial database to create in the cluster",
                  displayName: "initial-db",
                  args: { name: "initial-db" },
                },
                {
                  name: "--lsi",
                  description:
                    "Optional. Attribute to use as an alternate sort key. May be specified up to 5 times. Must be of the format '<keyName>:<dataType>'",
                  isRepeatable: true,
                  displayName: "lsi",
                  args: { name: "lsi" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the storage resource to create",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--no-lsi",
                  description:
                    "Optional. Don't ask about configuring alternate sort keys",
                  displayName: "no-lsi",
                },
                {
                  name: "--no-sort",
                  description: "Optional. Skip configuring sort keys",
                  displayName: "no-sort",
                },
                {
                  name: "--parameter-group",
                  description:
                    "Optional. The name of the parameter group to associate with the cluster",
                  displayName: "parameter-group",
                  args: { name: "parameter-group" },
                },
                {
                  name: "--partition-key",
                  description:
                    "Partition key for the DDB table. Must be of the format '<keyName>:<dataType>'",
                  displayName: "partition-key",
                  args: { name: "partition-key" },
                },
                {
                  name: "--sort-key",
                  description:
                    "Optional. Sort key for the DDB table. Must be of the format '<keyName>:<dataType>'",
                  displayName: "sort-key",
                  args: { name: "sort-key" },
                },
                {
                  name: ["--storage-type", "-t"],
                  description:
                    'Type of storage to add. Must be one of: "DynamoDB", "S3", "Aurora"',
                  displayName: "storage-type",
                  args: { name: "storage-type" },
                },
                {
                  name: ["--workload", "-w"],
                  description:
                    "Name of the service or job to associate with storage",
                  displayName: "workload",
                  args: { name: "workload" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for init",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for storage",
              displayName: "help",
            },
          ],
        },
        {
          name: "secret",
          description:
            "Commands for secrets. Secrets are sensitive information that you need in your application",
          subcommands: [
            {
              name: "init",
              description: "Create or update secrets in SSM Parameter Store",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--cli-input-yaml",
                  description:
                    "Optional. A YAML file in which the secret values are specified. Mutually exclusive with the -n ,--name and --values flags",
                  displayName: "cli-input-yaml",
                  args: { name: "cli-input-yaml" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the secret. Mutually exclusive with the --cli-input-yaml flag",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--overwrite",
                  description:
                    "Optional. Whether to overwrite an existing secret",
                  displayName: "overwrite",
                },
                {
                  name: "--values",
                  description:
                    "Values of the secret in each environment. Specified as <environment>=<value> separated by commas. Mutually exclusive with the --cli-input-yaml flag",
                  displayName: "values",
                  args: { name: "values" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for init",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for secret",
              displayName: "help",
            },
          ],
        },
        {
          name: "version",
          description: "Print the version number",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "completion",
          description: "Output shell completion code",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for completion",
              displayName: "help",
            },
          ],
        },
        {
          name: "pipeline",
          description:
            "Commands for pipelines. Continuous delivery pipelines to release services",
          subcommands: [
            {
              name: "init",
              description:
                "Creates a pipeline for the services in your workspace",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: ["--environments", "-e"],
                  description: "Environments to add to the pipeline",
                  displayName: "environments",
                  args: { name: "environments" },
                },
                {
                  name: ["--git-branch", "-b"],
                  description: "Branch used to trigger your pipeline",
                  displayName: "git-branch",
                  args: { name: "git-branch" },
                },
                {
                  name: ["--github-access-token", "-t"],
                  description:
                    "GitHub personal access token for your repository",
                  displayName: "github-access-token",
                  args: { name: "github-access-token" },
                },
                {
                  name: "--github-url",
                  description:
                    "(Deprecated.) Use --url instead. Repository URL to trigger your pipeline",
                  displayName: "github-url",
                  args: { name: "github-url" },
                },
                {
                  name: ["--url", "-u"],
                  description:
                    "The repository URL to trigger your pipeline. Supported providers are: GitHub, CodeCommit, Bitbucket",
                  displayName: "url",
                  args: { name: "url" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for init",
                  displayName: "help",
                },
              ],
            },
            {
              name: "update",
              description:
                "Deploys a pipeline for the services in your workspace",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--yes",
                  description: "Skips confirmation prompt",
                  displayName: "yes",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for update",
                  displayName: "help",
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes the pipeline associated with your workspace",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--delete-secret",
                  description:
                    "Deletes AWS Secrets Manager secret associated with a pipeline source repository",
                  displayName: "delete-secret",
                },
                {
                  name: "--yes",
                  description: "Skips confirmation prompt",
                  displayName: "yes",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for delete",
                  displayName: "help",
                },
              ],
            },
            {
              name: "show",
              description:
                "Shows info about a deployed pipeline for an application",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--json",
                  description: "Optional. Outputs in JSON format",
                  displayName: "json",
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the pipeline",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: "--resources",
                  description: "Optional. Show the resources in your pipeline",
                  displayName: "resources",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for show",
                  displayName: "help",
                },
              ],
            },
            {
              name: "status",
              description: "Shows the status of a pipeline",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--json",
                  description: "Optional. Outputs in JSON format",
                  displayName: "json",
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the pipeline",
                  displayName: "name",
                  args: { name: "name" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for status",
                  displayName: "help",
                },
              ],
            },
            {
              name: "ls",
              description: "Lists all the deployed pipelines in an application",
              options: [
                {
                  name: ["--app", "-a"],
                  description: "Name of the application",
                  displayName: "app",
                  args: { name: "app" },
                },
                {
                  name: "--json",
                  description: "Optional. Outputs in JSON format",
                  displayName: "json",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for ls",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for pipeline",
              displayName: "help",
            },
          ],
        },
        {
          name: "deploy",
          description: "Deploy a Copilot job or service",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for deploy",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
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
      name: ["--help", "-h"],
      description: "Help for copilot",
      displayName: "help",
    },
  ],
};
export default completionSpec;
