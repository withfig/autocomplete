const completionSpec: Fig.Spec = {
  name: "goreleaser",
  description: "Deliver Go binaries as fast and easily as possible",
  subcommands: [
    {
      name: ["b", "build"],
      description: "Builds the current project",
      options: [
        {
          name: ["--config", "-f"],
          description: "Load configuration from file",
          args: { name: "config", template: "filepaths" },
        },
        {
          name: "--deprecated",
          description: "Force print the deprecation message - tests only",
          hidden: true,
        },
        {
          name: "--id",
          description: "Builds only the specified build ids",
          isRepeatable: true,
          args: { name: "id" },
        },
        {
          name: ["--output", "-o"],
          description:
            "Copy the binary to the path after the build. Only taken into account when using --single-target and a single id (either with --id or if configuration only has one build)",
          args: { name: "output", template: "filepaths" },
        },
        {
          name: ["--parallelism", "-p"],
          description:
            "Amount tasks to run concurrently (default: number of CPUs)",
          args: { name: "parallelism", default: "0" },
        },
        {
          name: "--rm-dist",
          description: "Remove the dist folder before building",
        },
        {
          name: "--single-target",
          description:
            "Builds only for current GOOS and GOARCH, regardless of what's set in the configuration file",
        },
        { name: "--skip-before", description: "Skips global before hooks" },
        {
          name: "--skip-post-hooks",
          description: "Skips all post-build hooks",
        },
        { name: "--skip-validate", description: "Skips several sanity checks" },
        {
          name: "--snapshot",
          description:
            "Generate an unversioned snapshot build, skipping all validations",
        },
        {
          name: "--timeout",
          description: "Timeout to the entire build process",
          args: { name: "timeout", default: "30m0s" },
        },
      ],
    },
    {
      name: ["c", "check"],
      description: "Checks if configuration is valid",
      options: [
        {
          name: ["--config", "-f"],
          description: "Configuration file to check",
          args: { name: "config" },
        },
        {
          name: "--deprecated",
          description: "Force print the deprecation message - tests only",
          hidden: true,
        },
        { name: ["--quiet", "-q"], description: "Quiet mode: no output" },
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: ["i", "init"],
      description: "Generates a .goreleaser.yaml file",
      options: [
        {
          name: ["--config", "-f"],
          description: "Load configuration from file",
          args: { name: "config", default: ".goreleaser.yaml" },
        },
      ],
    },
    {
      name: ["schema", "jsonschema"],
      description: "Outputs goreleaser's JSON schema",
      options: [
        {
          name: ["--output", "-o"],
          description: "Where to save the json schema",
          args: { name: "output", default: "-", template: "filepaths" },
        },
      ],
    },
    {
      name: ["r", "release"],
      description: "Releases the current project",
      options: [
        {
          name: "--auto-snapshot",
          description: "Automatically sets --snapshot if the repo is dirty",
        },
        {
          name: ["--config", "-f"],
          description: "Load configuration from file",
          args: { name: "config" },
        },
        {
          name: "--deprecated",
          description: "Force print the deprecation message - tests only",
          hidden: true,
        },
        {
          name: ["--parallelism", "-p"],
          description:
            "Amount tasks to run concurrently (default: number of CPUs)",
          args: { name: "parallelism", default: "0" },
        },
        {
          name: "--release-footer",
          description: "Load custom release notes footer from a markdown file",
          args: { name: "release-footer", template: "filepaths" },
        },
        {
          name: "--release-footer-tmpl",
          description:
            "Load custom release notes footer from a templated markdown file (overrides --release-footer)",
          args: { name: "release-footer-tmpl", template: "filepaths" },
        },
        {
          name: "--release-header",
          description: "Load custom release notes header from a markdown file",
          args: { name: "release-header", template: "filepaths" },
        },
        {
          name: "--release-header-tmpl",
          description:
            "Load custom release notes header from a templated markdown file (overrides --release-header)",
          args: { name: "release-header-tmpl", template: "filepaths" },
        },
        {
          name: "--release-notes",
          description:
            "Load custom release notes from a markdown file (will skip GoReleaser changelog generation)",
          args: { name: "release-notes", template: "filepaths" },
        },
        {
          name: "--release-notes-tmpl",
          description:
            "Load custom release notes from a templated markdown file (overrides --release-notes)",
          args: { name: "release-notes-tmpl", template: "filepaths" },
        },
        { name: "--rm-dist", description: "Removes the dist folder" },
        {
          name: "--skip-announce",
          description: "Skips announcing releases (implies --skip-validate)",
        },
        { name: "--skip-before", description: "Skips global before hooks" },
        {
          name: "--skip-docker",
          description: "Skips Docker Images/Manifests builds",
        },
        {
          name: "--skip-publish",
          description: "Skips publishing artifacts (implies --skip-announce)",
        },
        { name: "--skip-sbom", description: "Skips cataloging artifacts" },
        { name: "--skip-sign", description: "Skips signing artifacts" },
        { name: "--skip-validate", description: "Skips git checks" },
        {
          name: "--snapshot",
          description:
            "Generate an unversioned snapshot release, skipping all validations and without publishing any artifacts (implies --skip-publish, --skip-announce and --skip-validate)",
        },
        {
          name: "--timeout",
          description: "Timeout to the entire release process",
          args: { name: "timeout", default: "30m0s" },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        { name: ["b", "build"], description: "Builds the current project" },
        {
          name: ["c", "check"],
          description: "Checks if configuration is valid",
        },
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
            },
            {
              name: "fish",
              description: "Generate the autocompletion script for fish",
            },
            {
              name: "powershell",
              description: "Generate the autocompletion script for powershell",
            },
            {
              name: "zsh",
              description: "Generate the autocompletion script for zsh",
            },
          ],
        },
        {
          name: ["i", "init"],
          description: "Generates a .goreleaser.yaml file",
        },
        {
          name: ["schema", "jsonschema"],
          description: "Outputs goreleaser's JSON schema",
        },
        { name: ["r", "release"], description: "Releases the current project" },
      ],
    },
  ],
  options: [
    { name: "--debug", description: "Enable debug mode", isPersistent: true },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
