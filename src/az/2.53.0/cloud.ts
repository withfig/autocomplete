const completion: Fig.Spec = {
  name: "cloud",
  description: "Manage registered Azure clouds",
  subcommands: [
    { name: "list", description: "List registered clouds" },
    {
      name: "list-profiles",
      description: "List the supported profiles for a cloud",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of a registered cloud",
          args: { name: "name" },
        },
        {
          name: "--show-all",
          description: "Show all available profiles supported in the CLI",
        },
      ],
    },
    {
      name: "register",
      description: "Register a cloud",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of a registered cloud",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--cloud-config",
          description:
            "JSON encoded cloud configuration. Use @{file} to load from a file",
          args: { name: "cloud-config" },
        },
        {
          name: "--endpoint-active-directory",
          description: "The Active Directory login endpoint",
          args: { name: "endpoint-active-directory" },
        },
        {
          name: "--endpoint-active-directory-data-lake-resource-id",
          description:
            "The Active Directory resource ID for data lake services",
          args: { name: "endpoint-active-directory-data-lake-resource-id" },
        },
        {
          name: "--endpoint-active-directory-graph-resource-id",
          description: "The Active Directory resource ID",
          args: { name: "endpoint-active-directory-graph-resource-id" },
        },
        {
          name: "--endpoint-active-directory-resource-id",
          description: "The resource ID to obtain AD tokens for",
          args: { name: "endpoint-active-directory-resource-id" },
        },
        {
          name: "--endpoint-gallery",
          description: "The template gallery endpoint",
          args: { name: "endpoint-gallery" },
        },
        {
          name: "--endpoint-management",
          description: "The management service endpoint",
          args: { name: "endpoint-management" },
        },
        {
          name: "--endpoint-resource-manager",
          description: "The resource management endpoint",
          args: { name: "endpoint-resource-manager" },
        },
        {
          name: "--endpoint-sql-management",
          description: "The sql server management endpoint",
          args: { name: "endpoint-sql-management" },
        },
        {
          name: "--endpoint-vm-image-alias-doc",
          description:
            "The uri of the document which caches commonly used virtual machine images",
          args: { name: "endpoint-vm-image-alias-doc" },
        },
        {
          name: "--profile",
          description: "Profile to use for this cloud",
          args: {
            name: "profile",
            suggestions: [
              "2017-03-09-profile",
              "2018-03-01-hybrid",
              "2019-03-01-hybrid",
              "2020-09-01-hybrid",
              "latest",
            ],
          },
        },
        {
          name: "--suffix-acr-login-server-endpoint",
          description: "The Azure Container Registry login server suffix",
          args: { name: "suffix-acr-login-server-endpoint" },
        },
        {
          name: "--suffix-azure-datalake-analytics-catalog-and-job-endpoint",
          description:
            "The Data Lake analytics job and catalog service dns suffix",
          args: {
            name: "suffix-azure-datalake-analytics-catalog-and-job-endpoint",
          },
        },
        {
          name: "--suffix-azure-datalake-store-file-system-endpoint",
          description: "The Data Lake store filesystem service dns suffix",
          args: { name: "suffix-azure-datalake-store-file-system-endpoint" },
        },
        {
          name: "--suffix-keyvault-dns",
          description: "The Key Vault service dns suffix",
          args: { name: "suffix-keyvault-dns" },
        },
        {
          name: "--suffix-sql-server-hostname",
          description: "The dns suffix for sql servers",
          args: { name: "suffix-sql-server-hostname" },
        },
        {
          name: "--suffix-storage-endpoint",
          description: "The endpoint suffix for storage accounts",
          args: { name: "suffix-storage-endpoint" },
        },
      ],
    },
    {
      name: "set",
      description: "Set the active cloud",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of a registered cloud",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--profile",
          description: "Profile to use for this cloud",
          args: {
            name: "profile",
            suggestions: [
              "2017-03-09-profile",
              "2018-03-01-hybrid",
              "2019-03-01-hybrid",
              "2020-09-01-hybrid",
              "latest",
            ],
          },
        },
      ],
    },
    {
      name: "show",
      description: "Get the details of a registered cloud",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of a registered cloud",
          args: { name: "name" },
        },
      ],
    },
    {
      name: "unregister",
      description: "Unregister a cloud",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of a registered cloud",
          args: { name: "name" },
          isRequired: true,
        },
      ],
    },
    {
      name: "update",
      description: "Update the configuration of a cloud",
      options: [
        {
          name: "--cloud-config",
          description:
            "JSON encoded cloud configuration. Use @{file} to load from a file",
          args: { name: "cloud-config" },
        },
        {
          name: "--endpoint-active-directory",
          description: "The Active Directory login endpoint",
          args: { name: "endpoint-active-directory" },
        },
        {
          name: "--endpoint-active-directory-data-lake-resource-id",
          description:
            "The Active Directory resource ID for data lake services",
          args: { name: "endpoint-active-directory-data-lake-resource-id" },
        },
        {
          name: "--endpoint-active-directory-graph-resource-id",
          description: "The Active Directory resource ID",
          args: { name: "endpoint-active-directory-graph-resource-id" },
        },
        {
          name: "--endpoint-active-directory-resource-id",
          description: "The resource ID to obtain AD tokens for",
          args: { name: "endpoint-active-directory-resource-id" },
        },
        {
          name: "--endpoint-gallery",
          description: "The template gallery endpoint",
          args: { name: "endpoint-gallery" },
        },
        {
          name: "--endpoint-management",
          description: "The management service endpoint",
          args: { name: "endpoint-management" },
        },
        {
          name: "--endpoint-resource-manager",
          description: "The resource management endpoint",
          args: { name: "endpoint-resource-manager" },
        },
        {
          name: "--endpoint-sql-management",
          description: "The sql server management endpoint",
          args: { name: "endpoint-sql-management" },
        },
        {
          name: "--endpoint-vm-image-alias-doc",
          description:
            "The uri of the document which caches commonly used virtual machine images",
          args: { name: "endpoint-vm-image-alias-doc" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of a registered cloud",
          args: { name: "name" },
        },
        {
          name: "--profile",
          description: "Profile to use for this cloud",
          args: {
            name: "profile",
            suggestions: [
              "2017-03-09-profile",
              "2018-03-01-hybrid",
              "2019-03-01-hybrid",
              "2020-09-01-hybrid",
              "latest",
            ],
          },
        },
        {
          name: "--suffix-acr-login-server-endpoint",
          description: "The Azure Container Registry login server suffix",
          args: { name: "suffix-acr-login-server-endpoint" },
        },
        {
          name: "--suffix-azure-datalake-analytics-catalog-and-job-endpoint",
          description:
            "The Data Lake analytics job and catalog service dns suffix",
          args: {
            name: "suffix-azure-datalake-analytics-catalog-and-job-endpoint",
          },
        },
        {
          name: "--suffix-azure-datalake-store-file-system-endpoint",
          description: "The Data Lake store filesystem service dns suffix",
          args: { name: "suffix-azure-datalake-store-file-system-endpoint" },
        },
        {
          name: "--suffix-keyvault-dns",
          description: "The Key Vault service dns suffix",
          args: { name: "suffix-keyvault-dns" },
        },
        {
          name: "--suffix-sql-server-hostname",
          description: "The dns suffix for sql servers",
          args: { name: "suffix-sql-server-hostname" },
        },
        {
          name: "--suffix-storage-endpoint",
          description: "The endpoint suffix for storage accounts",
          args: { name: "suffix-storage-endpoint" },
        },
      ],
    },
  ],
};

export default completion;
