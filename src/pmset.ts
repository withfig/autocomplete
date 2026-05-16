const settings: Fig.Suggestion[] = [
  {
    name: ["displaysleep", "dim"],
    description: "Display sleep timer (value in minutes, or 0 to disable)",
  },
  {
    name: ["disksleep", "spindown"],
    description: "Disk spindown timer (value in minutes, or 0 to disable)",
  },
  {
    name: "sleep",
    description: "System sleep timer (value in minutes, or 0 to disable)",
  },
  {
    name: "womp",
    description: "Wake on ethernet magic packet (value = 0/1)",
  },
  {
    name: "ring",
    description: "Wake on modem ring (value = 0/1)",
  },
  {
    name: "autorestart",
    description: "Automatic restart on power loss (value = 0/1)",
  },
  {
    name: "dps",
    description:
      "Dynamically change processor speed based on load (value = 0/1)",
  },
  {
    name: "reduce",
    description: "Reduce processor speed (value = 0/1)",
  },
  {
    name: "powerbutton",
    description: "Sleep the machine when power button is pressed (value=0/1)",
  },
  {
    name: "lidwake",
    description:
      "Wake the machine when the laptop lid (or clamshell) is opened (value = 0/1)",
  },
  {
    name: "acwake",
    description:
      "Wake the machine when power source (AC/battery) is changed (value = 0/1)",
  },
  {
    name: "lessbright",
    description:
      "Slightly turn down display brightness when switching to this power source (value = 0/1)",
  },
  {
    name: "halfdim",
    description:
      "Display sleep will use an intermediate half-brightness state between full brightness and fully off  (value = 0/1)",
  },
  {
    name: "sms",
    description:
      "Use Sudden Motion Sensor to park disk heads on sudden changes in G force (value = 0/1)",
  },
  {
    name: "hibernatemode",
    description:
      "Change hibernation mode. 0 = normal sleep, 1 = hibernate mode, 3 = safe sleep, 25 = hibernate mode for post-2005 portable Macs",
  },
  {
    name: "hibernatefile",
    description: "Change hibernation image file location. (value = path)",
  },
  {
    name: "ttyskeepawake",
    description:
      "Prevent idle system sleep when any tty (e.g. remote login session) is 'active'. (value = 0/1)",
  },
  {
    name: "networkoversleep",
    description:
      "This setting affects how macOS networking presents shared network services during system sleep",
  },
  {
    name: "destroyfvkeyonstandby",
    description:
      "Destroy File Vault Key when going to standby mode. (value: 1 - Destroy, 0 - Retain)",
  },
];

const events: string[] = [
  "sleep",
  "wake",
  "poweron",
  "shutdown",
  "wakeorpoweron",
];

const completionSpec: Fig.Spec = {
  name: "pmset",
  description: "Power management settings",
  subcommands: [
    {
      name: "-g",
      description: "GETTING",
      args: [
        {
          isOptional: true,
          default: "live",
          suggestions: [
            {
              name: "live",
              description:
                "Display the settings currently in use. (default if no argument given)",
            },
            {
              name: "custom",
              description: "Display custom settings for all power sources",
            },
            {
              name: "cap",
              description:
                "Display which power management features the machine supports",
            },
            {
              name: "sched",
              description:
                "Display scheduled startup/wake and shutdown/sleep events",
            },
            {
              name: "ups",
              description: "Display UPS emergency thresholds",
            },
            {
              name: ["ps", "batt"],
              description: "Display status of batteries and UPSs",
            },
            {
              name: "pslog",
              description:
                "Display an ongoing log of power source (battery and UPS)state",
            },
            {
              name: "rawlog",
              description:
                "Display an ongoing log of battery state as read directly from battery",
            },
            {
              name: "profiles",
              description:
                "Display the settings associated with each Energy Saver profile. 10.5+",
            },
            {
              name: "thermlog",
              description:
                "Show a log of thermal notifications that affect CPU speed. Not available on all platforms",
            },
            {
              name: "assertions",
              description: "Display a summary of power assertions. 10.6+",
            },
            {
              name: "assertionslog",
              description:
                "Show a log of assertion creations and releases. 10.6+",
            },
            {
              name: "activity",
              description:
                "Display a summary of power state of Display wrangler and Disk Queue Manager.10.6+",
            },
            {
              name: "activitylog",
              description:
                "Show a log of power state changes to Display Wrangler and Disk Queue Manager. 10.6+",
            },
            {
              name: "sysload",
              description: 'Display the "system load advisory" 10.6+',
            },
            {
              name: "sysloadlog",
              description:
                "Display an ongoing log of lives changes to the system load advisory. 10.6+",
            },
            {
              name: ["ac", "adapter"],
              description: "Display details about an attached AC power adapter",
            },
            {
              name: "log",
              description:
                "Display a history of sleeps, wakes, and other power management events",
            },
            {
              name: "uuid",
              description: "Display the currently active sleep/wake UUID",
            },
            {
              name: "uuidlog",
              description:
                "Display the currently active sleep/wake UUID, and prints a new UUID as they're set by the system",
            },
            {
              name: "history",
              description:
                "A debugging tool. Prints a timeline of system sleeplwake UUIDs",
            },
            {
              name: "historydetailed",
              description:
                "Prints driver-level timings for a sleep/wake. Pass a UUID as an argument",
            },
            {
              name: "everything",
              description:
                "Print output from every argument under the GETTING header 10.8+",
            },
          ],
        },
        {
          name: "UUID",
          description: "Used for historydetailed",
          isOptional: true,
        },
      ],
    },
    {
      name: "schedule",
      description: "For setting up one-time power events",
      options: [{ name: "cancel" }],
      args: [
        { name: "type", suggestions: events },
        {
          name: "date/time",
          description:
            '"MM/dd/yy HH:mm:ss" (in 24 hour format; must be in quotes)',
        },
      ],
    },
    {
      name: "repeat",
      description: "For setting up daily/weekly power on and power off events",
      subcommands: [{ name: "cancel" }],
      args: [
        { name: "type", suggestions: events },
        {
          name: "weekdays",
          description:
            'A subset of MTWRFSU ("M" and "MTWRF" are valid strings)',
        },
        {
          name: "date/time",
          description:
            '"MM/dd/yy HH:mm:ss" (in 24 hour format; must be in quotes)',
        },
      ],
    },
  ],
  args: {
    description: "Override settings and sleep now",
    isOptional: true,
    suggestions: ["sleepnow", "noidle", "lock", "touch"],
  },
  options: [
    {
      name: "-a",
      description: "Settings for all",
      args: [{ name: "setting", suggestions: settings }, { name: "value" }],
    },
    {
      name: "-b",
      description: "Settings for battery",
      args: [{ name: "setting", suggestions: settings }, { name: "value" }],
    },
    {
      name: "-c",
      description: "Settings for charger",
      args: [{ name: "setting", suggestions: settings }, { name: "value" }],
    },
    {
      name: "-u",
      description: "Settings for UPS",
      args: [{ name: "setting", suggestions: settings }, { name: "value" }],
    },
  ],
};
export default completionSpec;
