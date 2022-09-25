const completionSpec: Fig.Spec = {
  name: "sqlfluff",
  description: "a dialect-flexible and configurable SQL linter",
  subcommands: [{
    name: "lint",
    description: "Lint SQL files via passing a list of files or using stdin",
		options: [
			{
				name: ["--nocolor", "-n"], 
				description: "No color - output will be without ANSI color codes." 
			},
			{
				name: ["--ignore", "-i"], 
				description: "Ignore particular families of errors so that they don’t cause a failed run. -–ignore behaves somewhat like noqa comments, except it applies globally."
			},
			{
				name: ["--verbose", "-v"], 
				description: "Verbosity, how detailed should the output be. This is stackable, so -vv is more verbose than -v. For the most verbose option try -vvvv or -vvvvv." 
			},
			{
				name: ["--exclude_rules", "-e"], 
				description: "Exclude specific rules. This could either be the allowlist, or the general set if there is no specific allowlist." 
			},
			{
				name: ["--rules", "-r"], 
				description: "Narrow the search to only specific rules." 
			},
			{
				name: ["--templater", "-t"], 
				description: "The templater to use (default=jinja)" 
			},
			{
				name: ["--dialect", "-d"], 
				description: "The dialect of SQL to lint",
				args: [
					{
						name: "dialect",
						description: "Name of dialect, eg. ANSI.",
						suggestions: [
							"ansi", "bigquery", "exasol", "hive", "mysql",
							"oracle", "postgres", "redshift", "snowflake", 
							"spark3", "sqllite", "teradata", "tsql"
						]
					}
				],
			},
			{
				name: ["--format", "-f"],
				description: "What format to return the lint result in (default=human)."
			},
			{
				name: ["--processes", "-p"],
				description: "The number of parallel processes to run. Positive numbers work as expected. Zero and negative numbers will work as number_of_cpus - number. e.g -1 means all cpus except one. 0 means all cpus."
			},
			{
				name: "--version",
				description: "Show the version and exit."
			},
			{
				name: "--disable-noqa",
				description: "Set this flag to ignore inline noqa comments."
			},
			{
				name: "--bench",
				description: "Set this flag to engage the benchmarking tool output."
			},
			{
				name: "--logger",
				description: "Choose to limit the logging to one of the loggers.",
				args: [
					{
						name: "logger",
						description: "Name of logger to limit to, eg. templater.",
						suggestions: ["templater", "lexer", "parser", "linter", "rules"]
					},
				],
			},
			{
				name: "--encoding",
				description: "Specify encoding to use when reading and writing files. Defaults to autodetect."
			},
			{
				name: "--ignore-local-config",
				description: "Ignore config files in default search path locations. This option allows the user to lint with the default config or can be used in conjunction with –config to only reference the custom config file."
			},
			{
				name: "--config",
				description: "Include additional config file. By default the config is generated from the standard configuration files described in the documentation. This argument allows you to specify an additional configuration file that overrides the standard configuration files. N.B. cfg format is required."
			},
			{
				name: "--write-output",
				description: "Optionally provide a filename to write the results to, mostly used in tandem with –format. NB: Setting an output file re-enables normal stdout logging."
			},
			{
				name: "--annotation-level",
				description: "When format is set to github-annotation or github-annotation-native, default annotation level (default=notice). failure and error are equivalent.",
				args: [
					{
						name: "annotation-level",
						description: "Level of annotation, eg. notice.",
						suggestions: ["notice", "warning", "failure", "error"]
					},
				],
			},
			{
				name: "--disregard-sqlfluffignores",
				description: "Perform the operation regardless of .sqlfluffignore configurations."
			},
			{
				name: "--disable-progress-bar",
				description: "Disables progress bars."
			},
			{
				name: "--nofail",
				description: "If set, the exit code will always be zero, regardless of violations found. This is potentially useful during rollout."
			}, 
			{ 
				name: ["--help", "-h"], 
				description: "Show help for sqlfluff" 
			}
		],
	},
	{
		name: "fix",
		description: "Fix SQL files.",
		options: [
			{
				name: ["--nocolor", "-n"], 
				description: "No color - output will be without ANSI color codes." 
			},
			{
				name: ["--ignore", "-i"], 
				description: "Ignore particular families of errors so that they don’t cause a failed run. -–ignore behaves somewhat like noqa comments, except it applies globally."
			},
			{
				name: ["--verbose", "-v"], 
				description: "Verbosity, how detailed should the output be. This is stackable, so -vv is more verbose than -v. For the most verbose option try -vvvv or -vvvvv." 
			},
			{
				name: ["--exclude_rules", "-e"], 
				description: "Exclude specific rules. This could either be the allowlist, or the general set if there is no specific allowlist." 
			},
			{
				name: ["--rules", "-r"], 
				description: "Narrow the search to only specific rules." 
			},
			{
				name: ["--templater", "-t"], 
				description: "The templater to use (default=jinja)" 
			},
			{
				name: ["--dialect", "-d"], 
				description: "The dialect of SQL to lint",
				args: [
					{
						name: "dialect",
						description: "Name of dialect, eg. ANSI.",
						suggestions: [
							"ansi", "bigquery", "exasol", "hive", "mysql",
							"oracle", "postgres", "redshift", "snowflake", 
							"spark3", "sqllite", "teradata", "tsql"
						]
					}
				],
			},
			{
				name: ["--format", "-f"],
				description: "What format to return the lint result in (default=human)."
			},
			{
				name: ["--processes", "-p"],
				description: "The number of parallel processes to run. Positive numbers work as expected. Zero and negative numbers will work as number_of_cpus - number. e.g -1 means all cpus except one. 0 means all cpus."
			},
			{
				name: ["--fixed-suffix", "-x"],
				description: "An optional suffix to add to fixed files."
			},
			{
				name: "--version",
				description: "Show the version and exit."
			},
			{
				name: "--disable-noqa",
				description: "Set this flag to ignore inline noqa comments."
			},
			{
				name: "--bench",
				description: "Set this flag to engage the benchmarking tool output."
			},
			{
				name: "--logger",
				description: "Choose to limit the logging to one of the loggers.",
				args: [
					{
						name: "logger",
						description: "Name of logger to limit to, eg. templater.",
						suggestions: ["templater", "lexer", "parser", "linter", "rules"]
					},
				],
			},
			{
				name: "--encoding",
				description: "Specify encoding to use when reading and writing files. Defaults to autodetect."
			},
			{
				name: "--ignore-local-config",
				description: "Ignore config files in default search path locations. This option allows the user to lint with the default config or can be used in conjunction with –config to only reference the custom config file."
			},
			{
				name: "--config",
				description: "Include additional config file. By default the config is generated from the standard configuration files described in the documentation. This argument allows you to specify an additional configuration file that overrides the standard configuration files. N.B. cfg format is required."
			},
			{
				name: "--write-output",
				description: "Optionally provide a filename to write the results to, mostly used in tandem with –format. NB: Setting an output file re-enables normal stdout logging."
			},
			{
				name: "--disable-progress-bar",
				description: "Disables progress bars."
			},
			{
				name: "--FIX-EVEN-UNPARSABLE",
				description: "Enables fixing of files that have templating or parse errors."
			},
			{
				name: "--show-lint-violations",
				description: "Show lint violations."
			},
		]
	},
	{
		name: "parse",
		description: "Parse SQL files and just spit out the result.",
		options: [
			{
				name: ["--nocolor", "-n"], 
				description: "No color - output will be without ANSI color codes." 
			},
			{
				name: ["--ignore", "-i"], 
				description: "Ignore particular families of errors so that they don’t cause a failed run. -–ignore behaves somewhat like noqa comments, except it applies globally."
			},
			{
				name: ["--verbose", "-v"], 
				description: "Verbosity, how detailed should the output be. This is stackable, so -vv is more verbose than -v. For the most verbose option try -vvvv or -vvvvv." 
			},
			{
				name: ["--exclude_rules", "-e"], 
				description: "Exclude specific rules. This could either be the allowlist, or the general set if there is no specific allowlist." 
			},
			{
				name: ["--rules", "-r"], 
				description: "Narrow the search to only specific rules." 
			},
			{
				name: ["--templater", "-t"], 
				description: "The templater to use (default=jinja)" 
			},
			{
				name: ["--dialect", "-d"], 
				description: "The dialect of SQL to lint",
				args: [
					{
						name: "dialect",
						description: "Name of dialect, eg. ANSI.",
						suggestions: [
							"ansi", "bigquery", "exasol", "hive", "mysql",
							"oracle", "postgres", "redshift", "snowflake", 
							"spark3", "sqllite", "teradata", "tsql"
						]
					}
				],
			},
			{
				name: ["--code-only", "-c"],
				description: "Output only the code elements of the parse tree."
			},
			{
				name: ["--include-meta", "-m"],
				description: "Include meta segments (indents, dedents and placeholders) in the output. This only applies when outputting json or yaml."
			},
			{
				name: ["--format", "-f"],
				description: "What format to return the lint result in (default=human)."
			},
			{
				name: "--version",
				description: "Show the version and exit."
			},
			{
				name: "--disable-noqa",
				description: "Set this flag to ignore inline noqa comments."
			},
			{
				name: "--bench",
				description: "Set this flag to engage the benchmarking tool output."
			},
			{
				name: "--recurse",
				description: "The depth to recursively parse to (0 for unlimited)."
			},
			{
				name: "--logger",
				description: "Choose to limit the logging to one of the loggers.",
				args: [
					{
						name: "logger",
						description: "Name of logger to limit to, eg. templater.",
						suggestions: ["templater", "lexer", "parser", "linter", "rules"]
					},
				],
			},
			{
				name: "--encoding",
				description: "Specify encoding to use when reading and writing files. Defaults to autodetect."
			},
			{
				name: "--ignore-local-config",
				description: "Ignore config files in default search path locations. This option allows the user to lint with the default config or can be used in conjunction with –config to only reference the custom config file."
			},
			{
				name: "--config",
				description: "Include additional config file. By default the config is generated from the standard configuration files described in the documentation. This argument allows you to specify an additional configuration file that overrides the standard configuration files. N.B. cfg format is required."
			},
			{
				name: "--write-output",
				description: "Optionally provide a filename to write the results to, mostly used in tandem with –format. NB: Setting an output file re-enables normal stdout logging."
			},
			{
				name: "--profiler",
				description: "Set this flag to engage the python profiler."
			},
			{
				name: "--nofail",
				description: "If set, the exit code will always be zero, regardless of violations found. This is potentially useful during rollout."
			},
		]
	},
	{
		name: "dialects",
		description: "Show the current dialects available.",
		options: [
			{
				name: ["--nocolor", "-n"],
				description: "No color - output will be without ANSI color codes."
			},
			{
				name: ["--verbose", "-v"], 
				description: "Verbosity, how detailed should the output be. This is stackable, so -vv is more verbose than -v. For the most verbose option try -vvvv or -vvvvv." 
			},
			{
				name: "--version",
				description: "Show the version and exit."
			},
		],
	},
	{
		name: "version",
		description: "Show the version of sqlfluff.",
		options: [
			{
				name: ["--nocolor", "-n"],
				description: "No color - output will be without ANSI color codes."
			},
			{
				name: ["--verbose", "-v"], 
				description: "Verbosity, how detailed should the output be. This is stackable, so -vv is more verbose than -v. For the most verbose option try -vvvv or -vvvvv." 
			},
			{
				name: "--version",
				description: "Show the version and exit."
			},
		],
	},
	{
		name: "rules",
		description: "Show the current rules in use.",
		options: [
			{
				name: ["--nocolor", "-n"],
				description: "No color - output will be without ANSI color codes."
			},
			{
				name: ["--verbose", "-v"], 
				description: "Verbosity, how detailed should the output be. This is stackable, so -vv is more verbose than -v. For the most verbose option try -vvvv or -vvvvv." 
			},
			{
				name: "--version",
				description: "Show the version and exit."
			},
		],
	},
	],
};
export default completionSpec;
