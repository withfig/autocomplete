import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "migrate",
  args: {
    name: "project",
    description:
      "The project or solution file to operate on. If not specified, the command searches the current directory for one. If more than one solution or project is found, an error is thrown",
    isOptional: true,
    generators: filepaths({
      extensions: ["sln"],
      equals: ["project.json", "global.json"],
    }),
  },
  options: [
    {
      name: "--format-report-file-json",
      description:
        "Output migration report file as JSON rather than user messages",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["-r", "--report"],
      description:
        "Output migration report to a file in addition to the console",
      args: {
        name: "report_file",
        template: "filepaths",
      },
    },
    {
      name: ["-s", "--skip-project-references"],
      description:
        "Skip migrating project references. By default, project references are migrated recursively",
      args: {
        name: "type",
        isOptional: true,
        suggestions: ["Debug", "Release"],
      },
    },
    {
      name: "--skip-backup",
      description:
        "Skip moving project.json, global.json, and *.xproj to a backup directory after successful migration",
    },
    {
      name: ["-t", "--template-file"],
      description:
        "Template csproj file to use for migration. By default, the same template as the one dropped by dotnet new console is used",
      args: {
        name: "file",
        generators: filepaths({ extensions: ["csproj"] }),
      },
    },
    {
      name: ["-v", "--sdk-package-version"],
      description:
        "The version of the sdk package that's referenced in the migrated app. The default is the version of the SDK in dotnet new",
      args: {
        name: "version",
      },
    },
    {
      name: ["-x", "--xproj-file"],
      description:
        "The path to the xproj file to use. Required when there is more than one xproj in a project directory",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
  ],
};

export default completionSpec;
