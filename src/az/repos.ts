const completionSpec: Fig.Spec = {
  name: "repos",
  description: "Manage Azure Repos",
  subcommands: [
    {
      name: "create",
      description: "Create a Git repository in a team project",
    },
    {
      name: "delete",
      description: "Delete a Git repository in a team project",
    },
    {
      name: "import",
      description: "Manage Git repositories import",
      subcommands: [
        { name: "create", description: "Create a git import request" },
      ],
    },
    { name: "list", description: "List Git repositories of a team project" },
    {
      name: "policy",
      description: "Manage branch policy",
      subcommands: [
        {
          name: "approver-count",
          description: "Manage approver count policy",
          subcommands: [
            { name: "create", description: "Create approver count policy" },
            { name: "update", description: "Update approver count policy" },
          ],
        },
        {
          name: "build",
          description: "Manage build policy",
          subcommands: [
            { name: "create", description: "Create build policy" },
            { name: "update", description: "Update build policy" },
          ],
        },
        {
          name: "case-enforcement",
          description: "Manage case enforcement policy",
          subcommands: [
            { name: "create", description: "Create case enforcement policy" },
            { name: "update", description: "Update case enforcement policy" },
          ],
        },
        {
          name: "comment-required",
          description: "Manage comment required policy",
          subcommands: [
            {
              name: "create",
              description: "Create comment resolution required policy",
            },
            {
              name: "update",
              description: "Update comment resolution required policy",
            },
          ],
        },
        {
          name: "create",
          description: "Create a policy using a configuration file",
        },
        { name: "delete", description: "Delete a policy" },
        {
          name: "file-size",
          description: "Manage file size policy",
          subcommands: [
            { name: "create", description: "Create file size policy" },
            { name: "update", description: "Update file size policy" },
          ],
        },
        { name: "list", description: "List all policies in a project" },
        {
          name: "merge-strategy",
          description: "Manage merge strategy policy",
          subcommands: [
            { name: "create", description: "Create merge strategy policy" },
            { name: "update", description: "Update merge strategy policy" },
          ],
        },
        {
          name: "required-reviewer",
          description: "Manage required reviewer policy",
          subcommands: [
            { name: "create", description: "Create required reviewer policy" },
            { name: "update", description: "Update required reviewer policy" },
          ],
        },
        { name: "show", description: "Show policy details" },
        {
          name: "update",
          description: "Update a policy using a configuration file",
        },
        {
          name: "work-item-linking",
          description: "Manage work item linking policy",
          subcommands: [
            { name: "create", description: "Create work item linking policy" },
            { name: "update", description: "Update work item linking policy" },
          ],
        },
      ],
    },
    {
      name: "pr",
      description: "Manage pull requests",
      subcommands: [
        {
          name: "checkout",
          description:
            "Checkout the PR source branch locally, if no local changes are present",
        },
        { name: "create", description: "Create a pull request" },
        { name: "list", description: "List pull requests" },
        {
          name: "policy",
          description: "Manage pull request policy",
          subcommands: [
            { name: "list", description: "List policies of a pull request" },
            {
              name: "queue",
              description: "Queue an evaluation of a policy for a pull request",
            },
          ],
        },
        {
          name: "reviewer",
          description: "Manage pull request reviewers",
          subcommands: [
            {
              name: "add",
              description: "Add one or more reviewers to a pull request",
            },
            { name: "list", description: "List reviewers of a pull request" },
            {
              name: "remove",
              description: "Remove one or more reviewers from a pull request",
            },
          ],
        },
        { name: "set-vote", description: "Vote on a pull request" },
        { name: "show", description: "Get the details of a pull request" },
        { name: "update", description: "Update a pull request" },
        {
          name: "work-item",
          description: "Manage work items associated with pull requests",
          subcommands: [
            {
              name: "add",
              description: "Link one or more work items to a pull request",
            },
            {
              name: "list",
              description: "List linked work items for a pull request",
            },
            {
              name: "remove",
              description: "Unlink one or more work items from a pull request",
            },
          ],
        },
      ],
    },
    {
      name: "ref",
      description: "Manage Git references",
      subcommands: [
        { name: "create", description: "Create a reference" },
        { name: "delete", description: "Delete a reference" },
        { name: "list", description: "List the references" },
        { name: "lock", description: "Lock a reference" },
        { name: "unlock", description: "Unlock a reference" },
      ],
    },
    { name: "show", description: "Get the details of a Git repository" },
    { name: "update", description: "Update the Git repository" },
  ],
};

export default completionSpec;
