/* 
Made by Yavko :)
I made this for fun, I don't actually use emacs so if you do use it
Here!
*/
const completionSpec: Fig.Spec = {
  name: "emacs",
  description: "An extensible, customizable, free/libre text editor — and more",
  args: {
    template: "filepaths",
  },
  options: [
    {
      description: "Do not do interactive display; implies -q",
      name: "--batch",
      dependsOn: ["-q"],
    },
    {
      description: "Change to directory",
      name: "--chdir",
    },
    {
      description: "Start a server in the background",
      name: ["--daemon", "--bg-daemon"],
    },
    {
      description: "Start a server in the foreground",
      name: "--fg-daemon",
    },
    {
      description: "Display Emacs version information and exit",
      name: "--version",
    },
    {
      description: "Display help and exit",
      name: "--help",
    },
    {
      description: "Do not load an init file",
      name: ["-q", "--no-init-file"],
    },
    {
      description: "Do not use shared memory",
      name: ["-nl", "--no-shared-memory"],
    },
    {
      description: "Do not load the site-wide startup file",
      name: ["--no-site-file", "-nsl"],
    },
    {
      description: "Do not load a saved desktop",
      name: "--no-desktop",
    },
    {
      description:
        'Similar to "-q --no-site-file --no-splash",  Also, avoid processing X resources',
      name: ["-Q", "--quick"],
    },
    {
      description: "Do not display a splash screen during start-u",
      name: "--no-splash",
    },
    {
      description:
        "Enable Emacs Lisp debugger during the processing of the user init file ~/.emacs.  This is useful for debugging problems in the init file",
      name: "--debug-init",
    },
    {
      description: "Load user's init file",
      name: ["-u", "--user"],
    },
    {
      description:
        "Use specified file as the terminal instead of using stdin/stdout.  This must be the first argument specified in the command line",
      name: ["-t", "--terminal"],
      args: { template: "filepaths" },
    },
    {
      description: "The same as specifying file directly as an argument",
      name: ["--file", "--find-file", "--visit"],
      args: { template: "filepaths" },
    },
  ],
};
export default completionSpec;
