const platforms: Fig.Suggestion[] = [
  { name: "android", icon: "fig://icon?type=android" },
  { name: "ios", icon: "fig://icon?type=apple" },
];

function isPlatform(value: string): value is "ios" | "android" {
  return value === "ios" || value === "android";
}

const targetGenerator: Fig.Generator = {
  cache: {
    ttl: 1000 * 60, // Only caches targets for one minute, in case a new device is connected
  },
  custom: async (tokens, executeShellCommand) => {
    const [cliName, command, platform] = tokens;
    if (!isPlatform(platform)) {
      return [];
    }

    const { stdout } = await executeShellCommand({
      command: "npx",
      args: ["capacitor", "run", platform, "--list"],
    });

    return stdout
      .trim()
      .split("\n")
      .slice(2) // Ignore output header lines
      .map((s) => {
        const [name, api, targetId] = s.replace(/\s\s+/g, "|").split("|");
        return {
          name: targetId,
          displayName: `${name} ${api}`,
          icon: "📱",
        };
      });
  },
};

const completionSpec: Fig.Spec = {
  name: "capacitor",
  description:
    "The Capacitor command-line interface (CLI) tool is used to develop Capacitor apps",
  icon: "https://capacitorjs.com/docs/img/meta/favicon.png",
  subcommands: [
    {
      name: "add",
      description: "Add a native platform project to your app",
      args: {
        name: "platform",
        suggestions: platforms,
      },
    },
    {
      name: "copy",
      description:
        "Copy the web app build and Capacitor configuration file into the native platform project. Run this each time you make changes to your web app or change a configuration value",
      priority: 51,
      args: {
        name: "platform",
        suggestions: platforms,
        isOptional: true,
      },
    },
    {
      name: "ls",
      description: "List all installed Cordova and Capacitor plugins",
      args: {
        name: "platform",
        suggestions: platforms,
        isOptional: true,
      },
    },
    {
      name: "open",
      description:
        "Opens the native project workspace in the specified native IDE (Xcode for iOS, Android Studio for Android)",
      priority: 51,
      args: {
        name: "platform",
        suggestions: platforms,
      },
    },
    {
      name: "run",
      description:
        "Opens the native project workspace in the specified native IDE (Xcode for iOS, Android Studio for Android)",
      priority: 51,
      args: {
        name: "platform",
        suggestions: platforms,
      },
      options: [
        {
          name: "--list",
          description:
            "Print a list of target devices available to the given platform",
          icon: "📱",
        },
        {
          name: "--target",
          description: "Run on a specific target device",
          icon: "📱",
          args: {
            name: "target",
            generators: targetGenerator,
          },
        },
      ],
    },
    {
      name: "sync",
      description: "This command runs copy and then update",
      args: {
        name: "platform",
        suggestions: platforms,
        isOptional: true,
      },
      options: [
        {
          name: "--deployment",
          description:
            "Podfile.lock won't be deleted and pod install will use --deployment option",
        },
        {
          name: "--inline",
          description:
            "After syncing, all JS source maps will be inlined allowing for debugging an Android Web View in Chromium based browsers",
        },
      ],
    },
    {
      name: "update",
      description:
        "Updates the native plugins and dependencies referenced in package.json",
      args: {
        name: "platform",
        suggestions: platforms,
        isOptional: true,
      },
      options: [
        {
          name: "--deployment",
          description:
            "Podfile.lock won't be deleted and pod install will use --deployment option",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description:
        "Output usage information. Can be used with individual commands too",
      isPersistent: true,
    },
    {
      name: ["--version", "-V"],
      description: "Output the version number",
    },
  ],
};
export default completionSpec;
