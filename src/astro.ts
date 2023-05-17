const completionSpec: Fig.Spec = {
  name: "astro",
  description:
    "CLI provided by Astro to develop, build, and preview your project from a terminal window",
  icon: "https://astro.build/favicon.svg",
  subcommands: [
    {
      name: "add",
      description: "Add an integration",
      options: [
        {
          name: "--yes",
          description: "Accept all prompts",
        },
      ],
      args: {
        name: "integration",
      },
    },
    {
      name: "build",
      description: "Build your project and write it to disk",
      options: [
        {
          name: "--drafts",
          description: "Include Markdown draft pages in the build",
        },
      ],
    },
    {
      name: "check",
      description: "Check your project for errors",
      options: [
        {
          name: "--watch",
          description: "Watch Astro files for changes and re-run checks",
        },
      ],
    },
    {
      name: "dev",
      description: "Starts the development server",
      options: [
        {
          name: "--port",
          description: "Specify a port to listen on",
          args: {
            name: "port",
            default: "3000",
          },
        },
        {
          name: "--host",
          description:
            "Listen on all addresses, including LAN and public addresses",
          args: {
            name: "custom address",
            isOptional: true,
          },
        },
        {
          name: "--open",
          description:
            "Automatically open the app in the browser on server start",
        },
      ],
    },
    {
      name: "docs",
      description: "Open documentation in your web browser",
    },
    {
      name: "preview",
      description: "Preview your build locally",
      options: [
        {
          name: "--open",
          description:
            "Automatically open the app in the browser on server start",
        },
      ],
    },
    {
      name: "sync",
      description: "Generate content collection types",
    },
    {
      name: "telemetry",
      description: "Configure telemetry settings",
      subcommands: [
        {
          name: "enable",
          description: "Enable anonymous data collection",
        },
        {
          name: "disable",
          description: "Disable anonymous data collection",
        },
        {
          name: "reset",
          description: "Reset anonymous data collection settings",
        },
      ],
    },
  ],
  options: [
    {
      name: "--config",
      description: "Specify your config file",
      isPersistent: true,
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--root",
      description: "Specify your project root folder",
      isPersistent: true,
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--site",
      description: "Specify your project site",
      isPersistent: true,
      args: {
        name: "url",
      },
    },
    {
      name: "--base",
      description: "Specify your project base",
      isPersistent: true,
      args: {
        name: "pathname",
        template: "folders",
      },
    },
    {
      name: "--verbose",
      description: "Enable verbose logging",
      isPersistent: true,
    },
    {
      name: "--silent",
      description: "Disable all logging",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show the version number and exit",
      isPersistent: true,
    },
    {
      name: "--help",
      description: "Show help for astro",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
