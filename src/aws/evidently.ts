const completionSpec: Fig.Spec = {
  name: "evidently",
  description:
    "You can use Amazon CloudWatch Evidently to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to your users. This helps you reduce risk and identify unintended consequences before you fully launch the feature. You can also conduct A/B experiments to make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it using statistical methods. It also provides clear recommendations about which variations perform better. You can test both user-facing features and backend features",
  subcommands: [
    {
      name: "batch-evaluate-feature",
      description:
        "This operation assigns feature variation to user sessions. For each user session, you pass in an entityID that represents the user. Evidently then checks the evaluation rules and assigns the variation. The first rules that are evaluated are the override rules. If the user's entityID matches an override rule, the user is served the variation specified by that rule. Next, if there is a launch of the feature, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch. If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment. If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment.  If the user is not assigned to a launch or experiment, they are served the default variation",
      options: [
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the feature being evaluated",
          args: {
            name: "string",
          },
        },
        {
          name: "--requests",
          description:
            "An array of structures, where each structure assigns a feature variation to one user session",
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
      name: "create-experiment",
      description:
        "Creates an Evidently experiment. Before you create an experiment, you must create the feature to use for the experiment. An experiment helps you make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it by statistical methods, and provides clear recommendations about which variations perform better. You can optionally specify a segment to have the experiment consider only certain audience types in the experiment, such as using only user sessions from a certain location or who use a certain internet browser. Don't use this operation to update an existing experiment. Instead, use UpdateExperiment",
      options: [
        {
          name: "--description",
          description: "An optional description of the experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-goals",
          description:
            "An array of structures that defines the metrics used for the experiment, and whether a higher or lower value for each metric is the goal",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          description: "A name for the new experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--online-ab-config",
          description:
            'A structure that contains the configuration of which variation to use as the "control" version. tThe "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation',
          args: {
            name: "structure",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that you want to create the new experiment in",
          args: {
            name: "string",
          },
        },
        {
          name: "--randomization-salt",
          description:
            "When Evidently assigns a particular user session to an experiment, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and randomizationSalt. If you omit randomizationSalt, Evidently uses the experiment name as the randomizationSalt",
          args: {
            name: "string",
          },
        },
        {
          name: "--sampling-rate",
          description:
            "The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience is the total audience minus the audience that you have allocated to overrides or current launches of this feature. This is represented in thousandths of a percent. For example, specify 10,000 to allocate 10% of the available audience",
          args: {
            name: "long",
          },
        },
        {
          name: "--segment",
          description:
            "Specifies an audience segment to use in the experiment. When a segment is used in an experiment, only user sessions that match the segment pattern are used in the experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Assigns one or more tags (key-value pairs) to the experiment. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can associate as many as 50 tags with an experiment. For more information, see Tagging Amazon Web Services resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--treatments",
          description:
            "An array of structures that describe the configuration of each feature variation used in the experiment",
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
      name: "create-feature",
      description:
        "Creates an Evidently feature that you want to launch or test. You can define up to five variations of a feature, and use these variations in your launches and experiments. A feature must be created in a project. For information about creating a project, see CreateProject. Don't use this operation to update an existing feature. Instead, use UpdateFeature",
      options: [
        {
          name: "--default-variation",
          description:
            "The name of the variation to use as the default variation. The default variation is served to users who are not allocated to any ongoing launches or experiments of this feature. This variation must also be listed in the variations structure. If you omit defaultVariation, the first variation listed in the variations structure is used as the default variation",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description of the feature",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-overrides",
          description:
            "Specify users that should always be served a specific variation of a feature. Each user is specified by a key-value pair . For each key, specify a user by entering their user ID, account ID, or some other identifier. For the value, specify the name of the variation that they are to be served. This parameter is limited to 2500 overrides or a total of 40KB. The 40KB limit includes an overhead of 6 bytes per override",
          args: {
            name: "map",
          },
        },
        {
          name: "--evaluation-strategy",
          description:
            "Specify ALL_RULES to activate the traffic allocation specified by any ongoing launches or experiments. Specify DEFAULT_VARIATION to serve the default variation to all users instead",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name for the new feature",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that is to contain the new feature",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Assigns one or more tags (key-value pairs) to the feature. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can associate as many as 50 tags with a feature. For more information, see Tagging Amazon Web Services resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--variations",
          description:
            "An array of structures that contain the configuration of the feature's different variations",
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
      name: "create-launch",
      description:
        "Creates a launch of a given feature. Before you create a launch, you must create the feature to use for the launch. You can use a launch to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to more users. This helps you reduce risk and identify unintended consequences before you fully launch the feature. Don't use this operation to update an existing launch. Instead, use UpdateLaunch",
      options: [
        {
          name: "--description",
          description: "An optional description for the launch",
          args: {
            name: "string",
          },
        },
        {
          name: "--groups",
          description:
            "An array of structures that contains the feature and variations that are to be used for the launch",
          args: {
            name: "list",
          },
        },
        {
          name: "--metric-monitors",
          description:
            "An array of structures that define the metrics that will be used to monitor the launch performance",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          description: "The name for the new launch",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that you want to create the launch in",
          args: {
            name: "string",
          },
        },
        {
          name: "--randomization-salt",
          description:
            "When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and randomizationSalt. If you omit randomizationSalt, Evidently uses the launch name as the randomizationSalt",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduled-splits-config",
          description:
            "An array of structures that define the traffic allocation percentages among the feature variations during each step of the launch",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Assigns one or more tags (key-value pairs) to the launch. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can associate as many as 50 tags with a launch. For more information, see Tagging Amazon Web Services resources",
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
      name: "create-project",
      description:
        "Creates a project, which is the logical object in Evidently that can contain features, launches, and experiments. Use projects to group similar features together. To update an existing project, use UpdateProject",
      options: [
        {
          name: "--app-config-resource",
          description:
            "Use this parameter if the project will use client-side evaluation powered by AppConfig. Client-side evaluation allows your application to assign variations to user sessions locally instead of by calling the EvaluateFeature operation. This mitigates the latency and availability risks that come with an API call. For more information, see  Client-side evaluation - powered by AppConfig.  This parameter is a structure that contains information about the AppConfig application and environment that will be used as for client-side evaluation. To create a project that uses client-side evaluation, you must have the evidently:ExportProjectAsConfiguration permission",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-delivery",
          description:
            "A structure that contains information about where Evidently is to store evaluation events for longer term storage, if you choose to do so. If you choose not to store these events, Evidently deletes them after using them to produce metrics and other experiment results that you can view",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "An optional description of the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name for the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Assigns one or more tags (key-value pairs) to the project. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can associate as many as 50 tags with a project. For more information, see Tagging Amazon Web Services resources",
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
      name: "create-segment",
      description:
        "Use this operation to define a segment of your audience. A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age. Using a segment in an experiment limits that experiment to evaluate only the users who match the segment criteria. Using one or more segments in a launch allows you to define different traffic splits for the different audience segments. For more information about segment pattern syntax, see  Segment rule pattern syntax. The pattern that you define for a segment is matched against the value of evaluationContext, which is passed into Evidently in the EvaluateFeature operation, when Evidently assigns a feature variation to a user",
      options: [
        {
          name: "--description",
          description: "An optional description for this segment",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A name for the segment",
          args: {
            name: "string",
          },
        },
        {
          name: "--pattern",
          description:
            "The pattern to use for the segment. For more information about pattern syntax, see  Segment rule pattern syntax",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Assigns one or more tags (key-value pairs) to the segment. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can associate as many as 50 tags with a segment. For more information, see Tagging Amazon Web Services resources",
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
      name: "delete-experiment",
      description:
        "Deletes an Evidently experiment. The feature used for the experiment is not deleted. To stop an experiment without deleting it, use StopExperiment",
      options: [
        {
          name: "--experiment",
          description: "The name of the experiment to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the experiment to delete",
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
      name: "delete-feature",
      description: "Deletes an Evidently feature",
      options: [
        {
          name: "--feature",
          description: "The name of the feature to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the feature to delete",
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
      name: "delete-launch",
      description:
        "Deletes an Evidently launch. The feature used for the launch is not deleted. To stop a launch without deleting it, use StopLaunch",
      options: [
        {
          name: "--launch",
          description: "The name of the launch to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the launch to delete",
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
      name: "delete-project",
      description:
        "Deletes an Evidently project. Before you can delete a project, you must delete all the features that the project contains. To delete a feature, use DeleteFeature",
      options: [
        {
          name: "--project",
          description: "The name or ARN of the project to delete",
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
      name: "delete-segment",
      description:
        "Deletes a segment. You can't delete a segment that is being used in a launch or experiment, even if that launch or experiment is not currently running",
      options: [
        {
          name: "--segment",
          description: "Specifies the segment to delete",
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
      name: "evaluate-feature",
      description:
        "This operation assigns a feature variation to one given user session. You pass in an entityID that represents the user. Evidently then checks the evaluation rules and assigns the variation. The first rules that are evaluated are the override rules. If the user's entityID matches an override rule, the user is served the variation specified by that rule. If there is a current launch with this feature that uses segment overrides, and if the user session's evaluationContext matches a segment rule defined in a segment override, the configuration in the segment overrides is used. For more information about segments, see CreateSegment and Use segments to focus your audience. If there is a launch with no segment overrides, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch. If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment. If the experiment uses a segment, then only user sessions with evaluationContext values that match the segment rule are used in the experiment. If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment.  If the user is not assigned to a launch or experiment, they are served the default variation",
      options: [
        {
          name: "--entity-id",
          description:
            "An internal ID that represents a unique user of the application. This entityID is checked against any override rules assigned for this feature",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-context",
          description:
            "A JSON object of attributes that you can optionally pass in as part of the evaluation event sent to Evidently from the user session. Evidently can use this value to match user sessions with defined audience segments. For more information, see Use segments to focus your audience. If you include this parameter, the value must be a JSON object. A JSON array is not supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature",
          description: "The name of the feature being evaluated",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains this feature",
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
      name: "get-experiment",
      description:
        "Returns the details about one experiment. You must already know the experiment name. To retrieve a list of experiments in your account, use ListExperiments",
      options: [
        {
          name: "--experiment",
          description:
            "The name of the experiment that you want to see the details of",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the experiment",
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
      name: "get-experiment-results",
      description:
        "Retrieves the results of a running or completed experiment. No results are available until there have been 100 events for each variation and at least 10 minutes have passed since the start of the experiment. To increase the statistical power, Evidently performs an additional offline p-value analysis at the end of the experiment. Offline p-value analysis can detect statistical significance in some cases where the anytime p-values used during the experiment do not find statistical significance. Experiment results are available up to 63 days after the start of the experiment. They are not available after that because of CloudWatch data retention policies",
      options: [
        {
          name: "--base-stat",
          description:
            "The statistic used to calculate experiment results. Currently the only valid value is mean, which uses the mean of the collected values as the statistic",
          args: {
            name: "string",
          },
        },
        {
          name: "--end-time",
          description:
            "The date and time that the experiment ended, if it is completed. This must be no longer than 30 days after the experiment start time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--experiment",
          description: "The name of the experiment to retrieve the results of",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-names",
          description:
            "The names of the experiment metrics that you want to see the results of",
          args: {
            name: "list",
          },
        },
        {
          name: "--period",
          description:
            "In seconds, the amount of time to aggregate results together",
          args: {
            name: "long",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the experiment that you want to see the results of",
          args: {
            name: "string",
          },
        },
        {
          name: "--report-names",
          description:
            "The names of the report types that you want to see. Currently, BayesianInference is the only valid value",
          args: {
            name: "list",
          },
        },
        {
          name: "--result-stats",
          description:
            "The statistics that you want to see in the returned results.    PValue specifies to use p-values for the results. A p-value is used in hypothesis testing to measure how often you are willing to make a mistake in rejecting the null hypothesis. A general practice is to reject the null hypothesis and declare that the results are statistically significant when the p-value is less than 0.05.    ConfidenceInterval specifies a confidence interval for the results. The confidence interval represents the range of values for the chosen metric that is likely to contain the true difference between the baseStat of a variation and the baseline. Evidently returns the 95% confidence interval.     TreatmentEffect is the difference in the statistic specified by the baseStat parameter between each variation and the default variation.     BaseStat returns the statistical values collected for the metric for each variation. The statistic uses the same statistic specified in the baseStat parameter. Therefore, if baseStat is mean, this returns the mean of the values collected for each variation",
          args: {
            name: "list",
          },
        },
        {
          name: "--start-time",
          description: "The date and time that the experiment started",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--treatment-names",
          description:
            "The names of the experiment treatments that you want to see the results for",
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
      name: "get-feature",
      description:
        "Returns the details about one feature. You must already know the feature name. To retrieve a list of features in your account, use ListFeatures",
      options: [
        {
          name: "--feature",
          description:
            "The name of the feature that you want to retrieve information for",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the feature",
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
      name: "get-launch",
      description:
        "Returns the details about one launch. You must already know the launch name. To retrieve a list of launches in your account, use ListLaunches",
      options: [
        {
          name: "--launch",
          description:
            "The name of the launch that you want to see the details of",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the launch",
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
      name: "get-project",
      description:
        "Returns the details about one launch. You must already know the project name. To retrieve a list of projects in your account, use ListProjects",
      options: [
        {
          name: "--project",
          description:
            "The name or ARN of the project that you want to see the details of",
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
      name: "get-segment",
      description:
        "Returns information about the specified segment. Specify the segment you want to view by specifying its ARN",
      options: [
        {
          name: "--segment",
          description: "The ARN of the segment to return information for",
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
      name: "list-experiments",
      description:
        "Returns configuration details about all the experiments in the specified project",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use when requesting the next set of results. You received this token from a previous ListExperiments operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project to return the experiment list from",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Use this optional parameter to limit the returned results to only the experiments with the status that you specify here",
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
      name: "list-features",
      description:
        "Returns configuration details about all the features in the specified project",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use when requesting the next set of results. You received this token from a previous ListFeatures operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project to return the feature list from",
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
      name: "list-launches",
      description:
        "Returns configuration details about all the launches in the specified project",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use when requesting the next set of results. You received this token from a previous ListLaunches operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project to return the launch list from",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Use this optional parameter to limit the returned results to only the launches with the status that you specify here",
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
      name: "list-projects",
      description:
        "Returns configuration details about all the projects in the current Region in your account",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use when requesting the next set of results. You received this token from a previous ListProjects operation",
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
      name: "list-segment-references",
      description:
        "Use this operation to find which experiments or launches are using a specified segment",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response. If you omit this, the default of 50 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use when requesting the next set of results. You received this token from a previous ListSegmentReferences operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment",
          description:
            "The ARN of the segment that you want to view information for",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Specifies whether to return information about launches or experiments that use this segment",
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
      name: "list-segments",
      description:
        "Returns a list of audience segments that you have created in your account in this Region",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response. If you omit this, the default of 50 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use when requesting the next set of results. You received this token from a previous ListSegments operation",
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
      name: "list-tags-for-resource",
      description: "Displays the tags associated with an Evidently resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource that you want to see the tags of",
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
      name: "put-project-events",
      description:
        "Sends performance events to Evidently. These events can be used to evaluate a launch or an experiment",
      options: [
        {
          name: "--events",
          description:
            "An array of event structures that contain the performance data that is being sent to Evidently",
          args: {
            name: "list",
          },
        },
        {
          name: "--project",
          description: "The name or ARN of the project to write the events to",
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
      name: "start-experiment",
      description:
        "Starts an existing experiment. To create an experiment, use CreateExperiment",
      options: [
        {
          name: "--analysis-complete-time",
          description:
            "The date and time to end the experiment. This must be no more than 30 days after the experiment starts",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--experiment",
          description: "The name of the experiment to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the experiment to start",
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
      name: "start-launch",
      description:
        "Starts an existing launch. To create a launch, use CreateLaunch",
      options: [
        {
          name: "--launch",
          description: "The name of the launch to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the launch to start",
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
      name: "stop-experiment",
      description:
        "Stops an experiment that is currently running. If you stop an experiment, you can't resume it or restart it",
      options: [
        {
          name: "--desired-state",
          description:
            "Specify whether the experiment is to be considered COMPLETED or CANCELLED after it stops",
          args: {
            name: "string",
          },
        },
        {
          name: "--experiment",
          description: "The name of the experiment to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the experiment to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description:
            "A string that describes why you are stopping the experiment",
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
      name: "stop-launch",
      description:
        "Stops a launch that is currently running. After you stop a launch, you will not be able to resume it or restart it. Also, it will not be evaluated as a rule for traffic allocation, and the traffic that was allocated to the launch will instead be available to the feature's experiment, if there is one. Otherwise, all traffic will be served the default variation after the launch is stopped",
      options: [
        {
          name: "--desired-state",
          description:
            "Specify whether to consider the launch as COMPLETED or CANCELLED after it stops",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch",
          description: "The name of the launch to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the launch that you want to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description:
            "A string that describes why you are stopping the launch",
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
        "Assigns one or more tags (key-value pairs) to the specified CloudWatch Evidently resource. Projects, features, launches, and experiments can be tagged. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource. For more information, see Tagging Amazon Web Services resources",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the CloudWatch Evidently resource that you're adding tags to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of key-value pairs to associate with the resource",
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
      name: "test-segment-pattern",
      description:
        "Use this operation to test a rules pattern that you plan to use to create an audience segment. For more information about segments, see CreateSegment",
      options: [
        {
          name: "--pattern",
          description: "The pattern to test",
          args: {
            name: "string",
          },
        },
        {
          name: "--payload",
          description:
            "A sample evaluationContext JSON block to test against the specified pattern",
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
      name: "untag-resource",
      description: "Removes one or more tags from the specified resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the CloudWatch Evidently resource that you're removing tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The list of tag keys to remove from the resource",
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
      name: "update-experiment",
      description:
        "Updates an Evidently experiment.  Don't use this operation to update an experiment's tag. Instead, use TagResource",
      options: [
        {
          name: "--description",
          description: "An optional description of the experiment",
          args: {
            name: "string",
          },
        },
        {
          name: "--experiment",
          description: "The name of the experiment to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-goals",
          description:
            "An array of structures that defines the metrics used for the experiment, and whether a higher or lower value for each metric is the goal",
          args: {
            name: "list",
          },
        },
        {
          name: "--online-ab-config",
          description:
            'A structure that contains the configuration of which variation o use as the "control" version. The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation',
          args: {
            name: "structure",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the experiment that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--randomization-salt",
          description:
            "When Evidently assigns a particular user session to an experiment, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and randomizationSalt. If you omit randomizationSalt, Evidently uses the experiment name as the randomizationSalt",
          args: {
            name: "string",
          },
        },
        {
          name: "--remove-segment",
          description:
            "Removes a segment from being used in an experiment. You can't use this parameter if the experiment is currently running",
        },
        {
          name: "--no-remove-segment",
          description:
            "Removes a segment from being used in an experiment. You can't use this parameter if the experiment is currently running",
        },
        {
          name: "--sampling-rate",
          description:
            "The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience is the total audience minus the audience that you have allocated to overrides or current launches of this feature. This is represented in thousandths of a percent. For example, specify 20,000 to allocate 20% of the available audience",
          args: {
            name: "long",
          },
        },
        {
          name: "--segment",
          description:
            "Adds an audience segment to an experiment. When a segment is used in an experiment, only user sessions that match the segment pattern are used in the experiment. You can't use this parameter if the experiment is currently running",
          args: {
            name: "string",
          },
        },
        {
          name: "--treatments",
          description:
            "An array of structures that define the variations being tested in the experiment",
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
      name: "update-feature",
      description:
        "Updates an existing feature. You can't use this operation to update the tags of an existing feature. Instead, use TagResource",
      options: [
        {
          name: "--add-or-update-variations",
          description:
            "To update variation configurations for this feature, or add new ones, specify this structure. In this array, include any variations that you want to add or update. If the array includes a variation name that already exists for this feature, it is updated. If it includes a new variation name, it is added as a new variation",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-variation",
          description:
            "The name of the variation to use as the default variation. The default variation is served to users who are not allocated to any ongoing launches or experiments of this feature",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description of the feature",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-overrides",
          description:
            "Specified users that should always be served a specific variation of a feature. Each user is specified by a key-value pair . For each key, specify a user by entering their user ID, account ID, or some other identifier. For the value, specify the name of the variation that they are to be served. This parameter is limited to 2500 overrides or a total of 40KB. The 40KB limit includes an overhead of 6 bytes per override",
          args: {
            name: "map",
          },
        },
        {
          name: "--evaluation-strategy",
          description:
            "Specify ALL_RULES to activate the traffic allocation specified by any ongoing launches or experiments. Specify DEFAULT_VARIATION to serve the default variation to all users instead",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature",
          description: "The name of the feature to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the feature to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--remove-variations",
          description:
            "Removes a variation from the feature. If the variation you specify doesn't exist, then this makes no change and does not report an error. This operation fails if you try to remove a variation that is part of an ongoing launch or experiment",
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
      name: "update-launch",
      description:
        "Updates a launch of a given feature.  Don't use this operation to update the tags of an existing launch. Instead, use TagResource",
      options: [
        {
          name: "--description",
          description: "An optional description for the launch",
          args: {
            name: "string",
          },
        },
        {
          name: "--groups",
          description:
            "An array of structures that contains the feature and variations that are to be used for the launch",
          args: {
            name: "list",
          },
        },
        {
          name: "--launch",
          description: "The name of the launch that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-monitors",
          description:
            "An array of structures that define the metrics that will be used to monitor the launch performance",
          args: {
            name: "list",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that contains the launch that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--randomization-salt",
          description:
            "When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and randomizationSalt. If you omit randomizationSalt, Evidently uses the launch name as the randomizationSalt",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduled-splits-config",
          description:
            "An array of structures that define the traffic allocation percentages among the feature variations during each step of the launch",
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
      name: "update-project",
      description:
        "Updates the description of an existing project. To create a new project, use CreateProject. Don't use this operation to update the data storage options of a project. Instead, use UpdateProjectDataDelivery.  Don't use this operation to update the tags of a project. Instead, use TagResource",
      options: [
        {
          name: "--app-config-resource",
          description:
            "Use this parameter if the project will use client-side evaluation powered by AppConfig. Client-side evaluation allows your application to assign variations to user sessions locally instead of by calling the EvaluateFeature operation. This mitigates the latency and availability risks that come with an API call. allows you to This parameter is a structure that contains information about the AppConfig application that will be used for client-side evaluation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "An optional description of the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--project",
          description: "The name or ARN of the project to update",
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
      name: "update-project-data-delivery",
      description:
        "Updates the data storage options for this project. If you store evaluation events, you an keep them and analyze them on your own. If you choose not to store evaluation events, Evidently deletes them after using them to produce metrics and other experiment results that you can view. You can't specify both cloudWatchLogs and s3Destination in the same operation",
      options: [
        {
          name: "--cloud-watch-logs",
          description:
            "A structure containing the CloudWatch Logs log group where you want to store evaluation events",
          args: {
            name: "structure",
          },
        },
        {
          name: "--project",
          description:
            "The name or ARN of the project that you want to modify the data storage options for",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-destination",
          description:
            "A structure containing the S3 bucket name and bucket prefix where you want to store evaluation events",
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
