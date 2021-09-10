const completionSpec: Fig.Spec = {
  name: "pnpx",
  description: "Execute binaries from npm packages",
  subcommands: [
    {
      name: "create-react-native-app",
      icon: "https://reactnative.dev/img/pwa/manifest-icon-512.png",
      loadSpec: "create-react-native-app",
    },
    {
      name: "react-native",
      icon: "https://reactnative.dev/img/pwa/manifest-icon-512.png",
      loadSpec: "react-native",
    },
    {
      name: "tailwindcss",
      icon: "https://tailwindcss.com/favicon-32x32.png",
      loadSpec: "tailwindcss",
    },
    {
      name: "next",
      icon: "https://nextjs.org/static/favicon/favicon-16x16.png",
      loadSpec: "next",
    },
    {
      name: "gltfjsx",
      icon: "https://raw.githubusercontent.com/pmndrs/branding/master/logo.svg",
      loadSpec: "gltfjsx",
    },
    {
      name: "prisma",
      icon: "https://raw.githubusercontent.com/prisma/docs/main/src/images/favicon-16x16.png",
      loadSpec: "prisma",
    },
  ],
  options: [
    {
      name: ["--package", "-p"],
      description: "Package to be executed",
      args: {
        name: "package",
      },
    },
    {
      name: "--cache",
      args: {
        name: "path",
        template: "filepaths",
      },
      description: "Location of the npm cache",
    },
    {
      name: "--always-spawn",
      description: "Always spawn a child process to execute the command",
    },
    {
      description: "Skip installation if a package is missing",
      name: "--no-install",
    },
    {
      args: {
        name: "path",
        template: "filepaths",
      },
      description: "Path to user npmrc",
      name: "--userconfig",
    },
    {
      name: ["--call", "-c"],
      args: {
        name: "script",
      },
      description: "Execute string as if inside `npm run-script`",
    },
    {
      name: ["--shell", "-s"],
      description: "Shell to execute the command with, if any",
      args: {
        name: "shell",
        suggestions: [
          {
            name: "bash",
          },
          {
            name: "fish",
          },
          {
            name: "zsh",
          },
        ],
      },
    },
    {
      args: {
        name: "shell-fallback",
        suggestions: [
          {
            name: "bash",
          },
          {
            name: "fish",
          },
          {
            name: "zsh",
          },
        ],
      },
      name: "--shell-auto-fallback",
      description:
        'Generate shell code to use pnpx as the "command not found" fallback',
    },
    {
      name: "--ignore-existing",
      description:
        "Ignores existing binaries in $PATH, or in the localproject. This forces pnpx to do a temporary install and use the latest version",
    },
    {
      name: ["--quiet", "-q"],
      description:
        "Suppress output from pnpx itself. Subcommands will not be affected",
    },
    {
      name: "--npm",
      args: {
        name: "path to binary",
        template: "filepaths",
      },
      description: "Npm binary to use for internal operations",
    },
    {
      args: {},
      description: "Extra node argument when calling a node binary",
      name: ["--node-arg", "-n"],
    },
    {
      description: "Show version number",
      name: ["--version", "-v"],
    },
    {
      description: "Show help",
      name: ["--help", "-h"],
    },
  ],
};

export default completionSpec;
