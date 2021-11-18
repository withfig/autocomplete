import v1_0_52 from "./fig/fig@1.0.52";
// import legacy from "./fig/fig-legacy";

// todo(mschrage): handle versioning Fig completion spec
// export const getVersionCommand: Fig.GetVersionCommand = async (
//   executeShellCommand: Fig.ExecuteShellCommandFunction
// ) => {
//   const version: string = await executeShellCommand(
//     "defaults read com.mschrage.fig versionAtPreviousLaunch"
//   );
//   return version.split(",")[0];
// };

// const completionSpec: Fig.Spec = (version: string): Fig.Spec => {
//   switch (version) {
//     case "1.0.52":
//       return v1_0_52;
//     default:
//       return legacy;
//   }
// };

export default v1_0_52;
