const completionSpec: Fig.Spec = {
  name: "fzf",
  description: "Commands to select active or default objects via fzf",
  subcommands: [
    { name: "group", description: "Select default resource group" },
    { name: "install", description: "Download and install the fzf command" },
    { name: "location", description: "Select default location" },
    { name: "subscription", description: "Select default subscription" },
  ],
};

export default completionSpec;
