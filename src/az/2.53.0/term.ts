const completion: Fig.Spec = {
  name: "term",
  description: "Manage marketplace agreement with marketplaceordering",
  subcommands: [
    {
      name: "accept",
      description: "Accept marketplace terms",
      options: [
        {
          name: "--plan",
          description: "Plan identifier string of image being deployed",
          args: { name: "plan" },
          isRequired: true,
        },
        {
          name: "--product",
          description: "Offer identifier string of image being deployed",
          args: { name: "product" },
          isRequired: true,
        },
        {
          name: "--publisher",
          description: "Publisher identifier string of image being deployed",
          args: { name: "publisher" },
          isRequired: true,
        },
      ],
    },
    {
      name: "show",
      description: "Get marketplace terms",
      options: [
        {
          name: "--plan",
          description: "Plan identifier string of image being deployed",
          args: { name: "plan" },
          isRequired: true,
        },
        {
          name: "--product",
          description: "Offeridentifier string of image being deployed",
          args: { name: "product" },
          isRequired: true,
        },
        {
          name: "--publisher",
          description: "Publisher identifier string of image being deployed",
          args: { name: "publisher" },
          isRequired: true,
        },
      ],
    },
  ],
};

export default completion;
