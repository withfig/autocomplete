import { gitGenerators } from "./git";

const turboIcon =
  "data:image/png;base64,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";

interface TurboJSON {
  $schema?: "https://turborepo.org/schema.json";
  baseBranch?: string;
  globalDependencies?: string[];
  pipeline: {
    [name: string]: {
      cache?: boolean;
      dependsOn?: string[];
      outputs?: string[];
    };
  };
}

const completionSpec: Fig.Spec = {
  name: "turbo",
  description:
    "Turborepo is a high-performance build system for JavaScript and TypeScript codebases",
  options: [
    {
      name: "--version",
      description: "Print the version",
    },
    {
      name: "--help",
      description: "Print a help message",
      isPersistent: true,
    },
  ],
  subcommands: [
    {
      name: "bin",
      description: "Get the path to the turbo binary",
    },
    {
      name: "link",
      description:
        "Link your local directory to a Vercel organization and enable remote caching",
      options: [
        {
          name: "--no-gitignore",
          description: "Do not create or modify .gitignore",
        },
      ],
    },
    {
      name: "login",
      description: "Login to your Vercel account",
      options: [
        {
          name: "--sso-team",
          description:
            "Attempt to authenticate to the specified team using SSO",
          requiresSeparator: true,
        },
      ],
    },
    {
      name: "logout",
      description: "Logout of your Vercel account",
    },
    {
      name: "prune",
      description: "Prepare a subset of your monorepo",
      options: [
        {
          name: "--scope",
          description:
            "Specify package to act as entry point for pruned monorepo",
          requiresSeparator: true,
          isRequired: true,

          args: {
            name: "package",
          },
        },
        {
          name: "--docker",
          description:
            "Output pruned workspace into 'fill' and 'json' directories optimized for Docker layer caching",
        },
      ],
    },
    {
      name: "unlink",
      description:
        "Unlink the current directory from your Vercel organization and disable remote caching",
    },
    {
      name: "run",
      description: "Run tasks in your monorepo",
      icon: turboIcon,
      args: {
        name: "tasks",
        isVariadic: true,
        generators: {
          script: [
            "bash",
            "-c",
            "until [[ ( -f turbo.json || $PWD = '/' ) ]]; do cd ..; done; cat turbo.json",
          ],
          postProcess: (out) => {
            let turbo: TurboJSON;
            try {
              turbo = JSON.parse(out);
            } catch (err: unknown) {
              console.error(err);
              return [];
            }
            return Object.entries(turbo.pipeline).map(([key, value]) => {
              const descriptionParts = [];
              if ("dependsOn" in value) {
                descriptionParts.push(
                  `depends on ${value.dependsOn
                    .map((item) => `'${item}'`)
                    .join(", ")}`
                );
              }
              if ("outputs" in value) {
                descriptionParts.push(
                  `outputs ${value.outputs
                    .map((item) => `'${item}'`)
                    .join(", ")}`
                );
              }
              return {
                name: key,
                description:
                  descriptionParts.length > 0
                    ? "Task: " + descriptionParts.join(", ")
                    : "Task",
                icon: turboIcon,
              };
            });
          },
        },
      },
      options: [
        {
          name: "--scope",
          description:
            "Specify packages to act as entry points for task execution",
          requiresSeparator: true,
          args: {
            name: "package",
          },
        },
        {
          name: "--cache-dir",
          requiresSeparator: true,
          description: "Specify local filesystem cache directory",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: "--concurrency",
          description:
            "Limit the concurrency of task execution (use `1` for serial)",
          requiresSeparator: true,

          args: {
            name: "limit",
          },
        },
        {
          name: "--continue",
          description: "Continue execution even if a task exits with an error",
        },
        {
          name: "--force",
          description: "Ignore the existing cache",
        },
        {
          name: "--graph",
          description: "Generate a Dot graph of the task execution",
        },
        {
          name: "--global-deps",
          description:
            "Specify glob of global filesystem dependencies to be hashed (useful for .env and files in the root directory)",
          isRepeatable: true,
          insertValue: "--global-deps='{cursor}'",
          requiresSeparator: true,
          args: {
            name: "glob",
          },
        },
        {
          name: "--since",
          description: "Limit/set scope to changed packages since a mergebase",
          requiresSeparator: true,
          args: {
            name: "branch",
            generators: gitGenerators.remoteLocalBranches,
          },
        },
        {
          name: "--team",
          requiresSeparator: true,
          description: "The slug of a turborepo.com team",
          args: {
            name: "slug",
          },
        },
        {
          name: "--token",
          requiresSeparator: true,
          description: "A turborepo.com access token",
          args: {
            name: "token",
          },
        },
        {
          name: "--ignore",
          requiresSeparator: true,

          description:
            "Files to ignore when calculating changed files (supports globs)",
          args: {
            name: "files",
          },
        },
        {
          name: "--profile",
          requiresSeparator: true,

          description: "File to write turbo's performance profile into",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--parallel",
          description: "Execute all tasks in parallel",
        },
        {
          name: "--include-dependencies",
          description: "Include the dependencies of tasks in execution",
        },
        {
          name: "--no-deps",
          description: "Exclude dependent task consumers from execution",
        },
        {
          name: "--no-cache",
          description:
            "Avoid saving task results to the cache (useful for development/watch tasks)",
        },
        {
          name: "--output-logs",
          requiresSeparator: true,

          args: {
            name: "level",
            suggestions: [
              {
                name: "new-only",
                description: "Only new output with hashes for cached tasks",
              },
              {
                name: "hash-only",
                description: "Only turbo-computed task hashes",
              },
              {
                name: "full",
                description: "Show all output",
              },
              {
                name: "none",
                description: "Hide process output",
              },
            ],
          },
        },
        {
          name: ["--dry", "--dry-run"],
          requiresSeparator: true,
          description:
            "List the packages in scope and the tasks that would be run",
          args: {
            name: "format",
            suggestions: ["json"],
            isOptional: true,
          },
        },
      ],
    },
  ],
};

export default completionSpec;
