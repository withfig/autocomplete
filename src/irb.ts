const completionSpec: Fig.Spec = {
  name: "irb",
  description: "Interactive Ruby shell",
  args: [
    {
      name: "programfile",
      description: "Ruby script to load into the session",
      isOptional: true,
      template: ["filepaths"],
    },
    {
      name: "arguments",
      description: "Arguments passed to the program",
      isOptional: true,
      isVariadic: true,
    },
  ],
  options: [
    {
      name: "-f",
      description: "Suppress read of ~/.irbrc",
    },
    {
      name: "-d",
      description: "Set $DEBUG to true (same as `ruby -d`)",
    },
    {
      name: "-r",
      description: "Require a module (same as `ruby -r`)",
      args: { name: "load-module" },
    },
    {
      name: "-I",
      description: "Specify $LOAD_PATH directory",
      args: { name: "path", template: "folders" },
    },
    {
      name: "-U",
      description: "Set UTF-8 as default encoding (same as `ruby -U`)",
    },
    {
      name: "-E",
      description: "Specify default external/internal encodings",
      args: { name: "enc" },
    },
    {
      name: "-w",
      description: "Enable warnings (same as `ruby -w`)",
    },
    {
      name: "-W",
      description: "Set warning level (same as `ruby -W`)",
      args: {
        name: "level",
        isOptional: true,
        suggestions: [
          { name: "0", description: "Show all warnings" },
          { name: "1", description: "Show medium-level warnings" },
          { name: "2", description: "Show important warnings (default)" },
          { name: "nil", description: "Show no warnings" },
        ],
      },
    },
    {
      name: "--context-mode",
      description:
        "Set method to create Binding Object when a new workspace is created",
      args: {
        name: "n",
        suggestions: [
          { name: "0", description: "Create binding with eval" },
          { name: "1", description: "Create binding with proc" },
          { name: "2", description: "Create binding with method" },
          { name: "3", description: "Create binding with TOPLEVEL_BINDING" },
        ],
      },
    },
    {
      name: "--echo",
      description: "Show result (default)",
    },
    {
      name: "--noecho",
      description: "Don't show result",
    },
    {
      name: "--inspect",
      description: "Use `inspect` for output (default except for bc mode)",
    },
    {
      name: "--noinspect",
      description: "Don't use inspect for output",
    },
    {
      name: "--readline",
      description: "Use Readline extension module",
    },
    {
      name: "--noreadline",
      description: "Don't use Readline extension module",
    },
    {
      name: ["--prompt", "--prompt-mode"],
      description: "Switch prompt mode",
      args: {
        name: "prompt-mode",
        suggestions: [
          { name: "default", description: "Default prompt" },
          { name: "simple", description: "Simple prompt" },
          { name: "xmp", description: "Xmp prompt" },
          { name: "inf-ruby", description: "Inf-ruby prompt" },
        ],
      },
    },
    {
      name: "--inf-ruby-mode",
      description:
        "Use prompt appropriate for inf-ruby-mode on emacs; suppresses --readline",
    },
    {
      name: ["--sample-book-mode", "--simple-prompt"],
      description: "Simple prompt mode",
    },
    {
      name: "--noprompt",
      description: "No prompt mode",
    },
    {
      name: "--single-irb",
      description: "Share self with sub-irb",
    },
    {
      name: "--tracer",
      description: "Display trace for each execution of commands",
    },
    {
      name: "--back-trace-limit",
      description: "Display backtrace top n and tail n (default 16)",
      args: { name: "n" },
    },
    {
      name: "--irb_debug",
      description: "Set internal debug level (not for popular use)",
      args: { name: "n" },
    },
    {
      name: "--verbose",
      description: "Show details",
    },
    {
      name: "--noverbose",
      description: "Don't show details",
    },
    {
      name: ["-v", "--version"],
      description: "Print the version of irb",
    },
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
    {
      name: "--",
      description: "Separate options of irb from the list of command-line args",
    },
  ],
};

export default completionSpec;
