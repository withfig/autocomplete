import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "yomo",
  description: "CLI interface for YoMo",
  subcommands: [
    {
      name: "init",
      description: "Initial an example StreamFunction",
      args: {
        name: "function name",
        description: "StreamFunction name to initialize locally",
      },
      options: [
        {
          name: "--rx",
          description: "Generate Rx code template",
        },
      ],
    },
    {
      name: "build",
      description: "Build a StreamFunction to WebAssembly",
      args: {
        name: ".go file",
        description: "The .go file to build",
        generators: filepaths({ extensions: ["go"] }),
      },
      options: [
        {
          name: "--target",
          description: "Build to wasm or binary",
          args: [
            {
              name: "wasm",
            },
            {
              name: "binary",
            },
          ],
        },
        {
          name: ["-m", "--modfile"],
          description: "Custom go.mod filepath",
          args: {
            name: "module",
            generators: filepaths({ extensions: ["mod"] }),
          },
        },
      ],
    },
    {
      name: "run",
      description: "Run a wasm stream function",
      args: {
        name: ".wasm file",
        description: "The .wasm file to run",
        generators: filepaths({ extensions: ["wasm"] }),
      },
      options: [
        {
          name: ["-z", "--zipper"],
          description: "Zipper endpoint this StreamFunction will connect to",
        },
        {
          name: ["-n", "--name"],
          description: "Specify the name of this StreamFunction",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for yomo",
    },
  ],
  // Only uncomment if yomo takes an argument
  // args: {}
};
export default completionSpec;
