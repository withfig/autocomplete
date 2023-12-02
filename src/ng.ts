interface ProjectDetails {
  projectType: string;
}

const projectsGenerator = {
  script: ["ng", "config", "projects"],
  postProcess: function (out) {
    try {
      const projects = JSON.parse(out);

      return Object.entries(projects).map(
        ([projectName, details]: [string, ProjectDetails]) => ({
          name: projectName,
          description: details.projectType,
        })
      );
    } catch (e) {}
    return [];
  },
};
const projectsOption = {
  name: "--project",
  description: "Project name",
  args: {
    generators: projectsGenerator,
  },
};
const completionSpec: Fig.Spec = {
  name: "ng",
  description: "CLI interface for Angular",
  subcommands: [
    {
      name: "new",
      description: "Create a new Angular app",
      args: {
        name: "name",
      },
      options: [
        {
          name: "--create-application",
          description: "Create a default application?",
          args: {
            name: "project",
            suggestions: ["true", "false"],
          },
        },
      ],
    },
    {
      name: "generate",
      description: "Generate new files",
      args: {
        name: "schematic",
      },
      subcommands: [
        {
          name: "application",
          description: "Generates a new application",
          args: {
            name: "name",
            description: "Name of the new app",
          },
          options: [
            {
              name: "--style",
              args: {
                name: "extension",
                suggestions: ["css", "scss", "sass", "less", "styl"],
              },
            },
          ],
        },
        {
          name: "component",
          description: "Generate a new component",
          args: {
            name: "name",
            description: "Component name",
            isOptional: true,
          },
          options: [
            projectsOption,
            {
              name: ["--change-detection", "-c"],
              description: "The change detection strategy to use",
              args: {
                name: "strategy",
                suggestions: ["Default", "OnPush"],
              },
            },
            {
              name: ["--display-block", "-b"],
              description: "Add :host block to styles",
              args: {
                name: "boolean",
                suggestions: ["true", "false"],
              },
            },
            {
              name: "--flat",
              description: "Create at the top level",
              args: {
                name: "boolean",
                suggestions: ["true", "false"],
              },
            },
          ],
        },
        {
          name: "library",
          description: "Generates a new library",
          args: {
            name: "name",
            isOptional: true,
          },
        },
        {
          name: "class",
          description: "Generates a class",
          args: {
            name: "name",
            isOptional: true,
          },
          options: [projectsOption],
        },
      ],
    },
    {
      name: "version",
      description: "View your Angular CLI version (update for Angular 14+)",
    },
  ],
  options: [
    {
      name: "--version",
      description: "View your Angular CLI version",
    },
  ],
};

export default completionSpec;
