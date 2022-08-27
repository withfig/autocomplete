import gcc from "./gcc"
const completionSpec: Fig.Spec = {
  ...gcc,
  name: "g++",
  description: "The default C++ compiler for most linux distributions",
};
export default completionSpec;
