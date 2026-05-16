const completion: Fig.Spec = {
  name: "demo",
  description: "Demos for designing, developing and demonstrating Azure CLI",
  subcommands: [
    {
      name: "byo-access-token",
      description: "List resource groups by bringing your own access token",
      options: [
        {
          name: "--access-token",
          description: "Your own access token",
          args: { name: "access-token" },
          isRequired: true,
        },
        {
          name: "--subscription-id",
          description: "Subscription ID under which to list resource groups",
          args: { name: "subscription-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "style",
      description: "A demo showing supported text styles",
      options: [
        {
          name: "--theme",
          description:
            "The theme to format styled text. If unspecified, the default theme is used",
          args: {
            name: "theme",
            suggestions: ["cloud-shell", "dark", "light", "none"],
          },
        },
      ],
    },
    {
      name: "secret-store",
      description: "A demo showing how to use secret store",
      subcommands: [
        {
          name: "load",
          description: "Load custom data from secret store",
        },
        {
          name: "save",
          description: "Save custom data to secret store",

          args: {
            name: "<KEY_VALUE>",
            description: "Space-separated data: = [= ...]",
            isOptional: true,
          },
        },
      ],
    },
  ],
};

export default completion;
