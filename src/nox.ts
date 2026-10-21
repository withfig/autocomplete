const backends = [
  "conda",
  "mamba",
  "micromamba",
  "rattler",
  "virtualenv",
  "venv",
  "uv",
  "none",
];

const completionSpec: Fig.Spec = {
  name: "nox",
  description: "Python automation toolkit",
  args: {
    name: "sessions",
    description:
      "Sessions to run (default: all); arguments after -- are passed through to the sessions",
    isVariadic: true,
    isOptional: true,
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Show this help message and exit",
    },
    {
      name: "--version",
      description: "Show the Nox version and exit",
    },
    {
      name: "--script-mode",
      description: "Script mode",
      args: {
        name: "MODE",
        suggestions: ["none", "fresh", "reuse"],
      },
    },
    {
      name: "--script-venv-backend",
      description: "Virtual environment backend used in script mode",
      args: {
        name: "BACKEND",
        suggestions: backends,
      },
    },
    {
      name: ["-f", "--noxfile"],
      description: "Location of the Python file containing Nox sessions",
      args: {
        name: "NOXFILE",
        template: "filepaths",
      },
    },
    {
      name: ["-k", "--keywords"],
      description: "Only run sessions that match the given expression",
      args: {
        name: "KEYWORDS",
      },
    },
    {
      name: ["-s", "-e", "--sessions", "--session"],
      description:
        "Which sessions to run. By default, all sessions run (env: NOXSESSION)",
      args: {
        name: "SESSIONS",
        isVariadic: true,
      },
    },
    {
      name: ["-t", "--tags"],
      description: "Only run sessions with the given tags",
      args: {
        name: "TAGS",
        isVariadic: true,
      },
    },
    {
      name: ["-l", "--list-sessions", "--list"],
      description: "List all available sessions and exit",
    },
    {
      name: "--usage",
      description:
        "Print the full docstring of a given session and exit. Raises if there is no docstring",
      args: {
        name: "SESSION",
      },
    },
    {
      name: "--json",
      description: "JSON output formatting. Requires list-sessions currently",
    },
    {
      name: "--download-python",
      description:
        "When nox should download Python standalone builds to run the sessions (env: NOX_DOWNLOAD_PYTHON)",
      args: {
        name: "WHEN",
        suggestions: ["auto", "never", "always"],
      },
    },
    {
      name: ["-p", "--pythons", "--python"],
      description:
        "Only run sessions that use the given Python interpreter versions (env: NOXPYTHON)",
      args: {
        name: "PYTHONS",
        isVariadic: true,
      },
    },
    {
      name: ["--extra-pythons", "--extra-python"],
      description:
        "Additionally, run sessions using the given Python interpreter versions (env: NOXEXTRAPYTHON)",
      args: {
        name: "EXTRA_PYTHONS",
        isVariadic: true,
      },
    },
    {
      name: ["-P", "--force-pythons", "--force-python"],
      description:
        "Run sessions with the given interpreters instead of those listed in the Noxfile (env: NOXFORCEPYTHON)",
      args: {
        name: "FORCE_PYTHONS",
        isVariadic: true,
      },
    },
    {
      name: ["-db", "--default-venv-backend"],
      description: "Virtual environment backend to use by default",
      args: {
        name: "BACKEND",
        suggestions: backends,
      },
    },
    {
      name: "--envdir",
      description: "Directory where Nox stores virtualenvs (default: .nox)",
      args: {
        name: "ENVDIR",
        template: "folders",
      },
    },
    {
      name: ["-fb", "--force-venv-backend"],
      description:
        "Virtual environment backend to force-use for all sessions in this run",
      args: {
        name: "BACKEND",
        suggestions: backends,
      },
    },
    {
      name: ["-r", "--reuse-existing-virtualenvs"],
      description: "Alias for --reuse-venv=yes|no",
    },
    {
      name: ["-N", "--no-reuse-existing-virtualenvs"],
      description:
        "Disables --reuse-existing-virtualenvs if it is enabled in the Noxfile",
    },
    {
      name: "--reuse-venv",
      description: "Controls existing virtualenvs recreation",
      args: {
        name: "MODE",
        suggestions: ["no", "yes", "never", "always"],
      },
    },
    {
      name: "--no-venv",
      description:
        "Run the selected sessions directly on the current interpreter, without creating a venv. Alias for --force-venv-backend none",
    },
    {
      name: "-R",
      description:
        "Reuse existing virtualenvs and skip package re-installation. Alias for --reuse-existing-virtualenvs --no-install",
    },
    {
      name: "--allow-parallel",
      description:
        "Allow every session to run concurrently under --parallel unless it sets allow_parallel itself",
    },
    {
      name: "--no-allow-parallel",
      description: "Disables --allow-parallel if it is enabled in the Noxfile",
    },
    {
      name: "--error-on-external-run",
      description:
        "Error if run() is used to execute a program that is not installed in a session's virtualenv",
    },
    {
      name: "--no-error-on-external-run",
      description:
        "Disables --error-on-external-run if it is enabled in the Noxfile",
    },
    {
      name: "--error-on-missing-interpreters",
      description:
        "Error instead of skipping sessions if an interpreter cannot be located",
    },
    {
      name: "--no-error-on-missing-interpreters",
      description:
        "Disables --error-on-missing-interpreters if it is enabled in the Noxfile",
    },
    {
      name: ["-j", "--parallel"],
      description:
        "Run independent parallel-capable sessions in parallel; pass a positive integer or 'auto' (one per CPU)",
      args: {
        name: "N",
      },
    },
    {
      name: ["-x", "--stop-on-first-error"],
      description: "Stop after the first error",
    },
    {
      name: "--no-stop-on-first-error",
      description:
        "Disables --stop-on-first-error if it is enabled in the Noxfile",
    },
    {
      name: "--no-dependencies",
      description:
        "Run only the explicitly selected sessions, skipping any sessions they require",
    },
    {
      name: "--install-only",
      description: "Skip session.run invocations in the Noxfile",
    },
    {
      name: "--no-install",
      description:
        "Skip invocations of session methods for installing packages when a virtualenv is being reused",
    },
    {
      name: "--non-interactive",
      description:
        "Force session.interactive to always be False, even in interactive sessions",
    },
    {
      name: "--report",
      description: "Output a report of all sessions to the given filename",
      args: {
        name: "REPORT",
        template: "filepaths",
      },
    },
    {
      name: ["-v", "--verbose"],
      description:
        "Log the output of all commands run including commands marked silent",
    },
    {
      name: "--no-verbose",
      description: "Disables --verbose if it is enabled in the Noxfile",
    },
    {
      name: ["-ts", "--add-timestamp"],
      description: "Add a timestamp to logged output",
    },
    {
      name: ["--nocolor", "--no-color"],
      description: "Disable all color output (env: NO_COLOR)",
    },
    {
      name: ["--forcecolor", "--force-color"],
      description:
        "Force color output, even if stdout is not an interactive terminal",
    },
  ],
};

export default completionSpec;
