const packageList: Fig.Generator = {
  script: [
    "curl",
    "-sH",
    "accept-encoding: gzip",
    "--compressed",
    "https://package.elm-lang.org/search.json",
  ],
  cache: {
    ttl: 1000 * 24 * 60 * 60 * 3, // 3 days
  },
  postProcess: (output) => {
    return JSON.parse(output).map((package_) => ({
      name: package_.name,
      description: package_.summary,
    }));
  },
};

const completionSpec: Fig.Spec = {
  name: "elm",
  description: "Fig spec for the Elm language cli",
  subcommands: [
    {
      name: "init",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Elm_logo.svg/1200px-Elm_logo.svg.png",
      description: "Initialize a new Elm project",
      options: [
        {
          name: "--help",
          description: "Show help for elm init",
        },
      ],
    },
    {
      name: "repl",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Elm_logo.svg/1200px-Elm_logo.svg.png",
      description: "Start an Elm repl",
      options: [
        {
          name: "--no-colors",
          description: "Turn off colors in the repl",
        },
        {
          name: "--interpreter",
          description:
            "Path to an alternate JS interpreter, such as Node or Deno",
          args: {
            name: "interpreter",
          },
        },
        {
          name: "--help",
          description: "Show help for elm repl",
        },
      ],
    },
    {
      name: "reactor",
      description: "Start an Elm development server",
      options: [
        {
          name: "--port",
          description: "The port to access the development server on",
          args: {
            name: "port",
            description: "The port number",
          },
        },
        {
          name: "--help",
          description: "Show help for elm reactor",
        },
      ],
    },
    {
      name: "install",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Elm_logo.svg/1200px-Elm_logo.svg.png",
      description: "Install an Elm dependency",
      args: {
        name: "package",
        description: "The name of the package to install",
        debounce: true,

        generators: packageList,
      },
      options: [
        {
          name: "--help",
          description: "Show help for elm install",
        },
      ],
    },
    {
      name: "make",
      description: "Build your Elm code",
      args: {
        template: "filepaths",
        name: "source files",
        description: "The source files to compile",
      },
      options: [
        {
          name: "--help",
          description: "Show help for elm make",
        },
        {
          name: "--debug",
          description: "Compile in debug mode",
        },
        {
          name: "--optimize",
          description: "Compile in production mode",
        },
        {
          name: "--output",
          description: "Where to output the compiled code",
          args: {
            name: "output file",
            description: "Name and location of output",
          },
        },
        {
          name: "--docs",
          description: "Generate a JSON file of documentation",
          args: {
            name: "output json",
            description: "Name and location of output",
          },
        },
      ],
    },
    {
      name: "bump",
      description: "Bump the version of your package",
      options: [
        {
          name: "--help",
          description: "Show help for elm bump",
        },
      ],
    },
    {
      name: "diff",
      description: "See what changed between versions of a package",
      options: [
        {
          name: "--help",
          description: "Show help for elm diff",
        },
      ],
      args: [
        {
          name: "package",
          isOptional: true,
        },
        {
          name: "version",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "publish",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Elm_logo.svg/1200px-Elm_logo.svg.png",
      description: "Publish your package",
      options: [
        {
          name: "--help",
          description: "Show help for elm publish",
        },
      ],
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help for elm",
    },
  ],
};
export default completionSpec;
