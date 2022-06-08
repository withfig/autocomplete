const completionSpec: Fig.Spec = {
  name: "wifi-password",
  args: {
    name: "SSID",
    description: "The name for a Wi-Fi network",
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
      args: {
        name: "SSID",
        description: "The name for a Wi-Fi network",
      },
    },
    {
      name: ["--version", "-V"],
      description: "Output version",
    },
  ],
};

export default completionSpec;
