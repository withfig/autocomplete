interface NodejsVersion {
  major: number;
  minor: number;
  patch: number;
  original: string;
  ltsName: string;
}

// Generators
const versionGenerator: Fig.Generator = {
  script: ["fnm", "list"],
  postProcess: function (out) {
    return out
      .split("\n")
      .reverse()
      .map((line) => ({
        name: line.slice(2).split(" ")[0],
        displayName: line.slice(2),
        description: `Node.js ${line.slice(2)}`,
      }));
  },
};

const NODE_VERSION_REGEX =
  /v(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)(?: \((?<ltsName>\w+)\))?/iu;
const parseNodejsVersion = (raw: string): NodejsVersion => {
  const { major, minor, patch, ltsName } =
    NODE_VERSION_REGEX.exec(raw)?.groups ?? {};
  return {
    major: Number(major),
    minor: Number(minor),
    patch: Number(patch),
    original: raw,
    ltsName,
  };
};
const uniqBy = <T = unknown>(arr: T[], callback: (a: T, b: T) => boolean) =>
  arr.reduce((acc, v) => {
    if (!acc.some((x) => callback(v, x))) acc.push(v);
    return acc;
  }, []);

/**
 * This generator will output the following Node.js' versions:
 * - Every version of the latest LTS;
 * - Latest release of all named LTS;
 * - Latest release of the beta right before the last LTS, or the
 *   beta right after it if it exists;
 * - Every other version, sorted;
 */
const remoteVersionGenerator: Fig.Generator = {
  script: ["fnm", "list-remote"],
  postProcess: function (out) {
    const parsed = out
      .split("\n")
      .reverse()
      .filter(Boolean)
      .map(parseNodejsVersion);

    // The last even major release, that's to say the last LTS.
    const lastLtsMajor = parsed.find(
      (version) => version.major % 2 === 0
    ).major;
    const latests = new Map<number, NodejsVersion>();

    const nodeVersion = parsed
      .map((version) => {
        const latestRelease = latests.get(version.major);
        if (!latestRelease || latestRelease.minor < version.minor)
          latests.set(version.major, version);
        return version;
      })
      .filter((version) => {
        // If latest LTS, show every version.
        if (version.major === lastLtsMajor) return true;

        const isLatestRelease =
          version.original === latests.get(version.major).original;
        // If any other LTS, show only its latest release.
        if (version.major % 2 === 0) return isLatestRelease;
        // Otherwise (beta), show only if it is right before or after
        // the latest LTS, and show only its latest release
        return (
          (version.major === lastLtsMajor - 1 ||
            version.major === lastLtsMajor + 1) &&
          isLatestRelease
        );
      });

    // Uniquify the list, and put them in a Suggestion object.
    return uniqBy(
      [...nodeVersion, ...parsed],
      (a, b) => a.original === b.original
    ).map((version) =>
      version.ltsName &&
      latests.get(version.major).original === version.original
        ? {
            name: `lts/${version.ltsName}`,
            displayName: version.original,
            description: `Node.js ${version.original}`,
          }
        : {
            name: version.original.split(" ").shift(),
            description: `Node.js ${version.original}`,
          }
    );
  },
  cache: {
    ttl: 60 * 60 * 24, // 1 day
  },
};

// Args
const version: Fig.Arg = {
  name: "version",
  description:
    "A version string. Can be a partial semver or a LTS version name by the format lts/NAME",
  isOptional: true,
};

const command: Fig.Arg = {
  name: "command",
  isCommand: true,
  isVariadic: true,
};

// Options
const lts: Fig.Option = {
  name: "--lts",
  description: "Install latest LTS",
};

const installIfMissing: Fig.Option = {
  name: "--install-if-missing",
  description: "Install the version if it isn't installed yet",
};

const shell: Fig.Option = {
  name: "shell",
  description: "The shell syntax to use. Infers when missing",
  args: {
    name: "shell",
    suggestions: ["zsh", "bash", "fish", "powershell", "elvish"],
  },
};

const help: Fig.Option = {
  name: ["--help", "-h"],
  description: "Prints help information",
};

const fnmVersion: Fig.Option = {
  name: ["--version", "-V"],
  description: "Prints version information",
};

const arch: Fig.Option = {
  name: "--arch",
  description:
    "Override the architecture of the installed Node binary. Defaults to arch of fnm binary",
  args: {
    name: "arch",
    default: "x64",
    suggestions: ["x86", "x64", "arm64", "armv7l", "ppc64le", "ppc64", "s390x"],
  },
};

const fnmDir: Fig.Option = {
  name: "--fnm-dir",
  description: "The root directory of fnm installations",
  args: {
    name: "dir",
    template: "folders",
  },
};

const logLevel: Fig.Option = {
  name: "--log-level",
  description: "The log level of fnm commands",
  args: {
    name: "logLevel",
    default: "info",
    suggestions: ["quiet", "info", "error"],
  },
};

const nodeDistMirror: Fig.Option = {
  name: "--node-dist-mirror",
  description: "Mirror of https://nodejs.org/dist",
  args: {
    name: "nodeDistMirror",
    default: "https://nodejs.org/dist",
  },
};

const versionFileStrategy: Fig.Option = {
  name: "--version-file-strategy",
  description: "Strategy for how to resolve the Node version",
  args: {
    name: "strategy",
    default: "local",
    suggestions: ["local", "recursive"],
  },
};

// Theses options are available in every single sub-command
const baseOptions = [
  help,
  fnmVersion,
  arch,
  fnmDir,
  logLevel,
  nodeDistMirror,
  versionFileStrategy,
];

const completionSpec: Fig.Spec = {
  name: "fnm",
  description: "Fast Node Manager",
  options: baseOptions,
  subcommands: [
    {
      name: "install",
      description: "Install a new Node.js version",
      args: { ...version, generators: remoteVersionGenerator },
      options: [lts, ...baseOptions],
      priority: 61,
    },
    {
      name: "uninstall",
      description: "Uninstall a Node.js version",
      args: { ...version, generators: versionGenerator },
      options: [lts, ...baseOptions],
    },
    {
      name: "use",
      description: "Change Node.js version",
      args: { ...version, generators: versionGenerator },
      options: [installIfMissing, lts, ...baseOptions],
      priority: 62,
    },
    {
      name: "exec",
      description: "Run a command within fnm context",
      args: command,
      options: [
        {
          name: "--using",
          description:
            "Either an explicit version, or a filename with the version written in it",
          args: { ...version },
        },
        lts,
        ...baseOptions,
      ],
    },
    {
      name: "current",
      description: "Print the current Node.js version",
      options: baseOptions,
      priority: 60,
    },
    {
      name: ["list", "ls"],
      description: "List all locally installed Node.js versions",
      options: baseOptions,
    },
    {
      name: ["list-remote", "ls-remote"],
      description: "List all remote Node.js versions",
      options: baseOptions,
    },
    {
      name: "alias",
      description: "Alias a version to a common name",
      args: [
        {
          ...version,
          generators: versionGenerator,
        },
        {
          name: "name",
          description: "Alias name",
        },
      ],
      options: baseOptions,
    },
    {
      name: "unalias",
      description: "Deletes the alias named <name>",
      args: {
        name: "requested-alias",
        description: "Alias name",
      },
      options: baseOptions,
    },
    {
      name: "completions",
      description: "Print shell completions to stdout",
      options: [shell, ...baseOptions],
    },
    {
      name: "default",
      description:
        "Set a version as the default version. This is a shorthand for 'fnm alias VERSION default'",
      args: { ...version, generators: versionGenerator },
      options: baseOptions,
    },
    {
      name: "env",
      description: "Print and set up required environment variables for fnm",
      options: [
        {
          name: "--use-on-cd",
          description:
            "Print the script to change Node versions every directory change",
        },
        shell,
        ...baseOptions,
      ],
    },
    {
      name: "help",
      description:
        "Prints the help page or the help of the given subcommand(s)",
      args: {
        name: "command",
        isOptional: true,
        template: "help",
      },
      options: baseOptions,
    },
  ],
};

export default completionSpec;
