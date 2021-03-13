var completionSpec = {
  name: "xcode-select",
  description: "Active developer directory for Xcode tools",
  options: [{
    name: ['-h', `--help`],
    description: "Help message"
  }, {
    name: ['-p', '--print-path'],
    description: "Display path to active developer directory"
  }, {
    name: ['-s', '--switch'],
    description: "Set path to active developer directory",
    args: {
      template: "folders"
    }
  }, {
    name: ["--install"],
    description: "Install Xcode command line tools"
  }, {
    name: ['-v', '--version'],
    description: "Display version"
  }, {
    name: ['-r', '--reset'],
    description: "Reset to the default CLT path"
  }]
}
