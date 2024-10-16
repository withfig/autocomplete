const completionSpec: Fig.Spec = {
  name: "marketplace-reporting",
  description:
    "The Amazon Web Services Marketplace GetBuyerDashboard API enables you to get a procurement insights dashboard programmatically. The API gets the agreement and cost analysis dashboards with data for all of the Amazon Web Services accounts in your Amazon Web Services Organization.  To use the Amazon Web Services Marketplace Reporting API, you must complete the following prerequisites:   Enable all features for your organization. For more information, see Enabling all features for an organization with Organizations, in the Organizations User Guide.   Call the service as the Organizations management account or an account registered as a delegated administrator for the procurement insights service. For more information about management accounts, see Tutorial: Creating and configuring an organization and Managing the management account with Organizations, both in the Organizations User Guide. For more information about delegated administrators, see Using delegated administrators, in the Amazon Web Services Marketplace Buyer Guide.   Create an IAM policy that enables the aws-marketplace:GetBuyerDashboard and organizations:DescribeOrganization permissions. In addition, the management account requires the organizations:EnableAWSServiceAccess and iam:CreateServiceLinkedRole permissions to create. For more information about creating the policy, see Policies and permissions in Identity and Access Management, in the IAM User Guide.  Access can be shared only by registering the desired linked account as a delegated administrator. That requires organizations:RegisterDelegatedAdministrator organizations:ListDelegatedAdministrators and organizations:DeregisterDelegatedAdministrator permissions.    Use the Amazon Web Services Marketplace console to create the AWSServiceRoleForProcurementInsightsPolicy service-linked role. The role enables Amazon Web Services Marketplace procurement visibility integration. The management account requires an IAM policy with the organizations:EnableAWSServiceAccess and iam:CreateServiceLinkedRole permissions to create the service-linked role and enable the service access. For more information, see Granting access to Organizations and Service-linked role to share procurement data in the Amazon Web Services Marketplace Buyer Guide.   After creating the service-linked role, you must enable trusted access that grants Amazon Web Services Marketplace permission to access data from your Organizations. For more information, see Granting access to Organizations in the Amazon Web Services Marketplace Buyer Guide",
  subcommands: [
    {
      name: "get-buyer-dashboard",
      description:
        "Generates an embedding URL for an Amazon QuickSight dashboard for an anonymous user.  This API is available only to Amazon Web Services Organization management accounts or delegated administrators registered for the procurement insights (procurement-insights.marketplace.amazonaws.com) feature.  The following rules apply to a generated URL:   It contains a temporary bearer token, valid for 5 minutes after it is generated. Once redeemed within that period, it cannot be re-used again.   It has a session lifetime of one hour. The 5-minute validity period runs separately from the session lifetime",
      options: [
        {
          name: "--dashboard-identifier",
          description: "The ARN of the requested dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--embedding-domains",
          description:
            "Fully qualified domains that you add to the allow list for access to the generated URL that is then embedded. You can list up to two domains or subdomains in each API call. To include all subdomains under a specific domain, use *. For example, https://*.amazon.com includes all subdomains under https://aws.amazon.com",
          args: {
            name: "list",
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
