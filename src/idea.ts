export const generateInteliJCompletionSpec = (
  name: string,
  editorName: string
): Fig.Spec => {
  return {
    name,
    description: `${editorName} cli`,
    args: {
      name: "path",
      template: "filepaths",
    },
    subcommands: [
      {
        name: "diff",
        description:
          "Open the diff viewer to see the differences between two specified files",
        args: [
          {
            name: "path",
            template: "filepaths",
          },
          {
            name: "path2",
            template: "filepaths",
          },
          {
            name: "path3-optional",
            template: "filepaths",
          },
        ],
      },
      {
        name: "merge",
        description: "Open the Merge dialog to merge the specified files",
        args: [
          {
            name: "path",
            template: "filepaths",
          },
          {
            name: "path2",
            template: "filepaths",
          },
          {
            name: "base-optional",
            template: "filepaths",
          },
        ],
      },
      {
        name: "format",
        description: "Apply code style formatting to the specified files",
        args: {
          name: "path...",
          template: "filepaths",
        },
        options: [
          {
            name: "-h",
            description: "Show help for format command",
          },
          {
            name: ["-m", "-mask"],
            description:
              "Specify a comma-separated list of file masks that define the files to be processed",
          },
          {
            name: ["-r", "-R"],
            description: "Process specified directories recursively",
          },
          {
            name: ["-s", "-settings"],
            description:
              "Specify the code style settings file to use for formatting",
          },
          {
            name: "-allowDefaults",
            description:
              "Use the default code style settings when the code style is not defined for a file or a group of files",
          },
          {
            name: "-charset",
            description:
              "Preserve encoding and enforce the charset for reading and writing source files",
          },
          {
            name: ["-d", "-dry"],
            description: "Run the formatter in the validation mode",
          },
        ],
      },
      {
        name: "inspect",
        description: "Perform code inspection on the specified project",
        args: [
          {
            name: "project",
            template: "folders",
          },
          {
            name: "inspection-profile",
            template: "filepaths",
          },
          {
            name: "output",
            template: "filepaths",
          },
        ],
        options: [
          {
            name: "-changes",
            description: "Run inspections only on local uncommitted changes",
          },
          {
            name: "-d",
            description:
              "Specify the full path to the subdirectory if you don't want to inspect the whole project",
          },
          {
            name: "-format",
            description:
              "Specify the format of the output file with inspection results",
          },
          {
            name: "-v",
            description: "Set the verbosity level of the output",
          },
        ],
      },
      {
        name: "installPlugins",
        description:
          "Install plugins by plugin ID from JetBrains Marketplace or a custom plugin repository",
        args: [
          {
            name: "plugin-id",
          },
          {
            name: "repository-url ",
          },
        ],
      },
    ],
    options: [
      {
        name: "nosplash",
        description: `Do not show the splash screen when loading ${editorName}`,
      },
      {
        name: "dontReopenProjects",
        description: "Do not reopen projects and show the welcome screen",
      },
      {
        name: "disableNonBundledPlugins",
        description: "Do not load manually installed plugins",
      },
      {
        name: "--wait",
        description:
          "Wait for the files to be closed before returning to the command prompt",
      },
    ],
  };
};

const completionSpec = generateInteliJCompletionSpec("idea", "InteliJ IDEA");

export default completionSpec;
