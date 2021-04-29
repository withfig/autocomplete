export const completionSpec: Fig.Spec = {
  name: "cognito-idp",
  description:
    "Using the Amazon Cognito User Pools API, you can create a user pool to manage directories and users. You can authenticate a user to obtain tokens related to user identity and access policies. This API reference provides information about user pools in Amazon Cognito User Pools. For more information, see the Amazon Cognito Documentation.",
  subcommands: [
    {
      name: "add-custom-attributes",
      description: "Adds additional user attributes to the user pool schema.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to add custom attributes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-attributes",
          description:
            "An array of custom attributes, such as Mutable and Name.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-add-user-to-group",
      description:
        "Adds the specified user to the specified group. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The username for the user.",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description: "The group name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-confirm-sign-up",
      description:
        "Confirms user registration as an admin without using a confirmation code. Works on any user. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for which you want to confirm user registration.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The user name for which you want to confirm user registration.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.  If your user pool configuration includes triggers, the AdminConfirmSignUp API action invokes the AWS Lambda function that is specified for the post confirmation trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. In this payload, the clientMetadata attribute provides the data that you assigned to the ClientMetadata parameter in your AdminConfirmSignUp request. In your function code in AWS Lambda, you can process the ClientMetadata value to enhance your workflow for your specific needs. For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-create-user",
      description:
        "Creates a new user in the specified user pool. If MessageAction is not set, the default is to send a welcome message via email or phone (SMS). This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password. Alternatively, you can call AdminCreateUser with \u201cSUPPRESS\u201d for the MessageAction parameter, and Amazon Cognito will not send any email.  In either case, the user will be in the FORCE_CHANGE_PASSWORD state until they sign in and change their password.  AdminCreateUser requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where the user will be created.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username for the user. Must be unique within the user pool. Must be a UTF-8 string between 1 and 128 characters. After the user is created, the username cannot be changed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attributes",
          description:
            'An array of name-value pairs that contain user attributes and attribute values to be set for the user to be created. You can create a user without specifying any attributes other than Username. However, any attributes that you specify as required (when creating a user pool or in the Attributes tab of the console) must be supplied either by you (in your call to AdminCreateUser) or by the user (when he or she signs up in response to your welcome message). For custom attributes, you must prepend the custom: prefix to the attribute name. To send a message inviting the user to sign up, you must specify the user\'s email address or phone number. This can be done in your call to AdminCreateUser or in the Users tab of the Amazon Cognito console for managing your user pools. In your call to AdminCreateUser, you can set the email_verified attribute to True, and you can set the phone_number_verified attribute to True. (You can also do this by calling AdminUpdateUserAttributes.)    email: The email address of the user to whom the message that contains the code and username will be sent. Required if the email_verified attribute is set to True, or if "EMAIL" is specified in the DesiredDeliveryMediums parameter.    phone_number: The phone number of the user to whom the message that contains the code and username will be sent. Required if the phone_number_verified attribute is set to True, or if "SMS" is specified in the DesiredDeliveryMediums parameter.',
          args: {
            name: "list",
          },
        },
        {
          name: "--validation-data",
          description:
            "The user's validation data. This is an array of name-value pairs that contain user attributes and attribute values that you can use for custom validation, such as restricting the types of user accounts that can be registered. For example, you might choose to allow or disallow user sign-up based on the user's domain. To configure custom validation, you must create a Pre Sign-up Lambda trigger for the user pool as described in the Amazon Cognito Developer Guide. The Lambda trigger receives the validation data and uses it in the validation process. The user's validation data is not persisted.",
          args: {
            name: "list",
          },
        },
        {
          name: "--temporary-password",
          description:
            'The user\'s temporary password. This password must conform to the password policy that you specified when you created the user pool. The temporary password is valid only once. To complete the Admin Create User flow, the user must enter the temporary password in the sign-in page along with a new password to be used in all future sign-ins. This parameter is not required. If you do not specify a value, Amazon Cognito generates one for you. The temporary password can only be used until the user account expiration limit that you specified when you created the user pool. To reset the account after that time limit, you must call AdminCreateUser again, specifying "RESEND" for the MessageAction parameter.',
          args: {
            name: "string",
          },
        },
        {
          name: "--force-alias-creation",
          description:
            "This parameter is only used if the phone_number_verified or email_verified attribute is set to True. Otherwise, it is ignored. If this parameter is set to True and the phone number or email address specified in the UserAttributes parameter already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user. The previous user will no longer be able to log in using that alias. If this parameter is set to False, the API throws an AliasExistsException error if the alias already exists. The default value is False.",
        },
        {
          name: "--no-force-alias-creation",
          description:
            "This parameter is only used if the phone_number_verified or email_verified attribute is set to True. Otherwise, it is ignored. If this parameter is set to True and the phone number or email address specified in the UserAttributes parameter already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user. The previous user will no longer be able to log in using that alias. If this parameter is set to False, the API throws an AliasExistsException error if the alias already exists. The default value is False.",
        },
        {
          name: "--message-action",
          description:
            'Set to "RESEND" to resend the invitation message to a user that already exists and reset the expiration limit on the user\'s account. Set to "SUPPRESS" to suppress sending the message. Only one value can be specified.',
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-delivery-mediums",
          description:
            'Specify "EMAIL" if email will be used to send the welcome message. Specify "SMS" if the phone number will be used. The default value is "SMS". More than one value can be specified.',
          args: {
            name: "list",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.  You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the AdminCreateUser API action, Amazon Cognito invokes the function that is assigned to the pre sign-up trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminCreateUser request. In your function code in AWS Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-delete-user",
      description:
        "Deletes a user as an administrator. Works on any user. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to delete the user.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The user name of the user you wish to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-delete-user-attributes",
      description:
        "Deletes the user attributes in a user pool as an administrator. Works on any user. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to delete user attributes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The user name of the user from which you would like to delete attributes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attribute-names",
          description:
            "An array of strings representing the user attribute names you wish to delete. For custom attributes, you must prepend the custom: prefix to the attribute name.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-disable-provider-for-user",
      description:
        "Disables the user from signing in with the specified external (SAML or social) identity provider. If the user to disable is a Cognito User Pools native username + password user, they are not permitted to use their password to sign-in. If the user to disable is a linked external IdP user, any link between that user and an existing user is removed. The next time the external user (no longer attached to the previously linked DestinationUser) signs in, they must create a new user account. See AdminLinkProviderForUser. This action is enabled only for admin access and requires developer credentials. The ProviderName must match the value specified when creating an IdP for the pool.  To disable a native username + password user, the ProviderName value must be Cognito and the ProviderAttributeName must be Cognito_Subject, with the ProviderAttributeValue being the name that is used in the user pool for the user. The ProviderAttributeName must always be Cognito_Subject for social identity providers. The ProviderAttributeValue must always be the exact subject that was used when the user was originally linked as a source user. For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign-in, the ProviderAttributeName and ProviderAttributeValue must be the same values that were used for the SourceUser when the identities were originally linked using  AdminLinkProviderForUser call. (If the linking was done with ProviderAttributeName set to Cognito_Subject, the same applies here). However, if the user has already signed in, the ProviderAttributeName must be Cognito_Subject and ProviderAttributeValue must be the subject of the SAML assertion.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user",
          description: "The user to be disabled.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-disable-user",
      description:
        "Disables the specified user. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to disable the user.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The user name of the user you wish to disable.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-enable-user",
      description:
        "Enables the specified user as an administrator. Works on any user. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to enable the user.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The user name of the user you wish to enable.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-forget-device",
      description:
        "Forgets the device, as an administrator. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The user name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description: "The device key.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-get-device",
      description:
        "Gets the device, as an administrator. Calling this action requires developer credentials.",
      options: [
        {
          name: "--device-key",
          description: "The device key.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The user name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-get-user",
      description:
        "Gets the specified user by user name in a user pool as an administrator. Works on any user. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to get information about the user.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The user name of the user you wish to retrieve.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-initiate-auth",
      description:
        "Initiates the authentication flow, as an administrator. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the Amazon Cognito user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The app client ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-flow",
          description:
            "The authentication flow for this call to execute. The API action will depend on this value. For example:    REFRESH_TOKEN_AUTH will take in a valid refresh token and return new tokens.    USER_SRP_AUTH will take in USERNAME and SRP_A and return the SRP variables to be used for next challenge execution.    USER_PASSWORD_AUTH will take in USERNAME and PASSWORD and return the next challenge or tokens.   Valid values include:    USER_SRP_AUTH: Authentication flow for the Secure Remote Password (SRP) protocol.    REFRESH_TOKEN_AUTH/REFRESH_TOKEN: Authentication flow for refreshing the access token and ID token by supplying a valid refresh token.    CUSTOM_AUTH: Custom authentication flow.    ADMIN_NO_SRP_AUTH: Non-SRP authentication flow; you can pass in the USERNAME and PASSWORD directly if the flow is enabled for calling the app client.    USER_PASSWORD_AUTH: Non-SRP authentication flow; USERNAME and PASSWORD are passed directly. If a user migration Lambda trigger is set, this flow will invoke the user migration Lambda if the USERNAME is not found in the user pool.     ADMIN_USER_PASSWORD_AUTH: Admin-based user password authentication. This replaces the ADMIN_NO_SRP_AUTH authentication flow. In this flow, Cognito receives the password in the request instead of using the SRP process to verify passwords.",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-parameters",
          description:
            "The authentication parameters. These are inputs corresponding to the AuthFlow that you are invoking. The required values depend on the value of AuthFlow:   For USER_SRP_AUTH: USERNAME (required), SRP_A (required), SECRET_HASH (required if the app client is configured with a client secret), DEVICE_KEY.   For REFRESH_TOKEN_AUTH/REFRESH_TOKEN: REFRESH_TOKEN (required), SECRET_HASH (required if the app client is configured with a client secret), DEVICE_KEY.   For ADMIN_NO_SRP_AUTH: USERNAME (required), SECRET_HASH (if app client is configured with client secret), PASSWORD (required), DEVICE_KEY.   For CUSTOM_AUTH: USERNAME (required), SECRET_HASH (if app client is configured with client secret), DEVICE_KEY. To start the authentication flow with password verification, include ChallengeName: SRP_A and SRP_A: (The SRP_A Value).",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for certain custom workflows that this action triggers. You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the AdminInitiateAuth API action, Amazon Cognito invokes the AWS Lambda functions that are specified for various triggers. The ClientMetadata value is passed as input to the functions for only the following triggers:   Pre signup   Pre authentication   User migration   When Amazon Cognito invokes the functions for these triggers, it passes a JSON payload, which the function receives as input. This payload contains a validationData attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminInitiateAuth request. In your function code in AWS Lambda, you can process the validationData value to enhance your workflow for your specific needs. When you use the AdminInitiateAuth API action, Amazon Cognito also invokes the functions for the following triggers, but it does not provide the ClientMetadata value as input:   Post authentication   Custom message   Pre token generation   Create auth challenge   Define auth challenge   Verify auth challenge   For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The analytics metadata for collecting Amazon Pinpoint metrics for AdminInitiateAuth calls.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--context-data",
          description:
            "Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-link-provider-for-user",
      description:
        "Links an existing user account in a user pool (DestinationUser) to an identity from an external identity provider (SourceUser) based on a specified attribute name and value from the external identity provider. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in, so that the federated user identity can be used to sign in as the existing user account.   For example, if there is an existing user with a username and password, this API links that user to a federated user identity, so that when the federated user identity is used, the user signs in as the existing user account.   The maximum number of federated identities linked to a user is 5.   Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external identity providers and provider attributes that have been trusted by the application owner.  This action is enabled only for admin access and requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-user",
          description:
            "The existing user in the user pool to be linked to the external identity provider user account. Can be a native (Username + Password) Cognito User Pools user or a federated user (for example, a SAML or Facebook user). If the user doesn't exist, an exception is thrown. This is the user that is returned when the new user (with the linked identity provider attribute) signs in. For a native username + password user, the ProviderAttributeValue for the DestinationUser should be the username in the user pool. For a federated user, it should be the provider-specific user_id. The ProviderAttributeName of the DestinationUser is ignored. The ProviderName should be set to Cognito for users in Cognito user pools.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-user",
          description:
            "An external identity provider account for a user who does not currently exist yet in the user pool. This user must be a federated user (for example, a SAML or Facebook user), not another native user. If the SourceUser is a federated social identity provider user (Facebook, Google, or Login with Amazon), you must set the ProviderAttributeName to Cognito_Subject. For social identity providers, the ProviderName will be Facebook, Google, or LoginWithAmazon, and Cognito will automatically parse the Facebook, Google, and Login with Amazon tokens for id, sub, and user_id, respectively. The ProviderAttributeValue for the user must be the same value as the id, sub, or user_id value found in the social identity provider token.  For SAML, the ProviderAttributeName can be any value that matches a claim in the SAML assertion. If you wish to link SAML users based on the subject of the SAML assertion, you should map the subject to a claim through the SAML identity provider and submit that claim name as the ProviderAttributeName. If you set ProviderAttributeName to Cognito_Subject, Cognito will automatically parse the default unique identifier found in the subject from the SAML token.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-list-devices",
      description:
        "Lists devices, as an administrator. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The user name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The limit of the devices request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pagination-token",
          description: "The pagination token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-list-groups-for-user",
      description:
        "Lists the groups that the user belongs to. Calling this action requires developer credentials.",
      options: [
        {
          name: "--username",
          description: "The username for the user.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The limit of the request to list groups.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-list-user-auth-events",
      description:
        "Lists a history of user activity and any risks detected as part of Amazon Cognito advanced security.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The user pool username or an alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of authentication events to return.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A pagination token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-remove-user-from-group",
      description:
        "Removes the specified user from the specified group. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The username for the user.",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description: "The group name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-reset-user-password",
      description:
        "Resets the specified user's password in a user pool as an administrator. Works on any user. When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to reset the user's password.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The user name of the user whose password you wish to reset.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.  You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the AdminResetUserPassword API action, Amazon Cognito invokes the function that is assigned to the custom message trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminResetUserPassword request. In your function code in AWS Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-respond-to-auth-challenge",
      description:
        "Responds to an authentication challenge, as an administrator. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the Amazon Cognito user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The app client ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--challenge-name",
          description:
            "The challenge name. For more information, see AdminInitiateAuth.",
          args: {
            name: "string",
          },
        },
        {
          name: "--challenge-responses",
          description:
            "The challenge responses. These are inputs corresponding to the value of ChallengeName, for example:    SMS_MFA: SMS_MFA_CODE, USERNAME, SECRET_HASH (if app client is configured with client secret).    PASSWORD_VERIFIER: PASSWORD_CLAIM_SIGNATURE, PASSWORD_CLAIM_SECRET_BLOCK, TIMESTAMP, USERNAME, SECRET_HASH (if app client is configured with client secret).    ADMIN_NO_SRP_AUTH: PASSWORD, USERNAME, SECRET_HASH (if app client is configured with client secret).     NEW_PASSWORD_REQUIRED: NEW_PASSWORD, any other required attributes, USERNAME, SECRET_HASH (if app client is configured with client secret).     MFA_SETUP requires USERNAME, plus you need to use the session value returned by VerifySoftwareToken in the Session parameter.   The value of the USERNAME attribute must be the user's actual username, not an alias (such as email address or phone number). To make this easier, the AdminInitiateAuth response includes the actual username value in the USERNAMEUSER_ID_FOR_SRP attribute, even if you specified an alias in your call to AdminInitiateAuth.",
          args: {
            name: "map",
          },
        },
        {
          name: "--session",
          description:
            "The session which should be passed both ways in challenge-response calls to the service. If InitiateAuth or RespondToAuthChallenge API call determines that the caller needs to go through another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next RespondToAuthChallenge API call.",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The analytics metadata for collecting Amazon Pinpoint metrics for AdminRespondToAuthChallenge calls.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--context-data",
          description:
            "Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.  You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the AdminRespondToAuthChallenge API action, Amazon Cognito invokes any functions that are assigned to the following triggers: pre sign-up, custom message, post authentication, user migration, pre token generation, define auth challenge, create auth challenge, and verify auth challenge response. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminRespondToAuthChallenge request. In your function code in AWS Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-set-user-mfa-preference",
      description:
        "Sets the user's multi-factor authentication (MFA) preference, including which MFA options are enabled and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are enabled. If multiple options are enabled and no preference is set, a challenge to choose an MFA option will be returned during sign in.",
      options: [
        {
          name: "--sms-mfa-settings",
          description: "The SMS text message MFA settings.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--software-token-mfa-settings",
          description:
            "The time-based one-time password software token MFA settings.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--username",
          description: "The user pool username or alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-set-user-password",
      description:
        "Sets the specified user's password in a user pool as an administrator. Works on any user.  The password can be temporary or permanent. If it is temporary, the user status will be placed into the FORCE_CHANGE_PASSWORD state. When the user next tries to sign in, the InitiateAuth/AdminInitiateAuth response will contain the NEW_PASSWORD_REQUIRED challenge. If the user does not sign in before it expires, the user will not be able to sign in and their password will need to be reset by an administrator.  Once the user has set a new password, or the password is permanent, the user status will be set to Confirmed.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to set the user's password.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The user name of the user whose password you wish to set.",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description: "The password for the user.",
          args: {
            name: "string",
          },
        },
        {
          name: "--permanent",
          description:
            "True if the password is permanent, False if it is temporary.",
        },
        {
          name: "--no-permanent",
          description:
            "True if the password is permanent, False if it is temporary.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-set-user-settings",
      description:
        "This action is no longer supported. You can use it to configure only SMS MFA. You can't use it to configure TOTP software token MFA. To configure either type of MFA, use AdminSetUserMFAPreference instead.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the user that you are setting options for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The user name of the user that you are setting options for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--mfa-options",
          description:
            "You can use this parameter only to set an SMS configuration that uses SMS for delivery.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-update-auth-event-feedback",
      description:
        "Provides feedback for an authentication event as to whether it was from a valid user. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The user pool username.",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-id",
          description: "The authentication event ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--feedback-value",
          description: "The authentication event feedback value.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-update-device-status",
      description:
        "Updates the device status as an administrator. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The user name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description: "The device key.",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-remembered-status",
          description:
            "The status indicating whether a device has been remembered or not.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-update-user-attributes",
      description:
        "Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user. For custom attributes, you must prepend the custom: prefix to the attribute name. In addition to updating user attributes, this API can also be used to mark phone and email as verified. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to update user attributes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The user name of the user for whom you want to update user attributes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attributes",
          description:
            "An array of name-value pairs representing user attributes. For custom attributes, you must prepend the custom: prefix to the attribute name.",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.  You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the AdminUpdateUserAttributes API action, Amazon Cognito invokes the function that is assigned to the custom message trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminUpdateUserAttributes request. In your function code in AWS Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "admin-user-global-sign-out",
      description:
        "Signs out users from all devices, as an administrator. It also invalidates all refresh tokens issued to a user. The user's current access and Id tokens remain valid until their expiry. Access and Id tokens expire one hour after they are issued. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The user name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-software-token",
      description:
        "Returns a unique generated shared secret key code for the user account. The request takes an access token or a session string, but not both.",
      options: [
        {
          name: "--access-token",
          description: "The access token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--session",
          description:
            "The session which should be passed both ways in challenge-response calls to the service. This allows authentication of the user as part of the MFA setup process.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "change-password",
      description: "Changes the password for a specified user in a user pool.",
      options: [
        {
          name: "--previous-password",
          description: "The old password.",
          args: {
            name: "string",
          },
        },
        {
          name: "--proposed-password",
          description: "The new password.",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-token",
          description: "The access token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "confirm-device",
      description:
        "Confirms tracking of the device. This API call is the call that begins device tracking.",
      options: [
        {
          name: "--access-token",
          description: "The access token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description: "The device key.",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-secret-verifier-config",
          description: "The configuration of the device secret verifier.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--device-name",
          description: "The device name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "confirm-forgot-password",
      description:
        "Allows a user to enter a confirmation code to reset a forgotten password.",
      options: [
        {
          name: "--client-id",
          description:
            "The app client ID of the app associated with the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The user name of the user for whom you want to enter a code to retrieve a forgotten password.",
          args: {
            name: "string",
          },
        },
        {
          name: "--confirmation-code",
          description:
            "The confirmation code sent by a user's request to retrieve a forgotten password. For more information, see ForgotPassword.",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description:
            "The password sent by a user's request to retrieve a forgotten password.",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The Amazon Pinpoint analytics metadata for collecting metrics for ConfirmForgotPassword calls.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.  You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the ConfirmForgotPassword API action, Amazon Cognito invokes the function that is assigned to the post confirmation trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your ConfirmForgotPassword request. In your function code in AWS Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "confirm-sign-up",
      description:
        "Confirms registration of a user and handles the existing alias from a previous user.",
      options: [
        {
          name: "--client-id",
          description:
            "The ID of the app client associated with the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The user name of the user whose registration you wish to confirm.",
          args: {
            name: "string",
          },
        },
        {
          name: "--confirmation-code",
          description:
            "The confirmation code sent by a user's request to confirm registration.",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-alias-creation",
          description:
            "Boolean to be specified to force user confirmation irrespective of existing alias. By default set to False. If this parameter is set to True and the phone number/email used for sign up confirmation already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user being confirmed. If set to False, the API will throw an AliasExistsException error.",
        },
        {
          name: "--no-force-alias-creation",
          description:
            "Boolean to be specified to force user confirmation irrespective of existing alias. By default set to False. If this parameter is set to True and the phone number/email used for sign up confirmation already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user being confirmed. If set to False, the API will throw an AliasExistsException error.",
        },
        {
          name: "--analytics-metadata",
          description:
            "The Amazon Pinpoint analytics metadata for collecting metrics for ConfirmSignUp calls.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.  You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the ConfirmSignUp API action, Amazon Cognito invokes the function that is assigned to the post confirmation trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your ConfirmSignUp request. In your function code in AWS Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-group",
      description:
        "Creates a new group in the specified user pool. Calling this action requires developer credentials.",
      options: [
        {
          name: "--group-name",
          description: "The name of the group. Must be unique.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A string containing the description of the group.",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description: "The role ARN for the group.",
          args: {
            name: "string",
          },
        },
        {
          name: "--precedence",
          description:
            "A nonnegative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. Zero is the highest precedence value. Groups with lower Precedence values take precedence over groups with higher or null Precedence values. If a user belongs to two or more groups, it is the group with the lowest precedence value whose role ARN will be used in the cognito:roles and cognito:preferred_role claims in the user's tokens. Two groups can have the same Precedence value. If this happens, neither group takes precedence over the other. If two groups with the same Precedence have the same role ARN, that role is used in the cognito:preferred_role claim in tokens for users in each group. If the two groups have different role ARNs, the cognito:preferred_role claim is not set in users' tokens. The default Precedence value is null.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-identity-provider",
      description: "Creates an identity provider for a user pool.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-name",
          description: "The identity provider name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-type",
          description: "The identity provider type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-details",
          description:
            "The identity provider details. The following list describes the provider detail keys for each identity provider type.   For Google and Login with Amazon:   client_id   client_secret   authorize_scopes     For Facebook:   client_id   client_secret   authorize_scopes   api_version     For Sign in with Apple:   client_id   team_id   key_id   private_key   authorize_scopes     For OIDC providers:   client_id   client_secret   attributes_request_method   oidc_issuer   authorize_scopes   authorize_url if not available from discovery URL specified by oidc_issuer key    token_url if not available from discovery URL specified by oidc_issuer key    attributes_url if not available from discovery URL specified by oidc_issuer key    jwks_uri if not available from discovery URL specified by oidc_issuer key      For SAML providers:   MetadataFile OR MetadataURL   IDPSignout optional",
          args: {
            name: "map",
          },
        },
        {
          name: "--attribute-mapping",
          description:
            "A mapping of identity provider attributes to standard and custom user pool attributes.",
          args: {
            name: "map",
          },
        },
        {
          name: "--idp-identifiers",
          description: "A list of identity provider identifiers.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-resource-server",
      description:
        "Creates a new OAuth2.0 resource server and defines custom scopes in it.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "A unique resource server identifier for the resource server. This could be an HTTPS endpoint where the resource server is located. For example, https://my-weather-api.example.com.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A friendly name for the resource server.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scopes",
          description:
            "A list of scopes. Each scope is map, where the keys are name and description.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-user-import-job",
      description: "Creates the user import job.",
      options: [
        {
          name: "--job-name",
          description: "The job name for the user import job.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that the users are being imported into.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloud-watch-logs-role-arn",
          description:
            "The role ARN for the Amazon CloudWatch Logging role for the user import job.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-user-pool",
      description:
        "Creates a new Amazon Cognito user pool and sets the password policy for the pool.",
      options: [
        {
          name: "--pool-name",
          description: "A string used to name the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--policies",
          description: "The policies associated with the new user pool.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lambda-config",
          description:
            "The Lambda trigger configuration information for the new user pool.  In a push model, event sources (such as Amazon S3 and custom applications) need permission to invoke a function. So you will need to make an extra call to add permission for these event sources to invoke your Lambda function.  For more information on using the Lambda API to add permission, see  AddPermission .  For adding permission using the AWS CLI, see  add-permission .",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-verified-attributes",
          description:
            "The attributes to be auto-verified. Possible values: email, phone_number.",
          args: {
            name: "list",
          },
        },
        {
          name: "--alias-attributes",
          description:
            "Attributes supported as an alias for this user pool. Possible values: phone_number, email, or preferred_username.",
          args: {
            name: "list",
          },
        },
        {
          name: "--username-attributes",
          description:
            "Specifies whether email addresses or phone numbers can be specified as usernames when a user signs up.",
          args: {
            name: "list",
          },
        },
        {
          name: "--sms-verification-message",
          description: "A string representing the SMS verification message.",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-verification-message",
          description:
            "A string representing the email verification message. EmailVerificationMessage is allowed only if EmailSendingAccount is DEVELOPER.",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-verification-subject",
          description:
            "A string representing the email verification subject. EmailVerificationSubject is allowed only if EmailSendingAccount is DEVELOPER.",
          args: {
            name: "string",
          },
        },
        {
          name: "--verification-message-template",
          description:
            "The template for the verification message that the user sees when the app requests permission to access the user's information.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sms-authentication-message",
          description: "A string representing the SMS authentication message.",
          args: {
            name: "string",
          },
        },
        {
          name: "--mfa-configuration",
          description: "Specifies MFA configuration details.",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-configuration",
          description: "The device configuration.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--email-configuration",
          description: "The email configuration.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sms-configuration",
          description: "The SMS configuration.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-pool-tags",
          description:
            "The tag keys and values to assign to the user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.",
          args: {
            name: "map",
          },
        },
        {
          name: "--admin-create-user-config",
          description: "The configuration for AdminCreateUser requests.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema",
          description:
            "An array of schema attributes for the new user pool. These attributes can be standard or custom attributes.",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-pool-add-ons",
          description:
            'Used to enable advanced security risk detection. Set the key AdvancedSecurityMode to the value "AUDIT".',
          args: {
            name: "structure",
          },
        },
        {
          name: "--username-configuration",
          description:
            'You can choose to set case sensitivity on the username input for the selected sign-in option. For example, when this is set to False, users will be able to sign in using either "username" or "Username". This configuration is immutable once it has been set. For more information, see UsernameConfigurationType.',
          args: {
            name: "structure",
          },
        },
        {
          name: "--account-recovery-setting",
          description:
            "Use this setting to define which verified available method a user can use to recover their password when they call ForgotPassword. It allows you to define a preferred method when a user has more than one method available. With this setting, SMS does not qualify for a valid password recovery mechanism if the user also has SMS MFA enabled. In the absence of this setting, Cognito uses the legacy behavior to determine the recovery method where SMS is preferred over email.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-user-pool-client",
      description: "Creates the user pool client.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to create a user pool client.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-name",
          description:
            "The client name for the user pool client you would like to create.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-secret",
          description:
            "Boolean to specify whether you want to generate a secret for the user pool client being created.",
        },
        {
          name: "--no-generate-secret",
          description:
            "Boolean to specify whether you want to generate a secret for the user pool client being created.",
        },
        {
          name: "--refresh-token-validity",
          description:
            "The time limit, in days, after which the refresh token is no longer valid and cannot be used.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--access-token-validity",
          description:
            "The time limit, between 5 minutes and 1 day, after which the access token is no longer valid and cannot be used. This value will be overridden if you have entered a value in TokenValidityUnits.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--id-token-validity",
          description:
            "The time limit, between 5 minutes and 1 day, after which the ID token is no longer valid and cannot be used. This value will be overridden if you have entered a value in TokenValidityUnits.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--token-validity-units",
          description:
            "The units in which the validity times are represented in. Default for RefreshToken is days, and default for ID and access tokens are hours.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--read-attributes",
          description: "The read attributes.",
          args: {
            name: "list",
          },
        },
        {
          name: "--write-attributes",
          description:
            "The user pool attributes that the app client can write to. If your app client allows users to sign in through an identity provider, this array must include all attributes that are mapped to identity provider attributes. Amazon Cognito updates mapped attributes when users sign in to your application through an identity provider. If your app client lacks write access to a mapped attribute, Amazon Cognito throws an error when it attempts to update the attribute. For more information, see Specifying Identity Provider Attribute Mappings for Your User Pool.",
          args: {
            name: "list",
          },
        },
        {
          name: "--explicit-auth-flows",
          description:
            "The authentication flows that are supported by the user pool clients. Flow names without the ALLOW_ prefix are deprecated in favor of new names with the ALLOW_ prefix. Note that values with ALLOW_ prefix cannot be used along with values without ALLOW_ prefix. Valid values include:    ALLOW_ADMIN_USER_PASSWORD_AUTH: Enable admin based user password authentication flow ADMIN_USER_PASSWORD_AUTH. This setting replaces the ADMIN_NO_SRP_AUTH setting. With this authentication flow, Cognito receives the password in the request instead of using the SRP (Secure Remote Password protocol) protocol to verify passwords.    ALLOW_CUSTOM_AUTH: Enable Lambda trigger based authentication.    ALLOW_USER_PASSWORD_AUTH: Enable user password-based authentication. In this flow, Cognito receives the password in the request instead of using the SRP protocol to verify passwords.    ALLOW_USER_SRP_AUTH: Enable SRP based authentication.    ALLOW_REFRESH_TOKEN_AUTH: Enable authflow to refresh tokens.",
          args: {
            name: "list",
          },
        },
        {
          name: "--supported-identity-providers",
          description:
            "A list of provider names for the identity providers that are supported on this client. The following are supported: COGNITO, Facebook, Google and LoginWithAmazon.",
          args: {
            name: "list",
          },
        },
        {
          name: "--callback-urls",
          description:
            "A list of allowed redirect (callback) URLs for the identity providers. A redirect URI must:   Be an absolute URI.   Be registered with the authorization server.   Not include a fragment component.   See OAuth 2.0 - Redirection Endpoint. Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only. App callback URLs such as myapp://example are also supported.",
          args: {
            name: "list",
          },
        },
        {
          name: "--logout-urls",
          description:
            "A list of allowed logout URLs for the identity providers.",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-redirect-uri",
          description:
            "The default redirect URI. Must be in the CallbackURLs list. A redirect URI must:   Be an absolute URI.   Be registered with the authorization server.   Not include a fragment component.   See OAuth 2.0 - Redirection Endpoint. Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only. App callback URLs such as myapp://example are also supported.",
          args: {
            name: "string",
          },
        },
        {
          name: "--allowed-o-auth-flows",
          description:
            "The allowed OAuth flows. Set to code to initiate a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the token endpoint. Set to implicit to specify that the client should get the access token (and, optionally, ID token, based on scopes) directly. Set to client_credentials to specify that the client should get the access token (and, optionally, ID token, based on scopes) from the token endpoint using a combination of client and client_secret.",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-o-auth-scopes",
          description:
            "The allowed OAuth scopes. Possible values provided by OAuth are: phone, email, openid, and profile. Possible values provided by AWS are: aws.cognito.signin.user.admin. Custom scopes created in Resource Servers are also supported.",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-o-auth-flows-user-pool-client",
          description:
            "Set to true if the client is allowed to follow the OAuth protocol when interacting with Cognito user pools.",
        },
        {
          name: "--no-allowed-o-auth-flows-user-pool-client",
          description:
            "Set to true if the client is allowed to follow the OAuth protocol when interacting with Cognito user pools.",
        },
        {
          name: "--analytics-configuration",
          description:
            "The Amazon Pinpoint analytics configuration for collecting metrics for this user pool.  In regions where Pinpoint is not available, Cognito User Pools only supports sending events to Amazon Pinpoint projects in us-east-1. In regions where Pinpoint is available, Cognito User Pools will support sending events to Amazon Pinpoint projects within that same region.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--prevent-user-existence-errors",
          description:
            "Use this setting to choose which errors and responses are returned by Cognito APIs during authentication, account confirmation, and password recovery when the user does not exist in the user pool. When set to ENABLED and the user does not exist, authentication returns an error indicating either the username or password was incorrect, and account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to LEGACY, those APIs will return a UserNotFoundException exception if the user does not exist in the user pool. Valid values include:    ENABLED - This prevents user existence-related errors.    LEGACY - This represents the old behavior of Cognito where user existence related errors are not prevented.    After February 15th 2020, the value of PreventUserExistenceErrors will default to ENABLED for newly created user pool clients if no value is provided.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-user-pool-domain",
      description: "Creates a new domain for a user pool.",
      options: [
        {
          name: "--domain",
          description: "The domain string.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-domain-config",
          description:
            "The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. Provide this parameter only if you want to use a custom domain for your user pool. Otherwise, you can exclude this parameter and use the Amazon Cognito hosted domain instead. For more information about the hosted domain and custom domains, see Configuring a User Pool Domain.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-group",
      description:
        "Deletes a group. Calling this action requires developer credentials.",
      options: [
        {
          name: "--group-name",
          description: "The name of the group.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-identity-provider",
      description: "Deletes an identity provider for a user pool.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-name",
          description: "The identity provider name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-resource-server",
      description: "Deletes a resource server.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that hosts the resource server.",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier for the resource server.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-user",
      description: "Allows a user to delete himself or herself.",
      options: [
        {
          name: "--access-token",
          description: "The access token from a request to delete a user.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-user-attributes",
      description: "Deletes the attributes for a user.",
      options: [
        {
          name: "--user-attribute-names",
          description:
            "An array of strings representing the user attribute names you wish to delete. For custom attributes, you must prepend the custom: prefix to the attribute name.",
          args: {
            name: "list",
          },
        },
        {
          name: "--access-token",
          description:
            "The access token used in the request to delete user attributes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-user-pool",
      description: "Deletes the specified Amazon Cognito user pool.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool you want to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-user-pool-client",
      description: "Allows the developer to delete the user pool client.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to delete the client.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The app client ID of the app associated with the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-user-pool-domain",
      description: "Deletes a domain for a user pool.",
      options: [
        {
          name: "--domain",
          description: "The domain string.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-identity-provider",
      description: "Gets information about a specific identity provider.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-name",
          description: "The identity provider name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-resource-server",
      description: "Describes a resource server.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that hosts the resource server.",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier for the resource server",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-risk-configuration",
      description: "Describes the risk configuration.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The app client ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-user-import-job",
      description: "Describes the user import job.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that the users are being imported into.",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the user import job.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-user-pool",
      description:
        "Returns the configuration information and metadata of the specified user pool.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool you want to describe.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-user-pool-client",
      description:
        "Client method for returning the configuration information and metadata of the specified user pool app client.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool you want to describe.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The app client ID of the app associated with the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-user-pool-domain",
      description: "Gets information about a domain.",
      options: [
        {
          name: "--domain",
          description: "The domain string.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "forget-device",
      description: "Forgets the specified device.",
      options: [
        {
          name: "--access-token",
          description: "The access token for the forgotten device request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description: "The device key.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "forgot-password",
      description:
        "Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the Username parameter, you can use the username or user alias. The method used to send the confirmation code is sent according to the specified AccountRecoverySetting. For more information, see Recovering User Accounts in the Amazon Cognito Developer Guide. If neither a verified phone number nor a verified email exists, an InvalidParameterException is thrown. To use the confirmation code for resetting the password, call ConfirmForgotPassword.",
      options: [
        {
          name: "--client-id",
          description: "The ID of the client associated with the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--username",
          description:
            "The user name of the user for whom you want to enter a code to reset a forgotten password.",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The Amazon Pinpoint analytics metadata for collecting metrics for ForgotPassword calls.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.  You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the ForgotPassword API action, Amazon Cognito invokes any functions that are assigned to the following triggers: pre sign-up, custom message, and user migration. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your ForgotPassword request. In your function code in AWS Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-csv-header",
      description:
        "Gets the header information for the .csv file to be used as input for the user import job.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that the users are to be imported into.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-device",
      description: "Gets the device.",
      options: [
        {
          name: "--device-key",
          description: "The device key.",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-token",
          description: "The access token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-group",
      description:
        "Gets a group. Calling this action requires developer credentials.",
      options: [
        {
          name: "--group-name",
          description: "The name of the group.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-identity-provider-by-identifier",
      description: "Gets the specified identity provider.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--idp-identifier",
          description: "The identity provider ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-signing-certificate",
      description:
        "This method takes a user pool ID, and returns the signing certificate.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-ui-customization",
      description:
        "Gets the UI Customization information for a particular app client's app UI, if there is something set. If nothing is set for the particular client, but there is an existing pool level customization (app clientId will be ALL), then that is returned. If nothing is present, then an empty shape is returned.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The client ID for the client app.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-user",
      description: "Gets the user attributes and metadata for a user.",
      options: [
        {
          name: "--access-token",
          description:
            "The access token returned by the server response to get information about the user.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-user-attribute-verification-code",
      description:
        "Gets the user attribute verification code for the specified attribute name.",
      options: [
        {
          name: "--access-token",
          description:
            "The access token returned by the server response to get the user attribute verification code.",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-name",
          description:
            "The attribute name returned by the server response to get the user attribute verification code.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.  You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the GetUserAttributeVerificationCode API action, Amazon Cognito invokes the function that is assigned to the custom message trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your GetUserAttributeVerificationCode request. In your function code in AWS Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-user-pool-mfa-config",
      description:
        "Gets the user pool multi-factor authentication (MFA) configuration.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "global-sign-out",
      description:
        "Signs out users from all devices. It also invalidates all refresh tokens issued to a user. The user's current access and Id tokens remain valid until their expiry. Access and Id tokens expire one hour after they are issued.",
      options: [
        {
          name: "--access-token",
          description: "The access token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "initiate-auth",
      description: "Initiates the authentication flow.",
      options: [
        {
          name: "--auth-flow",
          description:
            "The authentication flow for this call to execute. The API action will depend on this value. For example:     REFRESH_TOKEN_AUTH will take in a valid refresh token and return new tokens.    USER_SRP_AUTH will take in USERNAME and SRP_A and return the SRP variables to be used for next challenge execution.    USER_PASSWORD_AUTH will take in USERNAME and PASSWORD and return the next challenge or tokens.   Valid values include:    USER_SRP_AUTH: Authentication flow for the Secure Remote Password (SRP) protocol.    REFRESH_TOKEN_AUTH/REFRESH_TOKEN: Authentication flow for refreshing the access token and ID token by supplying a valid refresh token.    CUSTOM_AUTH: Custom authentication flow.    USER_PASSWORD_AUTH: Non-SRP authentication flow; USERNAME and PASSWORD are passed directly. If a user migration Lambda trigger is set, this flow will invoke the user migration Lambda if the USERNAME is not found in the user pool.     ADMIN_USER_PASSWORD_AUTH: Admin-based user password authentication. This replaces the ADMIN_NO_SRP_AUTH authentication flow. In this flow, Cognito receives the password in the request instead of using the SRP process to verify passwords.    ADMIN_NO_SRP_AUTH is not a valid value.",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-parameters",
          description:
            "The authentication parameters. These are inputs corresponding to the AuthFlow that you are invoking. The required values depend on the value of AuthFlow:   For USER_SRP_AUTH: USERNAME (required), SRP_A (required), SECRET_HASH (required if the app client is configured with a client secret), DEVICE_KEY.   For REFRESH_TOKEN_AUTH/REFRESH_TOKEN: REFRESH_TOKEN (required), SECRET_HASH (required if the app client is configured with a client secret), DEVICE_KEY.   For CUSTOM_AUTH: USERNAME (required), SECRET_HASH (if app client is configured with client secret), DEVICE_KEY. To start the authentication flow with password verification, include ChallengeName: SRP_A and SRP_A: (The SRP_A Value).",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for certain custom workflows that this action triggers. You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the InitiateAuth API action, Amazon Cognito invokes the AWS Lambda functions that are specified for various triggers. The ClientMetadata value is passed as input to the functions for only the following triggers:   Pre signup   Pre authentication   User migration   When Amazon Cognito invokes the functions for these triggers, it passes a JSON payload, which the function receives as input. This payload contains a validationData attribute, which provides the data that you assigned to the ClientMetadata parameter in your InitiateAuth request. In your function code in AWS Lambda, you can process the validationData value to enhance your workflow for your specific needs. When you use the InitiateAuth API action, Amazon Cognito also invokes the functions for the following triggers, but it does not provide the ClientMetadata value as input:   Post authentication   Custom message   Pre token generation   Create auth challenge   Define auth challenge   Verify auth challenge   For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-id",
          description: "The app client ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The Amazon Pinpoint analytics metadata for collecting metrics for InitiateAuth calls.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-devices",
      description: "Lists the devices.",
      options: [
        {
          name: "--access-token",
          description: "The access tokens for the request to list devices.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The limit of the device request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pagination-token",
          description: "The pagination token for the list request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-groups",
      description:
        "Lists the groups associated with a user pool. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The limit of the request to list groups.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-identity-providers",
      description:
        "Lists information about all identity providers for a user pool.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of identity providers to return.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A pagination token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-resource-servers",
      description: "Lists the resource servers for a user pool.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of resource servers to return.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A pagination token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description:
        "Lists the tags that are assigned to an Amazon Cognito user pool. A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria. You can use this action up to 10 times per second, per account.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the user pool that the tags are assigned to.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-user-import-jobs",
      description: "Lists the user import jobs.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that the users are being imported into.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of import jobs you want the request to return.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pagination-token",
          description:
            "An identifier that was returned from the previous call to ListUserImportJobs, which can be used to return the next set of import jobs in the list.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-user-pool-clients",
      description:
        "Lists the clients that have been created for the specified user pool.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to list user pool clients.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results you want the request to return when listing the user pool clients.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-user-pools",
      description: "Lists the user pools associated with an AWS account.",
      options: [
        {
          name: "--next-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results you want the request to return when listing the user pools.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-users",
      description: "Lists the users in the Amazon Cognito user pool.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool on which the search should be performed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes-to-get",
          description:
            "An array of strings, where each string is the name of a user attribute to be returned for each user in the search results. If the array is null, all attributes are returned.",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description: "Maximum number of users to be returned.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pagination-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            'A filter string of the form "AttributeName Filter-Type "AttributeValue"". Quotation marks within the filter string must be escaped using the backslash (\\) character. For example, "family_name = \\"Reddy\\"".    AttributeName: The name of the attribute to search for. You can only search for one attribute at a time.    Filter-Type: For an exact match, use =, for example, "given_name = \\"Jon\\"". For a prefix ("starts with") match, use ^=, for example, "given_name ^= \\"Jon\\"".     AttributeValue: The attribute value that must be matched for each user.   If the filter string is empty, ListUsers returns all users in the user pool. You can only search for the following standard attributes:    username (case-sensitive)    email     phone_number     name     given_name     family_name     preferred_username     cognito:user_status (called Status in the Console) (case-insensitive)    status (called Enabled in the Console) (case-sensitive)     sub    Custom attributes are not searchable. For more information, see Searching for Users Using the ListUsers API and Examples of Using the ListUsers API in the Amazon Cognito Developer Guide.',
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-users-in-group",
      description:
        "Lists the users in the specified group. Calling this action requires developer credentials.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description: "The name of the group.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The limit of the request to list users.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "resend-confirmation-code",
      description:
        "Resends the confirmation (for confirmation of registration) to a specific user in the user pool.",
      options: [
        {
          name: "--client-id",
          description: "The ID of the client associated with the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--username",
          description:
            "The user name of the user to whom you wish to resend a confirmation code.",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The Amazon Pinpoint analytics metadata for collecting metrics for ResendConfirmationCode calls.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.  You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the ResendConfirmationCode API action, Amazon Cognito invokes the function that is assigned to the custom message trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your ResendConfirmationCode request. In your function code in AWS Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "respond-to-auth-challenge",
      description: "Responds to the authentication challenge.",
      options: [
        {
          name: "--client-id",
          description: "The app client ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--challenge-name",
          description:
            "The challenge name. For more information, see InitiateAuth.  ADMIN_NO_SRP_AUTH is not a valid value.",
          args: {
            name: "string",
          },
        },
        {
          name: "--session",
          description:
            "The session which should be passed both ways in challenge-response calls to the service. If InitiateAuth or RespondToAuthChallenge API call determines that the caller needs to go through another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next RespondToAuthChallenge API call.",
          args: {
            name: "string",
          },
        },
        {
          name: "--challenge-responses",
          description:
            "The challenge responses. These are inputs corresponding to the value of ChallengeName, for example:   SECRET_HASH (if app client is configured with client secret) applies to all inputs below (including SOFTWARE_TOKEN_MFA).     SMS_MFA: SMS_MFA_CODE, USERNAME.    PASSWORD_VERIFIER: PASSWORD_CLAIM_SIGNATURE, PASSWORD_CLAIM_SECRET_BLOCK, TIMESTAMP, USERNAME.    NEW_PASSWORD_REQUIRED: NEW_PASSWORD, any other required attributes, USERNAME.     SOFTWARE_TOKEN_MFA: USERNAME and SOFTWARE_TOKEN_MFA_CODE are required attributes.    DEVICE_SRP_AUTH requires USERNAME, DEVICE_KEY, SRP_A (and SECRET_HASH).    DEVICE_PASSWORD_VERIFIER requires everything that PASSWORD_VERIFIER requires plus DEVICE_KEY.    MFA_SETUP requires USERNAME, plus you need to use the session value returned by VerifySoftwareToken in the Session parameter.",
          args: {
            name: "map",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The Amazon Pinpoint analytics metadata for collecting metrics for RespondToAuthChallenge calls.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.  You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the RespondToAuthChallenge API action, Amazon Cognito invokes any functions that are assigned to the following triggers: post authentication, pre token generation, define auth challenge, create auth challenge, and verify auth challenge. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your RespondToAuthChallenge request. In your function code in AWS Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "set-risk-configuration",
      description:
        "Configures actions on detected risks. To delete the risk configuration for UserPoolId or ClientId, pass null values for all four configuration types. To enable Amazon Cognito advanced security features, update the user pool to include the UserPoolAddOns keyAdvancedSecurityMode.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The app client ID. If ClientId is null, then the risk configuration is mapped to userPoolId. When the client ID is null, the same risk configuration is applied to all the clients in the userPool. Otherwise, ClientId is mapped to the client. When the client ID is not null, the user pool configuration is overridden and the risk configuration for the client is used instead.",
          args: {
            name: "string",
          },
        },
        {
          name: "--compromised-credentials-risk-configuration",
          description: "The compromised credentials risk configuration.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--account-takeover-risk-configuration",
          description: "The account takeover risk configuration.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--risk-exception-configuration",
          description: "The configuration to override the risk decision.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "set-ui-customization",
      description:
        "Sets the UI customization information for a user pool's built-in app UI. You can specify app UI customization settings for a single client (with a specific clientId) or for all clients (by setting the clientId to ALL). If you specify ALL, the default configuration will be used for every client that has no UI customization set previously. If you specify UI customization settings for a particular client, it will no longer fall back to the ALL configuration.   To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The client ID for the client app.",
          args: {
            name: "string",
          },
        },
        {
          name: "--css",
          description: "The CSS values in the UI customization.",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-file",
          description: "The uploaded logo image for the UI customization.",
          args: {
            name: "blob",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "set-user-mfa-preference",
      description:
        "Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are enabled and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are enabled. If multiple options are enabled and no preference is set, a challenge to choose an MFA option will be returned during sign in. If an MFA type is enabled for a user, the user will be prompted for MFA during all sign in attempts, unless device tracking is turned on and the device has been trusted. If you would like MFA to be applied selectively based on the assessed risk level of sign in attempts, disable MFA for users and turn on Adaptive Authentication for the user pool.",
      options: [
        {
          name: "--sms-mfa-settings",
          description:
            "The SMS text message multi-factor authentication (MFA) settings.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--software-token-mfa-settings",
          description:
            "The time-based one-time password software token MFA settings.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--access-token",
          description: "The access token for the user.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "set-user-pool-mfa-config",
      description:
        "Set the user pool multi-factor authentication (MFA) configuration.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sms-mfa-configuration",
          description: "The SMS text message MFA configuration.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--software-token-mfa-configuration",
          description: "The software token MFA configuration.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mfa-configuration",
          description:
            "The MFA configuration. Users who don't have an MFA factor set up won't be able to sign-in if you set the MfaConfiguration value to \u2018ON\u2019. See Adding Multi-Factor Authentication (MFA) to a User Pool to learn more. Valid values include:    OFF MFA will not be used for any users.    ON MFA is required for all users to sign in.    OPTIONAL MFA will be required only for individual users who have an MFA factor enabled.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "set-user-settings",
      description:
        "This action is no longer supported. You can use it to configure only SMS MFA. You can't use it to configure TOTP software token MFA. To configure either type of MFA, use SetUserMFAPreference instead.",
      options: [
        {
          name: "--access-token",
          description: "The access token for the set user settings request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--mfa-options",
          description:
            "You can use this parameter only to set an SMS configuration that uses SMS for delivery.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "sign-up",
      description:
        "Registers the user in the specified user pool and creates a user name, password, and user attributes.",
      options: [
        {
          name: "--client-id",
          description: "The ID of the client associated with the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The user name of the user you wish to register.",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description: "The password of the user you wish to register.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attributes",
          description:
            "An array of name-value pairs representing user attributes. For custom attributes, you must prepend the custom: prefix to the attribute name.",
          args: {
            name: "list",
          },
        },
        {
          name: "--validation-data",
          description: "The validation data in the request to register a user.",
          args: {
            name: "list",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The Amazon Pinpoint analytics metadata for collecting metrics for SignUp calls.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.  You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the SignUp API action, Amazon Cognito invokes any functions that are assigned to the following triggers: pre sign-up, custom message, and post confirmation. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your SignUp request. In your function code in AWS Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-user-import-job",
      description: "Starts the user import.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that the users are being imported into.",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the user import job.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-user-import-job",
      description: "Stops the user import job.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that the users are being imported into.",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the user import job.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "tag-resource",
      description:
        "Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria. Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an Environment tag key to both user pools. The value of this key might be Test for one user pool and Production for the other. Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an IAM policy, you can constrain permissions for user pools based on specific tags or tag values. You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the user pool to assign the tags to.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to assign to the user pool.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description:
        "Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5 times per second, per account",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the user pool that the tags are assigned to.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to remove from the user pool.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-auth-event-feedback",
      description:
        "Provides the feedback for an authentication event whether it was from a valid user or not. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The user pool username.",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-id",
          description: "The event ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--feedback-token",
          description: "The feedback token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--feedback-value",
          description: "The authentication event feedback value.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-device-status",
      description: "Updates the device status.",
      options: [
        {
          name: "--access-token",
          description: "The access token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description: "The device key.",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-remembered-status",
          description: "The status of whether a device is remembered.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-group",
      description:
        "Updates the specified group with the specified attributes. Calling this action requires developer credentials.  If you don't provide a value for an attribute, it will be set to the default value.",
      options: [
        {
          name: "--group-name",
          description: "The name of the group.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A string containing the new description of the group.",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The new role ARN for the group. This is used for setting the cognito:roles and cognito:preferred_role claims in the token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--precedence",
          description:
            "The new precedence value for the group. For more information about this parameter, see CreateGroup.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-identity-provider",
      description: "Updates identity provider information for a user pool.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-name",
          description: "The identity provider name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-details",
          description:
            "The identity provider details to be updated, such as MetadataURL and MetadataFile.",
          args: {
            name: "map",
          },
        },
        {
          name: "--attribute-mapping",
          description: "The identity provider attribute mapping to be changed.",
          args: {
            name: "map",
          },
        },
        {
          name: "--idp-identifiers",
          description: "A list of identity provider identifiers.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-resource-server",
      description:
        "Updates the name and scopes of resource server. All other fields are read-only.  If you don't provide a value for an attribute, it will be set to the default value.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier for the resource server.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the resource server.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scopes",
          description: "The scope values to be set for the resource server.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-user-attributes",
      description:
        "Allows a user to update a specific attribute (one at a time).",
      options: [
        {
          name: "--user-attributes",
          description:
            "An array of name-value pairs representing user attributes. For custom attributes, you must prepend the custom: prefix to the attribute name.",
          args: {
            name: "list",
          },
        },
        {
          name: "--access-token",
          description:
            "The access token for the request to update user attributes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.  You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the UpdateUserAttributes API action, Amazon Cognito invokes the function that is assigned to the custom message trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your UpdateUserAttributes request. In your function code in AWS Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see Customizing User Pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  Take the following limitations into consideration when you use the ClientMetadata parameter:   Amazon Cognito does not store the ClientMetadata value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration does not include triggers, the ClientMetadata parameter serves no purpose.   Amazon Cognito does not validate the ClientMetadata value.   Amazon Cognito does not encrypt the the ClientMetadata value, so don't use it to provide sensitive information.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-user-pool",
      description:
        "Updates the specified user pool with the specified attributes. You can get a list of the current user pool settings using DescribeUserPool.  If you don't provide a value for an attribute, it will be set to the default value.",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool you want to update.",
          args: {
            name: "string",
          },
        },
        {
          name: "--policies",
          description:
            "A container with the policies you wish to update in a user pool.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lambda-config",
          description:
            "The AWS Lambda configuration information from the request to update the user pool.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-verified-attributes",
          description:
            "The attributes that are automatically verified when the Amazon Cognito service makes a request to update user pools.",
          args: {
            name: "list",
          },
        },
        {
          name: "--sms-verification-message",
          description:
            "A container with information about the SMS verification message.",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-verification-message",
          description: "The contents of the email verification message.",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-verification-subject",
          description: "The subject of the email verification message.",
          args: {
            name: "string",
          },
        },
        {
          name: "--verification-message-template",
          description: "The template for verification messages.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sms-authentication-message",
          description: "The contents of the SMS authentication message.",
          args: {
            name: "string",
          },
        },
        {
          name: "--mfa-configuration",
          description:
            'Can be one of the following values:    OFF - MFA tokens are not required and cannot be specified during user registration.    ON - MFA tokens are required for all user registrations. You can only specify ON when you are initially creating a user pool. You can use the SetUserPoolMfaConfig API operation to turn MFA "ON" for existing user pools.     OPTIONAL - Users have the option when registering to create an MFA token.',
          args: {
            name: "string",
          },
        },
        {
          name: "--device-configuration",
          description: "Device configuration.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--email-configuration",
          description: "Email configuration.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sms-configuration",
          description: "SMS configuration.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-pool-tags",
          description:
            "The tag keys and values to assign to the user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.",
          args: {
            name: "map",
          },
        },
        {
          name: "--admin-create-user-config",
          description: "The configuration for AdminCreateUser requests.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-pool-add-ons",
          description:
            'Used to enable advanced security risk detection. Set the key AdvancedSecurityMode to the value "AUDIT".',
          args: {
            name: "structure",
          },
        },
        {
          name: "--account-recovery-setting",
          description:
            "Use this setting to define which verified available method a user can use to recover their password when they call ForgotPassword. It allows you to define a preferred method when a user has more than one method available. With this setting, SMS does not qualify for a valid password recovery mechanism if the user also has SMS MFA enabled. In the absence of this setting, Cognito uses the legacy behavior to determine the recovery method where SMS is preferred over email.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-user-pool-client",
      description:
        "Updates the specified user pool app client with the specified attributes. You can get a list of the current user pool app client settings using DescribeUserPoolClient.  If you don't provide a value for an attribute, it will be set to the default value.",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to update the user pool client.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The ID of the client associated with the user pool.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-name",
          description:
            "The client name from the update user pool client request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--refresh-token-validity",
          description:
            "The time limit, in days, after which the refresh token is no longer valid and cannot be used.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--access-token-validity",
          description:
            "The time limit, after which the access token is no longer valid and cannot be used.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--id-token-validity",
          description:
            "The time limit, after which the ID token is no longer valid and cannot be used.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--token-validity-units",
          description:
            "The units in which the validity times are represented in. Default for RefreshToken is days, and default for ID and access tokens are hours.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--read-attributes",
          description: "The read-only attributes of the user pool.",
          args: {
            name: "list",
          },
        },
        {
          name: "--write-attributes",
          description: "The writeable attributes of the user pool.",
          args: {
            name: "list",
          },
        },
        {
          name: "--explicit-auth-flows",
          description:
            "The authentication flows that are supported by the user pool clients. Flow names without the ALLOW_ prefix are deprecated in favor of new names with the ALLOW_ prefix. Note that values with ALLOW_ prefix cannot be used along with values without ALLOW_ prefix. Valid values include:    ALLOW_ADMIN_USER_PASSWORD_AUTH: Enable admin based user password authentication flow ADMIN_USER_PASSWORD_AUTH. This setting replaces the ADMIN_NO_SRP_AUTH setting. With this authentication flow, Cognito receives the password in the request instead of using the SRP (Secure Remote Password protocol) protocol to verify passwords.    ALLOW_CUSTOM_AUTH: Enable Lambda trigger based authentication.    ALLOW_USER_PASSWORD_AUTH: Enable user password-based authentication. In this flow, Cognito receives the password in the request instead of using the SRP protocol to verify passwords.    ALLOW_USER_SRP_AUTH: Enable SRP based authentication.    ALLOW_REFRESH_TOKEN_AUTH: Enable authflow to refresh tokens.",
          args: {
            name: "list",
          },
        },
        {
          name: "--supported-identity-providers",
          description:
            "A list of provider names for the identity providers that are supported on this client.",
          args: {
            name: "list",
          },
        },
        {
          name: "--callback-urls",
          description:
            "A list of allowed redirect (callback) URLs for the identity providers. A redirect URI must:   Be an absolute URI.   Be registered with the authorization server.   Not include a fragment component.   See OAuth 2.0 - Redirection Endpoint. Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only. App callback URLs such as myapp://example are also supported.",
          args: {
            name: "list",
          },
        },
        {
          name: "--logout-urls",
          description:
            "A list of allowed logout URLs for the identity providers.",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-redirect-uri",
          description:
            "The default redirect URI. Must be in the CallbackURLs list. A redirect URI must:   Be an absolute URI.   Be registered with the authorization server.   Not include a fragment component.   See OAuth 2.0 - Redirection Endpoint. Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only. App callback URLs such as myapp://example are also supported.",
          args: {
            name: "string",
          },
        },
        {
          name: "--allowed-o-auth-flows",
          description:
            "The allowed OAuth flows. Set to code to initiate a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the token endpoint. Set to implicit to specify that the client should get the access token (and, optionally, ID token, based on scopes) directly. Set to client_credentials to specify that the client should get the access token (and, optionally, ID token, based on scopes) from the token endpoint using a combination of client and client_secret.",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-o-auth-scopes",
          description:
            "The allowed OAuth scopes. Possible values provided by OAuth are: phone, email, openid, and profile. Possible values provided by AWS are: aws.cognito.signin.user.admin. Custom scopes created in Resource Servers are also supported.",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-o-auth-flows-user-pool-client",
          description:
            "Set to true if the client is allowed to follow the OAuth protocol when interacting with Cognito user pools.",
        },
        {
          name: "--no-allowed-o-auth-flows-user-pool-client",
          description:
            "Set to true if the client is allowed to follow the OAuth protocol when interacting with Cognito user pools.",
        },
        {
          name: "--analytics-configuration",
          description:
            "The Amazon Pinpoint analytics configuration for collecting metrics for this user pool.  In regions where Pinpoint is not available, Cognito User Pools only supports sending events to Amazon Pinpoint projects in us-east-1. In regions where Pinpoint is available, Cognito User Pools will support sending events to Amazon Pinpoint projects within that same region.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--prevent-user-existence-errors",
          description:
            "Use this setting to choose which errors and responses are returned by Cognito APIs during authentication, account confirmation, and password recovery when the user does not exist in the user pool. When set to ENABLED and the user does not exist, authentication returns an error indicating either the username or password was incorrect, and account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to LEGACY, those APIs will return a UserNotFoundException exception if the user does not exist in the user pool. Valid values include:    ENABLED - This prevents user existence-related errors.    LEGACY - This represents the old behavior of Cognito where user existence related errors are not prevented.    After February 15th 2020, the value of PreventUserExistenceErrors will default to ENABLED for newly created user pool clients if no value is provided.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-user-pool-domain",
      description:
        "Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool. You can use this operation to provide the Amazon Resource Name (ARN) of a new certificate to Amazon Cognito. You cannot use it to change the domain for a user pool. A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and sign-in pages for your application. When you set up a custom domain, you provide a certificate that you manage with AWS Certificate Manager (ACM). When necessary, you can use this operation to change the certificate that you applied to your custom domain. Usually, this is unnecessary following routine certificate renewal with ACM. When you renew your existing certificate in ACM, the ARN for your certificate remains the same, and your custom domain uses the new certificate automatically. However, if you replace your existing certificate with a new one, ACM gives the new certificate a new ARN. To apply the new certificate to your custom domain, you must provide this ARN to Amazon Cognito. When you add your new certificate in ACM, you must choose US East (N. Virginia) as the AWS Region. After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain. For more information about adding a custom domain to your user pool, see Using Your Own Domain for the Hosted UI.",
      options: [
        {
          name: "--domain",
          description:
            "The domain name for the custom domain that hosts the sign-up and sign-in pages for your application. For example: auth.example.com.  This string can include only lowercase letters, numbers, and hyphens. Do not use a hyphen for the first or last character. Use periods to separate subdomain names.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that is associated with the custom domain that you are updating the certificate for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-domain-config",
          description:
            "The configuration for a custom domain that hosts the sign-up and sign-in pages for your application. Use this object to specify an SSL certificate that is managed by ACM.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "verify-software-token",
      description:
        "Use this API to register a user's entered TOTP code and mark the user's software token MFA status as \"verified\" if successful. The request takes an access token or a session string, but not both.",
      options: [
        {
          name: "--access-token",
          description: "The access token.",
          args: {
            name: "string",
          },
        },
        {
          name: "--session",
          description:
            "The session which should be passed both ways in challenge-response calls to the service.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-code",
          description:
            'The one time password computed using the secret code returned by AssociateSoftwareToken".',
          args: {
            name: "string",
          },
        },
        {
          name: "--friendly-device-name",
          description: "The friendly device name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "verify-user-attribute",
      description: "Verifies the specified user attributes in the user pool.",
      options: [
        {
          name: "--access-token",
          description:
            "Represents the access token of the request to verify user attributes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-name",
          description:
            "The attribute name in the request to verify user attributes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--code",
          description:
            "The verification code in the request to verify user attributes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
  ],
};
