import elixirSpec from "./elixir";

const elixir = (version?: string) =>
  typeof elixirSpec === "function" ? elixirSpec(version) : elixirSpec;

const completionSpec: Fig.Spec = (version?: string) => ({
  ...elixir(version),
  name: "iex",
  description: "Elixir Interactive Shell",
  options: [
    ...elixir(version).options,
    {
      name: "--dot-iex",
      description:
        "Overrides default .iex.exs file and uses path instead; path can be empty, then no file will be loaded",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "--remsh",
      description: "Connects to a node using a remote shell",
      args: {
        name: "NAME",
      },
    },
  ],
});

export default completionSpec;
