import { valueList } from "@fig/autocomplete-generators";

const tables = [
  "account_policy_data",
  "acpi_tables",
  "ad_config",
  "alf",
  "alf_exceptions",
  "alf_explicit_auths",
  "app_schemes",
  "apps",
  "arp_cache",
  "asl",
  "atom_packages",
  "augeas",
  "authorization_mechanisms",
  "authorizations",
  "authorized_keys",
  "azure_instance_metadata",
  "azure_instance_tags",
  "battery",
  "block_devices",
  "browser_plugins",
  "carbon_black_info",
  "carves",
  "certificates",
  "chrome_extension_content_scripts",
  "chrome_extensions",
  "cpu_time",
  "crashes",
  "crontab",
  "cups_destinations",
  "cups_jobs",
  "curl",
  "curl_certificate",
  "device_file",
  "device_firmware",
  "device_hash",
  "device_partitions",
  "disk_encryption",
  "disk_events",
  "dns_resolvers",
  "docker_container_envs",
  "docker_container_fs_changes",
  "docker_container_labels",
  "docker_container_mounts",
  "docker_container_networks",
  "docker_container_ports",
  "docker_container_processes",
  "docker_container_stats",
  "docker_containers",
  "docker_image_history",
  "docker_image_labels",
  "docker_image_layers",
  "docker_images",
  "docker_info",
  "docker_network_labels",
  "docker_networks",
  "docker_version",
  "docker_volume_labels",
  "docker_volumes",
  "ec2_instance_metadata",
  "ec2_instance_tags",
  "es_process_events",
  "es_process_file_events",
  "etc_hosts",
  "etc_protocols",
  "etc_services",
  "event_taps",
  "extended_attributes",
  "fan_speed_sensors",
  "file",
  "file_events",
  "firefox_addons",
  "gatekeeper",
  "gatekeeper_approved_apps",
  "groups",
  "hardware_events",
  "hash",
  "homebrew_packages",
  "ibridge_info",
  "interface_addresses",
  "interface_details",
  "interface_ipv6",
  "iokit_devicetree",
  "iokit_registry",
  "kernel_extensions",
  "kernel_info",
  "kernel_panics",
  "keychain_acls",
  "keychain_items",
  "known_hosts",
  "last",
  "launchd",
  "launchd_overrides",
  "listening_ports",
  "load_average",
  "location_services",
  "logged_in_users",
  "magic",
  "managed_policies",
  "mdfind",
  "mdls",
  "memory_array_mapped_addresses",
  "memory_arrays",
  "memory_device_mapped_addresses",
  "memory_devices",
  "memory_error_info",
  "mounts",
  "nfs_shares",
  "npm_packages",
  "nvram",
  "oem_strings",
  "os_version",
  "osquery_events",
  "osquery_extensions",
  "osquery_flags",
  "osquery_info",
  "osquery_packs",
  "osquery_registry",
  "osquery_schedule",
  "package_bom",
  "package_install_history",
  "package_receipts",
  "password_policy",
  "pci_devices",
  "platform_info",
  "plist",
  "power_sensors",
  "preferences",
  "process_envs",
  "process_events",
  "process_memory_map",
  "process_open_files",
  "process_open_sockets",
  "processes",
  "prometheus_metrics",
  "python_packages",
  "quicklook_cache",
  "routes",
  "running_apps",
  "safari_extensions",
  "sandboxes",
  "screenlock",
  "shared_folders",
  "sharing_preferences",
  "shell_history",
  "signature",
  "sip_config",
  "smbios_tables",
  "smc_keys",
  "socket_events",
  "ssh_configs",
  "startup_items",
  "sudoers",
  "suid_bin",
  "system_controls",
  "system_extensions",
  "system_info",
  "temperature_sensors",
  "time",
  "time_machine_backups",
  "time_machine_destinations",
  "ulimit_info",
  "uptime",
  "usb_devices",
  "user_events",
  "user_groups",
  "user_interaction_events",
  "user_ssh_keys",
  "users",
  "virtual_memory_info",
  "wifi_networks",
  "wifi_status",
  "wifi_survey",
  "xprotect_entries",
  "xprotect_meta",
  "xprotect_reports",
  "yara",
  "yara_events",
  "ycloud_instance_metadata",
];

const completionSpec: Fig.Spec = {
  name: "osqueryi",
  description: "Your OS as a high-performance relational database",
  options: [
    {
      name: "--flagfile",
      args: { name: "path", template: "filepaths" },
      description: "Line-delimited file of additional flags",
    },
    { name: "--D", description: "Run as a daemon process" },
    { name: "--S", description: "Run as a shell process" },
    {
      name: "--alarm_timeout",
      args: { name: "value" },
      description: "Seconds to allow for shutdown. Minimum is 10",
    },
    {
      name: "--carver_block_size",
      args: { name: "value" },
      description:
        "Size of blocks used for POSTing data back to remote endpoints",
    },
    {
      name: "--carver_compression",
      description:
        "Compress archives using zstd prior to upload (default false)",
    },
    {
      name: "--carver_continue_endpoint",
      args: { name: "value" },
      description:
        "TLS/HTTPS endpoint that receives carved content after session creation",
    },
    {
      name: "--carver_disable_function",
      description: "Disable the osquery file carver function (default true)",
    },
    {
      name: "--carver_expiry",
      args: { name: "value" },
      description:
        "Seconds to store successful carve result metadata (in carves table)",
    },
    {
      name: "--carver_start_endpoint",
      args: { name: "value" },
      description: "TLS/HTTPS init endpoint for forensic carver",
    },
    {
      name: "--config_accelerated_refresh",
      args: { name: "value" },
      description: "Interval to wait if reading a configuration fails",
    },
    {
      name: "--config_check",
      description: "Check the format of an osquery config and exit",
    },
    {
      name: "--config_dump",
      description: "Dump the contents of the configuration, then exit",
    },
    {
      name: "--config_enable_backup",
      description: "Backup config and use it when refresh fails",
    },
    {
      name: "--config_path",
      args: { name: "value", template: "filepaths" },
      description: "Path to JSON config file",
    },
    {
      name: "--config_plugin",
      args: { name: "value" },
      description: "Config plugin name",
    },
    {
      name: "--config_refresh",
      args: { name: "value" },
      description: "Optional interval in seconds to re-read configuration",
    },
    {
      name: "--config_tls_endpoint",
      args: { name: "value" },
      description: "TLS/HTTPS endpoint for config retrieval",
    },
    {
      name: "--config_tls_max_attempts",
      args: { name: "value" },
      description: "Number of attempts to retry a TLS config request",
    },
    { name: "--daemonize", description: "Attempt to daemonize (POSIX only)" },
    {
      name: "--database_dump",
      description: "Dump the contents of the backing store",
    },
    {
      name: "--database_path",
      args: { name: "value", template: "filepaths" },
      description: "If using a disk-based backing store, specify a path",
    },
    {
      name: "--disable_carver",
      description: "Disable the osquery file carver (default true)",
    },
    {
      name: "--disable_enrollment",
      description:
        "Disable enrollment functions on related config/logger plugins",
    },
    { name: "--disable_extensions", description: "Disable extension API" },
    {
      name: "--disable_reenrollment",
      description:
        "Disable re-enrollment attempts if related plugins return invalid",
    },
    {
      name: "--disable_tables",
      args: { name: "value", generators: valueList({ values: tables }) },
      description: "Comma-delimited list of table names to be disabled",
    },
    {
      name: "--disable_watchdog",
      description: "Disable userland watchdog process",
    },
    {
      name: "--enable_extensions_watchdog",
      description: "Enable userland watchdog for extensions processes",
    },
    {
      name: "--enable_tables",
      args: { name: "value", generators: valueList({ values: tables }) },
      description: "Comma-delimited list of table names to be enabled",
    },
    {
      name: "--enroll_always",
      description: "On startup, send a new enrollment request",
    },
    {
      name: "--enroll_secret_env",
      args: { name: "value" },
      description:
        "Name of environment variable holding enrollment-auth secret",
    },
    {
      name: "--enroll_secret_path",
      args: { name: "value", template: "filepaths" },
      description: "Path to an optional client enrollment-auth secret",
    },
    {
      name: "--enroll_tls_endpoint",
      args: { name: "value" },
      description: "TLS/HTTPS endpoint for client enrollment",
    },
    {
      name: "--extensions_autoload",
      args: { name: "value", template: "filepaths" },
      description: "Optional path to a list of autoloaded & managed extensions",
    },
    {
      name: "--extensions_interval",
      args: { name: "value" },
      description: "Seconds delay between connectivity checks",
    },
    {
      name: "--extensions_require",
      args: { name: "value" },
      description: "Comma-separated list of required extensions",
    },
    {
      name: "--extensions_socket",
      args: { name: "value", template: "filepaths" },
      description: "Path to the extensions UNIX domain socket",
    },
    {
      name: "--extensions_timeout",
      args: { name: "value" },
      description: "Seconds to wait for autoloaded extensions",
    },
    {
      name: "--force",
      description: "Force osqueryd to kill previously-running daemons",
    },
    { name: "--install", description: "Install osqueryd as a service" },
    {
      name: "--logger_mode",
      args: { name: "value" },
      description: "Octal mode for log files (default '0640')",
    },
    {
      name: "--logger_plugin",
      args: { name: "value" },
      description: "Logger plugin name",
    },
    { name: "--logger_stderr", description: "Write status logs to stderr" },
    {
      name: "--logtostderr",
      description: "Log messages to stderr in addition to the logger plugin(s)",
    },
    {
      name: "--pidfile",
      args: { name: "value", template: "filepaths" },
      description: "Path to the daemon pidfile mutex",
    },
    {
      name: "--proxy_hostname",
      args: { name: "value" },
      description: "Optional HTTP proxy hostname",
    },
    {
      name: "--stderrthreshold",
      args: { name: "value" },
      description: "Stderr log level threshold",
    },
    {
      name: "--tls_client_cert",
      args: { name: "value", template: "filepaths" },
      description: "Optional path to a TLS client-auth PEM certificate",
    },
    {
      name: "--tls_client_key",
      args: { name: "value", template: "filepaths" },
      description: "Optional path to a TLS client-auth PEM private key",
    },
    {
      name: "--tls_enroll_max_attempts",
      args: { name: "value" },
      description:
        "The total number of attempts that will be made to the enroll endpoint if a request fails, 0 for infinite",
    },
    {
      name: "--tls_enroll_max_interval",
      args: { name: "value" },
      description: "Maximum wait time in seconds between enroll retry attempts",
    },
    {
      name: "--tls_hostname",
      args: { name: "value" },
      description: "TLS/HTTPS hostname for Config, Logger, and Enroll plugins",
    },
    {
      name: "--tls_server_certs",
      args: { name: "value", template: "filepaths" },
      description: "Optional path to a TLS server PEM certificate(s) bundle",
    },
    { name: "--tls_session_reuse", description: "Reuse TLS session sockets" },
    {
      name: "--tls_session_timeout",
      args: { name: "value" },
      description: "TLS session keep alive timeout in seconds",
    },
    { name: "--uninstall", description: "Uninstall osqueryd as a service" },
    {
      name: "--watchdog_delay",
      args: { name: "value" },
      description: "Initial delay in seconds before watchdog starts",
    },
    {
      name: "--watchdog_forced_shutdown_delay",
      args: { name: "value" },
      description:
        "Seconds that the watchdog will wait to do a forced shutdown after a graceful shutdown request, when a resource limit is hit",
    },
    {
      name: "--watchdog_latency_limit",
      args: { name: "value" },
      description: "Override watchdog profile CPU utilization latency limit",
    },
    {
      name: "--watchdog_level",
      args: {
        name: "value",
        suggestions: [
          { name: "0", description: "Normal" },
          { name: "1", description: "Restrictive" },
          { name: "-1", description: "Off" },
        ],
      },
      description: "Performance limit level",
    },
    {
      name: "--watchdog_memory_limit",
      args: { name: "value" },
      description:
        "Override watchdog profile memory limit (e.g., 300, for 300MB)",
    },
    {
      name: "--watchdog_utilization_limit",
      args: { name: "value" },
      description: "Override watchdog profile CPU utilization limit",
    },
    {
      name: "--audit_allow_config",
      description: "Allow the audit publisher to change auditing configuration",
    },
    {
      name: "--audit_allow_fim_events",
      description:
        "Allow the audit publisher to install filesystem-related rules",
    },
    {
      name: "--audit_allow_process_events",
      description: "Allow the audit publisher to install process-related rules",
    },
    {
      name: "--audit_allow_sockets",
      description: "Allow the audit publisher to install socket-related rules",
    },
    {
      name: "--audit_allow_user_events",
      description: "Allow the audit publisher to install user-related rules",
    },
    {
      name: "--augeas_lenses",
      args: { name: "value" },
      description: "Directory that contains augeas lenses files",
    },
    {
      name: "--aws_access_key_id",
      args: { name: "value" },
      description: "AWS access key ID",
    },
    { name: "--aws_debug", description: "Enable AWS SDK debug logging" },
    {
      name: "--aws_enable_proxy",
      description:
        "Enable proxying of HTTP/HTTPS requests in AWS client config",
    },
    {
      name: "--aws_firehose_endpoint",
      args: { name: "value" },
      description: "Custom Firehose endpoint",
    },
    {
      name: "--aws_firehose_period",
      args: { name: "value" },
      description: "Seconds between flushing logs to Firehose (default 10)",
    },
    {
      name: "--aws_firehose_stream",
      args: { name: "value" },
      description: "Name of Firehose stream for logging",
    },
    {
      name: "--aws_kinesis_disable_log_status",
      description: "Disable status logs processing",
    },
    {
      name: "--aws_kinesis_endpoint",
      args: { name: "value" },
      description: "Custom Kinesis endpoint",
    },
    {
      name: "--aws_kinesis_period",
      args: { name: "value" },
      description: "Seconds between flushing logs to Kinesis (default 10)",
    },
    {
      name: "--aws_kinesis_random_partition_key",
      description: "Enable random kinesis partition keys",
    },
    {
      name: "--aws_kinesis_stream",
      args: { name: "value" },
      description: "Name of Kinesis stream for logging",
    },
    {
      name: "--aws_profile_name",
      args: { name: "value" },
      description: "AWS profile for authentication and region configuration",
    },
    {
      name: "--aws_proxy_host",
      args: { name: "value" },
      description: "Proxy host for use in AWS client config",
    },
    {
      name: "--aws_proxy_password",
      args: { name: "value" },
      description: "Proxy password for use in AWS client config",
    },
    {
      name: "--aws_proxy_port",
      args: { name: "value" },
      description: "Proxy port for use in AWS client config",
    },
    {
      name: "--aws_proxy_scheme",
      args: { name: "value" },
      description:
        "Proxy HTTP scheme for use in AWS client config (http or https, default https)",
    },
    {
      name: "--aws_proxy_username",
      args: { name: "value" },
      description: "Proxy username for use in AWS client config",
    },
    {
      name: "--aws_region",
      args: { name: "value" },
      description: "AWS region",
    },
    {
      name: "--aws_secret_access_key",
      args: { name: "value" },
      description: "AWS secret access key",
    },
    {
      name: "--aws_session_token",
      args: { name: "value" },
      description: "AWS STS session token",
    },
    {
      name: "--aws_sts_arn_role",
      args: { name: "value" },
      description: "AWS STS ARN role",
    },
    {
      name: "--aws_sts_region",
      args: { name: "value" },
      description: "AWS STS region",
    },
    {
      name: "--aws_sts_session_name",
      args: { name: "value" },
      description: "AWS STS session name",
    },
    {
      name: "--aws_sts_timeout",
      args: { name: "value" },
      description:
        "AWS STS assume role credential validity in seconds (default 3600)",
    },
    {
      name: "--buffered_log_max",
      args: { name: "value" },
      description:
        "Maximum number of logs in buffered output plugins (0 = unlimited)",
    },
    {
      name: "--decorations_top_level",
      description: "Add decorators as top level JSON objects",
    },
    {
      name: "--disable_audit",
      description: "Disable receiving events from the audit subsystem",
    },
    {
      name: "--disable_caching",
      description: "Disable scheduled query caching",
    },
    {
      name: "--disable_database",
      description: "Disable the persistent RocksDB storage",
    },
    {
      name: "--disable_decorators",
      description: "Disable log result decoration",
    },
    {
      name: "--disable_distributed",
      description: "Disable distributed queries (default true)",
    },
    {
      name: "--disable_endpointsecurity",
      description:
        "Disable receiving events from the EndpointSecurity subsystem",
    },
    {
      name: "--disable_endpointsecurity_fim",
      description: "Disable file events from the EndpointSecurity subsystem",
    },
    {
      name: "--disable_events",
      description: "Disable osquery publish/subscribe system",
    },
    {
      name: "--disable_hash_cache",
      description:
        "Cache calculated file hashes, re-calculate only if inode times change",
    },
    { name: "--disable_logging", description: "Disable ERROR/INFO logging" },
    {
      name: "--distributed_interval",
      args: { name: "value" },
      description: "Seconds between polling for new queries (default 60)",
    },
    {
      name: "--distributed_loginfo",
      description: "Log the running distributed queries name at INFO level",
    },
    {
      name: "--distributed_plugin",
      args: { name: "value" },
      description: "Distributed plugin name",
    },
    {
      name: "--distributed_tls_max_attempts",
      args: { name: "value" },
      description: "Number of times to attempt a request",
    },
    {
      name: "--distributed_tls_read_endpoint",
      args: { name: "value" },
      description: "TLS/HTTPS endpoint for distributed query retrieval",
    },
    {
      name: "--distributed_tls_write_endpoint",
      args: { name: "value" },
      description: "TLS/HTTPS endpoint for distributed query results",
    },
    {
      name: "--docker_socket",
      args: { name: "value", template: "filepaths" },
      description: "Docker UNIX domain socket path",
    },
    {
      name: "--enable_file_events",
      description: "Enables the file_events publisher",
    },
    {
      name: "--enable_foreign",
      description: "Enable no-op foreign virtual tables",
    },
    {
      name: "--enable_keyboard_events",
      description: "Enable listening for keyboard events",
    },
    {
      name: "--enable_mouse_events",
      description: "Enable listening for mouse events",
    },
    {
      name: "--enable_numeric_monitoring",
      description: "Enable numeric monitoring system",
    },
    {
      name: "--ephemeral",
      description: "Skip pidfile and database state checks",
    },
    {
      name: "--es_fim_mute_path_literal",
      args: { name: "value" },
      description: "Comma delimited list of path literals to be muted for FIM",
    },
    {
      name: "--es_fim_mute_path_prefix",
      args: { name: "value" },
      description: "Comma delimited list of path prefxes to be muted for FIM",
    },
    {
      name: "--events_expiry",
      args: { name: "value" },
      description: "Timeout to expire event subscriber results",
    },
    {
      name: "--events_max",
      args: { name: "value" },
      description: "Maximum number of event batches per type to buffer",
    },
    {
      name: "--events_optimize",
      description: "Optimize subscriber select queries (scheduler only)",
    },
    {
      name: "--extensions_default_index",
      description: "Enable INDEX on all extension table columns (default true)",
    },
    {
      name: "--hash_cache_max",
      args: { name: "value" },
      description: "Size of LRU file hash cache",
    },
    {
      name: "--host_identifier",
      args: { name: "value" },
      description:
        "Field used to identify the host running osquery (hostname, uuid, instance, ephemeral, specified)",
    },
    {
      name: "--logger_event_type",
      description: "Log scheduled results as events",
    },
    {
      name: "--logger_kafka_acks",
      args: { name: "value", suggestions: ["0", "1", "all"] },
      description:
        "The number of acknowledgments the leader has to receive (0, 1, 'all')",
    },
    {
      name: "--logger_kafka_brokers",
      args: { name: "value" },
      description:
        "Bootstrap broker(s) as a comma-separated list of host or host:port (default port 9092)",
    },
    {
      name: "--logger_kafka_compression",
      args: { name: "value", suggestions: ["none", "gzip"] },
      description:
        "Compression codec to use for compressing message sets ('none' or 'gzip')",
    },
    {
      name: "--logger_kafka_topic",
      args: { name: "value" },
      description: "Kafka topic to publish logs under",
    },
    {
      name: "--logger_min_status",
      args: { name: "value" },
      description: "Minimum level for status log recording",
    },
    {
      name: "--logger_min_stderr",
      args: { name: "value" },
      description: "Minimum level for statuses written to stderr",
    },
    {
      name: "--logger_numerics",
      description: "Use numeric JSON syntax for numeric values",
    },
    {
      name: "--logger_path",
      args: { name: "value", template: "filepaths" },
      description: "Directory path for ERROR/WARN/INFO and results logging",
    },
    { name: "--logger_rotate", description: "Use filesystem log rotation" },
    {
      name: "--logger_rotate_max_files",
      args: { name: "value" },
      description: "Max number of files to keep in rotation",
    },
    {
      name: "--logger_rotate_size",
      args: { name: "value" },
      description: "Size for each filesystem log in bytes",
    },
    {
      name: "--logger_snapshot_event_type",
      description: "Log scheduled snapshot results as events",
    },
    {
      name: "--logger_syslog_facility",
      args: { name: "value" },
      description:
        "Syslog facility for status and results logs (0-23, default 19)",
    },
    {
      name: "--logger_syslog_prepend_cee",
      description: "Prepend @cee: tag to logged JSON messages",
    },
    {
      name: "--logger_tls_compress",
      description: "GZip compress TLS/HTTPS request body",
    },
    {
      name: "--logger_tls_endpoint",
      args: { name: "value" },
      description: "TLS/HTTPS endpoint for results logging",
    },
    {
      name: "--logger_tls_max_lines",
      args: { name: "value" },
      description: "Max number of logs to send per period",
    },
    {
      name: "--logger_tls_max_linesize",
      args: { name: "value" },
      description: "Max size in bytes allowed per log line",
    },
    {
      name: "--logger_tls_period",
      args: { name: "value" },
      description: "Seconds between flushing logs over TLS/HTTPS",
    },
    {
      name: "--nullvalue",
      args: { name: "value" },
      description: "Set string for NULL values, default ''",
    },
    {
      name: "--numeric_monitoring_filesystem_path",
      args: { name: "value" },
      description:
        "File to dump numeric monitoring records one per line. The format of the line is <PATH><TAB><VALUE><TAB><TIMESTAMP>",
    },
    {
      name: "--numeric_monitoring_plugins",
      args: { name: "value" },
      description: "Comma separated numeric monitoring plugins names",
    },
    {
      name: "--numeric_monitoring_pre_aggregation_time",
      args: { name: "value" },
      description:
        "Time period in seconds for numeric monitoring pre-aggregation buffer",
    },
    {
      name: "--pack_delimiter",
      args: { name: "value" },
      description: "Delimiter for pack and query names",
    },
    {
      name: "--pack_refresh_interval",
      args: { name: "value" },
      description: "Cache expiration for a packs discovery queries",
    },
    {
      name: "--read_max",
      args: { name: "value" },
      description: "Maximum file read size",
    },
    {
      name: "--schedule_default_interval",
      args: { name: "value" },
      description: "Query interval to use if none is provided",
    },
    {
      name: "--schedule_epoch",
      args: { name: "value" },
      description: "Epoch for scheduled queries",
    },
    {
      name: "--schedule_lognames",
      description: "Log the running scheduled query name at INFO level",
    },
    {
      name: "--schedule_max_drift",
      args: { name: "value" },
      description: "Max time drift in seconds",
    },
    {
      name: "--schedule_reload",
      args: { name: "value" },
      description: "Interval in seconds to reload database arenas",
    },
    {
      name: "--schedule_splay_percent",
      args: { name: "value" },
      description: "Percent to splay config times",
    },
    {
      name: "--schedule_timeout",
      args: { name: "value" },
      description:
        "Limit the schedule to a duration in seconds, 0 for no limit",
    },
    {
      name: "--specified_identifier",
      args: { name: "value" },
      description:
        "Field used to specify the host_identifier when set to 'specified'",
    },
    {
      name: "--table_delay",
      args: { name: "value" },
      description: "Add an optional microsecond delay between table scans",
    },
    {
      name: "--table_exceptions",
      description: "Allow tables to throw exceptions",
    },
    {
      name: "--thrift_string_size_limit",
      args: { name: "value" },
      description:
        "Sets the maximum string size allowed in a thrift message, use 0 for unlimited",
    },
    {
      name: "--thrift_timeout",
      args: { name: "value" },
      description: "Timeout for thrift socket operations",
    },
    { name: "--thrift_verbose", description: "Enable the thrift log handler" },
    {
      name: "--tls_disable_status_log",
      description: "Disable sending status logs",
    },
    { name: "--verbose", description: "Enable verbose informational messages" },
    {
      name: "--worker_threads",
      args: { name: "value" },
      description: "Number of work dispatch threads",
    },
    {
      name: "--yara_delay",
      args: { name: "value" },
      description:
        "Time in ms to sleep after scan of each file (default 50) to reduce memory spikes",
    },
    {
      name: "--A",
      args: { name: "value" },
      description: "Select all from a table",
    },
    { name: "--L", description: "List all table names" },
    {
      name: "--connect",
      args: { name: "value" },
      description: "Connect to an extension socket",
    },
    { name: "--csv", description: "Set output mode to 'csv'" },
    {
      name: "--extension",
      args: { name: "value", template: ["filepaths", "folders"] },
      description: "Path to a single extension to autoload",
    },
    { name: "--header", description: "Toggle column headers true/false" },
    { name: "--json", description: "Set output mode to 'json'" },
    { name: "--json_pretty", description: "Set output mode to 'json_pretty'" },
    { name: "--line", description: "Set output mode to 'line'" },
    { name: "--list", description: "Set output mode to 'list'" },
    {
      name: "--pack",
      args: { name: "value" },
      description: "Run all queries in a pack",
    },
    { name: "--planner", description: "Enable osquery runtime planner output" },
    {
      name: "--profile",
      args: { name: "value" },
      description: "Enable profile mode when non-0, set number of iterations",
    },
    {
      name: "--separator",
      args: { name: "value" },
      description: "Set output field separator, default '|'",
    },
  ],
};

export default completionSpec;
