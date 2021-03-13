const listTargets: Fig.Generator = {
    script: `make -qp | awk -F':' '/^[a-zA-Z0-9][^$#\\/\\t=]*:([^=]|$)/ {split($1,A,/ /);for(i in A)print A[i]}' | sort -u`,
    postProcess: function(out) {
        console.log(out);
        var lines = out.split('\n');
        console.log(lines);
        var targets = [];
        for(var i = 1; i < lines.length; i++) {
            targets.push({
                name: lines[i],
                description: "make target",
                icon: "🎯",
                priority: 99
            })
        }
        return targets;
    }
}

const makeCompletionSpec:Fig.Spec = {
    name: "make",
    args: {
        name: "target",
        generators: listTargets
    },
    options: [
        {
            name: ["-j"],
            args: [
                { name: "number" },
                { name: "target", generators: listTargets }
            ]
        },
        {
            name: ["--file"],
            args: {
                name: "file",
                template: "filepaths"
            }
        },
        {
            name: ["--directory"],
            args: {
                name: "directory",
                template: "folders"
            }
        },
        {
            name: ["--always-make"],
            args: {
                name: "target",
                generators: listTargets
            }
        },
        {
            name: ["--environment-overrides"],
            args: {
                name: "target",
                generators: listTargets
            }
        }
    ]
}