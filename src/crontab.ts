const completionSpec: Fig.Spec = {
  name: "crontab",
  description: "Maintain crontab file for individual users",
  options: [
    {
      name: "-e",
      description: "Edit the current crontab",
    },
    {
      name: "-l",
      description: "Display the current crontab",
    },
    {
      name: "-r",
      description: "Remove the current crontab",
      isDangerous: true,
    },
    {
      name: "-u",
      description:
        "Specify the name of the user whose crontab is to be tweaked",
    },
  ],
};

export default completionSpec;
