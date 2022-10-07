const completionSpec: Fig.Spec = {
  name: "jmeter",
  description: "JMeter commands",
  subcommands: [
    {
      name: ["-v", "--version"],
      description: "print the JMeter version information and exit",      
    },
    {
      name: ["-h", "--help"],
      description: "print usage information and exit",
    },
    {
      name: ["-p", "--propfile"],
      description: "the jmeter property file to use",
      args: {
        isOptional: false,
        name: "property",
        description: "Your jmeter property file",
      },
    },
    {
      name: ["-q", "--addprop"],
      description: "additional JMeter property file(s)",
      args: {
        isOptional: false,
        name: "addprop",
        description: "additional JMeter property file(s)",
      },
    },
    {
      name: ["-t", "--testfile"],
      description: "the jmeter test(.jmx) file to run",
      args: {
        isOptional: false,
        name: "testfile",
        description: "the jmeter test(.jmx) file to run",
      },
    },
    {
      name: ["-l", "--logfile"],
      description: "the file to log samples to",
      args: {
        isOptional: false,
        name: "logfile",
        description: "the file to log samples to",
      },
    },
  ],  
};
export default completionSpec;
