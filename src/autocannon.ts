const completionSpec: Fig.Spec = {
  name: "autocannon",
  description: "Fast HTTP/1.1 benchmarking tool written in Node.js",
  icon: "https://raw.githubusercontent.com/mcollina/autocannon/master/autocannon-logo-icon-100px.png",
  args: {
    name: "URL",
    description: "The URL to benchmark",
  },
  options: [
    {
      name: ["-c", "--connections"],
      description: "The number of concurrent connections to use",
      args: {
        name: "NUM",
        default: "10",
      },
    },
    {
      name: ["-p", "--pipelining"],
      description: "The number of pipelined requests to use",
      args: {
        name: "NUM",
        default: "1",
      },
    },
    {
      name: ["-d", "--duration"],
      description: "The number of seconds to run the autocannon",
      exclusiveOn: ["-a", "--amount"],
      args: {
        name: "SEC",
        default: "10",
      },
    },
    {
      name: ["-a", "--amount"],
      description:
        "The number of requests to make before exiting the benchmark",
      exclusiveOn: ["-d", "--duration"],
      args: {
        name: "NUM",
      },
    },
    {
      name: "-L",
      description:
        "The number of milliseconds to elapse between taking samples. This controls the sample interval, & therefore the total number of samples, which affects statistical analyses",
      args: {
        name: "NUM",
        default: "1",
      },
    },
    {
      name: ["-S", "--socketPath"],
      description:
        "A path to a Unix Domain Socket or a Windows Named Pipe. A URL is still required to send the correct Host header and path",
      args: {
        name: "PATH",
      },
    },
    {
      name: ["-w", "--workers"],
      description: "Number of worker threads to use to fire requests",
      args: {
        name: "NUM",
        default: "1",
      },
    },
    {
      name: ["-W", "--warmup"],
      description:
        "Use a warm up interval before starting sampling. This enables startup processes to finish and traffic to normalize before sampling begins",
      args: [
        {
          name: "-c",
          default: "1",
        },
        {
          name: "-d",
          default: "3",
        },
      ],
    },
    {
      name: "--on-port",
      description:
        "Start the command listed after -- on the command line. When it starts listening on a port, start sending requests to that port. A URL is still required to send requests to the correct path. The hostname can be omitted, `localhost` will be used by default",
      args: {
        name: "PORT",
      },
    },
    {
      name: ["-m", "--method"],
      description: "The HTTP method to use",
      args: {
        name: "METHOD",
        default: "GET",
        suggestions: [
          "GET",
          "POST",
          "PUT",
          "DELETE",
          "PATCH",
          "HEAD",
          "OPTIONS",
          "TRACE",
        ],
      },
    },
    {
      name: ["-t", "--timeout"],
      description:
        "The number of seconds before timing out and resetting a connection",
      args: {
        name: "NUM",
        default: "10",
      },
    },
    {
      name: ["-T", "--title"],
      description: "The title to place in the results for identification",
      args: {
        name: "TITLE",
      },
    },
    {
      name: ["-b", "--body"],
      description: "The body of the request",
      dependsOn: ["-H", "--headers"],
      args: {
        name: "BODY",
      },
    },
    {
      name: ["-F", "--form"],
      args: {
        name: "FORM",
      },
    },
    {
      name: ["-i", "--input"],
      description: "The body of the request",
      dependsOn: ["-H", "--headers"],
      args: {
        name: "FILE",
        generators: {
          template: "filepaths",
        },
      },
    },
    {
      name: ["-H", "--headers"],
      description: "The request headers",
      isRepeatable: true,
      args: {
        name: "K=V",
      },
    },
    {
      name: "--har",
      description:
        "When provided, Autocannon will use requests from the HAR file",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: ["-B", "--bailout"],
      description: "The number of failures before initiating a bailout",
      args: {
        name: "NUM",
        default: "0",
      },
    },
    {
      name: ["-M", "--maxConnectionRequests"],
      description:
        "The max number of requests to make per connection to the server",
      args: { name: "NUM" },
    },
    {
      name: ["-O", "--maxOverallRequests"],
      description: "The max number of requests to make overall to the server",
      args: { name: "NUM" },
    },
    {
      name: ["-r", "--connectionRate"],
      description:
        "The max number of requests to make per second from an individual connection",
      args: { name: "NUM" },
    },
    {
      name: ["-R", "--overallRate"],
      description:
        "The max number of requests to make per second from all connections",
      args: {
        name: "NUM",
      },
    },
    {
      name: ["-C", "--ignoreCoordinatedOmission"],
      description:
        "Ignore the coordinated omission issue when requests should be sent at a fixed rate using 'connectionRate' or 'overallRate'",
    },
    {
      name: ["-D", "--reconnectRate"],
      description:
        "The number of requests to make before resetting a connections connection to the server",
      args: {
        name: "NUM",
      },
    },
    {
      name: ["-n", "--no-progress"],
      description: "Don't render the progress bar. default: false",
    },
    {
      name: ["-l", "--latency"],
      description: "Print all the latency data. default: false",
    },
    {
      name: ["-I", "--idReplacement"],
      description:
        "Enable replacement of [<id>] with a randomly generated ID within the request body. default: false",
    },
    {
      name: ["-j", "--jsonPath"],
      description:
        "Print the output as newline delimited JSON. This will cause the progress bar and results not to be rendered",
    },
    {
      name: ["-f", "--forever"],
      description:
        "Run the benchmark forever. Efficiently restarts the benchmark on completion",
    },
    {
      name: ["-s", "--servername"],
      description:
        "Server name for the SNI (Server Name Indication) TLS extension. Defaults to the hostname of the URL when it is not an IP address",
    },
    {
      name: ["-x", "--excludeErrorStats"],
      description:
        "Exclude error statistics (non-2xx HTTP responses) from the final latency and bytes per second averages. default: false",
    },
    {
      name: ["-E", "--expectBody"],
      description:
        "Ensure the body matches this value. If enabled, mismatches count towards bailout. Enabling this option will slow down the load testing",
      args: {
        name: "EXPECTED",
      },
    },
    {
      name: "--renderStatusCodes",
      description: "Print status codes and their respective statistics",
    },
    {
      name: "--cert",
      description: "Path to cert chain in pem format",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--key",
      description: "Path to private key for specified cert in pem format",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--ca",
      description:
        "Path to trusted ca certificates for the test. This argument accepts both a single file as well as a list of files",
      args: {
        name: "FILE",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "--debug",
      description: "Print connection errors to stderr",
    },
    {
      name: ["-v", "--version"],
      description: "Print the version number",
    },
    {
      name: ["-V", "--verbose"],
      description: "Print the table with results (default: true)",
    },
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
  ],
};

export default completionSpec;
