type SearchResult = {
  package: {
    name: string;
    description: string;
  };
  searchScore: number;
};

export const searchGenerator: Fig.Generator = {
  script: function (context) {
    if (context[context.length - 1] === "") return "";
    const searchTerm = context[context.length - 1];
    return `curl -s -H "Accept: application/json" "https://api.npms.io/v2/search?q=${searchTerm}&size=20"`;
  },
  postProcess: function (out) {
    try {
      const results: SearchResult[] = JSON.parse(out).results;
      return results.map((item) => ({
        name: item.package.name,
        description: item.package.description,
      })) as Fig.Suggestion[];
    } catch (e) {
      return [];
    }
  },
};

export const getScriptsGenerator: Fig.Generator = {
  script:
    "until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json",
  postProcess: function (out) {
    if (out.trim() == "") {
      return [];
    }

    try {
      const packageContent = JSON.parse(out);
      const scripts = packageContent["scripts"];
      const figCompletions = packageContent["fig"] || {};

      if (scripts) {
        return Object.keys(scripts).map((key) => {
          const icon = "fig://icon?type=yarn";
          const customScripts: Fig.Suggestion = figCompletions[key];
          return {
            name: key,
            icon,
            /**
             * If there are custom definitions for the scripts
             * we want to overide the default values
             * */
            ...(customScripts !== undefined && customScripts),
          };
        });
      }
    } catch (e) {
      console.error(e);
    }

    return [];
  },
};

// generate package list from package.json file
export const packageList: Fig.Generator = {
  script: "cat package.json",
  postProcess: function (out) {
    if (out.trim() == "") {
      return [];
    }

    try {
      const packageContent = JSON.parse(out);
      const dependencyScripts = packageContent["dependencies"] || {};
      const devDependencyScripts = packageContent["devDependencies"] || {};
      return [
        ...Object.keys(dependencyScripts),
        ...Object.keys(devDependencyScripts),
      ].map((dependencyName) => ({
        name: dependencyName,
        icon: "📦",
      }));
    } catch (e) {
      console.log(e);
    }

    return [];
  },
};

// generate global package list from global package.json file
export const getGlobalPackagesGenerator: Fig.Generator = {
  script: 'cat "$(yarn global dir)/package.json"',
  postProcess: (out, context) => {
    if (out.trim() == "") return [];

    try {
      const packageContent = JSON.parse(out);
      const dependencyScripts = packageContent["dependencies"] || {};
      const devDependencyScripts = packageContent["devDependencies"] || {};
      const dependencies = [
        ...Object.keys(dependencyScripts),
        ...Object.keys(devDependencyScripts),
      ];

      const filteredDependencies = dependencies.filter(
        (dependency) => !context.includes(dependency)
      );

      return filteredDependencies.map((dependencyName) => ({
        name: dependencyName,
        icon: "📦",
      }));
    } catch (e) {
      console.log(e);
    }

    return [];
  },
};

// generate workspace argument completion
export const scriptList: Fig.Generator = {
  script: function (context) {
    return `cat ${context[context.length - 2]}/package.json`;
  },
  postProcess: function (out) {
    if (out.trim() == "") {
      return [];
    }
    try {
      const packageContent = JSON.parse(out);
      const scripts = packageContent["scripts"];
      if (scripts) {
        return Object.keys(scripts).map((script) => ({ name: script }));
      }
    } catch (e) {}
    return [];
  },
};

export const configList: Fig.Generator = {
  script: "yarn config list",
  postProcess: function (out) {
    if (out.trim() == "") {
      return [];
    }

    try {
      const startIndex = out.indexOf("{");
      const endIndex = out.indexOf("}");
      let output = out.substring(startIndex, endIndex + 1);
      // TODO: fix hacky code
      // reason: JSON parse was not working without double quotes
      output = output
        .replace(/\'/gi, '"')
        .replace("lastUpdateCheck", '"lastUpdateCheck"')
        .replace("registry", '"lastUpdateCheck"');
      const configObject = JSON.parse(output);
      if (configObject) {
        return Object.keys(configObject).map((key) => ({ name: key }));
      }
    } catch (e) {}

    return [];
  },
};

const completionSpec: Fig.Spec = {
  name: "yarn",
  description: "Manage packages and run scripts",
  getVersionCommand: "yarn --version",
  availableVersions: ["1", "2"],
};

export default completionSpec;
