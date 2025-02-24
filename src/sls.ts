import serverless from "./serverless.js";
const completionSpec: Fig.Spec = {
  ...serverless,
  name: "sls",
};
export default completionSpec;
