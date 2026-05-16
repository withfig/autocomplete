const completionSpec: Fig.Spec = {
  name: "amplifybackend",
  description: "AWS Amplify Admin API",
  subcommands: [
    {
      name: "clone-backend",
      description: "This operation clones an existing backend",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-environment-name",
          description:
            "The name of the destination backend environment to be created",
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
      name: "create-backend",
      description:
        "This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-name",
          description: "The name of the app",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-config",
          description: "The resource configuration for creating a backend",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-name",
          description: "The name of the resource",
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
      name: "create-backend-api",
      description: "Creates a new backend API resource",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-config",
          description: "The resource configuration for this request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-name",
          description: "The name of this resource",
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
      name: "create-backend-auth",
      description: "Creates a new backend authentication resource",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-config",
          description: "The resource configuration for this request object",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-name",
          description: "The name of this resource",
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
      name: "create-backend-config",
      description: "Creates a config object for a backend",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-manager-app-id",
          description: "The app ID for the backend manager",
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
      name: "create-backend-storage",
      description: "Creates a backend storage resource",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-config",
          description:
            "The resource configuration for creating backend storage",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-name",
          description: "The name of the storage resource",
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
      name: "create-token",
      description:
        "Generates a one-time challenge code to authenticate a user into your Amplify Admin UI",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
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
      name: "delete-backend",
      description: "Removes an existing environment from your Amplify project",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
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
      name: "delete-backend-api",
      description: "Deletes an existing backend API resource",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-config",
          description:
            "Defines the resource configuration for the data model in your Amplify project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-name",
          description: "The name of this resource",
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
      name: "delete-backend-auth",
      description: "Deletes an existing backend authentication resource",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-name",
          description: "The name of this resource",
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
      name: "delete-backend-storage",
      description: "Removes the specified backend storage resource",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-name",
          description: "The name of the storage resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-name",
          description: "The name of the storage service",
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
      name: "delete-token",
      description:
        "Deletes the challenge token based on the given appId and sessionId",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "The session ID",
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
      name: "generate-backend-api-models",
      description:
        "Generates a model schema for an existing backend API resource",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-name",
          description: "The name of this resource",
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
      name: "get-backend",
      description: "Provides project-level details for your Amplify UI project",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
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
      name: "get-backend-api",
      description: "Gets the details for a backend API",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-config",
          description:
            "Defines the resource configuration for the data model in your Amplify project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-name",
          description: "The name of this resource",
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
      name: "get-backend-api-models",
      description:
        "Gets a model introspection schema for an existing backend API resource",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-name",
          description: "The name of this resource",
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
      name: "get-backend-auth",
      description: "Gets a backend auth details",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-name",
          description: "The name of this resource",
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
      name: "get-backend-job",
      description: "Returns information about a specific job",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The ID for the job",
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
      name: "get-backend-storage",
      description: "Gets details for a backend storage resource",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-name",
          description: "The name of the storage resource",
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
      name: "get-token",
      description:
        "Gets the challenge token based on the given appId and sessionId",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "The session ID",
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
      name: "import-backend-auth",
      description: "Imports an existing backend authentication resource",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-pool-id",
          description: "The ID of the Amazon Cognito identity pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--native-client-id",
          description: "The ID of the Amazon Cognito native client",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The ID of the Amazon Cognito user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--web-client-id",
          description: "The ID of the Amazon Cognito web client",
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
      name: "import-backend-storage",
      description: "Imports an existing backend storage resource",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket-name",
          description: "The name of the S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-name",
          description: "The name of the storage service",
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
      name: "list-backend-jobs",
      description: "Lists the jobs for the backend of an Amplify app",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The ID for the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results that you want in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token for the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--operation",
          description:
            "Filters the list of response objects to include only those with the specified operation name",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Filters the list of response objects to include only those with the specified status",
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
      name: "list-s3-buckets",
      description: "The list of S3 buckets in your account",
      options: [
        {
          name: "--next-token",
          description: "Reserved for future use",
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
      name: "remove-all-backends",
      description: "Removes all backend environments from your Amplify project",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--clean-amplify-app",
          description:
            "Cleans up the Amplify Console app if this value is set to true",
        },
        {
          name: "--no-clean-amplify-app",
          description:
            "Cleans up the Amplify Console app if this value is set to true",
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
      name: "remove-backend-config",
      description:
        "Removes the AWS resources required to access the Amplify Admin UI",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
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
      name: "update-backend-api",
      description: "Updates an existing backend API resource",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-config",
          description:
            "Defines the resource configuration for the data model in your Amplify project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-name",
          description: "The name of this resource",
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
      name: "update-backend-auth",
      description: "Updates an existing backend authentication resource",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-config",
          description: "The resource configuration for this request object",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-name",
          description: "The name of this resource",
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
      name: "update-backend-config",
      description:
        "Updates the AWS resources required to access the Amplify Admin UI",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--login-auth-config",
          description:
            "Describes the Amazon Cognito configuration for Admin UI access",
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
      name: "update-backend-job",
      description: "Updates a specific job",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The ID for the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--operation",
          description:
            "Filters the list of response objects to include only those with the specified operation name",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Filters the list of response objects to include only those with the specified status",
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
      name: "update-backend-storage",
      description: "Updates an existing backend storage resource",
      options: [
        {
          name: "--app-id",
          description: "The app ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--backend-environment-name",
          description: "The name of the backend environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-config",
          description:
            "The resource configuration for updating backend storage",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-name",
          description: "The name of the storage resource",
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
