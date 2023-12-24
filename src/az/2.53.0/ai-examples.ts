const completion: Fig.Spec = {
  name: "ai-examples",
  description: "Add AI powered examples to help content",
  subcommands: [
    {
      name: "check-connection",
      description: "Check if the client can connect to the AI example service",
    },
  ],
};

export default completion;
