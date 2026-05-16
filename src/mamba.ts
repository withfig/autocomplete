// Interface for the json output of packages
interface Package {
  baseURL: string;
  buildNumber: number;
  buildString: string;
  channel: string;
  distName: string;
  name: string;
  platform: string; // might do more focused types here
  version: string;
}

// Interface for search results from `conda search`
interface SearchItem {
  arch: null;
  build: string;
  build_number: number;
  channel: string;
  constrains: string[];
  depends: string[];
  fn: string;
  license: string;
  license_family?: string;
  md5: string;
  name: string;
  noarch?: string;
  package_type?: string;
  platform: null;
  sha256: string;
  size: number;
  subdir: string;
  timestamp?: number;
  url: string;
  version: string;
}
// using conda for all the generators as mamba just proxies over them
const getMambaEnvs: Fig.Generator = {
  // For some reason the json version of this command
  // does not give out the names, so here we are
  script: ["conda", "env", "list"],
  scriptTimeout: 10000,
  cache: {
    strategy: "stale-while-revalidate",
  },
  postProcess: function (out) {
    const lines = out.split("\n");
    const availableEnvs: Fig.Suggestion[] = [];
    // Skip first 2 lines as they are just headers for the output
    for (let i = 2; i < lines.length; i++) {
      const parts = lines[i].split(" ").filter((p) => p != "");
      const isActive = parts[1] == "*";
      availableEnvs.push({
        name: parts[0],
        description: parts[parts.length - 1],
        priority: isActive ? 100 : 50,
        icon: isActive ? "✅" : "🐍",
      });
    }
    return availableEnvs;
  },
};

const getInstalledPackages: Fig.Generator = {
  script: ["conda", "list", "--json"],
  scriptTimeout: 10000,
  cache: {
    strategy: "stale-while-revalidate",
  },
  postProcess: function (out) {
    let installedPackages: Array<Fig.Suggestion> = [];
    try {
      const parsed: Array<Package> = JSON.parse(out);
      installedPackages = parsed.map((conda_package) => {
        return <Fig.Suggestion>{
          name: conda_package.name,
          description: `${conda_package.version} - ${conda_package.platform}`,
          icon: "fig://icon?type=package",
        };
      });
      return installedPackages;
    } catch (e) {
      return installedPackages;
    }
  },
};
// This is a generator that searches for a given query via conda search
const condaSearchGenerator: Fig.Generator = {
  script: (context) => {
    const searchTerm = context[context.length - 1];
    return ["conda", "search", searchTerm, "--json"];
  },
  scriptTimeout: 10000,
  postProcess(out) {
    let searchResults: Array<Fig.Suggestion> = [];
    try {
      const parsed = JSON.parse(out);
      // just get the names of the packages
      searchResults = Object.entries(parsed).map(
        ([key, value]: [string, SearchItem[]]) => {
          return <Fig.Suggestion>{
            name: key,
            icon: "fig://icon?type=package",
            description: `${value[value.length - 1].version} - ${
              value[value.length - 1].subdir
            }`,
          };
        }
      );
      return searchResults;
    } catch (e) {
      return searchResults;
    }
  },
};

const name_options: Fig.Option[] = [
  {
    name: ["-n", "--name"],
    description: "Name of environment",
    args: {
      name: "environment",
    },
    insertValue: "-n '{cursor}'",
  },
  {
    name: ["-p", "--prefix"],
    description: "Full path to environment location (i.e. prefix)",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
];

const update_options: Fig.Option[] = [
  {
    name: "--file",
    description:
      "Read package versions from the given file. Repeated file specifications can be passed (e.g. --file=file1 --file=file2)",
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  ...name_options,
  {
    name: ["-c", "--channel"],
    description:
      "They are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/",
    args: { name: "channel" },
  },
  {
    name: "--use-local",
    description: "Use locally built packages. Identical to '-c local'",
  },
  {
    name: "--override-channels",
    description:
      "Do not search default or .condarc channels. Requires --channel",
  },
  {
    name: "--repodata-fn",
    description:
      "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically",
    args: {
      name: "repodata",
    },
  },
  {
    name: "--strict-channel-priority",
    description:
      "Packages in lower priority channels are not considered if a package with the same name appears in a higher priority channel",
  },
  {
    name: "--no-channel-priority",
    description:
      "Package version takes precedence over channel priority. Overrides the value given by conda config --show channel_priority",
  },
  {
    name: "--no-deps",
    description:
      "Do not install, update, remove, or change dependencies. This WILL lead to broken environments and inconsistent behavior. Use at your own risk",
  },
  { name: "--only-deps", description: "Only install dependencies" },
  { name: "--no-pin", description: "Ignore pinned file" },
  {
    name: "--force-reinstall",
    description:
      "Ensure that any user-requested package for the current operation is uninstalled and reinstalled, even if that package already exists in the environment",
  },
  {
    name: ["--freeze-installed", "--no-update-deps"],
    description: "Do not update or change already-installed dependencies",
  },
  { name: "--update-deps", description: "Update dependencies" },
  {
    name: ["-S", "--satisfied-skip-solve"],
    description:
      "Exit early and do not run the solver if the requested specs are satisfied. Also skips aggressive updates as configured by 'aggressive_update_packages'. Similar to the default behavior of 'pip install'",
  },
  {
    name: ["--update-all", "--all"],
    description: "Update all installed packages in the environment",
  },
  {
    name: "--update-specs",
    description: "Update based on provided specifications",
  },
  {
    name: "--copy",
    description:
      "Install all packages using copies instead of hard- or soft-linking",
  },
  {
    name: "--clobber",
    description:
      "Allow clobbering of overlapping file paths within packages, and suppress related warnings",
  },
  {
    name: ["-C", "--use-index-cache"],
    description: "Use cache of channel index files, even if it has expired",
  },
  {
    name: ["-k", "--insecure"],
    description:
      "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'",
  },
  {
    name: "--offline",
    description: "Offline mode. Don't connect to the Internet",
  },
  {
    name: ["-d", "--dry-run"],
    description: "Only display what would have been done",
  },
  {
    name: "--json",
    description:
      "Report all output as json. Suitable for using conda programmatically",
  },
  {
    name: ["-q", "--quiet"],
    description: "Do not display progress bar",
  },
  {
    name: ["-v", "--verbose"],
    description:
      "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE",
    isRepeatable: true,
  },
  { name: ["-y", "--yes"], description: "Do not ask for confirmation" },
  {
    name: "--download-only",
    description:
      "Solve an environment and ensure package caches are populated, but exit prior to unlinking and linking packages into the prefix",
  },
  {
    name: "--show-channel-urls",
    description:
      "Show channel urls. Overrides the value given by conda config --show show_channel_urls",
  },
];

const remove_options: Fig.Option[] = [
  {
    name: "--dev",
    description:
      "Use sys.executable -m conda in wrapper scripts instead of CONDA_EXE. This is mainly for use during tests where we test new conda source against old Python versions",
  },
  ...name_options,
  {
    name: ["-c", "--channel"],
    description:
      "They are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/",
    args: {
      name: "channel",
    },
  },
  {
    name: "--use-local",
    description: "Use locally built packages. Identical to '-c local'",
  },
  {
    name: "--override-channels",
    description:
      "Do not search default or .condarc channels. Requires --channel",
  },
  {
    name: "--repodata-fn",
    description:
      "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically",
    args: {
      name: "repodata",
    },
  },
  {
    name: "--all",
    description: "Remove all packages, i.e., the entire environment",
  },
  {
    name: "--features",
    description: "Remove features (instead of packages)",
  },
  {
    name: ["--force-remove", "--force"],
    description:
      "Forces removal of a package without removing packages that depend on it. Using this option will usually leave your environment in a broken and inconsistent state",
  },
  { name: "--no-pin", description: "Ignore pinned file" },
  {
    name: ["-C", "--use-index-cache"],
    description: "Use cache of channel index files, even if it has expired",
  },
  {
    name: ["-k", "--insecure"],
    description:
      "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'",
  },
  {
    name: "--offline",
    description: "Offline mode. Don't connect to the Internet",
  },
  {
    name: ["-d", "--dry-run"],
    description: "Only display what would have been done",
  },
  {
    name: "--json",
    description:
      "Report all output as json. Suitable for using conda programmatically",
  },
  {
    name: ["-q", "--quiet"],
    description: "Do not display progress bar",
  },
  {
    name: ["-v", "--verbose"],
    description:
      "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE",
    isRepeatable: true,
  },
  { name: ["-y", "--yes"], description: "Do not ask for confirmation" },
];

const repoquery_options: Fig.Option[] = [
  {
    name: ["-c", "--channel"],
    description:
      "They are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/",
    args: {
      name: "channel",
    },
  },
  {
    name: "--use-local",
    description: "Use locally built packages. Identical to '-c local'",
  },
  {
    name: "--override-channels",
    description:
      "Do not search default or .condarc channels. Requires --channel",
  },
  {
    name: "--repodata-fn",
    description:
      "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically",
    args: {
      name: "repodata",
    },
  },
  {
    name: ["-C", "--use-index-cache"],
    description: "Use cache of channel index files, even if it has expired",
  },
  {
    name: ["-k", "--insecure"],
    description:
      "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'",
  },
  {
    name: "--offline",
    description: "Offline mode. Don't connect to the Internet",
  },
  {
    name: ["-C", "--use-index-cache"],
    description: "Use cache of channel index files, even if it has expired",
  },
  {
    name: ["-k", "--insecure"],
    description:
      "Allow conda to perform 'insecure SSL' connections and transfers. Equivalent to setting 'ssl_verify' to 'false'",
  },
  {
    name: "--offline",
    description: "Offline mode. Don't connect to the Internet",
  },
  {
    name: "--json",
    description:
      "Report all output as json. Suitable for using conda programmatically",
  },
  {
    name: ["-v", "--verbose"],
    description:
      "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE",
    isRepeatable: 3,
  },
  { name: ["-q", "--quiet"], description: "Do not display progress bar" },
];
const completionSpec: Fig.Spec = {
  name: "mamba",
  description:
    "Mamba is a reimplementation of the conda package manager in C++",
  subcommands: [
    {
      name: "activate",
      description: "Activate an environment",
      args: {
        name: "environment",
        generators: getMambaEnvs,
      },
      options: [
        {
          name: "--stack",
          description:
            "Stack the environment being activated on top of the previous active environment",
          exclusiveOn: ["--no-stack"],
        },
        {
          name: "--no-stack",
          description:
            "Do not stack the environment. Overrides 'auto_stack' setting",
          exclusiveOn: ["--stack"],
        },
      ],
    },
    {
      name: "deactivate",
      description: "Deactivate an environment",
    },
    {
      name: "clean",
      description: "Remove unused packages and caches",
      options: [
        {
          name: ["-a", "--all"],
          description:
            "Remove index cache, lock files, unused cache packages, and tarballs",
        },
        {
          name: ["-i", "--index-cache"],
          description: "Remove index cache",
        },
        {
          name: ["-p", "--packages"],
          description: "Remove unused packages from writable package caches",
        },
        {
          name: ["-t", "--tarballs"],
          description: "Remove cached package tarballs",
        },
        {
          name: ["-f", "--force-pkgs-dirs"],
          description: "Remove all writable package caches",
        },
        {
          name: ["-l", "--logfiles"],
          description: "Remove log files",
        },
        {
          name: "--locks",
          description: "Remove lock files",
        },
        {
          name: ["-c", "--tempfiles"],
          description:
            "Remove temporary files that could not be deleted earlier due to being in-use. Argument is path(s) to prefix(es) where files should be found and removed",
          args: {
            name: "file",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: ["-d", "--dry-run"],
          description: "Only display what would have been done",
        },
        {
          name: "--json",
          description:
            "Report all output as json. Suitable for using conda programmatically",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not display progress bar",
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE",
          isRepeatable: true,
        },
        {
          name: ["-y", "--yes"],
          description: "Do not ask for confirmation",
        },
      ],
    },
    {
      name: "compare",
      description: "Compare packages between conda environments",
      args: {
        name: "file",
        description:
          "Path to the environment file that is to be compared against",
        template: "filepaths",
      },
      options: [
        ...name_options,
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit",
        },
        {
          name: "--json",
          description:
            "Report all output as json. Suitable for using conda programmatically",
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Use once for info, twice for debug, three times for trace",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not display progress bar",
        },
      ],
    },
    {
      name: "create",
      description:
        "Create a new conda environment from a list of specified packages",
      args: {
        name: "package_spec",
        description: "Packages to install or update in the conda environment",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "--clone",
          description: "Path to (or name of) existing local environment",
          args: {
            name: "env",
            generators: getMambaEnvs,
          },
        },
        {
          name: "--file",
          description:
            "Read package versions from the given file. Repeated file specifications can be passed (e.g. --file=file1 --file=file2)",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--dev",
          description:
            "Use sys.executable -m conda in wrapper scripts instead of CONDA_EXE. This is mainly for use during tests where we test new conda source against old Python versions",
        },
        ...name_options,
        {
          name: ["-c", "--channel"],
          description:
            "They are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/",
          args: {
            name: "channel",
          },
        },
        {
          name: "--use-local",
          description: "Use locally built packages. Identical to '-c local'",
        },
        {
          name: "--override-channels",
          description:
            "Do not search default or .condarc channels. Requires --channel",
          dependsOn: ["--channel"],
        },
        {
          name: "--repodata-fn",
          description:
            "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically",
          args: {
            name: "repodata",
          },
          isRepeatable: true,
        },
        {
          name: "--strict-channel-priority",
          description:
            "Packages in lower priority channels are not considered if a package with the same name appears in a higher priority channel",
        },
        {
          name: "--no-channel-priority",
          description:
            "Package version takes precedence over channel priority. Overrides the value given by conda config --show channel_priority",
        },
        {
          name: "--no-deps",
          description:
            "Do not install, update, remove, or change dependencies. This WILL lead to broken environments and inconsistent behavior. Use at your own risk",
          isDangerous: true,
        },
        { name: "--only-deps", description: "Only install dependencies" },
        { name: "--no-pin", description: "Ignore pinned file" },
        {
          name: "--no-default-packages",
          description: "Ignore create_default_packages in the .condarc file",
        },
        {
          name: "--copy",
          description:
            "Install all packages using copies instead of hard- or soft-linking",
        },
        {
          name: ["-C", "--use-index-cache"],
          description:
            "Use cache of channel index files, even if it has expired",
        },
        {
          name: ["-k", "--insecure"],
          description:
            "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'",
        },
        {
          name: "--offline",
          description: "Offline mode. Don't connect to the Internet",
        },
        {
          name: ["-d", "--dry-run"],
          description: "Only display what would have been done",
        },
        {
          name: "--json",
          description:
            "Report all output as json. Suitable for using conda programmatically",
        },
        { name: ["-q", "--quiet"], description: "Do not display progress bar" },
        {
          name: ["-v", "--verbose"],
          description:
            "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE",
          isRepeatable: true,
        },
        { name: ["-y", "--yes"], description: "Do not ask for confirmation" },
        {
          name: "--download-only",
          description:
            "Solve an environment and ensure package caches are populated, but exit prior to unlinking and linking packages into the prefix",
        },
        {
          name: "--show-channel-urls",
          description:
            "Show channel urls. Overrides the value given by conda config --show show_channel_urls",
        },
      ],
    },
    {
      name: "info",
      description: "Display information about current conda install",
      options: [
        { name: ["-a", "--all"], description: "Show all information" },
        { name: "--base", description: "Display base environment path" },
        {
          name: ["-e", "--envs"],
          description: "List all known conda environments",
        },
        {
          name: ["-s", "--system"],
          description: "List environment variables",
        },
        {
          name: "--unsafe-channels",
          description: "Display list of channels with tokens exposed",
        },
        {
          name: "--json",
          description:
            "Report all output as json. Suitable for using conda programmatically",
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Use once for info, twice for debug, three times for trace",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not display progress bar",
        },
      ],
    },
    {
      name: "init",
      description: "Initialize conda for shell interaction. [Experimental]",
    },
    {
      name: "install",
      description:
        "Installs a list of packages into a specified conda environment",
      args: {
        name: "package spec",
        description: "Packages to install or update in the conda environment",
        debounce: true,
        isVariadic: true,
        generators: condaSearchGenerator,
      },
      options: [
        {
          name: "--revision",
          description: "Revert to the specified REVISION",
          args: {
            name: "revision",
          },
        },
        {
          name: "--file",
          description:
            "Read package versions from the given file. Repeated file specifications can be passed (e.g. --file=file1 --file=file2)",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--dev",
          description:
            "Use sys.executable -m conda in wrapper scripts instead of CONDA_EXE. This is mainly for use during tests where we test new conda source against old Python versions",
        },
        ...name_options,
        {
          name: ["-c", "--channel"],
          description:
            "They are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/",
          args: {
            name: "channel",
          },
        },
        {
          name: "--use-local",
          description: "Use locally built packages. Identical to '-c local'",
        },
        {
          name: "--override-channels",
          description:
            "Do not search default or .condarc channels. Requires --channel",
        },
        {
          name: "--repodata-fn",
          description:
            "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically",
          args: {
            name: "repodata",
          },
        },
        {
          name: "--strict-channel-priority",
          description:
            "Packages in lower priority channels are not considered if a package with the same name appears in a higher priority channel",
        },
        {
          name: "--no-channel-priority",
          description:
            "Package version takes precedence over channel priority. Overrides the value given by conda config --show channel_priority",
        },
        {
          name: "--no-deps",
          description:
            "Do not install, update, remove, or change dependencies. This WILL lead to broken environments and inconsistent behavior. Use at your own risk",
        },
        { name: "--only-deps", description: "Only install dependencies" },
        { name: "--no-pin", description: "Ignore pinned file" },
        {
          name: "--force-reinstall",
          description:
            "Ensure that any user-requested package for the current operation is uninstalled and reinstalled, even if that package already exists in the environment",
        },
        {
          name: ["--freeze-installed", "--no-update-deps"],
          description: "Do not update or change already-installed dependencies",
        },
        { name: "--update-deps", description: "Update dependencies" },
        {
          name: ["-S", "--satisfied-skip-solve"],
          description:
            "Exit early and do not run the solver if the requested specs are satisfied. Also skips aggressive updates as configured by 'aggressive_update_packages'. Similar to the default behavior of 'pip install'",
        },
        {
          name: ["--update-all", "--all"],
          description: "Update all installed packages in the environment",
        },
        {
          name: "--update-specs",
          description: "Update based on provided specifications",
        },
        {
          name: "--copy",
          description:
            "Install all packages using copies instead of hard- or soft-linking",
        },
        {
          name: ["-m", "--mkdir"],
          description: "Create the environment directory if necessary",
        },
        {
          name: "--clobber",
          description:
            "Allow clobbering of overlapping file paths within packages, and suppress related warnings",
        },
        {
          name: ["-C", "--use-index-cache"],
          description:
            "Use cache of channel index files, even if it has expired",
        },
        {
          name: ["-k", "--insecure"],
          description:
            "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'",
        },
        {
          name: "--offline",
          description: "Offline mode. Don't connect to the Internet",
        },
        {
          name: ["-d", "--dry-run"],
          description: "Only display what would have been done",
        },
        {
          name: "--json",
          description:
            "Report all output as json. Suitable for using conda programmatically",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not display progress bar",
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE",
          isRepeatable: true,
        },
        { name: ["-y", "--yes"], description: "Do not ask for confirmation" },
        {
          name: "--download-only",
          description:
            "Solve an environment and ensure package caches are populated, but exit prior to unlinking and linking packages into the prefix",
        },
        {
          name: "--show-channel-urls",
          description:
            "Show channel urls. Overrides the value given by conda config --show show_channel_urls",
        },
      ],
    },
    {
      name: "list",
      description: "List linked packages in a conda environment",
      args: {
        name: "regex",
        description: "List only packages matching this regular expression",
        isOptional: true,
      },
      options: [
        {
          name: "--show-channel-urls",
          description:
            "Show channel urls. Overrides the value given by conda config --show show_channel_urls",
        },
        {
          name: ["-c", "--canonical"],
          description:
            "Output canonical names of packages only. Implies --no-pip",
        },
        {
          name: ["-f", "--full-name"],
          description: "Only search for full names, i.e., ^<regex>$",
        },
        {
          name: "--explicit",
          description:
            "List explicitly all installed conda packaged with URL (output may be used by conda create --file)",
        },
        {
          name: "--md5",
          description: "Add MD5 hashsum when using --explicit",
        },
        {
          name: ["-e", "--export"],
          description:
            "Output requirement string only (output may be used by conda create --file)",
        },
        {
          name: ["-r", "--revisions"],
          description: "List the revision history and exit",
        },
        {
          name: "--no-pip",
          description: "Do not include pip-only installed packages",
        },
        ...name_options,
        {
          name: "--json",
          description:
            "Report all output as json. Suitable for using conda programmatically",
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Use once for info, twice for debug, three times for trace",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not display progress bar",
        },
      ],
    },
    {
      name: "package",
      description: "Low-level conda package utility. (EXPERIMENTAL)",
      options: [
        {
          name: ["-w", "--which"],
          description:
            "Given some PATH print which conda package the file came from",
          args: {
            name: "Path",
            isVariadic: true,
          },
        },
        {
          name: ["-r", "--reset"],
          description: "Remove all untracked files and exit",
        },
        {
          name: ["-u", "--untracked"],
          description: "Display all untracked files and exit",
        },
        {
          name: "--pkg-name",
          description: "Package name of the created package",
          args: {
            name: "package_name",
          },
        },
        {
          name: "--pkg-version",
          description: "Package version of the created package",
          args: {
            name: "package_version",
          },
        },
        {
          name: "--pkg-build",
          description: "Package build number of the created package",
          args: {
            name: "package_build",
          },
        },
        ...name_options,
      ],
    },
    {
      name: "remove",
      description:
        "Remove a list of packages from a specified conda environment",
      args: {
        name: "package",
        isVariadic: true,
        generators: getInstalledPackages,
      },
      options: [...remove_options],
    },
    {
      name: "uninstall",
      description: "Alias for remove",
      args: {
        name: "package",
        isVariadic: true,
        generators: getInstalledPackages,
      },
      options: [...remove_options],
    },
    {
      name: "run",
      description: "Run an executable in a conda environment",
      args: {
        name: "executable",
        template: "filepaths",
      },
      options: [
        ...name_options,
        {
          name: ["-v", "--verbose"],
          description:
            "Use once for info, twice for debug, three times for trace",
        },
        {
          name: "--dev",
          description:
            "Sets `CONDA_EXE` to `python -m conda`, assuming the CWD contains the root of conda development sources",
        },
        {
          name: "--debug-wrapper-scripts",
          description:
            "When this is set, where implemented, the shell wrapper scripts will echo to stderr a lot of debugging information",
        },
        {
          name: "--cwd",
          description:
            "Current working directory for command to run in. Defaults to cwd",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--no-capture-output",
          description: "Don't capture stdout/stderr",
        },
        {
          name: "--live-stream",
          description:
            "Display the output for the subprocess stdout and stderr on real time",
        },
      ],
    },
    {
      name: "search",
      description:
        "Search for packages and display associated information. The input is a MatchSpec, a query language for conda packages",
      args: { name: "query" },
      options: [
        {
          name: "--envs",
          description:
            "Search all of the current user's environments. If run as Administrator (on Windows) or UID 0 (on unix), search all known environments on the system",
        },
        {
          name: ["-i", "--info"],
          description: "Provide detailed information about each package",
        },
        {
          name: ["--subdir", "--platform"],
          description:
            "Search the given subdir. Should be formatted like 'osx-64', 'linux-32', 'win-64', and so on. The default is to search the current platform",
          args: {
            name: "platform",
          },
        },
        {
          name: ["-c", "--channel"],
          description:
            "They are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/",
          args: {
            name: "channel",
          },
        },
        {
          name: "--use-local",
          description: "Use locally built packages. Identical to '-c local'",
        },
        {
          name: "--override-channels",
          description:
            "Do not search default or .condarc channels. Requires --channel",
          dependsOn: ["--channel"],
        },
        {
          name: "--repodata-fn",
          description:
            "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically",
          args: {
            name: "repodata",
          },
        },
        {
          name: ["-C", "--use-index-cache"],
          description:
            "Use cache of channel index files, even if it has expired",
        },
        {
          name: ["-k", "--insecure"],
          description:
            "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'",
        },
        {
          name: "--offline",
          description: "Offline mode. Don't connect to the Internet",
        },
        {
          name: "--json",
          description:
            "Report all output as json. Suitable for using conda programmatically",
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Use once for info, twice for debug, three times for trace",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not display progress bar",
        },
      ],
    },
    {
      name: "update",
      description: "Updates conda packages to the latest compatible version",
      args: {
        name: "package",
        isVariadic: true,
        suggestions: [
          { name: "mamba", description: "Update mamba", icon: "⭐️" },
        ],
        generators: getInstalledPackages,
      },
      options: [...update_options],
    },
    {
      name: "upgrade",
      description: "Alias for update",
      args: {
        name: "package",
        isVariadic: true,
        suggestions: [
          { name: "mamba", description: "Update mamba", icon: "⭐️" },
        ],
        generators: getInstalledPackages,
      },
      options: [...update_options],
    },
    {
      name: "repoquery",
      description: "Query repositories using mamba",
      subcommands: [
        {
          name: "search",
          description:
            "Search for packages and display associated information. The input is a MatchSpec, a query language for conda packages",
          options: [...repoquery_options],
          args: {
            name: "package",
            suggestions: [
              {
                name: "xtensor>=0.18",
                description:
                  "Search for xtensor version which is more than 0.18",
              },
            ],
            generators: getInstalledPackages,
          },
        },
        {
          name: "depends",
          description: "List dependencies for a package",
          options: [...repoquery_options],
          args: {
            name: "package",
            suggestions: [
              {
                name: "xtensor",
                description: "List dependencies for xtensor package",
              },
            ],
            generators: getInstalledPackages,
          },
        },
        {
          name: "whoneeds",
          description: "List packages that require a given package",
          options: [...repoquery_options],
          args: {
            name: "package",
            suggestions: [
              {
                name: "xtl",
                description: "List packages that require xtl package",
              },
            ],
          },
        },
      ],
    },
    {
      name: "env",
      description: "Manage environments",
      subcommands: [
        {
          name: "list",
          description: "List environments",
          args: { name: "environment", generators: getMambaEnvs },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for mamba and exit",
    },
    {
      name: ["--version", "-V"],
      description: "Show the conda version number and exit",
    },
  ],
};
export default completionSpec;
