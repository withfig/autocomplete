const completionSpec: Fig.Spec = {
  name: "mvn",
  description: "Maven - a Java based project management and comprehension tool",
  options: [
    {
      name: ["--also-make", "-am"],
      description: "Also build projects required by project list",
    },
    {
      name: ["--also-make-dependents", "-amd"],
      description:
        "Also build projects that depend on projects in the project list",
    },
    {
      name: ["--batch-mode", "-B"],
      description: "Run in non-interactive (batch)",
    },
    {
      name: ["--builder", "-b"],
      description: "Specify the build strategy to use",
      args: {
        name: "id of build strategy",
      },
    },
    {
      name: ["--strict-checksums", "-C"],
      description: "Fail if checksums do not match",
    },
    {
      name: ["--lax-checksums", "-c"],
      description: "Warn if checksums do not match",
    },
    {
      name: "--color",
      description: "Specify the color mode of the output",
      args: {
        name: "color mode",
        suggestions: ["always", "never", "auto"],
      },
    },
    {
      name: ["--check-plugin-updates", "-cpu"],
      description: "Ineffective. Only kept for backward compatibility",
    },
    {
      name: ["--define", "-D"],
      description: "Define a system property",
      args: {
        name: "system property",
      },
    },
    {
      name: ["--errors", "-e"],
      description: "Produce execution error messages",
    },
    {
      name: ["--encrypt-master-password", "-emp"],
      description: "Encrypt the master security password",
      args: {
        name: "master password",
      },
    },
    {
      name: ["--encrypt-password", "-ep"],
      description: "Encrypt the server password",
      args: {
        name: "server password",
      },
    },
    {
      name: ["--file", "-f"],
      description:
        "Force the use of an alternate POM file (or directory with pom.xml)",
      args: {
        name: "path",
        suggestions: ["filepaths", "folders"],
      },
    },
    {
      name: ["--fail-at-end", "-fae"],
      description:
        "Only fail the build afterwards; allow all non-impacted builds to continue",
    },
    {
      name: ["--fail-fast", "-ff"],
      description: "Stop at first failure in reactorized builds",
    },
    {
      name: ["--fail-never", "-fn"],
      description: "Never fail the build, regardless of project result",
    },
    {
      name: ["--global-settings", "-gs"],
      description: "Specify the global settings file to use",
      args: {
        name: "path",
        suggestions: ["filepaths"],
      },
    },
    {
      name: ["--global-toolchains", "-gt"],
      description: "Specify the global toolchains file to use",
      args: {
        name: "path",
        suggestions: ["filepaths"],
      },
    },
    {
      name: ["--help", "-h"],
      description: "Display help information",
    },
    {
      name: ["--log-file", "-l"],
      description: "Specify the file to log to",
      args: {
        name: "path",
        suggestions: ["filepaths"],
      },
    },
    {
      name: ["--legacy-local-repository", "-llr"],
      description: "Use the Maven2 legacy local repository behaviour",
    },
    {
      name: ["--non-recursive", "-N"],
      description: "Do not recurse into sub-projects",
    },
    {
      name: ["--no-plugin-registry", "-npr"],
      description: "Ineffective. Only kept for backward compatibility",
    },
    {
      name: ["--no-plugin-updates", "-npu"],
      description: "Ineffective. Only kept for backward compatibility",
    },
    {
      name: ["--no-snapshot-updates", "-nsu"],
      description: "Suppress SNAPSHOT updates",
    },
    {
      name: ["--no-transfer-progress", "-ntp"],
      description:
        "Do not display transfer progress when downloading or uploading",
    },
    {
      name: ["--offline", "-o"],
      description: "Work offline",
    },
    {
      name: ["--activate-profiles", "-P"],
      description: "Activate the specified profiles (comma delimited)",
      args: {
        name: "profiles",
      },
    },
    {
      name: ["--projects", "-pl"],
      description: "Specify the projects to build",
      args: {
        name: "project list",
      },
    },
    {
      name: ["--quiet", "-q"],
      description: "Quiet output - only shows errors",
    },
    {
      name: ["--resume-from", "-rf"],
      description: "Resume from the specified project",
      args: {
        name: "project",
      },
    },
    {
      name: ["--settings", "-s"],
      description: "Specify the user settings file to use",
      args: {
        name: "path",
        suggestions: ["filepaths"],
      },
    },
    {
      name: ["--toolchains", "-t"],
      description: "Specify the toolchains file to use",
      args: {
        name: "path",
        suggestions: ["filepaths"],
      },
    },
    {
      name: ["--threads", "-T"],
      description: "Specify the number of threads to use",
      args: {
        name: "threads",
      },
    },
    {
      name: ["--update-snapshots", "-U"],
      description:
        "Forces a check for missing releases and updated snapshots on remote repositories",
    },
    {
      name: ["--update-plugins", "-up"],
      description: "Ineffective. Only kept for backward compatibility",
    },
    {
      name: ["--version", "-v"],
      description: "Display version information",
    },
    {
      name: ["--show-version", "-V"],
      description: "Display version information",
    },
    {
      name: ["--debug", "-X"],
      description: "Produce execution debug output",
    },
  ],
  args: {
    name: "goal/phase",
    isVariadic: true,
  },
};
export default completionSpec;
