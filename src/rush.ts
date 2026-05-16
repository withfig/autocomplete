import stripJsonComments from "strip-json-comments";
import { npmSearchGenerator } from "./npm";

interface IRushConfigurationProjectJson {
  packageName: string;
}
interface IRushConfigurationJson {
  projects: IRushConfigurationProjectJson[];
}
const projectGenerator: Fig.Generator = {
  script: [
    "bash",
    "-c",
    "until [[ -f rush.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat rush.json",
  ],
  postProcess: function (out: string) {
    const suggestions = [];

    try {
      if (!out) {
        return suggestions;
      }

      const rushConfigurationJson: IRushConfigurationJson = JSON.parse(
        stripJsonComments(out.trim())
      );

      for (const project of rushConfigurationJson.projects) {
        suggestions.push({
          name: project.packageName,
          description: "Projects",
        });
      }
    } catch (e: unknown) {
      console.log("generate project suggestion fail: ", e);
    }
    return suggestions;
  },
};

/** Base options for selecting subsets of projects */
const PROJECT_SELECTION_OPTIONS: Fig.Option[] = [
  {
    name: ["-t", "--to"],
    args: { name: "PROJECT", generators: projectGenerator },
    description:
      'Normally all projects in the monorepo will be processed; adding this parameter will instead select a subset of projects. Each "--to" parameter expands this selection to include PROJECT and all its dependencies. "." can be used as shorthand for the project in the current working directory. For details, refer to the website article "Selecting subsets of projects"',
  },
  {
    name: ["-T", "--to-except"],
    args: { name: "PROJECT", generators: projectGenerator },
    description:
      'Normally all projects in the monorepo will be processed; adding this parameter will instead select a subset of projects. Each "--to-except" parameter expands this selection to include all dependencies of PROJECT, but not PROJECT itself. "." can be used as shorthand for the project in the current working directory. For details, refer to the website article "Selecting subsets of projects"',
  },
  {
    name: ["-f", "--from"],
    args: { name: "PROJECT", generators: projectGenerator },
    description:
      'Normally all projects in the monorepo will be processed; adding this parameter will instead select a subset of projects. Each "--from" parameter expands this selection to include PROJECT and all projects that depend on it, plus all dependencies of this set.  "." can be used as shorthand for the project in the current working directory. For details, refer to the website article "Selecting subsets of projects"',
  },
  {
    name: ["-o", "--only"],
    args: { name: "PROJECT", generators: projectGenerator },
    description:
      'Normally all projects in the monorepo will be processed; adding this parameter will instead select a subset of projects. Each "--only" parameter expands this selection to include PROJECT; its dependencies are not added. "." can be used as shorthand for the project in the current working directory. Note that this parameter is "unsafe" as it may produce a selection that excludes some dependencies. For details, refer to the website article "Selecting subsets of projects"',
  },
  {
    name: ["-i", "--impacted-by"],
    args: { name: "PROJECT", generators: projectGenerator },
    description:
      'Normally all projects in the monorepo will be processed; adding this parameter will instead select a subset of projects. Each "--impacted-by" parameter expands this selection to include PROJECT and any projects that depend on PROJECT (and thus might be broken by changes to PROJECT). "." can be used as shorthand for the project in the current working directory. Note that this parameter is "unsafe" as it may produce a selection that excludes some dependencies. For details, refer to the website article "Selecting subsets of projects"',
  },
  {
    name: ["-I", "--impacted-by-except"],
    args: { name: "PROJECT", generators: projectGenerator },
    description:
      'Normally all projects in the monorepo will be processed; adding this parameter will instead select a subset of projects. Each "--impacted-by-except" parameter works the same as "--impacted-by" except that PROJECT itself is not added to the selection. "." can be used as shorthand for the project in the current working directory. Note that this parameter is "unsafe" as it may produce a selection that excludes some dependencies. For details, refer to the website article "Selecting subsets of projects"',
  },
  {
    name: "--to-version-policy",
    args: { name: "VERSION_POLICY_NAME" },
    description:
      'Normally all projects in the monorepo will be processed; adding this parameter will instead select a subset of projects. The "--to-version-policy" parameter is equivalent to specifying "--to" for each of the projects belonging to VERSION_POLICY_NAME. For details, refer to the website article "Selecting subsets of projects"',
  },
  {
    name: "--from-version-policy",
    args: { name: "VERSION_POLICY_NAME" },
    description:
      'Normally all projects in the monorepo will be processed; adding this parameter will instead select a subset of projects. The "--from-version-policy" parameter is equivalent to specifying "--from" for each of the projects belonging to VERSION_POLICY_NAME.  For details, refer to the website article "Selecting subsets of projects"',
  },
];

const completionSpec: Fig.Spec = {
  name: "rush",
  description: "Multi-Project Build Tool",
  subcommands: [
    {
      name: "add",
      description:
        "Adds one or more dependencies to the package.json and runs rush update",
      options: [
        {
          name: ["-p", "--package"],
          description:
            "Specify package to the dependencies of the current project",
          isRequired: true,
          isRepeatable: true,
          args: {
            name: "PACKAGE",
            generators: npmSearchGenerator,
            debounce: true,
          },
        },
        {
          name: "--exact",
          description:
            "If specified, the SemVer specifier added to the package.json will be an exact version (e.g. without tilde or caret)",
        },
        {
          name: "--caret",
          description:
            'If specified, the SemVer specifier added to the package.json will be a prepended with a "caret" specifier ("^")',
        },
        {
          name: "--dev",
          description:
            'If specified, the package will be added to the "devDependencies" section of the package.json',
        },
        {
          name: ["-m", "--make-consistent"],
          description:
            "If specified, other packages with this dependency will have their package.json files updated to use the same version of the dependency",
        },
        {
          name: ["-s", "--skip-update"],
          description:
            'If specified, the "rush update" command will not be run after updating the package.json files',
        },
        {
          name: "--all",
          description:
            "If specified, the dependency will be added to all projects",
        },
      ],
    },
    {
      name: "change",
      description:
        "Records changes made to projects, indicating how the package version number should be bumped for the next publish",
      options: [
        {
          name: ["-v", "--verify"],
          description:
            "Verify the change file has been generated and that it is a valid JSON file",
        },
        {
          name: "--no-fetch",
          description:
            'Skips fetching the baseline branch before running "git diff" to detect changes',
        },
        {
          name: ["-b", "--target-branch"],
          description:
            'If this parameter is specified, compare the checked out branch with the specified branch to determine which projects were changed. If this parameter is not specified, the checked out branch is compared against the "master" branch',
          args: {
            name: "BRANCH",
          },
        },
        {
          name: "--overwrite",
          description:
            "If a changefile already exists, overwrite without prompting (or erroring in --bulk mode)",
        },
        {
          name: "--email",
          args: {
            name: "EMAIL",
          },
          description:
            "The email address to use in changefiles. If this parameter is not provided, the email address will be detected or prompted for in interactive mode",
        },
        {
          name: "--bulk",
          description:
            "If this flag is specified, apply the same change message and bump type to all changed projects. The --message and the --bump-type parameters must be specified if the --bulk parameter is specified",
        },
        {
          name: "--message",
          args: {
            name: "MESSAGE",
          },
          description:
            "The message to apply to all changed projects if the --bulk flag is provided",
        },
        {
          name: "--bump-type",
          args: {
            name: "BUMP_TYPE",
            suggestions: ["major", "minor", "patch", "none"],
          },
          description:
            "The bump type to apply to all changed projects if the --bulk flag is provided",
        },
      ],
    },
    {
      name: "check",
      description:
        "Checks each project's package.json files and ensures that all dependencies are of the same version throughout the repository",
      options: [
        {
          name: "--variant",
          description:
            "Run command using a variant installation configuration. This parameter may alternatively be specified via the RUSH_VARIANT environment variable",
          args: { name: "VARIANT" },
        },
        {
          name: "--json",
          description:
            "If this flag is specified, output will be in JSON format",
        },
      ],
    },
    {
      name: "deploy",
      description:
        "Prepares a deployment by copying a subset of Rush projects and their dependencies to a target folder",
      options: [
        {
          name: ["-p", "--project"],
          args: { name: "PROJECT_NAME" },
          description:
            'Specifies the name of the main Rush project to be deployed. It must appear in the "deploymentProjectNames" setting in the deployment config file',
        },
        {
          name: ["-s", "--scenario"],
          args: { name: "SCENARIO_NAME" },
          description:
            'By default, the deployment configuration is specified in "common/config/rush/deploy.json". You can use "--scenario" to specify an alternate name. The name must be lowercase and separated by dashes. For example, if SCENARIO_NAME is "web", then the config file would be "common/config/rush/deploy-web.json"',
        },
        {
          name: "--overwrite",
          description:
            "By default, deployment will fail if the target folder is not empty. SPECIFYING THIS FLAG WILL RECURSIVELY DELETE EXISTING CONTENTS OF THE TARGET FOLDER",
        },
        {
          name: ["-t", "--target-folder"],
          args: { name: "PATH" },
          description:
            'By default, files are deployed to the "common/deploy" folder inside the Rush repo. Use this parameter to specify a different location. WARNING: USE CAUTION WHEN COMBINING WITH "--overwrite". This parameter may alternatively be specified via the RUSH_DEPLOY_TARGET_FOLDER environment variable',
        },
        {
          name: "--create-archive",
          args: { name: "ARCHIVE_PATH" },
          description:
            'If specified, after the deployment has been prepared, "rush deploy" will create an archive containing the contents of the target folder. The newly created archive file will be placed according to the designated path, relative to the target folder. Supported file extensions: .zip',
        },
      ],
    },
    {
      name: "init",
      description: "Initializes a new repository to be managed by Rush",
      options: [
        {
          name: "--overwrite-existing",
          description:
            'By default "rush init" will not overwrite existing config files. Specify this switch to override that.  This can be useful when upgrading your repo to a newer release of Rush. WARNING: USE WITH CARE!',
        },
        {
          name: "--rush-example-repo",
          description:
            'When copying the template config files, this uncomments fragments that are used by the "rush-example" GitHub repo, which is a sample monorepo that illustrates many Rush features. This option is primarily intended for maintaining that example',
        },
      ],
    },
    {
      name: "init-autoinstaller",
      description: "Initializes a new autoinstaller",
      options: [
        {
          name: "--name",
          args: { name: "AUTOINSTALLER_NAME" },
          description:
            "Specifies the name of the autoinstaller folder, which must conform to the naming rules for NPM packages",
        },
      ],
    },
    {
      name: "init-deploy",
      description:
        'Creates a deployment scenario config file for use with "rush deploy"',
      options: [
        {
          name: ["-p", "--project"],
          args: { name: "PROJECT_NAME" },
          description:
            'Specifies the name of the main Rush project to be deployed in this scenario. It will be added to the "deploymentProjectNames" setting',
        },
        {
          name: ["-s", "--scenario"],
          args: { name: "SCENARIO" },
          description:
            'By default, the deployment configuration will be written to "common/config/rush/deploy.json". You can use "--scenario" to specify an alternate name. The name must be lowercase and separated by dashes. For example, if the name is "web", then the config file would be "common/config/rush/deploy-web.json"',
        },
      ],
    },
    {
      name: "install",
      description:
        "Install package dependencies for all projects in the repo according to the shrinkwrap file",
      options: [
        {
          name: ["-p", "--purge"],
          description: 'Perform "rush purge" before starting the installation',
        },
        {
          name: "--bypass-policy",
          description:
            'Overrides enforcement of the "gitPolicy" rules from rush.json (use honorably!)',
        },
        {
          name: "--no-link",
          description:
            'If "--no-link" is specified, then project symlinks will NOT be created after the installation completes. You will need to run "rush link" manually. This flag is useful for automated builds that want to report stages individually or perform extra operations in between the two stages. This flag is not supported when using workspaces',
        },
        {
          name: "--network-concurrency",
          args: { name: "COUNT" },
          description:
            "If specified, limits the maximum number of concurrent network requests. This is useful when troubleshooting network failures",
        },
        {
          name: "--debug-package-manager",
          description:
            "Activates verbose logging for the package manager. You will probably want to pipe the output of Rush to a file when using this command",
        },
        {
          name: "--max-install-attempts",
          args: { name: "NUMBER" },
          description:
            "Overrides the default maximum number of install attempts. The default value is 3",
        },
        {
          name: "--ignore-hooks",
          description:
            'Skips execution of the "eventHooks" scripts defined in rush.json. Make sure you know what you are skipping',
        },
        {
          name: "--variant",
          args: { name: "VARIANT" },
          description:
            "Run command using a variant installation configuration. This parameter may alternatively be specified via the RUSH_VARIANT environment variable",
        },
        ...PROJECT_SELECTION_OPTIONS,
        {
          name: "--check-only",
          description:
            "Only check the validity of the shrinkwrap file without performing an install",
        },
      ],
    },
    {
      name: "link",
      description: "Create node_modules symlinks for all projects",
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Deletes and recreates all links, even if the filesystem state seems to indicate that this is unnecessary",
        },
      ],
    },
    {
      name: "list",
      description: "List package information for all projects in the repo",
      options: [
        {
          name: ["-v", "--version"],
          description:
            "If this flag is specified, the project version will be displayed in a column along with the package name",
        },
        {
          name: ["-p", "--path"],
          description:
            "If this flag is specified, the project path will be displayed in a column along with the package name",
        },
        {
          name: "--full-path",
          description:
            "If this flag is specified, the project full path will be displayed in a column along with the package name",
        },
        {
          name: "--detailed",
          description:
            "For the non --json view, if this flag is specified, include path (-p), version (-v) columns along with the project's applicable: versionPolicy, versionPolicyName, shouldPublish, and reviewPolicy fields",
        },
        {
          name: "--json",
          description:
            "If this flag is specified, output will be in JSON format",
        },
      ],
    },
    {
      name: "publish",
      description:
        'Reads and processes package publishing change requests generated by "rush change"',
      options: [
        {
          name: ["-a", "--apply"],
          description:
            "If this flag is specified, the change requests will be applied to package.json files",
        },
        {
          name: ["-b", "--target-branch"],
          args: { name: "BRANCH" },
          description:
            "If this flag is specified, applied changes and deleted change requests will be committed and merged into the target branch",
        },
        {
          name: ["-p", "--publish"],
          description:
            "If this flag is specified, applied changes will be published to the NPM registry",
        },
        {
          name: "--add-commit-details",
          description:
            "Adds commit author and hash to the changelog.json files for each change",
        },
        {
          name: "--regenerate-changelogs",
          description:
            "Regenerates all changelog files based on the current JSON content",
        },
        {
          name: ["-r", "--registry"],
          args: { name: "REGISTRY" },
          description:
            "Publishes to a specified NPM registry. If this is specified, it will prevent the current commit will not be tagged",
        },
        {
          name: ["-n", "--npm-auth-token"],
          args: { name: "TOKEN" },
          deprecated: true,
          description:
            "(DEPRECATED) Specifies the authentication token to use during publishing. This parameter is deprecated because command line parameters may be readable by unrelated processes on a lab machine. Instead, a safer practice is to pass the token via an environment variable and reference it from your common/config/rush/.npmrc-publish file",
        },
        {
          name: ["-t", "--tag"],
          args: { name: "TAG" },
          description:
            "The tag option to pass to npm publish. By default NPM will publish using the 'latest' tag, even if the package is older than the current latest, so in publishing workflows for older releases, providing a tag is important. When hotfix changes are made, this parameter defaults to 'hotfix'",
        },
        {
          name: "--set-access-level",
          args: { name: "ACCESS_LEVEL", suggestions: ["public", "restricted"] },
          description:
            'By default, when Rush invokes "npm publish" it will publish scoped packages with an access level of "restricted". Scoped packages can be published with an access level of "public" by specifying that value for this flag with the initial publication. NPM always publishes unscoped packages with an access level of "public". For more information, see the NPM documentation for the "--access" option of "npm publish"',
        },
        {
          name: "--pack",
          description:
            "Packs projects into tarballs instead of publishing to npm repository. It can only be used when --include-all is specified. If this flag is specified, NPM registry related parameters will be ignored",
        },
        {
          name: "--release-folder",
          args: { name: "FOLDER" },
          description:
            "This parameter is used with --pack parameter to provide customized location for the tarballs instead of the default value",
        },
        {
          name: "--include-all",
          description:
            "If this flag is specified, all packages with shouldPublish=true in rush.json or with a specified version policy will be published if their version is newer than published version",
        },
        {
          name: "--version-policy",
          args: { name: "POLICY" },
          description:
            "Version policy name. Only projects with this version policy will be published if used with --include-all",
        },
        {
          name: "--prerelease-name",
          args: { name: "NAME" },
          description:
            "Bump up to a prerelease version with the provided prerelease name. Cannot be used with --suffix",
        },
        {
          name: "--partial-prerelease",
          description:
            "Used with --prerelease-name. Only bump packages to a prerelease version if they have changes",
        },
        {
          name: "--suffix",
          args: { name: "SUFFIX" },
          description:
            "Append a suffix to all changed versions. Cannot be used with --prerelease-name",
        },
        {
          name: "--force",
          description:
            "If this flag is specified with --publish, packages will be published with --force on npm",
        },
        {
          name: "--apply-git-tags-on-pack",
          description:
            "If specified with --publish and --pack, git tags will be applied for packages as if a publish was being run without --pack",
        },
        {
          name: ["-c", "--commit"],
          args: { name: "COMMIT_ID" },
          description:
            "Used in conjunction with git tagging -- apply git tags at the commit hash specified. If not provided, the current HEAD will be tagged",
        },
        {
          name: "--ignore-git-hooks",
          description:
            "Skips execution of all git hooks. Make sure you know what you are skipping",
        },
      ],
    },
    {
      name: "purge",
      description:
        "For diagnostic purposes, use this command to delete caches and other temporary files used by Rush",
      options: [
        {
          name: "--unsafe",
          description: `(UNSAFE!) Also delete shared files such as the package manager instances stored in the ".rush" folder in the user's home directory. This is a more aggressive fix that is NOT SAFE to run in a live environment because it will cause other concurrent Rush processes to fail`,
        },
      ],
    },
    {
      name: "scan",
      description:
        "When migrating projects into a Rush repo, this command is helpful for detecting undeclared dependencies",
      options: [
        {
          name: "--json",
          description:
            "If this flag is specified, output will be in JSON format",
        },
        {
          name: "--all",
          description:
            "If this flag is specified, output will list all detected dependencies",
        },
      ],
    },
    {
      name: "setup",
      description:
        "(EXPERIMENTAL) Invoke this command before working in a new repo to ensure that any required prerequisites are installed and permissions are configured",
    },
    {
      name: "unlink",
      description: "Delete node_modules symlinks for all projects in the repo",
    },
    {
      name: "update",
      description:
        "Install package dependencies for all projects in the repo, and create or update the shrinkwrap file as needed",
      options: [
        {
          name: ["-p", "--purge"],
          description: 'Perform "rush purge" before starting the installation',
        },
        {
          name: "--bypass-policy",
          description:
            'Overrides enforcement of the "gitPolicy" rules from rush.json (use honorably!)',
        },
        {
          name: "--no-link",
          description:
            'If "--no-link" is specified, then project symlinks will NOT be created after the installation completes.  You will need to run "rush link" manually. This flag is useful for automated builds that want to report stages individually or perform extra operations in between the two stages. This flag is not supported when using workspaces',
        },
        {
          name: "--network-concurrency",
          args: { name: "COUNT" },
          description:
            "If specified, limits the maximum number of concurrent network requests. This is useful when troubleshooting network failures",
        },
        {
          name: "--debug-package-manager",
          description:
            "Activates verbose logging for the package manager.  You will probably want to pipe the output of Rush to a file when using this command",
        },
        {
          name: "--max-install-attempts",
          args: { name: "NUMBER" },
          description:
            "Overrides the default maximum number of install attempts. The default value is 3",
        },
        {
          name: "--ignore-hooks",
          description:
            'Skips execution of the "eventHooks" scripts defined in rush.json. Make sure you know what you are skipping',
        },
        {
          name: "--variant",
          args: { name: "VARIANT" },
          description:
            "Run command using a variant installation configuration. This parameter may alternatively be specified via the RUSH_VARIANT environment variable",
        },
        {
          name: "--full",
          description:
            'Normally "rush update" tries to preserve your existing installed versions and only makes the minimum updates needed to satisfy the package.json files. This conservative approach prevents your PR from getting involved with package updates that are unrelated to your work. Use "--full" when you really want to update all dependencies to the latest SemVer-compatible version. This should be done periodically by a person or robot whose role is to deal with potential upgrade regressions',
        },
        {
          name: "--recheck",
          description: `If the shrinkwrap file appears to already satisfy the package.json files, then "rush update" will skip invoking the package manager at all. In certain situations this heuristic may be inaccurate. Use the "--recheck" flag to force the package manager to process the shrinkwrap file. This will also update your shrinkwrap file with Rush's fixups. (To minimize shrinkwrap churn, these fixups are normally performed only in the temporary folder.)`,
        },
      ],
    },
    {
      name: "update-autoinstaller",
      description: "Updates autoinstaller package dependenices",
      options: [
        {
          name: "--name",
          args: { name: "AUTOINSTALLER_NAME" },
          description:
            "Specifies the name of the autoinstaller, which must be one of the folders under common/autoinstallers",
        },
      ],
    },
    {
      name: "update-cloud-credentials",
      description:
        "(EXPERIMENTAL) Update the credentials used by the build cache provider",
      options: [
        {
          name: ["-i", "--interactive"],
          description:
            "Run the credential update operation in interactive mode, if supported by the provider",
        },
        {
          name: "--credential",
          args: { name: "CREDENTIAL_STRING" },
          description: "A static credential, to be cached",
        },
        {
          name: ["-d", "--delete"],
          description: "If specified, delete stored credentials",
        },
      ],
    },
    {
      name: "version",
      description: "Manage package versions in the repo",
      options: [
        {
          name: ["-b", "--target-branch"],
          args: { name: "BRANCH" },
          description:
            "If this flag is specified, changes will be committed and merged into the target branch",
        },
        {
          name: "--ensure-version-policy",
          description:
            "Updates package versions if needed to satisfy version policies",
        },
        {
          name: "--override-version",
          args: { name: "NEW_VERSION" },
          description:
            "Override the version in the specified --version-policy. This setting only works for lock-step version policy and when --ensure-version-policy is specified",
        },
        {
          name: "--bump",
          description: "Bumps package version based on version policies",
        },
        {
          name: "--bypass-policy",
          description: 'Overrides "gitPolicy" enforcement (use honorably!)',
        },
        {
          name: "--version-policy",
          args: { name: "POLICY" },
          description: "The name of the version policy",
        },
        {
          name: "--override-bump",
          args: { name: "BUMPTYPE" },
          description:
            "Overrides the bump type in the version-policy.json for the specified version policy. Valid BUMPTYPE values include: prerelease, patch, preminor, minor, major. This setting only works for lock-step version policy in bump action",
        },
        {
          name: "--override-prerelease-id",
          args: { name: "ID" },
          description:
            'Overrides the prerelease identifier in the version value of version-policy.json for the specified version policy. This setting only works for lock-step version policy. This setting increases to new prerelease id when "--bump" is provided but only replaces the prerelease name when "--ensure-version-policy" is provided',
        },
        {
          name: "--ignore-git-hooks",
          description:
            "Skips execution of all git hooks. Make sure you know what you are skipping",
        },
      ],
    },
    {
      name: "build",
      description:
        "Build all projects that haven't been built, or have changed since they were last built",
      options: [
        {
          name: ["-p", "--parallelism"],
          args: { name: "COUNT" },
          description:
            'Specifies the maximum number of concurrent processes to launch during a build. The COUNT should be a positive integer or else the word "max" to specify a count that is equal to the number of CPU cores. If this parameter is omitted, then the default value depends on the operating system and number of CPU cores. This parameter may alternatively be specified via the RUSH_PARALLELISM environment variable',
        },
        ...PROJECT_SELECTION_OPTIONS,
        {
          name: ["-v", "--verbose"],
          description:
            "Display the logs during the build, rather than just displaying the build status summary",
        },
        {
          name: ["-c", "--changed-projects-only"],
          description:
            'Normally the incremental build logic will rebuild changed projects as well as any projects that directly or indirectly depend on a changed project. Specify "--changed-projects-only" to ignore dependent projects, only rebuilding those projects whose files were changed. Note that this parameter is "unsafe"; it is up to the developer to ensure that the ignored projects are okay to ignore',
        },
        {
          name: "--ignore-hooks",
          description:
            'Skips execution of the "eventHooks" scripts defined in rush.json. Make sure you know what you are skipping',
        },
      ],
    },
    {
      name: "rebuild",
      description: "Clean and rebuild the entire set of projects",
      options: [
        {
          name: ["-p", "--parallelism"],
          args: { name: "COUNT" },
          description:
            'Specifies the maximum number of concurrent processes to launch during a build. The COUNT should be a positive integer or else the word "max" to specify a count that is equal to the number of CPU cores. If this parameter is omitted, then the default value depends on the operating system and number of CPU cores. This parameter may alternatively be specified via the RUSH_PARALLELISM environment variable',
        },
        ...PROJECT_SELECTION_OPTIONS,
        {
          name: ["-v", "--verbose"],
          description:
            "Display the logs during the build, rather than just displaying the build status summary",
        },
        {
          name: "--ignore-hooks",
          description:
            'Skips execution of the "eventHooks" scripts defined in rush.json. Make sure you know what you are skipping',
        },
      ],
    },
    {
      name: "tab-complete",
      description: "Provides tab completion",
      options: [
        {
          name: "--word",
          args: { name: "WORD" },
          description: 'The word to complete. The default value is ""',
        },
        {
          name: "--position",
          args: { name: "INDEX" },
          description:
            "The position in the word to be completed. The default value is 0",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show this help message and exit",
      isPersistent: true,
    },
    {
      name: ["-d", "--debug"],
      description:
        "Show the full call stack if an error occurs while executing the tool",
    },
  ],
};
export default completionSpec;
