import {
  clangBase,
  stdCPPSuggestions,
  stdOpenCLCPPSuggestions,
  stdHLSLSuggestions,
} from "./clang";

const completionSpec: Fig.Spec = {
  ...clangBase,
  name: "clang++",
  description: "Clang LLVM compiler for C++",
  options: [
    ...(clangBase as Fig.Subcommand).options,
    {
      name: "-std",
      description: "Language standard to compile for",
      args: {
        name: "value",
        suggestions: [
          ...stdCPPSuggestions,
          ...stdOpenCLCPPSuggestions,
          {
            name: "cuda",
            description: "NVIDIA CUDA(tm)",
          },
          {
            name: "hip",
            description: "HIP",
          },
          ...stdHLSLSuggestions,
        ],
      },
      requiresSeparator: true,
    },
  ],
};
export default completionSpec;
