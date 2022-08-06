import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "streamlit",
  description: "",
  subcommands: [
    {
      name: "activate",
      description: "Activate Streamlit by entering your email",
    },
    {
      name: "cache",
      description: "Manage the Streamlit cache",
      subcommands: [
        {
          name: "clear",
          description: "Clear st.cache, st.memo, and st.singleton caches",
        },
      ],
    },
    {
      name: "config",
      description: "Manage Streamlit's config settings",
      subcommands: [
        {
          name: "show",
          description: "Show all of Streamlit's config settings",
        },
      ],
    },
    {
      name: "docs",
      description: "Show help in browser",
    },
    {
      name: "hello",
      description: "Runs the Hello World script",
    },
    {
      name: "help",
      description: "Print the help message",
    },
    {
      name: "run",
      description: "Run a Python script, piping stderr to Streamlit",
      args: {
        name: "file",
        description: "The Python script to run",
        generators: filepaths({
          extensions: ["py"],
          editFileSuggestions: { priority: 76 },
        }),
      },
    },
    {
      name: "version",
      description: "Print Streamlit's version number",
    },
  ],
  options: [
    {
      name: "--log_level",
      description: "Set the log level",
      args: {
        suggestions: ["error", "warning", "info", "debug"],
      },
    },
    {
      name: "--help",
      description: "Show a help message and exit",
    },
    {
      name: "--version",
      description: "Show the version and exit",
    },
  ],
};
export default completionSpec;
