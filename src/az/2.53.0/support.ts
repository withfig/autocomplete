const completion: Fig.Spec = {
  name: "support",
  description: "Manage Azure support resource",
  subcommands: [
    {
      name: "services",
      description: "Azure services and related problem categories",
      subcommands: [
        {
          name: "list",
          description:
            "Lists all the Azure services available for support ticket creation. Always use the service and it's corresponding problem classification(s) obtained programmatically for support ticket creation. This practice ensures that you always have the most recent set of service and problem classification Ids",
        },
        {
          name: "show",
          description:
            "Gets a specific Azure service for support ticket creation",
          options: [
            {
              name: "--service-name",
              description: "Name of Azure service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "problem-classifications",
          description: "Problem classifications for an Azure service",
          subcommands: [
            {
              name: "list",
              description:
                "Lists all the problem classifications (categories) available for an Azure service. Always use the service and it's corresponding problem classification(s) obtained programmatically for support ticket creation. This practice ensures that you always have the most recent set of service and problem classification Ids",
              options: [
                {
                  name: "--service-name",
                  description: "Name of Azure service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets the problem classification details for an Azure service",
              options: [
                {
                  name: "--problem-classification-name",
                  description: "Name of problem classification",
                  args: { name: "problem-classification-name" },
                  isRequired: true,
                },
                {
                  name: "--service-name",
                  description: "Name of Azure service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "tickets",
      description: "Create and manage Azure support ticket",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new support ticket for Quota increase, Technical, Billing, and Subscription Management issues for the specified subscription",
          options: [
            {
              name: "--contact-country",
              description: "Country of the user. This is the ISO Alpha-3 code",
              args: { name: "contact-country" },
              isRequired: true,
            },
            {
              name: "--contact-email",
              description: "Primary email address",
              args: { name: "contact-email" },
              isRequired: true,
            },
            {
              name: "--contact-first-name",
              description: "First Name",
              args: { name: "contact-first-name" },
              isRequired: true,
            },
            {
              name: "--contact-language",
              description:
                "Preferred language of support from Azure. Support languages vary based on the severity you choose for your support ticket. This is the standard country-language code",
              args: { name: "contact-language" },
              isRequired: true,
            },
            {
              name: "--contact-last-name",
              description: "Last Name",
              args: { name: "contact-last-name" },
              isRequired: true,
            },
            {
              name: "--contact-method",
              description: "Preferred contact method",
              args: { name: "contact-method", suggestions: ["email", "phone"] },
              isRequired: true,
            },
            {
              name: "--contact-timezone",
              description:
                "Time zone of the user. This is the name of the time zone from Microsoft Time Zone Index Values",
              args: { name: "contact-timezone" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Detailed description of the question or issue",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--problem-classification",
              description:
                "Each Azure service has its own set of issue category called problem classification that corresponds to the type of problem you are experiencing. This parameter is the resource id of ProblemClassification resource",
              args: { name: "problem-classification" },
              isRequired: true,
            },
            {
              name: "--severity",
              description:
                "A value that indicates the urgency of the case, which in turn determines the response time according to the service level agreement of the technical support plan you have with Azure",
              args: {
                name: "severity",
                suggestions: [
                  "critical",
                  "highestcriticalimpact",
                  "minimal",
                  "moderate",
                ],
              },
              isRequired: true,
            },
            {
              name: "--ticket-name",
              description: "Support ticket name",
              args: { name: "ticket-name" },
              isRequired: true,
            },
            {
              name: "--title",
              description: "Title of the support ticket",
              args: { name: "title" },
              isRequired: true,
            },
            {
              name: "--contact-additional-emails",
              description:
                "Space-separated list of additional email addresses. Additional email addresses will be copied on any correspondence about the support ticket",
              args: { name: "contact-additional-emails" },
            },
            {
              name: "--contact-phone-number",
              description:
                "Phone number. This is required if preferred contact method is phone",
              args: { name: "contact-phone-number" },
            },
            {
              name: "--partner-tenant-id",
              description:
                'Partner tenant id for Admin On Behalf of (AOBO) scenario. In addition to logging in to the customer tenant, logging in to the partner tenant (PT) using "az login -t PT --allow-no-subscriptions" is required',
              args: { name: "partner-tenant-id" },
            },
            {
              name: "--quota-change-payload",
              description:
                "Space -separated list of serialized payload of the quota increase request corresponding to regions. Visit https://aka.ms/supportrpquotarequestpayload for details",
              args: { name: "quota-change-payload" },
            },
            {
              name: "--quota-change-regions",
              description:
                "Space-separated list of region for which the quota increase request is being made",
              args: { name: "quota-change-regions" },
            },
            {
              name: "--quota-change-subtype",
              description:
                "Required for certain quota types when there is a sub type that you are requesting quota increase for. Example: Batch",
              args: { name: "quota-change-subtype" },
            },
            {
              name: "--quota-change-version",
              description: "Quota change request version",
              args: { name: "quota-change-version" },
            },
            {
              name: "--require-24-by-7-response",
              description:
                "Indicates if this requires a 24x7 response from Azure. Default is false",
              args: {
                name: "require-24-by-7-response",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--start-time",
              description:
                "Time in UTC datetime (Y-m-d'T'H:M:S'Z') when the problem started. Default is today",
              args: { name: "start-time" },
            },
            {
              name: "--technical-resource",
              description:
                "This is the resource id of the Azure service resource for which the support ticket is created",
              args: { name: "technical-resource" },
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists all the support tickets for an Azure subscription",
          options: [
            {
              name: "--filters",
              description:
                'The filter to apply on the operation. We support OData v4.0 semtantics. Filter can be specified on "Status" property using eq operator or on "CreatedDate" using gt/ge. To combine both filters, use the logical and operator. Default is CreatedDate >= one week',
              args: { name: "filters" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets support ticket details for an Azure subscription",
          options: [
            {
              name: "--ticket-name",
              description: "Support ticket name",
              args: { name: "ticket-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Updates severity level, status and customer contact information for a support ticket",
          options: [
            {
              name: "--ticket-name",
              description: "Support ticket name",
              args: { name: "ticket-name" },
              isRequired: true,
            },
            {
              name: "--contact-additional-emails",
              description:
                "Space-separated list of additional email addresses. Additional email addresses will be copied on any correspondence about the support ticket",
              args: { name: "contact-additional-emails" },
            },
            {
              name: "--contact-country",
              description: "Country of the user. This is the ISO Alpha-3 code",
              args: { name: "contact-country" },
            },
            {
              name: "--contact-email",
              description: "Primary email address",
              args: { name: "contact-email" },
            },
            {
              name: "--contact-first-name",
              description: "First Name",
              args: { name: "contact-first-name" },
            },
            {
              name: "--contact-language",
              description:
                "Preferred language of support from Azure. Support languages vary based on the severity you choose for your support ticket. This is the standard country-language code",
              args: { name: "contact-language" },
            },
            {
              name: "--contact-last-name",
              description: "Last Name",
              args: { name: "contact-last-name" },
            },
            {
              name: "--contact-method",
              description: "Preferred contact method",
              args: { name: "contact-method", suggestions: ["email", "phone"] },
            },
            {
              name: "--contact-phone-number",
              description:
                "Phone number. This is required if preferred contact method is phone",
              args: { name: "contact-phone-number" },
            },
            {
              name: "--contact-timezone",
              description:
                "Time zone of the user. This is the name of the time zone from Microsoft Time Zone Index Values",
              args: { name: "contact-timezone" },
            },
            {
              name: "--severity",
              description:
                "A value that indicates the urgency of the case, which in turn determines the response time according to the service level agreement of the technical support plan you have with Azure",
              args: {
                name: "severity",
                suggestions: [
                  "critical",
                  "highestcriticalimpact",
                  "minimal",
                  "moderate",
                ],
              },
            },
            {
              name: "--status",
              description: "Status to be updated on the ticket",
              args: { name: "status", suggestions: ["closed", "open"] },
            },
          ],
        },
        {
          name: "communications",
          description: "Manage support ticket communications",
          subcommands: [
            {
              name: "create",
              description:
                "Adds a new customer communication to an Azure support ticket",
              options: [
                {
                  name: "--communication-body",
                  description: "Text of the communication",
                  args: { name: "communication-body" },
                  isRequired: true,
                },
                {
                  name: "--communication-name",
                  description: "Communication name",
                  args: { name: "communication-name" },
                  isRequired: true,
                },
                {
                  name: "--communication-subject",
                  description: "Subject of the communication",
                  args: { name: "communication-subject" },
                  isRequired: true,
                },
                {
                  name: "--ticket-name",
                  description: "Support ticket name",
                  args: { name: "ticket-name" },
                  isRequired: true,
                },
                {
                  name: "--communication-sender",
                  description: "Email address of the sender",
                  args: { name: "communication-sender" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Lists all communications (attachments not included) for a support ticket",
              options: [
                {
                  name: "--ticket-name",
                  description: "Support ticket name",
                  args: { name: "ticket-name" },
                  isRequired: true,
                },
                {
                  name: "--filters",
                  description:
                    'The filter to apply on the operation. We support OData v4.0 semtantics. Filter can be specified on "CommunicationType" using eq operator or on "CreatedDate" using gt/ge. To combine both filters, use the logical and operator',
                  args: { name: "filters" },
                },
              ],
            },
            {
              name: "show",
              description: "Gets communication details for a support ticket",
              options: [
                {
                  name: "--communication-name",
                  description: "Communication name",
                  args: { name: "communication-name" },
                  isRequired: true,
                },
                {
                  name: "--ticket-name",
                  description: "Support ticket name",
                  args: { name: "ticket-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
