var apps = {
    script: "cat workspace.json",
    postProcess: function (out) {
        try {
            var workspace = JSON.parse(out);
            return Object.keys(workspace.projects)
                .filter(projectName => workspace.projects[projectName].projectType === 'application')
                .filter(projectName => !projectName.endsWith("-e2e"));
        } catch (err) {
            return []
        }
    }
}
var e2eApps = {
    script: "cat workspace.json",
    postProcess: function (out) {
        try {
            var workspace = JSON.parse(out);
            return Object.keys(workspace.projects)
                .filter(projectName => workspace.projects[projectName].projectType === 'application')
                .filter(projectName => projectName.endsWith("-e2e"));
        } catch (err) {
            return []
        }
    }

}
var appsAndLibs = {
    script: "cat workspace.json",
    postProcess: function (out) {
        try {
            var workspace = JSON.parse(out);
            return Object.keys(workspace.projects)
        } catch (err) {
            return []
        }
    }
}

var localSchematics = {
    script: "ls tools/schematics",
    postProcess: function (out) {
        return out
            .split("\n")
            .map(line => line.split(" ").pop());
    }
}

var plugins = {
    script: 'nx list',
    postProcess: function (out) {
        const fullList = out.split(">");
        const plugins = fullList[1].split("\n").filter(Boolean);
        plugins.shift();
        return plugins.map(pluginEntry => pluginEntry.trim().split(" ")[0]);
    }
}

var completionSpec = {
    name: 'nx',
    description: 'fig completions for Nx by Nrwl',
    subcommands: [
        {
            name: 'build',
            description: 'build an Nx app',
            args: {
                generator: apps,
                name: 'app'
            }
        },
        {
            name: 'serve',
            description: 'serve an Nx app',
            args: {
                generator: apps,
                name: 'app'
            }
        },
        {
            name: 'test',
            description: 'test an Nx app or lib',
            args: {
                generator: appsAndLibs,
                name: 'app/lib'
            }
        },
        {
            name: 'e2e',
            description: 'run e2e tests for an Nx app',
            args: {
                generator: e2eApps,
                name: 'app'
            }
        },
        {
            name: 'lint',
            description: 'lint an Nx app or lib',
            args: {
                generator: appsAndLibs,
                name: 'app/lib'
            }
        },
        {
            name: 'workspace-schematic',
            description: 'Run a workspace schematic',
            args: {
                generator: localSchematics,
                name: 'schematic'
            }
        },
        {
            name: 'generate',
            description: 'generate a schematic',
            args: {
                generator: plugins,
                name: 'plugin'
            }
        }
    ]
}
