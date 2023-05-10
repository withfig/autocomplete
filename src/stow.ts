const completionSpec: Fig.Spec = {
  name: "stow",
  description: "Manage farms of symbolic links",

  options: [
    {
      name: ["-n", "--no"],
      description:
        "Do not perform any operations that modify the filesystem; merely show what would happen",
    },
    {
      name: ["-d", "--dir"],
      description:
        "Set the stow directory to 'DIR' instead of the current directory. This also has the effect of making the default target directory be the parent of 'DIR'",
      args: {
        name: "DIR",
        template: ["folders"],
      },
    },
    {
      name: ["-t", "--target"],
      description:
        "Set the target directory to 'DIR' instead of the parent of the stow directory",
      args: {
        name: "DIR",
        template: ["folders"],
      },
    },
    {
      name: ["-v", "--verbose"],
      description:
        "Send verbose output to standard error describing what Stow is doing. Verbosity levels are from 0 to 5; 0 is the default. Using '-v' or '--verbose' increases the verbosity by one; using `--verbose=N' sets it to N",
      args: {
        name: "level",
        suggestions: ["0", "1", "2", "3", "4", "5"],
      },
    },
    {
      name: ["-S", "--stow"],
      description:
        "Stow the packages that follow this option into the target directory. This is the default action and so can be omitted if you are only stowing packages rather than performing a mixture of stow/delete/restow actions",
    },
    {
      name: ["-D", "--delete"],
      description:
        "Unstow the packages that follow this option from the target directory rather than installing them",
    },
    {
      name: ["-R", "--restow"],
      description:
        "Restow packages (first unstow, then stow again). This is useful for pruning obsolete symlinks from the target tree after updating the software in a package",
    },
    {
      name: "--adopt",
      description:
        "This behaviour is specifically intended to alter the contents of your stow directory.  If you do not want that, this option is not for you",
      isDangerous: true,
    },
    {
      name: "--no-folding",
      description:
        "Disable folding of newly stowed directories when stowing, and refolding of newly foldable directories when unstowing",
    },
    {
      name: "--ignore",
      description: "Ignore files ending in this Perl regex",
      args: {
        name: "REGEX",
      },
    },
    {
      name: "--defer",
      description:
        "Don't stow files beginning with this Perl regex if the file is already stowed to another package",
      args: {
        name: "REGEX",
      },
    },
    {
      name: "--override",
      description:
        "Force stowing files beginning with this Perl regex if the file is already stowed to another package",
      args: {
        name: "REGEX",
      },
    },
    {
      name: "--dotfiles",
      description:
        "Enable special handling for 'dotfiles' (files or folders whose name begins with a period) in the package directory. If this option is enabled, Stow will add a preprocessing step for each file or folder whose name begins with 'dot - ', and replace the 'dot- ' prefix in the name by a period (.). This is useful when Stow is used to manage collections of dotfiles, to avoid having a package directory full of hidden files",
    },
    {
      name: ["-V", "--version"],
      description: "Show Stow version, and exit",
    },
    {
      name: ["-h", "--help"],
      description: "Show Stow command syntax, and exit",
    },
  ],
};
export default completionSpec;
