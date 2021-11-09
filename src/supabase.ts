const commonOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description: "Help for supabase",
    priority: 1,
  },
  {
    name: ["--version", "-v"],
    description: "Version for supabase",
    priority: 2,
  },
];

const completionSpec: Fig.Spec = {
  name: "supabase",
  description:
    "The CLI is still under heavy development, but it will contain all the functionality for working with Supabase projects and the Supabase platform",
  subcommands: [
    {
      name: "db",
      description: "Diffs commands",
      subcommands: [
        {
          name: "dump",
          description:
            "Diffs the local database with current migrations, writing it as a new migration, and writes a new structured dump",
          options: [...commonOptions],
        },
        {
          name: "restore",
          description:
            "Restores the local database to reflect current migrations. Any changes on the local database that is not dumped will be lost",
          options: [...commonOptions],
        },
      ],
      options: [...commonOptions],
    },
    {
      name: "deploy",
      description: "Deploy current migrations to prod",
      options: [...commonOptions],
    },
    {
      name: "help",
      description: "Help about any command",
      options: [...commonOptions],
    },
    {
      name: "init",
      description: "Initialize a project to use Supabase CLI",
      options: [...commonOptions],
    },
    {
      name: "link",
      description: "Link the current project to a remote deploy database",
      options: [...commonOptions],
    },
    {
      name: "start",
      description: "Start the Supabase local development setup",
      options: [...commonOptions],
    },
  ],
  options: [...commonOptions],
};
export default completionSpec;
