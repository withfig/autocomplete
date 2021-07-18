// To learn more about FIg's autocomplete standard visit: https://fig.io/docs/autocomplete/building-a-spec#building-your-first-autocomplete-spec
// var executeShellCommand: Fig.ExecuteShellCommandFunction;

// The below is a dummy example for git. Make sure to change the file name!
const completionSpec: Fig.Spec = {
  name: "mask",
  generateSpec: async (context, executeShellCommand) => {
    // See if use specified a maskfile location

    var maskfileLocationIdx = context.indexOf("--maskfile");

    var out;
    // mask --maskfile path/tp/thing build
    if (maskfileLocationIdx < 0 || maskfileLocationIdx + 3 > context.length) {
      out = await executeShellCommand("cat maskfile.md 2> /dev/null");
    } else {
      out = await executeShellCommand(
        `cat ${context[maskfileLocationIdx + 1]} 2> /dev/null`
      );
    }

    if (!out) return { name: "null" };

    return {
      name: "mask",
      subcommands: out.match(/##.*/g).map((elm) => {
        return {
          name: elm.slice(3),
        };
      }),
    };
  },
};

export default completionSpec;
