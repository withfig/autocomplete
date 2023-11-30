import { filepaths } from "@fig/autocomplete-generators";

const serverList: Fig.Generator = {
  script: ["rancher", "server", "ls"],
  postProcess: function (out) {
    const lines = out.split("\n");
    const serversList = [];
    for (let i = 1; i < lines.length; i++) {
      const activeStatus = lines[i].match(/\S+/g)[0];
      // Remove current server from the list
      if (activeStatus != "*") {
        const server = lines[i].match(/\S+/g)[1];
        const serverUrl = lines[i].match(/\S+/g)[2];
        serversList.push({
          name: server,
          description: serverUrl,
          icon: "https://rancher.com/docs/img/favicon.png",
        });
      }
    }
    if (serversList.length === 0) {
      serversList.push({
        name: "No other servers found to swtich to",
        description: "",
        icon: "https://rancher.com/docs/img/favicon.png",
      });
    }
    return serversList;
  },
};

const generalOptions: Fig.Option[] = [
  {
    name: ["--format", "-o"],
    description: "Output format: 'json', 'yaml' or custom format",
    args: {
      name: "format",
      suggestions: ["json", "yaml"],
    },
  },
  {
    name: ["--quiet", "-q"],
    description: "Only display IDs or suppress help text",
  },
  {
    name: ["--help", "-h"],
    description: "Show help",
  },
];

const completionSpec: Fig.Spec = {
  name: "rancher",
  description:
    "The Rancher CLI (Command Line Interface) is a unified tool that you can use to interact with Rancher",
  subcommands: [
    {
      name: ["apps", "app"],
      description:
        "Operations with apps. Uses helm. Flags are prepended with 'helm' can also be accurately described by helm documentation",
      subcommands: [
        {
          name: "ls",
          description: "List all apps in the current Rancher server",
        },
        {
          name: "delete",
          description: "Delete an app",
          args: {
            name: "APP_NAME/APP_ID",
            description: "The name of the app to delete",
          },
        },
        {
          name: "install",
          description: "Install an app template",
          args: [
            {
              name: "TEMPLATE_NAME/TEMPLATE_PATH",
              description:
                "Install an app template in the current Rancher server",
            },
            {
              name: "APP_NAME",
              description: "The name of the app to install",
            },
          ],
          options: [
            {
              name: ["--answers", "-a"],
              description:
                "Path to an answers file, the format of the file is a map with key:value. This supports JSON and YAML",
              args: {
                name: "answers-file-path",
                generators: filepaths({ extensions: ["json", "yaml"] }),
              },
            },
            {
              name: ["--values", "-v"],
              description: "Path to a helm values file",
              args: {
                name: "values-file-path",
                template: "filepaths",
              },
            },
            {
              name: ["--namespace", "-n"],
              description: "Namespace to install the app into",
              args: {
                name: "namespace",
              },
            },
            {
              name: "--set",
              description:
                "Set answers for the template, can be used multiple times. Example: --set foo=bar",
              args: {
                name: "key=value",
              },
              isRepeatable: true,
            },
            {
              name: "--set-string",
              description:
                "Set string answers for the template (Skips Helm's type conversion), can be used multiple times. Example: --set-string foo=bar",
              args: {
                name: "key=value",
              },
              isRepeatable: true,
            },
            {
              name: "--version",
              description: "Version of the template to use",
              args: {
                name: "version",
              },
            },
            {
              name: "--no-prompt",
              description:
                "Suppress asking questions and use the default values when required answers are not provided",
            },
            {
              name: "--helm-timeout",
              description:
                "Amount of time for helm to wait for k8s commands (default is 300 secs). Example: --helm-timeout 600 (default: 300)",
              args: {
                name: "seconds",
              },
            },
            {
              name: "--helm-wait",
              description:
                "Helm will wait for as long as timeout value, for installed resources to be ready (pods, PVCs, deployments, etc.). Example: --helm-wait",
            },
          ],
        },
        {
          name: "rollback",
          description: "Rollback an app to a previous version",
          args: [
            {
              name: "APP_NAME/APP_ID",
              description: "The name/id of the app to rollback",
            },
            {
              name: "REVISION_ID/REVISION_NAME",
              description: "The name/id of the revision to rollback",
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade an existing app to a newer version",
        },
        {
          name: ["list-templates", "lt"],
          description: "List templates available for installation",
        },
        {
          name: ["show-tempate", "st"],
          description: "Show versions available to install for an app template",
        },
        {
          name: ["show-app", "sa"],
          description: "Show an app's available versions and revisions",
        },
        {
          name: "show-notes",
          description: "Show contents of apps notes.txt",
        },
      ],
      options: generalOptions,
    },
    {
      name: "catalog",
      description: "Operations with catalogs",
      subcommands: [
        {
          name: "ls",
          description: "List all catalogs in the current Rancher server",
          options: [
            ...generalOptions,
            {
              name: ["--verbose", "-v"],
            },
          ],
        },
        {
          name: "add",
          description: "Add a catalog",
          args: [
            {
              name: "CATALOG_NAME",
              description: "The name of the catalog to add",
            },
            {
              name: "CATALOG_URL",
              description: "The URL of the catalog to add",
            },
          ],
          options: [
            {
              name: "--branch",
              description: "Branch from the url to use (default: 'master')",
              args: { name: "branch name" },
            },
            {
              name: "--helm-version",
              description:
                "Version of helm the app(s) in your catalog will use for deployment. Use 'v2' for helm 2 or 'v3' for helm 3 (default: 'v2')",
              args: { name: "version" },
            },
          ],
        },
      ],
    },
    {
      name: ["clusters", "cluster"],
      description: "Operations on clusters",
      icon: "https://rancher.com/docs/img/favicon.png",
    },
    {
      name: "context",
      description: "Operations for the context",
    },
    {
      name: "globaldns",
      description: "Operations on global DNS providers and entries",
    },
    {
      name: "inspect",
      description: "View details of resources",
    },
    {
      name: "kubectl",
      description: "Run kubectl commands",
      icon: "fig://icon?type=kubernetes",
    },
    {
      name: ["login", "-l"],
      description: "Login to a Rancher server",
      args: {
        name: "SERVER_URL",
        description: "The server url you want to login to",
      },
      options: [
        {
          name: "--token",
          description:
            "API Bearer Token to authenticate Rancher CLI to your Rancher server",
          args: {
            name: "BEARER_TOKEN",
            description: "The bearer token you want to use",
          },
        },
      ],
    },
    {
      name: ["machines", "machine"],
      description: "Operations on machines",
    },
    {
      name: ["multiclusterapps", "multiclusterapp"],
      description: "Operations with multi-cluster apps",
    },
    {
      name: ["namespaces", "namespace"],
      description: "Operations on namespaces",
    },
    {
      name: ["nodes", "node"],
      description: "Operations on nodes",
    },
    {
      name: ["projects", "project"],
      description: "Operations on projects",
    },
    {
      name: "ps",
      description: "Show workloads in a project",
    },
    {
      name: "server",
      description: "Operations for the server",
      subcommands: [
        {
          name: "current",
          description: "Display the current server",
        },
        {
          name: "delete",
          description: "⚠️ Delete a server from the local config",
          args: {
            name: "SERVER_NAME",
            description: "The name of server you want to delete",
            generators: serverList,
          },
          isDangerous: true,
        },
        {
          name: "ls",
          description: "List all servers",
        },
        {
          name: "switch",
          description: "Switch to a new server",
          args: {
            name: "SERVER_NAME",
            description: "The name of server you want to switch to",
            generators: serverList,
          },
        },
      ],
    },
    {
      name: ["settings", "setting"],
      description: "Show settings for the current server",
      subcommands: [
        {
          name: "ls",
          description: "List settings",
        },
        {
          name: "get",
          description: "Print a setting",
          args: {
            name: "SETTING_NAME",
            description: "The name of setting you want to get",
          },
        },
        {
          name: "set",
          description: "Set the value for a setting",
          args: [
            {
              name: "SETTINGNAME",
              description: "The name of setting you want to set",
            },
            {
              name: "SETTING_VALUE",
              description: "The value of setting you want to set",
            },
          ],
          options: [
            ...generalOptions,
            {
              name: "--default",
              description:
                "Reset the setting back to it's default value. If the default value is (blank) it will be set to that",
            },
          ],
        },
      ],
    },

    {
      name: "ssh",
      description: "SSH into a node",
    },
    {
      name: "up",
      description: "Apply compose config",
    },
    {
      name: "wait",
      description: "Wait for resources cluster, app, project, multiClusterApp",
    },
    {
      name: "token",
      description: "Authenticate and generate new kubeconfig token",
    },
    {
      name: ["help", "h"],
      description: "Shows a list of commands or help for one command",
    },
  ],
  options: [
    {
      name: "--debug",
      description: "Debug logging",
    },
    {
      name: ["--config", "-c"],
      description:
        "Path to rancher config (default: `$home/.rancher`) [$RANCHER_CONFIG_DIR]",
      args: {
        name: "RANCHER_CONFIG_PATH",
        template: "folders",
        description: "The path to the rancher config",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Show help for rancher cli",
    },
    {
      name: ["--version", "-v"],
      description: "Print the version",
    },
  ],
  // Only uncomment if rancher takes an argument
  // args: {}
};
export default completionSpec;
