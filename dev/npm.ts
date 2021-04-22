const searchGenerator: Fig.Generator = {
  script: function (context) {
    if (context[context.length - 1] === "") return "";
    const searchTerm = context[context.length - 1];
    return `curl -s -H "Accept: application/json" "https://api.npms.io/v2/search?q=${searchTerm}&size=20"`;
  },
  postProcess: function (out) {
    try {
      var temp = JSON.parse(out).results.map(
        (item) =>
          ({
            name: item.package.name,
            description: item.package.description,
          } as Fig.Suggestion)
      ) as Fig.Suggestion[];
    } catch (e) {
      return [];
    }

    return temp;
  },
  // trigger: function () {
  //   return true;
  // },
};

export const completionSpec: Fig.Spec = {
  name: "npm",
  description: "Node package manager",
  subcommands: [
    {
      name: "install",
      description: "install local package",
      args: {
        name: "package",
        // TEMPORARILY COMMENT OUT BEFORE PUSHING DEBOUNCE BUG FIX
        // generators: searchGenerator,
        // debounce: true,
        variadic: true,
      },
      options: [
        {
          name: ["-P", "--save-prod"],
          description:
            "Package will appear in your `dependencies`. This is the default unless `-D` or `-O` are present.",
        },
        {
          name: ["-D", "--save-dev"],
          description: "Package will appear in your `devDependencies`",
        },
        {
          name: ["-O", "--save-optional"],
          description: "Package will appear in your `optionalDependencies`",
        },
        {
          name: "--no-save",
          description: "Prevents saving to `dependencies`",
        },
        {
          name: ["-E", "--save-exact"],
          description:
            "Saved dependencies will be configured with an exact version rather than using npm's default semver range operator",
        },
      ],
    },
    {
      name: "run",
      description: "run arbitrary package scripts",
      args: [
        {
          generators: {
            script:
              "until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json",
            // splitOn: "\n",
            postProcess: function (out) {
              if (out.trim() == "") {
                return [];
              }

              try {
                var packageContent = JSON.parse(out);
                var scripts = packageContent["scripts"];
                var figCompletions = packageContent["fig"];

                if (scripts) {
                  const keys = Object.keys(scripts).map((key) => {
                    return Object.assign(
                      {},
                      { icon: "fig://icon?type=npm" },
                      (figCompletions || {})[key], // need the || {} otherwise it errors
                      { name: key, insertValue: key }
                    ); // ensure that name and insertValue are defined by "scripts" dict
                  });
                  return keys;
                }
              } catch (e) {
                console.error(e);
              }

              return [];
            },
          },
        },
      ],
    },
    { name: "init", description: "trigger the initialization" },
    { name: "access", description: "set access controls on private packages" },
    { name: "adduser", description: "add a registry user account" },
    { name: "audit", description: "run a security audit" },
    { name: "bin", description: "display npm bin folder" },
    {
      name: "bugs",
      description: "show the bugs that might exist for a package",
    },
    { name: "c", description: "manage the npm configuration files" },
    { name: "cache", description: "manipulates packages cache" },
    { name: "ci", description: "install a project with a clean slate" },
    {
      name: "cit",
      description: "install a project with a clean slate and run tests",
    },
    {
      name: "clean-install",
      description: "install a project with a clean slate",
    },
    {
      name: "clean-install-test",
      description: "install a project with a clean slate and run tests",
    },
    { name: "completion", description: "tab completion for npm" },
    { name: "config", description: "manage the npm configuration files" },
    { name: "create", description: "create a package.json file" },
    { name: "ddp", description: "reduce duplication" },
    { name: "dedupe", description: "reduce duplication" },
    { name: "deprecate", description: "deprecate a version of a package" },
    { name: "dist-tag", description: "modify package distribution tags" },
    { name: "docs", description: "docs for a package in a web browser maybe" },
    { name: "doctor", description: "check your environments" },
    { name: "edit", description: "edit an installed package" },
    { name: "explore", description: "browse an installed package" },
    { name: "fund", description: "retrieve funding information" },
    { name: "get", description: "echo the config value to stdout" },
    { name: "help", description: "search npm help documentation" },
    { name: "help-search", description: "get help on npm" },
    { name: "hook", description: "manage registry hooks" },
    {
      name: "i",
      description: "install local package",
      args: {
        name: "package",
        // TEMPORARILY COMMENT OUT BEFORE PUSHING DEBOUNCE BUG FIX
        // generators: searchGenerator,
        // debounce: true,
        variadic: true,
      },
    },
    {
      name: "install-ci-test",
      description: "install a project with a clean slate and run tests",
    },
    { name: "install-test", description: "install package(s) and run tests" },
    { name: "it", description: "install package(s) and run tests" },
    { name: "link", description: "symlink a package folder" },
    { name: "list", description: "list installed packages" },
    { name: "ln", description: "symlink a package folder" },
    { name: "login", description: "log in of the registry" },
    { name: "logout", description: "log out of the registry" },
    { name: "ls", description: "list installed packages" },
    { name: "org", description: "manage orgs" },
    { name: "outdated", description: "check for outdated packages" },
    { name: "owner", description: "manage package owners" },
    { name: "pack", description: "create a tarball from a package" },
    { name: "ping", description: "ping npm registry" },
    { name: "prefix", description: "display prefix" },
    {
      name: "profile",
      description: "change settings on your registry profile",
    },
    { name: "prune", description: "remove extraneous packages" },
    { name: "publish", description: "publish a package" },
    { name: "rb", description: "rebuild a package" },
    { name: "rebuild", description: "rebuild a package" },
    {
      name: "repo",
      description: "open package repository page in the browser",
    },
    { name: "restart", description: "restart a package" },
    { name: "root", description: "display npm root" },
    { name: "run-script", description: "run arbitrary package scripts" },
    { name: "s", description: "search for packages" },
    { name: "se", description: "search for packages" },
    { name: "search", description: "search for packages" },
    { name: "set", description: "sets the config key to the value" },
    {
      name: "shrinkwrap",
      description: "lock down dependency versions for publication",
    },
    { name: "star", description: "mark your favorite packages" },
    { name: "stars", description: "view packages marked as favorites" },
    { name: "start", description: "start a package" },
    { name: "stop", description: "stop a package" },
    { name: "t", description: "test a package" },
    {
      name: "team",
      description: "manage organization teams and team memberships",
    },
    { name: "test", description: "test a package" },
    { name: "token", description: "manage your authentication tokens" },
    { name: "tst", description: "test a package" },
    {
      name: "un",
      description: "uninstall a package",
      args: [
        {
          generators: {
            script: "cat package.json",
            postProcess: function (out) {
              if (out.trim() === "") {
                return [];
              }
              try {
                const packageContent = JSON.parse(out);
                const dependencies = packageContent["dependencies"];
                if (dependencies) {
                  const dps = Object.keys(dependencies);
                  return dps.map((pkg) => {
                    const scope = pkg.indexOf("/") + 1;
                    if (scope !== -1) {
                      pkg = pkg.substring(scope);
                    }
                    const version = pkg.indexOf("@");
                    if (version !== -1) {
                      pkg = pkg.substring(version);
                    }
                    return {
                      name: pkg,
                      icon: `fig://icon?type=file`,
                      description: "dependency file",
                    };
                  });
                }
              } catch (e) {}
              return [];
            },
          },
        },
      ],
      options: [
        {
          name: ["-S", "--save"],
          description: " Package will be removed from your dependencies",
        },
        {
          name: ["-D", "--save-dev"],
          description: "Package will appear in your `devDependencies`",
        },
        {
          name: ["-O", "--save-optional"],
          description: "Package will appear in your `optionalDependencies`",
        },
        {
          name: "--no-save",
          description: "Prevents saving to `dependencies`",
        },
      ],
    },
    {
      name: "uninstall",
      description: "remove a package",
      args: [
        {
          generators: {
            script: "cat package.json",
            postProcess: function (out) {
              if (out.trim() === "") {
                return [];
              }
              try {
                const packageContent = JSON.parse(out);
                const dependencies = packageContent["dependencies"];
                if (dependencies) {
                  const dps = Object.keys(dependencies);
                  return dps.map((pkg) => {
                    const scope = pkg.indexOf("/") + 1;
                    if (scope !== -1) {
                      pkg = pkg.substring(scope);
                    }
                    const version = pkg.indexOf("@");
                    if (version !== -1) {
                      pkg = pkg.substring(version);
                    }
                    return {
                      name: pkg,
                      icon: `fig://icon?type=file`,
                      description: "dependency file",
                    };
                  });
                }
              } catch (e) {}
              return [];
            },
          },
        },
      ],
      options: [
        {
          name: ["-S", "--save"],
          description: " Package will be removed from your dependencies",
        },
        {
          name: ["-D", "--save-dev"],
          description: "Package will appear in your `devDependencies`",
        },
        {
          name: ["-O", "--save-optional"],
          description: "Package will appear in your `optionalDependencies`",
        },
        {
          name: "--no-save",
          description: "Prevents saving to `dependencies`",
        },
      ],
    },
    { name: "unpublish", description: "remove a package from the registry" },
    { name: "unstar", description: "unmark your package" },
    { name: "up", description: "check the latest version of dependencies" },
    { name: "update", description: "update a package" },
    { name: "v", description: "check that you have node and npm installed" },
    { name: "version", description: "bump a package version" },
    { name: "view", description: "view registry info" },
    { name: "whoami", description: "display npm username" },
  ],
};
