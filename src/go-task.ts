const TASKS_PRIORITY = 80;
const TASKFILE_FLAGS = ["-t", "--taskfile"];

const tasksGenerator: Fig.Generator = {
  custom: async (tokens, exec) => {
    // No additional tasks after "-- "
    if (tokens.join(" ").includes("-- ")) {
      return [];
    }

    // Get the last taskfile path if mentioned in tokens
    const taskfilePath =
      tokens[
        tokens.length -
          tokens
            .slice()
            .reverse()
            .findIndex((token) => TASKFILE_FLAGS.includes(token))
      ];

    const tasksListText = await exec(
      `task ${taskfilePath ? `${TASKFILE_FLAGS[0]} ${taskfilePath}` : ""} -l`
    );

    return tasksListText
      .split("\n* ")
      .filter((_, i) => i > 0) // The first line is not a task
      .map((taskText) => {
        const [name, description] = taskText.split(": ");
        return {
          name,
          description,
          type: "subcommand",
          priority: TASKS_PRIORITY,
        };
      });
  },
};

const completionSpec: Fig.Spec = {
  name: "go-task",
  args: {
    generators: tasksGenerator,
    isVariadic: true,
    isOptional: true,
  },
  options: [
    {
      name: ["-c", "--color"],
      description:
        "Colored output. Enabled by default. Set flag to false or use NO_COLOR=1 to disable (default true)",
    },
    {
      name: ["-C", "--concurrency"],
      description: "Limit number tasks to run concurrently",
      args: {
        name: "number",
      },
    },
    {
      name: ["-d", "--dir"],
      description: "Sets directory of execution",
      args: {
        name: "path",
        template: ["folders"],
      },
    },
    {
      name: "--dry",
      description:
        "Compiles and prints tasks in the order that they would be run, without executing them",
    },
    {
      name: ["-f", "--force"],
      description: "Forces execution even when the task is up-to-date",
    },
    {
      name: ["-h", "--help"],
      description: "Shows Task usage",
    },
    {
      name: ["-i", "--init"],
      description: "Creates a new Taskfile.yml in the current folder",
    },
    {
      name: ["-l", "--list"],
      description: "Lists tasks with description of current Taskfile",
    },
    {
      name: ["-o", "--output"],
      description: "Sets output style",
      args: {
        name: "output",
        suggestions: ["interleaved", "group", "prefixed"],
      },
    },
    {
      name: ["-p", "--parallel"],
      description: "Executes tasks provided on command line in parallel",
    },
    {
      name: ["-s", "--silent"],
      description: "Disables echoing",
    },
    {
      name: "--status",
      description:
        "Exits with non-zero exit code if any of the given tasks is not up-to-date",
    },
    {
      name: "--summary",
      description: "Show summary about a task",
    },
    {
      name: TASKFILE_FLAGS,
      description: "Choose which Taskfile to run",
      args: {
        name: "taskfile",
        default: "Taskfile.yml",
        template: ["filepaths"],
      },
    },
    {
      name: ["-v", "--verbose"],
      description: "Enables verbose mode",
    },
    {
      name: "--version",
      description: "Show Task version",
    },
    {
      name: ["-w", "--watch"],
      description: "Enables watch of the given task",
    },
    {
      name: "--",
      description: "Pass variables to the task",
      args: {
        name: "variables",
        isOptional: false,
        isVariadic: true,
        optionsCanBreakVariadicArg: false,
      },
    },
  ],
};

export default completionSpec;
