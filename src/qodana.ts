/**
 * The Qodana CLI repo: https://github.com/JetBrains/qodana-cli
 */
const icon = "fig://template?badge=🔧";

const completionSpec: Fig.Spec = {
  name: "qodana",
  description: "Run Qodana as fast as possible, with minimum effort required",
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help page for command",
      isPersistent: true,
      priority: 1,
    },
    {
      name: ["-v", "--version"],
      description: "Version for Qodana",
    },
  ],
  subcommands: [
    {
      name: "init",
      description: "Configure project for Qodana",
      icon,
      priority: 100,
      options: [
        {
          name: ["-i", "--project-dir"],
          description:
            'Root directory of the project to configure (default ".")',
          args: {
            name: "string",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "scan",
      description: "Scan a project with Qodana",
      icon,
      priority: 99,
      options: [
        {
          name: ["-a", "--analysis-id"],
          description:
            "Unique report identifier (GUID) to be used by Qodana Cloud",
          args: {
            name: "string",
          },
        },
        {
          name: ["-b", "--baseline"],
          description:
            "Provide the path to an existing SARIF report to be used in the baseline state calculation",
          args: {
            name: "string",
          },
        },
        {
          name: "--baseline-include-absent",
          description:
            "Include in the output report the results from the baseline run that are absent in the current run",
        },
        {
          name: "--cache-dir",
          description:
            "Override cache directory (default <userCacheDir>/JetBrains/<linter>/cache)",
          args: {
            name: "string",
          },
        },
        {
          name: ["-c", "--changes"],
          description: "Override the docker image to be used for the analysis",
        },
        {
          name: "--clear-cache",
          description:
            "Clear the local Qodana cache before running the analysis",
        },
        {
          name: "--disable-sanity",
          description:
            "Skip running the inspections configured by the sanity profile",
        },
        {
          name: ["-e", "--env"],
          description:
            "Define additional environment variables for the Qodana container (you can use the flag multiple times). CLI is not reading full host environment variables and does not pass it to the Qodana container for security reasons",
          isRepeatable: true,
          args: {
            name: "stringArray",
          },
        },
        {
          name: "--fail-threshold",
          description:
            "Set the number of problems that will serve as a quality gate. If this number is reached, the inspection run is terminated with a non-zero exit code",
          args: {
            name: "string",
          },
        },
        {
          name: ["-l", "--linter"],
          description: "Override linter to use",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description: "Port to serve the report on (default 8080)",
          args: {
            name: "int",
          },
        },
        {
          name: "--print-problems",
          description: "Print all found problems by Qodana in the CLI output",
        },
        {
          name: ["-n", "--profile-name"],
          description: "Profile name defined in the project",
          args: {
            name: "string",
          },
        },
        {
          name: ["-p", "--profile-path"],
          description: "Path to the profile file",
          args: {
            name: "string",
            template: "filepaths",
          },
        },
        {
          name: ["-i", "--project-dir"],
          description: 'Root directory of the inspected project (default ".")',
          args: {
            name: "string",
            template: "folders",
          },
        },
        {
          name: "--property",
          description:
            "Set a JVM property to be used while running Qodana using the --property property.name=value1,value2,...,valueN notation",
          insertValue: "--property {cursor}=",
          args: {
            name: "stringArray",
          },
        },
        {
          name: ["-o", "--results-dir"],
          description:
            "Override directory to save Qodana inspection results to (default <userCacheDir>/JetBrains/<linter>/results)",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-promo",
          description:
            "Set to 'true' to have the application run the inspections configured by the promo profile; set to 'false' otherwise (default: 'true' only if Qodana is executed with the default profile)",
          args: {
            name: "string",
            suggestions: ["true", "false"],
          },
        },
        {
          name: ["-s", "--save-report"],
          description: "Generate HTML report (default true)",
          priority: 99,
        },
        {
          name: "--script",
          description: 'Override the run scenario (default "default")',
          args: {
            name: "string",
          },
        },
        {
          name: "--send-report",
          description:
            "Send the inspection report to Qodana Cloud, requires the '--token' option to be specified",
          dependsOn: ["--token"],
        },
        {
          name: ["-w", "--show-report"],
          description: "Serve HTML report on port",
          priority: 100,
        },
        {
          name: "--skip-pull",
          description: "Skip pulling the latest Qodana container",
        },
        {
          name: ["-d", "--source-directory"],
          description:
            "Directory inside the project-dir directory must be inspected. If not specified, the whole project is inspected",
          args: {
            name: "string",
          },
        },
        {
          name: "--stub-profile",
          description:
            "Absolute path to the fallback profile file. This option is applied in case the profile was not specified using any available options",
          args: {
            name: "string",
          },
        },
        {
          name: ["-u", "--user"],
          description:
            "User to run Qodana container as. Please specify user id – '$UID' or user id and group id $(id -u):$(id -g). Use 'root' to run as the root user (default: the current user)",
          args: {
            name: "string",
          },
        },
        {
          name: ["-v", "--volume"],
          description:
            "Define additional volumes for the Qodana container (you can use the flag multiple times)",
          isRepeatable: true,
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "show",
      description: "Show Qodana report",
      icon,
      priority: 98,
      options: [
        {
          name: ["-d", "--dir-only"],
          description: "Open report directory only, don't serve it",
        },
        {
          name: ["-p", "--port"],
          description: "Specify port to serve report at (default 8080)",
          priority: 100,
          args: {
            name: "int",
          },
        },
        {
          name: ["-i", "--project-dir"],
          description: 'Root directory of the inspected project (default ".")',
          args: {
            name: "string",
            template: "folders",
          },
        },
        {
          name: ["-r", "--report-dir"],
          description:
            "Specify HTML report path (the one with index.html inside) (default <userCacheDir>/JetBrains/<linter>/results/report)",
          args: {
            name: "string",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "view",
      description: "View SARIF files in CLI",
      icon,
      priority: 97,
      options: [
        {
          name: ["-f", "--sarif-file"],
          description: 'Path to the SARIF file (default "./qodana.sarif.json")',
          args: {
            name: "string",
            template: "filepaths",
          },
        },
      ],
    },
  ],
};
export default completionSpec;
