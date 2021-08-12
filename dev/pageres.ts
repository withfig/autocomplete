const completionSpec: Fig.Spec = {
  name: "pageres",
  description: "Capture website screenshots",
  options: [
    {
      name: ["--verbose", "-v"],
      description: "Verbose output to see errors if you need to troubleshoot",
    },
    {
      name: ["--crop", "-c"],
      description: "Crop to the set height",
    },
    {
      name: ["--delay", "-d"],
      description: "Delay screenshot capture",
      args: {
        name: "time",
      },
    },
    {
      name: "--filename",
      description: "Custom filename",
      args: {
        name: "template",
        description: "--filename='<%= date %> - <%= url %>'",
      },
    },
    {
      name: "--overwrite",
      description:
        "Overwrite destination file if it exists. Defaults to appending (n) to the file name if --overwrite is not set",
    },
    {
      name: "--selector",
      description: "Capture DOM element",
      args: {
        name: "element",
      },
    },
    {
      name: "--hide",
      description: "Hide DOM element. Can be set multiple times",
      args: {
        name: "element",
      },
    },
    {
      name: "--no-crop",
      description: "Override a global crop option within a group",
    },
    {
      name: "--css",
      description:
        "Apply custom CSS to the webpage. Specify some CSS or the path to a CSS file",
      args: {
        name: "string",
      },
    },
    {
      name: "--cookie",
      description: "Browser cookie. Can be set multiple times",
      args: {
        name: "cookie",
      },
    },
    {
      name: "--header",
      description: "Custom HTTP request header. Can be set multiple times",
      args: {
        name: "header",
      },
    },
    {
      name: "--username",
      description: "Username for HTTP auth",
      args: {
        name: "username",
      },
    },
    {
      name: "--password",
      description: "Password for HTTP auth",
      args: {
        name: "password",
      },
    },
    {
      name: "--scale",
      description: "Scale webpage n of times",
      args: {
        name: "number",
      },
    },
    {
      name: "--format",
      description: "Image format. Either png (default) or jpg",
      args: {
        name: "format",
        suggestions: ["png", "jpg"],
        default: "png",
      },
    },
    {
      name: "--user-agent",
      description: "Custom user agent",
      args: {
        name: "string",
      },
    },
    {
      name: "--transparent",
      description:
        "Set background color to transparent instead of white if no background is set",
    },
    {
      name: "--darkMode",
      description: "Emulate preference of dark color scheme",
    },
  ],
  args: [
    {
      name: "url | filepath",
      template: "filepaths",
      variadic: true,
    },
    {
      name: "resolution",
      variadic: true,
    },
  ],
};

export default completionSpec;
