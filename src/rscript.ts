import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "Rscript",
  description: "Scripting Front-End for R",
  icon: "https://www.r-project.org/favicon-32x32.png",
  options: [
    {
      name: "-e",
      description: "R expression to run",
      isRepeatable: true,
      args: {
        name: "expression",
        description: "R expression",
      },
    },
    {
      name: "--help",
      description: "Print usage and exit",
      icon: "❔",
    },
    {
      name: "--version",
      description: "Print version and exit",
    },
    {
      name: "--verbose",
      description: "Print information on progress",
      icon: "📣",
    },
    {
      name: "--no-echo",
      description: "Run as quietly as possible",
      icon: "🙊",
    },
    {
      name: "--no-restore",
      description: "Don't restore anything",
    },
    {
      name: "--save",
      description: "Do save workspace at the end of the session",
      icon: "💾",
    },
    {
      name: "--no-environ",
      description: "Don't read the site and user environment files",
    },
    {
      name: "--no-site-file",
      description: "Don't read the site-wide Rprofile",
    },
    {
      name: "--no-init-file",
      description: "Don't read the user R profile",
    },
    {
      name: "--restore",
      description: "Do restore previously saved objects at startup",
    },
    {
      name: "--vanilla",
      description:
        "Combine --no-save, --no-restore, --no-site-file --no-init-file and --no-environ",
    },
    {
      name: "--default-packages",
      description: "Comma separated list of default packages",
      requiresSeparator: true,
      icon: "📦",
      args: {
        name: "packages",
        description: "A comma-separated set of package names, or 'NULL'",
      },
    },
  ],
  args: [
    {
      name: "file",
      description: "R script to run",
      isScript: true,
      generators: filepaths({
        extensions: ["R"],
        editFileSuggestions: { priority: 76 },
      }),
    },
    {
      name: "args",
      description: "Arguments to pass to the script",
      isVariadic: true,
    },
  ],
};

export default completionSpec;
