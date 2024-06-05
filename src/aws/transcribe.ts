const completionSpec: Fig.Spec = {
  name: "transcribe",
  description:
    "Amazon Transcribe offers three main types of batch transcription: Standard, Medical, and Call Analytics.    Standard transcriptions are the most common option. Refer to for details.    Medical transcriptions are tailored to medical professionals and incorporate medical terms. A common use case for this service is transcribing doctor-patient dialogue into after-visit notes. Refer to for details.    Call Analytics transcriptions are designed for use with call center audio on two different channels; if you're looking for insight into customer service calls, use this option. Refer to for details",
  subcommands: [
    {
      name: "create-call-analytics-category",
      description:
        "Creates a new Call Analytics category. All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively. When creating a new category, you can use the InputType parameter to label the category as a POST_CALL or a REAL_TIME category. POST_CALL categories can only be applied to post-call transcriptions and REAL_TIME categories can only be applied to real-time transcriptions. If you do not include InputType, your category is created as a POST_CALL category by default. Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and . To update an existing category, see . To learn more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time transcriptions",
      options: [
        {
          name: "--category-name",
          description:
            "A unique name, chosen by you, for your Call Analytics category. It's helpful to use a detailed naming system that will make sense to you in the future. For example, it's better to use sentiment-positive-last30seconds for a category over a generic name like test-category. Category names are case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "Rules define a Call Analytics category. When creating a new category, you must create between 1 and 20 rules for that category. For each rule, you specify a filter you want applied to the attributes of a call. For example, you can choose a sentiment filter that detects if a customer's sentiment was positive during the last 30 seconds of the call",
          args: {
            name: "list",
          },
        },
        {
          name: "--input-type",
          description:
            "Choose whether you want to create a real-time or a post-call category for your Call Analytics transcription. Specifying POST_CALL assigns your category to post-call transcriptions; categories with this input type cannot be applied to streaming (real-time) transcriptions. Specifying REAL_TIME assigns your category to streaming transcriptions; categories with this input type cannot be applied to post-call transcriptions. If you do not include InputType, your category is created as a post-call category by default",
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
      name: "create-language-model",
      description:
        "Creates a new custom language model. When creating a new custom language model, you must specify:   If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model   The location of your training and tuning files (this must be an Amazon S3 URI)   The language of your model   A unique name for your model",
      options: [
        {
          name: "--language-code",
          description:
            "The language code that represents the language of your model. Each custom language model must contain terms in only one language, and the language you select for your custom language model must match the language of your training and tuning data. For a list of supported languages and their associated language codes, refer to the Supported languages table. Note that US English (en-US) is the only language supported with Amazon Transcribe Medical. A custom language model can only be used to transcribe files in the same language as the model. For example, if you create a custom language model using US English (en-US), you can only apply this model to files that contain English audio",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-model-name",
          description:
            "The Amazon Transcribe standard language model, or base model, used to create your custom language model. Amazon Transcribe offers two options for base models: Wideband and Narrowband. If the audio you want to transcribe has a sample rate of 16,000 Hz or greater, choose WideBand. To transcribe audio with a sample rate less than 16,000 Hz, choose NarrowBand",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-name",
          description:
            "A unique name, chosen by you, for your custom language model. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom language model with the same name as an existing custom language model, you get a ConflictException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-data-config",
          description:
            "Contains the Amazon S3 location of the training data you want to use to create a new custom language model, and permissions to access this location. When using InputDataConfig, you must include these sub-parameters: S3Uri, which is the Amazon S3 location of your training data, and DataAccessRoleArn, which is the Amazon Resource Name (ARN) of the role that has permission to access your specified Amazon S3 location. You can optionally include TuningDataS3Uri, which is the Amazon S3 location of your tuning data. If you specify different Amazon S3 locations for training and tuning data, the ARN you use must have permissions to access both locations",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Adds one or more custom tags, each in the form of a key:value pair, to a new custom language model at the time you create this new model. To learn more about using tags with Amazon Transcribe, refer to Tagging resources",
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
      name: "create-medical-vocabulary",
      description:
        "Creates a new custom medical vocabulary. Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the Phrases flag; CreateMedicalVocabulary does not support the Phrases flag and only accepts vocabularies in table format. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Custom vocabularies",
      options: [
        {
          name: "--vocabulary-name",
          description:
            "A unique name, chosen by you, for your new custom medical vocabulary. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom medical vocabulary with the same name as an existing custom medical vocabulary, you get a ConflictException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language code that represents the language of the entries in your custom vocabulary. US English (en-US) is the only language supported with Amazon Transcribe Medical",
          args: {
            name: "string",
          },
        },
        {
          name: "--vocabulary-file-uri",
          description:
            "The Amazon S3 location (URI) of the text file that contains your custom medical vocabulary. The URI must be in the same Amazon Web Services Region as the resource you're calling. Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Adds one or more custom tags, each in the form of a key:value pair, to a new custom medical vocabulary at the time you create this new custom vocabulary. To learn more about using tags with Amazon Transcribe, refer to Tagging resources",
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
      name: "create-vocabulary",
      description:
        "Creates a new custom vocabulary. When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the Phrases flag. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Custom vocabularies",
      options: [
        {
          name: "--vocabulary-name",
          description:
            "A unique name, chosen by you, for your new custom vocabulary. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom vocabulary with the same name as an existing custom vocabulary, you get a ConflictException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language code that represents the language of the entries in your custom vocabulary. Each custom vocabulary must contain terms in only one language. A custom vocabulary can only be used to transcribe files in the same language as the custom vocabulary. For example, if you create a custom vocabulary using US English (en-US), you can only apply this custom vocabulary to files that contain English audio. For a list of supported languages and their associated language codes, refer to the Supported languages table",
          args: {
            name: "string",
          },
        },
        {
          name: "--phrases",
          description:
            "Use this parameter if you want to create your custom vocabulary by including all desired terms, as comma-separated values, within your request. The other option for creating your custom vocabulary is to save your entries in a text file and upload them to an Amazon S3 bucket, then specify the location of your file using the VocabularyFileUri parameter. Note that if you include Phrases in your request, you cannot use VocabularyFileUri; you must choose one or the other. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language",
          args: {
            name: "list",
          },
        },
        {
          name: "--vocabulary-file-uri",
          description:
            "The Amazon S3 location of the text file that contains your custom vocabulary. The URI must be located in the same Amazon Web Services Region as the resource you're calling. Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt  Note that if you include VocabularyFileUri in your request, you cannot use the Phrases flag; you must choose one or the other",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Adds one or more custom tags, each in the form of a key:value pair, to a new custom vocabulary at the time you create this new custom vocabulary. To learn more about using tags with Amazon Transcribe, refer to Tagging resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files (in this case, your custom vocabulary). If the role that you specify doesn\u2019t have the appropriate permissions to access the specified Amazon S3 location, your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs",
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
      name: "create-vocabulary-filter",
      description:
        "Creates a new custom vocabulary filter. You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Vocabulary filtering",
      options: [
        {
          name: "--vocabulary-filter-name",
          description:
            "A unique name, chosen by you, for your new custom vocabulary filter. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom vocabulary filter with the same name as an existing custom vocabulary filter, you get a ConflictException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language code that represents the language of the entries in your vocabulary filter. Each custom vocabulary filter must contain terms in only one language. A custom vocabulary filter can only be used to transcribe files in the same language as the filter. For example, if you create a custom vocabulary filter using US English (en-US), you can only apply this filter to files that contain English audio. For a list of supported languages and their associated language codes, refer to the Supported languages table",
          args: {
            name: "string",
          },
        },
        {
          name: "--words",
          description:
            "Use this parameter if you want to create your custom vocabulary filter by including all desired terms, as comma-separated values, within your request. The other option for creating your vocabulary filter is to save your entries in a text file and upload them to an Amazon S3 bucket, then specify the location of your file using the VocabularyFilterFileUri parameter. Note that if you include Words in your request, you cannot use VocabularyFilterFileUri; you must choose one or the other. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language",
          args: {
            name: "list",
          },
        },
        {
          name: "--vocabulary-filter-file-uri",
          description:
            "The Amazon S3 location of the text file that contains your custom vocabulary filter terms. The URI must be located in the same Amazon Web Services Region as the resource you're calling. Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-filter-file.txt  Note that if you include VocabularyFilterFileUri in your request, you cannot use Words; you must choose one or the other",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Adds one or more custom tags, each in the form of a key:value pair, to a new custom vocabulary filter at the time you create this new vocabulary filter. To learn more about using tags with Amazon Transcribe, refer to Tagging resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files (in this case, your custom vocabulary filter). If the role that you specify doesn\u2019t have the appropriate permissions to access the specified Amazon S3 location, your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs",
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
      name: "delete-call-analytics-category",
      description:
        "Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using CategoryName. Category names are case sensitive",
      options: [
        {
          name: "--category-name",
          description:
            "The name of the Call Analytics category you want to delete. Category names are case sensitive",
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
      name: "delete-call-analytics-job",
      description:
        "Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using CallAnalyticsJobName. Job names are case sensitive",
      options: [
        {
          name: "--call-analytics-job-name",
          description:
            "The name of the Call Analytics job you want to delete. Job names are case sensitive",
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
      name: "delete-language-model",
      description:
        "Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using ModelName. custom language model names are case sensitive",
      options: [
        {
          name: "--model-name",
          description:
            "The name of the custom language model you want to delete. Model names are case sensitive",
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
      name: "delete-medical-scribe-job",
      description:
        "Deletes a Medical Scribe job. To use this operation, specify the name of the job you want to delete using MedicalScribeJobName. Job names are case sensitive",
      options: [
        {
          name: "--medical-scribe-job-name",
          description:
            "The name of the Medical Scribe job you want to delete. Job names are case sensitive",
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
      name: "delete-medical-transcription-job",
      description:
        "Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using MedicalTranscriptionJobName. Job names are case sensitive",
      options: [
        {
          name: "--medical-transcription-job-name",
          description:
            "The name of the medical transcription job you want to delete. Job names are case sensitive",
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
      name: "delete-medical-vocabulary",
      description:
        "Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using VocabularyName. Custom vocabulary names are case sensitive",
      options: [
        {
          name: "--vocabulary-name",
          description:
            "The name of the custom medical vocabulary you want to delete. Custom medical vocabulary names are case sensitive",
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
      name: "delete-transcription-job",
      description:
        "Deletes a transcription job. To use this operation, specify the name of the job you want to delete using TranscriptionJobName. Job names are case sensitive",
      options: [
        {
          name: "--transcription-job-name",
          description:
            "The name of the transcription job you want to delete. Job names are case sensitive",
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
      name: "delete-vocabulary",
      description:
        "Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using VocabularyName. Custom vocabulary names are case sensitive",
      options: [
        {
          name: "--vocabulary-name",
          description:
            "The name of the custom vocabulary you want to delete. Custom vocabulary names are case sensitive",
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
      name: "delete-vocabulary-filter",
      description:
        "Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using VocabularyFilterName. Custom vocabulary filter names are case sensitive",
      options: [
        {
          name: "--vocabulary-filter-name",
          description:
            "The name of the custom vocabulary filter you want to delete. Custom vocabulary filter names are case sensitive",
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
      name: "describe-language-model",
      description:
        "Provides information about the specified custom language model. This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model. If you tried to create a new custom language model and the request wasn't successful, you can use DescribeLanguageModel to help identify the reason for this failure",
      options: [
        {
          name: "--model-name",
          description:
            "The name of the custom language model you want information about. Model names are case sensitive",
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
      name: "get-call-analytics-category",
      description:
        "Provides information about the specified Call Analytics category. To get a list of your Call Analytics categories, use the operation",
      options: [
        {
          name: "--category-name",
          description:
            "The name of the Call Analytics category you want information about. Category names are case sensitive",
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
      name: "get-call-analytics-job",
      description:
        "Provides information about the specified Call Analytics job. To view the job's status, refer to CallAnalyticsJobStatus. If the status is COMPLETED, the job is finished. You can find your completed transcript at the URI specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in RedactedTranscriptFileUri. If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in RedactedMediaFileUri. To get a list of your Call Analytics jobs, use the operation",
      options: [
        {
          name: "--call-analytics-job-name",
          description:
            "The name of the Call Analytics job you want information about. Job names are case sensitive",
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
      name: "get-medical-scribe-job",
      description:
        "Provides information about the specified Medical Scribe job. To view the status of the specified medical transcription job, check the MedicalScribeJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in MedicalScribeOutput. If the status is FAILED, FailureReason provides details on why your Medical Scribe job failed. To get a list of your Medical Scribe jobs, use the operation",
      options: [
        {
          name: "--medical-scribe-job-name",
          description:
            "The name of the Medical Scribe job you want information about. Job names are case sensitive",
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
      name: "get-medical-transcription-job",
      description:
        "Provides information about the specified medical transcription job. To view the status of the specified medical transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. To get a list of your medical transcription jobs, use the operation",
      options: [
        {
          name: "--medical-transcription-job-name",
          description:
            "The name of the medical transcription job you want information about. Job names are case sensitive",
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
      name: "get-medical-vocabulary",
      description:
        "Provides information about the specified custom medical vocabulary. To view the status of the specified custom medical vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use. If the status is FAILED, FailureReason provides details on why your vocabulary failed. To get a list of your custom medical vocabularies, use the operation",
      options: [
        {
          name: "--vocabulary-name",
          description:
            "The name of the custom medical vocabulary you want information about. Custom medical vocabulary names are case sensitive",
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
      name: "get-transcription-job",
      description:
        "Provides information about the specified transcription job. To view the status of the specified transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. If you enabled content redaction, the redacted transcript can be found at the location specified in RedactedTranscriptFileUri. To get a list of your transcription jobs, use the operation",
      options: [
        {
          name: "--transcription-job-name",
          description:
            "The name of the transcription job you want information about. Job names are case sensitive",
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
      name: "get-vocabulary",
      description:
        "Provides information about the specified custom vocabulary. To view the status of the specified custom vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use. If the status is FAILED, FailureReason provides details on why your custom vocabulary failed. To get a list of your custom vocabularies, use the operation",
      options: [
        {
          name: "--vocabulary-name",
          description:
            "The name of the custom vocabulary you want information about. Custom vocabulary names are case sensitive",
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
      name: "get-vocabulary-filter",
      description:
        "Provides information about the specified custom vocabulary filter. To get a list of your custom vocabulary filters, use the operation",
      options: [
        {
          name: "--vocabulary-filter-name",
          description:
            "The name of the custom vocabulary filter you want information about. Custom vocabulary filter names are case sensitive",
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
      name: "list-call-analytics-categories",
      description:
        "Provides a list of Call Analytics categories, including all rules that make up each category. To get detailed information about a specific Call Analytics category, use the operation",
      options: [
        {
          name: "--next-token",
          description:
            "If your ListCallAnalyticsCategories request returns more results than can be displayed, NextToken is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including NextToken with the value of the copied string. Repeat as needed to view all your results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of Call Analytics categories to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used",
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
      name: "list-call-analytics-jobs",
      description:
        "Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned. To get detailed information about a specific Call Analytics job, use the operation",
      options: [
        {
          name: "--status",
          description:
            "Returns only Call Analytics jobs with the specified status. Jobs are ordered by creation date, with the newest job first. If you do not include Status, all Call Analytics jobs are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name-contains",
          description:
            "Returns only the Call Analytics jobs that contain the specified string. The search is not case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If your ListCallAnalyticsJobs request returns more results than can be displayed, NextToken is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including NextToken with the value of the copied string. Repeat as needed to view all your results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of Call Analytics jobs to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used",
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
      name: "list-language-models",
      description:
        "Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned. To get detailed information about a specific custom language model, use the operation",
      options: [
        {
          name: "--status-equals",
          description:
            "Returns only custom language models with the specified status. Language models are ordered by creation date, with the newest model first. If you do not include StatusEquals, all custom language models are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "Returns only the custom language models that contain the specified string. The search is not case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If your ListLanguageModels request returns more results than can be displayed, NextToken is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including NextToken with the value of the copied string. Repeat as needed to view all your results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of custom language models to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used",
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
      name: "list-medical-scribe-jobs",
      description:
        "Provides a list of Medical Scribe jobs that match the specified criteria. If no criteria are specified, all Medical Scribe jobs are returned. To get detailed information about a specific Medical Scribe job, use the operation",
      options: [
        {
          name: "--status",
          description:
            "Returns only Medical Scribe jobs with the specified status. Jobs are ordered by creation date, with the newest job first. If you do not include Status, all Medical Scribe jobs are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name-contains",
          description:
            "Returns only the Medical Scribe jobs that contain the specified string. The search is not case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If your ListMedicalScribeJobs request returns more results than can be displayed, NextToken is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including NextToken with the value of the copied string. Repeat as needed to view all your results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of Medical Scribe jobs to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used",
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
      name: "list-medical-transcription-jobs",
      description:
        "Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned. To get detailed information about a specific medical transcription job, use the operation",
      options: [
        {
          name: "--status",
          description:
            "Returns only medical transcription jobs with the specified status. Jobs are ordered by creation date, with the newest job first. If you do not include Status, all medical transcription jobs are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name-contains",
          description:
            "Returns only the medical transcription jobs that contain the specified string. The search is not case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If your ListMedicalTranscriptionJobs request returns more results than can be displayed, NextToken is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including NextToken with the value of the copied string. Repeat as needed to view all your results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of medical transcription jobs to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used",
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
      name: "list-medical-vocabularies",
      description:
        "Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned. To get detailed information about a specific custom medical vocabulary, use the operation",
      options: [
        {
          name: "--next-token",
          description:
            "If your ListMedicalVocabularies request returns more results than can be displayed, NextToken is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including NextToken with the value of the copied string. Repeat as needed to view all your results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of custom medical vocabularies to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--state-equals",
          description:
            "Returns only custom medical vocabularies with the specified state. Custom vocabularies are ordered by creation date, with the newest vocabulary first. If you do not include StateEquals, all custom medical vocabularies are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "Returns only the custom medical vocabularies that contain the specified string. The search is not case sensitive",
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
      name: "list-tags-for-resource",
      description:
        "Lists all tags associated with the specified transcription job, vocabulary, model, or resource. To learn more about using tags with Amazon Transcribe, refer to Tagging resources",
      options: [
        {
          name: "--resource-arn",
          description:
            "Returns a list of all tags associated with the specified Amazon Resource Name (ARN). ARNs have the format arn:partition:service:region:account-id:resource-type/resource-id. For example, arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name. Valid values for resource-type are: transcription-job, medical-transcription-job, vocabulary, medical-vocabulary, vocabulary-filter, and language-model",
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
      name: "list-transcription-jobs",
      description:
        "Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned. To get detailed information about a specific transcription job, use the operation",
      options: [
        {
          name: "--status",
          description:
            "Returns only transcription jobs with the specified status. Jobs are ordered by creation date, with the newest job first. If you do not include Status, all transcription jobs are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name-contains",
          description:
            "Returns only the transcription jobs that contain the specified string. The search is not case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If your ListTranscriptionJobs request returns more results than can be displayed, NextToken is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including NextToken with the value of the copied string. Repeat as needed to view all your results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of transcription jobs to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used",
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
      name: "list-vocabularies",
      description:
        "Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned. To get detailed information about a specific custom vocabulary, use the operation",
      options: [
        {
          name: "--next-token",
          description:
            "If your ListVocabularies request returns more results than can be displayed, NextToken is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including NextToken with the value of the copied string. Repeat as needed to view all your results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of custom vocabularies to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--state-equals",
          description:
            "Returns only custom vocabularies with the specified state. Vocabularies are ordered by creation date, with the newest vocabulary first. If you do not include StateEquals, all custom medical vocabularies are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-contains",
          description:
            "Returns only the custom vocabularies that contain the specified string. The search is not case sensitive",
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
      name: "list-vocabulary-filters",
      description:
        "Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned. To get detailed information about a specific custom vocabulary filter, use the operation",
      options: [
        {
          name: "--next-token",
          description:
            "If your ListVocabularyFilters request returns more results than can be displayed, NextToken is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including NextToken with the value of the copied string. Repeat as needed to view all your results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of custom vocabulary filters to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-contains",
          description:
            "Returns only the custom vocabulary filters that contain the specified string. The search is not case sensitive",
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
      name: "start-call-analytics-job",
      description:
        "Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request. In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to Analyzing call center audio with Call Analytics. If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time transcriptions. To make a StartCallAnalyticsJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. Note that job queuing is enabled by default for Call Analytics jobs. You must include the following parameters in your StartCallAnalyticsJob request:    region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas.    CallAnalyticsJobName: A custom name that you create for your transcription job that's unique within your Amazon Web Services account.    DataAccessRoleArn: The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.    Media (MediaFileUri or RedactedMediaFileUri): The Amazon S3 location of your media file.    With Call Analytics, you can redact the audio contained in your media file by including RedactedMediaFileUri, instead of MediaFileUri, to specify the location of your input audio. If you choose to redact your audio, you can find your redacted media at the location specified in the RedactedMediaFileUri field of your response",
      options: [
        {
          name: "--call-analytics-job-name",
          description:
            "A unique name, chosen by you, for your Call Analytics job. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new job with the same name as an existing job, you get a ConflictException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--media",
          description:
            "Describes the Amazon S3 location of the media file you want to use in your Call Analytics request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-location",
          description:
            "The Amazon S3 location where you want your Call Analytics transcription output stored. You can use any of the following formats to specify the output location:   s3://DOC-EXAMPLE-BUCKET   s3://DOC-EXAMPLE-BUCKET/my-output-folder/   s3://DOC-EXAMPLE-BUCKET/my-output-folder/my-call-analytics-job.json   Unless you specify a file name (option 3), the name of your output file has a default value that matches the name you specified for your transcription job using the CallAnalyticsJobName parameter. You can specify a KMS key to encrypt your output using the OutputEncryptionKMSKeyId parameter. If you do not specify a KMS key, Amazon Transcribe uses the default Amazon S3 key for server-side encryption. If you do not specify OutputLocation, your transcript is placed in a service-managed Amazon S3 bucket and you are provided with a URI to access your transcript",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-encryption-kms-key-id",
          description:
            "The KMS key you want to use to encrypt your Call Analytics output. If using a key located in the current Amazon Web Services account, you can specify your KMS key in one of four ways:   Use the KMS key ID itself. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.   Use an alias for the KMS key ID. For example, alias/ExampleAlias.   Use the Amazon Resource Name (ARN) for the KMS key ID. For example, arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab.   Use the ARN for the KMS key alias. For example, arn:aws:kms:region:account-ID:alias/ExampleAlias.   If using a key located in a different Amazon Web Services account than the current Amazon Web Services account, you can specify your KMS key in one of two ways:   Use the ARN for the KMS key ID. For example, arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab.   Use the ARN for the KMS key alias. For example, arn:aws:kms:region:account-ID:alias/ExampleAlias.   If you do not specify an encryption key, your output is encrypted with the default Amazon S3 key (SSE-S3). If you specify a KMS key to encrypt your output, you must also specify an output location using the OutputLocation parameter. Note that the role making the request must have permission to use the specified KMS key",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files. If the role that you specify doesn\u2019t have the appropriate permissions to access the specified Amazon S3 location, your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs",
          args: {
            name: "string",
          },
        },
        {
          name: "--settings",
          description:
            "Specify additional optional settings in your request, including content redaction; allows you to apply custom language models, vocabulary filters, and custom vocabularies to your Call Analytics job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--channel-definitions",
          description:
            "Makes it possible to specify which speaker is on which channel. For example, if your agent is the first participant to speak, you would set ChannelId to 0 (to indicate the first channel) and ParticipantRole to AGENT (to indicate that it's the agent speaking)",
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
      name: "start-medical-scribe-job",
      description:
        "Transcribes patient-clinician conversations and generates clinical notes.  Amazon Web Services HealthScribe automatically provides rich conversation transcripts, identifies speaker roles, classifies dialogues, extracts medical terms, and generates preliminary clinical notes. To learn more about these features, refer to Amazon Web Services HealthScribe. To make a StartMedicalScribeJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartMedicalTranscriptionJob request:    DataAccessRoleArn: The ARN of an IAM role with the these minimum permissions: read permission on input file Amazon S3 bucket specified in Media, write permission on the Amazon S3 bucket specified in OutputBucketName, and full permissions on the KMS key specified in OutputEncryptionKMSKeyId (if set). The role should also allow transcribe.amazonaws.com to assume it.     Media (MediaFileUri): The Amazon S3 location of your media file.    MedicalScribeJobName: A custom name you create for your MedicalScribe job that is unique within your Amazon Web Services account.    OutputBucketName: The Amazon S3 bucket where you want your output files stored.    Settings: A MedicalScribeSettings obect that must set exactly one of ShowSpeakerLabels or ChannelIdentification to true. If ShowSpeakerLabels is true, MaxSpeakerLabels must also be set.     ChannelDefinitions: A MedicalScribeChannelDefinitions array should be set if and only if the ChannelIdentification value of Settings is set to true",
      options: [
        {
          name: "--medical-scribe-job-name",
          description:
            "A unique name, chosen by you, for your Medical Scribe job. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new job with the same name as an existing job, you get a ConflictException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--media",
          description:
            "Describes the Amazon S3 location of the media file you want to use in your request. For information on supported media formats, refer to the MediaFormat parameter or the Media formats section in the Amazon S3 Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-bucket-name",
          description:
            "The name of the Amazon S3 bucket where you want your Medical Scribe output stored. Do not include the S3:// prefix of the specified bucket. Note that the role specified in the DataAccessRoleArn request parameter must have permission to use the specified location. You can change Amazon S3 permissions using the Amazon Web Services Management Console. See also Permissions Required for IAM User Roles",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-encryption-kms-key-id",
          description:
            "The KMS key you want to use to encrypt your Medical Scribe output. If using a key located in the current Amazon Web Services account, you can specify your KMS key in one of four ways:   Use the KMS key ID itself. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.   Use an alias for the KMS key ID. For example, alias/ExampleAlias.   Use the Amazon Resource Name (ARN) for the KMS key ID. For example, arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab.   Use the ARN for the KMS key alias. For example, arn:aws:kms:region:account-ID:alias/ExampleAlias.   If using a key located in a different Amazon Web Services account than the current Amazon Web Services account, you can specify your KMS key in one of two ways:   Use the ARN for the KMS key ID. For example, arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab.   Use the ARN for the KMS key alias. For example, arn:aws:kms:region:account-ID:alias/ExampleAlias.   If you do not specify an encryption key, your output is encrypted with the default Amazon S3 key (SSE-S3). Note that the role specified in the DataAccessRoleArn request parameter must have permission to use the specified KMS key",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-encryption-context",
          description:
            "A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added layer of security for your data. For more information, see KMS encryption context and Asymmetric keys in KMS",
          args: {
            name: "map",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files, write to the output bucket, and use your KMS key if supplied. If the role that you specify doesn\u2019t have the appropriate permissions your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs",
          args: {
            name: "string",
          },
        },
        {
          name: "--settings",
          description:
            "Makes it possible to control how your Medical Scribe job is processed using a MedicalScribeSettings object. Specify ChannelIdentification if ChannelDefinitions are set. Enabled ShowSpeakerLabels if ChannelIdentification and ChannelDefinitions are not set. One and only one of ChannelIdentification and ShowSpeakerLabels must be set. If ShowSpeakerLabels is set, MaxSpeakerLabels must also be set. Use Settings to specify a vocabulary or vocabulary filter or both using VocabularyName, VocabularyFilterName. VocabularyFilterMethod must be specified if VocabularyFilterName is set",
          args: {
            name: "structure",
          },
        },
        {
          name: "--channel-definitions",
          description:
            "Makes it possible to specify which speaker is on which channel. For example, if the clinician is the first participant to speak, you would set ChannelId of the first ChannelDefinition in the list to 0 (to indicate the first channel) and ParticipantRole to CLINICIAN (to indicate that it's the clinician speaking). Then you would set the ChannelId of the second ChannelDefinition in the list to 1 (to indicate the second channel) and ParticipantRole to PATIENT (to indicate that it's the patient speaking)",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Adds one or more custom tags, each in the form of a key:value pair, to the Medica Scribe job. To learn more about using tags with Amazon Transcribe, refer to Tagging resources",
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
      name: "start-medical-transcription-job",
      description:
        "Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request. In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to How Amazon Transcribe Medical works. To make a StartMedicalTranscriptionJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartMedicalTranscriptionJob request:    region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas.    MedicalTranscriptionJobName: A custom name you create for your transcription job that is unique within your Amazon Web Services account.    Media (MediaFileUri): The Amazon S3 location of your media file.    LanguageCode: This must be en-US.    OutputBucketName: The Amazon S3 bucket where you want your transcript stored. If you want your output stored in a sub-folder of this bucket, you must also include OutputKey.    Specialty: This must be PRIMARYCARE.    Type: Choose whether your audio is a conversation or a dictation",
      options: [
        {
          name: "--medical-transcription-job-name",
          description:
            "A unique name, chosen by you, for your medical transcription job. The name that you specify is also used as the default name of your transcription output file. If you want to specify a different name for your transcription output, use the OutputKey parameter. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new job with the same name as an existing job, you get a ConflictException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language code that represents the language spoken in the input media file. US English (en-US) is the only valid value for medical transcription jobs. Any other value you enter for language code results in a BadRequestException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--media-sample-rate-hertz",
          description:
            "The sample rate, in hertz, of the audio track in your input media file. If you do not specify the media sample rate, Amazon Transcribe Medical determines it for you. If you specify the sample rate, it must match the rate detected by Amazon Transcribe Medical; if there's a mismatch between the value that you specify and the value detected, your job fails. Therefore, in most cases, it's advised to omit MediaSampleRateHertz and let Amazon Transcribe Medical determine the sample rate",
          args: {
            name: "integer",
          },
        },
        {
          name: "--media-format",
          description: "Specify the format of your input media file",
          args: {
            name: "string",
          },
        },
        {
          name: "--media",
          description:
            "Describes the Amazon S3 location of the media file you want to use in your request. For information on supported media formats, refer to the MediaFormat parameter or the Media formats section in the Amazon S3 Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-bucket-name",
          description:
            "The name of the Amazon S3 bucket where you want your medical transcription output stored. Do not include the S3:// prefix of the specified bucket. If you want your output to go to a sub-folder of this bucket, specify it using the OutputKey parameter; OutputBucketName only accepts the name of a bucket. For example, if you want your output stored in S3://DOC-EXAMPLE-BUCKET, set OutputBucketName to DOC-EXAMPLE-BUCKET. However, if you want your output stored in S3://DOC-EXAMPLE-BUCKET/test-files/, set OutputBucketName to DOC-EXAMPLE-BUCKET and OutputKey to test-files/. Note that Amazon Transcribe must have permission to use the specified location. You can change Amazon S3 permissions using the Amazon Web Services Management Console. See also Permissions Required for IAM User Roles",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-key",
          description:
            "Use in combination with OutputBucketName to specify the output location of your transcript and, optionally, a unique name for your output file. The default name for your transcription output is the same as the name you specified for your medical transcription job (MedicalTranscriptionJobName). Here are some examples of how you can use OutputKey:   If you specify 'DOC-EXAMPLE-BUCKET' as the OutputBucketName and 'my-transcript.json' as the OutputKey, your transcription output path is s3://DOC-EXAMPLE-BUCKET/my-transcript.json.   If you specify 'my-first-transcription' as the MedicalTranscriptionJobName, 'DOC-EXAMPLE-BUCKET' as the OutputBucketName, and 'my-transcript' as the OutputKey, your transcription output path is s3://DOC-EXAMPLE-BUCKET/my-transcript/my-first-transcription.json.   If you specify 'DOC-EXAMPLE-BUCKET' as the OutputBucketName and 'test-files/my-transcript.json' as the OutputKey, your transcription output path is s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript.json.   If you specify 'my-first-transcription' as the MedicalTranscriptionJobName, 'DOC-EXAMPLE-BUCKET' as the OutputBucketName, and 'test-files/my-transcript' as the OutputKey, your transcription output path is s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript/my-first-transcription.json.   If you specify the name of an Amazon S3 bucket sub-folder that doesn't exist, one is created for you",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-encryption-kms-key-id",
          description:
            "The KMS key you want to use to encrypt your medical transcription output. If using a key located in the current Amazon Web Services account, you can specify your KMS key in one of four ways:   Use the KMS key ID itself. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.   Use an alias for the KMS key ID. For example, alias/ExampleAlias.   Use the Amazon Resource Name (ARN) for the KMS key ID. For example, arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab.   Use the ARN for the KMS key alias. For example, arn:aws:kms:region:account-ID:alias/ExampleAlias.   If using a key located in a different Amazon Web Services account than the current Amazon Web Services account, you can specify your KMS key in one of two ways:   Use the ARN for the KMS key ID. For example, arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab.   Use the ARN for the KMS key alias. For example, arn:aws:kms:region:account-ID:alias/ExampleAlias.   If you do not specify an encryption key, your output is encrypted with the default Amazon S3 key (SSE-S3). If you specify a KMS key to encrypt your output, you must also specify an output location using the OutputLocation parameter. Note that the role making the request must have permission to use the specified KMS key",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-encryption-context",
          description:
            "A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added layer of security for your data. For more information, see KMS encryption context and Asymmetric keys in KMS",
          args: {
            name: "map",
          },
        },
        {
          name: "--settings",
          description:
            "Specify additional optional settings in your request, including channel identification, alternative transcriptions, and speaker partitioning. You can use that to apply custom vocabularies to your transcription job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--content-identification-type",
          description:
            "Labels all personal health information (PHI) identified in your transcript. For more information, see Identifying personal health information (PHI) in a transcription",
          args: {
            name: "string",
          },
        },
        {
          name: "--specialty",
          description:
            "Specify the predominant medical specialty represented in your media. For batch transcriptions, PRIMARYCARE is the only valid value. If you require additional specialties, refer to",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Specify whether your input media contains only one person (DICTATION) or contains a conversation between two people (CONVERSATION). For example, DICTATION could be used for a medical professional wanting to transcribe voice memos; CONVERSATION could be used for transcribing the doctor-patient dialogue during the patient's office visit",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Adds one or more custom tags, each in the form of a key:value pair, to a new medical transcription job at the time you start this new job. To learn more about using tags with Amazon Transcribe, refer to Tagging resources",
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
      name: "start-transcription-job",
      description:
        "Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request. To make a StartTranscriptionJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartTranscriptionJob request:    region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas.    TranscriptionJobName: A custom name you create for your transcription job that is unique within your Amazon Web Services account.    Media (MediaFileUri): The Amazon S3 location of your media file.   One of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages: If you know the language of your media file, specify it using the LanguageCode parameter; you can find all valid language codes in the Supported languages table. If you do not know the languages spoken in your media, use either IdentifyLanguage or IdentifyMultipleLanguages and let Amazon Transcribe identify the languages for you",
      options: [
        {
          name: "--transcription-job-name",
          description:
            "A unique name, chosen by you, for your transcription job. The name that you specify is also used as the default name of your transcription output file. If you want to specify a different name for your transcription output, use the OutputKey parameter. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new job with the same name as an existing job, you get a ConflictException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language code that represents the language spoken in the input media file. If you're unsure of the language spoken in your media file, consider using IdentifyLanguage or IdentifyMultipleLanguages to enable automatic language identification. Note that you must include one of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages in your request. If you include more than one of these parameters, your transcription job fails. For a list of supported languages and their associated language codes, refer to the Supported languages table.  To transcribe speech in Modern Standard Arabic (ar-SA), your media file must be encoded at a sample rate of 16,000 Hz or higher",
          args: {
            name: "string",
          },
        },
        {
          name: "--media-sample-rate-hertz",
          description:
            "The sample rate, in hertz, of the audio track in your input media file. If you do not specify the media sample rate, Amazon Transcribe determines it for you. If you specify the sample rate, it must match the rate detected by Amazon Transcribe. If there's a mismatch between the value that you specify and the value detected, your job fails. In most cases, you can omit MediaSampleRateHertz and let Amazon Transcribe determine the sample rate",
          args: {
            name: "integer",
          },
        },
        {
          name: "--media-format",
          description: "Specify the format of your input media file",
          args: {
            name: "string",
          },
        },
        {
          name: "--media",
          description:
            "Describes the Amazon S3 location of the media file you want to use in your request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-bucket-name",
          description:
            "The name of the Amazon S3 bucket where you want your transcription output stored. Do not include the S3:// prefix of the specified bucket. If you want your output to go to a sub-folder of this bucket, specify it using the OutputKey parameter; OutputBucketName only accepts the name of a bucket. For example, if you want your output stored in S3://DOC-EXAMPLE-BUCKET, set OutputBucketName to DOC-EXAMPLE-BUCKET. However, if you want your output stored in S3://DOC-EXAMPLE-BUCKET/test-files/, set OutputBucketName to DOC-EXAMPLE-BUCKET and OutputKey to test-files/. Note that Amazon Transcribe must have permission to use the specified location. You can change Amazon S3 permissions using the Amazon Web Services Management Console. See also Permissions Required for IAM User Roles. If you do not specify OutputBucketName, your transcript is placed in a service-managed Amazon S3 bucket and you are provided with a URI to access your transcript",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-key",
          description:
            "Use in combination with OutputBucketName to specify the output location of your transcript and, optionally, a unique name for your output file. The default name for your transcription output is the same as the name you specified for your transcription job (TranscriptionJobName). Here are some examples of how you can use OutputKey:   If you specify 'DOC-EXAMPLE-BUCKET' as the OutputBucketName and 'my-transcript.json' as the OutputKey, your transcription output path is s3://DOC-EXAMPLE-BUCKET/my-transcript.json.   If you specify 'my-first-transcription' as the TranscriptionJobName, 'DOC-EXAMPLE-BUCKET' as the OutputBucketName, and 'my-transcript' as the OutputKey, your transcription output path is s3://DOC-EXAMPLE-BUCKET/my-transcript/my-first-transcription.json.   If you specify 'DOC-EXAMPLE-BUCKET' as the OutputBucketName and 'test-files/my-transcript.json' as the OutputKey, your transcription output path is s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript.json.   If you specify 'my-first-transcription' as the TranscriptionJobName, 'DOC-EXAMPLE-BUCKET' as the OutputBucketName, and 'test-files/my-transcript' as the OutputKey, your transcription output path is s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript/my-first-transcription.json.   If you specify the name of an Amazon S3 bucket sub-folder that doesn't exist, one is created for you",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-encryption-kms-key-id",
          description:
            "The KMS key you want to use to encrypt your transcription output. If using a key located in the current Amazon Web Services account, you can specify your KMS key in one of four ways:   Use the KMS key ID itself. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.   Use an alias for the KMS key ID. For example, alias/ExampleAlias.   Use the Amazon Resource Name (ARN) for the KMS key ID. For example, arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab.   Use the ARN for the KMS key alias. For example, arn:aws:kms:region:account-ID:alias/ExampleAlias.   If using a key located in a different Amazon Web Services account than the current Amazon Web Services account, you can specify your KMS key in one of two ways:   Use the ARN for the KMS key ID. For example, arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab.   Use the ARN for the KMS key alias. For example, arn:aws:kms:region:account-ID:alias/ExampleAlias.   If you do not specify an encryption key, your output is encrypted with the default Amazon S3 key (SSE-S3). If you specify a KMS key to encrypt your output, you must also specify an output location using the OutputLocation parameter. Note that the role making the request must have permission to use the specified KMS key",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-encryption-context",
          description:
            "A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added layer of security for your data. For more information, see KMS encryption context and Asymmetric keys in KMS",
          args: {
            name: "map",
          },
        },
        {
          name: "--settings",
          description:
            "Specify additional optional settings in your request, including channel identification, alternative transcriptions, speaker partitioning. You can use that to apply custom vocabularies and vocabulary filters. If you want to include a custom vocabulary or a custom vocabulary filter (or both) with your request but do not want to use automatic language identification, use Settings with the VocabularyName or VocabularyFilterName (or both) sub-parameter. If you're using automatic language identification with your request and want to include a custom language model, a custom vocabulary, or a custom vocabulary filter, use instead the  parameter with the LanguageModelName, VocabularyName or VocabularyFilterName sub-parameters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--model-settings",
          description:
            "Specify the custom language model you want to include with your transcription job. If you include ModelSettings in your request, you must include the LanguageModelName sub-parameter. For more information, see Custom language models",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-execution-settings",
          description:
            "Makes it possible to control how your transcription job is processed. Currently, the only JobExecutionSettings modification you can choose is enabling job queueing using the AllowDeferredExecution sub-parameter. If you include JobExecutionSettings in your request, you must also include the sub-parameters: AllowDeferredExecution and DataAccessRoleArn",
          args: {
            name: "structure",
          },
        },
        {
          name: "--content-redaction",
          description:
            "Makes it possible to redact or flag specified personally identifiable information (PII) in your transcript. If you use ContentRedaction, you must also include the sub-parameters: RedactionOutput and RedactionType. You can optionally include PiiEntityTypes to choose which types of PII you want to redact. If you do not include PiiEntityTypes in your request, all PII is redacted",
          args: {
            name: "structure",
          },
        },
        {
          name: "--identify-language",
          description:
            "Enables automatic language identification in your transcription job request. Use this parameter if your media file contains only one language. If your media contains multiple languages, use IdentifyMultipleLanguages instead. If you include IdentifyLanguage, you can optionally include a list of language codes, using LanguageOptions, that you think may be present in your media file. Including LanguageOptions restricts IdentifyLanguage to only the language options that you specify, which can improve transcription accuracy. If you want to apply a custom language model, a custom vocabulary, or a custom vocabulary filter to your automatic language identification request, include LanguageIdSettings with the relevant sub-parameters (VocabularyName, LanguageModelName, and VocabularyFilterName). If you include LanguageIdSettings, also include LanguageOptions. Note that you must include one of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages in your request. If you include more than one of these parameters, your transcription job fails",
        },
        {
          name: "--no-identify-language",
          description:
            "Enables automatic language identification in your transcription job request. Use this parameter if your media file contains only one language. If your media contains multiple languages, use IdentifyMultipleLanguages instead. If you include IdentifyLanguage, you can optionally include a list of language codes, using LanguageOptions, that you think may be present in your media file. Including LanguageOptions restricts IdentifyLanguage to only the language options that you specify, which can improve transcription accuracy. If you want to apply a custom language model, a custom vocabulary, or a custom vocabulary filter to your automatic language identification request, include LanguageIdSettings with the relevant sub-parameters (VocabularyName, LanguageModelName, and VocabularyFilterName). If you include LanguageIdSettings, also include LanguageOptions. Note that you must include one of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages in your request. If you include more than one of these parameters, your transcription job fails",
        },
        {
          name: "--identify-multiple-languages",
          description:
            "Enables automatic multi-language identification in your transcription job request. Use this parameter if your media file contains more than one language. If your media contains only one language, use IdentifyLanguage instead. If you include IdentifyMultipleLanguages, you can optionally include a list of language codes, using LanguageOptions, that you think may be present in your media file. Including LanguageOptions restricts IdentifyLanguage to only the language options that you specify, which can improve transcription accuracy. If you want to apply a custom vocabulary or a custom vocabulary filter to your automatic language identification request, include LanguageIdSettings with the relevant sub-parameters (VocabularyName and VocabularyFilterName). If you include LanguageIdSettings, also include LanguageOptions. Note that you must include one of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages in your request. If you include more than one of these parameters, your transcription job fails",
        },
        {
          name: "--no-identify-multiple-languages",
          description:
            "Enables automatic multi-language identification in your transcription job request. Use this parameter if your media file contains more than one language. If your media contains only one language, use IdentifyLanguage instead. If you include IdentifyMultipleLanguages, you can optionally include a list of language codes, using LanguageOptions, that you think may be present in your media file. Including LanguageOptions restricts IdentifyLanguage to only the language options that you specify, which can improve transcription accuracy. If you want to apply a custom vocabulary or a custom vocabulary filter to your automatic language identification request, include LanguageIdSettings with the relevant sub-parameters (VocabularyName and VocabularyFilterName). If you include LanguageIdSettings, also include LanguageOptions. Note that you must include one of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages in your request. If you include more than one of these parameters, your transcription job fails",
        },
        {
          name: "--language-options",
          description:
            "You can specify two or more language codes that represent the languages you think may be present in your media. Including more than five is not recommended. If you're unsure what languages are present, do not include this parameter. If you include LanguageOptions in your request, you must also include IdentifyLanguage. For more information, refer to Supported languages. To transcribe speech in Modern Standard Arabic (ar-SA), your media file must be encoded at a sample rate of 16,000 Hz or higher",
          args: {
            name: "list",
          },
        },
        {
          name: "--subtitles",
          description:
            "Produces subtitle files for your input media. You can specify WebVTT (*.vtt) and SubRip (*.srt) formats",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Adds one or more custom tags, each in the form of a key:value pair, to a new transcription job at the time you start this new job. To learn more about using tags with Amazon Transcribe, refer to Tagging resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--language-id-settings",
          description:
            "If using automatic language identification in your request and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary filter, include LanguageIdSettings with the relevant sub-parameters (VocabularyName, LanguageModelName, and VocabularyFilterName). Note that multi-language identification (IdentifyMultipleLanguages) doesn't support custom language models.  LanguageIdSettings supports two to five language codes. Each language code you include can have an associated custom language model, custom vocabulary, and custom vocabulary filter. The language codes that you specify must match the languages of the associated custom language models, custom vocabularies, and custom vocabulary filters. It's recommended that you include LanguageOptions when using LanguageIdSettings to ensure that the correct language dialect is identified. For example, if you specify a custom vocabulary that is in en-US but Amazon Transcribe determines that the language spoken in your media is en-AU, your custom vocabulary is not applied to your transcription. If you include LanguageOptions and include en-US as the only English language dialect, your custom vocabulary is applied to your transcription. If you want to include a custom language model with your request but do not want to use automatic language identification, use instead the  parameter with the LanguageModelName sub-parameter. If you want to include a custom vocabulary or a custom vocabulary filter (or both) with your request but do not want to use automatic language identification, use instead the  parameter with the VocabularyName or VocabularyFilterName (or both) sub-parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--toxicity-detection",
          description:
            "Enables toxic speech detection in your transcript. If you include ToxicityDetection in your request, you must also include ToxicityCategories. For information on the types of toxic speech Amazon Transcribe can detect, see Detecting toxic speech",
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
      name: "tag-resource",
      description:
        "Adds one or more custom tags, each in the form of a key:value pair, to the specified resource. To learn more about using tags with Amazon Transcribe, refer to Tagging resources",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource you want to tag. ARNs have the format arn:partition:service:region:account-id:resource-type/resource-id. For example, arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name. Valid values for resource-type are: transcription-job, medical-transcription-job, vocabulary, medical-vocabulary, vocabulary-filter, and language-model",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Adds one or more custom tags, each in the form of a key:value pair, to the specified resource. To learn more about using tags with Amazon Transcribe, refer to Tagging resources",
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
        "Removes the specified tags from the specified Amazon Transcribe resource. If you include UntagResource in your request, you must also include ResourceArn and TagKeys",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon Transcribe resource you want to remove tags from. ARNs have the format arn:partition:service:region:account-id:resource-type/resource-id. For example, arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name. Valid values for resource-type are: transcription-job, medical-transcription-job, vocabulary, medical-vocabulary, vocabulary-filter, and language-model",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "Removes the specified tag keys from the specified Amazon Transcribe resource",
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
      name: "update-call-analytics-category",
      description:
        "Updates the specified Call Analytics category with new rules. Note that the UpdateCallAnalyticsCategory operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category. To create a new category, see",
      options: [
        {
          name: "--category-name",
          description:
            "The name of the Call Analytics category you want to update. Category names are case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "The rules used for the updated Call Analytics category. The rules you provide in this field replace the ones that are currently being used in the specified category",
          args: {
            name: "list",
          },
        },
        {
          name: "--input-type",
          description:
            "Choose whether you want to update a real-time or a post-call category. The input type you specify must match the input type specified when the category was created. For example, if you created a category with the POST_CALL input type, you must use POST_CALL as the input type when updating this category",
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
      name: "update-medical-vocabulary",
      description:
        "Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary",
      options: [
        {
          name: "--vocabulary-name",
          description:
            "The name of the custom medical vocabulary you want to update. Custom medical vocabulary names are case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language code that represents the language of the entries in the custom vocabulary you want to update. US English (en-US) is the only language supported with Amazon Transcribe Medical",
          args: {
            name: "string",
          },
        },
        {
          name: "--vocabulary-file-uri",
          description:
            "The Amazon S3 location of the text file that contains your custom medical vocabulary. The URI must be located in the same Amazon Web Services Region as the resource you're calling. Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt",
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
      name: "update-vocabulary",
      description:
        "Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary",
      options: [
        {
          name: "--vocabulary-name",
          description:
            "The name of the custom vocabulary you want to update. Custom vocabulary names are case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language code that represents the language of the entries in the custom vocabulary you want to update. Each custom vocabulary must contain terms in only one language. A custom vocabulary can only be used to transcribe files in the same language as the custom vocabulary. For example, if you create a custom vocabulary using US English (en-US), you can only apply this custom vocabulary to files that contain English audio. For a list of supported languages and their associated language codes, refer to the Supported languages table",
          args: {
            name: "string",
          },
        },
        {
          name: "--phrases",
          description:
            "Use this parameter if you want to update your custom vocabulary by including all desired terms, as comma-separated values, within your request. The other option for updating your custom vocabulary is to save your entries in a text file and upload them to an Amazon S3 bucket, then specify the location of your file using the VocabularyFileUri parameter. Note that if you include Phrases in your request, you cannot use VocabularyFileUri; you must choose one or the other. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language",
          args: {
            name: "list",
          },
        },
        {
          name: "--vocabulary-file-uri",
          description:
            "The Amazon S3 location of the text file that contains your custom vocabulary. The URI must be located in the same Amazon Web Services Region as the resource you're calling. Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt  Note that if you include VocabularyFileUri in your request, you cannot use the Phrases flag; you must choose one or the other",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files (in this case, your custom vocabulary). If the role that you specify doesn\u2019t have the appropriate permissions to access the specified Amazon S3 location, your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs",
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
      name: "update-vocabulary-filter",
      description:
        "Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter",
      options: [
        {
          name: "--vocabulary-filter-name",
          description:
            "The name of the custom vocabulary filter you want to update. Custom vocabulary filter names are case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--words",
          description:
            "Use this parameter if you want to update your custom vocabulary filter by including all desired terms, as comma-separated values, within your request. The other option for updating your vocabulary filter is to save your entries in a text file and upload them to an Amazon S3 bucket, then specify the location of your file using the VocabularyFilterFileUri parameter. Note that if you include Words in your request, you cannot use VocabularyFilterFileUri; you must choose one or the other. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language",
          args: {
            name: "list",
          },
        },
        {
          name: "--vocabulary-filter-file-uri",
          description:
            "The Amazon S3 location of the text file that contains your custom vocabulary filter terms. The URI must be located in the same Amazon Web Services Region as the resource you're calling. Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-filter-file.txt  Note that if you include VocabularyFilterFileUri in your request, you cannot use Words; you must choose one or the other",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files (in this case, your custom vocabulary filter). If the role that you specify doesn\u2019t have the appropriate permissions to access the specified Amazon S3 location, your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs",
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
