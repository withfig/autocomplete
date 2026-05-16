const identifierArg: Fig.Arg = {
  name: "identifier",
  suggestions: [
    "pid",
    "pid.tty",
    "pid.tty.host",
    "sessionowner/pid",
    "sessionowner/pid.tty",
    "sessionowner/pid.tty.host",
  ],
};

const completionSpec: Fig.Spec = {
  name: "screen",
  description: "Screen manager with VT100/ANSI terminal emulation",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
    flagsArePosixNoncompliant: true,
  },
  subcommands: [
    {
      name: "-d",
      description:
        "Does not start screen, but detaches the elsewhere running screen session",
      icon: "fig://icon?type=option",
      subcommands: [
        {
          name: "-r",
          description: "Reattach a session and if necessary detach it first",
          icon: "fig://icon?type=option",
          args: identifierArg,
        },
        {
          name: "-R",
          description:
            "Reattach a session and if necessary detach or even create it first",
          icon: "fig://icon?type=option",
          args: identifierArg,
        },
        {
          name: "-RR",
          description:
            "Reattach a session and if necessary detach or create it. Use the first session if more than one session is available",
          icon: "fig://icon?type=option",
          args: identifierArg,
        },
      ],
    },
    {
      name: "-D",
      description:
        "Does not start screen, but detaches the elsewhere running screen session",
      icon: "fig://icon?type=option",
      subcommands: [
        {
          name: "-r",
          description:
            "Reattach a session. If necessary detach and logout remotely first",
          icon: "fig://icon?type=option",
          args: identifierArg,
        },
        {
          name: "-R",
          description:
            "Attach here and now. In detail this means: If a session is running, then reattach. If necessary detach and logout remotely first",
          icon: "fig://icon?type=option",
          args: identifierArg,
        },
        {
          name: "-RR",
          description: "Attach here and now. Whatever that means, just do it",
          icon: "fig://icon?type=option",
          args: identifierArg,
        },
      ],
    },
    {
      name: "-r",
      description: "Resumes a detached screen session",
      icon: "fig://icon?type=option",
      args: identifierArg,
    },
    {
      name: "-R",
      description:
        "Attempts to resume the first detached screen session it finds",
      icon: "fig://icon?type=option",
      args: identifierArg,
    },
    {
      name: "-dmS",
      description: "Start as daemon: Screen session in detached mode",
      icon: "fig://icon?type=option",
      args: {
        name: "name",
        description: "Name of the screen session",
      },
    },
  ],
  options: [
    {
      name: "-a",
      description: "Force all capabilities into each window's termcap",
    },
    {
      name: "-A",
      description: "Adapt all windows to the new display width & height",
    },
    {
      name: "-c",
      description: "Read configuration file instead of '.screenrc'",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "-e",
      description: "Change command characters",
      args: {
        name: "xy",
        description:
          "Specifies the command character to be x and the character generating a literal command character to y",
      },
    },
    {
      name: "-f",
      description: "Flow control on",
    },
    {
      name: "-fn",
      description: "Flow control off",
    },
    {
      name: "-fa",
      description: "Flow control automatic",
    },
    {
      name: "-h",
      description: "Set the size of the scrollback history buffer",
      args: {
        name: "h",
        description: "Lines",
      },
    },
    {
      name: "-i",
      description: "Interrupt output sooner when flow control is on",
    },
    {
      name: ["-list", "-ls"],
      description: "Do nothing, just list our SockDir",
    },
    {
      name: "-L",
      description: "Turn on output logging",
    },
    {
      name: "-m",
      description: "Ignore $STY variable, do create a new screen session",
    },
    {
      name: "-O",
      description: "Choose optimal output rather than exact vt100 emulation",
    },
    {
      name: "-p",
      description: "Preselect the named window if it exists",
      args: {
        name: "window",
      },
    },
    {
      name: "-q",
      description:
        "Quiet startup. Exits with non-zero return code if unsuccessful",
    },
    {
      name: "-s",
      description: "Shell to execute rather than $SHELL",
      args: {
        name: "shell",
      },
    },
    {
      name: "-S",
      description:
        "Name this session <pid>.sockname instead of <pid>.<tty>.<host>",
      args: {
        name: "sockname",
      },
    },
    {
      name: "-t",
      description: "Set title. (window's name)",
      args: {
        name: "title",
      },
    },
    {
      name: "-T",
      description: "Use term as $TERM for windows, rather than 'screen'",
      args: {
        name: "term",
      },
    },
    {
      name: "-U",
      description: "Tell screen to use UTF-8 encoding",
    },
    {
      name: "-v",
      description: "Print 'Screen version 4.00.03 (FAU) 23-Oct-06'",
    },
    {
      name: "-wipe",
      description: "Do nothing, just clean up SockDir",
      args: {
        name: "match",
        description: "Screen session to match",
        isOptional: true,
        suggestions: ["sessionowner/[pid.tty.host]"],
      },
    },
    {
      name: "-x",
      description: "Attach to a not detached screen. (Multi display mode)",
    },
    {
      name: "-X",
      description: "Execute <cmd> as a screen command in the specified session",
    },
  ],
  args: [
    {
      name: "cmd",
      description: "Command to invoke",
    },
    {
      name: "args",
      description: "Arguments to pass",
      isVariadic: true,
    },
  ],
};

export default completionSpec;
