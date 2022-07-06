const completionSpec: Fig.Spec = {
  name: "appwrite",
  description: "Appwrite - Open-Source End-to-End Backend Server",
  subcommands: [
    {
      name: "login",
      description: "Login to Appwrite",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show help for this login command",
        },
      ],
    },
    {
      name: "init",
      description: "Initialize a new project",
      subcommands: [
        {
          name: "project",
          description: "Initialize a new project",
        },
        {
          name: "function",
          description: "Initialize a new cloud function",
        },
        {
          name: "collection",
          description: "Initialize a new collection",
        },
      ],
      options: [
        {
          name: "--all",
          description: "Initialize projects and collection",
        },
        {
          name: ["-h", "--help"],
          description: "Display help for init command",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy a functions or collections",
      subcommands: [
        {
          name: "function",
          description: "Deploy functions in current directory",
        },
        {
          name: "collection",
          description: "Deploy collections in current project",
        },
      ],
      options: [
        {
          name: "--all",
          description: "Deploy all functions and collections",
        },
        {
          name: ["-h", "--help"],
          description: "Display help for deploy command",
        },
      ],
    },
    {
      name: "logout",
      description: "Logout from Appwrite account",
      options: [
        {
          name: ["-h", "--help"],
          description: "Display help for logout command",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for appwrite",
    },
  ],
  // Only uncomment if appwrite takes an argument
  // args: {}
};
export default completionSpec;
