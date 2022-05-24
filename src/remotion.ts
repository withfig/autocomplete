const renderOptions: Fig.Option[] = [
  {
    name: "--props",
    insertValue: "--props=",
    description: "Pass input props as filename or as JSON",
    args: {
      template: ["filepaths"],
      suggestions: [
        {
          type: "arg",
          displayName: "[json string]",
        },
      ],
    },
  },
  {
    name: "--quality",
    insertValue: "--quality=",
    description: "Quality for rendered frames, JPEG only, 0-100",
    args: {
      default: "80",
      suggestions: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((e) => ({
        name: e.toString(),
      })),
    },
  },
  {
    name: "--codec",
    insertValue: "--codec=",
    description: "Video of audio codec",
    args: {
      default: "h264",
      suggestions: [
        { name: "h264" },
        { name: "h265" },
        { name: "png" },
        { name: "vp8" },
        { name: "vp9" },
        { name: "mp3" },
        { name: "aac" },
        { name: "wav" },
        { name: "prores" },
        { name: "h264-mkv" },
      ],
    },
  },
  {
    name: "--crf",
    insertValue: "--crf=",
    description: "FFMPEG CRF value, controls quality, see docs for info",
  },
  {
    name: "--frames",
    insertValue: "--frames=",

    description: "Render a portion or a still of a video, 0-9, 50",
    args: {
      name: "frames",
    },
  },
  {
    name: "--log",
    insertValue: "--log=",
    description: 'Log level, "error", "warning", "verbose", "info" (default)',
    args: {
      default: "info",
      suggestions: [
        { name: "error" },
        { name: "warning" },
        { name: "verbose" },
        { name: "info" },
      ],
    },
  },
  {
    name: "prores-profile",
    insertValue: "--prores-profile=",
    description: "ProRes profile, need --codec=prores to be set",
    args: {
      suggestions: ["4444-xq", "4444", "hq", "standard", "light", "proxy"],
    },
  },
  {
    name: "--image-format",
    insertValue: "--image-format=",
    description: 'Format to render the frames in, "jpeg" or "png"',
    args: {
      suggestions: [
        {
          name: "jpeg",
        },
        {
          name: "png",
        },
      ],
    },
  },
  {
    name: "--pixel-format",
    insertValue: "--pixel-format=",
    description: "Custom pixel format, see docs for available values",
    args: {
      suggestions: [
        { name: "yuv420p" },
        { name: "yuv422p" },
        { name: "yuv444p" },
        { name: "yuv420p10le" },
        { name: "yuv422p10le" },
        { name: "yuv444p10le" },
        { name: "yuva420p" },
      ],
    },
  },
];

const globalLambdaOptions: Fig.Option[] = [
  {
    name: "--quiet",
    description: "Print less output",
  },
  {
    name: "-q",
    hidden: true,
    description: "Print less output",
  },
  {
    name: "--yes",
    description: "Skip confirmation",
  },
  {
    name: "--force",
    hidden: true,
    isDangerous: true,
    description: "Skip confirmation",
  },
  {
    name: "-y",
    isDangerous: true,
    hidden: true,
    description: "Skip confirmation",
  },
  {
    name: "-f",
    isDangerous: true,
    hidden: true,
    description: "Skip confirmation",
  },
  {
    name: "--region",
    description: "The AWS region specifier",
    args: {
      suggestions: [
        {
          name: "us-east-1",
          description: "North Virginia",
        },
        {
          name: "us-east-2",
          description: "Ohio",
        },
        {
          name: "eu-central-1",
          description: "Frankfurt",
        },
        {
          name: "eu-west-1",
          description: "Ireland",
        },
        {
          name: "eu-west-2",
          description: "London",
        },
        {
          name: "us-west-2",
          description: "Oregon",
        },
        {
          name: "ap-south-1",
          description: "Mumbai",
        },
        {
          name: "ap-southeast-1",
          description: "Singapore",
        },
        {
          name: "ap-southeast-2",
          description: "Sydney",
        },
        {
          name: "ap-northeast-1",
          description: "Tokyo",
        },
      ],
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "remotion",

  description: "Create videos programmatically in React",
  subcommands: [
    {
      name: "lambda",
      description: "Access functionality of @remotion/lambda",
      subcommands: [
        {
          name: "render",
          description: "Render media on Lambda",

          args: [
            {
              name: "serve-url",
              description: "URL or name of the site",
            },
            {
              name: "composition-id",
              description: "Name of the composition",
            },
            {
              name: "out-name",
              description:
                "Where the output should be downloaded. No download it omitted",
              isOptional: true,
            },
          ],
          options: [
            {
              name: "--max-retries",
              insertValue: "--max-retries=",
              description:
                "How many times a chunk can be retried before the render times out",
              args: {
                name: "numberOfRetries",
              },
            },
            {
              name: "--privacy",
              insertValue: "--privacy=",
              args: {
                name: "privacy",
                default: "public",
                suggestions: ["public", "private"],
              },
            },
            {
              name: "--frames-per-lambda",
              insertValue: "--frames-per-lambda=",
              description: "How many frames should be rendered per chunk",
              args: {
                name: "framesPerLambda",
              },
            },
            ...renderOptions,
            ...globalLambdaOptions,
          ],
        },
        {
          name: "functions",
          description: "Manage functions on AWS Lambda",
          subcommands: [
            {
              name: "ls",
              description: "List deployed functions",
              options: globalLambdaOptions,
            },
            {
              name: "deploy",
              description:
                "Deploy a function if one with the same parameters doesn't exist",
              options: [
                {
                  name: "--memory",
                  description: "Amount of memory in MB to allocate",
                  insertValue: "--memory=",
                  args: {
                    name: "sizeInMegabytes",
                  },
                },
                {
                  name: "--disk",
                  description: "Amount of disk space in MB to allocate",
                  insertValue: "--disk=",
                  args: {
                    name: "diskInMegabytes",
                  },
                },
                {
                  name: "--architecture",
                  description:
                    "Type of CPU architecture to use for the Lambda function",
                  insertValue: "--architecture=",
                  args: {
                    name: "architecture",
                    suggestions: [{ name: "x86_64" }, { name: "arm64" }],
                  },
                },
                {
                  name: "--disable-cloudwatch",
                  description: "Disable CloudWatch logging",

                  exclusiveOn: ["--retention-period"],
                },
                {
                  name: "--retention-period",
                  description: "CloudWatch log retention period in days",
                  exclusiveOn: ["--disable-cloudwatch"],
                  args: {
                    name: "retentionPeriodInDays",
                  },
                },
                ...globalLambdaOptions,
              ],
            },
            {
              name: "rmall",
              description: "Remove all functions in a region",
              isDangerous: true,
              options: globalLambdaOptions,
            },
            {
              name: "rm",
              description: "Remove a function",
              args: {
                name: "function-name",
                description: "ID of your function",
                suggestCurrentToken: true,
              },
              options: globalLambdaOptions,
            },
          ],
          options: globalLambdaOptions,
        },
        {
          name: "sites",

          options: globalLambdaOptions,
          subcommands: [
            {
              name: "ls",
              description: "List sites",
              options: globalLambdaOptions,
            },
            {
              name: "rmall",
              description: "Remove all sites in a region",
              isDangerous: true,
              options: globalLambdaOptions,
            },
            {
              name: "rm",

              description: "Remove a site",
              args: {
                name: "site-name",
                description: "ID of your site",
                suggestCurrentToken: true,
              },
              options: globalLambdaOptions,
            },
            {
              name: "create",
              description: "Create or update a site",

              options: [
                ...globalLambdaOptions,
                {
                  name: "--site-name",
                  insertValue: "--site-name=",
                  args: {
                    name: "How the folder in S3 should be named.",
                  },
                },
              ],
              args: {
                name: "entry",
                template: ["filepaths"],
              },
            },
          ],
        },
      ],
      options: [...globalLambdaOptions],
    },
    {
      name: "render",

      priority: 60,
      description:
        "Render a video based on the entry point, the composition ID and save it to the output location",
      args: [
        {
          name: "entry",
          template: ["filepaths"],
        },
        {
          name: "comp-id",
          description: "The composition ID",

          suggestions: [
            {
              type: "arg",
              displayName: "[comp-id]",
            },
          ],
        },
        {
          name: "output",

          template: ["filepaths"],
          suggestions: ["out.mp4"],
        },
      ],
      options: [
        {
          name: "--concurrency",
          description: "How many frames to render in parallel",
        },
        {
          name: "--config",
          description: "Custom location for a Remotion config file",
          args: {
            template: "filepaths",
          },
        },
        ...renderOptions,
        {
          name: "--overwrite",
          description: "Overwrite if file exists, default true",
        },
        {
          name: "--sequence",
          description: "Output as an image sequence",
        },
        {
          name: "--browser-executable",
          description: "Custom path for browser executable",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--bundle-cache",
          description: "Cache webpack bundle, boolean, default true",
        },
        {
          name: "--port",
          description: "Custom port to use for the HTTP server",
          args: {
            name: "port",
            default: "3333",
          },
        },
        {
          name: "--env-file",
          description: "Specify a location for a dotenv file",
          args: {
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "still",
      priority: 55,
      description:
        "Render a still frame based on the entry point, the composition ID and save it to the output location",
      args: [
        {
          name: "entry",
          template: ["filepaths"],
        },
        {
          name: "comp-id",
          description: "The composition ID",
          suggestions: [
            {
              type: "arg",
              displayName: "[comp-id]",
            },
          ],
        },
        {
          name: "output",
          template: ["filepaths"],
          suggestions: ["out.mp4"],
        },
      ],
      options: [
        {
          name: "--frame",
          description: "Which frame to render (default 0)",
          args: { name: "frame", default: "0" },
        },
        {
          name: "--image-format",
          description: 'Format to render the frames in, "jpeg" or "png"',
          args: {
            template: ["filepaths"],
          },
        },
        {
          name: "--props",
          description: "Pass input props as filename or as JSON",
          args: {
            template: ["filepaths"],
            suggestions: [
              {
                type: "arg",
                displayName: "[json string]",
              },
            ],
          },
        },
        {
          name: "--config",
          description: "Custom location for a Remotion config file",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--quality",
          description: "Quality for rendered frames, JPEG only, 0-100",
          args: {
            default: "80",
          },
        },
        {
          name: "--overwrite",
          description: "Overwrite if file exists, default true",
        },
        {
          name: "--browser-executable",
          description: "Custom path for browser executable",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--bundle-cache",
          description: "Cache webpack bundle, boolean, default true",
        },
        {
          name: "--log",
          description:
            'Log level, "error", "warning", "verbose", "info" (default)',
          args: {
            default: "info",
            suggestions: [
              { name: "error" },
              { name: "warning" },
              { name: "verbose" },
              { name: "info" },
            ],
          },
        },
        {
          name: "--port",
          description: "Custom port to use for the HTTP server",
          args: {
            name: "port",
            default: "3333",
          },
        },
        {
          name: "--env-file",
          description: "Specify a location for a dotenv file",
        },
      ],
    },
    {
      name: "preview",
      priority: 50,
      description:
        "Start the server which allows you to preview the Remotion video",
      args: {
        name: "entry",
        template: ["filepaths"],
      },
      options: [
        {
          name: "--props",
          description: "Pass input props as filename or as JSON",
          args: {
            template: ["filepaths"],
            suggestions: [
              {
                type: "arg",
                displayName: "[json string]",
              },
            ],
          },
        },
      ],
    },
    {
      name: "upgrade",
      description:
        "Upgrade all Remotion-related dependencies to the newest version",
    },
  ],
  options: [
    {
      name: "--help",
      description: "Prints the list of commands and flags for quick lookup",
    },
  ],
};
export default completionSpec;
