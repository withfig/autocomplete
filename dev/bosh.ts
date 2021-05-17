const deployments: Fig.Generator = {
  script: "bosh --json deployments",
  postProcess: function (out) {
    if (out.startsWith("fatal:")) {
      return [];
    }
    return out.Tables[0].Rows.forEach((deployment) => {
      return {
        name: deployment.name,
        description: "deployment",
      };
    });
  },
};

export const completionSpec: Fig.Spec = {
  name: "bosh",
  description: "bosh cli to managed your bosh deployment",
  subcommands: [
    {
      name: "add-blob",
      description: "Add blob",
    },
    {
      name: "unignore",
      description: "Unignore an instance",
    },
    {
      name: "update-cloud-config",
      description: "Update current cloud config",
    },
    {
      name: "update-config",
      description: "Update config",
    },
    {
      name: "update-cpi-config",
      description: "Update current CPI config",
    },
    {
      name: "update-resurrection",
      description: "Enable/disable resurrection",
    },
    {
      name: "update-runtime-config",
      description: "Update current runtime config",
    },
    {
      name: "upload-blobs",
      description: "Upload blobs",
    },
    {
      name: "upload-release",
      description: "Upload release",
    },
    {
      name: "upload-stemcell",
      description: "Upload stemcell",
    },
    {
      name: "variables",
      description: "List variables",
    },
    {
      name: "vendor-package",
      description: "Vendor package",
    },
    {
      name: "vms",
      description: "List all VMs in all deployments",
    },
    {
      name: "orphan-disk",
      description: "Orphan disk",
    },
    {
      name: "networks",
      description: "List networks",
    },
    {
      name: "manifest",
      description: "Show deployment manifest",
    },
    {
      name: "tasks",
      description: "List running or recent tasks",
    },
    {
      name: "task",
      description: "Show task status and start tracking its output",
    },
    {
      name: "take-snapshot",
      description: "Take snapshot",
    },
    {
      name: "sync-blobs",
      description: "Sync blobs",
    },
    {
      name: "stop-env",
      description: "Stop BOSH environment",
    },
    {
      name: "stop",
      description: "Stop instance(s)",
    },
    {
      name: "stemcells",
      description: "List stemcells",
    },
    {
      name: "start-env",
      description: "Start BOSH environment",
    },
    {
      name: "start",
      description: "Start instance(s)",
    },
    {
      name: "ssh",
      description: "SSH into instance(s)",
    },
    {
      name: "snapshots",
      description: "List snapshots",
    },
    {
      name: "sha2ify-release",
      description: "Convert release tarball to use SHA256",
    },
    {
      name: "sha1ify-release",
      description: "Convert release tarball to use SHA1",
    },
    {
      name: "runtime-config",
      description: "Show current runtime config",
    },
    {
      name: "run-errand",
      description: "Run errand",
    },
    {
      name: "restart",
      description: "Restart instance(s)",
    },
    {
      name: "reset-release",
      description: "Reset release",
    },
    {
      name: "repack-stemcell",
      description: "Repack stemcell",
    },
    {
      name: "remove-blob",
      description: "Remove blob",
    },
    {
      name: "releases",
      description: "List releases",
    },
    {
      name: "recreate",
      description: "Recreate instance(s)",
    },
    {
      name: "orphaned-vms",
      description: "List all the orphaned VMs in all deployments",
    },
    {
      name: "scp",
      description: "SCP to/from instance(s)",
    },
    {
      name: "scp",
      description: "SCP to/from instance(s)",
    },
    {
      name: "help",
      description: "Show this help message",
    },
    {
      name: "ignore",
      description: "Ignore an instance",
    },
    {
      name: "init-release",
      description: "Initialize release",
    },
    {
      name: "inspect-local-release",
      description: "Display information from release metadata",
    },
    {
      name: "inspect-local-stemcell",
      description: "Display information from stemcell metadata",
    },
    {
      name: "inspect-release",
      description: "List release contents such as jobs",
    },
    {
      name: "instances",
      description: "List all instances in a deployment",
    },
    {
      name: "interpolate",
      description: "Interpolates variables into a manifest",
    },
    {
      name: "locks",
      description: "List current locks",
    },
    {
      name: "log-in",
      description: "Login",
    },
    {
      name: "log-out",
      description: "Log out",
    },
    {
      name: "logs",
      description: "Fetch logs from instance(s)",
    },
    {
      name: "deployment",
      description: "Show deployment information",
    },
    {
      name: "deployments",
      description: "List deployments",
    },
    {
      name: "diff-config",
      description: "Diff two configs by ID or content",
    },
    {
      name: "disks",
      description: "List disks",
    },
    {
      name: "environment",
      description: "Show environment",
    },
    {
      name: "environments",
      description: "List environments",
    },
    {
      name: "errands",
      description: "List errands",
    },
    {
      name: "event",
      description: "Show event details",
    },
    {
      name: "events",
      description: "List events",
    },
    {
      name: "export-release",
      description: "Export the compiled release to a tarball",
    },
    {
      name: "finalize-release",
      description: "Create final release from dev release tarball",
    },
    {
      name: "generate-job",
      description: "Generate job",
    },
    {
      name: "generate-package",
      description: "Generate package",
    },
    {
      name: "create-release",
      description: "Create release",
    },
    {
      name: "curl",
      description: "Make an HTTP request to the Director",
    },
    {
      name: "delete-config",
      description: "Delete config",
    },
    {
      name: "delete-deployment",
      description: "Delete deployment",
    },
    {
      name: "delete-disk",
      description: "Delete disk",
    },
    {
      name: "delete-env",
      description: "Delete BOSH environment",
    },
    {
      name: "delete-network",
      description: "Delete network",
    },
    {
      name: "delete-release",
      description: "Delete release",
    },
    {
      name: "delete-snapshot",
      description: "Delete snapshot",
    },
    {
      name: "delete-snapshots",
      description: "Delete all snapshots in a deployment",
    },
    {
      name: "delete-stemcell",
      description: "Delete stemcell",
    },
    {
      name: "delete-vm",
      description: "Delete VM",
    },
    {
      name: "deploy",
      description: "Update deployment",
    },
    {
      name: "alias-env",
      description: "Alias environment to save URL and CA certificate",
    },
    {
      name: "attach-disk",
      description: "Attach disk to an instance",
    },
    {
      name: "blobs",
      description: "List blobs",
    },
    {
      name: "cancel-task",
      description: "Cancel task at its next checkpoint",
    },
    {
      name: "cancel-tasks",
      description: "Cancel tasks at their next checkpoints",
    },
    {
      name: "clean-up",
      description: "Clean up old unused resources except orphaned disks",
    },
    {
      name: "cloud-check",
      description: "Cloud consistency check and interactive repair",
    },
    {
      name: "cloud-config",
      description: "Show current cloud config",
    },
    {
      name: "config",
      description: "Show current config for either ID or both type and name",
    },
    {
      name: "configs",
      description: "List configs",
    },
    {
      name: "cpi-config",
      description: "Show current CPI config",
    },
    {
      name: "create-env",
      description: "Create or update BOSH environment",
    },
  ],
  options: [
    {
      name: ["--version"],
      description: "Show CLI version",
    },
    {
      name: ["--config"],
      description: "Config file path (default: ~/.bosh/config)",
    },
    {
      name: ["--environment"],
      description: "Director environment name or URL",
    },
    {
      name: ["--ca-cert"],
      description: "Director CA certificate path or value",
    },
    {
      name: ["--sha2"],
      description: "Use SHA256 checksums",
    },
    {
      name: ["--parallel"],
      description: "The max number of parallel operations (default: 5)",
    },
    {
      name: ["--client"],
      description: "Override username or UAA client [$BOSH_CLIENT]",
    },
    {
      name: ["--client-secret"],
      description:
        "Override password or UAA client secret [$BOSH_CLIENT_SECRET]",
    },
    {
      name: ["--deployment"],
      description: "Deployment name [$BOSH_DEPLOYMENT]",
      args: {
        generators: deployments,
      },
    },
    {
      name: ["--column"],
      description: "Filter to show only given column(s)",
    },
    {
      name: ["--json"],
      description: "Output as JSON",
    },
    {
      name: ["--tty"],
      description: "Force TTY-like output",
    },
    {
      name: ["--no-color"],
      description: "Toggle colorized output",
    },
    {
      name: ["--non-interactive"],
      description: "Don't ask for user input [$BOSH_NON_INTERACTIVE]",
    },
  ],
};
