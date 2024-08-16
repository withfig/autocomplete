// Internal scripts for this spec, not to be confused with the script property
const scripts = {
  types: ["kubectl", "api-resources", "-o", "name"],
  typeWithoutName: function (type) {
    return ["kubectl", "get", type, "-o", "custom-columns=:.metadata.name"];
  },
};

const sharedPostProcessChecks = {
  connectedToCluster: (out) => {
    return out.includes("The connection to the server");
  },
  generalError: (out) => {
    return out.includes("error:");
  },
};

const sharedPostProcess: Fig.Generator["postProcess"] = (out) => {
  if (
    sharedPostProcessChecks.connectedToCluster(out) ||
    sharedPostProcessChecks.generalError(out)
  ) {
    return [];
  }
  return out.split("\n").map((item) => ({
    name: item,
    icon: "fig://icon?type=kubernetes",
  })) as Fig.Suggestion[];
};

const sharedArgs: Record<string, Fig.Arg> = {
  resourcesArg: {
    name: "Resource Type",
    generators: {
      script: scripts.types,
      cache: {
        strategy: "stale-while-revalidate",
        ttl: 1000 * 60 * 60,
      },
      postProcess: sharedPostProcess,
    },
  },
  runningPodsArg: {
    name: "Running Pods",
    generators: {
      script: [
        "kubectl",
        "get",
        "pods",
        "--field-selector=status.phase=Running",
        "-o",
        "name",
      ],
      postProcess: sharedPostProcess,
    },
  },
  resourceSuggestionsFromResourceType: {
    name: "Resource",
    generators: {
      script: function (context) {
        const resourceType = context[context.length - 2];
        return scripts.typeWithoutName(resourceType);
      },
      postProcess: sharedPostProcess,
      cache: {
        strategy: "stale-while-revalidate",
        ttl: 1000 * 60 * 60,
      },
    },
    isOptional: true,
  },
  listKubeConfContexts: {
    name: "Context",
    generators: {
      script: function (context) {
        const index = context.indexOf("--kubeconfig");
        if (index !== -1) {
          return [
            "kubectl",
            "config",
            `--kubeconfig=${context[index + 1]}`,
            "get-contexts",
            "-o",
            "name",
          ];
        }
        return ["kubectl", "config", "get-contexts", "-o", "name"];
      },
      postProcess: sharedPostProcess,
    },
  },
  listDeployments: {
    name: "Deployments",
    generators: {
      script: scripts.typeWithoutName("deployments"),
      postProcess: sharedPostProcess,
      cache: {
        strategy: "stale-while-revalidate",
        ttl: 1000 * 60 * 60,
      },
    },
  },
  listClusters: {
    name: "Cluster",
    generators: {
      script: function (context) {
        const index = context.indexOf("--kubeconfig");
        if (index !== -1) {
          return [
            "kubectl",
            "config",
            `--kubeconfig=${context[index + 1]}`,
            "get-clusters",
          ];
        }
        return ["kubectl", "config", "get-clusters"];
      },
      postProcess: function (out) {
        if (
          sharedPostProcessChecks.connectedToCluster(out) ||
          sharedPostProcessChecks.generalError(out)
        ) {
          return [];
        }
        return out
          .split("\n")
          .filter((line) => line !== "NAME")
          .map((line) => ({
            name: line,
            icon: "fig://icon?type=kubernetes",
          }));
      },
    },
  },
  typeOrTypeSlashName: {
    name: "TYPE | TYPE/NAME",
    generators: {
      script: function (context) {
        const lastInput = context[context.length - 1];
        if (lastInput.includes("/")) {
          return scripts.typeWithoutName(
            lastInput.substring(0, lastInput.indexOf("/"))
          );
        }
        return scripts.types;
      },
      postProcess: sharedPostProcess,
      trigger: "/",
      getQueryTerm: "/",
      cache: {
        strategy: "stale-while-revalidate",
        ttl: 1000 * 60 * 60,
      },
    },
  },
  listNodes: {
    name: "Node",
    generators: {
      script: scripts.typeWithoutName("nodes"),
      postProcess: sharedPostProcess,
      cache: {
        strategy: "stale-while-revalidate",
        ttl: 1000 * 60 * 60,
      },
    },
  },
  listClusterRoles: {
    name: "Cluster Role",
    generators: {
      script: scripts.typeWithoutName("clusterroles"),
      postProcess: sharedPostProcess,
      cache: {
        strategy: "stale-while-revalidate",
        ttl: 1000 * 60 * 60,
      },
    },
  },
  listContainersFromPod: {
    name: "Container",
    generators: {
      script: (context) => {
        const podIndex = context.findIndex(
          (i) =>
            i === "pods" ||
            i.includes("pods/") ||
            i === "pod" ||
            i.includes("pod/")
        );
        const podName = context[podIndex].includes("/")
          ? context[podIndex]
          : `${context[podIndex]} + ${context[podIndex + 1]}`;
        return ["kubectl", "get", podName, "-o", "json"];
      },
      postProcess: function (out) {
        if (
          sharedPostProcessChecks.connectedToCluster(out) ||
          sharedPostProcessChecks.generalError(out)
        ) {
          return [];
        }
        return JSON.parse(out).spec.containers.map((item) => ({
          name: item.name,
          description: item.image,
          icon: "fig://icon?type=kubernetes",
        }));
      },
    },
  },
};

const sharedOpts: Record<string, Fig.Option> = {
  filename: {
    name: ["-f", "--filename"],
    description:
      "Filename, directory, or URL to files identifying the resource",
    args: {
      name: "File",
      template: "filepaths",
    },
  },
  kustomize: {
    name: ["-k", "--kustomize"],
    description:
      "Process the kustomization directory. This flag can't be used together with -f or -R",
    args: {
      name: "Kustomize Dir",
      template: "folders",
    },
  },
  output: {
    name: ["-o", "--output"],
    description:
      "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file",
    args: {
      name: "Output Format",
      suggestions: [
        "json",
        "yaml",
        "name",
        "go-template",
        "go-template-file",
        "template",
        "templatefile",
        "jsonpath",
        "jsonpath-file",
      ],
    },
  },
  resourceVersion: {
    name: "--resource-version",
    requiresSeparator: true,
    description:
      "If non-empty, the annotation update will only succeed if this is the current resource-version for the object. Only valid when specifying a single resource",
    args: {},
  },
  dryRun: {
    name: "--dry-run",
    requiresSeparator: true,
    description:
      'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource',
    args: {
      name: "Strategy",
      suggestions: ["none", "server", "client"],
    },
  },
  fieldSelector: {
    name: "--field-selector",
    requiresSeparator: true,
    description:
      "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
    args: {},
  },
  local: {
    name: "--local",
    description:
      "If true, annotation will NOT contact api-server but run locally",
  },
  allResources: {
    name: "--all",
    description:
      "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
  },
  allowMissingTemplateKeys: {
    name: "--allow-missing-template-keys",
    description:
      "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats",
  },
  recursive: {
    name: ["-R", "--recursive"],
    description:
      "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory",
  },
  selector: {
    name: ["-l", "--selector"],
    description:
      "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
    args: {},
  },
  template: {
    name: "--template",
    requiresSeparator: true,
    description:
      "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview]",
    args: {},
  },
  overwrite: {
    name: "--overwrite",
    description:
      "If true, allow annotations to be overwritten, otherwise reject annotation updates that overwrite existing annotations",
  },
  record: {
    name: "--record",
    description:
      "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists",
  },
};

const sharedOptsArray = Object.values(sharedOpts);

const completionSpec: Fig.Spec = {
  name: "kubectl",
  description: "",
  subcommands: [
    {
      name: "alpha",
      description:
        "These commands correspond to alpha features that are not enabled in Kubernetes clusters by default",
      subcommands: [
        {
          name: "debug",
          description: "Tools for debugging Kubernetes resources",
          options: [
            {
              name: "--arguments-only",
              description:
                "If specified, everything after -- will be passed to the new container as Args instead of Command",
              args: {},
            },
            {
              name: "--attach",
              description:
                "If true, wait for the Pod to start running, and then attach to the Pod as if 'kubectl attach ...' were called.  Default false, unless '-i/--stdin' is set, in which case the default is true",
              args: {},
            },
            {
              name: "--container",
              description: "Container name to use for debug container",
              args: {},
            },
            {
              name: "--env",
              description: "Environment variables to set in the container",
              args: {},
            },
            {
              name: "--image",
              description: "Container image to use for debug container",
              args: {},
            },
            {
              name: "--image-pull-policy",
              description: "The image pull policy for the container",
              args: {},
            },
            {
              name: "--quiet",
              description: "If true, suppress prompt messages",
              args: {},
            },
            {
              name: ["-i", "--stdin"],
              description:
                "Keep stdin open on the container(s) in the pod, even if nothing is attached",
              args: {},
            },
            {
              name: "--target",
              description: "Target processes in this container name",
              args: {},
            },
            {
              name: ["-t", "--tty"],
              description: "Allocated a TTY for each container in the pod",
              args: {},
            },
          ],
        },
      ],
    },
    {
      name: "annotate",
      description: "Update the annotations on one or more resources",
      args: [
        sharedArgs.resourcesArg,
        sharedArgs.resourceSuggestionsFromResourceType,
        // * INFO: Fig doesn't display options if varidic is true
        {
          name: "KEY=VAL",
          isVariadic: true,
        },
      ],
      options: sharedOptsArray,
    },
    {
      name: "api-resources",
      description: "Print the supported API resources on the server",
      options: [
        sharedOpts.output,
        {
          name: "--api-group",
          description: "Limit to resources in the specified API group",
          args: {},
        },
        {
          name: "--cached",
          description: "Use the cached list of resources if available",
        },
        {
          name: "--namespaced",
          description:
            "If false, non-namespaced resources will be returned, otherwise returning namespaced resources by default",
        },
        {
          name: "--no-headers",
          description:
            "When using the default or custom-column output format, don't print headers (default print headers)",
        },
        {
          name: "--sort-by",
          requiresSeparator: true,
          description:
            "If non-empty, sort nodes list using specified field. The field can be either 'name' or 'kind'",
          args: {},
        },
        {
          name: "--verbs",
          requiresSeparator: true,
          description: "Limit to resources that support the specified verbs",
          args: {},
        },
      ],
    },
    {
      name: "api-versions",
      description:
        'Print the supported API versions on the server, in the form of "group/version"',
    },
    {
      name: "apply",
      description:
        "Apply a configuration to a resource by filename or stdin. The resource name must be specified. This resource will be created if it doesn't exist yet. To use 'apply', always create the resource initially with either 'apply' or 'create --save-config'",
      options: sharedOptsArray.concat([
        {
          name: "--cascade",
          description:
            "If true, cascade the deletion of the resources managed by this resource (e.g. Pods created by a ReplicationController). Default true",
        },
        {
          name: "--field-manager",
          requiresSeparator: true,
          description: "Name of the manager used to track field ownership",
          args: {},
        },
        {
          name: "--force",
          description:
            "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation",
        },
        {
          name: "--force-conflicts",
          description:
            "If true, server-side apply will force the changes against conflicts",
        },
        {
          name: "--grace-period",
          requiresSeparator: true,
          description:
            "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion)",
          args: {
            name: "INT (seconds)",
          },
        },
        {
          name: "--openapi-patch",
          description:
            "If true, use openapi to calculate diff when the openapi presents and the resource can be found in the openapi spec. Otherwise, fall back to use baked-in types",
        },
        {
          name: "--overwrite",
          description:
            "Automatically resolve conflicts between the modified and live configuration by using values from the modified configuration",
        },
        {
          name: "--prune",
          description:
            "Automatically delete resource objects, including the uninitialized ones, that do not appear in the configs and are created by either apply or create --save-config. Should be used with either -l or --all",
        },
        {
          name: "--prune-whitelist",
          requiresSeparator: true,
          description:
            "Overwrite the default whitelist with <group/version/kind> for --prune",
          args: {
            name: "group/version/kind",
          },
        },
        {
          name: "--server-side",
          description:
            "If true, apply runs in the server instead of the client",
        },
        {
          name: "--timeout",
          requiresSeparator: true,
          description:
            "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object",
          args: {
            name: "INT (Seconds)",
          },
        },
        {
          name: "--validate",
          description:
            "If true, use a schema to validate the input before sending it",
        },
        {
          name: "--wait",
          description:
            "If true, wait for resources to be gone before returning. This waits for finalizers",
        },
      ]),
      subcommands: [
        {
          name: "edit-last-applied",
          description:
            "Edit the latest last-applied-configuration annotations of resources from the default editor",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.record,
            sharedOpts.recursive,
            sharedOpts.template,
            {
              name: "--windows-line-endings",
              description:
                "Defaults to the line ending native to your platform",
            },
            {
              name: "--field-manager",
              description: "Name of the manager used to track field ownership",
              args: {},
            },
            {
              name: "--show-manged-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
          ],
        },
        {
          name: "set-last-applied",
          description:
            "Set the latest last-applied-configuration annotations by setting it to match the contents of a file. This results in the last-applied-configuration being updated as though 'kubectl apply -f<file> ' was run, without updating any other parts of the object",
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--show-manged-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--create-annotation",
              description:
                "Will create 'last-applied-configuration' annotations if current objects doesn't have one",
            },
          ],
        },
        {
          name: "view-last-applied",
          description:
            "View the latest last-applied-configuration annotations by type/name or file",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
          ],
          options: [
            sharedOpts.allResources,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.selector,
          ],
        },
      ],
    },
    {
      name: "attach",
      description:
        "Attach to a process that is already running inside an existing container",
      args: sharedArgs.runningPodsArg,
      options: [
        {
          name: ["-c", "--container"],
          description:
            "Container name. If omitted, the first container in the pod will be chosen",
          args: sharedArgs.listContainersFromPod,
        },
        {
          name: "--pod-running-timeout",
          requiresSeparator: true,
          description:
            "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
          args: {},
        },
        {
          name: ["-i", "--stdin"],
          description: "Pass stdin to the container",
        },
        {
          name: ["-t", "--tty"],
          description: "Stdin is a TTY",
        },
      ],
    },
    {
      name: "auth",
      description: "Inspect authorization",
      subcommands: [
        {
          name: "can-i",
          description: "Check whether an action is allowed",
          args: [
            {
              name: "VERB",
              suggestions: [
                "*",
                "get",
                "list",
                "watch",
                "delete",
                "create",
                "update",
                "patch",
              ],
            },
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
          ],
          options: [
            {
              name: ["-A", "--all-namespaces"],
              description:
                "If true, check the specified action in all namespaces",
            },
            {
              name: "--list",
              description: "If true, prints all allowed actions",
            },
            {
              name: "--no-headers",
              description: "If true, prints allowed actions without headers",
            },
            {
              name: ["-q", "--quiet"],
              description:
                "If true, suppress output and just return the exit code",
            },
            {
              name: "--subresource",
              requiresSeparator: true,
              description: "SubResource such as pod/log or deployment/scale",
              // TODO: Generator here
              args: {},
            },
          ],
        },
        {
          name: "reconcile",
          description:
            "Reconciles rules for RBAC Role, RoleBinding, ClusterRole, and ClusterRole binding objects",
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.template,
            {
              name: "--remove-extra-permissions",
              description: "If true, removes extra permissions added to roles",
            },
            {
              name: "--remove-extra-subjects",
              description:
                "If true, removes extra subjects added to rolebindings",
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
          ],
        },
      ],
    },
    {
      name: "autoscale",
      description:
        "Creates an autoscaler that automatically chooses and sets the number of pods that run in a kubernetes cluster",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.output,
        sharedOpts.record,
        sharedOpts.recursive,
        sharedOpts.dryRun,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.template,
        {
          name: "--cpu-percent",
          requiresSeparator: true,
          description:
            "The target average CPU utilization (represented as a percent of requested CPU) over all the pods. If it's not specified or negative, a default autoscaling policy will be used",
          args: {
            name: "INT (Percent)",
          },
        },
        {
          name: "--generator",
          requiresSeparator: true,
          description:
            "The name of the API generator to use. Currently there is only 1 generator",
          args: {},
        },
        {
          name: "--max",
          requiresSeparator: true,
          description:
            "The upper limit for the number of pods that can be set by the autoscaler. Required",
          args: {
            name: "INT",
          },
        },
        {
          name: "--min",
          requiresSeparator: true,
          description:
            "The lower limit for the number of pods that can be set by the autoscaler. If it's not specified or negative, the server will apply a default value",
          args: {
            name: "INT",
          },
        },
        {
          name: "--name",
          requiresSeparator: true,
          description:
            "The name for the newly created object. If not specified, the name of the input resource will be used",
          args: {},
        },
        {
          name: "--save-config",
          description:
            "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
        },
      ],
    },
    {
      name: "certificate",
      description: "Modify certificate resources",
      subcommands: [
        {
          name: "approve",
          description: "Approve a certificate signing request",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.template,
            {
              name: "--force",
              description: "Update the CSR even if it is already approved",
            },
          ],
        },
        {
          name: "deny",
          description: "Deny a certificate signing request",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.template,
            {
              name: "--force",
              description: "Update the CSR even if it is already approved",
            },
          ],
        },
      ],
    },
    {
      name: "cluster-info",
      description:
        "Display addresses of the master and services with label kubernetes.io/cluster-service=true To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'",
      subcommands: [
        {
          name: "dump",
          description:
            "Dumps cluster info out suitable for debugging and diagnosing cluster problems.  By default, dumps everything to stdout. You can optionally specify a directory with --output-directory.  If you specify a directory, kubernetes will build a set of files in that directory.  By default only dumps things in the 'kube-system' namespace, but you can switch to a different namespace with the --namespaces flag, or specify --all-namespaces to dump all namespaces",
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: ["-A", "--all-namespaces"],
              description:
                "If true, dump all namespaces.  If true, --namespaces is ignored",
            },
            {
              name: "--namespaces",
              description: "A comma separated list of namespaces to dump",
              args: {
                name: "Namespaces (Comma separated)",
              },
            },
            {
              name: "--output-directory",
              requiresSeparator: true,
              description:
                "Where to output the files.  If empty or '-' uses stdout, otherwise creates a directory hierarchy in that directory",
              args: {},
            },
            {
              name: "--pod-running-timeout",
              requiresSeparator: true,
              description:
                "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
              args: {
                name: "Length of Time",
              },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description:
        "Output shell completion code for the specified shell (bash or zsh). The shell code must be evaluated to provide interactive completion of kubectl commands.  This can be done by sourcing it from the .bash_profile",
    },
    {
      name: "config",
      description:
        'Modify kubeconfig files using subcommands like "kubectl config set current-context my-context"',
      options: [
        {
          name: "--kubeconfig",
          requiresSeparator: true,
          args: {
            name: "path",
            template: "filepaths",
          },
        },
      ],
      subcommands: [
        {
          name: "current-context",
          description: "Displays the current-context",
        },
        {
          name: "delete-cluster",
          description: "Delete the specified cluster from the kubeconfig",
          args: sharedArgs.listClusters,
        },
        {
          name: "delete-context",
          description: "Delete the specified context from the kubeconfig",
          args: sharedArgs.listKubeConfContexts,
        },
        {
          name: "get-clusters",
          description: "Display clusters defined in the kubeconfig",
        },
        {
          name: "get-contexts",
          description: "Displays one or many contexts from the kubeconfig file",
          args: { ...sharedArgs.listKubeConfContexts, isOptional: true },
          options: [
            sharedOpts.output,
            {
              name: "--no-headers",
              description:
                "When using the default or custom-column output format, don't print headers (default print headers)",
              args: {},
            },
          ],
        },
        {
          name: "get-users",
          description: "Display users defined in the kubeconfig",
        },
        {
          name: "rename-context",
          description: "Renames a context from the kubeconfig file",
          args: [
            sharedArgs.listKubeConfContexts,
            {
              name: "New Context Name",
            },
          ],
        },
        {
          name: "set",
          description: "Sets an individual value in a kubeconfig file",
          args: [
            {
              name: "PROPERTY_NAME",
            },
            {
              name: "PROPERTY_VALUE",
            },
          ],
          options: [
            {
              name: "--set-raw-bytes",
              description:
                "When writing a []byte PROPERTY_VALUE, write the given string directly without base64 decoding",
              args: {},
            },
          ],
        },
        {
          name: "set-cluster",
          description: "Sets a cluster entry in kubeconfig",
          args: {
            name: "NAME",
          },
          options: [
            {
              name: "--embed-certs",
              description: "Embed-certs for the cluster entry in kubeconfig",
            },
            {
              name: "--server",
              requiresSeparator: true,
              args: {
                name: "Server",
              },
            },
            {
              name: "--certificate-authority",
              requiresSeparator: true,
              description: "Path to certificate authority",
              args: {
                name: "Certificate Authority",
                template: "filepaths",
              },
            },
            {
              name: "--insecure-skip-tls-verify",
              requiresSeparator: true,
              args: {
                suggestions: ["true", "false"],
              },
            },
            {
              name: "--tls-server-name",
              requiresSeparator: true,
              args: {
                name: "TLS Server Name",
              },
            },
          ],
        },
        {
          name: "set-context",
          description: "Sets a context entry in kubeconfig",
          args: sharedArgs.listKubeConfContexts,
          options: [
            {
              name: "--current",
              description: "Modify the current context",
            },
            {
              name: "--cluster",
              requiresSeparator: true,
              args: {
                name: "cluster_nickname",
              },
            },
            {
              name: "--user",
              requiresSeparator: true,
              args: {
                name: "user_nickname",
              },
            },
            {
              name: "--namespace",
              requiresSeparator: true,
              args: {
                name: "namespace",
              },
            },
          ],
        },
        {
          name: "set-credentials",
          description: "Sets a user entry in kubeconfig",
          args: sharedArgs.listClusters,
          options: [
            {
              name: "--client-certificate",
              requiresSeparator: true,
              description: "Client cert for user entry",
              args: {
                template: "filepaths",
              },
            },
            {
              name: "--client-key",
              requiresSeparator: true,
              description: "Client key for user entry",
              args: {
                template: "filepaths",
              },
            },
            {
              name: "--token",
              requiresSeparator: true,
              description: "Bearer Token for user entry",
              args: {
                name: "Bearer Token",
              },
            },
            {
              name: "--username",
              requiresSeparator: true,
              description: "Username for basic authentication",
              args: {
                name: "Username",
              },
            },
            {
              name: "--password",
              requiresSeparator: true,
              description: "Password for basic authentication",
              args: {
                name: "Password",
              },
            },
            {
              name: "--auth-provider",
              requiresSeparator: true,
              description: "Auth provider for the user entry in kubeconfig",
              args: {
                name: "Auth Provider",
              },
            },
            {
              name: "--auth-provider-arg",
              requiresSeparator: true,
              description: "'key=value' arguments for the auth provider",
              args: {
                name: "key=value",
              },
            },
            {
              name: "--embed-certs",
              description:
                "Embed client cert/key for the user entry in kubeconfig",
            },
            {
              name: "--exec-api-version",
              requiresSeparator: true,
              description:
                "API version of the exec credential plugin for the user entry in kubeconfig",
              args: {
                name: "API Version",
              },
            },
            {
              name: "--exec-arg",
              requiresSeparator: true,
              description:
                "New arguments for the exec credential plugin command for the user entry in kubeconfig",
              args: {
                name: "Exec Arg",
              },
            },
            {
              name: "--exec-command",
              requiresSeparator: true,
              description:
                "Command for the exec credential plugin for the user entry in kubeconfig",
              args: {
                name: "Exec Command",
              },
            },
            {
              name: "--exec-env",
              requiresSeparator: true,
              description:
                "'key=value' environment values for the exec credential plugin",
              args: {
                name: "key=value",
              },
            },
          ],
        },
        {
          name: "unset",
          description: "Unsets an individual value in a kubeconfig file",
          args: {
            name: "PROPERTY_NAME",
          },
        },
        {
          name: "use-context",
          description: "Sets the current-context in a kubeconfig file",
          args: sharedArgs.listKubeConfContexts,
        },
        {
          name: "view",
          description:
            "Display merged kubeconfig settings or a specified kubeconfig file",
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--flatten",
              description:
                "Flatten the resulting kubeconfig file into self-contained output (useful for creating portable kubeconfig files)",
            },
            {
              name: "--merge",
              description: "Merge the full hierarchy of kubeconfig files",
            },
            {
              name: "--minify",
              description:
                "Remove all information not used by current-context from the output",
            },
            {
              name: "--raw",
              description: "Display raw byte data",
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
          ],
        },
      ],
    },
    {
      name: "convert",
      description:
        "Convert config files between different API versions. Both YAML and JSON formats are accepted",
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.recursive,
        sharedOpts.template,
        {
          name: "--local",
          description:
            "If true, convert will NOT try to contact api-server but run locally",
        },
        {
          name: "--output-version",
          requiresSeparator: true,
          description:
            "Output the formatted object with the given group version (for ex: 'extensions/v1beta1')",
          args: {},
        },
        {
          name: "--validate",
          description:
            "If true, use a schema to validate the input before sending it",
        },
      ],
    },
    {
      name: "cordon",
      description: "Mark node as unschedulable",
      args: sharedArgs.listNodes,
      options: [sharedOpts.dryRun, sharedOpts.selector],
    },
    {
      // TODO: Args and generators
      name: "cp",
      description: "Copy files and directories to and from containers",
      args: {},
      options: [
        {
          name: ["-c", "--container"],
          description:
            "Container name. If omitted, the first container in the pod will be chosen",
          args: {},
        },
        {
          name: "--no-preserve",
          description:
            "The copied file/directory's ownership and permissions will not be preserved in the container",
          args: {},
        },
      ],
    },
    {
      name: "create",
      description: "Create a resource from a file or from stdin",
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.dryRun,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.template,
        sharedOpts.record,
        {
          name: "--edit",
          description: "Edit the API resource before creating",
        },
        {
          name: "--raw",
          description:
            "Raw URI to POST to the server.  Uses the transport specified by the kubeconfig file",
        },
        {
          name: "--save-config",
          description:
            "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
        },
        {
          name: "--validate",
          description:
            "If true, use a schema to validate the input before sending it",
        },
        {
          name: "--windows-line-endings",
          description:
            "Only relevant if --edit=true. Defaults to the line ending native to your platform",
        },
      ],
      subcommands: [
        {
          name: "clusterrole",
          description: "Create a ClusterRole",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--aggregation-rule",
              requiresSeparator: true,
              description:
                "An aggregation label selector for combining ClusterRoles",
              args: {},
            },
            {
              name: "--non-resource-url",
              description: "A partial url that user should have access to",
              args: {},
            },
            {
              name: "--resource",
              requiresSeparator: true,
              description: "Resource that the rule applies to",
              args: sharedArgs.resourcesArg,
            },
            {
              name: "--resource-name",
              requiresSeparator: true,
              description:
                "Resource in the white list that the rule applies to, repeat this flag for multiple items",
              args: {},
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--validate",
              description:
                "If true, use a schema to validate the input before sending it",
            },
            {
              name: "--verb",
              requiresSeparator: true,
              description:
                "Verb that applies to the resources contained in the rule",
              args: {
                name: "VERB",
                suggestions: [
                  "*",
                  "get",
                  "list",
                  "watch",
                  "delete",
                  "create",
                  "update",
                  "patch",
                ],
              },
            },
          ],
        },
        {
          name: "clusterrolebinding",
          description:
            "Create a ClusterRoleBinding for a particular ClusterRole",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--clusterrole",
              requiresSeparator: true,
              description:
                "ClusterRole this ClusterRoleBinding should reference",
              args: sharedArgs.listClusterRoles,
            },
            {
              name: "--user",
              requiresSeparator: true,
              args: {
                name: "User Name",
              },
            },
            {
              name: "--group",
              description: "Groups to bind to the clusterrole",
              args: {
                name: "Group Name",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--serviceaccount",
              description:
                "Service accounts to bind to the clusterrole, in the format <namespace>:<name>",
              args: {
                name: "<namespace>:<name>",
              },
            },
            {
              name: "--validate",
              description:
                "If true, use a schema to validate the input before sending it",
            },
          ],
        },
        {
          name: "configmap",
          description:
            "Create a configmap based on a file, directory, or specified literal value",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--append-hash",
              description: "Append a hash of the configmap to its name",
            },
            {
              name: "--from-env-file",
              requiresSeparator: true,
              description:
                "Specify the path to a file to read lines of key=val pairs to create a configmap (i.e. a Docker .env file)",
              args: {
                template: "filepaths",
              },
            },
            {
              name: "--from-file",
              requiresSeparator: true,
              description:
                "Key file can be specified using its file path, in which case file basename will be used as configmap key, or optionally with a key and file path, in which case the given key will be used.  Specifying a directory will iterate each named file in the directory whose basename is a valid configmap key",
              args: {
                template: "filepaths",
              },
            },
            {
              name: "--from-literal",
              requiresSeparator: true,
              description:
                "Specify a key and literal value to insert in configmap (i.e. mykey=somevalue)",
              args: {
                name: "key=value",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--validate",
              description:
                "If true, use a schema to validate the input before sending it",
            },
          ],
        },
        {
          name: "cronjob",
          description: "Create a cronjob with the specified name",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--image",
              requiresSeparator: true,
              description: "Image name to run",
              args: {
                name: "Image",
              },
            },
            {
              name: "--restart",
              requiresSeparator: true,
              description:
                "Job's restart policy. supported values: OnFailure, Never",
              args: {
                suggestions: ["OnFailure", "Never"],
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--schedule",
              description:
                "A schedule in the Cron format the job should be run with",
              args: {
                name: "Cron",
              },
            },
            {
              name: "--validate",
              description:
                "If true, use a schema to validate the input before sending it",
            },
          ],
        },
        {
          name: "deployment",
          description: "Create a deployment with the specified name",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--image",
              requiresSeparator: true,
              description: "Image name to run",
              args: {
                name: "Image",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--validate",
              description:
                "If true, use a schema to validate the input before sending it",
            },
          ],
        },
        {
          name: "ingress",
          description: "Create an ingress with the specified name",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--annotation",
              description:
                "Annotation to insert in the ingress object, in the format annotation=value",
              args: {
                name: "annotation=value",
              },
            },
            {
              name: "--class",
              requiresSeparator: true,
              description: "Ingress Class to be used",
              args: {},
            },
            {
              name: "--default-backend",
              requiresSeparator: true,
              description:
                "Default service for backend, in format of svcname:port",
              args: {
                name: "svcname:port",
              },
            },
            {
              name: "--field-manager",
              requiresSeparator: true,
              description: "Name of the manager used to track field ownership",
              args: {},
            },
            {
              name: "--rule",
              requiresSeparator: true,
              description:
                "Rule in format host/path=service:port[,tls=secretname]. Paths containing the leading character '*' are considered pathType=Prefix. tls argument is optional",
              args: {
                name: "host/path=service:port[,tls=secretname]",
              },
            },
            {
              name: "--show-managed-fields",
              description:
                "If true, keep the managedFields when printing objects in JSON or YAML format",
            },
            {
              name: "--validate",
              description:
                "If true, use a schema to validate the input before sending it",
            },
          ],
        },
        {
          name: "job",
          description: "Create a job with the specified name",
          args: [
            {
              name: "NAME",
            },
            {
              name: "COMMAND",
              isCommand: true,
            },
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--from",
              requiresSeparator: true,
              description:
                "The name of the resource to create a Job from (only cronjob is supported)",
              args: {
                name: "Cronjob",
                generators: {
                  script: () => scripts.typeWithoutName("cronjob"),
                  postProcess: (out, tokens) => {
                    return sharedPostProcess(out, tokens).map((item) => ({
                      ...item,
                      name: `cronjob/${item.name}`,
                    })) as Fig.Suggestion[];
                  },
                },
              },
            },
            {
              name: "--image",
              requiresSeparator: true,
              description: "Image name to run",
              args: {
                name: "Image",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--validate",
              description:
                "If true, use a schema to validate the input before sending it",
            },
          ],
        },
        {
          name: "namespace",
          description: "Create a namespace with the specified name",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--validate",
              description:
                "If true, use a schema to validate the input before sending it",
            },
          ],
        },
        {
          name: "poddisruptionbudget",
          description:
            "Create a pod disruption budget with the specified name, selector, and desired minimum available pods",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            sharedOpts.selector,
            {
              name: "--max-unavailable",
              description:
                "The maximum number or percentage of unavailable pods this budget requires",
              args: {
                name: "INT (Percent)",
              },
            },
            {
              name: "--min-available",
              description:
                "The minimum number or percentage of available pods this budget requires",
              args: {
                name: "INT (Percent)",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--validate",
              description:
                "If true, use a schema to validate the input before sending it",
            },
          ],
        },
        {
          name: "priorityclass",
          description:
            "Create a priorityclass with the specified name, value, globalDefault and description",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--description",
              requiresSeparator: true,
              description:
                "Description is an arbitrary string that usually provides guidelines on when this priority class should be used",
              args: {
                name: "Description",
              },
            },
            {
              name: "--global-default",
              description:
                "Global-default specifies whether this PriorityClass should be considered as the default priority",
            },
            {
              name: "--preemption-policy",
              description:
                "Preemption-policy is the policy for preempting pods with lower priority",
              args: {
                name: "Preemption Policy",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--validate",
              description:
                "If true, use a schema to validate the input before sending it",
            },
            {
              name: "--value",
              requiresSeparator: true,
              description: "The value of this priority class",
              args: {
                name: "INT",
              },
            },
          ],
        },
        {
          name: "quota",
          description:
            "Create a resourcequota with the specified name, hard limits and optional scopes",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--field-manager",
              requiresSeparator: true,
              description: "Name of the manager used to track field ownership",
              args: {},
            },
            {
              name: "--hard",
              description:
                "A comma-delimited set of resource=quantity pairs that define a hard limit",
              args: {
                name: "key=value (Comma delimited)",
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--scopes",
              description:
                "A comma-delimited set of quota scopes that must all match each object tracked by the quota",
              args: {
                name: "Scopes (Comma delimited)",
              },
            },
            {
              name: "--validate",
              description:
                "If true, use a schema to validate the input before sending it",
            },
          ],
        },
        {
          name: "role",
          description: "Create a role with single rule",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--resource",
              requiresSeparator: true,
              description: "Resource that the rule applies to",
              args: sharedArgs.resourcesArg,
            },
            {
              name: "--resource-name",
              requiresSeparator: true,
              description:
                "Resource in the white list that the rule applies to, repeat this flag for multiple items",
              args: {},
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--validate",
              description:
                "If true, use a schema to validate the input before sending it",
            },
            {
              name: "--verb",
              requiresSeparator: true,
              description:
                "Verb that applies to the resources contained in the rule",
              args: {
                name: "VERB",
                suggestions: ["get", "list", "watch", "delete"],
              },
            },
          ],
        },
        {
          name: "rolebinding",
          description:
            "Create a RoleBinding for a particular Role or ClusterRole",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--clusterrole",
              requiresSeparator: true,
              description: "ClusterRole this RoleBinding should reference",
              args: sharedArgs.listClusterRoles,
            },
            {
              name: "--group",
              requiresSeparator: true,
              description: "Groups to bind to the role",
              args: {},
            },
            {
              name: "--role",
              requiresSeparator: true,
              description: "Role this RoleBinding should reference",
              args: {
                name: "Role",
                generators: {
                  script: () => scripts.typeWithoutName("roles"),
                  postProcess: sharedPostProcess,
                },
              },
            },
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--serviceaccount",
              requiresSeparator: true,
              description:
                "Service accounts to bind to the role, in the format <namespace>:<name>",
              args: {
                name: "<namespace>:<name>",
              },
            },
            {
              name: "--username",
              requiresSeparator: true,
              args: {
                name: "Username",
              },
            },
            {
              name: "--validate",
              description:
                "If true, use a schema to validate the input before sending it",
            },
          ],
        },
        {
          name: "secret",
          description: "Create a secret using specified subcommand",
          subcommands: [
            {
              name: "docker-registry",
              args: {
                name: "NAME",
              },
              description: "Create a new secret for use with Docker registries",
              options: [
                sharedOpts.allowMissingTemplateKeys,
                sharedOpts.dryRun,
                sharedOpts.output,
                sharedOpts.template,
                {
                  name: "--append-hash",
                  description: "Append a hash of the secret to its name",
                },
                {
                  name: "--docker-email",
                  requiresSeparator: true,
                  description: "Email for Docker registry",
                  args: {
                    name: "Email",
                  },
                },
                {
                  name: "--docker-password",
                  requiresSeparator: true,
                  description: "Password for Docker registry authentication",
                  args: {
                    name: "Password",
                  },
                },
                {
                  name: "--docker-server",
                  requiresSeparator: true,
                  description: "Server location for Docker registry",
                  args: {
                    name: "Server",
                  },
                },
                {
                  name: "--docker-username",
                  requiresSeparator: true,
                  description: "Username for Docker registry authentication",
                  args: {
                    name: "Username",
                  },
                },
                {
                  name: "--from-file",
                  requiresSeparator: true,
                  description:
                    "Key files can be specified using their file path, in which case a default name will be given to them, or optionally with a name and file path, in which case the given name will be used.  Specifying a directory will iterate each named file in the directory that is a valid secret key",
                  args: {
                    template: "filepaths",
                  },
                },
                {
                  name: "--save-config",
                  description:
                    "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
                },
                {
                  name: "--validate",
                  description:
                    "If true, use a schema to validate the input before sending it",
                },
              ],
            },
            {
              name: "generic",
              args: {
                name: "NAME",
              },
              description:
                "Create a secret based on a file, directory, or specified literal value",
              options: [
                sharedOpts.allowMissingTemplateKeys,
                sharedOpts.dryRun,
                sharedOpts.output,
                sharedOpts.template,
                {
                  name: "--append-hash",
                  description: "Append a hash of the secret to its name",
                },
                {
                  name: "--from-env-file",
                  requiresSeparator: true,
                  description:
                    "Specify the path to a file to read lines of key=val pairs to create a secret (i.e. a Docker .env file)",
                  args: {
                    template: "filepaths",
                  },
                },
                {
                  name: "--from-file",
                  requiresSeparator: true,
                  description:
                    "Key files can be specified using their file path, in which case a default name will be given to them, or optionally with a name and file path, in which case the given name will be used.  Specifying a directory will iterate each named file in the directory that is a valid secret key",
                  args: {
                    template: "filepaths",
                  },
                },
                {
                  name: "--from-literal",
                  requiresSeparator: true,
                  description:
                    "Specify a key and literal value to insert in secret (i.e. mykey=somevalue)",
                  args: {
                    name: "key=value",
                  },
                },
                {
                  name: "--save-config",
                  description:
                    "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
                },
                {
                  name: "--type",
                  requiresSeparator: true,
                  description: "The type of secret to create",
                  args: {},
                },
                {
                  name: "--validate",
                  description:
                    "If true, use a schema to validate the input before sending it",
                },
              ],
            },
            {
              name: "tls",
              description:
                "Create a TLS secret from the given public/private key pair",
              args: {
                name: "NAME",
              },
              options: [
                sharedOpts.allowMissingTemplateKeys,
                sharedOpts.dryRun,
                sharedOpts.output,
                sharedOpts.template,
                {
                  name: "--append-hash",
                  description: "Append a hash of the secret to its name",
                },
                {
                  name: "--cert",
                  requiresSeparator: true,
                  description: "Path to PEM encoded public key certificate",
                  args: {
                    template: "filepaths",
                  },
                },
                {
                  name: "--key",
                  requiresSeparator: true,
                  description:
                    "Path to private key associated with given certificate",
                  args: {
                    template: "filepaths",
                  },
                },
                {
                  name: "--save-config",
                  description:
                    "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
                },
                {
                  name: "--validate",
                  description:
                    "If true, use a schema to validate the input before sending it",
                },
              ],
            },
          ],
        },
        {
          name: "service",
          description: "Create a service using specified subcommand",
          subcommands: [
            {
              name: "clusterip",
              description: "Create a ClusterIP service with the specified name",
              args: {
                name: "NAME",
              },
              options: [
                sharedOpts.allowMissingTemplateKeys,
                sharedOpts.dryRun,
                sharedOpts.output,
                sharedOpts.template,
                {
                  name: "--clusterip",
                  requiresSeparator: true,
                  description:
                    "Assign your own ClusterIP or set to 'None' for a 'headless' service (no loadbalancing)",
                  args: {
                    name: "ClusterIP",
                    suggestions: ["None"],
                  },
                },
                {
                  name: "--save-config",
                  description:
                    "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
                },
                {
                  name: "--tcp",
                  requiresSeparator: true,
                  description:
                    "Port pairs can be specified as '<port>:<targetPort>'",
                  args: {
                    name: "<port>:<targetPort>",
                  },
                },
                {
                  name: "--validate",
                  description:
                    "If true, use a schema to validate the input before sending it",
                },
              ],
            },
            {
              name: "externalname",
              description:
                "Create an ExternalName service with the specified name",
              args: {
                name: "NAME",
              },
              options: [
                sharedOpts.allowMissingTemplateKeys,
                sharedOpts.dryRun,
                sharedOpts.output,
                sharedOpts.template,
                {
                  name: "--external-name",
                  description: "External name of service",
                  args: {
                    name: "External name",
                  },
                },
                {
                  name: "--save-config",
                  description:
                    "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
                },
                {
                  name: "--tcp",
                  requiresSeparator: true,
                  description:
                    "Port pairs can be specified as '<port>:<targetPort>'",
                  args: {
                    name: "<port>:<targetPort>",
                  },
                },
                {
                  name: "--validate",
                  description:
                    "If true, use a schema to validate the input before sending it",
                },
              ],
            },
            {
              name: "loadbalancer",
              description:
                "Create a LoadBalancer service with the specified name",
              args: {
                name: "NAME",
              },
              options: [
                sharedOpts.allowMissingTemplateKeys,
                sharedOpts.dryRun,
                sharedOpts.output,
                sharedOpts.template,
                {
                  name: "--save-config",
                  description:
                    "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
                },
                {
                  name: "--tcp",
                  requiresSeparator: true,
                  description:
                    "Port pairs can be specified as '<port>:<targetPort>'",
                  args: {
                    name: "<port>:<targetPort>",
                  },
                },
                {
                  name: "--validate",
                  description:
                    "If true, use a schema to validate the input before sending it",
                },
              ],
            },
            {
              name: "nodeport",
              description: "Create a NodePort service with the specified name",
              args: {
                name: "NAME",
              },
              options: [
                sharedOpts.allowMissingTemplateKeys,
                sharedOpts.dryRun,
                sharedOpts.output,
                sharedOpts.template,
                {
                  name: "--node-port",
                  description:
                    "Port used to expose the service on each node in a cluster",
                  args: {
                    name: "Port (INT)",
                  },
                },
                {
                  name: "--save-config",
                  description:
                    "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
                },
                {
                  name: "--tcp",
                  requiresSeparator: true,
                  description:
                    "Port pairs can be specified as '<port>:<targetPort>'",
                  args: {
                    name: "<port>:<targetPort>",
                  },
                },
                {
                  name: "--validate",
                  description:
                    "If true, use a schema to validate the input before sending it",
                },
              ],
            },
          ],
        },
        {
          name: "serviceaccount",
          description: "Create a service account with the specified name",
          args: {
            name: "NAME",
          },
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.output,
            sharedOpts.template,
            {
              name: "--save-config",
              description:
                "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
            },
            {
              name: "--validate",
              description:
                "If true, use a schema to validate the input before sending it",
            },
          ],
        },
      ],
    },
    {
      name: "delete",
      description:
        "Delete resources by filenames, stdin, resources and names, or by resources and label selector",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.dryRun,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.allResources,
        sharedOpts.fieldSelector,
        {
          name: ["-A", "--all-namespaces"],
          description:
            "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace",
        },
        {
          name: "--cascade",
          description:
            "If true, cascade the deletion of the resources managed by this resource (e.g. Pods created by a ReplicationController).  Default true",
        },
        {
          name: "--force",
          description:
            "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation",
        },
        {
          name: "--grace-period",
          description:
            "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion)",
          args: {
            name: "INT (Seconds)",
          },
        },
        {
          name: "--ignore-not-found",
          description:
            'Treat "resource not found" as a successful delete. Defaults to "true" when --all is specified',
        },
        {
          name: "--now",
          description:
            "If true, resources are signaled for immediate shutdown (same as --grace-period=1)",
        },
        {
          name: "--raw",
          description:
            "Raw URI to DELETE to the server.  Uses the transport specified by the kubeconfig file",
        },
        {
          name: "--timeout",
          description:
            "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object",
          args: {
            name: "INT (Seconds)",
          },
        },
        {
          name: "--wait",
          description:
            "If true, wait for resources to be gone before returning. This waits for finalizers",
        },
      ],
    },
    {
      name: "describe",
      description: "Show details of a specific resource or group of resources",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.recursive,
        sharedOpts.selector,
        {
          name: ["-A", "--all-namespaces"],
          description:
            "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace",
        },
        {
          name: "--show-events",
          description:
            "If true, display events related to the described object",
        },
      ],
    },
    {
      name: "diff",
      description:
        "Diff configurations specified by filename or stdin between the current online configuration, and the configuration as it would be if applied",
      options: [
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.recursive,
        {
          name: "--field-manager",
          description: "Name of the manager used to track field ownership",
          args: {
            name: "Field Manager",
          },
        },
        {
          name: "--force-conflicts",
          description:
            "If true, server-side apply will force the changes against conflicts",
        },
        {
          name: "--server-side",
          description:
            "If true, apply runs in the server instead of the client",
        },
      ],
    },
    {
      name: "drain",
      description: "Drain node in preparation for maintenance",
      args: sharedArgs.listNodes,
      options: [
        sharedOpts.dryRun,
        sharedOpts.selector,
        {
          name: "--delete-local-data",
          description:
            "Continue even if there are pods using emptyDir (local data that will be deleted when the node is drained)",
        },
        {
          name: "--disable-eviction",
          description:
            "Force drain to use delete, even if eviction is supported. This will bypass checking PodDisruptionBudgets, use with caution",
        },
        {
          name: "--force",
          description:
            "Continue even if there are pods not managed by a ReplicationController, ReplicaSet, Job, DaemonSet or StatefulSet",
        },
        {
          name: "--grace-period",
          requiresSeparator: true,
          description:
            "Period of time in seconds given to each pod to terminate gracefully. If negative, the default value specified in the pod will be used",
          args: {
            name: "INT (Seconds)",
          },
        },
        {
          name: "--ignore-daemonsets",
          description: "Ignore DaemonSet-managed pods",
        },
        {
          name: "--pod-selector",
          requiresSeparator: true,
          description: "Label selector to filter pods on the node",
          args: {},
        },
        {
          name: "--skip-wait-for-delete-timeout",
          description:
            "If pod DeletionTimestamp older than N seconds, skip waiting for the pod.  Seconds must be greater than 0 to skip",
          args: {},
        },
        {
          name: "--timeout",
          requiresSeparator: true,
          description:
            "The length of time to wait before giving up, zero means infinite",
          args: {
            name: "INT (Seconds)",
          },
        },
      ],
    },
    {
      name: "edit",
      description: "Edit a resource from the default editor",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.recursive,
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.template,
        sharedOpts.record,
        {
          name: "--output-patch",
          description: "Output the patch if the resource is edited",
          args: {},
        },
        {
          name: "--save-config",
          description:
            "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
        },
        {
          name: "--validate",
          description:
            "If true, use a schema to validate the input before sending it",
        },
        {
          name: "--windows-line-endings",
          description: "Defaults to the line ending native to your platform",
        },
      ],
    },
    {
      name: "exec",
      description: "Execute a command in a container",
      args: [
        sharedArgs.runningPodsArg,
        {
          name: "COMMAND",
          isCommand: true,
        },
      ],
      options: [
        sharedOpts.filename,
        {
          name: ["-c", "--container"],
          description:
            "Container name. If omitted, the first container in the pod will be chosen",
          args: sharedArgs.listContainersFromPod,
        },
        {
          name: "--pod-running-timeout",
          description:
            "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
          args: {},
        },
        {
          name: ["-i", "--stdin"],
          description: "Pass stdin to the container",
        },
        {
          name: ["-t", "--tty"],
          description: "Stdin is a TTY",
        },
      ],
    },
    {
      name: "explain",
      description: "List the fields for supported resources",
      args: sharedArgs.resourcesArg,
      options: [
        {
          name: "--api-version",
          description: "Get different explanations for particular API version",
          args: {},
        },
        {
          name: "--recursive",
          description:
            "Print the fields of fields (Currently only 1 level deep)",
        },
      ],
    },
    {
      name: "expose",
      description: "Expose a resource as a new Kubernetes service",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.dryRun,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.record,
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.template,
        {
          name: "--cluster-ip",
          requiresSeparator: true,
          description:
            "ClusterIP to be assigned to the service. Leave empty to auto-allocate, or set to 'None' to create a headless service",
          args: {},
        },
        {
          name: "--external-ip",
          requiresSeparator: true,
          description:
            "Additional external IP address (not managed by Kubernetes) to accept for the service. If this IP is routed to a node, the service can be accessed by this IP in addition to its generated service IP",
          args: {},
        },
        {
          name: "--generator",
          requiresSeparator: true,
          description:
            "The name of the API generator to use. There are 2 generators: 'service/v1' and 'service/v2'. The only difference between them is that service port in v1 is named 'default', while it is left unnamed in v2. Default is 'service/v2'",
          args: {},
        },
        {
          name: ["-l", "--labels"],

          requiresSeparator: true,
          description: "Labels to apply to the service created by this call",
          args: {},
        },
        {
          name: "--load-balancer-ip",
          requiresSeparator: true,
          description:
            "IP to assign to the LoadBalancer. If empty, an ephemeral IP will be created and used (cloud-provider specific)",
          args: {},
        },
        {
          name: "--name",
          description: "The name for the newly created object",
          requiresSeparator: true,
          args: {},
        },
        {
          name: "--overrides",
          description:
            "An inline JSON override for the generated object. If this is non-empty, it is used to override the generated object. Requires that the object supply a valid apiVersion field",
          args: {},
        },
        {
          name: "--port",
          requiresSeparator: true,
          description:
            "The port that the service should serve on. Copied from the resource being exposed, if unspecified",
          args: {},
        },
        {
          name: "--protocol",
          requiresSeparator: true,
          description:
            "The network protocol for the service to be created. Default is 'TCP'",
          args: {
            suggestions: ["TCP", "UDP", "SCTP"],
          },
        },
        {
          name: "--save-config",
          description:
            "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
        },
        {
          name: "--session-affinity",
          requiresSeparator: true,
          description:
            "If non-empty, set the session affinity for the service to this; legal values: 'None', 'ClientIP'",
          args: {},
        },
        {
          name: "--target-port",
          requiresSeparator: true,
          description:
            "Name or number for the port on the container that the service should direct traffic to. Optional",
          args: {},
        },
        {
          name: "--type",
          requiresSeparator: true,
          description:
            "Type for this service: ClusterIP, NodePort, LoadBalancer, or ExternalName. Default is 'ClusterIP'",
          args: {
            suggestions: [
              "ClusterIP",
              "NodePort",
              "LoadBalancer",
              "ExternalName",
            ],
          },
        },
      ],
    },
    {
      name: "get",
      description: "Display one or many resources",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.fieldSelector,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.template,
        {
          name: ["-A", "--all-namespaces"],
          description:
            "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace",
        },
        {
          name: "--chunk-size",
          requiresSeparator: true,
          description:
            "Return large lists in chunks rather than all at once. Pass 0 to disable. This flag is beta and may change in the future",
          args: {},
        },
        {
          name: "--ignore-not-found",
          description:
            "If the requested object does not exist the command will return exit code 0",
        },
        {
          name: ["-L", "--label-columns"],
          insertValue: "--label-columns",
          description:
            "Accepts a comma separated list of labels that are going to be presented as columns. Names are case-sensitive. You can also use multiple flag options like -L label1 -L label2",
          args: {},
        },
        {
          name: "--no-headers",
          description:
            "When using the default or custom-column output format, don't print headers (default print headers)",
        },
        {
          name: "--output-watch-events",
          description:
            "Output watch event objects when --watch or --watch-only is used. Existing objects are output as initial ADDED events",
        },
        {
          name: "--raw",
          description:
            "Raw URI to request from the server.  Uses the transport specified by the kubeconfig file",
        },
        {
          name: "--server-print",
          description:
            "If true, have the server return the appropriate table output. Supports extension APIs and CRDs",
        },
        {
          name: "--show-kind",
          description:
            "If present, list the resource type for the requested object(s)",
        },
        {
          name: "--show-labels",
          description:
            "When printing, show all labels as the last column (default hide labels column)",
        },
        {
          name: "--sort-by",
          requiresSeparator: true,
          description:
            "If non-empty, sort list types using this field specification.  The field specification is expressed as a JSONPath expression (e.g. '{.metadata.name}'). The field in the API resource specified by this JSONPath expression must be an integer or a string",
          args: {},
        },
        {
          name: ["-w", "--watch"],
          description:
            "After listing/getting the requested object, watch for changes. Uninitialized objects are excluded if no object name is provided",
        },
        {
          name: "--watch-only",
          description:
            "Watch for changes to the requested object(s), without listing/getting first",
        },
      ],
    },
    {
      name: "kustomize",
      description:
        "Print a set of API resources generated from instructions in a kustomization.yaml file",
      args: {
        name: "DIR",
        template: "folders",
      },
      options: [
        sharedOpts.output,
        {
          name: "--allow-id-changes",
          description: "Enable changes to a resourceId",
        },
        {
          name: "--enable-alpha-plugins",
          description: "Enable kustomize plugins",
        },
        {
          name: "--enable-managedby-label",
          description: "Enable adding app.kubernetes.io/managed-by",
        },
        {
          name: ["--env", "-e"],
          description:
            "A list of environment variables to be used by functions",
          requiresSeparator: true,
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--load-restrictor",
          description:
            "If set to 'LoadRestrictionsNone', local kustomizations may load files from outside their root. This does, however, break the relocatability of the kustomization",
          requiresSeparator: true,
          args: {},
        },
        {
          name: "--mount",
          description: "A list of storage options read from the filesystem",
          requiresSeparator: true,
          args: {},
        },
        {
          name: "--network",
          description: "Enable network access for functions that declare it",
        },
        {
          name: "--network-name",
          description: "The docker network to run the container in",
          requiresSeparator: true,
          args: {},
        },
        {
          name: "--reorder",
          description:
            "Reorder the resources just before output. Use 'legacy' to apply a legacy reordering (Namespaces first, Webhooks last, etc). Use 'none' to suppress a final reordering",
          requiresSeparator: true,
        },
      ],
    },
    {
      name: "label",
      description: "Update the labels on a resource",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.dryRun,
        sharedOpts.fieldSelector,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.local,
        sharedOpts.output,
        sharedOpts.record,
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.template,
        sharedOpts.resourceVersion,
        {
          name: "--all",
          description:
            "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
        },
        {
          name: "--list",
          description: "If true, display the labels for a given resource",
        },
        {
          name: "--overwrite",
          description:
            "If true, allow labels to be overwritten, otherwise reject label updates that overwrite existing labels",
        },
      ],
    },
    {
      name: "logs",
      description:
        "Print the logs for a container in a pod or specified resource. If the pod has only one container, the container name is optional",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.selector,
        {
          name: "--all-containers",
          description: "Get all containers' logs in the pod(s)",
        },
        {
          name: ["-c", "--container"],
          description: "Print the logs of this container",
          args: {},
        },
        {
          name: ["-f", "--follow"],
          description: "Specify if the logs should be streamed",
        },
        {
          name: "--ignore-errors",
          description:
            "If watching / following pod logs, allow for any errors that occur to be non-fatal",
        },
        {
          name: "--insecure-skip-tls-verify-backend",
          description:
            "Skip verifying the identity of the kubelet that logs are requested from.  In theory, an attacker could provide invalid log content back. You might want to use this if your kubelet serving certificates have expired",
        },
        {
          name: "--limit-bytes",
          requiresSeparator: true,
          description: "Maximum bytes of logs to return. Defaults to no limit",
          args: {},
        },
        {
          name: "--max-log-requests",
          requiresSeparator: true,
          description:
            "Specify maximum number of concurrent logs to follow when using by a selector. Defaults to 5",
          args: {},
        },
        {
          name: "--pod-running-timeout",
          requiresSeparator: true,
          description:
            "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
          args: {},
        },
        {
          name: "--prefix",
          description:
            "Prefix each log line with the log source (pod name and container name)",
        },
        {
          name: ["-p", "--previous"],
          description:
            "If true, print the logs for the previous instance of the container in a pod if it exists",
        },
        {
          name: "--since",
          requiresSeparator: true,
          description:
            "Only return logs newer than a relative duration like 5s, 2m, or 3h. Defaults to all logs. Only one of since-time / since may be used",
          args: {},
        },
        {
          name: "--since-time",
          requiresSeparator: true,
          description:
            "Only return logs after a specific date (RFC3339). Defaults to all logs. Only one of since-time / since may be used",
          args: {},
        },
        {
          name: "--tail",
          requiresSeparator: true,
          description:
            "Lines of recent log file to display. Defaults to -1 with no selector, showing all log lines otherwise 10, if a selector is provided",
          args: {},
        },
        {
          name: "--timestamps",
          description: "Include timestamps on each line in the log output",
        },
      ],
    },
    {
      name: "patch",
      description:
        "Update field(s) of a resource using strategic merge patch, a JSON merge patch, or a JSON patch",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.dryRun,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.local,
        sharedOpts.output,
        sharedOpts.record,
        sharedOpts.recursive,
        sharedOpts.template,
        {
          name: ["-p", "--patch"],
          description: "The patch to be applied to the resource JSON file",
          args: {},
        },
        {
          name: "--type",
          requiresSeparator: true,
          description:
            "The type of patch being provided; one of [json merge strategic]",
          args: {
            suggestions: ["json", "merge", "strategic"],
          },
        },
      ],
    },
    {
      name: "plugin",
      description: "Provides utilities for interacting with plugins",
    },
    {
      name: "port-forward",
      description:
        "Forward one or more local ports to a pod. This command requires the node to have 'socat' installed",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
        {
          name: "[LOCAL_PORT:REMOTE_PORT]",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: "--address",
          description:
            "Addresses to listen on (comma separated). Only accepts IP addresses or localhost as a value. When localhost is supplied, kubectl will try to bind on both 127.0.0.1 and ::1 and will fail if neither of these addresses are available to bind",
          args: {},
        },
        {
          name: "--pod-running-timeout",
          requiresSeparator: true,
          description:
            "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
          args: {},
        },
      ],
    },
    {
      name: "proxy",
      description:
        "Creates a proxy server or application-level gateway between localhost and the Kubernetes API Server. It also allows serving static content over specified HTTP path. All incoming data enters through one port and gets forwarded to the remote kubernetes API Server port, except for the path matching the static content path",
      options: [
        {
          name: "--accept-hosts",
          requiresSeparator: true,
          description:
            "Regular expression for hosts that the proxy should accept",
          args: {},
        },
        {
          name: "--accept-paths",
          requiresSeparator: true,
          description:
            "Regular expression for paths that the proxy should accept",
          args: {},
        },
        {
          name: "--address",
          requiresSeparator: true,
          description: "The IP address on which to serve on",
          args: {},
        },
        {
          name: "--api-prefix",
          requiresSeparator: true,
          description: "Prefix to serve the proxied API under",
          args: {},
        },
        {
          name: "--disable-filter",
          description:
            "If true, disable request filtering in the proxy. This is dangerous, and can leave you vulnerable to XSRF attacks, when used with an accessible port",
        },
        {
          name: "--keepalive",
          requiresSeparator: true,
          description:
            "Keepalive specifies the keep-alive period for an active network connection. Set to 0 to disable keepalive",
          args: {},
        },
        {
          name: ["-p", "--port"],

          requiresSeparator: true,
          description:
            "The port on which to run the proxy. Set to 0 to pick a random port",
          args: {},
        },
        {
          name: "--reject-methods",
          requiresSeparator: true,
          description:
            "Regular expression for HTTP methods that the proxy should reject (example --reject-methods='POST,PUT,PATCH')",
          args: {},
        },
        {
          name: "--reject-paths",
          requiresSeparator: true,
          description:
            "Regular expression for paths that the proxy should reject. Paths specified here will be rejected even accepted by --accept-paths",
          args: {},
        },
        {
          name: ["-u", "--unix-socket"],

          requiresSeparator: true,
          description: "Unix socket on which to run the proxy",
          args: {},
        },
        {
          name: ["-w", "--www"],

          requiresSeparator: true,
          description:
            "Also serve static files from the given directory under the specified prefix",
          args: {},
        },
        {
          name: ["-P", "--www-prefix"],

          requiresSeparator: true,
          description:
            "Prefix to serve static files under, if static file directory is specified",
          args: {},
        },
      ],
    },
    {
      name: "replace",
      description: "Replace a resource by filename or stdin",
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.dryRun,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.recursive,
        sharedOpts.template,
        {
          name: "--cascade",
          description:
            "If true, cascade the deletion of the resources managed by this resource (e.g. Pods created by a ReplicationController).  Default true",
        },
        {
          name: "--force",
          description:
            "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation",
        },
        {
          name: "--grace-period",
          requiresSeparator: true,
          description:
            "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion)",
          args: {},
        },
        {
          name: "--raw",
          requiresSeparator: true,
          description:
            "Raw URI to PUT to the server.  Uses the transport specified by the kubeconfig file",
          args: {},
        },
        {
          name: "--save-config",
          description:
            "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
        },
        {
          name: "--timeout",
          requiresSeparator: true,
          description:
            "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object",
          args: {},
        },
        {
          name: "--validate",
          description:
            "If true, use a schema to validate the input before sending it",
        },
        {
          name: "--wait",
          description:
            "If true, wait for resources to be gone before returning. This waits for finalizers",
        },
      ],
    },
    {
      name: "rollout",
      description: "Manage the rollout of a resource",
      subcommands: [
        {
          name: "history",
          description: "View previous rollout revisions and configurations",
          // TODO: Use this or a more general resource generator?
          args: sharedArgs.listDeployments,
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.template,
            {
              name: "--revision",
              requiresSeparator: true,
              description:
                "See the details, including podTemplate of the revision specified",
              // Generator for revisions of resource specified in args
              args: {},
            },
          ],
        },
        {
          name: "pause",
          description: "Mark the provided resource as paused",
          args: sharedArgs.listDeployments,
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.template,
          ],
        },
        {
          name: "restart",
          description: "Restart a resource",
          args: sharedArgs.listDeployments,
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.template,
          ],
        },
        {
          name: "resume",
          description: "Resume a paused resource",
          args: sharedArgs.listDeployments,
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.recursive,
            sharedOpts.template,
          ],
        },
        {
          name: "status",
          description: "Show the status of the rollout",
          args: sharedArgs.listDeployments,
          options: [
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.recursive,
            {
              name: "--revision",
              requiresSeparator: true,
              description:
                "Pin to a specific revision for showing its status. Defaults to 0 (last revision)",
              args: {},
            },
            {
              name: "--timeout",
              requiresSeparator: true,
              description:
                "The length of time to wait before ending watch, zero means never. Any other values should contain a corresponding time unit (e.g. 1s, 2m, 3h)",
              args: {},
            },
            {
              name: ["-w", "--watch"],
              description: "Watch the status of the rollout until it's done",
            },
          ],
        },
        {
          name: "undo",
          description: "Rollback to a previous rollout",
          args: sharedArgs.listDeployments,
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.recursive,
            sharedOpts.dryRun,
            {
              name: "--to_revision",
              requiresSeparator: true,
              args: {},
            },
            {
              name: "--timeout",
              requiresSeparator: true,
              description:
                "The length of time to wait before ending watch, zero means never. Any other values should contain a corresponding time unit (e.g. 1s, 2m, 3h)",
              args: {},
            },
          ],
        },
      ],
    },
    {
      name: "run",
      description: "Create and run a particular image in a pod",
      args: {
        name: "NAME",
      },
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.filename,
        sharedOpts.dryRun,
        sharedOpts.kustomize,
        sharedOpts.recursive,
        sharedOpts.output,
        sharedOpts.record,
        sharedOpts.template,
        {
          name: "--annotations",
          requiresSeparator: true,
          description: "Annotations to apply to the pod",
          args: {},
        },
        {
          name: "--attach",
          description:
            "If true, wait for the Pod to start running, and then attach to the Pod as if 'kubectl attach ...' were called.  Default false, unless '-i/--stdin' is set, in which case the default is true. With '--restart=Never' the exit code of the container process is returned",
        },
        {
          name: "--cascade",
          description:
            'Must be "background", "orphan", or "foreground". Selects the deletion cascading strategy for the dependents (e.g. Pods created by a ReplicationController). Defaults to background',
          args: {
            suggestions: ["background", "orphan", "foreground"],
          },
        },
        {
          name: "--command",
          description:
            "If true and extra arguments are present, use them as the 'command' field in the container, rather than the 'args' field which is the default",
        },
        {
          name: "--env",
          requiresSeparator: true,
          description: "Environment variables to set in the container",
          args: {},
        },
        {
          name: "--expose",
          description:
            "If true, service is created for the container(s) which are run",
        },
        {
          name: "--force",
          description:
            "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation",
        },
        {
          name: "--grace-period",
          requiresSeparator: true,
          description:
            "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion)",
          args: {},
        },
        {
          name: "--hostport",
          requiresSeparator: true,
          description:
            "The host port mapping for the container port. To demonstrate a single-machine container",
          args: {},
        },
        {
          name: "--image",
          requiresSeparator: true,
          description: "The image for the container to run",
          args: {},
        },
        {
          name: "--image-pull-policy",
          description:
            "The image pull policy for the container. If left empty, this value will not be specified by the client and defaulted by the server",
          args: {},
        },
        {
          name: ["-l", "--labels"],

          requiresSeparator: true,
          description:
            "Comma separated labels to apply to the pod(s). Will override previous values",
          args: {},
        },
        {
          name: "--leave-stdin-open",
          description:
            "If the pod is started in interactive mode or with stdin, leave stdin open after the first attach completes. By default, stdin will be closed after the first attach completes",
        },
        {
          name: "--limits",
          requiresSeparator: true,
          description:
            "The resource requirement limits for this container.  For example, 'cpu=200m,memory=512Mi'.  Note that server side components may assign limits depending on the server configuration, such as limit ranges",
          args: {},
        },
        {
          name: "--overrides",
          requiresSeparator: true,
          description:
            "An inline JSON override for the generated object. If this is non-empty, it is used to override the generated object. Requires that the object supply a valid apiVersion field",
          args: {},
        },
        {
          name: "--pod-running-timeout",
          requiresSeparator: true,
          description:
            "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
          args: {},
        },
        {
          name: "--port",
          requiresSeparator: true,
          description: "The port that this container exposes",
          args: {},
        },
        {
          name: "--quiet",
          description: "If true, suppress prompt messages",
        },
        {
          name: "--requests",
          requiresSeparator: true,
          description:
            "The resource requirement requests for this container.  For example, 'cpu=100m,memory=256Mi'.  Note that server side components may assign requests depending on the server configuration, such as limit ranges",
          args: {},
        },
        {
          name: "--restart",
          requiresSeparator: true,
          description:
            "The restart policy for this Pod.  Legal values [Always, OnFailure, Never].  If set to 'Always' a deployment is created, if set to 'OnFailure' a job is created, if set to 'Never', a regular pod is created. For the latter two --replicas must be 1.  Default 'Always', for CronJobs `Never`",
          args: {
            suggestions: ["Always", "OnFailure", "Never"],
          },
        },
        {
          name: "--rm",
          description:
            "If true, delete resources created in this command for attached containers",
        },
        {
          name: "--save-config",
          description:
            "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future",
        },
        {
          name: "--serviceaccount",
          requiresSeparator: true,
          description: "Service account to set in the pod spec",
          args: {},
        },
        {
          name: ["-i", "--stdin"],
          description:
            "Keep stdin open on the container(s) in the pod, even if nothing is attached",
        },
        {
          name: "--timeout",
          requiresSeparator: true,
          description:
            "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object",
          args: {},
        },
        {
          name: ["-t", "--tty"],
          description: "Allocated a TTY for each container in the pod",
        },
        {
          name: "--wait",
          description:
            "If true, wait for resources to be gone before returning. This waits for finalizers",
        },
      ],
    },
    {
      name: "scale",
      description:
        "Set a new size for a Deployment, ReplicaSet, Replication Controller, or StatefulSet",
      args: [
        sharedArgs.typeOrTypeSlashName,
        sharedArgs.resourceSuggestionsFromResourceType,
      ],
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.filename,
        sharedOpts.kustomize,
        sharedOpts.output,
        sharedOpts.recursive,
        sharedOpts.record,
        sharedOpts.resourceVersion,
        sharedOpts.selector,
        sharedOpts.template,
        sharedOpts.dryRun,
        {
          name: "--all",
          description:
            "Select all resources in the namespace of the specified resource types",
        },
        {
          name: "--current-replicas",
          requiresSeparator: true,
          description:
            "Precondition for current size. Requires that the current size of the resource match this value in order to scale",
          args: {},
        },
        {
          name: "--replicas",
          requiresSeparator: true,
          description: "The new desired number of replicas. Required",
          args: {},
        },
        {
          name: "--timeout",
          description:
            "The length of time to wait before giving up on a scale operation, zero means don't wait. Any other values should contain a corresponding time unit (e.g. 1s, 2m, 3h)",
          args: {},
        },
      ],
    },
    {
      name: "set",
      description: "Configure application resources",
      subcommands: [
        {
          name: "env",
          description: "Update environment variables on a pod template",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
            {
              name: "KEY=VALUE",
              isVariadic: true,
            },
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.local,
            sharedOpts.recursive,
            sharedOpts.selector,
            sharedOpts.template,
            {
              name: "--all",
              description:
                "If true, select all resources in the namespace of the specified resource types",
            },
            {
              name: ["-c", "--containers"],

              requiresSeparator: true,
              description:
                "The names of containers in the selected pod templates to change - may use wildcards",
              args: {},
            },
            {
              name: ["-e", "--env"],

              requiresSeparator: true,
              description:
                "Specify a key-value pair for an environment variable to set into each container",
              args: {},
            },
            {
              name: "--from",
              requiresSeparator: true,
              description:
                "The name of a resource from which to inject environment variables",
              args: {},
            },
            {
              name: "--keys",
              requiresSeparator: true,
              description:
                "Comma-separated list of keys to import from specified resource",
              args: {},
            },
            {
              name: "--list",
              description:
                "If true, display the environment and any changes in the standard format. this flag will removed when we have kubectl view env",
            },
            {
              name: "--overwrite",
              description:
                "If true, allow environment to be overwritten, otherwise reject updates that overwrite existing environment",
            },
            {
              name: "--prefix",
              description: "Prefix to append to variable names",
              args: {},
            },
            {
              name: "--resolve",
              description:
                "If true, show secret or configmap references when listing variables",
            },
          ],
        },
        {
          name: "image",
          description: "Update existing container image(s) of resources",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
            {
              name: "CONTAINER_NAME=IMAGE_NAME",
              isVariadic: true,
            },
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.local,
            sharedOpts.recursive,
            sharedOpts.selector,
            sharedOpts.template,
            sharedOpts.record,
            {
              name: "--all",
              description:
                "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
            },
          ],
        },
        {
          name: "resources",
          description:
            "Specify compute resource requirements (cpu, memory) for any resource that defines a pod template.  If a pod is successfully scheduled, it is guaranteed the amount of resource requested, but may burst up to its specified limits",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.local,
            sharedOpts.recursive,
            sharedOpts.selector,
            sharedOpts.template,
            sharedOpts.record,
            {
              name: "--all",
              description:
                "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
            },
            {
              name: ["-c", "--containers"],

              requiresSeparator: true,
              description:
                "The names of containers in the selected pod templates to change, all containers are selected by default - may use wildcards",
              args: {},
            },
            {
              name: "--limits",
              requiresSeparator: true,
              description:
                "The resource requirement requests for this container.  For example, 'cpu=100m,memory=256Mi'.  Note that server side components may assign requests depending on the server configuration, such as limit ranges",
              args: {},
            },
            {
              name: "--requests",
              requiresSeparator: true,
              description:
                "The resource requirement requests for this container.  For example, 'cpu=100m,memory=256Mi'.  Note that server side components may assign requests depending on the server configuration, such as limit ranges",
              args: {},
            },
          ],
        },
        {
          name: "selector",
          description:
            "Set the selector on a resource. Note that the new selector will overwrite the old selector if the resource had one prior to the invocation of 'set selector'",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
            {
              name: "EXPRESSIONS",
            },
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.local,
            sharedOpts.recursive,
            sharedOpts.template,
            sharedOpts.record,
            sharedOpts.resourceVersion,
            {
              name: "--all",
              description:
                "Select all resources in the namespace of the specified resource types",
              args: {},
            },
          ],
        },
        {
          name: "serviceaccount",
          description: "Update ServiceAccount of pod template resources",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.local,
            sharedOpts.recursive,
            sharedOpts.template,
            sharedOpts.record,
            {
              name: "--all",
              description:
                "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
            },
          ],
        },
        {
          // TODO: Check this, I think the docs are wrong...
          name: "subject",
          description:
            "Update User, Group or ServiceAccount in a RoleBinding/ClusterRoleBinding",
          args: [
            sharedArgs.typeOrTypeSlashName,
            sharedArgs.resourceSuggestionsFromResourceType,
          ],
          options: [
            sharedOpts.allowMissingTemplateKeys,
            sharedOpts.dryRun,
            sharedOpts.filename,
            sharedOpts.kustomize,
            sharedOpts.output,
            sharedOpts.local,
            sharedOpts.recursive,
            sharedOpts.template,
            sharedOpts.record,
            {
              name: "--all",
              description:
                "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
            },
            {
              name: "--group",
              requiresSeparator: true,
              description: "Groups to bind to the role",
              args: {},
            },
            {
              name: "--serviceaccount",
              requiresSeparator: true,
              description: "Service accounts to bind to the role",
              args: {},
            },
          ],
        },
      ],
    },
    {
      name: "taint",
      description: "Update the taints on one or more nodes",
      args: sharedArgs.listNodes,
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.dryRun,
        sharedOpts.output,
        sharedOpts.selector,
        sharedOpts.template,
        {
          name: "--all",
          description: "Select all nodes in the cluster",
        },
        {
          name: "--overwrite",
          description:
            "If true, allow taints to be overwritten, otherwise reject taint updates that overwrite existing taints",
        },
        {
          name: "--validate",
          description:
            "If true, use a schema to validate the input before sending it",
        },
      ],
    },
    {
      name: "top",
      description: "Display Resource (CPU/Memory/Storage) usage",
    },
    {
      name: "uncordon",
      description: "Mark node as schedulable",
      args: sharedArgs.listNodes,
      options: [sharedOpts.dryRun, sharedOpts.selector],
    },
    {
      name: "version",
      description:
        "Print the client and server version information for the current context",
      options: [
        sharedOpts.output,
        {
          name: "--client",
          description:
            "If true, shows client version only (no server required)",
        },
      ],
    },
    {
      name: "wait",
      description:
        "Experimental: Wait for a specific condition on one or many resources",
      // TODO: Args
      args: {},
      options: [
        sharedOpts.allowMissingTemplateKeys,
        sharedOpts.fieldSelector,
        sharedOpts.filename,
        sharedOpts.local,
        sharedOpts.output,
        sharedOpts.recursive,
        sharedOpts.selector,
        sharedOpts.template,
        {
          name: "--all",
          description:
            "Select all resources in the namespace of the specified resource types",
        },
        {
          name: ["-A", "--all-namespaces"],
          description:
            "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace",
          args: {},
        },
        {
          name: "--for",
          requiresSeparator: true,
          description:
            "The condition to wait on: [delete|condition=condition-name]",
          args: {},
        },
        {
          name: "--timeout",
          requiresSeparator: true,
          description:
            "The length of time to wait before giving up.  Zero means check once and don't wait, negative means wait for a week",
          args: {},
        },
      ],
    },
  ],
  options: [
    {
      name: ["-n", "--namespace"],
      args: {
        name: "namespace",
      },
      description: "If present, the namespace scope for this CLI request",
    },
  ],
};

export default completionSpec;
