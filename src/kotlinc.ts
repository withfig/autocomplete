const completionSpec: Fig.Spec = {
  name: "kotlinc",
  description: "Kotlin compiler for JVM",
  subcommands: [
    {
      name: "-version",
      description: "Display the compiler version",
    },
    {
      name: "-nowarn",
      description:
        "Suppress the compiler from displaying warnings during compilation",
    },
    {
      name: "-Werror",
      description: "Turn any warnings into a compilation error",
    },
    {
      name: "-verbose",
      description:
        "Enable verbose logging output which includes details of the compilation process",
    },
    {
      name: "-script",
      description:
        "Evaluate a Kotlin script file. When called with this option, the compiler executes the first Kotlin script (*.kts) file among the given arguments",
      args: {
        name: "script-file",
        template: "filepaths",
      },
    },
    {
      name: ["-help", "-h"],
      description:
        "Display usage information and exit. Only standard options are shown. To show advanced options, use -X",
    },
    {
      name: "-X",
      description:
        "Display information about the advanced options and exit. These options are currently unstable: their names and behavior may be changed without notice",
    },
    {
      name: "-kotlin-home",
      description:
        "Specify a custom path to the Kotlin compiler used for the discovery of runtime libraries",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "-P",
      description:
        "Pass an option to a Kotlin compiler plugin. Available plugins and their options are listed in the Tools > Compiler plugins section of the documentation",
      args: {
        name: "plugin:pluginId:optionName=value",
      },
    },
    {
      name: "-language-version",
      description:
        "Provide source compatibility with the specified version of Kotlin",
      args: {
        name: "version",
      },
    },
    {
      name: "-api-version",
      description:
        "Allow using declarations only from the specified version of Kotlin bundled libraries",
      args: {
        name: "version",
      },
    },
    {
      name: "-progressive",
      description:
        "Enable the progressive mode for the compiler. In the progressive mode, deprecations and bug fixes for unstable code take effect immediately, instead of going through a graceful migration cycle. Code written in the progressive mode is backward compatible; however, code written in a non-progressive mode may cause compilation errors in the progressive mode",
    },
    {
      name: "-opt-in",
      description:
        "Enable usages of API that requires opt-in with a requirement annotation specified by the given fully qualified name",
      args: {
        name: "annotation",
      },
    },
  ],
};

export default completionSpec;
