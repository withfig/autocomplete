import { filepaths } from "@fig/autocomplete-generators";
const restoreRestoreExactOptions: Fig.Option[] = [
  {
    name: "--source",
    description: "Can be a disk image, /dev entry, or volume mountpoint",
    args: {
      name: "source",
      description: "Disk image, /dev entry, or volume mountpoint",
      template: "filepaths",
      suggestCurrentToken: true,
    },
    dependsOn: ["--target", "--file"],
  },
  {
    name: "--target",
    description: "Can be a /dev entry, or volume mountpoint",
    args: {
      name: "target",
      description: "/dev entry, or volume mountpoint",
      template: "filepaths",
      suggestCurrentToken: true,
    },
  },
  {
    name: "--file",
    description:
      "When performing a multicast restore, --file can be specified instead of --target",
    args: {
      name: "source",
      description: "Disk image, /dev entry, or volume mountpoint",
      template: "filepaths",
      suggestCurrentToken: true,
    },
    dependsOn: ["--erase"],
  },
  {
    name: "--erase",
    description:
      "Erases target and is required. --erase must always be used, as file copies are no longer supported by asr",
  },
  {
    name: "--format",
    description: "Specifies the destination filesystem format",
    args: {
      name: "HFS+ | HFSX",
      description: "Specify the destination filesystem format",
      isOptional: true,
    },
  },
  {
    name: "--noprompt",
    description: "Suppresses the prompt which usually occurs before target",
  },
  {
    name: "--timeout",
    description:
      "Specifies num seconds that a multicast client should wait when no payload data has been received over a multicast stream before exiting",
    args: {
      name: "num",
      description: "Number of seconds that a multicast client should wait",
      default: "0",
      isOptional: true,
      suggestions: ["0"],
    },
  },
  {
    name: "--puppetstrings",
    description:
      "Provide progress output that is easy for another program to parse",
  },
  {
    name: "--noverify",
    description:
      "Skips the verification steps normally taken to ensure that a volume has been properly restored",
  },
  {
    name: "--allowfragmentedcatalog",
    description:
      "Allows restores to proceed even if the source's catalog file is fragmented",
  },
  {
    name: "--SHA256",
    description:
      "Forces the restore to use the SHA-256 hash in the image during verification",
  },
  {
    name: "--sourcevolumename",
    description:
      "Tells asr which volume in the source container to invert when doing an APFS restore",
  },
  {
    name: "--sourcevolumeUUID",
    description:
      "Tells asr which volume in the source container to invert when doing an APFS restore",
  },
  {
    name: "--useReplication",
    description: "Forces asr to use replication for restoring APFS volumes",
  },
  {
    name: "--useInverter",
    description: "Forces asr to use the inverter for restoring APFS volumes",
  },
  {
    name: "--toSnapshot",
    description:
      "Specifies the snapshot on the source APFS volume to restore to the target APFS volume",
  },
  {
    name: "--fromSnapshot",
    description:
      "Names a snapshot on the source APFS volume to use in combination with --toSnapshot to specify a snapshot delta to restore to the target APFS volume",
  },
];

const bufferingOptions: Fig.Option[] = [
  {
    name: "--buffers",
    description: "One of the options that control how asr uses memory",
    args: {
      name: "num",
      description: "Specifies the num buffers should be used",
    },
  },
  {
    name: "--buffersize",
    description: "One of the options that control how asr uses memory",
    args: {
      name: "size",
      description: "Specifies the size of each buffer",
    },
  },
  {
    name: "--csumbuffers",
    description: "One of the options that control how asr uses memory",
    args: {
      name: "num",
      description:
        "Specifies that num buffers should be used for checksumming operations",
    },
  },
  {
    name: "--csumbuffersize",
    description: "One of the options that control how asr uses memory",
    args: {
      name: "size",
      description: "Specifies the size of each buffer used for checksumming",
    },
  },
];

const otherOptions: Fig.Option[] = [
  {
    name: "--verbose",
    description: "Enables verbose progress and error messages",
  },
  {
    name: "--debug",
    description: "Enables other progress and error messages",
  },
];

const completionSpec: Fig.Spec = {
  name: "asr",
  description:
    "Asr efficiently copies disk images onto volumes, either directly or via a multicast network stream",
  subcommands: [
    {
      name: "help",
      description: "Displays asr usage information",
    },
    {
      name: "version",
      description: "Displays asr version",
    },
    {
      name: "restore",
      description: "Restores a disk image or volume to another volume",
      options: restoreRestoreExactOptions,
    },
    {
      name: "restoreexact",
      description:
        "Same as restore verb, except that for an HFS Plus volume, the target partition is resized to match the size of the source partition/ volume",
      options: restoreRestoreExactOptions,
      displayName: "restore[exact]",
    },
    {
      name: "server",
      description: "Multicasts source over the network",
      options: [
        {
          name: "--source",
          description: "Source has to be a UDIF disk image",
          args: {
            name: "source",
            description: "UDIF disk image local/remote path",
            template: "filepaths",
            suggestCurrentToken: true,
          },
        },
        {
          name: "--interface",
          description: "The network interface to be used for multicasting",
          args: {
            name: "interface",
            description: "The network interface to be used for multicasting",
          },
        },
        {
          name: "--config",
          description: "Server requires a configuration file to be passed",
          args: {
            name: "configuration",
            description: "Configuration file in standard property list format",
            generators: filepaths({
              extensions: ["plist"],
            }),
          },
        },
      ],
    },
    {
      name: "imagescan",
      description:
        "Calculate checksums of the data in the provided image and store them in the image",
    },
    {
      name: "info",
      description:
        "Report the image metadata which was placed in the image by a previous use of the imagescan verb",
      options: [
        {
          name: "--plist",
          description: "Writes its output as an XML-formatted plist",
        },
      ],
    },
  ],
  options: [...bufferingOptions, ...otherOptions],
  // Only uncomment if asr takes an argument
  // args: {}
};

export default completionSpec;
