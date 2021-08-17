const youtubeDlGenerators: Record<string, Fig.Generator> = {
  listVideos: {
    script: (context) => 
      `youtube-dl --flat-playlist -J ${context.filter((token) => token.includes("youtube."))}`,

    postProcess: function (out) {
      try {
        return JSON.parse(out)["entries"].map((video, index) => {
          return {
            name: `${index + 1} - ${video.title}`,
            description: video.uploader,
            insertValue: `${index + 1}`,
            icon:
              "https://www.youtube.com/s/desktop/810941b4/img/favicon_32.png",
          };
        });
      } catch (e) {
        console.error(e)
        return [];
      }
    },
  },

  listClipboard: {
    script: "pbpaste",
    postProcess: function (out) {
      const regex = new RegExp(
        "^(https?://)?(www.)?(youtube.com|youtu.?be)/.+$"
      );
      try {
        if (regex.test(out))
          return [
            {
              name: out,
              description: "clipboard",
              icon:
                "https://www.youtube.com/s/desktop/810941b4/img/favicon_32.png",
            },
          ];
      } catch (e) {
        console.error(e)
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
      description: "Update this program to latest version. Make sure you have sufficient permissions (run with sudo if needed)",
    },
    {
      name: ["--ignore-errors", "-i"],
      description: "Continue on download errors, for example to skip unavailable videos in a playlist",
    },
    {
      name: "--abort-on-error ",
      description: "Abort downloading of further videos (in the playlist or the command line) if an error occurs",
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
      description: 'Use this prefix for unqualified URLs. For example "gvsearch2:" downloads two videos from google videos for youtube-dl "large apple".',
      args: [
        {
          name: "PREFIX",
        }
      ]
    },
    {
      name: "--config-location",
      description: "Location of the configuration file; either the path to the config or its containing directory",
      args: [
        {
          name: "PATH",
          template: ["filepaths", "folders"],
        }
      ]
    },
    {
      name: "--force-generic-extractor",
      description: "Force extraction to use the generic extractor",
    },
    {
      name: "--ignore-config",
      description: "Do not read configuration files.",
    },
    {
      name: "--flat-playlist",
      description: "Do not extract the videos of a playlist, only list them.",
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
      description: "Use the specified HTTP/HTTPS/SOCKS proxy. Pass in an empty string for direct connection.",
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
      description: "Download only matching titles (regex or caseless sub-string)",
      args: {
        name: "REGEX",
      },
    },
    {
      name: "--reject-title",
      description: "Skip download for matching titles (regex or caseless sub-string)",
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
      description: "Do not download any videos smaller than SIZE (e.g. 50k or 44.6)",
      args: {
        name: "SIZE",
      },
    },
    {
      name: "--max-filesize",
      description: "Do not download any videos larger than SIZE (e.g. 50k or 44.6)",
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
      description: "Download only videos uploaded on or before this date (i.e. inclusive)",
      args: {
        name: "DATE",
      },
    },
    {
      name: "--dateafter",
      description: "Download only videos uploaded on or after this date (i.e. inclusive)",
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
  ],
};

export default completionSpec;
