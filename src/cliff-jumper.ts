const monoRepoDescription = [
  "Whether the package to be bumped resides in a mono repo,",
  "which enables Lerna-like scanning for what kind of version bump should be applied",
  'Defaults to "true" when "org" is set, false otherwise',
].join("\n");
const skipChangelogDescription = [
  "Whether to skip updating your CHANGELOG.md", //
  'default "true" when CI=true, "false" otherwise',
].join("\n");
const skipTagDescription = [
  "Whether to skip creating a git tag", //
  'default "true" when CI=true, "false" otherwise',
].join("\n");

const completionSpec: Fig.Spec = {
  name: "cliff-jumper",
  description:
    "A small CLI tool to create a semantic release and git-cliff powered Changelog",
  options: [
    {
      name: ["--help", "-h"],
      priority: 10,
      description: "Display help for command",
      isPersistent: true,
    },
    {
      name: ["--name", "-n"],
      priority: 100,
      description: "The package name to release",
      isPersistent: true,
      args: {
        name: "name",
      },
    },
    {
      name: ["--package-path", "-p"],
      priority: 90,
      description:
        'The path to the current package. For non-monorepos this is just "."',
      isPersistent: true,
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--dry-run",
      description:
        "Whether the package should be bumped or not. When this is set no actions will be taken and only the release strategy will be logged",
    },
    {
      name: "--first-release",
      description:
        "Whether this is the first release (skips bumping the version)'",
    },
    {
      name: "--mono-repo",
      description: monoRepoDescription,
    },
    {
      name: "--no-mono-repo",
      description: monoRepoDescription,
    },
    {
      name: ["--org", "-o"],
      description:
        'The NPM org scope that should be used. This should be WITHOUT "@" sign or trailing "/"',
      args: {
        name: "organisation",
      },
    },
    {
      name: "--preid",
      description:
        'The "prerelease identifier" to use as a prefix for the "prerelease" part of a semver',
      args: {
        name: "id",
      },
    },
    {
      name: ["--commit-message-template", "-c"],
      description: [
        "A custom commit message template to use.",
        'Defaults to "chore({{name}}): release {{full-name}}@{{new-version}}"',
        'You can use "{{new-version}}" in your template which will be dynamically replaced with whatever the new version is that will be published.',
        'You can use "{{name}}" in your template, this will be replaced with the name provided through "-n", "--name" or the same value set in your config file.',
        'You can use "{{full-name}}" in your template, this will be replaced "{{name}}" (when "org" is not provided), or "@{{org}}/{{name}}" (when "org" is provided).',
      ].join("\n"),
      args: {
        name: "template",
      },
    },
    {
      name: "--tag-template",
      description: [
        "A custom tag template to use.",
        'When "org" is provided this will default to "@{{org}}/{{name}}@{{new-version}}", for example "@favware/cliff-jumper@1.0.0"',
        'When "org" is not provided this will default to "v{{new-version}}", for example "v1.0.0"',
        'You can use "{{new-version}}" in your template which will be dynamically replaced with whatever the new version is that will be published.',
        'You can use "{{org}}" in your template, this will be replaced with the org provided through "-o", "--org" or the same value set in your config file.',
        'You can use "{{name}}" in your template, this will be replaced with the name provided through "-n", "--name" or the same value set in your config file.',
        'You can use "{{full-name}}" in your template, this will be replaced "{{name}}" (when "org" is not provided), or "@{{org}}/{{name}}" (when "org" is provided).',
      ].join("\n"),
      args: {
        name: "template",
      },
    },
    {
      name: ["--install", "-i"],
      description:
        "Whether to run npm install (or your package manager's equivalent) after bumping the version but before committing and creating a git tag. This is useful when you have a mono repo where bumping one package would then cause the lockfile to be out of date",
    },
    {
      name: "--skip-changelog",
      description: skipChangelogDescription,
    },
    {
      name: "--no-skip-changelog",
      description: skipChangelogDescription,
    },
    {
      name: ["--skip-tag", "-t"],
      description: skipTagDescription,
    },
    {
      name: "--no-skip-tag",
      description: skipTagDescription,
    },
    {
      name: ["--verbose", "-v"],
      description: "Whether to print verbose information",
    },
    {
      name: ["--version", "-V"],
      priority: 1,
      description: "Output the version number",
    },
  ],
};
export default completionSpec;
