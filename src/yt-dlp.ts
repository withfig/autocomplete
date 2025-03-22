const UrlGenerator = {
  script: ["pbpaste"],
  postProcess: function (out) {
    // Regex to identify YouTube URLs
    const regex = new RegExp(
      "^(https?://)?(www.)?(youtube.com|youtu.?be)/.+$",
      "gm"
    );

    try {
      // Check if the clipboard content contains YouTube URLs
      const matches = out.match(regex);

      if (!matches || matches.length === 0) return [];

      // Return each matched URL as a suggestion
      return matches.map((url) => {
        const isPlaylist = url.includes("playlist") || url.includes("list=");
        return {
          name: url.trim(),
          description: isPlaylist ? "YouTube playlist" : "YouTube video",
          icon: "https://www.youtube.com/s/desktop/810941b4/img/favicon_32.png",
        };
      });
    } catch (e) {
      console.error(e);
      return [];
    }
  },
};

const GeneralOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Print this help text and exit",
  },
  {
    name: "--version",
    description: "Print program version and exit",
  },
  {
    name: ["-U", "--update"],
    description: "Update this program to the latest version",
  },
  {
    name: "--no-update",
    description: "Do not check for updates (default)",
  },
  {
    name: "--update-to",
    args: {
      name: "[CHANNEL]@[TAG]",
      description:
        "CHANNEL and TAG default to 'stable' and 'latest' respectively if omitted",
    },
    description:
      "Upgrade/downgrade to a specific version. CHANNEL can be a repository as well. Supported channels: stable, nightly, master",
  },
  {
    name: ["-i", "--ignore-errors"],
    description:
      "Ignore download and postprocessing errors. The download will be considered successful even if the postprocessing fails",
  },
  {
    name: "--no-abort-on-error",
    description:
      "Continue with next video on download errors; e.g. to skip unavailable videos in a playlist (default)",
  },
  {
    name: "--abort-on-error",
    description:
      "Abort downloading of further videos if an error occurs (Alias: --no-ignore-errors)",
  },
  {
    name: "--dump-user-agent",
    description: "Display the current user-agent and exit",
  },
  {
    name: "--list-extractors",
    description: "List all supported extractors and exit",
  },
  {
    name: "--extractor-descriptions",
    description: "Output descriptions of all supported extractors and exit",
  },
  {
    name: "--use-extractors",
    args: {
      name: "NAMES",
      description:
        "Extractor names separated by commas. Can use regexes, 'all', 'default' and 'end'",
    },
    description:
      "Extractor names to use, prefix with '-' to exclude (Alias: --ies)",
  },
  {
    name: "--default-search",
    args: {
      name: "PREFIX",
      description: "Prefix for unqualified URLs",
    },
    description:
      "Use this prefix for unqualified URLs. E.g. 'gvsearch2:python' downloads two videos from google videos for the search term 'python'",
  },
  {
    name: "--ignore-config",
    description:
      "Don't load any more configuration files except those given to --config-locations (Alias: --no-config)",
  },
  {
    name: "--no-config-locations",
    description: "Do not load any custom configuration files (default)",
  },
  {
    name: "--config-locations",
    args: {
      name: "PATH",
      description: "Path to config or its containing directory ('-' for stdin)",
    },
    description:
      "Location of the main configuration file. Can be used multiple times",
  },
  {
    name: "--plugin-dirs",
    args: {
      name: "PATH",
      description: "Path to an additional directory to search for plugins",
    },
    description:
      "Add directories to search for plugins. Use 'default' for default locations",
  },
  {
    name: "--no-plugin-dirs",
    description: "Clear plugin directories to search, including defaults",
  },
  {
    name: "--flat-playlist",
    description:
      "Do not extract a playlist's URL result entries; some entry metadata may be missing",
  },
  {
    name: "--no-flat-playlist",
    description: "Fully extract the videos of a playlist (default)",
  },
  {
    name: "--live-from-start",
    description:
      "Download livestreams from the start. Currently only supported for YouTube (Experimental)",
  },
  {
    name: "--no-live-from-start",
    description: "Download livestreams from the current time (default)",
  },
  {
    name: "--wait-for-video",
    args: {
      name: "MIN[-MAX]",
      description: "Minimum seconds (or range) to wait between retries",
    },
    description: "Wait for scheduled streams to become available",
  },
  {
    name: "--no-wait-for-video",
    description: "Do not wait for scheduled streams (default)",
  },
  {
    name: "--mark-watched",
    description: "Mark videos watched (even with --simulate)",
  },
  {
    name: "--no-mark-watched",
    description: "Do not mark videos watched (default)",
  },
  {
    name: "--color",
    args: {
      name: "[STREAM:]POLICY",
      description: "POLICY: always, auto (default), never, or no_color",
    },
    description:
      "Whether to emit color codes in output, optionally prefixed by the STREAM (stdout or stderr)",
  },
  {
    name: "--compat-options",
    args: {
      name: "OPTS",
      description: "Compatibility options",
    },
    description:
      "Options that can help keep compatibility with youtube-dl or youtube-dlc configurations",
  },
  {
    name: "--alias",
    args: [
      {
        name: "ALIASES",
        description: "Alias names",
      },
      {
        name: "OPTIONS",
        description: "Option string to alias",
      },
    ],
    description:
      "Create aliases for an option string. Aliases are listed in the --help output",
  },
];

const NetworkOptions: Fig.Option[] = [
  {
    name: "--proxy",
    args: {
      name: "URL",
      description:
        "Use the specified HTTP/HTTPS/SOCKS proxy.  Use socks5://user:pass@127.0.0.1:1080/ for SOCKS",
    },
    description:
      'Use the specified HTTP/HTTPS/SOCKS proxy. Pass in an empty string (--proxy "") for direct connection',
  },
  {
    name: "--socket-timeout",
    args: {
      name: "SECONDS",
      description: "Time to wait before giving up, in seconds",
    },
    description: "Time to wait before giving up, in seconds",
  },
  {
    name: "--source-address",
    args: {
      name: "IP",
      description: "Client-side IP address to bind to",
    },
    description: "Client-side IP address to bind to",
  },
  {
    name: "--impersonate",
    args: {
      name: "CLIENT[:OS]",
      description:
        "Client to impersonate for requests. E.g. chrome, chrome-110, chrome:windows-10",
    },
    description:
      'Client to impersonate for requests. Pass --impersonate="" to impersonate any client',
  },
  {
    name: "--list-impersonate-targets",
    description: "List available clients to impersonate",
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
    name: "--enable-file-urls",
    description:
      "Enable file:// URLs. This is disabled by default for security reasons",
  },
];

const GeoRestrictionOptions: Fig.Option[] = [
  {
    name: "--geo-verification-proxy",
    args: {
      name: "URL",
      description:
        "Use this proxy to verify the IP address for some geo-restricted sites",
    },
    description:
      "Use this proxy to verify the IP address for some geo-restricted sites. The default proxy specified by --proxy (or none, if the option is not present) is used for the actual downloading",
  },
  {
    name: "--xff",
    args: {
      name: "VALUE",
      description:
        'One of "default", "never", an IP block in CIDR notation, or a two-letter ISO 3166-2 country code',
    },
    description:
      "How to fake X-Forwarded-For HTTP header to try bypassing geographic restriction",
  },
];

const VideoSelectionOptions: Fig.Option[] = [
  {
    name: ["-I", "--playlist-items"],
    args: {
      name: "ITEM_SPEC",
      description:
        "Comma separated playlist_index of the items to download. You can specify a range using '[START]:[STOP][:STEP]'",
    },
    description:
      "Comma separated playlist_index of the items to download. You can specify a range using '[START]:[STOP][:STEP]'. For backward compatibility, START-STOP is also supported",
  },
  {
    name: "--min-filesize",
    args: {
      name: "SIZE",
      description: "E.g. 50k or 44.6M",
    },
    description: "Abort download if filesize is smaller than SIZE",
  },
  {
    name: "--max-filesize",
    args: {
      name: "SIZE",
      description: "E.g. 50k or 44.6M",
    },
    description: "Abort download if filesize is larger than SIZE",
  },
  {
    name: "--date",
    args: {
      name: "DATE",
      description:
        'The date can be "YYYYMMDD" or in the format [now|today|yesterday][-N[day|week|month|year]]. E.g. "--date today-2weeks" downloads only videos uploaded on the same day two weeks ago',
    },
    description:
      'Download only videos uploaded on this date. The date can be "YYYYMMDD" or in the format [now|today|yesterday][-N[day|week|month|year]]',
  },
  {
    name: "--datebefore",
    args: {
      name: "DATE",
      description: "Same formats as --date",
    },
    description:
      "Download only videos uploaded on or before this date. The date formats accepted are the same as --date",
  },
  {
    name: "--dateafter",
    args: {
      name: "DATE",
      description: "Same formats as --date",
    },
    description:
      "Download only videos uploaded on or after this date. The date formats accepted are the same as --date",
  },
  {
    name: "--match-filters",
    args: {
      name: "FILTER",
      description: "Generic video filter",
    },
    description:
      'Generic video filter.  Use a "\\" to escape "&" or quotes if needed. If used multiple times, the filter matches if at least one of the conditions is met. E.g. --match-filters !is_live --match-filters "like_count>?100 & description~=\'(?i)\bcats & dogs\b\'" matches only videos that are not live OR those that have a like count more than 100 (or the like field is not available) and also has a description that contains the phrase "cats & dogs" (caseless). Use "--match-filters -" to interactively ask whether to download each video',
  },
  {
    name: "--no-match-filters",
    description: "Do not use any --match-filters (default)",
  },
  {
    name: "--break-match-filters",
    args: {
      name: "FILTER",
      description:
        'Same as "--match-filters" but stops the download process when a video is rejected',
    },
    description:
      'Same as "--match-filters" but stops the download process when a video is rejected',
  },
  {
    name: "--no-break-match-filters",
    description: "Do not use any --break-match-filters (default)",
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
    args: {
      name: "YEARS",
      description: "Download only videos suitable for the given age",
    },
    description: "Download only videos suitable for the given age",
  },
  {
    name: "--download-archive",
    args: {
      name: "FILE",
      description:
        "Download only videos not listed in the archive file. Record the IDs of all downloaded videos in it",
    },
    description:
      "Download only videos not listed in the archive file. Record the IDs of all downloaded videos in it",
  },
  {
    name: "--no-download-archive",
    description: "Do not use archive file (default)",
  },
  {
    name: "--max-downloads",
    args: {
      name: "NUMBER",
      description: "Abort after downloading NUMBER files",
    },
    description: "Abort after downloading NUMBER files",
  },
  {
    name: "--break-on-existing",
    description:
      "Stop the download process when encountering a file that is in the archive supplied with the --download-archive option",
  },
  {
    name: "--no-break-on-existing",
    description:
      "Do not stop the download process when encountering a file that is in the archive (default)",
  },
  {
    name: "--break-per-input",
    description:
      "Alters --max-downloads, --break-on-existing, --break-match-filters, and autonumber to reset per input URL",
  },
  {
    name: "--no-break-per-input",
    description:
      "--break-on-existing and similar options terminates the entire download queue",
  },
  {
    name: "--skip-playlist-after-errors",
    args: {
      name: "N",
      description:
        "Number of allowed failures until the rest of the playlist is skipped",
    },
    description:
      "Number of allowed failures until the rest of the playlist is skipped",
  },
];

const DownloadOptions: Fig.Option[] = [
  {
    name: ["-N", "--concurrent-fragments"],
    args: {
      name: "N",
      description:
        "Number of fragments of a dash/hlsnative video that should be downloaded concurrently",
    },
    description:
      "Number of fragments of a dash/hlsnative video that should be downloaded concurrently (default is 1)",
  },
  {
    name: ["-r", "--limit-rate"],
    args: {
      name: "RATE",
      description:
        "Maximum download rate in bytes per second, e.g. 50K or 4.2M",
    },
    description: "Maximum download rate in bytes per second, e.g. 50K or 4.2M",
  },
  {
    name: "--throttled-rate",
    args: {
      name: "RATE",
      description:
        "Minimum download rate in bytes per second below which throttling is assumed",
    },
    description:
      "Minimum download rate in bytes per second below which throttling is assumed and the video data is re-extracted, e.g. 100K",
  },
  {
    name: ["-R", "--retries"],
    args: {
      name: "RETRIES",
      description: 'Number of retries (default is 10), or "infinite"',
    },
    description: 'Number of retries (default is 10), or "infinite"',
  },
  {
    name: "--file-access-retries",
    args: {
      name: "RETRIES",
      description:
        'Number of times to retry on file access error (default is 3), or "infinite"',
    },
    description:
      'Number of times to retry on file access error (default is 3), or "infinite"',
  },
  {
    name: "--fragment-retries",
    args: {
      name: "RETRIES",
      description:
        'Number of retries for a fragment (default is 10), or "infinite"',
    },
    description:
      'Number of retries for a fragment (default is 10), or "infinite" (DASH, hlsnative and ISM)',
  },
  {
    name: "--retry-sleep",
    args: {
      name: "[TYPE:]EXPR",
      description:
        "Time to sleep between retries in seconds.  EXPR can be a number, linear=START[:END[:STEP=1]] or exp=START[:END[:BASE=2]]",
    },
    description:
      "Time to sleep between retries in seconds (optionally) prefixed by the type of retry (http (default), fragment, file_access, extractor) to apply the sleep to. EXPR can be a number, linear=START[:END[:STEP=1]] or exp=START[:END[:BASE=2]]. This option can be used multiple times to set the sleep for the different retry types, e.g. --retry-sleep linear=1::2 --retry-sleep fragment:exp=1:20",
  },
  {
    name: "--skip-unavailable-fragments",
    description:
      "Skip unavailable fragments for DASH, hlsnative and ISM downloads (default) (Alias: --no-abort-on-unavailable-fragments)",
  },
  {
    name: "--abort-on-unavailable-fragments",
    description:
      "Abort download if a fragment is unavailable (Alias: --no-skip-unavailable-fragments)",
  },
  {
    name: "--keep-fragments",
    description:
      "Keep downloaded fragments on disk after downloading is finished",
  },
  {
    name: "--no-keep-fragments",
    description:
      "Delete downloaded fragments after downloading is finished (default)",
  },
  {
    name: "--buffer-size",
    args: {
      name: "SIZE",
      description: "Size of download buffer, e.g. 1024 or 16K",
    },
    description: "Size of download buffer, e.g. 1024 or 16K (default is 1024)",
  },
  {
    name: "--resize-buffer",
    description:
      "The buffer size is automatically resized from an initial value of --buffer-size (default)",
  },
  {
    name: "--no-resize-buffer",
    description: "Do not automatically adjust the buffer size",
  },
  {
    name: "--http-chunk-size",
    args: {
      name: "SIZE",
      description:
        "Size of a chunk for chunk-based HTTP downloading, e.g. 10485760 or 10M",
    },
    description:
      "Size of a chunk for chunk-based HTTP downloading, e.g. 10485760 or 10M (default is disabled). May be useful for bypassing bandwidth throttling imposed by a webserver (experimental)",
  },
  {
    name: "--playlist-random",
    description: "Download playlist videos in random order",
  },
  {
    name: "--lazy-playlist",
    description:
      "Process entries in the playlist as they are received. This disables n_entries, --playlist-random and --playlist-reverse",
  },
  {
    name: "--no-lazy-playlist",
    description:
      "Process videos in the playlist only after the entire playlist is parsed (default)",
  },
  {
    name: "--xattr-set-filesize",
    description: "Set file xattribute ytdl.filesize with expected file size",
  },
  {
    name: "--hls-use-mpegts",
    description:
      "Use the mpegts container for HLS videos; allowing some players to play the video while downloading, and reducing the chance of file corruption if download is interrupted. This is enabled by default for live streams",
  },
  {
    name: "--no-hls-use-mpegts",
    description:
      "Do not use the mpegts container for HLS videos. This is default when not downloading live streams",
  },
  {
    name: "--download-sections",
    args: {
      name: "REGEX",
      description:
        'Download only chapters that match the regular expression. A "*" prefix denotes time-range instead of chapter',
    },
    description:
      'Download only chapters that match the regular expression. A "*" prefix denotes time-range instead of chapter. Negative timestamps are calculated from the end. "*from-url" can be used to download between the "start_time" and "end_time" extracted from the URL. Needs ffmpeg. This option can be used multiple times to download multiple sections, e.g. --download-sections "*10:15-inf" --download-sections "intro"',
  },
  {
    name: "--downloader",
    args: {
      name: "[PROTO:]NAME",
      description:
        "Name or path of the external downloader to use. Currently supports native, aria2c, avconv, axel, curl, ffmpeg, httpie, wget",
    },
    description:
      'Name or path of the external downloader to use (optionally) prefixed by the protocols (http, ftp, m3u8, dash, rstp, rtmp, mms) to use it for. Currently supports native, aria2c, avconv, axel, curl, ffmpeg, httpie, wget. You can use this option multiple times to set different downloaders for different protocols. E.g. --downloader aria2c --downloader "dash,m3u8:native" will use aria2c for http/ftp downloads, and the native downloader for dash/m3u8 downloads (Alias: --external-downloader)',
  },
  {
    name: "--downloader-args",
    args: [
      {
        name: "NAME",
        description: "Downloader name",
      },
      {
        name: "ARGS",
        description: "Arguments for the downloader",
      },
    ],
    description:
      'Give these arguments to the external downloader. Specify the downloader name and the arguments separated by a colon ":". For ffmpeg, arguments can be passed to different positions using the same syntax as --postprocessor-args. You can use this option multiple times to give different arguments to different downloaders (Alias: --external-downloader-args)',
  },
];

const FilesystemOptions: Fig.Option[] = [
  {
    name: ["-a", "--batch-file"],
    args: {
      name: "FILE",
      description:
        'File containing URLs to download ("-" for stdin), one URL per line',
    },
    description:
      'File containing URLs to download ("-" for stdin), one URL per line. Lines starting with "#", ";" or "]" are considered as comments and ignored',
  },
  {
    name: "--no-batch-file",
    description: "Do not read URLs from batch file (default)",
  },
  {
    name: ["-P", "--paths"],
    args: {
      name: "[TYPES:]PATH",
      description:
        'The paths where the files should be downloaded. Specify the type of file and the path separated by a colon ":"',
    },
    description:
      'The paths where the files should be downloaded. Specify the type of file and the path separated by a colon ":". All the same TYPES as --output are supported. Additionally, you can also provide "home" (default) and "temp" paths. All intermediary files are first downloaded to the temp path and then the final files are moved over to the home path after download is finished. This option is ignored if --output is an absolute path',
  },
  {
    name: ["-o", "--output"],
    args: {
      name: "[TYPES:]TEMPLATE",
      description:
        'Output filename template; see "OUTPUT TEMPLATE" for details',
    },
    description: 'Output filename template; see "OUTPUT TEMPLATE" for details',
  },
  {
    name: "--output-na-placeholder",
    args: {
      name: "TEXT",
      description: "Placeholder for unavailable fields in --output",
    },
    description:
      'Placeholder for unavailable fields in --output (default: "NA")',
  },
  {
    name: "--restrict-filenames",
    description:
      'Restrict filenames to only ASCII characters, and avoid "&" and spaces in filenames',
  },
  {
    name: "--no-restrict-filenames",
    description:
      'Allow Unicode characters, "&" and spaces in filenames (default)',
  },
  {
    name: "--windows-filenames",
    description: "Force filenames to be Windows-compatible",
  },
  {
    name: "--no-windows-filenames",
    description: "Sanitize filenames only minimally",
  },
  {
    name: "--trim-filenames",
    args: {
      name: "LENGTH",
      description:
        "Limit the filename length (excluding extension) to the specified number of characters",
    },
    description:
      "Limit the filename length (excluding extension) to the specified number of characters",
  },
  {
    name: ["-w", "--no-overwrites"],
    description: "Do not overwrite any files",
  },
  {
    name: "--force-overwrites",
    description:
      "Overwrite all video and metadata files. This option includes --no-continue",
  },
  {
    name: "--no-force-overwrites",
    description:
      "Do not overwrite the video, but overwrite related files (default)",
  },
  {
    name: ["-c", "--continue"],
    description: "Resume partially downloaded files/fragments (default)",
  },
  {
    name: "--no-continue",
    description:
      "Do not resume partially downloaded fragments. If the file is not fragmented, restart download of the entire file",
  },
  {
    name: "--part",
    description:
      "Use .part files instead of writing directly into output file (default)",
  },
  {
    name: "--no-part",
    description: "Do not use .part files - write directly into output file",
  },
  {
    name: "--mtime",
    description:
      "Use the Last-modified header to set the file modification time (default)",
  },
  {
    name: "--no-mtime",
    description:
      "Do not use the Last-modified header to set the file modification time",
  },
  {
    name: "--write-description",
    description: "Write video description to a .description file",
  },
  {
    name: "--no-write-description",
    description: "Do not write video description (default)",
  },
  {
    name: "--write-info-json",
    description:
      "Write video metadata to a .info.json file (this may contain personal information)",
  },
  {
    name: "--no-write-info-json",
    description: "Do not write video metadata (default)",
  },
  {
    name: "--write-playlist-metafiles",
    description:
      "Write playlist metadata in addition to the video metadata when using --write-info-json, --write-description etc. (default)",
  },
  {
    name: "--no-write-playlist-metafiles",
    description:
      "Do not write playlist metadata when using --write-info-json, --write-description etc",
  },
  {
    name: "--clean-info-json",
    description:
      "Remove some internal metadata such as filenames from the infojson (default)",
  },
  {
    name: "--no-clean-info-json",
    description: "Write all fields to the infojson",
  },
  {
    name: "--write-comments",
    description:
      "Retrieve video comments to be placed in the infojson. The comments are fetched even without this option if the extraction is known to be quick (Alias: --get-comments)",
  },
  {
    name: "--no-write-comments",
    description:
      "Do not retrieve video comments unless the extraction is known to be quick (Alias: --no-get-comments)",
  },
  {
    name: "--load-info-json",
    args: {
      name: "FILE",
      description:
        'JSON file containing the video information (created with the "--write-info-json" option)',
    },
    description:
      'JSON file containing the video information (created with the "--write-info-json" option)',
  },
  {
    name: "--cookies",
    args: {
      name: "FILE",
      description:
        "Netscape formatted file to read cookies from and dump cookie jar in",
    },
    description:
      "Netscape formatted file to read cookies from and dump cookie jar in",
  },
  {
    name: "--no-cookies",
    description: "Do not read/dump cookies from/to file (default)",
  },
  {
    name: "--cookies-from-browser",
    args: {
      name: "BROWSER[+KEYRING][:PROFILE][::CONTAINER]",
      description: "The name of the browser to load cookies from",
    },
    description:
      'The name of the browser to load cookies from. Currently supported browsers are: brave, chrome, chromium, edge, firefox, opera, safari, vivaldi, whale. Optionally, the KEYRING used for decrypting Chromium cookies on Linux, the name/path of the PROFILE to load cookies from, and the CONTAINER name (if Firefox) ("none" for no container) can be given with their respective separators. By default, all containers of the most recently accessed profile are used. Currently supported keyrings are: basictext, gnomekeyring, kwallet, kwallet5, kwallet6',
  },
  {
    name: "--no-cookies-from-browser",
    description: "Do not load cookies from browser (default)",
  },
  {
    name: "--cache-dir",
    args: {
      name: "DIR",
      description:
        "Location in the filesystem where yt-dlp can store some downloaded information (such as client ids and signatures) permanently. By default ${XDG_CACHE_HOME}/yt-dlp",
    },
    description:
      "Location in the filesystem where yt-dlp can store some downloaded information (such as client ids and signatures) permanently. By default ${XDG_CACHE_HOME}/yt-dlp",
  },
  {
    name: "--no-cache-dir",
    description: "Disable filesystem caching",
  },
  {
    name: "--rm-cache-dir",
    description: "Delete all filesystem cache files",
  },
];

const ThumbnailOptions: Fig.Option[] = [
  {
    name: "--write-thumbnail",
    description: "Write thumbnail image to disk",
  },
  {
    name: "--no-write-thumbnail",
    description: "Do not write thumbnail image to disk (default)",
  },
  {
    name: "--write-all-thumbnails",
    description: "Write all thumbnail image formats to disk",
  },
  {
    name: "--list-thumbnails",
    description:
      "List available thumbnails of each video. Simulate unless --no-simulate is used",
  },
];

const InternetShortcutOptions: Fig.Option[] = [
  {
    name: "--write-link",
    description:
      "Write an internet shortcut file, depending on the current platform (.url, .webloc or .desktop). The URL may be cached by the OS",
  },
  {
    name: "--write-url-link",
    description:
      "Write a .url Windows internet shortcut. The OS caches the URL based on the file path",
  },
  {
    name: "--write-webloc-link",
    description: "Write a .webloc macOS internet shortcut",
  },
  {
    name: "--write-desktop-link",
    description: "Write a .desktop Linux internet shortcut",
  },
];
const VerbosityAndSimulationOptions: Fig.Option[] = [
  {
    name: ["-q", "--quiet"],
    description:
      "Activate quiet mode. If used with --verbose, print the log to stderr",
  },
  {
    name: "--no-quiet",
    description: "Deactivate quiet mode. (Default)",
  },
  {
    name: "--no-warnings",
    description: "Ignore warnings",
  },
  {
    name: ["-s", "--simulate"],
    description: "Do not download the video and do not write anything to disk",
  },
  {
    name: "--no-simulate",
    description: "Download the video even if printing/listing options are used",
  },
  {
    name: "--ignore-no-formats-error",
    description:
      'Ignore "No video formats" error. Useful for extracting metadata even if the videos are not actually available for download (experimental)',
  },
  {
    name: "--no-ignore-no-formats-error",
    description:
      "Throw error when no downloadable video formats are found (default)",
  },
  {
    name: "--skip-download",
    description:
      "Do not download the video but write all related files (Alias: --no-download)",
  },
  {
    name: ["-O", "--print"],
    args: {
      name: "[WHEN:]TEMPLATE",
      description:
        'Field name or output template to print to screen, optionally prefixed with when to print it, separated by a ":". Supported values of "WHEN" are the same as that of --use-postprocessor (default: video). Implies --quiet. Implies --simulate unless --no-simulate or later stages of WHEN are used. This option can be used multiple times',
    },
    description:
      'Field name or output template to print to screen, optionally prefixed with when to print it, separated by a ":". Supported values of "WHEN" are the same as that of --use-postprocessor (default: video). Implies --quiet. Implies --simulate unless --no-simulate or later stages of WHEN are used. This option can be used multiple times',
  },
  {
    name: "--print-to-file",
    args: [
      {
        name: "WHEN",
        description: "Same values as --print",
      },
      {
        name: "TEMPLATE",
        description: "Same values as --print",
      },
      {
        name: "FILE",
        description: "Uses the same syntax as the output template",
      },
    ],
    description:
      "Append given template to the file. The values of WHEN and TEMPLATE are the same as that of --print. FILE uses the same syntax as the output template. This option can be used multiple times",
  },
  {
    name: ["-j", "--dump-json"],
    description:
      'Quiet, but print JSON information for each video. Simulate unless --no-simulate is used. See "OUTPUT TEMPLATE" for a description of available keys',
  },
  {
    name: ["-J", "--dump-single-json"],
    description:
      "Quiet, but print JSON information for each URL or infojson passed. Simulate unless --no-simulate is used. If the URL refers to a playlist, the whole playlist information is dumped in a single line",
  },
  {
    name: "--force-write-archive",
    description:
      "Force download archive entries to be written as far as no errors occur, even if -s or another simulation option is used (Alias: --force-download-archive)",
  },
  {
    name: "--newline",
    description: "Output progress bar as new lines",
  },
  {
    name: "--no-progress",
    description: "Do not print progress bar",
  },
  {
    name: "--progress",
    description: "Show progress bar, even if in quiet mode",
  },
  {
    name: "--console-title",
    description: "Display progress in console titlebar",
  },
  {
    name: "--progress-template",
    args: {
      name: "[TYPES:]TEMPLATE",
      description:
        'Template for progress outputs, optionally prefixed with one of "download:" (default), "download-title:" (the console title), "postprocess:",  or "postprocess-title:"',
    },
    description:
      'Template for progress outputs, optionally prefixed with one of "download:" (default), "download-title:" (the console title), "postprocess:",  or "postprocess-title:". The video\'s fields are accessible under the "info" key and the progress attributes are accessible under "progress" key. E.g. --console-title --progress-template "download-title:%(info.id)s-%(progress.eta)s"',
  },
  {
    name: "--progress-delta",
    args: {
      name: "SECONDS",
      description: "Time between progress output",
    },
    description: "Time between progress output (default: 0)",
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
];

const WorkaroundsOptions: Fig.Option[] = [
  {
    name: "--encoding",
    args: {
      name: "ENCODING",
      description: "Force the specified encoding (experimental)",
    },
    description: "Force the specified encoding (experimental)",
  },
  {
    name: "--legacy-server-connect",
    description:
      "Explicitly allow HTTPS connection to servers that do not support RFC 5746 secure renegotiation",
  },
  {
    name: "--no-check-certificates",
    description: "Suppress HTTPS certificate validation",
  },
  {
    name: "--prefer-insecure",
    description:
      "Use an unencrypted connection to retrieve information about the video (Currently supported only for YouTube)",
  },
  {
    name: "--add-headers",
    args: {
      name: "FIELD:VALUE",
      description:
        'Specify a custom HTTP header and its value, separated by a colon ":"',
    },
    description:
      'Specify a custom HTTP header and its value, separated by a colon ":". You can use this option multiple times',
  },
  {
    name: "--bidi-workaround",
    description:
      "Work around terminals that lack bidirectional text support. Requires bidiv or fribidi executable in PATH",
  },
  {
    name: "--sleep-requests",
    args: {
      name: "SECONDS",
      description:
        "Number of seconds to sleep between requests during data extraction",
    },
    description:
      "Number of seconds to sleep between requests during data extraction",
  },
  {
    name: "--sleep-interval",
    args: {
      name: "SECONDS",
      description:
        "Number of seconds to sleep before each download.  This is the minimum time to sleep when used along with --max-sleep-interval",
    },
    description:
      "Number of seconds to sleep before each download. This is the minimum time to sleep when used along with --max-sleep-interval (Alias: --min-sleep-interval)",
  },
  {
    name: "--max-sleep-interval",
    args: {
      name: "SECONDS",
      description:
        "Maximum number of seconds to sleep. Can only be used along with --min-sleep-interval",
    },
    description:
      "Maximum number of seconds to sleep. Can only be used along with --min-sleep-interval",
  },
  {
    name: "--sleep-subtitles",
    args: {
      name: "SECONDS",
      description: "Number of seconds to sleep before each subtitle download",
    },
    description: "Number of seconds to sleep before each subtitle download",
  },
];

const VideoFormatOptions: Fig.Option[] = [
  {
    name: ["-f", "--format"],
    args: {
      name: "FORMAT",
      description: 'Video format code, see "FORMAT SELECTION" for more details',
    },
    description: 'Video format code, see "FORMAT SELECTION" for more details',
  },
  {
    name: ["-S", "--format-sort"],
    args: {
      name: "SORTORDER",
      description: "Sort the formats by the fields given",
    },
    description:
      'Sort the formats by the fields given, see "Sorting Formats" for more details',
  },
  {
    name: "--format-sort-force",
    description:
      "Force user specified sort order to have precedence over all fields (Alias: --S-force)",
  },
  {
    name: "--no-format-sort-force",
    description:
      "Some fields have precedence over the user specified sort order (default)",
  },
  {
    name: "--video-multistreams",
    description: "Allow multiple video streams to be merged into a single file",
  },
  {
    name: "--no-video-multistreams",
    description:
      "Only one video stream is downloaded for each output file (default)",
  },
  {
    name: "--audio-multistreams",
    description: "Allow multiple audio streams to be merged into a single file",
  },
  {
    name: "--no-audio-multistreams",
    description:
      "Only one audio stream is downloaded for each output file (default)",
  },
  {
    name: "--prefer-free-formats",
    description:
      'Prefer video formats with free containers over non-free ones of the same quality. Use with "-S ext" to strictly prefer free containers irrespective of quality',
  },
  {
    name: "--no-prefer-free-formats",
    description:
      "Don't give any special preference to free containers (default)",
  },
  {
    name: "--check-formats",
    description:
      "Make sure formats are selected only from those that are actually downloadable",
  },
  {
    name: "--check-all-formats",
    description: "Check all formats for whether they are actually downloadable",
  },
  {
    name: "--no-check-formats",
    description: "Do not check that the formats are actually downloadable",
  },
  {
    name: ["-F", "--list-formats"],
    description:
      "List available formats of each video. Simulate unless --no-simulate is used",
  },
  {
    name: "--merge-output-format",
    args: {
      name: "FORMAT",
      description:
        'Containers that may be used when merging formats, separated by "/"',
    },
    description:
      'Containers that may be used when merging formats, separated by "/", e.g. "mp4/mkv". Ignored if no merge is required. (currently supported: avi, flv, mkv, mov, mp4, webm)',
  },
];

const SubtitleOptions: Fig.Option[] = [
  {
    name: "--write-subs",
    description: "Write subtitle file",
  },
  {
    name: "--no-write-subs",
    description: "Do not write subtitle file (default)",
  },
  {
    name: "--write-auto-subs",
    description:
      "Write automatically generated subtitle file (Alias: --write-automatic-subs)",
  },
  {
    name: "--no-write-auto-subs",
    description:
      "Do not write auto-generated subtitles (default) (Alias: --no-write-automatic-subs)",
  },
  {
    name: "--list-subs",
    description:
      "List available subtitles of each video. Simulate unless --no-simulate is used",
  },
  {
    name: "--sub-format",
    args: {
      name: "FORMAT",
      description:
        'Subtitle format; accepts formats preference separated by "/"',
    },
    description:
      'Subtitle format; accepts formats preference separated by "/", e.g. "srt" or "ass/srt/best"',
  },
  {
    name: "--sub-langs",
    args: {
      name: "LANGS",
      description:
        'Languages of the subtitles to download (can be regex) or "all" separated by commas',
    },
    description:
      'Languages of the subtitles to download (can be regex) or "all" separated by commas, e.g. --sub-langs "en.*,ja" (where "en.*" is a regex pattern that matches "en" followed by 0 or more of any character). You can prefix the language code with a "-" to exclude it from the requested languages, e.g. --sub-langs all,-live_chat. Use --list-subs for a list of available language tags',
  },
];

const AuthenticationOptions: Fig.Option[] = [
  {
    name: ["-u", "--username"],
    args: {
      name: "USERNAME",
      description: "Login with this account ID",
    },
    description: "Login with this account ID",
  },
  {
    name: ["-p", "--password"],
    args: {
      name: "PASSWORD",
      description: "Account password",
    },
    description:
      "Account password. If this option is left out, yt-dlp will ask interactively",
  },
  {
    name: ["-2", "--twofactor"],
    args: {
      name: "TWOFACTOR",
      description: "Two-factor authentication code",
    },
    description: "Two-factor authentication code",
  },
  {
    name: ["-n", "--netrc"],
    description: "Use .netrc authentication data",
  },
  {
    name: "--netrc-location",
    args: {
      name: "PATH",
      description:
        "Location of .netrc authentication data; either the path or its containing directory. Defaults to ~/.netrc",
    },
    description:
      "Location of .netrc authentication data; either the path or its containing directory. Defaults to ~/.netrc",
  },
  {
    name: "--netrc-cmd",
    args: {
      name: "NETRC_CMD",
      description: "Command to execute to get the credentials for an extractor",
    },
    description: "Command to execute to get the credentials for an extractor",
  },
  {
    name: "--video-password",
    args: {
      name: "PASSWORD",
      description: "Video-specific password",
    },
    description: "Video-specific password",
  },
  {
    name: "--ap-mso",
    args: {
      name: "MSO",
      description:
        "Adobe Pass multiple-system operator (TV provider) identifier, use --ap-list-mso for a list of available MSOs",
    },
    description:
      "Adobe Pass multiple-system operator (TV provider) identifier, use --ap-list-mso for a list of available MSOs",
  },
  {
    name: "--ap-username",
    args: {
      name: "USERNAME",
      description: "Multiple-system operator account login",
    },
    description: "Multiple-system operator account login",
  },
  {
    name: "--ap-password",
    args: {
      name: "PASSWORD",
      description: "Multiple-system operator account password",
    },
    description:
      "Multiple-system operator account password. If this option is left out, yt-dlp will ask interactively",
  },
  {
    name: "--ap-list-mso",
    description: "List all supported multiple-system operators",
  },
  {
    name: "--client-certificate",
    args: {
      name: "CERTFILE",
      description:
        "Path to client certificate file in PEM format. May include the private key",
    },
    description:
      "Path to client certificate file in PEM format. May include the private key",
  },
  {
    name: "--client-certificate-key",
    args: {
      name: "KEYFILE",
      description: "Path to private key file for client certificate",
    },
    description: "Path to private key file for client certificate",
  },
  {
    name: "--client-certificate-password",
    args: {
      name: "PASSWORD",
      description: "Password for client certificate private key, if encrypted",
    },
    description:
      "Password for client certificate private key, if encrypted. If not provided, and the key is encrypted, yt-dlp will ask interactively",
  },
];

const PostProcessingOptions: Fig.Option[] = [
  {
    name: ["-x", "--extract-audio"],
    description:
      "Convert video files to audio-only files (requires ffmpeg and ffprobe)",
  },
  {
    name: "--audio-format",
    args: {
      name: "FORMAT",
      description: "Format to convert the audio to when -x is used",
    },
    description:
      "Format to convert the audio to when -x is used. (currently supported: best (default), aac, alac, flac, m4a, mp3, opus, vorbis, wav). You can specify multiple rules using similar syntax as --remux-video",
  },
  {
    name: "--audio-quality",
    args: {
      name: "QUALITY",
      description:
        "Specify ffmpeg audio quality to use when converting the audio with -x",
    },
    description:
      "Specify ffmpeg audio quality to use when converting the audio with -x. Insert a value between 0 (best) and 10 (worst) for VBR or a specific bitrate like 128K (default 5)",
  },
  {
    name: "--remux-video",
    args: {
      name: "FORMAT",
      description: "Remux the video into another container if necessary",
    },
    description:
      'Remux the video into another container if necessary (currently supported: avi, flv, gif, mkv, mov, mp4, webm, aac, aiff, alac, flac, m4a, mka, mp3, ogg, opus, vorbis, wav). If the target container does not support the video/audio codec, remuxing will fail. You can specify multiple rules; e.g. "aac>m4a/mov>mp4/mkv" will remux aac to m4a, mov to mp4 and anything else to mkv',
  },
  {
    name: "--recode-video",
    args: {
      name: "FORMAT",
      description: "Re-encode the video into another format if necessary",
    },
    description:
      "Re-encode the video into another format if necessary. The syntax and supported formats are the same as --remux-video",
  },
  {
    name: "--postprocessor-args",
    args: {
      name: "NAME:ARGS",
      description: "Give these arguments to the postprocessors",
    },
    description:
      'Give these arguments to the postprocessors. Specify the postprocessor/executable name and the arguments separated by a colon ":" to give the argument to the specified postprocessor/executable. Supported PP are: Merger, ModifyChapters, SplitChapters, ExtractAudio, VideoRemuxer, VideoConvertor, Metadata, EmbedSubtitle, EmbedThumbnail, SubtitlesConvertor, ThumbnailsConvertor, FixupStretched, FixupM4a, FixupM3u8, FixupTimestamp and FixupDuration. The supported executables are: AtomicParsley, FFmpeg and FFprobe. You can also specify "PP+EXE:ARGS" to give the arguments to the specified executable only when being used by the specified postprocessor. Additionally, for ffmpeg/ffprobe, "_i"/"_o" can be appended to the prefix optionally followed by a number to pass the argument before the specified input/output file, e.g. --ppa Merger+ffmpeg_i1:-v quiet. You can use this option multiple times to give different arguments to different postprocessors. (Alias: --ppa)',
  },
  {
    name: ["-k", "--keep-video"],
    description:
      "Keep the intermediate video file on disk after post-processing",
  },
  {
    name: "--no-keep-video",
    description:
      "Delete the intermediate video file after post-processing (default)",
  },
  {
    name: "--post-overwrites",
    description: "Overwrite post-processed files (default)",
  },
  {
    name: "--no-post-overwrites",
    description: "Do not overwrite post-processed files",
  },
  {
    name: "--embed-subs",
    description:
      "Embed subtitles in the video (only for mp4, webm and mkv videos)",
  },
  {
    name: "--no-embed-subs",
    description: "Do not embed subtitles (default)",
  },
  {
    name: "--embed-thumbnail",
    description: "Embed thumbnail in the video as cover art",
  },
  {
    name: "--no-embed-thumbnail",
    description: "Do not embed thumbnail (default)",
  },
  {
    name: "--embed-metadata",
    description:
      "Embed metadata to the video file. Also embeds chapters/infojson if present unless --no-embed-chapters/--no-embed-info-json are used (Alias: --add-metadata)",
  },
  {
    name: "--no-embed-metadata",
    description:
      "Do not add metadata to file (default) (Alias: --no-add-metadata)",
  },
  {
    name: "--embed-chapters",
    description:
      "Add chapter markers to the video file (Alias: --add-chapters)",
  },
  {
    name: "--no-embed-chapters",
    description:
      "Do not add chapter markers (default) (Alias: --no-add-chapters)",
  },
  {
    name: "--embed-info-json",
    description: "Embed the infojson as an attachment to mkv/mka video files",
  },
  {
    name: "--no-embed-info-json",
    description: "Do not embed the infojson as an attachment to the video file",
  },
  {
    name: "--parse-metadata",
    args: {
      name: "[WHEN:]FROM:TO",
      description:
        "Parse additional metadata like title/artist from other fields",
    },
    description:
      'Parse additional metadata like title/artist from other fields; see "MODIFYING METADATA" for details. Supported values of "WHEN" are the same as that of --use-postprocessor (default: pre_process)',
  },
  {
    name: "--replace-in-metadata",
    args: {
      name: "[WHEN:]FIELDS REGEX REPLACE",
      description: "Replace text in a metadata field using the given regex",
    },
    description:
      'Replace text in a metadata field using the given regex. This option can be used multiple times. Supported values of "WHEN" are the same as that of --use-postprocessor (default: pre_process)',
  },
  {
    name: "--xattrs",
    description:
      "Write metadata to the video file's xattrs (using Dublin Core and XDG standards)",
  },
  {
    name: "--concat-playlist",
    args: {
      name: "POLICY",
      description:
        'Concatenate videos in a playlist. One of "never", "always", or "multi_video"',
    },
    description:
      'Concatenate videos in a playlist. One of "never", "always", or "multi_video" (default; only when the videos form a single show). All the video files must have the same codecs and number of streams to be concatenable. The "pl_video:" prefix can be used with "--paths" and "--output" to set the output filename for the concatenated files. See "OUTPUT TEMPLATE" for details',
  },
  {
    name: "--fixup",
    args: {
      name: "POLICY",
      description: "Automatically correct known faults of the file",
    },
    description:
      "Automatically correct known faults of the file. One of never (do nothing), warn (only emit a warning), detect_or_warn (the default; fix the file if we can, warn otherwise), force (try fixing even if the file already exists)",
  },
  {
    name: "--ffmpeg-location",
    args: {
      name: "PATH",
      description:
        "Location of the ffmpeg binary; either the path to the binary or its containing directory",
    },
    description:
      "Location of the ffmpeg binary; either the path to the binary or its containing directory",
  },
  {
    name: "--exec",
    args: {
      name: "[WHEN:]CMD",
      description:
        'Execute a command, optionally prefixed with when to execute it, separated by a ":"',
    },
    description:
      'Execute a command, optionally prefixed with when to execute it, separated by a ":". Supported values of "WHEN" are the same as that of --use-postprocessor (default: after_move). The same syntax as the output template can be used to pass any field as arguments to the command. If no fields are passed, %(filepath,_filename|)q is appended to the end of the command. This option can be used multiple times',
  },
  {
    name: "--no-exec",
    description: "Remove any previously defined --exec",
  },
  {
    name: "--convert-subs",
    args: {
      name: "FORMAT",
      description: "Convert the subtitles to another format",
    },
    description:
      'Convert the subtitles to another format (currently supported: ass, lrc, srt, vtt). Use "--convert-subs none" to disable conversion (default) (Alias: --convert-subtitles)',
  },
  {
    name: "--convert-thumbnails",
    args: {
      name: "FORMAT",
      description: "Convert the thumbnails to another format",
    },
    description:
      'Convert the thumbnails to another format (currently supported: jpg, png, webp). You can specify multiple rules using similar syntax as "--remux-video". Use "--convert-thumbnails none" to disable conversion (default)',
  },
  {
    name: "--split-chapters",
    description:
      'Split video into multiple files based on internal chapters. The "chapter:" prefix can be used with "--paths" and "--output" to set the output filename for the split files. See "OUTPUT TEMPLATE" for details',
  },
  {
    name: "--no-split-chapters",
    description: "Do not split video based on chapters (default)",
  },
  {
    name: "--remove-chapters",
    args: {
      name: "REGEX",
      description:
        "Remove chapters whose title matches the given regular expression",
    },
    description:
      "Remove chapters whose title matches the given regular expression. The syntax is the same as --download-sections. This option can be used multiple times",
  },
  {
    name: "--no-remove-chapters",
    description: "Do not remove any chapters from the file (default)",
  },
  {
    name: "--force-keyframes-at-cuts",
    description:
      "Force keyframes at cuts when downloading/splitting/removing sections. This is slow due to needing a re-encode, but the resulting video may have fewer artifacts around the cuts",
  },
  {
    name: "--no-force-keyframes-at-cuts",
    description:
      "Do not force keyframes around the chapters when cutting/splitting (default)",
  },
  {
    name: "--use-postprocessor",
    args: {
      name: "NAME[:ARGS]",
      description:
        'The (case-sensitive) name of plugin postprocessors to be enabled, and (optionally) arguments to be passed to it, separated by a colon ":"',
    },
    description:
      'The (case-sensitive) name of plugin postprocessors to be enabled, and (optionally) arguments to be passed to it, separated by a colon ":". ARGS are a semicolon \";\" delimited list of NAME=VALUE. The "when" argument determines when the postprocessor is invoked. It can be one of "pre_process" (after video extraction), "after_filter" (after video passes filter), "video" (after --format; before --print/--output), "before_dl" (before each video download), "post_process" (after each video download; default), "after_move" (after moving the video file to its final location), "after_video" (after downloading and processing all formats of a video), or "playlist" (at end of playlist). This option can be used multiple times to add different postprocessors',
  },
];

const SponsorBlockOptions: Fig.Option[] = [
  {
    name: "--sponsorblock-mark",
    args: {
      name: "CATS",
      description:
        "SponsorBlock categories to create chapters for, separated by commas",
    },
    description:
      'SponsorBlock categories to create chapters for, separated by commas. Available categories are sponsor, intro, outro, selfpromo, preview, filler, interaction, music_offtopic, poi_highlight, chapter, all and default (=all). You can prefix the category with a "-" to exclude it. See [1] for descriptions of the categories. E.g. --sponsorblock-mark all,-preview',
  },
  {
    name: "--sponsorblock-remove",
    args: {
      name: "CATS",
      description:
        "SponsorBlock categories to be removed from the video file, separated by commas",
    },
    description:
      'SponsorBlock categories to be removed from the video file, separated by commas. If a category is present in both mark and remove, remove takes precedence. The syntax and available categories are the same as for --sponsorblock-mark except that "default" refers to "all,-filler" and poi_highlight, chapter are not available',
  },
  {
    name: "--sponsorblock-chapter-title",
    args: {
      name: "TEMPLATE",
      description:
        "An output template for the title of the SponsorBlock chapters created by --sponsorblock-mark",
    },
    description:
      'An output template for the title of the SponsorBlock chapters created by --sponsorblock-mark. The only available fields are start_time, end_time, category, categories, name, category_names. Defaults to "[SponsorBlock]: %(category_names)l"',
  },
  {
    name: "--no-sponsorblock",
    description: "Disable both --sponsorblock-mark and --sponsorblock-remove",
  },
  {
    name: "--sponsorblock-api",
    args: {
      name: "URL",
      description:
        "SponsorBlock API location, defaults to https://sponsor.ajay.app",
    },
    description:
      "SponsorBlock API location, defaults to https://sponsor.ajay.app",
  },
];

const ExtractorOptions: Fig.Option[] = [
  {
    name: "--extractor-retries",
    args: {
      name: "RETRIES",
      description: "Number of retries for known extractor errors",
    },
    description:
      'Number of retries for known extractor errors (default is 3), or "infinite"',
  },
  {
    name: "--allow-dynamic-mpd",
    description:
      "Process dynamic DASH manifests (default) (Alias: --no-ignore-dynamic-mpd)",
  },
  {
    name: "--ignore-dynamic-mpd",
    description:
      "Do not process dynamic DASH manifests (Alias: --no-allow-dynamic-mpd)",
  },
  {
    name: "--hls-split-discontinuity",
    description:
      "Split HLS playlists to different formats at discontinuities such as ad breaks",
  },
  {
    name: "--no-hls-split-discontinuity",
    description:
      "Do not split HLS playlists into different formats at discontinuities such as ad breaks (default)",
  },
  {
    name: "--extractor-args",
    args: {
      name: "IE_KEY:ARGS",
      description:
        'Pass ARGS arguments to the IE_KEY extractor. See "EXTRACTOR ARGUMENTS" for details',
    },
    description:
      'Pass ARGS arguments to the IE_KEY extractor. See "EXTRACTOR ARGUMENTS" for details. You can use this option multiple times to give arguments for different extractors',
  },
];

const options: Fig.Option[] = [
  ...GeneralOptions,
  ...NetworkOptions,
  ...GeoRestrictionOptions,
  ...VideoSelectionOptions,
  ...DownloadOptions,
  ...FilesystemOptions,
  ...ThumbnailOptions,
  ...InternetShortcutOptions,
  ...VerbosityAndSimulationOptions,
  ...WorkaroundsOptions,
  ...VideoFormatOptions,
  ...SubtitleOptions,
  ...AuthenticationOptions,
  ...PostProcessingOptions,
  ...SponsorBlockOptions,
  ...ExtractorOptions,
];

const completionSpec: Fig.Spec = {
  name: "yt-dlp",
  description: "A feature-rich command-line audio/video downloader",

  args: {
    name: "URL",
    description: "The URL of the video or playlist to download",
    isVariadic: true,
    generators: UrlGenerator,
  },
  options,
};

export default completionSpec;
