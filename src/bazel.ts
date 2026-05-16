const bazelBuildFiles: Fig.Generator = {
  script: [
    "bash",
    "-c",
    `FILES=( $(find ./ -name BUILD) ); for f in $FILES; do echo "----$f"; \\cat "$f"; done`,
  ],
  // returns filepaths and contents in the form below, note the "----" to indicate the filepath
  // ----.//lib/BUILD
  // load("@rules_cc//cc:defs.bzl", "cc_library")

  // cc_library(
  //     name = "hello-time",
  //     srcs = ["hello-time.cc"],
  //     hdrs = ["hello-time.h"],
  //     visibility = ["//main:__pkg__"],
  // )

  postProcess: function (out) {
    const lines = out.split("\n");
    // return lines
    const targets = [];
    let currPath = "";
    for (let i = 0; i < lines.length; i++) {
      const isFilepath = lines[i].match("----.(.*)/BUILD");
      const isBazelTarget = lines[i].match('name = "(.*)"');
      if (isFilepath) {
        currPath = isFilepath[1] + ":";
      } else if (isBazelTarget) {
        targets.push({
          name: currPath + isBazelTarget[1],
          description: "Bazel target",
          icon: "🎯",
          priority: 80,
        });
      }
    }
    return targets;
  },
};

const completionSpec: Fig.Spec = {
  name: "bazel",
  description: "Bazel the build system!",
  subcommands: [
    {
      name: "run",
      description: "Runs the specified target",
      args: {
        name: "BUILD file",
        generators: bazelBuildFiles,
      },
    },
    {
      name: "test",
      description: "Builds and runs the specified test targets",
      args: {
        name: "BUILD file",
        generators: bazelBuildFiles,
      },
    },
    {
      name: "build",
      description: "Builds the specified targets",
      args: {
        name: "BUILD file",
        generators: bazelBuildFiles,
      },
    },
  ],
  options: [
    {
      name: "--autodetect_server_javabase",
      exclusiveOn: ["--noautodetect_server_javabase"],
      description:
        "Back to the local JDK for running the bazel server and instead exits",
    },
    {
      name: "--noautodetect_server_javabase",
      exclusiveOn: ["autodetect_server_javabase"],
      description:
        "Does not fall back to the local JDK for running the bazel server and instead exits",
    },
    {
      name: "--batch",
      exclusiveOn: ["--nobatch"],
      description: "Run as just a client process without a server",
    },
    {
      name: "--nobatch",
      exclusiveOn: ["--batch"],
      description: "Run with a server",
    },
    {
      name: "--batch_cpu_scheduling",
      exclusiveOn: ["--nobatch_cpu_scheduling"],
      description: "Only on Linux; use 'batch' CPU scheduling for Bazel",
    },
    {
      name: "--nobatch_cpu_scheduling",
      exclusiveOn: ["--batch_cpu_scheduling"],
      description: "Only on Linux; Bazel does not perform a system call",
    },
    {
      name: "--bazelrc",
      description:
        "The location of the user .bazelrc file containing default values of Bazel options",
      args: {
        name: "bazelrc path",
        template: "filepaths",
      },
    },
    {
      name: "--block_for_lock",
      exclusiveOn: ["--noblock_for_lock"],
      description: "Wait for a running command to complete",
    },
    {
      name: "--noblock_for_lock",
      exclusiveOn: ["--block_for_lock"],
      description:
        "Bazel does not wait for a running command to complete, but instead exits immediately",
    },
    {
      name: "--client_debug",
      exclusiveOn: ["--noclient_debug"],
      description:
        "Log debug information from the client to stderr. Changing this option will not cause the server to restart",
    },
    {
      name: "--noclient_debug",
      exclusiveOn: ["--client_debug"],
      description: "Don't log debug information from the client to stderr",
    },
    {
      name: "--connect_timeout_secs",
      description:
        "The amount of time the client waits for each attempt to connect to the server",
      args: {
        name: "time",
      },
    },
    {
      name: "--expand_configs_in_place",
      exclusiveOn: ["--noexpand_configs_in_place"],
      description:
        "Changed the expansion of --config flags to be done in-place",
    },
    {
      name: "--noexpand_configs_in_place",
      exclusiveOn: ["--expand_configs_in_place"],
      description:
        "--config flags in a fixed point expansion between normal rc options and command-line specified options",
    },
    {
      name: "--failure_detail_out",
      description:
        "Specifies a location to write a failure_detail protobuf message if the server experiences a failure and cannot report it via gRPC, as normal. Otherwise, the location will be ${OUTPUT_BASE}/failure_detail.rawproto",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--home_rc",
      exclusiveOn: ["--nohome_rc"],
      description: "Look for the home bazelrc file at $HOME/.bazelrc",
    },
    {
      name: "--nohome_rc",
      exclusiveOn: ["--home_rc"],
      description: "Don't look for the home bazelrc file at $HOME/.bazelrc",
    },
    {
      name: "--idle_server_tasks",
      exclusiveOn: ["--noidle_server_tasks"],
      description: "Run System.gc() when the server is idle",
    },
    {
      name: "--noidle_server_tasks",
      exclusiveOn: ["--idle_server_tasks"],
      description: "Don't run System.gc() when the server is idle",
    },
    {
      name: "--ignore_all_rc_files",
      exclusiveOn: ["--noignore_all_rc_files"],
      description:
        "Disables all rc files, regardless of the values of other rc-modifying flags, even if these flags come later in the list of startup options",
    },
    {
      name: "--noignore_all_rc_files",
      exclusiveOn: ["--ignore_all_rc_files"],
      description: "Enables all rc files",
    },
    {
      name: "--io_nice_level",
      description:
        "Only on Linux; set a level from 0-7 for best-effort IO scheduling using the sys_ioprio_set system call. 0 is highest priority, 7 is lowest",
      args: {
        name: "io-level",
        suggestions: ["0", "1", "2", "3", "4", "5", "6", "7"],
      },
    },
    {
      name: "--local_startup_timeout_secs",
      description:
        "The maximum amount of time the client waits to connect to the server",
      args: {
        name: "seconds",
        default: "120",
      },
    },
    {
      name: "--macos_qos_class",
      description:
        "Sets the QoS service class of the bazel server when running on macOS",
      args: {
        name: "QoS service class",
        default: "default",
      },
    },
    {
      name: "--max_idle_secs",
      description:
        "The number of seconds the build server will wait idling before shutting down",
      args: {
        name: "seconds",
        default: "10800",
      },
    },
    {
      name: "--output_base",
      description:
        "Specifies the output location to which all build output will be written",
      args: {
        name: "Path",
        default: "${OUTPUT_ROOT}/_bazel_${USER}/${MD5_OF_WORKSPACE_ROOT}",
        template: "filepaths",
      },
    },
    {
      name: "--output_base_root",
      description:
        "The user-specific directory beneath which all build outputs are written",
      args: {
        name: "Path",
        default: "$USER",
        template: "filepaths",
      },
    },
    {
      name: "--preemptible",
      exclusiveOn: ["--nopreemptible"],
      description:
        "If true, the command can be preempted if another command is started",
    },
    {
      name: "--nopreemptible",
      exclusiveOn: ["--preemptible"],
      description:
        "If true, the command can be preempted if another command is started",
    },
    {
      name: "--server_jvm_out",
      description: "The location to write the server's JVM's output",
      args: {
        name: "Path",
        template: "filepaths",
      },
    },
    {
      name: "--shutdown_on_low_sys_mem",
      exclusiveOn: ["--noshutdown_on_low_sys_mem"],
      description:
        "Linux only. If max_idle_secs is set and the build server has been idle for a while, shut down the server when the system is low on free RAM",
    },
    {
      name: "--noshutdown_on_low_sys_mem",
      exclusiveOn: ["--shutdown_on_low_sys_mem"],
      description:
        "Linux only. Don't shut down the server when the system is low on free RAM",
    },
    {
      name: "--system_rc",
      exclusiveOn: ["--nosystem_rc"],
      description: "Look for the system-wide bazelrc",
    },
    {
      name: "--nosystem_rc",
      exclusiveOn: ["--system_rc"],
      description: "Don't look for the system-wide bazelrc",
    },
    {
      name: "--unlimit_coredumps",
      exclusiveOn: ["--nounlimit_coredumps"],
      description:
        "Raises the soft coredump limit to the hard limit to make coredumps of the server (including the JVM) and the client possible under common conditions",
    },
    {
      name: "--nounlimit_coredumps",
      exclusiveOn: ["--unlimit_coredumps"],
      description:
        "Don't raise the soft coredump limit to the hard limit to make coredumps of the server (including the JVM) and the client possible under common conditions",
    },
    {
      name: "--watchfs",
      exclusiveOn: ["--nowatchfs"],
      description:
        "Use the operating system's file watch service for local changes instead of scanning every file for a change",
    },
    {
      name: "--nowatchfs",
      exclusiveOn: ["--watchfs"],
      description: "Scan every file for a change",
    },
    {
      name: "--windows_enable_symlinks",
      exclusiveOn: ["--nowindows_enable_symlinks"],
      description:
        "Real symbolic links will be created on Windows instead of file copying",
    },
    {
      name: "--nowindows_enable_symlinks",
      exclusiveOn: ["--windows_enable_symlinks"],
      description: "Real symbolic links will be created via file copying",
    },
    {
      name: "--workspace_rc",
      exclusiveOn: ["--noworkspace_rc"],
      description: "Look for the workspace bazelrc file at $workspace/.bazelrc",
    },
    {
      name: "--noworkspace_rc",
      exclusiveOn: ["--workspace_rc"],
      description:
        "Don't look for the workspace bazelrc file at $workspace/.bazelrc",
    },
  ],
};

export default completionSpec;
