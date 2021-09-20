// To learn more about Fig's autocomplete standard visit: https://fig.io/docs/concepts/cli-skeleton

// The below is a dummy example for git. Make sure to change the file name!
const completionSpec: Fig.Spec = {
  name: "serve",
  description: "Static file serving and directory listing",
  args: {
    name: "location",
    template: "folders",
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Shows help message",
    },
    {
      name: ["-v", "--version"],
      description: "Displays the current version of serve",
    },
    {
      name: ["-l", "--listen"],

      description:
        "Specify a URI endpoint on which to listen - more than one may be specified to listen in multiple places",
      args: {
        name: "listen_uri",
        suggestions: [
          {
            name: "port",
            description: "E.g. serve --listen 1234",
            type: "arg",
            insertValue: "1234",
            priority: 100,
          },
          {
            name: "host/port",
            description: "E.g. serve --listen tcp://hostname:1234",
            type: "arg",
            insertValue: "tcp://hostname:1234",
            priority: 76,
          },
          {
            name: "unix domain",
            description: "E.g. serve --listen unix:/path/to/socket.sock",
            type: "arg",
            insertValue: "unix:/path/to/socket.sock",
          },
          {
            name: "windows pipe",
            description: "E.g. serve -l pipe:\\.pipePipeName",
            type: "arg",
            insertValue: "pipe:\\.pipePipeName",
          },
        ],
      },
    },
    {
      name: "-p",
      description: "Specify custom port",
      args: { name: "port" },
    },
    {
      name: ["-d", "--debug"],
      description: "Show debugging information",
    },
    {
      name: ["-s", "--single"],
      description: "Rewrite all not-found requests to `index.html`",
    },
    {
      name: ["-c", "--config"],
      description: "Specify custom path to `serve.json`",
      args: {
        name: "path to config file",
        template: "filepaths",
      },
    },
    {
      name: ["-C", "--cors"],
      description: "Enable CORS, sets `Access-Control-Allow-Origin` to `*`",
    },
    {
      name: ["-n", "--no-clipboard"],
      description: "Do not copy the local address to the clipboard",
    },
    {
      name: ["-u", "--no-compression"],
      description: "Do not compress files",
    },
    {
      name: "--no-etag",
      description: "Send `Last-Modified` header instead of `ETag`",
    },
    {
      name: ["-S", "--symlinks"],
      description: "Resolve symlinks instead of showing 404 errors",
    },
    {
      name: "--ssl-cert",
      description:
        "Optional path to an SSL/TLS certificate to serve with HTTPS",
      args: {
        name: "path to SSL/TLS certificate",
        template: "filepaths",
      },
    },
    {
      name: "--ssl-key",
      description: "Optional path to the SSL/TLS certificate's private key",
      args: {
        name: "path to private key",
        template: "filepaths",
      },
    },
    {
      name: "--ssl-pass",
      description: "Optional path to the SSL/TLS certificate's passphrase",
      args: {
        name: "path to passphrase",
        template: "filepaths",
      },
    },
    {
      name: "--no-port-switching",
      description:
        "Do not open a port other than the one specified when it's taken",
    },
  ],
};

export default completionSpec;
