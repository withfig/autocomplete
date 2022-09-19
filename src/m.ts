const generateDisks: Fig.Generator = {
  // ? is a bash/fish/zsh glob pattern for "any character, exactly once"
  script: "command ls /dev/disk?",
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .map((disk) => ({
        name: disk,
        type: "file",
        priority: 100,
      })),
};

const generateVolumes: Fig.Generator = {
  script: "command ls /Volumes",
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .map((volume) => ({
        name: volume,
        type: "file",
        priority: 100,
      })),
};

const generateUsers: Fig.Generator = {
  script: "m user list | awk '{ print $1 }'",
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .map((user) => ({
        name: user,
        icon: "👤",
        hidden: user.startsWith("_"),
      })),
};

const generateGroups: Fig.Generator = {
  script: "m group list | awk '{ print $1 }'",
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .map((group) => ({
        name: group,
        icon: "👥",
        hidden: group.startsWith("_"),
      })),
};

const generateNetworkLocations: Fig.Generator = {
  script: "m network list | grep -e 'Device: ' | cut -d' ' -f2-",
  splitOn: "\n",
};

function getPidIcon(path: string): string {
  const idx = path.indexOf(".app/");
  if (idx === -1) {
    return "fig://icon?type=gear";
  }
  return "fig://" + path.slice(0, idx + 4);
}
const generatePids: Fig.Generator = {
  script: "ps axo pid,comm | sed 1d",
  postProcess: (result) => {
    return result.split("\n").map((line) => {
      const [pid, path] = line.trim().split(/\s+/);
      const name = path.slice(path.lastIndexOf("/") + 1);
      return {
        name: pid,
        description: path,
        displayName: `${pid} (${name})`,
        icon: getPidIcon(path),
      };
    });
  },
};
const completionSpec: Fig.Spec = {
  name: "m-cli",
  description: "Swiss Army Knife for macOS",
  subcommands: [
    {
      name: "airdrop",
      description: "Manage AirDrop",
      subcommands: [
        {
          name: "status",
          description: "Show AirDrop status",
        },
        {
          name: "on",
          description: "Enable AirDrop",
        },
        {
          name: "enable",
          description: "Enable AirDrop",
        },
        {
          name: "off",
          description: "Disable AirDrop",
        },
        {
          name: "disable",
          description: "Disable AirDrop",
        },
      ],
    },
    {
      name: "appearance",
      description: "Manage appearance",

      subcommands: [
        {
          name: "darkmode",
          description: "Manage dark mode",
          args: {
            name: "status",
            description: "Whether to use dark versions of interface elements",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "transparency",
          description: "Manage transparency",
          args: {
            name: "status",
            description:
              "Whether to allow the OS to make certain elements semi-transparent",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "antialiasthreshold",
          description: "Manage antialiasing threshold",
          args: {
            name: "threshold",
            description: "The threshold above which antialiasing is turned on",
          },
        },
        {
          name: "sidebariconsize",
          description: "Manage sidebar icon size",
          args: {
            name: "size",
            description: "The size of the icons in various window sidebars",
            suggestions: ["small", "medium", "large"],
          },
        },
        {
          name: "maincolor",
          description: "Manage main color",
          args: {
            name: "color",
            description:
              "The color used for the majority of the interface elements",
            suggestions: ["blue", "graphite"],
          },
        },
        {
          name: "highlightcolor",
          description: "Manage highlight color",
          args: {
            name: "color",
            description: "The color used for highlights",
            suggestions: [
              "graphite",
              "cayenne",
              "asparagus",
              "clover",
              "teal",
              "midnight",
              "plum",
              "tin",
              "nickel",
              "mocha",
              "fern",
              "moss",
              "ocean",
              "eggplant",
              "maroon",
              "steel",
              "aluminum",
              "maraschino",
              "lemon",
              "spring",
              "turquoise",
              "blueberry",
              "magenta",
              "iron",
              "magnesium",
              "tangerine",
              "lime",
              "seafoam",
              "aqua",
              "grape",
              "strawberry",
              "tungsten",
              "silver",
              "salmon",
              "banana",
              "flora",
              "ice",
              "orchid",
              "bubblegum",
              "lead",
              "mercery",
              "cantaloupe",
              "honeydew",
              "spindrift",
              "sky",
              "lavender",
              "carnation",
              "licorice",
              "snow",
            ],
          },
        },
      ],
    },
    {
      name: "battery",
      description: "Manage battery",
      subcommands: [
        {
          name: "status",
          description: "Show battery status",
        },
      ],
    },
    {
      name: "bluetooth",
      description: "Manage Bluetooth",
      subcommands: [
        {
          name: "status",
          description: "Show bluetooth status",
        },
        {
          name: "on",
          description: "Enable bluetooth",
        },
        {
          name: "enable",
          description: "Enable bluetooth",
        },
        {
          name: "off",
          description: "Disable bluetooth",
        },
        {
          name: "disable",
          description: "Disable bluetooth",
        },
      ],
    },
    {
      name: "dir",
      description: "Manage directories",
      subcommands: [
        {
          name: "tree",
          description: "Show tree view of folders in the current path",
          args: {
            name: "path",
            description: "Path to show tree view of folders",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "delete",
          description: "Delete folders",
          subcommands: [
            {
              name: "empty",
              description:
                "Delete empty folders recursively in the current path",
              args: {
                name: "path",
                description: "Path to delete empty folders",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: "dsfiles",
              description:
                "Delete .DS_Store files recursively in the current path",
              args: {
                name: "path",
                description:
                  "Delete .DS_Store files recursively in a specific path",
                isOptional: true,
                template: "folders",
              },
            },
          ],
        },
        {
          name: "dsfiles",
          description: "Manage .DS_Store files",
          subcommands: [
            {
              name: "on",
              description: "Restore generation of .DS_Store",
            },
            {
              name: "off",
              description: "Prohibit generation of .DS_Store",
            },
          ],
        },
        {
          name: "size",
          description: "Calculate current folder size",
          args: {
            name: "path",
            description: "Path to calculate folder size",
            isOptional: true,
            template: "folders",
          },
        },
      ],
    },
    {
      name: "disk",
      description: "Manage disks",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List disk partitions",
          args: {
            name: "path",
            description: "Path to the disk file",
            isOptional: true,
            generators: [{ template: "filepaths" }, generateDisks],
          },
        },
        {
          name: "info",
          description: "Show disk information",
          args: {
            name: "path",
            description: "Path to show disk information",
            generators: [{ template: "filepaths" }, generateDisks],
          },
        },
        {
          name: "ejectall",
          description: "Eject all mountable volumes",
        },
        {
          name: "verify",
          description: "Verify disk",
          subcommands: [
            {
              name: "volume",
              description: "Verify volume",
              args: {
                name: "path",
                description: "Path to verify volume",
                generators: [{ template: "filepaths" }, generateVolumes],
              },
            },
            {
              name: "disk",
              description: "Verify disk",
              args: {
                name: "path",
                description: "Path to verify disk",
                generators: [{ template: "filepaths" }, generateDisks],
              },
            },
          ],
        },
        {
          name: "repair",
          description: "Repair disk",
          subcommands: [
            {
              name: "volume",
              description: "Repair volume",
              args: {
                name: "path",
                description: "Path to repair volume",
                generators: [{ template: "filepaths" }, generateVolumes],
              },
            },
            {
              name: "disk",
              description: "Repair disk",
              args: {
                name: "path",
                description: "Path to repair disk",
                generators: [{ template: "filepaths" }, generateDisks],
              },
            },
          ],
        },
        {
          name: "format",
          description: "Format disk",
          subcommands: [
            {
              name: "MS-DOS",
              description:
                "Format the entire disk with a windows format (MS-DOS)",
              args: [
                {
                  name: "name",
                  description: "Name of the volume",
                },
                {
                  name: "path",
                  description: "Path to format the entire disk",
                  generators: [{ template: "filepaths" }, generateDisks],
                },
              ],
            },
            {
              name: "volume",
              description: "Format the volume with a windows format (MS-DOS)",
              args: [
                {
                  name: "name",
                  description: "Name of the volume",
                },
                {
                  name: "path",
                  description: "Path to format the volume",
                  generators: [{ template: "filepaths" }, generateVolumes],
                },
              ],
            },
          ],
        },
        {
          name: "reformat",
          description: "Reformat a volume",
          args: {
            name: "path",
            description: "Path to reformat a volume",
            generators: [{ template: "filepaths" }, generateVolumes],
          },
        },
        {
          name: "rename",
          description: "Rename a volume",
          args: [
            {
              name: "currentName",
              description: "Current name of the volume",
              generators: [{ template: "filepaths" }, generateVolumes],
            },
            {
              name: "newName",
              description: "New name of the volume",
            },
          ],
        },
      ],
    },
    {
      name: "display",
      description: "Manage displays",
      subcommands: [
        {
          name: "status",
          description: "Show display status",
        },
        {
          name: "help",
          description: "Show usage",
        },
        {
          name: "up",
          description: "Turn up the brightness",
        },
        {
          name: "down",
          description: "Turn down the brightness",
        },
      ],
    },
    {
      name: "dns",
      description: "Manage dns",
      subcommands: [
        {
          name: "flush",
          description: "Flush local DNS cache",
        },
      ],
    },
    {
      name: "dock",
      description: "Manage dock",
      subcommands: [
        {
          name: "showdelay",
          description:
            "Changes how long the Dock takes to show up when auto-hide is enabled",
          args: {
            name: "seconds",
            description: "Seconds to show delay",
          },
        },
        {
          name: "autohide",
          description: "Enable or disable Dock's auto hide feature",
          args: {
            name: "YES/NO",
            description: "YES/NO to enable/disable Dock's auto hide feature",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "autohidedelay",
          description:
            "Changes how long it takes to detect you want to show up the dock",
          args: {
            name: "seconds",
            description: "Seconds to auto hide delay",
          },
        },
        {
          name: "magnification",
          description: "Turn magnification on or off",
          args: {
            name: "YES/NO",
            description: "YES/NO to turn magnification on or off",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "position",
          description: "Change Dock's position",
          args: {
            name: "position",
            description: "Position to change Dock's position",
            suggestions: ["BOTTOM", "LEFT", "RIGHT"],
          },
        },
        {
          name: "addblankspace",
          description: "Add a blank space (separator) to the Dock",
        },
        {
          name: "addrecentitems",
          description: "Add a stack containg your recent items to the Dock",
        },
        {
          name: "prune",
          description: "Remove all items from dock",
        },
      ],
    },
    {
      name: "finder",
      description: "Manage finder",
      subcommands: [
        {
          name: "showhiddenfiles",
          description: "Show hidden files Status",
          args: {
            name: "YES/NO",
            description: "YES/NO to show hidden files",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "showextensions",
          description: "Show all file extensions Status",
          args: {
            name: "YES/NO",
            description: "YES/NO to show all file extensions",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "showdesktop",
          description: "Show the desktop Status",
          args: {
            name: "YES/NO",
            description: "YES/NO to show the desktop",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "showpath",
          description:
            "Show the current opened folder path on the top bar of the Finder window",
          args: {
            name: "YES/NO",
            description:
              "YES/NO to show the current opened folder path on the top bar of the Finder window",
            suggestions: ["YES", "NO"],
          },
        },
      ],
    },
    {
      name: "firewall",
      description: "Manage firewall",
      subcommands: [
        {
          name: "status",
          description: "Show status",
        },
        {
          name: "enable",
          description: "Enable firewall",
        },
        {
          name: "disable",
          description: "Disable firewall",
        },
        {
          name: "list",
          description: "List applications handled by firewall",
        },
        {
          name: "add",
          description: "Add app to firewall",
          args: {
            name: "path",
            description: "Path of the app to add to firewall",
            template: "filepaths",
          },
        },
        {
          name: "remove",
          description: "Remove app from firewall",
          args: {
            name: "path",
            description: "Path of the app to remove from firewall",
          },
        },
      ],
    },
    {
      name: "flightmode",
      description: "Manage flight mode",
      subcommands: [
        {
          name: "off",
          description: "Turn flight mode off",
        },
        {
          name: "on",
          description: "Turn flight mode on",
        },
      ],
    },
    {
      name: "gatekeeper",
      description: "Manage gatekeeper",
      subcommands: [
        {
          name: "status",
          description: "Show status",
        },
        {
          name: "enable",
          description: "Enable gatekeeper",
          args: {
            name: "rule",
            description: "Rule to enable",
            isOptional: true,
          },
        },
        {
          name: "disable",
          description: "Disable gatekeeper",
          args: {
            name: "rule",
            description: "Rule to disable",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List rules",
        },
        {
          name: "create",
          description: "Create a rule for the application",
          args: [
            {
              name: "RULENAME",
              description: "Name of the rule",
            },
            {
              name: "/path/to/program",
              description: "Path to the program",
            },
          ],
        },
      ],
    },
    {
      name: "group",
      description: "Manage groups",
      subcommands: [
        {
          name: "list",
          description: "List groups",
        },
        {
          name: "info",
          description: "Get group information",
          args: {
            name: "group",
            description: "Group to get information",
          },
        },
        {
          name: "adduser",
          description: "Add user to group",
          args: [
            {
              name: "user",
              description: "User to add to group",
              generators: generateUsers,
            },
            {
              name: "group",
              description: "Group to add user to",
              generators: generateGroups,
            },
          ],
        },
        {
          name: "removeuser",
          description: "Remove user from group",
          args: [
            {
              name: "user",
              description: "User to remove from group",
              generators: generateUsers,
            },
            {
              name: "group",
              description: "Group to remove user from",
              generators: generateGroups,
            },
          ],
        },
        {
          name: "ismember",
          description: "Check if user is a member of group",
          args: [
            {
              name: "user",
              description: "User to check membership",
              generators: generateUsers,
            },
            {
              name: "group",
              description: "Group to check membership",
              generators: generateGroups,
            },
          ],
        },
      ],
    },
    {
      name: "hostname",
      description: "Manage hostname",
      subcommands: [
        {
          name: "newhostname",
          description: "Set new hostname",
        },
      ],
    },
    {
      name: "info",
      description: "Show system information",
    },
    {
      name: "itunes",
      description: "Manage iTunes",
      subcommands: [
        {
          name: "status",
          description: "Show status",
        },
        {
          name: "play",
          description: "Play track",
        },
        {
          name: "pause",
          description: "Pause track",
        },
        {
          name: "next",
          description: "Play next track",
        },
        {
          name: "prev",
          description: "Play previous track",
        },
        {
          name: "mute",
          description: "Mute iTunes",
        },
        {
          name: "unmute",
          description: "Unmute iTunes",
        },
        {
          name: "vol",
          description: "Volume",
          args: {
            name: "up/down/#",
            description: "Up/Down/Number",
            suggestions: ["up", "down" /*, "#",*/],
            isOptional: true,
          },
        },
        {
          name: "stop",
          description: "Stop track",
        },
        {
          name: "quit",
          description: "Quit iTunes",
        },
      ],
    },
    {
      name: "localhost",
      description: "Manage localhost",
      subcommands: [
        {
          name: "ls",
          description: "List current records in localhost",
        },
        {
          name: "add",
          description: "Add a new host to the localhost file",
          args: [
            {
              name: "IP",
              description: "IP of the host",
            },
            {
              name: "HOSTNAME",
              description: "Hostname of the host",
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a host from the localhost file",
          args: {
            name: "HOSTNAME",
            description: "Hostname of the host",
          },
        },
      ],
    },
    {
      name: "lock",
      description: "Lock session",
    },
    {
      name: "network",
      description: "Manage network",
      subcommands: [
        {
          name: "ls",
          description: "List network interfaces",
        },
        {
          name: "location",
          description: "Manage location",
          subcommands: [
            {
              name: "ls",
              description: "List locations",
            },
            {
              name: "create",
              description: "Create a location",
              args: {
                name: "name",
                description: "Name of the location",
              },
            },
            {
              name: "delete",
              description: "Delete a location",
              args: {
                name: "name",
                description: "Name of the location",
                generators: generateNetworkLocations,
              },
            },
            {
              name: "switch",
              description: "Switch location",
              args: {
                name: "name",
                description: "Name of the location",
              },
            },
          ],
        },
      ],
    },
    {
      name: "nosleep",
      description: "Manage no sleep",
      subcommands: [
        {
          name: "until",
          description: "No sleep until",
          subcommands: [
            {
              name: "pid",
              description: "No sleep until process id ends",
              args: {
                name: "pid",
                description: "Process id",
                generators: generatePids,
              },
            },
          ],
          args: [
            {
              name: "time",
              description: "Time in seconds",
              isOptional: true,
            },
            {
              name: "script",
              description: "Path to script",
              isOptional: true,
              template: "filepaths",
            },
          ],
        },
      ],
    },
    {
      name: "notification",
      description: "Manage notification",
      subcommands: [
        {
          name: "showcenter",
          description: "Show notification center",
          args: {
            name: "YES/NO",
            description: "Enable/Disable notification center",
            suggestions: ["YES", "NO"],
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "ntp",
      description: "Manage ntp",
      subcommands: [
        {
          name: "status",
          description: "Status of the network time service",
        },
        {
          name: "enable",
          description: "Enable clock to use network time",
        },
        {
          name: "disable",
          description: "Disable clock to use network time",
        },
        {
          name: "set",
          description: "Set network time server",
          args: {
            name: "timehost1.net.sap.corp",
            description: "Network time server",
          },
        },
      ],
    },
    {
      name: "printer",
      description: "Manage printer",
      subcommands: [
        {
          name: "settings",
          description: "Printer settings",
        },
        {
          name: "name",
          description: "Display printer names on system",
        },
        {
          name: "queue",
          description: "Display items in printer queue on system",
        },
        {
          name: "drivers",
          description: "Display all printer drivers",
        },
        {
          name: "web",
          description: "Enable and show web interface",
        },
      ],
    },
    {
      name: "restart",
      description: "Restart computer (needs confirmation)",
      subcommands: [
        {
          name: "-f",
          description: "Restart computer (without confirmation)",
        },
      ],
    },
    {
      name: "safeboot",
      description: "Manage safe boot",
      subcommands: [
        {
          name: "status",
          description: "Get the boot args",
        },
        {
          name: "enable",
          description: "Enable safe boot",
        },
        {
          name: "disable",
          description: "Disable safeboot",
        },
      ],
    },
    {
      name: "screensaver",
      description: "Manage screensaver",
      subcommands: [
        {
          name: "status",
          description: "Get the current status",
        },
        {
          name: "askforpassword",
          description: "Get password requirement to unlock",
          args: {
            name: "YES/NO",
            description: "Enable/Disable password requirement to unlock",
            suggestions: ["YES", "NO"],
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "service",
      description: "Manage service",
      subcommands: [
        {
          name: "--status-all",
          description: "List all services",
        },
        {
          name: "--list",
          description: "List all services",
        },
        {
          name: "--ls",
          description: "List all services",
          args: {
            name: "service",
            description: "Service name",
            isOptional: true,
          },
        },
        {
          name: "start",
          description: "Start a service",
          args: {
            name: "service",
            description: "Service name",
          },
        },
        {
          name: "stop",
          description: "Stop a service",
          args: {
            name: "service",
            description: "Service name",
          },
        },
        {
          name: "load",
          description: "Load a service",
          args: {
            name: "service",
            description: "Service name",
          },
        },
        {
          name: "unload",
          description: "Unload a service",
          args: {
            name: "service",
            description: "Service name",
          },
        },
      ],
    },
    {
      name: "shutdown",
      description: "Shutdown computer (needs confirmation)",
      subcommands: [
        {
          name: "-f",
          description: "Shutdown computer (without confirmation)",
        },
      ],
    },
    {
      name: "sleep",
      description: "Put computer to sleep",
    },
    {
      name: "timezone",
      description: "Get current timezone",
      subcommands: [
        {
          name: "ls",
          description: "List available timezones",
        },
        {
          name: "set",
          description: "Set timezone",
          args: {
            name: "timezone",
            description: "Timezone",
          },
        },
      ],
    },
    {
      name: "touchbar",
      description: "Manage touchbar",
      subcommands: [
        {
          name: "reset",
          description: "Reset touchbar",
        },
      ],
    },
    {
      name: "trash",
      description: "Manage trash",
      subcommands: [
        {
          name: "status",
          description: "Get trash info",
        },
        {
          name: "clean",
          description: "Clean trash",
        },
      ],
    },
    {
      name: "user",
      description: "Manage user",
      subcommands: [
        {
          name: "ls",
          description: "List all users",
        },
        {
          name: "info",
          description: "Get user info",
          args: {
            name: "username",
            description: "Username",
          },
        },
        {
          name: "create",
          description: "Create a new user",
        },
        {
          name: "delete",
          description: "Delete a user",
          args: {
            name: "username",
            description: "Username",
          },
        },
      ],
    },
    {
      name: "volume",
      description: "Manage volume level",
      subcommands: [
        {
          name: "mute",
          description: "Set mute",
        },
        {
          name: "unmute",
          description: "Unset mute",
        },
        {
          name: "ismute",
          description: "Check the volume status",
        },
      ],
      args: {
        name: "volume",
        description: "Volume level up/down/(+/-)number",
        isOptional: true,
        suggestions: [
          {
            name: "up",
            description: "Increase the volume by 6.25",
          },
          {
            name: "down",
            description: "Decrease the volume by 6.25",
          },
        ],
      },
    },
    {
      name: "vpn",
      description: "Manage VPN connections",
      subcommands: [
        {
          name: "ls",
          description: "List VPN connections",
        },
        {
          name: "start",
          description: "Start a VPN connection",
          args: [
            {
              name: "VPN",
              description: "VPN connection name",
              isOptional: true,
            },
            {
              name: "USER",
              description: "VPN connection user",
              isOptional: true,
            },
            {
              name: "PASS",
              description: "VPN connection password",
              isOptional: true,
            },
            {
              name: "SECRET",
              description: "VPN connection secret",
              isOptional: true,
            },
          ],
        },
        {
          name: "stop",
          description: "Stop a VPN connection",
          args: {
            name: "VPN",
            description: "VPN connection name",
            isOptional: true,
          },
        },
        {
          name: "status",
          description: "Get the status of a VPN connection",
          args: {
            name: "VPN",
            description: "VPN connection name",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "wallpaper",
      description: "Change wallpaper",
      options: [
        {
          name: "",
          description: "Path to the wallpaper",
        },
      ],
    },
    {
      name: "wifi",
      description: "Manage wifi",
      subcommands: [
        {
          name: "status",
          description: "Get wifi status",
        },
        {
          name: "scan",
          description: "Scan wifi",
        },
        {
          name: "showpassword",
          description: "Show wifi network password",
          args: {
            name: "ESSID",
            description: "ESSID",
            isOptional: true,
          },
        },
        {
          name: "ls",
          description: "List known wifi networks",
        },
        {
          name: "list",
          description: "List known wifi networks",
        },
        {
          name: "forget",
          description: "Forget a wifi network",
          args: {
            name: "ESSID",
            description: "ESSID",
          },
        },
        {
          name: "history",
          description: "Wifi connection history",
        },
        {
          name: "off",
          description: "Turn off your wifi",
        },
        {
          name: "on",
          description: "Turn on your wifi",
        },
        {
          name: "connect",
          description: "Join a wifi network",
          args: [
            {
              name: "ESSID",
              description: "ESSID",
            },
            {
              name: "PASSWORD",
              description: "Password",
              isOptional: true,
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: "--update",
      description: "Update m-cli to the latest version",
    },
    {
      name: "--uninstall",
      description: "Uninstall m-cli",
    },
    {
      name: "help",
      description: "Show help for specific command",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
