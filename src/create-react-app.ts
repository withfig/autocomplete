const ICONS = {
  help: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/help.png",
  version:
    "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/info.png",
  true: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
  false:
    "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
  skip: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/skip.png",
  path: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/path.png",
  string:
    "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/string.png",
  template:
    "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/export.png",
  npm: "fig://icon?type=npm",
  yarn: "fig://icon?type=yarn",
};

const boolArg: Fig.Arg = {
  name: "boolean",
  isOptional: true,
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
};

const completionSpec: Fig.Spec = {
  name: "create-react-app",
  description: "Creates a new React project",
  args: {
    template: "folders",
    name: "name",
  },
  options: [
    // template
    {
      name: "--template",
      description:
        'Specify a template for the created project (a custom template on npm (search for "cra-template-*"), a relative path, or an archive (.tgz or .tar.gz))',
      args: {
        name: "name or url",
      },
      icon: ICONS.path,
      priority: 76,
    },
    {
      name: "--use-npm",
      description:
        "Use npm to install dependencies (default when Yarn is not installed)",
      args: boolArg,
      icon: ICONS.npm,
      priority: 75,
    },
    {
      name: "--use-pnp",
      description: "Use Yarn Plug'n'Play to create the app",
      args: boolArg,
      icon: ICONS.yarn,
      priority: 75,
    },
    {
      name: "--scripts-version",
      description:
        "Use a non-standard version of react-scripts (a specific npm version or npm tag, a custom fork published on npm, a relative path, or an archive (.tgz or .tar.gz))",
      args: {
        name: "alternative package",
      },
      priority: 74,
    },
    // Info
    {
      name: "--verbose",
      description: "Print additional logs",
      priority: 1,
      icon: ICONS.string,
    },
    {
      name: ["-h", "--help"],
      description: "Output usage information",
      icon: ICONS.help,
      priority: 1,
    },
    {
      name: ["-V", "--version"],
      description: "Output the version number",
      icon: ICONS.version,
      priority: 1,
    },
  ],
};

export default completionSpec;
