const completionSpec: Fig.Spec = {
  name: "shasum",
  description: "Print or Check SHA Checksums",
  args: {
    name: "FILE",
    description:
      "Files to compute/check SHA checksums. With no FILE, or when FILE is -, read standard input",
    template: "filepaths",
    isOptional: true,
    isVariadic: true,
  },
  options: [
    {
      name: ["-a", "--algorithm"],
      description: "Select SHA algorithm",
      args: {
        suggestions: [
          { name: "1", description: "SHA-1 (default)" },
          { name: "224", description: "SHA-224" },
          { name: "256", description: "SHA-256" },
          { name: "384", description: "SHA-384" },
          { name: "512", description: "SHA-512" },
          { name: "512224", description: "SHA-512/224" },
          { name: "512256", description: "SHA-512/256" },
        ],
      },
    },
    {
      name: ["-b", "--binary"],
      description: "Read in binary mode",
    },
    {
      name: ["-c", "--check"],
      description: "Read SHA sums from the FILEs and check them",
    },
    {
      name: "--tag",
      description: "Create a BSD-style checksum",
    },
    {
      name: ["-t", "--text"],
      description: "Read in text mode (default)",
    },
    {
      name: ["-U", "--UNIVERSAL"],
      description:
        "Read in Universal Newlines mode - produces same digest on Windows/Unix/Mac",
    },
    {
      name: ["-0", "--01"],
      description:
        "Read in BITS mode - ASCII '0' as 0-bit, ASCII '1' as 1-bit, others ignored",
    },
    {
      name: "--ignore-missing",
      description: "Don't fail or report status for missing files",
    },
    {
      name: ["-q", "--quiet"],
      description: "Don't print OK for each successfully verified file",
    },
    {
      name: ["-s", "--status"],
      description: "Don't output anything, status code shows success",
    },
    {
      name: "--strict",
      description: "Exit non-zero for improperly formatted checksum lines",
    },
    {
      name: ["-w", "--warn"],
      description: "Warn about improperly formatted checksum lines",
    },
    {
      name: ["-h", "--help"],
      description: "Display help and exit",
    },
    {
      name: ["-v", "--version"],
      description: "Output version information and exit",
    },
  ],
};

export default completionSpec;
