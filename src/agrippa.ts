const completionSpec: Fig.Spec = {
  name: "agrippa",
  description: "",
  subcommands: [
    {
      name: "init",
      description:
        "Generates a basic .agripparc.json file, with some default values for options that agrippa accepts",
    },
    {
      name: ["generate", "gen"],
      description:
        "This is the core of the CLI - this command generates a new React component, based on the name and options passed to it",
      args: {
        name: "component",
      },
      options: [
        {
          name: "--props",
          description:
            "Determines which prop declaration/validation solution to generate. Defaults to `ts` if `typescript` flag is `true`, `none` otherwise",
          args: {
            suggestions: [
              {
                name: "ts",
                description:
                  "Generate a TypeScript interface for props (this requires the typescript option to be true)",
              },
              {
                name: "jsdoc",
                description:
                  "Generates JSDoc type hints for props (a @typedef and a @type)",
              },
              {
                name: "prop-types",
                description: "Generates prop-types for props",
              },
              {
                name: "none",
                description: "Generates no props",
              },
            ],
          },
        },
        {
          name: "--children",
          description:
            "Whether the component is meant to have children or not. Defaults to `false`",
          args: {},
        },
        {
          name: ["--typescript", "--ts"],
          description:
            "Option to generate Typescript components, defaults to `true` if the CLI manages to find a `tsconfig.json` file, false otherwise",
          args: {},
        },
        {
          name: "--import-react",
          description:
            "Option to import React at the top of the component. Defaults to `true` if the CLI manages to find a `tsconfig.json` file and it has a `jsx` field under `compilerOptions` with `react-jsx` or `react-jsxdev` as the value, `false` otherwise",
          args: {},
        },
        {
          name: "--export-type",
          description:
            "Whether to export the component as a named export or a default export. Defaults to `named`",
          args: {
            suggestions: [
              {
                name: "named",
              },
              {
                name: "default",
              },
            ],
          },
        },
        {
          name: "--declaration",
          description:
            "Whether to declare the component as a `const` with an arrow function, or as a `function` declaration. Defaults to `const`",
          args: {
            suggestions: [
              {
                name: "const",
              },
              {
                name: "function",
              },
            ],
          },
        },
        {
          name: "--memo",
          description:
            "Generates a component as a memo component. Defaults to `false`",
          args: {},
        },
        {
          name: "--react-native",
          description:
            "Generates a React Native component. Defaults to `true` if `react-native` is a dependency in the project's `package.json`, `false` otherwise",
          args: {},
        },
        {
          name: "--styling",
          description: "Which styling solution to generate. Defaults to `none`",
          args: {
            suggestions: [
              {
                name: "none",
                description: "Generates no style",
              },
              {
                name: "css",
                description: "Generates a `css` file",
              },
              {
                name: "scss",
                description: "Generates a `scss` file",
              },
              {
                name: "jss",
                description:
                  "Generates a `useStyles` hook above the component with `react-jss`'s `createUseStyles`",
              },
              {
                name: "mui",
                description:
                  "Generates a `useStyles` hook above the component with `material-ui`'s `makeStyles`. Note that this generates styles for `material-ui` v4",
              },
              {
                name: "react-native",
                description: "Generates a React Native `StyleSheet`",
              },
            ],
          },
        },
        {
          name: "--styling-module",
          description:
            "Whether to generate a scoped `module` stylesheet. This option is only relevant for `css` or `scss` styling, and will be ignored for other values. Defaults to `true`",
          args: {},
        },
        {
          name: "--base-dir",
          description:
            "Path to a base directory which components should be generated inside of (directly or nested). Defaults to the current working directory",
          args: {
            name: "path",
            isOptional: true,
            isVariadic: true,
            template: "folders",
          },
        },
        {
          name: ["--dest", "--destination"],
          isRequired: true,
          description:
            "Allows the user to generate the component at a path relative to `baseDir`. It's mostly used to augment or modify the generation path in the command-line when creating the component itself. `dest` is resolved relative to `baseDir`",
          args: {
            name: "path",
            isOptional: true,
            isVariadic: true,
            template: "folders",
          },
        },
        {
          name: "--allow-outside-base",
          description:
            "Overrides default Agrippa behaviour to allow components to be specified outside `baseDir`. Defaults to current working directory",
          args: {
            name: "path",
            isOptional: true,
            isVariadic: true,
            template: "folders",
          },
        },
        {
          name: "--flat",
          description:
            "By default, Agrippa generates a dedicated directory for the generated component; this directory has the same name as the component, and will contain the component file (as `index.tsx` or `index.jsx`), and the style file (if one is generated). Defaults to `false`",
          args: {},
        },
        {
          name: "--separate-index",
          description:
            "In the `separateIndex` generation scheme, Agrippa creates one file for the component's code, and one `index` file, whose purpose is to allow importing exports from the component's directory elegantly (the import path can then be `<path>/<to>/<directory>/Component` instead of `<path>/<to>/<directory>/Component/Component`). Defaults to `true`",
          args: {},
        },
        {
          name: ["--post-command", "--postCommand"],
          description:
            "Allows a custom command to be run after having generated a component. This allows for some cool functionality, such as opening an IDE at the newly generated files automatically or linting them. Defaults to `none`",
          args: {
            isCommand: true,
          },
        },
        {
          name: "--overwrite",
          description:
            "By default, Agrippa prevents the generation of a component over an existing components, to prevent a loss of code. `--overwrite` tells Agrippa to replace existing files, if any are found. Defaults to `false`",
          args: {},
        },
        {
          name: "--debug",
          description:
            "The `debug` flag makes Agrippa print out additional debug information. It's quite useful when debugging. Defaults to `false`",
          args: {},
        },
      ],
    },
  ],
  args: {
    name: "component's name",
    isOptional: false,
  },
};
export default completionSpec;
