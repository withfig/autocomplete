const answerArg = (description: string): Fig.Arg => ({
  name: "answer",
  description,
  suggestions: ["All", "None", "Installed", "NotInstalled"],
});

const completionSpec: Fig.Spec = {
  name: "yay",
  description:
    "AUR helper written in Go. Pacman wrapper with AUR support; passes options to makepkg and pacman",
  args: {
    name: "targets",
    description:
      "Packages or search terms. With search terms and no operation, shows an install selection menu (yogurt mode)",
    isVariadic: true,
    isOptional: true,
  },
  options: [
    // Yay operations
    {
      name: ["-Y", "--yay"],
      description:
        "Perform yay specific operations. This is the default if no other operation is selected and targets are defined",
    },
    {
      name: ["-B", "--build"],
      description: "Build a PKGBUILD in a given directory",
      args: {
        name: "directory",
        description: "Directory containing the PKGBUILD",
        template: "folders",
      },
    },
    {
      name: ["-P", "--show"],
      description: "Perform yay specific print operations",
    },
    {
      name: ["-G", "--getpkgbuild"],
      description:
        "Download PKGBUILD from ABS or AUR (ABS can only be used for Arch Linux repositories)",
      args: {
        name: "packages",
        description: "Packages to download PKGBUILD for",
        isVariadic: true,
      },
    },
    {
      name: ["-W", "--web"],
      description:
        "Web related operations such as voting for AUR packages (requires AUR_USERNAME and AUR_PASSWORD environment variables)",
    },
    {
      name: ["-f", "--force"],
      description:
        "Force download for ABS packages that already exist in the current directory (apply to -G)",
    },
    {
      name: ["-p", "--print"],
      description:
        "Print the PKGBUILD of the given packages to stdout (apply to -G)",
    },
    // Extended pacman operations
    {
      name: ["-S", "--sync"],
      description:
        "Synchronize packages (extended to support both AUR and repo packages)",
      args: {
        name: "targets",
        description: "Packages or operation flags (e.g. -Syu)",
        isVariadic: true,
      },
    },
    {
      name: ["-R", "--remove"],
      description:
        "Remove packages (also removes cached data about devel packages)",
      args: {
        name: "targets",
        description: "Packages or operation flags",
        isVariadic: true,
      },
    },
    {
      name: ["-Q", "--query"],
      description: "Query the package database",
      args: {
        name: "targets",
        description: "Packages or operation flags",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: ["-U", "--upgrade"],
      description: "Add packages to the system and upgrade",
      args: {
        name: "targets",
        description: "Package files to install",
        template: "filepaths",
        isVariadic: true,
      },
    },
    // Target scoping
    {
      name: ["-a", "--aur"],
      description:
        "Assume all targets are from the AUR. Additionally actions such as sysupgrade will only act on AUR packages",
    },
    {
      name: ["-N", "--repo"],
      description:
        "Assume all targets are from the repositories. Additionally actions such as sysupgrade will only act on repository packages",
    },
    // Yay options (apply to -Y)
    {
      name: "--gendb",
      description:
        "Generate development package database used for devel updates (only needed when migrating to yay from another AUR helper)",
    },
    {
      name: ["-c", "--clean"],
      description: "Remove unneeded dependencies",
    },
    {
      name: "-cc",
      description:
        "Remove unneeded dependencies, including packages optionally required by any other package",
    },
    // Show options (apply to -P)
    {
      name: "--complete",
      description:
        "Print a list of all AUR and repo packages for shell completion (apply to -P)",
    },
    {
      name: "--defaultconfig",
      description: "Print default yay configuration (apply to -P)",
    },
    {
      name: "--currentconfig",
      description: "Print current yay configuration (apply to -P)",
    },
    {
      name: "--stats",
      description:
        "Display information about installed packages and system health (apply to -P)",
    },
    {
      name: "--news",
      description:
        "Print new news from the Archlinux homepage (apply to -P). Pass twice to show all available news",
      isRepeatable: true,
    },
    {
      name: "--quiet",
      description: "Only show titles when printing news (apply to -P)",
    },
    // Build options (apply to -B)
    {
      name: "--install",
      description:
        "Build and install a PKGBUILD in a given directory (apply to -B)",
    },
    // Web options (apply to -W)
    {
      name: "--unvote",
      description: "Remove vote from AUR package(s) (apply to -W)",
    },
    {
      name: "--vote",
      description: "Vote for AUR package(s) (apply to -W)",
    },
    // Permanent configuration settings
    {
      name: "--save",
      description:
        "Causes the following options to be saved back to the config file",
    },
    {
      name: "--aururl",
      description: "Set an alternative AUR URL",
      args: { name: "url", description: "Alternative AUR URL" },
    },
    {
      name: "--aurrpcurl",
      description: "Set an alternative URL for the AUR /rpc endpoint",
      args: { name: "url", description: "Alternative AUR /rpc endpoint URL" },
    },
    {
      name: "--builddir",
      description:
        "Directory to use for building AUR packages (also used as the AUR cache)",
      args: {
        name: "dir",
        description: "Build directory",
        template: "folders",
      },
    },
    {
      name: "--editor",
      description:
        "Editor to use when editing PKGBUILDs (falls back to VISUAL, then EDITOR)",
      args: { name: "command", description: "Editor command" },
    },
    {
      name: "--editorflags",
      description: "Passes arguments to the editor",
      args: { name: "flags", description: "Editor flags" },
    },
    {
      name: "--makepkg",
      description: "The command to use for makepkg calls",
      args: { name: "command", description: "Makepkg command" },
    },
    {
      name: "--mflags",
      description: "Passes arguments to makepkg",
      args: { name: "flags", description: "Makepkg flags" },
    },
    {
      name: "--pacman",
      description: "The command to use for pacman calls",
      args: { name: "command", description: "Pacman command" },
    },
    {
      name: "--git",
      description: "The command to use for git calls",
      args: { name: "command", description: "Git command" },
    },
    {
      name: "--gitflags",
      description: "Passes arguments to git",
      args: { name: "flags", description: "Git flags" },
    },
    {
      name: "--gpg",
      description: "The command to use for gpg calls",
      args: { name: "command", description: "Gpg command" },
    },
    {
      name: "--gpgflags",
      description: "Passes arguments to gpg",
      args: { name: "flags", description: "Gpg flags" },
    },
    {
      name: "--sudo",
      description:
        "The command to use for sudo calls (sudoloop is not guaranteed to work with a custom sudo command)",
      args: { name: "command", description: "Sudo command" },
    },
    {
      name: "--sudoflags",
      description: "Passes arguments to sudo",
      args: { name: "flags", description: "Sudo flags" },
    },
    {
      name: "--config",
      description: "The pacman config file to use",
      args: {
        name: "file",
        description: "Pacman config file",
        template: "filepaths",
      },
    },
    {
      name: "--makepkgconf",
      description:
        "The config file for makepkg to use (defaults to the default config file)",
      args: {
        name: "file",
        description: "Makepkg config file",
        template: "filepaths",
      },
    },
    {
      name: "--nomakepkgconf",
      description: "Reset the makepkg config file back to its default",
    },
    {
      name: "--requestsplitn",
      description:
        "The maximum amount of packages to request per AUR query (should only matter with very large requests)",
      args: { name: "number", description: "Maximum packages per AUR query" },
    },
    {
      name: "--completioninterval",
      description:
        "Time in days to refresh the completion cache (0 = every time, -1 = never)",
      args: { name: "days", description: "Days to refresh completion cache" },
    },
    {
      name: "--sortby",
      description: "Sort AUR results by a specific field during search",
      args: {
        name: "field",
        suggestions: [
          "votes",
          "popularity",
          "name",
          "base",
          "submitted",
          "modified",
        ],
      },
    },
    {
      name: "--searchby",
      description: "Search for AUR packages by querying the specified field",
      args: {
        name: "field",
        suggestions: [
          "name",
          "name-desc",
          "maintainer",
          "depends",
          "checkdepends",
          "makedepends",
          "optdepends",
          "provides",
          "conflicts",
          "replaces",
          "groups",
          "keywords",
          "comaintainers",
        ],
      },
    },
    {
      name: "--answerclean",
      description:
        "Set a predetermined answer for the clean build menu question",
      args: answerArg("Answer for the clean build menu"),
    },
    {
      name: "--answerdiff",
      description: "Set a predetermined answer for the edit diff menu question",
      args: answerArg("Answer for the edit diff menu"),
    },
    {
      name: "--answeredit",
      description:
        "Set a predetermined answer for the edit pkgbuild menu question",
      args: answerArg("Answer for the edit pkgbuild menu"),
    },
    {
      name: "--answerupgrade",
      description: "Set a predetermined answer for the upgrade menu question",
      args: {
        name: "answer",
        description: "Package ranges or repos to omit for updates",
        suggestions: ["Repo", "^Repo", "None"],
      },
    },
    {
      name: "--noanswerclean",
      description: "Unset the answer for the clean build menu",
    },
    {
      name: "--noanswerdiff",
      description: "Unset the answer for the diff menu",
    },
    {
      name: "--noansweredit",
      description: "Unset the answer for the edit pkgbuild menu",
    },
    {
      name: "--noanswerupgrade",
      description: "Unset the answer for the upgrade menu",
    },
    {
      name: "--cleanmenu",
      description:
        "Show the clean menu before redownloading a fresh copy of build files",
    },
    {
      name: "--diffmenu",
      description:
        "Show the diff menu to view diffs from build files before building",
    },
    {
      name: "--editmenu",
      description:
        "Show the edit menu to edit or view PKGBUILDs before building",
    },
    {
      name: "--askremovemake",
      description: "Ask to remove makedepends after installing packages",
    },
    {
      name: "--askyesremovemake",
      description:
        'Ask to remove makedepends after installing packages (with "Y" as default)',
    },
    {
      name: "--removemake",
      description: "Remove makedepends after installing packages",
    },
    {
      name: "--noremovemake",
      description: "Do not remove makedepends after installing packages",
    },
    {
      name: "--topdown",
      description: "Display repository packages first and then AUR packages",
    },
    {
      name: "--bottomup",
      description: "Show AUR packages first and then repository packages",
    },
    {
      name: "--singlelineresults",
      description:
        "List each search result on its own line instead of pacman's double-line format",
    },
    {
      name: "--doublelineresults",
      description:
        "Follow pacman's double-line search result format and list each result using two lines",
    },
    {
      name: "--devel",
      description:
        "During sysupgrade also check AUR development packages for updates (currently only Git packages)",
    },
    {
      name: "--cleanafter",
      description:
        "Remove untracked files after installation (directories are kept so VCS packages can pull updates)",
    },
    {
      name: "--keepsrc",
      description: "Keep pkg/ and src/ after building packages",
    },
    {
      name: "--separatesources",
      description: "Separate query results by source, AUR and sync",
    },
    {
      name: "--redownload",
      description:
        "Always download pkgbuilds of targets even when a copy is available in cache",
    },
    {
      name: "--redownloadall",
      description:
        "Always download pkgbuilds of all AUR packages even when a copy is available in cache",
    },
    {
      name: "--noredownload",
      description:
        "When downloading pkgbuilds use cached copies that are equal or newer than the AUR version",
    },
    {
      name: "--provides",
      description:
        "Look for matching providers when searching for AUR packages (menu appears when multiple providers are found)",
    },
    {
      name: "--pgpfetch",
      description:
        "Prompt to import unknown PGP keys from the validpgpkeys field of each PKGBUILD",
    },
    {
      name: "--useask",
      description:
        "Use pacman's --ask flag to automatically confirm package conflicts",
    },
    {
      name: "--combinedupgrade",
      description:
        "During sysupgrade, refresh first then show a combined menu of repo and AUR packages before upgrading",
    },
    {
      name: "--batchinstall",
      description:
        "Queue built AUR packages and install them together instead of installing each after building",
    },
    {
      name: "--rebuild",
      description:
        "Always build target packages even when a copy is available in cache",
    },
    {
      name: "--rebuildall",
      description:
        "Always build all AUR packages even when a copy is available in cache",
    },
    {
      name: "--rebuildtree",
      description:
        "When installing an AUR package rebuild and reinstall all of its AUR dependencies recursively",
    },
    {
      name: "--norebuild",
      description:
        "Skip the package build when a cached package of equal version exists",
    },
    {
      name: "--sudoloop",
      description:
        "Loop sudo calls in the background to prevent sudo from timing out during long builds",
    },
  ],
};

export default completionSpec;
