var completionSpec = {
	name: "npm",
	description: "Node package manager",
	subcommands: [
		{ name: "install", description: "" },
		{
			name: "run", description: "", args:
				[
					{
						generators: {
							script: "cat package.json",
							// splitOn: "\n",
							postProcess: function (out) {
								if (out.trim() == "") {
									return []
								}

								try {
									let package = JSON.parse(out)
									let scripts = package["scripts"]
									if (scripts) {
										let keys = Object.keys(scripts)
										// .map( key => {
										// 	return {
										// 		name : key,
										// 		icon : "🛠"
										// 	}
										// })
										return keys
									}
								} catch (e) { }

								return []
							}
						}
					}
				]
		},
		{ name: "init", description: "trigger the initialization" },
		{ name: "access", description: "set access controls on private packages" },
		{ name: "adduser", description: "add a registry user account" },
		{ name: "audit", description: "run a security audit" },
		{ name: "bin", description: "display npm bin folder" },
		{ name: "bugs", description: "show the bugs that might exist for a package" },
		{ name: "c", description: "manage the npm configuration files" },
		{ name: "cache", description: "manipulates packages cache" },
		{ name: "ci", description: "install a project with a clean slate" },
		{ name: "cit", description: "install a project with a clean slate and run tests" },
		{ name: "clean-install", description: "install a project with a clean slate" },
		{ name: "clean-install-test", description: "install a project with a clean slate and run tests" },
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
		{ name: "i", description: "install local package" },
		{ name: "install-ci-test", description: "install a project with a clean slate and run tests" },
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
		{ name: "profile", description: "change settings on your registry profile" },
		{ name: "prune", description: "remove extraneous packages" },
		{ name: "publish", description: "publish a package" },
		{ name: "rb", description: "rebuild a package" },
		{ name: "rebuild", description: "rebuild a package" },
		{ name: "repo", description: "open package repository page in the browser" },
		{ name: "restart", description: "restart a package" },
		{ name: "root", description: "display npm root" },
		{ name: "run-script", description: "run arbitrary package scripts" },
		{ name: "s", description: "search for packages" },
		{ name: "se", description: "search for packages" },
		{ name: "search", description: "search for packages" },
		{ name: "set", description: "sets the config key to the value" },
		{ name: "shrinkwrap", description: "lock down dependency versions for publication" },
		{ name: "star", description: "mark your favorite packages" },
		{ name: "stars", description: "view packages marked as favorites" },
		{ name: "start", description: "start a package" },
		{ name: "stop", description: "stop a package" },
		{ name: "t", description: "test a package" },
		{ name: "team", description: "manage organization teams and team memberships" },
		{ name: "test", description: "test a package" },
		{ name: "token", description: "manage your authentication tokens" },
		{ name: "tst", description: "test a package" },
		{ name: "un", description: "uninstall a package" },
		{ name: "uninstall", description: "remove a package" },
		{ name: "unpublish", description: "remove a package from the registry" },
		{ name: "unstar", description: "unmark your package" },
		{ name: "up", description: "check the latest version of dependencies" },
		{ name: "update", description: "update a package" },
		{ name: "v", description: "check that you have node and npm installed" },
		{ name: "version", description: "bump a package version" },
		{ name: "view", description: "view registry info" },
		{ name: "whoami", description: "display npm username" }
	]
}
