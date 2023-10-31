const completion: Fig.Spec = {
  name: "attestation",
  description: "Manage Microsoft Azure Attestation (MAA)",
  subcommands: [
    {
      name: "create",
      description: "Creates a new Attestation Provider instance",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the attestation service instance",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--certs-input-path",
          description:
            "Space-separated file paths to PEM/DER files containing certificates",
          args: { name: "certs-input-path" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete Attestation Service",
      options: [
        {
          name: "--id",
          description:
            "Resource ID of the provider. Please omit --resource-group/-g or --name/-n if you have already specified --id",
          args: { name: "id" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the attestation service instance",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "get-default-by-location",
      description: "Get the default provider by location",
      options: [
        {
          name: ["--location", "-l"],
          description: 'Location. (eg: "West US")',
          args: { name: "location" },
          isRequired: true,
        },
      ],
    },
    {
      name: "list",
      description: "Returns a list of attestation providers in a subscription",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "list-default",
      description: "Get the default provider",
    },
    {
      name: "show",
      description: "Get the status of Attestation Provider",
      options: [
        {
          name: "--id",
          description:
            "Resource ID of the provider. Please omit --resource-group/-g or --name/-n if you have already specified --id",
          args: { name: "id" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the attestation service instance",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "update",
      description: "Updates the Attestation Provider",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the attestation service instance",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "policy",
      description: "Manage policies",
      subcommands: [
        {
          name: "reset",
          description:
            "Resets the attestation policy for the specified tenant and reverts to the default policy",
          options: [
            {
              name: "--attestation-type",
              description: "Type of the attestation",
              args: {
                name: "attestation-type",
                suggestions: ["SGX-IntelSDK", "SGX-OpenEnclaveSDK", "TPM"],
              },
              isRequired: true,
            },
            {
              name: "--id",
              description:
                "Resource ID of the provider. Please omit --resource-group/-g or --name/-n if you have already specified --id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the attestation provider",
              args: { name: "name" },
            },
            {
              name: "--policy-jws",
              description: "JSON Web Signature with an empty policy document",
              args: { name: "policy-jws" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "set",
          description: "Sets the policy for a given kind of attestation type",
          options: [
            {
              name: "--attestation-type",
              description: "Type of the attestation",
              args: {
                name: "attestation-type",
                suggestions: ["SGX-IntelSDK", "SGX-OpenEnclaveSDK", "TPM"],
              },
              isRequired: true,
            },
            {
              name: "--id",
              description:
                "Resource ID of the provider. Please omit --resource-group/-g or --name/-n if you have already specified --id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the attestation provider",
              args: { name: "name" },
            },
            {
              name: "--new-attestation-policy",
              description:
                "Content of the new attestation policy (Text or JWT)",
              args: { name: "new-attestation-policy" },
            },
            {
              name: ["--new-attestation-policy-file", "-f"],
              description: "File name of the new attestation policy",
              args: { name: "new-attestation-policy-file" },
            },
            {
              name: "--policy-format",
              description:
                "Specifies the format for the policy, either Text or JWT (JSON Web Token)",
              args: { name: "policy-format", suggestions: ["JWT", "Text"] },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Retrieves the current policy for a given kind of attestation type",
          options: [
            {
              name: "--attestation-type",
              description: "Type of the attestation",
              args: {
                name: "attestation-type",
                suggestions: ["SGX-IntelSDK", "SGX-OpenEnclaveSDK", "TPM"],
              },
              isRequired: true,
            },
            {
              name: "--id",
              description:
                "Resource ID of the provider. Please omit --resource-group/-g or --name/-n if you have already specified --id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the attestation provider",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "signer",
      description: "Manage signers",
      subcommands: [
        {
          name: "add",
          description:
            "Adds a new attestation policy certificate to the set of policy management certificates",
          options: [
            {
              name: "--id",
              description:
                "Resource ID of the provider. Please omit --resource-group/-g or --name/-n if you have already specified --id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the attestation provider",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--signer",
              description:
                'The policy certificate to add. An RFC7519 JSON Web Token containing a claim named "maa-policyCertificate" whose value is an RFC7517 JSON Web Key which specifies a new key to update. The RFC7519 JWT must be signed with one of the existing signing certificates',
              args: { name: "signer" },
            },
            {
              name: ["--signer-file", "-f"],
              description:
                "File name of the signer. (--signer and --signer-file/-f are mutually exclusive.)",
              args: { name: "signer-file" },
            },
          ],
        },
        {
          name: "list",
          description:
            "Retrieves the set of certificates used to express policy for the current tenant",
          options: [
            {
              name: "--id",
              description:
                "Resource ID of the provider. Please omit --resource-group/-g or --name/-n if you have already specified --id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the attestation provider",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "remove",
          description: "Removes the specified policy management certificate",
          options: [
            {
              name: "--id",
              description:
                "Resource ID of the provider. Please omit --resource-group/-g or --name/-n if you have already specified --id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the attestation provider",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--signer",
              description:
                'The policy certificate to remove. An RFC7519 JSON Web Token containing a claim named "maa-policyCertificate" whose value is an RFC7517 JSON Web Key which specifies a new key to update. The RFC7519 JWT must be signed with one of the existing signing certificates',
              args: { name: "signer" },
            },
            {
              name: ["--signer-file", "-f"],
              description:
                "File name of the signer. (--signer and --signer-file/-f are mutually exclusive.)",
              args: { name: "signer-file" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
