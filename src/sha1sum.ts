const completionSpec: Fig.Spec = {
  name: "sha1sum",
  description: "Print or check SHA1 (160-bit) checksums",
  options: [
    {
      name: ["-b", "--binary"],
      description: "Read in binary mode",
    },
    {
      name: ["-c", "--check"],
      description: "Read SHA1 sums from the FILEs and check them",
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
      name: ["-z", "--zero"],
      description:
        "End each output line with NUL, not newline, and disable file name escaping",
    },
    {
      name: "--ignore-missing",
      description: "Don't fail or report status for missing files",
    },
    {
      name: "--quiet",
      description: "Don't print OK for each successfully verified file",
    },
    {
      name: "--status",
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
      name: "--help",
      description: "Output help message and exit",
    },
    {
      name: "--version",
      description: "Output version information and exit",
    },
  ],
  args: {
    name: "file",
    description: "With no FILE, or when FILE is -, read standard input",
    template: "filepaths",
    suggestions: ["-"],
    isOptional: true,
  },
};
export default completionSpec;
