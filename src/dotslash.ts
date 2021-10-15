const completionSpec: Fig.Spec = {
  name: "dotslash",
  args: {
    // This was previously just "filepaths", however, we added folders so
    // users of ohmyzsh could cd into a folder by typing the folder name without `cd`
    template: ["filepaths", "folders"],
  },
};

// const dotslashGenerator: Fig.Generator = {
//   script: function (context) {
//     let path = context[context.length - 1];

//     if (path.includes("/")) {
//       const components = path.split("/");
//       components.pop();
//       path = components.join("/");
//     } else {
//       path = ".";
//     }

//     // escape spaces in path
//     path = path.split(" ").join("\\");

//     // output full filepath for each item in `path` folder
//     return `ls -1AF ${path} | xargs -I '{}' echo $PWD/{} `;
//   },

//   postProcess: function (files) {
//     return files.split("\n").map((path) => {
//       const components = path.split("/");
//       let filename = components[components.length - 1];
//       const isExecutable = path.endsWith("*");
//       const isFolder = path.endsWith("/");

//       if (isFolder) {
//         filename = components[components.length - 2] + "/";
//       }

//       // Removes character at the end of the filepath
//       if (["@", "*", "%", "|"].includes(path.slice(-1))) {
//         filename = filename.slice(0, -1);
//       }

//       return {
//         name: filename,
//         icon: "fig://" + path,
//         description: isFolder ? "folder" : "file",
//         priority: isExecutable && 80,
//       };
//     });
//   },
//   trigger: "/",
//   getQueryTerm: "/",
// };

// export const completionSpec: Fig.Spec = {
//   name: "dotslash",
//   args: {
//     // This was previously just "filepaths", however, we added folders so
//     // users of ohmyzsh could cd into a folder by typing the folder name without `cd`
//     generators: [dotslashGenerator],
//   },
// };

export default completionSpec;
