const completionSpec: Fig.Spec = {
  name: "ansible",
  description:
    "Define and run a single Ansible task 'playbook' against a set of hosts",
  args: {
    name: "pattern",
    description: "Host pattern",
  },
  options: [
    {
      name: "--ask-vault-pass",
      description: "Ask for vault password",
    },
    {
      name: "--list-hosts",
      description: "Outputs a list of matching hosts; does not execute",
    },
    {
      name: "--playbook-dir",
      description:
        "Since this tool does not use playbooks, use this as a substitute playbook directory.This sets the relative path for many features including roles/ group_vars/etc",
      args: {
        name: "playbook dir",
        template: ["folders"],
      },
    },
    {
      name: "--syntax-check",
      description:
        "Perform a syntax check on the playbook, but do not execute it",
    },
    {
      name: "--vault-id",
      description: "Specify the vault identity to use",
      args: {
        name: "vault ID",
      },
    },
    {
      name: "--vault-password-file",
      description: "Specify a vault password file",
      args: {
        name: "vault password file",
        template: ["filepaths"],
      },
    },
    {
      name: "--version",
      description:
        "Show program's version number, config file location, configured module search path, module location and executable location",
    },
    {
      name: ["--background", "-B"],
      description: "Run asynchronously, failing after specified seconds",
      args: {
        name: "seconds",
      },
    },
    {
      name: ["--check", "-C"],
      description:
        "Don't make any changes; instead, try to predict some of the changes that may occur",
    },
    {
      name: ["--diff", "-D"],
      description:
        "When changing (small) files and templates, show the differences in those files",
    },
    {
      name: ["--module-path", "-M"],
      description: "Prepend colon-separated path(s) to module library",
      args: {
        name: "module path",
        template: ["folders"],
      },
    },
    {
      name: ["--poll", "-P"],
      description: "Set the poll interval if using -B",
      args: {
        name: "poll interval",
      },
    },
    {
      name: ["--args", "-a"],
      description: "Specify module arguments",
      args: {
        name: "module arguments",
      },
    },
    {
      name: ["--extra-vars", "-e"],
      description:
        "Set additional variables as key=value or YAML/JSON, if filename prepend with @",
      args: {
        name: "extra vars",
      },
    },
    {
      name: ["--forks", "-f"],
      description: "Specify number of parallel processes to use",
      args: {
        name: "forks",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Show help for ansible",
    },
    {
      name: ["--inventory", "-i"],
      description: "Specify inventory host path or comma separated host list",
      args: {
        name: "inventory",
      },
    },
    {
      name: ["--limit", "-l"],
      description: "Limit selected hosts to an additional pattern",
      args: {
        name: "subset",
      },
    },
    {
      name: ["--module-name", "-m"],
      description: "Specify the module name to execute",
      args: {
        name: "module name",
      },
    },
    {
      name: ["--one-line", "-o"],
      description: "Condense output",
    },
    {
      name: ["--tree", "-t"],
      description: "Log output to specific directory",
      args: {
        name: "tree",
      },
    },
    {
      name: ["--verbose", "-v"],
      description: "Enable verbose mode",
    },
    {
      name: "-vvv",
      description: "Enable very verbose mode",
    },
    {
      name: "-vvvv",
      description: "Enable connection debug mode",
    },
    {
      name: "--become-method",
      description: "Privilege escalation method to use",
      args: {
        name: "become method",
        suggestions: [
          "sudo",
          "su",
          "pbrun",
          "pfexec",
          "doas",
          "dzdo",
          "ksu",
          "runas",
          "machinectl",
        ],
      },
    },
    {
      name: "--become-user",
      description: "Privilege escalation user to use",
      args: {
        name: "become user",
      },
    },
    {
      name: ["--ask-become-pass", "-K"],
      description: "Prompt for privilege escalation password",
    },
    {
      name: ["--become", "-b"],
      description: "Run operations with become",
    },
    {
      name: ["--private-key", "--key-file"],
      description: "Use this fole to authenticate the connection",
      args: {
        name: "private key",
        template: ["filepaths"],
      },
    },
    {
      name: "--scp-extra-args",
      description: "Extra arguments to pass to (only) scp",
      args: {
        name: "SCP extra args",
      },
    },
    {
      name: "--sftp-extra-args",
      description: "Extra arguments to pass to (only) sftp",
      args: {
        name: "SFTP extra args",
      },
    },
    {
      name: "-ssh-extra-args",
      description: "Extra arguments to pass to (only) ssh",
      args: {
        name: "SSH extra args",
      },
    },
    {
      name: "--ssh-common-args",
      description: "Extra arguments to pass to sftp/scp/ssh",
      args: {
        name: "SSH common args",
      },
    },
    {
      name: ["--timeout", "-T"],
      description: "Override the connection timeout in seconds",
      args: {
        name: "timeout",
      },
    },
    {
      name: ["--connection", "-c"],
      description: "Connection type to use",
      args: {
        name: "connection type",
      },
    },
    {
      name: ["--ask-pass", "-k"],
      description: "Ask for connection password",
    },
    {
      name: ["--user", "-u"],
      description: "Connect as this user",
      args: {
        name: "user",
      },
    },
  ],
};
export default completionSpec;
