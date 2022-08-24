const operations = [
  {
    name: ["-D", "--database"],
    description: `Operate on the package database. This operation allows you to modify certain attributes of the installed packages in pacman’s database. It also allows you to check the databases for internal consistency. See Database Options below`,
  },
  {
    name: ["-Q", "--query"],
    description: `Query the package database. This operation allows you to view installed packages and their files, as well as meta-information about individual packages (dependencies, conflicts, install date, build date, size). This can be run against the local package database or can be used on individual package files. In the first case, if no package names are provided in the command line, all installed packages will be queried. Additionally, various filters can be applied on the package list. See Query Options below`,
  },
  {
    name: ["-R", "--remove"],
    description: `Remove package(s) from the system. Groups can also be specified to be removed, in which case every package in that group will be removed. Files belonging to the specified package will be deleted, and the database will be updated. Most configuration files will be saved with a .pacsave extension unless the --nosave option is used. See Remove Options below`,
  },
  {
    name: ["-S", "--sync"],
    description: `Synchronize packages. Packages are installed directly from the remote repositories, including all dependencies required to run the packages. For example, pacman -S qt will download and install qt and all the packages it depends on. If a package name exists in more than one repository, the repository can be explicitly specified to clarify the package to install: pacman -S testing/qt. You can also specify version requirements: pacman -S "bash>=3.2". Quotes are needed, otherwise the shell interprets ">" as redirection to a file`,
  },
  {
    name: ["-T", "--deptest"],
    description: `Check dependencies; this is useful in scripts such as makepkg to check installed packages. This operation will check each dependency specified and return a list of dependencies that are not currently satisfied on the system. This operation accepts no other options. Example usage: pacman -T qt "bash>=3.2"`,
  },
  {
    name: ["-U", "--upgrade"],
    description: `Upgrade or add package(s) to the system and install the required dependencies from sync repositories. Either a URL or file path can be specified. This is a “remove-then-add” process. See Upgrade Options below; also see Handling Config Files for an explanation on how pacman takes care of configuration files`,
  },
  {
    name: ["-F", "--files"],
    description: `Query the files database. This operation allows you to look for packages owning certain files or display files owned by certain packages. Only packages that are part of your sync databases are searched. See File Options below`,
  },
  { name: ["-V", "--version"], description: `Display version and exit` },
  {
    name: ["-h", "--help"],
    description: `Display syntax for the given operation. If no operation was supplied, then the general syntax is shown`,
  },
].map(
  // Makes each option exclusive on every option but itself
  (option, index, array) => ({
    ...option,
    exclusiveOn: array
      .filter((_, testIndex) => testIndex !== index)
      .flatMap((option) => option.name),
    icon: "fig://icon?type=command",
  })
);

const dependsOn = (arr: string[], options: Fig.Option[]): Fig.Option[] =>
  options.map((option) => ({
    ...option,
    dependsOn: [...(option.dependsOn || []), ...arr],
  }));

const transactionOptions = dependsOn(
  ["-S", "-R", "-U"],
  [
    {
      name: ["-d", "--nodeps"],
      description: `Skips dependency version checks. Package names are still checked. Normally, pacman will always check a package’s dependency fields to ensure that all dependencies are installed and there are no package conflicts in the system. Specify this option twice to skip all dependency checks`,
    },
    {
      name: "--assume-installed",
      args: { name: "package=version" },
      description: `Add a virtual package "package" with version "version" to the transaction to satisfy dependencies. This allows to disable specific dependency checks without affecting all dependency checks. To disable all dependency checking, see the --nodeps option`,
    },
    {
      name: "--dbonly",
      description: `Adds/removes the database entry only, leaving all files in place`,
    },
    {
      name: "--noprogressbar",
      description: `Do not show a progress bar when downloading files. This can be useful for scripts that call pacman and capture the output`,
    },
    {
      name: "--noscriptlet",
      description: `If an install scriptlet exists, do not execute it. Do not use this unless you know what you are doing`,
    },
    {
      name: ["-p", "--print"],
      description: `Only print the targets instead of performing the actual operation (sync, remove or upgrade). Use --print-format to specify how targets are displayed. The default format string is "%l", which displays URLs with -S, file names with -U, and pkgname-pkgver with -R`,
    },
    {
      name: "--print-format",
      args: { name: "format" },
      description: `Specify a printf-like format to control the output of the --print operation. The possible attributes are: "%n" for pkgname, "%v" for pkgver, "%l" for location, "%r" for repository, and "%s" for size. Implies --print`,
    },
  ]
);

const upgradeOptions = dependsOn(
  ["-S", "-U"],
  [
    {
      name: ["-w", "--downloadonly"],
      description: `Retrieve all packages from the server, but do not install/upgrade anything`,
    },
    {
      name: "--asdeps",
      description: `Install packages non-explicitly; in other words, fake their install reason to be installed as a dependency. This is useful for makepkg and other build-from-source tools that need to install dependencies before building the package`,
    },
    {
      name: "--asexplicit",
      description: `Install packages explicitly; in other words, fake their install reason to be explicitly installed. This is useful if you want to mark a dependency as explicitly installed so it will not be removed by the --recursive remove operation`,
    },
    {
      name: "--ignore",
      args: { name: "package" },
      description: `Directs pacman to ignore upgrades of package even if there is one available. Multiple packages can be specified by separating them with a comma`,
    },
    {
      name: "--ignoregroup",
      args: { name: "group" },
      description: `Directs pacman to ignore upgrades of all packages in group, even if there is one available. Multiple groups can be specified by separating them with a comma`,
    },
    {
      name: "--needed",
      description: `Do not reinstall the targets that are already up-to-date`,
    },
    {
      name: "--overwrite",
      args: { name: "glob" },
      description: `Bypass file conflict checks and overwrite conflicting files. If the package that is about to be installed contains files that are already installed and match glob, this option will cause all those files to be overwritten. Using --overwrite will not allow overwriting a directory with a file or installing packages with conflicting files and directories. Multiple patterns can be specified by separating them with a comma. May be specified multiple times. Patterns can be negated, such that files matching them will not be overwritten, by prefixing them with an exclamation mark. Subsequent matches will override previous ones. A leading literal exclamation mark or backslash needs to be escaped`,
    },
  ]
);

const queryOptions = dependsOn(
  ["-Q"],
  [
    {
      name: ["-c", "--changelog"],
      description: `View the ChangeLog of a package if it exists`,
    },
    {
      name: ["-d", "--deps"],
      description: `Restrict or filter output to packages installed as dependencies. This option can be combined with -t for listing real orphans - packages that were installed as dependencies but are no longer required by any installed package`,
    },
    {
      name: ["-e", "--explicit"],
      description: `Restrict or filter output to explicitly installed packages. This option can be combined with -t to list explicitly installed packages that are not required by any other package`,
    },
    {
      name: ["-g", "--groups"],
      description: `Display all packages that are members of a named group. If a name is not specified, list all grouped packages`,
    },
    {
      name: ["-i", "--info"],
      description: `Display information on a given package. The -p option can be used if querying a package file instead of the local database. Passing two --info or -i flags will also display the list of backup files and their modification states`,
    },
    {
      name: ["-k", "--check"],
      description: `Check that all files owned by the given package(s) are present on the system. If packages are not specified or filter flags are not provided, check all installed packages. Specifying this option twice will perform more detailed file checking (including permissions, file sizes, and modification times) for packages that contain the needed mtree file`,
    },
    {
      name: ["-l", "--list"],
      description: `List all files owned by a given package. Multiple packages can be specified on the command line`,
    },
    {
      name: ["-m", "--foreign"],
      description: `Restrict or filter output to packages that were not found in the sync database(s). Typically these are packages that were downloaded manually and installed with --upgrade`,
    },
    {
      name: ["-n", "--native"],
      description: `Restrict or filter output to packages that are found in the sync database(s). This is the inverse filter of --foreign`,
    },
    {
      name: ["-o", "--owns"],
      args: { name: "file" },
      description: `Search for packages that own the specified file(s). The path can be relative or absolute, and one or more files can be specified`,
    },
    {
      name: ["-p", "--file"],
      description: `Signifies that the package supplied on the command line is a file and not an entry in the database. The file will be decompressed and queried. This is useful in combination with --info and --list`,
    },
    {
      name: ["-q", "--quiet"],
      description: `Show less information for certain query operations. This is useful when pacman’s output is processed in a script. Search will only show package names and not version, group, and description information; owns will only show package names instead of "file is owned by pkg" messages; group will only show package names and omit group names; list will only show files and omit package names; check will only show pairs of package names and missing files; a bare query will only show package names rather than names and versions`,
    },
    {
      name: ["-s", "--search"],
      args: { name: "regexp" },
      description: `Search each locally-installed package for names or descriptions that match regexp. When including multiple search terms, only packages with descriptions matching ALL of those terms are returned`,
    },
    {
      name: ["-t", "--unrequired"],
      description: `Restrict or filter output to print only packages neither required nor optionally required by any currently installed package. Specify this option twice to include packages which are optionally, but not directly, required by another package`,
    },
    {
      name: ["-u", "--upgrades"],
      description: `Restrict or filter output to packages that are out-of-date on the local system. Only package versions are used to find outdated packages; replacements are not checked here. This option works best if the sync database is refreshed using -Sy`,
    },
  ]
);

const removeOptions = dependsOn(
  ["-R"],
  [
    {
      name: ["-c", "--cascade"],
      description: `Remove all target packages, as well as all packages that depend on one or more target packages. This operation is recursive and must be used with care, since it can remove many potentially needed packages`,
    },
    {
      name: ["-n", "--nosave"],
      description: `Instructs pacman to ignore file backup designations. Normally, when a file is removed from the system, the database is checked to see if the file should be renamed with a .pacsave extension`,
    },
    {
      name: ["-s", "--recursive"],
      description: `Remove each target specified including all of their dependencies, provided that (A) they are not required by other packages; and (B) they were not explicitly installed by the user. This operation is recursive and analogous to a backwards --sync operation, and it helps keep a clean system without orphans. If you want to omit condition (B), pass this option twice`,
    },
    {
      name: ["-u", "--unneeded"],
      description: `Removes targets that are not required by any other packages. This is mostly useful when removing a group without using the -c option, to avoid breaking any dependencies`,
    },
  ]
);

const syncOptions = dependsOn(
  ["-S"],
  [
    {
      name: ["-c", "--clean"],
      description: `Remove packages that are no longer installed from the cache as well as currently unused sync databases to free up disk space. When pacman downloads packages, it saves them in a cache directory. In addition, databases are saved for every sync DB you download from and are not deleted even if they are removed from the configuration file pacman.conf(5). Use one --clean switch to only remove packages that are no longer installed; use two to remove all files from the cache. In both cases, you will have a yes or no option to remove packages and/or unused downloaded databases`,
    },
    {
      name: ["-g", "--groups"],
      description: `Display all the members for each package group specified. If no group names are provided, all groups will be listed; pass the flag twice to view all groups and their members`,
    },
    {
      name: ["-i", "--info"],
      description: `Display information on a given sync database package. Passing two --info or -i flags will also display those packages in all repositories that depend on this package`,
    },
    {
      name: ["-l", "--list"],
      description: `List all packages in the specified repositories. Multiple repositories can be specified on the command line`,
    },
    {
      name: ["-q", "--quiet"],
      description: `Show less information for certain sync operations. This is useful when pacman’s output is processed in a script. Search will only show package names and not repository, version, group, and description information; list will only show package names and omit databases and versions; group will only show package names and omit group names`,
    },
    {
      name: ["-s", "--search"],
      args: { name: "regexp" },
      description: `This will search each package in the sync databases for names or descriptions that match regexp. When you include multiple search terms, only packages with descriptions matching ALL of those terms will be returned`,
    },
    {
      name: ["-u", "--sysupgrade"],
      description: `Upgrades all packages that are out-of-date. Each currently-installed package will be examined and upgraded if a newer package exists. A report of all packages to upgrade will be presented, and the operation will not proceed without user confirmation. Dependencies are automatically resolved at this level and will be installed/upgraded if necessary`,
    },
    {
      name: ["-y", "--refresh"],
      description: `Download a fresh copy of the master package database from the server(s) defined in pacman.conf(5). This should typically be used each time you use --sysupgrade or -u. Passing two --refresh or -y flags will force a refresh of all package databases, even if they appear to be up-to-date`,
    },
  ]
);

const databaseOptions = dependsOn(
  ["-D"],
  [
    {
      name: "--asdeps",
      args: { name: "package" },
      description: `Mark a package as non-explicitly installed; in other words, set their install reason to be installed as a dependency`,
    },
    {
      name: "--asexplicit",
      args: { name: "package" },
      description: `Mark a package as explicitly installed; in other words, set their install reason to be explicitly installed. This is useful if you want to keep a package installed even when it was initially installed as a dependency of another package`,
    },
    {
      name: ["-k", "--check"],
      description: `Check the local package database is internally consistent. This will check all required files are present and that installed packages have the required dependencies, do not conflict and that multiple packages do not own the same file. Specifying this option twice will perform a check on the sync databases to ensure all specified dependencies are available`,
    },
    {
      name: ["-q", "--quiet"],
      description: `Suppress messages on successful completion of database operations`,
    },
  ]
);

const fileOptions = dependsOn(
  ["-F"],
  [
    {
      name: ["-y", "--refresh"],
      description: `Download fresh package databases from the server. Use twice to force a refresh even if databases are up to date`,
    },
    {
      name: ["-l", "--list"],
      description: `List the files owned by the queried package`,
    },
    {
      name: ["-x", "--regex"],
      description: `Interpret each query as a regular expression`,
    },
    {
      name: ["-q", "--quiet"],
      description: `Show less information for certain file operations. This is useful when pacman’s output is processed in a script, however, you may want to use --machinereadable instead`,
    },
    {
      name: "--machinereadable",
      description: `Print each match in a machine readable output format. The format is repository\0pkgname\0pkgver\0path\n with \0 being the NULL character and \n a linefeed`,
    },
  ]
);

const completionSpec: Fig.Spec = {
  name: "pacman",
  description: "Package management utility for Arch",
  args: { name: "targets", isVariadic: true },
  options: [
    ...operations,
    ...transactionOptions,
    ...upgradeOptions,
    ...queryOptions,
    ...removeOptions,
    ...syncOptions,
    ...databaseOptions,
    ...fileOptions,

    {
      name: ["-b", "--dbpath"],
      args: { name: "path" },
      description: `Specify an alternative database location (the default is /var/lib/pacman). This should not be used unless you know what you are doing. NOTE: If specified, this is an absolute path, and the root path is not automatically prepended`,
    },
    {
      name: ["-r", "--root"],
      args: { name: "path" },
      description: `Specify an alternative installation root (default is /). This should not be used as a way to install software into /usr/local instead of /usr. NOTE: If database path or log file are not specified on either the command line or in pacman.conf(5), their default location will be inside this root path. NOTE: This option is not suitable for performing operations on a mounted guest system. See --sysroot instead`,
    },
    {
      name: ["-v", "--verbose"],
      description: `Output paths such as the Root, Conf File, DB Path, Cache Dirs, etc`,
    },
    {
      name: "--arch",
      args: { name: "arch" },
      description: `Specify an alternate architecture`,
    },
    {
      name: "--cachedir",
      args: { name: "dir" },
      description: `Specify an alternative package cache location (the default is /var/cache/pacman/pkg). Multiple cache directories can be specified, and they are tried in the order they are passed to pacman. NOTE: This is an absolute path, and the root path is not automatically prepended`,
    },
    {
      name: "--color",
      args: { name: "when" },
      description: `Specify when to enable coloring. Valid options are always, never, or auto. always forces colors on; never forces colors off; and auto only automatically enables colors when outputting onto a tty`,
    },
    {
      name: "--config",
      args: { name: "file" },
      description: `Specify an alternate configuration file`,
    },
    {
      name: "--debug",
      description: `Display debug messages. When reporting bugs, this option is recommended to be used`,
    },
    {
      name: "--gpgdir",
      args: { name: "dir" },
      description: `Specify a directory of files used by GnuPG to verify package signatures (the default is /etc/pacman.d/gnupg). This directory should contain two files: pubring.gpg and trustdb.gpg. pubring.gpg holds the public keys of all packagers. trustdb.gpg contains a so-called trust database, which specifies that the keys are authentic and trusted. NOTE: This is an absolute path, and the root path is not automatically prepended`,
    },
    {
      name: "--hookdir",
      args: { name: "dir" },
      description: `Specify a alternative directory containing hook files (the default is /etc/pacman.d/hooks). Multiple hook directories can be specified with hooks in later directories taking precedence over hooks in earlier directories. NOTE: This is an absolute path, and the root path is not automatically prepended`,
    },
    {
      name: "--logfile",
      args: { name: "file" },
      description: `Specify an alternate log file. This is an absolute path, regardless of the installation root setting`,
    },
    {
      name: "--noconfirm",
      description: `Bypass any and all “Are you sure?” messages. It’s not a good idea to do this unless you want to run pacman from a script`,
    },
    {
      name: "--confirm",
      description: `Cancels the effects of a previous --noconfirm`,
    },
    {
      name: "--disable-download-timeout",
      description: `Disable defaults for low speed limit and timeout on downloads. Use this if you have issues downloading files with proxy and/or security gateway`,
    },
    {
      name: "--sysroot",
      args: { name: "dir" },
      description: `Specify an alternative system root. Pacman will chroot and chdir into the system root prior to running. This allows mounted guest systems to be properly operated on. Any other paths given will be interpreted as relative to the system root. Requires root privileges`,
    },
  ],
};

export default completionSpec;
