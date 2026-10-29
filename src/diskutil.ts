const filesystems: string[] = [
  "APFS",
  "APFS (Case-sensitive)",
  "HFS+",
  "JHFS+",
  "FAT32",
  "exFAT",
  "Free Space",
];

const diskArg: Fig.Arg = {
  name: "disk",
  description: "MountPoint, DiskIdentifier (e.g. disk1s1) or DeviceNode",
  isVariadic: true,
};

const completionSpec: Fig.Spec = {
  name: "diskutil",
  description:
    "Utility to manage local disks, partitions, and volumes (most commands require admin)",
  subcommands: [
    {
      name: "list",
      description: "List the partitions of a disk",
      args: { ...diskArg, isOptional: true },
      options: [
        {
          name: "-plist",
          description: "Output in property list format",
        },
      ],
    },
    {
      name: ["info", "information"],
      description: "Get information on a specific disk or partition",
      args: {
        name: "disk",
        description:
          "Disk identifier, device node, UUID, or -all for all disks",
      },
      options: [
        {
          name: "-plist",
          description: "Output in property list format",
        },
      ],
    },
    {
      name: "listFilesystems",
      description: "List file systems available for formatting",
      options: [
        {
          name: "-plist",
          description: "Output in property list format",
        },
      ],
    },
    {
      name: "listClients",
      description: "List all current disk management clients",
    },
    {
      name: "activity",
      description: "Continuous log of system-wide disk arbitration",
      options: [
        {
          name: "-plist",
          description: "Output in property list format",
        },
        {
          name: "-i",
          description: "Refresh interval in seconds",
          args: { name: "interval" },
        },
      ],
    },
    {
      name: "unmount",
      description: "Unmount a single volume",
      args: {
        name: "disk",
        description: "MountPoint, DiskIdentifier or DeviceNode",
      },
      options: [
        {
          name: "force",
          description: "Force unmount even if the disk is in use",
        },
      ],
    },
    {
      name: "unmountDisk",
      description: "Unmount an entire disk (all volumes)",
      args: { name: "disk", description: "DiskIdentifier or DeviceNode" },
      options: [
        {
          name: "force",
          description: "Force unmount even if the disk is in use",
        },
      ],
    },
    {
      name: "eject",
      description: "Eject a disk",
      args: { name: "disk", description: "DiskIdentifier or DeviceNode" },
      options: [
        {
          name: "force",
          description: "Force eject even if the disk is in use",
        },
      ],
    },
    {
      name: "mount",
      description: "Mount a single volume",
      args: { name: "disk", description: "DiskIdentifier or DeviceNode" },
      options: [
        {
          name: "readOnly",
          description: "Mount the volume read-only",
        },
        {
          name: "nobrowse",
          description: "Do not show the volume in the Finder sidebar",
        },
        {
          name: "-mountPoint",
          description: "Mount at a custom path instead of /Volumes",
          requiresSeparator: true,
          args: { name: "path", template: "folders" },
        },
      ],
    },
    {
      name: "mountDisk",
      description: "Mount an entire disk (all mountable volumes)",
      args: { name: "disk", description: "DiskIdentifier or DeviceNode" },
    },
    {
      name: "enableJournal",
      description: "Enable HFS+ journaling on a mounted HFS+ volume",
      args: { name: "disk", description: "DiskIdentifier or DeviceNode" },
    },
    {
      name: "disableJournal",
      description: "Disable HFS+ journaling on a mounted HFS+ volume",
      args: { name: "disk", description: "DiskIdentifier or DeviceNode" },
    },
    {
      name: "enableOwnership",
      description: "Honor exact on-disk User/Group IDs on a mounted volume",
      args: { name: "disk", description: "DiskIdentifier or DeviceNode" },
    },
    {
      name: "disableOwnership",
      description: "Ignore on-disk User/Group IDs on a mounted volume",
      args: { name: "disk", description: "DiskIdentifier or DeviceNode" },
    },
    {
      name: ["rename", "renameVolume"],
      description: "Rename a volume",
      args: [
        { name: "disk", description: "DiskIdentifier or DeviceNode" },
        { name: "newname", description: "The new volume name" },
      ],
    },
    {
      name: "verifyVolume",
      description: "Verify the file system data structures of a volume",
      args: { name: "disk", description: "DiskIdentifier or DeviceNode" },
    },
    {
      name: "repairVolume",
      description: "Repair the file system data structures of a volume",
      args: { name: "disk", description: "DiskIdentifier or DeviceNode" },
    },
    {
      name: "verifyDisk",
      description: "Verify the components of a partition map of a disk",
      args: { name: "disk", description: "DiskIdentifier or DeviceNode" },
    },
    {
      name: "repairDisk",
      description: "Repair the components of a partition map of a disk",
      args: { name: "disk", description: "DiskIdentifier or DeviceNode" },
    },
    {
      name: "eraseDisk",
      description:
        "Erase an existing disk, removing all volumes and creating a new partition map",
      args: [
        {
          name: "format",
          description: "File system personality, e.g. JHFS+",
          suggestions: filesystems,
        },
        {
          name: "name",
          description: "New volume name, or %noformat% to skip initialization",
        },
        {
          name: "scheme",
          isOptional: true,
          description: "Partition map scheme",
          suggestions: ["APM", "MBR", "GPT"],
        },
        { name: "disk", description: "DiskIdentifier or DeviceNode" },
      ],
      options: [
        {
          name: "-noEFI",
          description: "Do not create an EFI system partition",
        },
      ],
    },
    {
      name: "eraseVolume",
      description:
        "Erase an existing volume and lay down a new empty file system",
      args: [
        {
          name: "format",
          description: "File system personality, e.g. JHFS+",
          suggestions: filesystems,
        },
        {
          name: "name",
          description: "New volume name, or %noformat% to skip initialization",
        },
        {
          name: "disk",
          description: "MountPoint, DiskIdentifier or DeviceNode",
        },
      ],
    },
    {
      name: "reformat",
      description: "Erase an existing volume with same name and type",
      args: { name: "disk", description: "DiskIdentifier or DeviceNode" },
    },
    {
      name: "zeroDisk",
      description: "Erase a disk, writing zeros to the media",
      args: [
        {
          name: "numberOfTimesToWrite",
          isOptional: true,
          description: "Number of zero-fill passes",
        },
        { name: "disk", description: "DiskIdentifier or DeviceNode" },
      ],
    },
    {
      name: "randomDisk",
      description: "Erase a disk, writing random data to the media",
      args: [
        {
          name: "numberOfTimesToWrite",
          isOptional: true,
          description: "Number of random-fill passes",
        },
        { name: "disk", description: "DiskIdentifier or DeviceNode" },
      ],
    },
    {
      name: "secureErase",
      description: "Securely erase a disk or the free space on a volume",
      args: [
        {
          name: "level",
          description:
            "0 zero-fill, 1 random, 2 seven-pass, 3 Gutmann 35-pass, 4 zero+ECC-rewritten",
          suggestions: ["0", "1", "2", "3", "4"],
        },
        { name: "disk", description: "DiskIdentifier or DeviceNode" },
      ],
      options: [
        {
          name: "freespace",
          description:
            "Erase the free space on a volume instead of the whole disk",
        },
      ],
    },
    {
      name: "partitionDisk",
      description: "(Re)partition a disk, removing all volumes",
      args: [
        {
          name: "disk",
          description: "MountPoint, DiskIdentifier or DeviceNode",
        },
        {
          name: "numberOfPartitions",
          isOptional: true,
          description: "Number of partitions to create",
        },
        {
          name: "scheme",
          isOptional: true,
          description: "Partition map scheme",
          suggestions: ["APM", "MBR", "GPT"],
        },
        {
          name: "part1Format part1Name part1Size",
          description:
            "Partition triplets: format, name and size (e.g. JHFS+ Untitled 100%)",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: "-noEFI",
          description: "Do not create an EFI system partition",
        },
      ],
    },
    {
      name: "resizeVolume",
      description: "Resize a volume, increasing or decreasing its size",
      args: [
        {
          name: "disk",
          description: "MountPoint, DiskIdentifier or DeviceNode",
        },
        {
          name: "size",
          description: "New size (e.g. 100G), R for grow-fit, or limits",
        },
        {
          name: "new partitions",
          isOptional: true,
          isVariadic: true,
          description:
            "Partition triplets to fill freed space when decreasing (format name size)",
        },
      ],
      options: [
        {
          name: "-plist",
          description:
            "Output the limits in property list format (with limits)",
        },
      ],
    },
    {
      name: "splitPartition",
      description: "Split an existing partition into two or more",
      args: [
        { name: "disk", description: "DiskIdentifier or DeviceNode" },
        {
          name: "format name size",
          description: "Triplet for each new partition",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: "force",
          description: "Force splitting even if the file system cannot resize",
        },
      ],
    },
    {
      name: "mergePartitions",
      description: "Combine two or more existing partitions into one",
      args: [
        {
          name: "format",
          description: "File system personality for the merged volume",
          suggestions: filesystems,
        },
        { name: "name", description: "Name of the merged volume" },
        {
          name: "disk",
          description:
            "Start and end DiskIdentifier|DeviceNode of the range to merge",
        },
      ],
      options: [
        {
          name: "force",
          description: "Force merge, losing all data on all merged partitions",
        },
      ],
    },
    {
      name: "apfs",
      description: "Perform additional verbs related to APFS",
      subcommands: [
        {
          name: "list",
          description: "Show status of all current APFS Containers",
        },
        {
          name: "listSnapshots",
          description: "List APFS Snapshots in a mounted APFS Volume",
          args: { name: "volume", description: "APFS Volume DiskIdentifier" },
        },
        {
          name: "listVolumeGroups",
          description: "List all current APFS Volume Group relationships",
        },
        {
          name: "convert",
          description: "Nondestructively convert from HFS to APFS",
          args: { name: "disk", description: "DiskIdentifier or DeviceNode" },
        },
        {
          name: "create",
          description: "Create a new APFS Container with one APFS Volume",
          args: {
            name: "disk",
            description: "DiskIdentifier or DeviceNode",
            isVariadic: true,
          },
        },
        {
          name: "deleteContainer",
          description: "Delete an APFS Container and free or reformat disks",
          args: {
            name: "disk",
            description: "Container reference or DiskIdentifier",
          },
        },
        {
          name: "resizeContainer",
          description: "Resize an APFS Container and its disk space usage",
          args: [
            {
              name: "container",
              description: "Container reference or DiskIdentifier",
            },
            {
              name: "size",
              description: "New size (e.g. 100G), 0 for fit, or limits",
            },
          ],
        },
        {
          name: "addVolume",
          description: "Export a new APFS Volume from an APFS Container",
          args: [
            {
              name: "container",
              description: "Container reference or DiskIdentifier",
            },
            { name: "name", description: "Name of the new APFS Volume" },
          ],
        },
        {
          name: "deleteVolume",
          description: "Remove an APFS Volume from its APFS Container",
          args: { name: "volume", description: "APFS Volume DiskIdentifier" },
        },
        {
          name: "eraseVolume",
          description: "Erase contents of, but keep, an APFS Volume",
          args: { name: "volume", description: "APFS Volume DiskIdentifier" },
        },
        {
          name: "changeVolumeRole",
          description: "Change the Role metadata flags of an APFS Volume",
          args: [
            { name: "volume", description: "APFS Volume DiskIdentifier" },
            {
              name: "role",
              description: "New role flags, e.g. r for recovery",
            },
          ],
        },
        {
          name: "unlockVolume",
          description: "Unlock an encrypted APFS Volume which is locked",
          args: { name: "volume", description: "APFS Volume DiskIdentifier" },
        },
        {
          name: "lockVolume",
          description: "Lock an encrypted APFS Volume by unmounting it",
          args: { name: "volume", description: "APFS Volume DiskIdentifier" },
        },
        {
          name: "encryptVolume",
          description: "Enable FileVault security in background or instantly",
          args: { name: "volume", description: "APFS Volume DiskIdentifier" },
        },
        {
          name: "decryptVolume",
          description: "Disable FileVault security in background or instantly",
          args: { name: "volume", description: "APFS Volume DiskIdentifier" },
        },
        {
          name: "deleteSnapshot",
          description: "Remove an APFS Snapshot from an APFS Volume",
          args: { name: "volume", description: "APFS Volume DiskIdentifier" },
        },
      ],
    },
  ],
};

export default completionSpec;
