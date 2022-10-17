const completionSpec: Fig.Spec = {
  name: "maigret",
  description:
    "Maigret is an easy-to-use and powerful OSINT tool for collecting a dossier on a person by username only",
  args: {
    name: "user",
    description: "The username for which you want to search sites",
    isVariadic: true,
  },
  options: [
    {
      name: ["-a", "--all-sites"],
      description: "Use all sites for scan",
      icon: "🌍",
    },
    {
      name: "--version",
      description: "Display version information and dependencies",
    },
    {
      name: "--timeout",
      args: {
        name: "Timeout",
        description: "Timeout in seconds",
      },
      description:
        "Time in seconds to wait for response to requests (default {settings.timeout}s). A longer timeout will be more likely to get results from slow sites. On the other hand, this may cause a long delay to gather all results",
      icon: "⚙️",
    },
    {
      name: "--retries",
      args: {
        name: "Retries",
        description: "Number of attempts",
      },
      description: "Attempts to restart temporarily failed requests",
      icon: "⚙️",
    },
    {
      name: ["-n", "--max-connections"],
      args: {
        name: "Connections",
        description: "Number connections",
      },
      description:
        "Allowed number of concurrent connections (default {settings.max_connections})",
      icon: "⚙️",
    },
    {
      name: "--no-recursion",
      description:
        "Disable recursive search by additional data extracted from pages",
      icon: "⚙️",
    },
    {
      name: "--no-extracting",
      description:
        "Disable parsing pages for additional data and other usernames",
      icon: "⚙️",
    },
    {
      name: "--id-type",
      args: {
        name: "Type",
        description: "Type of identifier",
        suggestions: [
          "username",
          "yandex_public_id",
          "gaia_id",
          "vk_id",
          "ok_id",
          "wikimapia_uid",
          "steam_id",
          "uidme_uguid",
          "yelp_userid",
        ],
        default: "username",
      },
      description: "Specify identifier(s) type (default: username)",
      icon: "⚙️",
    },
    {
      name: "--db",
      args: {
        name: "DB path",
        description: "DB path",
        template: ["filepaths"],
      },
      description:
        "Load Maigret database from a JSON file or HTTP web resource",
      icon: "🗄",
    },
    {
      name: "--cookies-jar-file",
      args: {
        name: "Cookie file",
        description: "Cookie file",
        template: ["filepaths"],
      },
      description: "File with cookies",
      icon: "🍪",
    },
    {
      name: "--ignore-ids",
      args: {
        name: "Ignored ids",
        description: "Ignored ids",
        isVariadic: true,
      },
      description: "Do not make search by the specified username or other ids",
    },
    {
      name: ["-fo", "--folderoutput"],
      args: {
        name: "Reports path",
        description: "Reports path",
        template: "folders",
      },
      description:
        "If using multiple usernames, the output of the results will be saved to this folder",
    },
    {
      name: ["-p", "--proxy"],
      args: {
        name: "Proxy URL",
        description: "Proxy URL",
      },
      description: "Make requests over a proxy. e.g. socks5://127.0.0.1:1080",
    },
    {
      name: "--tor-proxy",
      args: {
        name: "Tor Proxy URL",
        description: "Tor Proxy URL",
      },
      description:
        "Specify URL of your Tor gateway. Default is socks5://127.0.0.1:9050",
    },
    {
      name: "--i2p-proxy",
      args: {
        name: "I2P URL",
        description: "I2P URL",
      },
      description:
        "Specify URL of your I2P gateway. Default is http://127.0.0.1:4444",
    },
    {
      name: "--with-domains",
      description:
        "Enable (experimental) feature of checking domains on usernames",
    },
    {
      name: "--tags",
      args: {
        name: "Tags",
        isVariadic: true,
      },
      description: "Specify tags of sites (see `--stats`)",
    },
    {
      name: "--site",
      args: {
        name: "Site name",
        isVariadic: true,
        // TODO: autocomplete from https://github.com/soxoj/maigret/blob/main/sites.md
      },
      description:
        "Limit analysis to just the specified sites (multiple option)",
    },
    {
      name: "--use-disabled-sites",
      description:
        "Use disabled sites to search (may cause many false positives)",
    },
    {
      name: "--parse",
      args: {
        name: "Parse URL",
        default: "",
      },
      description:
        "Parse page by URL and extract username and IDs to use for search",
    },
    {
      name: "--submit",
      args: {
        name: "Site URL",
        default: "False",
      },
      description: "URL of existing profile in new site to submit",
    },
    {
      name: "--self-check",
      description:
        "Do self check for sites and database and disable non-working ones",
    },
    {
      name: "--stats",
      description:
        "Show database statistics (most frequent sites engines and tags)",
    },
    {
      name: "--print-not-found",
      description: "Print sites where the username was not found",
    },
    {
      name: "--print-errors",
      description:
        "Print errors messages: connection, captcha, site country ban, etc",
    },
    {
      name: ["-v", "--verbose"],
      description: "Display extra information and metrics",
    },
    {
      name: ["-info", "--vv"],
      description: "Display extra/service information and metrics",
    },
    {
      name: ["--debug", "-vvv", "-d"],
      description:
        "Display extra/service/debug information and metrics, save responses in debug.log",
    },
    {
      name: "--no-color",
      description: "Don't color terminal output",
    },
    {
      name: "--no-progressbar",
      description: "Don't show progressbar",
    },
    {
      name: ["-T", "--txt"],
      description: "Create a TXT report (one report per username)",
    },
    {
      name: ["-C", "--csv"],
      description: "Create a CSV report (one report per username)",
    },
    {
      name: ["-H", "--html"],
      description: "Create an HTML report (one report per username)",
    },
    {
      name: ["-X", "--xmind"],
      description: "Create a XMind 8 mindmap report (one report per username)",
    },
    {
      name: ["-P", "--pdf"],
      description: "Create a PDF report (one report per username)",
    },
    {
      name: ["-G", "--graph"],
      description: "Create a graph report (one report per username)",
    },
    {
      name: ["-J", "--json"],
      args: {
        name: "Type",
        suggestions: ["simple", "ndjson"],
      },
      description:
        "Generate a JSON report of specific type: simple, ndjson (one report per username)",
    },
    {
      name: "--reports-sorting",
      args: {
        name: "Type",
        suggestions: ["default", "data"],
      },
      description:
        "Method of results sorting in reports (default: in order of getting the result)",
    },
  ],
};

export default completionSpec;
