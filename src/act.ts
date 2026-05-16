const completionSpec: Fig.Spec = {
  name: "act",
  description:
    "Run GitHub actions locally by specifying the event name (e.g. `push`) or an action name directly",
  subcommands: [
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
            },
            {
              name: "fish",
              description: "Generate the autocompletion script for fish",
            },
            {
              name: "powershell",
              description: "Generate the autocompletion script for powershell",
            },
            {
              name: "zsh",
              description: "Generate the autocompletion script for zsh",
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: ["--bind", "-b"],
      description: "Bind working directory to container, rather than copy",
    },
    {
      name: "--bug-report",
      description: "Display system information for bug report",
    },
    {
      name: "--container-cap-add",
      description:
        "Kernel capabilities to add to the workflow containers (e.g. --container-cap-add SYS_PTRACE)",
      isRepeatable: true,
      args: { name: "container-cap-add" },
    },
    {
      name: "--container-cap-drop",
      description:
        "Kernel capabilities to remove from the workflow containers (e.g. --container-cap-drop SYS_PTRACE)",
      isRepeatable: true,
      args: { name: "container-cap-drop" },
    },
    {
      name: "--defaultbranch",
      description: "The name of the main branch",
      args: { name: "defaultbranch" },
    },
    {
      name: "--detect-event",
      description:
        "Use first event type from workflow as event that triggered the workflow",
    },
    {
      name: "--env",
      description:
        "Env to make available to actions with optional value (e.g. --env myenv=foo or --env myenv)",
      isRepeatable: true,
      args: { name: "env" },
    },
    {
      name: ["--eventpath", "-e"],
      description: "Path to event JSON file",
      args: { name: "eventpath" },
    },
    { name: ["--graph", "-g"], description: "Draw workflows" },
    { name: ["--job", "-j"], description: "Run job", args: { name: "job" } },
    { name: ["--list", "-l"], description: "List workflows" },
    {
      name: ["--platform", "-P"],
      description:
        "Custom image to use per platform (e.g. -P ubuntu-18.04=nektos/act-environments-ubuntu:18.04)",
      isRepeatable: true,
      args: { name: "platform" },
    },
    { name: "--privileged", description: "Use privileged mode" },
    {
      name: ["--pull", "-p"],
      description: "Pull docker image(s) even if already present",
    },
    {
      name: "--rebuild",
      description:
        "Rebuild local action docker image(s) even if already present",
    },
    {
      name: "--remote-name",
      description:
        "Git remote name that will be used to retrieve url of git repo",
      args: { name: "remote-name", default: "origin" },
    },
    {
      name: ["--reuse", "-r"],
      description:
        "Don't remove container(s) on successfully completed workflow(s) to maintain state between runs",
    },
    {
      name: "--rm",
      description:
        "Automatically remove container(s)/volume(s) after a workflow(s) failure",
    },
    {
      name: ["--secret", "-s"],
      description:
        "Secret to make available to actions with optional value (e.g. -s mysecret=foo or -s mysecret)",
      isRepeatable: true,
      args: { name: "secret" },
    },
    {
      name: "--use-gitignore",
      description:
        "Controls whether paths specified in .gitignore should be copied into container",
    },
    {
      name: "--userns",
      description: "User namespace to use",
      args: { name: "userns" },
    },
    {
      name: ["--watch", "-w"],
      description:
        "Watch the contents of the local repo and run when files change",
    },
    {
      name: ["--actor", "-a"],
      description: "User that triggered the event",
      isPersistent: true,
      args: { name: "actor", default: "nektos/act" },
    },
    {
      name: "--artifact-server-path",
      description:
        "Defines the path where the artifact server stores uploads and retrieves downloads from. If not specified the artifact server will not start",
      isPersistent: true,
      args: { name: "artifact-server-path" },
    },
    {
      name: "--artifact-server-port",
      description:
        "Defines the port where the artifact server listens (will only bind to localhost)",
      isPersistent: true,
      args: { name: "artifact-server-port", default: "34567" },
    },
    {
      name: "--container-architecture",
      description:
        "Architecture which should be used to run containers, e.g.: linux/amd64. If not specified, will use host default architecture. Requires Docker server API Version 1.41+. Ignored on earlier Docker server platforms",
      isPersistent: true,
      args: { name: "container-architecture" },
    },
    {
      name: "--container-daemon-socket",
      description:
        "Path to Docker daemon socket which will be mounted to containers",
      isPersistent: true,
      args: {
        name: "container-daemon-socket",
        default: "/var/run/docker.sock",
      },
    },
    {
      name: ["--directory", "-C"],
      description: "Working directory",
      isPersistent: true,
      args: { name: "directory", default: ".", template: "folders" },
    },
    {
      name: ["--dryrun", "-n"],
      description: "Dryrun mode",
      isPersistent: true,
    },
    {
      name: "--env-file",
      description: "Environment file to read and use as env in the containers",
      isPersistent: true,
      args: { name: "env-file", default: ".env" },
    },
    {
      name: "--github-instance",
      description:
        "GitHub instance to use. Don't use this if you are not using GitHub Enterprise Server",
      isPersistent: true,
      args: { name: "github-instance", default: "github.com" },
    },
    {
      name: "--insecure-secrets",
      description: "NOT RECOMMENDED! Doesn't hide secrets while printing logs",
      isPersistent: true,
    },
    {
      name: "--json",
      description: "Output logs in json format",
      isPersistent: true,
    },
    {
      name: "--no-recurse",
      description:
        "Flag to disable running workflows from subdirectories of specified path in '--workflows'/'-W' flag",
      isPersistent: true,
    },
    {
      name: "--no-skip-checkout",
      description: "Do not skip actions/checkout",
      isPersistent: true,
    },
    {
      name: ["--quiet", "-q"],
      description: "Disable logging of output from steps",
      isPersistent: true,
    },
    {
      name: "--secret-file",
      description:
        "File with list of secrets to read from (e.g. --secret-file .secrets)",
      isPersistent: true,
      args: { name: "secret-file", default: ".secrets" },
    },
    {
      name: ["--verbose", "-v"],
      description: "Verbose output",
      isPersistent: true,
    },
    {
      name: ["--workflows", "-W"],
      description: "Path to workflow file(s)",
      isPersistent: true,
      args: {
        name: "workflows",
        default: "./.github/workflows/",
        template: ["folders", "filepaths"],
      },
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
