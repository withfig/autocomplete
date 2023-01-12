import dos2unix from "./dos2unix";

const completionSpec: Fig.Spec = {
  name: "unix2dos",
  description: "Unix to DOS text file format convertor",
  options: (dos2unix as Fig.Subcommand).options,
  args: (dos2unix as Fig.Subcommand).args,
};
export default completionSpec;
