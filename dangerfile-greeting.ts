import { danger, schedule } from "danger";

const getRandomNumber = () => Math.ceil(Math.random() * 10);

schedule(async () => {
  const { owner, repo, number } = danger.github.thisPR;

  const { data: comments } = await danger.github.api.issues.listComments({
    issue_number: number,
    repo,
    owner,
  });

  const hasGreetingComment = comments.some((comment) =>
    comment.body.includes("id: greetingComment")
  );

  if (!hasGreetingComment) {
    await danger.github.api.issues.createComment({
      repo,
      owner,
      issue_number: number,
      body: `<!-- id: greetingComment -->
Hello @${danger.github.pr.user.login}, 
thank you very much for creating a Pull Request!
Here is a small checklist to get this PR merged as quickly as possible:

- [ ] Do all subcommands / options which take arguments have the arg property (\`arg: {}\`)?
- [ ] Are all options modular? E.g. \`a\` \`-u\` \`-x\` instead of \`-aux\`
- [ ] Have all other checks passed? 

Also to prevent spammers please reply to that comment with the solution of this equation:

\`${getRandomNumber()} + ${getRandomNumber()} =\`
`,
    });
  }
});
