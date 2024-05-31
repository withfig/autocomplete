const generateDisks: Fig.Generator = {
  script: ["ls", "/dev"],
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .filter((disk) => disk.match(/\/dev\/disk\w/))
      .map((disk) => ({
        name: disk,
        icon: "💽",
        priority: 100,
      })),
};

const generateVolumes: Fig.Generator = {
  script: ["ls", "/Volumes"],
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .filter((volume) => volume !== "Macintosh HD")
      .map((volume) => ({
        name: `/Volumes/${volume}`,
        type: "file",
        priority: 100,
      })),
};

const generateUsers: Fig.Generator = {
  script: ["bash", "-c", "m user list | awk '{ print $1 }'"],
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .map((user) => ({
        name: user,
        icon: "👤",
        hidden: user.startsWith("_"),
      })),
};

const generateGroups: Fig.Generator = {
  script: ["bash", "-c", "m group list | awk '{ print $1 }'"],
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .map((group) => ({
        name: group,
        icon: "👥",
        hidden: group.startsWith("_"),
      })),
};

const generateNetworkLocations: Fig.Generator = {
  script: ["bash", "-c", "m network location list | tail -n +2"],
  splitOn: "\n",
};

const generateServices: Fig.Generator = {
  script: ["bash", "-c", "launchctl list | awk '{ print $3 }'"],
  splitOn: "\n",
};

function getPidIcon(path: string): string {
  const idx = path.indexOf(".app/");
  if (idx === -1) {
    return "fig://icon?type=gear";
  }
  return "fig://" + path.slice(0, idx + 4);
}
const generatePids: Fig.Generator = {
  script: ["bash", "-c", "ps axo pid,comm | sed 1d"],
  postProcess: (result) => {
    return result.split("\n").map((line) => {
      const [pid, path] = line.trim().split(/\s+/);
      const name = path.slice(path.lastIndexOf("/") + 1);
      return {
        name: pid,
        description: path,
        displayName: `${pid} (${name})`,
        icon: getPidIcon(path),
      };
    });
  },
};

const generateWifiNetworks: Fig.Generator = {
  script: [
    "bash",
    "-c",
    "networksetup -listallhardwareports | awk '/Wi-Fi/{getline; print $2}' | xargs networksetup -listpreferredwirelessnetworks | tail -n +2",
  ],
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .map((network) => ({
        name: network.trim(),
        icon: "📶",
      })),
};

const timezones: string[] = [
  "Africa/Abidjan",
  "Africa/Accra",
  "Africa/Addis_Ababa",
  "Africa/Algiers",
  "Africa/Asmara",
  "Africa/Bamako",
  "Africa/Bangui",
  "Africa/Banjul",
  "Africa/Bissau",
  "Africa/Blantyre",
  "Africa/Brazzaville",
  "Africa/Bujumbura",
  "Africa/Cairo",
  "Africa/Casablanca",
  "Africa/Ceuta",
  "Africa/Conakry",
  "Africa/Dakar",
  "Africa/Dar_es_Salaam",
  "Africa/Djibouti",
  "Africa/Douala",
  "Africa/El_Aaiun",
  "Africa/Freetown",
  "Africa/Gaborone",
  "Africa/Harare",
  "Africa/Johannesburg",
  "Africa/Juba",
  "Africa/Kampala",
  "Africa/Khartoum",
  "Africa/Kigali",
  "Africa/Kinshasa",
  "Africa/Lagos",
  "Africa/Libreville",
  "Africa/Lome",
  "Africa/Luanda",
  "Africa/Lubumbashi",
  "Africa/Lusaka",
  "Africa/Malabo",
  "Africa/Maputo",
  "Africa/Maseru",
  "Africa/Mbabane",
  "Africa/Mogadishu",
  "Africa/Monrovia",
  "Africa/Nairobi",
  "Africa/Ndjamena",
  "Africa/Niamey",
  "Africa/Nouakchott",
  "Africa/Ouagadougou",
  "Africa/Porto-Novo",
  "Africa/Sao_Tome",
  "Africa/Tripoli",
  "Africa/Tunis",
  "Africa/Windhoek",
  "America/Adak",
  "America/Anchorage",
  "America/Anguilla",
  "America/Antigua",
  "America/Araguaina",
  "America/Argentina/Buenos_Aires",
  "America/Argentina/Catamarca",
  "America/Argentina/Cordoba",
  "America/Argentina/Jujuy",
  "America/Argentina/La_Rioja",
  "America/Argentina/Mendoza",
  "America/Argentina/Rio_Gallegos",
  "America/Argentina/Salta",
  "America/Argentina/San_Juan",
  "America/Argentina/San_Luis",
  "America/Argentina/Tucuman",
  "America/Argentina/Ushuaia",
  "America/Aruba",
  "America/Asuncion",
  "America/Atikokan",
  "America/Bahia",
  "America/Bahia_Banderas",
  "America/Barbados",
  "America/Belem",
  "America/Belize",
  "America/Blanc-Sablon",
  "America/Boa_Vista",
  "America/Bogota",
  "America/Boise",
  "America/Cambridge_Bay",
  "America/Campo_Grande",
  "America/Cancun",
  "America/Caracas",
  "America/Cayenne",
  "America/Cayman",
  "America/Chicago",
  "America/Chihuahua",
  "America/Costa_Rica",
  "America/Creston",
  "America/Cuiaba",
  "America/Curacao",
  "America/Danmarkshavn",
  "America/Dawson",
  "America/Dawson_Creek",
  "America/Denver",
  "America/Detroit",
  "America/Dominica",
  "America/Edmonton",
  "America/Eirunepe",
  "America/El_Salvador",
  "America/Fort_Nelson",
  "America/Fortaleza",
  "America/Glace_Bay",
  "America/Godthab",
  "America/Goose_Bay",
  "America/Grand_Turk",
  "America/Grenada",
  "America/Guadeloupe",
  "America/Guatemala",
  "America/Guayaquil",
  "America/Guyana",
  "America/Halifax",
  "America/Havana",
  "America/Hermosillo",
  "America/Indiana/Indianapolis",
  "America/Indiana/Knox",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Tell_City",
  "America/Indiana/Vevay",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Inuvik",
  "America/Iqaluit",
  "America/Jamaica",
  "America/Juneau",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/Kralendijk",
  "America/La_Paz",
  "America/Lima",
  "America/Los_Angeles",
  "America/Lower_Princes",
  "America/Maceio",
  "America/Managua",
  "America/Manaus",
  "America/Marigot",
  "America/Martinique",
  "America/Matamoros",
  "America/Mazatlan",
  "America/Menominee",
  "America/Merida",
  "America/Metlakatla",
  "America/Mexico_City",
  "America/Miquelon",
  "America/Moncton",
  "America/Monterrey",
  "America/Montevideo",
  "America/Montreal",
  "America/Montserrat",
  "America/Nassau",
  "America/New_York",
  "America/Nipigon",
  "America/Nome",
  "America/Noronha",
  "America/North_Dakota/Beulah",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/Nuuk",
  "America/Ojinaga",
  "America/Panama",
  "America/Pangnirtung",
  "America/Paramaribo",
  "America/Phoenix",
  "America/Port-au-Prince",
  "America/Port_of_Spain",
  "America/Porto_Velho",
  "America/Puerto_Rico",
  "America/Punta_Arenas",
  "America/Rainy_River",
  "America/Rankin_Inlet",
  "America/Recife",
  "America/Regina",
  "America/Resolute",
  "America/Rio_Branco",
  "America/Santa_Isabel",
  "America/Santarem",
  "America/Santiago",
  "America/Santo_Domingo",
  "America/Sao_Paulo",
  "America/Scoresbysund",
  "America/Shiprock",
  "America/Sitka",
  "America/St_Barthelemy",
  "America/St_Johns",
  "America/St_Kitts",
  "America/St_Lucia",
  "America/St_Thomas",
  "America/St_Vincent",
  "America/Swift_Current",
  "America/Tegucigalpa",
  "America/Thule",
  "America/Thunder_Bay",
  "America/Tijuana",
  "America/Toronto",
  "America/Tortola",
  "America/Vancouver",
  "America/Whitehorse",
  "America/Winnipeg",
  "America/Yakutat",
  "America/Yellowknife",
  "Antarctica/Casey",
  "Antarctica/Davis",
  "Antarctica/DumontDUrville",
  "Antarctica/Macquarie",
  "Antarctica/Mawson",
  "Antarctica/McMurdo",
  "Antarctica/Palmer",
  "Antarctica/Rothera",
  "Antarctica/South_Pole",
  "Antarctica/Syowa",
  "Antarctica/Troll",
  "Antarctica/Vostok",
  "Arctic/Longyearbyen",
  "Asia/Aden",
  "Asia/Almaty",
  "Asia/Amman",
  "Asia/Anadyr",
  "Asia/Aqtau",
  "Asia/Aqtobe",
  "Asia/Ashgabat",
  "Asia/Atyrau",
  "Asia/Baghdad",
  "Asia/Bahrain",
  "Asia/Baku",
  "Asia/Bangkok",
  "Asia/Barnaul",
  "Asia/Beirut",
  "Asia/Bishkek",
  "Asia/Brunei",
  "Asia/Calcutta",
  "Asia/Chita",
  "Asia/Choibalsan",
  "Asia/Chongqing",
  "Asia/Colombo",
  "Asia/Damascus",
  "Asia/Dhaka",
  "Asia/Dili",
  "Asia/Dubai",
  "Asia/Dushanbe",
  "Asia/Famagusta",
  "Asia/Gaza",
  "Asia/Harbin",
  "Asia/Hebron",
  "Asia/Ho_Chi_Minh",
  "Asia/Hong_Kong",
  "Asia/Hovd",
  "Asia/Irkutsk",
  "Asia/Jakarta",
  "Asia/Jayapura",
  "Asia/Jerusalem",
  "Asia/Kabul",
  "Asia/Kamchatka",
  "Asia/Karachi",
  "Asia/Kashgar",
  "Asia/Kathmandu",
  "Asia/Katmandu",
  "Asia/Khandyga",
  "Asia/Krasnoyarsk",
  "Asia/Kuala_Lumpur",
  "Asia/Kuching",
  "Asia/Kuwait",
  "Asia/Macau",
  "Asia/Magadan",
  "Asia/Makassar",
  "Asia/Manila",
  "Asia/Muscat",
  "Asia/Nicosia",
  "Asia/Novokuznetsk",
  "Asia/Novosibirsk",
  "Asia/Omsk",
  "Asia/Oral",
  "Asia/Phnom_Penh",
  "Asia/Pontianak",
  "Asia/Pyongyang",
  "Asia/Qatar",
  "Asia/Qostanay",
  "Asia/Qyzylorda",
  "Asia/Rangoon",
  "Asia/Riyadh",
  "Asia/Sakhalin",
  "Asia/Samarkand",
  "Asia/Seoul",
  "Asia/Shanghai",
  "Asia/Singapore",
  "Asia/Srednekolymsk",
  "Asia/Taipei",
  "Asia/Tashkent",
  "Asia/Tbilisi",
  "Asia/Tehran",
  "Asia/Thimphu",
  "Asia/Tokyo",
  "Asia/Tomsk",
  "Asia/Ulaanbaatar",
  "Asia/Urumqi",
  "Asia/Ust-Nera",
  "Asia/Vientiane",
  "Asia/Vladivostok",
  "Asia/Yakutsk",
  "Asia/Yangon",
  "Asia/Yekaterinburg",
  "Asia/Yerevan",
  "Atlantic/Azores",
  "Atlantic/Bermuda",
  "Atlantic/Canary",
  "Atlantic/Cape_Verde",
  "Atlantic/Faroe",
  "Atlantic/Madeira",
  "Atlantic/Reykjavik",
  "Atlantic/South_Georgia",
  "Atlantic/St_Helena",
  "Atlantic/Stanley",
  "Australia/Adelaide",
  "Australia/Brisbane",
  "Australia/Broken_Hill",
  "Australia/Currie",
  "Australia/Darwin",
  "Australia/Eucla",
  "Australia/Hobart",
  "Australia/Lindeman",
  "Australia/Lord_Howe",
  "Australia/Melbourne",
  "Australia/Perth",
  "Australia/Sydney",
  "Europe/Amsterdam",
  "Europe/Andorra",
  "Europe/Astrakhan",
  "Europe/Athens",
  "Europe/Belgrade",
  "Europe/Berlin",
  "Europe/Bratislava",
  "Europe/Brussels",
  "Europe/Bucharest",
  "Europe/Budapest",
  "Europe/Busingen",
  "Europe/Chisinau",
  "Europe/Copenhagen",
  "Europe/Dublin",
  "Europe/Gibraltar",
  "Europe/Guernsey",
  "Europe/Helsinki",
  "Europe/Isle_of_Man",
  "Europe/Istanbul",
  "Europe/Jersey",
  "Europe/Kaliningrad",
  "Europe/Kiev",
  "Europe/Kirov",
  "Europe/Kyiv",
  "Europe/Lisbon",
  "Europe/Ljubljana",
  "Europe/London",
  "Europe/Luxembourg",
  "Europe/Madrid",
  "Europe/Malta",
  "Europe/Mariehamn",
  "Europe/Minsk",
  "Europe/Monaco",
  "Europe/Moscow",
  "Europe/Oslo",
  "Europe/Paris",
  "Europe/Podgorica",
  "Europe/Prague",
  "Europe/Riga",
  "Europe/Rome",
  "Europe/Samara",
  "Europe/San_Marino",
  "Europe/Sarajevo",
  "Europe/Saratov",
  "Europe/Simferopol",
  "Europe/Skopje",
  "Europe/Sofia",
  "Europe/Stockholm",
  "Europe/Tallinn",
  "Europe/Tirane",
  "Europe/Ulyanovsk",
  "Europe/Uzhgorod",
  "Europe/Vaduz",
  "Europe/Vatican",
  "Europe/Vienna",
  "Europe/Vilnius",
  "Europe/Volgograd",
  "Europe/Warsaw",
  "Europe/Zagreb",
  "Europe/Zaporozhye",
  "Europe/Zurich",
  "GMT",
  "Indian/Antananarivo",
  "Indian/Chagos",
  "Indian/Christmas",
  "Indian/Cocos",
  "Indian/Comoro",
  "Indian/Kerguelen",
  "Indian/Mahe",
  "Indian/Maldives",
  "Indian/Mauritius",
  "Indian/Mayotte",
  "Indian/Reunion",
  "Pacific/Apia",
  "Pacific/Auckland",
  "Pacific/Bougainville",
  "Pacific/Chatham",
  "Pacific/Chuuk",
  "Pacific/Easter",
  "Pacific/Efate",
  "Pacific/Enderbury",
  "Pacific/Fakaofo",
  "Pacific/Fiji",
  "Pacific/Funafuti",
  "Pacific/Galapagos",
  "Pacific/Gambier",
  "Pacific/Guadalcanal",
  "Pacific/Guam",
  "Pacific/Honolulu",
  "Pacific/Johnston",
  "Pacific/Kanton",
  "Pacific/Kiritimati",
  "Pacific/Kosrae",
  "Pacific/Kwajalein",
  "Pacific/Majuro",
  "Pacific/Marquesas",
  "Pacific/Midway",
  "Pacific/Nauru",
  "Pacific/Niue",
  "Pacific/Norfolk",
  "Pacific/Noumea",
  "Pacific/Pago_Pago",
  "Pacific/Palau",
  "Pacific/Pitcairn",
  "Pacific/Pohnpei",
  "Pacific/Ponape",
  "Pacific/Port_Moresby",
  "Pacific/Rarotonga",
  "Pacific/Saipan",
  "Pacific/Tahiti",
  "Pacific/Tarawa",
  "Pacific/Tongatapu",
  "Pacific/Truk",
  "Pacific/Wake",
  "Pacific/Wallis",
];

const completionSpec: Fig.Spec = {
  name: "m",
  description: "Swiss Army Knife for macOS",
  subcommands: [
    {
      name: "airdrop",
      description: "Manage AirDrop",
      subcommands: [
        {
          name: "status",
          description: "Show AirDrop status",
        },
        {
          name: "on",
          description: "Enable AirDrop",
        },
        {
          name: "enable",
          description: "Enable AirDrop",
        },
        {
          name: "off",
          description: "Disable AirDrop",
        },
        {
          name: "disable",
          description: "Disable AirDrop",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "appearance",
      description: "Manage appearance",

      subcommands: [
        {
          name: "darkmode",
          description: "Manage dark mode",
          args: {
            name: "status",
            description: "Whether to use dark versions of interface elements",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "transparency",
          description: "Manage transparency",
          args: {
            name: "status",
            description:
              "Whether to allow the OS to make certain elements semi-transparent",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "antialiasthreshold",
          description: "Manage antialiasing threshold",
          args: {
            name: "threshold",
            description: "The threshold above which antialiasing is turned on",
          },
        },
        {
          name: "sidebariconsize",
          description: "Manage sidebar icon size",
          args: {
            name: "size",
            description: "The size of the icons in various window sidebars",
            suggestions: ["small", "medium", "large"],
          },
        },
        {
          name: "maincolor",
          description: "Manage main color",
          args: {
            name: "color",
            description:
              "The color used for the majority of the interface elements",
            suggestions: ["blue", "graphite"],
          },
        },
        {
          name: "highlightcolor",
          description: "Manage highlight color",
          args: {
            name: "color",
            description: "The color used for highlights",
            suggestions: [
              "graphite",
              "cayenne",
              "asparagus",
              "clover",
              "teal",
              "midnight",
              "plum",
              "tin",
              "nickel",
              "mocha",
              "fern",
              "moss",
              "ocean",
              "eggplant",
              "maroon",
              "steel",
              "aluminum",
              "maraschino",
              "lemon",
              "spring",
              "turquoise",
              "blueberry",
              "magenta",
              "iron",
              "magnesium",
              "tangerine",
              "lime",
              "seafoam",
              "aqua",
              "grape",
              "strawberry",
              "tungsten",
              "silver",
              "salmon",
              "banana",
              "flora",
              "ice",
              "orchid",
              "bubblegum",
              "lead",
              "mercery",
              "cantaloupe",
              "honeydew",
              "spindrift",
              "sky",
              "lavender",
              "carnation",
              "licorice",
              "snow",
            ],
          },
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "battery",
      description: "Manage battery",
      subcommands: [
        {
          name: "status",
          description: "Show battery status",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "bluetooth",
      description: "Manage Bluetooth",
      subcommands: [
        {
          name: "status",
          description: "Show bluetooth status",
        },
        {
          name: "on",
          description: "Enable bluetooth",
        },
        {
          name: "enable",
          description: "Enable bluetooth",
        },
        {
          name: "off",
          description: "Disable bluetooth",
        },
        {
          name: "disable",
          description: "Disable bluetooth",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "dir",
      description: "Manage directories",
      subcommands: [
        {
          name: "tree",
          description: "Show tree view of folders in the current path",
          args: {
            name: "path",
            description: "Path to show tree view of folders",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "delete",
          description: "Delete folders",
          subcommands: [
            {
              name: "empty",
              description:
                "Delete empty folders recursively in the current path",
              args: {
                name: "path",
                description: "Path to delete empty folders",
                isOptional: true,
                template: "folders",
              },
            },
            {
              name: "dsfiles",
              description:
                "Delete .DS_Store files recursively in the current path",
              args: {
                name: "path",
                description:
                  "Delete .DS_Store files recursively in a specific path",
                isOptional: true,
                template: "folders",
              },
            },
          ],
        },
        {
          name: "dsfiles",
          description: "Manage .DS_Store files",
          subcommands: [
            {
              name: "on",
              description: "Restore generation of .DS_Store",
            },
            {
              name: "off",
              description: "Prohibit generation of .DS_Store",
            },
          ],
        },
        {
          name: "size",
          description: "Calculate current folder size",
          args: {
            name: "path",
            description: "Path to calculate folder size",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "disk",
      description: "Manage disks",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List disk partitions",
          args: {
            name: "path",
            description: "Path to the disk file",
            isOptional: true,
            generators: [{ template: "filepaths" }, generateDisks],
          },
        },
        {
          name: "info",
          description: "Show disk information",
          args: {
            name: "path",
            description: "Path to show disk information",
            generators: [{ template: "filepaths" }, generateDisks],
          },
        },
        {
          name: "ejectall",
          description: "Eject all mountable volumes",
        },
        {
          name: "verify",
          description: "Verify disk",
          subcommands: [
            {
              name: "volume",
              description: "Verify volume",
              args: {
                name: "path",
                description: "Path to verify volume",
                generators: [{ template: "filepaths" }, generateVolumes],
              },
            },
            {
              name: "disk",
              description: "Verify disk",
              args: {
                name: "path",
                description: "Path to verify disk",
                generators: [{ template: "filepaths" }, generateDisks],
              },
            },
          ],
        },
        {
          name: "repair",
          description: "Repair disk",
          subcommands: [
            {
              name: "volume",
              description: "Repair volume",
              args: {
                name: "path",
                description: "Path to repair volume",
                generators: [{ template: "filepaths" }, generateVolumes],
              },
            },
            {
              name: "disk",
              description: "Repair disk",
              args: {
                name: "path",
                description: "Path to repair disk",
                generators: [{ template: "filepaths" }, generateDisks],
              },
            },
          ],
        },
        {
          name: "format",
          description: "Format disk",
          subcommands: [
            {
              name: "MS-DOS",
              description:
                "Format the entire disk with a windows format (MS-DOS)",
              args: [
                {
                  name: "name",
                  description: "Name of the volume",
                },
                {
                  name: "path",
                  description: "Path to format the entire disk",
                  generators: [{ template: "filepaths" }, generateDisks],
                },
              ],
            },
            {
              name: "volume",
              description: "Format the volume with a windows format (MS-DOS)",
              args: [
                {
                  name: "name",
                  description: "Name of the volume",
                },
                {
                  name: "path",
                  description: "Path to format the volume",
                  generators: [{ template: "filepaths" }, generateVolumes],
                },
              ],
            },
          ],
        },
        {
          name: "reformat",
          description: "Reformat a volume",
          args: {
            name: "path",
            description: "Path to reformat a volume",
            generators: [{ template: "filepaths" }, generateVolumes],
          },
        },
        {
          name: "rename",
          description: "Rename a volume",
          args: [
            {
              name: "currentName",
              description: "Current name of the volume",
              generators: [{ template: "filepaths" }, generateVolumes],
            },
            {
              name: "newName",
              description: "New name of the volume",
            },
          ],
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "display",
      description: "Manage displays",
      subcommands: [
        {
          name: "status",
          description: "Show display status",
        },
        {
          name: "help",
          description: "Show usage",
        },
        {
          name: "up",
          description: "Turn up the brightness",
        },
        {
          name: "down",
          description: "Turn down the brightness",
        },
      ],
    },
    {
      name: "dns",
      description: "Manage dns",
      subcommands: [
        {
          name: "flush",
          description: "Flush local DNS cache",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "dock",
      description: "Manage dock",
      subcommands: [
        {
          name: "showdelay",
          description:
            "Changes how long the Dock takes to show up when auto-hide is enabled",
          args: {
            name: "seconds",
            description: "Seconds to show delay",
          },
        },
        {
          name: "autohide",
          description: "Enable or disable Dock's auto hide feature",
          args: {
            name: "YES/NO",
            description: "YES/NO to enable/disable Dock's auto hide feature",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "autohidedelay",
          description:
            "Changes how long it takes to detect you want to show up the dock",
          args: {
            name: "seconds",
            description: "Seconds to auto hide delay",
          },
        },
        {
          name: "magnification",
          description: "Turn magnification on or off",
          args: {
            name: "YES/NO",
            description: "YES/NO to turn magnification on or off",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "position",
          description: "Change Dock's position",
          args: {
            name: "position",
            description: "Position to change Dock's position",
            suggestions: ["BOTTOM", "LEFT", "RIGHT"],
          },
        },
        {
          name: "addblankspace",
          description: "Add a blank space (separator) to the Dock",
        },
        {
          name: "addrecentitems",
          description: "Add a stack containg your recent items to the Dock",
        },
        {
          name: "prune",
          description: "Remove all items from dock",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "finder",
      description: "Manage finder",
      subcommands: [
        {
          name: "showhiddenfiles",
          description: "Show hidden files Status",
          args: {
            name: "YES/NO",
            description: "YES/NO to show hidden files",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "showextensions",
          description: "Show all file extensions Status",
          args: {
            name: "YES/NO",
            description: "YES/NO to show all file extensions",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "showdesktop",
          description: "Show the desktop Status",
          args: {
            name: "YES/NO",
            description: "YES/NO to show the desktop",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "showpath",
          description:
            "Show the current opened folder path on the top bar of the Finder window",
          args: {
            name: "YES/NO",
            description:
              "YES/NO to show the current opened folder path on the top bar of the Finder window",
            suggestions: ["YES", "NO"],
          },
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "firewall",
      description: "Manage firewall",
      subcommands: [
        {
          name: "status",
          description: "Show status",
        },
        {
          name: "enable",
          description: "Enable firewall",
        },
        {
          name: "disable",
          description: "Disable firewall",
        },
        {
          name: "list",
          description: "List applications handled by firewall",
        },
        {
          name: "add",
          description: "Add app to firewall",
          args: {
            name: "path",
            description: "Path of the app to add to firewall",
            template: "filepaths",
          },
        },
        {
          name: "remove",
          description: "Remove app from firewall",
          args: {
            name: "path",
            description: "Path of the app to remove from firewall",
          },
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "flightmode",
      description: "Manage flight mode",
      subcommands: [
        {
          name: "off",
          description: "Turn flight mode off",
        },
        {
          name: "on",
          description: "Turn flight mode on",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "gatekeeper",
      description: "Manage gatekeeper",
      subcommands: [
        {
          name: "status",
          description: "Show status",
        },
        {
          name: "enable",
          description: "Enable gatekeeper",
          args: {
            name: "rule",
            description: "Rule to enable",
            isOptional: true,
          },
        },
        {
          name: "disable",
          description: "Disable gatekeeper",
          args: {
            name: "rule",
            description: "Rule to disable",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List rules",
        },
        {
          name: "create",
          description: "Create a rule for the application",
          args: [
            {
              name: "RULENAME",
              description: "Name of the rule",
            },
            {
              name: "/path/to/program",
              description: "Path to the program",
            },
          ],
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "group",
      description: "Manage groups",
      subcommands: [
        {
          name: "list",
          description: "List groups",
        },
        {
          name: "info",
          description: "Get group information",
          args: {
            name: "group",
            description: "Group to get information",
          },
        },
        {
          name: "adduser",
          description: "Add user to group",
          args: [
            {
              name: "user",
              description: "User to add to group",
              generators: generateUsers,
            },
            {
              name: "group",
              description: "Group to add user to",
              generators: generateGroups,
            },
          ],
        },
        {
          name: "removeuser",
          description: "Remove user from group",
          args: [
            {
              name: "user",
              description: "User to remove from group",
              generators: generateUsers,
            },
            {
              name: "group",
              description: "Group to remove user from",
              generators: generateGroups,
            },
          ],
        },
        {
          name: "ismember",
          description: "Check if user is a member of group",
          args: [
            {
              name: "user",
              description: "User to check membership",
              generators: generateUsers,
            },
            {
              name: "group",
              description: "Group to check membership",
              generators: generateGroups,
            },
          ],
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "hostname",
      description: "Manage hostname",
      subcommands: [
        {
          name: "newhostname",
          description: "Set new hostname",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "info",
      description: "Show system information",
    },
    {
      name: "help",
      description: `Show help`,
    },
    {
      name: "itunes",
      description: "Manage iTunes",
      subcommands: [
        {
          name: "status",
          description: "Show status",
        },
        {
          name: "play",
          description: "Play track",
        },
        {
          name: "pause",
          description: "Pause track",
        },
        {
          name: "next",
          description: "Play next track",
        },
        {
          name: "prev",
          description: "Play previous track",
        },
        {
          name: "mute",
          description: "Mute iTunes",
        },
        {
          name: "unmute",
          description: "Unmute iTunes",
        },
        {
          name: "vol",
          description: "Volume",
          args: {
            name: "up/down/#",
            description: "Up/Down/Number",
            suggestions: ["up", "down" /*, "#",*/],
            isOptional: true,
          },
        },
        {
          name: "stop",
          description: "Stop track",
        },
        {
          name: "quit",
          description: "Quit iTunes",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "localhost",
      description: "Manage localhost",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List current records in localhost",
        },
        {
          name: "add",
          description: "Add a new host to the localhost file",
          args: [
            {
              name: "IP",
              description: "IP of the host",
            },
            {
              name: "HOSTNAME",
              description: "Hostname of the host",
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a host from the localhost file",
          args: {
            name: "HOSTNAME",
            description: "Hostname of the host",
          },
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "lock",
      description: "Lock session",
    },
    {
      name: "network",
      description: "Manage network",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List network interfaces",
        },
        {
          name: "location",
          description: "Manage location",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List locations",
            },
            {
              name: "create",
              description: "Create a location",
              args: {
                name: "name",
                description: "Name of the location",
              },
            },
            {
              name: "delete",
              description: "Delete a location",
              args: {
                name: "name",
                description: "Name of the location",
                generators: generateNetworkLocations,
              },
            },
            {
              name: "switch",
              description: "Switch location",
              args: {
                name: "name",
                description: "Name of the location",
              },
            },
          ],
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "nosleep",
      description: "Manage no sleep",
      subcommands: [
        {
          name: "until",
          description: "No sleep until",
          subcommands: [
            {
              name: "pid",
              description: "No sleep until process id ends",
              args: {
                name: "pid",
                description: "Process id",
                generators: generatePids,
              },
            },
          ],
          args: {
            name: "time or script",
            template: "filepaths",
          },
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "notification",
      description: "Manage notification",
      subcommands: [
        {
          name: "showcenter",
          description: "Show notification center",
          args: {
            name: "YES/NO",
            description: "Enable/Disable notification center",
            suggestions: ["YES", "NO"],
            isOptional: true,
          },
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "ntp",
      description: "Manage ntp",
      subcommands: [
        {
          name: "status",
          description: "Status of the network time service",
        },
        {
          name: "enable",
          description: "Enable clock to use network time",
        },
        {
          name: "disable",
          description: "Disable clock to use network time",
        },
        {
          name: "set",
          description: "Set network time server",
          args: {
            name: "hostname",
            description: "Network time server",
          },
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "printer",
      description: "Manage printer",
      subcommands: [
        {
          name: "settings",
          description: "Printer settings",
        },
        {
          name: "name",
          description: "Display printer names on system",
        },
        {
          name: "queue",
          description: "Display items in printer queue on system",
        },
        {
          name: "drivers",
          description: "Display all printer drivers",
        },
        {
          name: "web",
          description: "Enable and show web interface",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "restart",
      description: "Restart computer (needs confirmation)",
      subcommands: [
        {
          name: ["-f", "--force"],
          description: "Restart computer (without confirmation)",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "safeboot",
      description: "Manage safe boot",
      subcommands: [
        {
          name: "status",
          description: "Get the boot args",
        },
        {
          name: "enable",
          description: "Enable safe boot",
        },
        {
          name: "disable",
          description: "Disable safeboot",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "screensaver",
      description: "Manage screensaver",
      subcommands: [
        {
          name: "status",
          description: "Get the current status",
        },
        {
          name: "askforpassword",
          description: "Get password requirement to unlock",
          args: {
            name: "YES/NO",
            description: "Enable/Disable password requirement to unlock",
            suggestions: ["YES", "NO"],
            isOptional: true,
          },
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "service",
      description: "Manage service",
      subcommands: [
        {
          name: "--status-all",
          description: "List all services",
        },
        {
          name: ["--ls", "--list"],
          description: "List all services",
          args: {
            name: "service",
            description: "Service name",
            isOptional: true,
          },
        },
        {
          name: "start",
          description: "Start a service",
          args: {
            name: "service",
            description: "Service name",
            generators: generateServices,
          },
        },
        {
          name: "stop",
          description: "Stop a service",
          args: {
            name: "service",
            description: "Service name",
            generators: generateServices,
          },
        },
        {
          name: "load",
          description: "Load a service",
          args: {
            name: "service",
            description: "Service name",
            generators: generateServices,
          },
        },
        {
          name: "unload",
          description: "Unload a service",
          args: {
            name: "service",
            description: "Service name",
            generators: generateServices,
          },
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "shutdown",
      description: "Shutdown computer (needs confirmation)",
      subcommands: [
        {
          name: "-f",
          description: "Shutdown computer (without confirmation)",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "sleep",
      description: "Put computer to sleep",
      subcommands: [{ name: "help", description: "Show help" }],
    },
    {
      name: "timezone",
      description: "Get current timezone",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List available timezones",
        },
        {
          name: "set",
          description: "Set timezone",
          args: {
            name: "timezone",
            description: "Timezone",
            suggestions: timezones.map((name) => ({ name, icon: "🕑" })),
          },
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "touchbar",
      description: "Manage touchbar",
      subcommands: [
        {
          name: "reset",
          description: "Reset touchbar",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "trash",
      description: "Manage trash",
      subcommands: [
        {
          name: "status",
          description: "Get trash info",
        },
        {
          name: "clean",
          description: "Clean trash",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "user",
      description: "Manage user",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List all users",
        },
        {
          name: "info",
          description: "Get user info",
          args: {
            name: "username",
            description: "Username",
            generators: generateUsers,
          },
        },
        {
          name: "create",
          description: "Create a new user",
        },
        {
          name: "delete",
          description: "Delete a user",
          args: {
            name: "username",
            description: "Username",
            generators: generateUsers,
          },
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "volume",
      description: "Manage volume level",
      subcommands: [
        {
          name: "mute",
          description: "Set mute",
        },
        {
          name: "unmute",
          description: "Unset mute",
        },
        {
          name: "ismute",
          description: "Check the volume status",
        },
        {
          name: "up",
          description: "Increase the volume by 6.25",
        },
        {
          name: "down",
          description: "Decrease the volume by 6.25",
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
      args: {
        name: "volume",
        description: "Volume level up/down/(+/-)number",
      },
    },
    {
      name: "vpn",
      description: "Manage VPN connections",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List VPN connections",
        },
        {
          name: "start",
          description: "Start a VPN connection",
          args: [
            {
              name: "VPN",
              description: "VPN connection name",
              isOptional: true,
            },
            {
              name: "USER",
              description: "VPN connection user",
              isOptional: true,
            },
            {
              name: "PASS",
              description: "VPN connection password",
              isOptional: true,
            },
            {
              name: "SECRET",
              description: "VPN connection secret",
              isOptional: true,
            },
          ],
        },
        {
          name: "stop",
          description: "Stop a VPN connection",
          args: {
            name: "VPN",
            description: "VPN connection name",
            isOptional: true,
          },
        },
        {
          name: "status",
          description: "Get the status of a VPN connection",
          args: {
            name: "VPN",
            description: "VPN connection name",
            isOptional: true,
          },
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "wallpaper",
      description: "Change wallpaper",
      args: {
        name: "image",
        description: "Path to the wallpaper",
        template: "filepaths",
      },
      subcommands: [
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
    {
      name: "wifi",
      description: "Manage wifi",
      subcommands: [
        {
          name: "status",
          description: "Get wifi status",
        },
        {
          name: "scan",
          description: "Scan wifi",
        },
        {
          name: "showpassword",
          description: "Show wifi network password",
          args: {
            name: "ESSID",
            description: "ESSID",
            isOptional: true,
            generators: generateWifiNetworks,
          },
        },
        {
          name: ["ls", "list"],
          description: "List known wifi networks",
        },
        {
          name: "forget",
          description: "Forget a wifi network",
          args: {
            name: "ESSID",
            description: "ESSID",
            generators: generateWifiNetworks,
          },
        },
        {
          name: "history",
          description: "Wifi connection history",
        },
        {
          name: "off",
          description: "Turn off your wifi",
        },
        {
          name: "on",
          description: "Turn on your wifi",
        },
        {
          name: "connect",
          description: "Join a wifi network",
          args: [
            {
              name: "ESSID",
              description: "ESSID",
            },
            {
              name: "PASSWORD",
              description: "Password",
              isOptional: true,
            },
          ],
        },
        {
          name: "help",
          description: `Show help`,
        },
      ],
    },
  ],
  options: [
    {
      name: "--update",
      description: "Update m-cli to the latest version",
    },
    {
      name: "--uninstall",
      description: "Uninstall m-cli",
    },
  ],
};

export default completionSpec;
