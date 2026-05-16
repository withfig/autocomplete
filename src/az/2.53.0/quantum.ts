const completion: Fig.Spec = {
  name: "quantum",
  description:
    "Manage Azure Quantum Workspaces and submit jobs to Azure Quantum Providers",
  subcommands: [
    {
      name: "execute",
      description:
        "Submit a job to run on Azure Quantum, and waits for the result",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
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
          name: ["--target-id", "-t"],
          description:
            "Execution engine for quantum computing jobs. When a workspace is configured with a set of providers, they each enable one or more targets. You can configure the default target using az quantum target set",
          args: { name: "target-id" },
          isRequired: true,
        },
        {
          name: ["--workspace-name", "-w"],
          description:
            "Name of the Quantum Workspace. You can configure the default workspace using az quantum workspace set",
          args: { name: "workspace-name" },
          isRequired: true,
        },
        {
          name: "--entry-point",
          description:
            "The entry point for the QIR program or circuit. Required for QIR. Ignored on Q# jobs",
          args: { name: "entry-point" },
        },
        {
          name: "--job-input-file",
          description:
            "The location of the input file to submit. Required for QIR, QIO, and pass-through jobs. Ignored on Q# jobs",
          args: { name: "job-input-file" },
        },
        {
          name: "--job-input-format",
          description:
            "The format of the file to submit. Omit this parameter on Q# jobs",
          args: { name: "job-input-format" },
        },
        {
          name: "--job-name",
          description: "A friendly name to give to this run of the program",
          args: { name: "job-name" },
        },
        {
          name: "--job-output-format",
          description: "The expected job output format. Ignored on Q# jobs",
          args: { name: "job-output-format" },
        },
        {
          name: "--job-params",
          description:
            "Job parameters passed to the target as a list of key=value pairs, json string, or @{file} with json content",
          args: { name: "job-params" },
        },
        {
          name: "--no-build",
          description:
            "If specified, the Q# program is not built before submitting",
        },
        {
          name: "--project",
          description:
            "The location of the Q# project to submit. Defaults to current folder",
          args: { name: "project" },
        },
        {
          name: "--shots",
          description:
            "The number of times to run the Q# program on the given target",
          args: { name: "shots" },
        },
        {
          name: "--storage",
          description:
            "If specified, the ConnectionString of an Azure Storage is used to store job data and results",
          args: { name: "storage" },
        },
        {
          name: "--target-capability",
          description: "Target-capability parameter passed to the compiler",
          args: { name: "target-capability" },
        },
      ],
      args: {
        name: "<PROGRAM_ARGS>",
        description:
          "List of arguments expected by the Q# operation specified as --name=value after --",
        isOptional: true,
      },
    },
    {
      name: "run",
      description: "Equivalent to az quantum execute",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
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
          name: ["--target-id", "-t"],
          description:
            "Execution engine for quantum computing jobs. When a workspace is configured with a set of providers, they each enable one or more targets. You can configure the default target using az quantum target set",
          args: { name: "target-id" },
          isRequired: true,
        },
        {
          name: ["--workspace-name", "-w"],
          description:
            "Name of the Quantum Workspace. You can configure the default workspace using az quantum workspace set",
          args: { name: "workspace-name" },
          isRequired: true,
        },
        {
          name: "--entry-point",
          description:
            "The entry point for the QIR program or circuit. Required for QIR. Ignored on Q# jobs",
          args: { name: "entry-point" },
        },
        {
          name: "--job-input-file",
          description:
            "The location of the input file to submit. Required for QIR, QIO, and pass-through jobs. Ignored on Q# jobs",
          args: { name: "job-input-file" },
        },
        {
          name: "--job-input-format",
          description:
            "The format of the file to submit. Omit this parameter on Q# jobs",
          args: { name: "job-input-format" },
        },
        {
          name: "--job-name",
          description: "A friendly name to give to this run of the program",
          args: { name: "job-name" },
        },
        {
          name: "--job-output-format",
          description: "The expected job output format. Ignored on Q# jobs",
          args: { name: "job-output-format" },
        },
        {
          name: "--job-params",
          description:
            "Job parameters passed to the target as a list of key=value pairs, json string, or @{file} with json content",
          args: { name: "job-params" },
        },
        {
          name: "--no-build",
          description:
            "If specified, the Q# program is not built before submitting",
        },
        {
          name: "--project",
          description:
            "The location of the Q# project to submit. Defaults to current folder",
          args: { name: "project" },
        },
        {
          name: "--shots",
          description:
            "The number of times to run the Q# program on the given target",
          args: { name: "shots" },
        },
        {
          name: "--storage",
          description:
            "If specified, the ConnectionString of an Azure Storage is used to store job data and results",
          args: { name: "storage" },
        },
        {
          name: "--target-capability",
          description: "Target-capability parameter passed to the compiler",
          args: { name: "target-capability" },
        },
      ],
      args: {
        name: "<PROGRAM_ARGS>",
        description:
          "List of arguments expected by the Q# operation specified as --name=value after --",
        isOptional: true,
      },
    },
    {
      name: "job",
      description: "Manage jobs for Azure Quantum",
      subcommands: [
        {
          name: "cancel",
          description:
            "Request to cancel a job on Azure Quantum if it hasn't completed",
          options: [
            {
              name: ["--job-id", "-j"],
              description: "Job unique identifier in GUID format",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
              name: ["--workspace-name", "-w"],
              description:
                "Name of the Quantum Workspace. You can configure the default workspace using az quantum workspace set",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "Get the list of jobs in a Quantum Workspace",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
              name: ["--workspace-name", "-w"],
              description:
                "Name of the Quantum Workspace. You can configure the default workspace using az quantum workspace set",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "output",
          description: "Get the results of running a Q# job",
          options: [
            {
              name: ["--job-id", "-j"],
              description: "Job unique identifier in GUID format",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
              name: ["--workspace-name", "-w"],
              description:
                "Name of the Quantum Workspace. You can configure the default workspace using az quantum workspace set",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--item",
              description: "The item index in a batching job",
              args: { name: "item" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the job's status and details",
          options: [
            {
              name: ["--job-id", "-j"],
              description: "Job unique identifier in GUID format",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
              name: ["--workspace-name", "-w"],
              description:
                "Name of the Quantum Workspace. You can configure the default workspace using az quantum workspace set",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "submit",
          description: "Submit a program or circuit to run on Azure Quantum",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
              name: ["--target-id", "-t"],
              description:
                "Execution engine for quantum computing jobs. When a workspace is configured with a set of providers, they each enable one or more targets. You can configure the default target using az quantum target set",
              args: { name: "target-id" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the Quantum Workspace. You can configure the default workspace using az quantum workspace set",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--entry-point",
              description:
                "The entry point for the QIR program or circuit. Required for QIR. Ignored on Q# jobs",
              args: { name: "entry-point" },
            },
            {
              name: "--job-input-file",
              description:
                "The location of the input file to submit. Required for QIR, QIO, and pass-through jobs. Ignored on Q# jobs",
              args: { name: "job-input-file" },
            },
            {
              name: "--job-input-format",
              description:
                "The format of the file to submit. Omit this parameter on Q# jobs",
              args: { name: "job-input-format" },
            },
            {
              name: "--job-name",
              description: "A friendly name to give to this run of the program",
              args: { name: "job-name" },
            },
            {
              name: "--job-output-format",
              description: "The expected job output format. Ignored on Q# jobs",
              args: { name: "job-output-format" },
            },
            {
              name: "--job-params",
              description:
                "Job parameters passed to the target as a list of key=value pairs, json string, or @{file} with json content",
              args: { name: "job-params" },
            },
            {
              name: "--no-build",
              description:
                "If specified, the Q# program is not built before submitting",
            },
            {
              name: "--project",
              description:
                "The location of the Q# project to submit. Defaults to current folder",
              args: { name: "project" },
            },
            {
              name: "--shots",
              description:
                "The number of times to run the Q# program on the given target",
              args: { name: "shots" },
            },
            {
              name: "--storage",
              description:
                "If specified, the ConnectionString of an Azure Storage is used to store job data and results",
              args: { name: "storage" },
            },
            {
              name: "--target-capability",
              description: "Target-capability parameter passed to the compiler",
              args: { name: "target-capability" },
            },
          ],
          args: {
            name: "<PROGRAM_ARGS>",
            description:
              "List of arguments expected by the Q# operation specified as --name=value after --",
            isOptional: true,
          },
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until the job finishes running",
          options: [
            {
              name: ["--job-id", "-j"],
              description: "Job unique identifier in GUID format",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
              name: ["--workspace-name", "-w"],
              description:
                "Name of the Quantum Workspace. You can configure the default workspace using az quantum workspace set",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--max-poll-wait-secs",
              description:
                "Poll time in seconds to query Azure Quantum for results of the corresponding job",
              args: { name: "max-poll-wait-secs" },
            },
          ],
        },
      ],
    },
    {
      name: "offerings",
      description: "Manage provider offerings for Azure Quantum",
      subcommands: [
        {
          name: "accept-terms",
          description:
            "Accept the terms of a provider and SKU combination to enable it for workspace creation",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--provider-id", "-p"],
              description: "Identifier of an Azure Quantum provider",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: ["--sku", "-k"],
              description:
                "Identify a plan or SKU offered by an Azure Quantum provider",
              args: { name: "sku" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description:
            "Get the list of all provider offerings available on the given location",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--autoadd-only",
              description:
                'If specified, only the plans flagged "autoAdd" are displayed',
            },
          ],
        },
        {
          name: "show-terms",
          description:
            "Show the terms of a provider and SKU combination including license URL and acceptance status",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--provider-id", "-p"],
              description: "Identifier of an Azure Quantum provider",
              args: { name: "provider-id" },
              isRequired: true,
            },
            {
              name: ["--sku", "-k"],
              description:
                "Identify a plan or SKU offered by an Azure Quantum provider",
              args: { name: "sku" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "target",
      description: "Manage targets for Azure Quantum workspaces",
      subcommands: [
        {
          name: "clear",
          description: "Clear the default target-id",
        },
        {
          name: "list",
          description:
            "Get the list of providers and their targets in an Azure Quantum workspace",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
              name: ["--workspace-name", "-w"],
              description:
                "Name of the Quantum Workspace. You can configure the default workspace using az quantum workspace set",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "set",
          description:
            "Select the default target to use when submitting jobs to Azure Quantum",
          options: [
            {
              name: ["--target-id", "-t"],
              description:
                "Execution engine for quantum computing jobs. When a workspace is configured with a set of providers, they each enable one or more targets. You can configure the default target using az quantum target set",
              args: { name: "target-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the Target ID of the current default target to use when submitting jobs to Azure Quantum",
          options: [
            {
              name: ["--target-id", "-t"],
              description:
                "Execution engine for quantum computing jobs. When a workspace is configured with a set of providers, they each enable one or more targets. You can configure the default target using az quantum target set",
              args: { name: "target-id" },
            },
          ],
        },
      ],
    },
    {
      name: "workspace",
      description: "Manage Azure Quantum workspaces",
      subcommands: [
        {
          name: "clear",
          description: "Clear the default Azure Quantum workspace",
        },
        {
          name: "create",
          description: "Create a new Azure Quantum workspace",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
              name: ["--storage-account", "-a"],
              description:
                "Name of the storage account to be used by a quantum workspace",
              args: { name: "storage-account" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the Quantum Workspace. You can configure the default workspace using az quantum workspace set",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--auto-accept",
              description:
                "If specified, provider terms are accepted without an interactive Y/N prompt",
            },
            {
              name: ["--provider-sku-list", "-r"],
              description:
                "Comma separated list of Provider/SKU pairs. Separate the Provider and SKU with a slash. Enclose the entire list in quotes. Values from az quantum offerings list -l <location> -o table",
              args: { name: "provider-sku-list" },
            },
            {
              name: "--skip-autoadd",
              description:
                "If specified, the plans that offer free credits will not automatically be added",
            },
            {
              name: "--skip-role-assignment",
              description:
                "Skip the role assignment step for the quantum workspace in the storage account",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the given (or current) Azure Quantum workspace",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the Quantum Workspace. You can configure the default workspace using az quantum workspace set",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "Get the list of Azure Quantum workspaces available",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--tag",
              description:
                "Show only quantum workspaces that have associated the specified tag",
              args: { name: "tag" },
            },
          ],
        },
        {
          name: "quotas",
          description:
            "List the quotas for the given (or current) Azure Quantum workspace",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
              name: ["--workspace-name", "-w"],
              description:
                "Name of the Quantum Workspace. You can configure the default workspace using az quantum workspace set",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "set",
          description:
            "Select a default Azure Quantum workspace for future commands",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
              name: ["--workspace-name", "-w"],
              description:
                "Name of the Quantum Workspace. You can configure the default workspace using az quantum workspace set",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the details of the given (or current) Azure Quantum workspace",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--workspace-name", "-w"],
              description:
                "Name of the Quantum Workspace. You can configure the default workspace using az quantum workspace set",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
