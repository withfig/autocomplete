const completionSpec: Fig.Spec = {
  name: "budgets",
  description:
    "Use the Amazon Web Services Budgets API to plan your service usage, service costs, and instance reservations. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for the Amazon Web Services Budgets feature.  Budgets provide you with a way to see the following information:   How close your plan is to your budgeted amount or to the free tier limits   Your usage-to-date, including how much you've used of your Reserved Instances (RIs)   Your current estimated charges from Amazon Web Services, and how much your predicted usage will accrue in charges by the end of the month   How much of your budget has been used   Amazon Web Services updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:    Cost budgets - Plan how much you want to spend on a service.    Usage budgets - Plan how much you want to use one or more services.    RI utilization budgets - Define a utilization threshold, and receive alerts when your RI usage falls below that threshold. This lets you see if your RIs are unused or under-utilized.    RI coverage budgets - Define a coverage threshold, and receive alerts when the number of your instance hours that are covered by RIs fall below that threshold. This lets you see how much of your instance usage is covered by a reservation.   Service Endpoint The Amazon Web Services Budgets API provides the following endpoint:   https://budgets.amazonaws.com   For information about costs that are associated with the Amazon Web Services Budgets API, see Amazon Web Services Cost Management Pricing",
  subcommands: [
    {
      name: "create-budget",
      description:
        "Creates a budget and, if included, notifications and subscribers.   Only one of BudgetLimit or PlannedBudgetLimits can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the BudgetLimit syntax. For PlannedBudgetLimits, see the Examples section",
      options: [
        {
          name: "--account-id",
          description: "The accountId that is associated with the budget",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget",
          description: "The budget object that you want to create",
          args: {
            name: "structure",
          },
        },
        {
          name: "--notifications-with-subscribers",
          description:
            "A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to 10 email subscribers. If you include notifications and subscribers in your CreateBudget call, Amazon Web Services creates the notifications and subscribers for you",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-tags",
          description:
            "An optional list of tags to associate with the specified budget. Each tag consists of a key and a value, and each key must be unique for the resource",
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
      name: "create-budget-action",
      description: "Creates a budget action",
      options: [
        {
          name: "--account-id",
          description: "The account ID of the user. It's a 12-digit number",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            'A string that represents the budget name. The ":" and "\\" characters, and the "/action/" substring, aren\'t allowed',
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-type",
          description:
            "The type of a notification. It must be ACTUAL or FORECASTED",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-type",
          description:
            "The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-threshold",
          description: "The trigger threshold of the action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--definition",
          description: "Specifies all of the type-specific parameters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The role passed for action execution and reversion. Roles and actions must be in the same account",
          args: {
            name: "string",
          },
        },
        {
          name: "--approval-model",
          description:
            "This specifies if the action needs manual or automatic approval",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscribers",
          description: "A list of subscribers",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-tags",
          description:
            "An optional list of tags to associate with the specified budget action. Each tag consists of a key and a value, and each key must be unique for the resource",
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
      name: "create-notification",
      description:
        "Creates a notification. You must create the budget before you create the associated notification",
      options: [
        {
          name: "--account-id",
          description:
            "The accountId that is associated with the budget that you want to create a notification for",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            "The name of the budget that you want Amazon Web Services to notify you about. Budget names must be unique within an account",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification",
          description: "The notification that you want to create",
          args: {
            name: "structure",
          },
        },
        {
          name: "--subscribers",
          description:
            "A list of subscribers that you want to associate with the notification. Each notification can have one SNS subscriber and up to 10 email subscribers",
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
      name: "create-subscriber",
      description:
        "Creates a subscriber. You must create the associated budget and notification before you create the subscriber",
      options: [
        {
          name: "--account-id",
          description:
            "The accountId that is associated with the budget that you want to create a subscriber for",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            "The name of the budget that you want to subscribe to. Budget names must be unique within an account",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification",
          description:
            "The notification that you want to create a subscriber for",
          args: {
            name: "structure",
          },
        },
        {
          name: "--subscriber",
          description:
            "The subscriber that you want to associate with a budget notification",
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
      name: "delete-budget",
      description:
        "Deletes a budget. You can delete your budget at any time.  Deleting a budget also deletes the notifications and subscribers that are associated with that budget",
      options: [
        {
          name: "--account-id",
          description:
            "The accountId that is associated with the budget that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description: "The name of the budget that you want to delete",
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
      name: "delete-budget-action",
      description: "Deletes a budget action",
      options: [
        {
          name: "--account-id",
          description: "The account ID of the user. It's a 12-digit number",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            'A string that represents the budget name. The ":" and "\\" characters, and the "/action/" substring, aren\'t allowed',
          args: {
            name: "string",
          },
        },
        {
          name: "--action-id",
          description:
            "A system-generated universally unique identifier (UUID) for the action",
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
      name: "delete-notification",
      description:
        "Deletes a notification.  Deleting a notification also deletes the subscribers that are associated with the notification",
      options: [
        {
          name: "--account-id",
          description:
            "The accountId that is associated with the budget whose notification you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            "The name of the budget whose notification you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification",
          description: "The notification that you want to delete",
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
      name: "delete-subscriber",
      description:
        "Deletes a subscriber.  Deleting the last subscriber to a notification also deletes the notification",
      options: [
        {
          name: "--account-id",
          description:
            "The accountId that is associated with the budget whose subscriber you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            "The name of the budget whose subscriber you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification",
          description: "The notification whose subscriber you want to delete",
          args: {
            name: "structure",
          },
        },
        {
          name: "--subscriber",
          description: "The subscriber that you want to delete",
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
      name: "describe-budget",
      description:
        "Describes a budget.  The Request Syntax section shows the BudgetLimit syntax. For PlannedBudgetLimits, see the Examples section",
      options: [
        {
          name: "--account-id",
          description:
            "The accountId that is associated with the budget that you want a description of",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description: "The name of the budget that you want a description of",
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
      name: "describe-budget-action",
      description: "Describes a budget action detail",
      options: [
        {
          name: "--account-id",
          description: "The account ID of the user. It's a 12-digit number",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            'A string that represents the budget name. The ":" and "\\" characters, and the "/action/" substring, aren\'t allowed',
          args: {
            name: "string",
          },
        },
        {
          name: "--action-id",
          description:
            "A system-generated universally unique identifier (UUID) for the action",
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
      name: "describe-budget-action-histories",
      description: "Describes a budget action history detail",
      options: [
        {
          name: "--account-id",
          description: "The account ID of the user. It's a 12-digit number",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            'A string that represents the budget name. The ":" and "\\" characters, and the "/action/" substring, aren\'t allowed',
          args: {
            name: "string",
          },
        },
        {
          name: "--action-id",
          description:
            "A system-generated universally unique identifier (UUID) for the action",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-period",
          description:
            "The period of time that's covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "An integer that represents how many entries a paginated response contains. The maximum is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A generic string",
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
      name: "describe-budget-actions-for-account",
      description: "Describes all of the budget actions for an account",
      options: [
        {
          name: "--account-id",
          description: "The account ID of the user. It's a 12-digit number",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An integer that represents how many entries a paginated response contains. The maximum is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A generic string",
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
      name: "describe-budget-actions-for-budget",
      description: "Describes all of the budget actions for a budget",
      options: [
        {
          name: "--account-id",
          description: "The account ID of the user. It's a 12-digit number",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            'A string that represents the budget name. The ":" and "\\" characters, and the "/action/" substring, aren\'t allowed',
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An integer that represents how many entries a paginated response contains. The maximum is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A generic string",
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
      name: "describe-budget-notifications-for-account",
      description:
        "Lists the budget names and notifications that are associated with an account",
      options: [
        {
          name: "--account-id",
          description: "The account ID of the user. It's a 12-digit number",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An integer that represents how many budgets a paginated response contains. The default is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A generic string",
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
      name: "describe-budget-performance-history",
      description:
        "Describes the history for DAILY, MONTHLY, and QUARTERLY budgets. Budget history isn't available for ANNUAL budgets",
      options: [
        {
          name: "--account-id",
          description: "The account ID of the user. It's a 12-digit number",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            'A string that represents the budget name. The ":" and "\\" characters, and the "/action/" substring, aren\'t allowed',
          args: {
            name: "string",
          },
        },
        {
          name: "--time-period",
          description:
            "Retrieves how often the budget went into an ALARM state for the specified time period",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "An integer that represents how many entries a paginated response contains. The maximum is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A generic string",
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
      name: "describe-budgets",
      description:
        "Lists the budgets that are associated with an account.  The Request Syntax section shows the BudgetLimit syntax. For PlannedBudgetLimits, see the Examples section",
      options: [
        {
          name: "--account-id",
          description:
            "The accountId that is associated with the budgets that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An integer that represents how many budgets a paginated response contains. The default is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that you include in your request to indicate the next set of results that you want to retrieve",
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
      name: "describe-notifications-for-budget",
      description: "Lists the notifications that are associated with a budget",
      options: [
        {
          name: "--account-id",
          description:
            "The accountId that is associated with the budget whose notifications you want descriptions of",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            "The name of the budget whose notifications you want descriptions of",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional integer that represents how many entries a paginated response contains",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that you include in your request to indicate the next set of results that you want to retrieve",
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
      name: "describe-subscribers-for-notification",
      description:
        "Lists the subscribers that are associated with a notification",
      options: [
        {
          name: "--account-id",
          description:
            "The accountId that is associated with the budget whose subscribers you want descriptions of",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            "The name of the budget whose subscribers you want descriptions of",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification",
          description: "The notification whose subscribers you want to list",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional integer that represents how many entries a paginated response contains",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that you include in your request to indicate the next set of results that you want to retrieve",
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
      name: "execute-budget-action",
      description: "Executes a budget action",
      options: [
        {
          name: "--account-id",
          description: "The account ID of the user. It's a 12-digit number",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            'A string that represents the budget name. The ":" and "\\" characters, and the "/action/" substring, aren\'t allowed',
          args: {
            name: "string",
          },
        },
        {
          name: "--action-id",
          description:
            "A system-generated universally unique identifier (UUID) for the action",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-type",
          description: "The type of execution",
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
        "Lists tags associated with a budget or budget action resource",
      options: [
        {
          name: "--resource-arn",
          description: "The unique identifier for the resource",
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
      description: "Creates tags for a budget or budget action resource",
      options: [
        {
          name: "--resource-arn",
          description: "The unique identifier for the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tags",
          description: "The tags associated with the resource",
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
        "Deletes tags associated with a budget or budget action resource",
      options: [
        {
          name: "--resource-arn",
          description: "The unique identifier for the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tag-keys",
          description: "The key that's associated with the tag",
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
      name: "update-budget",
      description:
        "Updates a budget. You can change every part of a budget except for the budgetName and the calculatedSpend. When you modify a budget, the calculatedSpend drops to zero until Amazon Web Services has new usage data to use for forecasting.  Only one of BudgetLimit or PlannedBudgetLimits can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the BudgetLimit syntax. For PlannedBudgetLimits, see the Examples section",
      options: [
        {
          name: "--account-id",
          description:
            "The accountId that is associated with the budget that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-budget",
          description: "The budget that you want to update your budget to",
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
      name: "update-budget-action",
      description: "Updates a budget action",
      options: [
        {
          name: "--account-id",
          description: "The account ID of the user. It's a 12-digit number",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            'A string that represents the budget name. The ":" and "\\" characters, and the "/action/" substring, aren\'t allowed',
          args: {
            name: "string",
          },
        },
        {
          name: "--action-id",
          description:
            "A system-generated universally unique identifier (UUID) for the action",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-type",
          description:
            "The type of a notification. It must be ACTUAL or FORECASTED",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-threshold",
          description: "The trigger threshold of the action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--definition",
          description: "Specifies all of the type-specific parameters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The role passed for action execution and reversion. Roles and actions must be in the same account",
          args: {
            name: "string",
          },
        },
        {
          name: "--approval-model",
          description:
            "This specifies if the action needs manual or automatic approval",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscribers",
          description: "A list of subscribers",
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
      name: "update-notification",
      description: "Updates a notification",
      options: [
        {
          name: "--account-id",
          description:
            "The accountId that is associated with the budget whose notification you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            "The name of the budget whose notification you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--old-notification",
          description:
            "The previous notification that is associated with a budget",
          args: {
            name: "structure",
          },
        },
        {
          name: "--new-notification",
          description:
            "The updated notification to be associated with a budget",
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
      name: "update-subscriber",
      description: "Updates a subscriber",
      options: [
        {
          name: "--account-id",
          description:
            "The accountId that is associated with the budget whose subscriber you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--budget-name",
          description:
            "The name of the budget whose subscriber you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification",
          description: "The notification whose subscriber you want to update",
          args: {
            name: "structure",
          },
        },
        {
          name: "--old-subscriber",
          description:
            "The previous subscriber that is associated with a budget notification",
          args: {
            name: "structure",
          },
        },
        {
          name: "--new-subscriber",
          description:
            "The updated subscriber that is associated with a budget notification",
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
