// TODO: When #2138 is merged
// import createRedwoodApp from "./create-redwood-app";
import { specToSuggestions } from "./_utils/spec";
import vite from "./vite";
import createRedwoodApp from "./create-redwood-app";

// TODO: this for all the suggestions that have specs
export const npxSuggestions: Fig.Suggestion[] = [
  specToSuggestions(createRedwoodApp),
  specToSuggestions(vite),
  {
    // TODO: Import from autocannon when it's merged
    name: "autocannon",
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
    name: "create-vite",
    icon: "https://vitejs.dev/logo.svg",
  },
  {
    name: "react-native",
    icon: "https://reactnative.dev/img/pwa/manifest-icon-512.png",
  },
  {
    name: "tailwindcss",
    icon: "https://tailwindcss.com/favicons/favicon-32x32.png",
  },
  {
    name: "next",
    icon: "https://nextjs.org/static/favicon/favicon-16x16.png",
  },
  {
    name: "nuxi",
    icon: "https://raw.githubusercontent.com/nuxt/framework/main/docs/public/icon.png",
  },
  {
    name: "gltfjsx",
    icon: "https://raw.githubusercontent.com/pmndrs/branding/master/logo.svg",
  },
  {
    name: "prisma",
    icon: "https://raw.githubusercontent.com/prisma/docs/main/src/images/favicon-16x16.png",
  },
  {
    name: "eslint",
    icon: "https://raw.githubusercontent.com/eslint/eslint.org/main/src/static/icon-512.png",
  },
  {
    name: "prettier",
    icon: "https://prettier.io/icon.png",
  },
  {
    name: "tsc",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/240px-Typescript_logo_2020.svg.png",
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
    name: "create-completion-spec",
    icon: "https://fig.io/icons/fig-light.png",
  },
  {
    name: "@fig/publish-spec-to-team",
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
    name: "create-t3-app",
    icon: "https://create.t3.gg/favicon.svg",
  },
  {
    name: "create-discord-bot",
    icon: "https://discordjs.dev/favicon-32x32.png",
  },
  {
    name: "create-video",
    icon: "https://raw.githubusercontent.com/remotion-dev/remotion/main/packages/docs/static/img/logo-small.png",
  },
  {
    name: "remotion",
    icon: "https://raw.githubusercontent.com/remotion-dev/remotion/main/packages/docs/static/img/logo-small.png",
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
    name: "playwright",
    icon: "https://playwright.dev/img/playwright-logo.svg",
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
  {
    name: "@preset/cli",
    icon: "https://raw.githubusercontent.com/preset/preset/main/.github/assets/logo.svg",
  },
  {
    name: "mikro-orm",
    icon: "https://raw.githubusercontent.com/mikro-orm/mikro-orm/master/docs/static/img/favicon.ico",
  },
  {
    name: "pod-install",
  },
  {
    name: "capacitor",
    icon: "https://capacitorjs.com/docs/img/meta/favicon.png",
  },
  {
    name: "cap",
    icon: "https://capacitorjs.com/docs/img/meta/favicon.png",
  },
  {
    name: "@magnolia/cli",
    icon: "https://avatars.githubusercontent.com/u/25686615?s=200&v=4",
  },
  {
    name: "stencil",
    icon: "https://stenciljs.com/assets/icon/favicon.ico",
  },
  {
    name: "swagger-typescript-api",
    icon: "https://static1.smartbear.co/swagger/media/assets/swagger_fav.png",
  },
  {
    name: "sta",
    icon: "https://static1.smartbear.co/swagger/media/assets/swagger_fav.png",
  },
  {
    name: "@wordpress/create-block",
    icon: "https://s1.wp.com/i/webclip.png",
  },
  {
    name: "astro",
    icon: "https://astro.build/favicon.svg",
  },
];

const binToSpecOverrides = {
  rw: "redwood",
};

export const npxLocalBinsGenerator = (
  filterOutGlobal = false
): Fig.Generator => ({
  script: [
    "bash",
    "-c",
    // TODO: use util to get the first node_modules
    `until [[ -d node_modules/ ]] || [[ $PWD = '/' ]]; do cd ..; done; ls -1 node_modules/.bin/`,
  ],
  postProcess: function (out) {
    const globalCLIs = npxSuggestions.map((suggestion) => suggestion.name);

    return out
      .split("\n")
      .filter((name) => (filterOutGlobal ? !globalCLIs.includes(name) : true))
      .map((name) => ({
        name,
        icon: "fig://icon?type=command",
        loadSpec: binToSpecOverrides[name] || name,
      }));
  },
});

const completionSpec: Fig.Spec = {
  name: "npx",
  description: "Execute binaries from npm packages",
  args: {
    name: "command",
    isCommand: true,
    generators: npxLocalBinsGenerator(true),
    suggestions: [...npxSuggestions],
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
