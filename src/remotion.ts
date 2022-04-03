const completionSpec: Fig.Spec = {
  name: "remotion",
  description: "Create videos programmatically in React",
  subcommands: [
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
          name: "--concurrency",
          description: "How many frames to render in parallel",
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
            suggestions: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(
              (e) => ({
                name: e.toString(),
              })
            ),
          },
        },
        {
          name: "--overwrite",
          description: "Overwrite if file exists, default true",
        },
        {
          name: "--sequence",
          description: "Output as an image sequence",
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
          name: "--browser-executable",
          description: "Custom path for browser executable",
          args: {
            template: "filepaths",
          },
        },
        {
          name: "--frames",
          description: "Render a portion or a still of a video, 0-9, 50",
          args: {
            name: "frames",
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
