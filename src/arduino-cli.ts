const FQBNs: Fig.Generator = {
  script: ["arduino-cli", "board", "list", "--format", "json"],
  postProcess: (output) => {
    try {
      const parsedOutput = JSON.parse(output);

      const result = parsedOutput
        .filter((entry) => entry.matching_boards)
        .map((entry) => ({
          name: entry.matching_boards[0].fqbn,
          description: `${entry.matching_boards[0].name} on port ${entry.port.address}`,
        }));

      return result;
    } catch (error) {
      return [];
    }
  },
};
const Ports: Fig.Generator = {
  script: ["arduino-cli", "board", "list", "--format", "json"],
  postProcess: (output) => {
    try {
      const parsedOutput = JSON.parse(output);

      const result = parsedOutput
        .filter((entry) => entry.matching_boards)
        .map((entry) => ({
          name: entry.port.address,
          description: `${entry.matching_boards[0].name} port connection`,
        }));

      return result;
    } catch (error) {
      return [];
    }
  },
};

const completionSpec: Fig.Spec = {
  name: "arduino-cli",
  description:
    "Arduino Command Line Interface",
  subcommands: [
    {
      name: "board",
      description:
        "Arduino board commands",
      args: {
        name: "attach, list...",
        isOptional: true,
      },
      subcommands: [
        {
          name: "attach",
          description:
            "Sets the default values for port and FQBN. If no port or FQBN are specified, the current default port and FQBN are displayed",
          options: [
            {
              name: "--board-options",
              description:
                "List of board options separated by commas. Or can be used multiple times for multiple options",
              args: {},
            },
            {
              name: "--discovery-timeout",
              description:
                "Max time to wait for port discovery, example: '30s, 1m (default 1s)'",
              args: {
                name: "duration",
              },
            },
            {
              name: ["-b", "--fqbn"],
              description:
                "Fully Qualified Board Name, example: 'arduino:avr:uno'",
              args: {
                name: "FQBN",
                description: "Fully qualified board name",
                generators: FQBNs,
              },
            },
            {
              name: ["-h", "--help"],
              description: "Help for attach",
            },
            {
              name: ["-p", "--port"],
              description:
                "Upload port address, example: 'COM3 or /dev/ttyACM2'",
              args: {
                name: "port",
                description: "Arduino board port connection",
                generators: Ports,
              },
            },
            {
              name: ["-l", "--protocol"],
              description: "Upload port protocol, example: 'serial'",
              args: {
                name: "protocol",
              },
            },
          ],
        },
        {
          name: "details",
          description:
            "Show information about a board, in particular if the board has options to be specified in the FQBN'",
          options: [
            {
              name: "--board-options",
              description:
                "List of board options separated by commas. Or can be used multiple times for multiple options",
              args: {},
            },
            {
              name: ["-b", "--fqbn"],
              description:
                "Fully Qualified Board Name, example: 'arduino:avr:uno'",
              args: {
                name: "FQBN",
                description: "Fully qualified board name",
                generators: FQBNs,
              },
            },
            {
              name: ["-f", "--full"],
              description: "Show full board details",
            },
            {
              name: ["-h", "--help"],
              description: "Help for details",
            },
            {
              name: "--list-programmers",
              description: "Show list of available programmers",
            },
            {
              name: "--show-properties",
              description:
                'Show build properties. The properties are expanded, use "--show-properties=unexpanded" if you want them exactly as they are defined. (default "disabled")',
              args: {},
            },
          ],
        },
        {
          name: "list",
          description:
            "Detects and displays a list of boards connected to the current computer, example: 'arduino-cli board list --discovery-timeout 10s'",
          options: [
            {
              name: "--board-options",
              description:
                "List of board options separated by commas. Or can be used multiple times for multiple options",
              args: {},
            },
            {
              name: "--discovery-timeout",
              description:
                "Max time to wait for port discovery, example: '30s, 1m (default 1s)'",
              args: {
                name: "duration",
              },
            },
            {
              name: ["-b", "--fqbn"],
              description:
                "Fully Qualified Board Name, example: 'arduino:avr:uno'",
              args: {
                name: "FQBN",
                description: "Fully qualified board name",
                generators: FQBNs,
              },
            },
            {
              name: ["-h", "--help"],
              description: "Help for list",
            },
            {
              name: ["-w", "--watch"],
              description:
                "Command keeps running and prints list of connected boards whenever there is a change",
              args: {},
            },
          ],
        },
        {
          name: "listall",
          description:
            "List all boards that have the support platform installed, You can search for a specific board if you specify the board name, example: 'arduino-cli board listall [boardname] [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for listall",
            },
            {
              name: ["-a", "--show-hidden"],
              description:
                "Show also boards marked as 'hidden' in the platform",
            },
          ],
        },
        {
          name: "search",
          description:
            "Search for a board in the Boards Manager using the specified keywords, example: 'arduino-cli board search [boardname] [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for search",
            },
            {
              name: ["-a", "--show-hidden"],
              description:
                "Show also boards marked as 'hidden' in the platform",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for board",
        },
      ],
    },
    {
      name: "burn-bootloader",
      description:
        "Upload the bootloader on the board using an external programmer, example: 'arduino-cli burn-bootloader -b arduino:avr:uno -P atmel_ice'",
      options: [
        {
          name: "--board-options",
          description:
            "List of board options separated by commas. Or can be used multiple times for multiple options",
          args: {},
        },
        {
          name: "--discovery-timeout",
          description:
            "Max time to wait for port discovery, example: '30s, 1m (default 1s)'",
          args: {
            name: "duration",
          },
        },
        {
          name: ["-b", "--fqbn"],
          description: "Fully Qualified Board Name, example: 'arduino:avr:uno'",
          args: {
            name: "FQBN",
            description: "Fully qualified board name",
            generators: FQBNs,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for burn-bootloader",
        },
        {
          name: ["-p", "--port"],
          description: "Upload port address, example: 'COM3 or /dev/ttyACM2'",
          args: {
            name: "port",
            description: "Arduino board port connection",
            generators: Ports,
          },
        },
        {
          name: ["-P", "--programmer"],
          description: "Programmer to use, example: 'atmel_ice'",
          args: {},
        },
        {
          name: ["-l", "--protocol"],
          description: "Upload port protocol, example: 'serial'",
          args: {},
        },
        {
          name: ["-v", "--verbose"],
          description: "Turns on verbose mode",
        },
        {
          name: ["-t", "--verify"],
          description: "Verify uploaded binary after upload",
        },
      ],
    },
    {
      name: "cache",
      description: "Arduino cache commands, example: 'arduino-cli cache clean'",
      args: {
        name: "clean",
        isOptional: true,
      },
      subcommands: [
        {
          name: "clean",
          description:
            "Delete contents of the directories.downloads folder, where archive files are staged during installation of libraries and boards platforms, example: 'arduino-cli cache clean [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for clean",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for cache",
        },
      ],
    },
    {
      name: "compile",
      description:
        "Compiles Arduino sketches, example: 'arduino-cli compile -b arduino:avr:uno /home/user/Arduino/MySketch'",
      options: [
        {
          name: "--board-options",
          description:
            "List of board options separated by commas. Or can be used multiple times for multiple option",
          args: {},
        },
        {
          name: "--build-cache-path",
          description:
            "Builds of 'core.a' are saved into this path to be cached and reused",
          args: {},
        },
        {
          name: "--build-path",
          description:
            "Path where to save compiled files. If omitted, a directory will be created in the default temporary path of your OS",
          args: {
            name: "filepath",
            template: "filepaths",
          },
        },
        {
          name: "--build-property",
          description:
            "Override a build property with a custom value. Can be used multiple times for multiple properties",
          args: {},
        },
        {
          name: "--clean",
          description:
            "Optional, cleanup the build folder and do not use any cached build",
        },
        {
          name: "--discovery-timeout",
          description:
            "Max time to wait for port discovery, example: '30s, 1m (default 1s)'",
          args: {
            name: "duration",
          },
        },
        {
          name: "--dump-profile",
          description:
            "Create and print a profile configuration from the build",
        },
        {
          name: "--encrypt-key",
          description:
            "The name of the custom encryption key to use to encrypt a binary during the compile process. Used only by the platforms that support it",
          args: {},
        },
        {
          name: ["e", "--export-binaries"],
          description:
            "If set built binaries will be exported to the sketch folder",
        },
        {
          name: ["-b", "--fqbn"],
          description: "Fully Qualified Board Name, example: 'arduino:avr:uno'",
          args: {
            name: "FQBN",
            description: "Fully qualified board name",
            generators: FQBNs,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for compile",
        },
        {
          name: "--keys-keychain",
          description:
            "The path of the dir to search for the custom keys to sign and encrypt a binary. Used only by the platforms that support it",
          args: {
            name: "filepath",
            template: ["filepaths", "folders"],
          },
        },
        {
          name: "--libraries",
          description:
            "Path to a collection of libraries. Can be used multiple times or entries can be comma separated",
          args: {
            name: "filepath",
            template: ["filepaths", "folders"],
          },
        },
        {
          name: "--library",
          description:
            "Path to a single library’s root folder. Can be used multiple times or entries can be comma separated",
          args: {
            name: "filepath",
            template: ["filepaths", "folders"],
          },
        },
        {
          name: "--only-compilation-database",
          description:
            "Just produce the compilation database, without actually compiling. All build commands are skipped except pre* hooks",
        },
        {
          name: "--optimize-for-debug",
          description:
            "Optional, optimize compile output for debugging, rather than for release",
        },
        {
          name: "--output-dir",
          description: "Save build artifacts in this directory",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: ["-p", "--port"],
          description: "Upload port address, example: 'COM3 or /dev/ttyACM2'",
          args: {
            name: "port",
            description: "Arduino board port connection",
            generators: Ports,
          },
        },
        {
          name: "--preprocess",
          description: "Print preprocessed code to stdout instead of compiling",
        },
        {
          name: ["-m", "--profile"],
          description: "Sketch profile to use",
          args: {},
        },
        {
          name: ["-P", "--programmer"],
          description: "Programmer to use, example: 'atmel_ice'",
          args: {},
        },
        {
          name: ["-l", "--protocol"],
          description: "Upload port protocol, example: 'serial'",
          args: {},
        },
        {
          name: "--quiet",
          description: "Optional, suppresses almost every output",
        },
        {
          name: "--show-properties",
          description:
            'Show build properties. The properties are expanded, use "--show-properties=unexpanded" if you want them exactly as they are defined. (default "disabled")',
          args: {},
        },
        {
          name: "--sign-key",
          description:
            "The name of the custom signing key to use to sign a binary during the compile process. Used only by the platforms that support it",
          args: {},
        },
        {
          name: ["-u", "--upload"],
          description: "Upload the binary after the compilation",
        },
        {
          name: ["-v", "--verbose"],
          description: "Optional, turns on verbose mode",
        },
        {
          name: ["-t", "--verify"],
          description: "Verify uploaded binary after the upload",
        },
        {
          name: "--warnings",
          description:
            'Optional, can be: none, default, more, all. Used to tell gcc which warning level to use (-W flag). (default "none")',
          args: {
            suggestions: [
              {
                name: "none",
                description: "Use warning level 'none'",
                icon: "fig://icon?type=alert",
              },
              {
                name: "default",
                description: "Use warning level 'default'",
                icon: "fig://icon?type=alert",
              },
              {
                name: "more",
                description: "Use warning level 'more'",
                icon: "fig://icon?type=alert",
              },
              {
                name: "all",
                description: "Use warning level 'all'",
                icon: "fig://icon?type=alert",
              },
            ],
            default: "none",
          },
        },
      ],
    },
    {
      name: "completion",
      description:
        "Generates completion scripts for various shells, example: 'arduino-cli completion [bash|zsh|fish|powershell] [--no-descriptions] [flags]'",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for completion",
        },
        {
          name: "--no-description",
          description:
            "Disable completion description for shells that support it",
        },
      ],
    },
    {
      name: "config",
      description:
        "Arduino configuration commands, example: 'arduino-cli config init'",
      args: {
        name: "init, dump...",
        isOptional: true,
      },
      subcommands: [
        {
          name: "add",
          description:
            "Adds one or more values to a setting, example: 'arduino-cli config add [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for add",
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a settings key and all its sub keys, example: 'arduino-cli config delete [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for delete",
            },
          ],
        },
        {
          name: "dump",
          description:
            "Prints the current configuration, example: 'arduino-cli config dump [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for dump",
            },
          ],
        },
        {
          name: "init",
          description:
            "Creates or updates the configuration file in the data directory or custom directory with the current configuration settings, example: 'arduino-cli config init [flags]'",
          options: [
            {
              name: "--dest-dir",
              description: "Sets where to save the configuration file",
              args: {
                name: "directory",
                template: "folders",
              },
            },
            {
              name: "--dest-file",
              description: "Sets where to save the configuration file",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: ["-h", "--help"],
              description: "Help for init",
            },
            {
              name: "--overwrite",
              description: "Overwrite existing config file",
            },
          ],
        },
        {
          name: "remove",
          description:
            "Removes one or more values from a setting, example: 'arduino-cli config remove [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for remove",
            },
          ],
        },
        {
          name: "set",
          description:
            "Sets a setting value, example: 'arduino-cli config set [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for set",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for config",
        },
      ],
    },
    {
      name: "core",
      description:
        "Arduino core operations, example: 'arduino-cli core update-index'",
      args: {
        name: "install, list...",
        isOptional: true,
      },
      subcommands: [
        {
          name: "download",
          description:
            "Downloads one or more cores and corresponding tool dependencies, example: 'arduino-cli core download [PACKAGER:ARCH[@VERSION]]... [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for download",
            },
          ],
        },
        {
          name: "install",
          description:
            "Installs one or more cores and corresponding tool dependencies, example: 'arduino-cli core install PACKAGER:ARCH[@VERSION]... [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for install",
            },
            {
              name: "--no-overwrite",
              description: "Do not overwrite already installed platforms",
            },
            {
              name: "--run-post-install",
              description:
                "Force run of post-install scripts (if the CLI is not running interactively)",
            },
            {
              name: "--run-pre-uninstall",
              description:
                "Force run of pre-uninstall scripts (if the CLI is not running interactively)",
            },
            {
              name: "--skip-post-install",
              description:
                "Force skip of post-install scripts (if the CLI is running interactively)",
            },
            {
              name: "--skip-pre-uninstall",
              description:
                "Force skip of pre-uninstall scripts (if the CLI is running interactively)",
            },
          ],
        },
        {
          name: "list",
          description:
            "Show the list of installed platforms, example: 'arduino-cli core list [flags]'",
          options: [
            {
              name: "all",
              description:
                "If set return all installable and installed cores, including manually installed",
            },
            {
              name: ["-h", "--help"],
              description: "Help for list",
            },
            {
              name: "--updatable",
              description: "List updatable platforms",
            },
          ],
        },
        {
          name: "search",
          description:
            "Search for a core in Boards Manager using the specified keywords, example: 'arduino-cli core search <keywords...> [flags]'",
          options: [
            {
              name: "all",
              description: "Show all available core versions",
            },
            {
              name: ["-h", "--help"],
              description: "Help for search",
            },
          ],
        },
        {
          name: "uninstall",
          description:
            "Uninstalls one or more cores and corresponding tool dependencies if no longer used, example: 'arduino-cli core uninstall PACKAGER:ARCH ... [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for uninstall",
            },
            {
              name: "--run-post-install",
              description:
                "Force run of post-install scripts (if the CLI is not running interactively)",
            },
            {
              name: "--run-pre-uninstall",
              description:
                "Force run of pre-uninstall scripts (if the CLI is not running interactively)",
            },
            {
              name: "--skip-post-install",
              description:
                "Force skip of post-install scripts (if the CLI is running interactively)",
            },
            {
              name: "--skip-pre-uninstall",
              description:
                "Force skip of pre-uninstall scripts (if the CLI is running interactively)",
            },
          ],
        },
        {
          name: "update-index",
          description:
            "Updates the index of cores to the latest version, example: 'arduino-cli core update-index [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for update-index",
            },
          ],
        },
        {
          name: "upgrade",
          description:
            "Upgrades one or all installed platforms to the latest version, example: 'arduino-cli core upgrade [PACKAGER:ARCH] ... [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for upgrade",
            },
            {
              name: "--run-post-install",
              description:
                "Force run of post-install scripts (if the CLI is not running interactively)",
            },
            {
              name: "--run-pre-uninstall",
              description:
                "Force run of pre-uninstall scripts (if the CLI is not running interactively)",
            },
            {
              name: "--skip-post-install",
              description:
                "Force skip of post-install scripts (if the CLI is running interactively)",
            },
            {
              name: "--skip-pre-uninstall",
              description:
                "Force skip of pre-uninstall scripts (if the CLI is running interactively)",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for core",
        },
      ],
    },
    {
      name: "daemon",
      description:
        "Run as a daemon on port: 50051, the initialization of cores and libraries is done only once, example: 'arduino-cli daemon [flags]'",
      options: [
        {
          name: "--daemonize",
          description:
            "Do not terminate daemon process if the parent process dies",
        },
        {
          name: "--debug",
          description: "Enable debug logging of gRPC calls",
        },
        {
          name: "--debug-file",
          description: "Append debug logging to the specified file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--debug-filter",
          description: "Display only the provided gRPC calls",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Help for daemon",
        },
        {
          name: "--port",
          description: "The TCP port the daemon will listen to",
          args: {
            name: "port",
            description: "Arduino board port connection",
            generators: Ports,
          },
        },
      ],
    },
    {
      name: "debug",
      description:
        "Debug Arduino sketches. (this command opens an interactive gdb session), example: '  arduino-cli debug -b arduino:samd:mkr1000 -P atmel_ice /home/user/Arduino/MySketch'",
      args: {
        name: "check",
        isOptional: true,
      },
      subcommands: [
        {
          name: "check",
          description:
            "Check if the given board/programmer combination supports debugging, example: '  arduino-cli debug check -b arduino:samd:mkr1000 -P atmel_ice'",
          options: [
            {
              name: "--board-options",
              description:
                "List of board options separated by commas. Or can be used multiple times for multiple options",
              args: {},
            },
            {
              name: "--discovery-timeout",
              description:
                "Max time to wait for port discovery, example: '30s, 1m (default 1s)'",
              args: {
                name: "duration",
              },
            },
            {
              name: ["-b", "--fqbn"],
              description:
                "Fully Qualified Board Name, example: 'arduino:avr:uno'",
              args: {
                name: "FQBN",
                description: "Fully qualified board name",
                generators: FQBNs,
              },
            },
            {
              name: ["-h", "--help"],
              description: "Help for check",
            },
            {
              name: "--interpreter",
              description:
                'Debug interpreter, example: console, mi, mi1, mi2, mi3 (default "console")',
              args: {
                suggestions: [
                  {
                    name: "console",
                    description: "Debug interpreter 'console'",
                  },
                  {
                    name: "mi",
                    description: "Debug interpreter 'mi'",
                  },
                  {
                    name: "mi1",
                    description: "Debug interpreter 'mi1'",
                  },
                  {
                    name: "mi2",
                    description: "Debug interpreter 'mi2'",
                  },
                  {
                    name: "mi3",
                    description: "Debug interpreter 'mi3'",
                  },
                ],
                default: "console",
              },
            },
            {
              name: ["-p", "--port"],
              description:
                "Upload port address, example: 'COM3 or /dev/ttyACM2'",
              args: {
                name: "port",
                description: "Arduino board port connection",
                generators: Ports,
              },
            },
            {
              name: ["-P", "--programmer"],
              description: "Programmer to use, example: 'atmel_ice'",
              args: {},
            },
            {
              name: ["-l", "--protocol"],
              description: "Upload port protocol, example: 'serial'",
              args: {},
            },
          ],
        },
      ],
      options: [
        {
          name: "--board-options",
          description:
            "List of board options separated by commas. Or can be used multiple times for multiple options",
          args: {},
        },
        {
          name: "--discovery-timeout",
          description:
            "Max time to wait for port discovery, example: '30s, 1m (default 1s)'",
          args: {
            name: "duration",
          },
        },
        {
          name: ["-b", "--fqbn"],
          description: "Fully Qualified Board Name, example: 'arduino:avr:uno'",
          args: {
            name: "FQBN",
            description: "Fully qualified board name",
            generators: FQBNs,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for debug",
        },
        {
          name: ["-I", "--info"],
          description:
            "Show metadata about the debug session instead of starting the debugger",
        },
        {
          name: "--input-dir",
          description: "Directory containing binaries for debug",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--interpreter",
          description:
            'Debug interpreter, example: console, mi, mi1, mi2, mi3 (default "console")',
          args: {
            suggestions: [
              {
                name: "console",
                description: "Debug interpreter 'console'",
              },
              {
                name: "mi",
                description: "Debug interpreter 'mi'",
              },
              {
                name: "mi1",
                description: "Debug interpreter 'mi1'",
              },
              {
                name: "mi2",
                description: "Debug interpreter 'mi2'",
              },
              {
                name: "mi3",
                description: "Debug interpreter 'mi3'",
              },
            ],
            default: "console",
          },
        },
        {
          name: ["-p", "--port"],
          description: "Upload port address, example: 'COM3 or /dev/ttyACM2'",
          args: {
            name: "port",
            description: "Arduino board port connection",
            generators: Ports,
          },
        },
        {
          name: ["-P", "--programmer"],
          description: "Programmer to use, example: 'atmel_ice'",
          args: {},
        },
        {
          name: ["-l", "--protocol"],
          description: "Upload port protocol, example: 'serial'",
          args: {},
        },
      ],
    },
    {
      name: "help",
      description:
        "Help provides help for any command in the application, example: 'arduino-cli help [path to command]' for full details",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for help",
        },
      ],
    },
    {
      name: "lib",
      description:
        "Arduino commands about libraries, example: 'arduino-cli lib install AudioZero'",
      args: {
        name: "deps, update-index...",
        isOptional: true,
      },
      subcommands: [
        {
          name: "deps",
          description:
            "Check dependencies status for the specified library, example: 'arduino-cli lib deps LIBRARY[@VERSION_NUMBER]... [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for deps",
            },
          ],
        },
        {
          name: "download",
          description:
            "Downloads one or more libraries without installing them, example: 'arduino-cli lib download [LIBRARY_NAME]... [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for download",
            },
          ],
        },
        {
          name: "examples",
          description:
            "Shows the list of the examples for libraries. A name may be given as argument to search a specific library, example: 'arduino-cli lib examples [LIBRARY_NAME] [flags]'",
          options: [
            {
              name: "--board-options",
              description:
                "List of board options separated by commas. Or can be used multiple times for multiple options",
              args: {},
            },
            {
              name: ["-b", "--fqbn"],
              description:
                "Fully Qualified Board Name, example: 'arduino:avr:uno'",
              args: {
                name: "FQBN",
                description: "Fully qualified board name",
                generators: FQBNs,
              },
            },
            {
              name: ["-h", "--help"],
              description: "Help for examples",
            },
          ],
        },
        {
          name: "install",
          description:
            "Installs one or more specified libraries into the system, example: 'arduino-cli lib install LIBRARY[@VERSION_NUMBER]... [flags]'",
          options: [
            {
              name: "--git-url",
              description: "Enter git url for libraries hosted on repositories",
            },
            {
              name: ["-h", "--help"],
              description: "Help for install",
            },
            {
              name: "--install-in-builtin-dir",
              description: "Install libraries in the IDE-Builtin directory",
            },
            {
              name: "--no-deps",
              description: "Do not install dependencies",
            },
            {
              name: "--no-overwrite",
              description: "Do not overwrite already installed libraries",
            },
            {
              name: "--zip-path",
              description: "Enter a path to zip file",
            },
          ],
        },
        {
          name: "list",
          description:
            "Shows a list of installed libraries. If the LIBNAME parameter is specified the listing is limited to that specific library. By default the libraries provided as built-in by platforms/core are not listed, they can be listed by adding the --all flag, example: 'arduino-cli lib list [LIBNAME] [flags]'",
          options: [
            {
              name: "--all",
              description:
                "Include built-in libraries (from platforms and IDE) in listing",
            },
            {
              name: "--board-options",
              description:
                "List of board options separated by commas. Or can be used multiple times for multiple options",
              args: {},
            },
            {
              name: ["-b", "--fqbn"],
              description:
                "Fully Qualified Board Name, example: 'arduino:avr:uno'",
              args: {
                name: "FQBN",
                description: "Fully qualified board name",
                generators: FQBNs,
              },
            },
            {
              name: ["-h", "--help"],
              description: "Help for list",
            },
            {
              name: "--updatable",
              description: "List updatable libraries",
            },
          ],
        },
        {
          name: "search",
          description:
            "Search for one or more libraries data (case insensitive search), examples: 'arduino-cli lib search [LIBRARY_NAME] [flags]'",
          options: [
            {
              name: ["--h", "--help"],
              description: "Help for search",
            },
            {
              name: "--names",
              description: "Show library names only",
            },
            {
              name: "--omit-releases-details",
              description:
                "Omit library details far all versions except the latest (produce a more compact JSON output)",
            },
          ],
        },
        {
          name: "uninstall",
          description:
            "Uninstalls one or more libraries, example: 'arduino-cli lib uninstall LIBRARY_NAME... [flags]'",
          options: [
            {
              name: ["--h", "--help"],
              description: "Help for uninstall",
            },
          ],
        },
        {
          name: "update-index",
          description:
            "Updates the libraries index to the latest version, example: 'arduino-cli lib update-index [flags]'",
          options: [
            {
              name: ["--h", "--help"],
              description: "Help for update-index",
            },
          ],
        },
        {
          name: "upgrade",
          description:
            "Upgrades installed libraries. This command upgrades an installed library to the latest available version. Multiple libraries can be passed separated by a space. If no arguments are provided, the command will upgrade all the installed libraries where an update is available, example: 'arduino-cli lib upgrade [flags]'",
          options: [
            {
              name: ["--h", "--help"],
              description: "Help for upgrade",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for lib",
        },
      ],
    },
    {
      name: "monitor",
      description:
        "Open a communication port with a board, example: 'arduino-cli monitor [flags]'",
      options: [
        {
          name: "--board-options",
          description:
            "List of board options separated by commas. Or can be used multiple times for multiple options",
          args: {},
        },
        {
          name: ["-c", "--config"],
          description:
            "Configure communication port settings. The format is <ID>=<value>[,<ID>=<value>]",
          args: {},
        },
        {
          name: "--describe",
          description: "Show all the settings of the communication port",
        },
        {
          name: "--discovery-timeout",
          description:
            "Max time to wait for port discovery, example: '30s, 1m (default 1s)'",
          args: {
            name: "duration",
          },
        },
        {
          name: ["-b", "--fqbn"],
          description: "Fully Qualified Board Name, example: 'arduino:avr:uno'",
          args: {
            name: "FQBN",
            description: "Fully qualified board name",
            generators: FQBNs,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for monitor",
        },
        {
          name: ["-p", "--port"],
          description: "Upload port address, example: 'COM3 or /dev/ttyACM2'",
          args: {
            name: "port",
            description: "Arduino board port connection",
            generators: Ports,
          },
        },
        {
          name: ["-l", "--protocol"],
          description: "Upload port protocol, example: 'serial'",
          args: {},
        },
        {
          name: ["-q", "--quiet"],
          description: "Run in silent mode, show only monitor input and output",
        },
        {
          name: "--raw",
          description: "Set terminal in raw mode (unbuffered)",
        },
        {
          name: "--timestamp",
          description: "Timestamp each incoming line",
        },
      ],
    },
    {
      name: "outdated",
      description:
        "This commands shows a list of installed cores and/or libraries that can be upgraded. If nothing needs to be updated the output is empty, example: 'arduino-cli outdated [flags]'",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for outdated",
        },
      ],
    },
    {
      name: "sketch",
      description:
        "Arduino CLI sketch commands, example: 'arduino-cli sketch new MySketch'",
      args: {
        name: "archive, new",
        isOptional: true,
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for sketch",
        },
      ],
      subcommands: [
        {
          name: "archive",
          description:
            "Creates a zip file containing all sketch files, example: 'arduino-cli sketch archive <sketchPath> <archivePath> [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for archive",
            },
            {
              name: "--include-build-dir",
              description: "Includes build in directory in the archive",
            },
            {
              name: ["-f", "--overwrite"],
              description: "Overwrites an already existing archive",
            },
          ],
        },
        {
          name: "new",
          description:
            "Create a new Sketch, example: 'arduino-cli sketch new [flags]'",
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for archive",
            },
            {
              name: ["-f", "--overwrite"],
              description: "Overwrites an already existing .ino sketch",
            },
          ],
        },
      ],
    },
    {
      name: "update",
      description:
        "Updates the index of cores and libraries to the latest versions, example: 'arduino-cli update [flags]'",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for update",
        },
        {
          name: "--show-outdated",
          description: "Show outdated cores and libraries after index update",
        },
      ],
    },
    {
      name: "upgrade",
      description:
        "Upgrades installed cores and libraries to latest version, example: 'arduino-cli upgrade [flags]'",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for update",
        },
        {
          name: "--run-post-install",
          description:
            "Force run of post-install scripts (if the CLI is not running interactively)",
        },
        {
          name: "--run-pre-uninstall",
          description:
            "Force run of pre-uninstall scripts (if the CLI is not running interactively)",
        },
        {
          name: "--skip-post-install",
          description:
            "Force skip of post-install scripts (if the CLI is running interactively)",
        },
        {
          name: "--skip-pre-uninstall",
          description:
            "Force skip of pre-uninstall scripts (if the CLI is running interactively)",
        },
      ],
    },
    {
      name: "upload",
      description:
        "Upload Arduino sketches. This does NOT compile the sketch prior to upload, example: 'arduino-cli upload [flags]'",
      options: [
        {
          name: "--board-options",
          description:
            "List of board options separated by commas. Or can be used multiple times for multiple options",
          args: {},
        },
        {
          name: "--discovery-timeout",
          description:
            "Max time to wait for port discovery, example: '30s, 1m (default 1s)'",
          args: {
            name: "duration",
          },
        },
        {
          name: ["-b", "--fqbn"],
          description: "Fully Qualified Board Name, example: 'arduino:avr:uno'",
          args: {
            name: "FQBN",
            description: "Fully qualified board name",
            generators: FQBNs,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for upload",
        },
        {
          name: "--input-dir",
          description: "Directory containing binaries to upload",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: ["-i", "--input-file"],
          description: "Binary file to upload",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: ["-p", "--port"],
          description: "Binary file to upload, example: 'COM3 or /dev/ttyACM2'",
          args: {
            name: "port",
            description: "Arduino board port connection",
            generators: Ports,
          },
        },
        {
          name: ["-m", "--profile"],
          description: "Sketch profile to use",
          args: {},
        },
        {
          name: ["-P", "--programmer"],
          description: "Programmer to use, example: 'atmel_ice'",
          args: {},
        },
        {
          name: ["-l", "--protocol"],
          description: "Upload port protocol, example: 'serial'",
          args: {},
        },
        {
          name: ["-F", "--upload-field"],
          description:
            "Set a value for a field required to upload, 'key=value'",
          args: {},
        },
        {
          name: ["-v", "--verbose"],
          description: "Optional, turns on verbose mode",
        },
        {
          name: ["-t", "--verify"],
          description: "Verify uploaded binary after the upload",
        },
      ],
    },
    {
      name: "version",
      description:
        "Shows the version number of Arduino CLI which is installed on your system, example: 'arduino-cli version [flags]'",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for version",
        },
      ],
    },
  ],
  options: [
    {
      name: "--additional-urls",
      description:
        "Comma-separated list of additional URLs for the Boards Manager",
      args: {},
      isPersistent: true,
    },
    {
      name: "--config-file",
      description:
        "The custom config file (if not specified the default will be used)",
      args: {
        name: "file",
        template: "filepaths",
      },
      isPersistent: true,
    },
    {
      name: "--format",
      description:
        "The output format for the logs, can be: text, json, jsonmini, yaml (default 'text')",
      args: {
        name: "data_format",
        suggestions: [
          {
            name: "text",
            description: "Output in 'text'",
            icon: "fig://icon?type=string",
          },
          {
            name: "json",
            description: "Output in 'json'",
            icon: "fig://icon?type=string",
          },
          {
            name: "jsonmini",
            description: "Output in 'jsonmini'",
            icon: "fig://icon?type=string",
          },
          {
            name: "yaml",
            description: "Output in 'yaml'",
            icon: "fig://icon?type=string",
          },
        ],
        default: "text",
      },
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Help for arduino-cli",
    },
    {
      name: "--log",
      description: "Print the logs on the standard output",
      isPersistent: true,
    },
    {
      name: "--log-file",
      description: "Path to the file where logs will be written",
      args: {
        name: "filepath",
        template: "filepaths",
      },
      isPersistent: true,
    },
    {
      name: "--log-format",
      description: "The output format for the logs, can be: text, json",
      args: {
        name: "format",
        suggestions: [
          {
            name: "text",
            description: "Output in 'text'",
            icon: "fig://icon?type=string",
          },
          {
            name: "json",
            description: "Output in 'json'",
            icon: "fig://icon?type=string",
          },
        ],
      },
      isPersistent: true,
    },
    {
      name: "--log-level",
      description:
        "Messages with this level and above will be logged. Valid levels are: trace, debug, info, warn, error, fatal, panic",
      args: {
        name: "level",
        suggestions: [
          {
            name: "trace",
            description: "Log level of 'trace",
          },
          {
            name: "debug",
            description: "Log level of 'debug",
          },
          {
            name: "info",
            description: "Log level of 'info'",
          },
          {
            name: "warn",
            description: "Log level of 'warn'",
          },
          {
            name: "error",
            description: "Log level of 'error'",
          },
          {
            name: "fatal",
            description: "Log level of 'fatal'",
          },
          {
            name: "panic",
            description: "Log level of 'panic'",
          },
        ],
        default: "text",
      },
      isPersistent: true,
    },
    {
      name: "--no-color",
      description: "Disable colored output",
      isPersistent: true,
    },
  ],
  additionalSuggestions: [
    {
      name: "compile -b",
      insertValue: "compile -b {cursor}",
      description: "Compile arduino shortcut",
      icon: "fig://template?color=33ccc9&badge=∞",
    },
  ],
};

export default completionSpec;
