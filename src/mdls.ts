const completionSpec: Fig.Spec = {
  name: "mdls",
  description: "Lists the metadata attributes for the specified file",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  args: {
    name: "file",
    template: "filepaths",
    isVariadic: true,
  },
  options: [
    {
      name: ["--name", "-name"],
      description:
        "Print only the matching metadata attribute value.  Can be used multiple times",
      isRepeatable: true,
      exclusiveOn: ["--plist", "-plist"],
      args: {
        name: "attributeName",
        description: "Metadata attribute name",
        suggestions: [
          "_kMDItemDisplayNameWithExtensions",
          "kMDItemContentCreationDate",
          "kMDItemContentCreationDate_Ranking",
          "kMDItemContentModificationDate",
          "kMDItemContentModificationDate_Ranking",
          "kMDItemContentType",
          "kMDItemContentTypeTree",
          "kMDItemDateAdded",
          "kMDItemDateAdded_Ranking",
          "kMDItemDisplayName",
          "kMDItemDocumentIdentifier",
          "kMDItemFSContentChangeDate",
          "kMDItemFSCreationDate",
          "kMDItemFSCreatorCode",
          "kMDItemFSFinderFlags",
          "kMDItemFSHasCustomIcon",
          "kMDItemFSInvisible",
          "kMDItemFSIsExtensionHidden",
          "kMDItemFSIsStationery",
          "kMDItemFSLabel",
          "kMDItemFSName",
          "kMDItemFSNodeCount",
          "kMDItemFSOwnerGroupID",
          "kMDItemFSOwnerUserID",
          "kMDItemFSSize",
          "kMDItemFSTypeCode",
          "kMDItemInterestingDate_Ranking",
          "kMDItemKind",
          "kMDItemLogicalSize",
          "kMDItemPhysicalSize",
        ],
      },
    },
    {
      name: ["--raw", "-raw"],
      description:
        "Print raw attribute data in the order that was requested. Fields will be separated with a ASCII NUL character, suitable for piping to xargs(1) -0",
      exclusiveOn: ["--plist", "-plist"],
    },
    {
      name: ["--nullMarker", "-nullMarker"],
      description:
        "Sets a marker string to be used when a requested attribute is null. Only used in -raw mode.  Default is '(null)'",
      insertValue: `--nullMarker "{cursor}"`,
      dependsOn: ["--raw", "-raw"],
      exclusiveOn: ["--plist", "-plist"],
    },
    // TODO(platform): macos only option
    {
      name: ["--plist", "-plist"],
      description:
        "Output attributes in XML format to file. Use - to write to stdout option. Incompatible with options -raw, -nullMarker, and -name",
      exclusiveOn: [
        "--raw",
        "-raw",
        "--nullMarker",
        "-nullMarker",
        "--name",
        "-name",
      ],
      args: [
        {
          name: "stdout or file",
          description: "XML output location",
          template: "filepaths",
          suggestions: [
            {
              name: "-",
              description: "Writes to stdout",
              priority: 77,
            },
          ],
        },
        {
          name: "file",
          description: "File to read from",
          template: "filepaths",
        },
      ],
    },
  ],
};
export default completionSpec;
