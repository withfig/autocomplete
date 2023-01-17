const commonOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description: "Display usage information",
  },
];

const buildOptions: Fig.Option[] = [
  {
    name: ["-i", "--input"],
    description: "Specify input file",
    args: { name: "input file", template: "filepaths" },
  },
  {
    name: ["-o", "--output"],
    description: "Specify output file",
    args: { name: "output file", template: "filepaths" },
  },
  {
    name: ["-c", "--config"],
    description: "Specify config file to use",
    args: { name: "config file", template: "filepaths" },
  },
  {
    name: "--postcss",
    description: "Load custom PostCSS configuration",
    args: {
      name: "postcss config file",
      template: "filepaths",
      isOptional: true,
    },
  },
  {
    name: "--purge",
    description:
      "Content paths to use for removing unused classes. [Deprecated]: use `--content` instead",
  },
  {
    name: "--content",
    description: "Content paths to use for removing unused classes",
  },
  {
    name: ["--watch", "-w"],
    description: "Watch for changes and rebuild as needed",
  },
  {
    name: ["--minify", "-m"],
    description: "Minify the output",
  },
  {
    name: "--no-autoprefixer",
    description: "Disable autoprefixer",
  },
  ...commonOptions,
];

const completionSpec: Fig.Spec = {
  name: "tailwindcss",
  description: "Tailwindcss CLI tools",
  icon: "https://tailwindcss.com/favicons/favicon-32x32.png",
  options: buildOptions,
  subcommands: [
    {
      name: "init",
      description: "Creates Tailwind config file. Default: tailwind.config.js",
      args: {
        name: "filename",
        isOptional: true,
      },
      options: [
        {
          name: ["-p", "--postcss"],
          description: "Initialize a 'postcss.config.js' file",
        },
        {
          name: ["-f", "--full"],
          description: "Initialize a full 'tailwind.config.js' file",
        },
        ...commonOptions,
      ],
    },
    {
      name: "build",
      description: "Build CSS file",
      options: buildOptions,
    },
  ],
};

export default completionSpec;
