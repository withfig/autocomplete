const completionSpec: Fig.Spec = {
  name: "translate",
  description:
    "Provides translation of the input content from the source language to the target language",
  subcommands: [
    {
      name: "create-parallel-data",
      description:
        "Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output",
      options: [
        {
          name: "--name",
          description:
            "A custom name for the parallel data resource in Amazon Translate. You must assign a name that is unique in the account and region",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A custom description for the parallel data resource in Amazon Translate",
          args: {
            name: "string",
          },
        },
        {
          name: "--parallel-data-config",
          description:
            "Specifies the format and S3 location of the parallel data input file",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encryption-key",
          description: "The encryption key used to encrypt this object",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for the request. This token is automatically generated when you use Amazon Translate through an AWS SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to be associated with this resource. A tag is a key-value pair that adds metadata to a resource. Each tag key for the resource must be unique. For more information, see  Tagging your resources",
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
      name: "delete-parallel-data",
      description: "Deletes a parallel data resource in Amazon Translate",
      options: [
        {
          name: "--name",
          description:
            "The name of the parallel data resource that is being deleted",
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
      name: "delete-terminology",
      description: "A synchronous action that deletes a custom terminology",
      options: [
        {
          name: "--name",
          description: "The name of the custom terminology being deleted",
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
      name: "describe-text-translation-job",
      description:
        "Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier that Amazon Translate generated for the job. The StartTextTranslationJob operation returns this identifier in its response",
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
      name: "get-parallel-data",
      description: "Provides information about a parallel data resource",
      options: [
        {
          name: "--name",
          description:
            "The name of the parallel data resource that is being retrieved",
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
      name: "get-terminology",
      description: "Retrieves a custom terminology",
      options: [
        {
          name: "--name",
          description: "The name of the custom terminology being retrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--terminology-data-format",
          description:
            "The data format of the custom terminology being retrieved. If you don't specify this parameter, Amazon Translate returns a file with the same format as the file that was imported to create the terminology.  If you specify this parameter when you retrieve a multi-directional terminology resource, you must specify the same format as the input file that was imported to create it. Otherwise, Amazon Translate throws an error",
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
      name: "import-terminology",
      description:
        "Creates or updates a custom terminology, depending on whether one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. The only supported merge strategy is OVERWRITE, where the imported terminology overwrites the existing terminology of the same name. If you import a terminology that overwrites an existing one, the new terminology takes up to 10 minutes to fully propagate. After that, translations have access to the new terminology",
      options: [
        {
          name: "--name",
          description: "The name of the custom terminology being imported",
          args: {
            name: "string",
          },
        },
        {
          name: "--merge-strategy",
          description:
            "The merge strategy of the custom terminology being imported. Currently, only the OVERWRITE merge strategy is supported. In this case, the imported terminology will overwrite an existing terminology of the same name",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the custom terminology being imported",
          args: {
            name: "string",
          },
        },
        {
          name: "--terminology-data",
          description:
            "The terminology data for the custom terminology being imported",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encryption-key",
          description:
            "The encryption key for the custom terminology being imported",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to be associated with this resource. A tag is a key-value pair that adds metadata to a resource. Each tag key for the resource must be unique. For more information, see  Tagging your resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-file",
          description:
            "The path to the file of the code you are uploading. Example: fileb://data.csv",
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
      name: "list-languages",
      description:
        "Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports",
      options: [
        {
          name: "--display-language-code",
          description:
            "The language code for the language to use to display the language names in the response. The language code is en by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Include the NextToken value to fetch the next group of supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each response",
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
      name: "list-parallel-data",
      description:
        "Provides a list of your parallel data resources in Amazon Translate",
      options: [
        {
          name: "--next-token",
          description:
            "A string that specifies the next page of results to return in a paginated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of parallel data resources returned for each request",
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
      name: "list-tags-for-resource",
      description:
        "Lists all tags associated with a given Amazon Translate resource. For more information, see  Tagging your resources",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the given Amazon Translate resource you are querying",
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
      name: "list-terminologies",
      description:
        "Provides a list of custom terminologies associated with your account",
      options: [
        {
          name: "--next-token",
          description:
            "If the result of the request to ListTerminologies was truncated, include the NextToken to fetch the next group of custom terminologies",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of custom terminologies returned per list request",
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
      name: "list-text-translation-jobs",
      description:
        "Gets a list of the batch translation jobs that you have submitted",
      options: [
        {
          name: "--filter",
          description:
            "The parameters that specify which batch translation jobs to retrieve. Filters include job name, job status, and submission time. You can only set one filter at a time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "The token to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page. The default value is 100",
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
      name: "start-text-translation-job",
      description:
        "Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify auto as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see Asynchronous batch processing. Batch translation jobs can be described with the DescribeTextTranslationJob operation, listed with the ListTextTranslationJobs operation, and stopped with the StopTextTranslationJob operation",
      options: [
        {
          name: "--job-name",
          description: "The name of the batch translation job to be performed",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-data-config",
          description:
            "Specifies the format and location of the input documents for the translation job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description:
            "Specifies the S3 folder to which your job output will be saved",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of an AWS Identity Access and Management (IAM) role that grants Amazon Translate read access to your input data. For more information, see Identity and access management",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-language-code",
          description:
            "The language code of the input language. Specify the language if all input documents share the same language. If you don't know the language of the source files, or your input documents contains different source languages, select auto. Amazon Translate auto detects the source language for each input document. For a list of supported language codes, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-language-codes",
          description:
            "The target languages of the translation job. Enter up to 10 language codes. Each input file is translated into each target language. Each language code is 2 or 5 characters long. For a list of language codes, see Supported languages",
          args: {
            name: "list",
          },
        },
        {
          name: "--terminology-names",
          description:
            "The name of a custom terminology resource to add to the translation job. This resource lists examples source terms and the desired translation for each term. This parameter accepts only one custom terminology resource. If you specify multiple target languages for the job, translate uses the designated terminology for each requested target language that has an entry for the source term in the terminology file. For a list of available custom terminology resources, use the ListTerminologies operation. For more information, see Custom terminology",
          args: {
            name: "list",
          },
        },
        {
          name: "--parallel-data-names",
          description:
            "The name of a parallel data resource to add to the translation job. This resource consists of examples that show how you want segments of text to be translated. If you specify multiple target languages for the job, the parallel data file must include translations for all the target languages. When you add parallel data to a translation job, you create an Active Custom Translation job.  This parameter accepts only one parallel data resource.  Active Custom Translation jobs are priced at a higher rate than other jobs that don't use parallel data. For more information, see Amazon Translate pricing.  For a list of available parallel data resources, use the ListParallelData operation. For more information, see  Customizing your translations with parallel data",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for the request. This token is generated for you when using the Amazon Translate SDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--settings",
          description:
            "Settings to configure your translation output. You can configure the following options:   Brevity: not supported.   Formality: sets the formality level of the output text.   Profanity: masks profane words and phrases in your translation output",
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
      name: "stop-text-translation-job",
      description:
        "Stops an asynchronous batch translation job that is in progress. If the job's state is IN_PROGRESS, the job will be marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state. Otherwise, the job is put into the STOPPED state. Asynchronous batch translation jobs are started with the StartTextTranslationJob operation. You can use the DescribeTextTranslationJob or ListTextTranslationJobs operations to get a batch translation job's JobId",
      options: [
        {
          name: "--job-id",
          description: "The job ID of the job to be stopped",
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
        "Associates a specific tag with a resource. A tag is a key-value pair that adds as a metadata to a resource. For more information, see  Tagging your resources",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the given Amazon Translate resource to which you want to associate the tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags being associated with a specific Amazon Translate resource. There can be a maximum of 50 tags (both existing and pending) associated with a specific resource",
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
      name: "translate-document",
      description:
        "Translates the input document from the source language to the target language. This synchronous operation supports text, HTML, or Word documents as the input document. TranslateDocument supports translations from English to any supported language, and from any supported language to English. Therefore, specify either the source language code or the target language code as \u201cen\u201d (English).   If you set the Formality parameter, the request will fail if the target language does not support formality. For a list of target languages that support formality, see Setting formality",
      options: [
        {
          name: "--document",
          description:
            "The content and content type for the document to be translated. The document size must not exceed 100 KB",
          args: {
            name: "structure",
          },
        },
        {
          name: "--terminology-names",
          description:
            "The name of a terminology list file to add to the translation job. This file provides source terms and the desired translation for each term. A terminology list can contain a maximum of 256 terms. You can use one custom terminology resource in your translation request. Use the ListTerminologies operation to get the available terminology lists. For more information about custom terminology lists, see Custom terminology",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-language-code",
          description:
            "The language code for the language of the source text. For a list of supported language codes, see Supported languages. To have Amazon Translate determine the source language of your text, you can specify auto in the SourceLanguageCode field. If you specify auto, Amazon Translate will call Amazon Comprehend to determine the source language.  If you specify auto, you must send the TranslateDocument request in a region that supports Amazon Comprehend. Otherwise, the request returns an error indicating that autodetect is not supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-language-code",
          description:
            "The language code requested for the translated document. For a list of supported language codes, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--settings",
          description:
            "Settings to configure your translation output. You can configure the following options:   Brevity: not supported.   Formality: sets the formality level of the output text.   Profanity: masks profane words and phrases in your translation output",
          args: {
            name: "structure",
          },
        },
        {
          name: "--document-content",
          description:
            "The path to a file of the content you are uploading Example: fileb://data.txt",
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
      name: "translate-text",
      description:
        "Translates input text from the source language to the target language. For a list of available languages and language codes, see Supported languages",
      options: [
        {
          name: "--text",
          description:
            "The text to translate. The text string can be a maximum of 10,000 bytes long. Depending on your character set, this may be fewer than 10,000 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--terminology-names",
          description:
            "The name of a terminology list file to add to the translation job. This file provides source terms and the desired translation for each term. A terminology list can contain a maximum of 256 terms. You can use one custom terminology resource in your translation request. Use the ListTerminologies operation to get the available terminology lists. For more information about custom terminology lists, see Custom terminology",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-language-code",
          description:
            "The language code for the language of the source text. For a list of language codes, see Supported languages. To have Amazon Translate determine the source language of your text, you can specify auto in the SourceLanguageCode field. If you specify auto, Amazon Translate will call Amazon Comprehend to determine the source language.  If you specify auto, you must send the TranslateText request in a region that supports Amazon Comprehend. Otherwise, the request returns an error indicating that autodetect is not supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-language-code",
          description:
            "The language code requested for the language of the target text. For a list of language codes, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--settings",
          description:
            "Settings to configure your translation output. You can configure the following options:   Brevity: reduces the length of the translated output for most translations.   Formality: sets the formality level of the output text.   Profanity: masks profane words and phrases in your translation output",
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
      name: "untag-resource",
      description:
        "Removes a specific tag associated with an Amazon Translate resource. For more information, see  Tagging your resources",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the given Amazon Translate resource from which you want to remove the tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The initial part of a key-value pair that forms a tag being removed from a given resource. Keys must be unique and cannot be duplicated for a particular resource",
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
      name: "update-parallel-data",
      description:
        "Updates a previously created parallel data resource by importing a new input file from Amazon S3",
      options: [
        {
          name: "--name",
          description: "The name of the parallel data resource being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A custom description for the parallel data resource in Amazon Translate",
          args: {
            name: "string",
          },
        },
        {
          name: "--parallel-data-config",
          description:
            "Specifies the format and S3 location of the parallel data input file",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for the request. This token is automatically generated when you use Amazon Translate through an AWS SDK",
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
