// const workspaceGenerator: Fig.Generator = {
//   script: "cat package.json",
//   postProcess: function (out: string) {
//     const suggestions = [];

//     try {
//       if (out.trim() == "") {
//         return suggestions;
//       }

//       const packageContent = JSON.parse(out);
//       const workspaces = packageContent["workspaces"];

//       if (workspaces) {
//         for (const workspace of workspaces) {
//           suggestions.push({
//             name: workspace,
//             description: "Workspaces",
//           });
//         }
//       }
//     } catch (e) {
//       console.log(e);
//     }
//     return suggestions;
//   },
// };

/** Generator that lists package.json scripts (with the respect to the `fig` field) */
export const bunScriptsGenerator: Fig.Generator = {
  script:
    "until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json",
  postProcess: function (out, [npmClient]) {
    if (out.trim() == "") {
      return [];
    }

    try {
      const packageContent = JSON.parse(out);
      const scripts = packageContent["scripts"];
      const figCompletions = packageContent["fig"] || {};

      if (scripts) {
        return Object.entries(scripts).map(([scriptName, scriptContents]) => {
          const icon =
            npmClient === "yarn"
              ? "fig://icon?type=yarn"
              : "fig://icon?type=npm";
          const customScripts: Fig.Suggestion = figCompletions[scriptName];
          return {
            name: scriptName,
            icon,
            description: scriptContents as string,
            /**
             * If there are custom definitions for the scripts
             * we want to overide the default values
             * */
            ...customScripts,
          };
        });
      }
    } catch (e) {
      console.error(e);
    }

    return [];
  },
};

export const completionSpec: Fig.Spec = {
  name: "bun",
  description: "A fast bundler, transpiler and task runner for web software",
  subcommands: [
    {
      name: "run",
      description: `a fast package.json scripts runner. Instead of waiting 170ms for your npm client to start every time, you wait 6ms for Bun.`,
      //I'm not sure about options. My mind tells me I should just go ahead and copy the npm run options, but idk
      options: [
        {
          name: "--silent",
          description: `Don't repeat the command for bun run`,
        },
      ],
      args: {
        name: "script",
        description: "Run scripts from you package.json",
        generators: bunScriptsGenerator,
        parserDirectives: {
          alias: async (token, executeShellCommand) => {
            const out = await executeShellCommand(
              "cat $(npm prefix)/package.json"
            );
            const script: string = JSON.parse(out).scripts?.[token];
            if (!script) {
              throw new Error("Alias not found");
            }
            return script;
          },
        },
        isCommand: true,
      },
    },
    {
      // lots of work to be done here
      name: "bun",
      description: "Bundle dependencies of input files into a .bun",
    },
    {
      name: "create",
      description: "Start a new project from a template",
    },
    { name: "discord", description: "Open Bun's Discord server" },
    {
      name: "completions",
      description: "Install shell completions for tab-completion",
    },
    {
      name: "upgrade",
      description: "Get the latest version of Bun",
    },
  ],
  options: [
    { name: ["-v", "--version"], description: "Print version and exit" },
    {
      name: ["-d", "--define"],
      description: `Substitute K:V while parsing, e.g. --define process.env.NODE_ENV:"development". Values are parsed as JSON.`,
      args: { name: "string" },
    },
    {
      name: ["-e", "--external"],
      description:
        "Exclude module from transpilation (can use * wildcards). ex: -e react",
      args: { name: "string" },
    },
    { name: ["-h", "--help"], description: "Display this help and exit" },
    {
      name: ["-i", "--inject"],
      description: "Inject module at the top of every file",
    },
    {
      name: ["-l", "--loader"],
      description:
        "Parse files with .ext:loader, e.g. --loader .js:jsx. Valid loaders: jsx, js, json, tsx, ts, css",
    },
    {
      name: ["-u", "--origin"],
      description: `Rewrite import URLs to start with --origin. Default: ""`,
    },
    {
      name: ["-p", "--port"],
      description: `Port to serve Bun's dev server on. Default: "3000"`,
    },
    {
      name: "--use",
      description: ` Choose a framework, e.g. "--use next". It checks first for a package named "bun-framework-packagename" and then "packagename".`,
    },
    {
      name: "--bunfile",
      description: `Use a .bun file (default: node_modules.bun)`,
    },
    {
      name: "--server-bunfile",
      description: "Use a .server.bun file (default: node_modules.server.bun)",
    },
    {
      name: "--cwd",
      description:
        "Absolute path to resolve files & entry points from. This just changes the process' cwd",
    },
    {
      name: "--disable-react-fast-refresh",
      description: "Disable React Fast Refresh",
    },
    {
      name: "--disable-hmr",
      description: "Disable Hot Module Reloading (disables fast refresh too)",
    },
    {
      name: "--extension-order",
      description: "Defaults to: .tsx,.ts,.jsx,.js,.json",
    },
    {
      name: "--jsx-factory",
      description:
        "Changes the function called when compiling JSX elements using the classic JSX runtime",
    },
    {
      name: "--jsx-fragment",
      description:
        "Changes the function called when compiling JSX fragments using the classic JSX runtime",
    },
    {
      name: "--jsx-import-source",
      description: `Declares the module specifier to be used for importing the jsx and jsxs factory functions. Default: "react"`,
    },
    {
      name: "--jsx-production",
      description: `Use jsx instead of jsxDEV (default) for the automatic runtime`,
    },
    {
      name: "--jsx-runtime",
      description: `"automatic" (default) or "classic"`,
    },
    {
      name: "--main-fields",
      description: `Main fields to lookup in package.json. Defaults to --platform dependent`,
    },
    {
      name: "--platform",
      description: `"browser" or "node". Defaults to "browser"`,
    },
    {
      name: "--no-summary",
      description: `Don't print a summary (when generating .bun`,
    },
    {
      name: "--public-dir",
      description: `Top-level directory for .html files, fonts or anything external. Defaults to "<cwd>/public", to match create-react-app and Next.js`,
    },
    {
      name: "--tsconfig-override",
      description: `Load tsconfig from path instead of cwd/tsconfig.json`,
    },
    { name: "--silent", description: `Don't repeat the command for bun run` },
  ],
};

export default completionSpec;
