const installOptions: Fig.Option[] = [
  {
    name: "-l",
    description: "forward-lock the app",
  },
  {
    name: "-r",
    description: "replace existing application",
  },
  {
    name: "-t",
    description: "allow test packages",
  },
  {
    name: "-d",
    description: "allow version code downgrade (debuggable packages only)",
  },
  {
    name: "-s",
    description: "install on SD card instead of internal storage",
  },
  {
    name: "-g",
    description: "grant all runtime permissions",
  },
  {
    description: "override platform's default ABI",
    name: "--abi",
    args: {
      name: "ABI",
    },
  },
  {
    description: "cause the app to be installed as an ephemeral install app",
    name: "--instant",
  },
  {
    description:
      "always push APK to device and invoke Package Manager as separate steps",
    name: "--no-streaming",
  },
  {
    description: "force streaming APK directly into Package Manager",
    name: "--streaming",
  },
  {
    description: "use fast deploy",
    name: "--fastdeploy",
  },
  {
    description: "prevent use of fast deploy",
    name: "--no-fastdeploy",
  },
  {
    description: "force update of deployment agent when using fast deploy",
    name: "--force-agent",
  },
  {
    description:
      "update deployment agent when local version is newer and using fast deploy",
    name: "--date-check-agent",
  },
  {
    description:
      "update deployment agent when local version has different version code and using fast deploy",
    name: "--version-check-agent",
  },
  {
    description:
      "locate agent files from local source build (instead of SDK location)",
    name: "--local-agent",
  },
];

const compressionOptions: Fig.Option[] = [
  {
    description:
      "enable compression with a specified algorithm (any, none, brotli)",
    name: "-z",
    args: {
      name: "ALGORITHM",
      suggestions: [
        {
          name: "any",
        },
        {
          name: "none",
        },
        {
          name: "brotli",
        },
      ],
    },
  },
  {
    description: "disable compression",
    name: "-Z",
  },
];

const forwardConnectionSuggestions: Fig.Suggestion[] = [
  {
    name: "tcp",
    insertValue: "tcp:",
  },
  {
    name: "localabstract",
    insertValue: "localabstract:",
  },
  {
    name: "localreserved",
    insertValue: "localreserved:",
  },
  {
    name: "localfilesystem",
    insertValue: "localfilesystem:",
  },
  {
    name: "dev",
    insertValue: "dev:",
  },
  {
    name: "jdwp",
    insertValue: "jdwp:",
  },
  {
    name: "acceptfd",
    insertValue: "acceptfd:",
  },
];

const reverseConnectionSuggestions: Fig.Suggestion[] = [
  {
    name: "tcp",
    insertValue: "tcp:",
  },
  {
    name: "localabstract",
    insertValue: "localabstract:",
  },
  {
    name: "localreserved",
    insertValue: "localreserved:",
  },
  {
    name: "localfilesystem",
    insertValue: "localfilesystem:",
  },
];

const completionSpec: Fig.Spec = {
  name: "adb",
  description: "Android Debug Bridge",
  subcommands: [
    {
      name: "devices",
      description: " list connected devices ",
      options: [
        {
          name: "-l",
          description: "long output",
        },
      ],
    },
    {
      name: "help",
      description: "show this help message",
    },
    {
      name: "get-state",
      description: "print offline | bootloader | device",
    },
    {
      name: "get-serialno",
      description: "print <serial-number>",
    },
    {
      name: "get-devpath",
      description: "print <device-path>",
    },
    {
      name: "remount",
      options: [
        {
          name: "-R",
          description: "reboot device",
        },
      ],
      description:
        "remount partitions read-write. if a reboot is required, -R will automatically reboot the device.",
    },
    {
      name: "jdwp",
      description: "list pids of processes hosting a JDWP transport",
    },
    {
      name: "root",
      description: "restart adbd with root permissions",
    },
    {
      name: "unroot",
      description: "restart adbd without root permissions",
    },
    {
      name: "usb",
      description: "restart adbd listening on USB",
    },
    {
      name: "sideload",
      description: "sideload the given full OTA package",
      args: {
        name: "OTAPACKAGE",
      },
    },
    {
      description: "ensure that there is a server running",
      name: "start-server",
    },
    {
      description: "kill the server if it is running",
      name: "kill-server",
    },
    {
      description: "kick connection from host side to force reconnect",
      name: "reconnect",
      subcommands: [
        {
          description: "kick connection from device side to force reconnect",
          name: "device",
        },
        {
          description: "reset offline/unauthorized devices to force reconnect`",
          name: "offline",
        },
      ],
    },
    {
      name: "tcpip",
      description: "restart adbd listening on TCP on PORT",
      args: {
        name: "PORT",
      },
    },
    {
      name: "reboot",
      args: [
        {
          isOptional: true,
          name: "type",
          suggestions: [
            {
              name: "bootloader",
            },
            {
              name: "recovery",
            },
            {
              name: "sideload",
            },
            {
              name: "sideload-auto-reboot",
            },
          ],
        },
      ],
      description:
        "reboot the device; defaults to booting system image but supports bootloader and recovery too. sideload reboots into recovery and automatically starts sideload mode, sideload-auto-reboot is the same but reboots after sideloading.",
    },
    {
      name: "disable-verity",
      description: "disable dm-verity checking on userdebug builds",
    },
    {
      name: "enable-verity",
      description: "re-enable dm-verity checking on userdebug builds",
    },
    {
      name: "wait-for-device",
      description: "wait for state=device",
    },
    {
      name: "wait-for-recovery",
      description: "wait for state=recovery",
    },
    {
      name: "wait-for-rescue",
      description: "wait for state=rescue",
    },
    {
      name: "wait-for-sideload",
      description: "wait for state=sideload",
    },
    {
      name: "wait-for-bootloader",
      description: "wait for state=bootloader",
    },
    {
      name: "wait-for-disconnect",
      description: "wait for state=disconnect",
    },
    {
      name: "wait-for-usb-device",
      description: "wait for usb in state=device",
    },
    {
      name: "wait-for-usb-recovery",
      description: "wait for usb in state=recovery",
    },
    {
      name: "wait-for-usb-rescue",
      description: "wait for usb in state=rescue",
    },
    {
      name: "wait-for-usb-sideload",
      description: "wait for usb in state=sideload",
    },
    {
      name: "wait-for-usb-bootloader",
      description: "wait for usb in state=bootloader",
    },
    {
      name: "wait-for-usb-disconnect",
      description: "wait for usb in state=disconnect",
    },

    {
      name: "wait-for-local-device",
      description: "wait for local in state=device",
    },
    {
      name: "wait-for-local-recovery",
      description: "wait for local in state=recovery",
    },
    {
      name: "wait-for-local-rescue",
      description: "wait for local in state=rescue",
    },
    {
      name: "wait-for-local-sideload",
      description: "wait for local in state=sideload",
    },
    {
      name: "wait-for-local-bootloader",
      description: "wait for local in state=bootloader",
    },
    {
      name: "wait-for-local-disconnect",
      description: "wait for local in state=disconnect",
    },

    {
      name: "wait-for-any-device",
      description: "wait for any in state=device",
    },
    {
      name: "wait-for-any-recovery",
      description: "wait for any in state=recovery",
    },
    {
      name: "wait-for-any-rescue",
      description: "wait for any in state=rescue",
    },
    {
      name: "wait-for-any-sideload",
      description: "wait for any in state=sideload",
    },
    {
      name: "wait-for-any-bootloader",
      description: "wait for any in state=bootloader",
    },
    {
      name: "wait-for-any-disconnect",
      description: "wait for any in state=disconnect",
    },

    {
      name: "keygen",
      description:
        "generate adb public/private key; private key stored in FILE",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "logcat",
      description: "show device log (logcat --help for more)",
    },
    {
      name: "version",
      description: "show version num",
    },
    {
      name: "connect",
      description: "connect to a device via TCP/IP [default port=5555]",
      args: {
        name: "HOST[:PORT]",
      },
    },
    {
      name: "disconnect",
      description:
        "disconnect from given TCP/IP device [default port=5555], or all",
      args: {
        name: "HOST[:PORT]",
        isOptional: true,
      },
    },
    {
      name: "uninstall",
      description: "remove this app package from the device",
      options: [
        {
          name: "-k",
          description: "keep the data and cache directories",
        },
      ],
    },
    {
      name: "bugreport",
      description: "write bugreport to given PATH [default=bugreport.zip];",
      args: [
        {
          name: "PATH",
          isOptional: true,
        },
      ],
    },
    {
      name: "pair",
      description: "pair with a device for secure TCP/IP communication",
      args: [
        {
          name: "HOST[:PORT]",
        },
        {
          name: "[PAIRING CODE]",
          isOptional: true,
        },
      ],
    },
    {
      name: "ppp",
      description: "run PPP over USB",
      args: [
        {
          name: "TTY",
        },
        {
          name: "[PARAMETER...]",
          isVariadic: true,
          isOptional: true,
        },
      ],
    },
    {
      name: "emu",
      description: "run emulator console command",
      args: [
        {
          name: "COMMAND",
        },
      ],
    },
    {
      name: "install",
      description: "push a single package to the device and install it",
      args: [
        {
          name: "PACKAGE",
          template: "filepaths",
        },
      ],
      options: installOptions,
    },
    {
      name: "install-multiple",
      description:
        "push multiple APKs to the device for a single package and install them",
      args: [
        {
          name: "PACKAGE",
          template: "filepaths",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: "-p",
          description: "partial application install (install-multiple only)",
        },
        ...installOptions,
      ],
    },
    {
      name: "install-multi-package",
      description:
        "push one or more packages to the device and install them atomically",
      args: [
        {
          name: "PACKAGE",
          template: "filepaths",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: "-p",
          description: "partial application install (install-multiple only)",
        },
        ...installOptions,
      ],
    },
    {
      name: "shell",
      description:
        "run remote shell command (interactive shell if no command given)",
      options: [
        {
          name: "-e",
          description: "choose escape character, or `none` default '~'",
        },
        {
          name: "-n",
          description: "don't read from stdin",
        },
        {
          name: "-T",
          description: "disable pty allocation",
        },
        {
          name: "-t",
          description: " allocate a pty if on a tty",
        },
        {
          name: "-tt",
          description: "-tt: force pty allocation",
        },
        {
          name: "-x",
          description: "disable remote exit codes and stdout/stderr separation",
        },
      ],
      args: {
        isOptional: true,
        name: "COMMANDS ...",
        isVariadic: true,
      },
    },
    {
      name: "mdns",
      description: "mdns utils",
      subcommands: [
        {
          name: "check",
          description: "check if mdns discovery is available",
        },
        {
          name: "services",
          description: "list all discovered services",
        },
      ],
    },
    {
      name: "push",
      description: "copy local files/directories to device",
      options: [
        {
          description:
            "only push files that are newer on the host than the device",
          name: "--sync",
        },
        {
          description:
            "dry run: push files to device without storing to the filesystem",
          name: "-n",
        },
        ...compressionOptions,
      ],
      args: [
        {
          name: "LOCAL",
          isVariadic: true,
          template: "filepaths",
        },
        {
          name: "REMOTE",
        },
      ],
    },
    {
      name: "sync",
      description:
        "sync a local build from $ANDROID_PRODUCT_OUT to the device (default all)",
      options: [
        {
          description:
            "dry run: push files to device without storing to the filesystem",
          name: "-n",
        },
        {
          description: "list files that would be copied, but don't copy them",
          name: "-l",
        },
        ...compressionOptions,
      ],
      args: {
        isOptional: true,
        suggestions: [
          {
            name: "all",
          },
          {
            name: "data",
          },
          {
            name: "odm",
          },
          {
            name: "oem",
          },
          {
            name: "product",
          },
          {
            name: "system",
          },
          {
            name: "system_ext",
          },
          {
            name: "vendor",
          },
        ],
      },
    },
    {
      name: "pull",
      description: "copy files/dirs from device",
      options: [
        {
          description: "preserve file timestamp and mode",
          name: "-a",
        },
        ...compressionOptions,
      ],
      args: [
        {
          name: "REMOTE",
          isVariadic: true,
          template: "filepaths",
        },
        {
          name: "LOCAL",
        },
      ],
    },
    {
      name: "forward",
      description: "forward connection",
      options: [
        {
          name: "--list",
          description: "list all forward socket connections",
        },
        {
          name: "--remove",
          description: "remove specific forward socket connection",
          args: {
            name: "LOCAL",
          },
        },
        {
          name: "--remove-all",
          description: "remove all forward socket connections",
        },
        {
          name: "--no-rebind",
          description:
            "reversal fails if the specified socket is already bound through a previous reverse command",
        },
      ],
      args: [
        {
          name: "LOCAL -> port|domain|device|pid",
          suggestions: forwardConnectionSuggestions,
        },
        {
          name: "REMOTE -> port|domain|device|pid",
          suggestions: forwardConnectionSuggestions,
        },
      ],
    },
    {
      name: "reverse",
      description: "reverse connection",
      options: [
        {
          name: "--list",
          description: "list all reverse socket connections from device",
        },
        {
          name: "--remove",
          description: "remove specific reverse socket connection",
          args: {
            name: "REMOTE",
          },
        },
        {
          name: "--remove-all",
          description: "remove all reverse socket connections from device",
        },
        {
          name: "--no-rebind",
          description:
            "reversal fails if the specified socket is already bound through a previous reverse command",
        },
      ],
      args: [
        {
          name: "REMOTE -> port|domain|device|pid",
          suggestions: reverseConnectionSuggestions,
        },
        {
          name: "LOCAL -> port|domain|device|pid",
          suggestions: reverseConnectionSuggestions,
        },
      ],
    },
  ],
  options: [
    {
      description: "listen on all network interfaces, not just localhost",
      name: "-a",
    },
    {
      description: "use USB device (error if multiple devices connected)",
      name: "-d",
    },
    {
      description:
        "use TCP/IP device (error if multiple TCP/IP devices available)",
      name: "-e",
    },
    {
      description: "use device with given serial (overrides $ANDROID_SERIAL)",
      name: "-s",
      args: {
        name: "SERIAL",
      },
    },
    {
      description: "use device with given transport id",
      name: "-t",
      args: {
        name: "ID",
      },
    },
    {
      description: "name of adb server host [default=localhost]",
      name: "-H",
      args: {
        name: "host name",
      },
    },
    {
      description: "port of adb server [default=5037]",
      name: "-P",
      args: {
        name: "port",
      },
    },
    {
      description:
        "listen on given socket for adb server [default=tcp:localhost:5037]",
      name: "-L",
      args: {
        name: "socket",
      },
    },
  ],
};

export default completionSpec;
