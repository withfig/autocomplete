// Print plans list if there is .rugby/plans.yml file
const planList: Fig.Generator = {
  script: ["rugby", "plan", "list"],
  postProcess: (output) => {
    if (output === "") {
      return [];
    }
    return output.split("\n").map((plan) => {
      return {
        name: plan,
        description: `Run plan \"${plan}\"`,
        icon: "✈️",
        priority: 77,
      };
    });
  },
};

const completionSpec: Fig.Spec = {
  description:
    "Cache Cocoa 🌱 pods for faster rebuild and indexing Xcode project. https://github.com/swiftyfinch/Rugby",
  name: "rugby",
  generateSpec: async (tokens, executeShellCommand) => {
    const { stdout } = await executeShellCommand({
      command: "rugby",
      args: ["plan", "list"],
    });
    if (stdout === "") {
      return null;
    }
    // Handle `rugby umbrella` command
    return {
      name: "plan",
      subcommands: stdout.split("\n").map((plan) => {
        return {
          name: plan,
          description: `Run plan \"${plan}\"`,
          icon: "✈️",
          priority: 77,
          options: [
            {
              args: {
                default: ".rugby/plans.yml",
                name: "path",
              },
              description: "Path to plans yaml",
              name: ["--path", "-p"],
            },
            {
              description: "Restore projects state before the last Rugby usage",
              name: ["--rollback", "-r"],
            },
            {
              args: {
                default: "fold",
                name: "output",
              },
              description: "Output mode: fold, multiline, quiet",
              name: ["--output", "-o"],
            },
            {
              description: "Log level",
              isRepeatable: true,
              name: ["--verbose", "-v"],
            },
            {
              description: "Show help information",
              name: ["--help", "-h"],
            },
          ],
        };
      }),
    };
  },
  args: {
    description: "Name of plan to run",
    isOptional: true,
    name: "name",
  },
  options: [
    {
      description: "Show the version",
      name: "--version",
    },
    {
      description: "Show help information",
      name: ["--help", "-h"],
    },
  ],
  subcommands: [
    {
      description: "Run the build and use commands",
      name: "cache",
      priority: 76,
      icon: "🏈",
      options: [
        {
          description: "Ignore shared cache",
          name: "--ignore-cache",
        },
        {
          description: "Delete target groups from project",
          name: "--delete-sources",
        },
        {
          description: "Restore projects state before the last Rugby usage",
          name: ["--rollback", "-r"],
        },
        {
          args: {
            default: "sim",
            name: "sdk",
          },
          description: "Build SDK: sim or ios",
          name: ["--sdk", "-s"],
        },
        {
          args: {
            default: "auto",
            name: "arch",
          },
          description: "Build architecture: auto, x86_64 or arm64",
          name: ["--arch", "-a"],
        },
        {
          args: {
            default: "Debug",
            name: "config",
          },
          description: "Build configuration",
          name: ["--config", "-c"],
        },
        {
          description: "Build without debug symbols",
          name: "--strip",
        },
        {
          args: {
            name: "targets",
          },
          description: "Targets for building. Empty means all targets",
          isRepeatable: true,
          name: ["--targets", "-t"],
        },
        {
          args: {
            name: "targets-as-regex",
          },
          description: "Targets for building as a RegEx pattern",
          isRepeatable: true,
          name: ["--targets-as-regex", "-g"],
        },
        {
          args: {
            name: "except",
          },
          description: "Exclude targets from building",
          isRepeatable: true,
          name: ["--except", "-e"],
        },
        {
          args: {
            name: "except-as-regex",
          },
          description: "Exclude targets from building as a RegEx pattern",
          isRepeatable: true,
          name: ["--except-as-regex", "-x"],
        },
        {
          args: {
            default: "fold",
            name: "output",
          },
          description: "Output mode: fold, multiline, quiet",
          name: ["--output", "-o"],
        },
        {
          description: "Log level",
          isRepeatable: true,
          name: ["--verbose", "-v"],
        },
        {
          args: {
            name: "warmup",
          },
          description: "Warmup cache with this endpoint",
          name: "--warmup",
        },
        {
          description: "Show help information",
          name: ["--help", "-h"],
        },
      ],
    },
    {
      description: "Set of base commands combinations",
      name: "shortcuts",
      icon: "📍",
      options: [
        {
          description: "Show help information",
          name: ["--help", "-h"],
        },
      ],
      subcommands: [
        {
          args: {
            description: "Any arguments of plan or cache commands",
            isOptional: true,
            isVariadic: true,
            name: "arguments",
          },
          description:
            "Run the plan command if plans file exists or run the cache command",
          name: "umbrella",
          icon: "⛱️",
          options: [
            {
              description: "Show help information",
              name: ["--help", "-h"],
            },
          ],
        },
        {
          description: "Run the build and use commands",
          name: "cache",
          icon: "🏈",
          options: [
            {
              description: "Ignore shared cache",
              name: "--ignore-cache",
            },
            {
              description: "Delete target groups from project",
              name: "--delete-sources",
            },
            {
              description: "Restore projects state before the last Rugby usage",
              name: ["--rollback", "-r"],
            },
            {
              args: {
                default: "sim",
                name: "sdk",
              },
              description: "Build SDK: sim or ios",
              name: ["--sdk", "-s"],
            },
            {
              args: {
                default: "auto",
                name: "arch",
              },
              description: "Build architecture: auto, x86_64 or arm64",
              name: ["--arch", "-a"],
            },
            {
              args: {
                default: "Debug",
                name: "config",
              },
              description: "Build configuration",
              name: ["--config", "-c"],
            },
            {
              description: "Build without debug symbols",
              name: "--strip",
            },
            {
              args: {
                name: "targets",
              },
              description: "Targets for building. Empty means all targets",
              isRepeatable: true,
              name: ["--targets", "-t"],
            },
            {
              args: {
                name: "targets-as-regex",
              },
              description: "Targets for building as a RegEx pattern",
              isRepeatable: true,
              name: ["--targets-as-regex", "-g"],
            },
            {
              args: {
                name: "except",
              },
              description: "Exclude targets from building",
              isRepeatable: true,
              name: ["--except", "-e"],
            },
            {
              args: {
                name: "except-as-regex",
              },
              description: "Exclude targets from building as a RegEx pattern",
              isRepeatable: true,
              name: ["--except-as-regex", "-x"],
            },
            {
              args: {
                default: "fold",
                name: "output",
              },
              description: "Output mode: fold, multiline, quiet",
              name: ["--output", "-o"],
            },
            {
              description: "Log level",
              isRepeatable: true,
              name: ["--verbose", "-v"],
            },
            {
              args: {
                name: "warmup",
              },
              description: "Warmup cache with this endpoint",
              name: "--warmup",
            },
            {
              description: "Show help information",
              name: ["--help", "-h"],
            },
          ],
        },
      ],
    },
    {
      description: "Build targets from Pods project",
      name: "build",
      icon: "🏗️",
      options: [
        {
          description: "Ignore shared cache",
          name: "--ignore-cache",
        },
        {
          args: {
            default: "sim",
            name: "sdk",
          },
          description: "Build SDK: sim or ios",
          name: ["--sdk", "-s"],
        },
        {
          args: {
            default: "auto",
            name: "arch",
          },
          description: "Build architecture: auto, x86_64 or arm64",
          name: ["--arch", "-a"],
        },
        {
          args: {
            default: "Debug",
            name: "config",
          },
          description: "Build configuration",
          name: ["--config", "-c"],
        },
        {
          description: "Build without debug symbols",
          name: "--strip",
        },
        {
          args: {
            name: "targets",
          },
          description: "Targets for building. Empty means all targets",
          isRepeatable: true,
          name: ["--targets", "-t"],
        },
        {
          args: {
            name: "targets-as-regex",
          },
          description: "Targets for building as a RegEx pattern",
          isRepeatable: true,
          name: ["--targets-as-regex", "-g"],
        },
        {
          args: {
            name: "except",
          },
          description: "Exclude targets from building",
          isRepeatable: true,
          name: ["--except", "-e"],
        },
        {
          args: {
            name: "except-as-regex",
          },
          description: "Exclude targets from building as a RegEx pattern",
          isRepeatable: true,
          name: ["--except-as-regex", "-x"],
        },
        {
          args: {
            default: "fold",
            name: "output",
          },
          description: "Output mode: fold, multiline, quiet",
          name: ["--output", "-o"],
        },
        {
          description: "Log level",
          isRepeatable: true,
          name: ["--verbose", "-v"],
        },
        {
          description: "Show help information",
          name: ["--help", "-h"],
        },
      ],
    },
    {
      description: "Use already built binaries instead of sources",
      name: "use",
      icon: "🎯",
      options: [
        {
          description: "Delete target groups from project",
          name: "--delete-sources",
        },
        {
          args: {
            name: "targets",
          },
          description: "Targets for building. Empty means all targets",
          isRepeatable: true,
          name: ["--targets", "-t"],
        },
        {
          args: {
            name: "targets-as-regex",
          },
          description: "Targets for building as a RegEx pattern",
          isRepeatable: true,
          name: ["--targets-as-regex", "-g"],
        },
        {
          args: {
            name: "except",
          },
          description: "Exclude targets from building",
          isRepeatable: true,
          name: ["--except", "-e"],
        },
        {
          args: {
            name: "except-as-regex",
          },
          description: "Exclude targets from building as a RegEx pattern",
          isRepeatable: true,
          name: ["--except-as-regex", "-x"],
        },
        {
          description: "Build without debug symbols",
          name: "--strip",
        },
        {
          args: {
            default: "fold",
            name: "output",
          },
          description: "Output mode: fold, multiline, quiet",
          name: ["--output", "-o"],
        },
        {
          description: "Log level",
          isRepeatable: true,
          name: ["--verbose", "-v"],
        },
        {
          description: "Show help information",
          name: ["--help", "-h"],
        },
      ],
    },
    {
      description: "Delete targets from the project",
      name: "delete",
      icon: "🗑️",
      options: [
        {
          args: {
            default: "Pods/Pods.xcodeproj",
            name: "path",
          },
          description: "Project location",
          name: ["--path", "-p"],
        },
        {
          description: "Keep dependencies of excepted targets",
          name: "--safe",
        },
        {
          description: "Delete target groups from project",
          name: "--delete-sources",
        },
        {
          args: {
            name: "targets",
          },
          description: "Targets for building. Empty means all targets",
          isRepeatable: true,
          name: ["--targets", "-t"],
        },
        {
          args: {
            name: "targets-as-regex",
          },
          description: "Targets for building as a RegEx pattern",
          isRepeatable: true,
          name: ["--targets-as-regex", "-g"],
        },
        {
          args: {
            name: "except",
          },
          description: "Exclude targets from building",
          isRepeatable: true,
          name: ["--except", "-e"],
        },
        {
          args: {
            name: "except-as-regex",
          },
          description: "Exclude targets from building as a RegEx pattern",
          isRepeatable: true,
          name: ["--except-as-regex", "-x"],
        },
        {
          args: {
            default: "fold",
            name: "output",
          },
          description: "Output mode: fold, multiline, quiet",
          name: ["--output", "-o"],
        },
        {
          description: "Log level",
          isRepeatable: true,
          name: ["--verbose", "-v"],
        },
        {
          description: "Show help information",
          name: ["--help", "-h"],
        },
      ],
    },
    {
      args: {
        description:
          "Endpoint for your binaries storage (s3.eu-west-2.amazonaws.com)",
        isOptional: true,
        name: "endpoint",
      },
      description: "Download remote binaries for targets from Pods project",
      name: "warmup",
      icon: "🐳",
      options: [
        {
          description:
            "Run only in analyse mode without downloading. The endpoint is optional",
          name: "--analyse",
        },
        {
          args: {
            default: "sim",
            name: "sdk",
          },
          description: "Build SDK: sim or ios",
          name: ["--sdk", "-s"],
        },
        {
          args: {
            default: "auto",
            name: "arch",
          },
          description: "Build architecture: auto, x86_64 or arm64",
          name: ["--arch", "-a"],
        },
        {
          args: {
            default: "Debug",
            name: "config",
          },
          description: "Build configuration",
          name: ["--config", "-c"],
        },
        {
          description: "Build without debug symbols",
          name: "--strip",
        },
        {
          args: {
            name: "targets",
          },
          description: "Targets for building. Empty means all targets",
          isRepeatable: true,
          name: ["--targets", "-t"],
        },
        {
          args: {
            name: "targets-as-regex",
          },
          description: "Targets for building as a RegEx pattern",
          isRepeatable: true,
          name: ["--targets-as-regex", "-g"],
        },
        {
          args: {
            name: "except",
          },
          description: "Exclude targets from building",
          isRepeatable: true,
          name: ["--except", "-e"],
        },
        {
          args: {
            name: "except-as-regex",
          },
          description: "Exclude targets from building as a RegEx pattern",
          isRepeatable: true,
          name: ["--except-as-regex", "-x"],
        },
        {
          args: {
            default: "fold",
            name: "output",
          },
          description: "Output mode: fold, multiline, quiet",
          name: ["--output", "-o"],
        },
        {
          description: "Log level",
          isRepeatable: true,
          name: ["--verbose", "-v"],
        },
        {
          args: {
            default: "60",
            name: "timeout",
          },
          description: "Timeout for requests in seconds",
          name: "--timeout",
        },
        {
          args: {
            default: "10",
            name: "max-connections",
          },
          description: "The maximum number of simultaneous connections",
          name: "--max-connections",
        },
        {
          description: "Show help information",
          name: ["--help", "-h"],
        },
      ],
    },
    {
      description: "Restore projects state before the last Rugby usage",
      name: "rollback",
      icon: "♻️",
      options: [
        {
          args: {
            default: "fold",
            name: "output",
          },
          description: "Output mode: fold, multiline, quiet",
          name: ["--output", "-o"],
        },
        {
          description: "Log level",
          isRepeatable: true,
          name: ["--verbose", "-v"],
        },
        {
          description: "Show help information",
          name: ["--help", "-h"],
        },
      ],
    },
    {
      args: {
        description: "Name of plan to run",
        isOptional: true,
        name: "name",
        generators: planList,
      },
      description: "Run sequence of Rugby commands",
      name: "plan",
      icon: "✈️",
      options: [
        {
          args: {
            default: ".rugby/plans.yml",
            name: "path",
          },
          description: "Path to plans yaml",
          name: ["--path", "-p"],
        },
        {
          description: "Restore projects state before the last Rugby usage",
          name: ["--rollback", "-r"],
        },
        {
          args: {
            default: "fold",
            name: "output",
          },
          description: "Output mode: fold, multiline, quiet",
          name: ["--output", "-o"],
        },
        {
          description: "Log level",
          isRepeatable: true,
          name: ["--verbose", "-v"],
        },
        {
          description: "Show help information",
          name: ["--help", "-h"],
        },
      ],
    },
    {
      description: "Clear modules cache",
      name: "clear",
      icon: "🧼",
      options: [
        {
          args: {
            name: "modules",
          },
          description: "List of modules for deletion",
          isRepeatable: true,
          name: ["--modules", "-m"],
        },
        {
          args: {
            default: "fold",
            name: "output",
          },
          description: "Output mode: fold, multiline, quiet",
          name: ["--output", "-o"],
        },
        {
          description: "Log level",
          isRepeatable: true,
          name: ["--verbose", "-v"],
        },
        {
          description: "Show help information",
          name: ["--help", "-h"],
        },
      ],
      subcommands: [
        {
          description: "Delete .rugby/build folder",
          name: "build",
          icon: "🧼",
          options: [
            {
              args: {
                default: "fold",
                name: "output",
              },
              description: "Output mode: fold, multiline, quiet",
              name: ["--output", "-o"],
            },
            {
              description: "Log level",
              isRepeatable: true,
              name: ["--verbose", "-v"],
            },
            {
              description: "Show help information",
              name: ["--help", "-h"],
            },
          ],
        },
        {
          description: "Delete .rugby/bin folder",
          name: "shared",
          icon: "🧼",
          options: [
            {
              args: {
                default: "fold",
                name: "output",
              },
              description: "Output mode: fold, multiline, quiet",
              name: ["--output", "-o"],
            },
            {
              description: "Log level",
              isRepeatable: true,
              name: ["--verbose", "-v"],
            },
            {
              description: "Show help information",
              name: ["--help", "-h"],
            },
          ],
        },
      ],
    },
    {
      description: "Update Rugby version",
      name: "update",
      icon: "📦",
      options: [
        {
          args: {
            default: "latest",
            name: "version",
          },
          description: "Version, like 2.0.0",
          name: "--version",
        },
        {
          args: {
            name: "arch",
          },
          description: "Binary architecture: x86_64 or arm64",
          name: ["--arch", "-a"],
        },
        {
          description: "Allow install the latest pre-release version",
          name: "--beta",
        },
        {
          description: "Force an install even if Rugby is already installed",
          name: ["--force", "-f"],
        },
        {
          args: {
            default: "fold",
            name: "output",
          },
          description: "Output mode: fold, multiline, quiet",
          name: ["--output", "-o"],
        },
        {
          description: "Log level",
          isRepeatable: true,
          name: ["--verbose", "-v"],
        },
        {
          description: "Show help information",
          name: ["--help", "-h"],
        },
      ],
      subcommands: [
        {
          description: "List of available versions",
          name: "list",
          options: [
            {
              args: {
                default: "5",
                name: "count",
              },
              description: "Maximum versions count",
              name: "--count",
            },
            {
              args: {
                default: "fold",
                name: "output",
              },
              description: "Output mode: fold, multiline, quiet",
              name: ["--output", "-o"],
            },
            {
              description: "Log level",
              isRepeatable: true,
              name: ["--verbose", "-v"],
            },
            {
              description: "Show help information",
              name: ["--help", "-h"],
            },
          ],
        },
      ],
    },
    {
      description: "Heal your wounds after using Rugby (or not)",
      name: "doctor",
      icon: "🚑",
      options: [
        {
          description: "Show help information",
          name: ["--help", "-h"],
        },
      ],
    },
    {
      args: {
        description: "Shell script command",
        name: "command",
      },
      description: "Run shell command from Rugby",
      name: "shell",
      icon: "🐚",
      options: [
        {
          args: {
            default: "fold",
            name: "output",
          },
          description: "Output mode: fold, multiline, quiet",
          name: ["--output", "-o"],
        },
        {
          description: "Log level",
          isRepeatable: true,
          name: ["--verbose", "-v"],
        },
        {
          description: "Show help information",
          name: ["--help", "-h"],
        },
      ],
    },
    {
      description: "Print Rugby environment",
      name: "env",
      icon: "🌍",
      options: [
        {
          description: "Show help information",
          name: ["--help", "-h"],
        },
      ],
    },
  ],
};
export default completionSpec;
