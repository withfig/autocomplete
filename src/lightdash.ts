const completionSpec: Fig.Spec = {
  name: "lightdash",
  description: "CLI for Lightdash",
  subcommands: [
    {
      name: "config",
      description: "Manage Lightdash configuration",
      subcommands: [
        {
          name: "set-project",
          description: "Choose project",
        },
      ],
    },
    {
      name: "login",
      description: "Logs in to a Lightdash instance",
      args: {
        name: "url",
        description: "URL of the Lightdash instance",
      },
      options: [
        {
          name: "--token",
          description: "Login with a personal access token",
        },
        {
          name: "--verbose",
          description: "(default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
      ],
    },
    {
      name: "compile",
      description: "Compiles Lightdash resources",
      options: [
        {
          name: "--project-dir",
          description: "The directory of the dbt project (default: '.')",
          args: {
            name: "path",
            template: "folders",
            suggestions: ["profiles"],
          },
          
        },
        {
          name: "--profiles-dir",
          description: "The directory of the dbt profiles (default: '~/.dbt')",
          args: {
            name: "path",
            template: "folders",
          },
          
        },
        {
          name: "--profile",
          description:
            "The name of the profile to use (defaults to profile name in dbt_project.yml)",
          args: {
            name: "name",
          },
          
        },
        {
          name: "--target",
          description: "Target to use in profiles.yml file",
          args: {
            name: "name",
          },
          
        },
        {
          name: "--vars",
          args: {
            name: "vars",
          },
          
        },
        {
          name: "--threads",
          args: {
            name: "number",
          },
          
        },
        {
          name: "--no-version-check",
          
        },
        {
          name: ["-s", "--select"],
          description: "Specify models (accepts dbt selection syntax)",
          args: {
            name: "models",
            isVariadic: true,
          },
          
        },
        {
          name: ["-m", "--models"],
          description: "Specify models (accepts dbt selection syntax)",
          args: {
            name: "models",
            isVariadic: true,
          },
          
        },
        {
          name: "--exclude",
          args: {
            name: "models",
            isVariadic: true,
          },
          
        },
        {
          name: "--selector",
          args: {
            name: "selector_name",
          },
          
        },
        {
          name: "--state",
          args: {
            name: "state",
          },
          
        },
        {
          name: "--full-refresh",
          
        },
        {
          name: "--verbose",
          description: "(default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
        {
          name: "--skip-warehouse-catalog",
          description:
            "Skip fetch warehouse catalog and use types in yml (default: false)",
          
        },
        {
          name: "--skip-dbt-compile",
          description:
            "Skip `dbt compile` and deploy from the existing ./target/manifest.json (default: false)",
          
        },
      ],
    },
    {
      name: "dbt",
      description: "Runs dbt commands",
      loadSpec: "dbt",
    },
    {
      name: "preview",
      description:
        "Creates a new preview project - waits for a keypress to stop",
      options: [
        {
          name: "--name",
          description:
            "Custom name for the preview. If a name is not provided, a unique, randomly generated name will be created",
          args: {
            name: "preview_name",
          },
          
        },
        {
          name: "--project-dir",
          description: "The directory of the dbt project (default: '.')",
          args: {
            name: "path",
            template: "folders",
            suggestions: ["profiles"],
            isOptional: true,
          },
          
        },
        {
          name: "--profiles-dir",
          description: "The directory of the dbt profiles (default: '~/.dbt')",
          args: {
            name: "path",
            template: "folders",
          },
          
        },
        {
          name: "--profile",
          description:
            "The name of the profile to use (defaults to profile name in dbt_project.yml)",
          args: {
            name: "name",
          },
          
        },
        {
          name: "--target",
          description: "Target to use in profiles.yml file",
          args: {
            name: "name",
          },
          
        },
        {
          name: "--vars",
          args: {
            name: "vars",
          },
          
        },
        {
          name: "--threads",
          args: {
            name: "number",
          },
          
        },
        {
          name: "--no-version-check",
          
        },
        {
          name: ["-s", "--select"],
          description: "Specify models (accepts dbt selection syntax)",
          args: {
            name: "models",
          },
          
        },
        {
          name: ["-m", "--models"],
          description: "Specify models (accepts dbt selection syntax)",
          args: {
            name: "models",
          },
          
        },
        {
          name: "--exclude",
          args: {
            name: "models",
          },
          
        },
        {
          name: "--selector",
          args: {
            name: "selector_name",
          },
          
        },
        {
          name: "--state",
          args: {
            name: "state",
          },
          
        },
        {
          name: "--full-refresh",
          
        },
        {
          name: "--verbose",
          description: "(default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
        {
          name: "--start-of-week",
          description:
            "Specifies the first day of the week (used by week-related date functions). 0 (Monday) to 6 (Sunday)",
          args: {
            name: "number",
          },
          
        },
        {
          name: "--skip-warehouse-catalog",
          description:
            "Skip fetch warehouse catalog and use types in yml (default: false)",
          
        },
        {
          name: "--skip-dbt-compile",
          description:
            "Skip `dbt compile` and deploy from the existing ./target/manifest.json (default: false)",
          
        },
        {
          name: "--use-dbt-list",
          description:
            "Use `dbt list` instead of `dbt compile` to generate dbt manifest.json (default: true)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
          },
          
        },
        {
          name: "--ignore-errors",
          description: "Allows deploy with errors on compile (default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
      ],
    },
    {
      name: "start-preview",
      description: "Creates a new preview project",
      options: [
        {
          name: "--name",
          isRequired: true,
          description:
            "[required] Name for the preview project. If a preview project with this name already exists, it will be updated, otherwise it will create a new preview project",
          args: {
            name: "preview name",
          },
        },
        {
          name: "--project-dir",
          description: "The directory of the dbt project (default: '.')",
          args: {
            name: "path",
            template: "folders",
            suggestions: ["profiles"],
          },
          
        },
        {
          name: "--profiles-dir",
          description: "The directory of the dbt profiles (default: '~/.dbt')",
          args: {
            name: "path",
            template: "folders",
          },
          
        },
        {
          name: "--profile",
          description:
            "The name of the profile to use (defaults to profile name in dbt_project.yml)",
          args: {
            name: "name",
          },
          
        },
        {
          name: "--target",
          description: "Target to use in profiles.yml file",
          args: {
            name: "name",
          },
          
        },
        {
          name: "--vars",
          args: {
            name: "vars",
          },
          
        },
        {
          name: "--threads",
          args: {
            name: "number",
          },
          
        },
        {
          name: "--no-version-check",
          
        },
        {
          name: ["-s", "--select"],
          description: "Specify models (accepts dbt selection syntax)",
          args: {
            name: "models",
          },
          
        },
        {
          name: ["-m", "--models"],
          description: "Specify models (accepts dbt selection syntax)",
          args: {
            name: "models",
          },
          
        },
        {
          name: "--exclude",
          args: {
            name: "models",
          },
          
        },
        {
          name: "--selector",
          args: {
            name: "selector_name",
          },
          
        },
        {
          name: "--state",
          args: {
            name: "state",
          },
          
        },
        {
          name: "--full-refresh",
          
        },
        {
          name: "--verbose",
          description: "(default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
        {
          name: "--start-of-week",
          description:
            "Specifies the first day of the week (used by week-related date functions). 0 (Monday) to 6 (Sunday)",
          args: {
            name: "number",
          },
          
        },
        {
          name: "--skip-warehouse-catalog",
          description:
            "Skip fetch warehouse catalog and use types in yml (default: false)",
          
        },
        {
          name: "--skip-dbt-compile",
          description:
            "Skip `dbt compile` and deploy from the existing ./target/manifest.json (default: false)",
          
        },
        {
          name: "--use-dbt-list",
          description:
            "Use `dbt list` instead of `dbt compile` to generate dbt manifest.json (default: true)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
          },
          
        },
        {
          name: "--ignore-errors",
          description: "Allows deploy with errors on compile (default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
      ],
    },
    {
      name: "stop-preview",
      description: "Deletes preview project",
      options: [
        {
          name: "--name",
          isRequired: true,
          description: "[required] Name for the preview project to be deleted",
          args: {
            name: "preview name",
          },
        },
        {
          name: "--verbose",
          description: "(default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
      ],
    },
    {
      name: "download",
      description: "Downloads charts and dashboards as code",
      options: [
        {
          name: "--verbose",
          description: "(default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
        {
          name: ["-c", "--charts"],
          description:
            "Specify chart slugs, uuids, or urls to download (default: [])",
          args: {
            name: "charts",
            isVariadic: true,
          },
          
        },
        {
          name: ["-d", "--dashboards"],
          description:
            "Specify dashboard slugs, uuids, or urls to download (default: [])",
          args: {
            name: "dashboards",
            isVariadic: true,
          },
          
        },
        {
          name: ["-l", "--language-map"],
          description:
            "Generate a language maps for the downloaded charts and dashboards (default: false)",
          
        },
        {
          name: ["-p", "--path"],
          description:
            "Specify a custom path to download charts and dashboards",
          args: {
            name: "path",
            template: "folders",
          },
          
        },
        {
          name: "--project",
          description: "Specify a project UUID to download",
          args: {
            name: "project uuid",
          },
          
        },
      ],
    },
    {
      name: "upload",
      description: "Uploads charts and dashboards as code",
      options: [
        {
          name: "--verbose",
          description: "(default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
        {
          name: ["-c", "--charts"],
          description: "Specify chart slugs to force upload (default: [])",
          args: {
            name: "charts",
            isVariadic: true,
          },
          
        },
        {
          name: ["-d", "--dashboards"],
          description: "Specify dashboard slugs to force upload (default: [])",
          args: {
            name: "dashboards",
            isVariadic: true,
          },
          
        },
        {
          name: "--force",
          description:
            "Force upload even if local files have not changed, use this when you want to upload files to a new project (default: false)",
          
        },
        {
          name: ["-p", "--path"],
          description:
            "Specify a custom path to upload charts and dashboards from",
          args: {
            name: "path",
            template: "folders",
          },
          
        },
        {
          name: "--project",
          description: "Specify a project UUID to upload",
          args: {
            name: "project uuid",
          },
          
        },
      ],
    },
    {
      name: "deploy",
      description: "Compiles and deploys a Lightdash project",
      options: [
        {
          name: "--project-dir",
          description: "The directory of the dbt project (default: '.')",
          args: {
            name: "path",
            template: "folders",
            suggestions: ["profiles"],
          },
          
        },
        {
          name: "--profiles-dir",
          description: "The directory of the dbt profiles (default: '~/.dbt')",
          args: {
            name: "path",
            template: "folders",
          },
          
        },
        {
          name: "--profile",
          description:
            "The name of the profile to use (defaults to profile name in dbt_project.yml)",
          args: {
            name: "name",
          },
          
        },
        {
          name: "--target",
          description: "Target to use in profiles.yml file",
          args: {
            name: "name",
          },
          
        },
        {
          name: "--vars",
          args: {
            name: "vars",
          },
          
        },
        {
          name: "--threads",
          args: {
            name: "number",
          },
          
        },
        {
          name: "--no-version-check",
          
        },
        {
          name: ["-s", "--select"],
          description: "Specify models (accepts dbt selection syntax)",
          args: {
            name: "models",
          },
          
        },
        {
          name: ["-m", "--models"],
          description: "Specify models (accepts dbt selection syntax)",
          args: {
            name: "models",
          },
          
        },
        {
          name: "--exclude",
          args: {
            name: "models",
          },
          
        },
        {
          name: "--selector",
          args: {
            name: "selector_name",
          },
          
        },
        {
          name: "--state",
          args: {
            name: "state",
          },
          
        },
        {
          name: "--full-refresh",
        },
        {
          name: "--verbose",
          description: "(default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
        {
          name: "--create",
          description:
            "Create a new project. If a project name is not provided, you'll be prompted for one on creation",
          args: {
            name: "project name",
          },
          
        },
        {
          name: "--start-of-week",
          description:
            "Specifies the first day of the week (used by week-related date functions). 0 (Monday) to 6 (Sunday)",
          args: {
            name: "number",
          },
          
        },
        {
          name: "--skip-warehouse-catalog",
          description:
            "Skip fetch warehouse catalog and use types in yml (default: false)",
          
        },
        {
          name: "--skip-dbt-compile",
          description:
            "Skip `dbt compile` and deploy from the existing ./target/manifest.json (default: false)",
          
        },
        {
          name: "--use-dbt-list",
          description:
            "Use `dbt list` instead of `dbt compile` to generate dbt manifest.json (default: true)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
          },
          
        },
        {
          name: "--ignore-errors",
          description: "Allows deploy with errors on compile (default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
      ],
    },
    {
      name: "refresh",
      description: "Refreshes Lightdash project with remote repository",
      options: [
        {
          name: "--verbose",
          description: "(default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
      ],
    },
    {
      name: "validate",
      description: "Validates a project",
      options: [
        {
          name: "--project",
          description:
            "Project UUID to validate, if not provided, the last preview will be used",
          args: {
            name: "project uuid",
          },
          
        },
        {
          name: "--project-dir",
          description: "The directory of the dbt project (default: '.')",
          args: {
            name: "path",
            template: "folders",
            suggestions: ["profiles"],
          },
          
        },
        {
          name: "--profiles-dir",
          description: "The directory of the dbt profiles (default: '~/.dbt')",
          args: {
            name: "path",
            template: "folders",
          },
          
        },
        {
          name: "--profile",
          description:
            "The name of the profile to use (defaults to profile name in dbt_project.yml)",
          args: {
            name: "name",
          },
          
        },
        {
          name: "--target",
          description: "Target to use in profiles.yml file",
          args: {
            name: "name",
          },
          
        },
        {
          name: "--vars",
          args: {
            name: "vars",
          },
          
        },
        {
          name: "--threads",
          args: {
            name: "number",
          },
          
        },
        {
          name: "--no-version-check",
          
        },
        {
          name: "--preview",
          description:
            "Validate the last preview if available (default: false)",
          
        },
        {
          name: ["-s", "--select"],
          description: "Specify models (accepts dbt selection syntax)",
          args: {
            name: "models",
          },
          
        },
        {
          name: ["-m", "--models"],
          description: "Specify models (accepts dbt selection syntax)",
          args: {
            name: "models",
          },
          
        },
        {
          name: "--exclude",
          args: {
            name: "models",
          },
          
        },
        {
          name: "--selector",
          args: {
            name: "selector_name",
          },
          
        },
        {
          name: "--state",
          args: {
            name: "state",
          },
          
        },
        {
          name: "--full-refresh",
          
        },
        {
          name: "--verbose",
          description: "(default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
        {
          name: "--skip-warehouse-catalog",
          description:
            "Skip fetch warehouse catalog and use types in yml (default: false)",
          
        },
        {
          name: "--skip-dbt-compile",
          description:
            "Skip `dbt compile` and deploy from the existing ./target/manifest.json (default: false)",
          
        },
        {
          name: "--use-dbt-list",
          description:
            "Use `dbt list` instead of `dbt compile` to generate dbt manifest.json (default: true)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
          },
          
        },
        {
          name: "--only",
          description:
            "Specify project elements to validate (choices: 'charts', 'dashboards', 'tables', default:['charts','dashboards','tables'])",
          args: {
            name: "elems",
            isVariadic: true,
            suggestions: ["charts", "dashboards", "tables"],
          },
          
        },
      ],
    },
    {
      name: "generate",
      description: "Generates a new schema.yml file for model",
      options: [
        {
          name: ["-s", "--select"],
          description: "Specify models (accepts dbt selection syntax)",
          args: {
            name: "models",
          },
          isRequired: true,
        },
        {
          name: ["-m", "--models"],
          description: "Specify models (accepts dbt selection syntax)",
          args: {
            name: "models",
          },
          isRequired: true,
        },
        {
          name: ["-e", "--exclude"],
          args: {
            name: "models",
          },
          
        },
        {
          name: "--project-dir",
          description: "The directory of the dbt project (default: '.')",
          args: {
            name: "path",
            template: "folders",
            suggestions: ["profiles"],
          },
          
        },
        {
          name: "--profiles-dir",
          description: "The directory of the dbt profiles (default: '~/.dbt')",
          args: {
            name: "path",
            template: "folders",
          },
          
        },
        {
          name: "--profile",
          description:
            "The name of the profile to use (defaults to profile name in dbt_project.yml)",
          args: {
            name: "name",
          },
          
        },
        {
          name: "--target",
          description: "Target to use in profiles.yml file",
          args: {
            name: "name",
          },
          
        },
        {
          name: "--vars",
          args: {
            name: "vars",
          },
          
        },
        {
          name: ["-y", "--assume-yes"],
          description: "Assume yes to prompts (default: false)",
          
        },
        {
          name: "--skip-existing",
          description: "Skip files that already exist (default: false)",
          
        },
        {
          name: "--exclude-meta",
          description:
            "Exclude Lightdash metadata from the generated .yml (default: false)",
          
        },
        {
          name: "--verbose",
          description: "(default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
      ],
    },
    {
      name: "generate-exposures",
      description:
        "[Experimental command] Generates a .yml file for Lightdash exposures",
      options: [
        {
          name: "--project-dir",
          description: "The directory of the dbt project (default: '.')",
          args: {
            name: "path",
            template: "folders",
            suggestions: ["profiles"],
          },
          
        },
        {
          name: "--verbose",
          description: "(default: false)",
          args: {
            name: "boolean",
            suggestions: ["true", "false"],
            isOptional: true,
          },
          
        },
        {
          name: "--output",
          description:
            "The path where the output exposures YAML file will be written",
          args: {
            name: "path",
            template: "folders",
          },
          isRequired: true,
        },
      ],
    },
    {
      name: "help",
      description: "Display help for command",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Display help for command",
    },
    {
      name: ["--version", "-V"],
      description: "Output the version number",
    },
  ],
  // Only uncomment if lightdash takes an argument
  // args: {}
};
export default completionSpec;
