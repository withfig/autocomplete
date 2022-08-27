import clang from "./clang";
const completionSpec: Fig.Spec = {
  ...clang,
  name: "clang++",
  description: "Clang LLVM compiler for C++",
};
export default completionSpec;
