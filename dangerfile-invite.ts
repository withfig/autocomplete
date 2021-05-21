// For the inspiration for this file, see: https://github.com/danger/peril-settings/blob/fc0015452438c8a1624c0951a600f723f2e60fea/org/aeryn.ts#L18-L39
import { schedule, danger, markdown } from "danger";

schedule(async () => {
  const pr = danger.github.pr;
  const username = pr.user.login;
  const api = danger.github.api;

  if (!pr.merged) {
    // Only proceed if the PR was merged (as opposed to closed without merging).
    return;
  }

  const org = "withfig";
  const inviteMarkdown = `
  @${username} Hey! Thanks so much for your contribution! 

As a token of our appreciation, we've invited you to join the Fig GitHub organization. Accepting means you can display Fig's logo on your Github profile's list of member orgs. We also have a special #contributors channel in our [community Discord](https://fig.io/community) and we'd love for you to join.

Excited to have you in the community!

Matt & Brendan
`;

  try {
    // This throws if the user isn't a member of the org yet. If it doesn't
    // throw, then it means the user was already invited or has already
    // accepted the invitation (we ignore the return value here).
    await api.orgs.checkMembership({ org, username });
  } catch (error) {
    // Search to check if user has had a PR merged before
    const query = `org:${org}+author:${username}+type:pr+is:merged`;
    await api.search.issues({ q: query }).then(async (res) => {
      const mergedPrCount = res.data.total_count;
      if (mergedPrCount === 1) {
        markdown(inviteMarkdown);
        await api.orgs.addOrUpdateMembership({ org, username, role: "member" });
      }
    });
  }
});
