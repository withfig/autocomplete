export const connectediOSDevices: Fig.Generator = {
  script: ["bash", "-c", "idevice_id -l | xargs -I {} ideviceinfo -s -u {}"],
  postProcess: (output) => {
    const devicesInfo: { deviceName?: string; udid?: string }[] = [];

    // Regular expression to match DeviceName and UniqueDeviceID
    const deviceNameRegex = /^DeviceName:\s*(.*)$/;
    const uniqueDeviceIDRegex = /^UniqueDeviceID:\s*(.*)$/;

    let currentDeviceInfo: { deviceName?: string; udid?: string } = {};

    output.split("\n").forEach((line) => {
      const deviceNameMatch = line.match(deviceNameRegex);
      if (deviceNameMatch) {
        currentDeviceInfo.deviceName = deviceNameMatch[1];
        return;
      }

      const uniqueDeviceIDMatch = line.match(uniqueDeviceIDRegex);
      if (uniqueDeviceIDMatch) {
        currentDeviceInfo.udid = uniqueDeviceIDMatch[1];

        // If we have both deviceName and udid, push the currentDeviceInfo to devicesInfo
        if (currentDeviceInfo.deviceName && currentDeviceInfo.udid) {
          devicesInfo.push(currentDeviceInfo);
          currentDeviceInfo = {};
        }
        return;
      }

      // If we encounter a blank line, reset currentDeviceInfo
      if (line.trim() === "") {
        currentDeviceInfo = {};
      }
    });
    console.log(devicesInfo);
    return devicesInfo.map((device) => {
      return {
        displayName: `${device.deviceName} (${device.udid})`,
        name: device.udid,
        insertValue: device.udid,
        icon: "fig://icon?type=apple",
      };
    });
  },
};
const completionSpec: Fig.Spec = {
  name: "ideviceinfo",
  description: "Show information about a connected iOS device",
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for ideviceinfo",
    },
    {
      name: ["-u", "--udid"],
      description: "Target specific device by UDID",
      args: {
        name: "UDID",
        generators: connectediOSDevices,
      },
    },
    {
      name: ["-n", "--network"],
      description: "Connect to a network device",
    },
    {
      name: ["-s", "--simple"],
      description:
        "Use a simple connection to avoid auto-pairing with the device",
    },
    {
      name: ["-q", "--domain"],
      description: "Set domain of query to NAME. Default: None",
      args: {
        name: "Domain",
        suggestions: [
          "com.apple.disk_usage",
          "com.apple.disk_usage.factory",
          "com.apple.mobile.battery",
          "com.apple.iqagent",
          "com.apple.purplebuddy",
          "com.apple.PurpleBuddy",
          "com.apple.mobile.chaperone",
          "com.apple.mobile.third_party_termination",
          "com.apple.mobile.lockdownd",
          "com.apple.mobile.lockdown_cache",
          "com.apple.xcode.developerdomain",
          "com.apple.international",
          "com.apple.mobile.data_sync",
          "com.apple.mobile.tethered_sync",
          "com.apple.mobile.mobile_application_usage",
          "com.apple.mobile.backup",
          "com.apple.mobile.nikita",
          "com.apple.mobile.restriction",
          "com.apple.mobile.user_preferences",
          "com.apple.mobile.sync_data_class",
          "com.apple.mobile.software_behavior",
          "com.apple.mobile.iTunes.SQLMusicLibraryPostProcessCommands",
          "com.apple.mobile.iTunes.accessories",
          "com.apple.mobile.internal",
          "com.apple.mobile.wireless_lockdown",
          "com.apple.fairplay",
          "com.apple.iTunes",
          "com.apple.mobile.iTunes.store",
          "com.apple.mobile.iTunes",
        ],
      },
    },
    {
      name: ["-k", "--key"],
      description: "Only query key specified by NAME. Default: All keys",
      args: {
        name: "Key",
      },
    },
    {
      name: ["-x", "--xml"],
      description: "Output information as xml plist instead of key/value pairs",
    },
    {
      name: ["-d", "--debug"],
      description: "Enable communication debugging",
    },
    {
      name: ["-v", "--version"],
      description: "Prints version information",
    },
  ],
};
export default completionSpec;
