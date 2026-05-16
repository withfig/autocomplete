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
    {
      name: ["-classpath", "-cp"],
      description:
        "Search for class files in the specified paths. Separate elements of the classpath with system path separators (; on Windows, : on macOS/Linux). The classpath can contain file and directory paths, ZIP, or JAR files",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "-d",
      description:
        "Place the generated class files into the specified location. The location can be a directory, a ZIP, or a JAR file",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "-include-runtime",
      description:
        "Include the Kotlin runtime into the resulting JAR file. Makes the resulting archive runnable on any Java-enabled environment",
    },
    {
      name: "-jdk-home",
      description:
        "Use a custom JDK home directory to include into the classpath if it differs from the default JAVA_HOME",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "-jvm-target",
      description:
        "Specify the target version of the generated JVM bytecode. Possible values are 1.8, 9, 10, ..., 21. The default value is 1.8",
      args: {
        name: "version",
      },
    },
    {
      name: "-java-parameters",
      description:
        "Generate metadata for Java 1.8 reflection on method parameters",
    },
    {
      name: "-module-name",
      description: "Set a custom name for the generated .kotlin_module file",
      args: {
        name: "name",
      },
    },
    {
      name: "-no-jdk",
      description:
        "Don't automatically include the Java runtime into the classpath",
    },
    {
      name: "-no-reflect",
      description:
        "Don't automatically include the Kotlin reflection (kotlin-reflect.jar) into the classpath",
    },
    {
      name: "-no-stdlib",
      description:
        "Don't automatically include the Kotlin/JVM stdlib (kotlin-stdlib.jar) and Kotlin reflection (kotlin-reflect.jar) into the classpath",
    },
    {
      name: "-script-templates",
      description:
        "Script definition template classes. Use fully qualified class names and separate them with commas (,)",
      args: {
        name: "classnames[,]",
      },
    },
  ],
};

export default completionSpec;
