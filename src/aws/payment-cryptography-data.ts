const completionSpec: Fig.Spec = {
  name: "payment-cryptography-data",
  description:
    "You use the Amazon Web Services Payment Cryptography Data Plane to manage how encryption keys are used for payment-related transaction processing and associated cryptographic operations. You can encrypt, decrypt, generate, verify, and translate payment-related cryptographic operations in Amazon Web Services Payment Cryptography. For more information, see Data operations in the Amazon Web Services Payment Cryptography User Guide. To manage your encryption keys, you use the Amazon Web Services Payment Cryptography Control Plane. You can create, import, export, share, manage, and delete keys. You can also manage Identity and Access Management (IAM) policies for keys",
  subcommands: [
    {
      name: "decrypt-data",
      description:
        "Decrypts ciphertext data to plaintext using a symmetric (TDES, AES), asymmetric (RSA), or derived (DUKPT or EMV) encryption key scheme. For more information, see Decrypt data in the Amazon Web Services Payment Cryptography User Guide. You can use an encryption key generated within Amazon Web Services Payment Cryptography, or you can import your own encryption key by calling ImportKey. For this operation, the key must have KeyModesOfUse set to Decrypt. In asymmetric decryption, Amazon Web Services Payment Cryptography decrypts the ciphertext using the private component of the asymmetric encryption key pair. For data encryption outside of Amazon Web Services Payment Cryptography, you can export the public component of the asymmetric key pair by calling GetPublicCertificate. For symmetric and DUKPT decryption, Amazon Web Services Payment Cryptography supports TDES and AES algorithms. For EMV decryption, Amazon Web Services Payment Cryptography supports TDES algorithms. For asymmetric decryption, Amazon Web Services Payment Cryptography supports RSA.  When you use TDES or TDES DUKPT, the ciphertext data length must be a multiple of 8 bytes. For AES or AES DUKPT, the ciphertext data length must be a multiple of 16 bytes. For RSA, it sould be equal to the key size unless padding is enabled. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     EncryptData     GetPublicCertificate     ImportKey",
      options: [
        {
          name: "--cipher-text",
          description: "The ciphertext to decrypt",
          args: {
            name: "string",
          },
        },
        {
          name: "--decryption-attributes",
          description:
            "The encryption key type and attributes for ciphertext decryption",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key-identifier",
          description:
            "The keyARN of the encryption key that Amazon Web Services Payment Cryptography uses for ciphertext decryption",
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
      name: "encrypt-data",
      description:
        "Encrypts plaintext data to ciphertext using a symmetric (TDES, AES), asymmetric (RSA), or derived (DUKPT or EMV) encryption key scheme. For more information, see Encrypt data in the Amazon Web Services Payment Cryptography User Guide. You can generate an encryption key within Amazon Web Services Payment Cryptography by calling CreateKey. You can import your own encryption key by calling ImportKey. For this operation, the key must have KeyModesOfUse set to Encrypt. In asymmetric encryption, plaintext is encrypted using public component. You can import the public component of an asymmetric key pair created outside Amazon Web Services Payment Cryptography by calling ImportKey.  For symmetric and DUKPT encryption, Amazon Web Services Payment Cryptography supports TDES and AES algorithms. For EMV encryption, Amazon Web Services Payment Cryptography supports TDES algorithms.For asymmetric encryption, Amazon Web Services Payment Cryptography supports RSA.  When you use TDES or TDES DUKPT, the plaintext data length must be a multiple of 8 bytes. For AES or AES DUKPT, the plaintext data length must be a multiple of 16 bytes. For RSA, it sould be equal to the key size unless padding is enabled. To encrypt using DUKPT, you must already have a BDK (Base Derivation Key) key in your account with KeyModesOfUse set to DeriveKey, or you can generate a new DUKPT key by calling CreateKey. To encrypt using EMV, you must already have an IMK (Issuer Master Key) key in your account with KeyModesOfUse set to DeriveKey. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     DecryptData     GetPublicCertificate     ImportKey     ReEncryptData",
      options: [
        {
          name: "--encryption-attributes",
          description:
            "The encryption key type and attributes for plaintext encryption",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key-identifier",
          description:
            "The keyARN of the encryption key that Amazon Web Services Payment Cryptography uses for plaintext encryption",
          args: {
            name: "string",
          },
        },
        {
          name: "--plain-text",
          description:
            "The plaintext to be encrypted.  For encryption using asymmetric keys, plaintext data length is constrained by encryption key strength that you define in KeyAlgorithm and padding type that you define in AsymmetricEncryptionAttributes. For more information, see Encrypt data in the Amazon Web Services Payment Cryptography User Guide",
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
      name: "generate-card-validation-data",
      description:
        "Generates card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC). For more information, see Generate card data in the Amazon Web Services Payment Cryptography User Guide. This operation generates a CVV or CSC value that is printed on a payment credit or debit card during card production. The CVV or CSC, PAN (Primary Account Number) and expiration date of the card are required to check its validity during transaction processing. To begin this operation, a CVK (Card Verification Key) encryption key is required. You can use CreateKey or ImportKey to establish a CVK within Amazon Web Services Payment Cryptography. The KeyModesOfUse should be set to Generate and Verify for a CVK encryption key.  For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     ImportKey     VerifyCardValidationData",
      options: [
        {
          name: "--generation-attributes",
          description:
            "The algorithm for generating CVV or CSC values for the card within Amazon Web Services Payment Cryptography",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key-identifier",
          description:
            "The keyARN of the CVK encryption key that Amazon Web Services Payment Cryptography uses to generate card data",
          args: {
            name: "string",
          },
        },
        {
          name: "--primary-account-number",
          description:
            "The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder",
          args: {
            name: "string",
          },
        },
        {
          name: "--validation-data-length",
          description:
            "The length of the CVV or CSC to be generated. The default value is 3",
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
      name: "generate-mac",
      description:
        "Generates a Message Authentication Code (MAC) cryptogram within Amazon Web Services Payment Cryptography.  You can use this operation to authenticate card-related data by using known data values to generate MAC for data validation between the sending and receiving parties. This operation uses message data, a secret encryption key and MAC algorithm to generate a unique MAC value for transmission. The receiving party of the MAC must use the same message data, secret encryption key and MAC algorithm to reproduce another MAC value for comparision. You can use this operation to generate a DUPKT, CMAC, HMAC or EMV MAC by setting generation attributes and algorithm to the associated values. The MAC generation encryption key must have valid values for KeyUsage such as TR31_M7_HMAC_KEY for HMAC generation, and they key must have KeyModesOfUse set to Generate and Verify. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     VerifyMac",
      options: [
        {
          name: "--generation-attributes",
          description:
            "The attributes and data values to use for MAC generation within Amazon Web Services Payment Cryptography",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key-identifier",
          description: "The keyARN of the MAC generation encryption key",
          args: {
            name: "string",
          },
        },
        {
          name: "--mac-length",
          description: "The length of a MAC under generation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--message-data",
          description:
            "The data for which a MAC is under generation. This value must be hexBinary",
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
      name: "generate-pin-data",
      description:
        "Generates pin-related data such as PIN, PIN Verification Value (PVV), PIN Block, and PIN Offset during new card issuance or reissuance. For more information, see Generate PIN data in the Amazon Web Services Payment Cryptography User Guide. PIN data is never transmitted in clear to or from Amazon Web Services Payment Cryptography. This operation generates PIN, PVV, or PIN Offset and then encrypts it using Pin Encryption Key (PEK) to create an EncryptedPinBlock for transmission from Amazon Web Services Payment Cryptography. This operation uses a separate Pin Verification Key (PVK) for VISA PVV generation.  For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     GenerateCardValidationData     TranslatePinData     VerifyPinData",
      options: [
        {
          name: "--encryption-key-identifier",
          description:
            "The keyARN of the PEK that Amazon Web Services Payment Cryptography uses to encrypt the PIN Block",
          args: {
            name: "string",
          },
        },
        {
          name: "--generation-attributes",
          description:
            "The attributes and values to use for PIN, PVV, or PIN Offset generation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--generation-key-identifier",
          description:
            "The keyARN of the PEK that Amazon Web Services Payment Cryptography uses for pin data generation",
          args: {
            name: "string",
          },
        },
        {
          name: "--pin-block-format",
          description:
            "The PIN encoding format for pin data generation as specified in ISO 9564. Amazon Web Services Payment Cryptography supports ISO_Format_0 and ISO_Format_3. The ISO_Format_0 PIN block format is equivalent to the ANSI X9.8, VISA-1, and ECI-1 PIN block formats. It is similar to a VISA-4 PIN block format. It supports a PIN from 4 to 12 digits in length. The ISO_Format_3 PIN block format is the same as ISO_Format_0 except that the fill digits are random values from 10 to 15",
          args: {
            name: "string",
          },
        },
        {
          name: "--pin-data-length",
          description: "The length of PIN under generation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--primary-account-number",
          description:
            "The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder",
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
      name: "re-encrypt-data",
      description:
        "Re-encrypt ciphertext using DUKPT, Symmetric and Asymmetric Data Encryption Keys.  You can either generate an encryption key within Amazon Web Services Payment Cryptography by calling CreateKey or import your own encryption key by calling ImportKey. The KeyArn for use with this operation must be in a compatible key state with KeyModesOfUse set to Encrypt. In asymmetric encryption, ciphertext is encrypted using public component (imported by calling ImportKey) of the asymmetric key pair created outside of Amazon Web Services Payment Cryptography.  For symmetric and DUKPT encryption, Amazon Web Services Payment Cryptography supports TDES and AES algorithms. For asymmetric encryption, Amazon Web Services Payment Cryptography supports RSA. To encrypt using DUKPT, a DUKPT key must already exist within your account with KeyModesOfUse set to DeriveKey or a new DUKPT can be generated by calling CreateKey. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     DecryptData     EncryptData     GetPublicCertificate     ImportKey",
      options: [
        {
          name: "--cipher-text",
          description:
            "Ciphertext to be encrypted. The minimum allowed length is 16 bytes and maximum allowed length is 4096 bytes",
          args: {
            name: "string",
          },
        },
        {
          name: "--incoming-encryption-attributes",
          description: "The attributes and values for incoming ciphertext",
          args: {
            name: "structure",
          },
        },
        {
          name: "--incoming-key-identifier",
          description:
            "The keyARN of the encryption key of incoming ciphertext data",
          args: {
            name: "string",
          },
        },
        {
          name: "--outgoing-encryption-attributes",
          description:
            "The attributes and values for outgoing ciphertext data after encryption by Amazon Web Services Payment Cryptography",
          args: {
            name: "structure",
          },
        },
        {
          name: "--outgoing-key-identifier",
          description:
            "The keyARN of the encryption key of outgoing ciphertext data after encryption by Amazon Web Services Payment Cryptography",
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
      name: "translate-pin-data",
      description:
        "Translates encrypted PIN block from and to ISO 9564 formats 0,1,3,4. For more information, see Translate PIN data in the Amazon Web Services Payment Cryptography User Guide. PIN block translation involves changing the encrytion of PIN block from one encryption key to another encryption key and changing PIN block format from one to another without PIN block data leaving Amazon Web Services Payment Cryptography. The encryption key transformation can be from PEK (Pin Encryption Key) to BDK (Base Derivation Key) for DUKPT or from BDK for DUKPT to PEK. Amazon Web Services Payment Cryptography supports TDES and AES key derivation type for DUKPT translations.  The allowed combinations of PIN block format translations are guided by PCI. It is important to note that not all encrypted PIN block formats (example, format 1) require PAN (Primary Account Number) as input. And as such, PIN block format that requires PAN (example, formats 0,3,4) cannot be translated to a format (format 1) that does not require a PAN for generation.  For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.  Amazon Web Services Payment Cryptography currently supports ISO PIN block 4 translation for PIN block built using legacy PAN length. That is, PAN is the right most 12 digits excluding the check digits.   Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     GeneratePinData     VerifyPinData",
      options: [
        {
          name: "--encrypted-pin-block",
          description:
            "The encrypted PIN block data that Amazon Web Services Payment Cryptography translates",
          args: {
            name: "string",
          },
        },
        {
          name: "--incoming-dukpt-attributes",
          description:
            "The attributes and values to use for incoming DUKPT encryption key for PIN block translation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--incoming-key-identifier",
          description:
            "The keyARN of the encryption key under which incoming PIN block data is encrypted. This key type can be PEK or BDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--incoming-translation-attributes",
          description:
            "The format of the incoming PIN block data for translation within Amazon Web Services Payment Cryptography",
          args: {
            name: "structure",
          },
        },
        {
          name: "--outgoing-dukpt-attributes",
          description:
            "The attributes and values to use for outgoing DUKPT encryption key after PIN block translation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--outgoing-key-identifier",
          description:
            "The keyARN of the encryption key for encrypting outgoing PIN block data. This key type can be PEK or BDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--outgoing-translation-attributes",
          description:
            "The format of the outgoing PIN block data after translation by Amazon Web Services Payment Cryptography",
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
      name: "verify-auth-request-cryptogram",
      description:
        "Verifies Authorization Request Cryptogram (ARQC) for a EMV chip payment card authorization. For more information, see Verify auth request cryptogram in the Amazon Web Services Payment Cryptography User Guide. ARQC generation is done outside of Amazon Web Services Payment Cryptography and is typically generated on a point of sale terminal for an EMV chip card to obtain payment authorization during transaction time. For ARQC verification, you must first import the ARQC generated outside of Amazon Web Services Payment Cryptography by calling ImportKey. This operation uses the imported ARQC and an major encryption key (DUKPT) created by calling CreateKey to either provide a boolean ARQC verification result or provide an APRC (Authorization Response Cryptogram) response using Method 1 or Method 2. The ARPC_METHOD_1 uses AuthResponseCode to generate ARPC and ARPC_METHOD_2 uses CardStatusUpdate to generate ARPC.  For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     VerifyCardValidationData     VerifyPinData",
      options: [
        {
          name: "--auth-request-cryptogram",
          description:
            "The auth request cryptogram imported into Amazon Web Services Payment Cryptography for ARQC verification using a major encryption key and transaction data",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-response-attributes",
          description:
            "The attributes and values for auth request cryptogram verification. These parameters are required in case using ARPC Method 1 or Method 2 for ARQC verification",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key-identifier",
          description:
            "The keyARN of the major encryption key that Amazon Web Services Payment Cryptography uses for ARQC verification",
          args: {
            name: "string",
          },
        },
        {
          name: "--major-key-derivation-mode",
          description:
            "The method to use when deriving the major encryption key for ARQC verification within Amazon Web Services Payment Cryptography. The same key derivation mode was used for ARQC generation outside of Amazon Web Services Payment Cryptography",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-key-derivation-attributes",
          description:
            "The attributes and values to use for deriving a session key for ARQC verification within Amazon Web Services Payment Cryptography. The same attributes were used for ARQC generation outside of Amazon Web Services Payment Cryptography",
          args: {
            name: "structure",
          },
        },
        {
          name: "--transaction-data",
          description:
            "The transaction data that Amazon Web Services Payment Cryptography uses for ARQC verification. The same transaction is used for ARQC generation outside of Amazon Web Services Payment Cryptography",
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
      name: "verify-card-validation-data",
      description:
        "Verifies card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2) and Card Security Codes (CSC). For more information, see Verify card data in the Amazon Web Services Payment Cryptography User Guide. This operation validates the CVV or CSC codes that is printed on a payment credit or debit card during card payment transaction. The input values are typically provided as part of an inbound transaction to an issuer or supporting platform partner. Amazon Web Services Payment Cryptography uses CVV or CSC, PAN (Primary Account Number) and expiration date of the card to check its validity during transaction processing. In this operation, the CVK (Card Verification Key) encryption key for use with card data verification is same as the one in used for GenerateCardValidationData.  For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     GenerateCardValidationData     VerifyAuthRequestCryptogram     VerifyPinData",
      options: [
        {
          name: "--key-identifier",
          description:
            "The keyARN of the CVK encryption key that Amazon Web Services Payment Cryptography uses to verify card data",
          args: {
            name: "string",
          },
        },
        {
          name: "--primary-account-number",
          description:
            "The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder",
          args: {
            name: "string",
          },
        },
        {
          name: "--validation-data",
          description:
            "The CVV or CSC value for use for card data verification within Amazon Web Services Payment Cryptography",
          args: {
            name: "string",
          },
        },
        {
          name: "--verification-attributes",
          description:
            "The algorithm to use for verification of card data within Amazon Web Services Payment Cryptography",
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
      name: "verify-mac",
      description:
        "Verifies a Message Authentication Code (MAC).  You can use this operation to verify MAC for message data authentication such as . In this operation, you must use the same message data, secret encryption key and MAC algorithm that was used to generate MAC. You can use this operation to verify a DUPKT, CMAC, HMAC or EMV MAC by setting generation attributes and algorithm to the associated values.  For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     GenerateMac",
      options: [
        {
          name: "--key-identifier",
          description:
            "The keyARN of the encryption key that Amazon Web Services Payment Cryptography uses to verify MAC data",
          args: {
            name: "string",
          },
        },
        {
          name: "--mac",
          description: "The MAC being verified",
          args: {
            name: "string",
          },
        },
        {
          name: "--mac-length",
          description: "The length of the MAC",
          args: {
            name: "integer",
          },
        },
        {
          name: "--message-data",
          description:
            "The data on for which MAC is under verification. This value must be hexBinary",
          args: {
            name: "string",
          },
        },
        {
          name: "--verification-attributes",
          description:
            "The attributes and data values to use for MAC verification within Amazon Web Services Payment Cryptography",
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
      name: "verify-pin-data",
      description:
        "Verifies pin-related data such as PIN and PIN Offset using algorithms including VISA PVV and IBM3624. For more information, see Verify PIN data in the Amazon Web Services Payment Cryptography User Guide. This operation verifies PIN data for user payment card. A card holder PIN data is never transmitted in clear to or from Amazon Web Services Payment Cryptography. This operation uses PIN Verification Key (PVK) for PIN or PIN Offset generation and then encrypts it using PIN Encryption Key (PEK) to create an EncryptedPinBlock for transmission from Amazon Web Services Payment Cryptography.  For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     GeneratePinData     TranslatePinData",
      options: [
        {
          name: "--dukpt-attributes",
          description:
            "The attributes and values for the DUKPT encrypted PIN block data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encrypted-pin-block",
          description:
            "The encrypted PIN block data that Amazon Web Services Payment Cryptography verifies",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-key-identifier",
          description:
            "The keyARN of the encryption key under which the PIN block data is encrypted. This key type can be PEK or BDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--pin-block-format",
          description:
            "The PIN encoding format for pin data generation as specified in ISO 9564. Amazon Web Services Payment Cryptography supports ISO_Format_0 and ISO_Format_3. The ISO_Format_0 PIN block format is equivalent to the ANSI X9.8, VISA-1, and ECI-1 PIN block formats. It is similar to a VISA-4 PIN block format. It supports a PIN from 4 to 12 digits in length. The ISO_Format_3 PIN block format is the same as ISO_Format_0 except that the fill digits are random values from 10 to 15",
          args: {
            name: "string",
          },
        },
        {
          name: "--pin-data-length",
          description: "The length of PIN being verified",
          args: {
            name: "integer",
          },
        },
        {
          name: "--primary-account-number",
          description:
            "The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder",
          args: {
            name: "string",
          },
        },
        {
          name: "--verification-attributes",
          description: "The attributes and values for PIN data verification",
          args: {
            name: "structure",
          },
        },
        {
          name: "--verification-key-identifier",
          description: "The keyARN of the PIN verification key",
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
