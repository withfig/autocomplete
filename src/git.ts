const filterMessages = (out: string): string => {
  return out.startsWith("warning:") || out.startsWith("error:")
    ? out.split("\n").slice(1).join("\n")
    : out;
};

const postProcessTrackedFiles: Fig.Generator["postProcess"] = (
  out,
  context
) => {
  const output = filterMessages(out);

  if (output.startsWith("fatal:")) {
    return [];
  }

  const files = output.split("\n").map((file) => {
    const arr = file.trim().split(" ");

    return { working: arr[0], file: arr.slice(1).join(" ").trim() };
  });

  return [
    ...files.map((item) => {
      const file = item.file.replace(/^"|"$/g, "");
      let ext = "";

      try {
        ext = file.split(".").slice(-1)[0];
      } catch (e) {}

      if (file.endsWith("/")) {
        ext = "folder";
      }

      return {
        name: file,
        icon: `fig://icon?type=${ext}&color=ff0000&badge=${item.working}`,
        description: "Changed tracked files",
        // If the current file already is already added
        // we want to lower the priority
        priority: context.some((ctx) => ctx.includes(file)) ? 50 : 100,
      };
    }),
  ];
};

const postProcessBranches: Fig.Generator["postProcess"] = (out) => {
  const output = filterMessages(out);

  if (output.startsWith("fatal:")) {
    return [];
  }

  return output.split("\n").map((elm) => {
    let name = elm.trim();
    const parts = elm.match(/\S+/g);
    if (parts.length > 1) {
      if (parts[0] === "*") {
        // We are in a detached HEAD state
        if (elm.includes("HEAD detached")) {
          return {};
        }
        // Current branch.
        return {
          name: elm.replace("*", "").trim(),
          description: "Current branch",
          priority: 100,
          icon: "⭐️",
        };
      } else if (parts[0] === "+") {
        // Branch checked out in another worktree.
        name = elm.replace("+", "").trim();
      }
    }

    return {
      name,
      description: "Branch",
      icon: "fig://icon?type=git",
      priority: 75,
    };
  });
};

const gitGenerators: Record<string, Fig.Generator> = {
  // Commit history
  commits: {
    script: "git --no-optional-locks log --oneline",
    postProcess: function (out) {
      const output = filterMessages(out);

      if (output.startsWith("fatal:")) {
        return [];
      }

      return output.split("\n").map((line) => {
        return {
          name: line.substring(0, 7),
          icon: "fig://icon?type=node",
          description: line.substring(7),
        };
      });
    },
  },

  // user aliases
  aliases: {
    script: "git --no-optional-locks config --get-regexp '^alias.'",
    postProcess: (out) => {
      const suggestions = out.split("\n").map((aliasLine) => {
        const [name, ...parts] = aliasLine.slice("alias.".length).split(" ");
        const value = parts.join(" ");
        return {
          name,
          description: `Alias for '${value}'`,
          icon: "fig://icon?type=commandkey",
        };
      });
      const names = {};
      return suggestions.filter((suggestion) => {
        if (names[suggestion.name]) {
          return false;
        }
        names[suggestion.name] = true;
        return true;
      });
    },
  },

  revs: {
    script: "git rev-list --all --oneline",
    postProcess: function (out) {
      const output = filterMessages(out);

      if (output.startsWith("fatal:")) {
        return [];
      }

      return output.split("\n").map((line) => {
        return {
          name: line.substring(0, 7),
          icon: "fig://icon?type=node",
          description: line.substring(7),
        };
      });
    },
  },

  // Saved stashes
  // TODO: maybe only print names of stashes
  stashes: {
    script: "git --no-optional-locks stash list",
    postProcess: function (out) {
      const output = filterMessages(out);

      if (output.startsWith("fatal:")) {
        return [];
      }

      return output.split("\n").map((file) => {
        return {
          name: file.split(":")[2],
          insertValue: file.split(":")[0],
          icon: `fig://icon?type=node`,
        };
      });
    },
  },

  // Tree-ish
  // This needs to be fleshed out properly....
  // e.g. what is difference to commit-ish?
  // Refer to this:https://stackoverflow.com/questions/23303549/what-are-commit-ish-and-tree-ish-in-git/40910185
  // https://mirrors.edge.kernel.org/pub/software/scm/git/docs/#_identifier_terminology

  treeish: {
    script: "git --no-optional-locks diff --cached --name-only",
    postProcess: function (out, tokens) {
      const output = filterMessages(out);

      if (output.startsWith("fatal:")) {
        return [];
      }

      return output.split("\n").map((file) => {
        return {
          name: file,
          insertValue: !tokens.includes("--") ? "-- " : "" + file,
          icon: `fig://icon?type=file`,
          description: "Staged file",
        };
      });
    },
  },

  // All branches
  remoteLocalBranches: {
    script: "git --no-optional-locks branch -a --no-color",
    postProcess: postProcessBranches,
  },

  localBranches: {
    script: "git --no-optional-locks branch --no-color",
    postProcess: postProcessBranches,
  },

  // custom generator to display local branches by default or
  // remote branches if '-r' flag is used. See branch -d for use
  localOrRemoteBranches: {
    custom: async (tokens, executeShellCommand) => {
      if (tokens.includes("-r")) {
        return postProcessBranches(
          await executeShellCommand(
            "git --no-optional-locks branch -r --no-color"
          )
        );
      } else {
        return postProcessBranches(
          await executeShellCommand("git --no-optional-locks branch --no-color")
        );
      }
    },
  },

  remotes: {
    script: "git --no-optional-locks remote -v",
    postProcess: function (out) {
      const remoteURLs = out.split("\n").reduce((dict, line) => {
        const pair = line.split("\t");
        const remote = pair[0];
        console.log(remote, pair);
        const url = pair[1].split(" ")[0];

        dict[remote] = url;
        return dict;
      }, {});

      return Object.keys(remoteURLs).map((remote) => {
        const url = remoteURLs[remote];
        let icon = "box";
        if (url.includes("github.com")) {
          icon = "github";
        }

        if (url.includes("gitlab.com")) {
          icon = "gitlab";
        }

        if (url.includes("heroku.com")) {
          icon = "heroku";
        }
        return {
          name: remote,
          icon: `fig://icon?type=${icon}`,
          description: "Remote",
        };
      });
    },
  },

  tags: {
    script: "git --no-optional-locks tag --list",
    postProcess: function (output) {
      return output.split("\n").map((tag) => ({
        name: tag,
        icon: "🏷️",
      }));
    },
  },

  // Files for staging
  files_for_staging: {
    script: "git --no-optional-locks status --short",
    postProcess: (out, context) => {
      const output = filterMessages(out);

      if (output.startsWith("fatal:")) {
        return [];
      }

      const files = output.split("\n").map((file) => {
        // From "git --no-optional-locks status --short"
        // M  dev/github.ts // test file that was added
        //  M dev/kubectl.ts // test file that was not added
        // A  test2.txt // new added and tracked file
        // ?? test.txt // new untracked file
        const alreadyAdded = ["M", "A"].includes(file.charAt(0));

        file = file.trim();
        const arr = file.split(" ");

        return {
          working: arr[0],
          file: arr.slice(1).join(" ").trim(),
          alreadyAdded,
        };
      });

      const paths = output.split("\n").map((file) => {
        const arr = file
          .slice(0, file.lastIndexOf("/") + 1)
          .trim()
          .split(" ");
        return arr.slice(1).join(" ").trim();
      });

      const dirArr = [];
      if (paths.length >= 2) {
        let currentDir = paths[0];
        let count = 1;
        for (let i = 1; i < paths.length; i++) {
          if (paths[i].includes(currentDir) && i + 1 !== paths.length) {
            count++;
          } else {
            if (count >= 2) {
              dirArr.push(currentDir);
            }
            count = 1;
          }
          currentDir = paths[i];
        }
      }

      return [
        ...dirArr.map((name) => {
          return {
            name: name + "*",
            description: "Wildcard",
            icon: "fig://icon?type=asterisk",
          };
        }),
        ...files.map((item) => {
          const file = item.file.replace(/^"|"$/g, "");
          let ext = "";

          try {
            ext = file.split(".").slice(-1)[0];
          } catch (e) {}

          if (file.endsWith("/")) {
            ext = "folder";
          }

          // If the current file is already added
          // we want to lower the priority
          const priority =
            item.alreadyAdded || context.some((ctx) => ctx.includes(file))
              ? 50
              : 100;
          return {
            name: file,
            icon: `fig://icon?type=${ext}&color=ff0000&badge=${item.working}`,
            description: "Changed file",
            priority,
          };
        }),
      ];
    },
  },

  getStagedFiles: {
    script:
      "git --no-optional-locks status --short | sed -ne '/^M /p' -e '/A /p'",
    postProcess: postProcessTrackedFiles,
  },

  getUnstagedFiles: {
    script: "git --no-optional-locks diff --name-only",
    splitOn: "\n",
  },

  getChangedTrackedFiles: {
    script: function (context) {
      if (context.includes("--staged") || context.includes("--cached")) {
        return `git --no-optional-locks status --short | sed -ne '/^M /p' -e '/A /p'`;
      } else {
        return `git --no-optional-locks status --short | sed -ne '/M /p' -e '/A /p'`;
      }
    },
    postProcess: postProcessTrackedFiles,
  },
};

const addOptions: Fig.Option[] = [
  {
    name: ["-n", "--dry-run"],
    description:
      "Don’t actually add the file(s), just show if they exist and/or will be ignored",
  },
  { name: ["-v", "--verbose"], description: "Be verbose" },
  {
    name: ["-f", "--force"],
    description: "Allow adding otherwise ignored files",
  },
  {
    name: ["-i", "--interactive"],
    description:
      "Add modified contents in the working tree interactively to the index. Optional path arguments may be supplied to limit operation to a subset of the working tree. See “Interactive mode” for details",
  },
  {
    name: ["-p", "--patch"],
    description:
      "Interactively choose hunks of patch between the index and the work tree and add them to the index. This gives the user a chance to review the difference before adding modified contents to the index",
  },
  {
    name: ["-e", "--edit"],
    description:
      "Open the diff vs. the index in an editor and let the user edit it. After the editor was closed, adjust the hunk headers and apply the patch to the index",
  },
  {
    name: ["-u", "--update"],
    description:
      "Update the index just where it already has an entry matching <pathspec>. This removes as well as modifies index entries to match the working tree, but adds no new files",
  },
  {
    name: ["-A", "--all", "--no-ignore-removal"],
    description:
      "Update the index not only where the working tree has a file matching <pathspec> but also where the index already has an entry. This adds, modifies, and removes index entries to match the working tree",
  },
  {
    name: ["--no-all", "--ignore-removal"],
    description:
      "Update the index by adding new files that are unknown to the index and files modified in the working tree, but ignore files that have been removed from the working tree. This option is a no-op when no <pathspec> is used",
  },
  {
    name: ["-N", "--intent-to-add"],
    description:
      "Record only the fact that the path will be added later. An entry for the path is placed in the index with no content. This is useful for, among other things, showing the unstaged content of such files with git diff and committing them with git commit -a",
  },
  {
    name: "--refresh",
    description:
      "Don’t add the file(s), but only refresh their stat() information in the index",
  },
  {
    name: "--ignore-errors",
    description:
      "If some files could not be added because of errors indexing them, do not abort the operation, but continue adding the others. The command shall still exit with non-zero status. The configuration variable add.ignoreErrors can be set to true to make this the default behaviour",
  },
  {
    name: "--ignore-missing",
    description:
      "This option can only be used together with --dry-run. By using this option the user can check if any of the given files would be ignored, no matter if they are already present in the work tree or not",
  },
  {
    name: "--no-warn-embedded-repo",
    description:
      "By default, git add will warn when adding an embedded repository to the index without using git submodule add to create an entry in .gitmodules. This option will suppress the warning (e.g., if you are manually performing operations on submodules)",
  },
  {
    name: "--renormalize",
    description:
      "Apply the 'clean' process freshly to all tracked files to forcibly add them again to the index. This is useful after changing core.autocrlf configuration or the text attribute in order to correct files added with wrong CRLF/LF line endings. This option implies -u",
  },
  {
    name: "--chmod",
    description:
      "Override the executable bit of the added files. The executable bit is only changed in the index, the files on disk are left unchanged",
    insertValue: "--chmod=",
    args: {
      suggestions: ["+x", "-x"],
    },
  },
  {
    name: "--pathspec-from-file",
    description:
      "Pathspec is passed in <file> instead of commandline args. If <file> is exactly - then standard input is used. Pathspec elements are separated by LF or CR/LF. Pathspec elements can be quoted as explained for the configuration variable core.quotePath (see git-config[1]). See also --pathspec-file-nul and global --literal-pathspecs",
    args: {
      name: "File",
      description: "File with pathspec",
      template: "filepaths",
    },
  },
  {
    name: "--pathspec-file-nul",
    description:
      "Only meaningful with --pathspec-from-file. Pathspec elements are separated with NUL character and all other characters are taken literally (including newlines and quotes)",
  },
  {
    name: "--",
    description:
      "This option can be used to separate command-line options from the list of files",
  },
];

const headSuggestions = [
  {
    name: "HEAD",
    icon: "🔻",
    description: "The most recent commit",
  },
  {
    name: "HEAD~<N>",
    description: "A specific number of commits",
    insertValue: "HEAD~",
  },
];

const completionSpec: Fig.Spec = {
  name: "git",
  description: "The stupid content tracker",
  args: {
    name: "alias",
    description: "Custom user defined git alias",
    parserDirectives: {
      alias: async (token, exec) => {
        const result = await exec(`git config --get alias.${token}`);
        if (!result) {
          throw new Error("Failed parsing alias");
        }
        return result;
      },
    },
    isOptional: true,
    generators: gitGenerators.aliases,
  },
  options: [
    {
      name: "--version",
      description: "Output version",
    },
    {
      name: "--help",
      description: "Output help",
    },
    {
      name: "-C",

      args: {
        name: "path",
        template: "folders",
      },
      description: "Run as if git was started in &lt;path&gt;",
    },
    {
      name: "-c",
      insertValue: "-c {cursor}",
      description: "Pass a config parameter to the command",
      args: {
        name: "name=value",
      },
    },
    {
      name: "--exec-path",
      args: {
        name: "path",
        isOptional: true,
        template: "folders",
      },
      description: "Get or set GIT_EXEC_PATH for core Git programs",
    },
    {
      name: "--html-path",
      description: "Print Git’s HTML documentation path",
    },
    {
      name: "--man-path",
      description: "Print the manpath for this version of Git",
    },
    {
      name: "--info-path",
      description: "Print the info path documenting this version of Git",
    },
    {
      name: ["-p", "--paginate"],
      description: "Pipe output into `less` or custom $PAGER",
    },
    {
      name: "--no-pager",
      description: "Do not pipe Git output into a pager",
    },
    {
      name: "--no-replace-objects",
      description: "Do not use replacement refs",
    },
    {
      name: "--no-optional-locks",
      description: "Do not perform optional operations that require lock files",
    },
    {
      name: "--bare",
      description: "Treat the repository as a bare repository",
    },
    {
      name: "--git-dir",
      args: {
        name: "path",
        template: "folders",
      },
      description: "Set the path to the repository dir (`.git`)",
    },
    {
      name: "--work-tree",
      args: {
        name: "path",
        template: "folders",
      },
      description: "Set working tree path",
    },
    {
      name: "--namespace",
      args: {
        name: "name",
      },
      description: "Set the Git namespace",
    },
  ],
  subcommands: [
    {
      name: "blame",
      args: {
        name: "file",
        template: "filepaths",
      },
      options: [
        {
          name: "--incremental",
          description: "Show blame entries as we find them, incrementally",
        },
        {
          name: "-b",
          description:
            "Do not show object names of boundary commits (Default: off)",
        },
        {
          name: "--root",
          description: "Do not treat root commits as boundaries (Default: off)",
        },
        {
          name: "--show-stats",
          description: "Show work cost statistics",
        },
        {
          name: "--progress",
          description: "Force progress reporting",
        },
        {
          name: "--score-debug",
          description: "Show output score for blame entries",
        },
        {
          name: ["-f", "--show-name"],
          description: "Show original filename (Default: auto)",
        },
        {
          name: ["-n,", "--show-number"],
          description: "Show original linenumber (Default: off)",
        },
        {
          name: ["-p", "--porcelain"],
          description: "Show in a format designed for machine consumption",
        },
        {
          name: "--line-porcelain",
          description: "Show porcelain format with per-line commit information",
        },
        {
          name: "-c",
          description:
            "Use the same output mode as git-annotate (Default: off)",
        },
        {
          name: "-t",
          description: "Show raw timestamp (Default: off)",
        },
        {
          name: "-l",
          description: "Show long commit SHA1 (Default: off)",
        },
        {
          name: "-s",
          description: "Suppress author name and timestamp (Default: off)",
        },
        {
          name: ["-e", "--show-email"],
          description: "Show author email instead of name (Default: off)",
        },
        {
          name: "-w",
          description: "Ignore whitespace differences",
        },
        {
          name: "--ignore-rev",
          description: "Ignore <rev> when blaming",
          args: {
            name: "rev",
            generators: gitGenerators.revs,
          },
        },
        {
          name: "--ignore-revs-file",
          description: "Ignore revisions from <file>",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--color-lines",
          description:
            "Color redundant metadata from previous line differently",
        },
        { name: "--color-by-age", description: "Color lines by age" },
        {
          name: "--minimal",
          description: "Spend extra cycles to find better match",
        },
        {
          name: "-S",
          description:
            "Use revisions from <file> instead of calling git-rev-list",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--contents",
          description: "Use <file>'s contents as the final image",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "-C",
          insertValue: "-C{cursor}",
          description: "Find line copies within and across files",
        },
        {
          name: "-M",
          insertValue: "-M{cursor}",
          description: "Find line movements within and across files",
        },
        {
          name: "-L",
          description:
            "Process only line range <start>,<end> or function :<funcname>",
          args: {
            name: "start,end",
          },
        },
        {
          name: "--abbrev",
          insertValue: "--abbrev=",
          description: "Use <n> digits to display object names",
          args: {
            name: "n",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "commit",
      description: "Record changes to the repository",
      args: {
        name: "pathspec",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["-m", "--message"],
          insertValue: "-m '{cursor}'",
          description: "Use the given message as the commit message",
          args: {
            name: "message",
          },
        },
        {
          name: ["-a", "--all"],
          description: "Stage all modified and deleted paths",
        },
        {
          name: "-am",
          insertValue: "-am '{cursor}'",
          description: "Stage all and use given text as commit message",
          args: {
            name: "message",
          },
        },
        {
          name: ["-v", "--verbose"],
          description: "Show unified diff of all file changes",
        },
        {
          name: ["-p", "--patch"],
          description:
            "Use the interactive patch selection interface to chose which changes to commi",
        },
        {
          name: ["-C", "--reuse-message"],
          description:
            "Take an existing commit object, and reuse the log message and the authorship",
          args: {
            name: "commit",
            generators: gitGenerators.commits,
          },
        },
        {
          name: ["-c", "--reedit-message"],
          description:
            "Like -C, but with -c the editor is invoked, so that the user can further edit",
          args: {
            name: "commit",
            generators: gitGenerators.commits,
          },
        },
        {
          name: "--fixup",
          description:
            "Construct a commit message for use with rebase --autosquash. The commit messa",
          args: {
            name: "commit",
            generators: gitGenerators.commits,
          },
        },
        {
          name: "--squash",
          description:
            "Construct a commit message for use with rebase --autosquash. The commit messa",
          args: {
            name: "commit",
            generators: gitGenerators.commits,
          },
        },
        {
          name: "--reset-author",
          description:
            "When used with -C/-c/--amend options, or when committing after a conflicting",
        },
        {
          name: "--short",
          description:
            "When doing a dry-run, give the output in the short-format. See git-status[1]",
        },
        {
          name: "--branch",
          description: "Show the branch and tracking info even in short-format",
        },
        {
          name: "--porcelain",
          description:
            "When doing a dry-run, give the output in a porcelain-ready format. See git-st",
        },
        {
          name: "--long",
          description:
            "When doing a dry-run, give the output in the long-format. Implies --dry-run",
        },
        {
          name: ["-z", "--null"],
          description:
            "When showing short or porcelain status output, print the filename verbatim an",
        },
        {
          name: ["-F", "--file"],
          description:
            "Take the commit message from the given file. Use - to read the message from t",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--author",
          description:
            "Override the commit author. Specify an explicit author using the standard A U",
          args: {
            name: "author",
          },
        },
        {
          name: "--date",
          description: "Override the author date used in the commit",
          args: {
            name: "date",
          },
        },
        {
          name: ["-t", "--template"],
          description:
            "When editing the commit message, start the editor with the contents in the gi",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: ["-s", "--signoff"],
          description:
            "Add a Signed-off-by trailer by the committer at the end of the commit log mes",
        },
        {
          name: "--no-signoff",
          description:
            "Don't add a Signed-off-by trailer by the committer at the end of the commit l",
        },
        {
          name: ["-n", "--no-verify"],
          description:
            "This option bypasses the pre-commit and commit-msg hooks. See also githooks[5]",
        },
        {
          name: "--allow-empty",
          description:
            "Usually recording a commit that has the exact same tree as its sole parent co",
        },
        {
          name: "--allow-empty-message",
          description:
            "Like --allow-empty this command is primarily for use by foreign SCM interface",
        },
        {
          name: "--cleanup",
          description:
            "This option determines how the supplied commit message should be cleaned up b",
          args: {
            name: "mode",
            description:
              "Determines how the supplied commit messaged should be cleaned up before committing",
            suggestions: [
              {
                name: "strip",
                description:
                  "Strip leading and trailing empty lines, trailing whitepace, commentary and collapse consecutive empty lines",
              },
              {
                name: "whitespace",
                description: "Same as strip except #commentary is not removed",
              },
              {
                name: "verbatim",
                description: "Do not change the message at all",
              },
              {
                name: "scissors",
                description:
                  "Same as whitespace except that everything from (and including) the line found below is truncated",
              },
              {
                name: "default",
                description:
                  "Same as strip if the message is to be edited. Otherwise whitespace",
              },
            ],
          },
        },
        {
          name: ["-e", "--edit"],
          description:
            "The message taken from file with -F, command line with -m, and from commit ob",
        },
        {
          name: "--no-edit",
          description:
            "Use the selected commit message without launching an editor. For example, git",
        },
        {
          name: "--amend",
          description:
            "Replace the tip of the current branch by creating a new commit. The recorded",
        },
        {
          name: "--no-post-rewrite",
          description: "Bypass the post-rewrite hook",
        },
        {
          name: ["-i", "--include"],
          description:
            "Before making a commit out of staged contents so far, stage the contents of p",
        },
        {
          name: ["-o", "--only"],
          description:
            "Make a commit by taking the updated working tree contents of the paths specif",
        },
        {
          name: "--pathspec-from-file",
          description:
            "Pathspec is passed in instead of commandline args. If is exactly - then stand",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--pathspec-file-nul",
          description:
            "Only meaningful with --pathspec-from-file. Pathspec elements are separated wi",
        },
        {
          name: ["-u", "--untracked-files"],
          description:
            "Show untracked files. The mode parameter is optional (defaults to all), and i",
          args: {
            name: "mode",
            suggestions: ["no", "normal", "all"],
            isOptional: true,
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress commit summary message",
        },
        {
          name: "--dry-run",
          description:
            "Do not create a commit, but show a list of paths that are to be committed, pa",
        },
        {
          name: "--status",
          description:
            "Include the output of git-status[1] in the commit message template when using",
        },
        {
          name: "--no-status",
          description:
            "Do not include the output of git-status[1] in the commit message template whe",
        },
        {
          name: ["-S", "--gpg-sign"],
          description:
            "GPG-sign commits. The keyid argument is optional and defaults to the committe",
          args: {
            name: "keyid",
            isOptional: true,
          },
        },
        {
          name: "--no-gpg-sign",
          description: "Dont GPG-sign commits",
        },
        {
          name: "--",
          description: "Do not interpret any more arguments as options",
        },
      ],
    },
    {
      name: "config",
      description: "Set author",
      options: [
        {
          name: "--local",
          description: "Default: write to the repository .git/config file",
          args: {
            isVariadic: true,
            suggestions: [
              {
                name: "user.name",
                description: "Set config for username",
                insertValue: "user.name '{cursor}'",
              },
              {
                name: "user.email",
                description: "Set config for email",
                insertValue: "user.email '{cursor}'",
              },
            ],
          },
        },
        {
          name: "--global",
          description:
            "For writing options: write to global ~/.gitconfig file rather than the repository .git/config",
          args: [
            {
              name: "key",
              isVariadic: true,
              suggestions: [
                {
                  name: "user.name",
                  description: "Config for username",
                },
                {
                  name: "user.email",
                  description: "Config for email",
                },
              ],
            },
            {
              name: "value",
              isOptional: true,
            },
          ],
        },
        {
          name: "--replace-all",
          description:
            "Default behavior is to replace at most one line. This replaces all lines matc",
        },
        {
          name: "--add",
          description:
            "Adds a new line to the option without altering any existing values. This is t",
        },
        {
          name: "--get",
          description:
            "Get the value for a given key (optionally filtered by a regex matching the va",
        },
        {
          name: "--get-all",
          description:
            "Like get, but returns all values for a multi-valued key",
        },
        {
          name: "--get-regexp",
          description:
            "Like --get-all, but interprets the name as a regular expression and writes ou",
        },
        {
          name: "--get-urlmatch",
          description:
            "When given a two-part name section.key, the value for section..key whose part",
          args: [
            {
              name: "name",
            },
            {
              name: "url",
            },
          ],
        },
        {
          name: "--system",
          description:
            "For writing options: write to system-wide $(prefix)/etc/gitconfig rather than",
        },
        {
          name: "--worktree",
          description:
            "Similar to --local except that.git/config.worktree is read from or written to",
        },
        {
          name: ["-f", "--file"],
          description:
            "Use the given config file instead of the one specified by GIT_CONFIG",
          args: {
            name: "config-file",
            template: "filepaths",
          },
        },
        {
          name: "--blob",
          description:
            "Similar to --file but use the given blob instead of a file. E.g. you can use",
          args: {
            name: "blob",
          },
        },
        {
          name: "--remove-section",
          description: "Remove the given section from the configuration file",
        },
        {
          name: "--rename-section",
          description: "Rename the given section to a new name",
        },
        {
          name: "--unset",
          description: "Remove the line matching the key from config file",
        },
        {
          name: "--unset-all",
          description: "Remove all lines matching the key from config file",
        },
        {
          name: ["-l", "--list"],
          description:
            "List all variables set in config file, along with their values",
        },
        {
          name: "--fixed-value",
          description:
            "When used with the value-pattern argument, treat value-pattern as an exact st",
        },
        {
          name: "--type",
          description:
            "Git config will ensure that any input or output is valid under the given type",
          args: {
            name: "type",
            suggestions: [
              "bool",
              "int",
              "bool-or-int",
              "path",
              "expiry-date",
              "color",
            ],
          },
        },
        {
          name: "--no-type",
          description:
            "Un-sets the previously set type specifier (if one was previously set). This o",
        },
        {
          name: ["-z", "--null"],
          description:
            "For all options that output values and/or keys, always end values with the nu",
        },
        {
          name: "--name-only",
          description:
            "Output only the names of config variables for --list or --get-regexp",
        },
        {
          name: "--show-origin",
          description:
            "Augment the output of all queried config options with the origin type (file,",
        },
        {
          name: "--show-scope",
          description:
            "Similar to --show-origin in that it augments the output of all queried config",
        },
        {
          name: "--get-colorbool",
          description:
            'Find the color setting for name (e.g. color.diff) and output "true" or "false',
          args: {
            name: "name",
          },
        },
        {
          name: "--get-color",
          description:
            "Find the color configured for name (e.g. color.diff.new) and output it as the",
          args: [
            {
              name: "name",
            },
            {
              name: "default",
              isOptional: true,
            },
          ],
        },
        {
          name: ["-e", "--edit"],
          description:
            "Opens an editor to modify the specified config file; either --system, --globa",
        },
        {
          name: "--includes",
          description:
            "Respect include.* directives in config files when looking up values. Defaults",
        },
        {
          name: "--no-includes",
          description:
            "Respect include.* directives in config files when looking up values. Defaults",
        },
        {
          name: "--default",
          description:
            "When using --get, and the requested variable is not found, behave as if were",
          args: {
            name: "value",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "rebase",
      description: "Reapply commits on top of another base tip",
      options: [
        {
          name: "--onto",
          description:
            "Starting point at which to create the new commits. If the --onto option is not specified, the starting point is <upstream>. May be any valid commit, and not just an existing branch name. As a special case, you may use 'A...B' as a shortcut for the merge base of A and B if there is exactly one merge base. You can leave out at most one of A and B, in which case it defaults to HEAD",
          args: {
            name: "newbase",
            generators: gitGenerators.commits,
          },
        },

        {
          name: "--keep-base",
          description:
            "Set the starting point at which to create the new commits to the merge base of <upstream> <branch>. Running git rebase --keep-base <upstream> <branch> is equivalent to running git rebase --onto <upstream>…​ <upstream>. This option is useful in the case where one is developing a feature on top of an upstream branch. While the feature is being worked on, the upstream branch may advance and it may not be the best idea to keep rebasing on top of the upstream but to keep the base commit as-is. Although both this option and --fork-point find the merge base between <upstream> and <branch>, this option uses the merge base as the starting point on which new commits will be created, whereas --fork-point uses the merge base to determine the set of commits which will be rebased",
        },

        {
          name: "--continue",
          description:
            "Restart the rebasing process after having resolved a merge conflict",
        },

        {
          name: "--abort",
          description:
            "Abort the rebase operation and reset HEAD to the original branch. If <branch> was provided when the rebase operation was started, then HEAD will be reset to <branch>. Otherwise HEAD will be reset to where it was when the rebase operation was started",
        },

        {
          name: "--quit",
          description:
            "Abort the rebase operation but HEAD is not reset back to the original branch. The index and working tree are also left unchanged as a result. If a temporary stash entry was created using --autostash, it will be saved to the stash list",
        },

        {
          name: "--apply",
          description:
            "Use applying strategies to rebase (calling git-am internally). This option may become a no-op in the future once the merge backend handles everything the apply one does",
        },

        {
          name: "--empty",
          description:
            "How to handle commits that are not empty to start and are not clean cherry-picks of any upstream commit, but which become empty after rebasing (because they contain a subset of already upstream changes). With drop (the default), commits that become empty are dropped. With keep, such commits are kept. With ask (implied by --interactive), the rebase will halt when an empty commit is applied allowing you to choose whether to drop it, edit files more, or just commit the empty changes. Other options, like --exec, will use the default of drop unless -i/--interactive is explicitly specified. Note that commits which start empty are kept (unless --no-keep-empty is specified), and commits which are clean cherry-picks (as determined by git log --cherry-mark ...) are detected and dropped as a preliminary step (unless --reapply-cherry-picks is passed)",
          args: {
            isOptional: true,
            suggestions: ["drop", "keep", "ask"],
          },
        },

        {
          name: "--no-keep-empty",
          description:
            "Do not keep commits that start empty before the rebase (i.e. that do not change anything from its parent) in the result. The default is to keep commits which start empty, since creating such commits requires passing the --allow-empty override flag to git commit, signifying that a user is very intentionally creating such a commit and thus wants to keep it. Usage of this flag will probably be rare, since you can get rid of commits that start empty by just firing up an interactive rebase and removing the lines corresponding to the commits you don’t want. This flag exists as a convenient shortcut, such as for cases where external tools generate many empty commits and you want them all removed. For commits which do not start empty but become empty after rebasing, see the --empty flag",
        },

        {
          name: "--keep-empty",
          description:
            "Keep commits that start empty before the rebase (i.e. that do not change anything from its parent) in the result. The default is to keep commits which start empty, since creating such commits requires passing the --allow-empty override flag to git commit, signifying that a user is very intentionally creating such a commit and thus wants to keep it. Usage of this flag will probably be rare, since you can get rid of commits that start empty by just firing up an interactive rebase and removing the lines corresponding to the commits you don’t want. This flag exists as a convenient shortcut, such as for cases where external tools generate many empty commits and you want them all removed. For commits which do not start empty but become empty after rebasing, see the --empty flag",
        },

        {
          name: "--reapply-cherry-picks",
          description:
            "Reapply all clean cherry-picks of any upstream commit instead of preemptively dropping them. (If these commits then become empty after rebasing, because they contain a subset of already upstream changes, the behavior towards them is controlled by the --empty flag). By default (or if --no-reapply-cherry-picks is given), these commits will be automatically dropped. Because this necessitates reading all upstream commits, this can be expensive in repos with a large number of upstream commits that need to be read. --reapply-cherry-picks allows rebase to forgo reading all upstream commits, potentially improving performance",
        },

        {
          name: "--no-reapply-cherry-picks",
          description:
            "Do not reapply all clean cherry-picks of any upstream commit instead of preemptively dropping them",
        },

        {
          name: "--allow-empty-message",
          description:
            "No-op. Rebasing commits with an empty message used to fail and this option would override that behavior, allowing commits with empty messages to be rebased. Now commits with an empty message do not cause rebasing to halt",
        },

        {
          name: "--skip",
          description:
            "Restart the rebasing process by skipping the current patch",
        },

        {
          name: "--edit-todo",
          description: "Edit the todo list during an interactive rebase",
        },

        {
          name: "--show-current-patch",
          description:
            "Show the current patch in an interactive rebase or when rebase is stopped because of conflicts. This is the equivalent of git show REBASE_HEAD",
        },

        {
          name: ["-m", "--merge"],
          description:
            "Use merging strategies to rebase. When the recursive (default) merge strategy is used, this allows rebase to be aware of renames on the upstream side. This is the default. Note that a rebase merge works by replaying each commit from the working branch on top of the <upstream> branch. Because of this, when a merge conflict happens, the side reported as ours is the so-far rebased series, starting with <upstream>, and theirs is the working branch. In other words, the sides are swapped",
        },

        {
          name: ["-s", "--strategy"],
          isRepeatable: true,
          description:
            "Use the given merge strategy. If there is no -s option git merge-recursive is used instead. This implies --merge. Because git rebase replays each commit from the working branch on top of the <upstream> branch using the given strategy, using the ours strategy simply empties all patches from the <branch>, which makes little sense",
          args: {
            name: "strategy",
            isVariadic: true,
            suggestions: ["resolve", "recursive", "octopus", "ours", "subtree"],
          },
        },

        {
          name: ["-X", "--strategy-option"],
          description:
            "Pass the <strategy-option> through to the merge strategy. This implies --merge and, if no strategy has been specified, -s recursive. Note the reversal of ours and theirs as noted above for the -m option",
          args: {
            name: "option",
            suggestions: [
              "ours",
              "theirs",
              "patience",
              "diff-algorithm",
              "diff-algorithm=patience",
              "diff-algorithm=minimal",
              "diff-algorithm=histogram",
              "diff-algorithm=myers",
              "ignore-space-change",
              "ignore-all-space",
              "ignore-space-at-eol",
              "ignore-cr-at-eol",
              "renormalize",
              "no-renormalize",
              "no-renames",
              "find-renames",
              "subtree",
            ],
          },
        },

        {
          name: "--rerere-autoupdate",
          description:
            "Allow the rerere mechanism to update the index with the result of auto-conflict resolution if possible",
        },

        {
          name: "--no-rerere-autoupdate",
          description:
            "Allow the rerere mechanism to update the index with the result of auto-conflict resolution if possible",
        },

        {
          name: ["-S", "--gpg-sign"],
          description:
            "GPG-sign commits. The keyid argument is optional and defaults to the committer identity; if specified, it must be stuck to the option without a space. --no-gpg-sign is useful to countermand both commit.gpgSign configuration variable, and earlier --gpg-sign",
          args: {
            name: "keyid",
            isOptional: true,
          },
        },

        {
          name: "--no-gpg-sign",
          description:
            "Do not GPG-sign commits.--no-gpg-sign is useful to countermand both commit.gpgSign configuration variable, and earlier --gpg-sign",
        },

        {
          name: ["-q", "--quiet"],
          description: "Be quiet. Implies --no-stat",
        },

        {
          name: ["-v", "--verbose"],
          description: "Be verbose. Implies --stat",
        },

        {
          name: "--stat",
          description:
            "Show a diffstat of what changed upstream since the last rebase. The diffstat is also controlled by the configuration option rebase.stat",
        },

        {
          name: ["-n", "--no-stat"],
          description: "Do not show a diffstat as part of the rebase process",
        },

        {
          name: "--no-verify",
          description:
            "This option bypasses the pre-rebase hook. See also githooks[5]",
        },

        {
          name: "--verify",
          description:
            "Allows the pre-rebase hook to run, which is the default. This option can be used to override --no-verify. See also githooks[5]",
        },

        {
          name: "-C",
          description:
            "Ensure at least <n> lines of surrounding context match before and after each change. When fewer lines of surrounding context exist they all must match. By default no context is ever ignored. Implies --apply",
          args: {
            name: "n",
          },
        },

        {
          name: ["--no-ff", "--force-rebase", "-f"],
          description:
            "Individually replay all rebased commits instead of fast-forwarding over the unchanged ones. This ensures that the entire history of the rebased branch is composed of new commits. You may find this helpful after reverting a topic branch merge, as this option recreates the topic branch with fresh commits so it can be remerged successfully without needing to 'revert the reversion' (see the revert-a-faulty-merge How-To for details)",
        },

        {
          name: "--fork-point",
          description:
            "Use reflog to find a better common ancestor between <upstream> and <branch> when calculating which commits have been introduced by <branch>. When --fork-point is active, fork_point will be used instead of <upstream> to calculate the set of commits to rebase, where fork_point is the result of git merge-base --fork-point <upstream> <branch> command (see git-merge-base[1]). If fork_point ends up being empty, the <upstream> will be used as a fallback. If <upstream> is given on the command line, then the default is --no-fork-point, otherwise the default is --fork-point. If your branch was based on <upstream> but <upstream> was rewound and your branch contains commits which were dropped, this option can be used with --keep-base in order to drop those commits from your branch",
        },

        {
          name: "--no-fork-point",
          description:
            "Do not use reflog to find a better common ancestor between <upstream> and <branch> when calculating which commits have been introduced by <branch>. When --fork-point is active, fork_point will be used instead of <upstream> to calculate the set of commits to rebase, where fork_point is the result of git merge-base --fork-point <upstream> <branch> command (see git-merge-base[1]). If fork_point ends up being empty, the <upstream> will be used as a fallback. If <upstream> is given on the command line, then the default is --no-fork-point, otherwise the default is --fork-point. If your branch was based on <upstream> but <upstream> was rewound and your branch contains commits which were dropped, this option can be used with --keep-base in order to drop those commits from your branch",
        },

        {
          name: "--ignore-whitespace",
          description:
            "Ignore whitespace differences when trying to reconcile differences. Currently, each backend implements an approximation of this behavior: apply backend: When applying a patch, ignore changes in whitespace in context lines. Unfortunately, this means that if the 'old' lines being replaced by the patch differ only in whitespace from the existing file, you will get a merge conflict instead of a successful patch application. merge backend: Treat lines with only whitespace changes as unchanged when merging. Unfortunately, this means that any patch hunks that were intended to modify whitespace and nothing else will be dropped, even if the other side had no changes that conflicted",
        },

        {
          name: "--whitespace",
          description:
            "This flag is passed to the git apply program (see git-apply[1]) that applies the patch. Implies --apply",
          args: {
            name: "option",
          },
        },

        {
          name: "--committer-date-is-author-date",
          description:
            "Instead of using the current time as the committer date, use the author date of the commit being rebased as the committer date. This option implies --force-rebase",
        },

        {
          name: ["--ignore-date", "--reset-author-date"],
          description:
            "Instead of using the author date of the original commit, use the current time as the author date of the rebased commit. This option implies --force-rebase",
        },

        {
          name: "--signoff",
          description:
            "Add a Signed-off-by trailer to all the rebased commits. Note that if --interactive is given then only commits marked to be picked, edited or reworded will have the trailer added",
        },

        {
          name: ["-i", "--interactive"],
          description:
            "Make a list of the commits which are about to be rebased. Let the user edit that list before rebasing. This mode can also be used to split commits (see SPLITTING COMMITS below). The commit list format can be changed by setting the configuration option rebase.instructionFormat. A customized instruction format will automatically have the long commit hash prepended to the format",
        },

        {
          name: ["-r", "--rebase-merges"],
          description:
            "By default, a rebase will simply drop merge commits from the todo list, and put the rebased commits into a single, linear branch. With --rebase-merges, the rebase will instead try to preserve the branching structure within the commits that are to be rebased, by recreating the merge commits. Any resolved merge conflicts or manual amendments in these merge commits will have to be resolved/re-applied manually. By default, or when no-rebase-cousins was specified, commits which do not have <upstream> as direct ancestor will keep their original branch point, i.e. commits that would be excluded by git-log[1]'s --ancestry-path option will keep their original ancestry by default. If the rebase-cousins mode is turned on, such commits are instead rebased onto <upstream> (or <onto>, if specified). The --rebase-merges mode is similar in spirit to the deprecated --preserve-merges but works with interactive rebases, where commits can be reordered, inserted and dropped at will. It is currently only possible to recreate the merge commits using the recursive merge strategy; Different merge strategies can be used only via explicit exec git merge -s <strategy> [...] commands",
          args: {
            name: "mode",
            isOptional: true,
            suggestions: ["rebase-cousins", "no-rebase-cousins"],
          },
        },

        {
          name: ["-x", "--exec"],
          insertValue: "-x '{cursor}'",
          description:
            "Append 'exec <cmd>' after each line creating a commit in the final history. <cmd> will be interpreted as one or more shell commands. Any command that fails will interrupt the rebase, with exit code 1. You may execute several commands by either using one instance of --exec with several commands: git rebase -i --exec 'cmd1 && cmd2 && ...' or by giving more than one --exec: git rebase -i --exec 'cmd1' --exec 'cmd2' --exec ... If --autosquash is used, 'exec' lines will not be appended for the intermediate commits, and will only appear at the end of each squash/fixup series. This uses the --interactive machinery internally, but it can be run without an explicit --interactive",
          args: {
            name: "cmd",
          },
        },

        {
          name: "--root",
          description:
            "Rebase all commits reachable from <branch>, instead of limiting them with an <upstream>. This allows you to rebase the root commit(s) on a branch. When used with --onto, it will skip changes already contained in <newbase> (instead of <upstream>) whereas without --onto it will operate on every change. When used together with both --onto and --preserve-merges, all root commits will be rewritten to have <newbase> as parent instead",
        },

        {
          name: "--autosquash",
          description:
            "When the commit log message begins with 'squash! …​' (or 'fixup! …​'), and there is already a commit in the todo list that matches the same ..., automatically modify the todo list of rebase -i so that the commit marked for squashing comes right after the commit to be modified, and change the action of the moved commit from pick to squash (or fixup). A commit matches the ... if the commit subject matches, or if the ... refers to the commit’s hash. As a fall-back, partial matches of the commit subject work, too. The recommended way to create fixup/squash commits is by using the --fixup/--squash options of git-commit[1]",
        },

        {
          name: "--no-autosquash",
          description:
            "When the commit log message begins with 'squash! …' (or 'fixup! …'), and there is already a commit in the todo list that matches the same ..., automatically modify the todo list of rebase -i so that the commit marked for squashing comes right after the commit to be modified, and change the action of the moved commit from pick to squash (or fixup). A commit matches the ... if the commit subject matches, or if the ... refers to the commit’s hash. As a fall-back, partial matches of the commit subject work, too. The recommended way to create fixup/squash commits is by using the --fixup/--squash options of git-commit[1]",
        },

        {
          name: "--autostash",
          description:
            "Automatically create a temporary stash entry before the operation begins, and apply it after the operation ends. This means that you can run rebase on a dirty worktree. However, use with care: the final stash application after a successful rebase might result in non-trivial conflicts",
        },

        {
          name: "--no-autostash",
          description:
            "Do not automatically create a temporary stash entry before the operation begins, and apply it after the operation ends. This means that you can run rebase on a dirty worktree. However, use with care: the final stash application after a successful rebase might result in non-trivial conflicts",
        },

        {
          name: "--reschedule-failed-exec",
          description:
            "Automatically reschedule exec commands that failed. This only makes sense in interactive mode (or when an --exec option was provided)",
        },

        {
          name: "--no-reschedule-failed-exec",
          description:
            "Do not automatically reschedule exec commands that failed. This only makes sense in interactive mode (or when an --exec option was provided)",
        },
      ],
      args: [
        {
          name: "base",
          generators: gitGenerators.localBranches,
          isOptional: true,
        },
        {
          name: "new base",
          generators: gitGenerators.localBranches,
          isOptional: true,
        },
      ],
    },
    {
      name: "add",
      description: "Add file contents to the index",
      options: addOptions,
      args: {
        name: "pathspec",
        isVariadic: true,
        isOptional: true,

        // We have a special setting for dot in the vuejs app

        // suggestions: [
        //     {
        //         name: ".",
        //         description: "current directory",
        //         insertValue: ".",
        //         icon: "fig://icon?type=folder"
        //     }
        // ],
        generators: [gitGenerators.files_for_staging, { template: "folders" }],
      },
    },
    {
      name: "stage",
      description: "Add file contents to the staging area",
      options: addOptions,
      args: {
        name: "pathspec",
        isVariadic: true,
        isOptional: true,

        // We have a special setting for dot in the vuejs app

        // suggestions: [
        //     {
        //         name: ".",
        //         description: "current directory",
        //         insertValue: ".",
        //         icon: "fig://icon?type=folder"
        //     }
        // ],
        generators: gitGenerators.files_for_staging,
      },
    },
    {
      name: "status",
      description: "Show the working tree status",
      options: [
        {
          name: ["-s", "--short"],
          description: "Give the output in the short-format",
        },
        {
          name: ["-v", "--verbose"],
          description: "Be verbose",
        },
        {
          name: ["-b", "--branch"],
          description: "Show branch information",
        },
        {
          name: "--show-stash",
          description: "Show stash information",
        },
        {
          name: "--porcelain",
          description: "Give the output in the short-format",
          args: {
            name: "version",
            isOptional: true,
          },
        },
        {
          name: "--ahead-behind",
          description: "Display full ahead/behind values",
        },
        {
          name: "--no-ahead-behind",
          description: "Do not display full ahead/behind values",
        },
        {
          name: "--column",
          description: "Display full ahead/behind values",
          args: {
            name: "options",
            description: "Defaults to always",
            isOptional: true,
          },
        },
        {
          name: "--no-column",
          description: "Do not display untracked files in columns",
          args: {
            name: "options",
            description: "Defaults to never",
            isOptional: true,
          },
        },
        {
          name: "--long",
          description: "Show status in long format (default)",
        },
        {
          name: ["-z", "--null"],
          description: "Terminate entries with NUL",
        },
        {
          name: ["-u", "--untracked-files"],
          description: "Show untracked files",
          args: {
            isOptional: true,
            suggestions: [
              {
                name: "all",
                description: "(Default)",
              },
              {
                name: "normal",
              },
              {
                name: "no",
              },
            ],
          },
        },
        {
          name: "--ignore-submodules",
          description: "Ignore changes to submodules when looking for changes",
          args: {
            name: "when",
            isOptional: true,
            suggestions: [
              {
                name: "all",
                description: "(Default)",
              },
              {
                name: "dirty",
              },
              {
                name: "untracked",
              },
              {
                name: "none",
              },
            ],
          },
        },
        {
          name: "--ignored",
          description: "Show ignored files",
          args: {
            isOptional: true,
            suggestions: [
              {
                name: "traditional",
                description: "(Default)",
              },
              {
                name: "matching",
              },
              {
                name: "no",
              },
            ],
          },
        },
        {
          name: "--no-renames",
          description: "Do not detect renames",
        },
        {
          name: "--renames",
          description:
            "Turn on rename detection regardless of user configuration",
        },
        {
          name: "--find-renames",
          description:
            "Turn on rename detection, optionally setting the similarity threshold",
          args: {
            name: "n",
            isOptional: true,
          },
        },
      ],
      args: {
        name: "pathspec",
        isVariadic: true,
        isOptional: true,

        // We have a special setting for dot in the vuejs app

        // suggestions: [
        //     {
        //         name: ".",
        //         description: "current directory",
        //         insertValue: ".",
        //         icon: "fig://icon?type=folder"
        //     }
        // ],
        generators: gitGenerators.files_for_staging,
      },
    },
    {
      name: "clean",
      description: "Shows which files would be removed from working directory",
      options: [
        {
          name: "--staged",

          description:
            "Don’t actually remove anything, just show what would be done",
        },
        {
          name: ["-f", "--force"],
          description:
            "If the Git configuration variable clean.requireForce is not set to false, git clean will refuse to delete files or directories unless given -f or -i",
        },
      ],
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "revert",
      description:
        "Create new commit that undoes all of the changes made in <commit>, then apply it to the current branch",
      args: {
        name: "commit",
        isOptional: true,
        generators: gitGenerators.commits,
      },
    },
    {
      name: "ls-remote",
      description: "List references in a remote repository",
    },
    {
      name: "push",
      description: "Update remote refs",
      options: [
        {
          name: "--all",
          description:
            "Push all branches (i.e. refs under refs/heads/); cannot be used with other <refspec>",
        },

        {
          name: "--prune",
          description:
            "Remove remote branches that don't have a local counterpart",
        },

        {
          name: "--mirror",
          description:
            "Instead of naming each ref to push, specifies that all refs under refs/ be mirrored to the remote repository",
        },

        {
          name: ["-n", "--dry-run"],
          description: "Do everything except actually send the updates",
        },

        {
          name: "--porcelain",
          description:
            "Produce machine-readable output. The output status line for each ref will be tab-separated and sent to stdout instead of stderr",
        },

        {
          name: ["-d", "--delete"],
          description:
            "All listed refs are deleted from the remote repository. This is the same as prefixing all refs with a colon",
        },
        {
          name: "--tags",
          description:
            "All refs under refs/tags are pushed, in addition to refspecs explicitly listed on the command line",
        },

        {
          name: "--follow-tags",
          description:
            "Push all the refs that would be pushed without this option, and also push annotated tags in refs/tags that are missing from the remote but are pointing at commit-ish that are reachable from the refs being pushed. This can also be specified with configuration variable push.followTags",
        },

        {
          name: "--signed",
          description:
            "GPG-sign the push request to update refs on the receiving side, to allow it to be checked by the hooks and/or be logged. If false or --no-signed, no signing will be attempted. If true or --signed, the push will fail if the server does not support signed pushes. If set to if-asked, sign if and only if the server supports signed pushes. The push will also fail if the actual call to gpg --sign fails. See git-receive-pack(1) for the details on the receiving end",
          args: {
            isOptional: true,
            suggestions: ["true", "false", "if-asked"],
          },
        },

        {
          name: "--no-signed",
          description:
            "GPG-sign the push request to update refs on the receiving side, to allow it to be checked by the hooks and/or be logged. If false or --no-signed, no signing will be attempted. If true or --signed, the push will fail if the server does not support signed pushes. If set to if-asked, sign if and only if the server supports signed pushes. The push will also fail if the actual call to gpg --sign fails. See git-receive-pack(1) for the details on the receiving end",
        },

        {
          name: "--atomic",
          description:
            "Use an atomic transaction on the remote side if available. Either all refs are updated, or on error, no refs are updated. If the server does not support atomic pushes the push will fail",
        },

        {
          name: "--no-atomic",
          description:
            "Use an atomic transaction on the remote side if available. Either all refs are updated, or on error, no refs are updated. If the server does not support atomic pushes the push will fail",
        },

        {
          name: ["-f", "--force"],
          description:
            "Usually, the command refuses to update a remote ref that is not an ancestor of the local ref used to overwrite it. Also, when --force-with-lease option is used, the command refuses to update a remote ref whose current value does not match what is expected. This flag disables these checks, and can cause the remote repository to lose commits; use it with care",
        },

        {
          name: "--repo",
          insertValue: "--repo=",
          description:
            "This option is equivalent to the <repository> argument. If both are specified, the command-line argument takes precedence",
          args: {
            name: "repository",
          },
        },

        {
          name: ["-u", "--set-upstream"],
          description:
            "For every branch that is up to date or successfully pushed, add upstream (tracking) reference, used by argument-less git-pull(1) and other commands",
        },

        {
          name: "--thin",
          description:
            "These options are passed to git-send-pack(1). A thin transfer significantly reduces the amount of sent data when the sender and receiver share many of the same objects in common. The default is --thin",
        },
        {
          name: "--no-thin",
          description:
            "These options are passed to git-send-pack(1). A thin transfer significantly reduces the amount of sent data when the sender and receiver share many of the same objects in common. The default is --thin",
        },

        {
          name: ["-q", "--quiet"],
          description:
            "Suppress all output, including the listing of updated refs, unless an error occurs. Progress is not reported to the standard error stream",
        },

        { name: ["-v", "--verbose"], description: "Run verbosely" },

        {
          name: "--progress",
          description:
            "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless -q is specified. This flag forces progress status even if the standard error stream is not directed to a terminal",
        },

        {
          name: "--no-recurse-submodules",
          description:
            "May be used to make sure all submodule commits used by the revisions to be pushed are available on a remote-tracking branch. If check is used Git will verify that all submodule commits that changed in the revisions to be pushed are available on at least one remote of the submodule. If any commits are missing the push will be aborted and exit with non-zero status. If on-demand is used all submodules that changed in the revisions to be pushed will be pushed. If on-demand was not able to push all necessary revisions it will also be aborted and exit with non-zero status. If only is used all submodules will be recursively pushed while the superproject is left unpushed. A value of no or using --no-recurse-submodules can be used to override the push.recurseSubmodules configuration variable when no submodule recursion is required",
        },

        {
          name: "--recurse-submodules",
          insertValue: "--recurse-submodules=",
          description:
            "May be used to make sure all submodule commits used by the revisions to be pushed are available on a remote-tracking branch. If check is used Git will verify that all submodule commits that changed in the revisions to be pushed are available on at least one remote of the submodule. If any commits are missing the push will be aborted and exit with non-zero status. If on-demand is used all submodules that changed in the revisions to be pushed will be pushed. If on-demand was not able to push all necessary revisions it will also be aborted and exit with non-zero status. If only is used all submodules will be recursively pushed while the superproject is left unpushed. A value of no or using --no-recurse-submodules can be used to override the push.recurseSubmodules configuration variable when no submodule recursion is required",
          args: {
            suggestions: ["check", "on-demand", "only", "no"],
          },
        },

        {
          name: "--verify",
          description:
            "Turn on the pre-push hook. The default is --verify, giving the hook a chance to prevent the push. With",
        },

        {
          name: "--no-verify",
          description:
            "Turn off the pre-push hook. The default is --verify, giving the hook a chance to prevent the push. With",
        },

        {
          name: ["-4", "--ipv4"],
          description: "Use IPv4 addresses only, ignoring IPv6 addresses",
        },

        {
          name: ["-6", "--ipv6"],
          description: "Use IPv6 addresses only, ignoring IPv4 addresses",
        },

        {
          name: ["-o", "--push-option"],

          description:
            "Transmit the given string to the server, which passes them to the pre-receive as well as the post-receive hook. The given string must not contain a NUL or LF character. When multiple --push-option=<option> are given, they are all sent to the other side in the order listed on the command line. When no --push-option=<option> is given from the command line, the values of configuration variable push.pushOption are used instead",
          args: {
            name: "option",
          },
        },

        {
          name: ["--receive-pack", "--exec"],
          description:
            "Path to the git-receive-pack program on the remote end. Sometimes useful when pushing to a remote repository over ssh, and you do not have the program in a directory on the default $PATH",
          args: {
            name: "git-receive-pack",
          },
        },

        {
          name: "--no-force-with-lease",
          description:
            "Cancel all the previous --force-with-lease on the command line",
        },

        {
          name: "--force-with-lease",
          description:
            "Protect the named ref (alone), if it is going to be updated, by requiring its current value to be the same as the specified value <expect> (which is allowed to be different from the remote-tracking branch we have for the refname, or we do not even have to have such a remote-tracking branch when this form is used). If <expect> is the empty string, then the named ref must not already exist",
          args: {
            name: "refname[:expect]",
            isOptional: true,
          },
        },
      ],
      args: [
        {
          name: "remote",
          isOptional: true,
          generators: gitGenerators.remotes,
        },
        {
          name: "branch",
          isOptional: true,
          generators: gitGenerators.localBranches,
        },
      ],
    },
    {
      name: "pull",
      description: "Integrate with another repository",
      options: [
        {
          name: ["--rebase", "-r"],
          isDangerous: true,
          description:
            "Fetch the remote’s copy of current branch and rebases it into the local copy",
          args: {
            isOptional: true,
            name: "remote",
            generators: gitGenerators.remotes,
            suggestions: ["false", "true", "merges", "preserve", "interactive"],
          },
        },
        { name: "--no-rebase", description: "Override earlier --rebase" },
        {
          name: "--commit",
          description:
            "Perform the merge and commit the result. This option can be used to override --no-commit",
        },

        {
          name: "--no-commit",
          description:
            "Perform the merge and stop just before creating a merge commit, to give the user a chance to inspect and further tweak the merge result before committing",
        },

        {
          name: ["--edit", "-e"],
          description:
            "Invoke an editor before committing successful mechanical merge to further edit the auto-generated merge message, so that the user can explain and justify the merge",
        },

        {
          name: "--no-edit",
          description:
            "The --no-edit option can be used to accept the auto-generated message (this is generally discouraged). The --edit (or -e) option is still useful if you are giving a draft message with the -m option from the command line and want to edit it in the editor",
        },

        {
          name: "--cleanup",
          description:
            "This option determines how the merge message will be cleaned up before committing. See git-commit[1] for more details. In addition, if the <mode> is given a value of scissors, scissors will be appended to MERGE_MSG before being passed on to the commit machinery in the case of a merge conflict",
          insertValue: "--cleanup=",
          args: {
            name: "mode",
            suggestions: [
              "strip",
              "whitespace",
              "verbatim",
              "scissors",
              "default",
            ],
          },
        },

        {
          name: "--ff",
          description:
            "When possible resolve the merge as a fast-forward (only update the branch pointer to match the merged branch; do not create a merge commit). When not possible (when the merged-in history is not a descendant of the current history), create a merge commit",
        },

        {
          name: "--no-ff",
          description:
            "Create a merge commit in all cases, even when the merge could instead be resolved as a fast-forward",
        },

        {
          name: "--ff-only",
          description:
            "Resolve the merge as a fast-forward when possible. When not possible, refuse to merge and exit with a non-zero status",
        },

        {
          name: ["-S", "--gpg-sign"],
          description:
            "GPG-sign the resulting merge commit. The keyid argument is optional and defaults to the committer identity; if specified, it must be stuck to the option without a space",
          args: {
            name: "keyid",
            isOptional: true,
          },
        },

        {
          name: "--no-gpg-sign",
          description:
            "Is useful to countermand both commit.gpgSign configuration variable, and earlier --gpg-sign",
        },

        {
          name: "--log",
          description:
            "In addition to branch names, populate the log message with one-line descriptions from at most <n> actual commits that are being merged. See also git-fmt-merge-msg[1]",
          args: {
            name: "n",
            isOptional: true,
          },
        },

        {
          name: "--no-log",
          description:
            "Do not list one-line descriptions from the actual commits being merged",
        },

        {
          name: "--signoff",
          description:
            "Add a Signed-off-by trailer by the committer at the end of the commit log message. The meaning of a signoff depends on the project to which you’re committing. For example, it may certify that the committer has the rights to submit the work under the project’s license or agrees to some contributor representation, such as a Developer Certificate of Origin. (See http://developercertificate.org for the one used by the Linux kernel and Git projects.) Consult the documentation or leadership of the project to which you’re contributing to understand how the signoffs are used in that project",
        },

        {
          name: "--no-signoff",
          description:
            "Can be used to countermand an earlier --signoff option on the command line",
        },

        {
          name: "--stat",
          description:
            "Show a diffstat at the end of the merge. The diffstat is also controlled by the configuration option merge.stat",
        },

        {
          name: ["-n", "--no-stat"],
          description: "Do not show a diffstat at the end of the merge",
        },

        {
          name: "--squash",
          description:
            "With --squash, --commit is not allowed, and will fail. Produce the working tree and index state as if a real merge happened (except for the merge information), but do not actually make a commit, move the HEAD, or record $GIT_DIR/MERGE_HEAD (to cause the next git commit command to create a merge commit). This allows you to create a single commit on top of the current branch whose effect is the same as merging another branch (or more in case of an octopus)",
        },

        {
          name: "--no-squash",
          description:
            "Perform the merge and commit the result. This option can be used to override --squash",
        },

        {
          name: "--no-verify",
          description:
            "This option bypasses the pre-merge and commit-msg hooks. See also githooks[5]",
        },

        {
          name: ["-s", "--strategy"],
          description:
            "Use the given merge strategy; can be supplied more than once to specify them in the order they should be tried. If there is no -s option, a built-in list of strategies is used instead (git merge-recursive when merging a single head, git merge-octopus otherwise)",
          args: {
            name: "strategy",
            isVariadic: true,
            suggestions: ["resolve", "recursive", "octopus", "ours", "subtree"],
          },
        },

        {
          name: ["-X", "--strategy-option"],
          description:
            "Pass merge strategy specific option through to the merge strategy",
          args: {
            name: "option",
            suggestions: [
              "ours",
              "theirs",
              "patience",
              "diff-algorithm",
              "diff-algorithm=patience",
              "diff-algorithm=minimal",
              "diff-algorithm=histogram",
              "diff-algorithm=myers",
              "ignore-space-change",
              "ignore-all-space",
              "ignore-space-at-eol",
              "ignore-cr-at-eol",
              "renormalize",
              "no-renormalize",
              "no-renames",
              "find-renames",
              "subtree",
            ],
          },
        },

        {
          name: "--verify-signatures",
          description:
            "Verify that the tip commit of the side branch being merged is signed with a valid key, i.e. a key that has a valid uid: in the default trust model, this means the signing key has been signed by a trusted key. If the tip commit of the side branch is not signed with a valid key, the merge is aborted",
        },

        {
          name: "--no-verify-signatures",
          description:
            "Do not verify that the tip commit of the side branch being merged is signed with a valid key",
        },

        {
          name: "--summary",
          description:
            "Synonym to --stat ; this is deprecated and will be removed in the future",
        },

        {
          name: "--no-summary",
          description:
            "Synonym to --no-stat ; this is deprecated and will be removed in the future",
        },

        {
          name: ["-q", "--quiet"],
          description: "Operate quietly. Implies --no-progress",
        },

        { name: ["-v", "--verbose"], description: "Be verbose" },

        {
          name: "--autostash",
          description:
            "Automatically create a temporary stash entry before the operation begins, and apply it after the operation ends. This means that you can run the operation on a dirty worktree. However, use with care: the final stash application after a successful merge might result in non-trivial conflicts",
        },

        {
          name: "--no-autostash",
          description:
            "Do not automatically create a temporary stash entry before the operation begins, and apply it after the operation ends",
        },

        {
          name: "--allow-unrelated-histories",
          description:
            "By default, git merge command refuses to merge histories that do not share a common ancestor. This option can be used to override this safety when merging histories of two projects that started their lives independently. As that is a very rare occasion, no configuration variable to enable this by default exists and will not be added",
        },
        {
          name: "--all",
          description: "Fetch all remotes",
        },
        {
          name: ["-a", "--append"],
          description:
            "Append ref names and object names of fetched refs to the existing contents of .git/FETCH_HEAD",
        },
        {
          name: "--atomic",
          description:
            "Use an atomic transaction to update local refs. Either all refs are updated, or on error, no refs are updated",
        },
        {
          name: "--depth",
          insertValue: "--depth=",
          args: {
            name: "depth",
          },
          description:
            "Limit fetching to the specified number of commits from the tip of each remote branch history",
        },
        {
          name: "--deepen",
          insertValue: "--deepen=",
          args: {
            name: "depth",
          },
          description:
            "Similar to --depth, except it specifies the number of commits from the current shallow boundary instead of from the tip of each remote branch history",
        },
        {
          name: "--shallow-since",
          insertValue: "--shallow-since=",
          args: {
            name: "date",
          },
          description:
            "Deepen or shorten the history of a shallow repository to include all reachable commits after <date>",
        },
        {
          name: "--shallow-exclude",
          insertValue: "--shallow-exclude=",
          args: {
            name: "revision",
          },
          description:
            "Deepen or shorten the history of a shallow repository to exclude commits reachable from a specified remote branch or tag. This option can be specified multiple times",
        },
        {
          name: "--unshallow",
          description:
            "If the source repository is shallow, fetch as much as possible so that the current repository has the same history as the source repository",
        },
        {
          name: "--update-shallow",
          description:
            "By default when fetching from a shallow repository, git fetch refuses refs that require updating .git/shallow",
        },
        {
          name: "--negotiation-tip",
          insertValue: "--negotiation-tip=",
          args: {
            name: "commit|glob",
            generators: gitGenerators.commits,
          },
          description:
            "By default, Git will report, to the server, commits reachable from all local refs to find common commits in an attempt to reduce the size of the to-be-received packfile",
        },
        {
          name: "--dry-run",
          description: "Show what would be done, without making any changes",
        },
        {
          name: ["-f", "--force"],
          description: "This option overrides that check",
        },
        {
          name: ["-k", "--keep"],
          description: "Keep downloaded pack",
        },
        {
          name: ["-p", "--prune"],
          description:
            "Before fetching, remove any remote-tracking references that no longer exist on the remote",
        },
        {
          name: ["-P", "--prune-tags"],
          description:
            "Before fetching, remove any local tags that no longer exist on the remote if --prune is enabled",
        },
        {
          name: "--no-tags",
          description:
            "By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following",
        },
        {
          name: "--refmap",
          insertValue: "--refmap=",
          args: {
            name: "refspec",
          },
          description:
            "When fetching refs listed on the command line, use the specified refspec (can be given more than once) to map the refs to remote-tracking branches, instead of the values of remote.*.fetch configuration variables for the remote repository",
        },
        {
          name: ["-t", "--tags"],
          description:
            "By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following",
        },
        {
          name: "--recurse-submodules",
          insertValue: "--recurse-submodules=",
          args: {
            name: "mode",
            isOptional: true,
            suggestions: ["yes", "on-demand", "no"],
          },
          description:
            "When fetching refs listed on the command line, use the specified refspec (can be given more than once) to map the refs to remote-tracking branches, instead of the values of remote.*.fetch configuration variables for the remote repository",
        },
        {
          name: "--no-recurse-submodules",
          description:
            "Disable recursive fetching of submodules (this has the same effect as using the --recurse-submodules=no option)",
        },
        {
          name: ["-j", "--jobs"],
          args: {
            name: "n",
          },
          description:
            "Number of parallel children to be used for all forms of fetching",
        },
        {
          name: "--set-upstream",
          description:
            "If the remote is fetched successfully, add upstream (tracking) reference, used by argument-less git-pull[1] and other commands",
        },
        {
          name: "--upload-pack",
          args: {
            name: "upload-pack",
          },
          description:
            "When given, and the repository to fetch from is handled by git fetch-pack, --exec=<upload-pack> is passed to the command to specify non-default path for the command run on the other end",
        },
        {
          name: "--progress",
          description:
            "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless -q is specified",
        },
        {
          name: ["-o", "--server-option"],
          args: {
            name: "option",
          },
          description:
            "Transmit the given string to the server when communicating using protocol version 2. The given string must not contain a NUL or LF character",
        },
        {
          name: "--show-forced-updates",
          description:
            "By default, git checks if a branch is force-updated during fetch. This can be disabled through fetch.showForcedUpdates, but the --show-forced-updates option guarantees this check occurs",
        },
        {
          name: "--no-show-forced-updates",
          description:
            "By default, git checks if a branch is force-updated during fetch. Pass --no-show-forced-updates or set fetch.showForcedUpdates to false to skip this check for performance reasons",
        },
        {
          name: ["-4", "--ipv4"],
          description: "Use IPv4 addresses only, ignoring IPv6 addresses",
        },
        {
          name: ["-6", "--ipv6"],
          description: "Use IPv6 addresses only, ignoring IPv4 addresses",
        },
      ],
      args: [
        {
          name: "remote",
          isOptional: true,
          generators: gitGenerators.remotes,
        },
        {
          name: "branch",
          isOptional: true,
          generators: gitGenerators.localBranches,
        },
      ],
    },
    {
      name: "diff",
      description: "Show changes between commits, commit and working tree, etc",
      options: [
        {
          name: "--staged",
          description:
            "Show difference between the files in the staging area and the latest version",
        },
        {
          name: "--cached",
          description: "Show difference between staged changes and last commit",
        },
      ],
      args: {
        name: "commit or file",
        isOptional: true,
        suggestions: headSuggestions,
        generators: [
          gitGenerators.commits,
          gitGenerators.getChangedTrackedFiles,
        ],
      },
    },
    {
      name: "reset",
      description: "Reset current HEAD to the specified state",
      options: [
        {
          name: "--keep",
          description:
            "Safe: files which are different between the current HEAD and the given commit. Will abort if there are uncommitted changes",
        },
        {
          name: "--soft",
          description:
            "Remove the last commit from the current branch, but the file changes will stay in your working tree",
        },
        {
          name: "--hard",
          description:
            "⚠️WARNING: you will lose all uncommitted changes in addition to the changes introduced in the last commit",
        },
        {
          name: "--mixed",
          description:
            "Keep the changes in your working tree but not on the index",
        },
        {
          name: "-N",
          description: "Mark removed paths as intent-to-add",
          dependsOn: ["--mixed"],
        },
        {
          name: "--merge",
          description:
            "Resets the index and updates the files in the working tree that are different" +
            " between 'commit' and HEAD",
        },
        {
          name: ["-q", "--quiet"],
          description: "Be quiet, only report errors",
          exclusiveOn: ["--no-quiet"],
        },
        {
          name: "--no-quiet",
          description: "Inverse of --quiet",
          exclusiveOn: ["-q", "--quiet"],
        },
        {
          name: "--pathspec-from-file",
          insertValue: "--pathspec-from-file={cursor}",
          description:
            "Pathspec is passed in file <file> instead of commandline args",
          args: {
            name: "file",
            template: ["folders", "filepaths"],
            suggestions: ["-"],
          },
        },
        {
          name: "--pathspec-file-nul",
          description: "Pathspec elements are separated with NUL character",
          dependsOn: ["--pathspec-from-file"],
        },
        {
          name: ["-p", "--patch"],
          description:
            "Interactively select hunks in the difference between the index and <tree-ish>",
        },
      ],
      args: {
        isOptional: true,
        isVariadic: true,
        suggestions: headSuggestions,
        generators: [gitGenerators.treeish, gitGenerators.commits],
      },
    },
    {
      name: "log",
      description: "Show commit logs",

      options: [
        {
          name: "--follow",
          description: "Show history of given file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diff output",
        },
        {
          name: "--source",
          description: "Show source",
        },
        {
          name: "--oneline",
          description: "Show each commit as a single line",
        },
        {
          name: "--p",
          description: "Display the full diff of each commit",
        },
        {
          name: "--stat",
          description:
            "Include which files were altered and the relative number of lines that were added or deleted from each of them",
        },
        {
          name: "--grep",
          description:
            "Search for commits with a commit message that matches <pattern>",
          insertValue: "--grep=",
          args: {
            name: "pattern",
          },
        },
        {
          name: "--author",
          description: "Search for commits by a particular author",
          insertValue: "--author=",
          args: {
            name: "pattern",
          },
        },
      ],
      args: [
        {
          name: "since",
          isOptional: true,
          description: "Commit ID, branch name, HEAD, or revision reference",
          generators: gitGenerators.commits,
          suggestions: headSuggestions,
        },
        {
          name: "until",
          isOptional: true,
          description: "Commit ID, branch name, HEAD, or revision reference",
          generators: gitGenerators.commits,
          suggestions: headSuggestions,
        },
      ],
    },
    {
      name: "remote",
      description: "Manage remote repository",
      subcommands: [
        {
          name: "add",
          description: "Add a remote named <name> for the repository at <url>",
          args: [{ name: "name" }, { name: "repository url" }],
          options: [
            {
              name: "-t",
              description: "A refspec to track only <branch> is created",
              args: {
                name: "branch",
              },
            },
            {
              name: "-m",
              description:
                "A symbolic-ref refs/remotes/<name>/HEAD is set up to point at remote’s <master> branch",
              args: {
                name: "master",
              },
            },
            {
              name: "-f",
              description:
                "Git fetch <name> is run immediately after the remote information is set up",
            },
            {
              name: "--tags",
              description:
                "Git fetch <name> imports every tag from the remote repository",
            },
            {
              name: "--no-tags",
              description:
                "Git fetch <name> does not import tags from the remote repository",
            },
            {
              name: "--mirror",
              insertValue: "--mirror=",
              description: "Create fetch or push mirror",
              args: {
                suggestions: ["fetch", "push"],
              },
            },
          ],
        },
        {
          name: "set-head",
          description: "Sets or deletes the default branch",
          args: [
            {
              name: "name",
            },
            {
              name: "branch",
              isOptional: true,
            },
          ],
          options: [
            {
              name: ["--auto", "-a"],
              description:
                "The remote is queried to determine its HEAD, then the symbolic-ref refs/remotes/<name>/HEAD is set to the same branch",
            },
            {
              name: ["--delete", "-d"],
              description:
                "The symbolic ref refs/remotes/<name>/HEAD is deleted",
            },
          ],
        },
        {
          name: "set-branches",
          description:
            "Changes the list of branches tracked by the named remote. This can be used to track a subset of the available remote branches after the initial setup for a remote",
          options: [
            {
              name: "--add",
              description:
                "Instead of replacing the list of currently tracked branches, adds to that list",
            },
          ],
          args: [
            {
              name: "name",
            },
            {
              name: "branch",
              isVariadic: true,
            },
          ],
        },
        {
          name: ["rm", "remove"],
          description: "Removes given remote [name]",
          args: {
            name: "remote",
            generators: gitGenerators.remotes,
          },
        },
        {
          name: "rename",
          description: "Removes given remote [name]",
          args: [
            {
              name: "old remote",
              generators: gitGenerators.remotes,
            },
            {
              name: "new remote name",
            },
          ],
        },
        {
          name: "get-url",
          description: "Retrieves the URLs for a remote",
          options: [
            {
              name: "--push",
              description: "Push URLs are queried rather than fetch URLs",
            },
            {
              name: "--all",
              description: "All URLs for the remote will be listed",
            },
          ],
          args: {
            name: "name",
          },
        },
        {
          name: "set-url",
          description: "Changes the URLs for the remote",
          args: [
            {
              name: "name",
            },
            {
              name: "newurl",
            },
            {
              name: "oldurl",
              isOptional: true,
            },
          ],
          options: [
            {
              name: "--push",
              description: "Push URLs are manipulated instead of fetch URLs",
            },
            {
              name: "--add",
              description:
                "Instead of changing existing URLs, new URL is added",
            },
            {
              name: "--delete",
              description:
                "Instead of changing existing URLs, all URLs matching regex <url> are deleted for remote <name>",
            },
          ],
        },
        {
          name: "show",
          description: "Gives some information about the remote [name]",
          args: {
            name: "name",
            isVariadic: true,
          },
          options: [
            {
              name: "-n",
              description:
                "The remote heads are not queried first with git ls-remote <name>; cached information is used instead",
            },
          ],
        },
        {
          name: "prune",
          description:
            "Equivalent to git fetch --prune [name], except that no new references will be fetched",
          args: {
            name: "name",
            isVariadic: true,
          },
          options: [
            {
              name: "-n",
            },
            {
              name: "--dry-run",
              description:
                "Report what branches would be pruned, but do not actually prune them",
            },
          ],
        },
        {
          name: "update",
          description:
            "Fetch updates for remotes or remote groups in the repository as defined by remotes.<group>",
          options: [
            {
              name: ["-p", "--prune"],
              description: "",
            },
          ],
          args: [
            {
              name: "group",
              isOptional: true,
              isVariadic: true,
            },
            {
              name: "remote",
              isOptional: true,
              isVariadic: true,
            },
          ],
        },
      ],
      options: [
        {
          name: ["-v", "--verbose"],
          description:
            "Be a little more verbose and show remote url after name. NOTE: This must be placed between remote and subcommand",
        },
      ],
    },
    {
      name: "fetch",
      description: "Download objects and refs from another repository",
      args: [
        {
          name: "remote",
          isOptional: true,
          generators: gitGenerators.remotes,
        },
        {
          name: "branch",
          isOptional: true,
          generators: gitGenerators.localBranches,
        },
        {
          name: "refspec",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--all",
          description: "Fetch all remotes",
        },
        {
          name: ["-a", "--append"],
          description:
            "Append ref names and object names of fetched refs to the existing contents of .git/FETCH_HEAD",
        },
        {
          name: "--atomic",
          description:
            "Use an atomic transaction to update local refs. Either all refs are updated, or on error, no refs are updated",
        },
        {
          name: "--depth",
          insertValue: "--depth=",
          args: {
            name: "depth",
          },
          description:
            "Limit fetching to the specified number of commits from the tip of each remote branch history",
        },
        {
          name: "--deepen",
          insertValue: "--deepen=",
          args: {
            name: "depth",
          },
          description:
            "Similar to --depth, except it specifies the number of commits from the current shallow boundary instead of from the tip of each remote branch history",
        },
        {
          name: "--shallow-since",
          insertValue: "--shallow-since=",
          args: {
            name: "date",
          },
          description:
            "Deepen or shorten the history of a shallow repository to include all reachable commits after <date>",
        },
        {
          name: "--shallow-exclude",
          insertValue: "--shallow-exclude=",
          args: {
            name: "revision",
          },
          description:
            "Deepen or shorten the history of a shallow repository to exclude commits reachable from a specified remote branch or tag. This option can be specified multiple times",
        },
        {
          name: "--unshallow",
          description:
            "If the source repository is shallow, fetch as much as possible so that the current repository has the same history as the source repository",
        },
        {
          name: "--update-shallow",
          description:
            "By default when fetching from a shallow repository, git fetch refuses refs that require updating .git/shallow",
        },
        {
          name: "--negotiation-tip",
          insertValue: "--negotiation-tip=",
          args: {
            name: "commit|glob",
            generators: gitGenerators.commits,
          },
          description:
            "By default, Git will report, to the server, commits reachable from all local refs to find common commits in an attempt to reduce the size of the to-be-received packfile",
        },
        {
          name: "--dry-run",
          description: "Show what would be done, without making any changes",
        },
        {
          name: "--write-fetch-head",
          description:
            "Write the list of remote refs fetched in the FETCH_HEAD file directly under $GIT_DIR. This is the default",
        },
        {
          name: "--no-write-fetch-head",
          description: "Tells Git not to write the file",
        },
        {
          name: ["-f", "--force"],
          description: "This option overrides that check",
        },
        {
          name: ["-k", "--keep"],
          description: "Keep downloaded pack",
        },
        {
          name: "--multiple",
          description:
            "Allow several <repository> and <group> arguments to be specified. No <refspec>s may be specified",
        },
        {
          name: ["--auto-maintenance", "--auto-gc"],
          description:
            "Run git maintenance run --auto at the end to perform automatic repository maintenance if",
        },
        {
          name: ["--no-auto-maintenance", "--no-auto-gc"],
          description:
            "Don't run git maintenance run --auto at the end to perform automatic repository maintenance",
        },
        {
          name: "--write-commit-graph",
          description:
            "Write a commit-graph after fetching. This overrides the config setting fetch.writeCommitGraph",
        },
        {
          name: "--no-write-commit-graph",
          description:
            "Don't write a commit-graph after fetching. This overrides the config setting fetch.writeCommitGraph",
        },
        {
          name: ["-p", "--prune"],
          description:
            "Before fetching, remove any remote-tracking references that no longer exist on the remote",
        },
        {
          name: ["-P", "--prune-tags"],
          description:
            "Before fetching, remove any local tags that no longer exist on the remote if --prune is enabled",
        },
        {
          name: ["-n", "--no-tags"],
          description:
            "By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following",
        },
        {
          name: "--refmap",
          insertValue: "--refmap=",
          args: {
            name: "refspec",
          },
          description:
            "When fetching refs listed on the command line, use the specified refspec (can be given more than once) to map the refs to remote-tracking branches, instead of the values of remote.*.fetch configuration variables for the remote repository",
        },
        {
          name: ["-t", "--tags"],
          description:
            "By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following",
        },
        {
          name: "--recurse-submodules",
          insertValue: "--recurse-submodules=",
          args: {
            name: "mode",
            isOptional: true,
            suggestions: ["yes", "on-demand", "no"],
          },
          description:
            "When fetching refs listed on the command line, use the specified refspec (can be given more than once) to map the refs to remote-tracking branches, instead of the values of remote.*.fetch configuration variables for the remote repository",
        },
        {
          name: ["-j", "--jobs"],
          args: {
            name: "n",
          },
          description:
            "Number of parallel children to be used for all forms of fetching",
        },
        {
          name: "--no-recurse-submodules",
          description:
            "Disable recursive fetching of submodules (this has the same effect as using the --recurse-submodules=no option)",
        },
        {
          name: "--set-upstream",
          description:
            "If the remote is fetched successfully, add upstream (tracking) reference, used by argument-less git-pull[1] and other commands",
        },
        {
          name: "--submodule-prefix",
          insertValue: "--submodule-prefix=",
          args: {
            name: "path",
          },
          description:
            'Prepend <path> to paths printed in informative messages such as ”Fetching submodule foo". This option is used internally when recursing over submodules',
        },
        {
          name: "--recurse-submodules-default",
          insertValue: "--recurse-submodules-default=",
          args: {
            name: "mode",
            isOptional: true,
            suggestions: ["yes", "on-demand"],
          },
          description:
            "This option is used internally to temporarily provide a non-negative default value for the --recurse-submodules option",
        },
        {
          name: ["-u", "--update-head-ok"],
          description:
            "By default git fetch refuses to update the head which corresponds to the current branch. This flag disables the check. This is purely for the internal use for git pull to communicate with git fetch, and unless you are implementing your own Porcelain you are not supposed to use it",
        },
        {
          name: "--upload-pack",
          args: {
            name: "upload-pack",
          },
          description:
            "When given, and the repository to fetch from is handled by git fetch-pack, --exec=<upload-pack> is passed to the command to specify non-default path for the command run on the other end",
        },
        {
          name: ["-q", "--quiet"],
          description:
            "Pass --quiet to git-fetch-pack and silence any other internally used git commands. Progress is not reported to the standard error stream",
        },
        {
          name: ["-v", "--verbose"],
          description: "Be verbose",
        },
        {
          name: "--progress",
          description:
            "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless -q is specified",
        },
        {
          name: ["-o", "--server-option"],
          args: {
            name: "option",
          },
          description:
            "Transmit the given string to the server when communicating using protocol version 2. The given string must not contain a NUL or LF character",
        },
        {
          name: "--show-forced-updates",
          description:
            "By default, git checks if a branch is force-updated during fetch. This can be disabled through fetch.showForcedUpdates, but the --show-forced-updates option guarantees this check occurs",
        },
        {
          name: "--no-show-forced-updates",
          description:
            "By default, git checks if a branch is force-updated during fetch. Pass --no-show-forced-updates or set fetch.showForcedUpdates to false to skip this check for performance reasons",
        },
        {
          name: ["-4", "--ipv4"],
          description: "Use IPv4 addresses only, ignoring IPv6 addresses",
        },
        {
          name: ["-6", "--ipv6"],
          description: "Use IPv6 addresses only, ignoring IPv4 addresses",
        },
        {
          name: "--stdin",
          description:
            'Read refspecs, one per line, from stdin in addition to those provided as arguments. The "tag <name>" format is not supported',
        },
      ],
    },
    {
      name: "stash",
      description: "Temporarily stores all the modified tracked files",
      subcommands: [
        {
          name: "push", // TODO: support for no subcommand is missing
          description:
            "Save your local modifications to a new stash entry and roll them back to HEAD",
          insertValue: "push {cursor}",
          options: [
            {
              name: ["-p", "--patch"],
              description:
                "Interactively select hunks from the diff between HEAD and the working tree to be stashed",
            },
            {
              name: ["-k", "--keep-index"],
              description:
                "All changed already added to the index are left intact",
            },
            {
              name: ["-u", "--include-untracked"],
              description:
                "All untracked files are also stashed and then cleaned up",
            },
            {
              name: ["-a", "--all"],
              description: "All ignored and untracked files are also stashed",
            },
            {
              name: ["-q", "--quiet"],
              description: "Quiet, suppress feedback messages",
            },
            {
              name: ["-m", "--message"],
              insertValue: "-m {cursor}",
              description: "Use the given <msg> as the stash message",
              args: {
                name: "message",
              },
            },
            { name: "--pathspec-from-file", description: "" }, // TODO: pathspec file nul and add description
            {
              name: "--",
              description:
                "Separates pathsec from options for disambiguation purposes",
            },
            // TODO: pathspec
          ],
        },
        {
          name: "show",
          description: "Show the changes recorded in the stash entry as a diff",
          insertValue: "show {cursor}",

          args: {
            name: "stash",
            isOptional: true,
            generators: gitGenerators.stashes,
          },
        },
        {
          name: "save",
          description: "Temporarily stores all the modified tracked files",
          insertValue: "save {cursor}",
          options: [
            {
              name: ["-p", "--patch"],
              description:
                "Interactively select hunks from the diff between HEAD and the working tree to be stashed",
            },
            {
              name: ["-k", "--keep-index"],
              description:
                "All changed already added to the index are left intact",
            },
            {
              name: ["-u", "--include-untracked"],
              description:
                "All untracked files are also stashed and then cleaned up",
            },
            {
              name: ["-a", "--all"],
              description: "All ignored and untracked files are also stashed",
            },
            {
              name: ["-q", "--quiet"],
              description: "Quiet, suppress feedback messages",
            },
          ],
          args: {
            name: "message",
            isOptional: true,
          },
        },
        {
          name: "pop",
          description: "Restores the most recently stashed files",
          options: [
            {
              name: "--index",
              description:
                "Tries to reinstate not only the working tree's changes, but also the index's ones",
            },
            {
              name: ["-q", "--quiet"],
              description: "Quiet, suppress feedback messages",
            },
          ],
          args: {
            name: "stash",
            isOptional: true,
            generators: gitGenerators.stashes,
          },
        },
        {
          name: "list",
          description: "Lists all stashed changesets",
          insertValue: "list {cursor}",
        },
        {
          name: "drop",
          description: "Discards the most recently stashed changeset",
          insertValue: "drop {cursor}",
          options: [
            {
              name: ["-q", "--quiet"],
              description: "Quiet, suppress feedback messages",
            },
          ],
          args: {
            name: "stash",
            isOptional: true,
            generators: gitGenerators.stashes,
          },
        },
        {
          name: "clear",
          description: "Remove all the stash entries",
        },
        {
          name: "apply",
          description:
            "Like pop, but do not remove the state from the stash list",
          options: [
            {
              name: "--index",
              description:
                "Tries to reinstate not only the working tree's changes, but also the index's ones",
            },
            {
              name: ["-q", "--quiet"],
              description: "Quiet, suppress feedback messages",
            },
          ],
          args: {
            name: "stash",
            isOptional: true,
            generators: gitGenerators.stashes,
          },
        },
        {
          name: "branch",
          description: "Creates and checks out a new branch named",
          insertValue: "branch {cursor}",
          args: [
            {
              name: "branch",
              generators: gitGenerators.localBranches,
            },
            {
              name: "stash",
              isOptional: true,
              generators: gitGenerators.stashes,
            },
          ],
        },
        {
          name: "create",
          description: "Creates a stash with the message <msg>",
          insertValue: "create {cursor}",
          args: {
            name: "message",
          },
        },
        {
          name: "store",
          description:
            "Store a given stash in the stash ref., updating the staft reflog",

          options: [
            {
              name: ["-m", "--message"],
              insertValue: "-m {cursor}",
              description: "Use the given <msg> as the stash message",
              args: {
                name: "message",
              },
            },
            {
              name: ["-q", "--quiet"],
              description: "Quiet, suppress feedback messages",
            },
          ],
          args: [
            {
              name: "message",
            },
            {
              name: "commit",
              generators: gitGenerators.commits,
            },
          ],
        },
      ],
    },
    {
      name: "reflog",
      description: "Show history of events with hashes",
      options: [
        {
          name: "--relative-date",
          description: "Show date info",
        },
        {
          name: "--all",
          description: "Show all refs",
        },
      ],
    },
    {
      name: "clone",
      description: "Clone a repository into a new directory",
      args: [
        { name: "repository", description: "Git library to be cloned" },
        {
          name: "directory",
          description: "Specify the new directory name or target folder",
          template: "folders",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-l", "--local"],
          description: "Bypasses the normal git aware transport mechanism",
        },
        {
          name: "--no-hardlinks",
          description:
            "Force the cloning process from a repository on a local filesystem to copy the files under the .git/objects directory instead of using hardlinks",
        },
        {
          name: ["-s", "--shared"],
          isDangerous: true,
          description:
            "Automatically setup .git/objects/info/alternates to share the objects with the source repository",
        },
        {
          name: "--dry-run",
          description: "Do nothing; only show what would happen",
        },
        {
          name: "--reference",
          description:
            "If the reference repository is on the local machine, automatically setup",
          args: {
            name: "repository",
          },
        },
        {
          name: "--reference-if-able",
          description:
            "If the reference repository is on the local machine, automatically setup. Non existing directory is skipped with a warning",
          args: {
            name: "repository",
          },
        },
        {
          name: "--dissociate",
          description:
            "Borrow the objects from reference repositories specified with the --reference options only to reduce network transfer, and stop borrowing from them after a clone is made by making necessary local copies of borrowed objects",
        },
        {
          name: ["-q", "--quiet"],
          description:
            "Operate quietly. Progress is not reported to the standard error stream",
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Run verbosely. Does not affect the reporting of progress status to the standard error stream",
        },
        {
          name: "--progress",
          description:
            "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless --quiet is specified. This flag forces progress status even if the standard error stream is not directed to a terminal",
        },
        {
          name: "--server-option",
          description:
            "Transmit the given string to the server when communicating using protocol version 2. The given string must not contain a NUL or LF character. The server’s handling of server options, including unknown ones, is server-specific. When multiple --server-option=<option> are given, they are all sent to the other side in the order listed on the command line",
          insertValue: "--server-option=",
          args: {
            name: "option",
          },
        },
        {
          name: ["-n", "--no-checkout"],
          description:
            "No checkout of HEAD is performed after the clone is complete",
        },
        {
          name: "--bare",
          description:
            "Make a bare Git repository. That is, instead of creating <directory> and placing the administrative files in <directory>/.git, make the <directory> itself the $GIT_DIR. This obviously implies the --no-checkout because there is nowhere to check out the working tree. Also the branch heads at the remote are copied directly to corresponding local branch heads, without mapping them to refs/remotes/origin/. When this option is used, neither remote-tracking branches nor the related configuration variables are created",
        },
        {
          name: "--sparse",
          description:
            "Initialize the sparse-checkout file so the working directory starts with only the files in the root of the repository. The sparse-checkout file can be modified to grow the working directory as needed",
        },
        {
          name: "--filter",
          description:
            "Use the partial clone feature and request that the server sends a subset of reachable objects according to a given object filter. When using --filter, the supplied <filter-spec> is used for the partial clone filter. For example, --filter=blob:none will filter out all blobs (file contents) until needed by Git. Also, --filter=blob:limit=<size> will filter out all blobs of size at least <size>. For more details on filter specifications, see the --filter option in git-rev-list[1]",
          insertValue: "--filter=",
          args: { name: "filter spec" },
        },
        {
          name: "--mirror",
          description:
            "Set up a mirror of the source repository. This implies --bare. Compared to --bare, --mirror not only maps local branches of the source to local branches of the target, it maps all refs (including remote-tracking branches, notes etc.) and sets up a refspec configuration such that all these refs are overwritten by a git remote update in the target repository",
        },
        {
          name: ["-o", "--origin"],
          description:
            "Instead of using the remote name origin to keep track of the upstream repository, use <name>. Overrides clone.defaultRemoteName from the config",
          args: { name: "name" },
        },
        {
          name: ["-b", "--branch"],
          description:
            "Instead of pointing the newly created HEAD to the branch pointed to by the cloned repository’s HEAD, point to <name> branch instead. In a non-bare repository, this is the branch that will be checked out. --branch can also take tags and detaches the HEAD at that commit in the resulting repository",
          args: { name: "branch name" },
        },
        {
          name: ["-u", "--upload-pack"],
          description:
            "When given, and the repository to clone from is accessed via ssh, this specifies a non-default path for the command run on the other end",
          args: {
            name: "upload pack",
          },
        },
        {
          name: "--template",
          description:
            "Specify the directory from which templates will be used",
          insertValue: "--template=",
          args: {
            name: "template directory",
          },
        },
        {
          name: ["-c", "--config"],
          description:
            "Set a configuration variable in the newly-created repository; this takes effect immediately after the repository is initialized, but before the remote history is fetched or any files checked out. The key is in the same format as expected by git-config[1] (e.g., core.eol=true). If multiple values are given for the same key, each value will be written to the config file. This makes it safe, for example, to add additional fetch refspecs to the origin remote. Due to limitations of the current implementation, some configuration variables do not take effect until after the initial fetch and checkout. Configuration variables known to not take effect are: remote.<name>.mirror and remote.<name>.tagOpt. Use the corresponding --mirror and --no-tags options instead",
          args: { name: "key=value" },
        },
        {
          name: "--depth",
          description:
            "Create a shallow clone with a history truncated to the specified number of commits. Implies --single-branch unless --no-single-branch is given to fetch the histories near the tips of all branches. If you want to clone submodules shallowly, also pass --shallow-submodules",
          args: {
            name: "date",
          },
        },
        {
          name: "--shallow-since",
          description:
            "Create a shallow clone with a history after the specified time",
          insertValue: "--shallow-since=",
          args: {
            name: "date",
          },
        },
        {
          name: "--shallow-exclude",
          description:
            "Create a shallow clone with a history, excluding commits reachable from a specified remote branch or tag. This option can be specified multiple times",
          insertValue: "--shallow-exclude=",
          args: {
            name: "revision",
          },
        },
        {
          name: "--single-branch",
          description:
            "Clone only the history leading to the tip of a single branch, either specified by the --branch option or the primary branch remote’s HEAD points at. Further fetches into the resulting repository will only update the remote-tracking branch for the branch this option was used for the initial cloning. If the HEAD at the remote did not point at any branch when --single-branch clone was made, no remote-tracking branch is created",
        },
        {
          name: "--no-single-branch",
          description:
            "Do not clone only the history leading to the tip of a single branch, either specified by the --branch option or the primary branch remote’s HEAD points at. Further fetches into the resulting repository will only update the remote-tracking branch for the branch this option was used for the initial cloning. If the HEAD at the remote did not point at any branch when --single-branch clone was made, no remote-tracking branch is created",
        },
        {
          name: "--no-tags",
          description:
            "Don’t clone any tags, and set remote.<remote>.tagOpt=--no-tags in the config, ensuring that future git pull and git fetch operations won’t follow any tags. Subsequent explicit tag fetches will still work, (see git-fetch[1])",
        },
        {
          name: "--recurse-submodules",
          description:
            "After the clone is created, initialize and clone submodules within based on the provided pathspec. If no pathspec is provided, all submodules are initialized and cloned. This option can be given multiple times for pathspecs consisting of multiple entries",
          args: {
            isOptional: true,
            name: "pathspec",
          },
        },
        {
          name: "--shallow-submodules",
          description:
            "All submodules which are cloned will be shallow with a depth of 1",
        },
        {
          name: "--no-shallow-submodules",
          description: "Disable --shallow-submodules",
        },

        {
          name: "--remote-submodules",
          description:
            "All submodules which are cloned will use the status of the submodule’s remote-tracking branch to update the submodule, rather than the superproject’s recorded SHA-1. Equivalent to passing --remote to git submodule update",
        },
        {
          name: "--no-remote-submodules",
          description: "Disable --remote-submodules",
        },
        {
          name: ["-j", "--jobs"],
          description:
            "The number of submodules fetched at the same time. Defaults to the submodule.fetchJobs option",
          args: {
            name: "n",
            isOptional: true,
          },
        },
        {
          name: "--separate-git-dir",
          description:
            "Instead of placing the cloned repository where it is supposed to be, place the cloned repository at the specified directory, then make a filesystem-agnostic Git symbolic link to there. The result is Git repository can be separated from working tree",
          insertValue: "--separate-git-dir=",
          args: {
            name: "git dir",
          },
        },
      ],
    },
    {
      name: "init",
      description:
        "Create an empty Git repository or reinitialize an existing one",
      args: {
        name: "directory",
        isOptional: true,
      },
      options: [
        {
          name: ["-q", "--quiet"],
          description: "Only print error and warning messages",
        },
        {
          name: "--bare",
          description: "Create a bare repository",
        },
        {
          name: "--object-format",
          description: "Specify the given object format",
          args: {
            name: "format",
            suggestions: ["sha1", "sha256"],
          },
        },
        {
          name: "--template",
          description:
            "Specify the directory from which templates will be used",
          args: {
            name: "template_directory",
            template: "folders",
          },
        },
        {
          name: "--separate-git-dir",
          description:
            "Instead of initializing the repository as a directory to either $GIT_DIR or ./.git/, create a text file there containing the path to the actual repository. This file acts as filesystem-agnostic Git symbolic link to the repository",
          args: {
            name: "git dir",
          },
        },
        {
          name: ["-b", "--initial-branch"],
          description: "Initial branch for new repo",
          args: {
            isOptional: true,
            name: "branch-name",
          },
        },
        {
          name: "--shared",
          description:
            "Specify that the Git repository is to be shared amongst several users. This allows users belonging to the same group to push into that repository",
          args: {
            isOptional: true,
            suggestions: [
              {
                name: "false",
                description: "Use permissions reported by umask(2)",
              },
              {
                name: "true",
                description: "Make the repository group-writable",
              },
              {
                name: "umask",
                description: "Use permissions reported by umask(2)",
              },
              {
                name: "group",
                description: "Make the repository group-writable",
              },
              {
                name: "all",
                description:
                  "Same as group, but make the repository readable by all users",
              },
              {
                name: "world",
                description:
                  "Same as group, but make the repository readable by all users",
              },
              {
                name: "everybody",
                description:
                  "Same as group, but make the repository readable by all users",
              },
              {
                name: "0xxx",
                description:
                  "0xxx is an octal number and each file will have mode 0xxx. 0xxx will override users' umask(2) value (and not only loosen permissions as group and all does)",
              },
            ],
          },
        },
      ],
    },
    {
      name: "mv",
      description: "Move or rename a file, a directory, or a symlink",
      args: [
        {
          name: "source",
          description: "File to move",
          template: "filepaths",
        },
        {
          name: "destination",
          description: "Location to move to",
          template: "folders",
        },
      ],
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Force renaming or moving of a file even if the target exists",
        },
        {
          name: "-k",
          description:
            "Skip move or rename actions which would lead to an error condition",
        },
        {
          name: ["-n", "--dry-run"],
          description: "Do nothing; only show what would happen",
        },
        {
          name: ["-v", "--verbose"],
          description: "Report the names of files as they are moved",
        },
      ],
    },
    {
      name: "rm",
      description: "Remove files from the working tree and from the index",
      args: {
        isVariadic: true,
        suggestions: [
          {
            name: ".",
            description: "Current directory",

            icon: "fig://icon?type=folder",
          },
        ],
        generators: gitGenerators.files_for_staging,
      },
      options: [
        {
          name: "--",
          description:
            "Used to separate command-line options from the list of files",
        },
        { name: "--cached", description: "Only remove from the index" },
        {
          name: ["-f", "--force"],
          description: "Override the up-to-date check",
        },
        { name: "-r", description: "Allow recursive removal" },
      ],
    },
    {
      name: "bisect",
      description: "Use binary search to find the commit that introduced a bug",
      subcommands: [
        {
          name: "start",
          description: "Reset bisect state and start bisection",
          args: [
            {
              name: "bad",
              isOptional: true,
              generators: gitGenerators.revs,
              suggestions: headSuggestions,
            },
            {
              name: "good",
              isOptional: true,
              generators: [gitGenerators.revs, gitGenerators.revs],
              suggestions: headSuggestions,
              isVariadic: true,
            },
          ],
          options: [
            {
              name: "--term-new",
              description:
                "Specify the alias to mark commits as new during the bisect process",
              args: {
                name: "term",
                description:
                  "Specifying: fixed, would require using git bisect fixed instead of git bisect new",
              },
            },
            {
              name: "--term-bad",
              description:
                "Specify the alias to mark commits as bad during the bisect process",
              args: {
                name: "term",
                description:
                  "Specifying: broken, would require using git bisect broken instead of git bisect bad",
              },
            },
            {
              name: "--term-good",
              description:
                "Specify the alias to mark commits as good during the bisect process",
              args: {
                name: "term",
                description:
                  "Specifying: fixed, would require using git bisect fixed instead of git bisect good",
              },
            },
            {
              name: "--term-old",
              description:
                "Specify the alias to mark commits as old during the bisect process",
              args: {
                name: "term",
                description:
                  "Specifying: broken, would require using git bisect broken instead of git bisect old",
              },
            },
            {
              name: "--no-checkout",
              description:
                "Do not checkout the new working tree at each iteration of the bisection process. Instead just update a special reference named BISECT_HEAD to make it point to the commit that should be tested",
            },
            {
              name: "--first-parent",
              description:
                "Follow only the first parent commit upon seeing a merge commit. In detecting regressions introduced through the merging of a branch, the merge commit will be identified as introduction of the bug and its ancestors will be ignored",
            },
            {
              name: "--",
              description:
                "Stop taking subcommand arguments and options. Starts taking paths to bisect",
            },
          ],
        },
        {
          name: "bad",
          description: "Mark commits as bad",
          args: {
            name: "rev",
            isOptional: true,
            generators: gitGenerators.revs,
            suggestions: headSuggestions,
          },
        },
        {
          name: "new",
          description: "Mark commits as new",
          args: {
            name: "rev",
            isOptional: true,
            generators: gitGenerators.revs,
            suggestions: headSuggestions,
          },
        },
        {
          name: "old",
          description: "Mark commits as old",
          args: {
            name: "rev",
            isOptional: true,
            generators: gitGenerators.revs,
            suggestions: headSuggestions,
            isVariadic: true,
          },
        },
        {
          name: "good",
          description: "Mark commits as good",
          args: {
            name: "rev",
            isOptional: true,
            generators: gitGenerators.revs,
            suggestions: headSuggestions,
            isVariadic: true,
          },
        },
        {
          name: "next",
          description: "Find next bisection to test and check it out",
        },
        {
          name: "terms",
          description:
            "Show the terms used for old and new commits (default: bad, good)",
          options: [
            {
              name: "--term-old",
              description: "You can get just the old (respectively new) term",
            },
            {
              name: "--term-good",
              description: "You can get just the old (respectively new) term",
            },
          ],
        },
        {
          name: "skip",
          description: "Mark <rev>... untestable revisions",
          args: {
            name: "rev | range",
            isVariadic: true,
            isOptional: true,
            generators: gitGenerators.revs,
            suggestions: headSuggestions,
          },
        },
        {
          name: "reset",
          description: "Finish bisection search and go back to commit",
          args: {
            name: "commit",
            isOptional: true,
            generators: gitGenerators.commits,
            suggestions: headSuggestions,
          },
        },
        {
          name: ["visualize", "view"],
          description: "See the currently remaining suspects in gitk",
        },
        {
          name: "replay",
          description: "Replay bisection log",
          args: {
            name: "logfile",
            template: "filepaths",
          },
        },
        {
          name: "log",
          description: "Show bisect log",
        },
        {
          name: "run",
          description: "Use <cmd>... to automatically bisect",
          args: {
            name: "cmd",
            isVariadic: true,
            isCommand: true,
          },
        },
        {
          name: "help",
          args: {
            name: "Get help text",
          },
        },
      ],
      args: {
        name: "paths",
        template: ["filepaths", "folders"],
      },
    },
    { name: "grep", description: "Print lines matching a pattern" },
    { name: "show", description: "Show various types of objects" },
    {
      name: "branch",
      description: "List, create, or delete branches",
      options: [
        {
          name: ["-a", "--all"],
          exclusiveOn: ["-r", "--remotes"],
          description: "List both remote-tracking and local branches",
        },
        {
          name: ["-d", "--delete"],
          description: "Delete fully merged branch",
          args: {
            generators: gitGenerators.localOrRemoteBranches,
            isVariadic: true,
            suggestions: [
              {
                name: ["-r", "--remotes"],
                description: "Deletes the remote-tracking branches",
              },
            ],
          },
        },
        {
          name: "-D",
          description: "Delete branch (even if not merged)",
          args: {
            generators: gitGenerators.localOrRemoteBranches,
            isVariadic: true,
            suggestions: [
              {
                name: ["-r", "--remotes"],
                description: "Deletes the remote-tracking branches",
              },
            ],
          },
        },
        {
          name: ["-m", "--move"],
          description: "Move/rename a branch and its reflog",
          args: [
            {
              generators: gitGenerators.localBranches,
            },
            {
              generators: gitGenerators.localBranches,
            },
          ],
        },
        {
          name: "-M",
          description: "Move/rename a branch, even if target exists",
          args: [
            {
              generators: gitGenerators.localBranches,
            },
            {
              generators: gitGenerators.localBranches,
            },
          ],
        },
        { name: ["-c", "--copy"], description: "Copy a branch and its reflog" },
        { name: "-C", description: "Copy a branch, even if target exists" },
        { name: ["-l", "--list"], description: "List branch names" },
        {
          name: "--create-reflog",
          description: "Create the branch's reflog",
        },
        {
          name: "--edit-description",
          description: "Edit the description for the branch",
          args: {
            generators: gitGenerators.localBranches,
          },
        },
        {
          name: ["-f", "--force"],
          description: "Force creation, move/rename, deletion",
        },
        {
          name: "--merged",
          description: "Print only branches that are merged",
          args: { name: "commit" },
        },
        {
          name: "--no-merged",
          description: "Print only branches that are not merged",
          args: { name: "commit" },
        },
        {
          name: "--column",
          exclusiveOn: ["--no-column"],
          description: "List branches in columns [=<style>]",
        },
        {
          name: "--no-column",
          exclusiveOn: ["--column"],
          description: "Doesn't display branch listing in columns",
        },
        {
          name: "--sort",
          description: "Field name to sort on",
          args: { name: "key" },
        },
        {
          name: "--points-at",
          description: "Print only branches of the object",
          args: { name: "object" },
        },
        {
          name: ["-i", "--ignore-case"],
          description: "Sorting and filtering are case insensitive",
        },
        {
          name: "--format",
          description: "Format to use for the output",
          args: { name: "format" },
        },
        {
          name: ["-r", "--remotes"],
          exclusiveOn: ["-a", "--all"],
          description:
            "Lists or deletes (if used with -d) the remote-tracking branches",
        },
        {
          name: "--show-current",
          description: "Prints the name of the current branch",
        },
        {
          name: ["-v", "--verbose"],
          isRepeatable: 2,
          description:
            "Shows sha1 and commit subject line for each head, along with relationship to upstream branch when in list mode. If given twice, prints the path of the linked worktree and the name of the upstream branch",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress non-error messages",
        },
        {
          name: "--abbrev",
          description:
            "Shows the shortest prefix that is at least <n> hexdigits long that uniquely refers the object",
          exclusiveOn: ["--no-abbrev"],
          args: {
            name: "Number",
          },
        },
        {
          name: "--no-abbrev",
          exclusiveOn: ["--abbrev"],
          description: "Displays the full sha1s in the output listing",
        },
        {
          name: ["-t", "--track"],
          exclusiveOn: ["--no-track"],
          description:
            "When creating a new branch, set up 'upstream' configuration",
          args: [
            {
              name: "branch",
              generators: gitGenerators.localBranches,
            },
            {
              name: "start point",
              isOptional: true,
              generators: gitGenerators.commits,
            },
          ],
        },

        {
          name: "--no-track",
          exclusiveOn: ["--track", "-t"],
          description:
            "Do not set up 'upstream' configuration, even if the branch.autoSetupMerge configuration variable is true",
          args: [
            {
              generators: gitGenerators.localBranches,
            },
            {
              isOptional: true,
              generators: gitGenerators.localBranches,
            },
          ],
        },
        {
          name: ["-u", "--set-upstream-to"],
          description: "Sets branch to upstream provided",
          args: {
            name: "upstream",
            isOptional: true,
            generators: gitGenerators.localBranches,
          },
        },
        {
          name: "--unset-upstream",
          description: "Removes the upstream information",
          args: {
            name: "upstream",
            isOptional: true,
            generators: gitGenerators.localBranches,
          },
        },
        {
          name: "--contains",
          description: "Only lists branches which contain the specified commit",
          args: {
            name: "commit",
            isOptional: true,
            generators: gitGenerators.commits,
          },
        },
        {
          name: "--no-contains",
          description:
            "Only lists branches which don't contain the specified commit",
          args: {
            name: "commit",
            isOptional: true,
            generators: gitGenerators.commits,
          },
        },
        {
          name: "--color",
          description:
            "Color branches to highlight current, local, and remote-tracking branches",
          exclusiveOn: ["--no-color"],
          args: {
            name: "when",
            isOptional: true,
            suggestions: ["always", "never", "auto"],
          },
        },
        {
          name: "--no-color",
          description: "Turns off branch colors",
          exclusiveOn: ["--color"],
        },
      ],
    },
    {
      name: "checkout",
      description: "Switch branches or restore working tree files",
      options: [
        {
          name: ["-q", "--quiet"],
          description: "Quiet, suppress feedback messages",
        },

        {
          name: "--progress",
          description:
            "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless --quiet is specified. This flag enables progress reporting even if not attached to a terminal, regardless of --quiet",
        },

        {
          name: "--no-progress",
          description: "Disable progress status reporting",
        },

        {
          name: ["-f", "--force"],
          description:
            "When switching branches, proceed even if the index or the working tree differs from HEAD. This is used to throw away local changes",
        },

        {
          name: ["-2", "--ours"],
          description:
            "When checking out paths from the index, check out stage #2 (ours) for unmerged paths",
        },

        {
          name: ["-3", "--theirs"],
          description:
            "When checking out paths from the index, check out stage #3 (theirs) for unmerged paths",
        },

        {
          name: "-b",
          description:
            "Create a new branch named <new_branch> and start it at <start_point>; see git-branch[1] for details",
          args: {
            name: "New Branch",
          },
        },

        {
          name: "-B",
          description:
            "Creates the branch <new_branch> and start it at <start_point>; if it already exists, then reset it to <start_point>. This is equivalent to running 'git branch' with '-f'; see git-branch[1] for details",
          args: {
            name: "New Branch",
          },
        },

        {
          name: ["-t", "--track"],
          description:
            "When creating a new branch, set up 'upstream' configuration",
        },

        {
          name: "--no-track",
          description:
            "Do not set up 'upstream' configuration, even if the branch.autoSetupMerge configuration variable is true",
        },

        {
          name: "--guess",
          description:
            "If <branch> is not found but there does exist a tracking branch in exactly one remote (call it <remote>) with a matching name, treat as equivalent to $ git checkout -b <branch> --track <remote>/<branch>",
        },

        { name: "--no-guess", description: "Disable --guess" },

        {
          name: "-l",
          description:
            "Create the new branch’s reflog; see git-branch[1] for details",
        },

        {
          name: ["-d", "--detach"],
          description:
            "Rather than checking out a branch to work on it, check out a commit for inspection and discardable experiments. This is the default behavior of git checkout <commit> when <commit> is not a branch name",
        },

        {
          name: "--orphan",
          description:
            "Create a new orphan branch, named <new_branch>, started from <start_point> and switch to it",
          args: {
            name: "New Branch",
          },
        },

        {
          name: "--ignore-skip-worktree-bits",
          description:
            "In sparse checkout mode, git checkout -- <paths> would update only entries matched by <paths> and sparse patterns in $GIT_DIR/info/sparse-checkout. This option ignores the sparse patterns and adds back any files in <paths>",
        },

        {
          name: ["-m", "--merge"],
          description:
            "When switching branches, if you have local modifications to one or more files that are different between the current branch and the branch to which you are switching, the command refuses to switch branches in order to preserve your modifications in context",
        },

        {
          name: "--conflict",
          description:
            "The same as --merge option above, but changes the way the conflicting hunks are presented, overriding the merge.conflictStyle configuration variable. Possible values are 'merge' (default) and 'diff3' (in addition to what is shown by 'merge' style, shows the original contents)",
          insertValue: "--conflict=",
          args: {
            isOptional: true,
            suggestions: ["merge", "diff3"],
          },
        },

        {
          name: ["-p", "--patch"],
          description:
            "Interactively select hunks in the difference between the <tree-ish> (or the index, if unspecified) and the working tree",
        },

        {
          name: "--ignore-other-worktrees",
          description:
            "Git checkout refuses when the wanted ref is already checked out by another worktree. This option makes it check the ref out anyway. In other words, the ref can be held by more than one worktree",
        },

        {
          name: "--overwrite-ignore",
          description:
            "Silently overwrite ignored files when switching branches. This is the default behavior",
        },

        {
          name: "--no-overwrite-ignore",
          description:
            "Use --no-overwrite-ignore to abort the operation when the new branch contains ignored files",
        },

        {
          name: "--recurse-submodules",
          description:
            "Using --recurse-submodules will update the content of all active submodules according to the commit recorded in the superproject. If local modifications in a submodule would be overwritten the checkout will fail unless -f is used. If nothing (or --no-recurse-submodules) is used, submodules working trees will not be updated. Just like git-submodule[1], this will detach HEAD of the submodule",
        },

        {
          name: "--no-recurse-submodules",
          description: "Submodules working trees will not be updated",
        },

        {
          name: "--overlay ",
          description:
            "In the default overlay mode, git checkout never removes files from the index or the working tree",
        },

        {
          name: "--no-overlay",
          description:
            "When specifying --no-overlay, files that appear in the index and working tree, but not in <tree-ish> are removed, to make them match <tree-ish> exactly",
        },

        {
          name: "--pathspec-from-file",
          description:
            "Pathspec is passed in <file> instead of commandline args",
          args: {
            name: "file",
            template: "filepaths",
          },
        },

        {
          name: "--pathspec-file-nul",
          description: "Only meaningful with --pathspec-from-file",
        },
      ],
      args: [
        {
          name: "branch, file, tag or commit",
          description: "Branch, file, tag or commit to switch to",
          isOptional: true,
          generators: [
            gitGenerators.remoteLocalBranches,
            gitGenerators.tags,
            { template: ["filepaths", "folders"] },
          ],
          suggestions: [
            {
              name: "-",
              description: "Switch to the last used branch",
              icon: "fig://icon?type=git",
            },
          ],
        },
        {
          name: "pathspec",
          description: "Limits the paths affected by the operation",
          isOptional: true,
          isVariadic: true,
          template: "filepaths",
        },
      ],
    },
    {
      name: "cherry-pick",
      description: "Apply the changes introduced by some existing commits",
      subcommands: [
        {
          name: "--continue",
          description:
            "Continue the operation in progress using the information in .git/sequencer",
        },
        {
          name: "--skip",
          description:
            "Skip the current commit and continue with the rest of the sequence",
        },
        {
          name: "--quit",
          description: "Forget about the current operation in progress",
        },
        {
          name: "--abort",
          description:
            "Cancel the operation and return to the pre-sequence state",
        },
      ],
      args: {
        name: "commit",
        description: "Commits to cherry-pick",
        isVariadic: true,
        generators: gitGenerators.commits,
      },
      options: [
        {
          name: ["-e", "--edit"],
          description:
            "With this option, git cherry-pick will let you edit the commit message prior to committing",
        },
        {
          name: "--cleanup",
          description:
            "This option determines how the commit message will be cleaned up before being passed on to the commit machinery",
          args: {
            name: "mode",
            description:
              "Determines how the supplied commit messaged should be cleaned up before committing",
            suggestions: [
              {
                name: "strip",
                description:
                  "Strip leading and trailing empty lines, trailing whitepace, commentary and collapse consecutive empty lines",
              },
              {
                name: "whitespace",
                description: "Same as strip except #commentary is not removed",
              },
              {
                name: "verbatim",
                description: "Do not change the message at all",
              },
              {
                name: "scissors",
                description:
                  "Same as whitespace except that everything from (and including) the line found below is truncated",
              },
              {
                name: "default",
                description:
                  "Same as strip if the message is to be edited. Otherwise whitespace",
              },
            ],
          },
        },
        {
          name: "-x",
          description:
            'When recording the commit, append a line that says "(cherry picked from commit ...)" to the original commit message in order to indicate which commit this change was cherry-picked from',
        },
        {
          name: ["-m", "--mainline"],
          description:
            "Specifies the parent number (starting from 1) of the mainline and allows cherry-pick to replay the change relative to the specified parent",
          args: {
            name: "parent-number",
          },
        },
        {
          name: ["-n", "--no-commit"],
          description:
            "Applies changes necessary to cherry-pick each named commit to your working tree and the index without making any commit",
        },
        {
          name: ["-s", "--signoff"],
          description:
            "Add a Signed-off-by trailer at the end of the commit message",
        },
        {
          name: ["-S", "--gpg-sign"],
          exclusiveOn: ["--no-gpg-sign"],
          description: "GPG-sign commits",
          args: {
            name: "keyid",
            description: "Must be stuck to the option without a space",
            isOptional: true,
          },
        },
        {
          name: "--no-gpg-sign",
          exclusiveOn: ["-S", "--gpg-sign"],
          description:
            "Useful to countermand both commit.gpgSign configuration variable, and earlier --gpg-sign",
        },
        {
          name: "--ff",
          description:
            "If the current HEAD is the same as the parent of the cherry-pick'ed commit, the a fast forward to this commit will be performed",
        },
        {
          name: "--allow-empty",
          description:
            "Allow empty commits to be preserved automatically in a cherry-pick",
        },
        {
          name: "--allow-empty-message",
          description: "Allow commits with empty messages to be cherry picked",
        },
        {
          name: "--keep-redundant-commits",
          description: "Creates an empty commit object. Implies --allow-empty",
        },
        {
          name: "--strategy",
          description: "Use the given merge strategy. Should only be used once",
          args: {
            name: "strategy",
            suggestions: ["resolve", "recursive", "octopus", "ours", "subtree"],
          },
        },
        {
          name: ["-X", "--strategy-option"],
          description:
            "Pass the merge strategy-specific option through to the merge strategy",
          args: {
            name: "option",
            suggestions: [
              "ours",
              "theirs",
              "patience",
              "diff-algorithm",
              "diff-algorithm=patience",
              "diff-algorithm=minimal",
              "diff-algorithm=histogram",
              "diff-algorithm=myers",
              "ignore-space-change",
              "ignore-all-space",
              "ignore-space-at-eol",
              "ignore-cr-at-eol",
              "renormalize",
              "no-renormalize",
              "no-renames",
              "find-renames",
              "subtree",
            ],
          },
        },
        {
          name: "--rerere-autoupdate",
          exclusiveOn: ["--no-rerere-autoupdate"],
          description:
            "Allow the rerere mechanism to update the index with the result of auto-conflict resolution if possible",
        },
        {
          name: "--no-rerere-autoupdate",
          exclusiveOn: ["--rerere-autoupdate"],
          description:
            "Do not allow the rerere mechanism to update the index with the result of auto-conflict resolution if possible",
        },
      ],
    },
    {
      name: "submodule",
      description: "Initialize, update or inspect submodules",
      subcommands: [
        {
          name: "add",
          description:
            "Add the given repository as a submodule at the given path to the changeset to be committed next to the current project",
          options: [
            {
              name: "-b",
              description: "Branch of repository to add as submodule",
              args: {
                name: "branch",
              },
            },
            {
              name: ["-f", "--force"],
              description: "Allow adding an otherwise ignored submodule path",
            },
            {
              name: "--name",
              description:
                "It sets the submodule’s name to the given string instead of defaulting to its path",
              insertValue: "--name '{cursor}'",
              args: {
                name: "name",
                description: "Directory name",
              },
            },
            {
              name: "--reference",
              description: "Remote repository to be cloned",
              args: {
                name: "repository",
                description: "Remote repository to be cloned",
              },
            },
            {
              name: "--depth",
              description:
                "Create a shallow clone with a history truncated to the specified number of revisions",
              args: {
                name: "depth",
                description: "Specified number of revisions",
              },
            },
            {
              name: "--",
              description: "End of subcommand options",
            },
          ],
          args: [
            {
              name: "repository",
            },
            {
              name: "path",
              isOptional: true,
              template: "filepaths",
            },
          ],
        },
        {
          name: "status",
          description: "Show the status of the submodules",
          options: [
            {
              name: "--cached",
              description:
                "Will instead print the SHA-1 recorded in the superproject for each submodule",
            },
            {
              name: "--recursive",
              description:
                "Will recurse into nested submodules, and show their status as well",
            },
            {
              name: "--",
              description: "End of subcommand options",
            },
          ],
          args: {
            name: "path",
            isOptional: true,
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: "init",
          description: "Initialize the submodules recorded in the index",
          options: [
            {
              name: "--",
              description: "End of subcommand options",
            },
          ],
          args: {
            name: "path",
            isOptional: true,
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: "deinit",
          description: "Unregister the given submodules",
          options: [
            {
              name: ["-f", "--force"],
              description:
                "The submodule’s working tree will be removed even if it contains local modifications",
            },
            {
              name: "--all",
              description: "Unregister all submodules in the working tree",
            },
            {
              name: "--",
              description: "End of subcommand options",
            },
          ],
          args: {
            name: "path",
            isOptional: true,
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: "update",
          description:
            "Update the registered submodules to match what the superproject expects by cloning missing submodules, fetching missing commits in submodules and updating the working tree of the submodules",
          options: [
            {
              name: "--init",
              description:
                "Initialize all submodules for which 'git submodule init' has not been called so far before updating",
            },
            {
              name: "--remote",
              description:
                "Instead of using the superproject’s recorded SHA-1 to update the submodule, use the status of the submodule’s remote-tracking branch",
            },
            {
              name: ["-N", "--no-fetch"],
              description: "Don’t fetch new objects from the remote site",
            },
            {
              name: "--no-recommend-shallow",
              description: "Ignore the suggestions",
            },
            {
              name: "--recommend-shallow",
              description:
                "The initial clone of a submodule will use the recommended submodule.<name>.shallow as provided by the .gitmodules file",
            },
            {
              name: ["-f", "--force"],
              description:
                "Throw away local changes in submodules when switching to a different commit; and always run a checkout operation in the submodule, even if the commit listed in the index of the containing repository matches the commit checked out in the submodule",
            },
            {
              name: "--checkout",
              description:
                "The commit recorded in the superproject will be checked out in the submodule on a detached HEAD",
            },
            {
              name: "--rebase",
              description:
                "The current branch of the submodule will be rebased onto the commit recorded in the superproject",
            },
            {
              name: "--merge",
              description:
                "The commit recorded in the superproject will be merged into the current branch in the submodule",
            },
            {
              name: "--reference",
              description: "Remote repository",
              args: {
                name: "repository",
              },
            },
            {
              name: "--depth",
              description:
                "Create a shallow clone with a history truncated to the specified number of revisions",
              args: {
                name: "depth",
              },
            },
            {
              name: "--recursive",
              description: "Traverse submodules recursively",
            },
            {
              name: "--jobs",
              description: "Clone new submodules in parallel with as many jobs",
              args: {
                name: "n",
              },
            },
            {
              name: "--single-branch",
              description:
                "Clone only one branch during update: HEAD or one specified by --branch",
            },
            {
              name: "--no-single-branch",
              description:
                "Don't clone only one branch during update: HEAD or one specified by --branch",
            },
            { name: "--", description: "End of subcommand options" },
          ],
          args: {
            name: "path",
            isOptional: true,
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: "set-branch",
          description:
            "Sets the default remote tracking branch for the submodule",
          options: [
            {
              name: ["-b", "--branch"],
              description: "Branch of repository to add as submodule",
              args: {
                name: "branch",
                description: "Remote branch to be specified",
              },
            },
            {
              name: ["-d", "--default"],
              description:
                "Removes the submodule.<name>.branch configuration key, which causes the tracking branch to default to the remote HEAD",
            },
            {
              name: "--",
              description: "End of subcommand options",
            },
          ],
          args: {
            name: "path",
            description: "Path to submodule",
            template: "filepaths",
          },
        },
        {
          name: "set-url",
          description: "Sets the URL of the specified submodule to <newurl>",
          options: [
            {
              name: "--",
              description: "End of command options",
            },
          ],
          args: [
            {
              name: "path",
              description: "Path to specified submodule",
              template: "filepaths",
            },
            {
              name: "newurl",
              description: "New url of submodule",
            },
          ],
        },
        {
          name: "summary",
          description:
            "Show commit summary between the given commit (defaults to HEAD) and working tree/index",
          options: [
            {
              name: "--cached",
              description:
                "This command will recurse into the registered submodules, and sync any nested submodules within",
            },
            {
              name: "--files",
              description:
                "Show the series of commits in the submodule between the index of the super project and the working tree of the submodule",
            },
            {
              name: "-n",
              description:
                "Limit the summary size (number of commits shown in total). Giving 0 will disable the summary; a negative number means unlimited (the default). This limit only applies to modified submodules. The size is always limited to 1 for added/deleted/typechanged submodules",
              args: {
                name: "n",
              },
            },
            {
              name: "--summary-limit",
              description:
                "Limit the summary size (number of commits shown in total). Giving 0 will disable the summary; a negative number means unlimited (the default). This limit only applies to modified submodules. The size is always limited to 1 for added/deleted/typechanged submodules",
              args: {
                name: "n",
              },
            },
            {
              name: "--",
              description: "Everything after this is an argument",
            },
          ],
          args: [
            {
              name: "commit",
              isOptional: true,
            },
            {
              name: "path",
              isOptional: true,
              isVariadic: true,
              template: "filepaths",
            },
          ],
        },
        {
          name: "foreach",
          description:
            "Evaluates an arbitrary shell command in each checked out submodule",
          options: [
            {
              name: "--recursive",
              description:
                "This command will recurse into the registered submodules, and sync any nested submodules within",
            },
          ],
          args: {
            name: "command",
          },
        },
        {
          name: "sync",
          description:
            "Synchronizes submodules' remote URL configuration setting to the value specified in .gitmodules",
          options: [
            {
              name: "--recursive",
              description:
                "This command will recurse into the registered submodules, and sync any nested submodules within",
            },
            {
              name: "--",
              description: "Everything after this is an argument",
            },
          ],
          args: {
            name: "path",
            isOptional: true,
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: "absorbgitdirs",
          description:
            "If a git directory of a submodule is inside the submodule, move the git directory of the submodule into its superproject’s $GIT_DIR/modules path and then connect the git directory and its working directory by setting the core.worktree and adding a .git file pointing to the git directory embedded in the superprojects git directory",
        },
      ],
      options: [
        {
          name: ["-q", "--quiet"],
          description: "Only print error messages",
        },
        {
          name: "--cached",
          description: "The commit stored in the index is used instead",
        },
      ],
    },
    {
      name: "merge",
      description: "Join two or more development histories together",
      args: {
        name: "branch",
        generators: gitGenerators.remoteLocalBranches,
        isVariadic: true,
        isOptional: true,
        // A single dash can be used as arg to merge as short hand for the previous branch
        // https://github.com/git/git/blob/master/Documentation/RelNotes/1.7.6.txt#L84
        suggestions: [
          { name: "-", description: "Shorthand for the previous branch" },
        ],
      },
      options: [
        {
          name: "--commit",
          description:
            "Perform the merge and commit the result. This option can be used to override --no-commit",
        },

        {
          name: "--no-commit",
          description:
            "Perform the merge and stop just before creating a merge commit, to give the user a chance to inspect and further tweak the merge result before committing",
        },

        {
          name: ["--edit", "-e"],
          description:
            "Invoke an editor before committing successful mechanical merge to further edit the auto-generated merge message, so that the user can explain and justify the merge",
        },

        {
          name: "--no-edit",
          description:
            "The --no-edit option can be used to accept the auto-generated message (this is generally discouraged). The --edit (or -e) option is still useful if you are giving a draft message with the -m option from the command line and want to edit it in the editor",
        },

        {
          name: "--cleanup",
          description:
            "This option determines how the merge message will be cleaned up before committing. See git-commit[1] for more details. In addition, if the <mode> is given a value of scissors, scissors will be appended to MERGE_MSG before being passed on to the commit machinery in the case of a merge conflict",
          insertValue: "--cleanup=",
          args: {
            name: "mode",
            suggestions: [
              "strip",
              "whitespace",
              "verbatim",
              "scissors",
              "default",
            ],
          },
        },

        {
          name: "--ff",
          description:
            "When possible resolve the merge as a fast-forward (only update the branch pointer to match the merged branch; do not create a merge commit). When not possible (when the merged-in history is not a descendant of the current history), create a merge commit",
        },

        {
          name: "--no-ff",
          description:
            "Create a merge commit in all cases, even when the merge could instead be resolved as a fast-forward",
        },

        {
          name: "--ff-only",
          description:
            "Resolve the merge as a fast-forward when possible. When not possible, refuse to merge and exit with a non-zero status",
        },

        {
          name: ["-S", "--gpg-sign"],
          description:
            "GPG-sign the resulting merge commit. The keyid argument is optional and defaults to the committer identity; if specified, it must be stuck to the option without a space",
          args: {
            name: "keyid",
            isOptional: true,
          },
        },

        {
          name: "--no-gpg-sign",
          description:
            "Is useful to countermand both commit.gpgSign configuration variable, and earlier --gpg-sign",
        },

        {
          name: "--log",
          description:
            "In addition to branch names, populate the log message with one-line descriptions from at most <n> actual commits that are being merged. See also git-fmt-merge-msg[1]",
          args: {
            name: "n",
            isOptional: true,
          },
        },

        {
          name: "--no-log",
          description:
            "Do not list one-line descriptions from the actual commits being merged",
        },

        {
          name: "--signoff",
          description:
            "Add a Signed-off-by trailer by the committer at the end of the commit log message. The meaning of a signoff depends on the project to which you’re committing. For example, it may certify that the committer has the rights to submit the work under the project’s license or agrees to some contributor representation, such as a Developer Certificate of Origin. (See http://developercertificate.org for the one used by the Linux kernel and Git projects.) Consult the documentation or leadership of the project to which you’re contributing to understand how the signoffs are used in that project",
        },

        {
          name: "--no-signoff",
          description:
            "Can be used to countermand an earlier --signoff option on the command line",
        },

        {
          name: "--stat",
          description:
            "Show a diffstat at the end of the merge. The diffstat is also controlled by the configuration option merge.stat",
        },

        {
          name: ["-n", "--no-stat"],
          description: "Do not show a diffstat at the end of the merge",
        },

        {
          name: "--squash",
          description:
            "With --squash, --commit is not allowed, and will fail. Produce the working tree and index state as if a real merge happened (except for the merge information), but do not actually make a commit, move the HEAD, or record $GIT_DIR/MERGE_HEAD (to cause the next git commit command to create a merge commit). This allows you to create a single commit on top of the current branch whose effect is the same as merging another branch (or more in case of an octopus)",
        },

        {
          name: "--no-squash",
          description:
            "Perform the merge and commit the result. This option can be used to override --squash",
        },

        {
          name: "--no-verify",
          description:
            "This option bypasses the pre-merge and commit-msg hooks. See also githooks[5]",
        },

        {
          name: ["-s ", "--strategy"],
          description:
            "Use the given merge strategy; can be supplied more than once to specify them in the order they should be tried. If there is no -s option, a built-in list of strategies is used instead (git merge-recursive when merging a single head, git merge-octopus otherwise)",
          args: {
            name: "strategy",
            isVariadic: true,
            suggestions: ["resolve", "recursive", "octopus", "ours", "subtree"],
          },
        },

        {
          name: ["-X", "--strategy-option"],
          description:
            "Pass merge strategy specific option through to the merge strategy",
          args: {
            name: "option",
            suggestions: [
              "ours",
              "theirs",
              "patience",
              "diff-algorithm",
              "diff-algorithm=patience",
              "diff-algorithm=minimal",
              "diff-algorithm=histogram",
              "diff-algorithm=myers",
              "ignore-space-change",
              "ignore-all-space",
              "ignore-space-at-eol",
              "ignore-cr-at-eol",
              "renormalize",
              "no-renormalize",
              "no-renames",
              "find-renames",
              "subtree",
            ],
          },
        },

        {
          name: "--verify-signatures",
          description:
            "Verify that the tip commit of the side branch being merged is signed with a valid key, i.e. a key that has a valid uid: in the default trust model, this means the signing key has been signed by a trusted key. If the tip commit of the side branch is not signed with a valid key, the merge is aborted",
        },

        {
          name: "--no-verify-signatures",
          description:
            "Do not verify that the tip commit of the side branch being merged is signed with a valid key",
        },

        {
          name: "--summary",
          description:
            "Synonym to --stat ; this is deprecated and will be removed in the future",
        },

        {
          name: "--no-summary",
          description:
            "Synonym to --no-stat ; this is deprecated and will be removed in the future",
        },

        {
          name: ["-q", "--quiet"],
          description: "Operate quietly. Implies --no-progress",
        },

        { name: ["-v", "--verbose"], description: "Be verbose" },

        {
          name: "--progress",
          description:
            "Turn progress on/off explicitly. If neither is specified, progress is shown if standard error is connected to a terminal. Note that not all merge strategies may support progress reporting",
        },

        {
          name: "--no-progress",
          description:
            "Turn progress on/off explicitly. If neither is specified, progress is shown if standard error is connected to a terminal. Note that not all merge strategies may support progress reporting",
        },

        {
          name: "--autostash",
          description:
            "Automatically create a temporary stash entry before the operation begins, and apply it after the operation ends. This means that you can run the operation on a dirty worktree. However, use with care: the final stash application after a successful merge might result in non-trivial conflicts",
        },

        {
          name: "--no-autostash",
          description:
            "Do not automatically create a temporary stash entry before the operation begins, and apply it after the operation ends",
        },

        {
          name: "--allow-unrelated-histories",
          description:
            "By default, git merge command refuses to merge histories that do not share a common ancestor. This option can be used to override this safety when merging histories of two projects that started their lives independently. As that is a very rare occasion, no configuration variable to enable this by default exists and will not be added",
        },

        {
          name: "-m",
          description:
            "Set the commit message to be used for the merge commit (in case one is created). If --log is specified, a shortlog of the commits being merged will be appended to the specified message. The git fmt-merge-msg command can be used to give a good default for automated git merge invocations. The automated message can include the branch description",
          args: {
            name: "message",
          },
        },

        {
          name: ["-F", "--file"],
          description:
            "Read the commit message to be used for the merge commit (in case one is created). If --log is specified, a shortlog of the commits being merged will be appended to the specified message",
          args: {
            name: "file",
            template: "filepaths",
          },
        },

        {
          name: "--rerere-autoupdate",
          description:
            "Allow the rerere mechanism to update the index with the result of auto-conflict resolution if possible",
        },

        {
          name: "--no-rerere-autoupdate",
          description:
            "Do not allow the rerere mechanism to update the index with the result of auto-conflict resolution if possible",
        },

        {
          name: "--overwrite-ignore",
          description:
            "Silently overwrite ignored files from the merge result. This is the default behavior. Use --no-overwrite-ignore to abort",
        },

        {
          name: "--no-overwrite-ignore",
          description:
            "Do not silently overwrite ignored files from the merge result",
        },

        {
          name: "--abort",
          description:
            "Abort the current conflict resolution process, and try to reconstruct the pre-merge state. If an autostash entry is present, apply it to the worktree. If there were uncommitted worktree changes present when the merge started, git merge --abort will in some cases be unable to reconstruct these changes. It is therefore recommended to always commit or stash your changes before running git merge. git merge --abort is equivalent to git reset --merge when MERGE_HEAD is present unless MERGE_AUTOSTASH is also present in which case git merge --abort applies the stash entry to the worktree whereas git reset --merge will save the stashed changes in the stash list",
        },

        {
          name: "--quit",
          description:
            "Forget about the current merge in progress. Leave the index and the working tree as-is. If MERGE_AUTOSTASH is present, the stash entry will be saved to the stash list",
        },

        {
          name: "--continue",
          description:
            "After a git merge stops due to conflicts you can conclude the merge by running git merge --continue (see 'HOW TO RESOLVE CONFLICTS' section below)",
        },
      ],
    },
    {
      name: "mergetool",
      description: "Open the git tool to fix conflicts",
    },
    {
      name: "tag",
      description:
        "Create, list, delete or verify a tag object signed with GPG",
      options: [
        { name: ["-l", "--list"], description: "List tag names" },
        {
          name: "-n",
          description: "Print <n> lines of each tag message",
          args: {
            name: "n",
            suggestions: [{ name: "1" }, { name: "2" }, { name: "3" }],
          },
        },
        { name: ["-d", "--delete"], description: "Delete tags" },
        { name: ["-v", "--verify"], description: "Verify tags" },
        {
          name: ["-a", "--annotate"],
          description: "Annotated tag, needs a message",
        },
        {
          name: ["-m", "--message"],
          insertValue: "-m '{cursor}'",
          description: "Tag message",
          args: { name: "message" },
        },
      ],
      args: {
        name: "tagname",
        description: "Select a tag",
        generators: gitGenerators.tags,
        isOptional: true,
      },
    },
    {
      name: "restore",
      description: "Restore working tree files",
      options: [
        {
          name: ["-s", "--source"],
          description:
            "Restore the working tree files with the content from the given tree",
          args: {
            name: "tree",
          },
        },
        {
          name: ["-p", "--patch"],
          description:
            "Interactively select hunks in the difference between the restore source and the restore location",
        },
        {
          name: ["-W", "--worktree"],
          description: "Use the worktree as the restore location",
        },
        {
          name: ["-S", "--staged"],
          description: "Use staging as the restore location",
        },
        {
          name: ["-q", "--quiet"],
          description: "Quiet, suppress feedback messages",
        },
        {
          name: "--progress",
          description:
            "Progress status is reported on the standard error stream by default when it is attached to a terminal",
        },
        {
          name: "--no-progress",
          description: "Disable progress status reporting",
        },
        {
          name: ["-2", "--ours"],
          description:
            "When restoring paths from the index, check out stage #2 (ours) for unmerged paths",
          exclusiveOn: ["--theirs"],
        },
        {
          name: ["-3", "--theirs"],
          description:
            "When re out paths from the index, check out stage #3 (theirs) for unmerged paths",
          exclusiveOn: ["--ours"],
        },
        {
          name: ["-m", "--merge"],
          description:
            "When restoring files on the working tree from the index, recreate the conflicted merge in the unmerged paths",
        },
        {
          name: "--conflict",
          description:
            "The same as --merge option, but changes the way the conflicting hunks are presented",
          args: {
            name: "style",
            suggestions: ["merge", "diff3"],
          },
        },
        {
          name: "--ignore-unmerged",
          description:
            "When restoring files on the working tree from the index, do not abort the operation if there are unmerged entries",
          exclusiveOn: ["--ours", "--theirs", "--merge", "--conflict"],
        },
        {
          name: "--ignore-skip-worktree-bits",
          description:
            "In sparse checkout mode, by default is to only update entries matched by <pathspec> and sparse patterns in $GIT_DIR/info/sparse-checkout",
        },
        {
          name: "--recurse-submodules",
          description:
            "If <pathspec> names an active submodule and the restore location includes the working tree, the submodule will only be updated if this option is given, in which case its working tree will be restored to the commit recorded in the superproject, and any local modifications overwritten",
          exclusiveOn: ["--no-recurse-submodules"],
        },
        {
          name: "--no-recurse-submodules",
          description: "Submodules working trees will not be updated",
          exclusiveOn: ["--recurse-submodules"],
        },
        {
          name: "--overlay",
          description:
            "In overlay mode, the command never removes files when restoring",
          exclusiveOn: ["--no-overlay"],
        },
        {
          name: "--no-overlay",
          description:
            "In no-overlay mode, tracked files that do not appear in the --source tree are removed, to make them match <tree> exactly",
          exclusiveOn: ["--overlay"],
        },
        {
          name: "--pathspec-from-file",
          description:
            "Pathspec is passed in <file> instead of commandline args. If <file> is exactly - then standard input is used",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--pathspec-file-nul",
          description:
            "Only meaningful with --pathspec-from-file. Pathspec elements are separated with NUL character and all other characters are taken literally (including newlines and quotes)",
        },
        {
          name: "--",
          description: "Do not interpret any more arguments as options",
        },
      ],
      args: {
        name: "pathspec",
        isOptional: true,
        isVariadic: true,
        generators: gitGenerators.files_for_staging,
      },
    },
    {
      name: "switch",
      description: "Switch branches",
      options: [
        {
          name: ["-c", "--create"],
          description:
            "Create a new branch named <new-branch> starting at <start-point> before switching to the branch",
          args: [
            {
              name: "new branch",
            },
            {
              name: "start point",
              isOptional: true,
              generators: gitGenerators.commits,
            },
          ],
        },
        {
          name: ["-C", "--force-create"],
          description:
            "Similar to --create except that if <new-branch> already exists it will be reset to <start-point>",
          args: [
            {
              name: "new branch",
            },
            {
              name: "start point",
              isOptional: true,
              generators: gitGenerators.commits,
            },
          ],
        },
        {
          name: ["-d", "--detach"],
          description:
            "Switch to a commit for inspection and discardable experiments",
        },
        {
          name: "--guess",
          description:
            "If <branch> is not found but there does exist a tracking branch in exactly one remote (call it <remote>) with a matching name",
        },
        {
          name: "--no-guess",
          description: "Disable --guess",
        },
        {
          name: ["-f", "--force"],
          description: "An alias for --discard-changes",
          isDangerous: true,
        },
        {
          name: "--discard-changes",
          description:
            "Proceed even if the index or the working tree differs from HEAD. Both the index and working tree are restored to match the switching target",
          isDangerous: true,
        },
        {
          name: ["-m", "--merge"],
          description:
            "If you have local modifications to one or more files that are different between the current branch and the branch to which you are switching, the command refuses to switch branches in order to preserve your modifications in context",
        },
        {
          name: "--conflict",
          description:
            "The same as --merge option above, but changes the way the conflicting hunks are presented, overriding the merge.conflictStyle configuration variable",
          args: {
            name: "style",
            suggestions: ["merge", "diff3"],
            default: "merge",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Quiet, suppress feedback messages",
        },
        {
          name: "--progress",
          description:
            "Progress status is reported on the standard error stream by default when it is attached to a terminal",
        },
        {
          name: "--no-progress",
          description: "Disable progress status reporting",
        },
        {
          name: ["-t", "--track"],
          exclusiveOn: ["--no-track"],
          description:
            "When creating a new branch, set up 'upstream' configuration",
          args: [
            {
              name: "branch",
              generators: gitGenerators.localBranches,
            },
            {
              name: "start point",
              isOptional: true,
              generators: gitGenerators.commits,
            },
          ],
        },
        {
          name: "--no-track",
          exclusiveOn: ["--track", "-t"],
          description:
            "Do not set up 'upstream' configuration, even if the branch.autoSetupMerge configuration variable is true",
          args: [
            {
              generators: gitGenerators.localBranches,
            },
            {
              isOptional: true,
              generators: gitGenerators.localBranches,
            },
          ],
        },
        {
          name: "--orphan",
          description: "Create a new orphan branch, named <new-branch>",
          args: {
            name: "new branch",
          },
        },
        {
          name: "--ignore-other-worktrees",
          description:
            "Git switch refuses when the wanted ref is already checked out by another worktree",
        },
        {
          name: "--recurse-submodules",
          exclusiveOn: ["--no-recurse-submodules"],
          description:
            "Updates the content of all active submodules according to the commit recorded in the superproject",
        },
        {
          name: "--no-recurse-submodules",
          exclusiveOn: ["--recurse-submodules"],
          description: "Submodules working trees will not be updated",
        },
      ],
      args: [
        {
          name: "branch name",
          description: "Branch or commit to switch to",
          generators: gitGenerators.localBranches,
          suggestions: [
            {
              name: "-",
              description: "Switch to the last used branch",
              icon: "fig://icon?type=git",
            },
          ],
        },
        {
          name: "start point",
          isOptional: true,
          generators: gitGenerators.commits,
        },
      ],
    },
    {
      name: "worktree",
      description: "Manage multiple working trees",
      subcommands: [
        {
          name: "add",
          description: "Create <path> and checkout <commit-ish> into it",
          options: [
            {
              name: ["-f", "--force"],
              description:
                "By default, add refuses to create a new working tree when <commit-ish> is a branch name and is already checked out by another working tree, or if <path> is already assigned to some working tree but is missing (for instance, if <path> was deleted manually). This option overrides these safeguards. To add a missing but locked working tree path, specify --force twice",
            },
            {
              name: ["-d", "--detach"],
              description:
                'With add, detach HEAD in the new working tree. See "DETACHED HEAD" in git-checkout[1]',
            },
            {
              name: "--checkout",
              description:
                'By default, add checks out <commit-ish>, however, --no-checkout can be used to suppress checkout in order to make customizations, such as configuring sparse-checkout. See "Sparse checkout" in git-read-tree[1]',
            },
            {
              name: "--lock",
              description:
                "Keep the working tree locked after creation. This is the equivalent of git worktree lock after git worktree add, but without a race condition",
            },
            {
              name: ["-b", "-B"],
              description:
                "With add, create a new branch named <new-branch> starting at <commit-ish>, and check out <new-branch> into the new working tree. If <commit-ish> is omitted, it defaults to HEAD. By default, -b refuses to create a new branch if it already exists. -B overrides this safeguard, resetting <new-branch> to <commit-ish>",
              args: {
                name: "new-branch",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List details of each working tree",
          options: [
            {
              name: "--porcelain",
              description:
                "With list, output in an easy-to-parse format for scripts. This format will remain stable across Git versions and regardless of user configuration. See below for details",
            },
            {
              name: ["-v", "--verbose"],
              description:
                "With list, output additional information about worktrees (see below)",
            },
            {
              name: "--expire",
              description:
                "With list, annotate missing working trees as prunable if they are older than <time>",
              args: {
                name: "time",
              },
            },
          ],
        },
        {
          name: "lock",
          description:
            "If a working tree is on a portable device or network share which is not always mounted, lock it to prevent its administrative files from being pruned automatically",
          args: {
            name: "worktree",
            description:
              "Working trees can be identified by path, either relative or absolute",
          },
          options: [
            {
              name: "--reason",
              description:
                "With lock or with add --lock, an explanation <reason> why the working tree is locked",
              args: {
                name: "reason",
              },
            },
          ],
        },
        {
          name: "move",
          description: "Move a working tree to a new location",
          args: [
            {
              name: "worktree",
              description:
                "Working trees can be identified by path, either relative or absolute",
            },
            {
              name: "new-path",
              template: "filepaths",
            },
          ],
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Move refuses to move a locked working tree unless --force is specified twice. If the destination is already assigned to some other working tree but is missing (for instance, if <new-path> was deleted manually), then --force allows the move to proceed; use --force twice if the destination is locked",
            },
          ],
        },
        {
          name: "prune",
          description: "Prune working tree information in $GIT_DIR/worktrees",
          options: [
            {
              name: ["-n", "--dry-run"],
              description:
                "With prune, do not remove anything; just report what it would remove",
            },
            {
              name: ["-v", "--verbose"],
              description: "With prune, report all removals",
            },
            {
              name: "--expire",
              description:
                "With prune, only expire unused working trees older than <time>",
              args: {
                name: "time",
              },
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a working tree",
          args: {
            name: "worktree",
            description:
              "Working trees can be identified by path, either relative or absolute",
          },
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Remove refuses to remove an unclean working tree unless --force is used. To remove a locked working tree, specify --force twice",
            },
          ],
        },
        {
          name: "repair",
          description:
            "Repair working tree administrative files, if possible, if they have become corrupted or outdated due to external factors",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "unlock",
          description:
            "Unlock a working tree, allowing it to be pruned, moved or deleted",
          args: {
            name: "worktree",
            description:
              "Working trees can be identified by path, either relative or absolute",
          },
        },
      ],
    },
  ],
  additionalSuggestions: [
    {
      name: "commit -m 'msg'",
      description: "Git commit shortcut",
      insertValue: "commit -m '{cursor}'",
      icon: "fig://template?color=2ecc71&badge=🔥",
      // type: "shortcut",
    },
  ],
};

export default completionSpec;
