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
  @${username} Thanks a lot for contributing to Fig! We've invited you to join 
  the Fig GitHub organization – no pressure to accept! If you'd like more 
  information on what that means, check out our [contributor guidelines][c] and
  feel free to reach out to our team with any questions.
  Click [here](https://figcommunity.slack.com/join/shared_invite/zt-fupa9n8g-sfHm8MyBn1DBaCj8SoIxSA#/shared-invite/email) to join our slack community.
  Please add @${username} for code!

  [c]: https://github.com/withfig/autocomplete/blob/master/CONTRIBUTING.md
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
