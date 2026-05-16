const completion: Fig.Spec = {
  name: "find",
  description:
    "I'm an AI robot, my advice is based on our Azure documentation as well as the usage patterns of Azure CLI and Azure ARM users. Using me improves Azure products and documentation",

  args: {
    name: "<CLI_TERM>",
    description: "An Azure CLI command or group for which you need an example",
    isOptional: true,
  },
};

export default completion;
