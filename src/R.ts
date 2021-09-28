const compileFiles: Fig.Generator = {
  template: "filepaths",
  filterTemplateSuggestions: function (paths) {
    const possibleSuffixes: string[] = [
      ".c",
      ".cc",
      ".cpp",
      ".m",
      ".mm",
      ".M",
      ".f",
      ".f90",
      ".f95",
    ];
    return paths
      .filter((file) => {
        for (let idx = 0; idx < possibleSuffixes.length; idx++) {
          const element = possibleSuffixes[idx];
          if (file.name.endsWith(element)) {
            return true;
          }
        }
        return false;
      })
      .map((file) => {
        const isRFile = file.name.endsWith(".R");

        return {
          ...file,
          priority: isRFile && 76,
        };
      });
  },
};

const folders: Fig.Generator = {
  template: "folders",
};

const helpAndVersionOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description: "Print help message and exit",
  },
  {
    name: ["--version", "-v"],
    description: "Print version info and exit",
  },
];

const cleanAndPrecleanOptions: Fig.Option[] = [
  {
    name: ["--clean", "-c"],
    description: "Remove files created during compilation",
  },
  {
    name: "--preclean",
    description: "Remove files created during a previous run",
  },
];

const completionSpec: Fig.Spec = {
  name: "R",
  description: "Start R or invoke an R tool",
  subcommands: [
    {
      name: "CMD",
      description: "Invoke an R tool",
      subcommands: [
        {
          name: "BATCH",
          description: "Batch Execution of R",
          options: helpAndVersionOptions.concat([
            {
              name: "--no-timing",
              description: "Do not report the timings",
            },
            {
              name: "--",
              description: "End processing of options",
            },
          ]),
          args: [
            {
              name: "infile",
              description: "A file with R code to be executed",
              isOptional: false,
            },
            {
              name: "outfile",
              description:
                "A file to which to write output. If not given, the name used is that of infile, with a possible .R extension stripped, and .Rout appended",
            },
          ],
        },
        {
          name: "COMPILE",
          description:
            "Compile files for use with R (not available on Windows)",
          options: helpAndVersionOptions,
          args: {
            name: "files",
            description: "Source files to be compiled",
            isOptional: false,
            isVariadic: true,
            generators: compileFiles,
          },
        },
        {
          name: "SHLIB",
          description:
            "Compile the given source files and then link all specified object files",
          options: helpAndVersionOptions
            .concat(cleanAndPrecleanOptions)
            .concat([
              {
                name: ["--output", "-o"],
                description: "Name for the built library",
                requiresEquals: true,
                args: {
                  name: "LIB",
                  description: "Full name for the built library",
                  isOptional: false,
                },
              },
              {
                name: ["--dry-run", "-n"],
                description: "Dry run; shows commands that would be used",
              },
              {
                name: "--use-LTO",
                description: "Use Link-Time Optimization",
              },
              {
                name: "--no-use-LTO",
                description: "Do not use Link-Time Optimization",
              },
              {
                name: ["--debug", "-d"],
                description: "Build a debug DLL (Windows only)",
              },
            ]),
          args: {
            name: "files",
            description:
              "The object files to be included in the shared object/DLL",
            isOptional: false,
            isVariadic: true,
            generators: compileFiles,
          },
        },
        {
          name: "INSTALL",
          description: "Utility for installing add-on packages",
          options: helpAndVersionOptions
            .concat(cleanAndPrecleanOptions)
            .concat([
              {
                name: ["--debug", "-d"],
                description: "Turn on debugging messages",
              },
              {
                name: ["--library", "-l"],
                description: "Install packages to library tree LIB",
                requiresEquals: true,
                args: {
                  name: "LIB",
                  description: "Path to the R library tree to install to",
                  isOptional: false,
                },
              },
              {
                name: "--no-configure",
                description: "Do not use the package's configure script",
              },
              {
                name: "--no-docs",
                description: "Do not install HTML, LaTeX or examples help",
              },
              {
                name: "--html",
                description: "Build HTML help",
              },
              {
                name: "--no-html",
                description: "Do not build HTML help",
              },
              {
                name: "--latex",
                description: "Install LaTeX help",
              },
              {
                name: "--example",
                description: "Install R code for help examples",
              },
              {
                name: "--fake",
                description: "Do minimal install for testing purposes",
              },
              {
                name: "--no-lock",
                description:
                  "Install on top of any existing installation without using a lock directory",
              },
              {
                name: "--lock",
                description: "Use a per-library lock directory (default)",
              },
              {
                name: "--pkglock",
                description:
                  "Use a per-package lock directory (default for a single package)",
              },
              {
                name: "--build",
                description: "Build binaries of the installed package(s)",
              },
              {
                name: "--install-tests",
                description: "Install package-specific tests (if any)",
              },
              {
                name: "--no-R",
                description: "Suppress installation of the package R code",
              },
              {
                name: "--no-libs",
                description: "Suppress installation of the package libs",
              },
              {
                name: "--no-data",
                description: "Suppress installation of the package data",
              },
              {
                name: "--no-help",
                description: "Suppress installation of the package help",
              },
              {
                name: "--no-demo",
                description: "Suppress installation of the package demo",
              },
              {
                name: "--no-exec",
                description: "Suppress installation of the 'exec' directory",
              },
              {
                name: "--no-inst",
                description: "Suppress installation of the 'inst' directory",
              },
              {
                name: "--no-multiarch",
                description: "Build only the main architecture",
              },
              {
                name: "--libs-only",
                description: "Only install the libs directory",
              },
              {
                name: "--data-compress",
                description: "Compression to be used for lazy-loading of data",
                requiresEquals: true,
                args: {
                  name: "compression",
                  description:
                    "Compression method: 'gzip' (default), 'none', 'bzip2' 'xz'",
                  default: "gzip",
                },
              },
              {
                name: "--resave-data",
                description: "Re-save data files as compactly as possible",
              },
              {
                name: "--compact-docs",
                description: "Re-compress PDF files under inst/doc",
              },
              {
                name: "--with-keep.source",
                description: "'keep.source' for R code",
              },
              {
                name: "--without-keep.source",
                description: "Do not use 'keep.source' for R code",
              },
              {
                name: "--with-keep.parse.data",
                description: "Use 'keep.parse.data' for R code",
              },
              {
                name: "--without-keep.parse.data",
                description: "Do not 'keep.parse.data' for R code",
              },
              {
                name: "--byte-compile",
                description: "Byte-compile R code",
              },
              {
                name: "--no-byte-compile",
                description: "Do not byte-compile R code",
              },
              {
                name: "--staged-install",
                description:
                  "Install to a temporary directory and then move to the target directory (default)",
              },
              {
                name: "--no-staged-install",
                description: "Install directly to the target directory",
              },
              {
                name: "--no-test-load",
                description: "Skip test of loading installed package",
              },
              {
                name: "--no-clean-on-error",
                description: "Do not remove installed package on error",
              },
              {
                name: "--merge-multiarch",
                description:
                  "Multi-arch by merging (from a single tarball only)",
              },
              {
                name: "--use-vanilla",
                description: "Do not read any Renviron or Rprofile files",
              },
              {
                name: "--use-LTO",
                description: "Use Link-Time Optimization",
              },
              {
                name: "--no-use-LTO",
                description: "Do not use Link-Time Optimization",
              },
              {
                name: "--configure-args",
                description: "Set arguments for the configure scripts",
                requiresEquals: true,
                args: {
                  name: "ARGS",
                  description: "Arguments for the configure script",
                  isOptional: false,
                },
              },
              {
                name: "--configure-vars",
                description: "Set variables for the configure scripts",
                requiresEquals: true,
                args: {
                  name: "ARGS",
                  description: "Variables for the configure scripts",
                  isOptional: false,
                },
              },
              {
                name: "--strip",
                description: "Strip shared object(s) (Unix only)",
              },
              {
                name: "--strip-lib",
                description:
                  "Strip static/dynamic libraries under 'lib/' (Unix only)",
              },
              {
                name: "--dsym",
                description: "Generate dSYM directory (macOS only)",
              },
              {
                name: "--built-timestamp",
                description:
                  "Set timestamp for 'Built' entry in DESCRIPTION (Unix only)",
                requiresEquals: true,
                args: {
                  name: "STAMP",
                  description: "A timestamp for the build (Unix only)",
                  isOptional: false,
                },
              },
              {
                name: "--force-biarch",
                description:
                  "Attempt to build both architectures (Windows only)",
              },
              {
                name: "--compile-both",
                description:
                  "Compile both architectures on 32-bit Windows (Windows only)",
              },
            ]),
          args: {
            name: "packages",
            description: "Directories with the package sources",
            isOptional: false,
            generators: {
              template: "filepaths",
              filterTemplateSuggestions: function (paths) {
                return paths
                  .filter((file) => {
                    return (
                      file.name.endsWith(".tar.gz") || file.name.endsWith("/")
                    );
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
        },
        {
          name: "REMOVE",
          description: "Remove add-on packages",
          args: {
            name: "packages",
            description: "Packages to remove",
            isOptional: false,
            isDangerous: true,
            isVariadic: true,
          },
          options: helpAndVersionOptions.concat([
            {
              name: ["--library", "-l"],
              description: "The library tree to remove from",
              requiresEquals: true,
              args: {
                name: "LIB",
                description: "Library tree",
              },
            },
          ]),
        },
        {
          name: "build",
          description: "Build R packages from package sources",
          args: {
            name: "pakgdirs",
            description: "Package directories",
            isVariadic: true,
            generators: folders,
          },
          options: helpAndVersionOptions.concat([
            {
              name: "--force",
              description: "Force removal of INDEX file",
            },
            {
              name: "--keep-empty-dirs",
              description: "Do not remove empty dirs",
            },
            {
              name: "--no-build-vignettes",
              description: "Do not (re)build package vignettes",
            },
            {
              name: "--no-manual",
              description: "Do not build the PDF manual",
            },
            {
              name: "--resave-data",
              description: "Re-save data files as compactly as possible",
              requiresEquals: true,
              args: {
                name: "Compression method",
                isOptional: true,
                default: "best",
                suggestions: ["best", "gzip", "no"],
              },
            },
            {
              name: "--no-resave-data",
              description: "Do not save data",
            },
            {
              name: "--compact-vignettes",
              description: "Try to compact PDF files under 'inst/doc'",
              requiresEquals: true,
              args: {
                name: "Compression method",
                isOptional: true,
                default: "no",
                suggestions: ["no", "qpdf", "gs", "gs+qpdf", "both"],
              },
            },
            {
              name: "--compression",
              description: "Type of compression to be used on tarball",
              requiresEquals: true,
              args: {
                name: "Compression method",
                isOptional: true,
                default: "gzip",
                suggestions: ["gzip", "none", "bzip2", "xz"],
              },
            },
            {
              name: "--md5",
              description: "Add MD5 sums",
            },
            {
              name: "--log",
              description:
                "Log to file 'pkg-00build.log' when processing the pkgdir with basename 'pkg'",
            },
          ]),
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for R",
    },
  ],
  // Only uncomment if R takes an argument
  // args: {}
};

export default completionSpec;
