import { filepaths } from "@fig/autocomplete-generators";

const dbFilepath = filepaths({
  extensions: ["sql", "sqlite", "sqlite3", "db"],
});

const completionSpec: Fig.Spec = {
  name: "sqlite3",
  description: "A command line interface for SQLite version 3",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  args: {
    name: "FILENAME",
    generators: dbFilepath,
  },
  options: [
    {
      name: "-append",
      description: "Append the database to the end of the file",
    },
    {
      name: "-ascii",
      description: "Set output mode to 'ascii'",
    },
    {
      name: "-bail",
      description: "Stop after hitting an error",
    },
    {
      name: "-batch",
      description: "Force batch I/O",
    },
    {
      name: "-column",
      description: "Set output mode to 'column'",
    },
    {
      name: "-cmd",
      description: 'Run "COMMAND" before reading stdin',
      args: {
        name: "COMMAND",
      },
    },
    {
      name: "-csv",
      description: "Set output mode to 'csv'",
    },
    {
      name: "-echo",
      description: "Print commands before execution",
    },
    {
      name: "-init",
      description: "Read/process named file",
      args: {
        name: "FILENAME",
        generators: dbFilepath,
      },
    },
    {
      name: "-header",
      description: "Turn headers on",
    },
    {
      name: "-noheader",
      description: "Turn headers off",
    },
    {
      name: "-help",
      description: "Show help message",
    },
    {
      name: "-html",
      description: "Set output mode to HTML",
    },
    {
      name: "-interactive",
      description: "Force interactive I/O",
    },
    {
      name: "-line",
      description: "Set output mode to 'line'",
    },
    {
      name: "-list",
      description: "Set output mode to 'list'",
    },
    {
      name: "-lookaside",
      description: "Use N entries of SZ bytes for lookaside memory",
      args: [
        {
          name: "SIZE",
        },
        {
          name: "N",
        },
      ],
    },
    {
      name: "-memtrace",
      description: "Trace all memory allocations and deallocations",
    },
    {
      name: "-mmap",
      description: "Default mmap size set to N",
      args: {
        name: "N",
      },
    },
    {
      name: "-newline",
      description: "Set output row separator",
      args: {
        name: "SEP",
        default: "'\\n'",
      },
    },
    {
      name: "-nofollow",
      description: "Refuse to open symbolic links to database files",
    },
    {
      name: "-nullvalue",
      description: "Set text string for NULL values",
      args: {
        name: "TEXT",
        default: "''",
      },
    },
    {
      name: "-pagecache",
      description: "Use N slots of SZ bytes each for page cache memory",
      args: [
        {
          name: "SIZE",
        },
        {
          name: "N",
        },
      ],
    },
    {
      name: "-quote",
      description: "Set output mode to 'quote'",
    },
    {
      name: "-readonly",
      description: "Open the database read-only",
    },
    {
      name: "-separator",
      description: "Set output column separator",
      args: {
        name: "SEP",
        default: "'|'",
      },
    },
    {
      name: "-stats",
      description: "Print memory stats before each finalize",
    },
    {
      name: "-version",
      description: "Show SQLite version",
    },
    {
      name: "-vfs",
      description: "Use NAME as the default VFS",
      args: {
        name: "NAME",
      },
    },
  ],
};

export default completionSpec;
