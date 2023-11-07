const options: Fig.Option[] = [
  {
    name: "--file",
    description: "The premake5.lua file",
    args: {
      name: "file",
      description: "Path to the premake5.lua file",
      template: "filepaths",
    },
  },
  {
    name: "--debugger",
    description: "Start MobDebug remote debugger. Works with ZeroBrane Studio",
  },
  {
    name: "--fatal",
    description: "Treat warnings from project scripts as errors",
  },
  {
    name: "--insecure",
    description: "Forfit SSH certification checks",
  },
  {
    name: "--interactive",
    description: "Interactive command prompt",
  },
  {
    name: "--os",
    description: "Generate files for a different operating system",
    args: {
      name: "os",
      description: "The operating system",
      suggestions: [
        "aix",
        "android",
        "bsd",
        "haiku",
        "hurd",
        "ios",
        "linux",
        "macosx",
        "solaris",
        "windows",
      ],
    },
  },
  {
    name: "--scripts",
    description: "Search for additional scripts on the given path",
    args: {
      name: "path",
      description: "The path to the scripts",
      template: "folders",
    },
  },
  {
    name: "--systemscript",
    description: "Override default system script (premake5-system.lua)",
    args: {
      name: "script",
      description: "The system script",
      template: "filepaths",
    },
  },
  {
    name: "--verbose",
    description: "Generate extra debug text output",
  },
  {
    name: "--cc",
    description: "Choose a C/C++ compiler set",
    args: {
      name: "cc",
      description: "The C/C++ compiler set",
      suggestions: ["clang", "gcc", "mingw"],
    },
  },
  {
    name: "--dc",
    description: "Choose a D compiler",
    args: {
      name: "dc",
      description: "The D compiler set",
      suggestions: ["dmd", "gdc", "ldc"],
    },
  },
  {
    name: "--dotnet",
    description: "Choose a .NET compiler set",
    args: {
      name: "dotnet",
      description: "The .NET compiler set",
      suggestions: ["mono", "msnet", "pnet"],
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "premake",
  description: "Premake CLI",
  subcommands: [
    {
      name: "clean",
      description: "Remove all binaries and generated files",
      options: options,
    },
    {
      name: "vs2022",
      description: "Generate Visual Studio 2022 project files",
      options: options,
    },
    {
      name: "vs2019",
      description: "Generate Visual Studio 2019 project files",
      options: options,
    },
    {
      name: "vs2017",
      description: "Generate Visual Studio 2017 project files",
      options: options,
    },
    {
      name: "vs2015",
      description: "Generate Visual Studio 2015 project files",
      options: options,
    },
    {
      name: "vs2013",
      description: "Generate Visual Studio 2013 project files",
      options: options,
    },
    {
      name: "vs2012",
      description: "Generate Visual Studio 2012 project files",
      options: options,
    },
    {
      name: "vs2010",
      description: "Generate Visual Studio 2010 project files",
      options: options,
    },
    {
      name: "vs2008",
      description: "Generate Visual Studio 2008 project files",
      options: options,
    },
    {
      name: "vs2005",
      description: "Generate Visual Studio 2005 project files",
      options: options,
    },
    {
      name: "gmake",
      description:
        "Generate GNU Makefiles (This generator is deprecated by gmake2)",
      options: options,
    },
    {
      name: "gmake2",
      description: "Generate GNU Makefiles (including Cygwin and MinGW)",
      options: options,
    },
    {
      name: "xcode4",
      description: "Generate Apple Xcode 4 project files",
      options: options,
    },
    {
      name: "codelite",
      description: "Generate CodeLite project files",
      options: options,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Shows a complete list of the actions supported",
    },
    {
      name: "--version",
      description: "Display version information",
    },
  ],
};

export default completionSpec;
