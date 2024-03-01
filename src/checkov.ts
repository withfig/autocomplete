const branches: Fig.Generator = {
  script: ["git", "branch", "--no-color"],
  postProcess: (output) => {
    if (output.startsWith("fatal:")) {
      return [];
    }
    return output.split("\n").map((branch) => {
      return { name: branch.replace("*", "").trim(), description: "Branch" };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "checkov",
  description:
    "Checkov scans cloud infrastructure configurations to find misconfigurations before they're deployed",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for checkov",
    },
    {
      name: ["--version", "-v"],
      description: "Show the version of checkov",
    },
    {
      name: "--quiet",
      description: "CLI output, display only failed checks",
    },
    {
      name: "--compact",
      description: "CLI output, do not display code blocks",
    },
    {
      name: ["--list", "-l"],
      description: "List checks",
    },
    {
      name: "--no-guide",
      description:
        "Do not fetch Bridgecrew platform IDs and guidelines for the checkov output report. Note: this prevents Bridgecrew platform check IDs from being used anywhere in the CLI",
      dependsOn: ["--bc-api-key"],
    },
    {
      name: "--output-bc-ids",
      description:
        "Print Bridgecrew platform IDs (BC...) instead of Checkov IDs (CKV...), if the check exists in the platform",
      dependsOn: ["--bc-api-key"],
      exclusiveOn: ["--no-guide"],
    },
    {
      name: ["--directory", "-d"],
      description: "IaC root directory (can not be used together with --file)",
      exclusiveOn: ["--file"],
      args: {
        name: "Directory",
        template: "folders",
      },
    },
    {
      name: ["--output", "-o"],
      description:
        "Report output format. Add multiple outputs by using the flag multiple times (-o sarif -o cli)",
      isRepeatable: true,
      args: {
        name: "FORMAT",
        suggestions: [
          "cli",
          "cyclonedx",
          "json",
          "junitxml",
          "github_failed_only",
          "sarif",
        ],
      },
    },
    {
      name: "--framework",
      description: "IaC frameworks to include checks for",
      args: {
        name: "FRAMEWORKS",
        isVariadic: true,
        suggestions: [
          "arm",
          "cloudformation",
          "dockerfile",
          "github_configuration",
          "gitlab_configuration",
          "helm",
          "json",
          "kubernetes",
          "kustomize",
          "sca_package",
          "secrets",
          "serverless",
          "terraform",
          "terraform_plan",
          "all",
        ],
      },
    },
    {
      name: "--skip-framework",
      description: "IaC frameworks to exclude checks for",
      args: {
        name: "FRAMEWORKS",
        isVariadic: true,
        suggestions: [
          "arm",
          "cloudformation",
          "dockerfile",
          "github_configuration",
          "gitlab_configuration",
          "helm",
          "json",
          "kubernetes",
          "kustomize",
          "sca_package",
          "secrets",
          "serverless",
          "terraform",
          "terraform_plan",
          "all",
        ],
      },
    },
    {
      name: "--add-check",
      description: "Generate a new check via CLI prompt",
    },
    {
      name: ["--file", "-f"],
      description: "IaC file(can not be used together with --directory)",
      exclusiveOn: ["--directory"],
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--skip-path",
      description:
        "Path (file or directory) to skip, using regular expression logic, relative to current working directory. Word boundaries are not implicit; i.e., specifying 'dir1' will skip any directory or subdirectory named 'dir1'. Ignored with -f. Can be specified multiple times",
      exclusiveOn: ["--file"],
      isRepeatable: true,
      args: {
        name: "SKIP_PATH",
        template: "filepaths",
      },
    },
    {
      name: ["--check", "-c"],
      description:
        "Filter scan to run only on a specific check identifier (allowlist). You can specify multiple checks separated by comma delimiter. You may also use the environment variable: CKV_CHECK",
      args: {
        name: "CHECKS",
      },
    },
    {
      name: "--skip-check",
      description:
        "Filter scan to run all check except a specific check identifier (denylist). You can specify multiple checks separated by comma delimiter. You may also use the environment variable: CKV_SKIP_CHECK",
      args: {
        name: "CHECKS",
      },
    },
    {
      name: "--run-all-external-checks",
      description:
        "Run all external checks (loaded via --external-checks options) even if the checks are not present in the --check list. This allows you to always ensure that new checks present in the external source are used. If an external check is included in --skip-check, it will still be skipped",
    },
    {
      name: "--external-checks-dir",
      description: "Directory for custom checks to be loaded. Can be repeated",
      isRepeatable: true,
      args: {
        name: "EXTERNAL_CHECKS_DIR",
      },
    },
    {
      name: "--bc-api-key",
      description:
        "Bridgecrew API key. You may also use the environment variable: BC_API_KEY",
      args: {
        name: "BC_API_KEY",
      },
    },
    {
      name: "--docker-image",
      description:
        "Scan docker images by name or ID. Only works with --bc-api-key flag",
      dependsOn: ["--bc-api-key"],
      args: {
        name: "DOCKER_IMAGE",
      },
    },
    {
      name: "--dockerfile-path",
      description: "Path to the Dockerfile of the scanned docker image",
      args: {
        name: "DOCKERFILE_PATH",
      },
    },
    {
      name: "--repo-id",
      description:
        "Identity string of the repository, with form <repo_owner>/<repo_name>",
      args: {
        name: "REPO_ID",
      },
    },
    {
      name: ["--branch", "-b"],
      description:
        "Selected branch of the persisted repository. Only has effect when using the --bc-api-key flag",
      dependsOn: ["--bc-api-key"],
      args: {
        name: "BRANCH",
        generators: branches,
      },
    },
    {
      name: "--skip-fixes",
      description:
        "Do not download fixed resource templates from Bridgecrew. Only has an effect when using the --bc-api-key flag",
      dependsOn: ["--bc-api-key"],
    },
    {
      name: "--skip-suppressions",
      description:
        "Do not download preconfigured suppressions from the Bridgecrew platform. Code comment suppressions will still be honored. Only has an effect when using the --bc-api-key flag",
      dependsOn: ["--bc-api-key"],
    },
    {
      name: "--skip-policy-download",
      description:
        "Do not download custom policies configured in the Bridgecrew platform. Only has an effect when using the --bc-api-key flag",
      dependsOn: ["--bc-api-key"],
    },
    {
      name: "--download-external-modules",
      description:
        "Download external terraform modules from public git repositories and terraform registry. You may also use the environment variable: DOWNLOAD_EXTERNAL_MODULES]",
      args: {
        name: "DOWNLOAD_EXTERNAL_MODULES",
      },
    },
    {
      name: "--var-file",
      description:
        "Variable files to load in addition to the default files (see https://www.terraform.io/docs/language/values/variables.html#variable-definitions-tfvars-files). Currently only supported for source Terraform (.tf file), and Helm chart scans. Requires using --directory, NOT --file",
      dependsOn: ["--directory"],
      exclusiveOn: ["--file"],
      args: {
        name: "VAR_FILE",
      },
    },
    {
      name: "--external-modules-download-path",
      description:
        "Set the path for the download external terraform modules. You may also use the environment variable: EXTERNAL_MODULES_DIR",
      args: {
        name: "EXTERNAL_MODULES_DIR",
      },
    },
    {
      name: "--evaluate-variables",
      description: "Evaluate the values of variables and locals",
      args: {
        name: "EVALUATE_VARIABLES",
      },
    },
    {
      name: ["--ca-certificate", "-ca"],
      description:
        "Custom CA (bundle) fila. You may also use the environment variablee: CA_CERTIFICATE",
      args: {
        name: "CA_CERTIFICATE",
      },
    },
    {
      name: "--repo-root-for-plan-enrichment",
      description:
        "Directory containing the hcl code used to generate a given plan file. Use with -f FILE",
      dependsOn: ["--file"],
      args: {
        name: "REPO_ROOT_FOR_PLAN_ENRICHMENT",
      },
    },
    {
      name: "--config-file",
      description: "Path to the Checkov configuration YAML file",
      args: {
        name: "CONFIG_FILE",
        template: "filepaths",
      },
    },
    {
      name: "--create-config",
      description:
        "Takes the current command line args and writes them out to a config file at the given path",
      dependsOn: ["--directory"],
      args: {
        name: "CONFIG_FILE",
      },
    },
    {
      name: "--show-config",
      description:
        "Prints all arguments and config settings and where they came from (eg. commandline, config file, environment variable or default)",
    },
    {
      name: "--create-baseline",
      description:
        "Save all current results to a '.checkov.baseline' file so future runs will only flag new findings. Works only with `--directory` flag",
      dependsOn: ["--directory"],
    },
    {
      name: "--baseline",
      description:
        "Use a '.checkov.baseline' file to compare current results with a known baseline. Report will include only failed checks that are newwith respect to the provided baseline. See --create-baseline",
      args: {
        name: "BASELINE",
      },
    },
    {
      name: ["--soft-fail", "-s"],
      description: "Runs checks but suppresses the error code",
    },
    {
      name: "--soft-fail-on",
      description:
        "Exits with a 0 exit code for specified checks. You can specify multiple checks separated by comma delimiter",
      args: {
        name: "CHECKS",
      },
    },
    {
      name: "--hard-fail-on",
      description:
        "Exits with a non-zero exit code for specified checks. You can specify multiple checks separated by comma delimiter",
      args: {
        name: "CHECKS",
      },
    },
    {
      name: "--min-cve-severity",
      description: "Set minimum severity to return a non-zero exit code",
      args: {
        name: "MIN_SEVERITY",
        suggestions: ["critical", "high", "medium", "low", "none"],
      },
    },
    {
      name: "--skip-cve-package",
      description:
        "Ignore specific open source package when SCA scanning for CVEs in package dependencies. Can be used multiple times to skip multiple packages",
      isRepeatable: true,
      args: {
        name: "SKIP_CVE_PACKAGE",
      },
    },
    {
      name: "--use-enforcement-rules",
      description:
        "Use the Enforcement rules configured in the platform for hard / soft fail logic",
      args: {
        name: "USE_ENFORCEMENT_RULES",
      },
    },
    {
      name: "--support",
      description: "Enable debug logs and upload the logs to the server",
      dependsOn: ["--bc-api-key"],
      args: {
        name: "SUPPORT",
      },
    },
    {
      name: "--summary-position",
      description:
        "Chose whether the summary will be appended on top or on bottom",
      args: {
        name: "SUMMARY_POSITION",
        suggestions: ["top", "bottom"],
      },
    },
    {
      name: "--skip-resources-without-violations",
      description: "Exclude extra resources (resources without violations)",
      args: {
        name: "SKIP_RESOURCES_WITHOUT_VIOLATIONS",
      },
    },
    {
      name: "--skip-download",
      description: "Do not download any data from Prisma Cloud",
      args: {
        name: "SKIP_DOWNLOAD",
      },
    },
    {
      name: "--secrets-history-timeout",
      description: "Maximum time to run the history scan",
      args: {
        name: "SECRETS_HISTORY_TIMEOUT",
      },
    },
    {
      name: "--scan-secrets-history",
      description: "Will scan the history of commits for secrets",
      args: {
        name: "SCAN_SECRETS_HISTORY",
      },
    },
    {
      name: "--prisma-api-url",
      description: "The Prisma Cloud API URL",
      args: {
        name: "PRISMA_API_URL",
      },
    },
    {
      name: "--policy-metadata-filter",
      description:
        "Comma separated key:value string to filter policies based on Prisma Cloud policy metadata",
      args: {
        name: "POLICY_METADATA_FILTER",
      },
    },
    {
      name: "--output-file-path",
      description:
        "Name of the output folder to save the chosen output formats",
      args: {
        name: "OUTPUT_FILE_PATH",
      },
    },
    {
      name: "--output-baseline-as-skipped",
      description:
        "Output checks that are skipped due to baseline file presence",
      args: {
        name: "OUTPUT_BASELINE_AS_SKIPPED",
      },
    },
    {
      name: "--openai-api-key",
      description:
        "Add an OpenAI API key to enhance finding guidelines. This will send Code to OpenAI",
      args: {
        name: "OPENAI_API_KEY",
      },
    },
    {
      name: "--no-fail-on-crash",
      description: "Return exit code 0 instead of 2",
      args: {
        name: "NO_FAIL_ON_CRASH",
      },
    },
    {
      name: "--mask",
      description:
        "Each entry in the list will be used for masking the desired attribute",
      args: {
        name: "MASK",
      },
    },
    {
      name: "--include-all-checkov-policies",
      description:
        "When running with an API key, Checkov will omit any policies that do not exist in the Bridgecrew or Prisma Cloud platform",
      args: {
        name: "INCLUDE_ALL_CHECKOV_POLICIES",
      },
    },
    {
      name: "--external-checks-git",
      description: "GitHub URL of external checks to be added",
      args: {
        name: "EXTERNAL_CHECKS_GIT",
      },
    },
    {
      name: "--enable-secret-scan-all-files",
      description: "Enable secret scan for all files",
      args: {
        name: "ENABLE_SECRET_SCAN_ALL_FILES",
      },
    },
    {
      name: "--deep-analysis",
      description: "Enable combine TF graph and TF Plan graph",
      args: {
        name: "DEEP_ANALYSIS",
      },
    },
    {
      name: "--block-list-secret-scan",
      description: "List of files to filter out from the secret scanner",
      dependsOn: ["--repo-root-for-plan-enrichment"],
      args: {
        name: "BLOCK_LIST_SECRET_SCAN",
      },
    },
  ],
  // Only uncomment if checkov takes an argument
  // args: {}
};
export default completionSpec;
