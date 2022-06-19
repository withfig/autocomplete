const testOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description: "Help for 'test'",
  },
  {
    name: "--ignore-missing-schemas",
    description: "Ignore missing schemas when executing schema validation step",
  },
  {
    name: "--no-record",
    description: "Do not send policy checks metadata to the backend",
  },
  {
    name: "--only-k8s-files",
    description:
      "Evaluate only valid yaml files with the properties 'apiVersion' and 'kind'. Ignore everything else",
  },
  {
    name: ["-o", "--output"],
    description: "Define output format (simple, yaml, json, xml, JUnit)",
    args: {
      name: "output",
      description: "Output format",
      suggestions: [
        {
          name: "simple",
          description: "Simple output without colors",
        },
        {
          name: "yaml",
          description: "YAML output",
        },
        {
          name: "json",
          description: "JSON output",
        },
        {
          name: "xml",
          description: "XML output",
        },
        {
          name: "junit",
          description: "JUnit output",
        },
      ],
    },
  },
  {
    name: ["-p", "--policy"],
    description: "Policy name to run against",
    args: {
      name: "policy",
      description: "String",
    },
  },
  {
    name: "--policy-config",
    description: "Path for local policies configuration file",
    args: {
      template: "filepaths",
    },
  },
  {
    name: "--schema-location",
    description:
      "Override schemas location search path (can be specified multiple times)",
    args: {
      name: "stringArray",
      description: "String array",
    },
  },
  {
    name: ["-s", "--schema-version"],
    description:
      "Set kubernetes version to validate against. Defaults to 1.19.0",
  },
  {
    name: "--verbose",
    description: "Display 'How to Fix' link",
  },
];

const datreeSpec: Fig.Spec = {
  name: "datree",
  description:
    "Datree can be used on the command line to run policies against Kubernetes manifests YAML files or Helm charts",
  subcommands: [
    {
      name: "completion",
      description: "Generate completion script for bash,zsh,fish,powershell",
    },
    {
      name: "config",
      description: "Internal configuration management for datree config file",
      subcommands: [
        {
          name: "get",
          description: "Get configuration value",
          options: [
            {
              name: ["-h", "--help"],
              description:
                "Get value for specific key from datree config.yaml file. Defaults to $HOME/.datree/config.yaml",
            },
          ],
        },
        {
          name: "set",
          description: "Set configuration value",
          options: [
            {
              name: ["-h", "--help"],
              description:
                "Apply value for specific key in datree config.yaml file. Defaults to $HOME/.datree/config.yaml",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for config",
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        template: "help",
      },
    },
    {
      name: "kustomize",
      description: "Generate kustomization files from manifests",
      subcommands: [
        {
          name: "test",
          description: "Test kustomization files",
          options: testOptions,
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for kustomize",
        },
      ],
    },
    {
      name: "publish",
      description:
        "Publish policies configuration for given <fileName>. Input should be the path to the Policy-as-Code yaml configuration file. ## Note You need to first enable Policy-as-Code (PaC) on the settings page in the dashboard",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for publish",
        },
      ],
      args: {
        name: "file path",
        template: "filepaths",
      },
    },
    {
      name: "test",
      description:
        "Trigger a policy check, provide a Kubernetes configuration file path or a glob pattern",
      args: {
        name: "file path",
        template: "filepaths",
      },
      options: testOptions,
    },
    {
      name: "version",
      description: "Print the version number",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for datree",
    },
  ],
  // Only uncomment if datree takes an argument
  // args: {}
};
export default datreeSpec;
