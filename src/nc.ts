import { isVariableDeclaration } from "typescript";

const completionSpec: Fig.Spec = {
  name: "nc",
  description: "Arbitrary TCP and UDP connections and listens",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: "-4",
      description: "Forces nc to use IPv4 addresses only",
      args: {
        isOptional: true,
        isDangerous: false,
      },
      exclusiveOn: ["-6"],
    },
    {
      name: "-6",
      description: "Forces nc to use IPv6 addresses only",
      args: {
        isOptional: true,
        isDangerous: false,
      },
      exclusiveOn: ["-4"],
    },
    {
      name: "-A",
      description: "Set SO_RECV_ANYIF on socket",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "-b",
      description: "Specifies the interface to bind the socket to",
      args: {
        name: "boundif",
        isDangerous: false,
      },
    },
    {
      name: "-c",
      description: "Send CRLF as line-ending",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "-D",
      description: "Enable debugging on the socket",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "-C",
      description: "Force nc not to use cellular data context",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "-d",
      description: "Do not attempt to read from stdin",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "-h",
      description: "Prints out nc help",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "-i",
      description:
        "Specifies a delay time interval between lines of text sent and received",
      args: {
        name: "interval",
        isDangerous: false,
      },
    },
    {
      name: "-G",
      description: "TCP connection timeout in seconds",
      args: {
        name: "conntimeout",
        isDangerous: false,
      },
    },
    {
      name: "-H",
      description: "Initial TCP keep alive timeout in seconds",
      args: {
        name: "keepidle",
        isDangerous: false,
      },
    },
    {
      name: "-I",
      description: "Interval for repeating TCP keep alive timeout in seconds",
      args: {
        name: "keepintvl",
        isDangerous: false,
      },
    },
    {
      name: "-J",
      description: "Number of times to repeat TCP keep alive packets",
      args: {
        name: "keepcnt",
        isDangerous: false,
      },
    },
    {
      name: "-k",
      description:
        "Force nc to stay listening for another connection after its current connection is completed",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "-l",
      description:
        "Used to specify that nc should listen for an incoming connection rather than initiate a connection to a remote host",
      args: {
        name: "port",
        isDangerous: false,
      },
    },
    {
      name: "-L",
      description:
        "Number of prbes to send to the peer before declaring that the peer is not reachable",
      args: {
        name: "num_probes",
        isDangerous: false,
      },
    },
    {
      name: "-n",
      description:
        "Do not do any DNS or service lookups on any specified addresses, hostnames or ports",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "-p",
      description:
        "Specifies the source port nc should use, subject to privilege restrictions and availability",
      args: {
        name: "source_port",
        isDangerous: false,
      },
    },
    {
      name: "-r",
      description:
        "Specifies that source and/or destination ports should be chosen randomly instead of sequentially within a range or in the order that the system assigns them",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "-s",
      description:
        "Specifies the IP of the interface which is used to send the packets",
      args: {
        name: "source_ip_address",
        isDangerous: false,
      },
    },
    {
      name: "-t",
      description:
        "Causes nc to send RFC 854 DON'T and WON'T responses to RFC 854 DO and WILL requests",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "-U",
      description: "Specifies to use Unix Domain Sockets",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "-u",
      description: "Use UDP instead of the default option of TCP",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "-v",
      description: "Have nc give more verbose output",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "-w",
      description:
        "If a connection and stdin are idle for more than timeout seconds, then the connection is silently closed",
      args: {
        name: "timeout",
        isDangerous: false,
      },
    },
    {
      name: "-X",
      description:
        "Requests that nc should use the specified protocol when talking to the proxy server",
      args: {
        name: "proxy_version",
        isDangerous: false,
      },
    },
    {
      name: "-x",
      description:
        "Requests that nc should connect to hostname using a proxy at proxy_address and port",
      args: {
        name: "proxy_address[:port]",
        isDangerous: false,
      },
    },
    {
      name: "-z",
      description:
        "Specifies that nc should just scan for listening daemons, without sending any data to them",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "--apple-delegate-pid",
      description:
        "Requests that nc should delegate the socket for the specified PID",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "--apple-delegate-uuid",
      description:
        "Requests that nc should delegate the socket for the specified UUID",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "--apple-ext-bk-idle",
      description:
        "Requests that nc marks its socket for extended background idle time when the process becomes suspended",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "--apple-nowakefromsleep",
      description:
        "When the parameter n is greater than 0, requests that nc marks its socket to exlude the local port from the list of opened ports that is queried by drivers when the system goes to sleep args",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "--ecn",
      description:
        "Requests that nc marks to use the socket option TCP_ECN_MODE to set the ECN mode",
      args: {
        isOptional: true,
        isDangerous: false,
        suggestions: ["default", "enable", "disable"],
        default: "default",
      },
    },
  ],
  args: [
    {
      name: "hostname",
      description: "Hostname or IP address to listen on or connect to",
      isOptional: true,
    },
    {
      name: "port",
      description: "Port to listen on or connect to",
      isOptional: true,
      isVariadic: true,
    },
  ],
};
export default completionSpec;
