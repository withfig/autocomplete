export const awsProfileGenerator: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
    cacheByDirectory: true,
  },
  script: ["aws", "configure", "list-profiles"],
  postProcess: function (out) {
    if (out.trim() == "") {
      return [];
    }

    return out.split("\n").map((line) => ({
      name: line,
      icon: "👤",
    }));
  },
};

const completionSpec: Fig.Spec = {
  name: "aws",
  async generateSpec(_, executeShellCommand) {
    const { stdout } = await executeShellCommand({
      command: "bash",
      args: ["-c", "ls ~/.aws/credentials && ls ~/.aws/config"],
    });
    const prioritize = stdout.includes("No such file or directory");
    return {
      name: "aws",
      subcommands: [
        {
          name: "configure",
          description:
            "Configure AWS CLI options. If this command is run with no\narguments, you will be prompted for configuration values such as your AWS\nAccess Key Id and your AWS Secret Access Key.  You can configure a named\nprofile using the ``--profile`` argument.  If your config file does not exist\n(the default location is ``~/.aws/config``), the AWS CLI will create it\nfor you.  To keep an existing value, hit enter when prompted for the value.\nWhen you are prompted for information, the current value will be displayed in\n``[brackets]``.  If the config item has no value, it be displayed as\n``[None]``.  Note that the ``configure`` command only works with values from the\nconfig file.  It does not use any configuration values from environment\nvariables or the IAM role.\n\nNote: the values you provide for the AWS Access Key ID and the AWS Secret\nAccess Key will be written to the shared credentials file\n(``~/.aws/credentials``).\n\n\n=======================\nConfiguration Variables\n=======================\n\nThe following configuration variables are supported in the config file:\n\n* **aws_access_key_id** - The AWS access key part of your credentials\n* **aws_secret_access_key** - The AWS secret access key part of your credentials\n* **aws_session_token** - The session token part of your credentials (session tokens only)\n* **metadata_service_timeout** - The number of seconds to wait until the metadata service\n  request times out.  This is used if you are using an IAM role to provide\n  your credentials.\n* **metadata_service_num_attempts** - The number of attempts to try to retrieve\n  credentials.  If you know for certain you will be using an IAM role on an\n  Amazon EC2 instance, you can set this value to ensure any intermittent\n  failures are retried.  By default this value is 1.\n\nFor more information on configuration options, see `Configuring the AWS Command Line Interface`_ in the *AWS CLI User Guide*.\n\n.. _`Configuring the AWS Command Line Interface`: http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html\n",
          loadSpec: "aws/configure",
          icon: "fig://icon?type=alert",
          priority: prioritize ? 100 : 50,
        },
      ],
    };
  },
  options: [
    {
      name: "--profile",
      description: "Use a specific profile from your credential file",
      args: {
        generators: awsProfileGenerator,
        filterStrategy: "fuzzy",
      },
    },
  ],
  subcommands: [
    {
      name: "accessanalyzer",
      description:
        "AWS IAM Access Analyzer helps identify potential resource-access risks by enabling you to identify any policies that grant access to an external principal. It does this by using logic-based reasoning to analyze resource-based policies in your AWS environment. An external principal can be another AWS account, a root user, an IAM user or role, a federated user, an AWS service, or an anonymous user. You can also use Access Analyzer to preview and validate public and cross-account access to your resources before deploying permissions changes. This guide describes the AWS IAM Access Analyzer operations that you can call programmatically. For general information about Access Analyzer, see AWS IAM Access Analyzer in the IAM User Guide. To start using Access Analyzer, you first need to create an analyzer",
      loadSpec: "aws/accessanalyzer",
    },
    {
      name: "acm",
      description:
        "AWS Certificate Manager You can use AWS Certificate Manager (ACM) to manage SSL/TLS certificates for your AWS-based websites and applications. For more information about using ACM, see the AWS Certificate Manager User Guide",
      loadSpec: "aws/acm",
    },
    {
      name: "acm-pca",
      description:
        "This is the ACM Private CA API Reference. It provides descriptions, syntax, and usage examples for each of the actions and data types involved in creating and managing private certificate authorities (CA) for your organization. The documentation for each action shows the Query API request parameters and the XML response. Alternatively, you can use one of the AWS SDKs to access an API that's tailored to the programming language or platform that you're using. For more information, see AWS SDKs.  Each ACM Private CA API action has a quota that determines the number of times the action can be called per second. For more information, see API Rate Quotas in ACM Private CA in the ACM Private CA user guide",
      loadSpec: "aws/acm-pca",
    },
    {
      name: "alexaforbusiness",
      description:
        "Alexa for Business helps you use Alexa in your organization. Alexa for Business provides you with the tools to manage Alexa devices, enroll your users, and assign skills, at scale. You can build your own context-aware voice skills using the Alexa Skills Kit and the Alexa for Business API operations. You can also make these available as private skills for your organization. Alexa for Business makes it efficient to voice-enable your products and services, thus providing context-aware voice experiences for your customers. Device makers building with the Alexa Voice Service (AVS) can create fully integrated solutions, register their products with Alexa for Business, and manage them as shared devices in their organization",
      loadSpec: "aws/alexaforbusiness",
    },
    {
      name: "amp",
      description: "Amazon Managed Service for Prometheus",
      loadSpec: "aws/amp",
    },
    {
      name: "amplify",
      description:
        "Amplify enables developers to develop and deploy cloud-powered mobile and web apps. The Amplify Console provides a continuous delivery and hosting service for web applications. For more information, see the Amplify Console User Guide. The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation for client app development. For more information, see the Amplify Framework",
      loadSpec: "aws/amplify",
    },
    {
      name: "amplifybackend",
      description: "AWS Amplify Admin API",
      loadSpec: "aws/amplifybackend",
    },
    {
      name: "apigateway",
      description:
        "Amazon API Gateway Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. API Gateway allows developers to securely connect mobile and web applications to APIs that run on AWS Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS",
      loadSpec: "aws/apigateway",
    },
    {
      name: "apigatewaymanagementapi",
      description:
        "The Amazon API Gateway Management API allows you to directly manage runtime aspects of your deployed APIs. To use it, you must explicitly set the SDK's endpoint to point to the endpoint of your deployed API. The endpoint will be of the form https://{api-id}.execute-api.{region}.amazonaws.com/{stage}, or will be the endpoint corresponding to your API's custom domain and base path, if applicable",
      loadSpec: "aws/apigatewaymanagementapi",
    },
    {
      name: "apigatewayv2",
      description: "Amazon API Gateway V2",
      loadSpec: "aws/apigatewayv2",
    },
    {
      name: "appconfig",
      description:
        "AWS AppConfig Use AWS AppConfig, a capability of AWS Systems Manager, to create, manage, and quickly deploy application configurations. AppConfig supports controlled deployments to applications of any size and includes built-in validation checks and monitoring. You can use AppConfig with applications hosted on Amazon EC2 instances, AWS Lambda, containers, mobile applications, or IoT devices. To prevent errors when deploying application configurations, especially for production systems where a simple typo could cause an unexpected outage, AppConfig includes validators. A validator provides a syntactic or semantic check to ensure that the configuration you want to deploy works as intended. To validate your application configuration data, you provide a schema or a Lambda function that runs against the configuration. The configuration deployment or update can only proceed when the configuration data is valid. During a configuration deployment, AppConfig monitors the application to ensure that the deployment is successful. If the system encounters an error, AppConfig rolls back the change to minimize impact for your application users. You can configure a deployment strategy for each application or environment that includes deployment criteria, including velocity, bake time, and alarms to monitor. Similar to error monitoring, if a deployment triggers an alarm, AppConfig automatically rolls back to the previous version.  AppConfig supports multiple use cases. Here are some examples.    Application tuning: Use AppConfig to carefully introduce changes to your application that can only be tested with production traffic.    Feature toggle: Use AppConfig to turn on new features that require a timely deployment, such as a product launch or announcement.     Allow list: Use AppConfig to allow premium subscribers to access paid content.     Operational issues: Use AppConfig to reduce stress on your application when a dependency or other external factor impacts the system.   This reference is intended to be used with the AWS AppConfig User Guide",
      loadSpec: "aws/appconfig",
    },
    {
      name: "appflow",
      description:
        "Welcome to the Amazon AppFlow API reference. This guide is for developers who need detailed information about the Amazon AppFlow API operations, data types, and errors.  Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between software as a service (SaaS) applications like Salesforce, Marketo, Slack, and ServiceNow, and AWS services like Amazon S3 and Amazon Redshift.  Use the following links to get started on the Amazon AppFlow API:    Actions: An alphabetical list of all Amazon AppFlow API operations.    Data types: An alphabetical list of all Amazon AppFlow data types.    Common parameters: Parameters that all Query operations can use.    Common errors: Client and server errors that all operations can return.   If you're new to Amazon AppFlow, we recommend that you review the Amazon AppFlow User Guide. Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include applicable OAuth attributes (such as auth-code and redirecturi) with the connector-specific ConnectorProfileProperties when creating a new connector profile using Amazon AppFlow API operations. For example, Salesforce users can refer to the  Authorize Apps with OAuth  documentation",
      loadSpec: "aws/appflow",
    },
    {
      name: "appintegrations",
      description:
        "The Amazon AppIntegrations APIs are in preview release and are subject to change. The Amazon AppIntegrations service enables you to configure and reuse connections to external applications. For information about how you can use external applications with Amazon Connect, see Set up pre-built integrations in the Amazon Connect Administrator Guide",
      loadSpec: "aws/appintegrations",
    },
    {
      name: "application-autoscaling",
      description:
        "With Application Auto Scaling, you can configure automatic scaling for the following resources:   Amazon ECS services   Amazon EC2 Spot Fleet requests   Amazon EMR clusters   Amazon AppStream 2.0 fleets   Amazon DynamoDB tables and global secondary indexes throughput capacity   Amazon Aurora Replicas   Amazon SageMaker endpoint variants   Custom resources provided by your own applications or services   Amazon Comprehend document classification and entity recognizer endpoints   AWS Lambda function provisioned concurrency   Amazon Keyspaces (for Apache Cassandra) tables   Amazon Managed Streaming for Apache Kafka broker storage    API Summary  The Application Auto Scaling service API includes three key sets of actions:    Register and manage scalable targets - Register AWS or custom resources as scalable targets (a resource that Application Auto Scaling can scale), set minimum and maximum capacity limits, and retrieve information on existing scalable targets.   Configure and manage automatic scaling - Define scaling policies to dynamically scale your resources in response to CloudWatch alarms, schedule one-time or recurring scaling actions, and retrieve your recent scaling activity history.   Suspend and resume scaling - Temporarily suspend and later resume automatic scaling by calling the RegisterScalableTarget API action for any Application Auto Scaling scalable target. You can suspend and resume (individually or in combination) scale-out activities that are triggered by a scaling policy, scale-in activities that are triggered by a scaling policy, and scheduled scaling.   To learn more about Application Auto Scaling, including information about granting IAM users required permissions for Application Auto Scaling actions, see the Application Auto Scaling User Guide",
      loadSpec: "aws/application-autoscaling",
    },
    {
      name: "application-insights",
      description:
        "Amazon CloudWatch Application Insights  Amazon CloudWatch Application Insights is a service that helps you detect common problems with your applications. It enables you to pinpoint the source of issues in your applications (built with technologies such as Microsoft IIS, .NET, and Microsoft SQL Server), by providing key insights into detected problems. After you onboard your application, CloudWatch Application Insights identifies, recommends, and sets up metrics and logs. It continuously analyzes and correlates your metrics and logs for unusual behavior to surface actionable problems with your application. For example, if your application is slow and unresponsive and leading to HTTP 500 errors in your Application Load Balancer (ALB), Application Insights informs you that a memory pressure problem with your SQL Server database is occurring. It bases this analysis on impactful metrics and log errors",
      loadSpec: "aws/application-insights",
    },
    {
      name: "appmesh",
      description:
        "AWS App Mesh is a service mesh based on the Envoy proxy that makes it easy to monitor and control microservices. App Mesh standardizes how your microservices communicate, giving you end-to-end visibility and helping to ensure high availability for your applications. App Mesh gives you consistent visibility and network traffic controls for every microservice in an application. You can use App Mesh with AWS Fargate, Amazon ECS, Amazon EKS, Kubernetes on AWS, and Amazon EC2.  App Mesh supports microservice applications that use service discovery naming for their components. For more information about service discovery on Amazon ECS, see Service Discovery in the Amazon Elastic Container Service Developer Guide. Kubernetes kube-dns and coredns are supported. For more information, see DNS for Services and Pods in the Kubernetes documentation",
      loadSpec: "aws/appmesh",
    },
    {
      name: "appstream",
      description:
        "Amazon AppStream 2.0 This is the Amazon AppStream 2.0 API Reference. This documentation provides descriptions and syntax for each of the actions and data types in AppStream 2.0. AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand.   You can call the AppStream 2.0 API operations by using an interface VPC endpoint (interface endpoint). For more information, see Access AppStream 2.0 API Operations and CLI Commands Through an Interface VPC Endpoint in the Amazon AppStream 2.0 Administration Guide.  To learn more about AppStream 2.0, see the following resources:    Amazon AppStream 2.0 product page     Amazon AppStream 2.0 documentation",
      loadSpec: "aws/appstream",
    },
    {
      name: "appsync",
      description:
        "AWS AppSync provides API actions for creating and interacting with data sources using GraphQL from your application",
      loadSpec: "aws/appsync",
    },
    {
      name: "athena",
      description:
        "Amazon Athena is an interactive query service that lets you use standard SQL to analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay only for the queries you run. Athena scales automatically\u2014executing queries in parallel\u2014so results are fast, even with large datasets and complex queries. For more information, see What is Amazon Athena in the Amazon Athena User Guide. If you connect to Athena using the JDBC driver, use version 1.1.0 of the driver or later with the Amazon Athena API. Earlier version drivers do not support the API. For more information and to download the driver, see Accessing Amazon Athena with JDBC. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide",
      loadSpec: "aws/athena",
    },
    {
      name: "auditmanager",
      description:
        "Welcome to the AWS Audit Manager API reference. This guide is for developers who need detailed information about the AWS Audit Manager API operations, data types, and errors.  AWS Audit Manager is a service that provides automated evidence collection so that you can continuously audit your AWS usage, and assess the effectiveness of your controls to better manage risk and simplify compliance. AWS Audit Manager provides pre-built frameworks that structure and automate assessments for a given compliance standard. Frameworks include a pre-built collection of controls with descriptions and testing procedures, which are grouped according to the requirements of the specified compliance standard or regulation. You can also customize frameworks and controls to support internal audits with unique requirements.  Use the following links to get started with the AWS Audit Manager API:    Actions: An alphabetical list of all AWS Audit Manager API operations.    Data types: An alphabetical list of all AWS Audit Manager data types.    Common parameters: Parameters that all Query operations can use.    Common errors: Client and server errors that all operations can return.   If you're new to AWS Audit Manager, we recommend that you review the  AWS Audit Manager User Guide",
      loadSpec: "aws/auditmanager",
    },
    {
      name: "autoscaling",
      description:
        "Amazon EC2 Auto Scaling Amazon EC2 Auto Scaling is designed to automatically launch or terminate EC2 instances based on user-defined scaling policies, scheduled actions, and health checks. Use this service with AWS Auto Scaling, Amazon CloudWatch, and Elastic Load Balancing. For more information, including information about granting IAM users required permissions for Amazon EC2 Auto Scaling actions, see the Amazon EC2 Auto Scaling User Guide",
      loadSpec: "aws/autoscaling",
    },
    {
      name: "autoscaling-plans",
      description:
        "AWS Auto Scaling Use AWS Auto Scaling to create scaling plans for your applications to automatically scale your scalable AWS resources.   API Summary  You can use the AWS Auto Scaling service API to accomplish the following tasks:   Create and manage scaling plans   Define target tracking scaling policies to dynamically scale your resources based on utilization   Scale Amazon EC2 Auto Scaling groups using predictive scaling and dynamic scaling to scale your Amazon EC2 capacity faster   Set minimum and maximum capacity limits   Retrieve information on existing scaling plans   Access current forecast data and historical forecast data for up to 56 days previous   To learn more about AWS Auto Scaling, including information about granting IAM users required permissions for AWS Auto Scaling actions, see the AWS Auto Scaling User Guide",
      loadSpec: "aws/autoscaling-plans",
    },
    {
      name: "backup",
      description:
        "AWS Backup AWS Backup is a unified backup service designed to protect AWS services and their associated data. AWS Backup simplifies the creation, migration, restoration, and deletion of backups, while also providing reporting and auditing",
      loadSpec: "aws/backup",
    },
    {
      name: "batch",
      description:
        "Using AWS Batch, you can run batch computing workloads on the AWS Cloud. Batch computing is a common means for developers, scientists, and engineers to access large amounts of compute resources. AWS Batch uses the advantages of this computing workload to remove the undifferentiated heavy lifting of configuring and managing required infrastructure. At the same time, it also adopts a familiar batch computing software approach. Given these advantages, AWS Batch can help you to efficiently provision resources in response to jobs submitted, thus effectively helping you to eliminate capacity constraints, reduce compute costs, and deliver your results more quickly. As a fully managed service, AWS Batch can run batch computing workloads of any scale. AWS Batch automatically provisions compute resources and optimizes workload distribution based on the quantity and scale of your specific workloads. With AWS Batch, there's no need to install or manage batch computing software. This means that you can focus your time and energy on analyzing results and solving your specific problems",
      loadSpec: "aws/batch",
    },
    {
      name: "braket",
      description:
        "The Amazon Braket API Reference provides information about the operations and structures supported in Amazon Braket",
      loadSpec: "aws/braket",
    },
    {
      name: "budgets",
      description:
        "The AWS Budgets API enables you to use AWS Budgets to plan your service usage, service costs, and instance reservations. The API reference provides descriptions, syntax, and usage examples for each of the actions and data types for AWS Budgets.  Budgets provide you with a way to see the following information:   How close your plan is to your budgeted amount or to the free tier limits   Your usage-to-date, including how much you've used of your Reserved Instances (RIs)   Your current estimated charges from AWS, and how much your predicted usage will accrue in charges by the end of the month   How much of your budget has been used   AWS updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:    Cost budgets - Plan how much you want to spend on a service.    Usage budgets - Plan how much you want to use one or more services.    RI utilization budgets - Define a utilization threshold, and receive alerts when your RI usage falls below that threshold. This lets you see if your RIs are unused or under-utilized.    RI coverage budgets - Define a coverage threshold, and receive alerts when the number of your instance hours that are covered by RIs fall below that threshold. This lets you see how much of your instance usage is covered by a reservation.   Service Endpoint The AWS Budgets API provides the following endpoint:   https://budgets.amazonaws.com   For information about costs that are associated with the AWS Budgets API, see AWS Cost Management Pricing",
      loadSpec: "aws/budgets",
    },
    {
      name: "ce",
      description:
        "The Cost Explorer API enables you to programmatically query your cost and usage data. You can query for aggregated data such as total monthly costs or total daily usage. You can also query for granular data, such as the number of daily write operations for Amazon DynamoDB database tables in your production environment.  Service Endpoint The Cost Explorer API provides the following endpoint:    https://ce.us-east-1.amazonaws.com    For information about costs associated with the Cost Explorer API, see AWS Cost Management Pricing",
      loadSpec: "aws/ce",
    },
    {
      name: "chime",
      description:
        "The Amazon Chime API (application programming interface) is designed for developers to perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice Connectors. This guide provides detailed information about the Amazon Chime API, including operations, types, inputs and outputs, and error codes. It also includes some server-side API actions to use with the Amazon Chime SDK. For more information about the Amazon Chime SDK, see  Using the Amazon Chime SDK  in the Amazon Chime Developer Guide. You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to make API calls. We recommend using an AWS SDK or the AWS CLI. Each API operation includes links to information about using it with a language-specific AWS SDK or the AWS CLI.  Using an AWS SDK   You don't need to write code to calculate a signature for request authentication. The SDK clients authenticate your requests by using access keys that you provide. For more information about AWS SDKs, see the AWS Developer Center.   Using the AWS CLI  Use your access keys with the AWS CLI to make API calls. For information about setting up the AWS CLI, see Installing the AWS Command Line Interface in the AWS Command Line Interface User Guide. For a list of available Amazon Chime commands, see the Amazon Chime commands in the AWS CLI Command Reference.   Using REST APIs  If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Chime supports signature version 4. For more information, see Signature Version 4 Signing Process in the Amazon Web Services General Reference. When making REST API calls, use the service name chime and REST endpoint https://service.chime.aws.amazon.com.   Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see Identity and Access Management for Amazon Chime in the Amazon Chime Administration Guide",
      loadSpec: "aws/chime",
    },
    {
      name: "cloud9",
      description:
        "AWS Cloud9 AWS Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and release software in the cloud. For more information about AWS Cloud9, see the AWS Cloud9 User Guide. AWS Cloud9 supports these operations:    CreateEnvironmentEC2: Creates an AWS Cloud9 development environment, launches an Amazon EC2 instance, and then connects from the instance to the environment.    CreateEnvironmentMembership: Adds an environment member to an environment.    DeleteEnvironment: Deletes an environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.    DeleteEnvironmentMembership: Deletes an environment member from an environment.    DescribeEnvironmentMemberships: Gets information about environment members for an environment.    DescribeEnvironments: Gets information about environments.    DescribeEnvironmentStatus: Gets status information for an environment.    ListEnvironments: Gets a list of environment identifiers.    ListTagsForResource: Gets the tags for an environment.    TagResource: Adds tags to an environment.    UntagResource: Removes tags from an environment.    UpdateEnvironment: Changes the settings of an existing environment.    UpdateEnvironmentMembership: Changes the settings of an existing environment member for an environment",
      loadSpec: "aws/cloud9",
    },
    {
      name: "clouddirectory",
      description:
        "Amazon Cloud Directory Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the development and management of cloud-scale web, mobile, and IoT applications. This guide describes the Cloud Directory operations that you can call programmatically and includes detailed information on data types and errors. For information about Cloud Directory features, see AWS Directory Service and the Amazon Cloud Directory Developer Guide",
      loadSpec: "aws/clouddirectory",
    },
    {
      name: "cloudformation",
      description:
        "AWS CloudFormation AWS CloudFormation allows you to create and manage AWS infrastructure deployments predictably and repeatedly. You can use AWS CloudFormation to leverage AWS products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification Service, Elastic Load Balancing, and Auto Scaling to build highly-reliable, highly scalable, cost-effective applications without creating or configuring the underlying AWS infrastructure. With AWS CloudFormation, you declare all of your resources and dependencies in a template file. The template defines a collection of resources as a single unit called a stack. AWS CloudFormation creates and deletes all member resources of the stack together and manages all dependencies between the resources for you. For more information about AWS CloudFormation, see the AWS CloudFormation Product Page. Amazon CloudFormation makes use of other AWS products. If you need additional technical information about a specific AWS product, you can find the product's technical documentation at docs.aws.amazon.com",
      loadSpec: "aws/cloudformation",
    },
    {
      name: "cloudfront",
      description:
        "Amazon CloudFront This is the Amazon CloudFront API Reference. This guide is for developers who need detailed information about CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the Amazon CloudFront Developer Guide",
      loadSpec: "aws/cloudfront",
    },
    {
      name: "cloudhsm",
      description:
        "AWS CloudHSM Service This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference.  For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference",
      loadSpec: "aws/cloudhsm",
    },
    {
      name: "cloudhsmv2",
      description:
        "For more information about AWS CloudHSM, see AWS CloudHSM and the AWS CloudHSM User Guide",
      loadSpec: "aws/cloudhsmv2",
    },
    {
      name: "cloudsearch",
      description:
        "Amazon CloudSearch Configuration Service You use the Amazon CloudSearch configuration service to create, configure, and manage search domains. Configuration service requests are submitted using the AWS Query protocol. AWS Query requests are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action. The endpoint for configuration service requests is region-specific: cloudsearch.region.amazonaws.com. For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see Regions and Endpoints",
      loadSpec: "aws/cloudsearch",
    },
    {
      name: "cloudsearchdomain",
      description:
        "You use the AmazonCloudSearch2013 API to upload documents to a search domain and search those documents.  The endpoints for submitting UploadDocuments, Search, and Suggest requests are domain-specific. To get the endpoints for your domain, use the Amazon CloudSearch configuration service DescribeDomains action. The domain endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. You submit suggest requests to the search endpoint.  For more information, see the Amazon CloudSearch Developer Guide",
      loadSpec: "aws/cloudsearchdomain",
    },
    {
      name: "cloudtrail",
      description:
        "AWS CloudTrail This is the CloudTrail API Reference. It provides descriptions of actions, data types, common parameters, and common errors for CloudTrail. CloudTrail is a web service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. The recorded information includes the identity of the user, the start time of the AWS API call, the source IP address, the request parameters, and the response elements returned by the service.  As an alternative to the API, you can use one of the AWS SDKs, which consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWSCloudTrail. For example, the SDKs take care of cryptographically signing requests, managing errors, and retrying requests automatically. For information about the AWS SDKs, including how to download and install them, see the Tools for Amazon Web Services page.  See the AWS CloudTrail User Guide for information about the data that is included with each AWS API call listed in the log files",
      loadSpec: "aws/cloudtrail",
    },
    {
      name: "cloudwatch",
      description:
        "Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real time. You can use CloudWatch to collect and track metrics, which are the variables you want to measure for your resources and applications. CloudWatch alarms send notifications or automatically change the resources you are monitoring based on rules that you define. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2 instances. Then, use this data to determine whether you should launch additional instances to handle increased load. You can also use this data to stop under-used instances to save money. In addition to monitoring the built-in metrics that come with AWS, you can monitor your own custom metrics. With CloudWatch, you gain system-wide visibility into resource utilization, application performance, and operational health",
      loadSpec: "aws/cloudwatch",
    },
    {
      name: "codeartifact",
      description:
        "AWS CodeArtifact is a fully managed artifact repository compatible with language-native package managers and build tools such as npm, Apache Maven, and pip. You can use CodeArtifact to share packages with development teams and pull packages. Packages can be pulled from both public and CodeArtifact repositories. You can also create an upstream relationship between a CodeArtifact repository and another repository, which effectively merges their contents from the point of view of a package manager client.   AWS CodeArtifact Components  Use the information in this guide to help you work with the following CodeArtifact components:    Repository: A CodeArtifact repository contains a set of package versions, each of which maps to a set of assets, or files. Repositories are polyglot, so a single repository can contain packages of any supported type. Each repository exposes endpoints for fetching and publishing packages using tools like the  npm  CLI, the Maven CLI ( mvn ), and  pip .    Domain: Repositories are aggregated into a higher-level entity known as a domain. All package assets and metadata are stored in the domain, but are consumed through repositories. A given package asset, such as a Maven JAR file, is stored once per domain, no matter how many repositories it's present in. All of the assets and metadata in a domain are encrypted with the same customer master key (CMK) stored in AWS Key Management Service (AWS KMS). Each repository is a member of a single domain and can't be moved to a different domain. The domain allows organizational policy to be applied across multiple repositories, such as which accounts can access repositories in the domain, and which public repositories can be used as sources of packages. Although an organization can have multiple domains, we recommend a single production domain that contains all published artifacts so that teams can find and share packages across their organization.    Package: A package is a bundle of software and the metadata required to resolve dependencies and install the software. CodeArtifact supports npm, PyPI, and Maven package formats. In CodeArtifact, a package consists of:   A name (for example, webpack is the name of a popular npm package)   An optional namespace (for example, @types in @types/node)   A set of versions (for example, 1.0.0, 1.0.1, 1.0.2, etc.)    Package-level metadata (for example, npm tags)      Package version: A version of a package, such as @types/node 12.6.9. The version number format and semantics vary for different package formats. For example, npm package versions must conform to the Semantic Versioning specification. In CodeArtifact, a package version consists of the version identifier, metadata at the package version level, and a set of assets.    Upstream repository: One repository is upstream of another when the package versions in it can be accessed from the repository endpoint of the downstream repository, effectively merging the contents of the two repositories from the point of view of a client. CodeArtifact allows creating an upstream relationship between two repositories.    Asset: An individual file stored in CodeArtifact associated with a package version, such as an npm .tgz file or Maven POM and JAR files.   CodeArtifact supports these operations:    AssociateExternalConnection: Adds an existing external connection to a repository.     CopyPackageVersions: Copies package versions from one repository to another repository in the same domain.    CreateDomain: Creates a domain    CreateRepository: Creates a CodeArtifact repository in a domain.     DeleteDomain: Deletes a domain. You cannot delete a domain that contains repositories.     DeleteDomainPermissionsPolicy: Deletes the resource policy that is set on a domain.    DeletePackageVersions: Deletes versions of a package. After a package has been deleted, it can be republished, but its assets and metadata cannot be restored because they have been permanently removed from storage.    DeleteRepository: Deletes a repository.     DeleteRepositoryPermissionsPolicy: Deletes the resource policy that is set on a repository.    DescribeDomain: Returns a DomainDescription object that contains information about the requested domain.    DescribePackageVersion: Returns a PackageVersionDescription object that contains details about a package version.     DescribeRepository: Returns a RepositoryDescription object that contains detailed information about the requested repository.     DisposePackageVersions: Disposes versions of a package. A package version with the status Disposed cannot be restored because they have been permanently removed from storage.    DisassociateExternalConnection: Removes an existing external connection from a repository.     GetAuthorizationToken: Generates a temporary authorization token for accessing repositories in the domain. The token expires the authorization period has passed. The default authorization period is 12 hours and can be customized to any length with a maximum of 12 hours.    GetDomainPermissionsPolicy: Returns the policy of a resource that is attached to the specified domain.     GetPackageVersionAsset: Returns the contents of an asset that is in a package version.     GetPackageVersionReadme: Gets the readme file or descriptive text for a package version.    GetRepositoryEndpoint: Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each package format:     npm     pypi     maven       GetRepositoryPermissionsPolicy: Returns the resource policy that is set on a repository.     ListDomains: Returns a list of DomainSummary objects. Each returned DomainSummary object contains information about a domain.    ListPackages: Lists the packages in a repository.    ListPackageVersionAssets: Lists the assets for a given package version.    ListPackageVersionDependencies: Returns a list of the direct dependencies for a package version.     ListPackageVersions: Returns a list of package versions for a specified package in a repository.    ListRepositories: Returns a list of repositories owned by the AWS account that called this method.    ListRepositoriesInDomain: Returns a list of the repositories in a domain.    PutDomainPermissionsPolicy: Attaches a resource policy to a domain.    PutRepositoryPermissionsPolicy: Sets the resource policy on a repository that specifies permissions to access it.     UpdatePackageVersionsStatus: Updates the status of one or more versions of a package.    UpdateRepository: Updates the properties of a repository",
      loadSpec: "aws/codeartifact",
    },
    {
      name: "codebuild",
      description:
        "AWS CodeBuild AWS CodeBuild is a fully managed build service in the cloud. AWS CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy. AWS CodeBuild eliminates the need to provision, manage, and scale your own build servers. It provides prepackaged build environments for the most popular programming languages and build tools, such as Apache Maven, Gradle, and more. You can also fully customize build environments in AWS CodeBuild to use your own build tools. AWS CodeBuild scales automatically to meet peak build requests. You pay only for the build time you consume. For more information about AWS CodeBuild, see the  AWS CodeBuild User Guide",
      loadSpec: "aws/codebuild",
    },
    {
      name: "codecommit",
      description:
        "AWS CodeCommit This is the AWS CodeCommit API Reference. This reference provides descriptions of the operations and data types for AWS CodeCommit API along with usage examples. You can use the AWS CodeCommit API to work with the following objects: Repositories, by calling the following:    BatchGetRepositories, which returns information about one or more repositories associated with your AWS account.    CreateRepository, which creates an AWS CodeCommit repository.    DeleteRepository, which deletes an AWS CodeCommit repository.    GetRepository, which returns information about a specified repository.    ListRepositories, which lists all AWS CodeCommit repositories associated with your AWS account.    UpdateRepositoryDescription, which sets or updates the description of the repository.    UpdateRepositoryName, which changes the name of the repository. If you change the name of a repository, no other users of that repository can access it until you send them the new HTTPS or SSH URL to use.   Branches, by calling the following:    CreateBranch, which creates a branch in a specified repository.    DeleteBranch, which deletes the specified branch in a repository unless it is the default branch.    GetBranch, which returns information about a specified branch.    ListBranches, which lists all branches for a specified repository.    UpdateDefaultBranch, which changes the default branch for a repository.   Files, by calling the following:    DeleteFile, which deletes the content of a specified file from a specified branch.    GetBlob, which returns the base-64 encoded content of an individual Git blob object in a repository.    GetFile, which returns the base-64 encoded content of a specified file.    GetFolder, which returns the contents of a specified folder or directory.    PutFile, which adds or modifies a single file in a specified repository and branch.   Commits, by calling the following:    BatchGetCommits, which returns information about one or more commits in a repository.    CreateCommit, which creates a commit for changes to a repository.    GetCommit, which returns information about a commit, including commit messages and author and committer information.    GetDifferences, which returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference).   Merges, by calling the following:    BatchDescribeMergeConflicts, which returns information about conflicts in a merge between commits in a repository.    CreateUnreferencedMergeCommit, which creates an unreferenced commit between two branches or commits for the purpose of comparing them and identifying any potential conflicts.    DescribeMergeConflicts, which returns information about merge conflicts between the base, source, and destination versions of a file in a potential merge.    GetMergeCommit, which returns information about the merge between a source and destination commit.     GetMergeConflicts, which returns information about merge conflicts between the source and destination branch in a pull request.    GetMergeOptions, which returns information about the available merge options between two branches or commit specifiers.    MergeBranchesByFastForward, which merges two branches using the fast-forward merge option.    MergeBranchesBySquash, which merges two branches using the squash merge option.    MergeBranchesByThreeWay, which merges two branches using the three-way merge option.   Pull requests, by calling the following:    CreatePullRequest, which creates a pull request in a specified repository.    CreatePullRequestApprovalRule, which creates an approval rule for a specified pull request.    DeletePullRequestApprovalRule, which deletes an approval rule for a specified pull request.    DescribePullRequestEvents, which returns information about one or more pull request events.    EvaluatePullRequestApprovalRules, which evaluates whether a pull request has met all the conditions specified in its associated approval rules.    GetCommentsForPullRequest, which returns information about comments on a specified pull request.    GetPullRequest, which returns information about a specified pull request.    GetPullRequestApprovalStates, which returns information about the approval states for a specified pull request.    GetPullRequestOverrideState, which returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.    ListPullRequests, which lists all pull requests for a repository.    MergePullRequestByFastForward, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the fast-forward merge option.    MergePullRequestBySquash, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the squash merge option.    MergePullRequestByThreeWay. which merges the source destination branch of a pull request into the specified destination branch for that pull request using the three-way merge option.    OverridePullRequestApprovalRules, which sets aside all approval rule requirements for a pull request.    PostCommentForPullRequest, which posts a comment to a pull request at the specified line, file, or request.    UpdatePullRequestApprovalRuleContent, which updates the structure of an approval rule for a pull request.    UpdatePullRequestApprovalState, which updates the state of an approval on a pull request.    UpdatePullRequestDescription, which updates the description of a pull request.    UpdatePullRequestStatus, which updates the status of a pull request.    UpdatePullRequestTitle, which updates the title of a pull request.   Approval rule templates, by calling the following:    AssociateApprovalRuleTemplateWithRepository, which associates a template with a specified repository. After the template is associated with a repository, AWS CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repository.    BatchAssociateApprovalRuleTemplateWithRepositories, which associates a template with one or more specified repositories. After the template is associated with a repository, AWS CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repositories.    BatchDisassociateApprovalRuleTemplateFromRepositories, which removes the association between a template and specified repositories so that approval rules based on the template are not automatically created when pull requests are created in those repositories.    CreateApprovalRuleTemplate, which creates a template for approval rules that can then be associated with one or more repositories in your AWS account.    DeleteApprovalRuleTemplate, which deletes the specified template. It does not remove approval rules on pull requests already created with the template.    DisassociateApprovalRuleTemplateFromRepository, which removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository.    GetApprovalRuleTemplate, which returns information about an approval rule template.    ListApprovalRuleTemplates, which lists all approval rule templates in the AWS Region in your AWS account.    ListAssociatedApprovalRuleTemplatesForRepository, which lists all approval rule templates that are associated with a specified repository.    ListRepositoriesForApprovalRuleTemplate, which lists all repositories associated with the specified approval rule template.    UpdateApprovalRuleTemplateDescription, which updates the description of an approval rule template.    UpdateApprovalRuleTemplateName, which updates the name of an approval rule template.    UpdateApprovalRuleTemplateContent, which updates the content of an approval rule template.   Comments in a repository, by calling the following:    DeleteCommentContent, which deletes the content of a comment on a commit in a repository.    GetComment, which returns information about a comment on a commit.    GetCommentReactions, which returns information about emoji reactions to comments.    GetCommentsForComparedCommit, which returns information about comments on the comparison between two commit specifiers in a repository.    PostCommentForComparedCommit, which creates a comment on the comparison between two commit specifiers in a repository.    PostCommentReply, which creates a reply to a comment.    PutCommentReaction, which creates or updates an emoji reaction to a comment.    UpdateComment, which updates the content of a comment on a commit in a repository.   Tags used to tag resources in AWS CodeCommit (not Git tags), by calling the following:    ListTagsForResource, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit.    TagResource, which adds or updates tags for a resource in AWS CodeCommit.    UntagResource, which removes tags for a resource in AWS CodeCommit.   Triggers, by calling the following:    GetRepositoryTriggers, which returns information about triggers configured for a repository.    PutRepositoryTriggers, which replaces all triggers for a repository and can be used to create or delete triggers.    TestRepositoryTriggers, which tests the functionality of a repository trigger by sending data to the trigger target.   For information about how to use AWS CodeCommit, see the AWS CodeCommit User Guide",
      loadSpec: "aws/codecommit",
    },
    {
      name: "codeguru-reviewer",
      description:
        "This section provides documentation for the Amazon CodeGuru Reviewer API operations. CodeGuru Reviewer is a service that uses program analysis and machine learning to detect potential defects that are difficult for developers to find and recommendations to address them in your Java and Python code. By proactively detecting and providing recommendations for addressing code defects and implementing best practices, CodeGuru Reviewer improves the overall quality and maintainability of your code base during the code review stage. For more information about CodeGuru Reviewer, see the  Amazon CodeGuru Reviewer User Guide.   To improve the security of your CodeGuru Reviewer API calls, you can establish a private connection between your VPC and CodeGuru Reviewer by creating an interface VPC endpoint. For more information, see CodeGuru Reviewer and interface VPC endpoints (AWS PrivateLink) in the Amazon CodeGuru Reviewer User Guide",
      loadSpec: "aws/codeguru-reviewer",
    },
    {
      name: "codeguruprofiler",
      description:
        "This section provides documentation for the Amazon CodeGuru Profiler API operations.   Amazon CodeGuru Profiler collects runtime performance data from your live applications, and provides recommendations that can help you fine-tune your application performance. Using machine learning algorithms, CodeGuru Profiler can help you find your most expensive lines of code and suggest ways you can improve efficiency and remove CPU bottlenecks.   Amazon CodeGuru Profiler provides different visualizations of profiling data to help you identify what code is running on the CPU, see how much time is consumed, and suggest ways to reduce CPU utilization.   Amazon CodeGuru Profiler currently supports applications written in all Java virtual machine (JVM) languages and Python. While CodeGuru Profiler supports both visualizations and recommendations for applications written in Java, it can also generate visualizations and a subset of recommendations for applications written in other JVM languages and Python.   For more information, see What is Amazon CodeGuru Profiler in the Amazon CodeGuru Profiler User Guide",
      loadSpec: "aws/codeguruprofiler",
    },
    {
      name: "codepipeline",
      description:
        "AWS CodePipeline  Overview  This is the AWS CodePipeline API Reference. This guide provides descriptions of the actions and data types for AWS CodePipeline. Some functionality for your pipeline can only be configured through the API. For more information, see the AWS CodePipeline User Guide. You can use the AWS CodePipeline API to work with pipelines, stages, actions, and transitions.  Pipelines are models of automated release processes. Each pipeline is uniquely named, and consists of stages, actions, and transitions.  You can work with pipelines by calling:    CreatePipeline, which creates a uniquely named pipeline.    DeletePipeline, which deletes the specified pipeline.    GetPipeline, which returns information about the pipeline structure and pipeline metadata, including the pipeline Amazon Resource Name (ARN).    GetPipelineExecution, which returns information about a specific execution of a pipeline.    GetPipelineState, which returns information about the current state of the stages and actions of a pipeline.    ListActionExecutions, which returns action-level details for past executions. The details include full stage and action-level details, including individual action duration, status, any errors that occurred during the execution, and input and output artifact location details.    ListPipelines, which gets a summary of all of the pipelines associated with your account.    ListPipelineExecutions, which gets a summary of the most recent executions for a pipeline.    StartPipelineExecution, which runs the most recent revision of an artifact through the pipeline.    StopPipelineExecution, which stops the specified pipeline execution from continuing through the pipeline.    UpdatePipeline, which updates a pipeline with edits or changes to the structure of the pipeline.   Pipelines include stages. Each stage contains one or more actions that must complete before the next stage begins. A stage results in success or failure. If a stage fails, the pipeline stops at that stage and remains stopped until either a new version of an artifact appears in the source location, or a user takes action to rerun the most recent artifact through the pipeline. You can call GetPipelineState, which displays the status of a pipeline, including the status of stages in the pipeline, or GetPipeline, which returns the entire structure of the pipeline, including the stages of that pipeline. For more information about the structure of stages and actions, see AWS CodePipeline Pipeline Structure Reference. Pipeline stages include actions that are categorized into categories such as source or build actions performed in a stage of a pipeline. For example, you can use a source action to import artifacts into a pipeline from a source such as Amazon S3. Like stages, you do not work with actions directly in most cases, but you do define and interact with actions when working with pipeline operations such as CreatePipeline and GetPipelineState. Valid action categories are:   Source   Build   Test   Deploy   Approval   Invoke   Pipelines also include transitions, which allow the transition of artifacts from one stage to the next in a pipeline after the actions in one stage complete. You can work with transitions by calling:    DisableStageTransition, which prevents artifacts from transitioning to the next stage in a pipeline.    EnableStageTransition, which enables transition of artifacts between stages in a pipeline.     Using the API to integrate with AWS CodePipeline  For third-party integrators or developers who want to create their own integrations with AWS CodePipeline, the expected sequence varies from the standard API user. To integrate with AWS CodePipeline, developers need to work with the following items:  Jobs, which are instances of an action. For example, a job for a source action might import a revision of an artifact from a source.  You can work with jobs by calling:    AcknowledgeJob, which confirms whether a job worker has received the specified job.    GetJobDetails, which returns the details of a job.    PollForJobs, which determines whether there are any jobs to act on.    PutJobFailureResult, which provides details of a job failure.     PutJobSuccessResult, which provides details of a job success.    Third party jobs, which are instances of an action created by a partner action and integrated into AWS CodePipeline. Partner actions are created by members of the AWS Partner Network. You can work with third party jobs by calling:    AcknowledgeThirdPartyJob, which confirms whether a job worker has received the specified job.    GetThirdPartyJobDetails, which requests the details of a job for a partner action.    PollForThirdPartyJobs, which determines whether there are any jobs to act on.     PutThirdPartyJobFailureResult, which provides details of a job failure.    PutThirdPartyJobSuccessResult, which provides details of a job success",
      loadSpec: "aws/codepipeline",
    },
    {
      name: "codestar",
      description:
        "AWS CodeStar This is the API reference for AWS CodeStar. This reference provides descriptions of the operations and data types for the AWS CodeStar API along with usage examples. You can use the AWS CodeStar API to work with: Projects and their resources, by calling the following:    DeleteProject, which deletes a project.    DescribeProject, which lists the attributes of a project.    ListProjects, which lists all projects associated with your AWS account.    ListResources, which lists the resources associated with a project.    ListTagsForProject, which lists the tags associated with a project.    TagProject, which adds tags to a project.    UntagProject, which removes tags from a project.    UpdateProject, which updates the attributes of a project.   Teams and team members, by calling the following:    AssociateTeamMember, which adds an IAM user to the team for a project.    DisassociateTeamMember, which removes an IAM user from the team for a project.    ListTeamMembers, which lists all the IAM users in the team for a project, including their roles and attributes.    UpdateTeamMember, which updates a team member's attributes in a project.   Users, by calling the following:    CreateUserProfile, which creates a user profile that contains data associated with the user across all projects.    DeleteUserProfile, which deletes all user profile information across all projects.    DescribeUserProfile, which describes the profile of a user.    ListUserProfiles, which lists all user profiles.    UpdateUserProfile, which updates the profile for a user",
      loadSpec: "aws/codestar",
    },
    {
      name: "codestar-connections",
      description:
        "AWS CodeStar Connections This AWS CodeStar Connections API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Connections API. You can use the connections API to work with connections and installations.  Connections are configurations that you use to connect AWS resources to external code repositories. Each connection is a resource that can be given to services such as CodePipeline to connect to a third-party repository such as Bitbucket. For example, you can add the connection in CodePipeline so that it triggers your pipeline when a code change is made to your third-party code repository. Each connection is named and associated with a unique ARN that is used to reference the connection. When you create a connection, the console initiates a third-party connection handshake. Installations are the apps that are used to conduct this handshake. For example, the installation for the Bitbucket provider type is the Bitbucket app. When you create a connection, you can choose an existing installation or create one. When you want to create a connection to an installed provider type such as GitHub Enterprise Server, you create a host for your connections. You can work with connections by calling:    CreateConnection, which creates a uniquely named connection that can be referenced by services such as CodePipeline.    DeleteConnection, which deletes the specified connection.    GetConnection, which returns information about the connection, including the connection status.    ListConnections, which lists the connections associated with your account.   You can work with hosts by calling:    CreateHost, which creates a host that represents the infrastructure where your provider is installed.    DeleteHost, which deletes the specified host.    GetHost, which returns information about the host, including the setup status.    ListHosts, which lists the hosts associated with your account.   You can work with tags in AWS CodeStar Connections by calling the following:    ListTagsForResource, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeStar Connections.    TagResource, which adds or updates tags for a resource in AWS CodeStar Connections.    UntagResource, which removes tags for a resource in AWS CodeStar Connections.   For information about how to use AWS CodeStar Connections, see the Developer Tools User Guide",
      loadSpec: "aws/codestar-connections",
    },
    {
      name: "codestar-notifications",
      description:
        "This AWS CodeStar Notifications API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Notifications API. You can use the AWS CodeStar Notifications API to work with the following objects: Notification rules, by calling the following:     CreateNotificationRule, which creates a notification rule for a resource in your account.     DeleteNotificationRule, which deletes a notification rule.     DescribeNotificationRule, which provides information about a notification rule.     ListNotificationRules, which lists the notification rules associated with your account.     UpdateNotificationRule, which changes the name, events, or targets associated with a notification rule.     Subscribe, which subscribes a target to a notification rule.     Unsubscribe, which removes a target from a notification rule.    Targets, by calling the following:     DeleteTarget, which removes a notification rule target (SNS topic) from a notification rule.     ListTargets, which lists the targets associated with a notification rule.    Events, by calling the following:     ListEventTypes, which lists the event types you can include in a notification rule.    Tags, by calling the following:     ListTagsForResource, which lists the tags already associated with a notification rule in your account.     TagResource, which associates a tag you provide with a notification rule in your account.     UntagResource, which removes a tag from a notification rule in your account.     For information about how to use AWS CodeStar Notifications, see link in the CodeStarNotifications User Guide",
      loadSpec: "aws/codestar-notifications",
    },
    {
      name: "cognito-identity",
      description:
        "Amazon Cognito Federated Identities Amazon Cognito Federated Identities is a web service that delivers scoped temporary credentials to mobile devices and other untrusted environments. It uniquely identifies a device and supplies the user with a consistent identity over the lifetime of an application. Using Amazon Cognito Federated Identities, you can enable authentication with one or more third-party identity providers (Facebook, Google, or Login with Amazon) or an Amazon Cognito user pool, and you can also choose to support unauthenticated access from your app. Cognito delivers a unique identifier for each user and acts as an OpenID token provider trusted by AWS Security Token Service (STS) to access temporary, limited-privilege AWS credentials. For a description of the authentication flow from the Amazon Cognito Developer Guide see Authentication Flow. For more information see Amazon Cognito Federated Identities",
      loadSpec: "aws/cognito-identity",
    },
    {
      name: "cognito-idp",
      description:
        "Using the Amazon Cognito User Pools API, you can create a user pool to manage directories and users. You can authenticate a user to obtain tokens related to user identity and access policies. This API reference provides information about user pools in Amazon Cognito User Pools. For more information, see the Amazon Cognito Documentation",
      loadSpec: "aws/cognito-idp",
    },
    {
      name: "cognito-sync",
      description:
        "Amazon Cognito Sync Amazon Cognito Sync provides an AWS service and client library that enable cross-device syncing of application-related user data. High-level client libraries are available for both iOS and Android. You can use these libraries to persist data locally so that it's available even if the device is offline. Developer credentials don't need to be stored on the mobile device to access the service. You can use Amazon Cognito to obtain a normalized user ID and credentials. User data is persisted in a dataset that can store up to 1 MB of key-value pairs, and you can have up to 20 datasets per user identity. With Amazon Cognito Sync, the data stored for each identity is accessible only to credentials assigned to that identity. In order to use the Cognito Sync service, you need to make API calls using credentials retrieved with Amazon Cognito Identity service. If you want to use Cognito Sync in an Android or iOS application, you will probably want to make API calls via the AWS Mobile SDK. To learn more, see the Developer Guide for Android and the Developer Guide for iOS",
      loadSpec: "aws/cognito-sync",
    },
    {
      name: "comprehend",
      description:
        "Amazon Comprehend is an AWS service for gaining insight into the content of documents. Use these actions to determine the topics contained in your documents, the topics they discuss, the predominant sentiment expressed in them, the predominant language used, and more",
      loadSpec: "aws/comprehend",
    },
    {
      name: "comprehendmedical",
      description:
        "Amazon Comprehend Medical extracts structured information from unstructured clinical text. Use these actions to gain insight in your documents",
      loadSpec: "aws/comprehendmedical",
    },
    {
      name: "compute-optimizer",
      description:
        "AWS Compute Optimizer is a service that analyzes the configuration and utilization metrics of your AWS compute resources, such as EC2 instances, Auto Scaling groups, AWS Lambda functions, and Amazon EBS volumes. It reports whether your resources are optimal, and generates optimization recommendations to reduce the cost and improve the performance of your workloads. Compute Optimizer also provides recent utilization metric data, as well as projected utilization metric data for the recommendations, which you can use to evaluate which recommendation provides the best price-performance trade-off. The analysis of your usage patterns can help you decide when to move or resize your running resources, and still meet your performance and capacity requirements. For more information about Compute Optimizer, including the required permissions to use the service, see the AWS Compute Optimizer User Guide",
      loadSpec: "aws/compute-optimizer",
    },
    {
      name: "connect",
      description:
        "Amazon Connect is a cloud-based contact center solution that you use to set up and manage a customer contact center and provide reliable customer engagement at any scale. Amazon Connect provides metrics and real-time reporting that enable you to optimize contact routing. You can also resolve customer issues more efficiently by getting customers in touch with the appropriate agents. There are limits to the number of Amazon Connect resources that you can create. There are also limits to the number of requests that you can make per second. For more information, see Amazon Connect Service Quotas in the Amazon Connect Administrator Guide. You can connect programmatically to an AWS service by using an endpoint. For a list of Amazon Connect endpoints, see Amazon Connect Endpoints.  Working with contact flows? Check out the Amazon Connect Flow language",
      loadSpec: "aws/connect",
    },
    {
      name: "connect-contact-lens",
      description:
        "Contact Lens for Amazon Connect enables you to analyze conversations between customer and agents, by using speech transcription, natural language processing, and intelligent search capabilities. It performs sentiment analysis, detects issues, and enables you to automatically categorize contacts. Contact Lens for Amazon Connect provides both real-time and post-call analytics of customer-agent conversations. For more information, see Analyze conversations using Contact Lens in the Amazon Connect Administrator Guide",
      loadSpec: "aws/connect-contact-lens",
    },
    {
      name: "connectparticipant",
      description:
        "Amazon Connect is a cloud-based contact center solution that makes it easy to set up and manage a customer contact center and provide reliable customer engagement at any scale. Amazon Connect enables customer contacts through voice or chat. The APIs described here are used by chat participants, such as agents and customers",
      loadSpec: "aws/connectparticipant",
    },
    {
      name: "cur",
      description:
        "The AWS Cost and Usage Report API enables you to programmatically create, query, and delete AWS Cost and Usage report definitions. AWS Cost and Usage reports track the monthly AWS costs and usage associated with your AWS account. The report contains line items for each unique combination of AWS product, usage type, and operation that your AWS account uses. You can configure the AWS Cost and Usage report to show only the data that you want, using the AWS Cost and Usage API. Service Endpoint The AWS Cost and Usage Report API provides the following endpoint:   cur.us-east-1.amazonaws.com",
      loadSpec: "aws/cur",
    },
    {
      name: "customer-profiles",
      description:
        "Amazon Connect Customer Profiles Welcome to the Amazon Connect Customer Profiles API Reference. This guide provides information about the Amazon Connect Customer Profiles API, including supported operations, data types, parameters, and schemas. Amazon Connect Customer Profiles is a unified customer profile for your contact center that has pre-built connectors powered by AppFlow that make it easy to combine customer information from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center. If you're new to Amazon Connect , you might find it helpful to also review the Amazon Connect Administrator Guide",
      loadSpec: "aws/customer-profiles",
    },
    {
      name: "databrew",
      description:
        "AWS Glue DataBrew is a visual, cloud-scale data-preparation service. DataBrew simplifies data preparation tasks, targeting data issues that are hard to spot and time-consuming to fix. DataBrew empowers users of all technical levels to visualize the data and perform one-click data transformations, with no coding required",
      loadSpec: "aws/databrew",
    },
    {
      name: "dataexchange",
      description:
        "AWS Data Exchange is a service that makes it easy for AWS customers to exchange data in the cloud. You can use the AWS Data Exchange APIs to create, update, manage, and access file-based data set in the AWS Cloud.As a subscriber, you can view and access the data sets that you have an entitlement to through a subscription. You can use the APIS to download or copy your entitled data sets to Amazon S3 for use across a variety of AWS analytics and machine learning services.As a provider, you can create and manage your data sets that you would like to publish to a product. Being able to package and provide your data sets into products requires a few steps to determine eligibility. For more information, visit the AWS Data Exchange User Guide.A data set is a collection of data that can be changed or updated over time. Data sets can be updated using revisions, which represent a new version or incremental change to a data set.  A revision contains one or more assets. An asset in AWS Data Exchange is a piece of data that can be stored as an Amazon S3 object. The asset can be a structured data file, an image file, or some other data file. Jobs are asynchronous import or export operations used to create or copy assets",
      loadSpec: "aws/dataexchange",
    },
    {
      name: "datapipeline",
      description:
        "AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline handles the details of scheduling and ensuring that data dependencies are met so that your application can focus on processing the data. AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner. AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide custom data management. AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline and define data sources, schedules, dependencies, and the transforms to be performed on the data. Use the second set in your task runner application to receive the next task ready for processing. The logic for performing the task, such as querying the data, running data analysis, or converting the data from one format to another, is contained within the task runner. The task runner performs the task assigned to it by the web service, reporting progress to the web service as it does so. When the task is done, the task runner reports the final success or failure of the task to the web service",
      loadSpec: "aws/datapipeline",
    },
    {
      name: "datasync",
      description:
        "AWS DataSync AWS DataSync is a managed data transfer service that makes it simpler for you to automate moving data between on-premises storage and Amazon Simple Storage Service (Amazon S3) or Amazon Elastic File System (Amazon EFS).  This API interface reference for AWS DataSync contains documentation for a programming interface that you can use to manage AWS DataSync",
      loadSpec: "aws/datasync",
    },
    {
      name: "dax",
      description:
        "DAX is a managed caching service engineered for Amazon DynamoDB. DAX dramatically speeds up database reads by caching frequently-accessed data from DynamoDB, so applications can access that data with sub-millisecond latency. You can create a DAX cluster easily, using the AWS Management Console. With a few simple modifications to your code, your application can begin taking advantage of the DAX cluster and realize significant improvements in read performance",
      loadSpec: "aws/dax",
    },
    {
      name: "detective",
      description:
        'Detective uses machine learning and purpose-built visualizations to help you analyze and investigate security issues across your Amazon Web Services (AWS) workloads. Detective automatically extracts time-based events such as login attempts, API calls, and network traffic from AWS CloudTrail and Amazon Virtual Private Cloud (Amazon VPC) flow logs. It also extracts findings detected by Amazon GuardDuty. The Detective API primarily supports the creation and management of behavior graphs. A behavior graph contains the extracted data from a set of member accounts, and is created and managed by an administrator account. Every behavior graph is specific to a Region. You can only use the API to manage graphs that belong to the Region that is associated with the currently selected endpoint. A Detective administrator account can use the Detective API to do the following:   Enable and disable Detective. Enabling Detective creates a new behavior graph.   View the list of member accounts in a behavior graph.   Add member accounts to a behavior graph.   Remove member accounts from a behavior graph.   A member account can use the Detective API to do the following:   View the list of behavior graphs that they are invited to.   Accept an invitation to contribute to a behavior graph.   Decline an invitation to contribute to a behavior graph.   Remove their account from a behavior graph.   All API actions are logged as CloudTrail events. See Logging Detective API Calls with CloudTrail.  We replaced the term "master account" with the term "administrator account." An administrator account is used to centrally manage multiple accounts. In the case of Detective, the administrator account manages the accounts in their behavior graph',
      loadSpec: "aws/detective",
    },
    {
      name: "devicefarm",
      description:
        "Welcome to the AWS Device Farm API documentation, which contains APIs for:   Testing on desktop browsers  Device Farm makes it possible for you to test your web applications on desktop browsers using Selenium. The APIs for desktop browser testing contain TestGrid in their names. For more information, see Testing Web Applications on Selenium with Device Farm.   Testing on real mobile devices Device Farm makes it possible for you to test apps on physical phones, tablets, and other devices in the cloud. For more information, see the Device Farm Developer Guide",
      loadSpec: "aws/devicefarm",
    },
    {
      name: "devops-guru",
      description:
        "Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in business critical operational applications. You specify the AWS resources that you want DevOps Guru to cover, then the Amazon CloudWatch metrics and AWS CloudTrail events related to those resources are analyzed. When anomalous behavior is detected, DevOps Guru creates an insight that includes recommendations, related events, and related metrics that can help you improve your operational applications. For more information, see What is Amazon DevOps Guru.   You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight is created. You can also enable DevOps Guru to generate an OpsItem in AWS Systems Manager for each insight to help you manage and track your work addressing insights.   To learn about the DevOps Guru workflow, see How DevOps Guru works. To learn about DevOps Guru concepts, see Concepts in DevOps Guru",
      loadSpec: "aws/devops-guru",
    },
    {
      name: "directconnect",
      description:
        "AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. With this connection in place, you can create virtual interfaces directly to the AWS cloud (for example, to Amazon EC2 and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A connection provides access to all AWS Regions except the China (Beijing) and (China) Ningxia Regions. AWS resources in the China Regions can only be accessed through locations associated with those Regions",
      loadSpec: "aws/directconnect",
    },
    {
      name: "discovery",
      description:
        "AWS Application Discovery Service AWS Application Discovery Service helps you plan application migration projects. It automatically identifies servers, virtual machines (VMs), and network dependencies in your on-premises data centers. For more information, see the AWS Application Discovery Service FAQ. Application Discovery Service offers three ways of performing discovery and collecting data about your on-premises servers:    Agentless discovery is recommended for environments that use VMware vCenter Server. This mode doesn't require you to install an agent on each host. It does not work in non-VMware environments.   Agentless discovery gathers server information regardless of the operating systems, which minimizes the time required for initial on-premises infrastructure assessment.   Agentless discovery doesn't collect information about network dependencies, only agent-based discovery collects that information.        Agent-based discovery collects a richer set of data than agentless discovery by using the AWS Application Discovery Agent, which you install on one or more hosts in your data center.    The agent captures infrastructure and application information, including an inventory of running processes, system performance information, resource utilization, and network dependencies.   The information collected by agents is secured at rest and in transit to the Application Discovery Service database in the cloud.         AWS Partner Network (APN) solutions integrate with Application Discovery Service, enabling you to import details of your on-premises environment directly into Migration Hub without using the discovery connector or discovery agent.   Third-party application discovery tools can query AWS Application Discovery Service, and they can write to the Application Discovery Service database using the public API.   In this way, you can import data into Migration Hub and view it, so that you can associate applications with servers and track migrations.      Recommendations  We recommend that you use agent-based discovery for non-VMware environments, and whenever you want to collect information about network dependencies. You can run agent-based and agentless discovery simultaneously. Use agentless discovery to complete the initial infrastructure assessment quickly, and then install agents on select hosts to collect additional information.  Working With This Guide  This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for Application Discovery Service. The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see AWS SDKs.    Remember that you must set your Migration Hub home region before you call any of these APIs.   You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a HomeRegionNotSetException error is returned.   API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.   Although it is unlikely, the Migration Hub home region could change. If you call APIs outside the home region, an InvalidInputException is returned.   You must call GetHomeRegion to obtain the latest Migration Hub home region.    This guide is intended for use with the AWS Application Discovery Service User Guide.  All data is handled according to the AWS Privacy Policy. You can operate Application Discovery Service offline to inspect collected data before it is shared with the service",
      loadSpec: "aws/discovery",
    },
    {
      name: "dlm",
      description:
        "Amazon Data Lifecycle Manager With Amazon Data Lifecycle Manager, you can manage the lifecycle of your AWS resources. You create lifecycle policies, which are used to automate operations on the specified resources. Amazon DLM supports Amazon EBS volumes and snapshots. For information about using Amazon DLM with Amazon EBS, see Automating the Amazon EBS Snapshot Lifecycle in the Amazon EC2 User Guide",
      loadSpec: "aws/dlm",
    },
    {
      name: "dms",
      description:
        "AWS Database Migration Service AWS Database Migration Service (AWS DMS) can migrate your data to and from the most widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to MySQL or SQL Server to PostgreSQL. For more information about AWS DMS, see What Is AWS Database Migration Service? in the AWS Database Migration User Guide",
      loadSpec: "aws/dms",
    },
    {
      name: "docdb",
      description: "Amazon DocumentDB API documentation",
      loadSpec: "aws/docdb",
    },
    {
      name: "ds",
      description:
        "AWS Directory Service AWS Directory Service is a web service that makes it easy for you to setup and run directories in the AWS cloud, or connect your AWS resources with an existing on-premises Microsoft Active Directory. This guide provides detailed information about AWS Directory Service operations, data types, parameters, and errors. For information about AWS Directory Services features, see AWS Directory Service and the AWS Directory Service Administration Guide.  AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWS Directory Service and other AWS services. For more information about the AWS SDKs, including how to download and install them, see Tools for Amazon Web Services",
      loadSpec: "aws/ds",
    },
    {
      name: "dynamodb",
      description:
        "Amazon DynamoDB Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database, so that you don't have to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling. With DynamoDB, you can create database tables that can store and retrieve any amount of data, and serve any level of request traffic. You can scale up or scale down your tables' throughput capacity without downtime or performance degradation, and use the AWS Management Console to monitor resource utilization and performance metrics. DynamoDB automatically spreads the data and traffic for your tables over a sufficient number of servers to handle your throughput and storage requirements, while maintaining consistent and fast performance. All of your data is stored on solid state disks (SSDs) and automatically replicated across multiple Availability Zones in an AWS region, providing built-in high availability and data durability",
      loadSpec: "aws/dynamodb",
    },
    {
      name: "dynamodbstreams",
      description:
        "Amazon DynamoDB Amazon DynamoDB Streams provides API actions for accessing streams and processing stream records. To learn more about application development with Streams, see Capturing Table Activity with DynamoDB Streams in the Amazon DynamoDB Developer Guide",
      loadSpec: "aws/dynamodbstreams",
    },
    {
      name: "ebs",
      description:
        "You can use the Amazon Elastic Block Store (Amazon EBS) direct APIs to create EBS snapshots, write data directly to your snapshots, read data on your snapshots, and identify the differences or changes between two snapshots. If you\u2019re an independent software vendor (ISV) who offers backup services for Amazon EBS, the EBS direct APIs make it more efficient and cost-effective to track incremental changes on your EBS volumes through snapshots. This can be done without having to create new volumes from snapshots, and then use Amazon Elastic Compute Cloud (Amazon EC2) instances to compare the differences. You can create incremental snapshots directly from data on-premises into EBS volumes and the cloud to use for quick disaster recovery. With the ability to write and read snapshots, you can write your on-premises data to an EBS snapshot during a disaster. Then after recovery, you can restore it back to AWS or on-premises from the snapshot. You no longer need to build and maintain complex mechanisms to copy data to and from Amazon EBS. This API reference provides detailed information about the actions, data types, parameters, and errors of the EBS direct APIs. For more information about the elements that make up the EBS direct APIs, and examples of how to use them effectively, see Accessing the Contents of an EBS Snapshot in the Amazon Elastic Compute Cloud User Guide. For more information about the supported AWS Regions, endpoints, and service quotas for the EBS direct APIs, see Amazon Elastic Block Store Endpoints and Quotas in the AWS General Reference",
      loadSpec: "aws/ebs",
    },
    {
      name: "ec2",
      description:
        "Amazon Elastic Compute Cloud Amazon Elastic Compute Cloud (Amazon EC2) provides secure and resizable computing capacity in the AWS Cloud. Using Amazon EC2 eliminates the need to invest in hardware up front, so you can develop and deploy applications faster. Amazon Virtual Private Cloud (Amazon VPC) enables you to provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you've defined. Amazon Elastic Block Store (Amazon EBS) provides block level storage volumes for use with EC2 instances. EBS volumes are highly available and reliable storage volumes that can be attached to any running instance and used like a hard drive. To learn more, see the following resources:   Amazon EC2: AmazonEC2 product page, Amazon EC2 documentation    Amazon EBS: Amazon EBS product page, Amazon EBS documentation    Amazon VPC: Amazon VPC product page, Amazon VPC documentation    AWS VPN: AWS VPN product page, AWS VPN documentation",
      loadSpec: "aws/ec2",
    },
    {
      name: "ec2-instance-connect",
      description:
        "Amazon EC2 Instance Connect enables system administrators to publish one-time use SSH public keys to EC2, providing users a simple and secure way to connect to their instances",
      loadSpec: "aws/ec2-instance-connect",
    },
    {
      name: "ecr",
      description:
        "Amazon Elastic Container Registry Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Customers can use the familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports private repositories with resource-based permissions using IAM so that specific users or Amazon EC2 instances can access repositories and images",
      loadSpec: "aws/ecr",
    },
    {
      name: "ecr-public",
      description:
        "Amazon Elastic Container Registry Public Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Amazon ECR provides both public and private registries to host your container images. You can use the familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports public repositories with this API. For information about the Amazon ECR API for private repositories, see Amazon Elastic Container Registry API Reference",
      loadSpec: "aws/ecr-public",
    },
    {
      name: "ecs",
      description:
        "Amazon Elastic Container Service Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes it easy to run, stop, and manage Docker containers on a cluster. You can host your cluster on a serverless infrastructure that is managed by Amazon ECS by launching your services or tasks on AWS Fargate. For more control, you can host your tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) instances that you manage. Amazon ECS makes it easy to launch and stop container-based applications with simple API calls, allows you to get the state of your cluster from a centralized service, and gives you access to many familiar Amazon EC2 features. You can use Amazon ECS to schedule the placement of containers across your cluster based on your resource needs, isolation policies, and availability requirements. Amazon ECS eliminates the need for you to operate your own cluster management and configuration management systems or worry about scaling your management infrastructure",
      loadSpec: "aws/ecs",
    },
    {
      name: "efs",
      description:
        "Amazon Elastic File System Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use with Amazon EC2 instances in the AWS Cloud. With Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you add and remove files, so your applications have the storage they need, when they need it. For more information, see the User Guide",
      loadSpec: "aws/efs",
    },
    {
      name: "eks",
      description:
        "Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications.  Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use all the existing plugins and tooling from the Kubernetes community. Applications running on Amazon EKS are fully compatible with applications running on any standard Kubernetes environment, whether running in on-premises data centers or public clouds. This means that you can easily migrate any standard Kubernetes application to Amazon EKS without any code modification required",
      loadSpec: "aws/eks",
    },
    {
      name: "elastic-inference",
      description: "Elastic Inference public APIs",
      loadSpec: "aws/elastic-inference",
    },
    {
      name: "elasticache",
      description:
        "Amazon ElastiCache Amazon ElastiCache is a web service that makes it easier to set up, operate, and scale a distributed cache in the cloud. With ElastiCache, customers get all of the benefits of a high-performance, in-memory cache with less of the administrative burden involved in launching and managing a distributed cache. The service makes setup, scaling, and cluster failure handling much simpler than in a self-managed cache deployment. In addition, through integration with Amazon CloudWatch, customers get enhanced visibility into the key performance statistics associated with their cache and can receive alarms if a part of their cache runs hot",
      loadSpec: "aws/elasticache",
    },
    {
      name: "elasticbeanstalk",
      description:
        "AWS Elastic Beanstalk AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable, fault-tolerant applications running on the Amazon Web Services cloud. For more information about this product, go to the AWS Elastic Beanstalk details page. The location of the latest AWS Elastic Beanstalk WSDL is https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl. To install the Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools that enable you to access the API, go to Tools for Amazon Web Services.  Endpoints  For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to Regions and Endpoints in the Amazon Web Services Glossary",
      loadSpec: "aws/elasticbeanstalk",
    },
    {
      name: "elastictranscoder",
      description:
        "AWS Elastic Transcoder Service The AWS Elastic Transcoder Service",
      loadSpec: "aws/elastictranscoder",
    },
    {
      name: "elb",
      description:
        "Elastic Load Balancing A load balancer can distribute incoming traffic across your EC2 instances. This enables you to increase the availability of your application. The load balancer also monitors the health of its registered instances and ensures that it routes traffic only to healthy instances. You configure your load balancer to accept incoming traffic by specifying one or more listeners, which are configured with a protocol and port number for connections from clients to the load balancer and a protocol and port number for connections from the load balancer to the instances. Elastic Load Balancing supports three types of load balancers: Application Load Balancers, Network Load Balancers, and Classic Load Balancers. You can select a load balancer based on your application needs. For more information, see the Elastic Load Balancing User Guide. This reference covers the 2012-06-01 API, which supports Classic Load Balancers. The 2015-12-01 API supports Application Load Balancers and Network Load Balancers. To get started, create a load balancer with one or more listeners using CreateLoadBalancer. Register your instances with the load balancer using RegisterInstancesWithLoadBalancer. All Elastic Load Balancing operations are idempotent, which means that they complete at most one time. If you repeat an operation, it succeeds with a 200 OK response code",
      loadSpec: "aws/elb",
    },
    {
      name: "elbv2",
      description:
        "Elastic Load Balancing A load balancer distributes incoming traffic across targets, such as your EC2 instances. This enables you to increase the availability of your application. The load balancer also monitors the health of its registered targets and ensures that it routes traffic only to healthy targets. You configure your load balancer to accept incoming traffic by specifying one or more listeners, which are configured with a protocol and port number for connections from clients to the load balancer. You configure a target group with a protocol and port number for connections from the load balancer to the targets, and with health check settings to be used when checking the health status of the targets. Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, Gateway Load Balancers, and Classic Load Balancers. This reference covers the following load balancer types:   Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS.   Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP.   Gateway Load Balancer - Operates at the network layer (layer 3).   For more information, see the Elastic Load Balancing User Guide. All Elastic Load Balancing operations are idempotent, which means that they complete at most one time. If you repeat an operation, it succeeds",
      loadSpec: "aws/elbv2",
    },
    {
      name: "emr",
      description:
        "Amazon EMR is a web service that makes it easier to process large amounts of data efficiently. Amazon EMR uses Hadoop processing combined with several AWS services to do tasks such as web indexing, data mining, log file analysis, machine learning, scientific simulation, and data warehouse management",
      loadSpec: "aws/emr",
    },
    {
      name: "emr-containers",
      description:
        'Amazon EMR on EKS provides a deployment option for Amazon EMR that allows you to run open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS). With this deployment option, you can focus on running analytics workloads while Amazon EMR on EKS builds, configures, and manages containers for open-source applications. For more information about Amazon EMR on EKS concepts and tasks, see What is Amazon EMR on EKS.  Amazon EMR containers is the API name for Amazon EMR on EKS. The emr-containers prefix is used in the following scenarios:    It is the prefix in the CLI commands for Amazon EMR on EKS. For example, aws emr-containers start-job-run.   It is the prefix before IAM policy actions for Amazon EMR on EKS. For example, "Action": [ "emr-containers:StartJobRun"]. For more information, see Policy actions for Amazon EMR on EKS.   It is the prefix used in Amazon EMR on EKS service endpoints. For example, emr-containers.us-east-2.amazonaws.com. For more information, see Amazon EMR on EKS Service Endpoints',
      loadSpec: "aws/emr-containers",
    },
    {
      name: "es",
      description:
        "Amazon Elasticsearch Configuration Service Use the Amazon Elasticsearch Configuration API to create, configure, and manage Elasticsearch domains. For sample code that uses the Configuration API, see the Amazon Elasticsearch Service Developer Guide. The guide also contains sample code for sending signed HTTP requests to the Elasticsearch APIs. The endpoint for configuration service requests is region-specific: es.region.amazonaws.com. For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see Regions and Endpoints",
      loadSpec: "aws/es",
    },
    {
      name: "events",
      description:
        "Amazon EventBridge helps you to respond to state changes in your AWS resources. When your resources change state, they automatically send events into an event stream. You can create rules that match selected events in the stream and route them to targets to take action. You can also use rules to take action on a predetermined schedule. For example, you can configure rules to:   Automatically invoke an AWS Lambda function to update DNS entries when an event notifies you that Amazon EC2 instance enters the running state.   Direct specific API records from AWS CloudTrail to an Amazon Kinesis data stream for detailed analysis of potential security or availability risks.   Periodically invoke a built-in target to create a snapshot of an Amazon EBS volume.   For more information about the features of Amazon EventBridge, see the Amazon EventBridge User Guide",
      loadSpec: "aws/events",
    },
    {
      name: "firehose",
      description:
        "Amazon Kinesis Data Firehose API Reference Amazon Kinesis Data Firehose is a fully managed service that delivers real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon Elasticsearch Service (Amazon ES), Amazon Redshift, and Splunk",
      loadSpec: "aws/firehose",
    },
    {
      name: "fis",
      description:
        "AWS Fault Injection Simulator is a managed service that enables you to perform fault injection experiments on your AWS workloads. For more information, see the AWS Fault Injection Simulator User Guide",
      loadSpec: "aws/fis",
    },
    {
      name: "fms",
      description:
        "AWS Firewall Manager This is the AWS Firewall Manager API Reference. This guide is for developers who need detailed information about the AWS Firewall Manager API actions, data types, and errors. For detailed information about AWS Firewall Manager features, see the AWS Firewall Manager Developer Guide. Some API actions require explicit resource permissions. For information, see the developer guide topic Firewall Manager required permissions for API actions",
      loadSpec: "aws/fms",
    },
    {
      name: "forecast",
      description:
        "Provides APIs for creating and managing Amazon Forecast resources",
      loadSpec: "aws/forecast",
    },
    {
      name: "forecastquery",
      description:
        "Provides APIs for creating and managing Amazon Forecast resources",
      loadSpec: "aws/forecastquery",
    },
    {
      name: "frauddetector",
      description:
        "This is the Amazon Fraud Detector API Reference. This guide is for developers who need detailed information about Amazon Fraud Detector API actions, data types, and errors. For more information about Amazon Fraud Detector features, see the Amazon Fraud Detector User Guide",
      loadSpec: "aws/frauddetector",
    },
    {
      name: "fsx",
      description:
        "Amazon FSx is a fully managed service that makes it easy for storage and application administrators to launch and use shared file storage",
      loadSpec: "aws/fsx",
    },
    {
      name: "gamelift",
      description:
        "Amazon GameLift Service GameLift provides solutions for hosting session-based multiplayer game servers in the cloud, including tools for deploying, operating, and scaling game servers. Built on AWS global computing infrastructure, GameLift helps you deliver high-performance, high-reliability, low-cost game servers while dynamically scaling your resource usage to meet player demand.   About GameLift solutions  Get more information on these GameLift solutions in the GameLift Developer Guide.   GameLift managed hosting -- GameLift offers a fully managed service to set up and maintain computing machines for hosting, manage game session and player session life cycle, and handle security, storage, and performance tracking. You can use automatic scaling tools to balance player demand and hosting costs, configure your game session management to minimize player latency, and add FlexMatch for matchmaking.   Managed hosting with Realtime Servers -- With GameLift Realtime Servers, you can quickly configure and set up ready-to-go game servers for your game. Realtime Servers provides a game server framework with core GameLift infrastructure already built in. Then use the full range of GameLift managed hosting features, including FlexMatch, for your game.   GameLift FleetIQ -- Use GameLift FleetIQ as a standalone service while hosting your games using EC2 instances and Auto Scaling groups. GameLift FleetIQ provides optimizations for game hosting, including boosting the viability of low-cost Spot Instances gaming. For a complete solution, pair the GameLift FleetIQ and FlexMatch standalone services.   GameLift FlexMatch -- Add matchmaking to your game hosting solution. FlexMatch is a customizable matchmaking service for multiplayer games. Use FlexMatch as integrated with GameLift managed hosting or incorporate FlexMatch as a standalone service into your own hosting solution.    About this API Reference  This reference guide describes the low-level service API for Amazon GameLift. With each topic in this guide, you can find links to language-specific SDK guides and the AWS CLI reference. Useful links:    GameLift API operations listed by tasks      GameLift tools and resources",
      loadSpec: "aws/gamelift",
    },
    {
      name: "glacier",
      description:
        'Amazon S3 Glacier (Glacier) is a storage solution for "cold data." Glacier is an extremely low-cost storage service that provides secure, durable, and easy-to-use storage for data backup and archival. With Glacier, customers can store their data cost effectively for months, years, or decades. Glacier also enables customers to offload the administrative burdens of operating and scaling storage to AWS, so they don\'t have to worry about capacity planning, hardware provisioning, data replication, hardware failure and recovery, or time-consuming hardware migrations. Glacier is a great storage choice when low storage cost is paramount and your data is rarely retrieved. If your application requires fast or frequent access to your data, consider using Amazon S3. For more information, see Amazon Simple Storage Service (Amazon S3). You can store any kind of data in any format. There is no maximum limit on the total amount of data you can store in Glacier. If you are a first-time user of Glacier, we recommend that you begin by reading the following sections in the Amazon S3 Glacier Developer Guide:    What is Amazon S3 Glacier - This section of the Developer Guide describes the underlying data model, the operations it supports, and the AWS SDKs that you can use to interact with the service.    Getting Started with Amazon S3 Glacier - The Getting Started section walks you through the process of creating a vault, uploading archives, creating jobs to download archives, retrieving the job output, and deleting archives',
      loadSpec: "aws/glacier",
    },
    {
      name: "globalaccelerator",
      description:
        "AWS Global Accelerator This is the AWS Global Accelerator API Reference. This guide is for developers who need detailed information about AWS Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the AWS Global Accelerator Developer Guide. AWS Global Accelerator is a service in which you create accelerators to improve the performance of your applications for local and global users. Depending on the type of accelerator you choose, you can gain additional benefits.    By using a standard accelerator, you can improve availability of your internet applications that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic to optimal endpoints over the AWS global network.    For other scenarios, you might choose a custom routing accelerator. With a custom routing accelerator, you can use application logic to directly map one or more users to a specific endpoint among many endpoints.    Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the US West (Oregon) Region to create or update accelerators.  By default, Global Accelerator provides you with two static IP addresses that you associate with your accelerator. With a standard accelerator, instead of using the IP addresses that Global Accelerator provides, you can configure these entry points to be IPv4 addresses from your own IP address ranges that you bring to Global Accelerator. The static IP addresses are anycast from the AWS edge network. For a standard accelerator, they distribute incoming application traffic across multiple endpoint resources in multiple AWS Regions, which increases the availability of your applications. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses that are located in one AWS Region or multiple Regions. For custom routing accelerators, you map traffic that arrives to the static IP addresses to specific Amazon EC2 servers in endpoints that are virtual private cloud (VPC) subnets.  The static IP addresses remain assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you delete an accelerator, you lose the static IP addresses that are assigned to it, so you can no longer route traffic by using them. You can use IAM policies like tag-based permissions with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see Tag-based policies.  For standard accelerators, Global Accelerator uses the AWS global network to route traffic to the optimal regional endpoint based on health, client location, and policies that you configure. The service reacts instantly to changes in health or configuration to ensure that internet traffic from clients is always directed to healthy endpoints. For a list of the AWS Regions where Global Accelerator and other services are currently supported, see the AWS Region Table. AWS Global Accelerator includes the following components:  Static IP addresses  Global Accelerator provides you with a set of two static IP addresses that are anycast from the AWS edge network. If you bring your own IP address range to AWS (BYOIP) to use with a standard accelerator, you can instead assign IP addresses from your own pool to use with your accelerator. For more information, see  Bring your own IP addresses (BYOIP) in AWS Global Accelerator. The IP addresses serve as single fixed entry points for your clients. If you already have Elastic Load Balancing load balancers, Amazon EC2 instances, or Elastic IP address resources set up for your applications, you can easily add those to a standard accelerator in Global Accelerator. This allows Global Accelerator to use static IP addresses to access the resources. The static IP addresses remain assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you delete an accelerator, you lose the static IP addresses that are assigned to it, so you can no longer route traffic by using them. You can use IAM policies like tag-based permissions with Global Accelerator to delete an accelerator. For more information, see Tag-based policies.  Accelerator  An accelerator directs traffic to endpoints over the AWS global network to improve the performance of your internet applications. Each accelerator includes one or more listeners. There are two types of accelerators:   A standard accelerator directs traffic to the optimal AWS endpoint based on several factors, including the user\u2019s location, the health of the endpoint, and the endpoint weights that you configure. This improves the availability and performance of your applications. Endpoints can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses.   A custom routing accelerator directs traffic to one of possibly thousands of Amazon EC2 instances running in a single or multiple virtual private clouds (VPCs). With custom routing, listener ports are mapped to statically associate port ranges with VPC subnets, which allows Global Accelerator to determine an EC2 instance IP address at the time of connection. By default, all port mapping destinations in a VPC subnet can't receive traffic. You can choose to configure all destinations in the subnet to receive traffic, or to specify individual port mappings that can receive traffic.   For more information, see Types of accelerators.  DNS name  Global Accelerator assigns each accelerator a default Domain Name System (DNS) name, similar to a1234567890abcdef.awsglobalaccelerator.com, that points to the static IP addresses that Global Accelerator assigns to you or that you choose from your own IP address range. Depending on the use case, you can use your accelerator's static IP addresses or DNS name to route traffic to your accelerator, or set up DNS records to route traffic using your own custom domain name.  Network zone  A network zone services the static IP addresses for your accelerator from a unique IP subnet. Similar to an AWS Availability Zone, a network zone is an isolated unit with its own set of physical infrastructure. When you configure an accelerator, by default, Global Accelerator allocates two IPv4 addresses for it. If one IP address from a network zone becomes unavailable due to IP address blocking by certain client networks, or network disruptions, then client applications can retry on the healthy static IP address from the other isolated network zone.  Listener  A listener processes inbound connections from clients to Global Accelerator, based on the port (or port range) and protocol (or protocols) that you configure. A listener can be configured for TCP, UDP, or both TCP and UDP protocols. Each listener has one or more endpoint groups associated with it, and traffic is forwarded to endpoints in one of the groups. You associate endpoint groups with listeners by specifying the Regions that you want to distribute traffic to. With a standard accelerator, traffic is distributed to optimal endpoints within the endpoint groups associated with a listener.  Endpoint group  Each endpoint group is associated with a specific AWS Region. Endpoint groups include one or more endpoints in the Region. With a standard accelerator, you can increase or reduce the percentage of traffic that would be otherwise directed to an endpoint group by adjusting a setting called a traffic dial. The traffic dial lets you easily do performance testing or blue/green deployment testing, for example, for new releases across different AWS Regions.   Endpoint  An endpoint is a resource that Global Accelerator directs traffic to. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses. An Application Load Balancer endpoint can be internet-facing or internal. Traffic for standard accelerators is routed to endpoints based on the health of the endpoint along with configuration options that you choose, such as endpoint weights. For each endpoint, you can configure weights, which are numbers that you can use to specify the proportion of traffic to route to each one. This can be useful, for example, to do performance testing within a Region. Endpoints for custom routing accelerators are virtual private cloud (VPC) subnets with one or many EC2 instances",
      loadSpec: "aws/globalaccelerator",
    },
    {
      name: "glue",
      description:
        "AWS Glue Defines the public endpoint for the AWS Glue service",
      loadSpec: "aws/glue",
    },
    {
      name: "greengrass",
      description:
        "AWS IoT Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS IoT Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS IoT Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally",
      loadSpec: "aws/greengrass",
    },
    {
      name: "greengrassv2",
      description:
        "AWS IoT Greengrass brings local compute, messaging, data management, sync, and ML inference capabilities to edge devices. This enables devices to collect and analyze data closer to the source of information, react autonomously to local events, and communicate securely with each other on local networks. Local devices can also communicate securely with AWS IoT Core and export IoT data to the AWS Cloud. AWS IoT Greengrass developers can use AWS Lambda functions and components to create and deploy applications to fleets of edge devices for local operation. AWS IoT Greengrass Version 2 provides a new major version of the AWS IoT Greengrass Core software, new APIs, and a new console. Use this API reference to learn how to use the AWS IoT Greengrass V2 API operations to manage components, manage deployments, and core devices. For more information, see What is AWS IoT Greengrass? in the AWS IoT Greengrass V2 Developer Guide",
      loadSpec: "aws/greengrassv2",
    },
    {
      name: "groundstation",
      description:
        "Welcome to the AWS Ground Station API Reference. AWS Ground Station is a fully managed service that enables you to control satellite communications, downlink and process satellite data, and scale your satellite operations efficiently and cost-effectively without having to build or manage your own ground station infrastructure",
      loadSpec: "aws/groundstation",
    },
    {
      name: "guardduty",
      description:
        "Amazon GuardDuty is a continuous security monitoring service that analyzes and processes the following data sources: VPC Flow Logs, AWS CloudTrail event logs, and DNS logs. It uses threat intelligence feeds (such as lists of malicious IPs and domains) and machine learning to identify unexpected, potentially unauthorized, and malicious activity within your AWS environment. This can include issues like escalations of privileges, uses of exposed credentials, or communication with malicious IPs, URLs, or domains. For example, GuardDuty can detect compromised EC2 instances that serve malware or mine bitcoin.  GuardDuty also monitors AWS account access behavior for signs of compromise. Some examples of this are unauthorized infrastructure deployments such as EC2 instances deployed in a Region that has never been used, or unusual API calls like a password policy change to reduce password strength.  GuardDuty informs you of the status of your AWS environment by producing security findings that you can view in the GuardDuty console or through Amazon CloudWatch events. For more information, see the  Amazon GuardDuty User Guide",
      loadSpec: "aws/guardduty",
    },
    {
      name: "health",
      description:
        "AWS Health The AWS Health API provides programmatic access to the AWS Health information that appears in the AWS Personal Health Dashboard. You can use the API operations to get information about AWS Health events that affect your AWS services and resources.  You must have a Business or Enterprise support plan from AWS Support to use the AWS Health API. If you call the AWS Health API from an AWS account that doesn't have a Business or Enterprise support plan, you receive a SubscriptionRequiredException error.  AWS Health has a single endpoint: health.us-east-1.amazonaws.com (HTTPS). Use this endpoint to call the AWS Health API operations. For authentication of requests, AWS Health uses the Signature Version 4 Signing Process. If your AWS account is part of AWS Organizations, you can use the AWS Health organizational view feature. This feature provides a centralized view of AWS Health events across all accounts in your organization. You can aggregate AWS Health events in real time to identify accounts in your organization that are affected by an operational event or get notified of security vulnerabilities. Use the organizational view API operations to enable this feature and return event information. For more information, see Aggregating AWS Health events in the AWS Health User Guide.  When you use the AWS Health API operations to return AWS Health events, see the following recommendations:   Use the eventScopeCode parameter to specify whether to return AWS Health events that are public or account-specific.   Use pagination to view all events from the response. For example, if you call the DescribeEventsForOrganization operation to get all events in your organization, you might receive several page results. Specify the nextToken in the next request to return more results",
      loadSpec: "aws/health",
    },
    {
      name: "healthlake",
      description:
        "Amazon HealthLake is a HIPAA eligibile service that allows customers to store, transform, query, and analyze their FHIR-formatted data in a consistent fashion in the cloud",
      loadSpec: "aws/healthlake",
    },
    {
      name: "help",
      description: "Displays aws usage information",
    },
    {
      name: "honeycode",
      description:
        "Amazon Honeycode is a fully managed service that allows you to quickly build mobile and web apps for teams\u2014without programming. Build Honeycode apps for managing almost anything, like projects, customers, operations, approvals, resources, and even your team",
      loadSpec: "aws/honeycode",
    },
    {
      name: "iam",
      description:
        "AWS Identity and Access Management AWS Identity and Access Management (IAM) is a web service for securely controlling access to AWS services. With IAM, you can centrally manage users, security credentials such as access keys, and permissions that control which AWS resources users and applications can access. For more information about IAM, see AWS Identity and Access Management (IAM) and the AWS Identity and Access Management User Guide",
      loadSpec: "aws/iam",
    },
    {
      name: "identitystore",
      description: "",
      loadSpec: "aws/identitystore",
    },
    {
      name: "imagebuilder",
      description:
        'EC2 Image Builder is a fully managed AWS service that makes it easier to automate the creation, management, and deployment of customized, secure, and up-to-date "golden" server images that are pre-installed and pre-configured with software and settings to meet specific IT standards',
      loadSpec: "aws/imagebuilder",
    },
    {
      name: "importexport",
      description:
        "AWS Import/Export Service AWS Import/Export accelerates transferring large amounts of data between the AWS cloud and portable storage devices that you mail to us. AWS Import/Export transfers data directly onto and off of your storage devices using Amazon's high-speed internal network and bypassing the Internet. For large data sets, AWS Import/Export is often faster than Internet transfer and more cost effective than upgrading your connectivity",
      loadSpec: "aws/importexport",
    },
    {
      name: "inspector",
      description:
        "Amazon Inspector Amazon Inspector enables you to analyze the behavior of your AWS resources and to identify potential security issues. For more information, see  Amazon Inspector User Guide",
      loadSpec: "aws/inspector",
    },
    {
      name: "iot",
      description:
        "AWS IoT AWS IoT provides secure, bi-directional communication between Internet-connected devices (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. You can discover your custom IoT-Data endpoint to communicate with, configure rules for data processing and integration with other services, organize resources associated with each device (Registry), configure logging, and create and manage policies and credentials to authenticate devices. The service endpoints that expose this API are listed in AWS IoT Core Endpoints and Quotas. You must use the endpoint for the region that has the resources you want to access. The service name used by AWS Signature Version 4 to sign the request is: execute-api. For more information about how AWS IoT works, see the Developer Guide. For information about how to use the credentials provider for AWS IoT, see Authorizing Direct Calls to AWS Services",
      loadSpec: "aws/iot",
    },
    {
      name: "iot-data",
      description:
        "AWS IoT AWS IoT-Data enables secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. It implements a broker for applications and things to publish messages over HTTP (Publish) and retrieve, update, and delete shadows. A shadow is a persistent representation of your things and their state in the AWS cloud. Find the endpoint address for actions in the AWS IoT data plane by running this CLI command:  aws iot describe-endpoint --endpoint-type iot:Data-ATS  The service name used by AWS Signature Version 4 to sign requests is: iotdevicegateway",
      loadSpec: "aws/iot-data",
    },
    {
      name: "iot-jobs-data",
      description:
        "AWS IoT Jobs is a service that allows you to define a set of jobs \u2014 remote operations that are sent to and executed on one or more devices connected to AWS IoT. For example, you can define a job that instructs a set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform remote troubleshooting operations.  To create a job, you make a job document which is a description of the remote operations to be performed, and you specify a list of targets that should perform the operations. The targets can be individual things, thing groups or both.  AWS IoT Jobs sends a message to inform the targets that a job is available. The target starts the execution of the job by downloading the job document, performing the operations it specifies, and reporting its progress to AWS IoT. The Jobs service provides commands to track the progress of a job on a specific target and for all the targets of the job",
      loadSpec: "aws/iot-jobs-data",
    },
    {
      name: "iot1click-devices",
      description:
        "Describes all of the AWS IoT 1-Click device-related API operations for the service.\n Also provides sample requests, responses, and errors for the supported web services\n protocols",
      loadSpec: "aws/iot1click-devices",
    },
    {
      name: "iot1click-projects",
      description: "The AWS IoT 1-Click Projects API Reference",
      loadSpec: "aws/iot1click-projects",
    },
    {
      name: "iotanalytics",
      description:
        "AWS IoT Analytics allows you to collect large amounts of device data, process messages, and store them. You can then query the data and run sophisticated analytics on it. AWS IoT Analytics enables advanced data exploration through integration with Jupyter Notebooks and data visualization through integration with Amazon QuickSight. Traditional analytics and business intelligence tools are designed to process structured data. IoT data often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result the data from these devices can have significant gaps, corrupted messages, and false readings that must be cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data from external sources.  AWS IoT Analytics automates the steps required to analyze data from IoT devices. AWS IoT Analytics filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You can set up the service to collect only the data you need from your devices, apply mathematical transforms to process the data, and enrich the data with device-specific metadata such as device type and location before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine, or perform more complex analytics and machine learning inference. AWS IoT Analytics includes pre-built models for common IoT use cases so you can answer questions like which devices are about to fail or which customers are at risk of abandoning their wearable devices",
      loadSpec: "aws/iotanalytics",
    },
    {
      name: "iotdeviceadvisor",
      description:
        "AWS IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT devices during device software development. Device Advisor provides pre-built tests that you can use to validate IoT devices for reliable and secure connectivity with AWS IoT Core before deploying devices to production. By using Device Advisor, you can confirm that your devices can connect to AWS IoT Core, follow security best practices and, if applicable, receive software updates from IoT Device Management. You can also download signed qualification reports to submit to the AWS Partner Network to get your device qualified for the AWS Partner Device Catalog without the need to send your device in and wait for it to be tested",
      loadSpec: "aws/iotdeviceadvisor",
    },
    {
      name: "iotevents",
      description:
        "AWS IoT Events monitors your equipment or device fleets for failures or changes in operation, and triggers actions when such events occur. You can use AWS IoT Events API operations to create, read, update, and delete inputs and detector models, and to list their versions",
      loadSpec: "aws/iotevents",
    },
    {
      name: "iotevents-data",
      description:
        "AWS IoT Events monitors your equipment or device fleets for failures or changes in operation, and triggers actions when such events occur. AWS IoT Events Data API commands enable you to send inputs to detectors, list detectors, and view or update a detector's status",
      loadSpec: "aws/iotevents-data",
    },
    {
      name: "iotfleethub",
      description:
        "With Fleet Hub for AWS IoT Device Management you can build stand-alone web applications for monitoring the health of your device fleets.  Fleet Hub for AWS IoT Device Management is in public preview and is subject to change",
      loadSpec: "aws/iotfleethub",
    },
    {
      name: "iotsecuretunneling",
      description:
        "AWS IoT Secure Tunneling AWS IoT Secure Tunnling enables you to create remote connections to devices deployed in the field. For more information about how AWS IoT Secure Tunneling works, see AWS IoT Secure Tunneling",
      loadSpec: "aws/iotsecuretunneling",
    },
    {
      name: "iotsitewise",
      description:
        "Welcome to the AWS IoT SiteWise API Reference. AWS IoT SiteWise is an AWS service that connects Industrial Internet of Things (IIoT) devices to the power of the AWS Cloud. For more information, see the AWS IoT SiteWise User Guide. For information about AWS IoT SiteWise quotas, see Quotas in the AWS IoT SiteWise User Guide",
      loadSpec: "aws/iotsitewise",
    },
    {
      name: "iotthingsgraph",
      description:
        "AWS IoT Things Graph AWS IoT Things Graph provides an integrated set of tools that enable developers to connect devices and services that use different standards, such as units of measure and communication protocols. AWS IoT Things Graph makes it possible to build IoT applications with little to no code by connecting devices and services and defining how they interact at an abstract level. For more information about how AWS IoT Things Graph works, see the User Guide",
      loadSpec: "aws/iotthingsgraph",
    },
    {
      name: "iotwireless",
      description: "AWS IoT Wireless API documentation",
      loadSpec: "aws/iotwireless",
    },
    {
      name: "ivs",
      description:
        'Introduction  The Amazon Interactive Video Service (IVS) API is REST compatible, using a standard HTTP API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses, including errors. The API is an AWS regional service, currently in these regions: us-west-2, us-east-1, and eu-west-1.   All API request parameters and URLs are case sensitive.    For a summary of notable documentation changes in each release, see  Document History.  Service Endpoints  The following are the Amazon IVS service endpoints (all HTTPS):  Region name: US West (Oregon)   Region: us-west-2    Endpoint: ivs.us-west-2.amazonaws.com    Region name: US East (Virginia)   Region: us-east-1    Endpoint: ivs.us-east-1.amazonaws.com    Region name: EU West (Dublin)   Region: eu-west-1    Endpoint: ivs.eu-west-1.amazonaws.com     Allowed Header Values      Accept:  application/json     Accept-Encoding:  gzip, deflate     Content-Type: application/json    Resources  The following resources contain information about your IVS live stream (see  Getting Started with Amazon IVS):   Channel \u2014 Stores configuration data related to your live stream. You first create a channel and then use the channel\u2019s stream key to start your live stream. See the Channel endpoints for more information.    Stream key \u2014 An identifier assigned by Amazon IVS when you create a channel, which is then used to authorize streaming. See the StreamKey endpoints for more information.  Treat the stream key like a secret, since it allows anyone to stream to the channel.     Playback key pair \u2014 Video playback may be restricted using playback-authorization tokens, which use public-key encryption. A playback key pair is the public-private pair of keys used to sign and validate the playback-authorization token. See the PlaybackKeyPair endpoints for more information.   Recording configuration \u2014 Stores configuration related to recording a live stream and where to store the recorded content. Multiple channels can reference the same recording configuration. See the Recording Configuration endpoints for more information.    Tagging  A tag is a metadata label that you assign to an AWS resource. A tag comprises a key and a value, both set by you. For example, you might set a tag as topic:nature to label a particular video category. See Tagging AWS Resources for more information, including restrictions that apply to tags. Tags can help you identify and organize your AWS resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see  Access Tags).  The Amazon IVS API has these tag-related endpoints: TagResource, UntagResource, and ListTagsForResource. The following resources support tagging: Channels, Stream Keys, Playback Key Pairs, and Recording Configurations.  Authentication versus Authorization  Note the differences between these concepts:    Authentication is about verifying identity. You need to be authenticated to sign Amazon IVS API requests.    Authorization is about granting permissions. You need to be authorized to view Amazon IVS private channels. (Private channels are channels that are enabled for "playback authorization.")    Authentication  All Amazon IVS API requests must be authenticated with a signature. The AWS Command-Line Interface (CLI) and Amazon IVS Player SDKs take care of signing the underlying API calls for you. However, if your application calls the Amazon IVS API directly, it\u2019s your responsibility to sign the requests. You generate a signature using valid AWS credentials that have permission to perform the requested action. For example, you must sign PutMetadata requests with a signature generated from an IAM user account that has the ivs:PutMetadata permission. For more information:   Authentication and generating signatures \u2014 See Authenticating Requests (AWS Signature Version 4) in the AWS General Reference.   Managing Amazon IVS permissions \u2014 See Identity and Access Management on the Security page of the Amazon IVS User Guide.    Channel Endpoints     CreateChannel \u2014 Creates a new channel and an associated stream key to start streaming.    GetChannel \u2014 Gets the channel configuration for the specified channel ARN (Amazon Resource Name).    BatchGetChannel \u2014 Performs GetChannel on multiple ARNs simultaneously.    ListChannels \u2014 Gets summary information about all channels in your account, in the AWS region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 Conflict Exception).    UpdateChannel \u2014 Updates a channel\'s configuration. This does not affect an ongoing stream of this channel. You must stop and restart the stream for the changes to take effect.    DeleteChannel \u2014 Deletes the specified channel.    StreamKey Endpoints     CreateStreamKey \u2014 Creates a stream key, used to initiate a stream, for the specified channel ARN.    GetStreamKey \u2014 Gets stream key information for the specified ARN.    BatchGetStreamKey \u2014 Performs GetStreamKey on multiple ARNs simultaneously.    ListStreamKeys \u2014 Gets summary information about stream keys for the specified channel.    DeleteStreamKey \u2014 Deletes the stream key for the specified ARN, so it can no longer be used to stream.    Stream Endpoints     GetStream \u2014 Gets information about the active (live) stream on a specified channel.    ListStreams \u2014 Gets summary information about live streams in your account, in the AWS region where the API request is processed.    StopStream \u2014 Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with DeleteStreamKey to prevent further streaming to a channel.    PutMetadata \u2014 Inserts metadata into the active stream of the specified channel. A maximum of 5 requests per second per channel is allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.)    PlaybackKeyPair Endpoints  For more information, see Setting Up Private Channels in the Amazon IVS User Guide.    ImportPlaybackKeyPair \u2014 Imports the public portion of a new key pair and returns its arn and fingerprint. The privateKey can then be used to generate viewer authorization tokens, to grant viewers access to private channels (channels enabled for playback authorization).    GetPlaybackKeyPair \u2014 Gets a specified playback authorization key pair and returns the arn and fingerprint. The privateKey held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels.    ListPlaybackKeyPairs \u2014 Gets summary information about playback key pairs.    DeletePlaybackKeyPair \u2014 Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair\u2019s privateKey.    RecordingConfiguration Endpoints     CreateRecordingConfiguration \u2014 Creates a new recording configuration, used to enable recording to Amazon S3.    GetRecordingConfiguration \u2014 Gets the recording-configuration metadata for the specified ARN.    ListRecordingConfigurations \u2014 Gets summary information about all recording configurations in your account, in the AWS region where the API request is processed.    DeleteRecordingConfiguration \u2014 Deletes the recording configuration for the specified ARN.    AWS Tags Endpoints     TagResource \u2014 Adds or updates tags for the AWS resource with the specified ARN.    UntagResource \u2014 Removes tags from the resource with the specified ARN.    ListTagsForResource \u2014 Gets information about AWS tags for the specified ARN',
      loadSpec: "aws/ivs",
    },
    {
      name: "kafka",
      description: "The operations for managing an Amazon MSK cluster",
      loadSpec: "aws/kafka",
    },
    {
      name: "kendra",
      description:
        "Amazon Kendra is a service for indexing large document sets",
      loadSpec: "aws/kendra",
    },
    {
      name: "kinesis",
      description:
        "Amazon Kinesis Data Streams Service API Reference Amazon Kinesis Data Streams is a managed service that scales elastically for real-time processing of streaming big data",
      loadSpec: "aws/kinesis",
    },
    {
      name: "kinesis-video-archived-media",
      description: "",
      loadSpec: "aws/kinesis-video-archived-media",
    },
    {
      name: "kinesis-video-media",
      description: "",
      loadSpec: "aws/kinesis-video-media",
    },
    {
      name: "kinesis-video-signaling",
      description:
        "Kinesis Video Streams Signaling Service is a intermediate service that establishes a communication channel for discovering peers, transmitting offers and answers in order to establish peer-to-peer connection in webRTC technology",
      loadSpec: "aws/kinesis-video-signaling",
    },
    {
      name: "kinesisanalytics",
      description:
        "Amazon Kinesis Analytics  Overview   This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation.  This is the Amazon Kinesis Analytics v1 API Reference. The Amazon Kinesis Analytics Developer Guide provides additional information",
      loadSpec: "aws/kinesisanalytics",
    },
    {
      name: "kinesisanalyticsv2",
      description:
        "Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using Java, SQL, or Scala. The service enables you to quickly author and run Java, SQL, or Scala code against streaming sources to perform time series analytics, feed real-time dashboards, and create real-time metrics",
      loadSpec: "aws/kinesisanalyticsv2",
    },
    {
      name: "kinesisvideo",
      description: "",
      loadSpec: "aws/kinesisvideo",
    },
    {
      name: "kms",
      description:
        "AWS Key Management Service AWS Key Management Service (AWS KMS) is an encryption and key management web service. This guide describes the AWS KMS operations that you can call programmatically. For general information about AWS KMS, see the  AWS Key Management Service Developer Guide .  AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, macOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWS KMS and other AWS services. For example, the SDKs take care of tasks such as signing requests (see below), managing errors, and retrying requests automatically. For more information about the AWS SDKs, including how to download and install them, see Tools for Amazon Web Services.  We recommend that you use the AWS SDKs to make programmatic API calls to AWS KMS. Clients must support TLS (Transport Layer Security) 1.0. We recommend TLS 1.2. Clients must also support cipher suites with Perfect Forward Secrecy (PFS) such as Ephemeral Diffie-Hellman (DHE) or Elliptic Curve Ephemeral Diffie-Hellman (ECDHE). Most modern systems such as Java 7 and later support these modes.  Signing Requests  Requests must be signed by using an access key ID and a secret access key. We strongly recommend that you do not use your AWS account (root) access key ID and secret key for everyday work with AWS KMS. Instead, use the access key ID and secret access key for an IAM user. You can also use the AWS Security Token Service to generate temporary security credentials that you can use to sign requests. All AWS KMS operations require Signature Version 4.  Logging API Requests  AWS KMS supports AWS CloudTrail, a service that logs AWS API calls and related events for your AWS account and delivers them to an Amazon S3 bucket that you specify. By using the information collected by CloudTrail, you can determine what requests were made to AWS KMS, who made the request, when it was made, and so on. To learn more about CloudTrail, including how to turn it on and find your log files, see the AWS CloudTrail User Guide.  Additional Resources  For more information about credentials and request signing, see the following:    AWS Security Credentials - This topic provides general information about the types of credentials used for accessing AWS.    Temporary Security Credentials - This section of the IAM User Guide describes how to create and use temporary security credentials.    Signature Version 4 Signing Process - This set of topics walks you through the process of signing a request using an access key ID and a secret access key.    Commonly Used API Operations  Of the API operations discussed in this guide, the following will prove the most useful for most applications. You will likely perform operations other than these, such as creating keys and assigning policies, by using the console.    Encrypt     Decrypt     GenerateDataKey     GenerateDataKeyWithoutPlaintext",
      loadSpec: "aws/kms",
    },
    {
      name: "lakeformation",
      description:
        "AWS Lake Formation Defines the public endpoint for the AWS Lake Formation service",
      loadSpec: "aws/lakeformation",
    },
    {
      name: "lambda",
      description:
        "AWS Lambda  Overview  This is the AWS Lambda API Reference. The AWS Lambda Developer Guide provides additional information. For the service overview, see What is AWS Lambda, and for information about how the service works, see AWS Lambda: How it Works in the AWS Lambda Developer Guide",
      loadSpec: "aws/lambda",
    },
    {
      name: "lex-models",
      description:
        "Amazon Lex Build-Time Actions  Amazon Lex is an AWS service for building conversational voice and text interfaces. Use these actions to create, update, and delete conversational bots for new and existing client applications",
      loadSpec: "aws/lex-models",
    },
    {
      name: "lex-runtime",
      description:
        'Amazon Lex provides both build and runtime endpoints. Each endpoint provides a set of operations (API). Your conversational bot uses the runtime API to understand user utterances (user input text or voice). For example, suppose a user says "I want pizza", your bot sends this input to Amazon Lex using the runtime API. Amazon Lex recognizes that the user request is for the OrderPizza intent (one of the intents defined in the bot). Then Amazon Lex engages in user conversation on behalf of the bot to elicit required information (slot values, such as pizza size and crust type), and then performs fulfillment activity (that you configured when you created the bot). You use the build-time API to create and manage your Amazon Lex bot. For a list of build-time operations, see the build-time API,',
      loadSpec: "aws/lex-runtime",
    },
    {
      name: "lexv2-models",
      description: "",
      loadSpec: "aws/lexv2-models",
    },
    {
      name: "lexv2-runtime",
      description: "",
      loadSpec: "aws/lexv2-runtime",
    },
    {
      name: "license-manager",
      description:
        "AWS License Manager  AWS License Manager makes it easier to manage licenses from software vendors across multiple AWS accounts and on-premises servers",
      loadSpec: "aws/license-manager",
    },
    {
      name: "lightsail",
      description:
        "Amazon Lightsail is the easiest way to get started with Amazon Web Services (AWS) for developers who need to build websites or web applications. It includes everything you need to launch your project quickly - instances (virtual private servers), container services, managed databases, SSD-based block storage, static IP addresses, load balancers, content delivery network (CDN) distributions, DNS management of registered domains, and resource snapshots (backups) - for a low, predictable monthly price. You can manage your Lightsail resources using the Lightsail console, Lightsail API, AWS Command Line Interface (AWS CLI), or SDKs. For more information about Lightsail concepts and tasks, see the Lightsail Dev Guide. This API Reference provides detailed information about the actions, data types, parameters, and errors of the Lightsail service. For more information about the supported AWS Regions, endpoints, and service quotas of the Lightsail service, see Amazon Lightsail Endpoints and Quotas in the AWS General Reference",
      loadSpec: "aws/lightsail",
    },
    {
      name: "location",
      description:
        "Suite of geospatial services including Maps, Places, Tracking, and Geofencing",
      loadSpec: "aws/location",
    },
    {
      name: "logs",
      description:
        'You can use Amazon CloudWatch Logs to monitor, store, and access your log files from EC2 instances, AWS CloudTrail, or other sources. You can then retrieve the associated log data from CloudWatch Logs using the CloudWatch console, CloudWatch Logs commands in the AWS CLI, CloudWatch Logs API, or CloudWatch Logs SDK. You can use CloudWatch Logs to:    Monitor logs from EC2 instances in real-time: You can use CloudWatch Logs to monitor applications and systems using log data. For example, CloudWatch Logs can track the number of errors that occur in your application logs and send you a notification whenever the rate of errors exceeds a threshold that you specify. CloudWatch Logs uses your log data for monitoring so no code changes are required. For example, you can monitor application logs for specific literal terms (such as "NullReferenceException") or count the number of occurrences of a literal term at a particular position in log data (such as "404" status codes in an Apache access log). When the term you are searching for is found, CloudWatch Logs reports the data to a CloudWatch metric that you specify.    Monitor AWS CloudTrail logged events: You can create alarms in CloudWatch and receive notifications of particular API activity as captured by CloudTrail. You can use the notification to perform troubleshooting.    Archive log data: You can use CloudWatch Logs to store your log data in highly durable storage. You can change the log retention setting so that any log events older than this setting are automatically deleted. The CloudWatch Logs agent makes it easy to quickly send both rotated and non-rotated log data off of a host and into the log service. You can then access the raw log data when you need it',
      loadSpec: "aws/logs",
    },
    {
      name: "lookoutequipment",
      description:
        "Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify anomalies in machines from sensor data for use in predictive maintenance",
      loadSpec: "aws/lookoutequipment",
    },
    {
      name: "lookoutmetrics",
      description:
        "This is the Amazon Lookout for Metrics API Reference. For an introduction to the service with tutorials for getting started, visit Amazon Lookout for Metrics Developer Guide",
      loadSpec: "aws/lookoutmetrics",
    },
    {
      name: "lookoutvision",
      description:
        "This is the Amazon Lookout for Vision API Reference. It provides descriptions of actions, data types, common parameters, and common errors. Amazon Lookout for Vision enables you to find visual defects in industrial products, accurately and at scale. It uses computer vision to identify missing components in an industrial product, damage to vehicles or structures, irregularities in production lines, and even minuscule defects in silicon wafers \u2014 or any other physical item where quality is important such as a missing capacitor on printed circuit boards",
      loadSpec: "aws/lookoutvision",
    },
    {
      name: "machinelearning",
      description:
        "Definition of the public APIs exposed by Amazon Machine Learning",
      loadSpec: "aws/machinelearning",
    },
    {
      name: "macie",
      description:
        "Amazon Macie Classic Amazon Macie Classic is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS. Macie Classic recognizes sensitive data such as personally identifiable information (PII) or intellectual property, and provides you with dashboards and alerts that give visibility into how this data is being accessed or moved. For more information, see the Amazon Macie Classic User Guide",
      loadSpec: "aws/macie",
    },
    {
      name: "macie2",
      description:
        "Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS. Macie automates the discovery of sensitive data, such as PII and intellectual property, to provide you with insight into the data that your organization stores in AWS. Macie also provides an inventory of your Amazon S3 buckets, which it continually monitors for you. If Macie detects sensitive data or potential data access issues, it generates detailed findings for you to review and act upon as necessary",
      loadSpec: "aws/macie2",
    },
    {
      name: "managedblockchain",
      description:
        "Amazon Managed Blockchain is a fully managed service for creating and managing blockchain networks using open-source frameworks. Blockchain allows you to build applications where multiple parties can securely and transparently run transactions and share data without the need for a trusted, central authority. Managed Blockchain supports the Hyperledger Fabric and Ethereum open-source frameworks. Because of fundamental differences between the frameworks, some API actions or data types may only apply in the context of one framework and not the other. For example, actions related to Hyperledger Fabric network members such as CreateMember and DeleteMember do not apply to Ethereum. The description for each action indicates the framework or frameworks to which it applies. Data types and properties that apply only in the context of a particular framework are similarly indicated",
      loadSpec: "aws/managedblockchain",
    },
    {
      name: "marketplace-catalog",
      description:
        "Catalog API actions allow you to manage your entities through list, describe, and update capabilities. An entity can be a product or an offer on AWS Marketplace.  You can automate your entity update process by integrating the AWS Marketplace Catalog API with your AWS Marketplace product build or deployment pipelines. You can also create your own applications on top of the Catalog API to manage your products on AWS Marketplace",
      loadSpec: "aws/marketplace-catalog",
    },
    {
      name: "marketplace-entitlement",
      description:
        "AWS Marketplace Entitlement Service This reference provides descriptions of the AWS Marketplace Entitlement Service API. AWS Marketplace Entitlement Service is used to determine the entitlement of a customer to a given product. An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.  Getting Entitlement Records     GetEntitlements- Gets the entitlements for a Marketplace product",
      loadSpec: "aws/marketplace-entitlement",
    },
    {
      name: "marketplacecommerceanalytics",
      description:
        "Provides AWS Marketplace business intelligence data on-demand",
      loadSpec: "aws/marketplacecommerceanalytics",
    },
    {
      name: "mediaconnect",
      description: "API for AWS Elemental MediaConnect",
      loadSpec: "aws/mediaconnect",
    },
    {
      name: "mediaconvert",
      description: "AWS Elemental MediaConvert",
      loadSpec: "aws/mediaconvert",
    },
    {
      name: "medialive",
      description: "API for AWS Elemental MediaLive",
      loadSpec: "aws/medialive",
    },
    {
      name: "mediapackage",
      description: "AWS Elemental MediaPackage",
      loadSpec: "aws/mediapackage",
    },
    {
      name: "mediapackage-vod",
      description: "AWS Elemental MediaPackage VOD",
      loadSpec: "aws/mediapackage-vod",
    },
    {
      name: "mediastore",
      description:
        "An AWS Elemental MediaStore container is a namespace that holds folders and objects. You use a container endpoint to create, read, and delete objects",
      loadSpec: "aws/mediastore",
    },
    {
      name: "mediastore-data",
      description:
        "An AWS Elemental MediaStore asset is an object, similar to an object in the Amazon S3 service. Objects are the fundamental entities that are stored in AWS Elemental MediaStore",
      loadSpec: "aws/mediastore-data",
    },
    {
      name: "mediatailor",
      description:
        "Use the AWS Elemental MediaTailor SDKs and CLI to configure scalable ad insertion and linear channels. With MediaTailor, you can assemble existing content into a linear stream and serve targeted ads to viewers while maintaining broadcast quality in over-the-top (OTT) video applications. For information about using the service, including detailed information about the settings covered in this guide, see the AWS Elemental MediaTailor User Guide. Through the SDKs and the CLI you manage AWS Elemental MediaTailor configurations and channels the same as you do through the console. For example, you specify ad insertion behavior and mapping information for the origin server and the ad decision server (ADS)",
      loadSpec: "aws/mediatailor",
    },
    {
      name: "meteringmarketplace",
      description:
        "AWS Marketplace Metering Service This reference provides descriptions of the low-level AWS Marketplace Metering Service API. AWS Marketplace sellers can use this API to submit usage data for custom usage dimensions. For information on the permissions you need to use this API, see AWS Marketing metering and entitlement API permissions in the AWS Marketplace Seller Guide.   Submitting Metering Records     MeterUsage- Submits the metering record for a Marketplace product. MeterUsage is called from an EC2 instance or a container running on EKS or ECS.    BatchMeterUsage- Submits the metering record for a set of customers. BatchMeterUsage is called from a software-as-a-service (SaaS) application.    Accepting New Customers     ResolveCustomer- Called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a Registration Token through the browser. The Registration Token is resolved through this API to obtain a CustomerIdentifier and Product Code.    Entitlement and Metering for Paid Container Products     Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the RegisterUsage operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call RegisterUsage, but you can do so if you want to receive usage data in your seller reports. For more information on using the RegisterUsage operation, see Container-Based Products.    BatchMeterUsage API calls are captured by AWS CloudTrail. You can use Cloudtrail to verify that the SaaS metering records that you sent are accurate by searching for records with the eventName of BatchMeterUsage. You can also use CloudTrail to audit records over time. For more information, see the  AWS CloudTrail User Guide",
      loadSpec: "aws/meteringmarketplace",
    },
    {
      name: "mgh",
      description:
        "The AWS Migration Hub API methods help to obtain server and application migration status and integrate your resource-specific migration tool by providing a programmatic interface to Migration Hub. Remember that you must set your AWS Migration Hub home region before you call any of these APIs, or a HomeRegionNotSetException error will be returned. Also, you must make the API calls while in your home region",
      loadSpec: "aws/mgh",
    },
    {
      name: "mgn",
      description: "The Application Migration Service service",
      loadSpec: "aws/mgn",
    },
    {
      name: "migrationhub-config",
      description:
        "The AWS Migration Hub home region APIs are available specifically for working with your Migration Hub home region. You can use these APIs to determine a home region, as well as to create and work with controls that describe the home region.   You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a HomeRegionNotSetException error is returned.   API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.   If you call a write API outside the home region, an InvalidInputException is returned.   You can call GetHomeRegion action to obtain the account's Migration Hub home region.   For specific API usage, see the sections that follow in this AWS Migration Hub Home Region API reference",
      loadSpec: "aws/migrationhub-config",
    },
    {
      name: "mobile",
      description:
        "AWS Mobile Service provides mobile app and website developers with capabilities required to configure AWS resources and bootstrap their developer desktop projects with the necessary SDKs, constants, tools and samples to make use of those resources",
      loadSpec: "aws/mobile",
    },
    {
      name: "mq",
      description:
        "Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to set up and operate message brokers in the cloud. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols",
      loadSpec: "aws/mq",
    },
    {
      name: "mturk",
      description: "Amazon Mechanical Turk API Reference",
      loadSpec: "aws/mturk",
    },
    {
      name: "mwaa",
      description:
        "Amazon Managed Workflows for Apache Airflow This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation. For more information, see What Is Amazon MWAA?",
      loadSpec: "aws/mwaa",
    },
    {
      name: "neptune",
      description:
        "Amazon Neptune Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it easy to build and run applications that work with highly connected datasets. The core of Amazon Neptune is a purpose-built, high-performance graph database engine optimized for storing billions of relationships and querying the graph with milliseconds latency. Amazon Neptune supports popular graph models Property Graph and W3C's RDF, and their respective query languages Apache TinkerPop Gremlin and SPARQL, allowing you to easily build queries that efficiently navigate highly connected datasets. Neptune powers graph use cases such as recommendation engines, fraud detection, knowledge graphs, drug discovery, and network security. This interface reference for Amazon Neptune contains documentation for a programming or command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide",
      loadSpec: "aws/neptune",
    },
    {
      name: "network-firewall",
      description:
        "This is the API Reference for AWS Network Firewall. This guide is for developers who need detailed information about the Network Firewall API actions, data types, and errors.    The REST API requires you to handle connection details, such as calculating signatures, handling request retries, and error handling. For general information about using the AWS REST APIs, see AWS APIs.  To access Network Firewall using the REST API endpoint: https://network-firewall.<region>.amazonaws.com     Alternatively, you can use one of the AWS SDKs to access an API that's tailored to the programming language or platform that you're using. For more information, see AWS SDKs.   For descriptions of Network Firewall features, including and step-by-step instructions on how to use them through the Network Firewall console, see the Network Firewall Developer Guide.   Network Firewall is a stateful, managed, network firewall and intrusion detection and prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the perimeter of your VPC. This includes filtering traffic going to and coming from an internet gateway, NAT gateway, or over VPN or AWS Direct Connect. Network Firewall uses rules that are compatible with Suricata, a free, open source intrusion detection system (IDS) engine. For information about Suricata, see the Suricata website. You can use Network Firewall to monitor and protect your VPC traffic in a number of ways. The following are just a few examples:    Allow domains or IP addresses for known AWS service endpoints, such as Amazon S3, and block all other forms of traffic.   Use custom lists of known bad domains to limit the types of domain names that your applications can access.   Perform deep packet inspection on traffic entering or leaving your VPC.   Use stateful protocol detection to filter protocols like HTTPS, regardless of the port used.   To enable Network Firewall for your VPCs, you perform steps in both Amazon VPC and in Network Firewall. For information about using Amazon VPC, see Amazon VPC User Guide. To start using Network Firewall, do the following:    (Optional) If you don't already have a VPC that you want to protect, create it in Amazon VPC.    In Amazon VPC, in each Availability Zone where you want to have a firewall endpoint, create a subnet for the sole use of Network Firewall.    In Network Firewall, create stateless and stateful rule groups, to define the components of the network traffic filtering behavior that you want your firewall to have.    In Network Firewall, create a firewall policy that uses your rule groups and specifies additional default traffic filtering behavior.    In Network Firewall, create a firewall and specify your new firewall policy and VPC subnets. Network Firewall creates a firewall endpoint in each subnet that you specify, with the behavior that's defined in the firewall policy.   In Amazon VPC, use ingress routing enhancements to route traffic through the new firewall endpoints",
      loadSpec: "aws/network-firewall",
    },
    {
      name: "networkmanager",
      description:
        "Transit Gateway Network Manager (Network Manager) enables you to create a global network, in which you can monitor your AWS and on-premises networks that are built around transit gateways. The Network Manager APIs are supported in the US West (Oregon) Region only. You must specify the us-west-2 Region in all requests made to Network Manager",
      loadSpec: "aws/networkmanager",
    },
    {
      name: "opsworks",
      description:
        "AWS OpsWorks Welcome to the AWS OpsWorks Stacks API Reference. This guide provides descriptions, syntax, and usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error codes.  AWS OpsWorks Stacks is an application management service that provides an integrated experience for overseeing the complete application lifecycle. For information about this product, go to the AWS OpsWorks details page.   SDKs and CLI  The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:    AWS CLI     AWS SDK for Java     AWS SDK for .NET     AWS SDK for PHP 2     AWS SDK for Ruby     AWS SDK for Node.js     AWS SDK for Python(Boto)     Endpoints  AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks can only be accessed or managed within the endpoint in which they are created.   opsworks.us-east-1.amazonaws.com   opsworks.us-east-2.amazonaws.com   opsworks.us-west-1.amazonaws.com   opsworks.us-west-2.amazonaws.com   opsworks.ca-central-1.amazonaws.com (API only; not available in the AWS console)   opsworks.eu-west-1.amazonaws.com   opsworks.eu-west-2.amazonaws.com   opsworks.eu-west-3.amazonaws.com   opsworks.eu-central-1.amazonaws.com   opsworks.ap-northeast-1.amazonaws.com   opsworks.ap-northeast-2.amazonaws.com   opsworks.ap-south-1.amazonaws.com   opsworks.ap-southeast-1.amazonaws.com   opsworks.ap-southeast-2.amazonaws.com   opsworks.sa-east-1.amazonaws.com    Chef Versions  When you call CreateStack, CloneStack, or UpdateStack we recommend you use the ConfigurationManager parameter to specify the Chef version. The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information, see Chef Versions.  You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible",
      loadSpec: "aws/opsworks",
    },
    {
      name: "opsworkscm",
      description:
        "AWS OpsWorks CM AWS OpsWorks for configuration management (CM) is a service that runs and manages configuration management servers. You can use AWS OpsWorks CM to create and manage AWS OpsWorks for Chef Automate and AWS OpsWorks for Puppet Enterprise servers, and add or remove nodes for the servers to manage.  Glossary of terms     Server: A configuration management server that can be highly-available. The configuration management server runs on an Amazon Elastic Compute Cloud (EC2) instance, and may use various other AWS services, such as Amazon Relational Database Service (RDS) and Elastic Load Balancing. A server is a generic abstraction over the configuration manager that you want to use, much like Amazon RDS. In AWS OpsWorks CM, you do not start or stop servers. After you create servers, they continue to run until they are deleted.    Engine: The engine is the specific configuration manager that you want to use. Valid values in this release include ChefAutomate and Puppet.    Backup: This is an application-level backup of the data that the configuration manager stores. AWS OpsWorks CM creates an S3 bucket for backups when you launch the first server. A backup maintains a snapshot of a server's configuration-related attributes at the time the backup starts.    Events: Events are always related to a server. Events are written during server creation, when health checks run, when backups are created, when system maintenance is performed, etc. When you delete a server, the server's events are also deleted.    Account attributes: Every account has attributes that are assigned in the AWS OpsWorks CM database. These attributes store information about configuration limits (servers, backups, etc.) and your customer account.     Endpoints  AWS OpsWorks CM supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Your servers can only be accessed or managed within the endpoint in which they are created.   opsworks-cm.us-east-1.amazonaws.com   opsworks-cm.us-east-2.amazonaws.com   opsworks-cm.us-west-1.amazonaws.com   opsworks-cm.us-west-2.amazonaws.com   opsworks-cm.ap-northeast-1.amazonaws.com   opsworks-cm.ap-southeast-1.amazonaws.com   opsworks-cm.ap-southeast-2.amazonaws.com   opsworks-cm.eu-central-1.amazonaws.com   opsworks-cm.eu-west-1.amazonaws.com   For more information, see AWS OpsWorks endpoints and quotas in the AWS General Reference.  Throttling limits  All API operations allow for five requests per second with a burst of 10 requests per second",
      loadSpec: "aws/opsworkscm",
    },
    {
      name: "organizations",
      description: "AWS Organizations",
      loadSpec: "aws/organizations",
    },
    {
      name: "outposts",
      description:
        "AWS Outposts is a fully managed service that extends AWS infrastructure, APIs, and tools to customer premises. By providing local access to AWS managed infrastructure, AWS Outposts enables customers to build and run applications on premises using the same programming interfaces as in AWS Regions, while using local compute and storage resources for lower latency and local data processing needs",
      loadSpec: "aws/outposts",
    },
    {
      name: "personalize",
      description:
        "Amazon Personalize is a machine learning service that makes it easy to add individualized recommendations to customers",
      loadSpec: "aws/personalize",
    },
    {
      name: "personalize-events",
      description:
        "Amazon Personalize can consume real-time user event data, such as stream or click data, and use it for model training either alone or combined with historical data. For more information see Recording Events",
      loadSpec: "aws/personalize-events",
    },
    {
      name: "personalize-runtime",
      description: "",
      loadSpec: "aws/personalize-runtime",
    },
    {
      name: "pi",
      description:
        "Amazon RDS Performance Insights Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. The guide provides detailed information about Performance Insights data types, parameters and errors. When Performance Insights is enabled, the Amazon RDS Performance Insights API provides visibility into the performance of your DB instance. Amazon CloudWatch provides the authoritative source for AWS service-vended monitoring metrics. Performance Insights offers a domain-specific view of DB load.  DB load is measured as Average Active Sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host.   To learn more about Performance Insights and Amazon Aurora DB instances, go to the Amazon Aurora User Guide.   To learn more about Performance Insights and Amazon RDS DB instances, go to the Amazon RDS User Guide",
      loadSpec: "aws/pi",
    },
    {
      name: "pinpoint",
      description: "Doc Engage API - Amazon Pinpoint API",
      loadSpec: "aws/pinpoint",
    },
    {
      name: "pinpoint-email",
      description:
        "Amazon Pinpoint Email Service Welcome to the Amazon Pinpoint Email API Reference. This guide provides information about the Amazon Pinpoint Email API (version 1.0), including supported operations, data types, parameters, and schemas.  Amazon Pinpoint is an AWS service that you can use to engage with your customers across multiple messaging channels. You can use Amazon Pinpoint to send email, SMS text messages, voice messages, and push notifications. The Amazon Pinpoint Email API provides programmatic access to options that are unique to the email channel and supplement the options provided by the Amazon Pinpoint API. If you're new to Amazon Pinpoint, you might find it helpful to also review the Amazon Pinpoint Developer Guide. The Amazon Pinpoint Developer Guide provides tutorials, code samples, and procedures that demonstrate how to use Amazon Pinpoint features programmatically and how to integrate Amazon Pinpoint functionality into mobile apps and other types of applications. The guide also provides information about key topics such as Amazon Pinpoint integration with other AWS services and the limits that apply to using the service. The Amazon Pinpoint Email API is available in several AWS Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see AWS Service Endpoints in the Amazon Web Services General Reference. To learn more about AWS Regions, see Managing AWS Regions in the Amazon Web Services General Reference. In each Region, AWS maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see AWS Global Infrastructure",
      loadSpec: "aws/pinpoint-email",
    },
    {
      name: "pinpoint-sms-voice",
      description: "Pinpoint SMS and Voice Messaging public facing APIs",
      loadSpec: "aws/pinpoint-sms-voice",
    },
    {
      name: "polly",
      description:
        "Amazon Polly is a web service that makes it easy to synthesize speech from text. The Amazon Polly service provides API operations for synthesizing high-quality speech from plain text and Speech Synthesis Markup Language (SSML), along with managing pronunciations lexicons that enable you to get the best results for your application domain",
      loadSpec: "aws/polly",
    },
    {
      name: "pricing",
      description:
        "AWS Price List Service API (AWS Price List Service) is a centralized and convenient way to programmatically query Amazon Web Services for services, products, and pricing information. The AWS Price List Service uses standardized product attributes such as Location, Storage Class, and Operating System, and provides prices at the SKU level. You can use the AWS Price List Service to build cost control and scenario planning tools, reconcile billing data, forecast future spend for budgeting purposes, and provide cost benefit analysis that compare your internal workloads with AWS. Use GetServices without a service code to retrieve the service codes for all AWS services, then GetServices with a service code to retrieve the attribute names for that service. After you have the service code and attribute names, you can use GetAttributeValues to see what values are available for an attribute. With the service code and an attribute name and value, you can use GetProducts to find specific products that you're interested in, such as an AmazonEC2 instance, with a Provisioned IOPS volumeType. Service Endpoint AWS Price List Service API provides the following two endpoints:   https://api.pricing.us-east-1.amazonaws.com   https://api.pricing.ap-south-1.amazonaws.com",
      loadSpec: "aws/pricing",
    },
    {
      name: "qldb",
      description: "The control plane for Amazon QLDB",
      loadSpec: "aws/qldb",
    },
    {
      name: "qldb-session",
      description:
        "The transactional data APIs for Amazon QLDB  Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.   If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this QLDB Session data plane and manages SendCommand API calls for you. For information and a list of supported programming languages, see Getting started with the driver in the Amazon QLDB Developer Guide.   If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see Accessing Amazon QLDB using the QLDB shell",
      loadSpec: "aws/qldb-session",
    },
    {
      name: "quicksight",
      description:
        "Amazon QuickSight API Reference Amazon QuickSight is a fully managed, serverless business intelligence service for the AWS Cloud that makes it easy to extend data and insights to every user in your organization. This API reference contains documentation for a programming interface that you can use to manage Amazon QuickSight",
      loadSpec: "aws/quicksight",
    },
    {
      name: "ram",
      description:
        "Use AWS Resource Access Manager to share AWS resources between AWS accounts. To share a resource, you create a resource share, associate the resource with the resource share, and specify the principals that can access the resources associated with the resource share. The following principals are supported: AWS accounts, organizational units (OU) from AWS Organizations, and organizations from AWS Organizations. For more information, see the AWS Resource Access Manager User Guide",
      loadSpec: "aws/ram",
    },
    {
      name: "rds",
      description:
        "Amazon Relational Database Service   Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational database and manages common database administration tasks, freeing up developers to focus on what makes their applications and businesses unique. Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, Oracle, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS is flexible: you can scale your DB instance's compute resources and storage capacity to meet your application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for the resources you use. This interface reference for Amazon RDS contains documentation for a programming or command line interface you can use to manage Amazon RDS. Amazon RDS is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.  Amazon RDS API Reference    For the alphabetical list of API actions, see API Actions.   For the alphabetical list of data types, see Data Types.   For a list of common query parameters, see Common Parameters.   For descriptions of the error codes, see Common Errors.    Amazon RDS User Guide    For a summary of the Amazon RDS interfaces, see Available RDS Interfaces.   For more information about how to use the Query API, see Using the Query API",
      loadSpec: "aws/rds",
    },
    {
      name: "rds-data",
      description:
        "Amazon RDS Data Service Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora Serverless DB cluster. To run these statements, you work with the Data Service API. For more information about the Data Service API, see Using the Data API for Aurora Serverless in the Amazon Aurora User Guide",
      loadSpec: "aws/rds-data",
    },
    {
      name: "redshift",
      description:
        "Amazon Redshift  Overview  This is an interface reference for Amazon Redshift. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift clusters. Note that Amazon Redshift is asynchronous, which means that some interfaces may require techniques, such as polling or asynchronous callback handlers, to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a change is applied immediately, on the next instance reboot, or during the next maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to Using the Amazon Redshift Management Interfaces. Amazon Redshift manages all the work of setting up, operating, and scaling a data warehouse: provisioning capacity, monitoring and backing up the cluster, and applying patches and upgrades to the Amazon Redshift engine. You can focus on using your data to acquire new insights for your business and customers. If you are a first-time user of Amazon Redshift, we recommend that you begin by reading the Amazon Redshift Getting Started Guide. If you are a database developer, the Amazon Redshift Database Developer Guide explains how to design, build, query, and maintain the databases that make up your data warehouse",
      loadSpec: "aws/redshift",
    },
    {
      name: "redshift-data",
      description:
        "You can use the Amazon Redshift Data API to run queries on Amazon Redshift tables. You can run individual SQL statements, which are committed if the statement succeeds.  For more information about the Amazon Redshift Data API, see Using the Amazon Redshift Data API in the Amazon Redshift Cluster Management Guide",
      loadSpec: "aws/redshift-data",
    },
    {
      name: "rekognition",
      description: "This is the Amazon Rekognition API reference",
      loadSpec: "aws/rekognition",
    },
    {
      name: "resource-groups",
      description:
        "AWS Resource Groups AWS Resource Groups lets you organize AWS resources such as Amazon EC2 instances, Amazon Relational Database Service databases, and Amazon S3 buckets into groups using criteria that you define as tags. A resource group is a collection of resources that match the resource types specified in a query, and share one or more tags or portions of tags. You can create a group of resources based on their roles in your cloud infrastructure, lifecycle stages, regions, application layers, or virtually any criteria. Resource Groups enable you to automate management tasks, such as those in AWS Systems Manager Automation documents, on tag-related resources in AWS Systems Manager. Groups of tagged resources also let you quickly view a custom console in AWS Systems Manager that shows AWS Config compliance and other monitoring data about member resources. To create a resource group, build a resource query, and specify tags that identify the criteria that members of the group have in common. Tags are key-value pairs. For more information about Resource Groups, see the AWS Resource Groups User Guide. AWS Resource Groups uses a REST-compliant API that you can use to perform the following types of operations.   Create, Read, Update, and Delete (CRUD) operations on resource groups and resource query entities   Applying, editing, and removing tags from resource groups   Resolving resource group member ARNs so they can be returned as search results   Getting data about resources that are members of a group   Searching AWS resources based on a resource query",
      loadSpec: "aws/resource-groups",
    },
    {
      name: "resourcegroupstaggingapi",
      description: "Resource Groups Tagging API",
      loadSpec: "aws/resourcegroupstaggingapi",
    },
    {
      name: "robomaker",
      description:
        "This section provides documentation for the AWS RoboMaker API operations",
      loadSpec: "aws/robomaker",
    },
    {
      name: "route53",
      description:
        "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service",
      loadSpec: "aws/route53",
    },
    {
      name: "route53domains",
      description:
        "Amazon Route 53 API actions let you register domain names and perform related operations",
      loadSpec: "aws/route53domains",
    },
    {
      name: "route53resolver",
      description:
        "When you create a VPC using Amazon VPC, you automatically get DNS resolution within the VPC from Route 53 Resolver. By default, Resolver answers DNS queries for VPC domain names such as domain names for EC2 instances or ELB load balancers. Resolver performs recursive lookups against public name servers for all other domain names. You can also configure DNS resolution between your VPC and your network over a Direct Connect or VPN connection:  Forward DNS queries from resolvers on your network to Route 53 Resolver  DNS resolvers on your network can forward DNS queries to Resolver in a specified VPC. This allows your DNS resolvers to easily resolve domain names for AWS resources such as EC2 instances or records in a Route 53 private hosted zone. For more information, see How DNS Resolvers on Your Network Forward DNS Queries to Route 53 Resolver in the Amazon Route 53 Developer Guide.  Conditionally forward queries from a VPC to resolvers on your network  You can configure Resolver to forward queries that it receives from EC2 instances in your VPCs to DNS resolvers on your network. To forward selected queries, you create Resolver rules that specify the domain names for the DNS queries that you want to forward (such as example.com), and the IP addresses of the DNS resolvers on your network that you want to forward the queries to. If a query matches multiple rules (example.com, acme.example.com), Resolver chooses the rule with the most specific match (acme.example.com) and forwards the query to the IP addresses that you specified in that rule. For more information, see How Route 53 Resolver Forwards DNS Queries from Your VPCs to Your Network in the Amazon Route 53 Developer Guide. Like Amazon VPC, Resolver is regional. In each region where you have VPCs, you can choose whether to forward queries from your VPCs to your network (outbound queries), from your network to your VPCs (inbound queries), or both",
      loadSpec: "aws/route53resolver",
    },
    {
      name: "s3control",
      description:
        "AWS S3 Control provides access to Amazon S3 control plane actions",
      loadSpec: "aws/s3control",
    },
    {
      name: "s3outposts",
      description:
        "Amazon S3 on Outposts provides access to S3 on Outposts operations",
      loadSpec: "aws/s3outposts",
    },
    {
      name: "sagemaker",
      description:
        "Provides APIs for creating and managing Amazon SageMaker resources.  Other Resources:    Amazon SageMaker Developer Guide     Amazon Augmented AI Runtime API Reference",
      loadSpec: "aws/sagemaker",
    },
    {
      name: "sagemaker-a2i-runtime",
      description:
        "Amazon Augmented AI is in preview release and is subject to change. We do not recommend using this product in production environments.  Amazon Augmented AI (Amazon A2I) adds the benefit of human judgment to any machine learning application. When an AI application can't evaluate data with a high degree of confidence, human reviewers can take over. This human review is called a human review workflow. To create and start a human review workflow, you need three resources: a worker task template, a flow definition, and a human loop. For information about these resources and prerequisites for using Amazon A2I, see Get Started with Amazon Augmented AI in the Amazon SageMaker Developer Guide. This API reference includes information about API actions and data types that you can use to interact with Amazon A2I programmatically. Use this guide to:   Start a human loop with the StartHumanLoop operation when using Amazon A2I with a custom task type. To learn more about the difference between custom and built-in task types, see Use Task Types . To learn how to start a human loop using this API, see Create and Start a Human Loop for a Custom Task Type  in the Amazon SageMaker Developer Guide.   Manage your human loops. You can list all human loops that you have created, describe individual human loops, and stop and delete human loops. To learn more, see Monitor and Manage Your Human Loop  in the Amazon SageMaker Developer Guide.   Amazon A2I integrates APIs from various AWS services to create and start human review workflows for those services. To learn how Amazon A2I uses these APIs, see Use APIs in Amazon A2I in the Amazon SageMaker Developer Guide",
      loadSpec: "aws/sagemaker-a2i-runtime",
    },
    {
      name: "sagemaker-edge",
      description:
        "SageMaker Edge Manager dataplane service for communicating with active agents",
      loadSpec: "aws/sagemaker-edge",
    },
    {
      name: "sagemaker-featurestore-runtime",
      description:
        "Contains all data plane API operations and data types for the Amazon SageMaker Feature Store. Use this API to put, delete, and retrieve (get) features from a feature store. Use the following operations to configure your OnlineStore and OfflineStore features, and to create and manage feature groups:    CreateFeatureGroup     DeleteFeatureGroup     DescribeFeatureGroup     ListFeatureGroups",
      loadSpec: "aws/sagemaker-featurestore-runtime",
    },
    {
      name: "sagemaker-runtime",
      description: "The Amazon SageMaker runtime API",
      loadSpec: "aws/sagemaker-runtime",
    },
    {
      name: "savingsplans",
      description:
        "Savings Plans are a pricing model that offer significant savings on AWS usage (for example, on Amazon EC2 instances). You commit to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years, and receive a lower price for that usage. For more information, see the AWS Savings Plans User Guide",
      loadSpec: "aws/savingsplans",
    },
    {
      name: "schemas",
      description: "Amazon EventBridge Schema Registry",
      loadSpec: "aws/schemas",
    },
    {
      name: "sdb",
      description:
        "Amazon SimpleDB is a web service providing the core database functions of data indexing and querying in the cloud. By offloading the time and effort associated with building and operating a web-scale database, SimpleDB provides developers the freedom to focus on application development.  A traditional, clustered relational database requires a sizable upfront capital outlay, is complex to design, and often requires extensive and repetitive database administration. Amazon SimpleDB is dramatically simpler, requiring no schema, automatically indexing your data and providing a simple API for storage and access. This approach eliminates the administrative burden of data modeling, index maintenance, and performance tuning. Developers gain access to this functionality within Amazon's proven computing environment, are able to scale instantly, and pay only for what they use.   Visit http://aws.amazon.com/simpledb/ for more information",
      loadSpec: "aws/sdb",
    },
    {
      name: "secretsmanager",
      description:
        "AWS Secrets Manager API Reference AWS Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets. This guide provides descriptions of the Secrets Manager API. For more information about using this service, see the AWS Secrets Manager User Guide.  API Version  This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.  As an alternative to using the API, you can use one of the AWS SDKs, which consist of libraries and sample code for various programming languages and platforms such as Java, Ruby, .NET, iOS, and Android. The SDKs provide a convenient way to create programmatic access to AWS Secrets Manager. For example, the SDKs provide cryptographically signing requests, managing errors, and retrying requests automatically. For more information about the AWS SDKs, including downloading and installing them, see Tools for Amazon Web Services.  We recommend you use the AWS SDKs to make programmatic API calls to Secrets Manager. However, you also can use the Secrets Manager HTTP Query API to make direct calls to the Secrets Manager web service. To learn more about the Secrets Manager HTTP Query API, see Making Query Requests in the AWS Secrets Manager User Guide.  Secrets Manager API supports GET and POST requests for all actions, and doesn't require you to use GET for some actions and POST for others. However, GET requests are subject to the limitation size of a URL. Therefore, for operations that require larger sizes, use a POST request.  Support and Feedback for AWS Secrets Manager  We welcome your feedback. Send your comments to awssecretsmanager-feedback@amazon.com, or post your feedback and questions in the AWS Secrets Manager Discussion Forum. For more information about the AWS Discussion Forums, see Forums Help.  How examples are presented  The JSON that AWS Secrets Manager expects as your request parameters and the service returns as a response to HTTP query requests contain single, long strings without line breaks or white space formatting. The JSON shown in the examples displays the code formatted with both line breaks and white space to improve readability. When example input parameters can also cause long strings extending beyond the screen, you can insert line breaks to enhance readability. You should always submit the input as a single JSON text string.  Logging API Requests  AWS Secrets Manager supports AWS CloudTrail, a service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. By using information that's collected by AWS CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the request, when it was made, and so on. For more about AWS Secrets Manager and support for AWS CloudTrail, see Logging AWS Secrets Manager Events with AWS CloudTrail in the AWS Secrets Manager User Guide. To learn more about CloudTrail, including enabling it and find your log files, see the AWS CloudTrail User Guide",
      loadSpec: "aws/secretsmanager",
    },
    {
      name: "securityhub",
      description:
        "Security Hub provides you with a comprehensive view of the security state of your AWS environment and resources. It also provides you with the readiness status of your environment based on controls from supported security standards. Security Hub collects security data from AWS accounts, services, and integrated third-party products and helps you analyze security trends in your environment to identify the highest priority security issues. For more information about Security Hub, see the  AWS Security Hub User Guide . When you use operations in the Security Hub API, the requests are executed only in the AWS Region that is currently active or in the specific AWS Region that you specify in your request. Any configuration or settings change that results from the operation is applied only to that Region. To make the same change in other Regions, execute the same command for each Region to apply the change to. For example, if your Region is set to us-west-2, when you use  CreateMembers  to add a member account to Security Hub, the association of the member account with the administrator account is created only in the us-west-2 Region. Security Hub must be enabled for the member account in the same Region that the invitation was sent from. The following throttling limits apply to using Security Hub API operations.     BatchEnableStandards  - RateLimit of 1 request per second, BurstLimit of 1 request per second.     GetFindings  - RateLimit of 3 requests per second. BurstLimit of 6 requests per second.     UpdateFindings  - RateLimit of 1 request per second. BurstLimit of 5 requests per second.     UpdateStandardsControl  - RateLimit of 1 request per second, BurstLimit of 5 requests per second.   All other operations - RateLimit of 10 requests per second. BurstLimit of 30 requests per second",
      loadSpec: "aws/securityhub",
    },
    {
      name: "serverlessrepo",
      description:
        "The AWS Serverless Application Repository makes it easy for developers and enterprises to quickly find\n and deploy serverless applications in the AWS Cloud. For more information about serverless applications,\n see Serverless Computing and Applications on the AWS website.The AWS Serverless Application Repository is deeply integrated with the AWS Lambda console, so that developers of \n all levels can get started with serverless computing without needing to learn anything new. You can use category \n keywords to browse for applications such as web and mobile backends, data processing applications, or chatbots. \n You can also search for applications by name, publisher, or event source. To use an application, you simply choose it, \n configure any required fields, and deploy it with a few clicks. You can also easily publish applications, sharing them publicly with the community at large, or privately\n within your team or across your organization. To publish a serverless application (or app), you can use the\n AWS Management Console, AWS Command Line Interface (AWS CLI), or AWS SDKs to upload the code. Along with the\n code, you upload a simple manifest file, also known as the AWS Serverless Application Model (AWS SAM) template.\n For more information about AWS SAM, see AWS Serverless Application Model (AWS SAM) on the AWS Labs\n GitHub repository.The AWS Serverless Application Repository Developer Guide contains more information about the two developer\n experiences available:\n \n Consuming Applications \u2013 Browse for applications and view information about them, including\n source code and readme files. Also install, configure, and deploy applications of your choosing. \n Publishing Applications \u2013 Configure and upload applications to make them available to other\n developers, and publish new versions of applications",
      loadSpec: "aws/serverlessrepo",
    },
    {
      name: "service-quotas",
      description:
        "With Service Quotas, you can view and manage your quotas easily as your AWS workloads grow. Quotas, also referred to as limits, are the maximum number of resources that you can create in your AWS account. For more information, see the Service Quotas User Guide",
      loadSpec: "aws/service-quotas",
    },
    {
      name: "servicecatalog",
      description:
        "AWS Service Catalog  AWS Service Catalog enables organizations to create and manage catalogs of IT services that are approved for AWS. To get the most out of this documentation, you should be familiar with the terminology discussed in AWS Service Catalog Concepts",
      loadSpec: "aws/servicecatalog",
    },
    {
      name: "servicecatalog-appregistry",
      description:
        "AWS Service Catalog AppRegistry enables organizations to understand the application context of their AWS resources. AppRegistry provides a repository of your applications, their resources, and the application metadata that you use within your enterprise",
      loadSpec: "aws/servicecatalog-appregistry",
    },
    {
      name: "servicediscovery",
      description:
        "AWS Cloud Map lets you configure public DNS, private DNS, or HTTP namespaces that your microservice applications run in. When an instance of the service becomes available, you can call the AWS Cloud Map API to register the instance with AWS Cloud Map. For public or private DNS namespaces, AWS Cloud Map automatically creates DNS records and an optional health check. Clients that submit public or private DNS queries, or HTTP requests, for the service receive an answer that contains up to eight healthy records",
      loadSpec: "aws/servicediscovery",
    },
    {
      name: "ses",
      description:
        "Amazon Simple Email Service  This document contains reference information for the Amazon Simple Email Service (Amazon SES) API, version 2010-12-01. This document is best used in conjunction with the Amazon SES Developer Guide.    For a list of Amazon SES endpoints to use in service requests, see Regions and Amazon SES in the Amazon SES Developer Guide",
      loadSpec: "aws/ses",
    },
    {
      name: "sesv2",
      description:
        "Amazon SES API v2 Welcome to the Amazon SES API v2 Reference. This guide provides information about the Amazon SES API v2, including supported operations, data types, parameters, and schemas.  Amazon SES is an AWS service that you can use to send email messages to your customers. If you're new to Amazon SES API v2, you might find it helpful to also review the Amazon Simple Email Service Developer Guide. The Amazon SES Developer Guide provides information and code samples that demonstrate how to use Amazon SES API v2 features programmatically. The Amazon SES API v2 is available in several AWS Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see AWS Service Endpoints in the Amazon Web Services General Reference. To learn more about AWS Regions, see Managing AWS Regions in the Amazon Web Services General Reference. In each Region, AWS maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see AWS Global Infrastructure",
      loadSpec: "aws/sesv2",
    },
    {
      name: "shield",
      description:
        "AWS Shield Advanced This is the AWS Shield Advanced API Reference. This guide is for developers who need detailed information about the AWS Shield Advanced API actions, data types, and errors. For detailed information about AWS WAF and AWS Shield Advanced features and an overview of how to use the AWS WAF and AWS Shield Advanced APIs, see the AWS WAF and AWS Shield Developer Guide",
      loadSpec: "aws/shield",
    },
    {
      name: "signer",
      description:
        "AWS Signer is a fully managed code signing service to help you ensure the trust and integrity of your code.  AWS Signer supports the following applications: With code signing for AWS Lambda, you can sign AWS Lambda deployment packages. Integrated support is provided for Amazon S3, Amazon CloudWatch, and AWS CloudTrail. In order to sign code, you create a signing profile and then use Signer to sign Lambda zip files in S3.  With code signing for IoT, you can sign code for any IoT device that is supported by AWS. IoT code signing is available for Amazon FreeRTOS and AWS IoT Device Management, and is integrated with AWS Certificate Manager (ACM). In order to sign code, you import a third-party code signing certificate using ACM, and use that to sign updates in Amazon FreeRTOS and AWS IoT Device Management.  For more information about AWS Signer, see the AWS Signer Developer Guide",
      loadSpec: "aws/signer",
    },
    {
      name: "sms",
      description:
        "AWS Server Migration Service AWS Server Migration Service (AWS SMS) makes it easier and faster for you to migrate your on-premises workloads to AWS. To learn more about AWS SMS, see the following resources:    AWS Server Migration Service product page     AWS Server Migration Service User Guide",
      loadSpec: "aws/sms",
    },
    {
      name: "sms-voice",
      description: "Pinpoint SMS and Voice Messaging public facing APIs",
      loadSpec: "aws/sms-voice",
    },
    {
      name: "snowball",
      description:
        "AWS Snow Family is a petabyte-scale data transport solution that uses secure devices to transfer large amounts of data between your on-premises data centers and Amazon Simple Storage Service (Amazon S3). The Snow commands described here provide access to the same functionality that is available in the AWS Snow Family Management Console, which enables you to create and manage jobs for a Snow device. To transfer data locally with a Snow device, you'll need to use the Snowball Edge client or the Amazon S3 API Interface for Snowball or AWS OpsHub for Snow Family. For more information, see the User Guide",
      loadSpec: "aws/snowball",
    },
    {
      name: "sns",
      description:
        "Amazon Simple Notification Service Amazon Simple Notification Service (Amazon SNS) is a web service that enables you to build distributed web-enabled applications. Applications can use Amazon SNS to easily push real-time notification messages to interested subscribers over multiple delivery protocols. For more information about this product see the Amazon SNS product page. For detailed information about Amazon SNS features and their associated API calls, see the Amazon SNS Developer Guide.  For information on the permissions you need to use this API, see Identity and access management in Amazon SNS in the Amazon SNS Developer Guide.  We also provide SDKs that enable you to access Amazon SNS from your preferred programming language. The SDKs contain functionality that automatically takes care of tasks such as: cryptographically signing your service requests, retrying requests, and handling error responses. For a list of available SDKs, go to Tools for Amazon Web Services",
      loadSpec: "aws/sns",
    },
    {
      name: "sqs",
      description:
        "Welcome to the Amazon Simple Queue Service API Reference. Amazon Simple Queue Service (Amazon SQS) is a reliable, highly-scalable hosted queue for storing messages as they travel between applications or microservices. Amazon SQS moves data between distributed application components and helps you decouple these components. For information on the permissions you need to use this API, see Identity and access management in the Amazon Simple Queue Service Developer Guide.  You can use AWS SDKs to access Amazon SQS using your favorite programming language. The SDKs perform tasks such as the following automatically:   Cryptographically sign your service requests   Retry requests   Handle error responses    Additional information     Amazon SQS Product Page     Amazon Simple Queue Service Developer Guide     Making API Requests     Amazon SQS Message Attributes     Amazon SQS Dead-Letter Queues       Amazon SQS in the AWS CLI Command Reference      Amazon Web Services General Reference     Regions and Endpoints",
      loadSpec: "aws/sqs",
    },
    {
      name: "ssm",
      description:
        "AWS Systems Manager AWS Systems Manager is a collection of capabilities that helps you automate management tasks such as collecting system inventory, applying operating system (OS) patches, automating the creation of Amazon Machine Images (AMIs), and configuring operating systems (OSs) and applications at scale. Systems Manager lets you remotely and securely manage the configuration of your managed instances. A managed instance is any Amazon Elastic Compute Cloud instance (EC2 instance), or any on-premises server or virtual machine (VM) in your hybrid environment that has been configured for Systems Manager. This reference is intended to be used with the AWS Systems Manager User Guide. To get started, verify prerequisites and configure managed instances. For more information, see Setting up AWS Systems Manager in the AWS Systems Manager User Guide. For information about other API actions you can perform on EC2 instances, see the Amazon EC2 API Reference. For information about how to use a Query API, see Making API requests",
      loadSpec: "aws/ssm",
    },
    {
      name: "sso",
      description:
        "AWS Single Sign-On Portal is a web service that makes it easy for you to assign user access to AWS SSO resources such as the user portal. Users can get AWS account applications and roles assigned to them and get federated into the application. For general information about AWS SSO, see What is AWS Single Sign-On? in the AWS SSO User Guide. This API reference guide describes the AWS SSO Portal operations that you can call programmatically and includes detailed information on data types and errors.  AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms, such as Java, Ruby, .Net, iOS, or Android. The SDKs provide a convenient way to create programmatic access to AWS SSO and other AWS services. For more information about the AWS SDKs, including how to download and install them, see Tools for Amazon Web Services",
      loadSpec: "aws/sso",
    },
    {
      name: "sso-admin",
      description: "",
      loadSpec: "aws/sso-admin",
    },
    {
      name: "sso-oidc",
      description:
        "AWS Single Sign-On (SSO) OpenID Connect (OIDC) is a web service that enables a client (such as AWS CLI or a native application) to register with AWS SSO. The service also enables the client to fetch the user\u2019s access token upon successful authentication and authorization with AWS SSO. This service conforms with the OAuth 2.0 based implementation of the device authorization grant standard (https://tools.ietf.org/html/rfc8628). For general information about AWS SSO, see What is AWS Single Sign-On? in the AWS SSO User Guide. This API reference guide describes the AWS SSO OIDC operations that you can call programmatically and includes detailed information on data types and errors.  AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms such as Java, Ruby, .Net, iOS, and Android. The SDKs provide a convenient way to create programmatic access to AWS SSO and other AWS services. For more information about the AWS SDKs, including how to download and install them, see Tools for Amazon Web Services",
      loadSpec: "aws/sso-oidc",
    },
    {
      name: "stepfunctions",
      description:
        "AWS Step Functions AWS Step Functions is a service that lets you coordinate the components of distributed applications and microservices using visual workflows. You can use Step Functions to build applications from individual components, each of which performs a discrete function, or task, allowing you to scale and change applications quickly. Step Functions provides a console that helps visualize the components of your application as a series of steps. Step Functions automatically triggers and tracks each step, and retries steps when there are errors, so your application executes predictably and in the right order every time. Step Functions logs the state of each step, so you can quickly diagnose and debug any issues. Step Functions manages operations and underlying infrastructure to ensure your application is available at any scale. You can run tasks on AWS, your own servers, or any system that has access to AWS. You can access and use Step Functions using the console, the AWS SDKs, or an HTTP API. For more information about Step Functions, see the  AWS Step Functions Developer Guide",
      loadSpec: "aws/stepfunctions",
    },
    {
      name: "storagegateway",
      description:
        "AWS Storage Gateway Service AWS Storage Gateway is the service that connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between an organization's on-premises IT environment and the AWS storage infrastructure. The service enables you to securely upload data to the AWS Cloud for cost effective backup and rapid disaster recovery. Use the following links to get started using the AWS Storage Gateway Service API Reference:    AWS Storage Gateway required request headers: Describes the required headers that you must send with every POST request to AWS Storage Gateway.    Signing requests: AWS Storage Gateway requires that you authenticate every request you send; this topic describes how sign such a request.    Error responses: Provides reference information about AWS Storage Gateway errors.    Operations in AWS Storage Gateway: Contains detailed descriptions of all AWS Storage Gateway operations, their request parameters, response elements, possible errors, and examples of requests and responses.    AWS Storage Gateway endpoints and quotas: Provides a list of each AWS Region and the endpoints available for use with AWS Storage Gateway.    AWS Storage Gateway resource IDs are in uppercase. When you use these resource IDs with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change your resource ID to lowercase to use it with the EC2 API. For example, in Storage Gateway the ID for a volume might be vol-AA22BB012345DAF670. When you use this ID with the EC2 API, you must change it to vol-aa22bb012345daf670. Otherwise, the EC2 API might not behave as expected.   IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway volumes are changing to a longer format. Starting in December 2016, all new volumes and snapshots will be created with a 17-character string. Starting in April 2016, you will be able to use these longer IDs so you can test your systems with the new format. For more information, see Longer EC2 and EBS resource IDs. For example, a volume Amazon Resource Name (ARN) with the longer volume ID format looks like the following:  arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG. A snapshot ID with the longer ID format looks like the following: snap-78e226633445566ee. For more information, see Announcement: Heads-up \u2013 Longer AWS Storage Gateway volume and snapshot IDs coming in 2016",
      loadSpec: "aws/storagegateway",
    },
    {
      name: "sts",
      description:
        "AWS Security Token Service AWS Security Token Service (STS) enables you to request temporary, limited-privilege credentials for AWS Identity and Access Management (IAM) users or for users that you authenticate (federated users). This guide provides descriptions of the STS API. For more information about using this service, see Temporary Security Credentials",
      loadSpec: "aws/sts",
    },
    {
      name: "support",
      description:
        "AWS Support The AWS Support API reference is intended for programmers who need detailed information about the AWS Support operations and data types. This service enables you to manage your AWS Support cases programmatically. It uses HTTP methods that return results in JSON format.    You must have a Business or Enterprise support plan to use the AWS Support API.    If you call the AWS Support API from an account that does not have a Business or Enterprise support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see AWS Support.    The AWS Support service also exposes a set of AWS Trusted Advisor features. You can retrieve a list of checks and their descriptions, get check results, specify checks to refresh, and get the refresh status of checks. The following list describes the AWS Support case management operations:    Service names, issue categories, and available severity levels. The DescribeServices and DescribeSeverityLevels operations return AWS service names, service codes, service categories, and problem severity levels. You use these values when you call the CreateCase operation.    Case creation, case details, and case resolution. The CreateCase, DescribeCases, DescribeAttachment, and ResolveCase operations create AWS Support cases, retrieve information about cases, and resolve cases.    Case communication. The DescribeCommunications, AddCommunicationToCase, and AddAttachmentsToSet operations retrieve and add communications and attachments to AWS Support cases.   The following list describes the operations available from the AWS Support service for Trusted Advisor:    DescribeTrustedAdvisorChecks returns the list of checks that run against your AWS resources.   Using the checkId for a specific check returned by DescribeTrustedAdvisorChecks, you can call DescribeTrustedAdvisorCheckResult to obtain the results for the check that you specified.    DescribeTrustedAdvisorCheckSummaries returns summarized results for one or more Trusted Advisor checks.    RefreshTrustedAdvisorCheck requests that Trusted Advisor rerun a specified check.    DescribeTrustedAdvisorCheckRefreshStatuses reports the refresh status of one or more checks.   For authentication of requests, AWS Support uses Signature Version 4 Signing Process. See About the AWS Support API in the AWS Support User Guide for information about how to use this service to create and manage your support cases, and how to call Trusted Advisor for results of checks on your resources",
      loadSpec: "aws/support",
    },
    {
      name: "swf",
      description:
        "Amazon Simple Workflow Service The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to coordinate work across distributed components. In Amazon SWF, a task represents a logical unit of work that is performed by a component of your workflow. Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and concurrency in accordance with the logical flow of the application. Amazon SWF gives you full control over implementing tasks and coordinating them without worrying about underlying complexities such as tracking their progress and maintaining their state. This documentation serves as reference only. For a broader overview of the Amazon SWF programming model, see the  Amazon SWF Developer Guide",
      loadSpec: "aws/swf",
    },
    {
      name: "synthetics",
      description:
        "Amazon CloudWatch Synthetics You can use Amazon CloudWatch Synthetics to continually monitor your services. You can create and manage canaries, which are modular, lightweight scripts that monitor your endpoints and APIs from the outside-in. You can set up your canaries to run 24 hours a day, once per minute. The canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. The canaries seamlessly integrate with CloudWatch ServiceLens to help you trace the causes of impacted nodes in your applications. For more information, see Using ServiceLens to Monitor the Health of Your Applications in the Amazon CloudWatch User Guide. Before you create and manage canaries, be aware of the security considerations. For more information, see Security Considerations for Synthetics Canaries",
      loadSpec: "aws/synthetics",
    },
    {
      name: "textract",
      description:
        "Amazon Textract detects and analyzes text in documents and converts it into machine-readable text. This is the API reference documentation for Amazon Textract",
      loadSpec: "aws/textract",
    },
    {
      name: "timestream-query",
      description: "",
      loadSpec: "aws/timestream-query",
    },
    {
      name: "timestream-write",
      description:
        "Amazon Timestream is a fast, scalable, fully managed time series database service that makes it easy to store and analyze trillions of time series data points per day. With Timestream, you can easily store and analyze IoT sensor data to derive insights from your IoT applications. You can analyze industrial telemetry to streamline equipment management and maintenance. You can also store and analyze log data and metrics to improve the performance and availability of your applications. Timestream is built from the ground up to effectively ingest, process, and store time series data. It organizes data to optimize query processing. It automatically scales based on the volume of data ingested and on the query volume to ensure you receive optimal performance while inserting and querying data. As your data grows over time, Timestream\u2019s adaptive query processing engine spans across storage tiers to provide fast analysis while reducing costs",
      loadSpec: "aws/timestream-write",
    },
    {
      name: "transcribe",
      description: "Operations and objects for transcribing speech to text",
      loadSpec: "aws/transcribe",
    },
    {
      name: "transfer",
      description:
        "AWS Transfer Family is a fully managed service that enables the transfer of files over the File Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH) File Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon S3). AWS helps you seamlessly migrate your file transfer workflows to AWS Transfer Family by integrating with existing authentication systems, and providing DNS routing with Amazon Route 53 so nothing changes for your customers and partners, or their applications. With your data in Amazon S3, you can use it with AWS services for processing, analytics, machine learning, and archiving. Getting started with AWS Transfer Family is easy since there is no infrastructure to buy and set up",
      loadSpec: "aws/transfer",
    },
    {
      name: "translate",
      description:
        "Provides translation between one source language and another of the same set of languages",
      loadSpec: "aws/translate",
    },
    {
      name: "waf",
      description:
        "This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide.  For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use.   This is the AWS WAF Classic API Reference for using AWS WAF Classic with Amazon CloudFront. The AWS WAF Classic actions and data types listed in the reference are available for protecting Amazon CloudFront distributions. You can use these actions and data types via the endpoint waf.amazonaws.com. This guide is for developers who need detailed information about the AWS WAF Classic API actions, data types, and errors. For detailed information about AWS WAF Classic features and an overview of how to use the AWS WAF Classic API, see the AWS WAF Classic in the developer guide",
      loadSpec: "aws/waf",
    },
    {
      name: "waf-regional",
      description:
        "This is AWS WAF Classic Regional documentation. For more information, see AWS WAF Classic in the developer guide.  For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use.   This is the AWS WAF Regional Classic API Reference for using AWS WAF Classic with the AWS resources, Elastic Load Balancing (ELB) Application Load Balancers and API Gateway APIs. The AWS WAF Classic actions and data types listed in the reference are available for protecting Elastic Load Balancing (ELB) Application Load Balancers and API Gateway APIs. You can use these actions and data types by means of the endpoints listed in AWS Regions and Endpoints. This guide is for developers who need detailed information about the AWS WAF Classic API actions, data types, and errors. For detailed information about AWS WAF Classic features and an overview of how to use the AWS WAF Classic API, see the AWS WAF Classic in the developer guide",
      loadSpec: "aws/waf-regional",
    },
    {
      name: "wafv2",
      description:
        'This is the latest version of the AWS WAF API, released in November, 2019. The names of the entities that you use to access this API, like endpoints and namespaces, all have the versioning information added, like "V2" or "v2", to distinguish from the prior version. We recommend migrating your resources to this version, because it has a number of significant improvements. If you used AWS WAF prior to this release, you can\'t use this AWS WAFV2 API to access any AWS WAF resources that you created before. You can access your old rules, web ACLs, and other AWS WAF resources only through the AWS WAF Classic APIs. The AWS WAF Classic APIs have retained the prior names, endpoints, and namespaces.  For information, including how to migrate your AWS WAF resources to this version, see the AWS WAF Developer Guide.   AWS WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront, an Amazon API Gateway REST API, an Application Load Balancer, or an AWS AppSync GraphQL API. AWS WAF also lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, the API Gateway REST API, CloudFront distribution, the Application Load Balancer, or the AWS AppSync GraphQL API responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You also can configure CloudFront to return a custom error page when a request is blocked. This API guide is for developers who need detailed information about AWS WAF API actions, data types, and errors. For detailed information about AWS WAF features and an overview of how to use AWS WAF, see the AWS WAF Developer Guide. You can make calls using the endpoints listed in AWS Service Endpoints for AWS WAF.    For regional applications, you can use any of the endpoints in the list. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.    For AWS CloudFront applications, you must use the API endpoint listed for US East (N. Virginia): us-east-1.   Alternatively, you can use one of the AWS SDKs to access an API that\'s tailored to the programming language or platform that you\'re using. For more information, see AWS SDKs. We currently provide two versions of the AWS WAF API: this API and the prior versions, the classic AWS WAF APIs. This new API provides the same functionality as the older versions, with the following major improvements:   You use one API for both global and regional applications. Where you need to distinguish the scope, you specify a Scope parameter and set it to CLOUDFRONT or REGIONAL.    You can define a Web ACL or rule group with a single call, and update it with a single call. You define all rule specifications in JSON format, and pass them to your rule group or Web ACL calls.   The limits AWS WAF places on the use of rules more closely reflects the cost of running each type of rule. Rule groups include capacity settings, so you know the maximum cost of a rule group when you use it',
      loadSpec: "aws/wafv2",
    },
    {
      name: "wellarchitected",
      description:
        "AWS Well-Architected Tool This is the AWS Well-Architected Tool API Reference. The AWS Well-Architected Tool API provides programmatic access to the AWS Well-Architected Tool in the AWS Management Console. For information about the AWS Well-Architected Tool, see the AWS Well-Architected Tool User Guide",
      loadSpec: "aws/wellarchitected",
    },
    {
      name: "workdocs",
      description:
        "The WorkDocs API is designed for the following use cases:   File Migration: File migration applications are supported for users who want to migrate their files from an on-premises or off-premises file system or service. Users can insert files into a user directory structure, as well as allow for basic metadata changes, such as modifications to the permissions of files.   Security: Support security applications are supported for users who have additional security needs, such as antivirus or data loss prevention. The API actions, along with AWS CloudTrail, allow these applications to detect when changes occur in Amazon WorkDocs. Then, the application can take the necessary actions and replace the target file. If the target file violates the policy, the application can also choose to email the user.   eDiscovery/Analytics: General administrative applications are supported, such as eDiscovery and analytics. These applications can choose to mimic or record the actions in an Amazon WorkDocs site, along with AWS CloudTrail, to replicate data for eDiscovery, backup, or analytical applications.   All Amazon WorkDocs API actions are Amazon authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of IAM users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the Amazon WorkDocs site, the IAM user gains full administrative visibility into the entire Amazon WorkDocs site (or as set in the IAM policy). This includes, but is not limited to, the ability to modify file permissions and upload any file to any user. This allows developers to perform the three use cases above, as well as give users the ability to grant access on a selective basis using the IAM model",
      loadSpec: "aws/workdocs",
    },
    {
      name: "worklink",
      description:
        "Amazon WorkLink is a cloud-based service that provides secure access to internal websites and web apps from iOS and Android phones. In a single step, your users, such as employees, can access internal websites as efficiently as they access any other public website. They enter a URL in their web browser, or choose a link to an internal website in an email. Amazon WorkLink authenticates the user's access and securely renders authorized internal web content in a secure rendering service in the AWS cloud. Amazon WorkLink doesn't download or store any internal web content on mobile devices",
      loadSpec: "aws/worklink",
    },
    {
      name: "workmail",
      description:
        "Amazon WorkMail is a secure, managed business email and calendaring service with support for existing desktop and mobile email clients. You can access your email, contacts, and calendars using Microsoft Outlook, your browser, or other native iOS and Android email applications. You can integrate WorkMail with your existing corporate directory and control both the keys that encrypt your data and the location in which your data is stored. The WorkMail API is designed for the following scenarios:   Listing and describing organizations     Managing users     Managing groups     Managing resources   All WorkMail API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the WorkMail site, the IAM user gains full administrative visibility into the entire WorkMail organization (or as set in the IAM policy). This includes, but is not limited to, the ability to create, update, and delete users, groups, and resources. This allows developers to perform the scenarios listed above, as well as give users the ability to grant access on a selective basis using the IAM model",
      loadSpec: "aws/workmail",
    },
    {
      name: "workmailmessageflow",
      description:
        "The WorkMail Message Flow API provides access to email messages as they are being sent and received by a WorkMail organization",
      loadSpec: "aws/workmailmessageflow",
    },
    {
      name: "workspaces",
      description:
        "Amazon WorkSpaces Service Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows and Amazon Linux desktops for your users",
      loadSpec: "aws/workspaces",
    },
    {
      name: "xray",
      description:
        "AWS X-Ray provides APIs for managing debug traces and retrieving service maps and other data created by processing those traces",
      loadSpec: "aws/xray",
    },
    {
      name: "s3api",
      description: "",
      loadSpec: "aws/s3api",
    },
    {
      name: "s3",
      description:
        'This section explains prominent concepts and notations in the set of high-level S3 commands provided.\n\nPath Argument Type\n++++++++++++++++++\n\nWhenever using a command, at least one path argument must be specified.  There\nare two types of path arguments: ``LocalPath`` and ``S3Uri``.\n\n``LocalPath``: represents the path of a local file or directory.  It can be\nwritten as an absolute path or relative path.\n\n``S3Uri``: represents the location of a S3 object, prefix, or bucket.  This\nmust be written in the form ``s3://mybucket/mykey`` where ``mybucket`` is\nthe specified S3 bucket, ``mykey`` is the specified S3 key.  The path argument\nmust begin with ``s3://`` in order to denote that the path argument refers to\na S3 object. Note that prefixes are separated by forward slashes. For\nexample, if the S3 object ``myobject`` had the prefix ``myprefix``, the\nS3 key would be ``myprefix/myobject``, and if the object was in the bucket\n``mybucket``, the ``S3Uri`` would be ``s3://mybucket/myprefix/myobject``.\n\n``S3Uri`` also supports S3 access points. To specify an access point, this\nvalue must be of the form ``s3://<access-point-arn>/<key>``. For example if\nthe access point ``myaccesspoint`` to be used has the ARN:\n``arn:aws:s3:us-west-2:123456789012:accesspoint/myaccesspoint`` and the object\nbeing accessed has the key ``mykey``, then the ``S3URI`` used must be:\n``s3://arn:aws:s3:us-west-2:123456789012:accesspoint/myaccesspoint/mykey``.\nSimilar to bucket names, you can also use prefixes with access point ARNs for\nthe ``S3Uri``. For example:\n``s3://arn:aws:s3:us-west-2:123456789012:accesspoint/myaccesspoint/myprefix/``\n\nThe higher level ``s3`` commands do **not** support access point object ARNs.\nFor example, if the following was specified:\n``s3://arn:aws:s3:us-west-2:123456789012:accesspoint/myaccesspoint/object/mykey``\nthe ``S3URI`` will resolve to the object key ``object/mykey``\n\n\n\nOrder of Path Arguments\n+++++++++++++++++++++++\n\nEvery command takes one or two positional path arguments.  The first path\nargument represents the source, which is the local file/directory or S3\nobject/prefix/bucket that is being referenced.  If there is a second path\nargument, it represents the destination, which is the local file/directory\nor S3 object/prefix/bucket that is being operated on.  Commands with only\none path argument do not have a destination because the operation is being\nperformed only on the source.\n\n\nSingle Local File and S3 Object Operations\n++++++++++++++++++++++++++++++++++++++++++\n\nSome commands perform operations only on single files and S3 objects.  The\nfollowing commands are single file/object operations if no ``--recursive``\nflag is provided.\n\n    * ``cp``\n    * ``mv``\n    * ``rm``\n\nFor this type of operation, the first path argument, the source, must exist\nand be a local file or S3 object.  The second path argument, the destination,\ncan be the name of a local file, local directory, S3 object, S3 prefix,\nor S3 bucket.\n\nThe destination is indicated as a local directory, S3 prefix, or S3 bucket\nif it ends with a forward slash or back slash.  The use of slash depends\non the path argument type.  If the path argument is a ``LocalPath``,\nthe type of slash is the separator used by the operating system.  If the\npath is a ``S3Uri``, the forward slash must always be used.  If a slash\nis at the end of the destination, the destination file or object will\nadopt the name of the source file or object.  Otherwise, if there is no\nslash at the end, the file or object will be saved under the name provided.\nSee examples in ``cp`` and ``mv`` to illustrate this description.\n\n\nDirectory and S3 Prefix Operations\n++++++++++++++++++++++++++++++++++\n\nSome commands only perform operations on the contents of a local directory\nor S3 prefix/bucket.  Adding or omitting a forward slash or back slash to\nthe end of any path argument, depending on its type, does not affect the\nresults of the operation.  The following commands will always result in\na directory or S3 prefix/bucket operation:\n\n* ``sync``\n* ``mb``\n* ``rb``\n* ``ls``\n\n\nUse of Exclude and Include Filters\n++++++++++++++++++++++++++++++++++\n\nCurrently, there is no support for the use of UNIX style wildcards in\na command\'s path arguments.  However, most commands have ``--exclude "<value>"``\nand ``--include "<value>"`` parameters that can achieve the desired result.\nThese parameters perform pattern matching to either exclude or include\na particular file or object.  The following pattern symbols are supported.\n\n    * ``*``: Matches everything\n    * ``?``: Matches any single character\n    * ``[sequence]``: Matches any character in ``sequence``\n    * ``[!sequence]``: Matches any character not in ``sequence``\n\nAny number of these parameters can be passed to a command.  You can do this by\nproviding an ``--exclude`` or ``--include`` argument multiple times, e.g.\n``--include "*.txt" --include "*.png"``.\nWhen there are multiple filters, the rule is the filters that appear later in\nthe command take precedence over filters that appear earlier in the command.\nFor example, if the filter parameters passed to the command were\n\n::\n\n    --exclude "*" --include "*.txt"\n\nAll files will be excluded from the command except for files ending with\n``.txt``  However, if the order of the filter parameters was changed to\n\n::\n\n    --include "*.txt" --exclude "*"\n\nAll files will be excluded from the command.\n\nEach filter is evaluated against the **source directory**.  If the source\nlocation is a file instead of a directory, the directory containing the file is\nused as the source directory.  For example, suppose you had the following\ndirectory structure::\n\n    /tmp/foo/\n      .git/\n      |---config\n      |---description\n      foo.txt\n      bar.txt\n      baz.jpg\n\nIn the command ``aws s3 sync /tmp/foo s3://bucket/`` the source directory is\n``/tmp/foo``.  Any include/exclude filters will be evaluated with the source\ndirectory prepended.  Below are several examples to demonstrate this.\n\nGiven the directory structure above and the command\n``aws s3 cp /tmp/foo s3://bucket/ --recursive --exclude ".git/*"``, the\nfiles ``.git/config`` and ``.git/description`` will be excluded from the\nfiles to upload because the exclude filter ``.git/*`` will have the source\nprepended to the filter.  This means that::\n\n    /tmp/foo/.git/* -> /tmp/foo/.git/config       (matches, should exclude)\n    /tmp/foo/.git/* -> /tmp/foo/.git/description  (matches, should exclude)\n    /tmp/foo/.git/* -> /tmp/foo/foo.txt  (does not match, should include)\n    /tmp/foo/.git/* -> /tmp/foo/bar.txt  (does not match, should include)\n    /tmp/foo/.git/* -> /tmp/foo/baz.jpg  (does not match, should include)\n\nThe command ``aws s3 cp /tmp/foo/ s3://bucket/ --recursive --exclude "ba*"``\nwill exclude ``/tmp/foo/bar.txt`` and ``/tmp/foo/baz.jpg``::\n\n    /tmp/foo/ba* -> /tmp/foo/.git/config      (does not match, should include)\n    /tmp/foo/ba* -> /tmp/foo/.git/description (does not match, should include)\n    /tmp/foo/ba* -> /tmp/foo/foo.txt          (does not match, should include)\n    /tmp/foo/ba* -> /tmp/foo/bar.txt  (matches, should exclude)\n    /tmp/foo/ba* -> /tmp/foo/baz.jpg  (matches, should exclude)\n\n\nNote that, by default, *all files are included*.  This means that\nproviding **only** an ``--include`` filter will not change what\nfiles are transferred.  ``--include`` will only re-include files that\nhave been excluded from an ``--exclude`` filter.  If you only want\nto upload files with a particular extension, you need to first exclude\nall files, then re-include the files with the particular extension.\nThis command will upload **only** files ending with ``.jpg``::\n\n    aws s3 cp /tmp/foo/ s3://bucket/ --recursive --exclude "*" --include "*.jpg"\n\nIf you wanted to include both ``.jpg`` files as well as ``.txt`` files you\ncan run::\n\n    aws s3 cp /tmp/foo/ s3://bucket/ --recursive \\\n        --exclude "*" --include "*.jpg" --include "*.txt"\n',
      loadSpec: "aws/s3",
    },
    {
      name: "deploy",
      description:
        "AWS CodeDeploy AWS CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances running in your own facility, serverless AWS Lambda functions, or applications in an Amazon ECS service. You can deploy a nearly unlimited variety of application content, such as an updated Lambda function, updated applications in an Amazon ECS service, code, web and configuration files, executables, packages, scripts, multimedia files, and so on. AWS CodeDeploy can deploy application content stored in Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes to your existing code before you can use AWS CodeDeploy. AWS CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications, without many of the risks associated with error-prone manual deployments.  AWS CodeDeploy Components  Use the information in this guide to help you work with the following AWS CodeDeploy components:    Application: A name that uniquely identifies the application you want to deploy. AWS CodeDeploy uses this name, which functions as a container, to ensure the correct combination of revision, deployment configuration, and deployment group are referenced during a deployment.    Deployment group: A set of individual instances, CodeDeploy Lambda deployment configuration settings, or an Amazon ECS service and network details. A Lambda deployment group specifies how to route traffic to a new version of a Lambda function. An Amazon ECS deployment group specifies the service created in Amazon ECS to deploy, a load balancer, and a listener to reroute production traffic to an updated containerized application. An EC2/On-premises deployment group contains individually tagged instances, Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All deployment groups can specify optional trigger, alarm, and rollback settings.    Deployment configuration: A set of deployment rules and deployment success and failure conditions used by AWS CodeDeploy during a deployment.    Deployment: The process and the components used when updating a Lambda function, a containerized application in an Amazon ECS service, or of installing content on one or more instances.     Application revisions: For an AWS Lambda deployment, this is an AppSpec file that specifies the Lambda function to be updated and one or more functions to validate deployment lifecycle events. For an Amazon ECS deployment, this is an AppSpec file that specifies the Amazon ECS task definition, container, and port where production traffic is rerouted. For an EC2/On-premises deployment, this is an archive file that contains source content\u2014source code, webpages, executable files, and deployment scripts\u2014along with an AppSpec file. Revisions are stored in Amazon S3 buckets or GitHub repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely identified by its commit ID.   This guide also contains information to help you get details about the instances in your deployments, to make on-premises instances available for AWS CodeDeploy deployments, to get details about a Lambda function deployment, and to get details about Amazon ECS service deployments.  AWS CodeDeploy Information Resources     AWS CodeDeploy User Guide     AWS CodeDeploy API Reference Guide     AWS CLI Reference for AWS CodeDeploy     AWS CodeDeploy Developer Forum",
      loadSpec: "aws/deploy",
    },
    {
      name: "configservice",
      description:
        "AWS Config AWS Config provides a way to keep track of the configurations of all the AWS resources associated with your AWS account. You can use AWS Config to get the current and historical configurations of each AWS resource and also to get information about the relationship between the resources. An AWS resource can be an Amazon Compute Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an elastic network Interface (ENI), or a security group. For a complete list of resources currently supported by AWS Config, see Supported AWS Resources. You can access and manage AWS Config through the AWS Management Console, the AWS Command Line Interface (AWS CLI), the AWS Config API, or the AWS SDKs for AWS Config. This reference guide contains documentation for the AWS Config API and the AWS CLI commands that you can use to manage AWS Config. The AWS Config API uses the Signature Version 4 protocol for signing requests. For more information about how to sign a request with this protocol, see Signature Version 4 Signing Process. For detailed information about AWS Config features and their associated actions or commands, as well as how to work with AWS Management Console, see What Is AWS Config in the AWS Config Developer Guide",
      loadSpec: "aws/configservice",
    },
    {
      name: "opsworks-cm",
      description:
        "AWS OpsWorks CM AWS OpsWorks for configuration management (CM) is a service that runs and manages configuration management servers. You can use AWS OpsWorks CM to create and manage AWS OpsWorks for Chef Automate and AWS OpsWorks for Puppet Enterprise servers, and add or remove nodes for the servers to manage.  Glossary of terms     Server: A configuration management server that can be highly-available. The configuration management server runs on an Amazon Elastic Compute Cloud (EC2) instance, and may use various other AWS services, such as Amazon Relational Database Service (RDS) and Elastic Load Balancing. A server is a generic abstraction over the configuration manager that you want to use, much like Amazon RDS. In AWS OpsWorks CM, you do not start or stop servers. After you create servers, they continue to run until they are deleted.    Engine: The engine is the specific configuration manager that you want to use. Valid values in this release include ChefAutomate and Puppet.    Backup: This is an application-level backup of the data that the configuration manager stores. AWS OpsWorks CM creates an S3 bucket for backups when you launch the first server. A backup maintains a snapshot of a server's configuration-related attributes at the time the backup starts.    Events: Events are always related to a server. Events are written during server creation, when health checks run, when backups are created, when system maintenance is performed, etc. When you delete a server, the server's events are also deleted.    Account attributes: Every account has attributes that are assigned in the AWS OpsWorks CM database. These attributes store information about configuration limits (servers, backups, etc.) and your customer account.     Endpoints  AWS OpsWorks CM supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Your servers can only be accessed or managed within the endpoint in which they are created.   opsworks-cm.us-east-1.amazonaws.com   opsworks-cm.us-east-2.amazonaws.com   opsworks-cm.us-west-1.amazonaws.com   opsworks-cm.us-west-2.amazonaws.com   opsworks-cm.ap-northeast-1.amazonaws.com   opsworks-cm.ap-southeast-1.amazonaws.com   opsworks-cm.ap-southeast-2.amazonaws.com   opsworks-cm.eu-central-1.amazonaws.com   opsworks-cm.eu-west-1.amazonaws.com   For more information, see AWS OpsWorks endpoints and quotas in the AWS General Reference.  Throttling limits  All API operations allow for five requests per second with a burst of 10 requests per second",
      loadSpec: "aws/opsworks-cm",
    },
    {
      name: "runtime.sagemaker",
      description: "The Amazon SageMaker runtime API",
      loadSpec: "aws/runtime.sagemaker",
    },
    {
      name: "history",
      description:
        "Commands to interact with the history of AWS CLI commands ran over time. To record the history of AWS CLI commands set ``cli_history`` to ``enabled`` in the ``~/.aws/config`` file. This can be done by running:\n\n``$ aws configure set cli_history enabled``",
      loadSpec: "aws/history",
    },
  ],
};

export default completionSpec;
