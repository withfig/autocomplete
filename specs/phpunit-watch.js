var tests = {
    script: "phpunit --list-tests",
    postProcess: function (out) {
        if (out.startsWith("fatal:")) {
            return [];
        }
        return out.split("\n").map(function (line) {
            return {
                name: line.substring(line.indexOf('::') + 2, line.length),
                icon: "fig://icon?type=node",
                description: line.substring(line.indexOf('::') + 2, line.length)
            };
        });
        return out.split('\n').map(function (branch) {
            return { name: branch.replace("*", "").trim(), description: "branch" };
        });
    }
};
// fake-change file
var completionSpec = {
    name: "phpunit-watch",
    description: "Automatically rerun PHPUnit tests when source code changes",
    subcommands: [
        {
            name: "watch",
            description: "This will run the tests and rerun them whenever a file in the app, src or tests directory is modified.",
            options: [
                {
                    name: ["--filter"],
                    description: "watch a specific test",
                    args: {
                        generators: tests,
                        name: "filter"
                    }
                }
            ]
        }
    ],
    options: [
        {
            name: ["--version"],
            description: "The current Homebrew version",
        },
    ],
};

