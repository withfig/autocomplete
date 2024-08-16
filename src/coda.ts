import { filepaths } from "@fig/autocomplete-generators";

const formulaNames: Fig.Generator = {
  script: [
    "bash",
    "-c",
    `grep -A5 --include=\*.ts --exclude-dir=node_modules -r 'addFormula\\|addSyncTable\\|makeFormula\\|makeSyncTable' . | grep -A3 -i formula | grep name: | grep -oE "['\\"]\\w*['\\"]"`,
  ],
  postProcess: (output) => {
    if (output.trim().length === 0) {
      return [];
    }
    return output.split("\n").map((formulaName) => {
      return {
        name: formulaName.replace(/['"]/g, "").trim(),
        description: `Execute ${formulaName}`,
      };
    });
  },
};

const pathToPackArg: Fig.Arg = {
  name: "path/to/pack.ts",
  description: "The path to the pack.ts file. E.g. src/pack.ts",
  generators: filepaths({ extensions: ["ts"] }),
};

const urlOrPackIdArg: Fig.Arg = {
  name: "urlOrPackId",
  description:
    "The URL or ID of the Pack. E.g. https://coda.io/p/123456 or 123456",
};

const completionSpec: Fig.Spec = {
  name: "coda",
  description:
    "Coda Local development CLI tool. It comes bundled with the Pack SDK and makes it easy to build and manage Packs from the CLI",
  subcommands: [
    {
      name: "init",
      description:
        "Initialize an empty project with the recommended settings and dependencies",
    },
    {
      name: "execute",
      description: "Execute the formula and print the output to the terminal",
      args: [
        pathToPackArg,
        {
          name: "formula",
          description: "Formula name to execute",
          generators: formulaNames,
        },
        {
          name: "params",
          description: "Arguments to pass to the formula",
          isVariadic: true,
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--dynamicUrl",
          description:
            "To run a sync for a dynamic sync table, use this parameter to specify which URL to sync from",
          args: {
            name: "url",
            description: "The URL to sync from",
          },
        },
      ],
    },
    {
      name: "auth",
      description:
        "Set up authentication in your development environment so that you can execute Pack formulas with authentication applied to them",
      args: pathToPackArg,
    },
    {
      name: "register",
      description:
        "Create a new API token or register an existing one to be used with future commands",
      args: {
        name: "apiToken",
        description: "The API token to register",
        isOptional: true,
      },
    },
    {
      name: "create",
      description:
        "Create a new Pack on Coda’s servers and get assigned a Pack ID. Run this command just once for each Pack you create",
      args: pathToPackArg,
      options: [
        {
          name: "--name",
          description:
            "Specify a name for the Pack. You can always set or update the name in the Pack management UI later",
          args: {
            name: "name",
            description: "The desired Pack name",
          },
        },
        {
          name: "--description",
          description:
            "Specify a description for the Pack. You can always set or update the description in the Pack management UI later",
          args: {
            name: "description",
            description: "The Pack description",
          },
        },
      ],
    },
    {
      name: "upload",
      description:
        "Use this command to upload a new version of your Pack based on your latest code",
      args: pathToPackArg,
    },
    {
      name: "release",
      description: "Release a Pack version and make it live for your users",
      args: [
        pathToPackArg,
        {
          name: "version",
          description:
            "The release version. Must always be greater than that of any of your previous releases",
          isOptional: true,
        },
      ],
    },
    {
      name: "clone",
      description:
        "Migrate the development of a Pack from the Pack Studio to a new local CLI Pack development",
      args: urlOrPackIdArg,
    },
    {
      name: "link",
      description:
        "Link the development of a Pack from the Pack studio to an existing local CLI Pack development",
      args: [pathToPackArg, urlOrPackIdArg],
    },
    {
      name: "whoami",
      description:
        "Looks up information about the API token that is registered in this environment",
      args: {
        name: "apiToken",
        description: "The API token to look up",
        isOptional: true,
      },
    },
    {
      name: "build",
      description: "Generate a bundle for your Pack",
      args: pathToPackArg,
    },
    {
      name: "validate",
      description: "Validate your Pack definition",
      args: pathToPackArg,
    },
    {
      name: "setOption",
      description:
        "Set a persistent build option for the Pack. This will be used for all builds of the Pack",
      args: [
        pathToPackArg,
        {
          name: "option",
          description: "Currently the only supported option is 'timerStrategy'",
          suggestions: ["timerStrategy"],
        },
        {
          name: "value",
          description: "Value to set for the option",
          suggestions: ["none", "error", "fake"],
        },
      ],
    },
  ],
  options: [
    {
      name: "--version",
      description: "Show version number",
      priority: 1,
      isPersistent: true,
    },
    {
      name: "--help",
      description: "Show help",
      priority: 2,
      isPersistent: true,
    },
  ],
};
export default completionSpec;
