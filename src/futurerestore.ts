const completionSpec: Fig.Spec = {
  name: "futurerestore",
  description: "IDR (idevicerestore) wrapper, allows manually specifying SEP and Baseband for restoring unsigned & signed firmwares",
  options: [
    {
      name: ["--apticket", "-t"],
      description: "Signing tickets used for restoring, commonly known as blobs",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: ["--update", "-u"],
      description: "Update instead of erase install (requires appropriate APTicket). This parameter is recommended to not be used for downgrading. If you are jailbroken, make sure to have your orig-fs snapshot restored (Restore RootFS)",
    },
    {
      name: ["--wait", "-w"],
      description: "Keep rebooting until ApNonce matches APTicket (ApNonce collision, unreliable)",
    },
    {
      name: ["--debug", "-d"],
      description: "Show all code, use to save a log for debug testing",
    },
    {
      name: ["--exit-recovery", "-e"],
      description: "Exit recovery mode and quit",
    },
    {
      name: ["--custom-latest", "-c"],
      description: "Specify custom latest version to use for SEP, Baseband and other FirmwareUpdater components",
      args: { 
        name: "VERSION" 
      },
    },
    {
      name: ["--custom-buildid", "-g"],
      description: "Specify custom build identifier version to use for SEP, Baseband and other FirmwareUpdater components",
      args: { 
        name: "BUILDID" 
      },
    },
    {
      name: ["--custom-latest-beta", "-i"],
      description: "Get custom url from list of beta firmwares",
    },
    {
      name: ["--custom-latest-ota", "-k"],
      description: "Get custom url from list of OTA firmwares",
    },
    {
      name: ["--use-pwndfu", "-3"],
      description: "Restoring devices with Odysseus method. Device needs to be in pwned DFU mode already",
    },
    {
      name: ["--no-ibss", "-4"],
      description: "Restoring devices with Odysseus method. For checkm8/iPwnder32 specifically, bootrom needs to be patched already with unless iPwnder",
    },
    {
      name: ["--rdsk", "-5"],
      description: "Set custom restore ramdisk for entering restoremode (requires use-pwndfu)",
      args: { 
        name: "FILE", 
        template: "filepaths" 
      },
    },
    {
      name: ["--rkrn", "-6"],
      description: "Set custom restore kernelcache for entering restoremode (requires use-pwndfu)",
      args: { 
        name: "FILE", 
        template: "filepaths" 
      },
    },
    {
      name: ["--set-nonce", "-7"],
      description: "Set custom nonce from your blob then exit recovery (requires use-pwndfu)",
      args: {
        name: "NONCE_GENERATOR",
        description: "Set custom nonce then exit recovery (requires use-pwndfu)",
        suggestions: [
          {
            name: "0x1111111111111111",
            description: "This is a default generator for the jailbreak unc0ver, and widely known as something that's easy to remember",
          },
          {
            name: "0xbd34a880be0b53f3",
            description: "This is a default generator for the jailbreaks Taurine, Odyssey, Chimera, and Electra",
          }
        ],
        isOptional: true
      }
    },
    {
      name: ["--serial", "-8"],
      description: "Enable serial during boot (requires serial cable and use-pwndfu)",
    },
    {
      name: ["--boot-args", "-9"],
      description: "Set custom restore boot-args (PROCEED WITH CAUTION) (requires use-pwndfu)",
      args: { 
        name: "BOOT_ARGUMENTS" 
      },
    },
    {
      name: ["--no-cache", "-a"],
      description: "Disable cached patched iBSS/iBEC(requires use-pwndfu)",
    },
    {
      name: ["--skip-blob", "-f"],
      description: "Skip SHSH blob validation (PROCEED WITH CAUTION) (requires use-pwndfu)",
    },
    {
      name: ["--latest-sep", "-0"],
      description: "Use latest signed SEP instead of manually specifying one",
    },
    {
      name: ["--no-rsep", "-j"],
      description: "Choose not to send Restore Mode SEP firmware command",
    },
    {
      name: ["--latest-baseband", "-1"],
      description: "Use latest signed baseband instead of manually specifying one",
    },
    {
      name: ["--no-baseband", "-2"],
      description: "Skip checks and don’t flash baseband. Only use this for device without a baseband (eg. iPod touch or Wi-Fi only iPads)",
    },
    {
      name: ["--sep", "-s"],
      description: "Manually specify SEP to be flashed",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: ["--sep-manifest", "-m"],
      description: "BuildManifest for requesting SEP ticket",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: ["--baseband", "-b"],
      description: "Manually specify baseband to be flashed",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: ["--baseband-manifest", "-p"],
      description: "BuildManifest for requesting baseband ticket",
      args: { name: "FILE", template: "filepaths" },
    },
  ],
};

export default completionSpec;
