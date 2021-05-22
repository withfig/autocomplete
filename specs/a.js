var completionSpec = {
  name: "a",
  description: "",
  subcommands: [
    {
      name: "sub",
      args: {
        name: "aaa",
        variadic: true,
      },
    },
  ],
  options: [
    {
      name: "--opt",
      args: {
        name: "aaa",
        variadic: true,
      },
    },
  ],
  // Only uncomment if a takes an argument
  // args: {}
};
