const completionSpec: Fig.Spec = {
  name: "kms",
  description:
    "Key Management Service Key Management Service (KMS) is an encryption and key management web service. This guide describes the KMS operations that you can call programmatically. For general information about KMS, see the  Key Management Service Developer Guide .  KMS has replaced the term customer master key (CMK) with KMS key and KMS key. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term. Amazon Web Services provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, macOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to KMS and other Amazon Web Services services. For example, the SDKs take care of tasks such as signing requests (see below), managing errors, and retrying requests automatically. For more information about the Amazon Web Services SDKs, including how to download and install them, see Tools for Amazon Web Services.  We recommend that you use the Amazon Web Services SDKs to make programmatic API calls to KMS. If you need to use FIPS 140-2 validated cryptographic modules when communicating with Amazon Web Services, use the FIPS endpoint in your preferred Amazon Web Services Region. For more information about the available FIPS endpoints, see Service endpoints in the Key Management Service topic of the Amazon Web Services General Reference. All KMS API calls must be signed and be transmitted using Transport Layer Security (TLS). KMS recommends you always use the latest supported TLS version. Clients must also support cipher suites with Perfect Forward Secrecy (PFS) such as Ephemeral Diffie-Hellman (DHE) or Elliptic Curve Ephemeral Diffie-Hellman (ECDHE). Most modern systems such as Java 7 and later support these modes.  Signing Requests  Requests must be signed using an access key ID and a secret access key. We strongly recommend that you do not use your Amazon Web Services account root access key ID and secret access key for everyday work. You can use the access key ID and secret access key for an IAM user or you can use the Security Token Service (STS) to generate temporary security credentials and use those to sign requests.  All KMS requests must be signed with Signature Version 4.  Logging API Requests  KMS supports CloudTrail, a service that logs Amazon Web Services API calls and related events for your Amazon Web Services account and delivers them to an Amazon S3 bucket that you specify. By using the information collected by CloudTrail, you can determine what requests were made to KMS, who made the request, when it was made, and so on. To learn more about CloudTrail, including how to turn it on and find your log files, see the CloudTrail User Guide.  Additional Resources  For more information about credentials and request signing, see the following:    Amazon Web Services Security Credentials - This topic provides general information about the types of credentials used to access Amazon Web Services.    Temporary Security Credentials - This section of the IAM User Guide describes how to create and use temporary security credentials.    Signature Version 4 Signing Process - This set of topics walks you through the process of signing a request using an access key ID and a secret access key.    Commonly Used API Operations  Of the API operations discussed in this guide, the following will prove the most useful for most applications. You will likely perform operations other than these, such as creating keys and assigning policies, by using the console.    Encrypt     Decrypt     GenerateDataKey     GenerateDataKeyWithoutPlaintext",
  subcommands: [
    {
      name: "cancel-key-deletion",
      description:
        "Cancels the deletion of a KMS key. When this operation succeeds, the key state of the KMS key is Disabled. To enable the KMS key, use EnableKey.  For more information about scheduling and canceling deletion of a KMS key, see Deleting KMS keys in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:CancelKeyDeletion (key policy)  Related operations: ScheduleKeyDeletion   Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Identifies the KMS key whose deletion is being canceled. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
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
      name: "connect-custom-key-store",
      description:
        "Connects or reconnects a custom key store to its backing key store. For an CloudHSM key store, ConnectCustomKeyStore connects the key store to its associated CloudHSM cluster. For an external key store, ConnectCustomKeyStore connects the key store to the external key store proxy that communicates with your external key manager. The custom key store must be connected before you can create KMS keys in the key store or use the KMS keys it contains. You can disconnect and reconnect a custom key store at any time. The connection process for a custom key store can take an extended amount of time to complete. This operation starts the connection process, but it does not wait for it to complete. When it succeeds, this operation quickly returns an HTTP 200 response and a JSON object with no properties. However, this response does not indicate that the custom key store is connected. To get the connection state of the custom key store, use the DescribeCustomKeyStores operation.  This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. The ConnectCustomKeyStore operation might fail for various reasons. To find the reason, use the DescribeCustomKeyStores operation and see the ConnectionErrorCode in the response. For help interpreting the ConnectionErrorCode, see CustomKeyStoresListEntry. To fix the failure, use the DisconnectCustomKeyStore operation to disconnect the custom key store, correct the error, use the UpdateCustomKeyStore operation if necessary, and then use ConnectCustomKeyStore again.  CloudHSM key store  During the connection process for an CloudHSM key store, KMS finds the CloudHSM cluster that is associated with the custom key store, creates the connection infrastructure, connects to the cluster, logs into the CloudHSM client as the kmsuser CU, and rotates its password. To connect an CloudHSM key store, its associated CloudHSM cluster must have at least one active HSM. To get the number of active HSMs in a cluster, use the DescribeClusters operation. To add HSMs to the cluster, use the CreateHsm operation. Also, the  kmsuser crypto user (CU) must not be logged into the cluster. This prevents KMS from using this account to log in. If you are having trouble connecting or disconnecting a CloudHSM key store, see Troubleshooting an CloudHSM key store in the Key Management Service Developer Guide.  External key store  When you connect an external key store that uses public endpoint connectivity, KMS tests its ability to communicate with your external key manager by sending a request via the external key store proxy. When you connect to an external key store that uses VPC endpoint service connectivity, KMS establishes the networking elements that it needs to communicate with your external key manager via the external key store proxy. This includes creating an interface endpoint to the VPC endpoint service and a private hosted zone for traffic between KMS and the VPC endpoint service. To connect an external key store, KMS must be able to connect to the external key store proxy, the external key store proxy must be able to communicate with your external key manager, and the external key manager must be available for cryptographic operations. If you are having trouble connecting or disconnecting an external key store, see Troubleshooting an external key store in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.  Required permissions: kms:ConnectCustomKeyStore (IAM policy)  Related operations     CreateCustomKeyStore     DeleteCustomKeyStore     DescribeCustomKeyStores     DisconnectCustomKeyStore     UpdateCustomKeyStore     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--custom-key-store-id",
          description:
            "Enter the key store ID of the custom key store that you want to connect. To find the ID of a custom key store, use the DescribeCustomKeyStores operation",
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
      name: "create-alias",
      description:
        "Creates a friendly name for a KMS key.   Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide.  You can use an alias to identify a KMS key in the KMS console, in the DescribeKey operation and in cryptographic operations, such as Encrypt and GenerateDataKey. You can also change the KMS key that's associated with the alias (UpdateAlias) or delete the alias (DeleteAlias) at any time. These operations don't affect the underlying KMS key.  You can associate the alias with any customer managed key in the same Amazon Web Services Region. Each alias is associated with only one KMS key at a time, but a KMS key can have multiple aliases. A valid KMS key is required. You can't create an alias without a KMS key. The alias must be unique in the account and Region, but you can have aliases with the same name in different Regions. For detailed information about aliases, see Using aliases in the Key Management Service Developer Guide. This operation does not return a response. To get the alias that you created, use the ListAliases operation. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on an alias in a different Amazon Web Services account.  Required permissions     kms:CreateAlias on the alias (IAM policy).    kms:CreateAlias on the KMS key (key policy).   For details, see Controlling access to aliases in the Key Management Service Developer Guide.  Related operations:     DeleteAlias     ListAliases     UpdateAlias     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--alias-name",
          description:
            "Specifies the alias name. This value must begin with alias/ followed by a name, such as alias/ExampleAlias.   Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  The AliasName value must be string of 1-256 characters. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). The alias name cannot begin with alias/aws/. The alias/aws/ prefix is reserved for Amazon Web Services managed keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-key-id",
          description:
            "Associates the alias with the specified customer managed key. The KMS key must be in the same Amazon Web Services Region.  A valid key ID is required. If you supply a null or empty string value, this operation returns an error. For help finding the key ID and ARN, see Finding the Key ID and ARN in the  Key Management Service Developer Guide . Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
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
      name: "create-custom-key-store",
      description:
        "Creates a custom key store backed by a key store that you own and manage. When you use a KMS key in a custom key store for a cryptographic operation, the cryptographic operation is actually performed in your key store using your keys. KMS supports CloudHSM key stores backed by an CloudHSM cluster and external key stores backed by an external key store proxy and external key manager outside of Amazon Web Services.  This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. Before you create the custom key store, the required elements must be in place and operational. We recommend that you use the test tools that KMS provides to verify the configuration your external key store proxy. For details about the required elements and verification tests, see Assemble the prerequisites (for CloudHSM key stores) or Assemble the prerequisites (for external key stores) in the Key Management Service Developer Guide. To create a custom key store, use the following parameters.   To create an CloudHSM key store, specify the CustomKeyStoreName, CloudHsmClusterId, KeyStorePassword, and TrustAnchorCertificate. The CustomKeyStoreType parameter is optional for CloudHSM key stores. If you include it, set it to the default value, AWS_CLOUDHSM. For help with failures, see Troubleshooting an CloudHSM key store in the Key Management Service Developer Guide.   To create an external key store, specify the CustomKeyStoreName and a CustomKeyStoreType of EXTERNAL_KEY_STORE. Also, specify values for XksProxyConnectivity, XksProxyAuthenticationCredential, XksProxyUriEndpoint, and XksProxyUriPath. If your XksProxyConnectivity value is VPC_ENDPOINT_SERVICE, specify the XksProxyVpcEndpointServiceName parameter. For help with failures, see Troubleshooting an external key store in the Key Management Service Developer Guide.    For external key stores: Some external key managers provide a simpler method for creating an external key store. For details, see your external key manager documentation. When creating an external key store in the KMS console, you can upload a JSON-based proxy configuration file with the desired values. You cannot use a proxy configuration with the CreateCustomKeyStore operation. However, you can use the values in the file to help you determine the correct values for the CreateCustomKeyStore parameters.  When the operation completes successfully, it returns the ID of the new custom key store. Before you can use your new custom key store, you need to use the ConnectCustomKeyStore operation to connect a new CloudHSM key store to its CloudHSM cluster, or to connect a new external key store to the external key store proxy for your external key manager. Even if you are not going to use your custom key store immediately, you might want to connect it to verify that all settings are correct and then disconnect it until you are ready to use it. For help with failures, see Troubleshooting a custom key store in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.  Required permissions: kms:CreateCustomKeyStore (IAM policy).  Related operations:     ConnectCustomKeyStore     DeleteCustomKeyStore     DescribeCustomKeyStores     DisconnectCustomKeyStore     UpdateCustomKeyStore     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--custom-key-store-name",
          description:
            "Specifies a friendly name for the custom key store. The name must be unique in your Amazon Web Services account and Region. This parameter is required for all custom key stores.  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloud-hsm-cluster-id",
          description:
            "Identifies the CloudHSM cluster for an CloudHSM key store. This parameter is required for custom key stores with CustomKeyStoreType of AWS_CLOUDHSM. Enter the cluster ID of any active CloudHSM cluster that is not already associated with a custom key store. To find the cluster ID, use the DescribeClusters operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--trust-anchor-certificate",
          description:
            "Specifies the certificate for an CloudHSM key store. This parameter is required for custom key stores with a CustomKeyStoreType of AWS_CLOUDHSM. Enter the content of the trust anchor certificate for the CloudHSM cluster. This is the content of the customerCA.crt file that you created when you initialized the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-store-password",
          description:
            "Specifies the kmsuser password for an CloudHSM key store. This parameter is required for custom key stores with a CustomKeyStoreType of AWS_CLOUDHSM. Enter the password of the  kmsuser crypto user (CU) account in the specified CloudHSM cluster. KMS logs into the cluster as this user to manage key material on your behalf. The password must be a string of 7 to 32 characters. Its value is case sensitive. This parameter tells KMS the kmsuser account password; it does not change the password in the CloudHSM cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-key-store-type",
          description:
            "Specifies the type of custom key store. The default value is AWS_CLOUDHSM. For a custom key store backed by an CloudHSM cluster, omit the parameter or enter AWS_CLOUDHSM. For a custom key store backed by an external key manager outside of Amazon Web Services, enter EXTERNAL_KEY_STORE. You cannot change this property after the key store is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--xks-proxy-uri-endpoint",
          description:
            "Specifies the endpoint that KMS uses to send requests to the external key store proxy (XKS proxy). This parameter is required for custom key stores with a CustomKeyStoreType of EXTERNAL_KEY_STORE. The protocol must be HTTPS. KMS communicates on port 443. Do not specify the port in the XksProxyUriEndpoint value. For external key stores with XksProxyConnectivity value of VPC_ENDPOINT_SERVICE, specify https:// followed by the private DNS name of the VPC endpoint service. For external key stores with PUBLIC_ENDPOINT connectivity, this endpoint must be reachable before you create the custom key store. KMS connects to the external key store proxy while creating the custom key store. For external key stores with VPC_ENDPOINT_SERVICE connectivity, KMS connects when you call the ConnectCustomKeyStore operation. The value of this parameter must begin with https://. The remainder can contain upper and lower case letters (A-Z and a-z), numbers (0-9), dots (.), and hyphens (-). Additional slashes (/ and \\) are not permitted.  Uniqueness requirements:     The combined XksProxyUriEndpoint and XksProxyUriPath values must be unique in the Amazon Web Services account and Region.   An external key store with PUBLIC_ENDPOINT connectivity cannot use the same XksProxyUriEndpoint value as an external key store with VPC_ENDPOINT_SERVICE connectivity in this Amazon Web Services Region.   Each external key store with VPC_ENDPOINT_SERVICE connectivity must have its own private DNS name. The XksProxyUriEndpoint value for external key stores with VPC_ENDPOINT_SERVICE connectivity (private DNS name) must be unique in the Amazon Web Services account and Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--xks-proxy-uri-path",
          description:
            "Specifies the base path to the proxy APIs for this external key store. To find this value, see the documentation for your external key store proxy. This parameter is required for all custom key stores with a CustomKeyStoreType of EXTERNAL_KEY_STORE. The value must start with / and must end with /kms/xks/v1 where v1 represents the version of the KMS external key store proxy API. This path can include an optional prefix between the required elements such as /prefix/kms/xks/v1.  Uniqueness requirements:     The combined XksProxyUriEndpoint and XksProxyUriPath values must be unique in the Amazon Web Services account and Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--xks-proxy-vpc-endpoint-service-name",
          description:
            "Specifies the name of the Amazon VPC endpoint service for interface endpoints that is used to communicate with your external key store proxy (XKS proxy). This parameter is required when the value of CustomKeyStoreType is EXTERNAL_KEY_STORE and the value of XksProxyConnectivity is VPC_ENDPOINT_SERVICE. The Amazon VPC endpoint service must fulfill all requirements for use with an external key store.   Uniqueness requirements:    External key stores with VPC_ENDPOINT_SERVICE connectivity can share an Amazon VPC, but each external key store must have its own VPC endpoint service and private DNS name",
          args: {
            name: "string",
          },
        },
        {
          name: "--xks-proxy-authentication-credential",
          description:
            "Specifies an authentication credential for the external key store proxy (XKS proxy). This parameter is required for all custom key stores with a CustomKeyStoreType of EXTERNAL_KEY_STORE. The XksProxyAuthenticationCredential has two required elements: RawSecretAccessKey, a secret key, and AccessKeyId, a unique identifier for the RawSecretAccessKey. For character requirements, see XksProxyAuthenticationCredentialType. KMS uses this authentication credential to sign requests to the external key store proxy on your behalf. This credential is unrelated to Identity and Access Management (IAM) and Amazon Web Services credentials. This parameter doesn't set or change the authentication credentials on the XKS proxy. It just tells KMS the credential that you established on your external key store proxy. If you rotate your proxy authentication credential, use the UpdateCustomKeyStore operation to provide the new credential to KMS",
          args: {
            name: "structure",
          },
        },
        {
          name: "--xks-proxy-connectivity",
          description:
            "Indicates how KMS communicates with the external key store proxy. This parameter is required for custom key stores with a CustomKeyStoreType of EXTERNAL_KEY_STORE. If the external key store proxy uses a public endpoint, specify PUBLIC_ENDPOINT. If the external key store proxy uses a Amazon VPC endpoint service for communication with KMS, specify VPC_ENDPOINT_SERVICE. For help making this choice, see Choosing a connectivity option in the Key Management Service Developer Guide. An Amazon VPC endpoint service keeps your communication with KMS in a private address space entirely within Amazon Web Services, but it requires more configuration, including establishing a Amazon VPC with multiple subnets, a VPC endpoint service, a network load balancer, and a verified private DNS name. A public endpoint is simpler to set up, but it might be slower and might not fulfill your security requirements. You might consider testing with a public endpoint, and then establishing a VPC endpoint service for production tasks. Note that this choice does not determine the location of the external key store proxy. Even if you choose a VPC endpoint service, the proxy can be hosted within the VPC or outside of Amazon Web Services such as in your corporate data center",
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
      name: "create-grant",
      description:
        "Adds a grant to a KMS key.  A grant is a policy instrument that allows Amazon Web Services principals to use KMS keys in cryptographic operations. It also can allow them to view a KMS key (DescribeKey) and create and manage grants. When authorizing access to a KMS key, grants are considered along with key policies and IAM policies. Grants are often used for temporary permissions because you can create one, use its permissions, and delete it without changing your key policies or IAM policies.  For detailed information about grants, including grant terminology, see Grants in KMS in the  Key Management Service Developer Guide . For examples of working with grants in several programming languages, see Programming grants.  The CreateGrant operation returns a GrantToken and a GrantId.   When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as eventual consistency. Once the grant has achieved eventual consistency, the grantee principal can use the permissions in the grant without identifying the grant.  However, to use the permissions in the grant immediately, use the GrantToken that CreateGrant returns. For details, see Using a grant token in the  Key Management Service Developer Guide .   The CreateGrant operation also returns a GrantId. You can use the GrantId and a key identifier to identify the grant in the RetireGrant and RevokeGrant operations. To find the grant ID, use the ListGrants or ListRetirableGrants operations.   The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the KeyId parameter.   Required permissions: kms:CreateGrant (key policy)  Related operations:     ListGrants     ListRetirableGrants     RetireGrant     RevokeGrant     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Identifies the KMS key for the grant. The grant gives principals permission to use this KMS key. Specify the key ID or key ARN of the KMS key. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--grantee-principal",
          description:
            "The identity that gets the permissions specified in the grant. To specify the grantee principal, use the Amazon Resource Name (ARN) of an Amazon Web Services principal. Valid principals include Amazon Web Services accounts, IAM users, IAM roles, federated users, and assumed role users. For help with the ARN syntax for a principal, see IAM ARNs in the  Identity and Access Management User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--retiring-principal",
          description:
            "The principal that has permission to use the RetireGrant operation to retire the grant.  To specify the principal, use the Amazon Resource Name (ARN) of an Amazon Web Services principal. Valid principals include Amazon Web Services accounts, IAM users, IAM roles, federated users, and assumed role users. For help with the ARN syntax for a principal, see IAM ARNs in the  Identity and Access Management User Guide . The grant determines the retiring principal. Other principals might have permission to retire the grant or revoke the grant. For details, see RevokeGrant and Retiring and revoking grants in the Key Management Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--operations",
          description:
            "A list of operations that the grant permits.  This list must include only operations that are permitted in a grant. Also, the operation must be supported on the KMS key. For example, you cannot create a grant for a symmetric encryption KMS key that allows the Sign operation, or a grant for an asymmetric KMS key that allows the GenerateDataKey operation. If you try, KMS returns a ValidationError exception. For details, see Grant operations in the Key Management Service Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--constraints",
          description:
            "Specifies a grant constraint.  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  KMS supports the EncryptionContextEquals and EncryptionContextSubset grant constraints, which allow the permissions in the grant only when the encryption context in the request matches (EncryptionContextEquals) or includes (EncryptionContextSubset) the encryption context specified in the constraint.  The encryption context grant constraints are supported only on grant operations that include an EncryptionContext parameter, such as cryptographic operations on symmetric encryption KMS keys. Grants with grant constraints can include the DescribeKey and RetireGrant operations, but the constraint doesn't apply to these operations. If a grant with a grant constraint includes the CreateGrant operation, the constraint requires that any grants created with the CreateGrant permission have an equally strict or stricter encryption context constraint. You cannot use an encryption context grant constraint for cryptographic operations with asymmetric KMS keys or HMAC KMS keys. Operations with these keys don't support an encryption context. Each constraint value can include up to 8 encryption context pairs. The encryption context value in each constraint cannot exceed 384 characters. For information about grant constraints, see Using grant constraints in the Key Management Service Developer Guide. For more information about encryption context, see Encryption context in the  Key Management Service Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens.  Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          description:
            "A friendly name for the grant. Use this value to prevent the unintended creation of duplicate grants when retrying this request.  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  When this value is absent, all CreateGrant requests result in a new grant with a unique GrantId even if all the supplied parameters are identical. This can result in unintended duplicates when you retry the CreateGrant request. When this value is present, you can retry a CreateGrant request with identical parameters; if the grant already exists, the original GrantId is returned without creating a new grant. Note that the returned grant token is unique with every CreateGrant request, even when a duplicate GrantId is returned. All grant tokens for the same grant ID can be used interchangeably",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
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
      name: "create-key",
      description:
        "Creates a unique customer managed KMS key in your Amazon Web Services account and Region. You can use a KMS key in cryptographic operations, such as encryption and signing. Some Amazon Web Services services let you use KMS keys that you create and manage to protect your service resources. A KMS key is a logical representation of a cryptographic key. In addition to the key material used in cryptographic operations, a KMS key includes metadata, such as the key ID, key policy, creation date, description, and key state. For details, see Managing keys in the Key Management Service Developer Guide  Use the parameters of CreateKey to specify the type of KMS key, the source of its key material, its key policy, description, tags, and other properties.  KMS has replaced the term customer master key (CMK) with KMS key and KMS key. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.  To create different types of KMS keys, use the following guidance:  Symmetric encryption KMS key  By default, CreateKey creates a symmetric encryption KMS key with key material that KMS generates. This is the basic and most widely used type of KMS key, and provides the best performance. To create a symmetric encryption KMS key, you don't need to specify any parameters. The default value for KeySpec, SYMMETRIC_DEFAULT, the default value for KeyUsage, ENCRYPT_DECRYPT, and the default value for Origin, AWS_KMS, create a symmetric encryption KMS key with KMS key material. If you need a key for basic encryption and decryption or you are creating a KMS key to protect your resources in an Amazon Web Services service, create a symmetric encryption KMS key. The key material in a symmetric encryption key never leaves KMS unencrypted. You can use a symmetric encryption KMS key to encrypt and decrypt data up to 4,096 bytes, but they are typically used to generate data keys and data keys pairs. For details, see GenerateDataKey and GenerateDataKeyPair.    Asymmetric KMS keys  To create an asymmetric KMS key, use the KeySpec parameter to specify the type of key material in the KMS key. Then, use the KeyUsage parameter to determine whether the KMS key will be used to encrypt and decrypt or sign and verify. You can't change these properties after the KMS key is created. Asymmetric KMS keys contain an RSA key pair, Elliptic Curve (ECC) key pair, or an SM2 key pair (China Regions only). The private key in an asymmetric KMS key never leaves KMS unencrypted. However, you can use the GetPublicKey operation to download the public key so it can be used outside of KMS. Each KMS key can have only one key usage. KMS keys with RSA key pairs can be used to encrypt and decrypt data or sign and verify messages (but not both). KMS keys with NIST-recommended ECC key pairs can be used to sign and verify messages or derive shared secrets (but not both). KMS keys with ECC_SECG_P256K1 can be used only to sign and verify messages. KMS keys with SM2 key pairs (China Regions only) can be used to either encrypt and decrypt data, sign and verify messages, or derive shared secrets (you must choose one key usage type). For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide.    HMAC KMS key  To create an HMAC KMS key, set the KeySpec parameter to a key spec value for HMAC KMS keys. Then set the KeyUsage parameter to GENERATE_VERIFY_MAC. You must set the key usage even though GENERATE_VERIFY_MAC is the only valid key usage value for HMAC KMS keys. You can't change these properties after the KMS key is created. HMAC KMS keys are symmetric keys that never leave KMS unencrypted. You can use HMAC keys to generate (GenerateMac) and verify (VerifyMac) HMAC codes for messages up to 4096 bytes.    Multi-Region primary keys Imported key material  To create a multi-Region primary key in the local Amazon Web Services Region, use the MultiRegion parameter with a value of True. To create a multi-Region replica key, that is, a KMS key with the same key ID and key material as a primary key, but in a different Amazon Web Services Region, use the ReplicateKey operation. To change a replica key to a primary key, and its primary key to a replica key, use the UpdatePrimaryRegion operation. You can create multi-Region KMS keys for all supported KMS key types: symmetric encryption KMS keys, HMAC KMS keys, asymmetric encryption KMS keys, and asymmetric signing KMS keys. You can also create multi-Region keys with imported key material. However, you can't create multi-Region keys in a custom key store. This operation supports multi-Region keys, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide.     To import your own key material into a KMS key, begin by creating a KMS key with no key material. To do this, use the Origin parameter of CreateKey with a value of EXTERNAL. Next, use GetParametersForImport operation to get a public key and import token. Use the wrapping public key to encrypt your key material. Then, use ImportKeyMaterial with your import token to import the key material. For step-by-step instructions, see Importing Key Material in the  Key Management Service Developer Guide . You can import key material into KMS keys of all supported KMS key types: symmetric encryption KMS keys, HMAC KMS keys, asymmetric encryption KMS keys, and asymmetric signing KMS keys. You can also create multi-Region keys with imported key material. However, you can't import key material into a KMS key in a custom key store. To create a multi-Region primary key with imported key material, use the Origin parameter of CreateKey with a value of EXTERNAL and the MultiRegion parameter with a value of True. To create replicas of the multi-Region primary key, use the ReplicateKey operation. For instructions, see Importing key material into multi-Region keys. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide.    Custom key store  A custom key store lets you protect your Amazon Web Services resources using keys in a backing key store that you own and manage. When you request a cryptographic operation with a KMS key in a custom key store, the operation is performed in the backing key store using its cryptographic keys. KMS supports CloudHSM key stores backed by an CloudHSM cluster and external key stores backed by an external key manager outside of Amazon Web Services. When you create a KMS key in an CloudHSM key store, KMS generates an encryption key in the CloudHSM cluster and associates it with the KMS key. When you create a KMS key in an external key store, you specify an existing encryption key in the external key manager.  Some external key managers provide a simpler method for creating a KMS key in an external key store. For details, see your external key manager documentation.  Before you create a KMS key in a custom key store, the ConnectionState of the key store must be CONNECTED. To connect the custom key store, use the ConnectCustomKeyStore operation. To find the ConnectionState, use the DescribeCustomKeyStores operation. To create a KMS key in a custom key store, use the CustomKeyStoreId. Use the default KeySpec value, SYMMETRIC_DEFAULT, and the default KeyUsage value, ENCRYPT_DECRYPT to create a symmetric encryption key. No other key type is supported in a custom key store. To create a KMS key in an CloudHSM key store, use the Origin parameter with a value of AWS_CLOUDHSM. The CloudHSM cluster that is associated with the custom key store must have at least two active HSMs in different Availability Zones in the Amazon Web Services Region. To create a KMS key in an external key store, use the Origin parameter with a value of EXTERNAL_KEY_STORE and an XksKeyId parameter that identifies an existing external key.  Some external key managers provide a simpler method for creating a KMS key in an external key store. For details, see your external key manager documentation.     Cross-account use: No. You cannot use this operation to create a KMS key in a different Amazon Web Services account.  Required permissions: kms:CreateKey (IAM policy). To use the Tags parameter, kms:TagResource (IAM policy). For examples and information about related permissions, see Allow a user to create KMS keys in the Key Management Service Developer Guide.  Related operations:     DescribeKey     ListKeys     ScheduleKeyDeletion     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--policy",
          description:
            "The key policy to attach to the KMS key. If you provide a key policy, it must meet the following criteria:   The key policy must allow the calling principal to make a subsequent PutKeyPolicy request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, see Default key policy in the Key Management Service Developer Guide. (To omit this condition, set BypassPolicyLockoutSafetyCheck to true.)   Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to KMS. When you create a new Amazon Web Services principal, you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to KMS. For more information, see Changes that I make are not always immediately visible in the Amazon Web Services Identity and Access Management User Guide.   If you do not provide a key policy, KMS attaches a default key policy to the KMS key. For more information, see Default key policy in the Key Management Service Developer Guide.  The key policy size quota is 32 kilobytes (32768 bytes). For help writing and formatting a JSON policy document, see the IAM JSON Policy Reference in the  Identity and Access Management User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the KMS key. Use a description that helps you decide whether the KMS key is appropriate for a task. The default value is an empty string (no description).  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  To set or change the description after the key is created, use UpdateKeyDescription",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-usage",
          description:
            "Determines the cryptographic operations for which you can use the KMS key. The default value is ENCRYPT_DECRYPT. This parameter is optional when you are creating a symmetric encryption KMS key; otherwise, it is required. You can't change the KeyUsage value after the KMS key is created. Select only one valid value.   For symmetric encryption KMS keys, omit the parameter or specify ENCRYPT_DECRYPT.   For HMAC KMS keys (symmetric), specify GENERATE_VERIFY_MAC.   For asymmetric KMS keys with RSA key pairs, specify ENCRYPT_DECRYPT or SIGN_VERIFY.   For asymmetric KMS keys with NIST-recommended elliptic curve key pairs, specify SIGN_VERIFY or KEY_AGREEMENT.   For asymmetric KMS keys with ECC_SECG_P256K1 key pairs specify SIGN_VERIFY.   For asymmetric KMS keys with SM2 key pairs (China Regions only), specify ENCRYPT_DECRYPT, SIGN_VERIFY, or KEY_AGREEMENT",
          args: {
            name: "string",
          },
        },
        {
          name: "--customer-master-key-spec",
          description:
            "Instead, use the KeySpec parameter. The KeySpec and CustomerMasterKeySpec parameters work the same way. Only the names differ. We recommend that you use KeySpec parameter in your code. However, to avoid breaking changes, KMS supports both parameters",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-spec",
          description:
            "Specifies the type of KMS key to create. The default value, SYMMETRIC_DEFAULT, creates a KMS key with a 256-bit AES-GCM key that is used for encryption and decryption, except in China Regions, where it creates a 128-bit symmetric key that uses SM4 encryption. For help choosing a key spec for your KMS key, see Choosing a KMS key type in the  Key Management Service Developer Guide . The KeySpec determines whether the KMS key contains a symmetric key or an asymmetric key pair. It also determines the algorithms that the KMS key supports. You can't change the KeySpec after the KMS key is created. To further restrict the algorithms that can be used with the KMS key, use a condition key in its key policy or IAM policy. For more information, see kms:EncryptionAlgorithm, kms:MacAlgorithm or kms:Signing Algorithm in the  Key Management Service Developer Guide .   Amazon Web Services services that are integrated with KMS use symmetric encryption KMS keys to protect your data. These services do not support asymmetric KMS keys or HMAC KMS keys.  KMS supports the following key specs for KMS keys:   Symmetric encryption key (default)    SYMMETRIC_DEFAULT      HMAC keys (symmetric)    HMAC_224     HMAC_256     HMAC_384     HMAC_512      Asymmetric RSA key pairs (encryption and decryption -or- signing and verification)    RSA_2048     RSA_3072     RSA_4096      Asymmetric NIST-recommended elliptic curve key pairs (signing and verification -or- deriving shared secrets)    ECC_NIST_P256 (secp256r1)    ECC_NIST_P384 (secp384r1)    ECC_NIST_P521 (secp521r1)     Other asymmetric elliptic curve key pairs (signing and verification)    ECC_SECG_P256K1 (secp256k1), commonly used for cryptocurrencies.     SM2 key pairs (encryption and decryption -or- signing and verification -or- deriving shared secrets)    SM2 (China Regions only)",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin",
          description:
            "The source of the key material for the KMS key. You cannot change the origin after you create the KMS key. The default is AWS_KMS, which means that KMS creates the key material. To create a KMS key with no key material (for imported key material), set this value to EXTERNAL. For more information about importing key material into KMS, see Importing Key Material in the Key Management Service Developer Guide. The EXTERNAL origin value is valid only for symmetric KMS keys. To create a KMS key in an CloudHSM key store and create its key material in the associated CloudHSM cluster, set this value to AWS_CLOUDHSM. You must also use the CustomKeyStoreId parameter to identify the CloudHSM key store. The KeySpec value must be SYMMETRIC_DEFAULT. To create a KMS key in an external key store, set this value to EXTERNAL_KEY_STORE. You must also use the CustomKeyStoreId parameter to identify the external key store and the XksKeyId parameter to identify the associated external key. The KeySpec value must be SYMMETRIC_DEFAULT",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-key-store-id",
          description:
            "Creates the KMS key in the specified custom key store. The ConnectionState of the custom key store must be CONNECTED. To find the CustomKeyStoreID and ConnectionState use the DescribeCustomKeyStores operation. This parameter is valid only for symmetric encryption KMS keys in a single Region. You cannot create any other type of KMS key in a custom key store. When you create a KMS key in an CloudHSM key store, KMS generates a non-exportable 256-bit symmetric key in its associated CloudHSM cluster and associates it with the KMS key. When you create a KMS key in an external key store, you must use the XksKeyId parameter to specify an external key that serves as key material for the KMS key",
          args: {
            name: "string",
          },
        },
        {
          name: "--bypass-policy-lockout-safety-check",
          description:
            'Skips ("bypasses") the key policy lockout safety check. The default value is false.  Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately. For more information, see Default key policy in the Key Management Service Developer Guide.  Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent PutKeyPolicy request on the KMS key',
        },
        {
          name: "--no-bypass-policy-lockout-safety-check",
          description:
            'Skips ("bypasses") the key policy lockout safety check. The default value is false.  Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately. For more information, see Default key policy in the Key Management Service Developer Guide.  Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent PutKeyPolicy request on the KMS key',
        },
        {
          name: "--tags",
          description:
            "Assigns one or more tags to the KMS key. Use this parameter to tag the KMS key when it is created. To tag an existing KMS key, use the TagResource operation.  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.   Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide.  To use this parameter, you must have kms:TagResource permission in an IAM policy. Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You cannot have more than one tag on a KMS key with the same tag key. If you specify an existing tag key with a different tag value, KMS replaces the current tag value with the specified one. When you add tags to an Amazon Web Services resource, Amazon Web Services generates a cost allocation report with usage and costs aggregated by tags. Tags can also be used to control access to a KMS key. For details, see Tagging Keys",
          args: {
            name: "list",
          },
        },
        {
          name: "--multi-region",
          description:
            "Creates a multi-Region primary key that you can replicate into other Amazon Web Services Regions. You cannot change this value after you create the KMS key.  For a multi-Region key, set this parameter to True. For a single-Region KMS key, omit this parameter or set it to False. The default value is False. This operation supports multi-Region keys, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide. This value creates a primary key, not a replica. To create a replica key, use the ReplicateKey operation.  You can create a symmetric or asymmetric multi-Region key, and you can create a multi-Region key with imported key material. However, you cannot create a multi-Region key in a custom key store",
        },
        {
          name: "--no-multi-region",
          description:
            "Creates a multi-Region primary key that you can replicate into other Amazon Web Services Regions. You cannot change this value after you create the KMS key.  For a multi-Region key, set this parameter to True. For a single-Region KMS key, omit this parameter or set it to False. The default value is False. This operation supports multi-Region keys, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide. This value creates a primary key, not a replica. To create a replica key, use the ReplicateKey operation.  You can create a symmetric or asymmetric multi-Region key, and you can create a multi-Region key with imported key material. However, you cannot create a multi-Region key in a custom key store",
        },
        {
          name: "--xks-key-id",
          description:
            "Identifies the external key that serves as key material for the KMS key in an external key store. Specify the ID that the external key store proxy uses to refer to the external key. For help, see the documentation for your external key store proxy. This parameter is required for a KMS key with an Origin value of EXTERNAL_KEY_STORE. It is not valid for KMS keys with any other Origin value. The external key must be an existing 256-bit AES symmetric encryption key hosted outside of Amazon Web Services in an external key manager associated with the external key store specified by the CustomKeyStoreId parameter. This key must be enabled and configured to perform encryption and decryption. Each KMS key in an external key store must use a different external key. For details, see Requirements for a KMS key in an external key store in the Key Management Service Developer Guide. Each KMS key in an external key store is associated two backing keys. One is key material that KMS generates. The other is the external key specified by this parameter. When you use the KMS key in an external key store to encrypt data, the encryption operation is performed first by KMS using the KMS key material, and then by the external key manager using the specified external key, a process known as double encryption. For details, see Double encryption in the Key Management Service Developer Guide",
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
      name: "decrypt",
      description:
        "Decrypts ciphertext that was encrypted by a KMS key using any of the following operations:    Encrypt     GenerateDataKey     GenerateDataKeyPair     GenerateDataKeyWithoutPlaintext     GenerateDataKeyPairWithoutPlaintext    You can use this operation to decrypt ciphertext that was encrypted under a symmetric encryption KMS key or an asymmetric encryption KMS key. When the KMS key is asymmetric, you must specify the KMS key and the encryption algorithm that was used to encrypt the ciphertext. For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide. The Decrypt operation also decrypts ciphertext that was encrypted outside of KMS by the public key in an KMS asymmetric KMS key. However, it cannot decrypt symmetric ciphertext produced by other libraries, such as the Amazon Web Services Encryption SDK or Amazon S3 client-side encryption. These libraries return a ciphertext format that is incompatible with KMS. If the ciphertext was encrypted under a symmetric encryption KMS key, the KeyId parameter is optional. KMS can get this information from metadata that it adds to the symmetric ciphertext blob. This feature adds durability to your implementation by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost track of the key ID. However, specifying the KMS key is always recommended as a best practice. When you use the KeyId parameter to specify a KMS key, KMS only uses the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the Decrypt operation fails. This practice ensures that you use the KMS key that you intend. Whenever possible, use key policies to give users permission to call the Decrypt operation on a particular KMS key, instead of using &IAM; policies. Otherwise, you might create an &IAM; policy that gives the user Decrypt permission on all KMS keys. This user could decrypt ciphertext that was encrypted by KMS keys in other accounts if the key policy for the cross-account KMS key permits it. If you must use an IAM policy for Decrypt permissions, limit the user to particular KMS keys or particular trusted accounts. For details, see Best practices for IAM policies in the Key Management Service Developer Guide.  Decrypt also supports Amazon Web Services Nitro Enclaves, which provide an isolated compute environment in Amazon EC2. To call Decrypt for a Nitro enclave, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. Use the Recipient parameter to provide the attestation document for the enclave. Instead of the plaintext data, the response includes the plaintext data encrypted with the public key from the attestation document (CiphertextForRecipient). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see How Amazon Web Services Nitro Enclaves uses KMS in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: Yes. If you use the KeyId parameter to identify a KMS key in a different Amazon Web Services account, specify the key ARN or the alias ARN of the KMS key.  Required permissions: kms:Decrypt (key policy)  Related operations:     Encrypt     GenerateDataKey     GenerateDataKeyPair     ReEncrypt     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--ciphertext-blob",
          description: "Ciphertext to be decrypted. The blob includes metadata",
          args: {
            name: "blob",
          },
        },
        {
          name: "--encryption-context",
          description:
            "Specifies the encryption context to use when decrypting the data. An encryption context is valid only for cryptographic operations with a symmetric encryption KMS key. The standard asymmetric encryption algorithms and HMAC algorithms that KMS uses do not support an encryption context. An encryption context is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended. For more information, see Encryption context in the Key Management Service Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens.  Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--key-id",
          description:
            'Specifies the KMS key that KMS uses to decrypt the ciphertext. Enter a key ID of the KMS key that was used to encrypt the ciphertext. If you identify a different KMS key, the Decrypt operation throws an IncorrectKeyException. This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key. If you used a symmetric encryption KMS key, KMS can get the KMS key from metadata that it adds to the symmetric ciphertext blob. However, it is always recommended as a best practice. This practice ensures that you use the KMS key that you intend. To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases',
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-algorithm",
          description:
            "Specifies the encryption algorithm that will be used to decrypt the ciphertext. Specify the same algorithm that was used to encrypt the data. If you specify a different algorithm, the Decrypt operation fails. This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key. The default value, SYMMETRIC_DEFAULT, represents the only supported algorithm that is valid for symmetric encryption KMS keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--recipient",
          description:
            "A signed attestation document from an Amazon Web Services Nitro enclave and the encryption algorithm to use with the enclave's public key. The only valid encryption algorithm is RSAES_OAEP_SHA_256.  This parameter only supports attestation documents for Amazon Web Services Nitro Enclaves. To include this parameter, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. When you use this parameter, instead of returning the plaintext data, KMS encrypts the plaintext data with the public key in the attestation document, and returns the resulting ciphertext in the CiphertextForRecipient field in the response. This ciphertext can be decrypted only with the private key in the enclave. The Plaintext field in the response is null or empty. For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see How Amazon Web Services Nitro Enclaves uses KMS in the Key Management Service Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
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
      name: "delete-alias",
      description:
        "Deletes the specified alias.   Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide.  Because an alias is not a property of a KMS key, you can delete and change the aliases of a KMS key without affecting the KMS key. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases of all KMS keys, use the ListAliases operation.  Each KMS key can have multiple aliases. To change the alias of a KMS key, use DeleteAlias to delete the current alias and CreateAlias to create a new alias. To associate an existing alias with a different KMS key, call UpdateAlias.  Cross-account use: No. You cannot perform this operation on an alias in a different Amazon Web Services account.  Required permissions     kms:DeleteAlias on the alias (IAM policy).    kms:DeleteAlias on the KMS key (key policy).   For details, see Controlling access to aliases in the Key Management Service Developer Guide.  Related operations:     CreateAlias     ListAliases     UpdateAlias     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--alias-name",
          description:
            "The alias to be deleted. The alias name must begin with alias/ followed by the alias name, such as alias/ExampleAlias",
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
      name: "delete-custom-key-store",
      description:
        "Deletes a custom key store. This operation does not affect any backing elements of the custom key store. It does not delete the CloudHSM cluster that is associated with an CloudHSM key store, or affect any users or keys in the cluster. For an external key store, it does not affect the external key store proxy, external key manager, or any external keys.  This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. The custom key store that you delete cannot contain any KMS keys. Before deleting the key store, verify that you will never need to use any of the KMS keys in the key store for any cryptographic operations. Then, use ScheduleKeyDeletion to delete the KMS keys from the key store. After the required waiting period expires and all KMS keys are deleted from the custom key store, use DisconnectCustomKeyStore to disconnect the key store from KMS. Then, you can delete the custom key store. For keys in an CloudHSM key store, the ScheduleKeyDeletion operation makes a best effort to delete the key material from the associated cluster. However, you might need to manually delete the orphaned key material from the cluster and its backups. KMS never creates, manages, or deletes cryptographic keys in the external key manager associated with an external key store. You must manage them using your external key manager tools. Instead of deleting the custom key store, consider using the DisconnectCustomKeyStore operation to disconnect the custom key store from its backing key store. While the key store is disconnected, you cannot create or use the KMS keys in the key store. But, you do not need to delete KMS keys and you can reconnect a disconnected custom key store at any time. If the operation succeeds, it returns a JSON object with no properties.  Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.  Required permissions: kms:DeleteCustomKeyStore (IAM policy)  Related operations:     ConnectCustomKeyStore     CreateCustomKeyStore     DescribeCustomKeyStores     DisconnectCustomKeyStore     UpdateCustomKeyStore     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--custom-key-store-id",
          description:
            "Enter the ID of the custom key store you want to delete. To find the ID of a custom key store, use the DescribeCustomKeyStores operation",
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
      name: "delete-imported-key-material",
      description:
        "Deletes key material that was previously imported. This operation makes the specified KMS key temporarily unusable. To restore the usability of the KMS key, reimport the same key material. For more information about importing key material into KMS, see Importing Key Material in the Key Management Service Developer Guide. When the specified KMS key is in the PendingDeletion state, this operation does not change the KMS key's state. Otherwise, it changes the KMS key's state to PendingImport. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:DeleteImportedKeyMaterial (key policy)  Related operations:     GetParametersForImport     ImportKeyMaterial     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Identifies the KMS key from which you are deleting imported key material. The Origin of the KMS key must be EXTERNAL. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
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
      name: "derive-shared-secret",
      description:
        "Derives a shared secret using a key agreement algorithm.  You must use an asymmetric NIST-recommended elliptic curve (ECC) or SM2 (China Regions only) KMS key pair with a KeyUsage value of KEY_AGREEMENT to call DeriveSharedSecret.  DeriveSharedSecret uses the Elliptic Curve Cryptography Cofactor Diffie-Hellman Primitive (ECDH) to establish a key agreement between two peers by deriving a shared secret from their elliptic curve public-private key pairs. You can use the raw shared secret that DeriveSharedSecret returns to derive a symmetric key that can encrypt and decrypt data that is sent between the two peers, or that can generate and verify HMACs. KMS recommends that you follow NIST recommendations for key derivation when using the raw shared secret to derive a symmetric key. The following workflow demonstrates how to establish key agreement over an insecure communication channel using DeriveSharedSecret.    Alice calls CreateKey to create an asymmetric KMS key pair with a KeyUsage value of KEY_AGREEMENT. The asymmetric KMS key must use a NIST-recommended elliptic curve (ECC) or SM2 (China Regions only) key spec.    Bob creates an elliptic curve key pair. Bob can call CreateKey to create an asymmetric KMS key pair or generate a key pair outside of KMS. Bob's key pair must use the same NIST-recommended elliptic curve (ECC) or SM2 (China Regions ony) curve as Alice.   Alice and Bob exchange their public keys through an insecure communication channel (like the internet). Use GetPublicKey to download the public key of your asymmetric KMS key pair.  KMS strongly recommends verifying that the public key you receive came from the expected party before using it to derive a shared secret.     Alice calls DeriveSharedSecret. KMS uses the private key from the KMS key pair generated in Step 1, Bob's public key, and the Elliptic Curve Cryptography Cofactor Diffie-Hellman Primitive to derive the shared secret. The private key in your KMS key pair never leaves KMS unencrypted. DeriveSharedSecret returns the raw shared secret.    Bob uses the Elliptic Curve Cryptography Cofactor Diffie-Hellman Primitive to calculate the same raw secret using his private key and Alice's public key.   To derive a shared secret you must provide a key agreement algorithm, the private key of the caller's asymmetric NIST-recommended elliptic curve or SM2 (China Regions only) KMS key pair, and the public key from your peer's NIST-recommended elliptic curve or SM2 (China Regions only) key pair. The public key can be from another asymmetric KMS key pair or from a key pair generated outside of KMS, but both key pairs must be on the same elliptic curve. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter.  Required permissions: kms:DeriveSharedSecret (key policy)  Related operations:     CreateKey     GetPublicKey     DescribeKey     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            'Identifies an asymmetric NIST-recommended ECC or SM2 (China Regions only) KMS key. KMS uses the private key in the specified key pair to derive the shared secret. The key usage of the KMS key must be KEY_AGREEMENT. To find the KeyUsage of a KMS key, use the DescribeKey operation. To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases',
          args: {
            name: "string",
          },
        },
        {
          name: "--key-agreement-algorithm",
          description:
            "Specifies the key agreement algorithm used to derive the shared secret. The only valid value is ECDH",
          args: {
            name: "string",
          },
        },
        {
          name: "--public-key",
          description:
            "Specifies the public key in your peer's NIST-recommended elliptic curve (ECC) or SM2 (China Regions only) key pair. The public key must be a DER-encoded X.509 public key, also known as SubjectPublicKeyInfo (SPKI), as defined in RFC 5280.  GetPublicKey returns the public key of an asymmetric KMS key pair in the required DER-encoded format.  If you use Amazon Web Services CLI version 1, you must provide the DER-encoded X.509 public key in a file. Otherwise, the Amazon Web Services CLI Base64-encodes the public key a second time, resulting in a ValidationException.  You can specify the public key as binary data in a file using fileb (fileb://<path-to-file>) or in-line using a Base64 encoded string",
          args: {
            name: "blob",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--recipient",
          description:
            "A signed attestation document from an Amazon Web Services Nitro enclave and the encryption algorithm to use with the enclave's public key. The only valid encryption algorithm is RSAES_OAEP_SHA_256.  This parameter only supports attestation documents for Amazon Web Services Nitro Enclaves. To call DeriveSharedSecret for an Amazon Web Services Nitro Enclaves, use the Amazon Web Services Nitro Enclaves SDK to generate the attestation document and then use the Recipient parameter from any Amazon Web Services SDK to provide the attestation document for the enclave. When you use this parameter, instead of returning a plaintext copy of the shared secret, KMS encrypts the plaintext shared secret under the public key in the attestation document, and returns the resulting ciphertext in the CiphertextForRecipient field in the response. This ciphertext can be decrypted only with the private key in the enclave. The CiphertextBlob field in the response contains the encrypted shared secret derived from the KMS key specified by the KeyId parameter and public key specified by the PublicKey parameter. The SharedSecret field in the response is null or empty. For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see How Amazon Web Services Nitro Enclaves uses KMS in the Key Management Service Developer Guide",
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
      name: "describe-custom-key-stores",
      description:
        "Gets information about custom key stores in the account and Region.  This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. By default, this operation returns information about all custom key stores in the account and Region. To get only information about a particular custom key store, use either the CustomKeyStoreName or CustomKeyStoreId parameter (but not both). To determine whether the custom key store is connected to its CloudHSM cluster or external key store proxy, use the ConnectionState element in the response. If an attempt to connect the custom key store failed, the ConnectionState value is FAILED and the ConnectionErrorCode element in the response indicates the cause of the failure. For help interpreting the ConnectionErrorCode, see CustomKeyStoresListEntry. Custom key stores have a DISCONNECTED connection state if the key store has never been connected or you used the DisconnectCustomKeyStore operation to disconnect it. Otherwise, the connection state is CONNECTED. If your custom key store connection state is CONNECTED but you are having trouble using it, verify that the backing store is active and available. For an CloudHSM key store, verify that the associated CloudHSM cluster is active and contains the minimum number of HSMs required for the operation, if any. For an external key store, verify that the external key store proxy and its associated external key manager are reachable and enabled.  For help repairing your CloudHSM key store, see the Troubleshooting CloudHSM key stores. For help repairing your external key store, see the Troubleshooting external key stores. Both topics are in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.  Required permissions: kms:DescribeCustomKeyStores (IAM policy)  Related operations:     ConnectCustomKeyStore     CreateCustomKeyStore     DeleteCustomKeyStore     DisconnectCustomKeyStore     UpdateCustomKeyStore     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--custom-key-store-id",
          description:
            "Gets only information about the specified custom key store. Enter the key store ID. By default, this operation gets information about all custom key stores in the account and Region. To limit the output to a particular custom key store, provide either the CustomKeyStoreId or CustomKeyStoreName parameter, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-key-store-name",
          description:
            "Gets only information about the specified custom key store. Enter the friendly name of the custom key store. By default, this operation gets information about all custom key stores in the account and Region. To limit the output to a particular custom key store, provide either the CustomKeyStoreId or CustomKeyStoreName parameter, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received",
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
      name: "describe-key",
      description:
        "Provides detailed information about a KMS key. You can run DescribeKey on a customer managed key or an Amazon Web Services managed key. This detailed information includes the key ARN, creation date (and deletion date, if applicable), the key state, and the origin and expiration date (if any) of the key material. It includes fields, like KeySpec, that help you distinguish different types of KMS keys. It also displays the key usage (encryption, signing, or generating and verifying MACs) and the algorithms that the KMS key supports.  For multi-Region keys, DescribeKey displays the primary key and all related replica keys. For KMS keys in CloudHSM key stores, it includes information about the key store, such as the key store ID and the CloudHSM cluster ID. For KMS keys in external key stores, it includes the custom key store ID and the ID of the external key.  DescribeKey does not return the following information:   Aliases associated with the KMS key. To get this information, use ListAliases.   Whether automatic key rotation is enabled on the KMS key. To get this information, use GetKeyRotationStatus. Also, some key states prevent a KMS key from being automatically rotated. For details, see How Automatic Key Rotation Works in the Key Management Service Developer Guide.   Tags on the KMS key. To get this information, use ListResourceTags.   Key policies and grants on the KMS key. To get this information, use GetKeyPolicy and ListGrants.   In general, DescribeKey is a non-mutating operation. It returns data about KMS keys, but doesn't change them. However, Amazon Web Services services use DescribeKey to create Amazon Web Services managed keys from a predefined Amazon Web Services alias with no key ID.  Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter.  Required permissions: kms:DescribeKey (key policy)  Related operations:     GetKeyPolicy     GetKeyRotationStatus     ListAliases     ListGrants     ListKeys     ListResourceTags     ListRetirableGrants     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            'Describes the specified KMS key.  If you specify a predefined Amazon Web Services alias (an Amazon Web Services alias with no key ID), KMS associates the alias with an Amazon Web Services managed key and returns its KeyId and Arn in the response. To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases',
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
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
      name: "disable-key",
      description:
        "Sets the state of a KMS key to disabled. This change temporarily prevents use of the KMS key for cryptographic operations.  For more information about how key state affects the use of a KMS key, see Key states of KMS keys in the  Key Management Service Developer Guide . The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:DisableKey (key policy)  Related operations: EnableKey   Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Identifies the KMS key to disable. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
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
      name: "disable-key-rotation",
      description:
        "Disables automatic rotation of the key material of the specified symmetric encryption KMS key. Automatic key rotation is supported only on symmetric encryption KMS keys. You cannot enable automatic rotation of asymmetric KMS keys, HMAC KMS keys, KMS keys with imported key material, or KMS keys in a custom key store. To enable or disable automatic rotation of a set of related multi-Region keys, set the property on the primary key. You can enable (EnableKeyRotation) and disable automatic rotation of the key material in customer managed KMS keys. Key material rotation of Amazon Web Services managed KMS keys is not configurable. KMS always rotates the key material for every year. Rotation of Amazon Web Services owned KMS keys varies.  In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years to every year. For details, see EnableKeyRotation.  The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:DisableKeyRotation (key policy)  Related operations:     EnableKeyRotation     GetKeyRotationStatus     ListKeyRotations     RotateKeyOnDemand     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Identifies a symmetric encryption KMS key. You cannot enable or disable automatic rotation of asymmetric KMS keys, HMAC KMS keys, KMS keys with imported key material, or KMS keys in a custom key store. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
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
      name: "disconnect-custom-key-store",
      description:
        "Disconnects the custom key store from its backing key store. This operation disconnects an CloudHSM key store from its associated CloudHSM cluster or disconnects an external key store from the external key store proxy that communicates with your external key manager.  This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. While a custom key store is disconnected, you can manage the custom key store and its KMS keys, but you cannot create or use its KMS keys. You can reconnect the custom key store at any time.  While a custom key store is disconnected, all attempts to create KMS keys in the custom key store or to use existing KMS keys in cryptographic operations will fail. This action can prevent users from storing and accessing sensitive data.  When you disconnect a custom key store, its ConnectionState changes to Disconnected. To find the connection state of a custom key store, use the DescribeCustomKeyStores operation. To reconnect a custom key store, use the ConnectCustomKeyStore operation. If the operation succeeds, it returns a JSON object with no properties.  Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.  Required permissions: kms:DisconnectCustomKeyStore (IAM policy)  Related operations:     ConnectCustomKeyStore     CreateCustomKeyStore     DeleteCustomKeyStore     DescribeCustomKeyStores     UpdateCustomKeyStore     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--custom-key-store-id",
          description:
            "Enter the ID of the custom key store you want to disconnect. To find the ID of a custom key store, use the DescribeCustomKeyStores operation",
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
      name: "enable-key",
      description:
        "Sets the key state of a KMS key to enabled. This allows you to use the KMS key for cryptographic operations.  The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:EnableKey (key policy)  Related operations: DisableKey   Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Identifies the KMS key to enable. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
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
      name: "enable-key-rotation",
      description:
        "Enables automatic rotation of the key material of the specified symmetric encryption KMS key.  By default, when you enable automatic rotation of a customer managed KMS key, KMS rotates the key material of the KMS key one year (approximately 365 days) from the enable date and every year thereafter. You can use the optional RotationPeriodInDays parameter to specify a custom rotation period when you enable key rotation, or you can use RotationPeriodInDays to modify the rotation period of a key that you previously enabled automatic key rotation on. You can monitor rotation of the key material for your KMS keys in CloudTrail and Amazon CloudWatch. To disable rotation of the key material in a customer managed KMS key, use the DisableKeyRotation operation. You can use the GetKeyRotationStatus operation to identify any in progress rotations. You can use the ListKeyRotations operation to view the details of completed rotations. Automatic key rotation is supported only on symmetric encryption KMS keys. You cannot enable automatic rotation of asymmetric KMS keys, HMAC KMS keys, KMS keys with imported key material, or KMS keys in a custom key store. To enable or disable automatic rotation of a set of related multi-Region keys, set the property on the primary key.  You cannot enable or disable automatic rotation of Amazon Web Services managed KMS keys. KMS always rotates the key material of Amazon Web Services managed keys every year. Rotation of Amazon Web Services owned KMS keys is managed by the Amazon Web Services service that owns the key.  In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years (approximately 1,095 days) to every year (approximately 365 days). New Amazon Web Services managed keys are automatically rotated one year after they are created, and approximately every year thereafter.  Existing Amazon Web Services managed keys are automatically rotated one year after their most recent rotation, and every year thereafter.  The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:EnableKeyRotation (key policy)  Related operations:     DisableKeyRotation     GetKeyRotationStatus     ListKeyRotations     RotateKeyOnDemand   You can perform on-demand (RotateKeyOnDemand) rotation of the key material in customer managed KMS keys, regardless of whether or not automatic key rotation is enabled.     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Identifies a symmetric encryption KMS key. You cannot enable automatic rotation of asymmetric KMS keys, HMAC KMS keys, KMS keys with imported key material, or KMS keys in a custom key store. To enable or disable automatic rotation of a set of related multi-Region keys, set the property on the primary key. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--rotation-period-in-days",
          description:
            "Use this parameter to specify a custom period of time between each rotation date. If no value is specified, the default value is 365 days. The rotation period defines the number of days after you enable automatic key rotation that KMS will rotate your key material, and the number of days between each automatic rotation thereafter. You can use the  kms:RotationPeriodInDays  condition key to further constrain the values that principals can specify in the RotationPeriodInDays parameter",
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
      name: "encrypt",
      description:
        "Encrypts plaintext of up to 4,096 bytes using a KMS key. You can use a symmetric or asymmetric KMS key with a KeyUsage of ENCRYPT_DECRYPT. You can use this operation to encrypt small amounts of arbitrary data, such as a personal identifier or database password, or other sensitive information. You don't need to use the Encrypt operation to encrypt a data key. The GenerateDataKey and GenerateDataKeyPair operations return a plaintext data key and an encrypted copy of that data key. If you use a symmetric encryption KMS key, you can use an encryption context to add additional security to your encryption operation. If you specify an EncryptionContext when encrypting data, you must specify the same encryption context (a case-sensitive exact match) when decrypting the data. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide. If you specify an asymmetric KMS key, you must also specify the encryption algorithm. The algorithm must be compatible with the KMS key spec.  When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails. You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric encryption KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.  The maximum size of the data that you can encrypt varies with the type of KMS key and the encryption algorithm that you choose.   Symmetric encryption KMS keys    SYMMETRIC_DEFAULT: 4096 bytes      RSA_2048     RSAES_OAEP_SHA_1: 214 bytes    RSAES_OAEP_SHA_256: 190 bytes      RSA_3072     RSAES_OAEP_SHA_1: 342 bytes    RSAES_OAEP_SHA_256: 318 bytes      RSA_4096     RSAES_OAEP_SHA_1: 470 bytes    RSAES_OAEP_SHA_256: 446 bytes      SM2PKE: 1024 bytes (China Regions only)   The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter.  Required permissions: kms:Encrypt (key policy)  Related operations:     Decrypt     GenerateDataKey     GenerateDataKeyPair     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            'Identifies the KMS key to use in the encryption operation. The KMS key must have a KeyUsage of ENCRYPT_DECRYPT. To find the KeyUsage of a KMS key, use the DescribeKey operation. To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases',
          args: {
            name: "string",
          },
        },
        {
          name: "--plaintext",
          description: "Data to be encrypted",
          args: {
            name: "blob",
          },
        },
        {
          name: "--encryption-context",
          description:
            "Specifies the encryption context that will be used to encrypt the data. An encryption context is valid only for cryptographic operations with a symmetric encryption KMS key. The standard asymmetric encryption algorithms and HMAC algorithms that KMS uses do not support an encryption context.   Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  An encryption context is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended. For more information, see Encryption context in the Key Management Service Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--encryption-algorithm",
          description:
            "Specifies the encryption algorithm that KMS will use to encrypt the plaintext message. The algorithm must be compatible with the KMS key that you specify. This parameter is required only for asymmetric KMS keys. The default value, SYMMETRIC_DEFAULT, is the algorithm used for symmetric encryption KMS keys. If you are using an asymmetric KMS key, we recommend RSAES_OAEP_SHA_256. The SM2PKE algorithm is only available in China Regions",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
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
      name: "generate-data-key",
      description:
        "Returns a unique symmetric data key for use outside of KMS. This operation returns a plaintext copy of the data key and a copy that is encrypted under a symmetric encryption KMS key that you specify. The bytes in the plaintext key are random; they are not related to the caller or the KMS key. You can use the plaintext key to encrypt your data outside of KMS and store the encrypted data key with the encrypted data. To generate a data key, specify the symmetric encryption KMS key that will be used to encrypt the data key. You cannot use an asymmetric KMS key to encrypt data keys. To get the type of your KMS key, use the DescribeKey operation. You must also specify the length of the data key. Use either the KeySpec or NumberOfBytes parameters (but not both). For 128-bit and 256-bit data keys, use the KeySpec parameter. To generate a 128-bit SM4 data key (China Regions only), specify a KeySpec value of AES_128 or a NumberOfBytes value of 16. The symmetric encryption key used in China Regions to encrypt your data key is an SM4 encryption key. To get only an encrypted copy of the data key, use GenerateDataKeyWithoutPlaintext. To generate an asymmetric data key pair, use the GenerateDataKeyPair or GenerateDataKeyPairWithoutPlaintext operation. To get a cryptographically secure random byte string, use GenerateRandom. You can use an optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide.  GenerateDataKey also supports Amazon Web Services Nitro Enclaves, which provide an isolated compute environment in Amazon EC2. To call GenerateDataKey for an Amazon Web Services Nitro enclave, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. Use the Recipient parameter to provide the attestation document for the enclave. GenerateDataKey returns a copy of the data key encrypted under the specified KMS key, as usual. But instead of a plaintext copy of the data key, the response includes a copy of the data key encrypted under the public key from the attestation document (CiphertextForRecipient). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see How Amazon Web Services Nitro Enclaves uses KMS in the Key Management Service Developer Guide.. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  How to use your data key  We recommend that you use the following pattern to encrypt data locally in your application. You can write your own code or use a client-side encryption library, such as the Amazon Web Services Encryption SDK, the Amazon DynamoDB Encryption Client, or Amazon S3 client-side encryption to do these tasks for you. To encrypt data outside of KMS:   Use the GenerateDataKey operation to get a data key.   Use the plaintext data key (in the Plaintext field of the response) to encrypt your data outside of KMS. Then erase the plaintext data key from memory.   Store the encrypted data key (in the CiphertextBlob field of the response) with the encrypted data.   To decrypt data outside of KMS:   Use the Decrypt operation to decrypt the encrypted data key. The operation returns a plaintext copy of the data key.   Use the plaintext data key to decrypt data outside of KMS, then erase the plaintext data key from memory.    Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter.  Required permissions: kms:GenerateDataKey (key policy)  Related operations:     Decrypt     Encrypt     GenerateDataKeyPair     GenerateDataKeyPairWithoutPlaintext     GenerateDataKeyWithoutPlaintext     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            'Specifies the symmetric encryption KMS key that encrypts the data key. You cannot specify an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation. To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases',
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-context",
          description:
            "Specifies the encryption context that will be used when encrypting the data key.  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  An encryption context is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended. For more information, see Encryption context in the Key Management Service Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--number-of-bytes",
          description:
            "Specifies the length of the data key in bytes. For example, use the value 64 to generate a 512-bit data key (64 bytes is 512 bits). For 128-bit (16-byte) and 256-bit (32-byte) data keys, use the KeySpec parameter. You must specify either the KeySpec or the NumberOfBytes parameter (but not both) in every GenerateDataKey request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--key-spec",
          description:
            "Specifies the length of the data key. Use AES_128 to generate a 128-bit symmetric key, or AES_256 to generate a 256-bit symmetric key. You must specify either the KeySpec or the NumberOfBytes parameter (but not both) in every GenerateDataKey request",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--recipient",
          description:
            "A signed attestation document from an Amazon Web Services Nitro enclave and the encryption algorithm to use with the enclave's public key. The only valid encryption algorithm is RSAES_OAEP_SHA_256.  This parameter only supports attestation documents for Amazon Web Services Nitro Enclaves. To include this parameter, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. When you use this parameter, instead of returning the plaintext data key, KMS encrypts the plaintext data key under the public key in the attestation document, and returns the resulting ciphertext in the CiphertextForRecipient field in the response. This ciphertext can be decrypted only with the private key in the enclave. The CiphertextBlob field in the response contains a copy of the data key encrypted under the KMS key specified by the KeyId parameter. The Plaintext field in the response is null or empty. For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see How Amazon Web Services Nitro Enclaves uses KMS in the Key Management Service Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
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
      name: "generate-data-key-pair",
      description:
        "Returns a unique asymmetric data key pair for use outside of KMS. This operation returns a plaintext public key, a plaintext private key, and a copy of the private key that is encrypted under the symmetric encryption KMS key you specify. You can use the data key pair to perform asymmetric cryptography and implement digital signatures outside of KMS. The bytes in the keys are random; they are not related to the caller or to the KMS key that is used to encrypt the private key.  You can use the public key that GenerateDataKeyPair returns to encrypt data or verify a signature outside of KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the Decrypt operation to decrypt the encrypted private key. To generate a data key pair, you must specify a symmetric encryption KMS key to encrypt the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation.  Use the KeyPairSpec parameter to choose an RSA or Elliptic Curve (ECC) data key pair. In China Regions, you can also choose an SM2 data key pair. KMS recommends that you use ECC key pairs for signing, and use RSA and SM2 key pairs for either encryption or signing, but not both. However, KMS cannot enforce any restrictions on the use of data key pairs outside of KMS. If you are using the data key pair to encrypt data, or for any operation where you don't immediately need a private key, consider using the GenerateDataKeyPairWithoutPlaintext operation. GenerateDataKeyPairWithoutPlaintext returns a plaintext public key and an encrypted private key, but omits the plaintext private key that you need only to decrypt ciphertext or sign a message. Later, when you need to decrypt the data or sign a message, use the Decrypt operation to decrypt the encrypted private key in the data key pair.  GenerateDataKeyPair returns a unique data key pair for each request. The bytes in the keys are random; they are not related to the caller or the KMS key that is used to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as specified in RFC 5280. The private key is a DER-encoded PKCS8 PrivateKeyInfo, as specified in RFC 5958.  GenerateDataKeyPair also supports Amazon Web Services Nitro Enclaves, which provide an isolated compute environment in Amazon EC2. To call GenerateDataKeyPair for an Amazon Web Services Nitro enclave, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. Use the Recipient parameter to provide the attestation document for the enclave. GenerateDataKeyPair returns the public data key and a copy of the private data key encrypted under the specified KMS key, as usual. But instead of a plaintext copy of the private data key (PrivateKeyPlaintext), the response includes a copy of the private data key encrypted under the public key from the attestation document (CiphertextForRecipient). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see How Amazon Web Services Nitro Enclaves uses KMS in the Key Management Service Developer Guide.. You can use an optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter.  Required permissions: kms:GenerateDataKeyPair (key policy)  Related operations:     Decrypt     Encrypt     GenerateDataKey     GenerateDataKeyPairWithoutPlaintext     GenerateDataKeyWithoutPlaintext     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--encryption-context",
          description:
            "Specifies the encryption context that will be used when encrypting the private key in the data key pair.  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  An encryption context is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended. For more information, see Encryption context in the Key Management Service Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--key-id",
          description:
            'Specifies the symmetric encryption KMS key that encrypts the private key in the data key pair. You cannot specify an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation. To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases',
          args: {
            name: "string",
          },
        },
        {
          name: "--key-pair-spec",
          description:
            "Determines the type of data key pair that is generated.  The KMS rule that restricts the use of asymmetric RSA and SM2 KMS keys to encrypt and decrypt or to sign and verify (but not both), and the rule that permits you to use ECC KMS keys only to sign and verify, are not effective on data key pairs, which are used outside of KMS. The SM2 key spec is only available in China Regions",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--recipient",
          description:
            "A signed attestation document from an Amazon Web Services Nitro enclave and the encryption algorithm to use with the enclave's public key. The only valid encryption algorithm is RSAES_OAEP_SHA_256.  This parameter only supports attestation documents for Amazon Web Services Nitro Enclaves. To call DeriveSharedSecret for an Amazon Web Services Nitro Enclaves, use the Amazon Web Services Nitro Enclaves SDK to generate the attestation document and then use the Recipient parameter from any Amazon Web Services SDK to provide the attestation document for the enclave. When you use this parameter, instead of returning a plaintext copy of the private data key, KMS encrypts the plaintext private data key under the public key in the attestation document, and returns the resulting ciphertext in the CiphertextForRecipient field in the response. This ciphertext can be decrypted only with the private key in the enclave. The CiphertextBlob field in the response contains a copy of the private data key encrypted under the KMS key specified by the KeyId parameter. The PrivateKeyPlaintext field in the response is null or empty. For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see How Amazon Web Services Nitro Enclaves uses KMS in the Key Management Service Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
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
      name: "generate-data-key-pair-without-plaintext",
      description:
        "Returns a unique asymmetric data key pair for use outside of KMS. This operation returns a plaintext public key and a copy of the private key that is encrypted under the symmetric encryption KMS key you specify. Unlike GenerateDataKeyPair, this operation does not return a plaintext private key. The bytes in the keys are random; they are not related to the caller or to the KMS key that is used to encrypt the private key.  You can use the public key that GenerateDataKeyPairWithoutPlaintext returns to encrypt data or verify a signature outside of KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the Decrypt operation to decrypt the encrypted private key. To generate a data key pair, you must specify a symmetric encryption KMS key to encrypt the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation.  Use the KeyPairSpec parameter to choose an RSA or Elliptic Curve (ECC) data key pair. In China Regions, you can also choose an SM2 data key pair. KMS recommends that you use ECC key pairs for signing, and use RSA and SM2 key pairs for either encryption or signing, but not both. However, KMS cannot enforce any restrictions on the use of data key pairs outside of KMS.  GenerateDataKeyPairWithoutPlaintext returns a unique data key pair for each request. The bytes in the key are not related to the caller or KMS key that is used to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as specified in RFC 5280. You can use an optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter.  Required permissions: kms:GenerateDataKeyPairWithoutPlaintext (key policy)  Related operations:     Decrypt     Encrypt     GenerateDataKey     GenerateDataKeyPair     GenerateDataKeyWithoutPlaintext     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--encryption-context",
          description:
            "Specifies the encryption context that will be used when encrypting the private key in the data key pair.  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  An encryption context is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended. For more information, see Encryption context in the Key Management Service Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--key-id",
          description:
            'Specifies the symmetric encryption KMS key that encrypts the private key in the data key pair. You cannot specify an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation.  To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases',
          args: {
            name: "string",
          },
        },
        {
          name: "--key-pair-spec",
          description:
            "Determines the type of data key pair that is generated. The KMS rule that restricts the use of asymmetric RSA and SM2 KMS keys to encrypt and decrypt or to sign and verify (but not both), and the rule that permits you to use ECC KMS keys only to sign and verify, are not effective on data key pairs, which are used outside of KMS. The SM2 key spec is only available in China Regions",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
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
      name: "generate-data-key-without-plaintext",
      description:
        "Returns a unique symmetric data key for use outside of KMS. This operation returns a data key that is encrypted under a symmetric encryption KMS key that you specify. The bytes in the key are random; they are not related to the caller or to the KMS key.  GenerateDataKeyWithoutPlaintext is identical to the GenerateDataKey operation except that it does not return a plaintext copy of the data key.  This operation is useful for systems that need to encrypt data at some point, but not immediately. When you need to encrypt the data, you call the Decrypt operation on the encrypted copy of the key. It's also useful in distributed systems with different levels of trust. For example, you might store encrypted data in containers. One component of your system creates new containers and stores an encrypted data key with each container. Then, a different component puts the data into the containers. That component first decrypts the data key, uses the plaintext data key to encrypt data, puts the encrypted data into the container, and then destroys the plaintext data key. In this system, the component that creates the containers never sees the plaintext data key. To request an asymmetric data key pair, use the GenerateDataKeyPair or GenerateDataKeyPairWithoutPlaintext operations. To generate a data key, you must specify the symmetric encryption KMS key that is used to encrypt the data key. You cannot use an asymmetric KMS key or a key in a custom key store to generate a data key. To get the type of your KMS key, use the DescribeKey operation. You must also specify the length of the data key. Use either the KeySpec or NumberOfBytes parameters (but not both). For 128-bit and 256-bit data keys, use the KeySpec parameter. To generate an SM4 data key (China Regions only), specify a KeySpec value of AES_128 or NumberOfBytes value of 16. The symmetric encryption key used in China Regions to encrypt your data key is an SM4 encryption key. If the operation succeeds, you will find the encrypted copy of the data key in the CiphertextBlob field. You can use an optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter.  Required permissions: kms:GenerateDataKeyWithoutPlaintext (key policy)  Related operations:     Decrypt     Encrypt     GenerateDataKey     GenerateDataKeyPair     GenerateDataKeyPairWithoutPlaintext     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            'Specifies the symmetric encryption KMS key that encrypts the data key. You cannot specify an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation. To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases',
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-context",
          description:
            "Specifies the encryption context that will be used when encrypting the data key.  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  An encryption context is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended. For more information, see Encryption context in the Key Management Service Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--key-spec",
          description:
            "The length of the data key. Use AES_128 to generate a 128-bit symmetric key, or AES_256 to generate a 256-bit symmetric key",
          args: {
            name: "string",
          },
        },
        {
          name: "--number-of-bytes",
          description:
            "The length of the data key in bytes. For example, use the value 64 to generate a 512-bit data key (64 bytes is 512 bits). For common key lengths (128-bit and 256-bit symmetric keys), we recommend that you use the KeySpec field instead of this one",
          args: {
            name: "integer",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
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
      name: "generate-mac",
      description:
        "Generates a hash-based message authentication code (HMAC) for a message using an HMAC KMS key and a MAC algorithm that the key supports. HMAC KMS keys and the HMAC algorithms that KMS uses conform to industry standards defined in RFC 2104. You can use value that GenerateMac returns in the VerifyMac operation to demonstrate that the original message has not changed. Also, because a secret key is used to create the hash, you can verify that the party that generated the hash has the required secret key. You can also use the raw result to implement HMAC-based algorithms such as key derivation functions. This operation is part of KMS support for HMAC KMS keys. For details, see HMAC keys in KMS in the  Key Management Service Developer Guide .  Best practices recommend that you limit the time during which any signing mechanism, including an HMAC, is effective. This deters an attack where the actor uses a signed message to establish validity repeatedly or long after the message is superseded. HMAC tags do not include a timestamp, but you can include a timestamp in the token or message to help you detect when its time to refresh the HMAC.   The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter.   Required permissions: kms:GenerateMac (key policy)  Related operations: VerifyMac   Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--message",
          description:
            "The message to be hashed. Specify a message of up to 4,096 bytes.   GenerateMac and VerifyMac do not provide special handling for message digests. If you generate an HMAC for a hash digest of a message, you must verify the HMAC of the same hash digest",
          args: {
            name: "blob",
          },
        },
        {
          name: "--key-id",
          description:
            "The HMAC KMS key to use in the operation. The MAC algorithm computes the HMAC for the message and the key as described in RFC 2104. To identify an HMAC KMS key, use the DescribeKey operation and see the KeySpec field in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--mac-algorithm",
          description:
            "The MAC algorithm used in the operation.  The algorithm must be compatible with the HMAC KMS key that you specify. To find the MAC algorithms that your HMAC KMS key supports, use the DescribeKey operation and see the MacAlgorithms field in the DescribeKey response",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
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
      name: "generate-random",
      description:
        "Returns a random byte string that is cryptographically secure. You must use the NumberOfBytes parameter to specify the length of the random byte string. There is no default value for string length. By default, the random byte string is generated in KMS. To generate the byte string in the CloudHSM cluster associated with an CloudHSM key store, use the CustomKeyStoreId parameter.  GenerateRandom also supports Amazon Web Services Nitro Enclaves, which provide an isolated compute environment in Amazon EC2. To call GenerateRandom for a Nitro enclave, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. Use the Recipient parameter to provide the attestation document for the enclave. Instead of plaintext bytes, the response includes the plaintext bytes encrypted under the public key from the attestation document (CiphertextForRecipient).For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see How Amazon Web Services Nitro Enclaves uses KMS in the Key Management Service Developer Guide. For more information about entropy and random number generation, see Key Management Service Cryptographic Details.  Cross-account use: Not applicable. GenerateRandom does not use any account-specific resources, such as KMS keys.  Required permissions: kms:GenerateRandom (IAM policy)  Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--number-of-bytes",
          description:
            "The length of the random byte string. This parameter is required",
          args: {
            name: "integer",
          },
        },
        {
          name: "--custom-key-store-id",
          description:
            "Generates the random byte string in the CloudHSM cluster that is associated with the specified CloudHSM key store. To find the ID of a custom key store, use the DescribeCustomKeyStores operation. External key store IDs are not valid for this parameter. If you specify the ID of an external key store, GenerateRandom throws an UnsupportedOperationException",
          args: {
            name: "string",
          },
        },
        {
          name: "--recipient",
          description:
            "A signed attestation document from an Amazon Web Services Nitro enclave and the encryption algorithm to use with the enclave's public key. The only valid encryption algorithm is RSAES_OAEP_SHA_256.  This parameter only supports attestation documents for Amazon Web Services Nitro Enclaves. To include this parameter, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. When you use this parameter, instead of returning plaintext bytes, KMS encrypts the plaintext bytes under the public key in the attestation document, and returns the resulting ciphertext in the CiphertextForRecipient field in the response. This ciphertext can be decrypted only with the private key in the enclave. The Plaintext field in the response is null or empty. For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see How Amazon Web Services Nitro Enclaves uses KMS in the Key Management Service Developer Guide",
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
      name: "get-key-policy",
      description:
        "Gets a key policy attached to the specified KMS key.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:GetKeyPolicy (key policy)  Related operations: PutKeyPolicy   Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Gets the key policy for the specified KMS key. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-name",
          description:
            "Specifies the name of the key policy. If no policy name is specified, the default value is default. The only valid name is default. To get the names of key policies, use ListKeyPolicies",
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
      name: "get-key-rotation-status",
      description:
        "Provides detailed information about the rotation status for a KMS key, including whether automatic rotation of the key material is enabled for the specified KMS key, the rotation period, and the next scheduled rotation date. Automatic key rotation is supported only on symmetric encryption KMS keys. You cannot enable automatic rotation of asymmetric KMS keys, HMAC KMS keys, KMS keys with imported key material, or KMS keys in a custom key store. To enable or disable automatic rotation of a set of related multi-Region keys, set the property on the primary key.. You can enable (EnableKeyRotation) and disable automatic rotation (DisableKeyRotation) of the key material in customer managed KMS keys. Key material rotation of Amazon Web Services managed KMS keys is not configurable. KMS always rotates the key material in Amazon Web Services managed KMS keys every year. The key rotation status for Amazon Web Services managed KMS keys is always true. You can perform on-demand (RotateKeyOnDemand) rotation of the key material in customer managed KMS keys, regardless of whether or not automatic key rotation is enabled. You can use GetKeyRotationStatus to identify the date and time that an in progress on-demand rotation was initiated. You can use ListKeyRotations to view the details of completed rotations.  In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years to every year. For details, see EnableKeyRotation.  The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.   Disabled: The key rotation status does not change when you disable a KMS key. However, while the KMS key is disabled, KMS does not rotate the key material. When you re-enable the KMS key, rotation resumes. If the key material in the re-enabled KMS key hasn't been rotated in one year, KMS rotates it immediately, and every year thereafter. If it's been less than a year since the key material in the re-enabled KMS key was rotated, the KMS key resumes its prior rotation schedule.   Pending deletion: While a KMS key is pending deletion, its key rotation status is false and KMS does not rotate the key material. If you cancel the deletion, the original key rotation status returns to true.    Cross-account use: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the KeyId parameter.  Required permissions: kms:GetKeyRotationStatus (key policy)  Related operations:     DisableKeyRotation     EnableKeyRotation     ListKeyRotations     RotateKeyOnDemand     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Gets the rotation status for the specified KMS key. Specify the key ID or key ARN of the KMS key. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
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
      name: "get-parameters-for-import",
      description:
        'Returns the public key and an import token you need to import or reimport key material for a KMS key.  By default, KMS keys are created with key material that KMS generates. This operation supports Importing key material, an advanced feature that lets you generate and import the cryptographic key material for a KMS key. For more information about importing key material into KMS, see Importing key material in the Key Management Service Developer Guide. Before calling GetParametersForImport, use the CreateKey operation with an Origin value of EXTERNAL to create a KMS key with no key material. You can import key material for a symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, or asymmetric signing KMS key. You can also import key material into a multi-Region key of any supported type. However, you can\'t import key material into a KMS key in a custom key store. You can also use GetParametersForImport to get a public key and import token to reimport the original key material into a KMS key whose key material expired or was deleted.  GetParametersForImport returns the items that you need to import your key material.   The public key (or "wrapping key") of an RSA key pair that KMS generates. You will use this public key to encrypt ("wrap") your key material while it\'s in transit to KMS.    A import token that ensures that KMS can decrypt your key material and associate it with the correct KMS key.   The public key and its import token are permanently linked and must be used together. Each public key and import token set is valid for 24 hours. The expiration date and time appear in the ParametersValidTo field in the GetParametersForImport response. You cannot use an expired public key or import token in an ImportKeyMaterial request. If your key and token expire, send another GetParametersForImport request.  GetParametersForImport requires the following information:   The key ID of the KMS key for which you are importing the key material.   The key spec of the public key ("wrapping key") that you will use to encrypt your key material during import.   The wrapping algorithm that you will use with the public key to encrypt your key material.   You can use the same or a different public key spec and wrapping algorithm each time you import or reimport the same key material.  The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:GetParametersForImport (key policy)  Related operations:     ImportKeyMaterial     DeleteImportedKeyMaterial     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency',
      options: [
        {
          name: "--key-id",
          description:
            "The identifier of the KMS key that will be associated with the imported key material. The Origin of the KMS key must be EXTERNAL. All KMS key types are supported, including multi-Region keys. However, you cannot import key material into a KMS key in a custom key store. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--wrapping-algorithm",
          description:
            "The algorithm you will use with the RSA public key (PublicKey) in the response to protect your key material during import. For more information, see Select a wrapping algorithm in the Key Management Service Developer Guide. For RSA_AES wrapping algorithms, you encrypt your key material with an AES key that you generate, then encrypt your AES key with the RSA public key from KMS. For RSAES wrapping algorithms, you encrypt your key material directly with the RSA public key from KMS. The wrapping algorithms that you can use depend on the type of key material that you are importing. To import an RSA private key, you must use an RSA_AES wrapping algorithm.    RSA_AES_KEY_WRAP_SHA_256 \u2014 Supported for wrapping RSA and ECC key material.    RSA_AES_KEY_WRAP_SHA_1 \u2014 Supported for wrapping RSA and ECC key material.    RSAES_OAEP_SHA_256 \u2014 Supported for all types of key material, except RSA key material (private key). You cannot use the RSAES_OAEP_SHA_256 wrapping algorithm with the RSA_2048 wrapping key spec to wrap ECC_NIST_P521 key material.    RSAES_OAEP_SHA_1 \u2014 Supported for all types of key material, except RSA key material (private key). You cannot use the RSAES_OAEP_SHA_1 wrapping algorithm with the RSA_2048 wrapping key spec to wrap ECC_NIST_P521 key material.    RSAES_PKCS1_V1_5 (Deprecated) \u2014 As of October 10, 2023, KMS does not support the RSAES_PKCS1_V1_5 wrapping algorithm",
          args: {
            name: "string",
          },
        },
        {
          name: "--wrapping-key-spec",
          description:
            "The type of RSA public key to return in the response. You will use this wrapping key with the specified wrapping algorithm to protect your key material during import.  Use the longest RSA wrapping key that is practical.  You cannot use an RSA_2048 public key to directly wrap an ECC_NIST_P521 private key. Instead, use an RSA_AES wrapping algorithm or choose a longer RSA public key",
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
      name: "get-public-key",
      description:
        "Returns the public key of an asymmetric KMS key. Unlike the private key of a asymmetric KMS key, which never leaves KMS unencrypted, callers with kms:GetPublicKey permission can download the public key of an asymmetric KMS key. You can share the public key to allow others to encrypt messages and verify signatures outside of KMS. For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide. You do not need to download the public key. Instead, you can use the public key within KMS by calling the Encrypt, ReEncrypt, or Verify operations with the identifier of an asymmetric KMS key. When you use the public key within KMS, you benefit from the authentication, authorization, and logging that are part of every KMS operation. You also reduce of risk of encrypting data that cannot be decrypted. These features are not effective outside of KMS. To help you use the public key safely outside of KMS, GetPublicKey returns important information about the public key in the response, including:    KeySpec: The type of key material in the public key, such as RSA_4096 or ECC_NIST_P521.    KeyUsage: Whether the key is used for encryption, signing, or deriving a shared secret.    EncryptionAlgorithms or SigningAlgorithms: A list of the encryption algorithms or the signing algorithms for the key.   Although KMS cannot enforce these restrictions on external operations, it is crucial that you use this information to prevent the public key from being used improperly. For example, you can prevent a public signing key from being used encrypt data, or prevent a public key from being used with an encryption algorithm that is not supported by KMS. You can also avoid errors, such as using the wrong signing algorithm in a verification operation. To verify a signature outside of KMS with an SM2 public key (China Regions only), you must specify the distinguishing ID. By default, KMS uses 1234567812345678 as the distinguishing ID. For more information, see Offline verification with SM2 key pairs. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter.  Required permissions: kms:GetPublicKey (key policy)  Related operations: CreateKey   Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            'Identifies the asymmetric KMS key that includes the public key. To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases',
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
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
      name: "import-key-material",
      description:
        "Imports or reimports key material into an existing KMS key that was created without key material. ImportKeyMaterial also sets the expiration model and expiration date of the imported key material. By default, KMS keys are created with key material that KMS generates. This operation supports Importing key material, an advanced feature that lets you generate and import the cryptographic key material for a KMS key. For more information about importing key material into KMS, see Importing key material in the Key Management Service Developer Guide. After you successfully import key material into a KMS key, you can reimport the same key material into that KMS key, but you cannot import different key material. You might reimport key material to replace key material that expired or key material that you deleted. You might also reimport key material to change the expiration model or expiration date of the key material.  Each time you import key material into KMS, you can determine whether (ExpirationModel) and when (ValidTo) the key material expires. To change the expiration of your key material, you must import it again, either by calling ImportKeyMaterial or using the import features of the KMS console. Before calling ImportKeyMaterial:   Create or identify a KMS key with no key material. The KMS key must have an Origin value of EXTERNAL, which indicates that the KMS key is designed for imported key material.  To create an new KMS key for imported key material, call the CreateKey operation with an Origin value of EXTERNAL. You can create a symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, or asymmetric signing KMS key. You can also import key material into a multi-Region key of any supported type. However, you can't import key material into a KMS key in a custom key store.   Use the DescribeKey operation to verify that the KeyState of the KMS key is PendingImport, which indicates that the KMS key has no key material.  If you are reimporting the same key material into an existing KMS key, you might need to call the DeleteImportedKeyMaterial to delete its existing key material.   Call the GetParametersForImport operation to get a public key and import token set for importing key material.    Use the public key in the GetParametersForImport response to encrypt your key material.    Then, in an ImportKeyMaterial request, you submit your encrypted key material and import token. When calling this operation, you must specify the following values:   The key ID or key ARN of the KMS key to associate with the imported key material. Its Origin must be EXTERNAL and its KeyState must be PendingImport. You cannot perform this operation on a KMS key in a custom key store, or on a KMS key in a different Amazon Web Services account. To get the Origin and KeyState of a KMS key, call DescribeKey.   The encrypted key material.    The import token that GetParametersForImport returned. You must use a public key and token from the same GetParametersForImport response.   Whether the key material expires (ExpirationModel) and, if so, when (ValidTo). For help with this choice, see Setting an expiration time in the Key Management Service Developer Guide. If you set an expiration date, KMS deletes the key material from the KMS key on the specified date, making the KMS key unusable. To use the KMS key in cryptographic operations again, you must reimport the same key material. However, you can delete and reimport the key material at any time, including before the key material expires. Each time you reimport, you can eliminate or reset the expiration time.   When this operation is successful, the key state of the KMS key changes from PendingImport to Enabled, and you can use the KMS key in cryptographic operations. If this operation fails, use the exception to help determine the problem. If the error is related to the key material, the import token, or wrapping key, use GetParametersForImport to get a new public key and import token for the KMS key and repeat the import procedure. For help, see How To Import Key Material in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:ImportKeyMaterial (key policy)  Related operations:     DeleteImportedKeyMaterial     GetParametersForImport     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "The identifier of the KMS key that will be associated with the imported key material. This must be the same KMS key specified in the KeyID parameter of the corresponding GetParametersForImport request. The Origin of the KMS key must be EXTERNAL and its KeyState must be PendingImport.  The KMS key can be a symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, or asymmetric signing KMS key, including a multi-Region key of any supported type. You cannot perform this operation on a KMS key in a custom key store, or on a KMS key in a different Amazon Web Services account. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--import-token",
          description:
            "The import token that you received in the response to a previous GetParametersForImport request. It must be from the same response that contained the public key that you used to encrypt the key material",
          args: {
            name: "blob",
          },
        },
        {
          name: "--encrypted-key-material",
          description:
            "The encrypted key material to import. The key material must be encrypted under the public wrapping key that GetParametersForImport returned, using the wrapping algorithm that you specified in the same GetParametersForImport request",
          args: {
            name: "blob",
          },
        },
        {
          name: "--valid-to",
          description:
            "The date and time when the imported key material expires. This parameter is required when the value of the ExpirationModel parameter is KEY_MATERIAL_EXPIRES. Otherwise it is not valid. The value of this parameter must be a future date and time. The maximum value is 365 days from the request date. When the key material expires, KMS deletes the key material from the KMS key. Without its key material, the KMS key is unusable. To use the KMS key in cryptographic operations, you must reimport the same key material. You cannot change the ExpirationModel or ValidTo values for the current import after the request completes. To change either value, you must delete (DeleteImportedKeyMaterial) and reimport the key material",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--expiration-model",
          description:
            "Specifies whether the key material expires. The default is KEY_MATERIAL_EXPIRES. For help with this choice, see Setting an expiration time in the Key Management Service Developer Guide. When the value of ExpirationModel is KEY_MATERIAL_EXPIRES, you must specify a value for the ValidTo parameter. When value is KEY_MATERIAL_DOES_NOT_EXPIRE, you must omit the ValidTo parameter. You cannot change the ExpirationModel or ValidTo values for the current import after the request completes. To change either value, you must reimport the key material",
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
      name: "list-aliases",
      description:
        "Gets a list of aliases in the caller's Amazon Web Services account and region. For more information about aliases, see CreateAlias. By default, the ListAliases operation returns all aliases in the account and region. To get only the aliases associated with a particular KMS key, use the KeyId parameter. The ListAliases response can include aliases that you created and associated with your customer managed keys, and aliases that Amazon Web Services created and associated with Amazon Web Services managed keys in your account. You can recognize Amazon Web Services aliases because their names have the format aws/<service-name>, such as aws/dynamodb. The response might also include aliases that have no TargetKeyId field. These are predefined aliases that Amazon Web Services has created but has not yet associated with a KMS key. Aliases that Amazon Web Services creates in your account, including predefined aliases, do not count against your KMS aliases quota.  Cross-account use: No. ListAliases does not return aliases in other Amazon Web Services accounts.  Required permissions: kms:ListAliases (IAM policy) For details, see Controlling access to aliases in the Key Management Service Developer Guide.  Related operations:     CreateAlias     DeleteAlias     UpdateAlias     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Lists only aliases that are associated with the specified KMS key. Enter a KMS key in your Amazon Web Services account.  This parameter is optional. If you omit it, ListAliases returns all aliases in the account and Region. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received",
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
      name: "list-grants",
      description:
        "Gets a list of all grants for the specified KMS key.  You must specify the KMS key in all requests. You can filter the grant list by grant ID or grantee principal. For detailed information about grants, including grant terminology, see Grants in KMS in the  Key Management Service Developer Guide . For examples of working with grants in several programming languages, see Programming grants.   The GranteePrincipal field in the ListGrants response usually contains the user or role designated as the grantee principal in the grant. However, when the grantee principal in the grant is an Amazon Web Services service, the GranteePrincipal field contains the service principal, which might represent several different grantee principals.   Cross-account use: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the KeyId parameter.  Required permissions: kms:ListGrants (key policy)  Related operations:     CreateGrant     ListRetirableGrants     RetireGrant     RevokeGrant     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--limit",
          description:
            "Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-id",
          description:
            "Returns only grants for the specified KMS key. This parameter is required. Specify the key ID or key ARN of the KMS key. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-id",
          description:
            "Returns only the grant with the specified grant ID. The grant ID uniquely identifies the grant",
          args: {
            name: "string",
          },
        },
        {
          name: "--grantee-principal",
          description:
            "Returns only grants where the specified principal is the grantee principal for the grant",
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
      name: "list-key-policies",
      description:
        "Gets the names of the key policies that are attached to a KMS key. This operation is designed to get policy names that you can use in a GetKeyPolicy operation. However, the only valid policy name is default.   Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:ListKeyPolicies (key policy)  Related operations:     GetKeyPolicy     PutKeyPolicy     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Gets the names of key policies for the specified KMS key. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 1000, inclusive. If you do not include a value, it defaults to 100. Only one policy can be attached to a key",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received",
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
      name: "list-key-rotations",
      description:
        "Returns information about all completed key material rotations for the specified KMS key. You must specify the KMS key in all requests. You can refine the key rotations list by limiting the number of rotations returned. For detailed information about automatic and on-demand key rotations, see Rotating KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:ListKeyRotations (key policy)  Related operations:     EnableKeyRotation     DisableKeyRotation     GetKeyRotationStatus     RotateKeyOnDemand     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Gets the key rotations for the specified KMS key. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 1000, inclusive. If you do not include a value, it defaults to 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received",
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
      name: "list-keys",
      description:
        "Gets a list of all KMS keys in the caller's Amazon Web Services account and Region.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:ListKeys (IAM policy)  Related operations:     CreateKey     DescribeKey     ListAliases     ListResourceTags     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--limit",
          description:
            "Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 1000, inclusive. If you do not include a value, it defaults to 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received",
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
      name: "list-resource-tags",
      description:
        "Returns all tags on the specified KMS key. For general information about tags, including the format and syntax, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference. For information about using tags in KMS, see Tagging keys.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:ListResourceTags (key policy)  Related operations:     CreateKey     ReplicateKey     TagResource     UntagResource     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Gets tags on the specified KMS key. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 50, inclusive. If you do not include a value, it defaults to 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received. Do not attempt to construct this value. Use only the value of NextMarker from the truncated response you just received",
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
      name: "list-retirable-grants",
      description:
        "Returns information about all grants in the Amazon Web Services account and Region that have the specified retiring principal.  You can specify any principal in your Amazon Web Services account. The grants that are returned include grants for KMS keys in your Amazon Web Services account and other Amazon Web Services accounts. You might use this operation to determine which grants you may retire. To retire a grant, use the RetireGrant operation. For detailed information about grants, including grant terminology, see Grants in KMS in the  Key Management Service Developer Guide . For examples of working with grants in several programming languages, see Programming grants.   Cross-account use: You must specify a principal in your Amazon Web Services account. This operation returns a list of grants where the retiring principal specified in the ListRetirableGrants request is the same retiring principal on the grant. This can include grants on KMS keys owned by other Amazon Web Services accounts, but you do not need kms:ListRetirableGrants permission (or any other additional permission) in any Amazon Web Services account other than your own.  Required permissions: kms:ListRetirableGrants (IAM policy) in your Amazon Web Services account.  KMS authorizes ListRetirableGrants requests by evaluating the caller account's kms:ListRetirableGrants permissions. The authorized resource in ListRetirableGrants calls is the retiring principal specified in the request. KMS does not evaluate the caller's permissions to verify their access to any KMS keys or grants that might be returned by the ListRetirableGrants call.   Related operations:     CreateGrant     ListGrants     RetireGrant     RevokeGrant     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--limit",
          description:
            "Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received",
          args: {
            name: "string",
          },
        },
        {
          name: "--retiring-principal",
          description:
            "The retiring principal for which to list grants. Enter a principal in your Amazon Web Services account. To specify the retiring principal, use the Amazon Resource Name (ARN) of an Amazon Web Services principal. Valid principals include Amazon Web Services accounts, IAM users, IAM roles, federated users, and assumed role users. For help with the ARN syntax for a principal, see IAM ARNs in the  Identity and Access Management User Guide",
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
      name: "put-key-policy",
      description:
        "Attaches a key policy to the specified KMS key.  For more information about key policies, see Key Policies in the Key Management Service Developer Guide. For help writing and formatting a JSON policy document, see the IAM JSON Policy Reference in the  Identity and Access Management User Guide . For examples of adding a key policy in multiple programming languages, see Setting a key policy in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:PutKeyPolicy (key policy)  Related operations: GetKeyPolicy   Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Sets the key policy on the specified KMS key. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-name",
          description:
            "The name of the key policy. If no policy name is specified, the default value is default. The only valid value is default",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The key policy to attach to the KMS key. The key policy must meet the following criteria:   The key policy must allow the calling principal to make a subsequent PutKeyPolicy request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, see Default key policy in the Key Management Service Developer Guide. (To omit this condition, set BypassPolicyLockoutSafetyCheck to true.)   Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to KMS. When you create a new Amazon Web Services principal, you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to KMS. For more information, see Changes that I make are not always immediately visible in the Amazon Web Services Identity and Access Management User Guide.   A key policy document can include only the following characters:   Printable ASCII characters from the space character (\\u0020) through the end of the ASCII character range.   Printable characters in the Basic Latin and Latin-1 Supplement character set (through \\u00FF).   The tab (\\u0009), line feed (\\u000A), and carriage return (\\u000D) special characters   For information about key policies, see Key policies in KMS in the Key Management Service Developer Guide.For help writing and formatting a JSON policy document, see the IAM JSON Policy Reference in the  Identity and Access Management User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--bypass-policy-lockout-safety-check",
          description:
            'Skips ("bypasses") the key policy lockout safety check. The default value is false.  Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately. For more information, see Default key policy in the Key Management Service Developer Guide.  Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent PutKeyPolicy request on the KMS key',
        },
        {
          name: "--no-bypass-policy-lockout-safety-check",
          description:
            'Skips ("bypasses") the key policy lockout safety check. The default value is false.  Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately. For more information, see Default key policy in the Key Management Service Developer Guide.  Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent PutKeyPolicy request on the KMS key',
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
      name: "re-encrypt",
      description:
        'Decrypts ciphertext and then reencrypts it entirely within KMS. You can use this operation to change the KMS key under which data is encrypted, such as when you manually rotate a KMS key or change the KMS key that protects a ciphertext. You can also use it to reencrypt ciphertext under the same KMS key, such as to change the encryption context of a ciphertext. The ReEncrypt operation can decrypt ciphertext that was encrypted by using a KMS key in an KMS operation, such as Encrypt or GenerateDataKey. It can also decrypt ciphertext that was encrypted by using the public key of an asymmetric KMS key outside of KMS. However, it cannot decrypt ciphertext produced by other libraries, such as the Amazon Web Services Encryption SDK or Amazon S3 client-side encryption. These libraries return a ciphertext format that is incompatible with KMS. When you use the ReEncrypt operation, you need to provide information for the decrypt operation and the subsequent encrypt operation.   If your ciphertext was encrypted under an asymmetric KMS key, you must use the SourceKeyId parameter to identify the KMS key that encrypted the ciphertext. You must also supply the encryption algorithm that was used. This information is required to decrypt the data.   If your ciphertext was encrypted under a symmetric encryption KMS key, the SourceKeyId parameter is optional. KMS can get this information from metadata that it adds to the symmetric ciphertext blob. This feature adds durability to your implementation by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even if they\'ve lost track of the key ID. However, specifying the source KMS key is always recommended as a best practice. When you use the SourceKeyId parameter to specify a KMS key, KMS uses only the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the ReEncrypt operation fails. This practice ensures that you use the KMS key that you intend.   To reencrypt the data, you must use the DestinationKeyId parameter to specify the KMS key that re-encrypts the data after it is decrypted. If the destination KMS key is an asymmetric KMS key, you must also provide the encryption algorithm. The algorithm that you choose must be compatible with the KMS key.  When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails. You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric encryption KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.    The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: Yes. The source KMS key and destination KMS key can be in different Amazon Web Services accounts. Either or both KMS keys can be in a different account than the caller. To specify a KMS key in a different account, you must use its key ARN or alias ARN.  Required permissions:    kms:ReEncryptFrom permission on the source KMS key (key policy)    kms:ReEncryptTo permission on the destination KMS key (key policy)   To permit reencryption from or to a KMS key, include the "kms:ReEncrypt*" permission in your key policy. This permission is automatically included in the key policy when you use the console to create a KMS key. But you must include it manually when you create a KMS key programmatically or when you use the PutKeyPolicy operation to set a key policy.  Related operations:     Decrypt     Encrypt     GenerateDataKey     GenerateDataKeyPair     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency',
      options: [
        {
          name: "--ciphertext-blob",
          description: "Ciphertext of the data to reencrypt",
          args: {
            name: "blob",
          },
        },
        {
          name: "--source-encryption-context",
          description:
            "Specifies the encryption context to use to decrypt the ciphertext. Enter the same encryption context that was used to encrypt the ciphertext. An encryption context is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended. For more information, see Encryption context in the Key Management Service Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--source-key-id",
          description:
            'Specifies the KMS key that KMS will use to decrypt the ciphertext before it is re-encrypted. Enter a key ID of the KMS key that was used to encrypt the ciphertext. If you identify a different KMS key, the ReEncrypt operation throws an IncorrectKeyException. This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key. If you used a symmetric encryption KMS key, KMS can get the KMS key from metadata that it adds to the symmetric ciphertext blob. However, it is always recommended as a best practice. This practice ensures that you use the KMS key that you intend. To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases',
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-key-id",
          description:
            'A unique identifier for the KMS key that is used to reencrypt the data. Specify a symmetric encryption KMS key or an asymmetric KMS key with a KeyUsage value of ENCRYPT_DECRYPT. To find the KeyUsage value of a KMS key, use the DescribeKey operation. To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases',
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-encryption-context",
          description:
            "Specifies that encryption context to use when the reencrypting the data.  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  A destination encryption context is valid only when the destination KMS key is a symmetric encryption KMS key. The standard ciphertext format for asymmetric KMS keys does not include fields for metadata. An encryption context is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended. For more information, see Encryption context in the Key Management Service Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--source-encryption-algorithm",
          description:
            "Specifies the encryption algorithm that KMS will use to decrypt the ciphertext before it is reencrypted. The default value, SYMMETRIC_DEFAULT, represents the algorithm used for symmetric encryption KMS keys. Specify the same algorithm that was used to encrypt the ciphertext. If you specify a different algorithm, the decrypt attempt fails. This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-encryption-algorithm",
          description:
            "Specifies the encryption algorithm that KMS will use to reecrypt the data after it has decrypted it. The default value, SYMMETRIC_DEFAULT, represents the encryption algorithm used for symmetric encryption KMS keys. This parameter is required only when the destination KMS key is an asymmetric KMS key",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
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
      name: "replicate-key",
      description:
        "Replicates a multi-Region key into the specified Region. This operation creates a multi-Region replica key based on a multi-Region primary key in a different Region of the same Amazon Web Services partition. You can create multiple replicas of a primary key, but each must be in a different Region. To create a multi-Region primary key, use the CreateKey operation. This operation supports multi-Region keys, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide. A replica key is a fully-functional KMS key that can be used independently of its primary and peer replica keys. A primary key and its replica keys share properties that make them interoperable. They have the same key ID and key material. They also have the same key spec, key usage, key material origin, and automatic key rotation status. KMS automatically synchronizes these shared properties among related multi-Region keys. All other properties of a replica key can differ, including its key policy, tags, aliases, and Key states of KMS keys. KMS pricing and quotas for KMS keys apply to each primary key and replica key. When this operation completes, the new replica key has a transient key state of Creating. This key state changes to Enabled (or PendingImport) after a few seconds when the process of creating the new replica key is complete. While the key state is Creating, you can manage key, but you cannot yet use it in cryptographic operations. If you are creating and using the replica key programmatically, retry on KMSInvalidStateException or call DescribeKey to check its KeyState value before using it. For details about the Creating key state, see Key states of KMS keys in the Key Management Service Developer Guide. You cannot create more than one replica of a primary key in any Region. If the Region already includes a replica of the key you're trying to replicate, ReplicateKey returns an AlreadyExistsException error. If the key state of the existing replica is PendingDeletion, you can cancel the scheduled key deletion (CancelKeyDeletion) or wait for the key to be deleted. The new replica key you create will have the same shared properties as the original replica key. The CloudTrail log of a ReplicateKey operation records a ReplicateKey operation in the primary key's Region and a CreateKey operation in the replica key's Region. If you replicate a multi-Region primary key with imported key material, the replica key is created with no key material. You must import the same key material that you imported into the primary key. For details, see Importing key material into multi-Region keys in the Key Management Service Developer Guide. To convert a replica key to a primary key, use the UpdatePrimaryRegion operation.   ReplicateKey uses different default values for the KeyPolicy and Tags parameters than those used in the KMS console. For details, see the parameter descriptions.   Cross-account use: No. You cannot use this operation to create a replica key in a different Amazon Web Services account.   Required permissions:     kms:ReplicateKey on the primary key (in the primary key's Region). Include this permission in the primary key's key policy.    kms:CreateKey in an IAM policy in the replica Region.   To use the Tags parameter, kms:TagResource in an IAM policy in the replica Region.    Related operations     CreateKey     UpdatePrimaryRegion     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Identifies the multi-Region primary key that is being replicated. To determine whether a KMS key is a multi-Region primary key, use the DescribeKey operation to check the value of the MultiRegionKeyType property. Specify the key ID or key ARN of a multi-Region primary key. For example:   Key ID: mrk-1234abcd12ab34cd56ef1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--replica-region",
          description:
            "The Region ID of the Amazon Web Services Region for this replica key.  Enter the Region ID, such as us-east-1 or ap-southeast-2. For a list of Amazon Web Services Regions in which KMS is supported, see KMS service endpoints in the Amazon Web Services General Reference.  HMAC KMS keys are not supported in all Amazon Web Services Regions. If you try to replicate an HMAC KMS key in an Amazon Web Services Region in which HMAC keys are not supported, the ReplicateKey operation returns an UnsupportedOperationException. For a list of Regions in which HMAC KMS keys are supported, see HMAC keys in KMS in the Key Management Service Developer Guide.  The replica must be in a different Amazon Web Services Region than its primary key and other replicas of that primary key, but in the same Amazon Web Services partition. KMS must be available in the replica Region. If the Region is not enabled by default, the Amazon Web Services account must be enabled in the Region. For information about Amazon Web Services partitions, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. For information about enabling and disabling Regions, see Enabling a Region and Disabling a Region in the Amazon Web Services General Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The key policy to attach to the KMS key. This parameter is optional. If you do not provide a key policy, KMS attaches the default key policy to the KMS key. The key policy is not a shared property of multi-Region keys. You can specify the same key policy or a different key policy for each key in a set of related multi-Region keys. KMS does not synchronize this property. If you provide a key policy, it must meet the following criteria:   The key policy must allow the calling principal to make a subsequent PutKeyPolicy request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, see Default key policy in the Key Management Service Developer Guide. (To omit this condition, set BypassPolicyLockoutSafetyCheck to true.)   Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to KMS. When you create a new Amazon Web Services principal, you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to KMS. For more information, see Changes that I make are not always immediately visible in the Amazon Web Services Identity and Access Management User Guide.   A key policy document can include only the following characters:   Printable ASCII characters from the space character (\\u0020) through the end of the ASCII character range.   Printable characters in the Basic Latin and Latin-1 Supplement character set (through \\u00FF).   The tab (\\u0009), line feed (\\u000A), and carriage return (\\u000D) special characters   For information about key policies, see Key policies in KMS in the Key Management Service Developer Guide. For help writing and formatting a JSON policy document, see the IAM JSON Policy Reference in the  Identity and Access Management User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--bypass-policy-lockout-safety-check",
          description:
            'Skips ("bypasses") the key policy lockout safety check. The default value is false.  Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately. For more information, see Default key policy in the Key Management Service Developer Guide.  Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent PutKeyPolicy request on the KMS key',
        },
        {
          name: "--no-bypass-policy-lockout-safety-check",
          description:
            'Skips ("bypasses") the key policy lockout safety check. The default value is false.  Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately. For more information, see Default key policy in the Key Management Service Developer Guide.  Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent PutKeyPolicy request on the KMS key',
        },
        {
          name: "--description",
          description:
            "A description of the KMS key. The default value is an empty string (no description).  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  The description is not a shared property of multi-Region keys. You can specify the same description or a different description for each key in a set of related multi-Region keys. KMS does not synchronize this property",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Assigns one or more tags to the replica key. Use this parameter to tag the KMS key when it is created. To tag an existing KMS key, use the TagResource operation.  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.   Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide.  To use this parameter, you must have kms:TagResource permission in an IAM policy. Tags are not a shared property of multi-Region keys. You can specify the same tags or different tags for each key in a set of related multi-Region keys. KMS does not synchronize this property. Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You cannot have more than one tag on a KMS key with the same tag key. If you specify an existing tag key with a different tag value, KMS replaces the current tag value with the specified one. When you add tags to an Amazon Web Services resource, Amazon Web Services generates a cost allocation report with usage and costs aggregated by tags. Tags can also be used to control access to a KMS key. For details, see Tagging Keys",
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
      name: "retire-grant",
      description:
        "Deletes a grant. Typically, you retire a grant when you no longer need its permissions. To identify the grant to retire, use a grant token, or both the grant ID and a key identifier (key ID or key ARN) of the KMS key. The CreateGrant operation returns both values. This operation can be called by the retiring principal for a grant, by the grantee principal if the grant allows the RetireGrant operation, and by the Amazon Web Services account in which the grant is created. It can also be called by principals to whom permission for retiring a grant is delegated. For details, see Retiring and revoking grants in the Key Management Service Developer Guide. For detailed information about grants, including grant terminology, see Grants in KMS in the  Key Management Service Developer Guide . For examples of working with grants in several programming languages, see Programming grants.   Cross-account use: Yes. You can retire a grant on a KMS key in a different Amazon Web Services account.  Required permissions: Permission to retire a grant is determined primarily by the grant. For details, see Retiring and revoking grants in the Key Management Service Developer Guide.  Related operations:     CreateGrant     ListGrants     ListRetirableGrants     RevokeGrant     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--grant-token",
          description:
            "Identifies the grant to be retired. You can use a grant token to identify a new grant even before it has achieved eventual consistency. Only the CreateGrant operation returns a grant token. For details, see Grant token and Eventual consistency in the Key Management Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-id",
          description:
            "The key ARN KMS key associated with the grant. To find the key ARN, use the ListKeys operation. For example: arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-id",
          description:
            "Identifies the grant to retire. To get the grant ID, use CreateGrant, ListGrants, or ListRetirableGrants.   Grant ID Example - 0123456789012345678901234567890123456789012345678901234567890123",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
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
      name: "revoke-grant",
      description:
        "Deletes the specified grant. You revoke a grant to terminate the permissions that the grant allows. For more information, see Retiring and revoking grants in the  Key Management Service Developer Guide . When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as eventual consistency. For details, see Eventual consistency in the  Key Management Service Developer Guide .  For detailed information about grants, including grant terminology, see Grants in KMS in the  Key Management Service Developer Guide . For examples of working with grants in several programming languages, see Programming grants.   Cross-account use: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the KeyId parameter.  Required permissions: kms:RevokeGrant (key policy).  Related operations:     CreateGrant     ListGrants     ListRetirableGrants     RetireGrant     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "A unique identifier for the KMS key associated with the grant. To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. Specify the key ID or key ARN of the KMS key. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-id",
          description:
            "Identifies the grant to revoke. To get the grant ID, use CreateGrant, ListGrants, or ListRetirableGrants",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
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
      name: "rotate-key-on-demand",
      description:
        "Immediately initiates rotation of the key material of the specified symmetric encryption KMS key. You can perform on-demand rotation of the key material in customer managed KMS keys, regardless of whether or not automatic key rotation is enabled. On-demand rotations do not change existing automatic rotation schedules. For example, consider a KMS key that has automatic key rotation enabled with a rotation period of 730 days. If the key is scheduled to automatically rotate on April 14, 2024, and you perform an on-demand rotation on April 10, 2024, the key will automatically rotate, as scheduled, on April 14, 2024 and every 730 days thereafter.  You can perform on-demand key rotation a maximum of 10 times per KMS key. You can use the KMS console to view the number of remaining on-demand rotations available for a KMS key.  You can use GetKeyRotationStatus to identify any in progress on-demand rotations. You can use ListKeyRotations to identify the date that completed on-demand rotations were performed. You can monitor rotation of the key material for your KMS keys in CloudTrail and Amazon CloudWatch. On-demand key rotation is supported only on symmetric encryption KMS keys. You cannot perform on-demand rotation of asymmetric KMS keys, HMAC KMS keys, KMS keys with imported key material, or KMS keys in a custom key store. To perform on-demand rotation of a set of related multi-Region keys, invoke the on-demand rotation on the primary key. You cannot initiate on-demand rotation of Amazon Web Services managed KMS keys. KMS always rotates the key material of Amazon Web Services managed keys every year. Rotation of Amazon Web Services owned KMS keys is managed by the Amazon Web Services service that owns the key. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:RotateKeyOnDemand (key policy)  Related operations:     EnableKeyRotation     DisableKeyRotation     GetKeyRotationStatus     ListKeyRotations     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Identifies a symmetric encryption KMS key. You cannot perform on-demand rotation of asymmetric KMS keys, HMAC KMS keys, KMS keys with imported key material, or KMS keys in a custom key store. To perform on-demand rotation of a set of related multi-Region keys, invoke the on-demand rotation on the primary key. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
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
      name: "schedule-key-deletion",
      description:
        "Schedules the deletion of a KMS key. By default, KMS applies a waiting period of 30 days, but you can specify a waiting period of 7-30 days. When this operation is successful, the key state of the KMS key changes to PendingDeletion and the key can't be used in any cryptographic operations. It remains in this state for the duration of the waiting period. Before the waiting period ends, you can use CancelKeyDeletion to cancel the deletion of the KMS key. After the waiting period ends, KMS deletes the KMS key, its key material, and all KMS data associated with it, including all aliases that refer to it.  Deleting a KMS key is a destructive and potentially dangerous operation. When a KMS key is deleted, all data that was encrypted under the KMS key is unrecoverable. (The only exception is a multi-Region replica key, or an asymmetric or HMAC KMS key with imported key material.) To prevent the use of a KMS key without deleting it, use DisableKey.   You can schedule the deletion of a multi-Region primary key and its replica keys at any time. However, KMS will not delete a multi-Region primary key with existing replica keys. If you schedule the deletion of a primary key with replicas, its key state changes to PendingReplicaDeletion and it cannot be replicated or used in cryptographic operations. This status can continue indefinitely. When the last of its replicas keys is deleted (not just scheduled), the key state of the primary key changes to PendingDeletion and its waiting period (PendingWindowInDays) begins. For details, see Deleting multi-Region keys in the Key Management Service Developer Guide. When KMS deletes a KMS key from an CloudHSM key store, it makes a best effort to delete the associated key material from the associated CloudHSM cluster. However, you might need to manually delete the orphaned key material from the cluster and its backups. Deleting a KMS key from an external key store has no effect on the associated external key. However, for both types of custom key stores, deleting a KMS key is destructive and irreversible. You cannot decrypt ciphertext encrypted under the KMS key by using only its associated external key or CloudHSM key. Also, you cannot recreate a KMS key in an external key store by creating a new KMS key with the same key material. For more information about scheduling a KMS key for deletion, see Deleting KMS keys in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:ScheduleKeyDeletion (key policy)  Related operations     CancelKeyDeletion     DisableKey     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "The unique identifier of the KMS key to delete. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--pending-window-in-days",
          description:
            "The waiting period, specified in number of days. After the waiting period ends, KMS deletes the KMS key. If the KMS key is a multi-Region primary key with replica keys, the waiting period begins when the last of its replica keys is deleted. Otherwise, the waiting period begins immediately. This value is optional. If you include a value, it must be between 7 and 30, inclusive. If you do not include a value, it defaults to 30. You can use the  kms:ScheduleKeyDeletionPendingWindowInDays  condition key to further constrain the values that principals can specify in the PendingWindowInDays parameter",
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
      name: "sign",
      description:
        "Creates a digital signature for a message or message digest by using the private key in an asymmetric signing KMS key. To verify the signature, use the Verify operation, or use the public key in the same asymmetric KMS key outside of KMS. For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide. Digital signatures are generated and verified by using asymmetric key pair, such as an RSA or ECC pair that is represented by an asymmetric KMS key. The key owner (or an authorized user) uses their private key to sign a message. Anyone with the public key can verify that the message was signed with that particular private key and that the message hasn't changed since it was signed.  To use the Sign operation, provide the following information:   Use the KeyId parameter to identify an asymmetric KMS key with a KeyUsage value of SIGN_VERIFY. To get the KeyUsage value of a KMS key, use the DescribeKey operation. The caller must have kms:Sign permission on the KMS key.   Use the Message parameter to specify the message or message digest to sign. You can submit messages of up to 4096 bytes. To sign a larger message, generate a hash digest of the message, and then provide the hash digest in the Message parameter. To indicate whether the message is a full message or a digest, use the MessageType parameter.   Choose a signing algorithm that is compatible with the KMS key.     When signing a message, be sure to record the KMS key and the signing algorithm. This information is required to verify the signature.   Best practices recommend that you limit the time during which any signature is effective. This deters an attack where the actor uses a signed message to establish validity repeatedly or long after the message is superseded. Signatures do not include a timestamp, but you can include a timestamp in the signed message to help you detect when its time to refresh the signature.   To verify the signature that this operation generates, use the Verify operation. Or use the GetPublicKey operation to download the public key and then use the public key to verify the signature outside of KMS.  The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter.  Required permissions: kms:Sign (key policy)  Related operations: Verify   Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            'Identifies an asymmetric KMS key. KMS uses the private key in the asymmetric KMS key to sign the message. The KeyUsage type of the KMS key must be SIGN_VERIFY. To find the KeyUsage of a KMS key, use the DescribeKey operation. To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases',
          args: {
            name: "string",
          },
        },
        {
          name: "--message",
          description:
            "Specifies the message or message digest to sign. Messages can be 0-4096 bytes. To sign a larger message, provide a message digest. If you provide a message digest, use the DIGEST value of MessageType to prevent the digest from being hashed again while signing",
          args: {
            name: "blob",
          },
        },
        {
          name: "--message-type",
          description:
            "Tells KMS whether the value of the Message parameter should be hashed as part of the signing algorithm. Use RAW for unhashed messages; use DIGEST for message digests, which are already hashed. When the value of MessageType is RAW, KMS uses the standard signing algorithm, which begins with a hash function. When the value is DIGEST, KMS skips the hashing step in the signing algorithm.  Use the DIGEST value only when the value of the Message parameter is a message digest. If you use the DIGEST value with an unhashed message, the security of the signing operation can be compromised.  When the value of MessageTypeis DIGEST, the length of the Message value must match the length of hashed messages for the specified signing algorithm. You can submit a message digest and omit the MessageType or specify RAW so the digest is hashed again while signing. However, this can cause verification failures when verifying with a system that assumes a single hash. The hashing algorithm in that Sign uses is based on the SigningAlgorithm value.   Signing algorithms that end in SHA_256 use the SHA_256 hashing algorithm.   Signing algorithms that end in SHA_384 use the SHA_384 hashing algorithm.   Signing algorithms that end in SHA_512 use the SHA_512 hashing algorithm.   SM2DSA uses the SM3 hashing algorithm. For details, see Offline verification with SM2 key pairs",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--signing-algorithm",
          description:
            "Specifies the signing algorithm to use when signing the message.  Choose an algorithm that is compatible with the type and size of the specified asymmetric KMS key. When signing with RSA key pairs, RSASSA-PSS algorithms are preferred. We include RSASSA-PKCS1-v1_5 algorithms for compatibility with existing applications",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
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
        "Adds or edits tags on a customer managed key.  Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide.  Each tag consists of a tag key and a tag value, both of which are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value. You can use this operation to tag a customer managed key, but you cannot tag an Amazon Web Services managed key, an Amazon Web Services owned key, a custom key store, or an alias. You can also add tags to a KMS key while creating it (CreateKey) or replicating it (ReplicateKey). For information about using tags in KMS, see Tagging keys. For general information about tags, including the format and syntax, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference.  The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.   Required permissions: kms:TagResource (key policy)  Related operations     CreateKey     ListResourceTags     ReplicateKey     UntagResource     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Identifies a customer managed key in the account and Region. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "One or more tags. Each tag consists of a tag key and a tag value. The tag value can be an empty (null) string.   Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  You cannot have more than one tag on a KMS key with the same tag key. If you specify an existing tag key with a different tag value, KMS replaces the current tag value with the specified one",
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
      name: "untag-resource",
      description:
        "Deletes tags from a customer managed key. To delete a tag, specify the tag key and the KMS key.  Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide.  When it succeeds, the UntagResource operation doesn't return any output. Also, if the specified tag key isn't found on the KMS key, it doesn't throw an exception or return a response. To confirm that the operation worked, use the ListResourceTags operation. For information about using tags in KMS, see Tagging keys. For general information about tags, including the format and syntax, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference.  The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.  Required permissions: kms:UntagResource (key policy)  Related operations     CreateKey     ListResourceTags     ReplicateKey     TagResource     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Identifies the KMS key from which you are removing tags. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "One or more tag keys. Specify only the tag keys, not the tag values",
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
      name: "update-alias",
      description:
        "Associates an existing KMS alias with a different KMS key. Each alias is associated with only one KMS key at a time, although a KMS key can have multiple aliases. The alias and the KMS key must be in the same Amazon Web Services account and Region.  Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide.  The current and new KMS key must be the same type (both symmetric or both asymmetric or both HMAC), and they must have the same key usage. This restriction prevents errors in code that uses aliases. If you must assign an alias to a different type of KMS key, use DeleteAlias to delete the old alias and CreateAlias to create a new alias. You cannot use UpdateAlias to change an alias name. To change an alias name, use DeleteAlias to delete the old alias and CreateAlias to create a new alias. Because an alias is not a property of a KMS key, you can create, update, and delete the aliases of a KMS key without affecting the KMS key. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases of all KMS keys in the account, use the ListAliases operation.  The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.   Required permissions     kms:UpdateAlias on the alias (IAM policy).    kms:UpdateAlias on the current KMS key (key policy).    kms:UpdateAlias on the new KMS key (key policy).   For details, see Controlling access to aliases in the Key Management Service Developer Guide.  Related operations:     CreateAlias     DeleteAlias     ListAliases     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--alias-name",
          description:
            "Identifies the alias that is changing its KMS key. This value must begin with alias/ followed by the alias name, such as alias/ExampleAlias. You cannot use UpdateAlias to change the alias name.  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-key-id",
          description:
            "Identifies the customer managed key to associate with the alias. You don't have permission to associate an alias with an Amazon Web Services managed key. The KMS key must be in the same Amazon Web Services account and Region as the alias. Also, the new target KMS key must be the same type as the current target KMS key (both symmetric or both asymmetric or both HMAC) and they must have the same key usage.  Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To verify that the alias is mapped to the correct KMS key, use ListAliases",
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
      name: "update-custom-key-store",
      description:
        "Changes the properties of a custom key store. You can use this operation to change the properties of an CloudHSM key store or an external key store. Use the required CustomKeyStoreId parameter to identify the custom key store. Use the remaining optional parameters to change its properties. This operation does not return any property values. To verify the updated property values, use the DescribeCustomKeyStores operation.  This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.  When updating the properties of an external key store, verify that the updated settings connect your key store, via the external key store proxy, to the same external key manager as the previous settings, or to a backup or snapshot of the external key manager with the same cryptographic keys. If the updated connection settings fail, you can fix them and retry, although an extended delay might disrupt Amazon Web Services services. However, if KMS permanently loses its access to cryptographic keys, ciphertext encrypted under those keys is unrecoverable.   For external key stores: Some external key managers provide a simpler method for updating an external key store. For details, see your external key manager documentation. When updating an external key store in the KMS console, you can upload a JSON-based proxy configuration file with the desired values. You cannot upload the proxy configuration file to the UpdateCustomKeyStore operation. However, you can use the file to help you determine the correct values for the UpdateCustomKeyStore parameters.  For an CloudHSM key store, you can use this operation to change the custom key store friendly name (NewCustomKeyStoreName), to tell KMS about a change to the kmsuser crypto user password (KeyStorePassword), or to associate the custom key store with a different, but related, CloudHSM cluster (CloudHsmClusterId). To update any property of an CloudHSM key store, the ConnectionState of the CloudHSM key store must be DISCONNECTED.  For an external key store, you can use this operation to change the custom key store friendly name (NewCustomKeyStoreName), or to tell KMS about a change to the external key store proxy authentication credentials (XksProxyAuthenticationCredential), connection method (XksProxyConnectivity), external proxy endpoint (XksProxyUriEndpoint) and path (XksProxyUriPath). For external key stores with an XksProxyConnectivity of VPC_ENDPOINT_SERVICE, you can also update the Amazon VPC endpoint service name (XksProxyVpcEndpointServiceName). To update most properties of an external key store, the ConnectionState of the external key store must be DISCONNECTED. However, you can update the CustomKeyStoreName, XksProxyAuthenticationCredential, and XksProxyUriPath of an external key store when it is in the CONNECTED or DISCONNECTED state.  If your update requires a DISCONNECTED state, before using UpdateCustomKeyStore, use the DisconnectCustomKeyStore operation to disconnect the custom key store. After the UpdateCustomKeyStore operation completes, use the ConnectCustomKeyStore to reconnect the custom key store. To find the ConnectionState of the custom key store, use the DescribeCustomKeyStores operation.    Before updating the custom key store, verify that the new values allow KMS to connect the custom key store to its backing key store. For example, before you change the XksProxyUriPath value, verify that the external key store proxy is reachable at the new path. If the operation succeeds, it returns a JSON object with no properties.  Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.  Required permissions: kms:UpdateCustomKeyStore (IAM policy)  Related operations:     ConnectCustomKeyStore     CreateCustomKeyStore     DeleteCustomKeyStore     DescribeCustomKeyStores     DisconnectCustomKeyStore     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--custom-key-store-id",
          description:
            "Identifies the custom key store that you want to update. Enter the ID of the custom key store. To find the ID of a custom key store, use the DescribeCustomKeyStores operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-custom-key-store-name",
          description:
            "Changes the friendly name of the custom key store to the value that you specify. The custom key store name must be unique in the Amazon Web Services account.  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  To change this value, an CloudHSM key store must be disconnected. An external key store can be connected or disconnected",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-store-password",
          description:
            "Enter the current password of the kmsuser crypto user (CU) in the CloudHSM cluster that is associated with the custom key store. This parameter is valid only for custom key stores with a CustomKeyStoreType of AWS_CLOUDHSM. This parameter tells KMS the current password of the kmsuser crypto user (CU). It does not set or change the password of any users in the CloudHSM cluster. To change this value, the CloudHSM key store must be disconnected",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloud-hsm-cluster-id",
          description:
            "Associates the custom key store with a related CloudHSM cluster. This parameter is valid only for custom key stores with a CustomKeyStoreType of AWS_CLOUDHSM. Enter the cluster ID of the cluster that you used to create the custom key store or a cluster that shares a backup history and has the same cluster certificate as the original cluster. You cannot use this parameter to associate a custom key store with an unrelated cluster. In addition, the replacement cluster must fulfill the requirements for a cluster associated with a custom key store. To view the cluster certificate of a cluster, use the DescribeClusters operation. To change this value, the CloudHSM key store must be disconnected",
          args: {
            name: "string",
          },
        },
        {
          name: "--xks-proxy-uri-endpoint",
          description:
            "Changes the URI endpoint that KMS uses to connect to your external key store proxy (XKS proxy). This parameter is valid only for custom key stores with a CustomKeyStoreType of EXTERNAL_KEY_STORE. For external key stores with an XksProxyConnectivity value of PUBLIC_ENDPOINT, the protocol must be HTTPS. For external key stores with an XksProxyConnectivity value of VPC_ENDPOINT_SERVICE, specify https:// followed by the private DNS name associated with the VPC endpoint service. Each external key store must use a different private DNS name. The combined XksProxyUriEndpoint and XksProxyUriPath values must be unique in the Amazon Web Services account and Region. To change this value, the external key store must be disconnected",
          args: {
            name: "string",
          },
        },
        {
          name: "--xks-proxy-uri-path",
          description:
            "Changes the base path to the proxy APIs for this external key store. To find this value, see the documentation for your external key manager and external key store proxy (XKS proxy). This parameter is valid only for custom key stores with a CustomKeyStoreType of EXTERNAL_KEY_STORE. The value must start with / and must end with /kms/xks/v1, where v1 represents the version of the KMS external key store proxy API. You can include an optional prefix between the required elements such as /example/kms/xks/v1. The combined XksProxyUriEndpoint and XksProxyUriPath values must be unique in the Amazon Web Services account and Region. You can change this value when the external key store is connected or disconnected",
          args: {
            name: "string",
          },
        },
        {
          name: "--xks-proxy-vpc-endpoint-service-name",
          description:
            "Changes the name that KMS uses to identify the Amazon VPC endpoint service for your external key store proxy (XKS proxy). This parameter is valid when the CustomKeyStoreType is EXTERNAL_KEY_STORE and the XksProxyConnectivity is VPC_ENDPOINT_SERVICE. To change this value, the external key store must be disconnected",
          args: {
            name: "string",
          },
        },
        {
          name: "--xks-proxy-authentication-credential",
          description:
            "Changes the credentials that KMS uses to sign requests to the external key store proxy (XKS proxy). This parameter is valid only for custom key stores with a CustomKeyStoreType of EXTERNAL_KEY_STORE. You must specify both the AccessKeyId and SecretAccessKey value in the authentication credential, even if you are only updating one value. This parameter doesn't establish or change your authentication credentials on the proxy. It just tells KMS the credential that you established with your external key store proxy. For example, if you rotate the credential on your external key store proxy, you can use this parameter to update the credential in KMS. You can change this value when the external key store is connected or disconnected",
          args: {
            name: "structure",
          },
        },
        {
          name: "--xks-proxy-connectivity",
          description:
            "Changes the connectivity setting for the external key store. To indicate that the external key store proxy uses a Amazon VPC endpoint service to communicate with KMS, specify VPC_ENDPOINT_SERVICE. Otherwise, specify PUBLIC_ENDPOINT. If you change the XksProxyConnectivity to VPC_ENDPOINT_SERVICE, you must also change the XksProxyUriEndpoint and add an XksProxyVpcEndpointServiceName value.  If you change the XksProxyConnectivity to PUBLIC_ENDPOINT, you must also change the XksProxyUriEndpoint and specify a null or empty string for the XksProxyVpcEndpointServiceName value. To change this value, the external key store must be disconnected",
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
      name: "update-key-description",
      description:
        "Updates the description of a KMS key. To see the description of a KMS key, use DescribeKey.  The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.   Required permissions: kms:UpdateKeyDescription (key policy)  Related operations     CreateKey     DescribeKey     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Updates the description of the specified KMS key. Specify the key ID or key ARN of the KMS key. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "New description for the KMS key.  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output",
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
      name: "update-primary-region",
      description:
        "Changes the primary key of a multi-Region key.  This operation changes the replica key in the specified Region to a primary key and changes the former primary key to a replica key. For example, suppose you have a primary key in us-east-1 and a replica key in eu-west-2. If you run UpdatePrimaryRegion with a PrimaryRegion value of eu-west-2, the primary key is now the key in eu-west-2, and the key in us-east-1 becomes a replica key. For details, see Updating the primary Region in the Key Management Service Developer Guide. This operation supports multi-Region keys, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide. The primary key of a multi-Region key is the source for properties that are always shared by primary and replica keys, including the key material, key ID, key spec, key usage, key material origin, and automatic key rotation. It's the only key that can be replicated. You cannot delete the primary key until all replica keys are deleted. The key ID and primary Region that you specify uniquely identify the replica key that will become the primary key. The primary Region must already have a replica key. This operation does not create a KMS key in the specified Region. To find the replica keys, use the DescribeKey operation on the primary key or any replica key. To create a replica key, use the ReplicateKey operation. You can run this operation while using the affected multi-Region keys in cryptographic operations. This operation should not delay, interrupt, or cause failures in cryptographic operations.  Even after this operation completes, the process of updating the primary Region might still be in progress for a few more seconds. Operations such as DescribeKey might display both the old and new primary keys as replicas. The old and new primary keys have a transient key state of Updating. The original key state is restored when the update is complete. While the key state is Updating, you can use the keys in cryptographic operations, but you cannot replicate the new primary key or perform certain management operations, such as enabling or disabling these keys. For details about the Updating key state, see Key states of KMS keys in the Key Management Service Developer Guide. This operation does not return any output. To verify that primary key is changed, use the DescribeKey operation.  Cross-account use: No. You cannot use this operation in a different Amazon Web Services account.   Required permissions:     kms:UpdatePrimaryRegion on the current primary key (in the primary key's Region). Include this permission primary key's key policy.    kms:UpdatePrimaryRegion on the current replica key (in the replica key's Region). Include this permission in the replica key's key policy.    Related operations     CreateKey     ReplicateKey     Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            "Identifies the current primary key. When the operation completes, this KMS key will be a replica key. Specify the key ID or key ARN of a multi-Region primary key. For example:   Key ID: mrk-1234abcd12ab34cd56ef1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--primary-region",
          description:
            "The Amazon Web Services Region of the new primary key. Enter the Region ID, such as us-east-1 or ap-southeast-2. There must be an existing replica key in this Region.  When the operation completes, the multi-Region key in this Region will be the primary key",
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
      name: "verify",
      description:
        "Verifies a digital signature that was generated by the Sign operation.   Verification confirms that an authorized user signed the message with the specified KMS key and signing algorithm, and the message hasn't changed since it was signed. If the signature is verified, the value of the SignatureValid field in the response is True. If the signature verification fails, the Verify operation fails with an KMSInvalidSignatureException exception. A digital signature is generated by using the private key in an asymmetric KMS key. The signature is verified by using the public key in the same asymmetric KMS key. For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide. To use the Verify operation, specify the same asymmetric KMS key, message, and signing algorithm that were used to produce the signature. The message type does not need to be the same as the one used for signing, but it must indicate whether the value of the Message parameter should be hashed as part of the verification process. You can also verify the digital signature by using the public key of the KMS key outside of KMS. Use the GetPublicKey operation to download the public key in the asymmetric KMS key and then use the public key to verify the signature outside of KMS. The advantage of using the Verify operation is that it is performed within KMS. As a result, it's easy to call, the operation is performed within the FIPS boundary, it is logged in CloudTrail, and you can use key policy and IAM policy to determine who is authorized to use the KMS key to verify signatures. To verify a signature outside of KMS with an SM2 public key (China Regions only), you must specify the distinguishing ID. By default, KMS uses 1234567812345678 as the distinguishing ID. For more information, see Offline verification with SM2 key pairs. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter.   Required permissions: kms:Verify (key policy)  Related operations: Sign   Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--key-id",
          description:
            'Identifies the asymmetric KMS key that will be used to verify the signature. This must be the same KMS key that was used to generate the signature. If you specify a different KMS key, the signature verification fails. To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases',
          args: {
            name: "string",
          },
        },
        {
          name: "--message",
          description:
            "Specifies the message that was signed. You can submit a raw message of up to 4096 bytes, or a hash digest of the message. If you submit a digest, use the MessageType parameter with a value of DIGEST. If the message specified here is different from the message that was signed, the signature verification fails. A message and its hash digest are considered to be the same message",
          args: {
            name: "blob",
          },
        },
        {
          name: "--message-type",
          description:
            "Tells KMS whether the value of the Message parameter should be hashed as part of the signing algorithm. Use RAW for unhashed messages; use DIGEST for message digests, which are already hashed. When the value of MessageType is RAW, KMS uses the standard signing algorithm, which begins with a hash function. When the value is DIGEST, KMS skips the hashing step in the signing algorithm.  Use the DIGEST value only when the value of the Message parameter is a message digest. If you use the DIGEST value with an unhashed message, the security of the verification operation can be compromised.  When the value of MessageTypeis DIGEST, the length of the Message value must match the length of hashed messages for the specified signing algorithm. You can submit a message digest and omit the MessageType or specify RAW so the digest is hashed again while signing. However, if the signed message is hashed once while signing, but twice while verifying, verification fails, even when the message hasn't changed. The hashing algorithm in that Verify uses is based on the SigningAlgorithm value.   Signing algorithms that end in SHA_256 use the SHA_256 hashing algorithm.   Signing algorithms that end in SHA_384 use the SHA_384 hashing algorithm.   Signing algorithms that end in SHA_512 use the SHA_512 hashing algorithm.   SM2DSA uses the SM3 hashing algorithm. For details, see Offline verification with SM2 key pairs",
          args: {
            name: "string",
          },
        },
        {
          name: "--signature",
          description: "The signature that the Sign operation generated",
          args: {
            name: "blob",
          },
        },
        {
          name: "--signing-algorithm",
          description:
            "The signing algorithm that was used to sign the message. If you submit a different algorithm, the signature verification fails",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
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
      name: "verify-mac",
      description:
        "Verifies the hash-based message authentication code (HMAC) for a specified message, HMAC KMS key, and MAC algorithm. To verify the HMAC, VerifyMac computes an HMAC using the message, HMAC KMS key, and MAC algorithm that you specify, and compares the computed HMAC to the HMAC that you specify. If the HMACs are identical, the verification succeeds; otherwise, it fails. Verification indicates that the message hasn't changed since the HMAC was calculated, and the specified key was used to generate and verify the HMAC. HMAC KMS keys and the HMAC algorithms that KMS uses conform to industry standards defined in RFC 2104. This operation is part of KMS support for HMAC KMS keys. For details, see HMAC keys in KMS in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide.  Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter.   Required permissions: kms:VerifyMac (key policy)  Related operations: GenerateMac   Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency",
      options: [
        {
          name: "--message",
          description:
            "The message that will be used in the verification. Enter the same message that was used to generate the HMAC.  GenerateMac and VerifyMac do not provide special handling for message digests. If you generated an HMAC for a hash digest of a message, you must verify the HMAC for the same hash digest",
          args: {
            name: "blob",
          },
        },
        {
          name: "--key-id",
          description:
            "The KMS key that will be used in the verification. Enter a key ID of the KMS key that was used to generate the HMAC. If you identify a different KMS key, the VerifyMac operation fails",
          args: {
            name: "string",
          },
        },
        {
          name: "--mac-algorithm",
          description:
            "The MAC algorithm that will be used in the verification. Enter the same MAC algorithm that was used to compute the HMAC. This algorithm must be supported by the HMAC KMS key identified by the KeyId parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--mac",
          description:
            "The HMAC to verify. Enter the HMAC that was generated by the GenerateMac operation when you specified the same message, HMAC KMS key, and MAC algorithm as the values specified in this request",
          args: {
            name: "blob",
          },
        },
        {
          name: "--grant-tokens",
          description:
            "A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks if your request will succeed. DryRun is an optional parameter.  To learn more about how to use this parameter, see Testing your KMS API calls in the Key Management Service Developer Guide",
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
