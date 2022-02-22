const serverList: Fig.Generator = {
  script: "rancher server ls",
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

const completionSpec: Fig.Spec = {
  name: "rancher",
  description:
    "The Rancher CLI (Command Line Interface) is a unified tool that you can use to interact with Rancher",
  subcommands: [
    {
      name: "apps",
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
            name: "app name",
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
        },
      ],
      options: [
        {
          name: ["--quiet", "-q"],
          description: "Only display IDs",
        },
      ],
    },
    {
      name: "app",
      description:
        "Operations with apps. Uses helm. Flags are prepended with 'helm' can also be accurately described by helm documentation",
    },
    {
      name: "catalog",
      description: "Operations with catalogs",
    },
    {
      name: "clusters",
      description: "Operations on clusters",
      icon: "https://rancher.com/docs/img/favicon.png",
    },
    {
      name: "cluster",
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
      name: "machines",
      description: "Operations on machines",
    },
    {
      name: "machine",
      description: "Operations on machines",
    },
    {
      name: "multiclusterapps",
      description: "Operations with multi-cluster apps",
    },
    {
      name: "multiclusterapp",
      description: "Operations with multi-cluster apps",
    },
    {
      name: "namespaces",
      description: "Operations on namespaces",
    },
    {
      name: "namespace",
      description: "Operations on namespaces",
    },
    {
      name: "nodes",
      description: "Operations on nodes",
    },
    {
      name: "node",
      description: "Operations on nodes",
    },
    {
      name: "projects",
      description: "Operations on projects",
    },
    {
      name: "project",
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
              isOptional: false,
            },
            {
              name: "SETTING_VALUE",
              description: "The value of setting you want to set",
              isOptional: false,
            },
          ],
          options: [
            {
              name: ["--format", "-o"],
              description: "'json', 'yaml' or custom format",
            },
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
