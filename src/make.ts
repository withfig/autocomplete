const listTargets: Fig.Generator = {
  custom: async (tokens, executeShellCommand) => {
    // Plain target suggestions. These will be overridden if we can find a description for them.
    const { stdout } = await executeShellCommand({
      command: "bash",
      args: [
        "-c",
        "make -qp | awk -F':' '/^[a-zA-Z0-9][^$#\\/\\t=]*:([^=]|$)/ {split($1,A,/ /);for(i in A)print A[i]}' | sort -u",
      ],
    });

    const targetSuggestions = new Map<string, Fig.Suggestion>();

    for (const target of stdout.split("\n")) {
      if (target === "Makefile") continue;
      targetSuggestions.set(target, {
        name: target.trim(),
        description: "Make target",
        icon: "🎯",
        priority: 80,
      });
    }

    const { stdout: makefile } = await executeShellCommand({
      command: "cat",
      args: ["Makefile", "makefile"],
    });

    const matches = makefile.matchAll(
      /((?:^#.*\n)*)(?:^\.[A-Z_]+:.*\n)*(^\S*?):.*?(?:\s#+[ \t]*(.+))?$/gm
    );
    const specialTargets = new Set([
      ".PHONY",
      ".SUFFIXES",
      ".DEFAULT",
      ".PRECIOUS",
      ".INTERMEDIATE",
      ".SECONDARY",
      ".SECONDEXPANSION",
      ".DELETE_ON_ERROR",
      ".IGNORE",
      ".LOW_RESOLUTION_TIME",
      ".SILENT",
      ".EXPORT_ALL_VARIABLES",
      ".NOTPARALLEL",
      ".ONESHELL",
      ".POSIX",
    ]);
    for (const match of matches) {
      const [_, leadingComment, target, inlineComment] = match;

      if (specialTargets.has(target)) continue;
      if (/\$\(.+?\)/.test(target)) continue;

      const name = target.trim();

      const description = inlineComment
        ? inlineComment.trim()
        : leadingComment
          ? leadingComment.replace(/^#+\s*/gm, "").trim()
          : "Make target";

      targetSuggestions.set(name, {
        name,
        description,
        icon: "🎯",
        priority: 80,
      });
    }
    return [...targetSuggestions.values()];
  },
};

const completionSpec: Fig.Spec = {
  name: "make",
  args: {
    name: "target",
    generators: listTargets,
  },
  options: [
    {
      name: "-j",
      args: [{ name: "number" }, { name: "target", generators: listTargets }],
    },
    {
      name: ["--file", "-f", "--makefile"],
      description: "Read FILE as a makefile",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["-C", "--directory"],
      description: "Change to DIRECTORY before doing anything",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["-B", "--always-make"],
      description: "Unconditionally make all targets",
      args: {
        name: "target",
        generators: listTargets,
      },
    },
    {
      name: ["-e", "--environment-overrides"],
      description: "Environment variables override makefiles",
      args: {
        name: "target",
        generators: listTargets,
      },
    },
    {
      name: ["-h", "--help"],
      description: "Print this message and exit",
    },
    {
      name: ["-i", "--ignore-errors"],
      description: "Ignore errors from commands",
    },
    {
      name: ["-k", "--keep-going"],
      description: "Keep going when some targets can't be made",
    },
    {
      name: ["-L", "--check-symlink-times"],
      description: "Use the latest mtime between symlinks and target",
    },
    {
      name: ["-p", "--print-data-base"],
      description: "Print make's internal database",
    },
    {
      name: ["-q", "--question"],
      description: "Run no commands; exit status says if up to date",
    },
    {
      name: ["-r", "--no-builtin-rules"],
      description: "Disable the built-in implicit rules",
    },
    {
      name: ["-R", "--no-builtin-variables"],
      description: "Disable the built-in variable settings",
    },
    {
      name: ["-t", "--touch"],
      description: "Touch targets instead of remaking them",
    },
    {
      name: ["-v", "--version"],
      description: "Print the version number of make and exit",
    },
    {
      name: ["-w", "--print-directory"],
      description: "Print the current directory",
    },
    {
      name: "-d",
      description: "Print lots of debugging information",
    },
    {
      name: "--debug",
      description: "Print various types of debugging information",
    },
    {
      name: ["-I", "--include-dir"],
      args: {
        name: "directory",
        template: "folders",
      },
      description: "Search directory for included makefiles",
    },
    {
      name: ["-l", "--load-average"],
      args: {
        name: "N",
        isOptional: true,
      },
      description: "Don't start multiple jobs unless load is below N",
    },
    {
      name: ["-o", "--old-file"],
      args: {
        name: "file",
        template: "filepaths",
      },
      description: "Consider file to be very old and don't remake it",
    },
    {
      name: "--no-print-directory",
      description: "Turn off -w, even if it was turned on implicitly",
    },
    {
      name: ["-W", "--what-if", "--new-file", "--assume-new"],
      args: {
        name: "file",
        template: "filepaths",
      },
      description: "Consider file to be infinitely new",
    },
    {
      name: "--warn-undefined-variables",
      description: "Warn when an undefined variable is referenced",
    },
    {
      name: ["-N", "--Next-option"],
      args: {
        name: "option",
      },
      description: "Turn on value of next option",
    },
  ],
};

export default completionSpec;
