const completionSpec: Fig.Spec = {
  name: "ecr",
  description:
    "Amazon Elastic Container Registry Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Customers can use the familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports private repositories with resource-based permissions using IAM so that specific users or Amazon EC2 instances can access repositories and images.",
  subcommands: [
    {
      name: "batch-check-layer-availability",
      description:
        "Checks the availability of one or more image layers in a repository. When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.  This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the image layers to check. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository that is associated with the image layers to check.",
          args: {
            name: "string",
          },
        },
        {
          name: "--layer-digests",
          description: "The digests of the image layers to check.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-delete-image",
      description:
        "Deletes a list of specified images within a repository. Images are specified with either an imageTag or imageDigest. You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository. You can completely delete an image (and all of its tags) by specifying the image's digest in your request.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the image to delete. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description: "The repository that contains the image to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-ids",
          description:
            "A list of image ID references that correspond to images to delete. The format of the imageIds reference is imageTag=tag or imageDigest=digest.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-get-image",
      description:
        "Gets detailed information for an image. Images are specified with either an imageTag or imageDigest. When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the images to describe. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description: "The repository that contains the images to describe.",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-ids",
          description:
            "A list of image ID references that correspond to images to describe. The format of the imageIds reference is imageTag=tag or imageDigest=digest.",
          args: {
            name: "list",
          },
        },
        {
          name: "--accepted-media-types",
          description:
            "The accepted media types for the request. Valid values: application/vnd.docker.distribution.manifest.v1+json | application/vnd.docker.distribution.manifest.v2+json | application/vnd.oci.image.manifest.v1+json",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "complete-layer-upload",
      description:
        "Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a sha256 digest of the image layer for data validation purposes. When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.  This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry to which to upload layers. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository to associate with the image layer.",
          args: {
            name: "string",
          },
        },
        {
          name: "--upload-id",
          description:
            "The upload ID from a previous InitiateLayerUpload operation to associate with the image layer.",
          args: {
            name: "string",
          },
        },
        {
          name: "--layer-digests",
          description: "The sha256 digest of the image layer.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-repository",
      description:
        "Creates a repository. For more information, see Amazon ECR Repositories in the Amazon Elastic Container Registry User Guide.",
      options: [
        {
          name: "--repository-name",
          description:
            "The name to use for the repository. The repository name may be specified on its own (such as nginx-web-app) or it can be prepended with a namespace to group the repository into a category (such as project-a/nginx-web-app).",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata that you apply to the repository to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.",
          args: {
            name: "list",
          },
        },
        {
          name: "--image-tag-mutability",
          description:
            "The tag mutability setting for the repository. If this parameter is omitted, the default setting of MUTABLE will be used which will allow image tags to be overwritten. If IMMUTABLE is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-scanning-configuration",
          description:
            "The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encryption-configuration",
          description:
            "The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-lifecycle-policy",
      description:
        "Deletes the lifecycle policy associated with the specified repository.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description: "The name of the repository.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-registry-policy",
      description: "Deletes the registry permissions policy.",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-repository",
      description:
        "Deletes a repository. If the repository contains images, you must either delete all images in the repository or use the force option to delete the repository.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository to delete. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description: "The name of the repository to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--force",
          description: "If a repository contains images, forces the deletion.",
        },
        {
          name: "--no-force",
          description: "If a repository contains images, forces the deletion.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-repository-policy",
      description:
        "Deletes the repository policy associated with the specified repository.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository policy to delete. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository that is associated with the repository policy to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-image-scan-findings",
      description: "Returns the scan findings for the specified image.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository in which to describe the image scan findings for. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The repository for the image for which to describe the scan findings.",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-id",
          description:
            "An object with identifying information for an Amazon ECR image.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated DescribeImageScanFindings request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of image scan results returned by DescribeImageScanFindings in paginated output. When this parameter is used, DescribeImageScanFindings only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeImageScanFindings request with the returned nextToken value. This value can be between 1 and 1000. If this parameter is not used, then DescribeImageScanFindings returns up to 100 results and a nextToken value, if applicable.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-images",
      description:
        "Returns metadata about the images in a repository.  Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the docker images command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by DescribeImages.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository in which to describe images. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description: "The repository that contains the images to describe.",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-ids",
          description: "The list of image IDs for the requested repository.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated DescribeImages request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return. This option cannot be used when you specify images with imageIds.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of repository results returned by DescribeImages in paginated output. When this parameter is used, DescribeImages only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeImages request with the returned nextToken value. This value can be between 1 and 1000. If this parameter is not used, then DescribeImages returns up to 100 results and a nextToken value, if applicable. This option cannot be used when you specify images with imageIds.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "The filter key and value with which to filter your DescribeImages results.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-registry",
      description:
        "Describes the settings for a registry. The replication configuration for a repository can be created or updated with the PutReplicationConfiguration API action.",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-repositories",
      description: "Describes image repositories in a registry.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repositories to be described. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-names",
          description:
            "A list of repositories to describe. If this parameter is omitted, then all repositories in a registry are described.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated DescribeRepositories request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return. This option cannot be used when you specify repositories with repositoryNames.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of repository results returned by DescribeRepositories in paginated output. When this parameter is used, DescribeRepositories only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeRepositories request with the returned nextToken value. This value can be between 1 and 1000. If this parameter is not used, then DescribeRepositories returns up to 100 results and a nextToken value, if applicable. This option cannot be used when you specify repositories with repositoryNames.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-authorization-token",
      description:
        "Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours. The authorizationToken returned is a base64 encoded string that can be decoded and used in a docker login command to authenticate to a registry. The AWS CLI offers an get-login-password command that simplifies the login process. For more information, see Registry Authentication in the Amazon Elastic Container Registry User Guide.",
      options: [
        {
          name: "--registry-ids",
          description:
            "A list of AWS account IDs that are associated with the registries for which to get AuthorizationData objects. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-download-url-for-layer",
      description:
        "Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image. When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer that is not already cached.  This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the image layer to download. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository that is associated with the image layer to download.",
          args: {
            name: "string",
          },
        },
        {
          name: "--layer-digest",
          description: "The digest of the image layer to download.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-lifecycle-policy",
      description:
        "Retrieves the lifecycle policy for the specified repository.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description: "The name of the repository.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-lifecycle-policy-preview",
      description:
        "Retrieves the results of the lifecycle policy preview request for the specified repository.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description: "The name of the repository.",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-ids",
          description: "The list of imageIDs to be included.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated&#x2028; GetLifecyclePolicyPreviewRequest request where maxResults was used and the&#x2028; results exceeded the value of that parameter. Pagination continues from the end of the&#x2028; previous results that returned the nextToken value. This value is&#x2028; null when there are no more results to return. This option cannot be used when you specify images with imageIds.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of repository results returned by GetLifecyclePolicyPreviewRequest in&#x2028; paginated output. When this parameter is used, GetLifecyclePolicyPreviewRequest only returns&#x2028; maxResults results in a single page along with a nextToken&#x2028; response element. The remaining results of the initial request can be seen by sending&#x2028; another GetLifecyclePolicyPreviewRequest request with the returned nextToken&#x2028; value. This value can be between 1 and 1000. If this&#x2028; parameter is not used, then GetLifecyclePolicyPreviewRequest returns up to&#x2028; 100 results and a nextToken value, if&#x2028; applicable. This option cannot be used when you specify images with imageIds.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "An optional parameter that filters results based on image tag status and all tags, if tagged.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-registry-policy",
      description: "Retrieves the permissions policy for a registry.",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-repository-policy",
      description:
        "Retrieves the repository policy for the specified repository.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository with the policy to retrieve.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "initiate-layer-upload",
      description:
        "Notifies Amazon ECR that you intend to upload an image layer. When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.  This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry to which you intend to upload layers. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository to which you intend to upload layers.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-images",
      description:
        "Lists all the image IDs for the specified repository. You can filter images based on whether or not they are tagged by using the tagStatus filter and specifying either TAGGED, UNTAGGED or ANY. For example, you can filter your results to return only UNTAGGED images and then pipe that result to a BatchDeleteImage operation to delete them. Or, you can filter your results to return only TAGGED images to list all of the tags in your repository.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository in which to list images. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description: "The repository with image IDs to be listed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated ListImages request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of image results returned by ListImages in paginated output. When this parameter is used, ListImages only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListImages request with the returned nextToken value. This value can be between 1 and 1000. If this parameter is not used, then ListImages returns up to 100 results and a nextToken value, if applicable.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "The filter key and value with which to filter your ListImages results.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description: "List the tags for an Amazon ECR resource.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the only supported resource is an Amazon ECR repository.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-image",
      description:
        "Creates or updates the image manifest and tags associated with an image. When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.  This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository in which to put the image. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description: "The name of the repository in which to put the image.",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-manifest",
          description:
            "The image manifest corresponding to the image to be uploaded.",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-manifest-media-type",
          description:
            "The media type of the image manifest. If you push an image manifest that does not contain the mediaType field, you must specify the imageManifestMediaType in the request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-tag",
          description:
            "The tag to associate with the image. This parameter is required for images that use the Docker Image Manifest V2 Schema 2 or Open Container Initiative (OCI) formats.",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-digest",
          description:
            "The image digest of the image manifest corresponding to the image.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-image-scanning-configuration",
      description:
        "Updates the image scanning configuration for the specified repository.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository in which to update the image scanning configuration setting. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository in which to update the image scanning configuration setting.",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-scanning-configuration",
          description:
            "The image scanning configuration for the repository. This setting determines whether images are scanned for known vulnerabilities after being pushed to the repository.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-image-tag-mutability",
      description:
        "Updates the image tag mutability settings for the specified repository. For more information, see Image Tag Mutability in the Amazon Elastic Container Registry User Guide.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository in which to update the image tag mutability settings. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository in which to update the image tag mutability settings.",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-tag-mutability",
          description:
            "The tag mutability setting for the repository. If MUTABLE is specified, image tags can be overwritten. If IMMUTABLE is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-lifecycle-policy",
      description:
        "Creates or updates the lifecycle policy for the specified repository. For more information, see Lifecycle Policy Template.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository. If you do&#x2028; not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description: "The name of the repository to receive the policy.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lifecycle-policy-text",
          description:
            "The JSON repository policy text to apply to the repository.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-registry-policy",
      description:
        "Creates or updates the permissions policy for your registry. A registry policy is used to specify permissions for another AWS account and is used when configuring cross-account replication. For more information, see Registry permissions in the Amazon Elastic Container Registry User Guide.",
      options: [
        {
          name: "--policy-text",
          description:
            "The JSON policy text to apply to your registry. The policy text follows the same format as IAM policy text. For more information, see Registry permissions in the Amazon Elastic Container Registry User Guide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-replication-configuration",
      description:
        "Creates or updates the replication configuration for a registry. The existing replication configuration for a repository can be retrieved with the DescribeRegistry API action. The first time the PutReplicationConfiguration API is called, a service-linked IAM role is created in your account for the replication process. For more information, see Using Service-Linked Roles for Amazon ECR in the Amazon Elastic Container Registry User Guide.  When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a registry permissions policy. For more information, see PutRegistryPolicy.",
      options: [
        {
          name: "--replication-configuration",
          description:
            "An object representing the replication configuration for a registry.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "set-repository-policy",
      description:
        "Applies a repository policy to the specified repository to control access permissions. For more information, see Amazon ECR Repository Policies in the Amazon Elastic Container Registry User Guide.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description: "The name of the repository to receive the policy.",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-text",
          description:
            "The JSON repository policy text to apply to the repository. For more information, see Amazon ECR Repository Policies in the Amazon Elastic Container Registry User Guide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--force",
          description:
            "If the policy you are attempting to set on a repository policy would prevent you from setting another policy in the future, you must force the SetRepositoryPolicy operation. This is intended to prevent accidental repository lock outs.",
        },
        {
          name: "--no-force",
          description:
            "If the policy you are attempting to set on a repository policy would prevent you from setting another policy in the future, you must force the SetRepositoryPolicy operation. This is intended to prevent accidental repository lock outs.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-image-scan",
      description:
        "Starts an image vulnerability scan. An image scan can only be started once per day on an individual image. This limit includes if an image was scanned on initial push. For more information, see Image Scanning in the Amazon Elastic Container Registry User Guide.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository in which to start an image scan request. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository that contains the images to scan.",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-id",
          description:
            "An object with identifying information for an Amazon ECR image.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-lifecycle-policy-preview",
      description:
        "Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description: "The name of the repository to be evaluated.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lifecycle-policy-text",
          description:
            "The policy to be evaluated against. If you do not specify a policy, the current policy for the repository is used.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the the resource to which to add tags. Currently, the only supported resource is an Amazon ECR repository.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description: "Deletes specified tags from a resource.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource from which to remove tags. Currently, the only supported resource is an Amazon ECR repository.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to be removed.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "upload-layer-part",
      description:
        "Uploads an image layer part to Amazon ECR. When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.  This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.",
      options: [
        {
          name: "--registry-id",
          description:
            "The AWS account ID associated with the registry to which you are uploading layer parts. If you do not specify a registry, the default registry is assumed.",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository to which you are uploading layer parts.",
          args: {
            name: "string",
          },
        },
        {
          name: "--upload-id",
          description:
            "The upload ID from a previous InitiateLayerUpload operation to associate with the layer part upload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--part-first-byte",
          description:
            "The position of the first byte of the layer part witin the overall image layer.",
          args: {
            name: "long",
          },
        },
        {
          name: "--part-last-byte",
          description:
            "The position of the last byte of the layer part within the overall image layer.",
          args: {
            name: "long",
          },
        },
        {
          name: "--layer-part-blob",
          description: "The base64-encoded layer part payload.",
          args: {
            name: "blob",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-login",
      description:
        "    **Note:** This command is deprecated. Use ``get-login-password`` instead.\n\n**To log in to an Amazon ECR registry**\n\nThis command retrieves an authentication token using the GetAuthorizationToken API, and then it prints a ``docker login`` command with the authorization token and, if you specified a registry ID, the URI for an Amazon ECR registry. You can execute the printed command to authenticate to the registry with Docker. After you have authenticated to an Amazon ECR registry with this command, you can use the Docker CLI to push and pull images to and from that registry as long as your IAM principal has access to do so until the token expires.  The authorization token is valid for 12 hours.\n\n.. note::\n\n    This command displays ``docker login`` commands to stdout with\n    authentication credentials. Your credentials could be visible by other\n    users on your system in a process list display or a command history. If you\n    are not on a secure system, you should consider this risk and login\n    interactively. For more information, see ``get-authorization-token``.",
      options: [
        {
          name: "--registry-ids",
          description:
            "A list of AWS account IDs that correspond to the Amazon ECR registries that you want to log in to.",
          args: {
            name: "string",
            isVariadic: true,
          },
        },
        {
          name: "--include-email",
          description:
            "Specify if the '-e' flag should be included in the 'docker login' command.  The '-e' option has been deprecated and is removed in Docker version 17.06 and later.  You must specify --no-include-email if you're using Docker version 17.06 or later.  The default behavior is to include the '-e' flag in the 'docker login' output.",
        },
        {
          name: "--no-include-email",
          description: "Include email arg",
        },
      ],
    },
    {
      name: "get-login-password",
      description:
        "**To log in to an Amazon ECR registry**\n\nThis command retrieves and displays an authentication token using the GetAuthorizationToken API that you can use to authenticate to an Amazon ECR registry. You can pass the authorization token to the login command of the container client of your preference, such as the Docker CLI. After you have authenticated to an Amazon ECR registry with this command, you can use the client to push and pull images from that registry as long as your IAM principal has access to do so until the token expires. The authorization token is valid for 12 hours.\n\nThis command is supported using the latest version of AWS CLI version 2 or in v1.17.10 or later of AWS CLI version 1. For information on updating to the latest AWS CLI version, see `Installing the AWS CLI <https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html>`__ in the *AWS Command Line Interface User Guide*.",
    },
    {
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met.",
      subcommands: [
        {
          name: "image-scan-complete",
          description:
            "Wait until an image scan is complete and findings can be accessed It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks.",
          options: [
            {
              name: "--registry-id",
              description:
                "The AWS account ID associated with the registry that contains the repository in which to describe the image scan findings for. If you do not specify a registry, the default registry is assumed.",
              args: {
                name: "string",
              },
            },
            {
              name: "--repository-name",
              description:
                "The repository for the image for which to describe the scan findings.",
              args: {
                name: "string",
              },
            },
            {
              name: "--image-id",
              description:
                "An object with identifying information for an Amazon ECR image.",
              args: {
                name: "structure",
              },
            },
            {
              name: "--next-token",
              description:
                "The nextToken value returned from a previous paginated DescribeImageScanFindings request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.",
              args: {
                name: "string",
              },
            },
            {
              name: "--max-results",
              description:
                "The maximum number of image scan results returned by DescribeImageScanFindings in paginated output. When this parameter is used, DescribeImageScanFindings only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeImageScanFindings request with the returned nextToken value. This value can be between 1 and 1000. If this parameter is not used, then DescribeImageScanFindings returns up to 100 results and a nextToken value, if applicable.",
              args: {
                name: "integer",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
            },
            {
              name: "--starting-token",
              description:
                "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "string",
              },
            },
            {
              name: "--page-size",
              description:
                "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
            },
            {
              name: "--max-items",
              description:
                "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "lifecycle-policy-preview-complete",
          description:
            "Wait until a lifecycle policy preview request is complete and results can be accessed It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks.",
          options: [
            {
              name: "--registry-id",
              description:
                "The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.",
              args: {
                name: "string",
              },
            },
            {
              name: "--repository-name",
              description: "The name of the repository.",
              args: {
                name: "string",
              },
            },
            {
              name: "--image-ids",
              description: "The list of imageIDs to be included.",
              args: {
                name: "list",
              },
            },
            {
              name: "--next-token",
              description:
                "The nextToken value returned from a previous paginated&#x2028; GetLifecyclePolicyPreviewRequest request where maxResults was used and the&#x2028; results exceeded the value of that parameter. Pagination continues from the end of the&#x2028; previous results that returned the nextToken value. This value is&#x2028; null when there are no more results to return. This option cannot be used when you specify images with imageIds.",
              args: {
                name: "string",
              },
            },
            {
              name: "--max-results",
              description:
                "The maximum number of repository results returned by GetLifecyclePolicyPreviewRequest in&#x2028; paginated output. When this parameter is used, GetLifecyclePolicyPreviewRequest only returns&#x2028; maxResults results in a single page along with a nextToken&#x2028; response element. The remaining results of the initial request can be seen by sending&#x2028; another GetLifecyclePolicyPreviewRequest request with the returned nextToken&#x2028; value. This value can be between 1 and 1000. If this&#x2028; parameter is not used, then GetLifecyclePolicyPreviewRequest returns up to&#x2028; 100 results and a nextToken value, if&#x2028; applicable. This option cannot be used when you specify images with imageIds.",
              args: {
                name: "integer",
              },
            },
            {
              name: "--filter",
              description:
                "An optional parameter that filters results based on image tag status and all tags, if tagged.",
              args: {
                name: "structure",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
            },
            {
              name: "--starting-token",
              description:
                "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "string",
              },
            },
            {
              name: "--page-size",
              description:
                "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
            },
            {
              name: "--max-items",
              description:
                "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
