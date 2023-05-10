const completionSpec: Fig.Spec = {
  name: "ditto",
  description: "Copy directory hierarchies, create and extract archives",
  options: [
    {
      name: "--help",
      description: "Show help for ditto",
    },
    {
      name: "-h",
      description: "Print full usage",
    },
    {
      name: "-X",
      description:
        "When copying one or more source directories, do not descend into directories that have a different device ID",
    },
    {
      name: "-c",
      description: "Create an archive at the destination path",
    },
    {
      name: "-z",
      description: "Create compressed CPIO archives, using gzip(1) compression",
    },
    {
      name: "-j",
      description:
        "Create compressed CPIO archives, using bzip2(1) compression",
    },
    {
      name: "-v",
      description:
        "Print a line of output to stderr for each source directory copied",
    },
    {
      name: "-V",
      description:
        "Print a line of output to stderr for every file, symbolic link, and device copied",
    },
    {
      name: "-x",
      description: "Extract the archives given as source arguments",
    },
    {
      name: "-k",
      description:
        "Create or extract from a PKZip archive instead of the default CPIO",
    },
    {
      name: "--keepParent",
      description:
        "When creating an archive, embed the parent directory name src in dst_archive",
    },
    {
      name: "--arch",
      description:
        "Thin Universal binaries to the specified architecture.  If multiple --arch options are specified then the resulting destination file will contain each of the specified architectures (if they are present in the source file).  arch should be specified as 'i386', 'x86_64', etc",
      isRepeatable: true,
      args: {
        name: "arch",
      },
    },
    {
      name: "--bom",
      description:
        "Copy only files, links, devices, and directories that are present in the specified BOM",
      args: {
        name: "bom",
      },
    },
    {
      name: "-rsrc",
      description:
        "Preserve resource forks and HFS meta-data.  ditto will store this data in Carbon-compatible ._ AppleDouble files on filesystems that do not natively support resource forks.  As of Mac OS X 10.4, --rsrc is default behavior",
    },
    {
      name: "--norsrc",
      description:
        "Do not preserve resource forks and HFS meta-data.  If both --norsrc and --rsrc are passed, whichever is passed last will take precedence.  Both options override DITTONORSRC. Unless explicitly specified, --norsrc also implies --noextattr and --noacl to match the behavior of Mac OS X 10.4",
    },
    {
      name: "--extattr",
      description:
        "Preserve extended attributes (requires --rsrc). As of Mac OS X 10.5, --extattr is the default",
    },
    {
      name: "--noextattr",
      description: "Do not preserve extended attributes (requires --norsrc)",
    },
    {
      name: "--qtn",
      description:
        "Preserve quarantine information.  As of Mac OS X 10.5, --qtn is the default",
    },
    {
      name: "--noqtn",
      description: "Do not preserve quarantine information",
    },
    {
      name: "--acl",
      description:
        "Preserve Access Control Lists (ACLs).  As of Mac OS X 10.5, --acl is the default",
    },
    {
      name: "--noacl",
      description: "Do not preserve ACLs",
    },
    {
      name: "--nocache",
      description:
        "Do not perform copies using the Mac OS X Unified Buffer Cache. Files read and written will not be cached, although if the file is already present in the cache, the cached information will be used",
    },
    {
      name: "--hfsCompression",
      description:
        "When copying files or extracting content from an archive, if the destination is an HFS+ volume that supports compression, all the content will be compressed if appropriate. This is only supported on Mac OS X 10.6 or later, and is only intended to be used in installation and backup scenarios that involve system files. Since files using HFS+ compression are not readable on versions of Mac OS X earlier than 10.6, this flag should not be used when dealing with non-system files or other user-generated content that will be used on a version of Mac OS X earlier than 10.6",
    },
    {
      name: "--nohfsCompression",
      description:
        "Do not compress files with HFS+ compression when copying or extracting content from an archive unless the content is already compressed with HFS+ compression.  This flag is only supported on Mac OS X 10.6 or later.  --nohfsCompression is the default",
    },
    {
      name: "--preserveHFSCompression",
      description:
        "When copying files to an HFS+ volume that supports compression, ditto will preserve the compression of any source files that were using HFS+ compression.  This flag is only supported on Mac OS X 10.6 or later. --preserveHFSCompression is the default",
    },
    {
      name: "--nopreserveHFSCompression",
      description:
        "Do not preserve HFS+ compression when copying files that are already compressed with HFS+ compression. This is only supported on Mac OS X 10.6 or later",
    },
    {
      name: "--sequesterRsrc",
      description:
        "When creating a PKZip archive, preserve resource forks and HFS meta-data in the subdirectory __MACOSX.  PKZip extraction will automatically find these resources",
    },
    {
      name: "--zlibCompressionLevel",
      description:
        "Sets the compression level to use when creating a PKZip archive. The compression level can be set from 0 to 9, where 0 represents no compression, and 9 represents optimal (slowest) compression. By default, ditto will use the default compression level as defined by zlib",
      args: {
        name: "compression level",
      },
    },
    {
      name: "--password",
      description:
        "When extracting a password-encrypted ZIP archive, you must specify --password to allow ditto to prompt for a password to use to extract the contents of the file. If this option is not provided, and a password-encrypted file is encountered, ditto will emit an error message",
    },
  ],
  args: [
    {
      name: "source",
      template: ["filepaths", "folders"],
      isVariadic: true,
    },
    {
      name: "dest",
      template: "folders",
      suggestCurrentToken: true,
    },
  ],
};
export default completionSpec;
