const options = [
  {
    name: ["--version", "-v"],
    description: "Show version of rvm",
  },
  {
    name: "--default",
    description:
      "When used with ruby selection, sets a default ruby for new shells",
  },
  {
    name: "--debug",
    description: "Enable debug mode",
  },
  {
    name: "--force",
    description: "Force install, removes old install & source before install",
  },
  {
    name: "--all",
    description: "Used with 'rvm list' to display 'most' available versions",
  },
  {
    name: "--summary",
    description: "Used with 'do' to print out a summary of the commands run",
  },
  {
    name: "-C",
    description:
      "Custom configure options, comma separated, double quote args that need quoting, default",
  },
];

const interpreters = [
  {
    name: "rbx",
    description: "Rubinius",
    options,
  },
  {
    name: "jruby",
    description: "JRuby",
    options,
  },
  {
    name: "ruby",
    description: "MRI/YARV Ruby (The Standard), defaults to 1.8.6",
    options,
  },
  {
    name: "ree",
    description: "Ruby Enterprise Edition",
    options,
  },
  {
    name: "system",
    description: "Use the system ruby (eg. pre-RVM state)",
    options,
  },
  {
    name: "default",
    description: "Use RVM set default ruby and system if it hasn't been set",
    options,
  },
];

const completionSpec: Fig.Spec = {
  name: "rvm",
  description: "Ruby version manager",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for rvm",
      isPersistent: true,
    },
  ],
  subcommands: [
    {
      name: "use",
      description: "Setup current shell to use a specific ruby version",
      subcommands: interpreters,
    },
    {
      name: "reset",
      description: "Remove default and current settings, exit the shell",
      subcommands: interpreters,
    },
    {
      name: "info",
      description: "Show information about the current ruby environment",
      subcommands: interpreters,
    },
    {
      name: "list",
      description: "List currently installed version",
      subcommands: interpreters,
    },
    {
      name: "reload",
      description:
        "Reload RVM source itself (useful after changing RVM source)",
      subcommands: interpreters,
    },
    {
      name: "implode",
      description: "Remove all ruby installations it manages",
      subcommands: interpreters,
    },
    {
      name: "get",
      description: "Upgrades RVM to the stable or git head branches",
      subcommands: interpreters,
    },
    {
      name: "do",
      description: "Runs a named ruby file against specified and/or all rubies",
      subcommands: interpreters,
    },
    {
      name: "install",
      description: "Install one or many ruby versions",
      subcommands: interpreters,
    },
    {
      name: "upgrade",
      description:
        "Install new ruby, copy gemsets, make gems pristine, remove old rubies",
      subcommands: interpreters,
    },
    {
      name: "reinstall",
      description: "Remove ruby, install it, make gems pristine",
      subcommands: interpreters,
    },
    {
      name: "uninstall",
      description: "Uninstall one or many ruby versions, leaves their sources",
      subcommands: interpreters,
    },
    {
      name: "remove",
      description: "Remove one or many ruby versions, including their sources",
      subcommands: interpreters,
    },
    ...interpreters,
  ],
};

export default completionSpec;
