//prettier-ignore
import { deserialize } from "node:v8";

var remotegenerators = {
  servicesgenerators: {
    script: "tfenv list-remote",
    postProcess: function (out) {
      return out.split("\n").map(function (line) {
        return { name: line, type: "option" };
      });
    },
  },
};

var localgenerators = {
  servicesgenerators: {
    script: "tfenv list",
    postProcess: function (out) {
      return out.split("\n").map((tfversion) => {
        return { name: tfversion, description: "Version" };
      });
    },
  },
};

// {
//   script: "git branch -l",
//   postProcess: function(out) {
//     return out.split('\n').map(branch => {
//       return { name: branch, description: "branch"}
//     })
//   }
// }
export const completion: Fig.Spec = {
  // var completionSpec = {
  name: "tfenv",
  description: "Terraform version manager",
  subcommands: [
    {
      name: "install",
      description: "Install a specific version of Terraform",
      args: [
        {
          name: "version",
          description: "Possible Terraform Version",
          suggestions: ["latest", "min-required"],
          generators: remotegenerators.servicesgenerators,
        },
      ],
    },
    {
      name: "use",
      description: "Swith to a version to use",
      args: {
        name: "version",
        description: "Installed Terraform Version",
        generators: localgenerators.servicesgenerators,
      },
    },
    {
      name: "uninstall",
      description: "Uninstall a specific version of Terraform",
      args: {
        name: "version",
        description: "Installed Terraform Version",
        generators: localgenerators.servicesgenerators,
      },
    },
    {
      name: "list",
      description: "List all installed versions",
    },
    {
      name: "list-remote",
      description: "List all installable versions",
    },
    {
      name: "version-name",
      description: "Print current version",
    },
    {
      name: "init",
      description: "Update environment to use tfenv correctly",
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "View your current tfenv version",
    },
    {
      name: ["--help"],
      description: "View commands",
    },
  ],
};

// // To learn more about Fig's autocomplete standard visit: https://fig.io/docs/autocomplete/building-a-spec#building-your-first-autocomplete-spec
// // The below is a dummy example for git. Make sure to change the file name!
// var completionSpec = {
//   name: "tfenv",
//   description: "Terraform version manager",
//   subcommands: [
//     {
//       name: "install",
//       description: "Install a specific version of Terraform",
//       // If a subcommand or option takes an argument, you must include the args prop, even if it's an empty object (like below)
//       // If you want to build custom suggestions for arguments check out: https://fig.io/docs/autocomplete/building-a-spec#making-advanced-suggestions
//       args: {
//         variadic: false,
//         name: "version",
//         description: "specific version",
//         generators: {
//           script: "HBPATH=$(tfenv list-remote)",
//         },
//       },
//       // options: [
//       //     {
//       //         name: ["-b"],
//       //         description: "create and checkout a new branch",
//       //         args: {
//       //             name: "branch",
//       //         },
//       //     },
//       // ],
//     },
//     {
//       name: "use",
//       description: "Switch to a version to use",
//     },
//     {
//       name: "uninstall",
//       description: "Uninstall a specific version of Terraform",
//     },
//     {
//       name: "list",
//       description: "List all installed versions",
//     },
//     {
//       name: "list-remote",
//       description: "List all installable versions",
//     },
//     {
//       name: "version-name",
//       description: "Print current version",
//     },
//     {
//       name: "init",
//       description: "Update environment to use tfenv correctly",
//     },
//   ],
//   options: [
//     {
//       name: ["-v", "--version"],
//       description: "View your current git version",
//     },
//   ],
// };

// // Commands:
// //    install       Install a specific version of Terraform
// //    use           Switch a version to use
// //    uninstall     Uninstall a specific version of Terraform
// //    list          List all installed versions
// //    list-remote   List all installable versions
// //    version-name  Print current version
// //    init          Update environment to use tfenv correctly.
