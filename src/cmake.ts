const completion: Fig.Spec = {
  name: "cmake",
  description:
    "Command-line interface of the cross-platform buildsystem generator CMake",
  subcommands: [
    {
      name: "--build",
      description:
        "Project binary directory to be built and must be first. This is required unless a preset is specified",
      args: {
        name: "dir",
        template: "folders",
        isOptional: true,
      },
      options: [
        {
          name: "--preset",
          description: "Use a build preset to specify build options",
          args: {
            name: "preset",
          },
        },
        {
          name: "--list-presets",
          description:
            "Lists the available presets. If no option is specified only configure presets will be listed. The current working directory must contain CMake preset files",
        },
        {
          name: ["--parallel", "-j"],
          description:
            "The maximum number of concurrent processes to use when building. If <jobs> is omitted the native build tool's default number is used",
          args: {
            name: "jobs",
            isOptional: true,
          },
        },
        {
          name: ["--target", "-t"],
          description:
            "Build <tgt> instead of the default target. Multiple targets may be given, separated by spaces",
          args: {
            name: "target",
            isVariadic: true,
          },
        },
        {
          name: "--config",
          description:
            "For multi-configuration tools, choose configuration <cfg>",
          args: {
            name: "cfg",
          },
        },
        {
          name: "--clean-first",
          description: "Build target clean first, then build",
        },
        {
          name: "--use-stderr",
          description: "Ignored. Behavior is default in CMake >= 3.0",
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Enable verbose output - if supported - including the build commands to be executed",
        },
        {
          name: "--",
          description: "Pass remaining options to the native tool",
        },
      ],
    },
    {
      name: "--install",
      description:
        "Project binary directory to install. This is required and must be first",
      args: {
        name: "dir",
        template: "folders",
      },
      options: [
        {
          name: "--config",
          description: "For multi-configuration generators",
          args: {
            name: "cfg",
          },
        },
        {
          name: "--component",
          description:
            "Component-based install. Only install component specified",
          args: {
            name: "cfg",
          },
        },
        {
          name: "--default-directory-permissions",
          description: "Default directory install permissions",
          args: {
            name: "permissions",
            description: "Format: <u=rwx,g=rx,o=rx>",
          },
        },
        {
          name: "--prefix",
          description: "Override the installation prefix",
          args: {
            name: "prefix",
          },
        },
        {
          name: "--strip",
          description: "Strip before installing",
        },
        {
          name: ["--verbose", "-v"],
          description: "Enable verbose output",
        },
      ],
    },
    {
      name: "--open",
      description:
        "Open the generated project in the associated application. This is only supported by some generators",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "-P",
      description:
        "Process the given cmake file as a script written in the CMake language. No configure or generate step is performed and the cache is not modified. If variables are defined using -D, this must be done before the -P argument",
      args: {
        name: "cmake script file",
        template: "filepaths",
      },
    },
    {
      name: "-E",
      description:
        "CMake provides builtin command-line tools through the signature",
      subcommands: [
        {
          name: "capabilities",
          description:
            "Report cmake capabilities in JSON format. The output is a JSON object with the following keys",
        },
        {
          name: "cat",
          description: "Concatenate files and print on the standard output",
          args: {
            name: "files",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: "chdir",
          description: "Change the current working directory and run a command",
          args: [
            {
              name: "dir",
              template: "folders",
            },
            {
              name: "command",
            },
          ],
        },
        {
          name: "compare_files",
          description:
            "Check if file1 is the same as file2. If fails are the same, then returns 0, if not returns 1. In case of invalid arguments, it returns 2",
          args: [
            {
              name: "file1",
              template: "filepaths",
            },
            {
              name: "file2",
              template: "filepaths",
            },
          ],
          options: [
            {
              name: "--ignore-eol",
              description:
                "Implies line-wise comparison and ignores LF/CRLF differences",
            },
          ],
        },
        {
          name: "copy",
          description:
            "Copy files to <destination> (either file or directory). If multiple files are specified, the <destination> must be directory and it must exist. Wildcards are not supported. copy does follow symlinks. That means it does not copy symlinks, but the files or directories it point to",
          args: [
            {
              name: "file",
              template: "filepaths",
              isVariadic: true,
            },
            {
              name: "destination",
              template: "folders",
            },
          ],
        },
        {
          name: "copy_directory",
          description:
            "Copy content of <dir>... directories to <destination> directory. If <destination> directory does not exist it will be created. copy_directory does follow symlinks",
          args: [
            {
              name: "dir",
              template: "folders",
              isVariadic: true,
            },
            {
              name: "destination",
              template: "folders",
            },
          ],
        },
        {
          name: "copy_if_different",
          description:
            "Copy files to <destination> (either file or directory) if they have changed. If multiple files are specified, the <destination> must be directory and it must exist. copy_if_different does follow symlinks",
          args: [
            {
              name: "file",
              template: "filepaths",
              isVariadic: true,
            },
            {
              name: "destination",
              template: "folders",
            },
          ],
        },
        {
          name: "create_symlink",
          description: "Create a symbolic link <new> naming <old>",
          args: [
            {
              name: "old",
            },
            {
              name: "new",
            },
          ],
        },
        {
          name: "create_hardlink",
          description: "Create a hard link <new> naming <old>",
          args: [
            {
              name: "old",
            },
            {
              name: "new",
            },
          ],
        },
        {
          name: "echo",
          description: "Displays arguments as text",
          args: {
            name: "string",
            isOptional: true,
          },
        },
        {
          name: "echo_append",
          description: "Displays arguments as text but no new line",
          args: {
            name: "string",
            isOptional: true,
          },
        },
        {
          name: "env",
          description: "Run command in a modified environment",
          args: [
            {
              name: "key value pair",
              description: "Format: NAME=VALUE",
              isOptional: true,
              isVariadic: true,
            },
            {
              name: "command",
            },
          ],
          options: [
            {
              name: "--unset",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "environment",
          description: "Display the current environment variables",
        },
        {
          name: "false",
          description: "Do nothing, with an exit code of 1",
        },
        {
          name: "make_directory",
          description:
            "Create <dir> directories. If necessary, create parent directories too. If a directory already exists it will be silently ignored",
          args: {
            name: "dir",
            template: "folders",
            isVariadic: true,
          },
        },
        {
          name: "md5sum",
          description:
            "Create MD5 checksum of files in md5sum compatible format",
          args: {
            name: "file",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: "sha1sum",
          description:
            "Create SHA1 checksum of files in sha1sum compatible format",
          args: {
            name: "file",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: "sha224sum",
          description:
            "Create SHA224 checksum of files in sha224sum compatible format",
          args: {
            name: "file",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: "sha226sum",
          description:
            "Create SHA226 checksum of files in sha226sum compatible format",
          args: {
            name: "file",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: "sha384sum",
          description:
            "Create SHA384 checksum of files in sha384sum compatible format",
          args: {
            name: "file",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: "sha512sum",
          description:
            "Create SHA512 checksum of files in sha512sum compatible format",
          args: {
            name: "file",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: "remove",
          description:
            "Remove the file(s). The planned behavior was that if any of the listed files already do not exist, the command returns a non-zero exit code, but no message is logged",
          args: {
            name: "file",
            template: "filepaths",
            isVariadic: true,
          },
          options: [
            {
              name: "-f",
              description:
                "The -f option changes the behavior to return a zero exit code (i.e. success) in such situations instead. remove does not follow symlinks. That means it remove only symlinks and not files it point to",
            },
          ],
        },
        {
          name: "remove_directory",
          description:
            "Remove <dir> directories and their contents. If a directory does not exist it will be silently ignored. If <dir> is a symlink to a directory, just the symlink will be removed. Use rm instead",
          args: {
            name: "dir",
            template: "folders",
            isVariadic: true,
          },
        },
        {
          name: "rm",
          description: "Remove the files <file> or directories dir",
          args: [
            {
              name: "file",
              template: "filepaths",
              isVariadic: true,
            },
            {
              name: "dir",
              template: "folders",
              isVariadic: true,
            },
          ],
          options: [
            {
              name: ["-r", "-R"],
              description:
                "Use -r or -R to remove directories and their contents recursively. If any of the listed files/directories do not exist, the command returns a non-zero exit code, but no message is logged",
            },
            {
              name: "-f",
              description:
                "The -f option changes the behavior to return a zero exit code (i.e. success) in such situations instead",
            },
          ],
        },
        {
          name: "server",
          description: "Launch cmake-server(7) mode",
        },
        {
          name: "sleep",
          description: "Sleep for given number of seconds",
          args: {
            name: "number",
            isVariadic: true,
          },
        },
        {
          name: "tar",
          description: "Create or extract a tar or zip archive",
          options: [
            {
              name: "c",
              description:
                "Create a new archive containing the specified files. If used, the pathname argument is mandatory",
            },
            {
              name: "x",
              description:
                "Extract to disk from the archive. The <pathname>... argument could be used to extract only selected files or directories. When extracting selected files or directories, you must provide their exact names including the path, as printed by list (-t)",
            },
            {
              name: "t",
              description:
                "List archive contents. The <pathname>... argument could be used to list only selected files or directories",
            },
            {
              name: "v",
              description: "Produce verbose output",
            },
            {
              name: "z",
              description: "Compress the resulting archive with gzip",
            },
            {
              name: "j",
              description: "Compress the resulting archive with bzip2",
            },
            {
              name: "J",
              description: "Compress the resulting archive with XZ",
            },
            {
              name: "--zstd",
              description: "Compress the resulting archive with Zstandard",
            },
            {
              name: "--files-from",
              description:
                "Read file names from the given file, one per line. Blank lines are ignored. Lines may not start in - except for --add-file=<name> to add files whose names start in -",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--format",
              description: "Specify the format of the archive to be created",
              args: {
                name: "format",
                suggestions: ["7zip", "gnutar", "pax", "paxr", "zip"],
              },
            },
            {
              name: "--mtime",
              description:
                "Specify modification time recorded in tarball entries",
              args: {
                name: "date",
              },
            },
            {
              name: "--",
              description:
                "Stop interpreting options and treat all remaining arguments as file names, even if they start with -",
            },
          ],
          args: {
            name: "pathname",
            isOptional: true,
          },
        },
        {
          name: "time",
          description: "Run command and display elapsed time",
          args: {
            name: "command",
            isCommand: true,
          },
        },
        {
          name: "touch",
          description:
            "Creates <file> if file do not exist. If <file> exists, it is changing <file> access and modification times",
          args: {
            name: "file",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: "touch_nocreate",
          description:
            "Touch a file if it exists but do not create it. If a file does not exist it will be silently ignored",
          args: {
            name: "file",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: "true",
          description: "Do nothing, with an exit code of 0",
        },
      ],
    },
  ],
  options: [
    {
      name: "-S",
      description: "Path to root directory of the CMake project to build",
      args: {
        name: "path-to-source",
        template: "folders",
      },
    },
    {
      name: "--help",
    },
    {
      name: "-B",
      description:
        "Path to directory which CMake will use as the root of build directory. If the directory doesn't already exist CMake will make it",
      args: {
        name: "path-to-source",
        template: "folders",
      },
    },
    {
      name: "-C",
      description: "Pre-load a script to populate the cache",
      args: {
        name: "initial-cache",
        template: "filepaths",
      },
    },
    {
      name: "-D",
      description: "Create or update a CMake CACHE entry",
      args: {
        name: "key value pair",
        description: "<var>:<type>=<value> or <var>=<value>",
      },
    },
    {
      name: "-U",
      description: "Remove matching entries from CMake CACHE",
      args: {
        name: "globbing_expr",
      },
    },
    {
      name: "-G",
      description: "Specify a build system generator",
      args: {
        name: "generator-name",
      },
    },
    {
      name: "-T",
      description: "Toolset specification for the generator, if supported",
      args: {
        name: "toolset-spec",
      },
    },
    {
      name: "-A",
      description: "Specify platform name if supported by generator",
      args: {
        name: "platform-name",
      },
    },
    {
      name: "toolchain",
      description:
        "Specify the cross compiling toolchain file, equivalent to setting CMAKE_TOOLCHAIN_FILE variable",
      args: {
        name: "path-to-file",
        template: "filepaths",
      },
    },
    {
      name: "--install-prefix",
      description:
        "Specify the installation directory, used by the CMAKE_INSTALL_PREFIX variable. Must be an absolute path",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "-Wno-dev",
      description: "Suppress developer warnings",
    },
    {
      name: "-Wdev",
      description: "Enable developer warnings",
    },
    {
      name: "-Werror",
      description: "Enable the type of warnings",
      requiresSeparator: true,
      args: {
        name: "type",
        suggestions: [
          {
            name: "dev",
            description: "Make developer warnings errors",
          },
          {
            name: "deprecated",
            description: "Make deprecated macro and function warnings errors",
          },
        ],
      },
    },
    {
      name: "-Wno-error",
      description: "Disable the type of warnings",
      requiresSeparator: true,
      args: {
        name: "type",
        suggestions: [
          {
            name: "dev",
            description: "Make developer warnings not errors",
          },
          {
            name: "deprecated",
            description:
              "Make deprecated macro and function warnings not errors",
          },
        ],
      },
    },
    {
      name: "-Wdeprecated",
      description: "Enable deprecated functionality warnings",
    },
    {
      name: "-Wno-deprecated",
      description: "Suppress deprecated functionality warnings",
    },
    {
      name: "-L",
      description: "List non-advanced cached-variables",
    },
    {
      name: "-N",
      description: "View mode only",
    },
    {
      name: "--graphviz",
      description: "Generate graphviz of dependencies",
      args: {
        name: "file",
        template: "filepaths",
        isOptional: true,
      },
    },
    {
      name: "--system-information",
      description: "Dump information about this system",
      args: {
        name: "file",
        template: "filepaths",
        isOptional: true,
      },
    },
    {
      name: "--log-level",
      description: "Set log-level",
      args: {
        name: "log-level",
        suggestions: [
          "ERROR",
          "WARNING",
          "NOTICE",
          "STATUS",
          "VERBOSE",
          "DEBUG",
          "TRACE",
        ],
      },
    },
    {
      name: "--log-context",
      description:
        "Enable the message() command outputting context attached to each message",
    },
    {
      name: "--debug-trycompile",
      description: "Do not delete the try_compile() build tree",
    },
    {
      name: "--debug-output",
      description: "Put cmake in a debug mode",
    },
    {
      name: "--debug-find",
      description: "Put cmake find commands in a debug mode",
    },
    {
      name: "--trace",
      description: "Put cmake in trace mode",
    },
    {
      name: "--trace-expand",
      description: "Put cmake in trace mode with variables expanded",
    },
    {
      name: "--trace-format",
      description: "Put cmake in trace mode and sets the trace output format",
      args: {
        name: "format",
        suggestions: ["human", "json-v1"],
      },
    },
    {
      name: "--trace-source",
      description:
        "Put cmake in trace mode, but output only lines of a specified file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--trace-redirect",
      description:
        "Put cmake in trace mode and redirect trace output to a file instead of stderr",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--warn-uninitialized",
      description: "Warn about uninitialized values",
    },
    {
      name: "--warn-unused-vars",
      description:
        "Does nothing. In CMake versions 3.2 and below this enabled warnings about unused variables. In CMake versions 3.3 through 3.18 the option was broken. In CMake 3.19 and above the option has been removed",
    },
    {
      name: "--no-warn-unused-cli",
      description:
        "Don't warn about command line options. Don't find variables that are declared on the command line, but not used",
    },
    {
      name: "--check-system-vars",
      description: "Find problems with variable usage in system files",
    },
    {
      name: "--preset",
      description:
        "Reads a preset from <path-to-source>/CMakePresets.json and <path-to-source>/CMakeUserPresets.json. The preset may specify the generator and the build directory, and a list of variables and other arguments to pass to CMake. The current working directory must contain CMake preset files. The CMake GUI can also recognize CMakePresets.json and CMakeUserPresets.json files",
      args: {
        name: "preset",
      },
    },
    {
      name: "--list-presets",
      description: "Lists the available presets",
      args: {
        name: "type",
        isOptional: true,
        suggestions: ["configure", "build", "test", "all"],
      },
    },
  ],
  args: {
    name: "path-to-source | path-to-existing-build",
    template: "folders",
  },
};

export default completion;
