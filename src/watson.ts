// https://tailordev.github.io/Watson/
const listProjects: Fig.Generator = {
  script: ["watson", "projects"],
  postProcess: (output) => {
    return output.split("\n").map((project) => ({
      name: project,
      icon: "🗂",
    }));
  },
};

const listTags: Fig.Generator = {
  script: ["watson", "tags"],
  postProcess: (output) => {
    return output.split("\n").map((tag) => ({
      name: tag,
      icon: "🏷",
    }));
  },
};

const listFrames: Fig.Generator = {
  script: ["watson", "log", "--json", "--reverse"],
  postProcess: (output) => {
    return JSON.parse(output).map((frame) => ({
      name: frame.id.substring(0, 7),
      icon: "⏲",
      displayName: `${frame.id.substring(0, 7)} - ${frame.project} - ${
        frame.start
      }`,
    }));
  },
};

const completionSpec: Fig.Spec = {
  name: "watson",
  description: "A wonderful CLI to track your time",
  subcommands: [
    {
      name: "add",
      description:
        "Add time to a project with tag(s) that was not tracked live",
      args: {
        generators: [listProjects, listTags],
      },
      options: [
        {
          name: ["--from", "-f"],
          description: "Date and time of start of tracked activity",
          args: {
            name: "DATETIME",
            description: "The start time. Ex: 2022-03-04 12:00:00",
          },
        },
        {
          name: ["--to", "-t"],
          description: "Date and time of end of tracked activity",
          args: {
            name: "DATETIME",
            description: "The start time. Ex: 2022-03-04 12:00:00",
          },
        },
        {
          name: ["--confirm-new-project", "-c"],
          description: "Confirm creation of new tag",
        },
      ],
    },
    {
      name: "aggregate",
      description:
        "Display a report of the time spent on each project aggregated by day",
      options: [
        {
          name: ["--current", "-c"],
          description: "Include currently running frame in report",
          exclusiveOn: ["-C"],
        },
        {
          name: ["--no-current", "-C"],
          description: "Don't include currently running frame in report",
          exclusiveOn: ["--current"],
        },
        {
          name: ["--from", "-f"],
          description:
            "The date from when the reports should start. Defaults to seven days ago",
          args: {
            name: "DATETIME",
            description: "The start time. Ex: 2022-03-04 12:00:00",
          },
        },
        {
          name: ["--to", "-t"],
          description:
            "The date at which the report should stop (inclusive). Defaults to tomorrow",
          args: {
            name: "DATETIME",
            description: "The start time. Ex: 2022-03-04 12:00:00",
          },
        },
        {
          name: ["--project", "-p"],
          description:
            "Reports activity only for the given project. You can add other projects by using this option several times",
          args: {
            generators: listProjects,
            name: "PROJECT",
          },
        },
        {
          name: ["--tag", "-T"],
          description:
            "Reports activity only for frames containing the given tag. You can add several tags by using this option multiple times",
          args: {
            generators: listTags,
            name: "TAG",
          },
        },
        {
          name: ["--json", "-j"],
          description: "Format output in JSON instead of plain text",
          exclusiveOn: ["--csv", "--pager", "--no-pager"],
        },
        {
          name: ["--csv", "-s"],
          description: "Format output in CSV instead of plain text",
          exclusiveOn: ["--json", "--pager", "--no-pager"],
        },
        {
          name: ["--pager", "-g"],
          description: "View output through a pager",
          exclusiveOn: ["--csv", "--json", "--no-pager"],
        },
        {
          name: ["--no-pager", "-G"],
          description: "Don't view output through a pager",
          exclusiveOn: ["--csv", "--pager", "--json"],
        },
      ],
    },
    {
      name: "cancel",
      description:
        "Cancel the last call to the start command. The time will not be recorded",
    },
    {
      name: "config",
      description: "Get and set configuration options",
      options: [
        {
          name: ["--edit", "-e"],
          description: "Edit the configuration file with an editor",
        },
      ],
      args: [
        {
          name: "SECTION.OPTION",
          suggestions: [
            {
              name: "backend.url",
              description:
                "This is the API root url of your repository, e.g. https://my.server.com/api/",
            },
            {
              name: "backend.token",
              description:
                "To authenticate watson as an API client, once generated, you will need to set up your API token in your configuration, e.g. 7e329263e329",
            },
            {
              name: "options.confirm_new_project",
              description:
                "If true, the user will be asked for confirmation before creating a new project. The option can be overriden in the command line with --confirm-new-project flag. Default: false",
            },
            {
              name: "options.confirm_new_tag",
              description:
                "If true, the user will be asked for confirmation before creating a new tag. The option can be overriden in the command line with --confirm-new-tag flag. Default: false",
            },
            {
              name: "options.date_format",
              description:
                "Globally configure how dates should be formatted. All python’s strftime directives are supported. Default: %Y.%m.%d",
            },
            {
              name: "options.log_current",
              description:
                "If true, the output of the log command will include the currently running frame (if any) by default. The option can be overridden on the command line with the -c/-C resp. --current/--no-current flags. Default: false",
            },
            {
              name: "options.pager",
              description:
                "If true, the output of the log and report command will be run through a pager by default. The option can be overridden on the command line with the -g/-G or --pager/--no-pager flags. If other commands output in colour, but log or report do not, try disabling the pager. Default: true",
            },
            {
              name: "options.report_current",
              description:
                "If true, the output of the report command will include the currently running frame (if any) by default. The option can be overridden on the command line with the -c/-C resp. --current/--no-current flags. Default: false",
            },
            {
              name: "options.reverse_log",
              description:
                "If true, the output of the log command will reverse the order of the days to display the latest day’s entries on top and the oldest day’s entries at the bottom. The option can be overridden on the command line with the -r/-R resp. --reverse/--no-reverse flags. Default: true",
            },
            {
              name: "options.stop_on_start",
              description:
                "If true, starting a new project will stop running projects. Default false",
            },
            {
              name: "options.stop_on_restart",
              description:
                "Similar to the options.stop_on_start option, but for the restart command. Default: false",
            },
            {
              name: "options.time_format",
              description:
                "Globally configure how time should be formatted. All python’s strftime directives are supported. Default: %H.%M:%S%z",
            },
            {
              name: "options.week_start",
              description:
                "Globally configure which day corresponds to the start of a week. Allowable values are monday, tuesday, wednesday, thursday, friday, saturday, and sunday",
            },
          ],
        },
        {
          name: "VALUE",
          isOptional: true,
        },
      ],
    },
    {
      name: "edit",
      description: "Edit a frame",
      args: {
        name: "FRAME ID",
        generators: listFrames,
      },
      options: [
        {
          name: ["--confirm-new-project", "-c"],
          description: "Confirm addition of new project",
        },
        {
          name: ["--confirm-new-tag", "-b"],
          description: "Confirm creation of new tag",
        },
      ],
    },
    {
      name: "frames",
      description: "Display the list of all frame IDs",
    },
    {
      name: "help",
      description: "Display help information",
      args: {
        name: "COMMAND",
      },
    },
    {
      name: "log",
      description: "Display each recorded session during the given timespan",
      options: [
        {
          name: ["--current", "-c"],
          description: "Include currently running frame in report",
          exclusiveOn: ["--no-current"],
        },
        {
          name: ["--no-current", "-C"],
          description: "Don't include currently running frame in report",
          exclusiveOn: ["--current"],
        },
        {
          name: ["--reverse", "-r"],
          description: "Reverse the order of the days in output",
          exclusiveOn: ["--no-reverse"],
        },
        {
          name: ["--no-reverse", "-R"],
          description: "Don't Reverse the order of the days in output",
          exclusiveOn: ["--reverse"],
        },
        {
          name: ["--from", "-f"],
          description:
            "The date from when the log should start. Defaults to seven days ago",
          args: {
            name: "DATETIME",
          },
        },
        {
          name: ["--to", "-t"],
          description:
            "The date at which the log should stop (inclusive). Defaults to tomorrow",
          args: {
            name: "DATETIME",
          },
        },
        {
          name: ["--year", "-y"],
          description: "Reports activity for the current year",
          exclusiveOn: ["--month", "--luna", "--week", "--day", "--all"],
        },
        {
          name: ["--month", "-m"],
          description: "Reports activity for the current month",
          exclusiveOn: ["--year", "--luna", "--week", "--day", "--all"],
        },
        {
          name: ["--luna", "-l"],
          description: "Reports activity for the current moon cycle",
          exclusiveOn: ["--year", "--month", "--week", "--day", "--all"],
        },
        {
          name: ["--week", "-w"],
          description: "Reports activity for the current week",
          exclusiveOn: ["--year", "--month", "--luna", "--day", "--all"],
        },
        {
          name: ["--day", "-d"],
          description: "Reports activity for the current day",
          exclusiveOn: ["--year", "--month", "--luna", "--week", "--all"],
        },
        {
          name: ["--all", "-a"],
          description: "Reports all activities",
          exclusiveOn: ["--year", "--month", "--luna", "--week", "--day"],
        },
        {
          name: ["--project", "-p"],
          description:
            "Logs activity only for the given project. You can add other projects by using this option several times",
          args: {
            name: "PROJECT",
            generators: listProjects,
            isVariadic: true,
          },
        },
        {
          name: ["--tag", "-T"],
          description:
            "Logs activity only for frames containing the given tag. You can add several tags by using this option multiple times",
          args: {
            name: "TAG",
            generators: listTags,
            isVariadic: true,
          },
        },
        {
          name: "--ignore-project",
          description:
            "Logs activity for all projects but the given ones. You can ignore several projects by using the option multiple times. Any given project will be ignored",
          args: {
            name: "PROJECT",
            generators: listProjects,
            isVariadic: true,
          },
        },
        {
          name: "--ignore-tag",
          description:
            "Logs activity for all tags but the given ones. You can ignore several tags by using the option multiple times. Any given tag will be ignored",
          args: {
            name: "TAG",
            generators: listTags,
            isVariadic: true,
          },
        },
        {
          name: ["--json", "-j"],
          description: "Format output in JSON instead of plain text",
          exclusiveOn: ["--csv"],
        },
        {
          name: ["--csv", "-s"],
          description: "Format output in CSV instead of plain text",
          exclusiveOn: ["--json"],
        },
        {
          name: ["--pager", "-g"],
          description: "View output through a pager",
          exclusiveOn: ["--no-pager"],
        },
        {
          name: ["--no-pager", "-G"],
          description: "Don't view output through a pager",
          exclusiveOn: ["--pager"],
        },
      ],
    },
    {
      name: "merge",
      description:
        "Perform a merge of the existing frames with a conflicting frames file.  When storing the frames on a file hosting service, there is the possibility that the frame file goes out-of-sync due to one or more of the connected clients going offline. This can cause the frames to diverge",
      args: {
        name: "FRAMES_WITH_CONFLICT",
      },
      options: [
        {
          name: ["-f", "--force"],
          description:
            "If specified, then the merge will automatically be performed",
        },
      ],
    },
    {
      name: "projects",
      description: "Display the list of all the existing projects",
    },
    {
      name: "remove",
      description:
        "Remove a frame. You can specify the frame either by id or by position (ex: -1 for the last frame)",
      args: {
        name: "ID",
        generators: listFrames,
      },
      options: [
        {
          name: ["-f", "--force"],
          description: "Don’t ask for confirmation",
        },
      ],
    },
    {
      name: "rename",
      description: "Rename a project or tag",
      args: [
        {
          name: "type",
          description: "Project or tag",
          suggestions: [
            {
              name: "project",
              icon: "🗂",
            },
            {
              name: "tag",
              icon: "🏷",
            },
          ],
        },
        {
          name: "OLD_NAME",
          generators: [listProjects, listTags],
        },
        {
          name: "NEW_NAME",
        },
      ],
    },
    {
      name: "report",
      description: "Display a report of the time spent on each project",
      options: [
        {
          name: ["--current", "-c"],
          description: "Include currently running frame in report",
          exclusiveOn: ["--no-current"],
        },
        {
          name: ["--no-current", "-C"],
          description: "Don't include currently running frame in report",
          exclusiveOn: ["--current"],
        },
        {
          name: ["--from", "-f"],
          description:
            "The date from when the report should start. Defaults to seven days ago",
          args: {
            name: "DATETIME",
          },
        },
        {
          name: ["--to", "-t"],
          description:
            "The date at which the report should stop (inclusive). Defaults to tomorrow",
          args: {
            name: "DATETIME",
          },
        },
        {
          name: ["--year", "-y"],
          description: "Reports activity for the current year",
          exclusiveOn: ["--month", "--luna", "--week", "--day", "--all"],
        },
        {
          name: ["--month", "-m"],
          description: "Reports activity for the current month",
          exclusiveOn: ["--year", "--luna", "--week", "--day", "--all"],
        },
        {
          name: ["--luna", "-l"],
          description: "Reports activity for the current moon cycle",
          exclusiveOn: ["--year", "--month", "--week", "--day", "--all"],
        },
        {
          name: ["--week", "-w"],
          description: "Reports activity for the current week",
          exclusiveOn: ["--year", "--month", "--luna", "--day", "--all"],
        },
        {
          name: ["--day", "-d"],
          description: "Reports activity for the current day",
          exclusiveOn: ["--year", "--month", "--luna", "--week", "--all"],
        },
        {
          name: ["--project", "-p"],
          description:
            "Reports activity only for the given project. You can add other projects by using this option several times",
          args: {
            name: "PROJECT",
            generators: listProjects,
          },
        },
        {
          name: ["--tag", "-T"],
          description:
            "Reports activity only for frames containing the given tag. You can add several tags by using this option multiple times",
          args: {
            name: "TAG",
            generators: listTags,
          },
        },
        {
          name: "--ignore-project",
          description:
            "Reports activity for all projects but the given ones. You can ignore several projects by using the option multiple times. Any given project will be ignored",
          args: {
            name: "PROJECT",
            generators: listProjects,
          },
        },
        {
          name: "--ignore-tag",
          description:
            "Reports activity for all tags but the given ones. You can ignore several tags by using the option multiple times. Any given tag will be ignored",
          args: {
            name: "TAG",
            generators: listTags,
          },
        },
        {
          name: ["--json", "-j"],
          description: "Format output in JSON instead of plain text",
          exclusiveOn: ["--csv"],
        },
        {
          name: ["--csv", "-s"],
          description: "Format output in CSV instead of plain text",
          exclusiveOn: ["--json"],
        },
        {
          name: ["--pager", "-g"],
          description: "View output through a pager",
          exclusiveOn: ["--no-pager"],
        },
        {
          name: ["--no-pager", "-G"],
          exclusiveOn: ["--pager"],
          description: "Don't view output through a pager",
        },
      ],
    },
    {
      name: "restart",
      description: "Restart monitoring time for a previously stopped project",
      args: {
        name: "FRAME",
        isOptional: true,
        generators: listFrames,
      },
      options: [
        {
          name: "--at",
          description:
            "Start frame at this time. Must be in (YYYY-MM-DDT)?HH:MM(:SS)? format",
          args: {
            name: "DATETIME",
          },
        },
        {
          name: ["--stop", "-s"],
          description: "Stop an already running project",
          exclusiveOn: ["--no-stop"],
        },
        {
          name: ["--no-stop", "-S"],
          exclusiveOn: ["--stop"],
          description: "Don't stop an already running project",
        },
      ],
    },
    {
      name: "start",
      description:
        "Start monitoring time for the given project. You can add tags indicating more specifically what you are working on with +tag",
      args: {
        name: "ARGS",
        isVariadic: true,
        generators: [listProjects, listTags],
      },
      options: [
        {
          name: "--at",
          description:
            "Start frame at this time. Must be in (YYYY-MM-DDT)?HH:MM(:SS)? format",
          args: {
            name: "DATETIME",
          },
        },
        {
          name: ["--gap", "-g"],
          exclusiveOn: ["--no-gap"],
          description:
            "Leave gap between end time of previous project and start time of the current",
        },
        {
          name: ["--no-gap", "-G"],
          exclusiveOn: ["--gap"],
          description:
            "Don't leave gap between end time of previous project and start time of the current",
        },
        {
          name: ["--confirm-new-project", "-c"],
          description: "Confirm addition of new project",
        },
        {
          name: ["--confirm-new-tag", "-b"],
          description: "Confirm creation of new tag",
        },
      ],
    },
    {
      name: "status",
      description:
        "Display when the current project was started and the time spent since",
      options: [
        {
          name: ["--project", "-p"],
          description: "Only output project",
          exclusiveOn: ["--tags", "--elapsed"],
        },
        {
          name: ["--tags", "-t"],
          description: "Only show tags",
          exclusiveOn: ["--project", "--elapsed"],
        },
        {
          name: ["--elapsed", "-e"],
          description: "Only show time elapsed",
          exclusiveOn: ["--project", "--tags"],
        },
      ],
    },
    {
      name: "stop",
      description: "Stop monitoring time for the current project",
      options: [
        {
          name: "--at",
          description:
            "Stop frame at this time. Must be in (YYYY-MM-DDT)?HH:MM(:SS)? format",
          args: {
            name: "DATETIME",
          },
        },
      ],
    },
    {
      name: "sync",
      description: "Get the frames from the server and push the new ones",
    },
    {
      name: "tags",
      description: "Display the list of all the tags",
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help for watson",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show the version for watson",
    },
    {
      name: "--color",
      description: "Color output",
      exclusiveOn: ["--no-color"],
    },
    {
      name: "--no-color",
      description: "No color output",
      exclusiveOn: ["--color"],
    },
  ],
};
export default completionSpec;
