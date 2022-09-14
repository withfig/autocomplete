import { filepaths } from "@fig/autocomplete-generators";
const completionSpec: Fig.Spec = {
  name: "java",
  description: "Launch a Java application",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  args: {
    name: "mainclass",
    description: "To launch a class file",
    generators: filepaths({ extensions: ["java", "class"] }),
  },
  options: [
    {
      name: "-jar",
      priority: 99,
      description: "To launch the main class in a JAR file",
      args: {
        name: "JAR file",
        generators: filepaths({ extensions: ["jar"] }),
      },
    },
    {
      name: "-D",
      priority: 98,
      description: "Set a system property, -D<NAME>=<VALUE>",
    },
    {
      name: ["--help", "-h", "-?"],
      description: "Show help for java",
    },
    {
      name: ["--version", "-version"],
      description: "Print product version to the error stream and exit",
    },
    {
      name: ["-showversion", "--show-version"],
      description: "Print product version to the output stream and continue",
    },
    {
      name: "--dry-run",
      description:
        "Create VM and load main class but do not execute main method",
    },
    // classpath
    {
      name: ["--classpath", "-cp"],
      description: "Class search path of directories and zip/jar files",
      args: {
        name: "search files",
        template: "filepaths",
      },
    },
  ],
};
export default completionSpec;
