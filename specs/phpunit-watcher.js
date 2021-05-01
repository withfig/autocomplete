var tests = {
    servicesgenerators: {
        script: "phpunit --list-tests",
        postProcess: function (out) {
            return out
                .split("\n")
                .filter(function (line) { return line.indexOf("::") > 0; })
                .map(function (line) {
                return {
                    name: line.substring(line.indexOf("::") + 2, line.length),
                    icon: "fig://icon?type=php",
                    description: line.substring(line.indexOf("::") + 2, line.length),
                };
            });
        },
    },
};
var completionSpec = {
    name: "phpunit-watcher",
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
                        name: "filter",
                    },
                },
            ],
        },
    ],
};

