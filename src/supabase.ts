const commonOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description: "Show help for command",
    priority: 1,
  },
];

const completionSpec: Fig.Spec = {
  name: "supabase",
  description:
    "The CLI is still under heavy development, but it will contain all the functionality for working with Supabase projects and the Supabase platform",
  subcommands: [
    {
      name: "init",
      description:
        "This command will create a .supabase folder which holds all the configuration for developing your project locally. You don't need to check this into version control",
      options: commonOptions,
    },
    {
      name: "start",
      description:
        "This command uses Docker Compose to start all the open source services of Supabase. This command will take a while to run, there are a lot of services to build",
      options: commonOptions,
    },
    {
      name: "stop",
      description:
        "When you are finished with Supabase, run supabase stop to stop the Docker services",
      options: commonOptions,
    },
    {
      name: "eject",
      description:
        "Run in any folder to create a docker folder with a docker-compose.yml. This is useful for self-hosting or adding custom configuration",
      options: commonOptions,
    },
  ],
  options: commonOptions,
};
export default completionSpec;
