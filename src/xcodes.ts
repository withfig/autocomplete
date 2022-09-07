const completionSpec: Fig.Spec = {
  name: "xcodes",
  description: "Manage the Xcode versions installed on your Mac",
  subcommands: [
    {
      name: "help",
      args: {
        name: "command",
        template: "help",
        isOptional: true,
      },
    },
    {
      name: "download",
      description: "Download a specific version of Xcode",
      options: [
        {
          name: "--latest",
          description:
            "Update and then install the latest non-prerelease version available",
        },

        {
          name: "--latest-prerelease",
          description:
            "Update and then install the latest prerelease version available, including GM seeds and GMs",
        },
        {
          name: "--aria2",
          description:
            "The path to an aria2 executable. Searches $PATH by default",
          args: { name: "aria2", template: "filepaths" },
        },
        {
          name: "--no-aria2",
          description:
            "Don't use aria2 to download Xcode, even if it's available",
        },
        {
          name: "--directory",
          description:
            "The directory where your Xcodes are installed. Defaults to /Applications",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--data-source",
          description:
            "The data source for available Xcode versions. (default: xcodereleases)",
          args: { name: "dataSource", suggestions: ["xcodereleases", "apple"] },
        },
        { name: "--color", description: "Color the output" },
        { name: "--no-color", description: "Do not color the output" },
        {
          name: ["--help", "-h"],
          description: "Show help information",
        },
      ],
      args: {
        name: "version",
        description: "The version to install",
        isOptional: true,
      },
    },
    {
      name: "install",
      description: "Download and install a specific version of Xcode",
      options: [
        {
          name: "--path",
          description: "Local path to Xcode.xip",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--latest",
          description:
            "Update and then install the latest non-prerelease version available",
        },

        {
          name: "--latest-prerelease",
          description:
            "Update and then install the latest prerelease version available, including GM seeds and GMs",
        },
        {
          name: "--aria2",
          description:
            "The path to an aria2 executable. Searches $PATH by default",
          args: { name: "aria2", template: "filepaths" },
        },
        {
          name: "--no-aria2",
          description:
            "Don't use aria2 to download Xcode, even if it's available",
        },
        {
          name: "--experimental-unxip",
          description:
            "Use the experimental unxip functionality. May speed up unarchiving by up to 2-3x",
        },
        {
          name: "--directory",
          description:
            "The directory where your Xcodes are installed. Defaults to /Applications",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--data-source",
          description:
            "The data source for available Xcode versions. (default: xcodereleases)",
          args: { name: "dataSource", suggestions: ["xcodereleases", "apple"] },
        },
        { name: "--color", description: "Color the output" },
        { name: "--no-color", description: "Do not color the output" },
        {
          name: ["--help", "-h"],
          description: "Show help information",
        },
      ],
      args: {
        name: "version",
        description: "The version to install",
        isOptional: true,
      },
    },
    {
      name: "installed",
      description: "List the versions of Xcode that are installed",
      options: [
        {
          name: "--directory",
          description:
            "The directory where your Xcodes are installed. Defaults to /Applications",
          args: { name: "directory", template: "folders" },
        },
        { name: "--color", description: "Color the output" },
        { name: "--no-color", description: "Do not color the output" },
        {
          name: ["--help", "-h"],
          description: "Show help information",
        },
      ],
    },
    {
      name: "list",
      description: "List all versions of Xcode available to install",
      options: [
        {
          name: "--directory",
          description:
            "The directory where your Xcodes are installed. Defaults to /Applications",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--data-source",
          description:
            "The data source for available Xcode versions. (default: xcodereleases)",
          args: { name: "dataSource", suggestions: ["xcodereleases", "apple"] },
        },
        { name: "--color", description: "Color the output" },
        { name: "--no-color", description: "Do not color the output" },
        {
          name: ["--help", "-h"],
          description: "Show help information",
        },
      ],
    },
    {
      name: "select",
      description: "Change the selected Xcode",
      options: [
        {
          name: ["-p", "--print-path"],
          description: "Print the path of the selected Xcode",
        },
        {
          name: "--directory",
          description:
            "The directory where your Xcodes are installed. Defaults to /Applications",
          args: { name: "directory", template: "folders" },
        },
        { name: "--color", description: "Color the output" },
        { name: "--no-color", description: "Do not color the output" },
        {
          name: ["--help", "-h"],
          description: "Show help information",
        },
      ],
      args: {
        name: "version-or-path",
        description: "Version or path of Xcode to select",
        template: "filepaths",
        isOptional: true,
      },
    },
    {
      name: "uninstall",
      description: "Uninstall a version of Xcode",
      args: { name: "version", isOptional: true },
      options: [
        {
          name: "--directory",
          description:
            "The directory where your Xcodes are installed. Defaults to /Applications",
          args: { name: "directory", template: "folders" },
        },
        { name: "--color", description: "Color the output" },
        { name: "--no-color", description: "Do not color the output" },
        {
          name: ["--help", "-h"],
          description: "Show help information",
        },
      ],
    },
    {
      name: "update",
      description: "Update the list of available versions of Xcode",
      options: [
        {
          name: "--directory",
          description:
            "The directory where your Xcodes are installed. Defaults to /Applications",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--data-source",
          description:
            "The data source for available Xcode versions. (default: xcodereleases)",
          args: { name: "dataSource", suggestions: ["xcodereleases", "apple"] },
        },
        { name: "--color", description: "Color the output" },
        { name: "--no-color", description: "Do not color the output" },
        {
          name: ["--help", "-h"],
          description: "Show help information",
        },
      ],
    },
    {
      name: "version",
      description: "Print the version number of xcodes itself",
      options: [
        { name: "--color", description: "Color the output" },
        { name: "--no-color", description: "Do not color the output" },
        {
          name: ["--help", "-h"],
          description: "Show help information",
        },
      ],
    },
    {
      name: "signout",
      description: "Clears the stored username and password",
      options: [
        { name: "--color", description: "Color the output" },
        { name: "--no-color", description: "Do not color the output" },
        {
          name: ["--help", "-h"],
          description: "Show help information",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help information",
    },
  ],
};
export default completionSpec;
