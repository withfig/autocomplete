// Task Master CLI autocomplete specification
// Based on Task Master version 0.14.0
// https://x.com/eyaltoledano

// To learn more about Fig's autocomplete standard visit: https://fig.io/docs/concepts/cli-skeleton

const statusSuggestions: Fig.Suggestion[] = [
    { name: "pending", description: "Task is pending" },
    { name: "done", description: "Task is completed" },
    { name: "in-progress", description: "Task is currently being worked on" },
    { name: "review", description: "Task is under review" },
    { name: "deferred", description: "Task has been deferred" },
    { name: "cancelled", description: "Task has been cancelled" },
];

const prioritySuggestions: Fig.Suggestion[] = [
    { name: "high", description: "High priority task" },
    { name: "medium", description: "Medium priority task" },
    { name: "low", description: "Low priority task" },
];

const completionSpec: Fig.Spec = {
    name: "task-master",
    description: "Claude Task Master CLI",
    options: [
        {
            name: ["-V", "--version"],
            description: "Output the version number",
        },
        {
            name: ["-h", "--help"],
            description: "Display help information",
        },
    ],
    subcommands: [
        // Project Setup & Configuration
        {
            name: "init",
            description: "Initialize a new project with Task Master structure",
            options: [
                {
                    name: "--name",
                    requiresSeparator: true,
                    description: "Project name",
                    args: {
                        name: "name",
                        description: "Name of the project",
                    },
                },
                {
                    name: "--description",
                    requiresSeparator: true,
                    description: "Project description",
                    args: {
                        name: "description",
                        description: "Description of the project",
                    },
                },
                {
                    name: "-y",
                    description: "Skip prompts and use defaults",
                },
            ],
        },
        {
            name: "models",
            description: "View current AI model configuration and available models",
            options: [
                {
                    name: "--setup",
                    description: "Run interactive setup to configure AI models",
                },
                {
                    name: "--set-main",
                    requiresSeparator: true,
                    description: "Set the primary model for task generation",
                    args: {
                        name: "model_id",
                        description: "Model ID to set as primary",
                    },
                },
                {
                    name: "--set-research",
                    requiresSeparator: true,
                    description: "Set the model for research operations",
                    args: {
                        name: "model_id",
                        description: "Model ID to set for research",
                    },
                },
                {
                    name: "--set-fallback",
                    requiresSeparator: true,
                    description: "Set the fallback model (optional)",
                    args: {
                        name: "model_id",
                        description: "Model ID to set as fallback",
                    },
                },
            ],
        },

        // Task Generation
        {
            name: "parse-prd",
            description: "Generate tasks from a PRD document",
            options: [
                {
                    name: "--input",
                    requiresSeparator: true,
                    description: "Path to PRD file",
                    args: {
                        name: "file.txt",
                        description: "PRD document file path",
                        template: "filepaths",
                    },
                },
                {
                    name: "--num-tasks",
                    requiresSeparator: true,
                    description: "Number of tasks to generate (default: 10)",
                    args: {
                        name: "number",
                        description: "Number of tasks",
                    },
                },
            ],
        },
        {
            name: "generate",
            description: "Create individual task files from tasks.json",
        },

        // Task Management
        {
            name: "list",
            description: "List all tasks with their status",
            options: [
                {
                    name: "--status",
                    requiresSeparator: true,
                    description: "Filter by status",
                    args: {
                        name: "status",
                        description: "Task status to filter by",
                        suggestions: statusSuggestions,
                    },
                },
                {
                    name: "--with-subtasks",
                    description: "Include subtasks in the listing",
                },
            ],
        },
        {
            name: "set-status",
            description: "Update task status",
            options: [
                {
                    name: "--id",
                    requiresSeparator: true,
                    description: "Task ID",
                    args: {
                        name: "id",
                        description: "Task or subtask ID (e.g., '5' or '5.2')",
                    },
                },
                {
                    name: "--status",
                    requiresSeparator: true,
                    description: "New status",
                    args: {
                        name: "status",
                        description: "Status to set",
                        suggestions: statusSuggestions,
                    },
                },
            ],
        },
        {
            name: "update",
            description: "Update multiple tasks based on new requirements",
            options: [
                {
                    name: "--from",
                    requiresSeparator: true,
                    description: "Starting task ID",
                    args: {
                        name: "id",
                        description: "Task ID to start updating from",
                    },
                },
                {
                    name: "--prompt",
                    requiresSeparator: true,
                    description: "Context for updates",
                    args: {
                        name: "context",
                        description: "Update context or requirements",
                    },
                },
            ],
        },
        {
            name: "update-task",
            description: "Update a single specific task with new information",
            options: [
                {
                    name: "--id",
                    requiresSeparator: true,
                    description: "Task ID",
                    args: {
                        name: "id",
                        description: "Task ID to update",
                    },
                },
                {
                    name: "--prompt",
                    requiresSeparator: true,
                    description: "Context for update",
                    args: {
                        name: "context",
                        description: "New information or context",
                    },
                },
            ],
        },
        {
            name: "update-subtask",
            description: "Append additional information to a subtask",
            options: [
                {
                    name: "--id",
                    requiresSeparator: true,
                    description: "Subtask ID",
                    args: {
                        name: "parentId.subtaskId",
                        description: "Subtask ID in format parentId.subtaskId",
                    },
                },
                {
                    name: "--prompt",
                    requiresSeparator: true,
                    description: "Context to append",
                    args: {
                        name: "context",
                        description: "Information to append to subtask",
                    },
                },
            ],
        },
        {
            name: "add-task",
            description: "Add a new task using AI",
            options: [
                {
                    name: "--prompt",
                    requiresSeparator: true,
                    description: "Task description",
                    args: {
                        name: "text",
                        description: "Description of the task to add",
                    },
                },
                {
                    name: "--dependencies",
                    requiresSeparator: true,
                    description: "Comma-separated list of task IDs this task depends on",
                    args: {
                        name: "ids",
                        description: "Dependency task IDs",
                    },
                },
                {
                    name: "--priority",
                    requiresSeparator: true,
                    description: "Task priority",
                    args: {
                        name: "priority",
                        description: "Priority level",
                        suggestions: prioritySuggestions,
                    },
                },
            ],
        },
        {
            name: "remove-task",
            description: "Permanently remove a task or subtask",
            options: [
                {
                    name: "--id",
                    requiresSeparator: true,
                    description: "Task or subtask ID",
                    args: {
                        name: "id",
                        description: "ID of task or subtask to remove",
                    },
                },
                {
                    name: "-y",
                    description: "Skip confirmation prompt",
                },
            ],
        },

        // Subtask Management
        {
            name: "add-subtask",
            description: "Add a new subtask to a parent task",
            options: [
                {
                    name: "--parent",
                    requiresSeparator: true,
                    description: "Parent task ID",
                    args: {
                        name: "id",
                        description: "ID of the parent task",
                    },
                },
                {
                    name: "--title",
                    requiresSeparator: true,
                    description: "Subtask title",
                    args: {
                        name: "title",
                        description: "Title for the new subtask",
                    },
                },
                {
                    name: "--description",
                    requiresSeparator: true,
                    description: "Subtask description",
                    args: {
                        name: "description",
                        description: "Description for the new subtask",
                    },
                },
                {
                    name: "--task-id",
                    requiresSeparator: true,
                    description: "Convert existing task to subtask",
                    args: {
                        name: "id",
                        description: "Existing task ID to convert",
                    },
                },
            ],
        },
        {
            name: "remove-subtask",
            description: "Remove a subtask (optionally convert to standalone task)",
            options: [
                {
                    name: "--id",
                    requiresSeparator: true,
                    description: "Subtask ID",
                    args: {
                        name: "parentId.subtaskId",
                        description: "Subtask ID in format parentId.subtaskId",
                    },
                },
                {
                    name: "--convert",
                    description: "Convert to standalone task instead of deleting",
                },
            ],
        },
        {
            name: "clear-subtasks",
            description: "Remove all subtasks from specified tasks",
            options: [
                {
                    name: "--id",
                    requiresSeparator: true,
                    description: "Task ID",
                    args: {
                        name: "id",
                        description: "Task ID to clear subtasks from",
                    },
                },
                {
                    name: "--all",
                    description: "Remove subtasks from all tasks",
                },
            ],
        },

        // Task Analysis & Breakdown
        {
            name: "analyze-complexity",
            description: "Analyze tasks and generate expansion recommendations",
            options: [
                {
                    name: "--research",
                    description: "Use research capabilities for analysis",
                },
                {
                    name: "--threshold",
                    requiresSeparator: true,
                    description: "Complexity threshold (default: 5)",
                    args: {
                        name: "number",
                        description: "Threshold value (1-10)",
                    },
                },
            ],
        },
        {
            name: "complexity-report",
            description: "Display the complexity analysis report",
            options: [
                {
                    name: "--file",
                    requiresSeparator: true,
                    description: "Report file path",
                    args: {
                        name: "path",
                        description: "Path to complexity report file",
                        template: "filepaths",
                    },
                },
            ],
        },
        {
            name: "expand",
            description: "Break down tasks into detailed subtasks",
            options: [
                {
                    name: "--id",
                    requiresSeparator: true,
                    description: "Task ID to expand",
                    args: {
                        name: "id",
                        description: "Task ID",
                    },
                },
                {
                    name: "--num",
                    requiresSeparator: true,
                    description: "Number of subtasks (default: 5)",
                    args: {
                        name: "number",
                        description: "Number of subtasks to generate",
                    },
                },
                {
                    name: "--research",
                    description: "Use research capabilities",
                },
                {
                    name: "--prompt",
                    requiresSeparator: true,
                    description: "Additional context",
                    args: {
                        name: "context",
                        description: "Context for subtask generation",
                    },
                },
                {
                    name: "--all",
                    description: "Expand all pending tasks with subtasks",
                },
                {
                    name: "--force",
                    description: "Force expansion even if subtasks exist",
                },
            ],
        },

        // Task Navigation & Viewing
        {
            name: "next",
            description: "Show the next task to work on based on dependencies",
        },
        {
            name: "show",
            description: "Display detailed information about a specific task",
            args: {
                name: "id",
                description: "Task ID to display",
            },
        },

        // Dependency Management
        {
            name: "add-dependency",
            description: "Add a dependency to a task",
            options: [
                {
                    name: "--id",
                    requiresSeparator: true,
                    description: "Task ID",
                    args: {
                        name: "id",
                        description: "Task ID that will depend on another",
                    },
                },
                {
                    name: "--depends-on",
                    requiresSeparator: true,
                    description: "Dependency task ID",
                    args: {
                        name: "id",
                        description: "Task ID that will become a dependency",
                    },
                },
            ],
        },
        {
            name: "remove-dependency",
            description: "Remove a dependency from a task",
            options: [
                {
                    name: "--id",
                    requiresSeparator: true,
                    description: "Task ID",
                    args: {
                        name: "id",
                        description: "Task ID to remove dependency from",
                    },
                },
                {
                    name: "--depends-on",
                    requiresSeparator: true,
                    description: "Dependency task ID to remove",
                    args: {
                        name: "id",
                        description: "Dependency task ID to remove",
                    },
                },
            ],
        },
        {
            name: "validate-dependencies",
            description: "Identify invalid dependencies without fixing them",
        },
        {
            name: "fix-dependencies",
            description: "Fix invalid dependencies automatically",
        },
    ],
};

export default completionSpec; 