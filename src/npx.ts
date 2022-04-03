const suggestions: Fig.Suggestion[] = [
  {
    name: "vite",
    icon: "https://vitejs.dev/logo.svg",
  },
  {
    name: "babel",
    icon: "https://raw.githubusercontent.com/babel/logo/master/babel.png",
  },
  {
    name: "create-react-native-app",
    icon: "https://reactnative.dev/img/pwa/manifest-icon-512.png",
  },
  {
    name: "react-native",
    icon: "https://reactnative.dev/img/pwa/manifest-icon-512.png",
  },
  {
    name: "tailwindcss",
    icon: "https://tailwindcss.com/favicon-32x32.png",
  },
  {
    name: "next",
    icon: "https://nextjs.org/static/favicon/favicon-16x16.png",
  },
  {
    name: "gltfjsx",
    icon: "https://raw.githubusercontent.com/pmndrs/branding/master/logo.svg",
  },
  {
    name: "prisma",
    icon:
      "https://raw.githubusercontent.com/prisma/docs/main/src/images/favicon-16x16.png",
  },
  {
    name: "eslint",
    icon: "https://eslint.org/assets/img/favicon.512x512.png",
  },
  {
    name: "prettier",
    icon: "https://prettier.io/icon.png",
  },
  {
    name: "tsc",
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/240px-Typescript_logo_2020.svg.png",
  },
  {
    name: "typeorm",
    icon: "https://avatars.githubusercontent.com/u/20165699?s=200&v=4",
  },
  // {
  //   name: "fig-teams",
  //   icon: "https://fig.io/icons/fig-light.png",
  // },
  {
    name: "@withfig/autocomplete-tools",
    icon: "https://fig.io/icons/fig-light.png",
  },
  {
    name: "fig-teams@latest",
    icon: "https://fig.io/icons/fig-light.png",
  },
  {
    name: "create-next-app",
    icon: "https://nextjs.org/static/favicon/favicon-16x16.png",
  },
  {
    name: "create-video",
    icon:
      "https://raw.githubusercontent.com/remotion-dev/remotion/main/packages/docs/static/img/logo-small.png",
  },
  {
    name: "remotion",
    icon:
      "https://raw.githubusercontent.com/remotion-dev/remotion/main/packages/docs/static/img/logo-small.png",
  },
  {
    name: "create-remix",
    icon: "https://remix.run/favicon-light.1.png",
  },
  {
    name: "remix",
    icon: "https://remix.run/favicon-light.1.png",
  },
  {
    name: "ignite-cli",
    icon: "🔥",
  },
  {
    name: "vsce",
  },
  {
    name: "degit",
    icon: "fig://icon?type=git",
  },
];

const completionSpec: Fig.Spec = {
  name: "npx",
  description: "Execute binaries from npm packages",

  args: {
    name: "command",
    isCommand: true,
    generators: {
      script: `until [[ -d node_modules/ ]] || [[ $PWD = '/' ]]; do cd ..; done; ls -1 node_modules/.bin/`,
      postProcess: function (out) {
        const cli = [...suggestions].reduce(
          (acc, { name }) => [...acc, name],
          []
        );
        return out
          .split("\n")
          .filter((name) => !cli.includes(name))
          .map((name) => ({
            name,
            icon: "fig://icon?type=command",
            loadSpec: name,
          }));
      },
    },
    suggestions: [...suggestions],
    isOptional: true,
  },

  options: [
    {
      name: ["--package", "-p"],
      description: "Package to be installed",
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
      name: "-y",
      description: "Execute npx command without prompting for confirmation",
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
        'Generate shell code to use npx as the "command not found" fallback',
    },
    {
      name: "--ignore-existing",
      description:
        "Ignores existing binaries in $PATH, or in the localproject. This forces npx to do a temporary install and use the latest version",
    },
    {
      name: ["--quiet", "-q"],
      description:
        "Suppress output from npx itself. Subcommands will not be affected",
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
