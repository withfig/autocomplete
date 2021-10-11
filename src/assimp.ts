const helpOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Optional. Detailed help on a command",
  },
];

const commonOptions: Fig.Option[] = [
  {
    name: "-cfast",
    description:
      "Optional. Fast post processing preset, runs just a few important steps",
  },
  {
    name: "-cdefault",
    description:
      "Optional. Default post processing: runs all recommended steps",
  },
  {
    name: "-cfull",
    description: "Optional. Fires almost all post processing steps",
  },
];

const importExtGenerator: Fig.Generator = {
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

const exportExtGenerator: Fig.Generator = {
  script: "assimp listexport",
  postProcess: function (out) {
    return out.split("\n").map((ext) => {
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
      name: "listext",
      description: "List all known file extensions available for import",
    },
    {
      name: "listexport",
      description: "List all supported export formats",
    },
    {
      name: "knowext",
      description: "List all known file extensions available for import",
      args: {
        name: "extension",
        description:
          "Required. Check whether a particular file extension is known by us",
        generators: importExtGenerator,
      },
    },
    {
      name: "exportinfo",
      description: "Show basic information on a specific export format",
      args: {
        name: "extension",
        description: "Required. Specific file extension",
        generators: exportExtGenerator,
      },
    },
    {
      name: "info",
      description:
        "Load a model file and print basic statistics. Full postprocessing is applied unless the `-r` switch is specified",
      args: {
        name: "file",
        description: "Required. Print basic structure of a 3D model",
        template: "filepaths",
        isVariadic: true,
      },
      options: [
        {
          name: ["-r", "--raw"],
          description: "Optional. No postprocessing, do a raw import",
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Optional. Print verbose info such as node transform data",
        },
        {
          name: ["-s", "--silent"],
          description: "Optional. Print only minimal info",
        },
        ...helpOptions,
      ],
    },
    {
      name: "export",
      description: "Export a file to one of the supported output formats",
      args: [
        {
          name: "model",
          description: "Relative or absolute path to the input model",
          template: "filepaths",
        },
        {
          name: "out",
          description:
            "Optional. Relative or absolute path to write the output export to",
          template: "folders",
        },
      ],
      options: [
        {
          name: ["-f", "--format"],
          description: "Optional. No postprocessing, do a raw import",
          args: {
            name: "format",
            generators: exportExtGenerator,
          },
        },
        ...helpOptions,
      ],
    },
    {
      name: "extract",
      description: "Extract embedded texture images",
      args: [
        {
          name: "model",
          description: "Relative or absolute path to the input model",
          template: "filepaths",
        },
        {
          name: "out",
          description:
            "Optional. Relative or absolute path to write the output images to",
          template: "folders",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-t", "--texture"],
          description: "Zero-based index of the texture to be extracted",
          args: {
            name: "index",
          },
        },
        {
          name: ["-ba", "–-bmp-with-alpha"],
          description:
            "Optional. Specifies whether output BMPs contain an alpha channel or not",
        },
        {
          name: ["-f", "--format"],
          description:
            "Optional. Specifies the output file format. Supported formats are BMP and TGA. The default value is BMP (if a full output filename is specified, the output file format is taken from its extension)",
          args: {
            name: "format",
            suggestions: ["bmp", "tga"],
          },
        },
        {
          name: ["-s", "–-nosuffix"],
          description:
            "Optional. Prevents the tool from adding the _img<n> suffix to all filenames. This option must be specified together with -t to ensure that just one image is written",
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
          name: "model",
          description: "Required. Relative or absolute path to the input model",
          template: "filepaths",
        },
        {
          name: "out",
          description:
            "Optional. Relative or absolute path to write the output dump to. If it is omitted, the dump is written to '<model>-dump.txt'",
          template: "folders",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-b", "--binary"],
          description:
            "Optional. If true, the dump is written in binary format",
        },
        {
          name: ["-s", "--short"],
          description:
            "Optional. If true, the dump is shortened to include only min/max values for all vertex components and animation channels",
        },
        {
          name: ["-z", "--compressed"],
          description: "Optional. If true, Compressed",
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
          description: "Required. Mini dump now",
          template: "filepaths",
        },
        {
          name: "expected",
          description: "Required. Archived dump from some point in the past",
          template: "filepaths",
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
