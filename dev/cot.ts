/* 
Made by Yavko 🥺
CotEditor is great I hope you use this!
*/
const completionSpec: Fig.Spec = {
  name: "cot",
  icon: "https://coteditor.com/img/appicon/512@2x.png",
  description: "Command-line utility for CotEditor.",
  args: {
    template: "filepaths",
  },
  options: [
    {
      description: "Show this help message and exit.",
      name: ["-h", "--help"],
    },
    {
      description: "Show program's version number and exit.",
      name: ["-v", "--version"],
    },
    {
      description: "Wait for opened file to be closed.",
      name: ["-w", "--wait"],
    },
    {
      description: "Do not bring the application to the foreground.",
      name: ["-g", "--background"],
    },
    {
      description: "Create a new blank document.",
      name: ["-n", "--new"],
    },
    {
      description: "Jump to specific line in opened document.",
      name: ["-l", "--line"],
      insertValue: "--line '{cursor}'",
    },
    {
      description: "Jump to specific column in opened document.",
      name: ["-c", "--column"],
      args: {
        name: "column",
      },
    },
  ],
};
export default completionSpec;
