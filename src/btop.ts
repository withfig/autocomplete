const completionSpec: Fig.Spec = {
  name: "btop",
  description: "Beautifuler htop (interactive process viewer)",
  options: [
    {
      name: ["--help", "-h"],
      description: "Shows help for btop",
    },
    {
      name: ["--low-color", "-lc"],
      description: "Disables truecolor, converts 24-bit colors to 256-color",
    },
    {
      name: ["--tty_on", "-t"],
      description:
        "Forces ON tty mode, max 16 colors and tty friendly graph symbol",
      exclusiveOn: ["--tty_off"],
    },
    {
      name: ["--tty_off", "+t"],
      description: "Forces OFF tty mode",
      exclusiveOn: ["--tty_on"],
    },
    {
      name: ["--preset", "-p"],
      description: "Start with preset",
      args: {
        name: "id",
        suggestions: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      },
    },
    {
      name: "--utf-force",
      description: "Force start even if no UTF-8 locale was detected",
    },
    {
      name: "--debug",
      description:
        "Starts in DEBUG mode: shows microsecond timer for information collect and screen draw functions and sets loglevel to DEBUG",
    },
    {
      name: ["--version", "-v"],
      description: "Shows the version of btop",
    },
  ],
};
export default completionSpec;
