const completionSpec: Fig.Spec = {
  name: "help",
  description:
    "The dotnet help command opens up the reference page for more detailed information about the specified command at docs.microsoft.com.",
  args: {
    name: "command",
    description: "Name of the .NET CLI command.",
  },
};

export default completionSpec;
