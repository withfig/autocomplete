// https://github.com/psf/black
const blackVersions: Fig.Generator = {
  script: ["gh", "release", "list", "--repo", "psf/black"],
  cache: {
    ttl: 1000 * 60 * 60 * 24 * 2, // 2 days
  },
  postProcess: (output) => {
    if (!output.includes("Latest")) {
      return [];
    }

    return output.split("\n").map((line) => {
      return { name: line.split("\t")[0], description: "Version" };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "black",
  description: "Python code formatter",
  args: {
    name: "file or directory",
    template: "filepaths",
    isVariadic: true,
  },
  options: [
    {
      name: ["--code", "-c"],
      description: "Format the code passed in as a string",
      args: {
        name: "string",
      },
    },
    {
      name: ["--line-length", "-l"],
      description: "How many characters per line to allow",
      args: {
        name: "line length",
        default: "88",
      },
    },
    {
      name: ["--target-version", "-t"],
      description: "Python versions that should be supported",
      isRepeatable: true,
      args: {
        name: "python version",
        suggestions: [
          "py33",
          "py34",
          "py35",
          "py36",
          "py37",
          "py38",
          "py39",
          "py310",
        ],
        default: "per-file auto-detection",
      },
    },
    {
      name: "--pyi",
      description: "Format all input files regardless of file extension",
    },
    {
      name: "--ipynb",
      description:
        "Format all input files like Jupyter Notebooks regardless of file extension",
    },
    {
      name: "--python-cell-magics",
      description: "Add the given magic to the list of known python-magics",
      isRepeatable: true,
      args: {
        name: "python-magic",
        suggestions: [
          "python",
          "python3",
          "timeit",
          "prun",
          "time",
          "pypy",
          "capture",
        ],
      },
    },
    {
      name: ["--skip-string-normalization", "-S"],
      description: "Don't normalize string quotes or prefixes",
    },
    {
      name: ["--skip-magic-trailing-comma", "-C"],
      description: "Don't use trailing commas as a reason to split lines",
    },
    {
      name: "--preview",
      description: "Enable potentially disruptive style changes",
    },
    {
      name: "--check",
      description: "Don't write the files back, just return the status",
    },
    {
      name: "--diff",
      description:
        "Don't write the files back, just output a diff for each file on stdout",
    },
    {
      name: "--color",
      description: "Show colored diff",
      exclusiveOn: ["--no-color"],
      dependsOn: ["--diff"],
    },
    {
      name: "--no-color",
      description: "Show uncolored diff",
      exclusiveOn: ["--color"],
      dependsOn: ["--diff"],
    },
    {
      name: "--fast",
      description: "Skip temporary sanity checks",
      exclusiveOn: ["--safe"],
    },
    {
      name: "--safe",
      description: "Run temporary sanity checks",
      exclusiveOn: ["--fast"],
    },
    {
      name: "--required-version",
      description: "Require a specific version of Black",
      args: {
        name: "version",
        generators: blackVersions,
      },
    },
    {
      name: "--include",
      description:
        "Regex that matches files and directories that should be included on recursive searches",
      args: {
        name: "Regex",
      },
    },
    {
      name: "--exclude",
      description:
        "Regex that matches files and directories that should be excluded on recursive searches",
      args: {
        name: "Regex",
      },
    },
    {
      name: "--extend-exclude",
      description: "Additional exlusions",
      args: {
        name: "Regex",
      },
    },
    {
      name: "--force-exclude",
      description:
        "Exlude matching files and folders even when passed explicitly",
      args: {
        name: "Regex",
      },
    },
    {
      name: "--stdin-filename",
      description: "The name of the file when passing it through stdin",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["--workers", "-W"],
      description: "Number of parallel workers",
      args: {
        name: "integer",
        default: "2",
      },
    },
    {
      name: ["--quiet", "-q"],
      description: "Don't emit non-error messages to stderr",
    },
    {
      name: ["--verbose", "-v"],
      description:
        "Also emit messages about files that were not changed or were ignored due to exclusion patterns",
    },
    {
      name: "--version",
      description: "Show the version",
    },
    {
      name: "--config",
      description: "Read configuration from filepath",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Show usage information",
    },
  ],
};

export default completionSpec;
