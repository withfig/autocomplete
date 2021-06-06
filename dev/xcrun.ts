export const completionSpec: Fig.Spec = {
  name: "xcrun",
  description:
    "Find and execute the named command line tool from the active xCode developer directory.",
  subcommands: [
    {
      name: "scntool",
      description: "SceneKit CLI utilities.",
      loadSpec: "xcrun/scntool",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help message.",
    },
    {
      name: "--version",
      description: "Show the xcrun version.",
    },
    {
      name: ["-v", "--verbose"],
      description: "Show verbose logging output.",
    },
    {
      name: "--sdk",
      description: "Find the tool for the given SDK name.",
      args: { name: "sdk name" },
    },
    {
      name: "--toolchain",
      description: "Find the tool for the given toolchain.",
      args: { name: "name" },
    },
    {
      name: ["-l", "--log"],
      description: "Show command path to be executed (and --run).",
    },
    {
      name: ["-f", "--find"],
      description: "Find and print the tool path.",
    },
    {
      name: "--run",
      description: "(Default) find and execute the tool.",
    },
    {
      name: ["-n", "--no-cache"],
      description: "Do not use the lookup cache.",
    },
    {
      name: ["-k", "--kill-cache"],
      description: "Invalidate all existing cache entries.",
    },
    {
      name: "--show-sdk-path",
      description: "Show selected SDK install path.",
    },
    {
      name: "--show-sdk-version",
      description: "Show selected SDK version.",
    },
    {
      name: "--show-sdk-build-version",
      description: "Show selected SDK build version.",
    },
    {
      name: "--show-sdk-platform-path",
      description: "Show selected SDK platform path.",
    },
    {
      name: "--show-sdk-platform-version",
      description: "Show selected SDK platform version.",
    },
  ],
};
