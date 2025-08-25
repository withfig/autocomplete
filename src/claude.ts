const completionSpec: Fig.Spec = {
  name: "claude",
  description: "Claude Code - Interactive CLI tool for coding with Claude AI",
  subcommands: [
    {
      name: "update",
      description: "Update Claude Code to the latest version",
    },
    {
      name: "mcp",
      description: "Configure Model Context Protocol (MCP) servers",
      subcommands: [
        {
          name: "list",
          description: "List all configured MCP servers",
        },
        {
          name: "add",
          description: "Add a new MCP server configuration",
        },
        {
          name: "remove",
          description: "Remove an MCP server configuration",
        },
        {
          name: "import",
          description: "Import MCP server configurations from Claude Desktop",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for claude",
    },
    {
      name: ["--print", "-p"],
      description: "Query via SDK, then exit (non-interactive mode)",
      args: {
        name: "query",
        description: "The query to send to Claude",
      },
    },
    {
      name: ["--continue", "-c"],
      description: "Continue most recent conversation",
    },
    {
      name: ["--resume", "-r"],
      description: "Resume session by ID",
      args: {
        name: "session-id",
        description: "The session ID to resume",
      },
    },
    {
      name: "--add-dir",
      description: "Add additional working directories",
      args: {
        name: "directory",
        description: "Directory path to add",
        template: "folders",
      },
    },
    {
      name: "--allowedTools",
      description: "Specify allowed tools (comma-separated)",
      args: {
        name: "tools",
        description: "Comma-separated list of allowed tools",
      },
    },
    {
      name: "--disallowedTools",
      description: "Specify disallowed tools (comma-separated)",
      args: {
        name: "tools",
        description: "Comma-separated list of disallowed tools",
      },
    },
    {
      name: "--append-system-prompt",
      description: "Append to system prompt",
      args: {
        name: "prompt",
        description: "Additional system prompt text",
      },
    },
    {
      name: "--output-format",
      description: "Specify output format",
      args: {
        name: "format",
        description: "Output format",
        suggestions: ["text", "json", "stream-json"],
      },
    },
    {
      name: "--input-format",
      description: "Specify input format",
      args: {
        name: "format",
        description: "Input format",
        suggestions: ["text", "stream-json"],
      },
    },
    {
      name: "--verbose",
      description: "Enable detailed logging",
    },
    {
      name: "--max-turns",
      description: "Limit the number of agentic turns in non-interactive mode",
      args: {
        name: "number",
        description: "Maximum number of turns",
      },
    },
    {
      name: "--model",
      description: "Set session model",
      args: {
        name: "model",
        description: "Model name to use",
        suggestions: [
          "claude-3-5-haiku-latest",
          "claude-3-7-sonnet-latest",
          "claude-sonnet-4-0",
          "claude-opus-4-0",
          "claude-opus-4-1",
        ],
      },
    },
    {
      name: "--permission-mode",
      description: "Set permission mode",
      args: {
        name: "mode",
        description: "Permission mode",
        suggestions: ["default", "acceptEdits", "plan", "bypassPermissions"],
      },
    },
    {
      name: "--dangerously-skip-permissions",
      description: "Skip permission prompts (use with caution)",
    },
  ],
  args: {
    name: "query",
    description:
      "Initial query to send to Claude (starts REPL with this prompt)",
    isOptional: true,
  },
};
export default completionSpec;
