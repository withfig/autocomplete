const propertySuggestions: (string | Fig.Suggestion)[] = [
  "all",
  "allxml",
  "dpiHeight",
  "dpiWidth",
  "pixelHeight",
  "pixelWidth",
  "typeIdentifier",
  "format",
  "formatOptions",
  "space",
  "samplesPerPixel",
  "bitsPerSample",
  "creation",
  "make",
  "model",
  "software",
  "description",
  "copyright",
  "artist",
  "profile",
  "hasAlpha",
  "size",
  "cmm",
  "version",
  "class",
  "pcs",
  "platform",
  "quality",
  "deviceManufacturer",
  "deviceModel",
  "deviceAttributes0",
  "deviceAttributes1",
  "renderingIntent",
  "creator",
  "md5",
];

const completionSpec: Fig.Spec = {
  name: "sips",
  description: "Scriptable image processing system",
  args: {
    name: "file",
    template: "filepaths",
  },
  options: [
    {
      name: ["-g", "--getProperty"],
      description: "Output the property value for key to stdout",
      args: {
        name: "key",
        suggestions: propertySuggestions,
      },
    },
    {
      name: ["-s", "--setProperty"],
      description: "Set a property value for key to value",
      args: [
        {
          name: "key",
          suggestions: propertySuggestions,
        },
        {
          name: "value",
        },
      ],
    },
    {
      name: ["-d", "--deleteProperty"],
      description: "Remove a property value for key",
      args: {
        name: "key",
        suggestions: propertySuggestions,
      },
    },
    {
      name: ["-X", "--extractTag"],
      description: "Extract a profile tag element to tagFile",
      args: [
        {
          name: "tag",
        },
        {
          name: "tagFile",
        },
      ],
    },
    {
      name: "--verify",
      description: "Verify any profile problems and log output to stdout",
    },
    {
      name: ["-x", "--extractProfile"],
      description:
        "Get the embedded profile from image and write it to profile",
      args: {
        name: "profile",
      },
    },
    {
      name: "--deleteTag",
      args: { name: "tag" },
      description: "Remove the tag element from a profile",
    },
    {
      name: "--copyTag",
      description: "Copy the srcTag element of a profile to dstTag",
      args: [
        {
          name: "srcTag",
        },
        {
          name: "dstTag",
        },
      ],
    },
    {
      name: "--loadTag",
      description:
        "Set the tag element of a profile to the contents of tagFile",
      args: [
        {
          name: "tag",
        },
        {
          name: "tagFile",
          template: "filepaths",
        },
      ],
    },
    {
      name: "--repair",
      description: "Repair any profile problems and log output to stdout",
    },
    {
      name: ["-e", "--embedProfile"],
      description: "Embed profile in image",
      args: {
        name: "profile",
      },
    },
    {
      name: ["-E", "--embedProfileIfNone"],
      description:
        "Embed profile in image only if image doesn't have a profile",
      args: {
        name: "profile",
      },
    },
    {
      name: ["-m", "--matchTo"],
      description: "Color match image to profile",
      args: {
        name: "profile",
      },
    },
    {
      name: ["-M", "--matchToWithIntent"],
      description:
        "Color match image to profile with rendering intent perceptual | relative | saturation | absolute",
      args: [
        {
          name: "profile",
        },
        {
          name: "intent",
          suggestions: ["perceptual", "relative", "saturation", "absolute"],
        },
      ],
    },
    {
      name: "--deleteColorManagementProperties",
      description:
        "Delete color management properties in TIFF, PNG, and EXIF dictionaries",
    },
    {
      name: ["-r", "--rotate"],
      args: {
        name: "degreesCW",
      },
    },
    {
      name: ["-f", "--flip"],
      args: {
        name: "axis",
        suggestions: ["horizontal", "vertical"],
      },
    },
    {
      name: ["-c", "--cropToHeightWidth"],
      description: "Crop image to fit specified size",
      args: [
        {
          name: "pixelsH",
        },
        {
          name: "pixelsW",
        },
      ],
    },
    {
      name: ["-p", "--padToHeightWidth"],
      description: "Pad image with pixels to fit specified size",
      args: [
        {
          name: "pixelsH",
        },
        {
          name: "pixelsW",
        },
      ],
    },
    {
      name: "-padColor",
      description:
        "Use this color when padding.  White=FFFFFF, Red=FF0000, Default=Black=000000",
      args: {
        name: "hexcolor",
      },
    },
    {
      name: ["-z", "--resampleHeightWidth"],
      description:
        "Resample image at specified size. Image apsect ratio may be altered",
      args: [
        {
          name: "pixelsH",
        },
        {
          name: "pixelsW",
        },
      ],
    },
    {
      name: "--resampleWidth",
      description: "Resample image to specified width",
      args: {
        name: "pixelsW",
      },
    },
    {
      name: "--resampleHeight",
      description: "Resample image to specified height",
      args: {
        name: "pixelsH",
      },
    },
    {
      name: ["-Z", "--resampleHeightWidthMax"],
      description:
        "Resample image so height and width aren't greater than specified size",
      args: {
        name: "pixelsWH",
      },
    },
    {
      name: ["-i", "--addIcon"],
      description: "Add a Finder icon to image file",
      args: {
        name: "icon",
        template: "filepaths",
      },
    },
    {
      name: "--debug",
      description: "Enable debugging output",
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
    {
      name: ["-H", "--helpProperties"],
      description: "Show help for properties",
    },
    {
      name: "--man",
      description: "Generate man pages",
    },
    {
      name: ["-v", "--version"],
      description: "Show the version",
    },
    {
      name: "--formats",
      description: "Show the read/write formats",
    },
  ],
};

export default completionSpec;
