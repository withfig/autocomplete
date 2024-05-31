const getInstalledBrowsers: Fig.Generator = {
  script: ["defaultbrowser"],
  postProcess: function (out) {
    return out.split("\n").map((line) => {
      /* We ignore the already set browser */
      if (line.startsWith("*")) {
        return {};
      }
      const browserName = line.trim();
      return {
        name: browserName,
      };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "defaultbrowser",
  description: "Change your default browser from the CLI",
  args: { isOptional: true, generators: getInstalledBrowsers },
};

export default completionSpec;
