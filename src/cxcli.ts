const completionSpec: Fig.Spec = {
  name: "cxcli",
  description: "Dialogflow CX CLI",
  subcommands: [
    {
      name: ["agent", "a", "agent"],
      description: "Actions on agent commands",
      subcommands: [
        {
          name: ["creates", "c", "create"],
          description: "Creates an agent",
          options: [
            {
              name: ["--avatar-uri", "-r"],
              description: "Avatar URI of the agent (optional)",
              args: { name: "avatar-uri" },
            },
            {
              name: ["--description", "-d"],
              description: "Description of the agent (optional)",
              args: { name: "description" },
            },
            {
              name: ["--enable-interaction-logging", "-b"],
              description:
                "Enable interaction logging for this agent. Possible values: true or false (optional)",
              args: { name: "enable-interaction-logging" },
            },
            {
              name: ["--enable-speech-adaptation", "-s"],
              description:
                "Enable speech adaptation for this agent. Possible values: true or false (optional)",
              args: { name: "enable-speech-adaptation" },
            },
            {
              name: ["--enable-spell-correction", "-n"],
              description:
                "Enable spell correction for this agent. Possible values: true or false (optional)",
              args: { name: "enable-spell-correction" },
            },
            {
              name: ["--enable-stackdriver-logging", "-a"],
              description:
                "Enable Google Stackdriver logging for this agent. Possible values: true or false (optional)",
              args: { name: "enable-stackdriver-logging" },
            },
            {
              name: ["--locale", "-e"],
              description: "Default locale of the agent (required)",
              args: { name: "locale" },
              isRequired: true,
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: ["--supported-locales", "-x"],
              description:
                "Supported locales of the agent, comma separated. Example: fr,es,de (optional)",
              isRepeatable: true,
              args: { name: "supported-locales" },
            },
            {
              name: ["--timezone", "-t"],
              description:
                "Timezone of the agent from the time zone database https://www.iana.org/time-zones. Example: America/New_York, Europe/Madrid (required)",
              args: { name: "timezone" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["deletes", "remove", "d", "del", "delete"],
          description: "Deletes a specific agent",
          options: [
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["export", "e", "ex", "export"],
          description: "Executes an export for a specific agent",
          options: [
            {
              name: ["--export-format", "-t"],
              description:
                "Export format type: json or blob. blob by default. Default: blob (optional)",
              args: { name: "export-format", default: "blob" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--output-file", "-f"],
              description: "Output file name. Default: agent.blob (optional)",
              args: { name: "output-file", default: "agent.blob" },
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["restore", "r", "re", "restore"],
          description: "Executes a restore action for a specific agent",
          options: [
            {
              name: ["--input", "-i"],
              description: "Input file name. Default: agent.blob (optional)",
              args: { name: "input", default: "agent.blob" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["update", "u", "update"],
          description: "Update an agent",
          options: [
            {
              name: ["--avatar-uri", "-r"],
              description: "Avatar URI of the agent (optional)",
              args: { name: "avatar-uri" },
            },
            {
              name: ["--description", "-d"],
              description: "Description of the agent (optional)",
              args: { name: "description" },
            },
            {
              name: ["--enable-interaction-logging", "-b"],
              description:
                "Enable interaction logging for this agent. Possible values: true or false (optional)",
              args: { name: "enable-interaction-logging" },
            },
            {
              name: ["--enable-speech-adaptation", "-s"],
              description:
                "Enable speech adaptation for this agent. Possible values: true or false (optional)",
              args: { name: "enable-speech-adaptation" },
            },
            {
              name: ["--enable-spell-correction", "-n"],
              description:
                "Enable spell correction for this agent. Possible values: true or false (optional)",
              args: { name: "enable-spell-correction" },
            },
            {
              name: ["--enable-stackdriver-logging", "-a"],
              description:
                "Enable Google Stackdriver logging for this agent. Possible values: true or false (optional)",
              args: { name: "enable-stackdriver-logging" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: ["--supported-locales", "-x"],
              description:
                "Supported locales of the agent, comma separated. Example: fr,es,de (optional)",
              isRepeatable: true,
              args: { name: "supported-locales" },
            },
            {
              name: ["--timezone", "-t"],
              description:
                "Timezone of the agent from the time zone database https://www.iana.org/time-zones. Example: America/New_York, Europe/Madrid (optional)",
              args: { name: "timezone" },
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: ["d", "dialog"],
      description:
        "Test your CX Agent interactively directly from your terminal",
      options: [
        {
          name: ["--agent-name", "-a"],
          description: "Dialogflow CX Agent Name (required)",
          args: { name: "agent-name" },
          isRequired: true,
        },
        {
          name: ["--locale", "-e"],
          description: "Locale of the intent. Default: agent locale (optional)",
          args: { name: "locale" },
        },
        {
          name: ["--location-id", "-l"],
          description: "Dialogflow CX Location ID of the Project (required)",
          args: { name: "location-id" },
          isRequired: true,
        },
        {
          name: ["--project-id", "-p"],
          description: "Dialogflow CX Project ID (required)",
          args: { name: "project-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: ["entity", "type", "et", "entity-type"],
      description: "Actions on entity type commands",
      subcommands: [
        {
          name: ["creates", "c", "create"],
          description: "Creates an entity type in an agent",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--entities", "-n"],
              description:
                "List of the entities for this entity type, comma separated. Format: entity1@synonym1|synonym2,entity2@synonym1|synonym2. Example: pikachu@25|pika,charmander@3 (required)",
              isRepeatable: true,
              args: { name: "entities" },
              isRequired: true,
            },
            {
              name: ["--locale", "-e"],
              description:
                "Locale of the intent. Default: agent locale (optional)",
              args: { name: "locale" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: ["--redacted", "-r"],
              description:
                "Set the entity type as redacted. Possible values: true or false (optional)",
              args: { name: "redacted" },
            },
          ],
        },
        {
          name: ["deletes", "d", "removes", "remove", "del", "delete"],
          description: "Deletes an entity type in an agent",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--force", "-f"],
              description:
                "Forces to delete the Entity type. NOTE: it will delete all any references to the entity type. Possible values: true or false (optional)",
              args: { name: "force" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["updates", "u", "update"],
          description: "Updates an entity type in an agent",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--entities", "-n"],
              description:
                "List of the entities for this entity type, comma separated. Format: entity1@synonym1|synonym2,entity2@synonym1|synonym2. Example: pikachu@25|pika,charmander@3 (required)",
              isRepeatable: true,
              args: { name: "entities" },
              isRequired: true,
            },
            {
              name: ["--locale", "-e"],
              description:
                "Locale of the intent. Default: agent locale (optional)",
              args: { name: "locale" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: ["--redacted", "-r"],
              description:
                "Set the entity type as redacted. Possible values: true or false (optional)",
              args: { name: "redacted" },
            },
          ],
        },
      ],
    },
    {
      name: ["env", "e", "environment"],
      description: "Actions on environment",
      subcommands: [
        {
          name: ["creates", "s", "create"],
          description: "Create an environment",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--description", "-d"],
              description: "Description for this environment (optional)",
              args: { name: "description" },
            },
            {
              name: ["--flow-versions", "-s"],
              description:
                "List of Flow and its version to be added to this environment, comma separated. Format: flowName1@version1,flowName2|version2. Example: Default Start Flow@v1.0.0|Buy Flow@v1.0.1 (required)",
              isRepeatable: true,
              args: { name: "flow-versions" },
              isRequired: true,
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["d", "del", "remove", "deletes", "removes", "delete"],
          description: "Delete an environment",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["execute", "e", "exe", "exec", "execute-cicd"],
          description: "Executes a CI/CD pipeline for a specific environment",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["updates", "u", "update"],
          description: "Update an environment",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--description", "-d"],
              description: "Description for this environment (optional)",
              args: { name: "description" },
            },
            {
              name: ["--flow-versions", "-s"],
              description:
                "List of Flow and its version to be added to this environment, comma separated. Format: flowName1@version1,flowName2|version2. Example: Default Start Flow@v1.0.0|Buy Flow@v1.0.1 (required)",
              isRepeatable: true,
              args: { name: "flow-versions" },
              isRequired: true,
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: ["flow", "f", "flow"],
      description: "Actions on flow commands",
      subcommands: [
        {
          name: ["creates", "c", "create"],
          description: "Creates a flow in an agent",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--description", "-d"],
              description: "Description for this flow (optional)",
              args: { name: "description" },
            },
            {
              name: ["--locale", "-e"],
              description:
                "Locale of the flow. Default: agent locale (optional)",
              args: { name: "locale" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--nlu-classification-threshold", "-s"],
              description:
                "NLU Classification Threshold. From 0.0 (completely uncertain) to 1.0 (completely certain). Default: 0.3 (optional)",
              args: { name: "nlu-classification-threshold", default: "0.3" },
            },
            {
              name: ["--nlu-model-training-mode", "-t"],
              description:
                "NLU Model training mode. Possible values: automatic or manual. Default: manual (optional)",
              args: { name: "nlu-model-training-mode", default: "manual" },
            },
            {
              name: ["--nlu-model-type", "-m"],
              description:
                "NLU Model Type. Possible values: advanced or standard. Default: standard (optional)",
              args: { name: "nlu-model-type", default: "standard" },
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["deletes", "d", "del", "remove", "delete"],
          description: "Deletes a flow in an agent",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["trains", "t", "train"],
          description:
            'Trains a flow in an agent. If flow name is set to "all", it will train all flows in an agent',
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["updates", "u", "update"],
          description: "Updates a flow in an agent",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--description", "-d"],
              description: "Description for this flow (optional)",
              args: { name: "description" },
            },
            {
              name: ["--locale", "-e"],
              description:
                "Locale of the flow. Default: agent locale (optional)",
              args: { name: "locale" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--nlu-classification-threshold", "-s"],
              description:
                "NLU Classification Threshold. From 0.0 (completely uncertain) to 1.0 (completely certain). (optional)",
              args: { name: "nlu-classification-threshold" },
            },
            {
              name: ["--nlu-model-training-mode", "-t"],
              description:
                "NLU Model training mode. Possible values: automatic or manual (optional)",
              args: { name: "nlu-model-training-mode" },
            },
            {
              name: ["--nlu-model-type", "-m"],
              description:
                "NLU Model Type. Possible values: advanced or standard (optional)",
              args: { name: "nlu-model-type" },
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: ["fv", "ver", "flow-version"],
      description: "Actions on flow versions commands",
      subcommands: [
        {
          name: ["creates", "s", "create"],
          description: "Create a version",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--description", "-d"],
              description: "Description for this version (optional)",
              args: { name: "description" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: ["--start-flow", "-s"],
              description: "Start Flow name to create the version (required)",
              args: { name: "start-flow" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["d", "del", "remove", "deletes", "removes", "delete"],
          description: "Delete a version",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: ["--start-flow", "-s"],
              description: "Start Flow name to create the version (required)",
              args: { name: "start-flow" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["updates", "u", "update"],
          description: "Update a version",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--description", "-d"],
              description: "Description for this version (optional)",
              args: { name: "description" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: ["--start-flow", "-s"],
              description: "Start Flow name to create the version (required)",
              args: { name: "start-flow" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: ["g", "gen", "generator"],
      description: "Actions on generator commands",
      subcommands: [
        {
          name: ["creates", "s", "create"],
          description: "Create a generator",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--locale", "-e"],
              description:
                "Locale of the generator. Default: agent locale (optional)",
              args: { name: "locale" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: ["--prompt", "-r"],
              description: "Prompt (required)",
              args: { name: "prompt" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["d", "del", "remove", "deletes", "removes", "delete"],
          description: "Delete a generator",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--force", "-f"],
              description:
                "Forces to delete the generator and its references. Possible values: true or false (optional)",
              args: { name: "force" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["updates", "u", "update"],
          description: "Update a generator",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--locale", "-e"],
              description:
                "Locale of the generator. Default: agent locale (optional)",
              args: { name: "locale" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: ["--prompt", "-r"],
              description: "Prompt (required)",
              args: { name: "prompt" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: ["intent", "i", "intent"],
      description: "Actions on intent commands",
      subcommands: [
        {
          name: ["creates", "c", "create"],
          description: "Creates an intent in an agent",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--description", "-d"],
              description: "Description for this intent (optional)",
              args: { name: "description" },
            },
            {
              name: ["--locale", "-e"],
              description:
                "Locale of the intent. Default: agent locale (optional)",
              args: { name: "locale" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: ["--training-phrases", "-t"],
              description:
                "List of the training phrases for this intent, comma separated. Entities, add @entity-type to the word: word@entity-type in the training phrase. Example: hello,hi how are you today@sys.date,morning!. (required)",
              isRepeatable: true,
              args: { name: "training-phrases" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["deletes", "d", "del", "remove", "delete"],
          description: "Deletes an intent in an agent",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["updates", "u", "update"],
          description: "Updates an intent in an agent",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--description", "-d"],
              description: "Description for this intent (optional)",
              args: { name: "description" },
            },
            {
              name: ["--locale", "-e"],
              description:
                "Locale of the intent. Default: agent locale (optional)",
              args: { name: "locale" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: ["--training-phrases", "-t"],
              description:
                "List of the training phrases for this intent, comma separated. Entities, add @entity-type to the word: word@entity-type in the training phrase. Example: hello,hi how are you today@sys.date,morning!. (Optional)",
              isRepeatable: true,
              args: { name: "training-phrases" },
            },
          ],
        },
      ],
    },
    {
      name: ["schema", "jsonschema"],
      description: "Outputs cxcli's JSON schema",
      options: [
        {
          name: ["--output-folder", "-f"],
          description: "Where to save the JSONSchema file",
          args: { name: "output-folder", default: "-" },
        },
      ],
    },
    {
      name: [
        "test-conversation",
        "tc",
        "conversation-tests",
        "profile-conversation",
      ],
      description: "Actions on conversation testing",
      subcommands: [
        {
          name: ["execute", "e", "exe", "exec", "execute"],
          description: "Execute a suite",
        },
      ],
    },
    {
      name: ["test-nlu", "tn", "nlu-tests", "profile-nlu"],
      description: "Actions on NLU testing",
      subcommands: [
        {
          name: ["execute", "e", "exe", "exec", "execute"],
          description: "Execute a suite",
        },
      ],
    },
    {
      name: ["stt", "speech-to-text", "stt"],
      description: "Actions on speech-to-text commands",
      subcommands: [
        {
          name: ["rec", "recognise", "recognize"],
          description: "Transforms audio into text",
          options: [
            {
              name: ["--locale", "-l"],
              description: "Input locale (required)",
              args: { name: "locale" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: ["tts", "text-to-speech", "tts"],
      description: "Actions on text-to-speech commands",
      subcommands: [
        {
          name: ["synth", "s", "synthesize"],
          description: "Transforms text into audio",
          options: [
            {
              name: ["--locale", "-l"],
              description: "Input locale (required)",
              args: { name: "locale" },
              isRequired: true,
            },
            {
              name: ["--output-file", "-f"],
              description: "Output file name. Default: output.mp3 (optional)",
              args: { name: "output-file", default: "output.mp3" },
            },
          ],
        },
      ],
    },
    { name: "version", description: "Get cxcli version" },
    {
      name: ["w", "webhook"],
      description: "Actions on webhook commands",
      subcommands: [
        {
          name: ["creates", "s", "create"],
          description: "Create a webhook",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--environment", "-e"],
              description:
                "Environment where you want to set the webhook url. Default: global (optional)",
              args: { name: "environment", default: "global" },
            },
            {
              name: ["--flexible", "-f"],
              description:
                "Creates a flexible webhook. Possible values: true or false (optional)",
              args: { name: "flexible", default: "false" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--parameters-mapping", "-m"],
              description:
                "Creates a parameter mapping for flexible webhook, comma separated. The format is parameter@json-path,paramter2@json-path2. Example: my-param@$.fully.qualified.path.to.field (required only if flexible is true)",
              args: { name: "parameters-mapping" },
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: ["--request-body", "-t"],
              description:
                "Creates a request body for flexible webhook. It has to be in JSON Format (required only if flexible is true)",
              args: { name: "request-body" },
            },
            {
              name: ["--url", "-r"],
              description: "Webhook URL (required)",
              args: { name: "url" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["d", "del", "remove", "deletes", "removes", "delete"],
          description: "Delete a webhook",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--force", "-f"],
              description:
                "Forces to delete the webhook and its references in environments and flows. Possible values: true or false (optional)",
              args: { name: "force" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: ["updates", "u", "update"],
          description: "Update a webhook",
          options: [
            {
              name: ["--agent-name", "-a"],
              description: "Dialogflow CX Agent Name (required)",
              args: { name: "agent-name" },
              isRequired: true,
            },
            {
              name: ["--environment", "-e"],
              description:
                "Environment where you want to set the webhook url. Default: global (optional)",
              args: { name: "environment", default: "global" },
            },
            {
              name: ["--flexible", "-f"],
              description:
                "Creates a flexible webhook. Possible values: true or false (optional)",
              args: { name: "flexible", default: "false" },
            },
            {
              name: ["--location-id", "-l"],
              description:
                "Dialogflow CX Location ID of the Project (required)",
              args: { name: "location-id" },
              isRequired: true,
            },
            {
              name: ["--parameters-mapping", "-m"],
              description:
                "Creates a parameter mapping for flexible webhook, comma separated. The format is parameter@json-path,paramter2@json-path2. Example: my-param@$.fully.qualified.path.to.field. This only applies to flexible webhooks (optional)",
              args: { name: "parameters-mapping" },
            },
            {
              name: ["--project-id", "-p"],
              description: "Dialogflow CX Project ID (required)",
              args: { name: "project-id" },
              isRequired: true,
            },
            {
              name: ["--request-body", "-t"],
              description:
                "Creates a request body for flexible webhook. It has to be in JSON Format. This only applies to flexible webhooks (optional)",
              args: { name: "request-body" },
            },
            {
              name: ["--url", "-r"],
              description: "Webhook URL (required)",
              args: { name: "url" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: ["agent", "a", "agent"],
          description: "Actions on agent commands",
          subcommands: [
            {
              name: ["creates", "c", "create"],
              description: "Creates an agent",
            },
            {
              name: ["deletes", "remove", "d", "del", "delete"],
              description: "Deletes a specific agent",
            },
            {
              name: ["export", "e", "ex", "export"],
              description: "Executes an export for a specific agent",
            },
            {
              name: ["restore", "r", "re", "restore"],
              description: "Executes a restore action for a specific agent",
            },
            { name: ["update", "u", "update"], description: "Update an agent" },
          ],
        },
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
            },
            {
              name: "fish",
              description: "Generate the autocompletion script for fish",
            },
            {
              name: "powershell",
              description: "Generate the autocompletion script for powershell",
            },
            {
              name: "zsh",
              description: "Generate the autocompletion script for zsh",
            },
          ],
        },
        {
          name: ["d", "dialog"],
          description:
            "Test your CX Agent interactively directly from your terminal",
        },
        {
          name: ["entity", "type", "et", "entity-type"],
          description: "Actions on entity type commands",
          subcommands: [
            {
              name: ["creates", "c", "create"],
              description: "Creates an entity type in an agent",
            },
            {
              name: ["deletes", "d", "removes", "remove", "del", "delete"],
              description: "Deletes an entity type in an agent",
            },
            {
              name: ["updates", "u", "update"],
              description: "Updates an entity type in an agent",
            },
          ],
        },
        {
          name: ["env", "e", "environment"],
          description: "Actions on environment",
          subcommands: [
            {
              name: ["creates", "s", "create"],
              description: "Create an environment",
            },
            {
              name: ["d", "del", "remove", "deletes", "removes", "delete"],
              description: "Delete an environment",
            },
            {
              name: ["execute", "e", "exe", "exec", "execute-cicd"],
              description:
                "Executes a CI/CD pipeline for a specific environment",
            },
            {
              name: ["updates", "u", "update"],
              description: "Update an environment",
            },
          ],
        },
        {
          name: ["flow", "f", "flow"],
          description: "Actions on flow commands",
          subcommands: [
            {
              name: ["creates", "c", "create"],
              description: "Creates a flow in an agent",
            },
            {
              name: ["deletes", "d", "del", "remove", "delete"],
              description: "Deletes a flow in an agent",
            },
            {
              name: ["trains", "t", "train"],
              description:
                'Trains a flow in an agent. If flow name is set to "all", it will train all flows in an agent',
            },
            {
              name: ["updates", "u", "update"],
              description: "Updates a flow in an agent",
            },
          ],
        },
        {
          name: ["fv", "ver", "flow-version"],
          description: "Actions on flow versions commands",
          subcommands: [
            {
              name: ["creates", "s", "create"],
              description: "Create a version",
            },
            {
              name: ["d", "del", "remove", "deletes", "removes", "delete"],
              description: "Delete a version",
            },
            {
              name: ["updates", "u", "update"],
              description: "Update a version",
            },
          ],
        },
        {
          name: ["g", "gen", "generator"],
          description: "Actions on generator commands",
          subcommands: [
            {
              name: ["creates", "s", "create"],
              description: "Create a generator",
            },
            {
              name: ["d", "del", "remove", "deletes", "removes", "delete"],
              description: "Delete a generator",
            },
            {
              name: ["updates", "u", "update"],
              description: "Update a generator",
            },
          ],
        },
        {
          name: ["intent", "i", "intent"],
          description: "Actions on intent commands",
          subcommands: [
            {
              name: ["creates", "c", "create"],
              description: "Creates an intent in an agent",
            },
            {
              name: ["deletes", "d", "del", "remove", "delete"],
              description: "Deletes an intent in an agent",
            },
            {
              name: ["updates", "u", "update"],
              description: "Updates an intent in an agent",
            },
          ],
        },
        {
          name: ["schema", "jsonschema"],
          description: "Outputs cxcli's JSON schema",
        },
        {
          name: [
            "test-conversation",
            "tc",
            "conversation-tests",
            "profile-conversation",
          ],
          description: "Actions on conversation testing",
          subcommands: [
            {
              name: ["execute", "e", "exe", "exec", "execute"],
              description: "Execute a suite",
            },
          ],
        },
        {
          name: ["test-nlu", "tn", "nlu-tests", "profile-nlu"],
          description: "Actions on NLU testing",
          subcommands: [
            {
              name: ["execute", "e", "exe", "exec", "execute"],
              description: "Execute a suite",
            },
          ],
        },
        {
          name: ["stt", "speech-to-text", "stt"],
          description: "Actions on speech-to-text commands",
          subcommands: [
            {
              name: ["rec", "recognise", "recognize"],
              description: "Transforms audio into text",
            },
          ],
        },
        {
          name: ["tts", "text-to-speech", "tts"],
          description: "Actions on text-to-speech commands",
          subcommands: [
            {
              name: ["synth", "s", "synthesize"],
              description: "Transforms text into audio",
            },
          ],
        },
        { name: "version", description: "Get cxcli version" },
        {
          name: ["w", "webhook"],
          description: "Actions on webhook commands",
          subcommands: [
            {
              name: ["creates", "s", "create"],
              description: "Create a webhook",
            },
            {
              name: ["d", "del", "remove", "deletes", "removes", "delete"],
              description: "Delete a webhook",
            },
            {
              name: ["updates", "u", "update"],
              description: "Update a webhook",
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: ["--credentials", "-c"],
      description: "Google Cloud credentials JSON file path (optional)",
      isPersistent: true,
      args: { name: "credentials" },
    },
    {
      name: ["--output-format", "-o"],
      description:
        "Output Format. Options: text, json. Default: text (optional)",
      isPersistent: true,
      args: { name: "output-format", default: "text" },
    },
    {
      name: ["--skip-update-check", "-u"],
      description:
        "Skip the check for updates check run before every command (optional)",
      isPersistent: true,
    },
    {
      name: ["--verbose", "-v"],
      description: "Verbose error output (with stack trace) (optional)",
      isPersistent: true,
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
