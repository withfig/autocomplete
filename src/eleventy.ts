// Author: Yavko
const completionSpec: Fig.Spec = {
  name: "eleventy",
  icon: "https://www.11ty.dev/favicon.ico",
  description: "Eleventy is a simpler static site generator",
  args: {
    template: "folders",
  },
  options: [
    {
      description: "Show help message and exit",
      name: ["-h", "--help"],
    },
    {
      description: "Show program's version number and exit",
      name: ["-v", "--version"],
    },
    {
      description: "Don’t print all written files",
      name: "--quiet",
    },
    {
      description: "Wait for files to change and automatically rewrite",
      name: "--watch",
    },
    {
      description: "Don’t write any files",
      name: "--dryrun",
    },
    {
      description: "Input template files",
      name: "--input",
      args: {
        name: "Template File",
        template: "filepaths",
      },
    },
    {
      description: "Write HTML output to this folder",
      name: "--output",
      args: {
        template: "folders",
      },
    },
    {
      description: "Run web server on port and watch them too",
      name: "--serve",
      dependsOn: ["--port"],
    },
    {
      description: "Run Web Server on specified port",
      name: "--port",
      args: {
        name: "port",
        default: "8080",
      },
    },
    {
      description: "Whitelist only certain template types",
      name: "--formats",
      args: {
        name: "Template Names Separated by ,",
        suggestions: ["md", "html", "ejs"],
      },
    },
    {
      description: "Override the eleventy config file path",
      name: "--config",
      args: {
        name: "Config File",
        template: "filepaths",
      },
    },
    {
      description: "Change all url template filters to use this subdirectory",
      name: "--pathprefix",
      args: {
        name: "Subdirectory",
        template: "folders",
      },
    },
  ],
};
export default completionSpec;
