var awsGenerators = {
    instances: {
        script: "aws ec2 describe-instances --filters 'Name=instance-state-name,Values=stopped' --query 'Reservations[].Instances[].InstanceId[]' --output text",
        postProcess: function (out) {
            if (out.startsWith("fatal")) {
                return [];
            }
            return out.split("\t").map(function (instance) {
                return {
                    name: instance.trim(),
                    icon: "fig://icon?type=aws",
                    description: "instance",
                };
            });
        },
    },
};
var completionSpec = {
    name: "aws",
    icon: "fig://icon?type=aws",
    description: "aws cli commands",
    subcommands: [
        {
            name: "ec2",
            icon: "fig://icon?type=aws",
            description: "ec2 commands",
            subcommands: [
                {
                    name: "start-instances",
                    icon: "fig://icon?type=aws",
                    description: "Starts an EC2 instance",
                    options: [
                        {
                            name: "--instance-ids",
                            icon: "fig://icon?type=aws",
                            insertValue: "--instance-ids",
                            description: "instance ids",
                            args: {
                                generators: awsGenerators.instances,
                            },
                        },
                    ],
                },
            ],
        },
    ],
};

