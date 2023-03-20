const FILE_OR_FOLDER: Fig.Arg = {
  name: "file",
  description: "The input file",
  template: "filepaths",
};

const completionSpec: Fig.Spec = {
  name: "v",
  description: "The V Programming Language",
  subcommands: [
    {
      name: "run",
      description: "Compile and run the program",
      args: FILE_OR_FOLDER,
    },
    {
      name: "crun",
      description:
        "Compile if executable inexistent or not updated and run the program",
      args: FILE_OR_FOLDER,
    },
    {
      name: "watch",
      description: "Watch the file for changes and recompile",
      args: FILE_OR_FOLDER,
      subcommands: [
        {
          name: "run",
          description: "Run the program after recompiling",
          args: FILE_OR_FOLDER,
        },
      ],
    },
    // Project Scaffolding Utilities
    {
      name: "new",
      description: "Setup the file structure for a V project (in a sub folder)",
    },
    {
      name: "init",
      description: "Setup the file structure for an already existing V project",
    },
    // Commonly used utilities
    {
      name: "test",
      description: "Run all test files in the provided directory",
    },
    {
      name: "fmt",
      description: "Format the V code provided",
      args: FILE_OR_FOLDER,
    },
    {
      name: "vet",
      description: "Report suspicious code constructs",
    },
    {
      name: "doc",
      description: "Generate documentation for a V module",
    },
    {
      name: "vlib-docs",
      description:
        "Generate and open the documentation of all the vlib modules",
    },
    {
      name: "repl",
      description: "Run the REPL",
    },
    {
      name: "where",
      description:
        "Find and print the location of current project declarations",
    },
    // Installation Management Utilities
    {
      name: "symlink",
      description: "Create a symbolic link for V",
    },
    {
      name: "up",
      description: "Run the V self-updater",
    },
    {
      name: "self",
      description: "Run the V self-compiler",
      options: [
        {
          name: "-prod",
          description: "Compile V for production (optimize compilation)",
        },
      ],
    },
    // help command
    {
      name: "help",
      description: "Display help for V",
      args: {
        generators: {
          script: "v help topics",
          postProcess: (out) => {
            return out.split(", ").map((topic, index, { length }) => {
              if (index === 0)
                // remove first sentence before list
                topic = topic.replace("Known help topics: ", "");
              else if (index === length - 1)
                // remove the ending dot
                topic = topic.replace(".", "");
              // remove other which is on "subcommands"
              else if (topic === "other") return;
              return {
                priority: 0,
                name: topic,
                description: 'Display help for "' + topic + '"',
              };
            });
          },
        },
      },
      subcommands: [
        {
          name: "other",
          description: "Display help for less frequently used commands",
        },
        {
          name: "topics",
          description: "Display a list of all known help topics",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for V",
    },
    {
      name: ["version", "--version", "-v"],
      description: "Show V installed version",
    },
  ],
  args: {
    name: "file",
    description: "The file to compile",
    template: "filepaths",
  },
};
export default completionSpec;
