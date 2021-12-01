const completionSpec: Fig.Spec = {
  name: "swc",
  description:
    "SWC is a super-fast compiler written in rust; producing widely-supported javascript from modern standards and typescript",
  options: [
    {
      name: ["--filename", "-f"],
      description:
        "Filename to use when reading from stdin. This will be used in source maps and errors",
      args: {
        name: "FILE",
        description: "Path to the file",
        template: ["filepaths"],
      },
    },
    {
      name: "--config-file",
      description: "Path to a .swcrc file to use",
      args: {
        name: "CONFIG_FILE",
        description: "Path to a .swcrc file to use",
        template: ["filepaths"],
      },
    },
    {
      name: "--env-name",
      description:
        "The name of the 'env' to use when loading configs and plugins. Defaults to the value of SWC_ENV, or else NODE_ENV, or else development",
      args: {
        name: "ENV_NAME",
        description:
          "The name of the 'env' to use when loading configs and plugins. Defaults to the value of SWC_ENV, or else NODE_ENV, or else development",
      },
    },
    {
      name: "--no-swcrc",
      description: "Whether or not to look up .swcrc files",
    },
    {
      name: "--ignore",
      description: "List of glob paths to not compile",
      args: {
        name: "PATH",
        description: "A glob path to not compile",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--only",
      description: "List of glob paths to only compile",
      args: {
        name: "PATH",
        description: "A glob path to only compile",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: ["--watch", "-w"],
      description: "Watch for changes and recompile",
    },
    {
      name: ["--quiet", "-q"],
      description: "Suppress compilation output",
    },
    {
      name: ["--source-maps", "-s"],
      description: "Generate source maps",
      args: {
        name: "SOURCE_MAP",
        description: "Source map type",
        suggestions: ["true", "false", "inline", "both"],
      },
    },
    {
      name: "--source-map-target",
      description: "Define the file for the source map",
      args: {
        name: "FILE",
        description: "The file for the source map",
        template: ["filepaths"],
      },
    },
    {
      name: "--source-file-name",
      description: "Set sources[0] on returned source map",
    },
    {
      name: "--source-root",
      description: "The root from which all sources are relative",
    },
    {
      name: ["--out-file", "-o"],
      description: "Compile all input files into a single file",
      args: {
        name: "OUTPUT_FILE",
        description: "The output file",
        template: ["filepaths"],
      },
    },
    {
      name: ["--out-dir", "-d"],
      description:
        "Compile an input directory of modules into an output directory",
      args: {
        name: "OUTPUT_DIR",
        description: "The output directory",
        template: ["folders"],
      },
    },
    {
      name: ["--copy-files", "-D"],
      description: "When compiling a directory, copy over non-compilable files",
    },
    {
      name: "--include-dotfiles",
      description:
        "Include dotfiles when compiling and copying non-compilable files",
    },
    {
      name: ["--config", "-C"],
      description: "Override a config from .swcrc file",
      args: {
        name: "CONFIG_FILE",
        description: "Path to .swcrc file",
        template: ["filepaths"],
      },
    },
    {
      name: "--sync",
      description: "Invoke swc synchronously. Useful for debugging",
    },
    {
      name: "--log-watch-compilation",
      description: "Log a message when a watched file is successfully compiled",
    },
    {
      name: "--extensions",
      description: "Log a message when a watched file is successfully compiled",
    },
  ],
};
export default completionSpec;
