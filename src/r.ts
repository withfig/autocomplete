import { filepaths } from "@fig/autocomplete-generators";

const compileFiles = filepaths({
  extensions: ["c", "cc", "cpp", "m", "mm", "M", "f", "f90", "f95"],
});

const rPackages = filepaths({
  extensions: ["tar", "tar.gz", "tzr.bz2", "tar.xz", "tgz"],
});

const RDocGenerator = filepaths({
  extensions: ["Rd"],
  editFileSuggestions: { priority: 76 },
});

const RFileGenerator = filepaths({
  extensions: ["R"],
  editFileSuggestions: { priority: 76 },
});

const RLibGenerator: Fig.Generator = {
  script: ["Rscript", "-e", ".libPaths()"],
  postProcess: (output) => {
    if (output.includes("not found")) {
      return [];
    }
    return output.split("\n").map((lib) => {
      return {
        name: lib.replace(/\d+/, "").replace("[]", "").trim(),
        description: "Library",
      };
    });
  },
};

const helpAndVersionOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description: "Print help message and exit",
    icon: "❔",
  },
  {
    name: ["--version", "-v"],
    description: "Print version info and exit",
    icon: "📣",
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
  description: "Start R or invoke an R tool using CMD",
  icon: "https://www.r-project.org/favicon-32x32.png",
  subcommands: [
    {
      name: "RHOME",
      description: "Print path to R home directory and exit",
    },
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
              generators: RFileGenerator,
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
                requiresSeparator: true,
                args: {
                  name: "LIB",
                  description: "Full name for the built library",
                },
              },
              {
                name: ["--dry-run", "-n"],
                description: "Dry run; shows commands that would be used",
              },
              {
                name: "--use-LTO",
                description: "Use Link-Time Optimization",
                exclusiveOn: ["--no-use-LTO"],
              },
              {
                name: "--no-use-LTO",
                description: "Do not use Link-Time Optimization",
                exclusiveOn: ["--use-LTO"],
              },
              {
                name: ["--debug", "-d"],
                description: "Build a debug DLL (Windows only)",
                icon: "🪲",
              },
            ]),
          args: {
            name: "files",
            description:
              "The object files to be included in the shared object/DLL",
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
                icon: "🪲",
              },
              {
                name: ["--library", "-l"],
                description: "Install packages to library tree LIB",
                requiresSeparator: true,
                args: {
                  name: "LIB",
                  description: "Path to the R library tree to install to",
                  generators: RLibGenerator,
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
                exclusiveOn: ["--no-html"],
              },
              {
                name: "--no-html",
                description: "Do not build HTML help",
                exclusiveOn: ["--html"],
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
                exclusiveOn: ["--lock", "--pkglock"],
              },
              {
                name: "--lock",
                description: "Use a per-library lock directory (default)",
                exclusiveOn: ["--no-lock", "--pkglock"],
              },
              {
                name: "--pkglock",
                description:
                  "Use a per-package lock directory (default for a single package)",
                exclusiveOn: ["--no-lock", "--lock"],
              },
              {
                name: "--build",
                description: "Build binaries of the installed package(s)",
                icon: "🛠",
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
                requiresSeparator: true,
                args: {
                  name: "compression",
                  description: "Compression method",
                  default: "gzip",
                  suggestions: ["gzip", "none", "bzip2", "xz"],
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
                exclusiveOn: ["--without-keep.source"],
              },
              {
                name: "--without-keep.source",
                description: "Do not use 'keep.source' for R code",
                exclusiveOn: ["--with-keep.source"],
              },
              {
                name: "--with-keep.parse.data",
                description: "Use 'keep.parse.data' for R code",
                exclusiveOn: ["--without-keep.parse.data"],
              },
              {
                name: "--without-keep.parse.data",
                description: "Do not 'keep.parse.data' for R code",
                exclusiveOn: ["--with-keep.parse.data"],
              },
              {
                name: "--byte-compile",
                description: "Byte-compile R code",
                exclusiveOn: ["--no-byte-compile"],
              },
              {
                name: "--no-byte-compile",
                description: "Do not byte-compile R code",
                exclusiveOn: ["--byte-compile"],
              },
              {
                name: "--staged-install",
                description:
                  "Install to a temporary directory and then move to the target directory (default)",
                exclusiveOn: ["--staged-install"],
              },
              {
                name: "--no-staged-install",
                description: "Install directly to the target directory",
                exclusiveOn: ["--no-staged-install"],
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
                exclusiveOn: ["--no-use-LTO"],
              },
              {
                name: "--no-use-LTO",
                description: "Do not use Link-Time Optimization",
                exclusiveOn: ["--use-LTO"],
              },
              {
                name: "--configure-args",
                description: "Set arguments for the configure scripts",
                requiresSeparator: true,
                args: {
                  name: "ARGS",
                  description: "Arguments for the configure script",
                },
              },
              {
                name: "--configure-vars",
                description: "Set variables for the configure scripts",
                requiresSeparator: true,
                args: {
                  name: "ARGS",
                  description: "Variables for the configure scripts",
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
                requiresSeparator: true,
                args: {
                  name: "STAMP",
                  description: "A timestamp for the build (Unix only)",
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
            generators: {
              template: "folders",
            },
          },
        },
        {
          name: "REMOVE",
          description: "Remove add-on packages",
          icon: "🗑",
          args: {
            name: "packages",
            description: "Packages to remove",
            isDangerous: true,
            isVariadic: true,
          },
          options: helpAndVersionOptions.concat([
            {
              name: ["--library", "-l"],
              description: "The library tree to remove from",
              requiresSeparator: true,
              args: {
                name: "LIB",
                description: "Library tree",
                generators: RLibGenerator,
              },
            },
          ]),
        },
        {
          name: "build",
          description: "Build R packages from package sources",
          icon: "🛠",
          args: {
            name: "pakgdirs",
            description: "Package directories",
            isVariadic: true,
            generators: {
              template: "folders",
            },
          },
          options: helpAndVersionOptions.concat([
            {
              name: "--force",
              description: "Force removal of INDEX file",
              isDangerous: true,
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
              requiresSeparator: true,
              args: {
                name: "Compression method",
                isOptional: true,
                default: "best",
                suggestions: ["best", "gzip", "no"],
              },
              exclusiveOn: ["--no-resave-data"],
            },
            {
              name: "--no-resave-data",
              description: "Do not save data",
              exclusiveOn: ["--resave-data"],
            },
            {
              name: "--compact-vignettes",
              description: "Try to compact PDF files under 'inst/doc'",
              requiresSeparator: true,
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
              requiresSeparator: true,
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
        {
          name: "check",
          description: "Check R packages from package sources",
          icon: "✅",
          options: helpAndVersionOptions.concat([
            {
              name: ["--library", "-lib"],
              description: "Library used for test installation of packages",
              args: {
                name: "LIB",
                description: "Library tree",
                default: ".",
                generators: {
                  template: "folders",
                },
              },
            },
            {
              name: ["--output", "-o"],
              description: "Directory for output",
              requiresSeparator: true,
              args: {
                name: "directory",
                description: "Directory for output",
                default: ".",
                generators: {
                  template: "folders",
                },
              },
            },
            {
              name: "--no-clean",
              description: "Do not clean 'outdir' before using it",
            },
            {
              name: "--no-codoc",
              description: "Do not check for code/documentation mismatches",
            },
            {
              name: "--no-examples",
              description: "Do not run the examples in the Rd files",
            },
            {
              name: "--no-install",
              description: "Skip installation and associated tests",
            },
            {
              name: "--no-tests",
              description: "Do not run code in 'tests' subdirectory",
            },
            {
              name: "--no-manual",
              description: "Do not produce the PDF manual",
            },
            {
              name: "--no-vignettes",
              description: "Do not run R code in vignettes nor build outputs",
            },
            {
              name: "--no-build-vignettes",
              description: "Do not build vignette outputs",
            },
            {
              name: "--ignore-vignettes",
              description: "Skip all tests on vignettes",
            },
            {
              name: "--run-dontrun",
              description: "Do run `dontrun{}` sections in the Rd files",
            },
            {
              name: "--run-donttest",
              description: "Do run `donttest{}` sections in the Rd files",
            },
            {
              name: "--use-gct",
              description: "Use `gctorture(TRUE)` when running examples, tests",
            },
            {
              name: "--use-valgrind",
              description:
                "Use `valgrind` when running examples, tests, vignettes",
            },
            {
              name: "--timings",
              description: "Record timings for examples",
              icon: "⏱",
            },
            {
              name: "--install-args",
              description: "Command-line args to be passed to INSTALL",
              requiresSeparator: true,
              args: {
                name: "args",
                description: "Command-line args to be passed to INSTALL",
              },
            },
            {
              name: "--test-dir",
              description: "Look in this subdirectory for test scripts",
              requiresSeparator: true,
              args: {
                name: "directory",
                description: "Directory with the tests directory",
                default: "tests",
                generators: {
                  template: "folders",
                },
              },
            },
            {
              name: "--no-stop-on-test-error",
              description: "Do not stop running tests after first error",
            },
            {
              name: "--check-subdirs",
              description: "Run checks on the package subdirectories",
              requiresSeparator: true,
              args: {
                name: "yes-or-no",
                description: "Run checks on subdirectories?",
                default: "default",
                suggestions: ["default", "yes", "no"],
              },
            },
            {
              name: "--as-cran",
              description:
                "Select customizations similar to those used by CRAN",
              icon: "https://www.r-project.org/favicon-32x32.png",
            },
            {
              name: "--extra-arch",
              description:
                "Do only runtime tests needed for an additional sub-architecture",
            },
            {
              name: "--multiarch",
              description: "Do runtime tests on all installed sub-archs",
              exclusiveOn: ["--no-multiarch"],
            },
            {
              name: "--no-multiarch",
              description: "Do runtime tests only on the main sub-architecture",
              exclusiveOn: ["--multiarch"],
            },
            {
              name: "--force-multiarch",
              description:
                "Run tests on all sub-archs even for packages with no compiled code",
              exclusiveOn: ["--no-multiarch"],
            },
          ]),
          args: {
            name: "packages",
            description: "Packages to check",
            isVariadic: true,
            generators: rPackages,
          },
        },
        {
          name: "LINK",
          description: "Perform the specified linkcmd",
          icon: "🔗",
          options: helpAndVersionOptions,
          args: {
            name: "linkcmd",
            description: "Command for linkcmd",
          },
        },
        {
          name: "rprof",
          description: "Post-process profiling information from `Rprof()`",
          icon: "⏱",
          options: helpAndVersionOptions.concat([
            { name: "--lines", description: "Print line information" },
            { name: "--total", description: "Print only by total" },
            { name: "--self", description: "Print only by self" },
            { name: "--linesonly", description: "Print only by line" },
            {
              name: "--min%total",
              description: "Minimum % to print for 'by total'",
              requiresSeparator: true,
              args: {
                name: "min % total",
                description: "Minimum % to print for 'by total'",
                suggestions: ["1", "10", "50"],
              },
            },
            {
              name: "--min%self",
              description: "Minimum % to print for 'by self'",
              requiresSeparator: true,
              args: {
                name: "min % self",
                description: "Minimum % to print for 'by self'",
                suggestions: ["1", "10", "50"],
              },
            },
          ]),
          args: {
            name: "Rprof output file",
            description: "File generated by `Rprof()`",
            isOptional: true,
            default: "Rprof.out",
            generators: { template: "filepaths" },
          },
        },
        {
          name: "Rdconv",
          description: "Convert R documentation to other formats",
          options: helpAndVersionOptions.concat([
            {
              name: ["--type", "-t"],
              description: "Output format type",
              requiresSeparator: true,
              isRequired: true,
              args: {
                name: "type",
                description: "Output format type",
                suggestions: ["txt", "html", "latex", "example"],
              },
            },
            {
              name: "--encoding",
              description: "Encoding of the output",
              requiresSeparator: true,
              args: {
                name: "enc",
                description: "Output encoding",
                default: "UTF-8",
              },
            },
            {
              name: "--package",
              description: "Package name",
              requiresSeparator: true,
              args: {
                name: "package",
                description: "Package name",
              },
            },
            {
              name: ["--output", "-o"],
              description: "The output file",
              requiresSeparator: true,
              args: {
                name: "output file",
                description:
                  "Name of the output file, '\"\"' to use the input file without '.Rd'",
                default: '""',
                suggestions: ['""', "-"],
              },
            },
            {
              name: ["--os", "--OS"],
              description: "Set name of OS ('unix' or 'windows')",
              requiresSeparator: true,
              args: {
                name: "OS",
                description: "Name of the OS",
                suggestions: ["unix", "windows"],
              },
            },
            {
              name: "--RdMacros",
              description: "Packages from which to get Rd macros",
              requiresSeparator: true,
              args: {
                name: "package list",
                description: "List of packages",
              },
            },
          ]),
          args: {
            name: "file",
            description: "R doc file to convert",
            generators: RDocGenerator,
          },
        },
        {
          name: "Rd2pdf",
          description: "Generate PDF output from R documentation files",
          options: helpAndVersionOptions.concat([
            { name: "--batch", description: "No interaction between files" },
            {
              name: "--no-clean",
              description: "Do not remove created temporary files",
            },
            {
              name: "--no-preview",
              description: "Do not preview generated PDF file",
            },
            {
              name: "--encoding",
              description: "Set the default input encoding",
              requiresSeparator: true,
              args: {
                name: "enc",
                description: "Output encoding",
                default: "UTF-8",
              },
            },
            {
              name: "--outputEncoding",
              description: "Set the default output encoding",
              requiresSeparator: true,
              args: {
                name: "enc",
                description: "Output encoding",
                default: "UTF-8",
              },
            },
            {
              name: ["--os", "--OS"],
              description: "Set name of OS ('unix' or 'windows')",
              requiresSeparator: true,
              args: {
                name: "OS",
                description: "Name of the OS",
                suggestions: ["unix", "windows"],
              },
            },
            {
              name: ["--output", "-o"],
              description: "Write output to a file",
              requiresSeparator: true,
              args: {
                name: "file",
                description: "Name of output file",
              },
            },
            {
              name: "--force",
              description: "Overwrite output file if it exists",
              isDangerous: true,
            },
            {
              name: "--title",
              description: "Set the title of the document",
              requiresSeparator: true,
              args: {
                name: "title",
                description: "Title of the document",
              },
            },
            {
              name: "--no-index",
              description: "Do not index output",
            },
            {
              name: "--no-description",
              description: "Do not typeset the description of a package",
            },
            {
              name: "--internals",
              description: "Typeset 'internal' documentation (usually skipped)",
            },
            {
              name: "--build_dir",
              description: "Set the working directory",
              requiresSeparator: true,
              args: {
                name: "working dir",
                description: "Working directory for the build",
                generators: {
                  template: "folders",
                },
              },
            },
            {
              name: "--RdMacros",
              description: "Packages from which to get Rd macros",
              requiresSeparator: true,
              args: {
                name: "package list",
                description: "List of packages",
              },
            },
          ]),
          args: {
            name: "files or pkgs",
            description:
              "Rd files, or a directory with the sources of a pkg, or an installed pkg",
            generators: {
              template: "folders",
            },
          },
        },
        {
          name: "Rd2txt",
          description: "Convert R documentation to text",
          options: helpAndVersionOptions.concat([
            {
              name: ["--type", "-t"],
              description: "Output format type",
              requiresSeparator: true,
              isRequired: true,
              args: {
                name: "type",
                description: "Output format type",
                suggestions: ["txt", "html", "latex", "example"],
                default: "txt",
              },
            },
            {
              name: "--encoding",
              description: "Encoding of the output",
              requiresSeparator: true,
              args: {
                name: "enc",
                description: "Output encoding",
                default: "UTF-8",
              },
            },
            {
              name: "--package",
              description: "Package name",
              icon: "📦",
              requiresSeparator: true,
              args: {
                name: "package",
                description: "Package name",
              },
            },
            {
              name: ["--output", "-o"],
              description: "The output file",
              requiresSeparator: true,
              args: {
                name: "output file",
                description:
                  "Name of the output file, '\"\"' to use the input file without '.Rd'",
                default: '""',
                suggestions: ['""', "-"],
              },
            },
            {
              name: ["--os", "--OS"],
              description: "Set name of OS ('unix' or 'windows')",
              requiresSeparator: true,
              args: {
                name: "OS",
                description: "Name of the OS",
                suggestions: ["unix", "windows"],
              },
            },
            {
              name: "--RdMacros",
              description: "Packages from which to get Rd macros",
              requiresSeparator: true,
              args: {
                name: "package list",
                description: "List of packages",
              },
            },
          ]),
          args: {
            name: "file",
            description: "R doc file to convert",
            generators: RDocGenerator,
          },
        },
        {
          name: "Stangle",
          description: "A front-end for Stangle and other vignette engines",
          options: helpAndVersionOptions.concat([
            {
              name: "--engine",
              description: "Use named vignette engine",
              requiresSeparator: true,
              args: {
                name: "pkg::engine",
                description: "Vignette engine",
                suggestions: ["Stangle", "knitr::knit", "utils::Sweave"],
                default: "Stangle",
              },
            },
            {
              name: "--encoding",
              description: "Set the encoding for file",
              requiresSeparator: true,
              args: {
                name: "enc",
                description: "File encoding",
                default: "UTF-8",
              },
            },
            {
              name: "--options",
              description: "Comma-separated list of Stangle options",
              requiresSeparator: true,
              args: {
                name: "options",
                description: "Options for Stangle",
              },
            },
          ]),
          args: {
            name: "file",
            description: "File to process",
            generators: {
              template: "folders",
            },
          },
        },
        {
          name: "Sweave",
          description: "A front-end for Sweave and other vignette engines",
          options: helpAndVersionOptions.concat([
            {
              name: "--driver",
              description: "Use named Sweave driver",
              requiresSeparator: true,
              args: {
                name: "driver",
                description: "Sweave driver",
              },
            },
            {
              name: "--engine",
              description: "Use named vignette engine",
              requiresSeparator: true,
              args: {
                name: "pkg::engine",
                description: "Vignette engine",
              },
            },
            {
              name: "--encoding=enc",
              description: "Default encoding 'enc' for file",
              requiresSeparator: true,
              args: {
                name: "enc",
                description: "File encoding",
                default: "UTF-8",
              },
            },
            {
              name: "--clean",
              description: "Remove some of the created files",
              icon: "🧹",
              requiresSeparator: true,
              args: {
                name: "method",
                description: "How to clean the results",
                isOptional: true,
                default: "default",
                suggestions: ["default", "keepOuts"],
              },
            },
            {
              name: "--options",
              description: "Comma-separated list of Sweave/engine options",
              requiresSeparator: true,
              args: {
                name: "options",
                description: "Options for Sweave/engine",
              },
            },
            { name: "--pdf", description: "Convert to PDF document" },
            {
              name: "--compact",
              description: "Try to compact PDF document",
              requiresSeparator: true,
              args: {
                name: "Compacting method",
                description: "How to compact the PDF doc",
                isOptional: true,
                default: "qpdf",
                suggestions: ["no", "qpdf", "gs", "gs+qpdf", "both"],
              },
            },
          ]),
          args: {
            name: "file",
            description: "Vignette to build",
            generators: {
              template: "filepaths",
            },
          },
        },
        {
          name: "Rdiff",
          description: "Diff R output files, discarding the R startup message",
          options: helpAndVersionOptions,
          args: [
            {
              name: "from",
              description: "'From' R output file (or '-' for stdin)",
              generators: {
                template: "filepaths",
              },
            },
            {
              name: "to",
              description: "'To' R output file",
              generators: {
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "config",
          description: "Get the value of a basic R configure variable",
          options: helpAndVersionOptions.concat([
            {
              name: "--cppflags",
              description:
                "Print pre-processor flags required to compile a C/C++ file as part of a front-end using R as a library",
            },
            {
              name: "--ldflags",
              description:
                "Print linker flags needed for linking a front-end against the R library",
            },
            {
              name: "--no-user-files",
              description: "Ignore customization files under '~/.R'",
            },
            {
              name: "--no-site-files",
              description: "Ignore site customization files under 'R_HOME/etc'",
            },
            {
              name: "--all",
              description: "Print names and values of all variables",
            },
          ]),
          args: {
            name: "variable",
            description: "R config variable",
            suggestions: [
              "AR",
              "BLAS_LIBS",
              "CC",
              "CFLAGS",
              "CPICFLAGS",
              "CPPFLAGS",
              "CXX",
              "CXXFLAGS",
              "CXXPICFLAGS",
              "CXX11",
              "CXX11STD",
              "CXX11FLAGS",
              "CXX11PICFLAGS",
              "CXX14",
              "CXX14STD",
              "CXX14FLAGS",
              "CXX14PICFLAGS",
              "CXX17",
              "CXX17STD",
              "CXX17FLAGS",
              "CXX17PICFLAGS",
              "CXX20",
              "CXX20STD",
              "CXX20FLAGS",
              "CXX20PICFLAGS",
              "DYLIB_EXT",
              "DYLIB_LD",
              "DYLIB_LDFLAGS",
              "FC",
              "FFLAGS",
              "FCFLAGS",
              "FLIBS",
              "FPICFLAGS",
              "JAR",
              "JAVA",
              "JAVAC",
              "JAVAH",
              "JAVA_HOME",
              "JAVA_LIBS",
              "JAVA_CPPFLAGS",
              "LAPACK_LIBS",
              "LIBnn",
              "LDFLAGS",
              "LTO",
              "MAKE",
              "NM",
              "OBJC",
              "OBJCFLAGS",
              "RANLIB",
              "SAFE_FFLAGS",
              "SHLIB_CFLAGS",
              "SHLIB_CXXFLAGS",
              "SHLIB_CXXLD",
              "SHLIB_CXXLDFLAGS",
              "SHLIB_EXT",
              "SHLIB_FFLAGS",
              "SHLIB_LD",
              "SHLIB_LDFLAGS",
              "TCLTK_CPPFLAGS",
              "TCLTK_LIBS",
            ],
          },
        },
        {
          name: "javareconf",
          description:
            "Detect current Java setup and update the corresponding configuration in R",
          options: helpAndVersionOptions.concat([
            {
              name: ["-n", "--dry-run"],
              description:
                "Perform Java detection, but don't touch any configuration files",
            },
            {
              name: "-e",
              description:
                "Same as -n but exports all detected variables and runs '<prog>'",
              args: {
                name: "program",
                description: "Program to run or '' to use shell",
              },
            },
          ]),
          args: {
            name: "expression",
            description: "Evaluate the corresponding expression",
            isOptional: true,
            suggestions: [
              "JAVA_HOME=/usr/lib/java",
              "JAVAC=/usr/bin/javac",
              "JAR=/usr/bin/jar",
            ],
          },
        },
        {
          name: "rtags",
          description: "Tag C, R, and Rd files under a directory",
          options: helpAndVersionOptions.concat([
            {
              name: ["--output", "-o"],
              description: "Write output to a file",
              args: {
                name: "file",
                description: "Output file name",
                isOptional: true,
              },
            },
            {
              name: "--no-c",
              description: "Do not tag C (.c, .h) files",
            },
            {
              name: "--no-R",
              description: "Do not tag R (.R, .r, .S, .s) files",
            },
            {
              name: "--no-Rd",
              description: "Do not tag Rd (.Rd) files",
            },
            {
              name: "--ctags",
              description: "Write Ctags format (default is Etags)",
            },
            {
              name: ["--append", "-a"],
              description: "Append to output file (overwrites by default)",
            },
            {
              name: ["--verbose", "-V"],
              description: "Echo the name of files processed",
            },
          ]),
          args: {
            name: "path",
            description: "Directory in which files will be tagged",
            isOptional: true,
            default: ".",
          },
        },
      ],
    },
  ],
  options: helpAndVersionOptions.concat([
    {
      name: "--encoding",
      description: "Specify encoding to be used for stdin",
      requiresSeparator: true,
      args: {
        name: "encoding",
        suggestions: ["UTF-8"],
      },
    },
    {
      name: "--save",
      description: "Save workspace at the end of the session",
      exclusiveOn: ["--no-save", "--vanilla"],
    },
    {
      name: "--no-save",
      description: "Do not save workspace at the end of the session",
      exclusiveOn: ["--save"],
    },
    {
      name: "--no-environ",
      description: "Do not read the site and user environment files",
    },
    {
      name: "--no-site-file",
      description: "Do not read the site-wide Rprofile",
    },
    {
      name: "--no-init-file",
      description: "Do not read the user R profile",
    },
    {
      name: "--restore",
      description: "Do restore previously saved objects at startup",
      exclusiveOn: ["--no-restore-data", "--vanilla"],
    },
    {
      name: "--no-restore-data",
      description: "Do not restore previously saved objects",
      exclusiveOn: ["--restore"],
    },
    {
      name: "--no-restore-history",
      description: "Do not restore the R history file",
    },
    {
      name: "--no-restore",
      description: "Do not restore anything",
    },
    {
      name: "--vanilla",
      description:
        "Combine --no-save, --no-restore, --no-site-file, --no-init-file and --no-environ",
      exclusiveOn: ["--save", "--restore"],
    },
    {
      name: "--no-readline",
      description: "Do not use readline for command-line editing",
    },
    {
      name: "--max-ppsize",
      description: "Set max size of protect stack",
      requiresSeparator: true,
      args: {
        name: "max size",
        description: "Max size of protect stack",
      },
    },
    {
      name: "--min-nsize",
      description: "Set min number of fixed size obj's ('cons cells')",
      requiresSeparator: true,
      args: {
        name: "min size",
        description: "Minimum number of fixed size objects",
      },
    },
    {
      name: "--min-vsize",
      description: "Set vector heap minimum (in bytes or '4M' = 4 MegaB)",
      requiresSeparator: true,
      args: {
        name: "min vsize",
        description: "Minimum vector heap size",
      },
    },
    {
      name: ["--quiet", "--silent", "-q"],
      description: "Do not print startup message",
      exclusiveOn: ["--verbose"],
    },
    {
      name: ["--no-echo", "-s"],
      description: "Make R run as quietly as possible",
    },
    {
      name: "--interactive",
      description: "Force an interactive session",
    },
    {
      name: "--verbose",
      description: "Print more information about progress",
      icon: "📣",
      exclusiveOn: ["--quiet", "--silent", "-q", "--no-echo", "-s"],
    },
    {
      name: ["--debugger", "-d"],
      description: "Run R through a debugger",
      icon: "🪲",
      requiresSeparator: true,
      args: {
        name: "debugger",
        description: "Debugger to use",
      },
    },
    {
      name: "--debugger-args",
      description: "Pass arguments to the debugger",
      requiresSeparator: true,
      args: {
        name: "args",
        description: "Arguments for the debugger",
      },
    },
    {
      name: ["--gui", "-g"],
      description: "Type of GUI to use",
      requiresSeparator: true,
      args: {
        name: "gui",
        description: "Type of GUI",
        suggestions: ["X11", "Tk"],
        default: "X11",
      },
    },
    {
      name: "--arch",
      description: "Specify a sub-architecture",
      requiresSeparator: true,
      args: {
        name: "arch",
        description: "Sub-architecture",
      },
    },
    {
      name: "--args",
      description: "Skip the rest of the command line",
    },
    {
      name: ["--file", "-f"],
      description: "Take input from a file",
      requiresSeparator: true,
      args: {
        name: "file",
        description: "File to run",
        generators: RFileGenerator,
      },
    },
    {
      name: "-e",
      description: "Execute and R expression and exit",
      requiresSeparator: true,
      args: {
        name: "expr",
        description: "Expression to evaluate",
      },
    },
  ]),
};

export default completionSpec;

// TODO: at end, add icons where appropriate
