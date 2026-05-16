const completion: Fig.Spec = {
  name: "partnercenter",
  description: "Partner Center management",
  subcommands: [
    {
      name: "marketplace",
      description: "Commands to manage the Partner Center Marketplace",
      subcommands: [
        {
          name: "offer",
          description: "Manage Marketplace offers",
          subcommands: [
            {
              name: "create",
              description: "Create a marketplace offer",
              options: [
                {
                  name: ["--alias", "-a"],
                  description:
                    "This name won't be used in the marketplace listing and is solely for reference within Partner Center",
                  args: { name: "alias" },
                  isRequired: true,
                },
                {
                  name: ["--offer-id", "--id"],
                  description:
                    "Use only lowercase, alphanumeric characters, dashes or underscores. ID cannot be modified",
                  args: { name: "offer-id" },
                  isRequired: true,
                },
                {
                  name: ["--type", "-t"],
                  description: "The type of offer to create",
                  args: {
                    name: "type",
                    suggestions: [
                      "AzureApplication",
                      "AzureConsultingService",
                      "AzureContainer",
                      "AzureDynamics365BusinessCentral",
                      "AzureDynamics365ForCustomerEngagement",
                      "AzureDynamics365ForOperations",
                      "AzureIoTEdgeModule",
                      "AzureManagedService",
                      "AzurePowerBIApp",
                      "AzurePowerBIVisual",
                      "AzureThirdPartyVirtualMachine",
                      "SoftwareAsAService",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a marketplace offer",
              options: [
                {
                  name: ["--offer-id", "--id"],
                  description: "The offer ID",
                  args: { name: "offer-id" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List marketplace offers",
            },
            {
              name: "publish",
              description:
                "Publishes all draft changes made to a marketplace offer",
              options: [
                {
                  name: ["--offer-id", "--id"],
                  description: "The offer ID",
                  args: { name: "offer-id" },
                  isRequired: true,
                },
                {
                  name: "--target",
                  description:
                    "The target environment type to publish all draft resources",
                  args: {
                    name: "target",
                    suggestions: ["draft", "live", "preview"],
                  },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get a marketplace offer",
              options: [
                {
                  name: ["--offer-id", "--id"],
                  description: "The offer ID",
                  args: { name: "offer-id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "listing",
              description: "Manage a Marketplace Offer's listing",
              subcommands: [
                {
                  name: "show",
                  description: "Get the listing of a marketplace offer",
                  options: [
                    {
                      name: "--offer-id",
                      description: "The offer ID",
                      args: { name: "offer-id" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update the listing of a marketplace offer",
                  options: [
                    {
                      name: "--offer-id",
                      description: "The offer ID",
                      args: { name: "offer-id" },
                      isRequired: true,
                    },
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add" },
                    },
                    {
                      name: "--description",
                      description: "The description of the listing",
                      args: { name: "description" },
                    },
                    {
                      name: "--force-string",
                      description:
                        "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                    },
                    {
                      name: "--remove",
                      description:
                        "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                      args: { name: "remove" },
                    },
                    {
                      name: "--set",
                      description:
                        "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                      args: { name: "set" },
                    },
                    {
                      name: "--short-description",
                      description: "The short description of the listing",
                      args: { name: "short-description" },
                    },
                    {
                      name: "--summary",
                      description: "The summary that appears in search results",
                      args: { name: "summary" },
                    },
                  ],
                },
                {
                  name: "contact",
                  description: "Manage a Marketplace Offer listing's contacts",
                  subcommands: [
                    {
                      name: "add",
                      description:
                        "Add a contact to a marketplace offer listing",
                      options: [
                        {
                          name: "--offer-id",
                          description: "The offerid",
                          args: { name: "offer-id" },
                          isRequired: true,
                        },
                        {
                          name: "--type",
                          description: "The contact type",
                          args: { name: "type" },
                          isRequired: true,
                        },
                        {
                          name: "--add",
                          description:
                            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                          args: { name: "add" },
                        },
                        {
                          name: "--email",
                          description: "The email address of the contact",
                          args: { name: "email" },
                        },
                        {
                          name: "--force-string",
                          description:
                            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                        },
                        {
                          name: "--name",
                          description: "The name of the contact",
                          args: { name: "name" },
                        },
                        {
                          name: "--phone",
                          description: "The phone number of the contact",
                          args: { name: "phone" },
                        },
                        {
                          name: "--remove",
                          description:
                            "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                          args: { name: "remove" },
                        },
                        {
                          name: "--set",
                          description:
                            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                          args: { name: "set" },
                        },
                        {
                          name: "--uri",
                          description: "The uri associated with the contact",
                          args: { name: "uri" },
                        },
                      ],
                    },
                    {
                      name: "delete",
                      description:
                        "Delete a contact to a marketplace offer listing",
                      options: [
                        {
                          name: "--offer-id",
                          description: "The offerid",
                          args: { name: "offer-id" },
                          isRequired: true,
                        },
                        {
                          name: "--type",
                          description: "The contact type",
                          args: { name: "type" },
                          isRequired: true,
                        },
                        {
                          name: "--email",
                          description: "The email address of the contact",
                          args: { name: "email" },
                        },
                        {
                          name: "--name",
                          description: "The name of the contact",
                          args: { name: "name" },
                        },
                        {
                          name: "--phone",
                          description: "The phone number of the contact",
                          args: { name: "phone" },
                        },
                        {
                          name: "--uri",
                          description: "The uri associated with the contact",
                          args: { name: "uri" },
                        },
                        {
                          name: ["--yes", "-y"],
                          description: "Do not prompt for confirmation",
                        },
                      ],
                    },
                    {
                      name: "list",
                      description:
                        "List the contacts for a marketplace offer listing",
                      options: [
                        {
                          name: "--offer-id",
                          description: "The offerid",
                          args: { name: "offer-id" },
                          isRequired: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "media",
                  description:
                    "Manage a Marketplace Offer listing's media including images, videos, and thumbnails",
                  subcommands: [
                    {
                      name: "add",
                      description: "Add media for a marketplace offer listing",
                      options: [
                        {
                          name: ["--file", "-f"],
                          description: "The path to the media file",
                          args: { name: "file" },
                          isRequired: true,
                        },
                        {
                          name: ["--offer-id", "--id"],
                          description: "The Offer ID",
                          args: { name: "offer-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--type", "-t"],
                          description: "The media type",
                          args: {
                            name: "type",
                            suggestions: [
                              "AzureLogoLarge",
                              "AzureLogoMedium",
                              "AzureLogoSmall",
                              "AzureLogoWide",
                              "Image",
                              "Video",
                            ],
                          },
                          isRequired: true,
                        },
                        {
                          name: "--streaming-uri",
                          description: "The streaming URI",
                          args: { name: "streaming-uri" },
                        },
                      ],
                    },
                    {
                      name: "delete",
                      description:
                        "Delete media for a marketplace offer listing",
                      options: [
                        {
                          name: ["--offer-id", "--id"],
                          description: "The Offer ID",
                          args: { name: "offer-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--type", "-t"],
                          description: "The media type",
                          args: {
                            name: "type",
                            suggestions: [
                              "AzureLogoLarge",
                              "AzureLogoMedium",
                              "AzureLogoSmall",
                              "AzureLogoWide",
                              "Image",
                              "Video",
                            ],
                          },
                          isRequired: true,
                        },
                        {
                          name: ["--yes", "-y"],
                          description: "Do not prompt for confirmation",
                        },
                      ],
                    },
                    {
                      name: "list",
                      description:
                        "List the media for a marketplace offer listing",
                      options: [
                        {
                          name: ["--offer-id", "--id"],
                          description: "The Offer ID",
                          args: { name: "offer-id" },
                          isRequired: true,
                        },
                        {
                          name: ["--type", "-t"],
                          description: "The media type",
                          args: {
                            name: "type",
                            suggestions: [
                              "AzureLogoLarge",
                              "AzureLogoMedium",
                              "AzureLogoSmall",
                              "AzureLogoWide",
                              "Image",
                              "Video",
                            ],
                          },
                          isRequired: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "uri",
                  description: "Manage a Marketplace Offer listing's URIs",
                  subcommands: [
                    {
                      name: "add",
                      description: "Add a URI for a marketplace offer listing",
                      options: [
                        {
                          name: "--display-text",
                          description: "The display text of the uri",
                          args: { name: "display-text" },
                          isRequired: true,
                        },
                        {
                          name: "--offer-id",
                          description: "The offer id",
                          args: { name: "offer-id" },
                          isRequired: true,
                        },
                        {
                          name: "--subtype",
                          description: "The subtype of the uri",
                          args: { name: "subtype" },
                          isRequired: true,
                        },
                        {
                          name: "--type",
                          description: "The type of the uri",
                          args: { name: "type" },
                          isRequired: true,
                        },
                        {
                          name: "--uri",
                          description: "The value of the uri",
                          args: { name: "uri" },
                          isRequired: true,
                        },
                        {
                          name: "--add",
                          description:
                            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                          args: { name: "add" },
                        },
                        {
                          name: "--force-string",
                          description:
                            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                        },
                        {
                          name: "--remove",
                          description:
                            "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                          args: { name: "remove" },
                        },
                        {
                          name: "--set",
                          description:
                            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                          args: { name: "set" },
                        },
                      ],
                    },
                    {
                      name: "delete",
                      description:
                        "Delete a URI for a marketplace offer listing",
                      options: [
                        {
                          name: "--offer-id",
                          description: "The offer id",
                          args: { name: "offer-id" },
                          isRequired: true,
                        },
                        {
                          name: "--display-text",
                          description: "The display text of the uri",
                          args: { name: "display-text" },
                        },
                        {
                          name: "--subtype",
                          description: "The subtype of the uri",
                          args: { name: "subtype" },
                        },
                        {
                          name: "--type",
                          description: "The type of the uri",
                          args: { name: "type" },
                        },
                        {
                          name: "--uri",
                          description: "The value of the uri",
                          args: { name: "uri" },
                        },
                        {
                          name: ["--yes", "-y"],
                          description: "Do not prompt for confirmation",
                        },
                      ],
                    },
                    {
                      name: "list",
                      description:
                        "List the uri for a marketplace offer listing",
                      options: [
                        {
                          name: "--offer-id",
                          description: "The offer id",
                          args: { name: "offer-id" },
                          isRequired: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "package",
              description:
                "Manage the creation of offer packages, including CNAB bundles for AKS (Azure Container offerings that you sell through Microsoft)",
              subcommands: [
                {
                  name: "build",
                  description:
                    "Builds the package for an offer, preparing it for upload or publishing to the offer's technical configuration",
                  options: [
                    {
                      name: "--offer-id",
                      description: "The Offer ID",
                      args: { name: "offer-id" },
                      isRequired: true,
                    },
                    {
                      name: "--manifest-file",
                      description:
                        "The path to the package manifest YAML file that describes the package, the CNAB bundle, and dependent artifacts",
                      args: { name: "manifest-file" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                  ],
                },
                {
                  name: "verify",
                  description:
                    "Verifies the package contents for an offer prior to building it",
                  options: [
                    {
                      name: "--offer-id",
                      description: "The Offer ID",
                      args: { name: "offer-id" },
                      isRequired: true,
                    },
                    {
                      name: "--manifest-file",
                      description:
                        "The path to the package manifest YAML file that describes the package, the CNAB bundle, and dependent artifacts",
                      args: { name: "manifest-file" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                  ],
                },
              ],
            },
            {
              name: "plan",
              description: "Manage a Marketplace offer plans",
              subcommands: [
                {
                  name: "create",
                  description: "Create a plan for a marketplace offer",
                  options: [
                    {
                      name: ["--plan-id", "--id"],
                      description: "The Plan ID",
                      args: { name: "plan-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The friendly name of the Plan",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--offer-id",
                      description: "The Offer ID",
                      args: { name: "offer-id" },
                      isRequired: true,
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                    {
                      name: ["--subtype", "-s"],
                      description:
                        "SubType of Azure Application plan. Allowed Values: solution-template, managed-application. Default: None",
                      args: { name: "subtype" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a plan for a marketplace offer",
                  options: [
                    {
                      name: ["--plan-id", "--id"],
                      description: "The Plan ID",
                      args: { name: "plan-id" },
                      isRequired: true,
                    },
                    {
                      name: "--offer-id",
                      description: "The Offer ID",
                      args: { name: "offer-id" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "list",
                  description: "List the plans of a marketplace offer",
                  options: [
                    {
                      name: "--offer-id",
                      description: "The Offer ID",
                      args: { name: "offer-id" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Get the plan of a marketplace offer",
                  options: [
                    {
                      name: ["--plan-id", "--id"],
                      description: "The Plan ID",
                      args: { name: "plan-id" },
                      isRequired: true,
                    },
                    {
                      name: "--offer-id",
                      description: "The Offer ID",
                      args: { name: "offer-id" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "listing",
                  description: "Manage a Marketplace offer plan's listing",
                  subcommands: [
                    {
                      name: "show",
                      description:
                        "Get the plan listing of a marketplace offer",
                      options: [
                        {
                          name: ["--plan-id", "--id"],
                          description: "The Plan ID",
                          args: { name: "plan-id" },
                          isRequired: true,
                        },
                        {
                          name: "--offer-id",
                          description: "The Offer ID",
                          args: { name: "offer-id" },
                          isRequired: true,
                        },
                      ],
                    },
                    {
                      name: "update",
                      description:
                        "Update the plan listing of a marketplace offer",
                      options: [
                        {
                          name: ["--plan-id", "--id"],
                          description: "The Plan ID",
                          args: { name: "plan-id" },
                          isRequired: true,
                        },
                        {
                          name: "--offer-id",
                          description: "The Offer ID",
                          args: { name: "offer-id" },
                          isRequired: true,
                        },
                        {
                          name: "--add",
                          description:
                            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                          args: { name: "add" },
                        },
                        {
                          name: ["--description", "-d"],
                          description: "The description of the plan listing",
                          args: { name: "description" },
                        },
                        {
                          name: "--force-string",
                          description:
                            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                        },
                        {
                          name: ["--name", "-n"],
                          description: "The name of the plan listing",
                          args: { name: "name" },
                        },
                        {
                          name: "--remove",
                          description:
                            "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                          args: { name: "remove" },
                        },
                        {
                          name: "--set",
                          description:
                            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                          args: { name: "set" },
                        },
                        {
                          name: ["--summary", "-s"],
                          description: "The summary of the plan listing",
                          args: { name: "summary" },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "technical-configuration",
                  description:
                    "Manage a Marketplace offer plan's technical configuration",
                  subcommands: [
                    {
                      name: "show",
                      description: "Show a plan's technical configuration",
                      options: [
                        {
                          name: "--offer-id",
                          description: "The Offer id",
                          args: { name: "offer-id" },
                          isRequired: true,
                        },
                        {
                          name: "--plan-id",
                          description: "The Plan id",
                          args: { name: "plan-id" },
                          isRequired: true,
                        },
                      ],
                    },
                    {
                      name: "package",
                      description:
                        "Manage packages for a plan's technical configuration",
                      subcommands: [
                        {
                          name: "add",
                          description:
                            "Adds a package to the technical configuration of a plan",
                          options: [
                            {
                              name: "--offer-id",
                              description: "The Offer id",
                              args: { name: "offer-id" },
                              isRequired: true,
                            },
                            {
                              name: "--plan-id",
                              description: "The Plan id",
                              args: { name: "plan-id" },
                              isRequired: true,
                            },
                            {
                              name: "--cluster-extension-type",
                              description: "The Cluster Extension Type",
                              args: { name: "cluster-extension-type" },
                            },
                            {
                              name: "--digest",
                              description:
                                "The digest of the bundle with a format of sha256:",
                              args: { name: "digest" },
                            },
                            {
                              name: "--no-wait",
                              description:
                                "Do not wait for the long-running operation to finish",
                            },
                            {
                              name: "--registry",
                              description:
                                "The name of the Azure Container Registry",
                              args: { name: "registry" },
                            },
                            {
                              name: "--repository",
                              description:
                                "The name of the image repository in the Azure Container Registry",
                              args: { name: "repository" },
                            },
                            {
                              name: ["--resource-group", "-g"],
                              description:
                                "The Resource Group name for the Azure Container Registry",
                              args: { name: "resource-group" },
                            },
                            {
                              name: ["--subscription-id", "-s"],
                              description: "The Subscription ID",
                              args: { name: "subscription-id" },
                            },
                            {
                              name: "--tag",
                              description: "The name of the image repository",
                              args: { name: "tag" },
                            },
                            {
                              name: ["--tenant-id", "-t"],
                              description: "The AAD tenant ID",
                              args: { name: "tenant-id" },
                            },
                          ],
                        },
                        {
                          name: "delete",
                          description:
                            "Deletes a package to the technical configuration of a plan",
                          options: [
                            {
                              name: "--offer-id",
                              description: "The Offer id",
                              args: { name: "offer-id" },
                              isRequired: true,
                            },
                            {
                              name: "--plan-id",
                              description: "The Plan id",
                              args: { name: "plan-id" },
                              isRequired: true,
                            },
                            {
                              name: "--no-wait",
                              description:
                                "Do not wait for the long-running operation to finish",
                            },
                            {
                              name: "--repository",
                              description:
                                "The name of the image repository in the Azure Container Registry",
                              args: { name: "repository" },
                            },
                            {
                              name: "--tag",
                              description: "The name of the image repository",
                              args: { name: "tag" },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "setup",
              description: "Manage a Marketplace Offer's setup",
              subcommands: [
                {
                  name: "show",
                  description: "Show the offer setup",
                  options: [
                    {
                      name: ["--offer-id", "--id"],
                      description: "The Offer ID",
                      args: { name: "offer-id" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a marketplace offer",
                  options: [
                    {
                      name: ["--offer-id", "--id"],
                      description: "The Offer ID",
                      args: { name: "offer-id" },
                      isRequired: true,
                    },
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add" },
                    },
                    {
                      name: "--force-string",
                      description:
                        "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                    },
                    {
                      name: "--remove",
                      description:
                        "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                      args: { name: "remove" },
                    },
                    {
                      name: "--reseller",
                      description:
                        "Indicates to enable the reseller channel for the offer",
                      args: {
                        name: "reseller",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--sell-through-microsoft",
                      description:
                        "Whether to sell through microsoft or list the offer through the marketplace and process transactions independently",
                      args: {
                        name: "sell-through-microsoft",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--set",
                      description:
                        "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                      args: { name: "set" },
                    },
                    {
                      name: "--test-drive",
                      description:
                        "Whether test drive is enabled for the offer. The test drive option in the Microsoft commercial marketplace lets you configure a hands-on, self-guided tour of your product's key features",
                      args: {
                        name: "test-drive",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--trial-uri",
                      description: "The trial uri",
                      args: { name: "trial-uri" },
                    },
                  ],
                },
              ],
            },
            {
              name: "submission",
              description: "Manage a Marketplace Offer's submissions",
              subcommands: [
                {
                  name: "list",
                  description: "List the submissions of a marketplace offer",
                  options: [
                    {
                      name: "--offer-id",
                      description: "The offer ID",
                      args: { name: "offer-id" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "publish",
                  description: "Publish the submissions of a marketplace offer",
                  options: [
                    {
                      name: "--offer-id",
                      description: "The offer ID",
                      args: { name: "offer-id" },
                      isRequired: true,
                    },
                    {
                      name: "--submission-id",
                      description: "The offer submission ID",
                      args: { name: "submission-id" },
                      isRequired: true,
                    },
                    {
                      name: "--target",
                      description:
                        "The target environment type to publish changes for the submission to",
                      args: {
                        name: "target",
                        suggestions: ["draft", "live", "preview"],
                      },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Get the submission of a marketplace offer",
                  options: [
                    {
                      name: "--offer-id",
                      description: "The offer ID",
                      args: { name: "offer-id" },
                      isRequired: true,
                    },
                    {
                      name: "--submission-id",
                      description: "The offer submission ID",
                      args: { name: "submission-id" },
                      isRequired: true,
                    },
                  ],
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
