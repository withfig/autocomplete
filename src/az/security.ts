const completionSpec: Fig.Spec = {
  name: "security",
  description: "Manage your security posture with Azure Security Center",
  subcommands: [
    {
      name: "adaptive_network_hardenings",
      description: "View all Adaptive Network Hardening resources",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of Adaptive Network Hardenings resources in scope of an extended resource",
        },
        {
          name: "show",
          description: "Gets a single Adaptive Network Hardening resource",
        },
      ],
    },
    {
      name: "adaptive-application-controls",
      description:
        "Enable control which applications can run on your Azure and non-Azure machines (Windows and Linux)",
      subcommands: [
        { name: "list", description: "Adaptive Application Controls - List" },
        { name: "show", description: "Adaptive Application Controls - Get" },
      ],
    },
    {
      name: "alert",
      description: "View security alerts",
      subcommands: [
        { name: "list", description: "List security alerts" },
        { name: "show", description: "Shows a security alert" },
        { name: "update", description: "Updates a security alert status" },
      ],
    },
    {
      name: "allowed_connections",
      description:
        "View all possible traffic between resources for the subscription and location, based on connection type",
      subcommands: [
        {
          name: "list",
          description:
            "List of all possible traffic between resources for the subscription",
        },
        {
          name: "show",
          description:
            "List all possible traffic between resources for the subscription and location, based on connection type",
        },
      ],
    },
    {
      name: "assessment",
      description: "View your security assessment results",
      subcommands: [
        {
          name: "create",
          description: "Creates a customer managed security assessment",
        },
        { name: "delete", description: "Deletes a security assessment" },
        { name: "list", description: "List all security assessment results" },
        { name: "show", description: "Shows a security assessment" },
      ],
    },
    {
      name: "assessment-metadata",
      description: "View your security assessment metadata",
      subcommands: [
        {
          name: "create",
          description: "Creates a customer managed security assessment type",
        },
        {
          name: "delete",
          description:
            "Deletes a security assessment type and all it's assessment results",
        },
        { name: "list", description: "List all security assessment results" },
        { name: "show", description: "Shows a security assessment" },
      ],
    },
    {
      name: "atp",
      description: "View and manage Advanced Threat Protection settings",
      subcommands: [
        {
          name: "storage",
          description:
            "View and manage Advanced Threat Protection settings for storage accounts",
          subcommands: [
            {
              name: "show",
              description:
                "Display Advanced Threat Protection settings for a storage account",
            },
            {
              name: "update",
              description:
                "Toggle status of Advanced Threat Protection for a storage account",
            },
          ],
        },
      ],
    },
    {
      name: "auto-provisioning-setting",
      description: "View your auto provisioning settings",
      subcommands: [
        { name: "list", description: "List the auto provisioning settings" },
        { name: "show", description: "Shows an auto provisioning setting" },
        {
          name: "update",
          description:
            "Updates your automatic provisioning settings on the subscription",
        },
      ],
    },
    {
      name: "contact",
      description: "View your security contacts",
      subcommands: [
        { name: "create", description: "Creates a security contact" },
        { name: "delete", description: "Deletes a security contact" },
        { name: "list", description: "List security contact" },
        { name: "show", description: "Shows a security contact" },
      ],
    },
    {
      name: "discovered-security-solution",
      description: "View your discovered security solutions",
      subcommands: [
        { name: "list", description: "List the discovered security solutions" },
        { name: "show", description: "Shows a discovered security solution" },
      ],
    },
    {
      name: "external-security-solution",
      description: "View your external security solutions",
      subcommands: [
        { name: "list", description: "List the external security solutions" },
        { name: "show", description: "Shows an external security solution" },
      ],
    },
    {
      name: "iot-alerts",
      description: "View IoT Security aggregated alerts",
      subcommands: [
        {
          name: "delete",
          description: "Dismiss an aggregated IoT Security Alert",
        },
        {
          name: "list",
          description: "List all yours IoT Security solution aggregated alerts",
        },
        {
          name: "show",
          description:
            "Shows a single aggregated alert of yours IoT Security solution",
        },
      ],
    },
    {
      name: "iot-analytics",
      description: "View IoT Security Analytics metrics",
      subcommands: [
        {
          name: "list",
          description: "List all IoT security Analytics metrics",
        },
        { name: "show", description: "Shows IoT Security Analytics metrics" },
      ],
    },
    {
      name: "iot-recommendations",
      description: "View IoT Security aggregated recommendations",
      subcommands: [
        {
          name: "list",
          description:
            "List all yours IoT Security solution aggregated recommendations",
        },
        {
          name: "show",
          description:
            "Shows a single aggregated recommendation of yours IoT Security solution",
        },
      ],
    },
    {
      name: "iot-solution",
      description: "Manage your IoT Security solution",
      subcommands: [
        { name: "create", description: "Create your IoT Security solution" },
        { name: "delete", description: "Delete your IoT Security solution" },
        { name: "list", description: "List all IoT Security solutions" },
        { name: "show", description: "Shows a IoT Security solution" },
        { name: "update", description: "Update your IoT Security solution" },
      ],
    },
    {
      name: "jit-policy",
      description: "Manage your Just in Time network access policies",
      subcommands: [
        {
          name: "list",
          description: "List your Just in Time network access policies",
        },
        {
          name: "show",
          description: "Shows a Just in Time network access policy",
        },
      ],
    },
    {
      name: "location",
      description: "Shows the Azure Security Center Home region location",
      subcommands: [
        {
          name: "list",
          description: "Shows the Azure Security Center Home region location",
        },
        {
          name: "show",
          description: "Shows the Azure Security Center Home region location",
        },
      ],
    },
    {
      name: "pricing",
      description:
        "Enables managing the Azure Defender plan for the subscription",
      subcommands: [
        {
          name: "create",
          description: "Updates the Azure defender plan for the subscription",
        },
        {
          name: "list",
          description: "Shows the Azure Defender plans for the subscription",
        },
        {
          name: "show",
          description: "Shows the Azure Defender plan for the subscription",
        },
      ],
    },
    {
      name: "regulatory-compliance-assessments",
      description: "Regulatory compliance assessments",
      subcommands: [
        {
          name: "list",
          description:
            "Get details and state of assessments mapped to selected regulatory compliance control",
        },
        {
          name: "show",
          description:
            "Shows supported regulatory compliance details and state for selected assessment",
        },
      ],
    },
    {
      name: "regulatory-compliance-controls",
      description: "Regulatory compliance controls",
      subcommands: [
        {
          name: "list",
          description:
            "List supported of regulatory compliance controls details and state for selected standard",
        },
        {
          name: "show",
          description:
            "Shows a regulatory compliance details state for selected standard",
        },
      ],
    },
    {
      name: "regulatory-compliance-standards",
      description: "Regulatory compliance standards",
      subcommands: [
        {
          name: "list",
          description:
            "List supported regulatory compliance standards details and state results",
        },
        {
          name: "show",
          description:
            "Shows a regulatory compliance details state for selected standard",
        },
      ],
    },
    {
      name: "secure-score-control-definitions",
      description: "Secure score control definitions",
      subcommands: [
        {
          name: "list",
          description: "Get details of secure score control definitions",
        },
      ],
    },
    {
      name: "secure-score-controls",
      description: "Secure score controls",
      subcommands: [
        {
          name: "list",
          description:
            "List supported of secure score controls details and state for scope",
        },
        {
          name: "list_by_score",
          description:
            "List supported of secure score controls details and state for selected score",
        },
      ],
    },
    {
      name: "secure-scores",
      description: "Secure scores",
      subcommands: [
        {
          name: "list",
          description: "List of secure-scores details and state results",
        },
        {
          name: "show",
          description: "Shows a secure score details for selected initiative",
        },
      ],
    },
    {
      name: "setting",
      description: "View your security settings",
      subcommands: [
        { name: "list", description: "List security settings" },
        { name: "show", description: "Shows a security setting" },
        { name: "update", description: "Updates a security setting" },
      ],
    },
    {
      name: "sub-assessment",
      description: "View your security sub assessments",
      subcommands: [
        {
          name: "list",
          description: "List all security sub assessment results",
        },
        { name: "show", description: "Shows a security sub assessment" },
      ],
    },
    {
      name: "task",
      description: "View security tasks (recommendations)",
      subcommands: [
        { name: "list", description: "List security tasks (recommendations)" },
        { name: "show", description: "Shows a security task (recommendation)" },
      ],
    },
    {
      name: "topology",
      description: "Shows the network topology in your subscription",
      subcommands: [
        {
          name: "list",
          description: "Shows the network topology in your subscription",
        },
        {
          name: "show",
          description: "Shows the network topology in your subscription",
        },
      ],
    },
    {
      name: "va",
      description: "View Vulnerability Assessment",
      subcommands: [
        {
          name: "sql",
          description:
            "View Sql Vulnerability Assessment scan results and manage baseline",
          subcommands: [
            {
              name: "baseline",
              description:
                "View and manage Sql Vulnerability Assessment baseline",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete Sql Vulnerability Assessment rule baseline",
                },
                {
                  name: "list",
                  description:
                    "View Sql Vulnerability Assessment baseline for all rules",
                },
                {
                  name: "set",
                  description:
                    "Sets Sql Vulnerability Assessment baseline. Replaces the current baseline",
                },
                {
                  name: "show",
                  description:
                    "View Sql Vulnerability Assessment rule baseline",
                },
                {
                  name: "update",
                  description:
                    "Update Sql Vulnerability Assessment rule baseline. Replaces the current rule baseline",
                },
              ],
            },
            {
              name: "results",
              description: "View Sql Vulnerability Assessment scan results",
              subcommands: [
                {
                  name: "list",
                  description:
                    "View all Sql Vulnerability Assessment scan results",
                },
                {
                  name: "show",
                  description: "View Sql Vulnerability Assessment scan results",
                },
              ],
            },
            {
              name: "scans",
              description: "View Sql Vulnerability Assessment scan summaries",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List all Sql Vulnerability Assessment scan summaries",
                },
                {
                  name: "show",
                  description:
                    "View Sql Vulnerability Assessment scan summaries",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "workspace-setting",
      description:
        "Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a workspace settings in your subscription - these settings let you control which workspace will hold your security data",
        },
        {
          name: "delete",
          description:
            "Deletes the workspace settings in your subscription - this will make the security events on the subscription be reported to the default workspace",
        },
        {
          name: "list",
          description:
            "Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data",
        },
        {
          name: "show",
          description:
            "Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data",
        },
      ],
    },
  ],
};

export default completionSpec;
