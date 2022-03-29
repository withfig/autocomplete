const commands: Fig.Suggestion[] = [
  {
    name: "reset",
    description: "Reset permissions",
    type: "subcommand",
  },
];

const services: Fig.Suggestion[] = [
  {
    name: "AppleEvents",
  },
  {
    name: "BluetoothAlways",
    description: "Use Bluetooth",
  },
  {
    name: "Calendar",
    description: "Access your calendar",
  },
  {
    name: "Camera",
    description: "Access the camera",
  },
  {
    name: "ContactsFull",
    description: "Access all of your contacts information",
  },
  {
    name: "ContactsLimited",
    description: "Access your contacts basic information",
  },
  {
    name: "FileProviderDomain",
    description: "Access files managed by indirect_object",
  },
  {
    name: "FileProviderPresence",
    description:
      "Do you want to allow client to see when you are using files managed by it? It will see which applications are used to access files and whether you are actively using them. It will not see when files that are not managed by it are accessed",
  },
  { name: "Location", description: "Use your current location" },
  {
    name: "MediaLibrary",
    description:
      "Access Apple Music, your music and video activity, and your media library",
  },
  {
    name: "Microphone",
    description: "Access the microphone",
  },
  {
    name: "Motion",
    description: "Access Your Motion & Fitness Activity",
  },
  {
    name: "Photos",
    description: "Access Your Photo",
  },
  {
    name: "PhotosAdd",
    description: "Add to your Photo",
  },
  {
    name: "Prototype3Rights",
    description: "Authorization to Test Service Proto3Right",
  },
  {
    name: "Prototype4Rights",
    description: "Authorization to Test Service Proto4Right",
  },
  { name: "Reminders", description: "Access your reminders" },
  {
    name: "ScreenCapture",
    description: "Capture the contents of the system display",
  },
  {
    name: "Siri",
    description: "Would You Like to Use client with Siri",
  },
  {
    name: "SpeechRecognition",
    description: "Access Speech Recognition",
  },
  {
    name: "SystemPolicyDesktopFolder",
    description: "Access files in your Desktop folder",
  },
  {
    name: "SystemPolicyDeveloperFiles",
    description: "Access a file used in Software Development",
  },
  {
    name: "SystemPolicyDocumentsFolder",
    description: "Access files in your Documents folder",
  },
  {
    name: "SystemPolicyDownloadsFolder",
    description: "Access files in your Downloads folder",
  },
  {
    name: "SystemPolicyNetworkVolumes",
    description: "Access files on a network volume",
  },
  {
    name: "SystemPolicyRemovableVolumes",
    description: "Access files on a removable volume",
  },
  {
    name: "SystemPolicySysAdminFiles",
    description:
      "Administer your computer. Administration can include modifying passwords, networking, and system settings",
  },
  {
    name: "Willow",
    description: "Access your Home data",
  },
  {
    name: "SystemPolicyAllFiles",
    description: "Full Disk Acces",
  },
  {
    name: "Accessibility",
    description: "Allows app to control your compute",
  },
  {
    name: "PostEvent",
    description: "Allows to send keystroke",
  },
  {
    name: "ListenEvent",
    description: "Input Monitoring; to monitor input from your keyboard",
  },
  {
    name: "DeveloperTool",
    description:
      "Allows app to run software locally that do not meet the system’s security polic",
  },
].map((item) => Object.assign(item, { icon: "⚙️" }));

const generateBundleIds = (path: string): Fig.Generator => ({
  scriptTimeout: 15000,
  cache: { strategy: "stale-while-revalidate" },
  script: `mdfind kMDItemContentTypeTree=com.apple.application-bundle -onlyin ${path} | while read line; do echo $(mdls -name kMDItemCFBundleIdentifier -r "$line") $line; done`,
  postProcess: (out) => {
    const ids = new Map(
      out.split("\n").map((line) => {
        const sep = line.indexOf(" ");
        return [line.slice(0, sep), line.slice(sep + 1)] as const;
      })
    );
    ids.delete("(null)");
    const suggestions: Fig.Suggestion[] = [];
    for (const [id, path] of ids.entries()) {
      suggestions.push({
        name: id,
        description: path,
        icon: `fig://${path}`,
      });
    }
    return suggestions;
  },
});

const completionSpec: Fig.Spec = {
  name: "tccutil",
  description: "Manage the privacy database",
  args: [
    // Note that tccutil doesn't have "subcommands", it has "commands"
    // that it can issue to the database for the given service. It just
    // so happens that it currently only has one command, but the signature
    // will remain the same when (if?) future commands are added.
    { name: "command", suggestions: commands },
    { name: "service", suggestions: services },
    {
      name: "bundle id",
      isOptional: true,
      generators: generateBundleIds("/Applications"),
    },
  ],
};

export default completionSpec;
