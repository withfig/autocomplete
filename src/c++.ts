import clang from "./clang++";
const completionSpec: Fig.Spec = {
  ...clang,
  name: "c++",
  description: "C++ compiler",
};
export default completionSpec;
