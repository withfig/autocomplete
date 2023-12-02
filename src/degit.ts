export interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: null | string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null | string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: null | string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License | null;
  allow_forking: boolean;
  is_template: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

const completionSpec: Fig.Spec = {
  name: "degit",
  description: "Straightforward project scaffolding",
  args: [
    {
      name: "user/repo",
      generators: {
        trigger: (newToken, oldToken) =>
          newToken.indexOf("/") !== oldToken.indexOf("/"),
        custom: async (tokens, executeShellCommand) => {
          const lastToken = tokens[tokens.length - 1];
          if (lastToken.includes(":")) return [];
          const username = lastToken.slice(0, lastToken.indexOf("/"));
          const { stdout } = await executeShellCommand({
            command: "curl",
            args: ["-sL", `https://api.github.com/users/${username}/repos`],
          });
          const repos = JSON.parse(stdout) as Repository[];
          return repos.map((repo) => ({
            name: repo.full_name,
            description: repo.description ?? "Repository",
            priority: repo.is_template ? 51 : 50,
            displayName: repo.name,
            icon: "fig://icon?type=git",
          }));
        },
      },
    },
    {
      name: "location",
      isOptional: true,
      template: "folders",
      suggestCurrentToken: true,
    },
  ],
  options: [
    {
      name: "--help",
      description: "Print help",
    },
    {
      name: ["-f", "--force"],
      description: "Overwrite existing files",
    },
    {
      name: ["-c", "--cache"],
      description: "Use a cache",
    },
    {
      name: ["-v", "--verbose"],
      description: "Be verbose?",
    },
    {
      name: ["-m", "--mode"],
      description: "Clone mode",
      args: {
        name: "mode",
        suggestions: ["git", "tar"],
      },
    },
  ],
};
export default completionSpec;
