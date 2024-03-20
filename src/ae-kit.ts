const completionSpec: Fig.Spec = {
	name: "ae-kit",
	description: "A toolkit for analytics engineers to manage their day-to-day tasks",
	subcommands: [
		{
			name: "init",
			description: "Generate an AE-kit directory & configuration file in the current directory",
		},
		{
			name: "commit-all",
			description: "Commit all changes in the current directory using Conventional Commits format",
		},
		{
			name: "s3-sync",
			description: "Sync files to S3 using filepaths from the configuration file",
		},
		{
			name: "branch-new",
			description: "Checks out main, pulls latest changes, and creates a new branch. Can be used for Linear Ticket Connections",
		}
	],
};

export default completionSpec;