const completionSpec: Fig.Spec = {
  name: "configure",
  description:
    "Configure AWS CLI options. If this command is run with no\narguments, you will be prompted for configuration values such as your AWS\nAccess Key Id and your AWS Secret Access Key.  You can configure a named\nprofile using the ``--profile`` argument.  If your config file does not exist\n(the default location is ``~/.aws/config``), the AWS CLI will create it\nfor you.  To keep an existing value, hit enter when prompted for the value.\nWhen you are prompted for information, the current value will be displayed in\n``[brackets]``.  If the config item has no value, it be displayed as\n``[None]``.  Note that the ``configure`` command only works with values from the\nconfig file.  It does not use any configuration values from environment\nvariables or the IAM role.\n\nNote: the values you provide for the AWS Access Key ID and the AWS Secret\nAccess Key will be written to the shared credentials file\n(``~/.aws/credentials``).\n\n\n=======================\nConfiguration Variables\n=======================\n\nThe following configuration variables are supported in the config file:\n\n* **aws_access_key_id** - The AWS access key part of your credentials\n* **aws_secret_access_key** - The AWS secret access key part of your credentials\n* **aws_session_token** - The session token part of your credentials (session tokens only)\n* **metadata_service_timeout** - The number of seconds to wait until the metadata service\n  request times out.  This is used if you are using an IAM role to provide\n  your credentials.\n* **metadata_service_num_attempts** - The number of attempts to try to retrieve\n  credentials.  If you know for certain you will be using an IAM role on an\n  Amazon EC2 instance, you can set this value to ensure any intermittent\n  failures are retried.  By default this value is 1.\n\nFor more information on configuration options, see `Configuring the AWS Command Line Interface`_ in the *AWS CLI User Guide*.\n\n.. _`Configuring the AWS Command Line Interface`: http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html",
  subcommands: [
    {
      name: "list",
      description:
        "Lists the profile, access key, secret key, and region configuration information used for the specified profile. For each configuration item, it shows the value, where the configuration value was retrieved, and the configuration variable name.\n\nFor example, if you provide the AWS region in an environment variable, this command shows you the name of the region you've configured, that this value came from an environment variable, and the name of the environment variable.\n\nFor temporary credential methods such as roles and IAM Identity Center, this command displays the temporarily cached access key and secret access key is displayed",
    },
    {
      name: "get",
      description:
        'Get a configuration value from the config file.\n\nThe ``aws configure get`` command can be used to print a configuration value in\nthe AWS config file.  The ``get`` command supports two types of configuration\nvalues, *unqualified* and *qualified* config values.\n\n\nNote that ``aws configure get`` only looks at values in the AWS configuration\nfile.  It does **not** resolve configuration variables specified anywhere else,\nincluding environment variables, command line arguments, etc.\n\n\nUnqualified Names\n-----------------\n\nEvery value in the AWS configuration file must be placed in a section (denoted\nby ``[section-name]`` in the config file).  To retrieve a value from the\nconfig file, the section name and the config name must be known.\n\nAn unqualified configuration name refers to a name that is not scoped to a\nspecific section in the configuration file.  Sections are specified by\nseparating parts with the ``"."`` character (``section.config-name``).  An\nunqualified name will be scoped to the current profile.  For example,\n``aws configure get aws_access_key_id`` will retrieve the ``aws_access_key_id``\nfrom the current profile,  or the ``default`` profile if no profile is\nspecified.  You can still provide a ``--profile`` argument to the ``aws\nconfigure get`` command.  For example, ``aws configure get region --profile\ntesting`` will print the region value for the ``testing`` profile.\n\n\nQualified Names\n---------------\n\nA qualified name is a name that has at least one ``"."`` character in the name.\nThis name provides a way to specify the config section from which to retrieve\nthe config variable.  When a qualified name is provided to ``aws configure\nget``, the currently specified profile is ignored.  Section names that have\nthe format ``[profile profile-name]`` can be specified by using the\n``profile.profile-name.config-name`` syntax, and the default profile can be\nspecified using the ``default.config-name`` syntax',
      args: {
        name: "varname",
        description: "The name of the config value to retrieve",
      },
    },
    {
      name: "set",
      description:
        "Set a configuration value from the config file.\n\nThe ``aws configure set`` command can be used to set a single configuration\nvalue in the AWS config file.  The ``set`` command supports both the\n*qualified* and *unqualified* config values documented in the ``get`` command\n(see ``aws configure get help`` for more information).\n\nTo set a single value, provide the configuration name followed by the\nconfiguration value.\n\nIf the config file does not exist, one will automatically be created.  If the\nconfiguration value already exists in the config file, it will updated with the\nnew configuration value.\n\nSetting a value for the ``aws_access_key_id``, ``aws_secret_access_key``, or\nthe ``aws_session_token`` will result in the value being written to the\nshared credentials file (``~/.aws/credentials``).  All other values will\nbe written to the config file (default location is ``~/.aws/config``)",
      args: [
        {
          name: "varname",
          description: "The name of the config value to set",
        },
        {
          name: "value",
          description: "The value to set",
        },
      ],
    },
    {
      name: "add-model",
      description:
        "Adds a service JSON model to the appropriate location in ~/.aws/models. Once the model gets added, CLI commands and Boto3 clients will be immediately available for the service JSON model provided",
      options: [
        {
          name: "--service-model",
          description: "The contents of the service JSON model",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-name",
          description:
            "Overrides the default name used by the service JSON model to generate CLI service commands and Boto3 clients",
          args: {
            name: "string",
          },
        },
      ],
    },
  ],
};
export default completionSpec;
