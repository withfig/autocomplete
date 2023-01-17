const completionSpec: Fig.Spec = {
  name: "pg_dump",
  description: "Dumps a database as a text file or to other formats",
  options: [
    {
      name: ["--help", "-?"],
      description: "Show help for pg_dump",
    },
    {
      name: ["--file", "-f"],
      description: "Output file or directory name",
      args: { name: "filename" },
    },
    {
      name: ["--format", "-F"],
      description: "Output file format",
      args: {
        name: "format",
        suggestions: [
          { name: "c", displayName: "custom" },
          { name: "d", displayName: "directory" },
          { name: "t", displayName: "tar" },
          { name: "p", displayName: "plain text" },
        ],
      },
    },
    {
      name: ["--jobs", "-j"],
      description: "Number of parallel job to dump",
      args: { name: "num" },
    },
    {
      name: ["--verbose", "-v"],
      description: "Verbose mode",
    },
    {
      name: ["--version", "-V"],
      description: "Output version information",
    },
    {
      name: ["--compress", "-Z"],
      description: "Compression level for compressed formats",
      args: {
        name: "level",
        suggestions: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      },
    },
    {
      name: "--lock-wait-timeout",
      description: "Fail after waiting <timeout> for a table lock",
      args: { name: "timeout" },
    },
    {
      name: "--no-sync",
      description: "Do not wait for changes to be written safely to disk",
    },
    {
      name: ["--data-only", "-a"],
      description: "Dump only the data, not the schema",
    },
    {
      name: ["--blobs", "-b"],
      description: "Include large objects in dump",
    },
    {
      name: ["--no-blobs", "-B"],
      description: "Exclude large objects in dump",
    },
    {
      name: ["--clean", "-c"],
      description: "Clean (drop) database objects before recreating",
    },
    {
      name: ["--create", "-C"],
      description: "Include commands to create database in dump",
    },
    {
      name: ["--extension", "-e"],
      description: "Dump the specified extension(s) only",
      args: { name: "pattern" },
      isRepeatable: true,
    },
    {
      name: ["--encoding", "-E"],
      description: "Dump the data in encoding <encoding>",
      args: { name: "encoding" },
    },
    {
      name: ["--schema", "-n"],
      description: "Dump the specified schema(s) only",
      args: { name: "pattern" },
      isRepeatable: true,
    },
    {
      name: ["--exclude-schema", "-N"],
      description: "Do NOT dump the specified schema(s)",
      args: { name: "pattern" },
      isRepeatable: true,
    },
    {
      name: ["--no-owner", "-O"],
      description: "Skip restoration of object ownership in plain-text format",
    },
    {
      name: ["--schema-only", "-s"],
      description: "Dump only the schema, no data",
    },
    {
      name: ["--superuser", "-S"],
      description: "Superuser user name to use in plain-text format",
      args: { name: "name" },
    },
    {
      name: ["--table", "-t"],
      description: "Dump the specified table(s) only",
      args: { name: "table" },
      isRepeatable: true,
    },
    {
      name: ["--exclude-table", "-T"],
      description: "Do NOT dump the specified table(s)",
      args: { name: "table" },
      isRepeatable: true,
    },
    {
      name: ["--no-privileges", "-x", "--no-acl"],
      description: "Do not dump privileges (grant/revoke)",
    },
    {
      name: "--binary-upgrade",
      description: "For use by upgrade utilities only",
    },
    {
      name: ["--column-inserts", "--attribute-inserts"],
      description: "Dump data as INSERT commands with column names",
    },
    {
      name: "--disable-dollar-quoting",
      description: "Disable dollar quoting, use SQL standard quoting",
    },
    {
      name: "--disable-triggers",
      description: "Disable triggers during data-only restore",
    },
    {
      name: "--enable-row-security",
      description: "Enable row security (dump only content user has access to)",
    },
    {
      name: "--exclude-table-data",
      description: "Do NOT dump data for the specified table(s)",
      args: { name: "table" },
      isRepeatable: true,
    },
    {
      name: "--extra-float-digits",
      description: "Override default setting for extra_float_digits",
      args: { name: "num" },
    },
    {
      name: "--if-exists",
      description: "Use IF EXISTS when dropping objects",
    },
    {
      name: "--include-foreign-data",
      description:
        "Include data of foreign tables on foreign servers matching PATTERN",
      args: { name: "pattern" },
    },
    {
      name: "--inserts",
      description: "Dump data as INSERT commands, rather than COPY",
    },
    {
      name: "--load-via-partition-root",
      description: "Load partitions via the root table",
    },
    {
      name: "--no-comments",
      description: "Do not dump comments",
    },
    {
      name: "--no-publications",
      description: "Do not dump publications",
    },
    {
      name: "--no-security-labels",
      description: "Do not dump security label assignments",
    },
    {
      name: "--no-subscriptions",
      description: "Do not dump subscriptions",
    },
    {
      name: "--no-synchronized-snapshots",
      description: "Do not use synchronized snapshots in parallel jobs",
    },
    {
      name: "--no-tablespaces",
      description: "Do not dump tablespace assignments",
    },
    {
      name: "--no-toast-compression",
      description: "Do not dump TOAST compression methods",
    },
    {
      name: "--no-unlogged-table-data",
      description: "Do not dump unlogged table data",
    },
    {
      name: "--on-conflict-do-nothing",
      description: "Add ON CONFLICT DO NOTHING to INSERT commands",
    },
    {
      name: "--quote-all-identifiers",
      description: "Quote all identifiers, even if not key words",
    },
    {
      name: "--rows-per-insert",
      description: "Number of rows per INSERT; implies --inserts",
      args: { name: "numbers" },
    },
    {
      name: "--section",
      description: "Dump named section (pre-data, data, or post-data)",
      args: { name: "section" },
    },
    {
      name: "--serializable-deferrable",
      description: "Wait until the dump can run without anomalies",
    },
    {
      name: "--snapshot",
      description: "Use given snapshot for the dump",
      args: { name: "snapshot" },
    },
    {
      name: "--strict-names",
      description:
        "Require table and/or schema include patterns to match at least one entity each",
    },
    {
      name: "--use-set-session-authorization",
      description:
        "Use SET SESSION AUTHORIZATION commands instead of ALTER OWNER commands to set ownership",
    },
    {
      name: ["--dbname", "-d"],
      description: "Database to dump",
      args: { name: "database" },
    },
    {
      name: ["--host", "-h"],
      description: "Database server host or socket directory",
      args: { name: "host" },
    },
    {
      name: ["--port", "-p"],
      description: "Database server port number",
      args: { name: "number" },
    },
    {
      name: ["--username", "-U"],
      description: "Connect as specified database user",
      args: { name: "name" },
    },
    {
      name: ["--no-password", "-w"],
      description: "Never prompt for password",
    },
    {
      name: ["--password", "-W"],
      description: "Force password prompt (should happen automatically)",
    },
    {
      name: "--role",
      description: "Do SET ROLE before dump",
      args: { name: "name" },
    },
  ],
  args: {
    name: "dbname",
    description: "Name of the database to dump",
  },
};
export default completionSpec;
