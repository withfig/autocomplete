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
