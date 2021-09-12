const bazelBuildFiles: Fig.Generator = {
  script: `FILES=( $(find ./ -name BUILD) ); for f in $FILES; do echo "----$f"; cat "$f"; done`,
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
      description: "Opposite of --autodetect_server_javabase",
    },
    {
      name: "--batch",
      exclusiveOn: ["--nobatch"],
      description: "Run as just a client process without a server",
    },
    {
      name: "--nobatch",
      exclusiveOn: ["--batch"],
      description: "Opposite of --batch",
    },
    {
      name: "--batch_cpu_scheduling",
      exclusiveOn: ["--nobatch_cpu_scheduling"],
      description: "Only on Linux; use 'batch' CPU scheduling for Bazel",
    },
    {
      name: "--nobatch_cpu_scheduling",
      exclusiveOn: ["--batch_cpu_scheduling"],
      description: "Opposite of --batch_cpu_scheduling",
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
      description:
        "Wait for a running command to complete, but instead exits immediately",
    },
    {
      name: "--noblock_for_lock",
      exclusiveOn: ["--block_for_lock"],
      description: "Opposite of --block_for_lock",
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
      description: "Opposite of --client_debug",
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
      description: "Opposite of --expand_configs_in_place",
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
      description:
        "Whether or not to look for the home bazelrc file at $HOME/.bazelrc",
    },
    {
      name: "--nohome_rc",
      exclusiveOn: ["--home_rc"],
      description:
        "Whether or not to look for the home bazelrc file at $HOME/.bazelrc",
    },
    {
      name: "--idle_server_tasks",
      exclusiveOn: ["--noidle_server_tasks"],
      description: "Run System.gc() when the server is idle",
    },
    {
      name: "--noidle_server_tasks",
      exclusiveOn: ["--idle_server_tasks"],
      description: "Run System.gc() when the server is idle",
    },
    {
      name: "--ignore_all_rc_files",
      exclusiveOn: ["--noignore_all_rc_files"],
      description: "Disables all rc files",
    },
    {
      name: "--noignore_all_rc_files",
      exclusiveOn: ["--ignore_all_rc_files"],
      description: "Doesn't disables all rc files",
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
      insertValue: "--local_startup_timeout_secs={cursor}",
      description:
        "The maximum amount of time the client waits to connect to the server",
    },
    {
      name: "--macos_qos_class",
      insertValue: "--macos_qos_class='{cursor}'",
      description:
        "Sets the QoS service class of the bazel server when running on macOS",
    },
    {
      name: "--max_idle_secs",
      insertValue: "--max_idle_secs={cursor}",
      description:
        "The number of seconds the build server will wait idling before shutting down",
    },
    {
      name: "--output_base",
      insertValue: "--output_base={cursor}",
      description:
        "Specifies the output location to which all build output will be written",
    },
    {
      name: "--output_base_root",
      insertValue: "--output_base_root={cursor}",
      description:
        "The user-specific directory beneath which all build outputs are written",
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
      insertValue: "--server_jvm_out={cursor}",
      description: "The location to write the server's JVM's output",
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
      description: "Opposite of --shutdown_on_low_sys_mem",
    },
    {
      name: "--system_rc",
      exclusiveOn: ["--nosystem_rc"],
      description: "Whether or not to look for the system-wide bazelrc",
    },
    {
      name: "--nosystem_rc",
      exclusiveOn: ["--system_rc"],
      description: "Whether or not to look for the system-wide bazelrc",
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
        "Raises the soft coredump limit to the hard limit to make coredumps of the server (including the JVM) and the client possible under common conditions",
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
      description: "Opposite of --watchfs",
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
      description: "Opposite of --windows_enable_symlinks",
    },
    {
      name: "--workspace_rc",
      exclusiveOn: ["--noworkspace_rc"],
      description:
        "Whether or not to look for the workspace bazelrc file at $workspace/.bazelrc",
    },
    {
      name: "--noworkspace_rc",
      exclusiveOn: ["--workspace_rc"],
      description: "Opposite of --workspace_rc",
    },
  ],
};

export default completionSpec;
