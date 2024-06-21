const completionSpec: Fig.Spec = {
  name: "inspector-scan",
  description:
    "Amazon Inspector Scan is a vulnerability discovery service that scans a provided Software Bill of Materials (SBOM) for security vulnerabilities",
  subcommands: [
    {
      name: "scan-sbom",
      description:
        "Scans a provided CycloneDX 1.5 SBOM and reports on any vulnerabilities discovered in that SBOM. You can generate compatible SBOMs for your resources using the Amazon Inspector SBOM generator",
      options: [
        {
          name: "--sbom",
          description:
            "The JSON file for the SBOM you want to scan. The SBOM must be in CycloneDX 1.5 format",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-format",
          description: "The output format for the vulnerability report",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
  ],
};
export default completionSpec;
