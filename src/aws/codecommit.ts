const completionSpec: Fig.Spec = {
  name: "codecommit",
  description:
    "CodeCommit This is the CodeCommit API Reference. This reference provides descriptions of the operations and data types for CodeCommit API along with usage examples. You can use the CodeCommit API to work with the following objects: Repositories, by calling the following:    BatchGetRepositories, which returns information about one or more repositories associated with your Amazon Web Services account.    CreateRepository, which creates an CodeCommit repository.    DeleteRepository, which deletes an CodeCommit repository.    GetRepository, which returns information about a specified repository.    ListRepositories, which lists all CodeCommit repositories associated with your Amazon Web Services account.    UpdateRepositoryDescription, which sets or updates the description of the repository.    UpdateRepositoryEncryptionKey, which updates the Key Management Service encryption key used to encrypt and decrypt a repository.    UpdateRepositoryName, which changes the name of the repository. If you change the name of a repository, no other users of that repository can access it until you send them the new HTTPS or SSH URL to use.   Branches, by calling the following:    CreateBranch, which creates a branch in a specified repository.    DeleteBranch, which deletes the specified branch in a repository unless it is the default branch.    GetBranch, which returns information about a specified branch.    ListBranches, which lists all branches for a specified repository.    UpdateDefaultBranch, which changes the default branch for a repository.   Files, by calling the following:    DeleteFile, which deletes the content of a specified file from a specified branch.    GetBlob, which returns the base-64 encoded content of an individual Git blob object in a repository.    GetFile, which returns the base-64 encoded content of a specified file.    GetFolder, which returns the contents of a specified folder or directory.    ListFileCommitHistory, which retrieves a list of commits and changes to a specified file.     PutFile, which adds or modifies a single file in a specified repository and branch.   Commits, by calling the following:    BatchGetCommits, which returns information about one or more commits in a repository.    CreateCommit, which creates a commit for changes to a repository.    GetCommit, which returns information about a commit, including commit messages and author and committer information.    GetDifferences, which returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference).   Merges, by calling the following:    BatchDescribeMergeConflicts, which returns information about conflicts in a merge between commits in a repository.    CreateUnreferencedMergeCommit, which creates an unreferenced commit between two branches or commits for the purpose of comparing them and identifying any potential conflicts.    DescribeMergeConflicts, which returns information about merge conflicts between the base, source, and destination versions of a file in a potential merge.    GetMergeCommit, which returns information about the merge between a source and destination commit.     GetMergeConflicts, which returns information about merge conflicts between the source and destination branch in a pull request.    GetMergeOptions, which returns information about the available merge options between two branches or commit specifiers.    MergeBranchesByFastForward, which merges two branches using the fast-forward merge option.    MergeBranchesBySquash, which merges two branches using the squash merge option.    MergeBranchesByThreeWay, which merges two branches using the three-way merge option.   Pull requests, by calling the following:    CreatePullRequest, which creates a pull request in a specified repository.    CreatePullRequestApprovalRule, which creates an approval rule for a specified pull request.    DeletePullRequestApprovalRule, which deletes an approval rule for a specified pull request.    DescribePullRequestEvents, which returns information about one or more pull request events.    EvaluatePullRequestApprovalRules, which evaluates whether a pull request has met all the conditions specified in its associated approval rules.    GetCommentsForPullRequest, which returns information about comments on a specified pull request.    GetPullRequest, which returns information about a specified pull request.    GetPullRequestApprovalStates, which returns information about the approval states for a specified pull request.    GetPullRequestOverrideState, which returns information about whether approval rules have been set aside (overriden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.    ListPullRequests, which lists all pull requests for a repository.    MergePullRequestByFastForward, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the fast-forward merge option.    MergePullRequestBySquash, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the squash merge option.    MergePullRequestByThreeWay, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the three-way merge option.    OverridePullRequestApprovalRules, which sets aside all approval rule requirements for a pull request.    PostCommentForPullRequest, which posts a comment to a pull request at the specified line, file, or request.    UpdatePullRequestApprovalRuleContent, which updates the structure of an approval rule for a pull request.    UpdatePullRequestApprovalState, which updates the state of an approval on a pull request.    UpdatePullRequestDescription, which updates the description of a pull request.    UpdatePullRequestStatus, which updates the status of a pull request.    UpdatePullRequestTitle, which updates the title of a pull request.   Approval rule templates, by calling the following:    AssociateApprovalRuleTemplateWithRepository, which associates a template with a specified repository. After the template is associated with a repository, CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repository.    BatchAssociateApprovalRuleTemplateWithRepositories, which associates a template with one or more specified repositories. After the template is associated with a repository, CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repositories.    BatchDisassociateApprovalRuleTemplateFromRepositories, which removes the association between a template and specified repositories so that approval rules based on the template are not automatically created when pull requests are created in those repositories.    CreateApprovalRuleTemplate, which creates a template for approval rules that can then be associated with one or more repositories in your Amazon Web Services account.    DeleteApprovalRuleTemplate, which deletes the specified template. It does not remove approval rules on pull requests already created with the template.    DisassociateApprovalRuleTemplateFromRepository, which removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository.    GetApprovalRuleTemplate, which returns information about an approval rule template.    ListApprovalRuleTemplates, which lists all approval rule templates in the Amazon Web Services Region in your Amazon Web Services account.    ListAssociatedApprovalRuleTemplatesForRepository, which lists all approval rule templates that are associated with a specified repository.    ListRepositoriesForApprovalRuleTemplate, which lists all repositories associated with the specified approval rule template.    UpdateApprovalRuleTemplateDescription, which updates the description of an approval rule template.    UpdateApprovalRuleTemplateName, which updates the name of an approval rule template.    UpdateApprovalRuleTemplateContent, which updates the content of an approval rule template.   Comments in a repository, by calling the following:    DeleteCommentContent, which deletes the content of a comment on a commit in a repository.    GetComment, which returns information about a comment on a commit.    GetCommentReactions, which returns information about emoji reactions to comments.    GetCommentsForComparedCommit, which returns information about comments on the comparison between two commit specifiers in a repository.    PostCommentForComparedCommit, which creates a comment on the comparison between two commit specifiers in a repository.    PostCommentReply, which creates a reply to a comment.    PutCommentReaction, which creates or updates an emoji reaction to a comment.    UpdateComment, which updates the content of a comment on a commit in a repository.   Tags used to tag resources in CodeCommit (not Git tags), by calling the following:    ListTagsForResource, which gets information about Amazon Web Servicestags for a specified Amazon Resource Name (ARN) in CodeCommit.    TagResource, which adds or updates tags for a resource in CodeCommit.    UntagResource, which removes tags for a resource in CodeCommit.   Triggers, by calling the following:    GetRepositoryTriggers, which returns information about triggers configured for a repository.    PutRepositoryTriggers, which replaces all triggers for a repository and can be used to create or delete triggers.    TestRepositoryTriggers, which tests the functionality of a repository trigger by sending data to the trigger target.   For information about how to use CodeCommit, see the CodeCommit User Guide",
  subcommands: [
    {
      name: "associate-approval-rule-template-with-repository",
      description:
        "Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository",
      options: [
        {
          name: "--approval-rule-template-name",
          description: "The name for the approval rule template",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository that you want to associate with the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-associate-approval-rule-template-with-repositories",
      description:
        "Creates an association between an approval rule template and one or more specified repositories",
      options: [
        {
          name: "--approval-rule-template-name",
          description:
            "The name of the template you want to associate with one or more repositories",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-names",
          description:
            "The names of the repositories you want to associate with the template.  The length constraint limit is for each string in the array. The array itself can be empty",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-describe-merge-conflicts",
      description:
        "Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository that contains the merge conflicts you want to review",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--merge-option",
          description:
            "The merge option or strategy you want to use to merge the code",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-merge-hunks",
          description:
            "The maximum number of merge hunks to include in the output",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-conflict-files",
          description: "The maximum number of files to include in the output",
          args: {
            name: "integer",
          },
        },
        {
          name: "--file-paths",
          description:
            "The path of the target files used to describe the conflicts. If not specified, the default is all conflict files",
          args: {
            name: "list",
          },
        },
        {
          name: "--conflict-detail-level",
          description:
            "The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-resolution-strategy",
          description:
            "Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An enumeration token that, when provided in a request, returns the next batch of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-disassociate-approval-rule-template-from-repositories",
      description:
        "Removes the association between an approval rule template and one or more specified repositories",
      options: [
        {
          name: "--approval-rule-template-name",
          description:
            "The name of the template that you want to disassociate from one or more repositories",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-names",
          description:
            "The repository names that you want to disassociate from the approval rule template.  The length constraint limit is for each string in the array. The array itself can be empty",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-get-commits",
      description:
        "Returns information about the contents of one or more commits in a repository",
      options: [
        {
          name: "--commit-ids",
          description:
            "The full commit IDs of the commits to get information about.  You must supply the full SHA IDs of each commit. You cannot use shortened SHA IDs",
          args: {
            name: "list",
          },
        },
        {
          name: "--repository-name",
          description: "The name of the repository that contains the commits",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-get-repositories",
      description:
        "Returns information about one or more repositories.  The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage",
      options: [
        {
          name: "--repository-names",
          description:
            "The names of the repositories to get information about.  The length constraint limit is for each string in the array. The array itself can be empty",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-approval-rule-template",
      description:
        "Creates a template for approval rules that can then be associated with one or more repositories in your Amazon Web Services account. When you associate a template with a repository, CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see AssociateApprovalRuleTemplateWithRepository",
      options: [
        {
          name: "--approval-rule-template-name",
          description:
            "The name of the approval rule template. Provide descriptive names, because this name is applied to the approval rules created automatically in associated repositories",
          args: {
            name: "string",
          },
        },
        {
          name: "--approval-rule-template-content",
          description:
            "The content of the approval rule that is created on pull requests in associated repositories. If you specify one or more destination references (branches), approval rules are created in an associated repository only if their destination references (branches) match those specified in the template.  When you create the content of the approval rule template, you can specify approvers in an approval pool in one of two ways:    CodeCommitApprovers: This option only requires an Amazon Web Services account and a resource. It can be used for both IAM users and federated access users whose name matches the provided resource name. This is a very powerful option that offers a great deal of flexibility. For example, if you specify the Amazon Web Services account 123456789012 and Mary_Major, all of the following are counted as approvals coming from that user:   An IAM user in the account (arn:aws:iam::123456789012:user/Mary_Major)   A federated user identified in IAM as Mary_Major (arn:aws:sts::123456789012:federated-user/Mary_Major)   This option does not recognize an active session of someone assuming the role of CodeCommitReview with a role session name of Mary_Major (arn:aws:sts::123456789012:assumed-role/CodeCommitReview/Mary_Major) unless you include a wildcard (*Mary_Major).    Fully qualified ARN: This option allows you to specify the fully qualified Amazon Resource Name (ARN) of the IAM user or role.    For more information about IAM ARNs, wildcards, and formats, see IAM Identifiers in the IAM User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--approval-rule-template-description",
          description:
            "The description of the approval rule template. Consider providing a description that explains what this template does and when it might be appropriate to associate it with repositories",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-branch",
      description:
        "Creates a branch in a repository and points the branch to a commit.  Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository in which you want to create the new branch",
          args: {
            name: "string",
          },
        },
        {
          name: "--branch-name",
          description: "The name of the new branch to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-id",
          description: "The ID of the commit to point the new branch to",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-commit",
      description:
        "Creates a commit for a repository on the tip of a specified branch",
      options: [
        {
          name: "--repository-name",
          description: "The name of the repository where you create the commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--branch-name",
          description: "The name of the branch where you create the commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-commit-id",
          description:
            "The ID of the commit that is the parent of the commit you create. Not required if this is an empty repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--author-name",
          description:
            "The name of the author who created the commit. This information is used as both the author and committer for the commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description: "The email address of the person who created the commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-message",
          description:
            "The commit message you want to include in the commit. Commit messages are limited to 256 KB. If no message is specified, a default message is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--keep-empty-folders",
          description:
            "If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a ..gitkeep file is created for empty folders. The default is false",
        },
        {
          name: "--no-keep-empty-folders",
          description:
            "If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a ..gitkeep file is created for empty folders. The default is false",
        },
        {
          name: "--put-files",
          description: "The files to add or update in this commit",
          args: {
            name: "list",
          },
        },
        {
          name: "--delete-files",
          description:
            "The files to delete in this commit. These files still exist in earlier commits",
          args: {
            name: "list",
          },
        },
        {
          name: "--set-file-modes",
          description: "The file modes to update for files in this commit",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-pull-request",
      description: "Creates a pull request in the specified repository",
      options: [
        {
          name: "--title",
          description:
            "The title of the pull request. This title is used to identify the pull request to other users in the repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the pull request",
          args: {
            name: "string",
          },
        },
        {
          name: "--targets",
          description:
            "The targets for the pull request, including the source of the code to be reviewed (the source branch) and the destination where the creator of the pull request intends the code to be merged after the pull request is closed (the destination branch)",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.  The Amazon Web ServicesSDKs prepopulate client request tokens. If you are using an Amazon Web ServicesSDK, an idempotency token is created for you",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-pull-request-approval-rule",
      description: "Creates an approval rule for a pull request",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The system-generated ID of the pull request for which you want to create the approval rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--approval-rule-name",
          description: "The name for the approval rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--approval-rule-content",
          description:
            "The content of the approval rule, including the number of approvals needed and the structure of an approval pool defined for approvals, if any. For more information about approval pools, see the CodeCommit User Guide.  When you create the content of the approval rule, you can specify approvers in an approval pool in one of two ways:    CodeCommitApprovers: This option only requires an Amazon Web Services account and a resource. It can be used for both IAM users and federated access users whose name matches the provided resource name. This is a very powerful option that offers a great deal of flexibility. For example, if you specify the Amazon Web Services account 123456789012 and Mary_Major, all of the following would be counted as approvals coming from that user:   An IAM user in the account (arn:aws:iam::123456789012:user/Mary_Major)   A federated user identified in IAM as Mary_Major (arn:aws:sts::123456789012:federated-user/Mary_Major)   This option does not recognize an active session of someone assuming the role of CodeCommitReview with a role session name of Mary_Major (arn:aws:sts::123456789012:assumed-role/CodeCommitReview/Mary_Major) unless you include a wildcard (*Mary_Major).    Fully qualified ARN: This option allows you to specify the fully qualified Amazon Resource Name (ARN) of the IAM user or role.    For more information about IAM ARNs, wildcards, and formats, see IAM Identifiers in the IAM User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-repository",
      description: "Creates a new, empty repository",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the new repository to be created.  The repository name must be unique across the calling Amazon Web Services account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. For more information about the limits on repository names, see Quotas in the CodeCommit User Guide. The suffix .git is prohibited",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-description",
          description:
            "A comment or description about the new repository.  The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "One or more tag key-value pairs to use when tagging this repository",
          args: {
            name: "map",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ID of the encryption key. You can view the ID of an encryption key in the KMS console, or use the KMS APIs to programmatically retrieve a key ID. For more information about acceptable values for kmsKeyID, see KeyId in the Decrypt API description in the Key Management Service API Reference. If no key is specified, the default aws/codecommit Amazon Web Services managed key is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-unreferenced-merge-commit",
      description:
        "Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.  This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository where you want to create the unreferenced merge commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--merge-option",
          description:
            "The merge option or strategy you want to use to merge the code",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-detail-level",
          description:
            "The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-resolution-strategy",
          description:
            "Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful",
          args: {
            name: "string",
          },
        },
        {
          name: "--author-name",
          description:
            "The name of the author who created the unreferenced commit. This information is used as both the author and committer for the commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description:
            "The email address for the person who created the unreferenced commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-message",
          description: "The commit message for the unreferenced commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--keep-empty-folders",
          description:
            "If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If this is specified as true, a .gitkeep file is created for empty folders. The default is false",
        },
        {
          name: "--no-keep-empty-folders",
          description:
            "If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If this is specified as true, a .gitkeep file is created for empty folders. The default is false",
        },
        {
          name: "--conflict-resolution",
          description:
            "If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-approval-rule-template",
      description:
        "Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template",
      options: [
        {
          name: "--approval-rule-template-name",
          description: "The name of the approval rule template to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-branch",
      description:
        "Deletes a branch from a repository, unless that branch is the default branch for the repository",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository that contains the branch to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--branch-name",
          description: "The name of the branch to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-comment-content",
      description:
        "Deletes the content of a comment made on a change, file, or commit in a repository",
      options: [
        {
          name: "--comment-id",
          description:
            "The unique, system-generated ID of the comment. To get this ID, use GetCommentsForComparedCommit or GetCommentsForPullRequest",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-file",
      description:
        "Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository that contains the file to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--branch-name",
          description:
            "The name of the branch where the commit that deletes the file is made",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-path",
          description:
            "The fully qualified path to the file that to be deleted, including the full name and extension of that file. For example, /examples/file.md is a fully qualified path to a file named file.md in a folder named examples",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-commit-id",
          description:
            "The ID of the commit that is the tip of the branch where you want to create the commit that deletes the file. This must be the HEAD commit for the branch. The commit that deletes the file is created from this commit ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--keep-empty-folders",
          description:
            "If a file is the only object in the folder or directory, specifies whether to delete the folder or directory that contains the file. By default, empty folders are deleted. This includes empty folders that are part of the directory structure. For example, if the path to a file is dir1/dir2/dir3/dir4, and dir2 and dir3 are empty, deleting the last file in dir4 also deletes the empty folders dir4, dir3, and dir2",
        },
        {
          name: "--no-keep-empty-folders",
          description:
            "If a file is the only object in the folder or directory, specifies whether to delete the folder or directory that contains the file. By default, empty folders are deleted. This includes empty folders that are part of the directory structure. For example, if the path to a file is dir1/dir2/dir3/dir4, and dir2 and dir3 are empty, deleting the last file in dir4 also deletes the empty folders dir4, dir3, and dir2",
        },
        {
          name: "--commit-message",
          description:
            "The commit message you want to include as part of deleting the file. Commit messages are limited to 256 KB. If no message is specified, a default message is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the author of the commit that deletes the file. If no name is specified, the user's ARN is used as the author name and committer name",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description:
            "The email address for the commit that deletes the file. If no email address is specified, the email address is left blank",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-pull-request-approval-rule",
      description:
        "Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The system-generated ID of the pull request that contains the approval rule you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--approval-rule-name",
          description: "The name of the approval rule you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-repository",
      description:
        "Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.  Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail",
      options: [
        {
          name: "--repository-name",
          description: "The name of the repository to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-merge-conflicts",
      description:
        "Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository where you want to get information about a merge conflict",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--merge-option",
          description:
            "The merge option or strategy you want to use to merge the code",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-merge-hunks",
          description:
            "The maximum number of merge hunks to include in the output",
          args: {
            name: "integer",
          },
        },
        {
          name: "--file-path",
          description:
            "The path of the target files used to describe the conflicts",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-detail-level",
          description:
            "The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-resolution-strategy",
          description:
            "Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An enumeration token that, when provided in a request, returns the next batch of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-pull-request-events",
      description: "Returns information about one or more pull request events",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The system-generated ID of the pull request. To get this ID, use ListPullRequests",
          args: {
            name: "string",
          },
        },
        {
          name: "--pull-request-event-type",
          description:
            "Optional. The pull request event type about which you want to return information",
          args: {
            name: "string",
          },
        },
        {
          name: "--actor-arn",
          description:
            "The Amazon Resource Name (ARN) of the user whose actions resulted in the event. Examples include updating the pull request with more commits or changing the status of a pull request",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An enumeration token that, when provided in a request, returns the next batch of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "A non-zero, non-negative integer used to limit the number of returned results. The default is 100 events, which is also the maximum number of events that can be returned in a result",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-approval-rule-template-from-repository",
      description:
        "Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association",
      options: [
        {
          name: "--approval-rule-template-name",
          description:
            "The name of the approval rule template to disassociate from a specified repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository you want to disassociate from the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "evaluate-pull-request-approval-rules",
      description:
        "Evaluates whether a pull request has met all the conditions specified in its associated approval rules",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The system-generated ID of the pull request you want to evaluate",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision-id",
          description:
            "The system-generated ID for the pull request revision. To retrieve the most recent revision ID for a pull request, use GetPullRequest",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-approval-rule-template",
      description:
        "Returns information about a specified approval rule template",
      options: [
        {
          name: "--approval-rule-template-name",
          description:
            "The name of the approval rule template for which you want to get information",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-blob",
      description:
        "Returns the base-64 encoded content of an individual blob in a repository",
      options: [
        {
          name: "--repository-name",
          description: "The name of the repository that contains the blob",
          args: {
            name: "string",
          },
        },
        {
          name: "--blob-id",
          description: "The ID of the blob, which is its SHA-1 pointer",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-branch",
      description:
        "Returns information about a repository branch, including its name and the last commit ID",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository that contains the branch for which you want to retrieve information",
          args: {
            name: "string",
          },
        },
        {
          name: "--branch-name",
          description:
            "The name of the branch for which you want to retrieve information",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-comment",
      description:
        "Returns the content of a comment made on a change, file, or commit in a repository.   Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions",
      options: [
        {
          name: "--comment-id",
          description:
            "The unique, system-generated ID of the comment. To get this ID, use GetCommentsForComparedCommit or GetCommentsForPullRequest",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-comment-reactions",
      description:
        "Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count",
      options: [
        {
          name: "--comment-id",
          description:
            "The ID of the comment for which you want to get reactions information",
          args: {
            name: "string",
          },
        },
        {
          name: "--reaction-user-arn",
          description:
            "Optional. The Amazon Resource Name (ARN) of the user or identity for which you want to get reaction information",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An enumeration token that, when provided in a request, returns the next batch of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "A non-zero, non-negative integer used to limit the number of returned results. The default is the same as the allowed maximum, 1,000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-comments-for-compared-commit",
      description:
        "Returns information about comments made on the comparison between two commits.  Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository where you want to compare commits",
          args: {
            name: "string",
          },
        },
        {
          name: "--before-commit-id",
          description:
            "To establish the directionality of the comparison, the full commit ID of the before commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--after-commit-id",
          description:
            "To establish the directionality of the comparison, the full commit ID of the after commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An enumeration token that when provided in a request, returns the next batch of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "A non-zero, non-negative integer used to limit the number of returned results. The default is 100 comments, but you can configure up to 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-comments-for-pull-request",
      description:
        "Returns comments made on a pull request.  Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The system-generated ID of the pull request. To get this ID, use ListPullRequests",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository that contains the pull request. Requirement is conditional: repositoryName must be specified when beforeCommitId and afterCommitId are included",
          args: {
            name: "string",
          },
        },
        {
          name: "--before-commit-id",
          description:
            "The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created. Requirement is conditional: beforeCommitId must be specified when repositoryName is included",
          args: {
            name: "string",
          },
        },
        {
          name: "--after-commit-id",
          description:
            "The full commit ID of the commit in the source branch that was the tip of the branch at the time the comment was made. Requirement is conditional: afterCommitId must be specified when repositoryName is included",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An enumeration token that, when provided in a request, returns the next batch of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "A non-zero, non-negative integer used to limit the number of returned results. The default is 100 comments. You can return up to 500 comments with a single request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-commit",
      description:
        "Returns information about a commit, including commit message and committer information",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository to which the commit was made",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-id",
          description:
            "The commit ID. Commit IDs are the full SHA ID of the commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-differences",
      description:
        "Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository where you want to get differences",
          args: {
            name: "string",
          },
        },
        {
          name: "--before-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, the full commit ID). Optional. If not specified, all changes before the afterCommitSpecifier value are shown. If you do not use beforeCommitSpecifier in your request, consider limiting the results with maxResults",
          args: {
            name: "string",
          },
        },
        {
          name: "--after-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--before-path",
          description:
            "The file path in which to check for differences. Limits the results to this path. Can also be used to specify the previous name of a directory or folder. If beforePath and afterPath are not specified, differences are shown for all paths",
          args: {
            name: "string",
          },
        },
        {
          name: "--after-path",
          description:
            "The file path in which to check differences. Limits the results to this path. Can also be used to specify the changed name of a directory or folder, if it has changed. If not specified, differences are shown for all paths",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "A non-zero, non-negative integer used to limit the number of returned results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An enumeration token that, when provided in a request, returns the next batch of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-file",
      description:
        "Returns the base-64 encoded contents of a specified file and its metadata",
      options: [
        {
          name: "--repository-name",
          description: "The name of the repository that contains the file",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-specifier",
          description:
            "The fully quaified reference that identifies the commit that contains the file. For example, you can specify a full commit ID, a tag, a branch name, or a reference such as refs/heads/main. If none is provided, the head commit is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-path",
          description:
            "The fully qualified path to the file, including the full name and extension of the file. For example, /examples/file.md is the fully qualified path to a file named file.md in a folder named examples",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-folder",
      description: "Returns the contents of a specified folder in a repository",
      options: [
        {
          name: "--repository-name",
          description: "The name of the repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-specifier",
          description:
            "A fully qualified reference used to identify a commit that contains the version of the folder's content to return. A fully qualified reference can be a commit ID, branch name, tag, or reference such as HEAD. If no specifier is provided, the folder content is returned as it exists in the HEAD commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-path",
          description:
            "The fully qualified path to the folder whose contents are returned, including the folder name. For example, /examples is a fully-qualified path to a folder named examples that was created off of the root directory (/) of a repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-merge-commit",
      description: "Returns information about a specified merge commit",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository that contains the merge commit about which you want to get information",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-detail-level",
          description:
            "The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-resolution-strategy",
          description:
            "Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-merge-conflicts",
      description:
        "Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository where the pull request was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--merge-option",
          description:
            "The merge option or strategy you want to use to merge the code",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-detail-level",
          description:
            "The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-conflict-files",
          description: "The maximum number of files to include in the output",
          args: {
            name: "integer",
          },
        },
        {
          name: "--conflict-resolution-strategy",
          description:
            "Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An enumeration token that, when provided in a request, returns the next batch of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-merge-options",
      description:
        "Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository that contains the commits about which you want to get merge options",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-detail-level",
          description:
            "The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-resolution-strategy",
          description:
            "Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-pull-request",
      description:
        "Gets information about a pull request in a specified repository",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The system-generated ID of the pull request. To get this ID, use ListPullRequests",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-pull-request-approval-states",
      description:
        "Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them",
      options: [
        {
          name: "--pull-request-id",
          description: "The system-generated ID for the pull request",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision-id",
          description: "The system-generated ID for the pull request revision",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-pull-request-override-state",
      description:
        "Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The ID of the pull request for which you want to get information about whether approval rules have been set aside (overridden)",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision-id",
          description:
            "The system-generated ID of the revision for the pull request. To retrieve the most recent revision ID, use GetPullRequest",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-repository",
      description:
        "Returns information about a repository.  The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage",
      options: [
        {
          name: "--repository-name",
          description: "The name of the repository to get information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-repository-triggers",
      description:
        "Gets information about triggers configured for a repository",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository for which the trigger is configured",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-approval-rule-templates",
      description:
        "Lists all approval rule templates in the specified Amazon Web Services Region in your Amazon Web Services account. If an Amazon Web Services Region is not specified, the Amazon Web Services Region where you are signed in is used",
      options: [
        {
          name: "--next-token",
          description:
            "An enumeration token that, when provided in a request, returns the next batch of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "A non-zero, non-negative integer used to limit the number of returned results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-associated-approval-rule-templates-for-repository",
      description:
        "Lists all approval rule templates that are associated with a specified repository",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository for which you want to list all associated approval rule templates",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An enumeration token that, when provided in a request, returns the next batch of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "A non-zero, non-negative integer used to limit the number of returned results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-branches",
      description:
        "Gets information about one or more branches in a repository",
      options: [
        {
          name: "--repository-name",
          description: "The name of the repository that contains the branches",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An enumeration token that allows the operation to batch the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-file-commit-history",
      description:
        "Retrieves a list of commits and changes to a specified file",
      options: [
        {
          name: "--repository-name",
          description: "The name of the repository that contains the file",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-specifier",
          description:
            "The fully quaified reference that identifies the commit that contains the file. For example, you can specify a full commit ID, a tag, a branch name, or a reference such as refs/heads/main. If none is provided, the head commit is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-path",
          description:
            "The full path of the file whose history you want to retrieve, including the name of the file",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "A non-zero, non-negative integer used to limit the number of returned results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An enumeration token that allows the operation to batch the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-pull-requests",
      description:
        "Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository for which you want to list pull requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--author-arn",
          description:
            "Optional. The Amazon Resource Name (ARN) of the user who created the pull request. If used, this filters the results to pull requests created by that user",
          args: {
            name: "string",
          },
        },
        {
          name: "--pull-request-status",
          description:
            "Optional. The status of the pull request. If used, this refines the results to the pull requests that match the specified status",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An enumeration token that, when provided in a request, returns the next batch of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "A non-zero, non-negative integer used to limit the number of returned results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-repositories",
      description: "Gets information about one or more repositories",
      options: [
        {
          name: "--next-token",
          description:
            "An enumeration token that allows the operation to batch the results of the operation. Batch sizes are 1,000 for list repository operations. When the client sends the token back to CodeCommit, another page of 1,000 records is retrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The criteria used to sort the results of a list repositories operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--order",
          description:
            "The order in which to sort the results of a list repositories operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-repositories-for-approval-rule-template",
      description:
        "Lists all repositories associated with the specified approval rule template",
      options: [
        {
          name: "--approval-rule-template-name",
          description:
            "The name of the approval rule template for which you want to list repositories that are associated with that template",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An enumeration token that, when provided in a request, returns the next batch of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "A non-zero, non-negative integer used to limit the number of returned results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description:
        "Gets information about Amazon Web Servicestags for a specified Amazon Resource Name (ARN) in CodeCommit. For a list of valid resources in CodeCommit, see CodeCommit Resources and Operations in the CodeCommit User Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource for which you want to get information about tags, if any",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An enumeration token that, when provided in a request, returns the next batch of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "merge-branches-by-fast-forward",
      description: "Merges two branches using the fast-forward merge strategy",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository where you want to merge two branches",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-branch",
          description: "The branch where the merge is applied",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "merge-branches-by-squash",
      description: "Merges two branches using the squash merge strategy",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository where you want to merge two branches",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-branch",
          description: "The branch where the merge is applied",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-detail-level",
          description:
            "The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-resolution-strategy",
          description:
            "Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful",
          args: {
            name: "string",
          },
        },
        {
          name: "--author-name",
          description:
            "The name of the author who created the commit. This information is used as both the author and committer for the commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description:
            "The email address of the person merging the branches. This information is used in the commit information for the merge",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-message",
          description: "The commit message for the merge",
          args: {
            name: "string",
          },
        },
        {
          name: "--keep-empty-folders",
          description:
            "If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If this is specified as true, a .gitkeep file is created for empty folders. The default is false",
        },
        {
          name: "--no-keep-empty-folders",
          description:
            "If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If this is specified as true, a .gitkeep file is created for empty folders. The default is false",
        },
        {
          name: "--conflict-resolution",
          description:
            "If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "merge-branches-by-three-way",
      description:
        "Merges two specified branches using the three-way merge strategy",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository where you want to merge two branches",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-commit-specifier",
          description:
            "The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-branch",
          description: "The branch where the merge is applied",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-detail-level",
          description:
            "The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-resolution-strategy",
          description:
            "Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful",
          args: {
            name: "string",
          },
        },
        {
          name: "--author-name",
          description:
            "The name of the author who created the commit. This information is used as both the author and committer for the commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description:
            "The email address of the person merging the branches. This information is used in the commit information for the merge",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-message",
          description:
            "The commit message to include in the commit information for the merge",
          args: {
            name: "string",
          },
        },
        {
          name: "--keep-empty-folders",
          description:
            "If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a .gitkeep file is created for empty folders. The default is false",
        },
        {
          name: "--no-keep-empty-folders",
          description:
            "If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a .gitkeep file is created for empty folders. The default is false",
        },
        {
          name: "--conflict-resolution",
          description:
            "If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "merge-pull-request-by-fast-forward",
      description:
        "Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The system-generated ID of the pull request. To get this ID, use ListPullRequests",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository where the pull request was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-commit-id",
          description:
            "The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an exception thrown if the current commit ID of the tip of the source branch does not match this commit ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "merge-pull-request-by-squash",
      description:
        "Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The system-generated ID of the pull request. To get this ID, use ListPullRequests",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository where the pull request was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-commit-id",
          description:
            "The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an exception thrown if the current commit ID of the tip of the source branch does not match this commit ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-detail-level",
          description:
            "The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-resolution-strategy",
          description:
            "Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-message",
          description:
            "The commit message to include in the commit information for the merge",
          args: {
            name: "string",
          },
        },
        {
          name: "--author-name",
          description:
            "The name of the author who created the commit. This information is used as both the author and committer for the commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description:
            "The email address of the person merging the branches. This information is used in the commit information for the merge",
          args: {
            name: "string",
          },
        },
        {
          name: "--keep-empty-folders",
          description:
            "If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a .gitkeep file is created for empty folders. The default is false",
        },
        {
          name: "--no-keep-empty-folders",
          description:
            "If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a .gitkeep file is created for empty folders. The default is false",
        },
        {
          name: "--conflict-resolution",
          description:
            "If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "merge-pull-request-by-three-way",
      description:
        "Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The system-generated ID of the pull request. To get this ID, use ListPullRequests",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository where the pull request was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-commit-id",
          description:
            "The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an exception thrown if the current commit ID of the tip of the source branch does not match this commit ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-detail-level",
          description:
            "The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line",
          args: {
            name: "string",
          },
        },
        {
          name: "--conflict-resolution-strategy",
          description:
            "Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-message",
          description:
            "The commit message to include in the commit information for the merge",
          args: {
            name: "string",
          },
        },
        {
          name: "--author-name",
          description:
            "The name of the author who created the commit. This information is used as both the author and committer for the commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description:
            "The email address of the person merging the branches. This information is used in the commit information for the merge",
          args: {
            name: "string",
          },
        },
        {
          name: "--keep-empty-folders",
          description:
            "If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a .gitkeep file is created for empty folders. The default is false",
        },
        {
          name: "--no-keep-empty-folders",
          description:
            "If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a .gitkeep file is created for empty folders. The default is false",
        },
        {
          name: "--conflict-resolution",
          description:
            "If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "override-pull-request-approval-rules",
      description:
        "Sets aside (overrides) all approval rule requirements for a specified pull request",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The system-generated ID of the pull request for which you want to override all approval rule requirements. To get this information, use GetPullRequest",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision-id",
          description:
            "The system-generated ID of the most recent revision of the pull request. You cannot override approval rules for anything but the most recent revision of a pull request. To get the revision ID, use GetPullRequest",
          args: {
            name: "string",
          },
        },
        {
          name: "--override-status",
          description:
            "Whether you want to set aside approval rule requirements for the pull request (OVERRIDE) or revoke a previous override and apply approval rule requirements (REVOKE). REVOKE status is not stored",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "post-comment-for-compared-commit",
      description: "Posts a comment on the comparison between two commits",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository where you want to post a comment on the comparison between commits",
          args: {
            name: "string",
          },
        },
        {
          name: "--before-commit-id",
          description:
            "To establish the directionality of the comparison, the full commit ID of the before commit. Required for commenting on any commit unless that commit is the initial commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--after-commit-id",
          description:
            "To establish the directionality of the comparison, the full commit ID of the after commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "The location of the comparison where you want to comment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--content",
          description: "The content of the comment you want to make",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "post-comment-for-pull-request",
      description: "Posts a comment on a pull request",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The system-generated ID of the pull request. To get this ID, use ListPullRequests",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the repository where you want to post a comment on a pull request",
          args: {
            name: "string",
          },
        },
        {
          name: "--before-commit-id",
          description:
            "The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--after-commit-id",
          description:
            "The full commit ID of the commit in the source branch that is the current tip of the branch for the pull request when you post the comment",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "The location of the change where you want to post your comment. If no location is provided, the comment is posted as a general comment on the pull request difference between the before commit ID and the after commit ID",
          args: {
            name: "structure",
          },
        },
        {
          name: "--content",
          description: "The content of your comment on the change",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "post-comment-reply",
      description:
        "Posts a comment in reply to an existing comment on a comparison between commits or a pull request",
      options: [
        {
          name: "--in-reply-to",
          description:
            "The system-generated ID of the comment to which you want to reply. To get this ID, use GetCommentsForComparedCommit or GetCommentsForPullRequest",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description: "The contents of your reply to a comment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-comment-reaction",
      description:
        "Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user",
      options: [
        {
          name: "--comment-id",
          description:
            "The ID of the comment to which you want to add or update a reaction",
          args: {
            name: "string",
          },
        },
        {
          name: "--reaction-value",
          description:
            "The emoji reaction you want to add or update. To remove a reaction, provide a value of blank or null. You can also provide the value of none. For information about emoji reaction values supported in CodeCommit, see the CodeCommit User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-file",
      description:
        "Adds or updates a file in a branch in an CodeCommit repository, and generates a commit for the addition in the specified branch",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository where you want to add or update the file",
          args: {
            name: "string",
          },
        },
        {
          name: "--branch-name",
          description:
            "The name of the branch where you want to add or update the file. If this is an empty repository, this branch is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-content",
          description: "The content of the file, in binary object format",
          args: {
            name: "blob",
          },
        },
        {
          name: "--file-path",
          description:
            "The name of the file you want to add or update, including the relative path to the file in the repository.  If the path does not currently exist in the repository, the path is created as part of adding the file",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-mode",
          description:
            "The file mode permissions of the blob. Valid file mode permissions are listed here",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-commit-id",
          description:
            "The full commit ID of the head commit in the branch where you want to add or update the file. If this is an empty repository, no commit ID is required. If this is not an empty repository, a commit ID is required.  The commit ID must match the ID of the head commit at the time of the operation. Otherwise, an error occurs, and the file is not added or updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-message",
          description:
            "A message about why this file was added or updated. Although it is optional, a message makes the commit history for your repository more useful",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the person adding or updating the file. Although it is optional, a name makes the commit history for your repository more useful",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description:
            "An email address for the person adding or updating the file",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-repository-triggers",
      description:
        "Replaces all triggers for a repository. Used to create or delete triggers",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository where you want to create or update the trigger",
          args: {
            name: "string",
          },
        },
        {
          name: "--triggers",
          description:
            "The JSON block of configuration information for each trigger",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "tag-resource",
      description:
        "Adds or updates tags for a resource in CodeCommit. For a list of valid resources in CodeCommit, see CodeCommit Resources and Operations in the CodeCommit User Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to which you want to add or update tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The key-value pair to use when tagging this repository",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "test-repository-triggers",
      description:
        "Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository in which to test the triggers",
          args: {
            name: "string",
          },
        },
        {
          name: "--triggers",
          description: "The list of triggers to test",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description:
        "Removes tags for a resource in CodeCommit. For a list of valid resources in CodeCommit, see CodeCommit Resources and Operations in the CodeCommit User Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to which you want to remove tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The tag key for each tag that you want to remove from the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-approval-rule-template-content",
      description:
        "Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined",
      options: [
        {
          name: "--approval-rule-template-name",
          description:
            "The name of the approval rule template where you want to update the content of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-rule-content",
          description:
            "The content that replaces the existing content of the rule. Content statements must be complete. You cannot provide only the changes",
          args: {
            name: "string",
          },
        },
        {
          name: "--existing-rule-content-sha256",
          description:
            "The SHA-256 hash signature for the content of the approval rule. You can retrieve this information by using GetPullRequest",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-approval-rule-template-description",
      description:
        "Updates the description for a specified approval rule template",
      options: [
        {
          name: "--approval-rule-template-name",
          description:
            "The name of the template for which you want to update the description",
          args: {
            name: "string",
          },
        },
        {
          name: "--approval-rule-template-description",
          description: "The updated description of the approval rule template",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-approval-rule-template-name",
      description: "Updates the name of a specified approval rule template",
      options: [
        {
          name: "--old-approval-rule-template-name",
          description: "The current name of the approval rule template",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-approval-rule-template-name",
          description:
            "The new name you want to apply to the approval rule template",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-comment",
      description: "Replaces the contents of a comment",
      options: [
        {
          name: "--comment-id",
          description:
            "The system-generated ID of the comment you want to update. To get this ID, use GetCommentsForComparedCommit or GetCommentsForPullRequest",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "The updated content to replace the existing content of the comment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-default-branch",
      description:
        "Sets or changes the default branch name for the specified repository.  If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository for which you want to set or change the default branch",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-branch-name",
          description: "The name of the branch to set as the default branch",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-pull-request-approval-rule-content",
      description:
        "Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers",
      options: [
        {
          name: "--pull-request-id",
          description: "The system-generated ID of the pull request",
          args: {
            name: "string",
          },
        },
        {
          name: "--approval-rule-name",
          description: "The name of the approval rule you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--existing-rule-content-sha256",
          description:
            "The SHA-256 hash signature for the content of the approval rule. You can retrieve this information by using GetPullRequest",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-rule-content",
          description:
            "The updated content for the approval rule.  When you update the content of the approval rule, you can specify approvers in an approval pool in one of two ways:    CodeCommitApprovers: This option only requires an Amazon Web Services account and a resource. It can be used for both IAM users and federated access users whose name matches the provided resource name. This is a very powerful option that offers a great deal of flexibility. For example, if you specify the Amazon Web Services account 123456789012 and Mary_Major, all of the following are counted as approvals coming from that user:   An IAM user in the account (arn:aws:iam::123456789012:user/Mary_Major)   A federated user identified in IAM as Mary_Major (arn:aws:sts::123456789012:federated-user/Mary_Major)   This option does not recognize an active session of someone assuming the role of CodeCommitReview with a role session name of Mary_Major (arn:aws:sts::123456789012:assumed-role/CodeCommitReview/Mary_Major) unless you include a wildcard (*Mary_Major).    Fully qualified ARN: This option allows you to specify the fully qualified Amazon Resource Name (ARN) of the IAM user or role.    For more information about IAM ARNs, wildcards, and formats, see IAM Identifiers in the IAM User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-pull-request-approval-state",
      description:
        "Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made",
      options: [
        {
          name: "--pull-request-id",
          description: "The system-generated ID of the pull request",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision-id",
          description: "The system-generated ID of the revision",
          args: {
            name: "string",
          },
        },
        {
          name: "--approval-state",
          description:
            "The approval state to associate with the user on the pull request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-pull-request-description",
      description: "Replaces the contents of the description of a pull request",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The system-generated ID of the pull request. To get this ID, use ListPullRequests",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The updated content of the description for the pull request. This content replaces the existing description",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-pull-request-status",
      description: "Updates the status of a pull request",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The system-generated ID of the pull request. To get this ID, use ListPullRequests",
          args: {
            name: "string",
          },
        },
        {
          name: "--pull-request-status",
          description:
            "The status of the pull request. The only valid operations are to update the status from OPEN to OPEN, OPEN to CLOSED or from CLOSED to CLOSED",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-pull-request-title",
      description: "Replaces the title of a pull request",
      options: [
        {
          name: "--pull-request-id",
          description:
            "The system-generated ID of the pull request. To get this ID, use ListPullRequests",
          args: {
            name: "string",
          },
        },
        {
          name: "--title",
          description:
            "The updated title of the pull request. This replaces the existing title",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-repository-description",
      description:
        "Sets or changes the comment or description for a repository.  The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository to set or change the comment or description for",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-description",
          description:
            "The new comment or description for the specified repository. Repository descriptions are limited to 1,000 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-repository-encryption-key",
      description:
        "Updates the Key Management Service encryption key used to encrypt and decrypt a CodeCommit repository",
      options: [
        {
          name: "--repository-name",
          description:
            "The name of the repository for which you want to update the KMS encryption key used to encrypt and decrypt the repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ID of the encryption key. You can view the ID of an encryption key in the KMS console, or use the KMS APIs to programmatically retrieve a key ID. For more information about acceptable values for keyID, see KeyId in the Decrypt API description in the Key Management Service API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-repository-name",
      description:
        "Renames a repository. The repository name must be unique across the calling Amazon Web Services account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see Quotas in the CodeCommit User Guide",
      options: [
        {
          name: "--old-name",
          description: "The current name of the repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-name",
          description: "The new name for the repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "credential-helper",
      description:
        'Provide a SigV4 compatible user name and password for git smart HTTP  These commands are consumed by git and should not used directly. Erase and Store are no-ops. Get is operation to generate credentials to authenticate AWS CodeCommit. Run "aws codecommit credential-helper help" for details',
      subcommands: [
        {
          name: "get",
          description:
            "Get a username SigV4 credential pair based on protocol, host and path provided from standard in. This is primarily called by git to generate credentials to authenticate against AWS CodeCommit",
          options: [
            {
              name: "--ignore-host-check",
              description:
                "Optional. Generate credentials regardless of whether the domain is an Amazon domain",
            },
          ],
        },
        {
          name: "store",
          description:
            "This operation does nothing, credentials are calculated each time",
        },
        {
          name: "erase",
          description:
            "This operation does nothing, no credentials are ever stored",
        },
      ],
    },
  ],
};
export default completionSpec;
