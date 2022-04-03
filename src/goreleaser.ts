const debugOption: Fig.Option = {
  name: "--debug",
  description: "Print detailed debugging output during resource operations",
  isPersistent: true,
};

const noDescriptionOption: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};

const configOption: Fig.Option = {
  name: ["-f", "--config"],
  description: 'Configuration from file (default ".goreleaser.yaml")',
  args: {
    name: "config",
    description: "Configuration file",
    template: "filepaths",
  },
};

const rmDistOption: Fig.Option = {
  name: "--rm-dist",
  description: "Removes the dist folder",
};

const parallelismOption: Fig.Option = {
  name: ["-p", "--parallelism"],
  description: "Amount tasks to run concurrently (default: number of CPUs)",
  args: {
    name: "parallelism",
  },
};

const skipValidateOption: Fig.Option = {
  name: "--skip-validate",
  description: "Skips several sanity checks",
};

const snapshotOption: Fig.Option = {
  name: "--snapshot",
  description:
    "Generate an unversioned snapshot build, skipping all validations",
};

const timeoutOption: Fig.Option = {
  name: "--timeout",
  description: "Timeout to the entire build process (default 30m0s)",
  args: {
    name: "duration",
  },
};

const completionSpec: Fig.Spec = {
  name: "goreleaser",
  description: "GoReleaser is a release automation tool for Go projects",
  subcommands: [
    {
      name: "build",
      description: "Builds the current project",
      options: [
        debugOption,
        configOption,
        rmDistOption,
        parallelismOption,
        skipValidateOption,
        snapshotOption,
        timeoutOption,
        {
          name: "--id",
          description: "Builds only the specified build id",
          args: {
            name: "buildId",
          },
        },
        {
          name: ["-o", "--output"],
          description:
            "Copy the binary to the path after the build. Only taked into account when using --single-target and a single id (either with --id or if config only has one build)",
          args: {
            name: "outputPath",
            template: "filepaths",
          },
        },
        {
          name: "--single-target",
          description: "Builds only for current GOOS and GOARCH",
        },
        {
          name: "--skip-post-hooks",
          description: "Skips all post-build hooks",
        },
      ],
    },
    {
      name: "check",
      description: "Checks if configuration is valid",
      options: [
        debugOption,
        configOption,
        {
          name: ["-q", "--quiet"],
          description: "Quiet mode: no output",
        },
      ],
    },
    {
      name: "completion",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [noDescriptionOption],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [noDescriptionOption],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [noDescriptionOption],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [noDescriptionOption],
        },
      ],
      options: [debugOption],
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "init",
      description: "Generates a .goreleaser.yaml file",
      options: [debugOption, configOption],
    },
    {
      name: "jsonschema",
      description: "Outputs goreleaser's JSON schema",
      options: [
        debugOption,
        {
          name: ["-o", "--output"],
          description: 'Where to save the json schema (default "-")',
          args: {
            name: "outputPath",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "release",
      description: "Releases the current project",
      options: [
        debugOption,
        configOption,
        parallelismOption,
        rmDistOption,
        skipValidateOption,
        timeoutOption,
        snapshotOption,
        {
          name: "--auto-snapshot",
          description: "Automatically sets --snapshot if the repo is dirty",
        },
        {
          name: "--release-footer",
          description: "Load custom release notes footer from a markdown file",
          args: {
            name: "releaseFooterPath",
            template: "filepaths",
          },
        },
        {
          name: "--release-footer-tmpl",
          description:
            "Load custom release notes footer from a templated markdown file (overrides --release-footer)",
          args: {
            name: "releaseFooterPath",
            template: "filepaths",
          },
        },
        {
          name: "--release-header",
          description: "Load custom release notes header from a markdown file",
          args: {
            name: "releaseHeaderPath",
            template: "filepaths",
          },
        },
        {
          name: "--release-header-tmpl",
          description:
            "Load custom release notes header from a templated markdown file (overrides --release-header)",
          args: {
            name: "releaseHeaderPath",
            template: "filepaths",
          },
        },
        {
          name: "--release-notes",
          description:
            "Load custom release notes from a markdown file (will skip GoReleaser changelog generation)",
          args: {
            name: "releaseNotesPath",
            template: "filepaths",
          },
        },
        {
          name: "--release-notes-tmpl",
          description:
            "Load custom release notes from a templated markdown file (overrides --release-notes)",
          args: {
            name: "releaseNotesPath",
            template: "filepaths",
          },
        },
        {
          name: "--skip-announce",
          description: "Skips announcing releases (implies --skip-validate)",
        },
        {
          name: "--skip-publish",
          description: "Skips publishing artifacts",
        },
        {
          name: "--skip-sbom",
          description: "Skips cataloging artifacts",
        },
        {
          name: "--skip-sign",
          description: "Skips signing artifacts",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      isPersistent: true,
      description: "Help for goreleaser",
    },
    {
      name: ["--version", "-v"],
      description: "Version for goreleaser",
    },
  ],
};

export default completionSpec;
