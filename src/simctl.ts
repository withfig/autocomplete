const completionSpec: Fig.Spec = {
  name: "simctl",
  description: "",
  subcommands: [
    {
      name: "addmedia",
      description:
        "Add photos, live photos, videos, or contacts to the library of a device",
      args: [
        {
          name: "device",
        },
        {
          name: "path",
          isVariadic: true,
        },
      ],
    },
    {
      name: "boot",
      description: "Boot a device or device pair",
      options: [
        {
          name: "arch",
          description:
            "Specify the architecture to use when booting the simulator (eg: 'arm64' or 'x86_64')",
          requiresSeparator: "=",
          isRepeatable: true,
        },
        {
          name: "disabledJob",
          description:
            "Disables the given launchd job. Multiple jobs can be disabled by passing multiple flags",
          requiresSeparator: "=",
          isRepeatable: true,
        },
        {
          name: "enabledJob",
          description:
            "Enables the given launchd job when it would normally be disabled. Multiple jobs can be enabled by passing multiple flags",
          requiresSeparator: "=",
          isRepeatable: true,
        },
      ],
      args: {
        name: "device",
      },
    },
    {
      name: "clone",
      description: "Clone an existing device",
      args: [
        {
          name: "device",
        },
        {
          name: "new name",
        },
        {
          name: "destination device set",
          isVariadic: true,
        },
      ],
    },
    {
      name: "create",
      description: "Create a new device",
      args: [
        {
          name: "name",
        },
        {
          name: "device type id",
          description:
            "A valid available device type. Find these by running 'xcrun simctl list devicetypes'. Examples: ('iPhone X', 'com.apple.CoreSimulator.SimDeviceType.iPhone-X')",
        },
        {
          name: "runtime id",
          isVariadic: true,
          description:
            "A valid and available runtime. Find these by running 'xcrun simctl list runtimes'. If no runtime is specified the newest runtime compatible with the device type is chosen. Examples: ('watchOS3', 'watchOS3.2', 'watchOS 3.2', 'com.apple.CoreSimulator.SimRuntime.watchOS-3-2', '/Volumes/path/to/Runtimes/watchOS 3.2.simruntime')",
        },
      ],
    },
    {
      name: "delete",
      description:
        "Delete specified devices, unavailable devices, or all devices",
      args: [
        {
          name: "device",
          isVariadic: true,
        },
        {
          name: "unavailable",
          description:
            "Specifying unavailable will delete devices that are not supported by the current Xcode SDK",
        },
        {
          name: "all",
        },
      ],
    },
    {
      name: "diagnose",
      description: "Collect diagnostic information and logs",
      options: [
        {
          name: "b",
          description:
            "Do NOT show the resulting archive in a Finder window upon completion",
        },
        {
          name: "X",
          description:
            "Run all diagnostics with no timeout. It ignores the --timeout value if it is specified",
          exclusiveOn: ["timeout"],
        },
        {
          name: "timeout",
          description:
            "Specify a duration (in seconds) to wait for the log collection before timeout",
          requiresSeparator: "=",
        },
        {
          name: "output",
          description:
            "Specify the output directory. If not provided the temporary directory is used",
          requiresSeparator: "=",
        },
        {
          name: "no-archive",
          description:
            "Do not create an archive, leave the collected files uncompressed",
        },
        {
          name: "all-logs",
          description: "Include all device logs, even for non-booted devices",
        },
        {
          name: "data-containers",
          description:
            "Include booted device(s) data directory. Warning: May include private information, app data containers, and increases the size of the archive! Default is NOT to collect the data container",
        },
        {
          name: "udid",
          description:
            "Collect diagnostics only from the specified device. This option may be specified more than once to consider multiple devices. The --all-logs option causes all --udid options to be ignored",
          requiresSeparator: "=",
          isRepeatable: true,
        },
      ],
    },
    {
      name: "erase",
      description: "Erase a device's contents and settings",
      args: [
        {
          name: "device",
          isVariadic: true,
        },
        {
          name: "all",
          description: "Specifying all will erase all existing devices",
        },
      ],
    },
    {
      name: "get_app_container",
      description: "Print the path of the installed app's container",
      args: [
        {
          name: "device",
        },
        {
          name: "app bundle identifier",
        },
        {
          name: "container",
          isVariadic: true,
          loadSpec: "getAppContainerContainerSpec",
        },
      ],
    },
    {
      name: "getenv",
      description: "Print an environment variable from a running device",
      args: [
        {
          name: "device",
        },
        {
          name: "variable name",
        },
      ],
    },
    {
      name: "help",
      description: "Prints the usage for a given subcommand",
      subcommands: [
        {
          name: "subcommand",
          loadSpec: "simctl",
        },
      ],
    },
    {
      name: "icloud_sync",
      description: "Trigger iCloud sync on a device",
      args: {
        name: "device",
      },
    },
    {
      name: "install",
      description: "Install an app on a device",
      args: [
        {
          name: "device",
        },
        {
          name: "path",
        },
      ],
    },
    {
      name: "install_app_data",
      description:
        "Install an xcappdata package to a device, replacing the current contents of the container",
      args: [
        {
          name: "device",
        },
        {
          name: "path to xcappdata package",
        },
      ],
    },
    {
      name: "io",
      description: "Set up a device IO operation",
      args: [
        {
          name: "device",
        },
        {
          name: "arguments",
        },
      ],
      subcommands: [
        {
          name: "",
          // eslint-disable-next-line @withfig/fig-linter/conventional-descriptions
          description: "operation",
          subcommands: [
            {
              name: "enumerate",
              description: "Lists all available IO ports and descriptor states",
              options: [
                {
                  name: "poll",
                  description: "Poll after enumeration",
                },
              ],
            },
            {
              name: "poll",
              description: "Polls all available IO ports for events",
            },
            {
              name: "recordVideo",
              description:
                "Records the display to a QuickTime movie at the specified file or url",
              args: {
                name: "file or url",
              },
              options: [
                {
                  name: "codec",
                  description:
                    "Specifies the codec type: 'h264' or 'hevc'. Default is 'hevc'",
                  requiresSeparator: "=",
                },
                {
                  name: "display",
                  description:
                    // eslint-disable-next-line @withfig/fig-linter/conventional-descriptions
                    "iOS: supports 'internal' or 'external'. Default is 'internal'. tvOS: supports only 'external' watchOS: supports only 'internal'",
                  requiresSeparator: "=",
                },
                {
                  name: "mask",
                  description:
                    "For non-rectangular displays, handle the mask by policy: ignored: The mask is ignored and the unmasked framebuffer is saved. alpha: Not supported, but retained for compatibility; the mask is rendered black. black: The mask is rendered black",
                  requiresSeparator: "=",
                },
                {
                  name: "force",
                  description:
                    "Force the output file to be written to, even if the file already exists",
                },
              ],
            },
            {
              name: "screenshot",
              description:
                "Saves a screenshot as a PNG to the specified file or url(use '-' for stdout)",
              args: {
                name: "file or url",
              },
              options: [
                {
                  name: "type",
                  description:
                    "Can be 'png', 'tiff', 'bmp', 'gif', 'jpeg'. Default is png",
                  requiresSeparator: "=",
                },
                {
                  name: "display",
                  description:
                    // eslint-disable-next-line @withfig/fig-linter/conventional-descriptions
                    "iOS: supports 'internal' or 'external'. Default is 'internal'. tvOS: supports only 'external' watchOS: supports only 'internal'. You may also specify a port by UUID",
                  requiresSeparator: "=",
                },
                {
                  name: "mask",
                  description:
                    "For non-rectangular displays, handle the mask by policy: ignored: The mask is ignored and the unmasked framebuffer is saved. alpha: The mask is used as premultiplied alpha. black: The mask is rendered black",
                  requiresSeparator: "=",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "keychain",
      description: "Manipulate a device's keychain",
      subcommands: [
        {
          name: "add-root-cert",
          description: "Add a certificate to the trusted root store",
          args: {
            name: "path",
          },
        },
        {
          name: "add-cert",
          description: "Add a certificate to the keychain",
          args: {
            name: "path",
          },
        },
        {
          name: "reset",
          description: "Reset the keychain",
        },
      ],
    },
    {
      name: "launch",
      description: "Launch an application by identifier on a device",
      args: [
        {
          name: "device",
        },
        {
          name: "app bundle identifier",
        },
        {
          name: "argv",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: ["w", "wait-for-debugger"],
        },
        {
          name: "console",
          description:
            "Block and print the application's stdout and stderr to the current terminal. Signals received by simctl are passed through to the application. (Cannot be combined with --stdout or --stderr)",
          exclusiveOn: ["console-pty", "stdout", "stderr"],
        },
        {
          name: "console-pty",
          description:
            "Block and print the application's stdout and stderr to the current terminal via a PTY. Signals received by simctl are passed through to the application. (Cannot be combined with --stdout or --stderr)",
          exclusiveOn: ["console", "stdout", "stderr"],
        },
        {
          name: "stdout",
          description: "Redirect the application's standard output to a file",
          requiresSeparator: "=",
          args: {
            name: "path",
          },
          exclusiveOn: ["console", "console-pty"],
        },
        {
          name: "stderr",
          description: "Redirect the application's standard error to a file",
          requiresSeparator: "=",
          args: {
            name: "path",
          },
          exclusiveOn: ["console", "console-pty"],
        },
        {
          name: "terminate-running-process",
          description:
            "Terminate any running copy of the application. Note: Log output is often directed to stderr, not stdout",
        },
      ],
    },
    {
      name: "list",
      description:
        "List available devices, device types, runtimes, or device pairs",
      args: [
        {
          name: "type",
          suggestions: ["devices", "deviceTypes", "runtimes", "pairs"],
        },
        {
          name: "search term",
          suggestions: ["available"],
        },
      ],
      options: [
        {
          name: ["j", "json"],
          description: "Print as JSON",
        },
        {
          name: ["e", "no-escape-slashes"],
          description: "Encode slashes without escapes in JSON output",
        },
        {
          name: "v",
          description: "More verbose output",
        },
      ],
    },
    {
      name: "location",
      description: "Control a device's simulated location",
      args: [
        {
          name: "device",
        },
        {
          name: "empty",
        },
      ],
      subcommands: [
        {
          name: "list",
          description: "List available simulation scenarios",
        },
        {
          name: "clear",
          description:
            "Stop any running scenario and clear any simulated location",
        },
        {
          name: "set",
          description: "Set the location to a specific latitude and longitude",
          args: {
            name: "lat,lon",
          },
        },
        {
          name: "run",
          description:
            "Run a simulated location scenario (use the list action to get a list of scenarios)",
          args: {
            name: "scenario",
          },
        },
        {
          name: "start",
          description:
            "Set the location to a series of waypoints specified as 'lat,lon' pairs, interpolating between them over time.\nAt least two waypoints are required. Use '-' to read waypoints from stdin, one waypoint per li\nSpeed specifies how quickly to move between waypoints in meters per second. If not specified 20m/s is us\nThe system will issue location updates along the path between each pair of waypoints. Use distance or interval to \ncontrol how often those updates are issued. Distance will issue an update every <meters> travelled without regard\nfor the time between updates. Interval will issue updates at fixed times without regard for how much\nthe location moves between updates.\nIf neither are specified an interval of 1.0 seconds is used. If both are specified the system picks on\nExample simulating a direct line between San Francisco and New York City, with updates every km:\nset --distance=1000 --speed=260 37.629538,-122.395733 40.628083,-73.768254",
          args: {
            name: "lat,lon",
            isVariadic: true,
          },
          options: [
            {
              name: "speed",
              requiresSeparator: "=",
            },
            {
              name: "distance",
              requiresSeparator: "=",
            },
            {
              name: "interval",
              requiresSeparator: "=",
            },
          ],
        },
      ],
    },
    {
      name: "logverbose",
      description:
        "Enable or disable verbose logging for a device.\nNOTE: You may need to reboot the affected device before logging changes will be effective",
      args: [
        {
          name: "device",
          description:
            "The device. If not provided all booted devices are affected",
        },
        {
          name: "enable/disable",
          description: "Enable or Disable verbose logging",
          suggestions: ["enable", "disable"],
        },
      ],
    },
    {
      name: "openurl",
      description: "Open a URL in a device",
      args: [
        {
          name: "device",
        },
        {
          name: "URL",
        },
      ],
    },
    {
      name: "pair",
      description: "Create a new watch and phone pair",
      args: [
        {
          name: "watch device",
        },
        {
          name: "phone device",
        },
      ],
    },
    {
      name: "pair_activate",
      description: "Set a given pair as active",
      args: {
        name: "pair",
      },
    },
    {
      name: "pbcopy",
      description: "Copy standard input onto the device pasteboard",
      args: {
        name: "device of 'host'",
      },
      options: [
        {
          name: "v",
        },
      ],
    },
    {
      name: "pbpaste",
      description:
        "Print the contents of the device's pasteboard to standard output",
      args: {
        name: "device of 'host'",
      },
      options: [
        {
          name: "v",
        },
      ],
    },
    {
      name: "pbsync",
      description: "Sync the pasteboard content from one pasteboard to another",
      args: [
        {
          name: "source device or 'host'",
        },
        {
          name: "destination device or 'host'",
        },
      ],
      options: [
        {
          name: "p",
          description:
            "Causes simctl to use promise data for secondary types.  simctl will continue to run to provide that promise data until something else replaces it on the pasteboard",
        },
        {
          name: "v",
        },
      ],
    },
    {
      name: "privacy",
      description: "Grant, revoke, or reset privacy and permissions",
      args: [
        {
          name: "device",
        },
        {
          name: "action",
          description: "",
          suggestions: ["grant", "revoke", "reset"],
        },
        {
          name: "service",
          description: "",
          suggestions: [
            "all",
            "calendar",
            "contacts-limited",
            "contacts",
            "location",
            "location-always",
            "photos-add",
            "photos",
            "media-library",
            "microphone",
            "motion",
            "reminders",
            "siri",
          ],
        },
        {
          name: "bundle identifier",
          description: "The bundle identifier of the target application",
        },
      ],
    },
    {
      name: "push",
      description: "Send a simulated push notification",
      args: [
        {
          name: "device",
        },
        {
          name: "bundle identifier",
          description:
            "The bundle identifier of the target application If the payload file contains a 'Simulator Target Bundle' top-level key this parameter may be omitted. If both are provided this argument will override the value from the payload",
        },
        {
          name: "json file",
          description:
            "Path to a JSON payload or '-' to read from stdin. The payload must:\n- Contain an object at the top level.\n- Contain an 'aps' key with valid Apple Push Notification values.\n- Be 4096 bytes or less",
          suggestions: ["-"],
        },
      ],
    },
    {
      name: "rename",
      description: "Rename a device",
      args: [
        {
          name: "device",
        },
        {
          name: "name",
        },
      ],
    },
    {
      name: "runtime",
      description: "Perform operations on runtimes",
      subcommands: [
        {
          name: "add",
          args: {
            name: "path",
          },
          options: [
            {
              name: "m",
              description: "",
            },
            {
              name: "a",
              description: "",
            },
          ],
        },
        {
          name: "delete",
        },
      ],
    },
    {
      name: "shutdown",
      description: "Shutdown a device",
    },
    {
      name: "spawn",
      description:
        "Spawn a process by executing a given executable on a device",
    },
    {
      name: "status_bar",
      description: "Set or clear status bar overrides",
    },
    {
      name: "terminate",
      description: "Terminate an application by identifier on a device",
    },
    {
      name: "ui",
      description: "Get or Set UI options",
    },
    {
      name: "uninstall",
      description: "Uninstall an app from a device",
    },
    {
      name: "unpair",
      description: "Unpair a watch and phone pair",
    },
    {
      name: "upgrade",
      description: "Upgrade a device to a newer runtime",
    },
  ],
};

const getAppContainerContainerSpec: Fig.Spec = {
  name: "container",
  args: [
    {
      name: "app",
      description: "The .app bundle",
    },
    {
      name: "data",
      description: "The application's data container",
    },
    {
      name: "groups",
      description: "The App Group containers",
    },
    {
      name: "<group identifier>",
      description: "A specific App Group container",
    },
  ],
};
const listTypeSpec: Fig.Spec = {
  name: "type",
  args: [
    {
      name: "app",
      description: "The .app bundle",
    },
    {
      name: "data",
      description: "The application's data container",
    },
    {
      name: "groups",
      description: "The App Group containers",
    },
    {
      name: "<group identifier>",
      description: "A specific App Group container",
    },
  ],
};
export default completionSpec;
