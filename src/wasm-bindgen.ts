import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "wasm-bindgen",
  description: "Generate bindings between WebAssembly and JavaScript",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for wasm-bindgen",
    },
    {
      name: ["--version", "-v"],
      description: "Show version for wasm-bindgen",
    },
    {
      name: "--out-dir",
      description: "Output directory",
      args: {
        name: "directory",
        description:
          "Target directory to emit JS bindings, TS definitions, .wasm binaries, etc",
        template: ["folders"],
      },
    },
    {
      name: "--out-name",
      description:
        "Set a custom output filename (Without extension. Defaults to crate name)",
      args: {
        name: "filename",
        description: "Output filename",
        suggestCurrentToken: true,
        template: ["filepaths"],
      },
    },
    {
      name: "--target",
      description: "What type of output to generate",
      args: {
        name: "target",
        suggestions: [
          {
            name: "web",
            description: "Directly loadable in a web browser",
          },
          {
            name: "bundler",
            description: "Suitable for loading in bundlers like Webpack",
          },
          {
            name: "nodejs",
            description: "Loadable via require as a Node.js module",
          },
          {
            name: "no-modules",
            description: "Like web, but older and doesn't use ES modules",
          },
          {
            name: "deno",
            description: "Loadable using imports from Deno modules",
          },
        ],
      },
    },
    {
      name: "--no-modules-global",
      description: "Name of global to assign generated bindings to",
      args: {
        name: "name",
      },
    },
    {
      name: "--browser",
      description: "Hint that JS should only be compatible with a browser",
    },
    {
      name: "--typescript",
      description: "Output a TypeScript definition file (on by default)",
    },
    {
      name: "--no-typescript",
      description: "Don't emit a *.d.ts file",
    },
    {
      name: "--omit-imports",
      description: "Don't emit imports in generated JavaScript",
    },
    {
      name: "--debug",
      description: "Include otherwise-extraneous debug checks in output",
    },
    {
      name: "--no-demangle",
      description: "Don't demangle Rust symbol names",
    },
    {
      name: "--keep-debug",
      description: "Keep debug sections in wasm files",
    },
    {
      name: "--remove-name-section",
      description: "Remove the debugging `name` section of the file",
    },
    {
      name: "--remove-producers-section",
      description: "Remove the telemetry `producers` section",
    },
    {
      name: "--omit-default-module-path",
      description:
        "Don't add WebAssembly fallback imports in generated JavaScript",
    },
    {
      name: "--encode-into",
      description: "Whether or not to use TextEncoder#encodeInto()",
      args: {
        name: "option",
        suggestions: [
          {
            name: "test",
          },
          {
            name: "always",
            description: "Always use TextEncoder#encodeInto()",
          },
          {
            name: "never",
            description: "Never use TextEncoder#encodeInto()",
          },
        ],
      },
    },
    {
      name: "--nodejs",
      description: "Deprecated, use `--target nodejs`",
      deprecated: {
        insertValue: "--target nodejs",
      },
    },
    {
      name: "--web",
      description: "Deprecated, use `--target web`",
      deprecated: {
        insertValue: "--target web",
      },
    },
    {
      name: "--no-modules",
      description: "Deprecated, use `--target no-modules`",
      deprecated: {
        insertValue: "--target no-modules",
      },
    },
    {
      name: "--weak-refs",
      description: "Enable usage of the JS weak references proposal",
    },
    {
      name: "--reference-types",
      description: "Enable usage of WebAssembly reference types",
    },
  ],
  args: {
    name: "input",
    description: "File name to output the compiled binary bindings",
    isScript: true,
    generators: filepaths({
      extensions: ["wasm"],
    }),
  },
};

export default completionSpec;
