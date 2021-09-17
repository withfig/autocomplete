const completionSpec: Fig.Spec = {
  name: "pdfunite",
  description: "Combine multiple pdfs",
  args: {
    template: "filepaths",
    isVariadic: true,
  },
};

export default completionSpec;
