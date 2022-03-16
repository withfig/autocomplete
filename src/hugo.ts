const completionSpec: Fig.Spec = {
  name: "hugo",
  description: "Hugo builds your site",
  subcommands: [
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: "config",
      description: "Print the site configuration",
      subcommands: [
        { name: "mounts", description: "Print the configured file mounts" },
      ],
      options: [
        {
          name: ["--environment", "-e"],
          description: "Build environment",
          isPersistent: true,
          args: { name: "environment" },
        },
        {
          name: "--ignoreVendorPaths",
          description:
            "Ignores any _vendor for module paths matching the given Glob pattern",
          isPersistent: true,
          args: { name: "ignoreVendorPaths" },
        },
        {
          name: ["--source", "-s"],
          description: "Filesystem path to read files relative from",
          isPersistent: true,
          args: { name: "source", template: ["folders"] },
        },
        {
          name: "--themesDir",
          description: "Filesystem path to themes directory",
          isPersistent: true,
          args: { name: "themesDir" },
        },
      ],
    },
    {
      name: "convert",
      description: "Convert your content to different formats",
      subcommands: [
        { name: "toJSON", description: "Convert front matter to JSON" },
        { name: "toTOML", description: "Convert front matter to TOML" },
        { name: "toYAML", description: "Convert front matter to YAML" },
      ],
      options: [
        {
          name: ["--environment", "-e"],
          description: "Build environment",
          isPersistent: true,
          args: { name: "environment" },
        },
        {
          name: "--ignoreVendorPaths",
          description:
            "Ignores any _vendor for module paths matching the given Glob pattern",
          isPersistent: true,
          args: { name: "ignoreVendorPaths" },
        },
        {
          name: ["--output", "-o"],
          description: "Filesystem path to write files to",
          isPersistent: true,
          args: { name: "output" },
        },
        {
          name: ["--source", "-s"],
          description: "Filesystem path to read files relative from",
          isPersistent: true,
          args: { name: "source", template: ["folders"] },
        },
        {
          name: "--themesDir",
          description: "Filesystem path to themes directory",
          isPersistent: true,
          args: { name: "themesDir" },
        },
        {
          name: "--unsafe",
          description: "Enable less safe operations, please backup first",
          isPersistent: true,
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy your site to a Cloud provider",
      options: [
        {
          name: "--confirm",
          description:
            "Ask for confirmation before making changes to the target",
        },
        { name: "--dryRun", description: "Dry run" },
        { name: "--force", description: "Force upload of all files" },
        {
          name: "--invalidateCDN",
          description:
            "Invalidate the CDN cache listed in the deployment target",
        },
        {
          name: "--maxDeletes",
          description: "Maximum # of files to delete, or -1 to disable",
          args: { name: "maxDeletes", default: "256" },
        },
        {
          name: "--target",
          description:
            "Target deployment from deployments section in config file; defaults to the first one",
          args: { name: "target" },
        },
        {
          name: ["--environment", "-e"],
          description: "Build environment",
          isPersistent: true,
          args: { name: "environment" },
        },
        {
          name: "--ignoreVendorPaths",
          description:
            "Ignores any _vendor for module paths matching the given Glob pattern",
          isPersistent: true,
          args: { name: "ignoreVendorPaths" },
        },
        {
          name: ["--source", "-s"],
          description: "Filesystem path to read files relative from",
          isPersistent: true,
          args: { name: "source", template: ["folders"] },
        },
        {
          name: "--themesDir",
          description: "Filesystem path to themes directory",
          isPersistent: true,
          args: { name: "themesDir" },
        },
      ],
    },
    { name: "env", description: "Print Hugo version and environment info" },
    {
      name: "gen",
      description: "A collection of several useful generators",
      subcommands: [
        {
          name: "chromastyles",
          description:
            "Generate CSS stylesheet for the Chroma code highlighter",
          options: [
            {
              name: "--highlightStyle",
              description:
                "Style used for highlighting lines (see https://github.com/alecthomas/chroma)",
              isPersistent: true,
              args: { name: "highlightStyle", default: "bg:#ffffcc" },
            },
            {
              name: "--linesStyle",
              description:
                "Style used for line numbers (see https://github.com/alecthomas/chroma)",
              isPersistent: true,
              args: { name: "linesStyle" },
            },
            {
              name: "--style",
              description:
                "Highlighter style (see https://xyproto.github.io/splash/docs/)",
              isPersistent: true,
              args: {
                name: "style",
                default: "friendly",
                suggestions: [
                  "abap",
                  "algol",
                  "algol_nu",
                  "api",
                  "arduino",
                  "autumn",
                  "borland",
                  "bw",
                  "colorful",
                  "dracula",
                  "emacs",
                  "friendly",
                  "fruity",
                  "github",
                  "igor",
                  "lovelace",
                  "manni",
                  "monokai",
                  "monokailight",
                  "murphy",
                  "native",
                  "paraiso-dark",
                  "paraiso-light",
                  "pastie",
                  "perldoc",
                  "pygments",
                  "rainbow_dash",
                  "rrt",
                  "solarized-dark",
                  "solarized-dark256",
                  "solarized-light",
                  "swapoff",
                  "tango",
                  "trac",
                  "vim",
                  "vs",
                  "xcode",
                ],
              },
            },
          ],
        },
        {
          name: "doc",
          description: "Generate Markdown documentation for the Hugo CLI",
          options: [
            {
              name: "--dir",
              description: "The directory to write the doc",
              isPersistent: true,
              args: {
                name: "dir",
                default: "/tmp/hugodoc/",
                template: ["folders"],
              },
            },
          ],
        },
        {
          name: "man",
          description: "Generate man pages for the Hugo CLI",
          options: [
            {
              name: "--dir",
              description: "The directory to write the man pages",
              isPersistent: true,
              args: { name: "dir", default: "man/", template: ["folders"] },
            },
          ],
        },
      ],
    },
    {
      name: "import",
      description: "Import your site from others",
      subcommands: [
        {
          name: "jekyll",
          description: "Hugo import from Jekyll",
          options: [
            {
              name: "--force",
              description: "Allow import into non-empty target directory",
            },
          ],
        },
      ],
    },
    {
      name: "list",
      description: "Listing out various types of content",
      subcommands: [
        { name: "all", description: "List all posts" },
        { name: "drafts", description: "List all drafts" },
        { name: "expired", description: "List all posts already expired" },
        { name: "future", description: "List all posts dated in the future" },
      ],
      options: [
        {
          name: ["--environment", "-e"],
          description: "Build environment",
          isPersistent: true,
          args: { name: "environment" },
        },
        {
          name: "--ignoreVendorPaths",
          description:
            "Ignores any _vendor for module paths matching the given Glob pattern",
          isPersistent: true,
          args: { name: "ignoreVendorPaths" },
        },
        {
          name: ["--source", "-s"],
          description: "Filesystem path to read files relative from",
          isPersistent: true,
          args: { name: "source", template: ["folders"] },
        },
        {
          name: "--themesDir",
          description: "Filesystem path to themes directory",
          isPersistent: true,
          args: { name: "themesDir" },
        },
      ],
    },
    {
      name: "mod",
      description: "Various Hugo Modules helpers",
      subcommands: [
        {
          name: "clean",
          description: "Delete the Hugo Module cache for the current project",
          options: [
            { name: "--all", description: "Clean entire module cache" },
            {
              name: "--pattern",
              description:
                'Pattern matching module paths to clean (all if not set), e.g. "**hugo*"',
              args: { name: "pattern" },
            },
          ],
        },
        {
          name: "get",
          description: "Resolves dependencies in your current Hugo Project",
        },
        { name: "graph", description: "Print a module dependency graph" },
        {
          name: "init",
          description: "Initialize this project as a Hugo Module",
        },
        {
          name: "npm",
          description: "Various npm helpers",
          subcommands: [
            {
              name: "pack",
              description:
                "Experimental: Prepares and writes a composite package.json file for your project",
            },
          ],
        },
        {
          name: "tidy",
          description: "Remove unused entries in go.mod and go.sum",
        },
        {
          name: "vendor",
          description:
            "Vendor all module dependencies into the _vendor directory",
        },
        {
          name: "verify",
          description: "Verify dependencies",
          options: [
            {
              name: "--clean",
              description:
                "Delete module cache for dependencies that fail verification",
            },
          ],
        },
      ],
      options: [
        {
          name: ["--baseURL", "-b"],
          description:
            "Hostname (and path) to the root, e.g. http://spf13.com/",
          args: { name: "baseURL" },
        },
        {
          name: ["--buildDrafts", "-D"],
          description: "Include content marked as draft",
        },
        {
          name: ["--buildExpired", "-E"],
          description: "Include expired content",
        },
        {
          name: ["--buildFuture", "-F"],
          description: "Include content with publishdate in the future",
        },
        {
          name: "--cacheDir",
          description:
            "Filesystem path to cache directory. Defaults: $TMPDIR/hugo_cache/",
          args: { name: "cacheDir", template: ["folders"] },
        },
        {
          name: "--cleanDestinationDir",
          description:
            "Remove files from destination not found in static directories",
        },
        {
          name: ["--contentDir", "-c"],
          description: "Filesystem path to content directory",
          args: { name: "contentDir" },
        },
        {
          name: ["--destination", "-d"],
          description: "Filesystem path to write files to",
          args: { name: "destination", template: ["folders"] },
        },
        {
          name: "--disableKinds",
          description: "Disable different kind of pages (home, RSS etc.)",
          args: { name: "disableKinds" },
        },
        {
          name: "--enableGitInfo",
          description:
            "Add Git revision, date, author, and CODEOWNERS info to the pages",
        },
        {
          name: "--forceSyncStatic",
          description: "Copy all files when static is changed",
        },
        {
          name: "--gc",
          description:
            "Enable to run some cleanup tasks (remove unused cache files) after the build",
        },
        { name: "--ignoreCache", description: "Ignores the cache directory" },
        {
          name: ["--layoutDir", "-l"],
          description: "Filesystem path to layout directory",
          args: { name: "layoutDir" },
        },
        {
          name: "--minify",
          description: "Minify any supported output format (HTML, XML etc.)",
        },
        {
          name: "--noChmod",
          description: "Don't sync permission mode of files",
        },
        {
          name: "--noTimes",
          description: "Don't sync modification time of files",
        },
        { name: "--panicOnWarning", description: "Panic on first WARNING log" },
        {
          name: "--poll",
          description:
            "Set this to a poll interval, e.g --poll 700ms, to use a poll based approach to watch for file system changes",
          args: { name: "poll" },
        },
        {
          name: "--printI18nWarnings",
          description: "Print missing translations",
        },
        {
          name: "--printMemoryUsage",
          description: "Print memory usage to screen at intervals",
        },
        {
          name: "--printPathWarnings",
          description: "Print warnings on duplicate target paths etc",
        },
        {
          name: "--printUnusedTemplates",
          description: "Print warnings on unused templates",
        },
        {
          name: "--profile-cpu",
          description: "Write cpu profile to `file`",
          hidden: true,
          args: { name: "profile-cpu" },
        },
        {
          name: "--profile-mem",
          description: "Write memory profile to `file`",
          hidden: true,
          args: { name: "profile-mem" },
        },
        {
          name: "--profile-mutex",
          description: "Write Mutex profile to `file`",
          hidden: true,
          args: { name: "profile-mutex" },
        },
        {
          name: "--templateMetrics",
          description: "Display metrics about template executions",
        },
        {
          name: "--templateMetricsHints",
          description:
            "Calculate some improvement hints when combined with --templateMetrics",
        },
        {
          name: ["--theme", "-t"],
          description: "Themes to use (located in /themes/THEMENAME/)",
          args: { name: "theme", template: ["folders"] },
        },
        {
          name: "--trace",
          description: "Write trace to `file` (not useful in general)",
          args: { name: "trace" },
        },
        {
          name: ["--environment", "-e"],
          description: "Build environment",
          isPersistent: true,
          args: { name: "environment" },
        },
        {
          name: "--ignoreVendorPaths",
          description:
            "Ignores any _vendor for module paths matching the given Glob pattern",
          isPersistent: true,
          args: { name: "ignoreVendorPaths" },
        },
        {
          name: ["--source", "-s"],
          description: "Filesystem path to read files relative from",
          isPersistent: true,
          args: { name: "source", template: ["folders"] },
        },
        {
          name: "--themesDir",
          description: "Filesystem path to themes directory",
          isPersistent: true,
          args: { name: "themesDir" },
        },
      ],
    },
    {
      name: "new",
      description: "Create new content for your site",
      subcommands: [
        {
          name: "site",
          description: "Create a new site (skeleton)",
          options: [
            { name: "--force", description: "Init inside non-empty directory" },
            {
              name: ["--format", "-f"],
              description: "Config file format",
              args: { name: "format", default: "toml" },
            },
            {
              name: ["--environment", "-e"],
              description: "Build environment",
              isPersistent: true,
              args: { name: "environment" },
            },
            {
              name: "--ignoreVendorPaths",
              description:
                "Ignores any _vendor for module paths matching the given Glob pattern",
              isPersistent: true,
              args: { name: "ignoreVendorPaths" },
            },
            {
              name: ["--source", "-s"],
              description: "Filesystem path to read files relative from",
              isPersistent: true,
              args: { name: "source", template: ["folders"] },
            },
            {
              name: "--themesDir",
              description: "Filesystem path to themes directory",
              isPersistent: true,
              args: { name: "themesDir" },
            },
          ],
        },
        {
          name: "theme",
          description: "Create a new theme",
          options: [
            {
              name: ["--environment", "-e"],
              description: "Build environment",
              isPersistent: true,
              args: { name: "environment" },
            },
            {
              name: "--ignoreVendorPaths",
              description:
                "Ignores any _vendor for module paths matching the given Glob pattern",
              isPersistent: true,
              args: { name: "ignoreVendorPaths" },
            },
            {
              name: ["--source", "-s"],
              description: "Filesystem path to read files relative from",
              isPersistent: true,
              args: { name: "source", template: ["folders"] },
            },
            {
              name: "--themesDir",
              description: "Filesystem path to themes directory",
              isPersistent: true,
              args: { name: "themesDir" },
            },
          ],
        },
      ],
      options: [
        {
          name: ["--baseURL", "-b"],
          description:
            "Hostname (and path) to the root, e.g. http://spf13.com/",
          args: { name: "baseURL" },
        },
        {
          name: ["--buildDrafts", "-D"],
          description: "Include content marked as draft",
        },
        {
          name: ["--buildExpired", "-E"],
          description: "Include expired content",
        },
        {
          name: ["--buildFuture", "-F"],
          description: "Include content with publishdate in the future",
        },
        {
          name: "--cacheDir",
          description:
            "Filesystem path to cache directory. Defaults: $TMPDIR/hugo_cache/",
          args: { name: "cacheDir", template: ["folders"] },
        },
        {
          name: "--cleanDestinationDir",
          description:
            "Remove files from destination not found in static directories",
        },
        {
          name: ["--contentDir", "-c"],
          description: "Filesystem path to content directory",
          args: { name: "contentDir" },
        },
        {
          name: ["--destination", "-d"],
          description: "Filesystem path to write files to",
          args: { name: "destination", template: ["folders"] },
        },
        {
          name: "--disableKinds",
          description: "Disable different kind of pages (home, RSS etc.)",
          args: { name: "disableKinds" },
        },
        {
          name: "--editor",
          description: "Edit new content with this editor, if provided",
          args: { name: "editor" },
        },
        {
          name: "--enableGitInfo",
          description:
            "Add Git revision, date, author, and CODEOWNERS info to the pages",
        },
        {
          name: "--forceSyncStatic",
          description: "Copy all files when static is changed",
        },
        {
          name: "--gc",
          description:
            "Enable to run some cleanup tasks (remove unused cache files) after the build",
        },
        { name: "--ignoreCache", description: "Ignores the cache directory" },
        {
          name: ["--kind", "-k"],
          description: "Content type to create",
          args: { name: "kind" },
        },
        {
          name: ["--layoutDir", "-l"],
          description: "Filesystem path to layout directory",
          args: { name: "layoutDir" },
        },
        {
          name: "--minify",
          description: "Minify any supported output format (HTML, XML etc.)",
        },
        {
          name: "--noChmod",
          description: "Don't sync permission mode of files",
        },
        {
          name: "--noTimes",
          description: "Don't sync modification time of files",
        },
        { name: "--panicOnWarning", description: "Panic on first WARNING log" },
        {
          name: "--poll",
          description:
            "Set this to a poll interval, e.g --poll 700ms, to use a poll based approach to watch for file system changes",
          args: { name: "poll" },
        },
        {
          name: "--printI18nWarnings",
          description: "Print missing translations",
        },
        {
          name: "--printMemoryUsage",
          description: "Print memory usage to screen at intervals",
        },
        {
          name: "--printPathWarnings",
          description: "Print warnings on duplicate target paths etc",
        },
        {
          name: "--printUnusedTemplates",
          description: "Print warnings on unused templates",
        },
        {
          name: "--profile-cpu",
          description: "Write cpu profile to `file`",
          hidden: true,
          args: { name: "profile-cpu" },
        },
        {
          name: "--profile-mem",
          description: "Write memory profile to `file`",
          hidden: true,
          args: { name: "profile-mem" },
        },
        {
          name: "--profile-mutex",
          description: "Write Mutex profile to `file`",
          hidden: true,
          args: { name: "profile-mutex" },
        },
        {
          name: "--templateMetrics",
          description: "Display metrics about template executions",
        },
        {
          name: "--templateMetricsHints",
          description:
            "Calculate some improvement hints when combined with --templateMetrics",
        },
        {
          name: ["--theme", "-t"],
          description: "Themes to use (located in /themes/THEMENAME/)",
          args: { name: "theme", template: ["folders"] },
        },
        {
          name: "--trace",
          description: "Write trace to `file` (not useful in general)",
          args: { name: "trace" },
        },
        {
          name: ["--environment", "-e"],
          description: "Build environment",
          isPersistent: true,
          args: { name: "environment" },
        },
        {
          name: "--ignoreVendorPaths",
          description:
            "Ignores any _vendor for module paths matching the given Glob pattern",
          isPersistent: true,
          args: { name: "ignoreVendorPaths" },
        },
        {
          name: ["--source", "-s"],
          description: "Filesystem path to read files relative from",
          isPersistent: true,
          args: { name: "source", template: ["folders"] },
        },
        {
          name: "--themesDir",
          description: "Filesystem path to themes directory",
          isPersistent: true,
          args: { name: "themesDir" },
        },
      ],
    },
    {
      name: ["serve", "server"],
      description: "A high performance webserver",
      options: [
        { name: "--appendPort", description: "Append port to baseURL" },
        {
          name: ["--baseURL", "-b"],
          description:
            "Hostname (and path) to the root, e.g. http://spf13.com/",
          args: { name: "baseURL" },
        },
        {
          name: "--bind",
          description: "Interface to which the server will bind",
          args: { name: "bind", default: "127.0.0.1" },
        },
        {
          name: ["--buildDrafts", "-D"],
          description: "Include content marked as draft",
        },
        {
          name: ["--buildExpired", "-E"],
          description: "Include expired content",
        },
        {
          name: ["--buildFuture", "-F"],
          description: "Include content with publishdate in the future",
        },
        {
          name: "--cacheDir",
          description:
            "Filesystem path to cache directory. Defaults: $TMPDIR/hugo_cache/",
          args: { name: "cacheDir", template: ["folders"] },
        },
        {
          name: "--cleanDestinationDir",
          description:
            "Remove files from destination not found in static directories",
        },
        {
          name: ["--contentDir", "-c"],
          description: "Filesystem path to content directory",
          args: { name: "contentDir" },
        },
        {
          name: ["--destination", "-d"],
          description: "Filesystem path to write files to",
          args: { name: "destination", template: ["folders"] },
        },
        {
          name: "--disableBrowserError",
          description: "Do not show build errors in the browser",
        },
        {
          name: "--disableFastRender",
          description: "Enables full re-renders on changes",
        },
        {
          name: "--disableKinds",
          description: "Disable different kind of pages (home, RSS etc.)",
          args: { name: "disableKinds" },
        },
        {
          name: "--disableLiveReload",
          description: "Watch without enabling live browser reload on rebuild",
        },
        {
          name: "--enableGitInfo",
          description:
            "Add Git revision, date, author, and CODEOWNERS info to the pages",
        },
        {
          name: "--forceSyncStatic",
          description: "Copy all files when static is changed",
        },
        {
          name: "--gc",
          description:
            "Enable to run some cleanup tasks (remove unused cache files) after the build",
        },
        { name: "--ignoreCache", description: "Ignores the cache directory" },
        {
          name: ["--layoutDir", "-l"],
          description: "Filesystem path to layout directory",
          args: { name: "layoutDir" },
        },
        {
          name: "--liveReloadPort",
          description:
            "Port for live reloading (i.e. 443 in HTTPS proxy situations)",
          args: { name: "liveReloadPort", default: "-1" },
        },
        {
          name: "--meminterval",
          description:
            'Interval to poll memory usage (requires --memstats), valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"',
          args: { name: "meminterval", default: "100ms" },
        },
        {
          name: "--memstats",
          description: "Log memory usage to this file",
          args: { name: "memstats" },
        },
        {
          name: "--minify",
          description: "Minify any supported output format (HTML, XML etc.)",
        },
        {
          name: "--navigateToChanged",
          description:
            "Navigate to changed content file on live browser reload",
        },
        {
          name: "--noChmod",
          description: "Don't sync permission mode of files",
        },
        { name: "--noHTTPCache", description: "Prevent HTTP caching" },
        {
          name: "--noTimes",
          description: "Don't sync modification time of files",
        },
        { name: "--panicOnWarning", description: "Panic on first WARNING log" },
        {
          name: "--poll",
          description:
            "Set this to a poll interval, e.g --poll 700ms, to use a poll based approach to watch for file system changes",
          args: { name: "poll" },
        },
        {
          name: ["--port", "-p"],
          description: "Port on which the server will listen",
          args: { name: "port", default: "1313" },
        },
        {
          name: "--printI18nWarnings",
          description: "Print missing translations",
        },
        {
          name: "--printMemoryUsage",
          description: "Print memory usage to screen at intervals",
        },
        {
          name: "--printPathWarnings",
          description: "Print warnings on duplicate target paths etc",
        },
        {
          name: "--printUnusedTemplates",
          description: "Print warnings on unused templates",
        },
        {
          name: "--profile-cpu",
          description: "Write cpu profile to `file`",
          hidden: true,
          args: { name: "profile-cpu" },
        },
        {
          name: "--profile-mem",
          description: "Write memory profile to `file`",
          hidden: true,
          args: { name: "profile-mem" },
        },
        {
          name: "--profile-mutex",
          description: "Write Mutex profile to `file`",
          hidden: true,
          args: { name: "profile-mutex" },
        },
        {
          name: "--renderToDisk",
          description:
            "Render to Destination path (default is render to memory & serve from there)",
        },
        {
          name: "--templateMetrics",
          description: "Display metrics about template executions",
        },
        {
          name: "--templateMetricsHints",
          description:
            "Calculate some improvement hints when combined with --templateMetrics",
        },
        {
          name: ["--theme", "-t"],
          description: "Themes to use (located in /themes/THEMENAME/)",
          args: { name: "theme", template: ["folders"] },
        },
        {
          name: "--trace",
          description: "Write trace to `file` (not useful in general)",
          args: { name: "trace" },
        },
        {
          name: ["--watch", "-w"],
          description: "Watch filesystem for changes and recreate as needed",
        },
        {
          name: ["--environment", "-e"],
          description: "Build environment",
          isPersistent: true,
          args: { name: "environment" },
        },
        {
          name: "--ignoreVendorPaths",
          description:
            "Ignores any _vendor for module paths matching the given Glob pattern",
          isPersistent: true,
          args: { name: "ignoreVendorPaths" },
        },
        {
          name: ["--source", "-s"],
          description: "Filesystem path to read files relative from",
          isPersistent: true,
          args: { name: "source", template: ["folders"] },
        },
        {
          name: "--themesDir",
          description: "Filesystem path to themes directory",
          isPersistent: true,
          args: { name: "themesDir" },
        },
      ],
    },
    { name: "version", description: "Print the version number of Hugo" },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
            },
            {
              name: "fish",
              description: "Generate the autocompletion script for fish",
            },
            {
              name: "powershell",
              description: "Generate the autocompletion script for powershell",
            },
            {
              name: "zsh",
              description: "Generate the autocompletion script for zsh",
            },
          ],
        },
        {
          name: "config",
          description: "Print the site configuration",
          subcommands: [
            { name: "mounts", description: "Print the configured file mounts" },
          ],
        },
        {
          name: "convert",
          description: "Convert your content to different formats",
          subcommands: [
            { name: "toJSON", description: "Convert front matter to JSON" },
            { name: "toTOML", description: "Convert front matter to TOML" },
            { name: "toYAML", description: "Convert front matter to YAML" },
          ],
        },
        { name: "deploy", description: "Deploy your site to a Cloud provider" },
        { name: "env", description: "Print Hugo version and environment info" },
        {
          name: "gen",
          description: "A collection of several useful generators",
          subcommands: [
            {
              name: "chromastyles",
              description:
                "Generate CSS stylesheet for the Chroma code highlighter",
            },
            {
              name: "doc",
              description: "Generate Markdown documentation for the Hugo CLI",
            },
            { name: "man", description: "Generate man pages for the Hugo CLI" },
          ],
        },
        {
          name: "import",
          description: "Import your site from others",
          subcommands: [
            { name: "jekyll", description: "Hugo import from Jekyll" },
          ],
        },
        {
          name: "list",
          description: "Listing out various types of content",
          subcommands: [
            { name: "all", description: "List all posts" },
            { name: "drafts", description: "List all drafts" },
            { name: "expired", description: "List all posts already expired" },
            {
              name: "future",
              description: "List all posts dated in the future",
            },
          ],
        },
        {
          name: "mod",
          description: "Various Hugo Modules helpers",
          subcommands: [
            {
              name: "clean",
              description:
                "Delete the Hugo Module cache for the current project",
            },
            {
              name: "get",
              description: "Resolves dependencies in your current Hugo Project",
            },
            { name: "graph", description: "Print a module dependency graph" },
            {
              name: "init",
              description: "Initialize this project as a Hugo Module",
            },
            {
              name: "npm",
              description: "Various npm helpers",
              subcommands: [
                {
                  name: "pack",
                  description:
                    "Experimental: Prepares and writes a composite package.json file for your project",
                },
              ],
            },
            {
              name: "tidy",
              description: "Remove unused entries in go.mod and go.sum",
            },
            {
              name: "vendor",
              description:
                "Vendor all module dependencies into the _vendor directory",
            },
            { name: "verify", description: "Verify dependencies" },
          ],
        },
        {
          name: "new",
          description: "Create new content for your site",
          subcommands: [
            { name: "site", description: "Create a new site (skeleton)" },
            { name: "theme", description: "Create a new theme" },
          ],
        },
        {
          name: ["serve", "server"],
          description: "A high performance webserver",
        },
        { name: "version", description: "Print the version number of Hugo" },
      ],
    },
  ],
  options: [
    {
      name: ["--baseURL", "-b"],
      description: "Hostname (and path) to the root, e.g. http://spf13.com/",
      args: { name: "baseURL" },
    },
    {
      name: ["--buildDrafts", "-D"],
      description: "Include content marked as draft",
    },
    { name: ["--buildExpired", "-E"], description: "Include expired content" },
    {
      name: ["--buildFuture", "-F"],
      description: "Include content with publishdate in the future",
    },
    {
      name: "--cacheDir",
      description:
        "Filesystem path to cache directory. Defaults: $TMPDIR/hugo_cache/",
      args: { name: "cacheDir", template: ["folders"] },
    },
    {
      name: "--cleanDestinationDir",
      description:
        "Remove files from destination not found in static directories",
    },
    {
      name: ["--contentDir", "-c"],
      description: "Filesystem path to content directory",
      args: { name: "contentDir" },
    },
    {
      name: ["--destination", "-d"],
      description: "Filesystem path to write files to",
      args: { name: "destination", template: ["folders"] },
    },
    {
      name: "--disableKinds",
      description: "Disable different kind of pages (home, RSS etc.)",
      args: { name: "disableKinds" },
    },
    {
      name: "--enableGitInfo",
      description:
        "Add Git revision, date, author, and CODEOWNERS info to the pages",
    },
    {
      name: "--forceSyncStatic",
      description: "Copy all files when static is changed",
    },
    {
      name: "--gc",
      description:
        "Enable to run some cleanup tasks (remove unused cache files) after the build",
    },
    { name: "--ignoreCache", description: "Ignores the cache directory" },
    {
      name: ["--layoutDir", "-l"],
      description: "Filesystem path to layout directory",
      args: { name: "layoutDir" },
    },
    {
      name: "--minify",
      description: "Minify any supported output format (HTML, XML etc.)",
    },
    { name: "--noChmod", description: "Don't sync permission mode of files" },
    { name: "--noTimes", description: "Don't sync modification time of files" },
    { name: "--panicOnWarning", description: "Panic on first WARNING log" },
    {
      name: "--poll",
      description:
        "Set this to a poll interval, e.g --poll 700ms, to use a poll based approach to watch for file system changes",
      args: { name: "poll" },
    },
    { name: "--printI18nWarnings", description: "Print missing translations" },
    {
      name: "--printMemoryUsage",
      description: "Print memory usage to screen at intervals",
    },
    {
      name: "--printPathWarnings",
      description: "Print warnings on duplicate target paths etc",
    },
    {
      name: "--printUnusedTemplates",
      description: "Print warnings on unused templates",
    },
    {
      name: "--profile-cpu",
      description: "Write cpu profile to `file`",
      hidden: true,
      args: { name: "profile-cpu" },
    },
    {
      name: "--profile-mem",
      description: "Write memory profile to `file`",
      hidden: true,
      args: { name: "profile-mem" },
    },
    {
      name: "--profile-mutex",
      description: "Write Mutex profile to `file`",
      hidden: true,
      args: { name: "profile-mutex" },
    },
    {
      name: "--renderToMemory",
      description: "Render to memory (only useful for benchmark testing)",
    },
    {
      name: "--templateMetrics",
      description: "Display metrics about template executions",
    },
    {
      name: "--templateMetricsHints",
      description:
        "Calculate some improvement hints when combined with --templateMetrics",
    },
    {
      name: ["--theme", "-t"],
      description: "Themes to use (located in /themes/THEMENAME/)",
      args: { name: "theme", template: ["folders"] },
    },
    {
      name: "--trace",
      description: "Write trace to `file` (not useful in general)",
      args: { name: "trace" },
    },
    {
      name: ["--watch", "-w"],
      description: "Watch filesystem for changes and recreate as needed",
    },
    {
      name: "--config",
      description: "Config file (default is path/config.yaml|json|toml)",
      isPersistent: true,
      args: { name: "config", template: ["filepaths"] },
    },
    {
      name: "--configDir",
      description: "Config dir",
      isPersistent: true,
      args: { name: "configDir", default: "config" },
    },
    { name: "--debug", description: "Debug output", isPersistent: true },
    {
      name: ["--environment", "-e"],
      description: "Build environment",
      isPersistent: true,
      args: { name: "environment" },
    },
    {
      name: "--ignoreVendorPaths",
      description:
        "Ignores any _vendor for module paths matching the given Glob pattern",
      isPersistent: true,
      args: { name: "ignoreVendorPaths" },
    },
    { name: "--log", description: "Enable Logging", isPersistent: true },
    {
      name: "--logFile",
      description: "Log File path (if set, logging enabled automatically)",
      isPersistent: true,
      args: { name: "logFile", template: ["filepaths"] },
    },
    { name: "--quiet", description: "Build in quiet mode", isPersistent: true },
    {
      name: ["--source", "-s"],
      description: "Filesystem path to read files relative from",
      isPersistent: true,
      args: { name: "source", template: ["folders"] },
    },
    {
      name: "--themesDir",
      description: "Filesystem path to themes directory",
      isPersistent: true,
      args: { name: "themesDir" },
    },
    {
      name: ["--verbose", "-v"],
      description: "Verbose output",
      isPersistent: true,
    },
    {
      name: "--verboseLog",
      description: "Verbose logging",
      isPersistent: true,
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
