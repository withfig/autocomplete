const completionSpec: Fig.Spec = {
  name: "swagger-typescript-api",
  description: "Generate api via swagger scheme",
  icon: "https://static1.smartbear.co/swagger/media/assets/swagger_fav.png",
  subcommands: [
    {
      name: "generate-templates",
      description: 'Generate ".ejs" templates needed for generate api',
      options: [
        {
          name: ["--output", "-o"],
          description: "Output path of generated templates",
          args: {
            name: "Path",
            template: "folders",
          },
        },
        {
          name: ["--modular", "-m"],
          description:
            "Generate templates needed to separate files for http client, data contracts, and routes",
        },
        {
          name: "--http-client",
          description: "Http client type",
          args: {
            name: "Http client",
            suggestions: ["fetch", "axios"],
            default: "fetch",
          },
        },
        {
          name: ["--clean-output", "-c"],
          description: "Clean output folder before generate template",
          isDangerous: true,
        },
        {
          name: ["--rewrite", "-r"],
          description: "Rewrite content in existing templates",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--version", "-v"],
      description: "Output the current version",
    },
    {
      name: ["--path", "-p"],
      description: "Path/url to swagger scheme",
      args: {
        name: "Path",
        template: "filepaths",
      },
    },
    {
      name: ["--output", "-o"],
      description: 'Output path of typescript api file (default: "./")',
      args: {
        name: "Path",
        template: "folders",
      },
    },
    {
      name: ["--name", "-n"],
      description: 'Name of output typescript api file (default: "Api.ts")',
      args: {
        name: "Name",
      },
    },
    {
      name: ["--templates", "-t"],
      description: "Path to folder containing templates",
      args: {
        name: "Path",
        template: "folders",
      },
    },
    {
      name: ["--default-as-success", "-d"],
      description: 'Use "default" response status code as success response too',
    },
    {
      name: ["--responses", "-r"],
      description: "Generate additional information about request responses",
    },
    {
      name: "--union-enums",
      description: 'Generate all "enum" types as union types (T1 | T2 | TN)',
    },
    {
      name: "--add-readonly",
      description: "Generate readonly properties",
    },
    {
      name: "--route-types",
      description: "Generate type definitions for API routes",
    },
    {
      name: "--no-client",
      description: "Do not generate an API class",
    },
    {
      name: "--enum-names-as-values",
      description:
        "Use values in 'x-enumNames' as enum values (not only as keys)",
    },
    {
      name: "--extract-request-params",
      description: "Extract request params to data contract",
    },
    {
      name: "--extract-request-body",
      description: "Extract request body type to data contract",
    },
    {
      name: "--extract-response-body",
      description: "Extract response body type to data contract",
    },
    {
      name: "--extract-response-error",
      description: "Extract response error type to data contract",
    },
    {
      name: "--modular",
      description:
        "Generate separated files for http client, data contracts, and routes",
    },
    {
      name: "--js",
      description: "Generate js api module with declaration file",
    },
    {
      name: "--module-name-index",
      description:
        "Determines which path index should be used for routes separation",
      args: {
        name: "Index",
      },
    },
    {
      name: "--module-name-first-tag",
      description: "Splits routes based on the first tag",
    },
    { name: "--disableStrictSSL", description: "Disabled strict SSL" },
    { name: "--disableProxy", description: "Disabled proxy" },
    { name: "--axios", description: "Generate axios http client" },
    {
      name: "--unwrap-response-data",
      description: "Unwrap the data item from the response",
    },
    {
      name: "--disable-throw-on-error",
      description:
        "Do not throw an error when response.ok is not true (default: false)",
    },
    {
      name: "--single-http-client",
      description:
        "Ability to send HttpClient instance to Api constructor (default: false)",
    },
    {
      name: "--silent",
      description: "Output only errors to console",
      isPersistent: true,
    },
    {
      name: "--default-response",
      description: "Default type for empty response schema",
      args: {
        name: "Type",
      },
    },
    {
      name: "--type-prefix",
      description: "Data contract name prefix",
      args: {
        name: "Prefix",
      },
    },
    {
      name: "--type-suffix",
      description: "Data contract name suffix",
      args: {
        name: "Suffix",
      },
    },
    {
      name: "--clean-output",
      description:
        "Clean output folder before generate api. WARNING: May cause data loss (default: false)",
    },
    {
      name: "--api-class-name",
      description: "Name of the api class",
      args: {
        name: "Name",
      },
    },
    {
      name: "--patch",
      description:
        "Fix up small errors in the swagger source definition (default: false)",
    },
    {
      name: "--debug",
      description:
        "Additional information about processes inside this tool (default: false)",
    },
    {
      name: "--another-array-type",
      description:
        "Generate array types as Array<Type> (by default Type[]) (default: false)",
    },
    {
      name: "--sort-types",
      description: "Sort fields and types (default: false)",
    },
    {
      name: "--extract-enums",
      description:
        "Extract all enums from inline interface\type content to typescript enum construction (default: false)",
    },
    {
      name: ["--help", "-h"],
      description: "Show help for swagger-typescript-api",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
