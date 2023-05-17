import { Job, Pipeline } from "https://deno.land/x/cicada@v0.1.48/mod.ts";

const job = new Job({
  name: "Typecheck Files",
  image: "node:current",
  steps: ["npm install", "npm test"],
});

export default new Pipeline([job], {
  on: {
    pullRequest: "all",
    push: "all",
  },
});
