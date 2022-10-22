import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "rojo",
  description:
    "Enables professional-grade development tools for Roblox developers",
  subcommands: [
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      args: {
        name: "SUBCOMMAND",
        template: "help",
      },
    },
    {
      name: "build",
      description: "Generates a model or place file from the Rojo project",
      options: [
        {
          name: ["--output", "-o"],
          description:
            "Where to output the result. Should end in .rbxm, .rbxl, .rbxmx, or .rbxlx",
          isRequired: true,
          args: {
            name: "OUTPUT",
            description:
              "Where to output the result. Should end in .rbxm, .rbxl, .rbxmx, or .rbxlx",
            generators: filepaths({
              extensions: ["rbxm", "rbxl", "rbxmx", "rbxlx"],
            }),
            suggestCurrentToken: true,
          },
        },
        {
          name: "--watch",
          description:
            "Whether to automatically rebuild when any input files change",
        },
      ],
      args: {
        name: "PROJECT",
        description:
          "Path to the project to serve. Defaults to the current directory [default: ]",
      },
    },
    {
      name: "doc",
      description: "Open Rojo's documentation in your browser",
    },
    {
      name: "fmt-project",
      description:
        "Reformat a Rojo project using the standard JSON formatting rules",
      args: {
        name: "PROJECT",
        description:
          "Path to the project to format. Defaults to the current directory [default: ]",
      },
    },
    {
      name: "init",
      description: "Initializes a new Rojo project",
      options: [
        {
          name: "--kind",
          description:
            "The kind of project to create, 'place' or 'model'. Defaults to place",
          args: {
            name: "KIND",
            description:
              "The kind of project to create, 'place' or 'model'. Defaults to place",
            suggestions: ["place", "model"],
          },
        },
      ],
      args: {
        name: "PATH",
        description:
          "Path to the place to create the project. Defaults to the current directory [default: ]",
      },
    },
    {
      name: "plugin",
      description: "Install Rojo's plugin",
    },
    {
      name: "serve",
      description: "Expose a Rojo project to the Rojo Studio plugin",
      options: [
        {
          name: "address",
          description: "The IP address to listen on. Defaults to `127.0.0.1`",
          args: {
            name: "ADDRESS",
            description: "The IP address to listen on. Defaults to `127.0.0.1`",
          },
        },
      ],
    },
    {
      name: "sourcemap",
      description: "Generates a sourcemap file from the Rojo project",
      options: [
        {
          name: "--include-non-scripts",
          description:
            "If non-script files should be included or not. Defaults to false",
        },
        {
          name: ["--output", "-o"],
          description:
            "Where to output the sourcemap. Omit this to use stdout instead of writing to a file. Should end in .json",
          args: {
            name: "OUTPUT",
            description:
              "Where to output the sourcemap. Omit this to use stdout instead of writing to a file. Should end in .json",
            generators: filepaths({
              extensions: ["rbxm", "rbxl", "rbxmx", "rbxlx"],
            }),
            suggestCurrentToken: true,
          },
        },
      ],
      args: {
        name: "PROJECT",
        description:
          "Path to the project to use for the sourcemap. Defaults to the current directory [default: ]",
      },
    },
    {
      name: "upload",
      description: "Builds the project and uploads it to Roblox",
      options: [
        {
          name: "--api-key",
          description:
            "API key obtained from create.roblox.com/credentials. Rojo will use the Open Cloud API when this is provided. Only supports uploading to a place",
          args: {
            name: "API_KEY",
            description:
              "API key obtained from create.roblox.com/credentials. Rojo will use the Open Cloud API when this is provided. Only supports uploading to a place",
          },
        },
        {
          name: "--asset_id",
          description: "Asset ID to upload to",
          args: {
            name: "ASSET_ID",
            description: "Asset ID to upload to",
          },
        },
        {
          name: "--cookie",
          description:
            "Authenication cookie to use. If not specified, Rojo will attempt to find one from the system automatically",
          args: {
            name: "COOKIE",
            description:
              "Authenication cookie to use. If not specified, Rojo will attempt to find one from the system automatically",
          },
        },
        {
          name: "--universe_id",
          description:
            "The Universe ID of the given place. Required when using the Open Cloud API",
          args: {
            name: "UNIVERSE_ID",
            description:
              "The Universe ID of the given place. Required when using the Open Cloud API",
          },
        },
      ],
      args: {},
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help information",
      isPersistent: true,
    },
    {
      name: "--color",
      description:
        "Set color behavior. Valid values are auto, always, and never [default: auto]",
      isPersistent: true,
      args: {
        name: "COLOR",
        suggestions: ["auto", "always", "never"],
        default: "auto",
      },
    },
    {
      name: ["--verbose", "-v"],
      description: "Sets verbosity level. Can be specified multiple times",
      isRepeatable: 4,
      isPersistent: true,
    },
    {
      name: ["--version", "-V"],
      description: "Print version information",
    },
  ],
};
export default completionSpec;
