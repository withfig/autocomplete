export const completion: Fig.Spec = {
  name: "gltfjsx",
  description: "GLTF to JSX converter",
  args: {
    name: "file",
    template: "filepaths",
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
        template: "filepaths",
      },
    },
    {
      name: ["-r", "--root"],
      description: "Sets directory from which .gltf file is served",
      args: {
        name: "root",
        template: "folders",
      },
    },
    {
      name: ["-D", "--debug"],
      description: "Debug output",
    },
  ],
};
