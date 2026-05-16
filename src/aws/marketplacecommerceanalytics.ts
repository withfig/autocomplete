const completionSpec: Fig.Spec = {
  name: "marketplacecommerceanalytics",
  description: "Provides AWS Marketplace business intelligence data on-demand",
  subcommands: [
    {
      name: "generate-data-set",
      description:
        "Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy",
      options: [
        {
          name: "--data-set-type",
          description:
            "The desired data set type.    customer_subscriber_hourly_monthly_subscriptions From 2017-09-15 to present: Available daily by 24:00 UTC.   customer_subscriber_annual_subscriptions From 2017-09-15 to present: Available daily by 24:00 UTC.   daily_business_usage_by_instance_type From 2017-09-15 to present: Available daily by 24:00 UTC.   daily_business_fees From 2017-09-15 to present: Available daily by 24:00 UTC.   daily_business_free_trial_conversions From 2017-09-15 to present: Available daily by 24:00 UTC.   daily_business_new_instances From 2017-09-15 to present: Available daily by 24:00 UTC.   daily_business_new_product_subscribers From 2017-09-15 to present: Available daily by 24:00 UTC.   daily_business_canceled_product_subscribers From 2017-09-15 to present: Available daily by 24:00 UTC.   monthly_revenue_billing_and_revenue_data From 2017-09-15 to present: Available monthly on the 15th day of the month by 24:00 UTC. Data includes metered transactions (e.g. hourly) from one month prior.   monthly_revenue_annual_subscriptions From 2017-09-15 to present: Available monthly on the 15th day of the month by 24:00 UTC. Data includes up-front software charges (e.g. annual) from one month prior.   monthly_revenue_field_demonstration_usage From 2018-03-15 to present: Available monthly on the 15th day of the month by 24:00 UTC.   monthly_revenue_flexible_payment_schedule From 2018-11-15 to present: Available monthly on the 15th day of the month by 24:00 UTC.   disbursed_amount_by_product From 2017-09-15 to present: Available every 30 days by 24:00 UTC.   disbursed_amount_by_instance_hours From 2017-09-15 to present: Available every 30 days by 24:00 UTC.   disbursed_amount_by_customer_geo From 2017-09-15 to present: Available every 30 days by 24:00 UTC.   disbursed_amount_by_age_of_uncollected_funds From 2017-09-15 to present: Available every 30 days by 24:00 UTC.   disbursed_amount_by_age_of_disbursed_funds From 2017-09-15 to present: Available every 30 days by 24:00 UTC.   disbursed_amount_by_age_of_past_due_funds From 2018-04-07 to present: Available every 30 days by 24:00 UTC.   disbursed_amount_by_uncollected_funds_breakdown From 2019-10-04 to present: Available every 30 days by 24:00 UTC.   sales_compensation_billed_revenue From 2017-09-15 to present: Available monthly on the 15th day of the month by 24:00 UTC. Data includes metered transactions (e.g. hourly) from one month prior, and up-front software charges (e.g. annual) from one month prior.   us_sales_and_use_tax_records From 2017-09-15 to present: Available monthly on the 15th day of the month by 24:00 UTC.   disbursed_amount_by_product_with_uncollected_funds This data set is deprecated. Download related reports from AMMP instead!   customer_profile_by_industry This data set is deprecated. Download related reports from AMMP instead!   customer_profile_by_revenue This data set is deprecated. Download related reports from AMMP instead!   customer_profile_by_geography This data set is deprecated. Download related reports from AMMP instead!",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-publication-date",
          description:
            "The date a data set was published. For daily data sets, provide a date with day-level granularity for the desired day. For monthly data sets except those with prefix disbursed_amount, provide a date with month-level granularity for the desired month (the day value will be ignored). For data sets with prefix disbursed_amount, provide a date with day-level granularity for the desired day. For these data sets we will look backwards in time over the range of 31 days until the first data set is found (the latest one)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--role-name-arn",
          description:
            "The Amazon Resource Name (ARN) of the Role with an attached permissions policy to interact with the provided AWS services",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-s3-bucket-name",
          description:
            "The name (friendly name, not ARN) of the destination S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-s3-prefix",
          description:
            '(Optional) The desired S3 prefix for the published data set, similar to a directory path in standard file systems. For example, if given the bucket name "mybucket" and the prefix "myprefix/mydatasets", the output file "outputfile" would be published to "s3://mybucket/myprefix/mydatasets/outputfile". If the prefix directory structure does not exist, it will be created. If no prefix is provided, the data set will be published to the S3 bucket root',
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-arn",
          description:
            "Amazon Resource Name (ARN) for the SNS Topic that will be notified when the data set has been published or if an error has occurred",
          args: {
            name: "string",
          },
        },
        {
          name: "--customer-defined-values",
          description:
            "(Optional) Key-value pairs which will be returned, unmodified, in the Amazon SNS notification message and the data set metadata file. These key-value pairs can be used to correlated responses with tracking information from other systems",
          args: {
            name: "map",
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
      name: "start-support-data-export",
      description:
        "This target has been deprecated. Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy",
      options: [
        {
          name: "--data-set-type",
          description:
            "This target has been deprecated. Specifies the data set type to be written to the output csv file. The data set types customer_support_contacts_data and test_customer_support_contacts_data both result in a csv file containing the following fields: Product Id, Product Code, Customer Guid, Subscription Guid, Subscription Start Date, Organization, AWS Account Id, Given Name, Surname, Telephone Number, Email, Title, Country Code, ZIP Code, Operation Type, and Operation Time.    customer_support_contacts_data Customer support contact data. The data set will contain all changes (Creates, Updates, and Deletes) to customer support contact data from the date specified in the from_date parameter. test_customer_support_contacts_data An example data set containing static test data in the same format as customer_support_contacts_data",
          args: {
            name: "string",
          },
        },
        {
          name: "--from-date",
          description:
            "This target has been deprecated. The start date from which to retrieve the data set in UTC. This parameter only affects the customer_support_contacts_data data set type",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--role-name-arn",
          description:
            "This target has been deprecated. The Amazon Resource Name (ARN) of the Role with an attached permissions policy to interact with the provided AWS services",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-s3-bucket-name",
          description:
            "This target has been deprecated. The name (friendly name, not ARN) of the destination S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-s3-prefix",
          description:
            'This target has been deprecated. (Optional) The desired S3 prefix for the published data set, similar to a directory path in standard file systems. For example, if given the bucket name "mybucket" and the prefix "myprefix/mydatasets", the output file "outputfile" would be published to "s3://mybucket/myprefix/mydatasets/outputfile". If the prefix directory structure does not exist, it will be created. If no prefix is provided, the data set will be published to the S3 bucket root',
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-arn",
          description:
            "This target has been deprecated. Amazon Resource Name (ARN) for the SNS Topic that will be notified when the data set has been published or if an error has occurred",
          args: {
            name: "string",
          },
        },
        {
          name: "--customer-defined-values",
          description:
            "This target has been deprecated. (Optional) Key-value pairs which will be returned, unmodified, in the Amazon SNS notification message and the data set metadata file",
          args: {
            name: "map",
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
