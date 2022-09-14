const completionSpec: Fig.Spec = {
  name: "wscat",
  description: "Communicate over websocket",
  options: [
    {
      name: ["-c", "--connect"],
      args: {
        name: "url",
        template: "history",
      },
      description: "Connect to a WebSocket server",
    },
    { name: ["-V", "--version"], description: "Output the version number" },
    {
      name: "--auth",
      description: "Add basic HTTP authentication header (--connect only)",
      args: { name: "username:password" },
      dependsOn: ["-c", "--connect"],
    },
    {
      name: "--ca",
      args: {
        name: "ca",
      },
      description: "Specify a Certificate Authority (--connect only)",
      dependsOn: ["-c", "--connect"],
    },
    {
      name: "--cert",
      args: {
        name: "cert",
      },
      description: "Specify a Client SSL Certificate (--connect only)",
      dependsOn: ["-c", "--connect"],
    },
    {
      name: "--host",
      args: {
        name: "host",
      },
      description: "Optional host",
    },
    {
      name: "--key",
      args: {
        name: "key",
      },
      description: "Specify a Client SSL Certificate's key (--connect only)",
      dependsOn: ["-c", "--connect"],
    },
    {
      name: "--max-redirects",
      args: {
        name: "num",
      },
      description:
        "Maximum number of redirects allowed (--connect only) (default: 10)",
      dependsOn: ["-c", "--connect"],
    },
    { name: "--no-color", description: "Run without color" },
    {
      name: "--passphrase",
      args: {
        name: "passphrase",
      },
      description:
        "Specify a Client SSL Certificate Key's passphrase (--connect only). If you don't provide a value, it will be prompted for",
      dependsOn: ["-c", "--connect"],
    },
    {
      name: "--proxy",
      args: {
        name: "[protocol://]host[:port]",
      },
      description: "Connect via a proxy. Proxy must support CONNECT method",
    },
    {
      name: "--slash",
      description:
        "Enable slash commands for control frames (/ping, /pong, /close [code [, reason]])",
    },

    {
      name: ["-H", "--header"],
      args: {
        name: "header:value",
      },
      description:
        "Set an HTTP header. Repeat to set multiple (--connect only) (default: [])",
      dependsOn: ["-c", "--connect"],
    },
    {
      name: ["-L", "--location"],
      description: "Follow redirects (--connect only)",
      dependsOn: ["-c", "--connect"],
    },
    {
      name: ["-l", "--listen"],
      args: {
        name: "port",
      },
      description: "Listen on port",
    },
    {
      name: ["-n", "--no-check"],
      description: "Do not check for unauthorized certificates",
    },
    {
      name: ["-o", "--origin"],
      args: {
        name: "origin",
      },
      description: "Optional origin",
    },
    {
      name: ["-p", "--protocol"],
      args: {
        name: "protocol",
      },
      description: "Optional protocol version",
    },
    {
      name: ["-P", "--show-ping-pong"],
      description: "Print a notification when a ping or pong is received",
    },
    {
      name: ["-s", "--subprotocol"],
      args: {
        name: "protocol",
        suggestions: [
          "MBWS.huawei.com",
          "MBLWS.huawei.com",
          "soap",
          "wamp",
          "v10.stomp",
          "v11.stomp",
          "v12.stomp",
          "ocpp1.2",
          "ocpp1.5",
          "ocpp1.6",
          "ocpp2.0",
          "ocpp2.0.1",
          "rfb",
          "sip",
          "notificationchannel-netapi-rest.openmobilealliance.org",
          "wpcp",
          "amqp	",
          "mqtt",
          "jsflow",
          "rwpcp",
          "xmpp",
          "ship",
          "mielecloudconnect",
          "v10.pcp.sap.com",
          "msrp",
          "v1.saltyrtc.org",
          "TLCP-2.0.0.lightstreamer.com",
          "bfcp",
          "sldp.softvelum.com",
          "opcua+uacp",
          "opcua+uajson",
          "v1.swindon-lattice+json",
          "v1.usp",
          "mles-websocket",
          "coap",
          "TLCP-2.1.0.lightstreamer.com",
          "sqlnet.oracle.com",
          "oneM2M.R2.0.json",
          "oneM2M.R2.0.xml",
          "oneM2M.R2.0.cbor",
          "transit",
          "2016.serverpush.dash.mpeg.org",
          "2018.mmt.mpeg.org",
          "clue",
          "webrtc.softvelum.com",
          "cobra.v2.json",
          "drp",
          "hub.bsc.bacnet.org",
          "dc.bsc.bacnet.org",
          "jmap",
          "t140",
          "done",
          "TLCP-2.2.0.lightstreamer.com",
          "collection-update",
          "TLCP-2.3.0.lightstreamer.com",
          "text.ircv3.net",
          "binary.ircv3.net",
          "v3.penguin-stats.live+proto",
        ],
      },
      description: "Optional subprotocol (default: [])",
    },
    {
      name: ["-w", "--wait"],
      args: {
        name: "seconds",
      },
      description: "Wait given seconds after executing command",
    },
    {
      name: ["-x", "--execute"],
      args: {
        name: "command",
      },
      description: "Execute command after connecting",
    },
    { name: ["-h", "--help"], description: "Display help for command" },
  ],
};

export default completionSpec;
