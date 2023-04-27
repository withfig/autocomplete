// Node version of the CLI, there is also a Java version, Ref https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_155931263126.html
const completionSpec: Fig.Spec = {
  name: "suitecloud",
  description: "SuiteCloud CLI",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  subcommands: [
    {
      icon: "🧩",
      name: "account:manageauth",
      description:
        "Manages authentication IDs (authID) for all your projects. An authentication ID is a custom alias you gave to a specific account-role combination",
      options: [
        {
          name: ["-i", "--interactive"],
          description: "Runs the command in interactive mode",
        },
        {
          name: "--info",
          description:
            "Prints the following information for the specified authentication ID (authID): account ID, role ID, and url. Usage: account:manageauth --info {authID}",
          args: {
            name: "authID",
          },
        },
        {
          name: "--list",
          description:
            "Prints a list of all the configured authentication IDs (authID). Usage: account:manageauth --list",
        },
        {
          name: "--remove",
          description:
            "Removes an authentication ID (authID). Usage: account:manageauth --remove {authID}",
          args: {
            name: "authID",
          },
        },
        {
          name: "--rename",
          description:
            "Renames an authentication ID (authID). You must specify it together with the renameto option. Usage: account:manageauth --rename {authID} --renameto {newauthID}",
          args: {
            name: "authID",
          },
        },
        {
          name: "--renameto",
          description:
            "Specifies the new ID for an authentication ID (authID). You must specify it together with the rename option. Usage: account:manageauth --rename {authID} --renameto {newauthID}",
          dependsOn: ["--rename"],
          args: {
            name: "authID",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Displays help for the command",
        },
      ],
    },
    {
      icon: "🎫",
      name: "account:savetoken",
      description: "Saves a TBA token that you issued previously in NetSuite",
      options: [
        {
          name: "--account",
          description: "Specifies the ID of the account to log in to",
          args: {
            name: "id",
          },
        },
        {
          name: "--authid",
          description:
            "References the custom name you gave to a specific account-role combination",
          args: {
            name: "auth id",
          },
        },
        {
          name: "--tokenid",
          description:
            "Specifies the token ID of a TBA token you issued previously in NetSuite",
          args: {
            name: "token id",
          },
        },
        {
          name: "--tokensecret",
          description:
            "Specifies the token secret of a TBA token you issued previously in NetSuite",
          args: {
            name: "secret",
          },
        },
        {
          name: "--url",
          description:
            "Specifies the NetSuite domain of the account you want to use. You only need to specify the NetSuite domain if you are not using a production account",
          args: {
            name: "domain",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Displays help for the command",
        },
      ],
    },
    {
      icon: "⭐️",
      name: "account:setup",
      description:
        "Sets up an account to use with the SuiteCloud CLI for Node.js",
      options: [
        {
          name: ["-i", "--interactive"],
          description: "Runs the command in interactive mode",
        },
        {
          name: ["-d", "--dev"],
          description:
            "Specifies the NetSuite domain of the account you want to use. You only need to specify the NetSuite domain if you are not using a production account",
        },
        {
          name: ["-h", "--help"],
          description: "Displays help for the command",
        },
      ],
    },
    {
      icon: "📂",
      name: "file:create",
      description: "Creates a SuiteScript file",
      options: [
        {
          name: ["-i", "--interactive"],
          description: "Runs the command in interactive mode",
        },
        {
          name: "--module",
          description:
            'Specifies the SuiteScript modules you want to add to the SuiteScript file. For example, "N/record"',
          args: {
            name: "module",
          },
        },
        {
          name: "--path",
          description:
            'Specifies the File Cabinet path of the SuiteScript file to create. For example, "/SuiteScripts/ClientScipt.js"',
          args: {
            name: "path",
          },
        },
        {
          name: "--type",
          description:
            'Specifies the type of the SuiteScript file that you want to create. For example, "ClientScript"',
          args: {
            name: "type",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Displays help for the command",
        },
      ],
    },
    {
      icon: "⬇️",
      name: "file:import",
      description:
        "Imports files from an account to your account customization project. You cannot import files from a SuiteApp",
      options: [
        {
          name: ["-i", "--interactive"],
          description: "Runs the command in interactive mode",
        },
        {
          name: "--path",
          description:
            'Specifies the File Cabinet paths of the files to import. For example, "/SuiteScripts/file.js"',
          args: {
            name: "path",
          },
        },
        {
          name: "--calledfromcomparefiles",
          description:
            "Message displayed should be different if called from Compare Files",
        },
        {
          name: "--excludeproperties",
          description:
            "Excludes all file properties within the .attributes folder",
        },
        {
          name: ["-h", "--help"],
          description: "Displays help for the command",
        },
      ],
    },
    {
      icon: "🗒️",
      name: "file:list",
      description: "Lists the files in the File Cabinet of your account",
      options: [
        {
          name: ["-i", "--interactive"],
          description: "Runs the command in interactive mode",
        },
        {
          name: "--folder",
          description:
            'Specifies the File Cabinet path, for example, "/SuiteScripts". All files within subfolders are included',
          args: {
            name: "cabinet",
            template: "folders",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Displays help for the command",
        },
      ],
    },
    {
      icon: "⬆️",
      name: "file:upload",
      description: "Uploads files from your project to an account",
      options: [
        {
          name: ["-i", "--interactive"],
          description: "Runs the command in interactive mode",
        },
        {
          name: "--paths",
          description:
            'Specifies the file cabinet paths of the files to upload. To specify multiple paths, enter a space between paths and enclose the entire argument in double quotes. For example, "/SuiteScripts/file.js" for account customization projects, and "/SuiteApps/com.project.example/script.js" for SuiteApp projects',
          args: {
            name: "files",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Displays help for the command",
        },
      ],
    },
    {
      icon: "⬇️",
      name: "object:import",
      description:
        "Imports custom objects from your NetSuite account to the SuiteCloud project. In account customization projects (ACP), if SuiteScript files are referenced in the custom objects you import, these files get imported by default",
      options: [
        {
          name: ["-i", "--interactive"],
          description: "Runs the command in interactive mode",
        },
        {
          name: "--appid",
          description:
            "Specifies your application ID. If specified, only custom objects with that application ID are imported. Otherwise, only custom objects with no application ID are imported",
          args: {
            name: "app id",
          },
        },
        {
          name: "--destinationfolder",
          description:
            "Specifies the project folder where objects will be stored. It must be within the Objects folder of your project. For example, /Objects/MyObjects",
        },
        {
          name: "--excludefiles",
          description:
            "Indicates that the SuiteScript files referenced in custom objects are not imported. It can only be used in account customization projects (ACP)",
        },
        {
          name: "--scriptid",
          description:
            'Specifies the script ID. To specify multiple IDs, enter the IDs separated by spaces. Enter "ALL" to import all custom objects of the specified type',
        },
        {
          name: "--type",
          description:
            'Specifies the type of custom objects to import. Enter "ALL" to import all custom objects. To see what custom objects are supported by SDF, see https://system.netsuite.com/app/help/helpcenter.nl?fid=sdfxml.html',
        },
        {
          name: ["-h", "--help"],
          description: "Displays help for the command",
        },
      ],
    },
    {
      icon: "🗒️",
      name: "object:list",
      description: "Lists the custom objects deployed in an account",
      options: [
        {
          name: ["-i", "--interactive"],
          description: "Runs the command in interactive mode",
        },
        {
          name: "--appid",
          description:
            "Specifies your application ID. If specified, only custom objects with that application ID are listed. Otherwise, only custom objects with no application ID are listed",
          args: {
            name: "app id",
          },
        },
        {
          name: "--scriptid",
          description:
            "Specifies the script ID. If you specify it, only objects containing that script ID will be listed. Otherwise, all objects are listed",
          args: {
            name: "script id",
          },
        },
        {
          name: "--type",
          description:
            "Specifies the type of custom objects to list. To specify multiple types, enter the types separated by spaces. Otherwise, all types are listed. To see what custom objects are supported by SDF, see https://system.netsuite.com/app/help/helpcenter.nl?fid=sdfxml.html",
          args: {
            name: "types",
            isVariadic: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Displays help for the command",
        },
      ],
    },
    {
      icon: "♻️",
      name: "object:update",
      description:
        "Overwrites the custom objects in the project with the custom objects in an account",
      options: [
        {
          name: ["-i", "--interactive"],
          description: "Runs the command in interactive mode",
        },
        {
          name: "--includeinstances",
          description:
            "Includes instances. This is only available for custom records",
        },
        {
          name: "--scriptid",
          description:
            "Specifies the script ID of the objects you want to overwrite",
          args: {
            name: "script id",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Displays help for the command",
        },
      ],
    },
    {
      icon: "🍺",
      name: "project:adddependencies",
      description: "Adds the missing dependencies to the manifest file",
    },
    {
      icon: "🆕",
      name: "project:create",
      description:
        "Creates a SuiteCloud project, either a SuiteApp or an account customization project (ACP)",
      options: [
        {
          name: ["-i", "--interactive"],
          description: "Runs the command in interactive mode",
        },
        {
          name: "--overwrite",
          description: "Overwrites the existing project",
        },
        {
          name: "--projectid",
          description:
            "Specifies the project ID. It is mandatory for SuiteApps",
          args: {
            name: "project id",
          },
        },
        {
          name: "--projectname",
          description: "Specifies the project name",
          args: {
            name: "name",
          },
        },
        {
          name: "--projectversion",
          description:
            "Specifies the project version. It is mandatory for SuiteApps",
          args: {
            name: "project version",
          },
        },
        {
          name: "--publisherid",
          description:
            "Specifies the publisher ID. It is mandatory for SuiteApps",
          args: {
            name: "publisher id",
          },
        },
        {
          name: "--type",
          description:
            "Specifies the project type. Enter one of the following options: ACCOUNTCUSTOMIZATION or SUITEAPP",
          args: {
            suggestions: ["ACCOUNTCUSTOMIZATION", "SUITEAPP"],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Displays help for the command",
        },
      ],
    },
    {
      icon: "🚀",
      name: "project:deploy",
      description:
        "Deploys the folder containing the project. The project folder is zipped before deployment, only including the files and folders referenced in the deploy.xml file",
      options: [
        {
          name: ["-i", "--interactive"],
          description: "Runs the command in interactive mode",
        },
        {
          name: "--dryrun",
          description:
            "Runs a preview of your deploy process. Your project is not deployed",
        },
        {
          name: "--log",
          description:
            "Sets the deployment log file location, as either a directory or a file name. If it is a directory, a default log file is generated in the specified location. If a log file already exists in the specified location, deployment log details are appended to that existing file",
          args: {
            name: "location",
            template: ["folders", "filepaths"],
          },
        },
        {
          name: "--validate",
          description:
            "Validates the project before deploying. If an error ocurrs during the deployment, the process is stopped",
        },
        {
          name: "--accountspecificvalues",
          description:
            "Indicates how to handle the presence of account-specific values in an account customization project. If there are account-specific values in the project, enter WARNING to continue with the deployment process, or ERROR to stop it. If the option is not specified, the default value is ERROR. It only applies to account customization projects",
          args: {
            suggestions: ["ERROR", "WARNING"],
            default: "ERROR",
          },
        },
        {
          name: ["-a", "--applyinstallprefs"],
          description:
            "Applies the settings from the hiding.xml, locking.xml, and overwriting.xml files. It only applies to SuiteApps",
        },
        {
          name: ["-h", "--help"],
          description: "Displays help for the command",
        },
      ],
    },
    {
      icon: "📦",
      name: "project:package",
      description:
        "Generates a ZIP file from your project, respecting the structure specified in the deploy.xml file",
      options: [
        {
          name: ["-i", "--interactive"],
          description: "Runs the command in interactive mode",
        },
        {
          name: ["-h", "--help"],
          description: "Displays help for the command",
        },
      ],
    },
    {
      icon: "✅",
      name: "project:validate",
      description: "Validates the folder containing the SuiteCloud project",
      options: [
        {
          name: ["-i", "--interactive"],
          description: "Runs the command in interactive mode",
        },
        {
          name: "--log",
          description:
            "Sets the validation log file location, as either a directory or a file name. If it is a directory, a default log file is generated in the specified location. If a log file already exists in the specified location, validation log details are appended to that existing file",
          args: {
            name: "location",
            template: ["folders", "filepaths"],
          },
        },
        {
          name: "--server",
          description: "Indicates that the server will perform the validation",
        },
        {
          name: "--accountspecificvalues",
          description:
            "Indicates how to handle the presence of account-specific values in an account customization project. If there are account-specific values in the project, enter WARNING to continue with the deployment process, or ERROR to stop it. If the option is not specified, the default value is ERROR. It only applies to account customization projects",
          args: {
            suggestions: ["ERROR", "WARNING"],
            default: "ERROR",
          },
        },
        {
          name: ["-a", "--applyinstallprefs"],
          description:
            "Applies the settings from the hiding.xml, locking.xml, and overwriting.xml files. It only applies to SuiteApps",
        },
        {
          name: ["-h", "--help"],
          description: "Displays help for the command",
        },
      ],
    },
  ],
  options: [
    {
      name: "--version",
      description: "Outputs the version number",
    },
    {
      name: ["-h", "--help"],
      description: "Displays help for the command",
    },
  ],
};
export default completionSpec;
