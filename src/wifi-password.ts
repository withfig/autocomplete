const completionSpec: Fig.Spec = {
  name: "wifi-password",
  args: {
    name: "SSID",
    description: "The name for a Wi-Fi network",
    generators: {
      script: [
        "bash",
        "-c",
        "networksetup -listallhardwareports | awk '/Wi-Fi/{getline; print $2}' | xargs networksetup -listpreferredwirelessnetworks",
      ],
      postProcess: (out) =>
        out
          .split("\n")
          .slice(1)
          .map((line) => ({ name: line.trim() })),
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
