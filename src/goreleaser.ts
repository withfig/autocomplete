const completionSpec: Fig.Spec = {
  name: "goreleaser",
  description: "Deliver Go binaries as fast and easily as possible",
  subcommands: [
    {
      name: ["b", "build"],
      description: "Builds the current project",
      options: [
        {
          name: "--clean",
          description: "Remove the dist folder before building",
        },
        {
          name: ["--config", "-f"],
          description: "Load configuration from file",
          args: { name: "config", template: ["filepaths"] },
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
          args: { name: "output", template: ["filepaths"] },
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
          hidden: true,
        },
        {
          name: "--single-target",
          description:
            "Builds only for current GOOS and GOARCH, regardless of what's set in the configuration file",
        },
        {
          name: "--skip",
          description:
            "Skip the given options (valid options are: before, post-hooks, pre-hooks, validate)",
          isRepeatable: true,
          args: { name: "skip" },
        },
        {
          name: "--skip-before",
          description: "Skips global before hooks",
          hidden: true,
        },
        {
          name: "--skip-post-hooks",
          description: "Skips all post-build hooks",
          hidden: true,
        },
        {
          name: "--skip-validate",
          description: "Skips several sanity checks",
          hidden: true,
        },
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
          description: "Configuration file(s) to check",
          hidden: true,
          args: { name: "config", template: ["filepaths"] },
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
      name: ["hc", "healthcheck"],
      description: "Checks if needed tools are installed",
      options: [
        {
          name: ["--config", "-f"],
          description: "Configuration file",
          args: { name: "config", template: ["filepaths"] },
        },
        { name: ["--quiet", "-q"], description: "Quiet mode: no output" },
      ],
    },
    {
      name: ["i", "init"],
      description: "Generates a .goreleaser.yaml file",
      options: [
        {
          name: ["--config", "-f"],
          description: "Load configuration from file",
          args: {
            name: "config",
            default: ".goreleaser.yaml",
            template: ["filepaths"],
          },
        },
      ],
    },
    {
      name: ["schema", "jsonschema"],
      description: "Outputs goreleaser's JSON schema",
      options: [
        {
          name: ["--output", "-o"],
          description: "Where to save the JSONSchema file",
          args: { name: "output", default: "-", template: ["filepaths"] },
        },
      ],
    },
    {
      name: ["r", "release"],
      description: "Releases the current project",
      options: [
        {
          name: "--auto-snapshot",
          description:
            "Automatically sets --snapshot if the repository is dirty",
        },
        { name: "--clean", description: "Removes the dist folder" },
        {
          name: ["--config", "-f"],
          description: "Load configuration from file",
          args: { name: "config", template: ["filepaths"] },
        },
        {
          name: "--deprecated",
          description: "Force print the deprecation message - tests only",
          hidden: true,
        },
        {
          name: "--fail-fast",
          description:
            "Whether to abort the release publishing on the first error",
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
          args: { name: "release-footer", template: ["filepaths"] },
        },
        {
          name: "--release-footer-tmpl",
          description:
            "Load custom release notes footer from a templated markdown file (overrides --release-footer)",
          args: { name: "release-footer-tmpl", template: ["filepaths"] },
        },
        {
          name: "--release-header",
          description: "Load custom release notes header from a markdown file",
          args: { name: "release-header", template: ["filepaths"] },
        },
        {
          name: "--release-header-tmpl",
          description:
            "Load custom release notes header from a templated markdown file (overrides --release-header)",
          args: { name: "release-header-tmpl", template: ["filepaths"] },
        },
        {
          name: "--release-notes",
          description:
            "Load custom release notes from a markdown file (will skip GoReleaser changelog generation)",
          args: { name: "release-notes", template: ["filepaths"] },
        },
        {
          name: "--release-notes-tmpl",
          description:
            "Load custom release notes from a templated markdown file (overrides --release-notes)",
          args: { name: "release-notes-tmpl", template: ["filepaths"] },
        },
        {
          name: "--rm-dist",
          description: "Removes the dist folder",
          hidden: true,
        },
        {
          name: "--skip",
          description:
            "Skip the given options (valid options are announce, aur, before, chocolatey, docker, homebrew, ko, nfpm, nix, publish, sbom, scoop, sign, snapcraft, validate, winget)",
          isRepeatable: true,
          args: { name: "skip" },
        },
        {
          name: "--skip-announce",
          description: "Skips announcing releases (implies --skip=validate)",
          hidden: true,
        },
        {
          name: "--skip-before",
          description: "Skips global before hooks",
          hidden: true,
        },
        {
          name: "--skip-docker",
          description: "Skips Docker Images/Manifests builds",
          hidden: true,
        },
        { name: "--skip-ko", description: "Skips Ko builds", hidden: true },
        {
          name: "--skip-publish",
          description: "Skips publishing artifacts (implies --skip=announce)",
          hidden: true,
        },
        {
          name: "--skip-sbom",
          description: "Skips cataloging artifacts",
          hidden: true,
        },
        {
          name: "--skip-sign",
          description: "Skips signing artifacts",
          hidden: true,
        },
        {
          name: "--skip-validate",
          description: "Skips git checks",
          hidden: true,
        },
        {
          name: "--snapshot",
          description:
            "Generate an unversioned snapshot release, skipping all validations and without publishing any artifacts (implies --skip=announce,publish,validate)",
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
          name: ["hc", "healthcheck"],
          description: "Checks if needed tools are installed",
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
    { name: "--debug", description: "Enable verbose mode", isPersistent: true },
    {
      name: "--verbose",
      description: "Enable verbose mode",
      isPersistent: true,
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
