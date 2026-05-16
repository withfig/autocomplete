export interface SPDisplaysDataTypeOutputRoot {
  SPDisplaysDataType: SpdisplaysDataType[];
}

export interface SpdisplaysDataType {
  _name: string;
  _spdisplays_vram?: string;
  spdisplays_automatic_graphics_switching: string;
  "spdisplays_device-id": string;
  "spdisplays_gmux-version": string;
  spdisplays_mtlgpufamilysupport: string;
  "spdisplays_revision-id": string;
  spdisplays_vendor: string;
  spdisplays_vram_shared?: string;
  sppci_bus: string;
  sppci_device_type: string;
  sppci_model: string;
  "spdisplays_efi-version"?: string;
  spdisplays_ndrvs?: SpdisplaysNdrv[];
  "spdisplays_optionrom-version"?: string;
  spdisplays_pcie_width?: string;
  "spdisplays_rom-revision"?: string;
  "spdisplays_vbios-version"?: string;
  spdisplays_vram?: string;
}

export interface SpdisplaysNdrv {
  _IODisplayEDID: string;
  _name: string;
  "_spdisplays_display-product-id": string;
  "_spdisplays_display-serial-number2": string;
  "_spdisplays_display-vendor-id": string;
  "_spdisplays_display-week": string;
  "_spdisplays_display-year": string;
  _spdisplays_displayID: string;
  _spdisplays_displayPath: string;
  _spdisplays_displayport_device: SpdisplaysDisplayportDevice;
  _spdisplays_displayRegID: string;
  _spdisplays_edid: string;
  _spdisplays_pixels: string;
  _spdisplays_resolution: string;
  spdisplays_ambient_brightness?: string;
  spdisplays_connection_type: string;
  spdisplays_depth: string;
  spdisplays_display_type?: string;
  spdisplays_main?: string;
  spdisplays_mirror: string;
  spdisplays_online: string;
  spdisplays_pixelresolution: string;
  "_spdisplays_display-serial-number"?: string;
  spdisplays_resolution?: string;
  spdisplays_rotation?: string;
}

export interface SpdisplaysDisplayportDevice {
  _name: string;
  spdisplays_displayport_current_bandwidth: string;
  spdisplays_displayport_current_lanes: string;
  spdisplays_displayport_current_spread: string;
  spdisplays_displayport_DPCD_version: string;
  spdisplays_displayport_errors_lane0: string;
  spdisplays_displayport_errors_lane1: string;
  spdisplays_displayport_errors_lane2: string;
  spdisplays_displayport_errors_lane3: string;
  spdisplays_displayport_hdcp_capability: string;
  spdisplays_displayport_max_bandwidth: string;
  spdisplays_displayport_max_lanes: string;
  spdisplays_displayport_max_spread: string;
  spdisplays_displayport_sink_ascii_name?: string;
  spdisplays_displayport_sink_chip_version?: string;
  spdisplays_displayport_sink_count: string;
  spdisplays_displayport_sink_sw_version?: string;
  spdisplays_displayport_sink_vendor?: string;
  spdisplays_displayport_valid_error_lane0: string;
  spdisplays_displayport_valid_error_lane1: string;
  spdisplays_displayport_valid_error_lane2: string;
  spdisplays_displayport_valid_error_lane3: string;
}

const screenNumbers: Fig.Generator = {
  // one thing to note is that this is MacOS specific
  script: ["system_profiler", "SPDisplaysDataType", "-json"],
  postProcess: (output) => {
    if (output.includes("command not found")) {
      return [];
    }
    if (output.length === 0) {
      return [];
    }
    try {
      const data: SPDisplaysDataTypeOutputRoot = JSON.parse(output);

      const screens: Fig.Suggestion[] = [];

      for (const displayAdapter of data.SPDisplaysDataType) {
        if (displayAdapter.spdisplays_ndrvs) {
          for (const display of displayAdapter.spdisplays_ndrvs) {
            screens.push({
              description: display._name,
              icon: "🖥️",
            });
          }
        }
      }

      return screens.map((screen, index) => ({
        ...screen,
        name: String(index + 1),
      }));
    } catch (_error) {
      return [];
    }
  },
};

const completionSpec: Fig.Spec = {
  name: "gource",
  description:
    "Gource is an OpenGL-based 3D visualisation tool for source control repositories",
  options: [
    { name: ["-h", "--help"], description: "Help ('-H' for extended help)" },
    {
      name: "--viewport",
      description:
        "Set the viewport size. If -f is also supplied, will attempt to set the video mode to this also. Add `!` to make the window non-resizable",
      args: {
        name: "size",
        description: "The size of the viewport (e.g. WIDTHxHEIGHT)",
        suggestions: [
          "3840x2160",
          "2560x1440",
          "1920x1080",
          "1280x720",
          "800x600",
        ],
      },
    },
    {
      name: "-f",
      description: "Fullscreen",
    },
    {
      name: "--screen",
      description: "Set the number of the screen to display on",
      args: {
        name: "screen",
        description: "The number of the screen to display on",
        generators: screenNumbers,
      },
    },
    {
      name: "--high-dpi",
      description:
        "Request a high DPI display when creating the window. On some platforms such as MacOS, the window resolution is specified in points instead of pixels. The --high-dpi flag may be required to access some higher resolutions. E.g. requesting a high DPI 800x600 window may produce a window that is 1600x1200 pixels",
    },
    {
      name: "--window-position",
      description:
        "Initial window position on your desktop which may be made up of multiple monitors. This will override the screen setting so don't specify both",
      args: {
        name: "position",
        description: "The initial window position on your desktop (e.g. XxY)",
      },
    },
    {
      name: "--frameless",
      description: "Frameless window",
    },
    {
      name: "--transparent",
      description:
        "Make the background transparent. Only really useful for screenshots",
    },
    {
      name: "--start-date",
      description:
        "Start with the first entry after the supplied date and optional time. If a time zone offset isn't specified the local time zone is used. Example accepted formats: 'YYYY-MM-DD', 'YYYY-MM-DD hh:mm', 'YYYY-MM-DD hh:mm:ss +tz'",
      args: {
        name: "date",
        description: "The start date and optional time",
      },
    },
    {
      name: "--stop-date",
      description:
        "Stop at the last entry prior to the supplied date and optional time. Uses the same format as --start-date",
      args: {
        name: "date",
        description: "The stop date and optional time",
      },
    },
    {
      name: ["-p", "--start-position"],
      description:
        "Begin at some position in the log (between 0.0 and 1.0 or 'random')",
      args: {
        name: "position",
        description: "The start position in the log",
        suggestions: [
          "random",
          "0.0",
          "0.1",
          "0.2",
          "0.3",
          "0.4",
          "0.5",
          "0.6",
          "0.7",
          "0.8",
          "0.9",
          "1.0",
        ],
      },
    },
    {
      name: "--stop-position",
      description:
        "Stop (exit) at some position in the log (does not work with STDIN)",
      args: {
        name: "position",
        description: "The stop position in the log",
        suggestions: [
          "random",
          "0.0",
          "0.1",
          "0.2",
          "0.3",
          "0.4",
          "0.5",
          "0.6",
          "0.7",
          "0.8",
          "0.9",
          "1.0",
        ],
      },
    },
    {
      name: ["-t", "--stop-at-time"],
      description: "Stop (exit) after a specified number of seconds",
      args: {
        name: "seconds",
        description: "The number of seconds to wait before stopping",
      },
    },
    {
      name: "--stop-at-end",
      description: "Stop (exit) at the end of the log / stream",
    },
    {
      name: "--loop",
      description: "Loop back to the start of the log when the end is reached",
    },
    {
      name: "--loop-delay-seconds",
      description: "Seconds to delay before looping",
      args: {
        name: "seconds",
      },
    },
    {
      name: ["-a", "--auto-skip-seconds"],
      description:
        "Automatically skip to next entry if nothing happens for a specified number of seconds",
      args: {
        name: "seconds",
      },
    },
    {
      name: ["-s", "--seconds-per-day"],
      description: "Speed of simulation in seconds per day",
      args: {
        name: "seconds",
      },
    },
    { name: "--realtime", description: "Realtime playback speed" },
    {
      name: "--no-time-travel",
      description:
        "Use the time of the last commit if the time of a commit is in the past",
    },
    {
      name: ["-c", "--time-scale"],
      description: "Change simulation time scale",
    },
    {
      name: ["-i", "--file-idle-time"],
      description:
        "Time in seconds files remain idle before they are removed or 0 for no limit",
    },
    {
      name: "--file-idle-time-at-end",
      description:
        "Time in seconds files remain idle at the end before they are removed",
      args: {
        name: "seconds",
      },
    },
    {
      name: ["-e", "--elasticity"],
      description: "Elasticity of nodes",
      args: {
        name: "elasticity",
        description: "Elasticity of nodes",
      },
    },
    {
      name: ["-b", "--background-colour"],
      description: "Background colour in hex",
      args: {
        name: "colour",
      },
    },
    {
      name: "--background-image",
      description: "Set a background image",
      args: {
        name: "image file",
        template: "filepaths",
      },
    },
    {
      name: "--title",
      description: "Set a title",
      args: {
        name: "title",
      },
    },
    {
      name: "--font-file",
      description:
        "Specify the font. Should work with most font file formats supported by FreeType, such as TTF and OTF, among others",
      args: {
        name: "font file",
        template: "filepaths",
      },
    },
    {
      name: "--font-scale",
      description: "Scale the size of all fonts",
      args: {
        name: "scale",
        description: "Font scale",
      },
    },
    {
      name: "--font-size",
      description: "Font size used by the date and title",
      args: {
        name: "size",
        description: "Font size",
      },
    },
    {
      name: "--file-font-size",
      description: "Font size of filenames",
      args: {
        name: "size",
        description: "Font size",
      },
    },
    {
      name: "--dir-font-size",
      description: "Font size of directory names",
      args: {
        name: "size",
        description: "Font size",
      },
    },
    {
      name: "--user-font-size",
      description: "Font size of user names",
      args: {
        name: "size",
        description: "Font size",
      },
    },
    {
      name: "--font-colour",
      description: "Font colour used by the date and title in hex",
      args: {
        name: "colour",
        description: "Font colour",
      },
    },
    { name: "--key", description: "Show file extension key" },
    {
      name: "--logo",
      description: "Logo to display in the foreground",
      args: {
        name: "image file",
        template: "filepaths",
      },
    },
    {
      name: "--logo-offset",
      description: "Offset position of the logo",
      args: {
        name: "offset",
        description: "Logo offset",
      },
    },
    {
      name: "--date-format",
      description: "Specify display date string (strftime format)",
      args: {
        name: "format",
        description: "Date format",
      },
    },
    {
      name: "--log-command",
      description:
        "Show the log command used by gource (git,svn,hg,bzr,cvs2cl)",
      args: {
        name: "command",
        description: "Log command",
        suggestions: ["git", "svn", "hg", "bzr", "cvs2cl"],
      },
    },
    {
      name: "--log-format",
      description:
        "Specify format of the log being read (git,svn,hg,bzr,cvs2cl,custom). Required when reading from STDIN",
      args: {
        name: "format",
        description: "Log format",
        suggestions: ["git", "svn", "hg", "bzr", "cvs2cl", "custom"],
      },
    },
    {
      name: "--git-branch",
      description: "Get the git log of a branch other than the current one",
      args: {
        name: "branch",
      },
    },
    {
      name: "--follow-user",
      description: "Have the camera automatically follow a particular user",
      args: {
        name: "username",
        description: "Name of user to follow",
      },
    },
    {
      name: "--highlight-dirs",
      description: "Highlight the names of all directories",
    },
    {
      name: "--highlight-user",
      description: "Highlight the names of a particular user",
      args: {
        name: "username",
        description: "Name of user to highlight",
      },
    },
    {
      name: "--highlight-users",
      description: "Highlight the names of all users",
    },
    {
      name: "--highlight-colour",
      description: "Font colour for highlighted users in hex",
      args: {
        name: "colour",
        description: "Font colour (HEX)",
      },
    },
    {
      name: "--selection-colour",
      description: "Font colour for selected users and files",
      args: {
        name: "colour",
        description: "Font colour (HEX)",
      },
    },
    {
      name: "--filename-colour",
      description: "Font colour for filenames",
      args: {
        name: "colour",
        description: "Font colour (HEX)",
      },
    },
    {
      name: "--dir-colour",
      description: "Font colour for directories",
      args: {
        name: "color",
        description: "Dir colour (HEX)",
      },
    },
    {
      name: "--dir-name-depth",
      description:
        "Draw names of directories down to a specific depth in the tree",
      args: {
        name: "depth",
      },
    },
    {
      name: "--dir-name-position",
      description:
        "Position along edge of the directory name (between 0.1 and 1.0, default is 0.5)",
      args: {
        name: "position",
        suggestions: [
          "0.1",
          "0.2",
          "0.3",
          "0.4",
          "0.5",
          "0.6",
          "0.7",
          "0.8",
          "0.9",
          "1.0",
        ],
      },
    },
    {
      name: "--filename-time",
      description: "Duration to keep filenames on screen (>= 2.0)",
      args: {
        name: "time",
      },
    },
    {
      name: "--file-extensions",
      description: "Show filename extensions only",
    },
    {
      name: "--file-extension-fallback",
      description:
        "Use filename as extension if the extension is missing or empty",
    },
    {
      name: "--file-filter",
      description:
        "Filter out file paths matching the specified regular expression",
      args: {
        name: "regex",
      },
    },
    {
      name: "--file-show-filter",
      description:
        "Show only file paths matching the specified regular expression",
      args: {
        name: "regex",
      },
    },
    {
      name: "--user-filter",
      description: "Filter usernames matching the specified regular expression",
      args: {
        name: "regex",
      },
    },
    {
      name: "--user-show-filter",
      description:
        "Show only usernames matching the specified regular expression",
      args: {
        name: "regex",
      },
    },
    {
      name: "--user-image-dir",
      description:
        "Directory containing .jpg or .png images of users (eg 'Full Name.png') to use as avatars",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--default-user-image",
      description: "Path of .jpg to use as the default user image",
      args: {
        name: "User image",
        template: "filepaths",
      },
    },
    {
      name: "--fixed-user-size",
      description:
        "Forces the size of the user image to remain fixed throughout",
    },
    {
      name: "--colour-images",
      description: "Colourize user images",
    },
    {
      name: "--crop",
      description: "Crop view on an axis (vertical,horizontal)",
      args: {
        name: "axis",
      },
    },
    {
      name: "--padding",
      description: "Camera view padding",
      args: {
        name: "padding",
      },
    },
    {
      name: "--multi-sampling",
      description: "Enable multi-sampling",
    },
    {
      name: "--no-vsync",
      description: "Disable vsync",
    },
    {
      name: "--bloom-multiplier",
      description: "Adjust the amount of bloom",
      args: {
        name: "multiplier",
      },
    },
    {
      name: "--bloom-intensity",
      description: "Adjust the intensity of the bloom",
      args: {
        name: "intensity",
      },
    },
    {
      name: "--max-files",
      description:
        "Set the maximum number of files or 0 for no limit. Excess files will be discarded",
      args: {
        name: "number",
      },
    },
    {
      name: "--max-file-lag",
      description:
        "Max time files of a commit can take to appear. Use -1 for no limit",
      args: {
        name: "seconds",
      },
    },
    {
      name: "--max-user-speed",
      description: "Max speed users can travel per second",
      args: {
        name: "units",
      },
    },
    {
      name: "--user-friction",
      description: "Time users take to come to a halt",
      args: {
        name: "seconds",
      },
    },
    {
      name: "--user-scale",
      description: "Change scale of user avatars",
      args: {
        name: "scale",
      },
    },
    {
      name: "--camera-mode",
      description: "Camera mode (overview,track)",
      args: {
        name: "mode",
        suggestions: ["overview", "track"],
      },
    },
    {
      name: "--disable-auto-rotate",
      description: "Disable automatic camera rotation",
    },
    {
      name: "--disable-input",
      description: "Disable keyboard and mouse input",
    },
    {
      name: "--hide",
      description:
        "Hide one or more display elements from the list below: bloom - bloom effect date - current date dirnames - names of directories files - file icons filenames - names of files mouse - mouse cursor progress - progress bar widget root - root directory of the tree tree - animated tree structure users - user avatars usernames - names of users",
      args: {
        name: "element",
        description:
          'Element to hide (Separate multiple elements with commas (eg "mouse,progress"))',
        suggestions: [
          "bloom",
          "date",
          "dirnames",
          "files",
          "filenames",
          "mouse",
          "progress",
          "root",
          "tree",
          "users",
          "usernames",
        ],
        isVariadic: true,
      },
    },
    {
      name: "--hash-seed",
      description: "Change the seed of hash function",
      args: {
        name: "seed",
      },
    },
    {
      name: "--caption-file",
      description: "Caption file (see Caption Log Format)",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--caption-size",
      description: "Caption size",
      args: {
        name: "size",
      },
    },
    {
      name: "--caption-colour",
      description: "Caption colour in hex",
      args: {
        name: "colour",
        description: "Colour in hex (eg #ff0000)",
      },
    },
    {
      name: "--caption-duration",
      description: "Caption duration",
      args: {
        name: "seconds",
      },
    },
    {
      name: "--caption-offset",
      description: "Caption horizontal offset (0 to centre captions)",
      args: {
        name: "offset",
      },
    },
    {
      name: ["-o", "--output-ppm-stream"],
      description:
        "Output a PPM image stream to a file ('-' for STDOUT). This will automatically hide the progress bar initially and enable 'stop-at-end' unless other behaviour is specified",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["-r", "--output-framerate"],
      description:
        "Framerate of output (25,30,60). Used with --output-ppm-stream",
      args: {
        name: "fps",
        suggestions: ["25", "30", "60", "120"],
      },
    },
    {
      name: "--output-custom-log",
      description: "Output a custom format log file ('-' for STDOUT)",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--load-config",
      description: "Load a config file",
      args: {
        name: "config file",
        template: "filepaths",
      },
    },
    {
      name: "--save-config",
      description: "Save a config file with the current options",
      args: {
        name: "config file",
        template: "filepaths",
      },
    },
    {
      name: "--path",
      description:
        "Either a supported version control directory, a pre-generated log file (see log commands or the custom log format), a Gource conf file or '-' to read STDIN",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
  ],
};
export default completionSpec;
