/* Interactive Ruby
Usage: pry [OPTIONS]
Start a Pry session.
See http://pry.github.io/ for more information.
Copyright (c) 2016 John Mair (banisterfiend)
    -e, --exec                A line of code to execute in context before the session starts
        --no-pager            Disable pager for long output
        --no-history          Disable history loading
        --no-color            Disable syntax highlighting for session
    -f,                       Suppress loading of pryrc
    -s, --select-plugin       Only load specified plugin (and no others).
    -d, --disable-plugin      Disable a specific plugin.
        --no-plugins          Suppress loading of plugins.
        --plugins             List installed plugins.
        --simple-prompt       Enable simple prompt mode
        --noprompt            No prompt mode
    -r, --require             `require` a Ruby script at startup
    -I,                       Add a path to the $LOAD_PATH
        --gem                 Shorthand for -I./lib -rgemname
    -v, --version             Display the Pry version
    -c, --context             Start the session in the specified context. Equivalent to `context.pry` in a session.
    -h, --help                Display this help message.
*/

const completionSpec: Fig.Spec = {
  name: "pry",

  description: "Interactive Ruby",
  options: [
    {
      name: ["-e", "--exec"],
      description:
        "A line of code to execute in context before the session starts",
      args: { name: "code" },
    },
    { name: "--no-pager", description: "Disable pager for long output" },
    { name: "--no-history", description: "Disable history loading" },
    {
      name: "--no-color",
      description: "Disable syntax highlighting for session",
    },
    { name: "-f", description: "Suppress loading of pryrc" },
    {
      name: ["-s", "--select-plugin"],
      description: "Only load specified plugin (and no others)",
      args: { name: "plugin" },
    },
    {
      name: ["-d", "--disable-plugin"],
      description: "Disable a specific plugin",
      args: { name: "plugin" },
    },
    { name: "--no-plugins", description: "Suppress loading of plugins" },
    { name: "--plugins", description: "List installed plugins" },
    { name: "--simple-prompt", description: "Enable simple prompt mode" },
    { name: "--noprompt", description: "No prompt mode" },
    {
      name: ["-r", "--require"],
      description: "`require` a Ruby script at startup",
      args: { name: "script" },
    },
    {
      name: "-I",
      description: "Add a path to the $LOAD_PATH",
      args: { name: "path" },
    },
    {
      name: "--gem",
      description: "Shorthand for -I./lib -rgemname",
      args: { name: "gemname" },
    },
    { name: ["-v", "--version"], description: "Display the Pry version" },
    {
      name: ["-c", "--context"],
      description:
        "Start the session in the specified context. Equivalent to `context.pry` in a session",
      args: { name: "context" },
    },
    { name: ["-h", "--help"], description: "Display this help message" },
  ],
};
export default completionSpec;
