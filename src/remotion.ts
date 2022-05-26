const localRenderAndStillOptions: Fig.Option[] = [
  {
    name: "--env-file",
    description: "Specify a location for a dotenv file",
    args: {
      template: "filepaths",
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
    name: "--ffmpeg-executable",
    description: "Custom path for FFMPEG executable",
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
    name: "--disable-headless",
    description: "Run Chrome in normal mode rather than headless",
  },
  {
    name: "--config",
    description: "Custom location for a Remotion config file",
    args: {
      template: "filepaths",
    },
  },
];

const lambdaRenderAndStillOptions: Fig.Option[] = [
  {
    name: "--max-retries",
    description:
      "How many times a chunk can be retried before the render times out",
    args: {
      name: "numberOfRetries",
    },
  },
  {
    name: "--privacy",
    args: {
      name: "privacy",
      default: "public",
      suggestions: ["public", "private"],
    },
  },
  {
    name: "--frames-per-lambda",
    description: "How many frames should be rendered per chunk",
    args: {
      name: "framesPerLambda",
    },
  },
];

const localRenderOptions: Fig.Option[] = [
  {
    name: "--sequence",
    description: "Output as an image sequence",
  },
  {
    name: "--concurrency",
    description: "How many frames to render in parallel",
  },
];

const stillOptions: Fig.Option[] = [
  {
    name: "--frame",
    description: "Which frame to render (default 0)",
    args: { name: "frame", default: "0" },
  },
];

const renderOptions: Fig.Option[] = [
  {
    name: "--gl",
    description: "Which OpenGL renderer to use",
    args: {
      suggestions: ["angle", "egl", "swiftshader", "swangle"],
    },
  },
  {
    name: "--timeout",
    description:
      "The time in milisecond that a delayRender() may take before it times out",
  },
  {
    name: "--ignore-certificate-errors",
    description: "Ignore SSL errors",
  },
  {
    name: "--disable-web-security",
    description: "Disable CORS and other web security features",
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
          insertValue: "'{cursor}'",
        },
      ],
    },
  },
  {
    name: "--quality",
    description: "Quality for rendered frames, JPEG only, 0-100",
    args: {
      default: "80",
      suggestions: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((e) => ({
        name: e.toString(),
      })),
    },
  },
  {
    name: "--scale",
    description: "Upscale or downscale or the dimensions of the video",
    args: {
      default: "1",
      suggestions: [0.25, 0.5, 1, 1.5, 2, 4].map((e) => ({
        name: e.toString(),
      })),
    },
  },
  {
    name: "--codec",
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
    description: "FFMPEG CRF value, controls quality, see docs for info",
  },
  {
    name: "--frames",
    description: "Render a portion or a still of a video, 0-9, 50",
    args: {
      name: "frames",
    },
  },
  {
    name: "--log",
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
    name: "--prores-profile",
    description: "ProRes profile, need --codec=prores to be set",
    args: {
      suggestions: ["4444-xq", "4444", "hq", "standard", "light", "proxy"],
    },
  },
  {
    name: "--image-format",
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
      name: "versions",
      description: "Prints and validates versions of all Remotion packages",
    },
    {
      name: "compositions",
      description: "Prints the list of available compositions",
      args: {
        name: "entry",
        description: "The entry point of your Remotion app",
        template: ["filepaths"],
      },
    },
    {
      name: "lambda",
      description: "Access functionality of @remotion/lambda",
      subcommands: [
        {
          name: "policies",
          description: "Manage AWS policies",
          subcommands: [
            {
              name: "role",
              description: "Print policy to be added to the AWS role",
            },
            {
              name: "user",
              description: "Print policy to be added to the AWS user",
            },
            {
              name: "validate",
              description: "Validate the user policy was configured correctly",
            },
          ],
        },
        {
          name: "quotas",
          description: "Show current AWS quota",
          options: globalLambdaOptions,
          subcommands: [
            {
              name: "increase",
              description:
                "Send a request to AWS to increase concurrency quotas",
              options: globalLambdaOptions,
            },
          ],
        },
        {
          name: "regions",
          description: "Prints list of supported regions",
        },
        {
          name: "render",
          description: "Render media on Lambda",
          args: [
            {
              name: "serve-url",
              description: "URL or name of the site",
              suggestions: [
                {
                  type: "arg",
                  displayName: "[serve-url]",
                },
              ],
            },
            {
              name: "composition-id",
              description: "Name of the composition",
              suggestions: [
                {
                  type: "arg",
                  displayName: "[serve-url]",
                },
              ],
            },
            {
              name: "out-name",
              description:
                "Where the output should be downloaded. No download it omitted",
              suggestions: [
                {
                  type: "arg",
                  displayName: "[out-name]",
                },
              ],

              isOptional: true,
            },
          ],
          options: [
            ...lambdaRenderAndStillOptions,
            ...renderOptions,
            ...globalLambdaOptions,
          ],
        },
        {
          name: "still",
          description: "Render a still on Lambda",
          args: [
            {
              name: "serve-url",
              description: "URL or name of the site",
              suggestions: [
                {
                  type: "arg",
                  displayName: "[serve-url]",
                },
              ],
            },
            {
              name: "composition-id",
              description: "Name of the composition",
              suggestions: [
                {
                  type: "arg",
                  displayName: "[composition-id]",
                },
              ],
            },
            {
              name: "out-name",
              description:
                "Where the output should be downloaded. No download it omitted",
              isOptional: true,
              suggestions: [
                {
                  type: "arg",
                  displayName: "[out-name]",
                },
              ],
            },
          ],
          options: [
            ...lambdaRenderAndStillOptions,
            ...stillOptions,
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
                  args: {
                    name: "sizeInMegabytes",
                  },
                },
                {
                  name: "--disk",
                  description: "Amount of disk space in MB to allocate",
                  args: {
                    name: "diskInMegabytes",
                  },
                },
                {
                  name: "--architecture",
                  description:
                    "Type of CPU architecture to use for the Lambda function",
                  args: {
                    name: "architecture",
                    suggestions: [
                      { name: "x86_64", icon: "fig://icon?type=cpu" },
                      { name: "arm64", icon: "fig://icon?type=cpu" },
                    ],
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
                  args: {
                    name: "How the folder in S3 should be named.",
                  },
                },
              ],
              args: {
                name: "entry",
                template: ["filepaths"],
                suggestions: [
                  {
                    type: "arg",
                    displayName: "[entry-point]",
                  },
                ],
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
        ...renderOptions,
        ...localRenderOptions,
        ...localRenderAndStillOptions,
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
      options: [...stillOptions, ...localRenderAndStillOptions],
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
                insertValue: "'{cursor}'",
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
