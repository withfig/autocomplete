import dos2unix from "./dos2unix";

const completionSpec: Fig.Spec = {
  ...dos2unix,
  name: "unix2dos",
  description: "Unix to DOS text file format convertor",
};
export default completionSpec;
