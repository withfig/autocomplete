const infoLines = [
  {
    name: "os",
    description: "Operating system",
  },
  {
    name: "host",
    description: "Computer's name",
  },
  {
    name: "kernel",
    description: "Kernel version",
  },
  {
    name: "uptime",
    description: "Time since boot",
  },
  {
    name: "packages",
    description:
      "Number of packages installed by every package manager installed",
  },
  {
    name: "shell",
    description: "Current CLI shell",
  },
  {
    name: "terminal",
    description: "That hAcKeR black window you type on",
  },
  {
    name: "cpu",
    description: "Central Processing Unit, the brain of the computer",
  },
  {
    name: "gpu",
    description: "Graphics Processing Unit, calculates which pixels to draw",
  },
  {
    name: "memory",
    description: "Used & available system memory",
  },
  {
    name: "disk",
    description: "System disks",
  },
  {
    name: "battery",
    description: "System battery charge",
  },
  {
    name: "monitor",
    description: "Screens",
  },
  {
    name: "wm",
    description: "Window Manager, draws & moves your app's windows",
  },
  {
    name: "de",
    description:
      "Desktop Environment, holds UI elements like the app taskbar & dock",
  },
];

const onOff: Fig.Arg = {
  name: "on/off",
  suggestions: ["on", "off"],
};
const onOffTiny: Fig.Arg = {
  name: "on/off",
  suggestions: ["on", "off", "tiny"],
};
const num: Fig.Arg = {
  name: "[0-9]+",
};
const barInfobar: Fig.Arg = {
  name: "mode",
  suggestions: ["bar", "infobar", "barinfo", "off"],
};

const completionSpec: Fig.Spec = {
  name: "neofetch",
  description: "The most complete system information CLI tool",
  subcommands: infoLines,
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for neofetch",
    },
    {
      name: "--disable",
      description: "Disable information line",
      args: {
        name: "infoname",
        suggestions: infoLines,
      },
    },
    {
      name: "--title_fqdn",
      description: "Hide/Show Fully Qualified Domain Name in title",
      args: onOff,
    },
    {
      name: "--package_managers",
      description: "Hide/Show Package Manager names",
      args: onOffTiny,
    },
    {
      name: "--os_arch",
      description: "Hide/Show OS architecture",
      args: onOff,
    },
    {
      name: "--speed_type",
      description: "Change the type of cpu speed to display",
      args: [
        { name: "current" },
        { name: "min" },
        { name: "max" },
        { name: "bios" },
        { name: "scaling_current" },
        { name: "scaling_min" },
        { name: "scaling_max" },
      ],
    },
    {
      name: "--speed_shorthand",
      description: "Whether or not to show decimals in CPU speed",
      args: onOff,
    },
    {
      name: "--cpu_brand",
      description: "Enable/Disable CPU brand in output",
      args: onOff,
    },
    {
      name: "--cpu_cores",
      description: "Whether or not to display the number of CPU cores",
      args: [{ name: "logical" }, { name: "physical" }, { name: "off" }],
    },
    {
      name: "--cpu_speed",
      description: "Hide/Show cpu speed",
      args: onOff,
    },
    {
      name: "--cpu_temp",
      description: "Hide/Show cpu temperature",
      args: [{ name: "C" }, { name: "F" }, { name: "off" }],
    },
    {
      name: "--distro_shorthand",
      description: "Shorten the output of distro",
      args: onOffTiny,
    },
    {
      name: "--kernel_shorthand",
      description: "Shorten the output of kernel",
      args: onOff,
    },
    {
      name: "--uptime_shorthand",
      description: "Shorten the output of uptime",
      args: onOffTiny,
    },
    {
      name: "--refresh_rate",
      description: "Whether to display the refresh rate of each monitor",
      args: onOff,
    },
    {
      name: "--gpu_brand",
      description: "Enable/Disable GPU brand in output",
      args: onOff,
    },
    {
      name: "--gpu_type",
      description: "Which GPU to display",
      args: [{ name: "all" }, { name: "dedicated" }, { name: "integrated" }],
    },
    {
      name: "--de_version",
      description: "Show/Hide Desktop Environment version",
      args: onOff,
    },
    {
      name: "--gtk_shorthand",
      description: "Shorten output of gtk theme/icons",
      args: onOff,
    },
    {
      name: "--gtk2",
      description: "Enable/Disable gtk2 theme/font/icons output",
      args: onOff,
    },
    {
      name: "--gtk3",
      description: "Enable/Disable gtk3 theme/font/icons output",
      args: onOff,
    },
    {
      name: "--shell_path",
      description: "Enable/Disable showing $SHELL path",
      args: onOff,
    },
    {
      name: "--shell_version",
      description: "Enable/Disable showing $SHELL version",
      args: onOff,
    },
    {
      name: "--disk_show",
      description: "Which disks to display",
      // todo write function to get block devices and current mountpoints
    },
    {
      name: "--disk_subtitle",
      description: "What information to append to the Disk subtitle",
      args: [
        { name: "name" },
        { name: "mount" },
        { name: "dir" },
        { name: "none" },
      ],
    },
    {
      name: "--disk_percent",
      description: "Hide/Show disk percent",
      args: onOff,
    },
    {
      name: "--ip_host",
      description: "URL to query for public IP",
      args: { name: "https://..." },
    },
    {
      name: "--ip_timeout",
      description: "Public IP timeout",
      args: { name: "X seconds" },
    },
    {
      name: "--memory_percent",
      description: "Display memory percentage",
      args: onOff,
    },
    {
      name: "--memory_unit",
      description: "Memory output unit",
      args: [{ name: "kib" }, { name: "mib" }, { name: "gib" }],
    },
    {
      name: "--colors",
      description: "Changes the text colors",
      args: [
        {
          name: "#",
          description: "Title",
        },
        {
          name: "#",
          description: "@",
        },
        {
          name: "#",
          description: "Underline",
        },
        {
          name: "#",
          description: "Subtitle",
        },
        {
          name: "#",
          description: "Colon",
        },
        {
          name: "#",
          description: "Info",
        },
      ],
    },
    {
      name: "--underline",
      description: "Enable/Disable the underline",
      args: onOff,
    },
    {
      name: "--underline_char",
      description: "Character to use when underlining title",
      args: { name: "..." },
    },
    {
      name: "--bold",
      description: "Enable/Disable bold text",
      args: onOff,
    },
    {
      name: "--separator",
      description: "Changes the default ':' separator to the specified string",
      args: { name: "..." },
    },
    {
      name: "--color_blocks",
      description: "Enable/Disable the color blocks",
      args: onOff,
    },
    {
      name: "--col_offset",
      description: "Left-padding of color blocks",
      args: [{ name: "auto" }, num],
    },
    {
      name: "--block_width",
      description: "Width of color blocks in spaces",
      args: num,
    },
    {
      name: "--block_height",
      description: "Height of color blocks in lines",
      args: num,
    },
    {
      name: "--block_range",
      description: "Range of colors to print as blocks",
      args: [num, num],
    },
    {
      name: "--bar_char",
      description: "Characters to use when drawing bars",
      args: [
        {
          name: "...",
          description: "Elapsed char",
        },
        {
          name: "...",
          description: "Total char",
        },
      ],
    },
    {
      name: "--bar_border",
      description: "Whether or not to surround the bar with '[]'",
      args: onOff,
    },
    {
      name: "--bar_length",
      description: "Length in spaces to make the bars",
      args: num,
    },
    {
      name: "--bar_colors",
      description: "Colors to make the bar",
      args: [
        {
          name: "#",
          description: "Elapsed",
        },
        {
          name: "#",
          description: "Total",
        },
      ],
    },
    {
      name: "--cpu_display",
      description: "CPU bar mode",
      args: barInfobar,
    },
    {
      name: "--memory_display",
      description: "Memory display mode",
      args: barInfobar,
    },
    {
      name: "--battery_display",
      description: "Battery display mode",
      args: barInfobar,
    },
    {
      name: "--disk_display",
      description: "Disk display mode",
      args: barInfobar,
    },
    {
      name: "--backend",
      description: "Which image backend to use",
      args: [
        { name: "ascii" },
        { name: "caca" },
        { name: "chafa" },
        { name: "jp2a" },
        { name: "iterm2" },
        { name: "off" },
        { name: "pixterm" },
        { name: "pot" },
        { name: "sixel" },
        { name: "termpix" },
        { name: "tycat" },
        { name: "w3m" },
        { name: "kitty" },
      ],
    },
    {
      name: "--source",
      description: "Which image or ascii file to use",
      args: [
        { name: "auto" },
        { name: "ascii" },
        { name: "wallpaper" },
        { name: "/path" },
      ],
    },
    {
      name: "--ascii",
      description: "Same as --backend ascii",
    },
    {
      name: "--caca",
      description: "Same as --backend chafa",
    },
    {
      name: "--chafa",
      description: "Same as --backend chafa",
    },
    {
      name: "--iterm2",
      description: "Same as --backend iterm2",
    },
    {
      name: "--jp2a",
      description: "Same as --backend jp2a",
    },
    {
      name: "--kitty",
      description: "Same as --backend kitty",
    },
    {
      name: "--pot",
      description: "Same as --backend pot",
    },
    {
      name: "--pixterm",
      description: "Same as --backend pixterm",
    },
    {
      name: "--sixel",
      description: "Same as --backend sixel",
    },
    {
      name: "--termpix",
      description: "Same as --backend termpix",
    },
    {
      name: "--tycat",
      description: "Same as --backend tycat",
    },
    {
      name: "--w3m",
      description: "Same as --backend w3m",
    },
    {
      name: "--off",
      description: "Same as --backend off",
    },
    {
      name: "--ascii_colors",
      description: "Colors to print the ascii art",
      args: [
        {
          name: "#",
        },
        {
          name: "#",
        },
        {
          name: "#",
        },
        {
          name: "#",
        },
        {
          name: "#",
        },
        {
          name: "#",
        },
      ],
    },
    {
      name: "--ascii_distro",
      description: "Which Distro's ascii art to print",
      args: { name: "OS" },
    },
    {
      name: "--ascii_bold",
      description: "Whether or not to bold the ascii logo",
      args: onOff,
    },
    {
      name: ["-L", "--logo"],
      description: "Hide the info text and only show the ascii logo",
    },
    {
      name: "--loop",
      description: "Redraw the image constantly until Ctrl+C is used",
    },
    {
      name: "--size",
      description: "How to size the image",
      args: [{ name: "auto" }, { name: "[0-9]+px" }, { name: "[0-9]+%" }],
    },
    {
      name: "--crop_mode",
      description: "Which crop mode to use",
      args: [{ name: "normal" }, { name: "fit" }, { name: "fill" }],
    },
    {
      name: "--crop_offset",
      description: "Change the crop offset for normal mode",
      args: [{ name: "northwest" }, { name: "north" }, { name: "northeast" }],
    },
    {
      name: "--xoffset",
      description:
        "How close the image will be to the left edge of the window. This only works with w3m",
      args: {
        name: "[0-9]+px",
      },
    },
    {
      name: "--yoffset",
      description:
        "How close the image will be to the top edge of the window. This only works with w3m",
      args: {
        name: "[0-9]+px",
      },
    },
    {
      name: "--gap",
      description: "Gap between image and text",
      args: num,
    },
    {
      name: "--clean",
      description: "Delete cached files and thumbnails",
    },
    {
      name: "--config",
      description: "Specify a path to a custom config file",
      args: [{ name: "path" }, { name: "none" }],
    },
    {
      name: "--no_config",
      description: "Don't create the user config file",
    },
    {
      name: "--print_config",
      description: "Print the default config file to stdout",
    },
    {
      name: "--stdout",
      description: "Turn off all colors and disables any ASCII/image backend",
    },
    {
      name: "--version",
      description: "Show neofetch version",
    },
    {
      name: "-v",
      description: "Display error messages",
    },
    {
      name: "-vv",
      description: "Display a verbose log for error reporting",
    },
    {
      name: "--gen-man",
      description: "Generate a manpage for Neofetch in your PWD",
    },
  ],
};

export default completionSpec;
