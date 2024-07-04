const completionSpec: Fig.Spec = {
  name: "remotion",
  description: "Create videos programmatically in React",
  subcommands: [
    {
      name: "versions",
      description: "Prints and validates versions of all Remotion packages",
    },
    {
      name: "gpu",
      description: "Prints information about how Chrome uses the GPU",
    },
    {
      name: "compositions",
      description: "Prints the list of available compositions",
      args: {
        name: "entry",
        description: "The entry point of your Remotion app",
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
        {
          name: "--env-file",
          description: "Specify a location for a dotenv file",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--disable-headless",
          description: "Run Chrome in normal mode rather than headless",
        },
        {
          name: "--gl",
          description: "Which OpenGL renderer to use",
          args: {
            suggestions: ["angle", "egl", "swiftshader", "swangle", "vulkan"],
          },
        },
        {
          name: "--user-agent",
          description: "User agent to use for Chrome during rendering",
        },
        {
          name: "--ignore-certificate-errors",
          description: "Ignore SSL errors",
        },
        {
          name: "--disable-web-security",
          description: "Disable CORS and other web security features",
        },
      ],
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
          options: [
            {
              name: "--quiet",
              description: "Print less output",
            },
            {
              name: "-q",
              description: "Print less output",
            },
            {
              name: "--log",
              description:
                'Log level, "error", "warning", "verbose", "info" (default)',
              args: {
                default: "info",
                suggestions: [
                  {
                    name: "verbose",
                  },
                  {
                    name: "info",
                  },
                  {
                    name: "warn",
                  },
                  {
                    name: "error",
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
          ],
          subcommands: [
            {
              name: "increase",
              description:
                "Send a request to AWS to increase concurrency quotas",
              options: [
                {
                  name: "--quiet",
                  description: "Print less output",
                },
                {
                  name: "-q",
                  description: "Print less output",
                },
                {
                  name: "--log",
                  description:
                    'Log level, "error", "warning", "verbose", "info" (default)',
                  args: {
                    default: "info",
                    suggestions: [
                      {
                        name: "verbose",
                      },
                      {
                        name: "info",
                      },
                      {
                        name: "warn",
                      },
                      {
                        name: "error",
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
              ],
            },
          ],
        },
        {
          name: "regions",
          description: "Prints list of supported regions",
          options: [
            {
              name: "--default-only",
              description:
                "Only print the regions enabled by default in a new AWS account",
            },
          ],
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
              name: "--disable-headless",
              description: "Run Chrome in normal mode rather than headless",
            },
            {
              name: "--gl",
              description: "Which OpenGL renderer to use",
              args: {
                suggestions: [
                  "angle",
                  "egl",
                  "swiftshader",
                  "swangle",
                  "vulkan",
                ],
              },
            },
            {
              name: "--user-agent",
              description: "User agent to use for Chrome during rendering",
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
              name: "--concurrency-per-lambda",
              description:
                "Concurrency with which each Lambda function should render",
              args: {
                name: "concurrencyPerLambda",
              },
            },
            {
              name: "--overwrite",
              description:
                "Overwrite a video if it already exists in the S3 bucket",
            },
            {
              name: "--function-name",
              description: "Name of the function that should be invoked",
            },
            {
              name: "--renderer-function-name",
              description:
                "Use a different function to render the video. By default, use the same function as the one to start the render",
            },
            {
              name: "--timeout",
              description:
                "The time in milisecond that a delayRender() may take before it times out",
            },
            {
              name: "--quality",
              description: "Quality for rendered frames, JPEG only, 0-100",
              args: {
                default: "80",
                suggestions: [
                  {
                    name: "0",
                  },
                  {
                    name: "10",
                  },
                  {
                    name: "20",
                  },
                  {
                    name: "30",
                  },
                  {
                    name: "40",
                  },
                  {
                    name: "50",
                  },
                  {
                    name: "60",
                  },
                  {
                    name: "70",
                  },
                  {
                    name: "80",
                  },
                  {
                    name: "90",
                  },
                  {
                    name: "100",
                  },
                ],
              },
            },
            {
              name: "--scale",
              description:
                "Upscale or downscale or the dimensions of the video",
              args: {
                default: "1",
                suggestions: [
                  {
                    name: "0.25",
                  },
                  {
                    name: "0.5",
                  },
                  {
                    name: "1",
                  },
                  {
                    name: "1.5",
                  },
                  {
                    name: "2",
                  },
                  {
                    name: "4",
                  },
                ],
              },
            },
            {
              name: "--codec",
              description: "Video or audio codec",
              args: {
                default: "h264",
                suggestions: [
                  {
                    name: "h264",
                  },
                  {
                    name: "h265",
                  },
                  {
                    name: "gif",
                  },
                  {
                    name: "vp8",
                  },
                  {
                    name: "vp9",
                  },
                  {
                    name: "mp3",
                  },
                  {
                    name: "aac",
                  },
                  {
                    name: "wav",
                  },
                  {
                    name: "prores",
                  },
                  {
                    name: "h264-mkv",
                  },
                ],
              },
            },
            {
              name: "--audio-codec",
              description: "Codec to be used for the audio",
              args: {
                suggestions: [
                  {
                    name: "aac",
                  },
                  {
                    name: "mp3",
                  },
                  {
                    name: "opus",
                  },
                  {
                    name: "pcm-16",
                  },
                ],
              },
            },
            {
              name: "--every-nth-frame",
              description: "Render only every nth frame (only for GIFs)",
              args: {
                default: "1",
                suggestions: [
                  {
                    name: "2",
                  },
                  {
                    name: "3",
                  },
                  {
                    name: "4",
                  },
                  {
                    name: "5",
                  },
                ],
              },
            },
            {
              name: "--number-of-gif-loops",
              description: "How many times a GIF should loop. 0 = No loop",
              args: {
                default: "1",
                suggestions: [
                  {
                    name: "0",
                  },
                  {
                    name: "1",
                  },
                  {
                    name: "2",
                  },
                  {
                    name: "3",
                  },
                ],
              },
            },
            {
              name: "--audio-bitrate",
              description: "Customize the output audio bitrate",
            },
            {
              name: "--video-bitrate",
              description:
                "Customize the output video bitrate. Mutually exclusive with --crf",
              exclusiveOn: ["--crf"],
            },
            {
              name: "--crf",
              description:
                "FFMPEG CRF value, controls quality, see docs for info",
              exclusiveOn: ["--video-bitrate"],
            },
            {
              name: "--frames",
              description: "Render a portion or a still of a video, 0-9, 50",
              args: {
                name: "frames",
              },
            },
            {
              name: "--prores-profile",
              description: "ProRes profile, need --codec=prores to be set",
              args: {
                suggestions: [
                  "4444-xq",
                  "4444",
                  "hq",
                  "standard",
                  "light",
                  "proxy",
                ],
              },
            },
            {
              name: "--x264-preset",
              description:
                "Presets balance encoding speed and compression quality, with slower presets achieving better compression. Needs --codec=h264 to be set",
              args: {
                suggestions: [
                  "ultrafast",
                  "superfast",
                  "veryfast",
                  "faster",
                  "fast",
                  "medium",
                  "slow",
                  "slower",
                  "veryslow",
                  "placebo",
                ],
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
                  {
                    name: "yuv420p",
                  },
                  {
                    name: "yuv422p",
                  },
                  {
                    name: "yuv444p",
                  },
                  {
                    name: "yuv420p10le",
                  },
                  {
                    name: "yuv422p10le",
                  },
                  {
                    name: "yuv444p10le",
                  },
                  {
                    name: "yuva420p",
                  },
                ],
              },
            },
            {
              name: "--muted",
              description: "Outputs no audio",
            },
            {
              name: "--height",
              description: "Override the composition height",
              args: {
                name: "height",
              },
            },
            {
              name: "--width",
              description: "Override the composition width",
              args: {
                name: "height",
              },
            },
            {
              name: "--quiet",
              description: "Print less output",
            },
            {
              name: "-q",
              description: "Print less output",
            },
            {
              name: "--log",
              description:
                'Log level, "error", "warning", "verbose", "info" (default)',
              args: {
                default: "info",
                suggestions: [
                  {
                    name: "verbose",
                  },
                  {
                    name: "info",
                  },
                  {
                    name: "warn",
                  },
                  {
                    name: "error",
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
          ],
        },
        {
          name: "compositions",
          description: "Get the list of available compositions on Lambda",
          args: {
            name: "serve-url",
            description: "URL or name of the site",
            suggestions: [
              {
                type: "arg",
                displayName: "[serve-url]",
              },
            ],
          },
          options: [
            {
              name: "--quiet",
              description: "Print less output",
            },
            {
              name: "-q",
              description: "Print less output",
            },
            {
              name: "--log",
              description:
                'Log level, "error", "warning", "verbose", "info" (default)',
              args: {
                default: "info",
                suggestions: [
                  {
                    name: "verbose",
                  },
                  {
                    name: "info",
                  },
                  {
                    name: "warn",
                  },
                  {
                    name: "error",
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
              name: "--env-file",
              description: "Specify a location for a dotenv file",
              args: {
                template: "filepaths",
              },
            },
            {
              name: "--disable-headless",
              description: "Run Chrome in normal mode rather than headless",
            },
            {
              name: "--gl",
              description: "Which OpenGL renderer to use",
              args: {
                suggestions: [
                  "angle",
                  "egl",
                  "swiftshader",
                  "swangle",
                  "vulkan",
                ],
              },
            },
            {
              name: "--user-agent",
              description: "User agent to use for Chrome during rendering",
            },
            {
              name: "--ignore-certificate-errors",
              description: "Ignore SSL errors",
            },
            {
              name: "--disable-web-security",
              description: "Disable CORS and other web security features",
            },
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
              name: "--disable-headless",
              description: "Run Chrome in normal mode rather than headless",
            },
            {
              name: "--gl",
              description: "Which OpenGL renderer to use",
              args: {
                suggestions: [
                  "angle",
                  "egl",
                  "swiftshader",
                  "swangle",
                  "vulkan",
                ],
              },
            },
            {
              name: "--user-agent",
              description: "User agent to use for Chrome during rendering",
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
              name: "--frame",
              description: "Which frame to render (default 0)",
              args: {
                name: "frame",
                default: "0",
              },
            },
            {
              name: "--height",
              description: "Override the composition height",
              args: {
                name: "height",
              },
            },
            {
              name: "--width",
              description: "Override the composition width",
              args: {
                name: "height",
              },
            },
            {
              name: "--quiet",
              description: "Print less output",
            },
            {
              name: "-q",
              description: "Print less output",
            },
            {
              name: "--log",
              description:
                'Log level, "error", "warning", "verbose", "info" (default)',
              args: {
                default: "info",
                suggestions: [
                  {
                    name: "verbose",
                  },
                  {
                    name: "info",
                  },
                  {
                    name: "warn",
                  },
                  {
                    name: "error",
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
          ],
        },
        {
          name: "functions",
          description: "Manage functions on AWS Lambda",
          subcommands: [
            {
              name: "ls",
              description: "List deployed functions",
              options: [
                {
                  name: "--quiet",
                  description: "Print less output",
                },
                {
                  name: "-q",
                  description: "Print less output",
                },
                {
                  name: "--log",
                  description:
                    'Log level, "error", "warning", "verbose", "info" (default)',
                  args: {
                    default: "info",
                    suggestions: [
                      {
                        name: "verbose",
                      },
                      {
                        name: "info",
                      },
                      {
                        name: "warn",
                      },
                      {
                        name: "error",
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
              ],
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
                      {
                        name: "x86_64",
                        icon: "fig://icon?type=cpu",
                      },
                      {
                        name: "arm64",
                        icon: "fig://icon?type=cpu",
                      },
                    ],
                  },
                },
                {
                  name: "--disable-cloudwatch",
                  description: "Disable CloudWatch logging",
                  exclusiveOn: ["--retention-period"],
                },
                {
                  name: "--enable-lambda-insights",
                  description: "Enable Lambda Insights",
                },
                {
                  name: "--custom-role-arn",
                  description:
                    "Set a custom role ARN to be used instead of the default",
                  args: {
                    name: "Role ARN",
                  },
                },
                {
                  name: "--retention-period",
                  description: "CloudWatch log retention period in days",
                  exclusiveOn: ["--disable-cloudwatch"],
                  args: {
                    name: "retentionPeriodInDays",
                  },
                },
                {
                  name: "--quiet",
                  description: "Print less output",
                },
                {
                  name: "-q",
                  description: "Print less output",
                },
                {
                  name: "--log",
                  description:
                    'Log level, "error", "warning", "verbose", "info" (default)',
                  args: {
                    default: "info",
                    suggestions: [
                      {
                        name: "verbose",
                      },
                      {
                        name: "info",
                      },
                      {
                        name: "warn",
                      },
                      {
                        name: "error",
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
              ],
            },
            {
              name: "rmall",
              description: "Remove all functions in a region",
              isDangerous: true,
              options: [
                {
                  name: "--quiet",
                  description: "Print less output",
                },
                {
                  name: "-q",
                  description: "Print less output",
                },
                {
                  name: "--log",
                  description:
                    'Log level, "error", "warning", "verbose", "info" (default)',
                  args: {
                    default: "info",
                    suggestions: [
                      {
                        name: "verbose",
                      },
                      {
                        name: "info",
                      },
                      {
                        name: "warn",
                      },
                      {
                        name: "error",
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
              ],
            },
            {
              name: "rm",
              description: "Remove a function",
              args: {
                name: "function-name",
                description: "ID of your function",
                suggestCurrentToken: true,
              },
              options: [
                {
                  name: "--quiet",
                  description: "Print less output",
                },
                {
                  name: "-q",
                  description: "Print less output",
                },
                {
                  name: "--log",
                  description:
                    'Log level, "error", "warning", "verbose", "info" (default)',
                  args: {
                    default: "info",
                    suggestions: [
                      {
                        name: "verbose",
                      },
                      {
                        name: "info",
                      },
                      {
                        name: "warn",
                      },
                      {
                        name: "error",
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
              ],
            },
          ],
          options: [
            {
              name: "--quiet",
              description: "Print less output",
            },
            {
              name: "-q",
              description: "Print less output",
            },
            {
              name: "--log",
              description:
                'Log level, "error", "warning", "verbose", "info" (default)',
              args: {
                default: "info",
                suggestions: [
                  {
                    name: "verbose",
                  },
                  {
                    name: "info",
                  },
                  {
                    name: "warn",
                  },
                  {
                    name: "error",
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
          ],
        },
        {
          name: "sites",
          options: [
            {
              name: "--quiet",
              description: "Print less output",
            },
            {
              name: "-q",
              description: "Print less output",
            },
            {
              name: "--log",
              description:
                'Log level, "error", "warning", "verbose", "info" (default)',
              args: {
                default: "info",
                suggestions: [
                  {
                    name: "verbose",
                  },
                  {
                    name: "info",
                  },
                  {
                    name: "warn",
                  },
                  {
                    name: "error",
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
          ],
          subcommands: [
            {
              name: "ls",
              description: "List sites",
              options: [
                {
                  name: "--quiet",
                  description: "Print less output",
                },
                {
                  name: "-q",
                  description: "Print less output",
                },
                {
                  name: "--log",
                  description:
                    'Log level, "error", "warning", "verbose", "info" (default)',
                  args: {
                    default: "info",
                    suggestions: [
                      {
                        name: "verbose",
                      },
                      {
                        name: "info",
                      },
                      {
                        name: "warn",
                      },
                      {
                        name: "error",
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
              ],
            },
            {
              name: "rmall",
              description: "Remove all sites in a region",
              isDangerous: true,
              options: [
                {
                  name: "--quiet",
                  description: "Print less output",
                },
                {
                  name: "-q",
                  description: "Print less output",
                },
                {
                  name: "--log",
                  description:
                    'Log level, "error", "warning", "verbose", "info" (default)',
                  args: {
                    default: "info",
                    suggestions: [
                      {
                        name: "verbose",
                      },
                      {
                        name: "info",
                      },
                      {
                        name: "warn",
                      },
                      {
                        name: "error",
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
              ],
            },
            {
              name: "rm",
              description: "Remove a site",
              args: {
                name: "site-name",
                description: "ID of your site",
                suggestCurrentToken: true,
              },
              options: [
                {
                  name: "--quiet",
                  description: "Print less output",
                },
                {
                  name: "-q",
                  description: "Print less output",
                },
                {
                  name: "--log",
                  description:
                    'Log level, "error", "warning", "verbose", "info" (default)',
                  args: {
                    default: "info",
                    suggestions: [
                      {
                        name: "verbose",
                      },
                      {
                        name: "info",
                      },
                      {
                        name: "warn",
                      },
                      {
                        name: "error",
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
              ],
            },
            {
              name: "create",
              description: "Create or update a site",
              options: [
                {
                  name: "--quiet",
                  description: "Print less output",
                },
                {
                  name: "-q",
                  description: "Print less output",
                },
                {
                  name: "--log",
                  description:
                    'Log level, "error", "warning", "verbose", "info" (default)',
                  args: {
                    default: "info",
                    suggestions: [
                      {
                        name: "verbose",
                      },
                      {
                        name: "info",
                      },
                      {
                        name: "warn",
                      },
                      {
                        name: "error",
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
      options: [
        {
          name: "--quiet",
          description: "Print less output",
        },
        {
          name: "-q",
          description: "Print less output",
        },
        {
          name: "--log",
          description:
            'Log level, "error", "warning", "verbose", "info" (default)',
          args: {
            default: "info",
            suggestions: [
              {
                name: "verbose",
              },
              {
                name: "info",
              },
              {
                name: "warn",
              },
              {
                name: "error",
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
      ],
    },
    {
      name: "bundle",
      priority: 100,
      description: "Bundle a Remotion project",
      args: {
        name: "entry",
        template: ["filepaths"],
      },
      options: [
        {
          name: "--quiet",
          description: "Print less output",
        },
        {
          name: "-q",
          description: "Print less output",
        },
        {
          name: "--log",
          description:
            'Log level, "error", "warning", "verbose", "info" (default)',
          args: {
            default: "info",
            suggestions: [
              {
                name: "verbose",
              },
              {
                name: "info",
              },
              {
                name: "warn",
              },
              {
                name: "error",
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
          name: "--public-dir",
          description: "Location of the public/ directory",
          args: {
            template: "folders",
          },
        },
        {
          name: "--out-dir",
          description: "Define the location of the resulting bundle",
          args: {
            template: "folders",
          },
        },
      ],
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
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--disable-headless",
          description: "Run Chrome in normal mode rather than headless",
        },
        {
          name: "--gl",
          description: "Which OpenGL renderer to use",
          args: {
            suggestions: ["angle", "egl", "swiftshader", "swangle", "vulkan"],
          },
        },
        {
          name: "--user-agent",
          description: "User agent to use for Chrome during rendering",
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
          name: "--timeout",
          description:
            "The time in milisecond that a delayRender() may take before it times out",
        },
        {
          name: "--quality",
          description: "Quality for rendered frames, JPEG only, 0-100",
          args: {
            default: "80",
            suggestions: [
              {
                name: "0",
              },
              {
                name: "10",
              },
              {
                name: "20",
              },
              {
                name: "30",
              },
              {
                name: "40",
              },
              {
                name: "50",
              },
              {
                name: "60",
              },
              {
                name: "70",
              },
              {
                name: "80",
              },
              {
                name: "90",
              },
              {
                name: "100",
              },
            ],
          },
        },
        {
          name: "--scale",
          description: "Upscale or downscale or the dimensions of the video",
          args: {
            default: "1",
            suggestions: [
              {
                name: "0.25",
              },
              {
                name: "0.5",
              },
              {
                name: "1",
              },
              {
                name: "1.5",
              },
              {
                name: "2",
              },
              {
                name: "4",
              },
            ],
          },
        },
        {
          name: "--codec",
          description: "Video or audio codec",
          args: {
            default: "h264",
            suggestions: [
              {
                name: "h264",
              },
              {
                name: "h265",
              },
              {
                name: "gif",
              },
              {
                name: "vp8",
              },
              {
                name: "vp9",
              },
              {
                name: "mp3",
              },
              {
                name: "aac",
              },
              {
                name: "wav",
              },
              {
                name: "prores",
              },
              {
                name: "h264-mkv",
              },
            ],
          },
        },
        {
          name: "--audio-codec",
          description: "Codec to be used for the audio",
          args: {
            suggestions: [
              {
                name: "aac",
              },
              {
                name: "mp3",
              },
              {
                name: "opus",
              },
              {
                name: "pcm-16",
              },
            ],
          },
        },
        {
          name: "--every-nth-frame",
          description: "Render only every nth frame (only for GIFs)",
          args: {
            default: "1",
            suggestions: [
              {
                name: "2",
              },
              {
                name: "3",
              },
              {
                name: "4",
              },
              {
                name: "5",
              },
            ],
          },
        },
        {
          name: "--number-of-gif-loops",
          description: "How many times a GIF should loop. 0 = No loop",
          args: {
            default: "1",
            suggestions: [
              {
                name: "0",
              },
              {
                name: "1",
              },
              {
                name: "2",
              },
              {
                name: "3",
              },
            ],
          },
        },
        {
          name: "--audio-bitrate",
          description: "Customize the output audio bitrate",
        },
        {
          name: "--video-bitrate",
          description:
            "Customize the output video bitrate. Mutually exclusive with --crf",
          exclusiveOn: ["--crf"],
        },
        {
          name: "--crf",
          description: "FFMPEG CRF value, controls quality, see docs for info",
          exclusiveOn: ["--video-bitrate"],
        },
        {
          name: "--frames",
          description: "Render a portion or a still of a video, 0-9, 50",
          args: {
            name: "frames",
          },
        },
        {
          name: "--prores-profile",
          description: "ProRes profile, need --codec=prores to be set",
          args: {
            suggestions: [
              "4444-xq",
              "4444",
              "hq",
              "standard",
              "light",
              "proxy",
            ],
          },
        },
        {
          name: "--x264-preset",
          description:
            "Presets balance encoding speed and compression quality, with slower presets achieving better compression. Needs --codec=h264 to be set",
          args: {
            suggestions: [
              "ultrafast",
              "superfast",
              "veryfast",
              "faster",
              "fast",
              "medium",
              "slow",
              "slower",
              "veryslow",
              "placebo",
            ],
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
              {
                name: "yuv420p",
              },
              {
                name: "yuv422p",
              },
              {
                name: "yuv444p",
              },
              {
                name: "yuv420p10le",
              },
              {
                name: "yuv422p10le",
              },
              {
                name: "yuv444p10le",
              },
              {
                name: "yuva420p",
              },
            ],
          },
        },
        {
          name: "--muted",
          description: "Outputs no audio",
        },
        {
          name: "--height",
          description: "Override the composition height",
          args: {
            name: "height",
          },
        },
        {
          name: "--width",
          description: "Override the composition width",
          args: {
            name: "height",
          },
        },
        {
          name: "--sequence",
          description: "Output as an image sequence",
        },
        {
          name: "--concurrency",
          description: "How many frames to render in parallel",
        },
        {
          name: "--enforce-audio-track",
          description: "Include an audio track even if it's silent",
        },
        {
          name: "--repro",
          description:
            "Collect information that you can submit to Remotion if asked for a reproduction",
        },
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
          name: "--enable-extensions",
          description: "Enable Chrome browser extensions while rendering",
        },
        {
          name: "--ffmpeg-executable",
          description: "Custom path for FFMPEG executable",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--ffprobe-executable",
          description: "Custom path for FFProbe executable",
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
          name: "--public-dir",
          description: "Location of the public/ directory",
          args: {
            template: "folders",
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
                insertValue: "'{cursor}'",
              },
            ],
          },
        },
        {
          name: "--quiet",
          description: "Print less output",
        },
        {
          name: "-q",
          description: "Print less output",
        },
        {
          name: "--log",
          description:
            'Log level, "error", "warning", "verbose", "info" (default)',
          args: {
            default: "info",
            suggestions: [
              {
                name: "verbose",
              },
              {
                name: "info",
              },
              {
                name: "warn",
              },
              {
                name: "error",
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
          suggestions: ["out.png"],
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--frame",
          description: "Which frame to render (default 0)",
          args: {
            name: "frame",
            default: "0",
          },
        },
        {
          name: "--height",
          description: "Override the composition height",
          args: {
            name: "height",
          },
        },
        {
          name: "--width",
          description: "Override the composition width",
          args: {
            name: "height",
          },
        },
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
          name: "--enable-extensions",
          description: "Enable Chrome browser extensions while rendering",
        },
        {
          name: "--ffmpeg-executable",
          description: "Custom path for FFMPEG executable",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--ffprobe-executable",
          description: "Custom path for FFProbe executable",
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
          name: "--public-dir",
          description: "Location of the public/ directory",
          args: {
            template: "folders",
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
                insertValue: "'{cursor}'",
              },
            ],
          },
        },
        {
          name: "--disable-headless",
          description: "Run Chrome in normal mode rather than headless",
        },
        {
          name: "--gl",
          description: "Which OpenGL renderer to use",
          args: {
            suggestions: ["angle", "egl", "swiftshader", "swangle", "vulkan"],
          },
        },
        {
          name: "--user-agent",
          description: "User agent to use for Chrome during rendering",
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
          name: "--quiet",
          description: "Print less output",
        },
        {
          name: "-q",
          description: "Print less output",
        },
        {
          name: "--log",
          description:
            'Log level, "error", "warning", "verbose", "info" (default)',
          args: {
            default: "info",
            suggestions: [
              {
                name: "verbose",
              },
              {
                name: "info",
              },
              {
                name: "warn",
              },
              {
                name: "error",
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
      ],
    },
    {
      name: ["preview", "studio"],
      priority: 50,
      description: "Start the Remotion Studio",
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
        {
          name: "--disable-keyboard-shortcuts",
          description: "Disable all keyboard shortcuts",
        },
        {
          name: "--webpack-poll",
          description: "Enable webpack polling instead of file system watchers",
          args: {
            name: "polling-interval",
            description: "Polling interval in milliseconds",
          },
        },
        {
          name: "--number-of-shared-audio-tags",
          description:
            "Set the number of shared audio tags to prevent autoplay issues",
          args: {
            name: "numberOfSharedAudioTags",
          },
        },
        {
          name: "--no-open",
          description:
            "Prevent the browser from opening automatically when the server starts",
        },
      ],
    },
    {
      name: "upgrade",
      description:
        "Upgrade all Remotion-related dependencies to the newest version",
      options: [
        {
          name: "--package-manager",
          description: "Force a specific package manager to be used",
          args: {
            name: "package-manager",
            suggestions: [
              {
                name: "npm",
              },
              {
                name: "yarn",
              },
              {
                name: "pnpm",
              },
            ],
          },
        },
        {
          name: "--version",
          description: "Upgrade to a specific version",
          args: {
            name: "version",
          },
        },
      ],
    },
    {
      name: "benchmark",
      description: "Try different render configurations and compare them",
      options: [
        {
          name: "--disable-headless",
          description: "Run Chrome in normal mode rather than headless",
        },
        {
          name: "--gl",
          description: "Which OpenGL renderer to use",
          args: {
            suggestions: ["angle", "egl", "swiftshader", "swangle", "vulkan"],
          },
        },
        {
          name: "--user-agent",
          description: "User agent to use for Chrome during rendering",
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
          name: "--timeout",
          description:
            "The time in milisecond that a delayRender() may take before it times out",
        },
        {
          name: "--quality",
          description: "Quality for rendered frames, JPEG only, 0-100",
          args: {
            default: "80",
            suggestions: [
              {
                name: "0",
              },
              {
                name: "10",
              },
              {
                name: "20",
              },
              {
                name: "30",
              },
              {
                name: "40",
              },
              {
                name: "50",
              },
              {
                name: "60",
              },
              {
                name: "70",
              },
              {
                name: "80",
              },
              {
                name: "90",
              },
              {
                name: "100",
              },
            ],
          },
        },
        {
          name: "--scale",
          description: "Upscale or downscale or the dimensions of the video",
          args: {
            default: "1",
            suggestions: [
              {
                name: "0.25",
              },
              {
                name: "0.5",
              },
              {
                name: "1",
              },
              {
                name: "1.5",
              },
              {
                name: "2",
              },
              {
                name: "4",
              },
            ],
          },
        },
        {
          name: "--codec",
          description: "Video or audio codec",
          args: {
            default: "h264",
            suggestions: [
              {
                name: "h264",
              },
              {
                name: "h265",
              },
              {
                name: "gif",
              },
              {
                name: "vp8",
              },
              {
                name: "vp9",
              },
              {
                name: "mp3",
              },
              {
                name: "aac",
              },
              {
                name: "wav",
              },
              {
                name: "prores",
              },
              {
                name: "h264-mkv",
              },
            ],
          },
        },
        {
          name: "--audio-codec",
          description: "Codec to be used for the audio",
          args: {
            suggestions: [
              {
                name: "aac",
              },
              {
                name: "mp3",
              },
              {
                name: "opus",
              },
              {
                name: "pcm-16",
              },
            ],
          },
        },
        {
          name: "--every-nth-frame",
          description: "Render only every nth frame (only for GIFs)",
          args: {
            default: "1",
            suggestions: [
              {
                name: "2",
              },
              {
                name: "3",
              },
              {
                name: "4",
              },
              {
                name: "5",
              },
            ],
          },
        },
        {
          name: "--number-of-gif-loops",
          description: "How many times a GIF should loop. 0 = No loop",
          args: {
            default: "1",
            suggestions: [
              {
                name: "0",
              },
              {
                name: "1",
              },
              {
                name: "2",
              },
              {
                name: "3",
              },
            ],
          },
        },
        {
          name: "--audio-bitrate",
          description: "Customize the output audio bitrate",
        },
        {
          name: "--video-bitrate",
          description:
            "Customize the output video bitrate. Mutually exclusive with --crf",
          exclusiveOn: ["--crf"],
        },
        {
          name: "--crf",
          description: "FFMPEG CRF value, controls quality, see docs for info",
          exclusiveOn: ["--video-bitrate"],
        },
        {
          name: "--frames",
          description: "Render a portion or a still of a video, 0-9, 50",
          args: {
            name: "frames",
          },
        },
        {
          name: "--prores-profile",
          description: "ProRes profile, need --codec=prores to be set",
          args: {
            suggestions: [
              "4444-xq",
              "4444",
              "hq",
              "standard",
              "light",
              "proxy",
            ],
          },
        },
        {
          name: "--x264-preset",
          description:
            "Presets balance encoding speed and compression quality, with slower presets achieving better compression. Needs --codec=h264 to be set",
          args: {
            suggestions: [
              "ultrafast",
              "superfast",
              "veryfast",
              "faster",
              "fast",
              "medium",
              "slow",
              "slower",
              "veryslow",
              "placebo",
            ],
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
              {
                name: "yuv420p",
              },
              {
                name: "yuv422p",
              },
              {
                name: "yuv444p",
              },
              {
                name: "yuv420p10le",
              },
              {
                name: "yuv422p10le",
              },
              {
                name: "yuv444p10le",
              },
              {
                name: "yuva420p",
              },
            ],
          },
        },
        {
          name: "--muted",
          description: "Outputs no audio",
        },
        {
          name: "--height",
          description: "Override the composition height",
          args: {
            name: "height",
          },
        },
        {
          name: "--width",
          description: "Override the composition width",
          args: {
            name: "height",
          },
        },
        {
          name: "--sequence",
          description: "Output as an image sequence",
        },
        {
          name: "--enforce-audio-track",
          description: "Include an audio track even if it's silent",
        },
        {
          name: "--repro",
          description:
            "Collect information that you can submit to Remotion if asked for a reproduction",
        },
        {
          name: "--env-file",
          description: "Specify a location for a dotenv file",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--browser-executable",
          description: "Custom path for browser executable",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--enable-extensions",
          description: "Enable Chrome browser extensions while rendering",
        },
        {
          name: "--ffmpeg-executable",
          description: "Custom path for FFMPEG executable",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--ffprobe-executable",
          description: "Custom path for FFProbe executable",
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
          name: "--public-dir",
          description: "Location of the public/ directory",
          args: {
            template: "folders",
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
                insertValue: "'{cursor}'",
              },
            ],
          },
        },
        {
          name: "--quiet",
          description: "Print less output",
        },
        {
          name: "-q",
          description: "Print less output",
        },
        {
          name: "--log",
          description:
            'Log level, "error", "warning", "verbose", "info" (default)',
          args: {
            default: "info",
            suggestions: [
              {
                name: "verbose",
              },
              {
                name: "info",
              },
              {
                name: "warn",
              },
              {
                name: "error",
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
          name: "--concurrencies",
          description:
            "Comma-separated list of concurrency values to include in benchmark",
        },
      ],
    },
    {
      name: "install",
      description: "Ensure Remotion dependencies",
      args: {
        name: "dependency",
        suggestions: [
          {
            name: "ffmpeg",
          },
          {
            name: "ffprobe",
          },
        ],
      },
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
