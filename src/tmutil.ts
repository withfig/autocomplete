const completionSpec: Fig.Spec = {
  name: "tmutil",
  description: "Time Machine utility",
  subcommands: [
    { name: "version", description: "Print the current version" },
    {
      name: "enable",
      description:
        "Turn on automatic backups (required root + full disk access)",
    },
    {
      name: "disable",
      description:
        "Turn off automatic backups (required root + full disk access)",
    },
    {
      name: "startbackup",
      description: "Begin a backup if one is not already running",
      options: [
        {
          name: ["-a", "--auto"],
          description:
            "Run the backup in a mode similar to system-scheduled backups",
        },
        {
          name: ["-b", "--block"],
          description:
            "Wait (block) until the backup is finished before exiting",
        },
        {
          name: ["-r", "--rotation"],
          description: "Allow automatic destination rotation during backup",
        },
        {
          name: ["-d", "--destination"],
          description:
            "Perform the backup to the destination corresponding to the specified ID",
          args: { name: "destination id" },
        },
      ],
    },
    {
      name: "stopbackup",
      description: "Cancel a backup currently in progress",
    },
    {
      name: "delete",
      description:
        "Deletes backups with the specified timestamp from the backup volume mounted at the given mountpoint",
      options: [
        {
          name: "-d",
          description: "Delete from the given mount point",
          args: { name: "backup mount point" },
        },
        {
          name: "-t",
          description: "Delete backups with this timestamp",
          isRepeatable: true,
          args: { name: "timestamp" },
        },
        {
          name: "-p",
          description: "A specific path to delete (HFS backup disk)",
          args: { name: "path", template: ["filepaths", "folders"] },
        },
      ],
    },
    {
      name: "deleteinprogress",
      description: "Delete all in-progress backups for a machine directory",
      args: { name: "machine directory" },
    },
    {
      name: "restore",
      description:
        "Restore the item `source`, which is inside a backup, to the location `destination`. Same semantics as `cp`",
      args: [{ name: "source", isVariadic: true }, { name: "destination" }],
      options: [
        {
          name: "-v",
          description: "Be verbose, showing files as they are copied",
        },
      ],
    },
    {
      name: "compare",
      description: "Perform a backup diff",
      args: [
        { name: "backup or path" },
        { name: "path (if not backup)", isOptional: true },
      ],
      options: [
        { name: "-@", description: "Compare extended attributes" },
        { name: "-a", description: "Compare all supported metadata" },
        { name: "-c", description: "Compare creation times" },
        { name: "-d", description: "Compare file data forks" },
        { name: "-e", description: "Compare ACLs" },
        { name: "-f", description: "Compare file flags" },
        { name: "-g", description: "Compare GIDs" },
        { name: "-h", description: "Unknown" },
        { name: "-l", description: "Unknown" },
        { name: "-m", description: "Compare file modes" },
        { name: "-n", description: "No metadata comparison" },
        { name: "-s", description: "Compare sizes" },
        { name: "-t", description: "Compare modification times" },
        { name: "-u", description: "Compare UIDs" },
        {
          name: "-E",
          description:
            "Don't take exclusions into account when comparing items inside volumes",
        },
        {
          name: "-U",
          description:
            "Ignore logical volume identity (volume UUIDs) when directly comparing a local volume or volume store to a volume store",
        },
        { name: "-X", description: "Print output in XML property list format" },
        {
          name: "-D",
          description:
            "Limit traversal depth to depth levels from the beginning of iteration",
          args: { name: "depth" },
        },
        {
          name: "-I",
          description:
            "Ignore paths with a path component equal to name during iteration",
          isRepeatable: true,
          args: { name: "name" },
        },
      ],
    },
    {
      name: "setdestination",
      description:
        "Configure a local HFS+ or APFS volume, AFP share, or SMB share as a backup destination (requires root + Full Disk Access)",
      args: { name: "destination" },
      options: [
        {
          name: "-a",
          description:
            "Add the arg to the list of destinations, instead of replacing the list",
        },
        {
          name: "-p",
          description: "Enter a password in a non-echoing interactive prompt",
        },
      ],
    },
    {
      name: "removedestination",
      description:
        "Remove the destination with the specified unique identifier from the Time Machine configuration (requires root + Full Disk Access)",
      args: { name: "destination id" },
    },
    {
      name: "destinationinfo",
      description:
        "Print information about destinations currently configured for use with Time Machine",
      options: [
        { name: "-X", description: "Print output in XML plist format" },
      ],
    },
    {
      name: "addexclusion",
      description:
        "Configure an exclusion that tells Time Machine not to backup a file, directory, or volume during future backups",
      args: { name: "item", isVariadic: true },
      options: [
        { name: "-p", description: "Configure fixed-path exclusions" },
        { name: "-v", description: "Configure volume exclusions" },
      ],
    },
    {
      name: "removeexclusion",
      description:
        "Configure  Time Machine to backup a file, directory, or volume during future backups",
      args: { name: "item", isVariadic: true },
      options: [
        { name: "-p", description: "Configure fixed-path exclusions" },
        { name: "-v", description: "Configure volume exclusions" },
      ],
    },
    {
      name: "isexcluded",
      description:
        "Determine if a file, directory, or volume are excluded from Time Machine backups",
      args: { name: "item", isVariadic: true },
    },
    {
      name: "inheritbackup",
      description:
        "Claim a machine directory or sparsebundle for use by the current machine",
      args: { name: "machine directory or sparsebundle" },
    },
    {
      name: "associatedisk",
      description:
        "Bind a volume store directory to the specified local disk, thereby reconfiguring the backup history (requires root + Full Disk Access)",
      args: [{ name: "mount point" }, { name: "volume backup directory" }],
      options: [
        {
          name: "-a",
          description:
            "Find all volume stores in the same machine directory that match the identity of the volume backup directory",
        },
      ],
    },
    {
      name: "latestbackup",
      description: "List this computer's latest completed backup",
      options: [
        {
          name: "-d",
          description: "Specify a destination volume to list backups from",
        },
        {
          name: "-m",
          dependsOn: ["-d"],
          description:
            "Attempt to mount the backups and list their mounted paths",
        },
        {
          name: "-t",
          dependsOn: ["-m"],
          description:
            "Only show the backup timestampt rather than the full name or path",
        },
      ],
    },
    {
      name: "listbackups",
      description: "List all of this computer's completed backups",
      options: [
        {
          name: "-d",
          description: "Specify a destination volume to list backups from",
        },
        {
          name: "-m",
          dependsOn: ["-d"],
          description:
            "Attempt to mount the backups and list their mounted paths",
        },
        {
          name: "-t",
          dependsOn: ["-m"],
          description:
            "Only show the backup timestampt rather than the full name or path",
        },
      ],
    },
    {
      name: "machinedirectory",
      description:
        "Print the path to the current machine directory for this computer",
    },
    {
      name: "calculatedrift",
      description:
        "Analyze the backups in an HFS machine directory and determine the amount of change between each",
      args: { name: "machine directory" },
    },
    {
      name: "uniquesize",
      description:
        "Analyze the specified path in an HFS+ backup or path to an APFS backup and determine its unique size",
      args: { name: "path", template: "filepaths", isVariadic: true },
    },
    {
      name: "verifychecksums",
      description:
        "Compute a checksum of data contained within a backup and verify the results against checksum information computed at the time of backup",
      args: { name: "path", template: "filepaths", isVariadic: true },
    },
    {
      name: "localsnapshot",
      description:
        "Create new local Time Machine snapshots of all APFS volumes included in the Time Machine backup",
    },
    {
      name: "listlocalsnapshots",
      description: "List local Time Machine snapshots of the specified volume",
      args: { name: "mount point" },
    },
    {
      name: "listlocalsnapshotdates",
      description:
        "List the creation dates of all local Time Machine snapshots",
      args: { name: "mount point", isOptional: true },
    },
    {
      name: "deletelocalsnapshots",
      description:
        "Delete all local Time Machine snapshots on all mounted disks for the specified date or on the given disk",
      args: { name: "mount point or snapshot date", isOptional: true },
    },
    {
      name: "thinlocalsnapshots",
      description:
        "Think local Time Machine snapshots for the specified volume",
      args: [
        { name: "mount point" },
        { name: "purge amount (bytes)", isOptional: true },
        {
          name: "urgency",
          isOptional: true,
          suggestions: ["1", "2", "3", "4"],
        },
      ],
    },
  ],
};

export default completionSpec;
