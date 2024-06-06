const completionSpec: Fig.Spec = {
  name: "importexport",
  description:
    "AWS Import/Export Service AWS Import/Export accelerates transferring large amounts of data between the AWS cloud and portable storage devices that you mail to us. AWS Import/Export transfers data directly onto and off of your storage devices using Amazon's high-speed internal network and bypassing the Internet. For large data sets, AWS Import/Export is often faster than Internet transfer and more cost effective than upgrading your connectivity",
  subcommands: [
    {
      name: "cancel-job",
      description:
        "This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete",
      options: [
        {
          name: "--job-id",
          description: "A unique identifier which refers to a particular job",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-version",
          description: "Specifies the version of the client tool",
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
      name: "create-job",
      description:
        "This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device",
      options: [
        {
          name: "--job-type",
          description:
            "Specifies whether the job to initiate is an import or export job",
          args: {
            name: "string",
          },
        },
        {
          name: "--manifest",
          description: "The UTF-8 encoded text of the manifest file",
          args: {
            name: "string",
          },
        },
        {
          name: "--manifest-addendum",
          description: "For internal use only",
          args: {
            name: "string",
          },
        },
        {
          name: "--validate-only",
          description:
            "Validate the manifest and parameter values in the request but do not actually create a job",
        },
        {
          name: "--no-validate-only",
          description:
            "Validate the manifest and parameter values in the request but do not actually create a job",
        },
        {
          name: "--api-version",
          description: "Specifies the version of the client tool",
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
      name: "get-shipping-label",
      description:
        "This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing",
      options: [
        {
          name: "--job-ids",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          description:
            "Specifies the name of the person responsible for shipping this package",
          args: {
            name: "string",
          },
        },
        {
          name: "--company",
          description:
            "Specifies the name of the company that will ship this package",
          args: {
            name: "string",
          },
        },
        {
          name: "--phone-number",
          description:
            "Specifies the phone number of the person responsible for shipping this package",
          args: {
            name: "string",
          },
        },
        {
          name: "--country",
          description:
            "Specifies the name of your country for the return address",
          args: {
            name: "string",
          },
        },
        {
          name: "--state-or-province",
          description:
            "Specifies the name of your state or your province for the return address",
          args: {
            name: "string",
          },
        },
        {
          name: "--city",
          description: "Specifies the name of your city for the return address",
          args: {
            name: "string",
          },
        },
        {
          name: "--postal-code",
          description: "Specifies the postal code for the return address",
          args: {
            name: "string",
          },
        },
        {
          name: "--street1",
          description:
            "Specifies the first part of the street address for the return address, for example 1234 Main Street",
          args: {
            name: "string",
          },
        },
        {
          name: "--street2",
          description:
            "Specifies the optional second part of the street address for the return address, for example Suite 100",
          args: {
            name: "string",
          },
        },
        {
          name: "--street3",
          description:
            "Specifies the optional third part of the street address for the return address, for example c/o Jane Doe",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-version",
          description: "Specifies the version of the client tool",
          args: {
            name: "string",
          },
        },
        {
          name: "--street-1",
          description:
            "Specifies the first part of the street address for the return address, for example 1234 Main Street",
          args: {
            name: "string",
          },
        },
        {
          name: "--street-2",
          description:
            "Specifies the optional second part of the street address for the return address, for example Suite 100",
          args: {
            name: "string",
          },
        },
        {
          name: "--street-3",
          description:
            "Specifies the optional third part of the street address for the return address, for example c/o Jane Doe",
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
      name: "get-status",
      description:
        "This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own",
      options: [
        {
          name: "--job-id",
          description: "A unique identifier which refers to a particular job",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-version",
          description: "Specifies the version of the client tool",
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
      name: "list-jobs",
      description:
        "This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1",
      options: [
        {
          name: "--max-jobs",
          description:
            "Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains <IsTruncated>true</IsTruncated>. To return the additional jobs, see Marker",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-version",
          description: "Specifies the version of the client tool",
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
      name: "update-job",
      description:
        "You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own",
      options: [
        {
          name: "--job-id",
          description: "A unique identifier which refers to a particular job",
          args: {
            name: "string",
          },
        },
        {
          name: "--manifest",
          description: "The UTF-8 encoded text of the manifest file",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-type",
          description:
            "Specifies whether the job to initiate is an import or export job",
          args: {
            name: "string",
          },
        },
        {
          name: "--validate-only",
          description:
            "Validate the manifest and parameter values in the request but do not actually create a job",
        },
        {
          name: "--no-validate-only",
          description:
            "Validate the manifest and parameter values in the request but do not actually create a job",
        },
        {
          name: "--api-version",
          description: "Specifies the version of the client tool",
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
