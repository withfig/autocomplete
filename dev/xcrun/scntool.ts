export const completionSpec: Fig.Spec = {
  name: "scntool",
  options: [
    {
      name: "--convert",
      description: "File to convert.",
      args: {
        name: "file",
        template: "filepaths",
      },
      priority: 80,
    },
    {
      name: "--format",
      description: "Format to convert to.",
      args: {
        suggestions: ["scn", "dae", "c3d"],
        name: "format",
      },
      priority: 80,
    },
    {
      name: "--output",
      description: "Path to the output file.",
      args: {
        name: "file",
        template: "filepaths",
      },
      priority: 80,
    },
    {
      name: "--force-y-up",
      description: "Convert objects to use y axis up.",
    },
    {
      name: "--force-interleaved",
      description:
        "Interleave the vertex data for multiple semantics in the same array to achieve better rendering performance.",
    },
    {
      name: "--prefer-compressed-textures",
      description:
        "Use .ktx, .astc and .pvrtc files for textures if available in the asset catalog.",
    },
    {
      name: "--verbose",
      description: "Get pretty error message.",
    },
  ],
};
