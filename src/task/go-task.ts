const TASKS_PRIORITY = 80;
const TASKFILE_FLAGS = ["-t", "--taskfile"];
const DIRECTORY_FLAGS = ["-d", "--dir"];

const tasksGenerator: Fig.Generator = {
  script: ["task", "-a"],
  postProcess: (output) => {
    if (output.includes("task: No Taskfile found")) {
      return [];
    }

    const result: Fig.Suggestion[] = output
      .split("\n")
      .filter((task) => task.startsWith("*"))
      .map((task) => {
        const taskInfo = task.slice(2).trim();
        const [name, description] = taskInfo.split(": ");

        return {
          name: name.replace(/:$/, ""),
          description: description?.trim(),
          icon: "fig://icon?type=command",
          priority: TASKS_PRIORITY,
        };
      });

    return result;
  },
};

const completionSpec: Fig.Spec = {
  name: "go-task",
  description: "A task runner / simpler Make alternative written in Go",
  icon: "https://taskfile.dev/favicon.ico",
  args: {
    generators: tasksGenerator,
    isVariadic: true,
    isOptional: true,
  },
  options: [
    {
      name: ["-a", "--list-all"],
      description: "Lists tasks with or without a description",
    },
    {
      name: ["-c", "--color"],
      description:
        "Colored output. Enabled by default. Set flag to false or use NO_COLOR=1 to disable (default true)",
      requiresEquals: true,
      args: {
        name: "color",
        suggestions: ["true", "false"],
      },
    },
    {
      name: ["-C", "--concurrency"],
      description: "Limit number tasks to run concurrently",
      args: {
        name: "number",
      },
    },
    {
      name: DIRECTORY_FLAGS,
      description: "Sets directory of execution",
      exclusiveOn: TASKFILE_FLAGS,
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
      exclusiveOn: DIRECTORY_FLAGS,
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
        isVariadic: true,
        optionsCanBreakVariadicArg: false,
      },
    },
  ],
};

export default completionSpec;
