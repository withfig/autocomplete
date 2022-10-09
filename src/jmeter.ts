const completionSpec: Fig.Spec = {
  name: "jmeter",
  description: "Apache JMeter - 100% Java Load Testing Tool",
  options: [
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
        template: "filepaths",
      },
    },
    {
      name: ["-q", "--addprop"],
      description: "additional JMeter property file(s)",
      args: {
        isOptional: false,
        name: "files...",
        template: "filepaths",
        isVariadic: true,
        description: "additional JMeter property file(s)",
      },
    },
    {
      name: ["-t", "--testfile"],
      description: "the jmeter test(.jmx) file to run. \"-t LAST\" will load last used file",
      args: {
        isOptional: false,
        name: "testfile",
        description: "the jmeter test(.jmx) file to run. \"-t LAST\" will load last used file ",
        template: "filepaths",
      },      
    },
    {
      name: ["-l", "--logfile"],
      description: "the file to log samples to",
      args: {
        isOptional: false,
        name: "logfile",
        description: "the file to log samples to",
        template: "filepaths",
        suggestCurrentToken: true,
      },
    },
    {
      name: ["-i", "--jmeterlogconf"],
      description: "jmeter logging configuration file",
      args: {
        isOptional: false,
        name: "jmeterlogconf",
        description: "jmeter logging configuration file",
      },
    },
    {
      name: ["-j", "--jmeterlogfile"],
      description: "jmeter run log file",
      args: {
        isOptional: false,
        name: "jmeterlogfile",
        description: "jmeter run log file",
      },
    },
    {
      name: ["-n", "--nongui"],
      description: "run JMeter in nongui mode",     
    },
    {
      name: ["-s", "--server"],
      description: "run the JMeter server",      
    },
    {
      name: ["-E", "--proxyScheme"],
      description: "Set a proxy scheme to use for the proxy server",
      args: {
        isOptional: false,
        name: "proxyScheme",
        description: "Set a proxy scheme to use for the proxy server",
      },
    },
    {
      name: ["-H", "--proxyHost"],
      description: "Set a proxy server for JMeter to use",     
    },
    {
      name: ["-P", "--proxyPort"],
      description: "Set proxy server port for JMeter to use",      
    },
    {
      name: ["-N", "--nonProxyHosts"],
      description: "Set nonproxy host list (e.g. *.apache.org|localhost)",
      args: {
        isOptional: false,
        name: "nonProxyHosts",
        description: "Set nonproxy host list (e.g. *.apache.org|localhost)",
      },
    },
    {
      name: ["-u", "--username"],
      description: "Set username for proxy server that JMeter is to use",
      args: {
        isOptional: false,
        name: "username",
        description: "Set username for proxy server that JMeter is to use",
      },
    },
    {
      name: ["-a", "--password"],
      description: "Set password for proxy server that JMeter is to use",
      args: {
        isOptional: false,
        name: "password",
        description: "Set password for proxy server that JMeter is to use",
      },
    },
    {
      name: ["-J", "--jmeterproperty"],
      description: "Define additional JMeter properties <argument>=<value>",
      args: {
        isOptional: false,
        name: "jmeterproperty",
        description: "Define additional JMeter properties <argument>=<value>",
      },
    },
    {
      name: ["-G", "--globalproperty"],
      description: "Define Global properties (sent to servers) e.g. -Gport=123 or -Gglobal.properties",
      args: {
        isOptional: false,
        name: "globalproperty",
        description: "Define Global properties (sent to servers) e.g. -Gport=123 or -Gglobal.properties",
      },
    },
    {
      name: ["-D", "--systemproperty"],
      description: "Define additional system properties <argument>=<value>",
      args: {
        isOptional: false,
        name: "systemproperty",
        description: "Define additional system properties <argument>=<value>",
      },
    },
    {
      name: ["-S", "--systemPropertyFile"],
      description: "additional system property file(s)",
      args: {
        isOptional: false,
        name: "systemPropertyFile",
        description: "additional system property file(s)",
      },
    },
    {
      name: ["-f", "--forceDeleteResultFile"],
      description: "force delete existing results files and web report folder",      
    },
    {
      name: ["-L", "--loglevel"],
      description: "[category=]level e.g. jorphan=INFO, jmeter.util=DEBUG or com.example.foo=WARN",
      args: {
        isOptional: false,
        name: "loglevel",
        description: "[category=]level e.g. jorphan=INFO, jmeter.util=DEBUG or com.example.foo=WARN",
      },
    },
    {
      name: ["-r", "--runremote"],
      description: "Start remote servers (as defined in remote_hosts)",      
    },
    {
      name: ["-R", "--remotestart"],
      description: "Start these remote servers (overrides remote_hosts)",      
    },
    {
      name: ["-d", "--homedir"],
      description: "the jmeter home directory to use",
      args: {
        isOptional: false,
        name: "homedir",
        description: "the jmeter home directory to use",
      },
    },
    {
      name: ["-X", "--remoteexit"],
      description: "Exit the remote servers at end  of test (non-GUI)",
      args: {
        isOptional: false,
        name: "remoteexit",
        description: "Exit the remote servers at end of test (non-GUI)",
      },
    },
    {
      name: ["-g", "--reportonly"],
      description: "generate report dashboard only, from a test results file",      
    },
    {
      name: ["-e", "--reportatendofloadtests"],
      description: "generate report dashboard after load test",    
    },
    {
      name: ["-o", "--reportoutputfolder"],
      description: "output folder for report dashboard",
      args: {
        isOptional: false,
        name: "reportoutputfolder",
        description: "output folder for report dashboard",
      },
    },

  ],
};
export default completionSpec;
