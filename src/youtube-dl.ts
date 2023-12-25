const youtubeDlGenerators: Record<string, Fig.Generator> = {
  listVideos: {
    script: (context) => [
      "youtube-dl",
      "--flat-playlist",
      "-J",
      ...context.filter((token) => token.includes("youtube.")),
    ],

    postProcess: function (out) {
      try {
        return JSON.parse(out)["entries"].map((video, index) => {
          return {
            name: `${index + 1} - ${video.title}`,
            description: video.uploader,
            insertValue: `${index + 1}`,
            icon: "https://www.youtube.com/s/desktop/810941b4/img/favicon_32.png",
          };
        });
      } catch (e) {
        console.error(e);
        return [];
      }
    },
  },

  listClipboard: {
    script: ["pbpaste"],
    postProcess: function (out) {
      const regex = new RegExp(
        "^(https?://)?(www.)?(youtube.com|youtu.?be)/.+$"
      );
      try {
        if (regex.test(out))
          return [
            {
              name: out,
              description: "Clipboard",
              icon: "https://www.youtube.com/s/desktop/810941b4/img/favicon_32.png",
            },
          ];
      } catch (e) {
        console.error(e);
        return [];
      }
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "youtube-dl",
  description: "Download videos from YouTube",
  args: {
    name: "URL",
    generators: youtubeDlGenerators.listClipboard,
    isVariadic: true,
  },

  options: [
    {
      name: ["--help", "-h"],
      description: "Print the help text and exit",
    },
    {
      name: "--version",
      description: "Print program version and exit",
    },
    {
      name: ["-U", "--update"],
      description:
        "Update this program to latest version. Make sure you have sufficient permissions (run with sudo if needed)",
    },
    {
      name: ["--ignore-errors", "-i"],
      description:
        "Continue on download errors, for example to skip unavailable videos in a playlist",
    },
    {
      name: "--abort-on-error",
      description:
        "Abort downloading of further videos (in the playlist or the command line) if an error occurs",
    },
    {
      name: "--dump-user-agent",
      description: "Display the current browser identification",
    },
    {
      name: "--list-extractors",
      description: "List all supported extractors",
    },
    {
      name: "--extractor-descriptions",
      description: "Output descriptions of all supported extractors",
    },
    {
      name: "--default-search",
      description:
        'Use this prefix for unqualified URLs. For example "gvsearch2:" downloads two videos from google videos for youtube-dl "large apple"',
      args: {
        name: "PREFIX",
      },
    },
    {
      name: "--config-location",
      description:
        "Location of the configuration file; either the path to the config or its containing directory",
      args: {
        name: "PATH",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--force-generic-extractor",
      description: "Force extraction to use the generic extractor",
    },
    {
      name: "--ignore-config",
      description: "Do not read configuration files",
    },
    {
      name: "--flat-playlist",
      description: "Do not extract the videos of a playlist, only list them",
    },
    {
      name: "--mark-watched",
      description: "Mark videos watched (YouTube only)",
    },
    {
      name: "--no-mark-watched",
      description: "Do not mark videos watched (YouTube only)",
    },
    {
      name: "--no-color",
      description: "Do not emit color codes in output",
    },
    {
      name: "--proxy",
      description:
        "Use the specified HTTP/HTTPS/SOCKS proxy. Pass in an empty string for direct connection",
      insertValue: '--proxy "{cursor}"',
      args: {
        name: "URL",
      },
    },
    {
      name: "--socket-timeout",
      description: "Time to wait before giving up, in seconds",
      args: {
        name: "SECONDS",
      },
    },
    {
      name: "--source-address",
      description: "Client-side IP address to bind to",
      args: {
        name: "IP",
      },
    },
    {
      name: ["-4", "--force-ipv4"],
      description: "Make all connections via IPv4",
    },
    {
      name: ["-6", "--force-ipv6"],
      description: "Make all connections via IPv6",
    },
    {
      name: "--geo-verification-proxy",
      description:
        "Use this proxy to verify the IP address for some geo-restricted sites",
      args: {
        name: "URL",
      },
    },
    {
      name: "--geo-bypass",
      description:
        "Bypass geographic restriction via faking X-Forwarded-For HTTP header",
    },
    {
      name: "--no-geo-bypass",
      description:
        "Do not bypass geographic restriction via faking X-Forwarded-For HTTP header",
    },
    {
      name: "--geo-bypass-country",
      description:
        "Force bypass geographic restriction with explicitly provided two-letter ISO 3166-2 county code",
      args: {
        name: "CODE",
      },
    },
    {
      name: "--geo-bypass-ip-block",
      description:
        "Force bypass geographic restriction with explicitly provided IP block in CIDR notation",
      args: {
        name: "IP_BLOCK",
      },
    },
    {
      name: "--playlist-start",
      description: "Playlist video to start at (default is 1)",
      args: {
        name: "NUMBER",
        generators: youtubeDlGenerators.listVideos,
      },
    },
    {
      name: "--playlist-end",
      description: "Playlist video to end at (default is last)",
      args: {
        name: "NUMBER",
        generators: youtubeDlGenerators.listVideos,
      },
    },
    {
      name: "--playlist-items",
      description: "Playlist video to end at (default is last)",
      args: {
        name: "ITEM_SPEC",
        generators: youtubeDlGenerators.listVideos,
      },
    },
    {
      name: "--match-title",
      description:
        "Download only matching titles (regex or caseless sub-string)",
      args: {
        name: "REGEX",
      },
    },
    {
      name: "--reject-title",
      description:
        "Skip download for matching titles (regex or caseless sub-string)",
      args: {
        name: "REGEX",
      },
    },
    {
      name: "--max-downloads",
      description: "Abort after downloading NUMBER files",
      args: {
        name: "NUMBER",
      },
    },
    {
      name: "--min-filesize",
      description:
        "Do not download any videos smaller than SIZE (e.g. 50k or 44.6)",
      args: {
        name: "SIZE",
      },
    },
    {
      name: "--max-filesize",
      description:
        "Do not download any videos larger than SIZE (e.g. 50k or 44.6)",
      args: {
        name: "SIZE",
      },
    },
    {
      name: "--date",
      description: "Download only videos uploaded in this date",
      args: {
        name: "DATE",
      },
    },
    {
      name: "--datebefore",
      description:
        "Download only videos uploaded on or before this date (i.e. inclusive)",
      args: {
        name: "DATE",
      },
    },
    {
      name: "--dateafter",
      description:
        "Download only videos uploaded on or after this date (i.e. inclusive)",
      args: {
        name: "DATE",
      },
    },
    {
      name: "--min-views",
      description: "Do not download any videos with less than COUNT views",
      args: {
        name: "COUNT",
      },
    },
    {
      name: "--max-views",
      description: "Do not download any videos with more than COUNT views",
      args: {
        name: "COUNT",
      },
    },
    {
      name: "--match-filter",
      description: "Generic video filter",
      args: {
        name: "FILTER",
      },
    },
    {
      name: "--no-playlist",
      description:
        "Download only the video, if the URL refers to a video and a playlist",
    },
    {
      name: "--yes-playlist",
      description:
        "Download the playlist, if the URL refers to a video and a playlist",
    },
    {
      name: "--age-limit",
      description: "Download only videos suitable for the given age",
      args: {
        name: "YEARS",
      },
    },
    {
      name: "--download-archive",
      description:
        "Download only videos not listed in the archive file. Record the IDs of all downloaded videos in it",
      args: {
        name: "FILE",
      },
    },
    {
      name: "--include-ads",
      description: "Download advertisements as well (experimental)",
    },
    {
      name: ["-r", "--limit-rate"],
      description:
        "Maximum download rate in bytes per second (e.g. 50K or 4.2M)",
      args: {
        name: "RATE",
      },
    },
    {
      name: ["-R", "--retries"],
      description: 'Number of retries or "infinite"',
      args: {
        name: "RETRIES",
        default: "10",
      },
    },
    {
      name: "--fragment-retries",
      description: 'Number of retries for a fragment or "infinite"',
      args: {
        name: "RETRIES",
        default: "10",
      },
    },
    {
      name: "--skip-unavailable-fragments",
      description: "Skip unavailable fragments",
    },
    {
      name: "--abort-on-unavailable-fragments",
      description: "Abort downloading when some fragment is not available",
    },
    {
      name: "--keep-fragments",
      description:
        "Keep downloaded fragments on disk after downloading is finished; fragments are erased by default",
    },
    {
      name: "--buffer-size",
      description: "Size of download buffer (e.g. 1024 or 16K)",
      args: {
        name: "SIZE",
        default: "1024",
      },
    },
    {
      name: "--no-resize-buffer",
      description: "Do not automatically adjust the buffer size",
    },
    {
      name: "--http-chunk-size",
      description:
        "Size of a chunk for chunk-based HTTP downloading (e.g. 10385760 or 10M)",
      args: {
        name: "SIZE",
      },
    },
    {
      name: "--playlist-reverse",
      description: "Download playlist videos in reverse order",
    },
    {
      name: "--playlist-random",
      description: "Download playlist videos in random order",
    },
    {
      name: "--xattr-set-filesize",
      description: "Set file xattribute ytdl.filesize with expected file size",
    },
    {
      name: "--hls-prefer-native",
      description: "Use the native HLS downloader instead of ffmpeg",
    },
    {
      name: "--hls-prefer-ffmpeg",
      description: "Use ffmpeg instead of the native HLS downloader",
    },
    {
      name: "--hls-prefer-mpegts",
      description:
        "Use the mpegts container for HLS videos, allowing to play the video while downloading",
    },
    {
      name: "--external-downloader",
      description: "Use the specified external downloader",
      args: {
        name: "COMMAND",
        suggestions: [
          "aria2c",
          "avconv",
          "axel",
          "curl",
          "ffmpeg",
          "httpie",
          "wget",
        ],
      },
    },
    {
      name: "--external-downloader-args",
      description: "Give these arguments to the external downloader",
      dependsOn: ["--external-downloader"],
      args: {
        name: "ARGS",
      },
    },
    {
      name: ["-a", "--batch-file"],
      description:
        "File containing URLs to download ('-' for stdin), one URL per line. Lines starting with '#', ';' or ']' are considered as comments and ignored",
      args: {
        name: "FILE",
        suggestions: ["-"],
        template: ["filepaths"],
      },
    },
    {
      name: "--id",
      description: "Use only video ID in file name",
    },
    {
      name: ["-o", "--output"],
      description: "Output filename template",
      args: {
        name: "TEMPLATE",
      },
    },
    {
      name: "--output-na-placeholder",
      description:
        "Placeholder value for unavailable meta fields in output filename template",
      args: {
        name: "PLACEHOLDER",
        default: "NA",
      },
    },
    {
      name: "--autonumber-start",
      description: "Specify the start value for %(autonumber)s",
      args: {
        name: "NUMBER",
        default: "1",
      },
    },
    {
      name: "--restrict-filenames",
      description:
        'Restrict filenames to only ASCII characters, and avoid "&" and spaces in filenames',
    },
    {
      name: ["-w", "--no-overwrites"],
      description: "Do not overwrite files",
    },
    {
      name: ["-c", "--continue"],
      description:
        "Do not resume partially downloaded files (restart from beginning)",
    },
    {
      name: "--no-part",
      description: "Do not use .part files - write directly into output file",
    },
    {
      name: "--no-mtime",
      description:
        "Do not use the Last-modified header to set the file modification time",
    },
    {
      name: "--write-description",
      description: "Write video descriptions to a .description file",
    },
    {
      name: "--write-info-json",
      description: "Write video metadata to a .info.json file",
    },
    {
      name: "--write-annotations",
      description: "Write video annotations to a .annotations.xml file",
    },
    {
      name: "--load-info-json",
      description:
        'JSON file containing the video information (created with the "--write-info-json" option',
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--cookies",
      description: "File to read cookies from and dump cookie jar in",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--cache-dir",
      description:
        "Location in the filesystem where youtube-dl can store some downloaded information permanently",
      args: {
        name: "DIR",
        template: "folders",
        default: "$XDG_CACHE_HOME/youtube-dl",
      },
    },
    {
      name: "--no-cache-dir",
      description: "Disable filesystem caching",
    },
    {
      name: "--rm-cache-dir",
      description: "Delete all filesystem cache files",
    },
    {
      name: "--write-thumbnail",
      description: "Write thumbnail image to disk",
    },
    {
      name: "--write-all-thumbnail",
      description: "Write all thumbnail image formats to disk",
    },
    {
      name: "--list-thumbnails",
      description: "Simulate and list all available thumbnail formats",
    },
    {
      name: ["-q", "--quiet"],
      description: "Activate quite mode",
    },
    {
      name: "--no-warnings",
      description: "Ignore warnings",
    },
    {
      name: ["-s", "--simulate"],
      description:
        "Do not download the video and do note write anything to disk",
    },
    {
      name: "--skip-download",
      description: "Do not download the video",
    },
    {
      name: ["-g", "--get-url"],
      description: "Simulate, quiet but print URL",
    },
    {
      name: ["-e", "--get-title"],
      description: "Simulate, quiet but print title",
    },
    {
      name: "--get-id",
      description: "Simulate, quiet but print id",
    },
    {
      name: "--get-thumbnail",
      description: "Simulate, quiet but print thumbnail URL",
    },
    {
      name: "--get-description",
      description: "Simulate, quiet but print video description",
    },
    {
      name: "--get-duration",
      description: "Simulate, quiet but print video length",
    },
    {
      name: "--get-filename",
      description: "Simulate, quiet but print output filename",
    },
    {
      name: "--get-format",
      description: "Simulate, quiet but print output format",
    },
    {
      name: ["-j", "--dump-json"],
      description: "Simulate, quiet but JSON information",
    },
    {
      name: ["-J", "--dump-single-json"],
      description:
        "Simulate, quiet but JSON information for each command-line argument",
    },
    {
      name: "--print-json",
      description:
        "Be quiet and print the video information as JSON (video is still being downloaded)",
    },
    {
      name: "--newline",
      description: "Output the progress bar as new lines",
    },
    {
      name: "--no-progress",
      description: "Do not print the progress bar",
    },
    {
      name: "--console-title",
      description: "Display progress in console titlebar",
    },
    {
      name: ["-v", "--verbose"],
      description: "Print various debugging information",
    },
    {
      name: "--dump-pages",
      description:
        "Print downloaded pages encoded using base64 to debug problems (very verbose)",
    },
    {
      name: "--write-pages",
      description:
        "Write downloaded intermediary pages to files in the current directory to debug problems",
    },
    {
      name: "--print-traffic",
      description: "Display sent and read HTTP traffic",
    },
    {
      name: ["-C", "--call-home"],
      description: "Contact the youtube-dl server for debugging",
    },
    {
      name: "--no-call-home",
      description: "Do NOT contact the youtube-dl server for debugging",
    },
    {
      name: "--encoding",
      description: "Force the specified encoding (experimental)",
      args: {
        name: "ENCODING",
      },
    },
    {
      name: "--no-check-certificate",
      description: "Suppress HTTPS certificate validation",
    },
    {
      name: "--prefer-insecure",
      description:
        "Use an unencrypted connection to retrieve information about the video. (Currently supported only for YouTube)",
    },
    {
      name: "--user-agent",
      description: "Specify a custom user agent",
      args: {
        name: "UA",
      },
    },
    {
      name: "--referer",
      description:
        "Specify a custom referer, use if the video access is restricted to one domain",
      args: {
        name: "URL",
      },
    },
    {
      name: "--add-header",
      description:
        "Specify a custom HTTP header and its value, separated by a colon ':'",
      isRepeatable: true,
      args: {
        name: "FIELD:VALUE",
      },
    },
    {
      name: "--bidi-workaround",
      description:
        "Work around terminals that lack bidirectional text support. Requires bidiv or fribidi executable in PATH",
    },
    {
      name: "--sleep-interval",
      description:
        "Number of seconds to sleep before each download when used alone or a lower bound of a range for randomized sleep before each download when used along with --max-sleep-interval",
      args: {
        name: "SECONDS",
      },
    },
    {
      name: "--max-sleep-interval",
      dependsOn: ["--sleep-interval"],
      description:
        "Upper bound of a range for randomized sleep before each download. Must only be used along with --min- sleep-interval",
      args: {
        name: "SECONDS",
      },
    },
    {
      name: ["-f", "--format"],
      description: "Video format code",
      args: {
        name: "FORMAT",
      },
    },
    {
      name: "--all-formats",
      description: "Download all available video formats",
    },
    {
      name: "--prefer-free-formats",
      description:
        "Prefer free video formats unless a specific one is requested",
    },
    {
      name: ["-F", "--list-formats"],
      description: "List all available formats of requested videos",
    },
    {
      name: "--youtube-skip-dash-manifest",
      description:
        "Do not download the DASH manifests and related data on YouTube videos",
    },
    {
      name: "--merge-output-format",
      description:
        "If a merge is required (e.g. bestvideo+bestaudio), output to given container format",
      args: {
        name: "FORMAT",
        suggestions: ["mkv", "mp4", "ogg", "webm", "flv"],
      },
    },
    {
      name: "--write-sub",
      description: "Write subtitle file",
    },
    {
      name: "--write-auto-sub",
      description: "Write automatically generated subtitle file (YouTube only)",
    },
    {
      name: "--all-subs",
      description: "Download all the available subtitles of the video",
    },
    {
      name: "--list-subs",
      description: "List all available subtitles for the video",
    },
    {
      name: "--sub-format",
      description:
        'Subtitle format, accepts formats preference, for example: "srt" or "ass/srt/best"',
      args: {
        name: "FORMAT",
      },
    },
    {
      name: "--sub-lang",
      description:
        "Languages of the subtitles to download (optional) separated by commas",
      args: {
        name: "LANGS",
        generators: {
          getQueryTerm: ",",
        },
        suggestions: [
          "af",
          "sq",
          "am",
          "ar",
          "hy",
          "az",
          "bn",
          "eu",
          "be",
          "bs",
          "bg",
          "my",
          "ca",
          "ceb",
          "zh-Hans",
          "zh-Hant",
          "co",
          "hr",
          "cs",
          "da",
          "nl",
          "en",
          "eo",
          "et",
          "fil",
          "fi",
          "fr",
          "gl",
          "ka",
          "de",
          "el",
          "gu",
          "ht",
          "ha",
          "haw",
          "iw",
          "hi",
          "hmn",
          "hu",
          "is",
          "ig",
          "id",
          "ga",
          "it",
          "ja",
          "jv",
          "kn",
          "kk",
          "km",
          "rw",
          "ko",
          "ku",
          "ky",
          "lo",
          "la",
          "lv",
          "lt",
          "lb",
          "mk",
          "mg",
          "ms",
          "ml",
          "mt",
          "mi",
          "mr",
          "mn",
          "ne",
          "no",
          "ny",
          "or",
          "ps",
          "fa",
          "pl",
          "pt",
          "pa",
          "ro",
          "ru",
          "sm",
          "gd",
          "sr",
          "sn",
          "sd",
          "si",
          "sk",
          "sl",
          "so",
          "st",
          "es",
          "su",
          "sw",
          "sv",
          "tg",
          "ta",
          "tt",
          "te",
          "th",
          "tr",
          "tk",
          "uk",
          "ur",
          "ug",
          "uz",
          "vi",
          "cy",
          "fy",
          "xh",
          "yi",
          "yo",
          "zu",
        ],
      },
    },
    {
      name: ["-u", "--username"],
      description: "Login with this account ID",
      args: {
        name: "USERNAME",
      },
    },
    {
      name: ["-p", "--password"],
      description:
        "Account password. If this option is left out, youtube-dl will ask interactively",
      args: {
        name: "PASSWORD",
      },
    },
    {
      name: ["-2", "--twofactor"],
      description: "Two-factor authentication code",
      args: {
        name: "TWOFACTOR",
      },
    },
    {
      name: ["-n", "--netrc"],
      description: "Use .netrc authentication data",
    },
    {
      name: "--video-password",
      description: "Video password (vimeo, youku)",
      args: {
        name: "PASSWORD",
      },
    },
    {
      name: "--ap-mso",
      description:
        "Adobe Pass multiple-system operator (TV provider) identifier",
      args: {
        name: "MSO",
        generators: {
          custom: async (tokens, executeCommand, context) => {
            const { stdout } = await executeCommand({
              command: "youtube-dl",
              args: [
                ...tokens.filter((token) => token.includes("youtube.")),
                "--simulate",
                "--ap-list-mso",
              ],
            });

            return stdout
              .split("\n")
              .slice(3)
              .map((line) => {
                const [name, ...description] = line.split(" ");
                return {
                  name,
                  description: description.join(" "),
                };
              });
          },
        },
      },
    },
    {
      name: "--ap-username",
      description: "Multiple-system operator account login",
      args: {
        name: "USERNAME",
      },
    },
    {
      name: "--ap-password",
      description:
        "Multiple-system operator account password. If this option is left out, youtube-dl will ask interactively",
      args: {
        name: "PASSWORD",
      },
    },
    {
      name: "--ap-list-mso",
      description: "List all supported multiple-system operators",
    },
    {
      name: ["-x", "--extract-audio"],
      description:
        "Convert audio files to audio-only files (requires ffmpeg/avconv and ffprobe/avprobe)",
    },
    {
      name: "--audio-format",
      dependsOn: ["-x"],
      description: "Specify audio format",
      args: {
        name: "FORMAT",
        suggestions: [
          "best",
          "aac",
          "flac",
          "mp3",
          "m4a",
          "opus",
          "vorbis",
          "wav",
        ],
        default: "best",
      },
    },
    {
      name: "--audio-quality",
      description:
        "Specify ffmpeg/avconv audio quality, insert a value between 0 (better) and 9 (worse) for VBR or a specific bitrate like 128K",
      args: {
        name: "QUALITY",
        default: "5",
      },
    },
    {
      name: "--recode-video",
      description: "Encode the video to another format if necessary",
      args: {
        name: "FORMAT",
        suggestions: ["mp4", "flv", "ogg", "webm", "mkv", "avi"],
      },
    },
    {
      name: "--postprocessor-args",
      description: "Give these arguments to the postprocessor",
      args: {
        name: "ARGS",
      },
    },
    {
      name: ["-k", "--keep-video"],
      description:
        "Keep the video file on disk after the post-processing; the video is erased by default",
    },
    {
      name: "--no-post-overwrites",
      description:
        "Do not overwrite post-processed files; the post-processed files are overwritten by default",
    },
    {
      name: "--embed-subs",
      description:
        "Embed subtitles in the video (only for mp4, webm and mkv videos)",
    },
    {
      name: "--embed-thumbnail",
      description: "Embed thumbnail in the audio as cover art",
    },
    {
      name: "--embed-metadata",
      description: "Write metadata to the video file",
    },
    {
      name: "--metadata-from-title",
      description:
        "Parse additional metadata like song title / artist from the video title. The format syntax is the same as --output. Regular expressions with named capture groups may also be used. The parsed parameters replace existing values",
      args: {
        name: "FORMAT",
      },
    },
    {
      name: "--xattrs",
      description:
        "Write metadata to the video file's xattrs (using dublin core and xdg standards)",
    },
    {
      name: "--fixup",
      description: "Automatically correct known faults of the file",
      args: {
        name: "POLICY",
        suggestions: [
          {
            name: "never",
            description: "Do nothing",
          },
          {
            name: "warn",
            description: "Only emit a warning",
          },
          {
            name: "detect_or_warn",
            description: "Fix file if we can, warn otherwise",
          },
        ],
        default: "detect_or_warn",
      },
    },
    {
      name: "--prefer-avconv",
      description: "Prefer avconv over ffmpeg for running the postprocessors",
    },
    {
      name: "--prefer-ffmpeg",
      description:
        "Prefer ffmpeg over avconv for running the postprocessors (default)",
    },
    {
      name: "--ffmpeg-location",
      description:
        "Location of the ffmpeg/avconv binary; either the path to the binary or its containing directory",
      args: {
        name: "PATH",
        template: ["folders", "filepaths"],
      },
    },
    {
      name: "--exec",
      description:
        "Execute a command on the file after downloading and post-processing, similar to find's -exec syntax",
      args: {
        name: "CMD",
      },
    },
    {
      name: "--convert-subs",
      description: "Convert the subtitles to other format",
      args: {
        name: "FORMAT",
        suggestions: ["srt", "ass", "vtt", "lrc"],
      },
    },
  ],
};

export default completionSpec;
