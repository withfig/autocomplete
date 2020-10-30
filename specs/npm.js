var completionSpec = {
    name: "npm",
    description: "Node package manager",
    subcommands: [
 {name: "install", description:""},
 {name: "run", description:"", args:
 	[ 
 		{ 
 			generator: {
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
	            	} catch(e) { }

	            	return []
	            }
   			}
 		}
	]
 },
 {name: "init", description:""},
 {name: "access", description:""},
 {name: "adduser", description:""},
 {name: "audit", description:""},
 {name: "bin", description:""},
 {name: "bugs", description:""},
 {name: "c", description:""},
 {name: "cache", description:""},
 {name: "ci", description:""},
 {name: "cit", description:""},
 {name: "clean-install", description:""},
 {name: "clean-install-test", description:""},
 {name: "completion", description:""},
 {name: "config", description:""},
 {name: "create", description:""},
 {name: "ddp", description:""},
 {name: "dedupe", description:""},
 {name: "deprecate", description:""},
 {name: "dist-tag", description:""},
 {name: "docs", description:""},
 {name: "doctor", description:""},
 {name: "edit", description:""},
 {name: "explore", description:""},
 {name: "fund", description:""},
 {name: "get", description:""},
 {name: "help", description:""},
 {name: "help-search", description:""},
 {name: "hook", description:""},
 {name: "i", description:""},
 {name: "install-ci-test", description:""},
 {name: "install-test", description:""},
 {name: "it", description:""},
 {name: "link", description:""},
 {name: "list", description:""},
 {name: "ln", description:""},
 {name: "login", description:""},
 {name: "logout", description:""},
 {name: "ls", description:""},
 {name: "org", description:""},
 {name: "outdated", description:""},
 {name: "owner", description:""},
 {name: "pack", description:""},
 {name: "ping", description:""},
 {name: "prefix", description:""},
 {name: "profile", description:""},
 {name: "prune", description:""},
 {name: "publish", description:""},
 {name: "rb", description:""},
 {name: "rebuild", description:""},
 {name: "repo", description:""},
 {name: "restart", description:""},
 {name: "root", description:""},
 {name: "run-script", description:""},
 {name: "s", description:""},
 {name: "se", description:""},
 {name: "search", description:""},
 {name: "set", description:""},
 {name: "shrinkwrap", description:""},
 {name: "star", description:""},
 {name: "stars", description:""},
 {name: "start", description:""},
 {name: "stop", description:""},
 {name: "t", description:""},
 {name: "team", description:""},
 {name: "test", description:""},
 {name: "token", description:""},
 {name: "tst", description:""},
 {name: "un", description:""},
 {name: "uninstall", description:""},
 {name: "unpublish", description:""},
 {name: "unstar", description:""},
 {name: "up", description:""},
 {name: "update", description:""},
 {name: "v", description:""},
 {name: "version", description:""},
 {name: "view", description:""},
 {name: "whoami", description:""}
    ]
}