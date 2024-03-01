const RECURRING_STRINGS = [
  "daily",
  "day",
  "1da",
  "2da",
  "weekdays",
  "weekly",
  "1wk",
  "2wk",
  "biweekly",
  "fortnight",
  "monthly",
  "month",
  "1mo",
  "2mo",
  "quarterly",
  "1qtr",
  "3qtr",
  "semiannual",
  "annual",
  "yearly",
  "1yr",
  "2yrs",
];

const icon = "https://f-droid.org/repo/icons-640/kvj.taskw.3.png";

// build out the available recurring strings
const buildRecurringSuggestions = () => {
  return RECURRING_STRINGS.map((recur) => `recur:${recur}`);
};

// build out the available project suggestions
const buildProjectSuggestions = (tasks) => {
  const projects = tasks
    .filter((task) => task.status !== "completed")
    .reduce((acc, task) => {
      return (
        acc[task.project] ? ++acc[task.project] : (acc[task.project] = 1), acc
      );
    }, {});

  const projectFilters = [];
  for (var project in projects) {
    projectFilters.push({
      name: `project:${project}`,
      displayName: `Project: ${project}`,
      description: `${projects[project]} tasks`,
      icon: "🗂",
    });
  }
  return projectFilters;
};

const DEFAULT_TAGS = [
  "ACTIVE",
  "COMPLETED",
  "LATEST",
  "PENDING",
  "SCHEDULED",
  "UDA",
  "YEAR",
  "ANNOTATED",
  "DELETED",
  "MONTH",
  "PRIORITY",
  "TAGGED",
  "UNBLOCKED",
  "YESTERDAY",
  "BLOCKED",
  "DUE",
  "ORPHAN",
  "PROJECT",
  "TEMPLATE",
  "UNTIL",
  "BLOCKING",
  "DUETODAY",
  "OVERDUE",
  "QUARTER",
  "TODAY",
  "WAITING",
  "CHILD",
  "INSTANCE",
  "PARENT",
  "READY",
  "TOMORROW",
  "WEEK",
];

// build out list of the default tags for the filters
const buildDefaultTagSuggestions = () => {
  return DEFAULT_TAGS.map((tag) => {
    return {
      name: `+${tag}`,
      displayName: `Tag: ${tag}`,
      icon: "🏷",
    };
  });
};

// build the available tag suggestions
const buildTagSuggestions = (tasks) => {
  const tags = [
    ...new Set(
      tasks
        .filter((task) => task.hasOwnProperty("tags"))
        .map((task) => task.tags)
        .flat()
    ),
  ];

  return tags.map((tag) => {
    return {
      name: `+${tag}`,
      displayName: `Tag: ${tag}`,
      icon: "🏷",
    };
  });
};

// build the available untag suggestions
const buildUnTagSuggestions = (tasks) => {
  const tags = [
    ...new Set(
      tasks
        .filter((task) => task.hasOwnProperty("tags"))
        .map((task) => task.tags)
        .flat()
    ),
  ];

  return tags.map((tag) => {
    return {
      name: `-${tag}`,
      displayName: `Untag: ${tag}`,
      icon: "❌",
    };
  });
};

// build out the task suggestions
const buildTaskSuggestions = (tasks) => {
  return tasks
    .filter((task) => task.status !== "completed")
    .map((task) => {
      return {
        name: `${task.id}`,
        displayName: `${task.id} - ${task.description}`,
        description: `${task.description}`,
        icon: "☑️",
      };
    });
};

// taskwarrior default date strings
const DATE_STRINGS = [
  "now",
  "today",
  "sod",
  "eod",
  "yesterday",
  "tomorrow",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
  "soy",
  "eoy",
  "eoq",
  "som",
  "socm",
  "eom",
  "ecom",
  "sow",
  "socw",
  "eow",
  "eocw",
  "soww",
  "eoww",
];

// build the date suggestion attributes
const buildDateSuggestions = () => {
  return [
    ...DATE_STRINGS.map((date) => `due:${date}`),
    ...DATE_STRINGS.map((date) => `due.by:${date}`),
    ...DATE_STRINGS.map((date) => `due.before:${date}`),
    ...DATE_STRINGS.map((date) => `due.after:${date}`),
    ...DATE_STRINGS.map((date) => `scheduled:${date}`),
    ...DATE_STRINGS.map((date) => `scheduled.by:${date}`),
    ...DATE_STRINGS.map((date) => `scheduled.before:${date}`),
    ...DATE_STRINGS.map((date) => `scheduled.after:${date}`),
    ...DATE_STRINGS.map((date) => `until:${date}`),
    ...DATE_STRINGS.map((date) => `until.by:${date}`),
    ...DATE_STRINGS.map((date) => `until.before:${date}`),
    ...DATE_STRINGS.map((date) => `until.after:${date}`),
    ...DATE_STRINGS.map((date) => `wait:${date}`),
    ...DATE_STRINGS.map((date) => `wait.by:${date}`),
    ...DATE_STRINGS.map((date) => `wait.before:${date}`),
    ...DATE_STRINGS.map((date) => `wait.after:${date}`),
    ...DATE_STRINGS.map((date) => `entry:${date}`),
    ...DATE_STRINGS.map((date) => `entry.by:${date}`),
    ...DATE_STRINGS.map((date) => `entry.before:${date}`),
    ...DATE_STRINGS.map((date) => `entry.after:${date}`),
  ];
};

const PRIORITIES = ["H", "M", "L"];

// build the available priorites
const buildPrioritiesSuggestions = () => {
  return [
    ...PRIORITIES.map((pr) => `priority:${pr}`),
    ...PRIORITIES.map((pr) => `priority.is:${pr}`),
    ...PRIORITIES.map((pr) => `priority.not:${pr}`),
    "priority.none:",
  ];
};

// build the filter list with tasks
const filtersWithTasks: Fig.Generator = {
  script: ["task", "export"],
  postProcess: (output) => {
    const tasks = JSON.parse(output);
    const filters = [
      ...buildTaskSuggestions(tasks),
      ...buildProjectSuggestions(tasks),
      ...buildTagSuggestions(tasks),
      ...buildDefaultTagSuggestions(),
      ...buildPrioritiesSuggestions(),
      ...buildDateSuggestions(),
    ];
    return filters;
  },
};

// build tasks list
const listTasks: Fig.Generator = {
  script: ["task", "export"],
  postProcess: (output) => {
    const tasks = JSON.parse(output);
    return buildTaskSuggestions(tasks);
  },
};

// build filter suggestions
const filters: Fig.Generator = {
  script: ["task", "export"],
  postProcess: (output) => {
    const tasks = JSON.parse(output);
    const filters = [
      ...buildProjectSuggestions(tasks),
      ...buildTagSuggestions(tasks),
      ...buildDefaultTagSuggestions(),
      ...buildPrioritiesSuggestions(),
      ...buildDateSuggestions(),
    ];
    return filters;
  },
};

// build modifications suggestions
const modifications: Fig.Generator = {
  script: ["task", "export"],
  postProcess: (output) => {
    const tasks = JSON.parse(output);
    const filters = [
      ...buildProjectSuggestions(tasks),
      ...buildTagSuggestions(tasks),
      ...buildUnTagSuggestions(tasks),
      ...buildDefaultTagSuggestions(),
      ...buildPrioritiesSuggestions(),
      ...buildDateSuggestions(),
      ...buildRecurringSuggestions(),
    ];
    return filters;
  },
};

const completionSpec: Fig.Spec = {
  name: "taskwarrior",
  description: "A command line todo manager",
  args: {
    name: "filters",
    description: "Search criteria that select tasks",
    isOptional: true,
    isVariadic: true,
    generators: filtersWithTasks,
  },
  subcommands: [
    {
      name: "active",
      description:
        "Shows all tasks matching the filter, that are started but not completed",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "all",
      description:
        "Shows all tasks matching the filter, including parents of recurring tasks",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "blocked",
      description:
        "Shows all tasks matching the filter, that are currently blocked by other tasks",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "blocking",
      description:
        "Shows all tasks matching the filter, that block other tasks",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "burndown.daily",
      description:
        "Shows a graphical burndown chart, by day. Is affected by the context",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "burndown.weekly",
      description:
        "Shows a graphical burndown chart, by week.  Note that 'burndown' is an alias to the 'burndown.weekly' report. Is affected by the context",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "burndown.monthly",
      description:
        "Shows a graphical burndown chart, by month. Is affected by the context",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "calendar",
      description: "Shows a monthly calendar with due tasks marked",
      args: [
        {
          name: "year",
          description: "The year number",
          isOptional: true,
          isVariadic: true,
        },
        {
          name: "month",
          description: "The year number",
          isOptional: true,
          isVariadic: true,
        },
        {
          name: "due",
          description: "Show tasks that are due",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "commands",
      description:
        "Shows all the supported commands, with some details of each",
    },
    {
      name: "diagnostics",
      description:
        "Shows diagnostic information, of the kind needed when reporting a problem",
    },
    {
      name: "logo",
      description: "Displays the Taskwarrior logo",
    },
    {
      name: "news",
      description:
        "Guides the user through important release notes anytime a new version of Taskwarrior is installed",
    },
    {
      name: "reports",
      description: "Lists all supported reports",
    },
    {
      name: "completed",
      description: "Shows all tasks matching the filter that are completed",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "count",
      description:
        "Display only a count of tasks matching the filter. Is affected by the context",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "export",
      description: "Exports all tasks in the JSON format matching the filter",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "ghistory.annual",
      description: "Shows a graphical report of task status by year",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "ghistory.monthly",
      description: "Shows a graphical report of task status by month",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "ghistory.weekly",
      description: "Shows a graphical report of task status by week",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "ghistory.daily",
      description: "Shows a graphical report of task status by day",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "help",
      description: "Shows the long usage text",
    },
    {
      name: "history.annual",
      description: "Shows a report of task history by year",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "history.monthly",
      description: "Shows a report of task history by month",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "history.weekly",
      description: "Shows a report of task history by week",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "history.daily",
      description: "Shows a report of task history by day",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "ids",
      description:
        "Applies the filter then extracts only the task IDs and presents them as a space-separated list",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "uuids",
      description:
        "Applies the filter on all tasks (even deleted and completed tasks) then extracts only the task UUIDs and presents them as a space-separated list",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "udas",
      description:
        "Shows a list of UDAs that are defined, including their name, type, label, and allowed values",
    },
    {
      name: "information",
      description: "Shows all data and metadata for the specified tasks",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "long",
      description:
        "Provides the most detailed listing of tasks matching the filter",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "ls",
      description: "Provides a short listing of tasks matching the filter",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "minimal",
      description: "Provides a minimal listing of tasks matching the filter",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "newest",
      description: "Shows the newest tasks matching the filter",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "next",
      description:
        "Shows a page of the most urgent tasks, sorted by urgency, which is a calculated value",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "ready",
      description:
        "Shows a page of the most urgent ready tasks, sorted by urgency with started tasks first",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "oldest",
      description: "Shows the oldest tasks matching the filter",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "overdue",
      description:
        "Shows all incomplete tasks matching the filter that are beyond their due date",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "projects",
      description:
        "Lists all project names that are current used by pending tasks, and the number of tasks for each",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "recurring",
      description: "Shows all recurring tasks matching the filter",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "unblocked",
      description:
        "Shows all tasks that are not currently blocked by other tasks, matching the filter",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "waiting",
      description: "Shows all waiting tasks matching the filter",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "add",
      icon,
      description: "Adds a new pending task to the task list",
      args: {
        name: "mods",
        description: "Changes to apply to the selected tasks",
        isOptional: true,
        isVariadic: true,
        generators: modifications,
      },
    },
    {
      name: "annotate",
      description: "Adds an annotation to an existing task",
      args: {
        name: "mods",
        description: "Changes to apply to the selected tasks",
        isOptional: true,
        isVariadic: true,
        generators: modifications,
      },
    },
    {
      name: "append",
      description: "Appends description text to an existing task",
      args: {
        name: "mods",
        description: "Changes to apply to the selected tasks",
        isOptional: true,
        isVariadic: true,
        generators: modifications,
      },
    },
    {
      name: ["delete", "rm"],
      description: "Deletes the specified task from the task list",
      args: {
        name: "Task",
        description: "The task to delete",
        isVariadic: true,
        generators: modifications,
      },
    },
    {
      name: "denotate",
      description: "Deletes an annotation for the specified task",
      args: {
        name: "mods",
        description: "Changes to apply to the selected tasks",
        isOptional: true,
        generators: modifications,
      },
    },
    {
      name: "done",
      description: "Marks the specified task as done",
      args: {
        name: "mods",
        description: "Changes to apply to the selected tasks",
        isOptional: true,
        isVariadic: true,
        generators: modifications,
      },
    },
    {
      name: "duplicate",
      description: "Duplicates the specified task and allows modifications",
      args: {
        name: "mods",
        description: "Changes to apply to the selected tasks",
        isOptional: true,
        isVariadic: true,
        generators: modifications,
      },
    },
    {
      name: "edit",
      description:
        "Launches a text editor to let you modify all aspects of a task directly",
      args: {
        name: "Task",
        description: "The task to edit",
        generators: listTasks,
      },
    },
    {
      name: "log",
      description:
        "Adds a new task that is already completed, to the task list",
      args: {
        name: "mods",
        description: "Changes to apply to the selected tasks",
        isOptional: true,
        isVariadic: true,
        generators: modifications,
      },
    },
    {
      name: "modify",
      description: "Modifies the existing task with provided information",
      args: {
        name: "mods",
        description: "Changes to apply to the selected tasks",
        isOptional: true,
        isVariadic: true,
        generators: modifications,
      },
    },
    {
      name: "prepend",
      description: "Prepends description text to and existing task",
      args: {
        name: "mods",
        description: "Changes to apply to the selected tasks",
        isOptional: true,
        isVariadic: true,
        generators: modifications,
      },
    },
    {
      name: "purge",
      description:
        "Permanently removes the specified tasks from the data files",
      args: {
        name: "mods",
        description: "Changes to apply to the selected tasks",
        isOptional: true,
        isVariadic: true,
        generators: modifications,
      },
    },
    {
      name: "start",
      icon,
      description: "Marks the specified tasks as started",
      args: {
        name: "mods",
        description: "Changes to apply to the selected tasks",
        isOptional: true,
        isVariadic: true,
        generators: modifications,
      },
    },
    {
      name: "stop",
      icon,
      description: "Removes the start time from the specified task",
      args: {
        name: "mods",
        description: "Changes to apply to the selected tasks",
        isOptional: true,
        isVariadic: true,
        generators: modifications,
      },
    },
    {
      name: "context",
      description: "Sets the currently active context",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the context with the name",
          args: {
            name: "name",
            isVariadic: true,
          },
        },
        {
          name: "define",
          description:
            "Defines a new context with the name and definition filter",
          args: [
            {
              name: "name",
              isVariadic: true,
            },
            {
              name: "mods",
              description: "Changes to apply to the selected tasks",
              isOptional: true,
              isVariadic: true,
              generators: filters,
            },
          ],
        },
        {
          name: "list",
          description:
            "Outputs a list of available contexts along with their definitions",
        },
        {
          name: "none",
          description: "Clears the currently active context, if any was set",
        },
        {
          name: "show",
          description:
            "Shows the currently active context, along with its definition",
        },
      ],
      args: {
        name: "name",
        isVariadic: true,
      },
    },
    {
      name: "stats",
      description: "Shows statistics of the tasks defined by the filter",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "summary",
      description: "Shows a report of aggregated task status by project",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "tags",
      description: "Show a list of all tags used",
      args: {
        name: "filters",
        description: "Task search criteria",
        isOptional: true,
        isVariadic: true,
        generators: filters,
      },
    },
    {
      name: "timesheet",
      description: "Shows a weekly report of tasks completed and started",
      args: {
        name: "weeks",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "undo",
      description: "Reverts the most recent action",
    },
    {
      name: "version",
      description: "Shows the Taskwarrior version number",
    },
  ],
  options: [
    {
      name: "--version",
      description:
        "This is the only conventional command line argument that Taskwarrior supports, and is intended for add-on scripts to verify the version number of an installed Taskwarrior without invoking the mechanisms that create default files",
    },
  ],
};
export default completionSpec;
