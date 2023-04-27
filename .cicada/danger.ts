import {
  Job,
  Pipeline,
  Secret,
} from "https://deno.land/x/cicada@v0.1.48/mod.ts";

const DANGER_GH_API_KEY = new Secret("DANGER_GITHUB_API_TOKEN");

const job = new Job({
  name: "Check PR",
  image: "node:current",
  steps: [
    "npm install -g yarn",
    "yarn install --frozen-lockfile",
    {
      run: "yarn danger ci",
      secrets: [DANGER_GH_API_KEY],
    },
    {
      run: "yarn danger ci -d ./dangerfile-greeting.ts",
      secrets: [DANGER_GH_API_KEY],
    },
  ],
});

export default new Pipeline([job], {
  on: {
    pullRequest: "all",
  },
});
