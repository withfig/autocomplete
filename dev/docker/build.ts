export const completionSpec: Fig.Spec = {
  name: "build",
  description: "Build an image from a Dockerfile",
  args: {
    name: "path",
    generators: [
      {
        template: "folders",
      },
    ],
  },
  options: [
    {
      name: "--add-host",
      args: {
        name: "list",
        description: "Add a custom host-to-IP mapping (host:ip)",
      },
    },
    {
      name: "--build-arg",
      args: {
        name: "list",
        description: "Set build-time variables",
      },
    },
    {
      name: "--cache-from",
      args: {
        name: "strings",
        description: "Images to consider as cache sources",
      },
    },
    {
      name: "--disable-content-trust",
      description: "Skip image verification (default true)",
    },
    {
      name: ["-f", "--file"],
      description: "Name of the Dockerfile (Default is 'PATH/Dockerfile')",
      args: {
        name: "string",
        generators: [
          {
            template: "filepaths",
          },
        ],
      },
    },
    {
      name: "--iidfile",
      description: "Write the image ID to the file",
      args: {
        name: "string",
      },
    },
    {
      name: "--isolation",
      description: "Container isolation technology",
      args: {
        name: "string",
      },
    },
    {
      name: "--label",
      description: "Set metadata for an image",
      args: {
        name: "list",
      },
    },
    {
      name: "--network",
      description:
        'Set the networking mode for the RUN instructions during build (default "default")',
      args: {
        name: "string",
      },
    },
    {
      name: "--no-cache",
      description: "Do not use cache when building the image",
    },
    {
      name: ["-o", "--output"],
      description: "Output destination (format: type=local,dest=path)",
      args: {
        name: "stringArray",
      },
    },
    {
      name: "--platform",
      description: "Set platform if server is multi-platform capable",
      args: {
        name: "string",
      },
    },
    {
      name: "--progress",
      description:
        "Set type of progress output (auto, plain, tty). Use plain to show container output",
      args: {
        name: "string",
        suggestions: ["auto", "plain", "tty"].map((i) => ({ name: i })),
      },
    },
    {
      name: "--pull",
      description: "Always attempt to pull a newer version of the image",
    },
    {
      name: ["-q", "--quiet"],
      description: "Suppress the build output and print image ID on success",
    },
    {
      name: "--secret",
      description: `Secret file to expose to the build (only if BuildKit enabled): id=mysecret,src=/local/secret`,
      args: {
        name: "stringArray",
      },
    },
    {
      name: "--squash",
      description: "Squash newly built layers into a single new layer",
    },
    {
      name: "--ssh",
      description: `SSH agent socket or keys to expose to the build (only if BuildKit enabled) (format: default|<id>[=<socket>|<key>[,<key>]])`,
      args: {
        name: "stringArray",
      },
    },
    {
      name: ["-t", "--tag"],
      description: "Name and optionally a tag in the 'name:tag' format",
    },
    {
      name: "--target",
      description: "Set the target build stage to build",
      args: {
        name: "target build stage",
        generators: [
          {
            trigger: function () {
              return true;
            },
            script: function (context) {
              let fileFlagIndex, dockerfilePath;
              if (context.includes("-f")) {
                fileFlagIndex = context.indexOf("-f");
                dockerfilePath = context[fileFlagIndex + 1];
              } else if (context.includes("--file")) {
                fileFlagIndex = context.indexOf("--file");
                dockerfilePath = context[fileFlagIndex + 1];
              } else {
                dockerfilePath = "$PWD/Dockerfile";
              }

              return `grep -iE 'FROM.*AS' "${dockerfilePath}"`;
            },
            postProcess: function (out) {
              // This just searches the Dockerfile for the alias name after AS,
              // and due to the grep above, will only match lines where FROM and AS
              // are on the same line. This could certainly be made more robust
              // down the line.
              const imageNameRegexp = /(?:[aA][sS]\s+)([\w:.-]+)/;
              return out
                .split("\n")
                .map((i) => {
                  const result = imageNameRegexp.exec(i);
                  if (result) {
                    return {
                      name: result[1],
                    };
                  }
                })
                .filter((i) => i !== undefined);
            },
          },
        ],
      },
    },
  ],
};
