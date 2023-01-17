const completionSpec: Fig.Spec = {
  name: "goctl",
  description: "A cli tool to generate go-zero code",
  subcommands: [
    {
      name: "api",
      description: "Generate api related files",
      subcommands: [
        {
          name: "dart",
          description: "Generate dart files for provided api in api file",
          options: [
            {
              name: "--api",
              description: "The api file",
              args: { name: "api" },
            },
            {
              name: "--dir",
              description: "The target dir",
              args: { name: "dir" },
            },
            {
              name: "--hostname",
              description: "Hostname of the server",
              args: { name: "hostname" },
            },
            {
              name: "--legacy",
              description: "Legacy generator for flutter v1",
            },
          ],
        },
        {
          name: "doc",
          description: "Generate doc files",
          options: [
            {
              name: "--dir",
              description: "The target dir",
              args: { name: "dir" },
            },
            {
              name: "--o",
              description: "The output markdown directory",
              args: { name: "o" },
            },
          ],
        },
        {
          name: "format",
          description: "Format api files",
          options: [
            {
              name: "--declare",
              description: "Use to skip check api types already declare",
            },
            {
              name: "--dir",
              description: "The format target dir",
              args: { name: "dir" },
            },
            { name: "--iu", description: "Ignore update" },
            {
              name: "--stdin",
              description:
                'Use stdin to input api doc content, press "ctrl + d" to send EOF',
            },
          ],
        },
        {
          name: "go",
          description: "Generate go files for provided api in yaml file",
          options: [
            {
              name: "--api",
              description: "The api file",
              args: { name: "api" },
            },
            {
              name: "--branch",
              description:
                "The branch of the remote repo, it does work with --remote",
              args: { name: "branch", default: "master" },
            },
            {
              name: "--dir",
              description: "The target dir",
              args: { name: "dir" },
            },
            {
              name: "--home",
              description:
                "The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority",
              args: { name: "home" },
            },
            {
              name: "--remote",
              description:
                "The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority 	The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure",
              args: { name: "remote" },
            },
            {
              name: "--style",
              description:
                "The file naming format, see [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md]",
              args: { name: "style", default: "gozero" },
            },
          ],
        },
        {
          name: "java",
          description: "Generate java files for provided api in api file",
          options: [
            {
              name: "--api",
              description: "The api file",
              args: { name: "api" },
            },
            {
              name: "--dir",
              description: "The target dir",
              args: { name: "dir" },
            },
          ],
        },
        {
          name: "kt",
          description: "Generate kotlin code for provided api file",
          options: [
            {
              name: "--api",
              description: "The api file",
              args: { name: "api" },
            },
            {
              name: "--dir",
              description: "The target dir",
              args: { name: "dir" },
            },
            {
              name: "--pkg",
              description: "Define package name for kotlin file",
              args: { name: "pkg" },
            },
          ],
        },
        {
          name: "new",
          description: "Fast create api service",
          options: [
            {
              name: "--branch",
              description:
                "The branch of the remote repo, it does work with --remote",
              args: { name: "branch", default: "master" },
            },
            {
              name: "--home",
              description:
                "The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority",
              args: { name: "home" },
            },
            {
              name: "--remote",
              description:
                "The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority 	The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure",
              args: { name: "remote" },
            },
            {
              name: "--style",
              description:
                "The file naming format, see [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md]",
              args: { name: "style", default: "gozero" },
            },
          ],
        },
        {
          name: "plugin",
          description: "Custom file generator",
          options: [
            {
              name: "--api",
              description: "The api file",
              args: { name: "api" },
            },
            {
              name: "--dir",
              description: "The target dir",
              args: { name: "dir" },
            },
            {
              name: ["--plugin", "-p"],
              description: "The plugin file",
              args: { name: "plugin" },
            },
            {
              name: "--style",
              description:
                "The file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]",
              args: { name: "style" },
            },
          ],
        },
        {
          name: "ts",
          description: "Generate ts files for provided api in api file",
          options: [
            {
              name: "--api",
              description: "The api file",
              args: { name: "api" },
            },
            {
              name: "--caller",
              description: "The web api caller",
              args: { name: "caller" },
            },
            {
              name: "--dir",
              description: "The target dir",
              args: { name: "dir" },
            },
            {
              name: "--unwrap",
              description: "Unwrap the webapi caller for import",
            },
            {
              name: "--webapi",
              description: "The web api file path",
              args: { name: "webapi" },
            },
          ],
        },
        {
          name: "validate",
          description: "Validate api file",
          options: [
            {
              name: "--api",
              description: "Validate target api file",
              args: { name: "api" },
            },
          ],
        },
      ],
      options: [
        {
          name: "--branch",
          description:
            "The branch of the remote repo, it does work with --remote",
          args: { name: "branch", default: "master" },
        },
        {
          name: "--home",
          description:
            "The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority",
          args: { name: "home" },
        },
        {
          name: "--o",
          description: "Output a sample api file",
          args: { name: "o" },
        },
        {
          name: "--remote",
          description:
            "The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority 	The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure",
          args: { name: "remote" },
        },
      ],
    },
    { name: "bug", description: "Report a bug" },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: "docker",
      description: "Generate Dockerfile",
      options: [
        {
          name: "--base",
          description:
            "The base image to build the docker image, default scratch",
          args: { name: "base", default: "scratch" },
        },
        {
          name: "--branch",
          description:
            "The branch of the remote repo, it does work with --remote",
          args: { name: "branch" },
        },
        {
          name: "--go",
          description: "The directory that contains main function",
          args: { name: "go", default: "." },
        },
        {
          name: "--home",
          description:
            "The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority",
          args: { name: "home" },
        },
        {
          name: "--port",
          description: "The port to expose, default none",
          args: { name: "port", default: "0" },
        },
        {
          name: "--remote",
          description:
            "The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority 	The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure",
          args: { name: "remote" },
        },
        {
          name: "--tz",
          description: "The timezone of the container",
          args: { name: "tz", default: "Asia/Shanghai" },
        },
        {
          name: "--version",
          description: "The goctl builder golang image version",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "env",
      description: "Check or edit goctl environment",
      subcommands: [
        {
          name: "check",
          description: "Detect goctl env and dependency tools",
          options: [
            {
              name: ["--install", "-i"],
              description: "Install dependencies if not found",
            },
          ],
        },
        { name: "install", description: "Goctl env installation" },
      ],
      options: [
        {
          name: ["--write", "-w"],
          description: "Edit goctl environment",
          args: { name: "write" },
        },
        {
          name: ["--force", "-f"],
          description: "Silent installation of non-existent dependencies",
          isPersistent: true,
        },
        {
          name: ["--verbose", "-v"],
          description: "Enable log output",
          isPersistent: true,
        },
      ],
    },
    {
      name: "kube",
      description: "Generate kubernetes files",
      subcommands: [
        {
          name: "deploy",
          description: "Generate deployment yaml file",
          options: [
            {
              name: "--branch",
              description:
                "The branch of the remote repo, it does work with --remote",
              args: { name: "branch" },
            },
            {
              name: "--home",
              description:
                "The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority",
              args: { name: "home" },
            },
            {
              name: "--image",
              description: "The docker image of deployment (required)",
              args: { name: "image" },
            },
            {
              name: "--limitCpu",
              description: "The limit cpu to deploy",
              args: { name: "limitCpu", default: "1000" },
            },
            {
              name: "--limitMem",
              description: "The limit memory to deploy",
              args: { name: "limitMem", default: "1024" },
            },
            {
              name: "--maxReplicas",
              description: "The max replicas to deploy",
              args: { name: "maxReplicas", default: "10" },
            },
            {
              name: "--minReplicas",
              description: "The min replicas to deploy",
              args: { name: "minReplicas", default: "3" },
            },
            {
              name: "--name",
              description: "The name of deployment (required)",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "The namespace of deployment (required)",
              args: { name: "namespace" },
              isRequired: true,
            },
            {
              name: "--nodePort",
              description: "The nodePort of the deployment to expose",
              args: { name: "nodePort", default: "0" },
            },
            {
              name: "--o",
              description: "The output yaml file (required)",
              args: { name: "o" },
              isRequired: true,
            },
            {
              name: "--port",
              description:
                "The port of the deployment to listen on pod (required)",
              args: { name: "port", default: "0" },
              isRequired: true,
            },
            {
              name: "--remote",
              description:
                "The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority 	The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure",
              args: { name: "remote" },
            },
            {
              name: "--replicas",
              description: "The number of replicas to deploy",
              args: { name: "replicas", default: "3" },
            },
            {
              name: "--requestCpu",
              description: "The request cpu to deploy",
              args: { name: "requestCpu", default: "500" },
            },
            {
              name: "--requestMem",
              description: "The request memory to deploy",
              args: { name: "requestMem", default: "512" },
            },
            {
              name: "--revisions",
              description: "The number of revision history to limit",
              args: { name: "revisions", default: "5" },
            },
            {
              name: "--secret",
              description: "The secret to image pull from registry",
              args: { name: "secret" },
            },
            {
              name: "--serviceAccount",
              description: "The ServiceAccount for the deployment",
              args: { name: "serviceAccount" },
            },
          ],
        },
      ],
    },
    {
      name: "migrate",
      description: "Migrate from tal-tech to zeromicro",
      options: [
        {
          name: ["--verbose", "-v"],
          description: "Verbose enables extra logging",
        },
        {
          name: "--version",
          description:
            "The target release version of github.com/zeromicro/go-zero to migrate",
          args: { name: "version", default: "v1.3.0" },
        },
      ],
    },
    {
      name: "model",
      description: "Generate model code",
      subcommands: [
        {
          name: "mongo",
          description: "Generate mongo model",
          options: [
            {
              name: "--branch",
              description:
                "The branch of the remote repo, it does work with --remote",
              args: { name: "branch" },
            },
            {
              name: ["--cache", "-c"],
              description: "Generate code with cache [optional]",
            },
            {
              name: ["--dir", "-d"],
              description: "The target dir",
              args: { name: "dir" },
            },
            {
              name: "--home",
              description:
                "The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority",
              args: { name: "home" },
            },
            {
              name: "--remote",
              description:
                "The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority 	The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure",
              args: { name: "remote" },
            },
            {
              name: "--style",
              description:
                "The file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]",
              args: { name: "style" },
            },
            {
              name: ["--type", "-t"],
              description: "Specified model type name",
              args: { name: "type" },
            },
          ],
        },
        {
          name: "mysql",
          description: "Generate mysql model",
          subcommands: [
            {
              name: "datasource",
              description: "Generate model from datasource",
              options: [
                {
                  name: "--branch",
                  description:
                    "The branch of the remote repo, it does work with --remote",
                  args: { name: "branch" },
                },
                {
                  name: ["--cache", "-c"],
                  description: "Generate code with cache [optional]",
                },
                {
                  name: ["--dir", "-d"],
                  description: "The target dir",
                  args: { name: "dir" },
                },
                {
                  name: "--home",
                  description:
                    "The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority",
                  args: { name: "home" },
                },
                {
                  name: "--idea",
                  description: "For idea plugin [optional]",
                },
                {
                  name: "--remote",
                  description:
                    "The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority 	The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure",
                  args: { name: "remote" },
                },
                {
                  name: "--style",
                  description:
                    "The file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]",
                  args: { name: "style" },
                },
                {
                  name: ["--table", "-t"],
                  description:
                    "The table or table globbing patterns in the database",
                  args: { name: "table" },
                },
                {
                  name: "--url",
                  description:
                    'The data source of database,like "root:password@tcp(127.0.0.1:3306)/database"',
                  args: { name: "url" },
                },
              ],
            },
            {
              name: "ddl",
              description: "Generate mysql model from ddl",
              options: [
                {
                  name: "--branch",
                  description:
                    "The branch of the remote repo, it does work with --remote",
                  args: { name: "branch" },
                },
                {
                  name: ["--cache", "-c"],
                  description: "Generate code with cache [optional]",
                },
                {
                  name: "--database",
                  description: "The name of database [optional]",
                  args: { name: "database" },
                },
                {
                  name: ["--dir", "-d"],
                  description: "The target dir",
                  args: { name: "dir" },
                },
                {
                  name: "--home",
                  description:
                    "The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority",
                  args: { name: "home" },
                },
                {
                  name: "--idea",
                  description: "For idea plugin [optional]",
                },
                {
                  name: "--remote",
                  description:
                    "The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority 	The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure",
                  args: { name: "remote" },
                },
                {
                  name: ["--src", "-s"],
                  description: "The path or path globbing patterns of the ddl",
                  args: { name: "src" },
                },
                {
                  name: "--style",
                  description:
                    "The file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]",
                  args: { name: "style" },
                },
              ],
            },
            {
              name: "pg",
              description: "Generate postgresql model",
              options: [
                {
                  name: "--branch",
                  description:
                    "The branch of the remote repo, it does work with --remote",
                  args: { name: "branch" },
                },
                {
                  name: ["--cache", "-c"],
                  description: "Generate code with cache [optional]",
                },
                {
                  name: ["--dir", "-d"],
                  description: "The target dir",
                  args: { name: "dir" },
                },
                {
                  name: "--home",
                  description:
                    "The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority",
                  args: { name: "home" },
                },
                {
                  name: "--idea",
                  description: "For idea plugin [optional]",
                },
                {
                  name: "--remote",
                  description:
                    "The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority 	The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure",
                  args: { name: "remote" },
                },
                {
                  name: ["--schema", "-s"],
                  description: "The table schema",
                  args: { name: "schema", default: "public" },
                },
                {
                  name: "--style",
                  description:
                    "The file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]",
                  args: { name: "style" },
                },
                {
                  name: ["--table", "-t"],
                  description:
                    "The table or table globbing patterns in the database",
                  args: { name: "table" },
                },
                {
                  name: "--url",
                  description:
                    'The data source of database,like "root:password@tcp(127.0.0.1:3306)/database"',
                  args: { name: "url" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "quickstart",
      description: "Quickly start a project",
      options: [
        {
          name: ["--service-type", "-t"],
          description:
            "Specify the service type, supported values: [mono, micro]",
          args: { name: "service-type", default: "mono" },
        },
      ],
    },
    {
      name: "rpc",
      description: "Generate rpc code",
      subcommands: [
        {
          name: "new",
          description: "Generate rpc demo service",
          options: [
            {
              name: "--branch",
              description:
                "The branch of the remote repo, it does work with --remote",
              args: { name: "branch" },
            },
            {
              name: "--go-grpc_opt",
              description: "",
              hidden: true,
              args: { name: "go-grpc_opt" },
            },
            {
              name: "--go_opt",
              description: "",
              hidden: true,
              args: { name: "go_opt" },
            },
            {
              name: "--home",
              description:
                "The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority",
              args: { name: "home" },
            },
            {
              name: "--idea",
              description:
                "Whether the command execution environment is from idea plugin",
            },
            {
              name: "--remote",
              description:
                "The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority 	The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure",
              args: { name: "remote" },
            },
            {
              name: "--style",
              description:
                "The file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]",
              args: { name: "style", default: "gozero" },
            },
            { name: ["--verbose", "-v"], description: "Enable log output" },
          ],
        },
        {
          name: "protoc",
          description: "Generate grpc code",
          options: [
            {
              name: "--branch",
              description:
                "The branch of the remote repo, it does work with --remote",
              args: { name: "branch" },
            },
            {
              name: "--go-grpc_opt",
              description: "",
              hidden: true,
              args: { name: "go-grpc_opt" },
            },
            {
              name: "--go-grpc_out",
              description: "",
              hidden: true,
              args: { name: "go-grpc_out" },
            },
            {
              name: "--go_opt",
              description: "",
              hidden: true,
              args: { name: "go_opt" },
            },
            {
              name: "--go_out",
              description: "",
              hidden: true,
              args: { name: "go_out" },
            },
            {
              name: "--home",
              description:
                "The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority",
              args: { name: "home" },
            },
            {
              name: ["--multiple", "-m"],
              description: "Generated in multiple rpc service mode",
            },
            {
              name: "--plugin",
              description: "",
              hidden: true,
              args: { name: "plugin" },
            },
            {
              name: ["--proto_path", "-I"],
              description: "",
              hidden: true,
              args: { name: "proto_path" },
            },
            {
              name: "--remote",
              description:
                "The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority 	The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure",
              args: { name: "remote" },
            },
            {
              name: "--style",
              description:
                "The file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]",
              args: { name: "style", default: "gozero" },
            },
            {
              name: ["--verbose", "-v"],
              description: "Enable log output",
            },
            {
              name: "--zrpc_out",
              description: "The zrpc output directory",
              args: { name: "zrpc_out" },
            },
          ],
        },
        {
          name: "template",
          description: "Generate proto template",
          options: [
            {
              name: "--branch",
              description:
                "The branch of the remote repo, it does work with --remote",
              args: { name: "branch" },
            },
            {
              name: "--home",
              description:
                "The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority",
              args: { name: "home" },
            },
            {
              name: "--o",
              description: "Output a sample proto file",
              args: { name: "o" },
            },
            {
              name: "--remote",
              description:
                "The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority 	The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure",
              args: { name: "remote" },
            },
          ],
        },
      ],
      options: [
        {
          name: "--branch",
          description:
            "The branch of the remote repo, it does work with --remote",
          args: { name: "branch" },
        },
        {
          name: "--home",
          description:
            "The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority",
          args: { name: "home" },
        },
        {
          name: "--o",
          description: "Output a sample proto file",
          args: { name: "o" },
        },
        {
          name: "--remote",
          description:
            "The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority 	The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure",
          args: { name: "remote" },
        },
      ],
    },
    {
      name: "template",
      description: "Template operation",
      subcommands: [
        {
          name: "clean",
          description: "Clean the all cache templates",
          options: [
            {
              name: "--home",
              description: "The goctl home path of the template",
              args: { name: "home" },
            },
          ],
        },
        {
          name: "init",
          description: "Initialize the all templates(force update)",
          options: [
            {
              name: "--home",
              description: "The goctl home path of the template",
              args: { name: "home" },
            },
          ],
        },
        {
          name: "revert",
          description: "Revert the target template to the latest",
          options: [
            {
              name: ["--category", "-c"],
              description:
                "The category of template, enum [api,rpc,model,docker,kube]",
              args: { name: "category" },
            },
            {
              name: "--home",
              description: "The goctl home path of the template",
              args: { name: "home" },
            },
            {
              name: ["--name", "-n"],
              description: "The target file name of template",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update template of the target category to the latest",
          options: [
            {
              name: ["--category", "-c"],
              description:
                "The category of template, enum [api,rpc,model,docker,kube]",
              args: { name: "category" },
            },
            {
              name: "--home",
              description: "The goctl home path of the template",
              args: { name: "home" },
            },
          ],
        },
      ],
    },
    { name: "upgrade", description: "Upgrade goctl to latest version" },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "api",
          description: "Generate api related files",
          subcommands: [
            {
              name: "dart",
              description: "Generate dart files for provided api in api file",
            },
            { name: "doc", description: "Generate doc files" },
            {
              name: "format",
              description: "Format api files",
            },
            {
              name: "go",
              description: "Generate go files for provided api in yaml file",
            },
            {
              name: "java",
              description: "Generate java files for provided api in api file",
            },
            {
              name: "kt",
              description: "Generate kotlin code for provided api file",
            },
            { name: "new", description: "Fast create api service" },
            {
              name: "plugin",
              description: "Custom file generator",
            },
            {
              name: "ts",
              description: "Generate ts files for provided api in api file",
            },
            { name: "validate", description: "Validate api file" },
          ],
        },
        { name: "bug", description: "Report a bug" },
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
            },
            {
              name: "fish",
              description: "Generate the autocompletion script for fish",
            },
            {
              name: "powershell",
              description: "Generate the autocompletion script for powershell",
            },
            {
              name: "zsh",
              description: "Generate the autocompletion script for zsh",
            },
          ],
        },
        { name: "docker", description: "Generate Dockerfile" },
        {
          name: "env",
          description: "Check or edit goctl environment",
          subcommands: [
            {
              name: "check",
              description: "Detect goctl env and dependency tools",
            },
            { name: "install", description: "Goctl env installation" },
          ],
        },
        {
          name: "kube",
          description: "Generate kubernetes files",
          subcommands: [
            { name: "deploy", description: "Generate deployment yaml file" },
          ],
        },
        {
          name: "migrate",
          description: "Migrate from tal-tech to zeromicro",
        },
        {
          name: "model",
          description: "Generate model code",
          subcommands: [
            {
              name: "mongo",
              description: "Generate mongo model",
            },
            {
              name: "mysql",
              description: "Generate mysql model",
              subcommands: [
                {
                  name: "datasource",
                  description: "Generate model from datasource",
                },
                { name: "ddl", description: "Generate mysql model from ddl" },
                {
                  name: "pg",
                  description: "Generate postgresql model",
                },
              ],
            },
          ],
        },
        { name: "quickstart", description: "Quickly start a project" },
        {
          name: "rpc",
          description: "Generate rpc code",
          subcommands: [
            {
              name: "new",
              description: "Generate rpc demo service",
            },
            { name: "protoc", description: "Generate grpc code" },
            {
              name: "template",
              description: "Generate proto template",
            },
          ],
        },
        {
          name: "template",
          description: "Template operation",
          subcommands: [
            {
              name: "clean",
              description: "Clean the all cache templates",
            },
            {
              name: "init",
              description: "Initialize the all templates(force update)",
            },
            {
              name: "revert",
              description: "Revert the target template to the latest",
            },
            {
              name: "update",
              description:
                "Update template of the target category to the latest",
            },
          ],
        },
        { name: "upgrade", description: "Upgrade goctl to latest version" },
      ],
    },
  ],
  options: [
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
