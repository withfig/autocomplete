const pastConnections: Fig.Generator = {
  script: "history | cut -c 8- | grep -i '^ssh ' | sort --unique | less -SEXn",
  postProcess: function (out) {
    return out.split("\n").map((line) => {
      const parts = line.split("/[ ,]+/");
      let address;
      for (let i = 0; i < parts.length; i++) {
        if (parts[i].includes("@")) {
          //found address
          address = parts[i];
        }
      }
      if (address) {
        return {
          name: "root",
          icon: "🔗",
          description: `connect to ${address}`,
        };
      }
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "ssh",
  description: "Log into a remote machine",
  args: {
    name: "user@hostname",
    description: "Address of remote machine to log into",
    generators: {
      script: "cat ~/.ssh/config",
      postProcess: function (out) {
        return out
          .split("\n")
          .filter((line) => {
            return line.trim().startsWith("Host ") && !line.includes("*");
          })
          .map((host) => {
            return {
              name: host.split(" ").slice(-1)[0],
              description: "Ssh host",
              priority: 90,
            };
          });
      },
    },
  },
  options: [
    {
      name: "-1",
      description: "Forces ssh to try protocol version 1 only",
    },
    {
      name: "-2",
      description: "Forces ssh to try protocol version 2 only",
    },
    {
      name: "-4",
      description: "Forces ssh to use IPv4 addresses only",
    },
    {
      name: "-6",
      description: "Forces ssh to use IPv6 addresses only",
    },
    {
      name: "-A",
      description: "Enables forwarding of the authentication agent connection",
    },
    {
      name: "-a",
      description: "Disables forwarding of the authentication agent connection",
    },
    {
      name: "-b",
      description:
        "Use bind_address on the local machine as the source address of the connection",
      args: {
        name: "bind address",
        description: "Source address of the connection",
      },
    },
    {
      name: "-C",
      description:
        "Requests compression of all data (including stdin, stdout, stderr, and data for forwarded X11 and TCP connections)",
    },
    {
      name: "-c",
      description:
        "Selects the cipher specification for encrypting the session",
      args: {
        name: "cipher spec",
        description: "The selected cipher specification",
      },
    },
    {
      name: "-D",
      description:
        "Specifies a local 'dynamic' application-level port forwarding",
      args: {
        name: "port",
        description: "Port of the bind address",
      },
    },
    {
      name: "-e",
      description:
        "Sets the escape character for sessions with a pty (default: '~')",
      args: {
        name: "escape char",
        description: "Specified escape character",
      },
    },
    {
      name: "-F",
      description: "Specifies an alternative per-user configuration file",
      args: {
        name: "configfile",
        description: "Path to alternative config file",
        template: "filepaths",
      },
    },
    {
      name: "-f",
      description:
        "Requests ssh to go to background just before command execution",
    },
    {
      name: "-g",
      description: "Allows remote hosts to connect to local forwarded ports",
    },
    {
      name: "-I",
      description:
        "Specify the PKCS#11 shared library ssh should use to communicate with a PKCS#11 token providing the user's private RSA key",
      args: {
        name: "pkcs11",
      },
    },
    {
      name: "-i",
      description:
        "Selects a file from which the identity (private key) for public key authentication is read",
      isRepeatable: true,
      args: {
        name: "identity file",
        description: "Path to identity (private key)",
        template: "filepaths",
      },
    },
    {
      name: "-K",
      description:
        "Enables GSSAPI-based authentication and forwarding (delegation) of GSSAPI credentials to the server",
    },
    {
      name: "-k",
      description:
        "Disables forwarding (delegation) of GSSAPI credentials to the server",
    },
    {
      name: "-L",
      description:
        "Specifies that the given port on the local (client) host is to be forwarded to the given host and port on the remote side",
      args: {
        name: "port:host:hostport",
        description: "Local port, followed by host and host port to forward to",
      },
    },
    {
      name: "-l",
      description: "Specifies the user to log in as on the remote machine",
      args: {
        name: "login name",
        description: "Name of user logging into remote machine",
      },
    },
    {
      name: "-M",
      description:
        "Places the ssh client into ``master'' mode for connection sharing",
      isRepeatable: true,
    },
    {
      name: "-m",
      description:
        "Additionally, for protocol version 2 a comma-separated list of MAC (message authentication code) algorithms can be specified in order of preference",
      args: {
        name: "mac spec",
      },
    },
    {
      name: "-N",
      description: "Do not execute a remote command",
    },
    {
      name: "-n",
      description:
        "Redirects stdin from /dev/null (actually, prevents reading from stdin)",
    },
    {
      name: "-O",
      description: "Control an active connection multiplexing master process",
      args: {
        name: "ctl cmd",
        description: "Command that's passed to the master process",
      },
    },
    {
      name: "-o",
      description:
        "Can be used to give options in the format used in the configuration file",
      isRepeatable: true,
      args: {
        name: "option",
        description:
          "Options that can be specified in the format of the config file",
        suggestions: [
          { name: "AddressFamily" },
          { name: "BatchMode" },
          { name: "BindAddress" },
          { name: "ChallengeResponseAuthentication" },
          { name: "CheckHostIP" },
          { name: "Cipher" },
          { name: "Ciphers" },
          { name: "ClearAllForwardings" },
          { name: "Compression" },
          { name: "CompressionLevel" },
          { name: "ConnectionAttempts" },
          { name: "ConnectTimeout" },
          { name: "ControlMaster" },
          { name: "ControlPath" },
          { name: "ControlPersist" },
          { name: "DynamicForward" },
          { name: "EscapeChar" },
          { name: "ExitOnForwardFailure" },
          { name: "ForwardAgent" },
          { name: "ForwardX11" },
          { name: "ForwardX11Timeout" },
          { name: "ForwardX11Trusted" },
          { name: "GatewayPorts" },
          { name: "GlobalKnownHostsFile" },
          { name: "GSSAPIAuthentication" },
          { name: "GSSAPIDelegateCredentials" },
          { name: "HashKnownHosts" },
          { name: "Host" },
          { name: "HostbasedAuthentication" },
          { name: "HostKeyAlgorithms" },
          { name: "HostKeyAlias" },
          { name: "HostName" },
          { name: "IdentityFile" },
          { name: "IdentitiesOnly" },
          { name: "IPQoS" },
          { name: "KbdInteractiveAuthentication" },
          { name: "KbdInteractiveDevices" },
          { name: "KexAlgorithms" },
          { name: "LocalCommand" },
          { name: "LocalForward" },
          { name: "LogLevel" },
          { name: "MACs" },
          { name: "NoHostAuthenticationForLocalhost" },
          { name: "NumberOfPasswordPrompts" },
          { name: "PasswordAuthentication" },
          { name: "PermitLocalCommand" },
          { name: "PKCS11Provider" },
          { name: "Port" },
          { name: "PreferredAuthentications" },
          { name: "Protocol" },
          { name: "ProxyCommand" },
          { name: "PubkeyAuthentication" },
          { name: "RekeyLimit" },
          { name: "RequestTTY" },
          { name: "RhostsRSAAuthentication" },
          { name: "RSAAuthentication" },
          { name: "SendEnv" },
          { name: "ServerAliveInterval" },
          { name: "ServerAliveCountMax" },
          { name: "StrictHostKeyChecking" },
          { name: "TCPKeepAlive" },
          { name: "Tunnel" },
          { name: "TunnelDevice" },
          { name: "UsePrivilegedPort" },
          { name: "User" },
          { name: "UserKnownHostsFile" },
          { name: "VerifyHostKeyDNS" },
          { name: "VisualHostKey" },
          { name: "XAuthLocation" },
        ],
      },
    },
    {
      name: "-p",
      description: "Port to connect to on the remote host",
      args: {
        name: "port",
        description: "Port to connect to",
      },
    },
    {
      name: "-q",
      description:
        "Quiet mode.  Causes most warning and diagnostic messages to be suppressed",
    },
    {
      name: "-R",
      description:
        "Specifies that the given port on the remote (server) host is to be forwarded to the given host and port on the local side",
      args: {
        name: "port:host:hostport",
        description: "Local port, followed by host and host port to forward to",
      },
    },
    {
      name: "-S",
      description:
        "Specifies the location of a control socket for connection sharing, or the string 'none' to disable connection sharing",
      args: {
        name: "ctl_path",
        description: "Location of the control socket",
        template: "filepaths",
      },
    },
    {
      name: "-s",
      description:
        "May be used to request invocation of a subsystem on the remote system",
    },
    {
      name: "-T",
      description: "Disable pseudo-tty allocation",
    },
    {
      name: "-t",
      description: "Force pseudo-tty allocation",
      isRepeatable: true,
    },
    {
      name: "-V",
      description: "Display the version number and exit",
    },
    {
      name: "-v",
      description:
        "Verbose mode.  Causes ssh to print debugging messages about its progress",
      isRepeatable: 3,
    },
    {
      name: "-W",
      description:
        "Requests that standard input and output on the client be forwarded to host on port over the secure channel",
      args: {
        name: "host:port",
        description: "Host and port to forward to",
      },
    },
    {
      name: "-w",
      description:
        "Requests tunnel device forwarding with the specified tun(4) devices between the client (local_tun) and the server (remote_tun)",
      args: {
        name: "local tun",
        description: "Local device to forward to",
      },
    },
    {
      name: "-X",
      description: "Enables X11 forwarding",
    },
    {
      name: "-x",
      description: "Disables X11 forwarding",
    },
    {
      name: "-Y",
      description: "Enables trusted X11 forwarding",
    },
    {
      name: "-y",
      description: "Send log information using the syslog(3) system module",
    },
  ],
};

export default completionSpec;
