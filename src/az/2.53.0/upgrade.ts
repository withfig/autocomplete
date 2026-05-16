const completion: Fig.Spec = {
  name: "upgrade",
  description: "Upgrade Azure CLI and extensions",
  options: [
    {
      name: "--all",
      description: "Enable updating extensions as well",
      args: { name: "all", suggestions: ["false", "true"] },
    },
    {
      name: ["--yes", "-y"],
      description: "Do not prompt for checking release notes",
    },
  ],
};

export default completion;
