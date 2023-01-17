import clangpp from "./clang++";
const completionSpec: Fig.Spec = {
  ...clangpp,
  name: "c++",
  description: "C++ compiler",
};
export default completionSpec;
