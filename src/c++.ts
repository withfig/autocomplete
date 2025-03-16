import clangpp from "./clang++.js";
const completionSpec: Fig.Spec = {
  ...clangpp,
  name: "c++",
  description: "C++ compiler",
};
export default completionSpec;
