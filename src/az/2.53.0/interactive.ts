const completion: Fig.Spec = {
  name: "interactive",
  description:
    "Start interactive mode. Installs the Interactive extension if not installed already",
  options: [
    {
      name: ["--style", "-s"],
      description: "The colors of the shell",
      args: {
        name: "style",
        suggestions: [
          "bg",
          "br",
          "contrast",
          "default",
          "grey",
          "halloween",
          "neon",
          "none",
          "pastel",
          "primary",
          "purple",
          "quiet",
        ],
      },
    },
    {
      name: "--update",
      description: "Update the Interactive extension to the latest available",
      args: { name: "update" },
    },
  ],
};

export default completion;
