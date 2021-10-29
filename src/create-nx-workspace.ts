enum ICONS {
  npm = "fig://icon?type=npm",
  yarn = "fig://icon?type=yarn",
  pnpm = "https://pnpm.io/img/favicon.png",
  true = "✅",
  false = "❌",
  ng = "https://angular.io/assets/images/logos/angular/angular.svg",
  nx = "https://github.com/nrwl/nx/raw/master/images/nx-logo.png",
  option = "fig://icon?type=option",
  react = "https://reactjs.org/favicon.ico",
  webComponents = "https://web-components-resources.appspot.com/static/logo.svg",
  next = "https://nextjs.org/static/favicon/favicon.ico",
  gatsby = "https://www.gatsbyjs.com/favicon-32x32.png?v=3ad5294f3fa6c06e2d07ab07c76df2cf",
  nest = "https://nestjs.com/favicon.264d6486.ico",
  express = "https://expressjs.com/images/favicon.png",
  css = "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  scss = "https://sass-lang.com/favicon.ico",
  less = "https://lesscss.org/public/ico/favicon.ico",
  stylus = "https://stylus-lang.com/favicon.ico",
  emotion = "https://emotion.sh/favicons/favicon.ico",
  styled = "https://styled-components.com/favicon.png",
  vercel = "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/favicon.ico",
}

const boolArg: (name: string, isOptional: boolean) => Fig.Arg = (
  name,
  isOptional
) => ({
  name,
  isOptional,
  suggestions: [
    {
      name: "true",
      icon: ICONS.true,
    },
    {
      name: "false",
      icon: ICONS.false,
    },
  ],
});

const workspaceNameArg: Fig.Arg = {
  name: "workspace",
  description: "The name of the workspace",
};

const completionSpec: Fig.Spec = {
  name: "create-nx-workspace",
  description: "Create a new Nx workspace",
  options: [
    {
      name: "--name",
      description: "Workspace name (e.g., org name)",
      args: workspaceNameArg,
    },
    {
      name: "--preset",
      description:
        'What to create in a new workspace (options: "empty", "npm", "web-components", "angular", "angular-nest", "react", "react-express", "react-native", "next", "gatsby", "nest", "express")',
      args: {
        name: "preset",
        suggestions: [
          {
            name: "empty",
            icon: ICONS.nx,
            description:
              "Empty [an empty workspace with a layout that works best for building apps]",
          },
          {
            name: "npm",
            icon: ICONS.npm,
            description:
              "Npm [an empty workspace set up to publish npm packages (similar to and compatible with yarn workspaces)]",
          },
          {
            name: "web-components",
            icon: ICONS.webComponents,
            description:
              "Web components [a workspace with a single app built using web components]",
          },
          {
            name: "angular",
            icon: ICONS.ng,
            description:
              "Angular [a workspace with a single Angular application]",
          },
          {
            name: "angular-nest",
            icon: ICONS.ng,
            description:
              "Angular-nest [a workspace with a full stack application (Angular + Nest)]",
          },
          {
            name: "react",
            icon: ICONS.react,
            description: "React [a workspace with a single React application]",
          },
          {
            name: "react-express",
            icon: ICONS.react,
            description:
              "React-express [a workspace with a full stack application (React + Express)]",
          },
          {
            name: "react-native",
            icon: ICONS.react,
            description:
              "React-native [a workspace with a single React Native application]",
          },
          {
            name: "next",
            icon: ICONS.next,
            description:
              "Next.js [a workspace with a single Next.js application]",
          },
          {
            name: "gatsby",
            icon: ICONS.gatsby,
            description:
              "Gatsby [a workspace with a single Gatsby application]",
          },
          {
            name: "nest",
            icon: ICONS.nest,
            description: "Nest [a workspace with a single Nest application]",
          },
          {
            name: "express",
            icon: ICONS.express,
            description:
              "Express [a workspace with a single Express application]",
          },
        ],
      },
    },
    {
      name: "--appName",
      description: "The name of the application created by some presets",
      args: {
        name: "appName",
        isOptional: true,
      },
    },
    {
      name: "--cli",
      description: 'CLI to power the Nx workspace (options: "nx", "angular")',
      args: {
        name: "cli",
        suggestions: [
          { name: "nx", icon: ICONS.nx },
          { name: "angular", icon: ICONS.ng },
        ],
      },
    },
    {
      name: "--style",
      description:
        'Default style option to be used when a non-empty preset is selected options: ("css", "scss", "less") plus ("styl") for all non-Angular and ("styled-components", "@emotion/styled", "styled-jsx") for React, Next.js, Gatsby',
      args: {
        name: "style",
        suggestions: [
          {
            name: "css",
            icon: ICONS.css,
            description: "CSS",
          },
          {
            name: "scss",
            icon: ICONS.scss,
            description: "SASS(.scss) [ http://sass-lang.com ]",
          },
          {
            name: "less",
            icon: ICONS.less,
            description: "LESS [ http://lesscss.org ]",
          },
          {
            name: "styl",
            icon: ICONS.stylus,
            description: "Stylus(.styl) [ http://stylus-lang.com ]",
          },
          {
            name: "styled-components",
            icon: ICONS.styled,
            description: "Styled-components [ https://styled-components.com ]",
          },
          {
            name: "@emotion/styled",
            icon: ICONS.emotion,
            description: "Emotion [ https://emotion.sh ]",
          },
          {
            name: "styled-jsx",
            icon: ICONS.vercel,
            description:
              "Styled-jsx [ https://www.npmjs.com/package/styled-jsx ]",
          },
        ],
      },
    },
    {
      name: "--interactive",
      description: "Enable interactive mode when using presets (boolean)",
      args: boolArg("interactive", true),
    },
    {
      name: ["--packageManager", "--pm"],
      description: "Package manager to use (npm, yarn, pnpm)",
      args: {
        name: "packageManager",
        suggestions: [
          {
            name: "npm",
            icon: ICONS.npm,
          },
          {
            name: "yarn",
            icon: ICONS.yarn,
          },
          {
            name: "pnpm",
            icon: ICONS.pnpm,
          },
        ],
      },
    },
    {
      name: "--nx-cloud",
      description: "Use Nx Cloud (boolean)",
      args: boolArg("nx-cloud", true),
    },
    {
      name: ["--help", "-h"],
      description: "Show help for create-nx-workspace",
    },
  ],
  args: workspaceNameArg,
};

export default completionSpec;
