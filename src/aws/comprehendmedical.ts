const completionSpec: Fig.Spec = {
  name: "comprehendmedical",
  description:
    "Amazon Comprehend Medical extracts structured information from unstructured clinical text. Use these actions to gain insight in your documents. Amazon Comprehend Medical only detects entities in English language texts. Amazon Comprehend Medical places limits on the sizes of files allowed for different API operations. To learn more, see Guidelines and quotas in the Amazon Comprehend Medical Developer Guide",
  subcommands: [
    {
      name: "describe-entities-detection-v2-job",
      description:
        "Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier that Amazon Comprehend Medical generated for the job. The StartEntitiesDetectionV2Job operation returns this identifier in its response",
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
      name: "describe-icd10-cm-inference-job",
      description:
        "Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier that Amazon Comprehend Medical generated for the job. The StartICD10CMInferenceJob operation returns this identifier in its response",
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
      name: "describe-phi-detection-job",
      description:
        "Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier that Amazon Comprehend Medical generated for the job. The StartPHIDetectionJob operation returns this identifier in its response",
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
      name: "describe-rx-norm-inference-job",
      description:
        "Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier that Amazon Comprehend Medical generated for the job. The StartRxNormInferenceJob operation returns this identifier in its response",
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
      name: "describe-snomedct-inference-job",
      description:
        "Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job",
      options: [
        {
          name: "--job-id",
          description:
            "The identifier that Amazon Comprehend Medical generated for the job. The StartSNOMEDCTInferenceJob operation returns this identifier in its response",
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
        "The DetectEntities operation is deprecated. You should use the DetectEntitiesV2 operation instead. Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information",
      options: [
        {
          name: "--text",
          description:
            "A UTF-8 text string containing the clinical content being examined for entities",
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
      name: "detect-entities-v2",
      description:
        "Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts. The DetectEntitiesV2 operation replaces the DetectEntities operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the DetectEntitiesV2 operation in all new applications. The DetectEntitiesV2 operation returns the Acuity and Direction entities as attributes instead of types",
      options: [
        {
          name: "--text",
          description:
            "A UTF-8 string containing the clinical content being examined for entities",
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
      name: "detect-phi",
      description:
        "Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts",
      options: [
        {
          name: "--text",
          description:
            "A UTF-8 text string containing the clinical content being examined for PHI entities",
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
      name: "infer-icd10-cm",
      description:
        "InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts",
      options: [
        {
          name: "--text",
          description: "The input text used for analysis",
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
      name: "infer-rx-norm",
      description:
        "InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts",
      options: [
        {
          name: "--text",
          description: "The input text used for analysis",
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
      name: "infer-snomedct",
      description:
        "InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology",
      options: [
        {
          name: "--text",
          description: "The input text to be analyzed using InferSNOMEDCT",
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
      name: "list-entities-detection-v2-jobs",
      description:
        "Gets a list of medical entity detection jobs that you have submitted",
      options: [
        {
          name: "--filter",
          description:
            "Filters the jobs that are returned. You can filter jobs based on their names, status, or the date and time that they were submitted. You can only set one filter at a time",
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
      name: "list-icd10-cm-inference-jobs",
      description: "Gets a list of InferICD10CM jobs that you have submitted",
      options: [
        {
          name: "--filter",
          description:
            "Filters the jobs that are returned. You can filter jobs based on their names, status, or the date and time that they were submitted. You can only set one filter at a time",
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
      name: "list-phi-detection-jobs",
      description:
        "Gets a list of protected health information (PHI) detection jobs you have submitted",
      options: [
        {
          name: "--filter",
          description:
            "Filters the jobs that are returned. You can filter jobs based on their names, status, or the date and time that they were submitted. You can only set one filter at a time",
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
      name: "list-rx-norm-inference-jobs",
      description: "Gets a list of InferRxNorm jobs that you have submitted",
      options: [
        {
          name: "--filter",
          description:
            "Filters the jobs that are returned. You can filter jobs based on their names, status, or the date and time that they were submitted. You can only set one filter at a time",
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
          description: "Identifies the next page of results to return",
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
      name: "list-snomedct-inference-jobs",
      description: "Gets a list of InferSNOMEDCT jobs a user has submitted",
      options: [
        {
          name: "--filter",
          description:
            "Provides information for filtering a list of detection jobs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "Identifies the next page of InferSNOMEDCT results to return",
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
      name: "start-entities-detection-v2-job",
      description:
        "Starts an asynchronous medical entity detection job for a collection of documents. Use the DescribeEntitiesDetectionV2Job operation to track the status of a job",
      options: [
        {
          name: "--input-data-config",
          description:
            "The input configuration that specifies the format and location of the input data for the job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description:
            "The output configuration that specifies where to send the output files",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data. For more information, see Role-Based Permissions Required for Asynchronous Operations",
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
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one for you",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key",
          description:
            "An AWS Key Management Service key to encrypt your output files. If you do not specify a key, the files are written in plain text",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. All documents must be in the same language. Amazon Comprehend Medical processes files in US English (en)",
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
      name: "start-icd10-cm-inference-job",
      description:
        "Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the DescribeICD10CMInferenceJob operation to track the status of a job",
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
            "The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data. For more information, see  Role-Based Permissions Required for Asynchronous Operations",
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
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key",
          description:
            "An AWS Key Management Service key to encrypt your output files. If you do not specify a key, the files are written in plain text",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. All documents must be in the same language",
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
      name: "start-phi-detection-job",
      description:
        "Starts an asynchronous job to detect protected health information (PHI). Use the DescribePHIDetectionJob operation to track the status of a job",
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
            "The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data. For more information, see  Role-Based Permissions Required for Asynchronous Operations",
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
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key",
          description:
            "An AWS Key Management Service key to encrypt your output files. If you do not specify a key, the files are written in plain text",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. All documents must be in the same language",
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
      name: "start-rx-norm-inference-job",
      description:
        "Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the DescribeRxNormInferenceJob operation to track the status of a job",
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
            "The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data. For more information, see  Role-Based Permissions Required for Asynchronous Operations",
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
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key",
          description:
            "An AWS Key Management Service key to encrypt your output files. If you do not specify a key, the files are written in plain text",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. All documents must be in the same language",
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
      name: "start-snomedct-inference-job",
      description:
        "Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job",
      options: [
        {
          name: "--input-data-config",
          description:
            "The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-data-config",
          description: "The output properties for a detection job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name",
          description:
            "The user generated name the asynchronous InferSNOMEDCT job",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key",
          description:
            "An AWS Key Management Service key used to encrypt your output files. If you do not specify a key, the files are written in plain text",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language of the input documents. All documents must be in the same language",
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
      name: "stop-entities-detection-v2-job",
      description: "Stops a medical entities detection job in progress",
      options: [
        {
          name: "--job-id",
          description: "The identifier of the medical entities job to stop",
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
      name: "stop-icd10-cm-inference-job",
      description: "Stops an InferICD10CM inference job in progress",
      options: [
        {
          name: "--job-id",
          description: "The identifier of the job",
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
      name: "stop-phi-detection-job",
      description:
        "Stops a protected health information (PHI) detection job in progress",
      options: [
        {
          name: "--job-id",
          description: "The identifier of the PHI detection job to stop",
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
      name: "stop-rx-norm-inference-job",
      description: "Stops an InferRxNorm inference job in progress",
      options: [
        {
          name: "--job-id",
          description: "The identifier of the job",
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
      name: "stop-snomedct-inference-job",
      description: "Stops an InferSNOMEDCT inference job in progress",
      options: [
        {
          name: "--job-id",
          description:
            "The job id of the asynchronous InferSNOMEDCT job to be stopped",
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
