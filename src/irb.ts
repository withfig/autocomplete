const completionSpec: Fig.Spec = {
  name: "irb",
  description: "Interactive Ruby Shell",
  options: [
    {
      name: "--inspect",
      description: "Use inspect for output",
    },
    {
      name: "--noinspect",
      description: "Do not use inspect for output",
    },
    {
      name: "--multiline",
      description: "Use multiline editor module",
    },
    {
      name: "--nomultiline",
      description: "Do not use multiline editor module",
    },
    {
      name: "--singleline",
      description: "Use single line editor module",
    },
    {
      name: "--nosingleline",
      description: "Do not use single line editor module",
    },
    {
      name: "--colorize",
      description: "Use colorization",
    },
    {
      name: "--nocolorize",
      description: "Do not use colorization",
    },
    {
      name: "--autocomplete",
      description: "Use autocompletion",
    },
    {
      name: "--noautocomplete",
      description: "Do not use autocompletion",
    },
    {
      name: "--echo",
      description: "Show result",
    },
    {
      name: "--noecho",
      description: "Do not show result",
    },
    {
      name: "--echo-on-assignment",
      description: "Show result on assignment",
    },
    {
      name: "--noecho-on-assignment",
      description: "Do not show result on assignment",
    },
    {
      name: "--truncate-echo-on-assignment",
      description: "Show truncated result on assignment",
    },
    {
      name: "--verbose",
      description: "Show details",
    },
    {
      name: "--noverbose",
      description: "Do not show details",
    },
    {
      name: "--prompt",
      description: "Set prompt mode",
      args: {
        name: "prompt-mode",
        suggestions: ["default", "classic", "simple", "inf-ruby", "xmp", "null"],
      },
    },
    {
      name: "--noprompt",
      description: "Do not show prompt",
    },
    {
      name: "--back-trace-limit",
      description: "Set number of lines to display in backtrace",
      args: {
        name: "n",
      },
    },
    {
      name: "-r",
      description: "Require library",
      args: {
        name: "library",
      },
    },
    {
      name: "-I",
      description: "Add path to $LOAD_PATH",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "-U",
      description: "Set internal encoding to UTF-8",
    },
    {
      name: "-E",
      description: "Set external and internal encodings",
      args: {
        name: "external[:internal]",
      },
    },
    {
      name: "-w",
      description: "Turn on warnings (same as ruby -w)",
    },
    {
      name: "-W",
      description: "Set warning level (0=silence, 1=medium, 2=verbose)",
      args: {
        name: "level",
        suggestions: ["0", "1", "2"],
      },
    },
    {
      name: "-d",
      description: "Set $DEBUG to true",
    },
    {
      name: "--tracer",
      description: "Display trace for each execution of commands",
    },
    {
      name: ["-v", "--version"],
      description: "Print the version and exit",
    },
    {
      name: ["-h", "--help"],
      description: "Print help and exit",
    },
  ],
  args: {
    name: "file",
    isOptional: true,
    template: "filepaths",
    description: "Ruby script to load into irb",
  },
};
export default completionSpec;
