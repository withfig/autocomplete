const completionSpec: Fig.Spec = {
  name: "splash-cli",
  displayName: "Splash",
  description: "Get stunning wallpapers from Unsplash",
  subcommands: [
    {
      name: "settings",
      description: "Manage settings",
      icon: "⚙️",
      subcommands: [
        {
          name: "get",
          args: {
            name: "config key",
            description: "Config key",
            isOptional: true,
          },
        },
        {
          name: "set",
          description: "Setup the configuration",
        },
        {
          name: "restore",
          description: "Restore default settings",
        },
      ],
    },
    {
      name: "aliases",
      description: "Manage aliases",
      icon: "🔗",
      subcommands: [
        {
          name: "get",
          description: "Get an alias",
          args: {
            name: "alias",
          },
        },
        {
          name: "set",
          description: "Set an alias",
          args: [
            {
              name: "key",
            },
            {
              name: "value",
            },
          ],
        },
        {
          name: "help",
          description: "Show help menu",
        },
      ],
    },
    {
      name: "collection",
      description: "Manage collections",
      icon: "🗃",
      subcommands: [
        {
          name: "get",
          description: "Get a collection",
          args: {
            name: "collection id",
          },
        },
        {
          name: "delete",
          description: "Delete a collection",
          args: {
            name: "collection id",
          },
        },
        {
          name: "create",
          description: "Create a collection",
        },
        {
          name: "photos:add",
          description: "Add photos to a collection",
        },
        {
          name: "photos:remove",
          description: "Remove photos to a collection",
        },
        {
          name: "help",
          description: "Show help for this command",
        },
      ],
    },
    {
      name: "dir",
      description: "Manage SplashCLI download directory",
      icon: "📁",
      subcommands: [
        {
          name: "get",
          icon: "📁",
          description: "Get the download directory path",
        },
        {
          name: "set",
          icon: "📁",
          description: "Set the download directory path",
          args: {
            name: "path",
          },
        },
        {
          name: "clean",
          description: "Delete all the downloaded photos",
          isDangerous: true,
          icon: "🗑️",
        },
        {
          name: "count",
          description: "Count all the downloaded photos",
          icon: "📈",
        },
        {
          name: "help",
          description: "Show help for this command",
        },
      ],
    },
    {
      name: "user",
      subcommands: [
        {
          name: "login",
          description: "Login with your Unsplash account",
        },
        {
          name: "logout",
          description: "Removes all user data",
        },
        {
          name: "liked",
          description: "List last 10 liked photos",
          icon: "❤️",
        },
        {
          name: "collections",
          description: "List all user's collections",
          icon: "🗃",
        },
        {
          name: "get",
          description: "Get user infos",
          icon: "🔍",
        },
        {
          name: ["edit", "update"],
          description: "Update user infos",
          icon: "🧪",
        },
        {
          name: "help",
          description: "Help Menu",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Help Message",
      icon: "📚",
    },
    {
      name: ["--version", "-v"],
      description: "Prints `splash-cli` version",
    },
    {
      name: "--scale",
      icon: "🔎",
      description: "Scale of the image",
      args: {
        name: "scale",
        default: "auto",
        suggestions: ["auto", "fill", "fit", "stretch", "center"],
      },
    },
    {
      name: "--screen",
      icon: "🖥",
      description: "Set wallpaper on selected screen",
      args: {
        name: "screen",
        default: "all",
        suggestions: ["all", "main"],
      },
    },
    {
      name: ["-s", "--save"],
      description: "Save photo without setting as wallpaper",
      icon: "💾",
      args: {
        isOptional: true,
        name: "path",
        default: ".",
        template: "folders",
      },
    },
    {
      name: "--set",
      description: "Set wallpaper from local file",
      args: {
        name: "filepath",
        template: "filepaths",
      },
    },
    {
      name: ["-i", "--info"],
      description: "Show image exif data",
      icon: "📋",
    },
    {
      name: ["-q", "--quiet"],
      description: "Hide output",
      icon: "💤",
    },

    // Image Manipulation
    {
      name: "--rotate",
      icon: "🔄",
      description: "Rotate image",
      args: {
        name: "degrees",
        suggestions: ["90", "180", "270"],
      },
    },
    {
      name: "--colorspace",
      description: "Define image colorspace",
      icon: "🎨",
      args: {
        name: "colorspace",
        default: "srgb",
        suggestions: ["srgb", "rgb", "cmyk", "lab", "b-w"],
      },
    },
    {
      name: "--flip",
      description: "Flip image on the Y axis",
      icon: "🔁",
    },
    {
      name: ["-f", "--featured"],
      icon: "🎉",
      isRepeatable: false,
      description: "Limit to only featured photos",
    },
    {
      name: "--query",
      isRepeatable: false,
      description: "Filter by keywords",
      args: {
        name: "querystring",
      },
    },
    {
      name: "--orientation",
      icon: "🔄",
      description: "Filter by orientation",
      args: {
        name: "orientation",
        default: "landscape",
        suggestions: ["landscape", "portrait", "squarish"],
      },
    },

    // Source
    {
      name: ["-c", "--curated"],
      description: "Random Curated photo",
    },
    {
      name: ["-u", "--user"],
      description: "Random photo from user",
      icon: "🙋‍♂️",
      args: {
        name: "username",
      },
    },
    {
      name: "--collection",
      description: "Random photo from collection",
      icon: "🗃",
      args: {
        name: "collection id",
      },
    },
    {
      name: "--id",
      description: "Get photo by ID",
      args: {
        name: "photo_id",
      },
    },
    {
      name: "--day",
      icon: "🏝",
      description: "Photo of the day",
    },
  ],
};

export default completionSpec;
