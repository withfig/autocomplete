const completionSpec: Fig.Spec = {
  name: "pdfunite",
  description: "Combine multiple pdfs",
  options: [
    { name: "-v", description: "Print copyright and version info" },
    { name: ["-h", "--help", "-?"], description: "Print usage information" },
  ],
  args: {
    generators: {
      template: "filepaths",
      filterTemplateSuggestions: function (paths) {
        return paths.filter((file) => file.name.endsWith(".pdf"));
      },
    },
    isVariadic: true,
  },
};

export default completionSpec;
