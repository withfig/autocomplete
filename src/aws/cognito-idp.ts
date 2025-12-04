const completionSpec: Fig.Spec = {
  name: "cognito-idp",
  description:
    "With the Amazon Cognito user pools API, you can configure user pools and authenticate users. To authenticate users from third-party identity providers (IdPs) in this API, you can link IdP users to native user profiles. Learn more about the authentication and authorization of federated users at Adding user pool sign-in through a third party and in the User pool federation endpoints and hosted UI reference. This API reference provides detailed information about API operations and object types in Amazon Cognito. Along with resource management operations, the Amazon Cognito user pools API includes classes of operations and authorization models for client-side and server-side authentication of users. You can interact with operations in the Amazon Cognito user pools API as any of the following subjects.   An administrator who wants to configure user pools, app clients, users, groups, or other user pool functions.   A server-side app, like a web application, that wants to use its Amazon Web Services privileges to manage, authenticate, or authorize a user.   A client-side app, like a mobile app, that wants to make unauthenticated requests to manage, authenticate, or authorize a user.   For more information, see Using the Amazon Cognito user pools API and user pool endpoints in the Amazon Cognito Developer Guide. With your Amazon Web Services SDK, you can build the logic to support operational flows in every use case for this API. You can also make direct REST API requests to Amazon Cognito user pools service endpoints. The following links can get you started with the CognitoIdentityProvider client in other supported Amazon Web Services SDKs.    Amazon Web Services Command Line Interface     Amazon Web Services SDK for .NET     Amazon Web Services SDK for C++     Amazon Web Services SDK for Go     Amazon Web Services SDK for Java V2     Amazon Web Services SDK for JavaScript     Amazon Web Services SDK for PHP V3     Amazon Web Services SDK for Python     Amazon Web Services SDK for Ruby V3    To get started with an Amazon Web Services SDK, see Tools to Build on Amazon Web Services. For example actions and scenarios, see Code examples for Amazon Cognito Identity Provider using Amazon Web Services SDKs",
  subcommands: [
    {
      name: "add-custom-attributes",
      description:
        "Adds additional user attributes to the user pool schema.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to add custom attributes",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-attributes",
          description:
            "An array of custom attributes, such as Mutable and Name",
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
      name: "admin-add-user-to-group",
      description:
        "Adds a user to a group. A user who is in a group can present a preferred-role claim to an identity pool, and populates a cognito:groups claim to their access and identity tokens.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description:
            "The name of the group that you want to add your user to",
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
      name: "admin-confirm-sign-up",
      description:
        "This IAM-authenticated API operation confirms user sign-up as an administrator. Unlike ConfirmSignUp, your IAM credentials authorize user account confirmation. No confirmation code is required. This request sets a user account active in a user pool that requires confirmation of new user accounts before they can sign in. You can configure your user pool to not send confirmation codes to new users and instead confirm them with this API operation on the back end.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for which you want to confirm user registration",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. If your user pool configuration includes triggers, the AdminConfirmSignUp API action invokes the Lambda function that is specified for the post confirmation trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. In this payload, the clientMetadata attribute provides the data that you assigned to the ClientMetadata parameter in your AdminConfirmSignUp request. In your function code in Lambda, you can process the ClientMetadata value to enhance your workflow for your specific needs. For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
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
      name: "admin-create-user",
      description:
        "Creates a new user in the specified user pool. If MessageAction isn't set, the default is to send a welcome message via email or phone (SMS).  This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.  This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password. Alternatively, you can call AdminCreateUser with SUPPRESS for the MessageAction parameter, and Amazon Cognito won't send any email.  In either case, if the user has a password, they will be in the FORCE_CHANGE_PASSWORD state until they sign in and set their password. Your invitation message template must have the {####} password placeholder if your users have passwords. If your template doesn't have this placeholder, Amazon Cognito doesn't deliver the invitation message. In this case, you must update your message template and resend the password with a new AdminCreateUser request with a MessageAction value of RESEND.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where the user will be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The value that you want to set as the username sign-in attribute. The following conditions apply to the username parameter.   The username can't be a duplicate of another username in the same user pool.   You can't change the value of a username after you create it.   You can only provide a value if usernames are a valid sign-in attribute for your user pool. If your user pool only supports phone numbers or email addresses as sign-in attributes, Amazon Cognito automatically generates a username value. For more information, see Customizing sign-in attributes",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attributes",
          description:
            'An array of name-value pairs that contain user attributes and attribute values to be set for the user to be created. You can create a user without specifying any attributes other than Username. However, any attributes that you specify as required (when creating a user pool or in the Attributes tab of the console) either you should supply (in your call to AdminCreateUser) or the user should supply (when they sign up in response to your welcome message). For custom attributes, you must prepend the custom: prefix to the attribute name. To send a message inviting the user to sign up, you must specify the user\'s email address or phone number. You can do this in your call to AdminCreateUser or in the Users tab of the Amazon Cognito console for managing your user pools. You must also provide an email address or phone number when you expect the user to do passwordless sign-in with an email or SMS OTP. These attributes must be provided when passwordless options are the only available, or when you don\'t submit a TemporaryPassword. In your call to AdminCreateUser, you can set the email_verified attribute to True, and you can set the phone_number_verified attribute to True. You can also do this by calling AdminUpdateUserAttributes.    email: The email address of the user to whom the message that contains the code and username will be sent. Required if the email_verified attribute is set to True, or if "EMAIL" is specified in the DesiredDeliveryMediums parameter.    phone_number: The phone number of the user to whom the message that contains the code and username will be sent. Required if the phone_number_verified attribute is set to True, or if "SMS" is specified in the DesiredDeliveryMediums parameter',
          args: {
            name: "list",
          },
        },
        {
          name: "--validation-data",
          description:
            "Temporary user attributes that contribute to the outcomes of your pre sign-up Lambda trigger. This set of key-value pairs are for custom validation of information that you collect from your users but don't need to retain. Your Lambda function can analyze this additional data and act on it. Your function might perform external API operations like logging user attributes and validation data to Amazon CloudWatch Logs. Validation data might also affect the response that your function returns to Amazon Cognito, like automatically confirming the user if they sign up from within your network. For more information about the pre sign-up Lambda trigger, see Pre sign-up Lambda trigger",
          args: {
            name: "list",
          },
        },
        {
          name: "--temporary-password",
          description:
            "The user's temporary password. This password must conform to the password policy that you specified when you created the user pool. The exception to the requirement for a password is when your user pool supports passwordless sign-in with email or SMS OTPs. To create a user with no password, omit this parameter or submit a blank value. You can only create a passwordless user when passwordless sign-in is available. See the SignInPolicyType property of CreateUserPool and UpdateUserPool. The temporary password is valid only once. To complete the Admin Create User flow, the user must enter the temporary password in the sign-in page, along with a new password to be used in all future sign-ins. If you don't specify a value, Amazon Cognito generates one for you unless you have passwordless options active for your user pool. The temporary password can only be used until the user account expiration limit that you set for your user pool. To reset the account after that time limit, you must call AdminCreateUser again and specify RESEND for the MessageAction parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-alias-creation",
          description:
            "This parameter is used only if the phone_number_verified or email_verified attribute is set to True. Otherwise, it is ignored. If this parameter is set to True and the phone number or email address specified in the UserAttributes parameter already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user. The previous user will no longer be able to log in using that alias. If this parameter is set to False, the API throws an AliasExistsException error if the alias already exists. The default value is False",
        },
        {
          name: "--no-force-alias-creation",
          description:
            "This parameter is used only if the phone_number_verified or email_verified attribute is set to True. Otherwise, it is ignored. If this parameter is set to True and the phone number or email address specified in the UserAttributes parameter already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user. The previous user will no longer be able to log in using that alias. If this parameter is set to False, the API throws an AliasExistsException error if the alias already exists. The default value is False",
        },
        {
          name: "--message-action",
          description:
            "Set to RESEND to resend the invitation message to a user that already exists and reset the expiration limit on the user's account. Set to SUPPRESS to suppress sending the message. You can specify only one value",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-delivery-mediums",
          description:
            'Specify "EMAIL" if email will be used to send the welcome message. Specify "SMS" if the phone number will be used. The default value is "SMS". You can specify more than one value',
          args: {
            name: "list",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When you use the AdminCreateUser API action, Amazon Cognito invokes the function that is assigned to the pre sign-up trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminCreateUser request. In your function code in Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
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
      name: "admin-delete-user",
      description:
        "Deletes a user as an administrator. Works on any user.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to delete the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
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
      name: "admin-delete-user-attributes",
      description:
        "Deletes the user attributes in a user pool as an administrator. Works on any user.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to delete user attributes",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attribute-names",
          description:
            "An array of strings representing the user attribute names you want to delete. For custom attributes, you must prepend the custom: prefix to the attribute name",
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
      name: "admin-disable-provider-for-user",
      description:
        "Prevents the user from signing in with the specified external (SAML or social) identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools native username + password user, they can't use their password to sign in. If the user to deactivate is a linked external IdP user, any link between that user and an existing user is removed. When the external user signs in again, and the user is no longer attached to the previously linked DestinationUser, the user must create a new user account. See AdminLinkProviderForUser. The ProviderName must match the value specified when creating an IdP for the pool.  To deactivate a native username + password user, the ProviderName value must be Cognito and the ProviderAttributeName must be Cognito_Subject. The ProviderAttributeValue must be the name that is used in the user pool for the user. The ProviderAttributeName must always be Cognito_Subject for social IdPs. The ProviderAttributeValue must always be the exact subject that was used when the user was originally linked as a source user. For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign in, the ProviderAttributeName and ProviderAttributeValue must be the same values that were used for the SourceUser when the identities were originally linked using  AdminLinkProviderForUser call. (If the linking was done with ProviderAttributeName set to Cognito_Subject, the same applies here). However, if the user has already signed in, the ProviderAttributeName must be Cognito_Subject and ProviderAttributeValue must be the subject of the SAML assertion.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--user",
          description: "The user to be disabled",
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
      name: "admin-disable-user",
      description:
        "Deactivates a user and revokes all access tokens for the user. A deactivated user can't sign in, but still appears in the responses to GetUser and ListUsers API requests.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to disable the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
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
      name: "admin-enable-user",
      description:
        "Enables the specified user as an administrator. Works on any user.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to enable the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
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
      name: "admin-forget-device",
      description:
        "Forgets the device, as an administrator.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description: "The device key",
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
      name: "admin-get-device",
      description:
        "Gets the device, as an administrator.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--device-key",
          description: "The device key",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
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
      name: "admin-get-user",
      description:
        "Gets the specified user by user name in a user pool as an administrator. Works on any user. This operation contributes to your monthly active user (MAU) count for the purpose of billing.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to get information about the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
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
      name: "admin-initiate-auth",
      description:
        "Initiates the authentication flow, as an administrator.  This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the Amazon Cognito user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The app client ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-flow",
          description:
            "The authentication flow that you want to initiate. The AuthParameters that you must submit are linked to the flow that you submit. For example:    USER_AUTH: Request a preferred authentication type or review available authentication types. From the offered authentication types, select one in a challenge response and then authenticate with that method in an additional challenge response.    REFRESH_TOKEN_AUTH: Receive new ID and access tokens when you pass a REFRESH_TOKEN parameter with a valid refresh token as the value.    USER_SRP_AUTH: Receive secure remote password (SRP) variables for the next challenge, PASSWORD_VERIFIER, when you pass USERNAME and SRP_A parameters..    ADMIN_USER_PASSWORD_AUTH: Receive new tokens or the next challenge, for example SOFTWARE_TOKEN_MFA, when you pass USERNAME and PASSWORD parameters.   Valid values include the following:  USER_AUTH  The entry point for sign-in with passwords, one-time passwords, biometric devices, and security keys.  USER_SRP_AUTH  Username-password authentication with the Secure Remote Password (SRP) protocol. For more information, see Use SRP password verification in custom authentication flow.  REFRESH_TOKEN_AUTH and REFRESH_TOKEN  Provide a valid refresh token and receive new ID and access tokens. For more information, see Using the refresh token.  CUSTOM_AUTH  Custom authentication with Lambda triggers. For more information, see Custom authentication challenge Lambda triggers.  ADMIN_USER_PASSWORD_AUTH  Username-password authentication with the password sent directly in the request. For more information, see Admin authentication flow.    USER_PASSWORD_AUTH is a flow type of InitiateAuth and isn't valid for AdminInitiateAuth",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-parameters",
          description:
            "The authentication parameters. These are inputs corresponding to the AuthFlow that you're invoking. The required values depend on the value of AuthFlow:   For USER_AUTH: USERNAME (required), PREFERRED_CHALLENGE. If you don't provide a value for PREFERRED_CHALLENGE, Amazon Cognito responds with the AvailableChallenges parameter that specifies the available sign-in methods.   For USER_SRP_AUTH: USERNAME (required), SRP_A (required), SECRET_HASH (required if the app client is configured with a client secret), DEVICE_KEY.   For ADMIN_USER_PASSWORD_AUTH: USERNAME (required), PASSWORD (required), SECRET_HASH (required if the app client is configured with a client secret), DEVICE_KEY.   For REFRESH_TOKEN_AUTH/REFRESH_TOKEN: REFRESH_TOKEN (required), SECRET_HASH (required if the app client is configured with a client secret), DEVICE_KEY.   For CUSTOM_AUTH: USERNAME (required), SECRET_HASH (if app client is configured with client secret), DEVICE_KEY. To start the authentication flow with password verification, include ChallengeName: SRP_A and SRP_A: (The SRP_A Value).   For more information about SECRET_HASH, see Computing secret hash values. For information about DEVICE_KEY, see Working with user devices in your user pool",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for certain custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When you use the AdminInitiateAuth API action, Amazon Cognito invokes the Lambda functions that are specified for various triggers. The ClientMetadata value is passed as input to the functions for only the following triggers:   Pre signup   Pre authentication   User migration   When Amazon Cognito invokes the functions for these triggers, it passes a JSON payload, which the function receives as input. This payload contains a validationData attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminInitiateAuth request. In your function code in Lambda, you can process the validationData value to enhance your workflow for your specific needs. When you use the AdminInitiateAuth API action, Amazon Cognito also invokes the functions for the following triggers, but it doesn't provide the ClientMetadata value as input:   Post authentication   Custom message   Pre token generation   Create auth challenge   Define auth challenge   Custom email sender   Custom SMS sender   For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The analytics metadata for collecting Amazon Pinpoint metrics for AdminInitiateAuth calls",
          args: {
            name: "structure",
          },
        },
        {
          name: "--context-data",
          description:
            "Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests",
          args: {
            name: "structure",
          },
        },
        {
          name: "--session",
          description:
            "The optional session ID from a ConfirmSignUp API request. You can sign in a user directly from the sign-up process with the USER_AUTH authentication flow",
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
      name: "admin-link-provider-for-user",
      description:
        "Links an existing user account in a user pool (DestinationUser) to an identity from an external IdP (SourceUser) based on a specified attribute name and value from the external IdP. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in. You can then use the federated user identity to sign in as the existing user account.   For example, if there is an existing user with a username and password, this API links that user to a federated user identity. When the user signs in with a federated user identity, they sign in as the existing user account.  The maximum number of federated identities linked to a user is five.   Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external IdPs and provider attributes that have been trusted by the application owner.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-user",
          description:
            "The existing user in the user pool that you want to assign to the external IdP user account. This user can be a local (Username + Password) Amazon Cognito user pools user or a federated user (for example, a SAML or Facebook user). If the user doesn't exist, Amazon Cognito generates an exception. Amazon Cognito returns this user when the new user (with the linked IdP attribute) signs in. For a native username + password user, the ProviderAttributeValue for the DestinationUser should be the username in the user pool. For a federated user, it should be the provider-specific user_id. The ProviderAttributeName of the DestinationUser is ignored. The ProviderName should be set to Cognito for users in Cognito user pools.  All attributes in the DestinationUser profile must be mutable. If you have assigned the user any immutable custom attributes, the operation won't succeed",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-user",
          description:
            "An external IdP account for a user who doesn't exist yet in the user pool. This user must be a federated user (for example, a SAML or Facebook user), not another native user. If the SourceUser is using a federated social IdP, such as Facebook, Google, or Login with Amazon, you must set the ProviderAttributeName to Cognito_Subject. For social IdPs, the ProviderName will be Facebook, Google, or LoginWithAmazon, and Amazon Cognito will automatically parse the Facebook, Google, and Login with Amazon tokens for id, sub, and user_id, respectively. The ProviderAttributeValue for the user must be the same value as the id, sub, or user_id value found in the social IdP token. For OIDC, the ProviderAttributeName can be any mapped value from a claim in the ID token, or that your app retrieves from the userInfo endpoint. For SAML, the ProviderAttributeName can be any mapped value from a claim in the SAML assertion. The following additional considerations apply to SourceUser for OIDC and SAML providers.   You must map the claim to a user pool attribute in your IdP configuration, and set the user pool attribute name as the value of ProviderAttributeName in your AdminLinkProviderForUser request. For example, email.   When you set ProviderAttributeName to Cognito_Subject, Amazon Cognito will automatically parse the default unique identifier found in the subject from the IdP token",
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
      name: "admin-list-devices",
      description:
        "Lists a user's registered devices.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The limit of the devices request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pagination-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
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
      name: "admin-list-groups-for-user",
      description:
        "Lists the groups that a user belongs to.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The limit of the request to list groups",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list",
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
      name: "admin-list-user-auth-events",
      description:
        "A history of user activity and any risks detected as part of Amazon Cognito advanced security.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of authentication events to return. Returns 60 events if you set MaxResults to 0, or if you don't include a MaxResults parameter",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A pagination token",
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
      name: "admin-remove-user-from-group",
      description:
        "Removes the specified user from the specified group.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description: "The group name",
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
      name: "admin-reset-user-password",
      description:
        "Resets the specified user's password in a user pool as an administrator. Works on any user. To use this API operation, your user pool must have self-service account recovery configured. Use AdminSetUserPassword if you manage passwords as an administrator.  This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.  Deactivates a user's password, requiring them to change it. If a user tries to sign in after the API is called, Amazon Cognito responds with a PasswordResetRequiredException error. Your app must then perform the actions that reset your user's password: the forgot-password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to reset the user's password",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When you use the AdminResetUserPassword API action, Amazon Cognito invokes the function that is assigned to the custom message trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminResetUserPassword request. In your function code in Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs.  For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
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
      name: "admin-respond-to-auth-challenge",
      description:
        "Some API operations in a user pool generate a challenge, like a prompt for an MFA code, for device authentication that bypasses MFA, or for a custom authentication challenge. An AdminRespondToAuthChallenge API request provides the answer to that challenge, like a code or a secure remote password (SRP). The parameters of a response to an authentication challenge vary with the type of challenge. For more information about custom authentication challenges, see Custom authentication challenge Lambda triggers.  This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the Amazon Cognito user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The app client ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--challenge-name",
          description:
            "The challenge name. For more information, see AdminInitiateAuth",
          args: {
            name: "string",
          },
        },
        {
          name: "--challenge-responses",
          description:
            'The responses to the challenge that you received in the previous request. Each challenge has its own required response parameters. The following examples are partial JSON request bodies that highlight challenge-response parameters.  You must provide a SECRET_HASH parameter in all challenge responses to an app client that has a client secret. Include a DEVICE_KEY for device authentication.   SELECT_CHALLENGE   "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "USERNAME": "[username]", "ANSWER": "[Challenge name]"}  Available challenges are PASSWORD, PASSWORD_SRP, EMAIL_OTP, SMS_OTP, and WEB_AUTHN. Complete authentication in the SELECT_CHALLENGE response for PASSWORD, PASSWORD_SRP, and WEB_AUTHN:    "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "WEB_AUTHN", "USERNAME": "[username]", "CREDENTIAL": "[AuthenticationResponseJSON]"}  See  AuthenticationResponseJSON.    "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "PASSWORD", "USERNAME": "[username]", "PASSWORD": "[password]"}     "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "PASSWORD_SRP", "USERNAME": "[username]", "SRP_A": "[SRP_A]"}    For SMS_OTP and EMAIL_OTP, respond with the username and answer. Your user pool will send a code for the user to submit in the next challenge response.    "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "SMS_OTP", "USERNAME": "[username]"}     "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "EMAIL_OTP", "USERNAME": "[username]"}     SMS_OTP   "ChallengeName": "SMS_OTP", "ChallengeResponses": {"SMS_OTP_CODE": "[code]", "USERNAME": "[username]"}   EMAIL_OTP   "ChallengeName": "EMAIL_OTP", "ChallengeResponses": {"EMAIL_OTP_CODE": "[code]", "USERNAME": "[username]"}   SMS_MFA   "ChallengeName": "SMS_MFA", "ChallengeResponses": {"SMS_MFA_CODE": "[code]", "USERNAME": "[username]"}   PASSWORD_VERIFIER  This challenge response is part of the SRP flow. Amazon Cognito requires that your application respond to this challenge within a few seconds. When the response time exceeds this period, your user pool returns a NotAuthorizedException error.  "ChallengeName": "PASSWORD_VERIFIER", "ChallengeResponses": {"PASSWORD_CLAIM_SIGNATURE": "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP": [timestamp], "USERNAME": "[username]"}  Add "DEVICE_KEY" when you sign in with a remembered device.  CUSTOM_CHALLENGE   "ChallengeName": "CUSTOM_CHALLENGE", "ChallengeResponses": {"USERNAME": "[username]", "ANSWER": "[challenge_answer]"}  Add "DEVICE_KEY" when you sign in with a remembered device.  NEW_PASSWORD_REQUIRED   "ChallengeName": "NEW_PASSWORD_REQUIRED", "ChallengeResponses": {"NEW_PASSWORD": "[new_password]", "USERNAME": "[username]"}  To set any required attributes that InitiateAuth returned in an requiredAttributes parameter, add "userAttributes.[attribute_name]": "[attribute_value]". This parameter can also set values for writable attributes that aren\'t required by your user pool.  In a NEW_PASSWORD_REQUIRED challenge response, you can\'t modify a required attribute that already has a value. In RespondToAuthChallenge, set a value for any keys that Amazon Cognito returned in the requiredAttributes parameter, then use the UpdateUserAttributes API operation to modify the value of any additional attributes.   SOFTWARE_TOKEN_MFA   "ChallengeName": "SOFTWARE_TOKEN_MFA", "ChallengeResponses": {"USERNAME": "[username]", "SOFTWARE_TOKEN_MFA_CODE": [authenticator_code]}   DEVICE_SRP_AUTH   "ChallengeName": "DEVICE_SRP_AUTH", "ChallengeResponses": {"USERNAME": "[username]", "DEVICE_KEY": "[device_key]", "SRP_A": "[srp_a]"}   DEVICE_PASSWORD_VERIFIER   "ChallengeName": "DEVICE_PASSWORD_VERIFIER", "ChallengeResponses": {"DEVICE_KEY": "[device_key]", "PASSWORD_CLAIM_SIGNATURE": "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP": [timestamp], "USERNAME": "[username]"}   MFA_SETUP   "ChallengeName": "MFA_SETUP", "ChallengeResponses": {"USERNAME": "[username]"}, "SESSION": "[Session ID from VerifySoftwareToken]"   SELECT_MFA_TYPE   "ChallengeName": "SELECT_MFA_TYPE", "ChallengeResponses": {"USERNAME": "[username]", "ANSWER": "[SMS_MFA or SOFTWARE_TOKEN_MFA]"}    For more information about SECRET_HASH, see Computing secret hash values. For information about DEVICE_KEY, see Working with user devices in your user pool',
          args: {
            name: "map",
          },
        },
        {
          name: "--session",
          description:
            "The session that should be passed both ways in challenge-response calls to the service. If an InitiateAuth or RespondToAuthChallenge API call determines that the caller must pass another challenge, it returns a session with other challenge parameters. This session should be passed as it is to the next RespondToAuthChallenge API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The analytics metadata for collecting Amazon Pinpoint metrics for AdminRespondToAuthChallenge calls",
          args: {
            name: "structure",
          },
        },
        {
          name: "--context-data",
          description:
            "Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When you use the AdminRespondToAuthChallenge API action, Amazon Cognito invokes any functions that you have assigned to the following triggers:    pre sign-up   custom message   post authentication   user migration   pre token generation   define auth challenge   create auth challenge   verify auth challenge response   When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your AdminRespondToAuthChallenge request. In your function code in Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
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
      name: "admin-set-user-mfa-preference",
      description:
        "Sets the user's multi-factor authentication (MFA) preference, including which MFA options are activated, and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--sms-mfa-settings",
          description:
            "User preferences for SMS message MFA. Activates or deactivates SMS MFA and sets it as the preferred MFA method when multiple methods are available",
          args: {
            name: "structure",
          },
        },
        {
          name: "--software-token-mfa-settings",
          description:
            "User preferences for time-based one-time password (TOTP) MFA. Activates or deactivates TOTP MFA and sets it as the preferred MFA method when multiple methods are available",
          args: {
            name: "structure",
          },
        },
        {
          name: "--email-mfa-settings",
          description:
            "User preferences for email message MFA. Activates or deactivates email MFA and sets it as the preferred MFA method when multiple methods are available. To activate this setting,  advanced security features must be active in your user pool",
          args: {
            name: "structure",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to set a user's MFA preferences",
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
      name: "admin-set-user-password",
      description:
        "Sets the specified user's password in a user pool as an administrator. Works on any user.  The password can be temporary or permanent. If it is temporary, the user status enters the FORCE_CHANGE_PASSWORD state. When the user next tries to sign in, the InitiateAuth/AdminInitiateAuth response will contain the NEW_PASSWORD_REQUIRED challenge. If the user doesn't sign in before it expires, the user won't be able to sign in, and an administrator must reset their password.  Once the user has set a new password, or the password is permanent, the user status is set to Confirmed.  AdminSetUserPassword can set a password for the user profile that Amazon Cognito creates for third-party federated users. When you set a password, the federated user's status changes from EXTERNAL_PROVIDER to CONFIRMED. A user in this state can sign in as a federated user, and initiate authentication flows in the API like a linked native user. They can also modify their password and attributes in token-authenticated API requests like ChangePassword and UpdateUserAttributes. As a best security practice and to keep users in sync with your external IdP, don't set passwords on federated user profiles. To set up a federated user for native sign-in with a linked native user, refer to Linking federated users to an existing user profile.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to set the user's password",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description: "The password for the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--permanent",
          description:
            "True if the password is permanent, False if it is temporary",
        },
        {
          name: "--no-permanent",
          description:
            "True if the password is permanent, False if it is temporary",
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
      name: "admin-set-user-settings",
      description:
        "This action is no longer supported. You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use AdminSetUserMFAPreference instead.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the user whose options you're setting",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--mfa-options",
          description:
            "You can use this parameter only to set an SMS configuration that uses SMS for delivery",
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
      name: "admin-update-auth-event-feedback",
      description:
        "Provides feedback for an authentication event indicating if it was from a valid user. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-id",
          description: "The authentication event ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--feedback-value",
          description:
            "The authentication event feedback value. When you provide a FeedbackValue value of valid, you tell Amazon Cognito that you trust a user session where Amazon Cognito has evaluated some level of risk. When you provide a FeedbackValue value of invalid, you tell Amazon Cognito that you don't trust a user session, or you don't believe that Amazon Cognito evaluated a high-enough risk level",
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
      name: "admin-update-device-status",
      description:
        "Updates the device status as an administrator.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description: "The device key",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-remembered-status",
          description:
            "The status indicating whether a device has been remembered or not",
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
      name: "admin-update-user-attributes",
      description:
        "This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.  Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user. To delete an attribute from your user, submit the attribute in your API request with a blank value. For custom attributes, you must prepend the custom: prefix to the attribute name. In addition to updating user attributes, this API can also be used to mark phone and email as verified.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to update user attributes",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attributes",
          description:
            "An array of name-value pairs representing user attributes. For custom attributes, you must prepend the custom: prefix to the attribute name. If your user pool requires verification before Amazon Cognito updates an attribute value that you specify in this request, Amazon Cognito doesn\u2019t immediately update the value of that attribute. After your user receives and responds to a verification message to verify the new value, Amazon Cognito updates the attribute value. Your user can sign in and receive messages with the original attribute value until they verify the new value. To skip the verification message and update the value of an attribute that requires verification in the same API request, include the email_verified or phone_number_verified attribute, with a value of true. If you set the email_verified or phone_number_verified value for an email or phone_number attribute that requires verification to true, Amazon Cognito doesn\u2019t send a verification message to your user",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When you use the AdminUpdateUserAttributes API action, Amazon Cognito invokes the function that is assigned to the custom message trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminUpdateUserAttributes request. In your function code in Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
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
      name: "admin-user-global-sign-out",
      description:
        "Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call this operation with your administrative credentials when your user signs out of your app. This results in the following behavior.    Amazon Cognito no longer accepts token-authorized user operations that you authorize with a signed-out user's access tokens. For more information, see Using the Amazon Cognito user pools API and user pool endpoints. Amazon Cognito returns an Access Token has been revoked error when your app attempts to authorize a user pools API request with a revoked access token that contains the scope aws.cognito.signin.user.admin.   Amazon Cognito no longer accepts a signed-out user's ID token in a GetId  request to an identity pool with ServerSideTokenCheck enabled for its user pool IdP configuration in CognitoIdentityProvider.   Amazon Cognito no longer accepts a signed-out user's refresh tokens in refresh requests.   Other requests might be valid until your user's token expires.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
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
      name: "associate-software-token",
      description:
        "Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA) for a user, with a unique private key that Amazon Cognito generates and returns in the API response. You can authorize an AssociateSoftwareToken request with either the user's access token, or a session string from a challenge response that you received from Amazon Cognito.  Amazon Cognito disassociates an existing software token when you verify the new token in a  VerifySoftwareToken API request. If you don't verify the software token and your user pool doesn't require MFA, the user can then authenticate with user name and password credentials alone. If your user pool requires TOTP MFA, Amazon Cognito generates an MFA_SETUP or SOFTWARE_TOKEN_SETUP challenge each time your user signs in. Complete setup with AssociateSoftwareToken and VerifySoftwareToken. After you set up software token MFA for your user, Amazon Cognito generates a SOFTWARE_TOKEN_MFA challenge when they authenticate. Respond to this challenge with your user's TOTP.   Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose software token you want to generate",
          args: {
            name: "string",
          },
        },
        {
          name: "--session",
          description:
            "The session that should be passed both ways in challenge-response calls to the service. This allows authentication of the user as part of the MFA setup process",
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
      name: "change-password",
      description:
        "Changes the password for a specified user in a user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--previous-password",
          description:
            "The user's previous password. Required if the user has a password. If the user has no password and only signs in with passwordless authentication options, you can omit this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--proposed-password",
          description: "The new password",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose password you want to change",
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
      name: "complete-web-authn-registration",
      description:
        "Completes registration of a passkey authenticator for the current user. Your application provides data from a successful registration request with the data from the output of a  StartWebAuthnRegistration. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose passkey registration you want to verify",
          args: {
            name: "string",
          },
        },
        {
          name: "--credential",
          description:
            "A RegistrationResponseJSON public-key credential response from the user's passkey provider",
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
      name: "confirm-device",
      description:
        "Confirms tracking of the device. This API call is the call that begins device tracking. For more information about device authentication, see Working with user devices in your user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose device you want to confirm",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description: "The device key",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-secret-verifier-config",
          description: "The configuration of the device secret verifier",
          args: {
            name: "structure",
          },
        },
        {
          name: "--device-name",
          description: "The device name",
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
      name: "confirm-forgot-password",
      description:
        "Allows a user to enter a confirmation code to reset a forgotten password.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--client-id",
          description:
            "The app client ID of the app associated with the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message. For more information about SecretHash, see Computing secret hash values",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--confirmation-code",
          description:
            "The confirmation code from your user's request to reset their password. For more information, see ForgotPassword",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description: "The new password that your user wants to set",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The Amazon Pinpoint analytics metadata for collecting metrics for ConfirmForgotPassword calls",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When you use the ConfirmForgotPassword API action, Amazon Cognito invokes the function that is assigned to the post confirmation trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your ConfirmForgotPassword request. In your function code in Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
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
      name: "confirm-sign-up",
      description:
        "This public API operation provides a code that Amazon Cognito sent to your user when they signed up in your user pool via the SignUp API operation. After your user enters their code, they confirm ownership of the email address or phone number that they provided, and their user account becomes active. Depending on your user pool configuration, your users will receive their confirmation code in an email or SMS message. Local users who signed up in your user pool are the only type of user who can confirm sign-up with a code. Users who federate through an external identity provider (IdP) have already been confirmed by their IdP. Administrator-created users, users created with the AdminCreateUser API operation, confirm their accounts when they respond to their invitation email message and choose a password. They do not receive a confirmation code. Instead, they receive a temporary password.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--client-id",
          description: "The ID of the app client associated with the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--confirmation-code",
          description:
            "The confirmation code sent by a user's request to confirm registration",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-alias-creation",
          description:
            "Boolean to be specified to force user confirmation irrespective of existing alias. By default set to False. If this parameter is set to True and the phone number/email used for sign up confirmation already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user being confirmed. If set to False, the API will throw an AliasExistsException error",
        },
        {
          name: "--no-force-alias-creation",
          description:
            "Boolean to be specified to force user confirmation irrespective of existing alias. By default set to False. If this parameter is set to True and the phone number/email used for sign up confirmation already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user being confirmed. If set to False, the API will throw an AliasExistsException error",
        },
        {
          name: "--analytics-metadata",
          description:
            "The Amazon Pinpoint analytics metadata for collecting metrics for ConfirmSignUp calls",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When you use the ConfirmSignUp API action, Amazon Cognito invokes the function that is assigned to the post confirmation trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your ConfirmSignUp request. In your function code in Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
          },
        },
        {
          name: "--session",
          description:
            "The optional session ID from a SignUp API request. You can sign in a user directly from the sign-up process with the USER_AUTH authentication flow",
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
      name: "create-group",
      description:
        "Creates a new group in the specified user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--group-name",
          description: "The name of the group. Must be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A string containing the description of the group",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description: "The role Amazon Resource Name (ARN) for the group",
          args: {
            name: "string",
          },
        },
        {
          name: "--precedence",
          description:
            "A non-negative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. Zero is the highest precedence value. Groups with lower Precedence values take precedence over groups with higher or null Precedence values. If a user belongs to two or more groups, it is the group with the lowest precedence value whose role ARN is given in the user's tokens for the cognito:roles and cognito:preferred_role claims. Two groups can have the same Precedence value. If this happens, neither group takes precedence over the other. If two groups with the same Precedence have the same role ARN, that role is used in the cognito:preferred_role claim in tokens for users in each group. If the two groups have different role ARNs, the cognito:preferred_role claim isn't set in users' tokens. The default Precedence value is null. The maximum Precedence value is 2^31-1",
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
      name: "create-identity-provider",
      description:
        "Adds a configuration and trust relationship between a third-party identity provider (IdP) and a user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-name",
          description: "The IdP name",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-type",
          description: "The IdP type",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-details",
          description:
            'The scopes, URLs, and identifiers for your external identity provider. The following examples describe the provider detail keys for each IdP type. These values and their schema are subject to change. Social IdP authorize_scopes values must match the values listed here.  OpenID Connect (OIDC)  Amazon Cognito accepts the following elements when it can\'t discover endpoint URLs from oidc_issuer: attributes_url, authorize_url, jwks_uri, token_url. Create or update request: "ProviderDetails": { "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" }  Describe response: "ProviderDetails": { "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "attributes_url_add_attributes": "false", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" }   SAML  Create or update request with Metadata URL: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256" }  Create or update request with Metadata file: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataFile": "[metadata XML]", "RequestSigningAlgorithm": "rsa-sha256" }  The value of MetadataFile must be the plaintext metadata document with all quote (") characters escaped by backslashes. Describe response: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "ActiveEncryptionCertificate": "[certificate]", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256", "SLORedirectBindingURI": "https://auth.example.com/slo/saml", "SSORedirectBindingURI": "https://auth.example.com/sso/saml" }   LoginWithAmazon  Create or update request: "ProviderDetails": { "authorize_scopes": "profile postal_code", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret"  Describe response: "ProviderDetails": { "attributes_url": "https://api.amazon.com/user/profile", "attributes_url_add_attributes": "false", "authorize_scopes": "profile postal_code", "authorize_url": "https://www.amazon.com/ap/oa", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "POST", "token_url": "https://api.amazon.com/auth/o2/token" }   Google  Create or update request: "ProviderDetails": { "authorize_scopes": "email profile openid", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret" }  Describe response: "ProviderDetails": { "attributes_url": "https://people.googleapis.com/v1/people/me?personFields=", "attributes_url_add_attributes": "true", "authorize_scopes": "email profile openid", "authorize_url": "https://accounts.google.com/o/oauth2/v2/auth", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret", "oidc_issuer": "https://accounts.google.com", "token_request_method": "POST", "token_url": "https://www.googleapis.com/oauth2/v4/token" }   SignInWithApple  Create or update request: "ProviderDetails": { "authorize_scopes": "email name", "client_id": "com.example.cognito", "private_key": "1EXAMPLE", "key_id": "2EXAMPLE", "team_id": "3EXAMPLE" }  Describe response: "ProviderDetails": { "attributes_url_add_attributes": "false", "authorize_scopes": "email name", "authorize_url": "https://appleid.apple.com/auth/authorize", "client_id": "com.example.cognito", "key_id": "1EXAMPLE", "oidc_issuer": "https://appleid.apple.com", "team_id": "2EXAMPLE", "token_request_method": "POST", "token_url": "https://appleid.apple.com/auth/token" }   Facebook  Create or update request: "ProviderDetails": { "api_version": "v17.0", "authorize_scopes": "public_profile, email", "client_id": "1example23456789", "client_secret": "provider-app-client-secret" }  Describe response: "ProviderDetails": { "api_version": "v17.0", "attributes_url": "https://graph.facebook.com/v17.0/me?fields=", "attributes_url_add_attributes": "true", "authorize_scopes": "public_profile, email", "authorize_url": "https://www.facebook.com/v17.0/dialog/oauth", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "GET", "token_url": "https://graph.facebook.com/v17.0/oauth/access_token" }',
          args: {
            name: "map",
          },
        },
        {
          name: "--attribute-mapping",
          description:
            "A mapping of IdP attributes to standard and custom user pool attributes",
          args: {
            name: "map",
          },
        },
        {
          name: "--idp-identifiers",
          description: "A list of IdP identifiers",
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
      name: "create-managed-login-branding",
      description:
        "Creates a new set of branding settings for a user pool style and associates it with an app client. This operation is the programmatic option for the creation of a new style in the branding designer. Provides values for UI customization in a Settings JSON object and image files in an Assets array. To send the JSON object Document type parameter in Settings, you might need to update to the most recent version of your Amazon Web Services SDK.   This operation has a 2-megabyte request-size limit and include the CSS settings and image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito doesn't require that you pass all parameters in one request and preserves existing style settings that you don't specify. If your request is larger than 2MB, separate it into multiple requests, each with a size smaller than the limit.  For more information, see API and SDK operations for managed login branding   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to create a new branding style",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The app client that you want to create the branding style for. Each style is permanently linked to an app client. To change the style for an app client, delete the existing style with DeleteManagedLoginBranding and create a new one",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-cognito-provided-values",
          description:
            "When true, applies the default branding style options. This option reverts to default style options that are managed by Amazon Cognito. You can modify them later in the branding designer. When you specify true for this option, you must also omit values for Settings and Assets in the request",
        },
        {
          name: "--no-use-cognito-provided-values",
          description:
            "When true, applies the default branding style options. This option reverts to default style options that are managed by Amazon Cognito. You can modify them later in the branding designer. When you specify true for this option, you must also omit values for Settings and Assets in the request",
        },
        {
          name: "--settings",
          description:
            "A JSON file, encoded as a Document type, with the the settings that you want to apply to your style",
          args: {
            name: "structure",
          },
        },
        {
          name: "--assets",
          description:
            "An array of image files that you want to apply to roles like backgrounds, logos, and icons. Each object must also indicate whether it is for dark mode, light mode, or browser-adaptive mode",
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
      name: "create-resource-server",
      description:
        "Creates a new OAuth2.0 resource server and defines custom scopes within it.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "A unique resource server identifier for the resource server. The identifier can be an API friendly name like solar-system-data. You can also set an API URL like https://solar-system-data-api.example.com as your identifier. Amazon Cognito represents scopes in the access token in the format $resource-server-identifier/$scope. Longer scope-identifier strings increase the size of your access tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A friendly name for the resource server",
          args: {
            name: "string",
          },
        },
        {
          name: "--scopes",
          description:
            "A list of scopes. Each scope is a key-value map with the keys name and description",
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
      name: "create-user-import-job",
      description:
        "Creates a user import job.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--job-name",
          description: "The job name for the user import job",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that the users are being imported into",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloud-watch-logs-role-arn",
          description:
            "The role ARN for the Amazon CloudWatch Logs Logging role for the user import job",
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
      name: "create-user-pool",
      description:
        "This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.  Creates a new Amazon Cognito user pool and sets the password policy for the pool.  If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--pool-name",
          description: "A string used to name the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--policies",
          description: "The policies associated with the new user pool",
          args: {
            name: "structure",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "When active, DeletionProtection prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature. When you try to delete a protected user pool in a DeleteUserPool API request, Amazon Cognito returns an InvalidParameterException error. To delete a protected user pool, send a new DeleteUserPool request after you deactivate deletion protection in an UpdateUserPool API request",
          args: {
            name: "string",
          },
        },
        {
          name: "--lambda-config",
          description:
            "A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible stages of authentication operations. Triggers can modify the outcome of the operations that invoked them",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-verified-attributes",
          description:
            "The attributes to be auto-verified. Possible values: email, phone_number",
          args: {
            name: "list",
          },
        },
        {
          name: "--alias-attributes",
          description:
            "Attributes supported as an alias for this user pool. Possible values: phone_number, email, or preferred_username",
          args: {
            name: "list",
          },
        },
        {
          name: "--username-attributes",
          description:
            "Specifies whether a user can use an email address or phone number as a username when they sign up",
          args: {
            name: "list",
          },
        },
        {
          name: "--sms-verification-message",
          description:
            "This parameter is no longer used. See VerificationMessageTemplateType",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-verification-message",
          description:
            "This parameter is no longer used. See VerificationMessageTemplateType",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-verification-subject",
          description:
            "This parameter is no longer used. See VerificationMessageTemplateType",
          args: {
            name: "string",
          },
        },
        {
          name: "--verification-message-template",
          description:
            "The template for the verification message that your user pool delivers to users who set an email address or phone number attribute. Set the email message type that corresponds to your DefaultEmailOption selection. For CONFIRM_WITH_LINK, specify an EmailMessageByLink and leave EmailMessage blank. For CONFIRM_WITH_CODE, specify an EmailMessage and leave EmailMessageByLink blank. When you supply both parameters with either choice, Amazon Cognito returns an error",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sms-authentication-message",
          description: "A string representing the SMS authentication message",
          args: {
            name: "string",
          },
        },
        {
          name: "--mfa-configuration",
          description: "Specifies MFA configuration details",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attribute-update-settings",
          description:
            "The settings for updates to user attributes. These settings include the property AttributesRequireVerificationBeforeUpdate, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see  Verifying updates to email addresses and phone numbers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--device-configuration",
          description:
            "The device-remembering configuration for a user pool. A null value indicates that you have deactivated device remembering in your user pool.  When you provide a value for any DeviceConfiguration field, you activate the Amazon Cognito device-remembering feature",
          args: {
            name: "structure",
          },
        },
        {
          name: "--email-configuration",
          description:
            "The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for messages from your user pool",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sms-configuration",
          description:
            "The SMS configuration with the settings that your Amazon Cognito user pool must use to send an SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-pool-tags",
          description:
            "The tag keys and values to assign to the user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria",
          args: {
            name: "map",
          },
        },
        {
          name: "--admin-create-user-config",
          description: "The configuration for AdminCreateUser requests",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema",
          description:
            "An array of schema attributes for the new user pool. These attributes can be standard or custom attributes",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-pool-add-ons",
          description:
            "User pool add-ons. Contains settings for activation of advanced security features. To log user security information but take no action, set to AUDIT. To configure automatic security responses to risky traffic to your user pool, set to ENFORCED. For more information, see Adding advanced security to a user pool",
          args: {
            name: "structure",
          },
        },
        {
          name: "--username-configuration",
          description:
            "Case sensitivity on the username input for the selected sign-in option. When case sensitivity is set to False (case insensitive), users can sign in with any combination of capital and lowercase letters. For example, username, USERNAME, or UserName, or for email, email@example.com or EMaiL@eXamplE.Com. For most use cases, set case sensitivity to False (case insensitive) as a best practice. When usernames and email addresses are case insensitive, Amazon Cognito treats any variation in case as the same user, and prevents a case variation from being assigned to the same attribute for a different user. This configuration is immutable after you set it. For more information, see UsernameConfigurationType",
          args: {
            name: "structure",
          },
        },
        {
          name: "--account-recovery-setting",
          description:
            "The available verified method a user can use to recover their password when they call ForgotPassword. You can use this setting to define a preferred method when a user has more than one method available. With this setting, SMS doesn't qualify for a valid password recovery mechanism if the user also has SMS multi-factor authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine the recovery method where SMS is preferred through email",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-pool-tier",
          description:
            "The user pool feature plan, or tier. This parameter determines the eligibility of the user pool for features like managed login, access-token customization, and threat protection. Defaults to ESSENTIALS",
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
      name: "create-user-pool-client",
      description:
        "Creates the user pool client. When you create a new user pool client, token revocation is automatically activated. For more information about revoking tokens, see RevokeToken.  If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to create a user pool client",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-name",
          description:
            "The client name for the user pool client you would like to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-secret",
          description:
            "Boolean to specify whether you want to generate a secret for the user pool client being created",
        },
        {
          name: "--no-generate-secret",
          description:
            "Boolean to specify whether you want to generate a secret for the user pool client being created",
        },
        {
          name: "--refresh-token-validity",
          description:
            "The refresh token time limit. After this limit expires, your user can't use their refresh token. To specify the time unit for RefreshTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set RefreshTokenValidity as 10 and TokenValidityUnits as days, your user can refresh their session and retrieve new access and ID tokens for 10 days. The default time unit for RefreshTokenValidity in an API request is days. You can't set RefreshTokenValidity to 0. If you do, Amazon Cognito overrides the value with the default value of 30 days. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your refresh tokens are valid for 30 days",
          args: {
            name: "integer",
          },
        },
        {
          name: "--access-token-validity",
          description:
            "The access token time limit. After this limit expires, your user can't use their access token. To specify the time unit for AccessTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set AccessTokenValidity to 10 and TokenValidityUnits to hours, your user can authorize access with their access token for 10 hours. The default time unit for AccessTokenValidity in an API request is hours. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your access tokens are valid for one hour",
          args: {
            name: "integer",
          },
        },
        {
          name: "--id-token-validity",
          description:
            "The ID token time limit. After this limit expires, your user can't use their ID token. To specify the time unit for IdTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set IdTokenValidity as 10 and TokenValidityUnits as hours, your user can authenticate their session with their ID token for 10 hours. The default time unit for IdTokenValidity in an API request is hours. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your ID tokens are valid for one hour",
          args: {
            name: "integer",
          },
        },
        {
          name: "--token-validity-units",
          description:
            "The units in which the validity times are represented. The default unit for RefreshToken is days, and default for ID and access tokens are hours",
          args: {
            name: "structure",
          },
        },
        {
          name: "--read-attributes",
          description:
            "The list of user attributes that you want your app client to have read access to. After your user authenticates in your app, their access token authorizes them to read their own attribute value for any attribute in this list. An example of this kind of activity is when your user selects a link to view their profile information. Your app makes a GetUser API request to retrieve and display your user's profile data. When you don't specify the ReadAttributes for your app client, your app can read the values of email_verified, phone_number_verified, and the Standard attributes of your user pool. When your user pool app client has read access to these default attributes, ReadAttributes doesn't return any information. Amazon Cognito only populates ReadAttributes in the API response if you have specified your own custom set of read attributes",
          args: {
            name: "list",
          },
        },
        {
          name: "--write-attributes",
          description:
            "The list of user attributes that you want your app client to have write access to. After your user authenticates in your app, their access token authorizes them to set or modify their own attribute value for any attribute in this list. An example of this kind of activity is when you present your user with a form to update their profile information and they change their last name. Your app then makes an UpdateUserAttributes API request and sets family_name to the new value.  When you don't specify the WriteAttributes for your app client, your app can write the values of the Standard attributes of your user pool. When your user pool has write access to these default attributes, WriteAttributes doesn't return any information. Amazon Cognito only populates WriteAttributes in the API response if you have specified your own custom set of write attributes. If your app client allows users to sign in through an IdP, this array must include all attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If your app client does not have write access to a mapped attribute, Amazon Cognito throws an error when it tries to update the attribute. For more information, see Specifying IdP Attribute Mappings for Your user pool",
          args: {
            name: "list",
          },
        },
        {
          name: "--explicit-auth-flows",
          description:
            "The authentication flows that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions.  If you don't specify a value for ExplicitAuthFlows, your user client supports ALLOW_REFRESH_TOKEN_AUTH, ALLOW_USER_SRP_AUTH, and ALLOW_CUSTOM_AUTH.  Valid values include:    ALLOW_USER_AUTH: Enable selection-based sign-in with USER_AUTH. This setting covers username-password, secure remote password (SRP), passwordless, and passkey authentication. This authentiation flow can do username-password and SRP authentication without other ExplicitAuthFlows permitting them. For example users can complete an SRP challenge through USER_AUTH without the flow USER_SRP_AUTH being active for the app client. This flow doesn't include CUSTOM_AUTH.     ALLOW_ADMIN_USER_PASSWORD_AUTH: Enable admin based user password authentication flow ADMIN_USER_PASSWORD_AUTH. This setting replaces the ADMIN_NO_SRP_AUTH setting. With this authentication flow, your app passes a user name and password to Amazon Cognito in the request, instead of using the Secure Remote Password (SRP) protocol to securely transmit the password.    ALLOW_CUSTOM_AUTH: Enable Lambda trigger based authentication.    ALLOW_USER_PASSWORD_AUTH: Enable user password-based authentication. In this flow, Amazon Cognito receives the password in the request instead of using the SRP protocol to verify passwords.    ALLOW_USER_SRP_AUTH: Enable SRP-based authentication.    ALLOW_REFRESH_TOKEN_AUTH: Enable authflow to refresh tokens.   In some environments, you will see the values ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, or USER_PASSWORD_AUTH. You can't assign these legacy ExplicitAuthFlows values to user pool clients at the same time as values that begin with ALLOW_, like ALLOW_USER_SRP_AUTH",
          args: {
            name: "list",
          },
        },
        {
          name: "--supported-identity-providers",
          description:
            "A list of provider names for the identity providers (IdPs) that are supported on this client. The following are supported: COGNITO, Facebook, Google, SignInWithApple, and LoginWithAmazon. You can also specify the names that you configured for the SAML and OIDC IdPs in your user pool, for example MySAMLIdP or MyOIDCIdP. This setting applies to providers that you can access with the hosted UI and OAuth 2.0 authorization server. The removal of COGNITO from this list doesn't prevent authentication operations for local users with the user pools API in an Amazon Web Services SDK. The only way to prevent API-based authentication is to block access with a WAF rule",
          args: {
            name: "list",
          },
        },
        {
          name: "--callback-urls",
          description:
            "A list of allowed redirect (callback) URLs for the IdPs. A redirect URI must:   Be an absolute URI.   Be registered with the authorization server.   Not include a fragment component.   See OAuth 2.0 - Redirection Endpoint. Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only. App callback URLs such as myapp://example are also supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--logout-urls",
          description: "A list of allowed logout URLs for the IdPs",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-redirect-uri",
          description:
            "The default redirect URI. In app clients with one assigned IdP, replaces redirect_uri in authentication requests. Must be in the CallbackURLs list. A redirect URI must:   Be an absolute URI.   Be registered with the authorization server.   Not include a fragment component.   For more information, see Default redirect URI. Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only. App callback URLs such as myapp://example are also supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--allowed-o-auth-flows",
          description:
            "The OAuth grant types that you want your app client to generate. To create an app client that generates client credentials grants, you must add client_credentials as the only allowed OAuth flow.  code  Use a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the /oauth2/token endpoint.  implicit  Issue the access token (and, optionally, ID token, based on scopes) directly to your user.  client_credentials  Issue the access token from the /oauth2/token endpoint directly to a non-person user using a combination of the client ID and client secret",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-o-auth-scopes",
          description:
            "The allowed OAuth scopes. Possible values provided by OAuth are phone, email, openid, and profile. Possible values provided by Amazon Web Services are aws.cognito.signin.user.admin. Custom scopes created in Resource Servers are also supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-o-auth-flows-user-pool-client",
          description:
            "Set to true to use OAuth 2.0 features in your user pool app client.  AllowedOAuthFlowsUserPoolClient must be true before you can configure the following features in your app client.    CallBackURLs: Callback URLs.    LogoutURLs: Sign-out redirect URLs.    AllowedOAuthScopes: OAuth 2.0 scopes.    AllowedOAuthFlows: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.   To use OAuth 2.0 features, configure one of these features in the Amazon Cognito console or set AllowedOAuthFlowsUserPoolClient to true in a CreateUserPoolClient or UpdateUserPoolClient API request. If you don't set a value for AllowedOAuthFlowsUserPoolClient in a request with the CLI or SDKs, it defaults to false",
        },
        {
          name: "--no-allowed-o-auth-flows-user-pool-client",
          description:
            "Set to true to use OAuth 2.0 features in your user pool app client.  AllowedOAuthFlowsUserPoolClient must be true before you can configure the following features in your app client.    CallBackURLs: Callback URLs.    LogoutURLs: Sign-out redirect URLs.    AllowedOAuthScopes: OAuth 2.0 scopes.    AllowedOAuthFlows: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.   To use OAuth 2.0 features, configure one of these features in the Amazon Cognito console or set AllowedOAuthFlowsUserPoolClient to true in a CreateUserPoolClient or UpdateUserPoolClient API request. If you don't set a value for AllowedOAuthFlowsUserPoolClient in a request with the CLI or SDKs, it defaults to false",
        },
        {
          name: "--analytics-configuration",
          description:
            "The user pool analytics configuration for collecting metrics and sending them to your Amazon Pinpoint campaign.  In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools only support sending events to Amazon Pinpoint projects in Amazon Web Services Region us-east-1. In Regions where Amazon Pinpoint is available, user pools support sending events to Amazon Pinpoint projects within that same Region",
          args: {
            name: "structure",
          },
        },
        {
          name: "--prevent-user-existence-errors",
          description:
            "Errors and responses that you want Amazon Cognito APIs to return during authentication, account confirmation, and password recovery when the user doesn't exist in the user pool. When set to ENABLED and the user doesn't exist, authentication returns an error indicating either the username or password was incorrect. Account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to LEGACY, those APIs return a UserNotFoundException exception if the user doesn't exist in the user pool. Valid values include:    ENABLED - This prevents user existence-related errors.    LEGACY - This represents the early behavior of Amazon Cognito where user existence related errors aren't prevented.   Defaults to LEGACY when you don't provide a value",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-token-revocation",
          description:
            "Activates or deactivates token revocation. For more information about revoking tokens, see RevokeToken. If you don't include this parameter, token revocation is automatically activated for the new user pool client",
        },
        {
          name: "--no-enable-token-revocation",
          description:
            "Activates or deactivates token revocation. For more information about revoking tokens, see RevokeToken. If you don't include this parameter, token revocation is automatically activated for the new user pool client",
        },
        {
          name: "--enable-propagate-additional-user-context-data",
          description:
            "Activates the propagation of additional user context data. For more information about propagation of user context data, see  Adding advanced security to a user pool. If you don\u2019t include this parameter, you can't send device fingerprint information, including source IP address, to Amazon Cognito advanced security. You can only activate EnablePropagateAdditionalUserContextData in an app client that has a client secret",
        },
        {
          name: "--no-enable-propagate-additional-user-context-data",
          description:
            "Activates the propagation of additional user context data. For more information about propagation of user context data, see  Adding advanced security to a user pool. If you don\u2019t include this parameter, you can't send device fingerprint information, including source IP address, to Amazon Cognito advanced security. You can only activate EnablePropagateAdditionalUserContextData in an app client that has a client secret",
        },
        {
          name: "--auth-session-validity",
          description:
            "Amazon Cognito creates a session token for each API request in an authentication flow. AuthSessionValidity is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires",
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
      name: "create-user-pool-domain",
      description:
        "Creates a new domain for a user pool. The domain hosts user pool domain services like managed login, the hosted UI (classic), and the user pool authorization server.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--domain",
          description:
            "The domain string. For custom domains, this is the fully-qualified domain name, such as auth.example.com. For Amazon Cognito prefix domains, this is the prefix alone, such as auth",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The ID of the user pool where you want to add a domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed-login-version",
          description:
            "The version of managed login branding that you want to apply to your domain. A value of 1 indicates hosted UI (classic) branding and a version of 2 indicates managed login branding. Managed login requires that your user pool be configured for any feature plan other than Lite",
          args: {
            name: "integer",
          },
        },
        {
          name: "--custom-domain-config",
          description:
            "The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. Provide this parameter only if you want to use a custom domain for your user pool. Otherwise, you can exclude this parameter and use the Amazon Cognito hosted domain instead. For more information about the hosted domain and custom domains, see Configuring a User Pool Domain",
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
      name: "delete-group",
      description:
        "Deletes a group. Calling this action requires developer credentials",
      options: [
        {
          name: "--group-name",
          description: "The name of the group",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
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
      name: "delete-identity-provider",
      description: "Deletes an IdP for a user pool",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-name",
          description: "The IdP name",
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
      name: "delete-managed-login-branding",
      description:
        "Deletes a managed login branding style. When you delete a style, you delete the branding association for an app client and restore it to default settings.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--managed-login-branding-id",
          description:
            "The ID of the managed login branding style that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the managed login branding style that you want to delete",
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
      name: "delete-resource-server",
      description: "Deletes a resource server",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that hosts the resource server",
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
      name: "delete-user",
      description:
        "Allows a user to delete their own user profile. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose user profile you want to delete",
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
      name: "delete-user-attributes",
      description:
        "Deletes the attributes for a user. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-attribute-names",
          description:
            "An array of strings representing the user attribute names you want to delete. For custom attributes, you must prependattach the custom: prefix to the front of the attribute name",
          args: {
            name: "list",
          },
        },
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose attributes you want to delete",
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
      name: "delete-user-pool",
      description: "Deletes the specified Amazon Cognito user pool",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool you want to delete",
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
      name: "delete-user-pool-client",
      description: "Allows the developer to delete the user pool client",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to delete the client",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The app client ID of the app associated with the user pool",
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
      name: "delete-user-pool-domain",
      description: "Deletes a domain for a user pool",
      options: [
        {
          name: "--domain",
          description:
            "The domain string. For custom domains, this is the fully-qualified domain name, such as auth.example.com. For Amazon Cognito prefix domains, this is the prefix alone, such as auth",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID",
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
      name: "delete-web-authn-credential",
      description:
        "Deletes a registered passkey, or webauthN, device for the currently signed-in user. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose passkey you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--credential-id",
          description:
            "The unique identifier of the passkey that you want to delete. Look up registered devices with  ListWebAuthnCredentials",
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
      name: "describe-identity-provider",
      description: "Gets information about a specific IdP",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-name",
          description: "The IdP name",
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
      name: "describe-managed-login-branding",
      description:
        "When given the ID of a managed login branding style, returns detailed information about the style",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the managed login branding style that you want to get information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed-login-branding-id",
          description:
            "The ID of the managed login branding style that you want to get more information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-merged-resources",
          description:
            "When true, returns values for branding options that are unchanged from Amazon Cognito defaults. When false or when you omit this parameter, returns only values that you customized in your branding style",
        },
        {
          name: "--no-return-merged-resources",
          description:
            "When true, returns values for branding options that are unchanged from Amazon Cognito defaults. When false or when you omit this parameter, returns only values that you customized in your branding style",
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
      name: "describe-managed-login-branding-by-client",
      description:
        "When given the ID of a user pool app client, returns detailed information about the style assigned to the app client",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the app client where you want more information about the managed login branding style",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The app client that's assigned to the branding style that you want more information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-merged-resources",
          description:
            "When true, returns values for branding options that are unchanged from Amazon Cognito defaults. When false or when you omit this parameter, returns only values that you customized in your branding style",
        },
        {
          name: "--no-return-merged-resources",
          description:
            "When true, returns values for branding options that are unchanged from Amazon Cognito defaults. When false or when you omit this parameter, returns only values that you customized in your branding style",
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
      name: "describe-resource-server",
      description: "Describes a resource server",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that hosts the resource server",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "A unique resource server identifier for the resource server. The identifier can be an API friendly name like solar-system-data. You can also set an API URL like https://solar-system-data-api.example.com as your identifier. Amazon Cognito represents scopes in the access token in the format $resource-server-identifier/$scope. Longer scope-identifier strings increase the size of your access tokens",
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
      name: "describe-risk-configuration",
      description: "Describes the risk configuration",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The app client ID",
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
      name: "describe-user-import-job",
      description: "Describes the user import job",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that the users are being imported into",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the user import job",
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
      name: "describe-user-pool",
      description:
        "Returns the configuration information and metadata of the specified user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool you want to describe",
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
      name: "describe-user-pool-client",
      description:
        "Client method for returning the configuration information and metadata of the specified user pool app client.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The app client ID of the app associated with the user pool",
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
      name: "describe-user-pool-domain",
      description: "Gets information about a domain",
      options: [
        {
          name: "--domain",
          description:
            "The domain string. For custom domains, this is the fully-qualified domain name, such as auth.example.com. For Amazon Cognito prefix domains, this is the prefix alone, such as auth",
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
      name: "forget-device",
      description:
        "Forgets the specified device. For more information about device authentication, see Working with user devices in your user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose registered device you want to forget",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description: "The device key",
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
      name: "forgot-password",
      description:
        "Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the Username parameter, you can use the username or user alias. The method used to send the confirmation code is sent according to the specified AccountRecoverySetting. For more information, see Recovering User Accounts in the Amazon Cognito Developer Guide. To use the confirmation code for resetting the password, call ConfirmForgotPassword.  If neither a verified phone number nor a verified email exists, this API returns InvalidParameterException. If your app client has a client secret and you don't provide a SECRET_HASH parameter, this API returns NotAuthorizedException. To use this API operation, your user pool must have self-service account recovery configured. Use AdminSetUserPassword if you manage passwords as an administrator.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--client-id",
          description: "The ID of the client associated with the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests",
          args: {
            name: "structure",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The Amazon Pinpoint analytics metadata that contributes to your metrics for ForgotPassword calls",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When you use the ForgotPassword API action, Amazon Cognito invokes any functions that are assigned to the following triggers: pre sign-up, custom message, and user migration. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your ForgotPassword request. In your function code in Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
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
      name: "get-csv-header",
      description:
        "Gets the header information for the comma-separated value (CSV) file to be used as input for the user import job",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that the users are to be imported into",
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
      name: "get-device",
      description:
        "Gets the device. For more information about device authentication, see Working with user devices in your user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--device-key",
          description: "The device key",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose device information you want to request",
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
      name: "get-group",
      description:
        "Gets a group. Calling this action requires developer credentials",
      options: [
        {
          name: "--group-name",
          description: "The name of the group",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
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
      name: "get-identity-provider-by-identifier",
      description: "Gets the specified IdP",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--idp-identifier",
          description: "The IdP identifier",
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
      name: "get-log-delivery-configuration",
      description: "Gets the logging configuration of a user pool",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that has the logging configuration that you want to view",
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
      name: "get-signing-certificate",
      description:
        "This method takes a user pool ID, and returns the signing certificate. The issued certificate is valid for 10 years from the date of issue. Amazon Cognito issues and assigns a new signing certificate annually. This process returns a new value in the response to GetSigningCertificate, but doesn't invalidate the original certificate",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
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
      name: "get-ui-customization",
      description:
        "Gets the user interface (UI) Customization information for a particular app client's app UI, if any such information exists for the client. If nothing is set for the particular client, but there is an existing pool level customization (the app clientId is ALL), then that information is returned. If nothing is present, then an empty shape is returned",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The client ID for the client app",
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
      name: "get-user",
      description:
        "Gets the user attributes and metadata for a user. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A non-expired access token for the user whose information you want to query",
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
      name: "get-user-attribute-verification-code",
      description:
        "Generates a user attribute verification code for the specified attribute name. Sends a message to a user with a code that they must return in a VerifyUserAttribute request. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--access-token",
          description:
            "A non-expired access token for the user whose attribute verification code you want to generate",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-name",
          description:
            "The attribute name returned by the server response to get the user attribute verification code",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When you use the GetUserAttributeVerificationCode API action, Amazon Cognito invokes the function that is assigned to the custom message trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your GetUserAttributeVerificationCode request. In your function code in Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
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
      name: "get-user-auth-factors",
      description:
        "Lists the authentication options for the currently signed-in user. Returns the following:   The user's multi-factor authentication (MFA) preferences.   The user's options in the USER_AUTH flow that they can select in a SELECT_CHALLENGE response or request in a PREFERRED_CHALLENGErequest",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose authentication factors you want to view",
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
      name: "get-user-pool-mfa-config",
      description:
        "Gets the user pool multi-factor authentication (MFA) configuration",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
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
      name: "global-sign-out",
      description:
        "Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call this operation when your user signs out of your app. This results in the following behavior.    Amazon Cognito no longer accepts token-authorized user operations that you authorize with a signed-out user's access tokens. For more information, see Using the Amazon Cognito user pools API and user pool endpoints. Amazon Cognito returns an Access Token has been revoked error when your app attempts to authorize a user pools API request with a revoked access token that contains the scope aws.cognito.signin.user.admin.   Amazon Cognito no longer accepts a signed-out user's ID token in a GetId  request to an identity pool with ServerSideTokenCheck enabled for its user pool IdP configuration in CognitoIdentityProvider.   Amazon Cognito no longer accepts a signed-out user's refresh tokens in refresh requests.   Other requests might be valid until your user's token expires. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user who you want to sign out",
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
      name: "initiate-auth",
      description:
        "Initiates sign-in for a user in the Amazon Cognito user directory. You can't sign in a user with a federated IdP with InitiateAuth. For more information, see  Adding user pool sign-in through a third party.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--auth-flow",
          description:
            "The authentication flow that you want to initiate. The AuthParameters that you must submit are linked to the flow that you submit. For example:    USER_AUTH: Request a preferred authentication type or review available authentication types. From the offered authentication types, select one in a challenge response and then authenticate with that method in an additional challenge response.    REFRESH_TOKEN_AUTH: Receive new ID and access tokens when you pass a REFRESH_TOKEN parameter with a valid refresh token as the value.    USER_SRP_AUTH: Receive secure remote password (SRP) variables for the next challenge, PASSWORD_VERIFIER, when you pass USERNAME and SRP_A parameters.    USER_PASSWORD_AUTH: Receive new tokens or the next challenge, for example SOFTWARE_TOKEN_MFA, when you pass USERNAME and PASSWORD parameters.   Valid values include the following:  USER_AUTH  The entry point for sign-in with passwords, one-time passwords, biometric devices, and security keys.  USER_SRP_AUTH  Username-password authentication with the Secure Remote Password (SRP) protocol. For more information, see Use SRP password verification in custom authentication flow.  REFRESH_TOKEN_AUTH and REFRESH_TOKEN  Provide a valid refresh token and receive new ID and access tokens. For more information, see Using the refresh token.  CUSTOM_AUTH  Custom authentication with Lambda triggers. For more information, see Custom authentication challenge Lambda triggers.  USER_PASSWORD_AUTH  Username-password authentication with the password sent directly in the request. For more information, see Admin authentication flow.    ADMIN_USER_PASSWORD_AUTH is a flow type of AdminInitiateAuth and isn't valid for InitiateAuth. ADMIN_NO_SRP_AUTH is a legacy server-side username-password flow and isn't valid for InitiateAuth",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-parameters",
          description:
            "The authentication parameters. These are inputs corresponding to the AuthFlow that you're invoking. The required values depend on the value of AuthFlow:   For USER_AUTH: USERNAME (required), PREFERRED_CHALLENGE. If you don't provide a value for PREFERRED_CHALLENGE, Amazon Cognito responds with the AvailableChallenges parameter that specifies the available sign-in methods.   For USER_SRP_AUTH: USERNAME (required), SRP_A (required), SECRET_HASH (required if the app client is configured with a client secret), DEVICE_KEY.   For USER_PASSWORD_AUTH: USERNAME (required), PASSWORD (required), SECRET_HASH (required if the app client is configured with a client secret), DEVICE_KEY.   For REFRESH_TOKEN_AUTH/REFRESH_TOKEN: REFRESH_TOKEN (required), SECRET_HASH (required if the app client is configured with a client secret), DEVICE_KEY.   For CUSTOM_AUTH: USERNAME (required), SECRET_HASH (if app client is configured with client secret), DEVICE_KEY. To start the authentication flow with password verification, include ChallengeName: SRP_A and SRP_A: (The SRP_A Value).   For more information about SECRET_HASH, see Computing secret hash values. For information about DEVICE_KEY, see Working with user devices in your user pool",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for certain custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When you use the InitiateAuth API action, Amazon Cognito invokes the Lambda functions that are specified for various triggers. The ClientMetadata value is passed as input to the functions for only the following triggers:   Pre signup   Pre authentication   User migration   When Amazon Cognito invokes the functions for these triggers, it passes a JSON payload, which the function receives as input. This payload contains a validationData attribute, which provides the data that you assigned to the ClientMetadata parameter in your InitiateAuth request. In your function code in Lambda, you can process the validationData value to enhance your workflow for your specific needs. When you use the InitiateAuth API action, Amazon Cognito also invokes the functions for the following triggers, but it doesn't provide the ClientMetadata value as input:   Post authentication   Custom message   Pre token generation   Create auth challenge   Define auth challenge   Custom email sender   Custom SMS sender   For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-id",
          description: "The app client ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The Amazon Pinpoint analytics metadata that contributes to your metrics for InitiateAuth calls",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests",
          args: {
            name: "structure",
          },
        },
        {
          name: "--session",
          description:
            "The optional session ID from a ConfirmSignUp API request. You can sign in a user directly from the sign-up process with the USER_AUTH authentication flow",
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
      name: "list-devices",
      description:
        "Lists the sign-in devices that Amazon Cognito has registered to the current user. For more information about device authentication, see Working with user devices in your user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose list of devices you want to view",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The limit of the device request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pagination-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
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
      name: "list-groups",
      description:
        "Lists the groups associated with a user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The limit of the request to list groups",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list",
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
      name: "list-identity-providers",
      description:
        "Lists information about all IdPs for a user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of IdPs to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A pagination token",
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
      name: "list-resource-servers",
      description:
        "Lists the resource servers for a user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of resource servers to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A pagination token",
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
      name: "list-tags-for-resource",
      description:
        "Lists the tags that are assigned to an Amazon Cognito user pool. A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria. You can use this action up to 10 times per second, per account",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the user pool that the tags are assigned to",
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
      name: "list-user-import-jobs",
      description:
        "Lists user import jobs for a user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that the users are being imported into",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of import jobs you want the request to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pagination-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
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
      name: "list-user-pool-clients",
      description:
        "Lists the clients that have been created for the specified user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to list user pool clients",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results you want the request to return when listing the user pool clients",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list",
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
      name: "list-user-pools",
      description:
        "Lists the user pools associated with an Amazon Web Services account.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--next-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results you want the request to return when listing the user pools",
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
      name: "list-users",
      description:
        "Lists users and their basic details in a user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool on which the search should be performed",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes-to-get",
          description:
            "A JSON array of user attribute names, for example given_name, that you want Amazon Cognito to include in the response for each user. When you don't provide an AttributesToGet parameter, Amazon Cognito returns all attributes for each user. Use AttributesToGet with required attributes in your user pool, or in conjunction with Filter. Amazon Cognito returns an error if not all users in the results have set a value for the attribute you request. Attributes that you can't filter on, including custom attributes, must have a value set in every user profile before an AttributesToGet parameter returns results",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description: "Maximum number of users to be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pagination-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            'A filter string of the form "AttributeName Filter-Type "AttributeValue". Quotation marks within the filter string must be escaped using the backslash (\\) character. For example, "family_name = \\"Reddy\\"".    AttributeName: The name of the attribute to search for. You can only search for one attribute at a time.    Filter-Type: For an exact match, use =, for example, "given_name = \\"Jon\\"". For a prefix ("starts with") match, use ^=, for example, "given_name ^= \\"Jon\\"".     AttributeValue: The attribute value that must be matched for each user.   If the filter string is empty, ListUsers returns all users in the user pool. You can only search for the following standard attributes:    username (case-sensitive)    email     phone_number     name     given_name     family_name     preferred_username     cognito:user_status (called Status in the Console) (case-insensitive)    status (called Enabled in the Console) (case-sensitive)     sub    Custom attributes aren\'t searchable.  You can also list users with a client-side filter. The server-side filter matches no more than one attribute. For an advanced search, use a client-side filter with the --query parameter of the list-users action in the CLI. When you use a client-side filter, ListUsers returns a paginated list of zero or more users. You can receive multiple pages in a row with zero results. Repeat the query with each pagination token that is returned until you receive a null pagination token value, and then review the combined result.  For more information about server-side and client-side filtering, see FilteringCLI output in the Command Line Interface User Guide.   For more information, see Searching for Users Using the ListUsers API and Examples of Using the ListUsers API in the Amazon Cognito Developer Guide',
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
      name: "list-users-in-group",
      description:
        "Lists the users in the specified group.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description: "The name of the group",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of users that you want to retrieve before pagination",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list",
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
      name: "list-web-authn-credentials",
      description:
        "Generates a list of the current user's registered passkey, or webauthN, credentials",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose registered passkeys you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of the user's passkey credentials that you want to return",
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
      name: "resend-confirmation-code",
      description:
        "Resends the confirmation (for confirmation of registration) to a specific user in the user pool.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--client-id",
          description: "The ID of the client associated with the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests",
          args: {
            name: "structure",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The Amazon Pinpoint analytics metadata that contributes to your metrics for ResendConfirmationCode calls",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When you use the ResendConfirmationCode API action, Amazon Cognito invokes the function that is assigned to the custom message trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your ResendConfirmationCode request. In your function code in Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
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
      name: "respond-to-auth-challenge",
      description:
        "Some API operations in a user pool generate a challenge, like a prompt for an MFA code, for device authentication that bypasses MFA, or for a custom authentication challenge. A RespondToAuthChallenge API request provides the answer to that challenge, like a code or a secure remote password (SRP). The parameters of a response to an authentication challenge vary with the type of challenge. For more information about custom authentication challenges, see Custom authentication challenge Lambda triggers.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--client-id",
          description: "The app client ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--challenge-name",
          description:
            "The challenge name. For more information, see InitiateAuth.  ADMIN_NO_SRP_AUTH isn't a valid value",
          args: {
            name: "string",
          },
        },
        {
          name: "--session",
          description:
            "The session that should be passed both ways in challenge-response calls to the service. If InitiateAuth or RespondToAuthChallenge API call determines that the caller must pass another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next RespondToAuthChallenge API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--challenge-responses",
          description:
            'The responses to the challenge that you received in the previous request. Each challenge has its own required response parameters. The following examples are partial JSON request bodies that highlight challenge-response parameters.  You must provide a SECRET_HASH parameter in all challenge responses to an app client that has a client secret. Include a DEVICE_KEY for device authentication.   SELECT_CHALLENGE   "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "USERNAME": "[username]", "ANSWER": "[Challenge name]"}  Available challenges are PASSWORD, PASSWORD_SRP, EMAIL_OTP, SMS_OTP, and WEB_AUTHN. Complete authentication in the SELECT_CHALLENGE response for PASSWORD, PASSWORD_SRP, and WEB_AUTHN:    "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "WEB_AUTHN", "USERNAME": "[username]", "CREDENTIAL": "[AuthenticationResponseJSON]"}  See  AuthenticationResponseJSON.    "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "PASSWORD", "USERNAME": "[username]", "PASSWORD": "[password]"}     "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "PASSWORD_SRP", "USERNAME": "[username]", "SRP_A": "[SRP_A]"}    For SMS_OTP and EMAIL_OTP, respond with the username and answer. Your user pool will send a code for the user to submit in the next challenge response.    "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "SMS_OTP", "USERNAME": "[username]"}     "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "EMAIL_OTP", "USERNAME": "[username]"}     SMS_OTP   "ChallengeName": "SMS_OTP", "ChallengeResponses": {"SMS_OTP_CODE": "[code]", "USERNAME": "[username]"}   EMAIL_OTP   "ChallengeName": "EMAIL_OTP", "ChallengeResponses": {"EMAIL_OTP_CODE": "[code]", "USERNAME": "[username]"}   SMS_MFA   "ChallengeName": "SMS_MFA", "ChallengeResponses": {"SMS_MFA_CODE": "[code]", "USERNAME": "[username]"}   PASSWORD_VERIFIER  This challenge response is part of the SRP flow. Amazon Cognito requires that your application respond to this challenge within a few seconds. When the response time exceeds this period, your user pool returns a NotAuthorizedException error.  "ChallengeName": "PASSWORD_VERIFIER", "ChallengeResponses": {"PASSWORD_CLAIM_SIGNATURE": "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP": [timestamp], "USERNAME": "[username]"}  Add "DEVICE_KEY" when you sign in with a remembered device.  CUSTOM_CHALLENGE   "ChallengeName": "CUSTOM_CHALLENGE", "ChallengeResponses": {"USERNAME": "[username]", "ANSWER": "[challenge_answer]"}  Add "DEVICE_KEY" when you sign in with a remembered device.  NEW_PASSWORD_REQUIRED   "ChallengeName": "NEW_PASSWORD_REQUIRED", "ChallengeResponses": {"NEW_PASSWORD": "[new_password]", "USERNAME": "[username]"}  To set any required attributes that InitiateAuth returned in an requiredAttributes parameter, add "userAttributes.[attribute_name]": "[attribute_value]". This parameter can also set values for writable attributes that aren\'t required by your user pool.  In a NEW_PASSWORD_REQUIRED challenge response, you can\'t modify a required attribute that already has a value. In RespondToAuthChallenge, set a value for any keys that Amazon Cognito returned in the requiredAttributes parameter, then use the UpdateUserAttributes API operation to modify the value of any additional attributes.   SOFTWARE_TOKEN_MFA   "ChallengeName": "SOFTWARE_TOKEN_MFA", "ChallengeResponses": {"USERNAME": "[username]", "SOFTWARE_TOKEN_MFA_CODE": [authenticator_code]}   DEVICE_SRP_AUTH   "ChallengeName": "DEVICE_SRP_AUTH", "ChallengeResponses": {"USERNAME": "[username]", "DEVICE_KEY": "[device_key]", "SRP_A": "[srp_a]"}   DEVICE_PASSWORD_VERIFIER   "ChallengeName": "DEVICE_PASSWORD_VERIFIER", "ChallengeResponses": {"DEVICE_KEY": "[device_key]", "PASSWORD_CLAIM_SIGNATURE": "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP": [timestamp], "USERNAME": "[username]"}   MFA_SETUP   "ChallengeName": "MFA_SETUP", "ChallengeResponses": {"USERNAME": "[username]"}, "SESSION": "[Session ID from VerifySoftwareToken]"   SELECT_MFA_TYPE   "ChallengeName": "SELECT_MFA_TYPE", "ChallengeResponses": {"USERNAME": "[username]", "ANSWER": "[SMS_MFA or SOFTWARE_TOKEN_MFA]"}    For more information about SECRET_HASH, see Computing secret hash values. For information about DEVICE_KEY, see Working with user devices in your user pool',
          args: {
            name: "map",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The Amazon Pinpoint analytics metadata that contributes to your metrics for RespondToAuthChallenge calls",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When you use the RespondToAuthChallenge API action, Amazon Cognito invokes any functions that are assigned to the following triggers: post authentication, pre token generation, define auth challenge, create auth challenge, and verify auth challenge. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your RespondToAuthChallenge request. In your function code in Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
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
      name: "revoke-token",
      description:
        "Revokes all of the access tokens generated by, and at the same time as, the specified refresh token. After a token is revoked, you can't use the revoked token to access Amazon Cognito user APIs, or to authorize access to your resource server.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--token",
          description: "The refresh token that you want to revoke",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The client ID for the token that you want to revoke",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-secret",
          description:
            "The secret for the client ID. This is required only if the client ID has a secret",
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
      name: "set-log-delivery-configuration",
      description:
        "Sets up or modifies the logging configuration of a user pool. User pools can export user notification logs and advanced security features user activity logs",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to configure logging",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-configurations",
          description:
            "A collection of the logging configurations for a user pool",
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
      name: "set-risk-configuration",
      description:
        "Configures actions on detected risks. To delete the risk configuration for UserPoolId or ClientId, pass null values for all four configuration types. To activate Amazon Cognito advanced security features, update the user pool to include the UserPoolAddOns keyAdvancedSecurityMode",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The app client ID. If ClientId is null, then the risk configuration is mapped to userPoolId. When the client ID is null, the same risk configuration is applied to all the clients in the userPool. Otherwise, ClientId is mapped to the client. When the client ID isn't null, the user pool configuration is overridden and the risk configuration for the client is used instead",
          args: {
            name: "string",
          },
        },
        {
          name: "--compromised-credentials-risk-configuration",
          description: "The compromised credentials risk configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--account-takeover-risk-configuration",
          description: "The account takeover risk configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--risk-exception-configuration",
          description: "The configuration to override the risk decision",
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
      name: "set-ui-customization",
      description:
        "Sets the user interface (UI) customization information for a user pool's built-in app UI. You can specify app UI customization settings for a single client (with a specific clientId) or for all clients (by setting the clientId to ALL). If you specify ALL, the default configuration is used for every client that has no previously set UI customization. If you specify UI customization settings for a particular client, it will no longer return to the ALL configuration.  To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The client ID for the client app",
          args: {
            name: "string",
          },
        },
        {
          name: "--css",
          description: "The CSS values in the UI customization",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-file",
          description: "The uploaded logo image for the UI customization",
          args: {
            name: "blob",
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
      name: "set-user-mfa-preference",
      description:
        "Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are activated and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--sms-mfa-settings",
          description:
            "User preferences for SMS message MFA. Activates or deactivates SMS MFA and sets it as the preferred MFA method when multiple methods are available",
          args: {
            name: "structure",
          },
        },
        {
          name: "--software-token-mfa-settings",
          description:
            "User preferences for time-based one-time password (TOTP) MFA. Activates or deactivates TOTP MFA and sets it as the preferred MFA method when multiple methods are available",
          args: {
            name: "structure",
          },
        },
        {
          name: "--email-mfa-settings",
          description:
            "User preferences for email message MFA. Activates or deactivates email MFA and sets it as the preferred MFA method when multiple methods are available. To activate this setting,  advanced security features must be active in your user pool",
          args: {
            name: "structure",
          },
        },
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose MFA preference you want to set",
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
      name: "set-user-pool-mfa-config",
      description:
        "Sets the user pool multi-factor authentication (MFA) and passkey configuration.  This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--sms-mfa-configuration",
          description:
            "Configures user pool SMS messages for MFA. Sets the message template and the SMS message sending configuration for Amazon SNS",
          args: {
            name: "structure",
          },
        },
        {
          name: "--software-token-mfa-configuration",
          description:
            "Configures a user pool for time-based one-time password (TOTP) MFA. Enables or disables TOTP",
          args: {
            name: "structure",
          },
        },
        {
          name: "--email-mfa-configuration",
          description:
            "Configures user pool email messages for MFA. Sets the subject and body of the email message template for MFA messages. To activate this setting,  advanced security features must be active in your user pool",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mfa-configuration",
          description:
            "The MFA configuration. If you set the MfaConfiguration value to \u2018ON\u2019, only users who have set up an MFA factor can sign in. To learn more, see Adding Multi-Factor Authentication (MFA) to a user pool. Valid values include:    OFF MFA won't be used for any users.    ON MFA is required for all users to sign in.    OPTIONAL MFA will be required only for individual users who have an MFA factor activated",
          args: {
            name: "string",
          },
        },
        {
          name: "--web-authn-configuration",
          description:
            "The configuration of your user pool for passkey, or webauthN, authentication and registration. You can set this configuration independent of the MFA configuration options in this operation",
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
      name: "set-user-settings",
      description:
        "This action is no longer supported. You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use SetUserMFAPreference instead. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose user settings you want to configure",
          args: {
            name: "string",
          },
        },
        {
          name: "--mfa-options",
          description:
            "You can use this parameter only to set an SMS configuration that uses SMS for delivery",
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
      name: "sign-up",
      description:
        "Registers the user in the specified user pool and creates a user name, password, and user attributes.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.  You might receive a LimitExceeded exception in response to this request if you have exceeded a rate quota for email or SMS messages, and if your user pool automatically verifies email addresses or phone numbers. When you get this exception in the response, the user is successfully created and is in an UNCONFIRMED state. You can send a new code with the  ResendConfirmationCode request, or confirm the user as an administrator with an  AdminConfirmSignUp request",
      options: [
        {
          name: "--client-id",
          description: "The ID of the client associated with the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to sign up. The value of this parameter is typically a username, but can be any alias attribute in your user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description:
            "The password of the user you want to register. Users can sign up without a password when your user pool supports passwordless sign-in with email or SMS OTPs. To create a user with no password, omit this parameter or submit a blank value. You can only create a passwordless user when passwordless sign-in is available. See the SignInPolicyType property of CreateUserPool and UpdateUserPool",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attributes",
          description:
            "An array of name-value pairs representing user attributes. For custom attributes, you must prepend the custom: prefix to the attribute name",
          args: {
            name: "list",
          },
        },
        {
          name: "--validation-data",
          description:
            "Temporary user attributes that contribute to the outcomes of your pre sign-up Lambda trigger. This set of key-value pairs are for custom validation of information that you collect from your users but don't need to retain. Your Lambda function can analyze this additional data and act on it. Your function might perform external API operations like logging user attributes and validation data to Amazon CloudWatch Logs. Validation data might also affect the response that your function returns to Amazon Cognito, like automatically confirming the user if they sign up from within your network. For more information about the pre sign-up Lambda trigger, see Pre sign-up Lambda trigger",
          args: {
            name: "list",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "The Amazon Pinpoint analytics metadata that contributes to your metrics for SignUp calls",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When you use the SignUp API action, Amazon Cognito invokes any functions that are assigned to the following triggers: pre sign-up, custom message, and post confirmation. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your SignUp request. In your function code in Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
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
      name: "start-user-import-job",
      description: "Starts the user import",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that the users are being imported into",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the user import job",
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
      name: "start-web-authn-registration",
      description:
        "Requests credential creation options from your user pool for registration of a passkey authenticator. Returns information about the user pool, the user profile, and authentication requirements. Users must provide this information in their request to enroll your application with their passkey provider. After users present this data and register with their passkey provider, return the response to your user pool in a  CompleteWebAuthnRegistration API request. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose passkey metadata you want to generate",
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
      name: "stop-user-import-job",
      description: "Stops the user import job",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool that the users are being imported into",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID for the user import job",
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
      name: "tag-resource",
      description:
        "Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria. Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an Environment tag key to both user pools. The value of this key might be Test for one user pool, and Production for the other. Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an Identity and Access Management policy, you can constrain permissions for user pools based on specific tags or tag values. You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the user pool to assign the tags to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to assign to the user pool",
          args: {
            name: "map",
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
      name: "untag-resource",
      description:
        "Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5 times per second, per account",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the user pool that the tags are assigned to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to remove from the user pool",
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
      name: "update-auth-event-feedback",
      description:
        "Provides the feedback for an authentication event, whether it was from a valid user or not. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-id",
          description: "The event ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--feedback-token",
          description: "The feedback token",
          args: {
            name: "string",
          },
        },
        {
          name: "--feedback-value",
          description:
            "The authentication event feedback value. When you provide a FeedbackValue value of valid, you tell Amazon Cognito that you trust a user session where Amazon Cognito has evaluated some level of risk. When you provide a FeedbackValue value of invalid, you tell Amazon Cognito that you don't trust a user session, or you don't believe that Amazon Cognito evaluated a high-enough risk level",
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
      name: "update-device-status",
      description:
        "Updates the device status. For more information about device authentication, see Working with user devices in your user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose device status you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description: "The device key",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-remembered-status",
          description: "The status of whether a device is remembered",
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
      name: "update-group",
      description:
        "Updates the specified group with the specified attributes.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--group-name",
          description: "The name of the group",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A string containing the new description of the group",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The new role Amazon Resource Name (ARN) for the group. This is used for setting the cognito:roles and cognito:preferred_role claims in the token",
          args: {
            name: "string",
          },
        },
        {
          name: "--precedence",
          description:
            "The new precedence value for the group. For more information about this parameter, see CreateGroup",
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
      name: "update-identity-provider",
      description:
        "Updates IdP information for a user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-name",
          description: "The IdP name",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-details",
          description:
            'The scopes, URLs, and identifiers for your external identity provider. The following examples describe the provider detail keys for each IdP type. These values and their schema are subject to change. Social IdP authorize_scopes values must match the values listed here.  OpenID Connect (OIDC)  Amazon Cognito accepts the following elements when it can\'t discover endpoint URLs from oidc_issuer: attributes_url, authorize_url, jwks_uri, token_url. Create or update request: "ProviderDetails": { "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" }  Describe response: "ProviderDetails": { "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "attributes_url_add_attributes": "false", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" }   SAML  Create or update request with Metadata URL: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256" }  Create or update request with Metadata file: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataFile": "[metadata XML]", "RequestSigningAlgorithm": "rsa-sha256" }  The value of MetadataFile must be the plaintext metadata document with all quote (") characters escaped by backslashes. Describe response: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "ActiveEncryptionCertificate": "[certificate]", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256", "SLORedirectBindingURI": "https://auth.example.com/slo/saml", "SSORedirectBindingURI": "https://auth.example.com/sso/saml" }   LoginWithAmazon  Create or update request: "ProviderDetails": { "authorize_scopes": "profile postal_code", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret"  Describe response: "ProviderDetails": { "attributes_url": "https://api.amazon.com/user/profile", "attributes_url_add_attributes": "false", "authorize_scopes": "profile postal_code", "authorize_url": "https://www.amazon.com/ap/oa", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "POST", "token_url": "https://api.amazon.com/auth/o2/token" }   Google  Create or update request: "ProviderDetails": { "authorize_scopes": "email profile openid", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret" }  Describe response: "ProviderDetails": { "attributes_url": "https://people.googleapis.com/v1/people/me?personFields=", "attributes_url_add_attributes": "true", "authorize_scopes": "email profile openid", "authorize_url": "https://accounts.google.com/o/oauth2/v2/auth", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret", "oidc_issuer": "https://accounts.google.com", "token_request_method": "POST", "token_url": "https://www.googleapis.com/oauth2/v4/token" }   SignInWithApple  Create or update request: "ProviderDetails": { "authorize_scopes": "email name", "client_id": "com.example.cognito", "private_key": "1EXAMPLE", "key_id": "2EXAMPLE", "team_id": "3EXAMPLE" }  Describe response: "ProviderDetails": { "attributes_url_add_attributes": "false", "authorize_scopes": "email name", "authorize_url": "https://appleid.apple.com/auth/authorize", "client_id": "com.example.cognito", "key_id": "1EXAMPLE", "oidc_issuer": "https://appleid.apple.com", "team_id": "2EXAMPLE", "token_request_method": "POST", "token_url": "https://appleid.apple.com/auth/token" }   Facebook  Create or update request: "ProviderDetails": { "api_version": "v17.0", "authorize_scopes": "public_profile, email", "client_id": "1example23456789", "client_secret": "provider-app-client-secret" }  Describe response: "ProviderDetails": { "api_version": "v17.0", "attributes_url": "https://graph.facebook.com/v17.0/me?fields=", "attributes_url_add_attributes": "true", "authorize_scopes": "public_profile, email", "authorize_url": "https://www.facebook.com/v17.0/dialog/oauth", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "GET", "token_url": "https://graph.facebook.com/v17.0/oauth/access_token" }',
          args: {
            name: "map",
          },
        },
        {
          name: "--attribute-mapping",
          description: "The IdP attribute mapping to be changed",
          args: {
            name: "map",
          },
        },
        {
          name: "--idp-identifiers",
          description: "A list of IdP identifiers",
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
      name: "update-managed-login-branding",
      description:
        "Configures the branding settings for a user pool style. This operation is the programmatic option for the configuration of a style in the branding designer. Provides values for UI customization in a Settings JSON object and image files in an Assets array.  This operation has a 2-megabyte request-size limit and include the CSS settings and image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito doesn't require that you pass all parameters in one request and preserves existing style settings that you don't specify. If your request is larger than 2MB, separate it into multiple requests, each with a size smaller than the limit.  For more information, see API and SDK operations for managed login branding.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the managed login branding style that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed-login-branding-id",
          description:
            "The ID of the managed login branding style that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-cognito-provided-values",
          description:
            "When true, applies the default branding style options. This option reverts to default style options that are managed by Amazon Cognito. You can modify them later in the branding designer. When you specify true for this option, you must also omit values for Settings and Assets in the request",
        },
        {
          name: "--no-use-cognito-provided-values",
          description:
            "When true, applies the default branding style options. This option reverts to default style options that are managed by Amazon Cognito. You can modify them later in the branding designer. When you specify true for this option, you must also omit values for Settings and Assets in the request",
        },
        {
          name: "--settings",
          description:
            "A JSON file, encoded as a Document type, with the the settings that you want to apply to your style",
          args: {
            name: "structure",
          },
        },
        {
          name: "--assets",
          description:
            "An array of image files that you want to apply to roles like backgrounds, logos, and icons. Each object must also indicate whether it is for dark mode, light mode, or browser-adaptive mode",
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
      name: "update-resource-server",
      description:
        "Updates the name and scopes of resource server. All other fields are read-only.  If you don't provide a value for an attribute, it is set to the default value.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "A unique resource server identifier for the resource server. The identifier can be an API friendly name like solar-system-data. You can also set an API URL like https://solar-system-data-api.example.com as your identifier. Amazon Cognito represents scopes in the access token in the format $resource-server-identifier/$scope. Longer scope-identifier strings increase the size of your access tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the resource server",
          args: {
            name: "string",
          },
        },
        {
          name: "--scopes",
          description: "The scope values to be set for the resource server",
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
      name: "update-user-attributes",
      description:
        "With this operation, your users can update one or more of their attributes with their own credentials. You authorize this API request with the user's access token. To delete an attribute from your user, submit the attribute in your API request with a blank value. Custom attribute values in this request must include the custom: prefix. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--user-attributes",
          description:
            "An array of name-value pairs representing user attributes. For custom attributes, you must prepend the custom: prefix to the attribute name. If you have set an attribute to require verification before Amazon Cognito updates its value, this request doesn\u2019t immediately update the value of that attribute. After your user receives and responds to a verification message to verify the new value, Amazon Cognito updates the attribute value. Your user can sign in and receive messages with the original attribute value until they verify the new value",
          args: {
            name: "list",
          },
        },
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose user attributes you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action initiates.  You create custom workflows by assigning Lambda functions to user pool triggers. When you use the UpdateUserAttributes API action, Amazon Cognito invokes the function that is assigned to the custom message trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute, which provides the data that you assigned to the ClientMetadata parameter in your UpdateUserAttributes request. In your function code in Lambda, you can process the clientMetadata value to enhance your workflow for your specific needs. For more information, see  Customizing user pool Workflows with Lambda Triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information",
          args: {
            name: "map",
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
      name: "update-user-pool",
      description:
        "This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.  Updates the specified user pool with the specified attributes. You can get a list of the current user pool settings using DescribeUserPool.  If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID for the user pool you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--policies",
          description:
            "A container with the policies you want to update in a user pool",
          args: {
            name: "structure",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "When active, DeletionProtection prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature. When you try to delete a protected user pool in a DeleteUserPool API request, Amazon Cognito returns an InvalidParameterException error. To delete a protected user pool, send a new DeleteUserPool request after you deactivate deletion protection in an UpdateUserPool API request",
          args: {
            name: "string",
          },
        },
        {
          name: "--lambda-config",
          description:
            "The Lambda configuration information from the request to update the user pool",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-verified-attributes",
          description:
            "The attributes that are automatically verified when Amazon Cognito requests to update user pools",
          args: {
            name: "list",
          },
        },
        {
          name: "--sms-verification-message",
          description:
            "This parameter is no longer used. See VerificationMessageTemplateType",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-verification-message",
          description:
            "This parameter is no longer used. See VerificationMessageTemplateType",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-verification-subject",
          description:
            "This parameter is no longer used. See VerificationMessageTemplateType",
          args: {
            name: "string",
          },
        },
        {
          name: "--verification-message-template",
          description: "The template for verification messages",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sms-authentication-message",
          description: "The contents of the SMS authentication message",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attribute-update-settings",
          description:
            "The settings for updates to user attributes. These settings include the property AttributesRequireVerificationBeforeUpdate, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see  Verifying updates to email addresses and phone numbers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mfa-configuration",
          description:
            "Possible values include:    OFF - MFA tokens aren't required and can't be specified during user registration.    ON - MFA tokens are required for all user registrations. You can only specify ON when you're initially creating a user pool. You can use the SetUserPoolMfaConfig API operation to turn MFA \"ON\" for existing user pools.     OPTIONAL - Users have the option when registering to create an MFA token",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-configuration",
          description:
            "The device-remembering configuration for a user pool. A null value indicates that you have deactivated device remembering in your user pool.  When you provide a value for any DeviceConfiguration field, you activate the Amazon Cognito device-remembering feature",
          args: {
            name: "structure",
          },
        },
        {
          name: "--email-configuration",
          description:
            "The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for email invitation and verification messages from your user pool",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sms-configuration",
          description:
            "The SMS configuration with the settings that your Amazon Cognito user pool must use to send an SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-pool-tags",
          description:
            "The tag keys and values to assign to the user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria",
          args: {
            name: "map",
          },
        },
        {
          name: "--admin-create-user-config",
          description: "The configuration for AdminCreateUser requests",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-pool-add-ons",
          description:
            "User pool add-ons. Contains settings for activation of advanced security features. To log user security information but take no action, set to AUDIT. To configure automatic security responses to risky traffic to your user pool, set to ENFORCED. For more information, see Adding advanced security to a user pool",
          args: {
            name: "structure",
          },
        },
        {
          name: "--account-recovery-setting",
          description:
            "The available verified method a user can use to recover their password when they call ForgotPassword. You can use this setting to define a preferred method when a user has more than one method available. With this setting, SMS doesn't qualify for a valid password recovery mechanism if the user also has SMS multi-factor authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine the recovery method where SMS is preferred through email",
          args: {
            name: "structure",
          },
        },
        {
          name: "--pool-name",
          description: "The updated name of your user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-tier",
          description:
            "The user pool feature plan, or tier. This parameter determines the eligibility of the user pool for features like managed login, access-token customization, and threat protection. Defaults to ESSENTIALS",
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
      name: "update-user-pool-client",
      description:
        "Updates the specified user pool app client with the specified attributes. You can get a list of the current user pool app client settings using DescribeUserPoolClient.  If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.  You can also use this operation to enable token revocation for user pool clients. For more information about revoking tokens, see RevokeToken.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The user pool ID for the user pool where you want to update the user pool client",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The ID of the client associated with the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-name",
          description:
            "The client name from the update user pool client request",
          args: {
            name: "string",
          },
        },
        {
          name: "--refresh-token-validity",
          description:
            "The refresh token time limit. After this limit expires, your user can't use their refresh token. To specify the time unit for RefreshTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set RefreshTokenValidity as 10 and TokenValidityUnits as days, your user can refresh their session and retrieve new access and ID tokens for 10 days. The default time unit for RefreshTokenValidity in an API request is days. You can't set RefreshTokenValidity to 0. If you do, Amazon Cognito overrides the value with the default value of 30 days. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your refresh tokens are valid for 30 days",
          args: {
            name: "integer",
          },
        },
        {
          name: "--access-token-validity",
          description:
            "The access token time limit. After this limit expires, your user can't use their access token. To specify the time unit for AccessTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set AccessTokenValidity to 10 and TokenValidityUnits to hours, your user can authorize access with their access token for 10 hours. The default time unit for AccessTokenValidity in an API request is hours. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your access tokens are valid for one hour",
          args: {
            name: "integer",
          },
        },
        {
          name: "--id-token-validity",
          description:
            "The ID token time limit. After this limit expires, your user can't use their ID token. To specify the time unit for IdTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set IdTokenValidity as 10 and TokenValidityUnits as hours, your user can authenticate their session with their ID token for 10 hours. The default time unit for IdTokenValidity in an API request is hours. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your ID tokens are valid for one hour",
          args: {
            name: "integer",
          },
        },
        {
          name: "--token-validity-units",
          description:
            "The time units you use when you set the duration of ID, access, and refresh tokens. The default unit for RefreshToken is days, and the default for ID and access tokens is hours",
          args: {
            name: "structure",
          },
        },
        {
          name: "--read-attributes",
          description:
            "The list of user attributes that you want your app client to have read access to. After your user authenticates in your app, their access token authorizes them to read their own attribute value for any attribute in this list. An example of this kind of activity is when your user selects a link to view their profile information. Your app makes a GetUser API request to retrieve and display your user's profile data. When you don't specify the ReadAttributes for your app client, your app can read the values of email_verified, phone_number_verified, and the Standard attributes of your user pool. When your user pool app client has read access to these default attributes, ReadAttributes doesn't return any information. Amazon Cognito only populates ReadAttributes in the API response if you have specified your own custom set of read attributes",
          args: {
            name: "list",
          },
        },
        {
          name: "--write-attributes",
          description:
            "The list of user attributes that you want your app client to have write access to. After your user authenticates in your app, their access token authorizes them to set or modify their own attribute value for any attribute in this list. An example of this kind of activity is when you present your user with a form to update their profile information and they change their last name. Your app then makes an UpdateUserAttributes API request and sets family_name to the new value.  When you don't specify the WriteAttributes for your app client, your app can write the values of the Standard attributes of your user pool. When your user pool has write access to these default attributes, WriteAttributes doesn't return any information. Amazon Cognito only populates WriteAttributes in the API response if you have specified your own custom set of write attributes. If your app client allows users to sign in through an IdP, this array must include all attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If your app client does not have write access to a mapped attribute, Amazon Cognito throws an error when it tries to update the attribute. For more information, see Specifying IdP Attribute Mappings for Your user pool",
          args: {
            name: "list",
          },
        },
        {
          name: "--explicit-auth-flows",
          description:
            "The authentication flows that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions.  If you don't specify a value for ExplicitAuthFlows, your user client supports ALLOW_REFRESH_TOKEN_AUTH, ALLOW_USER_SRP_AUTH, and ALLOW_CUSTOM_AUTH.  Valid values include:    ALLOW_USER_AUTH: Enable selection-based sign-in with USER_AUTH. This setting covers username-password, secure remote password (SRP), passwordless, and passkey authentication. This authentiation flow can do username-password and SRP authentication without other ExplicitAuthFlows permitting them. For example users can complete an SRP challenge through USER_AUTH without the flow USER_SRP_AUTH being active for the app client. This flow doesn't include CUSTOM_AUTH.     ALLOW_ADMIN_USER_PASSWORD_AUTH: Enable admin based user password authentication flow ADMIN_USER_PASSWORD_AUTH. This setting replaces the ADMIN_NO_SRP_AUTH setting. With this authentication flow, your app passes a user name and password to Amazon Cognito in the request, instead of using the Secure Remote Password (SRP) protocol to securely transmit the password.    ALLOW_CUSTOM_AUTH: Enable Lambda trigger based authentication.    ALLOW_USER_PASSWORD_AUTH: Enable user password-based authentication. In this flow, Amazon Cognito receives the password in the request instead of using the SRP protocol to verify passwords.    ALLOW_USER_SRP_AUTH: Enable SRP-based authentication.    ALLOW_REFRESH_TOKEN_AUTH: Enable authflow to refresh tokens.   In some environments, you will see the values ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, or USER_PASSWORD_AUTH. You can't assign these legacy ExplicitAuthFlows values to user pool clients at the same time as values that begin with ALLOW_, like ALLOW_USER_SRP_AUTH",
          args: {
            name: "list",
          },
        },
        {
          name: "--supported-identity-providers",
          description:
            "A list of provider names for the identity providers (IdPs) that are supported on this client. The following are supported: COGNITO, Facebook, Google, SignInWithApple, and LoginWithAmazon. You can also specify the names that you configured for the SAML and OIDC IdPs in your user pool, for example MySAMLIdP or MyOIDCIdP. This setting applies to providers that you can access with the hosted UI and OAuth 2.0 authorization server. The removal of COGNITO from this list doesn't prevent authentication operations for local users with the user pools API in an Amazon Web Services SDK. The only way to prevent API-based authentication is to block access with a WAF rule",
          args: {
            name: "list",
          },
        },
        {
          name: "--callback-urls",
          description:
            "A list of allowed redirect (callback) URLs for the IdPs. A redirect URI must:   Be an absolute URI.   Be registered with the authorization server.   Not include a fragment component.   See OAuth 2.0 - Redirection Endpoint. Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only. App callback URLs such as myapp://example are also supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--logout-urls",
          description: "A list of allowed logout URLs for the IdPs",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-redirect-uri",
          description:
            "The default redirect URI. Must be in the CallbackURLs list. A redirect URI must:   Be an absolute URI.   Be registered with the authorization server.   Not include a fragment component.   See OAuth 2.0 - Redirection Endpoint. Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only. App callback URLs such as myapp://example are also supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--allowed-o-auth-flows",
          description:
            "The allowed OAuth flows.  code  Use a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the /oauth2/token endpoint.  implicit  Issue the access token (and, optionally, ID token, based on scopes) directly to your user.  client_credentials  Issue the access token from the /oauth2/token endpoint directly to a non-person user using a combination of the client ID and client secret",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-o-auth-scopes",
          description:
            "The allowed OAuth scopes. Possible values provided by OAuth are phone, email, openid, and profile. Possible values provided by Amazon Web Services are aws.cognito.signin.user.admin. Custom scopes created in Resource Servers are also supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-o-auth-flows-user-pool-client",
          description:
            "Set to true to use OAuth 2.0 features in your user pool app client.  AllowedOAuthFlowsUserPoolClient must be true before you can configure the following features in your app client.    CallBackURLs: Callback URLs.    LogoutURLs: Sign-out redirect URLs.    AllowedOAuthScopes: OAuth 2.0 scopes.    AllowedOAuthFlows: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.   To use OAuth 2.0 features, configure one of these features in the Amazon Cognito console or set AllowedOAuthFlowsUserPoolClient to true in a CreateUserPoolClient or UpdateUserPoolClient API request. If you don't set a value for AllowedOAuthFlowsUserPoolClient in a request with the CLI or SDKs, it defaults to false",
        },
        {
          name: "--no-allowed-o-auth-flows-user-pool-client",
          description:
            "Set to true to use OAuth 2.0 features in your user pool app client.  AllowedOAuthFlowsUserPoolClient must be true before you can configure the following features in your app client.    CallBackURLs: Callback URLs.    LogoutURLs: Sign-out redirect URLs.    AllowedOAuthScopes: OAuth 2.0 scopes.    AllowedOAuthFlows: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.   To use OAuth 2.0 features, configure one of these features in the Amazon Cognito console or set AllowedOAuthFlowsUserPoolClient to true in a CreateUserPoolClient or UpdateUserPoolClient API request. If you don't set a value for AllowedOAuthFlowsUserPoolClient in a request with the CLI or SDKs, it defaults to false",
        },
        {
          name: "--analytics-configuration",
          description:
            "The Amazon Pinpoint analytics configuration necessary to collect metrics for this user pool.  In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools only support sending events to Amazon Pinpoint projects in us-east-1. In Regions where Amazon Pinpoint is available, user pools support sending events to Amazon Pinpoint projects within that same Region",
          args: {
            name: "structure",
          },
        },
        {
          name: "--prevent-user-existence-errors",
          description:
            "Errors and responses that you want Amazon Cognito APIs to return during authentication, account confirmation, and password recovery when the user doesn't exist in the user pool. When set to ENABLED and the user doesn't exist, authentication returns an error indicating either the username or password was incorrect. Account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to LEGACY, those APIs return a UserNotFoundException exception if the user doesn't exist in the user pool. Valid values include:    ENABLED - This prevents user existence-related errors.    LEGACY - This represents the early behavior of Amazon Cognito where user existence related errors aren't prevented.   Defaults to LEGACY when you don't provide a value",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-token-revocation",
          description:
            "Activates or deactivates token revocation. For more information about revoking tokens, see RevokeToken",
        },
        {
          name: "--no-enable-token-revocation",
          description:
            "Activates or deactivates token revocation. For more information about revoking tokens, see RevokeToken",
        },
        {
          name: "--enable-propagate-additional-user-context-data",
          description:
            "Activates the propagation of additional user context data. For more information about propagation of user context data, see  Adding advanced security to a user pool. If you don\u2019t include this parameter, you can't send device fingerprint information, including source IP address, to Amazon Cognito advanced security. You can only activate EnablePropagateAdditionalUserContextData in an app client that has a client secret",
        },
        {
          name: "--no-enable-propagate-additional-user-context-data",
          description:
            "Activates the propagation of additional user context data. For more information about propagation of user context data, see  Adding advanced security to a user pool. If you don\u2019t include this parameter, you can't send device fingerprint information, including source IP address, to Amazon Cognito advanced security. You can only activate EnablePropagateAdditionalUserContextData in an app client that has a client secret",
        },
        {
          name: "--auth-session-validity",
          description:
            "Amazon Cognito creates a session token for each API request in an authentication flow. AuthSessionValidity is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires",
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
      name: "update-user-pool-domain",
      description:
        "Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool. You can use this operation to provide the Amazon Resource Name (ARN) of a new certificate to Amazon Cognito. You can't use it to change the domain for a user pool. A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and sign-in pages for your application. When you set up a custom domain, you provide a certificate that you manage with Certificate Manager (ACM). When necessary, you can use this operation to change the certificate that you applied to your custom domain. Usually, this is unnecessary following routine certificate renewal with ACM. When you renew your existing certificate in ACM, the ARN for your certificate remains the same, and your custom domain uses the new certificate automatically. However, if you replace your existing certificate with a new one, ACM gives the new certificate a new ARN. To apply the new certificate to your custom domain, you must provide this ARN to Amazon Cognito. When you add your new certificate in ACM, you must choose US East (N. Virginia) as the Amazon Web Services Region. After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain. For more information about adding a custom domain to your user pool, see Using Your Own Domain for the Hosted UI.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--domain",
          description:
            "The domain name for the custom domain that hosts the sign-up and sign-in pages for your application. One example might be auth.example.com.  This string can include only lowercase letters, numbers, and hyphens. Don't use a hyphen for the first or last character. Use periods to separate subdomain names",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that is associated with the custom domain whose certificate you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed-login-version",
          description:
            "A version number that indicates the state of managed login for your domain. Version 1 is hosted UI (classic). Version 2 is the newer managed login with the branding designer. For more information, see Managed login",
          args: {
            name: "integer",
          },
        },
        {
          name: "--custom-domain-config",
          description:
            "The configuration for a custom domain that hosts the sign-up and sign-in pages for your application. Use this object to specify an SSL certificate that is managed by ACM. When you create a custom domain, the passkey RP ID defaults to the custom domain. If you had a prefix domain active, this will cause passkey integration for your prefix domain to stop working due to a mismatch in RP ID. To keep the prefix domain passkey integration working, you can explicitly set RP ID to the prefix domain. Update the RP ID in a SetUserPoolMfaConfig request",
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
      name: "verify-software-token",
      description:
        "Use this API to register a user's entered time-based one-time password (TOTP) code and mark the user's software token MFA status as \"verified\" if successful. The request takes an access token or a session string, but not both.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose software token you want to verify",
          args: {
            name: "string",
          },
        },
        {
          name: "--session",
          description:
            "The session that should be passed both ways in challenge-response calls to the service",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-code",
          description:
            "The one- time password computed using the secret code returned by AssociateSoftwareToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--friendly-device-name",
          description: "The friendly device name",
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
      name: "verify-user-attribute",
      description:
        "Verifies the specified user attributes in the user pool.  If your user pool requires verification before Amazon Cognito updates the attribute value, VerifyUserAttribute updates the affected attribute to its pending value. For more information, see  UserAttributeUpdateSettingsType.  Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose user attributes you want to verify",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-name",
          description:
            "The attribute name in the request to verify user attributes",
          args: {
            name: "string",
          },
        },
        {
          name: "--code",
          description:
            "The verification code in the request to verify user attributes",
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
