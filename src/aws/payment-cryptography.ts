const completionSpec: Fig.Spec = {
  name: "payment-cryptography",
  description:
    "Amazon Web Services Payment Cryptography Control Plane APIs manage encryption keys for use during payment-related cryptographic operations. You can create, import, export, share, manage, and delete keys. You can also manage Identity and Access Management (IAM) policies for keys. For more information, see Identity and access management in the Amazon Web Services Payment Cryptography User Guide.  To use encryption keys for payment-related transaction processing and associated cryptographic operations, you use the Amazon Web Services Payment Cryptography Data Plane. You can perform actions like encrypt, decrypt, generate, and verify payment-related data. All Amazon Web Services Payment Cryptography API calls must be signed and transmitted using Transport Layer Security (TLS). We recommend you always use the latest supported TLS version for logging API requests.  Amazon Web Services Payment Cryptography supports CloudTrail for control plane operations, a service that logs Amazon Web Services API calls and related events for your Amazon Web Services account and delivers them to an Amazon S3 bucket you specify. By using the information collected by CloudTrail, you can determine what requests were made to Amazon Web Services Payment Cryptography, who made the request, when it was made, and so on. If you don't con\ufb01gure a trail, you can still view the most recent events in the CloudTrail console. For more information, see the CloudTrail User Guide",
  subcommands: [
    {
      name: "create-alias",
      description:
        "Creates an alias, or a friendly name, for an Amazon Web Services Payment Cryptography key. You can use an alias to identify a key in the console and when you call cryptographic operations such as EncryptData or DecryptData. You can associate the alias with any key in the same Amazon Web Services Region. Each alias is associated with only one key at a time, but a key can have multiple aliases. You can't create an alias without a key. The alias must be unique in the account and Amazon Web Services Region, but you can create another alias with the same name in a different Amazon Web Services Region. To change the key that's associated with the alias, call UpdateAlias. To delete the alias, call DeleteAlias. These operations don't affect the underlying key. To get the alias that you created, call ListAliases.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     DeleteAlias     GetAlias     ListAliases     UpdateAlias",
      options: [
        {
          name: "--alias-name",
          description:
            "A friendly name that you can use to refer to a key. An alias must begin with alias/ followed by a name, for example alias/ExampleAlias. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-).  Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-arn",
          description: "The KeyARN of the key to associate with the alias",
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
      name: "create-key",
      description:
        "Creates an Amazon Web Services Payment Cryptography key, a logical representation of a cryptographic key, that is unique in your account and Amazon Web Services Region. You use keys for cryptographic functions such as encryption and decryption.  In addition to the key material used in cryptographic operations, an Amazon Web Services Payment Cryptography key includes metadata such as the key ARN, key usage, key origin, creation date, description, and key state. When you create a key, you specify both immutable and mutable data about the key. The immutable data contains key attributes that define the scope and cryptographic operations that you can perform using the key, for example key class (example: SYMMETRIC_KEY), key algorithm (example: TDES_2KEY), key usage (example: TR31_P0_PIN_ENCRYPTION_KEY) and key modes of use (example: Encrypt). For information about valid combinations of key attributes, see Understanding key attributes in the Amazon Web Services Payment Cryptography User Guide. The mutable data contained within a key includes usage timestamp and key deletion timestamp and can be modified after creation. Amazon Web Services Payment Cryptography binds key attributes to keys using key blocks when you store or export them. Amazon Web Services Payment Cryptography stores the key contents wrapped and never stores or transmits them in the clear.   Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     DeleteKey     GetKey     ListKeys",
      options: [
        {
          name: "--key-attributes",
          description:
            "The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key-check-value-algorithm",
          description:
            "The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity. For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result",
          args: {
            name: "string",
          },
        },
        {
          name: "--exportable",
          description:
            "Specifies whether the key is exportable from the service",
        },
        {
          name: "--no-exportable",
          description:
            "Specifies whether the key is exportable from the service",
        },
        {
          name: "--enabled",
          description:
            "Specifies whether to enable the key. If the key is enabled, it is activated for use within the service. If the key is not enabled, then it is created but not activated. The default value is enabled",
        },
        {
          name: "--no-enabled",
          description:
            "Specifies whether to enable the key. If the key is enabled, it is activated for use within the service. If the key is not enabled, then it is created but not activated. The default value is enabled",
        },
        {
          name: "--tags",
          description:
            "Assigns one or more tags to the Amazon Web Services Payment Cryptography key. Use this parameter to tag a key when it is created. To tag an existing Amazon Web Services Payment Cryptography key, use the TagResource operation. Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key.   Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.   Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key",
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
      name: "delete-alias",
      description:
        "Deletes the alias, but doesn't affect the underlying key. Each key can have multiple aliases. To get the aliases of all keys, use the UpdateAlias operation. To change the alias of a key, first use DeleteAlias to delete the current alias and then use CreateAlias to create a new alias. To associate an existing alias with a different key, call UpdateAlias.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateAlias     GetAlias     ListAliases     UpdateAlias",
      options: [
        {
          name: "--alias-name",
          description:
            "A friendly name that you can use to refer Amazon Web Services Payment Cryptography key. This value must begin with alias/ followed by a name, such as alias/ExampleAlias",
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
      name: "delete-key",
      description:
        "Deletes the key material and metadata associated with Amazon Web Services Payment Cryptography key. Key deletion is irreversible. After a key is deleted, you can't perform cryptographic operations using the key. For example, you can't decrypt data that was encrypted by a deleted Amazon Web Services Payment Cryptography key, and the data may become unrecoverable. Because key deletion is destructive, Amazon Web Services Payment Cryptography has a safety mechanism to prevent accidental deletion of a key. When you call this operation, Amazon Web Services Payment Cryptography disables the specified key but doesn't delete it until after a waiting period set using DeleteKeyInDays. The default waiting period is 7 days. During the waiting period, the KeyState is DELETE_PENDING. After the key is deleted, the KeyState is DELETE_COMPLETE. You should delete a key only when you are sure that you don't need to use it anymore and no other parties are utilizing this key. If you aren't sure, consider deactivating it instead by calling StopKeyUsage.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     RestoreKey     StartKeyUsage     StopKeyUsage",
      options: [
        {
          name: "--key-identifier",
          description: "The KeyARN of the key that is scheduled for deletion",
          args: {
            name: "string",
          },
        },
        {
          name: "--delete-key-in-days",
          description:
            "The waiting period for key deletion. The default value is seven days",
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
      name: "export-key",
      description:
        "Exports a key from Amazon Web Services Payment Cryptography. Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With ExportKey you can export symmetric keys using either symmetric and asymmetric key exchange mechanisms. Using this operation, you can share your Amazon Web Services Payment Cryptography generated keys with other service partners to perform cryptographic operations outside of Amazon Web Services Payment Cryptography  For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm and RSA wrap and unwrap key exchange mechanism. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK). After which you can export working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography. The TR-34 norm is intended for exchanging 3DES keys only and keys are imported in a WrappedKeyBlock format. Key attributes (such as KeyUsage, KeyAlgorithm, KeyModesOfUse, Exportability) are contained within the key block. With RSA wrap and unwrap, you can exchange both 3DES and AES-128 keys. The keys are imported in a WrappedKeyCryptogram format and you will need to specify the key attributes during import.  You can also use ExportKey functionality to generate and export an IPEK (Initial Pin Encryption Key) from Amazon Web Services Payment Cryptography using either TR-31 or TR-34 export key exchange. IPEK is generated from BDK (Base Derivation Key) and ExportDukptInitialKey attribute KSN (KeySerialNumber). The generated IPEK does not persist within Amazon Web Services Payment Cryptography and has to be re-generated each time during export. For key exchange using TR-31 or TR-34 key blocks, you can also export optional blocks within the key block header which contain additional attribute information about the key. The KeyVersion within KeyBlockHeaders indicates the version of the key within the key block. Furthermore, KeyExportability within KeyBlockHeaders can be used to further restrict exportability of the key after export from Amazon Web Services Payment Cryptography. The OptionalBlocks contain the additional data related to the key. For information on data type that can be included within optional blocks, refer to ASC X9.143-2022.  Data included in key block headers is signed but transmitted in clear text. Sensitive or confidential information should not be included in optional blocks. Refer to ASC X9.143-2022 standard for information on allowed data type.   To export initial keys (KEK) or IPEK using TR-34  Using this operation, you can export initial key using TR-34 asymmetric key exchange. You can only export KEK generated within Amazon Web Services Payment Cryptography. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During key export process, KDH is Amazon Web Services Payment Cryptography which initiates key export and KRD is the user receiving the key. To initiate TR-34 key export, the KRD must obtain an export token by calling GetParametersForExport. This operation also generates a key pair for the purpose of key export, signs the key and returns back the signing public key certificate (also known as KDH signing certificate) and root certificate chain. The KDH uses the private key to sign the the export payload and the signing public key certificate is provided to KRD to verify the signature. The KRD can import the root certificate into its Hardware Security Module (HSM), as required. The export token and the associated KDH signing certificate expires after 7 days.  Next the KRD generates a key pair for the the purpose of encrypting the KDH key and provides the public key cerificate (also known as KRD wrapping certificate) back to KDH. The KRD will also import the root cerificate chain into Amazon Web Services Payment Cryptography by calling ImportKey for RootCertificatePublicKey. The KDH, Amazon Web Services Payment Cryptography, will use the KRD wrapping cerificate to encrypt (wrap) the key under export and signs it with signing private key to generate a TR-34 WrappedKeyBlock. For more information on TR-34 key export, see section Exporting symmetric keys in the Amazon Web Services Payment Cryptography User Guide.  Set the following parameters:    ExportAttributes: Specify export attributes in case of IPEK export. This parameter is optional for KEK export.    ExportKeyIdentifier: The KeyARN of the KEK or BDK (in case of IPEK) under export.    KeyMaterial: Use Tr34KeyBlock parameters.    CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed the KRD wrapping key certificate.    ExportToken: Obtained from KDH by calling GetParametersForImport.    WrappingKeyCertificate: The public key certificate in PEM format (base64 encoded) of the KRD wrapping key Amazon Web Services Payment Cryptography uses for encryption of the TR-34 export payload. This certificate must be signed by the root certificate (CertificateAuthorityPublicKeyIdentifier) imported into Amazon Web Services Payment Cryptography.   When this operation is successful, Amazon Web Services Payment Cryptography returns the KEK or IPEK as a TR-34 WrappedKeyBlock.   To export initial keys (KEK) or IPEK using RSA Wrap and Unwrap  Using this operation, you can export initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate export, generate an asymmetric key pair on the receiving HSM and obtain the public key certificate in PEM format (base64 encoded) for the purpose of wrapping and the root certifiate chain. Import the root certificate into Amazon Web Services Payment Cryptography by calling ImportKey for RootCertificatePublicKey. Next call ExportKey and set the following parameters:    CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed wrapping key certificate.    KeyMaterial: Set to KeyCryptogram.    WrappingKeyCertificate: The public key certificate in PEM format (base64 encoded) obtained by the receiving HSM and signed by the root certificate (CertificateAuthorityPublicKeyIdentifier) imported into Amazon Web Services Payment Cryptography. The receiving HSM uses its private key component to unwrap the WrappedKeyCryptogram.   When this operation is successful, Amazon Web Services Payment Cryptography returns the WrappedKeyCryptogram.   To export working keys or IPEK using TR-31  Using this operation, you can export working keys or IPEK using TR-31 symmetric key exchange. In TR-31, you must use an initial key such as KEK to encrypt or wrap the key under export. To establish a KEK, you can use CreateKey or ImportKey.  Set the following parameters:    ExportAttributes: Specify export attributes in case of IPEK export. This parameter is optional for KEK export.    ExportKeyIdentifier: The KeyARN of the KEK or BDK (in case of IPEK) under export.    KeyMaterial: Use Tr31KeyBlock parameters.   When this operation is successful, Amazon Web Services Payment Cryptography returns the working key or IPEK as a TR-31 WrappedKeyBlock.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     GetParametersForExport     ImportKey",
      options: [
        {
          name: "--key-material",
          description:
            "The key block format type, for example, TR-34 or TR-31, to use during key material export",
          args: {
            name: "structure",
          },
        },
        {
          name: "--export-key-identifier",
          description:
            "The KeyARN of the key under export from Amazon Web Services Payment Cryptography",
          args: {
            name: "string",
          },
        },
        {
          name: "--export-attributes",
          description: "The attributes for IPEK generation during export",
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
      name: "get-alias",
      description:
        "Gets the Amazon Web Services Payment Cryptography key associated with the alias.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateAlias     DeleteAlias     ListAliases     UpdateAlias",
      options: [
        {
          name: "--alias-name",
          description:
            "The alias of the Amazon Web Services Payment Cryptography key",
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
      name: "get-key",
      description:
        "Gets the key material for an Amazon Web Services Payment Cryptography key, including the immutable and mutable data specified when the key was created.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateKey     DeleteKey     ListKeys",
      options: [
        {
          name: "--key-identifier",
          description:
            "The KeyARN of the Amazon Web Services Payment Cryptography key",
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
      name: "get-parameters-for-export",
      description:
        "Gets the export token and the signing key certificate to initiate a TR-34 key export from Amazon Web Services Payment Cryptography. The signing key certificate signs the wrapped key under export within the TR-34 key payload. The export token and signing key certificate must be in place and operational before calling ExportKey. The export token expires in 7 days. You can use the same export token to export multiple keys from your service account.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     ExportKey     GetParametersForImport",
      options: [
        {
          name: "--key-material-type",
          description:
            "The key block format type (for example, TR-34 or TR-31) to use during key material export. Export token is only required for a TR-34 key export, TR34_KEY_BLOCK. Export token is not required for TR-31 key export",
          args: {
            name: "string",
          },
        },
        {
          name: "--signing-key-algorithm",
          description:
            "The signing key algorithm to generate a signing key certificate. This certificate signs the wrapped key under export within the TR-34 key block. RSA_2048 is the only signing key algorithm allowed",
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
        "Gets the import token and the wrapping key certificate in PEM format (base64 encoded) to initiate a TR-34 WrappedKeyBlock or a RSA WrappedKeyCryptogram import into Amazon Web Services Payment Cryptography. The wrapping key certificate wraps the key under import. The import token and wrapping key certificate must be in place and operational before calling ImportKey. The import token expires in 7 days. You can use the same import token to import multiple keys into your service account.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     GetParametersForExport     ImportKey",
      options: [
        {
          name: "--key-material-type",
          description:
            "The method to use for key material import. Import token is only required for TR-34 WrappedKeyBlock (TR34_KEY_BLOCK) and RSA WrappedKeyCryptogram (KEY_CRYPTOGRAM). Import token is not required for TR-31, root public key cerificate or trusted public key certificate",
          args: {
            name: "string",
          },
        },
        {
          name: "--wrapping-key-algorithm",
          description:
            "The wrapping key algorithm to generate a wrapping key certificate. This certificate wraps the key under import. At this time, RSA_2048 is the allowed algorithm for TR-34 WrappedKeyBlock import. Additionally, RSA_2048, RSA_3072, RSA_4096 are the allowed algorithms for RSA WrappedKeyCryptogram import",
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
      name: "get-public-key-certificate",
      description:
        "Gets the public key certificate of the asymmetric key pair that exists within Amazon Web Services Payment Cryptography. Unlike the private key of an asymmetric key, which never leaves Amazon Web Services Payment Cryptography unencrypted, callers with GetPublicKeyCertificate permission can download the public key certificate of the asymmetric key. You can share the public key certificate to allow others to encrypt messages and verify signatures outside of Amazon Web Services Payment Cryptography  Cross-account use: This operation can't be used across different Amazon Web Services accounts",
      options: [
        {
          name: "--key-identifier",
          description: "The KeyARN of the asymmetric key pair",
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
      name: "import-key",
      description:
        "Imports symmetric keys and public key certificates in PEM format (base64 encoded) into Amazon Web Services Payment Cryptography. Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With ImportKey you can import symmetric keys using either symmetric and asymmetric key exchange mechanisms. For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm and RSA wrap and unwrap key exchange mechanisms. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK) or Zone Master Key (ZMK). After which you can import working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography. The TR-34 norm is intended for exchanging 3DES keys only and keys are imported in a WrappedKeyBlock format. Key attributes (such as KeyUsage, KeyAlgorithm, KeyModesOfUse, Exportability) are contained within the key block. With RSA wrap and unwrap, you can exchange both 3DES and AES-128 keys. The keys are imported in a WrappedKeyCryptogram format and you will need to specify the key attributes during import.  You can also import a root public key certificate, used to sign other public key certificates, or a trusted public key certificate under an already established root public key certificate.  To import a public root key certificate  You can also import a root public key certificate, used to sign other public key certificates, or a trusted public key certificate under an already established root public key certificate.  To import a public root key certificate  Using this operation, you can import the public component (in PEM cerificate format) of your private root key. You can use the imported public root key certificate for digital signatures, for example signing wrapping key or signing key in TR-34, within your Amazon Web Services Payment Cryptography account. Set the following parameters:    KeyMaterial: RootCertificatePublicKey     KeyClass: PUBLIC_KEY     KeyModesOfUse: Verify     KeyUsage: TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE     PublicKeyCertificate: The public key certificate in PEM format (base64 encoded) of the private root key under import.    To import a trusted public key certificate  The root public key certificate must be in place and operational before you import a trusted public key certificate. Set the following parameters:    KeyMaterial: TrustedCertificatePublicKey     CertificateAuthorityPublicKeyIdentifier: KeyArn of the RootCertificatePublicKey.    KeyModesOfUse and KeyUsage: Corresponding to the cryptographic operations such as wrap, sign, or encrypt that you will allow the trusted public key certificate to perform.    PublicKeyCertificate: The trusted public key certificate in PEM format (base64 encoded) under import.    To import initial keys (KEK or ZMK or similar) using TR-34  Using this operation, you can import initial key using TR-34 asymmetric key exchange. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During the key import process, KDH is the user who initiates the key import and KRD is Amazon Web Services Payment Cryptography who receives the key. To initiate TR-34 key import, the KDH must obtain an import token by calling GetParametersForImport. This operation generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate (also known as KRD wrapping certificate) and the root certificate chain. The KDH must trust and install the KRD wrapping certificate on its HSM and use it to encrypt (wrap) the KDH key during TR-34 WrappedKeyBlock generation. The import token and associated KRD wrapping certificate expires after 7 days. Next the KDH generates a key pair for the purpose of signing the encrypted KDH key and provides the public certificate of the signing key to Amazon Web Services Payment Cryptography. The KDH will also need to import the root certificate chain of the KDH signing certificate by calling ImportKey for RootCertificatePublicKey. For more information on TR-34 key import, see section Importing symmetric keys in the Amazon Web Services Payment Cryptography User Guide. Set the following parameters:    KeyMaterial: Use Tr34KeyBlock parameters.    CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed the KDH signing key certificate.    ImportToken: Obtained from KRD by calling GetParametersForImport.    WrappedKeyBlock: The TR-34 wrapped key material from KDH. It contains the KDH key under import, wrapped with KRD wrapping certificate and signed by KDH signing private key. This TR-34 key block is typically generated by the KDH Hardware Security Module (HSM) outside of Amazon Web Services Payment Cryptography.    SigningKeyCertificate: The public key certificate in PEM format (base64 encoded) of the KDH signing key generated under the root certificate (CertificateAuthorityPublicKeyIdentifier) imported in Amazon Web Services Payment Cryptography.    To import initial keys (KEK or ZMK or similar) using RSA Wrap and Unwrap  Using this operation, you can import initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate import, call GetParametersForImport with KeyMaterial set to KEY_CRYPTOGRAM to generate an import token. This operation also generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate in PEM format (base64 encoded) and its root certificate chain. The import token and associated KRD wrapping certificate expires after 7 days.  You must trust and install the wrapping certificate and its certificate chain on the sending HSM and use it to wrap the key under export for WrappedKeyCryptogram generation. Next call ImportKey with KeyMaterial set to KEY_CRYPTOGRAM and provide the ImportToken and KeyAttributes for the key under import.  To import working keys using TR-31  Amazon Web Services Payment Cryptography uses TR-31 symmetric key exchange norm to import working keys. A KEK must be established within Amazon Web Services Payment Cryptography by using TR-34 key import or by using CreateKey. To initiate a TR-31 key import, set the following parameters:    KeyMaterial: Use Tr31KeyBlock parameters.    WrappedKeyBlock: The TR-31 wrapped key material. It contains the key under import, encrypted using KEK. The TR-31 key block is typically generated by a HSM outside of Amazon Web Services Payment Cryptography.     WrappingKeyIdentifier: The KeyArn of the KEK that Amazon Web Services Payment Cryptography uses to decrypt or unwrap the key under import.    Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     ExportKey     GetParametersForImport",
      options: [
        {
          name: "--key-material",
          description:
            "The key or public key certificate type to use during key material import, for example TR-34 or RootCertificatePublicKey",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key-check-value-algorithm",
          description:
            "The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity. For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result",
          args: {
            name: "string",
          },
        },
        {
          name: "--enabled",
          description: "Specifies whether import key is enabled",
        },
        {
          name: "--no-enabled",
          description: "Specifies whether import key is enabled",
        },
        {
          name: "--tags",
          description:
            "Assigns one or more tags to the Amazon Web Services Payment Cryptography key. Use this parameter to tag a key when it is imported. To tag an existing Amazon Web Services Payment Cryptography key, use the TagResource operation. Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. If you specify an existing tag key with a different tag value, Amazon Web Services Payment Cryptography replaces the current tag value with the specified one.  Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.   Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key",
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
      name: "list-aliases",
      description:
        "Lists the aliases for all keys in the caller's Amazon Web Services account and Amazon Web Services Region. You can filter the aliases by keyARN. For more information, see Using aliases in the Amazon Web Services Payment Cryptography User Guide. This is a paginated operation, which means that each response might contain only a subset of all the aliases. When the response contains only a subset of aliases, it includes a NextToken value. Use this value in a subsequent ListAliases request to get more aliases. When you receive a response with no NextToken (or an empty or null value), that means there are no more aliases to get.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateAlias     DeleteAlias     GetAlias     UpdateAlias",
      options: [
        {
          name: "--key-arn",
          description: "The keyARN for which you want to list all aliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextToken from the truncated response you just received",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50",
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
      name: "list-keys",
      description:
        "Lists the keys in the caller's Amazon Web Services account and Amazon Web Services Region. You can filter the list of keys. This is a paginated operation, which means that each response might contain only a subset of all the keys. When the response contains only a subset of keys, it includes a NextToken value. Use this value in a subsequent ListKeys request to get more keys. When you receive a response with no NextToken (or an empty or null value), that means there are no more keys to get.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateKey     DeleteKey     GetKey",
      options: [
        {
          name: "--key-state",
          description: "The key state of the keys you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextToken from the truncated response you just received",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50",
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
      name: "list-tags-for-resource",
      description:
        "Lists the tags for an Amazon Web Services resource. This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a NextToken value. Use this value in a subsequent ListTagsForResource request to get more tags. When you receive a response with no NextToken (or an empty or null value), that means there are no more tags to get.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     TagResource     UntagResource",
      options: [
        {
          name: "--resource-arn",
          description: "The KeyARN of the key whose tags you are getting",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextToken from the truncated response you just received",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50",
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
      name: "restore-key",
      description:
        "Cancels a scheduled key deletion during the waiting period. Use this operation to restore a Key that is scheduled for deletion. During the waiting period, the KeyState is DELETE_PENDING and deletePendingTimestamp contains the date and time after which the Key will be deleted. After Key is restored, the KeyState is CREATE_COMPLETE, and the value for deletePendingTimestamp is removed.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     DeleteKey     StartKeyUsage     StopKeyUsage",
      options: [
        {
          name: "--key-identifier",
          description:
            "The KeyARN of the key to be restored within Amazon Web Services Payment Cryptography",
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
      name: "start-key-usage",
      description:
        "Enables an Amazon Web Services Payment Cryptography key, which makes it active for cryptographic operations within Amazon Web Services Payment Cryptography  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     StopKeyUsage",
      options: [
        {
          name: "--key-identifier",
          description: "The KeyArn of the key",
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
      name: "stop-key-usage",
      description:
        "Disables an Amazon Web Services Payment Cryptography key, which makes it inactive within Amazon Web Services Payment Cryptography. You can use this operation instead of DeleteKey to deactivate a key. You can enable the key in the future by calling StartKeyUsage.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     DeleteKey     StartKeyUsage",
      options: [
        {
          name: "--key-identifier",
          description: "The KeyArn of the key",
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
        "Adds or edits tags on an Amazon Web Services Payment Cryptography key.  Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.  Each tag consists of a tag key and a tag value, both of which are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value. You can also add tags to an Amazon Web Services Payment Cryptography key when you create it with CreateKey.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     ListTagsForResource     UntagResource",
      options: [
        {
          name: "--resource-arn",
          description: "The KeyARN of the key whose tags are being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "One or more tags. Each tag consists of a tag key and a tag value. The tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. If you specify an existing tag key with a different tag value, Amazon Web Services Payment Cryptography replaces the current tag value with the new one.  Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  To use this parameter, you must have TagResource permission in an IAM policy.  Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output",
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
        "Deletes a tag from an Amazon Web Services Payment Cryptography key.  Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.   Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     ListTagsForResource     TagResource",
      options: [
        {
          name: "--resource-arn",
          description: "The KeyARN of the key whose tags are being removed",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "One or more tag keys. Don't include the tag values. If the Amazon Web Services Payment Cryptography key doesn't have the specified tag key, Amazon Web Services Payment Cryptography doesn't throw an exception or return a response. To confirm that the operation succeeded, use the ListTagsForResource operation",
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
        "Associates an existing Amazon Web Services Payment Cryptography alias with a different key. Each alias is associated with only one Amazon Web Services Payment Cryptography key at a time, although a key can have multiple aliases. The alias and the Amazon Web Services Payment Cryptography key must be in the same Amazon Web Services account and Amazon Web Services Region  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateAlias     DeleteAlias     GetAlias     ListAliases",
      options: [
        {
          name: "--alias-name",
          description: "The alias whose associated key is changing",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-arn",
          description:
            "The KeyARN for the key that you are updating or removing from the alias",
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
