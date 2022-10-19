const SETTINGS_PATH = "~/.fig/tools/all-settings.json";
const ACTIONS_PATH = "~/.fig/apps/autocomplete/actions.json";

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

const devCompletionsFolderGenerator: Fig.Generator = {
  script: '\\ls -d -1 "$PWD/"**/',
  postProcess: (out) =>
    out.split("\n").map((folder) => {
      const paths = folder.split("/");
      paths.pop();

      return {
        name: paths.pop(),
        insertValue: folder,
        icon: `fig://${folder}`,
      };
    }),
};

const disableForCommandsGenerator: Fig.Generator = {
  script: "fig settings autocomplete.disableForCommands",
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
  script: "fig theme --list",
  postProcess: (output) => {
    const builtinThemes = [
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
      .map((theme) => ({ name: theme.replace(".json", "") }))
      .concat(builtinThemes);
  },
};

export const SETTINGS_GENERATOR: Record<string, Fig.Generator> = {
  "autocomplete.devCompletionsFolder": devCompletionsFolderGenerator,
  "autocomplete.disableForCommands": disableForCommandsGenerator,
  "autocomplete.theme": themesGenerator,
};

export const subsystemsGenerator: Fig.Generator = {
  script: "\\ls ~/.fig/logs",
  trigger: (curr, prev) => {
    // trigger on new token
    return curr.length === 0 && prev.length > 0;
  },
  postProcess: (out, tokens) => {
    const insertedLogFiles = new Set(tokens.slice(0, -1));
    return out
      .split("\n")
      .map((name) => name.replace(".log", ""))
      .concat("figterm")
      .map((name) => ({ name, icon: "🪵" }))
      .filter((suggestion) => !insertedLogFiles.has(suggestion.name));
  },
};

export const settingsSpecGenerator: Fig.Subcommand["generateSpec"] = async (
  _,
  executeShellCommand
) => {
  const text = await executeShellCommand(
    "fig _ request --method GET --route '/settings/all'"
  );
  const { settings, actions } = JSON.parse(text) as {
    settings: Setting[];
    actions: Action[];
  };

  const actionSuggestions: Fig.Suggestion[] = actions.flatMap((action) => ({
    name: action.identifier,
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
    const script = init.installed
      ? "fig plugins list --format json --installed"
      : "fig plugins list --format json";
    const out = await executeShellCommand(script);
    const json = JSON.parse(out) as Plugin[];
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
      await executeShellCommand(
        `fig user tokens list --team ${teamName} --format json`
      )
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
  script: "fig team --list --format json",
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
      await executeShellCommand(`fig team --format json ${teamName} members`)
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
      await executeShellCommand(
        `fig team --format json ${teamName} invitations`
      )
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
 * Fig workflows
 */

export const workflowsSpecGenerator: Fig.Subcommand["generateSpec"] = async (
  _,
  exec
) => {
  const response = await exec(
    "fig _ request --route '/workflows' --method GET"
  );
  const workflows = JSON.parse(response);
  const subcommands = workflows.map((workflow) => {
    const displayName = `${workflow.displayName ?? workflow.name} | @${
      workflow.namespace
    }`;

    const options = workflow.parameters.map((param) => {
      const option: Fig.Option = {
        name: `--${param.name}`,
        description: param.description,
      };
      switch (param.type) {
        case "text":
          option.args = {
            name: param.name,
          };
        case "selector":
          let generators: Fig.Generator[] = [];
          if (param.typeData.generators) {
            generators = param.typeData.generators
              .filter((generator) => generator.type === "script")
              .map((generator) => ({
                script: generator.script,
                splitOn: "\n",
              }));
          }
          option.args = {
            name: param.name,
            suggestions: param.typeData.suggestions,
            generators,
          };
      }
      return option;
    });

    // Add @namespace/name and name (if this workflow is associated with user's namespace)
    const name = [`@${workflow.namespace}/${workflow.name}`];
    if (workflow.isOwnedByUser) {
      name.push(workflow.name);
    }

    return {
      displayName,
      icon: workflow.icon ?? "⚡️",
      name,
      insertValue: workflow.isOwnedByUser ? workflow.name : name[0],
      description: workflow.description,
      options,
    };
  });
  return {
    name: "run",
    subcommands,
  };
};

export const sshHostsGenerator: Fig.Generator = {
  script: "fig _ request --method GET --route /access/hosts/all",
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
      await executeShellCommand(`fig ssh ${host} --get-identities`)
    ) as { displayName: string; username: string }[];

    return hosts.map((host) => ({
      name: host.displayName,
    }));
  },
};

export const userGenerator: Fig.Generator = {
  script: "fig user list-accounts",
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
