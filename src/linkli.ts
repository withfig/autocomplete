const openCommandGenerator: Fig.Generator = {
  script: ["linkli", "list", "--raw"],
  postProcess: function (out, tokens) {
    const entered_names = tokens.slice(2, -1);

    const split_out = out.split("\n");
    if (split_out.length === 1) {
      const names = split_out[0].split(",");
      const filtered_names = names.filter(
        (name) => entered_names.indexOf(name) === -1
      );
      const suggestions = filtered_names.map((name) => ({
        name,
      }));
      return suggestions;
    }
    const priority_names = split_out[0].split(",");
    const priority_suggestions = priority_names.map((name) => ({
      name,
      priority: 80,
    }));

    const remaining_names = split_out[1].split(",");
    const remaining_suggestions = remaining_names.map((name) => ({
      name,
    }));

    const combined_suggestions = [
      ...priority_suggestions,
      ...remaining_suggestions,
    ];

    const filtered_suggestions = combined_suggestions.filter(
      (suggestion) => entered_names.indexOf(suggestion.name) === -1
    );

    return filtered_suggestions;
  },
};

const openSubcommand: Fig.Subcommand = {
  name: "open",
  description: "Open associated link for a given product",
  priority: 75,
  args: {
    name: "product name",
    generators: openCommandGenerator,
  },
};

const listSubcommand: Fig.Subcommand = {
  name: "list",
  description: "List product names found in docbox",
  options: [
    {
      name: "--all",
      description: "Show all product names",
    },
    {
      name: "--raw",
      description: "Used only for autocomplete suggestions",
      hidden: true,
    },
  ],
};

const generateSubcommand: Fig.Subcommand = {
  name: "generate",
  description: "Generate project-specific linkli collection",
};

const searchSubcommand: Fig.Subcommand = {
  name: "search",
  description: "Search supported products in linkli",
  priority: 60,
};

const completionSpec: Fig.Spec = {
  name: "linkli",
  description: "Find and open your tech stack links",
  subcommands: [
    openSubcommand,
    generateSubcommand,
    listSubcommand,
    searchSubcommand,
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Show version",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
