const completionSpec: Fig.Spec = {
  name: "pdfunite",
  description: "Combine multiple pdfs",
  options: [
    { name: "-v", description: "Print copyright and version info" },
    { name: ["-h", "--help", "-?"], description: "Print usage information" },
  ],
  args: {
    template: "filepaths",
    isVariadic: true,
  },
};

export default completionSpec;
