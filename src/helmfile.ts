const completionSpec: Fig.Spec = {
  name: "helmfile",
  description: "",
  subcommands: [
    {
      name: "init",
      description:
        "Initialize the helmfile, includes version checking and installation of helm and plug-ins",
    },

    {
      name: "sync",
      description: "Sync releases defined in state file",
    },

    {
      name: "deps",
      description:
        "Update charts based on their requirements, it locks your helmfile state and local charts dependencies",
    },
    {
      name: "diff",
      description:
        "Diff releases defined in state file, it executes the helm-diff plugin across all of the charts/releases defined in the manifest",
    },
    {
      name: "apply",
      description:
        "Apply all resources from state file only when there are changes",
    },
    {
      name: "destroy",
      description: "Destroys and then purges releases",
    },
    {
      name: "delete",
      description: "DEPRECATED: delete releases from state file (helm delete)",
    },
    {
      name: "secrets",
      description:
        "Causes the helm-secrets plugin to be executed to decrypt the file",
    },
    {
      name: "test",
      description: "Test charts from state file (helm test)",
    },
    {
      name: "lint",
      description: "Lint charts from state file (helm lint)",
    },
    {
      name: "fetch",
      description:
        "Fetch charts from state file, it downloads or copies local charts to a local directory for debug purpose",
    },
    {
      name: "list",
      description: "List releases defined in state file",
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
      description: "Show help for helmfile",
      isPersistent: true,
    },
    {
      name: ["--environment", "-e"],
      description: "Specify the environment name. defaults to default",
      isPersistent: true,
    },
    {
      name: ["--file", "-f"],
      description:
        "Load config from file or directory. defaults to helmfile.yaml or `helmfile.d`(means `helmfile.d/*.yaml`) in this preference",
      isPersistent: true,
    },
    {
      name: ["--helm-binary", "-b"],
      description: "Path to the helm binary (default helm)",
      isPersistent: true,
    },
    {
      name: ["--interactive", "-i"],
      description: "Request confirmation before attempting to modify clusters",
      isPersistent: true,
    },
    {
      name: "--kube-context",
      description: "Set kubectl context. Uses current context by default",
      isPersistent: true,
    },
    {
      name: "--log-level",
      description: "Set log level, default info (default info)",
      isPersistent: true,
    },
    {
      name: ["--namespace", "-n"],
      description:
        "Set namespace. Uses the namespace set in the context by default, and is available in templates as {{ .Namespace }}",
      isPersistent: true,
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
    },
    {
      name: "--state-values-file",
      description: "Specify state values in a YAML file",
      isPersistent: true,
    },
    {
      name: "--state-values-set",
      description:
        "Set state values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
      isPersistent: true,
    },
    {
      name: [" --version", "-v"],
      description: "Version for helmfile",
      isPersistent: true,
    },
  ],
  // Only uncomment if helmfile takes an argument
  // args: {}
};
export default completionSpec;
