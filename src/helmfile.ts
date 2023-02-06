const completionSpec: Fig.Spec = {
  name: "helmfile",
  description: "Deploy helm charts",
  subcommands: [
    {
      name: "apply",
      description:
        "Apply all resources from state file only when there are changes",
    },
    {
      name: "build",
      description: "Build all resources from state file",
    },
    {
      name: "cache",
      description: "Cache management",
    },
    {
      name: "charts",
      deprecated: true,
      description:
        "DEPRECATED: sync releases from state file (helm upgrade --install)",
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
    },
    {
      name: "delete",
      description:
        "The helmfile delete sub-command deletes all the releases defined in the manifests",
      deprecated: {
        description:
          "Note that delete doesn’t purge releases. If you really want to remove releases for reuse, add --purge flag to run it like helmfile delete --purge",
      },
    },
    {
      name: "deps",
      description:
        "Update charts based on their requirements, it locks your helmfile state and local charts dependencies",
    },
    {
      name: "destroy",
      description: "Destroys and then purges releases",
    },
    {
      name: "diff",
      description:
        "Diff releases defined in state file, it executes the helm-diff plugin across all of the charts/releases defined in the manifest",
    },
    {
      name: "fetch",
      description:
        "Fetch charts from state file, it downloads or copies local charts to a local directory for debug purpose",
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "init",
      description:
        "Initialize the helmfile, includes version checking and installation of helm and plug-ins",
    },
    {
      name: "lint",
      description: "Lint charts from state file (helm lint)",
    },
    {
      name: "list",
      description: "List releases defined in state file",
    },
    {
      name: "repos",
      description: "Repos releases defined in state file",
    },
    {
      name: "secrets",
      description:
        "Causes the helm-secrets plugin to be executed to decrypt the file",
    },
    {
      name: "status",
      description: "Retrieve status of releases in state file",
    },
    {
      name: "sync",
      description: "Sync releases defined in state file",
    },
    {
      name: "template",
      description: "Template releases defined in state file",
    },
    {
      name: "test",
      description: "Test charts from state file (helm test)",
    },
    {
      name: "version",
      description: "Print the CLI version",
    },
    {
      name: " write-values",
      description:
        "Write values files for releases. Similar to `helmfile template`, write values files instead of manifests",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description:
        "Do not exit with an error code if the provided selector has no matching releases",
      isPersistent: true,
    },
    {
      name: "--allow-no-matching-release",
      description: "Show help for helmfile",
      isPersistent: true,
    },
    {
      name: ["--chart", "-c"],
      description:
        "Set chart. Uses the chart set in release by default, and is available in template as {{ .Chart }}",
      isPersistent: true,
      args: {
        name: "string",
      },
    },
    {
      name: "--color",
      description: "Output with color",
      isPersistent: true,
    },
    {
      name: "--debug",
      description:
        "Enable verbose output for Helm and set log-level to debug, this disables --quiet/-q effect",
      isPersistent: true,
    },
    {
      name: "--enable-live-output",
      description:
        "Show live output from the Helm binary Stdout/Stderr into Helmfile own Stdout/Stderr. It only applies for the Helm CLI commands, Stdout/Stderr for Hooks are still displayed only when it's execution finishes",
      isPersistent: true,
    },
    {
      name: ["--environment", "-e"],
      description: "Specify the environment name. defaults to default",
      isPersistent: true,
      args: { name: "environment" },
    },
    {
      name: ["--file", "-f"],
      description:
        "Load config from file or directory. defaults to helmfile.yaml or `helmfile.d`(means `helmfile.d/*.yaml`) in this preference",
      isPersistent: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: ["--helm-binary", "-b"],
      description: 'Path to the helm binary (default "helm")',
      isPersistent: true,
      args: { name: "binary" },
    },
    {
      name: ["--interactive", "-i"],
      description: "Request confirmation before attempting to modify clusters",
      isPersistent: true,
    },
    {
      name: "--kube-context", // in the helmfile doc, they list this option under -i, should we include -i or not?
      description: "Set kubectl context. Uses current context by default",
      isPersistent: true,
      args: { name: "kube-context" },
    },
    {
      name: "--log-level", // in the helmfile doc, they list this option under -i, should we include -i or not?
      description: "Set log level, default info (default info)",
      isPersistent: true,
      args: { name: "log-level" },
    },
    {
      name: ["--namespace", "-n"],
      description:
        "Set namespace. Uses the namespace set in the context by default, and is available in templates as {{ .Namespace }}",
      isPersistent: true,
      args: { name: "namespace" },
    },
    {
      name: "--no-color",
      description: "Output without color",
      isPersistent: true,
    },
    {
      name: ["--quiet", "-q"],
      description: "Silence output. Equivalent to log-level warn",
      isPersistent: true,
    },
    {
      name: ["--selector", "-l"],
      description:
        "Only run using the releases that match labels. Labels can take the form of foo=bar or foo!=bar",
      isPersistent: true,
      args: { name: " selector " },
    },
    {
      name: "--state-values-file",
      description: "Specify state values in a YAML file",
      isPersistent: true,
      args: { name: "state-values-file", template: "filepaths" },
    },
    {
      name: "--state-values-set",
      description:
        "Set state values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
      isPersistent: true,
      args: { name: "state-values-=set" },
    },
    {
      name: ["--version", "-v"],
      description: "Version for helmfile",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
