import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "pdfunite",
  description: "Combine multiple pdfs",
  options: [
    { name: "-v", description: "Print copyright and version info" },
    { name: ["-h", "--help", "-?"], description: "Print usage information" },
  ],
  args: {
    generators: filepaths({ extensions: ["pdf"] }),
    isVariadic: true,
  },
};

export default completionSpec;
