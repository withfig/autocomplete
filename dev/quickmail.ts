const quickmailGenerators: Record<string, Fig.Generator> = {
    templates: {
        script: "quickmail template listall",
        postProcess: (output, context) => {
            if (output.startsWith("fatal:")) {
              return [];
            }
            const items = output.split("\n");
            return items.map((item) => {
                return {
                    name: item,
                    icon: `fig://icon?type=${"box"}`,
                    description: "templates",
                };
            });
        },
    },
};


export const completionSpec: Fig.Spec = {
    name: "quickmail",
    description: "quickmail is a terminal-based solution to send mails",
    options: [
      {
        name: ["-v", "--version"],
        description: "Output cli version",
      },
      {
          name: ["-h", "--help"],
          description: "Output cli help",
      }
    ],
    subcommands: [
        {
            name: "init",
            description: "Initialise cli",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "Get help regarding init command"
                },
            ],
            args: {
                variadic: false,
                isOptional: true,
                template: ["filepaths"],
            }
        },
        {
            name: "clear",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "Get help regarding clear command"
                },
                {
                    name: ["-j", "--justdoit"],
                    description: "Clear entire cli storage",
                },
            ],
        },
        {
            name: "send",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "Get help regarding send command"
                },
                {
                    name: ["-r", "--receiver"],
                    description: "Receiver's email address",
                    args: {
                        name: "receiver",
                        isOptional: false,
                    }
                },
                {
                    name: ["-sub", "--subject"],
                    description: "Subject of mail",
                    args: {
                        name: "Subject",
                        isOptional: false,
                    }
                },
                {
                    name: ["-t", "--template"],
                    description: "Templates for mail body",
                    args: {
                        name: "Template",
                        isOptional: true,
                        generators: quickmailGenerators.templates,
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
                    }
                },
                {
                    name: ["-l", "--lessgo"],
                    description: "Skip confirmation, and send mail",
                },
            ]
        },
        {
            name: "template",
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
                            name: ["-n"],
                            description: "Set template id",
                            args: {
                                name: "Template id",
                                isOptional: false,
                            }
                        },
                    ]
                },
                {
                    name: "listall",
                    description: "List all templates stored",
                    options: [
                        {
                            name: ["-h", "--help"],
                            description: "Get help regarding template listall subcommand",
                        }
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
                            name: ["-n"],
                            description: "Edit template by id",
                            args: {
                                name: "Template id",
                                isOptional: false,
                                generators: quickmailGenerators.templates,
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
 