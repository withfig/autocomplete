const completionSpec: Fig.Spec = {
  name: "nuxi",
  description: "",
  subcommands: [
    {
      name: "add",
      description: "Scaffold an entity into your Nuxt application",
      options: [
        {
          name: "--cwd",
          description: "The directory of the target application",
        },
        {
          name: "--force",
          description: "Force override file if it already exists",
        },
      ],
      args: [
        {
          name: "TEMPALTE",
          description: "Specify a template of the file to be generated",
          suggestions: [
            "component",
            "composable",
            "layout",
            "plugin",
            "page",
            "midleware",
            "api",
          ],
        },
        {
          name: "NAME",

          description: "Specify a name of the file that will be created",
        },
      ],
    },
    {
      name: "analyze",
      description: "Analyze the production bundle or your Nuxt applicaiton",
      args: {
        name: "rootDir",
        description: "The directory of the target application",
      },
    },
    {
      name: "build",
      description:
        "The build command creates a .output directory with all your application, server and dependencies ready for production",
      args: {
        name: "rootDir",
        description: "The root directory of the application to bundle",
      },
    },
    {
      name: "dev",
      description:
        "The dev command starts a development server with hot module replacement at http://localhost:3000",
      args: {
        name: "rootDir",
        description: "The root directory of the application to serve",
      },
      options: [
        {
          name: "--clipboard",
          description: "Copy URL to clipboard",
        },
        {
          name: ["--open", "-o"],
          description: "Open URL in browser",
        },
        {
          name: ["--port", "-p"],
          description: "Port to listen",
        },
        {
          name: ["--host", "-h"],
          description: "Hostname of the server",
        },
        {
          name: "--https",
          description:
            "Listen with https protocol with a self-signed certificate by default",
        },
        {
          name: "--ssl-cert",
          description: "Specify a certificate for https",
        },
        {
          name: "--ssl-key",
          description: "Specify the key for the https certificate",
        },
      ],
    },
    {
      name: "info",
      description:
        "The info command logs informations about the current or specified Nuxt project",
      args: {
        name: "rootDir",
        description: "The directory of the target application",
      },
    },
    {
      name: ["init", "create"],
      description: "The init command initializes a fresh Nuxt project",
      args: {
        name: "dir",
        description: "Name of the install directory",
      },
      options: [
        {
          name: ["--verbose", "-v"],
          description: "Log informations about the installation process",
        },
        {
          name: ["--template", "-t"],
          description: "Specify a Git repository to use as a template",
        },
      ],
    },
    {
      name: "preview",
      description:
        "The preview command starts a server to preview your Nuxt application after running the build command",
      args: {
        name: "rootDir",
        description: "The root directory of the application to preview",
      },
    },
    {
      name: "typecheck",
      description:
        "The typecheck command runs vue-tsc to check types throughout your app",
      args: {
        name: "rootDir",
        description: "The directory of the target application",
      },
    },
    {
      name: "upgrade",
      description: "The upgrade command upgrades Nuxt 3 to the latest version",
      options: [
        {
          name: ["--force", "-f"],
          description: "Removes node_modules and lock files before upgrade",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for nuxi",
    },
  ],
};
export default completionSpec;
