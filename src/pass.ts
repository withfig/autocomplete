const listPasswords: Fig.Generator = {
  custom: async (_tokens, executeCommand, context) => {
    const { stdout } = await executeCommand({
      command: "grep",
      args: [
        "-r",
        "-l",
        "",
        `${context.environmentVariables["HOME"]}/.password-store`,
        "--exclude-dir=.git",
      ],
    });
    return stdout.split("\n").map((password) => ({
      name: password.split(".password-store/").pop().replace(".gpg", ""),
      icon: "🔐",
    }));
  },
};

const listDirectories: Fig.Generator = {
  custom: async (_tokens, executeCommand, context) => {
    const { stdout } = await executeCommand({
      command: "ls",
      args: [
        "-dR1a",
        `${context.environmentVariables["HOME"]}/.password-store`,
      ],
    });
    return stdout.split("\n").map((dir) => ({
      name: dir.split(".password-store/").pop(),
      icon: "📁",
    }));
  },
};

const completionSpec: Fig.Spec = {
  name: "pass",
  description:
    "Pass - stores, retrieves, generates, and synchronizes passwords securely",
  args: {
    name: "pass-name",
    description: "The password you want to show",
    generators: listPasswords,
  },
  options: [
    {
      name: ["--clip", "-c"],
      description: "Copy the password to the clipboard",
    },
    {
      name: ["--qrcode", "-q"],
      description: "Display a QRcode of the password",
    },
    {
      name: "--help",
      description: "Show help for pass",
    },
  ],
  subcommands: [
    {
      name: "init",
      description:
        "Initialize new password storage and use gpg-id for encryption",
      args: {
        name: "gpg-id",
        description:
          "The gpg-id you want to use to encrypt your password store",
      },
      options: [
        {
          name: ["--path", "-p"],
          description:
            "A specific gpg-id or set of gpg-ids is assigned for that specific sub folder of the password store",
          args: {
            name: "sub-folder",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "insert",
      description:
        "Insert a new password into the password store called pass-name",
      args: {
        name: "pass-name",
        description: "The password name",
      },
      options: [
        {
          name: ["--echo", "-e"],
          description:
            "Disable keyboard echo when the password is entered and confirm the password by asking for it twice",
        },
        {
          name: ["--multi-line", "-m"],
          description:
            "Lines will be read until EOF or Ctrl+D is reached. Otherwise, only a single line from standard in is read",
        },
        {
          name: ["--force", "-f"],
          description: "Don't prompt before overwriting an existing password",
        },
      ],
    },
    {
      name: "git",
      description: "Password store git functions",
      loadSpec: "git",
    },
    {
      name: "version",
      description: "Show version information",
    },
    {
      name: "help",
      description: "Show usage message",
    },
    {
      name: "cp",
      description:
        "Copies the password or directory named old-path to new-path",
      args: [
        {
          name: "old-path",
          description: "The old password name or directory",
          generators: listPasswords,
        },
        {
          name: "new-path",
          description: "The new password name or directory",
        },
      ],
      options: [
        {
          name: ["--force", "-f"],
          description: "Do not interactively prompt before moving",
        },
      ],
    },
    {
      name: "mv",
      description:
        "Renames the password or directory named old-path to new-path",
      args: [
        {
          name: "old-path",
          description: "The old password name or directory",
          generators: listPasswords,
        },
        {
          name: "new-path",
          description: "The new password name or directory",
        },
      ],
      options: [
        {
          name: ["--force", "-f"],
          description: "Do not interactively prompt before moving",
        },
      ],
    },
    {
      name: "rm",
      description:
        "Remove the password named pass-name from the password store",
      args: {
        name: "pass-name",
        description: "The password name",
        generators: listPasswords,
      },
      options: [
        {
          name: ["--recursive", "-r"],
          description: "Delete pass-name recursively if it is a directory",
        },
        {
          name: ["--force", "-f"],
          description: "Do not interactively prompt before removal",
        },
      ],
    },
    {
      name: "generate",
      description:
        "Generate a new password of length pass-length and insert into pass-name",
      args: [
        {
          name: "pass-name",
          description: "The password name",
        },
        {
          name: "pass-length",
          description: "The length of the password",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["--no-symbols", "-n"],
          description:
            "Do not use any non-alphanumeric characters in the generated password",
        },
        {
          name: ["--clip", "-c"],
          description:
            "Do not print the password but instead copy it to the clipboard",
        },
        {
          name: ["--in-place", "-i"],
          description:
            "Do not interactively prompt, and only replace the first line of the password file with the new generated password, keeping the remainder of the file intact",
        },
        {
          name: ["--force", "-f"],
          description: "Overwrite the existing password",
        },
      ],
    },
    {
      name: ["ls", "list"],
      description:
        "List names of passwords inside the tree at subfolder by using the tree",
      args: {
        name: "password sub-directory",
        description: "The password sub directory you want to list",
        isOptional: true,
        generators: listDirectories,
      },
    },
    {
      name: "find",
      description:
        "List names of passwords inside the tree that match pass-names",
      args: {
        name: "pass-name",
        description: "The password name you want to search for",
      },
    },
    {
      name: "show",
      description: "Decrypt and print a password",
      args: {
        name: "pass-name",
        description: "The password you want to show",
        generators: listPasswords,
      },
      options: [
        {
          name: ["--clip", "-c"],
          description: "Copy the password to the clipboard",
        },
        {
          name: ["--qrcode", "-q"],
          description: "Display a QRcode of the password",
        },
      ],
    },
    {
      name: "edit",
      description:
        "Insert a new password or edit an existing password using the default text editor specified by the environment",
      args: {
        name: "pass-name",
        description: "The password you want to edit",
        generators: listPasswords,
      },
    },
    {
      name: "grep",
      description:
        "Searches inside each decrypted password file for search-string. Grep options can be used",
      loadSpec: "grep",
      args: {
        name: "pass-name",
        description: "The password name you want to grep for",
      },
    },
  ],
};
export default completionSpec;
