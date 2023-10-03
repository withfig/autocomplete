const completionSpec: Fig.Spec = {
  name: "kdoctor",
  description:
    "Tool that helps to set up the environment for Kotlin Multiplatform Mobile app development",
  options: [
    {
      name: "--version",
      description: "Report a version of KDoctor",
    },
    {
      name: ["--verbose", "-v"],
      description: "Report an extended information",
    },
    {
      name: ["--all", "-a"],
      description: "Run extra diagnostics",
    },
    {
      name: "--team-ids",
      description: "Report all available Apple dev team ids",
    },
    {
      name: ["--help", "-h"],
      description: "Usage info",
    },
  ],
};
export default completionSpec;
