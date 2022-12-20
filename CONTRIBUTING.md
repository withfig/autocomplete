# Contributing to Fig

Thanks for taking the time to build out the future of the terminal with us! 🥳

We want to make contributing to Fig as easy and transparent as possible, whether it's:

- Reporting a bug

- Submitting feature requests

- Contributing content or feature changes

## Our repos

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

Here are some of our primary repos.

[withfig/fig](https://github.com/withfig/fig): The central repo. All issues taken here.

[withfig/autocomplete](https://github.com/withfig/autocomplete): Collection of all specs for [autocomplete](https://fig.io/docs/autocomplete). Contribute new specs and update old specs here.

[withfig/config](https://github.com/withfig/config): Fig's default configuration at install. Contains apps, installation, and update scripts.

## Contributing your own spec

The [autocomplete docs](https://fig.io/docs/autocomplete) should get you up to speed on how to write a spec and serve as a good reference.

A few things to keep in mind when writing your spec:

- Ensure that the argument field is filled for subcommands and options when an argument is required.
- Make sure all generators are written with valid JavaScript.
- [Test your spec](https://fig.io/docs/getting-started#testing-your-first-completion-spec) before submitting a pull request.

**Git Commit Messages**

- Use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) using the CLI tool name you are making changes as the scope ("feat(npm): add generator" and not "Add generator" or "feat: add generator to npm spec")
- Use the present tense ("feat(npm): add feature" not "feat(npm): added feature")
- Use the imperative mood ("feat(git): move cursor to..." not "feat(git): moves cursor to...")
- Limit the first line to 72 characters or less
- Do not reference issues and pull requests in the commit message but reference them in the PR body (you can also use [GitHub's linking keywords](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword))
- When opening large PRs create multiple commits in a new branch (see this great example: https://github.com/withfig/autocomplete/pull/1337), it helps reviewers to be faster and to get your work merged as soon as possible

## Bug reports and feature requests

We use GitHub issues to track public bugs as well as new feature requests. If you have any input, [open a new issue](https://github.com/withfig/fig)! Note that all issues should be filed under the [withfig/fig](https://github.com/withfig/fig) repo, not under independent feature repos.

## Hacktoberfest

We welcome all contributions! However, to reduce maintenance burden, we will mark PRs that **do not significantly contribute** as invalid for Hacktoberfest.

- Small typo fixes will be marked as invalid
  - However, contributing typo checking to our CI would **definitely** be valid!
- Contributions to our README will be marked as invalid
- Fixes to incorrect specs are **valid**
- Fixes to generators are **valid**
- Contributing new completions specs is **valid**

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## Questions and support

For product support, visit our [docs](https://fig.io/docs) and join the [Fig Community](https://fig.io/community) for instant support and discussion.

Any unanswered questions or inquiries? We're always open to chat at hello@fig.io.
