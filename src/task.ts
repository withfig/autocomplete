import goTask from "./task/go-task";
import taskWarrior from "./task/taskwarrior";

const completionSpec: Fig.Spec = {
  name: "task",
  // loadSpec doesn't work for root commands (https://github.com/withfig/autocomplete/issues/223)
  generateSpec: async (_tokens, executeShellCommand) => {
    const { stdout } = await executeShellCommand({
      command: "task",
      // eslint-disable-next-line @withfig/fig-linter/no-useless-arrays
      args: ["--version"],
    });
    return stdout.includes("Task") ? goTask : taskWarrior;
  },
};

export default completionSpec;
