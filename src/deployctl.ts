import { filepaths } from "@fig/autocomplete-generators";

type VersionsJSON = {
  latest: string;
  versions: string[];
};

const completionSpec: Fig.Spec = {
  name: "deployctl",
  description: "Command line tool for Deno Deploy",
  subcommands: [
    {
      name: "deploy",
      description: "Deploy a script with static files to Deno Deploy",
      args: {
        name: "entrypoint",
        generators: filepaths({
          extensions: ["js", "mjs", "jsx", "mjsx", "ts", "mts", "tsx", "mtsx"],
        }),
      },
      options: [
        {
          name: "--exclude",
          insertValue: "--exclude '{cursor}'",
          description: "Exclude files that match this pattern",
          args: {
            name: "pattern",
          },
        },
        {
          name: "--include",
          insertValue: "--include '{cursor}'",
          description: "Only upload files that match this pattern",
          args: {
            name: "pattern",
          },
        },
        {
          name: "--no-static",
          description: "Don't include the files in the CWD as static files",
        },
        {
          name: "--prod",
          description:
            "Create a production deployment (default is preview deployment)",
        },
        {
          name: ["-p", "--project"],
          description: "The project to deploy to",
          args: {
            name: "name",
          },
        },
        {
          name: "--token",
          description: "The API token to use",
          args: {
            name: "token",
          },
        },
      ],
    },
    {
      name: "upgrade",
      description: "Upgrade deployctl",
      args: {
        name: "version",
        isOptional: true,
        generators: {
          script: [
            "curl",
            "-sL",
            "https://cdn.deno.land/deploy/meta/versions.json",
          ],
          cache: { ttl: 1000 * 60 * 60 * 24 }, // 24 hours, in milliseconds
          postProcess: (out) => {
            const data = JSON.parse(out) as VersionsJSON;
            return data.versions.map((version) => ({
              name: version,
              icon: version === data.latest ? "⭐️" : "🦕",
            }));
          },
        },
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Show the version",
    },
  ],
};
export default completionSpec;
