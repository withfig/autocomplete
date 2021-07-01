// To learn more about Fig's autocomplete standard visit: https://fig.io/docs/autocomplete/building-a-spec#building-your-first-autocomplete-spec

// The below is a dummy example for git. Make sure to change the file name!
export const completion: Fig.Spec = {
  name: "gltfjsx",
  description: "GLTF to JSX converter",
  args: {
    name: "file",
  },
  options: [
    {
      name: ["-t", "--types"],
      description: "Add Typescript definitions",
    },
    {
      name: ["-v", "--verbose"],
      description: "Verbose output w/ names and empty groups",
    },
    {
      name: ["-m", "--meta"],
      description: "Include metadata (as userData)",
    },
    {
      name: ["-s", "--shadows"],
      description: "Let meshes cast and receive shadows",
    },
    {
      name: ["-w", "--printwidth"],
      description: "Prettier printWidth (default: 120)",
      args: {
        name: "width",
      },
    },
    {
      name: ["-p", "--precision"],
      description: "Number of fractional digits (default: 2)",
      args: {
        name: "digits",
      },
    },
    {
      name: ["-d", "--draco"],
      description: "Draco binary path",
      args: {
        name: "path",
      },
    },
    {
      name: ["-r", "--root"],
      description: "Sets directory from which .gltf file is served",
      args: {
        name: "root",
      },
    },
    {
      name: ["-D", "--debug"],
      description: "Debug output",
    },
  ],
};
