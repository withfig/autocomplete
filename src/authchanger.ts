const completionSpec: Fig.Spec = {
  name: "authchanger",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  description:
    "Authchanger is a utility included with Jamf Connect to help you manage the authorization database used by macOS to determine how the login process progresses",
  options: [
    {
      name: ["-help", "-h"],
      description: "Show help for authchanger",
    },
    {
      name: "-version",
      description: "Prints the version number",
    },
    {
      name: "-print",
      description: "Prints the current list of authorization mechanisms",
    },
    {
      name: "-debug",
      description:
        "Does a dry run of the changes and prints out what would have happened",
    },
    {
      name: "-reset",
      description: "Resets the login screen to the factory settings",
    },
    {
      name: "-demobilize",
      description: "Sets up Jamf Connect Login to only demobilze accounts",
    },
    {
      name: "-notify",
      description:
        "Adds the DEP Notify addition to the corresponding -AD, or -Setup argument",
    },
    {
      name: "-setup",
      description:
        "Adds the DEP Notify addition to the corresponding -AD, or -Setup argument",
    },
    {
      name: "-jamfconnect",
      description: "Enables Jamf Connect 2.0 login mechanisms",
    },
    {
      name: "-verbose",
      description: "Enables verbose logging",
    },
    {
      name: "-prelogin",
      description: "Mechs to be used before the actual UI is shown",
    },
    {
      name: "-preauth",
      description:
        "Mechs to be used between the login UI and actual authentication",
    },
    {
      name: "-postauth",
      description: "Mechs to be used after system authentication",
    },
    {
      name: "-customrule",
      description:
        "Allows the printout of any authorizationDB rule as well as setting of that rule to any custom mechanism(s)",
    },
    {
      name: "-sysprefs",
      description:
        "Enables Azure authentication for the Network Preference Pane",
    },
    {
      name: "-sysprefsreset",
      description:
        "Removes Azure authentication for the Network Preference Pane",
    },
    {
      name: "-defaultjcright",
      description: "Adds the mechanism to be used with the sudosaml binary",
    },
  ],
};
export default completionSpec;
