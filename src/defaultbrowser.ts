const getBrowsers: Fig.Generator = {
  script: "defaultbrowser",
  splitOn: "\n",
  postProcess: function (out) {
    const installedBrowsers: Fig.Suggestion[] = [];
    for (let i = 0; i < lines.length; i++) {
      var browser_name = lines[i].split(" ")[0];
      installedBrowsers.push({
        name: browser_name,
      });
    }
    return installedBrowsers;
  },
};

const completionSpec: Fig.Spec = {
  name: "defaultbrowser",
  description: "Change your default browser",
  args: { isOptional: true, generators: getBrowsers },
};

export default completionSpec;
