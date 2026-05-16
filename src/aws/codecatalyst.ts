const completionSpec: Fig.Spec = {
  name: "codecatalyst",
  description:
    "Welcome to the Amazon CodeCatalyst API reference. This reference provides descriptions of operations and data types for Amazon CodeCatalyst. You can use the Amazon CodeCatalyst API to work with the following objects.  Spaces, by calling the following:    DeleteSpace, which deletes a space.    GetSpace, which returns information about a space.    GetSubscription, which returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.    ListSpaces, which retrieves a list of spaces.    UpdateSpace, which changes one or more values for a space.   Projects, by calling the following:    CreateProject which creates a project in a specified space.    GetProject, which returns information about a project.    ListProjects, which retrieves a list of projects in a space.   Users, by calling the following:    GetUserDetails, which returns information about a user in Amazon CodeCatalyst.   Source repositories, by calling the following:    CreateSourceRepository, which creates an empty Git-based source repository in a specified project.    CreateSourceRepositoryBranch, which creates a branch in a specified repository where you can work on code.    DeleteSourceRepository, which deletes a source repository.    GetSourceRepository, which returns information about a source repository.    GetSourceRepositoryCloneUrls, which returns information about the URLs that can be used with a Git client to clone a source repository.    ListSourceRepositories, which retrieves a list of source repositories in a project.    ListSourceRepositoryBranches, which retrieves a list of branches in a source repository.   Dev Environments and the Amazon Web Services Toolkits, by calling the following:    CreateDevEnvironment, which creates a Dev Environment, where you can quickly work on the code stored in the source repositories of your project.    DeleteDevEnvironment, which deletes a Dev Environment.    GetDevEnvironment, which returns information about a Dev Environment.    ListDevEnvironments, which retrieves a list of Dev Environments in a project.    ListDevEnvironmentSessions, which retrieves a list of active Dev Environment sessions in a project.    StartDevEnvironment, which starts a specified Dev Environment and puts it into an active state.    StartDevEnvironmentSession, which starts a session to a specified Dev Environment.    StopDevEnvironment, which stops a specified Dev Environment and puts it into an stopped state.    StopDevEnvironmentSession, which stops a session for a specified Dev Environment.    UpdateDevEnvironment, which changes one or more values for a Dev Environment.   Workflows, by calling the following:    GetWorkflow, which returns information about a workflow.    GetWorkflowRun, which returns information about a specified run of a workflow.    ListWorkflowRuns, which retrieves a list of runs of a specified workflow.    ListWorkflows, which retrieves a list of workflows in a specified project.    StartWorkflowRun, which starts a run of a specified workflow.   Security, activity, and resource management in Amazon CodeCatalyst, by calling the following:    CreateAccessToken, which creates a personal access token (PAT) for the current user.    DeleteAccessToken, which deletes a specified personal access token (PAT).    ListAccessTokens, which lists all personal access tokens (PATs) associated with a user.    ListEventLogs, which retrieves a list of events that occurred during a specified time period in a space.    VerifySession, which verifies whether the calling user has a valid Amazon CodeCatalyst login and session.    If you are using the Amazon CodeCatalyst APIs with an SDK or the CLI, you must configure your computer to work with Amazon CodeCatalyst and single sign-on (SSO). For more information, see Setting up to use the CLI with Amazon CodeCatalyst and the SSO documentation for your SDK",
  subcommands: [
    {
      name: "create-access-token",
      description:
        "Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password. It is associated with your user identity for use across all spaces and projects in Amazon CodeCatalyst. You use PATs to access CodeCatalyst from resources that include integrated development environments (IDEs) and Git-based source repositories. PATs represent you in Amazon CodeCatalyst and you can manage them in your user settings.For more information, see Managing personal access tokens in Amazon CodeCatalyst",
      options: [
        {
          name: "--name",
          description: "The friendly name of the personal access token",
          args: {
            name: "string",
          },
        },
        {
          name: "--expires-time",
          description:
            "The date and time the personal access token expires, in coordinated universal time (UTC) timestamp format as specified in RFC 3339",
          args: {
            name: "timestamp",
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
    {
      name: "create-dev-environment",
      description:
        "Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development environment that you can use to quickly work on the code stored in the source repositories of your project.   When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these defaults apply to a Dev Environment created programmatically",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--repositories",
          description:
            "The source repository that contains the branch to clone into the Dev Environment",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A user-specified idempotency token. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias",
          description: "The user-defined alias for a Dev Environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--ides",
          description:
            "Information about the integrated development environment (IDE) configured for a Dev Environment.  An IDE is required to create a Dev Environment. For Dev Environment creation, this field contains configuration information and must be provided",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-type",
          description:
            "The Amazon EC2 instace type to use for the Dev Environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--inactivity-timeout-minutes",
          description:
            "The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running",
          args: {
            name: "integer",
          },
        },
        {
          name: "--persistent-storage",
          description:
            "Information about the amount of storage allocated to the Dev Environment.   By default, a Dev Environment is configured to have 16GB of persistent storage when created from the Amazon CodeCatalyst console, but there is no default when programmatically creating a Dev Environment. Valid values for persistent storage are based on memory sizes in 16GB increments. Valid values are 16, 32, and 64",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-connection-name",
          description:
            "The name of the connection that will be used to connect to Amazon VPC, if any",
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
    {
      name: "create-project",
      description: "Creates a project in a specified space",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The friendly name of the project that will be displayed to users",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose",
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
    {
      name: "create-source-repository",
      description:
        "Creates an empty Git-based source repository in a specified project. The repository is created with an initial empty commit with a default branch named main",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the source repository. For more information about name requirements, see Quotas for source repositories",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the source repository",
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
    {
      name: "create-source-repository-branch",
      description:
        "Creates a branch in a specified source repository in Amazon CodeCatalyst.   This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-repository-name",
          description:
            "The name of the repository where you want to create a branch",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name for the branch you're creating",
          args: {
            name: "string",
          },
        },
        {
          name: "--head-commit-id",
          description:
            "The commit ID in an existing branch from which you want to create the new branch",
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
    {
      name: "delete-access-token",
      description:
        "Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it",
      options: [
        {
          name: "--id",
          description:
            "The ID of the personal access token to delete. You can find the IDs of all PATs associated with your Amazon Web Services Builder ID in a space by calling ListAccessTokens",
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
    {
      name: "delete-dev-environment",
      description: "Deletes a Dev Environment",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The system-generated unique ID of the Dev Environment you want to delete. To retrieve a list of Dev Environment IDs, use ListDevEnvironments",
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
    {
      name: "delete-project",
      description: "Deletes a project in a space",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the project in the space. To retrieve a list of project names, use ListProjects",
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
    {
      name: "delete-source-repository",
      description:
        "Deletes a source repository in Amazon CodeCatalyst. You cannot use this API to delete a linked repository. It can only be used to delete a Amazon CodeCatalyst source repository",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the source repository",
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
    {
      name: "delete-space",
      description:
        "Deletes a space.  Deleting a space cannot be undone. Additionally, since space names must be unique across Amazon CodeCatalyst, you cannot reuse names of deleted spaces",
      options: [
        {
          name: "--name",
          description:
            "The name of the space. To retrieve a list of space names, use ListSpaces",
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
    {
      name: "get-dev-environment",
      description:
        "Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The system-generated unique ID of the Dev Environment for which you want to view information. To retrieve a list of Dev Environment IDs, use ListDevEnvironments",
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
    {
      name: "get-project",
      description: "Returns information about a project",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the project in the space",
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
    {
      name: "get-source-repository",
      description: "Returns information about a source repository",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the source repository",
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
    {
      name: "get-source-repository-clone-urls",
      description:
        "Returns information about the URLs that can be used with a Git client to clone a source repository",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-repository-name",
          description: "The name of the source repository",
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
    {
      name: "get-space",
      description: "Returns information about an space",
      options: [
        {
          name: "--name",
          description: "The name of the space",
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
    {
      name: "get-subscription",
      description:
        "Returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
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
    {
      name: "get-user-details",
      description: "Returns information about a user",
      options: [
        {
          name: "--id",
          description: "The system-generated unique ID of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description:
            "The name of the user as displayed in Amazon CodeCatalyst",
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
    {
      name: "get-workflow",
      description: "Returns information about a workflow",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The ID of the workflow. To rerieve a list of workflow IDs, use ListWorkflows",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
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
    {
      name: "get-workflow-run",
      description: "Returns information about a specified run of a workflow",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The ID of the workflow run. To retrieve a list of workflow run IDs, use ListWorkflowRuns",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
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
    {
      name: "list-access-tokens",
      description:
        "Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your Amazon Web Services Builder ID",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a NextToken element, which you can use to obtain additional results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from a call to this API to indicate the next batch of results to return, if any",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
    {
      name: "list-dev-environment-sessions",
      description:
        "Retrieves a list of active sessions for a Dev Environment in a project",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--dev-environment-id",
          description: "The system-generated unique ID of the Dev Environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from a call to this API to indicate the next batch of results to return, if any",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a NextToken element, which you can use to obtain additional results",
          args: {
            name: "integer",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
    {
      name: "list-dev-environments",
      description: "Retrieves a list of Dev Environments in a project",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Information about filters to apply to narrow the results returned in the list",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from a call to this API to indicate the next batch of results to return, if any",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a NextToken element, which you can use to obtain additional results",
          args: {
            name: "integer",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
    {
      name: "list-event-logs",
      description:
        "Retrieves a list of events that occurred during a specific time in a space. You can use these events to audit user and system activity in a space. For more information, see Monitoring in the Amazon CodeCatalyst User Guide.  ListEventLogs guarantees events for the last 30 days in a given space. You can also view and retrieve a list of management events over the last 90 days for Amazon CodeCatalyst in the CloudTrail console by viewing Event history, or by creating a trail to create and maintain a record of events that extends past 90 days. For more information, see Working with CloudTrail Event History and Working with CloudTrail trails",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The date and time when you want to start retrieving events, in coordinated universal time (UTC) timestamp format as specified in RFC 3339",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The time after which you do not want any events retrieved, in coordinated universal time (UTC) timestamp format as specified in RFC 3339",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--event-name",
          description: "The name of the event",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from a call to this API to indicate the next batch of results to return, if any",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a NextToken element, which you can use to obtain additional results",
          args: {
            name: "integer",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
    {
      name: "list-projects",
      description: "Retrieves a list of projects",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from a call to this API to indicate the next batch of results to return, if any",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a NextToken element, which you can use to obtain additional results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "Information about filters to apply to narrow the results returned in the list",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
    {
      name: "list-source-repositories",
      description: "Retrieves a list of source repositories in a project",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from a call to this API to indicate the next batch of results to return, if any",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a NextToken element, which you can use to obtain additional results",
          args: {
            name: "integer",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
    {
      name: "list-source-repository-branches",
      description:
        "Retrieves a list of branches in a specified source repository",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-repository-name",
          description: "The name of the source repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from a call to this API to indicate the next batch of results to return, if any",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a NextToken element, which you can use to obtain additional results",
          args: {
            name: "integer",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
    {
      name: "list-spaces",
      description: "Retrieves a list of spaces",
      options: [
        {
          name: "--next-token",
          description:
            "A token returned from a call to this API to indicate the next batch of results to return, if any",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
    {
      name: "list-workflow-runs",
      description: "Retrieves a list of workflow runs of a specified workflow",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description:
            "The ID of the workflow. To retrieve a list of workflow IDs, use ListWorkflows",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from a call to this API to indicate the next batch of results to return, if any",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a NextToken element, which you can use to obtain additional results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-by",
          description:
            "Information used to sort the items in the returned list",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
    {
      name: "list-workflows",
      description: "Retrieves a list of workflows in a specified project",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from a call to this API to indicate the next batch of results to return, if any",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a NextToken element, which you can use to obtain additional results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-by",
          description:
            "Information used to sort the items in the returned list",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
    {
      name: "start-dev-environment",
      description:
        "Starts a specified Dev Environment and puts it into an active state",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The system-generated unique ID of the Dev Environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--ides",
          description:
            "Information about the integrated development environment (IDE) configured for a Dev Environment",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-type",
          description:
            "The Amazon EC2 instace type to use for the Dev Environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--inactivity-timeout-minutes",
          description:
            "The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running",
          args: {
            name: "integer",
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
    {
      name: "start-dev-environment-session",
      description: "Starts a session for a specified Dev Environment",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The system-generated unique ID of the Dev Environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-configuration",
          description:
            "Information about the configuration of a Dev Environment session",
          args: {
            name: "structure",
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
    {
      name: "start-workflow-run",
      description: "Begins a run of a specified workflow",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description:
            "The system-generated unique ID of the workflow. To retrieve a list of workflow IDs, use ListWorkflows",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A user-specified idempotency token. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect",
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
    {
      name: "stop-dev-environment",
      description:
        "Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The system-generated unique ID of the Dev Environment",
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
    {
      name: "stop-dev-environment-session",
      description: "Stops a session for a specified Dev Environment",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The system-generated unique ID of the Dev Environment. To obtain this ID, use ListDevEnvironments",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The system-generated unique ID of the Dev Environment session. This ID is returned by StartDevEnvironmentSession",
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
    {
      name: "update-dev-environment",
      description:
        "Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-name",
          description: "The name of the project in the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The system-generated unique ID of the Dev Environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias",
          description:
            "The user-specified alias for the Dev Environment. Changing this value will not cause a restart",
          args: {
            name: "string",
          },
        },
        {
          name: "--ides",
          description:
            "Information about the integrated development environment (IDE) configured for a Dev Environment",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-type",
          description:
            "The Amazon EC2 instace type to use for the Dev Environment.   Changing this value will cause a restart of the Dev Environment if it is running",
          args: {
            name: "string",
          },
        },
        {
          name: "--inactivity-timeout-minutes",
          description:
            "The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.  Changing this value will cause a restart of the Dev Environment if it is running",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-token",
          description:
            "A user-specified idempotency token. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect",
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
    {
      name: "update-project",
      description: "Changes one or more values for a project",
      options: [
        {
          name: "--space-name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the project",
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
    {
      name: "update-space",
      description: "Changes one or more values for a space",
      options: [
        {
          name: "--name",
          description: "The name of the space",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the space",
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
    {
      name: "verify-session",
      description:
        "Verifies whether the calling user has a valid Amazon CodeCatalyst login and session. If successful, this returns the ID of the user in Amazon CodeCatalyst",
      options: [
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
