const completionSpec: Fig.Spec = {
  name: "kdoctor",
  description:
    "Tool that helps to set up the environment for Kotlin Multiplatform Mobile app development",
  options: [
    {
      name: ["--help", "-h"],
      description: "Usage info",
    },
    {
      name: ["--version", "-v"],
      description: "KDoctor version",
    },
  ],
};
export default completionSpec;
