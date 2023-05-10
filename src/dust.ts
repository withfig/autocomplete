const completionSpec: Fig.Spec = {
  name: "dust",
  description: "Like du but more intuitive",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for dust",
    },
    {
      name: ["--version", "-V"],
      description: "Print version information",
    },
    {
      name: ["--no-percent-bars", "-b"],
      description: "No percent bars or percentages will be displayed",
    },
    {
      name: ["--no-colors", "-c"],
      description:
        "No colors will be printed (Useful for commands like: watch)",
    },
    {
      name: ["--depth", "-d"],
      description: "Depth to show",
      args: {
        name: "depth",
      },
    },
    {
      name: ["--filter", "-e"],
      description:
        'Only include filepaths matching this regex. For png files type: -e "\\.png$"',
      args: {
        name: "filter",
      },
    },
    {
      name: ["--filecount", "-f"],
      description:
        "Directory 'size' is number of child files/dirs not disk size",
    },
    {
      name: ["--si", "-H"],
      description: "Print sizes in powers of 1000 (e.g., 1.1G)",
    },
    {
      name: ["--ignore_hidden", "-i"],
      description: "Do not display hidden files",
    },
    {
      name: ["--number-of-lines", "-n"],
      description:
        "Number of lines of output to show. (Default is terminal_height - 10)",
      args: {
        name: "number_of_lines",
      },
    },
    {
      name: ["--full-paths", "-p"],
      description: "Subdirectories will not have their path shortened",
    },
    {
      name: ["--reverse", "-r"],
      description: "Print tree upside down (biggest highest)",
    },
    {
      name: ["--apparent-size", "-s"],
      description: "Use file length instead of blocks",
    },
    {
      name: "--skip-total",
      description: "No total row will be displayed",
    },
    {
      name: ["--file_types", "-t"],
      description: "Show only these file types",
    },
    {
      name: ["--invert-filter", "-v"],
      description:
        'Exclude filepaths matching this regex. To ignore png files type: -v "\\.png$"',
      args: {
        name: "invert_filter",
      },
    },
    {
      name: ["--terminal_width", "-w"],
      description:
        "Specify width of output overriding the auto detection of terminal width",
      args: {
        name: "width",
      },
    },
    {
      name: ["--limit-filesystem", "-x"],
      description:
        "Only count the files and directories on the same filesystem as the supplied directory",
    },
    {
      name: ["--ignore-directory", "-X"],
      description: "Exclude any file or directory with this name",
      args: {
        name: "ignore_directory",
        template: "folders",
      },
    },
    {
      name: ["--min-size", "-z"],
      description: "Minimum size file to include in output",
      args: {
        name: "min_size",
      },
    },
  ],
  args: {
    name: "inputs",
    template: ["filepaths", "folders"],
  },
};
export default completionSpec;
