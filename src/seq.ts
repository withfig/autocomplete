const completionSpec: Fig.Spec = {
  name: "seq",
  description: "Print sequences of numbers. (Defaults to increments of 1)",
  args: [
    {
      name: "first",
      description: "Starting number in sequence",
    },
    {
      name: "step",
      description: "Increment interval",
      isOptional: true,
    },
    {
      name: "last",
      description: "Last number in sequence",
      isOptional: true,
    },
  ],
  options: [
    {
      name: "-w",
      description:
        "Equalize the widths of all numbers by padding with zeros as necessary",
    },
    {
      name: "-s",
      description: "String separator between numbers. Default is newline",
      insertValue: `-s "{cursor}"`,
      args: {
        name: "string",
        description: "Separator",
      },
    },
    {
      name: "-f",
      description: "Use a printf(3) style format to print each number",
      insertValue: `-f %{cursor}`,
      args: {
        name: "format",
        description: "Print all numbers using format",
      },
    },
  ],
};
export default completionSpec;
