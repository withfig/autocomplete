const completionSpec: Fig.Spec = {
  name: "wifi-password",
  args: {
    name: "SSID",
    description: "The name for a Wi-Fi network",
    generators: {
      script:
        "networksetup -listallhardwareports | awk '/Wi-Fi/{getline; print $2}' | xargs networksetup -listpreferredwirelessnetworks | tail -n +2 | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//'",
      // TODO: Replace this with `splitOn` once it's fixed
      postProcess: (out) => out.split("\n").map((line) => ({ name: line })),
    },
  },
  description:
    "People ask you for the Wi-Fi password. Answer quickly. macOS only",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for wifi-password",
    },
    {
      name: ["--quiet", "-q"],
      description: "Only output the password",
    },
    {
      name: ["--version", "-V"],
      description: "Output version",
    },
  ],
};

export default completionSpec;
