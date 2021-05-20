var completionSpec = {
    name: "dbt",
    description: "",
    subcommands: [
        {
            name: "debug",
            description: "debugs dbt connections and projects",
            options: [{ name: "--config-dir" }],
        },
        {
            name: "run",
            description: "runs the models in a project",
            options: [
                {
                    name: "--full-refresh",
                    description: "Treat incremental models as table models",
                },
                {
                    name: ["-X", "--fail-fast"],
                    description: "exit immediately if a single model fails to build",
                },
            ],
        },
        {
            name: "init",
            description: "initializes a new dbt project",
            args: {
                name: "YOUR PROJECT NAME",
            },
            options: [
                {
                    name: "--adapter",
                    description: "Add an adapter",
                    args: { name: "ADAPTER NAME", description: "e.g. big query" },
                },
            ],
        },
        {
            name: "compile",
            description: "compiles (but does not run) the models in a project",
        },
        {
            name: "test",
            description: "executes tests defined in a project",
            options: [
                {
                    name: "--models",
                    description: "Like the --select flag, this flag is used to select nodes. It implies --resource-type=model, and will only return models in the results of the dbt ls command.",
                    args: {
                        name: "SELECTOR",
                        variadic: true,
                    },
                },
                {
                    name: "--data",
                    description: "Run only custom data tests",
                },
                {
                    name: "--schema",
                    description: "Run only schema tests",
                },
            ],
        },
        { name: "deps", description: "downloads dependencies for a project" },
        {
            name: "snapshot",
            description: "executes 'snapshot' jobs defined in a project",
            options: [
                {
                    name: "--profiles-dir",
                    description: "",
                    args: { name: "PROFILES_DIR", description: "", template: "folders" },
                },
                {
                    name: "--profile",
                    description: "",
                    args: { name: "PROFILE ", description: "" },
                },
                {
                    name: "--target",
                    description: "",
                    args: { name: "TARGET", description: "" },
                },
                {
                    name: "--vars",
                    description: "",
                    args: { name: "VARS ", description: "" },
                },
                {
                    name: "--threads",
                    description: "",
                    args: { name: "THREADS", description: "" },
                },
                {
                    name: "--select",
                    description: "",
                    args: { name: "SELECTOR", description: "", variadic: true },
                },
                {
                    name: "--exclude",
                    description: "",
                    args: { name: "EXCLUDE", description: "", variadic: true },
                },
                { name: "--bypass-cache", description: "" },
            ],
        },
        {
            name: "clean",
            description: "deletes artifacts present in the dbt project",
        },
        {
            name: "seed",
            description: "loads CSV files into the database",
            options: [
                {
                    name: "--select",
                    description: "Run specific seeds",
                    args: {
                        name: "SEED",
                        description: "e.g. country_codes",
                    },
                },
            ],
        },
        {
            name: "docs",
            description: "generates documentation for a project",
            subcommands: [
                {
                    name: "generate",
                    description: "Generate your project's documentation website",
                    options: [
                        { name: "--no-compile", description: "Skip re-compilation" },
                    ],
                },
                {
                    name: "serve",
                    description: "Serve your documentation on a local webserver (default prot 8000)",
                    options: [
                        {
                            name: "--profiles-dir",
                            description: "Skip re-compilation",
                            args: {
                                name: "PROFILES_DIR",
                                description: "Path to profiles directory",
                                template: "folders",
                            },
                        },
                        {
                            name: "--profile",
                            description: "Choose a profile",
                            args: {
                                name: "PROFILE NAME",
                            },
                        },
                        {
                            name: "--target",
                            description: "Choose a target",
                            args: {
                                name: "TARGET NAME",
                            },
                        },
                        {
                            name: "--port",
                            description: "Choose a port",
                            args: {
                                name: "port number",
                                description: "default is 8000",
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: "source",
            description: "provides tools for working with source data (including validating that sources are 'fresh')",
            subcommands: [
                {
                    name: "snapshot-freshness",
                    options: [
                        {
                            name: ["-o", "--output"],
                            description: "override the destination for sources.json",
                            args: {
                                name: "FILEPATH",
                                template: "filepaths",
                            },
                        },
                        {
                            name: "--select",
                            description: "This flag specifies one or more selection-type arguments used to filter the nodes returned by the dbt ls command",
                            args: {
                                name: "SELECTION_ARG",
                                variadic: true,
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: "run-operation",
            description: "Runs arbitrary maintenance SQL against the database",
            args: {
                name: "MACRO",
                description: "dbt will call this macro with the supplied arguments and then exit",
            },
            options: [
                {
                    name: "--args",
                    description: "Supply arguments to the macro",
                    args: {
                        name: "ARGS",
                        description: "A short YAML string eg. '{my_variable: my_value}'",
                    },
                },
            ],
        },
        {
            name: "rpc",
            description: "runs an RPC server that clients can submit queries to",
            options: [
                {
                    name: "--host",
                    description: "Specify the host to listen on",
                    args: {
                        name: "HOST",
                        description: "default: 0.0.0.0",
                    },
                },
                {
                    name: "--port",
                    description: "",
                    args: {
                        name: "PORT",
                        description: "default: 8580",
                    },
                },
            ],
        },
        {
            name: ["ls", "list"],
            description: "lists resources defined in a dbt project",
            options: [
                {
                    name: "--resource-type",
                    description: "This flag limits the 'resource types' that dbt will return in the dbt ls command. By default, the following resources are included in the results of dbt ls: models, snapshots, seeds, tests, and sources.",
                    args: {
                        name: "resource-type",
                        suggestions: [
                            "source",
                            "analysis",
                            "model",
                            "snapshot",
                            "test",
                            "seed",
                            "default",
                            "all",
                        ],
                    },
                },
                {
                    name: "--select",
                    description: "This flag specifies one or more selection-type arguments used to filter the nodes returned by the dbt ls command",
                    args: {
                        name: "SELECTION_ARG",
                        variadic: true,
                    },
                },
                {
                    name: "--models",
                    description: "Like the --select flag, this flag is used to select nodes. It implies --resource-type=model, and will only return models in the results of the dbt ls command.",
                    args: {
                        name: "SELECTOR",
                        variadic: true,
                    },
                },
                {
                    name: "--exclude",
                    description: "Specify selectors that should be excluded from the list of returned nodes.",
                    args: {
                        name: "SELECTOR",
                        variadic: true,
                    },
                },
                {
                    name: "--selector",
                    description: "This flag specifies one or more named selectors, defined in a selectors.yml file.",
                    args: {
                        name: "YML_SELECTOR_NAME",
                        variadic: true,
                    },
                },
                {
                    name: "--output",
                    description: "This flag controls the format of output from the dbt ls command.",
                    args: {
                        name: "output",
                        suggestions: ["json", "name", "path", "selector"],
                        variadic: true,
                    },
                },
            ],
        },
    ],
    options: [
        { name: "--version", description: "Currently installed version" },
        {
            name: ["-r", "--record-timing-info"],
            description: "Create a new file to record timing info",
            args: {
                name: "file name",
                description: "Create a new file to record timing info",
            },
        },
        {
            name: ["-d", "--debug"],
            description: "Redirect debug logs to standard out",
        },
        {
            name: ["--log-format"],
            description: "Specify how dbt's logs should be formatted",
            args: {
                name: "log format",
                suggestions: ["text", "json", "default"],
            },
        },
        {
            name: "--no-write-json",
            description: "Prevent dbt from writing JSOn artifacts to the 'target/' directory",
        },
        {
            name: ["-S", "--strict"],
            description: "Perform extra validation of dbt objects and internal consistency checks during compilation. Use only during development",
        },
        {
            name: "--warn-error",
            description: "Convert dbt warnings into errors",
        },
        {
            name: "--partial-parse",
            description: "Configure partial parsing for your project",
        },
        {
            name: "--no-partial-parse",
            description: "Turn off partial parsing for your project",
        },
        {
            name: "--use-colors",
            description: "Enable log colorizing",
        },
        {
            name: "--no-use-colors",
            description: "Disable log colorizing",
        },
    ],
    // Only uncomment if dbt takes an argument
    // args: {}
};

