const completionSpec: Fig.Spec = {
  name: "git-quick-stats",
  description:
    "Git quick statistics is a simple and efficient way to access various statistics in git repository",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for git-quick-stats",
    },
    {
      name: ["--suggest-reviewers", "-r"],
      description: "Show the best people to contact to review code",
    },
    {
      name: ["--detailed-git-stats", "-T"],
      description: "Give a detailed list of git stats",
    },
    {
      name: ["---git-stats-by-branch", "-R"],
      description: "Show detailed list of git stats by branch",
    },
    {
      name: ["--changelogs", "-c"],
      description: "Show changelogs",
    },
    {
      name: ["--changelogs-by-author", "-L"],
      description: "Show changelogs by author",
    },
    {
      name: ["--my-daily-stats", "-S"],
      description: "Show your current daily stats",
    },
    {
      name: ["--my-csv-output-by-branch-stats", "-V"],
      description: "Output daily stats by branch in CSV format",
    },
    {
      name: ["--json-output", "-j"],
      description: "Save git log as a JSON formatted file to a specified area",
    },
    {
      name: ["--branch-tree", "-b"],
      description: "Show an ASCII graph of the git repo branch history",
    },
    {
      name: ["--branches-by-date", "-D"],
      description: "Show branches by date",
    },
    {
      name: ["--contributors", "-C"],
      description: "See a list of everyone who contributed to the repo",
    },
    {
      name: ["--commits-per-author", "-a"],
      description: "Displays a list of commits per author",
    },
    {
      name: ["--commits-per-day", "-d"],
      description: "Displays a list of commits per day",
    },
    {
      name: ["--commits-by-month", "-m"],
      description: "Displays a list of commits per month",
    },
    {
      name: ["--commits-by-year", "-Y"],
      description: "Displays a list of commits per year",
    },
    {
      name: ["--commits-by-weekday", "-w"],
      description: "Displays a list of commits per weekday",
    },
    {
      name: ["--commits-by-hour", "-o"],
      description: "Displays a list of commits per hour",
    },
    {
      name: ["--commits-by-author-by-hour", "-A"],
      description: "Displays a list of commits per hour by author",
    },
    {
      name: ["--commits-by-timezone", "-z"],
      description: "Displays a list of commits per timezone",
    },
    {
      name: ["--commits-by-author-by-timezone", "-Z"],
      description: "Displays a list of commits per timezone by author",
    },
  ],
  // Only uncomment if git-quick-stats takes an argument
  // args: {}
};
export default completionSpec;
