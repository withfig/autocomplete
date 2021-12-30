import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "store",
  description:
    "Dotnet store stores the specified assemblies in the runtime package store. By default, assemblies are optimized for the target runtime and framework. For more information, see the runtime package store topic",
  options: [
    {
      name: ["-f", "--framework"],
      description:
        "Specifies the target framework. The target framework has to be specified in the project file",
      isRequired: true,
      args: {
        name: "framework",
      },
    },
    {
      name: ["-m", "--manifest"],
      description:
        "The package store manifest file is an XML file that contains the list of packages to store. The format of the manifest file is compatible with the SDK-style project format. So, a project file that references the desired packages can be used with the -m|--manifest option to store assemblies in the runtime package store",
      isRequired: true,
      isRepeatable: true,
      args: {
        name: "manifest",
        generators: filepaths({ extensions: ["csproj"] }),
      },
    },
    {
      name: ["-r", "--runtime"],
      isRequired: true,
      description: "The runtime identifier to target",
      args: {
        name: "runtime",
      },
    },
    {
      name: "--framework-version",
      description:
        "Specifies the .NET SDK version. This option enables you to select a specific framework version beyond the framework specified by the -f|--framework option",
      args: {
        name: "version",
      },
    },
    {
      name: ["-o", "--output"],
      description:
        "Specifies the path to the runtime package store. If not specified, it defaults to the store subdirectory of the user profile .NET installation directory",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--skip-optimization",
      description: "Skips the optimization phase",
    },
    {
      name: "--skip-symbols",
      description:
        "Skips symbol generation. Currently, you can only generate symbols on Windows and Linux",
    },
    {
      name: ["-v", "--verbosity"],
      description:
        "Sets the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]. For more information, see LoggerVerbosity",
      args: {
        name: "verbosity",
        suggestions: ["quiet", "minimal", "normal", "detailed", "diagnostic"],
      },
    },
    {
      name: ["-w", "--working-dir"],
      description:
        "The working directory used by the command. If not specified, it uses the obj subdirectory of the current directory",
      args: {
        name: "directory",
        template: "folders",
      },
    },
  ],
};

export default completionSpec;
