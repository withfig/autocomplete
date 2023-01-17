import { filepaths } from "@fig/autocomplete-generators";

const tcp_rdp_ssh_smb_options: Fig.Option[] = [
  {
    name: ["--hostname", "--tunnel-host", "-T"],
    description: "Specify the hostname of your application",
    args: {
      name: "value",
      description: "Hostname",
    },
    isRequired: true,
  },
  {
    name: "--destination",
    description: "Specify the destination address of your SSH server",
    args: {
      name: "value",
      description: "Address of SSH server",
    },
    isRequired: true,
  },
  {
    name: ["--url", "--listener", "-L"],
    description: "Specify the host:port to forward data to Cloudflare edge",
    args: {
      name: "value",
      description: "Host:port to forward data to Cloudflare edge",
    },
    isRequired: true,
  },
  {
    name: ["--service-token-id", "--id"],
    description:
      "Specify an Access service token ID you wish to use. [$TUNNEL_SERVICE_TOKEN_ID]",
    args: {
      name: "value",
      description: "Access service token ID",
    },
    isRequired: true,
  },
  {
    name: ["--service-token-secret", "--secret"],
    description:
      "Specify an Access service token secret you wish to use. [$TUNNEL_SERVICE_TOKEN_SECRET]",
    args: {
      name: "value",
      description: "Access service token secret",
    },
    isRequired: true,
  },
  {
    name: ["--log-directory", "--logfile"],
    description: "Save application log to this directory for reporting issues",
    args: {
      name: "value",
      description: "Directory",
      template: ["folders"],
    },
    isRequired: true,
  },
  {
    name: ["--log-level", "--loglevel"],
    description: "Application logging level {debug, info, warn, error, fatal}",
    args: {
      name: "value",
      description: "Directory",
      suggestions: [
        {
          name: "debug",
        },
        {
          name: "info",
        },
        {
          name: "warn",
        },
        {
          name: "error",
        },
        {
          name: "fatal",
        },
      ],
    },
    isRequired: true,
  },
];

const update: Fig.Subcommand = {
  name: "update",
  description: "Update the agent if a new version exists",
  options: [
    {
      name: "--beta",
      description:
        "Specify if you wish to update to the latest beta version (default: false)",
    },
    {
      name: "--version",
      description: "Specify a version you wish to upgrade or downgrade to",
      args: {
        name: "value",
      },
    },
  ],
  args: {
    name: "arguments",
    isVariadic: true,
    isOptional: true,
  },
};

const version: Fig.Subcommand = {
  name: "version",
  description: "Print the version",
  args: {
    name: "arguments",
    isVariadic: true,
    isOptional: true,
  },
};

const proxyDns: Fig.Subcommand = {
  name: "proxy-dns",
  description: "Run a DNS over HTTPS proxy server",
  options: [
    {
      name: "--metrics",
      description:
        'Listen address for metrics reporting. (default: "localhost:") [$TUNNEL_METRICS]',
      args: {
        name: "value",
      },
    },
    {
      name: "--address",
      description:
        'Listen address for the DNS over HTTPS proxy server. (default: "localhost") [$TUNNEL_DNS_ADDRESS]',
      args: {
        name: "value",
        default: "localhost",
      },
    },
    {
      name: "--port",
      description:
        "Listen on given port for the DNS over HTTPS proxy server. (default: 53) [$TUNNEL_DNS_PORT]",
      args: {
        name: "value",
        default: "53",
      },
    },
    {
      name: "--upstream",
      description:
        'Upstream endpoint URL, you can specify multiple endpoints for redundancy. (default: "https://1.1.1.1/dns-query", "https://1.0.0.1/dns-query") (accepts multiple inputs) [$TUNNEL_DNS_UPSTREAM]',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--bootstrap",
      description:
        'Bootstrap endpoint URL, you can specify multiple endpoints for redundancy. (default: "https://162.159.36.1/dns-query", "https://162.159.46.1/dns-query", "https://[2606:4700:4700::1111]/dns-query", "https://[2606:4700:4700::1001]/dns-query")  (accepts multiple inputs) [$TUNNEL_DNS_BOOTSTRAP]',
      args: {
        name: "value",
        isVariadic: true,
      },
    },
    {
      name: "--max-upstream-conns",
      description:
        "Maximum concurrent connections to upstream. Setting to 0 means unlimited. (default: 5) [$TUNNEL_DNS_MAX_UPSTREAM_CONNS]",
      args: {
        name: "value",
        isVariadic: true,
      },
    },
  ],
  args: {
    name: "command options",
    isOptional: true,
  },
};

const service: Fig.Subcommand = {
  name: "service",
  description: "Manages the cloudflared launch agent",
  subcommands: [
    {
      name: "install",
      description: "Install cloudflared as an user launch agent",
    },
    {
      name: "uninstall",
      description: "Uninstall the cloudflared launch agent",
    },
    {
      name: ["help", "h"],
      description: "Shows a list of commands or help for one command",
    },
  ],

  args: [
    {
      name: "command options",
      isOptional: true,
    },
    {
      name: "arguments",
      isVariadic: true,
      isOptional: true,
    },
  ],
};

const help: Fig.Subcommand = {
  name: "help",
  description: "Shows a list of commands or help for one command",
};

const access: Fig.Subcommand = {
  name: "access",
  description:
    "Cloudflare Access protects internal resources by securing, authenticating and monitoring access per-user and by application. With Cloudflare Access, only authenticated users with the required permissions are able to reach sensitive resources. The commands provided here allow you to interact with Access protected applications from the command line",
  subcommands: [
    {
      name: "login",
      description:
        "The login subcommand initiates an authentication flow with your identity provider. The subcommand will launch a browser. For headless systems, a url is provided. Once authenticated with your identity provider, the login command will generate a JSON Web Token (JWT) scoped to your identity, the application you intend to reach, and valid for a session duration set by your administrator. cloudflared stores the token in local storage",
      displayName: "login <url of access application>",
      args: {
        name: "url",
      },
    },
    {
      name: "curl",
      description: "Uninstall the cloudflared launch agent",
      options: [
        {
          name: ["--allow-request", "--ar"],
        },
      ],
      args: [
        {
          name: "url",
        },
        { name: "curl args", isVariadic: true },
      ],
    },
    {
      name: "token",
      description:
        "The token subcommand produces a JWT which can be used to authenticate requests",
      displayName: "token -app=<url of access application>",
      options: [
        {
          name: "--app",
          requiresSeparator: true,
          args: {
            name: "value",
            description: "Url of access application",
          },
          isRequired: true,
        },
      ],
    },
    {
      name: "tcp",
      description:
        "The tcp subcommand sends data over a proxy to the Cloudflare edge",
      options: tcp_rdp_ssh_smb_options,
    },
    {
      name: "rdp",
      description:
        "The rdp subcommand sends data over a proxy to the Cloudflare edge",
      options: tcp_rdp_ssh_smb_options,
    },
    {
      name: "ssh",
      description:
        "The ssh subcommand sends data over a proxy to the Cloudflare edge",
      options: tcp_rdp_ssh_smb_options,
    },
    {
      name: "smb",
      description:
        "The smb subcommand sends data over a proxy to the Cloudflare edge",
      options: tcp_rdp_ssh_smb_options,
    },
    {
      name: "ssh-config",
      description: "Prints an example configuration ~/.ssh/config",
      options: [
        {
          name: "--hostname",
          description: "Specify the hostname of your application",
          args: {
            name: "value",
            description: "Hostname",
          },
          isRequired: true,
        },
        {
          name: "--short-lived-cert",
          description:
            "Specify if you wish to generate short lived certs. (default: false)",
        },
      ],
      args: [
        {
          name: "command options",
          isOptional: true,
        },
        {
          name: "arguments",
          isVariadic: true,
          isOptional: true,
        },
      ],
    },
    {
      name: "ssh-gen",
      description: "Generates a short lived certificate for given hostname",
      options: [
        {
          name: "--hostname",
          description: "Specify the hostname of your application",
          args: {
            name: "value",
            description: "Hostname",
          },
          isRequired: true,
        },
      ],
      args: [
        {
          name: "command options",
          isOptional: true,
        },
        {
          name: "arguments",
          isVariadic: true,
          isOptional: true,
        },
      ],
    },
    {
      name: ["help", "h"],
      description: "Shows a list of commands or help for one command",
    },
  ],

  args: [
    {
      name: "command options",
      isOptional: true,
    },
    {
      name: "arguments",
      isVariadic: true,
      isOptional: true,
    },
  ],
};

const tunnel: Fig.Subcommand = {
  name: "tunnel",
  description:
    "Use Cloudflare Tunnel to expose private services to the Internet or to Cloudflare connected private users",
  subcommands: [
    {
      name: "login",
      description: "Generate a configuration file with your login details",
    },
    {
      name: "create",
      description:
        'Creates a tunnel, registers it with Cloudflare edge and generates credential file used to run this tunnel. Use "cloudflared tunnel route" subcommand to map a DNS name to this tunnel and "cloudflared tunnel run" to start the connection',
      additionalSuggestions: [
        "cloudflared tunnel [tunnel command options] create [subcommand options] NAME",
      ],
      options: [
        {
          name: "--config",
          description:
            'Specifies a config file in YAML format. (default: "/usr/local/etc/cloudflared/config.yml")',
          args: {
            name: "value",
            description: "Config file",
            generators: filepaths({ extensions: ["yml", "yaml"] }),
          },
          isRequired: true,
        },
        {
          name: "--origincert",
          description:
            "Path to the certificate generated for your origin when you run cloudflared login. [$TUNNEL_ORIGIN_CERT]",
          args: {
            name: "value",
            description: "Certificate generated",
          },
          isRequired: true,
        },
        {
          name: "--autoupdate-freq",
          description:
            "Autoupdate frequency. Default is 24h0m0s. (default: 24h0m0s)",
          args: {
            name: "value",
            description: "Frequency",
          },
          isRequired: true,
        },
        {
          name: "--no-autoupdate",
          description:
            "Disable periodic check for updates, restarting the server with the new version. (default: false) [$NO_AUTOUPDATE]",
        },
        {
          name: "--metrics",
          description:
            'Listen address for metrics reporting. (default: "localhost:") [$TUNNEL_METRICS]',
          args: {
            name: "value",
            description: "Adress",
          },
          isRequired: true,
        },
        {
          name: "--pidfile",
          description:
            "Write the application's PID to this file after first successful connection. [$TUNNEL_PIDFILE]",
          args: {
            name: "value",
            description: "Application PID",
          },
          isRequired: true,
        },
        {
          name: "--loglevel",
          description:
            'Application logging level {debug, info, warn, error, fatal}. At debug level cloudflared will log request URL, method, protocol, content length, as well as, all request and response headers. This can expose sensitive information in your logs. (default: "info") [$TUNNEL_LOGLEVEL]',
          args: {
            name: "value",
            description: "Logging level",
            suggestions: [
              {
                name: "debug",
              },
              {
                name: "info",
              },
              {
                name: "warn",
              },
              {
                name: "error",
              },
              {
                name: "fatal",
              },
            ],
          },
          isRequired: true,
        },
        {
          name: ["--transport-loglevel", "--proto-loglevel"],
          description:
            'Transport logging level(previously called protocol logging level) {debug, info, warn, error, fatal} (default: "info") [$TUNNEL_PROTO_LOGLEVEL, $TUNNEL_TRANSPORT_LOGLEVEL]',
          args: {
            name: "value",
            description: "Logging level",
            suggestions: [
              {
                name: "debug",
              },
              {
                name: "info",
              },
              {
                name: "warn",
              },
              {
                name: "error",
              },
              {
                name: "fatal",
              },
            ],
          },
          isRequired: true,
        },
        {
          name: "--logfile",
          description:
            "Save application log to this file for reporting issues. [$TUNNEL_LOGFILE]",
          args: {
            name: "value",
            description: "File",
            template: ["filepaths"],
          },
          isRequired: true,
        },
        {
          name: "--log-directory",
          description:
            "Save application log to this directory for reporting issues. [$TUNNEL_LOGDIRECTORY]",
          args: {
            name: "value",
            description: "Directory",
            template: ["folders"],
          },
          isRequired: true,
        },
        {
          name: "--trace-output",
          description:
            "Name of trace output file, generated when cloudflared stops. [$TUNNEL_TRACE_OUTPUT]",
          args: {
            name: "value",
            description: "Output file",
          },
          isRequired: true,
        },
        {
          name: ["--output", "-o"],
          description:
            "Render output using given FORMAT. Valid options are 'json' or 'yaml'",
          args: {
            name: "format",
            description: "Format",
            suggestions: ["json", "yaml"],
          },
        },
        {
          name: ["--credentials-file", "--cred-file"],
          description:
            "Filepath at which to read/write the tunnel credentials [$TUNNEL_CRED_FILE]",
          args: {
            name: "value",
            description: "Filepath",
            template: ["filepaths", "folders"],
          },
        },
        {
          name: ["--secret", "-s"],
          description:
            "Base64 encoded secret to set for the tunnel. The decoded secret must be at least 32 bytes long. If not specified, a random 32-byte secret will be generated. [$TUNNEL_CREATE_SECRET]",
          args: {
            name: "value",
            description: "Base 64 encoded secret",
          },
        },
      ],
      args: {
        name: "name",
      },
    },
    {
      name: "route",
      description:
        "The route command defines how Cloudflare will proxy requests to this tunnel",
      subcommands: [
        {
          name: "dns",
          description:
            "Creates a DNS CNAME record hostname that points to the tunnel",
          options: [
            {
              name: ["--overwrite-dns", "-f"],
              description:
                "Overwrites existing DNS records with this hostname (default: false) [$TUNNEL_FORCE_PROVISIONING_DNS]",
            },
          ],
          args: [
            {
              name: "tunnel",
              description: "Tunnel",
            },
            {
              name: "hostname",
              description: "Hostname",
            },
          ],
        },
        {
          name: "lb",
          description:
            "Creates Load Balancer with an origin pool that points to the tunnel",
          args: [
            {
              name: "tunnel",
              description: "Tunnel",
            },
            {
              name: "hostname",
              description: "Hostname",
            },
            {
              name: "LB-POOL",
              description: "Load balancer pool",
            },
          ],
        },
        {
          name: "ip",
          description:
            "Configure and query Cloudflare WARP routing to private IP networks made available through Cloudflare Tunnels",
          subcommands: [
            {
              name: "add",
              description:
                "Add a new network to the routing table reachable via a Tunnel",
              options: [
                {
                  name: ["--vnet", "--vn"],
                  description:
                    "The ID or name of the virtual network to which the route is associated to",
                  args: {
                    name: "value",
                    description: "Id or name",
                  },
                },
              ],
              args: [
                {
                  name: "command options",
                  isOptional: true,
                },
                {
                  name: "arguments",
                  isVariadic: true,
                  isOptional: true,
                },
              ],
            },
            {
              name: ["show", "list"],
              description:
                "Shows your organization private routing table. You can use flags to filter the results",
              options: [
                {
                  name: "--filter-is-deleted",
                  description:
                    "If false (default), only show non-deleted routes. If true, only show deleted routes. (default: false)",
                  args: {
                    name: "value",
                    description: "Id or name",
                  },
                },
                {
                  name: "--filter-tunnel-id",
                  description: "Show only routes with the given tunnel ID",
                  args: {
                    name: "value",
                    description: "Id",
                  },
                },
                {
                  name: ["--filter-network-is-subset-of", "--nsub"],
                  description:
                    "Show only routes whose network is a subset of the given network",
                  args: {
                    name: "value",
                    description: "Network",
                  },
                },
                {
                  name: ["--filter-network-is-superset-of", "--nsup"],
                  description:
                    "Show only routes whose network is a superset of the given network",
                  args: {
                    name: "value",
                    description: "Network",
                  },
                },
                {
                  name: "--filter-comment-is",
                  description: "Show only routes with this comment",
                  args: {
                    name: "value",
                    description: "Comment",
                  },
                },
                {
                  name: "--filter-vnet-id",
                  description:
                    "Show only routes that are attached to the given virtual network ID",
                  args: {
                    name: "value",
                    description: "Vnet id",
                  },
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Render output using given FORMAT. Valid options are 'json' or 'yaml'",
                  args: {
                    name: "format",
                    description: "Format",
                    suggestions: ["json", "yaml"],
                  },
                },
              ],
              args: {
                name: "flags",
                isOptional: true,
                isVariadic: true,
              },
            },
            {
              name: "delete",
              description:
                "Delete a row from your organization's private routing table",
              options: [
                {
                  name: ["--vnet", "--vn"],
                  description:
                    "The ID or name of the virtual network to which the route is associated to",
                  args: {
                    name: "value",
                    description: "Id or name",
                  },
                },
              ],
              args: [
                {
                  name: "flags",
                  isOptional: true,
                  isVariadic: true,
                },
                {
                  name: "CIDR",
                },
              ],
            },
            {
              name: "get",
              description:
                "Check which row of the routing table matches a given IP",
              options: [
                {
                  name: ["--vnet", "--vn"],
                  description:
                    "The ID or name of the virtual network to which the route is associated to",
                  args: {
                    name: "value",
                    description: "Id or name",
                  },
                },
              ],
              args: [
                {
                  name: "flags",
                  isOptional: true,
                  isVariadic: true,
                },
                {
                  name: "IP",
                },
              ],
            },
          ],
        },
      ],
      args: [
        {
          name: "command options",
          isOptional: true,
        },
        {
          name: "arguments",
          isVariadic: true,
          isOptional: true,
        },
      ],
    },
    {
      name: "vnet",
      description:
        "Configure and query virtual networks to manage private IP routes with overlapping IPs",
      subcommands: [
        {
          name: "add",
          description:
            "Add a new virtual network to which IP routes can be attached",
          options: [
            {
              name: ["--default", "-d"],
              description:
                "The virtual network becomes the default one for the account. This means that all operations that omit a virtual network will now implicitly be using this virtual network (i.e., the default one) such as new IP routes that are created. When this flag is not set, the virtual network will not become the default one in the account. (default: false)",
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists the virtual networks based on the given filter flags",
          options: [
            {
              name: "--id",
              description: "List virtual networks with the given ID",
              args: {
                name: "ID",
                description: "Id",
              },
            },
            {
              name: "--name",
              description: "List virtual networks with the given NAME",
              args: {
                name: "NAME",
                description: "Name",
              },
            },
            {
              name: "--is-default",
              description:
                "If true, lists the virtual network that is the default one. If false, lists all non-default virtual networks for the account. If absent, all are included in the results regardless of their default status. (default: false)",
            },
            {
              name: "--show-deleted",
              description:
                "If false (default), only show non-deleted virtual networks. If true, only show deleted virtual networks. (default: false)",
            },
            {
              name: ["--output", "-o"],
              description:
                "Render output using given FORMAT. Valid options are 'json' or 'yaml'",
              args: {
                name: "format",
                description: "Format",
                suggestions: ["json", "yaml"],
              },
            },
          ],
        },
        { name: "delete", description: "Delete a virtual network" },
        {
          name: "update",
          description: "Update a virtual network",
          options: [
            {
              name: ["--name", "-n"],
              description: "The new name for the virtual network",
              args: {
                name: "value",
                description: "Name",
              },
            },
            {
              name: ["--comment", "-c"],
              description:
                "A new comment describing the purpose of the virtual network",
              args: {
                name: "value",
                description: "Comment",
              },
            },
            {
              name: ["--default", "-d"],
              description:
                "The virtual network becomes the default one for the account. This means that all operations that omit a virtual network will now implicitly be using this virtual network (i.e., the default one) such as new IP routes that are created. When this flag is not set, the virtual network will not become the default one in the account. (default: false)",
            },
          ],
        },
      ],
      args: [
        {
          name: "command options",
          isOptional: true,
        },
        {
          name: "arguments",
          isVariadic: true,
          isOptional: true,
        },
      ],
    },
    {
      name: "run",
      description: "Proxy a local web server by running the given tunnel",
      options: [
        {
          name: "--config",
          description:
            'Specifies a config file in YAML format. (default: "/usr/local/etc/cloudflared/config.yml")',
          args: {
            name: "value",
            description: "Config file in YAML",
            generators: filepaths({ extensions: ["yml", "yaml"] }),
          },
        },
        {
          name: "--origincert",
          description:
            "Path to the certificate generated for your origin when you run cloudflared login. [$TUNNEL_ORIGIN_CERT]",
          args: {
            name: "value",
            description: "Path to the certificate",
            template: ["filepaths"],
          },
        },
        {
          name: "--autoupdate-freq",
          description:
            "Autoupdate frequency. Default is 24h0m0s. (default: 24h0m0s)",
          args: {
            name: "value",
            description: "Autoupdate frequency",
          },
        },
        {
          name: "--no-autoupdate",
          description:
            "Disable periodic check for updates, restarting the server with the new version. (default: false) [$NO_AUTOUPDATE]",
        },
        {
          name: "--metrics",
          description:
            'Listen address for metrics reporting. (default: "localhost:") [$TUNNEL_METRICS]',
          args: {
            name: "value",
            description: "Listen address",
          },
        },
        {
          name: "--pidfile",
          description:
            "Write the application's PID to this file after first successful connection. [$TUNNEL_PIDFILE]",
          args: {
            name: "value",
            description: "Application's PID",
          },
        },
        {
          name: "--loglevel",
          description:
            'Application logging level {debug, info, warn, error, fatal}. At debug level cloudflared will log request URL, method, protocol, content length, as well as, all request and response headers. This can expose sensitive information in your logs. (default: "info") [$TUNNEL_LOGLEVEL]',
          args: {
            name: "value",
            description: "Logging level",
            suggestions: [
              {
                name: "debug",
              },
              {
                name: "info",
              },
              {
                name: "warn",
              },
              {
                name: "error",
              },
              {
                name: "fatal",
              },
            ],
          },
        },
        {
          name: ["--transport-loglevel", "--proto-loglevel"],
          description:
            'Transport logging level(previously called protocol logging level) {debug, info, warn, error, fatal} (default: "info") [$TUNNEL_PROTO_LOGLEVEL, $TUNNEL_TRANSPORT_LOGLEVEL]',
          args: {
            name: "value",
            description: "Logging level",
            suggestions: [
              {
                name: "debug",
              },
              {
                name: "info",
              },
              {
                name: "warn",
              },
              {
                name: "error",
              },
              {
                name: "fatal",
              },
            ],
          },
        },
        {
          name: "--logfile",
          description:
            "Save application log to this file for reporting issues. [$TUNNEL_LOGFILE]",
          args: {
            name: "value",
            description: "File",
            template: "filepaths",
          },
        },
        {
          name: "--log-directory",
          description:
            "Save application log to this directory for reporting issues. [$TUNNEL_LOGDIRECTORY]",
          args: {
            name: "value",
            description: "File",
            template: "filepaths",
          },
        },
        {
          name: "--trace-output",
          description:
            "Name of trace output file, generated when cloudflared stops. [$TUNNEL_TRACE_OUTPUT]",
          args: {
            name: "value",
            description: "File",
            template: "filepaths",
          },
        },
        {
          name: ["--force", "-f"],
          description:
            "By default, if a tunnel is currently being run from a cloudflared, you can't simultaneously rerun it again from a second cloudflared. The --force flag lets you overwrite the previous tunnel. If you want to use a single hostname with multiple tunnels, you can do so with Cloudflare's Load Balancer product. (default: false)",
        },
        {
          name: ["--credentials-file", "--cred-file"],
          description:
            "Filepath at which to read/write the tunnel credentials [$TUNNEL_CRED_FILE]",
          args: {
            name: "value",
            description: "Filepath",
            template: "filepaths",
          },
        },
        {
          name: "--credentials-contents",
          description:
            "Contents of the tunnel credentials JSON file to use. When provided along with credentials-file, this will take precedence. [$TUNNEL_CRED_CONTENTS]",
          args: {
            name: "value",
            description: "Contents of the tunnel credentials JSON",
          },
        },
        {
          name: ["--features", "-F"],
          description:
            "Opt into various features that are still being developed or tested.  (accepts multiple inputs)",
          args: {
            name: "value",
            description: "Features",
          },
        },
        {
          name: "--token",
          description:
            "The Tunnel token. When provided along with credentials, this will take precedence. [$TUNNEL_TOKEN]",
          args: {
            name: "value",
            description: "Tunnel token",
          },
        },
        {
          name: "--url",
          description:
            'Connect to the local webserver at URL. (default: "http://localhost:8080") [$TUNNEL_URL]',
          args: {
            name: "URL",
            description: "Url",
          },
        },
        {
          name: "--hello-world",
          description:
            "Run Hello World Server (default: false) [$TUNNEL_HELLO_WORLD]",
        },
        {
          name: "--socks5",
          description:
            "Specify if this tunnel is running as a SOCK5 Server This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: false) [$TUNNEL_SOCKS]",
          dependsOn: ["--url"],
        },
        {
          name: "--proxy-connect-timeout",
          description:
            "HTTP proxy timeout for establishing a new connection This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: 30s)",
          dependsOn: ["--url"],
        },
        {
          name: "--proxy-tls-timeout",
          description:
            "HTTP proxy timeout for completing a TLS handshake This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: 10s)",
          dependsOn: ["--url"],
        },
        {
          name: "--proxy-tcp-keepalive",
          description:
            "HTTP proxy TCP keepalive duration This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: 30s)",
          dependsOn: ["--url"],
        },
        {
          name: "--proxy-no-happy-eyeballs",
          description:
            'HTTP proxy should disable "happy eyeballs" for IPv4/v6 fallback This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: false)',
          dependsOn: ["--url"],
        },
        {
          name: "--proxy-keepalive-connections",
          description:
            "HTTP proxy maximum keepalive connection pool size This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: 100)",
          dependsOn: ["--url"],
        },
        {
          name: "--proxy-keepalive-timeout",
          description:
            "HTTP proxy timeout for closing an idle connection This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: 1m30s)",
          dependsOn: ["--url"],
        },
        {
          name: "--proxy-connection-timeout",
          description: "DEPRECATED. No longer has any effect. (default: 1m30s)",
          deprecated: true,
        },
        {
          name: "--proxy-expect-continue-timeout",
          description: "DEPRECATED. No longer has any effect. (default: 1m30s)",
          deprecated: true,
        },
        {
          name: "--http-host-header",
          description:
            "Sets the HTTP Host header for the local webserver. This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress [$TUNNEL_HTTP_HOST_HEADER]",
          dependsOn: ["--url"],
        },
        {
          name: "--origin-server-name",
          description:
            "Hostname on the origin server certificate. This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress [$TUNNEL_ORIGIN_SERVER_NAME]",
          dependsOn: ["--url"],
        },
        {
          name: "--unix-socket",
          description:
            "Path to unix socket to use instead of --url [$TUNNEL_UNIX_SOCKET]",
          args: {
            name: "value",
            description: "Unix socket path",
            template: "filepaths",
          },
        },
        {
          name: "--origin-ca-pool",
          description:
            "Path to the CA for the certificate of your origin. This option should be used only if your certificate is not signed by Cloudflare. This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress [$TUNNEL_ORIGIN_CA_POOL]",
          dependsOn: ["--url"],
        },
        {
          name: "--no-tls-verify",
          description:
            "Disables TLS verification of the certificate presented by your origin. Will allow any certificate from the origin to be accepted. Note: The connection from your machine to Cloudflare's Edge is still encrypted. This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: false) [$NO_TLS_VERIFY]",
          dependsOn: ["--url"],
        },
        {
          name: "--no-chunked-encoding",
          description:
            "Disables chunked transfer encoding; useful if you are running a WSGI server. This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: false) [$TUNNEL_NO_CHUNKED_ENCODING]",
          dependsOn: ["--url"],
        },
        {
          name: "--bastion",
          description: "Runs as jump host (default: false) [$TUNNEL_BASTION]",
        },
        {
          name: "--proxy-address",
          description:
            'Listen address for the proxy. (default: "127.0.0.1") [$TUNNEL_PROXY_ADDRESS]',
          args: {
            name: "value",
            description: "Address",
          },
        },
        {
          name: "--proxy-port",
          description:
            "Listen port for the proxy. (default: 0) [$TUNNEL_PROXY_PORT]",
          args: {
            name: "value",
            description: "Address",
          },
        },
      ],
    },
    {
      name: "list",
      description:
        "Cloudflared tunnel list will display all active tunnels, their created time and associated connections",
      options: [
        {
          name: "--config",
          description:
            'Specifies a config file in YAML format. (default: "/usr/local/etc/cloudflared/config.yml")',
          args: {
            name: "value",
            description: "Config file",
            generators: filepaths({ extensions: ["yml", "yaml"] }),
          },
        },
        {
          name: "--origincert",
          description:
            "Path to the certificate generated for your origin when you run cloudflared login. [$TUNNEL_ORIGIN_CERT]",
          args: {
            name: "value",
            description: "Certificate path",
            template: "filepaths",
          },
        },
        {
          name: "--autoupdate-freq",
          description:
            "Autoupdate frequency. Default is 24h0m0s. (default: 24h0m0s)",
          args: { name: "value", description: "Frequency" },
        },
        {
          name: "--no-autoupdate",
          description:
            "Disable periodic check for updates, restarting the server with the new version. (default: false) [$NO_AUTOUPDATE]",
        },
        {
          name: "--metrics",
          description:
            'Listen address for metrics reporting. (default: "localhost:") [$TUNNEL_METRICS]',
          args: { name: "value", description: "Address" },
        },
        {
          name: "--pidfile",
          description:
            "Write the application's PID to this file after first successful connection. [$TUNNEL_PIDFILE]",
          args: { name: "value", description: "PID" },
        },
        {
          name: "--loglevel",
          description:
            'Application logging level { value: debug, info, warn, error, fatal}. At debug level cloudflared will log request URL, method, protocol, content length, as well as, all request and response headers. This can expose sensitive information in your logs. (default: "info") [$TUNNEL_LOGLEVEL]',
          args: {
            name: "value",
            description: "Logging level",
            suggestions: [
              { name: "debug" },
              { name: "info" },
              { name: "warn" },
              { name: "error" },
              { name: "fatal" },
            ],
          },
        },
        {
          name: ["--transport-loglevel", "--proto-loglevel"],
          description:
            'Transport logging level(previously called protocol logging level) { value: debug, info, warn, error, fatal} (default: "info") [$TUNNEL_PROTO_LOGLEVEL, $TUNNEL_TRANSPORT_LOGLEVEL]',
          args: {
            name: "value",
            description: "Logging level",
            suggestions: [
              {
                name: "debug",
              },
              {
                name: "info",
              },
              {
                name: "warn",
              },
              {
                name: "error",
              },
              {
                name: "fatal",
              },
            ],
          },
        },
        {
          name: "--logfile",
          description:
            "Save application log to this file for reporting issues. [$TUNNEL_LOGFILE]",
          args: {
            name: "value",
            description: "File",
            template: "filepaths",
          },
        },
        {
          name: "--log-directory",
          description:
            "Save application log to this directory for reporting issues. [$TUNNEL_LOGDIRECTORY]",
          args: {
            name: "value",
            description: "Folder",
            template: ["folders"],
          },
        },
        {
          name: "--trace-output",
          description:
            "Name of trace output file, generated when cloudflared stops. [$TUNNEL_TRACE_OUTPUT]",
          args: {
            name: "value",
            description: "Name",
          },
        },
        {
          name: ["--output", "-o"],
          description:
            "Render output using given FORMAT. Valid options are 'json' or 'yaml'",
          args: {
            name: "FORMAT",
            description: "Format",
            suggestions: ["json", "yaml"],
          },
        },
        {
          name: ["--show-deleted", "-d"],
          description: "Include deleted tunnels in the list (default: false)",
        },
        {
          name: ["--name", "-n"],
          description: "List tunnels with the given NAME",
          args: {
            name: "NAME",
            description: "Name",
          },
        },
        {
          name: ["--name-prefix", "--np"],
          description: "List tunnels that start with the give NAME prefix",
          args: {
            name: "NAME",
            description: "Name prefix",
          },
        },
        {
          name: ["--exclude-name-prefix", "--enp"],
          description:
            "List tunnels whose NAME does not start with the given prefix",
          args: {
            name: "NAME",
            description: "Prefix",
          },
        },
        {
          name: ["--when", "-w"],
          description:
            "List tunnels that are active at the given TIME in RFC3339 format (default: current time, 2022-04-07T20:03:58+01:00)",
          args: {
            name: "TIME",
            description: "Time in RFC3339 format",
          },
        },
        {
          name: ["--id", "-i"],
          description: "List tunnel by ID",
          args: {
            name: "ID",
            description: "Id",
          },
        },
        {
          name: ["--show-recently-disconnected", "--rd"],
          description:
            "Include connections that have recently disconnected in the list (default: false)",
        },
        {
          name: "--sort-by",
          description:
            'Sorts the list of tunnels by the given field. Valid options are { value: name, id, createdAt, deletedAt, numConnections} (default: "name") [$TUNNEL_LIST_SORT_BY]',
          args: {
            name: "value",
            description: "Field",
            suggestions: [
              "name",
              "id",
              "createdAt",
              "deletedAt",
              "numConnections",
            ],
          },
        },
        {
          name: "--invert-sort",
          description:
            "Inverts the sort order of the tunnel list. (default: false) [$TUNNEL_LIST_INVERT_SORT]",
        },
      ],
    },
    {
      name: "info",
      description:
        "Cloudflared tunnel info displays details about the active connectors for a given tunnel (identified by name or uuid)",
      options: [
        {
          name: "--config",
          description:
            'Specifies a config file in YAML format. (default: "/usr/local/etc/cloudflared/config.yml")',
          args: {
            name: "value",
            description: "Config file",
            generators: filepaths({ extensions: ["yml", "yaml"] }),
          },
        },
        {
          name: "--origincert",
          description:
            "Path to the certificate generated for your origin when you run cloudflared login. [$TUNNEL_ORIGIN_CERT]",
          args: {
            name: "value",
            description: "Certificate path",
            template: "filepaths",
          },
        },
        {
          name: "--autoupdate-freq",
          description:
            "Autoupdate frequency. Default is 24h0m0s. (default: 24h0m0s)",
          args: { name: "value", description: "Frequency" },
        },
        {
          name: "--no-autoupdate",
          description:
            "Disable periodic check for updates, restarting the server with the new version. (default: false) [$NO_AUTOUPDATE]",
        },
        {
          name: "--metrics",
          description:
            'Listen address for metrics reporting. (default: "localhost:") [$TUNNEL_METRICS]',
          args: { name: "value", description: "Address" },
        },
        {
          name: "--pidfile",
          description:
            "Write the application's PID to this file after first successful connection. [$TUNNEL_PIDFILE]",
          args: { name: "value", description: "PID" },
        },
        {
          name: "--loglevel",
          description:
            'Application logging level { value: debug, info, warn, error, fatal}. At debug level cloudflared will log request URL, method, protocol, content length, as well as, all request and response headers. This can expose sensitive information in your logs. (default: "info") [$TUNNEL_LOGLEVEL]',
          args: {
            name: "value",
            description: "Logging level",
            suggestions: [
              { name: "debug" },
              { name: "info" },
              { name: "warn" },
              { name: "error" },
              { name: "fatal" },
            ],
          },
        },
        {
          name: ["--transport-loglevel", "--proto-loglevel"],
          description:
            'Transport logging level(previously called protocol logging level) { value: debug, info, warn, error, fatal} (default: "info") [$TUNNEL_PROTO_LOGLEVEL, $TUNNEL_TRANSPORT_LOGLEVEL]',
          args: {
            name: "value",
            description: "Logging level",
            suggestions: [
              {
                name: "debug",
              },
              {
                name: "info",
              },
              {
                name: "warn",
              },
              {
                name: "error",
              },
              {
                name: "fatal",
              },
            ],
          },
        },
        {
          name: "--logfile",
          description:
            "Save application log to this file for reporting issues. [$TUNNEL_LOGFILE]",
          args: {
            name: "value",
            description: "File",
            template: "filepaths",
          },
        },
        {
          name: "--log-directory",
          description:
            "Save application log to this directory for reporting issues. [$TUNNEL_LOGDIRECTORY]",
          args: {
            name: "value",
            description: "Folder",
            template: ["folders"],
          },
        },
        {
          name: "--trace-output",
          description:
            "Name of trace output file, generated when cloudflared stops. [$TUNNEL_TRACE_OUTPUT]",
          args: {
            name: "value",
            description: "Name",
          },
        },
        {
          name: ["--output", "-o"],
          description:
            "Render output using given FORMAT. Valid options are 'json' or 'yaml'",
          args: {
            name: "FORMAT",
            description: "Format",
            suggestions: ["json", "yaml"],
          },
        },
        {
          name: ["--show-recently-disconnected", "--rd"],
          description:
            "Include connections that have recently disconnected in the list (default: false)",
        },
        {
          name: "--sort-by",
          description:
            'Sorts the list of tunnels by the given field. Valid options are { value: name, id, createdAt, deletedAt, numConnections} (default: "name") [$TUNNEL_LIST_SORT_BY]',
          args: {
            name: "value",
            description: "Field",
            suggestions: [
              "name",
              "id",
              "createdAt",
              "deletedAt",
              "numConnections",
            ],
          },
        },
        {
          name: "--invert-sort",
          description:
            "Inverts the sort order of the tunnel list. (default: false) [$TUNNEL_LIST_INVERT_SORT]",
        },
      ],
    },
    {
      name: "delete",
      description:
        "Cloudflared tunnel delete will delete tunnels with the given tunnel UUIDs or names. A tunnel cannot be deleted if it has active connections. To delete the tunnel unconditionally, use -f flag",
      options: [
        {
          name: "--config",
          description:
            'Specifies a config file in YAML format. (default: "/usr/local/etc/cloudflared/config.yml")',
          args: {
            name: "value",
            description: "Config file",
            generators: filepaths({ extensions: ["yml", "yaml"] }),
          },
        },
        {
          name: "--origincert",
          description:
            "Path to the certificate generated for your origin when you run cloudflared login. [$TUNNEL_ORIGIN_CERT]",
          args: {
            name: "value",
            description: "Certificate path",
            template: "filepaths",
          },
        },
        {
          name: "--autoupdate-freq",
          description:
            "Autoupdate frequency. Default is 24h0m0s. (default: 24h0m0s)",
          args: { name: "value", description: "Frequency" },
        },
        {
          name: "--no-autoupdate",
          description:
            "Disable periodic check for updates, restarting the server with the new version. (default: false) [$NO_AUTOUPDATE]",
        },
        {
          name: "--metrics",
          description:
            'Listen address for metrics reporting. (default: "localhost:") [$TUNNEL_METRICS]',
          args: { name: "value", description: "Address" },
        },
        {
          name: "--pidfile",
          description:
            "Write the application's PID to this file after first successful connection. [$TUNNEL_PIDFILE]",
          args: { name: "value", description: "PID" },
        },
        {
          name: "--loglevel",
          description:
            'Application logging level { value: debug, info, warn, error, fatal}. At debug level cloudflared will log request URL, method, protocol, content length, as well as, all request and response headers. This can expose sensitive information in your logs. (default: "info") [$TUNNEL_LOGLEVEL]',
          args: {
            name: "value",
            description: "Logging level",
            suggestions: [
              { name: "debug" },
              { name: "info" },
              { name: "warn" },
              { name: "error" },
              { name: "fatal" },
            ],
          },
        },
        {
          name: ["--transport-loglevel", "--proto-loglevel"],
          description:
            'Transport logging level(previously called protocol logging level) { value: debug, info, warn, error, fatal} (default: "info") [$TUNNEL_PROTO_LOGLEVEL, $TUNNEL_TRANSPORT_LOGLEVEL]',
          args: {
            name: "value",
            description: "Logging level",
            suggestions: [
              {
                name: "debug",
              },
              {
                name: "info",
              },
              {
                name: "warn",
              },
              {
                name: "error",
              },
              {
                name: "fatal",
              },
            ],
          },
        },
        {
          name: "--logfile",
          description:
            "Save application log to this file for reporting issues. [$TUNNEL_LOGFILE]",
          args: {
            name: "value",
            description: "File",
            template: "filepaths",
          },
        },
        {
          name: "--log-directory",
          description:
            "Save application log to this directory for reporting issues. [$TUNNEL_LOGDIRECTORY]",
          args: {
            name: "value",
            description: "Folder",
            template: ["folders"],
          },
        },
        {
          name: "--trace-output",
          description:
            "Name of trace output file, generated when cloudflared stops. [$TUNNEL_TRACE_OUTPUT]",
          args: {
            name: "value",
            description: "Name",
          },
        },
        {
          name: ["--credentials-file", "--cred-file"],
          description:
            "Filepath at which to read/write the tunnel credentials [$TUNNEL_CRED_FILE]",
          args: {
            name: "value",
            description: "Path",
            template: ["filepaths"],
          },
        },
        {
          name: ["--force", "-f"],
          description:
            "Cleans up any stale connections before the tunnel is deleted. cloudflared will not delete a tunnel with connections without this flag. (default: false) [$TUNNEL_RUN_FORCE_OVERWRITE]",
        },
      ],
      args: {
        name: "TUNNEL",
        description: "Tunnel",
      },
    },
    {
      name: "cleanup",
      description:
        "Delete connections for tunnels with the given UUIDs or names",
      options: [
        {
          name: "--config",
          description:
            'Specifies a config file in YAML format. (default: "/usr/local/etc/cloudflared/config.yml")',
          args: {
            name: "value",
            description: "Config file",
            generators: filepaths({ extensions: ["yml", "yaml"] }),
          },
        },
        {
          name: "--origincert",
          description:
            "Path to the certificate generated for your origin when you run cloudflared login. [$TUNNEL_ORIGIN_CERT]",
          args: {
            name: "value",
            description: "Certificate path",
            template: "filepaths",
          },
        },
        {
          name: "--autoupdate-freq",
          description:
            "Autoupdate frequency. Default is 24h0m0s. (default: 24h0m0s)",
          args: { name: "value", description: "Frequency" },
        },
        {
          name: "--no-autoupdate",
          description:
            "Disable periodic check for updates, restarting the server with the new version. (default: false) [$NO_AUTOUPDATE]",
        },
        {
          name: "--metrics",
          description:
            'Listen address for metrics reporting. (default: "localhost:") [$TUNNEL_METRICS]',
          args: { name: "value", description: "Address" },
        },
        {
          name: "--pidfile",
          description:
            "Write the application's PID to this file after first successful connection. [$TUNNEL_PIDFILE]",
          args: { name: "value", description: "PID" },
        },
        {
          name: "--loglevel",
          description:
            'Application logging level { value: debug, info, warn, error, fatal}. At debug level cloudflared will log request URL, method, protocol, content length, as well as, all request and response headers. This can expose sensitive information in your logs. (default: "info") [$TUNNEL_LOGLEVEL]',
          args: {
            name: "value",
            description: "Logging level",
            suggestions: [
              { name: "debug" },
              { name: "info" },
              { name: "warn" },
              { name: "error" },
              { name: "fatal" },
            ],
          },
        },
        {
          name: ["--transport-loglevel", "--proto-loglevel"],
          description:
            'Transport logging level(previously called protocol logging level) { value: debug, info, warn, error, fatal} (default: "info") [$TUNNEL_PROTO_LOGLEVEL, $TUNNEL_TRANSPORT_LOGLEVEL]',
          args: {
            name: "value",
            description: "Logging level",
            suggestions: [
              {
                name: "debug",
              },
              {
                name: "info",
              },
              {
                name: "warn",
              },
              {
                name: "error",
              },
              {
                name: "fatal",
              },
            ],
          },
        },
        {
          name: "--logfile",
          description:
            "Save application log to this file for reporting issues. [$TUNNEL_LOGFILE]",
          args: {
            name: "value",
            description: "File",
            template: "filepaths",
          },
        },
        {
          name: "--log-directory",
          description:
            "Save application log to this directory for reporting issues. [$TUNNEL_LOGDIRECTORY]",
          args: {
            name: "value",
            description: "Folder",
            template: ["folders"],
          },
        },
        {
          name: "--trace-output",
          description:
            "Name of trace output file, generated when cloudflared stops. [$TUNNEL_TRACE_OUTPUT]",
          args: {
            name: "value",
            description: "Name",
          },
        },
        {
          name: ["--credentials-file", "--cred-file"],
          description:
            "Filepath at which to read/write the tunnel credentials [$TUNNEL_CRED_FILE]",
          args: {
            name: "value",
            description: "Path",
            template: ["filepaths"],
          },
        },
        {
          name: ["--force", "-f"],
          description:
            "Cleans up any stale connections before the tunnel is deleted. cloudflared will not delete a tunnel with connections without this flag. (default: false) [$TUNNEL_RUN_FORCE_OVERWRITE]",
        },
      ],
      args: {
        name: "TUNNEL",
        description: "Tunnel",
      },
    },
    {
      name: "token",
      description:
        "Fetch the credentials token for an existing tunnel (by name or UUID) that allows to run it",
      options: [
        {
          name: "--config",
          description:
            'Specifies a config file in YAML format. (default: "/usr/local/etc/cloudflared/config.yml")',
          args: {
            name: "value",
            description: "Config file",
            generators: filepaths({ extensions: ["yml", "yaml"] }),
          },
        },
        {
          name: "--origincert",
          description:
            "Path to the certificate generated for your origin when you run cloudflared login. [$TUNNEL_ORIGIN_CERT]",
          args: {
            name: "value",
            description: "Certificate path",
            template: "filepaths",
          },
        },
        {
          name: "--autoupdate-freq",
          description:
            "Autoupdate frequency. Default is 24h0m0s. (default: 24h0m0s)",
          args: { name: "value", description: "Frequency" },
        },
        {
          name: "--no-autoupdate",
          description:
            "Disable periodic check for updates, restarting the server with the new version. (default: false) [$NO_AUTOUPDATE]",
        },
        {
          name: "--metrics",
          description:
            'Listen address for metrics reporting. (default: "localhost:") [$TUNNEL_METRICS]',
          args: { name: "value", description: "Address" },
        },
        {
          name: "--pidfile",
          description:
            "Write the application's PID to this file after first successful connection. [$TUNNEL_PIDFILE]",
          args: { name: "value", description: "PID" },
        },
        {
          name: "--loglevel",
          description:
            'Application logging level { value: debug, info, warn, error, fatal}. At debug level cloudflared will log request URL, method, protocol, content length, as well as, all request and response headers. This can expose sensitive information in your logs. (default: "info") [$TUNNEL_LOGLEVEL]',
          args: {
            name: "value",
            description: "Logging level",
            suggestions: [
              { name: "debug" },
              { name: "info" },
              { name: "warn" },
              { name: "error" },
              { name: "fatal" },
            ],
          },
        },
        {
          name: ["--transport-loglevel", "--proto-loglevel"],
          description:
            'Transport logging level(previously called protocol logging level) { value: debug, info, warn, error, fatal} (default: "info") [$TUNNEL_PROTO_LOGLEVEL, $TUNNEL_TRANSPORT_LOGLEVEL]',
          args: {
            name: "value",
            description: "Logging level",
            suggestions: [
              {
                name: "debug",
              },
              {
                name: "info",
              },
              {
                name: "warn",
              },
              {
                name: "error",
              },
              {
                name: "fatal",
              },
            ],
          },
        },
        {
          name: "--logfile",
          description:
            "Save application log to this file for reporting issues. [$TUNNEL_LOGFILE]",
          args: {
            name: "value",
            description: "File",
            template: "filepaths",
          },
        },
        {
          name: "--log-directory",
          description:
            "Save application log to this directory for reporting issues. [$TUNNEL_LOGDIRECTORY]",
          args: {
            name: "value",
            description: "Folder",
            template: ["folders"],
          },
        },
        {
          name: "--trace-output",
          description:
            "Name of trace output file, generated when cloudflared stops. [$TUNNEL_TRACE_OUTPUT]",
          args: {
            name: "value",
            description: "Name",
          },
        },
        {
          name: ["--credentials-file", "--cred-file"],
          description:
            "Filepath at which to read/write the tunnel credentials [$TUNNEL_CRED_FILE]",
          args: {
            name: "value",
            description: "Path",
            template: ["filepaths"],
          },
        },
        {
          name: ["--force", "-f"],
          description:
            "Cleans up any stale connections before the tunnel is deleted. cloudflared will not delete a tunnel with connections without this flag. (default: false) [$TUNNEL_RUN_FORCE_OVERWRITE]",
        },
      ],
      args: {
        name: "TUNNEL",
        description: "Tunnel",
      },
    },
    {
      name: ["help", "h"],
      description: "Shows a list of commands or help for one command",
    },
  ],
  options: [
    {
      name: "--config",
      description:
        'Specifies a config file in YAML format. (default: "/usr/local/etc/cloudflared/config.yml")',
      args: {
        name: "value",
        description: "Config file",
        generators: filepaths({ extensions: ["yml", "yaml"] }),
      },
    },
    {
      name: "--origincert",
      description:
        "Path to the certificate generated for your origin when you run cloudflared login. [$TUNNEL_ORIGIN_CERT]",
      args: {
        name: "value",
        description: "Certificate path",
        template: "filepaths",
      },
    },
    {
      name: "--autoupdate-freq",
      description:
        "Autoupdate frequency. Default is 24h0m0s. (default: 24h0m0s)",
      args: { name: "value", description: "Frequency" },
    },
    {
      name: "--no-autoupdate",
      description:
        "Disable periodic check for updates, restarting the server with the new version. (default: false) [$NO_AUTOUPDATE]",
    },
    {
      name: "--metrics",
      description:
        'Listen address for metrics reporting. (default: "localhost:") [$TUNNEL_METRICS]',
      args: { name: "value", description: "Address" },
    },
    {
      name: "--pidfile",
      description:
        "Write the application's PID to this file after first successful connection. [$TUNNEL_PIDFILE]",
      args: { name: "value", description: "PID" },
    },
    {
      name: "--url",
      description:
        'Connect to the local webserver at URL. (default: "http://localhost:8080") [$TUNNEL_URL]',
      args: { name: "URL", description: "Url" },
    },
    {
      name: "--hello-world",
      description:
        "Run Hello World Server (default: false) [$TUNNEL_HELLO_WORLD]",
    },
    {
      name: "--socks5",
      description:
        "Specify if this tunnel is running as a SOCK5 Server This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: false) [$TUNNEL_SOCKS]",
      dependsOn: ["--url"],
    },
    {
      name: "--proxy-connect-timeout",
      description:
        "HTTP proxy timeout for establishing a new connection This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: 30s)",
      dependsOn: ["--url"],
    },
    {
      name: "--proxy-tls-timeout",
      description:
        "HTTP proxy timeout for completing a TLS handshake This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: 10s)",
      dependsOn: ["--url"],
    },
    {
      name: "--proxy-tcp-keepalive",
      description:
        "HTTP proxy TCP keepalive duration This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: 30s)",
      dependsOn: ["--url"],
    },
    {
      name: "--proxy-no-happy-eyeballs",
      description:
        'HTTP proxy should disable "happy eyeballs" for IPv4/v6 fallback This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: false)',
      dependsOn: ["--url"],
    },
    {
      name: "--proxy-keepalive-connections",
      description:
        "HTTP proxy maximum keepalive connection pool size This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: 100)",
      dependsOn: ["--url"],
    },
    {
      name: "--proxy-keepalive-timeout",
      description:
        "HTTP proxy timeout for closing an idle connection This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: 1m30s)",
      dependsOn: ["--url"],
    },
    {
      name: "--proxy-connection-timeout",
      description: "DEPRECATED. No longer has any effect. (default: 1m30s)",
      deprecated: true,
    },
    {
      name: "--proxy-expect-continue-timeout",
      description: "DEPRECATED. No longer has any effect. (default: 1m30s)",
      deprecated: true,
    },
    {
      name: "--http-host-header",
      description:
        "Sets the HTTP Host header for the local webserver. This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress [$TUNNEL_HTTP_HOST_HEADER]",
      dependsOn: ["--url"],
    },
    {
      name: "--origin-server-name",
      description:
        "Hostname on the origin server certificate. This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress [$TUNNEL_ORIGIN_SERVER_NAME]",
      dependsOn: ["--url"],
    },
    {
      name: "--unix-socket",
      description:
        "Path to unix socket to use instead of --url [$TUNNEL_UNIX_SOCKET]",
      args: {
        name: "value",
        description: "Unix socket",
        template: "filepaths",
      },
    },
    {
      name: "--origin-ca-pool",
      description:
        "Path to the CA for the certificate of your origin. This option should be used only if your certificate is not signed by Cloudflare. This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress [$TUNNEL_ORIGIN_CA_POOL]",
      dependsOn: ["--url"],
    },
    {
      name: "--no-tls-verify",
      description:
        "Disables TLS verification of the certificate presented by your origin. Will allow any certificate from the origin to be accepted. Note: The connection from your machine to Cloudflare's Edge is still encrypted. This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: false) [$NO_TLS_VERIFY]",
      dependsOn: ["--url"],
    },
    {
      name: "--no-chunked-encoding",
      description:
        "Disables chunked transfer encoding; useful if you are running a WSGI server. This flag only takes effect if you define your origin with --url and if you do not use ingress rules. The recommended way is to rely on ingress rules and define this property under `originRequest` as per https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/configuration/configuration-file/ingress (default: false) [$TUNNEL_NO_CHUNKED_ENCODING]",
      dependsOn: ["--url"],
    },
    {
      name: "--bastion",
      description: "Runs as jump host (default: false) [$TUNNEL_BASTION]",
    },
    {
      name: "--proxy-address",
      description:
        'Listen address for the proxy. (default: "127.0.0.1") [$TUNNEL_PROXY_ADDRESS]',
      args: {
        name: "value",
        description: "Address",
      },
    },
    {
      name: "--proxy-port",
      description:
        "Listen port for the proxy. (default: 0) [$TUNNEL_PROXY_PORT]",
      args: {
        name: "value",
        description: "Address",
      },
    },
    {
      name: "--loglevel",
      description:
        'Application logging level { value: debug, info, warn, error, fatal}. At debug level cloudflared will log request URL, method, protocol, content length, as well as, all request and response headers. This can expose sensitive information in your logs. (default: "info") [$TUNNEL_LOGLEVEL]',
      args: {
        name: "value",
        description: "Logging level",
        suggestions: [
          { name: "debug" },
          { name: "info" },
          { name: "warn" },
          { name: "error" },
          { name: "fatal" },
        ],
      },
    },
    {
      name: ["--transport-loglevel", "--proto-loglevel"],
      description:
        'Transport logging level(previously called protocol logging level) { value: debug, info, warn, error, fatal} (default: "info") [$TUNNEL_PROTO_LOGLEVEL, $TUNNEL_TRANSPORT_LOGLEVEL]',
      args: {
        name: "value",
        description: "Logging level",
        suggestions: [
          {
            name: "debug",
          },
          {
            name: "info",
          },
          {
            name: "warn",
          },
          {
            name: "error",
          },
          {
            name: "fatal",
          },
        ],
      },
    },
    {
      name: "--logfile",
      description:
        "Save application log to this file for reporting issues. [$TUNNEL_LOGFILE]",
      args: {
        name: "value",
        description: "File",
        template: "filepaths",
      },
    },
    {
      name: "--log-directory",
      description:
        "Save application log to this directory for reporting issues. [$TUNNEL_LOGDIRECTORY]",
      args: {
        name: "value",
        description: "Folder",
        template: ["folders"],
      },
    },
    {
      name: "--trace-output",
      description:
        "Name of trace output file, generated when cloudflared stops. [$TUNNEL_TRACE_OUTPUT]",
      args: {
        name: "value",
        description: "Name",
      },
    },
    {
      name: "--proxy-dns",
      description:
        "Run a DNS over HTTPS proxy server. (default: false) [$TUNNEL_DNS]",
    },
    {
      name: "--proxy-dns-port",
      description:
        "Listen on given port for the DNS over HTTPS proxy server. (default: 53) [$TUNNEL_DNS_PORT]",
      args: { name: "value", description: "Port" },
    },
    {
      name: "--proxy-dns-address",
      description:
        'Listen address for the DNS over HTTPS proxy server. (default: "localhost") [$TUNNEL_DNS_ADDRESS]',
      args: { name: "value", description: "Listen address" },
    },
    {
      name: "--proxy-dns-upstream",
      description:
        'Upstream endpoint URL, you can specify multiple endpoints for redundancy. (default: "https://1.1.1.1/dns-query", "https://1.0.0.1/dns-query")  (accepts multiple inputs) [$TUNNEL_DNS_UPSTREAM]',
      args: {
        name: "value",
        description: "Upstream endpoint",
        isVariadic: true,
      },
    },
    {
      name: "--proxy-dns-max-upstream-conns",
      description:
        "Maximum concurrent connections to upstream. Setting to 0 means unlimited. (default: 5) [$TUNNEL_DNS_MAX_UPSTREAM_CONNS]",
      args: { name: "URL", description: "Max concurrent connections" },
    },
    {
      name: "--proxy-dns-bootstrap",
      description:
        'Bootstrap endpoint URL, you can specify multiple endpoints for redundancy. (default: "https://162.159.36.1/dns-query", "https://162.159.46.1/dns-query", "https://[2606:4700:4700::1111]/dns-query", "https://[2606:4700:4700::1001]/dns-query")  (accepts multiple inputs) [$TUNNEL_DNS_BOOTSTRAP]',
      args: {
        name: "value",
        description: "Bootstrap endpoint",
        isVariadic: true,
      },
    },
    {
      name: ["--credentials-file", "--cred-file"],
      description:
        "Filepath at which to read/write the tunnel credentials [$TUNNEL_CRED_FILE]",
      args: {
        name: "value",
        description: "Path",
        template: ["filepaths"],
      },
    },
    {
      name: "--region",
      description:
        "Cloudflare Edge region to connect to. Omit or set to empty to connect to the global region. [$TUNNEL_REGION]",
      args: { name: "value", description: "Region" },
    },
    {
      name: "--hostname",
      description:
        "Set a hostname on a Cloudflare zone to route traffic through this tunnel. [$TUNNEL_HOSTNAME]",
      args: { name: "value", description: "Hostname" },
    },
    {
      name: "--lb-pool",
      description:
        "The name of a (new/existing) load balancing pool to add this origin to. [$TUNNEL_LB_POOL]",
      args: { name: "value", description: "Pool name" },
    },
    {
      name: "--metrics-update-freq",
      description:
        "Frequency to update tunnel metrics (default: 5s) [$TUNNEL_METRICS_UPDATE_FREQ]",
      args: { name: "value", description: "Frequency" },
    },
    {
      name: "--tag",
      description:
        "Custom tags used to identify this tunnel, in format KEY=VALUE. Multiple tags may be specified  (accepts multiple inputs) [$TUNNEL_TAG]",
      args: {
        name: "KEY",
        description: "Tag",
        isVariadic: true,
      },
    },
    {
      name: "--retries",
      description:
        "Maximum number of retries for connection/protocol errors. (default: 5) [$TUNNEL_RETRIES]",
      args: { name: "value", description: "Max retries" },
    },
    {
      name: "--grace-period",
      description:
        "When cloudflared receives SIGINT/SIGTERM it will stop accepting new requests, wait for in-progress requests to terminate, then shutdown. Waiting for in-progress requests will timeout after this grace period, or when a second SIGTERM/SIGINT is received. (default: 30s) [$TUNNEL_GRACE_PERIOD]",
      args: { name: "value", description: "Time (s)" },
    },
    {
      name: "--compression-quality",
      description:
        "(beta) Use cross-stream compression instead HTTP compression. 0-off, 1-low, 2-medium, >=3-high. (default: 0) [$TUNNEL_COMPRESSION_LEVEL]",
      args: {
        name: "value",
        description: "Compression quality",
        suggestions: [
          { name: "0", description: "Off" },
          { name: "1", description: "Low" },
          { name: "3", description: "High" },
        ],
      },
    },
    {
      name: ["--name", "-n"],
      description:
        "Stable name to identify the tunnel. Using this flag will create, route and run a tunnel. For production usage, execute each command separately [$TUNNEL_NAME]",
      args: { name: "value", description: "Name" },
    },
    {
      name: "--ui",
      description:
        "Launch tunnel UI. Tunnel logs are scrollable via 'j', 'k', or arrow keys. (default: false)",
    },
    {
      name: ["--overwrite-dns", "-f"],
      description:
        "Overwrites existing DNS records with this hostname (default: false) [$TUNNEL_FORCE_PROVISIONING_DNS]",
    },
  ],
  args: {
    name: "command options",
    isOptional: true,
  },
};

const completionSpec: Fig.Spec = {
  name: "cloudflared",
  description:
    "Cloudflared connects your machine or user identity to Cloudflare's global network",
  subcommands: [update, version, proxyDns, service, help, access, tunnel],
  options: [
    {
      name: ["--credentials-file", "--cred-file"],
      description:
        "Filepath at which to read/write the tunnel credentials [$TUNNEL_CRED_FILE]",
      args: {
        name: "value",
        description: "Credentials path",
        template: "filepaths",
      },
    },
    {
      name: "--region",
      description:
        "Cloudflare Edge region to connect to. Omit or set to empty to connect to the global region. [$TUNNEL_REGION]",
      args: {
        name: "value",
        description: "Region",
      },
    },
    {
      name: ["--overwrite-dns", "-f"],
      description:
        "Overwrites existing DNS records with this hostname (default: false) [$TUNNEL_FORCE_PROVISIONING_DNS]",
    },
    {
      name: ["--help", "-h"],
      description: "Show help for cloudflared",
      isPersistent: true,
    },
  ],
  // Only uncomment if cloudflared takes an argument
  // args: {}
};
export default completionSpec;
