const categoryKeysMapping = {
  group: ["name", "gid"],
  host: ["name", "ip_address"],
  mount: ["name"],
  protocol: ["name", "number"],
  rpc: ["name", "number"],
  service: ["name", "port"],
  user: ["name", "uid"],
};
const categories = Array.from(Object.keys(categoryKeysMapping));

interface PostProcessQuery {
  attributeKey: string;
}

const postProcessQuery =
  (options: PostProcessQuery): Fig.Generator["postProcess"] =>
  (out) => {
    const { attributeKey } = options;
    const values = new Set<string>();
    out.split("\n\n").map((entry) => {
      entry.split("\n").forEach((line) => {
        const [key, value] = line.trim().split(": ");
        if (key === attributeKey) {
          values.add(value);
        }
      });
    });

    const suggestions = [];
    values.forEach((value) => suggestions.push({ name: value }));

    return suggestions;
  };

const dscacheutilGenerators: Record<string, Fig.Generator> = {
  keys: {
    custom: async (tokens, executeShellCommand) => {
      const category = tokens[tokens.length - 3];
      if (!categories.includes(category)) {
        return [];
      }

      return categoryKeysMapping[category].map((key: string) => ({
        name: key,
      }));
    },
  },
  values: {
    custom: async (tokens, executeShellCommand) => {
      const category = tokens[tokens.length - 4];
      const attributeKey = tokens[tokens.length - 2];
      const pp = postProcessQuery({ attributeKey });
      return pp(
        (
          await executeShellCommand({
            command: "dscacheutil",
            args: ["-q", category],
          })
        ).stdout,
        tokens
      );
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "dscacheutil",
  description: "Utility for managing the Directory Service cache",
  subcommands: [
    {
      name: "-h",
      description: "List the options for calling dscacheutil",
    },
    {
      name: "-q",
      description: "Query the Directory Service cache",
      options: [
        {
          name: "-a",
          description: "Attribute to query",
          args: [
            {
              name: "attributeKey",
              generators: dscacheutilGenerators.keys,
            },
            {
              name: "attributeValue",
              generators: dscacheutilGenerators.values,
            },
          ],
        },
      ],
      args: {
        name: "category",
        description: "Category to query",
        suggestions: categories,
      },
    },
    {
      name: "-cachedump",
      description: "Get an overview of the cache by default",
      options: [
        {
          name: "-buckets",
          description: "Get an overview of the cache by default",
        },
        {
          name: "-entries",
          description: "Dump detailed information about cache entries",
          args: {
            name: "entry",
            suggestions: categories,
          },
        },
      ],
    },
    {
      name: "-configuration",
      description:
        "Get the current configuration information, such as the search policy and cache parameters",
    },
    {
      name: "-flushcache",
      description: "Flush the entire cache",
    },
    {
      name: "-statistics",
      description:
        "Get statistics from the cache, including an overview an detailed call statistics",
    },
  ],
};

export default completionSpec;
