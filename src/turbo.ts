const completionSpec: Fig.Spec = {
  name: "turbo",
  description:
    "Turborepo is a high-performance build system for JavaScript and TypeScript codebases",
  options: [
    {
      name: "--version",
      description: "Print the version",
    },
    {
      name: "--help",
      description: "Print a help message",
      isPersistent: true,
    },
  ],
  subcommands: [
    {
      name: "bin",
      description: "Get the path to the turbo binary",
      icon: "fig://template?color=000000&badge=📁",
    },
    {
      name: "link",
      description:
        "Link your local directory to a Vercel organization and enable remote caching",
      icon: "fig://icon?type=vercel",
      options: [
        {
          name: "--no-gitignore",
          description: "Do not create or modify .gitignore",
        },
      ],
    },
    {
      name: "login",
      description: "Login to your Vercel account",
      icon: "fig://icon?type=vercel",
      options: [
        {
          name: "--sso-team",
          description:
            "Attempt to authenticate to the specified team using SSO",
          insertValue: "--sso-team={cursor}",
          requiresEquals: true,
        },
      ],
    },
    {
      name: "logout",
      description: "Logout of your Vercel account",
      icon: "fig://icon?type=vercel",
    },
    {
      name: "prune",
      insertValue: "prune --scope={cursor}",
      description: "Prepare a subset of your monorepo",
      icon: "fig://template?color=000000&badge=✂️",
      options: [
        {
          name: "--scope",
          description:
            "Specify package to act as entry point for pruned monorepo",
          requiresEquals: true,
          isRequired: true,
          insertValue: "--scope={cursor}",
          args: {
            name: "package",
          },
        },
        {
          name: "--docker",
          description:
            "Output pruned workspace into 'fill' and 'json' directories optimized for Docker layer caching",
        },
      ],
    },
    {
      name: "unlink",
      description:
        "Unlink the current directory from your Vercel organization and disable remote caching",
      icon: "fig://icon?type=vercel",
    },
    {
      name: "run",
      icon: "fig://template?color=000000&badge=🏃‍♀️",
      description: "Run tasks in your monorepo",
    },
  ],
};

export default completionSpec;
