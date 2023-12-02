interface Setting {
  settingName: string;
  description: string;
  type: "boolean" | "text" | "single_select" | "multiselect";
  options?: Array<string | { name: string; description: string }>;
  default?: string;
}

interface Action {
  identifier: string;
  name: string;
  description: string;
  availability: string;
  defaultBindings: string[];
}

const graphql = async ({
  exec,
  query,
}: {
  exec: Fig.ExecuteCommandFunction;
  query: string;
}) => {
  const { stdout } = await exec({
    command: "fig",
    args: [
      "_",
      "request",
      "--route",
      "/graphql",
      "--method",
      "--body",
      JSON.stringify({
        query,
      }),
    ],
  });

  return JSON.parse(stdout).data;
};

const disableForCommandsGenerator: Fig.Generator = {
  script: ["fig", "settings", "autocomplete.disableForCommands"],
  postProcess: (out) => {
    const existing = out.split("\n").filter((item) => item.length > 0);

    const append: Fig.Suggestion = {
      name: "Disable new CLI...",
      description: `You must pass a valid JSON array of CLI tools contained within single quotes. e.g. '["npm","cd","ls"]'`,
      icon: "fig://icon?type=box",
      insertValue: JSON.stringify(existing.concat(["{cursor}"])),
    };

    const enabledAll: Fig.Suggestion = {
      name: "Enable all commands",
      icon: "fig://icon?type=box",
      insertValue: "'[]'",
    };

    return [append, enabledAll].concat(
      existing.map((disabledCommand) => {
        return {
          name: `Enable ${disabledCommand}`,
          icon: "fig://icon?type=box",
          insertValue: JSON.stringify(
            existing.filter((cmd) => cmd != disabledCommand)
          ),
        };
      })
    );
  },
};

export const themesGenerator: Fig.Generator = {
  script: ["fig", "theme", "--list"],
  postProcess: (output) => {
    const builtinThemes: Fig.Suggestion[] = [
      {
        name: "system",
        icon: "💻",
        priority: 51,
      },
      {
        name: "light",
        icon: "fig://template?color=ffffff&badge=☀️",
        priority: 51,
      },
      {
        name: "dark",
        icon: "fig://template?color=000000&badge=🌙",
        priority: 51,
      },
    ];
    return output
      .split("\n")
      .map(
        (theme) =>
          ({
            name: theme.replace(".json", ""),
            icon: "🎨",
          }) as Fig.Suggestion
      )
      .concat(builtinThemes);
  },
};

export const SETTINGS_GENERATOR: Record<string, Fig.Generator> = {
  "autocomplete.disableForCommands": disableForCommandsGenerator,
  "autocomplete.theme": themesGenerator,
};

export const subsystemsGenerator: Fig.Generator = {
  // script: "\\ls ~/.fig/logs",
  // trigger: (curr, prev) => {
  //   // trigger on new token
  //   return curr.length === 0 && prev.length > 0;
  // },
  // postProcess: (out, tokens) => {
  //   const insertedLogFiles = new Set(tokens.slice(0, -1));
  //   return out
  //     .split("\n")
  //     .map((name) => name.replace(".log", ""))
  //     .concat("figterm")
  //     .map((name) => ({ name, icon: "🪵" }))
  //     .filter((suggestion) => !insertedLogFiles.has(suggestion.name));
  // },
  custom: async () => {
    return ["figterm", "fig_cli", "fig_desktop", "daemon"].map((name) => ({
      name,
    }));
  },
};

export const settingsSpecGenerator: Fig.Subcommand["generateSpec"] = async (
  _,
  executeShellCommand
) => {
  const { stdout } = await executeShellCommand({
    command: "fig",
    args: ["_", "request", "--method", "GET", "--route", "/settings/all"],
  });
  const { settings, actions } = JSON.parse(stdout) as {
    settings: Setting[];
    actions: Action[];
  };

  const actionSuggestions: Fig.Suggestion[] = actions.map((action) => ({
    name: action.identifier.startsWith("autocomplete.")
      ? action.identifier.slice(13)
      : action.identifier,
    description: action.description,
    icon: "⚡️",
  }));

  return {
    name: "settings",
    subcommands: settings.map(
      ({
        settingName: name,
        description,
        type,
        options,
        default: defaultValue,
      }) => {
        const suggestions =
          type === "boolean"
            ? ["true", "false"]
            : name.startsWith("autocomplete.keybindings.")
              ? actionSuggestions
              : options?.map((option) => ({
                  name: option["name"] || option,
                  description: option["description"] || "",
                }));
        // const insertValue =
        // type === "multiselect" ? `${name} '{cursor}'` : undefined;

        const generators = SETTINGS_GENERATOR[name];

        return {
          name,
          description,
          icon: "fig://icon?type=commandkey",
          // insertValue,
          args: {
            name: type,
            default: defaultValue,
            suggestions: generators ? [] : suggestions,
            generators,
          },
        };
      }
    ),
  };
};

export const stateGenerator: Fig.Generator = {
  script: ["fig", "internal", "local-state", "all", "--format", "json"],
  postProcess: (out) => {
    const state = JSON.parse(out);
    return Object.keys(state).map((key) => ({
      name: key,
      description: JSON.stringify(state[key]),
    }));
  },
};

interface Plugin {
  name: string;
  icon: string;
  description: string;
}

export const pluginsGenerator = (init: {
  installed: boolean;
}): Fig.Generator => ({
  cache: {
    strategy: "stale-while-revalidate",
  },
  custom: async (_tokens, executeShellCommand) => {
    const args = init.installed
      ? ["plugins", "list", "--format", "json", "--installed"]
      : ["plugins", "list", "--format", "json"];
    const { stdout } = await executeShellCommand({
      command: "fig",
      args,
    });
    const json = JSON.parse(stdout) as Plugin[];
    return json.map((plugin) => ({
      name: plugin.name,
      icon: !plugin.icon?.startsWith("https://") ? plugin.icon : "📦",
      description: plugin.description,
    }));
  },
});

/**
 * Fig team
 */

// For insertions like `fig user tokens <subcommand> --team <team name> <arg holding this generator>`
export const tokensGenerators: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
  },
  custom: async (tokens, executeShellCommand) => {
    const teamOptionIndex = tokens.findIndex((value) =>
      value.startsWith("--team")
    );
    if (teamOptionIndex === -1) return [];
    let teamName: string;
    if (tokens[teamOptionIndex].includes("=")) {
      teamName = tokens[teamOptionIndex + 1].split("=")[1];
    } else {
      teamName = tokens[teamOptionIndex + 1];
    }
    const out = JSON.parse(
      (
        await executeShellCommand({
          command: "fig",
          args: [
            "user",
            "tokens",
            "list",
            "--team",
            teamName,
            "--format",
            "json",
          ],
        })
      ).stdout
    ) as {
      createdAt: string;
      description?: string;
      expiresAt?: string;
      lastUsedAt: string;
      name: string;
      namespace: { username: string };
    }[];
    return out.map((token) => {
      return {
        name: token.name,
        description: `Team: ${token.namespace.username}.${
          token.description ? " " + token.description : ""
        }`,
      };
    });
  },
};

export const teamsGenerators: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
  },
  script: ["fig", "team", "--list", "--format", "json"],
  postProcess: (out) => {
    return (
      JSON.parse(out) as { id: number; name: string; specs: string[] }[]
    ).map((team) => ({ name: team.name, priority: 75 }));
  },
};

// For insertions like `fig teams <team name> <members subcommand> <arg holding this generator>`
export const membersGenerators: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
    ttl: 1000 * 60,
  },
  custom: async (tokens, executeShellCommand) => {
    const teamName = tokens.at(-3);
    const out = JSON.parse(
      (
        await executeShellCommand({
          command: "fig",
          args: ["team", "--format", "json", teamName, "members"],
        })
      ).stdout
    ) as { email: string; role: string }[];
    return out.map((member) => {
      return {
        name: member.email,
        description: `Role: ${member.role}`,
      };
    });
  },
};

// For insertions like `fig teams <team name> <invitations subcommand>`
export const invitationsGenerators: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
    ttl: 1000 * 60,
  },
  custom: async (tokens, executeShellCommand) => {
    const teamName = tokens.at(-3);
    const out = JSON.parse(
      (
        await executeShellCommand({
          command: "fig",
          args: ["team", "--format", "json", teamName, "invitations"],
        })
      ).stdout
    ) as { email: string; role: string }[];
    return out.map((invitation) => {
      return {
        name: invitation.email,
        description: `Role: ${invitation.role}`,
      };
    });
  },
};

/**
 * Fig Scripts
 */

const scriptsFieldsFragment = `fragment ScriptFields on Script {
  name
  fields {
    icon
    displayName
    description
    templateVersion
    tags
    parameters {
      type
      name
      displayName
      description
      text {
        placeholder
      }
      checkbox {
        trueValueSubstitution
        falseValueSubstitution
      }
      selector {
        generators {
          named {
            name
          }
          shellScript {
            script
          }
          type
        }
        placeholder
        suggestions
      }
      path {
        extensions
        fileType
      }
    }
    runtime
  }
  relevanceScore
  lastInvokedAt
  lastInvokedAtByUser
  isOwnedByCurrentUser
}`;

type ScriptFields = {
  name: string;
  fields: {
    icon?: string;
    displayName?: string;
    description: string;
    templateVersion: string;
    tags: string[];
    parameters: {
      type: string;
      name: string;
      displayName: string;
      description: string;
      text?: {
        placeholder: string;
      };
      checkbox?: {
        trueValueSubstitution: string;
        falseValueSubstitution: string;
      };
      selector?: {
        generators: {
          named: {
            name: string;
          };
          shellScript: {
            script: string;
          };
          type: string;
        }[];
        placeholder?: string;
        suggestions?: string[];
      };
      path?: {
        extensions: string[];
        fileType: string;
      };
    }[];
    runtime: string;
  };
  relevanceScore: number;
  lastInvokedAt: string;
  lastInvokedAtByUser: string;
  isOwnedByCurrentUser: boolean;
};

const scriptOptions = (script: ScriptFields) => {
  const options: Fig.Option[] = [
    {
      name: ["-h", "--help"],
      description: "Show help for the script",
    },
  ];

  for (const param of script.fields.parameters) {
    const option: Fig.Option = {
      name: `--${param.name}`,
      description: param?.description ?? param?.type,
      isRequired: true,
    };

    switch (param.type) {
      case "Text":
        option.args = {
          name: param.name,
        };
        break;
      case "Selector":
        let generators: Fig.Generator[] = [];
        if (param?.selector?.generators) {
          generators = param?.selector?.generators
            .filter((generator) => generator.type === "ShellScript")
            .map((generator) => ({
              script: ["bash", "-c", generator?.shellScript?.script],
              splitOn: "\n",
            }));
        }
        option.args = {
          name: param.name,
          suggestions: param?.selector?.suggestions,
          generators,
        };
        break;
      case "Path":
        option.args = {
          name: param.name,
          template: "filepaths",
        };
        break;
      case "Checkbox":
        // Also make the `--no-` version of the option
        options.push({
          ...option,
          name: `--no-${param.name}`,
          exclusiveOn: [`--${param.name}`],
        });

        option.exclusiveOn = [`--no-${param.name}`];
        break;
    }

    options.push(option);
  }

  return options;
};

export const scriptsSpecGenerator: Fig.Subcommand["generateSpec"] = async (
  _,
  exec
) => {
  type Scripts = {
    currentUser: {
      namespace: {
        username: string;
        scripts: ScriptFields[];
      };
      teamMemberships: {
        team: {
          namespace: {
            username: string;
            scripts: ScriptFields[];
          };
        };
      }[];
    };
  };

  const query = `query Scripts {
    currentUser {
      namespace {
        username
        scripts {
          ...ScriptFields
        }
      }
      teamMemberships {
        team {
          namespace {
            username
            scripts {
              ...ScriptFields
            }
          }
        }
      }
    }
  }

  ${scriptsFieldsFragment}`;

  const data: Scripts = await graphql({ exec, query });

  const scripts = [
    ...data.currentUser.namespace.scripts.map((script) => ({
      ...script,
      namespace: data.currentUser.namespace.username,
    })),
    ...data.currentUser.teamMemberships.flatMap((team) =>
      team.team.namespace.scripts.map((script) => ({
        ...script,
        namespace: team.team.namespace.username,
      }))
    ),
  ];

  const subcommands = scripts.map((script) => {
    const displayName = `${script.fields.displayName ?? script.name} | @${
      script.namespace
    }`;

    // Add @namespace/name and name (if this workflow is associated with user's namespace)
    const name = [`@${script.namespace}/${script.name}`];
    if (script?.isOwnedByCurrentUser) {
      name.push(script.name);
    }

    const options = scriptOptions(script);

    return {
      displayName,
      icon: script?.fields?.icon ?? "⚡️",
      name,
      insertValue: script?.isOwnedByCurrentUser ? script.name : name[0],
      description: script?.fields?.description,
      options,
    };
  });
  return {
    name: "run",
    subcommands,
    filterStrategy: "fuzzy",
  };
};

/**
 * Fig CLI
 */
export const commandLineToolSpecGenerator: Fig.Subcommand["generateSpec"] =
  async (_, exec) => {
    type CLICommandFields = {
      uuid: string;
      name: string;
      description?: string;
    } & (
      | {
          subcommands: {
            uuid: string;
          }[];
        }
      | {
          script: ScriptFields;
        }
    );

    type CommandlineToolFields = {
      root: CLICommandFields;
      flattenedCommands: CLICommandFields[];
    };

    type CommandLineTool = {
      currentUser: {
        namespace: {
          username: string;
          commandlineTools: CommandlineToolFields[];
        };
        teamMemberships: {
          team: {
            namespace: {
              username: string;
              commandlineTools: CommandlineToolFields[];
            };
          };
        }[];
      };
    };

    const query = `query CommandLineTool {
      currentUser {
        namespace {
          username
          commandlineTools {
            ...CommandlineToolFields
          }
        }
        teamMemberships {
          team {
            namespace {
              username
              commandlineTools {
                ...CommandlineToolFields
              }
            }
          }
        }
      }
    }
    
    fragment CommandlineToolFields on CommandlineTool {
      root {
        ...CLICommandFields
      }
      flattenedCommands {
        ...CLICommandFields
      }
    }
    
    fragment CLICommandFields on ICLICommand {
      uuid
      name
      description
      ... on NestedCommand {
        subcommands {
          uuid
        }
      }
      ... on ScriptCommand {
        script {
          ...ScriptFields
        }
      }
    }
    
    ${scriptsFieldsFragment}`;

    const data: CommandLineTool = await graphql({ exec, query });

    const commandlineTools = [
      ...data.currentUser.namespace.commandlineTools.map(
        (commandlineTools) => ({
          ...commandlineTools,
          namespace: data.currentUser.namespace.username,
        })
      ),
      ...data.currentUser.teamMemberships.flatMap((team) =>
        team.team.namespace.commandlineTools.map((commandlineTools) => ({
          ...commandlineTools,
          namespace: team.team.namespace.username,
        }))
      ),
    ];

    const subcommands = commandlineTools.map((commandlineTools) => {
      // Create map from uuid to command
      const commands: Record<string, CLICommandFields> = {};
      for (const command of commandlineTools.flattenedCommands) {
        commands[command.uuid] = command;
      }

      const createTree = (
        root: CLICommandFields,
        depth: number
      ): Fig.Subcommand => {
        if ("subcommands" in root) {
          const subcommands: Fig.Subcommand[] = [];
          for (const command of root.subcommands) {
            subcommands.push(createTree(commands[command.uuid], depth + 1));
          }
          return {
            name:
              depth === 0
                ? `@${commandlineTools.namespace}/${root.name}`
                : root.name,
            description: root.description,
            subcommands,
            options: [
              {
                name: ["-h", "--help"],
                description: "Print help information",
              },
            ],
          };
        } else {
          const script = root.script;
          const options = scriptOptions(script);
          return {
            icon: script?.fields?.icon,
            name: root.name,
            description: root.description,
            options,
          };
        }
      };

      return createTree(commandlineTools.root, 0);
    });

    return {
      name: "cli",
      subcommands,
    };
  };

export const sshHostsGenerator: Fig.Generator = {
  script: [
    "fig",
    "_",
    "request",
    "--method",
    "GET",
    "--route",
    "/access/hosts/all",
  ],
  cache: {
    strategy: "stale-while-revalidate",
  },
  postProcess: (out) => {
    return (
      JSON.parse(out) as {
        nickName: string;
        namespace: string;
        description: string;
      }[]
    ).map((host) => ({
      insertValue: `@${host.namespace}/${host.nickName}`,
      displayName: `${host.nickName} (@${host.namespace})`,
      name: `@${host.namespace}/${host.nickName}`,
      description: host.description,
    }));
  },
};

export const sshIdentityGenerator: Fig.Generator = {
  custom: async (tokens, executeShellCommand) => {
    const host = tokens.slice(2).find((value) => !value.startsWith("-"));
    if (host === undefined) {
      return [];
    }
    const hosts = JSON.parse(
      (
        await executeShellCommand({
          command: "fig",
          args: ["ssh", host, "--get-identities"],
        })
      ).stdout
    ) as { displayName: string; username: string }[];

    return hosts.map((host) => ({
      name: host.displayName,
    }));
  },
};

export const userGenerator: Fig.Generator = {
  script: ["fig", "user", "list-accounts"],
  postProcess: (out) => {
    if (out.startsWith("error: ")) {
      return [];
    }
    return out
      .trim()
      .split("\n")
      .map((name) => ({ name, icon: "👤" }));
  },
};

export default {};
