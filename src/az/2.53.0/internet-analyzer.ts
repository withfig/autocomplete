const completion: Fig.Spec = {
  name: "internet-analyzer",
  description: "Commands to manage internet analyzer",
  subcommands: [
    {
      name: "preconfigured-endpoint",
      description: "Commands to manage preconfigured endpoints",
      subcommands: [
        {
          name: "list",
          description: "List preconfigured endpoints",
          options: [
            {
              name: "--profile-name",
              description:
                "The name of the Internet Analyzer profile for which to list preconfigured endpoints",
              args: { name: "profile-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "profile",
      description: "Commands to manage internet analyzer profile",
      subcommands: [
        {
          name: "create",
          description: "Create internet analyzer profile",
          options: [
            {
              name: "--name",
              description:
                "The name of the Internet Analyzer profile to be created",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--enabled-state",
              description: "The state of the Experiment",
              args: {
                name: "enabled-state",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete internet analyzer profile",
          options: [
            {
              name: "--name",
              description:
                "The name of the Internet Analyzer profile to be deleted",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List internet analyzer profiles",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show internet analyzer profile",
          options: [
            {
              name: "--name",
              description: "The name of the Internet Analyzer profile to show",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update internet analyzer profile",
          options: [
            {
              name: "--name",
              description:
                "The name of the Internet Analyzer profile to be updated",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--enabled-state",
              description: "The state of the Experiment",
              args: {
                name: "enabled-state",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
    {
      name: "show-scorecard",
      description: "Show latency scorecard for a test",
      options: [
        {
          name: "--aggregation-interval",
          description: "The aggregation interval of the Latency Scorecard",
          args: { name: "aggregation-interval" },
          isRequired: true,
        },
        {
          name: "--profile-name",
          description:
            "The name of the Internet Analyzer profile under which the test exists",
          args: { name: "profile-name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--test-name",
          description: "The name of the Internet Analyzer test",
          args: { name: "test-name" },
          isRequired: true,
        },
        {
          name: "--country",
          description:
            "The country associated with the Latency Scorecard. Values are country ISO codes as specified here - https://www.iso.org/iso-3166-country-codes.html",
          args: { name: "country" },
        },
        {
          name: "--end-date-time-utc",
          description: "The end DateTime of the Latency Scorecard in UTC",
          args: { name: "end-date-time-utc" },
        },
      ],
    },
    {
      name: "show-timeseries",
      description: "Show timeseries for a test",
      options: [
        {
          name: "--aggregation-interval",
          description: "The aggregation interval of the Timeseries",
          args: { name: "aggregation-interval" },
          isRequired: true,
        },
        {
          name: "--end-date-time-utc",
          description: "The end DateTime of the Timeseries in UTC",
          args: { name: "end-date-time-utc" },
          isRequired: true,
        },
        {
          name: "--endpoint",
          description: "The specific endpoint",
          args: { name: "endpoint" },
          isRequired: true,
        },
        {
          name: "--profile-name",
          description:
            "The name of the Internet Analyzer profile under which the test exists",
          args: { name: "profile-name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--start-date-time-utc",
          description: "The start DateTime of the Timeseries in UTC",
          args: { name: "start-date-time-utc" },
          isRequired: true,
        },
        {
          name: "--test-name",
          description: "The name of the Internet Analyzer test",
          args: { name: "test-name" },
          isRequired: true,
        },
        {
          name: "--timeseries-type",
          description: "The type of Timeseries",
          args: { name: "timeseries-type" },
          isRequired: true,
        },
        {
          name: "--country",
          description:
            "The country associated with the Latency Scorecard. Values are country ISO codes as specified here - https://www.iso.org/iso-3166-country-codes.html",
          args: { name: "country" },
        },
      ],
    },
    {
      name: "test",
      description: "Commands to manage tests",
      subcommands: [
        {
          name: "create",
          description: "Create test",
          options: [
            {
              name: "--name",
              description:
                "The name of the Internet Analyzer test to be created",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description:
                "The name of the Internet Analyzer profile under which the new test should be created",
              args: { name: "profile-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description of the details or intents of the test",
              args: { name: "description" },
            },
            {
              name: "--enabled-state",
              description: "The initial of the test",
              args: {
                name: "enabled-state",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--endpoint-a-endpoint",
              description:
                'The URL of the control endpoint in [/] format (e.g., www.contoso.com or www.contoso.com/some/path/to/trans.gif). Must support HTTPS. If an object path isn\'t specified explicitly, Internet Analyzer will use "/apc/trans.gif" as the object path by default, which is where the preconfigured endpoints are hosting the one-pixel image',
              args: { name: "endpoint-a-endpoint" },
            },
            {
              name: "--endpoint-a-name",
              description: "The name of the control endpoint",
              args: { name: "endpoint-a-name" },
            },
            {
              name: "--endpoint-b-endpoint",
              description:
                'The URL of the other endpoint in [/] format (e.g., www.contoso.com or www.contoso.com/some/path/to/trans.gif). Must support HTTPS. If an object path isn\'t specified explicitly, Internet Analyzer will use "/apc/trans.gif" as the object path by default, which is where the preconfigured endpoints are hosting the one-pixel image',
              args: { name: "endpoint-b-endpoint" },
            },
            {
              name: "--endpoint-b-name",
              description: "The name of the other endpoint",
              args: { name: "endpoint-b-name" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete test",
          options: [
            {
              name: "--name",
              description: "The name of the Internet Analyzer test to delete",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description:
                "The name of the Internet Analyzer profile under which the test exists",
              args: { name: "profile-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List tests",
          options: [
            {
              name: "--profile-name",
              description:
                "The name of the Internet Analyzer profile for which to list tests",
              args: { name: "profile-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show test",
          options: [
            {
              name: "--name",
              description: "The name of the Internet Analyzer test to show",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description:
                "The name of the Internet Analyzer profile under which the test exists",
              args: { name: "profile-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update test",
          options: [
            {
              name: "--name",
              description:
                "The name of the Internet Analyzer test to be updated",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description:
                "The name of the Internet Analyzer profile under which the test exists",
              args: { name: "profile-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "The description of the details or intents of the test",
              args: { name: "description" },
            },
            {
              name: "--enabled-state",
              description: "The state of the Experiment",
              args: {
                name: "enabled-state",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--endpoint-a-endpoint",
              description:
                'The URL of the control endpoint in [/] format (e.g., www.contoso.com or www.contoso.com/some/path/to/trans.gif). Must support HTTPS. If an object path isn\'t specified explicitly, Internet Analyzer will use "/apc/trans.gif" as the object path by default, which is where the preconfigured endpoints are hosting the one-pixel image',
              args: { name: "endpoint-a-endpoint" },
            },
            {
              name: "--endpoint-a-name",
              description: "The name of the control endpoint",
              args: { name: "endpoint-a-name" },
            },
            {
              name: "--endpoint-b-endpoint",
              description:
                'The URL of the other endpoint in [/] format (e.g., www.contoso.com or www.contoso.com/some/path/to/trans.gif). Must support HTTPS. If an object path isn\'t specified explicitly, Internet Analyzer will use "/apc/trans.gif" as the object path by default, which is where the preconfigured endpoints are hosting the one-pixel image',
              args: { name: "endpoint-b-endpoint" },
            },
            {
              name: "--endpoint-b-name",
              description: "The name of the other endpoint",
              args: { name: "endpoint-b-name" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
