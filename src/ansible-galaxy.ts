const serverOptions: Fig.Option[] = [
  {
    name: ["--server", "-s"],
    description: "The Galaxy API server URL",
    args: {
      name: "api_server",
      description: "The Galaxy API server URL",
    },
  },
  {
    name: ["--token", "--api-key"],
    description:
      "The Ansible Galaxy API key which can be found at https://galaxy.ansible.com/me/preferences",
    args: {
      name: "api_key",
      description:
        "The Ansible Galaxy API key which can be found at https://galaxy.ansible.com/me/preferences",
    },
  },
  {
    name: ["--ignore-certs", "-c"],
    description: "Ignore SSL certificate validation errors",
  },
];

const collectionDownloadOptions: Fig.Option[] = [
  {
    name: "--clear-response-cache",
    description: "Clear the existing server response cache",
  },
  {
    name: "--no-cache",
    description: "Do not use the server response cache",
  },
  {
    name: ["--no-deps", "-n"],
    description: "Don't download collection(s) listed as dependencies",
  },
  {
    name: ["--download-path", "-p"],
    description: "The directory to download the collections to",
    args: {
      name: "download_path",
      description: "The directory to download the collections to",
      template: ["folders"],
    },
  },
  {
    name: ["--requirements-file", "-r"],
    description: "A file containing a list of collections to be downloaded",
    args: {
      name: "requirements",
      description: "A file containing a list of collections to be downloaded",
      template: ["filepaths"],
    },
  },
  {
    name: "--pre",
    description: "Include pre-release versions",
  },
];

const collectionInitOptions: Fig.Option[] = [
  {
    name: ["--force", "-f"],
    description: "Force overwriting an existing role or collection",
  },
  {
    name: "--init-path",
    description: "The path in which the skeleton collection will be created",
    args: {
      name: "init_path",
      description: "The path in which the skeleton collection will be created",
      template: ["folders"],
      default: ".",
    },
  },
  {
    name: "--collection-skeleton",
    description:
      "The path to a collection skeleton that the new collection should be based upon",
    args: {
      name: "collection_skeleton",
      description:
        "The path to a collection skeleton that the new collection should be based upon",
      template: ["folders"],
    },
  },
];

const collectionBuildOptions: Fig.Option[] = [
  {
    name: ["--force", "-f"],
    description: "Force overwriting an existing role or collection",
  },
  {
    name: "--output-path",
    description: "The path in which the collection is built to",
    args: {
      name: "output_path",
      description: "The path in which the collection is built to",
      template: ["folders"],
      default: ".",
    },
  },
];

const collectionPublishOptions: Fig.Option[] = [
  {
    name: "--no-wait",
    description: "Don't wait for import validation results",
  },
  {
    name: "--import-timeout",
    description: "The time to wait for the collection import process to finish",
    args: {
      name: "import_timeout",
      description:
        "The time to wait for the collection import process to finish",
      suggestions: ["60", "300", "600", "900"],
      default: "60",
    },
  },
];

const collectionListOptions: Fig.Option[] = [
  {
    name: ["--collections-path", "-p"],
    description:
      "One or more directories to search for collections in addition to the default COLLECTIONS_PATHS; separate multiple paths with ':'",
    args: {
      name: "collections_path",
      description:
        "One or more directories to search for collections in addition to the default COLLECTIONS_PATHS; separate multiple paths with ':'",
      template: ["folders"],
      suggestions: ["~/.ansible/collections:/usr/share/ansible/collections"],
      default: "~/.ansible/collections:/usr/share/ansible/collections",
    },
  },
  {
    name: "--format",
    description: "Format to display the list of collections in",
    args: {
      name: "format",
      description: "Format to display the list of collections in",
      suggestions: ["human", "yaml", "json"],
      default: "human",
    },
  },
];

const collectionVerifyOptions: Fig.Option[] = [
  {
    name: ["--collections-path", "-p"],
    description:
      "One or more directories to search for collections in addition to the default COLLECTIONS_PATHS; separate multiple paths with ':'",
    args: {
      name: "collections_path",
      description:
        "One or more directories to search for collections in addition to the default COLLECTIONS_PATHS; separate multiple paths with ':'",
      template: ["folders"],
      suggestions: ["~/.ansible/collections:/usr/share/ansible/collections"],
      default: "~/.ansible/collections:/usr/share/ansible/collections",
    },
  },
  {
    name: ["--ignore-errors", "-i"],
    description:
      "Ignore errors during verification and continue with the next specified collection",
  },
  {
    name: ["--requirements-file", "-r"],
    description: "A file containing a list of collections to be downloaded",
    args: {
      name: "requirements",
      description: "A file containing a list of collections to be downloaded",
      template: ["filepaths"],
    },
  },
];

const collectionsListArg: Fig.Arg = {
  name: "collection",
  description: "Name of the collection",
  isVariadic: true,
  // https://docs.ansible.com/ansible/latest/collections/index.html
  suggestions: [
    "amazon.aws",
    "ansible.builtin",
    "ansible.netcommon",
    "ansible.posix",
    "ansible.utils",
    "ansible.windows",
    "arista.eos",
    "awx.awx",
    "azure.azcollection",
    "check_point.mgmt",
    "chocolatey.chocolatey",
    "cisco.aci",
    "cisco.asa",
    "cisco.intersight",
    "cisco.ios",
    "cisco.iosxr",
    "cisco.ise",
    "cisco.meraki",
    "cisco.mso",
    "cisco.nso",
    "cisco.nxos",
    "cisco.ucs",
    "cloud.common",
    "cloudscale_ch.cloud",
    "community.aws",
    "community.azure",
    "community.ciscosmb",
    "community.crypto",
    "community.digitalocean",
    "community.dns",
    "community.docker",
    "community.fortios",
    "community.general",
    "community.google",
    "community.grafana",
    "community.hashi_vault",
    "community.hrobot",
    "community.kubernetes",
    "community.kubevirt",
    "community.libvirt",
    "community.mongodb",
    "community.mysql",
    "community.network",
    "community.okd",
    "community.postgresql",
    "community.proxysql",
    "community.rabbitmq",
    "community.routeros",
    "community.sap",
    "community.skydive",
    "community.sops",
    "community.vmware",
    "community.windows",
    "community.zabbix",
    "containers.podman",
    "cyberark.conjur",
    "cyberark.pas",
    "dellemc.enterprise_sonic",
    "dellemc.openmanage",
    "dellemc.os10",
    "dellemc.os6",
    "dellemc.os9",
    "f5networks.f5_modules",
    "fortinet.fortimanager",
    "fortinet.fortios",
    "frr.frr",
    "gluster.gluster",
    "google.cloud",
    "hetzner.hcloud",
    "hpe.nimble",
    "ibm.qradar",
    "infinidat.infinibox",
    "infoblox.nios_modules",
    "inspur.sm",
    "junipernetworks.junos",
    "kubernetes.core",
    "mellanox.onyx",
    "netapp.aws",
    "netapp.azure",
    "netapp.cloudmanager",
    "netapp.elementsw",
    "netapp.ontap",
    "netapp.storagegrid",
    "netapp.um_info",
    "netapp_eseries.santricity",
    "netbox.netbox",
    "ngine_io.cloudstack",
    "ngine_io.exoscale",
    "ngine_io.vultr",
    "openstack.cloud",
    "openvswitch.openvswitch",
    "ovirt.ovirt",
    "purestorage.flasharray",
    "purestorage.flashblade",
    "sensu.sensu_go",
    "servicenow.servicenow",
    "splunk.es",
    "t_systems_mms.icinga_director",
    "theforeman.foreman",
    "vmware.vmware_rest",
    "vyos.vyos",
    "wti.remote",
  ],
};

const roleInitOptions: Fig.Option[] = [
  {
    name: ["--force", "-f"],
    description: "Force overwriting an existing role or collection",
  },
  {
    name: "--offline",
    description: "Don't query the galaxy API when creating roles",
  },
  {
    name: "--init-path",
    description: "The path in which the skeleton collection will be created",
    args: {
      name: "init_path",
      description: "The path in which the skeleton collection will be created",
      template: ["folders"],
      default: ".",
    },
  },
  {
    name: "--role-skeleton",
    description: "The path in which the skeleton role will be created",
    args: {
      name: "role_skeleton",
      description: "The path in which the skeleton role will be created",
      template: ["folders"],
      default: ".",
    },
  },
  {
    name: "--type",
    description: "Initialize using an alternate role type",
    args: {
      name: "role_type",
      description: "Initialize using an alternate role type",
      suggestions: ["container", "apb", "network"],
      default: "container",
    },
  },
];

const roleRemoveOptions: Fig.Option[] = [
  {
    name: ["--roles-path", "--role-path"],
    description: "The path to the directory containing your roles",
    args: {
      name: "roles_path",
      description: "The path to the directory containing your roles",
      suggestions: [
        "~/.ansible/roles:/usr/share/ansible/roles:/etc/ansible/roles",
      ],
      default: "~/.ansible/roles:/usr/share/ansible/roles:/etc/ansible/roles",
    },
  },
];

const roleListOptions: Fig.Option[] = [
  {
    name: ["--roles-path", "--role-path"],
    description: "The path to the directory containing your roles",
    args: {
      name: "roles_path",
      description: "The path to the directory containing your roles",
      suggestions: [
        "~/.ansible/roles:/usr/share/ansible/roles:/etc/ansible/roles",
      ],
      default: "~/.ansible/roles:/usr/share/ansible/roles:/etc/ansible/roles",
    },
  },
];

const roleSearchOptions: Fig.Option[] = [
  {
    name: "--platforms",
    description: "List of OS platforms to filter by",
    args: {
      name: "platforms",
      description: "List of OS platforms to filter by",
      // https://galaxy.ansible.com/api/v1/platforms/
    },
  },
  {
    name: "--galaxy-tags",
    description: "List of Galaxy tags to filter by",
    args: {
      name: "galaxy_tags",
      description: "List of Galaxy tags to filter by",
    },
  },
  {
    name: "--author",
    description: "GitHub username",
    args: {
      name: "author",
      description: "GitHub username",
    },
  },
];

const roleImportOptions: Fig.Option[] = [
  {
    name: "--branch",
    description:
      "The name of a branch to import. Defaults to the repository's default branch (usually master)",
    args: {
      name: "reference",
      description:
        "The name of a branch to import. Defaults to the repository's default branch (usually master)",
      suggestions: ["master", "main", "develop"],
      default: "master",
    },
  },
  {
    name: "--role-name",
    description:
      "The name the role should have, if different than the repo name",
    args: {
      name: "role_name",
      description:
        "The name the role should have, if different than the repo name",
    },
  },
  {
    name: "--status",
    description:
      "Check the status of the most recent import request for given github_user/github_repo",
  },
];

const roleSetupOptions: Fig.Option[] = [
  {
    name: ["--roles-path", "--role-path"],
    description: "The path to the directory containing your roles",
    args: {
      name: "roles_path",
      description: "The path to the directory containing your roles",
      suggestions: [
        "~/.ansible/roles:/usr/share/ansible/roles:/etc/ansible/roles",
      ],
      default: "~/.ansible/roles:/usr/share/ansible/roles:/etc/ansible/roles",
    },
  },
  {
    name: "--remove",
    description:
      "Remove the integration matching the provided ID value. Use --list to see ID values",
    args: {
      name: "remove_id",
      description:
        "Remove the integration matching the provided ID value. Use --list to see ID values",
    },
    exclusiveOn: ["--list"],
  },
  {
    name: "--list",
    description: "List all of your integrations",
    exclusiveOn: ["--remove"],
  },
];

const roleInfoOptions: Fig.Option[] = [
  {
    name: ["--roles-path", "--role-path"],
    description: "The path to the directory containing your roles",
    args: {
      name: "roles_path",
      description: "The path to the directory containing your roles",
      suggestions: [
        "~/.ansible/roles:/usr/share/ansible/roles:/etc/ansible/roles",
      ],
      default: "~/.ansible/roles:/usr/share/ansible/roles:/etc/ansible/roles",
    },
  },
  {
    name: "--offline",
    description: "Don't query the galaxy API when creating roles",
  },
];

const roleInstallOptions: Fig.Option[] = [
  {
    name: ["--roles-path", "--role-path"],
    description: "The path to the directory containing your roles",
    args: {
      name: "roles_path",
      description: "The path to the directory containing your roles",
      suggestions: [
        "~/.ansible/roles:/usr/share/ansible/roles:/etc/ansible/roles",
      ],
      default: "~/.ansible/roles:/usr/share/ansible/roles:/etc/ansible/roles",
    },
  },
  {
    name: ["--no-deps", "-n"],
    description: "Don't download roles listed as dependencies",
  },
  {
    name: "--force-with-deps",
    description: "Force overwriting an existing role and its dependencies",
  },
  {
    name: ["--requirements-file", "-r"],
    description: "A file containing a list of collections to be downloaded",
    args: {
      name: "requirements",
      description: "A file containing a list of collections to be downloaded",
      template: ["filepaths"],
    },
  },
  {
    name: ["--keep-scm-meta", "-g"],
    description:
      "Use tar instead of the scm archive option when packaging the role",
  },
];

const completionSpec: Fig.Spec = {
  name: "ansible-galaxy",
  description: "Perform various Role and Collection related operations",
  subcommands: [
    {
      name: "collection",
      description: "Operate on collections",
      subcommands: [
        {
          name: "download",
          description: "Download collections",
          options: [...serverOptions, ...collectionDownloadOptions],
          args: collectionsListArg,
        },
        {
          name: "init",
          description: "Initialize collections",
          options: [...serverOptions, ...collectionInitOptions],
          args: {
            name: "collection_name",
            description: "Name of the collection",
          },
        },
        {
          name: "build",
          description: "Build collections",
          options: [...serverOptions, ...collectionBuildOptions],
          args: {
            name: "collection",
            description: "Path(s) to the collection to be built",
            template: ["folders"],
            default: ".",
          },
        },
        {
          name: "publish",
          description: "Publish collections",
          options: [...serverOptions, ...collectionPublishOptions],
          args: {
            name: "collection_path",
            description: "The path to the collection tarball to publish",
            template: ["folders"],
            default: ".",
          },
        },
        {
          name: "list",
          description: "List collections",
          options: [...serverOptions, ...collectionListOptions],
          args: {
            name: "collection",
            description: "The collections to list",
            isOptional: true,
          },
        },
        {
          name: "verify",
          description: "Verify collections",
          options: [...serverOptions, ...collectionVerifyOptions],
          args: {
            name: "collection_name",
            description: "The collections to verify",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "role",
      description: "Operate on roles",
      subcommands: [
        {
          name: "init",
          description: "Initialize roles",
          options: [...serverOptions, ...roleInitOptions],
          args: {
            name: "role_name",
            description: "Name of the role",
          },
        },
        {
          name: "remove",
          description: "Remove roles",
          options: [...serverOptions, ...roleRemoveOptions],
          args: {
            name: "role_name",
            description: "The role to remove",
          },
        },
        {
          name: "list",
          description: "List roles",
          options: [...serverOptions, ...roleListOptions],
          args: {
            name: "role",
            description: "The role to list",
            isOptional: true,
          },
        },
        {
          name: "search",
          description: "Search roles",
          options: [...serverOptions, ...roleSearchOptions],
          args: {
            name: "searchterm",
            description: "Search terms",
            isOptional: true,
          },
        },
        {
          name: "import",
          description: "Import roles",
          options: [...serverOptions, ...roleImportOptions],
          args: [
            {
              name: "github_user",
              description: "GitHub username",
              isOptional: true,
            },
            {
              name: "github_repo",
              description: "GitHub repository",
            },
          ],
        },
        {
          name: "setup",
          description: "Set up roles",
          options: [...serverOptions, ...roleSetupOptions],
        },
        {
          name: "info",
          description: "Role information",
          options: [...serverOptions, ...roleInfoOptions],
        },
        {
          name: "install",
          description: "Install roles",
          options: [...serverOptions, ...roleInstallOptions],
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help and exit",
      isPersistent: true,
    },
    {
      name: "--verbose",
      description:
        "Verbose mode (-vvv for more, -vvvv to enable connection debugging)",
      exclusiveOn: ["-v"],
      isPersistent: true,
    },
    {
      name: "-v",
      description:
        "Verbose mode (-vvv for more, -vvvv to enable connection debugging)",
      isRepeatable: 4,
      exclusiveOn: ["--verbose"],
      isPersistent: true,
    },
    {
      name: "--version",
      description:
        "Shows version number, config file location, module search path, module location, executable location and exit",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
