import { danger, schedule } from "danger";

schedule(async () => {
  const { owner, repo, number } = danger.github.thisPR;
  // const prInfo = await danger.github.api.pulls.get({
  //   owner,
  //   repo,
  //   pull_number: number,
  // });

  const { data: comments } = await danger.github.api.issues.listComments({
    issue_number: number,
    repo,
    owner,
  });

  const hasGreetingComment = comments.some((comment) =>
    comment.body.includes("id: greetingComment")
  );

  if (!hasGreetingComment) {
    // const creator = prInfo.data.user.login;
    await danger.github.api.issues.createComment({
      repo,
      owner,
      issue_number: number,
      body: `<!-- id: greetingComment -->
Hello @user, 
thank you very much for creating a Pull Request!
Here is a small checklist to get this PR merged as quickly as possible:

- [ ] Do all subcommands / options which take arguments have the arg property (\`arg: {}\`)?
- [ ] Are all options modular? E.g. \`a\` \`-u\` \`-x\` instead of \`-aux\`
`,
    });
  }
});
