// Deta Space CLI Spec https://github.com/deta/space-cli
// at latest commit: https://github.com/deta/space-cli/commit/aa93f1476e56268fab0c4444db1e6326feb8f59f
// using https://github.com/withfig/autocomplete-tools/tree/main/integrations/cobra
const completionSpec: Fig.Spec = {
  name: "space",
  description: "Deta Space CLI for mananging Deta Space projects",
  subcommands: [
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: "link",
      description: "Link code to project",
      options: [
        {
          name: ["--dir", "-d"],
          description: "Src of project to link",
          args: { name: "dir", default: "./", template: "folders" },
        },
        {
          name: ["--id", "-i"],
          description: "Project id of project to link",
          args: { name: "id" },
        },
      ],
    },
    { name: "login", description: "Login to space" },
    {
      name: "new",
      description: "Create new project",
      options: [
        { name: ["--blank", "-b"], description: "Create blank project" },
        {
          name: ["--dir", "-d"],
          description: "Src of project to release",
          args: { name: "dir", default: "./", template: "folders" },
        },
        {
          name: ["--name", "-n"],
          description: "Project name",
          args: { name: "name" },
        },
      ],
    },
    {
      name: "open",
      description: "Open current project in browser",
      options: [
        {
          name: ["--dir", "-d"],
          description: "Src of project to open",
          args: { name: "dir", default: "./", template: "folders" },
        },
        {
          name: ["--id", "-i"],
          description: "Project id of project to open",
          args: { name: "id" },
        },
      ],
    },
    {
      name: "push",
      description: "Push code for project",
      options: [
        {
          name: ["--dir", "-d"],
          description: "Src of project to push",
          args: { name: "dir", default: "./", template: "folders" },
        },
        {
          name: ["--id", "-i"],
          description: "Project id of project to push",
          args: { name: "id" },
        },
        {
          name: ["--open", "-o"],
          description: "Open builder instance/project in browser after push",
        },
        { name: "--skip-logs", description: "Skip following logs after push" },
        {
          name: ["--tag", "-t"],
          description: "Tag to identify this push",
          args: { name: "tag" },
        },
      ],
    },
    {
      name: "release",
      description: "Create release for a project",
      options: [
        { name: ["--confirm", "-c"], description: "Release latest revision" },
        {
          name: ["--dir", "-d"],
          description: "Src of project to release",
          args: { name: "dir", default: "./", template: "folders" },
        },
        {
          name: ["--id", "-i"],
          description: "Project id of an existing project",
          args: { name: "id" },
        },
        { name: ["--listed", "-l"], description: "Listed on discovery" },
        {
          name: ["--notes", "-n"],
          description: "Release notes",
          args: { name: "notes" },
        },
        {
          name: ["--rid", "-r"],
          description: "Revision id for release",
          args: { name: "rid" },
        },
        {
          name: ["--version", "-v"],
          description: "Version for the release",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "validate",
      description: "Validate spacefile in dir",
      options: [
        {
          name: ["--dir", "-d"],
          description: "Src of project to validate",
          args: { name: "dir", default: "./", template: "folders" },
        },
      ],
    },
    {
      name: "version",
      description: "Space CLI version",
      subcommands: [
        {
          name: "upgrade",
          description: "Upgrade Space CLI version",
          options: [
            {
              name: ["--version", "-v"],
              description: "Version number",
              args: { name: "version" },
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
            },
            {
              name: "fish",
              description: "Generate the autocompletion script for fish",
            },
            {
              name: "powershell",
              description: "Generate the autocompletion script for powershell",
            },
            {
              name: "zsh",
              description: "Generate the autocompletion script for zsh",
            },
          ],
        },
        { name: "link", description: "Link code to project" },
        { name: "login", description: "Login to space" },
        { name: "new", description: "Create new project" },
        { name: "open", description: "Open current project in browser" },
        { name: "push", description: "Push code for project" },
        { name: "release", description: "Create release for a project" },
        { name: "validate", description: "Validate spacefile in dir" },
        {
          name: "version",
          description: "Space CLI version",
          subcommands: [
            { name: "upgrade", description: "Upgrade Space CLI version" },
          ],
        },
      ],
    },
  ],
  options: [
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
