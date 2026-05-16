const archNames: { name: string; description: string }[] = [
  { name: "i386", description: "32-bit intel" },
  { name: "x86_64", description: "64-bit intel" },
  { name: "x86_64h", description: "64-bit intel (haswell)" },
  { name: "arm64", description: "64-bit arm" },
  { name: "arm64e", description: "64-bit arm (Apple Silicon)" },
];

const archOptions: Fig.Option[] = archNames.map((arch) => ({
  name: "-" + arch.name,
  description: arch.description,
  isRepeatable: true,
  exclusiveOn: ["-arch"],
  icon: "fig://icon?type=cpu",
}));

const archOption: Fig.Option = {
  name: "-arch",
  isRepeatable: true,
  exclusiveOn: archOptions.map(({ name }) => name as string),
  args: {
    name: "arch_name",
    suggestions: archNames.map((arch) => ({
      ...arch,
      icon: "fig://icon?type=cpu",
    })),
  },
};

const completionSpec: Fig.Spec = {
  name: "arch",
  description: "Print architecture type or run select architecture",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: "-32",
      description:
        "Add the native 32-bit architecture to the list of architectures",
    },
    {
      name: "-64",
      description:
        "Add the native 64-bit architecture to the list of architectures",
    },
    archOption,
    ...archOptions,
    {
      name: "-c",
      description: "Clear the environment that will be passed to the command",
    },
    {
      name: "-d",
      description:
        "Delete the named environment variable from the command's environment",
      isRepeatable: true,
      args: {
        name: "envname",
      },
    },
    {
      name: "-e",
      description:
        "Assign the given value to the variable in the command's environment",
      isRepeatable: true,
      args: {
        name: "envname=value",
      },
    },
    {
      name: "-h",
      description: "Print a help message and exit",
    },
  ],
  args: {
    name: "program",
    template: "filepaths",
    isCommand: true,
    isVariadic: true,
  },
};
export default completionSpec;
