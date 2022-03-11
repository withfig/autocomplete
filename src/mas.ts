const completionSpec: Fig.Spec = {
  name: "mas",
  description: "A simple command line interface for the Mac App Store",
  subcommands: [
    {
      name: "account",
      description: "Prints the primary account Apple ID",
    },
    {
      name: "help",
      description: "Display general or command-specific help",
    },
    {
      name: "home",
      description: "Opens MAS Preview app page in a browser",
    },
    {
      name: "info",
      description: "Display app information from the Mac App Store",
      args: {
        name: "Application",
        description: "The application you want to show info",
      },
    },
    {
      name: "install",
      description: "Install an application",
      args: {
        name: "Application",
        description: "The application you want to Install",
      },
    },
    {
      name: "list",
      description:
        "Lists apps from the Mac App Store which are currently installed",
    },
    {
      name: "lucky",
      description: "Install the first result from the Mac App Store",
      args: {
        name: "Application",
        description: "The application you want to Install",
      },
    },
    {
      name: "open",
      description: "Opens app page in AppStore.app",
      args: {
        name: "Application",
        description: "The application you want to Open",
      },
    },
    {
      name: "outdated",
      description: "Lists pending updates from the Mac App Store",
    },
    {
      name: "purchase",
      description: "Purchase and download free apps from the Mac App Store",
      args: {
        name: "Application",
        description: "The application you want to purchase",
      },
    },
    {
      name: "reset",
      description: "Resets the Mac App Store",
    },
    {
      name: "search",
      description: "Search for apps from the Mac App Store",
      args: {
        name: "Application",
        description: "The application you want to Search",
      },
    },
    {
      name: "signin",
      description: "Sign in to the Mac App Store",
    },
    {
      name: "signout",
      description: "Sign out of the Mac App Store",
    },
    {
      name: "uninstall",
      description: "Uninstall app installed from the Mac App Store",
      args: {
        name: "Application",
        description: "The application you want to uninstall",
      },
    },
    {
      name: "upgrade",
      description: "Upgrade outdated apps from the Mac App Store",
    },
    {
      name: "vendor",
      description: "Opens vendor's app page in a browser",
      args: {
        name: "App ID",
        description: "The application you want to open vendor's app",
      },
    },
    {
      name: "version",
      description: "Print version number",
    },
  ],
};
export default completionSpec;
