// To learn more about Fig's autocomplete standard visit: https://withfig.com/docs/autocomplete/building-a-spec#building-your-first-autocomplete-spec

// The below is a dummy example for git. Make sure to change the file name!
export const completion: Fig.Spec = {
  name: "php",
  description: "Run the PHP interpreter",
  generateSpec: async (context, executeShellCommand) => {
    if (true)
      return {
        name: "php",
        subcommands: [{ name: "artisan", loadSpec: "php/artisan" }],
      };
  },
  subcommands: [{ name: "test1" }, { name: "test2" }],

  // args: {
  //   generators: {
  //     template: "filepaths",
  //     filterTemplateSuggestions: function (suggestions) {
  //       return suggestions.filter((suggestion) => {
  //         return (
  //           // suggestion.name.endsWith(".php") ||
  //           suggestion.name.indexOf(".") === -1
  //         );
  //       });
  //     },
  //   },
  // },
};

// var completionSpec = {
//   name: "php",
//   description: "Run the PHP interpreter",

//   },
//   subcommands: [
//     {
//       name: "artisan",
//       description: "",
//       options: [],
//       args: [
//         {
//           generators: {
//             script: "php artisan list --format=json",
//             postProcess: function (out) {
//               if (out.trim() == "") {
//                 return [];
//               }
//               try {
//                 const commands = JSON.parse(out);

//                 const artisanCommands = [];

//                 commands.commands.map((command) => {
//                   artisanCommands.push({
//                     name: command.name,
//                     description: command.description,
//                     icon: "https://web.tinkerwell.app/img/laravel.3cab6a56.png",
//                   });
//                 });

//                 return artisanCommands;
//               } catch (e) {}
//               return [];
//             },
//           },
//         },
//       ],
//     },
//   ],
// };
