import * as Fig from "../../schemas";

const completionSpec: Fig.Spec = {
  name: "sso-oidc",
  description:
    "AWS Single Sign-On (SSO) OpenID Connect (OIDC) is a web service that enables a client (such as AWS CLI or a native application) to register with AWS SSO. The service also enables the client to fetch the user\u2019s access token upon successful authentication and authorization with AWS SSO. This service conforms with the OAuth 2.0 based implementation of the device authorization grant standard (https://tools.ietf.org/html/rfc8628). For general information about AWS SSO, see What is AWS Single Sign-On? in the AWS SSO User Guide. This API reference guide describes the AWS SSO OIDC operations that you can call programatically and includes detailed information on data types and errors.  AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms such as Java, Ruby, .Net, iOS, and Android. The SDKs provide a convenient way to create programmatic access to AWS SSO and other AWS services. For more information about the AWS SDKs, including how to download and install them, see Tools for Amazon Web Services",
  subcommands: [
    {
      name: "create-token",
      description:
        "Creates and returns an access token for the authorized client. The access token issued will be used to fetch short-term credentials for the assigned roles in the AWS account",
      options: [
        {
          name: "--client-id",
          description:
            "The unique identifier string for each client. This value should come from the persisted result of the RegisterClient API",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-secret",
          description:
            "A secret string generated for the client. This value should come from the persisted result of the RegisterClient API",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-type",
          description:
            "Supports grant types for authorization code, refresh token, and device code request",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-code",
          description:
            "Used only when calling this API for the device code grant type. This short-term code is used to identify this authentication attempt. This should come from an in-memory reference to the result of the StartDeviceAuthorization API",
          args: {
            name: "string",
          },
        },
        {
          name: "--code",
          description:
            "The authorization code received from the authorization service. This parameter is required to perform an authorization grant request to get access to a token",
          args: {
            name: "string",
          },
        },
        {
          name: "--refresh-token",
          description:
            "The token used to obtain an access token in the event that the access token is invalid or expired. This token is not issued by the service",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "The list of scopes that is defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token",
          args: {
            name: "list",
          },
        },
        {
          name: "--redirect-uri",
          description:
            "The location of the application that will receive the authorization code. Users authorize the service to send the request to this location",
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
      name: "register-client",
      description:
        "Registers a client with AWS SSO. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests",
      options: [
        {
          name: "--client-name",
          description: "The friendly name of the client",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-type",
          description:
            "The type of client. The service supports only public as a client type. Anything other than public will be rejected by the service",
          args: {
            name: "string",
          },
        },
        {
          name: "--scopes",
          description:
            "The list of scopes that are defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token",
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
      name: "start-device-authorization",
      description:
        "Initiates device authorization by requesting a pair of verification codes from the authorization service",
      options: [
        {
          name: "--client-id",
          description:
            "The unique identifier string for the client that is registered with AWS SSO. This value should come from the persisted result of the RegisterClient API operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-secret",
          description:
            "A secret string that is generated for the client. This value should come from the persisted result of the RegisterClient API operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-url",
          description:
            "The URL for the AWS SSO user portal. For more information, see Using the User Portal in the AWS Single Sign-On User Guide",
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
