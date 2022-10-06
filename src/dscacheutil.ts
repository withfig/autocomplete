import { keyValue } from "@fig/autocomplete-generators";

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
const associatedKeys = Array.from(Object.values(categoryKeysMapping));

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
          args: {
            name: "name value",
            generators: keyValue({
              separator: " ",
              keys: ["name", "gid", "ip_address", "port", "uid"],
            }),
          },
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
