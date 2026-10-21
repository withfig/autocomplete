const completionSpec: Fig.Spec = {
  name: "uvicorn",
  description: "An ASGI web server, for Python",
  args: {
    name: "APP",
    description:
      "ASGI application to run, in the form 'module:attribute' (e.g. 'main:app')",
  },
  options: [
    {
      name: "--host",
      description: "Bind socket to this host",
      args: {
        name: "HOST",
        default: "127.0.0.1",
      },
    },
    {
      name: "--port",
      description:
        "Bind socket to this port. If 0, an available port will be picked",
      args: {
        name: "PORT",
        default: "8000",
      },
    },
    {
      name: "--uds",
      description: "Bind to a UNIX domain socket",
      args: {
        name: "PATH",
      },
    },
    {
      name: "--fd",
      description: "Bind to socket from this file descriptor",
      args: {
        name: "FD",
      },
    },
    {
      name: "--reload",
      description: "Enable auto-reload",
    },
    {
      name: "--reload-dir",
      description:
        "Set reload directories explicitly, instead of using the current working directory",
      args: {
        name: "PATH",
        template: "folders",
      },
      isRepeatable: true,
    },
    {
      name: "--reload-include",
      description:
        "Set glob patterns to include while watching for files. Includes '*.py' by default. Requires watchfiles",
      args: {
        name: "TEXT",
      },
      isRepeatable: true,
    },
    {
      name: "--reload-exclude",
      description:
        "Set glob patterns to exclude while watching for files. Includes '.*, .py[cod], .sw.*, ~*' by default. Requires watchfiles",
      args: {
        name: "TEXT",
      },
      isRepeatable: true,
    },
    {
      name: "--reload-delay",
      description:
        "Delay between previous and next check if application needs to be reloaded",
      args: {
        name: "FLOAT",
        default: "0.25",
      },
    },
    {
      name: "--workers",
      description:
        "Number of worker processes. Defaults to $WEB_CONCURRENCY if available, or 1. Not valid with --reload",
      args: {
        name: "INTEGER",
      },
    },
    {
      name: "--loop",
      description: "Event loop factory implementation",
      args: {
        name: "IMPLEMENTATION",
        suggestions: ["auto", "asyncio", "uvloop", "zuvloop"],
        default: "auto",
      },
    },
    {
      name: "--http",
      description: "HTTP protocol implementation",
      args: {
        name: "IMPLEMENTATION",
        suggestions: ["auto", "h11", "httptools", "zttp"],
        default: "auto",
      },
    },
    {
      name: "--http2",
      description: "Enable HTTP/2 support. Requires --http zttp",
    },
    {
      name: "--ws",
      description: "WebSocket protocol implementation",
      args: {
        name: "IMPLEMENTATION",
        suggestions: ["auto", "websockets", "websockets-sansio", "wsproto"],
        default: "auto",
      },
    },
    {
      name: "--ws-max-size",
      description: "WebSocket max size message in bytes",
      args: {
        name: "INTEGER",
        default: "16777216",
      },
    },
    {
      name: "--ws-max-queue",
      description: "The maximum length of the WebSocket message queue",
      args: {
        name: "INTEGER",
        default: "32",
      },
    },
    {
      name: "--ws-ping-interval",
      description: "WebSocket ping interval in seconds",
      args: {
        name: "FLOAT",
        default: "20",
      },
    },
    {
      name: "--ws-ping-timeout",
      description: "WebSocket ping timeout in seconds",
      args: {
        name: "FLOAT",
        default: "20",
      },
    },
    {
      name: "--ws-per-message-deflate",
      description: "WebSocket per-message-deflate compression",
      args: {
        name: "BOOLEAN",
        suggestions: ["true", "false"],
        default: "true",
      },
    },
    {
      name: "--lifespan",
      description: "Lifespan implementation",
      args: {
        name: "IMPLEMENTATION",
        suggestions: ["auto", "on", "off"],
        default: "auto",
      },
    },
    {
      name: "--interface",
      description: "Select the application interface",
      args: {
        name: "INTERFACE",
        suggestions: ["auto", "asgi3", "asgi2", "wsgi"],
        default: "auto",
      },
    },
    {
      name: "--env-file",
      description: "Environment configuration file",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "--log-config",
      description: "Logging configuration file (.ini, .json, or .yaml)",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "--log-level",
      description: "Log level",
      args: {
        name: "LEVEL",
        suggestions: ["critical", "error", "warning", "info", "debug", "trace"],
        default: "info",
      },
    },
    {
      name: ["--access-log", "--no-access-log"],
      description: "Enable/Disable access log",
    },
    {
      name: ["--use-colors", "--no-use-colors"],
      description: "Enable/Disable colorized logging",
    },
    {
      name: ["--proxy-headers", "--no-proxy-headers"],
      description:
        "Enable/Disable X-Forwarded-Proto, X-Forwarded-For to populate url scheme and remote address info",
    },
    {
      name: ["--server-header", "--no-server-header"],
      description: "Enable/Disable the default Server header",
    },
    {
      name: ["--date-header", "--no-date-header"],
      description: "Enable/Disable the default Date header",
    },
    {
      name: "--forwarded-allow-ips",
      description:
        "Comma separated list of IP Addresses, IP Networks, or literals to trust with proxy headers. Defaults to $FORWARDED_ALLOW_IPS or '127.0.0.1,::1'",
      args: {
        name: "TEXT",
      },
    },
    {
      name: "--root-path",
      description:
        "Set the ASGI 'root_path' for applications submounted below a given URL path",
      args: {
        name: "TEXT",
      },
    },
    {
      name: "--limit-concurrency",
      description:
        "Maximum number of concurrent connections or tasks to allow before issuing HTTP 503 responses",
      args: {
        name: "INTEGER",
      },
    },
    {
      name: "--backlog",
      description: "Maximum number of connections to hold in backlog",
      args: {
        name: "INTEGER",
      },
    },
    {
      name: "--limit-max-requests",
      description:
        "Maximum number of requests to service before terminating the process",
      args: {
        name: "INTEGER",
      },
    },
    {
      name: "--limit-max-requests-jitter",
      description:
        "Maximum jitter to add to limit_max_requests. Staggers worker restarts",
      args: {
        name: "INTEGER",
        default: "0",
      },
    },
    {
      name: "--timeout-keep-alive",
      description:
        "Close Keep-Alive connections if no new data is received within this timeout in seconds",
      args: {
        name: "INTEGER",
        default: "5",
      },
    },
    {
      name: "--timeout-graceful-shutdown",
      description: "Maximum number of seconds to wait for a graceful shutdown",
      args: {
        name: "INTEGER",
      },
    },
    {
      name: "--timeout-worker-healthcheck",
      description:
        "Maximum number of seconds to wait for a worker to respond to a healthcheck",
      args: {
        name: "INTEGER",
        default: "5",
      },
    },
    {
      name: "--ssl-keyfile",
      description: "SSL key file",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "--ssl-certfile",
      description: "SSL certificate file",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "--ssl-keyfile-password",
      description: "SSL keyfile password",
      args: {
        name: "TEXT",
      },
    },
    {
      name: "--ssl-version",
      description: "SSL version to use (see the stdlib ssl module)",
      args: {
        name: "INTEGER",
        default: "17",
      },
    },
    {
      name: "--ssl-cert-reqs",
      description:
        "Whether a client certificate is required (see the stdlib ssl module)",
      args: {
        name: "INTEGER",
        default: "0",
      },
    },
    {
      name: "--ssl-ca-certs",
      description: "CA certificates file",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "--ssl-ciphers",
      description:
        "Ciphers to use (see the stdlib ssl module). Defaults to OpenSSL's safe defaults",
      args: {
        name: "TEXT",
      },
    },
    {
      name: "--header",
      description:
        "Specify a custom default HTTP response header as a Name:Value pair",
      args: {
        name: "TEXT",
      },
      isRepeatable: true,
    },
    {
      name: "--version",
      description: "Display the uvicorn version and exit",
    },
    {
      name: "--app-dir",
      description:
        "Look for APP in the specified directory by adding it to PYTHONPATH",
      args: {
        name: "PATH",
        template: "folders",
        default: ".",
      },
    },
    {
      name: "--h11-max-incomplete-event-size",
      description:
        "For h11, the maximum number of bytes to buffer of an incomplete event",
      args: {
        name: "INTEGER",
      },
    },
    {
      name: "--reset-contextvars",
      description:
        "Run each ASGI request in a fresh contextvars.Context. Hides context set in the lifespan",
    },
    {
      name: "--factory",
      description:
        "Treat APP as an application factory, i.e. a () -> <ASGI app> callable",
    },
    {
      name: "--help",
      description: "Show help message and exit",
    },
  ],
};

export default completionSpec;
