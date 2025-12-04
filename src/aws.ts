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
        "Identity and Access Management Access Analyzer helps you to set, verify, and refine your IAM policies by providing a suite of capabilities. Its features include findings for external and unused access, basic and custom policy checks for validating policies, and policy generation to generate fine-grained policies. To start using IAM Access Analyzer to identify external or unused access, you first need to create an analyzer.  External access analyzers help identify potential risks of accessing resources by enabling you to identify any resource policies that grant access to an external principal. It does this by using logic-based reasoning to analyze resource-based policies in your Amazon Web Services environment. An external principal can be another Amazon Web Services account, a root user, an IAM user or role, a federated user, an Amazon Web Services service, or an anonymous user. You can also use IAM Access Analyzer to preview public and cross-account access to your resources before deploying permissions changes.  Unused access analyzers help identify potential identity access risks by enabling you to identify unused IAM roles, unused access keys, unused console passwords, and IAM principals with unused service and action-level permissions. Beyond findings, IAM Access Analyzer provides basic and custom policy checks to validate IAM policies before deploying permissions changes. You can use policy generation to refine permissions by attaching a policy generated using access activity logged in CloudTrail logs.  This guide describes the IAM Access Analyzer operations that you can call programmatically. For general information about IAM Access Analyzer, see Identity and Access Management Access Analyzer in the IAM User Guide",
      loadSpec: "aws/accessanalyzer",
    },
    {
      name: "account",
      description: "Operations for Amazon Web Services Account Management",
      loadSpec: "aws/account",
    },
    {
      name: "acm",
      description:
        "Certificate Manager You can use Certificate Manager (ACM) to manage SSL/TLS certificates for your Amazon Web Services-based websites and applications. For more information about using ACM, see the Certificate Manager User Guide",
      loadSpec: "aws/acm",
    },
    {
      name: "acm-pca",
      description:
        "This is the Amazon Web Services Private Certificate Authority API Reference. It provides descriptions, syntax, and usage examples for each of the actions and data types involved in creating and managing a private certificate authority (CA) for your organization. The documentation for each action shows the API request parameters and the JSON response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is tailored to the programming language or platform that you prefer. For more information, see Amazon Web Services SDKs. Each Amazon Web Services Private CA API operation has a quota that determines the number of times the operation can be called per second. Amazon Web Services Private CA throttles API requests at different rates depending on the operation. Throttling means that Amazon Web Services Private CA rejects an otherwise valid request because the request exceeds the operation's quota for the number of requests per second. When a request is throttled, Amazon Web Services Private CA returns a ThrottlingException error. Amazon Web Services Private CA does not guarantee a minimum request rate for APIs.  To see an up-to-date list of your Amazon Web Services Private CA quotas, or to request a quota increase, log into your Amazon Web Services account and visit the Service Quotas console",
      loadSpec: "aws/acm-pca",
    },
    {
      name: "amp",
      description:
        "Amazon Managed Service for Prometheus is a serverless, Prometheus-compatible monitoring service for container metrics that makes it easier to securely monitor container environments at scale. With Amazon Managed Service for Prometheus, you can use the same open-source Prometheus data model and query language that you use today to monitor the performance of your containerized workloads, and also enjoy improved scalability, availability, and security without having to manage the underlying infrastructure. For more information about Amazon Managed Service for Prometheus, see the Amazon Managed Service for Prometheus User Guide. Amazon Managed Service for Prometheus includes two APIs.   Use the Amazon Web Services API described in this guide to manage Amazon Managed Service for Prometheus resources, such as workspaces, rule groups, and alert managers.   Use the Prometheus-compatible API to work within your Prometheus workspace",
      loadSpec: "aws/amp",
    },
    {
      name: "amplify",
      description:
        "Amplify enables developers to develop and deploy cloud-powered mobile and web apps. Amplify Hosting provides a continuous delivery and hosting service for web applications. For more information, see the Amplify Hosting User Guide. The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation for client app development. For more information, see the Amplify Framework",
      loadSpec: "aws/amplify",
    },
    {
      name: "amplifybackend",
      description: "AWS Amplify Admin API",
      loadSpec: "aws/amplifybackend",
    },
    {
      name: "amplifyuibuilder",
      description:
        "The Amplify UI Builder API provides a programmatic interface for creating and configuring user interface (UI) component libraries and themes for use in your Amplify applications. You can then connect these UI components to an application's backend Amazon Web Services resources. You can also use the Amplify Studio visual designer to create UI components and model data for an app. For more information, see Introduction in the Amplify Docs. The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation for client app development. For more information, see the Amplify Framework. For more information about deploying an Amplify application to Amazon Web Services, see the Amplify User Guide",
      loadSpec: "aws/amplifyuibuilder",
    },
    {
      name: "apigateway",
      description:
        "Amazon API Gateway Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. API Gateway allows developers to securely connect mobile and web applications to APIs that run on Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS",
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
        "AppConfig feature flags and dynamic configurations help software builders quickly and securely adjust application behavior in production environments without full code deployments. AppConfig speeds up software release frequency, improves application resiliency, and helps you address emergent issues more quickly. With feature flags, you can gradually release new capabilities to users and measure the impact of those changes before fully deploying the new capabilities to all users. With operational flags and dynamic configurations, you can update block lists, allow lists, throttling limits, logging verbosity, and perform other operational tuning to quickly respond to issues in production environments.  AppConfig is a capability of Amazon Web Services Systems Manager.  Despite the fact that application configuration content can vary greatly from application to application, AppConfig supports the following use cases, which cover a broad spectrum of customer needs:    Feature flags and toggles - Safely release new capabilities to your customers in a controlled environment. Instantly roll back changes if you experience a problem.    Application tuning - Carefully introduce application changes while testing the impact of those changes with users in production environments.    Allow list or block list - Control access to premium features or instantly block specific users without deploying new code.     Centralized configuration storage - Keep your configuration data organized and consistent across all of your workloads. You can use AppConfig to deploy configuration data stored in the AppConfig hosted configuration store, Secrets Manager, Systems Manager, Parameter Store, or Amazon S3.    How AppConfig works  This section provides a high-level description of how AppConfig works and how you get started.  1. Identify configuration values in code you want to manage in the cloud  Before you start creating AppConfig artifacts, we recommend you identify configuration data in your code that you want to dynamically manage using AppConfig. Good examples include feature flags or toggles, allow and block lists, logging verbosity, service limits, and throttling rules, to name a few. If your configuration data already exists in the cloud, you can take advantage of AppConfig validation, deployment, and extension features to further streamline configuration data management.  2. Create an application namespace  To create a namespace, you create an AppConfig artifact called an application. An application is simply an organizational construct like a folder.  3. Create environments  For each AppConfig application, you define one or more environments. An environment is a logical grouping of targets, such as applications in a Beta or Production environment, Lambda functions, or containers. You can also define environments for application subcomponents, such as the Web, Mobile, and Back-end. You can configure Amazon CloudWatch alarms for each environment. The system monitors alarms during a configuration deployment. If an alarm is triggered, the system rolls back the configuration.  4. Create a configuration profile  A configuration profile includes, among other things, a URI that enables AppConfig to locate your configuration data in its stored location and a profile type. AppConfig supports two configuration profile types: feature flags and freeform configurations. Feature flag configuration profiles store their data in the AppConfig hosted configuration store and the URI is simply hosted. For freeform configuration profiles, you can store your data in the AppConfig hosted configuration store or any Amazon Web Services service that integrates with AppConfig, as described in Creating a free form configuration profile in the the AppConfig User Guide. A configuration profile can also include optional validators to ensure your configuration data is syntactically and semantically correct. AppConfig performs a check using the validators when you start a deployment. If any errors are detected, the deployment rolls back to the previous configuration data.  5. Deploy configuration data  When you create a new deployment, you specify the following:   An application ID   A configuration profile ID   A configuration version   An environment ID where you want to deploy the configuration data   A deployment strategy ID that defines how fast you want the changes to take effect   When you call the StartDeployment API action, AppConfig performs the following tasks:   Retrieves the configuration data from the underlying data store by using the location URI in the configuration profile.   Verifies the configuration data is syntactically and semantically correct by using the validators you specified when you created your configuration profile.   Caches a copy of the data so it is ready to be retrieved by your application. This cached copy is called the deployed data.    6. Retrieve the configuration  You can configure AppConfig Agent as a local host and have the agent poll AppConfig for configuration updates. The agent calls the StartConfigurationSession and GetLatestConfiguration API actions and caches your configuration data locally. To retrieve the data, your application makes an HTTP call to the localhost server. AppConfig Agent supports several use cases, as described in Simplified retrieval methods in the the AppConfig User Guide. If AppConfig Agent isn't supported for your use case, you can configure your application to poll AppConfig for configuration updates by directly calling the StartConfigurationSession and GetLatestConfiguration API actions.    This reference is intended to be used with the AppConfig User Guide",
      loadSpec: "aws/appconfig",
    },
    {
      name: "appconfigdata",
      description:
        "AppConfig Data provides the data plane APIs your application uses to retrieve configuration data. Here's how it works: Your application retrieves configuration data by first establishing a configuration session using the AppConfig Data StartConfigurationSession API action. Your session's client then makes periodic calls to GetLatestConfiguration to check for and retrieve the latest data available. When calling StartConfigurationSession, your code sends the following information:   Identifiers (ID or name) of an AppConfig application, environment, and configuration profile that the session tracks.   (Optional) The minimum amount of time the session's client must wait between calls to GetLatestConfiguration.   In response, AppConfig provides an InitialConfigurationToken to be given to the session's client and used the first time it calls GetLatestConfiguration for that session.  This token should only be used once in your first call to GetLatestConfiguration. You must use the new token in the GetLatestConfiguration response (NextPollConfigurationToken) in each subsequent call to GetLatestConfiguration.  When calling GetLatestConfiguration, your client code sends the most recent ConfigurationToken value it has and receives in response:    NextPollConfigurationToken: the ConfigurationToken value to use on the next call to GetLatestConfiguration.    NextPollIntervalInSeconds: the duration the client should wait before making its next call to GetLatestConfiguration. This duration may vary over the course of the session, so it should be used instead of the value sent on the StartConfigurationSession call.   The configuration: the latest data intended for the session. This may be empty if the client already has the latest version of the configuration.    The InitialConfigurationToken and NextPollConfigurationToken should only be used once. To support long poll use cases, the tokens are valid for up to 24 hours. If a GetLatestConfiguration call uses an expired token, the system returns BadRequestException.  For more information and to view example CLI commands that show how to retrieve a configuration using the AppConfig Data StartConfigurationSession and GetLatestConfiguration API actions, see Retrieving the configuration in the AppConfig User Guide",
      loadSpec: "aws/appconfigdata",
    },
    {
      name: "appfabric",
      description:
        "Amazon Web Services AppFabric quickly connects software as a service (SaaS) applications across your organization. This allows IT and security teams to easily manage and secure applications using a standard schema, and employees can complete everyday tasks faster using generative artificial intelligence (AI). You can use these APIs to complete AppFabric tasks, such as setting up audit log ingestions or viewing user access. For more information about AppFabric, including the required permissions to use the service, see the Amazon Web Services AppFabric Administration Guide. For more information about using the Command Line Interface (CLI) to manage your AppFabric resources, see the AppFabric section of the CLI Reference",
      loadSpec: "aws/appfabric",
    },
    {
      name: "appflow",
      description:
        "Welcome to the Amazon AppFlow API reference. This guide is for developers who need detailed information about the Amazon AppFlow API operations, data types, and errors.  Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between software as a service (SaaS) applications like Salesforce, Marketo, Slack, and ServiceNow, and Amazon Web Services like Amazon S3 and Amazon Redshift.  Use the following links to get started on the Amazon AppFlow API:    Actions: An alphabetical list of all Amazon AppFlow API operations.    Data types: An alphabetical list of all Amazon AppFlow data types.    Common parameters: Parameters that all Query operations can use.    Common errors: Client and server errors that all operations can return.   If you're new to Amazon AppFlow, we recommend that you review the Amazon AppFlow User Guide. Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include applicable OAuth attributes (such as auth-code and redirecturi) with the connector-specific ConnectorProfileProperties when creating a new connector profile using Amazon AppFlow API operations. For example, Salesforce users can refer to the  Authorize Apps with OAuth  documentation",
      loadSpec: "aws/appflow",
    },
    {
      name: "appintegrations",
      description:
        "Amazon AppIntegrations actions     Amazon AppIntegrations data types    The Amazon AppIntegrations service enables you to configure and reuse connections to external applications. For information about how you can use external applications with Amazon Connect, see the following topics in the Amazon Connect Administrator Guide:    Third-party applications (3p apps) in the agent workspace     Use Amazon Q in Connect for generative AI\u2013powered agent assistance in real-time",
      loadSpec: "aws/appintegrations",
    },
    {
      name: "application-autoscaling",
      description:
        "With Application Auto Scaling, you can configure automatic scaling for the following resources:   Amazon AppStream 2.0 fleets   Amazon Aurora Replicas   Amazon Comprehend document classification and entity recognizer endpoints   Amazon DynamoDB tables and global secondary indexes throughput capacity   Amazon ECS services   Amazon ElastiCache for Redis clusters (replication groups)   Amazon EMR clusters   Amazon Keyspaces (for Apache Cassandra) tables   Lambda function provisioned concurrency   Amazon Managed Streaming for Apache Kafka broker storage   Amazon Neptune clusters   Amazon SageMaker endpoint variants   Amazon SageMaker inference components   Amazon SageMaker serverless endpoint provisioned concurrency   Spot Fleets (Amazon EC2)   Pool of WorkSpaces   Custom resources provided by your own applications or services   To learn more about Application Auto Scaling, see the Application Auto Scaling User Guide.  API Summary  The Application Auto Scaling service API includes three key sets of actions:    Register and manage scalable targets - Register Amazon Web Services or custom resources as scalable targets (a resource that Application Auto Scaling can scale), set minimum and maximum capacity limits, and retrieve information on existing scalable targets.   Configure and manage automatic scaling - Define scaling policies to dynamically scale your resources in response to CloudWatch alarms, schedule one-time or recurring scaling actions, and retrieve your recent scaling activity history.   Suspend and resume scaling - Temporarily suspend and later resume automatic scaling by calling the RegisterScalableTarget API action for any Application Auto Scaling scalable target. You can suspend and resume (individually or in combination) scale-out activities that are triggered by a scaling policy, scale-in activities that are triggered by a scaling policy, and scheduled scaling",
      loadSpec: "aws/application-autoscaling",
    },
    {
      name: "application-insights",
      description:
        "Amazon CloudWatch Application Insights  Amazon CloudWatch Application Insights is a service that helps you detect common problems with your applications. It enables you to pinpoint the source of issues in your applications (built with technologies such as Microsoft IIS, .NET, and Microsoft SQL Server), by providing key insights into detected problems. After you onboard your application, CloudWatch Application Insights identifies, recommends, and sets up metrics and logs. It continuously analyzes and correlates your metrics and logs for unusual behavior to surface actionable problems with your application. For example, if your application is slow and unresponsive and leading to HTTP 500 errors in your Application Load Balancer (ALB), Application Insights informs you that a memory pressure problem with your SQL Server database is occurring. It bases this analysis on impactful metrics and log errors",
      loadSpec: "aws/application-insights",
    },
    {
      name: "application-signals",
      description:
        "Use CloudWatch Application Signals for comprehensive observability of your cloud-based applications. It enables real-time service health dashboards and helps you track long-term performance trends against your business goals. The application-centric view provides you with unified visibility across your applications, services, and dependencies, so you can proactively monitor and efficiently triage any issues that may arise, ensuring optimal customer experience. Application Signals provides the following benefits:   Automatically collect metrics and traces from your applications, and display key metrics such as call volume, availability, latency, faults, and errors.    Create and monitor service level objectives (SLOs).    See a map of your application topology that Application Signals automatically discovers, that gives you a visual representation of your applications, dependencies, and their connectivity.   Application Signals works with CloudWatch RUM, CloudWatch Synthetics canaries, and Amazon Web Services Service Catalog AppRegistry, to display your client pages, Synthetics canaries, and application names within dashboards and maps",
      loadSpec: "aws/application-signals",
    },
    {
      name: "applicationcostprofiler",
      description:
        "This reference provides descriptions of the AWS Application Cost Profiler API. The AWS Application Cost Profiler API provides programmatic access to view, create, update, and delete application cost report definitions, as well as to import your usage data into the Application Cost Profiler service. For more information about using this service, see the AWS Application Cost Profiler User Guide",
      loadSpec: "aws/applicationcostprofiler",
    },
    {
      name: "appmesh",
      description:
        "App Mesh is a service mesh based on the Envoy proxy that makes it easy to monitor and control microservices. App Mesh standardizes how your microservices communicate, giving you end-to-end visibility and helping to ensure high availability for your applications. App Mesh gives you consistent visibility and network traffic controls for every microservice in an application. You can use App Mesh with Amazon Web Services Fargate, Amazon ECS, Amazon EKS, Kubernetes on Amazon Web Services, and Amazon EC2.  App Mesh supports microservice applications that use service discovery naming for their components. For more information about service discovery on Amazon ECS, see Service Discovery in the Amazon Elastic Container Service Developer Guide. Kubernetes kube-dns and coredns are supported. For more information, see DNS for Services and Pods in the Kubernetes documentation",
      loadSpec: "aws/appmesh",
    },
    {
      name: "apprunner",
      description:
        "App Runner App Runner is an application service that provides a fast, simple, and cost-effective way to go directly from an existing container image or source code to a running service in the Amazon Web Services Cloud in seconds. You don't need to learn new technologies, decide which compute service to use, or understand how to provision and configure Amazon Web Services resources. App Runner connects directly to your container registry or source code repository. It provides an automatic delivery pipeline with fully managed operations, high performance, scalability, and security. For more information about App Runner, see the App Runner Developer Guide. For release information, see the App Runner Release Notes.  To install the Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools that you can use to access the API, see Tools for Amazon Web Services.  Endpoints  For a list of Region-specific endpoints that App Runner supports, see App Runner endpoints and quotas in the Amazon Web Services General Reference",
      loadSpec: "aws/apprunner",
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
        "AppSync provides API actions for creating and interacting with data sources using GraphQL from your application",
      loadSpec: "aws/appsync",
    },
    {
      name: "apptest",
      description:
        "AWS Mainframe Modernization Application Testing provides tools and resources for automated functional equivalence testing for your migration projects",
      loadSpec: "aws/apptest",
    },
    {
      name: "arc-zonal-shift",
      description:
        "Welcome to the API Reference Guide for zonal shift and zonal autoshift in Amazon Route 53 Application Recovery Controller (Route 53 ARC). You can start a zonal shift to move traffic for a load balancer resource away from an Availability Zone to help your application recover quickly from an impairment in an Availability Zone. For example, you can recover your application from a developer's bad code deployment or from an Amazon Web Services infrastructure failure in a single Availability Zone. You can also configure zonal autoshift for supported load balancer resources. Zonal autoshift is a capability in Route 53 ARC where you authorize Amazon Web Services to shift away application resource traffic from an Availability Zone during events, on your behalf, to help reduce your time to recovery. Amazon Web Services starts an autoshift when internal telemetry indicates that there is an Availability Zone impairment that could potentially impact customers. To help make sure that zonal autoshift is safe for your application, you must also configure practice runs when you enable zonal autoshift for a resource. Practice runs start weekly zonal shifts for a resource, to shift traffic for the resource away from an Availability Zone. Practice runs help you to make sure, on a regular basis, that you have enough capacity in all the Availability Zones in an Amazon Web Services Region for your application to continue to operate normally when traffic for a resource is shifted away from one Availability Zone.  Before you configure practice runs or enable zonal autoshift, we strongly recommend that you prescale your application resource capacity in all Availability Zones in the Region where your application resources are deployed. You should not rely on scaling on demand when an autoshift or practice run starts. Zonal autoshift, including practice runs, works independently, and does not wait for auto scaling actions to complete. Relying on auto scaling, instead of pre-scaling, can result in loss of availability. If you use auto scaling to handle regular cycles of traffic, we strongly recommend that you configure the minimum capacity of your auto scaling to continue operating normally with the loss of an Availability Zone.   Be aware that Route 53 ARC does not inspect the health of individual resources. Amazon Web Services only starts an autoshift when Amazon Web Services telemetry detects that there is an Availability Zone impairment that could potentially impact customers. In some cases, resources might be shifted away that are not experiencing impact. For more information about using zonal shift and zonal autoshift, see the Amazon Route 53 Application Recovery Controller Developer Guide",
      loadSpec: "aws/arc-zonal-shift",
    },
    {
      name: "artifact",
      description:
        "This reference provides descriptions of the low-level AWS Artifact Service API",
      loadSpec: "aws/artifact",
    },
    {
      name: "athena",
      description:
        "Amazon Athena is an interactive query service that lets you use standard SQL to analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay only for the queries you run. Athena scales automatically\u2014executing queries in parallel\u2014so results are fast, even with large datasets and complex queries. For more information, see What is Amazon Athena in the Amazon Athena User Guide. If you connect to Athena using the JDBC driver, use version 1.1.0 of the driver or later with the Amazon Athena API. Earlier version drivers do not support the API. For more information and to download the driver, see Accessing Amazon Athena with JDBC",
      loadSpec: "aws/athena",
    },
    {
      name: "auditmanager",
      description:
        "Welcome to the Audit Manager API reference. This guide is for developers who need detailed information about the Audit Manager API operations, data types, and errors.  Audit Manager is a service that provides automated evidence collection so that you can continually audit your Amazon Web Services usage. You can use it to assess the effectiveness of your controls, manage risk, and simplify compliance. Audit Manager provides prebuilt frameworks that structure and automate assessments for a given compliance standard. Frameworks include a prebuilt collection of controls with descriptions and testing procedures. These controls are grouped according to the requirements of the specified compliance standard or regulation. You can also customize frameworks and controls to support internal audits with specific requirements.  Use the following links to get started with the Audit Manager API:    Actions: An alphabetical list of all Audit Manager API operations.    Data types: An alphabetical list of all Audit Manager data types.    Common parameters: Parameters that all operations can use.    Common errors: Client and server errors that all operations can return.   If you're new to Audit Manager, we recommend that you review the  Audit Manager User Guide",
      loadSpec: "aws/auditmanager",
    },
    {
      name: "autoscaling",
      description:
        "Amazon EC2 Auto Scaling Amazon EC2 Auto Scaling is designed to automatically launch and terminate EC2 instances based on user-defined scaling policies, scheduled actions, and health checks. For more information, see the Amazon EC2 Auto Scaling User Guide and the Amazon EC2 Auto Scaling API Reference",
      loadSpec: "aws/autoscaling",
    },
    {
      name: "autoscaling-plans",
      description:
        "AWS Auto Scaling Use AWS Auto Scaling to create scaling plans for your applications to automatically scale your scalable AWS resources.   API Summary  You can use the AWS Auto Scaling service API to accomplish the following tasks:   Create and manage scaling plans   Define target tracking scaling policies to dynamically scale your resources based on utilization   Scale Amazon EC2 Auto Scaling groups using predictive scaling and dynamic scaling to scale your Amazon EC2 capacity faster   Set minimum and maximum capacity limits   Retrieve information on existing scaling plans   Access current forecast data and historical forecast data for up to 56 days previous   To learn more about AWS Auto Scaling, including information about granting IAM users required permissions for AWS Auto Scaling actions, see the AWS Auto Scaling User Guide",
      loadSpec: "aws/autoscaling-plans",
    },
    {
      name: "b2bi",
      description:
        "This is the Amazon Web Services B2B Data Interchange API Reference. It provides descriptions, API request parameters, and the XML response for each of the B2BI API actions. B2BI enables automated exchange of EDI (electronic data interchange) based business-critical transactions at cloud scale, with elasticity and pay-as-you-go pricing. Businesses use EDI documents to exchange transactional data with trading partners, such as suppliers and end customers, using standardized formats such as X12.  Rather than actually running a command, you can use the --generate-cli-skeleton parameter with any API call to generate and display a parameter template. You can then use the generated template to customize and use as input on a later command. For details, see Generate and use a parameter skeleton file",
      loadSpec: "aws/b2bi",
    },
    {
      name: "backup",
      description:
        "Backup Backup is a unified backup service designed to protect Amazon Web Services services and their associated data. Backup simplifies the creation, migration, restoration, and deletion of backups, while also providing reporting and auditing",
      loadSpec: "aws/backup",
    },
    {
      name: "backup-gateway",
      description:
        "Backup gateway Backup gateway connects Backup to your hypervisor, so you can create, store, and restore backups of your virtual machines (VMs) anywhere, whether on-premises or in the VMware Cloud (VMC) on Amazon Web Services. Add on-premises resources by connecting to a hypervisor through a gateway. Backup will automatically discover the resources in your hypervisor. Use Backup to assign virtual or on-premises resources to a backup plan, or run on-demand backups. Once you have backed up your resources, you can view them and restore them like any resource supported by Backup. To download the Amazon Web Services software to get started, navigate to the Backup console, choose Gateways, then choose Create gateway",
      loadSpec: "aws/backup-gateway",
    },
    {
      name: "batch",
      description:
        "Batch Using Batch, you can run batch computing workloads on the Amazon Web Services Cloud. Batch computing is a common means for developers, scientists, and engineers to access large amounts of compute resources. Batch uses the advantages of the batch computing to remove the undifferentiated heavy lifting of configuring and managing required infrastructure. At the same time, it also adopts a familiar batch computing software approach. You can use Batch to efficiently provision resources, and work toward eliminating capacity constraints, reducing your overall compute costs, and delivering results more quickly. As a fully managed service, Batch can run batch computing workloads of any scale. Batch automatically provisions compute resources and optimizes workload distribution based on the quantity and scale of your specific workloads. With Batch, there's no need to install or manage batch computing software. This means that you can focus on analyzing results and solving your specific problems instead",
      loadSpec: "aws/batch",
    },
    {
      name: "bcm-data-exports",
      description:
        "You can use the Data Exports API to create customized exports from multiple Amazon Web Services cost management and billing datasets, such as cost and usage data and cost optimization recommendations. The Data Exports API provides the following endpoint:   https://bcm-data-exports.us-east-1.api.aws",
      loadSpec: "aws/bcm-data-exports",
    },
    {
      name: "bcm-pricing-calculator",
      description:
        "You can use the Pricing Calculator API to programmatically create estimates for your planned cloud use. You can model usage and commitments such as Savings Plans and Reserved Instances, and generate estimated costs using your discounts and benefit sharing preferences.  The Pricing Calculator API provides the following endpoint:    https://bcm-pricing-calculator.us-east-1.api.aws",
      loadSpec: "aws/bcm-pricing-calculator",
    },
    {
      name: "bedrock",
      description:
        "Describes the API operations for creating, managing, fine-turning, and evaluating Amazon Bedrock models",
      loadSpec: "aws/bedrock",
    },
    {
      name: "bedrock-agent",
      description:
        "Describes the API operations for creating and managing Amazon Bedrock agents",
      loadSpec: "aws/bedrock-agent",
    },
    {
      name: "bedrock-agent-runtime",
      description:
        "Contains APIs related to model invocation and querying of knowledge bases",
      loadSpec: "aws/bedrock-agent-runtime",
    },
    {
      name: "bedrock-data-automation",
      description: "Amazon Bedrock Keystone Build",
      loadSpec: "aws/bedrock-data-automation",
    },
    {
      name: "bedrock-data-automation-runtime",
      description: "Amazon Bedrock Keystone Runtime",
      loadSpec: "aws/bedrock-data-automation-runtime",
    },
    {
      name: "bedrock-runtime",
      description:
        "Describes the API operations for running inference using Amazon Bedrock models",
      loadSpec: "aws/bedrock-runtime",
    },
    {
      name: "billing",
      description:
        "You can use the Billing API to programatically list the billing views available to you for a given time period. A billing view represents a set of billing data.  The Billing API provides the following endpoint:  https://billing.us-east-1.api.aws",
      loadSpec: "aws/billing",
    },
    {
      name: "billingconductor",
      description:
        "Amazon Web Services Billing Conductor is a fully managed service that you can use to customize a proforma version of your billing data each month, to accurately show or chargeback your end customers. Amazon Web Services Billing Conductor doesn't change the way you're billed by Amazon Web Services each month by design. Instead, it provides you with a mechanism to configure, generate, and display rates to certain customers over a given billing period. You can also analyze the difference between the rates you apply to your accounting groupings relative to your actual rates from Amazon Web Services. As a result of your Amazon Web Services Billing Conductor configuration, the payer account can also see the custom rate applied on the billing details page of the Amazon Web Services Billing console, or configure a cost and usage report per billing group. This documentation shows how you can configure Amazon Web Services Billing Conductor using its API. For more information about using the Amazon Web Services Billing Conductor user interface, see the  Amazon Web Services Billing Conductor User Guide",
      loadSpec: "aws/billingconductor",
    },
    {
      name: "braket",
      description:
        "The Amazon Braket API Reference provides information about the operations and structures supported in Amazon Braket. Additional Resources:    Amazon Braket Developer Guide",
      loadSpec: "aws/braket",
    },
    {
      name: "budgets",
      description:
        "Use the Amazon Web Services Budgets API to plan your service usage, service costs, and instance reservations. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for the Amazon Web Services Budgets feature.  Budgets provide you with a way to see the following information:   How close your plan is to your budgeted amount or to the free tier limits   Your usage-to-date, including how much you've used of your Reserved Instances (RIs)   Your current estimated charges from Amazon Web Services, and how much your predicted usage will accrue in charges by the end of the month   How much of your budget has been used   Amazon Web Services updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:    Cost budgets - Plan how much you want to spend on a service.    Usage budgets - Plan how much you want to use one or more services.    RI utilization budgets - Define a utilization threshold, and receive alerts when your RI usage falls below that threshold. This lets you see if your RIs are unused or under-utilized.    RI coverage budgets - Define a coverage threshold, and receive alerts when the number of your instance hours that are covered by RIs fall below that threshold. This lets you see how much of your instance usage is covered by a reservation.   Service Endpoint The Amazon Web Services Budgets API provides the following endpoint:   https://budgets.amazonaws.com   For information about costs that are associated with the Amazon Web Services Budgets API, see Amazon Web Services Cost Management Pricing",
      loadSpec: "aws/budgets",
    },
    {
      name: "ce",
      description:
        "You can use the Cost Explorer API to programmatically query your cost and usage data. You can query for aggregated data such as total monthly costs or total daily usage. You can also query for granular data. This might include the number of daily write operations for Amazon DynamoDB database tables in your production environment.  Service Endpoint The Cost Explorer API provides the following endpoint:    https://ce.us-east-1.amazonaws.com    For information about the costs that are associated with the Cost Explorer API, see Amazon Web Services Cost Management Pricing",
      loadSpec: "aws/ce",
    },
    {
      name: "chatbot",
      description:
        "The AWS Chatbot API Reference provides descriptions, API request parameters, and the XML response for each of the AWS Chatbot API actions. AWS Chatbot APIs are currently available in the following Regions:   US East (Ohio) - us-east-2    US West (Oregon) - us-west-2    Asia Pacific (Singapore) - ap-southeast-1    Europe (Ireland) - eu-west-1    The AWS Chatbot console can only be used in US East (Ohio). Your configuration data however, is stored in each of the relevant available Regions.  Your AWS CloudTrail events are logged in whatever Region you call from, not US East (N. Virginia) by default",
      loadSpec: "aws/chatbot",
    },
    {
      name: "chime",
      description:
        "Most of these APIs are no longer supported and will not be updated. We recommend using the latest versions in the Amazon Chime SDK API reference, in the Amazon Chime SDK. Using the latest versions requires migrating to dedicated namespaces. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide.  The Amazon Chime application programming interface (API) is designed so administrators can perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice Connectors. This guide provides detailed information about the Amazon Chime API, including operations, types, inputs and outputs, and error codes. You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to make API calls for Amazon Chime. We recommend using an AWS SDK or the AWS CLI. The page for each API action contains a See Also section that includes links to information about using the action with a language-specific AWS SDK or the AWS CLI.  Using an AWS SDK   You don't need to write code to calculate a signature for request authentication. The SDK clients authenticate your requests by using access keys that you provide. For more information about AWS SDKs, see the AWS Developer Center.   Using the AWS CLI  Use your access keys with the AWS CLI to make API calls. For information about setting up the AWS CLI, see Installing the AWS Command Line Interface in the AWS Command Line Interface User Guide. For a list of available Amazon Chime commands, see the Amazon Chime commands in the AWS CLI Command Reference.   Using REST APIs  If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Chime supports Signature Version 4. For more information, see Signature Version 4 Signing Process in the Amazon Web Services General Reference. When making REST API calls, use the service name chime and REST endpoint https://service.chime.aws.amazon.com.   Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see Identity and Access Management for Amazon Chime in the Amazon Chime Administration Guide",
      loadSpec: "aws/chime",
    },
    {
      name: "chime-sdk-identity",
      description:
        "The Amazon Chime SDK Identity APIs in this section allow software developers to create and manage unique instances of their messaging applications. These APIs provide the overarching framework for creating and sending messages. For more information about the identity APIs, refer to Amazon Chime SDK identity",
      loadSpec: "aws/chime-sdk-identity",
    },
    {
      name: "chime-sdk-media-pipelines",
      description:
        "The Amazon Chime SDK media pipeline APIs in this section allow software developers to create Amazon Chime SDK media pipelines that capture, concatenate, or stream your Amazon Chime SDK meetings. For more information about media pipelines, see Amazon Chime SDK media pipelines",
      loadSpec: "aws/chime-sdk-media-pipelines",
    },
    {
      name: "chime-sdk-meetings",
      description:
        "The Amazon Chime SDK meetings APIs in this section allow software developers to create Amazon Chime SDK meetings, set the Amazon Web Services Regions for meetings, create and manage users, and send and receive meeting notifications. For more information about the meeting APIs, see Amazon Chime SDK meetings",
      loadSpec: "aws/chime-sdk-meetings",
    },
    {
      name: "chime-sdk-messaging",
      description:
        "The Amazon Chime SDK messaging APIs in this section allow software developers to send and receive messages in custom messaging applications. These APIs depend on the frameworks provided by the Amazon Chime SDK identity APIs. For more information about the messaging APIs, see Amazon Chime SDK messaging",
      loadSpec: "aws/chime-sdk-messaging",
    },
    {
      name: "chime-sdk-voice",
      description:
        "The Amazon Chime SDK telephony APIs in this section enable developers to create PSTN calling solutions that use Amazon Chime SDK Voice Connectors, and Amazon Chime SDK SIP media applications. Developers can also order and manage phone numbers, create and manage Voice Connectors and SIP media applications, and run voice analytics",
      loadSpec: "aws/chime-sdk-voice",
    },
    {
      name: "cleanrooms",
      description:
        "Welcome to the Clean Rooms API Reference. Clean Rooms is an Amazon Web Services service that helps multiple parties to join their data together in a secure collaboration workspace. In the collaboration, members who can query and receive results can get insights into the collective datasets without either party getting access to the other party's raw data. To learn more about Clean Rooms concepts, procedures, and best practices, see the Clean Rooms User Guide. To learn more about SQL commands, functions, and conditions supported in Clean Rooms, see the Clean Rooms SQL Reference",
      loadSpec: "aws/cleanrooms",
    },
    {
      name: "cleanroomsml",
      description:
        "Welcome to the Amazon Web Services Clean Rooms ML API Reference. Amazon Web Services Clean Rooms ML provides a privacy-enhancing method for two parties to identify similar users in their data without the need to share their data with each other. The first party brings the training data to Clean Rooms so that they can create and configure an audience model (lookalike model) and associate it with a collaboration. The second party then brings their seed data to Clean Rooms and generates an audience (lookalike segment) that resembles the training data. To learn more about Amazon Web Services Clean Rooms ML concepts, procedures, and best practices, see the Clean Rooms User Guide. To learn more about SQL commands, functions, and conditions supported in Clean Rooms, see the Clean Rooms SQL Reference",
      loadSpec: "aws/cleanroomsml",
    },
    {
      name: "cloud9",
      description:
        "Cloud9 Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and release software in the cloud. For more information about Cloud9, see the Cloud9 User Guide. Cloud9 supports these operations:    CreateEnvironmentEC2: Creates an Cloud9 development environment, launches an Amazon EC2 instance, and then connects from the instance to the environment.    CreateEnvironmentMembership: Adds an environment member to an environment.    DeleteEnvironment: Deletes an environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.    DeleteEnvironmentMembership: Deletes an environment member from an environment.    DescribeEnvironmentMemberships: Gets information about environment members for an environment.    DescribeEnvironments: Gets information about environments.    DescribeEnvironmentStatus: Gets status information for an environment.    ListEnvironments: Gets a list of environment identifiers.    ListTagsForResource: Gets the tags for an environment.    TagResource: Adds tags to an environment.    UntagResource: Removes tags from an environment.    UpdateEnvironment: Changes the settings of an existing environment.    UpdateEnvironmentMembership: Changes the settings of an existing environment member for an environment",
      loadSpec: "aws/cloud9",
    },
    {
      name: "cloudcontrol",
      description:
        "For more information about Amazon Web Services Cloud Control API, see the Amazon Web Services Cloud Control API User Guide",
      loadSpec: "aws/cloudcontrol",
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
        "CloudFormation CloudFormation allows you to create and manage Amazon Web Services infrastructure deployments predictably and repeatedly. You can use CloudFormation to leverage Amazon Web Services products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification Service, Elastic Load Balancing, and Amazon EC2 Auto Scaling to build highly reliable, highly scalable, cost-effective applications without creating or configuring the underlying Amazon Web Services infrastructure. With CloudFormation, you declare all your resources and dependencies in a template file. The template defines a collection of resources as a single unit called a stack. CloudFormation creates and deletes all member resources of the stack together and manages all dependencies between the resources for you. For more information about CloudFormation, see the CloudFormation product page. CloudFormation makes use of other Amazon Web Services products. If you need additional technical information about a specific Amazon Web Services product, you can find the product's technical documentation at docs.aws.amazon.com",
      loadSpec: "aws/cloudformation",
    },
    {
      name: "cloudfront",
      description:
        "Amazon CloudFront This is the Amazon CloudFront API Reference. This guide is for developers who need detailed information about CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the Amazon CloudFront Developer Guide",
      loadSpec: "aws/cloudfront",
    },
    {
      name: "cloudfront-keyvaluestore",
      description:
        "Amazon CloudFront KeyValueStore Service to View and Update Data in a KVS Resource",
      loadSpec: "aws/cloudfront-keyvaluestore",
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
        "For more information about CloudHSM, see CloudHSM and the  CloudHSM User Guide",
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
        "CloudTrail This is the CloudTrail API Reference. It provides descriptions of actions, data types, common parameters, and common errors for CloudTrail. CloudTrail is a web service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. The recorded information includes the identity of the user, the start time of the Amazon Web Services API call, the source IP address, the request parameters, and the response elements returned by the service.  As an alternative to the API, you can use one of the Amazon Web Services SDKs, which consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide programmatic access to CloudTrail. For example, the SDKs handle cryptographically signing requests, managing errors, and retrying requests automatically. For more information about the Amazon Web Services SDKs, including how to download and install them, see Tools to Build on Amazon Web Services.  See the CloudTrail User Guide for information about the data that is included with each Amazon Web Services API call listed in the log files",
      loadSpec: "aws/cloudtrail",
    },
    {
      name: "cloudtrail-data",
      description:
        "The CloudTrail Data Service lets you ingest events into CloudTrail from any source in your hybrid environments, such as in-house or SaaS applications hosted on-premises or in the cloud, virtual machines, or containers. You can store, access, analyze, troubleshoot and take action on this data without maintaining multiple log aggregators and reporting tools. After you run PutAuditEvents to ingest your application activity into CloudTrail, you can use CloudTrail Lake to search, query, and analyze the data that is logged from your applications",
      loadSpec: "aws/cloudtrail-data",
    },
    {
      name: "cloudwatch",
      description:
        "Amazon CloudWatch monitors your Amazon Web Services (Amazon Web Services) resources and the applications you run on Amazon Web Services in real time. You can use CloudWatch to collect and track metrics, which are the variables you want to measure for your resources and applications. CloudWatch alarms send notifications or automatically change the resources you are monitoring based on rules that you define. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2 instances. Then, use this data to determine whether you should launch additional instances to handle increased load. You can also use this data to stop under-used instances to save money. In addition to monitoring the built-in metrics that come with Amazon Web Services, you can monitor your own custom metrics. With CloudWatch, you gain system-wide visibility into resource utilization, application performance, and operational health",
      loadSpec: "aws/cloudwatch",
    },
    {
      name: "codeartifact",
      description:
        "CodeArtifact is a fully managed artifact repository compatible with language-native package managers and build tools such as npm, Apache Maven, pip, and dotnet. You can use CodeArtifact to share packages with development teams and pull packages. Packages can be pulled from both public and CodeArtifact repositories. You can also create an upstream relationship between a CodeArtifact repository and another repository, which effectively merges their contents from the point of view of a package manager client.   CodeArtifact concepts     Repository: A CodeArtifact repository contains a set of package versions, each of which maps to a set of assets, or files. Repositories are polyglot, so a single repository can contain packages of any supported type. Each repository exposes endpoints for fetching and publishing packages using tools such as the  npm  CLI or the Maven CLI ( mvn ). For a list of supported package managers, see the CodeArtifact User Guide.    Domain: Repositories are aggregated into a higher-level entity known as a domain. All package assets and metadata are stored in the domain, but are consumed through repositories. A given package asset, such as a Maven JAR file, is stored once per domain, no matter how many repositories it's present in. All of the assets and metadata in a domain are encrypted with the same customer master key (CMK) stored in Key Management Service (KMS). Each repository is a member of a single domain and can't be moved to a different domain. The domain allows organizational policy to be applied across multiple repositories, such as which accounts can access repositories in the domain, and which public repositories can be used as sources of packages. Although an organization can have multiple domains, we recommend a single production domain that contains all published artifacts so that teams can find and share packages across their organization.    Package: A package is a bundle of software and the metadata required to resolve dependencies and install the software. CodeArtifact supports npm, PyPI, Maven, NuGet, Swift, Ruby, Cargo, and generic package formats. For more information about the supported package formats and how to use CodeArtifact with them, see the CodeArtifact User Guide. In CodeArtifact, a package consists of:   A name (for example, webpack is the name of a popular npm package)   An optional namespace (for example, @types in @types/node)   A set of versions (for example, 1.0.0, 1.0.1, 1.0.2, etc.)    Package-level metadata (for example, npm tags)      Package group: A group of packages that match a specified definition. Package groups can be used to apply configuration to multiple packages that match a defined pattern using package format, package namespace, and package name. You can use package groups to more conveniently configure package origin controls for multiple packages. Package origin controls are used to block or allow ingestion or publishing of new package versions, which protects users from malicious actions known as dependency substitution attacks.    Package version: A version of a package, such as @types/node 12.6.9. The version number format and semantics vary for different package formats. For example, npm package versions must conform to the Semantic Versioning specification. In CodeArtifact, a package version consists of the version identifier, metadata at the package version level, and a set of assets.    Upstream repository: One repository is upstream of another when the package versions in it can be accessed from the repository endpoint of the downstream repository, effectively merging the contents of the two repositories from the point of view of a client. CodeArtifact allows creating an upstream relationship between two repositories.    Asset: An individual file stored in CodeArtifact associated with a package version, such as an npm .tgz file or Maven POM and JAR files.    CodeArtifact supported API operations     AssociateExternalConnection: Adds an existing external connection to a repository.     CopyPackageVersions: Copies package versions from one repository to another repository in the same domain.    CreateDomain: Creates a domain.    CreatePackageGroup: Creates a package group.    CreateRepository: Creates a CodeArtifact repository in a domain.     DeleteDomain: Deletes a domain. You cannot delete a domain that contains repositories.     DeleteDomainPermissionsPolicy: Deletes the resource policy that is set on a domain.    DeletePackage: Deletes a package and all associated package versions.    DeletePackageGroup: Deletes a package group. Does not delete packages or package versions that are associated with a package group.    DeletePackageVersions: Deletes versions of a package. After a package has been deleted, it can be republished, but its assets and metadata cannot be restored because they have been permanently removed from storage.    DeleteRepository: Deletes a repository.     DeleteRepositoryPermissionsPolicy: Deletes the resource policy that is set on a repository.    DescribeDomain: Returns a DomainDescription object that contains information about the requested domain.    DescribePackage: Returns a PackageDescription object that contains details about a package.     DescribePackageGroup: Returns a PackageGroup object that contains details about a package group.     DescribePackageVersion: Returns a PackageVersionDescription object that contains details about a package version.     DescribeRepository: Returns a RepositoryDescription object that contains detailed information about the requested repository.     DisposePackageVersions: Disposes versions of a package. A package version with the status Disposed cannot be restored because they have been permanently removed from storage.    DisassociateExternalConnection: Removes an existing external connection from a repository.     GetAssociatedPackageGroup: Returns the most closely associated package group to the specified package.    GetAuthorizationToken: Generates a temporary authorization token for accessing repositories in the domain. The token expires the authorization period has passed. The default authorization period is 12 hours and can be customized to any length with a maximum of 12 hours.    GetDomainPermissionsPolicy: Returns the policy of a resource that is attached to the specified domain.     GetPackageVersionAsset: Returns the contents of an asset that is in a package version.     GetPackageVersionReadme: Gets the readme file or descriptive text for a package version.    GetRepositoryEndpoint: Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each package format:     cargo     generic     maven     npm     nuget     pypi     ruby     swift       GetRepositoryPermissionsPolicy: Returns the resource policy that is set on a repository.     ListAllowedRepositoriesForGroup: Lists the allowed repositories for a package group that has origin configuration set to ALLOW_SPECIFIC_REPOSITORIES.    ListAssociatedPackages: Returns a list of packages associated with the requested package group.    ListDomains: Returns a list of DomainSummary objects. Each returned DomainSummary object contains information about a domain.    ListPackages: Lists the packages in a repository.    ListPackageGroups: Returns a list of package groups in the requested domain.    ListPackageVersionAssets: Lists the assets for a given package version.    ListPackageVersionDependencies: Returns a list of the direct dependencies for a package version.     ListPackageVersions: Returns a list of package versions for a specified package in a repository.    ListRepositories: Returns a list of repositories owned by the Amazon Web Services account that called this method.    ListRepositoriesInDomain: Returns a list of the repositories in a domain.    ListSubPackageGroups: Returns a list of direct children of the specified package group.    PublishPackageVersion: Creates a new package version containing one or more assets.    PutDomainPermissionsPolicy: Attaches a resource policy to a domain.    PutPackageOriginConfiguration: Sets the package origin configuration for a package, which determine how new versions of the package can be added to a specific repository.    PutRepositoryPermissionsPolicy: Sets the resource policy on a repository that specifies permissions to access it.     UpdatePackageGroup: Updates a package group. This API cannot be used to update a package group's origin configuration or pattern.    UpdatePackageGroupOriginConfiguration: Updates the package origin configuration for a package group.    UpdatePackageVersionsStatus: Updates the status of one or more versions of a package.    UpdateRepository: Updates the properties of a repository",
      loadSpec: "aws/codeartifact",
    },
    {
      name: "codebuild",
      description:
        "CodeBuild CodeBuild is a fully managed build service in the cloud. CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy. CodeBuild eliminates the need to provision, manage, and scale your own build servers. It provides prepackaged build environments for the most popular programming languages and build tools, such as Apache Maven, Gradle, and more. You can also fully customize build environments in CodeBuild to use your own build tools. CodeBuild scales automatically to meet peak build requests. You pay only for the build time you consume. For more information about CodeBuild, see the  CodeBuild User Guide",
      loadSpec: "aws/codebuild",
    },
    {
      name: "codecatalyst",
      description:
        "Welcome to the Amazon CodeCatalyst API reference. This reference provides descriptions of operations and data types for Amazon CodeCatalyst. You can use the Amazon CodeCatalyst API to work with the following objects.  Spaces, by calling the following:    DeleteSpace, which deletes a space.    GetSpace, which returns information about a space.    GetSubscription, which returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.    ListSpaces, which retrieves a list of spaces.    UpdateSpace, which changes one or more values for a space.   Projects, by calling the following:    CreateProject which creates a project in a specified space.    GetProject, which returns information about a project.    ListProjects, which retrieves a list of projects in a space.   Users, by calling the following:    GetUserDetails, which returns information about a user in Amazon CodeCatalyst.   Source repositories, by calling the following:    CreateSourceRepository, which creates an empty Git-based source repository in a specified project.    CreateSourceRepositoryBranch, which creates a branch in a specified repository where you can work on code.    DeleteSourceRepository, which deletes a source repository.    GetSourceRepository, which returns information about a source repository.    GetSourceRepositoryCloneUrls, which returns information about the URLs that can be used with a Git client to clone a source repository.    ListSourceRepositories, which retrieves a list of source repositories in a project.    ListSourceRepositoryBranches, which retrieves a list of branches in a source repository.   Dev Environments and the Amazon Web Services Toolkits, by calling the following:    CreateDevEnvironment, which creates a Dev Environment, where you can quickly work on the code stored in the source repositories of your project.    DeleteDevEnvironment, which deletes a Dev Environment.    GetDevEnvironment, which returns information about a Dev Environment.    ListDevEnvironments, which retrieves a list of Dev Environments in a project.    ListDevEnvironmentSessions, which retrieves a list of active Dev Environment sessions in a project.    StartDevEnvironment, which starts a specified Dev Environment and puts it into an active state.    StartDevEnvironmentSession, which starts a session to a specified Dev Environment.    StopDevEnvironment, which stops a specified Dev Environment and puts it into an stopped state.    StopDevEnvironmentSession, which stops a session for a specified Dev Environment.    UpdateDevEnvironment, which changes one or more values for a Dev Environment.   Workflows, by calling the following:    GetWorkflow, which returns information about a workflow.    GetWorkflowRun, which returns information about a specified run of a workflow.    ListWorkflowRuns, which retrieves a list of runs of a specified workflow.    ListWorkflows, which retrieves a list of workflows in a specified project.    StartWorkflowRun, which starts a run of a specified workflow.   Security, activity, and resource management in Amazon CodeCatalyst, by calling the following:    CreateAccessToken, which creates a personal access token (PAT) for the current user.    DeleteAccessToken, which deletes a specified personal access token (PAT).    ListAccessTokens, which lists all personal access tokens (PATs) associated with a user.    ListEventLogs, which retrieves a list of events that occurred during a specified time period in a space.    VerifySession, which verifies whether the calling user has a valid Amazon CodeCatalyst login and session.    If you are using the Amazon CodeCatalyst APIs with an SDK or the CLI, you must configure your computer to work with Amazon CodeCatalyst and single sign-on (SSO). For more information, see Setting up to use the CLI with Amazon CodeCatalyst and the SSO documentation for your SDK",
      loadSpec: "aws/codecatalyst",
    },
    {
      name: "codecommit",
      description:
        "CodeCommit This is the CodeCommit API Reference. This reference provides descriptions of the operations and data types for CodeCommit API along with usage examples. You can use the CodeCommit API to work with the following objects: Repositories, by calling the following:    BatchGetRepositories, which returns information about one or more repositories associated with your Amazon Web Services account.    CreateRepository, which creates an CodeCommit repository.    DeleteRepository, which deletes an CodeCommit repository.    GetRepository, which returns information about a specified repository.    ListRepositories, which lists all CodeCommit repositories associated with your Amazon Web Services account.    UpdateRepositoryDescription, which sets or updates the description of the repository.    UpdateRepositoryEncryptionKey, which updates the Key Management Service encryption key used to encrypt and decrypt a repository.    UpdateRepositoryName, which changes the name of the repository. If you change the name of a repository, no other users of that repository can access it until you send them the new HTTPS or SSH URL to use.   Branches, by calling the following:    CreateBranch, which creates a branch in a specified repository.    DeleteBranch, which deletes the specified branch in a repository unless it is the default branch.    GetBranch, which returns information about a specified branch.    ListBranches, which lists all branches for a specified repository.    UpdateDefaultBranch, which changes the default branch for a repository.   Files, by calling the following:    DeleteFile, which deletes the content of a specified file from a specified branch.    GetBlob, which returns the base-64 encoded content of an individual Git blob object in a repository.    GetFile, which returns the base-64 encoded content of a specified file.    GetFolder, which returns the contents of a specified folder or directory.    ListFileCommitHistory, which retrieves a list of commits and changes to a specified file.     PutFile, which adds or modifies a single file in a specified repository and branch.   Commits, by calling the following:    BatchGetCommits, which returns information about one or more commits in a repository.    CreateCommit, which creates a commit for changes to a repository.    GetCommit, which returns information about a commit, including commit messages and author and committer information.    GetDifferences, which returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference).   Merges, by calling the following:    BatchDescribeMergeConflicts, which returns information about conflicts in a merge between commits in a repository.    CreateUnreferencedMergeCommit, which creates an unreferenced commit between two branches or commits for the purpose of comparing them and identifying any potential conflicts.    DescribeMergeConflicts, which returns information about merge conflicts between the base, source, and destination versions of a file in a potential merge.    GetMergeCommit, which returns information about the merge between a source and destination commit.     GetMergeConflicts, which returns information about merge conflicts between the source and destination branch in a pull request.    GetMergeOptions, which returns information about the available merge options between two branches or commit specifiers.    MergeBranchesByFastForward, which merges two branches using the fast-forward merge option.    MergeBranchesBySquash, which merges two branches using the squash merge option.    MergeBranchesByThreeWay, which merges two branches using the three-way merge option.   Pull requests, by calling the following:    CreatePullRequest, which creates a pull request in a specified repository.    CreatePullRequestApprovalRule, which creates an approval rule for a specified pull request.    DeletePullRequestApprovalRule, which deletes an approval rule for a specified pull request.    DescribePullRequestEvents, which returns information about one or more pull request events.    EvaluatePullRequestApprovalRules, which evaluates whether a pull request has met all the conditions specified in its associated approval rules.    GetCommentsForPullRequest, which returns information about comments on a specified pull request.    GetPullRequest, which returns information about a specified pull request.    GetPullRequestApprovalStates, which returns information about the approval states for a specified pull request.    GetPullRequestOverrideState, which returns information about whether approval rules have been set aside (overriden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.    ListPullRequests, which lists all pull requests for a repository.    MergePullRequestByFastForward, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the fast-forward merge option.    MergePullRequestBySquash, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the squash merge option.    MergePullRequestByThreeWay, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the three-way merge option.    OverridePullRequestApprovalRules, which sets aside all approval rule requirements for a pull request.    PostCommentForPullRequest, which posts a comment to a pull request at the specified line, file, or request.    UpdatePullRequestApprovalRuleContent, which updates the structure of an approval rule for a pull request.    UpdatePullRequestApprovalState, which updates the state of an approval on a pull request.    UpdatePullRequestDescription, which updates the description of a pull request.    UpdatePullRequestStatus, which updates the status of a pull request.    UpdatePullRequestTitle, which updates the title of a pull request.   Approval rule templates, by calling the following:    AssociateApprovalRuleTemplateWithRepository, which associates a template with a specified repository. After the template is associated with a repository, CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repository.    BatchAssociateApprovalRuleTemplateWithRepositories, which associates a template with one or more specified repositories. After the template is associated with a repository, CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repositories.    BatchDisassociateApprovalRuleTemplateFromRepositories, which removes the association between a template and specified repositories so that approval rules based on the template are not automatically created when pull requests are created in those repositories.    CreateApprovalRuleTemplate, which creates a template for approval rules that can then be associated with one or more repositories in your Amazon Web Services account.    DeleteApprovalRuleTemplate, which deletes the specified template. It does not remove approval rules on pull requests already created with the template.    DisassociateApprovalRuleTemplateFromRepository, which removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository.    GetApprovalRuleTemplate, which returns information about an approval rule template.    ListApprovalRuleTemplates, which lists all approval rule templates in the Amazon Web Services Region in your Amazon Web Services account.    ListAssociatedApprovalRuleTemplatesForRepository, which lists all approval rule templates that are associated with a specified repository.    ListRepositoriesForApprovalRuleTemplate, which lists all repositories associated with the specified approval rule template.    UpdateApprovalRuleTemplateDescription, which updates the description of an approval rule template.    UpdateApprovalRuleTemplateName, which updates the name of an approval rule template.    UpdateApprovalRuleTemplateContent, which updates the content of an approval rule template.   Comments in a repository, by calling the following:    DeleteCommentContent, which deletes the content of a comment on a commit in a repository.    GetComment, which returns information about a comment on a commit.    GetCommentReactions, which returns information about emoji reactions to comments.    GetCommentsForComparedCommit, which returns information about comments on the comparison between two commit specifiers in a repository.    PostCommentForComparedCommit, which creates a comment on the comparison between two commit specifiers in a repository.    PostCommentReply, which creates a reply to a comment.    PutCommentReaction, which creates or updates an emoji reaction to a comment.    UpdateComment, which updates the content of a comment on a commit in a repository.   Tags used to tag resources in CodeCommit (not Git tags), by calling the following:    ListTagsForResource, which gets information about Amazon Web Servicestags for a specified Amazon Resource Name (ARN) in CodeCommit.    TagResource, which adds or updates tags for a resource in CodeCommit.    UntagResource, which removes tags for a resource in CodeCommit.   Triggers, by calling the following:    GetRepositoryTriggers, which returns information about triggers configured for a repository.    PutRepositoryTriggers, which replaces all triggers for a repository and can be used to create or delete triggers.    TestRepositoryTriggers, which tests the functionality of a repository trigger by sending data to the trigger target.   For information about how to use CodeCommit, see the CodeCommit User Guide",
      loadSpec: "aws/codecommit",
    },
    {
      name: "codeconnections",
      description:
        "AWS CodeConnections This Amazon Web Services CodeConnections API Reference provides descriptions and usage examples of the operations and data types for the Amazon Web Services CodeConnections API. You can use the connections API to work with connections and installations.  Connections are configurations that you use to connect Amazon Web Services resources to external code repositories. Each connection is a resource that can be given to services such as CodePipeline to connect to a third-party repository such as Bitbucket. For example, you can add the connection in CodePipeline so that it triggers your pipeline when a code change is made to your third-party code repository. Each connection is named and associated with a unique ARN that is used to reference the connection. When you create a connection, the console initiates a third-party connection handshake. Installations are the apps that are used to conduct this handshake. For example, the installation for the Bitbucket provider type is the Bitbucket app. When you create a connection, you can choose an existing installation or create one. When you want to create a connection to an installed provider type such as GitHub Enterprise Server, you create a host for your connections. You can work with connections by calling:    CreateConnection, which creates a uniquely named connection that can be referenced by services such as CodePipeline.    DeleteConnection, which deletes the specified connection.    GetConnection, which returns information about the connection, including the connection status.    ListConnections, which lists the connections associated with your account.   You can work with hosts by calling:    CreateHost, which creates a host that represents the infrastructure where your provider is installed.    DeleteHost, which deletes the specified host.    GetHost, which returns information about the host, including the setup status.    ListHosts, which lists the hosts associated with your account.   You can work with tags in Amazon Web Services CodeConnections by calling the following:    ListTagsForResource, which gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in Amazon Web Services CodeConnections.    TagResource, which adds or updates tags for a resource in Amazon Web Services CodeConnections.    UntagResource, which removes tags for a resource in Amazon Web Services CodeConnections.   For information about how to use Amazon Web Services CodeConnections, see the Developer Tools User Guide",
      loadSpec: "aws/codeconnections",
    },
    {
      name: "codeguru-reviewer",
      description:
        "This section provides documentation for the Amazon CodeGuru Reviewer API operations. CodeGuru Reviewer is a service that uses program analysis and machine learning to detect potential defects that are difficult for developers to find and recommends fixes in your Java and Python code. By proactively detecting and providing recommendations for addressing code defects and implementing best practices, CodeGuru Reviewer improves the overall quality and maintainability of your code base during the code review stage. For more information about CodeGuru Reviewer, see the  Amazon CodeGuru Reviewer User Guide.  To improve the security of your CodeGuru Reviewer API calls, you can establish a private connection between your VPC and CodeGuru Reviewer by creating an interface VPC endpoint. For more information, see CodeGuru Reviewer and interface VPC endpoints (Amazon Web Services PrivateLink) in the Amazon CodeGuru Reviewer User Guide",
      loadSpec: "aws/codeguru-reviewer",
    },
    {
      name: "codeguru-security",
      description:
        "Amazon CodeGuru Security is in preview release and is subject to change.  This section provides documentation for the Amazon CodeGuru Security API operations. CodeGuru Security is a service that uses program analysis and machine learning to detect security policy violations and vulnerabilities, and recommends ways to address these security risks. By proactively detecting and providing recommendations for addressing security risks, CodeGuru Security improves the overall security of your application code. For more information about CodeGuru Security, see the Amazon CodeGuru Security User Guide",
      loadSpec: "aws/codeguru-security",
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
        "CodePipeline  Overview  This is the CodePipeline API Reference. This guide provides descriptions of the actions and data types for CodePipeline. Some functionality for your pipeline can only be configured through the API. For more information, see the CodePipeline User Guide. You can use the CodePipeline API to work with pipelines, stages, actions, and transitions.  Pipelines are models of automated release processes. Each pipeline is uniquely named, and consists of stages, actions, and transitions.  You can work with pipelines by calling:    CreatePipeline, which creates a uniquely named pipeline.    DeletePipeline, which deletes the specified pipeline.    GetPipeline, which returns information about the pipeline structure and pipeline metadata, including the pipeline Amazon Resource Name (ARN).    GetPipelineExecution, which returns information about a specific execution of a pipeline.    GetPipelineState, which returns information about the current state of the stages and actions of a pipeline.    ListActionExecutions, which returns action-level details for past executions. The details include full stage and action-level details, including individual action duration, status, any errors that occurred during the execution, and input and output artifact location details.    ListPipelines, which gets a summary of all of the pipelines associated with your account.    ListPipelineExecutions, which gets a summary of the most recent executions for a pipeline.    StartPipelineExecution, which runs the most recent revision of an artifact through the pipeline.    StopPipelineExecution, which stops the specified pipeline execution from continuing through the pipeline.    UpdatePipeline, which updates a pipeline with edits or changes to the structure of the pipeline.   Pipelines include stages. Each stage contains one or more actions that must complete before the next stage begins. A stage results in success or failure. If a stage fails, the pipeline stops at that stage and remains stopped until either a new version of an artifact appears in the source location, or a user takes action to rerun the most recent artifact through the pipeline. You can call GetPipelineState, which displays the status of a pipeline, including the status of stages in the pipeline, or GetPipeline, which returns the entire structure of the pipeline, including the stages of that pipeline. For more information about the structure of stages and actions, see CodePipeline Pipeline Structure Reference. Pipeline stages include actions that are categorized into categories such as source or build actions performed in a stage of a pipeline. For example, you can use a source action to import artifacts into a pipeline from a source such as Amazon S3. Like stages, you do not work with actions directly in most cases, but you do define and interact with actions when working with pipeline operations such as CreatePipeline and GetPipelineState. Valid action categories are:   Source   Build   Test   Deploy   Approval   Invoke   Compute   Pipelines also include transitions, which allow the transition of artifacts from one stage to the next in a pipeline after the actions in one stage complete. You can work with transitions by calling:    DisableStageTransition, which prevents artifacts from transitioning to the next stage in a pipeline.    EnableStageTransition, which enables transition of artifacts between stages in a pipeline.     Using the API to integrate with CodePipeline  For third-party integrators or developers who want to create their own integrations with CodePipeline, the expected sequence varies from the standard API user. To integrate with CodePipeline, developers need to work with the following items:  Jobs, which are instances of an action. For example, a job for a source action might import a revision of an artifact from a source.  You can work with jobs by calling:    AcknowledgeJob, which confirms whether a job worker has received the specified job.    GetJobDetails, which returns the details of a job.    PollForJobs, which determines whether there are any jobs to act on.    PutJobFailureResult, which provides details of a job failure.     PutJobSuccessResult, which provides details of a job success.    Third party jobs, which are instances of an action created by a partner action and integrated into CodePipeline. Partner actions are created by members of the Amazon Web Services Partner Network. You can work with third party jobs by calling:    AcknowledgeThirdPartyJob, which confirms whether a job worker has received the specified job.    GetThirdPartyJobDetails, which requests the details of a job for a partner action.    PollForThirdPartyJobs, which determines whether there are any jobs to act on.     PutThirdPartyJobFailureResult, which provides details of a job failure.    PutThirdPartyJobSuccessResult, which provides details of a job success",
      loadSpec: "aws/codepipeline",
    },
    {
      name: "codestar-connections",
      description:
        "AWS CodeStar Connections This Amazon Web Services CodeStar Connections API Reference provides descriptions and usage examples of the operations and data types for the Amazon Web Services CodeStar Connections API. You can use the connections API to work with connections and installations.  Connections are configurations that you use to connect Amazon Web Services resources to external code repositories. Each connection is a resource that can be given to services such as CodePipeline to connect to a third-party repository such as Bitbucket. For example, you can add the connection in CodePipeline so that it triggers your pipeline when a code change is made to your third-party code repository. Each connection is named and associated with a unique ARN that is used to reference the connection. When you create a connection, the console initiates a third-party connection handshake. Installations are the apps that are used to conduct this handshake. For example, the installation for the Bitbucket provider type is the Bitbucket app. When you create a connection, you can choose an existing installation or create one. When you want to create a connection to an installed provider type such as GitHub Enterprise Server, you create a host for your connections. You can work with connections by calling:    CreateConnection, which creates a uniquely named connection that can be referenced by services such as CodePipeline.    DeleteConnection, which deletes the specified connection.    GetConnection, which returns information about the connection, including the connection status.    ListConnections, which lists the connections associated with your account.   You can work with hosts by calling:    CreateHost, which creates a host that represents the infrastructure where your provider is installed.    DeleteHost, which deletes the specified host.    GetHost, which returns information about the host, including the setup status.    ListHosts, which lists the hosts associated with your account.   You can work with tags in Amazon Web Services CodeStar Connections by calling the following:    ListTagsForResource, which gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in Amazon Web Services CodeStar Connections.    TagResource, which adds or updates tags for a resource in Amazon Web Services CodeStar Connections.    UntagResource, which removes tags for a resource in Amazon Web Services CodeStar Connections.   For information about how to use Amazon Web Services CodeStar Connections, see the Developer Tools User Guide",
      loadSpec: "aws/codestar-connections",
    },
    {
      name: "codestar-notifications",
      description:
        "This AWS CodeStar Notifications API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Notifications API. You can use the AWS CodeStar Notifications API to work with the following objects: Notification rules, by calling the following:     CreateNotificationRule, which creates a notification rule for a resource in your account.     DeleteNotificationRule, which deletes a notification rule.     DescribeNotificationRule, which provides information about a notification rule.     ListNotificationRules, which lists the notification rules associated with your account.     UpdateNotificationRule, which changes the name, events, or targets associated with a notification rule.     Subscribe, which subscribes a target to a notification rule.     Unsubscribe, which removes a target from a notification rule.    Targets, by calling the following:     DeleteTarget, which removes a notification rule target from a notification rule.     ListTargets, which lists the targets associated with a notification rule.    Events, by calling the following:     ListEventTypes, which lists the event types you can include in a notification rule.    Tags, by calling the following:     ListTagsForResource, which lists the tags already associated with a notification rule in your account.     TagResource, which associates a tag you provide with a notification rule in your account.     UntagResource, which removes a tag from a notification rule in your account.     For information about how to use AWS CodeStar Notifications, see the Amazon Web Services Developer Tools Console User Guide",
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
        "With the Amazon Cognito user pools API, you can configure user pools and authenticate users. To authenticate users from third-party identity providers (IdPs) in this API, you can link IdP users to native user profiles. Learn more about the authentication and authorization of federated users at Adding user pool sign-in through a third party and in the User pool federation endpoints and hosted UI reference. This API reference provides detailed information about API operations and object types in Amazon Cognito. Along with resource management operations, the Amazon Cognito user pools API includes classes of operations and authorization models for client-side and server-side authentication of users. You can interact with operations in the Amazon Cognito user pools API as any of the following subjects.   An administrator who wants to configure user pools, app clients, users, groups, or other user pool functions.   A server-side app, like a web application, that wants to use its Amazon Web Services privileges to manage, authenticate, or authorize a user.   A client-side app, like a mobile app, that wants to make unauthenticated requests to manage, authenticate, or authorize a user.   For more information, see Using the Amazon Cognito user pools API and user pool endpoints in the Amazon Cognito Developer Guide. With your Amazon Web Services SDK, you can build the logic to support operational flows in every use case for this API. You can also make direct REST API requests to Amazon Cognito user pools service endpoints. The following links can get you started with the CognitoIdentityProvider client in other supported Amazon Web Services SDKs.    Amazon Web Services Command Line Interface     Amazon Web Services SDK for .NET     Amazon Web Services SDK for C++     Amazon Web Services SDK for Go     Amazon Web Services SDK for Java V2     Amazon Web Services SDK for JavaScript     Amazon Web Services SDK for PHP V3     Amazon Web Services SDK for Python     Amazon Web Services SDK for Ruby V3    To get started with an Amazon Web Services SDK, see Tools to Build on Amazon Web Services. For example actions and scenarios, see Code examples for Amazon Cognito Identity Provider using Amazon Web Services SDKs",
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
        "Amazon Comprehend is an Amazon Web Services service for gaining insight into the content of documents. Use these actions to determine the topics contained in your documents, the topics they discuss, the predominant sentiment expressed in them, the predominant language used, and more",
      loadSpec: "aws/comprehend",
    },
    {
      name: "comprehendmedical",
      description:
        "Amazon Comprehend Medical extracts structured information from unstructured clinical text. Use these actions to gain insight in your documents. Amazon Comprehend Medical only detects entities in English language texts. Amazon Comprehend Medical places limits on the sizes of files allowed for different API operations. To learn more, see Guidelines and quotas in the Amazon Comprehend Medical Developer Guide",
      loadSpec: "aws/comprehendmedical",
    },
    {
      name: "compute-optimizer",
      description:
        "Compute Optimizer is a service that analyzes the configuration and utilization metrics of your Amazon Web Services compute resources, such as Amazon EC2 instances, Amazon EC2 Auto Scaling groups, Lambda functions, Amazon EBS volumes, and Amazon ECS services on Fargate. It reports whether your resources are optimal, and generates optimization recommendations to reduce the cost and improve the performance of your workloads. Compute Optimizer also provides recent utilization metric data, in addition to projected utilization metric data for the recommendations, which you can use to evaluate which recommendation provides the best price-performance trade-off. The analysis of your usage patterns can help you decide when to move or resize your running resources, and still meet your performance and capacity requirements. For more information about Compute Optimizer, including the required permissions to use the service, see the Compute Optimizer User Guide",
      loadSpec: "aws/compute-optimizer",
    },
    {
      name: "connect",
      description:
        "Amazon Connect actions     Amazon Connect data types    Amazon Connect is a cloud-based contact center solution that you use to set up and manage a customer contact center and provide reliable customer engagement at any scale. Amazon Connect provides metrics and real-time reporting that enable you to optimize contact routing. You can also resolve customer issues more efficiently by getting customers in touch with the appropriate agents. There are limits to the number of Amazon Connect resources that you can create. There are also limits to the number of requests that you can make per second. For more information, see Amazon Connect Service Quotas in the Amazon Connect Administrator Guide. You can use an endpoint to connect programmatically to an Amazon Web Services service. For a list of Amazon Connect endpoints, see Amazon Connect Endpoints",
      loadSpec: "aws/connect",
    },
    {
      name: "connect-contact-lens",
      description:
        "Contact Lens actions     Contact Lens data types    Amazon Connect Contact Lens enables you to analyze conversations between customer and agents, by using speech transcription, natural language processing, and intelligent search capabilities. It performs sentiment analysis, detects issues, and enables you to automatically categorize contacts. Amazon Connect Contact Lens provides both real-time and post-call analytics of customer-agent conversations. For more information, see Analyze conversations using speech analytics in the Amazon Connect Administrator Guide",
      loadSpec: "aws/connect-contact-lens",
    },
    {
      name: "connectcampaigns",
      description: "Provide APIs to create and manage Amazon Connect Campaigns",
      loadSpec: "aws/connectcampaigns",
    },
    {
      name: "connectcampaignsv2",
      description: "Provide APIs to create and manage Amazon Connect Campaigns",
      loadSpec: "aws/connectcampaignsv2",
    },
    {
      name: "connectcases",
      description:
        "With Amazon Connect Cases, your agents can track and manage customer issues that require multiple interactions, follow-up tasks, and teams in your contact center. A case represents a customer issue. It records the issue, the steps and interactions taken to resolve the issue, and the outcome. For more information, see Amazon Connect Cases in the Amazon Connect Administrator Guide",
      loadSpec: "aws/connectcases",
    },
    {
      name: "connectparticipant",
      description:
        "Amazon Connect is an easy-to-use omnichannel cloud contact center service that enables companies of any size to deliver superior customer service at a lower cost. Amazon Connect communications capabilities make it easy for companies to deliver personalized interactions across communication channels, including chat.  Use the Amazon Connect Participant Service to manage participants (for example, agents, customers, and managers listening in), and to send messages and events within a chat contact. The APIs in the service enable the following: sending chat messages, attachment sharing, managing a participant's connection state and message events, and retrieving chat transcripts",
      loadSpec: "aws/connectparticipant",
    },
    {
      name: "controlcatalog",
      description:
        "Welcome to the Amazon Web Services Control Catalog API reference. This guide is for developers who need detailed information about how to programmatically identify and filter the common controls and related metadata that are available to Amazon Web Services customers. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types that are supported by Amazon Web Services Control Catalog.  Use the following links to get started with the Amazon Web Services Control Catalog API:    Actions: An alphabetical list of all Control Catalog API operations.    Data types: An alphabetical list of all Control Catalog data types.    Common parameters: Parameters that all operations can use.    Common errors: Client and server errors that all operations can return",
      loadSpec: "aws/controlcatalog",
    },
    {
      name: "controltower",
      description:
        'Amazon Web Services Control Tower offers application programming interface (API) operations that support programmatic interaction with these types of resources:     Controls      DisableControl     EnableControl     GetEnabledControl     ListControlOperations     ListEnabledControls     UpdateEnabledControl        Landing zones      CreateLandingZone     DeleteLandingZone     GetLandingZone     GetLandingZoneOperation     ListLandingZones     ListLandingZoneOperations     ResetLandingZone     UpdateLandingZone        Baselines      DisableBaseline     EnableBaseline     GetBaseline     GetBaselineOperation     GetEnabledBaseline     ListBaselines     ListEnabledBaselines     ResetEnabledBaseline     UpdateEnabledBaseline        Tagging      ListTagsForResource     TagResource     UntagResource      For more information about these types of resources, see the  Amazon Web Services Control Tower User Guide .  About control APIs  These interfaces allow you to apply the Amazon Web Services library of pre-defined controls to your organizational units, programmatically. In Amazon Web Services Control Tower, the terms "control" and "guardrail" are synonyms. To call these APIs, you\'ll need to know:   the controlIdentifier for the control--or guardrail--you are targeting.   the ARN associated with the target organizational unit (OU), which we call the targetIdentifier.   the ARN associated with a resource that you wish to tag or untag.    To get the controlIdentifier for your Amazon Web Services Control Tower control:  The controlIdentifier is an ARN that is specified for each control. You can view the controlIdentifier in the console on the Control details page, as well as in the documentation.  About identifiers for Amazon Web Services Control Tower  The Amazon Web Services Control Tower controlIdentifier is unique in each Amazon Web Services Region for each control. You can find the controlIdentifier for each Region and control in the Tables of control metadata or the Control availability by Region tables in the Amazon Web Services Control Tower Controls Reference Guide. A quick-reference list of control identifers for the Amazon Web Services Control Tower legacy Strongly recommended and Elective controls is given in Resource identifiers for APIs and controls in the  Amazon Web Services Control Tower Controls Reference Guide . Remember that Mandatory controls cannot be added or removed.   Some controls have two identifiers     ARN format for Amazon Web Services Control Tower: arn:aws:controltower:{REGION}::control/{CONTROL_TOWER_OPAQUE_ID}   Example:   arn:aws:controltower:us-west-2::control/AWS-GR_AUTOSCALING_LAUNCH_CONFIG_PUBLIC_IP_DISABLED     ARN format for Amazon Web Services Control Catalog: arn:{PARTITION}:controlcatalog:::control/{CONTROL_CATALOG_OPAQUE_ID}    You can find the {CONTROL_CATALOG_OPAQUE_ID} in the  Amazon Web Services Control Tower Controls Reference Guide , or in the Amazon Web Services Control Tower console, on the Control details page. The Amazon Web Services Control Tower APIs for enabled controls, such as GetEnabledControl and ListEnabledControls always return an ARN of the same type given when the control was enabled.   To get the targetIdentifier:  The targetIdentifier is the ARN for an OU. In the Amazon Web Services Organizations console, you can find the ARN for the OU on the Organizational unit details page associated with that OU.   OU ARN format:   arn:${Partition}:organizations::${MasterAccountId}:ou/o-${OrganizationId}/ou-${OrganizationalUnitId}     About landing zone APIs  You can configure and launch an Amazon Web Services Control Tower landing zone with APIs. For an introduction and steps, see Getting started with Amazon Web Services Control Tower using APIs. For an overview of landing zone API operations, see  Amazon Web Services Control Tower supports landing zone APIs. The individual API operations for landing zones are detailed in this document, the API reference manual, in the "Actions" section.  About baseline APIs  You can apply the AWSControlTowerBaseline baseline to an organizational unit (OU) as a way to register the OU with Amazon Web Services Control Tower, programmatically. For a general overview of this capability, see Amazon Web Services Control Tower supports APIs for OU registration and configuration with baselines. You can call the baseline API operations to view the baselines that Amazon Web Services Control Tower enables for your landing zone, on your behalf, when setting up the landing zone. These baselines are read-only baselines. The individual API operations for baselines are detailed in this document, the API reference manual, in the "Actions" section. For usage examples, see Baseline API input and output examples with CLI.   About Amazon Web Services Control Catalog identifiers    The EnableControl and DisableControl API operations can be called by specifying either the Amazon Web Services Control Tower identifer or the Amazon Web Services Control Catalog identifier. The API response returns the same type of identifier that you specified when calling the API.   If you use an Amazon Web Services Control Tower identifier to call the EnableControl API, and then call EnableControl again with an Amazon Web Services Control Catalog identifier, Amazon Web Services Control Tower returns an error message stating that the control is already enabled. Similar behavior applies to the DisableControl API operation.    Mandatory controls and the landing-zone-level Region deny control have Amazon Web Services Control Tower identifiers only.    Details and examples     Control API input and output examples with CLI     Baseline API input and output examples with CLI     Enable controls with CloudFormation     Launch a landing zone with CloudFormation     Control metadata tables (large page)     Control availability by Region tables (large page)     List of identifiers for legacy controls     Controls reference guide     Controls library groupings     Creating Amazon Web Services Control Tower resources with Amazon Web Services CloudFormation    To view the open source resource repository on GitHub, see aws-cloudformation/aws-cloudformation-resource-providers-controltower   Recording API Requests  Amazon Web Services Control Tower supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected by CloudTrail, you can determine which requests the Amazon Web Services Control Tower service received, who made the request and when, and so on. For more about Amazon Web Services Control Tower and its support for CloudTrail, see Logging Amazon Web Services Control Tower Actions with Amazon Web Services CloudTrail in the Amazon Web Services Control Tower User Guide. To learn more about CloudTrail, including how to turn it on and find your log files, see the Amazon Web Services CloudTrail User Guide',
      loadSpec: "aws/controltower",
    },
    {
      name: "cost-optimization-hub",
      description:
        "You can use the Cost Optimization Hub API to programmatically identify, filter, aggregate, and quantify savings for your cost optimization recommendations across multiple Amazon Web Services Regions and Amazon Web Services accounts in your organization. The Cost Optimization Hub API provides the following endpoint:    https://cost-optimization-hub.us-east-1.amazonaws.com",
      loadSpec: "aws/cost-optimization-hub",
    },
    {
      name: "cur",
      description:
        "You can use the Amazon Web Services Cost and Usage Report API to programmatically create, query, and delete Amazon Web Services Cost and Usage Report definitions. Amazon Web Services Cost and Usage Report track the monthly Amazon Web Services costs and usage associated with your Amazon Web Services account. The report contains line items for each unique combination of Amazon Web Services product, usage type, and operation that your Amazon Web Services account uses. You can configure the Amazon Web Services Cost and Usage Report to show only the data that you want, using the Amazon Web Services Cost and Usage Report API. Service Endpoint The Amazon Web Services Cost and Usage Report API provides the following endpoint:   cur.us-east-1.amazonaws.com",
      loadSpec: "aws/cur",
    },
    {
      name: "customer-profiles",
      description:
        "Amazon Connect Customer Profiles    Customer Profiles actions     Customer Profiles data types    Amazon Connect Customer Profiles is a unified customer profile for your contact center that has pre-built connectors powered by AppFlow that make it easy to combine customer information from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center.  For more information about the Amazon Connect Customer Profiles feature, see Use Customer Profiles in the Amazon Connect Administrator's Guide",
      loadSpec: "aws/customer-profiles",
    },
    {
      name: "databrew",
      description:
        "Glue DataBrew is a visual, cloud-scale data-preparation service. DataBrew simplifies data preparation tasks, targeting data issues that are hard to spot and time-consuming to fix. DataBrew empowers users of all technical levels to visualize the data and perform one-click data transformations, with no coding required",
      loadSpec: "aws/databrew",
    },
    {
      name: "dataexchange",
      description:
        "AWS Data Exchange is a service that makes it easy for AWS customers to exchange data in the cloud. You can use the AWS Data Exchange APIs to create, update, manage, and access file-based data set in the AWS Cloud. As a subscriber, you can view and access the data sets that you have an entitlement to through a subscription. You can use the APIs to download or copy your entitled data sets to Amazon Simple Storage Service (Amazon S3) for use across a variety of AWS analytics and machine learning services. As a provider, you can create and manage your data sets that you would like to publish to a product. Being able to package and provide your data sets into products requires a few steps to determine eligibility. For more information, visit the AWS Data Exchange User Guide. A data set is a collection of data that can be changed or updated over time. Data sets can be updated using revisions, which represent a new version or incremental change to a data set. A revision contains one or more assets. An asset in AWS Data Exchange is a piece of data that can be stored as an Amazon S3 object, Redshift datashare, API Gateway API, AWS Lake Formation data permission, or Amazon S3 data access. The asset can be a structured data file, an image file, or some other data file. Jobs are asynchronous import or export operations used to create or copy assets",
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
        "DataSync DataSync is an online data movement and discovery service that simplifies data migration and helps you quickly, easily, and securely transfer your file or object data to, from, and between Amazon Web Services storage services. This API interface reference includes documentation for using DataSync programmatically. For complete information, see the  DataSync User Guide",
      loadSpec: "aws/datasync",
    },
    {
      name: "datazone",
      description:
        "Amazon DataZone is a data management service that enables you to catalog, discover, govern, share, and analyze your data. With Amazon DataZone, you can share and access your data across accounts and supported regions. Amazon DataZone simplifies your experience across Amazon Web Services services, including, but not limited to, Amazon Redshift, Amazon Athena, Amazon Web Services Glue, and Amazon Web Services Lake Formation",
      loadSpec: "aws/datazone",
    },
    {
      name: "dax",
      description:
        "DAX is a managed caching service engineered for Amazon DynamoDB. DAX dramatically speeds up database reads by caching frequently-accessed data from DynamoDB, so applications can access that data with sub-millisecond latency. You can create a DAX cluster easily, using the AWS Management Console. With a few simple modifications to your code, your application can begin taking advantage of the DAX cluster and realize significant improvements in read performance",
      loadSpec: "aws/dax",
    },
    {
      name: "deadline",
      description:
        "The Amazon Web Services Deadline Cloud API provides infrastructure and centralized management for your projects. Use the Deadline Cloud API to onboard users, assign projects, and attach permissions specific to their job function. With Deadline Cloud, content production teams can deploy resources for their workforce securely in the cloud, reducing the costs of added physical infrastructure. Keep your content production operations secure, while allowing your contributors to access the tools they need, such as scalable high-speed storage, licenses, and cost management services",
      loadSpec: "aws/deadline",
    },
    {
      name: "detective",
      description:
        'Detective uses machine learning and purpose-built visualizations to help you to analyze and investigate security issues across your Amazon Web Services (Amazon Web Services) workloads. Detective automatically extracts time-based events such as login attempts, API calls, and network traffic from CloudTrail and Amazon Virtual Private Cloud (Amazon VPC) flow logs. It also extracts findings detected by Amazon GuardDuty. The Detective API primarily supports the creation and management of behavior graphs. A behavior graph contains the extracted data from a set of member accounts, and is created and managed by an administrator account. To add a member account to the behavior graph, the administrator account sends an invitation to the account. When the account accepts the invitation, it becomes a member account in the behavior graph. Detective is also integrated with Organizations. The organization management account designates the Detective administrator account for the organization. That account becomes the administrator account for the organization behavior graph. The Detective administrator account is also the delegated administrator account for Detective in Organizations. The Detective administrator account can enable any organization account as a member account in the organization behavior graph. The organization accounts do not receive invitations. The Detective administrator account can also invite other accounts to the organization behavior graph. Every behavior graph is specific to a Region. You can only use the API to manage behavior graphs that belong to the Region that is associated with the currently selected endpoint. The administrator account for a behavior graph can use the Detective API to do the following:   Enable and disable Detective. Enabling Detective creates a new behavior graph.   View the list of member accounts in a behavior graph.   Add member accounts to a behavior graph.   Remove member accounts from a behavior graph.   Apply tags to a behavior graph.   The organization management account can use the Detective API to select the delegated administrator for Detective. The Detective administrator account for an organization can use the Detective API to do the following:   Perform all of the functions of an administrator account.   Determine whether to automatically enable new organization accounts as member accounts in the organization behavior graph.   An invited member account can use the Detective API to do the following:   View the list of behavior graphs that they are invited to.   Accept an invitation to contribute to a behavior graph.   Decline an invitation to contribute to a behavior graph.   Remove their account from a behavior graph.   All API actions are logged as CloudTrail events. See Logging Detective API Calls with CloudTrail.  We replaced the term "master account" with the term "administrator account". An administrator account is used to centrally manage multiple accounts. In the case of Detective, the administrator account manages the accounts in their behavior graph',
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
        "Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in business critical operational applications. You specify the Amazon Web Services resources that you want DevOps Guru to cover, then the Amazon CloudWatch metrics and Amazon Web Services CloudTrail events related to those resources are analyzed. When anomalous behavior is detected, DevOps Guru creates an insight that includes recommendations, related events, and related metrics that can help you improve your operational applications. For more information, see What is Amazon DevOps Guru.   You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight is created. You can also enable DevOps Guru to generate an OpsItem in Amazon Web Services Systems Manager for each insight to help you manage and track your work addressing insights.   To learn about the DevOps Guru workflow, see How DevOps Guru works. To learn about DevOps Guru concepts, see Concepts in DevOps Guru",
      loadSpec: "aws/devops-guru",
    },
    {
      name: "directconnect",
      description:
        "Direct Connect links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router. With this connection in place, you can create virtual interfaces directly to the Amazon Web Services Cloud (for example, to Amazon EC2 and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A connection provides access to all Amazon Web Services Regions except the China (Beijing) and (China) Ningxia Regions. Amazon Web Services resources in the China Regions can only be accessed through locations associated with those Regions",
      loadSpec: "aws/directconnect",
    },
    {
      name: "discovery",
      description:
        "Amazon Web Services Application Discovery Service Amazon Web Services Application Discovery Service (Application Discovery Service) helps you plan application migration projects. It automatically identifies servers, virtual machines (VMs), and network dependencies in your on-premises data centers. For more information, see the Amazon Web Services Application Discovery Service FAQ.  Application Discovery Service offers three ways of performing discovery and collecting data about your on-premises servers:    Agentless discovery using Amazon Web Services Application Discovery Service Agentless Collector (Agentless Collector), which doesn't require you to install an agent on each host.   Agentless Collector gathers server information regardless of the operating systems, which minimizes the time required for initial on-premises infrastructure assessment.   Agentless Collector doesn't collect information about network dependencies, only agent-based discovery collects that information.         Agent-based discovery using the Amazon Web Services Application Discovery Agent (Application Discovery Agent) collects a richer set of data than agentless discovery, which you install on one or more hosts in your data center.    The agent captures infrastructure and application information, including an inventory of running processes, system performance information, resource utilization, and network dependencies.   The information collected by agents is secured at rest and in transit to the Application Discovery Service database in the Amazon Web Services cloud. For more information, see Amazon Web Services Application Discovery Agent.        Amazon Web Services Partner Network (APN) solutions integrate with Application Discovery Service, enabling you to import details of your on-premises environment directly into Amazon Web Services Migration Hub (Migration Hub) without using Agentless Collector or Application Discovery Agent.   Third-party application discovery tools can query Amazon Web Services Application Discovery Service, and they can write to the Application Discovery Service database using the public API.   In this way, you can import data into Migration Hub and view it, so that you can associate applications with servers and track migrations.      Working With This Guide  This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for Application Discovery Service. The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see Amazon Web Services SDKs.    Remember that you must set your Migration Hub home Region before you call any of these APIs.   You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home Region, or a HomeRegionNotSetException error is returned.   API calls for read actions (list, describe, stop, and delete) are permitted outside of your home Region.   Although it is unlikely, the Migration Hub home Region could change. If you call APIs outside the home Region, an InvalidInputException is returned.   You must call GetHomeRegion to obtain the latest Migration Hub home Region.    This guide is intended for use with the Amazon Web Services Application Discovery Service User Guide.  All data is handled according to the Amazon Web Services Privacy Policy. You can operate Application Discovery Service offline to inspect collected data before it is shared with the service",
      loadSpec: "aws/discovery",
    },
    {
      name: "dlm",
      description:
        "Amazon Data Lifecycle Manager With Amazon Data Lifecycle Manager, you can manage the lifecycle of your Amazon Web Services resources. You create lifecycle policies, which are used to automate operations on the specified resources. Amazon Data Lifecycle Manager supports Amazon EBS volumes and snapshots. For information about using Amazon Data Lifecycle Manager with Amazon EBS, see  Amazon Data Lifecycle Manager in the Amazon EC2 User Guide",
      loadSpec: "aws/dlm",
    },
    {
      name: "dms",
      description:
        "Database Migration Service Database Migration Service (DMS) can migrate your data to and from the most widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to MySQL or SQL Server to PostgreSQL. For more information about DMS, see What Is Database Migration Service? in the Database Migration Service User Guide",
      loadSpec: "aws/dms",
    },
    {
      name: "docdb",
      description:
        "Amazon DocumentDB is a fast, reliable, and fully managed database service. Amazon DocumentDB makes it easy to set up, operate, and scale MongoDB-compatible databases in the cloud. With Amazon DocumentDB, you can run the same application code and use the same drivers and tools that you use with MongoDB",
      loadSpec: "aws/docdb",
    },
    {
      name: "docdb-elastic",
      description:
        "Amazon DocumentDB elastic clusters Amazon DocumentDB elastic-clusters support workloads with millions of reads/writes per second and petabytes of storage capacity. Amazon DocumentDB elastic clusters also simplify how developers interact with Amazon DocumentDB elastic-clusters by eliminating the need to choose, manage or upgrade instances. Amazon DocumentDB elastic-clusters were created to:   provide a solution for customers looking for a database that provides virtually limitless scale with rich query capabilities and MongoDB API compatibility.   give customers higher connection limits, and to reduce downtime from patching.   continue investing in a cloud-native, elastic, and class leading architecture for JSON workloads",
      loadSpec: "aws/docdb-elastic",
    },
    {
      name: "drs",
      description: "AWS Elastic Disaster Recovery Service",
      loadSpec: "aws/drs",
    },
    {
      name: "ds",
      description:
        "Directory Service Directory Service is a web service that makes it easy for you to setup and run directories in the Amazon Web Services cloud, or connect your Amazon Web Services resources with an existing self-managed Microsoft Active Directory. This guide provides detailed information about Directory Service operations, data types, parameters, and errors. For information about Directory Services features, see Directory Service and the Directory Service Administration Guide.  Amazon Web Services provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to Directory Service and other Amazon Web Services services. For more information about the Amazon Web Services SDKs, including how to download and install them, see Tools for Amazon Web Services",
      loadSpec: "aws/ds",
    },
    {
      name: "ds-data",
      description:
        "Amazon Web Services Directory Service Data is an extension of Directory Service. This API reference provides detailed information about Directory Service Data operations and object types.   With Directory Service Data, you can create, read, update, and delete users, groups, and memberships from your Managed Microsoft AD without additional costs and without deploying dedicated management instances. You can also perform built-in object management tasks across directories without direct network connectivity, which simplifies provisioning and access management to achieve fully automated deployments. Directory Service Data supports user and group write operations, such as CreateUser and CreateGroup, within the organizational unit (OU) of your Managed Microsoft AD. Directory Service Data supports read operations, such as ListUsers and ListGroups, on all users, groups, and group memberships within your Managed Microsoft AD and across trusted realms. Directory Service Data supports adding and removing group members in your OU and the Amazon Web Services Delegated Groups OU, so you can grant and deny access to specific roles and permissions. For more information, see Manage users and groups in the Directory Service Administration Guide.    Directory management operations and configuration changes made against the Directory Service API will also reflect in Directory Service Data API with eventual consistency. You can expect a short delay between management changes, such as adding a new directory trust and calling the Directory Service Data API for the newly created trusted realm.    Directory Service Data connects to your Managed Microsoft AD domain controllers and performs operations on underlying directory objects. When you create your Managed Microsoft AD, you choose subnets for domain controllers that Directory Service creates on your behalf. If a domain controller is unavailable, Directory Service Data uses an available domain controller. As a result, you might notice eventual consistency while objects replicate from one domain controller to another domain controller. For more information, see What gets created in the Directory Service Administration Guide. Directory limits vary by Managed Microsoft AD edition:     Standard edition \u2013 Supports 8 transactions per second (TPS) for read operations and 4 TPS for write operations per directory. There's a concurrency limit of 10 concurrent requests.     Enterprise edition \u2013 Supports 16 transactions per second (TPS) for read operations and 8 TPS for write operations per directory. There's a concurrency limit of 10 concurrent requests.    Amazon Web Services Account - Supports a total of 100 TPS for Directory Service Data operations across all directories.    Directory Service Data only supports the Managed Microsoft AD directory type and is only available in the primary Amazon Web Services Region. For more information, see Managed Microsoft AD and Primary vs additional Regions in the Directory Service Administration Guide",
      loadSpec: "aws/ds-data",
    },
    {
      name: "dsql",
      description:
        "This is an interface reference for Amazon Aurora DSQL. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Aurora DSQL. Amazon Aurora DSQL is a serverless, distributed SQL database suitable for workloads of any size. Aurora DSQL is available in both single-Region and multi-Region configurations, so your clusters and databases are always available even if an Availability Zone or an Amazon Web Services Region are unavailable. Aurora DSQL lets you focus on using your data to acquire new insights for your business and customers",
      loadSpec: "aws/dsql",
    },
    {
      name: "dynamodb",
      description:
        "Amazon DynamoDB Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database, so that you don't have to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling. With DynamoDB, you can create database tables that can store and retrieve any amount of data, and serve any level of request traffic. You can scale up or scale down your tables' throughput capacity without downtime or performance degradation, and use the Amazon Web Services Management Console to monitor resource utilization and performance metrics. DynamoDB automatically spreads the data and traffic for your tables over a sufficient number of servers to handle your throughput and storage requirements, while maintaining consistent and fast performance. All of your data is stored on solid state disks (SSDs) and automatically replicated across multiple Availability Zones in an Amazon Web Services Region, providing built-in high availability and data durability",
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
        "You can use the Amazon Elastic Block Store (Amazon EBS) direct APIs to create Amazon EBS snapshots, write data directly to your snapshots, read data on your snapshots, and identify the differences or changes between two snapshots. If you\u2019re an independent software vendor (ISV) who offers backup services for Amazon EBS, the EBS direct APIs make it more efficient and cost-effective to track incremental changes on your Amazon EBS volumes through snapshots. This can be done without having to create new volumes from snapshots, and then use Amazon Elastic Compute Cloud (Amazon EC2) instances to compare the differences. You can create incremental snapshots directly from data on-premises into volumes and the cloud to use for quick disaster recovery. With the ability to write and read snapshots, you can write your on-premises data to an snapshot during a disaster. Then after recovery, you can restore it back to Amazon Web Services or on-premises from the snapshot. You no longer need to build and maintain complex mechanisms to copy data to and from Amazon EBS. This API reference provides detailed information about the actions, data types, parameters, and errors of the EBS direct APIs. For more information about the elements that make up the EBS direct APIs, and examples of how to use them effectively, see Accessing the Contents of an Amazon EBS Snapshot in the Amazon Elastic Compute Cloud User Guide. For more information about the supported Amazon Web Services Regions, endpoints, and service quotas for the EBS direct APIs, see Amazon Elastic Block Store Endpoints and Quotas in the Amazon Web Services General Reference",
      loadSpec: "aws/ebs",
    },
    {
      name: "ec2",
      description:
        "Amazon Elastic Compute Cloud You can access the features of Amazon Elastic Compute Cloud (Amazon EC2) programmatically. For more information, see the Amazon EC2 Developer Guide",
      loadSpec: "aws/ec2",
    },
    {
      name: "ec2-instance-connect",
      description:
        "This is the  Amazon EC2 Instance Connect API Reference. It provides descriptions, syntax, and usage examples for each of the actions for Amazon EC2 Instance Connect. Amazon EC2 Instance Connect enables system administrators to publish one-time use SSH public keys to EC2, providing users a simple and secure way to connect to their instances. To view the Amazon EC2 Instance Connect content in the  Amazon EC2 User Guide, see Connect to your Linux instance using EC2 Instance Connect. For Amazon EC2 APIs, see the Amazon EC2 API Reference",
      loadSpec: "aws/ec2-instance-connect",
    },
    {
      name: "ecr",
      description:
        "Amazon Elastic Container Registry Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Customers can use the familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports private repositories with resource-based permissions using IAM so that specific users or Amazon EC2 instances can access repositories and images. Amazon ECR has service endpoints in each supported Region. For more information, see Amazon ECR endpoints in the Amazon Web Services General Reference",
      loadSpec: "aws/ecr",
    },
    {
      name: "ecr-public",
      description:
        "Amazon Elastic Container Registry Public Amazon Elastic Container Registry Public (Amazon ECR Public) is a managed container image registry service. Amazon ECR provides both public and private registries to host your container images. You can use the Docker CLI or your preferred client to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports public repositories with this API. For information about the Amazon ECR API for private repositories, see Amazon Elastic Container Registry API Reference",
      loadSpec: "aws/ecr-public",
    },
    {
      name: "ecs",
      description:
        "Amazon Elastic Container Service Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service. It makes it easy to run, stop, and manage Docker containers. You can host your cluster on a serverless infrastructure that's managed by Amazon ECS by launching your services or tasks on Fargate. For more control, you can host your tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) or External (on-premises) instances that you manage. Amazon ECS makes it easy to launch and stop container-based applications with simple API calls. This makes it easy to get the state of your cluster from a centralized service, and gives you access to many familiar Amazon EC2 features. You can use Amazon ECS to schedule the placement of containers across your cluster based on your resource needs, isolation policies, and availability requirements. With Amazon ECS, you don't need to operate your own cluster management and configuration management systems. You also don't need to worry about scaling your management infrastructure",
      loadSpec: "aws/ecs",
    },
    {
      name: "efs",
      description:
        "Amazon Elastic File System Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use with Amazon EC2 Linux and Mac instances in the Amazon Web Services Cloud. With Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you add and remove files, so that your applications have the storage they need, when they need it. For more information, see the Amazon Elastic File System API Reference and the Amazon Elastic File System User Guide",
      loadSpec: "aws/efs",
    },
    {
      name: "eks",
      description:
        "Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on Amazon Web Services without needing to setup or maintain your own Kubernetes control plane. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use all the existing plugins and tooling from the Kubernetes community. Applications running on Amazon EKS are fully compatible with applications running on any standard Kubernetes environment, whether running in on-premises data centers or public clouds. This means that you can easily migrate any standard Kubernetes application to Amazon EKS without any code modification required",
      loadSpec: "aws/eks",
    },
    {
      name: "eks-auth",
      description:
        "The Amazon EKS Auth API and the AssumeRoleForPodIdentity action are only used by the EKS Pod Identity Agent",
      loadSpec: "aws/eks-auth",
    },
    {
      name: "elastic-inference",
      description:
        "Amazon Elastic Inference is no longer available.   Elastic Inference public APIs",
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
        "Amazon EMR is a web service that makes it easier to process large amounts of data efficiently. Amazon EMR uses Hadoop processing combined with several Amazon Web Services services to do tasks such as web indexing, data mining, log file analysis, machine learning, scientific simulation, and data warehouse management",
      loadSpec: "aws/emr",
    },
    {
      name: "emr-containers",
      description:
        'Amazon EMR on EKS provides a deployment option for Amazon EMR that allows you to run open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS). With this deployment option, you can focus on running analytics workloads while Amazon EMR on EKS builds, configures, and manages containers for open-source applications. For more information about Amazon EMR on EKS concepts and tasks, see What is Amazon EMR on EKS.  Amazon EMR containers is the API name for Amazon EMR on EKS. The emr-containers prefix is used in the following scenarios:    It is the prefix in the CLI commands for Amazon EMR on EKS. For example, aws emr-containers start-job-run.   It is the prefix before IAM policy actions for Amazon EMR on EKS. For example, "Action": [ "emr-containers:StartJobRun"]. For more information, see Policy actions for Amazon EMR on EKS.   It is the prefix used in Amazon EMR on EKS service endpoints. For example, emr-containers.us-east-2.amazonaws.com. For more information, see Amazon EMR on EKSService Endpoints',
      loadSpec: "aws/emr-containers",
    },
    {
      name: "emr-serverless",
      description:
        'Amazon EMR Serverless is a new deployment option for Amazon EMR. Amazon EMR Serverless provides a serverless runtime environment that simplifies running analytics applications using the latest open source frameworks such as Apache Spark and Apache Hive. With Amazon EMR Serverless, you don\u2019t have to configure, optimize, secure, or operate clusters to run applications with these frameworks. The API reference to Amazon EMR Serverless is emr-serverless. The emr-serverless prefix is used in the following scenarios:    It is the prefix in the CLI commands for Amazon EMR Serverless. For example, aws emr-serverless start-job-run.   It is the prefix before IAM policy actions for Amazon EMR Serverless. For example, "Action": ["emr-serverless:StartJobRun"]. For more information, see Policy actions for Amazon EMR Serverless.   It is the prefix used in Amazon EMR Serverless service endpoints. For example, emr-serverless.us-east-2.amazonaws.com',
      loadSpec: "aws/emr-serverless",
    },
    {
      name: "entityresolution",
      description:
        "Welcome to the Entity Resolution API Reference. Entity Resolution is an Amazon Web Services service that provides pre-configured entity resolution capabilities that enable developers and analysts at advertising and marketing companies to build an accurate and complete view of their consumers.  With Entity Resolution, you can match source records containing consumer identifiers, such as name, email address, and phone number. This is true even when these records have incomplete or conflicting identifiers. For example, Entity Resolution can effectively match a source record from a customer relationship management (CRM) system with a source record from a marketing system containing campaign information. To learn more about Entity Resolution concepts, procedures, and best practices, see the Entity Resolution User Guide",
      loadSpec: "aws/entityresolution",
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
        "Amazon EventBridge helps you to respond to state changes in your Amazon Web Services resources. When your resources change state, they automatically send events to an event stream. You can create rules that match selected events in the stream and route them to targets to take action. You can also use rules to take action on a predetermined schedule. For example, you can configure rules to:   Automatically invoke an Lambda function to update DNS entries when an event notifies you that Amazon EC2 instance enters the running state.   Direct specific API records from CloudTrail to an Amazon Kinesis data stream for detailed analysis of potential security or availability risks.   Periodically invoke a built-in target to create a snapshot of an Amazon EBS volume.   For more information about the features of Amazon EventBridge, see the Amazon EventBridge User Guide",
      loadSpec: "aws/events",
    },
    {
      name: "evidently",
      description:
        "You can use Amazon CloudWatch Evidently to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to your users. This helps you reduce risk and identify unintended consequences before you fully launch the feature. You can also conduct A/B experiments to make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it using statistical methods. It also provides clear recommendations about which variations perform better. You can test both user-facing features and backend features",
      loadSpec: "aws/evidently",
    },
    {
      name: "finspace",
      description:
        "The FinSpace management service provides the APIs for managing FinSpace environments",
      loadSpec: "aws/finspace",
    },
    {
      name: "finspace-data",
      description: "The FinSpace APIs let you take actions inside the FinSpace",
      loadSpec: "aws/finspace-data",
    },
    {
      name: "firehose",
      description:
        "Amazon Data Firehose  Amazon Data Firehose was previously known as Amazon Kinesis Data Firehose.  Amazon Data Firehose is a fully managed service that delivers real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon OpenSearch Service, Amazon Redshift, Splunk, and various other supported destinations",
      loadSpec: "aws/firehose",
    },
    {
      name: "fis",
      description:
        "Amazon Web Services Fault Injection Service is a managed service that enables you to perform fault injection experiments on your Amazon Web Services workloads. For more information, see the Fault Injection Service User Guide",
      loadSpec: "aws/fis",
    },
    {
      name: "fms",
      description:
        "This is the Firewall Manager API Reference. This guide is for developers who need detailed information about the Firewall Manager API actions, data types, and errors. For detailed information about Firewall Manager features, see the Firewall Manager Developer Guide. Some API actions require explicit resource permissions. For information, see the developer guide topic Service roles for Firewall Manager",
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
        "This is the Amazon Fraud Detector API Reference. This guide is for developers who need detailed information about Amazon Fraud Detector API actions, data types, and errors. For more information about Amazon Fraud Detector features, see the Amazon Fraud Detector User Guide. We provide the Query API as well as AWS software development kits (SDK) for Amazon Fraud Detector in Java and Python programming languages. The Amazon Fraud Detector Query API provides HTTPS requests that use the HTTP verb GET or POST and a Query parameter Action. AWS SDK provides libraries, sample code, tutorials, and other resources for software developers who prefer to build applications using language-specific APIs instead of submitting a request over HTTP or HTTPS. These libraries provide basic functions that automatically take care of tasks such as cryptographically signing your requests, retrying requests, and handling error responses, so that it is easier for you to get started. For more information about the AWS SDKs, go to Tools to build on AWS page, scroll down to the SDK section, and choose plus (+) sign to expand the section",
      loadSpec: "aws/frauddetector",
    },
    {
      name: "freetier",
      description:
        "You can use the Amazon Web Services Free Tier API to query programmatically your Free Tier usage data. Free Tier tracks your monthly usage data for all free tier offers that are associated with your Amazon Web Services account. You can use the Free Tier API to filter and show only the data that you want. Service endpoint The Free Tier API provides the following endpoint:   https://freetier.us-east-1.api.aws   For more information, see Using the Amazon Web Services Free Tier in the Billing User Guide",
      loadSpec: "aws/freetier",
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
        "Amazon GameLift provides solutions for hosting session-based multiplayer game servers in the cloud, including tools for deploying, operating, and scaling game servers. Built on Amazon Web Services global computing infrastructure, GameLift helps you deliver high-performance, high-reliability, low-cost game servers while dynamically scaling your resource usage to meet player demand.   About Amazon GameLift solutions  Get more information on these Amazon GameLift solutions in the Amazon GameLift Developer Guide.   Amazon GameLift managed hosting -- Amazon GameLift offers a fully managed service to set up and maintain computing machines for hosting, manage game session and player session life cycle, and handle security, storage, and performance tracking. You can use automatic scaling tools to balance player demand and hosting costs, configure your game session management to minimize player latency, and add FlexMatch for matchmaking.   Managed hosting with Realtime Servers -- With Amazon GameLift Realtime Servers, you can quickly configure and set up ready-to-go game servers for your game. Realtime Servers provides a game server framework with core Amazon GameLift infrastructure already built in. Then use the full range of Amazon GameLift managed hosting features, including FlexMatch, for your game.   Amazon GameLift FleetIQ -- Use Amazon GameLift FleetIQ as a standalone service while hosting your games using EC2 instances and Auto Scaling groups. Amazon GameLift FleetIQ provides optimizations for game hosting, including boosting the viability of low-cost Spot Instances gaming. For a complete solution, pair the Amazon GameLift FleetIQ and FlexMatch standalone services.   Amazon GameLift FlexMatch -- Add matchmaking to your game hosting solution. FlexMatch is a customizable matchmaking service for multiplayer games. Use FlexMatch as integrated with Amazon GameLift managed hosting or incorporate FlexMatch as a standalone service into your own hosting solution.    About this API Reference  This reference guide describes the low-level service API for Amazon GameLift. With each topic in this guide, you can find links to language-specific SDK guides and the Amazon Web Services CLI reference. Useful links:    Amazon GameLift API operations listed by tasks      Amazon GameLift tools and resources",
      loadSpec: "aws/gamelift",
    },
    {
      name: "geo-maps",
      description:
        "Integrate high-quality base map data into your applications using MapLibre. Capabilities include:    Access to comprehensive base map data, allowing you to tailor the map display to your specific needs.   Multiple pre-designed map styles suited for various application types, such as navigation, logistics, or data visualization.   Generation of static map images for scenarios where interactive maps aren't suitable, such as:   Embedding in emails or documents   Displaying in low-bandwidth environments   Creating printable maps   Enhancing application performance by reducing client-side rendering",
      loadSpec: "aws/geo-maps",
    },
    {
      name: "geo-places",
      description:
        "The Places API enables powerful location search and geocoding capabilities for your applications, offering global coverage with rich, detailed information. Key features include:    Forward and reverse geocoding for addresses and coordinates   Comprehensive place searches with detailed information, including:   Business names and addresses   Contact information   Hours of operation   POI (Points of Interest) categories   Food types for restaurants   Chain affiliation for relevant businesses     Global data coverage with a wide range of POI categories   Regular data updates to ensure accuracy and relevance",
      loadSpec: "aws/geo-places",
    },
    {
      name: "geo-routes",
      description:
        "With the Amazon Location Routes API you can calculate routes and estimate travel time based on up-to-date road network and live traffic information. Calculate optimal travel routes and estimate travel times using up-to-date road network and traffic data. Key features include:   Point-to-point routing with estimated travel time, distance, and turn-by-turn directions   Multi-point route optimization to minimize travel time or distance   Route matrices for efficient multi-destination planning   Isoline calculations to determine reachable areas within specified time or distance thresholds   Map-matching to align GPS traces with the road network",
      loadSpec: "aws/geo-routes",
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
        "Global Accelerator This is the Global Accelerator API Reference. This guide is for developers who need detailed information about Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the Global Accelerator Developer Guide. Global Accelerator is a service in which you create accelerators to improve the performance of your applications for local and global users. Depending on the type of accelerator you choose, you can gain additional benefits.    By using a standard accelerator, you can improve availability of your internet applications that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic to optimal endpoints over the Amazon Web Services global network.    For other scenarios, you might choose a custom routing accelerator. With a custom routing accelerator, you can use application logic to directly map one or more users to a specific endpoint among many endpoints.    Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify --region us-west-2 on Amazon Web Services CLI commands.  By default, Global Accelerator provides you with static IP addresses that you associate with your accelerator. The static IP addresses are anycast from the Amazon Web Services edge network. For IPv4, Global Accelerator provides two static IPv4 addresses. For dual-stack, Global Accelerator provides a total of four addresses: two static IPv4 addresses and two static IPv6 addresses. With a standard accelerator for IPv4, instead of using the addresses that Global Accelerator provides, you can configure these entry points to be IPv4 addresses from your own IP address ranges that you bring to Global Accelerator (BYOIP).  For a standard accelerator, they distribute incoming application traffic across multiple endpoint resources in multiple Amazon Web Services Regions , which increases the availability of your applications. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses that are located in one Amazon Web Services Region or multiple Amazon Web Services Regions. For custom routing accelerators, you map traffic that arrives to the static IP addresses to specific Amazon EC2 servers in endpoints that are virtual private cloud (VPC) subnets.  The static IP addresses remain assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you delete an accelerator, you lose the static IP addresses that are assigned to it, so you can no longer route traffic by using them. You can use IAM policies like tag-based permissions with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see Tag-based policies.  For standard accelerators, Global Accelerator uses the Amazon Web Services global network to route traffic to the optimal regional endpoint based on health, client location, and policies that you configure. The service reacts instantly to changes in health or configuration to ensure that internet traffic from clients is always directed to healthy endpoints. For more information about understanding and using Global Accelerator, see the Global Accelerator Developer Guide",
      loadSpec: "aws/globalaccelerator",
    },
    {
      name: "glue",
      description: "Glue Defines the public endpoint for the Glue service",
      loadSpec: "aws/glue",
    },
    {
      name: "grafana",
      description:
        "Amazon Managed Grafana is a fully managed and secure data visualization service that you can use to instantly query, correlate, and visualize operational metrics, logs, and traces from multiple sources. Amazon Managed Grafana makes it easy to deploy, operate, and scale Grafana, a widely deployed data visualization tool that is popular for its extensible data support. With Amazon Managed Grafana, you create logically isolated Grafana servers called workspaces. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces without having to build, package, or deploy any hardware to run Grafana servers",
      loadSpec: "aws/grafana",
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
        "IoT Greengrass brings local compute, messaging, data management, sync, and ML inference capabilities to edge devices. This enables devices to collect and analyze data closer to the source of information, react autonomously to local events, and communicate securely with each other on local networks. Local devices can also communicate securely with Amazon Web Services IoT Core and export IoT data to the Amazon Web Services Cloud. IoT Greengrass developers can use Lambda functions and components to create and deploy applications to fleets of edge devices for local operation. IoT Greengrass Version 2 provides a new major version of the IoT Greengrass Core software, new APIs, and a new console. Use this API reference to learn how to use the IoT Greengrass V2 API operations to manage components, manage deployments, and core devices. For more information, see What is IoT Greengrass? in the IoT Greengrass V2 Developer Guide",
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
        "Amazon GuardDuty is a continuous security monitoring service that analyzes and processes the following foundational data sources - VPC flow logs, Amazon Web Services CloudTrail management event logs, CloudTrail S3 data event logs, EKS audit logs, DNS logs, Amazon EBS volume data, runtime activity belonging to container workloads, such as Amazon EKS, Amazon ECS (including Amazon Web Services Fargate), and Amazon EC2 instances. It uses threat intelligence feeds, such as lists of malicious IPs and domains, and machine learning to identify unexpected, potentially unauthorized, and malicious activity within your Amazon Web Services environment. This can include issues like escalations of privileges, uses of exposed credentials, or communication with malicious IPs, domains, or presence of malware on your Amazon EC2 instances and container workloads. For example, GuardDuty can detect compromised EC2 instances and container workloads serving malware, or mining bitcoin.  GuardDuty also monitors Amazon Web Services account access behavior for signs of compromise, such as unauthorized infrastructure deployments like EC2 instances deployed in a Region that has never been used, or unusual API calls like a password policy change to reduce password strength.  GuardDuty informs you about the status of your Amazon Web Services environment by producing security findings that you can view in the GuardDuty console or through Amazon EventBridge. For more information, see the  Amazon GuardDuty User Guide",
      loadSpec: "aws/guardduty",
    },
    {
      name: "health",
      description:
        "Health The Health API provides access to the Health information that appears in the Health Dashboard. You can use the API operations to get information about events that might affect your Amazon Web Services services and resources. You must have a Business, Enterprise On-Ramp, or Enterprise Support plan from Amazon Web Services Support to use the Health API. If you call the Health API from an Amazon Web Services account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, you receive a SubscriptionRequiredException error. For API access, you need an access key ID and a secret access key. Use temporary credentials instead of long-term access keys when possible. Temporary credentials include an access key ID, a secret access key, and a security token that indicates when the credentials expire. For more information, see Best practices for managing Amazon Web Services access keys in the Amazon Web Services General Reference. You can use the Health endpoint health.us-east-1.amazonaws.com (HTTPS) to call the Health API operations. Health supports a multi-Region application architecture and has two regional endpoints in an active-passive configuration. You can use the high availability endpoint example to determine which Amazon Web Services Region is active, so that you can get the latest information from the API. For more information, see Accessing the Health API in the Health User Guide. For authentication of requests, Health uses the Signature Version 4 Signing Process. If your Amazon Web Services account is part of Organizations, you can use the Health organizational view feature. This feature provides a centralized view of Health events across all accounts in your organization. You can aggregate Health events in real time to identify accounts in your organization that are affected by an operational event or get notified of security vulnerabilities. Use the organizational view API operations to enable this feature and return event information. For more information, see Aggregating Health events in the Health User Guide.  When you use the Health API operations to return Health events, see the following recommendations:   Use the eventScopeCode parameter to specify whether to return Health events that are public or account-specific.   Use pagination to view all events from the response. For example, if you call the DescribeEventsForOrganization operation to get all events in your organization, you might receive several page results. Specify the nextToken in the next request to return more results",
      loadSpec: "aws/health",
    },
    {
      name: "healthlake",
      description:
        "AWS HealthLake is a HIPAA eligibile service that allows customers to store, transform, query, and analyze their FHIR-formatted data in a consistent fashion in the cloud",
      loadSpec: "aws/healthlake",
    },
    {
      name: "iam",
      description:
        "Identity and Access Management Identity and Access Management (IAM) is a web service for securely controlling access to Amazon Web Services services. With IAM, you can centrally manage users, security credentials such as access keys, and permissions that control which Amazon Web Services resources users and applications can access. For more information about IAM, see Identity and Access Management (IAM) and the Identity and Access Management User Guide",
      loadSpec: "aws/iam",
    },
    {
      name: "identitystore",
      description:
        "The Identity Store service used by IAM Identity Center provides a single place to retrieve all of your identities (users and groups). For more information, see the IAM Identity Center User Guide. This reference guide describes the identity store operations that you can call programmatically and includes detailed information about data types and errors.  IAM Identity Center uses the sso and identitystore API namespaces",
      loadSpec: "aws/identitystore",
    },
    {
      name: "imagebuilder",
      description:
        'EC2 Image Builder is a fully managed Amazon Web Services service that makes it easier to automate the creation, management, and deployment of customized, secure, and up-to-date "golden" server images that are pre-installed and pre-configured with software and settings to meet specific IT standards',
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
      name: "inspector-scan",
      description:
        "Amazon Inspector Scan is a vulnerability discovery service that scans a provided Software Bill of Materials (SBOM) for security vulnerabilities",
      loadSpec: "aws/inspector-scan",
    },
    {
      name: "inspector2",
      description:
        "Amazon Inspector is a vulnerability discovery service that automates continuous scanning for security vulnerabilities within your Amazon EC2, Amazon ECR, and Amazon Web Services Lambda environments",
      loadSpec: "aws/inspector2",
    },
    {
      name: "internetmonitor",
      description:
        "Amazon CloudWatch Internet Monitor provides visibility into how internet issues impact the performance and availability between your applications hosted on Amazon Web Services and your end users. It can reduce the time it takes for you to diagnose internet issues from days to minutes. Internet Monitor uses the connectivity data that Amazon Web Services captures from its global networking footprint to calculate a baseline of performance and availability for internet traffic. This is the same data that Amazon Web Services uses to monitor internet uptime and availability. With those measurements as a baseline, Internet Monitor raises awareness for you when there are significant problems for your end users in the different geographic locations where your application runs. Internet Monitor publishes internet measurements to CloudWatch Logs and CloudWatch Metrics, to easily support using CloudWatch tools with health information for geographies and networks specific to your application. Internet Monitor sends health events to Amazon EventBridge so that you can set up notifications. If an issue is caused by the Amazon Web Services network, you also automatically receive an Amazon Web Services Health Dashboard notification with the steps that Amazon Web Services is taking to mitigate the problem. To use Internet Monitor, you create a monitor and associate your application's resources with it - VPCs, NLBs, CloudFront distributions, or WorkSpaces directories - so Internet Monitor can determine where your application's internet traffic is. Internet Monitor then provides internet measurements from Amazon Web Services that are specific to the locations and ASNs (typically, internet service providers or ISPs) that communicate with your application. For more information, see Using Amazon CloudWatch Internet Monitor in the Amazon CloudWatch User Guide",
      loadSpec: "aws/internetmonitor",
    },
    {
      name: "invoicing",
      description:
        "Amazon Web Services Invoice Configuration  You can use Amazon Web Services Invoice Configuration APIs to programmatically create, update, delete, get, and list invoice units. You can also programmatically fetch the information of the invoice receiver. For example, business legal name, address, and invoicing contacts.  You can use Amazon Web Services Invoice Configuration to receive separate Amazon Web Services invoices based your organizational needs. By using Amazon Web Services Invoice Configuration, you can configure invoice units that are groups of Amazon Web Services accounts that represent your business entities, and receive separate invoices for each business entity. You can also assign a unique member or payer account as the invoice receiver for each invoice unit. As you create new accounts within your Organizations using Amazon Web Services Invoice Configuration APIs, you can automate the creation of new invoice units and subsequently automate the addition of new accounts to your invoice units. Service endpoint You can use the following endpoints for Amazon Web Services Invoice Configuration:    https://invoicing.us-east-1.api.aws",
      loadSpec: "aws/invoicing",
    },
    {
      name: "iot",
      description:
        "IoT IoT provides secure, bi-directional communication between Internet-connected devices (such as sensors, actuators, embedded devices, or smart appliances) and the Amazon Web Services cloud. You can discover your custom IoT-Data endpoint to communicate with, configure rules for data processing and integration with other services, organize resources associated with each device (Registry), configure logging, and create and manage policies and credentials to authenticate devices. The service endpoints that expose this API are listed in Amazon Web Services IoT Core Endpoints and Quotas. You must use the endpoint for the region that has the resources you want to access. The service name used by Amazon Web Services Signature Version 4 to sign the request is: execute-api. For more information about how IoT works, see the Developer Guide. For information about how to use the credentials provider for IoT, see Authorizing Direct Calls to Amazon Web Services Services",
      loadSpec: "aws/iot",
    },
    {
      name: "iot-data",
      description:
        "IoT data IoT data enables secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the Amazon Web Services cloud. It implements a broker for applications and things to publish messages over HTTP (Publish) and retrieve, update, and delete shadows. A shadow is a persistent representation of your things and their state in the Amazon Web Services cloud. Find the endpoint address for actions in IoT data by running this CLI command:  aws iot describe-endpoint --endpoint-type iot:Data-ATS  The service name used by Amazon Web ServicesSignature Version 4 to sign requests is: iotdevicegateway",
      loadSpec: "aws/iot-data",
    },
    {
      name: "iot-jobs-data",
      description:
        "IoT Jobs is a service that allows you to define a set of jobs \u2014 remote operations that are sent to and executed on one or more devices connected to Amazon Web Services IoT Core. For example, you can define a job that instructs a set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform remote troubleshooting operations. Find the endpoint address for actions in the IoT jobs data plane by running this CLI command:  aws iot describe-endpoint --endpoint-type iot:Jobs  The service name used by Amazon Web Services Signature Version 4 to sign requests is: iot-jobs-data.  To create a job, you make a job document which is a description of the remote operations to be performed, and you specify a list of targets that should perform the operations. The targets can be individual things, thing groups or both.  IoT Jobs sends a message to inform the targets that a job is available. The target starts the execution of the job by downloading the job document, performing the operations it specifies, and reporting its progress to Amazon Web Services IoT Core. The Jobs service provides commands to track the progress of a job on a specific target and for all the targets of the job",
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
        "IoT Analytics allows you to collect large amounts of device data, process messages, and store them. You can then query the data and run sophisticated analytics on it. IoT Analytics enables advanced data exploration through integration with Jupyter Notebooks and data visualization through integration with Amazon QuickSight. Traditional analytics and business intelligence tools are designed to process structured data. IoT data often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result the data from these devices can have significant gaps, corrupted messages, and false readings that must be cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data from external sources.  IoT Analytics automates the steps required to analyze data from IoT devices. IoT Analytics filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You can set up the service to collect only the data you need from your devices, apply mathematical transforms to process the data, and enrich the data with device-specific metadata such as device type and location before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine, or perform more complex analytics and machine learning inference. IoT Analytics includes pre-built models for common IoT use cases so you can answer questions like which devices are about to fail or which customers are at risk of abandoning their wearable devices",
      loadSpec: "aws/iotanalytics",
    },
    {
      name: "iotdeviceadvisor",
      description:
        "Amazon Web Services IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT devices during device software development. Device Advisor provides pre-built tests that you can use to validate IoT devices for reliable and secure connectivity with Amazon Web Services IoT Core before deploying devices to production. By using Device Advisor, you can confirm that your devices can connect to Amazon Web Services IoT Core, follow security best practices and, if applicable, receive software updates from IoT Device Management. You can also download signed qualification reports to submit to the Amazon Web Services Partner Network to get your device qualified for the Amazon Web Services Partner Device Catalog without the need to send your device in and wait for it to be tested",
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
        "IoT Events monitors your equipment or device fleets for failures or changes in operation, and triggers actions when such events occur. You can use IoT Events Data API commands to send inputs to detectors, list detectors, and view or update a detector's status.  For more information, see What is IoT Events? in the IoT Events Developer Guide",
      loadSpec: "aws/iotevents-data",
    },
    {
      name: "iotfleethub",
      description:
        "With Fleet Hub for IoT Device Management you can build stand-alone web applications for monitoring the health of your device fleets",
      loadSpec: "aws/iotfleethub",
    },
    {
      name: "iotfleetwise",
      description:
        "Amazon Web Services IoT FleetWise is a fully managed service that you can use to collect, model, and transfer vehicle data to the Amazon Web Services cloud at scale. With Amazon Web Services IoT FleetWise, you can standardize all of your vehicle data models, independent of the in-vehicle communication architecture, and define data collection rules to transfer only high-value data to the cloud.  For more information, see What is Amazon Web Services IoT FleetWise? in the Amazon Web Services IoT FleetWise Developer Guide.  Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide",
      loadSpec: "aws/iotfleetwise",
    },
    {
      name: "iotsecuretunneling",
      description:
        "IoT Secure Tunneling IoT Secure Tunneling creates remote connections to devices deployed in the field. For more information about how IoT Secure Tunneling works, see IoT Secure Tunneling",
      loadSpec: "aws/iotsecuretunneling",
    },
    {
      name: "iotsitewise",
      description:
        "Welcome to the IoT SiteWise API Reference. IoT SiteWise is an Amazon Web Services service that connects Industrial Internet of Things (IIoT) devices to the power of the Amazon Web Services Cloud. For more information, see the IoT SiteWise User Guide. For information about IoT SiteWise quotas, see Quotas in the IoT SiteWise User Guide",
      loadSpec: "aws/iotsitewise",
    },
    {
      name: "iotthingsgraph",
      description:
        "AWS IoT Things Graph AWS IoT Things Graph provides an integrated set of tools that enable developers to connect devices and services that use different standards, such as units of measure and communication protocols. AWS IoT Things Graph makes it possible to build IoT applications with little to no code by connecting devices and services and defining how they interact at an abstract level. For more information about how AWS IoT Things Graph works, see the User Guide. The AWS IoT Things Graph service is discontinued",
      loadSpec: "aws/iotthingsgraph",
    },
    {
      name: "iottwinmaker",
      description:
        "IoT TwinMaker is a service with which you can build operational digital twins of physical systems. IoT TwinMaker overlays measurements and analysis from real-world sensors, cameras, and enterprise applications so you can create data visualizations to monitor your physical factory, building, or industrial plant. You can use this real-world data to monitor operations and diagnose and repair errors",
      loadSpec: "aws/iottwinmaker",
    },
    {
      name: "iotwireless",
      description:
        "AWS IoT Wireless provides bi-directional communication between internet-connected wireless devices and the AWS Cloud. To onboard both LoRaWAN and Sidewalk devices to AWS IoT, use the IoT Wireless API. These wireless devices use the Low Power Wide Area Networking (LPWAN) communication protocol to communicate with AWS IoT. Using the API, you can perform create, read, update, and delete operations for your wireless devices, gateways, destinations, and profiles. After onboarding your devices, you can use the API operations to set log levels and monitor your devices with CloudWatch. You can also use the API operations to create multicast groups and schedule a multicast session for sending a downlink message to devices in the group. By using Firmware Updates Over-The-Air (FUOTA) API operations, you can create a FUOTA task and schedule a session to update the firmware of individual devices or an entire group of devices in a multicast group. To connect to the AWS IoT Wireless Service, use the Service endpoints as described in IoT Wireless Service endpoints in the AWS General Reference",
      loadSpec: "aws/iotwireless",
    },
    {
      name: "ivs",
      description:
        'Introduction  The Amazon Interactive Video Service (IVS) API is REST compatible, using a standard HTTP API and an Amazon Web Services EventBridge event stream for responses. JSON is used for both requests and responses, including errors. The API is an Amazon Web Services regional service. For a list of supported regions and Amazon IVS HTTPS service endpoints, see the Amazon IVS page in the Amazon Web Services General Reference.   All API request parameters and URLs are case sensitive.    For a summary of notable documentation changes in each release, see  Document History.  Allowed Header Values      Accept:  application/json     Accept-Encoding:  gzip, deflate     Content-Type: application/json    Key Concepts     Channel \u2014 Stores configuration data related to your live stream. You first create a channel and then use the channel\u2019s stream key to start your live stream.    Stream key \u2014 An identifier assigned by Amazon IVS when you create a channel, which is then used to authorize streaming.  Treat the stream key like a secret, since it allows anyone to stream to the channel.      Playback key pair \u2014 Video playback may be restricted using playback-authorization tokens, which use public-key encryption. A playback key pair is the public-private pair of keys used to sign and validate the playback-authorization token.    Recording configuration \u2014 Stores configuration related to recording a live stream and where to store the recorded content. Multiple channels can reference the same recording configuration.    Playback restriction policy \u2014 Restricts playback by countries and/or origin sites.   For more information about your IVS live stream, also see Getting Started with IVS Low-Latency Streaming.  Tagging  A tag is a metadata label that you assign to an Amazon Web Services resource. A tag comprises a key and a value, both set by you. For example, you might set a tag as topic:nature to label a particular video category. See Best practices and strategies in Tagging Amazon Web Services Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there. Tags can help you identify and organize your Amazon Web Services resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see  Access Tags).  The Amazon IVS API has these tag-related operations: TagResource, UntagResource, and ListTagsForResource. The following resources support tagging: Channels, Stream Keys, Playback Key Pairs, and Recording Configurations. At most 50 tags can be applied to a resource.   Authentication versus Authorization  Note the differences between these concepts:    Authentication is about verifying identity. You need to be authenticated to sign Amazon IVS API requests.    Authorization is about granting permissions. Your IAM roles need to have permissions for Amazon IVS API requests. In addition, authorization is needed to view Amazon IVS private channels. (Private channels are channels that are enabled for "playback authorization.")    Authentication  All Amazon IVS API requests must be authenticated with a signature. The Amazon Web Services Command-Line Interface (CLI) and Amazon IVS Player SDKs take care of signing the underlying API calls for you. However, if your application calls the Amazon IVS API directly, it\u2019s your responsibility to sign the requests. You generate a signature using valid Amazon Web Services credentials that have permission to perform the requested action. For example, you must sign PutMetadata requests with a signature generated from a user account that has the ivs:PutMetadata permission. For more information:   Authentication and generating signatures \u2014 See Authenticating Requests (Amazon Web Services Signature Version 4) in the Amazon Web Services General Reference.   Managing Amazon IVS permissions \u2014 See Identity and Access Management on the Security page of the Amazon IVS User Guide.    Amazon Resource Names (ARNs)  ARNs uniquely identify AWS resources. An ARN is required when you need to specify a resource unambiguously across all of AWS, such as in IAM policies and API calls. For more information, see Amazon Resource Names in the AWS General Reference',
      loadSpec: "aws/ivs",
    },
    {
      name: "ivs-realtime",
      description:
        'The Amazon Interactive Video Service (IVS) real-time API is REST compatible, using a standard HTTP API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses, including errors.   Key Concepts     Stage \u2014 A virtual space where participants can exchange video in real time.    Participant token \u2014 A token that authenticates a participant when they join a stage.    Participant object \u2014 Represents participants (people) in the stage and contains information about them. When a token is created, it includes a participant ID; when a participant uses that token to join a stage, the participant is associated with that participant ID. There is a 1:1 mapping between participant tokens and participants.   For server-side composition:    Composition process \u2014 Composites participants of a stage into a single video and forwards it to a set of outputs (e.g., IVS channels). Composition operations support this process.    Composition \u2014 Controls the look of the outputs, including how participants are positioned in the video.   For more information about your IVS live stream, also see Getting Started with Amazon IVS Real-Time Streaming.  Tagging  A tag is a metadata label that you assign to an AWS resource. A tag comprises a key and a value, both set by you. For example, you might set a tag as topic:nature to label a particular video category. See Best practices and strategies in Tagging AWS Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS stages has no service-specific constraints beyond what is documented there. Tags can help you identify and organize your AWS resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see Access Tags). The Amazon IVS real-time API has these tag-related operations: TagResource, UntagResource, and ListTagsForResource. The following resource supports tagging: Stage. At most 50 tags can be applied to a resource',
      loadSpec: "aws/ivs-realtime",
    },
    {
      name: "ivschat",
      description:
        'Introduction  The Amazon IVS Chat control-plane API enables you to create and manage Amazon IVS Chat resources. You also need to integrate with the  Amazon IVS Chat Messaging API, to enable users to interact with chat rooms in real time. The API is an AWS regional service. For a list of supported regions and Amazon IVS Chat HTTPS service endpoints, see the Amazon IVS Chat information on the Amazon IVS page in the AWS General Reference.  This document describes HTTP operations. There is a separate messaging API for managing Chat resources; see the  Amazon IVS Chat Messaging API Reference.  Notes on terminology:    You create service applications using the Amazon IVS Chat API. We refer to these as applications.   You create front-end client applications (browser and Android/iOS apps) using the Amazon IVS Chat Messaging API. We refer to these as clients.     Resources  The following resources are part of Amazon IVS Chat:    LoggingConfiguration \u2014 A configuration that allows customers to store and record sent messages in a chat room. See the Logging Configuration endpoints for more information.    Room \u2014 The central Amazon IVS Chat resource through which clients connect to and exchange chat messages. See the Room endpoints for more information.    Tagging  A tag is a metadata label that you assign to an AWS resource. A tag comprises a key and a value, both set by you. For example, you might set a tag as topic:nature to label a particular video category. See Best practices and strategies in Tagging Amazon Web Services Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no service-specific constraints beyond what is documented there. Tags can help you identify and organize your AWS resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see Access Tags). The Amazon IVS Chat API has these tag-related operations: TagResource, UntagResource, and ListTagsForResource. The following resource supports tagging: Room. At most 50 tags can be applied to a resource.  API Access Security  Your Amazon IVS Chat applications (service applications and clients) must be authenticated and authorized to access Amazon IVS Chat resources. Note the differences between these concepts:    Authentication is about verifying identity. Requests to the Amazon IVS Chat API must be signed to verify your identity.    Authorization is about granting permissions. Your IAM roles need to have permissions for Amazon IVS Chat API requests.   Users (viewers) connect to a room using secure access tokens that you create using the CreateChatToken operation through the AWS SDK. You call CreateChatToken for every user\u2019s chat session, passing identity and authorization information about the user.  Signing API Requests  HTTP API requests must be signed with an AWS SigV4 signature using your AWS security credentials. The AWS Command Line Interface (CLI) and the AWS SDKs take care of signing the underlying API calls for you. However, if your application calls the Amazon IVS Chat HTTP API directly, it\u2019s your responsibility to sign the requests. You generate a signature using valid AWS credentials for an IAM role that has permission to perform the requested action. For example, DeleteMessage requests must be made using an IAM role that has the ivschat:DeleteMessage permission. For more information:   Authentication and generating signatures \u2014 See Authenticating Requests (Amazon Web Services Signature Version 4) in the Amazon Web Services General Reference.   Managing Amazon IVS permissions \u2014 See Identity and Access Management on the Security page of the Amazon IVS User Guide.    Amazon Resource Names (ARNs)  ARNs uniquely identify AWS resources. An ARN is required when you need to specify a resource unambiguously across all of AWS, such as in IAM policies and API calls. For more information, see Amazon Resource Names in the AWS General Reference',
      loadSpec: "aws/ivschat",
    },
    {
      name: "kafka",
      description: "The operations for managing an Amazon MSK cluster",
      loadSpec: "aws/kafka",
    },
    {
      name: "kafkaconnect",
      description: null,
      loadSpec: "aws/kafkaconnect",
    },
    {
      name: "kendra",
      description:
        "Amazon Kendra is a service for indexing large document sets",
      loadSpec: "aws/kendra",
    },
    {
      name: "kendra-ranking",
      description:
        "Amazon Kendra Intelligent Ranking uses Amazon Kendra semantic search capabilities to intelligently re-rank a search service's results",
      loadSpec: "aws/kendra-ranking",
    },
    {
      name: "keyspaces",
      description:
        "Amazon Keyspaces (for Apache Cassandra) is a scalable, highly available, and managed Apache Cassandra-compatible database service. Amazon Keyspaces makes it easy to migrate, run, and scale Cassandra workloads in the Amazon Web Services Cloud. With just a few clicks on the Amazon Web Services Management Console or a few lines of code, you can create keyspaces and tables in Amazon Keyspaces, without deploying any infrastructure or installing software.  In addition to supporting Cassandra Query Language (CQL) requests via open-source Cassandra drivers, Amazon Keyspaces supports data definition language (DDL) operations to manage keyspaces and tables using the Amazon Web Services SDK and CLI, as well as infrastructure as code (IaC) services and tools such as CloudFormation and Terraform. This API reference describes the supported DDL operations in detail. For the list of all supported CQL APIs, see Supported Cassandra APIs, operations, and data types in Amazon Keyspaces in the Amazon Keyspaces Developer Guide. To learn how Amazon Keyspaces API actions are recorded with CloudTrail, see Amazon Keyspaces information in CloudTrail in the Amazon Keyspaces Developer Guide. For more information about Amazon Web Services APIs, for example how to implement retry logic or how to sign Amazon Web Services API requests, see Amazon Web Services APIs in the General Reference",
      loadSpec: "aws/keyspaces",
    },
    {
      name: "kinesis",
      description:
        "Amazon Kinesis Data Streams Service API Reference Amazon Kinesis Data Streams is a managed service that scales elastically for real-time processing of streaming big data",
      loadSpec: "aws/kinesis",
    },
    {
      name: "kinesis-video-archived-media",
      description: null,
      loadSpec: "aws/kinesis-video-archived-media",
    },
    {
      name: "kinesis-video-media",
      description: null,
      loadSpec: "aws/kinesis-video-media",
    },
    {
      name: "kinesis-video-signaling",
      description:
        "Kinesis Video Streams Signaling Service is a intermediate service that establishes a communication channel for discovering peers, transmitting offers and answers in order to establish peer-to-peer connection in webRTC technology",
      loadSpec: "aws/kinesis-video-signaling",
    },
    {
      name: "kinesis-video-webrtc-storage",
      description: "Webrtc",
      loadSpec: "aws/kinesis-video-webrtc-storage",
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
        "Amazon Managed Service for Apache Flink was previously known as Amazon Kinesis Data Analytics for Apache Flink.  Amazon Managed Service for Apache Flink is a fully managed service that you can use to process and analyze streaming data using Java, Python, SQL, or Scala. The service enables you to quickly author and run Java, SQL, or Scala code against streaming sources to perform time series analytics, feed real-time dashboards, and create real-time metrics",
      loadSpec: "aws/kinesisanalyticsv2",
    },
    {
      name: "kinesisvideo",
      description: null,
      loadSpec: "aws/kinesisvideo",
    },
    {
      name: "kms",
      description:
        "Key Management Service Key Management Service (KMS) is an encryption and key management web service. This guide describes the KMS operations that you can call programmatically. For general information about KMS, see the  Key Management Service Developer Guide .  KMS has replaced the term customer master key (CMK) with KMS key and KMS key. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term. Amazon Web Services provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, macOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to KMS and other Amazon Web Services services. For example, the SDKs take care of tasks such as signing requests (see below), managing errors, and retrying requests automatically. For more information about the Amazon Web Services SDKs, including how to download and install them, see Tools for Amazon Web Services.  We recommend that you use the Amazon Web Services SDKs to make programmatic API calls to KMS. If you need to use FIPS 140-2 validated cryptographic modules when communicating with Amazon Web Services, use the FIPS endpoint in your preferred Amazon Web Services Region. For more information about the available FIPS endpoints, see Service endpoints in the Key Management Service topic of the Amazon Web Services General Reference. All KMS API calls must be signed and be transmitted using Transport Layer Security (TLS). KMS recommends you always use the latest supported TLS version. Clients must also support cipher suites with Perfect Forward Secrecy (PFS) such as Ephemeral Diffie-Hellman (DHE) or Elliptic Curve Ephemeral Diffie-Hellman (ECDHE). Most modern systems such as Java 7 and later support these modes.  Signing Requests  Requests must be signed using an access key ID and a secret access key. We strongly recommend that you do not use your Amazon Web Services account root access key ID and secret access key for everyday work. You can use the access key ID and secret access key for an IAM user or you can use the Security Token Service (STS) to generate temporary security credentials and use those to sign requests.  All KMS requests must be signed with Signature Version 4.  Logging API Requests  KMS supports CloudTrail, a service that logs Amazon Web Services API calls and related events for your Amazon Web Services account and delivers them to an Amazon S3 bucket that you specify. By using the information collected by CloudTrail, you can determine what requests were made to KMS, who made the request, when it was made, and so on. To learn more about CloudTrail, including how to turn it on and find your log files, see the CloudTrail User Guide.  Additional Resources  For more information about credentials and request signing, see the following:    Amazon Web Services Security Credentials - This topic provides general information about the types of credentials used to access Amazon Web Services.    Temporary Security Credentials - This section of the IAM User Guide describes how to create and use temporary security credentials.    Signature Version 4 Signing Process - This set of topics walks you through the process of signing a request using an access key ID and a secret access key.    Commonly Used API Operations  Of the API operations discussed in this guide, the following will prove the most useful for most applications. You will likely perform operations other than these, such as creating keys and assigning policies, by using the console.    Encrypt     Decrypt     GenerateDataKey     GenerateDataKeyWithoutPlaintext",
      loadSpec: "aws/kms",
    },
    {
      name: "lakeformation",
      description:
        "Lake Formation Defines the public endpoint for the Lake Formation service",
      loadSpec: "aws/lakeformation",
    },
    {
      name: "lambda",
      description:
        "Lambda  Overview  Lambda is a compute service that lets you run code without provisioning or managing servers. Lambda runs your code on a high-availability compute infrastructure and performs all of the administration of the compute resources, including server and operating system maintenance, capacity provisioning and automatic scaling, code monitoring and logging. With Lambda, you can run code for virtually any type of application or backend service. For more information about the Lambda service, see What is Lambda in the Lambda Developer Guide. The Lambda API Reference provides information about each of the API methods, including details about the parameters in each API request and response.   You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools to access the API. For installation instructions, see Tools for Amazon Web Services.  For a list of Region-specific endpoints that Lambda supports, see Lambda endpoints and quotas  in the Amazon Web Services General Reference..  When making the API calls, you will need to authenticate your request by providing a signature. Lambda supports signature version 4. For more information, see Signature Version 4 signing process in the Amazon Web Services General Reference..   CA certificates  Because Amazon Web Services SDKs use the CA certificates from your computer, changes to the certificates on the Amazon Web Services servers can cause connection failures when you attempt to use an SDK. You can prevent these failures by keeping your computer's CA certificates and operating system up-to-date. If you encounter this issue in a corporate environment and do not manage your own computer, you might need to ask an administrator to assist with the update process. The following list shows minimum operating system and Java versions:   Microsoft Windows versions that have updates from January 2005 or later installed contain at least one of the required CAs in their trust list.    Mac OS X 10.4 with Java for Mac OS X 10.4 Release 5 (February 2007), Mac OS X 10.5 (October 2007), and later versions contain at least one of the required CAs in their trust list.    Red Hat Enterprise Linux 5 (March 2007), 6, and 7 and CentOS 5, 6, and 7 all contain at least one of the required CAs in their default trusted CA list.    Java 1.4.2_12 (May 2006), 5 Update 2 (March 2005), and all later versions, including Java 6 (December 2006), 7, and 8, contain at least one of the required CAs in their default trusted CA list.    When accessing the Lambda management console or Lambda API endpoints, whether through browsers or programmatically, you will need to ensure your client machines support any of the following CAs:    Amazon Root CA 1   Starfield Services Root Certificate Authority - G2   Starfield Class 2 Certification Authority   Root certificates from the first two authorities are available from Amazon trust services, but keeping your computer up-to-date is the more straightforward solution. To learn more about ACM-provided certificates, see Amazon Web Services Certificate Manager FAQs",
      loadSpec: "aws/lambda",
    },
    {
      name: "launch-wizard",
      description:
        "Launch Wizard offers a guided way of sizing, configuring, and deploying Amazon Web Services resources for third party applications, such as Microsoft SQL Server Always On and HANA based SAP systems, without the need to manually identify and provision individual Amazon Web Services resources",
      loadSpec: "aws/launch-wizard",
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
      description: null,
      loadSpec: "aws/lexv2-models",
    },
    {
      name: "lexv2-runtime",
      description:
        "This section contains documentation for the Amazon Lex V2 Runtime V2 API operations",
      loadSpec: "aws/lexv2-runtime",
    },
    {
      name: "license-manager",
      description:
        "License Manager makes it easier to manage licenses from software vendors across multiple Amazon Web Services accounts and on-premises servers",
      loadSpec: "aws/license-manager",
    },
    {
      name: "license-manager-linux-subscriptions",
      description:
        "With License Manager, you can discover and track your commercial Linux subscriptions on running Amazon EC2 instances",
      loadSpec: "aws/license-manager-linux-subscriptions",
    },
    {
      name: "license-manager-user-subscriptions",
      description:
        "With License Manager, you can create user-based subscriptions to utilize licensed software with a per user subscription fee on Amazon EC2 instances",
      loadSpec: "aws/license-manager-user-subscriptions",
    },
    {
      name: "lightsail",
      description:
        "Amazon Lightsail is the easiest way to get started with Amazon Web Services (Amazon Web Services) for developers who need to build websites or web applications. It includes everything you need to launch your project quickly - instances (virtual private servers), container services, storage buckets, managed databases, SSD-based block storage, static IP addresses, load balancers, content delivery network (CDN) distributions, DNS management of registered domains, and resource snapshots (backups) - for a low, predictable monthly price. You can manage your Lightsail resources using the Lightsail console, Lightsail API, Command Line Interface (CLI), or SDKs. For more information about Lightsail concepts and tasks, see the Amazon Lightsail Developer Guide. This API Reference provides detailed information about the actions, data types, parameters, and errors of the Lightsail service. For more information about the supported Amazon Web Services Regions, endpoints, and service quotas of the Lightsail service, see Amazon Lightsail Endpoints and Quotas in the Amazon Web Services General Reference",
      loadSpec: "aws/lightsail",
    },
    {
      name: "location",
      description:
        '"Suite of geospatial services including Maps, Places, Routes, Tracking, and Geofencing"',
      loadSpec: "aws/location",
    },
    {
      name: "logs",
      description:
        'You can use Amazon CloudWatch Logs to monitor, store, and access your log files from EC2 instances, CloudTrail, and other sources. You can then retrieve the associated log data from CloudWatch Logs using the CloudWatch console. Alternatively, you can use CloudWatch Logs commands in the Amazon Web Services CLI, CloudWatch Logs API, or CloudWatch Logs SDK. You can use CloudWatch Logs to:    Monitor logs from EC2 instances in real time: You can use CloudWatch Logs to monitor applications and systems using log data. For example, CloudWatch Logs can track the number of errors that occur in your application logs. Then, it can send you a notification whenever the rate of errors exceeds a threshold that you specify. CloudWatch Logs uses your log data for monitoring so no code changes are required. For example, you can monitor application logs for specific literal terms (such as "NullReferenceException"). You can also count the number of occurrences of a literal term at a particular position in log data (such as "404" status codes in an Apache access log). When the term you are searching for is found, CloudWatch Logs reports the data to a CloudWatch metric that you specify.    Monitor CloudTrail logged events: You can create alarms in CloudWatch and receive notifications of particular API activity as captured by CloudTrail. You can use the notification to perform troubleshooting.    Archive log data: You can use CloudWatch Logs to store your log data in highly durable storage. You can change the log retention setting so that any log events earlier than this setting are automatically deleted. The CloudWatch Logs agent helps to quickly send both rotated and non-rotated log data off of a host and into the log service. You can then access the raw log data when you need it',
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
      name: "m2",
      description:
        "Amazon Web Services Mainframe Modernization provides tools and resources to help you plan and implement migration and modernization from mainframes to Amazon Web Services managed runtime environments. It provides tools for analyzing existing mainframe applications, developing or updating mainframe applications using COBOL or PL/I, and implementing an automated pipeline for continuous integration and continuous delivery (CI/CD) of the applications",
      loadSpec: "aws/m2",
    },
    {
      name: "machinelearning",
      description:
        "Definition of the public APIs exposed by Amazon Machine Learning",
      loadSpec: "aws/machinelearning",
    },
    {
      name: "macie2",
      description: "Amazon Macie",
      loadSpec: "aws/macie2",
    },
    {
      name: "mailmanager",
      description:
        "Amazon SES Mail Manager API The Amazon SES Mail Manager API contains operations and data types that comprise the Mail Manager feature of Amazon Simple Email Service (SES). Mail Manager is a set of Amazon SES email gateway features designed to help you strengthen your organization's email infrastructure, simplify email workflow management, and streamline email compliance control. To learn more, see the Mail Manager chapter in the Amazon SES Developer Guide",
      loadSpec: "aws/mailmanager",
    },
    {
      name: "managedblockchain",
      description:
        "Amazon Managed Blockchain is a fully managed service for creating and managing blockchain networks using open-source frameworks. Blockchain allows you to build applications where multiple parties can securely and transparently run transactions and share data without the need for a trusted, central authority. Managed Blockchain supports the Hyperledger Fabric and Ethereum open-source frameworks. Because of fundamental differences between the frameworks, some API actions or data types may only apply in the context of one framework and not the other. For example, actions related to Hyperledger Fabric network members such as CreateMember and DeleteMember don't apply to Ethereum. The description for each action indicates the framework or frameworks to which it applies. Data types and properties that apply only in the context of a particular framework are similarly indicated",
      loadSpec: "aws/managedblockchain",
    },
    {
      name: "managedblockchain-query",
      description:
        "Amazon Managed Blockchain (AMB) Query provides you with convenient access to multi-blockchain network data, which makes it easier for you to extract contextual data related to blockchain activity. You can use AMB Query to read data from public blockchain networks, such as Bitcoin Mainnet and Ethereum Mainnet. You can also get information such as the current and historical balances of addresses, or you can get a list of blockchain transactions for a given time period. Additionally, you can get details of a given transaction, such as transaction events, which you can further analyze or use in business logic for your applications",
      loadSpec: "aws/managedblockchain-query",
    },
    {
      name: "marketplace-agreement",
      description:
        "AWS Marketplace is a curated digital catalog that customers can use to find, buy, deploy, and manage third-party software, data, and services to build solutions and run their businesses. The AWS Marketplace Agreement Service provides an API interface that helps AWS Marketplace sellers manage their product-related agreements, including listing, searching, and filtering agreements. To manage agreements in AWS Marketplace, you must ensure that your AWS Identity and Access Management (IAM) policies and roles are set up. The user must have the required policies/permissions that allow them to carry out the actions in AWS:    DescribeAgreement \u2013 Grants permission to users to obtain detailed meta data about any of their agreements.    GetAgreementTerms \u2013 Grants permission to users to obtain details about the terms of an agreement.    SearchAgreements \u2013 Grants permission to users to search through all their agreements",
      loadSpec: "aws/marketplace-agreement",
    },
    {
      name: "marketplace-catalog",
      description:
        "Catalog API actions allow you to manage your entities through list, describe, and update capabilities. An entity can be a product or an offer on AWS Marketplace.  You can automate your entity update process by integrating the AWS Marketplace Catalog API with your AWS Marketplace product build or deployment pipelines. You can also create your own applications on top of the Catalog API to manage your products on AWS Marketplace",
      loadSpec: "aws/marketplace-catalog",
    },
    {
      name: "marketplace-deployment",
      description:
        "The AWS Marketplace Deployment Service supports the Quick Launch experience, which is a deployment option for software as a service (SaaS) products. Quick Launch simplifies and reduces the time, resources, and steps required to configure, deploy, and launch a products. The AWS Marketplace Deployment Service provides sellers with a secure method for passing deployment parameters (for example, API keys and external IDs) to buyers during the Quick Launch experience",
      loadSpec: "aws/marketplace-deployment",
    },
    {
      name: "marketplace-entitlement",
      description:
        "AWS Marketplace Entitlement Service This reference provides descriptions of the AWS Marketplace Entitlement Service API. AWS Marketplace Entitlement Service is used to determine the entitlement of a customer to a given product. An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.  Getting Entitlement Records     GetEntitlements- Gets the entitlements for a Marketplace product",
      loadSpec: "aws/marketplace-entitlement",
    },
    {
      name: "marketplace-reporting",
      description:
        "The Amazon Web Services Marketplace GetBuyerDashboard API enables you to get a procurement insights dashboard programmatically. The API gets the agreement and cost analysis dashboards with data for all of the Amazon Web Services accounts in your Amazon Web Services Organization.  To use the Amazon Web Services Marketplace Reporting API, you must complete the following prerequisites:   Enable all features for your organization. For more information, see Enabling all features for an organization with Organizations, in the Organizations User Guide.   Call the service as the Organizations management account or an account registered as a delegated administrator for the procurement insights service. For more information about management accounts, see Tutorial: Creating and configuring an organization and Managing the management account with Organizations, both in the Organizations User Guide. For more information about delegated administrators, see Using delegated administrators, in the Amazon Web Services Marketplace Buyer Guide.   Create an IAM policy that enables the aws-marketplace:GetBuyerDashboard and organizations:DescribeOrganization permissions. In addition, the management account requires the organizations:EnableAWSServiceAccess and iam:CreateServiceLinkedRole permissions to create. For more information about creating the policy, see Policies and permissions in Identity and Access Management, in the IAM User Guide.  Access can be shared only by registering the desired linked account as a delegated administrator. That requires organizations:RegisterDelegatedAdministrator organizations:ListDelegatedAdministrators and organizations:DeregisterDelegatedAdministrator permissions.    Use the Amazon Web Services Marketplace console to create the AWSServiceRoleForProcurementInsightsPolicy service-linked role. The role enables Amazon Web Services Marketplace procurement visibility integration. The management account requires an IAM policy with the organizations:EnableAWSServiceAccess and iam:CreateServiceLinkedRole permissions to create the service-linked role and enable the service access. For more information, see Granting access to Organizations and Service-linked role to share procurement data in the Amazon Web Services Marketplace Buyer Guide.   After creating the service-linked role, you must enable trusted access that grants Amazon Web Services Marketplace permission to access data from your Organizations. For more information, see Granting access to Organizations in the Amazon Web Services Marketplace Buyer Guide",
      loadSpec: "aws/marketplace-reporting",
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
      name: "mediapackagev2",
      description:
        "This guide is intended for creating AWS Elemental MediaPackage resources in MediaPackage Version 2 (v2) starting from May 2023. To get started with MediaPackage v2, create your MediaPackage resources. There isn't an automated process to migrate your resources from MediaPackage v1 to MediaPackage v2.  The names of the entities that you use to access this API, like URLs and ARNs, all have the versioning information added, like \"v2\", to distinguish from the prior version. If you used MediaPackage prior to this release, you can't use the MediaPackage v2 CLI or the MediaPackage v2 API to access any MediaPackage v1 resources. If you created resources in MediaPackage v1, use video on demand (VOD) workflows, and aren't looking to migrate to MediaPackage v2 yet, see the MediaPackage v1 Live API Reference.  This is the AWS Elemental MediaPackage v2 Live REST API Reference. It describes all the MediaPackage API operations for live content in detail, and provides sample requests, responses, and errors for the supported web services protocols. We assume that you have the IAM permissions that you need to use MediaPackage via the REST API. We also assume that you are familiar with the features and operations of MediaPackage, as described in the AWS Elemental MediaPackage User Guide",
      loadSpec: "aws/mediapackagev2",
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
      name: "medical-imaging",
      description:
        "This is the AWS HealthImaging API Reference. AWS HealthImaging is a HIPAA eligible service that empowers healthcare providers, life science organizations, and their software partners to store, analyze, and share medical images in the cloud at petabyte scale. For an introduction to the service, see the  AWS HealthImaging Developer Guide .  We recommend using one of the AWS Software Development Kits (SDKs) for your programming language, as they take care of request authentication, serialization, and connection management. For more information, see Tools to build on AWS.  The following sections list AWS HealthImaging API actions categorized according to functionality. Links are provided to actions within this Reference, along with links back to corresponding sections in the AWS HealthImaging Developer Guide where you can view tested code examples.  Data store actions     CreateDatastore \u2013 See Creating a data store.    GetDatastore \u2013 See Getting data store properties.    ListDatastores \u2013 See Listing data stores.    DeleteDatastore \u2013 See Deleting a data store.    Import job actions     StartDICOMImportJob \u2013 See Starting an import job.    GetDICOMImportJob \u2013 See Getting import job properties.    ListDICOMImportJobs \u2013 See Listing import jobs.    Image set access actions     SearchImageSets \u2013 See Searching image sets.    GetImageSet \u2013 See Getting image set properties.    GetImageSetMetadata \u2013 See Getting image set metadata.    GetImageFrame \u2013 See Getting image set pixel data.    Image set modification actions     ListImageSetVersions \u2013 See Listing image set versions.    UpdateImageSetMetadata \u2013 See Updating image set metadata.    CopyImageSet \u2013 See Copying an image set.    DeleteImageSet \u2013 See Deleting an image set.    Tagging actions     TagResource \u2013 See Tagging a resource.    ListTagsForResource \u2013 See Listing tags for a resource.    UntagResource \u2013 See Untagging a resource",
      loadSpec: "aws/medical-imaging",
    },
    {
      name: "memorydb",
      description:
        "MemoryDB is a fully managed, Redis OSS-compatible, in-memory database that delivers ultra-fast performance and Multi-AZ durability for modern applications built using microservices architectures. MemoryDB stores the entire database in-memory, enabling low latency and high throughput data access. It is compatible with Redis OSS, a popular open source data store, enabling you to leverage Redis OSS\u2019 flexible and friendly data structures, APIs, and commands",
      loadSpec: "aws/memorydb",
    },
    {
      name: "meteringmarketplace",
      description:
        "AWS Marketplace Metering Service This reference provides descriptions of the low-level AWS Marketplace Metering Service API. AWS Marketplace sellers can use this API to submit usage data for custom usage dimensions. For information on the permissions you need to use this API, see AWS Marketplace metering and entitlement API permissions in the AWS Marketplace Seller Guide.   Submitting Metering Records     MeterUsage - Submits the metering record for an AWS Marketplace product. MeterUsage is called from an EC2 instance or a container running on EKS or ECS.    BatchMeterUsage - Submits the metering record for a set of customers. BatchMeterUsage is called from a software-as-a-service (SaaS) application.    Accepting New Customers     ResolveCustomer - Called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a Registration Token through the browser. The Registration Token is resolved through this API to obtain a CustomerIdentifier along with the CustomerAWSAccountId and ProductCode.    Entitlement and Metering for Paid Container Products    Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the RegisterUsage operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call RegisterUsage, but you can do so if you want to receive usage data in your seller reports. For more information on using the RegisterUsage operation, see Container-Based Products.     BatchMeterUsage API calls are captured by AWS CloudTrail. You can use Cloudtrail to verify that the SaaS metering records that you sent are accurate by searching for records with the eventName of BatchMeterUsage. You can also use CloudTrail to audit records over time. For more information, see the  AWS CloudTrail User Guide",
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
      name: "migration-hub-refactor-spaces",
      description:
        "Amazon Web Services Migration Hub Refactor Spaces This API reference provides descriptions, syntax, and other details about each of the actions and data types for Amazon Web Services Migration Hub Refactor Spaces (Refactor Spaces). The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see Amazon Web Services SDKs. To share Refactor Spaces environments with other Amazon Web Services accounts or with Organizations and their OUs, use Resource Access Manager's CreateResourceShare API. See CreateResourceShare in the Amazon Web Services RAM API Reference",
      loadSpec: "aws/migration-hub-refactor-spaces",
    },
    {
      name: "migrationhub-config",
      description:
        "The AWS Migration Hub home region APIs are available specifically for working with your Migration Hub home region. You can use these APIs to determine a home region, as well as to create and work with controls that describe the home region.   You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a HomeRegionNotSetException error is returned.   API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.   If you call a write API outside the home region, an InvalidInputException is returned.   You can call GetHomeRegion action to obtain the account's Migration Hub home region.   For specific API usage, see the sections that follow in this AWS Migration Hub Home Region API reference",
      loadSpec: "aws/migrationhub-config",
    },
    {
      name: "migrationhuborchestrator",
      description:
        "This API reference provides descriptions, syntax, and other details about each of the actions and data types for AWS Migration Hub Orchestrator. The topic for each action shows the API request parameters and responses. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using",
      loadSpec: "aws/migrationhuborchestrator",
    },
    {
      name: "migrationhubstrategy",
      description:
        "Migration Hub Strategy Recommendations This API reference provides descriptions, syntax, and other details about each of the actions and data types for Migration Hub Strategy Recommendations (Strategy Recommendations). The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see AWS SDKs",
      loadSpec: "aws/migrationhubstrategy",
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
        "Amazon Managed Workflows for Apache Airflow This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation. For more information, see What is Amazon MWAA?.  Endpoints     api.airflow.{region}.amazonaws.com - This endpoint is used for environment management.    CreateEnvironment     DeleteEnvironment     GetEnvironment     ListEnvironments     ListTagsForResource     TagResource     UntagResource     UpdateEnvironment       env.airflow.{region}.amazonaws.com - This endpoint is used to operate the Airflow environment.    CreateCliToken     CreateWebLoginToken     InvokeRestApi       Regions  For a list of supported regions, see Amazon MWAA endpoints and quotas in the Amazon Web Services General Reference",
      loadSpec: "aws/mwaa",
    },
    {
      name: "neptune",
      description:
        "Amazon Neptune Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it easy to build and run applications that work with highly connected datasets. The core of Amazon Neptune is a purpose-built, high-performance graph database engine optimized for storing billions of relationships and querying the graph with milliseconds latency. Amazon Neptune supports popular graph models Property Graph and W3C's RDF, and their respective query languages Apache TinkerPop Gremlin and SPARQL, allowing you to easily build queries that efficiently navigate highly connected datasets. Neptune powers graph use cases such as recommendation engines, fraud detection, knowledge graphs, drug discovery, and network security. This interface reference for Amazon Neptune contains documentation for a programming or command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide",
      loadSpec: "aws/neptune",
    },
    {
      name: "neptune-graph",
      description:
        "Neptune Analytics is a new analytics database engine for Amazon Neptune that helps customers get to insights faster by quickly processing large amounts of graph data, invoking popular graph analytic algorithms in low-latency queries, and getting analytics results in seconds",
      loadSpec: "aws/neptune-graph",
    },
    {
      name: "neptunedata",
      description:
        "Neptune Data API The Amazon Neptune data API provides SDK support for more than 40 of Neptune's data operations, including data loading, query execution, data inquiry, and machine learning. It supports the Gremlin and openCypher query languages, and is available in all SDK languages. It automatically signs API requests and greatly simplifies integrating Neptune into your applications",
      loadSpec: "aws/neptunedata",
    },
    {
      name: "network-firewall",
      description:
        "This is the API Reference for Network Firewall. This guide is for developers who need detailed information about the Network Firewall API actions, data types, and errors.    The REST API requires you to handle connection details, such as calculating signatures, handling request retries, and error handling. For general information about using the Amazon Web Services REST APIs, see Amazon Web Services APIs.  To access Network Firewall using the REST API endpoint: https://network-firewall.<region>.amazonaws.com     Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to the programming language or platform that you're using. For more information, see Amazon Web Services SDKs.   For descriptions of Network Firewall features, including and step-by-step instructions on how to use them through the Network Firewall console, see the Network Firewall Developer Guide.   Network Firewall is a stateful, managed, network firewall and intrusion detection and prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the perimeter of your VPC. This includes filtering traffic going to and coming from an internet gateway, NAT gateway, or over VPN or Direct Connect. Network Firewall uses rules that are compatible with Suricata, a free, open source network analysis and threat detection engine.  You can use Network Firewall to monitor and protect your VPC traffic in a number of ways. The following are just a few examples:    Allow domains or IP addresses for known Amazon Web Services service endpoints, such as Amazon S3, and block all other forms of traffic.   Use custom lists of known bad domains to limit the types of domain names that your applications can access.   Perform deep packet inspection on traffic entering or leaving your VPC.   Use stateful protocol detection to filter protocols like HTTPS, regardless of the port used.   To enable Network Firewall for your VPCs, you perform steps in both Amazon VPC and in Network Firewall. For information about using Amazon VPC, see Amazon VPC User Guide. To start using Network Firewall, do the following:    (Optional) If you don't already have a VPC that you want to protect, create it in Amazon VPC.    In Amazon VPC, in each Availability Zone where you want to have a firewall endpoint, create a subnet for the sole use of Network Firewall.    In Network Firewall, create stateless and stateful rule groups, to define the components of the network traffic filtering behavior that you want your firewall to have.    In Network Firewall, create a firewall policy that uses your rule groups and specifies additional default traffic filtering behavior.    In Network Firewall, create a firewall and specify your new firewall policy and VPC subnets. Network Firewall creates a firewall endpoint in each subnet that you specify, with the behavior that's defined in the firewall policy.   In Amazon VPC, use ingress routing enhancements to route traffic through the new firewall endpoints",
      loadSpec: "aws/network-firewall",
    },
    {
      name: "networkflowmonitor",
      description:
        "Network Flow Monitor is a feature of Amazon CloudWatch Network Monitoring that provides visibility into the performance of network flows for your Amazon Web Services workloads, between instances in subnets, as well as to and from Amazon Web Services. Lightweight agents that you install on the instances capture performance metrics for your network flows, such as packet loss and latency, and send them to the Network Flow Monitor backend. Then, you can view and analyze metrics from the top contributors for each metric type, to help troubleshoot issues. In addition, when you create a monitor, Network Flow Monitor provides a network health indicator (NHI) that informs you whether there were Amazon Web Services network issues for one or more of the network flows tracked by a monitor, during a time period that you choose. By using this value, you can independently determine if the Amazon Web Services network is impacting your workload during a specific time frame, to help you focus troubleshooting efforts. To learn more about Network Flow Monitor, see the Network Flow Monitor User Guide in the Amazon CloudWatch User Guide",
      loadSpec: "aws/networkflowmonitor",
    },
    {
      name: "networkmanager",
      description:
        "Amazon Web Services enables you to centrally manage your Amazon Web Services Cloud WAN core network and your Transit Gateway network across Amazon Web Services accounts, Regions, and on-premises locations",
      loadSpec: "aws/networkmanager",
    },
    {
      name: "networkmonitor",
      description:
        "Amazon CloudWatch Network Monitor is an Amazon Web Services active network monitoring service that identifies if a network issues exists within the Amazon Web Services network or your own company network. Within Network Monitor you'll choose the source VPCs and subnets from the Amazon Web Services network in which you operate and then you'll choose the destination IP addresses from your on-premises network. From these sources and destinations, Network Monitor creates a monitor containing all the possible source and destination combinations, each of which is called a probe, within a single monitor. These probes then monitor network traffic to help you identify where network issues might be affecting your traffic. Before you begin, ensure the Amazon Web Services CLI is configured in the Amazon Web Services Account where you will create the Network Monitor resource. Network Monitor doesn\u2019t support creation on cross-account resources, but you can create a Network Monitor in any subnet belonging to a VPC owned by your Account. For more information, see Using Amazon CloudWatch Network Monitor in the Amazon CloudWatch User Guide",
      loadSpec: "aws/networkmonitor",
    },
    {
      name: "notifications",
      description:
        "The AWS User Notifications API Reference provides descriptions, API request parameters, and the JSON response for each of the User Notification API actions. User Notification control APIs are currently available in US East (Virginia) - us-east-1.  GetNotificationEvent and ListNotificationEvents APIs are currently available in commercial partition Regions and only return notifications stored in the same Region in which they're called. The User Notifications console can only be used in US East (Virginia). Your data however, is stored in each Region chosen as a notification hub in addition to US East (Virginia)",
      loadSpec: "aws/notifications",
    },
    {
      name: "notificationscontacts",
      description:
        "AWS User Notifications Contacts is a service that allows you to create and manage email contacts for AWS User Notifications. The AWS User Notifications Contacts API Reference provides descriptions, API request parameters, and the JSON response for all email contact related API actions",
      loadSpec: "aws/notificationscontacts",
    },
    {
      name: "oam",
      description:
        "Use Amazon CloudWatch Observability Access Manager to create and manage links between source accounts and monitoring accounts by using CloudWatch cross-account observability. With CloudWatch cross-account observability, you can monitor and troubleshoot applications that span multiple accounts within a Region. Seamlessly search, visualize, and analyze your metrics, logs, traces, and Application Insights applications in any of the linked accounts without account boundaries. Set up one or more Amazon Web Services accounts as monitoring accounts and link them with multiple source accounts. A monitoring account is a central Amazon Web Services account that can view and interact with observability data generated from source accounts. A source account is an individual Amazon Web Services account that generates observability data for the resources that reside in it. Source accounts share their observability data with the monitoring account. The shared observability data can include metrics in Amazon CloudWatch, logs in Amazon CloudWatch Logs, traces in X-Ray, and applications in Amazon CloudWatch Application Insights",
      loadSpec: "aws/oam",
    },
    {
      name: "observabilityadmin",
      description:
        "Amazon CloudWatch Obsersavability Admin to control temletry config for your AWS Organization or account. Telemetry config con\ufb01g to discover and understand the state of telemetry con\ufb01guration for your AWS resources from a central view in the CloudWatch console. Telemetry con\ufb01g simpli\ufb01es the process of auditing your telemetry collection con\ufb01gurations across multiple resource types across your AWS Organization or account. For more information, see Auditing CloudWatch telemetry con\ufb01gurations in the CloudWatch User Guide. For information on the permissions you need to use this API, see Identity and access management for Amazon CloudWatch in the CloudWatch User Guide",
      loadSpec: "aws/observabilityadmin",
    },
    {
      name: "omics",
      description:
        "This is the AWS HealthOmics API Reference. For an introduction to the service, see What is AWS HealthOmics? in the AWS HealthOmics User Guide",
      loadSpec: "aws/omics",
    },
    {
      name: "opensearch",
      description:
        "Use the Amazon OpenSearch Service configuration API to create, configure, and manage OpenSearch Service domains. The endpoint for configuration service requests is Region specific: es.region.amazonaws.com. For example, es.us-east-1.amazonaws.com. For a current list of supported Regions and endpoints, see Amazon Web Services service endpoints",
      loadSpec: "aws/opensearch",
    },
    {
      name: "opensearchserverless",
      description:
        "Use the Amazon OpenSearch Serverless API to create, configure, and manage OpenSearch Serverless collections and security policies. OpenSearch Serverless is an on-demand, pre-provisioned serverless configuration for Amazon OpenSearch Service. OpenSearch Serverless removes the operational complexities of provisioning, configuring, and tuning your OpenSearch clusters. It enables you to easily search and analyze petabytes of data without having to worry about the underlying infrastructure and data management.  To learn more about OpenSearch Serverless, see What is Amazon OpenSearch Serverless?",
      loadSpec: "aws/opensearchserverless",
    },
    {
      name: "opsworks",
      description:
        "OpsWorks Welcome to the OpsWorks Stacks API Reference. This guide provides descriptions, syntax, and usage examples for OpsWorks Stacks actions and data types, including common parameters and error codes.  OpsWorks Stacks is an application management service that provides an integrated experience for managing the complete application lifecycle. For information about OpsWorks, see the OpsWorks information page.  SDKs and CLI  Use the OpsWorks Stacks API by using the Command Line Interface (CLI) or by using one of the Amazon Web Services SDKs to implement applications in your preferred language. For more information, see:    CLI     SDK for Java     SDK for .NET     SDK for PHP     SDK for Ruby     Amazon Web Services SDK for Node.js     SDK for Python (Boto)     Endpoints  OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks can only be accessed or managed within the endpoint in which they are created.   opsworks.us-east-1.amazonaws.com   opsworks.us-east-2.amazonaws.com   opsworks.us-west-1.amazonaws.com   opsworks.us-west-2.amazonaws.com   opsworks.ca-central-1.amazonaws.com (API only; not available in the Amazon Web Services Management Console)   opsworks.eu-west-1.amazonaws.com   opsworks.eu-west-2.amazonaws.com   opsworks.eu-west-3.amazonaws.com   opsworks.eu-central-1.amazonaws.com   opsworks.ap-northeast-1.amazonaws.com   opsworks.ap-northeast-2.amazonaws.com   opsworks.ap-south-1.amazonaws.com   opsworks.ap-southeast-1.amazonaws.com   opsworks.ap-southeast-2.amazonaws.com   opsworks.sa-east-1.amazonaws.com    Chef Versions  When you call CreateStack, CloneStack, or UpdateStack we recommend you use the ConfigurationManager parameter to specify the Chef version. The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information, see Chef Versions.  You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible",
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
      description:
        "Organizations is a web service that enables you to consolidate your multiple Amazon Web Services accounts into an organization and centrally manage your accounts and their resources. This guide provides descriptions of the Organizations operations. For more information about using this service, see the Organizations User Guide.  Support and feedback for Organizations  We welcome your feedback. Send your comments to feedback-awsorganizations@amazon.com or post your feedback and questions in the Organizations support forum. For more information about the Amazon Web Services support forums, see Forums Help.  Endpoint to call When using the CLI or the Amazon Web Services SDK  For the current release of Organizations, specify the us-east-1 region for all Amazon Web Services API and CLI calls made from the commercial Amazon Web Services Regions outside of China. If calling from one of the Amazon Web Services Regions in China, then specify cn-northwest-1. You can do this in the CLI by using these parameters and commands:   Use the following parameter with each command to specify both the endpoint and its region:  --endpoint-url https://organizations.us-east-1.amazonaws.com (from commercial Amazon Web Services Regions outside of China)  or  --endpoint-url https://organizations.cn-northwest-1.amazonaws.com.cn (from Amazon Web Services Regions in China)    Use the default endpoint, but configure your default region with this command:  aws configure set default.region us-east-1 (from commercial Amazon Web Services Regions outside of China)  or  aws configure set default.region cn-northwest-1 (from Amazon Web Services Regions in China)    Use the following parameter with each command to specify the endpoint:  --region us-east-1 (from commercial Amazon Web Services Regions outside of China)  or  --region cn-northwest-1 (from Amazon Web Services Regions in China)     Recording API Requests  Organizations supports CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected by CloudTrail, you can determine which requests the Organizations service received, who made the request and when, and so on. For more about Organizations and its support for CloudTrail, see Logging Organizations API calls with CloudTrail in the Organizations User Guide. To learn more about CloudTrail, including how to turn it on and find your log files, see the CloudTrail User Guide",
      loadSpec: "aws/organizations",
    },
    {
      name: "osis",
      description:
        "Use the Amazon OpenSearch Ingestion API to create and manage ingestion pipelines. OpenSearch Ingestion is a fully managed data collector that delivers real-time log and trace data to OpenSearch Service domains. For more information, see Getting data into your cluster using OpenSearch Ingestion",
      loadSpec: "aws/osis",
    },
    {
      name: "outposts",
      description:
        "Amazon Web Services Outposts is a fully managed service that extends Amazon Web Services infrastructure, APIs, and tools to customer premises. By providing local access to Amazon Web Services managed infrastructure, Amazon Web Services Outposts enables customers to build and run applications on premises using the same programming interfaces as in Amazon Web Services Regions, while using local compute and storage resources for lower latency and local data processing needs",
      loadSpec: "aws/outposts",
    },
    {
      name: "panorama",
      description:
        "AWS Panorama  Overview  This is the AWS Panorama API Reference. For an introduction to the service, see What is AWS Panorama? in the AWS Panorama Developer Guide",
      loadSpec: "aws/panorama",
    },
    {
      name: "partnercentral-selling",
      description:
        "AWS Partner Central API for Selling  AWS Partner Central API for Selling Reference Guide  This Amazon Web Services (AWS) Partner Central API reference is designed to help AWS Partners integrate Customer Relationship Management (CRM) systems with AWS Partner Central. Partners can automate interactions with AWS Partner Central, which helps to ensure effective engagements in joint business activities. The API provides standard AWS API functionality. Access it by either using API Actions or by using an AWS SDK that's tailored to your programming language or platform. For more information, see Getting Started with AWS and Tools to Build on AWS.  Features offered by AWS Partner Central API     Opportunity management: Manages coselling opportunities through API actions such as CreateOpportunity, UpdateOpportunity, ListOpportunities, GetOpportunity, and AssignOpportunity.    AWS referral management: Manages referrals shared by AWS using actions such as ListEngagementInvitations, GetEngagementInvitation, StartEngagementByAcceptingInvitation, and RejectEngagementInvitation.    Entity association: Associates related entities such as AWS Products, Partner Solutions, and AWS Marketplace Private Offers with opportunities using the actions AssociateOpportunity, and DisassociateOpportunity.    View AWS opportunity details: Retrieves real-time summaries of AWS opportunities using the GetAWSOpportunitySummary action.    List solutions: Provides list APIs for listing partner offers using ListSolutions.    Event subscription: Subscribe to real-time opportunity updates through AWS EventBridge by using actions such as Opportunity Created, Opportunity Updated, Engagement Invitation Accepted, Engagement Invitation Rejected, and Engagement Invitation Created",
      loadSpec: "aws/partnercentral-selling",
    },
    {
      name: "payment-cryptography",
      description:
        "Amazon Web Services Payment Cryptography Control Plane APIs manage encryption keys for use during payment-related cryptographic operations. You can create, import, export, share, manage, and delete keys. You can also manage Identity and Access Management (IAM) policies for keys. For more information, see Identity and access management in the Amazon Web Services Payment Cryptography User Guide.  To use encryption keys for payment-related transaction processing and associated cryptographic operations, you use the Amazon Web Services Payment Cryptography Data Plane. You can perform actions like encrypt, decrypt, generate, and verify payment-related data. All Amazon Web Services Payment Cryptography API calls must be signed and transmitted using Transport Layer Security (TLS). We recommend you always use the latest supported TLS version for logging API requests.  Amazon Web Services Payment Cryptography supports CloudTrail for control plane operations, a service that logs Amazon Web Services API calls and related events for your Amazon Web Services account and delivers them to an Amazon S3 bucket you specify. By using the information collected by CloudTrail, you can determine what requests were made to Amazon Web Services Payment Cryptography, who made the request, when it was made, and so on. If you don't con\ufb01gure a trail, you can still view the most recent events in the CloudTrail console. For more information, see the CloudTrail User Guide",
      loadSpec: "aws/payment-cryptography",
    },
    {
      name: "payment-cryptography-data",
      description:
        "You use the Amazon Web Services Payment Cryptography Data Plane to manage how encryption keys are used for payment-related transaction processing and associated cryptographic operations. You can encrypt, decrypt, generate, verify, and translate payment-related cryptographic operations in Amazon Web Services Payment Cryptography. For more information, see Data operations in the Amazon Web Services Payment Cryptography User Guide. To manage your encryption keys, you use the Amazon Web Services Payment Cryptography Control Plane. You can create, import, export, share, manage, and delete keys. You can also manage Identity and Access Management (IAM) policies for keys",
      loadSpec: "aws/payment-cryptography-data",
    },
    {
      name: "pca-connector-ad",
      description:
        "Amazon Web Services Private CA Connector for Active Directory creates a connector between Amazon Web Services Private CA and Active Directory (AD) that enables you to provision security certificates for AD signed by a private CA that you own. For more information, see Amazon Web Services Private CA Connector for Active Directory",
      loadSpec: "aws/pca-connector-ad",
    },
    {
      name: "pca-connector-scep",
      description:
        "Connector for SCEP creates a connector between Amazon Web Services Private CA and your SCEP-enabled clients and devices. For more information, see Connector for SCEP in the Amazon Web Services Private CA User Guide",
      loadSpec: "aws/pca-connector-scep",
    },
    {
      name: "pcs",
      description:
        "Amazon Web Services Parallel Computing Service (Amazon Web Services PCS) is a managed service that makes it easier for you to run and scale your high performance computing (HPC) workloads, and build scientific and engineering models on Amazon Web Services using Slurm. For more information, see the Amazon Web Services Parallel Computing Service User Guide. This reference describes the actions and data types of the service management API. You can use the Amazon Web Services SDKs to call the API actions in software, or use the Command Line Interface (CLI) to call the API actions manually. These API actions manage the service through an Amazon Web Services account. The API actions operate on Amazon Web Services PCS resources. A resource is an entity in Amazon Web Services that you can work with. Amazon Web Services services create resources when you use the features of the service. Examples of Amazon Web Services PCS resources include clusters, compute node groups, and queues. For more information about resources in Amazon Web Services, see Resource in the Resource Explorer User Guide.  An Amazon Web Services PCS compute node is an Amazon EC2 instance. You don't launch compute nodes directly. Amazon Web Services PCS uses configuration information that you provide to launch compute nodes in your Amazon Web Services account. You receive billing charges for your running compute nodes. Amazon Web Services PCS automatically terminates your compute nodes when you delete the Amazon Web Services PCS resources related to those compute nodes",
      loadSpec: "aws/pcs",
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
        "Amazon Personalize can consume real-time user event data, such as stream or click data, and use it for model training either alone or combined with historical data. For more information see Recording item interaction events",
      loadSpec: "aws/personalize-events",
    },
    {
      name: "personalize-runtime",
      description: null,
      loadSpec: "aws/personalize-runtime",
    },
    {
      name: "pi",
      description:
        "Amazon RDS Performance Insights Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. The guide provides detailed information about Performance Insights data types, parameters and errors. When Performance Insights is enabled, the Amazon RDS Performance Insights API provides visibility into the performance of your DB instance. Amazon CloudWatch provides the authoritative source for Amazon Web Services service-vended monitoring metrics. Performance Insights offers a domain-specific view of DB load. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host.   To learn more about Performance Insights and Amazon Aurora DB instances, go to the   Amazon Aurora User Guide .    To learn more about Performance Insights and Amazon RDS DB instances, go to the   Amazon RDS User Guide .    To learn more about Performance Insights and Amazon DocumentDB clusters, go to the   Amazon DocumentDB Developer Guide",
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
      name: "pinpoint-sms-voice-v2",
      description:
        "Welcome to the AWS End User Messaging SMS and Voice, version 2 API Reference. This guide provides information about AWS End User Messaging SMS and Voice, version 2 API resources, including supported HTTP methods, parameters, and schemas. Amazon Pinpoint is an Amazon Web Services service that you can use to engage with your recipients across multiple messaging channels. The AWS End User Messaging SMS and Voice, version 2 API provides programmatic access to options that are unique to the SMS and voice channels. AWS End User Messaging SMS and Voice, version 2 resources such as phone numbers, sender IDs, and opt-out lists can be used by the Amazon Pinpoint API. If you're new to AWS End User Messaging SMS and Voice, it's also helpful to review the  AWS End User Messaging SMS User Guide. The AWS End User Messaging SMS User Guide  provides tutorials, code samples, and procedures that demonstrate how to use AWS End User Messaging SMS and Voice features programmatically and how to integrate functionality into mobile apps and other types of applications. The guide also provides key information, such as AWS End User Messaging SMS and Voice integration with other Amazon Web Services services, and the quotas that apply to use of the service.  Regional availability  The AWS End User Messaging SMS and Voice version 2 API Reference is available in several Amazon Web Services Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see Amazon Web Services Service Endpoints and Amazon Pinpoint endpoints and quotas in the Amazon Web Services General Reference. To learn more about Amazon Web Services Regions, see Managing Amazon Web Services Regions in the Amazon Web Services General Reference. In each Region, Amazon Web Services maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see Amazon Web Services Global Infrastructure",
      loadSpec: "aws/pinpoint-sms-voice-v2",
    },
    {
      name: "pipes",
      description:
        "Amazon EventBridge Pipes connects event sources to targets. Pipes reduces the need for specialized knowledge and integration code when developing event driven architectures. This helps ensures consistency across your company\u2019s applications. With Pipes, the target can be any available EventBridge target. To set up a pipe, you select the event source, add optional event filtering, define optional enrichment, and select the target for the event data",
      loadSpec: "aws/pipes",
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
        "The Amazon Web Services Price List API is a centralized and convenient way to programmatically query Amazon Web Services for services, products, and pricing information. The Amazon Web Services Price List uses standardized product attributes such as Location, Storage Class, and Operating System, and provides prices at the SKU level. You can use the Amazon Web Services Price List to do the following:   Build cost control and scenario planning tools   Reconcile billing data   Forecast future spend for budgeting purposes   Provide cost benefit analysis that compare your internal workloads with Amazon Web Services   Use GetServices without a service code to retrieve the service codes for all Amazon Web Services services, then GetServices with a service code to retrieve the attribute names for that service. After you have the service code and attribute names, you can use GetAttributeValues to see what values are available for an attribute. With the service code and an attribute name and value, you can use GetProducts to find specific products that you're interested in, such as an AmazonEC2 instance, with a Provisioned IOPS volumeType. For more information, see Using the Amazon Web Services Price List API in the Billing User Guide",
      loadSpec: "aws/pricing",
    },
    {
      name: "privatenetworks",
      description:
        "Amazon Web Services Private 5G is a managed service that makes it easy to deploy, operate, and scale your own private mobile network at your on-premises location. Private 5G provides the pre-configured hardware and software for mobile networks, helps automate setup, and scales capacity on demand to support additional devices as needed",
      loadSpec: "aws/privatenetworks",
    },
    {
      name: "proton",
      description:
        "This is the Proton Service API Reference. It provides descriptions, syntax and usage examples for each of the actions and data types for the Proton service. The documentation for each action shows the Query API request parameters and the XML response. Alternatively, you can use the Amazon Web Services CLI to access an API. For more information, see the Amazon Web Services Command Line Interface User Guide. The Proton service is a two-pronged automation framework. Administrators create service templates to provide standardized infrastructure and deployment tooling for serverless and container based applications. Developers, in turn, select from the available service templates to automate their application or service deployments. Because administrators define the infrastructure and tooling that Proton deploys and manages, they need permissions to use all of the listed API operations. When developers select a specific infrastructure and tooling set, Proton deploys their applications. To monitor their applications that are running on Proton, developers need permissions to the service create, list, update and delete API operations and the service instance list and update API operations. To learn more about Proton, see the Proton User Guide.  Ensuring Idempotency  When you make a mutating API request, the request typically returns a result before the asynchronous workflows of the operation are complete. Operations might also time out or encounter other server issues before they're complete, even if the request already returned a result. This might make it difficult to determine whether the request succeeded. Moreover, you might need to retry the request multiple times to ensure that the operation completes successfully. However, if the original request and the subsequent retries are successful, the operation occurs multiple times. This means that you might create more resources than you intended.  Idempotency ensures that an API request action completes no more than one time. With an idempotent request, if the original request action completes successfully, any subsequent retries complete successfully without performing any further actions. However, the result might contain updated information, such as the current creation status. The following lists of APIs are grouped according to methods that ensure idempotency.  Idempotent create APIs with a client token  The API actions in this list support idempotency with the use of a client token. The corresponding Amazon Web Services CLI commands also support idempotency using a client token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request using one of these actions, specify a client token in the request. We recommend that you don't reuse the same client token for other API requests. If you don\u2019t provide a client token for these APIs, a default client token is automatically provided by SDKs. Given a request action that has succeeded: If you retry the request using the same client token and the same parameters, the retry succeeds without performing any further actions other than returning the original resource detail data in the response. If you retry the request using the same client token, but one or more of the parameters are different, the retry throws a ValidationException with an IdempotentParameterMismatch error. Client tokens expire eight hours after a request is made. If you retry the request with the expired token, a new resource is created. If the original resource is deleted and you retry the request, a new resource is created. Idempotent create APIs with a client token:   CreateEnvironmentTemplateVersion   CreateServiceTemplateVersion   CreateEnvironmentAccountConnection    Idempotent create APIs  Given a request action that has succeeded: If you retry the request with an API from this group, and the original resource hasn't been modified, the retry succeeds without performing any further actions other than returning the original resource detail data in the response. If the original resource has been modified, the retry throws a ConflictException. If you retry with different input parameters, the retry throws a ValidationException with an IdempotentParameterMismatch error. Idempotent create APIs:   CreateEnvironmentTemplate   CreateServiceTemplate   CreateEnvironment   CreateService    Idempotent delete APIs  Given a request action that has succeeded: When you retry the request with an API from this group and the resource was deleted, its metadata is returned in the response. If you retry and the resource doesn't exist, the response is empty. In both cases, the retry succeeds. Idempotent delete APIs:   DeleteEnvironmentTemplate   DeleteEnvironmentTemplateVersion   DeleteServiceTemplate   DeleteServiceTemplateVersion   DeleteEnvironmentAccountConnection    Asynchronous idempotent delete APIs  Given a request action that has succeeded: If you retry the request with an API from this group, if the original request delete operation status is DELETE_IN_PROGRESS, the retry returns the resource detail data in the response without performing any further actions. If the original request delete operation is complete, a retry returns an empty response. Asynchronous idempotent delete APIs:   DeleteEnvironment   DeleteService",
      loadSpec: "aws/proton",
    },
    {
      name: "qapps",
      description:
        "The Amazon Q Apps feature capability within Amazon Q Business allows web experience users to create lightweight, purpose-built AI apps to fulfill specific tasks from within their web experience. For example, users can create a Q App that exclusively generates marketing-related content to improve your marketing team's productivity or a Q App for writing customer emails and creating promotional content using a certain style of voice, tone, and branding. For more information on the capabilities, see Amazon Q Apps capabilities in the Amazon Q Business User Guide.  For an overview of the Amazon Q App APIs, see Overview of Amazon Q Apps API operations. For information about the IAM access control permissions you need to use the Amazon Q Apps API, see  IAM role for the Amazon Q Business web experience including Amazon Q Apps in the Amazon Q Business User Guide",
      loadSpec: "aws/qapps",
    },
    {
      name: "qbusiness",
      description:
        "This is the Amazon Q Business API Reference. Amazon Q Business is a fully managed, generative-AI powered enterprise chat assistant that you can deploy within your organization. Amazon Q Business enhances employee productivity by supporting key tasks such as question-answering, knowledge discovery, writing email messages, summarizing text, drafting document outlines, and brainstorming ideas. Users ask questions of Amazon Q Business and get answers that are presented in a conversational manner. For an introduction to the service, see the  Amazon Q Business User Guide . For an overview of the Amazon Q Business APIs, see Overview of Amazon Q Business API operations. For information about the IAM access control permissions you need to use this API, see IAM roles for Amazon Q Business in the Amazon Q Business User Guide. The following resources provide additional information about using the Amazon Q Business API:     Setting up for Amazon Q Business       Amazon Q Business CLI Reference       Amazon Web Services General Reference",
      loadSpec: "aws/qbusiness",
    },
    {
      name: "qconnect",
      description:
        "Amazon Q actions     Amazon Q data types      Powered by Amazon Bedrock: Amazon Web Services implements automated abuse detection. Because Amazon Q in Connect is built on Amazon Bedrock, users can take full advantage of the controls implemented in Amazon Bedrock to enforce safety, security, and the responsible use of artificial intelligence (AI).  Amazon Q in Connect is a generative AI customer service assistant. It is an LLM-enhanced evolution of Amazon Connect Wisdom that delivers real-time recommendations to help contact center agents resolve customer issues quickly and accurately. Amazon Q in Connect automatically detects customer intent during calls and chats using conversational analytics and natural language understanding (NLU). It then provides agents with immediate, real-time generative responses and suggested actions, and links to relevant documents and articles. Agents can also query Amazon Q in Connect directly using natural language or keywords to answer customer requests. Use the Amazon Q in Connect APIs to create an assistant and a knowledge base, for example, or manage content by uploading custom files. For more information, see Use Amazon Q in Connect for generative AI powered agent assistance in real-time in the Amazon Connect Administrator Guide",
      loadSpec: "aws/qconnect",
    },
    {
      name: "qldb",
      description: "The resource management API for Amazon QLDB",
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
        "Amazon QuickSight API Reference Amazon QuickSight is a fully managed, serverless business intelligence service for the Amazon Web Services Cloud that makes it easy to extend data and insights to every user in your organization. This API reference contains documentation for a programming interface that you can use to manage Amazon QuickSight",
      loadSpec: "aws/quicksight",
    },
    {
      name: "ram",
      description:
        "This is the Resource Access Manager API Reference. This documentation provides descriptions and syntax for each of the actions and data types in RAM. RAM is a service that helps you securely share your Amazon Web Services resources to other Amazon Web Services accounts. If you use Organizations to manage your accounts, then you can share your resources with your entire organization or to organizational units (OUs). For supported resource types, you can also share resources with individual Identity and Access Management (IAM) roles and users.  To learn more about RAM, see the following resources:    Resource Access Manager product page     Resource Access Manager User Guide",
      loadSpec: "aws/ram",
    },
    {
      name: "rbin",
      description:
        "This is the Recycle Bin API Reference. This documentation provides descriptions and syntax for each of the actions and data types in Recycle Bin. Recycle Bin is a resource recovery feature that enables you to restore accidentally deleted snapshots and EBS-backed AMIs. When using Recycle Bin, if your resources are deleted, they are retained in the Recycle Bin for a time period that you specify. You can restore a resource from the Recycle Bin at any time before its retention period expires. After you restore a resource from the Recycle Bin, the resource is removed from the Recycle Bin, and you can then use it in the same way you use any other resource of that type in your account. If the retention period expires and the resource is not restored, the resource is permanently deleted from the Recycle Bin and is no longer available for recovery. For more information about Recycle Bin, see  Recycle Bin in the Amazon Elastic Compute Cloud User Guide",
      loadSpec: "aws/rbin",
    },
    {
      name: "rds",
      description:
        "Amazon Relational Database Service  Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational database and manages common database administration tasks, freeing up developers to focus on what makes their applications and businesses unique. Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, Oracle, Db2, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS is flexible: you can scale your DB instance's compute resources and storage capacity to meet your application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for the resources you use. This interface reference for Amazon RDS contains documentation for a programming or command line interface you can use to manage Amazon RDS. Amazon RDS is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. In this reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot, or during the maintenance window. The reference structure is as follows, and we list following some related topics from the user guide.  Amazon RDS API Reference    For the alphabetical list of API actions, see API Actions.   For the alphabetical list of data types, see Data Types.   For a list of common query parameters, see Common Parameters.   For descriptions of the error codes, see Common Errors.    Amazon RDS User Guide    For a summary of the Amazon RDS interfaces, see Available RDS Interfaces.   For more information about how to use the Query API, see Using the Query API",
      loadSpec: "aws/rds",
    },
    {
      name: "rds-data",
      description:
        "RDS Data API Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora DB cluster. To run these statements, you use the RDS Data API (Data API). Data API is available with the following types of Aurora databases:   Aurora PostgreSQL - Serverless v2, provisioned, and Serverless v1   Aurora MySQL - Serverless v2, provisioned, and Serverless v1   For more information about the Data API, see Using RDS Data API in the Amazon Aurora User Guide",
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
        "You can use the Amazon Redshift Data API to run queries on Amazon Redshift tables. You can run SQL statements, which are committed if the statement succeeds.  For more information about the Amazon Redshift Data API and CLI usage examples, see Using the Amazon Redshift Data API in the Amazon Redshift Management Guide",
      loadSpec: "aws/redshift-data",
    },
    {
      name: "redshift-serverless",
      description:
        "This is an interface reference for Amazon Redshift Serverless. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift Serverless.  Amazon Redshift Serverless automatically provisions data warehouse capacity and intelligently scales the underlying resources based on workload demands. Amazon Redshift Serverless adjusts capacity in seconds to deliver consistently high performance and simplified operations for even the most demanding and volatile workloads. Amazon Redshift Serverless lets you focus on using your data to acquire new insights for your business and customers.   To learn more about Amazon Redshift Serverless, see What is Amazon Redshift Serverless?",
      loadSpec: "aws/redshift-serverless",
    },
    {
      name: "rekognition",
      description:
        "This is the API Reference for Amazon Rekognition Image, Amazon Rekognition Custom Labels, Amazon Rekognition Stored Video, Amazon Rekognition Streaming Video. It provides descriptions of actions, data types, common parameters, and common errors.  Amazon Rekognition Image     AssociateFaces     CompareFaces     CreateCollection     CreateUser     DeleteCollection     DeleteFaces     DeleteUser     DescribeCollection     DetectFaces     DetectLabels     DetectModerationLabels     DetectProtectiveEquipment     DetectText     DisassociateFaces     GetCelebrityInfo     GetMediaAnalysisJob     IndexFaces     ListCollections     ListMediaAnalysisJob     ListFaces     ListUsers     RecognizeCelebrities     SearchFaces     SearchFacesByImage     SearchUsers     SearchUsersByImage     StartMediaAnalysisJob     Amazon Rekognition Custom Labels     CopyProjectVersion     CreateDataset     CreateProject     CreateProjectVersion     DeleteDataset     DeleteProject     DeleteProjectPolicy     DeleteProjectVersion     DescribeDataset     DescribeProjects     DescribeProjectVersions     DetectCustomLabels     DistributeDatasetEntries     ListDatasetEntries     ListDatasetLabels     ListProjectPolicies     PutProjectPolicy     StartProjectVersion     StopProjectVersion     UpdateDatasetEntries     Amazon Rekognition Video Stored Video     GetCelebrityRecognition     GetContentModeration     GetFaceDetection     GetFaceSearch     GetLabelDetection     GetPersonTracking     GetSegmentDetection     GetTextDetection     StartCelebrityRecognition     StartContentModeration     StartFaceDetection     StartFaceSearch     StartLabelDetection     StartPersonTracking     StartSegmentDetection     StartTextDetection     Amazon Rekognition Video Streaming Video     CreateStreamProcessor     DeleteStreamProcessor     DescribeStreamProcessor     ListStreamProcessors     StartStreamProcessor     StopStreamProcessor     UpdateStreamProcessor",
      loadSpec: "aws/rekognition",
    },
    {
      name: "repostspace",
      description:
        "AWS re:Post Private is a private version of AWS re:Post for enterprises with Enterprise Support or Enterprise On-Ramp Support plans. It provides access to knowledge and experts to accelerate cloud adoption and increase developer productivity. With your organization-specific private re:Post, you can build an organization-specific developer community that drives efficiencies at scale and provides access to valuable knowledge resources. Additionally, re:Post Private centralizes trusted AWS technical content and offers private discussion forums to improve how your teams collaborate internally and with AWS to remove technical obstacles, accelerate innovation, and scale more efficiently in the cloud",
      loadSpec: "aws/repostspace",
    },
    {
      name: "resiliencehub",
      description:
        "Resilience Hub helps you proactively prepare and protect your Amazon Web Services applications from disruptions. It offers continual resiliency assessment and validation that integrates into your software development lifecycle. This enables you to uncover resiliency weaknesses, ensure recovery time objective (RTO) and recovery point objective (RPO) targets for your applications are met, and resolve issues before they are released into production",
      loadSpec: "aws/resiliencehub",
    },
    {
      name: "resource-explorer-2",
      description:
        "Amazon Web Services Resource Explorer is a resource search and discovery service. By using Resource Explorer, you can explore your resources using an internet search engine-like experience. Examples of resources include Amazon Relational Database Service (Amazon RDS) instances, Amazon Simple Storage Service (Amazon S3) buckets, or Amazon DynamoDB tables. You can search for your resources using resource metadata like names, tags, and IDs. Resource Explorer can search across all of the Amazon Web Services Regions in your account in which you turn the service on, to simplify your cross-Region workloads. Resource Explorer scans the resources in each of the Amazon Web Services Regions in your Amazon Web Services account in which you turn on Resource Explorer. Resource Explorer creates and maintains an index in each Region, with the details of that Region's resources. You can search across all of the indexed Regions in your account by designating one of your Amazon Web Services Regions to contain the aggregator index for the account. When you promote a local index in a Region to become the aggregator index for the account, Resource Explorer automatically replicates the index information from all local indexes in the other Regions to the aggregator index. Therefore, the Region with the aggregator index has a copy of all resource information for all Regions in the account where you turned on Resource Explorer. As a result, views in the aggregator index Region include resources from all of the indexed Regions in your account. For more information about Amazon Web Services Resource Explorer, including how to enable and configure the service, see the Amazon Web Services Resource Explorer User Guide",
      loadSpec: "aws/resource-explorer-2",
    },
    {
      name: "resource-groups",
      description:
        "Resource Groups lets you organize Amazon Web Services resources such as Amazon Elastic Compute Cloud instances, Amazon Relational Database Service databases, and Amazon Simple Storage Service buckets into groups using criteria that you define as tags. A resource group is a collection of resources that match the resource types specified in a query, and share one or more tags or portions of tags. You can create a group of resources based on their roles in your cloud infrastructure, lifecycle stages, regions, application layers, or virtually any criteria. Resource Groups enable you to automate management tasks, such as those in Amazon Web Services Systems Manager Automation documents, on tag-related resources in Amazon Web Services Systems Manager. Groups of tagged resources also let you quickly view a custom console in Amazon Web Services Systems Manager that shows Config compliance and other monitoring data about member resources. To create a resource group, build a resource query, and specify tags that identify the criteria that members of the group have in common. Tags are key-value pairs. For more information about Resource Groups, see the Resource Groups User Guide. Resource Groups uses a REST-compliant API that you can use to perform the following types of operations.   Create, Read, Update, and Delete (CRUD) operations on resource groups and resource query entities   Applying, editing, and removing tags from resource groups   Resolving resource group member Amazon resource names (ARN)s so they can be returned as search results   Getting data about resources that are members of a group   Searching Amazon Web Services resources based on a resource query",
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
      name: "rolesanywhere",
      description:
        "Identity and Access Management Roles Anywhere provides a secure way for your workloads such as servers, containers, and applications that run outside of Amazon Web Services to obtain temporary Amazon Web Services credentials. Your workloads can use the same IAM policies and roles you have for native Amazon Web Services applications to access Amazon Web Services resources. Using IAM Roles Anywhere eliminates the need to manage long-term credentials for workloads running outside of Amazon Web Services.  To use IAM Roles Anywhere, your workloads must use X.509 certificates issued by their certificate authority (CA). You register the CA with IAM Roles Anywhere as a trust anchor to establish trust between your public key infrastructure (PKI) and IAM Roles Anywhere. If you don't manage your own PKI system, you can use Private Certificate Authority to create a CA and then use that to establish trust with IAM Roles Anywhere.  This guide describes the IAM Roles Anywhere operations that you can call programmatically. For more information about IAM Roles Anywhere, see the IAM Roles Anywhere User Guide",
      loadSpec: "aws/rolesanywhere",
    },
    {
      name: "route53",
      description:
        "Amazon Route\u00a053 is a highly available and scalable Domain Name System (DNS) web service. You can use Route\u00a053 to:   Register domain names. For more information, see How domain registration works.   Route internet traffic to the resources for your domain For more information, see How internet traffic is routed to your website or web application.   Check the health of your resources. For more information, see How Route\u00a053 checks the health of your resources",
      loadSpec: "aws/route53",
    },
    {
      name: "route53-recovery-cluster",
      description:
        "Welcome to the Routing Control (Recovery Cluster) API Reference Guide for Amazon Route 53 Application Recovery Controller. With Route 53 ARC, you can use routing control with extreme reliability to recover applications by rerouting traffic across Availability Zones or Amazon Web Services Regions. Routing controls are simple on/off switches hosted on a highly available cluster in Route 53 ARC. A cluster provides a set of five redundant Regional endpoints against which you can run API calls to get or update the state of routing controls. To implement failover, you set one routing control to ON and another one to OFF, to reroute traffic from one Availability Zone or Amazon Web Services Region to another.   Be aware that you must specify a Regional endpoint for a cluster when you work with API cluster operations to get or update routing control states in Route 53 ARC. In addition, you must specify the US West (Oregon) Region for Route 53 ARC API calls. For example, use the parameter --region us-west-2 with AWS CLI commands. For more information, see  Get and update routing control states using the API in the Amazon Route 53 Application Recovery Controller Developer Guide. This API guide includes information about the API operations for how to get and update routing control states in Route 53 ARC. To work with routing control in Route 53 ARC, you must first create the required components (clusters, control panels, and routing controls) using the recovery cluster configuration API. For more information about working with routing control in Route 53 ARC, see the following:   Create clusters, control panels, and routing controls by using API operations. For more information, see the Recovery Control Configuration API Reference Guide for Amazon Route 53 Application Recovery Controller.   Learn about the components in recovery control, including clusters, routing controls, and control panels, and how to work with Route 53 ARC in the Amazon Web Services console. For more information, see  Recovery control components in the Amazon Route 53 Application Recovery Controller Developer Guide.   Route 53 ARC also provides readiness checks that continually audit resources to help make sure that your applications are scaled and ready to handle failover traffic. For more information about the related API operations, see the Recovery Readiness API Reference Guide for Amazon Route 53 Application Recovery Controller.   For more information about creating resilient applications and preparing for recovery readiness with Route 53 ARC, see the Amazon Route 53 Application Recovery Controller Developer Guide",
      loadSpec: "aws/route53-recovery-cluster",
    },
    {
      name: "route53-recovery-control-config",
      description:
        "Recovery Control Configuration API Reference for Amazon Route 53 Application Recovery Controller",
      loadSpec: "aws/route53-recovery-control-config",
    },
    {
      name: "route53-recovery-readiness",
      description: "Recovery readiness",
      loadSpec: "aws/route53-recovery-readiness",
    },
    {
      name: "route53domains",
      description:
        "Amazon Route 53 API actions let you register domain names and perform related operations",
      loadSpec: "aws/route53domains",
    },
    {
      name: "route53profiles",
      description:
        "With Amazon Route 53 Profiles you can share Route 53 configurations with VPCs and AWS accounts",
      loadSpec: "aws/route53profiles",
    },
    {
      name: "route53resolver",
      description:
        "When you create a VPC using Amazon VPC, you automatically get DNS resolution within the VPC from Route 53 Resolver. By default, Resolver answers DNS queries for VPC domain names such as domain names for EC2 instances or Elastic Load Balancing load balancers. Resolver performs recursive lookups against public name servers for all other domain names. You can also configure DNS resolution between your VPC and your network over a Direct Connect or VPN connection:  Forward DNS queries from resolvers on your network to Route 53 Resolver  DNS resolvers on your network can forward DNS queries to Resolver in a specified VPC. This allows your DNS resolvers to easily resolve domain names for Amazon Web Services resources such as EC2 instances or records in a Route 53 private hosted zone. For more information, see How DNS Resolvers on Your Network Forward DNS Queries to Route 53 Resolver in the Amazon Route 53 Developer Guide.  Conditionally forward queries from a VPC to resolvers on your network  You can configure Resolver to forward queries that it receives from EC2 instances in your VPCs to DNS resolvers on your network. To forward selected queries, you create Resolver rules that specify the domain names for the DNS queries that you want to forward (such as example.com), and the IP addresses of the DNS resolvers on your network that you want to forward the queries to. If a query matches multiple rules (example.com, acme.example.com), Resolver chooses the rule with the most specific match (acme.example.com) and forwards the query to the IP addresses that you specified in that rule. For more information, see How Route 53 Resolver Forwards DNS Queries from Your VPCs to Your Network in the Amazon Route 53 Developer Guide. Like Amazon VPC, Resolver is Regional. In each Region where you have VPCs, you can choose whether to forward queries from your VPCs to your network (outbound queries), from your network to your VPCs (inbound queries), or both",
      loadSpec: "aws/route53resolver",
    },
    {
      name: "rum",
      description:
        "With Amazon CloudWatch RUM, you can perform real-user monitoring to collect client-side data about your web application performance from actual user sessions in real time. The data collected includes page load times, client-side errors, and user behavior. When you view this data, you can see it all aggregated together and also see breakdowns by the browsers and devices that your customers use. You can use the collected data to quickly identify and debug client-side performance issues. CloudWatch RUM helps you visualize anomalies in your application performance and find relevant debugging data such as error messages, stack traces, and user sessions. You can also use RUM to understand the range of end-user impact including the number of users, geolocations, and browsers used",
      loadSpec: "aws/rum",
    },
    {
      name: "s3control",
      description:
        "Amazon Web Services S3 Control provides access to Amazon S3 control plane actions",
      loadSpec: "aws/s3control",
    },
    {
      name: "s3outposts",
      description:
        "Amazon S3 on Outposts provides access to S3 on Outposts operations",
      loadSpec: "aws/s3outposts",
    },
    {
      name: "s3tables",
      description:
        "An Amazon S3 table represents a structured dataset consisting of tabular data in Apache Parquet format and related metadata. This data is stored inside an S3 table as a subresource. All tables in a table bucket are stored in the Apache Iceberg table format. Through integration with the AWS Glue Data Catalog you can interact with your tables using AWS analytics services, such as Amazon Athena and Amazon Redshift. Amazon S3 manages maintenance of your tables through automatic file compaction and snapshot management. For more information, see Amazon S3 table buckets",
      loadSpec: "aws/s3tables",
    },
    {
      name: "sagemaker",
      description:
        "Provides APIs for creating and managing SageMaker resources.  Other Resources:    SageMaker Developer Guide     Amazon Augmented AI Runtime API Reference",
      loadSpec: "aws/sagemaker",
    },
    {
      name: "sagemaker-a2i-runtime",
      description:
        "Amazon Augmented AI (Amazon A2I) adds the benefit of human judgment to any machine learning application. When an AI application can't evaluate data with a high degree of confidence, human reviewers can take over. This human review is called a human review workflow. To create and start a human review workflow, you need three resources: a worker task template, a flow definition, and a human loop. For information about these resources and prerequisites for using Amazon A2I, see Get Started with Amazon Augmented AI in the Amazon SageMaker Developer Guide. This API reference includes information about API actions and data types that you can use to interact with Amazon A2I programmatically. Use this guide to:   Start a human loop with the StartHumanLoop operation when using Amazon A2I with a custom task type. To learn more about the difference between custom and built-in task types, see Use Task Types . To learn how to start a human loop using this API, see Create and Start a Human Loop for a Custom Task Type  in the Amazon SageMaker Developer Guide.   Manage your human loops. You can list all human loops that you have created, describe individual human loops, and stop and delete human loops. To learn more, see Monitor and Manage Your Human Loop  in the Amazon SageMaker Developer Guide.   Amazon A2I integrates APIs from various AWS services to create and start human review workflows for those services. To learn how Amazon A2I uses these APIs, see Use APIs in Amazon A2I in the Amazon SageMaker Developer Guide",
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
      name: "sagemaker-geospatial",
      description:
        "Provides APIs for creating and managing SageMaker geospatial resources",
      loadSpec: "aws/sagemaker-geospatial",
    },
    {
      name: "sagemaker-metrics",
      description:
        "Contains all data plane API operations and data types for Amazon SageMaker Metrics. Use these APIs to put and retrieve (get) features related to your training run.    BatchPutMetrics",
      loadSpec: "aws/sagemaker-metrics",
    },
    {
      name: "sagemaker-runtime",
      description: "The Amazon SageMaker runtime API",
      loadSpec: "aws/sagemaker-runtime",
    },
    {
      name: "savingsplans",
      description:
        "Savings Plans are a pricing model that offer significant savings on Amazon Web Services usage (for example, on Amazon EC2 instances). You commit to a consistent amount of usage per hour, in the specified currency, for a term of one or three years, and receive a lower price for that usage. For more information, see the Amazon Web Services Savings Plans User Guide",
      loadSpec: "aws/savingsplans",
    },
    {
      name: "scheduler",
      description:
        "Amazon EventBridge Scheduler is a serverless scheduler that allows you to create, run, and manage tasks from one central, managed service. EventBridge Scheduler delivers your tasks reliably, with built-in mechanisms that adjust your schedules based on the availability of downstream targets. The following reference lists the available API actions, and data types for EventBridge Scheduler",
      loadSpec: "aws/scheduler",
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
        "Amazon Web Services Secrets Manager Amazon Web Services Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets. This guide provides descriptions of the Secrets Manager API. For more information about using this service, see the Amazon Web Services Secrets Manager User Guide.  API Version  This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17. For a list of endpoints, see Amazon Web Services Secrets Manager endpoints.  Support and Feedback for Amazon Web Services Secrets Manager  We welcome your feedback. Send your comments to awssecretsmanager-feedback@amazon.com, or post your feedback and questions in the Amazon Web Services Secrets Manager Discussion Forum. For more information about the Amazon Web Services Discussion Forums, see Forums Help.  Logging API Requests  Amazon Web Services Secrets Manager supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information that's collected by Amazon Web Services CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the request, when it was made, and so on. For more about Amazon Web Services Secrets Manager and support for Amazon Web Services CloudTrail, see Logging Amazon Web Services Secrets Manager Events with Amazon Web Services CloudTrail in the Amazon Web Services Secrets Manager User Guide. To learn more about CloudTrail, including enabling it and find your log files, see the Amazon Web Services CloudTrail User Guide",
      loadSpec: "aws/secretsmanager",
    },
    {
      name: "security-ir",
      description:
        "This guide provides documents the action and response elements for customer use of the service",
      loadSpec: "aws/security-ir",
    },
    {
      name: "securityhub",
      description:
        "Security Hub provides you with a comprehensive view of your security state in Amazon Web Services and helps you assess your Amazon Web Services environment against security industry standards and best practices. Security Hub collects security data across Amazon Web Services accounts, Amazon Web Services services, and supported third-party products and helps you analyze your security trends and identify the highest priority security issues. To help you manage the security state of your organization, Security Hub supports multiple security standards. These include the Amazon Web Services Foundational Security Best Practices (FSBP) standard developed by Amazon Web Services, and external compliance frameworks such as the Center for Internet Security (CIS), the Payment Card Industry Data Security Standard (PCI DSS), and the National Institute of Standards and Technology (NIST). Each standard includes several security controls, each of which represents a security best practice. Security Hub runs checks against security controls and generates control findings to help you assess your compliance against security best practices. In addition to generating control findings, Security Hub also receives findings from other Amazon Web Services services, such as Amazon GuardDuty and Amazon Inspector, and supported third-party products. This gives you a single pane of glass into a variety of security-related issues. You can also send Security Hub findings to other Amazon Web Services services and supported third-party products. Security Hub offers automation features that help you triage and remediate security issues. For example, you can use automation rules to automatically update critical findings when a security check fails. You can also leverage the integration with Amazon EventBridge to trigger automatic responses to specific findings. This guide, the Security Hub API Reference, provides information about the Security Hub API. This includes supported resources, HTTP methods, parameters, and schemas. If you're new to Security Hub, you might find it helpful to also review the  Security Hub User Guide . The user guide explains key concepts and provides procedures that demonstrate how to use Security Hub features. It also provides information about topics such as integrating Security Hub with other Amazon Web Services services. In addition to interacting with Security Hub by making calls to the Security Hub API, you can use a current version of an Amazon Web Services command line tool or SDK. Amazon Web Services provides tools and SDKs that consist of libraries and sample code for various languages and platforms, such as PowerShell, Java, Go, Python, C++, and .NET. These tools and SDKs provide convenient, programmatic access to Security Hub and other Amazon Web Services services . They also handle tasks such as signing requests, managing errors, and retrying requests automatically. For information about installing and using the Amazon Web Services tools and SDKs, see Tools to Build on Amazon Web Services. With the exception of operations that are related to central configuration, Security Hub API requests are executed only in the Amazon Web Services Region that is currently active or in the specific Amazon Web Services Region that you specify in your request. Any configuration or settings change that results from the operation is applied only to that Region. To make the same change in other Regions, call the same API operation in each Region in which you want to apply the change. When you use central configuration, API requests for enabling Security Hub, standards, and controls are executed in the home Region and all linked Regions. For a list of central configuration operations, see the Central configuration terms and concepts section of the Security Hub User Guide. The following throttling limits apply to Security Hub API operations.    BatchEnableStandards - RateLimit of 1 request per second. BurstLimit of 1 request per second.    GetFindings - RateLimit of 3 requests per second. BurstLimit of 6 requests per second.    BatchImportFindings - RateLimit of 10 requests per second. BurstLimit of 30 requests per second.    BatchUpdateFindings - RateLimit of 10 requests per second. BurstLimit of 30 requests per second.    UpdateStandardsControl - RateLimit of 1 request per second. BurstLimit of 5 requests per second.   All other operations - RateLimit of 10 requests per second. BurstLimit of 30 requests per second",
      loadSpec: "aws/securityhub",
    },
    {
      name: "securitylake",
      description:
        "Amazon Security Lake is a fully managed security data lake service. You can use Security Lake to automatically centralize security data from cloud, on-premises, and custom sources into a data lake that's stored in your Amazon Web Services account. Amazon Web Services Organizations is an account management service that lets you consolidate multiple Amazon Web Services accounts into an organization that you create and centrally manage. With Organizations, you can create member accounts and invite existing accounts to join your organization. Security Lake helps you analyze security data for a more complete understanding of your security posture across the entire organization. It can also help you improve the protection of your workloads, applications, and data. The data lake is backed by Amazon Simple Storage Service (Amazon S3) buckets, and you retain ownership over your data. Amazon Security Lake integrates with CloudTrail, a service that provides a record of actions taken by a user, role, or an Amazon Web Services service. In Security Lake, CloudTrail captures API calls for Security Lake as events. The calls captured include calls from the Security Lake console and code calls to the Security Lake API operations. If you create a trail, you can enable continuous delivery of CloudTrail events to an Amazon S3 bucket, including events for Security Lake. If you don't configure a trail, you can still view the most recent events in the CloudTrail console in Event history. Using the information collected by CloudTrail you can determine the request that was made to Security Lake, the IP address from which the request was made, who made the request, when it was made, and additional details. To learn more about Security Lake information in CloudTrail, see the Amazon Security Lake User Guide. Security Lake automates the collection of security-related log and event data from integrated Amazon Web Services services and third-party services. It also helps you manage the lifecycle of data with customizable retention and replication settings. Security Lake converts ingested data into Apache Parquet format and a standard open-source schema called the Open Cybersecurity Schema Framework (OCSF). Other Amazon Web Services services and third-party services can subscribe to the data that's stored in Security Lake for incident response and security data analytics",
      loadSpec: "aws/securitylake",
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
        "With Service Quotas, you can view and manage your quotas easily as your Amazon Web Services workloads grow. Quotas, also referred to as limits, are the maximum number of resources that you can create in your Amazon Web Services account. For more information, see the Service Quotas User Guide",
      loadSpec: "aws/service-quotas",
    },
    {
      name: "servicecatalog",
      description:
        "Service Catalog  Service Catalog enables organizations to create and manage catalogs of IT services that are approved for Amazon Web Services. To get the most out of this documentation, you should be familiar with the terminology discussed in Service Catalog Concepts",
      loadSpec: "aws/servicecatalog",
    },
    {
      name: "servicecatalog-appregistry",
      description:
        "Amazon Web Services Service Catalog AppRegistry enables organizations to understand the application context of their Amazon Web Services resources. AppRegistry provides a repository of your applications, their resources, and the application metadata that you use within your enterprise",
      loadSpec: "aws/servicecatalog-appregistry",
    },
    {
      name: "servicediscovery",
      description:
        "Cloud Map With Cloud Map, you can configure public DNS, private DNS, or HTTP namespaces that your microservice applications run in. When an instance becomes available, you can call the Cloud Map API to register the instance with Cloud Map. For public or private DNS namespaces, Cloud Map automatically creates DNS records and an optional health check. Clients that submit public or private DNS queries, or HTTP requests, for the service receive an answer that contains up to eight healthy records",
      loadSpec: "aws/servicediscovery",
    },
    {
      name: "ses",
      description:
        "Amazon Simple Email Service  This document contains reference information for the Amazon Simple Email Service (Amazon SES) API, version 2010-12-01. This document is best used in conjunction with the Amazon SES Developer Guide.    For a list of Amazon SES endpoints to use in service requests, see Regions and Amazon SES in the Amazon SES Developer Guide.  This documentation contains reference information related to the following:    Amazon SES API Actions     Amazon SES API Data Types     Common Parameters     Common Errors",
      loadSpec: "aws/ses",
    },
    {
      name: "sesv2",
      description:
        "Amazon SES API v2  Amazon SES is an Amazon Web Services service that you can use to send email messages to your customers. If you're new to Amazon SES API v2, you might find it helpful to review the Amazon Simple Email Service Developer Guide. The Amazon SES Developer Guide provides information and code samples that demonstrate how to use Amazon SES API v2 features programmatically",
      loadSpec: "aws/sesv2",
    },
    {
      name: "shield",
      description:
        "Shield Advanced This is the Shield Advanced API Reference. This guide is for developers who need detailed information about the Shield Advanced API actions, data types, and errors. For detailed information about WAF and Shield Advanced features and an overview of how to use the WAF and Shield Advanced APIs, see the WAF and Shield Developer Guide",
      loadSpec: "aws/shield",
    },
    {
      name: "signer",
      description:
        "AWS Signer is a fully managed code-signing service to help you ensure the trust and integrity of your code.  Signer supports the following applications: With code signing for AWS Lambda, you can sign AWS Lambda deployment packages. Integrated support is provided for Amazon S3, Amazon CloudWatch, and AWS CloudTrail. In order to sign code, you create a signing profile and then use Signer to sign Lambda zip files in S3.  With code signing for IoT, you can sign code for any IoT device that is supported by AWS. IoT code signing is available for Amazon FreeRTOS and AWS IoT Device Management, and is integrated with AWS Certificate Manager (ACM). In order to sign code, you import a third-party code-signing certificate using ACM, and use that to sign updates in Amazon FreeRTOS and AWS IoT Device Management.  With Signer and the Notation CLI from the Notary\u2028 Project, you can sign container images stored in a container registry such as Amazon Elastic Container Registry (ECR). The signatures are stored in the registry alongside the images, where they are available for verifying image authenticity and integrity. For more information about Signer, see the AWS Signer Developer Guide",
      loadSpec: "aws/signer",
    },
    {
      name: "simspaceweaver",
      description:
        "SimSpace Weaver (SimSpace Weaver) is a service that you can use to build and run large-scale spatial simulations in the Amazon Web Services Cloud. For example, you can create crowd simulations, large real-world environments, and immersive and interactive experiences. For more information about SimSpace Weaver, see the  SimSpace Weaver User Guide . This API reference describes the API operations and data types that you can use to communicate directly with SimSpace Weaver. SimSpace Weaver also provides the SimSpace Weaver app SDK, which you use for app development. The SimSpace Weaver app SDK API reference is included in the SimSpace Weaver app SDK documentation. This documentation is part of the SimSpace Weaver app SDK distributable package",
      loadSpec: "aws/simspaceweaver",
    },
    {
      name: "sms",
      description:
        "Product update  We recommend Amazon Web Services Application Migration Service (Amazon Web Services MGN) as the primary migration service for lift-and-shift migrations. If Amazon Web Services MGN is unavailable in a specific Amazon Web Services Region, you can use the Server Migration Service APIs through March 2023.  Server Migration Service (Server Migration Service) makes it easier and faster for you to migrate your on-premises workloads to Amazon Web Services. To learn more about Server Migration Service, see the following resources:    Server Migration Service product page     Server Migration Service User Guide",
      loadSpec: "aws/sms",
    },
    {
      name: "sms-voice",
      description: "Pinpoint SMS and Voice Messaging public facing APIs",
      loadSpec: "aws/sms-voice",
    },
    {
      name: "snow-device-management",
      description: "Amazon Web Services Snow Device Management documentation",
      loadSpec: "aws/snow-device-management",
    },
    {
      name: "snowball",
      description:
        "The Amazon Web Services Snow Family provides a petabyte-scale data transport solution that uses secure devices to transfer large amounts of data between your on-premises data centers and Amazon Simple Storage Service (Amazon S3). The Snow Family commands described here provide access to the same functionality that is available in the Amazon Web Services Snow Family Management Console, which enables you to create and manage jobs for a Snow Family device. To transfer data locally with a Snow Family device, you'll need to use the Snowball Edge client or the Amazon S3 API Interface for Snowball or OpsHub for Snow Family. For more information, see the User Guide",
      loadSpec: "aws/snowball",
    },
    {
      name: "sns",
      description:
        "Amazon Simple Notification Service Amazon Simple Notification Service (Amazon SNS) is a web service that enables you to build distributed web-enabled applications. Applications can use Amazon SNS to easily push real-time notification messages to interested subscribers over multiple delivery protocols. For more information about this product see the Amazon SNS product page. For detailed information about Amazon SNS features and their associated API calls, see the Amazon SNS Developer Guide.  For information on the permissions you need to use this API, see Identity and access management in Amazon SNS in the Amazon SNS Developer Guide.  We also provide SDKs that enable you to access Amazon SNS from your preferred programming language. The SDKs contain functionality that automatically takes care of tasks such as: cryptographically signing your service requests, retrying requests, and handling error responses. For a list of available SDKs, go to Tools for Amazon Web Services",
      loadSpec: "aws/sns",
    },
    {
      name: "socialmessaging",
      description:
        "Amazon Web Services End User Messaging Social, also referred to as Social messaging, is a messaging service that enables application developers to incorporate WhatsApp into their existing workflows. The Amazon Web Services End User Messaging Social API provides information about the Amazon Web Services End User Messaging Social API resources, including supported HTTP methods, parameters, and schemas. The Amazon Web Services End User Messaging Social API provides programmatic access to options that are unique to the WhatsApp Business Platform. If you're new to the Amazon Web Services End User Messaging Social API, it's also helpful to review What is Amazon Web Services End User Messaging Social in the Amazon Web Services End User Messaging Social User Guide. The Amazon Web Services End User Messaging Social User Guide provides tutorials, code samples, and procedures that demonstrate how to use Amazon Web Services End User Messaging Social API features programmatically and how to integrate functionality into applications. The guide also provides key information, such as integration with other Amazon Web Services services, and the quotas that apply to use of the service.  Regional availability  The Amazon Web Services End User Messaging Social API is available across several Amazon Web Services Regions and it provides a dedicated endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see Amazon Web Services Service Endpoints and Amazon Web Services End User Messaging endpoints and quotas in the Amazon Web Services General Reference. To learn more about Amazon Web Services Regions, see Managing Amazon Web Services Regions in the Amazon Web Services General Reference. In each Region, Amazon Web Services maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see Amazon Web Services Global Infrastructure",
      loadSpec: "aws/socialmessaging",
    },
    {
      name: "sqs",
      description:
        "Welcome to the Amazon SQS API Reference. Amazon SQS is a reliable, highly-scalable hosted queue for storing messages as they travel between applications or microservices. Amazon SQS moves data between distributed application components and helps you decouple these components. For information on the permissions you need to use this API, see Identity and access management in the Amazon SQS Developer Guide.  You can use Amazon Web Services SDKs to access Amazon SQS using your favorite programming language. The SDKs perform tasks such as the following automatically:   Cryptographically sign your service requests   Retry requests   Handle error responses    Additional information     Amazon SQS Product Page     Amazon SQS Developer Guide     Making API Requests     Amazon SQS Message Attributes     Amazon SQS Dead-Letter Queues       Amazon SQS in the Command Line Interface      Amazon Web Services General Reference     Regions and Endpoints",
      loadSpec: "aws/sqs",
    },
    {
      name: "ssm",
      description:
        "Amazon Web Services Systems Manager is the operations hub for your Amazon Web Services applications and resources and a secure end-to-end management solution for hybrid cloud environments that enables safe and secure operations at scale. This reference is intended to be used with the Amazon Web Services Systems Manager User Guide. To get started, see Setting up Amazon Web Services Systems Manager.  Related resources    For information about each of the capabilities that comprise Systems Manager, see Systems Manager capabilities in the Amazon Web Services Systems Manager User Guide.   For details about predefined runbooks for Automation, a capability of Amazon Web Services Systems Manager, see the  Systems Manager Automation runbook reference .   For information about AppConfig, a capability of Systems Manager, see the  AppConfig User Guide  and the  AppConfig API Reference .   For information about Incident Manager, a capability of Systems Manager, see the  Systems Manager Incident Manager User Guide  and the  Systems Manager Incident Manager API Reference",
      loadSpec: "aws/ssm",
    },
    {
      name: "ssm-contacts",
      description:
        "Systems Manager Incident Manager is an incident management console designed to help users mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An incident is any unplanned interruption or reduction in quality of services. Incident Manager increases incident resolution by notifying responders of impact, highlighting relevant troubleshooting data, and providing collaboration tools to get services back up and running. To achieve the primary goal of reducing the time-to-resolution of critical incidents, Incident Manager automates response plans and enables responder team escalation",
      loadSpec: "aws/ssm-contacts",
    },
    {
      name: "ssm-incidents",
      description:
        "Systems Manager Incident Manager is an incident management console designed to help users mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An incident is any unplanned interruption or reduction in quality of services.  Incident Manager increases incident resolution by notifying responders of impact, highlighting relevant troubleshooting data, and providing collaboration tools to get services back up and running. To achieve the primary goal of reducing the time-to-resolution of critical incidents, Incident Manager automates response plans and enables responder team escalation",
      loadSpec: "aws/ssm-incidents",
    },
    {
      name: "ssm-quicksetup",
      description:
        "Quick Setup helps you quickly configure frequently used services and features with recommended best practices. Quick Setup simplifies setting up services, including Systems Manager, by automating common or recommended tasks",
      loadSpec: "aws/ssm-quicksetup",
    },
    {
      name: "ssm-sap",
      description:
        "This API reference provides descriptions, syntax, and other details about each of the actions and data types for AWS Systems Manager for SAP. The topic for each action shows the API request parameters and responses",
      loadSpec: "aws/ssm-sap",
    },
    {
      name: "sso",
      description:
        "AWS IAM Identity Center (successor to AWS Single Sign-On) Portal is a web service that makes it easy for you to assign user access to IAM Identity Center resources such as the AWS access portal. Users can get AWS account applications and roles assigned to them and get federated into the application.  Although AWS Single Sign-On was renamed, the sso and identitystore API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see IAM Identity Center rename.  This reference guide describes the IAM Identity Center Portal operations that you can call programatically and includes detailed information on data types and errors.  AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms, such as Java, Ruby, .Net, iOS, or Android. The SDKs provide a convenient way to create programmatic access to IAM Identity Center and other AWS services. For more information about the AWS SDKs, including how to download and install them, see Tools for Amazon Web Services",
      loadSpec: "aws/sso",
    },
    {
      name: "sso-admin",
      description:
        "IAM Identity Center (successor to Single Sign-On) helps you securely create, or connect, your workforce identities and manage their access centrally across Amazon Web Services accounts and applications. IAM Identity Center is the recommended approach for workforce authentication and authorization in Amazon Web Services, for organizations of any size and type.  IAM Identity Center uses the sso and identitystore API namespaces.  This reference guide provides information on single sign-on operations which could be used for access management of Amazon Web Services accounts. For information about IAM Identity Center features, see the IAM Identity Center User Guide. Many operations in the IAM Identity Center APIs rely on identifiers for users and groups, known as principals. For more information about how to work with principals and principal IDs in IAM Identity Center, see the Identity Store API Reference.  Amazon Web Services provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a convenient way to create programmatic access to IAM Identity Center and other Amazon Web Services services. For more information about the Amazon Web Services SDKs, including how to download and install them, see Tools for Amazon Web Services",
      loadSpec: "aws/sso-admin",
    },
    {
      name: "sso-oidc",
      description:
        "IAM Identity Center OpenID Connect (OIDC) is a web service that enables a client (such as CLI or a native application) to register with IAM Identity Center. The service also enables the client to fetch the user\u2019s access token upon successful authentication and authorization with IAM Identity Center.  IAM Identity Center uses the sso and identitystore API namespaces.   Considerations for Using This Guide  Before you begin using this guide, we recommend that you first review the following important information about how the IAM Identity Center OIDC service works.   The IAM Identity Center OIDC service currently implements only the portions of the OAuth 2.0 Device Authorization Grant standard (https://tools.ietf.org/html/rfc8628) that are necessary to enable single sign-on authentication with the CLI.    With older versions of the CLI, the service only emits OIDC access tokens, so to obtain a new token, users must explicitly re-authenticate. To access the OIDC flow that supports token refresh and doesn\u2019t require re-authentication, update to the latest CLI version (1.27.10 for CLI V1 and 2.9.0 for CLI V2) with support for OIDC token refresh and configurable IAM Identity Center session durations. For more information, see Configure Amazon Web Services access portal session duration .    The access tokens provided by this service grant access to all Amazon Web Services account entitlements assigned to an IAM Identity Center user, not just a particular application.   The documentation in this guide does not describe the mechanism to convert the access token into Amazon Web Services Auth (\u201csigv4\u201d) credentials for use with IAM-protected Amazon Web Services service endpoints. For more information, see GetRoleCredentials in the IAM Identity Center Portal API Reference Guide.   For general information about IAM Identity Center, see What is IAM Identity Center? in the IAM Identity Center User Guide",
      loadSpec: "aws/sso-oidc",
    },
    {
      name: "stepfunctions",
      description:
        "Step Functions Step Functions coordinates the components of distributed applications and microservices using visual workflows. You can use Step Functions to build applications from individual components, each of which performs a discrete function, or task, allowing you to scale and change applications quickly. Step Functions provides a console that helps visualize the components of your application as a series of steps. Step Functions automatically triggers and tracks each step, and retries steps when there are errors, so your application executes predictably and in the right order every time. Step Functions logs the state of each step, so you can quickly diagnose and debug any issues. Step Functions manages operations and underlying infrastructure to ensure your application is available at any scale. You can run tasks on Amazon Web Services, your own servers, or any system that has access to Amazon Web Services. You can access and use Step Functions using the console, the Amazon Web Services SDKs, or an HTTP API. For more information about Step Functions, see the  Step Functions Developer Guide .  If you use the Step Functions API actions using Amazon Web Services SDK integrations, make sure the API actions are in camel case and parameter names are in Pascal case. For example, you could use Step Functions API action startSyncExecution and specify its parameter as StateMachineArn",
      loadSpec: "aws/stepfunctions",
    },
    {
      name: "storagegateway",
      description:
        "Storage Gateway Service  Amazon FSx File Gateway is no longer available to new customers. Existing customers of FSx File Gateway can continue to use the service normally. For capabilities similar to FSx File Gateway, visit this blog post.  Storage Gateway is the service that connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between an organization's on-premises IT environment and the Amazon Web Services storage infrastructure. The service enables you to securely upload data to the Amazon Web Services Cloud for cost effective backup and rapid disaster recovery. Use the following links to get started using the Storage Gateway Service API Reference:    Storage Gateway required request headers: Describes the required headers that you must send with every POST request to Storage Gateway.    Signing requests: Storage Gateway requires that you authenticate every request you send; this topic describes how sign such a request.    Error responses: Provides reference information about Storage Gateway errors.    Operations in Storage Gateway: Contains detailed descriptions of all Storage Gateway operations, their request parameters, response elements, possible errors, and examples of requests and responses.    Storage Gateway endpoints and quotas: Provides a list of each Amazon Web Services Region and the endpoints available for use with Storage Gateway.    Storage Gateway resource IDs are in uppercase. When you use these resource IDs with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change your resource ID to lowercase to use it with the EC2 API. For example, in Storage Gateway the ID for a volume might be vol-AA22BB012345DAF670. When you use this ID with the EC2 API, you must change it to vol-aa22bb012345daf670. Otherwise, the EC2 API might not behave as expected.   IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway volumes are changing to a longer format. Starting in December 2016, all new volumes and snapshots will be created with a 17-character string. Starting in April 2016, you will be able to use these longer IDs so you can test your systems with the new format. For more information, see Longer EC2 and EBS resource IDs. For example, a volume Amazon Resource Name (ARN) with the longer volume ID format looks like the following:  arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG. A snapshot ID with the longer ID format looks like the following: snap-78e226633445566ee. For more information, see Announcement: Heads-up \u2013 Longer Storage Gateway volume and snapshot IDs coming in 2016",
      loadSpec: "aws/storagegateway",
    },
    {
      name: "sts",
      description:
        "Security Token Service Security Token Service (STS) enables you to request temporary, limited-privilege credentials for users. This guide provides descriptions of the STS API. For more information about using this service, see Temporary Security Credentials",
      loadSpec: "aws/sts",
    },
    {
      name: "supplychain",
      description:
        "AWS Supply Chain is a cloud-based application that works with your enterprise resource planning (ERP) and supply chain management systems. Using AWS Supply Chain, you can connect and extract your inventory, supply, and demand related data from existing ERP or supply chain systems into a single data model.  The AWS Supply Chain API supports configuration data import for Supply Planning.  All AWS Supply chain API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies",
      loadSpec: "aws/supplychain",
    },
    {
      name: "support",
      description:
        "Amazon Web Services Support The Amazon Web Services Support API Reference is intended for programmers who need detailed information about the Amazon Web Services Support operations and data types. You can use the API to manage your support cases programmatically. The Amazon Web Services Support API uses HTTP methods that return results in JSON format.    You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.    You can also use the Amazon Web Services Support API to access features for Trusted Advisor. You can return a list of checks and their descriptions, get check results, specify checks to refresh, and get the refresh status of checks. You can manage your support cases with the following Amazon Web Services Support API operations:   The CreateCase, DescribeCases, DescribeAttachment, and ResolveCase operations create Amazon Web Services Support cases, retrieve information about cases, and resolve cases.   The DescribeCommunications, AddCommunicationToCase, and AddAttachmentsToSet operations retrieve and add communications and attachments to Amazon Web Services Support cases.   The DescribeServices and DescribeSeverityLevels operations return Amazon Web Service names, service codes, service categories, and problem severity levels. You use these values when you call the CreateCase operation.   You can also use the Amazon Web Services Support API to call the Trusted Advisor operations. For more information, see Trusted Advisor in the Amazon Web Services Support User Guide. For authentication of requests, Amazon Web Services Support uses Signature Version 4 Signing Process. For more information about this service and the endpoints to use, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide",
      loadSpec: "aws/support",
    },
    {
      name: "support-app",
      description:
        "Amazon Web Services Support App in Slack You can use the Amazon Web Services Support App in Slack API to manage your support cases in Slack for your Amazon Web Services account. After you configure your Slack workspace and channel with the Amazon Web Services Support App, you can perform the following tasks directly in your Slack channel:   Create, search, update, and resolve your support cases   Request service quota increases for your account   Invite Amazon Web Services Support agents to your channel so that you can chat directly about your support cases   For more information about how to perform these actions in Slack, see the following documentation in the Amazon Web Services Support User Guide:    Amazon Web Services Support App in Slack     Joining a live chat session with Amazon Web Services Support     Requesting service quota increases     Amazon Web Services Support App commands in Slack    You can also use the Amazon Web Services Management Console instead of the Amazon Web Services Support App API to manage your Slack configurations. For more information, see Authorize a Slack workspace to enable the Amazon Web Services Support App.    You must have a Business or Enterprise Support plan to use the Amazon Web Services Support App API.    For more information about the Amazon Web Services Support App endpoints, see the Amazon Web Services Support App in Slack endpoints in the Amazon Web Services General Reference",
      loadSpec: "aws/support-app",
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
      name: "taxsettings",
      description:
        'You can use the tax setting API to programmatically set, modify, and delete the tax registration number (TRN), associated business legal name, and address (Collectively referred to as "TRN information"). You can also programmatically view TRN information and tax addresses ("Tax profiles").  You can use this API to automate your TRN information settings instead of manually using the console. Service Endpoint   https://tax.us-east-1.amazonaws.com',
      loadSpec: "aws/taxsettings",
    },
    {
      name: "textract",
      description:
        "Amazon Textract detects and analyzes text in documents and converts it into machine-readable text. This is the API reference documentation for Amazon Textract",
      loadSpec: "aws/textract",
    },
    {
      name: "timestream-influxdb",
      description:
        "Amazon Timestream for InfluxDB is a managed time-series database engine that makes it easy for application developers and DevOps teams to run InfluxDB databases on AWS for near real-time time-series applications using open-source APIs. With Amazon Timestream for InfluxDB, it is easy to set up, operate, and scale time-series workloads that can answer queries with single-digit millisecond query response time",
      loadSpec: "aws/timestream-influxdb",
    },
    {
      name: "timestream-query",
      description: "Amazon Timestream Query",
      loadSpec: "aws/timestream-query",
    },
    {
      name: "timestream-write",
      description:
        "Amazon Timestream Write Amazon Timestream is a fast, scalable, fully managed time-series database service that makes it easy to store and analyze trillions of time-series data points per day. With Timestream, you can easily store and analyze IoT sensor data to derive insights from your IoT applications. You can analyze industrial telemetry to streamline equipment management and maintenance. You can also store and analyze log data and metrics to improve the performance and availability of your applications.  Timestream is built from the ground up to effectively ingest, process, and store time-series data. It organizes data to optimize query processing. It automatically scales based on the volume of data ingested and on the query volume to ensure you receive optimal performance while inserting and querying data. As your data grows over time, Timestream\u2019s adaptive query processing engine spans across storage tiers to provide fast analysis while reducing costs",
      loadSpec: "aws/timestream-write",
    },
    {
      name: "tnb",
      description:
        "Amazon Web Services Telco Network Builder (TNB) is a network automation service that helps you deploy and manage telecom networks. AWS TNB helps you with the lifecycle management of your telecommunication network functions throughout planning, deployment, and post-deployment activities",
      loadSpec: "aws/tnb",
    },
    {
      name: "transcribe",
      description:
        "Amazon Transcribe offers three main types of batch transcription: Standard, Medical, and Call Analytics.    Standard transcriptions are the most common option. Refer to for details.    Medical transcriptions are tailored to medical professionals and incorporate medical terms. A common use case for this service is transcribing doctor-patient dialogue into after-visit notes. Refer to for details.    Call Analytics transcriptions are designed for use with call center audio on two different channels; if you're looking for insight into customer service calls, use this option. Refer to for details",
      loadSpec: "aws/transcribe",
    },
    {
      name: "transfer",
      description:
        "Transfer Family is a fully managed service that enables the transfer of files over the File Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH) File Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon S3) or Amazon EFS. Additionally, you can use Applicability Statement 2 (AS2) to transfer files into and out of Amazon S3. Amazon Web Services helps you seamlessly migrate your file transfer workflows to Transfer Family by integrating with existing authentication systems, and providing DNS routing with Amazon Route 53 so nothing changes for your customers and partners, or their applications. With your data in Amazon S3, you can use it with Amazon Web Services services for processing, analytics, machine learning, and archiving. Getting started with Transfer Family is easy since there is no infrastructure to buy and set up",
      loadSpec: "aws/transfer",
    },
    {
      name: "translate",
      description:
        "Provides translation of the input content from the source language to the target language",
      loadSpec: "aws/translate",
    },
    {
      name: "trustedadvisor",
      description: "TrustedAdvisor Public API",
      loadSpec: "aws/trustedadvisor",
    },
    {
      name: "verifiedpermissions",
      description:
        'Amazon Verified Permissions is a permissions management service from Amazon Web Services. You can use Verified Permissions to manage permissions for your application, and authorize user access based on those permissions. Using Verified Permissions, application developers can grant access based on information about the users, resources, and requested actions. You can also evaluate additional information like group membership, attributes of the resources, and session context, such as time of request and IP addresses. Verified Permissions manages these permissions by letting you create and store authorization policies for your applications, such as consumer-facing web sites and enterprise business systems. Verified Permissions uses Cedar as the policy language to express your permission requirements. Cedar supports both role-based access control (RBAC) and attribute-based access control (ABAC) authorization models. For more information about configuring, administering, and using Amazon Verified Permissions in your applications, see the Amazon Verified Permissions User Guide. For more information about the Cedar policy language, see the Cedar Policy Language Guide.  When you write Cedar policies that reference principals, resources and actions, you can define the unique identifiers used for each of those elements. We strongly recommend that you follow these best practices:    Use values like universally unique identifiers (UUIDs) for all principal and resource identifiers.  For example, if user jane leaves the company, and you later let someone else use the name jane, then that new user automatically gets access to everything granted by policies that still reference User::"jane". Cedar can\u2019t distinguish between the new user and the old. This applies to both principal and resource identifiers. Always use identifiers that are guaranteed unique and never reused to ensure that you don\u2019t unintentionally grant access because of the presence of an old identifier in a policy. Where you use a UUID for an entity, we recommend that you follow it with the // comment specifier and the \u2018friendly\u2019 name of your entity. This helps to make your policies easier to understand. For example: principal == User::"a1b2c3d4-e5f6-a1b2-c3d4-EXAMPLE11111", // alice    Do not include personally identifying, confidential, or sensitive information as part of the unique identifier for your principals or resources. These identifiers are included in log entries shared in CloudTrail trails.    Several operations return structures that appear similar, but have different purposes. As new functionality is added to the product, the structure used in a parameter of one operation might need to change in a way that wouldn\'t make sense for the same parameter in a different operation. To help you understand the purpose of each, the following naming convention is used for the structures:   Parameter type structures that end in Detail are used in Get operations.   Parameter type structures that end in Item are used in List operations.   Parameter type structures that use neither suffix are used in the mutating (create and update) operations',
      loadSpec: "aws/verifiedpermissions",
    },
    {
      name: "voice-id",
      description:
        "Amazon Connect Voice ID provides real-time caller authentication and fraud risk detection, which make voice interactions in contact centers more secure and efficient",
      loadSpec: "aws/voice-id",
    },
    {
      name: "vpc-lattice",
      description:
        "Amazon VPC Lattice is a fully managed application networking service that you use to connect, secure, and monitor all of your services across multiple accounts and virtual private clouds (VPCs). Amazon VPC Lattice interconnects your microservices and legacy services within a logical boundary, so that you can discover and manage them more efficiently. For more information, see the Amazon VPC Lattice User Guide",
      loadSpec: "aws/vpc-lattice",
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
        'WAF  This is the latest version of the WAF API, released in November, 2019. The names of the entities that you use to access this API, like endpoints and namespaces, all have the versioning information added, like "V2" or "v2", to distinguish from the prior version. We recommend migrating your resources to this version, because it has a number of significant improvements. If you used WAF prior to this release, you can\'t use this WAFV2 API to access any WAF resources that you created before. WAF Classic support will end on September 30, 2025.  For information about WAF, including how to migrate your WAF Classic resources to this version, see the WAF Developer Guide.   WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to an Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, or Amazon Web Services Verified Access instance. WAF also lets you control access to your content, to protect the Amazon Web Services resource that WAF is monitoring. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, the protected resource responds to requests with either the requested content, an HTTP 403 status code (Forbidden), or with a custom response.  This API guide is for developers who need detailed information about WAF API actions, data types, and errors. For detailed information about WAF features and guidance for configuring and using WAF, see the WAF Developer Guide. You can make calls using the endpoints listed in WAF endpoints and quotas.    For regional applications, you can use any of the endpoints in the list. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.    For Amazon CloudFront applications, you must use the API endpoint listed for US East (N. Virginia): us-east-1.   Alternatively, you can use one of the Amazon Web Services SDKs to access an API that\'s tailored to the programming language or platform that you\'re using. For more information, see Amazon Web Services SDKs',
      loadSpec: "aws/wafv2",
    },
    {
      name: "wellarchitected",
      description:
        "Well-Architected Tool This is the Well-Architected Tool API Reference. The WA Tool API provides programmatic access to the Well-Architected Tool in the Amazon Web Services Management Console. For information about the Well-Architected Tool, see the Well-Architected Tool User Guide",
      loadSpec: "aws/wellarchitected",
    },
    {
      name: "wisdom",
      description:
        "Amazon Connect Wisdom delivers agents the information they need to solve customer issues as they're actively speaking with customers. Agents can search across connected repositories from within their agent desktop to find answers quickly. Use Amazon Connect Wisdom to create an assistant and a knowledge base, for example, or manage content by uploading custom files",
      loadSpec: "aws/wisdom",
    },
    {
      name: "workdocs",
      description:
        "The Amazon WorkDocs API is designed for the following use cases:   File Migration: File migration applications are supported for users who want to migrate their files from an on-premises or off-premises file system or service. Users can insert files into a user directory structure, as well as allow for basic metadata changes, such as modifications to the permissions of files.   Security: Support security applications are supported for users who have additional security needs, such as antivirus or data loss prevention. The API actions, along with CloudTrail, allow these applications to detect when changes occur in Amazon WorkDocs. Then, the application can take the necessary actions and replace the target file. If the target file violates the policy, the application can also choose to email the user.   eDiscovery/Analytics: General administrative applications are supported, such as eDiscovery and analytics. These applications can choose to mimic or record the actions in an Amazon WorkDocs site, along with CloudTrail, to replicate data for eDiscovery, backup, or analytical applications.   All Amazon WorkDocs API actions are Amazon authenticated and certificate-signed. They not only require the use of the Amazon Web Services SDK, but also allow for the exclusive use of IAM users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the Amazon WorkDocs site, the IAM user gains full administrative visibility into the entire Amazon WorkDocs site (or as set in the IAM policy). This includes, but is not limited to, the ability to modify file permissions and upload any file to any user. This allows developers to perform the three use cases above, as well as give users the ability to grant access on a selective basis using the IAM model.  The pricing for Amazon WorkDocs APIs varies depending on the API call type for these actions:    READ (Get*)     WRITE (Activate*, Add*, Create*, Deactivate*, Initiate*, Update*)     LIST (Describe*)     DELETE*, CANCEL    For information about Amazon WorkDocs API pricing, see Amazon WorkDocs Pricing",
      loadSpec: "aws/workdocs",
    },
    {
      name: "workmail",
      description:
        "WorkMail is a secure, managed business email and calendaring service with support for existing desktop and mobile email clients. You can access your email, contacts, and calendars using Microsoft Outlook, your browser, or other native iOS and Android email applications. You can integrate WorkMail with your existing corporate directory and control both the keys that encrypt your data and the location in which your data is stored. The WorkMail API is designed for the following scenarios:   Listing and describing organizations     Managing users     Managing groups     Managing resources   All WorkMail API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the WorkMail site, the IAM user gains full administrative visibility into the entire WorkMail organization (or as set in the IAM policy). This includes, but is not limited to, the ability to create, update, and delete users, groups, and resources. This allows developers to perform the scenarios listed above, as well as give users the ability to grant access on a selective basis using the IAM model",
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
        "Amazon WorkSpaces Service Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows or Amazon Linux desktops for your users, known as WorkSpaces. WorkSpaces eliminates the need to procure and deploy hardware or install complex software. You can quickly add or remove users as your needs change. Users can access their virtual desktops from multiple devices or web browsers. This API Reference provides detailed information about the actions, data types, parameters, and errors of the WorkSpaces service. For more information about the supported Amazon Web Services Regions, endpoints, and service quotas of the Amazon WorkSpaces service, see WorkSpaces endpoints and quotas in the Amazon Web Services General Reference. You can also manage your WorkSpaces resources using the WorkSpaces console, Command Line Interface (CLI), and SDKs. For more information about administering WorkSpaces, see the Amazon WorkSpaces Administration Guide. For more information about using the Amazon WorkSpaces client application or web browser to access provisioned WorkSpaces, see the Amazon WorkSpaces User Guide. For more information about using the CLI to manage your WorkSpaces resources, see the WorkSpaces section of the CLI Reference",
      loadSpec: "aws/workspaces",
    },
    {
      name: "workspaces-thin-client",
      description:
        "Amazon WorkSpaces Thin Client is an affordable device built to work with Amazon Web Services End User Computing (EUC) virtual desktops to provide users with a complete cloud desktop solution. WorkSpaces Thin Client is a compact device designed to connect up to two monitors and USB devices like a keyboard, mouse, headset, and webcam. To maximize endpoint security, WorkSpaces Thin Client devices do not allow local data storage or installation of unapproved applications. The WorkSpaces Thin Client device ships preloaded with device management software. You can use these APIs to complete WorkSpaces Thin Client tasks, such as creating environments or viewing devices. For more information about WorkSpaces Thin Client, including the required permissions to use the service, see the Amazon WorkSpaces Thin Client Administrator Guide. For more information about using the Command Line Interface (CLI) to manage your WorkSpaces Thin Client resources, see the WorkSpaces Thin Client section of the CLI Reference",
      loadSpec: "aws/workspaces-thin-client",
    },
    {
      name: "workspaces-web",
      description:
        "Amazon WorkSpaces Secure Browser is a low cost, fully managed WorkSpace built specifically to facilitate secure, web-based workloads. WorkSpaces Secure Browser makes it easy for customers to safely provide their employees with access to internal websites and SaaS web applications without the administrative burden of appliances or specialized client software. WorkSpaces Secure Browser provides simple policy tools tailored for user interactions, while offloading common tasks like capacity management, scaling, and maintaining browser images",
      loadSpec: "aws/workspaces-web",
    },
    {
      name: "xray",
      description:
        "Amazon Web Services X-Ray provides APIs for managing debug traces and retrieving service maps and other data created by processing those traces",
      loadSpec: "aws/xray",
    },
    {
      name: "s3api",
      description: null,
      loadSpec: "aws/s3api",
    },
    {
      name: "s3",
      description:
        'This section explains prominent concepts and notations in the set of high-level S3 commands provided.\n\nIf you are looking for the low level S3 commands for the CLI, please see the\n``s3api`` command `reference page\n`_.\n\nPath Argument Type\n++++++++++++++++++\n\nWhenever using a command, at least one path argument must be specified.  There\nare two types of path arguments: ``LocalPath`` and ``S3Uri``.\n\n``LocalPath``: represents the path of a local file or directory.  It can be\nwritten as an absolute path or relative path.\n\n``S3Uri``: represents the location of a S3 object, prefix, or bucket.  This\nmust be written in the form ``s3://mybucket/mykey`` where ``mybucket`` is\nthe specified S3 bucket, ``mykey`` is the specified S3 key.  The path argument\nmust begin with ``s3://`` in order to denote that the path argument refers to\na S3 object. Note that prefixes are separated by forward slashes. For\nexample, if the S3 object ``myobject`` had the prefix ``myprefix``, the\nS3 key would be ``myprefix/myobject``, and if the object was in the bucket\n``mybucket``, the ``S3Uri`` would be ``s3://mybucket/myprefix/myobject``.\n\n``S3Uri`` also supports S3 access points. To specify an access point, this\nvalue must be of the form ``s3:///``. For example if\nthe access point ``myaccesspoint`` to be used has the ARN:\n``arn:aws:s3:us-west-2:123456789012:accesspoint/myaccesspoint`` and the object\nbeing accessed has the key ``mykey``, then the ``S3URI`` used must be:\n``s3://arn:aws:s3:us-west-2:123456789012:accesspoint/myaccesspoint/mykey``.\nSimilar to bucket names, you can also use prefixes with access point ARNs for\nthe ``S3Uri``. For example:\n``s3://arn:aws:s3:us-west-2:123456789012:accesspoint/myaccesspoint/myprefix/``\n\n\n\nOrder of Path Arguments\n+++++++++++++++++++++++\n\nEvery command takes one or two positional path arguments.  The first path\nargument represents the source, which is the local file/directory or S3\nobject/prefix/bucket that is being referenced.  If there is a second path\nargument, it represents the destination, which is the local file/directory\nor S3 object/prefix/bucket that is being operated on.  Commands with only\none path argument do not have a destination because the operation is being\nperformed only on the source.\n\n\nSingle Local File and S3 Object Operations\n++++++++++++++++++++++++++++++++++++++++++\n\nSome commands perform operations only on single files and S3 objects.  The\nfollowing commands are single file/object operations if no ``--recursive``\nflag is provided.\n\n    * ``cp``\n    * ``mv``\n    * ``rm``\n\nFor this type of operation, the first path argument, the source, must exist\nand be a local file or S3 object.  The second path argument, the destination,\ncan be the name of a local file, local directory, S3 object, S3 prefix,\nor S3 bucket.\n\nThe destination is indicated as a local directory, S3 prefix, or S3 bucket\nif it ends with a forward slash or back slash.  The use of slash depends\non the path argument type.  If the path argument is a ``LocalPath``,\nthe type of slash is the separator used by the operating system.  If the\npath is a ``S3Uri``, the forward slash must always be used.  If a slash\nis at the end of the destination, the destination file or object will\nadopt the name of the source file or object.  Otherwise, if there is no\nslash at the end, the file or object will be saved under the name provided.\nSee examples in ``cp`` and ``mv`` to illustrate this description.\n\n\nDirectory and S3 Prefix Operations\n++++++++++++++++++++++++++++++++++\n\nSome commands only perform operations on the contents of a local directory\nor S3 prefix/bucket.  Adding or omitting a forward slash or back slash to\nthe end of any path argument, depending on its type, does not affect the\nresults of the operation.  The following commands will always result in\na directory or S3 prefix/bucket operation:\n\n* ``sync``\n* ``mb``\n* ``rb``\n* ``ls``\n\n\nUse of Exclude and Include Filters\n++++++++++++++++++++++++++++++++++\n\nCurrently, there is no support for the use of UNIX style wildcards in\na command\'s path arguments.  However, most commands have ``--exclude ""``\nand ``--include ""`` parameters that can achieve the desired result.\nThese parameters perform pattern matching to either exclude or include\na particular file or object.  The following pattern symbols are supported.\n\n    * ``*``: Matches everything\n    * ``?``: Matches any single character\n    * ``[sequence]``: Matches any character in ``sequence``\n    * ``[!sequence]``: Matches any character not in ``sequence``\n\nAny number of these parameters can be passed to a command.  You can do this by\nproviding an ``--exclude`` or ``--include`` argument multiple times, e.g.\n``--include "*.txt" --include "*.png"``.\nWhen there are multiple filters, the rule is the filters that appear later in\nthe command take precedence over filters that appear earlier in the command.\nFor example, if the filter parameters passed to the command were\n\n::\n\n    --exclude "*" --include "*.txt"\n\nAll files will be excluded from the command except for files ending with\n``.txt``  However, if the order of the filter parameters was changed to\n\n::\n\n    --include "*.txt" --exclude "*"\n\nAll files will be excluded from the command.\n\nEach filter is evaluated against the **source directory**.  If the source\nlocation is a file instead of a directory, the directory containing the file is\nused as the source directory.  For example, suppose you had the following\ndirectory structure::\n\n    /tmp/foo/\n      .git/\n      |---config\n      |---description\n      foo.txt\n      bar.txt\n      baz.jpg\n\nIn the command ``aws s3 sync /tmp/foo s3://bucket/`` the source directory is\n``/tmp/foo``.  Any include/exclude filters will be evaluated with the source\ndirectory prepended.  Below are several examples to demonstrate this.\n\nGiven the directory structure above and the command\n``aws s3 cp /tmp/foo s3://bucket/ --recursive --exclude ".git/*"``, the\nfiles ``.git/config`` and ``.git/description`` will be excluded from the\nfiles to upload because the exclude filter ``.git/*`` will have the source\nprepended to the filter.  This means that::\n\n    /tmp/foo/.git/* -> /tmp/foo/.git/config       (matches, should exclude)\n    /tmp/foo/.git/* -> /tmp/foo/.git/description  (matches, should exclude)\n    /tmp/foo/.git/* -> /tmp/foo/foo.txt  (does not match, should include)\n    /tmp/foo/.git/* -> /tmp/foo/bar.txt  (does not match, should include)\n    /tmp/foo/.git/* -> /tmp/foo/baz.jpg  (does not match, should include)\n\nThe command ``aws s3 cp /tmp/foo/ s3://bucket/ --recursive --exclude "ba*"``\nwill exclude ``/tmp/foo/bar.txt`` and ``/tmp/foo/baz.jpg``::\n\n    /tmp/foo/ba* -> /tmp/foo/.git/config      (does not match, should include)\n    /tmp/foo/ba* -> /tmp/foo/.git/description (does not match, should include)\n    /tmp/foo/ba* -> /tmp/foo/foo.txt          (does not match, should include)\n    /tmp/foo/ba* -> /tmp/foo/bar.txt  (matches, should exclude)\n    /tmp/foo/ba* -> /tmp/foo/baz.jpg  (matches, should exclude)\n\n\nNote that, by default, *all files are included*.  This means that\nproviding **only** an ``--include`` filter will not change what\nfiles are transferred.  ``--include`` will only re-include files that\nhave been excluded from an ``--exclude`` filter.  If you only want\nto upload files with a particular extension, you need to first exclude\nall files, then re-include the files with the particular extension.\nThis command will upload **only** files ending with ``.jpg``::\n\n    aws s3 cp /tmp/foo/ s3://bucket/ --recursive --exclude "*" --include "*.jpg"\n\nIf you wanted to include both ``.jpg`` files as well as ``.txt`` files you\ncan run::\n\n    aws s3 cp /tmp/foo/ s3://bucket/ --recursive \\\n        --exclude "*" --include "*.jpg" --include "*.txt"',
      loadSpec: "aws/s3",
    },
    {
      name: "configure",
      description:
        "Configure AWS CLI options. If this command is run with no\narguments, you will be prompted for configuration values such as your AWS\nAccess Key Id and your AWS Secret Access Key.  You can configure a named\nprofile using the ``--profile`` argument.  If your config file does not exist\n(the default location is ``~/.aws/config``), the AWS CLI will create it\nfor you.  To keep an existing value, hit enter when prompted for the value.\nWhen you are prompted for information, the current value will be displayed in\n``[brackets]``.  If the config item has no value, it be displayed as\n``[None]``.  Note that the ``configure`` command only works with values from the\nconfig file.  It does not use any configuration values from environment\nvariables or the IAM role.\n\nNote: the values you provide for the AWS Access Key ID and the AWS Secret\nAccess Key will be written to the shared credentials file\n(``~/.aws/credentials``).\n\n\n=======================\nConfiguration Variables\n=======================\n\nThe following configuration variables are supported in the config file:\n\n* **aws_access_key_id** - The AWS access key part of your credentials\n* **aws_secret_access_key** - The AWS secret access key part of your credentials\n* **aws_session_token** - The session token part of your credentials (session tokens only)\n* **metadata_service_timeout** - The number of seconds to wait until the metadata service\n  request times out.  This is used if you are using an IAM role to provide\n  your credentials.\n* **metadata_service_num_attempts** - The number of attempts to try to retrieve\n  credentials.  If you know for certain you will be using an IAM role on an\n  Amazon EC2 instance, you can set this value to ensure any intermittent\n  failures are retried.  By default this value is 1.\n\nFor more information on configuration options, see `Configuring the AWS Command Line Interface`_ in the *AWS CLI User Guide*.\n\n.. _`Configuring the AWS Command Line Interface`: http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html",
      loadSpec: "aws/configure",
    },
    {
      name: "deploy",
      description:
        "CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances running in your own facility, serverless Lambda functions, or applications in an Amazon ECS service. You can deploy a nearly unlimited variety of application content, such as an updated Lambda function, updated applications in an Amazon ECS service, code, web and configuration files, executables, packages, scripts, multimedia files, and so on. CodeDeploy can deploy application content stored in Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes to your existing code before you can use CodeDeploy. CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications, without many of the risks associated with error-prone manual deployments.  CodeDeploy Components  Use the information in this guide to help you work with the following CodeDeploy components:    Application: A name that uniquely identifies the application you want to deploy. CodeDeploy uses this name, which functions as a container, to ensure the correct combination of revision, deployment configuration, and deployment group are referenced during a deployment.    Deployment group: A set of individual instances, CodeDeploy Lambda deployment configuration settings, or an Amazon ECS service and network details. A Lambda deployment group specifies how to route traffic to a new version of a Lambda function. An Amazon ECS deployment group specifies the service created in Amazon ECS to deploy, a load balancer, and a listener to reroute production traffic to an updated containerized application. An Amazon EC2/On-premises deployment group contains individually tagged instances, Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All deployment groups can specify optional trigger, alarm, and rollback settings.    Deployment configuration: A set of deployment rules and deployment success and failure conditions used by CodeDeploy during a deployment.    Deployment: The process and the components used when updating a Lambda function, a containerized application in an Amazon ECS service, or of installing content on one or more instances.     Application revisions: For an Lambda deployment, this is an AppSpec file that specifies the Lambda function to be updated and one or more functions to validate deployment lifecycle events. For an Amazon ECS deployment, this is an AppSpec file that specifies the Amazon ECS task definition, container, and port where production traffic is rerouted. For an EC2/On-premises deployment, this is an archive file that contains source content\u2014source code, webpages, executable files, and deployment scripts\u2014along with an AppSpec file. Revisions are stored in Amazon S3 buckets or GitHub repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely identified by its commit ID.   This guide also contains information to help you get details about the instances in your deployments, to make on-premises instances available for CodeDeploy deployments, to get details about a Lambda function deployment, and to get details about Amazon ECS service deployments.  CodeDeploy Information Resources     CodeDeploy User Guide     CodeDeploy API Reference Guide     CLI Reference for CodeDeploy     CodeDeploy Developer Forum",
      loadSpec: "aws/deploy",
    },
    {
      name: "configservice",
      description:
        "Config Config provides a way to keep track of the configurations of all the Amazon Web Services resources associated with your Amazon Web Services account. You can use Config to get the current and historical configurations of each Amazon Web Services resource and also to get information about the relationship between the resources. An Amazon Web Services resource can be an Amazon Compute Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an elastic network Interface (ENI), or a security group. For a complete list of resources currently supported by Config, see Supported Amazon Web Services resources. You can access and manage Config through the Amazon Web Services Management Console, the Amazon Web Services Command Line Interface (Amazon Web Services CLI), the Config API, or the Amazon Web Services SDKs for Config. This reference guide contains documentation for the Config API and the Amazon Web Services CLI commands that you can use to manage Config. The Config API uses the Signature Version 4 protocol for signing requests. For more information about how to sign a request with this protocol, see Signature Version 4 Signing Process. For detailed information about Config features and their associated actions or commands, as well as how to work with Amazon Web Services Management Console, see What Is Config in the Config Developer Guide",
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
