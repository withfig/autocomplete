// To Test:

// Drag this file out of dev/example/ into dev/ and then type "trigger" in the command line

// Known bugs: If you backspace after inserting _prefix_string_for_file_and_folder_suggestions it won't render suggestions

// NOTE: replace _prefix_string_for_file_and_folder_suggestions with whatever prefix you'd like e.g. "s3://"
const _prefix_string_for_file_and_folder_suggestions = "file://";

export const completion: Fig.Spec = {
  name: "trigger_example",
  description: "",
  subcommands: [
    {
      name: "test",
      args: {
        name: "FILE/FOLDER",
        description:
          "must start with " + _prefix_string_for_file_and_folder_suggestions,
        generators: {
          script: (tokens) => {
            var baseLSCommand = "\\ls -1ApL ";
            var whatHasUserTyped = tokens[tokens.length - 1];

            if (
              whatHasUserTyped.startsWith(
                _prefix_string_for_file_and_folder_suggestions
              )
            ) {
              whatHasUserTyped = whatHasUserTyped.slice(7);
            } else {
              return "echo 'file://'";
            }

            // Get the folder path to run ls from based on what user has typed
            var folderPath = "";

            var lastSlashIndex = whatHasUserTyped.lastIndexOf("/");

            if (lastSlashIndex > -1) {
              // User has typed "file://~/abc/def"
              if (whatHasUserTyped.startsWith("~/"))
                folderPath = whatHasUserTyped.slice(0, lastSlashIndex + 1);
              else if (whatHasUserTyped.startsWith("/")) {
                // User has typed "file:///" or "file:///abcde"
                if (lastSlashIndex === 0) folderPath = "/";
                // User has typed "file:///abc/def/..."
                else folderPath = whatHasUserTyped.slice(0, lastSlashIndex + 1);
              }
              // User has typed "file://abc/def/..."
              else folderPath = whatHasUserTyped.slice(0, lastSlashIndex + 1);
            }

            return baseLSCommand + folderPath;
          },
          postProcess: (out) => {
            if (out.trim() === _prefix_string_for_file_and_folder_suggestions) {
              return [
                {
                  name: _prefix_string_for_file_and_folder_suggestions,
                  insertValue: _prefix_string_for_file_and_folder_suggestions,
                },
              ];
            }
            // Sorting function for files and folders. Just alphabetical
            const sortFnStrings = (a, b) => {
              // Use localeCompare.
              return a.localeCompare(b);
            };

            // Sort files and folders by putting non dot files first then "../", then dot files
            const alphabeticalSortFilesAndFolders = (arr) => {
              var dots_arr = [];
              var other_arr = [];

              arr.map((elm) => {
                if (elm.toLowerCase() == ".ds_store") return;
                if (elm.slice(0, 1) === ".") dots_arr.push(elm);
                else other_arr.push(elm);
              });

              // I removed "./" from the centre of this array
              return [
                ...other_arr.sort(sortFnStrings),
                "../",
                ...dots_arr.sort(sortFnStrings),
              ];
            };

            // Create array from output
            var temp_array = alphabeticalSortFilesAndFolders(out.split("\n"));

            var final_array = [];

            // Then loop through them and add them to the final_array depending on the template type
            temp_array.forEach((item) => {
              if (!(item === "" || item === null || item === undefined)) {
                const outputType = item.slice(-1) === "/" ? "folder" : "file";

                // COMMENT THE BELOW IF STATEMENT OUT IF YOU ONLY WANT TO INCLUDE FOLDERS
                // if (outputType == "folder") {
                final_array.push({
                  type: outputType,
                  name: item,
                  insertValue: item,
                });
                // }
              }
            });

            return final_array;
          },
          // trigger: "/",   // This is also valid
          trigger: (newToken, oldToken) => {
            if (
              !newToken.startsWith(
                _prefix_string_for_file_and_folder_suggestions
              )
            )
              return false;
            if (newToken.lastIndexOf("/") !== oldToken.lastIndexOf("/")) {
              return true;
            } else return false;
          },
          // filterTerm: "//",    // This is also valid
          filterTerm: (token) => {
            if (
              !token.startsWith(_prefix_string_for_file_and_folder_suggestions)
            )
              return token;
            return token.slice(token.lastIndexOf("/") + 1);
          },
        },
      },
    },
  ],

  options: [],
  // Only uncomment if abc takes an argument
  // args: {}
};
