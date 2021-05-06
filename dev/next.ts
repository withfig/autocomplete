const icon = "https://nextjs.org/static/favicon/favicon-16x16.png";

const hostPortOptions: Fig.Option[] = [
  {
    name: ["-p", "--port"],
    description: "A port number on which to start the application",
    args: {},
  },
  {
    name: ["-H", , "--hostname"],
    description: "Hostname on which to start the application",
    args: {},
  },
];

const dirArgument: Fig.Arg = {
  name: "dir",
  description: "Represent the directory of the Next.js application",
  template: "folders",
  isOptional: true,
};

export const completionSpec: Fig.Spec = {
  name: "next",
  description: "Next.js CLI to start, build and export your application",
  options: [
    {
      name: ["-h", "--help"],
      description: "Output usage information",
    },
    {
      name: ["-v", "--version"],
      description: "Output the version number",
    },
  ],
  subcommands: [
    {
      name: "build",
      description: "Create an optimized production build of your application",
      icon,
      args: [
        {
          name: "dir",
          description: "Represent the directory of the Next.js application",
          template: "folders",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--profile",
          description: "Enable production profiling",
        },
        {
          name: "--debug",
          description: "Enable more verbose build output",
        },
      ],
    },
    {
      name: "dev",
      description: "Start the application in development mode",
      icon,
      args: [dirArgument],
      options: hostPortOptions,
    },
    {
      name: "start",
      description: "Start the application in production mode",
      icon,
      args: [dirArgument],
      options: hostPortOptions,
    },
    {
      name: "export",
      description: "Exports the application for production deployment",
      icon,
      args: [dirArgument],
      options: [
        {
          name: "-s",
          description: "Do not print any messages to console",
        },
      ],
    },
    {
      name: "telemetry",
      description: "Allows you to control Next.js' telemetry collection",
      icon,
      args: [
        {
          name: "status",
          description: "Turn Next.js' telemetry collection on or off",
          suggestions: [
            {
              name: "enable",
              description: "Enable Next.js' telemetry collection",
            },
            {
              name: "disable",
              description: "Disable Next.js' telemetry collection",
            },
          ],
        },
      ],
    },
  ],
};
