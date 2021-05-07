var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var addressList = {
    script: "terraform state list",
    postProcess: function (out) {
        if (out.includes("No state file was found!") || out.includes("Error")) {
            return [];
        }
        return out.split("\n").map(function (addresses) {
            return {
                name: addresses.replace("* ", "").trim(),
                icon: "fig://icon?type=terraform",
                description: "workspace",
            };
        });
    },
};
var globalOptions = [
    {
        name: "-help",
        description: "Show this help output, or the help for a specified subcommand.",
    },
    {
        name: "-chdir",
        description: "Switch to a different working directory before executing the given subcommand.",
        insertValue: "-chdir=",
        args: {
            template: "filepaths",
        },
    },
    {
        name: "-version",
        description: "Show the current Terraform version",
    },
];
var completionSpec = {
    name: "terraform",
    description: "Terraform CLI",
    options: globalOptions,
    posixNoncompliantFlags: true,
    subcommands: [
        {
            name: "taint",
            description: "command informs Terraform that a particular object has become degraded or damaged.",
            options: __spreadArray([
                {
                    name: "-allow-missing",
                    description: "If specified, the command will succeed (exit code 0) even if the resource is missing. The command might still return an error for other situations, such as if there is a problem reading or writing the state.",
                },
                {
                    name: "-lock",
                    insertValue: "-lock=",
                    description: "Disables Terraform's default behavior of attempting to take a read/write lock on the state for the duration of the operation if set to false. Defaults to true.",
                    args: {
                        name: "true or false",
                        suggestions: ["true", "false"],
                    },
                },
                {
                    name: "-lock-timeout",
                    insertValue: "-lock-timeout=",
                    description: "Unless locking is disabled with -lock=false, instructs Terraform to retry acquiring a lock for a period of time before returning an error. The duration syntax is a number followed by a time unit letter, such as 3s for three seconds.",
                    args: {
                        name: "seconds",
                    },
                },
                {
                    name: "-ignore-remote-version",
                    insertValue: "-ignore-remote-version",
                    description: "When using the enhanced remote backend with Terraform Cloud, continue even if remote and local Terraform versions differ. This may result in an unusable Terraform Cloud workspace, and should be used with extreme caution.",
                    args: {
                        name: "seconds",
                    },
                }
            ], globalOptions),
            args: {
                generators: addressList,
                name: "address",
            },
        },
    ],
};

