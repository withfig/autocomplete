const completionSpec: Fig.Spec = {
  name: "palera1n",
  description: "Jailbreaking tool for iOS/iPadOS 15.x-16.x arm64",
  options: [
    {
      name: "--version",
      description: "Print version",
    },
    {
      name: "--force-revert",
      description: "Remove jailbreak",
    },
    {
      name: ["--setup-partial-fakefs", "-B"],
      description: "Setup partial fakefs",
    },
    {
      name: ["--setup-fakefs", "-c"],
      description: "Setup fakefs",
    },
    {
      name: ["--demote", "-d"],
      description: "Demote",
    },
    {
      name: ["--dfuhelper", "-D"],
      description: "Exit after entering DFU",
    },
    {
      name: ["--boot-args", "-e"],
      description: "XNU boot arguments",
      args: { name: "BOOT_ARGUMENTS" },
    },
    {
      name: ["--enter-recovery", "-E"],
      description: "Enter recovery mode",
    },
    {
      name: ["--fakefs", "-f"],
      description: "Boot fakefs",
    },
    {
      name: ["--help", "-h"],
      description: "Show help for palera1n",
    },
    {
      name: ["--override-checkra1n", "-i"],
      description: "Override checkra1n",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: ["--override-pongo", "-k"],
      description: "Override Pongo image",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: ["--override-kpf", "-K"],
      description: "Override kernel patchfinder",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: ["--rootless", "-l"],
      description: "Boot rootless. This is the default",
    },
    {
      name: ["--jbinit-log-to-file", "-L"],
      description:
        "Make jbinit log to /cores/jbinit.log (can be read from sandbox while jailbroken)",
    },
    {
      name: ["--exit-recovery", "-n"],
      description: "Exit recovery mode",
    },
    {
      name: ["--device-info", "-I"],
      description: "Print info about the connected device",
    },
    {
      name: ["--override-overlay", "-o"],
      description: "Override overlay",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: ["--pongo-shell", "-p"],
      description: "Boots to PongoOS shell",
    },
    {
      name: ["--pongo-full", "-P"],
      description:
        "Boots to a PongoOS shell with default images already uploaded",
    },
    {
      name: ["--override-ramdisk", "-r"],
      description: "Override ramdisk",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: ["--reboot-device", "-R"],
      description: "Reboot connected device in normal mode",
    },
    {
      name: ["--safe-mode", "-s"],
      description: "Enter safe mode",
    },
    {
      name: ["--no-colors", "-S"],
      description: "Disable colors on the command line",
    },
    {
      name: ["--debug-logging", "-v"],
      description:
        "Enable debug logging. This option can be repeated for extra verbosity",
    },
    {
      name: ["--verbose-boot", "-V"],
      description: "Verbose boot",
    },
  ],
};

export default completionSpec;
