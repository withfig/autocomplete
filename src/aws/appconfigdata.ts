const completionSpec: Fig.Spec = {
  name: "appconfigdata",
  description:
    "AppConfig Data provides the data plane APIs your application uses to retrieve configuration data. Here's how it works: Your application retrieves configuration data by first establishing a configuration session using the AppConfig Data StartConfigurationSession API action. Your session's client then makes periodic calls to GetLatestConfiguration to check for and retrieve the latest data available. When calling StartConfigurationSession, your code sends the following information:   Identifiers (ID or name) of an AppConfig application, environment, and configuration profile that the session tracks.   (Optional) The minimum amount of time the session's client must wait between calls to GetLatestConfiguration.   In response, AppConfig provides an InitialConfigurationToken to be given to the session's client and used the first time it calls GetLatestConfiguration for that session.  This token should only be used once in your first call to GetLatestConfiguration. You must use the new token in the GetLatestConfiguration response (NextPollConfigurationToken) in each subsequent call to GetLatestConfiguration.  When calling GetLatestConfiguration, your client code sends the most recent ConfigurationToken value it has and receives in response:    NextPollConfigurationToken: the ConfigurationToken value to use on the next call to GetLatestConfiguration.    NextPollIntervalInSeconds: the duration the client should wait before making its next call to GetLatestConfiguration. This duration may vary over the course of the session, so it should be used instead of the value sent on the StartConfigurationSession call.   The configuration: the latest data intended for the session. This may be empty if the client already has the latest version of the configuration.    The InitialConfigurationToken and NextPollConfigurationToken should only be used once. To support long poll use cases, the tokens are valid for up to 24 hours. If a GetLatestConfiguration call uses an expired token, the system returns BadRequestException.  For more information and to view example CLI commands that show how to retrieve a configuration using the AppConfig Data StartConfigurationSession and GetLatestConfiguration API actions, see Retrieving the configuration in the AppConfig User Guide",
  subcommands: [
    {
      name: "get-latest-configuration",
      description:
        "Retrieves the latest deployed configuration. This API may return empty configuration data if the client already has the latest version. For more information about this API action and to view example CLI commands that show how to use it with the StartConfigurationSession API action, see Retrieving the configuration in the AppConfig User Guide.   Note the following important information.   Each configuration token is only valid for one call to GetLatestConfiguration. The GetLatestConfiguration response includes a NextPollConfigurationToken that should always replace the token used for the just-completed call in preparation for the next one.     GetLatestConfiguration is a priced call. For more information, see Pricing",
      options: [
        {
          name: "--configuration-token",
          description:
            "Token describing the current state of the configuration session. To obtain a token, first call the StartConfigurationSession API. Note that every call to GetLatestConfiguration will return a new ConfigurationToken (NextPollConfigurationToken in the response) and must be provided to subsequent GetLatestConfiguration API calls.  This token should only be used once. To support long poll use cases, the token is valid for up to 24 hours. If a GetLatestConfiguration call uses an expired token, the system returns BadRequestException",
          args: {
            name: "string",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "start-configuration-session",
      description:
        "Starts a configuration session used to retrieve a deployed configuration. For more information about this API action and to view example CLI commands that show how to use it with the GetLatestConfiguration API action, see Retrieving the configuration in the AppConfig User Guide",
      options: [
        {
          name: "--application-identifier",
          description: "The application ID or the application name",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description: "The environment ID or the environment name",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-profile-identifier",
          description:
            "The configuration profile ID or the configuration profile name",
          args: {
            name: "string",
          },
        },
        {
          name: "--required-minimum-poll-interval-in-seconds",
          description:
            "Sets a constraint on a session. If you specify a value of, for example, 60 seconds, then the client that established the session can't call GetLatestConfiguration more frequently than every 60 seconds",
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
  ],
};
export default completionSpec;
