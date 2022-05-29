export const storybookCommonOptions: Fig.Option[] = [
  {
    name: "--help",
    description: "Display usage information",
  },
  {
    name: ["-V", "--version"],
    description: "Display the version number",
  },
  {
    name: ["-s", "--static-dir"],
    description:
      "Directory where to load static files from, comma-separated list",
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: ["-c", "--config-dir"],
    description: "Directory where to load Storybook configurations from",
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: "--https",
    description:
      "Serve Storybook over HTTPS. Note: You must provide your own certificate information",
    dependsOn: ["--ssl-cert", "--ssl-key"],
  },
  {
    name: "--ssl-ca",
    description:
      "Provide an SSL certificate authority. (Optional with --https, required if using a self-signed certificate)",
    args: {
      name: "certificate authority",
    },
  },
  {
    name: "--ssl-cert",
    description: "Provide an SSL certificate. (Required with --https)",
    args: {
      name: "certificate",
    },
  },
  {
    name: "--ssl-key",
    description: "Provide an SSL key. (Required with --https)",
    args: {
      name: "key",
    },
  },
  {
    name: "--smoke-test",
    description: "Exit after successful start",
  },
  {
    name: "--ci",
    description: "CI mode (skip interactive prompts, don't open browser)",
  },
  {
    name: "--quiet",
    description: "Suppress verbose build output",
  },
  {
    name: "--no-dll",
    description: "Do not use dll reference (no-op)",
  },
  {
    name: "--debug-webpack",
    description: "Display final webpack configurations for debugging purposes",
  },
  {
    name: "--webpack-stats-json",
    description: "Write Webpack Stats JSON to disk",
    args: {
      name: "directory",
      template: "folders",
    },
  },
  {
    name: "--docs",
    description: "Starts Storybook in documentation mode",
  },
  {
    name: "--no-manager-cache",
    description:
      "Disables Storybook's manager caching mechanism. NOTE: this flag disables the internal caching of Storybook and can severely impact your Storybook loading time, so only use it when you need to refresh Storybook's UI, such as when editing themes",
  },
];

const completionSpec: Fig.Spec = {
  name: "start-storybook",
  description: "Storybook start CLI tools",
  options: [
    {
      name: ["-p", "--port"],
      description: "Port to run Storybook",
      args: {
        name: "port",
      },
    },
    {
      name: ["-h", "--host"],
      description: "Host to run Storybook",
      args: {
        name: "host",
      },
    },
    ...storybookCommonOptions,
  ],
};

export default completionSpec;
