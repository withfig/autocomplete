// https://tailordev.github.io/Watson/
const listProjects: Fig.Generator = {
  script: function () {
    return `watson projects`;
  },
  postProcess: (output) => {
    return output.split("\n").map((project) => ({
      name: project,
      icon: "🗂",
    }));
  },
};

const listTags: Fig.Generator = {
  script: function () {
    return `watson tags`;
  },
  postProcess: (output) => {
    return output.split("\n").map((tag) => ({
      name: tag,
      icon: "🏷",
    }));
  },
};

const listFrames: Fig.Generator = {
  script: function () {
    return `watson log --json`;
  },
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
          name: "--help",
          description: "Show help for add command",
        },
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
        },
        {
          name: ["--no-current", "-C"],
          description: "Don't include currently running frame in report",
        },
        {
          name: "--help",
          description: "Show help for aggregate command",
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
        },
        {
          name: ["--csv", "-s"],
          description: "Format output in CSV instead of plain text",
        },
        {
          name: ["--pager", "-g"],
          description: "View output through a pager",
        },
        {
          name: ["---no-pager", "-G"],
          description: "Don't view output through a pager",
        },
      ],
    },
    {
      name: "cancel",
      description:
        "Cancel the last call to the start command. The time will not be recorded",
      options: [
        {
          name: "--help",
          description: "Show help for cancel command",
        },
      ],
    },
    {
      name: "config",
      description: "Get and set configuration options",
      options: [
        {
          name: "--help",
          description: "Show help for config command",
        },
        {
          name: ["--edit", "-e"],
          description: "Edit the configuration file with an editor",
        },
      ],
      args: [
        {
          name: "SECTION.OPTION",
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
          name: "--help",
          description: "Show help for edit command",
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
      name: "frames",
      description: "Display the list of all frame IDs",
      options: [
        {
          name: "--help",
          description: "Show help for frames command",
        },
      ],
    },
    {
      name: "help",
      description: "Display help information",
      args: {
        name: "COMMAND",
      },
      options: [
        {
          name: "--help",
          description: "Show help for help command",
        },
      ],
    },
    {
      name: "log",
      description: "Display each recorded session during the given timespan",
      options: [
        {
          name: "--help",
          description: "Show help for log command",
        },
        {
          name: ["--current", "-c"],
          description: "Include currently running frame in report",
        },
        {
          name: ["--no-current", "-C"],
          description: "Don't include currently running frame in report",
        },
        {
          name: ["--reverse", "-r"],
          description: "Reverse the order of the days in output",
        },
        {
          name: ["--no-reverse", "-R"],
          description: "Don't Reverse the order of the days in output",
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
        },
        {
          name: ["--month", "-m"],
          description: "Reports activity for the current month",
        },
        {
          name: ["--luna", "-l"],
          description: "Reports activity for the current moon cycle",
        },
        {
          name: ["--week", "-w"],
          description: "Reports activity for the current week",
        },
        {
          name: ["--day", "-d"],
          description: "Reports activity for the current day",
        },
        {
          name: ["--all", "-a"],
          description: "Reports all activities",
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
        },
        {
          name: ["--csv", "-s"],
          description: "Format output in CSV instead of plain text",
        },
        {
          name: ["--pager", "-g"],
          description: "View output through a pager",
        },
        {
          name: ["---no-pager", "-G"],
          description: "Don't view output through a pager",
        },
      ],
      // STOPPED AT MERGE - https://tailordev.github.io/Watson/user-guide/commands/
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
        {
          name: "--help",
          description: "Show help for merge command",
        },
      ],
    },
    {
      name: "projects",
      description: "Display the list of all the existing projects",
      options: [
        {
          name: "--help",
          description: "Show help for projects command",
        },
      ],
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
          name: "--help",
          description: "Show help for remove command",
        },
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
      options: [
        {
          name: "--help",
          description: "Show help for rename command",
        },
      ],
    },
    {
      name: "report",
      description: "Display a report of the time spent on each project",
      options: [
        {
          name: "--help",
          description: "Show help for rename command",
        },
        {
          name: ["--current", "-c"],
          description: "Include currently running frame in report",
        },
        {
          name: ["--no-current", "-C"],
          description: "Don't include currently running frame in report",
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
        },
        {
          name: ["--month", "-m"],
          description: "Reports activity for the current month",
        },
        {
          name: ["--luna", "-l"],
          description: "Reports activity for the current moon cycle",
        },
        {
          name: ["--week", "-w"],
          description: "Reports activity for the current week",
        },
        {
          name: ["--day", "-d"],
          description: "Reports activity for the current day",
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
        },
        {
          name: ["--csv", "-s"],
          description: "Format output in CSV instead of plain text",
        },
        {
          name: ["--pager", "-g"],
          description: "View output through a pager",
        },
        {
          name: ["---no-pager", "-G"],
          description: "Don't view output through a pager",
        },
      ],
    },
    {
      name: "restart",
      description: "Restart monitoring time for a previously stopped project",
      args: {
        name: "FRAME",
        generators: listFrames,
      },
      options: [
        {
          name: "--help",
          description: "Show help for restart",
        },
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
        },
        {
          name: ["--no-stop", "-S"],
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
          name: "--help",
          description: "Show help for start",
        },
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
          description:
            "Leave gap between end time of previous project and start time of the current",
        },
        {
          name: ["--no-gap", "-G"],
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
          name: "--help",
          description: "Show help for status",
        },
        {
          name: ["--project", "-p"],
          description: "Only output project",
        },
        {
          name: ["--tags", "-t"],
          description: "Only show tags",
        },
        {
          name: ["--elapsed", "-e"],
          description: "ONly show time elapsed",
        },
      ],
    },
    {
      name: "stop",
      description: "Stop monitoring time for the current project",
      options: [
        {
          name: "--help",
          description: "Show help for status",
        },
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
      options: [
        {
          name: "--help",
          description: "Show help for sync",
        },
      ],
    },
    {
      name: "tags",
      description: "Display the list of all the tags",
      options: [
        {
          name: "--help",
          description: "Show help for tags",
        },
      ],
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help for watson",
    },
    {
      name: "--version",
      description: "Show the version for watson",
    },
    {
      name: "--color",
      description: "Color output",
    },
    {
      name: "--no-color",
      description: "No color output",
    },
  ],
  // Only uncomment if watson takes an argument
  // args: {}
};
export default completionSpec;
