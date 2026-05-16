const completionSpec: Fig.Spec = {
  name: "@wordpress/create-block",
  description:
    "Generates PHP, JS and CSS code for registering a WordPress plugin with blocks",
  args: {
    name: "slug",
    description:
      "The block slug used for identification, output location, and plugin name",
    isOptional: true,
  },
  options: [
    {
      name: ["-V", "--version"],
      description: "Output the version number",
    },
    {
      name: ["-t", "--template"],
      description: "Project template type name",
      args: {
        name: "name",
        suggestions: ["standard", "es5"],
      },
    },
    {
      name: "--namespace",
      description: "Internal namespace for the block name",
      args: {
        name: "value",
      },
    },
    {
      name: "--title",
      description: "Display title for the block and the WordPress plugin",
      args: {
        name: "value",
      },
    },
    {
      name: "--short-description",
      description: "Short description for the block and the WordPress plugin",
      args: {
        name: "value",
      },
    },
    {
      name: "--category",
      description: "Category name for the block",
      args: {
        name: "name",
      },
    },
    {
      name: "--wp-scripts",
      description: "Enable integration with `@wordpress/scripts` package",
    },
    {
      name: "--no-wp-scripts",
      description: "Disable integration with `@wordpress/scripts` package",
    },
    {
      name: "--wp-env",
      description: "Enable integration with `@wordpress/env` package",
    },
    {
      name: "--no-plugin",
      description: "Scaffold only block files",
    },
    {
      name: "--variant",
      description: "The variant of the template to use",
      args: {
        name: "variant",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
    },
  ],
};

export default completionSpec;
