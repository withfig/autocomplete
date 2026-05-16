const completionSpec: Fig.Spec = {
  name: "asciinema",
  description: "Terminal session recorder",
  options: [
    {
      name: "--version",
      description: "Ouput version information and exit",
    },
    {
      name: ["-h", "--help"],
      description: "Output help message and exit",
      isPersistent: true,
    },
  ],
  subcommands: [
    {
      name: "rec",
      description: "Start a recording",
      args: {
        name: "filename",
        isOptional: true,
      },
      options: [
        {
          name: "--stdin",
          description: "Enable stdin (keyboard) recording",
        },
        {
          name: "--append",
          description: "Append to existing recording",
        },
        {
          name: "--raw",
          description: "Save raw output, without timing or other metadata",
        },
        {
          name: "--overwrite",
          description: "Overwrite the recording if it already exists",
        },
        {
          name: ["-c", "--command"],
          insertValue: "-c='{cursor}'",
          description: "Specify command to record, defaults to $SHELL",
          requiresSeparator: true,
          args: {
            name: "command",
            isCommand: true,
          },
        },
        {
          name: ["-e", "--env"],
          insertValue: "-c='{cursor}'",
          description: "List of environment variables to capture",
          requiresSeparator: true,
          args: {
            name: "variables",
          },
        },
        {
          name: ["-t", "--title"],
          insertValue: "-t='{cursor}'",
          description: "Specify the title of the asciicast",
          requiresSeparator: true,
          args: {
            name: "title",
          },
        },
        {
          name: ["-i", "--idle-time-limit"],
          description:
            "Limit recorded terminal inactivity to max amount of seconds",
          requiresSeparator: true,
          args: {
            name: "seconds",
          },
        },
        {
          name: "--cols",
          description: "Override terminal columns for recorded process",
          requiresSeparator: true,
          args: {
            name: "cols",
          },
        },
        {
          name: "--rows",
          description: "Override terminal rows for recorded process",
          requiresSeparator: true,
          args: {
            name: "rows",
          },
        },
        {
          name: ["-y", "--yes"],
          description: "Answer “yes” to all prompts (e.g. upload confirmation)",
        },
        {
          name: ["-q", "--quiet"],
          description: "Be quiet, suppress all notices/warnings (implies -y)",
        },
      ],
    },
    {
      name: "play",
      description: "Replay recorded asciicast in a terminal",
      args: {
        name: "file or URL",
        template: "filepaths",
        suggestions: [
          {
            name: "-",
            description: "Stdin",
          },
        ],
      },
      options: [
        {
          name: ["-i", "--idle-time-linit"],
          description: "Limit replayed terminal inactivity",
          requiresSeparator: true,
          args: {
            name: "seconds",
            description: "Can be fractional",
          },
        },
        {
          name: ["-s", "--speed"],
          description: "Playback speed",
          requiresSeparator: true,
          args: {
            name: "factor",
            description: "Can be fractional",
          },
        },
      ],
    },
    {
      name: "cat",
      description: "Print full output of recorded asciicast to a terminal",
      args: {
        name: "file or URL",
        template: "filepaths",
        suggestions: [
          {
            name: "-",
            description: "Stdin",
          },
        ],
      },
    },
    {
      name: "upload",
      description: "Upload recorded asciicast to asciinema.org site",
      args: {
        name: "file or URL",
        template: "filepaths",
        suggestions: [
          {
            name: "-",
            description: "Stdin",
          },
        ],
      },
    },
    {
      name: "auth",
      description:
        "Link and manage your install ID with your asciinema.org user account",
    },
  ],
};
export default completionSpec;
