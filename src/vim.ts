const completionSpec: Fig.Spec = {
  name: "vim",
  description:
    "Vi[m] is an one of two powerhouse text editors in the Unix world, the other being EMACS",
  args: {
    template: "filepaths",
  },
  options: [
      {
          name: "-v",
          description: "Vi mode (like 'vi')",
      },
      {
          name: "-e",
          description: "Ex mode (like 'ex')",
      },
      {
          name: "-E",
          description: "Improved Ex mode",
      },
      {
          name: "-s",
          description: "Silent (batch) mode (only for 'ex')",
          dependsOn: ["-e"],
      },
      {
          name: "-d",
          description: "Diff mode (like 'vimdiff')",
      },
      {
          name: "-y",
          description: "Easy mode (like 'evim', modeless)",
      },
      {
          name: "-R",
          description: "Readonly mode (like 'view')",
      },
      {
          name: "-Z",
          description: "Restricted mode (like 'rvim')",
      },
      {
          name: "-m",
          description: "Modifications (writing files) not allowed",
      },
      {
          name: "-M",
          description: "Modifications in text not allowed",
      },
      {
          name: "-b",
          description: "Binary mode",
      },
      {
          name: "-l",
          description: "Lisp mode",
      },
      {
          name: "-C",
          description: "Compatible with Vi: 'compatible'",
      },
      {
          name: "-N",
          description: "Not fully Vi compatible: 'nocompatible'",
      },
      {
          name: "-V[N][fname]",
          description: "Be verbose [level N] [log messages to fname]",
          args: [
              {
                  name: "N",
                  isOptional: false,
              },
              {
                  name: "fname",
                  template: "filepaths",
                  isOptional: false,
              },
          ],
      },
      {
          name: "-D",
          description: "Debugging mode",
      },
      {
          name: "-n",
          description: "No swap file, use memory only",
      },
      {
          name: "-r",
          description: "List swap files and exit",
      },
      {
          name: "-r (with file name)",
          description: "Recover crashed session",
          args: {
              name: "filename",
              isOptional: false,
              template: "filepaths",
          },
      },
      {
          name: "-L",
          description: "Same as -r",
          args: {
              name: "filename",
              isOptional: false,
              template: "filepaths",
          },
      },
      {
          name: "-T <terminal>",
          description: "Set terminal type to <terminal>",
          args: {
              name: "terminal",
              isOptional: false,
          },
      },
      {
          name: "--not-a-term",
          description: "Skip warning for input/output not being a terminal",
      },
      {
          name: "--ttyfail",
          description: "Exit if input or output is not a terminal",
      },
      {
          name: "-u <vimrc>",
          description: "Use <vimrc> instead of any .vimrc",
          args: {
              name: "vimrc",
              isOptional: false,
              template: "filepaths",
          },
      },
      {
          name: "--noplugin",
          description: "Don't load plugin scripts",
      },
      {
          name: "-p[N]",
          description: "Open N tab pages (default: one for each file)",
          args: {
              name: "N",
              isOptional: true,
          },
      },
      {
          name: "-o[N]",
          description: "Open N windows (default: one for each file)",
          args: {
              name: "N",
              isOptional: true,
          },
      },
      {
          name: "-O[N]",
          description: "Like -o but split vertically",
          args: {
              name: "N",
              isOptional: true,
          },
      },
      {
          name: "+",
          description: "Start at end of file",
      },
      {
          name: "+<lnum>",
          description: "Start at line <lnum>",
          args: {
              name: "lnum",
              isOptional: true,
          },
      },
      {
          name: "--cmd <command>",
          description: "Execute <command> before loading any vimrc file",
          args: {
              name: "command",
              isOptional: false,
          },
      },
      {
          name: "-c <command>",
          description: "Execute <command> after loading the first file",
          args: {
              name: "command",
              isOptional: false,
          },
      },
      {
          name: "-S <session>",
          description: "Source file <session> after loading the first file",
          args: {
              name: "session",
              isOptional: false,
              template: "filepaths",
          },
      },
      {
          name: "-s <scriptin>",
          description: "Read Normal mode commands from file <scriptin>",
          args: {
              name: "scriptin",
              isOptional: false,
              template: "filepaths",
          },
      },
      {
          name: "-w <scriptout>",
          description: "Append all typed commands to file <scriptout>",
          args: {
              name: "scriptout",
              isOptional: false,
              template: "filepaths",
          },
      },
      {
          name: "-W <scriptout>",
          description: "Write all typed commands to file <scriptout>",
          args: {
              name: "scriptout",
              isOptional: false,
              template: "filepaths",
          },
      },
      {
          name: "-x",
          description: "Edit encrypted files",
      },
      {
          name: "--startuptime <file>",
          description: "Write startup timing messages to <file>",
          args: {
              name: "file",
              isOptional: false,
              template: "filepaths",
          },
      },
      {
          name: "-i <viminfo>",
          description: "Use <viminfo> instead of .viminfo",
          args: {
              name: "viminfo",
              isOptional: false,
          },
      },
      {
          name: "--clean",
          description: "'nocompatible', Vim defaults, no plugins, no viminfo",
      },
      {
          name: ["-h", "--help"],
          description: "Print Help message and exit",
      },
      {
          name: "--version",
          description: "Print version information and exit",
      },
  ],
};

export default completionSpec;
