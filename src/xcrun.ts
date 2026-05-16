const completionSpec: Fig.Spec = {
  name: "xcrun",
  description:
    "Find and execute the named command line tool from the active xCode developer directory",
  subcommands: [
    {
      name: "scntool",
      description: "SceneKit CLI utilities",
      options: [
        {
          name: "--convert",
          description: "File to convert",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--format",
          description: "Format to convert to",
          args: {
            suggestions: ["scn", "dae", "c3d"],
            name: "format",
          },
        },
        {
          name: "--output",
          description: "Path to the output file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--force-y-up",
          description: "Convert objects to use y axis up",
        },
        {
          name: "--force-interleaved",
          description:
            "Interleave the vertex data for multiple semantics in the same array to achieve better rendering performance",
        },
        {
          name: "--prefer-compressed-textures",
          description:
            "Use .ktx, .astc and .pvrtc files for textures if available in the asset catalog",
        },
        {
          name: "--verbose",
          description: "Get pretty error message",
        },
      ],
    },
    {
      name: "xcodebuild",
      loadSpec: "xcodebuild",
    },
    {
      name: "simctl",
      loadSpec: "simctl",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help message",
    },
    {
      name: "--version",
      description: "Show the xcrun version",
    },
    {
      name: ["-v", "--verbose"],
      description: "Show verbose logging output",
    },
    {
      name: "--sdk",
      description: "Find the tool for the given SDK name",
      args: { name: "sdk name" },
    },
    {
      name: "--toolchain",
      description: "Find the tool for the given toolchain",
      args: { name: "name" },
    },
    {
      name: ["-l", "--log"],
      description: "Show command path to be executed (and --run)",
    },
    {
      name: ["-f", "--find"],
      description: "Find and print the tool path",
    },
    {
      name: "--run",
      description: "(Default) find and execute the tool",
    },
    {
      name: ["-n", "--no-cache"],
      description: "Do not use the lookup cache",
    },
    {
      name: ["-k", "--kill-cache"],
      description: "Invalidate all existing cache entries",
      isDangerous: true,
    },
    {
      name: "--show-sdk-path",
      description: "Show selected SDK install path",
    },
    {
      name: "--show-sdk-version",
      description: "Show selected SDK version",
    },
    {
      name: "--show-sdk-build-version",
      description: "Show selected SDK build version",
    },
    {
      name: "--show-sdk-platform-path",
      description: "Show selected SDK platform path",
    },
    {
      name: "--show-sdk-platform-version",
      description: "Show selected SDK platform version",
    },
  ],
};

export default completionSpec;
