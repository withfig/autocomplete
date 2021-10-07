const exts = "*.3d;*.3ds;*.3mf;*.ac;*.ac3d;*.acc;*.amf;*.ase;*.ask;*.assbin;*.b3d;*.blend;*.bvh;*.cob;*.csm;*.dae;*.dxf;*.enff;*.fbx;*.glb;*.gltf;*.hmp;*.ifc;*.ifczip;*.irr;*.irrmesh;*.lwo;*.lws;*.lxo;*.md2;*.md3;*.md5anim;*.md5camera;*.md5mesh;*.mdc;*.mdl;*.mesh;*.mesh.xml;*.mot;*.ms3d;*.ndo;*.nff;*.obj;*.off;*.ogex;*.pk3;*.ply;*.pmx;*.prj;*.q3o;*.q3s;*.raw;*.scn;*.sib;*.smd;*.stl;*.stp;*.ter;*.uc;*.vta;*.x;*.x3d;*.x3db;*.xgl;*.xml;*.zae;*.zgl".split(
  ";"
);

const helpOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Detailed help on a command",
  },
];

const commonOptions: Fig.Option[] = [
  {
    name: "-cfast",
    description: "Fast post processing preset, runs just a few important steps",
  },
  {
    name: "-cdefault",
    description: "Default post processing: runs all recommended steps",
  },
  {
    name: "-cfull",
    description: "Fires almost all post processing steps",
  },
];

const suggistionExts: Fig.Suggestion[] = exts.map((ext) => ({
  name: ext,
}));

const completionSpec: Fig.Spec = {
  name: "assimp",
  description: "Open Asset Import Library",
  subcommands: [
    {
      name: "info",
      description: "Quick file stats",
      args: {
        name: "file",
        description: "Print basic structure of a 3D model",
        isOptional: false,
        isVariadic: true,
      },
      options: [
        {
          name: ["-r", "--raw"],
          description: "No postprocessing, do a raw import",
        },
        {
          name: ["-v", "--verbose"],
          description: "Print verbose info such as node transform data",
        },
        {
          name: ["-s", "--silent"],
          description: "Print only minimal info",
        },
        ...helpOptions,
      ],
    },
    {
      name: "listext",
      description: "List all known file extensions available for import",
    },
    {
      name: "knowext",
      description: "List all known file extensions available for import",
      args: {
        name: "extension",
        description: "Check whether a particular file extension is known by us",
        isOptional: false,
      },
    },
    {
      name: "export",
      description: "Export a file to one of the supported output formats",
      args: [
        {
          name: "modal",
          description: "Relative or absolute path to the input model",
          isOptional: false,
        },
        {
          name: "out",
          description:
            "Relative or absolute path to write the output export to",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-f", "--format"],
          description: "No postprocessing, do a raw import",
          args: {
            name: "format",
            suggestions: [...suggistionExts],
          },
        },
        ...helpOptions,
      ],
    },
    {
      name: "listexport",
      description: "List all supported export formats",
    },
    {
      name: "exportinfo",
      description: "Show basic information on a specific export format",
      args: {
        name: "extension",
        description: "Specific file extension",
        isOptional: false,
      },
    },
    {
      name: "extract",
      description: "Extract embedded texture images",
      args: [
        {
          name: "modal",
          description: "Relative or absolute path to the input model",
          isOptional: false,
        },
        {
          name: "out",
          description:
            "Relative or absolute path to write the output images to",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-ba", "–-bmp-with-alpha"],
          description: "Writes BMP's with alpha channel",
        },
        {
          name: ["-t", "--texture"],
          description: "Zero-based index of the texture to be extracted",
          args: {
            name: "n",
            suggestions: [...suggistionExts],
          },
        },
        {
          name: ["-f", "--format"],
          description: "No postprocessing, do a raw import",
          args: {
            name: "format",
            suggestions: [...suggistionExts],
          },
        },
        ...commonOptions,
        ...helpOptions,
      ],
    },
    {
      name: "dump",
      description: "Convert models to a binary or textual dump (ASSBIN/ASSXML)",
      args: [
        {
          name: "modal",
          description: "Relative or absolute path to the input model",
          isOptional: false,
        },
        {
          name: "out",
          description:
            "Relative or absolute path to write the output dump to. If it is omitted, the dump is written to '<model>-dump.txt'",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-b", "--binary"],
          description: "Binary output",
        },
        {
          name: ["-s", "--short"],
          description: "Shortened",
        },
        {
          name: ["-z", "--compressed"],
          description: "Compressed",
        },
        ...commonOptions,
        ...helpOptions,
      ],
    },
    {
      name: "cmpdump",
      description: "Compare dumps created using 'assimp dump <file> -s ...'",
      args: [
        {
          name: "actual",
          description: "Mini dump now",
          isOptional: false,
        },
        {
          name: "expected",
          description: "Archived dump from some point in the past",
          isOptional: false,
        },
      ],
      options: [...helpOptions],
    },
    {
      name: "version",
      description: "Display Assimp version",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Display some basic help",
    },
  ],
};

export default completionSpec;
