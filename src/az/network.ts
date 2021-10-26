const completionSpec: Fig.Spec = {
  name: "network",
  description: "Manage Azure Network resources",
  subcommands: [
    {
      name: "application-gateway",
      description:
        "Manage application-level routing and load balancing services",
      subcommands: [
        {
          name: "address-pool",
          description: "Manage address pools of an application gateway",
          subcommands: [
            { name: "create", description: "Create an address pool" },
            { name: "delete", description: "Delete an address pool" },
            { name: "list", description: "List address pools" },
            { name: "show", description: "Get the details of an address pool" },
            { name: "update", description: "Update an address pool" },
          ],
        },
        {
          name: "auth-cert",
          description:
            "Manage authorization certificates of an application gateway",
          subcommands: [
            {
              name: "create",
              description: "Create an authorization certificate",
            },
            {
              name: "delete",
              description: "Delete an authorization certificate",
            },
            { name: "list", description: "List authorization certificates" },
            { name: "show", description: "Show an authorization certificate" },
            {
              name: "update",
              description: "Update an authorization certificate",
            },
          ],
        },
        {
          name: "client-cert",
          description:
            "Manage trusted client certificate of application gateway",
          subcommands: [
            {
              name: "add",
              description:
                "Add trusted client certificate of the application gateway",
            },
            {
              name: "list",
              description:
                "List the existing trusted client certificate of the application gateway",
            },
            {
              name: "remove",
              description:
                "Remove an existing trusted client certificate of the application gateway",
            },
            {
              name: "show",
              description:
                "Show an existing trusted client certificate of the application gateway",
            },
            {
              name: "update",
              description:
                "Update trusted client certificate of the application gateway",
            },
          ],
        },
        { name: "create", description: "Create an application gateway" },
        { name: "delete", description: "Delete an application gateway" },
        {
          name: "frontend-ip",
          description: "Manage frontend IP addresses of an application gateway",
          subcommands: [
            { name: "create", description: "Create a frontend IP address" },
            { name: "delete", description: "Delete a frontend IP address" },
            { name: "list", description: "List frontend IP addresses" },
            {
              name: "show",
              description: "Get the details of a frontend IP address",
            },
            { name: "update", description: "Update a frontend IP address" },
          ],
        },
        {
          name: "frontend-port",
          description: "Manage frontend ports of an application gateway",
          subcommands: [
            { name: "create", description: "Create a frontend port" },
            { name: "delete", description: "Delete a frontend port" },
            { name: "list", description: "List frontend ports" },
            { name: "show", description: "Get the details of a frontend port" },
            { name: "update", description: "Update a frontend port" },
          ],
        },
        {
          name: "http-listener",
          description: "Manage HTTP listeners of an application gateway",
          subcommands: [
            { name: "create", description: "Create an HTTP listener" },
            { name: "delete", description: "Delete an HTTP listener" },
            { name: "list", description: "List HTTP listeners" },
            {
              name: "show",
              description: "Get the details of an HTTP listener",
            },
            { name: "update", description: "Update an HTTP listener" },
          ],
        },
        {
          name: "http-settings",
          description: "Manage HTTP settings of an application gateway",
          subcommands: [
            { name: "create", description: "Create HTTP settings" },
            { name: "delete", description: "Delete HTTP settings" },
            { name: "list", description: "List HTTP settings" },
            {
              name: "show",
              description: "Get the details of a gateway's HTTP settings",
            },
            { name: "update", description: "Update HTTP settings" },
          ],
        },
        {
          name: "identity",
          description:
            "Manage the managed service identity of an application gateway",
          subcommands: [
            {
              name: "assign",
              description:
                "Assign a managed service identity to an application-gateway",
            },
            {
              name: "remove",
              description:
                "Remove the managed service identity of an application-gateway",
            },
            {
              name: "show",
              description:
                "Show the managed service identity of an application-gateway",
            },
          ],
        },
        { name: "list", description: "List application gateways" },
        {
          name: "private-link",
          description: "Manage Private Link of an Application Gateway",
          subcommands: [
            {
              name: "add",
              description:
                "Add a new Private Link with a default IP Configuration and associate it with an existing Frontend IP",
            },
            {
              name: "ip-config",
              description:
                "Manage IP configuration of a Private Link to configure its capability",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add an IP configuration to a Private Link to scale up its capability",
                },
                {
                  name: "list",
                  description:
                    "List all the IP configuration of a Private Link",
                },
                {
                  name: "remove",
                  description:
                    "Remove an IP configuration from a Private Link to scale down its capability",
                },
                {
                  name: "show",
                  description: "Show an IP configuration of a Private Link",
                },
                {
                  name: "wait",
                  description:
                    "Place the CLI in a waiting state until the condition of corresponding application gateway is met",
                },
              ],
            },
            { name: "list", description: "List all the Private Link" },
            {
              name: "remove",
              description:
                "Remove a Private Link and clear association with Frontend IP. The subnet associate with a Private Link might need to clear manually",
            },
            { name: "show", description: "Show a Private Link" },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until the condition of corresponding application gateway is met",
            },
          ],
        },
        {
          name: "probe",
          description:
            "Manage probes to gather and evaluate information on a gateway",
          subcommands: [
            { name: "create", description: "Create a probe" },
            { name: "delete", description: "Delete a probe" },
            { name: "list", description: "List probes" },
            { name: "show", description: "Get the details of a probe" },
            { name: "update", description: "Update a probe" },
          ],
        },
        {
          name: "redirect-config",
          description: "Manage redirect configurations",
          subcommands: [
            { name: "create", description: "Create a redirect configuration" },
            { name: "delete", description: "Delete a redirect configuration" },
            { name: "list", description: "List redirect configurations" },
            {
              name: "show",
              description: "Get the details of a redirect configuration",
            },
            { name: "update", description: "Update a redirect configuration" },
          ],
        },
        {
          name: "rewrite-rule",
          description: "Manage rewrite rules of an application gateway",
          subcommands: [
            {
              name: "condition",
              description:
                "Manage rewrite rule conditions of an application gateway",
              subcommands: [
                {
                  name: "create",
                  description: "Create a rewrite rule condition",
                },
                {
                  name: "delete",
                  description: "Delete a rewrite rule condition",
                },
                { name: "list", description: "List rewrite rule conditions" },
                {
                  name: "list-server-variables",
                  description: "Lists all available server variables",
                },
                {
                  name: "show",
                  description: "Get the details of a rewrite rule condition",
                },
                {
                  name: "update",
                  description: "Update a rewrite rule condition",
                },
              ],
            },
            { name: "create", description: "Create a rewrite rule" },
            { name: "delete", description: "Delete a rewrite rule" },
            { name: "list", description: "List rewrite rules" },
            {
              name: "list-request-headers",
              description: "Lists all available request headers",
            },
            {
              name: "list-response-headers",
              description: "Lists all available response headers",
            },
            {
              name: "set",
              description: "Manage rewrite rule sets of an application gateway",
              subcommands: [
                { name: "create", description: "Create a rewrite rule set" },
                { name: "delete", description: "Delete a rewrite rule set" },
                { name: "list", description: "List rewrite rule sets" },
                {
                  name: "show",
                  description: "Get the details of a rewrite rule set",
                },
                { name: "update", description: "Update a rewrite rule set" },
              ],
            },
            { name: "show", description: "Get the details of a rewrite rule" },
            { name: "update", description: "Update a rewrite rule" },
          ],
        },
        {
          name: "root-cert",
          description:
            "Manage trusted root certificates of an application gateway",
          subcommands: [
            {
              name: "create",
              description: "Upload a trusted root certificate",
            },
            {
              name: "delete",
              description: "Delete a trusted root certificate",
            },
            { name: "list", description: "List trusted root certificates" },
            {
              name: "show",
              description: "Get the details of a trusted root certificate",
            },
            {
              name: "update",
              description: "Update a trusted root certificate",
            },
          ],
        },
        {
          name: "rule",
          description: "Evaluate probe information and define routing rules",
          subcommands: [
            { name: "create", description: "Create a rule" },
            { name: "delete", description: "Delete a rule" },
            { name: "list", description: "List rules" },
            { name: "show", description: "Get the details of a rule" },
            { name: "update", description: "Update a rule" },
          ],
        },
        {
          name: "show",
          description: "Get the details of an application gateway",
        },
        {
          name: "show-backend-health",
          description:
            "Get information on the backend health of an application gateway",
        },
        {
          name: "ssl-cert",
          description: "Manage SSL certificates of an application gateway",
          subcommands: [
            { name: "create", description: "Upload an SSL certificate" },
            { name: "delete", description: "Delete an SSL certificate" },
            { name: "list", description: "List SSL certificates" },
            {
              name: "show",
              description: "Get the details of an SSL certificate",
            },
            { name: "update", description: "Update an SSL certificate" },
          ],
        },
        {
          name: "ssl-policy",
          description: "Manage the SSL policy of an application gateway",
          subcommands: [
            {
              name: "list-options",
              description:
                "Lists available SSL options for configuring SSL policy",
            },
            {
              name: "predefined",
              description: "Get information on predefined SSL policies",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Lists all SSL predefined policies for configuring SSL policy",
                },
                {
                  name: "show",
                  description:
                    "Gets SSL predefined policy with the specified policy name",
                },
              ],
            },
            { name: "set", description: "Update or clear SSL policy settings" },
            {
              name: "show",
              description: "Get the details of gateway's SSL policy settings",
            },
          ],
        },
        {
          name: "ssl-profile",
          description: "Manage ssl profiles of application gateway",
          subcommands: [
            {
              name: "add",
              description: "Add ssl profiles of the application gateway",
            },
            {
              name: "list",
              description:
                "List the existing ssl profiles of the application gateway",
            },
            {
              name: "remove",
              description:
                "Remove an existing ssl profiles of the application gateway",
            },
            {
              name: "show",
              description:
                "Show an existing ssl profiles of the application gateway",
            },
            {
              name: "update",
              description: "Update ssl profiles of the application gateway",
            },
          ],
        },
        { name: "start", description: "Start an application gateway" },
        { name: "stop", description: "Stop an application gateway" },
        { name: "update", description: "Update an application gateway" },
        {
          name: "url-path-map",
          description: "Manage URL path maps of an application gateway",
          subcommands: [
            { name: "create", description: "Create a URL path map" },
            { name: "delete", description: "Delete a URL path map" },
            { name: "list", description: "List URL path maps" },
            {
              name: "rule",
              description: "Manage the rules of a URL path map",
              subcommands: [
                {
                  name: "create",
                  description: "Create a rule for a URL path map",
                },
                {
                  name: "delete",
                  description: "Delete a rule of a URL path map",
                },
              ],
            },
            { name: "show", description: "Get the details of a URL path map" },
            { name: "update", description: "Update a URL path map" },
          ],
        },
        {
          name: "waf-config",
          description: "Configure the settings of a web application firewall",
          subcommands: [
            {
              name: "list-rule-sets",
              description:
                "Get information on available WAF rule sets, rule groups, and rule IDs",
            },
            {
              name: "set",
              description:
                "Update the firewall configuration of a web application",
            },
            {
              name: "show",
              description:
                "Get the firewall configuration of a web application",
            },
          ],
        },
        {
          name: "waf-policy",
          description:
            "Manage application gateway web application firewall (WAF) policies",
          subcommands: [
            {
              name: "create",
              description: "Create an application gateway WAF policy",
            },
            {
              name: "custom-rule",
              description:
                "Manage application gateway web application firewall (WAF) policy custom rules",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create an application gateway WAF policy custom rule",
                },
                {
                  name: "delete",
                  description:
                    "Delete an application gateway WAF policy custom rule",
                },
                {
                  name: "list",
                  description:
                    "List application gateway WAF policy custom rules",
                },
                {
                  name: "match-condition",
                  description:
                    "Manage application gateway web application firewall (WAF) policies",
                  subcommands: [
                    {
                      name: "add",
                      description:
                        "A match condition to an application gateway WAF policy custom rule",
                    },
                    {
                      name: "list",
                      description:
                        "List application gateway WAF policy custom rule match conditions",
                    },
                    {
                      name: "remove",
                      description:
                        "Remove a match condition from an application gateway WAF policy custom rule",
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the details of an application gateway WAF policy custom rule",
                },
                {
                  name: "update",
                  description:
                    "Update an application gateway WAF policy custom rule",
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an application gateway WAF policy",
            },
            {
              name: "list",
              description: "List application gateway WAF policies",
            },
            {
              name: "managed-rule",
              description:
                "Manage managed rules of a waf-policy. Visit: https://docs.microsoft.com/azure/web-application-firewall/afds/afds-overview",
              subcommands: [
                {
                  name: "exclusion",
                  description:
                    "Manage OWASP CRS exclusions that are applied on a WAF policy managed rules",
                  subcommands: [
                    {
                      name: "add",
                      description:
                        "Add an OWASP CRS exclusion rule to the WAF policy managed rules",
                    },
                    {
                      name: "list",
                      description:
                        "List all OWASP CRS exclusion rules that are applied on a Waf policy managed rules",
                    },
                    {
                      name: "remove",
                      description:
                        "Remove all OWASP CRS exclusion rules that are applied on a Waf policy managed rules",
                    },
                  ],
                },
                {
                  name: "rule-set",
                  description:
                    "Manage managed rule set of managed rules of a WAF policy",
                  subcommands: [
                    {
                      name: "add",
                      description:
                        "Add managed rule set to the WAF policy managed rules. For rule set and rules, please visit: https://docs.microsoft.com/azure/web-application-firewall/ag/application-gateway-crs-rulegroups-rules",
                    },
                    { name: "list", description: "List all managed rule set" },
                    {
                      name: "remove",
                      description:
                        "Remove a managed rule set by rule set group name if rule_group_name is specified. Otherwise, remove all rule set",
                    },
                    {
                      name: "update",
                      description:
                        "Manage rules of a WAF policy. If --group-name and --rules are provided, override existing rules. If --group-name is provided, clear all rules under a certain rule group. If neither of them are provided, update rule set and clear all rules under itself. For rule set and rules, please visit: https://docs.microsoft.com/azure/web-application-firewall/ag/application-gateway-crs-rulegroups-rules",
                    },
                  ],
                },
              ],
            },
            {
              name: "policy-setting",
              description:
                "Defines contents of a web application firewall global configuration",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List properties of a web application firewall global configuration",
                },
                {
                  name: "update",
                  description:
                    "Update properties of a web application firewall global configuration",
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the details of an application gateway WAF policy",
            },
            {
              name: "update",
              description: "Update an application gateway WAF policy",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the application gateway WAF policy is met",
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the application gateway is met",
        },
      ],
    },
    {
      name: "asg",
      description: "Manage application security groups (ASGs)",
      subcommands: [
        { name: "create", description: "Create an application security group" },
        { name: "delete", description: "Delete an application security group" },
        {
          name: "list",
          description: "List all application security groups in a subscription",
        },
        {
          name: "show",
          description: "Get details of an application security group",
        },
        { name: "update", description: "Update an application security group" },
      ],
    },
    {
      name: "bastion",
      description: "Manage Azure bastion host",
      subcommands: [
        { name: "create", description: "Create a Azure bastion host machine" },
        { name: "delete", description: "Delete a Azure bastion host machine" },
        { name: "list", description: "List all Azure bastion host machines" },
        {
          name: "rdp",
          description:
            "RDP to target Virtual Machine using Tunneling from Azure Bastion",
        },
        { name: "show", description: "Show a Azure bastion host machine" },
        {
          name: "ssh",
          description:
            "SSH to a virtual machine using Tunneling from Azure Bastion",
        },
        { name: "tunnel", description: "Show a Azure bastion host machine" },
      ],
    },
    {
      name: "cross-connection",
      description: "Manage customers' ExpressRoute circuits",
      subcommands: [
        {
          name: "list",
          description:
            "List all ExpressRoute cross-connections for the current subscription",
        },
        {
          name: "list-arp-tables",
          description:
            "Show the current Address Resolution Protocol (ARP) table of an ExpressRoute cross-connection peering",
        },
        {
          name: "list-route-tables",
          description:
            "Show the current routing table of an ExpressRoute cross-connection peering",
        },
        {
          name: "peering",
          description:
            "Manage ExpressRoute peering of an ExpressRoute cross-connection",
          subcommands: [
            {
              name: "create",
              description:
                "Create peering settings for an ExpressRoute cross-connection",
            },
            { name: "delete", description: "Delete peering settings" },
            {
              name: "list",
              description:
                "List peering settings of an ExpressRoute cross-connection",
            },
            {
              name: "show",
              description: "Get the details of an express route peering",
            },
            {
              name: "update",
              description:
                "Update peering settings for an ExpressRoute cross-connection",
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of an ExpressRoute cross-connection",
        },
        {
          name: "summarize-route-table",
          description:
            "Gets the route table summary associated with the express route cross connection in a resource group",
        },
        {
          name: "update",
          description: "Update settings of an ExpressRoute cross-connection",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the ExpressRoute is met",
        },
      ],
    },
    {
      name: "cross-region-lb",
      description: "Manage and configure cross-region load balancers",
      subcommands: [
        {
          name: "address-pool",
          description: "Manage address pools of a cross-region load balancer",
          subcommands: [
            {
              name: "address",
              description:
                "Manage backend addresses of the cross-region load balance backend address pool",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add one backend address into the load balance backend address pool",
                },
                {
                  name: "list",
                  description:
                    "List all backend addresses of the load balance backend address pool",
                },
                {
                  name: "remove",
                  description:
                    "Remove one backend address from the load balance backend address pool",
                },
              ],
            },
            { name: "create", description: "Create an address pool" },
            { name: "delete", description: "Delete an address pool" },
            {
              name: "list",
              description: "Gets all the load balancer backed address pools",
            },
            {
              name: "show",
              description: "Gets load balancer backend address pool",
            },
          ],
        },
        { name: "create", description: "Create a cross-region load balancer" },
        { name: "delete", description: "Deletes the specified load balancer" },
        {
          name: "frontend-ip",
          description:
            "Manage frontend IP addresses of a cross-region load balancer",
          subcommands: [
            { name: "create", description: "Create a frontend IP address" },
            { name: "delete", description: "Delete a frontend IP address" },
            { name: "list", description: "List frontend IP addresses" },
            {
              name: "show",
              description: "Get the details of a frontend IP address",
            },
            { name: "update", description: "Update a frontend IP address" },
          ],
        },
        { name: "list", description: "List load balancers" },
        {
          name: "probe",
          description: "Evaluate probe information and define routing rules",
          subcommands: [
            { name: "create", description: "Create a probe" },
            { name: "delete", description: "Delete a probe" },
            { name: "list", description: "List probes" },
            { name: "show", description: "Get the details of a probe" },
            { name: "update", description: "Update a probe" },
          ],
        },
        {
          name: "rule",
          description: "Manage cross-region load balancing rules",
          subcommands: [
            { name: "create", description: "Create a load balancing rule" },
            { name: "delete", description: "Delete a load balancing rule" },
            { name: "list", description: "List load balancing rules" },
            {
              name: "show",
              description: "Get the details of a load balancing rule",
            },
            { name: "update", description: "Update a load balancing rule" },
          ],
        },
        { name: "show", description: "Gets the specified load balancer" },
        { name: "update", description: "Update a cross-region load balancer" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the cross-region load balancer is met",
        },
      ],
    },
    {
      name: "custom-ip",
      description: "Manage custom IP",
      subcommands: [
        {
          name: "prefix",
          description: "Manage custom IP prefix resources",
          subcommands: [
            {
              name: "create",
              description: "Create a custom IP prefix resource",
            },
            {
              name: "delete",
              description: "Delete a custom IP prefix resource",
            },
            { name: "list", description: "List custom IP prefix resources" },
            {
              name: "show",
              description: "Get the details of a custom IP prefix resource",
            },
            {
              name: "update",
              description: "Update a custom IP prefix resource",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the custom ip prefix is met",
            },
          ],
        },
      ],
    },
    {
      name: "ddos-protection",
      description: "Manage DDoS Protection Plans",
      subcommands: [
        { name: "create", description: "Create a DDoS protection plan" },
        { name: "delete", description: "Delete a DDoS protection plan" },
        { name: "list", description: "List DDoS protection plans" },
        { name: "show", description: "Show details of a DDoS protection plan" },
        { name: "update", description: "Update a DDoS protection plan" },
      ],
    },
    {
      name: "dns",
      description: "Manage DNS domains in Azure",
      subcommands: [
        {
          name: "list-references",
          description:
            "Returns the DNS records specified by the referencing targetResourceIds",
        },
        {
          name: "record-set",
          description: "Manage DNS records and record sets",
          subcommands: [
            {
              name: "a",
              description: "Manage DNS A records",
              subcommands: [
                { name: "add-record", description: "Add an A record" },
                { name: "create", description: "Create an empty A record set" },
                {
                  name: "delete",
                  description:
                    "Delete an A record set and all associated records",
                },
                {
                  name: "list",
                  description: "List all A record sets in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove an A record from its record set",
                },
                {
                  name: "show",
                  description: "Get the details of an A record set",
                },
                { name: "update", description: "Update an A record set" },
              ],
            },
            {
              name: "aaaa",
              description: "Manage DNS AAAA records",
              subcommands: [
                { name: "add-record", description: "Add an AAAA record" },
                {
                  name: "create",
                  description: "Create an empty AAAA record set",
                },
                {
                  name: "delete",
                  description:
                    "Delete an AAAA record set and all associated records",
                },
                {
                  name: "list",
                  description: "List all AAAA record sets in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove AAAA record from its record set",
                },
                {
                  name: "show",
                  description: "Get the details of an AAAA record set",
                },
                { name: "update", description: "Update an AAAA record set" },
              ],
            },
            {
              name: "caa",
              description: "Manage DNS CAA records",
              subcommands: [
                { name: "add-record", description: "Add a CAA record" },
                {
                  name: "create",
                  description: "Create an empty CAA record set",
                },
                {
                  name: "delete",
                  description:
                    "Delete a CAA record set and all associated records",
                },
                {
                  name: "list",
                  description: "List all CAA record sets in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove a CAA record from its record set",
                },
                {
                  name: "show",
                  description: "Get the details of a CAA record set",
                },
                { name: "update", description: "Update a CAA record set" },
              ],
            },
            {
              name: "cname",
              description: "Manage DNS CNAME records",
              subcommands: [
                {
                  name: "create",
                  description: "Create an empty CNAME record set",
                },
                {
                  name: "delete",
                  description:
                    "Delete a CNAME record set and its associated record",
                },
                {
                  name: "list",
                  description: "List the CNAME record set in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove a CNAME record from its record set",
                },
                {
                  name: "set-record",
                  description: "Set the value of a CNAME record",
                },
                {
                  name: "show",
                  description: "Get the details of a CNAME record set",
                },
              ],
            },
            {
              name: "list",
              description: "List all record sets within a DNS zone",
            },
            {
              name: "mx",
              description: "Manage DNS MX records",
              subcommands: [
                { name: "add-record", description: "Add an MX record" },
                {
                  name: "create",
                  description: "Create an empty MX record set",
                },
                {
                  name: "delete",
                  description:
                    "Delete an MX record set and all associated records",
                },
                {
                  name: "list",
                  description: "List all MX record sets in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove an MX record from its record set",
                },
                {
                  name: "show",
                  description: "Get the details of an MX record set",
                },
                { name: "update", description: "Update an MX record set" },
              ],
            },
            {
              name: "ns",
              description: "Manage DNS NS records",
              subcommands: [
                { name: "add-record", description: "Add an NS record" },
                {
                  name: "create",
                  description: "Create an empty NS record set",
                },
                {
                  name: "delete",
                  description:
                    "Delete an NS record set and all associated records",
                },
                {
                  name: "list",
                  description: "List all NS record sets in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove an NS record from its record set",
                },
                {
                  name: "show",
                  description: "Get the details of an NS record set",
                },
                { name: "update", description: "Update an NS record set" },
              ],
            },
            {
              name: "ptr",
              description: "Manage DNS PTR records",
              subcommands: [
                { name: "add-record", description: "Add a PTR record" },
                {
                  name: "create",
                  description: "Create an empty PTR record set",
                },
                {
                  name: "delete",
                  description:
                    "Delete a PTR record set and all associated records",
                },
                {
                  name: "list",
                  description: "List all PTR record sets in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove a PTR record from its record set",
                },
                {
                  name: "show",
                  description: "Get the details of a PTR record set",
                },
                { name: "update", description: "Update a PTR record set" },
              ],
            },
            {
              name: "soa",
              description: "Manage a DNS SOA record",
              subcommands: [
                {
                  name: "show",
                  description: "Get the details of an SOA record",
                },
                {
                  name: "update",
                  description: "Update properties of an SOA record",
                },
              ],
            },
            {
              name: "srv",
              description: "Manage DNS SRV records",
              subcommands: [
                { name: "add-record", description: "Add an SRV record" },
                {
                  name: "create",
                  description: "Create an empty SRV record set",
                },
                {
                  name: "delete",
                  description:
                    "Delete an SRV record set and all associated records",
                },
                {
                  name: "list",
                  description: "List all SRV record sets in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove an SRV record from its record set",
                },
                {
                  name: "show",
                  description: "Get the details of an SRV record set",
                },
                { name: "update", description: "Update an SRV record set" },
              ],
            },
            {
              name: "txt",
              description: "Manage DNS TXT records",
              subcommands: [
                { name: "add-record", description: "Add a TXT record" },
                {
                  name: "create",
                  description: "Create an empty TXT record set",
                },
                {
                  name: "delete",
                  description:
                    "Delete a TXT record set and all associated records",
                },
                {
                  name: "list",
                  description: "List all TXT record sets in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove a TXT record from its record set",
                },
                {
                  name: "show",
                  description: "Get the details of a TXT record set",
                },
                { name: "update", description: "Update a TXT record set" },
              ],
            },
          ],
        },
        {
          name: "zone",
          description: "Manage DNS zones",
          subcommands: [
            { name: "create", description: "Create a DNS zone" },
            {
              name: "delete",
              description: "Delete a DNS zone and all associated records",
            },
            {
              name: "export",
              description: "Export a DNS zone as a DNS zone file",
            },
            {
              name: "import",
              description: "Create a DNS zone using a DNS zone file",
            },
            { name: "list", description: "List DNS zones" },
            {
              name: "show",
              description:
                "Get a DNS zone parameters. Does not show DNS records within the zone",
            },
            {
              name: "update",
              description:
                "Update a DNS zone properties. Does not modify DNS records within the zone",
            },
          ],
        },
      ],
    },
    {
      name: "express-route",
      description:
        "Manage dedicated private network fiber connections to Azure",
      subcommands: [
        {
          name: "auth",
          description: "Manage authentication of an ExpressRoute circuit",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new link authorization for an ExpressRoute circuit",
            },
            {
              name: "delete",
              description:
                "Delete a link authorization of an ExpressRoute circuit",
            },
            {
              name: "list",
              description:
                "List link authorizations of an ExpressRoute circuit",
            },
            {
              name: "show",
              description:
                "Get the details of a link authorization of an ExpressRoute circuit",
            },
          ],
        },
        { name: "create", description: "Create an ExpressRoute circuit" },
        { name: "delete", description: "Delete an ExpressRoute circuit" },
        {
          name: "gateway",
          description: "Manage ExpressRoute gateways",
          subcommands: [
            {
              name: "connection",
              description: "Manage ExpressRoute gateway connections",
              subcommands: [
                {
                  name: "create",
                  description: "Create an ExpressRoute gateway connection",
                },
                {
                  name: "delete",
                  description: "Delete an ExpressRoute gateway connection",
                },
                {
                  name: "list",
                  description: "List ExpressRoute gateway connections",
                },
                {
                  name: "show",
                  description:
                    "Get the details of an ExpressRoute gateway connection",
                },
                {
                  name: "update",
                  description: "Update an ExpressRoute gateway connection",
                },
              ],
            },
            { name: "create", description: "Create an ExpressRoute gateway" },
            { name: "delete", description: "Delete an ExpressRoute gateway" },
            { name: "list", description: "List ExpressRoute gateways" },
            {
              name: "show",
              description: "Get the details of an ExpressRoute gateway",
            },
            {
              name: "update",
              description: "Update settings of an ExpressRoute gateway",
            },
          ],
        },
        {
          name: "get-stats",
          description: "Get the statistics of an ExpressRoute circuit",
        },
        {
          name: "list",
          description:
            "List all ExpressRoute circuits for the current subscription",
        },
        {
          name: "list-arp-tables",
          description:
            "Show the current Address Resolution Protocol (ARP) table of an ExpressRoute circuit",
        },
        {
          name: "list-route-tables",
          description:
            "Show the current routing table of an ExpressRoute circuit peering",
        },
        {
          name: "list-route-tables-summary",
          description:
            "Show the current routing table summary of an ExpressRoute circuit peering",
        },
        {
          name: "list-service-providers",
          description: "List available ExpressRoute service providers",
        },
        {
          name: "peering",
          description: "Manage ExpressRoute peering of an ExpressRoute circuit",
          subcommands: [
            {
              name: "connection",
              description: "Manage ExpressRoute circuit connections",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create connections between two ExpressRoute circuits",
                },
                {
                  name: "delete",
                  description: "Delete an ExpressRoute circuit connection",
                },
                {
                  name: "list",
                  description:
                    "List all global reach connections associated with a private peering in an express route circuit",
                },
                {
                  name: "show",
                  description:
                    "Get the details of an ExpressRoute circuit connection",
                },
              ],
            },
            {
              name: "create",
              description:
                "Create peering settings for an ExpressRoute circuit",
            },
            { name: "delete", description: "Delete peering settings" },
            {
              name: "get-stats",
              description: "Get all traffic stats of an ExpressRoute peering",
            },
            {
              name: "list",
              description: "List peering settings of an ExpressRoute circuit",
            },
            {
              name: "peer-connection",
              description: "Manage ExpressRoute circuit peer connections",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Gets all global reach peer connections associated with a private peering in an express route circuit",
                },
                {
                  name: "show",
                  description:
                    "Gets the specified Peer Express Route Circuit Connection from the specified express route circuit",
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of an express route peering",
            },
            {
              name: "update",
              description: "Update peering settings of an ExpressRoute circuit",
            },
          ],
        },
        {
          name: "port",
          description: "Manage ExpressRoute ports",
          subcommands: [
            { name: "create", description: "Create an ExpressRoute port" },
            { name: "delete", description: "Delete an ExpressRoute port" },
            {
              name: "generate-loa",
              description:
                "Generate and download a letter of authorization for the requested ExpressRoutePort",
            },
            {
              name: "identity",
              description:
                "Manage the managed service identity of an ExpressRoute Port",
              subcommands: [
                {
                  name: "assign",
                  description:
                    "Assign a managed service identity to an ExpressRoute Port",
                },
                {
                  name: "remove",
                  description:
                    "Remove the managed service identity of an ExpressRoute Port",
                },
                {
                  name: "show",
                  description:
                    "Show the managed service identity of an ExpressRoute Port",
                },
              ],
            },
            {
              name: "link",
              description: "View ExpressRoute links",
              subcommands: [
                { name: "list", description: "List ExpressRoute links" },
                {
                  name: "show",
                  description: "Get the details of an ExpressRoute link",
                },
                {
                  name: "update",
                  description:
                    "Manage MACsec configuration of an ExpressRoute Link",
                },
              ],
            },
            { name: "list", description: "List ExpressRoute ports" },
            {
              name: "location",
              description: "View ExpressRoute port location information",
              subcommands: [
                {
                  name: "list",
                  description: "List ExpressRoute port locations",
                },
                {
                  name: "show",
                  description:
                    "Get the details of an ExpressRoute port location",
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of an ExpressRoute port",
            },
            {
              name: "update",
              description: "Update settings of an ExpressRoute port",
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of an ExpressRoute circuit",
        },
        {
          name: "update",
          description: "Update settings of an ExpressRoute circuit",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the ExpressRoute is met",
        },
      ],
    },
    {
      name: "firewall",
      description: "Manage and configure Azure Firewalls",
      subcommands: [
        {
          name: "application-rule",
          description: "Manage and configure Azure Firewall application rules",
          subcommands: [
            {
              name: "collection",
              description:
                "Manage and configure Azure Firewall application rule collections",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete an Azure Firewall application rule collection",
                },
                {
                  name: "list",
                  description:
                    "List Azure Firewall application rule collections",
                },
                {
                  name: "show",
                  description:
                    "Get the details of an Azure Firewall application rule collection",
                },
              ],
            },
            {
              name: "create",
              description: "Create an Azure Firewall application rule",
            },
            {
              name: "delete",
              description: "Delete an Azure Firewall application rule",
            },
            {
              name: "list",
              description: "List Azure Firewall application rules",
            },
            {
              name: "show",
              description:
                "Get the details of an Azure Firewall application rule",
            },
          ],
        },
        { name: "create", description: "Create an Azure Firewall" },
        { name: "delete", description: "Delete an Azure Firewall" },
        {
          name: "ip-config",
          description: "Manage and configure Azure Firewall IP configurations",
          subcommands: [
            {
              name: "create",
              description: "Create an Azure Firewall IP configuration",
            },
            {
              name: "delete",
              description: "Delete an Azure Firewall IP configuration",
            },
            {
              name: "list",
              description: "List Azure Firewall IP configurations",
            },
            {
              name: "show",
              description:
                "Get the details of an Azure Firewall IP configuration",
            },
          ],
        },
        { name: "list", description: "List Azure Firewalls" },
        {
          name: "list-fqdn-tags",
          description:
            "Gets all the Azure Firewall FQDN Tags in a subscription",
        },
        {
          name: "management-ip-config",
          description:
            "Manage and configure Azure Firewall Management IP configurations",
          subcommands: [
            {
              name: "show",
              description:
                "Get the details of an Azure Firewall Management IP configuration",
            },
            {
              name: "update",
              description:
                "Update an Azure Firewall Management IP configuration",
            },
          ],
        },
        {
          name: "nat-rule",
          description: "Manage and configure Azure Firewall NAT rules",
          subcommands: [
            {
              name: "collection",
              description: "Manage and configure Azure Firewall NAT rules",
              subcommands: [
                {
                  name: "delete",
                  description: "Delete an Azure Firewall NAT rule collection",
                },
                {
                  name: "list",
                  description: "List Azure Firewall NAT rule collections",
                },
                {
                  name: "show",
                  description:
                    "Get the details of an Azure Firewall NAT rule collection",
                },
              ],
            },
            {
              name: "create",
              description: "Create an Azure Firewall NAT rule",
            },
            {
              name: "delete",
              description: "Delete an Azure Firewall NAT rule",
            },
            { name: "list", description: "List Azure Firewall NAT rules" },
            {
              name: "show",
              description: "Get the details of an Azure Firewall NAT rule",
            },
          ],
        },
        {
          name: "network-rule",
          description: "Manage and configure Azure Firewall network rules",
          subcommands: [
            {
              name: "collection",
              description:
                "Manage and configure Azure Firewall network rule collections",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete an Azure Firewall network rule collection",
                },
                {
                  name: "list",
                  description: "List Azure Firewall network rule collections",
                },
                {
                  name: "show",
                  description:
                    "Get the details of an Azure Firewall network rule collection",
                },
              ],
            },
            {
              name: "create",
              description: "Create an Azure Firewall network rule",
            },
            {
              name: "delete",
              description:
                "Delete an Azure Firewall network rule. If you want to delete the last rule in a collection, please delete the collection instead",
            },
            { name: "list", description: "List Azure Firewall network rules" },
            {
              name: "show",
              description: "Get the details of an Azure Firewall network rule",
            },
          ],
        },
        {
          name: "policy",
          description: "Manage and configure Azure firewall policy",
          subcommands: [
            { name: "create", description: "Create an Azure firewall policy" },
            { name: "delete", description: "Delete an Azure firewall policy" },
            {
              name: "intrusion-detection",
              description: "Manage intrusion signature rules and bypass rules",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add overrided intrusion signature or a bypass rule for intrusion detection",
                },
                {
                  name: "list",
                  description: "List all intrusion detection configuration",
                },
                {
                  name: "remove",
                  description:
                    "Remove overrided intrusion signature or a bypass rule",
                },
              ],
            },
            { name: "list", description: "List all Azure firewall policies" },
            {
              name: "rule-collection-group",
              description:
                "Manage and configure Azure firewall policy rule collection group",
              subcommands: [
                {
                  name: "collection",
                  description:
                    "Manage and configure Azure firewall policy rule collections in the rule collection group",
                  subcommands: [
                    {
                      name: "add-filter-collection",
                      description:
                        "Add a filter collection into an Azure firewall policy rule collection group",
                    },
                    {
                      name: "add-nat-collection",
                      description:
                        "Add a NAT collection into an Azure firewall policy rule collection group",
                    },
                    {
                      name: "list",
                      description:
                        "List all rule collections of an Azure firewall policy rule collection group",
                    },
                    {
                      name: "remove",
                      description:
                        "Remove a rule collection from an Azure firewall policy rule collection group",
                    },
                    {
                      name: "rule",
                      description:
                        "Manage and configure the rule of a filter collection in the rule collection group of Azure firewall policy",
                      subcommands: [
                        {
                          name: "add",
                          description:
                            "Add a rule into an Azure firewall policy rule collection",
                        },
                        {
                          name: "remove",
                          description:
                            "Remove a rule from an Azure firewall policy rule collection",
                        },
                        {
                          name: "update",
                          description:
                            "Update a rule of an Azure firewall policy rule collection",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "create",
                  description:
                    "Create an Azure firewall policy rule collection group",
                },
                {
                  name: "delete",
                  description:
                    "Delete an Azure Firewall policy rule collection group",
                },
                {
                  name: "list",
                  description:
                    "List all Azure firewall policy rule collection groups",
                },
                {
                  name: "show",
                  description:
                    "Show an Azure firewall policy rule collection group",
                },
                {
                  name: "update",
                  description:
                    "Update an Azure firewall policy rule collection group",
                },
              ],
            },
            { name: "show", description: "Show an Azure firewall policy" },
            { name: "update", description: "Update an Azure firewall policy" },
          ],
        },
        { name: "show", description: "Get the details of an Azure Firewall" },
        {
          name: "threat-intel-allowlist",
          description:
            "Manage and configure Azure Firewall Threat Intelligence Allow List",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Azure Firewall Threat Intelligence Allow List",
            },
            {
              name: "delete",
              description:
                "Delete an Azure Firewall Threat Intelligence Allow List",
            },
            {
              name: "show",
              description:
                "Get the details of an Azure Firewall Threat Intelligence Allow List",
            },
            {
              name: "update",
              description:
                "Update Azure Firewall Threat Intelligence Allow List",
            },
          ],
        },
        { name: "update", description: "Update an Azure Firewall" },
      ],
    },
    {
      name: "front-door",
      description: "Manage Front Doors",
      subcommands: [
        {
          name: "backend-pool",
          description: "Manage Front Door backend pools",
          subcommands: [
            {
              name: "backend",
              description: "Manage backends of Front Door backend pools",
              subcommands: [
                {
                  name: "add",
                  description: "Add a backend to a Front Door backend pool",
                },
                {
                  name: "list",
                  description: "List backends of a Front Door backend pool",
                },
                {
                  name: "remove",
                  description:
                    "Remove a backend from a Front Door backend pool",
                },
                {
                  name: "update",
                  description: "Update a backend to a Front Door backend pool",
                },
              ],
            },
            { name: "create", description: "Create a Front Door backend pool" },
            { name: "delete", description: "Delete a Front Door backend pool" },
            { name: "list", description: "List Front Door backend pools" },
            {
              name: "show",
              description: "Get the details of a Front Door backend pool",
            },
          ],
        },
        {
          name: "check-custom-domain",
          description:
            "Validates the custom domain mapping to ensure it maps to the correct Front Door endpoint in DNS",
        },
        {
          name: "check-name-availability",
          description: "Check the availability of a Front Door resource name",
        },
        { name: "create", description: "Create a Front Door" },
        { name: "delete", description: "Delete a Front Door" },
        {
          name: "frontend-endpoint",
          description: "Manage Front Door frontend endpoints",
          subcommands: [
            {
              name: "create",
              description: "Create a Front Door frontend endpoint",
            },
            {
              name: "delete",
              description: "Delete a Front Door frontend endpoint",
            },
            {
              name: "disable-https",
              description: "Disable HTTPS protocol for a custom domain",
            },
            {
              name: "enable-https",
              description: "Enable HTTPS protocol for a custom domain",
            },
            { name: "list", description: "List Front Door frontend endpoints" },
            {
              name: "show",
              description: "Get the details of a Front Door frontend endpoint",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the Front Door frontend endpoint is met",
            },
          ],
        },
        { name: "list", description: "List Front Doors" },
        {
          name: "load-balancing",
          description: "Manage Front Door load-balancing settings",
          subcommands: [
            {
              name: "create",
              description: "Create Front Door load-balancing settings",
            },
            {
              name: "delete",
              description: "Delete Front Door load-balancing settings",
            },
            {
              name: "list",
              description: "List Front Door load-balancing settingss",
            },
            {
              name: "show",
              description:
                "Get the details of a Front Door load-balancing settings bundle",
            },
            {
              name: "update",
              description: "Update Front Door load-balancing settings",
            },
          ],
        },
        {
          name: "probe",
          description: "Manage Front Door health probe settings",
          subcommands: [
            {
              name: "create",
              description: "Create Front Door health probe settings",
            },
            {
              name: "delete",
              description: "Delete Front Door health probe settings",
            },
            {
              name: "list",
              description: "List Front Door health probe settings",
            },
            {
              name: "show",
              description:
                "Get the details of a Front Door health probe settings",
            },
            {
              name: "update",
              description: "Update Front Door health probe settings",
            },
          ],
        },
        {
          name: "purge-endpoint",
          description: "Removes a content from Front Door",
        },
        {
          name: "routing-rule",
          description: "Manage Front Door routing rules",
          subcommands: [
            { name: "create", description: "Create a Front Door routing rule" },
            { name: "delete", description: "Delete a Front Door routing rule" },
            { name: "list", description: "List Front Door routing rules" },
            {
              name: "show",
              description: "Get the details of a Front Door routing rule",
            },
            { name: "update", description: "Update a Front Door routing rule" },
          ],
        },
        {
          name: "rules-engine",
          description: "Manage Front Door rules engines",
          subcommands: [
            {
              name: "delete",
              description:
                "Deletes an existing Rules Engine Configuration with the specified parameters",
            },
            {
              name: "list",
              description:
                "Lists all of the Rules Engine Configurations within a Front Door",
            },
            {
              name: "rule",
              description: "Manage Rules Engine rules",
              subcommands: [
                {
                  name: "action",
                  description: "Manage Rules Engine actions for Front Door",
                  subcommands: [
                    {
                      name: "add",
                      description: "Add an action to a Rules Engine rule",
                    },
                    {
                      name: "list",
                      description:
                        "Show all actions that apply for a Rules Engine rule",
                    },
                    {
                      name: "remove",
                      description: "Remove an action from a Rules Engine rule",
                    },
                  ],
                },
                {
                  name: "condition",
                  description:
                    "Manage Rules Engine match conditions for Front Door",
                  subcommands: [
                    {
                      name: "add",
                      description:
                        "Add a match condition to a Rules Engine rule",
                    },
                    {
                      name: "list",
                      description:
                        "Show all match conditions associated with a Rules Engine rule",
                    },
                    {
                      name: "remove",
                      description:
                        "Remove a match condition from a Rules Engine rule",
                    },
                  ],
                },
                {
                  name: "create",
                  description: "Create a Rules Engine rule for a Front Door",
                },
                { name: "delete", description: "Delete a Rules Engine rule" },
                {
                  name: "list",
                  description: "List rules of a Rules Engine configuration",
                },
                {
                  name: "show",
                  description: "Get the details of a Rules Engine rule",
                },
                {
                  name: "update",
                  description: "Update Rules Engine configuration of a rule",
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets a Rules Engine Configuration with the specified name within the specified Front Door",
            },
          ],
        },
        { name: "show", description: "Get the details of a Front Door" },
        { name: "update", description: "Update settings of a Front Door" },
        {
          name: "waf-policy",
          description: "Manage WebApplication Firewall (WAF) policies",
          subcommands: [
            { name: "create", description: "Create a WAF policy" },
            { name: "delete", description: "Delete a WAF policy" },
            { name: "list", description: "List WAF policies" },
            {
              name: "managed-rule-definition",
              description: "Learn about available managed rule sets",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Show a detailed list of available managed rule sets",
                },
              ],
            },
            {
              name: "managed-rules",
              description:
                "Change and view managed rule sets associated with your WAF policy",
              subcommands: [
                {
                  name: "add",
                  description: "Add a managed rule set to a WAF policy",
                },
                {
                  name: "exclusion",
                  description:
                    "View and alter exclusions on a managed rule set, rule group, or rule within a managed rule set",
                  subcommands: [
                    {
                      name: "add",
                      description:
                        "Add an exclusion on a managed rule set, rule group, or rule within a managed rule set",
                    },
                    {
                      name: "list",
                      description:
                        "List the exclusions on managed rule set, rule group, or rule within a managed rule set",
                    },
                    {
                      name: "remove",
                      description:
                        "Remove an exclusion on a managed rule set, rule group, or rule within a managed rule set",
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "Show which managed rule sets are applied to a WAF policy",
                },
                {
                  name: "override",
                  description:
                    "View and alter overrides on managed rules within a managed rule set",
                  subcommands: [
                    {
                      name: "add",
                      description:
                        "Add an override on a managed rule within a managed rule set",
                    },
                    {
                      name: "list",
                      description:
                        "List the overrides on managed rules within a managed rule set",
                    },
                    {
                      name: "remove",
                      description:
                        "Remove an override on a managed rule within a managed rule set",
                    },
                  ],
                },
                {
                  name: "remove",
                  description: "Remove a managed rule set from a WAF policy",
                },
              ],
            },
            {
              name: "rule",
              description: "Manage WAF policy custom rules",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a WAF policy custom rule. Use --defer and add a rule match-condition",
                },
                {
                  name: "delete",
                  description: "Delete a WAF policy custom rule",
                },
                { name: "list", description: "List WAF policy custom rules" },
                {
                  name: "match-condition",
                  description:
                    "Alter match-conditions associated with a WAF policy custom rule",
                  subcommands: [
                    {
                      name: "add",
                      description:
                        "Add a match-condition to a WAF policy custom rule",
                    },
                    {
                      name: "list",
                      description:
                        "Show all match-conditions associated with a WAF policy custom rule",
                    },
                    {
                      name: "remove",
                      description:
                        "Remove a match-condition from a WAF policy custom rule",
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Get the details of a WAF policy custom rule",
                },
                {
                  name: "update",
                  description: "Alter the details of a WAF policy custom rule",
                },
              ],
            },
            { name: "show", description: "Get the details of a WAF policy" },
            { name: "update", description: "Update settings of a WAF policy" },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the Front Door is met",
        },
      ],
    },
    {
      name: "ip-group",
      description: "Commands to manage IpGroup",
      subcommands: [
        { name: "create", description: "Create an IpGroup" },
        { name: "delete", description: "Delete an IpGroup" },
        { name: "list", description: "List all of IpGroup" },
        { name: "show", description: "Show details of an IpGroup" },
        { name: "update", description: "Update an IpGroup" },
      ],
    },
    {
      name: "lb",
      description: "Manage and configure load balancers",
      subcommands: [
        {
          name: "address-pool",
          description: "Manage address pools of a load balancer",
          subcommands: [
            {
              name: "address",
              description:
                "Manage backend addresses of the load balance backend address pool",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add one backend address into the load balance backend address pool",
                },
                {
                  name: "list",
                  description:
                    "List all backend addresses of the load balance backend address pool",
                },
                {
                  name: "remove",
                  description:
                    "Remove one backend address from the load balance backend address pool",
                },
              ],
            },
            { name: "create", description: "Create an address pool" },
            { name: "delete", description: "Delete an address pool" },
            { name: "list", description: "List address pools" },
            { name: "show", description: "Get the details of an address pool" },
            {
              name: "tunnel-interface",
              description: "Manage tunnel interfaces of a load balancer",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add one tunnel interface into the load balance tunnel interface pool",
                },
                {
                  name: "list",
                  description:
                    "List all tunnel interfacees of the load balance tunnel interface pool",
                },
                {
                  name: "remove",
                  description:
                    "Remove one tunnel interface from the load balance tunnel interface pool",
                },
                {
                  name: "update",
                  description:
                    "Update one tunnel interface of load balance tunnel interface pool",
                },
              ],
            },
          ],
        },
        { name: "create", description: "Create a load balancer" },
        { name: "delete", description: "Delete a load balancer" },
        {
          name: "frontend-ip",
          description: "Manage frontend IP addresses of a load balancer",
          subcommands: [
            { name: "create", description: "Create a frontend IP address" },
            { name: "delete", description: "Delete a frontend IP address" },
            { name: "list", description: "List frontend IP addresses" },
            {
              name: "show",
              description: "Get the details of a frontend IP address",
            },
            { name: "update", description: "Update a frontend IP address" },
          ],
        },
        {
          name: "inbound-nat-pool",
          description: "Manage inbound NAT address pools of a load balancer",
          subcommands: [
            {
              name: "create",
              description: "Create an inbound NAT address pool",
            },
            {
              name: "delete",
              description: "Delete an inbound NAT address pool",
            },
            { name: "list", description: "List inbound NAT address pools" },
            {
              name: "show",
              description: "Get the details of an inbound NAT address pool",
            },
            {
              name: "update",
              description: "Update an inbound NAT address pool",
            },
          ],
        },
        {
          name: "inbound-nat-rule",
          description: "Manage inbound NAT rules of a load balancer",
          subcommands: [
            { name: "create", description: "Create an inbound NAT rule" },
            { name: "delete", description: "Delete an inbound NAT rule" },
            { name: "list", description: "List inbound NAT rules" },
            {
              name: "show",
              description: "Get the details of an inbound NAT rule",
            },
            { name: "update", description: "Update an inbound NAT rule" },
          ],
        },
        { name: "list", description: "List load balancers" },
        {
          name: "list-nic",
          description: "List associated load balancer network interfaces",
        },
        {
          name: "outbound-rule",
          description: "Manage outbound rules of a load balancer",
          subcommands: [
            { name: "create", description: "Create an outbound-rule" },
            { name: "delete", description: "Delete an outbound-rule" },
            { name: "list", description: "List outbound rules" },
            {
              name: "show",
              description: "Get the details of an outbound rule",
            },
            { name: "update", description: "Update an outbound-rule" },
          ],
        },
        {
          name: "probe",
          description: "Evaluate probe information and define routing rules",
          subcommands: [
            { name: "create", description: "Create a probe" },
            { name: "delete", description: "Delete a probe" },
            { name: "list", description: "List probes" },
            { name: "show", description: "Get the details of a probe" },
            { name: "update", description: "Update a probe" },
          ],
        },
        {
          name: "rule",
          description: "Manage load balancing rules",
          subcommands: [
            { name: "create", description: "Create a load balancing rule" },
            { name: "delete", description: "Delete a load balancing rule" },
            { name: "list", description: "List load balancing rules" },
            {
              name: "show",
              description: "Get the details of a load balancing rule",
            },
            { name: "update", description: "Update a load balancing rule" },
          ],
        },
        { name: "show", description: "Get the details of a load balancer" },
        { name: "update", description: "Update a load balancer" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the load balancer is met",
        },
      ],
    },
    {
      name: "list-service-aliases",
      description:
        "List available service aliases in the region which can be used for Service Endpoint Policies",
    },
    {
      name: "list-service-tags",
      description:
        "List all service tags which are below to different resources",
    },
    {
      name: "list-usages",
      description:
        "List the number of network resources in a region that are used against a subscription quota",
    },
    {
      name: "local-gateway",
      description: "Manage local gateways",
      subcommands: [
        { name: "create", description: "Create a local VPN gateway" },
        { name: "delete", description: "Delete a local VPN gateway" },
        {
          name: "list",
          description: "List all local VPN gateways in a resource group",
        },
        { name: "show", description: "Get the details of a local VPN gateway" },
        { name: "update", description: "Update a local VPN gateway" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the local gateway is met",
        },
      ],
    },
    {
      name: "manager",
      description: "Manage networkmanager with network",
      subcommands: [
        {
          name: "admin-rule",
          description: "Manage adminrule with network",
          subcommands: [
            {
              name: "collection",
              description: "Manage admin rule collection with network",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a network manager security configuration admin rule collection",
                },
                {
                  name: "delete",
                  description: "Delete an admin rule collection",
                },
                {
                  name: "list",
                  description:
                    "List network manager security configuration admin rule collections",
                },
                {
                  name: "show",
                  description:
                    "Gets a network manager security configuration admin rule collection in a subscription",
                },
                {
                  name: "update",
                  description:
                    "Update a network manager security configuration admin rule collection in a subscription",
                },
              ],
            },
            {
              name: "create",
              description:
                "Create a network manager security configuration admin rule",
            },
            { name: "delete", description: "Deletes an admin rule" },
            {
              name: "list",
              description:
                "Retrieves a network manager security configuration admin rule",
            },
            {
              name: "show",
              description:
                "Gets a network manager security configuration admin rule in a subscription",
            },
            {
              name: "update",
              description:
                "Update a network manager security configuration admin rule in a subscription",
            },
          ],
        },
        {
          name: "connect-config",
          description: "Manage connectivityconfiguration with network",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new network manager connectivity configuration",
            },
            {
              name: "delete",
              description:
                "Deletes a network manager connectivity configuration, specified by the resource group, network manager name, and connectivity configuration name",
            },
            {
              name: "list",
              description:
                "Lists all the network manager connectivity configuration in a specified network manager",
            },
            {
              name: "show",
              description:
                "Gets a Network Connectivity Configuration, specified by the resource group, network manager name, and connectivity Configuration name",
            },
            {
              name: "update",
              description:
                "Update a new network manager connectivity configuration",
            },
          ],
        },
        { name: "create", description: "Create a Network Manager" },
        { name: "delete", description: "Deletes a network manager" },
        {
          name: "group",
          description: "Manage networkgroup with network",
          subcommands: [
            { name: "create", description: "Create a network group" },
            { name: "delete", description: "Deletes a network group" },
            { name: "list", description: "Lists the specified network group" },
            {
              name: "list-effect-vnet",
              description:
                "Lists all effective virtual networks by specified network group",
            },
            { name: "show", description: "Gets the specified network group" },
            { name: "update", description: "Update a network group" },
          ],
        },
        {
          name: "list",
          description: "List network managers in a resource group",
        },
        {
          name: "list-active-config",
          description: "Lists active configurations in a network manager",
        },
        {
          name: "list-active-security-admin-rule",
          description: "Lists active security admin rule in a network manager",
        },
        {
          name: "list-active-security-user-rule",
          description: "Lists active security user rule in a network manager",
        },
        {
          name: "list-deploy-status",
          description: "Post List of Network Manager Deployment Status",
        },
        {
          name: "list-effective-config",
          description: "Lists effective configuration in a network manager",
        },
        {
          name: "list-effect-vnet",
          description: "List effective virtual networks in a network manager",
        },
        { name: "post-commit", description: "Post a Network Manager Commit" },
        {
          name: "security-admin-config",
          description: "Manage securityadminconfiguration with network",
          subcommands: [
            {
              name: "create",
              description:
                "Create a network manager security admin Configuration",
            },
            {
              name: "delete",
              description:
                "Deletes a network manager security admin Configuration",
            },
            {
              name: "list",
              description:
                "Lists all the network manager security admin configurations in a network manager, in a paginated format",
            },
            {
              name: "show",
              description:
                "Retrieves a network manager security admin Configuration",
            },
            {
              name: "update",
              description:
                "Update a network manager security admin Configuration",
            },
          ],
        },
        {
          name: "security-user-config",
          description: "Manage securityuserconfiguration with network",
          subcommands: [
            {
              name: "create",
              description:
                "Create a network manager security user Configuration",
            },
            {
              name: "delete",
              description:
                "Deletes a network manager security user Configuration",
            },
            {
              name: "list",
              description:
                "Lists all the network manager security user configurations in a network manager, in a paginated format",
            },
            {
              name: "show",
              description:
                "Retrieves a network manager security user Configuration",
            },
            {
              name: "update",
              description:
                "Update a network manager security user Configuration",
            },
          ],
        },
        { name: "show", description: "Gets the specified Network Manager" },
        { name: "update", description: "Update a Network Manager" },
        {
          name: "user-rule",
          description: "Manage userrule with network",
          subcommands: [
            {
              name: "collection",
              description: "Manage user rule collection with network",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a network manager security configuration user rule collection",
                },
                {
                  name: "delete",
                  description: "Delete an user rule collection",
                },
                {
                  name: "list",
                  description:
                    "List network manager security configuration user rule collections",
                },
                {
                  name: "show",
                  description:
                    "Gets a network manager security configuration user rule collection in a subscription",
                },
                {
                  name: "update",
                  description:
                    "Update a network manager security configuration user rule collection in a subscription",
                },
              ],
            },
            { name: "create", description: "Create a user rule" },
            { name: "delete", description: "Deletes a user rule" },
            {
              name: "list",
              description: "Lists all user rules in a security configuration",
            },
            { name: "show", description: "Gets a user rule" },
            { name: "update", description: "Update a user rule" },
          ],
        },
      ],
    },
    {
      name: "nat",
      description: "Commands to manage NAT resources",
      subcommands: [
        {
          name: "gateway",
          description: "Commands to manage NAT gateways",
          subcommands: [
            { name: "create", description: "Create a NAT gateway" },
            { name: "delete", description: "Delete a NAT gateway" },
            { name: "list", description: "List NAT gateways" },
            { name: "show", description: "Show details of a NAT gateway" },
            { name: "update", description: "Update a NAT gateway" },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the NAT gateway is met",
            },
          ],
        },
      ],
    },
    {
      name: "nic",
      description: "Manage network interfaces",
      subcommands: [
        { name: "create", description: "Create a network interface" },
        { name: "delete", description: "Delete a network interface" },
        {
          name: "ip-config",
          description: "Manage IP configurations of a network interface",
          subcommands: [
            {
              name: "address-pool",
              description: "Manage address pools in an IP configuration",
              subcommands: [
                {
                  name: "add",
                  description: "Add an address pool to an IP configuration",
                },
                {
                  name: "remove",
                  description: "Remove an address pool of an IP configuration",
                },
              ],
            },
            { name: "create", description: "Create an IP configuration" },
            { name: "delete", description: "Delete an IP configuration" },
            {
              name: "inbound-nat-rule",
              description: "Manage inbound NAT rules of an IP configuration",
              subcommands: [
                {
                  name: "add",
                  description: "Add an inbound NAT rule to an IP configuration",
                },
                {
                  name: "remove",
                  description:
                    "Remove an inbound NAT rule of an IP configuration",
                },
              ],
            },
            {
              name: "list",
              description: "List the IP configurations of a NIC",
            },
            {
              name: "show",
              description: "Show the details of an IP configuration",
            },
            { name: "update", description: "Update an IP configuration" },
          ],
        },
        { name: "list", description: "List network interfaces" },
        {
          name: "list-effective-nsg",
          description:
            "List all effective network security groups applied to a network interface",
        },
        { name: "show", description: "Get the details of a network interface" },
        {
          name: "show-effective-route-table",
          description:
            "Show the effective route table applied to a network interface",
        },
        { name: "update", description: "Update a network interface" },
        {
          name: "vtap-config",
          description: "Manage virtual network tap configurations",
          subcommands: [
            {
              name: "create",
              description: "Create a virtual network tap configuration",
            },
            {
              name: "delete",
              description: "Delete a virtual network tap configuration",
            },
            {
              name: "list",
              description: "List virtual network tap configurations",
            },
            {
              name: "show",
              description: "Get details of a virtual network tap configuration",
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the network interface is met",
        },
      ],
    },
    {
      name: "nsg",
      description: "Manage Azure Network Security Groups (NSGs)",
      subcommands: [
        { name: "create", description: "Create a network security group" },
        { name: "delete", description: "Delete a network security group" },
        { name: "list", description: "List network security groups" },
        {
          name: "rule",
          description: "Manage network security group rules",
          subcommands: [
            {
              name: "create",
              description: "Create a network security group rule",
            },
            {
              name: "delete",
              description: "Delete a network security group rule",
            },
            {
              name: "list",
              description: "List all rules in a network security group",
            },
            {
              name: "show",
              description: "Get the details of a network security group rule",
            },
            {
              name: "update",
              description: "Update a network security group rule",
            },
          ],
        },
        {
          name: "show",
          description: "Get information about a network security group",
        },
        { name: "update", description: "Update a network security group" },
      ],
    },
    {
      name: "p2s-vpn-gateway",
      description: "Manage point-to-site VPN gateway",
      subcommands: [
        {
          name: "connection",
          description: "Manage point-to-site VPN gateway connections",
          subcommands: [
            {
              name: "list",
              description:
                "List all connections for a given point-to-site VPN gateway",
            },
            {
              name: "show",
              description:
                "Show the details of a point-to-site VPN gateway connection",
            },
          ],
        },
        { name: "create", description: "Create a point-to-site VPN gateway" },
        { name: "delete", description: "Delete a point-to-site VPN gateway" },
        { name: "list", description: "List all point-to-site VPN gateway" },
        {
          name: "show",
          description: "Show the details of a point-to-site VPN gateway",
        },
        {
          name: "update",
          description: "Update settings of a point-to-site VPN gateway",
        },
        {
          name: "vpn-client",
          description:
            "Download a VPN client configuration required to connect to Azure via point-to-site",
          subcommands: [
            {
              name: "generate",
              description:
                "Generate VPN profile for P2S client of the P2SVpnGateway in the specified resource group",
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the point-to-site VPN gateway is met",
        },
      ],
    },
    {
      name: "private-dns",
      description: "Manage Private DNS domains in Azure",
      subcommands: [
        {
          name: "link",
          description: "Manage Private DNS links",
          subcommands: [
            {
              name: "vnet",
              description:
                "Manage virtual network links to the specified Private DNS zone",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a virtual network link to the specified Private DNS zone",
                },
                {
                  name: "delete",
                  description:
                    "Delete a virtual network link to the specified Private DNS zone",
                },
                {
                  name: "list",
                  description:
                    "List the virtual network links to the specified Private DNS zone",
                },
                {
                  name: "show",
                  description:
                    "Get a virtual network link to the specified Private DNS zone",
                },
                {
                  name: "update",
                  description:
                    "Update a virtual network link's properties. Does not modify virtual network within the link",
                },
                {
                  name: "wait",
                  description:
                    "Place the CLI in a waiting state until a condition of the virtual network link to the specified Private DNS zone is met",
                },
              ],
            },
          ],
        },
        {
          name: "record-set",
          description: "Manage Private DNS records and record sets",
          subcommands: [
            {
              name: "a",
              description: "Manage Private DNS A records",
              subcommands: [
                { name: "add-record", description: "Add an A record" },
                { name: "create", description: "Create an empty A record set" },
                {
                  name: "delete",
                  description:
                    "Delete an A record set and all associated records",
                },
                {
                  name: "list",
                  description: "List all A record sets in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove an A record from its record set",
                },
                {
                  name: "show",
                  description: "Get the details of an A record set",
                },
                { name: "update", description: "Update an A record set" },
              ],
            },
            {
              name: "aaaa",
              description: "Manage Private DNS AAAA records",
              subcommands: [
                { name: "add-record", description: "Add an AAAA record" },
                {
                  name: "create",
                  description: "Create an empty AAAA record set",
                },
                {
                  name: "delete",
                  description:
                    "Delete an AAAA record set and all associated records",
                },
                {
                  name: "list",
                  description: "List all AAAA record sets in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove AAAA record from its record set",
                },
                {
                  name: "show",
                  description: "Get the details of an AAAA record set",
                },
                { name: "update", description: "Update an AAAA record set" },
              ],
            },
            {
              name: "cname",
              description: "Manage Private DNS CNAME records",
              subcommands: [
                {
                  name: "create",
                  description: "Create an empty CNAME record set",
                },
                {
                  name: "delete",
                  description:
                    "Delete a CNAME record set and its associated record",
                },
                {
                  name: "list",
                  description: "List the CNAME record set in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove a CNAME record from its record set",
                },
                {
                  name: "set-record",
                  description: "Set the value of a CNAME record",
                },
                {
                  name: "show",
                  description: "Get the details of a CNAME record set",
                },
                { name: "update", description: "Update a CNAME record set" },
              ],
            },
            {
              name: "list",
              description: "List all record sets within a Private DNS zone",
            },
            {
              name: "mx",
              description: "Manage Private DNS MX records",
              subcommands: [
                { name: "add-record", description: "Add an MX record" },
                {
                  name: "create",
                  description: "Create an empty MX record set",
                },
                {
                  name: "delete",
                  description:
                    "Delete an MX record set and all associated records",
                },
                {
                  name: "list",
                  description: "List all MX record sets in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove an MX record from its record set",
                },
                {
                  name: "show",
                  description: "Get the details of an MX record set",
                },
                { name: "update", description: "Update an MX record set" },
              ],
            },
            {
              name: "ptr",
              description: "Manage Private DNS PTR records",
              subcommands: [
                { name: "add-record", description: "Add a PTR record" },
                {
                  name: "create",
                  description: "Create an empty PTR record set",
                },
                {
                  name: "delete",
                  description:
                    "Delete a PTR record set and all associated records",
                },
                {
                  name: "list",
                  description: "List all PTR record sets in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove a PTR record from its record set",
                },
                {
                  name: "show",
                  description: "Get the details of a PTR record set",
                },
                { name: "update", description: "Update a PTR record set" },
              ],
            },
            {
              name: "soa",
              description: "Manage Private DNS SOA record",
              subcommands: [
                {
                  name: "show",
                  description: "Get the details of an SOA record",
                },
                {
                  name: "update",
                  description: "Update properties of an SOA record",
                },
              ],
            },
            {
              name: "srv",
              description: "Manage Private DNS SRV records",
              subcommands: [
                { name: "add-record", description: "Add an SRV record" },
                {
                  name: "create",
                  description: "Create an empty SRV record set",
                },
                {
                  name: "delete",
                  description:
                    "Delete an SRV record set and all associated records",
                },
                {
                  name: "list",
                  description: "List all SRV record sets in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove an SRV record from its record set",
                },
                {
                  name: "show",
                  description: "Get the details of an SRV record set",
                },
                { name: "update", description: "Update an SRV record set" },
              ],
            },
            {
              name: "txt",
              description: "Manage Private DNS TXT records",
              subcommands: [
                { name: "add-record", description: "Add a TXT record" },
                {
                  name: "create",
                  description: "Create an empty TXT record set",
                },
                {
                  name: "delete",
                  description:
                    "Delete a TXT record set and all associated records",
                },
                {
                  name: "list",
                  description: "List all TXT record sets in a zone",
                },
                {
                  name: "remove-record",
                  description: "Remove a TXT record from its record set",
                },
                {
                  name: "show",
                  description: "Get the details of a TXT record set",
                },
                { name: "update", description: "Update a TXT record set" },
              ],
            },
          ],
        },
        {
          name: "zone",
          description: "Manage Private DNS zones",
          subcommands: [
            { name: "create", description: "Create a Private DNS zone" },
            { name: "delete", description: "Delete a Private DNS zone" },
            {
              name: "export",
              description: "Export a Private DNS zone as a DNS zone file",
            },
            {
              name: "import",
              description: "Create a Private DNS zone using a DNS zone file",
            },
            { name: "list", description: "List Private DNS zones" },
            { name: "show", description: "Get a Private DNS zone" },
            {
              name: "update",
              description:
                "Update a Private DNS zone's properties. Does not modify Private DNS records or virtual network links within the zone",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the Private DNS zone is met",
            },
          ],
        },
      ],
    },
    {
      name: "private-endpoint",
      description: "Manage private endpoints",
      subcommands: [
        { name: "create", description: "Create a private endpoint" },
        { name: "delete", description: "Delete a private endpoint" },
        {
          name: "dns-zone-group",
          description: "Manage private endpoint dns zone group",
          subcommands: [
            {
              name: "add",
              description:
                "Add a private endpoint dns zone into a dns zone group",
            },
            {
              name: "create",
              description: "Create a private endpoint dns zone group",
            },
            {
              name: "delete",
              description: "Delete a private endpoint dns zone group",
            },
            {
              name: "list",
              description: "List all private endpoint dns zone groups",
            },
            {
              name: "remove",
              description:
                "Remove a private endpoint dns zone into a dns zone group",
            },
            {
              name: "show",
              description: "Show a private endpoint dns zone group",
            },
          ],
        },
        { name: "list", description: "List private endpoints" },
        {
          name: "list-types",
          description:
            "Returns all of the resource types that can be linked to a Private Endpoint in this subscription in this region",
        },
        { name: "show", description: "Get the details of a private endpoint" },
        { name: "update", description: "Update a private endpoint" },
      ],
    },
    {
      name: "private-endpoint-connection",
      description: "Manage private endpoint connections",
      subcommands: [
        {
          name: "approve",
          description: "Approve a private endpoint connection",
        },
        { name: "delete", description: "Delete a private endpoint connection" },
        { name: "list", description: "List all private endpoint connections" },
        { name: "reject", description: "Reject a private endpoint connection" },
        { name: "show", description: "Show a private endpoint connection" },
      ],
    },
    {
      name: "private-link-resource",
      description: "Manage private link resources",
      subcommands: [
        { name: "list", description: "List all private link resources" },
      ],
    },
    {
      name: "private-link-service",
      description: "Manage private link services",
      subcommands: [
        {
          name: "connection",
          description: "Manage private link service endpoint connections",
          subcommands: [
            {
              name: "delete",
              description: "Delete a private link service endpoint connection",
            },
            {
              name: "update",
              description: "Update a private link service endpoint connection",
            },
          ],
        },
        { name: "create", description: "Create a private link service" },
        { name: "delete", description: "Delete a private link service" },
        { name: "list", description: "List private link services" },
        {
          name: "show",
          description: "Get the details of a private link service",
        },
        { name: "update", description: "Update a private link service" },
      ],
    },
    {
      name: "profile",
      description: "Manage network profiles",
      subcommands: [
        { name: "delete", description: "Delete a network profile" },
        { name: "list", description: "List network profiles" },
        { name: "show", description: "Get the details of a network profile" },
      ],
    },
    {
      name: "public-ip",
      description: "Manage public IP addresses",
      subcommands: [
        { name: "create", description: "Create a public IP address" },
        { name: "delete", description: "Delete a public IP address" },
        { name: "list", description: "List public IP addresses" },
        {
          name: "prefix",
          description: "Manage public IP prefix resources",
          subcommands: [
            {
              name: "create",
              description: "Create a public IP prefix resource",
            },
            {
              name: "delete",
              description: "Delete a public IP prefix resource",
            },
            { name: "list", description: "List public IP prefix resources" },
            {
              name: "show",
              description: "Get the details of a public IP prefix resource",
            },
            {
              name: "update",
              description: "Update a public IP prefix resource",
            },
          ],
        },
        { name: "show", description: "Get the details of a public IP address" },
        { name: "update", description: "Update a public IP address" },
      ],
    },
    {
      name: "route-filter",
      description: "Manage route filters",
      subcommands: [
        { name: "create", description: "Create a route filter" },
        { name: "delete", description: "Delete a route filter" },
        { name: "list", description: "List route filters" },
        {
          name: "rule",
          description: "Manage rules in a route filter",
          subcommands: [
            { name: "create", description: "Create a rule in a route filter" },
            {
              name: "delete",
              description: "Delete a rule from a route filter",
            },
            { name: "list", description: "List rules in a route filter" },
            {
              name: "list-service-communities",
              description: "Gets all the available BGP service communities",
            },
            {
              name: "show",
              description: "Get the details of a rule in a route filter",
            },
            { name: "update", description: "Update a rule in a route filter" },
          ],
        },
        { name: "show", description: "Get the details of a route filter" },
        { name: "update", description: "Update a route filter" },
      ],
    },
    {
      name: "routeserver",
      description: "Manage the route server",
      subcommands: [
        { name: "create", description: "Create a route server" },
        {
          name: "delete",
          description: "Delete a route server under a resource group",
        },
        {
          name: "list",
          description:
            "List all route servers under a subscription or a resource group",
        },
        {
          name: "peering",
          description: "Manage the route server peering",
          subcommands: [
            { name: "create", description: "Create a route server peering" },
            { name: "delete", description: "Delete a route server peering" },
            {
              name: "list",
              description:
                "List all route server peerings under a resource group",
            },
            {
              name: "list-advertised-routes",
              description:
                "List all routes the route server bgp connection is advertising to the specified peer",
            },
            {
              name: "list-learned-routes",
              description:
                "List all routes the route server bgp connection has learned",
            },
            { name: "show", description: "Show a route server peering" },
            { name: "update", description: "Update a route server peering" },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the route server peering is met",
            },
          ],
        },
        { name: "show", description: "Show a route server" },
        { name: "update", description: "Update a route server" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the route server is met",
        },
      ],
    },
    {
      name: "route-table",
      description: "Manage route tables",
      subcommands: [
        { name: "create", description: "Create a route table" },
        { name: "delete", description: "Delete a route table" },
        { name: "list", description: "List route tables" },
        {
          name: "route",
          description: "Manage routes in a route table",
          subcommands: [
            { name: "create", description: "Create a route in a route table" },
            {
              name: "delete",
              description: "Delete a route from a route table",
            },
            { name: "list", description: "List routes in a route table" },
            {
              name: "show",
              description: "Get the details of a route in a route table",
            },
            { name: "update", description: "Update a route in a route table" },
          ],
        },
        { name: "show", description: "Get the details of a route table" },
        { name: "update", description: "Update a route table" },
      ],
    },
    {
      name: "security-partner-provider",
      description: "Manage Azure security partner provider",
      subcommands: [
        {
          name: "create",
          description: "Create a Azure security partner provider",
        },
        {
          name: "delete",
          description: "Delete a Azure security partner provider",
        },
        {
          name: "list",
          description: "List all Azure security partner provider",
        },
        { name: "show", description: "Show a Azure security partner provider" },
        {
          name: "update",
          description: "Update a Azure security partner provider",
        },
      ],
    },
    {
      name: "service-endpoint",
      description: "Manage policies related to service endpoints",
      subcommands: [
        {
          name: "list",
          description:
            "List what values of endpoint services are available for use",
        },
        {
          name: "policy",
          description: "Manage service endpoint policies",
          subcommands: [
            { name: "create", description: "Create a service endpoint policy" },
            { name: "delete", description: "Delete a service endpoint policy" },
            { name: "list", description: "List service endpoint policies" },
            {
              name: "show",
              description: "Get the details of a service endpoint policy",
            },
            { name: "update", description: "Update a service endpoint policy" },
          ],
        },
        {
          name: "policy-definition",
          description: "Manage service endpoint policy definitions",
          subcommands: [
            {
              name: "create",
              description: "Create a service endpoint policy definition",
            },
            {
              name: "delete",
              description: "Delete a service endpoint policy definition",
            },
            {
              name: "list",
              description: "List service endpoint policy definitions",
            },
            {
              name: "show",
              description:
                "Get the details of a service endpoint policy definition",
            },
            {
              name: "update",
              description: "Update a service endpoint policy definition",
            },
          ],
        },
      ],
    },
    {
      name: "traffic-manager",
      description: "Manage the routing of incoming traffic",
      subcommands: [
        {
          name: "endpoint",
          description: "Manage Azure Traffic Manager end points",
          subcommands: [
            {
              name: "create",
              description: "Create a traffic manager endpoint",
            },
            {
              name: "delete",
              description: "Delete a traffic manager endpoint",
            },
            { name: "list", description: "List traffic manager endpoints" },
            {
              name: "show",
              description: "Get the details of a traffic manager endpoint",
            },
            {
              name: "show-geographic-hierarchy",
              description:
                "Get the default geographic hierarchy used by the geographic traffic routing method",
            },
            {
              name: "update",
              description: "Update a traffic manager endpoint",
            },
          ],
        },
        {
          name: "profile",
          description: "Manage Azure Traffic Manager profiles",
          subcommands: [
            {
              name: "check-dns",
              description: "Check the availability of a relative DNS name",
            },
            { name: "create", description: "Create a traffic manager profile" },
            { name: "delete", description: "Delete a traffic manager profile" },
            { name: "list", description: "List traffic manager profiles" },
            {
              name: "show",
              description: "Get the details of a traffic manager profile",
            },
            { name: "update", description: "Update a traffic manager profile" },
          ],
        },
      ],
    },
    {
      name: "vhub",
      description: "Manage virtual hubs",
      subcommands: [
        {
          name: "bgpconnection",
          description: "Manage virtual hub bgpconnections",
          subcommands: [
            {
              name: "create",
              description: "Create a virtual hub bgpconnection",
            },
            {
              name: "delete",
              description: "Delete a virtual hub bgpconnection",
            },
            { name: "list", description: "List virtual hub bgpconnections" },
            {
              name: "show",
              description: "Get the details of a virtual hub bgpconnection",
            },
            {
              name: "update",
              description: "Update settings of a virtual hub bgpconnection",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of virtual hub bgpconnection is met",
            },
          ],
        },
        {
          name: "connection",
          description: "Manage virtual hub VNet connections",
          subcommands: [
            {
              name: "create",
              description: "Create a virtual hub VNet connection",
            },
            {
              name: "delete",
              description: "Delete a virtual hub VNet connection",
            },
            { name: "list", description: "List virtual hub VNet connections" },
            {
              name: "show",
              description: "Get the details of a virtual hub VNet connection",
            },
            {
              name: "update",
              description: "Update settings of a virtual hub connection",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of virtual hub VNet connection is met",
            },
          ],
        },
        { name: "create", description: "Create a virtual hub" },
        { name: "delete", description: "Delete a virtual hub" },
        {
          name: "get-effective-routes",
          description:
            "Get the effective routes configured for the Virtual Hub resource or the specified resource",
        },
        { name: "list", description: "List virtual hubs" },
        {
          name: "route",
          description: "Manage entries in the virtual hub route table",
          subcommands: [
            {
              name: "add",
              description: "Add a route to the virtual hub route table",
            },
            {
              name: "list",
              description: "List routes in the virtual hub route table",
            },
            {
              name: "remove",
              description: "Remove a route from the virtual hub route table",
            },
            {
              name: "reset",
              description:
                "Reset virtual hub route when the route state is failed",
            },
          ],
        },
        {
          name: "route-table",
          description: "Manage route table in the virtual hub",
          subcommands: [
            {
              name: "create",
              description: "Create a route table in the virtual hub",
            },
            {
              name: "delete",
              description: "Delete a route table in the virtual hub",
            },
            {
              name: "list",
              description: "List all route tables in the virtual hub",
            },
            {
              name: "route",
              description: "Manage routes of route table in the virtual hub",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add a route into route table of the virtual hub",
                },
                {
                  name: "list",
                  description: "List routes in the virtual hub route table",
                },
                {
                  name: "remove",
                  description:
                    "Remove a route from route table of the virtual hub",
                },
              ],
            },
            {
              name: "show",
              description: "Show a route table in the virtual hub",
            },
            {
              name: "update",
              description: "Update a route table in the virtual hub",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the vhub route-table is met",
            },
          ],
        },
        { name: "show", description: "Get the details of a virtual hub" },
        { name: "update", description: "Update settings of a virtual hub" },
      ],
    },
    {
      name: "virtual-appliance",
      description: "Manage Azure Network Virtual Appliance",
      subcommands: [
        {
          name: "create",
          description: "Create an Azure network virtual appliance",
        },
        {
          name: "delete",
          description: "Delete an Azure network virtual appliance",
        },
        {
          name: "list",
          description: "List all Azure network virtual appliance",
        },
        {
          name: "show",
          description: "Show the detail of an Azure network virtual appliance",
        },
        {
          name: "site",
          description: "Manage Azure Network Virtual Appliance Site",
          subcommands: [
            {
              name: "create",
              description: "Create an Azure network virtual appliance site",
            },
            {
              name: "delete",
              description: "Delete an Azure network virtual appliance site",
            },
            {
              name: "list",
              description: "List all Azure network virtual appliance site",
            },
            {
              name: "show",
              description:
                "Show the detail of an Azure network virtual appliance site",
            },
            {
              name: "update",
              description: "Update an Azure network virtual appliance site",
            },
          ],
        },
        {
          name: "sku",
          description: "Manage Azure Network Virtual Appliance Sku",
          subcommands: [
            {
              name: "list",
              description: "List all Azure network virtual appliance sku",
            },
            {
              name: "show",
              description:
                "Show the detail of an Azure network virtual appliance sku",
            },
          ],
        },
        {
          name: "update",
          description: "Update an Azure network virtual appliance",
        },
      ],
    },
    {
      name: "vnet",
      description: "Manage Azure Virtual Networks",
      subcommands: [
        {
          name: "check-ip-address",
          description:
            "Check if a private IP address is available for use within a virtual network",
        },
        { name: "create", description: "Create a virtual network" },
        { name: "delete", description: "Delete a virtual network" },
        { name: "list", description: "List virtual networks" },
        {
          name: "list-available-ips",
          description: "List some available ips in the vnet",
        },
        {
          name: "list-endpoint-services",
          description:
            "List which services support VNET service tunneling in a given region",
        },
        {
          name: "peering",
          description:
            "Manage peering connections between Azure Virtual Networks",
          subcommands: [
            {
              name: "create",
              description: "Create a virtual network peering connection",
            },
            { name: "delete", description: "Delete a peering" },
            { name: "list", description: "List peerings" },
            { name: "show", description: "Show details of a peering" },
            { name: "update", description: "Update a peering" },
          ],
        },
        { name: "show", description: "Get the details of a virtual network" },
        {
          name: "subnet",
          description: "Manage subnets in an Azure Virtual Network",
          subcommands: [
            {
              name: "create",
              description:
                "Create a subnet and associate an existing NSG and route table",
            },
            { name: "delete", description: "Delete a subnet" },
            {
              name: "list",
              description: "List the subnets in a virtual network",
            },
            {
              name: "list-available-delegations",
              description: "List the services available for subnet delegation",
            },
            { name: "show", description: "Show details of a subnet" },
            { name: "update", description: "Update a subnet" },
          ],
        },
        {
          name: "tap",
          description: "Manage virtual network taps",
          subcommands: [
            { name: "create", description: "Create a virtual network tap" },
            { name: "delete", description: "Delete a virtual network tap" },
            { name: "list", description: "List virtual network taps" },
            {
              name: "show",
              description: "Get the details of a virtual network tap",
            },
            {
              name: "update",
              description: "Update settings of a virtual network tap",
            },
          ],
        },
        { name: "update", description: "Update a virtual network" },
      ],
    },
    {
      name: "vnet-gateway",
      description:
        "Use an Azure Virtual Network Gateway to establish secure, cross-premises connectivity",
      subcommands: [
        {
          name: "aad",
          description:
            "Manage AAD(Azure Active Directory) authentication of a virtual network gateway",
          subcommands: [
            {
              name: "assign",
              description:
                "Assign/Update AAD(Azure Active Directory) authentication to a virtual network gateway",
            },
            {
              name: "remove",
              description:
                "Remove AAD(Azure Active Directory) authentication from a virtual network gateway",
            },
            {
              name: "show",
              description:
                "Show AAD(Azure Active Directory) authentication of a virtual network gateway",
            },
          ],
        },
        { name: "create", description: "Create a virtual network gateway" },
        { name: "delete", description: "Delete a virtual network gateway" },
        {
          name: "disconnect-vpn-connections",
          description: "Disconnect vpn connections of virtual network gateway",
        },
        {
          name: "ipsec-policy",
          description: "Manage virtual network gateway IPSec policies",
          subcommands: [
            {
              name: "add",
              description: "Add a virtual network gateway IPSec policy",
            },
            {
              name: "clear",
              description:
                "Delete all IPsec policies on a virtual network gateway",
            },
            {
              name: "list",
              description:
                "List IPSec policies associated with a virtual network gateway",
            },
          ],
        },
        { name: "list", description: "List virtual network gateways" },
        {
          name: "list-advertised-routes",
          description:
            "List the routes of a virtual network gateway advertised to the specified peer",
        },
        {
          name: "list-bgp-peer-status",
          description: "Retrieve the status of BGP peers",
        },
        {
          name: "list-learned-routes",
          description:
            "This operation retrieves a list of routes the virtual network gateway has learned, including routes learned from BGP peers",
        },
        {
          name: "nat-rule",
          description: "Manage nat rule in a virtual network gateway",
          subcommands: [
            {
              name: "add",
              description: "Add nat rule in a virtual network gateway",
            },
            {
              name: "list",
              description: "List nat rule for a virtual network gateway",
            },
            {
              name: "remove",
              description: "Remove nat rule from a virtual network gateway",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the vnet gateway nat rule is met",
            },
          ],
        },
        {
          name: "packet-capture",
          description: "Manage packet capture on a virtual network gateway",
          subcommands: [
            {
              name: "start",
              description: "Start packet capture on a virtual network gateway",
            },
            {
              name: "stop",
              description: "Stop packet capture on a virtual network gateway",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the vnet gateway packet capture is met",
            },
          ],
        },
        { name: "reset", description: "Reset a virtual network gateway" },
        {
          name: "revoked-cert",
          description:
            "Manage revoked certificates in a virtual network gateway",
          subcommands: [
            { name: "create", description: "Revoke a certificate" },
            { name: "delete", description: "Delete a revoked certificate" },
          ],
        },
        {
          name: "root-cert",
          description: "Manage root certificates of a virtual network gateway",
          subcommands: [
            { name: "create", description: "Upload a root certificate" },
            { name: "delete", description: "Delete a root certificate" },
          ],
        },
        {
          name: "show",
          description: "Get the details of a virtual network gateway",
        },
        {
          name: "show-supported-devices",
          description:
            "Get a xml format representation for supported vpn devices",
        },
        { name: "update", description: "Update a virtual network gateway" },
        {
          name: "vpn-client",
          description:
            "Download a VPN client configuration required to connect to Azure via point-to-site",
          subcommands: [
            {
              name: "generate",
              description: "Generate VPN client configuration",
            },
            {
              name: "ipsec-policy",
              description:
                "Manage the VPN client connection ipsec-policy for P2S client connection of the virtual network gateway",
              subcommands: [
                {
                  name: "set",
                  description:
                    "Set the VPN client connection ipsec policy per P2S client connection of the virtual network gateway",
                },
                {
                  name: "show",
                  description:
                    "Get the VPN client connection ipsec policy per P2S client connection of the virtual network gateway",
                },
                {
                  name: "wait",
                  description:
                    "Place the CLI in a waiting state until a condition of the vnet gateway vpn client ipsec policy is met",
                },
              ],
            },
            {
              name: "show-health",
              description:
                "Get the VPN client connection health detail per P2S client connection of the virtual network gateway",
            },
            {
              name: "show-url",
              description: "Retrieve a pre-generated VPN client configuration",
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the virtual network gateway is met",
        },
      ],
    },
    {
      name: "vpn-connection",
      description: "Manage VPN connections",
      subcommands: [
        { name: "create", description: "Create a VPN connection" },
        { name: "delete", description: "Delete a VPN connection" },
        {
          name: "ipsec-policy",
          description: "Manage VPN connection IPSec policies",
          subcommands: [
            { name: "add", description: "Add a VPN connection IPSec policy" },
            {
              name: "clear",
              description: "Delete all IPsec policies on a VPN connection",
            },
            {
              name: "list",
              description:
                "List IPSec policies associated with a VPN connection",
            },
          ],
        },
        { name: "list", description: "List all VPN connections" },
        {
          name: "list-ike-sas",
          description: "List IKE Security Associations for a VPN connection",
        },
        {
          name: "packet-capture",
          description: "Manage packet capture on a VPN connection",
          subcommands: [
            {
              name: "start",
              description: "Start packet capture on a VPN connection",
            },
            {
              name: "stop",
              description: "Stop packet capture on a VPN connection",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the vpn connection packet capture is met",
            },
          ],
        },
        {
          name: "shared-key",
          description: "Manage VPN shared keys",
          subcommands: [
            { name: "reset", description: "Reset a VPN connection shared key" },
            {
              name: "show",
              description: "Retrieve a VPN connection shared key",
            },
            {
              name: "update",
              description: "Update a VPN connection shared key",
            },
          ],
        },
        { name: "show", description: "Get the details of a VPN connection" },
        {
          name: "show-device-config-script",
          description:
            "Get a XML format representation for VPN connection device configuration script",
        },
        { name: "update", description: "Update a VPN connection" },
      ],
    },
    {
      name: "vpn-gateway",
      description: "Manage site-to-site VPN gateways",
      subcommands: [
        {
          name: "connection",
          description: "Manage site-to-site VPN gateway connections",
          subcommands: [
            {
              name: "create",
              description: "Create a site-to-site VPN gateway connection",
            },
            {
              name: "delete",
              description: "Delete a site-to-site VPN gateway connection",
            },
            {
              name: "ipsec-policy",
              description:
                "Manage site-to-site VPN gateway connection IPSec policies",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add an IPSec policy to a site-to-site VPN gateway connection",
                },
                {
                  name: "list",
                  description:
                    "List site-to-site VPN gateway connection IPSec policies",
                },
                {
                  name: "remove",
                  description:
                    "Remove an IPSec policy from a site-to-site VPN gateway connection",
                },
              ],
            },
            {
              name: "list",
              description: "List site-to-site VPN gateway connections",
            },
            {
              name: "show",
              description:
                "Get the details of a site-to-site VPN gateway connection",
            },
            {
              name: "update",
              description: "Update settings of VPN gateway connection",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the site-to-site VPN gateway connection is met",
            },
          ],
        },
        { name: "create", description: "Create a site-to-site VPN gateway" },
        { name: "delete", description: "Delete a site-to-site VPN gateway" },
        { name: "list", description: "List site-to-site VPN gateways" },
        {
          name: "show",
          description: "Get the details of a site-to-site VPN gateway",
        },
        {
          name: "update",
          description: "Update settings of a site-to-site VPN gateway",
        },
      ],
    },
    {
      name: "vpn-server-config",
      description: "Manage VPN server configuration",
      subcommands: [
        { name: "create", description: "Create a VPN server configuration" },
        { name: "delete", description: "Delete a VPN server configuration" },
        {
          name: "ipsec-policy",
          description: "Manage VPN server configuration IPSec policies",
          subcommands: [
            {
              name: "add",
              description: "Add an IPSec policy to a VPN server configuration",
            },
            {
              name: "list",
              description: "List VPN server configuration IPSec policies",
            },
            {
              name: "remove",
              description:
                "Remove an IPSec policy from a VPN server configuration",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the IPSec policy of a VPN server configuration is met",
            },
          ],
        },
        { name: "list", description: "List all VPN server configuration" },
        {
          name: "set",
          description: "Set settings of a VPN server configuration",
        },
        {
          name: "show",
          description: "Show the details of a VPN server configuration",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the VPN server configuration is met",
        },
      ],
    },
    {
      name: "vpn-site",
      description: "Manage VPN site configurations",
      subcommands: [
        { name: "create", description: "Create a VPN site configuration" },
        { name: "delete", description: "Delete a VPN site configuration" },
        {
          name: "download",
          description:
            "Provide a SAS-URL to download the configuration for a VPN site",
        },
        { name: "list", description: "List VPN site configurations" },
        {
          name: "show",
          description: "Get the details of a VPN site configuration",
        },
        {
          name: "update",
          description: "Update settings of a VPN site configuration",
        },
      ],
    },
    {
      name: "vrouter",
      description:
        "Manage the virtual router. This feature supports both VirtualHub and VirtualRouter. Considering VirtualRouter is deprecated, we recommend to create VirtualRouter with --hosted-subnet instead",
      subcommands: [
        { name: "create", description: "Create a virtual router" },
        {
          name: "delete",
          description: "Delete a virtual router under a resource group",
        },
        {
          name: "list",
          description:
            "List all virtual routers under a subscription or a resource group",
        },
        {
          name: "peering",
          description: "Manage the virtual router peering",
          subcommands: [
            { name: "create", description: "Create a virtual router peering" },
            { name: "delete", description: "Delete a virtual router peering" },
            {
              name: "list",
              description:
                "List all virtual router peerings under a resource group",
            },
            { name: "show", description: "Show a virtual router peering" },
            { name: "update", description: "Update a virtual router peering" },
          ],
        },
        { name: "show", description: "Show a virtual router" },
        { name: "update", description: "Update a virtual router" },
      ],
    },
    {
      name: "vwan",
      description: "Manage virtual WANs",
      subcommands: [
        { name: "create", description: "Create a virtual WAN" },
        { name: "delete", description: "Delete a virtual WAN" },
        { name: "list", description: "List virtual WANs" },
        { name: "show", description: "Get the details of a virtual WAN" },
        { name: "update", description: "Update settings of a virtual WAN" },
      ],
    },
    {
      name: "watcher",
      description: "Manage the Azure Network Watcher",
      subcommands: [
        {
          name: "configure",
          description:
            "Configure the Network Watcher service for different regions",
        },
        {
          name: "connection-monitor",
          description:
            "Manage connection monitoring between an Azure Virtual Machine and any IP resource",
          subcommands: [
            { name: "create", description: "Create a connection monitor" },
            {
              name: "delete",
              description: "Delete a connection monitor for the given region",
            },
            {
              name: "endpoint",
              description: "Manage endpoint of a connection monitor",
              subcommands: [
                {
                  name: "add",
                  description: "Add an endpoint to a connection monitor",
                },
                {
                  name: "list",
                  description: "List all endpoints form a connection monitor",
                },
                {
                  name: "remove",
                  description: "Remove an endpoint from a connection monitor",
                },
                {
                  name: "show",
                  description: "Show an endpoint from a connection monitor",
                },
              ],
            },
            {
              name: "list",
              description: "List connection monitors for the given region",
            },
            {
              name: "output",
              description: "Manage output of connection monitor",
              subcommands: [
                {
                  name: "add",
                  description: "Add an output to a connection monitor",
                },
                {
                  name: "list",
                  description: "List all output from a connection monitor",
                },
                {
                  name: "remove",
                  description: "Remove all outputs from a connection monitor",
                },
              ],
            },
            {
              name: "query",
              description:
                "Query a snapshot of the most recent connection state of a connection monitor",
            },
            { name: "show", description: "Shows a connection monitor by name" },
            {
              name: "start",
              description: "Start the specified connection monitor",
            },
            {
              name: "stop",
              description: "Stop the specified connection monitor",
            },
            {
              name: "test-configuration",
              description: "Manage test configuration of a connection monitor",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add a test configuration to a connection monitor",
                },
                {
                  name: "list",
                  description:
                    "List all test configurations of a connection monitor",
                },
                {
                  name: "remove",
                  description:
                    "Remove a test configuration from a connection monitor",
                },
                {
                  name: "show",
                  description:
                    "Show a test configuration from a connection monitor",
                },
              ],
            },
            {
              name: "test-group",
              description: "Manage a test group of a connection monitor",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add a test group along with new-added/existing endpoint and test configuration to a connection monitor",
                },
                {
                  name: "list",
                  description: "List all test groups of a connection monitor",
                },
                {
                  name: "remove",
                  description: "Remove test group from a connection monitor",
                },
                {
                  name: "show",
                  description: "Show a test group of a connection monitor",
                },
              ],
            },
          ],
        },
        {
          name: "flow-log",
          description: "Manage network security group flow logging",
          subcommands: [
            {
              name: "configure",
              description: "Configure flow logging on a network security group",
            },
            {
              name: "create",
              description: "Create a flow log on a network security group",
            },
            {
              name: "delete",
              description: "Delete the specified flow log resource",
            },
            {
              name: "list",
              description:
                "List all flow log resources for the specified Network Watcher",
            },
            {
              name: "show",
              description:
                "Get the flow log configuration of a network security group",
            },
            {
              name: "update",
              description:
                "Update the flow log configuration of a network security group",
            },
          ],
        },
        { name: "list", description: "List Network Watchers" },
        {
          name: "packet-capture",
          description: "Manage packet capture sessions on VMs",
          subcommands: [
            {
              name: "create",
              description: "Create and start a packet capture session",
            },
            { name: "delete", description: "Delete a packet capture session" },
            {
              name: "list",
              description:
                "List all packet capture sessions within a resource group",
            },
            {
              name: "show",
              description: "Show details of a packet capture session",
            },
            {
              name: "show-status",
              description: "Show the status of a packet capture session",
            },
            {
              name: "stop",
              description: "Stop a running packet capture session",
            },
          ],
        },
        {
          name: "run-configuration-diagnostic",
          description: "Run a configuration diagnostic on a target resource",
        },
        {
          name: "show-next-hop",
          description: "Get information on the 'next hop' of a VM",
        },
        {
          name: "show-security-group-view",
          description:
            "Get detailed security information on a VM for the currently configured network security group",
        },
        {
          name: "show-topology",
          description:
            "Get the network topology of a resource group, virtual network or subnet",
        },
        {
          name: "test-connectivity",
          description:
            "Test if a connection can be established between a Virtual Machine and a given endpoint",
        },
        {
          name: "test-ip-flow",
          description:
            "Test IP flow to/from a VM given the currently configured network security group rules",
        },
        {
          name: "troubleshooting",
          description: "Manage Network Watcher troubleshooting sessions",
          subcommands: [
            {
              name: "show",
              description:
                "Get the results of the last troubleshooting operation",
            },
            {
              name: "start",
              description:
                "Troubleshoot issues with VPN connections or gateway connectivity",
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
