const completionSpec: Fig.Spec = {
  name: "cli",
  description: "Manage packages and bundle versions in Capgo Cloud",
  subcommands: [
    {
      name: "login",
      description: "Save apikey to your machine or folder",
      args: {
        name: "apikey",
      },
      options: [
        {
          name: "--local",
          description: "Only save in local folder",
        },
      ],
    },
    {
      name: "doctor",
      description: "Get info about your Capgo app install",
    },
    {
      name: "init",
      description: "Init a new app",
      args: [
        {
          name: "apikey",
        },
        {
          name: "appId",
        },
      ],
      options: [
        {
          name: ["-n", "--name"],
          description: "App name",
          args: {
            name: "name",
          },
        },
        {
          name: ["-i", "--icon"],
          description: "App icon path",
          args: {
            name: "icon",
            template: "filepaths",
          },
        },
        {
          name: ["-a", "--apikey"],
          description: "Apikey to link to your account",
          args: {
            name: "apikey",
          },
        },
      ],
    },
    {
      name: "app",
      description: "Manage app",
      subcommands: [
        {
          name: ["add", "a"],
          description: "Add a new app in Capgo Cloud",
          args: {
            name: "appId",
          },
          options: [
            {
              name: ["-n", "--name"],
              description: "App name",
              args: {
                name: "name",
              },
            },
            {
              name: ["-i", "--icon"],
              description: "App icon path",
              args: {
                name: "icon",
                template: "filepaths",
              },
            },
            {
              name: ["-a", "--apikey"],
              description: "Apikey to link to your account",
              args: {
                name: "apikey",
              },
            },
          ],
        },
        {
          name: ["delete", "d"],
          description: "Delete an app in Capgo Cloud",
          args: {
            name: "appId",
          },
          options: [
            {
              name: ["-a", "--apikey"],
              description: "Apikey to link to your account",
              args: {
                name: "apikey",
              },
            },
          ],
        },
        {
          name: ["list", "l"],
          description: "List apps in Capgo Cloud",
          options: [
            {
              name: ["-a", "--apikey"],
              description: "Apikey to link to your account",
              args: {
                name: "apikey",
              },
            },
          ],
        },
        {
          name: "debug",
          description:
            "Listen for live updates event in Capgo Cloud to debug your app",
          args: {
            name: "appId",
          },
          options: [
            {
              name: ["-a", "--apikey"],
              description: "Apikey to link to your account",
              args: {
                name: "apikey",
              },
            },
            {
              name: ["-d", "--device"],
              description: "The specific device to debug",
              args: {
                name: "device",
              },
            },
          ],
        },
        {
          name: ["set", "s"],
          description: "Set an app in Capgo Cloud",
          args: {
            name: "appId",
          },
          options: [
            {
              name: ["-n", "--name"],
              description: "App name",
              args: {
                name: "name",
              },
            },
            {
              name: ["-i", "--icon"],
              description: "App icon path",
              args: {
                name: "icon",
                template: "filepaths",
              },
            },
            {
              name: ["-a", "--apikey"],
              description: "Apikey to link to your account",
              args: {
                name: "apikey",
              },
            },
            {
              name: ["-r", "--retention"],
              description: "Retention period of app bundle in days",
              args: {
                name: "retention",
              },
            },
          ],
        },
      ],
    },
    {
      name: "bundle",
      description: "Manage bundle",
      subcommands: [
        {
          name: ["delete", "d"],
          description: "Delete a bundle in Capgo Cloud",
          args: [
            {
              name: "bundleId",
            },
            {
              name: "appId",
            },
          ],
          options: [
            {
              name: ["-a", "--apikey"],
              description: "Apikey to link to your account",
              args: {
                name: "apikey",
              },
            },
          ],
        },
        {
          name: ["decrypt", "l"],
          description: "Decrypt a signed zip bundle",
          args: [
            {
              name: "zipPath",
              template: "filepaths",
            },
            {
              name: "sessionKey",
            },
          ],
          options: [
            {
              name: "--key",
              description: "Custom path for private signing key",
              args: {
                name: "key",
                template: "filepaths",
              },
            },
            {
              name: "--key-data",
              description: "Base64 private signing key",
              args: {
                name: "keyData",
              },
            },
          ],
        },
        {
          name: "encrypt",
          description: "Encrypt a zip bundle",
          args: {
            name: "zipPath",
            template: "filepaths",
          },
          options: [
            {
              name: "--key",
              description: "Custom path for private signing key",
              args: {
                name: "key",
                template: "filepaths",
              },
            },
            {
              name: "--key-data",
              description: "Base64 private signing key",
              args: {
                name: "keyData",
              },
            },
          ],
        },
        {
          name: "zip",
          description: "Zip a bundle",
          args: {
            name: "appId",
          },
          options: [
            {
              name: ["-p", "--path"],
              description: "Path of the folder to upload",
              args: {
                name: "path",
                template: "folders",
              },
            },
          ],
        },
      ],
    },
    {
      name: "channel",
      description: "Manage channel",
      subcommands: [
        {
          name: ["add", "a"],
          description: "Create channel",
          args: [
            {
              name: "channelId",
            },
            {
              name: "appId",
            },
          ],
          options: [
            {
              name: ["-d", "--default"],
              description: "Set the channel as default",
            },
          ],
        },
        {
          name: ["delete", "d"],
          description: "Delete channel",
          args: [
            {
              name: "channelId",
            },
            {
              name: "appId",
            },
          ],
        },
        {
          name: ["list", "l"],
          description: "List channel",
          args: {
            name: "appId",
          },
        },
        {
          name: "currentBundle",
          description: "Get current bundle for specific channel in Capgo Cloud",
          args: [
            {
              name: "channel",
            },
            {
              name: "appId",
            },
          ],
          options: [
            {
              name: ["-c", "--channel"],
              description: "Channel to get the current bundle from",
              args: {
                name: "channel",
              },
            },
            {
              name: ["-a", "--apikey"],
              description: "Apikey to link to your account",
              args: {
                name: "apikey",
              },
            },
            {
              name: "--quiet",
              description: "Only print the bundle version",
            },
          ],
        },
        {
          name: ["set", "s"],
          description: "Set channel",
          args: [
            {
              name: "channelId",
            },
            {
              name: "appId",
            },
          ],
        },
      ],
    },
    {
      name: "key",
      description: "Manage key",
      subcommands: [
        {
          name: "save",
          description:
            "Save base64 signing key in capacitor config, useful for CI",
          options: [
            {
              name: ["-f", "--force"],
              description: "Force generate a new one",
            },
            {
              name: "--key",
              description: "Key path to save in capacitor config",
              args: {
                name: "key",
                template: "filepaths",
              },
            },
            {
              name: "--key-data",
              description: "Key data to save in capacitor config",
              args: {
                name: "keyData",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a new signing key",
          options: [
            {
              name: ["-f", "--force"],
              description: "Force generate a new one",
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
