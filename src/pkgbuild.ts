const completionSpec: Fig.Spec = {
  name: "pkgbuild",
  description: "Build macOS Installer packages",
  args: {
    name: "package-output-path",
    description:
      "Path of the package to write (or plist output path with --analyze)",
    template: ["filepaths"],
  },
  options: [
    {
      name: "--root",
      description: "Path of the root to build the package from",
      args: { name: "root-path", template: "folders" },
    },
    {
      name: "--component",
      description: "Path of a previously-built bundle to package",
      args: { name: "component-path", template: "folders" },
    },
    {
      name: "--component-plist",
      description: "Path of the plist describing the components",
      args: { name: "plist-path", template: "filepaths" },
    },
    {
      name: "--scripts",
      description: "Path of the directory containing the scripts",
      args: { name: "scripts-path", template: "folders" },
    },
    {
      name: "--nopayload",
      description: "Create a package with no payload",
    },
    {
      name: "--identifier",
      description: "The package identifier (e.g. com.example.foo)",
      args: { name: "pkg-identifier" },
    },
    {
      name: "--version",
      description: "The package version (e.g. 1.0.0)",
      args: { name: "pkg-version" },
    },
    {
      name: "--install-location",
      description: "Where the payload will be installed",
      args: { name: "install-path", template: "folders" },
    },
    {
      name: "--analyze",
      description:
        "Generate a template component plist from an xcodebuild root",
    },
    {
      name: "--prior",
      description: "Gather defaults from a previously-built package",
      args: { name: "pkg-path", template: "filepaths" },
    },
    {
      name: "--filter",
      description: "Regular expression of payload paths to exclude",
      args: { name: "filter-expression" },
    },
    {
      name: "--ownership",
      description: "How ownership of payload files is preserved",
      args: {
        name: "ownership",
        suggestions: [
          { name: "recommended", description: "Use recommended ownership" },
          { name: "preserve", description: "Preserve all ownership" },
          {
            name: "preserve-other",
            description: "Preserve ownership except for the user",
          },
        ],
      },
    },
    {
      name: "--large-payload",
      description: "Create a large (slpkg) style payload",
    },
    {
      name: "--compression",
      description: "Compression mode for large payloads",
      args: {
        name: "compression-mode",
        suggestions: [
          { name: "default", description: "Use the default compression" },
          { name: "none", description: "Do not compress the payload" },
          { name: "fast", description: "Compress for speed" },
          { name: "high", description: "Compress for size" },
          {
            name: "highest",
            description: "Compress for the smallest size",
          },
        ],
      },
    },
    {
      name: "--min-os-version",
      description: "Minimum OS version the package can install on",
      args: { name: "os-version" },
    },
    {
      name: "--sign",
      description: "Sign the package with the given identity",
      args: { name: "identity-name" },
    },
    {
      name: "--keychain",
      description: "Keychain to search for the signing identity",
      args: { name: "keychain-path", template: "filepaths" },
    },
    {
      name: "--cert",
      description: "Intermediate certificate to embed in the package",
      args: { name: "certificate-name" },
    },
    {
      name: "--timestamp",
      description: "Include a trusted timestamp with the signature",
    },
    {
      name: "--timestamp=none",
      description: "Do not include a trusted timestamp",
    },
    {
      name: "--quiet",
      description: "Print minimal output",
    },
  ],
};

export default completionSpec;
