const completionSpec: Fig.Spec = {
  name: "vela",
  description:
    "A Highly Extensible Platform Engine based on Kubernetes and Open Application Model",
  subcommands: [
    {
      name: "show",
      description:
        "Show the reference doc for component, trait or workflow types",
      args: {
        isVariadic: true,
        template: ["history"],
      },
      options: [
        {
          name: ["-e", "--env"],
          description: "Specify environment name for application",
          args: {
            name: "string",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for show command",
        },
        {
          name: ["-n", "--namespace"],
          description: "Specify the Kubernetes namespace to use",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "env",
      description: "Manage environments for vela applications to run",
      subcommands: [
        {
          name: "delete",
          description: "Delete an environment",
          args: {
            isVariadic: true,
            template: ["history"],
          },
        },
        {
          name: "init",
          description: "Delete an environment",
          args: {
            isVariadic: true,
            template: ["history"],
          },
          options: [
            {
              name: "--namespace",
              description: "Specify K8s namespace for env",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "List all environments for vela applications to run",
          args: {
            isVariadic: true,
            template: ["history"],
          },
        },
        {
          name: ["set", "sw"],
          description:
            "Set an environment as the default one for running vela applications",
          args: {
            isVariadic: true,
            template: ["history"],
          },
        },
      ],
    },
    {
      name: "init",
      description: "Create scaffold for vela application",
      options: [
        {
          name: ["--env", "-e"],
          description: "Specify environment name for application",
          args: {
            name: "string",
          },
        },
        {
          name: ["--namespace", "-n"],
          description: "Specify the Kubernetes namespace to use",
          args: {
            name: "string",
          },
        },
        {
          name: "--render-only",
          description: "Rendering vela.yaml in current dir and do not deploy",
        },
      ],
    },
    {
      name: "up",
      description: "Deploy one application",
      args: {
        isVariadic: true,
        template: ["history"],
      },
      options: [
        {
          name: ["--env", "-e"],
          description: "The environment name for the CLI request",
          args: {
            name: "string",
          },
        },
        {
          name: ["--file", "-f"],
          description:
            "The file path for appfile or application. It could be a remote url",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: ["--namespace", "-n"],
          description: "If present, the namespace scope for this CLI request",
          args: {
            name: "string",
          },
        },
        {
          name: ["--publish-version", "-v"],
          description: "The publish version for deploying application",
          args: {
            name: "string",
          },
        },
        {
          name: ["--revision", "-r"],
          description:
            "The revision to use for deploying the application, if empty, the current application configuration will be used",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "cluster",
      description: "Manage Kubernetes Clusters for Continuous Delivery",
      subcommands: [
        {
          name: "alias",
          description: "Alias a named cluster",
        },
        {
          name: "detach",
          description: "Detach managed cluster",
          options: [
            {
              name: ["--kubeconfig-path", "-p"],
              description:
                "Specify the kubeconfig path of managed cluster. If you use ocm to manage your cluster, you must set the kubeconfig-path",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "join",
          description: "Join managed cluster by kubeconfig",
          options: [
            {
              name: "--create-namespace",
              description:
                'Specifies the namespace need to create in managedCluster (default "vela-system")',
              args: {
                name: "string",
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Specify the cluster name. If empty, it will use the cluster name in config file. Default to be empty",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "labels",
          description: "Manage Kubernetes Cluster Labels",
          subcommands: [
            {
              name: "add",
              description: "Add labels to managed cluster",
            },
            {
              name: "del",
              description: "Delete labels for managed cluster",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List managed clusters",
        },
        {
          name: "probe",
          description: "Health probe managed cluster",
        },
        {
          name: "rename",
          description: "Rename managed cluster",
        },
      ],
    },
    {
      name: "workflow",
      description: "Operate the Workflow during Application Delivery",
      subcommands: [
        {
          name: "restart",
          description: "Restart an application workflow",
          options: [
            {
              name: ["--env", "-e"],
              description: "Specify environment name for application",
              args: {
                name: "string",
              },
            },
            {
              name: ["--namespace", "-n"],
              description: "Specify the Kubernetes namespace to use",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "resume",
          description: "Resume a suspend application workflow",
          options: [
            {
              name: ["--env", "-e"],
              description: "Specify environment name for application",
              args: {
                name: "string",
              },
            },
            {
              name: ["--namespace", "-n"],
              description: "Specify the Kubernetes namespace to use",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "rollback",
          description:
            "Rollback an application workflow to the latest revision",
          options: [
            {
              name: ["--env", "-e"],
              description: "Specify environment name for application",
              args: {
                name: "string",
              },
            },
            {
              name: ["--namespace", "-n"],
              description: "Specify the Kubernetes namespace to use",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "suspend",
          description: "Suspend an application workflow",
          options: [
            {
              name: ["--env", "-e"],
              description: "Specify environment name for application",
              args: {
                name: "string",
              },
            },
            {
              name: ["--namespace", "-n"],
              description: "Specify the Kubernetes namespace to use",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "terminate",
          description: "Terminate an application workflow",
          options: [
            {
              name: ["--env", "-e"],
              description: "Specify environment name for application",
              args: {
                name: "string",
              },
            },
            {
              name: ["--namespace", "-n"],
              description: "Specify the Kubernetes namespace to use",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "addon",
      description: "Manage addons for extension",
      subcommands: [
        {
          name: "disable",
          description: "Disable an addon",
          options: [
            {
              name: ["--force", "-f"],
              description:
                "Skip checking if applications are still using this addon",
            },
          ],
        },
        {
          name: "enable",
          description: "Enable an addon",
          options: [
            {
              name: ["--clusters", "-c"],
              description: "Specify the runtime-clusters to enable",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List addons",
        },
        {
          name: "registry",
          description: "Manage addon registry",
          subcommands: [
            {
              name: "add",
              description: "Add an addon registry",
              options: [
                {
                  name: "--bucket",
                  description: "Specify the OSS bucket name",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--endpoint",
                  description: "Specify the addon registry endpoint",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--gitToken",
                  description: "Specify the github repo token",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--path",
                  description: "Specify the addon registry OSS path",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--type",
                  description: "Specify the addon registry type",
                  args: {
                    name: "string",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an addon registry",
            },
            {
              name: "get",
              description: "Get an addon registry",
            },
            {
              name: "list",
              description: "List addon registries",
            },
            {
              name: "update",
              description: "Update an addon registry",
              options: [
                {
                  name: "--bucket",
                  description: "Specify the OSS bucket name",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--endpoint",
                  description: "Specify the addon registry endpoint",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--gitToken",
                  description: "Specify the github repo token",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--path",
                  description: "Specify the addon registry OSS path",
                  args: {
                    name: "string",
                  },
                },
                {
                  name: "--type",
                  description: "Specify the addon registry type",
                  args: {
                    name: "string",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "status",
          description: "Get addon status",
        },
        {
          name: "upgrade",
          description: "Upgrade an addon",
        },
      ],
    },
    {
      name: ["uischema", "ui"],
      description: "Manage UI schema for addons",
      subcommands: [
        {
          name: "apply",
          description: "Apply UI schema from a file or dir",
        },
      ],
    },
    {
      name: "def",
      description: "Manage X-Definition for addons",
      subcommands: [
        {
          name: "apply",
          description: "Apply X-Definition",
          args: {
            isVariadic: true,
            template: ["filepaths", "folders"],
          },
          options: [
            {
              name: "--dry-run",
              description:
                "Only build definition from CUE into CRB object without applying it to kubernetes clusters",
            },
            {
              name: ["--namespace", "-n"],
              description:
                'Specify which namespace to apply. (default "vela-system")',
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "del",
          description: "Delete X-Definition",
          args: {
            isVariadic: true,
            template: ["filepaths", "folders"],
          },
          options: [
            {
              name: ["--namespace", "-n"],
              description:
                'Specify which namespace to apply. (default "vela-system")',
              args: {
                name: "string",
              },
            },
            {
              name: ["--type", "-t"],
              description:
                "Specify the definition type of target. Valid types: workflow-step, component, trait, policy, workload, scope",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "doc-gen",
          description:
            "Generate documentation of definitions (Only Terraform typed definitions are supported)",
          options: [
            {
              name: ["--type", "-t"],
              description:
                "Specify the definition type of target. Valid types: workflow-step, component, trait, policy, workload, scope",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "edit",
          description: "Edit X-Definition",
          options: [
            {
              name: ["--namespace", "-n"],
              description:
                'Specify which namespace to apply. (default "vela-system")',
              args: {
                name: "string",
              },
            },
            {
              name: ["--type", "-t"],
              description:
                "Specify the definition type of target. Valid types: workflow-step, component, trait, policy, workload, scope",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "get",
          description: "Get X-Definition",
          options: [
            {
              name: ["--namespace", "-n"],
              description:
                'Specify which namespace to apply. (default "vela-system")',
              args: {
                name: "string",
              },
            },
            {
              name: ["--type", "-t"],
              description:
                "Specify the definition type of target. Valid types: workflow-step, component, trait, policy, workload, scope",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "init",
          description: "Init a new definition",
          options: [
            {
              name: ["--desc", "-d"],
              description: "Specify the description of the new definition",
              args: {
                name: "string",
              },
            },
            {
              name: ["--interactive", "-i"],
              description:
                "Specify whether use interactive process to help generate definitions",
            },
            {
              name: "--git",
              description:
                "Specify which git repository the configuration(HCL) is stored in. Valid when --provider/-p is set",
              args: {
                name: "string",
              },
            },
            {
              name: "--local",
              description:
                "Specify the local path of the configuration(HCL) file. Valid when --provider/-p is set",
              args: {
                name: "string",
              },
            },
            {
              name: ["--output", "-o"],
              description:
                "Specify the output path of the generated definition. If empty, the definition will be printed in the console",
              args: {
                name: "string",
              },
            },
            {
              name: "--path",
              description:
                "Specify which path the configuration(HCL) is stored in the Git repository. Valid when --git is set",
              args: {
                name: "string",
              },
            },
            {
              name: ["--provider", "-p"],
              description:
                "Specify which provider the cloud resource definition belongs to. Only alibaba, `aws`, `azure` are supported",
              args: {
                name: "string",
              },
            },
            {
              name: ["--template-yaml", "-f"],
              description:
                "Specify the template yaml file that definition will use to build the schema. If empty, a default template for the given definition type will be used",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: ["--type", "-t"],
              description:
                "Specify the type of the new definition. Valid types: scope, workflow-step, component, trait, policy, workload",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List X-Definition",
          options: [
            {
              name: ["--namespace", "-n"],
              description:
                'Specify which namespace to apply. (default "vela-system")',
              args: {
                name: "string",
              },
            },
            {
              name: ["--type", "-t"],
              description:
                "Specify the definition type of target. Valid types: workflow-step, component, trait, policy, workload, scope",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "render",
          description: "Render X-Definition",
          options: [
            {
              name: "--message",
              description:
                "Specify the header message of the generated YAML file. For example, declaring author information",
              args: {
                name: "string",
              },
            },
            {
              name: ["--output", "-o"],
              description:
                "Specify the output path of the rendered definition YAML. If empty, the definition will be printed in the console. If input is a directory, the output path is expected to be a directory as well",
              args: {
                name: "path",
                template: "folders",
              },
            },
          ],
        },
        {
          name: "vet",
          description: "Validate X-Definition",
          args: {
            isVariadic: true,
            template: ["filepaths", "folders"],
          },
        },
      ],
    },
    {
      name: "registry",
      description: "Manage Registry of X-Definitions for extension",
      subcommands: [
        {
          name: "config",
          description:
            "Configure (add if not exist) a registry, default is local (built-in capabilities)",
          options: [
            {
              name: ["--token", "-t"],
              description: "Github Repo token",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "ls",
          description: "List all configured registry",
        },
        {
          name: ["remove", "rm"],
          description: "Remove specified registry",
        },
      ],
    },
    {
      name: ["component", "comp", "components"],
      description: "List component types installed and discover more registry",
      subcommands: [
        {
          name: "get",
          description: "Get component from type",
          options: [
            {
              name: "--registry",
              description: 'Specify the registry name (default "default")',
              args: {
                name: "string",
              },
            },
            {
              name: "--token",
              description:
                "Specify token when using --url to specify registry url",
              args: {
                name: "string",
              },
            },
            {
              name: "--url",
              description: "Specify the registry url",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
      options: [
        {
          name: "--discover",
          description: "Discover more registry",
          args: {
            name: "string",
          },
        },
        {
          name: "--label",
          description:
            "A label to filter components, the format is --label type=terraform",
          args: {
            name: "key=value",
          },
        },
        {
          name: "--registry",
          description: 'Specify the registry name (default "default")',
          args: {
            name: "string",
          },
        },
        {
          name: "--token",
          description: "Specify token when using --url to specify registry url",
          args: {
            name: "string",
          },
        },
        {
          name: "--url",
          description: "Specify the registry url",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: ["trait", "traits"],
      description: "List trait types installed and discover more in registry",
      subcommands: [
        {
          name: "get",
          description: "Get trait from registry",
          options: [
            {
              name: "--registry",
              description: 'Specify the registry name (default "default")',
              args: {
                name: "string",
              },
            },
            {
              name: "--token",
              description:
                "Specify token when using --url to specify registry url",
              args: {
                name: "string",
              },
            },
            {
              name: "--url",
              description: "Specify the registry url",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
      options: [
        {
          name: "--discover",
          description: "Discover traits in registries",
        },
        {
          name: "--registry",
          description: 'Specify the registry name (default "default")',
          args: {
            name: "string",
          },
        },
        {
          name: "--token",
          description: "Specify token when using --url to specify registry url",
          args: {
            name: "string",
          },
        },
        {
          name: "--url",
          description: "Specify the registry url",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstalls KubeVela from a Kubernetes cluster",
      options: [
        {
          name: ["--force", "-f"],
          description: "Force uninstall whole vela include all addons",
        },
        {
          name: ["--detail", "-d"],
          description: "Show detail log of uninstall information",
        },
        {
          name: ["--namespace", "-n"],
          description:
            'Namespace scope for installing KubeVela Core. (default "vela-system")',
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "install",
      description: "Installs KubeVela into a Kubernetes cluster",
      options: [
        {
          name: ["--file", "-f"],
          description: "Custom the chart path of KubeVela control plane",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: ["--detail", "-d"],
          description: "Show detail log of install information",
        },
        {
          name: ["--namespace", "-n"],
          description: "Namespace scope for installing KubeVela Core",
          args: {
            name: "string",
          },
        },
        {
          name: ["--reuse", "-r"],
          description:
            "Will re-use the user's last supplied values. (default true)",
          args: {
            name: "bool",
          },
        },
        {
          name: ["--version", "-v"],
          description: "Specify the version of KubeVela to install",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "completion",
      description:
        "Output shell completion code for the specified shell (bash or zsh). The shell code must be evaluated to provide interactive completion of vela commands",
      subcommands: [
        {
          name: "bash",
          description: "Output bash completion code",
        },
        {
          name: "zsh",
          description: "Output zsh completion code",
        },
      ],
    },
    {
      name: "export",
      description: "Export deploy manifests from appfile or application",
      options: [
        {
          name: ["--file", "-f"],
          description: "Specify the appfile path",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: ["--env", "-e"],
          description: "Specify environment name for application",
          args: {
            name: "string",
          },
        },
        {
          name: ["--namespace", "-n"],
          description: "Specify the Kubernetes namespace to use",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "version",
      description: "Prints the version",
      subcommands: [
        {
          name: "list",
          description: "List all available versions",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for vela",
    },
  ],
  // Only uncomment if vela takes an argument
  // args: {}
};
export default completionSpec;
