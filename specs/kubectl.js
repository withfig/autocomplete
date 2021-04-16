// TODO: Handle if not connected to a k8s cluster
var sharedArgs = {
    resourcesArg: {
        name: "Resource Type",
        generators: {
            script: "kubectl api-resources -o name",
            splitOn: "\n",
        },
    },
    runningPodsArg: {
        name: "Running Pods",
        generators: {
            script: "kubectl get pods --field-selector=status.phase=Running -o name",
            splitOn: "\n",
        },
    },
    resourceSuggestionsFromResourceType: {
        name: "Resource",
        generators: {
            script: function (context) {
                var resourceType = context[context.length - 2];
                return "kubectl get " + resourceType + " -o custom-columns=:.metadata.name";
            },
            splitOn: "\n",
        },
    },
    listKubeConfContexts: {
        name: "Context",
        generators: {
            script: function (context) {
                console.log(context);
                if (context.includes("--kubeconfig")) {
                    var index = context.indexOf("--kubeconfig");
                    return "kubectl config --kubeconfig=" + context[index + 1] + " get-contexts -o name";
                }
                return "kubectl config get-contexts -o name";
            },
            splitOn: "\n",
        },
    },
    listDeployments: {
        name: "Deployments",
        generators: {
            script: "kubectl get deployments.apps -o name",
            splitOn: "\n",
        },
    },
};
var completionSpec = {
    name: "kubectl",
    description: "",
    subcommands: [
        {
            name: "alpha",
            description: "These commands correspond to alpha features that are not enabled in Kubernetes clusters by default.",
            options: [],
            subcommands: [
                {
                    name: "debug",
                    description: "Tools for debugging Kubernetes resources",
                    options: [
                        {
                            name: ["--arguments-only"],
                            description: "If specified, everything after -- will be passed to the new container as Args instead of Command.",
                            args: {},
                        },
                        {
                            name: ["--attach"],
                            description: "If true, wait for the Pod to start running, and then attach to the Pod as if 'kubectl attach ...' were called.  Default false, unless '-i/--stdin' is set, in which case the default is true.",
                            args: {},
                        },
                        {
                            name: ["--container"],
                            description: "Container name to use for debug container.",
                            args: {},
                        },
                        {
                            name: ["--env"],
                            description: "Environment variables to set in the container.",
                            args: {},
                        },
                        {
                            name: ["--image"],
                            description: "Container image to use for debug container.",
                            args: {},
                        },
                        {
                            name: ["--image-pull-policy"],
                            description: "The image pull policy for the container.",
                            args: {},
                        },
                        {
                            name: ["--quiet"],
                            description: "If true, suppress prompt messages.",
                            args: {},
                        },
                        {
                            name: ["-i", "--stdin"],
                            description: "Keep stdin open on the container(s) in the pod, even if nothing is attached.",
                            args: {},
                        },
                        {
                            name: ["--target"],
                            description: "Target processes in this container name.",
                            args: {},
                        },
                        {
                            name: ["-t", "--tty"],
                            description: "Allocated a TTY for each container in the pod.",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
            ],
        },
        {
            name: "annotate",
            description: "Update the annotations on one or more resources",
            args: [
                sharedArgs.resourcesArg,
                {
                    name: "KEY=VAL",
                    variadic: true,
                },
            ],
            options: [
                {
                    name: ["--all"],
                    description: "Select all resources, including uninitialized ones, in the namespace of the specified resource types.",
                    args: {},
                },
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["--dry-run"],
                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                    args: {},
                },
                {
                    name: ["--field-selector"],
                    description: "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type.",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "Filename, directory, or URL to files identifying the resource to update the annotation",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["--local"],
                    description: "If true, annotation will NOT contact api-server but run locally.",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                    args: {},
                },
                {
                    name: ["--overwrite"],
                    description: "If true, allow annotations to be overwritten, otherwise reject annotation updates that overwrite existing annotations.",
                    args: {},
                },
                {
                    name: ["--record"],
                    description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["--resource-version"],
                    description: "If non-empty, the annotation update will only succeed if this is the current resource-version for the object. Only valid when specifying a single resource.",
                    args: {},
                },
                {
                    name: ["-l", "--selector"],
                    description: "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2).",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "api-resources",
            description: "Print the supported API resources on the server",
            options: [
                {
                    name: ["--api-group"],
                    description: "Limit to resources in the specified API group.",
                    args: {},
                },
                {
                    name: ["--cached"],
                    description: "Use the cached list of resources if available.",
                    args: {},
                },
                {
                    name: ["--namespaced"],
                    description: "If false, non-namespaced resources will be returned, otherwise returning namespaced resources by default.",
                    args: {},
                },
                {
                    name: ["--no-headers"],
                    description: "When using the default or custom-column output format, don't print headers (default print headers).",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: wide|name.",
                    args: {},
                },
                {
                    name: ["--sort-by"],
                    description: "If non-empty, sort nodes list using specified field. The field can be either 'name' or 'kind'.",
                    args: {},
                },
                {
                    name: ["--verbs"],
                    description: "Limit to resources that support the specified verbs.",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "api-versions",
            description: 'Print the supported API versions on the server, in the form of "group/version"',
            options: [],
            subcommands: [],
        },
        {
            name: "apply",
            description: "Apply a configuration to a resource by filename or stdin. The resource name must be specified. This resource will be created if it doesn't exist yet. To use 'apply', always create the resource initially with either 'apply' or 'create --save-config'.",
            options: [
                {
                    name: ["--all"],
                    description: "Select all resources in the namespace of the specified resource types.",
                    args: {},
                },
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["--cascade"],
                    description: "If true, cascade the deletion of the resources managed by this resource (e.g. Pods created by a ReplicationController).  Default true.",
                    args: {},
                },
                {
                    name: ["--dry-run"],
                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                    args: {},
                },
                {
                    name: ["--field-manager"],
                    description: "Name of the manager used to track field ownership.",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "that contains the configuration to apply",
                    args: {
                        template: "filepaths",
                    },
                },
                {
                    name: ["--force"],
                    description: "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation.",
                    args: {},
                },
                {
                    name: ["--force-conflicts"],
                    description: "If true, server-side apply will force the changes against conflicts.",
                    args: {},
                },
                {
                    name: ["--grace-period"],
                    description: "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion).",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process a kustomization directory. This flag can't be used together with -f or -R.",
                    args: {
                        template: "folders",
                    },
                },
                {
                    name: ["--openapi-patch"],
                    description: "If true, use openapi to calculate diff when the openapi presents and the resource can be found in the openapi spec. Otherwise, fall back to use baked-in types.",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                    args: {},
                },
                {
                    name: ["--overwrite"],
                    description: "Automatically resolve conflicts between the modified and live configuration by using values from the modified configuration",
                    args: {},
                },
                {
                    name: ["--prune"],
                    description: "Automatically delete resource objects, including the uninitialized ones, that do not appear in the configs and are created by either apply or create --save-config. Should be used with either -l or --all.",
                    args: {},
                },
                {
                    name: ["--prune-whitelist"],
                    description: "Overwrite the default whitelist with <group/version/kind> for --prune",
                    args: {},
                },
                {
                    name: ["--record"],
                    description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["-l", "--selector"],
                    description: "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
                    args: {},
                },
                {
                    name: ["--server-side"],
                    description: "If true, apply runs in the server instead of the client.",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
                {
                    name: ["--timeout"],
                    description: "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object",
                    args: {},
                },
                {
                    name: ["--validate"],
                    description: "If true, use a schema to validate the input before sending it",
                    args: {},
                },
                {
                    name: ["--wait"],
                    description: "If true, wait for resources to be gone before returning. This waits for finalizers.",
                    args: {},
                },
            ],
            subcommands: [
                {
                    name: "edit-last-applied",
                    description: "Edit the latest last-applied-configuration annotations of resources from the default editor.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files to use to edit the resource",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--record"],
                            description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--windows-line-endings"],
                            description: "Defaults to the line ending native to your platform.",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "set-last-applied",
                    description: "Set the latest last-applied-configuration annotations by setting it to match the contents of a file. This results in the last-applied-configuration being updated as though 'kubectl apply -f<file> ' was run, without updating any other parts of the object.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--create-annotation"],
                            description: "Will create 'last-applied-configuration' annotations if current objects doesn't have one",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files that contains the last-applied-configuration annotations",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
            ],
        },
        {
            name: "attach",
            description: "Attach to a process that is already running inside an existing container.",
            args: sharedArgs.runningPodsArg,
            options: [
                {
                    name: ["-c", "--container"],
                    description: "Container name. If omitted, the first container in the pod will be chosen",
                    args: {},
                },
                {
                    name: ["--pod-running-timeout"],
                    description: "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
                    args: {},
                },
                {
                    name: ["-i", "--stdin"],
                    description: "Pass stdin to the container",
                    args: {},
                },
                {
                    name: ["-t", "--tty"],
                    description: "Stdin is a TTY",
                    args: {},
                },
            ],
            subcommands: [
                {
                    name: "view-last-applied",
                    description: "View the latest last-applied-configuration annotations by type/name or file.",
                    options: [
                        {
                            name: ["--all"],
                            description: "Select all resources in the namespace of the specified resource types",
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files that contains the last-applied-configuration annotations",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. Must be one of yaml|json",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["-l", "--selector"],
                            description: "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
            ],
        },
        {
            name: "auth",
            description: "Inspect authorization",
            options: [],
            subcommands: [
                {
                    name: "can-i",
                    description: "Check whether an action is allowed.",
                    options: [
                        {
                            name: ["-A", "--all-namespaces"],
                            description: "If true, check the specified action in all namespaces.",
                            args: {},
                        },
                        {
                            name: ["--list"],
                            description: "If true, prints all allowed actions.",
                            args: {},
                        },
                        {
                            name: ["--no-headers"],
                            description: "If true, prints allowed actions without headers",
                            args: {},
                        },
                        {
                            name: ["-q", "--quiet"],
                            description: "If true, suppress output and just return the exit code.",
                            args: {},
                        },
                        {
                            name: ["--subresource"],
                            description: "SubResource such as pod/log or deployment/scale",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "reconcile",
                    description: "Reconciles rules for RBAC Role, RoleBinding, ClusterRole, and ClusterRole binding objects.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files identifying the resource to reconcile.",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--remove-extra-permissions"],
                            description: "If true, removes extra permissions added to roles",
                            args: {},
                        },
                        {
                            name: ["--remove-extra-subjects"],
                            description: "If true, removes extra subjects added to rolebindings",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
            ],
        },
        {
            name: "autoscale",
            description: "Creates an autoscaler that automatically chooses and sets the number of pods that run in a kubernetes cluster.",
            options: [
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["--cpu-percent"],
                    description: "The target average CPU utilization (represented as a percent of requested CPU) over all the pods. If it's not specified or negative, a default autoscaling policy will be used.",
                    args: {},
                },
                {
                    name: ["--dry-run"],
                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "Filename, directory, or URL to files identifying the resource to autoscale.",
                    args: {},
                },
                {
                    name: ["--generator"],
                    description: "The name of the API generator to use. Currently there is only 1 generator.",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["--max"],
                    description: "The upper limit for the number of pods that can be set by the autoscaler. Required.",
                    args: {},
                },
                {
                    name: ["--min"],
                    description: "The lower limit for the number of pods that can be set by the autoscaler. If it's not specified or negative, the server will apply a default value.",
                    args: {},
                },
                {
                    name: ["--name"],
                    description: "The name for the newly created object. If not specified, the name of the input resource will be used.",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                    args: {},
                },
                {
                    name: ["--record"],
                    description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["--save-config"],
                    description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "certificate",
            description: "Modify certificate resources.",
            options: [],
            subcommands: [
                {
                    name: "approve",
                    description: "Approve a certificate signing request.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files identifying the resource to update",
                            args: {},
                        },
                        {
                            name: ["--force"],
                            description: "Update the CSR even if it is already approved.",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "deny",
                    description: "Deny a certificate signing request.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files identifying the resource to update",
                            args: {},
                        },
                        {
                            name: ["--force"],
                            description: "Update the CSR even if it is already denied.",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
            ],
        },
        {
            name: "cluster-info",
            description: "Display addresses of the master and services with label kubernetes.io/cluster-service=true To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.",
            options: [],
            subcommands: [
                {
                    name: "dump",
                    description: "Dumps cluster info out suitable for debugging and diagnosing cluster problems.  By default, dumps everything to stdout. You can optionally specify a directory with --output-directory.  If you specify a directory, kubernetes will build a set of files in that directory.  By default only dumps things in the 'kube-system' namespace, but you can switch to a different namespace with the --namespaces flag, or specify --all-namespaces to dump all namespaces.",
                    options: [
                        {
                            name: ["-A", "--all-namespaces"],
                            description: "If true, dump all namespaces.  If true, --namespaces is ignored.",
                            args: {},
                        },
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--namespaces"],
                            description: "A comma separated list of namespaces to dump.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--output-directory"],
                            description: "Where to output the files.  If empty or '-' uses stdout, otherwise creates a directory hierarchy in that directory",
                            args: {},
                        },
                        {
                            name: ["--pod-running-timeout"],
                            description: "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
            ],
        },
        {
            name: "completion",
            description: "Output shell completion code for the specified shell (bash or zsh). The shell code must be evaluated to provide interactive completion of kubectl commands.  This can be done by sourcing it from the .bash_profile.",
            options: [],
            subcommands: [],
        },
        {
            name: "config",
            description: 'Modify kubeconfig files using subcommands like "kubectl config set current-context my-context"',
            options: [
                {
                    name: "--kubeconfig",
                    insertValue: "--kubeconfig=",
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
                    options: [],
                    subcommands: [],
                },
                {
                    name: "delete-cluster",
                    description: "Delete the specified cluster from the kubeconfig",
                    options: [],
                    subcommands: [],
                },
                {
                    name: "delete-context",
                    description: "Delete the specified context from the kubeconfig",
                    options: [],
                    subcommands: [],
                },
                {
                    name: "get-clusters",
                    description: "Display clusters defined in the kubeconfig.",
                    options: [],
                    subcommands: [],
                },
                {
                    name: "get-contexts",
                    description: "Displays one or many contexts from the kubeconfig file.",
                    options: [
                        {
                            name: ["--no-headers"],
                            description: "When using the default or custom-column output format, don't print headers (default print headers).",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: name",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "rename-context",
                    description: "Renames a context from the kubeconfig file.",
                    options: [],
                    subcommands: [],
                },
                {
                    name: "set-cluster",
                    description: "Sets a cluster entry in kubeconfig.",
                    options: [
                        {
                            name: ["--embed-certs"],
                            description: "embed-certs for the cluster entry in kubeconfig",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "set-context",
                    description: "Sets a context entry in kubeconfig",
                    args: sharedArgs.listKubeConfContexts,
                    options: [
                        {
                            name: ["--current"],
                            description: "Modify the current context",
                            args: {},
                        },
                        {
                            name: ["--cluster=cluster_nickname"],
                            insertValue: "--cluster=",
                            args: {
                                name: "cluster_nickname",
                            },
                        },
                        {
                            name: ["--user=user_nickname"],
                            insertValue: "--user=",
                            args: {
                                name: "user_nickname",
                            },
                        },
                        {
                            name: ["--namespace=namespace"],
                            insertValue: "--namespace=",
                            args: {
                                name: "namespace",
                            },
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "set-credentials",
                    description: "Sets a user entry in kubeconfig",
                    options: [
                        {
                            name: ["--client-certificate"],
                            description: "    --token=bearer_token",
                            args: {},
                        },
                        {
                            name: ["--username"],
                            description: '  # Set only the "client-key" field on the "cluster-admin"',
                            args: {},
                        },
                        {
                            name: ["--auth-provider"],
                            description: "Auth provider for the user entry in kubeconfig",
                            args: {},
                        },
                        {
                            name: ["--auth-provider-arg"],
                            description: "'key=value' arguments for the auth provider",
                            args: {},
                        },
                        {
                            name: ["--embed-certs"],
                            description: "Embed client cert/key for the user entry in kubeconfig",
                            args: {},
                        },
                        {
                            name: ["--exec-api-version"],
                            description: "API version of the exec credential plugin for the user entry in kubeconfig",
                            args: {},
                        },
                        {
                            name: ["--exec-arg"],
                            description: "New arguments for the exec credential plugin command for the user entry in kubeconfig",
                            args: {},
                        },
                        {
                            name: ["--exec-command"],
                            description: "Command for the exec credential plugin for the user entry in kubeconfig",
                            args: {},
                        },
                        {
                            name: ["--exec-env"],
                            description: "'key=value' environment values for the exec credential plugin",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "set",
                    description: "Sets an individual value in a kubeconfig file",
                    options: [
                        {
                            name: ["--set-raw-bytes"],
                            description: "When writing a []byte PROPERTY_VALUE, write the given string directly without base64 decoding.",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "unset",
                    description: "Unsets an individual value in a kubeconfig file",
                    subcommands: [],
                },
                {
                    name: "use-context",
                    description: "Sets the current-context in a kubeconfig file",
                    args: sharedArgs.listKubeConfContexts,
                    options: [],
                    subcommands: [],
                },
                {
                    name: "view",
                    description: "Display merged kubeconfig settings or a specified kubeconfig file",
                    options: [],
                },
            ],
        },
        {
            name: "convert",
            description: "Convert config files between different API versions. Both YAML and JSON formats are accepted.",
            options: [
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "Filename, directory, or URL to files to need to get converted.",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["--local"],
                    description: "If true, convert will NOT try to contact api-server but run locally.",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                    args: {},
                },
                {
                    name: ["--output-version"],
                    description: "Output the formatted object with the given group version (for ex: 'extensions/v1beta1').",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
                {
                    name: ["--validate"],
                    description: "If true, use a schema to validate the input before sending it",
                    args: {},
                },
            ],
            subcommands: [
                {
                    name: "unset",
                    description: "Unsets an individual value in a kubeconfig file",
                    options: [],
                    subcommands: [],
                },
                {
                    name: "use-context",
                    description: "Sets the current-context in a kubeconfig file",
                    options: [],
                    subcommands: [],
                },
                {
                    name: "view",
                    description: "Display merged kubeconfig settings or a specified kubeconfig file.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--flatten"],
                            description: "Flatten the resulting kubeconfig file into self-contained output (useful for creating portable kubeconfig files)",
                            args: {},
                        },
                        {
                            name: ["--merge"],
                            description: "Merge the full hierarchy of kubeconfig files",
                            args: {},
                        },
                        {
                            name: ["--minify"],
                            description: "Remove all information not used by current-context from the output",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--raw"],
                            description: "Display raw byte data",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
            ],
        },
        {
            name: "cordon",
            description: "Mark node as unschedulable.",
            options: [
                {
                    name: ["--dry-run"],
                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                    args: {},
                },
                {
                    name: ["-l", "--selector"],
                    description: "Selector (label query) to filter on",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "cp",
            description: "Copy files and directories to and from containers.",
            options: [
                {
                    name: ["-c", "--container"],
                    description: "Container name. If omitted, the first container in the pod will be chosen",
                    args: {},
                },
                {
                    name: ["--no-preserve"],
                    description: "The copied file/directory's ownership and permissions will not be preserved in the container",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "create",
            description: "Create a resource from a file or from stdin.",
            options: [
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["--dry-run"],
                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                    args: {},
                },
                {
                    name: ["--edit"],
                    description: "Edit the API resource before creating",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "Filename, directory, or URL to files to use to create the resource",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                    args: {},
                },
                {
                    name: ["--raw"],
                    description: "Raw URI to POST to the server.  Uses the transport specified by the kubeconfig file.",
                    args: {},
                },
                {
                    name: ["--record"],
                    description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["--save-config"],
                    description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                    args: {},
                },
                {
                    name: ["-l", "--selector"],
                    description: "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
                {
                    name: ["--validate"],
                    description: "If true, use a schema to validate the input before sending it",
                    args: {},
                },
                {
                    name: ["--windows-line-endings"],
                    description: "Only relevant if --edit=true. Defaults to the line ending native to your platform.",
                    args: {},
                },
            ],
            subcommands: [
                {
                    name: "clusterrole",
                    description: "Create a ClusterRole.",
                    options: [
                        {
                            name: ["--aggregation-rule"],
                            description: "An aggregation label selector for combining ClusterRoles.",
                            args: {},
                        },
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["--non-resource-url"],
                            description: "A partial url that user should have access to.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--resource"],
                            description: "Resource that the rule applies to",
                            args: {},
                        },
                        {
                            name: ["--resource-name"],
                            description: "Resource in the white list that the rule applies to, repeat this flag for multiple items",
                            args: {},
                        },
                        {
                            name: ["--save-config"],
                            description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--validate"],
                            description: "If true, use a schema to validate the input before sending it",
                            args: {},
                        },
                        {
                            name: ["--verb"],
                            description: "Verb that applies to the resources contained in the rule",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "clusterrolebinding",
                    description: "Create a ClusterRoleBinding for a particular ClusterRole.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--clusterrole"],
                            description: "ClusterRole this ClusterRoleBinding should reference",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["--group"],
                            description: "Groups to bind to the clusterrole",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--save-config"],
                            description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                            args: {},
                        },
                        {
                            name: ["--serviceaccount"],
                            description: "Service accounts to bind to the clusterrole, in the format <namespace>:<name>",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--validate"],
                            description: "If true, use a schema to validate the input before sending it",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "configmap",
                    description: "Create a configmap based on a file, directory, or specified literal value.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--append-hash"],
                            description: "Append a hash of the configmap to its name.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["--from-env-file"],
                            description: "Specify the path to a file to read lines of key=val pairs to create a configmap (i.e. a Docker .env file).",
                            args: {},
                        },
                        {
                            name: ["--from-file"],
                            description: "Key file can be specified using its file path, in which case file basename will be used as configmap key, or optionally with a key and file path, in which case the given key will be used.  Specifying a directory will iterate each named file in the directory whose basename is a valid configmap key.",
                            args: {},
                        },
                        {
                            name: ["--from-literal"],
                            description: "Specify a key and literal value to insert in configmap (i.e. mykey=somevalue)",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--save-config"],
                            description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--validate"],
                            description: "If true, use a schema to validate the input before sending it",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "cronjob",
                    description: "Create a cronjob with the specified name.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["--image"],
                            description: "Image name to run.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--restart"],
                            description: "job's restart policy. supported values: OnFailure, Never",
                            args: {},
                        },
                        {
                            name: ["--save-config"],
                            description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                            args: {},
                        },
                        {
                            name: ["--schedule"],
                            description: "A schedule in the Cron format the job should be run with.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--validate"],
                            description: "If true, use a schema to validate the input before sending it",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "deployment",
                    description: "Create a deployment with the specified name.",
                    args: {
                        name: "NAME",
                    },
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["--image"],
                            description: "Image name to run.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--save-config"],
                            description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--validate"],
                            description: "If true, use a schema to validate the input before sending it",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "job",
                    description: "Create a job with the specified name.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["--from"],
                            description: "The name of the resource to create a Job from (only cronjob is supported).",
                            args: {},
                        },
                        {
                            name: ["--image"],
                            description: "Image name to run.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--save-config"],
                            description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--validate"],
                            description: "If true, use a schema to validate the input before sending it",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "namespace",
                    description: "Create a namespace with the specified name.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--save-config"],
                            description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--validate"],
                            description: "If true, use a schema to validate the input before sending it",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "poddisruptionbudget",
                    description: "Create a pod disruption budget with the specified name, selector, and desired minimum available pods",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["--max-unavailable"],
                            description: "The maximum number or percentage of unavailable pods this budget requires.",
                            args: {},
                        },
                        {
                            name: ["--min-available"],
                            description: "The minimum number or percentage of available pods this budget requires.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--save-config"],
                            description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                            args: {},
                        },
                        {
                            name: ["--selector"],
                            description: "A label selector to use for this budget. Only equality-based selector requirements are supported.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--validate"],
                            description: "If true, use a schema to validate the input before sending it",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "priorityclass",
                    description: "Create a priorityclass with the specified name, value, globalDefault and description",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--description"],
                            description: "description is an arbitrary string that usually provides guidelines on when this priority class should be used.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["--global-default"],
                            description: "global-default specifies whether this PriorityClass should be considered as the default priority.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--preemption-policy"],
                            description: "preemption-policy is the policy for preempting pods with lower priority.",
                            args: {},
                        },
                        {
                            name: ["--save-config"],
                            description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--validate"],
                            description: "If true, use a schema to validate the input before sending it",
                            args: {},
                        },
                        {
                            name: ["--value"],
                            description: "the value of this priority class.",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "quota",
                    description: "Create a resourcequota with the specified name, hard limits and optional scopes",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["--hard"],
                            description: "A comma-delimited set of resource=quantity pairs that define a hard limit.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--save-config"],
                            description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                            args: {},
                        },
                        {
                            name: ["--scopes"],
                            description: "A comma-delimited set of quota scopes that must all match each object tracked by the quota.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--validate"],
                            description: "If true, use a schema to validate the input before sending it",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "role",
                    description: "Create a role with single rule.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--resource"],
                            description: "Resource that the rule applies to",
                            args: {},
                        },
                        {
                            name: ["--resource-name"],
                            description: "Resource in the white list that the rule applies to, repeat this flag for multiple items",
                            args: {},
                        },
                        {
                            name: ["--save-config"],
                            description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--validate"],
                            description: "If true, use a schema to validate the input before sending it",
                            args: {},
                        },
                        {
                            name: ["--verb"],
                            description: "Verb that applies to the resources contained in the rule",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "rolebinding",
                    description: "Create a RoleBinding for a particular Role or ClusterRole.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--clusterrole"],
                            description: "ClusterRole this RoleBinding should reference",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["--group"],
                            description: "Groups to bind to the role",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--role"],
                            description: "Role this RoleBinding should reference",
                            args: {},
                        },
                        {
                            name: ["--save-config"],
                            description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                            args: {},
                        },
                        {
                            name: ["--serviceaccount"],
                            description: "Service accounts to bind to the role, in the format <namespace>:<name>",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--validate"],
                            description: "If true, use a schema to validate the input before sending it",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "secret",
                    description: "Create a secret using specified subcommand.",
                    options: [],
                    subcommands: [
                        {
                            name: "docker-registry",
                            description: "Create a new secret for use with Docker registries.",
                            options: [
                                {
                                    name: ["--allow-missing-template-keys"],
                                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                                    args: {},
                                },
                                {
                                    name: ["--append-hash"],
                                    description: "Append a hash of the secret to its name.",
                                    args: {},
                                },
                                {
                                    name: ["--docker-email"],
                                    description: "Email for Docker registry",
                                    args: {},
                                },
                                {
                                    name: ["--docker-password"],
                                    description: "Password for Docker registry authentication",
                                    args: {},
                                },
                                {
                                    name: ["--docker-server"],
                                    description: "Server location for Docker registry",
                                    args: {},
                                },
                                {
                                    name: ["--docker-username"],
                                    description: "Username for Docker registry authentication",
                                    args: {},
                                },
                                {
                                    name: ["--dry-run"],
                                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                                    args: {},
                                },
                                {
                                    name: ["--from-file"],
                                    description: "Key files can be specified using their file path, in which case a default name will be given to them, or optionally with a name and file path, in which case the given name will be used.  Specifying a directory will iterate each named file in the directory that is a valid secret key.",
                                    args: {},
                                },
                                {
                                    name: ["-o", "--output"],
                                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                                    args: {},
                                },
                                {
                                    name: ["--save-config"],
                                    description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                                    args: {},
                                },
                                {
                                    name: ["--template"],
                                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                                    args: {},
                                },
                                {
                                    name: ["--validate"],
                                    description: "If true, use a schema to validate the input before sending it",
                                    args: {},
                                },
                            ],
                            subcommands: [],
                        },
                        {
                            name: "generic",
                            description: "Create a secret based on a file, directory, or specified literal value.",
                            options: [
                                {
                                    name: ["--allow-missing-template-keys"],
                                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                                    args: {},
                                },
                                {
                                    name: ["--append-hash"],
                                    description: "Append a hash of the secret to its name.",
                                    args: {},
                                },
                                {
                                    name: ["--dry-run"],
                                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                                    args: {},
                                },
                                {
                                    name: ["--from-env-file"],
                                    description: "Specify the path to a file to read lines of key=val pairs to create a secret (i.e. a Docker .env file).",
                                    args: {},
                                },
                                {
                                    name: ["--from-file"],
                                    description: "Key files can be specified using their file path, in which case a default name will be given to them, or optionally with a name and file path, in which case the given name will be used.  Specifying a directory will iterate each named file in the directory that is a valid secret key.",
                                    args: {},
                                },
                                {
                                    name: ["--from-literal"],
                                    description: "Specify a key and literal value to insert in secret (i.e. mykey=somevalue)",
                                    args: {},
                                },
                                {
                                    name: ["-o", "--output"],
                                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                                    args: {},
                                },
                                {
                                    name: ["--save-config"],
                                    description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                                    args: {},
                                },
                                {
                                    name: ["--template"],
                                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                                    args: {},
                                },
                                {
                                    name: ["--type"],
                                    description: "The type of secret to create",
                                    args: {},
                                },
                                {
                                    name: ["--validate"],
                                    description: "If true, use a schema to validate the input before sending it",
                                    args: {},
                                },
                            ],
                            subcommands: [],
                        },
                        {
                            name: "tls",
                            description: "Create a TLS secret from the given public/private key pair.",
                            options: [
                                {
                                    name: ["--allow-missing-template-keys"],
                                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                                    args: {},
                                },
                                {
                                    name: ["--append-hash"],
                                    description: "Append a hash of the secret to its name.",
                                    args: {},
                                },
                                {
                                    name: ["--cert"],
                                    description: "Path to PEM encoded public key certificate.",
                                    args: {},
                                },
                                {
                                    name: ["--dry-run"],
                                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                                    args: {},
                                },
                                {
                                    name: ["--key"],
                                    description: "Path to private key associated with given certificate.",
                                    args: {},
                                },
                                {
                                    name: ["-o", "--output"],
                                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                                    args: {},
                                },
                                {
                                    name: ["--save-config"],
                                    description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                                    args: {},
                                },
                                {
                                    name: ["--template"],
                                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                                    args: {},
                                },
                                {
                                    name: ["--validate"],
                                    description: "If true, use a schema to validate the input before sending it",
                                    args: {},
                                },
                            ],
                            subcommands: [],
                        },
                    ],
                },
                {
                    name: "service",
                    description: "Create a service using specified subcommand.",
                    options: [],
                    subcommands: [
                        {
                            name: "clusterip",
                            description: "Create a ClusterIP service with the specified name.",
                            options: [
                                {
                                    name: ["--allow-missing-template-keys"],
                                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                                    args: {},
                                },
                                {
                                    name: ["--clusterip"],
                                    description: "Assign your own ClusterIP or set to 'None' for a 'headless' service (no loadbalancing).",
                                    args: {},
                                },
                                {
                                    name: ["--dry-run"],
                                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                                    args: {},
                                },
                                {
                                    name: ["-o", "--output"],
                                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                                    args: {},
                                },
                                {
                                    name: ["--save-config"],
                                    description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                                    args: {},
                                },
                                {
                                    name: ["--tcp"],
                                    description: "Port pairs can be specified as '<port>:<targetPort>'.",
                                    args: {},
                                },
                                {
                                    name: ["--template"],
                                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                                    args: {},
                                },
                                {
                                    name: ["--validate"],
                                    description: "If true, use a schema to validate the input before sending it",
                                    args: {},
                                },
                            ],
                            subcommands: [],
                        },
                        {
                            name: "externalname",
                            description: "Create an ExternalName service with the specified name.",
                            options: [
                                {
                                    name: ["--allow-missing-template-keys"],
                                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                                    args: {},
                                },
                                {
                                    name: ["--dry-run"],
                                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                                    args: {},
                                },
                                {
                                    name: ["--external-name"],
                                    description: "External name of service",
                                    args: {},
                                },
                                {
                                    name: ["-o", "--output"],
                                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                                    args: {},
                                },
                                {
                                    name: ["--save-config"],
                                    description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                                    args: {},
                                },
                                {
                                    name: ["--tcp"],
                                    description: "Port pairs can be specified as '<port>:<targetPort>'.",
                                    args: {},
                                },
                                {
                                    name: ["--template"],
                                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                                    args: {},
                                },
                                {
                                    name: ["--validate"],
                                    description: "If true, use a schema to validate the input before sending it",
                                    args: {},
                                },
                            ],
                            subcommands: [],
                        },
                        {
                            name: "loadbalancer",
                            description: "Create a LoadBalancer service with the specified name.",
                            options: [
                                {
                                    name: ["--allow-missing-template-keys"],
                                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                                    args: {},
                                },
                                {
                                    name: ["--dry-run"],
                                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                                    args: {},
                                },
                                {
                                    name: ["-o", "--output"],
                                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                                    args: {},
                                },
                                {
                                    name: ["--save-config"],
                                    description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                                    args: {},
                                },
                                {
                                    name: ["--tcp"],
                                    description: "Port pairs can be specified as '<port>:<targetPort>'.",
                                    args: {},
                                },
                                {
                                    name: ["--template"],
                                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                                    args: {},
                                },
                                {
                                    name: ["--validate"],
                                    description: "If true, use a schema to validate the input before sending it",
                                    args: {},
                                },
                            ],
                            subcommands: [],
                        },
                        {
                            name: "nodeport",
                            description: "Create a NodePort service with the specified name.",
                            options: [
                                {
                                    name: ["--allow-missing-template-keys"],
                                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                                    args: {},
                                },
                                {
                                    name: ["--dry-run"],
                                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                                    args: {},
                                },
                                {
                                    name: ["--node-port"],
                                    description: "Port used to expose the service on each node in a cluster.",
                                    args: {},
                                },
                                {
                                    name: ["-o", "--output"],
                                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                                    args: {},
                                },
                                {
                                    name: ["--save-config"],
                                    description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                                    args: {},
                                },
                                {
                                    name: ["--tcp"],
                                    description: "Port pairs can be specified as '<port>:<targetPort>'.",
                                    args: {},
                                },
                                {
                                    name: ["--template"],
                                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                                    args: {},
                                },
                                {
                                    name: ["--validate"],
                                    description: "If true, use a schema to validate the input before sending it",
                                    args: {},
                                },
                            ],
                            subcommands: [],
                        },
                    ],
                },
                {
                    name: "serviceaccount",
                    description: "Create a service account with the specified name.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--save-config"],
                            description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--validate"],
                            description: "If true, use a schema to validate the input before sending it",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
            ],
        },
        {
            name: "delete",
            description: "Delete resources by filenames, stdin, resources and names, or by resources and label selector.",
            options: [
                {
                    name: ["--all"],
                    description: "Delete all resources, including uninitialized ones, in the namespace of the specified resource types.",
                    args: {},
                },
                {
                    name: ["-A", "--all-namespaces"],
                    description: "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace.",
                    args: {},
                },
                {
                    name: ["--cascade"],
                    description: "If true, cascade the deletion of the resources managed by this resource (e.g. Pods created by a ReplicationController).  Default true.",
                    args: {},
                },
                {
                    name: ["--dry-run"],
                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                    args: {},
                },
                {
                    name: ["--field-selector"],
                    description: "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type.",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "containing the resource to delete.",
                    args: {},
                },
                {
                    name: ["--force"],
                    description: "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation.",
                    args: {},
                },
                {
                    name: ["--grace-period"],
                    description: "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion).",
                    args: {},
                },
                {
                    name: ["--ignore-not-found"],
                    description: 'Treat "resource not found" as a successful delete. Defaults to "true" when --all is specified.',
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process a kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["--now"],
                    description: "If true, resources are signaled for immediate shutdown (same as --grace-period=1).",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: 'Output mode. Use "-o name" for shorter output (resource/name).',
                    args: {},
                },
                {
                    name: ["--raw"],
                    description: "Raw URI to DELETE to the server.  Uses the transport specified by the kubeconfig file.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["-l", "--selector"],
                    description: "Selector (label query) to filter on, not including uninitialized ones.",
                    args: {},
                },
                {
                    name: ["--timeout"],
                    description: "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object",
                    args: {},
                },
                {
                    name: ["--wait"],
                    description: "If true, wait for resources to be gone before returning. This waits for finalizers.",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "describe",
            description: "Show details of a specific resource or group of resources",
            args: [
                sharedArgs.resourcesArg,
                sharedArgs.resourceSuggestionsFromResourceType,
            ],
            options: [
                {
                    name: ["-A", "--all-namespaces"],
                    description: "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace.",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "Filename, directory, or URL to files containing the resource to describe",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["-l", "--selector"],
                    description: "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
                    args: {},
                },
                {
                    name: ["--show-events"],
                    description: "If true, display events related to the described object.",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "diff",
            description: "Diff configurations specified by filename or stdin between the current online configuration, and the configuration as it would be if applied.",
            options: [
                {
                    name: ["--field-manager"],
                    description: "Name of the manager used to track field ownership.",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "Filename, directory, or URL to files contains the configuration to diff",
                    args: {},
                },
                {
                    name: ["--force-conflicts"],
                    description: "If true, server-side apply will force the changes against conflicts.",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["--server-side"],
                    description: "If true, apply runs in the server instead of the client.",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "drain",
            description: "Drain node in preparation for maintenance.",
            options: [
                {
                    name: ["--delete-local-data"],
                    description: "Continue even if there are pods using emptyDir (local data that will be deleted when the node is drained).",
                    args: {},
                },
                {
                    name: ["--disable-eviction"],
                    description: "Force drain to use delete, even if eviction is supported. This will bypass checking PodDisruptionBudgets, use with caution.",
                    args: {},
                },
                {
                    name: ["--dry-run"],
                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                    args: {},
                },
                {
                    name: ["--force"],
                    description: "Continue even if there are pods not managed by a ReplicationController, ReplicaSet, Job, DaemonSet or StatefulSet.",
                    args: {},
                },
                {
                    name: ["--grace-period"],
                    description: "Period of time in seconds given to each pod to terminate gracefully. If negative, the default value specified in the pod will be used.",
                    args: {},
                },
                {
                    name: ["--ignore-daemonsets"],
                    description: "Ignore DaemonSet-managed pods.",
                    args: {},
                },
                {
                    name: ["--pod-selector"],
                    description: "Label selector to filter pods on the node",
                    args: {},
                },
                {
                    name: ["-l", "--selector"],
                    description: "Selector (label query) to filter on",
                    args: {},
                },
                {
                    name: ["--skip-wait-for-delete-timeout"],
                    description: "If pod DeletionTimestamp older than N seconds, skip waiting for the pod.  Seconds must be greater than 0 to skip.",
                    args: {},
                },
                {
                    name: ["--timeout"],
                    description: "The length of time to wait before giving up, zero means infinite",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "edit",
            description: "Edit a resource from the default editor.",
            options: [
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "Filename, directory, or URL to files to use to edit the resource",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                    args: {},
                },
                {
                    name: ["--output-patch"],
                    description: "Output the patch if the resource is edited.",
                    args: {},
                },
                {
                    name: ["--record"],
                    description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["--save-config"],
                    description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
                {
                    name: ["--validate"],
                    description: "If true, use a schema to validate the input before sending it",
                    args: {},
                },
                {
                    name: ["--windows-line-endings"],
                    description: "Defaults to the line ending native to your platform.",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "exec",
            description: "Execute a command in a container.",
            args: sharedArgs.runningPodsArg,
            options: [
                {
                    name: ["-c", "--container"],
                    description: "Container name. If omitted, the first container in the pod will be chosen",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "to use to exec into the resource",
                    args: {},
                },
                {
                    name: ["--pod-running-timeout"],
                    description: "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
                    args: {},
                },
                {
                    name: ["-i", "--stdin"],
                    description: "Pass stdin to the container",
                    args: {},
                },
                {
                    name: ["-t", "--tty"],
                    description: "Stdin is a TTY",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "explain",
            description: "List the fields for supported resources",
            args: sharedArgs.resourcesArg,
            options: [
                {
                    name: ["--api-version"],
                    description: "Get different explanations for particular API version",
                    args: {},
                },
                {
                    name: ["--recursive"],
                    description: "Print the fields of fields (Currently only 1 level deep)",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "expose",
            description: "Expose a resource as a new Kubernetes service.",
            options: [
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["--cluster-ip"],
                    description: "ClusterIP to be assigned to the service. Leave empty to auto-allocate, or set to 'None' to create a headless service.",
                    args: {},
                },
                {
                    name: ["--dry-run"],
                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                    args: {},
                },
                {
                    name: ["--external-ip"],
                    description: "Additional external IP address (not managed by Kubernetes) to accept for the service. If this IP is routed to a node, the service can be accessed by this IP in addition to its generated service IP.",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "Filename, directory, or URL to files identifying the resource to expose a service",
                    args: {},
                },
                {
                    name: ["--generator"],
                    description: "The name of the API generator to use. There are 2 generators: 'service/v1' and 'service/v2'. The only difference between them is that service port in v1 is named 'default', while it is left unnamed in v2. Default is 'service/v2'.",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["-l", "--labels"],
                    description: "Labels to apply to the service created by this call.",
                    args: {},
                },
                {
                    name: ["--load-balancer-ip"],
                    description: "IP to assign to the LoadBalancer. If empty, an ephemeral IP will be created and used (cloud-provider specific).",
                    args: {},
                },
                {
                    name: ["--name"],
                    description: "The name for the newly created object.",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                    args: {},
                },
                {
                    name: ["--overrides"],
                    description: "An inline JSON override for the generated object. If this is non-empty, it is used to override the generated object. Requires that the object supply a valid apiVersion field.",
                    args: {},
                },
                {
                    name: ["--port"],
                    description: "The port that the service should serve on. Copied from the resource being exposed, if unspecified",
                    args: {},
                },
                {
                    name: ["--protocol"],
                    description: "The network protocol for the service to be created. Default is 'TCP'.",
                    args: {},
                },
                {
                    name: ["--record"],
                    description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["--save-config"],
                    description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                    args: {},
                },
                {
                    name: ["--selector"],
                    description: "A label selector to use for this service. Only equality-based selector requirements are supported. If empty (the default) infer the selector from the replication controller or replica set.)",
                    args: {},
                },
                {
                    name: ["--session-affinity"],
                    description: "If non-empty, set the session affinity for the service to this; legal values: 'None', 'ClientIP'",
                    args: {},
                },
                {
                    name: ["--target-port"],
                    description: "Name or number for the port on the container that the service should direct traffic to. Optional.",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
                {
                    name: ["--type"],
                    description: "Type for this service: ClusterIP, NodePort, LoadBalancer, or ExternalName. Default is 'ClusterIP'.",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "get",
            description: "Display one or many resources",
            args: sharedArgs.resourcesArg,
            options: [
                {
                    name: ["-A", "--all-namespaces"],
                    description: "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace.",
                    args: {},
                },
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["--chunk-size"],
                    description: "Return large lists in chunks rather than all at once. Pass 0 to disable. This flag is beta and may change in the future.",
                    args: {},
                },
                {
                    name: ["--field-selector"],
                    description: "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type.",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "Filename, directory, or URL to files identifying the resource to get from a server.",
                    args: {
                        template: "filepaths",
                    },
                },
                {
                    name: ["--ignore-not-found"],
                    description: "If the requested object does not exist the command will return exit code 0.",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["-L", "--label-columns"],
                    description: "Accepts a comma separated list of labels that are going to be presented as columns. Names are case-sensitive. You can also use multiple flag options like -L label1 -L label2...",
                    args: {},
                },
                {
                    name: ["--no-headers"],
                    description: "When using the default or custom-column output format, don't print headers (default print headers).",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|wide|name|custom-columns=...|custom-columns-file=...|go-template=...|go-template-file=...|jsonpath=...|jsonpath-file=... See custom columns [http://kubernetes.io/docs/user-guide/kubectl-overview/#custom-columns], golang template [http://golang.org/pkg/text/template/#pkg-overview] and jsonpath template [http://kubernetes.io/docs/user-guide/jsonpath].",
                    args: {},
                },
                {
                    name: ["--output-watch-events"],
                    description: "Output watch event objects when --watch or --watch-only is used. Existing objects are output as initial ADDED events.",
                    args: {},
                },
                {
                    name: ["--raw"],
                    description: "Raw URI to request from the server.  Uses the transport specified by the kubeconfig file.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["-l", "--selector"],
                    description: "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
                    args: {},
                },
                {
                    name: ["--server-print"],
                    description: "If true, have the server return the appropriate table output. Supports extension APIs and CRDs.",
                    args: {},
                },
                {
                    name: ["--show-kind"],
                    description: "If present, list the resource type for the requested object(s).",
                    args: {},
                },
                {
                    name: ["--show-labels"],
                    description: "When printing, show all labels as the last column (default hide labels column)",
                    args: {},
                },
                {
                    name: ["--sort-by"],
                    description: "If non-empty, sort list types using this field specification.  The field specification is expressed as a JSONPath expression (e.g. '{.metadata.name}'). The field in the API resource specified by this JSONPath expression must be an integer or a string.",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
                {
                    name: ["-w", "--watch"],
                    description: "After listing/getting the requested object, watch for changes. Uninitialized objects are excluded if no object name is provided.",
                    args: {},
                },
                {
                    name: ["--watch-only"],
                    description: "Watch for changes to the requested object(s), without listing/getting first.",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "kustomize",
            description: "Print a set of API resources generated from instructions in a kustomization.yaml file.",
            options: [],
            subcommands: [],
        },
        {
            name: "label",
            description: "Update the labels on a resource.",
            options: [
                {
                    name: ["--all"],
                    description: "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
                    args: {},
                },
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["--dry-run"],
                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                    args: {},
                },
                {
                    name: ["--field-selector"],
                    description: "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type.",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "Filename, directory, or URL to files identifying the resource to update the labels",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["--list"],
                    description: "If true, display the labels for a given resource.",
                    args: {},
                },
                {
                    name: ["--local"],
                    description: "If true, label will NOT contact api-server but run locally.",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                    args: {},
                },
                {
                    name: ["--overwrite"],
                    description: "If true, allow labels to be overwritten, otherwise reject label updates that overwrite existing labels.",
                    args: {},
                },
                {
                    name: ["--record"],
                    description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["--resource-version"],
                    description: "If non-empty, the labels update will only succeed if this is the current resource-version for the object. Only valid when specifying a single resource.",
                    args: {},
                },
                {
                    name: ["-l", "--selector"],
                    description: "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2).",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "logs",
            description: "Print the logs for a container in a pod or specified resource. If the pod has only one container, the container name is optional.",
            options: [
                {
                    name: ["--all-containers"],
                    description: "Get all containers' logs in the pod(s).",
                    args: {},
                },
                {
                    name: ["-c", "--container"],
                    description: "Print the logs of this container",
                    args: {},
                },
                {
                    name: ["-f", "--follow"],
                    description: "Specify if the logs should be streamed.",
                    args: {},
                },
                {
                    name: ["--ignore-errors"],
                    description: "If watching / following pod logs, allow for any errors that occur to be non-fatal",
                    args: {},
                },
                {
                    name: ["--insecure-skip-tls-verify-backend"],
                    description: "Skip verifying the identity of the kubelet that logs are requested from.  In theory, an attacker could provide invalid log content back. You might want to use this if your kubelet serving certificates have expired.",
                    args: {},
                },
                {
                    name: ["--limit-bytes"],
                    description: "Maximum bytes of logs to return. Defaults to no limit.",
                    args: {},
                },
                {
                    name: ["--max-log-requests"],
                    description: "Specify maximum number of concurrent logs to follow when using by a selector. Defaults to 5.",
                    args: {},
                },
                {
                    name: ["--pod-running-timeout"],
                    description: "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
                    args: {},
                },
                {
                    name: ["--prefix"],
                    description: "Prefix each log line with the log source (pod name and container name)",
                    args: {},
                },
                {
                    name: ["-p", "--previous"],
                    description: "If true, print the logs for the previous instance of the container in a pod if it exists.",
                    args: {},
                },
                {
                    name: ["-l", "--selector"],
                    description: "Selector (label query) to filter on.",
                    args: {},
                },
                {
                    name: ["--since"],
                    description: "Only return logs newer than a relative duration like 5s, 2m, or 3h. Defaults to all logs. Only one of since-time / since may be used.",
                    args: {},
                },
                {
                    name: ["--since-time"],
                    description: "Only return logs after a specific date (RFC3339). Defaults to all logs. Only one of since-time / since may be used.",
                    args: {},
                },
                {
                    name: ["--tail"],
                    description: "Lines of recent log file to display. Defaults to -1 with no selector, showing all log lines otherwise 10, if a selector is provided.",
                    args: {},
                },
                {
                    name: ["--timestamps"],
                    description: "Include timestamps on each line in the log output",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "patch",
            description: "Update field(s) of a resource using strategic merge patch, a JSON merge patch, or a JSON patch.",
            options: [
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["--dry-run"],
                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "Filename, directory, or URL to files identifying the resource to update",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["--local"],
                    description: "If true, patch will operate on the content of the file, not the server-side resource.",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                    args: {},
                },
                {
                    name: ["-p", "--patch"],
                    description: "The patch to be applied to the resource JSON file.",
                    args: {},
                },
                {
                    name: ["--record"],
                    description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
                {
                    name: ["--type"],
                    description: "The type of patch being provided; one of [json merge strategic]",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "plugin",
            description: "Provides utilities for interacting with plugins.",
            options: [],
            subcommands: [],
        },
        {
            name: "port-forward",
            description: "Forward one or more local ports to a pod. This command requires the node to have 'socat' installed.",
            options: [
                {
                    name: ["--address"],
                    description: "Addresses to listen on (comma separated). Only accepts IP addresses or localhost as a value. When localhost is supplied, kubectl will try to bind on both 127.0.0.1 and ::1 and will fail if neither of these addresses are available to bind.",
                    args: {},
                },
                {
                    name: ["--pod-running-timeout"],
                    description: "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "proxy",
            description: "Creates a proxy server or application-level gateway between localhost and the Kubernetes API Server. It also allows serving static content over specified HTTP path. All incoming data enters through one port and gets forwarded to the remote kubernetes API Server port, except for the path matching the static content path.",
            options: [
                {
                    name: ["--accept-hosts"],
                    description: "Regular expression for hosts that the proxy should accept.",
                    args: {},
                },
                {
                    name: ["--accept-paths"],
                    description: "Regular expression for paths that the proxy should accept.",
                    args: {},
                },
                {
                    name: ["--address"],
                    description: "The IP address on which to serve on.",
                    args: {},
                },
                {
                    name: ["--api-prefix"],
                    description: "Prefix to serve the proxied API under.",
                    args: {},
                },
                {
                    name: ["--disable-filter"],
                    description: "If true, disable request filtering in the proxy. This is dangerous, and can leave you vulnerable to XSRF attacks, when used with an accessible port.",
                    args: {},
                },
                {
                    name: ["--keepalive"],
                    description: "keepalive specifies the keep-alive period for an active network connection. Set to 0 to disable keepalive.",
                    args: {},
                },
                {
                    name: ["-p", "--port"],
                    description: "The port on which to run the proxy. Set to 0 to pick a random port.",
                    args: {},
                },
                {
                    name: ["--reject-methods"],
                    description: "Regular expression for HTTP methods that the proxy should reject (example --reject-methods='POST,PUT,PATCH'). ",
                    args: {},
                },
                {
                    name: ["--reject-paths"],
                    description: "Regular expression for paths that the proxy should reject. Paths specified here will be rejected even accepted by --accept-paths.",
                    args: {},
                },
                {
                    name: ["-u", "--unix-socket"],
                    description: "Unix socket on which to run the proxy.",
                    args: {},
                },
                {
                    name: ["-w", "--www"],
                    description: "Also serve static files from the given directory under the specified prefix.",
                    args: {},
                },
                {
                    name: ["-P", "--www-prefix"],
                    description: "Prefix to serve static files under, if static file directory is specified.",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "replace",
            description: "Replace a resource by filename or stdin.",
            options: [
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["--cascade"],
                    description: "If true, cascade the deletion of the resources managed by this resource (e.g. Pods created by a ReplicationController).  Default true.",
                    args: {},
                },
                {
                    name: ["--dry-run"],
                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "to use to replace the resource.",
                    args: {},
                },
                {
                    name: ["--force"],
                    description: "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation.",
                    args: {},
                },
                {
                    name: ["--grace-period"],
                    description: "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion).",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process a kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                    args: {},
                },
                {
                    name: ["--raw"],
                    description: "Raw URI to PUT to the server.  Uses the transport specified by the kubeconfig file.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["--save-config"],
                    description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
                {
                    name: ["--timeout"],
                    description: "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object",
                    args: {},
                },
                {
                    name: ["--validate"],
                    description: "If true, use a schema to validate the input before sending it",
                    args: {},
                },
                {
                    name: ["--wait"],
                    description: "If true, wait for resources to be gone before returning. This waits for finalizers.",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "rollout",
            description: "Manage the rollout of a resource.",
            options: [],
            subcommands: [
                {
                    name: "history",
                    description: "View previous rollout revisions and configurations.",
                    args: sharedArgs.listDeployments,
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files identifying the resource to get from a server.",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--revision"],
                            description: "See the details, including podTemplate of the revision specified",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "pause",
                    description: "Mark the provided resource as paused",
                    args: sharedArgs.listDeployments,
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files identifying the resource to get from a server.",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "restart",
                    description: "Restart a resource.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files identifying the resource to get from a server.",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "resume",
                    description: "Resume a paused resource",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files identifying the resource to get from a server.",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "status",
                    description: "Show the status of the rollout.",
                    args: sharedArgs.listDeployments,
                    options: [
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files identifying the resource to get from a server.",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--revision"],
                            description: "Pin to a specific revision for showing its status. Defaults to 0 (last revision).",
                            args: {},
                        },
                        {
                            name: ["--timeout"],
                            description: "The length of time to wait before ending watch, zero means never. Any other values should contain a corresponding time unit (e.g. 1s, 2m, 3h).",
                            args: {},
                        },
                        {
                            name: ["-w", "--watch"],
                            description: "Watch the status of the rollout until it's done.",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "undo",
                    description: "Rollback to a previous rollout.",
                    args: sharedArgs.listDeployments,
                    options: [
                        {
                            name: ["--to_revision=revision"],
                            insertValue: "--to_revision=",
                            args: {},
                        },
                        {
                            name: "--dry-run=strategy",
                            insertValue: "--dry-run=",
                            args: {
                                name: "Strategy",
                                suggestions: ["none", "client", "server"],
                            },
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files identifying the resource to get from a server.",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--timeout"],
                            description: "The length of time to wait before ending watch, zero means never. Any other values should contain a corresponding time unit (e.g. 1s, 2m, 3h).",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
            ],
        },
        {
            name: "run",
            description: "Create and run a particular image in a pod.",
            options: [
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["--attach"],
                    description: "If true, wait for the Pod to start running, and then attach to the Pod as if 'kubectl attach ...' were called.  Default false, unless '-i/--stdin' is set, in which case the default is true. With '--restart=Never' the exit code of the container process is returned.",
                    args: {},
                },
                {
                    name: ["--cascade"],
                    description: "If true, cascade the deletion of the resources managed by this resource (e.g. Pods created by a ReplicationController).  Default true.",
                    args: {},
                },
                {
                    name: ["--command"],
                    description: "If true and extra arguments are present, use them as the 'command' field in the container, rather than the 'args' field which is the default.",
                    args: {},
                },
                {
                    name: ["--dry-run"],
                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                    args: {},
                },
                {
                    name: ["--env"],
                    description: "Environment variables to set in the container.",
                    args: {},
                },
                {
                    name: ["--expose"],
                    description: "If true, service is created for the container(s) which are run",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "to use to replace the resource.",
                    args: {},
                },
                {
                    name: ["--force"],
                    description: "If true, immediately remove resources from API and bypass graceful deletion. Note that immediate deletion of some resources may result in inconsistency or data loss and requires confirmation.",
                    args: {},
                },
                {
                    name: ["--grace-period"],
                    description: "Period of time in seconds given to the resource to terminate gracefully. Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true (force deletion).",
                    args: {},
                },
                {
                    name: ["--hostport"],
                    description: "The host port mapping for the container port. To demonstrate a single-machine container.",
                    args: {},
                },
                {
                    name: ["--image"],
                    description: "The image for the container to run.",
                    args: {},
                },
                {
                    name: ["--image-pull-policy"],
                    description: "The image pull policy for the container. If left empty, this value will not be specified by the client and defaulted by the server",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process a kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["-l", "--labels"],
                    description: "Comma separated labels to apply to the pod(s). Will override previous values.",
                    args: {},
                },
                {
                    name: ["--leave-stdin-open"],
                    description: "If the pod is started in interactive mode or with stdin, leave stdin open after the first attach completes. By default, stdin will be closed after the first attach completes.",
                    args: {},
                },
                {
                    name: ["--limits"],
                    description: "The resource requirement limits for this container.  For example, 'cpu=200m,memory=512Mi'.  Note that server side components may assign limits depending on the server configuration, such as limit ranges.",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                    args: {},
                },
                {
                    name: ["--overrides"],
                    description: "An inline JSON override for the generated object. If this is non-empty, it is used to override the generated object. Requires that the object supply a valid apiVersion field.",
                    args: {},
                },
                {
                    name: ["--pod-running-timeout"],
                    description: "The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running",
                    args: {},
                },
                {
                    name: ["--port"],
                    description: "The port that this container exposes.",
                    args: {},
                },
                {
                    name: ["--quiet"],
                    description: "If true, suppress prompt messages.",
                    args: {},
                },
                {
                    name: ["--record"],
                    description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["--requests"],
                    description: "The resource requirement requests for this container.  For example, 'cpu=100m,memory=256Mi'.  Note that server side components may assign requests depending on the server configuration, such as limit ranges.",
                    args: {},
                },
                {
                    name: ["--restart"],
                    description: "The restart policy for this Pod.  Legal values [Always, OnFailure, Never].  If set to 'Always' a deployment is created, if set to 'OnFailure' a job is created, if set to 'Never', a regular pod is created. For the latter two --replicas must be 1.  Default 'Always', for CronJobs `Never`.",
                    args: {},
                },
                {
                    name: ["--rm"],
                    description: "If true, delete resources created in this command for attached containers.",
                    args: {},
                },
                {
                    name: ["--save-config"],
                    description: "If true, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future.",
                    args: {},
                },
                {
                    name: ["--serviceaccount"],
                    description: "Service account to set in the pod spec.",
                    args: {},
                },
                {
                    name: ["-i", "--stdin"],
                    description: "Keep stdin open on the container(s) in the pod, even if nothing is attached.",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
                {
                    name: ["--timeout"],
                    description: "The length of time to wait before giving up on a delete, zero means determine a timeout from the size of the object",
                    args: {},
                },
                {
                    name: ["-t", "--tty"],
                    description: "Allocated a TTY for each container in the pod.",
                    args: {},
                },
                {
                    name: ["--wait"],
                    description: "If true, wait for resources to be gone before returning. This waits for finalizers.",
                    args: {},
                },
            ],
            subcommands: [
                {
                    name: "undo",
                    description: "Rollback to a previous rollout.",
                    options: [
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files identifying the resource to get from a server.",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                        {
                            name: ["--to-revision"],
                            description: "The revision to rollback to. Default to 0 (last revision).",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
            ],
        },
        {
            name: "scale",
            description: "Set a new size for a Deployment, ReplicaSet, Replication Controller, or StatefulSet.",
            options: [
                {
                    name: ["--all"],
                    description: "Select all resources in the namespace of the specified resource types",
                    args: {},
                },
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["--current-replicas"],
                    description: "Precondition for current size. Requires that the current size of the resource match this value in order to scale.",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "Filename, directory, or URL to files identifying the resource to set a new size",
                    args: {},
                },
                {
                    name: ["-k", "--kustomize"],
                    description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                    args: {},
                },
                {
                    name: ["--record"],
                    description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["--replicas"],
                    description: "The new desired number of replicas. Required.",
                    args: {},
                },
                {
                    name: ["--resource-version"],
                    description: "Precondition for resource version. Requires that the current resource version match this value in order to scale.",
                    args: {},
                },
                {
                    name: ["-l", "--selector"],
                    description: "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
                {
                    name: ["--timeout"],
                    description: "The length of time to wait before giving up on a scale operation, zero means don't wait. Any other values should contain a corresponding time unit (e.g. 1s, 2m, 3h).",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "set",
            description: "Configure application resources",
            options: [],
            subcommands: [
                {
                    name: "env",
                    description: "Update environment variables on a pod template.",
                    options: [
                        {
                            name: ["--all"],
                            description: "If true, select all resources in the namespace of the specified resource types",
                            args: {},
                        },
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["-c", "--containers"],
                            description: "The names of containers in the selected pod templates to change - may use wildcards",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["-e", "--env"],
                            description: "Specify a key-value pair for an environment variable to set into each container.",
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files the resource to update the env",
                            args: {},
                        },
                        {
                            name: ["--from"],
                            description: "The name of a resource from which to inject environment variables",
                            args: {},
                        },
                        {
                            name: ["--keys"],
                            description: "Comma-separated list of keys to import from specified resource",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["--list"],
                            description: "If true, display the environment and any changes in the standard format. this flag will removed when we have kubectl view env.",
                            args: {},
                        },
                        {
                            name: ["--local"],
                            description: "If true, set env will NOT contact api-server but run locally.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--overwrite"],
                            description: "If true, allow environment to be overwritten, otherwise reject updates that overwrite existing environment.",
                            args: {},
                        },
                        {
                            name: ["--prefix"],
                            description: "Prefix to append to variable names",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--resolve"],
                            description: "If true, show secret or configmap references when listing variables",
                            args: {},
                        },
                        {
                            name: ["-l", "--selector"],
                            description: "Selector (label query) to filter on",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "image",
                    description: "Update existing container image(s) of resources.",
                    options: [
                        {
                            name: ["--all"],
                            description: "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
                            args: {},
                        },
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files identifying the resource to get from a server.",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["--local"],
                            description: "If true, set image will NOT contact api-server but run locally.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--record"],
                            description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["-l", "--selector"],
                            description: "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "resources",
                    description: "Specify compute resource requirements (cpu, memory) for any resource that defines a pod template.  If a pod is successfully scheduled, it is guaranteed the amount of resource requested, but may burst up to its specified limits.",
                    options: [
                        {
                            name: ["--all"],
                            description: "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
                            args: {},
                        },
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["-c", "--containers"],
                            description: "The names of containers in the selected pod templates to change, all containers are selected by default - may use wildcards",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files identifying the resource to get from a server.",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["--limits"],
                            description: "The resource requirement requests for this container.  For example, 'cpu=100m,memory=256Mi'.  Note that server side components may assign requests depending on the server configuration, such as limit ranges.",
                            args: {},
                        },
                        {
                            name: ["--local"],
                            description: "If true, set resources will NOT contact api-server but run locally.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--record"],
                            description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--requests"],
                            description: "The resource requirement requests for this container.  For example, 'cpu=100m,memory=256Mi'.  Note that server side components may assign requests depending on the server configuration, such as limit ranges.",
                            args: {},
                        },
                        {
                            name: ["-l", "--selector"],
                            description: "Selector (label query) to filter on, not including uninitialized ones,supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "selector",
                    description: "Set the selector on a resource. Note that the new selector will overwrite the old selector if the resource had one prior to the invocation of 'set selector'.",
                    options: [
                        {
                            name: ["--all"],
                            description: "Select all resources in the namespace of the specified resource types",
                            args: {},
                        },
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "identifying the resource.",
                            args: {},
                        },
                        {
                            name: ["--local"],
                            description: "If true, annotation will NOT contact api-server but run locally.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--record"],
                            description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--resource-version"],
                            description: "If non-empty, the selectors update will only succeed if this is the current resource-version for the object. Only valid when specifying a single resource.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "serviceaccount",
                    description: "Update ServiceAccount of pod template resources.",
                    options: [
                        {
                            name: ["--all"],
                            description: "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
                            args: {},
                        },
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files identifying the resource to get from a server.",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["--local"],
                            description: "If true, set serviceaccount will NOT contact api-server but run locally.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["--record"],
                            description: "Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
                {
                    name: "subject",
                    description: "Update User, Group or ServiceAccount in a RoleBinding/ClusterRoleBinding.",
                    options: [
                        {
                            name: ["--all"],
                            description: "Select all resources, including uninitialized ones, in the namespace of the specified resource types",
                            args: {},
                        },
                        {
                            name: ["--allow-missing-template-keys"],
                            description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                            args: {},
                        },
                        {
                            name: ["--dry-run"],
                            description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                            args: {},
                        },
                        {
                            name: ["-f", "--filename"],
                            description: "Filename, directory, or URL to files the resource to update the subjects",
                            args: {},
                        },
                        {
                            name: ["--group"],
                            description: "Groups to bind to the role",
                            args: {},
                        },
                        {
                            name: ["-k", "--kustomize"],
                            description: "Process the kustomization directory. This flag can't be used together with -f or -R.",
                            args: {},
                        },
                        {
                            name: ["--local"],
                            description: "If true, set subject will NOT contact api-server but run locally.",
                            args: {},
                        },
                        {
                            name: ["-o", "--output"],
                            description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                            args: {},
                        },
                        {
                            name: ["-R", "--recursive"],
                            description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                            args: {},
                        },
                        {
                            name: ["-l", "--selector"],
                            description: "Selector (label query) to filter on, not including uninitialized ones, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
                            args: {},
                        },
                        {
                            name: ["--serviceaccount"],
                            description: "Service accounts to bind to the role",
                            args: {},
                        },
                        {
                            name: ["--template"],
                            description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                            args: {},
                        },
                    ],
                    subcommands: [],
                },
            ],
        },
        {
            name: "taint",
            description: "Update the taints on one or more nodes.",
            options: [
                {
                    name: ["--all"],
                    description: "Select all nodes in the cluster",
                    args: {},
                },
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["--dry-run"],
                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                    args: {},
                },
                {
                    name: ["--overwrite"],
                    description: "If true, allow taints to be overwritten, otherwise reject taint updates that overwrite existing taints.",
                    args: {},
                },
                {
                    name: ["-l", "--selector"],
                    description: "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
                {
                    name: ["--validate"],
                    description: "If true, use a schema to validate the input before sending it",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "top",
            description: "Display Resource (CPU/Memory/Storage) usage.",
            options: [],
            subcommands: [],
        },
        {
            name: "uncordon",
            description: "Mark node as schedulable.",
            options: [
                {
                    name: ["--dry-run"],
                    description: 'Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource.',
                    args: {},
                },
                {
                    name: ["-l", "--selector"],
                    description: "Selector (label query) to filter on",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "version",
            description: "Print the client and server version information for the current context",
            options: [
                {
                    name: ["--client"],
                    description: "If true, shows client version only (no server required).",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "One of 'yaml' or 'json'.",
                    args: {},
                },
                {
                    name: ["--short"],
                    description: "If true, print just the version number.",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "wait",
            description: "Experimental: Wait for a specific condition on one or many resources.",
            options: [
                {
                    name: ["--all"],
                    description: "Select all resources in the namespace of the specified resource types",
                    args: {},
                },
                {
                    name: ["-A", "--all-namespaces"],
                    description: "If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace.",
                    args: {},
                },
                {
                    name: ["--allow-missing-template-keys"],
                    description: "If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats.",
                    args: {},
                },
                {
                    name: ["--field-selector"],
                    description: "Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type.",
                    args: {},
                },
                {
                    name: ["-f", "--filename"],
                    description: "identifying the resource.",
                    args: {},
                },
                {
                    name: ["--for"],
                    description: "The condition to wait on: [delete|condition=condition-name].",
                    args: {},
                },
                {
                    name: ["--local"],
                    description: "If true, annotation will NOT contact api-server but run locally.",
                    args: {},
                },
                {
                    name: ["-o", "--output"],
                    description: "Output format. One of: json|yaml|name|go-template|go-template-file|template|templatefile|jsonpath|jsonpath-file.",
                    args: {},
                },
                {
                    name: ["-R", "--recursive"],
                    description: "Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same directory.",
                    args: {},
                },
                {
                    name: ["-l", "--selector"],
                    description: "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)",
                    args: {},
                },
                {
                    name: ["--template"],
                    description: "Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].",
                    args: {},
                },
                {
                    name: ["--timeout"],
                    description: "The length of time to wait before giving up.  Zero means check once and don't wait, negative means wait for a week.",
                    args: {},
                },
            ],
            subcommands: [],
        },
    ],
};

