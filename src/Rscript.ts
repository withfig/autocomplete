const completionSpec: Fig.Spec = {
  name: "Rscript",
  description: "Scripting Front-End for R",

  options: [
    {
      name: "-e",
      description: "R expression to run",
      icon: "https://www.r-project.org/favicon-32x32.png",
      isRepeatable: true,
      args: {},
    },
    {
      name: "--help",
      description: "Print usage and exit",
    },
    {
      name: "--version",
      description: "Print version and exit",
    },
    {
      name: "--verbose",
      description: "Print information on progress",
    },
    {
      name: "--no-echo",
      description: "Run as quietly as possible",
    },
    {
      name: "--no-restore",
      description: "Don't restore anything",
    },
    {
      name: "--save",
      description: "Do save workspace at the end of the session",
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
      requiresEquals: true,
      icon: "📦",
      args: {
        name: "packages",
        description: "A comma-separated set of package names, or 'NULL'",
        isOptional: false,
      },
    },
  ],
  args: [
    {
      name: "file",
      description: "R script to run",
      isScript: true,
      generators: {
        template: "filepaths",
        filterTemplateSuggestions: function (paths) {
          return paths
            .filter((file) => {
              return file.name.endsWith(".R") || file.name.endsWith("/");
            })
            .map((file) => {
              const isRFile = file.name.endsWith(".R");

              return {
                ...file,
                priority: isRFile && 76,
              };
            });
        },
      },
    },
    {
      name: "args",
      description: "Arguments to pass to the script",
    },
  ],
};

export default completionSpec;
