import { filepaths } from "@fig/autocomplete-generators";

/* Interactive Ruby
  Usage: irb.rb [options] [programfile] [arguments]

  -f                Don't initialize from configuration file.
  -d                Set $DEBUG and $VERBOSE to true (same as 'ruby -d').
  -r load-module    Require load-module (same as 'ruby -r').
  -I path           Specify $LOAD_PATH directory (same as 'ruby -I').
  -U                Set external and internal encodings to UTF-8.
  -E ex[:in]        Set default external (ex) and internal (in) encodings
                    (same as 'ruby -E').
  -w                Suppress warnings (same as 'ruby -w').
  -W[level=2]       Set warning level: 0=silence, 1=medium, 2=verbose
                    (same as 'ruby -W').
  --context-mode n  Set n[0-4] to method to create Binding Object,
                    when new workspace was created.
  --extra-doc-dir   Add an extra doc dir for the doc dialog.
  --echo            Show result (default).
  --noecho          Don't show result.
  --echo-on-assignment
                    Show result on assignment.
  --noecho-on-assignment
                    Don't show result on assignment.
  --truncate-echo-on-assignment
                    Show truncated result on assignment (default).
  --inspect         Use 'inspect' for output.
  --noinspect       Don't use 'inspect' for output.
  --multiline       Use multiline editor module (default).
  --nomultiline     Don't use multiline editor module.
  --singleline      Use single line editor module.
  --nosingleline    Don't use single line editor module (default).
  --colorize        Use color-highlighting (default).
  --nocolorize      Don't use color-highlighting.
  --autocomplete    Use auto-completion (default).
  --noautocomplete  Don't use auto-completion.
  --prompt prompt-mode, --prompt-mode prompt-mode
                    Set prompt mode. Pre-defined prompt modes are:
                    'default', 'classic', 'simple', 'inf-ruby', 'xmp', 'null'.
  --inf-ruby-mode   Use prompt appropriate for inf-ruby-mode on emacs.
                    Suppresses --multiline and --singleline.
  --sample-book-mode, --simple-prompt
                    Set prompt mode to 'simple'.
  --noprompt        Don't output prompt.
  --script          Script mode (default, treat first argument as script)
  --noscript        No script mode (leave arguments in argv)
  --single-irb      Share self with sub-irb.
  --tracer          Show stack trace for each command.
  --back-trace-limit n[=16]
                    Display backtrace top n and bottom n.
  --verbose         Show details.
  --noverbose       Don't show details.
  -v, --version     Print the version of irb.
  -h, --help        Print help.
  --                Separate options of irb from the list of command-line **args.**
*/

const completionSpec: Fig.Spec = {
  name: "irb",
  description: "Interactive Ruby",
  options: [
    { name: ["--help", "-h"], description: "Print help" },
    { name: ["--version", "-v"], description: "Print the version of irb" },
    {
      name: "--",
      description: "Separate options of irb from the list of command-line args",
    },
    { name: "--verbose", description: "Show details" },
    { name: "--noverbose", description: "Don't show details" },
    { name: "--tracer", description: "Show stack trace for each command" },
    {
      name: "--back-trace-limit",
      description: "Display backtrace top n and bottom n",
      args: { name: "n" },
    },
    { name: "--single-irb", description: "Share self with sub-irb" },
    { name: "--script", description: "Script mode" },
    { name: "--noscript", description: "No script mode" },
    { name: "--colorize", description: "Use color-highlighting" },
    { name: "--nocolorize", description: "Don't use color-highlighting" },
    { name: "--autocomplete", description: "Use auto-completion" },
    { name: "--noautocomplete", description: "Don't use auto-completion" },
    { name: ["--prompt", "--prompt-mode"], description: "Set prompt mode" },
    { name: "--noprompt", description: "Don't output prompt" },
    {
      name: "--inf-ruby-mode",
      description:
        "Use prompt appropriate for inf-ruby-mode on emacs Suppresses --multiline and --singleline",
    },
  ],
};
export default completionSpec;
