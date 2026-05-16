import { describe } from "node:test";

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
      args: {
        name: "device",
      },
      options: [
        {
          name: "--arch",
          description:
            "Specify the architecture to use when booting the simulator (eg: 'arm64' or 'x86_64')",
          requiresSeparator: "=",
          isRepeatable: true,
        },
        {
          name: "--disabledJob",
          description:
            "Disables the given launchd job. Multiple jobs can be disabled by passing multiple flags",
          requiresSeparator: "=",
          isRepeatable: true,
        },
        {
          name: "--enabledJob",
          description:
            "Enables the given launchd job when it would normally be disabled. Multiple jobs can be enabled by passing multiple flags",
          requiresSeparator: "=",
          isRepeatable: true,
        },
      ],
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
          name: "-b",
          description:
            "Do NOT show the resulting archive in a Finder window upon completion",
        },
        {
          name: "-X",
          description:
            "Run all diagnostics with no timeout. It ignores the --timeout value if it is specified",
          exclusiveOn: ["timeout"],
        },
        {
          name: "--timeout",
          description:
            "Specify a duration (in seconds) to wait for the log collection before timeout",
          requiresSeparator: "=",
        },
        {
          name: "--output",
          description:
            "Specify the output directory. If not provided the temporary directory is used",
          requiresSeparator: "=",
        },
        {
          name: "--no-archive",
          description:
            "Do not create an archive, leave the collected files uncompressed",
        },
        {
          name: "--all-logs",
          description: "Include all device logs, even for non-booted devices",
        },
        {
          name: "--data-containers",
          description:
            "Include booted device(s) data directory. Warning: May include private information, app data containers, and increases the size of the archive! Default is NOT to collect the data container",
        },
        {
          name: "--udid",
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
          description:
            "Optionally specify the container. Defaults to app.\napp                 The .app bundle\ndata                The application's data container\ngroups              The App Group containers\n<group identifier>  A specific App Group container",
          isOptional: true,
          default: "app",
          suggestions: [
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
      loadSpec: "simctl",
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
      args: {
        name: "device",
      },
      subcommands: [
        {
          name: "enumerate",
          description: "Lists all available IO ports and descriptor states",
          options: [
            {
              name: "--poll",
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
              name: "--codec",
              description:
                "Specifies the codec type: 'h264' or 'hevc'. Default is 'hevc'",
              requiresSeparator: "=",
            },
            {
              name: "--display",
              description:
                // eslint-disable-next-line @withfig/fig-linter/conventional-descriptions
                "iOS: supports 'internal' or 'external'. Default is 'internal'. tvOS: supports only 'external' watchOS: supports only 'internal'",
              requiresSeparator: "=",
            },
            {
              name: "--mask",
              description:
                "For non-rectangular displays, handle the mask by policy: ignored: The mask is ignored and the unmasked framebuffer is saved. alpha: Not supported, but retained for compatibility; the mask is rendered black. black: The mask is rendered black",
              requiresSeparator: "=",
            },
            {
              name: "--force",
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
              name: "--type",
              description:
                "Can be 'png', 'tiff', 'bmp', 'gif', 'jpeg'. Default is png",
              requiresSeparator: "=",
            },
            {
              name: "--display",
              description:
                // eslint-disable-next-line @withfig/fig-linter/conventional-descriptions
                "iOS: supports 'internal' or 'external'. Default is 'internal'. tvOS: supports only 'external' watchOS: supports only 'internal'. You may also specify a port by UUID",
              requiresSeparator: "=",
            },
            {
              name: "--mask",
              description:
                "For non-rectangular displays, handle the mask by policy: ignored: The mask is ignored and the unmasked framebuffer is saved. alpha: The mask is used as premultiplied alpha. black: The mask is rendered black",
              requiresSeparator: "=",
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
          name: ["-w", "--wait-for-debugger"],
        },
        {
          name: "--console",
          description:
            "Block and print the application's stdout and stderr to the current terminal. Signals received by simctl are passed through to the application. (Cannot be combined with --stdout or --stderr)",
          exclusiveOn: ["console-pty", "stdout", "stderr"],
        },
        {
          name: "--console-pty",
          description:
            "Block and print the application's stdout and stderr to the current terminal via a PTY. Signals received by simctl are passed through to the application. (Cannot be combined with --stdout or --stderr)",
          exclusiveOn: ["console", "stdout", "stderr"],
        },
        {
          name: "--stdout",
          description: "Redirect the application's standard output to a file",
          requiresSeparator: "=",
          args: {
            name: "path",
          },
          exclusiveOn: ["console", "console-pty"],
        },
        {
          name: "--stderr",
          description: "Redirect the application's standard error to a file",
          requiresSeparator: "=",
          args: {
            name: "path",
          },
          exclusiveOn: ["console", "console-pty"],
        },
        {
          name: "--terminate-running-process",
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
          name: ["-j", "--json"],
          description: "Print as JSON",
        },
        {
          name: ["-e", "--no-escape-slashes"],
          description: "Encode slashes without escapes in JSON output",
        },
        {
          name: "-v",
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
          name: "-v",
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
          name: "-v",
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
          name: "-p",
          description:
            "Causes simctl to use promise data for secondary types.  simctl will continue to run to provide that promise data until something else replaces it on the pasteboard",
        },
        {
          name: "-v",
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
          description:
            "Add a runtime disk image to the secure storage area. The image will be staged, verified, and mounted. When possible the image file will be cloned so no additional disk space will be used. If stdout is a terminal and a copy is required then progress will be reported",
          args: {
            name: "path",
          },
          options: [
            {
              name: ["-m", "--move"],
              description:
                "Remove the original file if the image is added successfully. If the image cannot be staged or the add fails the original is not removed",
            },
            {
              name: ["-a", "--async"],
              description:
                "Print the UUID of the new image then exit, do not wait on the results of the add operation",
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a simulator runtime from the secure storage area. If runtime is a disk image any booted simulators are shutdown and the disk is unmounted first. Use the alias 'all' to delete all images",
          args: {
            name: "identifier",
          },
          options: [
            {
              name: ["-d", "--notUsedSinceDays"],
              description: "Delete images not used within the past <days> days",
            },
            {
              name: ["-n", "--dry-run"],
              description:
                "Print what images would be deleted without actually deleting anything",
              exclusiveOn: ["identifier"],
            },
          ],
        },
        {
          name: "verify",
          description: "Re-verify the signature of a given runtime",
          args: {
            name: "identifier",
          },
        },
        {
          name: "list",
          description: "",
          options: [
            {
              name: "-v",
              description: "Print more verbose output",
            },
            {
              name: ["-j", "--json"],
              description: "Print as JSON",
            },
          ],
        },
        {
          name: "match list",
          description:
            "List the SDK build to runtime build mapping rules for the selected Xcode. Preferred means the runtime was either bundled with Xcode, exactly matched your SDK version, or the downloadable index indicated a better match for your SDK Manual overrides using 'match set' have the highest priority",
          options: [
            {
              name: "-v",
              description:
                "Verbose mode. Includes the full preferred build map, user override map, and known SDK names",
            },
            {
              name: ["-j", "--json"],
              description: "Print as JSON",
            },
          ],
        },
        {
          name: "match set",
          description:
            "Override the SDK to runtime build mapping. This controls which build of a given runtime Xcode will prefer for building and running when using that SDK. This matters most often during Beta releases when there are multiple builds for a given OS version. If --sdkBuild is not specified it is assumed you mean the SDK build for the currently selected Xcode.\n\nNote: Remember this is about build numbers, not semantic versions. When using the iOS 16.0 SDK Xcwill always prefer an iOS 16.0 runtime. Matching policy controls what to do when there are multiiOS 16.0 runtimes availabeg if the iOS 16.0 SDK is 20A245 and the available runtimes are (20A248, 20A252, 20A254) which should Xcode use for building, SwiftUI Previews, and when launching iOS 16.0 Simulators? They are all iOS 16.0 runtimes so a policy must decide which one is selected",
          args: [
            {
              name: "sdk canonical name",
            },
            {
              name: "runtime build",
            },
          ],
          options: [
            {
              name: "--default",
              description:
                "Clear the override for the given SDK and revert to default behavior",
              exclusiveOn: ["runtime build"],
            },
            {
              name: "--sdkBuild",
              description:
                "Explicitly specify the SDK build, eg for an Xcode other than the selected Xcode",
            },
          ],
        },
      ],
    },
    {
      name: "shutdown",
      description: "Shutdown a device",
      args: [
        {
          name: "device",
        },
        {
          name: "all",
          suggestions: ["all"],
        },
      ],
    },
    {
      name: "spawn",
      description:
        "Spawn a process by executing a given executable on a device",
      args: [
        {
          name: "device",
        },
        {
          name: "path to executable",
        },
        {
          name: "argv",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: ["-w", "--wait-for-debugger"],
        },
        {
          name: ["-s", "--standalone"],
        },
        {
          name: ["-a", "--arch"],
        },
      ],
    },
    {
      name: "status_bar",
      description: "Set or clear status bar overrides",
      args: {
        name: "device",
      },
      subcommands: [
        {
          name: "list",
          description: "List existing overrides",
        },
        {
          name: "clear",
          description: "Clear all existing status bar overrides",
        },
        {
          name: "override",
          description:
            "Set status bar override values, according to these flags. You may specify any combination of these flags (at least one is required)",
          options: [
            {
              name: "--time",
              description:
                "Set the date or time to a fixed value. If the string is a valid ISO date string it will also set the date on relevant devices",
            },
            {
              name: "--dataNetwork",
              description:
                "If specified must be one of 'hide', 'wifi', '3g', '4g', 'lte', 'lte-a', 'lte+', '5g', '5g+', '5g-uwb', or '5g-uc'",
            },
            {
              name: "--wifiMode",
              description:
                "If specified must be one of 'searching', 'failed', or 'active'",
            },
            {
              name: "--wifiBars",
              description: "If specified must be 0-3",
            },
            {
              name: "--cellularMode",
              description:
                "If specified must be one of 'notSupported', 'searching', 'failed', or 'active'",
            },
            {
              name: "--cellularBars",
              description: "If specified must be 0-4",
            },
            {
              name: "--operatorName",
              description:
                "Set the cellular operator/carrier name. Use '' for the empty string",
            },
            {
              name: "--batteryState",
              description:
                "If specified must be one of 'charging', 'charged', or 'discharging'",
            },
            {
              name: "--batteryLevel",
              description: "If specified must be 0-100",
            },
          ],
        },
      ],
    },
    {
      name: "terminate",
      description: "Terminate an application by identifier on a device",
      args: [
        {
          name: "device",
        },
        {
          name: "app bundle identifier",
        },
      ],
    },
    {
      name: "ui",
      description: "Get or Set UI options",
      args: {
        name: "device",
      },
      subcommands: [
        {
          name: "appearance",
          description:
            "When invoked without arguments prints the current user interface appearance style:\nlight\nThe Light appearance style.\ndark\nThe Dark appearance style.\nunsupported\nThe platform or runtime version do not support appearance styles.\nunknown\nThe current style is unknown or there was an error detecting it",
          additionalSuggestions: ["light", "dark"],
        },
        {
          name: "increase_contrast",
          description:
            "When invoked without arguments prints whether the Increase Contrast mode is currently enabled:\nenabled\nIncrease Contrast is enabled.\ndisabled\nIncrease Contrast is disabled.\nunsupported\nThe platform or runtime version do not support the Increase Contrast setting.\nunknown\nThe current setting is unknown or there was an error detecting it",
          additionalSuggestions: ["enabled", "disabled"],
        },
        {
          name: "content_size",
          description:
            "When invoked without arguments prints the current preferred content size category, from the following possible values:",
          additionalSuggestions: [
            "extra-small",
            "small",
            "medium",
            "large",
            "extra-large",
            "extra-extra-large",
            "extra-extra-extra-large",
            "accessibility-medium",
            "accessibility-large",
            "accessibility-extra-large",
            "accessibility-extra-extra-large",
            "accessibility-extra-extra-extra-large",
            "unknown",
            "unsupported",
          ],
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall an app from a device",
      args: [
        {
          name: "device",
        },
        {
          name: "app bundle identifier",
        },
      ],
    },
    {
      name: "unpair",
      description: "Unpair a watch and phone pair",
      args: {
        name: "pair UUID",
      },
    },
    {
      name: "upgrade",
      description: "Upgrade a device to a newer runtime",
      args: [
        {
          name: "device",
        },
        {
          name: "runtime id",
        },
      ],
    },
  ],
};
export default completionSpec;
