import serverless from "./serverless";
const completionSpec: Fig.Spec = {
  ...serverless,
  name: "sls",
};
export default completionSpec;
