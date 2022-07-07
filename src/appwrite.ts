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
    {
      name: "account",
      description: "Authenticate and manage user account",
      subcommands: [
        {
          name: "get",
          description: "Get currently logged in user data as JSON",
        },
        {
          name: "create",
          description: "Create a new user in your project",
          options: [
            {
              name: "--userId",
              description:
                'Choose ID, or pass the string "unique()" to generate a random ID',
              args: {
                name: "ID",
                description: "User ID",
              },
            },
            {
              name: "--email",
              description: "User Email",
              args: {
                name: "email",
                description: "User Email",
              },
            },
            {
              name: "--password",
              description: "User Password",
              args: {
                name: "password",
                description: "User Password",
              },
            },
            {
              name: "--name",
              description: "User Name",
              args: {
                name: "name",
                description: "User Name",
              },
            },
            {
              name: "--help",
              description: "Display help for create command",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete currently logged in user",
        },
        {
          name: "updateEmail",
          description: "Update currently logged in user email",
          options: [
            {
              name: "--email",
              description: "User Email",
              isRequired: true,
              args: {
                name: "email",
                description: "User Email",
              },
            },
            {
              name: "--password",
              description: "User Password",
              isRequired: true,
              args: {
                name: "password",
                description: "User Password",
              },
            },
            {
              name: "--help",
              description: "Display help for updateEmail command",
            },
          ],
        },
        {
          name: "createJWT",
          description: "Create a JWT token for currently logged in user",
          options: [
            {
              name: "--help",
              description: "Display help for createJWT command",
            },
          ],
        },
        {
          name: "getLogs",
          description:
            "Currently logged in user list of latest security activity logs",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for getLogs command",
            },
            {
              name: "--limit",
              description:
                "Limit number of logs to return, default is 10, Max is 100",
              args: {
                name: "limit",
                description: "Limit number of logs to return",
              },
            },
            {
              name: "--offset",
              description: "Offset logs to return, default is 0",
              args: {
                name: "offset",
                description: "Offset logs to return",
              },
            },
          ],
        },
        {
          name: "updateName",
          description: "Update currently logged in user name",
          options: [
            {
              name: "--name",
              description: "User Name",
              args: {
                name: "name",
                description: "User Name, Max length: 128 chars",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Show help for updateName command",
            },
          ],
        },
        {
          name: "updatePassword",
          description: "Update currently logged in user password",
          options: [
            {
              name: "--password",
              description: "User Password",
              args: {
                name: "password",
                description: "User Password, Must be at least 8 chars",
              },
            },
            {
              name: "--oldPassword",
              description: "Current User Password",
              args: {
                name: "oldPassword",
                description: "Current User Password",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Show help for updatePassword command",
            },
          ],
        },
        {
          name: "getPrefs",
          description: "Get currently logged in user preferences",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for appwrite",
            },
          ],
        },
        {
          name: "updatePrefs",
          description: "Update currently logged in user preferences",
          options: [
            {
              name: "--prefs",
              description: "User Preferences, JSON object",
              args: {
                name: "prefs",
                description: "User Preferences, JSON object",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Show help for appwrite",
            },
          ],
        },
        {
          name: "createRecovery",
          description: "Send user temporary password recovery email",
          options: [
            {
              name: "--email",
              description: "User Email",
              args: {
                name: "email",
                description: "User Email",
              },
            },
            {
              name: "--url",
              description: "URL to redirect to after recovery",
              args: {
                name: "url",
                description: "URL to redirect to after recovery",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Show help for createRecovery command",
            },
          ],
        },
        {
          name: "updateRecovery",
          description: "Complete user password recovery",
          options: [
            {
              name: "--userId",
              description: "User ID",
              args: {
                name: "userId",
                description: "User ID",
              },
            },
            {
              name: "--secret",
              description: "Valid reset token",
              args: {
                name: "secret",
                description: "Valid reset token",
              },
            },
            {
              name: "--password",
              description: "New User password, must be at least 8 chars",
              args: {
                name: "password",
                description: "New User password, must be at least 8 chars",
              },
            },
            {
              name: "--passwordAgain",
              description: "New User password, must be at least 8 chars",
              args: {
                name: "passwordAgain",
                description: "New User password, must be at least 8 chars",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Show help for updateRecovery command",
            },
          ],
        },
        {
          name: "getSessions",
          description:
            "Currently logged user list of active sessions, across all devices",
          options: [
            {
              name: ["--help", "-h"],
              description: "Show help for getSessions command",
            },
          ],
        },
        {
          name: "createSession",
          description:
            "Allow user to login into a given application by providing their email and password",
          options: [
            {
              name: ["--email", "-e"],
              description: "User email",
              args: {
                name: "email",
                description: "User email",
              },
              isRequired: true,
            },
            {
              name: ["--password", "-p"],
              description: "User password. Must be at least 8 chars",
              args: {
                name: "password",
                description: "User password. Must be at least 8 chars",
              },
              isRequired: true,
            },
            {
              name: ["--help", "-h"],
              description: "Show help for createSession command",
            },
          ],
        },
      ],
      options: [
        {
          name: "--help",
          description: "Show help for a command",
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
