import clang from "./clang";
const completionSpec: Fig.Spec = {
  ...clang,
  name: "clang++",
  description: "Clang LLVM compiler for C++",
  options: [
    ...(clang as Fig.Subcommand).options,
    {
      name: "-std",
      description: "Language standard to compile for",
      args: {
        name: "value",
        suggestions: [
          "c++98",
          "c++03",
          "c++11",
          "c++14",
          "c++17",
          "c++20",
          "c++2b",

          "gnu++98",
          "gnu++03",
          "gnu++11",
          "gnu++14",
          "gnu++17",
          "gnu++20",
          "gnu++2b",
        ],
      },
      requiresSeparator: true,
    },
  ],
};
export default completionSpec;
