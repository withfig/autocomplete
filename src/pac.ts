const backupRetentionPeriodDays: Fig.Suggestion[] = [
  { name: "7", description: "7" },
  { name: "14", description: "14" },
  { name: "21", description: "21" },
  { name: "28", description: "28" },
];
const solutionTypes: Fig.Suggestion[] = [
  { name: "Unmanaged", description: "Unmanaged" },
  { name: "Managed", description: "Managed" },
  { name: "Both", description: "Both" },
];
const envCopyTypes: Fig.Suggestion[] = [
  { name: "MinimalCopy", description: "MinimalCopy" },
  { name: "FullCopy", description: "FullCopy" },
];
const teamTypes: Fig.Suggestion[] = [
  { name: "Owner", description: "Owner" },
  { name: "Access", description: "Access" },
  { name: "AadSecurityGroup", description: "AadSecurityGroup" },
  { name: "AadOfficeGroup", description: "AadOfficeGroup" },
];
const membershipTypes: Fig.Suggestion[] = [
  { name: "MembersAndGuests", description: "MembersAndGuests" },
  { name: "Members", description: "Members" },
  { name: "Owners", description: "Owners" },
  { name: "Guests", description: "Guests" },
];
const solutionCheckerMode: Fig.Suggestion[] = [
  { name: "none", description: "None" },
  { name: "warn", description: "Warn" },
  { name: "block", description: "Block" },
];
const cloudTypes: Fig.Suggestion[] = [
  { name: "Public", description: "Public" },
  { name: "Preprod", description: "Preprod" },
  { name: "Test", description: "Test" },
  { name: "UsGov", description: "UsGov" },
  { name: "UsGovHigh", description: "UsGovHigh" },
  { name: "UsGovDod", description: "UsGovDod" },
  { name: "China", description: "China" },
];
const connectionTemplates: Fig.Suggestion[] = [
  { name: "NoAuth", description: "NoAuth" },
  { name: "BasicAuth", description: "BasicAuth" },
  { name: "ApiKey", description: "ApiKey" },
  { name: "OAuthGeneric", description: "OAuthGeneric" },
  { name: "OAuthAAD", description: "OAuthAAD" },
];
const trueFalse: Fig.Suggestion[] = [
  { name: "true", description: "True" },
  { name: "false", description: "False" },
];
const syncAsync: Fig.Suggestion[] = [
  { name: "sync", description: "Sync" },
  { name: "async", description: "Async" },
];
const skipFault: Fig.Suggestion[] = [
  { name: "skip", description: "Skip" },
  { name: "fault", description: "Fault" },
];
const pcfComponentTypes: Fig.Suggestion[] = [
  { name: "field", description: "Field" },
  { name: "dataset", description: "Dataset" },
];
const pcfFrameworkTypes: Fig.Suggestion[] = [
  { name: "none", description: "None" },
  { name: "react", description: "React" },
];
const pcfPatchStrategies: Fig.Suggestion[] = [
  { name: "None", description: "None" },
  { name: "GitTags", description: "GitTags" },
  { name: "FileTracking", description: "FileTracking" },
  { name: "Manifest", description: "Manifest" },
];
const msBuildVerbosityLevels: Fig.Suggestion[] = [
  { name: "minimal", description: "Minimal" },
  { name: "normal", description: "Normal" },
  { name: "detailed", description: "Detailed" },
  { name: "diagnostic", description: "Diagnostic" },
];
const pcfPatchTargets: Fig.Suggestion[] = [
  { name: "build", description: "Build" },
  { name: "project", description: "Project" },
];
const importPluginType: Fig.Suggestion[] = [
  { name: "Nuget", description: "Nuget" },
  { name: "Assembly", description: "Assembly" },
];
const powerAppsCheckerRegions: Fig.Suggestion[] = [
  { name: "PreviewUnitedStates", description: "PreviewUnitedStates" },
  { name: "UnitedStates", description: "UnitedStates" },
  { name: "Europe", description: "Europe" },
  { name: "Asia", description: "Asia" },
  { name: "Australia", description: "Australia" },
  { name: "Japan", description: "Japan" },
  { name: "India", description: "India" },
  { name: "Canada", description: "Canada" },
  { name: "SouthAmerica", description: "SouthAmerica" },
  { name: "UnitedKingdom", description: "UnitedKingdom" },
  { name: "France", description: "France" },
  { name: "SouthAfrica", description: "SouthAfrica" },
  { name: "Germany", description: "Germany" },
  { name: "UnitedArabEmirates", description: "UnitedArabEmirates" },
  { name: "Switzerland", description: "Switzerland" },
  { name: "Norway", description: "Norway" },
  { name: "Singapore", description: "Singapore" },
  { name: "Korea", description: "Korea" },
  { name: "USGovernment", description: "USGovernment" },
  { name: "USGovernmentL4", description: "USGovernmentL4" },
  { name: "USGovernmentL5DoD", description: "USGovernmentL5DoD" },
  { name: "China", description: "China" },
];
const applicationInstallStates: Fig.Suggestion[] = [
  { name: "NotInstalled", description: "NotInstalled" },
  { name: "Installed", description: "Installed" },
  { name: "All", description: "All" },
];
const solutionPatchStrategies: Fig.Suggestion[] = [
  { name: "None", description: "None" },
  { name: "GitTags", description: "GitTags" },
  { name: "FileTracking", description: "FileTracking" },
  { name: "Solution", description: "Solution" },
];
const logLevels: Fig.Suggestion[] = [
  { name: "Off", description: "Off" },
  { name: "Critical", description: "Critical" },
  { name: "Error", description: "Error" },
  { name: "Warning", description: "Warning" },
  { name: "Information", description: "Information" },
  { name: "Verbose", description: "Verbose" },
  { name: "ActivityTracing", description: "ActivityTracing" },
  { name: "All", description: "All" },
];
const environmentTypes: Fig.Suggestion[] = [
  {
    name: "Trial",
    description: "Trial",
  },
  {
    name: "Sandbox",
    description: "Sandbox",
  },
  {
    name: "Production",
    description: "Production",
  },
  {
    name: "Developer",
    description: "Developer",
  },
  {
    name: "Teams",
    description: "Teams",
  },
  {
    name: "SubscriptionBasedTrial",
    description: "SubscriptionBasedTrial",
  },
];

const azureLocations: Fig.Suggestion[] = [
  { name: "unitedstates", description: "Unitedstates" },
  { name: "unitedstatesfirstrelease", description: "Unitedstatesfirstrelease" },
  { name: "europe", description: "Europe" },
  { name: "asia", description: "Asia" },
  { name: "australia", description: "Australia" },
  { name: "india", description: "India" },
  { name: "japan", description: "Japan" },
  { name: "canada", description: "Canada" },
  { name: "unitedkingdom", description: "Unitedkingdom" },
  { name: "southamerica", description: "Southamerica" },
  { name: "france", description: "France" },
  { name: "unitedarabemirates", description: "Unitedarabemirates" },
  { name: "germany", description: "Germany" },
  { name: "switzerland", description: "Switzerland" },
  { name: "norway", description: "Norway" },
  { name: "korea", description: "Korea" },
];

const completionSpec: Fig.Spec = {
  name: "pac",
  description: "Power Platform CLI",
  subcommands: [
    {
      name: "admin",
      description: "Work with your Power Platform Admin Account",
      subcommands: [
        {
          name: "list",
          description: "List all environments from your tenant",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "List all environments that contain given string in their name or ID",
              args: {
                name: "string",
              },
            },
            {
              name: ["--type", "-t"],
              description: "List all environments with the given type",
              args: {
                name: "environmentTypes",
                suggestions: environmentTypes,
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "List all environments that contain given string in their name",
              args: {
                name: "string",
              },
            },
            {
              name: ["--organization-id", "-oi"],
              description:
                "List all environments that contain given string in their organization ID",
              args: {
                name: "string",
              },
            },
            {
              name: ["--application", "-a"],
              description:
                "List all environments that have specified application installed. To specify application, use unique name or ID",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Creates a Dataverse instance in your tenant",
          options: [
            {
              name: ["--name", "-n"],
              description: "Sets the name of the environment",
              args: {
                name: "string",
              },
            },
            {
              name: ["--region", "-r"],
              description:
                "Sets the environment's region name. [defaults to unitedstates]",
              args: {
                name: "string",
                suggestions: azureLocations,
              },
            },
            {
              name: ["--type", "-t"],
              description: "Sets the environment Type",
              isRequired: true,
              args: {
                name: "environmentTypes",
                suggestions: environmentTypes,
              },
            },
            {
              name: ["--currency", "-c"],
              description:
                "Sets the currency used for your environment. [defaults to USD]",
              args: {
                name: "string",
              },
            },
            {
              name: ["--language", "-l"],
              description:
                "Sets the language used for your environment. [defaults to English]",
              args: {
                name: "string",
              },
            },
            {
              name: ["--templates", "-tm"],
              description:
                "Sets the Dynamics 365 app that needs to be deployed, passed as comma separated values. For example: -tm 'D365_Sample, D365_Sales'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--domain", "-d"],
              description:
                "The domain name is part of the environment URL. If domain name is already in use, a numeric value is appended to the domain name. For example: If 'contoso' is already in use, then the environment URL is updated to https://{contoso}0.crm.dynamics.com",
              args: {
                name: "string",
              },
            },
            {
              name: ["--input-file", "-if"],
              description:
                "The verb arguments to be passed in a .json input file. For example: {'name' : 'contoso'}. The arguments passed through command-line will take precedence over arguments from the .json input file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--async", "-a"],
              description:
                "Optional boolean argument to run pac verbs asynchronously, defaults to false",
            },
            {
              name: ["--team-id", "-tid"],
              description: "Team ID as Guid",
              args: {
                name: "string",
              },
            },
            {
              name: ["--max-async-wait-time", "-wt"],
              description:
                "Max asynchronous wait time in minutes. The default value is 60 minutes",
              args: {
                name: "string",
              },
            },
            {
              name: ["--user", "-u"],
              description:
                "Object ID or user principal name (UPN) of Microsoft Entra ID user to be assigned to the environment",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "backup",
          description: "Takes a manual backup of your environment",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "Environment URL or ID of the Environment that requires backup",
              args: {
                name: "string",
              },
            },
            {
              name: ["--label", "-l"],
              description: "Sets the backup label as provided",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--notes", "-n"],
              description: "**ignored**: Additional notes for this backup",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "set-backup-retention-period",
          description: "Takes a manual backup of your environment",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "Environment URL or ID of the Environment that requires backup",
              args: {
                name: "string",
              },
            },
            {
              name: ["--backup-retention-period", "-br"],
              description:
                "Sets the backup retention period in days as provided. Valid values are: 7, 14, 21, 28",
              isRequired: true,
              args: {
                name: "string",
                suggestions: backupRetentionPeriodDays,
              },
            },
            {
              name: ["--async", "-a"],
              description:
                "Optional boolean argument to run pac verbs asynchronously, defaults to false",
            },
            {
              name: ["--max-async-wait-time", "-wt"],
              description:
                "Max asynchronous wait time in minutes. The default value is 60 minutes",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes the environment from your tenant",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "Environment URL or ID of the Environment that needs to be deleted from your tenant",
              args: {
                name: "string",
              },
            },
            {
              name: ["--async", "-a"],
              description:
                "Optional boolean argument to run pac verbs asynchronously, defaults to false",
            },
            {
              name: ["--max-async-wait-time", "-wt"],
              description:
                "Max asynchronous wait time in minutes. The default value is 60 minutes",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "reset",
          description: "Reset the environment from your tenant",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "URL or ID of the Environment that needs to be reset",
              args: {
                name: "string",
              },
            },
            {
              name: ["--currency", "-c"],
              description:
                "Sets the currency used for your environment. [defaults to USD]",
              args: {
                name: "string",
              },
            },
            {
              name: ["--domain", "-d"],
              description:
                "The domain name is part of the environment URL. If domain name is already in use, a numeric value is appended to the domain name. For example: If 'contoso' is already in use, then the environment URL is updated to https://{contoso}0.crm.dynamics.com",
              args: {
                name: "string",
              },
            },
            {
              name: ["--name", "-n"],
              description: "Sets the name of the environment",
              args: {
                name: "string",
              },
            },
            {
              name: ["--language", "-l"],
              description:
                "Sets the language used for your environment. [defaults to English]",
              args: {
                name: "string",
              },
            },
            {
              name: ["--purpose", "-p"],
              description:
                "Sets the description used to associate the environment with a specific intent",
              args: {
                name: "string",
              },
            },
            {
              name: ["--templates", "-tm"],
              description:
                "Sets the Dynamics 365 app that needs to be deployed, passed as comma separated values. For example: -tm 'D365_Sample, D365_Sales'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--input-file", "-if"],
              description:
                "The verb arguments to be passed in a .json input file. For example: {'name' : 'contoso'}. The arguments passed through command-line will take precedence over arguments from the .json input file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--async", "-a"],
              description:
                "Optional boolean argument to run pac verbs asynchronously, defaults to false",
            },
            {
              name: ["--max-async-wait-time", "-wt"],
              description:
                "Max asynchronous wait time in minutes. The default value is 60 minutes",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "list-backups",
          description: "Lists all backups of your environment",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "List all environments that contain a given string in their Environment ID or URL",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "restore",
          description: "Restores an environment to a given backup",
          options: [
            {
              name: ["--source-env", "-se"],
              description:
                "Environment URL or ID of the source environment required for restore",
              args: {
                name: "string",
              },
            },
            {
              name: ["--target-env", "-te"],
              description:
                "Environment URL or ID of the target environment required for restore. This would default to source URL/ID if not provided",
              args: {
                name: "string",
              },
            },
            {
              name: ["--selected-backup", "-sb"],
              description:
                "DateTime of the backup in 'mm/dd/yyyy hh:mm' format OR string 'latest'",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--name", "-n"],
              description: "Optional name of the restored environment",
              args: {
                name: "string",
              },
            },
            {
              name: ["--skip-audit-data", "-sa"],
              description:
                "Switch indicating whether audit data should be skipped",
            },
            {
              name: ["--async", "-a"],
              description:
                "Optional boolean argument to run pac verbs asynchronously, defaults to false",
            },
            {
              name: ["--max-async-wait-time", "-wt"],
              description:
                "Max asynchronous wait time in minutes. The default value is 60 minutes",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "copy",
          description: "Copy Source Environment to Destination Environment",
          options: [
            {
              name: ["--source-env", "-se"],
              description:
                "Environment URL or ID of the source environment that is being copied",
              args: {
                name: "string",
              },
            },
            {
              name: ["--target-env", "-te"],
              description: "Environment URL or ID of the target environment",
              args: {
                name: "string",
              },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the target environment",
              args: {
                name: "string",
              },
            },
            {
              name: ["--type", "-t"],
              description: "",
              args: {
                name: "string",
                suggestions: envCopyTypes,
              },
            },
            {
              name: ["--skip-audit-data", "-sa"],
              description:
                "Switch indicating whether audit data should be skipped",
            },
            {
              name: ["--async", "-a"],
              description:
                "Optional boolean argument to run pac verbs asynchronously, defaults to false",
            },
            {
              name: ["--max-async-wait-time", "-wt"],
              description:
                "Max asynchronous wait time in minutes. The default value is 60 minutes",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "status",
          description:
            "This command lists the status of all the operations in progress",
        },
        {
          name: "assign-user",
          description:
            "Assign a user to a target Dataverse environment with specified security role",
          options: [
            {
              name: ["--environment", "-env"],
              description: "ID or URL of the environment to assign a user to",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--user", "-u"],
              description:
                "Object ID or user principal name (UPN) of Microsoft Entra ID user to be assigned to the environment or Application ID if assigning an Application User",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--role", "-r"],
              description: "Name or ID of security role to be applied to user",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--application-user", "-au"],
              description:
                "Specifies whether the input user is an application user. If a business unit isn't specified, the application user is added to the authenticated users business unit",
            },
            {
              name: ["--business-unit", "-bu"],
              description:
                "ID of business unit to associate application user with",
              args: {
                name: "string",
              },
            },
            {
              name: ["--async", "-a"],
              description:
                "Optional boolean argument to run pac verbs asynchronously, defaults to false",
            },
          ],
        },
        {
          name: "assign-group",
          description:
            "Assign group to target Dataverse environment with specified security role",
          options: [
            {
              name: ["--environment", "-env"],
              description: "ID or URL of the environment to assign a user to",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--group", "-g"],
              description:
                "Microsoft Entra ID object ID of group to assign to target Dataverse environment",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--group-name", "-gn"],
              description: "Name of the group or team to create in Dataverse",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--role", "-r"],
              description: "Name or ID of security role to be applied to user",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--team-type", "-tt"],
              description: "Type of team",
              isRequired: true,
              args: {
                name: "string",
                suggestions: teamTypes,
              },
            },
            {
              name: ["--membership-type", "-mt"],
              description: "Team membership type",
              isRequired: true,
              args: {
                name: "string",
                suggestions: membershipTypes,
              },
            },
            {
              name: ["--business-unit", "-bu"],
              description:
                "ID of business unit to associate application user with",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "list-app-templates",
          description:
            "Lists all supported Dataverse templates of model-driven apps in Dynamics 365",
          options: [
            {
              name: ["--region", "-r"],
              description:
                "Sets the environment's region name. [defaults to unitedstates]",
              args: {
                name: "string",
                suggestions: azureLocations,
              },
            },
          ],
        },
        {
          name: "create-service-principal",
          description:
            "Add Microsoft Entra ID application and associated application user to the Dataverse environment",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "Environment (ID, org ID, url, unique name, or partial name)",
              args: {
                name: "string",
              },
            },
            {
              name: ["--name", "-n"],
              description: "Application name to create in Entra ID",
              args: {
                name: "string",
              },
            },
            {
              name: ["--role", "-r"],
              description:
                "Name or ID of security role to be applied to application user. The default value is: 'System Administrator'",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "list-service-principal",
          description:
            "List Microsoft Entra ID applications which have access to Dataverse",
          options: [
            {
              name: ["--filter", "-f"],
              description: "Application name 'starts with' filter",
              args: {
                name: "string",
              },
            },
            {
              name: ["--max", "-m"],
              description: "Max number of applications to show. Default: 20",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "set-governance-config",
          description: "Enable, disable, and edit managed environments",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "URL or ID of the environment for which managed environments need to be enabled, disabled or edited",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--protection-level", "-pl"],
              description:
                "Set protection level : 'Standard' to enable managed environments, 'Basic' to disable managed environments",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--disable-group-sharing", "-dgs"],
              description: "Disable group sharing",
            },
            {
              name: ["--exclude-analysis", "-ea"],
              description:
                "Exclude usage insights for the environment from the weekly digest email",
            },
            {
              name: ["--include-insights", "-ii"],
              description:
                "Include insights in the Power Platform Admin Center homepage cards",
            },
            {
              name: ["--limit-sharing-mode", "-lsm"],
              description: "Limit sharing mode",
              args: {
                name: "string",
              },
            },
            {
              name: ["--max-limit-user-sharing", "-ml"],
              description:
                "If group sharing is disabled, specify the number of people that makers can share canvas apps with",
              args: {
                name: "string",
              },
            },
            {
              name: ["--solution-checker-mode", "-scm"],
              description: "Solution checker validation mode",
              args: {
                name: "string",
                suggestions: solutionCheckerMode,
              },
            },
          ],
        },
        {
          name: "list-tenant-settings",
          description: "List tenant settings",
          options: [
            {
              name: ["--settings-file", "-s"],
              description: "The .json file to output tenant settings",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "update-tenant-settings",
          description: "Update tenant settings",
          options: [
            {
              name: ["--settings-file", "-s"],
              description: "The .json file with tenant settings",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "application",
          description: "Work with Microsoft Entra ID applications",
          subcommands: [
            {
              name: "list",
              description:
                "List Microsoft Entra ID applications registered under your tenant",
            },
            {
              name: "register",
              description:
                "Register Microsoft Entra ID application with your tenant",
              options: [
                {
                  name: ["--application-id", "-a"],
                  description: "Application Id",
                  isRequired: true,
                  args: {
                    name: "string",
                  },
                },
              ],
            },
            {
              name: "unregister",
              description:
                "Unregister Microsoft Entra ID application from your tenant",
              options: [
                {
                  name: ["--application-id", "-a"],
                  description: "Application Id",
                  isRequired: true,
                  args: {
                    name: "string",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "application",
      description:
        "Commands for listing and installing available Dataverse applications from AppSource",
      subcommands: [
        {
          name: "list",
          description: "List available Dataverse applications from AppSource",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "List available Dataverse applications for given environment (by ID or url); if not specified, list all applications in the tenant",
              args: {
                name: "string",
              },
            },
            {
              name: ["--output", "-o"],
              description:
                "Location of the JSON file to be created with list of the Dataverse applications from AppSource",
              args: {
                name: "string",
              },
            },
            {
              name: ["--installState", "-s"],
              description: "Filter by application install state",
              args: {
                name: "string",
                suggestions: applicationInstallStates,
              },
            },
          ],
        },
        {
          name: "install",
          description: "Installs Dataverse application to given environment",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "List available Dataverse applications for given environment (by ID or url); if not specified, list all applications in the tenant",
              args: {
                name: "string",
              },
            },
            {
              name: ["--application-name", "-an"],
              description:
                "Unique name of the application to install to the target environment",
              args: {
                name: "string",
              },
            },
            {
              name: ["--application-list", "-al"],
              description:
                "Location of the JSON file with list of the Dataverse applications from AppSource to be installed",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "auth",
      description: "Manage how you authenticate to various services",
      subcommands: [
        {
          name: "create",
          description:
            "Create and store authentication profiles on this computer",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name you want to give to this authentication profile (maximum 30 characters)",
              args: {
                name: "string",
              },
            },
            {
              name: ["--kind", "-k"],
              description: "The kind of authentication profile you're creating",
              args: {
                name: "string",
              },
            },
            {
              name: ["--url", "-u"],
              description: "The resource URL to connect to",
              args: {
                name: "string",
              },
            },
            {
              name: ["--username", "-un"],
              description:
                "Optional: The username to authenticate with; shows Microsoft Entra ID dialog if not specified",
              args: {
                name: "string",
              },
            },
            {
              name: ["--password", "-p"],
              description: "Optional: The password to authenticate with",
              args: {
                name: "string",
              },
            },
            {
              name: ["--applicationId", "-id"],
              description: "Optional: The application ID to authenticate with",
              args: {
                name: "string",
              },
            },
            {
              name: ["--clientSecret", "-cs"],
              description: "Optional: The client secret to authenticate with",
              args: {
                name: "string",
              },
            },
            {
              name: ["--certificateDiskPath", "-cdp"],
              description:
                "Optional: The certificate disk path to authenticate with",
              args: {
                name: "string",
              },
            },
            {
              name: ["--certificatePassword", "-cp"],
              description:
                "Optional: The certificate password to authenticate with",
              args: {
                name: "string",
              },
            },
            {
              name: ["--tenant", "-t"],
              description:
                "Tenant ID if using application ID/client secret or application ID/client certificate",
              args: {
                name: "string",
              },
            },
            {
              name: ["--cloud", "-ci"],
              description: "Optional: The cloud instance to authenticate with",
              args: {
                name: "string",
                suggestions: cloudTypes,
              },
            },
            {
              name: ["--deviceCode", "-dc"],
              description:
                "Use the Microsoft Entra ID Device Code flow for interactive sign-in",
            },
            {
              name: ["--managedIdentity", "-mi"],
              description: "Use Azure Managed Identity",
            },
            {
              name: ["--environment", "-env"],
              description:
                "Default environment (ID, url, unique name, or partial name)",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "list",
          description:
            "List the authentication profiles stored on this computer",
        },
        {
          name: "select",
          description: "Select which authentication profile should be active",
          options: [
            {
              name: ["--index", "-i"],
              description: "The index of the profile to be active",
              args: {
                name: "string",
              },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the profile to be active",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a particular authentication profile",
          options: [
            {
              name: ["--index", "-i"],
              description: "The index of the profile to be deleted",
              args: {
                name: "string",
              },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the profile to be active",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update name or target environment of an existing authentication profile",
          options: [
            {
              name: ["--index", "-i"],
              description: "The index of the profile to be named/renamed",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name you want to give to this authentication profile (maximum 30 characters)",
              args: {
                name: "string",
              },
            },
            {
              name: ["--environment", "-env"],
              description:
                "Default environment (ID, url, unique name, or partial name)",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "name",
          description: "Name or rename an existing authentication profile",
          options: [
            {
              name: ["--index", "-i"],
              description: "The index of the profile to be named/renamed",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name you want to give to this authentication profile (maximum 30 characters)",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "clear",
          description:
            "Clear all authentication profiles stored on this computer",
        },
      ],
    },
    {
      name: "canvas",
      description: "Operating with Power Apps .msapp files",
      subcommands: [
        {
          name: "download",
          description: "Download canvas app as .msapp file",
          options: [
            {
              name: ["--name", "-n"],
              description: "Canvas app exact, partial name, or App ID",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--file-name", "-f"],
              description:
                "File name (usually with .msapp extension). If not provided file is saved in current directory with 'appname'.msapp",
              args: {
                name: "string",
              },
            },
            {
              name: ["--overwrite", "-o"],
              description: "Allow file overwrite",
            },
            {
              name: ["--environment", "-env"],
              description:
                "Environment (ID, org ID, url, unique name, or partial name)",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List canvas apps",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "Environment (ID, org ID, url, unique name, or partial name)",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "pack",
          description: "(Preview) Pack sources into an msapp file",
          options: [
            {
              name: "--sources",
              description: "Directory to sources to be packed",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: "--msapp",
              description: "Path to .msapp file",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "unpack",
          description: "(Preview) Extract an msapp file into sources",
          options: [
            {
              name: "--sources",
              description: "Directory to sources to be unpacked",
              args: {
                name: "string",
              },
            },
            {
              name: "--msapp",
              description: "Path to .msapp file",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Generate a canvas app from a custom connector",
          options: [
            {
              name: "--msapp",
              description: "Path to .msapp file to be generated",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: "--connector-id",
              description:
                "The ID of the Connector to generate the Power App from",
              args: {
                name: "string",
              },
            },
            {
              name: "--connector-display-name",
              description:
                "The display name of the Connector to generate the Power App from",
              args: {
                name: "string",
              },
            },
            {
              name: "--environment",
              description:
                "The target Environment ID or URL. The default value is the environment of your currently active Dataverse Auth Profile",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "catalog",
      description: "Commands for working with Catalog in Power Platform",
      subcommands: [
        {
          name: "list",
          description:
            "List all published catalog items from the current Dataverse organization",
          options: [
            {
              name: ["--catalog-item-name", "-n"],
              description: "Catalog item name to search for",
              args: {
                name: "string",
              },
            },
            {
              name: ["--catalog-item-id", "-cid"],
              description:
                "Catalog item ID to search for. When catalog item ID is used, catalog item name is ignored",
              args: {
                name: "string",
              },
            },
            {
              name: ["--include-active", "-ia"],
              description: "Include active items",
            },
          ],
        },
        {
          name: "submit",
          description: "Submit catalog approval request",
          options: [
            {
              name: ["--path", "-p"],
              description: "Path to catalog submission document",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--package-zip", "-pz"],
              description: "Path to package zip file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--solution-zip", "-sz"],
              description: "Path to solution zip file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--poll-status", "-ps"],
              description: "Poll to check status of your request",
            },
          ],
        },
        {
          name: "install",
          description: "Install a catalog item to the target environment",
          options: [
            {
              name: ["--catalog-item-id", "-cid"],
              description:
                "Catalog item to be installed on the target environment",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--target-url", "-tu"],
              description:
                "Url of the target environment for catalog item installation",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--settings", "-s"],
              description:
                "Runtime Package Settings for the installation framework to execute. The format of the string must be 'key=value|key=value'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--target-version", "-tv"],
              description:
                "Target version to install. If left empty, the published version is selected",
              args: {
                name: "string",
              },
            },
            {
              name: ["--poll-status", "-ps"],
              description: "Poll to check status of your request",
            },
          ],
        },
        {
          name: "status",
          description: "Get status of the catalog install/submit request",
          options: [
            {
              name: ["--tracking-id", "-id"],
              description: "Request tracking ID",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--type", "-t"],
              description: "Request type",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update settings for the catalog",
          options: [
            {
              name: ["--path", "-p"],
              description: "Path to catalog settings document",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "create-submission",
          description:
            "Create catalog submission document. Note: This command will be removed in a future release",
          options: [
            {
              name: ["--path", "-p"],
              description: "Path to catalog submission document",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "connection",
      description: "Commands for working with Dataverse connection",
      subcommands: [
        {
          name: "create",
          description: "Create new Dataverse connection",
          options: [
            {
              name: ["--tenant-id", "-t"],
              description: "Tenant Id",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--name", "-n"],
              description: "Connection name",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--application-id", "-a"],
              description: "Application Id",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--client-secret", "-cs"],
              description: "Client Secret",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--environment", "-env"],
              description:
                "Environment (ID, org ID, url, unique name, or partial name)",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete Dataverse connection",
          options: [
            {
              name: ["--connection-id", "-id"],
              description: "Connection Id",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--environment", "-env"],
              description:
                "Environment (ID, org ID, url, unique name, or partial name)",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List all Connections",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "Environment (ID, org ID, url, unique name, or partial name)",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update Dataverse connection",
          options: [
            {
              name: ["--tenant-id", "-t"],
              description: "Tenant Id",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--connection-id", "-id"],
              description: "Connection Id",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--application-id", "-a"],
              description: "Application Id",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--client-secret", "-cs"],
              description: "Client Secret",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--environment", "-env"],
              description:
                "Environment (ID, org ID, url, unique name, or partial name)",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "connector",
      description: "Commands for working with Power Platform Connectors",
      subcommands: [
        {
          name: "list",
          description: "List the Connectors registered in Dataverse",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "The target Environment ID or URL. The default value is the environment of your currently active Dataverse Auth Profile",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "init",
          description: "Initializes a new API Properties file for a Connector",
          options: [
            {
              name: ["--connection-template", "-ct"],
              description:
                "Generate an initial Connection Parameters set with the specified template",
              args: {
                name: "string",
                suggestions: connectionTemplates,
              },
            },
            {
              name: "--generate-script-file",
              description: "Generate an initial Connector Script file",
            },
            {
              name: "--generate-settings-file",
              description: "Generate an initial Connector Settings file",
            },
            {
              name: ["--outputDirectory", "-o"],
              description: "Output directory",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Creates a new row in the Connector table in Dataverse",
          options: [
            {
              name: ["--api-definition-file", "-df"],
              description:
                "The filename and path to read the Connector's OpenApiDefinition",
              args: {
                name: "string",
              },
            },
            {
              name: ["--api-properties-file", "-pf"],
              description:
                "The filename and path to read the Connector's API Properties file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--icon-file", "-if"],
              description: "The filename and path to and Icon .png file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--script-file", "-sf"],
              description: "The filename and path to a Script .csx file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--solution-unique-name", "-sol"],
              description:
                "The unique name of the solution to add the connector to",
              args: {
                name: "string",
              },
            },
            {
              name: ["--environment", "-env"],
              description:
                "The target Environment ID or URL. The default value is the environment of your currently active Dataverse Auth Profile",
              args: {
                name: "string",
              },
            },
            {
              name: "--settings-file",
              description: "The filename and path Connector Settings file",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "download",
          description:
            "Download a Connector's OpenApiDefinition and API Properties file",
          options: [
            {
              name: ["--connector-id", "-id"],
              description: "The ID of the Connector",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--outputDirectory", "-o"],
              description: "Output directory",
              args: {
                name: "string",
              },
            },
            {
              name: ["--environment", "-env"],
              description:
                "The target Environment ID or URL. The default value is the environment of your currently active Dataverse Auth Profile",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Updates a Connector Entity in Dataverse",
          options: [
            {
              name: ["--connector-id", "-id"],
              description: "The ID of the Connector",
              args: {
                name: "string",
              },
            },
            {
              name: ["--api-definition-file", "-df"],
              description:
                "The filename and path to read the Connector's OpenApiDefinition",
              args: {
                name: "string",
              },
            },
            {
              name: ["--api-properties-file", "-pf"],
              description:
                "The filename and path to read the Connector's API Properties file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--icon-file", "-if"],
              description: "The filename and path to and Icon .png file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--script-file", "-sf"],
              description: "The filename and path to a Script .csx file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--solution-unique-name", "-sol"],
              description:
                "The unique name of the solution to add the connector to",
              args: {
                name: "string",
              },
            },
            {
              name: ["--environment", "-env"],
              description:
                "The target Environment ID or URL. The default value is the environment of your currently active Dataverse Auth Profile",
              args: {
                name: "string",
              },
            },
            {
              name: "--settings-file",
              description: "The filename and path Connector Settings file",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "copilot",
      description: "Tools and utilities for copilot scenarios",
      subcommands: [
        {
          name: "list",
          description: "AI Builder models in the current environment",
        },
        {
          name: "predict",
          description: "Sends text or prompt to AI Model",
          options: [
            {
              name: ["--model-id", "-id"],
              description: "AI Builder model Id",
              args: {
                name: "string",
              },
            },
            {
              name: ["--model-name", "-n"],
              description: "Full or partial AI Model name",
              args: {
                name: "string",
              },
            },
            {
              name: ["--prompt", "-p"],
              description: "Prompt to send to AI Model",
              args: {
                name: "string",
              },
            },
            {
              name: ["--text", "-t"],
              description: "Text to send to AI Model",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "prepare-fetch",
          description:
            "Takes the FetchXML file from the AI Large Language Model (LLM) and prepares it for execution against the current environment",
          options: [
            {
              name: ["--inputFile", "-i"],
              description: "Input FetchXML file that usually comes from AI LLM",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--outputFile", "-o"],
              description:
                "Output FetchXML file that is ready to execute against the current environment",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "data",
      description: "Import and export data from Dataverse",
      subcommands: [
        {
          name: "export",
          description: "Export data",
          options: [
            {
              name: ["--schemaFile", "-sf"],
              description:
                "Schema file name. It can be created using the Configuration Migration Tool",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--dataFile", "-df"],
              description: "File name for data zip file. Default data.zip",
              args: {
                name: "string",
              },
            },
            {
              name: ["--overwrite", "-o"],
              description:
                "Allow overwrite of the output data file if it already exists",
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Output more diagnostic information during data import/export",
            },
            {
              name: ["--environment", "-env"],
              description:
                "Environment (ID, org ID, url, unique name, or partial name)",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "import",
          description: "Import data",
          options: [
            {
              name: ["--dataDirectory", "-dd"],
              description: "Directory name with data for import",
              args: {
                name: "string",
              },
            },
            {
              name: ["--data", "-d"],
              description: "Zip file or directory name with data for import",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--connection-count", "-c"],
              description:
                "Number of parallel connections to use during import. Default: 5",
              args: {
                name: "string",
              },
            },
            {
              name: ["--verbose", "-v"],
              description:
                "Output more diagnostic information during data import/export",
            },
            {
              name: ["--environment", "-env"],
              description:
                "Environment (ID, org ID, url, unique name, or partial name)",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Show help for the Microsoft Power Platform CLI",
    },
    {
      name: "modelbuilder",
      description: "Code Generator for Dataverse APIs and Tables",
      subcommands: [
        {
          name: "build",
          description: "Builds a code model for Dataverse APIs and Tables",
          options: [
            {
              name: ["--suppressGeneratedCodeAttribute", "-sgca"],
              description:
                "When set, this suppress all generated objects being tagged with the code generation engine and version",
            },
            {
              name: ["--language", "-l"],
              description:
                "The language to use for the generated proxy code. This value can be either 'CS' or 'VB'. The default language is 'CS'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--namespace", "-n"],
              description:
                "The namespace for the generated code. The default namespace is the global namespace",
              args: {
                name: "string",
              },
            },
            {
              name: ["--serviceContextName", "-sctx"],
              description:
                "The name for the generated service context. If a value is passed in, it's used for the Service Context. If not, no Service Context is generated",
              args: {
                name: "string",
              },
            },
            {
              name: ["--generatesdkmessages", "-a"],
              description:
                "When set, emits Sdk message classes as part of code generation",
            },
            {
              name: ["--emitentityetc", "-etc"],
              description:
                "When set, includes the entity ETC ( entity type code ) in the generated code",
            },
            {
              name: ["--emitvirtualattributes", "-eva"],
              description:
                "When set, includes the Virtual Attributes of entities in the generated code",
            },
            {
              name: ["--emitfieldsclasses", "-efc"],
              description:
                "Generate a constants structure that contains all of the field names by entity at the time of code generation",
            },
            {
              name: ["--entitynamesfilter", "-enf"],
              description:
                "Filters the list of entities are retrieved when reading data from Dataverse. Passed in as a semicolon separated list. Using the form <entitylogicalname>;<entitylogicalname>",
              args: {
                name: "string",
              },
            },
            {
              name: ["--messagenamesfilter", "-mnf"],
              description:
                "Filters the list of messages that are retrieved when reading data from Dataverse. Passed in as a semicolon separated list, required messages (Create, Update, Delete, Retrieve, RetrieveMultiple, Associate and Disassociate) are always included. Use a trailing or leading asterisk (*) with the names of the messages to allow for all messages starting with or ending with a string. Using the form <messagename>;<messagename>",
              args: {
                name: "string",
              },
            },
            {
              name: ["--outdirectory", "-o"],
              description:
                "Write directory for entity, message, and optionset files",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--entitytypesfolder", "-etf"],
              description:
                "Folder name that contains entities. The default name is 'Entities'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--messagestypesfolder", "-mtf"],
              description:
                "Folder name that contains messages. The default name is 'Messages'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--optionsetstypesfolder", "-otf"],
              description:
                "Folder name that contains option sets. The default name is 'OptionSets'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--generateGlobalOptionSets", "-go"],
              description:
                "Emit all Global OptionSets. Note: If an entity contains a reference to a global optionset, it is emitted even if this switch is not present",
              args: {
                name: "string",
              },
            },
            {
              name: ["--writesettingsTemplateFile", "-wstf"],
              description:
                "When set, writes a settings file out to the output directory with the current passed settings or default settings",
              args: {
                name: "string",
              },
            },
            {
              name: ["--settingsTemplateFile", "-stf"],
              description:
                "Contains Settings to be used for this run of the Dataverse Model Builder, overrides any duplicate parameters on command line. Can't be set when --writesettingstemplate is used",
              args: {
                name: "string",
              },
            },
            {
              name: "--suppressINotifyPattern",
              description:
                "When enabled, doesn't write the INotify wrappers for properties and classes",
              args: {
                name: "string",
              },
            },
            {
              name: ["--logLevel", "-ll"],
              description: "Log level. The default value is 'Off'",
              args: {
                name: "string",
                suggestions: logLevels,
              },
            },
          ],
        },
      ],
    },
    {
      name: "org",
      description: "Work with your Dataverse organization",
      subcommands: [
        {
          name: "who",
          description:
            "Displays information about the current Dataverse organization",
        },
        {
          name: "list",
          description:
            "Lists all of the Dataverse organizations the user has access to",
          options: [
            {
              name: ["--filter", "-f"],
              description: "Show only environments containing filter criteria",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "fetch",
          description: "Performs FetchXML query against Dataverse",
          options: [
            {
              name: ["--xml", "-x"],
              description: "FetchXML query to run",
              args: {
                name: "string",
              },
            },
            {
              name: ["--xmlFile", "-xf"],
              description: "File with FetchXML query to run",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "list-settings",
          description: "List environment settings",
          options: [
            {
              name: ["--filter", "-f"],
              description: "Show only settings containing filter criteria",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "update-settings",
          description: "Update environment settings",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the setting to update",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--value", "-v"],
              description: "Value to which setting should be updated to",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "select",
          description:
            "Select default organization for current authentication profile",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "Default environment (ID, url, unique name, or partial name)",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "package",
      description: "Commands for working with Dataverse package projects",
      subcommands: [
        {
          name: "init",
          description:
            "Initializes a directory with a new Dataverse package project",
          options: [
            {
              name: ["--outputDirectory", "-o"],
              description: "Output directory",
              args: {
                name: "string",
              },
            },
            {
              name: "--package-name",
              description:
                "Sets the default name of the package. Applies to the generation of ImportExtension.GetNameOfImport",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "add-external-package",
          description:
            "Adds a package that is external to the Dataverse solution system to a Package Deployer Package project",
          options: [
            {
              name: ["--path", "-p"],
              description: "Path to the external package",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--package-type", "-t"],
              description:
                "The type of the package being added. For example: 'xpp' for FnO packages",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: "--import-order",
              description:
                "A whole number that indicates the order to insert this item into the final ImportConfig.xml file at build time. Negative numbers are inserted before existing elements. Positive numbers are added after existing elements",
              args: {
                name: "string",
              },
            },
            {
              name: ["--skip-validation", "-sv"],
              description:
                "Adds the item to the project file even if the file doesn't exist or appears to be invalid. Note: Using this doesn't affect any validation performed by MSBuild",
            },
          ],
        },
        {
          name: "add-solution",
          description:
            "Adds a prebuilt Dataverse solution file to a Package Deployer Package project",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "Path to the Dataverse solution file. The file must be a compressed ZIP file",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: "--import-order",
              description:
                "A whole number that indicates the order to insert this item into the final ImportConfig.xml file at build time. Negative numbers are inserted before existing elements. Positive numbers are added after existing elements",
              args: {
                name: "string",
              },
            },
            {
              name: ["--skip-validation", "-sv"],
              description:
                "Adds the item to the project file even if the file doesn't exist or appears to be invalid. Note: Using this doesn't affect any validation performed by MSBuild",
            },
            {
              name: "--publish-workflows-activate-plugins",
              description:
                "Explicitly indicates whether to publish the workflows and activate plug-ins when this solution is imported",
              args: {
                name: "string",
                suggestions: trueFalse,
              },
            },
            {
              name: "--overwrite-unmanaged-customizations",
              description:
                "Explicitly indicates whether to overwrite unmanaged customizations when this solution is imported",
              args: {
                name: "string",
                suggestions: trueFalse,
              },
            },
            {
              name: "--import-mode",
              description:
                "Explicitly specifies the required mode when importing this solution",
              args: {
                name: "string",
                suggestions: trueFalse,
              },
            },
            {
              name: "--missing-dependency-behavior",
              description:
                "Specifies the behavior on import when a dependency of this solution is missing from the target environment",
              args: {
                name: "string",
                suggestions: skipFault,
              },
            },
            {
              name: "--dependency-overrides",
              description:
                "A semicolon delimited list of overrides. This value overrides any dependency information encoded in the solution's metadata. Each override should be in the format: '<uniquename>:<minVersion>:<maxVersion>'. Where minVersion and maxVersion are optional but should be in .NET version format syntax",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "add-reference",
          description: "Adds reference to Dataverse solution project",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "The path to the referenced Dataverse solution project",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: "--import-order",
              description:
                "A whole number that indicates the order to insert this item into the final ImportConfig.xml file at build time. Negative numbers are inserted before existing elements. Positive numbers are added after existing elements",
              args: {
                name: "string",
              },
            },
            {
              name: "--publish-workflows-activate-plugins",
              description:
                "Explicitly indicates whether to publish the workflows and activate plug-ins when this solution is imported",
              args: {
                name: "string",
                suggestions: trueFalse,
              },
            },
            {
              name: "--overwrite-unmanaged-customizations",
              description:
                "Explicitly indicates whether to overwrite unmanaged customizations when this solution is imported",
              args: {
                name: "string",
                suggestions: trueFalse,
              },
            },
            {
              name: "--import-mode",
              description:
                "Explicitly specifies the required mode when importing this solution",
              args: {
                name: "string",
                suggestions: syncAsync,
              },
            },
            {
              name: "--missing-dependency-behavior",
              description:
                "Specifies the behavior on import when a dependency of this solution is missing from the target environment",
              args: {
                name: "string",
                suggestions: skipFault,
              },
            },
            {
              name: "--dependency-overrides",
              description:
                "A semicolon delimited list of overrides. This value overrides any dependency information encoded in the solution's metadata. Each override should be in the format: '<uniquename>:<minVersion>:<maxVersion>'. Where minVersion and maxVersion are optional but should be in .NET version format syntax",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "deploy",
          description: "Deploys package to Dataverse",
          options: [
            {
              name: ["--logFile", "-lf"],
              description: "Log file path",
              args: {
                name: "string",
              },
            },
            {
              name: ["--logConsole", "-c"],
              description: "Output log to console",
            },
            {
              name: ["--package", "-p"],
              description: "Path to a package dll or zip file with a package",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--settings", "-s"],
              description:
                "Runtime Package Settings that are passed to the package that is being deployed. The format of the string must be 'key=value|key=value'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--verbose", "-vdbg"],
              description: "Emit verbose logs to the log outputs",
            },
          ],
        },
        {
          name: "show",
          description: "Shows details of Dataverse package",
          options: [
            {
              name: ["--package", "-p"],
              description: "Path to a package dll or zip file with a package",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--logFile", "-lf"],
              description: "Log file path",
              args: {
                name: "string",
              },
            },
            {
              name: ["--verbose", "-vdbg"],
              description: "Emit verbose logs to the log outputs",
            },
          ],
        },
      ],
    },
    {
      name: "pcf",
      description:
        "Commands for working with Power Apps component framework projects",
      subcommands: [
        {
          name: "init",
          description:
            "Initializes a directory with a new Power Apps component framework project",
          options: [
            {
              name: ["--namespace", "-ns"],
              description: "The namespace for the component",
              args: {
                name: "string",
              },
            },
            {
              name: ["--name", "-n"],
              description: "The name for the component",
              args: {
                name: "string",
              },
            },
            {
              name: ["--template", "-t"],
              description: "Choose a template for the component",
              args: {
                name: "string",
                suggestions: pcfComponentTypes,
              },
            },
            {
              name: ["--framework", "-fw"],
              description:
                "The rendering framework for control. The default value is 'none', which means HTML",
              args: {
                name: "string",
                suggestions: pcfFrameworkTypes,
              },
            },
            {
              name: ["--outputDirectory", "-o"],
              description: "Output directory",
              args: {
                name: "string",
              },
            },
            {
              name: ["--run-npm-install", "-npm"],
              description:
                "Auto run 'npm install' after the control is created. The default value is 'false'",
            },
          ],
        },
        {
          name: "push",
          description:
            "Import the Power Apps component framework project into the current Dataverse organization",
          options: [
            {
              name: ["--publisher-prefix", "-pp"],
              description:
                "Customization prefix value for the Dataverse solution publisher",
              args: {
                name: "string",
              },
            },
            {
              name: ["--verbosity", "-v"],
              description:
                "Verbosity level for MSBuild when building the temporary solution wrapper",
              args: {
                name: "string",
                suggestions: msBuildVerbosityLevels,
              },
            },
            {
              name: ["--force-import", "-f"],
              description:
                "Force a full update of the control as part of a temporary solution",
            },
            {
              name: ["--interactive", "-i"],
              description:
                "Indicates that actions in the build are allowed to interact with the user. Don't use this argument in an automated scenario where interactivity is not expected",
            },
            {
              name: ["--incremental", "-inc"],
              description:
                "Pushes only files which are diifferent using entity updates",
            },
          ],
        },
        {
          name: "version",
          description: "Patch version for controls",
          options: [
            {
              name: ["--strategy", "-s"],
              description:
                "Updates patch version for 'ControlManifest.xml' files using specified strategy. If using gittags, set a personal access token in the following environment variable 'PacCli.PAT'",
              args: {
                name: "string",
                suggestions: pcfPatchStrategies,
              },
            },
            {
              name: ["--patchversion", "-pv"],
              description: "Patch version for controls",
              args: {
                name: "string",
              },
            },
            {
              name: ["--path", "-p"],
              description:
                "Absolute/Relative path of the 'ControlManifest.xml' for updating",
              args: {
                name: "string",
              },
            },
            {
              name: ["--allmanifests", "-a"],
              description:
                "Updates patch version for all 'ControlManifest.xml' files",
            },
            {
              name: ["--updatetarget", "-ut"],
              description: "Specify which target manifest needs to be updated",
              args: {
                name: "string",
                suggestions: pcfPatchTargets,
              },
            },
            {
              name: ["--filename", "-fn"],
              description:
                "Tracker CSV file name to be used when using filetracking as a strategy. The default value is 'ControlsStateVersionInfo.csv'",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "pipeline",
      description: "Work with Pipelines",
      subcommands: [
        {
          name: "list",
          description: "List Pipelines",
          options: [
            {
              name: ["--pipeline", "-p"],
              description:
                "Pipeline name or ID for which show list of details such as deployment stages",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "deploy",
          description: "Start pipeline deployment",
          options: [
            {
              name: ["--solutionName", "-sn"],
              description: "Solution Name",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--stageId", "-sid"],
              description: "Deployment Stage ID",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--environment", "-env"],
              description: "Deployment Environment",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--currentVersion", "-cv"],
              description: "Current solution version",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--newVersion", "-nv"],
              description: "New solution version",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--wait", "-w"],
              description: "Wait until the deployment finishes",
            },
          ],
        },
      ],
    },
    {
      name: "plugin",
      description: "Commands for working with Dataverse plug-in class library",
      subcommands: [
        {
          name: "init",
          description:
            "Initializes a directory with a new Dataverse plug-in class library",
          options: [
            {
              name: ["--signing-key-file-path", "-sk"],
              description:
                "Relative path to the Dataverse plug-in assembly originator key file for signing",
              args: {
                name: "string",
              },
            },
            {
              name: ["--outputDirectory", "-o"],
              description: "Output directory",
              args: {
                name: "string",
              },
            },
            {
              name: ["--author", "-a"],
              description:
                "One or more authors of the Dataverse Plug-in Package",
              args: {
                name: "string",
              },
            },
            {
              name: ["--skip-signing", "-ss"],
              description:
                "Skip plug-in assembly signing that gives the plug-in assembly a strong name. The default value is 'false'",
            },
          ],
        },
        {
          name: "push",
          description: "Import plug-in into Dataverse",
          options: [
            {
              name: ["--pluginId", "-id"],
              description: "ID of plug-in assembly or plug-in package",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--pluginFile", "-pf"],
              description: "File name of plug-in assembly or plug-in package",
              args: {
                name: "string",
              },
            },
            {
              name: ["--type", "-t"],
              description:
                "Type of item if not specified explicitly through --pluginFile. The default value is: 'Nuget'",
              args: {
                name: "string",
                suggestions: importPluginType,
              },
            },
            {
              name: ["--configuration", "-c"],
              description: "Build configuration. The default value is: 'Debug'",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "power-fx",
      description: "(Preview) Commands for working with Power Fx",
      subcommands: [
        {
          name: "repl",
          description:
            "(Preview) Launch interactive Power Fx Read-Eval-Print Loop",
        },
        {
          name: "run",
          description: "(Preview) Run a file of Power Fx instructions",
          options: [
            {
              name: ["--file", "-f"],
              description: "Path of file to execute",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--echo", "-e"],
              description: "True if input commands should echo back to output",
            },
          ],
        },
      ],
    },
    {
      name: "powerpages",
      description: "Commands for working with Power Pages website",
      subcommands: [
        {
          name: "list",
          description:
            "List all Power Pages websites from the current Dataverse environment",
          options: [
            {
              name: ["--verbose", "-v"],
              description: "Enables verbose mode to provide more details",
            },
          ],
        },
        {
          name: "download",
          description:
            "Download Power Pages website content from the current Dataverse environment",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "Path where the Power Pages website content is downloaded",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--webSiteId", "-id"],
              description: "Power Pages website ID to download",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--includeEntities", "-ie"],
              description:
                "Download only the entities specified for this argument using comma separated entity logical names",
              args: {
                name: "string",
              },
            },
            {
              name: ["--excludeEntities", "-xe"],
              description:
                "Comma separated list of entity logical names to exclude downloading",
              args: {
                name: "string",
              },
            },
            {
              name: ["--overwrite", "-o"],
              description: "Power Pages website content to overwrite",
            },
            {
              name: ["--modelVersion", "-mv"],
              description: "Power Pages website data model version to download",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "upload",
          description:
            "Upload Power Pages website content to current Dataverse environment",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "Path from where the Power Pages website content is uploaded",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--deploymentProfile", "-dp"],
              description:
                "Deployment profile name to be used. Defaults to 'default'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--forceUploadAll", "-f"],
              description:
                "Upload all Power Pages website content to the current Dataverse environment",
            },
            {
              name: ["--modelVersion", "-mv"],
              description: "Power Pages website data model version to upload",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "bootstrap-migrate",
          description: "Migrates HTML code from bootstrap V3 to V5",
          options: [
            {
              name: ["--path", "-p"],
              description: "Path of website content",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "solution",
      description: "Commands for working with Dataverse solution projects",
      subcommands: [
        {
          name: "init",
          description:
            "Initializes a directory with a new Dataverse solution project",
          options: [
            {
              name: ["--publisher-name", "-pn"],
              description: "Name of the Dataverse solution publisher",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--publisher-prefix", "-pp"],
              description:
                "Customization prefix value for the Dataverse solution publisher",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--outputDirectory", "-o"],
              description: "Output directory",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "add-reference",
          description:
            "Adds a reference from the project in the current directory to the project at 'path'",
          options: [
            {
              name: ["--path", "-p"],
              description: "The path to the referenced project",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "list",
          description:
            "List all Solutions from the current Dataverse organization",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "The target Environment ID or URL. The default value is the environment of your currently active Dataverse Auth Profile",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a solution from Dataverse in the current environment",
          options: [
            {
              name: ["--solution-name", "-sn"],
              description: "Name of the solution",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "online-version",
          description: "Sets version for solution loaded in Dataverse",
          options: [
            {
              name: ["--solution-name", "-sn"],
              description: "Name of the solution",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--solution-version", "-sv"],
              description: "Specify the solution version number",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "version",
          description: "Update build or revision version for the solution",
          options: [
            {
              name: ["--strategy", "-s"],
              description:
                "Updates build version for 'Solution.xml' file using specified strategy. If using gittags, set personal access token in the following environment variable 'PacCli.PAT'",
              args: {
                name: "string",
                suggestions: solutionPatchStrategies,
              },
            },
            {
              name: ["--patchversion", "-pv"],
              description: "Patch version for the solution",
              args: {
                name: "string",
              },
            },
            {
              name: ["--buildversion", "-bv"],
              description: "Build version for the solution",
              args: {
                name: "string",
              },
            },
            {
              name: ["--revisionversion", "-rv"],
              description: "Revision version for the solution",
              args: {
                name: "string",
              },
            },
            {
              name: ["--filename", "-fn"],
              description:
                "Tracker CSV file name to be used when using filetracking as a strategy. The default value is 'ControlsStateVersionInfo.csv'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--solutionPath", "-sp"],
              description:
                "Path to Dataverse solution directory or Solution.xml file",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "import",
          description: "Import the solution into Dataverse",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "Path to solution zip file. If not specified, assumes the current folder is a cdsproj project",
              args: {
                name: "string",
              },
            },
            {
              name: ["--activate-plugins", "-ap"],
              description: "Activate plug-ins and workflows on the solution",
            },
            {
              name: ["--force-overwrite", "-f"],
              description: "Force an overwrite of unmanaged customizations",
            },
            {
              name: ["--skip-dependency-check", "-s"],
              description:
                "Skip dependency check against dependencies flagged as product update",
            },
            {
              name: ["--import-as-holding", "-h"],
              description: "Import the solution as a holding solution",
            },
            {
              name: ["--stage-and-upgrade", "-up"],
              description: "Import and upgrade the solution",
            },
            {
              name: ["--publish-changes", "-pc"],
              description: "Publish your changes upon a successful import",
            },
            {
              name: ["--convert-to-managed", "-cm"],
              description: "Convert to a managed solution",
            },
            {
              name: ["--async", "-a"],
              description: "Imports the solution asynchronously",
            },
            {
              name: ["--max-async-wait-time", "-wt"],
              description:
                "Max asynchronous wait time in minutes. The default value is 60 minutes",
              args: {
                name: "string",
              },
            },
            {
              name: "--settings-file",
              description:
                "The .json file with the deployment settings for connection references and environment variables",
              args: {
                name: "string",
                template: "filepaths",
              },
            },
            {
              name: ["--skip-lower-version", "-slv"],
              description:
                "Skip solution import if same or higher version is present in current environment",
            },
          ],
        },
        {
          name: "export",
          description: "Export a solution from Dataverse",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the solution to be exported",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--path", "-p"],
              description:
                "Path where the exported solution zip file is written",
              args: {
                name: "string",
              },
            },
            {
              name: ["--managed", "-m"],
              description:
                "Whether the solution should be exported as a managed solution",
            },
            {
              name: ["--targetversion", "-v"],
              description:
                "The version that the exported solution will support",
              args: {
                name: "string",
              },
            },
            {
              name: ["--include", "-i"],
              description:
                "Which settings should be included in the solution being exported",
              args: {
                name: "string",
              },
            },
            {
              name: ["--async", "-a"],
              description: "Exports the solution asynchronously",
            },
            {
              name: ["--max-async-wait-time", "-wt"],
              description:
                "Max asynchronous wait time in minutes. The default value is 60 minutes",
              args: {
                name: "string",
              },
            },
            {
              name: ["--overwrite", "-ow"],
              description:
                "The exported solution file can overwrite the solution zip file on the local file system",
            },
          ],
        },
        {
          name: "clone",
          description:
            "Create a solution project based on an existing solution in your organization",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the solution to be exported",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--targetversion", "-v"],
              description:
                "The version that the exported solution will support",
              args: {
                name: "string",
              },
            },
            {
              name: ["--include", "-i"],
              description:
                "Which settings should be included in the solution being exported",
              args: {
                name: "string",
              },
            },
            {
              name: ["--outputDirectory", "-o"],
              description: "Output directory",
              args: {
                name: "string",
              },
            },
            {
              name: ["--async", "-a"],
              description: "Exports the solution asynchronously",
            },
            {
              name: ["--max-async-wait-time", "-wt"],
              description:
                "Max asynchronous wait time in minutes. The default value is 60 minutes",
              args: {
                name: "string",
              },
            },
            {
              name: ["--processCanvasApps", "-pca"],
              description:
                "(Preview) Pack/unpack any Canvas apps (.msapp) while processing the solution. The default value is 'false'",
            },
            {
              name: ["--packagetype", "-p"],
              description:
                "Specifies the extraction type for the solution. Can be: 'Unmanaged', 'Managed' or 'Both'. The default value is: 'Both'",
              args: {
                name: "string",
                suggestions: solutionTypes,
              },
            },
            {
              name: ["--localize", "-loc"],
              description:
                "Extract or merge all string resources into .resx files",
            },
          ],
        },
        {
          name: "publish",
          description: "Publishes all customizations",
          options: [
            {
              name: ["--async", "-a"],
              description: "Publishes all customizations asynchronously",
            },
            {
              name: ["--max-async-wait-time", "-wt"],
              description:
                "Max asynchronous wait time in minutes. The default value is 60 minutes",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "upgrade",
          description: "Apply solution upgrade",
          options: [
            {
              name: ["--solution-name", "-sn"],
              description: "Name of the solution",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--async", "-a"],
              description: "Upgrades solution asynchronously",
            },
            {
              name: ["--max-async-wait-time", "-wt"],
              description:
                "Max asynchronous wait time in minutes. The default value is 60 minutes",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "add-license",
          description: "Add license and plan info to the solution",
          options: [
            {
              name: ["--planDefinitionFile", "-pd"],
              description:
                "License plan definition file in CSV format; expected columns: Service ID, Display name, More info URL",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--planMappingFile", "-pm"],
              description:
                "License plan mapping file in CSV format; expected columns: Service ID, Component name",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "check",
          description:
            "Upload a Dataverse solution project to run against the Power Apps Checker service",
          options: [
            {
              name: ["--path", "-p"],
              description:
                "Path where one or more solution files to be checked exist. The path can contain glob/wildcard characters",
              args: {
                name: "string",
              },
            },
            {
              name: ["--solutionUrl", "-u"],
              description: "SAS Uri pointing to solution.zip to be analyzed",
              args: {
                name: "string",
              },
            },
            {
              name: ["--outputDirectory", "-o"],
              description: "Output directory",
              args: {
                name: "string",
              },
            },
            {
              name: ["--geo", "-g"],
              description:
                "Which geographical instance of the Power Apps Checker service to use",
              args: {
                name: "string",
                suggestions: powerAppsCheckerRegions,
              },
            },
            {
              name: ["--customEndpoint", "-ce"],
              description:
                "Specify a custom URL as the Power Apps Checker endpoint",
              args: {
                name: "string",
              },
            },
            {
              name: ["--ruleLevelOverride", "-rl"],
              description:
                "Path to a file containing a JSON array rules and levels to override. Accepted values for OverrideLevel are: Critical, High, Medium, Low, Informational. Example: [{'Id':'meta-remove-dup-reg','OverrideLevel':'Medium'},{'Id':'il-avoid-specialized-update-ops','OverrideLevel':'Medium'}]",
              args: {
                name: "string",
              },
            },
            {
              name: ["--ruleSet", "-rs"],
              description:
                "Select a rule set that is executed as part of this build. Values: A valid Guid, 'AppSource Certification', 'Solution Checker' (default)",
              args: {
                name: "string",
              },
            },
            {
              name: ["--excludedFiles", "-ef"],
              description:
                "Exclude Files from the Analysis. Pass as comma-separated values",
              args: {
                name: "string",
              },
            },
            {
              name: ["--saveResults", "-sav"],
              description:
                "Uses current environment to store solution analysis results that can be seen in Solution Health Hub App. By default, this argument is set to false",
            },
          ],
        },
        {
          name: "create-settings",
          description:
            "Create a settings file from solution zip or solution folder",
          options: [
            {
              name: ["--solution-zip", "-z"],
              description: "Path to solution zip file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--solution-folder", "-f"],
              description:
                "Path to the local, unpacked solution folder: either the root of the 'Other/Solution.xml' file or a folder with a .cdsproj file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--settings-file", "-s"],
              description:
                "The .json file with the deployment settings for connection references and environment variables",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "pack",
          description:
            "Package solution components on local filesystem into solution.zip (SolutionPackager)",
          options: [
            {
              name: ["--zipfile", "-z"],
              description: "The full path to the solution ZIP file",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--folder", "-f"],
              description:
                "The path to the root folder on the local filesystem. When unpacking or extracting, this is written to. When packing this is read from",
              args: {
                name: "string",
              },
            },
            {
              name: ["--packagetype", "-p"],
              description:
                "When unpacking or extracting, use to specify dual Managed and Unmanaged operation. When packing, use to specify Managed or Unmanaged from a previous unpack 'Both'. Can be: 'Unmanaged', 'Managed' or 'Both'. The default value is 'Unmanaged'",
              args: {
                name: "string",
                suggestions: solutionTypes,
              },
            },
            {
              name: ["--log", "-l"],
              description: "The path to the log file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--errorlevel", "-e"],
              description:
                "Minimum logging level for log output [Verbose|Info|Warning|Error|Off]. The default value is 'Info'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--singleComponent", "-sc"],
              description:
                "Only perform action on a single component type [WebResource|Plugin|Workflow|None]. The default value is 'None'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--allowDelete", "-ad"],
              description:
                "Dictates if delete operations may occur. The default value is 'false'",
            },
            {
              name: ["--allowWrite", "-aw"],
              description:
                "Dictates if write operations may occur. The default value is 'false'",
            },
            {
              name: ["--clobber", "-c"],
              description:
                "Enables that files marked read-only can be deleted or overwritten. The default value is 'false'",
            },
            {
              name: ["--map", "-m"],
              description:
                "The full path to a mapping xml file from which to read component folders to pack",
              args: {
                name: "string",
              },
            },
            {
              name: ["--sourceLoc", "-src"],
              description:
                "Generates a template resource file. Valid only on extract. Possible values are 'auto', or language code of the language you wish to export. You can use Language Code Identifier (LCID), or International Organization for Standardization (ISO) language code formats. When present, this extracts the string resources from the given locale as a neutral .resx. If 'auto' or just the long or short form of the switch is specified, the base locale for the solution is used",
              args: {
                name: "string",
              },
            },
            {
              name: ["--localize", "-loc"],
              description:
                "Extract or merge all string resources into .resx files",
            },
            {
              name: ["--useLcid", "-lcid"],
              description:
                "Use Language Code Identifier (LCID) values (1033) rather than International Organization for Standardization (ISO) codes (en-US) for language files",
            },
            {
              name: ["--useUnmanagedFileForMissingManaged", "-same"],
              description:
                "Use the same XML source file when packaging for Managed and only Unmanaged XML file is found; applies to AppModuleSiteMap, AppModuleMap, FormXml files",
            },
            {
              name: ["--disablePluginRemap", "-dpm"],
              description:
                "Disabled plug-in fully qualified type name remapping. The default value is 'false'",
            },
            {
              name: ["--processCanvasApps", "-pca"],
              description:
                "(Preview) Pack/unpack any Canvas apps (.msapp) while processing the solution. The default value is 'false'",
            },
          ],
        },
        {
          name: "unpack",
          description:
            "Extract solution components from solution.zip onto local filesystem (SolutionPackager)",
          options: [
            {
              name: ["--zipfile", "-z"],
              description: "The full path to the solution ZIP file",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--folder", "-f"],
              description:
                "The path to the root folder on the local filesystem. When unpacking or extracting, this is written to. When packing this is read from",
              args: {
                name: "string",
              },
            },
            {
              name: ["--packagetype", "-p"],
              description:
                "When unpacking or extracting, use to specify dual Managed and Unmanaged operation. When packing, use to specify Managed or Unmanaged from a previous unpack 'Both'. Can be: 'Unmanaged', 'Managed' or 'Both'. The default value is 'Unmanaged'",
              args: {
                name: "string",
                suggestions: solutionTypes,
              },
            },
            {
              name: ["--log", "-l"],
              description: "The path to the log file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--errorlevel", "-e"],
              description:
                "Minimum logging level for log output [Verbose|Info|Warning|Error|Off]. The default value is 'Info'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--singleComponent", "-sc"],
              description:
                "Only perform action on a single component type [WebResource|Plugin|Workflow|None]. The default value is 'None'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--allowDelete", "-ad"],
              description:
                "Dictates if delete operations may occur. The default value is 'false'",
            },
            {
              name: ["--allowWrite", "-aw"],
              description:
                "Dictates if write operations may occur. The default value is 'false'",
            },
            {
              name: ["--clobber", "-c"],
              description:
                "Enables that files marked read-only can be deleted or overwritten. The default value is 'false'",
            },
            {
              name: ["--map", "-m"],
              description:
                "The full path to a mapping xml file from which to read component folders to pack",
              args: {
                name: "string",
              },
            },
            {
              name: ["--sourceLoc", "-src"],
              description:
                "Generates a template resource file. Valid only on extract. Possible values are 'auto', or language code of the language you wish to export. You can use Language Code Identifier (LCID), or International Organization for Standardization (ISO) language code formats. When present, this extracts the string resources from the given locale as a neutral .resx. If 'auto' or just the long or short form of the switch is specified, the base locale for the solution is used",
              args: {
                name: "string",
              },
            },
            {
              name: ["--localize", "-loc"],
              description:
                "Extract or merge all string resources into .resx files",
            },
            {
              name: ["--useLcid", "-lcid"],
              description:
                "Use Language Code Identifier (LCID) values (1033) rather than International Organization for Standardization (ISO) codes (en-US) for language files",
            },
            {
              name: ["--useUnmanagedFileForMissingManaged", "-same"],
              description:
                "Use the same XML source file when packaging for Managed and only Unmanaged XML file is found; applies to AppModuleSiteMap, AppModuleMap, FormXml files",
            },
            {
              name: ["--disablePluginRemap", "-dpm"],
              description:
                "Disabled plug-in fully qualified type name remapping. The default value is 'false'",
            },
            {
              name: ["--processCanvasApps", "-pca"],
              description:
                "(Preview) Pack/unpack any Canvas apps (.msapp) while processing the solution. The default value is 'false'",
            },
          ],
        },
        {
          name: "add-solution-component",
          description:
            "Add one or more solution components to the target unmanaged solution in Dataverse",
          options: [
            {
              name: ["--solutionUniqueName", "-sn"],
              description: "Name of the solution",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--component", "-c"],
              description:
                "The schema name or ID of the component to add to the target solution",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--componentType", "-ct"],
              description:
                "The value that represents the solution component that you're adding",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--AddRequiredComponents", "-arc"],
              description:
                "Indicates whether other solution components required by the solution component that you're adding should also be added to the unmanaged solution",
            },
            {
              name: ["--environment", "-env"],
              description: "Environment URL or ID of the target environment",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "sync",
          description:
            "Sync the current Dataverse solution project to the current state of the solution in your organization",
          options: [
            {
              name: ["--solution-folder", "-f"],
              description:
                "Path to the local, unpacked solution folder: either the root of the 'Other/Solution.xml' file or a folder with a .cdsproj file",
              args: {
                name: "string",
              },
            },
            {
              name: ["--include", "-i"],
              description:
                "Which settings should be included in the solution being exported",
              args: {
                name: "string",
              },
            },
            {
              name: ["--async", "-a"],
              description: "Exports the solution asynchronously",
            },
            {
              name: ["--max-async-wait-time", "-wt"],
              description:
                "Max asynchronous wait time in minutes. The default value is 60 minutes",
              args: {
                name: "string",
              },
            },
            {
              name: ["--processCanvasApps", "-pca"],
              description:
                "(Preview) Pack/unpack any Canvas apps (.msapp) while processing the solution. The default value is 'false'",
            },
            {
              name: ["--packagetype", "-p"],
              description:
                "When unpacking or extracting, use to specify dual Managed and Unmanaged operation. When packing, use to specify Managed or Unmanaged from a previous unpack 'Both'. Can be: 'Unmanaged', 'Managed' or 'Both'. The default value is: 'Both'",
              args: {
                name: "string",
                suggestions: solutionTypes,
              },
            },
            {
              name: ["--localize", "-loc"],
              description:
                "Extract or merge all string resources into .resx files",
            },
          ],
        },
      ],
    },
    {
      name: "telemetry",
      description: "Manage telemetry settings",
      subcommands: [
        {
          name: "enable",
          description:
            "Choose to send usage information to help Microsoft improve this product",
        },
        {
          name: "disable",
          description:
            "Choose to not send usage information to help Microsoft improve this product",
        },
        {
          name: "status",
          description: "Show the current status of telemetry",
        },
      ],
    },
    {
      name: "test",
      description: "(Preview) Execution of automated tests for a Power App",
      subcommands: [
        {
          name: "run",
          description: "(Preview) Execute tests defined in a Test Plan file",
          options: [
            {
              name: ["--test-plan-file", "-test"],
              description: "Path to the Test Plan file",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--environment-id", "-env"],
              description: "Environment ID for the app to be tested",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--tenant", "-t"],
              description: "Tenant ID for the app being tested",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--output-directory", "-o"],
              description: "Path to save test output and logs",
              args: {
                name: "string",
              },
            },
            {
              name: ["--domain", "-d"],
              description: "The player domain for the app being tested",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "tool",
      description: "Power Platform tools that can be installed and launched",
      subcommands: [
        {
          name: "list",
          description:
            "List the launchable tools and their local install state and version",
        },
        {
          name: "admin",
          description:
            "Launch Power Platform Admin Center for the current environment",
        },
        {
          name: "maker",
          description:
            "Launch Power Apps Maker Portal for the current environment",
        },
        {
          name: "prt",
          description: "Launch Plug-in Registration Tool (PRT)",
          options: [
            {
              name: ["--update", "-u"],
              description:
                "Update tool to latest available version from nuget.org",
            },
            {
              name: ["--clear", "-c"],
              description: "Clear tool from local file cache",
            },
          ],
        },
        {
          name: "cmt",
          description: "Launch Configuration Migration Tool (CMT)",
          options: [
            {
              name: ["--update", "-u"],
              description:
                "Update tool to latest available version from nuget.org",
            },
            {
              name: ["--clear", "-c"],
              description: "Clear tool from local file cache",
            },
          ],
        },
        {
          name: "pd",
          description: "Launch Package Deployer (PD)",
          options: [
            {
              name: ["--update", "-u"],
              description:
                "Update tool to latest available version from nuget.org",
            },
            {
              name: ["--clear", "-c"],
              description: "Clear tool from local file cache",
            },
          ],
        },
      ],
    },
    {
      name: "virtual-agent",
      description: "Commands for working with Power Virtual Agent bots",
      subcommands: [
        {
          name: "list",
          description:
            "List of Virtual Agents in the current or target Dataverse environment",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "The target Environment ID or URL. The default value is the environment of your currently active Dataverse Auth Profile",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "status",
          description:
            "Poll the deployment status of a specified Virtual Agent in the current or target Dataverse environment",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "The target Environment ID or URL. The default value is the environment of your currently active Dataverse Auth Profile",
              args: {
                name: "string",
              },
            },
            {
              name: ["--bot-id", "-id"],
              description: "The ID of a Virtual Agent (Chatbot)",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "extract-translation",
          description:
            "Extracts file containing localized content for one or more bots",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "The target Environment ID or URL. The default value is the environment of your currently active Dataverse Auth Profile",
              args: {
                name: "string",
              },
            },
            {
              name: ["--sourcedir", "-src"],
              description:
                "Source solution directory. When specified, will ignore the connected environment when looking for bots and instead look for content in the solution folder",
              args: {
                name: "string",
              },
            },
            {
              name: ["--bot", "-id"],
              description:
                "The Chatbot ID or schema name (unique name found in Bot Details or file name in solution explorer)",
              args: {
                name: "string",
              },
            },
            {
              name: "--outdir",
              description: "The output directory to write to",
              args: {
                name: "string",
              },
            },
            {
              name: "--format",
              description:
                "The file format in which to write localized files, either 'resx' or 'json'. The default is 'resx'",
              args: {
                name: "string",
              },
            },
            {
              name: ["--all", "-a"],
              description:
                "Write localization files for all supported languages. By default, only the primary language is written",
            },
            {
              name: ["--overwrite", "-o"],
              description:
                "Allow overwrite of the output data file if it already exists",
            },
          ],
        },
        {
          name: "merge-translation",
          description:
            "Merge files containing localized content for one or more bots",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "The target Environment ID or URL. The default value is the environment of your currently active Dataverse Auth Profile",
              args: {
                name: "string",
              },
            },
            {
              name: ["--sourcedir", "-src"],
              description:
                "Source solution directory. When specified, will ignore the connected environment when looking for bots and instead look for content in the solution folder",
              args: {
                name: "string",
              },
            },
            {
              name: ["--file", "-f"],
              description:
                "The list of files that contain translations. Glob patterns are supported",
              args: {
                name: "string",
              },
            },
            {
              name: "--whatif",
              description:
                "Does not execute the command, but outputs the details of what would happen",
            },
            {
              name: "--verbose",
              description:
                "Output more diagnostic information during data import/export",
            },
            {
              name: ["--solution", "-s"],
              description: "Name of the solution",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "extract-template",
          description:
            "Extracts a template file from an existing bot in an environment",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "The target Environment ID or URL. The default value is the environment of your currently active Dataverse Auth Profile",
              args: {
                name: "string",
              },
            },
            {
              name: ["--bot", "-id"],
              description:
                "The Chatbot ID or schema name (unique name found in Bot Details or file name in solution explorer)",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: "--templateFileName",
              description:
                "Location of the yaml file to write the bot template to",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--overwrite", "-o"],
              description:
                "Allow overwrite of the output data file if it already exists",
            },
          ],
        },
        {
          name: "create",
          description:
            "Creates a new bot using an existing template file as the reference",
          options: [
            {
              name: ["--environment", "-env"],
              description:
                "The target Environment ID or URL. The default value is the environment of your currently active Dataverse Auth Profile",
              args: {
                name: "string",
              },
            },
            {
              name: "--schemaName",
              description: "The schema name (unique name) of the new bot",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: "--templateFileName",
              description:
                "Source yaml file containing the bot template that was extracted using the extract-template command",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: "--displayName",
              description: "The display name of the new bot",
              isRequired: true,
              args: {
                name: "string",
              },
            },
            {
              name: ["--solution", "-s"],
              description: "Name of the solution",
              isRequired: true,
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
  ],

  // Only uncomment if pac takes an argument
  // args: {}
};
export default completionSpec;
