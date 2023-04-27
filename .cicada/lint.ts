import { Job, Pipeline } from "https://deno.land/x/cicada@v0.1.48/mod.ts";

const job = new Job({
  name: "Run Linter",
  image: "node:current",
  steps: ["npm install", "npm run lint"],
});

export default new Pipeline([job], {
  on: {
    pullRequest: "all",
    push: "all",
  },
});
