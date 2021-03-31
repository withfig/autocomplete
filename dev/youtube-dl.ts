const youtubeDlGenerators: Record<string, Fig.Generator> = {
  listVideos: {
    script: (context) => {
      let urlParam;
      for (let i = 0; i < context.length; i++) {
        if (context[i].includes('youtube.')) {
          urlParam = context[i];
          break;
        }
      }
      return `youtube-dl --flat-playlist -J ${urlParam}`;
    },

    postProcess: function (out) {
      try {
        return JSON.parse(out)['entries'].map((video, index) => {
          return {
            name: `${index + 1} - ${video.title}`,
            description: video.uploader,
            insertValue: `${index + 1}`,
            icon:
              'https://www.youtube.com/s/desktop/810941b4/img/favicon_32.png',
          };
        });
      } catch (e) {
        return [];
      }
    },
  },
  listClipboard: {
    script: 'pbpaste',
    postProcess: function (out) {
      const regex = new RegExp(
        '^(https?://)?(www.)?(youtube.com|youtu.?be)/.+$'
      );
      try {
        if (regex.test(out))
          return [
            {
              name: out,
              description: 'clipboard',
              icon:
                'https://www.youtube.com/s/desktop/810941b4/img/favicon_32.png',
            },
          ];
      } catch (e) {
        return [];
      }
    },
  },
};

export const completionSpec: Fig.Spec = {
  name: 'youtube-dl',
  description: 'Download videos from YouTube',
  args: {
    name: 'URL',
    generators: youtubeDlGenerators.listClipboard,
  },

  options: [
    {
      name: ['--help', '-h'],
      description: 'Output help',
    },
    {
      name: '--version',
      description: 'Print program version',
    },
    {
      name: ['--ignore-errors', '-i'],
      description: 'Continue on download error',
    },
    {
      name: '--abort-on-error ',
      description: 'Abort downloading of further videos ',
    },
    {
      name: '--dump-user-agent',
      description: 'Display the current browser identification',
    },
    {
      name: '--list-extractors',
      description: 'List all supported extractors',
    },
    {
      name: '--extractor-descriptions',
      description: 'Output descriptions of all supported extractors',
    },
    {
      name: '--force-generic-extractor',
      description: 'Force extraction to use the generic extractor',
    },
    {
      name: '--ignore-config',
      description: 'Do not read configuration files.',
    },
    {
      name: '--flat-playlist',
      description: 'Do not extract the videos of a playlist, only list them.',
    },
    {
      name: '--mark-watched',
      description: 'Mark videos watched (YouTube only)',
    },
    {
      name: '--no-mark-watched',
      description: 'Do not mark videos watched (YouTube only)',
    },
    {
      name: '--no-color',
      description: 'Do not emit color codes in output',
    },
    {
      name: '--proxy',
      description: 'Use the specified HTTP/HTTPS/SOCKS proxy',
      args: {
        name: 'URL',
      },
    },
    {
      name: '--socket-timeout',
      description: 'Time to wait before giving up, in seconds',
      args: {
        name: 'SECONDS',
      },
    },
    {
      name: '--source-address',
      description: 'Client-side IP address to bind to',
      args: {
        name: 'IP',
      },
    },
    {
      name: ['-4', '--force-ipv4'],
      description: 'Make all connections via IPv4',
    },
    {
      name: ['-6', '--force-ipv6'],
      description: 'Make all connections via IPv6',
    },
    {
      name: '--geo-verification-proxy',
      description:
        'Use this proxy to verify the IP address for some geo-restricted sites',
      args: {
        name: 'URL',
      },
    },
    {
      name: '--geo-bypass',
      description:
        'Bypass geographic restriction via faking X-Forwarded-For HTTP header',
    },
    {
      name: '--no-geo-bypass',
      description:
        'Do not bypass geographic restriction via faking X-Forwarded-For HTTP header',
    },

    {
      name: '--geo-bypass-country',
      description:
        'Force bypass geographic restriction with explicitly provided two-letter ISO 3166-2 county code',
      args: {
        name: 'CODE',
      },
    },
    {
      name: '--geo-bypass-ip-block',
      description:
        'Force bypass geographic restriction with explicitly provided IP block in CIDR notation',
      args: {
        name: 'IP_BLOCK',
      },
    },
    {
      name: '--playlist-start',
      description: 'Playlist video to start at (default is 1)',
      args: {
        name: 'NUMBER',
        generators: youtubeDlGenerators.listVideos,
      },
    },
    {
      name: '--playlist-end',
      description: 'Playlist video to end at (default is last)',
      args: {
        name: 'NUMBER',
        generators: youtubeDlGenerators.listVideos,
      },
    },
  ],
};
