const completionSpec: Fig.Spec = {
  name: "daphne",
  description: "Django HTTP/WebSocket server",
  args: {
    name: "application",
    description:
      "The application to dispatch to as path.to.module:instance.path",
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Show this help message and exit",
    },
    {
      name: ["-p", "--port"],
      description: "Port number to listen on",
      args: {
        name: "PORT",
      },
    },
    {
      name: ["-b", "--bind"],
      description: "The host/address to bind to",
      args: {
        name: "HOST",
      },
    },
    {
      name: "--websocket_timeout",
      description:
        "Maximum time to allow a websocket to be connected. -1 for infinite",
      args: {
        name: "WEBSOCKET_TIMEOUT",
      },
    },
    {
      name: "--websocket_connect_timeout",
      description:
        "Maximum time to allow a connection to handshake. -1 for infinite",
      args: {
        name: "WEBSOCKET_CONNECT_TIMEOUT",
      },
    },
    {
      name: ["-u", "--unix-socket"],
      description: "Bind to a UNIX socket rather than a TCP host/port",
      args: {
        name: "UNIX_SOCKET",
        template: "filepaths",
      },
    },
    {
      name: "--fd",
      description:
        "Bind to a file descriptor rather than a TCP host/port or named unix socket",
      args: {
        name: "FILE_DESCRIPTOR",
      },
    },
    {
      name: ["-e", "--endpoint"],
      description: "Use raw server strings passed directly to twisted",
      args: {
        name: "SOCKET_STRINGS",
      },
    },
    {
      name: ["-v", "--verbosity"],
      description: "How verbose to make the output",
      args: {
        name: "VERBOSITY",
      },
    },
    {
      name: ["-t", "--http-timeout"],
      description:
        "How long to wait for worker before timing out HTTP connections",
      args: {
        name: "HTTP_TIMEOUT",
      },
    },
    {
      name: "--access-log",
      description:
        "Where to write the access log (- for stdout, the default for verbosity=1)",
      args: {
        name: "ACCESS_LOG",
      },
    },
    {
      name: "--log-fmt",
      description: "Log format to use",
      args: {
        name: "LOG_FMT",
      },
    },
    {
      name: "--ping-interval",
      description:
        "The number of seconds a WebSocket must be idle before a keepalive ping is sent",
      args: {
        name: "PING_INTERVAL",
      },
    },
    {
      name: "--ping-timeout",
      description:
        "The number of seconds before a WebSocket is closed if no response to a keepalive ping",
      args: {
        name: "PING_TIMEOUT",
      },
    },
    {
      name: "--websocket-max-message-size",
      description:
        "Maximum size, in bytes, of an incoming WebSocket message. 0 disables the limit (not recommended; allows unauthenticated memory exhaustion)",
      args: {
        name: "WEBSOCKET_MAX_MESSAGE_SIZE",
      },
    },
    {
      name: "--websocket-max-frame-size",
      description:
        "Maximum size, in bytes, of a single incoming WebSocket frame. 0 disables the limit (not recommended; allows unauthenticated memory exhaustion)",
      args: {
        name: "WEBSOCKET_MAX_FRAME_SIZE",
      },
    },
    {
      name: "--application-close-timeout",
      description:
        "The number of seconds an ASGI application has to exit after client disconnect before it is killed",
      args: {
        name: "APPLICATION_CLOSE_TIMEOUT",
      },
    },
    {
      name: "--root-path",
      description: "The setting for the ASGI root_path variable",
      args: {
        name: "ROOT_PATH",
      },
    },
    {
      name: "--proxy-headers",
      description:
        "Enable parsing and using of X-Forwarded-For and X-Forwarded-Port headers and using that as the client address",
    },
    {
      name: "--proxy-headers-host",
      description:
        'Specify which header will be used for getting the host part. Can be omitted, requires --proxy-headers to be specified when passed. "X-Real-IP" (when passed by your webserver) is a good candidate for this',
      args: {
        name: "PROXY_HEADERS_HOST",
      },
    },
    {
      name: "--proxy-headers-port",
      description:
        "Specify which header will be used for getting the port part. Can be omitted, requires --proxy-headers to be specified when passed",
      args: {
        name: "PROXY_HEADERS_PORT",
      },
    },
    {
      name: ["-s", "--server-name"],
      description:
        "Specify which value should be passed to response header Server attribute",
      args: {
        name: "SERVER_NAME",
      },
    },
    {
      name: "--no-server-name",
      description: "Suppress the Server response header",
    },
  ],
};

export default completionSpec;
