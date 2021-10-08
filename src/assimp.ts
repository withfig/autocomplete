const helpOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Detailed help on a command",
  },
];

const commonOptions: Fig.Option[] = [
  {
    name: "-cfast",
    description: "Fast post processing preset, runs just a few important steps",
  },
  {
    name: "-cdefault",
    description: "Default post processing: runs all recommended steps",
  },
  {
    name: "-cfull",
    description: "Fires almost all post processing steps",
  },
];

const suggistionGenerator: Fig.Generator = {
  script: "assimp listext",
  postProcess: function (out) {
    return out.split(";").map((ext) => {
      return {
        name: ext,
        description: "Extension",
      };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "assimp",
  description: "Open Asset Import Library",
  subcommands: [
    {
      name: "info",
      description: "Quick file stats",
      args: {
        name: "file",
        description: "Print basic structure of a 3D model",
        isVariadic: true,
      },
      options: [
        {
          name: ["-r", "--raw"],
          description: "No postprocessing, do a raw import",
        },
        {
          name: ["-v", "--verbose"],
          description: "Print verbose info such as node transform data",
        },
        {
          name: ["-s", "--silent"],
          description: "Print only minimal info",
        },
        ...helpOptions,
      ],
    },
    {
      name: "listext",
      description: "List all known file extensions available for import",
    },
    {
      name: "knowext",
      description: "List all known file extensions available for import",
      args: {
        name: "extension",
        description: "Check whether a particular file extension is known by us",
      },
    },
    {
      name: "export",
      description: "Export a file to one of the supported output formats",
      args: [
        {
          name: "modal",
          description: "Relative or absolute path to the input model",
        },
        {
          name: "out",
          description:
            "Relative or absolute path to write the output export to",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-f", "--format"],
          description: "No postprocessing, do a raw import",
          args: {
            name: "format",
            generators: suggistionGenerator,
          },
        },
        ...helpOptions,
      ],
    },
    {
      name: "listexport",
      description: "List all supported export formats",
    },
    {
      name: "exportinfo",
      description: "Show basic information on a specific export format",
      args: {
        name: "extension",
        description: "Specific file extension",
      },
    },
    {
      name: "extract",
      description: "Extract embedded texture images",
      args: [
        {
          name: "modal",
          description: "Relative or absolute path to the input model",
        },
        {
          name: "out",
          description:
            "Relative or absolute path to write the output images to",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-ba", "–-bmp-with-alpha"],
          description: "Writes BMP's with alpha channel",
        },
        {
          name: ["-t", "--texture"],
          description: "Zero-based index of the texture to be extracted",
          args: {
            name: "index",
            generators: suggistionGenerator,
          },
        },
        {
          name: ["-f", "--format"],
          description: "No postprocessing, do a raw import",
          args: {
            name: "format",
            generators: suggistionGenerator,
          },
        },
        ...commonOptions,
        ...helpOptions,
      ],
    },
    {
      name: "dump",
      description: "Convert models to a binary or textual dump (ASSBIN/ASSXML)",
      args: [
        {
          name: "modal",
          description: "Relative or absolute path to the input model",
        },
        {
          name: "out",
          description:
            "Relative or absolute path to write the output dump to. If it is omitted, the dump is written to '<model>-dump.txt'",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-b", "--binary"],
          description: "Binary output",
        },
        {
          name: ["-s", "--short"],
          description: "Shortened",
        },
        {
          name: ["-z", "--compressed"],
          description: "Compressed",
        },
        ...commonOptions,
        ...helpOptions,
      ],
    },
    {
      name: "cmpdump",
      description: "Compare dumps created using 'assimp dump <file> -s ...'",
      args: [
        {
          name: "actual",
          description: "Mini dump now",
        },
        {
          name: "expected",
          description: "Archived dump from some point in the past",
        },
      ],
      options: [...helpOptions],
    },
    {
      name: "version",
      description: "Display Assimp version",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Display some basic help",
    },
  ],
};

export default completionSpec;
