const completionSpec: Fig.Spec = {
  name: "cdk8s",
  description: "CDK for K8s",
  subcommands: [
    {
      name: "init",
      description: "Create a new, empty CDK8S project",
      args: {
        name: "type",
        description: "Select language you are using",
        suggestions: [
          {
            name: "go-app",
          },
          {
            name: "java-app",
          },
          {
            name: "python-app",
          },
          {
            name: "typescript-app",
          },
        ],
      },
    },
    {
      name: "import",
      description: "Import a CRD schema to generate generate resources",
      args: {
        name: "spec",
        description: "Path to the CRD schema",
        template: "filepaths",
      },
      options: [
        {
          name: ["--language", "-l"],
          description: "Output programming language",
          args: {
            name: "language",
            suggestions: [
              {
                name: "typescript",
              },
              {
                name: "python",
              },
              {
                name: "java",
              },
              {
                name: "go",
              },
            ],
          },
        },
        {
          name: "--class-prefix",
          description: "A prefix to add to all generated class names",
          exclusiveOn: ["--no-class-prefix"],
        },
        {
          name: "--no-class-prefix",
          description: "Does not add a prefix to generated class names",
          exclusiveOn: ["--class-prefix"],
        },
        {
          name: "--exclude",
          description:
            "Do not import types that match these regular expressions",
          args: {
            name: "regexp",
          },
        },
        {
          name: ["--output", "-o"],
          description: "Output directory",
          args: {
            template: "folders",
            suggestCurrentToken: true,
          },
        },
      ],
    },
    {
      name: "synth",
      description:
        "Synthesizes Kubernetes manifests for all charts in your app",
      options: [
        {
          name: ["--app", "-a"],
          description: "Command to use in order to execute cdk8s app",
        },
        {
          name: ["--output", "-o"],
          description: "Output directory",
          args: {
            template: "folders",
            suggestCurrentToken: true,
          },
        },
        {
          name: ["--stdout", "-s"],
          description:
            "Write synthesized manifests to STDOUT instead of the output directory",
        },
        {
          name: "--plugins-dir",
          description: "Directory to store cdk8s plugins",
        },
        {
          name: "--validate",
          description: "Apply validation plugins on the resulting manifests",
          exclusiveOn: ["--no-validate"],
        },
        {
          name: "--no-validate",
          description: "Disable validation",
          exclusiveOn: ["--validate"],
        },
        {
          name: "--validation-reports-output-file",
          description:
            "File to write a JSON representation of the validation reports to",
          args: {
            template: "filepaths",
            suggestCurrentToken: true,
          },
        },
      ],
    },
  ],
  options: [
    {
      name: "--version",
      description: "The current version",
    },
    {
      name: "--help",
      description: "Show help",
    },
    {
      name: "--check-upgrade",
      description: "Check for cdk8s-cli upgrade",
    },
  ],
};

export default completionSpec;
