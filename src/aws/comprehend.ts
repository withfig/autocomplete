const completionSpec: Fig.Spec = {
  name: "comprehend",
  description:
    "Amazon Comprehend is an Amazon Web Services service for gaining insight into the content of documents. Use these actions to determine the topics contained in your documents, the topics they discuss, the predominant sentiment expressed in them, the predominant language used, and more",
  subcommands: [
    {
      name: "batch-detect-dominant-language",
      description:
        "Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages",
      options: [
        {
          name: "--text-list",
          description:
            "A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. Each document should contain at least 20 characters. The maximum size of each document is 5 KB",
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
      name: "batch-detect-entities",
      description:
        "Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see Entities in the Comprehend Developer Guide",
      options: [
        {
          name: "--text-list",
          description:
            "A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB",
          args: {
            name: "list",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language",
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
      name: "batch-detect-key-phrases",
      description: "Detects the key noun phrases found in a batch of documents",
      options: [
        {
          name: "--text-list",
          description:
            "A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB",
          args: {
            name: "list",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language",
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
      name: "batch-detect-sentiment",
      description:
        "Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE, NEUTRAL, MIXED, or NEGATIVE, in each one",
      options: [
        {
          name: "--text-list",
          description:
            "A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB",
          args: {
            name: "list",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language",
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
      name: "batch-detect-syntax",
      description:
        "Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see Syntax in the Comprehend Developer Guide",
      options: [
        {
          name: "--text-list",
          description:
            "A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size for each document is 5 KB",
          args: {
            name: "list",
          },
        },
        {
          name: "--language-code",
          description:
            'The language of the input documents. You can specify any of the following languages supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), or Portuguese ("pt"). All documents must be in the same language',
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
      name: "batch-detect-targeted-sentiment",
      description:
        "Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide",
      options: [
        {
          name: "--text-list",
          description:
            "A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB",
          args: {
            name: "list",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. Currently, English is the only supported language",
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
      name: "classify-document",
      description:
        "Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the following model types:   Custom classifier - a custom model that you have created and trained. For input, you can provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more information, see Custom classification in the Amazon Comprehend Developer Guide.   Prompt safety classifier - Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For input, you provide English plain text input. For prompt safety classification, the response includes only the Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the Amazon Comprehend Developer Guide.   If the system detects errors while processing a page in the input document, the API response includes an Errors field that describes the errors. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see  Errors in semi-structured documents in the Comprehend Developer Guide",
      options: [
        {
          name: "--text",
          description:
            "The document text to be analyzed. If you enter text using this parameter, do not use the Bytes parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Number (ARN) of the endpoint.  For prompt safety classification, Amazon Comprehend provides the endpoint ARN. For more information about prompt safety classifiers, see Prompt safety classification in the Amazon Comprehend Developer Guide  For custom classification, you create an endpoint for your custom model. For more information, see Using Amazon Comprehend endpoints",
          args: {
            name: "string",
          },
        },
        {
          name: "--bytes",
          description:
            "Use the Bytes parameter to input a text, PDF, Word or image file. When you classify a document using a custom model, you can also use the Bytes parameter to input an Amazon Textract DetectDocumentText or AnalyzeDocument output file. To classify a document using the prompt safety classifier, use the Text parameter for input. Provide the input document as a sequence of base64-encoded bytes. If your code uses an Amazon Web Services SDK to classify documents, the SDK may encode the document file bytes for you.  The maximum length of this field depends on the input document type. For details, see  Inputs for real-time custom analysis in the Comprehend Developer Guide.  If you use the Bytes parameter, do not use the Text parameter",
          args: {
            name: "blob",
          },
        },
        {
          name: "--document-reader-config",
          description:
            "Provides configuration parameters to override the default actions for extracting text from PDF documents and image files",
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
      name: "contains-pii-entities",
      description:
        "Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number",
      options: [
        {
          name: "--text",
          description: "A UTF-8 text string. The maximum string size is 100 KB",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description: "The language of the input documents",
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
      name: "create-dataset",
      description:
        "Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see  Flywheel overview in the Amazon Comprehend Developer Guide",
      options: [
        {
          name: "--flywheel-arn",
          description:
            "The Amazon Resource Number (ARN) of the flywheel of the flywheel to receive the data",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-name",
          description: "Name of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-type",
          description:
            "The dataset type. You can specify that the data in a dataset is for training the model or for testing the model",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Description of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-data-config",
          description:
            "Information about the input data configuration. The type of input data varies based on the format of the input and whether the data is for a classifier model or an entity recognition model",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags for the dataset",
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
      name: "create-document-classifier",
      description:
        "Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see Training classifier models in the Comprehend Developer Guide",
      options: [
        {
          name: "--document-classifier-name",
          description: "The name of the document classifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-name",
          description:
            "The version name given to the newly created classifier. Version names can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same classifier name in the Amazon Web Services account/Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Tags to associate with the document classifier. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department',
          args: {
            name: "list",
          },
        },
        {
          name: "--input-data-config",
          description:
            "Specifies the format and location of the input data for the job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description:
            "Specifies the location for the output files from a custom classifier job. This parameter is required for a request that creates a native document model",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. You can specify any of the languages supported by Amazon Comprehend. All documents must be in the same language",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-kms-key-id",
          description:
            'ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"',
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier. For more information, see Amazon VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mode",
          description:
            "Indicates the mode in which the classifier will be trained. The classifier can be trained in multi-class (single-label) mode or multi-label mode. Multi-class mode identifies a single class label for each document and multi-label mode identifies one or more class labels for each document. Multiple labels for an individual document are separated by a delimiter. The default delimiter between labels is a pipe (|)",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-kms-key-id",
          description:
            'ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"',
          args: {
            name: "string",
          },
        },
        {
          name: "--model-policy",
          description:
            'The resource-based policy to attach to your custom document classifier model. You can use this policy to allow another Amazon Web Services account to import your custom model. Provide your policy as a JSON body that you enter as a UTF-8 encoded string without line breaks. To provide valid JSON, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy:  "{\\"attribute\\": \\"value\\", \\"attribute\\": [\\"value\\"]}"  To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values:  \'{"attribute": "value", "attribute": ["value"]}\'',
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
      name: "create-endpoint",
      description:
        "Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see Managing endpoints",
      options: [
        {
          name: "--endpoint-name",
          description:
            "This is the descriptive suffix that becomes part of the EndpointArn used for all subsequent requests to this resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-arn",
          description:
            "The Amazon Resource Number (ARN) of the model to which the endpoint will be attached",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-inference-units",
          description:
            "The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-request-token",
          description:
            "An idempotency token provided by the customer. If this token matches a previous endpoint creation request, Amazon Comprehend will not return a ResourceInUseException",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Tags to associate with the endpoint. A tag is a key-value pair that adds metadata to the endpoint. For example, a tag with "Sales" as the key might be added to an endpoint to indicate its use by the sales department',
          args: {
            name: "list",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId)",
          args: {
            name: "string",
          },
        },
        {
          name: "--flywheel-arn",
          description:
            "The Amazon Resource Number (ARN) of the flywheel to which the endpoint will be attached",
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
      name: "create-entity-recognizer",
      description:
        "Creates an entity recognizer using submitted files. After your CreateEntityRecognizer request is submitted, you can check job status using the DescribeEntityRecognizer API",
      options: [
        {
          name: "--recognizer-name",
          description:
            "The name given to the newly created recognizer. Recognizer names can be a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The name must be unique in the account/Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-name",
          description:
            "The version name given to the newly created recognizer. Version names can be a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same recognizer name in the account/Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Tags to associate with the entity recognizer. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department',
          args: {
            name: "list",
          },
        },
        {
          name: "--input-data-config",
          description:
            "Specifies the format and location of the input data. The S3 bucket containing the input data must be located in the same Region as the entity recognizer being created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            'You can specify any of the following languages: English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), German ("de"), or Portuguese ("pt"). If you plan to use this entity recognizer with PDF, Word, or image input files, you must specify English as the language. All training documents must be in the same language',
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-kms-key-id",
          description:
            'ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"',
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom entity recognizer. For more information, see Amazon VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--model-kms-key-id",
          description:
            'ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"',
          args: {
            name: "string",
          },
        },
        {
          name: "--model-policy",
          description:
            'The JSON resource-based policy to attach to your custom entity recognizer model. You can use this policy to allow another Amazon Web Services account to import your custom model. Provide your JSON as a UTF-8 encoded string without line breaks. To provide valid JSON for your policy, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy:  "{\\"attribute\\": \\"value\\", \\"attribute\\": [\\"value\\"]}"  To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values:  \'{"attribute": "value", "attribute": ["value"]}\'',
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
      name: "create-flywheel",
      description:
        "A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model. When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model. To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake. To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel. For more information about flywheels, see  Flywheel overview in the Amazon Comprehend Developer Guide",
      options: [
        {
          name: "--flywheel-name",
          description: "Name for the flywheel",
          args: {
            name: "string",
          },
        },
        {
          name: "--active-model-arn",
          description:
            "To associate an existing model with the flywheel, specify the Amazon Resource Number (ARN) of the model version. Do not set TaskConfig or ModelType if you specify an ActiveModelArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend the permissions required to access the flywheel data in the data lake",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-config",
          description:
            "Configuration about the model associated with the flywheel. You need to set TaskConfig if you are creating a flywheel for a new model",
          args: {
            name: "structure",
          },
        },
        {
          name: "--model-type",
          description:
            "The model type. You need to set ModelType if you are creating a flywheel for a new model",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-lake-s3-uri",
          description:
            "Enter the S3 location for the data lake. You can specify a new S3 bucket or a new folder of an existing S3 bucket. The flywheel creates the data lake at this location",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-security-config",
          description: "Data security configurations",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to associate with this flywheel",
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
      name: "delete-document-classifier",
      description:
        "Deletes a previously created document classifier Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use",
      options: [
        {
          name: "--document-classifier-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the document classifier",
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
      name: "delete-endpoint",
      description:
        "Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see Managing endpoints",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Number (ARN) of the endpoint being deleted",
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
      name: "delete-entity-recognizer",
      description:
        "Deletes an entity recognizer. Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use",
      options: [
        {
          name: "--entity-recognizer-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the entity recognizer",
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
      name: "delete-flywheel",
      description:
        "Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel. For more information about flywheels, see  Flywheel overview in the Amazon Comprehend Developer Guide",
      options: [
        {
          name: "--flywheel-arn",
          description:
            "The Amazon Resource Number (ARN) of the flywheel to delete",
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
      name: "delete-resource-policy",
      description:
        "Deletes a resource-based policy that is attached to a custom model",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the custom model version that has the policy to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-revision-id",
          description: "The revision ID of the policy to delete",
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
      name: "describe-dataset",
      description:
        "Returns information about the dataset that you specify. For more information about datasets, see  Flywheel overview in the Amazon Comprehend Developer Guide",
      options: [
        {
          name: "--dataset-arn",
          description: "The ARN of the dataset",
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
      name: "describe-document-classification-job",
      description:
        "Gets the properties associated with a document classification job. Use this operation to get the status of a classification job",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier that Amazon Comprehend generated for the job. The StartDocumentClassificationJob operation returns this identifier in its response",
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
      name: "describe-document-classifier",
      description: "Gets the properties associated with a document classifier",
      options: [
        {
          name: "--document-classifier-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the document classifier. The CreateDocumentClassifier operation returns this identifier in its response",
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
      name: "describe-dominant-language-detection-job",
      description:
        "Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier that Amazon Comprehend generated for the job. The StartDominantLanguageDetectionJob operation returns this identifier in its response",
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
      name: "describe-endpoint",
      description:
        "Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see Managing endpoints",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Number (ARN) of the endpoint being described",
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
      name: "describe-entities-detection-job",
      description:
        "Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier that Amazon Comprehend generated for the job. The StartEntitiesDetectionJob operation returns this identifier in its response",
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
      name: "describe-entity-recognizer",
      description:
        "Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on",
      options: [
        {
          name: "--entity-recognizer-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the entity recognizer",
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
      name: "describe-events-detection-job",
      description: "Gets the status and details of an events detection job",
      options: [
        {
          name: "--job-id",
          description: "The identifier of the events detection job",
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
      name: "describe-flywheel",
      description:
        "Provides configuration information about the flywheel. For more information about flywheels, see  Flywheel overview in the Amazon Comprehend Developer Guide",
      options: [
        {
          name: "--flywheel-arn",
          description: "The Amazon Resource Number (ARN) of the flywheel",
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
      name: "describe-flywheel-iteration",
      description:
        "Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see  Flywheel overview in the Amazon Comprehend Developer Guide",
      options: [
        {
          name: "--flywheel-arn",
          args: {
            name: "string",
          },
        },
        {
          name: "--flywheel-iteration-id",
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
      name: "describe-key-phrases-detection-job",
      description:
        "Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier that Amazon Comprehend generated for the job. The StartKeyPhrasesDetectionJob operation returns this identifier in its response",
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
      name: "describe-pii-entities-detection-job",
      description:
        "Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response",
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
      name: "describe-resource-policy",
      description:
        "Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the custom model version that has the resource policy",
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
      name: "describe-sentiment-detection-job",
      description:
        "Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response",
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
      name: "describe-targeted-sentiment-detection-job",
      description:
        "Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier that Amazon Comprehend generated for the job. The StartTargetedSentimentDetectionJob operation returns this identifier in its response",
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
      name: "describe-topics-detection-job",
      description:
        "Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier assigned by the user to the detection job",
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
      name: "detect-dominant-language",
      description:
        "Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages",
      options: [
        {
          name: "--text",
          description:
            "A UTF-8 text string. The string must contain at least 20 characters. The maximum string size is 100 KB",
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
      name: "detect-entities",
      description:
        "Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model.   When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image).  If the system detects errors while processing a page in the input document, the API response includes an entry in Errors for each error.  If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see  Errors in semi-structured documents in the Comprehend Developer Guide",
      options: [
        {
          name: "--text",
          description:
            "A UTF-8 text string. The maximum string size is 100 KB. If you enter text using this parameter, do not use the Bytes parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. If your request includes the endpoint for a custom entity recognition model, Amazon Comprehend uses the language of your custom model, and it ignores any language code that you specify here. All input documents must be in the same language",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name of an endpoint that is associated with a custom entity recognition model. Provide an endpoint if you want to detect entities by using your own custom model instead of the default model that is used by Amazon Comprehend. If you specify an endpoint, Amazon Comprehend uses the language of your custom model, and it ignores any language code that you provide in your request. For information about endpoints, see Managing endpoints",
          args: {
            name: "string",
          },
        },
        {
          name: "--bytes",
          description:
            "This field applies only when you use a custom entity recognition model that was trained with PDF annotations. For other cases, enter your text input in the Text field.  Use the Bytes parameter to input a text, PDF, Word or image file. Using a plain-text file in the Bytes parameter is equivelent to using the Text parameter (the Entities field in the response is identical). You can also use the Bytes parameter to input an Amazon Textract DetectDocumentText or AnalyzeDocument output file. Provide the input document as a sequence of base64-encoded bytes. If your code uses an Amazon Web Services SDK to detect entities, the SDK may encode the document file bytes for you.  The maximum length of this field depends on the input document type. For details, see  Inputs for real-time custom analysis in the Comprehend Developer Guide.  If you use the Bytes parameter, do not use the Text parameter",
          args: {
            name: "blob",
          },
        },
        {
          name: "--document-reader-config",
          description:
            "Provides configuration parameters to override the default actions for extracting text from PDF documents and image files",
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
      name: "detect-key-phrases",
      description: "Detects the key noun phrases found in the text",
      options: [
        {
          name: "--text",
          description:
            "A UTF-8 text string. The string must contain less than 100 KB of UTF-8 encoded characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language",
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
      name: "detect-pii-entities",
      description:
        "Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them",
      options: [
        {
          name: "--text",
          description: "A UTF-8 text string. The maximum string size is 100 KB",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input text. Enter the language code for English (en) or Spanish (es)",
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
      name: "detect-sentiment",
      description:
        "Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE)",
      options: [
        {
          name: "--text",
          description: "A UTF-8 text string. The maximum string size is 5 KB",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language",
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
      name: "detect-syntax",
      description:
        "Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in the Comprehend Developer Guide",
      options: [
        {
          name: "--text",
          description: "A UTF-8 string. The maximum string size is 5 KB",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            'The language code of the input documents. You can specify any of the following languages supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), or Portuguese ("pt")',
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
      name: "detect-targeted-sentiment",
      description:
        "Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide",
      options: [
        {
          name: "--text",
          description: "A UTF-8 text string. The maximum string length is 5 KB",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. Currently, English is the only supported language",
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
      name: "detect-toxic-content",
      description:
        "Performs toxicity analysis on the list of text strings that you provide as input. The API response contains a results list that matches the size of the input list. For more information about toxicity detection, see Toxicity detection in the Amazon Comprehend Developer Guide",
      options: [
        {
          name: "--text-segments",
          description:
            "A list of up to 10 text strings. Each string has a maximum size of 1 KB, and the maximum size of the list is 10 KB",
          args: {
            name: "list",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input text. Currently, English is the only supported language",
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
      name: "import-model",
      description:
        "Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one. If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it. The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region",
      options: [
        {
          name: "--source-model-arn",
          description:
            "The Amazon Resource Name (ARN) of the custom model to import",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-name",
          description:
            "The name to assign to the custom model that is created in Amazon Comprehend by this import",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-name",
          description:
            "The version name given to the custom model that is created by this import. Version names can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same classifier name in the account/Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-kms-key-id",
          description:
            'ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"',
          args: {
            name: "string",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to use Amazon Key Management Service (KMS) to encrypt or decrypt the custom model",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Tags to associate with the custom model that is created by this import. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department',
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
      name: "list-datasets",
      description:
        "List the datasets that you have configured in this Region. For more information about datasets, see  Flywheel overview in the Amazon Comprehend Developer Guide",
      options: [
        {
          name: "--flywheel-arn",
          description: "The Amazon Resource Number (ARN) of the flywheel",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description: "Filters the datasets to be returned in the response",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to return in a response. The default is 100",
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
      name: "list-document-classification-jobs",
      description:
        "Gets a list of the documentation classification jobs that you have submitted",
      options: [
        {
          name: "--filter",
          description:
            "Filters the jobs that are returned. You can filter jobs on their names, status, or the date and time that they were submitted. You can only set one filter at a time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page. The default is 100",
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
      name: "list-document-classifier-summaries",
      description:
        "Gets a list of summaries of the document classifiers that you have created",
      options: [
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return on each page. The default is 100",
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
      name: "list-document-classifiers",
      description:
        "Gets a list of the document classifiers that you have created",
      options: [
        {
          name: "--filter",
          description:
            "Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page. The default is 100",
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
      name: "list-dominant-language-detection-jobs",
      description:
        "Gets a list of the dominant language detection jobs that you have submitted",
      options: [
        {
          name: "--filter",
          description:
            "Filters that jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page. The default is 100",
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
      name: "list-endpoints",
      description:
        "Gets a list of all existing endpoints that you've created. For information about endpoints, see Managing endpoints",
      options: [
        {
          name: "--filter",
          description:
            "Filters the endpoints that are returned. You can filter endpoints on their name, model, status, or the date and time that they were created. You can only set one filter at a time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page. The default is 100",
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
      name: "list-entities-detection-jobs",
      description:
        "Gets a list of the entity detection jobs that you have submitted",
      options: [
        {
          name: "--filter",
          description:
            "Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page. The default is 100",
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
      name: "list-entity-recognizer-summaries",
      description:
        "Gets a list of summaries for the entity recognizers that you have created",
      options: [
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return on each page. The default is 100",
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
      name: "list-entity-recognizers",
      description:
        "Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list. The results of this list are not in any particular order. Please get the list and sort locally if needed",
      options: [
        {
          name: "--filter",
          description:
            "Filters the list of entities returned. You can filter on Status, SubmitTimeBefore, or SubmitTimeAfter. You can only set one filter at a time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return on each page. The default is 100",
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
      name: "list-events-detection-jobs",
      description:
        "Gets a list of the events detection jobs that you have submitted",
      options: [
        {
          name: "--filter",
          description:
            "Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return in each page",
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
      name: "list-flywheel-iteration-history",
      description:
        "Information about the history of a flywheel iteration. For more information about flywheels, see  Flywheel overview in the Amazon Comprehend Developer Guide",
      options: [
        {
          name: "--flywheel-arn",
          description: "The ARN of the flywheel",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "Filter the flywheel iteration history based on creation time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of iteration history results to return",
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
      name: "list-flywheels",
      description: "Gets a list of the flywheels that you have created",
      options: [
        {
          name: "--filter",
          description:
            "Filters the flywheels that are returned. You can filter flywheels on their status, or the date and time that they were submitted. You can only set one filter at a time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to return in a response. The default is 100",
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
      name: "list-key-phrases-detection-jobs",
      description:
        "Get a list of key phrase detection jobs that you have submitted",
      options: [
        {
          name: "--filter",
          description:
            "Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page. The default is 100",
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
      name: "list-pii-entities-detection-jobs",
      description:
        "Gets a list of the PII entity detection jobs that you have submitted",
      options: [
        {
          name: "--filter",
          description:
            "Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return in each page",
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
      name: "list-sentiment-detection-jobs",
      description:
        "Gets a list of sentiment detection jobs that you have submitted",
      options: [
        {
          name: "--filter",
          description:
            "Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page. The default is 100",
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
        "Lists all tags associated with a given Amazon Comprehend resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying",
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
      name: "list-targeted-sentiment-detection-jobs",
      description:
        "Gets a list of targeted sentiment detection jobs that you have submitted",
      options: [
        {
          name: "--filter",
          description:
            "Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page. The default is 100",
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
      name: "list-topics-detection-jobs",
      description:
        "Gets a list of the topic detection jobs that you have submitted",
      options: [
        {
          name: "--filter",
          description:
            "Filters the jobs that are returned. Jobs can be filtered on their name, status, or the date and time that they were submitted. You can set only one filter at a time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page. The default is 100",
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
      name: "put-resource-policy",
      description:
        "Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the custom model to attach the policy to",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-policy",
          description:
            'The JSON resource-based policy to attach to your custom model. Provide your JSON as a UTF-8 encoded string without line breaks. To provide valid JSON for your policy, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy:  "{\\"attribute\\": \\"value\\", \\"attribute\\": [\\"value\\"]}"  To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values:  \'{"attribute": "value", "attribute": ["value"]}\'',
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-revision-id",
          description:
            "The revision ID that Amazon Comprehend assigned to the policy that you are updating. If you are creating a new policy that has no prior version, don't use this parameter. Amazon Comprehend creates the revision ID for you",
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
      name: "start-document-classification-job",
      description:
        "Starts an asynchronous document classification job using a custom classification model. Use the DescribeDocumentClassificationJob operation to track the progress of the job",
      options: [
        {
          name: "--job-name",
          description: "The identifier of the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-classifier-arn",
          description:
            "The Amazon Resource Name (ARN) of the document classifier to use to process the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-data-config",
          description:
            "Specifies the format and location of the input data for the job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description: "Specifies where to send the output files",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-kms-key-id",
          description:
            'ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"',
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your document classification job. For more information, see Amazon VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            'Tags to associate with the document classification job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department',
          args: {
            name: "list",
          },
        },
        {
          name: "--flywheel-arn",
          description:
            "The Amazon Resource Number (ARN) of the flywheel associated with the model to use",
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
      name: "start-dominant-language-detection-job",
      description:
        "Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job",
      options: [
        {
          name: "--input-data-config",
          description:
            "Specifies the format and location of the input data for the job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description: "Specifies where to send the output files",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see Role-based permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name",
          description: "An identifier for the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-kms-key-id",
          description:
            'ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"',
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your dominant language detection job. For more information, see Amazon VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            'Tags to associate with the dominant language detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department',
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
      name: "start-entities-detection-job",
      description:
        "Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job. This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional EntityRecognizerArn must be used in order to provide access to the recognizer being used to detect the custom entity",
      options: [
        {
          name: "--input-data-config",
          description:
            "Specifies the format and location of the input data for the job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description: "Specifies where to send the output files",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see Role-based permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name",
          description: "The identifier of the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-recognizer-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the specific entity recognizer to be used by the StartEntitiesDetectionJob. This ARN is optional and is only used for a custom entity recognition job",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. All documents must be in the same language. You can specify any of the languages supported by Amazon Comprehend. If custom entities recognition is used, this parameter is ignored and the language used for training the model is used instead",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-kms-key-id",
          description:
            'ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"',
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your entity detection job. For more information, see Amazon VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            'Tags to associate with the entities detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department',
          args: {
            name: "list",
          },
        },
        {
          name: "--flywheel-arn",
          description:
            "The Amazon Resource Number (ARN) of the flywheel associated with the model to use",
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
      name: "start-events-detection-job",
      description:
        "Starts an asynchronous event detection job for a collection of documents",
      options: [
        {
          name: "--input-data-config",
          description:
            "Specifies the format and location of the input data for the job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description: "Specifies where to send the output files",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name",
          description: "The identifier of the events detection job",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description: "The language code of the input documents",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "An unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-event-types",
          description: "The types of events to detect in the input documents",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            'Tags to associate with the events detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department',
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
      name: "start-flywheel-iteration",
      description:
        "Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see  Flywheel overview in the Amazon Comprehend Developer Guide",
      options: [
        {
          name: "--flywheel-arn",
          description: "The ARN of the flywheel",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one",
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
      name: "start-key-phrases-detection-job",
      description:
        "Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job",
      options: [
        {
          name: "--input-data-config",
          description:
            "Specifies the format and location of the input data for the job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description: "Specifies where to send the output files",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see Role-based permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name",
          description: "The identifier of the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-kms-key-id",
          description:
            'ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"',
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your key phrases detection job. For more information, see Amazon VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            'Tags to associate with the key phrases detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department',
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
      name: "start-pii-entities-detection-job",
      description:
        "Starts an asynchronous PII entity detection job for a collection of documents",
      options: [
        {
          name: "--input-data-config",
          description: "The input properties for a PII entities detection job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description:
            "Provides con\ufb01guration parameters for the output of PII entity detection jobs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mode",
          description:
            "Specifies whether the output provides the locations (offsets) of PII entities or a file in which PII entities are redacted",
          args: {
            name: "string",
          },
        },
        {
          name: "--redaction-config",
          description:
            "Provides configuration parameters for PII entity redaction. This parameter is required if you set the Mode parameter to ONLY_REDACTION. In that case, you must provide a RedactionConfig definition that includes the PiiEntityTypes parameter",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name",
          description: "The identifier of the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. Enter the language code for English (en) or Spanish (es)",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Tags to associate with the PII entities detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department',
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
      name: "start-sentiment-detection-job",
      description:
        "Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job",
      options: [
        {
          name: "--input-data-config",
          description:
            "Specifies the format and location of the input data for the job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description: "Specifies where to send the output files",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see Role-based permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name",
          description: "The identifier of the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-kms-key-id",
          description:
            'ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"',
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your sentiment detection job. For more information, see Amazon VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            'Tags to associate with the sentiment detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department',
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
      name: "start-targeted-sentiment-detection-job",
      description:
        "Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the DescribeTargetedSentimentDetectionJob operation to track the status of a job",
      options: [
        {
          name: "--input-data-config",
          description:
            "The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description: "Specifies where to send the output files",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see Role-based permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name",
          description: "The identifier of the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. Currently, English is the only supported language",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-kms-key-id",
          description:
            'ID for the KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"',
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see Amazon VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            'Tags to associate with the targeted sentiment detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department',
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
      name: "start-topics-detection-job",
      description:
        "Starts an asynchronous topic detection job. Use the DescribeTopicDetectionJob operation to track the status of a job",
      options: [
        {
          name: "--input-data-config",
          description:
            "Specifies the format and location of the input data for the job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description:
            "Specifies where to send the output files. The output is a compressed archive with two files, topic-terms.csv that lists the terms associated with each topic, and doc-topics.csv that lists the documents associated with each topic",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see Role-based permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name",
          description: "The identifier of the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--number-of-topics",
          description: "The number of topics to detect",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-kms-key-id",
          description:
            'ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:   KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"    Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"',
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your topic detection job. For more information, see Amazon VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            'Tags to associate with the topics detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department',
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
      name: "stop-dominant-language-detection-job",
      description:
        "Stops a dominant language detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier of the dominant language detection job to stop",
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
      name: "stop-entities-detection-job",
      description:
        "Stops an entities detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location",
      options: [
        {
          name: "--job-id",
          description: "The identifier of the entities detection job to stop",
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
      name: "stop-events-detection-job",
      description: "Stops an events detection job in progress",
      options: [
        {
          name: "--job-id",
          description: "The identifier of the events detection job to stop",
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
      name: "stop-key-phrases-detection-job",
      description:
        "Stops a key phrases detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier of the key phrases detection job to stop",
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
      name: "stop-pii-entities-detection-job",
      description: "Stops a PII entities detection job in progress",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier of the PII entities detection job to stop",
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
      name: "stop-sentiment-detection-job",
      description:
        "Stops a sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location",
      options: [
        {
          name: "--job-id",
          description: "The identifier of the sentiment detection job to stop",
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
      name: "stop-targeted-sentiment-detection-job",
      description:
        "Stops a targeted sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception.  When a job is stopped, any documents already processed are written to the output location",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier of the targeted sentiment detection job to stop",
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
      name: "stop-training-document-classifier",
      description:
        "Stops a document classifier training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and put into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body",
      options: [
        {
          name: "--document-classifier-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the document classifier currently being trained",
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
      name: "stop-training-entity-recognizer",
      description:
        "Stops an entity recognizer training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and putted into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body",
      options: [
        {
          name: "--entity-recognizer-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the entity recognizer currently being trained",
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
        'Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department',
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the given Amazon Comprehend resource to which you want to associate the tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags being associated with a specific Amazon Comprehend resource. There can be a maximum of 50 tags (both existing and pending) associated with a specific resource",
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
        "Removes a specific tag associated with an Amazon Comprehend resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the given Amazon Comprehend resource from which you want to remove the tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            'The initial part of a key-value pair that forms a tag being removed from a given resource. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. Keys must be unique and cannot be duplicated for a particular resource',
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
      name: "update-endpoint",
      description:
        "Updates information about the specified endpoint. For information about endpoints, see Managing endpoints",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Number (ARN) of the endpoint being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-model-arn",
          description:
            "The ARN of the new model to use when updating an existing endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-inference-units",
          description:
            "The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second",
          args: {
            name: "integer",
          },
        },
        {
          name: "--desired-data-access-role-arn",
          description:
            "Data access role ARN to use in case the new model is encrypted with a customer CMK",
          args: {
            name: "string",
          },
        },
        {
          name: "--flywheel-arn",
          description: "The Amazon Resource Number (ARN) of the flywheel",
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
      name: "update-flywheel",
      description:
        "Update the configuration information for an existing flywheel",
      options: [
        {
          name: "--flywheel-arn",
          description:
            "The Amazon Resource Number (ARN) of the flywheel to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--active-model-arn",
          description:
            "The Amazon Resource Number (ARN) of the active model version",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to access the flywheel data",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-security-config",
          description: "Flywheel data security configuration",
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
  ],
};
export default completionSpec;
