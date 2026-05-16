const bodyTempalates: Fig.Generator = {
  script: ["quickmail", "template", "listall"],
  postProcess: (output) => {
    const items = output.split("\n");
    return items.map((item) => {
      return {
        name: item,
        icon: "fig://icon?type=box",
        description: item,
      };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "quickmail",
  description: "Quickmail is a terminal-based solution to send mails",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: ["-v", "--version"],
      description: "Output cli version",
    },
    {
      name: ["-h", "--help"],
      description: "Output cli help",
    },
  ],
  subcommands: [
    {
      name: "init",
      description: "Initialise cli",
      options: [
        {
          name: ["-h", "--help"],
          description: "Get help regarding init command",
        },
      ],
      args: {
        isOptional: true,
        template: ["filepaths"],
      },
    },
    {
      name: "clear",
      description: "Clear the files stored locally",
      options: [
        {
          name: ["-h", "--help"],
          description: "Get help regarding clear command",
        },
        {
          name: ["-j", "--justdoit"],
          description: "Clear entire cli storage including token",
        },
      ],
    },
    {
      name: "send",
      description: "Send mail",
      options: [
        {
          name: ["-h", "--help"],
          description: "Get help regarding send command",
        },
        {
          name: ["-r", "--receiver"],
          description: "Receiver's email address",
          args: {
            name: "receiver",
          },
        },
        {
          name: ["-sub", "--subject"],
          description: "Subject of mail",
          args: {
            name: "Subject",
          },
        },
        {
          name: ["-t", "--template"],
          description: "Templates for mail body",
          args: {
            name: "Template",
            isOptional: true,
            generators: bodyTempalates,
          },
        },
        {
          name: ["-b", "--body"],
          description: "Body of the mail",
          args: {
            name: "Body",
            isOptional: true,
          },
        },
        {
          name: ["-a", "--attachment"],
          description: "Path to attachment file",
          args: {
            name: "Attachment file",
            isOptional: true,
            template: ["filepaths"],
          },
        },
        {
          name: ["-l", "--lessgo"],
          description: "Skip confirmation, and send mail",
        },
      ],
    },
    {
      name: "template",
      description: "Manage templates",
      options: [
        {
          name: ["-h", "--help"],
          description: "Get help regarding template command",
        },
      ],
      subcommands: [
        {
          name: "add",
          description: "Add a new template",
          options: [
            {
              name: ["-h", "--help"],
              description: "Get help regarding template add subcommand",
            },
            {
              name: "-n",
              description: "Set template id",
              args: {
                name: "Template id",
              },
            },
          ],
        },
        {
          name: "listall",
          description: "List all templates stored",
          options: [
            {
              name: ["-h", "--help"],
              description: "Get help regarding template listall subcommand",
            },
          ],
        },
        {
          name: "edit",
          description: "Edit any particular template",
          options: [
            {
              name: ["-h", "--help"],
              description: "Get help regarding template edit subcommand",
            },
            {
              name: "-n",
              description: "Edit template by id",
              args: {
                name: "Template id",
                generators: bodyTempalates,
              },
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
