import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "restore",
  description:
    "The dotnet restore command uses NuGet to restore dependencies as well as project-specific tools that are specified in the project file",
  args: {
    name: "root",
    description: "Optional path to the project file to restore",
    isOptional: true,
    generators: filepaths({ extensions: ["csproj", "sln"] }),
  },
  options: [
    {
      name: "--configfile",
      description:
        "The NuGet configuration file (nuget.config) to use. If specified, only the settings from this file will be used. If not specified, the hierarchy of configuration files from the current directory will be used",
      args: {
        name: "file",
        generators: filepaths({ equals: "nuget.config" }),
      },
    },
    {
      name: "--disable-parallel",
      description: "Disables restoring multiple projects in parallel",
    },
    {
      name: "--force",
      description:
        "Forces all dependencies to be resolved even if the last restore was successful. Specifying this flag is the same as deleting the project.assets.json file",
    },
    {
      name: "-force-evaluate",
      description:
        "Forces restore to reevaluate all dependencies even if a lock file already exists",
    },
    {
      name: "--ignore-failed-sources",
      description:
        "Only warn about failed sources if there are packages meeting the version requirement",
    },
    {
      name: "--interactive",
      description:
        "Allows the command to stop and wait for user input or action. For example, to complete authentication",
    },
    {
      name: "--lock-file-path",
      description:
        "Output location where project lock file is written. By default, this is PROJECT_ROOTpackages.lock.json",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--locked-mode",
      description: "Don't allow updating project lock file",
    },
    {
      name: "--no-cache",
      description: "Specifies to not cache HTTP requests",
    },
    {
      name: "--no-dependencies",
      description:
        "When restoring a project with project-to-project (P2P) references, restores the root project and not the references",
    },
    {
      name: "--packages",
      description: "Specifies the directory for restored packages",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["-r", "--runtime"],
      description:
        "Specifies a runtime for the package restore. This is used to restore packages for runtimes not explicitly listed in the <RuntimeIdentifiers> tag in the .csproj file",
      args: {
        name: "runtime",
      },
    },
    {
      name: ["-s", "--source"],
      description:
        "Specifies the URI of the NuGet package source to use during the restore operation. This setting overrides all of the sources specified in the nuget.config files. Multiple sources can be provided by specifying this option multiple times",
      args: {
        name: "source",
      },
    },
    {
      name: "--use-lock-file",
      description:
        "Enables project lock file to be generated and used with restore",
    },
    {
      name: ["-v", "--verbosity"],
      description:
        "Sets the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]. The default is minimal. For more information, see LoggerVerbosity",
      args: {
        name: "verbosity",
        suggestions: ["quiet", "minimal", "normal", "detailed", "diagnostic"],
      },
    },
  ],
};

export default completionSpec;
