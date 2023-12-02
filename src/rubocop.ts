const completionSpec: Fig.Spec = {
  name: "rubocop",
  description:
    "A Ruby static code analyzer and formatter, based on the community Ruby style guide",
  icon: "https://github.com/rubocop/rubocop/blob/master/logo/rubo-logo-symbol.png?raw=true",
  args: {
    name: "file",
    template: "filepaths",
    isVariadic: true,
  },
  options: [
    {
      name: ["-a", "--autocorrect"],
      description: "Autocorrect offenses (only when it's safe)",
    },
    {
      name: ["-A", "--autocorrect-all"],
      description: "Autocorrect offenses (safe and unsafe)",
    },
  ],
};

export default completionSpec;
